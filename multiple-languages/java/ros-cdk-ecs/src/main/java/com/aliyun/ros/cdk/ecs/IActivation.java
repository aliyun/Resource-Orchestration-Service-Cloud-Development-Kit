package com.aliyun.ros.cdk.ecs;

/**
 * Represents a <code>Activation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:55.183Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.IActivation")
@software.amazon.jsii.Jsii.Proxy(IActivation.Jsii$Proxy.class)
public interface IActivation extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ActivationCode: Activation code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrActivationCode();

    /**
     * Attribute ActivationId: Activation code ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrActivationId();

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute DeregisteredCount: The number of instances that have been logged out.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeregisteredCount();

    /**
     * Attribute RegisteredCount: The number of registered instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegisteredCount();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ActivationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.IActivation.Jsii$Default {
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
         * Attribute ActivationCode: Activation code.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrActivationCode() {
            return software.amazon.jsii.Kernel.get(this, "attrActivationCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ActivationId: Activation code ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrActivationId() {
            return software.amazon.jsii.Kernel.get(this, "attrActivationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeregisteredCount: The number of instances that have been logged out.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeregisteredCount() {
            return software.amazon.jsii.Kernel.get(this, "attrDeregisteredCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegisteredCount: The number of registered instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegisteredCount() {
            return software.amazon.jsii.Kernel.get(this, "attrRegisteredCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ActivationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.ActivationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IActivation}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IActivation, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ActivationCode: Activation code.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrActivationCode() {
            return software.amazon.jsii.Kernel.get(this, "attrActivationCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ActivationId: Activation code ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrActivationId() {
            return software.amazon.jsii.Kernel.get(this, "attrActivationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeregisteredCount: The number of instances that have been logged out.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeregisteredCount() {
            return software.amazon.jsii.Kernel.get(this, "attrDeregisteredCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RegisteredCount: The number of registered instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRegisteredCount() {
            return software.amazon.jsii.Kernel.get(this, "attrRegisteredCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.ActivationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.ActivationProps.class));
        }
    }
}
