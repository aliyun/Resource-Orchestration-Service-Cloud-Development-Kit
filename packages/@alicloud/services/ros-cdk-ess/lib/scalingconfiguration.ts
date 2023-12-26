import * as ros from '@alicloud/ros-cdk-core';
import { RosScalingConfiguration } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosScalingConfiguration as ScalingConfigurationProperty };

/**
 * Properties for defining a `ScalingConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingconfiguration
 */
export interface ScalingConfigurationProps {

    /**
     * Property scalingGroupId: Scaling group id to create the scaling configuration.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * Property affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host. Valid values:
     * - **default**: does not associate the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode and the original dedicated host has insufficient resources, the ECS instance is automatically deployed to another dedicated host in the automatic deployment resource pool.
     * - **host**: associates the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the ECS instance fails to start.
     * Default value: **default**
     */
    readonly affinity?: string | ros.IResolvable;

    /**
     * Property cpu: The number of vCPUs.
     * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set CPU to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I\/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
     * **Note**: You can specify **Cpu** and **Memory** to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
     */
    readonly cpu?: number | ros.IResolvable;

    /**
     * Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * Standard: the standard mode.
     * Unlimited: the unlimited mode.
     */
    readonly creditSpecification?: string | ros.IResolvable;

    /**
     * Property dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance. You cannot create preemptible instances on dedicated hosts. If you specify **DedicatedHostId**, **SpotStrategy** and **SpotPriceLimit** are ignored.
     * You can call the **DescribeDedicatedHosts** operation to query dedicated host IDs.
     */
    readonly dedicatedHostId?: string | ros.IResolvable;

    /**
     * Property deploymentSetId: Deployment set ID.
     */
    readonly deploymentSetId?: string | ros.IResolvable;

    /**
     * Property diskMappings: Disk mappings to attach to instance.
     */
    readonly diskMappings?: Array<RosScalingConfiguration.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property hostName: The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
     * Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
     * Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
     */
    readonly hostName?: string | ros.IResolvable;

    /**
     * Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    readonly hpcClusterId?: string | ros.IResolvable;

    /**
     * Property imageFamily: The name of the image family. You can configure this parameter to obtain the latest available images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
     */
    readonly imageFamily?: string | ros.IResolvable;

    /**
     * Property imageId: Image ID to create ecs instance .
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * Property imageName: The name of the image. Each image name must be unique in a region. If you specify **ImageId**, **ImageName** is ignored.
     * You cannot use **ImageName** to specify images that are purchased from Alibaba Cloud Marketplace.
     */
    readonly imageName?: string | ros.IResolvable;

    /**
     * Property imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values:
     * - **true**
     * - **false**
     * Default value: **false**.
     */
    readonly imageOptionsLoginAsNonRoot?: boolean | ros.IResolvable;

    /**
     * Property instanceDescription: The description of the ECS instance. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:\/\/ or https:\/\/.
     */
    readonly instanceDescription?: string | ros.IResolvable;

    /**
     * Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * Property instanceName: The name of the instance launched from the current scaling configuration.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * Property instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria.
     */
    readonly instancePatternInfos?: Array<RosScalingConfiguration.InstancePatternInfosProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property instanceType: ecs supported instance type.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * Property instanceTypeOverrides: The instance types.
     */
    readonly instanceTypeOverrides?: Array<RosScalingConfiguration.InstanceTypeOverridesProperty | ros.IResolvable> | ros.IResolvable;

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
     * Property memory: The memory size. Unit: GiB.
     * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I\/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
     * **Note**: You can specify **Cpu** and **Memory** to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
     */
    readonly memory?: number | ros.IResolvable;

    /**
     * Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * Property passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;

    /**
     * Property privatePoolOptions: Option settings for private pools
     */
    readonly privatePoolOptions?: RosScalingConfiguration.PrivatePoolOptionsProperty | ros.IResolvable;

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
     * Property securityEnhancementStrategy: Specifies whether to enable security hardening. Valid values:
     * - **Active**: enables security hardening. This value is applicable only to public images.
     * - **Deactive**: disables security hardening. This value is applicable to all image types.
     */
    readonly securityEnhancementStrategy?: string | ros.IResolvable;

    /**
     * Property securityGroupId: Security Group to create ecs instance.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration.
     * **Note**: If you specify **SecurityGroupId**, you cannot specify **SecurityGroupIds**.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property spotDuration: The retention period of the preemptible instance. Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * The following retention periods are available in invitational preview: 2, 3, 4, 5, and 6 hours. If you want to set this parameter to one of these values, submit a ticket.
     * If you set this parameter to 0, no protection period is specified for the preemptible instance.
     * Default value: 1
     */
    readonly spotDuration?: number | ros.IResolvable;

    /**
     * Property spotInterruptionBehavior: The interruption mode of the preemptible instance. Default value: Terminate. Set the value to Terminate. This value specifies that the preemptible instance is to be released.
     */
    readonly spotInterruptionBehavior?: string | ros.IResolvable;

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
    readonly spotPriceLimitForInstanceType?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
     * Property systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk. Valid values:
     * - **true**
     * - **false**
     * **Note**: This parameter is available only if you set **SystemDiskCategory** to **cloud_auto**.
     */
    readonly systemDiskBurstingEnabled?: boolean | ros.IResolvable;

    /**
     * Property systemDiskCategories: The categories of the system disks. If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
     * - **cloud**: basic disk
     * - **cloud_efficiency**: ultra disk
     * - **cloud_ssd**: standard SSD
     * - **cloud_essd**: ESSD
     * **Note**: If you specify **SystemDiskCategories**, you cannot specify **SystemDiskCategory**.
     */
    readonly systemDiskCategories?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
     */
    readonly systemDiskCategory?: string | ros.IResolvable;

    /**
     * Property systemDiskDescription: The description of the system disk. The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:\/\/ or https:\/\/.
     */
    readonly systemDiskDescription?: string | ros.IResolvable;

    /**
     * Property systemDiskDiskName: The name of the system disk. The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly systemDiskDiskName?: string | ros.IResolvable;

    /**
     * Property systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk. Valid values:
     * - **AES-256**
     * - **SM4-128**
     * Default value: **AES-256**
     */
    readonly systemDiskEncryptAlgorithm?: string | ros.IResolvable;

    /**
     * Property systemDiskEncrypted: Specifies whether to encrypt the system disk. Valid values:
     * - **true**
     * - **false**
     * Default value: **false**
     */
    readonly systemDiskEncrypted?: boolean | ros.IResolvable;

    /**
     * Property systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk.
     */
    readonly systemDiskKmsKeyId?: string | ros.IResolvable;

    /**
     * Property systemDiskPerformanceLevel: The performance level of an ESSD.
     */
    readonly systemDiskPerformanceLevel?: string | ros.IResolvable;

    /**
     * Property systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk.
     * **Note**: IOPS measures the number of read and write operations that an EBS device can process per second.
     */
    readonly systemDiskProvisionedIops?: number | ros.IResolvable;

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
     * Cannot begin with http:\/\/ or https:\/\/.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:\/\/ or https:\/\/.
     * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>_stack_<stack_id>") if possible.
     */
    readonly tagList?: Array<RosScalingConfiguration.TagListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tenancy: Specifies whether to create an ECS instance on a dedicated host. Valid values:
     * - **default**: does not create an ECS instance on a dedicated host.
     * - **host**: creates an ECS instance on a dedicated host. If you do not specify **DedicatedHostId**, Alibaba Cloud selects a dedicated host for the ECS instance.
     * Default value: **default**
     */
    readonly tenancy?: string | ros.IResolvable;

    /**
     * Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;

    /**
     * Property zoneId: The zone ID of the ECS instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESS::ScalingConfiguration`, which is used to create a scaling configuration for a scaling group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosScalingConfiguration`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingconfiguration
 */
export class ScalingConfiguration extends ros.Resource {

    /**
     * Attribute ScalingConfigurationId: The scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable;

    /**
     * Attribute ScalingGroupId: The id of the scaling group to which the scaling configuration belongs.
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ScalingConfigurationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosScalingConfiguration = new RosScalingConfiguration(this, id,  {
            dedicatedHostId: props.dedicatedHostId,
            scalingConfigurationName: props.scalingConfigurationName,
            resourceGroupId: props.resourceGroupId,
            imageOptionsLoginAsNonRoot: props.imageOptionsLoginAsNonRoot,
            systemDiskDescription: props.systemDiskDescription,
            memory: props.memory,
            systemDiskProvisionedIops: props.systemDiskProvisionedIops,
            cpu: props.cpu,
            systemDiskEncryptAlgorithm: props.systemDiskEncryptAlgorithm,
            ramRoleName: props.ramRoleName,
            privatePoolOptions: props.privatePoolOptions,
            systemDiskPerformanceLevel: props.systemDiskPerformanceLevel,
            imageId: props.imageId,
            systemDiskDiskName: props.systemDiskDiskName,
            hostName: props.hostName,
            loadBalancerWeight: props.loadBalancerWeight,
            instanceId: props.instanceId,
            systemDiskKmsKeyId: props.systemDiskKmsKeyId,
            scalingGroupId: props.scalingGroupId,
            imageFamily: props.imageFamily,
            securityGroupIds: props.securityGroupIds,
            internetChargeType: props.internetChargeType,
            spotInterruptionBehavior: props.spotInterruptionBehavior,
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut,
            instancePatternInfos: props.instancePatternInfos,
            instanceTypeOverrides: props.instanceTypeOverrides,
            affinity: props.affinity,
            securityEnhancementStrategy: props.securityEnhancementStrategy,
            tenancy: props.tenancy,
            diskMappings: props.diskMappings,
            systemDiskSize: props.systemDiskSize,
            userData: props.userData,
            spotDuration: props.spotDuration,
            systemDiskEncrypted: props.systemDiskEncrypted,
            systemDiskAutoSnapshotPolicyId: props.systemDiskAutoSnapshotPolicyId,
            spotPriceLimitForInstanceType: props.spotPriceLimitForInstanceType,
            ipv6AddressCount: props.ipv6AddressCount,
            systemDiskCategories: props.systemDiskCategories,
            spotPriceLimit: props.spotPriceLimit,
            tagList: props.tagList,
            instanceTypes: props.instanceTypes,
            instanceType: props.instanceType,
            spotStrategy: props.spotStrategy,
            passwordInherit: props.passwordInherit,
            password: props.password,
            keyPairName: props.keyPairName,
            ioOptimized: props.ioOptimized,
            zoneId: props.zoneId,
            hpcClusterId: props.hpcClusterId,
            securityGroupId: props.securityGroupId,
            systemDiskCategory: props.systemDiskCategory,
            systemDiskBurstingEnabled: props.systemDiskBurstingEnabled,
            imageName: props.imageName,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn,
            instanceDescription: props.instanceDescription,
            creditSpecification: props.creditSpecification,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosScalingConfiguration;
        this.attrScalingConfigurationId = rosScalingConfiguration.attrScalingConfigurationId;
        this.attrScalingGroupId = rosScalingConfiguration.attrScalingGroupId;
    }
}
