package com.aliyun.ros.cdk.mns;

/**
 * Represents a <code>Queue</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.062Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.IQueue")
@software.amazon.jsii.Jsii.Proxy(IQueue.Jsii$Proxy.class)
public interface IQueue extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArnWithSlash();

    /**
     * Attribute QueueName: Queue name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName();

    /**
     * Attribute QueueUrl: URL of created queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueUrl();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.QueueProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.mns.IQueue.Jsii$Default {
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
         * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArnWithSlash() {
            return software.amazon.jsii.Kernel.get(this, "attrArnWithSlash", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueName: Queue name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueUrl: URL of created queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.QueueProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.QueueProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IQueue}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IQueue, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArnWithSlash() {
            return software.amazon.jsii.Kernel.get(this, "attrArnWithSlash", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueName: Queue name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueUrl: URL of created queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.QueueProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.QueueProps.class));
        }
    }
}
