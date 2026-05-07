package com.aliyun.ros.cdk.cas;

/**
 * Represents a <code>UserCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.080Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.IUserCertificate")
@software.amazon.jsii.Jsii.Proxy(IUserCertificate.Jsii$Proxy.class)
public interface IUserCertificate extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Cert: The certificate content in PEM format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCert();

    /**
     * Attribute CertId: Certificate ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertId();

    /**
     * Attribute CertificateName: Custom certificate name.
     * <p>
     * Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificateName();

    /**
     * Attribute EncryptCert: The content of the encryption certificate in PEM format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptCert();

    /**
     * Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptPrivateKey();

    /**
     * Attribute Key: The private key content of the certificate in PEM format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKey();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SignCert: The signature certificate content in PEM format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignCert();

    /**
     * Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignPrivateKey();

    /**
     * Attribute Tags: The tag of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.UserCertificateProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cas.IUserCertificate.Jsii$Default {
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
         * Attribute Cert: The certificate content in PEM format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCert() {
            return software.amazon.jsii.Kernel.get(this, "attrCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CertId: Certificate ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertId() {
            return software.amazon.jsii.Kernel.get(this, "attrCertId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CertificateName: Custom certificate name.
         * <p>
         * Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificateName() {
            return software.amazon.jsii.Kernel.get(this, "attrCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptCert: The content of the encryption certificate in PEM format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptCert() {
            return software.amazon.jsii.Kernel.get(this, "attrEncryptCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptPrivateKey() {
            return software.amazon.jsii.Kernel.get(this, "attrEncryptPrivateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Key: The private key content of the certificate in PEM format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKey() {
            return software.amazon.jsii.Kernel.get(this, "attrKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SignCert: The signature certificate content in PEM format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignCert() {
            return software.amazon.jsii.Kernel.get(this, "attrSignCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignPrivateKey() {
            return software.amazon.jsii.Kernel.get(this, "attrSignPrivateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.UserCertificateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cas.UserCertificateProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IUserCertificate}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IUserCertificate, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Cert: The certificate content in PEM format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCert() {
            return software.amazon.jsii.Kernel.get(this, "attrCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CertId: Certificate ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertId() {
            return software.amazon.jsii.Kernel.get(this, "attrCertId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CertificateName: Custom certificate name.
         * <p>
         * Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificateName() {
            return software.amazon.jsii.Kernel.get(this, "attrCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptCert: The content of the encryption certificate in PEM format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptCert() {
            return software.amazon.jsii.Kernel.get(this, "attrEncryptCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptPrivateKey() {
            return software.amazon.jsii.Kernel.get(this, "attrEncryptPrivateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Key: The private key content of the certificate in PEM format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKey() {
            return software.amazon.jsii.Kernel.get(this, "attrKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SignCert: The signature certificate content in PEM format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignCert() {
            return software.amazon.jsii.Kernel.get(this, "attrSignCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignPrivateKey() {
            return software.amazon.jsii.Kernel.get(this, "attrSignPrivateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.UserCertificateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cas.UserCertificateProps.class));
        }
    }
}
