package com.aliyun.ros.cdk.slb;

/**
 * A ROS resource type:  <code>ALIYUN::SLB::Certificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.216Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.Certificate")
public class Certificate extends com.aliyun.ros.cdk.core.Resource {

    protected Certificate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Certificate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::SLB::Certificate</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Certificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.slb.CertificateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::SLB::Certificate</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Certificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.slb.CertificateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>ALIYUN::SLB::Certificate</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Certificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute CertificateId: The ID of the certificate.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCertificateId() {
        return software.amazon.jsii.Kernel.get(this, "attrCertificateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Fingerprint: The fingerprint of the certificate.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFingerprint() {
        return software.amazon.jsii.Kernel.get(this, "attrFingerprint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.Certificate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.Certificate> {
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
        private com.aliyun.ros.cdk.slb.CertificateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
         * <p>
         * @return {@code this}
         * @param aliCloudCertificateId Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate. This parameter is required.
         */
        public Builder aliCloudCertificateId(final java.lang.String aliCloudCertificateId) {
            this.props().aliCloudCertificateId(aliCloudCertificateId);
            return this;
        }
        /**
         * Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
         * <p>
         * @return {@code this}
         * @param aliCloudCertificateId Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate. This parameter is required.
         */
        public Builder aliCloudCertificateId(final com.aliyun.ros.cdk.core.IResolvable aliCloudCertificateId) {
            this.props().aliCloudCertificateId(aliCloudCertificateId);
            return this;
        }

        /**
         * Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
         * <p>
         * @return {@code this}
         * @param aliCloudCertificateName Property aliCloudCertificateName: The name of the Alibaba Cloud certificate. This parameter is required.
         */
        public Builder aliCloudCertificateName(final java.lang.String aliCloudCertificateName) {
            this.props().aliCloudCertificateName(aliCloudCertificateName);
            return this;
        }
        /**
         * Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
         * <p>
         * @return {@code this}
         * @param aliCloudCertificateName Property aliCloudCertificateName: The name of the Alibaba Cloud certificate. This parameter is required.
         */
        public Builder aliCloudCertificateName(final com.aliyun.ros.cdk.core.IResolvable aliCloudCertificateName) {
            this.props().aliCloudCertificateName(aliCloudCertificateName);
            return this;
        }

        /**
         * Property certificate: The content of the certificate public key.
         * <p>
         * @return {@code this}
         * @param certificate Property certificate: The content of the certificate public key. This parameter is required.
         */
        public Builder certificate(final java.lang.String certificate) {
            this.props().certificate(certificate);
            return this;
        }
        /**
         * Property certificate: The content of the certificate public key.
         * <p>
         * @return {@code this}
         * @param certificate Property certificate: The content of the certificate public key. This parameter is required.
         */
        public Builder certificate(final com.aliyun.ros.cdk.core.IResolvable certificate) {
            this.props().certificate(certificate);
            return this;
        }

        /**
         * Property certificateName: The name of the certificate.
         * <p>
         * @return {@code this}
         * @param certificateName Property certificateName: The name of the certificate. This parameter is required.
         */
        public Builder certificateName(final java.lang.String certificateName) {
            this.props().certificateName(certificateName);
            return this;
        }
        /**
         * Property certificateName: The name of the certificate.
         * <p>
         * @return {@code this}
         * @param certificateName Property certificateName: The name of the certificate. This parameter is required.
         */
        public Builder certificateName(final com.aliyun.ros.cdk.core.IResolvable certificateName) {
            this.props().certificateName(certificateName);
            return this;
        }

        /**
         * Property certificateType: The type of the certificate.
         * <p>
         * @return {@code this}
         * @param certificateType Property certificateType: The type of the certificate. This parameter is required.
         */
        public Builder certificateType(final java.lang.String certificateType) {
            this.props().certificateType(certificateType);
            return this;
        }
        /**
         * Property certificateType: The type of the certificate.
         * <p>
         * @return {@code this}
         * @param certificateType Property certificateType: The type of the certificate. This parameter is required.
         */
        public Builder certificateType(final com.aliyun.ros.cdk.core.IResolvable certificateType) {
            this.props().certificateType(certificateType);
            return this;
        }

        /**
         * Property privateKey: The private key.
         * <p>
         * @return {@code this}
         * @param privateKey Property privateKey: The private key. This parameter is required.
         */
        public Builder privateKey(final java.lang.String privateKey) {
            this.props().privateKey(privateKey);
            return this;
        }
        /**
         * Property privateKey: The private key.
         * <p>
         * @return {@code this}
         * @param privateKey Property privateKey: The private key. This parameter is required.
         */
        public Builder privateKey(final com.aliyun.ros.cdk.core.IResolvable privateKey) {
            this.props().privateKey(privateKey);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.slb.RosCertificate.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.Certificate}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.Certificate build() {
            return new com.aliyun.ros.cdk.slb.Certificate(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.slb.CertificateProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.slb.CertificateProps.Builder();
            }
            return this.props;
        }
    }
}
