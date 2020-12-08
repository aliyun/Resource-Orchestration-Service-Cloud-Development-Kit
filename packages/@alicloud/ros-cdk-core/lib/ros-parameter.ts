import { RosElement } from './ros-element';
import { Construct } from './construct-compat';
import { RosReference } from './private/ros-reference';
import { IResolvable, IResolveContext } from './resolvable';
import { Token } from './token';

export enum RosParameterType {
  STRING = 'String',
  NUMBER = 'Number',
  JSON = 'Json',
  BOOLEAN = 'Boolean',
  COMMAD_ELIMITED_LIST = 'CommaDelimitedList',
}

export interface RosParameterProps {
  readonly type?: RosParameterType;
  readonly defaultValue?: any;
  readonly allowedPattern?: string;
  readonly allowedValues?: any[];
  readonly constraintDescription?: string;
  readonly description?: string;
  readonly maxLength?: number;
  readonly maxValue?: number;
  readonly minLength?: number;
  readonly minValue?: number;
  readonly noEcho?: boolean;

  readonly label?: string;
  readonly associationProperty?: string;
  readonly confirm?: boolean;
}

/**
 * A ROS parameter.
 *
 * Parameters enable you to input custom values to your template each time you create or
 * update a stack.
 */
export class RosParameter extends RosElement { 
  public static readonly ASSOCIATION_PROPERTY_ALLOWED_VALUES: string[] = [
    'ALIYUN::ECS::Instance::ImageId',
    'ALIYUN::ECS::Instance::ZoneId',
    'ALIYUN::ECS::VPC::VPCId',
    'ALIYUN::ECS::VSwitch::VSwitchId',
  ];

  public static readonly TYPE_ALLOWED_VALUES: string[] = ['String', 'Number', 'CommaDelimitedList', 'Json', 'Boolean'];

  private readonly type: RosParameterType;
  private readonly id: string;

  constructor(scope: Construct, id: string, private readonly props: RosParameterProps = {}) {
    super(scope, id);
    this.id = id;
    this.type = props.type || RosParameterType.STRING;
    this.validateProperties(props);
  }

  /**
   * Indicates if this parameter is configured with "NoEcho" enabled.
   */
  public get noEcho(): boolean {
    return !!this.props.noEcho;
  }

  /**
   * The parameter value as a Token
   */
  public get value(): IResolvable {
    return RosReference.for(this, 'Ref');
  }

  /**
   * The parameter value, if it represents a string.
   */
  public get valueAsString(): string {
    if (!isStringType(this.type)) {
      throw new Error(`Parameter type (${this.type}) is not a string type`);
    }
    return Token.asString(this.value);
  }

  /**
   * The parameter value, if it represents a string.
   */
  public get valueAsBoolean(): any {
    if (!isStringType(this.type)) {
      throw new Error(`Parameter type (${this.type}) is not a string type`);
    }
    return Token.asAny(this.value);
  }

  /**
   * The parameter value, if it represents a string.
   */
  public get valueAsAny(): any {
    return Token.asAny(this.value);
  }

  /**
   * The parameter value, if it represents a string list.
   */
  public get valueAsList(): string[] {
    if (!isListType(this.type)) {
      throw new Error(`Parameter type (${this.type}) is not a string list type`);
    }
    return Token.asList(this.value);
  }

  /**
   * The parameter value, if it represents a number.
   */
  public get valueAsNumber(): number {
    if (!isNumberType(this.type)) {
      throw new Error(`Parameter type (${this.type}) is not a number type`);
    }
    return Token.asNumber(this.value);
  }

  /**
   * @internal
   */
  public _toRosTemplate(): object {
    return {
      Parameters: {
        [this.id]: {
          Type: this.type,
          Default: this.props.defaultValue,
          AllowedPattern: this.props.allowedPattern,
          AllowedValues: this.props.allowedValues,
          ConstraintDescription: this.props.constraintDescription,
          Description: this.props.description,
          MaxLength: this.props.maxLength,
          MaxValue: this.props.maxValue,
          MinLength: this.props.minLength,
          MinValue: this.props.minValue,
          NoEcho: this.props.noEcho,
          Label: this.props.label,
          AssociationProperty: this.props.associationProperty,
          Confirm: this.props.confirm,
        },
      },
    };
  }

  public resolve(_context: IResolveContext): any {
    return this.value;
  }

  public validateProperties(props: RosParameterProps = {}): void {
    // check whether the required properties is in parameter(props)
    requireProperty(props, 'type', this);
    // check whether the associationProperty is allowed value
    isAllowedValue(props, 'associationProperty', this, RosParameter.ASSOCIATION_PROPERTY_ALLOWED_VALUES);
    // check the type of this parameter is allowed
    isAllowedValue(props, 'type', this, RosParameter.TYPE_ALLOWED_VALUES);
    // check whether the max length of string is larger than the min length
    if (props.maxLength && props.minLength && props.maxLength < props.minLength) {
      throw new Error(`The max length of string of the parameter ${this.toString()} is lower than its min length.`);
    }
    // check whether the max value of this parameter is larger than the min value
    if (props.maxValue && props.minValue && props.maxValue < props.minValue) {
      throw new Error(`The max value of the parameter ${this.toString()} is lower than its min value.`);
    }
    // check whether the "confirm" property is allowed to be set "true"
    if (props.confirm && (props.type !== 'String' || !props.noEcho)) {
      throw new Error(
        `The property "confirm" of the parameter ${this.toString()} could be true only if type is "String" and "noEcho" is true.`,
      );
    }
  }
}

export namespace RosParameter {
  export class AssociationProperty {
    public static readonly ZONE_ID = 'ALIYUN::ECS::Instance::ZoneId';
    public static readonly VPC_ID = 'ALIYUN::ECS::VPC::VPCId';
    public static readonly IMAGE_ID = 'ALIYUN::ECS::Instance::ImageId';
    public static readonly VSWITCH_ID = 'ALIYUN::ECS::VSwitch::VSwitchId';
  } 
}

/**
 * Whether the given parameter type looks like a list type
 */
function isListType(type: string) {
  return type.indexOf('List<') >= 0 || type.indexOf('CommaDelimitedList') >= 0;
}

/**
 * Whether the given parameter type looks like a number type
 */
function isNumberType(type: string) {
  return type === 'Number';
}

/**
 * Whether the given parameter type looks like a string type
 */
function isStringType(type: string) {
  return !isListType(type) && !isNumberType(type);
}

import { requireProperty } from './runtime';
import { isAllowedValue } from './util';
