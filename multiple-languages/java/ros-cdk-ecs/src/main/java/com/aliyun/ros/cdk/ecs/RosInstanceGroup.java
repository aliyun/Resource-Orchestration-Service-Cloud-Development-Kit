package com.aliyun.ros.cdk.ecs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ECS::InstanceGroup</code>, which is used to create a group of Elastic Compute Service (ECS) instances that have the same configurations.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:51.486Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceGroup")
public class RosInstanceGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstanceGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstanceGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosInstanceGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstanceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosInstanceGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostNames() {
        return software.amazon.jsii.Kernel.get(this, "attrHostNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInnerIps() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv6Addresses() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6Addresses", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIpv6AddressIds() {
        return software.amazon.jsii.Kernel.get(this, "attrIpv6AddressIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateIps() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicIps() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRelatedOrderIds() {
        return software.amazon.jsii.Kernel.get(this, "attrRelatedOrderIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneIds() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceType", java.util.Objects.requireNonNull(value, "instanceType is required"));
    }

    /**
     */
    public void setInstanceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceType", java.util.Objects.requireNonNull(value, "instanceType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMaxAmount() {
        return software.amazon.jsii.Kernel.get(this, "maxAmount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxAmount(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxAmount", java.util.Objects.requireNonNull(value, "maxAmount is required"));
    }

    /**
     */
    public void setMaxAmount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxAmount", java.util.Objects.requireNonNull(value, "maxAmount is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAffinity() {
        return software.amazon.jsii.Kernel.get(this, "affinity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAffinity(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "affinity", value);
    }

    /**
     */
    public void setAffinity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "affinity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllocatePublicIp() {
        return software.amazon.jsii.Kernel.get(this, "allocatePublicIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllocatePublicIp(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "allocatePublicIp", value);
    }

    /**
     */
    public void setAllocatePublicIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allocatePublicIp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoReleaseTime() {
        return software.amazon.jsii.Kernel.get(this, "autoReleaseTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoReleaseTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoReleaseTime", value);
    }

    /**
     */
    public void setAutoReleaseTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoReleaseTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenewPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriod", value);
    }

    /**
     */
    public void setAutoRenewPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenewPeriod", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCpuOptions() {
        return software.amazon.jsii.Kernel.get(this, "cpuOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCpuOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cpuOptions", value);
    }

    /**
     */
    public void setCpuOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.RosInstanceGroup.CpuOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "cpuOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCreditSpecification() {
        return software.amazon.jsii.Kernel.get(this, "creditSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCreditSpecification(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "creditSpecification", value);
    }

    /**
     */
    public void setCreditSpecification(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "creditSpecification", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostId() {
        return software.amazon.jsii.Kernel.get(this, "dedicatedHostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDedicatedHostId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostId", value);
    }

    /**
     */
    public void setDedicatedHostId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dedicatedHostId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionProtection(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionProtection", value);
    }

    /**
     */
    public void setDeletionProtection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionProtection", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetGroupNo() {
        return software.amazon.jsii.Kernel.get(this, "deploymentSetGroupNo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeploymentSetGroupNo(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "deploymentSetGroupNo", value);
    }

    /**
     */
    public void setDeploymentSetGroupNo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deploymentSetGroupNo", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeploymentSetId() {
        return software.amazon.jsii.Kernel.get(this, "deploymentSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeploymentSetId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deploymentSetId", value);
    }

    /**
     */
    public void setDeploymentSetId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deploymentSetId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDiskMappings() {
        return software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskMappings(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskMappings", value);
    }

    /**
     */
    public void setDiskMappings(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ecs.RosInstanceGroup.DiskMappingsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ecs.RosInstanceGroup.DiskMappingsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "diskMappings", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEniMappings() {
        return software.amazon.jsii.Kernel.get(this, "eniMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEniMappings(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eniMappings", value);
    }

    /**
     */
    public void setEniMappings(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ecs.RosInstanceGroup.EniMappingsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ecs.RosInstanceGroup.EniMappingsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "eniMappings", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
        return software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hostName", value);
    }

    /**
     */
    public void setHostName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHostNames() {
        return software.amazon.jsii.Kernel.get(this, "hostNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostNames(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostNames", value);
    }

    /**
     */
    public void setHostNames(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "hostNames", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHpcClusterId() {
        return software.amazon.jsii.Kernel.get(this, "hpcClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHpcClusterId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hpcClusterId", value);
    }

    /**
     */
    public void setHpcClusterId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hpcClusterId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "httpEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpEndpoint(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "httpEndpoint", value);
    }

    /**
     */
    public void setHttpEndpoint(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpEndpoint", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpTokens() {
        return software.amazon.jsii.Kernel.get(this, "httpTokens", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpTokens(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "httpTokens", value);
    }

    /**
     */
    public void setHttpTokens(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpTokens", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageFamily() {
        return software.amazon.jsii.Kernel.get(this, "imageFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageFamily(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageFamily", value);
    }

    /**
     */
    public void setImageFamily(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageFamily", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageId", value);
    }

    /**
     */
    public void setImageId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageOptions() {
        return software.amazon.jsii.Kernel.get(this, "imageOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageOptions", value);
    }

    /**
     */
    public void setImageOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.RosInstanceGroup.ImageOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "imageOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceChargeType", value);
    }

    /**
     */
    public void setInstanceChargeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceChargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", value);
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInternetChargeType() {
        return software.amazon.jsii.Kernel.get(this, "internetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternetChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "internetChargeType", value);
    }

    /**
     */
    public void setInternetChargeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internetChargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInternetMaxBandwidthOut() {
        return software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthOut", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInternetMaxBandwidthOut(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "internetMaxBandwidthOut", value);
    }

    /**
     */
    public void setInternetMaxBandwidthOut(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "internetMaxBandwidthOut", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIoOptimized(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ioOptimized", value);
    }

    /**
     */
    public void setIoOptimized(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ioOptimized", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpv6AddressCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ipv6AddressCount", value);
    }

    /**
     */
    public void setIpv6AddressCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipv6AddressCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Addresses() {
        return software.amazon.jsii.Kernel.get(this, "ipv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpv6Addresses(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "ipv6Addresses", value);
    }

    /**
     */
    public void setIpv6Addresses(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipv6Addresses", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKeyPairName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "keyPairName", value);
    }

    /**
     */
    public void setKeyPairName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "keyPairName", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getLaunchTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "launchTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLaunchTemplateName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateName", value);
    }

    /**
     */
    public void setLaunchTemplateName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "launchTemplateName", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceQueueNumber() {
        return software.amazon.jsii.Kernel.get(this, "networkInterfaceQueueNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkInterfaceQueueNumber(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "networkInterfaceQueueNumber", value);
    }

    /**
     */
    public void setNetworkInterfaceQueueNumber(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkInterfaceQueueNumber", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNetworkOptions() {
        return software.amazon.jsii.Kernel.get(this, "networkOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkOptions", value);
    }

    /**
     */
    public void setNetworkOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.RosInstanceGroup.NetworkOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "networkOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "networkType", value);
    }

    /**
     */
    public void setNetworkType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPasswordInherit() {
        return software.amazon.jsii.Kernel.get(this, "passwordInherit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPasswordInherit(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "passwordInherit", value);
    }

    /**
     */
    public void setPasswordInherit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "passwordInherit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrivateIpAddress(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "privateIpAddress", value);
    }

    /**
     */
    public void setPrivateIpAddress(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "privateIpAddress", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrivatePoolOptions() {
        return software.amazon.jsii.Kernel.get(this, "privatePoolOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrivatePoolOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "privatePoolOptions", value);
    }

    /**
     */
    public void setPrivatePoolOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.RosInstanceGroup.PrivatePoolOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "privatePoolOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRamRoleName() {
        return software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRamRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ramRoleName", value);
    }

    /**
     */
    public void setRamRoleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ramRoleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSchedulerOptions() {
        return software.amazon.jsii.Kernel.get(this, "schedulerOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSchedulerOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "schedulerOptions", value);
    }

    /**
     */
    public void setSchedulerOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.RosInstanceGroup.SchedulerOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "schedulerOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityEnhancementStrategy() {
        return software.amazon.jsii.Kernel.get(this, "securityEnhancementStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityEnhancementStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityEnhancementStrategy", value);
    }

    /**
     */
    public void setSecurityEnhancementStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityEnhancementStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupIds", value);
    }

    /**
     */
    public void setSecurityGroupIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "securityGroupIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityOptions() {
        return software.amazon.jsii.Kernel.get(this, "securityOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityOptions", value);
    }

    /**
     */
    public void setSecurityOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.RosInstanceGroup.SecurityOptionsProperty value) {
        software.amazon.jsii.Kernel.set(this, "securityOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotDuration() {
        return software.amazon.jsii.Kernel.get(this, "spotDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "spotDuration", value);
    }

    /**
     */
    public void setSpotDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotInterruptionBehavior() {
        return software.amazon.jsii.Kernel.get(this, "spotInterruptionBehavior", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotInterruptionBehavior(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotInterruptionBehavior", value);
    }

    /**
     */
    public void setSpotInterruptionBehavior(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotInterruptionBehavior", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotPriceLimit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotPriceLimit", value);
    }

    /**
     */
    public void setSpotPriceLimit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotPriceLimit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotStrategy", value);
    }

    /**
     */
    public void setSpotStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStorageSetId() {
        return software.amazon.jsii.Kernel.get(this, "storageSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStorageSetId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "storageSetId", value);
    }

    /**
     */
    public void setStorageSetId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "storageSetId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStorageSetPartitionNumber() {
        return software.amazon.jsii.Kernel.get(this, "storageSetPartitionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStorageSetPartitionNumber(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "storageSetPartitionNumber", value);
    }

    /**
     */
    public void setStorageSetPartitionNumber(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "storageSetPartitionNumber", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskAutoSnapshotPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskAutoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskAutoSnapshotPolicyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskAutoSnapshotPolicyId", value);
    }

    /**
     */
    public void setSystemDiskAutoSnapshotPolicyId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskAutoSnapshotPolicyId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskBurstingEnabled() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskBurstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskBurstingEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskBurstingEnabled", value);
    }

    /**
     */
    public void setSystemDiskBurstingEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskBurstingEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskCategory", value);
    }

    /**
     */
    public void setSystemDiskCategory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskCategory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDescription() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskDescription", value);
    }

    /**
     */
    public void setSystemDiskDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskDiskName() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskDiskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskDiskName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskDiskName", value);
    }

    /**
     */
    public void setSystemDiskDiskName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskDiskName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskEncryptAlgorithm() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskEncryptAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskEncryptAlgorithm(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskEncryptAlgorithm", value);
    }

    /**
     */
    public void setSystemDiskEncryptAlgorithm(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskEncryptAlgorithm", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskEncrypted() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskEncrypted(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskEncrypted", value);
    }

    /**
     */
    public void setSystemDiskEncrypted(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskEncrypted", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskKmsKeyId() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskKmsKeyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskKmsKeyId", value);
    }

    /**
     */
    public void setSystemDiskKmsKeyId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskKmsKeyId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskPerformanceLevel() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskPerformanceLevel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskPerformanceLevel", value);
    }

    /**
     */
    public void setSystemDiskPerformanceLevel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskPerformanceLevel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskProvisionedIops() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskProvisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskProvisionedIops(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskProvisionedIops", value);
    }

    /**
     */
    public void setSystemDiskProvisionedIops(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskProvisionedIops", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskSize() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskSize", value);
    }

    /**
     */
    public void setSystemDiskSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskStorageClusterId() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskStorageClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskStorageClusterId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskStorageClusterId", value);
    }

    /**
     */
    public void setSystemDiskStorageClusterId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskStorageClusterId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTenancy() {
        return software.amazon.jsii.Kernel.get(this, "tenancy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTenancy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tenancy", value);
    }

    /**
     */
    public void setTenancy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tenancy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUniqueSuffix() {
        return software.amazon.jsii.Kernel.get(this, "uniqueSuffix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUniqueSuffix(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "uniqueSuffix", value);
    }

    /**
     */
    public void setUniqueSuffix(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "uniqueSuffix", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUpdatePolicy() {
        return software.amazon.jsii.Kernel.get(this, "updatePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUpdatePolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "updatePolicy", value);
    }

    /**
     */
    public void setUpdatePolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "updatePolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUseAdditionalService() {
        return software.amazon.jsii.Kernel.get(this, "useAdditionalService", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUseAdditionalService(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "useAdditionalService", value);
    }

    /**
     */
    public void setUseAdditionalService(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "useAdditionalService", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
        return software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserData(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userData", value);
    }

    /**
     */
    public void setUserData(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userData", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneIds() {
        return software.amazon.jsii.Kernel.get(this, "zoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneIds", value);
    }

    /**
     */
    public void setZoneIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "zoneIds", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceGroup.CpuOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(CpuOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CpuOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCore() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getThreadsPerCore() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CpuOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CpuOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CpuOptionsProperty> {
            java.lang.Object core;
            java.lang.Object threadsPerCore;

            /**
             * Sets the value of {@link CpuOptionsProperty#getCore}
             * @param core the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder core(java.lang.Number core) {
                this.core = core;
                return this;
            }

            /**
             * Sets the value of {@link CpuOptionsProperty#getCore}
             * @param core the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder core(com.aliyun.ros.cdk.core.IResolvable core) {
                this.core = core;
                return this;
            }

            /**
             * Sets the value of {@link CpuOptionsProperty#getThreadsPerCore}
             * @param threadsPerCore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threadsPerCore(java.lang.Number threadsPerCore) {
                this.threadsPerCore = threadsPerCore;
                return this;
            }

            /**
             * Sets the value of {@link CpuOptionsProperty#getThreadsPerCore}
             * @param threadsPerCore the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder threadsPerCore(com.aliyun.ros.cdk.core.IResolvable threadsPerCore) {
                this.threadsPerCore = threadsPerCore;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CpuOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CpuOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CpuOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CpuOptionsProperty {
            private final java.lang.Object core;
            private final java.lang.Object threadsPerCore;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.core = software.amazon.jsii.Kernel.get(this, "core", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.threadsPerCore = software.amazon.jsii.Kernel.get(this, "threadsPerCore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.core = builder.core;
                this.threadsPerCore = builder.threadsPerCore;
            }

            @Override
            public final java.lang.Object getCore() {
                return this.core;
            }

            @Override
            public final java.lang.Object getThreadsPerCore() {
                return this.threadsPerCore;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCore() != null) {
                    data.set("core", om.valueToTree(this.getCore()));
                }
                if (this.getThreadsPerCore() != null) {
                    data.set("threadsPerCore", om.valueToTree(this.getThreadsPerCore()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInstanceGroup.CpuOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CpuOptionsProperty.Jsii$Proxy that = (CpuOptionsProperty.Jsii$Proxy) o;

                if (this.core != null ? !this.core.equals(that.core) : that.core != null) return false;
                return this.threadsPerCore != null ? this.threadsPerCore.equals(that.threadsPerCore) : that.threadsPerCore == null;
            }

            @Override
            public final int hashCode() {
                int result = this.core != null ? this.core.hashCode() : 0;
                result = 31 * result + (this.threadsPerCore != null ? this.threadsPerCore.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceGroup.DiskMappingsProperty")
    @software.amazon.jsii.Jsii.Proxy(DiskMappingsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DiskMappingsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAutoSnapshotPolicyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getBurstingEnabled() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDevice() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDiskName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEncrypted() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getProvisionedIops() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSnapshotId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStorageClusterId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DiskMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DiskMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DiskMappingsProperty> {
            java.lang.Object size;
            java.lang.Object autoSnapshotPolicyId;
            java.lang.Object burstingEnabled;
            java.lang.Object category;
            java.lang.Object description;
            java.lang.Object device;
            java.lang.Object diskName;
            java.lang.Object encrypted;
            java.lang.Object kmsKeyId;
            java.lang.Object performanceLevel;
            java.lang.Object provisionedIops;
            java.lang.Object snapshotId;
            java.lang.Object storageClusterId;

            /**
             * Sets the value of {@link DiskMappingsProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.String size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(com.aliyun.ros.cdk.core.IResolvable size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getAutoSnapshotPolicyId}
             * @param autoSnapshotPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoSnapshotPolicyId(java.lang.String autoSnapshotPolicyId) {
                this.autoSnapshotPolicyId = autoSnapshotPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getAutoSnapshotPolicyId}
             * @param autoSnapshotPolicyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder autoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyId) {
                this.autoSnapshotPolicyId = autoSnapshotPolicyId;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getBurstingEnabled}
             * @param burstingEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder burstingEnabled(java.lang.Boolean burstingEnabled) {
                this.burstingEnabled = burstingEnabled;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getBurstingEnabled}
             * @param burstingEnabled the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder burstingEnabled(com.aliyun.ros.cdk.core.IResolvable burstingEnabled) {
                this.burstingEnabled = burstingEnabled;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getDevice}
             * @param device the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder device(java.lang.String device) {
                this.device = device;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getDevice}
             * @param device the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder device(com.aliyun.ros.cdk.core.IResolvable device) {
                this.device = device;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getDiskName}
             * @param diskName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskName(java.lang.String diskName) {
                this.diskName = diskName;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getDiskName}
             * @param diskName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskName(com.aliyun.ros.cdk.core.IResolvable diskName) {
                this.diskName = diskName;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getEncrypted}
             * @param encrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypted(java.lang.String encrypted) {
                this.encrypted = encrypted;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getEncrypted}
             * @param encrypted the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encrypted(com.aliyun.ros.cdk.core.IResolvable encrypted) {
                this.encrypted = encrypted;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getKmsKeyId}
             * @param kmsKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kmsKeyId(java.lang.String kmsKeyId) {
                this.kmsKeyId = kmsKeyId;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getKmsKeyId}
             * @param kmsKeyId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
                this.kmsKeyId = kmsKeyId;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(java.lang.String performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(com.aliyun.ros.cdk.core.IResolvable performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getProvisionedIops}
             * @param provisionedIops the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder provisionedIops(java.lang.Number provisionedIops) {
                this.provisionedIops = provisionedIops;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getProvisionedIops}
             * @param provisionedIops the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder provisionedIops(com.aliyun.ros.cdk.core.IResolvable provisionedIops) {
                this.provisionedIops = provisionedIops;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getSnapshotId}
             * @param snapshotId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder snapshotId(java.lang.String snapshotId) {
                this.snapshotId = snapshotId;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getSnapshotId}
             * @param snapshotId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
                this.snapshotId = snapshotId;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getStorageClusterId}
             * @param storageClusterId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storageClusterId(java.lang.String storageClusterId) {
                this.storageClusterId = storageClusterId;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getStorageClusterId}
             * @param storageClusterId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storageClusterId(com.aliyun.ros.cdk.core.IResolvable storageClusterId) {
                this.storageClusterId = storageClusterId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DiskMappingsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DiskMappingsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DiskMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DiskMappingsProperty {
            private final java.lang.Object size;
            private final java.lang.Object autoSnapshotPolicyId;
            private final java.lang.Object burstingEnabled;
            private final java.lang.Object category;
            private final java.lang.Object description;
            private final java.lang.Object device;
            private final java.lang.Object diskName;
            private final java.lang.Object encrypted;
            private final java.lang.Object kmsKeyId;
            private final java.lang.Object performanceLevel;
            private final java.lang.Object provisionedIops;
            private final java.lang.Object snapshotId;
            private final java.lang.Object storageClusterId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.autoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.burstingEnabled = software.amazon.jsii.Kernel.get(this, "burstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.device = software.amazon.jsii.Kernel.get(this, "device", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskName = software.amazon.jsii.Kernel.get(this, "diskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.encrypted = software.amazon.jsii.Kernel.get(this, "encrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.provisionedIops = software.amazon.jsii.Kernel.get(this, "provisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.storageClusterId = software.amazon.jsii.Kernel.get(this, "storageClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.size = java.util.Objects.requireNonNull(builder.size, "size is required");
                this.autoSnapshotPolicyId = builder.autoSnapshotPolicyId;
                this.burstingEnabled = builder.burstingEnabled;
                this.category = builder.category;
                this.description = builder.description;
                this.device = builder.device;
                this.diskName = builder.diskName;
                this.encrypted = builder.encrypted;
                this.kmsKeyId = builder.kmsKeyId;
                this.performanceLevel = builder.performanceLevel;
                this.provisionedIops = builder.provisionedIops;
                this.snapshotId = builder.snapshotId;
                this.storageClusterId = builder.storageClusterId;
            }

            @Override
            public final java.lang.Object getSize() {
                return this.size;
            }

            @Override
            public final java.lang.Object getAutoSnapshotPolicyId() {
                return this.autoSnapshotPolicyId;
            }

            @Override
            public final java.lang.Object getBurstingEnabled() {
                return this.burstingEnabled;
            }

            @Override
            public final java.lang.Object getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getDevice() {
                return this.device;
            }

            @Override
            public final java.lang.Object getDiskName() {
                return this.diskName;
            }

            @Override
            public final java.lang.Object getEncrypted() {
                return this.encrypted;
            }

            @Override
            public final java.lang.Object getKmsKeyId() {
                return this.kmsKeyId;
            }

            @Override
            public final java.lang.Object getPerformanceLevel() {
                return this.performanceLevel;
            }

            @Override
            public final java.lang.Object getProvisionedIops() {
                return this.provisionedIops;
            }

            @Override
            public final java.lang.Object getSnapshotId() {
                return this.snapshotId;
            }

            @Override
            public final java.lang.Object getStorageClusterId() {
                return this.storageClusterId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("size", om.valueToTree(this.getSize()));
                if (this.getAutoSnapshotPolicyId() != null) {
                    data.set("autoSnapshotPolicyId", om.valueToTree(this.getAutoSnapshotPolicyId()));
                }
                if (this.getBurstingEnabled() != null) {
                    data.set("burstingEnabled", om.valueToTree(this.getBurstingEnabled()));
                }
                if (this.getCategory() != null) {
                    data.set("category", om.valueToTree(this.getCategory()));
                }
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getDevice() != null) {
                    data.set("device", om.valueToTree(this.getDevice()));
                }
                if (this.getDiskName() != null) {
                    data.set("diskName", om.valueToTree(this.getDiskName()));
                }
                if (this.getEncrypted() != null) {
                    data.set("encrypted", om.valueToTree(this.getEncrypted()));
                }
                if (this.getKmsKeyId() != null) {
                    data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
                }
                if (this.getPerformanceLevel() != null) {
                    data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
                }
                if (this.getProvisionedIops() != null) {
                    data.set("provisionedIops", om.valueToTree(this.getProvisionedIops()));
                }
                if (this.getSnapshotId() != null) {
                    data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
                }
                if (this.getStorageClusterId() != null) {
                    data.set("storageClusterId", om.valueToTree(this.getStorageClusterId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInstanceGroup.DiskMappingsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DiskMappingsProperty.Jsii$Proxy that = (DiskMappingsProperty.Jsii$Proxy) o;

                if (!size.equals(that.size)) return false;
                if (this.autoSnapshotPolicyId != null ? !this.autoSnapshotPolicyId.equals(that.autoSnapshotPolicyId) : that.autoSnapshotPolicyId != null) return false;
                if (this.burstingEnabled != null ? !this.burstingEnabled.equals(that.burstingEnabled) : that.burstingEnabled != null) return false;
                if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.device != null ? !this.device.equals(that.device) : that.device != null) return false;
                if (this.diskName != null ? !this.diskName.equals(that.diskName) : that.diskName != null) return false;
                if (this.encrypted != null ? !this.encrypted.equals(that.encrypted) : that.encrypted != null) return false;
                if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
                if (this.performanceLevel != null ? !this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel != null) return false;
                if (this.provisionedIops != null ? !this.provisionedIops.equals(that.provisionedIops) : that.provisionedIops != null) return false;
                if (this.snapshotId != null ? !this.snapshotId.equals(that.snapshotId) : that.snapshotId != null) return false;
                return this.storageClusterId != null ? this.storageClusterId.equals(that.storageClusterId) : that.storageClusterId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.size.hashCode();
                result = 31 * result + (this.autoSnapshotPolicyId != null ? this.autoSnapshotPolicyId.hashCode() : 0);
                result = 31 * result + (this.burstingEnabled != null ? this.burstingEnabled.hashCode() : 0);
                result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.device != null ? this.device.hashCode() : 0);
                result = 31 * result + (this.diskName != null ? this.diskName.hashCode() : 0);
                result = 31 * result + (this.encrypted != null ? this.encrypted.hashCode() : 0);
                result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
                result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
                result = 31 * result + (this.provisionedIops != null ? this.provisionedIops.hashCode() : 0);
                result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
                result = 31 * result + (this.storageClusterId != null ? this.storageClusterId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceGroup.EniMappingsProperty")
    @software.amazon.jsii.Jsii.Proxy(EniMappingsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EniMappingsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteOnRelease() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6Addresses() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkCardIndex() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNetworkInterfaceTrafficMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrimaryIpAddress() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueueNumber() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getQueuePairNumber() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EniMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EniMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EniMappingsProperty> {
            java.lang.Object deleteOnRelease;
            java.lang.Object description;
            java.lang.Object instanceType;
            java.lang.Object ipv6AddressCount;
            java.lang.Object ipv6Addresses;
            java.lang.Object networkCardIndex;
            java.lang.Object networkInterfaceId;
            java.lang.Object networkInterfaceName;
            java.lang.Object networkInterfaceTrafficMode;
            java.lang.Object primaryIpAddress;
            java.lang.Object queueNumber;
            java.lang.Object queuePairNumber;
            java.lang.Object securityGroupId;
            java.lang.Object securityGroupIds;
            java.lang.Object vSwitchId;

            /**
             * Sets the value of {@link EniMappingsProperty#getDeleteOnRelease}
             * @param deleteOnRelease the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deleteOnRelease(java.lang.Boolean deleteOnRelease) {
                this.deleteOnRelease = deleteOnRelease;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getDeleteOnRelease}
             * @param deleteOnRelease the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder deleteOnRelease(com.aliyun.ros.cdk.core.IResolvable deleteOnRelease) {
                this.deleteOnRelease = deleteOnRelease;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getInstanceType}
             * @param instanceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getIpv6AddressCount}
             * @param ipv6AddressCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
                this.ipv6AddressCount = ipv6AddressCount;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getIpv6AddressCount}
             * @param ipv6AddressCount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
                this.ipv6AddressCount = ipv6AddressCount;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getIpv6Addresses}
             * @param ipv6Addresses the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6Addresses(com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
                this.ipv6Addresses = ipv6Addresses;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getIpv6Addresses}
             * @param ipv6Addresses the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipv6Addresses(java.util.List<? extends java.lang.Object> ipv6Addresses) {
                this.ipv6Addresses = ipv6Addresses;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getNetworkCardIndex}
             * @param networkCardIndex the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkCardIndex(java.lang.Number networkCardIndex) {
                this.networkCardIndex = networkCardIndex;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getNetworkCardIndex}
             * @param networkCardIndex the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkCardIndex(com.aliyun.ros.cdk.core.IResolvable networkCardIndex) {
                this.networkCardIndex = networkCardIndex;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getNetworkInterfaceId}
             * @param networkInterfaceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaceId(java.lang.String networkInterfaceId) {
                this.networkInterfaceId = networkInterfaceId;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getNetworkInterfaceId}
             * @param networkInterfaceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaceId(com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
                this.networkInterfaceId = networkInterfaceId;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getNetworkInterfaceName}
             * @param networkInterfaceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaceName(java.lang.String networkInterfaceName) {
                this.networkInterfaceName = networkInterfaceName;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getNetworkInterfaceName}
             * @param networkInterfaceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaceName(com.aliyun.ros.cdk.core.IResolvable networkInterfaceName) {
                this.networkInterfaceName = networkInterfaceName;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getNetworkInterfaceTrafficMode}
             * @param networkInterfaceTrafficMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaceTrafficMode(java.lang.String networkInterfaceTrafficMode) {
                this.networkInterfaceTrafficMode = networkInterfaceTrafficMode;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getNetworkInterfaceTrafficMode}
             * @param networkInterfaceTrafficMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder networkInterfaceTrafficMode(com.aliyun.ros.cdk.core.IResolvable networkInterfaceTrafficMode) {
                this.networkInterfaceTrafficMode = networkInterfaceTrafficMode;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getPrimaryIpAddress}
             * @param primaryIpAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder primaryIpAddress(java.lang.String primaryIpAddress) {
                this.primaryIpAddress = primaryIpAddress;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getPrimaryIpAddress}
             * @param primaryIpAddress the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder primaryIpAddress(com.aliyun.ros.cdk.core.IResolvable primaryIpAddress) {
                this.primaryIpAddress = primaryIpAddress;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getQueueNumber}
             * @param queueNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queueNumber(java.lang.Number queueNumber) {
                this.queueNumber = queueNumber;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getQueueNumber}
             * @param queueNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queueNumber(com.aliyun.ros.cdk.core.IResolvable queueNumber) {
                this.queueNumber = queueNumber;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getQueuePairNumber}
             * @param queuePairNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queuePairNumber(java.lang.Number queuePairNumber) {
                this.queuePairNumber = queuePairNumber;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getQueuePairNumber}
             * @param queuePairNumber the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder queuePairNumber(com.aliyun.ros.cdk.core.IResolvable queuePairNumber) {
                this.queuePairNumber = queuePairNumber;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(java.lang.String securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getSecurityGroupId}
             * @param securityGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
                this.securityGroupId = securityGroupId;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getSecurityGroupIds}
             * @param securityGroupIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
                this.securityGroupIds = securityGroupIds;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getSecurityGroupIds}
             * @param securityGroupIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
                this.securityGroupIds = securityGroupIds;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getVSwitchId}
             * @param vSwitchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link EniMappingsProperty#getVSwitchId}
             * @param vSwitchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EniMappingsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EniMappingsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EniMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EniMappingsProperty {
            private final java.lang.Object deleteOnRelease;
            private final java.lang.Object description;
            private final java.lang.Object instanceType;
            private final java.lang.Object ipv6AddressCount;
            private final java.lang.Object ipv6Addresses;
            private final java.lang.Object networkCardIndex;
            private final java.lang.Object networkInterfaceId;
            private final java.lang.Object networkInterfaceName;
            private final java.lang.Object networkInterfaceTrafficMode;
            private final java.lang.Object primaryIpAddress;
            private final java.lang.Object queueNumber;
            private final java.lang.Object queuePairNumber;
            private final java.lang.Object securityGroupId;
            private final java.lang.Object securityGroupIds;
            private final java.lang.Object vSwitchId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.deleteOnRelease = software.amazon.jsii.Kernel.get(this, "deleteOnRelease", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipv6Addresses = software.amazon.jsii.Kernel.get(this, "ipv6Addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.networkCardIndex = software.amazon.jsii.Kernel.get(this, "networkCardIndex", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.networkInterfaceId = software.amazon.jsii.Kernel.get(this, "networkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.networkInterfaceName = software.amazon.jsii.Kernel.get(this, "networkInterfaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.networkInterfaceTrafficMode = software.amazon.jsii.Kernel.get(this, "networkInterfaceTrafficMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.primaryIpAddress = software.amazon.jsii.Kernel.get(this, "primaryIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queueNumber = software.amazon.jsii.Kernel.get(this, "queueNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.queuePairNumber = software.amazon.jsii.Kernel.get(this, "queuePairNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.deleteOnRelease = builder.deleteOnRelease;
                this.description = builder.description;
                this.instanceType = builder.instanceType;
                this.ipv6AddressCount = builder.ipv6AddressCount;
                this.ipv6Addresses = builder.ipv6Addresses;
                this.networkCardIndex = builder.networkCardIndex;
                this.networkInterfaceId = builder.networkInterfaceId;
                this.networkInterfaceName = builder.networkInterfaceName;
                this.networkInterfaceTrafficMode = builder.networkInterfaceTrafficMode;
                this.primaryIpAddress = builder.primaryIpAddress;
                this.queueNumber = builder.queueNumber;
                this.queuePairNumber = builder.queuePairNumber;
                this.securityGroupId = builder.securityGroupId;
                this.securityGroupIds = builder.securityGroupIds;
                this.vSwitchId = builder.vSwitchId;
            }

            @Override
            public final java.lang.Object getDeleteOnRelease() {
                return this.deleteOnRelease;
            }

            @Override
            public final java.lang.Object getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
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
            public final java.lang.Object getNetworkCardIndex() {
                return this.networkCardIndex;
            }

            @Override
            public final java.lang.Object getNetworkInterfaceId() {
                return this.networkInterfaceId;
            }

            @Override
            public final java.lang.Object getNetworkInterfaceName() {
                return this.networkInterfaceName;
            }

            @Override
            public final java.lang.Object getNetworkInterfaceTrafficMode() {
                return this.networkInterfaceTrafficMode;
            }

            @Override
            public final java.lang.Object getPrimaryIpAddress() {
                return this.primaryIpAddress;
            }

            @Override
            public final java.lang.Object getQueueNumber() {
                return this.queueNumber;
            }

            @Override
            public final java.lang.Object getQueuePairNumber() {
                return this.queuePairNumber;
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
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDeleteOnRelease() != null) {
                    data.set("deleteOnRelease", om.valueToTree(this.getDeleteOnRelease()));
                }
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getInstanceType() != null) {
                    data.set("instanceType", om.valueToTree(this.getInstanceType()));
                }
                if (this.getIpv6AddressCount() != null) {
                    data.set("ipv6AddressCount", om.valueToTree(this.getIpv6AddressCount()));
                }
                if (this.getIpv6Addresses() != null) {
                    data.set("ipv6Addresses", om.valueToTree(this.getIpv6Addresses()));
                }
                if (this.getNetworkCardIndex() != null) {
                    data.set("networkCardIndex", om.valueToTree(this.getNetworkCardIndex()));
                }
                if (this.getNetworkInterfaceId() != null) {
                    data.set("networkInterfaceId", om.valueToTree(this.getNetworkInterfaceId()));
                }
                if (this.getNetworkInterfaceName() != null) {
                    data.set("networkInterfaceName", om.valueToTree(this.getNetworkInterfaceName()));
                }
                if (this.getNetworkInterfaceTrafficMode() != null) {
                    data.set("networkInterfaceTrafficMode", om.valueToTree(this.getNetworkInterfaceTrafficMode()));
                }
                if (this.getPrimaryIpAddress() != null) {
                    data.set("primaryIpAddress", om.valueToTree(this.getPrimaryIpAddress()));
                }
                if (this.getQueueNumber() != null) {
                    data.set("queueNumber", om.valueToTree(this.getQueueNumber()));
                }
                if (this.getQueuePairNumber() != null) {
                    data.set("queuePairNumber", om.valueToTree(this.getQueuePairNumber()));
                }
                if (this.getSecurityGroupId() != null) {
                    data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
                }
                if (this.getSecurityGroupIds() != null) {
                    data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));
                }
                if (this.getVSwitchId() != null) {
                    data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInstanceGroup.EniMappingsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EniMappingsProperty.Jsii$Proxy that = (EniMappingsProperty.Jsii$Proxy) o;

                if (this.deleteOnRelease != null ? !this.deleteOnRelease.equals(that.deleteOnRelease) : that.deleteOnRelease != null) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
                if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
                if (this.ipv6Addresses != null ? !this.ipv6Addresses.equals(that.ipv6Addresses) : that.ipv6Addresses != null) return false;
                if (this.networkCardIndex != null ? !this.networkCardIndex.equals(that.networkCardIndex) : that.networkCardIndex != null) return false;
                if (this.networkInterfaceId != null ? !this.networkInterfaceId.equals(that.networkInterfaceId) : that.networkInterfaceId != null) return false;
                if (this.networkInterfaceName != null ? !this.networkInterfaceName.equals(that.networkInterfaceName) : that.networkInterfaceName != null) return false;
                if (this.networkInterfaceTrafficMode != null ? !this.networkInterfaceTrafficMode.equals(that.networkInterfaceTrafficMode) : that.networkInterfaceTrafficMode != null) return false;
                if (this.primaryIpAddress != null ? !this.primaryIpAddress.equals(that.primaryIpAddress) : that.primaryIpAddress != null) return false;
                if (this.queueNumber != null ? !this.queueNumber.equals(that.queueNumber) : that.queueNumber != null) return false;
                if (this.queuePairNumber != null ? !this.queuePairNumber.equals(that.queuePairNumber) : that.queuePairNumber != null) return false;
                if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
                if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
                return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.deleteOnRelease != null ? this.deleteOnRelease.hashCode() : 0;
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
                result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
                result = 31 * result + (this.ipv6Addresses != null ? this.ipv6Addresses.hashCode() : 0);
                result = 31 * result + (this.networkCardIndex != null ? this.networkCardIndex.hashCode() : 0);
                result = 31 * result + (this.networkInterfaceId != null ? this.networkInterfaceId.hashCode() : 0);
                result = 31 * result + (this.networkInterfaceName != null ? this.networkInterfaceName.hashCode() : 0);
                result = 31 * result + (this.networkInterfaceTrafficMode != null ? this.networkInterfaceTrafficMode.hashCode() : 0);
                result = 31 * result + (this.primaryIpAddress != null ? this.primaryIpAddress.hashCode() : 0);
                result = 31 * result + (this.queueNumber != null ? this.queueNumber.hashCode() : 0);
                result = 31 * result + (this.queuePairNumber != null ? this.queuePairNumber.hashCode() : 0);
                result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
                result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
                result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceGroup.ImageOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(ImageOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ImageOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLoginAsNonRoot() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ImageOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ImageOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ImageOptionsProperty> {
            java.lang.Object loginAsNonRoot;

            /**
             * Sets the value of {@link ImageOptionsProperty#getLoginAsNonRoot}
             * @param loginAsNonRoot the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder loginAsNonRoot(java.lang.Boolean loginAsNonRoot) {
                this.loginAsNonRoot = loginAsNonRoot;
                return this;
            }

            /**
             * Sets the value of {@link ImageOptionsProperty#getLoginAsNonRoot}
             * @param loginAsNonRoot the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder loginAsNonRoot(com.aliyun.ros.cdk.core.IResolvable loginAsNonRoot) {
                this.loginAsNonRoot = loginAsNonRoot;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ImageOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ImageOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ImageOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ImageOptionsProperty {
            private final java.lang.Object loginAsNonRoot;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.loginAsNonRoot = software.amazon.jsii.Kernel.get(this, "loginAsNonRoot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.loginAsNonRoot = builder.loginAsNonRoot;
            }

            @Override
            public final java.lang.Object getLoginAsNonRoot() {
                return this.loginAsNonRoot;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getLoginAsNonRoot() != null) {
                    data.set("loginAsNonRoot", om.valueToTree(this.getLoginAsNonRoot()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInstanceGroup.ImageOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ImageOptionsProperty.Jsii$Proxy that = (ImageOptionsProperty.Jsii$Proxy) o;

                return this.loginAsNonRoot != null ? this.loginAsNonRoot.equals(that.loginAsNonRoot) : that.loginAsNonRoot == null;
            }

            @Override
            public final int hashCode() {
                int result = this.loginAsNonRoot != null ? this.loginAsNonRoot.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceGroup.NetworkOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(NetworkOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface NetworkOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableJumboFrame() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link NetworkOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link NetworkOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<NetworkOptionsProperty> {
            java.lang.Object enableJumboFrame;

            /**
             * Sets the value of {@link NetworkOptionsProperty#getEnableJumboFrame}
             * @param enableJumboFrame the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableJumboFrame(java.lang.Boolean enableJumboFrame) {
                this.enableJumboFrame = enableJumboFrame;
                return this;
            }

            /**
             * Sets the value of {@link NetworkOptionsProperty#getEnableJumboFrame}
             * @param enableJumboFrame the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableJumboFrame(com.aliyun.ros.cdk.core.IResolvable enableJumboFrame) {
                this.enableJumboFrame = enableJumboFrame;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link NetworkOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public NetworkOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link NetworkOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkOptionsProperty {
            private final java.lang.Object enableJumboFrame;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enableJumboFrame = software.amazon.jsii.Kernel.get(this, "enableJumboFrame", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enableJumboFrame = builder.enableJumboFrame;
            }

            @Override
            public final java.lang.Object getEnableJumboFrame() {
                return this.enableJumboFrame;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEnableJumboFrame() != null) {
                    data.set("enableJumboFrame", om.valueToTree(this.getEnableJumboFrame()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInstanceGroup.NetworkOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                NetworkOptionsProperty.Jsii$Proxy that = (NetworkOptionsProperty.Jsii$Proxy) o;

                return this.enableJumboFrame != null ? this.enableJumboFrame.equals(that.enableJumboFrame) : that.enableJumboFrame == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enableJumboFrame != null ? this.enableJumboFrame.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceGroup.PrivatePoolOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(PrivatePoolOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PrivatePoolOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMatchCriteria() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PrivatePoolOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PrivatePoolOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PrivatePoolOptionsProperty> {
            java.lang.Object id;
            java.lang.Object matchCriteria;

            /**
             * Sets the value of {@link PrivatePoolOptionsProperty#getId}
             * @param id the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder id(java.lang.String id) {
                this.id = id;
                return this;
            }

            /**
             * Sets the value of {@link PrivatePoolOptionsProperty#getId}
             * @param id the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder id(com.aliyun.ros.cdk.core.IResolvable id) {
                this.id = id;
                return this;
            }

            /**
             * Sets the value of {@link PrivatePoolOptionsProperty#getMatchCriteria}
             * @param matchCriteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchCriteria(java.lang.String matchCriteria) {
                this.matchCriteria = matchCriteria;
                return this;
            }

            /**
             * Sets the value of {@link PrivatePoolOptionsProperty#getMatchCriteria}
             * @param matchCriteria the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder matchCriteria(com.aliyun.ros.cdk.core.IResolvable matchCriteria) {
                this.matchCriteria = matchCriteria;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PrivatePoolOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PrivatePoolOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PrivatePoolOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrivatePoolOptionsProperty {
            private final java.lang.Object id;
            private final java.lang.Object matchCriteria;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.id = software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.matchCriteria = software.amazon.jsii.Kernel.get(this, "matchCriteria", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.id = builder.id;
                this.matchCriteria = builder.matchCriteria;
            }

            @Override
            public final java.lang.Object getId() {
                return this.id;
            }

            @Override
            public final java.lang.Object getMatchCriteria() {
                return this.matchCriteria;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getId() != null) {
                    data.set("id", om.valueToTree(this.getId()));
                }
                if (this.getMatchCriteria() != null) {
                    data.set("matchCriteria", om.valueToTree(this.getMatchCriteria()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInstanceGroup.PrivatePoolOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PrivatePoolOptionsProperty.Jsii$Proxy that = (PrivatePoolOptionsProperty.Jsii$Proxy) o;

                if (this.id != null ? !this.id.equals(that.id) : that.id != null) return false;
                return this.matchCriteria != null ? this.matchCriteria.equals(that.matchCriteria) : that.matchCriteria == null;
            }

            @Override
            public final int hashCode() {
                int result = this.id != null ? this.id.hashCode() : 0;
                result = 31 * result + (this.matchCriteria != null ? this.matchCriteria.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceGroup.SchedulerOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(SchedulerOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SchedulerOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostClusterId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getManagedPrivateSpaceId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SchedulerOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SchedulerOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SchedulerOptionsProperty> {
            java.lang.Object dedicatedHostClusterId;
            java.lang.Object managedPrivateSpaceId;

            /**
             * Sets the value of {@link SchedulerOptionsProperty#getDedicatedHostClusterId}
             * @param dedicatedHostClusterId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dedicatedHostClusterId(java.lang.String dedicatedHostClusterId) {
                this.dedicatedHostClusterId = dedicatedHostClusterId;
                return this;
            }

            /**
             * Sets the value of {@link SchedulerOptionsProperty#getDedicatedHostClusterId}
             * @param dedicatedHostClusterId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dedicatedHostClusterId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostClusterId) {
                this.dedicatedHostClusterId = dedicatedHostClusterId;
                return this;
            }

            /**
             * Sets the value of {@link SchedulerOptionsProperty#getManagedPrivateSpaceId}
             * @param managedPrivateSpaceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedPrivateSpaceId(java.lang.String managedPrivateSpaceId) {
                this.managedPrivateSpaceId = managedPrivateSpaceId;
                return this;
            }

            /**
             * Sets the value of {@link SchedulerOptionsProperty#getManagedPrivateSpaceId}
             * @param managedPrivateSpaceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder managedPrivateSpaceId(com.aliyun.ros.cdk.core.IResolvable managedPrivateSpaceId) {
                this.managedPrivateSpaceId = managedPrivateSpaceId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SchedulerOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SchedulerOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SchedulerOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SchedulerOptionsProperty {
            private final java.lang.Object dedicatedHostClusterId;
            private final java.lang.Object managedPrivateSpaceId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dedicatedHostClusterId = software.amazon.jsii.Kernel.get(this, "dedicatedHostClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.managedPrivateSpaceId = software.amazon.jsii.Kernel.get(this, "managedPrivateSpaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dedicatedHostClusterId = builder.dedicatedHostClusterId;
                this.managedPrivateSpaceId = builder.managedPrivateSpaceId;
            }

            @Override
            public final java.lang.Object getDedicatedHostClusterId() {
                return this.dedicatedHostClusterId;
            }

            @Override
            public final java.lang.Object getManagedPrivateSpaceId() {
                return this.managedPrivateSpaceId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDedicatedHostClusterId() != null) {
                    data.set("dedicatedHostClusterId", om.valueToTree(this.getDedicatedHostClusterId()));
                }
                if (this.getManagedPrivateSpaceId() != null) {
                    data.set("managedPrivateSpaceId", om.valueToTree(this.getManagedPrivateSpaceId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInstanceGroup.SchedulerOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SchedulerOptionsProperty.Jsii$Proxy that = (SchedulerOptionsProperty.Jsii$Proxy) o;

                if (this.dedicatedHostClusterId != null ? !this.dedicatedHostClusterId.equals(that.dedicatedHostClusterId) : that.dedicatedHostClusterId != null) return false;
                return this.managedPrivateSpaceId != null ? this.managedPrivateSpaceId.equals(that.managedPrivateSpaceId) : that.managedPrivateSpaceId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dedicatedHostClusterId != null ? this.dedicatedHostClusterId.hashCode() : 0;
                result = 31 * result + (this.managedPrivateSpaceId != null ? this.managedPrivateSpaceId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceGroup.SecurityOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(SecurityOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SecurityOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTrustedSystemMode() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SecurityOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SecurityOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SecurityOptionsProperty> {
            java.lang.Object trustedSystemMode;

            /**
             * Sets the value of {@link SecurityOptionsProperty#getTrustedSystemMode}
             * @param trustedSystemMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trustedSystemMode(java.lang.String trustedSystemMode) {
                this.trustedSystemMode = trustedSystemMode;
                return this;
            }

            /**
             * Sets the value of {@link SecurityOptionsProperty#getTrustedSystemMode}
             * @param trustedSystemMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trustedSystemMode(com.aliyun.ros.cdk.core.IResolvable trustedSystemMode) {
                this.trustedSystemMode = trustedSystemMode;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SecurityOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SecurityOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SecurityOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityOptionsProperty {
            private final java.lang.Object trustedSystemMode;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.trustedSystemMode = software.amazon.jsii.Kernel.get(this, "trustedSystemMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.trustedSystemMode = builder.trustedSystemMode;
            }

            @Override
            public final java.lang.Object getTrustedSystemMode() {
                return this.trustedSystemMode;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getTrustedSystemMode() != null) {
                    data.set("trustedSystemMode", om.valueToTree(this.getTrustedSystemMode()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInstanceGroup.SecurityOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SecurityOptionsProperty.Jsii$Proxy that = (SecurityOptionsProperty.Jsii$Proxy) o;

                return this.trustedSystemMode != null ? this.trustedSystemMode.equals(that.trustedSystemMode) : that.trustedSystemMode == null;
            }

            @Override
            public final int hashCode() {
                int result = this.trustedSystemMode != null ? this.trustedSystemMode.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceGroup.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInstanceGroup.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosInstanceGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosInstanceGroup> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.RosInstanceGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosInstanceGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxAmount This parameter is required.
         */
        public Builder maxAmount(final java.lang.Number maxAmount) {
            this.props.maxAmount(maxAmount);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxAmount This parameter is required.
         */
        public Builder maxAmount(final com.aliyun.ros.cdk.core.IResolvable maxAmount) {
            this.props.maxAmount(maxAmount);
            return this;
        }

        /**
         * @return {@code this}
         * @param affinity This parameter is required.
         */
        public Builder affinity(final java.lang.String affinity) {
            this.props.affinity(affinity);
            return this;
        }
        /**
         * @return {@code this}
         * @param affinity This parameter is required.
         */
        public Builder affinity(final com.aliyun.ros.cdk.core.IResolvable affinity) {
            this.props.affinity(affinity);
            return this;
        }

        /**
         * @return {@code this}
         * @param allocatePublicIp This parameter is required.
         */
        public Builder allocatePublicIp(final java.lang.Boolean allocatePublicIp) {
            this.props.allocatePublicIp(allocatePublicIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param allocatePublicIp This parameter is required.
         */
        public Builder allocatePublicIp(final com.aliyun.ros.cdk.core.IResolvable allocatePublicIp) {
            this.props.allocatePublicIp(allocatePublicIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoReleaseTime This parameter is required.
         */
        public Builder autoReleaseTime(final java.lang.String autoReleaseTime) {
            this.props.autoReleaseTime(autoReleaseTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoReleaseTime This parameter is required.
         */
        public Builder autoReleaseTime(final com.aliyun.ros.cdk.core.IResolvable autoReleaseTime) {
            this.props.autoReleaseTime(autoReleaseTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.String autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenewPeriod This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenewPeriod This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * @return {@code this}
         * @param cpuOptions This parameter is required.
         */
        public Builder cpuOptions(final com.aliyun.ros.cdk.core.IResolvable cpuOptions) {
            this.props.cpuOptions(cpuOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param cpuOptions This parameter is required.
         */
        public Builder cpuOptions(final com.aliyun.ros.cdk.ecs.RosInstanceGroup.CpuOptionsProperty cpuOptions) {
            this.props.cpuOptions(cpuOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param creditSpecification This parameter is required.
         */
        public Builder creditSpecification(final java.lang.String creditSpecification) {
            this.props.creditSpecification(creditSpecification);
            return this;
        }
        /**
         * @return {@code this}
         * @param creditSpecification This parameter is required.
         */
        public Builder creditSpecification(final com.aliyun.ros.cdk.core.IResolvable creditSpecification) {
            this.props.creditSpecification(creditSpecification);
            return this;
        }

        /**
         * @return {@code this}
         * @param dedicatedHostId This parameter is required.
         */
        public Builder dedicatedHostId(final java.lang.String dedicatedHostId) {
            this.props.dedicatedHostId(dedicatedHostId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dedicatedHostId This parameter is required.
         */
        public Builder dedicatedHostId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostId) {
            this.props.dedicatedHostId(dedicatedHostId);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionProtection This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionProtection This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }

        /**
         * @return {@code this}
         * @param deploymentSetGroupNo This parameter is required.
         */
        public Builder deploymentSetGroupNo(final java.lang.Number deploymentSetGroupNo) {
            this.props.deploymentSetGroupNo(deploymentSetGroupNo);
            return this;
        }
        /**
         * @return {@code this}
         * @param deploymentSetGroupNo This parameter is required.
         */
        public Builder deploymentSetGroupNo(final com.aliyun.ros.cdk.core.IResolvable deploymentSetGroupNo) {
            this.props.deploymentSetGroupNo(deploymentSetGroupNo);
            return this;
        }

        /**
         * @return {@code this}
         * @param deploymentSetId This parameter is required.
         */
        public Builder deploymentSetId(final java.lang.String deploymentSetId) {
            this.props.deploymentSetId(deploymentSetId);
            return this;
        }
        /**
         * @return {@code this}
         * @param deploymentSetId This parameter is required.
         */
        public Builder deploymentSetId(final com.aliyun.ros.cdk.core.IResolvable deploymentSetId) {
            this.props.deploymentSetId(deploymentSetId);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param diskMappings This parameter is required.
         */
        public Builder diskMappings(final com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskMappings This parameter is required.
         */
        public Builder diskMappings(final java.util.List<? extends java.lang.Object> diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }

        /**
         * @return {@code this}
         * @param eniMappings This parameter is required.
         */
        public Builder eniMappings(final com.aliyun.ros.cdk.core.IResolvable eniMappings) {
            this.props.eniMappings(eniMappings);
            return this;
        }
        /**
         * @return {@code this}
         * @param eniMappings This parameter is required.
         */
        public Builder eniMappings(final java.util.List<? extends java.lang.Object> eniMappings) {
            this.props.eniMappings(eniMappings);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostName This parameter is required.
         */
        public Builder hostName(final java.lang.String hostName) {
            this.props.hostName(hostName);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostName This parameter is required.
         */
        public Builder hostName(final com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.props.hostName(hostName);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostNames This parameter is required.
         */
        public Builder hostNames(final com.aliyun.ros.cdk.core.IResolvable hostNames) {
            this.props.hostNames(hostNames);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostNames This parameter is required.
         */
        public Builder hostNames(final java.util.List<? extends java.lang.Object> hostNames) {
            this.props.hostNames(hostNames);
            return this;
        }

        /**
         * @return {@code this}
         * @param hpcClusterId This parameter is required.
         */
        public Builder hpcClusterId(final java.lang.String hpcClusterId) {
            this.props.hpcClusterId(hpcClusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param hpcClusterId This parameter is required.
         */
        public Builder hpcClusterId(final com.aliyun.ros.cdk.core.IResolvable hpcClusterId) {
            this.props.hpcClusterId(hpcClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpEndpoint This parameter is required.
         */
        public Builder httpEndpoint(final java.lang.String httpEndpoint) {
            this.props.httpEndpoint(httpEndpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpEndpoint This parameter is required.
         */
        public Builder httpEndpoint(final com.aliyun.ros.cdk.core.IResolvable httpEndpoint) {
            this.props.httpEndpoint(httpEndpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpTokens This parameter is required.
         */
        public Builder httpTokens(final java.lang.String httpTokens) {
            this.props.httpTokens(httpTokens);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpTokens This parameter is required.
         */
        public Builder httpTokens(final com.aliyun.ros.cdk.core.IResolvable httpTokens) {
            this.props.httpTokens(httpTokens);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageFamily This parameter is required.
         */
        public Builder imageFamily(final java.lang.String imageFamily) {
            this.props.imageFamily(imageFamily);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageFamily This parameter is required.
         */
        public Builder imageFamily(final com.aliyun.ros.cdk.core.IResolvable imageFamily) {
            this.props.imageFamily(imageFamily);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageId This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageId This parameter is required.
         */
        public Builder imageId(final com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageOptions This parameter is required.
         */
        public Builder imageOptions(final com.aliyun.ros.cdk.core.IResolvable imageOptions) {
            this.props.imageOptions(imageOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageOptions This parameter is required.
         */
        public Builder imageOptions(final com.aliyun.ros.cdk.ecs.RosInstanceGroup.ImageOptionsProperty imageOptions) {
            this.props.imageOptions(imageOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceChargeType This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceChargeType This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetChargeType This parameter is required.
         */
        public Builder internetChargeType(final java.lang.String internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param internetChargeType This parameter is required.
         */
        public Builder internetChargeType(final com.aliyun.ros.cdk.core.IResolvable internetChargeType) {
            this.props.internetChargeType(internetChargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetMaxBandwidthOut This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final java.lang.Number internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }
        /**
         * @return {@code this}
         * @param internetMaxBandwidthOut This parameter is required.
         */
        public Builder internetMaxBandwidthOut(final com.aliyun.ros.cdk.core.IResolvable internetMaxBandwidthOut) {
            this.props.internetMaxBandwidthOut(internetMaxBandwidthOut);
            return this;
        }

        /**
         * @return {@code this}
         * @param ioOptimized This parameter is required.
         */
        public Builder ioOptimized(final java.lang.String ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }
        /**
         * @return {@code this}
         * @param ioOptimized This parameter is required.
         */
        public Builder ioOptimized(final com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipv6AddressCount This parameter is required.
         */
        public Builder ipv6AddressCount(final java.lang.Number ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipv6AddressCount This parameter is required.
         */
        public Builder ipv6AddressCount(final com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipv6Addresses This parameter is required.
         */
        public Builder ipv6Addresses(final java.util.List<? extends java.lang.Object> ipv6Addresses) {
            this.props.ipv6Addresses(ipv6Addresses);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipv6Addresses This parameter is required.
         */
        public Builder ipv6Addresses(final com.aliyun.ros.cdk.core.IResolvable ipv6Addresses) {
            this.props.ipv6Addresses(ipv6Addresses);
            return this;
        }

        /**
         * @return {@code this}
         * @param keyPairName This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }
        /**
         * @return {@code this}
         * @param keyPairName This parameter is required.
         */
        public Builder keyPairName(final com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.props.keyPairName(keyPairName);
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
         * @param launchTemplateName This parameter is required.
         */
        public Builder launchTemplateName(final java.lang.String launchTemplateName) {
            this.props.launchTemplateName(launchTemplateName);
            return this;
        }
        /**
         * @return {@code this}
         * @param launchTemplateName This parameter is required.
         */
        public Builder launchTemplateName(final com.aliyun.ros.cdk.core.IResolvable launchTemplateName) {
            this.props.launchTemplateName(launchTemplateName);
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
         * @param networkInterfaceQueueNumber This parameter is required.
         */
        public Builder networkInterfaceQueueNumber(final java.lang.Number networkInterfaceQueueNumber) {
            this.props.networkInterfaceQueueNumber(networkInterfaceQueueNumber);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkInterfaceQueueNumber This parameter is required.
         */
        public Builder networkInterfaceQueueNumber(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceQueueNumber) {
            this.props.networkInterfaceQueueNumber(networkInterfaceQueueNumber);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkOptions This parameter is required.
         */
        public Builder networkOptions(final com.aliyun.ros.cdk.core.IResolvable networkOptions) {
            this.props.networkOptions(networkOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkOptions This parameter is required.
         */
        public Builder networkOptions(final com.aliyun.ros.cdk.ecs.RosInstanceGroup.NetworkOptionsProperty networkOptions) {
            this.props.networkOptions(networkOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkType This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkType This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * @return {@code this}
         * @param passwordInherit This parameter is required.
         */
        public Builder passwordInherit(final java.lang.Boolean passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }
        /**
         * @return {@code this}
         * @param passwordInherit This parameter is required.
         */
        public Builder passwordInherit(final com.aliyun.ros.cdk.core.IResolvable passwordInherit) {
            this.props.passwordInherit(passwordInherit);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param privateIpAddress This parameter is required.
         */
        public Builder privateIpAddress(final java.lang.String privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }
        /**
         * @return {@code this}
         * @param privateIpAddress This parameter is required.
         */
        public Builder privateIpAddress(final com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }

        /**
         * @return {@code this}
         * @param privatePoolOptions This parameter is required.
         */
        public Builder privatePoolOptions(final com.aliyun.ros.cdk.core.IResolvable privatePoolOptions) {
            this.props.privatePoolOptions(privatePoolOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param privatePoolOptions This parameter is required.
         */
        public Builder privatePoolOptions(final com.aliyun.ros.cdk.ecs.RosInstanceGroup.PrivatePoolOptionsProperty privatePoolOptions) {
            this.props.privatePoolOptions(privatePoolOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param ramRoleName This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ramRoleName This parameter is required.
         */
        public Builder ramRoleName(final com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param schedulerOptions This parameter is required.
         */
        public Builder schedulerOptions(final com.aliyun.ros.cdk.core.IResolvable schedulerOptions) {
            this.props.schedulerOptions(schedulerOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param schedulerOptions This parameter is required.
         */
        public Builder schedulerOptions(final com.aliyun.ros.cdk.ecs.RosInstanceGroup.SchedulerOptionsProperty schedulerOptions) {
            this.props.schedulerOptions(schedulerOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityEnhancementStrategy This parameter is required.
         */
        public Builder securityEnhancementStrategy(final java.lang.String securityEnhancementStrategy) {
            this.props.securityEnhancementStrategy(securityEnhancementStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityEnhancementStrategy This parameter is required.
         */
        public Builder securityEnhancementStrategy(final com.aliyun.ros.cdk.core.IResolvable securityEnhancementStrategy) {
            this.props.securityEnhancementStrategy(securityEnhancementStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupIds This parameter is required.
         */
        public Builder securityGroupIds(final com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupIds This parameter is required.
         */
        public Builder securityGroupIds(final java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityOptions This parameter is required.
         */
        public Builder securityOptions(final com.aliyun.ros.cdk.core.IResolvable securityOptions) {
            this.props.securityOptions(securityOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityOptions This parameter is required.
         */
        public Builder securityOptions(final com.aliyun.ros.cdk.ecs.RosInstanceGroup.SecurityOptionsProperty securityOptions) {
            this.props.securityOptions(securityOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotDuration This parameter is required.
         */
        public Builder spotDuration(final java.lang.Number spotDuration) {
            this.props.spotDuration(spotDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotDuration This parameter is required.
         */
        public Builder spotDuration(final com.aliyun.ros.cdk.core.IResolvable spotDuration) {
            this.props.spotDuration(spotDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotInterruptionBehavior This parameter is required.
         */
        public Builder spotInterruptionBehavior(final java.lang.String spotInterruptionBehavior) {
            this.props.spotInterruptionBehavior(spotInterruptionBehavior);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotInterruptionBehavior This parameter is required.
         */
        public Builder spotInterruptionBehavior(final com.aliyun.ros.cdk.core.IResolvable spotInterruptionBehavior) {
            this.props.spotInterruptionBehavior(spotInterruptionBehavior);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotPriceLimit This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.String spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotPriceLimit This parameter is required.
         */
        public Builder spotPriceLimit(final com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotStrategy This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotStrategy This parameter is required.
         */
        public Builder spotStrategy(final com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageSetId This parameter is required.
         */
        public Builder storageSetId(final java.lang.String storageSetId) {
            this.props.storageSetId(storageSetId);
            return this;
        }
        /**
         * @return {@code this}
         * @param storageSetId This parameter is required.
         */
        public Builder storageSetId(final com.aliyun.ros.cdk.core.IResolvable storageSetId) {
            this.props.storageSetId(storageSetId);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageSetPartitionNumber This parameter is required.
         */
        public Builder storageSetPartitionNumber(final java.lang.Number storageSetPartitionNumber) {
            this.props.storageSetPartitionNumber(storageSetPartitionNumber);
            return this;
        }
        /**
         * @return {@code this}
         * @param storageSetPartitionNumber This parameter is required.
         */
        public Builder storageSetPartitionNumber(final com.aliyun.ros.cdk.core.IResolvable storageSetPartitionNumber) {
            this.props.storageSetPartitionNumber(storageSetPartitionNumber);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskAutoSnapshotPolicyId This parameter is required.
         */
        public Builder systemDiskAutoSnapshotPolicyId(final java.lang.String systemDiskAutoSnapshotPolicyId) {
            this.props.systemDiskAutoSnapshotPolicyId(systemDiskAutoSnapshotPolicyId);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskAutoSnapshotPolicyId This parameter is required.
         */
        public Builder systemDiskAutoSnapshotPolicyId(final com.aliyun.ros.cdk.core.IResolvable systemDiskAutoSnapshotPolicyId) {
            this.props.systemDiskAutoSnapshotPolicyId(systemDiskAutoSnapshotPolicyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskBurstingEnabled This parameter is required.
         */
        public Builder systemDiskBurstingEnabled(final java.lang.Boolean systemDiskBurstingEnabled) {
            this.props.systemDiskBurstingEnabled(systemDiskBurstingEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskBurstingEnabled This parameter is required.
         */
        public Builder systemDiskBurstingEnabled(final com.aliyun.ros.cdk.core.IResolvable systemDiskBurstingEnabled) {
            this.props.systemDiskBurstingEnabled(systemDiskBurstingEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskCategory This parameter is required.
         */
        public Builder systemDiskCategory(final java.lang.String systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskCategory This parameter is required.
         */
        public Builder systemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskDescription This parameter is required.
         */
        public Builder systemDiskDescription(final java.lang.String systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskDescription This parameter is required.
         */
        public Builder systemDiskDescription(final com.aliyun.ros.cdk.core.IResolvable systemDiskDescription) {
            this.props.systemDiskDescription(systemDiskDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskDiskName This parameter is required.
         */
        public Builder systemDiskDiskName(final java.lang.String systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskDiskName This parameter is required.
         */
        public Builder systemDiskDiskName(final com.aliyun.ros.cdk.core.IResolvable systemDiskDiskName) {
            this.props.systemDiskDiskName(systemDiskDiskName);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskEncryptAlgorithm This parameter is required.
         */
        public Builder systemDiskEncryptAlgorithm(final java.lang.String systemDiskEncryptAlgorithm) {
            this.props.systemDiskEncryptAlgorithm(systemDiskEncryptAlgorithm);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskEncryptAlgorithm This parameter is required.
         */
        public Builder systemDiskEncryptAlgorithm(final com.aliyun.ros.cdk.core.IResolvable systemDiskEncryptAlgorithm) {
            this.props.systemDiskEncryptAlgorithm(systemDiskEncryptAlgorithm);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskEncrypted This parameter is required.
         */
        public Builder systemDiskEncrypted(final java.lang.String systemDiskEncrypted) {
            this.props.systemDiskEncrypted(systemDiskEncrypted);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskEncrypted This parameter is required.
         */
        public Builder systemDiskEncrypted(final com.aliyun.ros.cdk.core.IResolvable systemDiskEncrypted) {
            this.props.systemDiskEncrypted(systemDiskEncrypted);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskKmsKeyId This parameter is required.
         */
        public Builder systemDiskKmsKeyId(final java.lang.String systemDiskKmsKeyId) {
            this.props.systemDiskKmsKeyId(systemDiskKmsKeyId);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskKmsKeyId This parameter is required.
         */
        public Builder systemDiskKmsKeyId(final com.aliyun.ros.cdk.core.IResolvable systemDiskKmsKeyId) {
            this.props.systemDiskKmsKeyId(systemDiskKmsKeyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskPerformanceLevel This parameter is required.
         */
        public Builder systemDiskPerformanceLevel(final java.lang.String systemDiskPerformanceLevel) {
            this.props.systemDiskPerformanceLevel(systemDiskPerformanceLevel);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskPerformanceLevel This parameter is required.
         */
        public Builder systemDiskPerformanceLevel(final com.aliyun.ros.cdk.core.IResolvable systemDiskPerformanceLevel) {
            this.props.systemDiskPerformanceLevel(systemDiskPerformanceLevel);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskProvisionedIops This parameter is required.
         */
        public Builder systemDiskProvisionedIops(final java.lang.Number systemDiskProvisionedIops) {
            this.props.systemDiskProvisionedIops(systemDiskProvisionedIops);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskProvisionedIops This parameter is required.
         */
        public Builder systemDiskProvisionedIops(final com.aliyun.ros.cdk.core.IResolvable systemDiskProvisionedIops) {
            this.props.systemDiskProvisionedIops(systemDiskProvisionedIops);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskSize This parameter is required.
         */
        public Builder systemDiskSize(final java.lang.Number systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskSize This parameter is required.
         */
        public Builder systemDiskSize(final com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.props.systemDiskSize(systemDiskSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskStorageClusterId This parameter is required.
         */
        public Builder systemDiskStorageClusterId(final java.lang.String systemDiskStorageClusterId) {
            this.props.systemDiskStorageClusterId(systemDiskStorageClusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskStorageClusterId This parameter is required.
         */
        public Builder systemDiskStorageClusterId(final com.aliyun.ros.cdk.core.IResolvable systemDiskStorageClusterId) {
            this.props.systemDiskStorageClusterId(systemDiskStorageClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.RosInstanceGroup.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param tenancy This parameter is required.
         */
        public Builder tenancy(final java.lang.String tenancy) {
            this.props.tenancy(tenancy);
            return this;
        }
        /**
         * @return {@code this}
         * @param tenancy This parameter is required.
         */
        public Builder tenancy(final com.aliyun.ros.cdk.core.IResolvable tenancy) {
            this.props.tenancy(tenancy);
            return this;
        }

        /**
         * @return {@code this}
         * @param uniqueSuffix This parameter is required.
         */
        public Builder uniqueSuffix(final java.lang.Boolean uniqueSuffix) {
            this.props.uniqueSuffix(uniqueSuffix);
            return this;
        }
        /**
         * @return {@code this}
         * @param uniqueSuffix This parameter is required.
         */
        public Builder uniqueSuffix(final com.aliyun.ros.cdk.core.IResolvable uniqueSuffix) {
            this.props.uniqueSuffix(uniqueSuffix);
            return this;
        }

        /**
         * @return {@code this}
         * @param updatePolicy This parameter is required.
         */
        public Builder updatePolicy(final java.lang.String updatePolicy) {
            this.props.updatePolicy(updatePolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param updatePolicy This parameter is required.
         */
        public Builder updatePolicy(final com.aliyun.ros.cdk.core.IResolvable updatePolicy) {
            this.props.updatePolicy(updatePolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param useAdditionalService This parameter is required.
         */
        public Builder useAdditionalService(final java.lang.Boolean useAdditionalService) {
            this.props.useAdditionalService(useAdditionalService);
            return this;
        }
        /**
         * @return {@code this}
         * @param useAdditionalService This parameter is required.
         */
        public Builder useAdditionalService(final com.aliyun.ros.cdk.core.IResolvable useAdditionalService) {
            this.props.useAdditionalService(useAdditionalService);
            return this;
        }

        /**
         * @return {@code this}
         * @param userData This parameter is required.
         */
        public Builder userData(final java.lang.String userData) {
            this.props.userData(userData);
            return this;
        }
        /**
         * @return {@code this}
         * @param userData This parameter is required.
         */
        public Builder userData(final com.aliyun.ros.cdk.core.IResolvable userData) {
            this.props.userData(userData);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
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
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneIds This parameter is required.
         */
        public Builder zoneIds(final com.aliyun.ros.cdk.core.IResolvable zoneIds) {
            this.props.zoneIds(zoneIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneIds This parameter is required.
         */
        public Builder zoneIds(final java.util.List<? extends java.lang.Object> zoneIds) {
            this.props.zoneIds(zoneIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosInstanceGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosInstanceGroup build() {
            return new com.aliyun.ros.cdk.ecs.RosInstanceGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
