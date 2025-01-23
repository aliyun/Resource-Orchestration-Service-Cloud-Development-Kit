package com.aliyun.ros.cdk.aligreen;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::Aligreen::AuditCallback</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:34.453Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.RosAuditCallback")
public class RosAuditCallback extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAuditCallback(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAuditCallback(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.aligreen.RosAuditCallback.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAuditCallback(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.RosAuditCallbackProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuditCallbackName() {
        return software.amazon.jsii.Kernel.get(this, "attrAuditCallbackName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCallbackSuggestions() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackSuggestions", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCallbackTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackTypes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCryptType() {
        return software.amazon.jsii.Kernel.get(this, "attrCryptType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAuditCallbackName() {
        return software.amazon.jsii.Kernel.get(this, "auditCallbackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuditCallbackName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "auditCallbackName", java.util.Objects.requireNonNull(value, "auditCallbackName is required"));
    }

    /**
     */
    public void setAuditCallbackName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "auditCallbackName", java.util.Objects.requireNonNull(value, "auditCallbackName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCallbackSuggestions() {
        return software.amazon.jsii.Kernel.get(this, "callbackSuggestions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCallbackSuggestions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "callbackSuggestions", java.util.Objects.requireNonNull(value, "callbackSuggestions is required"));
    }

    /**
     */
    public void setCallbackSuggestions(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "callbackSuggestions", java.util.Objects.requireNonNull(value, "callbackSuggestions is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCallbackTypes() {
        return software.amazon.jsii.Kernel.get(this, "callbackTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCallbackTypes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "callbackTypes", java.util.Objects.requireNonNull(value, "callbackTypes is required"));
    }

    /**
     */
    public void setCallbackTypes(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "callbackTypes", java.util.Objects.requireNonNull(value, "callbackTypes is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCryptType() {
        return software.amazon.jsii.Kernel.get(this, "cryptType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCryptType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cryptType", java.util.Objects.requireNonNull(value, "cryptType is required"));
    }

    /**
     */
    public void setCryptType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cryptType", java.util.Objects.requireNonNull(value, "cryptType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getUrl() {
        return software.amazon.jsii.Kernel.get(this, "url", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUrl(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "url", java.util.Objects.requireNonNull(value, "url is required"));
    }

    /**
     */
    public void setUrl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "url", java.util.Objects.requireNonNull(value, "url is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.aligreen.RosAuditCallback}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.aligreen.RosAuditCallback> {
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
        private final com.aliyun.ros.cdk.aligreen.RosAuditCallbackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.aligreen.RosAuditCallbackProps.Builder();
        }

        /**
         * @return {@code this}
         * @param auditCallbackName This parameter is required.
         */
        public Builder auditCallbackName(final java.lang.String auditCallbackName) {
            this.props.auditCallbackName(auditCallbackName);
            return this;
        }
        /**
         * @return {@code this}
         * @param auditCallbackName This parameter is required.
         */
        public Builder auditCallbackName(final com.aliyun.ros.cdk.core.IResolvable auditCallbackName) {
            this.props.auditCallbackName(auditCallbackName);
            return this;
        }

        /**
         * @return {@code this}
         * @param callbackSuggestions This parameter is required.
         */
        public Builder callbackSuggestions(final com.aliyun.ros.cdk.core.IResolvable callbackSuggestions) {
            this.props.callbackSuggestions(callbackSuggestions);
            return this;
        }
        /**
         * @return {@code this}
         * @param callbackSuggestions This parameter is required.
         */
        public Builder callbackSuggestions(final java.util.List<? extends java.lang.Object> callbackSuggestions) {
            this.props.callbackSuggestions(callbackSuggestions);
            return this;
        }

        /**
         * @return {@code this}
         * @param callbackTypes This parameter is required.
         */
        public Builder callbackTypes(final com.aliyun.ros.cdk.core.IResolvable callbackTypes) {
            this.props.callbackTypes(callbackTypes);
            return this;
        }
        /**
         * @return {@code this}
         * @param callbackTypes This parameter is required.
         */
        public Builder callbackTypes(final java.util.List<? extends java.lang.Object> callbackTypes) {
            this.props.callbackTypes(callbackTypes);
            return this;
        }

        /**
         * @return {@code this}
         * @param cryptType This parameter is required.
         */
        public Builder cryptType(final java.lang.String cryptType) {
            this.props.cryptType(cryptType);
            return this;
        }
        /**
         * @return {@code this}
         * @param cryptType This parameter is required.
         */
        public Builder cryptType(final com.aliyun.ros.cdk.core.IResolvable cryptType) {
            this.props.cryptType(cryptType);
            return this;
        }

        /**
         * @return {@code this}
         * @param url This parameter is required.
         */
        public Builder url(final java.lang.String url) {
            this.props.url(url);
            return this;
        }
        /**
         * @return {@code this}
         * @param url This parameter is required.
         */
        public Builder url(final com.aliyun.ros.cdk.core.IResolvable url) {
            this.props.url(url);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.aligreen.RosAuditCallback}.
         */
        @Override
        public com.aliyun.ros.cdk.aligreen.RosAuditCallback build() {
            return new com.aliyun.ros.cdk.aligreen.RosAuditCallback(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
