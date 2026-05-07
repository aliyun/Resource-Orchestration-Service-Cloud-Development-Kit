package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>OriginCaCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:49.994Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IOriginCaCertificate")
@software.amazon.jsii.Jsii.Proxy(IOriginCaCertificate.Jsii$Proxy.class)
public interface IOriginCaCertificate extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Certificate: The certificate content.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate();

    /**
     * Attribute CommonName: The certificate common name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName();

    /**
     * Attribute CreateTime: The time when the certificate was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute FingerprintSha256: The SHA-256 fingerprint of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFingerprintSha256();

    /**
     * Attribute Issuer: The certificate authority (CA) that issued the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuer();

    /**
     * Attribute Name: The certificate name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrName();

    /**
     * Attribute NotAfter: The expiration date of the certificate validity period.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotAfter();

    /**
     * Attribute NotBefore: The start time of the certificate validity period.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotBefore();

    /**
     * Attribute OriginCaCertificateId: The certificate ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginCaCertificateId();

    /**
     * Attribute PubkeyAlgorithm: Certificate public key algorithm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubkeyAlgorithm();

    /**
     * Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSan();

    /**
     * Attribute SerialNumber: The serial number of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSerialNumber();

    /**
     * Attribute SignatureAlgorithm: The signature algorithm of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignatureAlgorithm();

    /**
     * Attribute SiteId: The website ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId();

    /**
     * Attribute Type: The type of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    /**
     * Attribute UpdateTime: The time when the certificate was updated.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginCaCertificateProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IOriginCaCertificate.Jsii$Default {
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
         * Attribute Certificate: The certificate content.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate() {
            return software.amazon.jsii.Kernel.get(this, "attrCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonName: The certificate common name.
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
         * Attribute FingerprintSha256: The SHA-256 fingerprint of the certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFingerprintSha256() {
            return software.amazon.jsii.Kernel.get(this, "attrFingerprintSha256", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Issuer: The certificate authority (CA) that issued the certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuer() {
            return software.amazon.jsii.Kernel.get(this, "attrIssuer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: The certificate name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotAfter: The expiration date of the certificate validity period.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotAfter() {
            return software.amazon.jsii.Kernel.get(this, "attrNotAfter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotBefore: The start time of the certificate validity period.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotBefore() {
            return software.amazon.jsii.Kernel.get(this, "attrNotBefore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginCaCertificateId: The certificate ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginCaCertificateId() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginCaCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PubkeyAlgorithm: Certificate public key algorithm.
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
         * Attribute SerialNumber: The serial number of the certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSerialNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrSerialNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SignatureAlgorithm: The signature algorithm of the certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignatureAlgorithm() {
            return software.amazon.jsii.Kernel.get(this, "attrSignatureAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The website ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the certificate.
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginCaCertificateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.OriginCaCertificateProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IOriginCaCertificate}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IOriginCaCertificate, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Certificate: The certificate content.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate() {
            return software.amazon.jsii.Kernel.get(this, "attrCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonName: The certificate common name.
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
         * Attribute FingerprintSha256: The SHA-256 fingerprint of the certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFingerprintSha256() {
            return software.amazon.jsii.Kernel.get(this, "attrFingerprintSha256", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Issuer: The certificate authority (CA) that issued the certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuer() {
            return software.amazon.jsii.Kernel.get(this, "attrIssuer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Name: The certificate name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotAfter: The expiration date of the certificate validity period.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotAfter() {
            return software.amazon.jsii.Kernel.get(this, "attrNotAfter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotBefore: The start time of the certificate validity period.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotBefore() {
            return software.amazon.jsii.Kernel.get(this, "attrNotBefore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OriginCaCertificateId: The certificate ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginCaCertificateId() {
            return software.amazon.jsii.Kernel.get(this, "attrOriginCaCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PubkeyAlgorithm: Certificate public key algorithm.
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
         * Attribute SerialNumber: The serial number of the certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSerialNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrSerialNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SignatureAlgorithm: The signature algorithm of the certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignatureAlgorithm() {
            return software.amazon.jsii.Kernel.get(this, "attrSignatureAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The website ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: The type of the certificate.
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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginCaCertificateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.OriginCaCertificateProps.class));
        }
    }
}
