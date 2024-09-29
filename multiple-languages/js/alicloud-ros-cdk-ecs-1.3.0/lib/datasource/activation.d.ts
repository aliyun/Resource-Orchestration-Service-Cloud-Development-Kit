import * as ros from '@alicloud/ros-cdk-core';
import { RosActivation } from './ecs.generated';
export { RosActivation as ActivationProperty };
/**
 * Properties for defining a `Activation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activation
 */
export interface ActivationProps {
    /**
     * Property activationId: Activation code ID.
     */
    readonly activationId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Activation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosActivation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activation
 */
export declare class Activation extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ActivationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ActivationId: Activation code ID.
     */
    readonly attrActivationId: ros.IResolvable;
    /**
     * Attribute CreateTime: The time when the activation code was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DeregisteredCount: The number of instances that have been logged out.
     */
    readonly attrDeregisteredCount: ros.IResolvable;
    /**
     * Attribute Description: The description of the activation code.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute Disabled: Indicates whether the activation code is disabled.
     */
    readonly attrDisabled: ros.IResolvable;
    /**
     * Attribute InstanceCount: The maximum number of times that the activation code can be used to register managed instances.
     */
    readonly attrInstanceCount: ros.IResolvable;
    /**
     * Attribute InstanceName: The default prefix of the instance name.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * Attribute IpAddressRange: The IP address of the host that allows the activation code to be used.
     */
    readonly attrIpAddressRange: ros.IResolvable;
    /**
     * Attribute RegisteredCount: The number of instances that were registered.
     */
    readonly attrRegisteredCount: ros.IResolvable;
    /**
     * Attribute TimeToLiveInHours: The validity period of the activation code. Unit: hours.
     */
    readonly attrTimeToLiveInHours: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ActivationProps, enableResourcePropertyConstraint?: boolean);
}
