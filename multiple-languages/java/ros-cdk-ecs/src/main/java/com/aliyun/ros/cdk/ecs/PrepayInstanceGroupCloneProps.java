package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::PrepayInstanceGroupClone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.256Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.PrepayInstanceGroupCloneProps")
@software.amazon.jsii.Jsii.Proxy(PrepayInstanceGroupCloneProps.Jsii$Proxy.class)
public interface PrepayInstanceGroupCloneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMaxAmount();

    /**
     * Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMinAmount();

    /**
     * Property period: Prepaid time period.
     * <p>
     * While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

    /**
     * Property periodType: Charge period for created instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriodType();

    /**
     * Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance.
     * <p>
     * It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceInstanceId();

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
     * When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
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
     * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
     * <p>
     * The range is [1,200], default is 200 Mbps.
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
     * Property periodUnit: Unit of prepaid time period, it could be Week/Month.
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
     * Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskAutoSnapshotPolicyId() {
        return null;
    }

    /**
     * Property systemDiskCategory: Category of system disk.
     * <p>
     * Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
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
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone.TagsProperty> getTags() {
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
     * @return a {@link Builder} of {@link PrepayInstanceGroupCloneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PrepayInstanceGroupCloneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PrepayInstanceGroupCloneProps> {
        private java.lang.Object maxAmount;
        private java.lang.Object minAmount;
        private java.lang.Object period;
        private java.lang.Object periodType;
        private java.lang.Object sourceInstanceId;
        private java.lang.Object autoRenew;
        private java.lang.Object autoRenewPeriod;
        private java.lang.Object deploymentSetId;
        private java.lang.Object description;
        private java.lang.Object diskMappings;
        private java.lang.Object eniMappings;
        private java.lang.Object hpcClusterId;
        private java.lang.Object imageId;
        private java.lang.Object instanceName;
        private java.lang.Object internetMaxBandwidthIn;
        private java.lang.Object internetMaxBandwidthOut;
        private java.lang.Object keyPairName;
        private java.lang.Object launchTemplateId;
        private java.lang.Object launchTemplateName;
        private java.lang.Object launchTemplateVersion;
        private java.lang.Object password;
        private java.lang.Object passwordInherit;
        private java.lang.Object periodUnit;
        private java.lang.Object ramRoleName;
        private java.lang.Object securityGroupId;
        private java.lang.Object securityGroupIds;
        private java.lang.Object systemDiskAutoSnapshotPolicyId;
        private java.lang.Object systemDiskCategory;
        private java.lang.Object systemDiskDescription;
        private java.lang.Object systemDiskDiskName;
        private java.util.List<com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone.TagsProperty> tags;
        private java.lang.Object zoneId;

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getMaxAmount}
         * @param maxAmount Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100. This parameter is required.
         * @return {@code this}
         */
        public Builder maxAmount(java.lang.Number maxAmount) {
            this.maxAmount = maxAmount;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getMaxAmount}
         * @param maxAmount Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100. This parameter is required.
         * @return {@code this}
         */
        public Builder maxAmount(com.aliyun.ros.cdk.core.IResolvable maxAmount) {
            this.maxAmount = maxAmount;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getMinAmount}
         * @param minAmount Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100. This parameter is required.
         * @return {@code this}
         */
        public Builder minAmount(java.lang.Number minAmount) {
            this.minAmount = minAmount;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getMinAmount}
         * @param minAmount Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100. This parameter is required.
         * @return {@code this}
         */
        public Builder minAmount(com.aliyun.ros.cdk.core.IResolvable minAmount) {
            this.minAmount = minAmount;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getPeriod}
         * @param period Property period: Prepaid time period. This parameter is required.
         *               While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getPeriod}
         * @param period Property period: Prepaid time period. This parameter is required.
         *               While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getPeriodType}
         * @param periodType Property periodType: Charge period for created instances. This parameter is required.
         * @return {@code this}
         */
        public Builder periodType(java.lang.String periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getPeriodType}
         * @param periodType Property periodType: Charge period for created instances. This parameter is required.
         * @return {@code this}
         */
        public Builder periodType(com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSourceInstanceId}
         * @param sourceInstanceId Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. This parameter is required.
         *                         It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
         * @return {@code this}
         */
        public Builder sourceInstanceId(java.lang.String sourceInstanceId) {
            this.sourceInstanceId = sourceInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSourceInstanceId}
         * @param sourceInstanceId Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. This parameter is required.
         *                         It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
         * @return {@code this}
         */
        public Builder sourceInstanceId(com.aliyun.ros.cdk.core.IResolvable sourceInstanceId) {
            this.sourceInstanceId = sourceInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?.
         *                  When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.String autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether renew the fee automatically?.
         *                  When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew.
         *                        When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew.
         *                        When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getDeploymentSetId}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID.
         *                        The change of the property does not affect existing instances.
         * @return {@code this}
         */
        public Builder deploymentSetId(java.lang.String deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getDeploymentSetId}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID.
         *                        The change of the property does not affect existing instances.
         * @return {@code this}
         */
        public Builder deploymentSetId(com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getDescription}
         * @param description Property description: Description of the instance, [2, 256] characters.
         *                    Do not fill or empty, the default is empty. Old instances will not be changed.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getDescription}
         * @param description Property description: Description of the instance, [2, 256] characters.
         *                    Do not fill or empty, the default is empty. Old instances will not be changed.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getDiskMappings}
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
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getDiskMappings}
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
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getEniMappings}
         * @param eniMappings Property eniMappings: NetworkInterface to attach to instance.
         *                    Max support 1 ENI.
         * @return {@code this}
         */
        public Builder eniMappings(com.aliyun.ros.cdk.core.IResolvable eniMappings) {
            this.eniMappings = eniMappings;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getEniMappings}
         * @param eniMappings Property eniMappings: NetworkInterface to attach to instance.
         *                    Max support 1 ENI.
         * @return {@code this}
         */
        public Builder eniMappings(java.util.List<? extends java.lang.Object> eniMappings) {
            this.eniMappings = eniMappings;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getHpcClusterId}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
         * @return {@code this}
         */
        public Builder hpcClusterId(java.lang.String hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getHpcClusterId}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
         * @return {@code this}
         */
        public Builder hpcClusterId(com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getImageId}
         * @param imageId Property imageId: Image ID to create ecs instance.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getImageId}
         * @param imageId Property imageId: Image ID to create ecs instance.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getInstanceName}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getInstanceName}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         *                               The range is [1,200], default is 200 Mbps.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(java.lang.Number internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         *                               The range is [1,200], default is 200 Mbps.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
         *                                Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
         *                                Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getLaunchTemplateId}
         * @param launchTemplateId Property launchTemplateId: ID of launch template.
         *                         Launch template id or name must be specified to use launch template
         * @return {@code this}
         */
        public Builder launchTemplateId(java.lang.String launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getLaunchTemplateId}
         * @param launchTemplateId Property launchTemplateId: ID of launch template.
         *                         Launch template id or name must be specified to use launch template
         * @return {@code this}
         */
        public Builder launchTemplateId(com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getLaunchTemplateName}
         * @param launchTemplateName Property launchTemplateName: Name of launch template.
         *                           Launch template id or name must be specified to use launch template
         * @return {@code this}
         */
        public Builder launchTemplateName(java.lang.String launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getLaunchTemplateName}
         * @param launchTemplateName Property launchTemplateName: Name of launch template.
         *                           Launch template id or name must be specified to use launch template
         * @return {@code this}
         */
        public Builder launchTemplateName(com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion Property launchTemplateVersion: Version of launch template.
         *                              Default version is used if version is not specified.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(java.lang.String launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion Property launchTemplateVersion: Version of launch template.
         *                              Default version is used if version is not specified.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(com.aliyun.ros.cdk.core.IResolvable launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getPassword}
         * @param password Property password: Password of created ecs instance.
         *                 Must contain at least 3 types of special character, lower character, upper character, number.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getPassword}
         * @param password Property password: Password of created ecs instance.
         *                 Must contain at least 3 types of special character, lower character, upper character, number.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getPasswordInherit}
         * @param passwordInherit Property passwordInherit: Specifies whether to use the password preset in the image.
         *                        To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
         * @return {@code this}
         */
        public Builder passwordInherit(java.lang.Boolean passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getPasswordInherit}
         * @param passwordInherit Property passwordInherit: Specifies whether to use the password preset in the image.
         *                        To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
         * @return {@code this}
         */
        public Builder passwordInherit(com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month.
         *                   Default value is Month.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month.
         *                   Default value is Month.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: Instance RAM role name.
         *                    The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: Instance RAM role name.
         *                    The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance.
         *                        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance.
         *                        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: The IDs of security groups N to which the instance belongs.
         *                         The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSecurityGroupIds}
         * @param securityGroupIds Property securityGroupIds: The IDs of security groups N to which the instance belongs.
         *                         The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSystemDiskAutoSnapshotPolicyId}
         * @param systemDiskAutoSnapshotPolicyId Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
         * @return {@code this}
         */
        public Builder systemDiskAutoSnapshotPolicyId(java.lang.String systemDiskAutoSnapshotPolicyId) {
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSystemDiskAutoSnapshotPolicyId}
         * @param systemDiskAutoSnapshotPolicyId Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
         * @return {@code this}
         */
        public Builder systemDiskAutoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable systemDiskAutoSnapshotPolicyId) {
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk.
         *                           Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk.
         *                           Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSystemDiskDescription}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder systemDiskDescription(java.lang.String systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSystemDiskDescription}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder systemDiskDescription(com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSystemDiskDiskName}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(java.lang.String systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getSystemDiskDiskName}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getZoneId}
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
         * Sets the value of {@link PrepayInstanceGroupCloneProps#getZoneId}
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
         * @return a new instance of {@link PrepayInstanceGroupCloneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PrepayInstanceGroupCloneProps build() {
            return new Jsii$Proxy(maxAmount, minAmount, period, periodType, sourceInstanceId, autoRenew, autoRenewPeriod, deploymentSetId, description, diskMappings, eniMappings, hpcClusterId, imageId, instanceName, internetMaxBandwidthIn, internetMaxBandwidthOut, keyPairName, launchTemplateId, launchTemplateName, launchTemplateVersion, password, passwordInherit, periodUnit, ramRoleName, securityGroupId, securityGroupIds, systemDiskAutoSnapshotPolicyId, systemDiskCategory, systemDiskDescription, systemDiskDiskName, tags, zoneId);
        }
    }

    /**
     * An implementation for {@link PrepayInstanceGroupCloneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrepayInstanceGroupCloneProps {
        private final java.lang.Object maxAmount;
        private final java.lang.Object minAmount;
        private final java.lang.Object period;
        private final java.lang.Object periodType;
        private final java.lang.Object sourceInstanceId;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object deploymentSetId;
        private final java.lang.Object description;
        private final java.lang.Object diskMappings;
        private final java.lang.Object eniMappings;
        private final java.lang.Object hpcClusterId;
        private final java.lang.Object imageId;
        private final java.lang.Object instanceName;
        private final java.lang.Object internetMaxBandwidthIn;
        private final java.lang.Object internetMaxBandwidthOut;
        private final java.lang.Object keyPairName;
        private final java.lang.Object launchTemplateId;
        private final java.lang.Object launchTemplateName;
        private final java.lang.Object launchTemplateVersion;
        private final java.lang.Object password;
        private final java.lang.Object passwordInherit;
        private final java.lang.Object periodUnit;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityGroupIds;
        private final java.lang.Object systemDiskAutoSnapshotPolicyId;
        private final java.lang.Object systemDiskCategory;
        private final java.lang.Object systemDiskDescription;
        private final java.lang.Object systemDiskDiskName;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone.TagsProperty> tags;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.maxAmount = software.amazon.jsii.Kernel.get(this, "maxAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minAmount = software.amazon.jsii.Kernel.get(this, "minAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodType = software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceInstanceId = software.amazon.jsii.Kernel.get(this, "sourceInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploymentSetId = software.amazon.jsii.Kernel.get(this, "deploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskMappings = software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eniMappings = software.amazon.jsii.Kernel.get(this, "eniMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hpcClusterId = software.amazon.jsii.Kernel.get(this, "hpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthIn = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateId = software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateName = software.amazon.jsii.Kernel.get(this, "launchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateVersion = software.amazon.jsii.Kernel.get(this, "launchTemplateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passwordInherit = software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskAutoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "systemDiskAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDescription = software.amazon.jsii.Kernel.get(this, "systemDiskDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDiskName = software.amazon.jsii.Kernel.get(this, "systemDiskDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone.TagsProperty.class)));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.Object maxAmount, final java.lang.Object minAmount, final java.lang.Object period, final java.lang.Object periodType, final java.lang.Object sourceInstanceId, final java.lang.Object autoRenew, final java.lang.Object autoRenewPeriod, final java.lang.Object deploymentSetId, final java.lang.Object description, final java.lang.Object diskMappings, final java.lang.Object eniMappings, final java.lang.Object hpcClusterId, final java.lang.Object imageId, final java.lang.Object instanceName, final java.lang.Object internetMaxBandwidthIn, final java.lang.Object internetMaxBandwidthOut, final java.lang.Object keyPairName, final java.lang.Object launchTemplateId, final java.lang.Object launchTemplateName, final java.lang.Object launchTemplateVersion, final java.lang.Object password, final java.lang.Object passwordInherit, final java.lang.Object periodUnit, final java.lang.Object ramRoleName, final java.lang.Object securityGroupId, final java.lang.Object securityGroupIds, final java.lang.Object systemDiskAutoSnapshotPolicyId, final java.lang.Object systemDiskCategory, final java.lang.Object systemDiskDescription, final java.lang.Object systemDiskDiskName, final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone.TagsProperty> tags, final java.lang.Object zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.maxAmount = java.util.Objects.requireNonNull(maxAmount, "maxAmount is required");
            this.minAmount = java.util.Objects.requireNonNull(minAmount, "minAmount is required");
            this.period = java.util.Objects.requireNonNull(period, "period is required");
            this.periodType = java.util.Objects.requireNonNull(periodType, "periodType is required");
            this.sourceInstanceId = java.util.Objects.requireNonNull(sourceInstanceId, "sourceInstanceId is required");
            this.autoRenew = autoRenew;
            this.autoRenewPeriod = autoRenewPeriod;
            this.deploymentSetId = deploymentSetId;
            this.description = description;
            this.diskMappings = diskMappings;
            this.eniMappings = eniMappings;
            this.hpcClusterId = hpcClusterId;
            this.imageId = imageId;
            this.instanceName = instanceName;
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            this.keyPairName = keyPairName;
            this.launchTemplateId = launchTemplateId;
            this.launchTemplateName = launchTemplateName;
            this.launchTemplateVersion = launchTemplateVersion;
            this.password = password;
            this.passwordInherit = passwordInherit;
            this.periodUnit = periodUnit;
            this.ramRoleName = ramRoleName;
            this.securityGroupId = securityGroupId;
            this.securityGroupIds = securityGroupIds;
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            this.systemDiskCategory = systemDiskCategory;
            this.systemDiskDescription = systemDiskDescription;
            this.systemDiskDiskName = systemDiskDiskName;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone.TagsProperty>)tags;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.Object getMaxAmount() {
            return this.maxAmount;
        }

        @Override
        public final java.lang.Object getMinAmount() {
            return this.minAmount;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodType() {
            return this.periodType;
        }

        @Override
        public final java.lang.Object getSourceInstanceId() {
            return this.sourceInstanceId;
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
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPasswordInherit() {
            return this.passwordInherit;
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
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupIds() {
            return this.securityGroupIds;
        }

        @Override
        public final java.lang.Object getSystemDiskAutoSnapshotPolicyId() {
            return this.systemDiskAutoSnapshotPolicyId;
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
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosPrepayInstanceGroupClone.TagsProperty> getTags() {
            return this.tags;
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
            data.set("minAmount", om.valueToTree(this.getMinAmount()));
            data.set("period", om.valueToTree(this.getPeriod()));
            data.set("periodType", om.valueToTree(this.getPeriodType()));
            data.set("sourceInstanceId", om.valueToTree(this.getSourceInstanceId()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
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
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPasswordInherit() != null) {
                data.set("passwordInherit", om.valueToTree(this.getPasswordInherit()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getRamRoleName() != null) {
                data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityGroupIds() != null) {
                data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));
            }
            if (this.getSystemDiskAutoSnapshotPolicyId() != null) {
                data.set("systemDiskAutoSnapshotPolicyId", om.valueToTree(this.getSystemDiskAutoSnapshotPolicyId()));
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
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.PrepayInstanceGroupCloneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PrepayInstanceGroupCloneProps.Jsii$Proxy that = (PrepayInstanceGroupCloneProps.Jsii$Proxy) o;

            if (!maxAmount.equals(that.maxAmount)) return false;
            if (!minAmount.equals(that.minAmount)) return false;
            if (!period.equals(that.period)) return false;
            if (!periodType.equals(that.periodType)) return false;
            if (!sourceInstanceId.equals(that.sourceInstanceId)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.deploymentSetId != null ? !this.deploymentSetId.equals(that.deploymentSetId) : that.deploymentSetId != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskMappings != null ? !this.diskMappings.equals(that.diskMappings) : that.diskMappings != null) return false;
            if (this.eniMappings != null ? !this.eniMappings.equals(that.eniMappings) : that.eniMappings != null) return false;
            if (this.hpcClusterId != null ? !this.hpcClusterId.equals(that.hpcClusterId) : that.hpcClusterId != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.internetMaxBandwidthIn != null ? !this.internetMaxBandwidthIn.equals(that.internetMaxBandwidthIn) : that.internetMaxBandwidthIn != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.launchTemplateId != null ? !this.launchTemplateId.equals(that.launchTemplateId) : that.launchTemplateId != null) return false;
            if (this.launchTemplateName != null ? !this.launchTemplateName.equals(that.launchTemplateName) : that.launchTemplateName != null) return false;
            if (this.launchTemplateVersion != null ? !this.launchTemplateVersion.equals(that.launchTemplateVersion) : that.launchTemplateVersion != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.passwordInherit != null ? !this.passwordInherit.equals(that.passwordInherit) : that.passwordInherit != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
            if (this.systemDiskAutoSnapshotPolicyId != null ? !this.systemDiskAutoSnapshotPolicyId.equals(that.systemDiskAutoSnapshotPolicyId) : that.systemDiskAutoSnapshotPolicyId != null) return false;
            if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
            if (this.systemDiskDescription != null ? !this.systemDiskDescription.equals(that.systemDiskDescription) : that.systemDiskDescription != null) return false;
            if (this.systemDiskDiskName != null ? !this.systemDiskDiskName.equals(that.systemDiskDiskName) : that.systemDiskDiskName != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.maxAmount.hashCode();
            result = 31 * result + (this.minAmount.hashCode());
            result = 31 * result + (this.period.hashCode());
            result = 31 * result + (this.periodType.hashCode());
            result = 31 * result + (this.sourceInstanceId.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.deploymentSetId != null ? this.deploymentSetId.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskMappings != null ? this.diskMappings.hashCode() : 0);
            result = 31 * result + (this.eniMappings != null ? this.eniMappings.hashCode() : 0);
            result = 31 * result + (this.hpcClusterId != null ? this.hpcClusterId.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthIn != null ? this.internetMaxBandwidthIn.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.launchTemplateId != null ? this.launchTemplateId.hashCode() : 0);
            result = 31 * result + (this.launchTemplateName != null ? this.launchTemplateName.hashCode() : 0);
            result = 31 * result + (this.launchTemplateVersion != null ? this.launchTemplateVersion.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.passwordInherit != null ? this.passwordInherit.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
            result = 31 * result + (this.systemDiskAutoSnapshotPolicyId != null ? this.systemDiskAutoSnapshotPolicyId.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.systemDiskDescription != null ? this.systemDiskDescription.hashCode() : 0);
            result = 31 * result + (this.systemDiskDiskName != null ? this.systemDiskDiskName.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
