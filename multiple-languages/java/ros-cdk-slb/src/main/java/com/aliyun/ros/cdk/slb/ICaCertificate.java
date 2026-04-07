package com.aliyun.ros.cdk.slb;

/**
 * Represents a <code>CaCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.077Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.ICaCertificate")
@software.amazon.jsii.Jsii.Proxy(ICaCertificate.Jsii$Proxy.class)
public interface ICaCertificate extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CaCertificateId: The ID of the CA certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCaCertificateId();

    /**
     * Attribute CaCertificateName: The CA certificate name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCaCertificateName();

    /**
     * Attribute CommonName: The domain name on the CA certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName();

    /**
     * Attribute CreatedTimestamp: The create time stamp of the CA certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedTimestamp();

    /**
     * Attribute CreateTime: The time when the CA certificate was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute ExpiredTime: The time when the CA certificate expires.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime();

    /**
     * Attribute ExpiredTimestamp: The expiration time stamp of the CA certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTimestamp();

    /**
     * Attribute Fingerprint: The fingerprint of the server certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFingerprint();

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute Tags: The tags of ca certificate.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.CaCertificateProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.slb.ICaCertificate.Jsii$Default {
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
         * Attribute CaCertificateId: The ID of the CA certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCaCertificateId() {
            return software.amazon.jsii.Kernel.get(this, "attrCaCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CaCertificateName: The CA certificate name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCaCertificateName() {
            return software.amazon.jsii.Kernel.get(this, "attrCaCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonName: The domain name on the CA certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedTimestamp: The create time stamp of the CA certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedTimestamp() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedTimestamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the CA certificate was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The time when the CA certificate expires.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTimestamp: The expiration time stamp of the CA certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTimestamp() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTimestamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Fingerprint: The fingerprint of the server certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFingerprint() {
            return software.amazon.jsii.Kernel.get(this, "attrFingerprint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of ca certificate.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.CaCertificateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.CaCertificateProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICaCertificate}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICaCertificate, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CaCertificateId: The ID of the CA certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCaCertificateId() {
            return software.amazon.jsii.Kernel.get(this, "attrCaCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CaCertificateName: The CA certificate name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCaCertificateName() {
            return software.amazon.jsii.Kernel.get(this, "attrCaCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CommonName: The domain name on the CA certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName() {
            return software.amazon.jsii.Kernel.get(this, "attrCommonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreatedTimestamp: The create time stamp of the CA certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreatedTimestamp() {
            return software.amazon.jsii.Kernel.get(this, "attrCreatedTimestamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the CA certificate was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTime: The time when the CA certificate expires.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpiredTimestamp: The expiration time stamp of the CA certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTimestamp() {
            return software.amazon.jsii.Kernel.get(this, "attrExpiredTimestamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Fingerprint: The fingerprint of the server certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFingerprint() {
            return software.amazon.jsii.Kernel.get(this, "attrFingerprint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of ca certificate.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.CaCertificateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.CaCertificateProps.class));
        }
    }
}
