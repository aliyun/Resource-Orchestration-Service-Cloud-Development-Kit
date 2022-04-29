package com.aliyun.ros.cdk.cas;

/**
 * A ROS resource type:  `ALIYUN::CAS::Certificate`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:27.880Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.Certificate")
public class Certificate extends com.aliyun.ros.cdk.core.Resource {

    protected Certificate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Certificate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CAS::Certificate`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Certificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.CertificateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CAS::Certificate`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Certificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.CertificateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CertId: Certificate ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCertId() {
        return software.amazon.jsii.Kernel.get(this, "attrCertId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cas.Certificate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cas.Certificate> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cas.CertificateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cas.CertificateProps.Builder();
        }

        /**
         * Property cert: Specify the content of the certificate.
         * <p>
         * To use the PEM encoding format.
         * <p>
         * @return {@code this}
         * @param cert Property cert: Specify the content of the certificate. This parameter is required.
         */
        public Builder cert(final java.lang.String cert) {
            this.props.cert(cert);
            return this;
        }
        /**
         * Property cert: Specify the content of the certificate.
         * <p>
         * To use the PEM encoding format.
         * <p>
         * @return {@code this}
         * @param cert Property cert: Specify the content of the certificate. This parameter is required.
         */
        public Builder cert(final com.aliyun.ros.cdk.core.IResolvable cert) {
            this.props.cert(cert);
            return this;
        }

        /**
         * Property key: Specify the certificate private key content.
         * <p>
         * To use the PEM encoding format.
         * <p>
         * @return {@code this}
         * @param key Property key: Specify the certificate private key content. This parameter is required.
         */
        public Builder key(final java.lang.String key) {
            this.props.key(key);
            return this;
        }
        /**
         * Property key: Specify the certificate private key content.
         * <p>
         * To use the PEM encoding format.
         * <p>
         * @return {@code this}
         * @param key Property key: Specify the certificate private key content. This parameter is required.
         */
        public Builder key(final com.aliyun.ros.cdk.core.IResolvable key) {
            this.props.key(key);
            return this;
        }

        /**
         * Property name: Custom certificate name.
         * <p>
         * The certificate name under a user cannot be duplicated.
         * <p>
         * @return {@code this}
         * @param name Property name: Custom certificate name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Custom certificate name.
         * <p>
         * The certificate name under a user cannot be duplicated.
         * <p>
         * @return {@code this}
         * @param name Property name: Custom certificate name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property lang: Specifies the language type for requesting and receiving messages.
         * <p>
         * @return {@code this}
         * @param lang Property lang: Specifies the language type for requesting and receiving messages. This parameter is required.
         */
        public Builder lang(final java.lang.String lang) {
            this.props.lang(lang);
            return this;
        }
        /**
         * Property lang: Specifies the language type for requesting and receiving messages.
         * <p>
         * @return {@code this}
         * @param lang Property lang: Specifies the language type for requesting and receiving messages. This parameter is required.
         */
        public Builder lang(final com.aliyun.ros.cdk.core.IResolvable lang) {
            this.props.lang(lang);
            return this;
        }

        /**
         * Property sourceIp: Specifies the source IP address of the request.
         * <p>
         * @return {@code this}
         * @param sourceIp Property sourceIp: Specifies the source IP address of the request. This parameter is required.
         */
        public Builder sourceIp(final java.lang.String sourceIp) {
            this.props.sourceIp(sourceIp);
            return this;
        }
        /**
         * Property sourceIp: Specifies the source IP address of the request.
         * <p>
         * @return {@code this}
         * @param sourceIp Property sourceIp: Specifies the source IP address of the request. This parameter is required.
         */
        public Builder sourceIp(final com.aliyun.ros.cdk.core.IResolvable sourceIp) {
            this.props.sourceIp(sourceIp);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cas.Certificate}.
         */
        @Override
        public com.aliyun.ros.cdk.cas.Certificate build() {
            return new com.aliyun.ros.cdk.cas.Certificate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
