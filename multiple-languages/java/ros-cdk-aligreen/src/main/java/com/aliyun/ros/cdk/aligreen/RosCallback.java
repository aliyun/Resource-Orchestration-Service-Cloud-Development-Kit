package com.aliyun.ros.cdk.aligreen;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::Aligreen::Callback</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.217Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.RosCallback")
public class RosCallback extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCallback(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCallback(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.aligreen.RosCallback.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCallback(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.RosCallbackProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCallbackId() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCallbackName() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCallbackUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrCallbackUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCryptType() {
        return software.amazon.jsii.Kernel.get(this, "attrCryptType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCallbackName() {
        return software.amazon.jsii.Kernel.get(this, "callbackName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCallbackName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "callbackName", java.util.Objects.requireNonNull(value, "callbackName is required"));
    }

    /**
     */
    public void setCallbackName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "callbackName", java.util.Objects.requireNonNull(value, "callbackName is required"));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getCallbackUrl() {
        return software.amazon.jsii.Kernel.get(this, "callbackUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCallbackUrl(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "callbackUrl", java.util.Objects.requireNonNull(value, "callbackUrl is required"));
    }

    /**
     */
    public void setCallbackUrl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "callbackUrl", java.util.Objects.requireNonNull(value, "callbackUrl is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCryptType() {
        return software.amazon.jsii.Kernel.get(this, "cryptType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCryptType(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cryptType", value);
    }

    /**
     */
    public void setCryptType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cryptType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.aligreen.RosCallback}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.aligreen.RosCallback> {
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
        private final com.aliyun.ros.cdk.aligreen.RosCallbackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.aligreen.RosCallbackProps.Builder();
        }

        /**
         * @return {@code this}
         * @param callbackName This parameter is required.
         */
        public Builder callbackName(final java.lang.String callbackName) {
            this.props.callbackName(callbackName);
            return this;
        }
        /**
         * @return {@code this}
         * @param callbackName This parameter is required.
         */
        public Builder callbackName(final com.aliyun.ros.cdk.core.IResolvable callbackName) {
            this.props.callbackName(callbackName);
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
         * @param callbackUrl This parameter is required.
         */
        public Builder callbackUrl(final java.lang.String callbackUrl) {
            this.props.callbackUrl(callbackUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param callbackUrl This parameter is required.
         */
        public Builder callbackUrl(final com.aliyun.ros.cdk.core.IResolvable callbackUrl) {
            this.props.callbackUrl(callbackUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param cryptType This parameter is required.
         */
        public Builder cryptType(final java.lang.Number cryptType) {
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.aligreen.RosCallback}.
         */
        @Override
        public com.aliyun.ros.cdk.aligreen.RosCallback build() {
            return new com.aliyun.ros.cdk.aligreen.RosCallback(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
