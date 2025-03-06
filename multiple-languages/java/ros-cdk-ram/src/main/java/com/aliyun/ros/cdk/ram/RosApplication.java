package com.aliyun.ros.cdk.ram;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::RAM::Application</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.417Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosApplication")
public class RosApplication extends com.aliyun.ros.cdk.core.RosResource {

    protected RosApplication(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosApplication(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ram.RosApplication.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RosApplicationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppName() {
        return software.amazon.jsii.Kernel.get(this, "attrAppName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAppName() {
        return software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appName", java.util.Objects.requireNonNull(value, "appName is required"));
    }

    /**
     */
    public void setAppName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appName", java.util.Objects.requireNonNull(value, "appName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAppType() {
        return software.amazon.jsii.Kernel.get(this, "appType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appType", java.util.Objects.requireNonNull(value, "appType is required"));
    }

    /**
     */
    public void setAppType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appType", java.util.Objects.requireNonNull(value, "appType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisplayName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "displayName", java.util.Objects.requireNonNull(value, "displayName is required"));
    }

    /**
     */
    public void setDisplayName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "displayName", java.util.Objects.requireNonNull(value, "displayName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccessTokenValidity() {
        return software.amazon.jsii.Kernel.get(this, "accessTokenValidity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccessTokenValidity(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "accessTokenValidity", value);
    }

    /**
     */
    public void setAccessTokenValidity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accessTokenValidity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIsMultiTenant() {
        return software.amazon.jsii.Kernel.get(this, "isMultiTenant", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIsMultiTenant(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "isMultiTenant", value);
    }

    /**
     */
    public void setIsMultiTenant(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isMultiTenant", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPredefinedScopes() {
        return software.amazon.jsii.Kernel.get(this, "predefinedScopes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPredefinedScopes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "predefinedScopes", value);
    }

    /**
     */
    public void setPredefinedScopes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "predefinedScopes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRedirectUris() {
        return software.amazon.jsii.Kernel.get(this, "redirectUris", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRedirectUris(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "redirectUris", value);
    }

    /**
     */
    public void setRedirectUris(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "redirectUris", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRefreshTokenValidity() {
        return software.amazon.jsii.Kernel.get(this, "refreshTokenValidity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRefreshTokenValidity(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "refreshTokenValidity", value);
    }

    /**
     */
    public void setRefreshTokenValidity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "refreshTokenValidity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRequiredScopes() {
        return software.amazon.jsii.Kernel.get(this, "requiredScopes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRequiredScopes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "requiredScopes", value);
    }

    /**
     */
    public void setRequiredScopes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "requiredScopes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecretRequired() {
        return software.amazon.jsii.Kernel.get(this, "secretRequired", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecretRequired(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "secretRequired", value);
    }

    /**
     */
    public void setSecretRequired(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secretRequired", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.RosApplication}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.RosApplication> {
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
        private final com.aliyun.ros.cdk.ram.RosApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.RosApplicationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param appName This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * @return {@code this}
         * @param appName This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * @return {@code this}
         * @param appType This parameter is required.
         */
        public Builder appType(final java.lang.String appType) {
            this.props.appType(appType);
            return this;
        }
        /**
         * @return {@code this}
         * @param appType This parameter is required.
         */
        public Builder appType(final com.aliyun.ros.cdk.core.IResolvable appType) {
            this.props.appType(appType);
            return this;
        }

        /**
         * @return {@code this}
         * @param displayName This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * @return {@code this}
         * @param displayName This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * @return {@code this}
         * @param accessTokenValidity This parameter is required.
         */
        public Builder accessTokenValidity(final java.lang.Number accessTokenValidity) {
            this.props.accessTokenValidity(accessTokenValidity);
            return this;
        }
        /**
         * @return {@code this}
         * @param accessTokenValidity This parameter is required.
         */
        public Builder accessTokenValidity(final com.aliyun.ros.cdk.core.IResolvable accessTokenValidity) {
            this.props.accessTokenValidity(accessTokenValidity);
            return this;
        }

        /**
         * @return {@code this}
         * @param isMultiTenant This parameter is required.
         */
        public Builder isMultiTenant(final java.lang.Boolean isMultiTenant) {
            this.props.isMultiTenant(isMultiTenant);
            return this;
        }
        /**
         * @return {@code this}
         * @param isMultiTenant This parameter is required.
         */
        public Builder isMultiTenant(final com.aliyun.ros.cdk.core.IResolvable isMultiTenant) {
            this.props.isMultiTenant(isMultiTenant);
            return this;
        }

        /**
         * @return {@code this}
         * @param predefinedScopes This parameter is required.
         */
        public Builder predefinedScopes(final com.aliyun.ros.cdk.core.IResolvable predefinedScopes) {
            this.props.predefinedScopes(predefinedScopes);
            return this;
        }
        /**
         * @return {@code this}
         * @param predefinedScopes This parameter is required.
         */
        public Builder predefinedScopes(final java.util.List<? extends java.lang.Object> predefinedScopes) {
            this.props.predefinedScopes(predefinedScopes);
            return this;
        }

        /**
         * @return {@code this}
         * @param redirectUris This parameter is required.
         */
        public Builder redirectUris(final com.aliyun.ros.cdk.core.IResolvable redirectUris) {
            this.props.redirectUris(redirectUris);
            return this;
        }
        /**
         * @return {@code this}
         * @param redirectUris This parameter is required.
         */
        public Builder redirectUris(final java.util.List<? extends java.lang.Object> redirectUris) {
            this.props.redirectUris(redirectUris);
            return this;
        }

        /**
         * @return {@code this}
         * @param refreshTokenValidity This parameter is required.
         */
        public Builder refreshTokenValidity(final java.lang.Number refreshTokenValidity) {
            this.props.refreshTokenValidity(refreshTokenValidity);
            return this;
        }
        /**
         * @return {@code this}
         * @param refreshTokenValidity This parameter is required.
         */
        public Builder refreshTokenValidity(final com.aliyun.ros.cdk.core.IResolvable refreshTokenValidity) {
            this.props.refreshTokenValidity(refreshTokenValidity);
            return this;
        }

        /**
         * @return {@code this}
         * @param requiredScopes This parameter is required.
         */
        public Builder requiredScopes(final com.aliyun.ros.cdk.core.IResolvable requiredScopes) {
            this.props.requiredScopes(requiredScopes);
            return this;
        }
        /**
         * @return {@code this}
         * @param requiredScopes This parameter is required.
         */
        public Builder requiredScopes(final java.util.List<? extends java.lang.Object> requiredScopes) {
            this.props.requiredScopes(requiredScopes);
            return this;
        }

        /**
         * @return {@code this}
         * @param secretRequired This parameter is required.
         */
        public Builder secretRequired(final java.lang.Boolean secretRequired) {
            this.props.secretRequired(secretRequired);
            return this;
        }
        /**
         * @return {@code this}
         * @param secretRequired This parameter is required.
         */
        public Builder secretRequired(final com.aliyun.ros.cdk.core.IResolvable secretRequired) {
            this.props.secretRequired(secretRequired);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.RosApplication}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.RosApplication build() {
            return new com.aliyun.ros.cdk.ram.RosApplication(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
