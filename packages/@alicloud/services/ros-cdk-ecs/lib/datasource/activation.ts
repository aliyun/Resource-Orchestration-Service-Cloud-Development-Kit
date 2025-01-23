import * as ros from '@alicloud/ros-cdk-core';
import { RosActivation } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `Activation`.
 */
export interface IActivation extends ros.IResource {
    readonly props: ActivationProps;

    /**
     * Attribute ActivationId: Activation code ID.
     */
    readonly attrActivationId: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the activation code was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DeregisteredCount: The number of instances that have been logged out.
     */
    readonly attrDeregisteredCount: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the activation code.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Disabled: Indicates whether the activation code is disabled.
     */
    readonly attrDisabled: ros.IResolvable | string;

    /**
     * Attribute InstanceCount: The maximum number of times that the activation code can be used to register managed instances.
     */
    readonly attrInstanceCount: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The default prefix of the instance name.
     */
    readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute IpAddressRange: The IP address of the host that allows the activation code to be used.
     */
    readonly attrIpAddressRange: ros.IResolvable | string;

    /**
     * Attribute RegisteredCount: The number of instances that were registered.
     */
    readonly attrRegisteredCount: ros.IResolvable | string;

    /**
     * Attribute TimeToLiveInHours: The validity period of the activation code. Unit: hours.
     */
    readonly attrTimeToLiveInHours: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::Activation`, which is used to query the information about an activation code.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosActivation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activation
 */
export class Activation extends ros.Resource implements IActivation {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ActivationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ActivationId: Activation code ID.
     */
    public readonly attrActivationId: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the activation code was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DeregisteredCount: The number of instances that have been logged out.
     */
    public readonly attrDeregisteredCount: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the activation code.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Disabled: Indicates whether the activation code is disabled.
     */
    public readonly attrDisabled: ros.IResolvable | string;

    /**
     * Attribute InstanceCount: The maximum number of times that the activation code can be used to register managed instances.
     */
    public readonly attrInstanceCount: ros.IResolvable | string;

    /**
     * Attribute InstanceName: The default prefix of the instance name.
     */
    public readonly attrInstanceName: ros.IResolvable | string;

    /**
     * Attribute IpAddressRange: The IP address of the host that allows the activation code to be used.
     */
    public readonly attrIpAddressRange: ros.IResolvable | string;

    /**
     * Attribute RegisteredCount: The number of instances that were registered.
     */
    public readonly attrRegisteredCount: ros.IResolvable | string;

    /**
     * Attribute TimeToLiveInHours: The validity period of the activation code. Unit: hours.
     */
    public readonly attrTimeToLiveInHours: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ActivationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosActivation = new RosActivation(this, id,  {
            activationId: props.activationId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosActivation;
        this.attrActivationId = rosActivation.attrActivationId;
        this.attrCreateTime = rosActivation.attrCreateTime;
        this.attrDeregisteredCount = rosActivation.attrDeregisteredCount;
        this.attrDescription = rosActivation.attrDescription;
        this.attrDisabled = rosActivation.attrDisabled;
        this.attrInstanceCount = rosActivation.attrInstanceCount;
        this.attrInstanceName = rosActivation.attrInstanceName;
        this.attrIpAddressRange = rosActivation.attrIpAddressRange;
        this.attrRegisteredCount = rosActivation.attrRegisteredCount;
        this.attrTimeToLiveInHours = rosActivation.attrTimeToLiveInHours;
    }
}
