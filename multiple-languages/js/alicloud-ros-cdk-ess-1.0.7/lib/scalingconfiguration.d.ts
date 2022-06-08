import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingConfiguration } from './ess.generated';
export { RosScalingConfiguration as ScalingConfigurationProperty };
/**
 * Properties for defining a `ALIYUN::ESS::ScalingConfiguration`
 */
export interface ScalingConfigurationProps {
    /**
     * Property scalingGroupId: Scaling group id to create the scaling configuration.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * Standard: the standard mode.
     * Unlimited: the unlimited mode.
     */
    readonly creditSpecification?: string | ros.IResolvable;
    /**
     * Property deploymentSetId: Deployment set ID.
     */
    readonly deploymentSetId?: string | ros.IResolvable;
    /**
     * Property diskMappings: Disk mappings to attach to instance.
     */
    readonly diskMappings?: Array<RosScalingConfiguration.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    readonly hpcClusterId?: string | ros.IResolvable;
    /**
     * Property imageFamily: The name of the image family. You can configure this parameter to obtain the latest available custom images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
     */
    readonly imageFamily?: string | ros.IResolvable;
    /**
     * Property imageId: Image ID to create ecs instance .
     */
    readonly imageId?: string | ros.IResolvable;
    /**
     * Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property instanceName: The name of the instance launched from the current scaling configuration.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * Property instanceType: ecs supported instance type.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * Property instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
     */
    readonly instanceTypes?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number | ros.IResolvable;
    /**
     * Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
     * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
     * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;
    /**
     * Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
     */
    readonly ioOptimized?: string | ros.IResolvable;
    /**
     * Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;
    /**
     * Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;
    /**
     * Property loadBalancerWeight: The weight of the ECS instance as a backend server. Valid values: 1 to 100.
     * Default value: 50.
     */
    readonly loadBalancerWeight?: number | ros.IResolvable;
    /**
     * Property passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;
    /**
     * Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property scalingConfigurationName: Name of created scaling configuration.
     */
    readonly scalingConfigurationName?: string | ros.IResolvable;
    /**
     * Property securityGroupId: Security Group to create ecs instance.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * Property spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
     */
    readonly spotPriceLimit?: number | ros.IResolvable;
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
    readonly spotPriceLimitForInstanceType?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
     * NoSpot: Normal pay-per-use instance
     * SpotWithPriceLimit: Set a preemptive instance of the cap price
     * SpotAsPriceGo: System automatic bidding, following the current market actual price
     * Default: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;
    /**
     * Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string | ros.IResolvable;
    /**
     * Property systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    readonly systemDiskCategory?: string | ros.IResolvable;
    /**
     * Property systemDiskPerformanceLevel: The performance level of an ESSD.
     */
    readonly systemDiskPerformanceLevel?: string | ros.IResolvable;
    /**
     * Property systemDiskSize: Size of system disk. Unit is GB.
     */
    readonly systemDiskSize?: number | ros.IResolvable;
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
    readonly userData?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ESS::ScalingConfiguration`
 */
export declare class ScalingConfiguration extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ScalingConfigurationId: The scaling configuration id
     */
    readonly attrScalingConfigurationId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ESS::ScalingConfiguration`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingConfigurationProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=scalingconfiguration.d.ts.map