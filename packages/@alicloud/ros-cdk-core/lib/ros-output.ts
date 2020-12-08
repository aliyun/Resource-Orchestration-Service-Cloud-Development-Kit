import { Construct } from "./construct-compat";
import { RosElement } from "./ros-element";

export interface RosOutputProps {
  /**
   * A String type that describes the output value.
   * The description can be a maximum of 4 K in length.
   *
   * @default - No description.
   */
  readonly description?: string;

  /**
   * The value of the property returned by Resource Orchestration Service.
   * The value of an output can include literals, parameter references, pseudo-parameters,
   * a mapping value, or intrinsic functions.
   */
  readonly value: any;

  /**
   * The name used to export the value of this output across stacks.
   *
   * To import the value from another stack, use `Fn.importValue(exportName)`.
   *
   * @default - the output is not exported
   */
  readonly exportName?: string;

  /**
   * A condition to associate with this output value. If the condition evaluates
   * to `false`, this output value will not be included in the stack.
   *
   * @default - No condition is associated with the output.
   */
  readonly condition?: RosCondition;
}

export class RosOutput extends RosElement {
  private readonly _description?: string;
  private _condition?: RosCondition;
  private readonly _value?: any;
  private readonly _export?: string;

  /**
   * Creates an RosOutput value for this stack.
   * @param scope The parent construct.
   * @param props RosOutput properties.
   */
  constructor(scope: Construct, id: string, props: RosOutputProps) {
    super(scope, id);

    if (props.value === undefined) {
      throw new Error(
        `Missing value for ROS output at path "${this.node.path}"`
      );
    }

    this._description = props.description;
    this._value = props.value;
    this._condition = props.condition;
    this._export = props.exportName;
  }

  /**
   * @internal
   */
  public _toRosTemplate(): object {
    return {
      Outputs: {
        [this.logicalId]: {
          Description: this._description,
          Value: this._value,
          Export: this._export != null ? { Name: this._export } : undefined,
          Condition: this._condition ? this._condition.logicalId : undefined,
        },
      },
    };
  }

  public addCondition(condition: RosCondition) {
    this._condition = condition;
  }
}

import { RosCondition } from "./ros-condition";
