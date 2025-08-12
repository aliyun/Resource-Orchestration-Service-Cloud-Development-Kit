package com.aliyun.ros.cdk.ram;

/**
 * Represents a <code>AppSecret</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:49.639Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.IAppSecret")
@software.amazon.jsii.Jsii.Proxy(IAppSecret.Jsii$Proxy.class)
public interface IAppSecret extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AppSecretId: The ID of the application secret.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppSecretId();

    /**
     * Attribute AppSecretValue: The content of the application secret.
     * <p>
     * This value can be used as the client secret for open authorization.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppSecretValue();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.AppSecretProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ram.IAppSecret.Jsii$Default {
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
         * Attribute AppSecretId: The ID of the application secret.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppSecretId() {
            return software.amazon.jsii.Kernel.get(this, "attrAppSecretId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppSecretValue: The content of the application secret.
         * <p>
         * This value can be used as the client secret for open authorization.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppSecretValue() {
            return software.amazon.jsii.Kernel.get(this, "attrAppSecretValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.AppSecretProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.AppSecretProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAppSecret}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAppSecret, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AppSecretId: The ID of the application secret.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppSecretId() {
            return software.amazon.jsii.Kernel.get(this, "attrAppSecretId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppSecretValue: The content of the application secret.
         * <p>
         * This value can be used as the client secret for open authorization.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppSecretValue() {
            return software.amazon.jsii.Kernel.get(this, "attrAppSecretValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.AppSecretProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.AppSecretProps.class));
        }
    }
}
