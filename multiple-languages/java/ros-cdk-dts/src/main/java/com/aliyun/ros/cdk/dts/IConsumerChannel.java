package com.aliyun.ros.cdk.dts;

/**
 * Represents a <code>ConsumerChannel</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:24.083Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.IConsumerChannel")
@software.amazon.jsii.Jsii.Proxy(IConsumerChannel.Jsii$Proxy.class)
public interface IConsumerChannel extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConsumerGroupId: Consumer group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsumerGroupId();

    /**
     * Attribute ConsumerGroupName: Consumer group name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsumerGroupName();

    /**
     * Attribute ConsumerGroupUserName: Consumer group username.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsumerGroupUserName();

    /**
     * Attribute DtsInstanceId: DTS instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsInstanceId();

    /**
     * Attribute DtsJobId: DTS job ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.ConsumerChannelProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dts.IConsumerChannel.Jsii$Default {
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
         * Attribute ConsumerGroupId: Consumer group ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsumerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrConsumerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConsumerGroupName: Consumer group name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsumerGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrConsumerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConsumerGroupUserName: Consumer group username.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsumerGroupUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrConsumerGroupUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsInstanceId: DTS instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsJobId: DTS job ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.ConsumerChannelProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.ConsumerChannelProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IConsumerChannel}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IConsumerChannel, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ConsumerGroupId: Consumer group ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsumerGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrConsumerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConsumerGroupName: Consumer group name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsumerGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrConsumerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConsumerGroupUserName: Consumer group username.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsumerGroupUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrConsumerGroupUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsInstanceId: DTS instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DtsJobId: DTS job ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDtsJobId() {
            return software.amazon.jsii.Kernel.get(this, "attrDtsJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.ConsumerChannelProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dts.ConsumerChannelProps.class));
        }
    }
}
