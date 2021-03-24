import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingConfiguration } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosScalingConfiguration as ScalingConfigurationProperty };

/**
 * Properties for defining a `ALIYUN::ESS::ScalingConfiguration`
 */
export interface ScalingConfigurationProps {

    /**
     * Property scalingGroupId: Scaling group id to create the scaling configuration.
     */
    readonly scalingGroupId: string;

    /**
     * Property deploymentSetId: Deployment set ID.
     */
    readonly deploymentSetId?: string;

    /**
     * Property diskMappings: Disk mappings to attach to instance.
     */
    readonly diskMappings?: Array<RosScalingConfiguration.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    readonly hpcClusterId?: string;

    /**
     * Property imageId: Image ID to create ecs instance .
     */
    readonly imageId?: string;

    /**
     * Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
     */
    readonly instanceId?: string;

    /**
     * Property instanceName: The name of the instance launched from the current scaling configuration.
     */
    readonly instanceName?: string;

    /**
     * Property instanceType: ecs supported instance type.
     */
    readonly instanceType?: string;

    /**
     * Property instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
     */
    readonly instanceTypes?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    readonly internetChargeType?: string;

    /**
     * Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number;

    /**
     * Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
     * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
     * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
     */
    readonly internetMaxBandwidthOut?: number;

    /**
     * Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
     */
    readonly ioOptimized?: string;

    /**
     * Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string;

    /**
     * Property passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;

    /**
     * Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * Property scalingConfigurationName: Name of created scaling configuration.
     */
    readonly scalingConfigurationName?: string;

    /**
     * Property securityGroupId: Security Group to create ecs instance.
     */
    readonly securityGroupId?: string;

    /**
     * Property spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
     */
    readonly spotPriceLimit?: number;

    /**
     * Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
     * The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 50 items can be specified.
     * Key
     * 	ecs instance type
     * Value
     * 	Supports a maximum of 3 decimal places.
     */
    readonly spotPriceLimitForInstanceType?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
     * NoSpot: Normal pay-per-use instance
     * SpotWithPriceLimit: Set a preemptive instance of the cap price
     * SpotAsPriceGo: System automatic bidding, following the current market actual price
     * Default: NoSpot.
     */
    readonly spotStrategy?: string;

    /**
     * Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string;

    /**
     * Property systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    readonly systemDiskCategory?: string;

    /**
     * Property systemDiskPerformanceLevel: The performance level of an ESSD.
     */
    readonly systemDiskPerformanceLevel?: string;

    /**
     * Property systemDiskSize: Size of system disk. Unit is GB.
     */
    readonly systemDiskSize?: number;

    /**
     * Property tagList: The tags of an instance in list format.
     * Do not use with Tags at the same time.
     * You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
     * At most 20 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>_stack_<stack_id>") if possible.
     */
    readonly tagList?: Array<RosScalingConfiguration.TagListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingConfiguration`
 */
export class ScalingConfiguration extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ScalingConfigurationId: The scaling configuration id
     */
    public readonly attrScalingConfigurationId: any;

    /**
     * Create a new `ALIYUN::ESS::ScalingConfiguration`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingConfigurationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosScalingConfiguration = new RosScalingConfiguration(this, id,  {
            scalingConfigurationName: props.scalingConfigurationName,
            diskMappings: props.diskMappings,
            resourceGroupId: props.resourceGroupId,
            systemDiskSize: props.systemDiskSize,
            userData: props.userData,
            systemDiskAutoSnapshotPolicyId: props.systemDiskAutoSnapshotPolicyId,
            ramRoleName: props.ramRoleName,
            systemDiskPerformanceLevel: props.systemDiskPerformanceLevel,
            spotPriceLimitForInstanceType: props.spotPriceLimitForInstanceType,
            imageId: props.imageId,
            spotPriceLimit: props.spotPriceLimit,
            tagList: props.tagList,
            instanceTypes: props.instanceTypes,
            instanceType: props.instanceType,
            spotStrategy: props.spotStrategy,
            passwordInherit: props.passwordInherit,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized,
            instanceId: props.instanceId,
            hpcClusterId: props.hpcClusterId,
            scalingGroupId: props.scalingGroupId,
            securityGroupId: props.securityGroupId,
            internetChargeType: props.internetChargeType,
            systemDiskCategory: props.systemDiskCategory,
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingConfiguration;
        this.attrScalingConfigurationId = rosScalingConfiguration.attrScalingConfigurationId;
    }
}
