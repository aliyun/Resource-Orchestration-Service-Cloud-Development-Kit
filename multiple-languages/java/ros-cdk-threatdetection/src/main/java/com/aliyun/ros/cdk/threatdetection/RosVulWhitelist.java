package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::VulWhitelist</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.648Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosVulWhitelist")
public class RosVulWhitelist extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVulWhitelist(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVulWhitelist(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosVulWhitelist.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVulWhitelist(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosVulWhitelistProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReason() {
        return software.amazon.jsii.Kernel.get(this, "attrReason", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTargetInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVulWhitelistId() {
        return software.amazon.jsii.Kernel.get(this, "attrVulWhitelistId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "attrWhitelist", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetInfo() {
        return software.amazon.jsii.Kernel.get(this, "targetInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetInfo", java.util.Objects.requireNonNull(value, "targetInfo is required"));
    }

    /**
     */
    public void setTargetInfo(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "targetInfo", java.util.Objects.requireNonNull(value, "targetInfo is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "whitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWhitelist(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "whitelist", java.util.Objects.requireNonNull(value, "whitelist is required"));
    }

    /**
     */
    public void setWhitelist(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "whitelist", java.util.Objects.requireNonNull(value, "whitelist is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReason() {
        return software.amazon.jsii.Kernel.get(this, "reason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReason(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "reason", value);
    }

    /**
     */
    public void setReason(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "reason", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosVulWhitelist}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosVulWhitelist> {
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
        private final com.aliyun.ros.cdk.threatdetection.RosVulWhitelistProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosVulWhitelistProps.Builder();
        }

        /**
         * @return {@code this}
         * @param targetInfo This parameter is required.
         */
        public Builder targetInfo(final com.aliyun.ros.cdk.core.IResolvable targetInfo) {
            this.props.targetInfo(targetInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetInfo This parameter is required.
         */
        public Builder targetInfo(final java.util.Map<java.lang.String, ? extends java.lang.Object> targetInfo) {
            this.props.targetInfo(targetInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param whitelist This parameter is required.
         */
        public Builder whitelist(final com.aliyun.ros.cdk.core.IResolvable whitelist) {
            this.props.whitelist(whitelist);
            return this;
        }
        /**
         * @return {@code this}
         * @param whitelist This parameter is required.
         */
        public Builder whitelist(final java.util.Map<java.lang.String, ? extends java.lang.Object> whitelist) {
            this.props.whitelist(whitelist);
            return this;
        }

        /**
         * @return {@code this}
         * @param reason This parameter is required.
         */
        public Builder reason(final java.lang.String reason) {
            this.props.reason(reason);
            return this;
        }
        /**
         * @return {@code this}
         * @param reason This parameter is required.
         */
        public Builder reason(final com.aliyun.ros.cdk.core.IResolvable reason) {
            this.props.reason(reason);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosVulWhitelist}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosVulWhitelist build() {
            return new com.aliyun.ros.cdk.threatdetection.RosVulWhitelist(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
