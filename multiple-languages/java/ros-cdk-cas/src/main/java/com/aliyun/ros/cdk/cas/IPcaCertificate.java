package com.aliyun.ros.cdk.cas;

/**
 * Represents a <code>PcaCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:39:53.053Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.IPcaCertificate")
@software.amazon.jsii.Jsii.Proxy(IPcaCertificate.Jsii$Proxy.class)
public interface IPcaCertificate extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Algorithm: The key algorithm type of the root CA certificate.
     * <p>
     * The key algorithm is expressed using the '<encryption algorithm >_&lt; key length&gt;' format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlgorithm();

    /**
     * Attribute CertificateType: The type of CA.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificateType();

    /**
     * Attribute CommonName: The common name or abbreviation of the organization.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName();

    /**
     * Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.
     * <p>
     * For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCountryCode();

    /**
     * Attribute Identifier: Certificate Identifier.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIdentifier();

    /**
     * Attribute IssuerType: The institution issuing the CA.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuerType();

    /**
     * Attribute Locality: Name of the city where the organization is located.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocality();

    /**
     * Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrganization();

    /**
     * Attribute OrganizationUnit: The name of the department or branch under the organization.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrganizationUnit();

    /**
     * Attribute State: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrState();

    /**
     * Attribute Years: The validity period of the root CA certificate, in years.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrYears();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.PcaCertificateProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cas.IPcaCertificate.Jsii$Default {
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
         * Attribute Algorithm: The key algorithm type of the root CA certificate.
         * <p>
         * The key algorithm is expressed using the '<encryption algorithm >_&lt; key length&gt;' format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlgorithm() {
            return software.amazon.jsii.Kernel.get(this, "attrAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CertificateType: The type of CA.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificateType() {
            return software.amazon.jsii.Kernel.get(this, "attrCertificateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonName: The common name or abbreviation of the organization.
         * <p>
         * Support the use of Chinese, English characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.
         * <p>
         * For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCountryCode() {
            return software.amazon.jsii.Kernel.get(this, "attrCountryCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Identifier: Certificate Identifier.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIdentifier() {
            return software.amazon.jsii.Kernel.get(this, "attrIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IssuerType: The institution issuing the CA.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuerType() {
            return software.amazon.jsii.Kernel.get(this, "attrIssuerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Locality: Name of the city where the organization is located.
         * <p>
         * Support the use of Chinese, English characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocality() {
            return software.amazon.jsii.Kernel.get(this, "attrLocality", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.
         * <p>
         * Support the use of Chinese, English characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrganization() {
            return software.amazon.jsii.Kernel.get(this, "attrOrganization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrganizationUnit: The name of the department or branch under the organization.
         * <p>
         * Support the use of Chinese, English characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrganizationUnit() {
            return software.amazon.jsii.Kernel.get(this, "attrOrganizationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute State: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located.
         * <p>
         * Support the use of Chinese, English characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
            return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Years: The validity period of the root CA certificate, in years.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrYears() {
            return software.amazon.jsii.Kernel.get(this, "attrYears", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.PcaCertificateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cas.PcaCertificateProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IPcaCertificate}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPcaCertificate, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Algorithm: The key algorithm type of the root CA certificate.
         * <p>
         * The key algorithm is expressed using the '<encryption algorithm >_&lt; key length&gt;' format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlgorithm() {
            return software.amazon.jsii.Kernel.get(this, "attrAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CertificateType: The type of CA.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificateType() {
            return software.amazon.jsii.Kernel.get(this, "attrCertificateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonName: The common name or abbreviation of the organization.
         * <p>
         * Support the use of Chinese, English characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.
         * <p>
         * For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCountryCode() {
            return software.amazon.jsii.Kernel.get(this, "attrCountryCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Identifier: Certificate Identifier.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIdentifier() {
            return software.amazon.jsii.Kernel.get(this, "attrIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IssuerType: The institution issuing the CA.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuerType() {
            return software.amazon.jsii.Kernel.get(this, "attrIssuerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Locality: Name of the city where the organization is located.
         * <p>
         * Support the use of Chinese, English characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocality() {
            return software.amazon.jsii.Kernel.get(this, "attrLocality", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.
         * <p>
         * Support the use of Chinese, English characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrganization() {
            return software.amazon.jsii.Kernel.get(this, "attrOrganization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrganizationUnit: The name of the department or branch under the organization.
         * <p>
         * Support the use of Chinese, English characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrganizationUnit() {
            return software.amazon.jsii.Kernel.get(this, "attrOrganizationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute State: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located.
         * <p>
         * Support the use of Chinese, English characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
            return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Years: The validity period of the root CA certificate, in years.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrYears() {
            return software.amazon.jsii.Kernel.get(this, "attrYears", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.PcaCertificateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cas.PcaCertificateProps.class));
        }
    }
}
