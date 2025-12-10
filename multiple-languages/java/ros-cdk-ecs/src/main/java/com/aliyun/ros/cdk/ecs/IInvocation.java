package com.aliyun.ros.cdk.ecs;

/**
 * Represents a <code>Invocation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:55.210Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.IInvocation")
@software.amazon.jsii.Jsii.Proxy(IInvocation.Jsii$Proxy.class)
public interface IInvocation extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute InvokeId: The id of command execution.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInvokeId();

    /**
     * Attribute InvokeInstances: The InvokeInstances of command.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInvokeInstances();

    /**
     * Attribute InvokeResults: The results of invoke command.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInvokeResults();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InvocationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ecs.IInvocation.Jsii$Default {
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
         * Attribute InvokeId: The id of command execution.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInvokeId() {
            return software.amazon.jsii.Kernel.get(this, "attrInvokeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InvokeInstances: The InvokeInstances of command.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInvokeInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrInvokeInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InvokeResults: The results of invoke command.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInvokeResults() {
            return software.amazon.jsii.Kernel.get(this, "attrInvokeResults", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InvocationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.InvocationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInvocation}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInvocation, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute InvokeId: The id of command execution.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInvokeId() {
            return software.amazon.jsii.Kernel.get(this, "attrInvokeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InvokeInstances: The InvokeInstances of command.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInvokeInstances() {
            return software.amazon.jsii.Kernel.get(this, "attrInvokeInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InvokeResults: The results of invoke command.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInvokeResults() {
            return software.amazon.jsii.Kernel.get(this, "attrInvokeResults", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.InvocationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.InvocationProps.class));
        }
    }
}
