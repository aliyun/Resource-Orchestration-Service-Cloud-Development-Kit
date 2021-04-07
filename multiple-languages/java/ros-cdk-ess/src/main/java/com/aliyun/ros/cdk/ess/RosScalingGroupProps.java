package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a `ALIYUN::ESS::ScalingGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.488Z")
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingGroupName() {
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
        private java.lang.Object maxSize;
        private java.lang.Object minSize;
        private java.lang.Object dbInstanceIds;
        private java.lang.Object defaultCooldown;
        private java.lang.Object desiredCapacity;
        private java.lang.Object groupDeletionProtection;
        private java.lang.Object healthCheckType;
        private java.lang.Object instanceId;
        private java.lang.Object launchTemplateId;
        private java.lang.Object launchTemplateVersion;
        private java.lang.Object loadBalancerIds;
        private java.lang.Object multiAzPolicy;
        private java.lang.Object notificationConfigurations;
        private java.lang.Object protectedInstances;
        private java.lang.Object removalPolicys;
        private java.lang.Object scalingGroupName;
        private java.lang.Object standbyInstances;
        private java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> tags;
        private java.lang.Object vSwitchId;
        private java.lang.Object vSwitchIds;

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
         * Sets the value of {@link RosScalingGroupProps#getDbInstanceIds}
         * @param dbInstanceIds the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceIds(java.util.List<? extends java.lang.Object> dbInstanceIds) {
            this.dbInstanceIds = dbInstanceIds;
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
        public Builder loadBalancerIds(java.util.List<? extends java.lang.Object> loadBalancerIds) {
            this.loadBalancerIds = loadBalancerIds;
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
         * Sets the value of {@link RosScalingGroupProps#getProtectedInstances}
         * @param protectedInstances the value to be set.
         * @return {@code this}
         */
        public Builder protectedInstances(java.util.List<? extends java.lang.Object> protectedInstances) {
            this.protectedInstances = protectedInstances;
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
         * Sets the value of {@link RosScalingGroupProps#getRemovalPolicys}
         * @param removalPolicys the value to be set.
         * @return {@code this}
         */
        public Builder removalPolicys(java.util.List<? extends java.lang.Object> removalPolicys) {
            this.removalPolicys = removalPolicys;
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
         * Sets the value of {@link RosScalingGroupProps#getStandbyInstances}
         * @param standbyInstances the value to be set.
         * @return {@code this}
         */
        public Builder standbyInstances(java.util.List<? extends java.lang.Object> standbyInstances) {
            this.standbyInstances = standbyInstances;
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
        public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
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
         * Builds the configured instance.
         * @return a new instance of {@link RosScalingGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosScalingGroupProps build() {
            return new Jsii$Proxy(maxSize, minSize, dbInstanceIds, defaultCooldown, desiredCapacity, groupDeletionProtection, healthCheckType, instanceId, launchTemplateId, launchTemplateVersion, loadBalancerIds, multiAzPolicy, notificationConfigurations, protectedInstances, removalPolicys, scalingGroupName, standbyInstances, tags, vSwitchId, vSwitchIds);
        }
    }

    /**
     * An implementation for {@link RosScalingGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosScalingGroupProps {
        private final java.lang.Object maxSize;
        private final java.lang.Object minSize;
        private final java.lang.Object dbInstanceIds;
        private final java.lang.Object defaultCooldown;
        private final java.lang.Object desiredCapacity;
        private final java.lang.Object groupDeletionProtection;
        private final java.lang.Object healthCheckType;
        private final java.lang.Object instanceId;
        private final java.lang.Object launchTemplateId;
        private final java.lang.Object launchTemplateVersion;
        private final java.lang.Object loadBalancerIds;
        private final java.lang.Object multiAzPolicy;
        private final java.lang.Object notificationConfigurations;
        private final java.lang.Object protectedInstances;
        private final java.lang.Object removalPolicys;
        private final java.lang.Object scalingGroupName;
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
            this.dbInstanceIds = software.amazon.jsii.Kernel.get(this, "dbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultCooldown = software.amazon.jsii.Kernel.get(this, "defaultCooldown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.desiredCapacity = software.amazon.jsii.Kernel.get(this, "desiredCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupDeletionProtection = software.amazon.jsii.Kernel.get(this, "groupDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckType = software.amazon.jsii.Kernel.get(this, "healthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateId = software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchTemplateVersion = software.amazon.jsii.Kernel.get(this, "launchTemplateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerIds = software.amazon.jsii.Kernel.get(this, "loadBalancerIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiAzPolicy = software.amazon.jsii.Kernel.get(this, "multiAzPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.notificationConfigurations = software.amazon.jsii.Kernel.get(this, "notificationConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protectedInstances = software.amazon.jsii.Kernel.get(this, "protectedInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.removalPolicys = software.amazon.jsii.Kernel.get(this, "removalPolicys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingGroupName = software.amazon.jsii.Kernel.get(this, "scalingGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.standbyInstances = software.amazon.jsii.Kernel.get(this, "standbyInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty.class)));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.Object maxSize, final java.lang.Object minSize, final java.lang.Object dbInstanceIds, final java.lang.Object defaultCooldown, final java.lang.Object desiredCapacity, final java.lang.Object groupDeletionProtection, final java.lang.Object healthCheckType, final java.lang.Object instanceId, final java.lang.Object launchTemplateId, final java.lang.Object launchTemplateVersion, final java.lang.Object loadBalancerIds, final java.lang.Object multiAzPolicy, final java.lang.Object notificationConfigurations, final java.lang.Object protectedInstances, final java.lang.Object removalPolicys, final java.lang.Object scalingGroupName, final java.lang.Object standbyInstances, final java.util.List<? extends com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> tags, final java.lang.Object vSwitchId, final java.lang.Object vSwitchIds) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.maxSize = java.util.Objects.requireNonNull(maxSize, "maxSize is required");
            this.minSize = java.util.Objects.requireNonNull(minSize, "minSize is required");
            this.dbInstanceIds = dbInstanceIds;
            this.defaultCooldown = defaultCooldown;
            this.desiredCapacity = desiredCapacity;
            this.groupDeletionProtection = groupDeletionProtection;
            this.healthCheckType = healthCheckType;
            this.instanceId = instanceId;
            this.launchTemplateId = launchTemplateId;
            this.launchTemplateVersion = launchTemplateVersion;
            this.loadBalancerIds = loadBalancerIds;
            this.multiAzPolicy = multiAzPolicy;
            this.notificationConfigurations = notificationConfigurations;
            this.protectedInstances = protectedInstances;
            this.removalPolicys = removalPolicys;
            this.scalingGroupName = scalingGroupName;
            this.standbyInstances = standbyInstances;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty>)tags;
            this.vSwitchId = vSwitchId;
            this.vSwitchIds = vSwitchIds;
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
        public final java.lang.Object getLaunchTemplateVersion() {
            return this.launchTemplateVersion;
        }

        @Override
        public final java.lang.Object getLoadBalancerIds() {
            return this.loadBalancerIds;
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
        public final java.lang.Object getProtectedInstances() {
            return this.protectedInstances;
        }

        @Override
        public final java.lang.Object getRemovalPolicys() {
            return this.removalPolicys;
        }

        @Override
        public final java.lang.Object getScalingGroupName() {
            return this.scalingGroupName;
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
            if (this.getHealthCheckType() != null) {
                data.set("healthCheckType", om.valueToTree(this.getHealthCheckType()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getLaunchTemplateId() != null) {
                data.set("launchTemplateId", om.valueToTree(this.getLaunchTemplateId()));
            }
            if (this.getLaunchTemplateVersion() != null) {
                data.set("launchTemplateVersion", om.valueToTree(this.getLaunchTemplateVersion()));
            }
            if (this.getLoadBalancerIds() != null) {
                data.set("loadBalancerIds", om.valueToTree(this.getLoadBalancerIds()));
            }
            if (this.getMultiAzPolicy() != null) {
                data.set("multiAzPolicy", om.valueToTree(this.getMultiAzPolicy()));
            }
            if (this.getNotificationConfigurations() != null) {
                data.set("notificationConfigurations", om.valueToTree(this.getNotificationConfigurations()));
            }
            if (this.getProtectedInstances() != null) {
                data.set("protectedInstances", om.valueToTree(this.getProtectedInstances()));
            }
            if (this.getRemovalPolicys() != null) {
                data.set("removalPolicys", om.valueToTree(this.getRemovalPolicys()));
            }
            if (this.getScalingGroupName() != null) {
                data.set("scalingGroupName", om.valueToTree(this.getScalingGroupName()));
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
            if (this.dbInstanceIds != null ? !this.dbInstanceIds.equals(that.dbInstanceIds) : that.dbInstanceIds != null) return false;
            if (this.defaultCooldown != null ? !this.defaultCooldown.equals(that.defaultCooldown) : that.defaultCooldown != null) return false;
            if (this.desiredCapacity != null ? !this.desiredCapacity.equals(that.desiredCapacity) : that.desiredCapacity != null) return false;
            if (this.groupDeletionProtection != null ? !this.groupDeletionProtection.equals(that.groupDeletionProtection) : that.groupDeletionProtection != null) return false;
            if (this.healthCheckType != null ? !this.healthCheckType.equals(that.healthCheckType) : that.healthCheckType != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.launchTemplateId != null ? !this.launchTemplateId.equals(that.launchTemplateId) : that.launchTemplateId != null) return false;
            if (this.launchTemplateVersion != null ? !this.launchTemplateVersion.equals(that.launchTemplateVersion) : that.launchTemplateVersion != null) return false;
            if (this.loadBalancerIds != null ? !this.loadBalancerIds.equals(that.loadBalancerIds) : that.loadBalancerIds != null) return false;
            if (this.multiAzPolicy != null ? !this.multiAzPolicy.equals(that.multiAzPolicy) : that.multiAzPolicy != null) return false;
            if (this.notificationConfigurations != null ? !this.notificationConfigurations.equals(that.notificationConfigurations) : that.notificationConfigurations != null) return false;
            if (this.protectedInstances != null ? !this.protectedInstances.equals(that.protectedInstances) : that.protectedInstances != null) return false;
            if (this.removalPolicys != null ? !this.removalPolicys.equals(that.removalPolicys) : that.removalPolicys != null) return false;
            if (this.scalingGroupName != null ? !this.scalingGroupName.equals(that.scalingGroupName) : that.scalingGroupName != null) return false;
            if (this.standbyInstances != null ? !this.standbyInstances.equals(that.standbyInstances) : that.standbyInstances != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.vSwitchIds != null ? this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.maxSize.hashCode();
            result = 31 * result + (this.minSize.hashCode());
            result = 31 * result + (this.dbInstanceIds != null ? this.dbInstanceIds.hashCode() : 0);
            result = 31 * result + (this.defaultCooldown != null ? this.defaultCooldown.hashCode() : 0);
            result = 31 * result + (this.desiredCapacity != null ? this.desiredCapacity.hashCode() : 0);
            result = 31 * result + (this.groupDeletionProtection != null ? this.groupDeletionProtection.hashCode() : 0);
            result = 31 * result + (this.healthCheckType != null ? this.healthCheckType.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.launchTemplateId != null ? this.launchTemplateId.hashCode() : 0);
            result = 31 * result + (this.launchTemplateVersion != null ? this.launchTemplateVersion.hashCode() : 0);
            result = 31 * result + (this.loadBalancerIds != null ? this.loadBalancerIds.hashCode() : 0);
            result = 31 * result + (this.multiAzPolicy != null ? this.multiAzPolicy.hashCode() : 0);
            result = 31 * result + (this.notificationConfigurations != null ? this.notificationConfigurations.hashCode() : 0);
            result = 31 * result + (this.protectedInstances != null ? this.protectedInstances.hashCode() : 0);
            result = 31 * result + (this.removalPolicys != null ? this.removalPolicys.hashCode() : 0);
            result = 31 * result + (this.scalingGroupName != null ? this.scalingGroupName.hashCode() : 0);
            result = 31 * result + (this.standbyInstances != null ? this.standbyInstances.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
            return result;
        }
    }
}
