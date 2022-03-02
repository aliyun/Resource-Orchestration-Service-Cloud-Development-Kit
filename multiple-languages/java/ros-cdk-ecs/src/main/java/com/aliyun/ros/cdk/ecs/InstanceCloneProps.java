package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a `ALIYUN::ECS::InstanceClone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:07.370Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.InstanceCloneProps")
@software.amazon.jsii.Jsii.Proxy(InstanceCloneProps.Jsii$Proxy.class)
public interface InstanceCloneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance.
     * <p>
     * It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceInstanceId();

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
     * Property imageId: Image ID to create ecs instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
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
     * Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
     * <p>
     * The range is [1,200], default is 200 Mbps.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthIn() {
        return null;
    }

    /**
     * Property keyPairName: SSH key pair name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
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
     * Property period: Prepaid time period.
     * <p>
     * Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
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
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceClone.TagsProperty> getTags() {
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
     * @return a {@link Builder} of {@link InstanceCloneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceCloneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceCloneProps> {
        java.lang.Object sourceInstanceId;
        java.lang.Object backendServerWeight;
        java.lang.Object deletionProtection;
        java.lang.Object description;
        java.lang.Object diskMappings;
        java.lang.Object imageId;
        java.lang.Object instanceChargeType;
        java.lang.Object instanceName;
        java.lang.Object internetMaxBandwidthIn;
        java.lang.Object keyPairName;
        java.lang.Object loadBalancerIdToAttach;
        java.lang.Object password;
        java.lang.Object period;
        java.lang.Object ramRoleName;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupId;
        java.lang.Object spotPriceLimit;
        java.lang.Object spotStrategy;
        java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceClone.TagsProperty> tags;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link InstanceCloneProps#getSourceInstanceId}
         * @param sourceInstanceId Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. This parameter is required.
         *                         It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
         * @return {@code this}
         */
        public Builder sourceInstanceId(java.lang.String sourceInstanceId) {
            this.sourceInstanceId = sourceInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getSourceInstanceId}
         * @param sourceInstanceId Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. This parameter is required.
         *                         It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
         * @return {@code this}
         */
        public Builder sourceInstanceId(com.aliyun.ros.cdk.core.IResolvable sourceInstanceId) {
            this.sourceInstanceId = sourceInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getBackendServerWeight}
         * @param backendServerWeight Property backendServerWeight: The weight of backend server of load balancer.
         *                            From 0 to 100, 0 means offline. Default is 100.
         * @return {@code this}
         */
        public Builder backendServerWeight(java.lang.Number backendServerWeight) {
            this.backendServerWeight = backendServerWeight;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getBackendServerWeight}
         * @param backendServerWeight Property backendServerWeight: The weight of backend server of load balancer.
         *                            From 0 to 100, 0 means offline. Default is 100.
         * @return {@code this}
         */
        public Builder backendServerWeight(com.aliyun.ros.cdk.core.IResolvable backendServerWeight) {
            this.backendServerWeight = backendServerWeight;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Whether an instance can be released manually through the console or API, deletion protection only support postPaid instance.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getDescription}
         * @param description Property description: Description of the instance, [2, 256] characters.
         *                    Do not fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getDescription}
         * @param description Property description: Description of the instance, [2, 256] characters.
         *                    Do not fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getDiskMappings}
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
         * Sets the value of {@link InstanceCloneProps#getDiskMappings}
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
         * Sets the value of {@link InstanceCloneProps#getImageId}
         * @param imageId Property imageId: Image ID to create ecs instance.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getImageId}
         * @param imageId Property imageId: Image ID to create ecs instance.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
         *                           If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: Instance Charge type, allowed value: Prepaid and Postpaid.
         *                           If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getInstanceName}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getInstanceName}
         * @param instanceName Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         *                               The range is [1,200], default is 200 Mbps.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(java.lang.Number internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second).
         *                               The range is [1,200], default is 200 Mbps.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getKeyPairName}
         * @param keyPairName Property keyPairName: SSH key pair name.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getLoadBalancerIdToAttach}
         * @param loadBalancerIdToAttach Property loadBalancerIdToAttach: After the instance is created.
         *                               Automatic attach it to the load balancer.
         * @return {@code this}
         */
        public Builder loadBalancerIdToAttach(java.lang.String loadBalancerIdToAttach) {
            this.loadBalancerIdToAttach = loadBalancerIdToAttach;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getLoadBalancerIdToAttach}
         * @param loadBalancerIdToAttach Property loadBalancerIdToAttach: After the instance is created.
         *                               Automatic attach it to the load balancer.
         * @return {@code this}
         */
        public Builder loadBalancerIdToAttach(com.aliyun.ros.cdk.core.IResolvable loadBalancerIdToAttach) {
            this.loadBalancerIdToAttach = loadBalancerIdToAttach;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getPassword}
         * @param password Property password: Password of created ecs instance.
         *                 Must contain at least 3 types of special character, lower character, upper character, number.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getPassword}
         * @param password Property password: Password of created ecs instance.
         *                 Must contain at least 3 types of special character, lower character, upper character, number.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getPeriod}
         * @param period Property period: Prepaid time period.
         *               Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getPeriod}
         * @param period Property period: Prepaid time period.
         *               Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: Instance RAM role name.
         *                    The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: Instance RAM role name.
         *                    The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance.
         *                        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Security group to create ecs instance.
         *                        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         *                       Three decimals is allowed at most.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.String spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: The hourly price threshold of a instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         *                       Three decimals is allowed at most.
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         *                     Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: The spot strategy of a Pay-As-You-Go instance, and it takes effect only when parameter InstanceChargeType is PostPaid.
         *                     Value range: "NoSpot: A regular Pay-As-You-Go instance", "SpotWithPriceLimit: A price threshold for a spot instance, ""SpotAsPriceGo: A price that is based on the highest Pay-As-You-Go instance. "Default value: NoSpot.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosInstanceClone.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceClone.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link InstanceCloneProps#getZoneId}
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
         * Sets the value of {@link InstanceCloneProps#getZoneId}
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
         * @return a new instance of {@link InstanceCloneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceCloneProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceCloneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceCloneProps {
        private final java.lang.Object sourceInstanceId;
        private final java.lang.Object backendServerWeight;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object description;
        private final java.lang.Object diskMappings;
        private final java.lang.Object imageId;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object instanceName;
        private final java.lang.Object internetMaxBandwidthIn;
        private final java.lang.Object keyPairName;
        private final java.lang.Object loadBalancerIdToAttach;
        private final java.lang.Object password;
        private final java.lang.Object period;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object spotPriceLimit;
        private final java.lang.Object spotStrategy;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceClone.TagsProperty> tags;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.sourceInstanceId = software.amazon.jsii.Kernel.get(this, "sourceInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backendServerWeight = software.amazon.jsii.Kernel.get(this, "backendServerWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskMappings = software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthIn = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerIdToAttach = software.amazon.jsii.Kernel.get(this, "loadBalancerIdToAttach", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosInstanceClone.TagsProperty.class)));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.sourceInstanceId = java.util.Objects.requireNonNull(builder.sourceInstanceId, "sourceInstanceId is required");
            this.backendServerWeight = builder.backendServerWeight;
            this.deletionProtection = builder.deletionProtection;
            this.description = builder.description;
            this.diskMappings = builder.diskMappings;
            this.imageId = builder.imageId;
            this.instanceChargeType = builder.instanceChargeType;
            this.instanceName = builder.instanceName;
            this.internetMaxBandwidthIn = builder.internetMaxBandwidthIn;
            this.keyPairName = builder.keyPairName;
            this.loadBalancerIdToAttach = builder.loadBalancerIdToAttach;
            this.password = builder.password;
            this.period = builder.period;
            this.ramRoleName = builder.ramRoleName;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupId = builder.securityGroupId;
            this.spotPriceLimit = builder.spotPriceLimit;
            this.spotStrategy = builder.spotStrategy;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceClone.TagsProperty>)builder.tags;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getSourceInstanceId() {
            return this.sourceInstanceId;
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
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDiskMappings() {
            return this.diskMappings;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
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
        public final java.lang.Object getInternetMaxBandwidthIn() {
            return this.internetMaxBandwidthIn;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
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
        public final java.lang.Object getPeriod() {
            return this.period;
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
        public final java.lang.Object getSpotPriceLimit() {
            return this.spotPriceLimit;
        }

        @Override
        public final java.lang.Object getSpotStrategy() {
            return this.spotStrategy;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceClone.TagsProperty> getTags() {
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

            data.set("sourceInstanceId", om.valueToTree(this.getSourceInstanceId()));
            if (this.getBackendServerWeight() != null) {
                data.set("backendServerWeight", om.valueToTree(this.getBackendServerWeight()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDiskMappings() != null) {
                data.set("diskMappings", om.valueToTree(this.getDiskMappings()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getInternetMaxBandwidthIn() != null) {
                data.set("internetMaxBandwidthIn", om.valueToTree(this.getInternetMaxBandwidthIn()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getLoadBalancerIdToAttach() != null) {
                data.set("loadBalancerIdToAttach", om.valueToTree(this.getLoadBalancerIdToAttach()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
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
            if (this.getSpotPriceLimit() != null) {
                data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
            }
            if (this.getSpotStrategy() != null) {
                data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.InstanceCloneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceCloneProps.Jsii$Proxy that = (InstanceCloneProps.Jsii$Proxy) o;

            if (!sourceInstanceId.equals(that.sourceInstanceId)) return false;
            if (this.backendServerWeight != null ? !this.backendServerWeight.equals(that.backendServerWeight) : that.backendServerWeight != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskMappings != null ? !this.diskMappings.equals(that.diskMappings) : that.diskMappings != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.internetMaxBandwidthIn != null ? !this.internetMaxBandwidthIn.equals(that.internetMaxBandwidthIn) : that.internetMaxBandwidthIn != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.loadBalancerIdToAttach != null ? !this.loadBalancerIdToAttach.equals(that.loadBalancerIdToAttach) : that.loadBalancerIdToAttach != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.sourceInstanceId.hashCode();
            result = 31 * result + (this.backendServerWeight != null ? this.backendServerWeight.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskMappings != null ? this.diskMappings.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthIn != null ? this.internetMaxBandwidthIn.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.loadBalancerIdToAttach != null ? this.loadBalancerIdToAttach.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
