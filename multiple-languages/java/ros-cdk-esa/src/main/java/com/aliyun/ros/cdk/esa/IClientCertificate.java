package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>ClientCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.439Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IClientCertificate")
@software.amazon.jsii.Jsii.Proxy(IClientCertificate.Jsii$Proxy.class)
public interface IClientCertificate extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CACertificateId: The ID of the CA certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCaCertificateId();

    /**
     * Attribute Certificate: Certificate content.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate();

    /**
     * Attribute ClientCertId: ClientCertificate Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientCertId();

    /**
     * Attribute ClientCertificateName: The certificate name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientCertificateName();

    /**
     * Attribute CommonName: The Common Name of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName();

    /**
     * Attribute CreateTime: The time when the certificate was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Issuer: The certificate authority (CA) that issued the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuer();

    /**
     * Attribute NotAfter: The time when the certificate expires.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotAfter();

    /**
     * Attribute NotBefore: The time when the certificate takes effect.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotBefore();

    /**
     * Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubkeyAlgorithm();

    /**
     * Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSan();

    /**
     * Attribute SignatureAlgorithm: The signature algorithm of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignatureAlgorithm();

    /**
     * Attribute SiteId: Site Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId();

    /**
     * Attribute SiteName: The website name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName();

    /**
     * Attribute Type: The certificate type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    /**
     * Attribute UpdateTime: The time when the certificate was updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ClientCertificateProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IClientCertificate.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute CACertificateId: The ID of the CA certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCaCertificateId() {
            return software.amazon.jsii.Kernel.get(this, "attrCaCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Certificate: Certificate content.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate() {
            return software.amazon.jsii.Kernel.get(this, "attrCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClientCertId: ClientCertificate Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientCertId() {
            return software.amazon.jsii.Kernel.get(this, "attrClientCertId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClientCertificateName: The certificate name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientCertificateName() {
            return software.amazon.jsii.Kernel.get(this, "attrClientCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonName: The Common Name of the certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the certificate was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Issuer: The certificate authority (CA) that issued the certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuer() {
            return software.amazon.jsii.Kernel.get(this, "attrIssuer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotAfter: The time when the certificate expires.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotAfter() {
            return software.amazon.jsii.Kernel.get(this, "attrNotAfter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotBefore: The time when the certificate takes effect.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotBefore() {
            return software.amazon.jsii.Kernel.get(this, "attrNotBefore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubkeyAlgorithm() {
            return software.amazon.jsii.Kernel.get(this, "attrPubkeyAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSan() {
            return software.amazon.jsii.Kernel.get(this, "attrSan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SignatureAlgorithm: The signature algorithm of the certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignatureAlgorithm() {
            return software.amazon.jsii.Kernel.get(this, "attrSignatureAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: Site Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteName: The website name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The certificate type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the certificate was updated.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ClientCertificateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.ClientCertificateProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IClientCertificate}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IClientCertificate, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute CACertificateId: The ID of the CA certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCaCertificateId() {
            return software.amazon.jsii.Kernel.get(this, "attrCaCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Certificate: Certificate content.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate() {
            return software.amazon.jsii.Kernel.get(this, "attrCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClientCertId: ClientCertificate Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientCertId() {
            return software.amazon.jsii.Kernel.get(this, "attrClientCertId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClientCertificateName: The certificate name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientCertificateName() {
            return software.amazon.jsii.Kernel.get(this, "attrClientCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonName: The Common Name of the certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the certificate was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Issuer: The certificate authority (CA) that issued the certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuer() {
            return software.amazon.jsii.Kernel.get(this, "attrIssuer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotAfter: The time when the certificate expires.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotAfter() {
            return software.amazon.jsii.Kernel.get(this, "attrNotAfter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotBefore: The time when the certificate takes effect.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotBefore() {
            return software.amazon.jsii.Kernel.get(this, "attrNotBefore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubkeyAlgorithm() {
            return software.amazon.jsii.Kernel.get(this, "attrPubkeyAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSan() {
            return software.amazon.jsii.Kernel.get(this, "attrSan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SignatureAlgorithm: The signature algorithm of the certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignatureAlgorithm() {
            return software.amazon.jsii.Kernel.get(this, "attrSignatureAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: Site Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteName: The website name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The certificate type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the certificate was updated.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ClientCertificateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.ClientCertificateProps.class));
        }
    }
}
