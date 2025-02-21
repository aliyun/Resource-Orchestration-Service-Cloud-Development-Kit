package com.aliyun.ros.cdk.mns.datasource;

/**
 * Represents a <code>Queue</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:17.960Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.datasource.IQueue")
@software.amazon.jsii.Jsii.Proxy(IQueue.Jsii$Proxy.class)
public interface IQueue extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ActiveMessages: The total number of active messages in the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrActiveMessages();

    /**
     * Attribute CreateTime: The time when the queue was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DelayMessages: The total number of delayed messages in the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelayMessages();

    /**
     * Attribute DelaySeconds: The delay time after which all messages that are sent to the queue can be consumed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelaySeconds();

    /**
     * Attribute InactiveMessages: The total number of inactive messages in the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInactiveMessages();

    /**
     * Attribute LastModifyTime: The most recent time when the queue was modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifyTime();

    /**
     * Attribute LoggingEnabled: Specifies whether to enable the log management feature.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoggingEnabled();

    /**
     * Attribute MaximumMessageSize: The maximum size of a message that can be sent to the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaximumMessageSize();

    /**
     * Attribute MessageRetentionPeriod: The maximum lifetime of a message in the queue.
     * <p>
     * After the time that is specified by this parameter expires, the message is deleted, regardless of whether the message has been consumed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessageRetentionPeriod();

    /**
     * Attribute PollingWaitSeconds: The maximum time period that a ReceiveMessage request can wait till a message is in the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPollingWaitSeconds();

    /**
     * Attribute QueueInternalUrl: The internal URL of the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueInternalUrl();

    /**
     * Attribute QueueName: The name of the MNS queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName();

    /**
     * Attribute QueueUrl: The URL of the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueUrl();

    /**
     * Attribute VisibilityTimeout: The duration for which a message stays in the Inactive state after it is consumed from the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVisibilityTimeout();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.datasource.QueueProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.mns.datasource.IQueue.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ActiveMessages: The total number of active messages in the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrActiveMessages() {
            return software.amazon.jsii.Kernel.get(this, "attrActiveMessages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the queue was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DelayMessages: The total number of delayed messages in the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelayMessages() {
            return software.amazon.jsii.Kernel.get(this, "attrDelayMessages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DelaySeconds: The delay time after which all messages that are sent to the queue can be consumed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelaySeconds() {
            return software.amazon.jsii.Kernel.get(this, "attrDelaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InactiveMessages: The total number of inactive messages in the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInactiveMessages() {
            return software.amazon.jsii.Kernel.get(this, "attrInactiveMessages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastModifyTime: The most recent time when the queue was modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLastModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoggingEnabled: Specifies whether to enable the log management feature.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoggingEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrLoggingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaximumMessageSize: The maximum size of a message that can be sent to the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaximumMessageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrMaximumMessageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MessageRetentionPeriod: The maximum lifetime of a message in the queue.
         * <p>
         * After the time that is specified by this parameter expires, the message is deleted, regardless of whether the message has been consumed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessageRetentionPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrMessageRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PollingWaitSeconds: The maximum time period that a ReceiveMessage request can wait till a message is in the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPollingWaitSeconds() {
            return software.amazon.jsii.Kernel.get(this, "attrPollingWaitSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueInternalUrl: The internal URL of the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueInternalUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueInternalUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueName: The name of the MNS queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueUrl: The URL of the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VisibilityTimeout: The duration for which a message stays in the Inactive state after it is consumed from the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVisibilityTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrVisibilityTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.datasource.QueueProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.datasource.QueueProps.class));
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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ActiveMessages: The total number of active messages in the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrActiveMessages() {
            return software.amazon.jsii.Kernel.get(this, "attrActiveMessages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the queue was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DelayMessages: The total number of delayed messages in the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelayMessages() {
            return software.amazon.jsii.Kernel.get(this, "attrDelayMessages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DelaySeconds: The delay time after which all messages that are sent to the queue can be consumed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDelaySeconds() {
            return software.amazon.jsii.Kernel.get(this, "attrDelaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InactiveMessages: The total number of inactive messages in the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInactiveMessages() {
            return software.amazon.jsii.Kernel.get(this, "attrInactiveMessages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastModifyTime: The most recent time when the queue was modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLastModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoggingEnabled: Specifies whether to enable the log management feature.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoggingEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrLoggingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaximumMessageSize: The maximum size of a message that can be sent to the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaximumMessageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrMaximumMessageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MessageRetentionPeriod: The maximum lifetime of a message in the queue.
         * <p>
         * After the time that is specified by this parameter expires, the message is deleted, regardless of whether the message has been consumed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessageRetentionPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrMessageRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PollingWaitSeconds: The maximum time period that a ReceiveMessage request can wait till a message is in the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPollingWaitSeconds() {
            return software.amazon.jsii.Kernel.get(this, "attrPollingWaitSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueInternalUrl: The internal URL of the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueInternalUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueInternalUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueName: The name of the MNS queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueUrl: The URL of the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VisibilityTimeout: The duration for which a message stays in the Inactive state after it is consumed from the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVisibilityTimeout() {
            return software.amazon.jsii.Kernel.get(this, "attrVisibilityTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.datasource.QueueProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.datasource.QueueProps.class));
        }
    }
}
