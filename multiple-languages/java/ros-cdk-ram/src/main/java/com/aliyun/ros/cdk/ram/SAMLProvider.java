package com.aliyun.ros.cdk.ram;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RAM::SAMLProvider</code>, which is used to create an identity provider (IdP) for role-based single sign-on (SSO).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.442Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.SAMLProvider")
public class SAMLProvider extends com.aliyun.ros.cdk.core.Resource {

    protected SAMLProvider(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SAMLProvider(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SAMLProvider(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.SAMLProviderProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SAMLProvider(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.SAMLProviderProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Arn: ARN.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SAMLProviderName: IdP Name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSamlProviderName() {
        return software.amazon.jsii.Kernel.get(this, "attrSamlProviderName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.SAMLProvider}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.SAMLProvider> {
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
        private final com.aliyun.ros.cdk.ram.SAMLProviderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.SAMLProviderProps.Builder();
        }

        /**
         * Property samlProviderName: IdP Name.
         * <p>
         * The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
         * <p>
         * @return {@code this}
         * @param samlProviderName Property samlProviderName: IdP Name. This parameter is required.
         */
        public Builder samlProviderName(final java.lang.String samlProviderName) {
            this.props.samlProviderName(samlProviderName);
            return this;
        }
        /**
         * Property samlProviderName: IdP Name.
         * <p>
         * The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
         * <p>
         * @return {@code this}
         * @param samlProviderName Property samlProviderName: IdP Name. This parameter is required.
         */
        public Builder samlProviderName(final com.aliyun.ros.cdk.core.IResolvable samlProviderName) {
            this.props.samlProviderName(samlProviderName);
            return this;
        }

        /**
         * Property description: The description can contain a maximum of 256 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: The description can contain a maximum of 256 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description can contain a maximum of 256 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: The description can contain a maximum of 256 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property samlMetadataDocument: SAML metadata document.
         * <p>
         * The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
         * <p>
         * @return {@code this}
         * @param samlMetadataDocument Property samlMetadataDocument: SAML metadata document. This parameter is required.
         */
        public Builder samlMetadataDocument(final java.lang.String samlMetadataDocument) {
            this.props.samlMetadataDocument(samlMetadataDocument);
            return this;
        }
        /**
         * Property samlMetadataDocument: SAML metadata document.
         * <p>
         * The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
         * <p>
         * @return {@code this}
         * @param samlMetadataDocument Property samlMetadataDocument: SAML metadata document. This parameter is required.
         */
        public Builder samlMetadataDocument(final com.aliyun.ros.cdk.core.IResolvable samlMetadataDocument) {
            this.props.samlMetadataDocument(samlMetadataDocument);
            return this;
        }

        /**
         * Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document.
         * <p>
         * The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
         * <p>
         * @return {@code this}
         * @param samlMetadataDocumentUrl Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. This parameter is required.
         */
        public Builder samlMetadataDocumentUrl(final java.lang.String samlMetadataDocumentUrl) {
            this.props.samlMetadataDocumentUrl(samlMetadataDocumentUrl);
            return this;
        }
        /**
         * Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document.
         * <p>
         * The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
         * <p>
         * @return {@code this}
         * @param samlMetadataDocumentUrl Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. This parameter is required.
         */
        public Builder samlMetadataDocumentUrl(final com.aliyun.ros.cdk.core.IResolvable samlMetadataDocumentUrl) {
            this.props.samlMetadataDocumentUrl(samlMetadataDocumentUrl);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.SAMLProvider}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.SAMLProvider build() {
            return new com.aliyun.ros.cdk.ram.SAMLProvider(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
