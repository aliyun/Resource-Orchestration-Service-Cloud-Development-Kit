package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>RosScalingGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.710Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScalingGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosScalingGroupProps.Jsii$Proxy.class)
public interface RosScalingGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMaxSize();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMinSize();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocationStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAzBalance() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompensateWithOnDemand() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCustomPolicyArn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultCooldown() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDesiredCapacity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupDeletionProtection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateOverrides() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxInstanceLifetime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiAzPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNotificationConfigurations() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOnDemandBaseCapacity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOnDemandPercentageAboveBaseCapacity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtectedInstances() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemovalPolicys() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingGroupName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerGroups() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotAllocationStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotInstancePools() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotInstanceRemedy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStandbyInstances() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosScalingGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosScalingGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosScalingGroupProps> {
        java.lang.Object maxSize;
        java.lang.Object minSize;
        java.lang.Object allocationStrategy;
        java.lang.Object azBalance;
        java.lang.Object compensateWithOnDemand;
        java.lang.Object containerGroupId;
        java.lang.Object customPolicyArn;
        java.lang.Object dbInstanceIds;
        java.lang.Object defaultCooldown;
        java.lang.Object desiredCapacity;
        java.lang.Object groupDeletionProtection;
        java.lang.Object groupType;
        java.lang.Object healthCheckType;
        java.lang.Object instanceId;
        java.lang.Object launchTemplateId;
        java.lang.Object launchTemplateOverrides;
        java.lang.Object launchTemplateVersion;
        java.lang.Object loadBalancerIds;
        java.lang.Object maxInstanceLifetime;
        java.lang.Object multiAzPolicy;
        java.lang.Object notificationConfigurations;
        java.lang.Object onDemandBaseCapacity;
        java.lang.Object onDemandPercentageAboveBaseCapacity;
        java.lang.Object protectedInstances;
        java.lang.Object removalPolicys;
        java.lang.Object resourceGroupId;
        java.lang.Object scalingGroupName;
        java.lang.Object scalingPolicy;
        java.lang.Object serverGroups;
        java.lang.Object spotAllocationStrategy;
        java.lang.Object spotInstancePools;
        java.lang.Object spotInstanceRemedy;
        java.lang.Object standbyInstances;
        java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> tags;
        java.lang.Object vSwitchId;
        java.lang.Object vSwitchIds;

        /**
         * Sets the value of {@link RosScalingGroupProps#getMaxSize}
         * @param maxSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder maxSize(java.lang.Number maxSize) {
            this.maxSize = maxSize;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getMaxSize}
         * @param maxSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder maxSize(com.aliyun.ros.cdk.core.IResolvable maxSize) {
            this.maxSize = maxSize;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getMinSize}
         * @param minSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder minSize(java.lang.Number minSize) {
            this.minSize = minSize;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getMinSize}
         * @param minSize the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder minSize(com.aliyun.ros.cdk.core.IResolvable minSize) {
            this.minSize = minSize;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getAllocationStrategy}
         * @param allocationStrategy the value to be set.
         * @return {@code this}
         */
        public Builder allocationStrategy(java.lang.String allocationStrategy) {
            this.allocationStrategy = allocationStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getAllocationStrategy}
         * @param allocationStrategy the value to be set.
         * @return {@code this}
         */
        public Builder allocationStrategy(com.aliyun.ros.cdk.core.IResolvable allocationStrategy) {
            this.allocationStrategy = allocationStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getAzBalance}
         * @param azBalance the value to be set.
         * @return {@code this}
         */
        public Builder azBalance(java.lang.Boolean azBalance) {
            this.azBalance = azBalance;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getAzBalance}
         * @param azBalance the value to be set.
         * @return {@code this}
         */
        public Builder azBalance(com.aliyun.ros.cdk.core.IResolvable azBalance) {
            this.azBalance = azBalance;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getCompensateWithOnDemand}
         * @param compensateWithOnDemand the value to be set.
         * @return {@code this}
         */
        public Builder compensateWithOnDemand(java.lang.Boolean compensateWithOnDemand) {
            this.compensateWithOnDemand = compensateWithOnDemand;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getCompensateWithOnDemand}
         * @param compensateWithOnDemand the value to be set.
         * @return {@code this}
         */
        public Builder compensateWithOnDemand(com.aliyun.ros.cdk.core.IResolvable compensateWithOnDemand) {
            this.compensateWithOnDemand = compensateWithOnDemand;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getContainerGroupId}
         * @param containerGroupId the value to be set.
         * @return {@code this}
         */
        public Builder containerGroupId(java.lang.String containerGroupId) {
            this.containerGroupId = containerGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getContainerGroupId}
         * @param containerGroupId the value to be set.
         * @return {@code this}
         */
        public Builder containerGroupId(com.aliyun.ros.cdk.core.IResolvable containerGroupId) {
            this.containerGroupId = containerGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getCustomPolicyArn}
         * @param customPolicyArn the value to be set.
         * @return {@code this}
         */
        public Builder customPolicyArn(java.lang.String customPolicyArn) {
            this.customPolicyArn = customPolicyArn;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getCustomPolicyArn}
         * @param customPolicyArn the value to be set.
         * @return {@code this}
         */
        public Builder customPolicyArn(com.aliyun.ros.cdk.core.IResolvable customPolicyArn) {
            this.customPolicyArn = customPolicyArn;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getDbInstanceIds}
         * @param dbInstanceIds the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceIds(com.aliyun.ros.cdk.core.IResolvable dbInstanceIds) {
            this.dbInstanceIds = dbInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getDbInstanceIds}
         * @param dbInstanceIds the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceIds(java.util.List<? extends java.lang.Object> dbInstanceIds) {
            this.dbInstanceIds = dbInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getDefaultCooldown}
         * @param defaultCooldown the value to be set.
         * @return {@code this}
         */
        public Builder defaultCooldown(java.lang.Number defaultCooldown) {
            this.defaultCooldown = defaultCooldown;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getDefaultCooldown}
         * @param defaultCooldown the value to be set.
         * @return {@code this}
         */
        public Builder defaultCooldown(com.aliyun.ros.cdk.core.IResolvable defaultCooldown) {
            this.defaultCooldown = defaultCooldown;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getDesiredCapacity}
         * @param desiredCapacity the value to be set.
         * @return {@code this}
         */
        public Builder desiredCapacity(java.lang.Number desiredCapacity) {
            this.desiredCapacity = desiredCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getDesiredCapacity}
         * @param desiredCapacity the value to be set.
         * @return {@code this}
         */
        public Builder desiredCapacity(com.aliyun.ros.cdk.core.IResolvable desiredCapacity) {
            this.desiredCapacity = desiredCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getGroupDeletionProtection}
         * @param groupDeletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder groupDeletionProtection(java.lang.Boolean groupDeletionProtection) {
            this.groupDeletionProtection = groupDeletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getGroupDeletionProtection}
         * @param groupDeletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder groupDeletionProtection(com.aliyun.ros.cdk.core.IResolvable groupDeletionProtection) {
            this.groupDeletionProtection = groupDeletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getGroupType}
         * @param groupType the value to be set.
         * @return {@code this}
         */
        public Builder groupType(java.lang.String groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getGroupType}
         * @param groupType the value to be set.
         * @return {@code this}
         */
        public Builder groupType(com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getHealthCheckType}
         * @param healthCheckType the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckType(java.lang.String healthCheckType) {
            this.healthCheckType = healthCheckType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getHealthCheckType}
         * @param healthCheckType the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckType(com.aliyun.ros.cdk.core.IResolvable healthCheckType) {
            this.healthCheckType = healthCheckType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getLaunchTemplateId}
         * @param launchTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateId(java.lang.String launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getLaunchTemplateId}
         * @param launchTemplateId the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateId(com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.launchTemplateId = launchTemplateId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getLaunchTemplateOverrides}
         * @param launchTemplateOverrides the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateOverrides(com.aliyun.ros.cdk.core.IResolvable launchTemplateOverrides) {
            this.launchTemplateOverrides = launchTemplateOverrides;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getLaunchTemplateOverrides}
         * @param launchTemplateOverrides the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateOverrides(java.util.List<? extends java.lang.Object> launchTemplateOverrides) {
            this.launchTemplateOverrides = launchTemplateOverrides;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(java.lang.String launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getLaunchTemplateVersion}
         * @param launchTemplateVersion the value to be set.
         * @return {@code this}
         */
        public Builder launchTemplateVersion(com.aliyun.ros.cdk.core.IResolvable launchTemplateVersion) {
            this.launchTemplateVersion = launchTemplateVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getLoadBalancerIds}
         * @param loadBalancerIds the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerIds(com.aliyun.ros.cdk.core.IResolvable loadBalancerIds) {
            this.loadBalancerIds = loadBalancerIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getLoadBalancerIds}
         * @param loadBalancerIds the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerIds(java.util.List<? extends java.lang.Object> loadBalancerIds) {
            this.loadBalancerIds = loadBalancerIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getMaxInstanceLifetime}
         * @param maxInstanceLifetime the value to be set.
         * @return {@code this}
         */
        public Builder maxInstanceLifetime(java.lang.Number maxInstanceLifetime) {
            this.maxInstanceLifetime = maxInstanceLifetime;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getMaxInstanceLifetime}
         * @param maxInstanceLifetime the value to be set.
         * @return {@code this}
         */
        public Builder maxInstanceLifetime(com.aliyun.ros.cdk.core.IResolvable maxInstanceLifetime) {
            this.maxInstanceLifetime = maxInstanceLifetime;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getMultiAzPolicy}
         * @param multiAzPolicy the value to be set.
         * @return {@code this}
         */
        public Builder multiAzPolicy(java.lang.String multiAzPolicy) {
            this.multiAzPolicy = multiAzPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getMultiAzPolicy}
         * @param multiAzPolicy the value to be set.
         * @return {@code this}
         */
        public Builder multiAzPolicy(com.aliyun.ros.cdk.core.IResolvable multiAzPolicy) {
            this.multiAzPolicy = multiAzPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getNotificationConfigurations}
         * @param notificationConfigurations the value to be set.
         * @return {@code this}
         */
        public Builder notificationConfigurations(com.aliyun.ros.cdk.core.IResolvable notificationConfigurations) {
            this.notificationConfigurations = notificationConfigurations;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getNotificationConfigurations}
         * @param notificationConfigurations the value to be set.
         * @return {@code this}
         */
        public Builder notificationConfigurations(java.util.List<? extends java.lang.Object> notificationConfigurations) {
            this.notificationConfigurations = notificationConfigurations;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getOnDemandBaseCapacity}
         * @param onDemandBaseCapacity the value to be set.
         * @return {@code this}
         */
        public Builder onDemandBaseCapacity(java.lang.Number onDemandBaseCapacity) {
            this.onDemandBaseCapacity = onDemandBaseCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getOnDemandBaseCapacity}
         * @param onDemandBaseCapacity the value to be set.
         * @return {@code this}
         */
        public Builder onDemandBaseCapacity(com.aliyun.ros.cdk.core.IResolvable onDemandBaseCapacity) {
            this.onDemandBaseCapacity = onDemandBaseCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getOnDemandPercentageAboveBaseCapacity}
         * @param onDemandPercentageAboveBaseCapacity the value to be set.
         * @return {@code this}
         */
        public Builder onDemandPercentageAboveBaseCapacity(java.lang.Number onDemandPercentageAboveBaseCapacity) {
            this.onDemandPercentageAboveBaseCapacity = onDemandPercentageAboveBaseCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getOnDemandPercentageAboveBaseCapacity}
         * @param onDemandPercentageAboveBaseCapacity the value to be set.
         * @return {@code this}
         */
        public Builder onDemandPercentageAboveBaseCapacity(com.aliyun.ros.cdk.core.IResolvable onDemandPercentageAboveBaseCapacity) {
            this.onDemandPercentageAboveBaseCapacity = onDemandPercentageAboveBaseCapacity;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getProtectedInstances}
         * @param protectedInstances the value to be set.
         * @return {@code this}
         */
        public Builder protectedInstances(com.aliyun.ros.cdk.core.IResolvable protectedInstances) {
            this.protectedInstances = protectedInstances;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getProtectedInstances}
         * @param protectedInstances the value to be set.
         * @return {@code this}
         */
        public Builder protectedInstances(java.util.List<? extends java.lang.Object> protectedInstances) {
            this.protectedInstances = protectedInstances;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getRemovalPolicys}
         * @param removalPolicys the value to be set.
         * @return {@code this}
         */
        public Builder removalPolicys(com.aliyun.ros.cdk.core.IResolvable removalPolicys) {
            this.removalPolicys = removalPolicys;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getRemovalPolicys}
         * @param removalPolicys the value to be set.
         * @return {@code this}
         */
        public Builder removalPolicys(java.util.List<? extends java.lang.Object> removalPolicys) {
            this.removalPolicys = removalPolicys;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getScalingGroupName}
         * @param scalingGroupName the value to be set.
         * @return {@code this}
         */
        public Builder scalingGroupName(java.lang.String scalingGroupName) {
            this.scalingGroupName = scalingGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getScalingGroupName}
         * @param scalingGroupName the value to be set.
         * @return {@code this}
         */
        public Builder scalingGroupName(com.aliyun.ros.cdk.core.IResolvable scalingGroupName) {
            this.scalingGroupName = scalingGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getScalingPolicy}
         * @param scalingPolicy the value to be set.
         * @return {@code this}
         */
        public Builder scalingPolicy(java.lang.String scalingPolicy) {
            this.scalingPolicy = scalingPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getScalingPolicy}
         * @param scalingPolicy the value to be set.
         * @return {@code this}
         */
        public Builder scalingPolicy(com.aliyun.ros.cdk.core.IResolvable scalingPolicy) {
            this.scalingPolicy = scalingPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getServerGroups}
         * @param serverGroups the value to be set.
         * @return {@code this}
         */
        public Builder serverGroups(com.aliyun.ros.cdk.core.IResolvable serverGroups) {
            this.serverGroups = serverGroups;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getServerGroups}
         * @param serverGroups the value to be set.
         * @return {@code this}
         */
        public Builder serverGroups(java.util.List<? extends java.lang.Object> serverGroups) {
            this.serverGroups = serverGroups;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getSpotAllocationStrategy}
         * @param spotAllocationStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotAllocationStrategy(java.lang.String spotAllocationStrategy) {
            this.spotAllocationStrategy = spotAllocationStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getSpotAllocationStrategy}
         * @param spotAllocationStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotAllocationStrategy(com.aliyun.ros.cdk.core.IResolvable spotAllocationStrategy) {
            this.spotAllocationStrategy = spotAllocationStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getSpotInstancePools}
         * @param spotInstancePools the value to be set.
         * @return {@code this}
         */
        public Builder spotInstancePools(java.lang.Number spotInstancePools) {
            this.spotInstancePools = spotInstancePools;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getSpotInstancePools}
         * @param spotInstancePools the value to be set.
         * @return {@code this}
         */
        public Builder spotInstancePools(com.aliyun.ros.cdk.core.IResolvable spotInstancePools) {
            this.spotInstancePools = spotInstancePools;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getSpotInstanceRemedy}
         * @param spotInstanceRemedy the value to be set.
         * @return {@code this}
         */
        public Builder spotInstanceRemedy(java.lang.Boolean spotInstanceRemedy) {
            this.spotInstanceRemedy = spotInstanceRemedy;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getSpotInstanceRemedy}
         * @param spotInstanceRemedy the value to be set.
         * @return {@code this}
         */
        public Builder spotInstanceRemedy(com.aliyun.ros.cdk.core.IResolvable spotInstanceRemedy) {
            this.spotInstanceRemedy = spotInstanceRemedy;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getStandbyInstances}
         * @param standbyInstances the value to be set.
         * @return {@code this}
         */
        public Builder standbyInstances(com.aliyun.ros.cdk.core.IResolvable standbyInstances) {
            this.standbyInstances = standbyInstances;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getStandbyInstances}
         * @param standbyInstances the value to be set.
         * @return {@code this}
         */
        public Builder standbyInstances(java.util.List<? extends java.lang.Object> standbyInstances) {
            this.standbyInstances = standbyInstances;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getVSwitchIds}
         * @param vSwitchIds the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupProps#getVSwitchIds}
         * @param vSwitchIds the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosScalingGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosScalingGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosScalingGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosScalingGroupProps {
        private final java.lang.Object maxSize;
        private final java.lang.Object minSize;
        private final java.lang.Object allocationStrategy;
        private final java.lang.Object azBalance;
        private final java.lang.Object compensateWithOnDemand;
        private final java.lang.Object containerGroupId;
        private final java.lang.Object customPolicyArn;
        private final java.lang.Object dbInstanceIds;
        private final java.lang.Object defaultCooldown;
        private final java.lang.Object desiredCapacity;
        private final java.lang.Object groupDeletionProtection;
        private final java.lang.Object groupType;
        private final java.lang.Object healthCheckType;
        private final java.lang.Object instanceId;
        private final java.lang.Object launchTemplateId;
        private final java.lang.Object launchTemplateOverrides;
        private final java.lang.Object launchTemplateVersion;
        private final java.lang.Object loadBalancerIds;
        private final java.lang.Object maxInstanceLifetime;
        private final java.lang.Object multiAzPolicy;
        private final java.lang.Object notificationConfigurations;
        private final java.lang.Object onDemandBaseCapacity;
        private final java.lang.Object onDemandPercentageAboveBaseCapacity;
        private final java.lang.Object protectedInstances;
        private final java.lang.Object removalPolicys;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object scalingGroupName;
        private final java.lang.Object scalingPolicy;
        private final java.lang.Object serverGroups;
        private final java.lang.Object spotAllocationStrategy;
        private final java.lang.Object spotInstancePools;
        private final java.lang.Object spotInstanceRemedy;
        private final java.lang.Object standbyInstances;
        private final java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> tags;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object vSwitchIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.maxSize = software.amazon.jsii.Kernel.get(this, "maxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minSize = software.amazon.jsii.Kernel.get(this, "minSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocationStrategy = software.amazon.jsii.Kernel.get(this, "allocationStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.azBalance = software.amazon.jsii.Kernel.get(this, "azBalance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compensateWithOnDemand = software.amazon.jsii.Kernel.get(this, "compensateWithOnDemand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerGroupId = software.amazon.jsii.Kernel.get(this, "containerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customPolicyArn = software.amazon.jsii.Kernel.get(this, "customPolicyArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceIds = software.amazon.jsii.Kernel.get(this, "dbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultCooldown = software.amazon.jsii.Kernel.get(this, "defaultCooldown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.desiredCapacity = software.amazon.jsii.Kernel.get(this, "desiredCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupDeletionProtection = software.amazon.jsii.Kernel.get(this, "groupDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupType = software.amazon.jsii.Kernel.get(this, "groupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckType = software.amazon.jsii.Kernel.get(this, "healthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateId = software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateOverrides = software.amazon.jsii.Kernel.get(this, "launchTemplateOverrides", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateVersion = software.amazon.jsii.Kernel.get(this, "launchTemplateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerIds = software.amazon.jsii.Kernel.get(this, "loadBalancerIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxInstanceLifetime = software.amazon.jsii.Kernel.get(this, "maxInstanceLifetime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiAzPolicy = software.amazon.jsii.Kernel.get(this, "multiAzPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notificationConfigurations = software.amazon.jsii.Kernel.get(this, "notificationConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.onDemandBaseCapacity = software.amazon.jsii.Kernel.get(this, "onDemandBaseCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.onDemandPercentageAboveBaseCapacity = software.amazon.jsii.Kernel.get(this, "onDemandPercentageAboveBaseCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protectedInstances = software.amazon.jsii.Kernel.get(this, "protectedInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.removalPolicys = software.amazon.jsii.Kernel.get(this, "removalPolicys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingGroupName = software.amazon.jsii.Kernel.get(this, "scalingGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingPolicy = software.amazon.jsii.Kernel.get(this, "scalingPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroups = software.amazon.jsii.Kernel.get(this, "serverGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotAllocationStrategy = software.amazon.jsii.Kernel.get(this, "spotAllocationStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotInstancePools = software.amazon.jsii.Kernel.get(this, "spotInstancePools", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotInstanceRemedy = software.amazon.jsii.Kernel.get(this, "spotInstanceRemedy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.standbyInstances = software.amazon.jsii.Kernel.get(this, "standbyInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty.class)));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.maxSize = java.util.Objects.requireNonNull(builder.maxSize, "maxSize is required");
            this.minSize = java.util.Objects.requireNonNull(builder.minSize, "minSize is required");
            this.allocationStrategy = builder.allocationStrategy;
            this.azBalance = builder.azBalance;
            this.compensateWithOnDemand = builder.compensateWithOnDemand;
            this.containerGroupId = builder.containerGroupId;
            this.customPolicyArn = builder.customPolicyArn;
            this.dbInstanceIds = builder.dbInstanceIds;
            this.defaultCooldown = builder.defaultCooldown;
            this.desiredCapacity = builder.desiredCapacity;
            this.groupDeletionProtection = builder.groupDeletionProtection;
            this.groupType = builder.groupType;
            this.healthCheckType = builder.healthCheckType;
            this.instanceId = builder.instanceId;
            this.launchTemplateId = builder.launchTemplateId;
            this.launchTemplateOverrides = builder.launchTemplateOverrides;
            this.launchTemplateVersion = builder.launchTemplateVersion;
            this.loadBalancerIds = builder.loadBalancerIds;
            this.maxInstanceLifetime = builder.maxInstanceLifetime;
            this.multiAzPolicy = builder.multiAzPolicy;
            this.notificationConfigurations = builder.notificationConfigurations;
            this.onDemandBaseCapacity = builder.onDemandBaseCapacity;
            this.onDemandPercentageAboveBaseCapacity = builder.onDemandPercentageAboveBaseCapacity;
            this.protectedInstances = builder.protectedInstances;
            this.removalPolicys = builder.removalPolicys;
            this.resourceGroupId = builder.resourceGroupId;
            this.scalingGroupName = builder.scalingGroupName;
            this.scalingPolicy = builder.scalingPolicy;
            this.serverGroups = builder.serverGroups;
            this.spotAllocationStrategy = builder.spotAllocationStrategy;
            this.spotInstancePools = builder.spotInstancePools;
            this.spotInstanceRemedy = builder.spotInstanceRemedy;
            this.standbyInstances = builder.standbyInstances;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty>)builder.tags;
            this.vSwitchId = builder.vSwitchId;
            this.vSwitchIds = builder.vSwitchIds;
        }

        @Override
        public final java.lang.Object getMaxSize() {
            return this.maxSize;
        }

        @Override
        public final java.lang.Object getMinSize() {
            return this.minSize;
        }

        @Override
        public final java.lang.Object getAllocationStrategy() {
            return this.allocationStrategy;
        }

        @Override
        public final java.lang.Object getAzBalance() {
            return this.azBalance;
        }

        @Override
        public final java.lang.Object getCompensateWithOnDemand() {
            return this.compensateWithOnDemand;
        }

        @Override
        public final java.lang.Object getContainerGroupId() {
            return this.containerGroupId;
        }

        @Override
        public final java.lang.Object getCustomPolicyArn() {
            return this.customPolicyArn;
        }

        @Override
        public final java.lang.Object getDbInstanceIds() {
            return this.dbInstanceIds;
        }

        @Override
        public final java.lang.Object getDefaultCooldown() {
            return this.defaultCooldown;
        }

        @Override
        public final java.lang.Object getDesiredCapacity() {
            return this.desiredCapacity;
        }

        @Override
        public final java.lang.Object getGroupDeletionProtection() {
            return this.groupDeletionProtection;
        }

        @Override
        public final java.lang.Object getGroupType() {
            return this.groupType;
        }

        @Override
        public final java.lang.Object getHealthCheckType() {
            return this.healthCheckType;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getLaunchTemplateId() {
            return this.launchTemplateId;
        }

        @Override
        public final java.lang.Object getLaunchTemplateOverrides() {
            return this.launchTemplateOverrides;
        }

        @Override
        public final java.lang.Object getLaunchTemplateVersion() {
            return this.launchTemplateVersion;
        }

        @Override
        public final java.lang.Object getLoadBalancerIds() {
            return this.loadBalancerIds;
        }

        @Override
        public final java.lang.Object getMaxInstanceLifetime() {
            return this.maxInstanceLifetime;
        }

        @Override
        public final java.lang.Object getMultiAzPolicy() {
            return this.multiAzPolicy;
        }

        @Override
        public final java.lang.Object getNotificationConfigurations() {
            return this.notificationConfigurations;
        }

        @Override
        public final java.lang.Object getOnDemandBaseCapacity() {
            return this.onDemandBaseCapacity;
        }

        @Override
        public final java.lang.Object getOnDemandPercentageAboveBaseCapacity() {
            return this.onDemandPercentageAboveBaseCapacity;
        }

        @Override
        public final java.lang.Object getProtectedInstances() {
            return this.protectedInstances;
        }

        @Override
        public final java.lang.Object getRemovalPolicys() {
            return this.removalPolicys;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getScalingGroupName() {
            return this.scalingGroupName;
        }

        @Override
        public final java.lang.Object getScalingPolicy() {
            return this.scalingPolicy;
        }

        @Override
        public final java.lang.Object getServerGroups() {
            return this.serverGroups;
        }

        @Override
        public final java.lang.Object getSpotAllocationStrategy() {
            return this.spotAllocationStrategy;
        }

        @Override
        public final java.lang.Object getSpotInstancePools() {
            return this.spotInstancePools;
        }

        @Override
        public final java.lang.Object getSpotInstanceRemedy() {
            return this.spotInstanceRemedy;
        }

        @Override
        public final java.lang.Object getStandbyInstances() {
            return this.standbyInstances;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getVSwitchIds() {
            return this.vSwitchIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("maxSize", om.valueToTree(this.getMaxSize()));
            data.set("minSize", om.valueToTree(this.getMinSize()));
            if (this.getAllocationStrategy() != null) {
                data.set("allocationStrategy", om.valueToTree(this.getAllocationStrategy()));
            }
            if (this.getAzBalance() != null) {
                data.set("azBalance", om.valueToTree(this.getAzBalance()));
            }
            if (this.getCompensateWithOnDemand() != null) {
                data.set("compensateWithOnDemand", om.valueToTree(this.getCompensateWithOnDemand()));
            }
            if (this.getContainerGroupId() != null) {
                data.set("containerGroupId", om.valueToTree(this.getContainerGroupId()));
            }
            if (this.getCustomPolicyArn() != null) {
                data.set("customPolicyArn", om.valueToTree(this.getCustomPolicyArn()));
            }
            if (this.getDbInstanceIds() != null) {
                data.set("dbInstanceIds", om.valueToTree(this.getDbInstanceIds()));
            }
            if (this.getDefaultCooldown() != null) {
                data.set("defaultCooldown", om.valueToTree(this.getDefaultCooldown()));
            }
            if (this.getDesiredCapacity() != null) {
                data.set("desiredCapacity", om.valueToTree(this.getDesiredCapacity()));
            }
            if (this.getGroupDeletionProtection() != null) {
                data.set("groupDeletionProtection", om.valueToTree(this.getGroupDeletionProtection()));
            }
            if (this.getGroupType() != null) {
                data.set("groupType", om.valueToTree(this.getGroupType()));
            }
            if (this.getHealthCheckType() != null) {
                data.set("healthCheckType", om.valueToTree(this.getHealthCheckType()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getLaunchTemplateId() != null) {
                data.set("launchTemplateId", om.valueToTree(this.getLaunchTemplateId()));
            }
            if (this.getLaunchTemplateOverrides() != null) {
                data.set("launchTemplateOverrides", om.valueToTree(this.getLaunchTemplateOverrides()));
            }
            if (this.getLaunchTemplateVersion() != null) {
                data.set("launchTemplateVersion", om.valueToTree(this.getLaunchTemplateVersion()));
            }
            if (this.getLoadBalancerIds() != null) {
                data.set("loadBalancerIds", om.valueToTree(this.getLoadBalancerIds()));
            }
            if (this.getMaxInstanceLifetime() != null) {
                data.set("maxInstanceLifetime", om.valueToTree(this.getMaxInstanceLifetime()));
            }
            if (this.getMultiAzPolicy() != null) {
                data.set("multiAzPolicy", om.valueToTree(this.getMultiAzPolicy()));
            }
            if (this.getNotificationConfigurations() != null) {
                data.set("notificationConfigurations", om.valueToTree(this.getNotificationConfigurations()));
            }
            if (this.getOnDemandBaseCapacity() != null) {
                data.set("onDemandBaseCapacity", om.valueToTree(this.getOnDemandBaseCapacity()));
            }
            if (this.getOnDemandPercentageAboveBaseCapacity() != null) {
                data.set("onDemandPercentageAboveBaseCapacity", om.valueToTree(this.getOnDemandPercentageAboveBaseCapacity()));
            }
            if (this.getProtectedInstances() != null) {
                data.set("protectedInstances", om.valueToTree(this.getProtectedInstances()));
            }
            if (this.getRemovalPolicys() != null) {
                data.set("removalPolicys", om.valueToTree(this.getRemovalPolicys()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getScalingGroupName() != null) {
                data.set("scalingGroupName", om.valueToTree(this.getScalingGroupName()));
            }
            if (this.getScalingPolicy() != null) {
                data.set("scalingPolicy", om.valueToTree(this.getScalingPolicy()));
            }
            if (this.getServerGroups() != null) {
                data.set("serverGroups", om.valueToTree(this.getServerGroups()));
            }
            if (this.getSpotAllocationStrategy() != null) {
                data.set("spotAllocationStrategy", om.valueToTree(this.getSpotAllocationStrategy()));
            }
            if (this.getSpotInstancePools() != null) {
                data.set("spotInstancePools", om.valueToTree(this.getSpotInstancePools()));
            }
            if (this.getSpotInstanceRemedy() != null) {
                data.set("spotInstanceRemedy", om.valueToTree(this.getSpotInstanceRemedy()));
            }
            if (this.getStandbyInstances() != null) {
                data.set("standbyInstances", om.valueToTree(this.getStandbyInstances()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getVSwitchIds() != null) {
                data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosScalingGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosScalingGroupProps.Jsii$Proxy that = (RosScalingGroupProps.Jsii$Proxy) o;

            if (!maxSize.equals(that.maxSize)) return false;
            if (!minSize.equals(that.minSize)) return false;
            if (this.allocationStrategy != null ? !this.allocationStrategy.equals(that.allocationStrategy) : that.allocationStrategy != null) return false;
            if (this.azBalance != null ? !this.azBalance.equals(that.azBalance) : that.azBalance != null) return false;
            if (this.compensateWithOnDemand != null ? !this.compensateWithOnDemand.equals(that.compensateWithOnDemand) : that.compensateWithOnDemand != null) return false;
            if (this.containerGroupId != null ? !this.containerGroupId.equals(that.containerGroupId) : that.containerGroupId != null) return false;
            if (this.customPolicyArn != null ? !this.customPolicyArn.equals(that.customPolicyArn) : that.customPolicyArn != null) return false;
            if (this.dbInstanceIds != null ? !this.dbInstanceIds.equals(that.dbInstanceIds) : that.dbInstanceIds != null) return false;
            if (this.defaultCooldown != null ? !this.defaultCooldown.equals(that.defaultCooldown) : that.defaultCooldown != null) return false;
            if (this.desiredCapacity != null ? !this.desiredCapacity.equals(that.desiredCapacity) : that.desiredCapacity != null) return false;
            if (this.groupDeletionProtection != null ? !this.groupDeletionProtection.equals(that.groupDeletionProtection) : that.groupDeletionProtection != null) return false;
            if (this.groupType != null ? !this.groupType.equals(that.groupType) : that.groupType != null) return false;
            if (this.healthCheckType != null ? !this.healthCheckType.equals(that.healthCheckType) : that.healthCheckType != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.launchTemplateId != null ? !this.launchTemplateId.equals(that.launchTemplateId) : that.launchTemplateId != null) return false;
            if (this.launchTemplateOverrides != null ? !this.launchTemplateOverrides.equals(that.launchTemplateOverrides) : that.launchTemplateOverrides != null) return false;
            if (this.launchTemplateVersion != null ? !this.launchTemplateVersion.equals(that.launchTemplateVersion) : that.launchTemplateVersion != null) return false;
            if (this.loadBalancerIds != null ? !this.loadBalancerIds.equals(that.loadBalancerIds) : that.loadBalancerIds != null) return false;
            if (this.maxInstanceLifetime != null ? !this.maxInstanceLifetime.equals(that.maxInstanceLifetime) : that.maxInstanceLifetime != null) return false;
            if (this.multiAzPolicy != null ? !this.multiAzPolicy.equals(that.multiAzPolicy) : that.multiAzPolicy != null) return false;
            if (this.notificationConfigurations != null ? !this.notificationConfigurations.equals(that.notificationConfigurations) : that.notificationConfigurations != null) return false;
            if (this.onDemandBaseCapacity != null ? !this.onDemandBaseCapacity.equals(that.onDemandBaseCapacity) : that.onDemandBaseCapacity != null) return false;
            if (this.onDemandPercentageAboveBaseCapacity != null ? !this.onDemandPercentageAboveBaseCapacity.equals(that.onDemandPercentageAboveBaseCapacity) : that.onDemandPercentageAboveBaseCapacity != null) return false;
            if (this.protectedInstances != null ? !this.protectedInstances.equals(that.protectedInstances) : that.protectedInstances != null) return false;
            if (this.removalPolicys != null ? !this.removalPolicys.equals(that.removalPolicys) : that.removalPolicys != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.scalingGroupName != null ? !this.scalingGroupName.equals(that.scalingGroupName) : that.scalingGroupName != null) return false;
            if (this.scalingPolicy != null ? !this.scalingPolicy.equals(that.scalingPolicy) : that.scalingPolicy != null) return false;
            if (this.serverGroups != null ? !this.serverGroups.equals(that.serverGroups) : that.serverGroups != null) return false;
            if (this.spotAllocationStrategy != null ? !this.spotAllocationStrategy.equals(that.spotAllocationStrategy) : that.spotAllocationStrategy != null) return false;
            if (this.spotInstancePools != null ? !this.spotInstancePools.equals(that.spotInstancePools) : that.spotInstancePools != null) return false;
            if (this.spotInstanceRemedy != null ? !this.spotInstanceRemedy.equals(that.spotInstanceRemedy) : that.spotInstanceRemedy != null) return false;
            if (this.standbyInstances != null ? !this.standbyInstances.equals(that.standbyInstances) : that.standbyInstances != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.vSwitchIds != null ? this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.maxSize.hashCode();
            result = 31 * result + (this.minSize.hashCode());
            result = 31 * result + (this.allocationStrategy != null ? this.allocationStrategy.hashCode() : 0);
            result = 31 * result + (this.azBalance != null ? this.azBalance.hashCode() : 0);
            result = 31 * result + (this.compensateWithOnDemand != null ? this.compensateWithOnDemand.hashCode() : 0);
            result = 31 * result + (this.containerGroupId != null ? this.containerGroupId.hashCode() : 0);
            result = 31 * result + (this.customPolicyArn != null ? this.customPolicyArn.hashCode() : 0);
            result = 31 * result + (this.dbInstanceIds != null ? this.dbInstanceIds.hashCode() : 0);
            result = 31 * result + (this.defaultCooldown != null ? this.defaultCooldown.hashCode() : 0);
            result = 31 * result + (this.desiredCapacity != null ? this.desiredCapacity.hashCode() : 0);
            result = 31 * result + (this.groupDeletionProtection != null ? this.groupDeletionProtection.hashCode() : 0);
            result = 31 * result + (this.groupType != null ? this.groupType.hashCode() : 0);
            result = 31 * result + (this.healthCheckType != null ? this.healthCheckType.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.launchTemplateId != null ? this.launchTemplateId.hashCode() : 0);
            result = 31 * result + (this.launchTemplateOverrides != null ? this.launchTemplateOverrides.hashCode() : 0);
            result = 31 * result + (this.launchTemplateVersion != null ? this.launchTemplateVersion.hashCode() : 0);
            result = 31 * result + (this.loadBalancerIds != null ? this.loadBalancerIds.hashCode() : 0);
            result = 31 * result + (this.maxInstanceLifetime != null ? this.maxInstanceLifetime.hashCode() : 0);
            result = 31 * result + (this.multiAzPolicy != null ? this.multiAzPolicy.hashCode() : 0);
            result = 31 * result + (this.notificationConfigurations != null ? this.notificationConfigurations.hashCode() : 0);
            result = 31 * result + (this.onDemandBaseCapacity != null ? this.onDemandBaseCapacity.hashCode() : 0);
            result = 31 * result + (this.onDemandPercentageAboveBaseCapacity != null ? this.onDemandPercentageAboveBaseCapacity.hashCode() : 0);
            result = 31 * result + (this.protectedInstances != null ? this.protectedInstances.hashCode() : 0);
            result = 31 * result + (this.removalPolicys != null ? this.removalPolicys.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.scalingGroupName != null ? this.scalingGroupName.hashCode() : 0);
            result = 31 * result + (this.scalingPolicy != null ? this.scalingPolicy.hashCode() : 0);
            result = 31 * result + (this.serverGroups != null ? this.serverGroups.hashCode() : 0);
            result = 31 * result + (this.spotAllocationStrategy != null ? this.spotAllocationStrategy.hashCode() : 0);
            result = 31 * result + (this.spotInstancePools != null ? this.spotInstancePools.hashCode() : 0);
            result = 31 * result + (this.spotInstanceRemedy != null ? this.spotInstanceRemedy.hashCode() : 0);
            result = 31 * result + (this.standbyInstances != null ? this.standbyInstances.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
            return result;
        }
    }
}
