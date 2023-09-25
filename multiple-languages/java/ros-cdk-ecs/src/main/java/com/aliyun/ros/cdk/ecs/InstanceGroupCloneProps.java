package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>ALIYUN::ECS::InstanceGroupClone</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:45.482Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.InstanceGroupCloneProps")
@software.amazon.jsii.Jsii.Proxy(InstanceGroupCloneProps.Jsii$Proxy.class)
public interface InstanceGroupCloneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMaxAmount();

    /**
     * Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance.
     * <p>
     * It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceInstanceId();

    /**
     * Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time.
     * <p>
     * format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoReleaseTime() {
        return null;
    }

    /**
     * Property autoRenew: Whether renew the fee automatically?
     * <p>
     * When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property autoRenewPeriod: The time period of auto renew.
     * <p>
     * When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property backendServerWeight: The weight of backend server of load balancer.
     * <p>
     * From 0 to 100, 0 means offline. Default is 100.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendServerWeight() {
        return null;
    }

    /**
     * Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     * Property deploymentSetId: Deployment set ID.
     * <p>
     * The change of the property does not affect existing instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetId() {
        return null;
    }

    /**
     * Property description: Description of the instance, [2, 256] characters.
     * <p>
     * Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property diskMappings: Disk mappings to attach to instance.
     * <p>
     * Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskMappings() {
        return null;
    }

    /**
     * Property eniMappings: NetworkInterface to attach to instance.
     * <p>
     * Max support 1 ENI.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEniMappings() {
        return null;
    }

    /**
     * Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHpcClusterId() {
        return null;
    }

    /**
     * Property imageId: Image ID to create ecs instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.  Support to use the regular expression to set the different instance name for each ECS instance. InstanceName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'testinstance[123,4]tail'. If you creates 3 instances with the instance name 'testinstance[123,4]tail', all the instances' names are testinstance0123tail, testinstance0124tail, testinstance0125tail.  The 'name_prefix[begin_number,bits]name_suffix' should follow those rules:  1. 'name_prefix' is required.  2. 'name_suffix' is optional.  3. The name regular expression can't include any spaces.  4. The 'bits' must be in range [1, 6].  5. The 'begin_number' must be in range [0, 999999].  6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default.  7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default.  8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
     * <p>
     * The range is [0,200], default is 200 Mbps.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthIn() {
        return null;
    }

    /**
     * Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
     * <p>
     * Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
        return null;
    }

    /**
     * Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
     * <p>
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return null;
    }

    /**
     * Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.
     * <p>
     * Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
     * Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
     * The change of the property does not affect existing instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Addresses() {
        return null;
    }

    /**
     * Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     * Property launchTemplateId: ID of launch template.
     * <p>
     * Launch template id or name must be specified to use launch template
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateId() {
        return null;
    }

    /**
     * Property launchTemplateName: Name of launch template.
     * <p>
     * Launch template id or name must be specified to use launch template
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateName() {
        return null;
    }

    /**
     * Property launchTemplateVersion: Version of launch template.
     * <p>
     * Default version is used if version is not specified.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateVersion() {
        return null;
    }

    /**
     * Property loadBalancerIdToAttach: After the instance is created.
     * <p>
     * Automatic attach it to the load balancer.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerIdToAttach() {
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
     * Property passwordInherit: Specifies whether to use the password preset in the image.
     * <p>
     * To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPasswordInherit() {
        return null;
    }

    /**
     * Property period: Prepaid time period.
     * <p>
     * Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
     * <p>
     * Default value is Month.Old instances will not be changed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
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
     * Property securityGroupId: Security group to create ecs instance.
     * <p>
     * For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property securityGroupIds: The IDs of security groups N to which the instance belongs.
     * <p>
     * The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
        return null;
    }

    /**
     * Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
     * <p>
     * Three decimals is allowed at most.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return null;
    }

    /**
     * Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
     * <p>
     * Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
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
     * Property systemDiskBurstingEnabled: Whether enable bursting.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskBurstingEnabled() {
        return null;
    }

    /**
     * Property systemDiskCategory: Category of system disk.
     * <p>
     * Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry.Old instances will not be changed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
        return null;
    }

    /**
     * Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDescription() {
        return null;
    }

    /**
     * Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDiskName() {
        return null;
    }

    /**
     * Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>ase-256</li>
     * <li>sm4-128
     * Default value: ase-256.</li>
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
     * <li>true: encrypts the system disk.</li>
     * <li>false: does not encrypt the system disk.
     * Default value: false.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskEncrypted() {
        return null;
    }

    /**
     * Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskKmsKeyId() {
        return null;
    }

    /**
     * Property systemDiskProvisionedIops: Provisioning IOPS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskProvisionedIops() {
        return null;
    }

    /**
     * Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster.
     * <p>
     * If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you must specify this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskStorageClusterId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroupClone.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property updatePolicy: Specify the policy at update.
     * <p>
     * The value can be 'ForNewInstances' or 'ForAllInstances'.
     * If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
     * The default is 'ForNewInstances'
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUpdatePolicy() {
        return null;
    }

    /**
     * Property zoneId: The ID of the zone to which the instance belongs.
     * <p>
     * For more information,
     * call the DescribeZones operation to query the most recent zone list.
     * Default value is empty, which means random selection.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceGroupCloneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceGroupCloneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceGroupCloneProps> {
        java.lang.Object maxAmount;
        java.lang.Object sourceInstanceId;
        java.lang.Object autoReleaseTime;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object backendServerWeight;
        java.lang.Object deletionProtection;
        java.lang.Object deploymentSetId;
        java.lang.Object description;
        java.lang.Object diskMappings;
        java.lang.Object eniMappings;
        java.lang.Object hpcClusterId;
        java.lang.Object imageId;
        java.lang.Object instanceName;
        java.lang.Object internetMaxBandwidthIn;
        java.lang.Object internetMaxBandwidthOut;
        java.lang.Object ipv6AddressCount;
        java.lang.Object ipv6Addresses;
        java.lang.Object keyPairName;
        java.lang.Object launchTemplateId;
        java.lang.Object launchTemplateName;
        java.lang.Object launchTemplateVersion;
        java.lang.Object loadBalancerIdToAttach;
        java.lang.Object password;
        java.lang.Object passwordInherit;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object ramRoleName;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupId;
        java.lang.Object securityGroupIds;
        java.lang.Object spotPriceLimit;
        java.lang.Object spotStrategy;
        java.lang.Object systemDiskAutoSnapshotPolicyId;
        java.lang.Object systemDiskBurstingEnabled;
        java.lang.Object systemDiskCategory;
        java.lang.Object systemDiskDescription;
        java.lang.Object systemDiskDiskName;
        java.lang.Object systemDiskEncryptAlgorithm;
        java.lang.Object systemDiskEncrypted;
        java.lang.Object systemDiskKmsKeyId;
        java.lang.Object systemDiskProvisionedIops;
        java.lang.Object systemDiskStorageClusterId;
        java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroupClone.TagsProperty> tags;
        java.lang.Object updatePolicy;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getMaxAmount}
         * @param maxAmount Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000. This parameter is required.
         * @return {@code this}
         */
        public Builder maxAmount(java.lang.Number maxAmount) {
            this.maxAmount = maxAmount;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getMaxAmount}
         * @param maxAmount Property maxAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 1000. This parameter is required.
         * @return {@code this}
         */
        public Builder maxAmount(com.aliyun.ros.cdk.core.IResolvable maxAmount) {
            this.maxAmount = maxAmount;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSourceInstanceId}
         * @param sourceInstanceId Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. This parameter is required.
         *                         It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
         * @return {@code this}
         */
        public Builder sourceInstanceId(java.lang.String sourceInstanceId) {
            this.sourceInstanceId = sourceInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSourceInstanceId}
         * @param sourceInstanceId Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. This parameter is required.
         *                         It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
         * @return {@code this}
         */
        public Builder sourceInstanceId(com.aliyun.ros.cdk.core.IResolvable sourceInstanceId) {
            this.sourceInstanceId = sourceInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getAutoReleaseTime}
         * @param autoReleaseTime Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time.
         *                        format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
         * @return {@code this}
         */
        public Builder autoReleaseTime(java.lang.String autoReleaseTime) {
            this.autoReleaseTime = autoReleaseTime;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getAutoReleaseTime}
         * @param autoReleaseTime Property autoReleaseTime: Auto release time for created instance, Follow ISO8601 standard using UTC time.
         *                        format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
         * @return {@code this}
         */
        public Builder autoReleaseTime(com.aliyun.ros.cdk.core.IResolvable autoReleaseTime) {
            this.autoReleaseTime = autoReleaseTime;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?.
         *                  When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.String autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?.
         *                  When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew.
         *                        When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew.
         *                        When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getBackendServerWeight}
         * @param backendServerWeight Property backendServerWeight: The weight of backend server of load balancer.
         *                            From 0 to 100, 0 means offline. Default is 100.
         * @return {@code this}
         */
        public Builder backendServerWeight(java.lang.Number backendServerWeight) {
            this.backendServerWeight = backendServerWeight;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getBackendServerWeight}
         * @param backendServerWeight Property backendServerWeight: The weight of backend server of load balancer.
         *                            From 0 to 100, 0 means offline. Default is 100.
         * @return {@code this}
         */
        public Builder backendServerWeight(com.aliyun.ros.cdk.core.IResolvable backendServerWeight) {
            this.backendServerWeight = backendServerWeight;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getDeploymentSetId}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID.
         *                        The change of the property does not affect existing instances.
         * @return {@code this}
         */
        public Builder deploymentSetId(java.lang.String deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getDeploymentSetId}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID.
         *                        The change of the property does not affect existing instances.
         * @return {@code this}
         */
        public Builder deploymentSetId(com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getDescription}
         * @param description Property description: Description of the instance, [2, 256] characters.
         *                    Do not fill or empty, the default is empty. Old instances will not be changed.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getDescription}
         * @param description Property description: Description of the instance, [2, 256] characters.
         *                    Do not fill or empty, the default is empty. Old instances will not be changed.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getDiskMappings}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance.
         *                     Max support 16 disks.
         *                     If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder diskMappings(com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getDiskMappings}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance.
         *                     Max support 16 disks.
         *                     If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder diskMappings(java.util.List<? extends java.lang.Object> diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getEniMappings}
         * @param eniMappings Property eniMappings: NetworkInterface to attach to instance.
         *                    Max support 1 ENI.
         * @return {@code this}
         */
        public Builder eniMappings(com.aliyun.ros.cdk.core.IResolvable eniMappings) {
            this.eniMappings = eniMappings;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getEniMappings}
         * @param eniMappings Property eniMappings: NetworkInterface to attach to instance.
         *                    Max support 1 ENI.
         * @return {@code this}
         */
        public Builder eniMappings(java.util.List<? extends java.lang.Object> eniMappings) {
            this.eniMappings = eniMappings;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getHpcClusterId}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
         * @return {@code this}
         */
        public Builder hpcClusterId(java.lang.String hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getHpcClusterId}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
         * @return {@code this}
         */
        public Builder hpcClusterId(com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getImageId}
         * @param imageId Property imageId: Image ID to create ecs instance.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getImageId}
         * @param imageId Property imageId: Image ID to create ecs instance.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getInstanceName}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.  Support to use the regular expression to set the different instance name for each ECS instance. InstanceName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'testinstance[123,4]tail'. If you creates 3 instances with the instance name 'testinstance[123,4]tail', all the instances' names are testinstance0123tail, testinstance0124tail, testinstance0125tail.  The 'name_prefix[begin_number,bits]name_suffix' should follow those rules:  1. 'name_prefix' is required.  2. 'name_suffix' is optional.  3. The name regular expression can't include any spaces.  4. The 'bits' must be in range [1, 6].  5. The 'begin_number' must be in range [0, 999999].  6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default.  7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default.  8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getInstanceName}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.  Support to use the regular expression to set the different instance name for each ECS instance. InstanceName could be specified as 'name_prefix[begin_number,bits]name_suffix', such as 'testinstance[123,4]tail'. If you creates 3 instances with the instance name 'testinstance[123,4]tail', all the instances' names are testinstance0123tail, testinstance0124tail, testinstance0125tail.  The 'name_prefix[begin_number,bits]name_suffix' should follow those rules:  1. 'name_prefix' is required.  2. 'name_suffix' is optional.  3. The name regular expression can't include any spaces.  4. The 'bits' must be in range [1, 6].  5. The 'begin_number' must be in range [0, 999999].  6. You could only specify 'begin_number'. The 'bits' will be set as 6 by default.  7. You also could only specify the [] or [,]. The 'begin_number' will be set as 0 by default, the 'bits' will be set as 6 by default.  8. If the bits of 'begin_number' is less than the 'bits' you specified, like [1234,1], the 'bits' will be set as 6 by default.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         *                               The range is [0,200], default is 200 Mbps.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(java.lang.Number internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         *                               The range is [0,200], default is 200 Mbps.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
         *                                Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
         *                                Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getIpv6AddressCount}
         * @param ipv6AddressCount Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
         *                         Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         *                         The change of the property does not affect existing instances.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getIpv6AddressCount}
         * @param ipv6AddressCount Property ipv6AddressCount: Specifies the number of randomly generated IPv6 addresses for the elastic NIC.
         *                         Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         *                         The change of the property does not affect existing instances.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getIpv6Addresses}
         * @param ipv6Addresses Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.
         *                      Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
         *                      Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         *                      The change of the property does not affect existing instances.
         * @return {@code this}
         */
        public Builder ipv6Addresses(java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getIpv6Addresses}
         * @param ipv6Addresses Property ipv6Addresses: Specify one or more IPv6 addresses for the elastic NIC.
         *                      Currently, the maximum list size is 1. Example value: 2001:db8:1234:1a00::*** .
         *                      Note You cannot specify the parameters Ipv6Addresses and Ipv6AddressCount at the same time.
         *                      The change of the property does not affect existing instances.
         * @return {@code this}
         */
        public Builder ipv6Addresses(com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getLaunchTemplateId}
         * @param launchTemplateId Property launchTemplateId: ID of launch template.
         *                         Launch template id or name must be specified to use launch template
         * @return {@code this}
         */
        public Builder launchTemplateId(java.lang.String launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getLaunchTemplateId}
         * @param launchTemplateId Property launchTemplateId: ID of launch template.
         *                         Launch template id or name must be specified to use launch template
         * @return {@code this}
         */
        public Builder launchTemplateId(com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getLaunchTemplateName}
         * @param launchTemplateName Property launchTemplateName: Name of launch template.
         *                           Launch template id or name must be specified to use launch template
         * @return {@code this}
         */
        public Builder launchTemplateName(java.lang.String launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getLaunchTemplateName}
         * @param launchTemplateName Property launchTemplateName: Name of launch template.
         *                           Launch template id or name must be specified to use launch template
         * @return {@code this}
         */
        public Builder launchTemplateName(com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion Property launchTemplateVersion: Version of launch template.
         *                              Default version is used if version is not specified.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(java.lang.String launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion Property launchTemplateVersion: Version of launch template.
         *                              Default version is used if version is not specified.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(com.aliyun.ros.cdk.core.IResolvable launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getLoadBalancerIdToAttach}
         * @param loadBalancerIdToAttach Property loadBalancerIdToAttach: After the instance is created.
         *                               Automatic attach it to the load balancer.
         * @return {@code this}
         */
        public Builder loadBalancerIdToAttach(java.lang.String loadBalancerIdToAttach) {
            this.loadBalancerIdToAttach = loadBalancerIdToAttach;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getLoadBalancerIdToAttach}
         * @param loadBalancerIdToAttach Property loadBalancerIdToAttach: After the instance is created.
         *                               Automatic attach it to the load balancer.
         * @return {@code this}
         */
        public Builder loadBalancerIdToAttach(com.aliyun.ros.cdk.core.IResolvable loadBalancerIdToAttach) {
            this.loadBalancerIdToAttach = loadBalancerIdToAttach;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getPassword}
         * @param password Property password: Password of created ecs instance.
         *                 Must contain at least 3 types of special character, lower character, upper character, number.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getPassword}
         * @param password Property password: Password of created ecs instance.
         *                 Must contain at least 3 types of special character, lower character, upper character, number.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getPasswordInherit}
         * @param passwordInherit Property passwordInherit: Specifies whether to use the password preset in the image.
         *                        To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
         * @return {@code this}
         */
        public Builder passwordInherit(java.lang.Boolean passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getPasswordInherit}
         * @param passwordInherit Property passwordInherit: Specifies whether to use the password preset in the image.
         *                        To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
         * @return {@code this}
         */
        public Builder passwordInherit(com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getPeriod}
         * @param period Property period: Prepaid time period.
         *               Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getPeriod}
         * @param period Property period: Prepaid time period.
         *               Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
         *                   Default value is Month.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
         *                   Default value is Month.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: Instance RAM role name.
         *                    The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: Instance RAM role name.
         *                    The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance.
         *                        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance.
         *                        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: The IDs of security groups N to which the instance belongs.
         *                         The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: The IDs of security groups N to which the instance belongs.
         *                         The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         *                       Three decimals is allowed at most.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.String spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         *                       Three decimals is allowed at most.
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         *                     Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         *                     Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskAutoSnapshotPolicyId}
         * @param systemDiskAutoSnapshotPolicyId Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
         * @return {@code this}
         */
        public Builder systemDiskAutoSnapshotPolicyId(java.lang.String systemDiskAutoSnapshotPolicyId) {
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskAutoSnapshotPolicyId}
         * @param systemDiskAutoSnapshotPolicyId Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
         * @return {@code this}
         */
        public Builder systemDiskAutoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable systemDiskAutoSnapshotPolicyId) {
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskBurstingEnabled}
         * @param systemDiskBurstingEnabled Property systemDiskBurstingEnabled: Whether enable bursting.
         * @return {@code this}
         */
        public Builder systemDiskBurstingEnabled(java.lang.Boolean systemDiskBurstingEnabled) {
            this.systemDiskBurstingEnabled = systemDiskBurstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskBurstingEnabled}
         * @param systemDiskBurstingEnabled Property systemDiskBurstingEnabled: Whether enable bursting.
         * @return {@code this}
         */
        public Builder systemDiskBurstingEnabled(com.aliyun.ros.cdk.core.IResolvable systemDiskBurstingEnabled) {
            this.systemDiskBurstingEnabled = systemDiskBurstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk.
         *                           Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk.
         *                           Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto|cloud_essd_entry.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskDescription}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder systemDiskDescription(java.lang.String systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskDescription}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder systemDiskDescription(com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskDiskName}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(java.lang.String systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskDiskName}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskEncryptAlgorithm}
         * @param systemDiskEncryptAlgorithm Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk.
         *                                   Valid values:
         *                                   <p>
         *                                   <ul>
         *                                   <li>ase-256</li>
         *                                   <li>sm4-128
         *                                   Default value: ase-256.</li>
         *                                   </ul>
         * @return {@code this}
         */
        public Builder systemDiskEncryptAlgorithm(java.lang.String systemDiskEncryptAlgorithm) {
            this.systemDiskEncryptAlgorithm = systemDiskEncryptAlgorithm;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskEncryptAlgorithm}
         * @param systemDiskEncryptAlgorithm Property systemDiskEncryptAlgorithm: The algorithm to use to encrypt the system disk.
         *                                   Valid values:
         *                                   <p>
         *                                   <ul>
         *                                   <li>ase-256</li>
         *                                   <li>sm4-128
         *                                   Default value: ase-256.</li>
         *                                   </ul>
         * @return {@code this}
         */
        public Builder systemDiskEncryptAlgorithm(com.aliyun.ros.cdk.core.IResolvable systemDiskEncryptAlgorithm) {
            this.systemDiskEncryptAlgorithm = systemDiskEncryptAlgorithm;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskEncrypted}
         * @param systemDiskEncrypted Property systemDiskEncrypted: Specifies whether to encrypt the system disk.
         *                            Valid values:
         *                            <p>
         *                            <ul>
         *                            <li>true: encrypts the system disk.</li>
         *                            <li>false: does not encrypt the system disk.
         *                            Default value: false.</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder systemDiskEncrypted(java.lang.String systemDiskEncrypted) {
            this.systemDiskEncrypted = systemDiskEncrypted;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskEncrypted}
         * @param systemDiskEncrypted Property systemDiskEncrypted: Specifies whether to encrypt the system disk.
         *                            Valid values:
         *                            <p>
         *                            <ul>
         *                            <li>true: encrypts the system disk.</li>
         *                            <li>false: does not encrypt the system disk.
         *                            Default value: false.</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder systemDiskEncrypted(com.aliyun.ros.cdk.core.IResolvable systemDiskEncrypted) {
            this.systemDiskEncrypted = systemDiskEncrypted;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskKmsKeyId}
         * @param systemDiskKmsKeyId Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk.
         * @return {@code this}
         */
        public Builder systemDiskKmsKeyId(java.lang.String systemDiskKmsKeyId) {
            this.systemDiskKmsKeyId = systemDiskKmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskKmsKeyId}
         * @param systemDiskKmsKeyId Property systemDiskKmsKeyId: The ID of the KMS key to use for the system disk.
         * @return {@code this}
         */
        public Builder systemDiskKmsKeyId(com.aliyun.ros.cdk.core.IResolvable systemDiskKmsKeyId) {
            this.systemDiskKmsKeyId = systemDiskKmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskProvisionedIops}
         * @param systemDiskProvisionedIops Property systemDiskProvisionedIops: Provisioning IOPS.
         * @return {@code this}
         */
        public Builder systemDiskProvisionedIops(java.lang.Number systemDiskProvisionedIops) {
            this.systemDiskProvisionedIops = systemDiskProvisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskProvisionedIops}
         * @param systemDiskProvisionedIops Property systemDiskProvisionedIops: Provisioning IOPS.
         * @return {@code this}
         */
        public Builder systemDiskProvisionedIops(com.aliyun.ros.cdk.core.IResolvable systemDiskProvisionedIops) {
            this.systemDiskProvisionedIops = systemDiskProvisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskStorageClusterId}
         * @param systemDiskStorageClusterId Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster.
         *                                   If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you must specify this parameter.
         * @return {@code this}
         */
        public Builder systemDiskStorageClusterId(java.lang.String systemDiskStorageClusterId) {
            this.systemDiskStorageClusterId = systemDiskStorageClusterId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getSystemDiskStorageClusterId}
         * @param systemDiskStorageClusterId Property systemDiskStorageClusterId: The ID of the dedicated block storage cluster.
         *                                   If you want to use disks in a dedicated block storage cluster as system disks when you create instances, you must specify this parameter.
         * @return {@code this}
         */
        public Builder systemDiskStorageClusterId(com.aliyun.ros.cdk.core.IResolvable systemDiskStorageClusterId) {
            this.systemDiskStorageClusterId = systemDiskStorageClusterId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosInstanceGroupClone.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroupClone.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getUpdatePolicy}
         * @param updatePolicy Property updatePolicy: Specify the policy at update.
         *                     The value can be 'ForNewInstances' or 'ForAllInstances'.
         *                     If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
         *                     The default is 'ForNewInstances'
         * @return {@code this}
         */
        public Builder updatePolicy(java.lang.String updatePolicy) {
            this.updatePolicy = updatePolicy;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getUpdatePolicy}
         * @param updatePolicy Property updatePolicy: Specify the policy at update.
         *                     The value can be 'ForNewInstances' or 'ForAllInstances'.
         *                     If UpdatePolicy is 'ForAllInstance', The updatable parameters are InstanceType, ImageId, SystemDiskSize, SystemDiskCategory, Password, UserData,InternetChargeType, InternetMaxBandwidthOut, InternetMaxBandwidthIn.
         *                     The default is 'ForNewInstances'
         * @return {@code this}
         */
        public Builder updatePolicy(com.aliyun.ros.cdk.core.IResolvable updatePolicy) {
            this.updatePolicy = updatePolicy;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone to which the instance belongs.
         *               For more information,
         *               call the DescribeZones operation to query the most recent zone list.
         *               Default value is empty, which means random selection.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceGroupCloneProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone to which the instance belongs.
         *               For more information,
         *               call the DescribeZones operation to query the most recent zone list.
         *               Default value is empty, which means random selection.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceGroupCloneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceGroupCloneProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceGroupCloneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceGroupCloneProps {
        private final java.lang.Object maxAmount;
        private final java.lang.Object sourceInstanceId;
        private final java.lang.Object autoReleaseTime;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object backendServerWeight;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object deploymentSetId;
        private final java.lang.Object description;
        private final java.lang.Object diskMappings;
        private final java.lang.Object eniMappings;
        private final java.lang.Object hpcClusterId;
        private final java.lang.Object imageId;
        private final java.lang.Object instanceName;
        private final java.lang.Object internetMaxBandwidthIn;
        private final java.lang.Object internetMaxBandwidthOut;
        private final java.lang.Object ipv6AddressCount;
        private final java.lang.Object ipv6Addresses;
        private final java.lang.Object keyPairName;
        private final java.lang.Object launchTemplateId;
        private final java.lang.Object launchTemplateName;
        private final java.lang.Object launchTemplateVersion;
        private final java.lang.Object loadBalancerIdToAttach;
        private final java.lang.Object password;
        private final java.lang.Object passwordInherit;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityGroupIds;
        private final java.lang.Object spotPriceLimit;
        private final java.lang.Object spotStrategy;
        private final java.lang.Object systemDiskAutoSnapshotPolicyId;
        private final java.lang.Object systemDiskBurstingEnabled;
        private final java.lang.Object systemDiskCategory;
        private final java.lang.Object systemDiskDescription;
        private final java.lang.Object systemDiskDiskName;
        private final java.lang.Object systemDiskEncryptAlgorithm;
        private final java.lang.Object systemDiskEncrypted;
        private final java.lang.Object systemDiskKmsKeyId;
        private final java.lang.Object systemDiskProvisionedIops;
        private final java.lang.Object systemDiskStorageClusterId;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroupClone.TagsProperty> tags;
        private final java.lang.Object updatePolicy;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.maxAmount = software.amazon.jsii.Kernel.get(this, "maxAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceInstanceId = software.amazon.jsii.Kernel.get(this, "sourceInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoReleaseTime = software.amazon.jsii.Kernel.get(this, "autoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backendServerWeight = software.amazon.jsii.Kernel.get(this, "backendServerWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploymentSetId = software.amazon.jsii.Kernel.get(this, "deploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskMappings = software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eniMappings = software.amazon.jsii.Kernel.get(this, "eniMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hpcClusterId = software.amazon.jsii.Kernel.get(this, "hpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthIn = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Addresses = software.amazon.jsii.Kernel.get(this, "ipv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateId = software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateName = software.amazon.jsii.Kernel.get(this, "launchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateVersion = software.amazon.jsii.Kernel.get(this, "launchTemplateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerIdToAttach = software.amazon.jsii.Kernel.get(this, "loadBalancerIdToAttach", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passwordInherit = software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskAutoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "systemDiskAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskBurstingEnabled = software.amazon.jsii.Kernel.get(this, "systemDiskBurstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDescription = software.amazon.jsii.Kernel.get(this, "systemDiskDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDiskName = software.amazon.jsii.Kernel.get(this, "systemDiskDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskEncryptAlgorithm = software.amazon.jsii.Kernel.get(this, "systemDiskEncryptAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskEncrypted = software.amazon.jsii.Kernel.get(this, "systemDiskEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskKmsKeyId = software.amazon.jsii.Kernel.get(this, "systemDiskKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskProvisionedIops = software.amazon.jsii.Kernel.get(this, "systemDiskProvisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskStorageClusterId = software.amazon.jsii.Kernel.get(this, "systemDiskStorageClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosInstanceGroupClone.TagsProperty.class)));
            this.updatePolicy = software.amazon.jsii.Kernel.get(this, "updatePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.maxAmount = java.util.Objects.requireNonNull(builder.maxAmount, "maxAmount is required");
            this.sourceInstanceId = java.util.Objects.requireNonNull(builder.sourceInstanceId, "sourceInstanceId is required");
            this.autoReleaseTime = builder.autoReleaseTime;
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.backendServerWeight = builder.backendServerWeight;
            this.deletionProtection = builder.deletionProtection;
            this.deploymentSetId = builder.deploymentSetId;
            this.description = builder.description;
            this.diskMappings = builder.diskMappings;
            this.eniMappings = builder.eniMappings;
            this.hpcClusterId = builder.hpcClusterId;
            this.imageId = builder.imageId;
            this.instanceName = builder.instanceName;
            this.internetMaxBandwidthIn = builder.internetMaxBandwidthIn;
            this.internetMaxBandwidthOut = builder.internetMaxBandwidthOut;
            this.ipv6AddressCount = builder.ipv6AddressCount;
            this.ipv6Addresses = builder.ipv6Addresses;
            this.keyPairName = builder.keyPairName;
            this.launchTemplateId = builder.launchTemplateId;
            this.launchTemplateName = builder.launchTemplateName;
            this.launchTemplateVersion = builder.launchTemplateVersion;
            this.loadBalancerIdToAttach = builder.loadBalancerIdToAttach;
            this.password = builder.password;
            this.passwordInherit = builder.passwordInherit;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.ramRoleName = builder.ramRoleName;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupId = builder.securityGroupId;
            this.securityGroupIds = builder.securityGroupIds;
            this.spotPriceLimit = builder.spotPriceLimit;
            this.spotStrategy = builder.spotStrategy;
            this.systemDiskAutoSnapshotPolicyId = builder.systemDiskAutoSnapshotPolicyId;
            this.systemDiskBurstingEnabled = builder.systemDiskBurstingEnabled;
            this.systemDiskCategory = builder.systemDiskCategory;
            this.systemDiskDescription = builder.systemDiskDescription;
            this.systemDiskDiskName = builder.systemDiskDiskName;
            this.systemDiskEncryptAlgorithm = builder.systemDiskEncryptAlgorithm;
            this.systemDiskEncrypted = builder.systemDiskEncrypted;
            this.systemDiskKmsKeyId = builder.systemDiskKmsKeyId;
            this.systemDiskProvisionedIops = builder.systemDiskProvisionedIops;
            this.systemDiskStorageClusterId = builder.systemDiskStorageClusterId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroupClone.TagsProperty>)builder.tags;
            this.updatePolicy = builder.updatePolicy;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getMaxAmount() {
            return this.maxAmount;
        }

        @Override
        public final java.lang.Object getSourceInstanceId() {
            return this.sourceInstanceId;
        }

        @Override
        public final java.lang.Object getAutoReleaseTime() {
            return this.autoReleaseTime;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getBackendServerWeight() {
            return this.backendServerWeight;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getDeploymentSetId() {
            return this.deploymentSetId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDiskMappings() {
            return this.diskMappings;
        }

        @Override
        public final java.lang.Object getEniMappings() {
            return this.eniMappings;
        }

        @Override
        public final java.lang.Object getHpcClusterId() {
            return this.hpcClusterId;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
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
        public final java.lang.Object getIpv6AddressCount() {
            return this.ipv6AddressCount;
        }

        @Override
        public final java.lang.Object getIpv6Addresses() {
            return this.ipv6Addresses;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.Object getLaunchTemplateId() {
            return this.launchTemplateId;
        }

        @Override
        public final java.lang.Object getLaunchTemplateName() {
            return this.launchTemplateName;
        }

        @Override
        public final java.lang.Object getLaunchTemplateVersion() {
            return this.launchTemplateVersion;
        }

        @Override
        public final java.lang.Object getLoadBalancerIdToAttach() {
            return this.loadBalancerIdToAttach;
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
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
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
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupIds() {
            return this.securityGroupIds;
        }

        @Override
        public final java.lang.Object getSpotPriceLimit() {
            return this.spotPriceLimit;
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
        public final java.lang.Object getSystemDiskProvisionedIops() {
            return this.systemDiskProvisionedIops;
        }

        @Override
        public final java.lang.Object getSystemDiskStorageClusterId() {
            return this.systemDiskStorageClusterId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroupClone.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUpdatePolicy() {
            return this.updatePolicy;
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

            data.set("maxAmount", om.valueToTree(this.getMaxAmount()));
            data.set("sourceInstanceId", om.valueToTree(this.getSourceInstanceId()));
            if (this.getAutoReleaseTime() != null) {
                data.set("autoReleaseTime", om.valueToTree(this.getAutoReleaseTime()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getBackendServerWeight() != null) {
                data.set("backendServerWeight", om.valueToTree(this.getBackendServerWeight()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getDeploymentSetId() != null) {
                data.set("deploymentSetId", om.valueToTree(this.getDeploymentSetId()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDiskMappings() != null) {
                data.set("diskMappings", om.valueToTree(this.getDiskMappings()));
            }
            if (this.getEniMappings() != null) {
                data.set("eniMappings", om.valueToTree(this.getEniMappings()));
            }
            if (this.getHpcClusterId() != null) {
                data.set("hpcClusterId", om.valueToTree(this.getHpcClusterId()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getInternetMaxBandwidthIn() != null) {
                data.set("internetMaxBandwidthIn", om.valueToTree(this.getInternetMaxBandwidthIn()));
            }
            if (this.getInternetMaxBandwidthOut() != null) {
                data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
            }
            if (this.getIpv6AddressCount() != null) {
                data.set("ipv6AddressCount", om.valueToTree(this.getIpv6AddressCount()));
            }
            if (this.getIpv6Addresses() != null) {
                data.set("ipv6Addresses", om.valueToTree(this.getIpv6Addresses()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getLaunchTemplateId() != null) {
                data.set("launchTemplateId", om.valueToTree(this.getLaunchTemplateId()));
            }
            if (this.getLaunchTemplateName() != null) {
                data.set("launchTemplateName", om.valueToTree(this.getLaunchTemplateName()));
            }
            if (this.getLaunchTemplateVersion() != null) {
                data.set("launchTemplateVersion", om.valueToTree(this.getLaunchTemplateVersion()));
            }
            if (this.getLoadBalancerIdToAttach() != null) {
                data.set("loadBalancerIdToAttach", om.valueToTree(this.getLoadBalancerIdToAttach()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPasswordInherit() != null) {
                data.set("passwordInherit", om.valueToTree(this.getPasswordInherit()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getRamRoleName() != null) {
                data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityGroupIds() != null) {
                data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));
            }
            if (this.getSpotPriceLimit() != null) {
                data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
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
            if (this.getSystemDiskProvisionedIops() != null) {
                data.set("systemDiskProvisionedIops", om.valueToTree(this.getSystemDiskProvisionedIops()));
            }
            if (this.getSystemDiskStorageClusterId() != null) {
                data.set("systemDiskStorageClusterId", om.valueToTree(this.getSystemDiskStorageClusterId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUpdatePolicy() != null) {
                data.set("updatePolicy", om.valueToTree(this.getUpdatePolicy()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.InstanceGroupCloneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceGroupCloneProps.Jsii$Proxy that = (InstanceGroupCloneProps.Jsii$Proxy) o;

            if (!maxAmount.equals(that.maxAmount)) return false;
            if (!sourceInstanceId.equals(that.sourceInstanceId)) return false;
            if (this.autoReleaseTime != null ? !this.autoReleaseTime.equals(that.autoReleaseTime) : that.autoReleaseTime != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.backendServerWeight != null ? !this.backendServerWeight.equals(that.backendServerWeight) : that.backendServerWeight != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.deploymentSetId != null ? !this.deploymentSetId.equals(that.deploymentSetId) : that.deploymentSetId != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskMappings != null ? !this.diskMappings.equals(that.diskMappings) : that.diskMappings != null) return false;
            if (this.eniMappings != null ? !this.eniMappings.equals(that.eniMappings) : that.eniMappings != null) return false;
            if (this.hpcClusterId != null ? !this.hpcClusterId.equals(that.hpcClusterId) : that.hpcClusterId != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.internetMaxBandwidthIn != null ? !this.internetMaxBandwidthIn.equals(that.internetMaxBandwidthIn) : that.internetMaxBandwidthIn != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
            if (this.ipv6Addresses != null ? !this.ipv6Addresses.equals(that.ipv6Addresses) : that.ipv6Addresses != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.launchTemplateId != null ? !this.launchTemplateId.equals(that.launchTemplateId) : that.launchTemplateId != null) return false;
            if (this.launchTemplateName != null ? !this.launchTemplateName.equals(that.launchTemplateName) : that.launchTemplateName != null) return false;
            if (this.launchTemplateVersion != null ? !this.launchTemplateVersion.equals(that.launchTemplateVersion) : that.launchTemplateVersion != null) return false;
            if (this.loadBalancerIdToAttach != null ? !this.loadBalancerIdToAttach.equals(that.loadBalancerIdToAttach) : that.loadBalancerIdToAttach != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.passwordInherit != null ? !this.passwordInherit.equals(that.passwordInherit) : that.passwordInherit != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
            if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.systemDiskAutoSnapshotPolicyId != null ? !this.systemDiskAutoSnapshotPolicyId.equals(that.systemDiskAutoSnapshotPolicyId) : that.systemDiskAutoSnapshotPolicyId != null) return false;
            if (this.systemDiskBurstingEnabled != null ? !this.systemDiskBurstingEnabled.equals(that.systemDiskBurstingEnabled) : that.systemDiskBurstingEnabled != null) return false;
            if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
            if (this.systemDiskDescription != null ? !this.systemDiskDescription.equals(that.systemDiskDescription) : that.systemDiskDescription != null) return false;
            if (this.systemDiskDiskName != null ? !this.systemDiskDiskName.equals(that.systemDiskDiskName) : that.systemDiskDiskName != null) return false;
            if (this.systemDiskEncryptAlgorithm != null ? !this.systemDiskEncryptAlgorithm.equals(that.systemDiskEncryptAlgorithm) : that.systemDiskEncryptAlgorithm != null) return false;
            if (this.systemDiskEncrypted != null ? !this.systemDiskEncrypted.equals(that.systemDiskEncrypted) : that.systemDiskEncrypted != null) return false;
            if (this.systemDiskKmsKeyId != null ? !this.systemDiskKmsKeyId.equals(that.systemDiskKmsKeyId) : that.systemDiskKmsKeyId != null) return false;
            if (this.systemDiskProvisionedIops != null ? !this.systemDiskProvisionedIops.equals(that.systemDiskProvisionedIops) : that.systemDiskProvisionedIops != null) return false;
            if (this.systemDiskStorageClusterId != null ? !this.systemDiskStorageClusterId.equals(that.systemDiskStorageClusterId) : that.systemDiskStorageClusterId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.updatePolicy != null ? !this.updatePolicy.equals(that.updatePolicy) : that.updatePolicy != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.maxAmount.hashCode();
            result = 31 * result + (this.sourceInstanceId.hashCode());
            result = 31 * result + (this.autoReleaseTime != null ? this.autoReleaseTime.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.backendServerWeight != null ? this.backendServerWeight.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.deploymentSetId != null ? this.deploymentSetId.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskMappings != null ? this.diskMappings.hashCode() : 0);
            result = 31 * result + (this.eniMappings != null ? this.eniMappings.hashCode() : 0);
            result = 31 * result + (this.hpcClusterId != null ? this.hpcClusterId.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthIn != null ? this.internetMaxBandwidthIn.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
            result = 31 * result + (this.ipv6Addresses != null ? this.ipv6Addresses.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.launchTemplateId != null ? this.launchTemplateId.hashCode() : 0);
            result = 31 * result + (this.launchTemplateName != null ? this.launchTemplateName.hashCode() : 0);
            result = 31 * result + (this.launchTemplateVersion != null ? this.launchTemplateVersion.hashCode() : 0);
            result = 31 * result + (this.loadBalancerIdToAttach != null ? this.loadBalancerIdToAttach.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.passwordInherit != null ? this.passwordInherit.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.systemDiskAutoSnapshotPolicyId != null ? this.systemDiskAutoSnapshotPolicyId.hashCode() : 0);
            result = 31 * result + (this.systemDiskBurstingEnabled != null ? this.systemDiskBurstingEnabled.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.systemDiskDescription != null ? this.systemDiskDescription.hashCode() : 0);
            result = 31 * result + (this.systemDiskDiskName != null ? this.systemDiskDiskName.hashCode() : 0);
            result = 31 * result + (this.systemDiskEncryptAlgorithm != null ? this.systemDiskEncryptAlgorithm.hashCode() : 0);
            result = 31 * result + (this.systemDiskEncrypted != null ? this.systemDiskEncrypted.hashCode() : 0);
            result = 31 * result + (this.systemDiskKmsKeyId != null ? this.systemDiskKmsKeyId.hashCode() : 0);
            result = 31 * result + (this.systemDiskProvisionedIops != null ? this.systemDiskProvisionedIops.hashCode() : 0);
            result = 31 * result + (this.systemDiskStorageClusterId != null ? this.systemDiskStorageClusterId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.updatePolicy != null ? this.updatePolicy.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
