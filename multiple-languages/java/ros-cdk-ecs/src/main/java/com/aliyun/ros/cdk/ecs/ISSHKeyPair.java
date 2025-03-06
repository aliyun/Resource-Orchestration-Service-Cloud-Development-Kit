package com.aliyun.ros.cdk.ecs;

/**
 * Represents a <code>SSHKeyPair</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.670Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.ISSHKeyPair")
@software.amazon.jsii.Jsii.Proxy(ISSHKeyPair.Jsii$Proxy.class)
public interface ISSHKeyPair extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute KeyPairFingerPrint: The fingerprint of the key pair.
     * <p>
     * The public key fingerprint format defined in RFC4716: MD5 message digest algorithm. Refer to http://tools.ietf.org/html/rfc4716.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairFingerPrint();

    /**
     * Attribute KeyPairName: SSH Key pair name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName();

    /**
     * Attribute PrivateKeyBody: The private key of the key pair.
     * <p>
     * Content of the RSA private key in the PKCS#8 format of the unencrypted PEM encoding. Refer to: https://www.openssl.org/docs/apps/pkcs8.html.User only can get the private key one time when and only when SSH key pair is created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateKeyBody();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SSHKeyPairProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.ISSHKeyPair.Jsii$Default {
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
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairFingerPrint: The fingerprint of the key pair.
         * <p>
         * The public key fingerprint format defined in RFC4716: MD5 message digest algorithm. Refer to http://tools.ietf.org/html/rfc4716.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairFingerPrint() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairFingerPrint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairName: SSH Key pair name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateKeyBody: The private key of the key pair.
         * <p>
         * Content of the RSA private key in the PKCS#8 format of the unencrypted PEM encoding. Refer to: https://www.openssl.org/docs/apps/pkcs8.html.User only can get the private key one time when and only when SSH key pair is created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateKeyBody() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateKeyBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SSHKeyPairProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.SSHKeyPairProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISSHKeyPair}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISSHKeyPair, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairFingerPrint: The fingerprint of the key pair.
         * <p>
         * The public key fingerprint format defined in RFC4716: MD5 message digest algorithm. Refer to http://tools.ietf.org/html/rfc4716.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairFingerPrint() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairFingerPrint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairName: SSH Key pair name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PrivateKeyBody: The private key of the key pair.
         * <p>
         * Content of the RSA private key in the PKCS#8 format of the unencrypted PEM encoding. Refer to: https://www.openssl.org/docs/apps/pkcs8.html.User only can get the private key one time when and only when SSH key pair is created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateKeyBody() {
            return software.amazon.jsii.Kernel.get(this, "attrPrivateKeyBody", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SSHKeyPairProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.SSHKeyPairProps.class));
        }
    }
}
