package com.aliyun.ros.cdk.cloudphone;

/**
 * Represents a <code>KeyPair</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.806Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudphone.$Module.class, fqn = "@alicloud/ros-cdk-cloudphone.IKeyPair")
@software.amazon.jsii.Jsii.Proxy(IKeyPair.Jsii$Proxy.class)
public interface IKeyPair extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute KeyPairFingerPrint: The fingerprint of the key pair.
     * <p>
     * The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairFingerPrint();

    /**
     * Attribute KeyPairName: The name of the key pair.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudphone.KeyPairProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cloudphone.IKeyPair.Jsii$Default {
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
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairFingerPrint: The fingerprint of the key pair.
         * <p>
         * The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairFingerPrint() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairFingerPrint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairName: The name of the key pair.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudphone.KeyPairProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudphone.KeyPairProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IKeyPair}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IKeyPair, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairFingerPrint: The fingerprint of the key pair.
         * <p>
         * The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairFingerPrint() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairFingerPrint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeyPairName: The name of the key pair.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeyPairName() {
            return software.amazon.jsii.Kernel.get(this, "attrKeyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudphone.KeyPairProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudphone.KeyPairProps.class));
        }
    }
}
