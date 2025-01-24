package com.aliyun.ros.cdk.ram;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::RAM::OIDCProvider</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:42.969Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosOIDCProvider")
public class RosOIDCProvider extends com.aliyun.ros.cdk.core.RosResource {

    protected RosOIDCProvider(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosOIDCProvider(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ram.RosOIDCProvider.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosOIDCProvider(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RosOIDCProviderProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOidcProviderName() {
        return software.amazon.jsii.Kernel.get(this, "attrOidcProviderName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getFingerprints() {
        return software.amazon.jsii.Kernel.get(this, "fingerprints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFingerprints(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fingerprints", java.util.Objects.requireNonNull(value, "fingerprints is required"));
    }

    /**
     */
    public void setFingerprints(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "fingerprints", java.util.Objects.requireNonNull(value, "fingerprints is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getIssuerUrl() {
        return software.amazon.jsii.Kernel.get(this, "issuerUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIssuerUrl(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "issuerUrl", java.util.Objects.requireNonNull(value, "issuerUrl is required"));
    }

    /**
     */
    public void setIssuerUrl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "issuerUrl", java.util.Objects.requireNonNull(value, "issuerUrl is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOidcProviderName() {
        return software.amazon.jsii.Kernel.get(this, "oidcProviderName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOidcProviderName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "oidcProviderName", java.util.Objects.requireNonNull(value, "oidcProviderName is required"));
    }

    /**
     */
    public void setOidcProviderName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "oidcProviderName", java.util.Objects.requireNonNull(value, "oidcProviderName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClientIds() {
        return software.amazon.jsii.Kernel.get(this, "clientIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClientIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clientIds", value);
    }

    /**
     */
    public void setClientIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "clientIds", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getIssuanceLimitTime() {
        return software.amazon.jsii.Kernel.get(this, "issuanceLimitTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIssuanceLimitTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "issuanceLimitTime", value);
    }

    /**
     */
    public void setIssuanceLimitTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "issuanceLimitTime", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.RosOIDCProvider}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.RosOIDCProvider> {
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
        private final com.aliyun.ros.cdk.ram.RosOIDCProviderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.RosOIDCProviderProps.Builder();
        }

        /**
         * @return {@code this}
         * @param fingerprints This parameter is required.
         */
        public Builder fingerprints(final com.aliyun.ros.cdk.core.IResolvable fingerprints) {
            this.props.fingerprints(fingerprints);
            return this;
        }
        /**
         * @return {@code this}
         * @param fingerprints This parameter is required.
         */
        public Builder fingerprints(final java.util.List<? extends java.lang.Object> fingerprints) {
            this.props.fingerprints(fingerprints);
            return this;
        }

        /**
         * @return {@code this}
         * @param issuerUrl This parameter is required.
         */
        public Builder issuerUrl(final java.lang.String issuerUrl) {
            this.props.issuerUrl(issuerUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param issuerUrl This parameter is required.
         */
        public Builder issuerUrl(final com.aliyun.ros.cdk.core.IResolvable issuerUrl) {
            this.props.issuerUrl(issuerUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param oidcProviderName This parameter is required.
         */
        public Builder oidcProviderName(final java.lang.String oidcProviderName) {
            this.props.oidcProviderName(oidcProviderName);
            return this;
        }
        /**
         * @return {@code this}
         * @param oidcProviderName This parameter is required.
         */
        public Builder oidcProviderName(final com.aliyun.ros.cdk.core.IResolvable oidcProviderName) {
            this.props.oidcProviderName(oidcProviderName);
            return this;
        }

        /**
         * @return {@code this}
         * @param clientIds This parameter is required.
         */
        public Builder clientIds(final com.aliyun.ros.cdk.core.IResolvable clientIds) {
            this.props.clientIds(clientIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param clientIds This parameter is required.
         */
        public Builder clientIds(final java.util.List<? extends java.lang.Object> clientIds) {
            this.props.clientIds(clientIds);
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
         * @param issuanceLimitTime This parameter is required.
         */
        public Builder issuanceLimitTime(final java.lang.Number issuanceLimitTime) {
            this.props.issuanceLimitTime(issuanceLimitTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param issuanceLimitTime This parameter is required.
         */
        public Builder issuanceLimitTime(final com.aliyun.ros.cdk.core.IResolvable issuanceLimitTime) {
            this.props.issuanceLimitTime(issuanceLimitTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.RosOIDCProvider}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.RosOIDCProvider build() {
            return new com.aliyun.ros.cdk.ram.RosOIDCProvider(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
