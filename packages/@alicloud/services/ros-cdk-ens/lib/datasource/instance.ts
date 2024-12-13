import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './ens.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instance
 */
export interface InstanceProps {

    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ENS::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instance
 */
export class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DataDisk: Data disk specifications.
     */
    public readonly attrDataDisk: ros.IResolvable;

    /**
     * Attribute EnsRegionId: The node ID. When ScheduleAreaLevel is Region, EnsRegionId is required. When ScheduleAreaLevel is Big,Middle,Small, EnsRegionId is invalid.
     */
    public readonly attrEnsRegionId: ros.IResolvable;

    /**
     * Attribute HostName: The hostname of the instance.
     */
    public readonly attrHostName: ros.IResolvable;

    /**
     * Attribute ImageId: The ID of the image.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceName: The instance name. Example value: test-InstanceName. It must be 2 to 128 characters in length and must start with an uppercase or lowercase letter or a Chinese character. It cannot start with http:// or https. Can contain Chinese, English, numbers, half-width colons (:), underscores (_), periods (.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * Attribute InstanceType: The specification of the instance. Example value: ens.sn1.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * Attribute InternetMaxBandwidthOut: Maximum public network bandwidth. The field type is Long, and the precision may be lost during serialization/deserialization.
     */
    public readonly attrInternetMaxBandwidthOut: ros.IResolvable;

    /**
     * Attribute NetworkId: The ID of the network.
     */
    public readonly attrNetworkId: ros.IResolvable;

    /**
     * Attribute PaymentType: Instance payment method.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute PrivateIpAddress: The private IP address. Can only be used for node-level scheduling. If a private IP address is specified, the number of instances can only be one, and both the private IP address and the vSwitch ID are not empty, the private IP address takes effect.
     */
    public readonly attrPrivateIpAddress: ros.IResolvable;

    /**
     * Attribute SecurityId: ID of the security group to which the instance belongs.
     */
    public readonly attrSecurityId: ros.IResolvable;

    /**
     * Attribute SystemDisk: System Disk Specification. SystemDisk is a non-required parameter when InstanceType is x86_pm,x86_bmi,x86_bm,pc_bmi, or arm_bmi. SystemDisk is a required parameter when instanceType is other specification families.
     */
    public readonly attrSystemDisk: ros.IResolvable;

    /**
     * Attribute VSwitchId: The ID of the vSwitch to which the instance belongs.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrDataDisk = rosInstance.attrDataDisk;
        this.attrEnsRegionId = rosInstance.attrEnsRegionId;
        this.attrHostName = rosInstance.attrHostName;
        this.attrImageId = rosInstance.attrImageId;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrInternetMaxBandwidthOut = rosInstance.attrInternetMaxBandwidthOut;
        this.attrNetworkId = rosInstance.attrNetworkId;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrPrivateIpAddress = rosInstance.attrPrivateIpAddress;
        this.attrSecurityId = rosInstance.attrSecurityId;
        this.attrSystemDisk = rosInstance.attrSystemDisk;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
    }
}
