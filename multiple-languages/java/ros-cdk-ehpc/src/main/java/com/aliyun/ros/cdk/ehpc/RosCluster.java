package com.aliyun.ros.cdk.ehpc;

/**
 * A ROS template type:  <code>ALIYUN::EHPC::Cluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:45.975Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosCluster")
public class RosCluster extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ehpc.RosCluster.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::EHPC::Cluster</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.RosClusterProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEcsInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrEcsInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderComputeCount() {
        return software.amazon.jsii.Kernel.get(this, "ecsOrderComputeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsOrderComputeCount(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ecsOrderComputeCount", java.util.Objects.requireNonNull(value, "ecsOrderComputeCount is required"));
    }

    /**
     */
    public void setEcsOrderComputeCount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsOrderComputeCount", java.util.Objects.requireNonNull(value, "ecsOrderComputeCount is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderComputeInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "ecsOrderComputeInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsOrderComputeInstanceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ecsOrderComputeInstanceType", java.util.Objects.requireNonNull(value, "ecsOrderComputeInstanceType is required"));
    }

    /**
     */
    public void setEcsOrderComputeInstanceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsOrderComputeInstanceType", java.util.Objects.requireNonNull(value, "ecsOrderComputeInstanceType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderLoginCount() {
        return software.amazon.jsii.Kernel.get(this, "ecsOrderLoginCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsOrderLoginCount(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ecsOrderLoginCount", java.util.Objects.requireNonNull(value, "ecsOrderLoginCount is required"));
    }

    /**
     */
    public void setEcsOrderLoginCount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsOrderLoginCount", java.util.Objects.requireNonNull(value, "ecsOrderLoginCount is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderLoginInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "ecsOrderLoginInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsOrderLoginInstanceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ecsOrderLoginInstanceType", java.util.Objects.requireNonNull(value, "ecsOrderLoginInstanceType is required"));
    }

    /**
     */
    public void setEcsOrderLoginInstanceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsOrderLoginInstanceType", java.util.Objects.requireNonNull(value, "ecsOrderLoginInstanceType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderManagerInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "ecsOrderManagerInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsOrderManagerInstanceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ecsOrderManagerInstanceType", java.util.Objects.requireNonNull(value, "ecsOrderManagerInstanceType is required"));
    }

    /**
     */
    public void setEcsOrderManagerInstanceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsOrderManagerInstanceType", java.util.Objects.requireNonNull(value, "ecsOrderManagerInstanceType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOsTag() {
        return software.amazon.jsii.Kernel.get(this, "osTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOsTag(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "osTag", java.util.Objects.requireNonNull(value, "osTag is required"));
    }

    /**
     */
    public void setOsTag(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "osTag", java.util.Objects.requireNonNull(value, "osTag is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccountType() {
        return software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccountType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accountType", value);
    }

    /**
     */
    public void setAccountType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accountType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalVolumes() {
        return software.amazon.jsii.Kernel.get(this, "additionalVolumes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAdditionalVolumes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "additionalVolumes", value);
    }

    /**
     */
    public void setAdditionalVolumes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ehpc.RosCluster.AdditionalVolumesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ehpc.RosCluster.AdditionalVolumesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "additionalVolumes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getApplication() {
        return software.amazon.jsii.Kernel.get(this, "application", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApplication(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "application", value);
    }

    /**
     */
    public void setApplication(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ehpc.RosCluster.ApplicationProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ehpc.RosCluster.ApplicationProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "application", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getClientVersion() {
        return software.amazon.jsii.Kernel.get(this, "clientVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClientVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clientVersion", value);
    }

    /**
     */
    public void setClientVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clientVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getComputeEnableHt() {
        return software.amazon.jsii.Kernel.get(this, "computeEnableHt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComputeEnableHt(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "computeEnableHt", value);
    }

    /**
     */
    public void setComputeEnableHt(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "computeEnableHt", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getComputeSpotPriceLimit() {
        return software.amazon.jsii.Kernel.get(this, "computeSpotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComputeSpotPriceLimit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "computeSpotPriceLimit", value);
    }

    /**
     */
    public void setComputeSpotPriceLimit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "computeSpotPriceLimit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getComputeSpotStrategy() {
        return software.amazon.jsii.Kernel.get(this, "computeSpotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComputeSpotStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "computeSpotStrategy", value);
    }

    /**
     */
    public void setComputeSpotStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "computeSpotStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeployMode() {
        return software.amazon.jsii.Kernel.get(this, "deployMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeployMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "deployMode", value);
    }

    /**
     */
    public void setDeployMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deployMode", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getEcsChargeType() {
        return software.amazon.jsii.Kernel.get(this, "ecsChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ecsChargeType", value);
    }

    /**
     */
    public void setEcsChargeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsChargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEcsOrderManagerCount() {
        return software.amazon.jsii.Kernel.get(this, "ecsOrderManagerCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsOrderManagerCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ecsOrderManagerCount", value);
    }

    /**
     */
    public void setEcsOrderManagerCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsOrderManagerCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEhpcVersion() {
        return software.amazon.jsii.Kernel.get(this, "ehpcVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEhpcVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ehpcVersion", value);
    }

    /**
     */
    public void setEhpcVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ehpcVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHaEnable() {
        return software.amazon.jsii.Kernel.get(this, "haEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHaEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "haEnable", value);
    }

    /**
     */
    public void setHaEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "haEnable", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageOwnerAlias() {
        return software.amazon.jsii.Kernel.get(this, "imageOwnerAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageOwnerAlias(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageOwnerAlias", value);
    }

    /**
     */
    public void setImageOwnerAlias(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageOwnerAlias", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInputFileUrl() {
        return software.amazon.jsii.Kernel.get(this, "inputFileUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInputFileUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "inputFileUrl", value);
    }

    /**
     */
    public void setInputFileUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "inputFileUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIsComputeEss() {
        return software.amazon.jsii.Kernel.get(this, "isComputeEss", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIsComputeEss(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "isComputeEss", value);
    }

    /**
     */
    public void setIsComputeEss(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isComputeEss", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getJobQueue() {
        return software.amazon.jsii.Kernel.get(this, "jobQueue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJobQueue(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "jobQueue", value);
    }

    /**
     */
    public void setJobQueue(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jobQueue", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getPostInstallScript() {
        return software.amazon.jsii.Kernel.get(this, "postInstallScript", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPostInstallScript(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "postInstallScript", value);
    }

    /**
     */
    public void setPostInstallScript(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ehpc.RosCluster.PostInstallScriptProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ehpc.RosCluster.PostInstallScriptProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "postInstallScript", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRamNodeTypes() {
        return software.amazon.jsii.Kernel.get(this, "ramNodeTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRamNodeTypes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ramNodeTypes", value);
    }

    /**
     */
    public void setRamNodeTypes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "ramNodeTypes", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemoteDirectory() {
        return software.amazon.jsii.Kernel.get(this, "remoteDirectory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemoteDirectory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "remoteDirectory", value);
    }

    /**
     */
    public void setRemoteDirectory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "remoteDirectory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemoteVisEnable() {
        return software.amazon.jsii.Kernel.get(this, "remoteVisEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemoteVisEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "remoteVisEnable", value);
    }

    /**
     */
    public void setRemoteVisEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "remoteVisEnable", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSccClusterId() {
        return software.amazon.jsii.Kernel.get(this, "sccClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSccClusterId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sccClusterId", value);
    }

    /**
     */
    public void setSccClusterId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sccClusterId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSchedulerType() {
        return software.amazon.jsii.Kernel.get(this, "schedulerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSchedulerType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "schedulerType", value);
    }

    /**
     */
    public void setSchedulerType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "schedulerType", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupName() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupName", value);
    }

    /**
     */
    public void setSecurityGroupName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskLevel() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskLevel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskLevel", value);
    }

    /**
     */
    public void setSystemDiskLevel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskLevel", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskType() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskType", value);
    }

    /**
     */
    public void setSystemDiskType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVolumeId() {
        return software.amazon.jsii.Kernel.get(this, "volumeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVolumeId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "volumeId", value);
    }

    /**
     */
    public void setVolumeId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "volumeId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVolumeMountpoint() {
        return software.amazon.jsii.Kernel.get(this, "volumeMountpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVolumeMountpoint(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "volumeMountpoint", value);
    }

    /**
     */
    public void setVolumeMountpoint(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "volumeMountpoint", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVolumeProtocol() {
        return software.amazon.jsii.Kernel.get(this, "volumeProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVolumeProtocol(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "volumeProtocol", value);
    }

    /**
     */
    public void setVolumeProtocol(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "volumeProtocol", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVolumeType() {
        return software.amazon.jsii.Kernel.get(this, "volumeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVolumeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "volumeType", value);
    }

    /**
     */
    public void setVolumeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "volumeType", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getWithoutElasticIp() {
        return software.amazon.jsii.Kernel.get(this, "withoutElasticIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWithoutElasticIp(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "withoutElasticIp", value);
    }

    /**
     */
    public void setWithoutElasticIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "withoutElasticIp", value);
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
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosCluster.AdditionalVolumesProperty")
    @software.amazon.jsii.Jsii.Proxy(AdditionalVolumesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AdditionalVolumesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLocalDirectory();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVolumeId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVolumeMountpoint();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getJobQueue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLocation() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRemoteDirectory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeProtocol() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AdditionalVolumesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AdditionalVolumesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AdditionalVolumesProperty> {
            java.lang.Object localDirectory;
            java.lang.Object volumeId;
            java.lang.Object volumeMountpoint;
            java.lang.Object jobQueue;
            java.lang.Object location;
            java.lang.Object remoteDirectory;
            java.lang.Object volumeProtocol;
            java.lang.Object volumeType;

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getLocalDirectory}
             * @param localDirectory the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localDirectory(java.lang.String localDirectory) {
                this.localDirectory = localDirectory;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getLocalDirectory}
             * @param localDirectory the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localDirectory(com.aliyun.ros.cdk.core.IResolvable localDirectory) {
                this.localDirectory = localDirectory;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getVolumeId}
             * @param volumeId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeId(java.lang.String volumeId) {
                this.volumeId = volumeId;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getVolumeId}
             * @param volumeId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeId(com.aliyun.ros.cdk.core.IResolvable volumeId) {
                this.volumeId = volumeId;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getVolumeMountpoint}
             * @param volumeMountpoint the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeMountpoint(java.lang.String volumeMountpoint) {
                this.volumeMountpoint = volumeMountpoint;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getVolumeMountpoint}
             * @param volumeMountpoint the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeMountpoint(com.aliyun.ros.cdk.core.IResolvable volumeMountpoint) {
                this.volumeMountpoint = volumeMountpoint;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getJobQueue}
             * @param jobQueue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jobQueue(java.lang.String jobQueue) {
                this.jobQueue = jobQueue;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getJobQueue}
             * @param jobQueue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jobQueue(com.aliyun.ros.cdk.core.IResolvable jobQueue) {
                this.jobQueue = jobQueue;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getLocation}
             * @param location the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder location(java.lang.String location) {
                this.location = location;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getLocation}
             * @param location the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder location(com.aliyun.ros.cdk.core.IResolvable location) {
                this.location = location;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getRemoteDirectory}
             * @param remoteDirectory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remoteDirectory(java.lang.String remoteDirectory) {
                this.remoteDirectory = remoteDirectory;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getRemoteDirectory}
             * @param remoteDirectory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder remoteDirectory(com.aliyun.ros.cdk.core.IResolvable remoteDirectory) {
                this.remoteDirectory = remoteDirectory;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getVolumeProtocol}
             * @param volumeProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeProtocol(java.lang.String volumeProtocol) {
                this.volumeProtocol = volumeProtocol;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getVolumeProtocol}
             * @param volumeProtocol the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeProtocol(com.aliyun.ros.cdk.core.IResolvable volumeProtocol) {
                this.volumeProtocol = volumeProtocol;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getVolumeType}
             * @param volumeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeType(java.lang.String volumeType) {
                this.volumeType = volumeType;
                return this;
            }

            /**
             * Sets the value of {@link AdditionalVolumesProperty#getVolumeType}
             * @param volumeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeType(com.aliyun.ros.cdk.core.IResolvable volumeType) {
                this.volumeType = volumeType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AdditionalVolumesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AdditionalVolumesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AdditionalVolumesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AdditionalVolumesProperty {
            private final java.lang.Object localDirectory;
            private final java.lang.Object volumeId;
            private final java.lang.Object volumeMountpoint;
            private final java.lang.Object jobQueue;
            private final java.lang.Object location;
            private final java.lang.Object remoteDirectory;
            private final java.lang.Object volumeProtocol;
            private final java.lang.Object volumeType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.localDirectory = software.amazon.jsii.Kernel.get(this, "localDirectory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.volumeId = software.amazon.jsii.Kernel.get(this, "volumeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.volumeMountpoint = software.amazon.jsii.Kernel.get(this, "volumeMountpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.jobQueue = software.amazon.jsii.Kernel.get(this, "jobQueue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.location = software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.remoteDirectory = software.amazon.jsii.Kernel.get(this, "remoteDirectory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.volumeProtocol = software.amazon.jsii.Kernel.get(this, "volumeProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.volumeType = software.amazon.jsii.Kernel.get(this, "volumeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.localDirectory = java.util.Objects.requireNonNull(builder.localDirectory, "localDirectory is required");
                this.volumeId = java.util.Objects.requireNonNull(builder.volumeId, "volumeId is required");
                this.volumeMountpoint = java.util.Objects.requireNonNull(builder.volumeMountpoint, "volumeMountpoint is required");
                this.jobQueue = builder.jobQueue;
                this.location = builder.location;
                this.remoteDirectory = builder.remoteDirectory;
                this.volumeProtocol = builder.volumeProtocol;
                this.volumeType = builder.volumeType;
            }

            @Override
            public final java.lang.Object getLocalDirectory() {
                return this.localDirectory;
            }

            @Override
            public final java.lang.Object getVolumeId() {
                return this.volumeId;
            }

            @Override
            public final java.lang.Object getVolumeMountpoint() {
                return this.volumeMountpoint;
            }

            @Override
            public final java.lang.Object getJobQueue() {
                return this.jobQueue;
            }

            @Override
            public final java.lang.Object getLocation() {
                return this.location;
            }

            @Override
            public final java.lang.Object getRemoteDirectory() {
                return this.remoteDirectory;
            }

            @Override
            public final java.lang.Object getVolumeProtocol() {
                return this.volumeProtocol;
            }

            @Override
            public final java.lang.Object getVolumeType() {
                return this.volumeType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("localDirectory", om.valueToTree(this.getLocalDirectory()));
                data.set("volumeId", om.valueToTree(this.getVolumeId()));
                data.set("volumeMountpoint", om.valueToTree(this.getVolumeMountpoint()));
                if (this.getJobQueue() != null) {
                    data.set("jobQueue", om.valueToTree(this.getJobQueue()));
                }
                if (this.getLocation() != null) {
                    data.set("location", om.valueToTree(this.getLocation()));
                }
                if (this.getRemoteDirectory() != null) {
                    data.set("remoteDirectory", om.valueToTree(this.getRemoteDirectory()));
                }
                if (this.getVolumeProtocol() != null) {
                    data.set("volumeProtocol", om.valueToTree(this.getVolumeProtocol()));
                }
                if (this.getVolumeType() != null) {
                    data.set("volumeType", om.valueToTree(this.getVolumeType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosCluster.AdditionalVolumesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AdditionalVolumesProperty.Jsii$Proxy that = (AdditionalVolumesProperty.Jsii$Proxy) o;

                if (!localDirectory.equals(that.localDirectory)) return false;
                if (!volumeId.equals(that.volumeId)) return false;
                if (!volumeMountpoint.equals(that.volumeMountpoint)) return false;
                if (this.jobQueue != null ? !this.jobQueue.equals(that.jobQueue) : that.jobQueue != null) return false;
                if (this.location != null ? !this.location.equals(that.location) : that.location != null) return false;
                if (this.remoteDirectory != null ? !this.remoteDirectory.equals(that.remoteDirectory) : that.remoteDirectory != null) return false;
                if (this.volumeProtocol != null ? !this.volumeProtocol.equals(that.volumeProtocol) : that.volumeProtocol != null) return false;
                return this.volumeType != null ? this.volumeType.equals(that.volumeType) : that.volumeType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.localDirectory.hashCode();
                result = 31 * result + (this.volumeId.hashCode());
                result = 31 * result + (this.volumeMountpoint.hashCode());
                result = 31 * result + (this.jobQueue != null ? this.jobQueue.hashCode() : 0);
                result = 31 * result + (this.location != null ? this.location.hashCode() : 0);
                result = 31 * result + (this.remoteDirectory != null ? this.remoteDirectory.hashCode() : 0);
                result = 31 * result + (this.volumeProtocol != null ? this.volumeProtocol.hashCode() : 0);
                result = 31 * result + (this.volumeType != null ? this.volumeType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty")
    @software.amazon.jsii.Jsii.Proxy(ApplicationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ApplicationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTag();

        /**
         * @return a {@link Builder} of {@link ApplicationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ApplicationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ApplicationProperty> {
            java.lang.Object tag;

            /**
             * Sets the value of {@link ApplicationProperty#getTag}
             * @param tag the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tag(java.lang.String tag) {
                this.tag = tag;
                return this;
            }

            /**
             * Sets the value of {@link ApplicationProperty#getTag}
             * @param tag the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
                this.tag = tag;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ApplicationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ApplicationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ApplicationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationProperty {
            private final java.lang.Object tag;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.tag = java.util.Objects.requireNonNull(builder.tag, "tag is required");
            }

            @Override
            public final java.lang.Object getTag() {
                return this.tag;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("tag", om.valueToTree(this.getTag()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosCluster.ApplicationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ApplicationProperty.Jsii$Proxy that = (ApplicationProperty.Jsii$Proxy) o;

                return this.tag.equals(that.tag);
            }

            @Override
            public final int hashCode() {
                int result = this.tag.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty")
    @software.amazon.jsii.Jsii.Proxy(PostInstallScriptProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PostInstallScriptProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getArgs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUrl() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PostInstallScriptProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PostInstallScriptProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PostInstallScriptProperty> {
            java.lang.Object args;
            java.lang.Object url;

            /**
             * Sets the value of {@link PostInstallScriptProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(java.lang.String args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link PostInstallScriptProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(com.aliyun.ros.cdk.core.IResolvable args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link PostInstallScriptProperty#getUrl}
             * @param url the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder url(java.lang.String url) {
                this.url = url;
                return this;
            }

            /**
             * Sets the value of {@link PostInstallScriptProperty#getUrl}
             * @param url the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder url(com.aliyun.ros.cdk.core.IResolvable url) {
                this.url = url;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PostInstallScriptProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PostInstallScriptProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PostInstallScriptProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PostInstallScriptProperty {
            private final java.lang.Object args;
            private final java.lang.Object url;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.args = software.amazon.jsii.Kernel.get(this, "args", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.url = software.amazon.jsii.Kernel.get(this, "url", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.args = builder.args;
                this.url = builder.url;
            }

            @Override
            public final java.lang.Object getArgs() {
                return this.args;
            }

            @Override
            public final java.lang.Object getUrl() {
                return this.url;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getArgs() != null) {
                    data.set("args", om.valueToTree(this.getArgs()));
                }
                if (this.getUrl() != null) {
                    data.set("url", om.valueToTree(this.getUrl()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosCluster.PostInstallScriptProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PostInstallScriptProperty.Jsii$Proxy that = (PostInstallScriptProperty.Jsii$Proxy) o;

                if (this.args != null ? !this.args.equals(that.args) : that.args != null) return false;
                return this.url != null ? this.url.equals(that.url) : that.url == null;
            }

            @Override
            public final int hashCode() {
                int result = this.args != null ? this.args.hashCode() : 0;
                result = 31 * result + (this.url != null ? this.url.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ehpc.RosCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ehpc.RosCluster> {
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
        private final com.aliyun.ros.cdk.ehpc.RosClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ehpc.RosClusterProps.Builder();
        }

        /**
         * @return {@code this}
         * @param ecsOrderComputeCount This parameter is required.
         */
        public Builder ecsOrderComputeCount(final java.lang.Number ecsOrderComputeCount) {
            this.props.ecsOrderComputeCount(ecsOrderComputeCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsOrderComputeCount This parameter is required.
         */
        public Builder ecsOrderComputeCount(final com.aliyun.ros.cdk.core.IResolvable ecsOrderComputeCount) {
            this.props.ecsOrderComputeCount(ecsOrderComputeCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsOrderComputeInstanceType This parameter is required.
         */
        public Builder ecsOrderComputeInstanceType(final java.lang.String ecsOrderComputeInstanceType) {
            this.props.ecsOrderComputeInstanceType(ecsOrderComputeInstanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsOrderComputeInstanceType This parameter is required.
         */
        public Builder ecsOrderComputeInstanceType(final com.aliyun.ros.cdk.core.IResolvable ecsOrderComputeInstanceType) {
            this.props.ecsOrderComputeInstanceType(ecsOrderComputeInstanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsOrderLoginCount This parameter is required.
         */
        public Builder ecsOrderLoginCount(final java.lang.Number ecsOrderLoginCount) {
            this.props.ecsOrderLoginCount(ecsOrderLoginCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsOrderLoginCount This parameter is required.
         */
        public Builder ecsOrderLoginCount(final com.aliyun.ros.cdk.core.IResolvable ecsOrderLoginCount) {
            this.props.ecsOrderLoginCount(ecsOrderLoginCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsOrderLoginInstanceType This parameter is required.
         */
        public Builder ecsOrderLoginInstanceType(final java.lang.String ecsOrderLoginInstanceType) {
            this.props.ecsOrderLoginInstanceType(ecsOrderLoginInstanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsOrderLoginInstanceType This parameter is required.
         */
        public Builder ecsOrderLoginInstanceType(final com.aliyun.ros.cdk.core.IResolvable ecsOrderLoginInstanceType) {
            this.props.ecsOrderLoginInstanceType(ecsOrderLoginInstanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsOrderManagerInstanceType This parameter is required.
         */
        public Builder ecsOrderManagerInstanceType(final java.lang.String ecsOrderManagerInstanceType) {
            this.props.ecsOrderManagerInstanceType(ecsOrderManagerInstanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsOrderManagerInstanceType This parameter is required.
         */
        public Builder ecsOrderManagerInstanceType(final com.aliyun.ros.cdk.core.IResolvable ecsOrderManagerInstanceType) {
            this.props.ecsOrderManagerInstanceType(ecsOrderManagerInstanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param osTag This parameter is required.
         */
        public Builder osTag(final java.lang.String osTag) {
            this.props.osTag(osTag);
            return this;
        }
        /**
         * @return {@code this}
         * @param osTag This parameter is required.
         */
        public Builder osTag(final com.aliyun.ros.cdk.core.IResolvable osTag) {
            this.props.osTag(osTag);
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
         * @param accountType This parameter is required.
         */
        public Builder accountType(final java.lang.String accountType) {
            this.props.accountType(accountType);
            return this;
        }
        /**
         * @return {@code this}
         * @param accountType This parameter is required.
         */
        public Builder accountType(final com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.props.accountType(accountType);
            return this;
        }

        /**
         * @return {@code this}
         * @param additionalVolumes This parameter is required.
         */
        public Builder additionalVolumes(final com.aliyun.ros.cdk.core.IResolvable additionalVolumes) {
            this.props.additionalVolumes(additionalVolumes);
            return this;
        }
        /**
         * @return {@code this}
         * @param additionalVolumes This parameter is required.
         */
        public Builder additionalVolumes(final java.util.List<? extends java.lang.Object> additionalVolumes) {
            this.props.additionalVolumes(additionalVolumes);
            return this;
        }

        /**
         * @return {@code this}
         * @param application This parameter is required.
         */
        public Builder application(final com.aliyun.ros.cdk.core.IResolvable application) {
            this.props.application(application);
            return this;
        }
        /**
         * @return {@code this}
         * @param application This parameter is required.
         */
        public Builder application(final java.util.List<? extends java.lang.Object> application) {
            this.props.application(application);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
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
         * @param clientVersion This parameter is required.
         */
        public Builder clientVersion(final java.lang.String clientVersion) {
            this.props.clientVersion(clientVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param clientVersion This parameter is required.
         */
        public Builder clientVersion(final com.aliyun.ros.cdk.core.IResolvable clientVersion) {
            this.props.clientVersion(clientVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param computeEnableHt This parameter is required.
         */
        public Builder computeEnableHt(final java.lang.Boolean computeEnableHt) {
            this.props.computeEnableHt(computeEnableHt);
            return this;
        }
        /**
         * @return {@code this}
         * @param computeEnableHt This parameter is required.
         */
        public Builder computeEnableHt(final com.aliyun.ros.cdk.core.IResolvable computeEnableHt) {
            this.props.computeEnableHt(computeEnableHt);
            return this;
        }

        /**
         * @return {@code this}
         * @param computeSpotPriceLimit This parameter is required.
         */
        public Builder computeSpotPriceLimit(final java.lang.String computeSpotPriceLimit) {
            this.props.computeSpotPriceLimit(computeSpotPriceLimit);
            return this;
        }
        /**
         * @return {@code this}
         * @param computeSpotPriceLimit This parameter is required.
         */
        public Builder computeSpotPriceLimit(final com.aliyun.ros.cdk.core.IResolvable computeSpotPriceLimit) {
            this.props.computeSpotPriceLimit(computeSpotPriceLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param computeSpotStrategy This parameter is required.
         */
        public Builder computeSpotStrategy(final java.lang.String computeSpotStrategy) {
            this.props.computeSpotStrategy(computeSpotStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param computeSpotStrategy This parameter is required.
         */
        public Builder computeSpotStrategy(final com.aliyun.ros.cdk.core.IResolvable computeSpotStrategy) {
            this.props.computeSpotStrategy(computeSpotStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param deployMode This parameter is required.
         */
        public Builder deployMode(final java.lang.String deployMode) {
            this.props.deployMode(deployMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param deployMode This parameter is required.
         */
        public Builder deployMode(final com.aliyun.ros.cdk.core.IResolvable deployMode) {
            this.props.deployMode(deployMode);
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
         * @param ecsChargeType This parameter is required.
         */
        public Builder ecsChargeType(final java.lang.String ecsChargeType) {
            this.props.ecsChargeType(ecsChargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsChargeType This parameter is required.
         */
        public Builder ecsChargeType(final com.aliyun.ros.cdk.core.IResolvable ecsChargeType) {
            this.props.ecsChargeType(ecsChargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsOrderManagerCount This parameter is required.
         */
        public Builder ecsOrderManagerCount(final java.lang.Number ecsOrderManagerCount) {
            this.props.ecsOrderManagerCount(ecsOrderManagerCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsOrderManagerCount This parameter is required.
         */
        public Builder ecsOrderManagerCount(final com.aliyun.ros.cdk.core.IResolvable ecsOrderManagerCount) {
            this.props.ecsOrderManagerCount(ecsOrderManagerCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param ehpcVersion This parameter is required.
         */
        public Builder ehpcVersion(final java.lang.String ehpcVersion) {
            this.props.ehpcVersion(ehpcVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param ehpcVersion This parameter is required.
         */
        public Builder ehpcVersion(final com.aliyun.ros.cdk.core.IResolvable ehpcVersion) {
            this.props.ehpcVersion(ehpcVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param haEnable This parameter is required.
         */
        public Builder haEnable(final java.lang.Boolean haEnable) {
            this.props.haEnable(haEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param haEnable This parameter is required.
         */
        public Builder haEnable(final com.aliyun.ros.cdk.core.IResolvable haEnable) {
            this.props.haEnable(haEnable);
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
         * @param imageOwnerAlias This parameter is required.
         */
        public Builder imageOwnerAlias(final java.lang.String imageOwnerAlias) {
            this.props.imageOwnerAlias(imageOwnerAlias);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageOwnerAlias This parameter is required.
         */
        public Builder imageOwnerAlias(final com.aliyun.ros.cdk.core.IResolvable imageOwnerAlias) {
            this.props.imageOwnerAlias(imageOwnerAlias);
            return this;
        }

        /**
         * @return {@code this}
         * @param inputFileUrl This parameter is required.
         */
        public Builder inputFileUrl(final java.lang.String inputFileUrl) {
            this.props.inputFileUrl(inputFileUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param inputFileUrl This parameter is required.
         */
        public Builder inputFileUrl(final com.aliyun.ros.cdk.core.IResolvable inputFileUrl) {
            this.props.inputFileUrl(inputFileUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param isComputeEss This parameter is required.
         */
        public Builder isComputeEss(final java.lang.Boolean isComputeEss) {
            this.props.isComputeEss(isComputeEss);
            return this;
        }
        /**
         * @return {@code this}
         * @param isComputeEss This parameter is required.
         */
        public Builder isComputeEss(final com.aliyun.ros.cdk.core.IResolvable isComputeEss) {
            this.props.isComputeEss(isComputeEss);
            return this;
        }

        /**
         * @return {@code this}
         * @param jobQueue This parameter is required.
         */
        public Builder jobQueue(final java.lang.String jobQueue) {
            this.props.jobQueue(jobQueue);
            return this;
        }
        /**
         * @return {@code this}
         * @param jobQueue This parameter is required.
         */
        public Builder jobQueue(final com.aliyun.ros.cdk.core.IResolvable jobQueue) {
            this.props.jobQueue(jobQueue);
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
         * @param postInstallScript This parameter is required.
         */
        public Builder postInstallScript(final com.aliyun.ros.cdk.core.IResolvable postInstallScript) {
            this.props.postInstallScript(postInstallScript);
            return this;
        }
        /**
         * @return {@code this}
         * @param postInstallScript This parameter is required.
         */
        public Builder postInstallScript(final java.util.List<? extends java.lang.Object> postInstallScript) {
            this.props.postInstallScript(postInstallScript);
            return this;
        }

        /**
         * @return {@code this}
         * @param ramNodeTypes This parameter is required.
         */
        public Builder ramNodeTypes(final com.aliyun.ros.cdk.core.IResolvable ramNodeTypes) {
            this.props.ramNodeTypes(ramNodeTypes);
            return this;
        }
        /**
         * @return {@code this}
         * @param ramNodeTypes This parameter is required.
         */
        public Builder ramNodeTypes(final java.util.List<? extends java.lang.Object> ramNodeTypes) {
            this.props.ramNodeTypes(ramNodeTypes);
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
         * @param remoteDirectory This parameter is required.
         */
        public Builder remoteDirectory(final java.lang.String remoteDirectory) {
            this.props.remoteDirectory(remoteDirectory);
            return this;
        }
        /**
         * @return {@code this}
         * @param remoteDirectory This parameter is required.
         */
        public Builder remoteDirectory(final com.aliyun.ros.cdk.core.IResolvable remoteDirectory) {
            this.props.remoteDirectory(remoteDirectory);
            return this;
        }

        /**
         * @return {@code this}
         * @param remoteVisEnable This parameter is required.
         */
        public Builder remoteVisEnable(final java.lang.Boolean remoteVisEnable) {
            this.props.remoteVisEnable(remoteVisEnable);
            return this;
        }
        /**
         * @return {@code this}
         * @param remoteVisEnable This parameter is required.
         */
        public Builder remoteVisEnable(final com.aliyun.ros.cdk.core.IResolvable remoteVisEnable) {
            this.props.remoteVisEnable(remoteVisEnable);
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
         * @param sccClusterId This parameter is required.
         */
        public Builder sccClusterId(final java.lang.String sccClusterId) {
            this.props.sccClusterId(sccClusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param sccClusterId This parameter is required.
         */
        public Builder sccClusterId(final com.aliyun.ros.cdk.core.IResolvable sccClusterId) {
            this.props.sccClusterId(sccClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param schedulerType This parameter is required.
         */
        public Builder schedulerType(final java.lang.String schedulerType) {
            this.props.schedulerType(schedulerType);
            return this;
        }
        /**
         * @return {@code this}
         * @param schedulerType This parameter is required.
         */
        public Builder schedulerType(final com.aliyun.ros.cdk.core.IResolvable schedulerType) {
            this.props.schedulerType(schedulerType);
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
         * @param securityGroupName This parameter is required.
         */
        public Builder securityGroupName(final java.lang.String securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupName This parameter is required.
         */
        public Builder securityGroupName(final com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskLevel This parameter is required.
         */
        public Builder systemDiskLevel(final java.lang.String systemDiskLevel) {
            this.props.systemDiskLevel(systemDiskLevel);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskLevel This parameter is required.
         */
        public Builder systemDiskLevel(final com.aliyun.ros.cdk.core.IResolvable systemDiskLevel) {
            this.props.systemDiskLevel(systemDiskLevel);
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
         * @param systemDiskType This parameter is required.
         */
        public Builder systemDiskType(final java.lang.String systemDiskType) {
            this.props.systemDiskType(systemDiskType);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskType This parameter is required.
         */
        public Builder systemDiskType(final com.aliyun.ros.cdk.core.IResolvable systemDiskType) {
            this.props.systemDiskType(systemDiskType);
            return this;
        }

        /**
         * @return {@code this}
         * @param volumeId This parameter is required.
         */
        public Builder volumeId(final java.lang.String volumeId) {
            this.props.volumeId(volumeId);
            return this;
        }
        /**
         * @return {@code this}
         * @param volumeId This parameter is required.
         */
        public Builder volumeId(final com.aliyun.ros.cdk.core.IResolvable volumeId) {
            this.props.volumeId(volumeId);
            return this;
        }

        /**
         * @return {@code this}
         * @param volumeMountpoint This parameter is required.
         */
        public Builder volumeMountpoint(final java.lang.String volumeMountpoint) {
            this.props.volumeMountpoint(volumeMountpoint);
            return this;
        }
        /**
         * @return {@code this}
         * @param volumeMountpoint This parameter is required.
         */
        public Builder volumeMountpoint(final com.aliyun.ros.cdk.core.IResolvable volumeMountpoint) {
            this.props.volumeMountpoint(volumeMountpoint);
            return this;
        }

        /**
         * @return {@code this}
         * @param volumeProtocol This parameter is required.
         */
        public Builder volumeProtocol(final java.lang.String volumeProtocol) {
            this.props.volumeProtocol(volumeProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param volumeProtocol This parameter is required.
         */
        public Builder volumeProtocol(final com.aliyun.ros.cdk.core.IResolvable volumeProtocol) {
            this.props.volumeProtocol(volumeProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param volumeType This parameter is required.
         */
        public Builder volumeType(final java.lang.String volumeType) {
            this.props.volumeType(volumeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param volumeType This parameter is required.
         */
        public Builder volumeType(final com.aliyun.ros.cdk.core.IResolvable volumeType) {
            this.props.volumeType(volumeType);
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
         * @param withoutElasticIp This parameter is required.
         */
        public Builder withoutElasticIp(final java.lang.Boolean withoutElasticIp) {
            this.props.withoutElasticIp(withoutElasticIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param withoutElasticIp This parameter is required.
         */
        public Builder withoutElasticIp(final com.aliyun.ros.cdk.core.IResolvable withoutElasticIp) {
            this.props.withoutElasticIp(withoutElasticIp);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ehpc.RosCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.ehpc.RosCluster build() {
            return new com.aliyun.ros.cdk.ehpc.RosCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
