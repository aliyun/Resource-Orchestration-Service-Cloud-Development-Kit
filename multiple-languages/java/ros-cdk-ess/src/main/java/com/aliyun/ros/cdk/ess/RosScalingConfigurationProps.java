package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>ALIYUN::ESS::ScalingConfiguration</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:46.100Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScalingConfigurationProps")
@software.amazon.jsii.Jsii.Proxy(RosScalingConfigurationProps.Jsii$Proxy.class)
public interface RosScalingConfigurationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreditSpecification() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskMappings() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHpcClusterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageFamily() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceTypes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthIn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerWeight() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPasswordInherit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRamRoleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingConfigurationName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimitForInstanceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskAutoSnapshotPolicyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskPerformanceLevel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosScalingConfigurationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosScalingConfigurationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosScalingConfigurationProps> {
        java.lang.Object scalingGroupId;
        java.lang.Object creditSpecification;
        java.lang.Object deploymentSetId;
        java.lang.Object diskMappings;
        java.lang.Object hostName;
        java.lang.Object hpcClusterId;
        java.lang.Object imageFamily;
        java.lang.Object imageId;
        java.lang.Object instanceId;
        java.lang.Object instanceName;
        java.lang.Object instanceType;
        java.lang.Object instanceTypes;
        java.lang.Object internetChargeType;
        java.lang.Object internetMaxBandwidthIn;
        java.lang.Object internetMaxBandwidthOut;
        java.lang.Object ioOptimized;
        java.lang.Object ipv6AddressCount;
        java.lang.Object keyPairName;
        java.lang.Object loadBalancerWeight;
        java.lang.Object password;
        java.lang.Object passwordInherit;
        java.lang.Object ramRoleName;
        java.lang.Object resourceGroupId;
        java.lang.Object scalingConfigurationName;
        java.lang.Object securityGroupId;
        java.lang.Object spotPriceLimit;
        java.lang.Object spotPriceLimitForInstanceType;
        java.lang.Object spotStrategy;
        java.lang.Object systemDiskAutoSnapshotPolicyId;
        java.lang.Object systemDiskCategory;
        java.lang.Object systemDiskPerformanceLevel;
        java.lang.Object systemDiskSize;
        java.lang.Object tagList;
        java.lang.Object userData;

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getCreditSpecification}
         * @param creditSpecification the value to be set.
         * @return {@code this}
         */
        public Builder creditSpecification(java.lang.String creditSpecification) {
            this.creditSpecification = creditSpecification;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getCreditSpecification}
         * @param creditSpecification the value to be set.
         * @return {@code this}
         */
        public Builder creditSpecification(com.aliyun.ros.cdk.core.IResolvable creditSpecification) {
            this.creditSpecification = creditSpecification;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getDeploymentSetId}
         * @param deploymentSetId the value to be set.
         * @return {@code this}
         */
        public Builder deploymentSetId(java.lang.String deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getDeploymentSetId}
         * @param deploymentSetId the value to be set.
         * @return {@code this}
         */
        public Builder deploymentSetId(com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getDiskMappings}
         * @param diskMappings the value to be set.
         * @return {@code this}
         */
        public Builder diskMappings(com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getDiskMappings}
         * @param diskMappings the value to be set.
         * @return {@code this}
         */
        public Builder diskMappings(java.util.List<? extends java.lang.Object> diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getHostName}
         * @param hostName the value to be set.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getHostName}
         * @param hostName the value to be set.
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getHpcClusterId}
         * @param hpcClusterId the value to be set.
         * @return {@code this}
         */
        public Builder hpcClusterId(java.lang.String hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getHpcClusterId}
         * @param hpcClusterId the value to be set.
         * @return {@code this}
         */
        public Builder hpcClusterId(com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getImageFamily}
         * @param imageFamily the value to be set.
         * @return {@code this}
         */
        public Builder imageFamily(java.lang.String imageFamily) {
            this.imageFamily = imageFamily;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getImageFamily}
         * @param imageFamily the value to be set.
         * @return {@code this}
         */
        public Builder imageFamily(com.aliyun.ros.cdk.core.IResolvable imageFamily) {
            this.imageFamily = imageFamily;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInstanceTypes}
         * @param instanceTypes the value to be set.
         * @return {@code this}
         */
        public Builder instanceTypes(java.util.List<? extends java.lang.Object> instanceTypes) {
            this.instanceTypes = instanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInstanceTypes}
         * @param instanceTypes the value to be set.
         * @return {@code this}
         */
        public Builder instanceTypes(com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
            this.instanceTypes = instanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(java.lang.Number internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInternetMaxBandwidthIn}
         * @param internetMaxBandwidthIn the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthIn(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthIn) {
            this.internetMaxBandwidthIn = internetMaxBandwidthIn;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getIoOptimized}
         * @param ioOptimized the value to be set.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.String ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getIoOptimized}
         * @param ioOptimized the value to be set.
         * @return {@code this}
         */
        public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getLoadBalancerWeight}
         * @param loadBalancerWeight the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerWeight(java.lang.Number loadBalancerWeight) {
            this.loadBalancerWeight = loadBalancerWeight;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getLoadBalancerWeight}
         * @param loadBalancerWeight the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerWeight(com.aliyun.ros.cdk.core.IResolvable loadBalancerWeight) {
            this.loadBalancerWeight = loadBalancerWeight;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getPasswordInherit}
         * @param passwordInherit the value to be set.
         * @return {@code this}
         */
        public Builder passwordInherit(java.lang.Boolean passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getPasswordInherit}
         * @param passwordInherit the value to be set.
         * @return {@code this}
         */
        public Builder passwordInherit(com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getScalingConfigurationName}
         * @param scalingConfigurationName the value to be set.
         * @return {@code this}
         */
        public Builder scalingConfigurationName(java.lang.String scalingConfigurationName) {
            this.scalingConfigurationName = scalingConfigurationName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getScalingConfigurationName}
         * @param scalingConfigurationName the value to be set.
         * @return {@code this}
         */
        public Builder scalingConfigurationName(com.aliyun.ros.cdk.core.IResolvable scalingConfigurationName) {
            this.scalingConfigurationName = scalingConfigurationName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSpotPriceLimitForInstanceType}
         * @param spotPriceLimitForInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimitForInstanceType(com.aliyun.ros.cdk.core.IResolvable spotPriceLimitForInstanceType) {
            this.spotPriceLimitForInstanceType = spotPriceLimitForInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSpotPriceLimitForInstanceType}
         * @param spotPriceLimitForInstanceType the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimitForInstanceType(java.util.Map<java.lang.String, ? extends java.lang.Object> spotPriceLimitForInstanceType) {
            this.spotPriceLimitForInstanceType = spotPriceLimitForInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSystemDiskAutoSnapshotPolicyId}
         * @param systemDiskAutoSnapshotPolicyId the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskAutoSnapshotPolicyId(java.lang.String systemDiskAutoSnapshotPolicyId) {
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSystemDiskAutoSnapshotPolicyId}
         * @param systemDiskAutoSnapshotPolicyId the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskAutoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable systemDiskAutoSnapshotPolicyId) {
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSystemDiskCategory}
         * @param systemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSystemDiskCategory}
         * @param systemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSystemDiskPerformanceLevel}
         * @param systemDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskPerformanceLevel(java.lang.String systemDiskPerformanceLevel) {
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSystemDiskPerformanceLevel}
         * @param systemDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSystemDiskSize}
         * @param systemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getSystemDiskSize}
         * @param systemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getTagList}
         * @param tagList the value to be set.
         * @return {@code this}
         */
        public Builder tagList(com.aliyun.ros.cdk.core.IResolvable tagList) {
            this.tagList = tagList;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getTagList}
         * @param tagList the value to be set.
         * @return {@code this}
         */
        public Builder tagList(java.util.List<? extends java.lang.Object> tagList) {
            this.tagList = tagList;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(java.lang.String userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosScalingConfigurationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosScalingConfigurationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosScalingConfigurationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosScalingConfigurationProps {
        private final java.lang.Object scalingGroupId;
        private final java.lang.Object creditSpecification;
        private final java.lang.Object deploymentSetId;
        private final java.lang.Object diskMappings;
        private final java.lang.Object hostName;
        private final java.lang.Object hpcClusterId;
        private final java.lang.Object imageFamily;
        private final java.lang.Object imageId;
        private final java.lang.Object instanceId;
        private final java.lang.Object instanceName;
        private final java.lang.Object instanceType;
        private final java.lang.Object instanceTypes;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object internetMaxBandwidthIn;
        private final java.lang.Object internetMaxBandwidthOut;
        private final java.lang.Object ioOptimized;
        private final java.lang.Object ipv6AddressCount;
        private final java.lang.Object keyPairName;
        private final java.lang.Object loadBalancerWeight;
        private final java.lang.Object password;
        private final java.lang.Object passwordInherit;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object scalingConfigurationName;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object spotPriceLimit;
        private final java.lang.Object spotPriceLimitForInstanceType;
        private final java.lang.Object spotStrategy;
        private final java.lang.Object systemDiskAutoSnapshotPolicyId;
        private final java.lang.Object systemDiskCategory;
        private final java.lang.Object systemDiskPerformanceLevel;
        private final java.lang.Object systemDiskSize;
        private final java.lang.Object tagList;
        private final java.lang.Object userData;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.creditSpecification = software.amazon.jsii.Kernel.get(this, "creditSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploymentSetId = software.amazon.jsii.Kernel.get(this, "deploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskMappings = software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hpcClusterId = software.amazon.jsii.Kernel.get(this, "hpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageFamily = software.amazon.jsii.Kernel.get(this, "imageFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceTypes = software.amazon.jsii.Kernel.get(this, "instanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthIn = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerWeight = software.amazon.jsii.Kernel.get(this, "loadBalancerWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passwordInherit = software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingConfigurationName = software.amazon.jsii.Kernel.get(this, "scalingConfigurationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimitForInstanceType = software.amazon.jsii.Kernel.get(this, "spotPriceLimitForInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskAutoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "systemDiskAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "systemDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagList = software.amazon.jsii.Kernel.get(this, "tagList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.scalingGroupId = java.util.Objects.requireNonNull(builder.scalingGroupId, "scalingGroupId is required");
            this.creditSpecification = builder.creditSpecification;
            this.deploymentSetId = builder.deploymentSetId;
            this.diskMappings = builder.diskMappings;
            this.hostName = builder.hostName;
            this.hpcClusterId = builder.hpcClusterId;
            this.imageFamily = builder.imageFamily;
            this.imageId = builder.imageId;
            this.instanceId = builder.instanceId;
            this.instanceName = builder.instanceName;
            this.instanceType = builder.instanceType;
            this.instanceTypes = builder.instanceTypes;
            this.internetChargeType = builder.internetChargeType;
            this.internetMaxBandwidthIn = builder.internetMaxBandwidthIn;
            this.internetMaxBandwidthOut = builder.internetMaxBandwidthOut;
            this.ioOptimized = builder.ioOptimized;
            this.ipv6AddressCount = builder.ipv6AddressCount;
            this.keyPairName = builder.keyPairName;
            this.loadBalancerWeight = builder.loadBalancerWeight;
            this.password = builder.password;
            this.passwordInherit = builder.passwordInherit;
            this.ramRoleName = builder.ramRoleName;
            this.resourceGroupId = builder.resourceGroupId;
            this.scalingConfigurationName = builder.scalingConfigurationName;
            this.securityGroupId = builder.securityGroupId;
            this.spotPriceLimit = builder.spotPriceLimit;
            this.spotPriceLimitForInstanceType = builder.spotPriceLimitForInstanceType;
            this.spotStrategy = builder.spotStrategy;
            this.systemDiskAutoSnapshotPolicyId = builder.systemDiskAutoSnapshotPolicyId;
            this.systemDiskCategory = builder.systemDiskCategory;
            this.systemDiskPerformanceLevel = builder.systemDiskPerformanceLevel;
            this.systemDiskSize = builder.systemDiskSize;
            this.tagList = builder.tagList;
            this.userData = builder.userData;
        }

        @Override
        public final java.lang.Object getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Object getCreditSpecification() {
            return this.creditSpecification;
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
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
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
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPasswordInherit() {
            return this.passwordInherit;
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
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
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
        public final java.lang.Object getSystemDiskCategory() {
            return this.systemDiskCategory;
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
        public final java.lang.Object getTagList() {
            return this.tagList;
        }

        @Override
        public final java.lang.Object getUserData() {
            return this.userData;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            if (this.getCreditSpecification() != null) {
                data.set("creditSpecification", om.valueToTree(this.getCreditSpecification()));
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
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
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
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPasswordInherit() != null) {
                data.set("passwordInherit", om.valueToTree(this.getPasswordInherit()));
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
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
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
            if (this.getSystemDiskCategory() != null) {
                data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
            }
            if (this.getSystemDiskPerformanceLevel() != null) {
                data.set("systemDiskPerformanceLevel", om.valueToTree(this.getSystemDiskPerformanceLevel()));
            }
            if (this.getSystemDiskSize() != null) {
                data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
            }
            if (this.getTagList() != null) {
                data.set("tagList", om.valueToTree(this.getTagList()));
            }
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosScalingConfigurationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosScalingConfigurationProps.Jsii$Proxy that = (RosScalingConfigurationProps.Jsii$Proxy) o;

            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (this.creditSpecification != null ? !this.creditSpecification.equals(that.creditSpecification) : that.creditSpecification != null) return false;
            if (this.deploymentSetId != null ? !this.deploymentSetId.equals(that.deploymentSetId) : that.deploymentSetId != null) return false;
            if (this.diskMappings != null ? !this.diskMappings.equals(that.diskMappings) : that.diskMappings != null) return false;
            if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
            if (this.hpcClusterId != null ? !this.hpcClusterId.equals(that.hpcClusterId) : that.hpcClusterId != null) return false;
            if (this.imageFamily != null ? !this.imageFamily.equals(that.imageFamily) : that.imageFamily != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.instanceTypes != null ? !this.instanceTypes.equals(that.instanceTypes) : that.instanceTypes != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.internetMaxBandwidthIn != null ? !this.internetMaxBandwidthIn.equals(that.internetMaxBandwidthIn) : that.internetMaxBandwidthIn != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.loadBalancerWeight != null ? !this.loadBalancerWeight.equals(that.loadBalancerWeight) : that.loadBalancerWeight != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.passwordInherit != null ? !this.passwordInherit.equals(that.passwordInherit) : that.passwordInherit != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.scalingConfigurationName != null ? !this.scalingConfigurationName.equals(that.scalingConfigurationName) : that.scalingConfigurationName != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
            if (this.spotPriceLimitForInstanceType != null ? !this.spotPriceLimitForInstanceType.equals(that.spotPriceLimitForInstanceType) : that.spotPriceLimitForInstanceType != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.systemDiskAutoSnapshotPolicyId != null ? !this.systemDiskAutoSnapshotPolicyId.equals(that.systemDiskAutoSnapshotPolicyId) : that.systemDiskAutoSnapshotPolicyId != null) return false;
            if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
            if (this.systemDiskPerformanceLevel != null ? !this.systemDiskPerformanceLevel.equals(that.systemDiskPerformanceLevel) : that.systemDiskPerformanceLevel != null) return false;
            if (this.systemDiskSize != null ? !this.systemDiskSize.equals(that.systemDiskSize) : that.systemDiskSize != null) return false;
            if (this.tagList != null ? !this.tagList.equals(that.tagList) : that.tagList != null) return false;
            return this.userData != null ? this.userData.equals(that.userData) : that.userData == null;
        }

        @Override
        public final int hashCode() {
            int result = this.scalingGroupId.hashCode();
            result = 31 * result + (this.creditSpecification != null ? this.creditSpecification.hashCode() : 0);
            result = 31 * result + (this.deploymentSetId != null ? this.deploymentSetId.hashCode() : 0);
            result = 31 * result + (this.diskMappings != null ? this.diskMappings.hashCode() : 0);
            result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
            result = 31 * result + (this.hpcClusterId != null ? this.hpcClusterId.hashCode() : 0);
            result = 31 * result + (this.imageFamily != null ? this.imageFamily.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.instanceTypes != null ? this.instanceTypes.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthIn != null ? this.internetMaxBandwidthIn.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.loadBalancerWeight != null ? this.loadBalancerWeight.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.passwordInherit != null ? this.passwordInherit.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.scalingConfigurationName != null ? this.scalingConfigurationName.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimitForInstanceType != null ? this.spotPriceLimitForInstanceType.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.systemDiskAutoSnapshotPolicyId != null ? this.systemDiskAutoSnapshotPolicyId.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.systemDiskPerformanceLevel != null ? this.systemDiskPerformanceLevel.hashCode() : 0);
            result = 31 * result + (this.systemDiskSize != null ? this.systemDiskSize.hashCode() : 0);
            result = 31 * result + (this.tagList != null ? this.tagList.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            return result;
        }
    }
}
