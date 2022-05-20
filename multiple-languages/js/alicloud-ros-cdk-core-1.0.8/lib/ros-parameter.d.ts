import { RosElement } from './ros-element';
import { Construct } from './construct-compat';
import { IResolvable, IResolveContext } from './resolvable';
export declare enum RosParameterType {
    STRING = "String",
    NUMBER = "Number",
    JSON = "Json",
    BOOLEAN = "Boolean",
    COMMAD_ELIMITED_LIST = "CommaDelimitedList",
    OOS_PARAMETER = "ALIYUN::OOS::Parameter::Value",
    OOS_SECRET_PARAMETER = "ALIYUN::OOS::SecretParameter::Value"
}
export interface RosParameterProps {
    readonly type?: RosParameterType;
    readonly defaultValue?: any;
    readonly allowedPattern?: string;
    readonly allowedValues?: any[];
    readonly constraintDescription?: string | {
        [key: string]: string;
    };
    readonly description?: string | {
        [key: string]: string;
    };
    readonly maxLength?: number;
    readonly maxValue?: number;
    readonly minLength?: number;
    readonly minValue?: number;
    readonly noEcho?: boolean;
    readonly label?: string;
    readonly associationProperty?: string;
    readonly associationPropertyMetadata?: {
        [key: string]: any;
    };
    readonly confirm?: boolean;
    readonly textArea?: boolean;
}
/**
 * A ROS parameter.
 *
 * Parameters enable you to input custom values to your template each time you create or
 * update a stack.
 */
export declare class RosParameter extends RosElement {
    private readonly props;
    static readonly ASSOCIATION_PROPERTY_ALLOWED_VALUES: string[];
    static readonly TYPE_ALLOWED_VALUES: string[];
    private readonly type;
    private readonly id;
    constructor(scope: Construct, id: string, props?: RosParameterProps);
    /**
     * Indicates if this parameter is configured with "NoEcho" enabled.
     */
    get noEcho(): boolean;
    /**
     * The parameter value as a Token
     */
    get value(): IResolvable;
    /**
     * The parameter value, if it represents a string.
     */
    get valueAsString(): string;
    /**
     * The parameter value, if it represents a string.
     */
    get valueAsBoolean(): any;
    /**
     * The parameter value, if it represents a string.
     */
    get valueAsAny(): any;
    /**
     * The parameter value, if it represents a string list.
     */
    get valueAsList(): string[];
    /**
     * The parameter value, if it represents a number.
     */
    get valueAsNumber(): number;
    /**
     * @internal
     */
    _toRosTemplate(): object;
    resolve(_context: IResolveContext): any;
    validateProperties(props?: RosParameterProps): void;
}
export declare namespace RosParameter {
    class AssociationProperty {
        static readonly ZONE_ID = "ALIYUN::ECS::Instance::ZoneId";
        static readonly VPC_ID = "ALIYUN::ECS::VPC::VPCId";
        static readonly IMAGE_ID = "ALIYUN::ECS::Instance::ImageId";
        static readonly VSWITCH_ID = "ALIYUN::ECS::VSwitch::VSwitchId";
        static readonly ECS_INSTANCE_TYPE = "ALIYUN::ECS::Instance::InstanceType";
        static readonly SECURITY_GROUP_ID = "ALIYUN::ECS::SecurityGroup::SecurityGroupId";
        static readonly RAM_ROLE = "ALIYUN::RAM::Role";
        static readonly RAM_USER = "ALIYUN::RAM::User";
        static readonly ECS_KEY_PAIR_NAME = "ALIYUN::ECS::KeyPair::KeyPairName";
    }
}
//# sourceMappingURL=ros-parameter.d.ts.map