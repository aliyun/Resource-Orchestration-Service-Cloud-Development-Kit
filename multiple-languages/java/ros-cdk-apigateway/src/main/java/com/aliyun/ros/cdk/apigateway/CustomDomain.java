package com.aliyun.ros.cdk.apigateway;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ApiGateway::CustomDomain</code>, which is used to bind a custom domain name and upload a Secure Sockets Layer (SSL) certificate to a specific API group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:26.743Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.CustomDomain")
public class CustomDomain extends com.aliyun.ros.cdk.core.Resource {

    protected CustomDomain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomDomain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public CustomDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.CustomDomainProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CustomDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.CustomDomainProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CertificateId: The id of the certificate.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCertificateId() {
        return software.amazon.jsii.Kernel.get(this, "attrCertificateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.CustomDomainProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.CustomDomainProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.CustomDomainProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.CustomDomain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.CustomDomain> {
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
        private final com.aliyun.ros.cdk.apigateway.CustomDomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.CustomDomainProps.Builder();
        }

        /**
         * Property domainName: Custom domain name.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: Custom domain name. This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * Property domainName: Custom domain name.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: Custom domain name. This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * Property groupId: The id of the Group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The id of the Group. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The id of the Group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The id of the Group. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property certificateBody: SSL certificate body.
         * <p>
         * @return {@code this}
         * @param certificateBody Property certificateBody: SSL certificate body. This parameter is required.
         */
        public Builder certificateBody(final java.lang.String certificateBody) {
            this.props.certificateBody(certificateBody);
            return this;
        }
        /**
         * Property certificateBody: SSL certificate body.
         * <p>
         * @return {@code this}
         * @param certificateBody Property certificateBody: SSL certificate body. This parameter is required.
         */
        public Builder certificateBody(final com.aliyun.ros.cdk.core.IResolvable certificateBody) {
            this.props.certificateBody(certificateBody);
            return this;
        }

        /**
         * Property certificateName: SSL certificate name.
         * <p>
         * @return {@code this}
         * @param certificateName Property certificateName: SSL certificate name. This parameter is required.
         */
        public Builder certificateName(final java.lang.String certificateName) {
            this.props.certificateName(certificateName);
            return this;
        }
        /**
         * Property certificateName: SSL certificate name.
         * <p>
         * @return {@code this}
         * @param certificateName Property certificateName: SSL certificate name. This parameter is required.
         */
        public Builder certificateName(final com.aliyun.ros.cdk.core.IResolvable certificateName) {
            this.props.certificateName(certificateName);
            return this;
        }

        /**
         * Property certificatePrivateKey: SSL certificate key.
         * <p>
         * @return {@code this}
         * @param certificatePrivateKey Property certificatePrivateKey: SSL certificate key. This parameter is required.
         */
        public Builder certificatePrivateKey(final java.lang.String certificatePrivateKey) {
            this.props.certificatePrivateKey(certificatePrivateKey);
            return this;
        }
        /**
         * Property certificatePrivateKey: SSL certificate key.
         * <p>
         * @return {@code this}
         * @param certificatePrivateKey Property certificatePrivateKey: SSL certificate key. This parameter is required.
         */
        public Builder certificatePrivateKey(final com.aliyun.ros.cdk.core.IResolvable certificatePrivateKey) {
            this.props.certificatePrivateKey(certificatePrivateKey);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.CustomDomain}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.CustomDomain build() {
            return new com.aliyun.ros.cdk.apigateway.CustomDomain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
