package com.aliyun.ros.cdk.ecs;

/**
 * Properties for defining a <code>RosInstanceGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-instancegroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:38.801Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosInstanceGroupProps.Jsii$Proxy.class)
public interface RosInstanceGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMaxAmount();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAffinity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocatePublicIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoReleaseTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpuOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreditSpecification() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetGroupNo() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getEniMappings() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostNames() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHpcClusterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpEndpoint() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHttpTokens() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageOptions() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Addresses() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceQueueNumber() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivatePoolOptions() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getSchedulerOptions() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotDuration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotInterruptionBehavior() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSetPartitionNumber() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskAutoSnapshotPolicyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskBurstingEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskEncryptAlgorithm() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskEncrypted() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskKmsKeyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskPerformanceLevel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskProvisionedIops() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskStorageClusterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTenancy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUniqueSuffix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUpdatePolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUseAdditionalService() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstanceGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstanceGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstanceGroupProps> {
        java.lang.Object instanceType;
        java.lang.Object maxAmount;
        java.lang.Object affinity;
        java.lang.Object allocatePublicIp;
        java.lang.Object autoReleaseTime;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object cpuOptions;
        java.lang.Object creditSpecification;
        java.lang.Object dedicatedHostId;
        java.lang.Object deletionForce;
        java.lang.Object deletionProtection;
        java.lang.Object deploymentSetGroupNo;
        java.lang.Object deploymentSetId;
        java.lang.Object description;
        java.lang.Object diskMappings;
        java.lang.Object eniMappings;
        java.lang.Object hostName;
        java.lang.Object hostNames;
        java.lang.Object hpcClusterId;
        java.lang.Object httpEndpoint;
        java.lang.Object httpTokens;
        java.lang.Object imageFamily;
        java.lang.Object imageId;
        java.lang.Object imageOptions;
        java.lang.Object instanceChargeType;
        java.lang.Object instanceName;
        java.lang.Object internetChargeType;
        java.lang.Object internetMaxBandwidthOut;
        java.lang.Object ioOptimized;
        java.lang.Object ipv6AddressCount;
        java.lang.Object ipv6Addresses;
        java.lang.Object keyPairName;
        java.lang.Object launchTemplateId;
        java.lang.Object launchTemplateName;
        java.lang.Object launchTemplateVersion;
        java.lang.Object networkInterfaceQueueNumber;
        java.lang.Object networkOptions;
        java.lang.Object networkType;
        java.lang.Object password;
        java.lang.Object passwordInherit;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object privateIpAddress;
        java.lang.Object privatePoolOptions;
        java.lang.Object ramRoleName;
        java.lang.Object resourceGroupId;
        java.lang.Object schedulerOptions;
        java.lang.Object securityEnhancementStrategy;
        java.lang.Object securityGroupId;
        java.lang.Object securityGroupIds;
        java.lang.Object securityOptions;
        java.lang.Object spotDuration;
        java.lang.Object spotInterruptionBehavior;
        java.lang.Object spotPriceLimit;
        java.lang.Object spotStrategy;
        java.lang.Object storageSetId;
        java.lang.Object storageSetPartitionNumber;
        java.lang.Object systemDiskAutoSnapshotPolicyId;
        java.lang.Object systemDiskBurstingEnabled;
        java.lang.Object systemDiskCategory;
        java.lang.Object systemDiskDescription;
        java.lang.Object systemDiskDiskName;
        java.lang.Object systemDiskEncryptAlgorithm;
        java.lang.Object systemDiskEncrypted;
        java.lang.Object systemDiskKmsKeyId;
        java.lang.Object systemDiskPerformanceLevel;
        java.lang.Object systemDiskProvisionedIops;
        java.lang.Object systemDiskSize;
        java.lang.Object systemDiskStorageClusterId;
        java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty> tags;
        java.lang.Object tenancy;
        java.lang.Object uniqueSuffix;
        java.lang.Object updatePolicy;
        java.lang.Object useAdditionalService;
        java.lang.Object userData;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object zoneIds;

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInstanceType}
         * @param instanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getMaxAmount}
         * @param maxAmount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder maxAmount(java.lang.Number maxAmount) {
            this.maxAmount = maxAmount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getMaxAmount}
         * @param maxAmount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder maxAmount(com.aliyun.ros.cdk.core.IResolvable maxAmount) {
            this.maxAmount = maxAmount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAffinity}
         * @param affinity the value to be set.
         * @return {@code this}
         */
        public Builder affinity(java.lang.String affinity) {
            this.affinity = affinity;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAffinity}
         * @param affinity the value to be set.
         * @return {@code this}
         */
        public Builder affinity(com.aliyun.ros.cdk.core.IResolvable affinity) {
            this.affinity = affinity;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAllocatePublicIp}
         * @param allocatePublicIp the value to be set.
         * @return {@code this}
         */
        public Builder allocatePublicIp(java.lang.Boolean allocatePublicIp) {
            this.allocatePublicIp = allocatePublicIp;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAllocatePublicIp}
         * @param allocatePublicIp the value to be set.
         * @return {@code this}
         */
        public Builder allocatePublicIp(com.aliyun.ros.cdk.core.IResolvable allocatePublicIp) {
            this.allocatePublicIp = allocatePublicIp;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAutoReleaseTime}
         * @param autoReleaseTime the value to be set.
         * @return {@code this}
         */
        public Builder autoReleaseTime(java.lang.String autoReleaseTime) {
            this.autoReleaseTime = autoReleaseTime;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAutoReleaseTime}
         * @param autoReleaseTime the value to be set.
         * @return {@code this}
         */
        public Builder autoReleaseTime(com.aliyun.ros.cdk.core.IResolvable autoReleaseTime) {
            this.autoReleaseTime = autoReleaseTime;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.String autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getCpuOptions}
         * @param cpuOptions the value to be set.
         * @return {@code this}
         */
        public Builder cpuOptions(com.aliyun.ros.cdk.core.IResolvable cpuOptions) {
            this.cpuOptions = cpuOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getCpuOptions}
         * @param cpuOptions the value to be set.
         * @return {@code this}
         */
        public Builder cpuOptions(com.aliyun.ros.cdk.ecs.RosInstanceGroup.CpuOptionsProperty cpuOptions) {
            this.cpuOptions = cpuOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getCreditSpecification}
         * @param creditSpecification the value to be set.
         * @return {@code this}
         */
        public Builder creditSpecification(java.lang.String creditSpecification) {
            this.creditSpecification = creditSpecification;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getCreditSpecification}
         * @param creditSpecification the value to be set.
         * @return {@code this}
         */
        public Builder creditSpecification(com.aliyun.ros.cdk.core.IResolvable creditSpecification) {
            this.creditSpecification = creditSpecification;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDedicatedHostId}
         * @param dedicatedHostId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostId(java.lang.String dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDedicatedHostId}
         * @param dedicatedHostId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostId) {
            this.dedicatedHostId = dedicatedHostId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDeletionProtection}
         * @param deletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDeletionProtection}
         * @param deletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDeploymentSetGroupNo}
         * @param deploymentSetGroupNo the value to be set.
         * @return {@code this}
         */
        public Builder deploymentSetGroupNo(java.lang.Number deploymentSetGroupNo) {
            this.deploymentSetGroupNo = deploymentSetGroupNo;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDeploymentSetGroupNo}
         * @param deploymentSetGroupNo the value to be set.
         * @return {@code this}
         */
        public Builder deploymentSetGroupNo(com.aliyun.ros.cdk.core.IResolvable deploymentSetGroupNo) {
            this.deploymentSetGroupNo = deploymentSetGroupNo;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDeploymentSetId}
         * @param deploymentSetId the value to be set.
         * @return {@code this}
         */
        public Builder deploymentSetId(java.lang.String deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDeploymentSetId}
         * @param deploymentSetId the value to be set.
         * @return {@code this}
         */
        public Builder deploymentSetId(com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.deploymentSetId = deploymentSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDiskMappings}
         * @param diskMappings the value to be set.
         * @return {@code this}
         */
        public Builder diskMappings(com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getDiskMappings}
         * @param diskMappings the value to be set.
         * @return {@code this}
         */
        public Builder diskMappings(java.util.List<? extends java.lang.Object> diskMappings) {
            this.diskMappings = diskMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getEniMappings}
         * @param eniMappings the value to be set.
         * @return {@code this}
         */
        public Builder eniMappings(com.aliyun.ros.cdk.core.IResolvable eniMappings) {
            this.eniMappings = eniMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getEniMappings}
         * @param eniMappings the value to be set.
         * @return {@code this}
         */
        public Builder eniMappings(java.util.List<? extends java.lang.Object> eniMappings) {
            this.eniMappings = eniMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getHostName}
         * @param hostName the value to be set.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getHostName}
         * @param hostName the value to be set.
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getHostNames}
         * @param hostNames the value to be set.
         * @return {@code this}
         */
        public Builder hostNames(com.aliyun.ros.cdk.core.IResolvable hostNames) {
            this.hostNames = hostNames;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getHostNames}
         * @param hostNames the value to be set.
         * @return {@code this}
         */
        public Builder hostNames(java.util.List<? extends java.lang.Object> hostNames) {
            this.hostNames = hostNames;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getHpcClusterId}
         * @param hpcClusterId the value to be set.
         * @return {@code this}
         */
        public Builder hpcClusterId(java.lang.String hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getHpcClusterId}
         * @param hpcClusterId the value to be set.
         * @return {@code this}
         */
        public Builder hpcClusterId(com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.hpcClusterId = hpcClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getHttpEndpoint}
         * @param httpEndpoint the value to be set.
         * @return {@code this}
         */
        public Builder httpEndpoint(java.lang.String httpEndpoint) {
            this.httpEndpoint = httpEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getHttpEndpoint}
         * @param httpEndpoint the value to be set.
         * @return {@code this}
         */
        public Builder httpEndpoint(com.aliyun.ros.cdk.core.IResolvable httpEndpoint) {
            this.httpEndpoint = httpEndpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getHttpTokens}
         * @param httpTokens the value to be set.
         * @return {@code this}
         */
        public Builder httpTokens(java.lang.String httpTokens) {
            this.httpTokens = httpTokens;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getHttpTokens}
         * @param httpTokens the value to be set.
         * @return {@code this}
         */
        public Builder httpTokens(com.aliyun.ros.cdk.core.IResolvable httpTokens) {
            this.httpTokens = httpTokens;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getImageFamily}
         * @param imageFamily the value to be set.
         * @return {@code this}
         */
        public Builder imageFamily(java.lang.String imageFamily) {
            this.imageFamily = imageFamily;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getImageFamily}
         * @param imageFamily the value to be set.
         * @return {@code this}
         */
        public Builder imageFamily(com.aliyun.ros.cdk.core.IResolvable imageFamily) {
            this.imageFamily = imageFamily;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getImageOptions}
         * @param imageOptions the value to be set.
         * @return {@code this}
         */
        public Builder imageOptions(com.aliyun.ros.cdk.core.IResolvable imageOptions) {
            this.imageOptions = imageOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getImageOptions}
         * @param imageOptions the value to be set.
         * @return {@code this}
         */
        public Builder imageOptions(com.aliyun.ros.cdk.ecs.RosInstanceGroup.ImageOptionsProperty imageOptions) {
            this.imageOptions = imageOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInstanceName}
         * @param instanceName the value to be set.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(java.lang.String internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInternetChargeType}
         * @param internetChargeType the value to be set.
         * @return {@code this}
         */
        public Builder internetChargeType(com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.internetChargeType = internetChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(java.lang.Number internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getInternetMaxBandwidthOut}
         * @param internetMaxBandwidthOut the value to be set.
         * @return {@code this}
         */
        public Builder internetMaxBandwidthOut(com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.internetMaxBandwidthOut = internetMaxBandwidthOut;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getIoOptimized}
         * @param ioOptimized the value to be set.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.String ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getIoOptimized}
         * @param ioOptimized the value to be set.
         * @return {@code this}
         */
        public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getIpv6Addresses}
         * @param ipv6Addresses the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Addresses(java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getIpv6Addresses}
         * @param ipv6Addresses the value to be set.
         * @return {@code this}
         */
        public Builder ipv6Addresses(com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.ipv6Addresses = ipv6Addresses;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getLaunchTemplateId}
         * @param launchTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateId(java.lang.String launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getLaunchTemplateId}
         * @param launchTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateId(com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getLaunchTemplateName}
         * @param launchTemplateName the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateName(java.lang.String launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getLaunchTemplateName}
         * @param launchTemplateName the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateName(com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.launchTemplateName = launchTemplateName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(java.lang.String launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(com.aliyun.ros.cdk.core.IResolvable launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getNetworkInterfaceQueueNumber}
         * @param networkInterfaceQueueNumber the value to be set.
         * @return {@code this}
         */
        public Builder networkInterfaceQueueNumber(java.lang.Number networkInterfaceQueueNumber) {
            this.networkInterfaceQueueNumber = networkInterfaceQueueNumber;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getNetworkInterfaceQueueNumber}
         * @param networkInterfaceQueueNumber the value to be set.
         * @return {@code this}
         */
        public Builder networkInterfaceQueueNumber(com.aliyun.ros.cdk.core.IResolvable networkInterfaceQueueNumber) {
            this.networkInterfaceQueueNumber = networkInterfaceQueueNumber;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getNetworkOptions}
         * @param networkOptions the value to be set.
         * @return {@code this}
         */
        public Builder networkOptions(com.aliyun.ros.cdk.core.IResolvable networkOptions) {
            this.networkOptions = networkOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getNetworkOptions}
         * @param networkOptions the value to be set.
         * @return {@code this}
         */
        public Builder networkOptions(com.aliyun.ros.cdk.ecs.RosInstanceGroup.NetworkOptionsProperty networkOptions) {
            this.networkOptions = networkOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getNetworkType}
         * @param networkType the value to be set.
         * @return {@code this}
         */
        public Builder networkType(java.lang.String networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getNetworkType}
         * @param networkType the value to be set.
         * @return {@code this}
         */
        public Builder networkType(com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.networkType = networkType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPasswordInherit}
         * @param passwordInherit the value to be set.
         * @return {@code this}
         */
        public Builder passwordInherit(java.lang.Boolean passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPasswordInherit}
         * @param passwordInherit the value to be set.
         * @return {@code this}
         */
        public Builder passwordInherit(com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.passwordInherit = passwordInherit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPrivatePoolOptions}
         * @param privatePoolOptions the value to be set.
         * @return {@code this}
         */
        public Builder privatePoolOptions(com.aliyun.ros.cdk.core.IResolvable privatePoolOptions) {
            this.privatePoolOptions = privatePoolOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getPrivatePoolOptions}
         * @param privatePoolOptions the value to be set.
         * @return {@code this}
         */
        public Builder privatePoolOptions(com.aliyun.ros.cdk.ecs.RosInstanceGroup.PrivatePoolOptionsProperty privatePoolOptions) {
            this.privatePoolOptions = privatePoolOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSchedulerOptions}
         * @param schedulerOptions the value to be set.
         * @return {@code this}
         */
        public Builder schedulerOptions(com.aliyun.ros.cdk.core.IResolvable schedulerOptions) {
            this.schedulerOptions = schedulerOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSchedulerOptions}
         * @param schedulerOptions the value to be set.
         * @return {@code this}
         */
        public Builder schedulerOptions(com.aliyun.ros.cdk.ecs.RosInstanceGroup.SchedulerOptionsProperty schedulerOptions) {
            this.schedulerOptions = schedulerOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSecurityEnhancementStrategy}
         * @param securityEnhancementStrategy the value to be set.
         * @return {@code this}
         */
        public Builder securityEnhancementStrategy(java.lang.String securityEnhancementStrategy) {
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSecurityEnhancementStrategy}
         * @param securityEnhancementStrategy the value to be set.
         * @return {@code this}
         */
        public Builder securityEnhancementStrategy(com.aliyun.ros.cdk.core.IResolvable securityEnhancementStrategy) {
            this.securityEnhancementStrategy = securityEnhancementStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSecurityGroupIds}
         * @param securityGroupIds the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSecurityGroupIds}
         * @param securityGroupIds the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSecurityOptions}
         * @param securityOptions the value to be set.
         * @return {@code this}
         */
        public Builder securityOptions(com.aliyun.ros.cdk.core.IResolvable securityOptions) {
            this.securityOptions = securityOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSecurityOptions}
         * @param securityOptions the value to be set.
         * @return {@code this}
         */
        public Builder securityOptions(com.aliyun.ros.cdk.ecs.RosInstanceGroup.SecurityOptionsProperty securityOptions) {
            this.securityOptions = securityOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSpotDuration}
         * @param spotDuration the value to be set.
         * @return {@code this}
         */
        public Builder spotDuration(java.lang.Number spotDuration) {
            this.spotDuration = spotDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSpotDuration}
         * @param spotDuration the value to be set.
         * @return {@code this}
         */
        public Builder spotDuration(com.aliyun.ros.cdk.core.IResolvable spotDuration) {
            this.spotDuration = spotDuration;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSpotInterruptionBehavior}
         * @param spotInterruptionBehavior the value to be set.
         * @return {@code this}
         */
        public Builder spotInterruptionBehavior(java.lang.String spotInterruptionBehavior) {
            this.spotInterruptionBehavior = spotInterruptionBehavior;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSpotInterruptionBehavior}
         * @param spotInterruptionBehavior the value to be set.
         * @return {@code this}
         */
        public Builder spotInterruptionBehavior(com.aliyun.ros.cdk.core.IResolvable spotInterruptionBehavior) {
            this.spotInterruptionBehavior = spotInterruptionBehavior;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.String spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getStorageSetId}
         * @param storageSetId the value to be set.
         * @return {@code this}
         */
        public Builder storageSetId(java.lang.String storageSetId) {
            this.storageSetId = storageSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getStorageSetId}
         * @param storageSetId the value to be set.
         * @return {@code this}
         */
        public Builder storageSetId(com.aliyun.ros.cdk.core.IResolvable storageSetId) {
            this.storageSetId = storageSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getStorageSetPartitionNumber}
         * @param storageSetPartitionNumber the value to be set.
         * @return {@code this}
         */
        public Builder storageSetPartitionNumber(java.lang.Number storageSetPartitionNumber) {
            this.storageSetPartitionNumber = storageSetPartitionNumber;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getStorageSetPartitionNumber}
         * @param storageSetPartitionNumber the value to be set.
         * @return {@code this}
         */
        public Builder storageSetPartitionNumber(com.aliyun.ros.cdk.core.IResolvable storageSetPartitionNumber) {
            this.storageSetPartitionNumber = storageSetPartitionNumber;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskAutoSnapshotPolicyId}
         * @param systemDiskAutoSnapshotPolicyId the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskAutoSnapshotPolicyId(java.lang.String systemDiskAutoSnapshotPolicyId) {
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskAutoSnapshotPolicyId}
         * @param systemDiskAutoSnapshotPolicyId the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskAutoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable systemDiskAutoSnapshotPolicyId) {
            this.systemDiskAutoSnapshotPolicyId = systemDiskAutoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskBurstingEnabled}
         * @param systemDiskBurstingEnabled the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskBurstingEnabled(java.lang.Boolean systemDiskBurstingEnabled) {
            this.systemDiskBurstingEnabled = systemDiskBurstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskBurstingEnabled}
         * @param systemDiskBurstingEnabled the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskBurstingEnabled(com.aliyun.ros.cdk.core.IResolvable systemDiskBurstingEnabled) {
            this.systemDiskBurstingEnabled = systemDiskBurstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskCategory}
         * @param systemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskCategory}
         * @param systemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskDescription}
         * @param systemDiskDescription the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskDescription(java.lang.String systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskDescription}
         * @param systemDiskDescription the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskDescription(com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.systemDiskDescription = systemDiskDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskDiskName}
         * @param systemDiskDiskName the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(java.lang.String systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskDiskName}
         * @param systemDiskDiskName the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskDiskName(com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.systemDiskDiskName = systemDiskDiskName;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskEncryptAlgorithm}
         * @param systemDiskEncryptAlgorithm the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskEncryptAlgorithm(java.lang.String systemDiskEncryptAlgorithm) {
            this.systemDiskEncryptAlgorithm = systemDiskEncryptAlgorithm;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskEncryptAlgorithm}
         * @param systemDiskEncryptAlgorithm the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskEncryptAlgorithm(com.aliyun.ros.cdk.core.IResolvable systemDiskEncryptAlgorithm) {
            this.systemDiskEncryptAlgorithm = systemDiskEncryptAlgorithm;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskEncrypted}
         * @param systemDiskEncrypted the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskEncrypted(java.lang.String systemDiskEncrypted) {
            this.systemDiskEncrypted = systemDiskEncrypted;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskEncrypted}
         * @param systemDiskEncrypted the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskEncrypted(com.aliyun.ros.cdk.core.IResolvable systemDiskEncrypted) {
            this.systemDiskEncrypted = systemDiskEncrypted;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskKmsKeyId}
         * @param systemDiskKmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskKmsKeyId(java.lang.String systemDiskKmsKeyId) {
            this.systemDiskKmsKeyId = systemDiskKmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskKmsKeyId}
         * @param systemDiskKmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskKmsKeyId(com.aliyun.ros.cdk.core.IResolvable systemDiskKmsKeyId) {
            this.systemDiskKmsKeyId = systemDiskKmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskPerformanceLevel}
         * @param systemDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskPerformanceLevel(java.lang.String systemDiskPerformanceLevel) {
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskPerformanceLevel}
         * @param systemDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
            this.systemDiskPerformanceLevel = systemDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskProvisionedIops}
         * @param systemDiskProvisionedIops the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskProvisionedIops(java.lang.Number systemDiskProvisionedIops) {
            this.systemDiskProvisionedIops = systemDiskProvisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskProvisionedIops}
         * @param systemDiskProvisionedIops the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskProvisionedIops(com.aliyun.ros.cdk.core.IResolvable systemDiskProvisionedIops) {
            this.systemDiskProvisionedIops = systemDiskProvisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskSize}
         * @param systemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskSize}
         * @param systemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskStorageClusterId}
         * @param systemDiskStorageClusterId the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskStorageClusterId(java.lang.String systemDiskStorageClusterId) {
            this.systemDiskStorageClusterId = systemDiskStorageClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getSystemDiskStorageClusterId}
         * @param systemDiskStorageClusterId the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskStorageClusterId(com.aliyun.ros.cdk.core.IResolvable systemDiskStorageClusterId) {
            this.systemDiskStorageClusterId = systemDiskStorageClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getTenancy}
         * @param tenancy the value to be set.
         * @return {@code this}
         */
        public Builder tenancy(java.lang.String tenancy) {
            this.tenancy = tenancy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getTenancy}
         * @param tenancy the value to be set.
         * @return {@code this}
         */
        public Builder tenancy(com.aliyun.ros.cdk.core.IResolvable tenancy) {
            this.tenancy = tenancy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getUniqueSuffix}
         * @param uniqueSuffix the value to be set.
         * @return {@code this}
         */
        public Builder uniqueSuffix(java.lang.Boolean uniqueSuffix) {
            this.uniqueSuffix = uniqueSuffix;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getUniqueSuffix}
         * @param uniqueSuffix the value to be set.
         * @return {@code this}
         */
        public Builder uniqueSuffix(com.aliyun.ros.cdk.core.IResolvable uniqueSuffix) {
            this.uniqueSuffix = uniqueSuffix;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getUpdatePolicy}
         * @param updatePolicy the value to be set.
         * @return {@code this}
         */
        public Builder updatePolicy(java.lang.String updatePolicy) {
            this.updatePolicy = updatePolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getUpdatePolicy}
         * @param updatePolicy the value to be set.
         * @return {@code this}
         */
        public Builder updatePolicy(com.aliyun.ros.cdk.core.IResolvable updatePolicy) {
            this.updatePolicy = updatePolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getUseAdditionalService}
         * @param useAdditionalService the value to be set.
         * @return {@code this}
         */
        public Builder useAdditionalService(java.lang.Boolean useAdditionalService) {
            this.useAdditionalService = useAdditionalService;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getUseAdditionalService}
         * @param useAdditionalService the value to be set.
         * @return {@code this}
         */
        public Builder useAdditionalService(com.aliyun.ros.cdk.core.IResolvable useAdditionalService) {
            this.useAdditionalService = useAdditionalService;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(java.lang.String userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getUserData}
         * @param userData the value to be set.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getZoneIds}
         * @param zoneIds the value to be set.
         * @return {@code this}
         */
        public Builder zoneIds(com.aliyun.ros.cdk.core.IResolvable zoneIds) {
            this.zoneIds = zoneIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstanceGroupProps#getZoneIds}
         * @param zoneIds the value to be set.
         * @return {@code this}
         */
        public Builder zoneIds(java.util.List<? extends java.lang.Object> zoneIds) {
            this.zoneIds = zoneIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstanceGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstanceGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstanceGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstanceGroupProps {
        private final java.lang.Object instanceType;
        private final java.lang.Object maxAmount;
        private final java.lang.Object affinity;
        private final java.lang.Object allocatePublicIp;
        private final java.lang.Object autoReleaseTime;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object cpuOptions;
        private final java.lang.Object creditSpecification;
        private final java.lang.Object dedicatedHostId;
        private final java.lang.Object deletionForce;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object deploymentSetGroupNo;
        private final java.lang.Object deploymentSetId;
        private final java.lang.Object description;
        private final java.lang.Object diskMappings;
        private final java.lang.Object eniMappings;
        private final java.lang.Object hostName;
        private final java.lang.Object hostNames;
        private final java.lang.Object hpcClusterId;
        private final java.lang.Object httpEndpoint;
        private final java.lang.Object httpTokens;
        private final java.lang.Object imageFamily;
        private final java.lang.Object imageId;
        private final java.lang.Object imageOptions;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object instanceName;
        private final java.lang.Object internetChargeType;
        private final java.lang.Object internetMaxBandwidthOut;
        private final java.lang.Object ioOptimized;
        private final java.lang.Object ipv6AddressCount;
        private final java.lang.Object ipv6Addresses;
        private final java.lang.Object keyPairName;
        private final java.lang.Object launchTemplateId;
        private final java.lang.Object launchTemplateName;
        private final java.lang.Object launchTemplateVersion;
        private final java.lang.Object networkInterfaceQueueNumber;
        private final java.lang.Object networkOptions;
        private final java.lang.Object networkType;
        private final java.lang.Object password;
        private final java.lang.Object passwordInherit;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object privatePoolOptions;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object schedulerOptions;
        private final java.lang.Object securityEnhancementStrategy;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityGroupIds;
        private final java.lang.Object securityOptions;
        private final java.lang.Object spotDuration;
        private final java.lang.Object spotInterruptionBehavior;
        private final java.lang.Object spotPriceLimit;
        private final java.lang.Object spotStrategy;
        private final java.lang.Object storageSetId;
        private final java.lang.Object storageSetPartitionNumber;
        private final java.lang.Object systemDiskAutoSnapshotPolicyId;
        private final java.lang.Object systemDiskBurstingEnabled;
        private final java.lang.Object systemDiskCategory;
        private final java.lang.Object systemDiskDescription;
        private final java.lang.Object systemDiskDiskName;
        private final java.lang.Object systemDiskEncryptAlgorithm;
        private final java.lang.Object systemDiskEncrypted;
        private final java.lang.Object systemDiskKmsKeyId;
        private final java.lang.Object systemDiskPerformanceLevel;
        private final java.lang.Object systemDiskProvisionedIops;
        private final java.lang.Object systemDiskSize;
        private final java.lang.Object systemDiskStorageClusterId;
        private final java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty> tags;
        private final java.lang.Object tenancy;
        private final java.lang.Object uniqueSuffix;
        private final java.lang.Object updatePolicy;
        private final java.lang.Object useAdditionalService;
        private final java.lang.Object userData;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object zoneIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxAmount = software.amazon.jsii.Kernel.get(this, "maxAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.affinity = software.amazon.jsii.Kernel.get(this, "affinity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocatePublicIp = software.amazon.jsii.Kernel.get(this, "allocatePublicIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoReleaseTime = software.amazon.jsii.Kernel.get(this, "autoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpuOptions = software.amazon.jsii.Kernel.get(this, "cpuOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.creditSpecification = software.amazon.jsii.Kernel.get(this, "creditSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostId = software.amazon.jsii.Kernel.get(this, "dedicatedHostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploymentSetGroupNo = software.amazon.jsii.Kernel.get(this, "deploymentSetGroupNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploymentSetId = software.amazon.jsii.Kernel.get(this, "deploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskMappings = software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eniMappings = software.amazon.jsii.Kernel.get(this, "eniMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostNames = software.amazon.jsii.Kernel.get(this, "hostNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hpcClusterId = software.amazon.jsii.Kernel.get(this, "hpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpEndpoint = software.amazon.jsii.Kernel.get(this, "httpEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpTokens = software.amazon.jsii.Kernel.get(this, "httpTokens", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageFamily = software.amazon.jsii.Kernel.get(this, "imageFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageOptions = software.amazon.jsii.Kernel.get(this, "imageOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetChargeType = software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.internetMaxBandwidthOut = software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6Addresses = software.amazon.jsii.Kernel.get(this, "ipv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateId = software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateName = software.amazon.jsii.Kernel.get(this, "launchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateVersion = software.amazon.jsii.Kernel.get(this, "launchTemplateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkInterfaceQueueNumber = software.amazon.jsii.Kernel.get(this, "networkInterfaceQueueNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkOptions = software.amazon.jsii.Kernel.get(this, "networkOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkType = software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passwordInherit = software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privatePoolOptions = software.amazon.jsii.Kernel.get(this, "privatePoolOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.schedulerOptions = software.amazon.jsii.Kernel.get(this, "schedulerOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityEnhancementStrategy = software.amazon.jsii.Kernel.get(this, "securityEnhancementStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityOptions = software.amazon.jsii.Kernel.get(this, "securityOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotDuration = software.amazon.jsii.Kernel.get(this, "spotDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotInterruptionBehavior = software.amazon.jsii.Kernel.get(this, "spotInterruptionBehavior", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSetId = software.amazon.jsii.Kernel.get(this, "storageSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSetPartitionNumber = software.amazon.jsii.Kernel.get(this, "storageSetPartitionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskAutoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "systemDiskAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskBurstingEnabled = software.amazon.jsii.Kernel.get(this, "systemDiskBurstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDescription = software.amazon.jsii.Kernel.get(this, "systemDiskDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskDiskName = software.amazon.jsii.Kernel.get(this, "systemDiskDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskEncryptAlgorithm = software.amazon.jsii.Kernel.get(this, "systemDiskEncryptAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskEncrypted = software.amazon.jsii.Kernel.get(this, "systemDiskEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskKmsKeyId = software.amazon.jsii.Kernel.get(this, "systemDiskKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "systemDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskProvisionedIops = software.amazon.jsii.Kernel.get(this, "systemDiskProvisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskStorageClusterId = software.amazon.jsii.Kernel.get(this, "systemDiskStorageClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty.class)));
            this.tenancy = software.amazon.jsii.Kernel.get(this, "tenancy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uniqueSuffix = software.amazon.jsii.Kernel.get(this, "uniqueSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.updatePolicy = software.amazon.jsii.Kernel.get(this, "updatePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.useAdditionalService = software.amazon.jsii.Kernel.get(this, "useAdditionalService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneIds = software.amazon.jsii.Kernel.get(this, "zoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
            this.maxAmount = java.util.Objects.requireNonNull(builder.maxAmount, "maxAmount is required");
            this.affinity = builder.affinity;
            this.allocatePublicIp = builder.allocatePublicIp;
            this.autoReleaseTime = builder.autoReleaseTime;
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.cpuOptions = builder.cpuOptions;
            this.creditSpecification = builder.creditSpecification;
            this.dedicatedHostId = builder.dedicatedHostId;
            this.deletionForce = builder.deletionForce;
            this.deletionProtection = builder.deletionProtection;
            this.deploymentSetGroupNo = builder.deploymentSetGroupNo;
            this.deploymentSetId = builder.deploymentSetId;
            this.description = builder.description;
            this.diskMappings = builder.diskMappings;
            this.eniMappings = builder.eniMappings;
            this.hostName = builder.hostName;
            this.hostNames = builder.hostNames;
            this.hpcClusterId = builder.hpcClusterId;
            this.httpEndpoint = builder.httpEndpoint;
            this.httpTokens = builder.httpTokens;
            this.imageFamily = builder.imageFamily;
            this.imageId = builder.imageId;
            this.imageOptions = builder.imageOptions;
            this.instanceChargeType = builder.instanceChargeType;
            this.instanceName = builder.instanceName;
            this.internetChargeType = builder.internetChargeType;
            this.internetMaxBandwidthOut = builder.internetMaxBandwidthOut;
            this.ioOptimized = builder.ioOptimized;
            this.ipv6AddressCount = builder.ipv6AddressCount;
            this.ipv6Addresses = builder.ipv6Addresses;
            this.keyPairName = builder.keyPairName;
            this.launchTemplateId = builder.launchTemplateId;
            this.launchTemplateName = builder.launchTemplateName;
            this.launchTemplateVersion = builder.launchTemplateVersion;
            this.networkInterfaceQueueNumber = builder.networkInterfaceQueueNumber;
            this.networkOptions = builder.networkOptions;
            this.networkType = builder.networkType;
            this.password = builder.password;
            this.passwordInherit = builder.passwordInherit;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.privateIpAddress = builder.privateIpAddress;
            this.privatePoolOptions = builder.privatePoolOptions;
            this.ramRoleName = builder.ramRoleName;
            this.resourceGroupId = builder.resourceGroupId;
            this.schedulerOptions = builder.schedulerOptions;
            this.securityEnhancementStrategy = builder.securityEnhancementStrategy;
            this.securityGroupId = builder.securityGroupId;
            this.securityGroupIds = builder.securityGroupIds;
            this.securityOptions = builder.securityOptions;
            this.spotDuration = builder.spotDuration;
            this.spotInterruptionBehavior = builder.spotInterruptionBehavior;
            this.spotPriceLimit = builder.spotPriceLimit;
            this.spotStrategy = builder.spotStrategy;
            this.storageSetId = builder.storageSetId;
            this.storageSetPartitionNumber = builder.storageSetPartitionNumber;
            this.systemDiskAutoSnapshotPolicyId = builder.systemDiskAutoSnapshotPolicyId;
            this.systemDiskBurstingEnabled = builder.systemDiskBurstingEnabled;
            this.systemDiskCategory = builder.systemDiskCategory;
            this.systemDiskDescription = builder.systemDiskDescription;
            this.systemDiskDiskName = builder.systemDiskDiskName;
            this.systemDiskEncryptAlgorithm = builder.systemDiskEncryptAlgorithm;
            this.systemDiskEncrypted = builder.systemDiskEncrypted;
            this.systemDiskKmsKeyId = builder.systemDiskKmsKeyId;
            this.systemDiskPerformanceLevel = builder.systemDiskPerformanceLevel;
            this.systemDiskProvisionedIops = builder.systemDiskProvisionedIops;
            this.systemDiskSize = builder.systemDiskSize;
            this.systemDiskStorageClusterId = builder.systemDiskStorageClusterId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty>)builder.tags;
            this.tenancy = builder.tenancy;
            this.uniqueSuffix = builder.uniqueSuffix;
            this.updatePolicy = builder.updatePolicy;
            this.useAdditionalService = builder.useAdditionalService;
            this.userData = builder.userData;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
            this.zoneIds = builder.zoneIds;
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
        public final java.lang.Object getAffinity() {
            return this.affinity;
        }

        @Override
        public final java.lang.Object getAllocatePublicIp() {
            return this.allocatePublicIp;
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
        public final java.lang.Object getCpuOptions() {
            return this.cpuOptions;
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
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getDeploymentSetGroupNo() {
            return this.deploymentSetGroupNo;
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
        public final java.lang.Object getHostName() {
            return this.hostName;
        }

        @Override
        public final java.lang.Object getHostNames() {
            return this.hostNames;
        }

        @Override
        public final java.lang.Object getHpcClusterId() {
            return this.hpcClusterId;
        }

        @Override
        public final java.lang.Object getHttpEndpoint() {
            return this.httpEndpoint;
        }

        @Override
        public final java.lang.Object getHttpTokens() {
            return this.httpTokens;
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
        public final java.lang.Object getImageOptions() {
            return this.imageOptions;
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
        public final java.lang.Object getNetworkInterfaceQueueNumber() {
            return this.networkInterfaceQueueNumber;
        }

        @Override
        public final java.lang.Object getNetworkOptions() {
            return this.networkOptions;
        }

        @Override
        public final java.lang.Object getNetworkType() {
            return this.networkType;
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
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
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
        public final java.lang.Object getSchedulerOptions() {
            return this.schedulerOptions;
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
        public final java.lang.Object getSecurityOptions() {
            return this.securityOptions;
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
        public final java.lang.Object getSpotStrategy() {
            return this.spotStrategy;
        }

        @Override
        public final java.lang.Object getStorageSetId() {
            return this.storageSetId;
        }

        @Override
        public final java.lang.Object getStorageSetPartitionNumber() {
            return this.storageSetPartitionNumber;
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
        public final java.lang.Object getSystemDiskStorageClusterId() {
            return this.systemDiskStorageClusterId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTenancy() {
            return this.tenancy;
        }

        @Override
        public final java.lang.Object getUniqueSuffix() {
            return this.uniqueSuffix;
        }

        @Override
        public final java.lang.Object getUpdatePolicy() {
            return this.updatePolicy;
        }

        @Override
        public final java.lang.Object getUseAdditionalService() {
            return this.useAdditionalService;
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
        public final java.lang.Object getZoneIds() {
            return this.zoneIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("maxAmount", om.valueToTree(this.getMaxAmount()));
            if (this.getAffinity() != null) {
                data.set("affinity", om.valueToTree(this.getAffinity()));
            }
            if (this.getAllocatePublicIp() != null) {
                data.set("allocatePublicIp", om.valueToTree(this.getAllocatePublicIp()));
            }
            if (this.getAutoReleaseTime() != null) {
                data.set("autoReleaseTime", om.valueToTree(this.getAutoReleaseTime()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getCpuOptions() != null) {
                data.set("cpuOptions", om.valueToTree(this.getCpuOptions()));
            }
            if (this.getCreditSpecification() != null) {
                data.set("creditSpecification", om.valueToTree(this.getCreditSpecification()));
            }
            if (this.getDedicatedHostId() != null) {
                data.set("dedicatedHostId", om.valueToTree(this.getDedicatedHostId()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getDeploymentSetGroupNo() != null) {
                data.set("deploymentSetGroupNo", om.valueToTree(this.getDeploymentSetGroupNo()));
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
            if (this.getHostName() != null) {
                data.set("hostName", om.valueToTree(this.getHostName()));
            }
            if (this.getHostNames() != null) {
                data.set("hostNames", om.valueToTree(this.getHostNames()));
            }
            if (this.getHpcClusterId() != null) {
                data.set("hpcClusterId", om.valueToTree(this.getHpcClusterId()));
            }
            if (this.getHttpEndpoint() != null) {
                data.set("httpEndpoint", om.valueToTree(this.getHttpEndpoint()));
            }
            if (this.getHttpTokens() != null) {
                data.set("httpTokens", om.valueToTree(this.getHttpTokens()));
            }
            if (this.getImageFamily() != null) {
                data.set("imageFamily", om.valueToTree(this.getImageFamily()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getImageOptions() != null) {
                data.set("imageOptions", om.valueToTree(this.getImageOptions()));
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
            if (this.getInternetMaxBandwidthOut() != null) {
                data.set("internetMaxBandwidthOut", om.valueToTree(this.getInternetMaxBandwidthOut()));
            }
            if (this.getIoOptimized() != null) {
                data.set("ioOptimized", om.valueToTree(this.getIoOptimized()));
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
            if (this.getNetworkInterfaceQueueNumber() != null) {
                data.set("networkInterfaceQueueNumber", om.valueToTree(this.getNetworkInterfaceQueueNumber()));
            }
            if (this.getNetworkOptions() != null) {
                data.set("networkOptions", om.valueToTree(this.getNetworkOptions()));
            }
            if (this.getNetworkType() != null) {
                data.set("networkType", om.valueToTree(this.getNetworkType()));
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
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
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
            if (this.getSchedulerOptions() != null) {
                data.set("schedulerOptions", om.valueToTree(this.getSchedulerOptions()));
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
            if (this.getSecurityOptions() != null) {
                data.set("securityOptions", om.valueToTree(this.getSecurityOptions()));
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
            if (this.getSpotStrategy() != null) {
                data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
            }
            if (this.getStorageSetId() != null) {
                data.set("storageSetId", om.valueToTree(this.getStorageSetId()));
            }
            if (this.getStorageSetPartitionNumber() != null) {
                data.set("storageSetPartitionNumber", om.valueToTree(this.getStorageSetPartitionNumber()));
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
            if (this.getSystemDiskPerformanceLevel() != null) {
                data.set("systemDiskPerformanceLevel", om.valueToTree(this.getSystemDiskPerformanceLevel()));
            }
            if (this.getSystemDiskProvisionedIops() != null) {
                data.set("systemDiskProvisionedIops", om.valueToTree(this.getSystemDiskProvisionedIops()));
            }
            if (this.getSystemDiskSize() != null) {
                data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
            }
            if (this.getSystemDiskStorageClusterId() != null) {
                data.set("systemDiskStorageClusterId", om.valueToTree(this.getSystemDiskStorageClusterId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTenancy() != null) {
                data.set("tenancy", om.valueToTree(this.getTenancy()));
            }
            if (this.getUniqueSuffix() != null) {
                data.set("uniqueSuffix", om.valueToTree(this.getUniqueSuffix()));
            }
            if (this.getUpdatePolicy() != null) {
                data.set("updatePolicy", om.valueToTree(this.getUpdatePolicy()));
            }
            if (this.getUseAdditionalService() != null) {
                data.set("useAdditionalService", om.valueToTree(this.getUseAdditionalService()));
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
            if (this.getZoneIds() != null) {
                data.set("zoneIds", om.valueToTree(this.getZoneIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInstanceGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstanceGroupProps.Jsii$Proxy that = (RosInstanceGroupProps.Jsii$Proxy) o;

            if (!instanceType.equals(that.instanceType)) return false;
            if (!maxAmount.equals(that.maxAmount)) return false;
            if (this.affinity != null ? !this.affinity.equals(that.affinity) : that.affinity != null) return false;
            if (this.allocatePublicIp != null ? !this.allocatePublicIp.equals(that.allocatePublicIp) : that.allocatePublicIp != null) return false;
            if (this.autoReleaseTime != null ? !this.autoReleaseTime.equals(that.autoReleaseTime) : that.autoReleaseTime != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.cpuOptions != null ? !this.cpuOptions.equals(that.cpuOptions) : that.cpuOptions != null) return false;
            if (this.creditSpecification != null ? !this.creditSpecification.equals(that.creditSpecification) : that.creditSpecification != null) return false;
            if (this.dedicatedHostId != null ? !this.dedicatedHostId.equals(that.dedicatedHostId) : that.dedicatedHostId != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.deploymentSetGroupNo != null ? !this.deploymentSetGroupNo.equals(that.deploymentSetGroupNo) : that.deploymentSetGroupNo != null) return false;
            if (this.deploymentSetId != null ? !this.deploymentSetId.equals(that.deploymentSetId) : that.deploymentSetId != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskMappings != null ? !this.diskMappings.equals(that.diskMappings) : that.diskMappings != null) return false;
            if (this.eniMappings != null ? !this.eniMappings.equals(that.eniMappings) : that.eniMappings != null) return false;
            if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
            if (this.hostNames != null ? !this.hostNames.equals(that.hostNames) : that.hostNames != null) return false;
            if (this.hpcClusterId != null ? !this.hpcClusterId.equals(that.hpcClusterId) : that.hpcClusterId != null) return false;
            if (this.httpEndpoint != null ? !this.httpEndpoint.equals(that.httpEndpoint) : that.httpEndpoint != null) return false;
            if (this.httpTokens != null ? !this.httpTokens.equals(that.httpTokens) : that.httpTokens != null) return false;
            if (this.imageFamily != null ? !this.imageFamily.equals(that.imageFamily) : that.imageFamily != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.imageOptions != null ? !this.imageOptions.equals(that.imageOptions) : that.imageOptions != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
            if (this.internetChargeType != null ? !this.internetChargeType.equals(that.internetChargeType) : that.internetChargeType != null) return false;
            if (this.internetMaxBandwidthOut != null ? !this.internetMaxBandwidthOut.equals(that.internetMaxBandwidthOut) : that.internetMaxBandwidthOut != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
            if (this.ipv6Addresses != null ? !this.ipv6Addresses.equals(that.ipv6Addresses) : that.ipv6Addresses != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.launchTemplateId != null ? !this.launchTemplateId.equals(that.launchTemplateId) : that.launchTemplateId != null) return false;
            if (this.launchTemplateName != null ? !this.launchTemplateName.equals(that.launchTemplateName) : that.launchTemplateName != null) return false;
            if (this.launchTemplateVersion != null ? !this.launchTemplateVersion.equals(that.launchTemplateVersion) : that.launchTemplateVersion != null) return false;
            if (this.networkInterfaceQueueNumber != null ? !this.networkInterfaceQueueNumber.equals(that.networkInterfaceQueueNumber) : that.networkInterfaceQueueNumber != null) return false;
            if (this.networkOptions != null ? !this.networkOptions.equals(that.networkOptions) : that.networkOptions != null) return false;
            if (this.networkType != null ? !this.networkType.equals(that.networkType) : that.networkType != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.passwordInherit != null ? !this.passwordInherit.equals(that.passwordInherit) : that.passwordInherit != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.privatePoolOptions != null ? !this.privatePoolOptions.equals(that.privatePoolOptions) : that.privatePoolOptions != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.schedulerOptions != null ? !this.schedulerOptions.equals(that.schedulerOptions) : that.schedulerOptions != null) return false;
            if (this.securityEnhancementStrategy != null ? !this.securityEnhancementStrategy.equals(that.securityEnhancementStrategy) : that.securityEnhancementStrategy != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
            if (this.securityOptions != null ? !this.securityOptions.equals(that.securityOptions) : that.securityOptions != null) return false;
            if (this.spotDuration != null ? !this.spotDuration.equals(that.spotDuration) : that.spotDuration != null) return false;
            if (this.spotInterruptionBehavior != null ? !this.spotInterruptionBehavior.equals(that.spotInterruptionBehavior) : that.spotInterruptionBehavior != null) return false;
            if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.storageSetId != null ? !this.storageSetId.equals(that.storageSetId) : that.storageSetId != null) return false;
            if (this.storageSetPartitionNumber != null ? !this.storageSetPartitionNumber.equals(that.storageSetPartitionNumber) : that.storageSetPartitionNumber != null) return false;
            if (this.systemDiskAutoSnapshotPolicyId != null ? !this.systemDiskAutoSnapshotPolicyId.equals(that.systemDiskAutoSnapshotPolicyId) : that.systemDiskAutoSnapshotPolicyId != null) return false;
            if (this.systemDiskBurstingEnabled != null ? !this.systemDiskBurstingEnabled.equals(that.systemDiskBurstingEnabled) : that.systemDiskBurstingEnabled != null) return false;
            if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
            if (this.systemDiskDescription != null ? !this.systemDiskDescription.equals(that.systemDiskDescription) : that.systemDiskDescription != null) return false;
            if (this.systemDiskDiskName != null ? !this.systemDiskDiskName.equals(that.systemDiskDiskName) : that.systemDiskDiskName != null) return false;
            if (this.systemDiskEncryptAlgorithm != null ? !this.systemDiskEncryptAlgorithm.equals(that.systemDiskEncryptAlgorithm) : that.systemDiskEncryptAlgorithm != null) return false;
            if (this.systemDiskEncrypted != null ? !this.systemDiskEncrypted.equals(that.systemDiskEncrypted) : that.systemDiskEncrypted != null) return false;
            if (this.systemDiskKmsKeyId != null ? !this.systemDiskKmsKeyId.equals(that.systemDiskKmsKeyId) : that.systemDiskKmsKeyId != null) return false;
            if (this.systemDiskPerformanceLevel != null ? !this.systemDiskPerformanceLevel.equals(that.systemDiskPerformanceLevel) : that.systemDiskPerformanceLevel != null) return false;
            if (this.systemDiskProvisionedIops != null ? !this.systemDiskProvisionedIops.equals(that.systemDiskProvisionedIops) : that.systemDiskProvisionedIops != null) return false;
            if (this.systemDiskSize != null ? !this.systemDiskSize.equals(that.systemDiskSize) : that.systemDiskSize != null) return false;
            if (this.systemDiskStorageClusterId != null ? !this.systemDiskStorageClusterId.equals(that.systemDiskStorageClusterId) : that.systemDiskStorageClusterId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.tenancy != null ? !this.tenancy.equals(that.tenancy) : that.tenancy != null) return false;
            if (this.uniqueSuffix != null ? !this.uniqueSuffix.equals(that.uniqueSuffix) : that.uniqueSuffix != null) return false;
            if (this.updatePolicy != null ? !this.updatePolicy.equals(that.updatePolicy) : that.updatePolicy != null) return false;
            if (this.useAdditionalService != null ? !this.useAdditionalService.equals(that.useAdditionalService) : that.useAdditionalService != null) return false;
            if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            if (this.zoneId != null ? !this.zoneId.equals(that.zoneId) : that.zoneId != null) return false;
            return this.zoneIds != null ? this.zoneIds.equals(that.zoneIds) : that.zoneIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceType.hashCode();
            result = 31 * result + (this.maxAmount.hashCode());
            result = 31 * result + (this.affinity != null ? this.affinity.hashCode() : 0);
            result = 31 * result + (this.allocatePublicIp != null ? this.allocatePublicIp.hashCode() : 0);
            result = 31 * result + (this.autoReleaseTime != null ? this.autoReleaseTime.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.cpuOptions != null ? this.cpuOptions.hashCode() : 0);
            result = 31 * result + (this.creditSpecification != null ? this.creditSpecification.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostId != null ? this.dedicatedHostId.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.deploymentSetGroupNo != null ? this.deploymentSetGroupNo.hashCode() : 0);
            result = 31 * result + (this.deploymentSetId != null ? this.deploymentSetId.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskMappings != null ? this.diskMappings.hashCode() : 0);
            result = 31 * result + (this.eniMappings != null ? this.eniMappings.hashCode() : 0);
            result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
            result = 31 * result + (this.hostNames != null ? this.hostNames.hashCode() : 0);
            result = 31 * result + (this.hpcClusterId != null ? this.hpcClusterId.hashCode() : 0);
            result = 31 * result + (this.httpEndpoint != null ? this.httpEndpoint.hashCode() : 0);
            result = 31 * result + (this.httpTokens != null ? this.httpTokens.hashCode() : 0);
            result = 31 * result + (this.imageFamily != null ? this.imageFamily.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.imageOptions != null ? this.imageOptions.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
            result = 31 * result + (this.internetChargeType != null ? this.internetChargeType.hashCode() : 0);
            result = 31 * result + (this.internetMaxBandwidthOut != null ? this.internetMaxBandwidthOut.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
            result = 31 * result + (this.ipv6Addresses != null ? this.ipv6Addresses.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.launchTemplateId != null ? this.launchTemplateId.hashCode() : 0);
            result = 31 * result + (this.launchTemplateName != null ? this.launchTemplateName.hashCode() : 0);
            result = 31 * result + (this.launchTemplateVersion != null ? this.launchTemplateVersion.hashCode() : 0);
            result = 31 * result + (this.networkInterfaceQueueNumber != null ? this.networkInterfaceQueueNumber.hashCode() : 0);
            result = 31 * result + (this.networkOptions != null ? this.networkOptions.hashCode() : 0);
            result = 31 * result + (this.networkType != null ? this.networkType.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.passwordInherit != null ? this.passwordInherit.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.privatePoolOptions != null ? this.privatePoolOptions.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.schedulerOptions != null ? this.schedulerOptions.hashCode() : 0);
            result = 31 * result + (this.securityEnhancementStrategy != null ? this.securityEnhancementStrategy.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
            result = 31 * result + (this.securityOptions != null ? this.securityOptions.hashCode() : 0);
            result = 31 * result + (this.spotDuration != null ? this.spotDuration.hashCode() : 0);
            result = 31 * result + (this.spotInterruptionBehavior != null ? this.spotInterruptionBehavior.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.storageSetId != null ? this.storageSetId.hashCode() : 0);
            result = 31 * result + (this.storageSetPartitionNumber != null ? this.storageSetPartitionNumber.hashCode() : 0);
            result = 31 * result + (this.systemDiskAutoSnapshotPolicyId != null ? this.systemDiskAutoSnapshotPolicyId.hashCode() : 0);
            result = 31 * result + (this.systemDiskBurstingEnabled != null ? this.systemDiskBurstingEnabled.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.systemDiskDescription != null ? this.systemDiskDescription.hashCode() : 0);
            result = 31 * result + (this.systemDiskDiskName != null ? this.systemDiskDiskName.hashCode() : 0);
            result = 31 * result + (this.systemDiskEncryptAlgorithm != null ? this.systemDiskEncryptAlgorithm.hashCode() : 0);
            result = 31 * result + (this.systemDiskEncrypted != null ? this.systemDiskEncrypted.hashCode() : 0);
            result = 31 * result + (this.systemDiskKmsKeyId != null ? this.systemDiskKmsKeyId.hashCode() : 0);
            result = 31 * result + (this.systemDiskPerformanceLevel != null ? this.systemDiskPerformanceLevel.hashCode() : 0);
            result = 31 * result + (this.systemDiskProvisionedIops != null ? this.systemDiskProvisionedIops.hashCode() : 0);
            result = 31 * result + (this.systemDiskSize != null ? this.systemDiskSize.hashCode() : 0);
            result = 31 * result + (this.systemDiskStorageClusterId != null ? this.systemDiskStorageClusterId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.tenancy != null ? this.tenancy.hashCode() : 0);
            result = 31 * result + (this.uniqueSuffix != null ? this.uniqueSuffix.hashCode() : 0);
            result = 31 * result + (this.updatePolicy != null ? this.updatePolicy.hashCode() : 0);
            result = 31 * result + (this.useAdditionalService != null ? this.useAdditionalService.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            result = 31 * result + (this.zoneIds != null ? this.zoneIds.hashCode() : 0);
            return result;
        }
    }
}
