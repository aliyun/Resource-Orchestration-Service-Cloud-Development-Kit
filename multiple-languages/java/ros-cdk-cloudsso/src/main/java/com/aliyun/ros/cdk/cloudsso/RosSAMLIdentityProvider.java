package com.aliyun.ros.cdk.cloudsso;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CloudSSO::SAMLIdentityProvider</code>, which is used to configure the information about a Security Assertion Markup Language (SAML) identity provider (IdP).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:13.095Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.RosSAMLIdentityProvider")
public class RosSAMLIdentityProvider extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSAMLIdentityProvider(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSAMLIdentityProvider(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudsso.RosSAMLIdentityProvider.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSAMLIdentityProvider(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.RosSAMLIdentityProviderProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId() {
        return software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDirectoryId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "directoryId", java.util.Objects.requireNonNull(value, "directoryId is required"));
    }

    /**
     */
    public void setDirectoryId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "directoryId", java.util.Objects.requireNonNull(value, "directoryId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEncodedMetadataDocument() {
        return software.amazon.jsii.Kernel.get(this, "encodedMetadataDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEncodedMetadataDocument(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "encodedMetadataDocument", value);
    }

    /**
     */
    public void setEncodedMetadataDocument(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "encodedMetadataDocument", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEntityId() {
        return software.amazon.jsii.Kernel.get(this, "entityId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEntityId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "entityId", value);
    }

    /**
     */
    public void setEntityId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "entityId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoginUrl() {
        return software.amazon.jsii.Kernel.get(this, "loginUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoginUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loginUrl", value);
    }

    /**
     */
    public void setLoginUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loginUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSsoStatus() {
        return software.amazon.jsii.Kernel.get(this, "ssoStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSsoStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ssoStatus", value);
    }

    /**
     */
    public void setSsoStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ssoStatus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWantRequestSigned() {
        return software.amazon.jsii.Kernel.get(this, "wantRequestSigned", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWantRequestSigned(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "wantRequestSigned", value);
    }

    /**
     */
    public void setWantRequestSigned(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "wantRequestSigned", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getX509Certificate() {
        return software.amazon.jsii.Kernel.get(this, "x509Certificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setX509Certificate(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "x509Certificate", value);
    }

    /**
     */
    public void setX509Certificate(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "x509Certificate", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsso.RosSAMLIdentityProvider}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsso.RosSAMLIdentityProvider> {
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
        private final com.aliyun.ros.cdk.cloudsso.RosSAMLIdentityProviderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsso.RosSAMLIdentityProviderProps.Builder();
        }

        /**
         * @return {@code this}
         * @param directoryId This parameter is required.
         */
        public Builder directoryId(final java.lang.String directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }
        /**
         * @return {@code this}
         * @param directoryId This parameter is required.
         */
        public Builder directoryId(final com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }

        /**
         * @return {@code this}
         * @param encodedMetadataDocument This parameter is required.
         */
        public Builder encodedMetadataDocument(final java.lang.String encodedMetadataDocument) {
            this.props.encodedMetadataDocument(encodedMetadataDocument);
            return this;
        }
        /**
         * @return {@code this}
         * @param encodedMetadataDocument This parameter is required.
         */
        public Builder encodedMetadataDocument(final com.aliyun.ros.cdk.core.IResolvable encodedMetadataDocument) {
            this.props.encodedMetadataDocument(encodedMetadataDocument);
            return this;
        }

        /**
         * @return {@code this}
         * @param entityId This parameter is required.
         */
        public Builder entityId(final java.lang.String entityId) {
            this.props.entityId(entityId);
            return this;
        }
        /**
         * @return {@code this}
         * @param entityId This parameter is required.
         */
        public Builder entityId(final com.aliyun.ros.cdk.core.IResolvable entityId) {
            this.props.entityId(entityId);
            return this;
        }

        /**
         * @return {@code this}
         * @param loginUrl This parameter is required.
         */
        public Builder loginUrl(final java.lang.String loginUrl) {
            this.props.loginUrl(loginUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param loginUrl This parameter is required.
         */
        public Builder loginUrl(final com.aliyun.ros.cdk.core.IResolvable loginUrl) {
            this.props.loginUrl(loginUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param ssoStatus This parameter is required.
         */
        public Builder ssoStatus(final java.lang.String ssoStatus) {
            this.props.ssoStatus(ssoStatus);
            return this;
        }
        /**
         * @return {@code this}
         * @param ssoStatus This parameter is required.
         */
        public Builder ssoStatus(final com.aliyun.ros.cdk.core.IResolvable ssoStatus) {
            this.props.ssoStatus(ssoStatus);
            return this;
        }

        /**
         * @return {@code this}
         * @param wantRequestSigned This parameter is required.
         */
        public Builder wantRequestSigned(final java.lang.Boolean wantRequestSigned) {
            this.props.wantRequestSigned(wantRequestSigned);
            return this;
        }
        /**
         * @return {@code this}
         * @param wantRequestSigned This parameter is required.
         */
        public Builder wantRequestSigned(final com.aliyun.ros.cdk.core.IResolvable wantRequestSigned) {
            this.props.wantRequestSigned(wantRequestSigned);
            return this;
        }

        /**
         * @return {@code this}
         * @param x509Certificate This parameter is required.
         */
        public Builder x509Certificate(final java.lang.String x509Certificate) {
            this.props.x509Certificate(x509Certificate);
            return this;
        }
        /**
         * @return {@code this}
         * @param x509Certificate This parameter is required.
         */
        public Builder x509Certificate(final com.aliyun.ros.cdk.core.IResolvable x509Certificate) {
            this.props.x509Certificate(x509Certificate);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsso.RosSAMLIdentityProvider}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsso.RosSAMLIdentityProvider build() {
            return new com.aliyun.ros.cdk.cloudsso.RosSAMLIdentityProvider(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
