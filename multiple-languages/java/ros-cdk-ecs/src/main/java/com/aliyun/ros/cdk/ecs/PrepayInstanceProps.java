package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::PrepayInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.260Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.PrepayInstanceProps")
@software.amazon.jsii.Jsii.Proxy(PrepayInstanceProps.Jsii$Proxy.class)
public interface PrepayInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property imageId: Image ID to create ecs instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getImageId();

    /**
     * Property instanceType: Ecs instance supported instance type, make sure it should be correct.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

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
     * Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip.
     * <p>
     * If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocatePublicIp() {
        return null;
    }

    /**
     * Property autoRenew: Auto renew the prepay instance.
     * <p>
     * If the period type is by year, it will renew by year, else it will renew by month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property autoRenewPeriod: The time period of auto renew.
     * <p>
     * When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property dedicatedHostId: which dedicated host will be deployed.
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
     * Property description: Description of the instance, [2, 256] characters.
     * <p>
     * Do not fill or empty, the default is empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property diskMappings: Disk mappings to attach to instance.
     * <p>
     * Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskMappings() {
        return null;
    }

    /**
     * Property hostName: Host name of created ecs instance.
     * <p>
     * at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
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
     * Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
     * <p>
     * If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     * Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. For AfterPay instance, default is 'PayByBandwidth'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
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
     * Property ioOptimized: The 'optimized' instance can provide better IO performance.
     * <p>
     * Support true or false, Default is true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return null;
    }

    /**
     * Property keyPairName: SSH key pair name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
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
     * Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
     * <p>
     * Default value is Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property privateIpAddress: Private IP for the instance created.
     * <p>
     * Only works for VPC instance and cannot duplicated with existing instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
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
     * Property securityEnhancementStrategy:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityEnhancementStrategy() {
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
     * Property systemDiskCategory: Category of system disk.
     * <p>
     * Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
        return null;
    }

    /**
     * Property systemDiskDescription: Description of created system disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDescription() {
        return null;
    }

    /**
     * Property systemDiskDiskName: Name of created system disk.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDiskName() {
        return null;
    }

    /**
     * Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskPerformanceLevel() {
        return null;
    }

    /**
     * Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.
     * <p>
     * If you specify with your own image, make sure the system disk size bigger than image size.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskSize() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosPrepayInstance.TagsProperty> getTags() {
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
     * Property vpcId: The VPC id to create ecs instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
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
     * @return a {@link Builder} of {@link PrepayInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PrepayInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PrepayInstanceProps> {
        private java.lang.Object imageId;
        private java.lang.Object instanceType;
        private java.lang.Object maxAmount;
        private java.lang.Object minAmount;
        private java.lang.Object period;
        private java.lang.Object periodType;
        private java.lang.Object allocatePublicIp;
        private java.lang.Object autoRenew;
        private java.lang.Object autoRenewPeriod;
        private java.lang.Object dedicatedHostId;
        private java.lang.Object deploymentSetId;
        private java.lang.Object description;
        private java.lang.Object diskMappings;
        private java.lang.Object hostName;
        private java.lang.Object hpcClusterId;
        private java.lang.Object instanceChargeType;
        private java.lang.Object instanceName;
        private java.lang.Object internetChargeType;
        private java.lang.Object internetMaxBandwidthIn;
        private java.lang.Object internetMaxBandwidthOut;
        private java.lang.Object ioOptimized;
        private java.lang.Object keyPairName;
        private java.lang.Object password;
        private java.lang.Object passwordInherit;
        private java.lang.Object periodUnit;
        private java.lang.Object privateIpAddress;
        private java.lang.Object ramRoleName;
        private java.lang.Object securityEnhancementStrategy;
        private java.lang.Object securityGroupId;
        private java.lang.Object systemDiskCategory;
        private java.lang.Object systemDiskDescription;
        private java.lang.Object systemDiskDiskName;
        private java.lang.Object systemDiskPerformanceLevel;
        private java.lang.Object systemDiskSize;
        private java.util.List<com.aliyun.ros.cdk.ecs.RosPrepayInstance.TagsProperty> tags;
        private java.lang.Object userData;
        private java.lang.Object vpcId;
        private java.lang.Object vSwitchId;
        private java.lang.Object zoneId;

        /**
         * Sets the value of {@link PrepayInstanceProps#getImageId}
         * @param imageId Property imageId: Image ID to create ecs instance. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getImageId}
         * @param imageId Property imageId: Image ID to create ecs instance. This parameter is required.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInstanceType}
         * @param instanceType Property instanceType: Ecs instance supported instance type, make sure it should be correct. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInstanceType}
         * @param instanceType Property instanceType: Ecs instance supported instance type, make sure it should be correct. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getMaxAmount}
         * @param maxAmount Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100. This parameter is required.
         * @return {@code this}
         */
        public Builder maxAmount(java.lang.Number maxAmount) {
            this.maxAmount = maxAmount;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getMaxAmount}
         * @param maxAmount Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100. This parameter is required.
         * @return {@code this}
         */
        public Builder maxAmount(com.aliyun.ros.cdk.core.IResolvable maxAmount) {
            this.maxAmount = maxAmount;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getMinAmount}
         * @param minAmount Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100. This parameter is required.
         * @return {@code this}
         */
        public Builder minAmount(java.lang.Number minAmount) {
            this.minAmount = minAmount;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getMinAmount}
         * @param minAmount Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100. This parameter is required.
         * @return {@code this}
         */
        public Builder minAmount(com.aliyun.ros.cdk.core.IResolvable minAmount) {
            this.minAmount = minAmount;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPeriod}
         * @param period Property period: Prepaid time period. This parameter is required.
         *               While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPeriod}
         * @param period Property period: Prepaid time period. This parameter is required.
         *               While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPeriodType}
         * @param periodType Property periodType: Charge period for created instances. This parameter is required.
         * @return {@code this}
         */
        public Builder periodType(java.lang.String periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPeriodType}
         * @param periodType Property periodType: Charge period for created instances. This parameter is required.
         * @return {@code this}
         */
        public Builder periodType(com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getAllocatePublicIp}
         * @param allocatePublicIp Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip.
         *                         If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
         * @return {@code this}
         */
        public Builder allocatePublicIp(java.lang.Boolean allocatePublicIp) {
            this.allocatePublicIp = allocatePublicIp;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getAllocatePublicIp}
         * @param allocatePublicIp Property allocatePublicIp: The public ip for ecs instance, if properties is true, will allocate public ip.
         *                         If property InternetMaxBandwidthOut set to 0, it will not assign public ip.
         * @return {@code this}
         */
        public Builder allocatePublicIp(com.aliyun.ros.cdk.core.IResolvable allocatePublicIp) {
            this.allocatePublicIp = allocatePublicIp;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Auto renew the prepay instance.
         *                  If the period type is by year, it will renew by year, else it will renew by month.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Auto renew the prepay instance.
         *                  If the period type is by year, it will renew by year, else it will renew by month.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew.
         *                        When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: The time period of auto renew.
         *                        When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getDedicatedHostId}
         * @param dedicatedHostId Property dedicatedHostId: which dedicated host will be deployed.
         * @return {@code this}
         */
        public Builder dedicatedHostId(java.lang.String dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getDedicatedHostId}
         * @param dedicatedHostId Property dedicatedHostId: which dedicated host will be deployed.
         * @return {@code this}
         */
        public Builder dedicatedHostId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getDeploymentSetId}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID.
         * @return {@code this}
         */
        public Builder deploymentSetId(java.lang.String deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getDeploymentSetId}
         * @param deploymentSetId Property deploymentSetId: Deployment set ID.
         * @return {@code this}
         */
        public Builder deploymentSetId(com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getDescription}
         * @param description Property description: Description of the instance, [2, 256] characters.
         *                    Do not fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getDescription}
         * @param description Property description: Description of the instance, [2, 256] characters.
         *                    Do not fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getDiskMappings}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance.
         *                     Max support 16 disks.
         *                     If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
         * @return {@code this}
         */
        public Builder diskMappings(com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getDiskMappings}
         * @param diskMappings Property diskMappings: Disk mappings to attach to instance.
         *                     Max support 16 disks.
         *                     If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.
         * @return {@code this}
         */
        public Builder diskMappings(java.util.List<? extends java.lang.Object> diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getHostName}
         * @param hostName Property hostName: Host name of created ecs instance.
         *                 at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getHostName}
         * @param hostName Property hostName: Host name of created ecs instance.
         *                 at least 2 characters, and '.' '-' Is not the first and last characters as hostname, not continuous use. Windows platform can be up to 15 characters, allowing letters (without limiting case), numbers and '-', and does not support the number of points, not all is digital ('.').Other (Linux, etc.) platform up to 30 characters, allowing support number multiple points for the period between the points, each permit letters (without limiting case), numbers and '-' components.
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getHpcClusterId}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs.
         * @return {@code this}
         */
        public Builder hpcClusterId(java.lang.String hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getHpcClusterId}
         * @param hpcClusterId Property hpcClusterId: The HPC cluster ID to which the instance belongs.
         * @return {@code this}
         */
        public Builder hpcClusterId(com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
         *                           If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
         *                           If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInstanceName}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInstanceName}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. For AfterPay instance, default is 'PayByBandwidth'.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInternetChargeType}
         * @param internetChargeType Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only. For AfterPay instance, default is 'PayByBandwidth'.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         *                               The range is [1,200], default is 200 Mbps.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(java.lang.Number internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         *                               The range is [1,200], default is 200 Mbps.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
         *                                Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut Property internetMaxBandwidthOut: Set internet output bandwidth of instance.
         *                                Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance.
         *                    Support true or false, Default is true.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.Boolean ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: The 'optimized' instance can provide better IO performance.
         *                    Support true or false, Default is true.
         * @return {@code this}
         */
        public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPassword}
         * @param password Property password: Password of created ecs instance.
         *                 Must contain at least 3 types of special character, lower character, upper character, number.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPassword}
         * @param password Property password: Password of created ecs instance.
         *                 Must contain at least 3 types of special character, lower character, upper character, number.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPasswordInherit}
         * @param passwordInherit Property passwordInherit: Specifies whether to use the password preset in the image.
         *                        To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
         * @return {@code this}
         */
        public Builder passwordInherit(java.lang.Boolean passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPasswordInherit}
         * @param passwordInherit Property passwordInherit: Specifies whether to use the password preset in the image.
         *                        To use the PasswordInherit parameter, the Password parameter must be empty and you must make sure that the selected image has a password configured.
         * @return {@code this}
         */
        public Builder passwordInherit(com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
         *                   Default value is Month.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year.
         *                   Default value is Month.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: Private IP for the instance created.
         *                         Only works for VPC instance and cannot duplicated with existing instance.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: Private IP for the instance created.
         *                         Only works for VPC instance and cannot duplicated with existing instance.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: Instance RAM role name.
         *                    The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: Instance RAM role name.
         *                    The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSecurityEnhancementStrategy}
         * @param securityEnhancementStrategy Property securityEnhancementStrategy:.
         * @return {@code this}
         */
        public Builder securityEnhancementStrategy(java.lang.String securityEnhancementStrategy) {
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSecurityEnhancementStrategy}
         * @param securityEnhancementStrategy Property securityEnhancementStrategy:.
         * @return {@code this}
         */
        public Builder securityEnhancementStrategy(com.aliyun.ros.cdk.core.IResolvable securityEnhancementStrategy) {
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance.
         *                        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance.
         *                        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk.
         *                           Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: Category of system disk.
         *                           Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSystemDiskDescription}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk.
         * @return {@code this}
         */
        public Builder systemDiskDescription(java.lang.String systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSystemDiskDescription}
         * @param systemDiskDescription Property systemDiskDescription: Description of created system disk.
         * @return {@code this}
         */
        public Builder systemDiskDescription(com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSystemDiskDiskName}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(java.lang.String systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSystemDiskDiskName}
         * @param systemDiskDiskName Property systemDiskDiskName: Name of created system disk.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSystemDiskPerformanceLevel}
         * @param systemDiskPerformanceLevel Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         * @return {@code this}
         */
        public Builder systemDiskPerformanceLevel(java.lang.String systemDiskPerformanceLevel) {
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSystemDiskPerformanceLevel}
         * @param systemDiskPerformanceLevel Property systemDiskPerformanceLevel: The performance level of the enhanced SSD used as the system disk.Default value: PL1. Valid values:PL0: A single enhanced SSD delivers up to 10,000 random read/write IOPS.PL1: A single enhanced SSD delivers up to 50,000 random read/write IOPS.PL2: A single enhanced SSD delivers up to 100,000 random read/write IOPS.PL3: A single enhanced SSD delivers up to 1,000,000 random read/write IOPS.
         * @return {@code this}
         */
        public Builder systemDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSystemDiskSize}
         * @param systemDiskSize Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.
         *                       If you specify with your own image, make sure the system disk size bigger than image size.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getSystemDiskSize}
         * @param systemDiskSize Property systemDiskSize: Disk size of the system disk, range from 20 to 500 GB.
         *                       If you specify with your own image, make sure the system disk size bigger than image size.
         * @return {@code this}
         */
        public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosPrepayInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosPrepayInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getUserData}
         * @param userData Property userData: User data to pass to instance.
         *                 [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * @return {@code this}
         */
        public Builder userData(java.lang.String userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getUserData}
         * @param userData Property userData: User data to pass to instance.
         *                 [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create ecs instance.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id to create ecs instance.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch Id to create ecs instance.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayInstanceProps#getZoneId}
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
         * Sets the value of {@link PrepayInstanceProps#getZoneId}
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
         * @return a new instance of {@link PrepayInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PrepayInstanceProps build() {
            return new Jsii$Proxy(imageId, instanceType, maxAmount, minAmount, period, periodType, allocatePublicIp, autoRenew, autoRenewPeriod, dedicatedHostId, deploymentSetId, description, diskMappings, hostName, hpcClusterId, instanceChargeType, instanceName, internetChargeType, internetMaxBandwidthIn, internetMaxBandwidthOut, ioOptimized, keyPairName, password, passwordInherit, periodUnit, privateIpAddress, ramRoleName, securityEnhancementStrategy, securityGroupId, systemDiskCategory, systemDiskDescription, systemDiskDiskName, systemDiskPerformanceLevel, systemDiskSize, tags, userData, vpcId, vSwitchId, zoneId);
        }
    }

    /**
     * An implementation for {@link PrepayInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrepayInstanceProps {
        private final java.lang.Object imageId;
        private final java.lang.Object instanceType;
        private final java.lang.Object maxAmount;
        private final java.lang.Object minAmount;
        private final java.lang.Object period;
        private final java.lang.Object periodType;
        private final java.lang.Object allocatePublicIp;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object dedicatedHostId;
        private final java.lang.Object deploymentSetId;
        private final java.lang.Object description;
        private final java.lang.Object diskMappings;
        private final java.lang.Object hostName;
        private final java.lang.Object hpcClusterId;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object instanceName;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object internetMaxBandwidthIn;
        private final java.lang.Object internetMaxBandwidthOut;
        private final java.lang.Object ioOptimized;
        private final java.lang.Object keyPairName;
        private final java.lang.Object password;
        private final java.lang.Object passwordInherit;
        private final java.lang.Object periodUnit;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object securityEnhancementStrategy;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object systemDiskCategory;
        private final java.lang.Object systemDiskDescription;
        private final java.lang.Object systemDiskDiskName;
        private final java.lang.Object systemDiskPerformanceLevel;
        private final java.lang.Object systemDiskSize;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosPrepayInstance.TagsProperty> tags;
        private final java.lang.Object userData;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxAmount = software.amazon.jsii.Kernel.get(this, "maxAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minAmount = software.amazon.jsii.Kernel.get(this, "minAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodType = software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocatePublicIp = software.amazon.jsii.Kernel.get(this, "allocatePublicIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostId = software.amazon.jsii.Kernel.get(this, "dedicatedHostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploymentSetId = software.amazon.jsii.Kernel.get(this, "deploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskMappings = software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hpcClusterId = software.amazon.jsii.Kernel.get(this, "hpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthIn = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passwordInherit = software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityEnhancementStrategy = software.amazon.jsii.Kernel.get(this, "securityEnhancementStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDescription = software.amazon.jsii.Kernel.get(this, "systemDiskDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDiskName = software.amazon.jsii.Kernel.get(this, "systemDiskDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "systemDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosPrepayInstance.TagsProperty.class)));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.Object imageId, final java.lang.Object instanceType, final java.lang.Object maxAmount, final java.lang.Object minAmount, final java.lang.Object period, final java.lang.Object periodType, final java.lang.Object allocatePublicIp, final java.lang.Object autoRenew, final java.lang.Object autoRenewPeriod, final java.lang.Object dedicatedHostId, final java.lang.Object deploymentSetId, final java.lang.Object description, final java.lang.Object diskMappings, final java.lang.Object hostName, final java.lang.Object hpcClusterId, final java.lang.Object instanceChargeType, final java.lang.Object instanceName, final java.lang.Object internetChargeType, final java.lang.Object internetMaxBandwidthIn, final java.lang.Object internetMaxBandwidthOut, final java.lang.Object ioOptimized, final java.lang.Object keyPairName, final java.lang.Object password, final java.lang.Object passwordInherit, final java.lang.Object periodUnit, final java.lang.Object privateIpAddress, final java.lang.Object ramRoleName, final java.lang.Object securityEnhancementStrategy, final java.lang.Object securityGroupId, final java.lang.Object systemDiskCategory, final java.lang.Object systemDiskDescription, final java.lang.Object systemDiskDiskName, final java.lang.Object systemDiskPerformanceLevel, final java.lang.Object systemDiskSize, final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosPrepayInstance.TagsProperty> tags, final java.lang.Object userData, final java.lang.Object vpcId, final java.lang.Object vSwitchId, final java.lang.Object zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.imageId = java.util.Objects.requireNonNull(imageId, "imageId is required");
            this.instanceType = java.util.Objects.requireNonNull(instanceType, "instanceType is required");
            this.maxAmount = java.util.Objects.requireNonNull(maxAmount, "maxAmount is required");
            this.minAmount = java.util.Objects.requireNonNull(minAmount, "minAmount is required");
            this.period = java.util.Objects.requireNonNull(period, "period is required");
            this.periodType = java.util.Objects.requireNonNull(periodType, "periodType is required");
            this.allocatePublicIp = allocatePublicIp;
            this.autoRenew = autoRenew;
            this.autoRenewPeriod = autoRenewPeriod;
            this.dedicatedHostId = dedicatedHostId;
            this.deploymentSetId = deploymentSetId;
            this.description = description;
            this.diskMappings = diskMappings;
            this.hostName = hostName;
            this.hpcClusterId = hpcClusterId;
            this.instanceChargeType = instanceChargeType;
            this.instanceName = instanceName;
            this.internetChargeType = internetChargeType;
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            this.ioOptimized = ioOptimized;
            this.keyPairName = keyPairName;
            this.password = password;
            this.passwordInherit = passwordInherit;
            this.periodUnit = periodUnit;
            this.privateIpAddress = privateIpAddress;
            this.ramRoleName = ramRoleName;
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            this.securityGroupId = securityGroupId;
            this.systemDiskCategory = systemDiskCategory;
            this.systemDiskDescription = systemDiskDescription;
            this.systemDiskDiskName = systemDiskDiskName;
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            this.systemDiskSize = systemDiskSize;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosPrepayInstance.TagsProperty>)tags;
            this.userData = userData;
            this.vpcId = vpcId;
            this.vSwitchId = vSwitchId;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
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
        public final java.lang.Object getAllocatePublicIp() {
            return this.allocatePublicIp;
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
        public final java.lang.Object getDedicatedHostId() {
            return this.dedicatedHostId;
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
        public final java.lang.Object getHostName() {
            return this.hostName;
        }

        @Override
        public final java.lang.Object getHpcClusterId() {
            return this.hpcClusterId;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
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
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
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
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        public final java.lang.Object getRamRoleName() {
            return this.ramRoleName;
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
        public final java.lang.Object getSystemDiskPerformanceLevel() {
            return this.systemDiskPerformanceLevel;
        }

        @Override
        public final java.lang.Object getSystemDiskSize() {
            return this.systemDiskSize;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosPrepayInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUserData() {
            return this.userData;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
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

            data.set("imageId", om.valueToTree(this.getImageId()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("maxAmount", om.valueToTree(this.getMaxAmount()));
            data.set("minAmount", om.valueToTree(this.getMinAmount()));
            data.set("period", om.valueToTree(this.getPeriod()));
            data.set("periodType", om.valueToTree(this.getPeriodType()));
            if (this.getAllocatePublicIp() != null) {
                data.set("allocatePublicIp", om.valueToTree(this.getAllocatePublicIp()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getDedicatedHostId() != null) {
                data.set("dedicatedHostId", om.valueToTree(this.getDedicatedHostId()));
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
            if (this.getHostName() != null) {
                data.set("hostName", om.valueToTree(this.getHostName()));
            }
            if (this.getHpcClusterId() != null) {
                data.set("hpcClusterId", om.valueToTree(this.getHpcClusterId()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
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
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
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
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }
            if (this.getRamRoleName() != null) {
                data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
            }
            if (this.getSecurityEnhancementStrategy() != null) {
                data.set("securityEnhancementStrategy", om.valueToTree(this.getSecurityEnhancementStrategy()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
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
            if (this.getSystemDiskPerformanceLevel() != null) {
                data.set("systemDiskPerformanceLevel", om.valueToTree(this.getSystemDiskPerformanceLevel()));
            }
            if (this.getSystemDiskSize() != null) {
                data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.PrepayInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PrepayInstanceProps.Jsii$Proxy that = (PrepayInstanceProps.Jsii$Proxy) o;

            if (!imageId.equals(that.imageId)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            if (!maxAmount.equals(that.maxAmount)) return false;
            if (!minAmount.equals(that.minAmount)) return false;
            if (!period.equals(that.period)) return false;
            if (!periodType.equals(that.periodType)) return false;
            if (this.allocatePublicIp != null ? !this.allocatePublicIp.equals(that.allocatePublicIp) : that.allocatePublicIp != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.dedicatedHostId != null ? !this.dedicatedHostId.equals(that.dedicatedHostId) : that.dedicatedHostId != null) return false;
            if (this.deploymentSetId != null ? !this.deploymentSetId.equals(that.deploymentSetId) : that.deploymentSetId != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskMappings != null ? !this.diskMappings.equals(that.diskMappings) : that.diskMappings != null) return false;
            if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
            if (this.hpcClusterId != null ? !this.hpcClusterId.equals(that.hpcClusterId) : that.hpcClusterId != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.internetMaxBandwidthIn != null ? !this.internetMaxBandwidthIn.equals(that.internetMaxBandwidthIn) : that.internetMaxBandwidthIn != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.passwordInherit != null ? !this.passwordInherit.equals(that.passwordInherit) : that.passwordInherit != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.securityEnhancementStrategy != null ? !this.securityEnhancementStrategy.equals(that.securityEnhancementStrategy) : that.securityEnhancementStrategy != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
            if (this.systemDiskDescription != null ? !this.systemDiskDescription.equals(that.systemDiskDescription) : that.systemDiskDescription != null) return false;
            if (this.systemDiskDiskName != null ? !this.systemDiskDiskName.equals(that.systemDiskDiskName) : that.systemDiskDiskName != null) return false;
            if (this.systemDiskPerformanceLevel != null ? !this.systemDiskPerformanceLevel.equals(that.systemDiskPerformanceLevel) : that.systemDiskPerformanceLevel != null) return false;
            if (this.systemDiskSize != null ? !this.systemDiskSize.equals(that.systemDiskSize) : that.systemDiskSize != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.imageId.hashCode();
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.maxAmount.hashCode());
            result = 31 * result + (this.minAmount.hashCode());
            result = 31 * result + (this.period.hashCode());
            result = 31 * result + (this.periodType.hashCode());
            result = 31 * result + (this.allocatePublicIp != null ? this.allocatePublicIp.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostId != null ? this.dedicatedHostId.hashCode() : 0);
            result = 31 * result + (this.deploymentSetId != null ? this.deploymentSetId.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskMappings != null ? this.diskMappings.hashCode() : 0);
            result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
            result = 31 * result + (this.hpcClusterId != null ? this.hpcClusterId.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthIn != null ? this.internetMaxBandwidthIn.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.passwordInherit != null ? this.passwordInherit.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.securityEnhancementStrategy != null ? this.securityEnhancementStrategy.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.systemDiskDescription != null ? this.systemDiskDescription.hashCode() : 0);
            result = 31 * result + (this.systemDiskDiskName != null ? this.systemDiskDiskName.hashCode() : 0);
            result = 31 * result + (this.systemDiskPerformanceLevel != null ? this.systemDiskPerformanceLevel.hashCode() : 0);
            result = 31 * result + (this.systemDiskSize != null ? this.systemDiskSize.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
