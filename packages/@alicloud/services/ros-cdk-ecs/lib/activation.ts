import * as ros from '@alicloud/ros-cdk-core';
import { RosActivation } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosActivation as ActivationProperty };

/**
 * Properties for defining a `ALIYUN::ECS::Activation`
 */
export interface ActivationProps {

    /**
     * Property description: The description of the activation code. It must be 1 to 100 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property instanceCount: The maximum number of times that you can use the activation code to register managed instances. Valid values: 1 to 1000.Default value: 10.
     */
    readonly instanceCount?: number | ros.IResolvable;

    /**
     * Property instanceName: The default instance name prefix. The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName>-<Number> is generated. The number of digits in the <Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code. The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
     */
    readonly ipAddressRange?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosActivation.TagsProperty[];

    /**
     * Property timeToLiveInHours: The validity period of the activation code. The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
     */
    readonly timeToLiveInHours?: number | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::Activation`
 */
export class Activation extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ActivationCode: Activation code.
     */
    public readonly attrActivationCode: ros.IResolvable;

    /**
     * Attribute ActivationId: Activation code ID.
     */
    public readonly attrActivationId: ros.IResolvable;

    /**
     * Attribute DeregisteredCount: The number of instances that have been logged out.
     */
    public readonly attrDeregisteredCount: ros.IResolvable;

    /**
     * Attribute RegisteredCount: The number of registered instances.
     */
    public readonly attrRegisteredCount: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECS::Activation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ActivationProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosActivation = new RosActivation(this, id,  {
            instanceName: props.instanceName,
            instanceCount: props.instanceCount,
            description: props.description,
            timeToLiveInHours: props.timeToLiveInHours,
            ipAddressRange: props.ipAddressRange,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosActivation;
        this.attrActivationCode = rosActivation.attrActivationCode;
        this.attrActivationId = rosActivation.attrActivationId;
        this.attrDeregisteredCount = rosActivation.attrDeregisteredCount;
        this.attrRegisteredCount = rosActivation.attrRegisteredCount;
    }
}
