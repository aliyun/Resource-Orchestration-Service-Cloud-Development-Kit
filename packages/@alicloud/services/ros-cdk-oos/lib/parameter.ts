import * as ros from '@alicloud/ros-cdk-core';
import { RosParameter } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::Parameter`, which is used to create a common parameter.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosParameter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-parameter
 */
export class Parameter extends ros.Resource {

    /**
     * Attribute Name: The Name of the parameter.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Attribute Value: The Value of the parameter.
     */
    public readonly attrValue: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ParameterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosParameter = new RosParameter(this, id,  {
            type: props.type,
            description: props.description,
            constraints: props.constraints,
            resourceGroupId: props.resourceGroupId,
            value: props.value,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosParameter;
        this.attrName = rosParameter.attrName;
        this.attrValue = rosParameter.attrValue;
    }
}
