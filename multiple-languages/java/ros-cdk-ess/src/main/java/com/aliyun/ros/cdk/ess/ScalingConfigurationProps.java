package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>ScalingConfiguration</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalingconfiguration
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.754Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScalingConfigurationProps")
@software.amazon.jsii.Jsii.Proxy(ScalingConfigurationProps.Jsii$Proxy.class)
public interface ScalingConfigurationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property scalingGroupId: Scaling group id to create the scaling configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     * Property affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>default</strong>: does not associate the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode and the original dedicated host has insufficient resources, the ECS instance is automatically deployed to another dedicated host in the automatic deployment resource pool.</li>
     * <li><strong>host</strong>: associates the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the ECS instance fails to start.
     * Default value: <strong>default</strong></li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAffinity() {
        return null;
    }

    /**
     * Property cpu: The number of vCPUs.
     * <p>
     * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set CPU to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
     * <strong>Note</strong>: You can specify <strong>Cpu</strong> and <strong>Memory</strong> to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return null;
    }

    /**
     * Property creditSpecification: The performance mode of the burstable instance.
     * <p>
     * Valid values:
     * Standard: the standard mode.
     * Unlimited: the unlimited mode.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreditSpecification() {
        return null;
    }

    /**
     * Property dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance.
     * <p>
     * You cannot create preemptible instances on dedicated hosts. If you specify <strong>DedicatedHostId</strong>, <strong>SpotStrategy</strong> and <strong>SpotPriceLimit</strong> are ignored.
     * You can call the <strong>DescribeDedicatedHosts</strong> operation to query dedicated host IDs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostId() {
        return null;
    }

    /**
     * Property deploymentSetId: Deployment set ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetId() {
        return null;
    }

    /**
     * Property diskMappings: Disk mappings to attach to instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskMappings() {
        return null;
    }

    /**
     * Property hostName: The hostname of the ECS instance.
     * <p>
     * The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
     * Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
     * Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
        return null;
    }

    /**
     * Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHpcClusterId() {
        return null;
    }

    /**
     * Property imageFamily: The name of the image family.
     * <p>
     * You can configure this parameter to obtain the latest available images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageFamily() {
        return null;
    }

    /**
     * Property imageId: Image ID to create ecs instance .
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     * Property imageName: The name of the image.
     * <p>
     * Each image name must be unique in a region. If you specify <strong>ImageId</strong>, <strong>ImageName</strong> is ignored.
     * You cannot use <strong>ImageName</strong> to specify images that are purchased from Alibaba Cloud Marketplace.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageName() {
        return null;
    }

    /**
     * Property imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values: - <strong>true</strong> - <strong>false</strong> Default value: <strong>false</strong>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageOptionsLoginAsNonRoot() {
        return null;
    }

    /**
     * Property instanceDescription: The description of the ECS instance.
     * <p>
     * The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceDescription() {
        return null;
    }

    /**
     * Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property instanceName: The name of the instance launched from the current scaling configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstancePatternInfos() {
        return null;
    }

    /**
     * Property instanceType: ecs supported instance type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     * Property instanceTypeOverrides: The instance types.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceTypeOverrides() {
        return null;
    }

    /**
     * Property instanceTypes: ecs supported instance types.
     * <p>
     * Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceTypes() {
        return null;
    }

    /**
     * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     * Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second).
     * <p>
     * The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthIn() {
        return null;
    }

    /**
     * Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
     * <p>
     * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
     * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
        return null;
    }

    /**
     * Property ioOptimized: The 'optimized' instance can provide better IO performance.
     * <p>
     * Support 'none' and 'optimized' only, default is 'none'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return null;
    }

    /**
     * Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return null;
    }

    /**
     * Property keyPairName: SSH key pair name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     * Property loadBalancerWeight: The weight of the ECS instance as a backend server.
     * <p>
     * Valid values: 1 to 100.
     * Default value: 50.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerWeight() {
        return null;
    }

    /**
     * Property memory: The memory size.
     * <p>
     * Unit: GiB.
     * You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
     * <strong>Note</strong>: You can specify <strong>Cpu</strong> and <strong>Memory</strong> to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
        return null;
    }

    /**
     * Property password: Password of created ecs instance.
     * <p>
     * Must contain at least 3 types of special character, lower character, upper character, number.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     * Property passwordInherit: Whether to use the password pre-configured in the image you select or not.
     * <p>
     * When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPasswordInherit() {
        return null;
    }

    /**
     * Property privatePoolOptions: Option settings for private pools.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivatePoolOptions() {
        return null;
    }

    /**
     * Property ramRoleName: Instance RAM role name.
     * <p>
     * The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRamRoleName() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property scalingConfigurationName: Name of created scaling configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingConfigurationName() {
        return null;
    }

    /**
     * Property securityEnhancementStrategy: Specifies whether to enable security hardening.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>Active</strong>: enables security hardening. This value is applicable only to public images.</li>
     * <li><strong>Deactive</strong>: disables security hardening. This value is applicable to all image types.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityEnhancementStrategy() {
        return null;
    }

    /**
     * Property securityGroupId: Security Group to create ecs instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration.
     * <p>
     * <strong>Note</strong>: If you specify <strong>SecurityGroupId</strong>, you cannot specify <strong>SecurityGroupIds</strong>.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
        return null;
    }

    /**
     * Property spotDuration: The retention period of the preemptible instance.
     * <p>
     * Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
     * The following retention periods are available in invitational preview: 2, 3, 4, 5, and 6 hours. If you want to set this parameter to one of these values, submit a ticket.
     * If you set this parameter to 0, no protection period is specified for the preemptible instance.
     * Default value: 1
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotDuration() {
        return null;
    }

    /**
     * Property spotInterruptionBehavior: The interruption mode of the preemptible instance.
     * <p>
     * Default value: Terminate. Set the value to Terminate. This value specifies that the preemptible instance is to be released.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotInterruptionBehavior() {
        return null;
    }

    /**
     * Property spotPriceLimit: Set the hourly maximum price for the instance.
     * <p>
     * Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return null;
    }

    /**
     * Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
     * <p>
     * The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 50 items can be specified.
     * Key
     * ecs instance type
     * Value
     * Supports a maximum of 3 decimal places.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimitForInstanceType() {
        return null;
    }

    /**
     * Property spotStrategy: Preemption strategy for post-paid instances.
     * <p>
     * It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
     * NoSpot: Normal pay-per-use instance
     * SpotWithPriceLimit: Set a preemptive instance of the cap price
     * SpotAsPriceGo: System automatic bidding, following the current market actual price
     * Default: NoSpot.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return null;
    }

    /**
     * Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskAutoSnapshotPolicyId() {
        return null;
    }

    /**
     * Property systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>true</strong></li>
     * <li><strong>false</strong>
     * <strong>Note</strong>: This parameter is available only if you set <strong>SystemDiskCategory</strong> to <strong>cloud_auto</strong>.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskBurstingEnabled() {
        return null;
    }

    /**
     * Property systemDiskCategories: The categories of the system disks.
     * <p>
     * If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
     * <p>
     * <ul>
     * <li><strong>cloud</strong>: basic disk</li>
     * <li><strong>cloud_efficiency</strong>: ultra disk</li>
     * <li><strong>cloud_ssd</strong>: standard SSD</li>
     * <li><strong>cloud_essd</strong>: ESSD
     * <strong>Note</strong>: If you specify <strong>SystemDiskCategories</strong>, you cannot specify <strong>SystemDiskCategory</strong>.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategories() {
        return null;
    }

    /**
     * Property systemDiskCategory: Category of system disk.
     * <p>
     * Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
        return null;
    }

    /**
     * Property systemDiskDescription: The description of the system disk.
     * <p>
     * The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDescription() {
        return null;
    }

    /**
     * Property systemDiskDiskName: The name of the system disk.
     * <p>
     * The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDiskName() {
        return null;
    }

    /**
     * Property systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>AES-256</strong></li>
     * <li><strong>SM4-128</strong>
     * Default value: <strong>AES-256</strong></li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskEncryptAlgorithm() {
        return null;
    }

    /**
     * Property systemDiskEncrypted: Specifies whether to encrypt the system disk.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>true</strong></li>
     * <li><strong>false</strong>
     * Default value: <strong>false</strong></li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskEncrypted() {
        return null;
    }

    /**
     * Property systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskKmsKeyId() {
        return null;
    }

    /**
     * Property systemDiskPerformanceLevel: The performance level of an ESSD.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskPerformanceLevel() {
        return null;
    }

    /**
     * Property systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk.
     * <p>
     * <strong>Note</strong>: IOPS measures the number of read and write operations that an EBS device can process per second.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskProvisionedIops() {
        return null;
    }

    /**
     * Property systemDiskSize: Size of system disk.
     * <p>
     * Unit is GB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskSize() {
        return null;
    }

    /**
     * Property tagList: The tags of an instance in list format.
     * <p>
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
     * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"&lt;resource_name&gt;<em>stack</em>&lt;stack_id&gt;") if possible.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagList() {
        return null;
    }

    /**
     * Property tenancy: Specifies whether to create an ECS instance on a dedicated host.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>default</strong>: does not create an ECS instance on a dedicated host.</li>
     * <li><strong>host</strong>: creates an ECS instance on a dedicated host. If you do not specify <strong>DedicatedHostId</strong>, Alibaba Cloud selects a dedicated host for the ECS instance.
     * Default value: <strong>default</strong></li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTenancy() {
        return null;
    }

    /**
     * Property userData: User data to pass to instance.
     * <p>
     * [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return null;
    }

    /**
     * Property zoneId: The zone ID of the ECS instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ScalingConfigurationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ScalingConfigurationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ScalingConfigurationProps> {
        java.lang.Object scalingGroupId;
        java.lang.Object affinity;
        java.lang.Object cpu;
        java.lang.Object creditSpecification;
        java.lang.Object dedicatedHostId;
        java.lang.Object deploymentSetId;
        java.lang.Object diskMappings;
        java.lang.Object hostName;
        java.lang.Object hpcClusterId;
        java.lang.Object imageFamily;
        java.lang.Object imageId;
        java.lang.Object imageName;
        java.lang.Object imageOptionsLoginAsNonRoot;
        java.lang.Object instanceDescription;
        java.lang.Object instanceId;
        java.lang.Object instanceName;
        java.lang.Object instancePatternInfos;
        java.lang.Object instanceType;
        java.lang.Object instanceTypeOverrides;
        java.lang.Object instanceTypes;
        java.lang.Object internetChargeType;
        java.lang.Object internetMaxBandwidthIn;
        java.lang.Object internetMaxBandwidthOut;
        java.lang.Object ioOptimized;
        java.lang.Object ipv6AddressCount;
        java.lang.Object keyPairName;
        java.lang.Object loadBalancerWeight;
        java.lang.Object memory;
        java.lang.Object password;
        java.lang.Object passwordInherit;
        java.lang.Object privatePoolOptions;
        java.lang.Object ramRoleName;
        java.lang.Object resourceGroupId;
        java.lang.Object scalingConfigurationName;
        java.lang.Object securityEnhancementStrategy;
        java.lang.Object securityGroupId;
        java.lang.Object securityGroupIds;
        java.lang.Object spotDuration;
        java.lang.Object spotInterruptionBehavior;
        java.lang.Object spotPriceLimit;
        java.lang.Object spotPriceLimitForInstanceType;
        java.lang.Object spotStrategy;
        java.lang.Object systemDiskAutoSnapshotPolicyId;
        java.lang.Object systemDiskBurstingEnabled;
        java.lang.Object systemDiskCategories;
        java.lang.Object systemDiskCategory;
        java.lang.Object systemDiskDescription;
        java.lang.Object systemDiskDiskName;
        java.lang.Object systemDiskEncryptAlgorithm;
        java.lang.Object systemDiskEncrypted;
        java.lang.Object systemDiskKmsKeyId;
        java.lang.Object systemDiskPerformanceLevel;
        java.lang.Object systemDiskProvisionedIops;
        java.lang.Object systemDiskSize;
        java.lang.Object tagList;
        java.lang.Object tenancy;
        java.lang.Object userData;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link ScalingConfigurationProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: Scaling group id to create the scaling configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: Scaling group id to create the scaling configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getAffinity}
         * @param affinity Property affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li><strong>default</strong>: does not associate the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode and the original dedicated host has insufficient resources, the ECS instance is automatically deployed to another dedicated host in the automatic deployment resource pool.</li>
         *                 <li><strong>host</strong>: associates the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the ECS instance fails to start.
         *                 Default value: <strong>default</strong></li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder affinity(java.lang.String affinity) {
            this.affinity = affinity;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getAffinity}
         * @param affinity Property affinity: Specifies whether to associate an ECS instance on a dedicated host with the dedicated host.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li><strong>default</strong>: does not associate the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode and the original dedicated host has insufficient resources, the ECS instance is automatically deployed to another dedicated host in the automatic deployment resource pool.</li>
         *                 <li><strong>host</strong>: associates the ECS instance with the dedicated host. If you start an ECS instance that was stopped in economical mode, the instance remains on the original dedicated host. If the original dedicated host has insufficient resources, the ECS instance fails to start.
         *                 Default value: <strong>default</strong></li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder affinity(com.aliyun.ros.cdk.core.IResolvable affinity) {
            this.affinity = affinity;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getCpu}
         * @param cpu Property cpu: The number of vCPUs.
         *            You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set CPU to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
         *            <strong>Note</strong>: You can specify <strong>Cpu</strong> and <strong>Memory</strong> to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getCpu}
         * @param cpu Property cpu: The number of vCPUs.
         *            You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set CPU to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
         *            <strong>Note</strong>: You can specify <strong>Cpu</strong> and <strong>Memory</strong> to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
         * @return {@code this}
         */
        public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getCreditSpecification}
         * @param creditSpecification Property creditSpecification: The performance mode of the burstable instance.
         *                            Valid values:
         *                            Standard: the standard mode.
         *                            Unlimited: the unlimited mode.
         * @return {@code this}
         */
        public Builder creditSpecification(java.lang.String creditSpecification) {
            this.creditSpecification = creditSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getCreditSpecification}
         * @param creditSpecification Property creditSpecification: The performance mode of the burstable instance.
         *                            Valid values:
         *                            Standard: the standard mode.
         *                            Unlimited: the unlimited mode.
         * @return {@code this}
         */
        public Builder creditSpecification(com.aliyun.ros.cdk.core.IResolvable creditSpecification) {
            this.creditSpecification = creditSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getDedicatedHostId}
         * @param dedicatedHostId Property dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance.
         *                        You cannot create preemptible instances on dedicated hosts. If you specify <strong>DedicatedHostId</strong>, <strong>SpotStrategy</strong> and <strong>SpotPriceLimit</strong> are ignored.
         *                        You can call the <strong>DescribeDedicatedHosts</strong> operation to query dedicated host IDs.
         * @return {@code this}
         */
        public Builder dedicatedHostId(java.lang.String dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getDedicatedHostId}
         * @param dedicatedHostId Property dedicatedHostId: The ID of the dedicated host on which you want to create an ECS instance.
         *                        You cannot create preemptible instances on dedicated hosts. If you specify <strong>DedicatedHostId</strong>, <strong>SpotStrategy</strong> and <strong>SpotPriceLimit</strong> are ignored.
         *                        You can call the <strong>DescribeDedicatedHosts</strong> operation to query dedicated host IDs.
         * @return {@code this}
         */
        public Builder dedicatedHostId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getDeploymentSetId}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID.
         * @return {@code this}
         */
        public Builder deploymentSetId(java.lang.String deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getDeploymentSetId}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID.
         * @return {@code this}
         */
        public Builder deploymentSetId(com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getDiskMappings}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance.
         * @return {@code this}
         */
        public Builder diskMappings(com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getDiskMappings}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance.
         * @return {@code this}
         */
        public Builder diskMappings(java.util.List<? extends java.lang.Object> diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getHostName}
         * @param hostName Property hostName: The hostname of the ECS instance.
         *                 The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
         *                 Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
         *                 Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getHostName}
         * @param hostName Property hostName: The hostname of the ECS instance.
         *                 The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
         *                 Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
         *                 Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getHpcClusterId}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs.
         * @return {@code this}
         */
        public Builder hpcClusterId(java.lang.String hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getHpcClusterId}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs.
         * @return {@code this}
         */
        public Builder hpcClusterId(com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getImageFamily}
         * @param imageFamily Property imageFamily: The name of the image family.
         *                    You can configure this parameter to obtain the latest available images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
         * @return {@code this}
         */
        public Builder imageFamily(java.lang.String imageFamily) {
            this.imageFamily = imageFamily;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getImageFamily}
         * @param imageFamily Property imageFamily: The name of the image family.
         *                    You can configure this parameter to obtain the latest available images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
         * @return {@code this}
         */
        public Builder imageFamily(com.aliyun.ros.cdk.core.IResolvable imageFamily) {
            this.imageFamily = imageFamily;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getImageId}
         * @param imageId Property imageId: Image ID to create ecs instance .
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getImageId}
         * @param imageId Property imageId: Image ID to create ecs instance .
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getImageName}
         * @param imageName Property imageName: The name of the image.
         *                  Each image name must be unique in a region. If you specify <strong>ImageId</strong>, <strong>ImageName</strong> is ignored.
         *                  You cannot use <strong>ImageName</strong> to specify images that are purchased from Alibaba Cloud Marketplace.
         * @return {@code this}
         */
        public Builder imageName(java.lang.String imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getImageName}
         * @param imageName Property imageName: The name of the image.
         *                  Each image name must be unique in a region. If you specify <strong>ImageId</strong>, <strong>ImageName</strong> is ignored.
         *                  You cannot use <strong>ImageName</strong> to specify images that are purchased from Alibaba Cloud Marketplace.
         * @return {@code this}
         */
        public Builder imageName(com.aliyun.ros.cdk.core.IResolvable imageName) {
            this.imageName = imageName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getImageOptionsLoginAsNonRoot}
         * @param imageOptionsLoginAsNonRoot Property imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values: - <strong>true</strong> - <strong>false</strong> Default value: <strong>false</strong>.
         * @return {@code this}
         */
        public Builder imageOptionsLoginAsNonRoot(java.lang.Boolean imageOptionsLoginAsNonRoot) {
            this.imageOptionsLoginAsNonRoot = imageOptionsLoginAsNonRoot;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getImageOptionsLoginAsNonRoot}
         * @param imageOptionsLoginAsNonRoot Property imageOptionsLoginAsNonRoot: Whether the ecs instance is logged in as ecs-user.Valid values: - <strong>true</strong> - <strong>false</strong> Default value: <strong>false</strong>.
         * @return {@code this}
         */
        public Builder imageOptionsLoginAsNonRoot(com.aliyun.ros.cdk.core.IResolvable imageOptionsLoginAsNonRoot) {
            this.imageOptionsLoginAsNonRoot = imageOptionsLoginAsNonRoot;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstanceDescription}
         * @param instanceDescription Property instanceDescription: The description of the ECS instance.
         *                            The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder instanceDescription(java.lang.String instanceDescription) {
            this.instanceDescription = instanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstanceDescription}
         * @param instanceDescription Property instanceDescription: The description of the ECS instance.
         *                            The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder instanceDescription(com.aliyun.ros.cdk.core.IResolvable instanceDescription) {
            this.instanceDescription = instanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstanceId}
         * @param instanceId Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstanceId}
         * @param instanceId Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance launched from the current scaling configuration.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance launched from the current scaling configuration.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstancePatternInfos}
         * @param instancePatternInfos Property instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria.
         * @return {@code this}
         */
        public Builder instancePatternInfos(com.aliyun.ros.cdk.core.IResolvable instancePatternInfos) {
            this.instancePatternInfos = instancePatternInfos;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstancePatternInfos}
         * @param instancePatternInfos Property instancePatternInfos: Details of the intelligent configuration settings that determine the range of instance types that meet the specified criteria.
         * @return {@code this}
         */
        public Builder instancePatternInfos(java.util.List<? extends java.lang.Object> instancePatternInfos) {
            this.instancePatternInfos = instancePatternInfos;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstanceType}
         * @param instanceType Property instanceType: ecs supported instance type.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstanceType}
         * @param instanceType Property instanceType: ecs supported instance type.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstanceTypeOverrides}
         * @param instanceTypeOverrides Property instanceTypeOverrides: The instance types.
         * @return {@code this}
         */
        public Builder instanceTypeOverrides(com.aliyun.ros.cdk.core.IResolvable instanceTypeOverrides) {
            this.instanceTypeOverrides = instanceTypeOverrides;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstanceTypeOverrides}
         * @param instanceTypeOverrides Property instanceTypeOverrides: The instance types.
         * @return {@code this}
         */
        public Builder instanceTypeOverrides(java.util.List<? extends java.lang.Object> instanceTypeOverrides) {
            this.instanceTypeOverrides = instanceTypeOverrides;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstanceTypes}
         * @param instanceTypes Property instanceTypes: ecs supported instance types.
         *                      Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
         * @return {@code this}
         */
        public Builder instanceTypes(com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
            this.instanceTypes = instanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInstanceTypes}
         * @param instanceTypes Property instanceTypes: ecs supported instance types.
         *                      Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
         * @return {@code this}
         */
        public Builder instanceTypes(java.util.List<? extends java.lang.Object> instanceTypes) {
            this.instanceTypes = instanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second).
         *                               The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(java.lang.Number internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second).
         *                               The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
         *                                The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
         *                                The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
         *                                The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
         *                                The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance.
         *                    Support 'none' and 'optimized' only, default is 'none'.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.String ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance.
         *                    Support 'none' and 'optimized' only, default is 'none'.
         * @return {@code this}
         */
        public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getIpv6AddressCount}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getIpv6AddressCount}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getLoadBalancerWeight}
         * @param loadBalancerWeight Property loadBalancerWeight: The weight of the ECS instance as a backend server.
         *                           Valid values: 1 to 100.
         *                           Default value: 50.
         * @return {@code this}
         */
        public Builder loadBalancerWeight(java.lang.Number loadBalancerWeight) {
            this.loadBalancerWeight = loadBalancerWeight;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getLoadBalancerWeight}
         * @param loadBalancerWeight Property loadBalancerWeight: The weight of the ECS instance as a backend server.
         *                           Valid values: 1 to 100.
         *                           Default value: 50.
         * @return {@code this}
         */
        public Builder loadBalancerWeight(com.aliyun.ros.cdk.core.IResolvable loadBalancerWeight) {
            this.loadBalancerWeight = loadBalancerWeight;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getMemory}
         * @param memory Property memory: The memory size.
         *               Unit: GiB.
         *               You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
         *               <strong>Note</strong>: You can specify <strong>Cpu</strong> and <strong>Memory</strong> to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getMemory}
         * @param memory Property memory: The memory size.
         *               Unit: GiB.
         *               You can specify the number of vCPUs and the memory size to determine the range of instance types. For example, you can set Cpu to 2 and Memory to 16 to specify instance types that have 2 vCPUs and 16 GiB of memory. If you specify Cpu and Memory, Auto Scaling determines the available instance types based on factors such as I/O optimization requirements and zones. Then, Auto Scaling preferentially creates instances by using the lowest-priced instance type.
         *               <strong>Note</strong>: You can specify <strong>Cpu</strong> and <strong>Memory</strong> to determine the range of instance types only if you set Scaling Policy to Cost Optimization Policy and you do not specify instance types in the scaling configuration.
         * @return {@code this}
         */
        public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getPassword}
         * @param password Property password: Password of created ecs instance.
         *                 Must contain at least 3 types of special character, lower character, upper character, number.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getPassword}
         * @param password Property password: Password of created ecs instance.
         *                 Must contain at least 3 types of special character, lower character, upper character, number.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getPasswordInherit}
         * @param passwordInherit Property passwordInherit: Whether to use the password pre-configured in the image you select or not.
         *                        When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
         * @return {@code this}
         */
        public Builder passwordInherit(java.lang.Boolean passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getPasswordInherit}
         * @param passwordInherit Property passwordInherit: Whether to use the password pre-configured in the image you select or not.
         *                        When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
         * @return {@code this}
         */
        public Builder passwordInherit(com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getPrivatePoolOptions}
         * @param privatePoolOptions Property privatePoolOptions: Option settings for private pools.
         * @return {@code this}
         */
        public Builder privatePoolOptions(com.aliyun.ros.cdk.core.IResolvable privatePoolOptions) {
            this.privatePoolOptions = privatePoolOptions;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getPrivatePoolOptions}
         * @param privatePoolOptions Property privatePoolOptions: Option settings for private pools.
         * @return {@code this}
         */
        public Builder privatePoolOptions(com.aliyun.ros.cdk.ess.RosScalingConfiguration.PrivatePoolOptionsProperty privatePoolOptions) {
            this.privatePoolOptions = privatePoolOptions;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: Instance RAM role name.
         *                    The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: Instance RAM role name.
         *                    The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getScalingConfigurationName}
         * @param scalingConfigurationName Property scalingConfigurationName: Name of created scaling configuration.
         * @return {@code this}
         */
        public Builder scalingConfigurationName(java.lang.String scalingConfigurationName) {
            this.scalingConfigurationName = scalingConfigurationName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getScalingConfigurationName}
         * @param scalingConfigurationName Property scalingConfigurationName: Name of created scaling configuration.
         * @return {@code this}
         */
        public Builder scalingConfigurationName(com.aliyun.ros.cdk.core.IResolvable scalingConfigurationName) {
            this.scalingConfigurationName = scalingConfigurationName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSecurityEnhancementStrategy}
         * @param securityEnhancementStrategy Property securityEnhancementStrategy: Specifies whether to enable security hardening.
         *                                    Valid values:
         *                                    <p>
         *                                    <ul>
         *                                    <li><strong>Active</strong>: enables security hardening. This value is applicable only to public images.</li>
         *                                    <li><strong>Deactive</strong>: disables security hardening. This value is applicable to all image types.</li>
         *                                    </ul>
         * @return {@code this}
         */
        public Builder securityEnhancementStrategy(java.lang.String securityEnhancementStrategy) {
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSecurityEnhancementStrategy}
         * @param securityEnhancementStrategy Property securityEnhancementStrategy: Specifies whether to enable security hardening.
         *                                    Valid values:
         *                                    <p>
         *                                    <ul>
         *                                    <li><strong>Active</strong>: enables security hardening. This value is applicable only to public images.</li>
         *                                    <li><strong>Deactive</strong>: disables security hardening. This value is applicable to all image types.</li>
         *                                    </ul>
         * @return {@code this}
         */
        public Builder securityEnhancementStrategy(com.aliyun.ros.cdk.core.IResolvable securityEnhancementStrategy) {
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security Group to create ecs instance.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security Group to create ecs instance.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration.
         *                         <strong>Note</strong>: If you specify <strong>SecurityGroupId</strong>, you cannot specify <strong>SecurityGroupIds</strong>.
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: The IDs of the security groups with which you want to associate the ECS instances that are created by using the scaling configuration.
         *                         <strong>Note</strong>: If you specify <strong>SecurityGroupId</strong>, you cannot specify <strong>SecurityGroupIds</strong>.
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSpotDuration}
         * @param spotDuration Property spotDuration: The retention period of the preemptible instance.
         *                     Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
         *                     The following retention periods are available in invitational preview: 2, 3, 4, 5, and 6 hours. If you want to set this parameter to one of these values, submit a ticket.
         *                     If you set this parameter to 0, no protection period is specified for the preemptible instance.
         *                     Default value: 1
         * @return {@code this}
         */
        public Builder spotDuration(java.lang.Number spotDuration) {
            this.spotDuration = spotDuration;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSpotDuration}
         * @param spotDuration Property spotDuration: The retention period of the preemptible instance.
         *                     Unit: hours. Valid values: 0, 1, 2, 3, 4, 5, and 6.
         *                     The following retention periods are available in invitational preview: 2, 3, 4, 5, and 6 hours. If you want to set this parameter to one of these values, submit a ticket.
         *                     If you set this parameter to 0, no protection period is specified for the preemptible instance.
         *                     Default value: 1
         * @return {@code this}
         */
        public Builder spotDuration(com.aliyun.ros.cdk.core.IResolvable spotDuration) {
            this.spotDuration = spotDuration;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSpotInterruptionBehavior}
         * @param spotInterruptionBehavior Property spotInterruptionBehavior: The interruption mode of the preemptible instance.
         *                                 Default value: Terminate. Set the value to Terminate. This value specifies that the preemptible instance is to be released.
         * @return {@code this}
         */
        public Builder spotInterruptionBehavior(java.lang.String spotInterruptionBehavior) {
            this.spotInterruptionBehavior = spotInterruptionBehavior;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSpotInterruptionBehavior}
         * @param spotInterruptionBehavior Property spotInterruptionBehavior: The interruption mode of the preemptible instance.
         *                                 Default value: Terminate. Set the value to Terminate. This value specifies that the preemptible instance is to be released.
         * @return {@code this}
         */
        public Builder spotInterruptionBehavior(com.aliyun.ros.cdk.core.IResolvable spotInterruptionBehavior) {
            this.spotInterruptionBehavior = spotInterruptionBehavior;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: Set the hourly maximum price for the instance.
         *                       Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: Set the hourly maximum price for the instance.
         *                       Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSpotPriceLimitForInstanceType}
         * @param spotPriceLimitForInstanceType Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
         *                                      The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
         *                                      You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
         *                                      At most 50 items can be specified.
         *                                      Key
         *                                      ecs instance type
         *                                      Value
         *                                      Supports a maximum of 3 decimal places.
         * @return {@code this}
         */
        public Builder spotPriceLimitForInstanceType(com.aliyun.ros.cdk.core.IResolvable spotPriceLimitForInstanceType) {
            this.spotPriceLimitForInstanceType = spotPriceLimitForInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSpotPriceLimitForInstanceType}
         * @param spotPriceLimitForInstanceType Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
         *                                      The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
         *                                      You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
         *                                      At most 50 items can be specified.
         *                                      Key
         *                                      ecs instance type
         *                                      Value
         *                                      Supports a maximum of 3 decimal places.
         * @return {@code this}
         */
        public Builder spotPriceLimitForInstanceType(java.util.Map<java.lang.String, ? extends java.lang.Object> spotPriceLimitForInstanceType) {
            this.spotPriceLimitForInstanceType = spotPriceLimitForInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: Preemption strategy for post-paid instances.
         *                     It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
         *                     NoSpot: Normal pay-per-use instance
         *                     SpotWithPriceLimit: Set a preemptive instance of the cap price
         *                     SpotAsPriceGo: System automatic bidding, following the current market actual price
         *                     Default: NoSpot.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: Preemption strategy for post-paid instances.
         *                     It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
         *                     NoSpot: Normal pay-per-use instance
         *                     SpotWithPriceLimit: Set a preemptive instance of the cap price
         *                     SpotAsPriceGo: System automatic bidding, following the current market actual price
         *                     Default: NoSpot.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskAutoSnapshotPolicyId}
         * @param systemDiskAutoSnapshotPolicyId Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
         * @return {@code this}
         */
        public Builder systemDiskAutoSnapshotPolicyId(java.lang.String systemDiskAutoSnapshotPolicyId) {
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskAutoSnapshotPolicyId}
         * @param systemDiskAutoSnapshotPolicyId Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
         * @return {@code this}
         */
        public Builder systemDiskAutoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable systemDiskAutoSnapshotPolicyId) {
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskBurstingEnabled}
         * @param systemDiskBurstingEnabled Property systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk.
         *                                  Valid values:
         *                                  <p>
         *                                  <ul>
         *                                  <li><strong>true</strong></li>
         *                                  <li><strong>false</strong>
         *                                  <strong>Note</strong>: This parameter is available only if you set <strong>SystemDiskCategory</strong> to <strong>cloud_auto</strong>.</li>
         *                                  </ul>
         * @return {@code this}
         */
        public Builder systemDiskBurstingEnabled(java.lang.Boolean systemDiskBurstingEnabled) {
            this.systemDiskBurstingEnabled = systemDiskBurstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskBurstingEnabled}
         * @param systemDiskBurstingEnabled Property systemDiskBurstingEnabled: Specifies whether to enable the burst feature for the system disk.
         *                                  Valid values:
         *                                  <p>
         *                                  <ul>
         *                                  <li><strong>true</strong></li>
         *                                  <li><strong>false</strong>
         *                                  <strong>Note</strong>: This parameter is available only if you set <strong>SystemDiskCategory</strong> to <strong>cloud_auto</strong>.</li>
         *                                  </ul>
         * @return {@code this}
         */
        public Builder systemDiskBurstingEnabled(com.aliyun.ros.cdk.core.IResolvable systemDiskBurstingEnabled) {
            this.systemDiskBurstingEnabled = systemDiskBurstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskCategories}
         * @param systemDiskCategories Property systemDiskCategories: The categories of the system disks.
         *                             If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
         *                             <p>
         *                             <ul>
         *                             <li><strong>cloud</strong>: basic disk</li>
         *                             <li><strong>cloud_efficiency</strong>: ultra disk</li>
         *                             <li><strong>cloud_ssd</strong>: standard SSD</li>
         *                             <li><strong>cloud_essd</strong>: ESSD
         *                             <strong>Note</strong>: If you specify <strong>SystemDiskCategories</strong>, you cannot specify <strong>SystemDiskCategory</strong>.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder systemDiskCategories(com.aliyun.ros.cdk.core.IResolvable systemDiskCategories) {
            this.systemDiskCategories = systemDiskCategories;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskCategories}
         * @param systemDiskCategories Property systemDiskCategories: The categories of the system disks.
         *                             If Auto Scaling cannot create instances by using the disk category that has the highest priority, Auto Scaling creates instances by using the disk category that has the next highest priority. Valid values:
         *                             <p>
         *                             <ul>
         *                             <li><strong>cloud</strong>: basic disk</li>
         *                             <li><strong>cloud_efficiency</strong>: ultra disk</li>
         *                             <li><strong>cloud_ssd</strong>: standard SSD</li>
         *                             <li><strong>cloud_essd</strong>: ESSD
         *                             <strong>Note</strong>: If you specify <strong>SystemDiskCategories</strong>, you cannot specify <strong>SystemDiskCategory</strong>.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder systemDiskCategories(java.util.List<? extends java.lang.Object> systemDiskCategories) {
            this.systemDiskCategories = systemDiskCategories;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk.
         *                           Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk.
         *                           Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskDescription}
         * @param systemDiskDescription Property systemDiskDescription: The description of the system disk.
         *                              The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder systemDiskDescription(java.lang.String systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskDescription}
         * @param systemDiskDescription Property systemDiskDescription: The description of the system disk.
         *                              The description must be 2 to 256 characters in length. The description can contain letters and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder systemDiskDescription(com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskDiskName}
         * @param systemDiskDiskName Property systemDiskDiskName: The name of the system disk.
         *                           The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(java.lang.String systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskDiskName}
         * @param systemDiskDiskName Property systemDiskDiskName: The name of the system disk.
         *                           The name must be 2 to 128 characters in length. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskEncryptAlgorithm}
         * @param systemDiskEncryptAlgorithm Property systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk.
         *                                   Valid values:
         *                                   <p>
         *                                   <ul>
         *                                   <li><strong>AES-256</strong></li>
         *                                   <li><strong>SM4-128</strong>
         *                                   Default value: <strong>AES-256</strong></li>
         *                                   </ul>
         * @return {@code this}
         */
        public Builder systemDiskEncryptAlgorithm(java.lang.String systemDiskEncryptAlgorithm) {
            this.systemDiskEncryptAlgorithm = systemDiskEncryptAlgorithm;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskEncryptAlgorithm}
         * @param systemDiskEncryptAlgorithm Property systemDiskEncryptAlgorithm: The encryption algorithm that you want to use to encrypt the system disk.
         *                                   Valid values:
         *                                   <p>
         *                                   <ul>
         *                                   <li><strong>AES-256</strong></li>
         *                                   <li><strong>SM4-128</strong>
         *                                   Default value: <strong>AES-256</strong></li>
         *                                   </ul>
         * @return {@code this}
         */
        public Builder systemDiskEncryptAlgorithm(com.aliyun.ros.cdk.core.IResolvable systemDiskEncryptAlgorithm) {
            this.systemDiskEncryptAlgorithm = systemDiskEncryptAlgorithm;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskEncrypted}
         * @param systemDiskEncrypted Property systemDiskEncrypted: Specifies whether to encrypt the system disk.
         *                            Valid values:
         *                            <p>
         *                            <ul>
         *                            <li><strong>true</strong></li>
         *                            <li><strong>false</strong>
         *                            Default value: <strong>false</strong></li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder systemDiskEncrypted(java.lang.Boolean systemDiskEncrypted) {
            this.systemDiskEncrypted = systemDiskEncrypted;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskEncrypted}
         * @param systemDiskEncrypted Property systemDiskEncrypted: Specifies whether to encrypt the system disk.
         *                            Valid values:
         *                            <p>
         *                            <ul>
         *                            <li><strong>true</strong></li>
         *                            <li><strong>false</strong>
         *                            Default value: <strong>false</strong></li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder systemDiskEncrypted(com.aliyun.ros.cdk.core.IResolvable systemDiskEncrypted) {
            this.systemDiskEncrypted = systemDiskEncrypted;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskKmsKeyId}
         * @param systemDiskKmsKeyId Property systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk.
         * @return {@code this}
         */
        public Builder systemDiskKmsKeyId(java.lang.String systemDiskKmsKeyId) {
            this.systemDiskKmsKeyId = systemDiskKmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskKmsKeyId}
         * @param systemDiskKmsKeyId Property systemDiskKmsKeyId: The ID of the KMS key that you want to use to encrypt the system disk.
         * @return {@code this}
         */
        public Builder systemDiskKmsKeyId(com.aliyun.ros.cdk.core.IResolvable systemDiskKmsKeyId) {
            this.systemDiskKmsKeyId = systemDiskKmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskPerformanceLevel}
         * @param systemDiskPerformanceLevel Property systemDiskPerformanceLevel: The performance level of an ESSD.
         * @return {@code this}
         */
        public Builder systemDiskPerformanceLevel(java.lang.String systemDiskPerformanceLevel) {
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskPerformanceLevel}
         * @param systemDiskPerformanceLevel Property systemDiskPerformanceLevel: The performance level of an ESSD.
         * @return {@code this}
         */
        public Builder systemDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskProvisionedIops}
         * @param systemDiskProvisionedIops Property systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk.
         *                                  <strong>Note</strong>: IOPS measures the number of read and write operations that an EBS device can process per second.
         * @return {@code this}
         */
        public Builder systemDiskProvisionedIops(java.lang.Number systemDiskProvisionedIops) {
            this.systemDiskProvisionedIops = systemDiskProvisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskProvisionedIops}
         * @param systemDiskProvisionedIops Property systemDiskProvisionedIops: The IOPS metric that is preconfigured for the system disk.
         *                                  <strong>Note</strong>: IOPS measures the number of read and write operations that an EBS device can process per second.
         * @return {@code this}
         */
        public Builder systemDiskProvisionedIops(com.aliyun.ros.cdk.core.IResolvable systemDiskProvisionedIops) {
            this.systemDiskProvisionedIops = systemDiskProvisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskSize}
         * @param systemDiskSize Property systemDiskSize: Size of system disk.
         *                       Unit is GB.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getSystemDiskSize}
         * @param systemDiskSize Property systemDiskSize: Size of system disk.
         *                       Unit is GB.
         * @return {@code this}
         */
        public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getTagList}
         * @param tagList Property tagList: The tags of an instance in list format.
         *                Do not use with Tags at the same time.
         *                You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
         *                At most 20 tags can be specified.
         *                Key
         *                It can be up to 64 characters in length.
         *                Cannot begin with aliyun.
         *                Cannot begin with http:// or https://.
         *                Cannot be a null string.
         *                Value
         *                It can be up to 128 characters in length.
         *                Cannot begin with aliyun.
         *                Cannot begin with http:// or https://.
         *                Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"&lt;resource_name&gt;<em>stack</em>&lt;stack_id&gt;") if possible.
         * @return {@code this}
         */
        public Builder tagList(com.aliyun.ros.cdk.core.IResolvable tagList) {
            this.tagList = tagList;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getTagList}
         * @param tagList Property tagList: The tags of an instance in list format.
         *                Do not use with Tags at the same time.
         *                You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
         *                At most 20 tags can be specified.
         *                Key
         *                It can be up to 64 characters in length.
         *                Cannot begin with aliyun.
         *                Cannot begin with http:// or https://.
         *                Cannot be a null string.
         *                Value
         *                It can be up to 128 characters in length.
         *                Cannot begin with aliyun.
         *                Cannot begin with http:// or https://.
         *                Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"&lt;resource_name&gt;<em>stack</em>&lt;stack_id&gt;") if possible.
         * @return {@code this}
         */
        public Builder tagList(java.util.List<? extends java.lang.Object> tagList) {
            this.tagList = tagList;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getTenancy}
         * @param tenancy Property tenancy: Specifies whether to create an ECS instance on a dedicated host.
         *                Valid values:
         *                <p>
         *                <ul>
         *                <li><strong>default</strong>: does not create an ECS instance on a dedicated host.</li>
         *                <li><strong>host</strong>: creates an ECS instance on a dedicated host. If you do not specify <strong>DedicatedHostId</strong>, Alibaba Cloud selects a dedicated host for the ECS instance.
         *                Default value: <strong>default</strong></li>
         *                </ul>
         * @return {@code this}
         */
        public Builder tenancy(java.lang.String tenancy) {
            this.tenancy = tenancy;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getTenancy}
         * @param tenancy Property tenancy: Specifies whether to create an ECS instance on a dedicated host.
         *                Valid values:
         *                <p>
         *                <ul>
         *                <li><strong>default</strong>: does not create an ECS instance on a dedicated host.</li>
         *                <li><strong>host</strong>: creates an ECS instance on a dedicated host. If you do not specify <strong>DedicatedHostId</strong>, Alibaba Cloud selects a dedicated host for the ECS instance.
         *                Default value: <strong>default</strong></li>
         *                </ul>
         * @return {@code this}
         */
        public Builder tenancy(com.aliyun.ros.cdk.core.IResolvable tenancy) {
            this.tenancy = tenancy;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getUserData}
         * @param userData Property userData: User data to pass to instance.
         *                 [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * @return {@code this}
         */
        public Builder userData(java.lang.String userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getUserData}
         * @param userData Property userData: User data to pass to instance.
         *                 [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the ECS instance.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the ECS instance.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ScalingConfigurationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ScalingConfigurationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ScalingConfigurationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScalingConfigurationProps {
        private final java.lang.Object scalingGroupId;
        private final java.lang.Object affinity;
        private final java.lang.Object cpu;
        private final java.lang.Object creditSpecification;
        private final java.lang.Object dedicatedHostId;
        private final java.lang.Object deploymentSetId;
        private final java.lang.Object diskMappings;
        private final java.lang.Object hostName;
        private final java.lang.Object hpcClusterId;
        private final java.lang.Object imageFamily;
        private final java.lang.Object imageId;
        private final java.lang.Object imageName;
        private final java.lang.Object imageOptionsLoginAsNonRoot;
        private final java.lang.Object instanceDescription;
        private final java.lang.Object instanceId;
        private final java.lang.Object instanceName;
        private final java.lang.Object instancePatternInfos;
        private final java.lang.Object instanceType;
        private final java.lang.Object instanceTypeOverrides;
        private final java.lang.Object instanceTypes;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object internetMaxBandwidthIn;
        private final java.lang.Object internetMaxBandwidthOut;
        private final java.lang.Object ioOptimized;
        private final java.lang.Object ipv6AddressCount;
        private final java.lang.Object keyPairName;
        private final java.lang.Object loadBalancerWeight;
        private final java.lang.Object memory;
        private final java.lang.Object password;
        private final java.lang.Object passwordInherit;
        private final java.lang.Object privatePoolOptions;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object scalingConfigurationName;
        private final java.lang.Object securityEnhancementStrategy;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityGroupIds;
        private final java.lang.Object spotDuration;
        private final java.lang.Object spotInterruptionBehavior;
        private final java.lang.Object spotPriceLimit;
        private final java.lang.Object spotPriceLimitForInstanceType;
        private final java.lang.Object spotStrategy;
        private final java.lang.Object systemDiskAutoSnapshotPolicyId;
        private final java.lang.Object systemDiskBurstingEnabled;
        private final java.lang.Object systemDiskCategories;
        private final java.lang.Object systemDiskCategory;
        private final java.lang.Object systemDiskDescription;
        private final java.lang.Object systemDiskDiskName;
        private final java.lang.Object systemDiskEncryptAlgorithm;
        private final java.lang.Object systemDiskEncrypted;
        private final java.lang.Object systemDiskKmsKeyId;
        private final java.lang.Object systemDiskPerformanceLevel;
        private final java.lang.Object systemDiskProvisionedIops;
        private final java.lang.Object systemDiskSize;
        private final java.lang.Object tagList;
        private final java.lang.Object tenancy;
        private final java.lang.Object userData;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.affinity = software.amazon.jsii.Kernel.get(this, "affinity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.creditSpecification = software.amazon.jsii.Kernel.get(this, "creditSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostId = software.amazon.jsii.Kernel.get(this, "dedicatedHostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploymentSetId = software.amazon.jsii.Kernel.get(this, "deploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskMappings = software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hpcClusterId = software.amazon.jsii.Kernel.get(this, "hpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageFamily = software.amazon.jsii.Kernel.get(this, "imageFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageName = software.amazon.jsii.Kernel.get(this, "imageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageOptionsLoginAsNonRoot = software.amazon.jsii.Kernel.get(this, "imageOptionsLoginAsNonRoot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceDescription = software.amazon.jsii.Kernel.get(this, "instanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instancePatternInfos = software.amazon.jsii.Kernel.get(this, "instancePatternInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceTypeOverrides = software.amazon.jsii.Kernel.get(this, "instanceTypeOverrides", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceTypes = software.amazon.jsii.Kernel.get(this, "instanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthIn = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerWeight = software.amazon.jsii.Kernel.get(this, "loadBalancerWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passwordInherit = software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privatePoolOptions = software.amazon.jsii.Kernel.get(this, "privatePoolOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingConfigurationName = software.amazon.jsii.Kernel.get(this, "scalingConfigurationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityEnhancementStrategy = software.amazon.jsii.Kernel.get(this, "securityEnhancementStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotDuration = software.amazon.jsii.Kernel.get(this, "spotDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotInterruptionBehavior = software.amazon.jsii.Kernel.get(this, "spotInterruptionBehavior", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimitForInstanceType = software.amazon.jsii.Kernel.get(this, "spotPriceLimitForInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskAutoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "systemDiskAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskBurstingEnabled = software.amazon.jsii.Kernel.get(this, "systemDiskBurstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategories = software.amazon.jsii.Kernel.get(this, "systemDiskCategories", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDescription = software.amazon.jsii.Kernel.get(this, "systemDiskDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDiskName = software.amazon.jsii.Kernel.get(this, "systemDiskDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskEncryptAlgorithm = software.amazon.jsii.Kernel.get(this, "systemDiskEncryptAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskEncrypted = software.amazon.jsii.Kernel.get(this, "systemDiskEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskKmsKeyId = software.amazon.jsii.Kernel.get(this, "systemDiskKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "systemDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskProvisionedIops = software.amazon.jsii.Kernel.get(this, "systemDiskProvisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagList = software.amazon.jsii.Kernel.get(this, "tagList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tenancy = software.amazon.jsii.Kernel.get(this, "tenancy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.scalingGroupId = java.util.Objects.requireNonNull(builder.scalingGroupId, "scalingGroupId is required");
            this.affinity = builder.affinity;
            this.cpu = builder.cpu;
            this.creditSpecification = builder.creditSpecification;
            this.dedicatedHostId = builder.dedicatedHostId;
            this.deploymentSetId = builder.deploymentSetId;
            this.diskMappings = builder.diskMappings;
            this.hostName = builder.hostName;
            this.hpcClusterId = builder.hpcClusterId;
            this.imageFamily = builder.imageFamily;
            this.imageId = builder.imageId;
            this.imageName = builder.imageName;
            this.imageOptionsLoginAsNonRoot = builder.imageOptionsLoginAsNonRoot;
            this.instanceDescription = builder.instanceDescription;
            this.instanceId = builder.instanceId;
            this.instanceName = builder.instanceName;
            this.instancePatternInfos = builder.instancePatternInfos;
            this.instanceType = builder.instanceType;
            this.instanceTypeOverrides = builder.instanceTypeOverrides;
            this.instanceTypes = builder.instanceTypes;
            this.internetChargeType = builder.internetChargeType;
            this.internetMaxBandwidthIn = builder.internetMaxBandwidthIn;
            this.internetMaxBandwidthOut = builder.internetMaxBandwidthOut;
            this.ioOptimized = builder.ioOptimized;
            this.ipv6AddressCount = builder.ipv6AddressCount;
            this.keyPairName = builder.keyPairName;
            this.loadBalancerWeight = builder.loadBalancerWeight;
            this.memory = builder.memory;
            this.password = builder.password;
            this.passwordInherit = builder.passwordInherit;
            this.privatePoolOptions = builder.privatePoolOptions;
            this.ramRoleName = builder.ramRoleName;
            this.resourceGroupId = builder.resourceGroupId;
            this.scalingConfigurationName = builder.scalingConfigurationName;
            this.securityEnhancementStrategy = builder.securityEnhancementStrategy;
            this.securityGroupId = builder.securityGroupId;
            this.securityGroupIds = builder.securityGroupIds;
            this.spotDuration = builder.spotDuration;
            this.spotInterruptionBehavior = builder.spotInterruptionBehavior;
            this.spotPriceLimit = builder.spotPriceLimit;
            this.spotPriceLimitForInstanceType = builder.spotPriceLimitForInstanceType;
            this.spotStrategy = builder.spotStrategy;
            this.systemDiskAutoSnapshotPolicyId = builder.systemDiskAutoSnapshotPolicyId;
            this.systemDiskBurstingEnabled = builder.systemDiskBurstingEnabled;
            this.systemDiskCategories = builder.systemDiskCategories;
            this.systemDiskCategory = builder.systemDiskCategory;
            this.systemDiskDescription = builder.systemDiskDescription;
            this.systemDiskDiskName = builder.systemDiskDiskName;
            this.systemDiskEncryptAlgorithm = builder.systemDiskEncryptAlgorithm;
            this.systemDiskEncrypted = builder.systemDiskEncrypted;
            this.systemDiskKmsKeyId = builder.systemDiskKmsKeyId;
            this.systemDiskPerformanceLevel = builder.systemDiskPerformanceLevel;
            this.systemDiskProvisionedIops = builder.systemDiskProvisionedIops;
            this.systemDiskSize = builder.systemDiskSize;
            this.tagList = builder.tagList;
            this.tenancy = builder.tenancy;
            this.userData = builder.userData;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Object getAffinity() {
            return this.affinity;
        }

        @Override
        public final java.lang.Object getCpu() {
            return this.cpu;
        }

        @Override
        public final java.lang.Object getCreditSpecification() {
            return this.creditSpecification;
        }

        @Override
        public final java.lang.Object getDedicatedHostId() {
            return this.dedicatedHostId;
        }

        @Override
        public final java.lang.Object getDeploymentSetId() {
            return this.deploymentSetId;
        }

        @Override
        public final java.lang.Object getDiskMappings() {
            return this.diskMappings;
        }

        @Override
        public final java.lang.Object getHostName() {
            return this.hostName;
        }

        @Override
        public final java.lang.Object getHpcClusterId() {
            return this.hpcClusterId;
        }

        @Override
        public final java.lang.Object getImageFamily() {
            return this.imageFamily;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getImageName() {
            return this.imageName;
        }

        @Override
        public final java.lang.Object getImageOptionsLoginAsNonRoot() {
            return this.imageOptionsLoginAsNonRoot;
        }

        @Override
        public final java.lang.Object getInstanceDescription() {
            return this.instanceDescription;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getInstancePatternInfos() {
            return this.instancePatternInfos;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getInstanceTypeOverrides() {
            return this.instanceTypeOverrides;
        }

        @Override
        public final java.lang.Object getInstanceTypes() {
            return this.instanceTypes;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
        }

        @Override
        public final java.lang.Object getInternetMaxBandwidthIn() {
            return this.internetMaxBandwidthIn;
        }

        @Override
        public final java.lang.Object getInternetMaxBandwidthOut() {
            return this.internetMaxBandwidthOut;
        }

        @Override
        public final java.lang.Object getIoOptimized() {
            return this.ioOptimized;
        }

        @Override
        public final java.lang.Object getIpv6AddressCount() {
            return this.ipv6AddressCount;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.Object getLoadBalancerWeight() {
            return this.loadBalancerWeight;
        }

        @Override
        public final java.lang.Object getMemory() {
            return this.memory;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPasswordInherit() {
            return this.passwordInherit;
        }

        @Override
        public final java.lang.Object getPrivatePoolOptions() {
            return this.privatePoolOptions;
        }

        @Override
        public final java.lang.Object getRamRoleName() {
            return this.ramRoleName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getScalingConfigurationName() {
            return this.scalingConfigurationName;
        }

        @Override
        public final java.lang.Object getSecurityEnhancementStrategy() {
            return this.securityEnhancementStrategy;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupIds() {
            return this.securityGroupIds;
        }

        @Override
        public final java.lang.Object getSpotDuration() {
            return this.spotDuration;
        }

        @Override
        public final java.lang.Object getSpotInterruptionBehavior() {
            return this.spotInterruptionBehavior;
        }

        @Override
        public final java.lang.Object getSpotPriceLimit() {
            return this.spotPriceLimit;
        }

        @Override
        public final java.lang.Object getSpotPriceLimitForInstanceType() {
            return this.spotPriceLimitForInstanceType;
        }

        @Override
        public final java.lang.Object getSpotStrategy() {
            return this.spotStrategy;
        }

        @Override
        public final java.lang.Object getSystemDiskAutoSnapshotPolicyId() {
            return this.systemDiskAutoSnapshotPolicyId;
        }

        @Override
        public final java.lang.Object getSystemDiskBurstingEnabled() {
            return this.systemDiskBurstingEnabled;
        }

        @Override
        public final java.lang.Object getSystemDiskCategories() {
            return this.systemDiskCategories;
        }

        @Override
        public final java.lang.Object getSystemDiskCategory() {
            return this.systemDiskCategory;
        }

        @Override
        public final java.lang.Object getSystemDiskDescription() {
            return this.systemDiskDescription;
        }

        @Override
        public final java.lang.Object getSystemDiskDiskName() {
            return this.systemDiskDiskName;
        }

        @Override
        public final java.lang.Object getSystemDiskEncryptAlgorithm() {
            return this.systemDiskEncryptAlgorithm;
        }

        @Override
        public final java.lang.Object getSystemDiskEncrypted() {
            return this.systemDiskEncrypted;
        }

        @Override
        public final java.lang.Object getSystemDiskKmsKeyId() {
            return this.systemDiskKmsKeyId;
        }

        @Override
        public final java.lang.Object getSystemDiskPerformanceLevel() {
            return this.systemDiskPerformanceLevel;
        }

        @Override
        public final java.lang.Object getSystemDiskProvisionedIops() {
            return this.systemDiskProvisionedIops;
        }

        @Override
        public final java.lang.Object getSystemDiskSize() {
            return this.systemDiskSize;
        }

        @Override
        public final java.lang.Object getTagList() {
            return this.tagList;
        }

        @Override
        public final java.lang.Object getTenancy() {
            return this.tenancy;
        }

        @Override
        public final java.lang.Object getUserData() {
            return this.userData;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            if (this.getAffinity() != null) {
                data.set("affinity", om.valueToTree(this.getAffinity()));
            }
            if (this.getCpu() != null) {
                data.set("cpu", om.valueToTree(this.getCpu()));
            }
            if (this.getCreditSpecification() != null) {
                data.set("creditSpecification", om.valueToTree(this.getCreditSpecification()));
            }
            if (this.getDedicatedHostId() != null) {
                data.set("dedicatedHostId", om.valueToTree(this.getDedicatedHostId()));
            }
            if (this.getDeploymentSetId() != null) {
                data.set("deploymentSetId", om.valueToTree(this.getDeploymentSetId()));
            }
            if (this.getDiskMappings() != null) {
                data.set("diskMappings", om.valueToTree(this.getDiskMappings()));
            }
            if (this.getHostName() != null) {
                data.set("hostName", om.valueToTree(this.getHostName()));
            }
            if (this.getHpcClusterId() != null) {
                data.set("hpcClusterId", om.valueToTree(this.getHpcClusterId()));
            }
            if (this.getImageFamily() != null) {
                data.set("imageFamily", om.valueToTree(this.getImageFamily()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getImageName() != null) {
                data.set("imageName", om.valueToTree(this.getImageName()));
            }
            if (this.getImageOptionsLoginAsNonRoot() != null) {
                data.set("imageOptionsLoginAsNonRoot", om.valueToTree(this.getImageOptionsLoginAsNonRoot()));
            }
            if (this.getInstanceDescription() != null) {
                data.set("instanceDescription", om.valueToTree(this.getInstanceDescription()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getInstancePatternInfos() != null) {
                data.set("instancePatternInfos", om.valueToTree(this.getInstancePatternInfos()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getInstanceTypeOverrides() != null) {
                data.set("instanceTypeOverrides", om.valueToTree(this.getInstanceTypeOverrides()));
            }
            if (this.getInstanceTypes() != null) {
                data.set("instanceTypes", om.valueToTree(this.getInstanceTypes()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
            }
            if (this.getInternetMaxBandwidthIn() != null) {
                data.set("internetMaxBandwidthIn", om.valueToTree(this.getInternetMaxBandwidthIn()));
            }
            if (this.getInternetMaxBandwidthOut() != null) {
                data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
            }
            if (this.getIoOptimized() != null) {
                data.set("ioOptimized", om.valueToTree(this.getIoOptimized()));
            }
            if (this.getIpv6AddressCount() != null) {
                data.set("ipv6AddressCount", om.valueToTree(this.getIpv6AddressCount()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getLoadBalancerWeight() != null) {
                data.set("loadBalancerWeight", om.valueToTree(this.getLoadBalancerWeight()));
            }
            if (this.getMemory() != null) {
                data.set("memory", om.valueToTree(this.getMemory()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPasswordInherit() != null) {
                data.set("passwordInherit", om.valueToTree(this.getPasswordInherit()));
            }
            if (this.getPrivatePoolOptions() != null) {
                data.set("privatePoolOptions", om.valueToTree(this.getPrivatePoolOptions()));
            }
            if (this.getRamRoleName() != null) {
                data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getScalingConfigurationName() != null) {
                data.set("scalingConfigurationName", om.valueToTree(this.getScalingConfigurationName()));
            }
            if (this.getSecurityEnhancementStrategy() != null) {
                data.set("securityEnhancementStrategy", om.valueToTree(this.getSecurityEnhancementStrategy()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityGroupIds() != null) {
                data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));
            }
            if (this.getSpotDuration() != null) {
                data.set("spotDuration", om.valueToTree(this.getSpotDuration()));
            }
            if (this.getSpotInterruptionBehavior() != null) {
                data.set("spotInterruptionBehavior", om.valueToTree(this.getSpotInterruptionBehavior()));
            }
            if (this.getSpotPriceLimit() != null) {
                data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
            }
            if (this.getSpotPriceLimitForInstanceType() != null) {
                data.set("spotPriceLimitForInstanceType", om.valueToTree(this.getSpotPriceLimitForInstanceType()));
            }
            if (this.getSpotStrategy() != null) {
                data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
            }
            if (this.getSystemDiskAutoSnapshotPolicyId() != null) {
                data.set("systemDiskAutoSnapshotPolicyId", om.valueToTree(this.getSystemDiskAutoSnapshotPolicyId()));
            }
            if (this.getSystemDiskBurstingEnabled() != null) {
                data.set("systemDiskBurstingEnabled", om.valueToTree(this.getSystemDiskBurstingEnabled()));
            }
            if (this.getSystemDiskCategories() != null) {
                data.set("systemDiskCategories", om.valueToTree(this.getSystemDiskCategories()));
            }
            if (this.getSystemDiskCategory() != null) {
                data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
            }
            if (this.getSystemDiskDescription() != null) {
                data.set("systemDiskDescription", om.valueToTree(this.getSystemDiskDescription()));
            }
            if (this.getSystemDiskDiskName() != null) {
                data.set("systemDiskDiskName", om.valueToTree(this.getSystemDiskDiskName()));
            }
            if (this.getSystemDiskEncryptAlgorithm() != null) {
                data.set("systemDiskEncryptAlgorithm", om.valueToTree(this.getSystemDiskEncryptAlgorithm()));
            }
            if (this.getSystemDiskEncrypted() != null) {
                data.set("systemDiskEncrypted", om.valueToTree(this.getSystemDiskEncrypted()));
            }
            if (this.getSystemDiskKmsKeyId() != null) {
                data.set("systemDiskKmsKeyId", om.valueToTree(this.getSystemDiskKmsKeyId()));
            }
            if (this.getSystemDiskPerformanceLevel() != null) {
                data.set("systemDiskPerformanceLevel", om.valueToTree(this.getSystemDiskPerformanceLevel()));
            }
            if (this.getSystemDiskProvisionedIops() != null) {
                data.set("systemDiskProvisionedIops", om.valueToTree(this.getSystemDiskProvisionedIops()));
            }
            if (this.getSystemDiskSize() != null) {
                data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
            }
            if (this.getTagList() != null) {
                data.set("tagList", om.valueToTree(this.getTagList()));
            }
            if (this.getTenancy() != null) {
                data.set("tenancy", om.valueToTree(this.getTenancy()));
            }
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.ScalingConfigurationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ScalingConfigurationProps.Jsii$Proxy that = (ScalingConfigurationProps.Jsii$Proxy) o;

            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (this.affinity != null ? !this.affinity.equals(that.affinity) : that.affinity != null) return false;
            if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
            if (this.creditSpecification != null ? !this.creditSpecification.equals(that.creditSpecification) : that.creditSpecification != null) return false;
            if (this.dedicatedHostId != null ? !this.dedicatedHostId.equals(that.dedicatedHostId) : that.dedicatedHostId != null) return false;
            if (this.deploymentSetId != null ? !this.deploymentSetId.equals(that.deploymentSetId) : that.deploymentSetId != null) return false;
            if (this.diskMappings != null ? !this.diskMappings.equals(that.diskMappings) : that.diskMappings != null) return false;
            if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
            if (this.hpcClusterId != null ? !this.hpcClusterId.equals(that.hpcClusterId) : that.hpcClusterId != null) return false;
            if (this.imageFamily != null ? !this.imageFamily.equals(that.imageFamily) : that.imageFamily != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.imageName != null ? !this.imageName.equals(that.imageName) : that.imageName != null) return false;
            if (this.imageOptionsLoginAsNonRoot != null ? !this.imageOptionsLoginAsNonRoot.equals(that.imageOptionsLoginAsNonRoot) : that.imageOptionsLoginAsNonRoot != null) return false;
            if (this.instanceDescription != null ? !this.instanceDescription.equals(that.instanceDescription) : that.instanceDescription != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.instancePatternInfos != null ? !this.instancePatternInfos.equals(that.instancePatternInfos) : that.instancePatternInfos != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.instanceTypeOverrides != null ? !this.instanceTypeOverrides.equals(that.instanceTypeOverrides) : that.instanceTypeOverrides != null) return false;
            if (this.instanceTypes != null ? !this.instanceTypes.equals(that.instanceTypes) : that.instanceTypes != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.internetMaxBandwidthIn != null ? !this.internetMaxBandwidthIn.equals(that.internetMaxBandwidthIn) : that.internetMaxBandwidthIn != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.loadBalancerWeight != null ? !this.loadBalancerWeight.equals(that.loadBalancerWeight) : that.loadBalancerWeight != null) return false;
            if (this.memory != null ? !this.memory.equals(that.memory) : that.memory != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.passwordInherit != null ? !this.passwordInherit.equals(that.passwordInherit) : that.passwordInherit != null) return false;
            if (this.privatePoolOptions != null ? !this.privatePoolOptions.equals(that.privatePoolOptions) : that.privatePoolOptions != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.scalingConfigurationName != null ? !this.scalingConfigurationName.equals(that.scalingConfigurationName) : that.scalingConfigurationName != null) return false;
            if (this.securityEnhancementStrategy != null ? !this.securityEnhancementStrategy.equals(that.securityEnhancementStrategy) : that.securityEnhancementStrategy != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
            if (this.spotDuration != null ? !this.spotDuration.equals(that.spotDuration) : that.spotDuration != null) return false;
            if (this.spotInterruptionBehavior != null ? !this.spotInterruptionBehavior.equals(that.spotInterruptionBehavior) : that.spotInterruptionBehavior != null) return false;
            if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
            if (this.spotPriceLimitForInstanceType != null ? !this.spotPriceLimitForInstanceType.equals(that.spotPriceLimitForInstanceType) : that.spotPriceLimitForInstanceType != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.systemDiskAutoSnapshotPolicyId != null ? !this.systemDiskAutoSnapshotPolicyId.equals(that.systemDiskAutoSnapshotPolicyId) : that.systemDiskAutoSnapshotPolicyId != null) return false;
            if (this.systemDiskBurstingEnabled != null ? !this.systemDiskBurstingEnabled.equals(that.systemDiskBurstingEnabled) : that.systemDiskBurstingEnabled != null) return false;
            if (this.systemDiskCategories != null ? !this.systemDiskCategories.equals(that.systemDiskCategories) : that.systemDiskCategories != null) return false;
            if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
            if (this.systemDiskDescription != null ? !this.systemDiskDescription.equals(that.systemDiskDescription) : that.systemDiskDescription != null) return false;
            if (this.systemDiskDiskName != null ? !this.systemDiskDiskName.equals(that.systemDiskDiskName) : that.systemDiskDiskName != null) return false;
            if (this.systemDiskEncryptAlgorithm != null ? !this.systemDiskEncryptAlgorithm.equals(that.systemDiskEncryptAlgorithm) : that.systemDiskEncryptAlgorithm != null) return false;
            if (this.systemDiskEncrypted != null ? !this.systemDiskEncrypted.equals(that.systemDiskEncrypted) : that.systemDiskEncrypted != null) return false;
            if (this.systemDiskKmsKeyId != null ? !this.systemDiskKmsKeyId.equals(that.systemDiskKmsKeyId) : that.systemDiskKmsKeyId != null) return false;
            if (this.systemDiskPerformanceLevel != null ? !this.systemDiskPerformanceLevel.equals(that.systemDiskPerformanceLevel) : that.systemDiskPerformanceLevel != null) return false;
            if (this.systemDiskProvisionedIops != null ? !this.systemDiskProvisionedIops.equals(that.systemDiskProvisionedIops) : that.systemDiskProvisionedIops != null) return false;
            if (this.systemDiskSize != null ? !this.systemDiskSize.equals(that.systemDiskSize) : that.systemDiskSize != null) return false;
            if (this.tagList != null ? !this.tagList.equals(that.tagList) : that.tagList != null) return false;
            if (this.tenancy != null ? !this.tenancy.equals(that.tenancy) : that.tenancy != null) return false;
            if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.scalingGroupId.hashCode();
            result = 31 * result + (this.affinity != null ? this.affinity.hashCode() : 0);
            result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
            result = 31 * result + (this.creditSpecification != null ? this.creditSpecification.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostId != null ? this.dedicatedHostId.hashCode() : 0);
            result = 31 * result + (this.deploymentSetId != null ? this.deploymentSetId.hashCode() : 0);
            result = 31 * result + (this.diskMappings != null ? this.diskMappings.hashCode() : 0);
            result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
            result = 31 * result + (this.hpcClusterId != null ? this.hpcClusterId.hashCode() : 0);
            result = 31 * result + (this.imageFamily != null ? this.imageFamily.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.imageName != null ? this.imageName.hashCode() : 0);
            result = 31 * result + (this.imageOptionsLoginAsNonRoot != null ? this.imageOptionsLoginAsNonRoot.hashCode() : 0);
            result = 31 * result + (this.instanceDescription != null ? this.instanceDescription.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.instancePatternInfos != null ? this.instancePatternInfos.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.instanceTypeOverrides != null ? this.instanceTypeOverrides.hashCode() : 0);
            result = 31 * result + (this.instanceTypes != null ? this.instanceTypes.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthIn != null ? this.internetMaxBandwidthIn.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.loadBalancerWeight != null ? this.loadBalancerWeight.hashCode() : 0);
            result = 31 * result + (this.memory != null ? this.memory.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.passwordInherit != null ? this.passwordInherit.hashCode() : 0);
            result = 31 * result + (this.privatePoolOptions != null ? this.privatePoolOptions.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.scalingConfigurationName != null ? this.scalingConfigurationName.hashCode() : 0);
            result = 31 * result + (this.securityEnhancementStrategy != null ? this.securityEnhancementStrategy.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
            result = 31 * result + (this.spotDuration != null ? this.spotDuration.hashCode() : 0);
            result = 31 * result + (this.spotInterruptionBehavior != null ? this.spotInterruptionBehavior.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimitForInstanceType != null ? this.spotPriceLimitForInstanceType.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.systemDiskAutoSnapshotPolicyId != null ? this.systemDiskAutoSnapshotPolicyId.hashCode() : 0);
            result = 31 * result + (this.systemDiskBurstingEnabled != null ? this.systemDiskBurstingEnabled.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategories != null ? this.systemDiskCategories.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.systemDiskDescription != null ? this.systemDiskDescription.hashCode() : 0);
            result = 31 * result + (this.systemDiskDiskName != null ? this.systemDiskDiskName.hashCode() : 0);
            result = 31 * result + (this.systemDiskEncryptAlgorithm != null ? this.systemDiskEncryptAlgorithm.hashCode() : 0);
            result = 31 * result + (this.systemDiskEncrypted != null ? this.systemDiskEncrypted.hashCode() : 0);
            result = 31 * result + (this.systemDiskKmsKeyId != null ? this.systemDiskKmsKeyId.hashCode() : 0);
            result = 31 * result + (this.systemDiskPerformanceLevel != null ? this.systemDiskPerformanceLevel.hashCode() : 0);
            result = 31 * result + (this.systemDiskProvisionedIops != null ? this.systemDiskProvisionedIops.hashCode() : 0);
            result = 31 * result + (this.systemDiskSize != null ? this.systemDiskSize.hashCode() : 0);
            result = 31 * result + (this.tagList != null ? this.tagList.hashCode() : 0);
            result = 31 * result + (this.tenancy != null ? this.tenancy.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
