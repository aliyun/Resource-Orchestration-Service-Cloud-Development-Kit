package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>Certificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.433Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.ICertificate")
@software.amazon.jsii.Jsii.Proxy(ICertificate.Jsii$Proxy.class)
public interface ICertificate extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ApplyCode: Certificate application error code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplyCode();

    /**
     * Attribute ApplyMessage: Certificate application error message.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplyMessage();

    /**
     * Attribute CasId: Cloud certificate ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCasId();

    /**
     * Attribute CertId: The certificate Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertId();

    /**
     * Attribute Certificate: Certificate content.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate();

    /**
     * Attribute CertName: The certificate name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertName();

    /**
     * Attribute CommonName: Common Name (CN) field of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName();

    /**
     * Attribute CreateTime: Creation time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DCV: DCV information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDcv();

    /**
     * Attribute Domains: A list of domain names.
     * <p>
     * Multiple domain names are separated by commas.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomains();

    /**
     * Attribute FingerprintSha256: SHA256 fingerprint of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFingerprintSha256();

    /**
     * Attribute Issuer: Certificate issuer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuer();

    /**
     * Attribute IssuerCN: Common name of the certificate issuer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuerCn();

    /**
     * Attribute NotAfter: End time of the certificate validity period.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotAfter();

    /**
     * Attribute NotBefore: Start time of the certificate validity period.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotBefore();

    /**
     * Attribute PubAlg: Certificate public key algorithm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubAlg();

    /**
     * Attribute SerialNumber: Serial number of the certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSerialNumber();

    /**
     * Attribute SigAlg: Certificate signature algorithm.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSigAlg();

    /**
     * Attribute SiteId: The site ID, which can be obtained by calling the ListSites interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId();

    /**
     * Attribute SiteName: Site name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName();

    /**
     * Attribute UpdateTime: Update time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CertificateProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.ICertificate.Jsii$Default {
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
         * Attribute ApplyCode: Certificate application error code.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplyCode() {
            return software.amazon.jsii.Kernel.get(this, "attrApplyCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ApplyMessage: Certificate application error message.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplyMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrApplyMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CasId: Cloud certificate ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCasId() {
            return software.amazon.jsii.Kernel.get(this, "attrCasId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CertId: The certificate Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertId() {
            return software.amazon.jsii.Kernel.get(this, "attrCertId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Certificate: Certificate content.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate() {
            return software.amazon.jsii.Kernel.get(this, "attrCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CertName: The certificate name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertName() {
            return software.amazon.jsii.Kernel.get(this, "attrCertName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonName: Common Name (CN) field of the certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DCV: DCV information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDcv() {
            return software.amazon.jsii.Kernel.get(this, "attrDcv", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Domains: A list of domain names.
         * <p>
         * Multiple domain names are separated by commas.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomains() {
            return software.amazon.jsii.Kernel.get(this, "attrDomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FingerprintSha256: SHA256 fingerprint of the certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFingerprintSha256() {
            return software.amazon.jsii.Kernel.get(this, "attrFingerprintSha256", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Issuer: Certificate issuer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuer() {
            return software.amazon.jsii.Kernel.get(this, "attrIssuer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IssuerCN: Common name of the certificate issuer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuerCn() {
            return software.amazon.jsii.Kernel.get(this, "attrIssuerCn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotAfter: End time of the certificate validity period.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotAfter() {
            return software.amazon.jsii.Kernel.get(this, "attrNotAfter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotBefore: Start time of the certificate validity period.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotBefore() {
            return software.amazon.jsii.Kernel.get(this, "attrNotBefore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PubAlg: Certificate public key algorithm.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubAlg() {
            return software.amazon.jsii.Kernel.get(this, "attrPubAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SerialNumber: Serial number of the certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSerialNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrSerialNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SigAlg: Certificate signature algorithm.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSigAlg() {
            return software.amazon.jsii.Kernel.get(this, "attrSigAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The site ID, which can be obtained by calling the ListSites interface.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteName: Site name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Update time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CertificateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.CertificateProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICertificate}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICertificate, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ApplyCode: Certificate application error code.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplyCode() {
            return software.amazon.jsii.Kernel.get(this, "attrApplyCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ApplyMessage: Certificate application error message.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplyMessage() {
            return software.amazon.jsii.Kernel.get(this, "attrApplyMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CasId: Cloud certificate ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCasId() {
            return software.amazon.jsii.Kernel.get(this, "attrCasId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CertId: The certificate Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertId() {
            return software.amazon.jsii.Kernel.get(this, "attrCertId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Certificate: Certificate content.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate() {
            return software.amazon.jsii.Kernel.get(this, "attrCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CertName: The certificate name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertName() {
            return software.amazon.jsii.Kernel.get(this, "attrCertName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonName: Common Name (CN) field of the certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DCV: DCV information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDcv() {
            return software.amazon.jsii.Kernel.get(this, "attrDcv", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Domains: A list of domain names.
         * <p>
         * Multiple domain names are separated by commas.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomains() {
            return software.amazon.jsii.Kernel.get(this, "attrDomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FingerprintSha256: SHA256 fingerprint of the certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFingerprintSha256() {
            return software.amazon.jsii.Kernel.get(this, "attrFingerprintSha256", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Issuer: Certificate issuer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuer() {
            return software.amazon.jsii.Kernel.get(this, "attrIssuer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IssuerCN: Common name of the certificate issuer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuerCn() {
            return software.amazon.jsii.Kernel.get(this, "attrIssuerCn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotAfter: End time of the certificate validity period.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotAfter() {
            return software.amazon.jsii.Kernel.get(this, "attrNotAfter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotBefore: Start time of the certificate validity period.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotBefore() {
            return software.amazon.jsii.Kernel.get(this, "attrNotBefore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PubAlg: Certificate public key algorithm.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubAlg() {
            return software.amazon.jsii.Kernel.get(this, "attrPubAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SerialNumber: Serial number of the certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSerialNumber() {
            return software.amazon.jsii.Kernel.get(this, "attrSerialNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SigAlg: Certificate signature algorithm.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSigAlg() {
            return software.amazon.jsii.Kernel.get(this, "attrSigAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The site ID, which can be obtained by calling the ListSites interface.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteName: Site name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: Update time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CertificateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.CertificateProps.class));
        }
    }
}
