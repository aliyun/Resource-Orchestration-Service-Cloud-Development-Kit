package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosLaunchTemplate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:05.090Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosLaunchTemplateProps")
@software.amazon.jsii.Jsii.Proxy(RosLaunchTemplateProps.Jsii$Proxy.class)
public interface RosLaunchTemplateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLaunchTemplateName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoReleaseTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageOwnerAlias() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaces() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPasswordInherit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityEnhancementStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDeleteWithInstance() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDiskName() {
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
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersionDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosLaunchTemplateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosLaunchTemplateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosLaunchTemplateProps> {
        java.lang.Object launchTemplateName;
        java.lang.Object autoReleaseTime;
        java.lang.Object deploymentSetId;
        java.lang.Object description;
        java.lang.Object diskMappings;
        java.lang.Object hostName;
        java.lang.Object imageId;
        java.lang.Object imageOwnerAlias;
        java.lang.Object instanceChargeType;
        java.lang.Object instanceName;
        java.lang.Object instanceType;
        java.lang.Object internetChargeType;
        java.lang.Object internetMaxBandwidthOut;
        java.lang.Object ioOptimized;
        java.lang.Object ipv6AddressCount;
        java.lang.Object keyPairName;
        java.lang.Object networkInterfaces;
        java.lang.Object networkType;
        java.lang.Object passwordInherit;
        java.lang.Object period;
        java.lang.Object privateIpAddress;
        java.lang.Object ramRoleName;
        java.lang.Object resourceGroupId;
        java.lang.Object securityEnhancementStrategy;
        java.lang.Object securityGroupId;
        java.lang.Object securityGroupIds;
        java.lang.Object spotDuration;
        java.lang.Object spotPriceLimit;
        java.lang.Object spotStrategy;
        java.lang.Object systemDiskCategory;
        java.lang.Object systemDiskDeleteWithInstance;
        java.lang.Object systemDiskDescription;
        java.lang.Object systemDiskDiskName;
        java.lang.Object systemDiskPerformanceLevel;
        java.lang.Object systemDiskSize;
        java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty> tags;
        java.lang.Object templateResourceGroupId;
        java.lang.Object templateTags;
        java.lang.Object userData;
        java.lang.Object versionDescription;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getLaunchTemplateName}
         * @param launchTemplateName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder launchTemplateName(java.lang.String launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getLaunchTemplateName}
         * @param launchTemplateName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder launchTemplateName(com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getAutoReleaseTime}
         * @param autoReleaseTime the value to be set.
         * @return {@code this}
         */
        public Builder autoReleaseTime(java.lang.String autoReleaseTime) {
            this.autoReleaseTime = autoReleaseTime;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getAutoReleaseTime}
         * @param autoReleaseTime the value to be set.
         * @return {@code this}
         */
        public Builder autoReleaseTime(com.aliyun.ros.cdk.core.IResolvable autoReleaseTime) {
            this.autoReleaseTime = autoReleaseTime;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getDeploymentSetId}
         * @param deploymentSetId the value to be set.
         * @return {@code this}
         */
        public Builder deploymentSetId(java.lang.String deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getDeploymentSetId}
         * @param deploymentSetId the value to be set.
         * @return {@code this}
         */
        public Builder deploymentSetId(com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getDiskMappings}
         * @param diskMappings the value to be set.
         * @return {@code this}
         */
        public Builder diskMappings(com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getDiskMappings}
         * @param diskMappings the value to be set.
         * @return {@code this}
         */
        public Builder diskMappings(java.util.List<? extends java.lang.Object> diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getHostName}
         * @param hostName the value to be set.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getHostName}
         * @param hostName the value to be set.
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getImageOwnerAlias}
         * @param imageOwnerAlias the value to be set.
         * @return {@code this}
         */
        public Builder imageOwnerAlias(java.lang.String imageOwnerAlias) {
            this.imageOwnerAlias = imageOwnerAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getImageOwnerAlias}
         * @param imageOwnerAlias the value to be set.
         * @return {@code this}
         */
        public Builder imageOwnerAlias(com.aliyun.ros.cdk.core.IResolvable imageOwnerAlias) {
            this.imageOwnerAlias = imageOwnerAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getIoOptimized}
         * @param ioOptimized the value to be set.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.String ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getIoOptimized}
         * @param ioOptimized the value to be set.
         * @return {@code this}
         */
        public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getNetworkInterfaces}
         * @param networkInterfaces the value to be set.
         * @return {@code this}
         */
        public Builder networkInterfaces(com.aliyun.ros.cdk.core.IResolvable networkInterfaces) {
            this.networkInterfaces = networkInterfaces;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getNetworkInterfaces}
         * @param networkInterfaces the value to be set.
         * @return {@code this}
         */
        public Builder networkInterfaces(java.util.List<? extends java.lang.Object> networkInterfaces) {
            this.networkInterfaces = networkInterfaces;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getNetworkType}
         * @param networkType the value to be set.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getNetworkType}
         * @param networkType the value to be set.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getPasswordInherit}
         * @param passwordInherit the value to be set.
         * @return {@code this}
         */
        public Builder passwordInherit(java.lang.Boolean passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getPasswordInherit}
         * @param passwordInherit the value to be set.
         * @return {@code this}
         */
        public Builder passwordInherit(com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSecurityEnhancementStrategy}
         * @param securityEnhancementStrategy the value to be set.
         * @return {@code this}
         */
        public Builder securityEnhancementStrategy(java.lang.String securityEnhancementStrategy) {
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSecurityEnhancementStrategy}
         * @param securityEnhancementStrategy the value to be set.
         * @return {@code this}
         */
        public Builder securityEnhancementStrategy(com.aliyun.ros.cdk.core.IResolvable securityEnhancementStrategy) {
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSecurityGroupIds}
         * @param securityGroupIds the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSecurityGroupIds}
         * @param securityGroupIds the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSpotDuration}
         * @param spotDuration the value to be set.
         * @return {@code this}
         */
        public Builder spotDuration(java.lang.Number spotDuration) {
            this.spotDuration = spotDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSpotDuration}
         * @param spotDuration the value to be set.
         * @return {@code this}
         */
        public Builder spotDuration(com.aliyun.ros.cdk.core.IResolvable spotDuration) {
            this.spotDuration = spotDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.String spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSystemDiskCategory}
         * @param systemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSystemDiskCategory}
         * @param systemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSystemDiskDeleteWithInstance}
         * @param systemDiskDeleteWithInstance the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskDeleteWithInstance(java.lang.Boolean systemDiskDeleteWithInstance) {
            this.systemDiskDeleteWithInstance = systemDiskDeleteWithInstance;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSystemDiskDeleteWithInstance}
         * @param systemDiskDeleteWithInstance the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskDeleteWithInstance(com.aliyun.ros.cdk.core.IResolvable systemDiskDeleteWithInstance) {
            this.systemDiskDeleteWithInstance = systemDiskDeleteWithInstance;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSystemDiskDescription}
         * @param systemDiskDescription the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskDescription(java.lang.String systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSystemDiskDescription}
         * @param systemDiskDescription the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskDescription(com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSystemDiskDiskName}
         * @param systemDiskDiskName the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(java.lang.String systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSystemDiskDiskName}
         * @param systemDiskDiskName the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSystemDiskPerformanceLevel}
         * @param systemDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskPerformanceLevel(java.lang.String systemDiskPerformanceLevel) {
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSystemDiskPerformanceLevel}
         * @param systemDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSystemDiskSize}
         * @param systemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getSystemDiskSize}
         * @param systemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getTemplateResourceGroupId}
         * @param templateResourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder templateResourceGroupId(java.lang.String templateResourceGroupId) {
            this.templateResourceGroupId = templateResourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getTemplateResourceGroupId}
         * @param templateResourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder templateResourceGroupId(com.aliyun.ros.cdk.core.IResolvable templateResourceGroupId) {
            this.templateResourceGroupId = templateResourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getTemplateTags}
         * @param templateTags the value to be set.
         * @return {@code this}
         */
        public Builder templateTags(com.aliyun.ros.cdk.core.IResolvable templateTags) {
            this.templateTags = templateTags;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getTemplateTags}
         * @param templateTags the value to be set.
         * @return {@code this}
         */
        public Builder templateTags(java.util.List<? extends java.lang.Object> templateTags) {
            this.templateTags = templateTags;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(java.lang.String userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getVersionDescription}
         * @param versionDescription the value to be set.
         * @return {@code this}
         */
        public Builder versionDescription(java.lang.String versionDescription) {
            this.versionDescription = versionDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getVersionDescription}
         * @param versionDescription the value to be set.
         * @return {@code this}
         */
        public Builder versionDescription(com.aliyun.ros.cdk.core.IResolvable versionDescription) {
            this.versionDescription = versionDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosLaunchTemplateProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosLaunchTemplateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosLaunchTemplateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosLaunchTemplateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosLaunchTemplateProps {
        private final java.lang.Object launchTemplateName;
        private final java.lang.Object autoReleaseTime;
        private final java.lang.Object deploymentSetId;
        private final java.lang.Object description;
        private final java.lang.Object diskMappings;
        private final java.lang.Object hostName;
        private final java.lang.Object imageId;
        private final java.lang.Object imageOwnerAlias;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object instanceName;
        private final java.lang.Object instanceType;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object internetMaxBandwidthOut;
        private final java.lang.Object ioOptimized;
        private final java.lang.Object ipv6AddressCount;
        private final java.lang.Object keyPairName;
        private final java.lang.Object networkInterfaces;
        private final java.lang.Object networkType;
        private final java.lang.Object passwordInherit;
        private final java.lang.Object period;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityEnhancementStrategy;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityGroupIds;
        private final java.lang.Object spotDuration;
        private final java.lang.Object spotPriceLimit;
        private final java.lang.Object spotStrategy;
        private final java.lang.Object systemDiskCategory;
        private final java.lang.Object systemDiskDeleteWithInstance;
        private final java.lang.Object systemDiskDescription;
        private final java.lang.Object systemDiskDiskName;
        private final java.lang.Object systemDiskPerformanceLevel;
        private final java.lang.Object systemDiskSize;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty> tags;
        private final java.lang.Object templateResourceGroupId;
        private final java.lang.Object templateTags;
        private final java.lang.Object userData;
        private final java.lang.Object versionDescription;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.launchTemplateName = software.amazon.jsii.Kernel.get(this, "launchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoReleaseTime = software.amazon.jsii.Kernel.get(this, "autoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploymentSetId = software.amazon.jsii.Kernel.get(this, "deploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskMappings = software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageOwnerAlias = software.amazon.jsii.Kernel.get(this, "imageOwnerAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaces = software.amazon.jsii.Kernel.get(this, "networkInterfaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passwordInherit = software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityEnhancementStrategy = software.amazon.jsii.Kernel.get(this, "securityEnhancementStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotDuration = software.amazon.jsii.Kernel.get(this, "spotDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDeleteWithInstance = software.amazon.jsii.Kernel.get(this, "systemDiskDeleteWithInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDescription = software.amazon.jsii.Kernel.get(this, "systemDiskDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDiskName = software.amazon.jsii.Kernel.get(this, "systemDiskDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "systemDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty.class)));
            this.templateResourceGroupId = software.amazon.jsii.Kernel.get(this, "templateResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateTags = software.amazon.jsii.Kernel.get(this, "templateTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionDescription = software.amazon.jsii.Kernel.get(this, "versionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.launchTemplateName = java.util.Objects.requireNonNull(builder.launchTemplateName, "launchTemplateName is required");
            this.autoReleaseTime = builder.autoReleaseTime;
            this.deploymentSetId = builder.deploymentSetId;
            this.description = builder.description;
            this.diskMappings = builder.diskMappings;
            this.hostName = builder.hostName;
            this.imageId = builder.imageId;
            this.imageOwnerAlias = builder.imageOwnerAlias;
            this.instanceChargeType = builder.instanceChargeType;
            this.instanceName = builder.instanceName;
            this.instanceType = builder.instanceType;
            this.internetChargeType = builder.internetChargeType;
            this.internetMaxBandwidthOut = builder.internetMaxBandwidthOut;
            this.ioOptimized = builder.ioOptimized;
            this.ipv6AddressCount = builder.ipv6AddressCount;
            this.keyPairName = builder.keyPairName;
            this.networkInterfaces = builder.networkInterfaces;
            this.networkType = builder.networkType;
            this.passwordInherit = builder.passwordInherit;
            this.period = builder.period;
            this.privateIpAddress = builder.privateIpAddress;
            this.ramRoleName = builder.ramRoleName;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityEnhancementStrategy = builder.securityEnhancementStrategy;
            this.securityGroupId = builder.securityGroupId;
            this.securityGroupIds = builder.securityGroupIds;
            this.spotDuration = builder.spotDuration;
            this.spotPriceLimit = builder.spotPriceLimit;
            this.spotStrategy = builder.spotStrategy;
            this.systemDiskCategory = builder.systemDiskCategory;
            this.systemDiskDeleteWithInstance = builder.systemDiskDeleteWithInstance;
            this.systemDiskDescription = builder.systemDiskDescription;
            this.systemDiskDiskName = builder.systemDiskDiskName;
            this.systemDiskPerformanceLevel = builder.systemDiskPerformanceLevel;
            this.systemDiskSize = builder.systemDiskSize;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty>)builder.tags;
            this.templateResourceGroupId = builder.templateResourceGroupId;
            this.templateTags = builder.templateTags;
            this.userData = builder.userData;
            this.versionDescription = builder.versionDescription;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getLaunchTemplateName() {
            return this.launchTemplateName;
        }

        @Override
        public final java.lang.Object getAutoReleaseTime() {
            return this.autoReleaseTime;
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
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getImageOwnerAlias() {
            return this.imageOwnerAlias;
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
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getInternetChargeType() {
            return this.internetChargeType;
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
        public final java.lang.Object getNetworkInterfaces() {
            return this.networkInterfaces;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
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
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
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
        public final java.lang.Object getSpotPriceLimit() {
            return this.spotPriceLimit;
        }

        @Override
        public final java.lang.Object getSpotStrategy() {
            return this.spotStrategy;
        }

        @Override
        public final java.lang.Object getSystemDiskCategory() {
            return this.systemDiskCategory;
        }

        @Override
        public final java.lang.Object getSystemDiskDeleteWithInstance() {
            return this.systemDiskDeleteWithInstance;
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
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosLaunchTemplate.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTemplateResourceGroupId() {
            return this.templateResourceGroupId;
        }

        @Override
        public final java.lang.Object getTemplateTags() {
            return this.templateTags;
        }

        @Override
        public final java.lang.Object getUserData() {
            return this.userData;
        }

        @Override
        public final java.lang.Object getVersionDescription() {
            return this.versionDescription;
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

            data.set("launchTemplateName", om.valueToTree(this.getLaunchTemplateName()));
            if (this.getAutoReleaseTime() != null) {
                data.set("autoReleaseTime", om.valueToTree(this.getAutoReleaseTime()));
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
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getImageOwnerAlias() != null) {
                data.set("imageOwnerAlias", om.valueToTree(this.getImageOwnerAlias()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInstanceName() != null) {
                data.set("instanceName", om.valueToTree(this.getInstanceName()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getInternetChargeType() != null) {
                data.set("internetChargeType", om.valueToTree(this.getInternetChargeType()));
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
            if (this.getNetworkInterfaces() != null) {
                data.set("networkInterfaces", om.valueToTree(this.getNetworkInterfaces()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
            }
            if (this.getPasswordInherit() != null) {
                data.set("passwordInherit", om.valueToTree(this.getPasswordInherit()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }
            if (this.getRamRoleName() != null) {
                data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
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
            if (this.getSpotPriceLimit() != null) {
                data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
            }
            if (this.getSpotStrategy() != null) {
                data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
            }
            if (this.getSystemDiskCategory() != null) {
                data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
            }
            if (this.getSystemDiskDeleteWithInstance() != null) {
                data.set("systemDiskDeleteWithInstance", om.valueToTree(this.getSystemDiskDeleteWithInstance()));
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
            if (this.getTemplateResourceGroupId() != null) {
                data.set("templateResourceGroupId", om.valueToTree(this.getTemplateResourceGroupId()));
            }
            if (this.getTemplateTags() != null) {
                data.set("templateTags", om.valueToTree(this.getTemplateTags()));
            }
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }
            if (this.getVersionDescription() != null) {
                data.set("versionDescription", om.valueToTree(this.getVersionDescription()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosLaunchTemplateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosLaunchTemplateProps.Jsii$Proxy that = (RosLaunchTemplateProps.Jsii$Proxy) o;

            if (!launchTemplateName.equals(that.launchTemplateName)) return false;
            if (this.autoReleaseTime != null ? !this.autoReleaseTime.equals(that.autoReleaseTime) : that.autoReleaseTime != null) return false;
            if (this.deploymentSetId != null ? !this.deploymentSetId.equals(that.deploymentSetId) : that.deploymentSetId != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskMappings != null ? !this.diskMappings.equals(that.diskMappings) : that.diskMappings != null) return false;
            if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.imageOwnerAlias != null ? !this.imageOwnerAlias.equals(that.imageOwnerAlias) : that.imageOwnerAlias != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.networkInterfaces != null ? !this.networkInterfaces.equals(that.networkInterfaces) : that.networkInterfaces != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.passwordInherit != null ? !this.passwordInherit.equals(that.passwordInherit) : that.passwordInherit != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityEnhancementStrategy != null ? !this.securityEnhancementStrategy.equals(that.securityEnhancementStrategy) : that.securityEnhancementStrategy != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
            if (this.spotDuration != null ? !this.spotDuration.equals(that.spotDuration) : that.spotDuration != null) return false;
            if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
            if (this.systemDiskDeleteWithInstance != null ? !this.systemDiskDeleteWithInstance.equals(that.systemDiskDeleteWithInstance) : that.systemDiskDeleteWithInstance != null) return false;
            if (this.systemDiskDescription != null ? !this.systemDiskDescription.equals(that.systemDiskDescription) : that.systemDiskDescription != null) return false;
            if (this.systemDiskDiskName != null ? !this.systemDiskDiskName.equals(that.systemDiskDiskName) : that.systemDiskDiskName != null) return false;
            if (this.systemDiskPerformanceLevel != null ? !this.systemDiskPerformanceLevel.equals(that.systemDiskPerformanceLevel) : that.systemDiskPerformanceLevel != null) return false;
            if (this.systemDiskSize != null ? !this.systemDiskSize.equals(that.systemDiskSize) : that.systemDiskSize != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.templateResourceGroupId != null ? !this.templateResourceGroupId.equals(that.templateResourceGroupId) : that.templateResourceGroupId != null) return false;
            if (this.templateTags != null ? !this.templateTags.equals(that.templateTags) : that.templateTags != null) return false;
            if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
            if (this.versionDescription != null ? !this.versionDescription.equals(that.versionDescription) : that.versionDescription != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.launchTemplateName.hashCode();
            result = 31 * result + (this.autoReleaseTime != null ? this.autoReleaseTime.hashCode() : 0);
            result = 31 * result + (this.deploymentSetId != null ? this.deploymentSetId.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskMappings != null ? this.diskMappings.hashCode() : 0);
            result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.imageOwnerAlias != null ? this.imageOwnerAlias.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.networkInterfaces != null ? this.networkInterfaces.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.passwordInherit != null ? this.passwordInherit.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityEnhancementStrategy != null ? this.securityEnhancementStrategy.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
            result = 31 * result + (this.spotDuration != null ? this.spotDuration.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.systemDiskDeleteWithInstance != null ? this.systemDiskDeleteWithInstance.hashCode() : 0);
            result = 31 * result + (this.systemDiskDescription != null ? this.systemDiskDescription.hashCode() : 0);
            result = 31 * result + (this.systemDiskDiskName != null ? this.systemDiskDiskName.hashCode() : 0);
            result = 31 * result + (this.systemDiskPerformanceLevel != null ? this.systemDiskPerformanceLevel.hashCode() : 0);
            result = 31 * result + (this.systemDiskSize != null ? this.systemDiskSize.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.templateResourceGroupId != null ? this.templateResourceGroupId.hashCode() : 0);
            result = 31 * result + (this.templateTags != null ? this.templateTags.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            result = 31 * result + (this.versionDescription != null ? this.versionDescription.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
