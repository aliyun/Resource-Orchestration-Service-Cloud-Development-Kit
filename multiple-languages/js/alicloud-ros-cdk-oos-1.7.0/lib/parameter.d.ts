import * as ros from '@alicloud/ros-cdk-core';
import { RosParameter } from './oos.generated';
export { RosParameter as ParameterProperty };
/**
 * Properties for defining a `Parameter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-parameter
 */
export interface ParameterProps {
    /**
     * Property name: The name of the parameter.
     * The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
     * It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property type: The data type of the common parameter.
     * Valid values: String and StringList.
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property value: The value of the parameter.
     * The value must be 1 to 4096 characters in length.
     */
    readonly value: string | ros.IResolvable;
    /**
     * Property constraints: The constraints of the parameter.
     * By default, this parameter is null. Valid values:
     * AllowedValues: The value that is allowed for the parameter. It must be an array string.
     * AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
     * MinLength: The minimum length of the parameter.
     * MaxLength: The maximum length of the parameter.
     */
    readonly constraints?: string | ros.IResolvable;
    /**
     * Property description: The description of the parameter.
     * The description must be 1 to 200 characters in length.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `Parameter`.
 */
export interface IParameter extends ros.IResource {
    readonly props: ParameterProps;
    /**
     * Attribute Name: The Name of the parameter.
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Attribute Value: The Value of the parameter.
     */
    readonly attrValue: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::Parameter`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosParameter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-parameter
 */
export declare class Parameter extends ros.Resource implements IParameter {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ParameterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Name: The Name of the parameter.
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Attribute Value: The Value of the parameter.
     */
    readonly attrValue: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ParameterProps, enableResourcePropertyConstraint?: boolean);
}
