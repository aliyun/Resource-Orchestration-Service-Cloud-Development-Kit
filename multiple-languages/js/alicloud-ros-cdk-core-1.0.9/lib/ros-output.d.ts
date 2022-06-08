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
export declare class RosOutput extends RosElement {
    private readonly _description?;
    private _condition?;
    private readonly _value?;
    private readonly _export?;
    /**
     * Creates an RosOutput value for this stack.
     * @param scope The parent construct.
     * @param props RosOutput properties.
     */
    constructor(scope: Construct, id: string, props: RosOutputProps);
    /**
     * @internal
     */
    _toRosTemplate(): object;
    addCondition(condition: RosCondition): void;
}
import { RosCondition } from "./ros-condition";
//# sourceMappingURL=ros-output.d.ts.map