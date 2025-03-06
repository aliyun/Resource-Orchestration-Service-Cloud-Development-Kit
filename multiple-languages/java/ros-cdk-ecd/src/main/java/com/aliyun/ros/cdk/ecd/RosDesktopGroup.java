package com.aliyun.ros.cdk.ecd;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ECD::DesktopGroup</code>, which is used to create a cloud computer pool.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.397Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.RosDesktopGroup")
public class RosDesktopGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDesktopGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDesktopGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecd.RosDesktopGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDesktopGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.RosDesktopGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDesktopGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrDesktopGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBundleId() {
        return software.amazon.jsii.Kernel.get(this, "bundleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBundleId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bundleId", java.util.Objects.requireNonNull(value, "bundleId is required"));
    }

    /**
     */
    public void setBundleId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bundleId", java.util.Objects.requireNonNull(value, "bundleId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getChargeType() {
        return software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", java.util.Objects.requireNonNull(value, "chargeType is required"));
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", java.util.Objects.requireNonNull(value, "chargeType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOfficeSiteId() {
        return software.amazon.jsii.Kernel.get(this, "officeSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOfficeSiteId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "officeSiteId", java.util.Objects.requireNonNull(value, "officeSiteId is required"));
    }

    /**
     */
    public void setOfficeSiteId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "officeSiteId", java.util.Objects.requireNonNull(value, "officeSiteId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPolicyGroupId() {
        return software.amazon.jsii.Kernel.get(this, "policyGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicyGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "policyGroupId", java.util.Objects.requireNonNull(value, "policyGroupId is required"));
    }

    /**
     */
    public void setPolicyGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policyGroupId", java.util.Objects.requireNonNull(value, "policyGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllowAutoSetup() {
        return software.amazon.jsii.Kernel.get(this, "allowAutoSetup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllowAutoSetup(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "allowAutoSetup", value);
    }

    /**
     */
    public void setAllowAutoSetup(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allowAutoSetup", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllowBufferCount() {
        return software.amazon.jsii.Kernel.get(this, "allowBufferCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllowBufferCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "allowBufferCount", value);
    }

    /**
     */
    public void setAllowBufferCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allowBufferCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getBuyDesktopsCount() {
        return software.amazon.jsii.Kernel.get(this, "buyDesktopsCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBuyDesktopsCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "buyDesktopsCount", value);
    }

    /**
     */
    public void setBuyDesktopsCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "buyDesktopsCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getComments() {
        return software.amazon.jsii.Kernel.get(this, "comments", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComments(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "comments", value);
    }

    /**
     */
    public void setComments(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "comments", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectDuration() {
        return software.amazon.jsii.Kernel.get(this, "connectDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "connectDuration", value);
    }

    /**
     */
    public void setConnectDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDefaultInitDesktopCount() {
        return software.amazon.jsii.Kernel.get(this, "defaultInitDesktopCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultInitDesktopCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "defaultInitDesktopCount", value);
    }

    /**
     */
    public void setDefaultInitDesktopCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultInitDesktopCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDesktopGroupName() {
        return software.amazon.jsii.Kernel.get(this, "desktopGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDesktopGroupName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "desktopGroupName", value);
    }

    /**
     */
    public void setDesktopGroupName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "desktopGroupName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndUserIds() {
        return software.amazon.jsii.Kernel.get(this, "endUserIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndUserIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endUserIds", value);
    }

    /**
     */
    public void setEndUserIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "endUserIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGroupVersion() {
        return software.amazon.jsii.Kernel.get(this, "groupVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupVersion(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "groupVersion", value);
    }

    /**
     */
    public void setGroupVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIdleDisconnectDuration() {
        return software.amazon.jsii.Kernel.get(this, "idleDisconnectDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIdleDisconnectDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "idleDisconnectDuration", value);
    }

    /**
     */
    public void setIdleDisconnectDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "idleDisconnectDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKeepDuration() {
        return software.amazon.jsii.Kernel.get(this, "keepDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKeepDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "keepDuration", value);
    }

    /**
     */
    public void setKeepDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "keepDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxDesktopsCount() {
        return software.amazon.jsii.Kernel.get(this, "maxDesktopsCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxDesktopsCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxDesktopsCount", value);
    }

    /**
     */
    public void setMaxDesktopsCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxDesktopsCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMinDesktopsCount() {
        return software.amazon.jsii.Kernel.get(this, "minDesktopsCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMinDesktopsCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "minDesktopsCount", value);
    }

    /**
     */
    public void setMinDesktopsCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "minDesktopsCount", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getResetType() {
        return software.amazon.jsii.Kernel.get(this, "resetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResetType(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "resetType", value);
    }

    /**
     */
    public void setResetType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resetType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStopDuration() {
        return software.amazon.jsii.Kernel.get(this, "stopDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStopDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "stopDuration", value);
    }

    /**
     */
    public void setStopDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "stopDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVolumeEncryptionEnabled() {
        return software.amazon.jsii.Kernel.get(this, "volumeEncryptionEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVolumeEncryptionEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "volumeEncryptionEnabled", value);
    }

    /**
     */
    public void setVolumeEncryptionEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "volumeEncryptionEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVolumeEncryptionKey() {
        return software.amazon.jsii.Kernel.get(this, "volumeEncryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVolumeEncryptionKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "volumeEncryptionKey", value);
    }

    /**
     */
    public void setVolumeEncryptionKey(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "volumeEncryptionKey", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecd.RosDesktopGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecd.RosDesktopGroup> {
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
        private final com.aliyun.ros.cdk.ecd.RosDesktopGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecd.RosDesktopGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param bundleId This parameter is required.
         */
        public Builder bundleId(final java.lang.String bundleId) {
            this.props.bundleId(bundleId);
            return this;
        }
        /**
         * @return {@code this}
         * @param bundleId This parameter is required.
         */
        public Builder bundleId(final com.aliyun.ros.cdk.core.IResolvable bundleId) {
            this.props.bundleId(bundleId);
            return this;
        }

        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param officeSiteId This parameter is required.
         */
        public Builder officeSiteId(final java.lang.String officeSiteId) {
            this.props.officeSiteId(officeSiteId);
            return this;
        }
        /**
         * @return {@code this}
         * @param officeSiteId This parameter is required.
         */
        public Builder officeSiteId(final com.aliyun.ros.cdk.core.IResolvable officeSiteId) {
            this.props.officeSiteId(officeSiteId);
            return this;
        }

        /**
         * @return {@code this}
         * @param policyGroupId This parameter is required.
         */
        public Builder policyGroupId(final java.lang.String policyGroupId) {
            this.props.policyGroupId(policyGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyGroupId This parameter is required.
         */
        public Builder policyGroupId(final com.aliyun.ros.cdk.core.IResolvable policyGroupId) {
            this.props.policyGroupId(policyGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param allowAutoSetup This parameter is required.
         */
        public Builder allowAutoSetup(final java.lang.Number allowAutoSetup) {
            this.props.allowAutoSetup(allowAutoSetup);
            return this;
        }
        /**
         * @return {@code this}
         * @param allowAutoSetup This parameter is required.
         */
        public Builder allowAutoSetup(final com.aliyun.ros.cdk.core.IResolvable allowAutoSetup) {
            this.props.allowAutoSetup(allowAutoSetup);
            return this;
        }

        /**
         * @return {@code this}
         * @param allowBufferCount This parameter is required.
         */
        public Builder allowBufferCount(final java.lang.Number allowBufferCount) {
            this.props.allowBufferCount(allowBufferCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param allowBufferCount This parameter is required.
         */
        public Builder allowBufferCount(final com.aliyun.ros.cdk.core.IResolvable allowBufferCount) {
            this.props.allowBufferCount(allowBufferCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
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
         * @param buyDesktopsCount This parameter is required.
         */
        public Builder buyDesktopsCount(final java.lang.Number buyDesktopsCount) {
            this.props.buyDesktopsCount(buyDesktopsCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param buyDesktopsCount This parameter is required.
         */
        public Builder buyDesktopsCount(final com.aliyun.ros.cdk.core.IResolvable buyDesktopsCount) {
            this.props.buyDesktopsCount(buyDesktopsCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param comments This parameter is required.
         */
        public Builder comments(final java.lang.String comments) {
            this.props.comments(comments);
            return this;
        }
        /**
         * @return {@code this}
         * @param comments This parameter is required.
         */
        public Builder comments(final com.aliyun.ros.cdk.core.IResolvable comments) {
            this.props.comments(comments);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectDuration This parameter is required.
         */
        public Builder connectDuration(final java.lang.Number connectDuration) {
            this.props.connectDuration(connectDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectDuration This parameter is required.
         */
        public Builder connectDuration(final com.aliyun.ros.cdk.core.IResolvable connectDuration) {
            this.props.connectDuration(connectDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultInitDesktopCount This parameter is required.
         */
        public Builder defaultInitDesktopCount(final java.lang.Number defaultInitDesktopCount) {
            this.props.defaultInitDesktopCount(defaultInitDesktopCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultInitDesktopCount This parameter is required.
         */
        public Builder defaultInitDesktopCount(final com.aliyun.ros.cdk.core.IResolvable defaultInitDesktopCount) {
            this.props.defaultInitDesktopCount(defaultInitDesktopCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param desktopGroupName This parameter is required.
         */
        public Builder desktopGroupName(final java.lang.String desktopGroupName) {
            this.props.desktopGroupName(desktopGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param desktopGroupName This parameter is required.
         */
        public Builder desktopGroupName(final com.aliyun.ros.cdk.core.IResolvable desktopGroupName) {
            this.props.desktopGroupName(desktopGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param endUserIds This parameter is required.
         */
        public Builder endUserIds(final com.aliyun.ros.cdk.core.IResolvable endUserIds) {
            this.props.endUserIds(endUserIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param endUserIds This parameter is required.
         */
        public Builder endUserIds(final java.util.List<? extends java.lang.Object> endUserIds) {
            this.props.endUserIds(endUserIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupVersion This parameter is required.
         */
        public Builder groupVersion(final java.lang.Number groupVersion) {
            this.props.groupVersion(groupVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupVersion This parameter is required.
         */
        public Builder groupVersion(final com.aliyun.ros.cdk.core.IResolvable groupVersion) {
            this.props.groupVersion(groupVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param idleDisconnectDuration This parameter is required.
         */
        public Builder idleDisconnectDuration(final java.lang.Number idleDisconnectDuration) {
            this.props.idleDisconnectDuration(idleDisconnectDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param idleDisconnectDuration This parameter is required.
         */
        public Builder idleDisconnectDuration(final com.aliyun.ros.cdk.core.IResolvable idleDisconnectDuration) {
            this.props.idleDisconnectDuration(idleDisconnectDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param keepDuration This parameter is required.
         */
        public Builder keepDuration(final java.lang.Number keepDuration) {
            this.props.keepDuration(keepDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param keepDuration This parameter is required.
         */
        public Builder keepDuration(final com.aliyun.ros.cdk.core.IResolvable keepDuration) {
            this.props.keepDuration(keepDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxDesktopsCount This parameter is required.
         */
        public Builder maxDesktopsCount(final java.lang.Number maxDesktopsCount) {
            this.props.maxDesktopsCount(maxDesktopsCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxDesktopsCount This parameter is required.
         */
        public Builder maxDesktopsCount(final com.aliyun.ros.cdk.core.IResolvable maxDesktopsCount) {
            this.props.maxDesktopsCount(maxDesktopsCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param minDesktopsCount This parameter is required.
         */
        public Builder minDesktopsCount(final java.lang.Number minDesktopsCount) {
            this.props.minDesktopsCount(minDesktopsCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param minDesktopsCount This parameter is required.
         */
        public Builder minDesktopsCount(final com.aliyun.ros.cdk.core.IResolvable minDesktopsCount) {
            this.props.minDesktopsCount(minDesktopsCount);
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
         * @param resetType This parameter is required.
         */
        public Builder resetType(final java.lang.Number resetType) {
            this.props.resetType(resetType);
            return this;
        }
        /**
         * @return {@code this}
         * @param resetType This parameter is required.
         */
        public Builder resetType(final com.aliyun.ros.cdk.core.IResolvable resetType) {
            this.props.resetType(resetType);
            return this;
        }

        /**
         * @return {@code this}
         * @param stopDuration This parameter is required.
         */
        public Builder stopDuration(final java.lang.Number stopDuration) {
            this.props.stopDuration(stopDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param stopDuration This parameter is required.
         */
        public Builder stopDuration(final com.aliyun.ros.cdk.core.IResolvable stopDuration) {
            this.props.stopDuration(stopDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param volumeEncryptionEnabled This parameter is required.
         */
        public Builder volumeEncryptionEnabled(final java.lang.Boolean volumeEncryptionEnabled) {
            this.props.volumeEncryptionEnabled(volumeEncryptionEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param volumeEncryptionEnabled This parameter is required.
         */
        public Builder volumeEncryptionEnabled(final com.aliyun.ros.cdk.core.IResolvable volumeEncryptionEnabled) {
            this.props.volumeEncryptionEnabled(volumeEncryptionEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param volumeEncryptionKey This parameter is required.
         */
        public Builder volumeEncryptionKey(final java.lang.String volumeEncryptionKey) {
            this.props.volumeEncryptionKey(volumeEncryptionKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param volumeEncryptionKey This parameter is required.
         */
        public Builder volumeEncryptionKey(final com.aliyun.ros.cdk.core.IResolvable volumeEncryptionKey) {
            this.props.volumeEncryptionKey(volumeEncryptionKey);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecd.RosDesktopGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.ecd.RosDesktopGroup build() {
            return new com.aliyun.ros.cdk.ecd.RosDesktopGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
