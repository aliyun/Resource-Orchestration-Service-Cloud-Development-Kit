package com.aliyun.ros.cdk.ess;

/**
 * A ROS template type:  `ALIYUN::ESS::ScalingGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.74.0 (build 6d08790)", date = "2023-02-14T06:40:11.468Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScalingGroup")
public class RosScalingGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosScalingGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosScalingGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ess.RosScalingGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ESS::ScalingGroup`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosScalingGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.RosScalingGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMaxSize() {
        return software.amazon.jsii.Kernel.get(this, "maxSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxSize(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxSize", java.util.Objects.requireNonNull(value, "maxSize is required"));
    }

    /**
     */
    public void setMaxSize(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxSize", java.util.Objects.requireNonNull(value, "maxSize is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMinSize() {
        return software.amazon.jsii.Kernel.get(this, "minSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMinSize(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "minSize", java.util.Objects.requireNonNull(value, "minSize is required"));
    }

    /**
     */
    public void setMinSize(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "minSize", java.util.Objects.requireNonNull(value, "minSize is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCompensateWithOnDemand() {
        return software.amazon.jsii.Kernel.get(this, "compensateWithOnDemand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCompensateWithOnDemand(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "compensateWithOnDemand", value);
    }

    /**
     */
    public void setCompensateWithOnDemand(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "compensateWithOnDemand", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContainerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "containerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContainerGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "containerGroupId", value);
    }

    /**
     */
    public void setContainerGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "containerGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "dbInstanceIds", value);
    }

    /**
     */
    public void setDbInstanceIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDefaultCooldown() {
        return software.amazon.jsii.Kernel.get(this, "defaultCooldown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultCooldown(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "defaultCooldown", value);
    }

    /**
     */
    public void setDefaultCooldown(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultCooldown", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDesiredCapacity() {
        return software.amazon.jsii.Kernel.get(this, "desiredCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDesiredCapacity(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "desiredCapacity", value);
    }

    /**
     */
    public void setDesiredCapacity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "desiredCapacity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGroupDeletionProtection() {
        return software.amazon.jsii.Kernel.get(this, "groupDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupDeletionProtection(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "groupDeletionProtection", value);
    }

    /**
     */
    public void setGroupDeletionProtection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupDeletionProtection", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGroupType() {
        return software.amazon.jsii.Kernel.get(this, "groupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupType", value);
    }

    /**
     */
    public void setGroupType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckType() {
        return software.amazon.jsii.Kernel.get(this, "healthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheckType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckType", value);
    }

    /**
     */
    public void setHealthCheckType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheckType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", value);
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateId() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchTemplateId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateId", value);
    }

    /**
     */
    public void setLaunchTemplateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateVersion() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchTemplateVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateVersion", value);
    }

    /**
     */
    public void setLaunchTemplateVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerIds() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancerIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalancerIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "loadBalancerIds", value);
    }

    /**
     */
    public void setLoadBalancerIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMultiAzPolicy() {
        return software.amazon.jsii.Kernel.get(this, "multiAzPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMultiAzPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "multiAzPolicy", value);
    }

    /**
     */
    public void setMultiAzPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "multiAzPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNotificationConfigurations() {
        return software.amazon.jsii.Kernel.get(this, "notificationConfigurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNotificationConfigurations(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "notificationConfigurations", value);
    }

    /**
     */
    public void setNotificationConfigurations(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ess.RosScalingGroup.NotificationConfigurationsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ess.RosScalingGroup.NotificationConfigurationsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "notificationConfigurations", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOnDemandBaseCapacity() {
        return software.amazon.jsii.Kernel.get(this, "onDemandBaseCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOnDemandBaseCapacity(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "onDemandBaseCapacity", value);
    }

    /**
     */
    public void setOnDemandBaseCapacity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "onDemandBaseCapacity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOnDemandPercentageAboveBaseCapacity() {
        return software.amazon.jsii.Kernel.get(this, "onDemandPercentageAboveBaseCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOnDemandPercentageAboveBaseCapacity(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "onDemandPercentageAboveBaseCapacity", value);
    }

    /**
     */
    public void setOnDemandPercentageAboveBaseCapacity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "onDemandPercentageAboveBaseCapacity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProtectedInstances() {
        return software.amazon.jsii.Kernel.get(this, "protectedInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProtectedInstances(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "protectedInstances", value);
    }

    /**
     */
    public void setProtectedInstances(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "protectedInstances", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemovalPolicys() {
        return software.amazon.jsii.Kernel.get(this, "removalPolicys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemovalPolicys(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "removalPolicys", value);
    }

    /**
     */
    public void setRemovalPolicys(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "removalPolicys", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingGroupName() {
        return software.amazon.jsii.Kernel.get(this, "scalingGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupName", value);
    }

    /**
     */
    public void setScalingGroupName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScalingPolicy() {
        return software.amazon.jsii.Kernel.get(this, "scalingPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingPolicy", value);
    }

    /**
     */
    public void setScalingPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotInstancePools() {
        return software.amazon.jsii.Kernel.get(this, "spotInstancePools", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotInstancePools(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "spotInstancePools", value);
    }

    /**
     */
    public void setSpotInstancePools(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotInstancePools", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotInstanceRemedy() {
        return software.amazon.jsii.Kernel.get(this, "spotInstanceRemedy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotInstanceRemedy(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "spotInstanceRemedy", value);
    }

    /**
     */
    public void setSpotInstanceRemedy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotInstanceRemedy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStandbyInstances() {
        return software.amazon.jsii.Kernel.get(this, "standbyInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStandbyInstances(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "standbyInstances", value);
    }

    /**
     */
    public void setStandbyInstances(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "standbyInstances", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "vSwitchIds", value);
    }

    /**
     */
    public void setVSwitchIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchIds", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty")
    @software.amazon.jsii.Jsii.Proxy(NotificationConfigurationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NotificationConfigurationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getNotificationArn();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getNotificationTypes();

        /**
         * @return a {@link Builder} of {@link NotificationConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NotificationConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NotificationConfigurationsProperty> {
            java.lang.Object notificationArn;
            java.lang.Object notificationTypes;

            /**
             * Sets the value of {@link NotificationConfigurationsProperty#getNotificationArn}
             * @param notificationArn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notificationArn(java.lang.String notificationArn) {
                this.notificationArn = notificationArn;
                return this;
            }

            /**
             * Sets the value of {@link NotificationConfigurationsProperty#getNotificationArn}
             * @param notificationArn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notificationArn(com.aliyun.ros.cdk.core.IResolvable notificationArn) {
                this.notificationArn = notificationArn;
                return this;
            }

            /**
             * Sets the value of {@link NotificationConfigurationsProperty#getNotificationTypes}
             * @param notificationTypes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notificationTypes(java.util.List<? extends java.lang.Object> notificationTypes) {
                this.notificationTypes = notificationTypes;
                return this;
            }

            /**
             * Sets the value of {@link NotificationConfigurationsProperty#getNotificationTypes}
             * @param notificationTypes the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder notificationTypes(com.aliyun.ros.cdk.core.IResolvable notificationTypes) {
                this.notificationTypes = notificationTypes;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NotificationConfigurationsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NotificationConfigurationsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NotificationConfigurationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NotificationConfigurationsProperty {
            private final java.lang.Object notificationArn;
            private final java.lang.Object notificationTypes;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.notificationArn = software.amazon.jsii.Kernel.get(this, "notificationArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.notificationTypes = software.amazon.jsii.Kernel.get(this, "notificationTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.notificationArn = java.util.Objects.requireNonNull(builder.notificationArn, "notificationArn is required");
                this.notificationTypes = java.util.Objects.requireNonNull(builder.notificationTypes, "notificationTypes is required");
            }

            @Override
            public final java.lang.Object getNotificationArn() {
                return this.notificationArn;
            }

            @Override
            public final java.lang.Object getNotificationTypes() {
                return this.notificationTypes;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("notificationArn", om.valueToTree(this.getNotificationArn()));
                data.set("notificationTypes", om.valueToTree(this.getNotificationTypes()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosScalingGroup.NotificationConfigurationsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NotificationConfigurationsProperty.Jsii$Proxy that = (NotificationConfigurationsProperty.Jsii$Proxy) o;

                if (!notificationArn.equals(that.notificationArn)) return false;
                return this.notificationTypes.equals(that.notificationTypes);
            }

            @Override
            public final int hashCode() {
                int result = this.notificationArn.hashCode();
                result = 31 * result + (this.notificationTypes.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScalingGroup.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosScalingGroup.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.RosScalingGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.RosScalingGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ess.RosScalingGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.RosScalingGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param maxSize This parameter is required.
         */
        public Builder maxSize(final java.lang.Number maxSize) {
            this.props.maxSize(maxSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxSize This parameter is required.
         */
        public Builder maxSize(final com.aliyun.ros.cdk.core.IResolvable maxSize) {
            this.props.maxSize(maxSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param minSize This parameter is required.
         */
        public Builder minSize(final java.lang.Number minSize) {
            this.props.minSize(minSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param minSize This parameter is required.
         */
        public Builder minSize(final com.aliyun.ros.cdk.core.IResolvable minSize) {
            this.props.minSize(minSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param compensateWithOnDemand This parameter is required.
         */
        public Builder compensateWithOnDemand(final java.lang.Boolean compensateWithOnDemand) {
            this.props.compensateWithOnDemand(compensateWithOnDemand);
            return this;
        }
        /**
         * @return {@code this}
         * @param compensateWithOnDemand This parameter is required.
         */
        public Builder compensateWithOnDemand(final com.aliyun.ros.cdk.core.IResolvable compensateWithOnDemand) {
            this.props.compensateWithOnDemand(compensateWithOnDemand);
            return this;
        }

        /**
         * @return {@code this}
         * @param containerGroupId This parameter is required.
         */
        public Builder containerGroupId(final java.lang.String containerGroupId) {
            this.props.containerGroupId(containerGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param containerGroupId This parameter is required.
         */
        public Builder containerGroupId(final com.aliyun.ros.cdk.core.IResolvable containerGroupId) {
            this.props.containerGroupId(containerGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceIds This parameter is required.
         */
        public Builder dbInstanceIds(final java.util.List<? extends java.lang.Object> dbInstanceIds) {
            this.props.dbInstanceIds(dbInstanceIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceIds This parameter is required.
         */
        public Builder dbInstanceIds(final com.aliyun.ros.cdk.core.IResolvable dbInstanceIds) {
            this.props.dbInstanceIds(dbInstanceIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultCooldown This parameter is required.
         */
        public Builder defaultCooldown(final java.lang.Number defaultCooldown) {
            this.props.defaultCooldown(defaultCooldown);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultCooldown This parameter is required.
         */
        public Builder defaultCooldown(final com.aliyun.ros.cdk.core.IResolvable defaultCooldown) {
            this.props.defaultCooldown(defaultCooldown);
            return this;
        }

        /**
         * @return {@code this}
         * @param desiredCapacity This parameter is required.
         */
        public Builder desiredCapacity(final java.lang.Number desiredCapacity) {
            this.props.desiredCapacity(desiredCapacity);
            return this;
        }
        /**
         * @return {@code this}
         * @param desiredCapacity This parameter is required.
         */
        public Builder desiredCapacity(final com.aliyun.ros.cdk.core.IResolvable desiredCapacity) {
            this.props.desiredCapacity(desiredCapacity);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupDeletionProtection This parameter is required.
         */
        public Builder groupDeletionProtection(final java.lang.Boolean groupDeletionProtection) {
            this.props.groupDeletionProtection(groupDeletionProtection);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupDeletionProtection This parameter is required.
         */
        public Builder groupDeletionProtection(final com.aliyun.ros.cdk.core.IResolvable groupDeletionProtection) {
            this.props.groupDeletionProtection(groupDeletionProtection);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupType This parameter is required.
         */
        public Builder groupType(final java.lang.String groupType) {
            this.props.groupType(groupType);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupType This parameter is required.
         */
        public Builder groupType(final com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.props.groupType(groupType);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheckType This parameter is required.
         */
        public Builder healthCheckType(final java.lang.String healthCheckType) {
            this.props.healthCheckType(healthCheckType);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheckType This parameter is required.
         */
        public Builder healthCheckType(final com.aliyun.ros.cdk.core.IResolvable healthCheckType) {
            this.props.healthCheckType(healthCheckType);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param launchTemplateId This parameter is required.
         */
        public Builder launchTemplateId(final java.lang.String launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }
        /**
         * @return {@code this}
         * @param launchTemplateId This parameter is required.
         */
        public Builder launchTemplateId(final com.aliyun.ros.cdk.core.IResolvable launchTemplateId) {
            this.props.launchTemplateId(launchTemplateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param launchTemplateVersion This parameter is required.
         */
        public Builder launchTemplateVersion(final java.lang.String launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param launchTemplateVersion This parameter is required.
         */
        public Builder launchTemplateVersion(final com.aliyun.ros.cdk.core.IResolvable launchTemplateVersion) {
            this.props.launchTemplateVersion(launchTemplateVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerIds This parameter is required.
         */
        public Builder loadBalancerIds(final java.util.List<? extends java.lang.Object> loadBalancerIds) {
            this.props.loadBalancerIds(loadBalancerIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancerIds This parameter is required.
         */
        public Builder loadBalancerIds(final com.aliyun.ros.cdk.core.IResolvable loadBalancerIds) {
            this.props.loadBalancerIds(loadBalancerIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param multiAzPolicy This parameter is required.
         */
        public Builder multiAzPolicy(final java.lang.String multiAzPolicy) {
            this.props.multiAzPolicy(multiAzPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param multiAzPolicy This parameter is required.
         */
        public Builder multiAzPolicy(final com.aliyun.ros.cdk.core.IResolvable multiAzPolicy) {
            this.props.multiAzPolicy(multiAzPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param notificationConfigurations This parameter is required.
         */
        public Builder notificationConfigurations(final com.aliyun.ros.cdk.core.IResolvable notificationConfigurations) {
            this.props.notificationConfigurations(notificationConfigurations);
            return this;
        }
        /**
         * @return {@code this}
         * @param notificationConfigurations This parameter is required.
         */
        public Builder notificationConfigurations(final java.util.List<? extends java.lang.Object> notificationConfigurations) {
            this.props.notificationConfigurations(notificationConfigurations);
            return this;
        }

        /**
         * @return {@code this}
         * @param onDemandBaseCapacity This parameter is required.
         */
        public Builder onDemandBaseCapacity(final java.lang.Number onDemandBaseCapacity) {
            this.props.onDemandBaseCapacity(onDemandBaseCapacity);
            return this;
        }
        /**
         * @return {@code this}
         * @param onDemandBaseCapacity This parameter is required.
         */
        public Builder onDemandBaseCapacity(final com.aliyun.ros.cdk.core.IResolvable onDemandBaseCapacity) {
            this.props.onDemandBaseCapacity(onDemandBaseCapacity);
            return this;
        }

        /**
         * @return {@code this}
         * @param onDemandPercentageAboveBaseCapacity This parameter is required.
         */
        public Builder onDemandPercentageAboveBaseCapacity(final java.lang.Number onDemandPercentageAboveBaseCapacity) {
            this.props.onDemandPercentageAboveBaseCapacity(onDemandPercentageAboveBaseCapacity);
            return this;
        }
        /**
         * @return {@code this}
         * @param onDemandPercentageAboveBaseCapacity This parameter is required.
         */
        public Builder onDemandPercentageAboveBaseCapacity(final com.aliyun.ros.cdk.core.IResolvable onDemandPercentageAboveBaseCapacity) {
            this.props.onDemandPercentageAboveBaseCapacity(onDemandPercentageAboveBaseCapacity);
            return this;
        }

        /**
         * @return {@code this}
         * @param protectedInstances This parameter is required.
         */
        public Builder protectedInstances(final java.util.List<? extends java.lang.Object> protectedInstances) {
            this.props.protectedInstances(protectedInstances);
            return this;
        }
        /**
         * @return {@code this}
         * @param protectedInstances This parameter is required.
         */
        public Builder protectedInstances(final com.aliyun.ros.cdk.core.IResolvable protectedInstances) {
            this.props.protectedInstances(protectedInstances);
            return this;
        }

        /**
         * @return {@code this}
         * @param removalPolicys This parameter is required.
         */
        public Builder removalPolicys(final java.util.List<? extends java.lang.Object> removalPolicys) {
            this.props.removalPolicys(removalPolicys);
            return this;
        }
        /**
         * @return {@code this}
         * @param removalPolicys This parameter is required.
         */
        public Builder removalPolicys(final com.aliyun.ros.cdk.core.IResolvable removalPolicys) {
            this.props.removalPolicys(removalPolicys);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingGroupName This parameter is required.
         */
        public Builder scalingGroupName(final java.lang.String scalingGroupName) {
            this.props.scalingGroupName(scalingGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingGroupName This parameter is required.
         */
        public Builder scalingGroupName(final com.aliyun.ros.cdk.core.IResolvable scalingGroupName) {
            this.props.scalingGroupName(scalingGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingPolicy This parameter is required.
         */
        public Builder scalingPolicy(final java.lang.String scalingPolicy) {
            this.props.scalingPolicy(scalingPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingPolicy This parameter is required.
         */
        public Builder scalingPolicy(final com.aliyun.ros.cdk.core.IResolvable scalingPolicy) {
            this.props.scalingPolicy(scalingPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotInstancePools This parameter is required.
         */
        public Builder spotInstancePools(final java.lang.Number spotInstancePools) {
            this.props.spotInstancePools(spotInstancePools);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotInstancePools This parameter is required.
         */
        public Builder spotInstancePools(final com.aliyun.ros.cdk.core.IResolvable spotInstancePools) {
            this.props.spotInstancePools(spotInstancePools);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotInstanceRemedy This parameter is required.
         */
        public Builder spotInstanceRemedy(final java.lang.Boolean spotInstanceRemedy) {
            this.props.spotInstanceRemedy(spotInstanceRemedy);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotInstanceRemedy This parameter is required.
         */
        public Builder spotInstanceRemedy(final com.aliyun.ros.cdk.core.IResolvable spotInstanceRemedy) {
            this.props.spotInstanceRemedy(spotInstanceRemedy);
            return this;
        }

        /**
         * @return {@code this}
         * @param standbyInstances This parameter is required.
         */
        public Builder standbyInstances(final java.util.List<? extends java.lang.Object> standbyInstances) {
            this.props.standbyInstances(standbyInstances);
            return this;
        }
        /**
         * @return {@code this}
         * @param standbyInstances This parameter is required.
         */
        public Builder standbyInstances(final com.aliyun.ros.cdk.core.IResolvable standbyInstances) {
            this.props.standbyInstances(standbyInstances);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ess.RosScalingGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchIds This parameter is required.
         */
        public Builder vSwitchIds(final java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchIds This parameter is required.
         */
        public Builder vSwitchIds(final com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ess.RosScalingGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.RosScalingGroup build() {
            return new com.aliyun.ros.cdk.ess.RosScalingGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
