package com.aliyun.ros.cdk.mns.datasource;

/**
 * Represents a <code>Topic</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.101Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.datasource.ITopic")
@software.amazon.jsii.Jsii.Proxy(ITopic.Jsii$Proxy.class)
public interface ITopic extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the topic was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute LastModifyTime: The time when the topic was last modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifyTime();

    /**
     * Attribute LoggingEnabled: Indicates whether the log management feature is enabled for the topic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoggingEnabled();

    /**
     * Attribute MaxMessageSize: The maximum size of a message body that is sent to the topic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxMessageSize();

    /**
     * Attribute MessageCount: The number of messages in the topic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessageCount();

    /**
     * Attribute MessageRetentionPeriod: The retention period of the message in the topic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessageRetentionPeriod();

    /**
     * Attribute TopicInnerUrl: The internal URL of the topic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicInnerUrl();

    /**
     * Attribute TopicName: The name of the MNS topic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicName();

    /**
     * Attribute TopicUrl: The URL of the topic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicUrl();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.datasource.TopicProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.mns.datasource.ITopic.Jsii$Default {
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
         * Attribute CreateTime: The time when the topic was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastModifyTime: The time when the topic was last modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLastModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoggingEnabled: Indicates whether the log management feature is enabled for the topic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoggingEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrLoggingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxMessageSize: The maximum size of a message body that is sent to the topic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxMessageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxMessageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MessageCount: The number of messages in the topic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessageCount() {
            return software.amazon.jsii.Kernel.get(this, "attrMessageCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MessageRetentionPeriod: The retention period of the message in the topic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessageRetentionPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrMessageRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicInnerUrl: The internal URL of the topic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicInnerUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicInnerUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicName: The name of the MNS topic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicName() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicUrl: The URL of the topic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.datasource.TopicProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.datasource.TopicProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITopic}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITopic, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the topic was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastModifyTime: The time when the topic was last modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLastModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoggingEnabled: Indicates whether the log management feature is enabled for the topic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoggingEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrLoggingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxMessageSize: The maximum size of a message body that is sent to the topic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxMessageSize() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxMessageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MessageCount: The number of messages in the topic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessageCount() {
            return software.amazon.jsii.Kernel.get(this, "attrMessageCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MessageRetentionPeriod: The retention period of the message in the topic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessageRetentionPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrMessageRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicInnerUrl: The internal URL of the topic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicInnerUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicInnerUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicName: The name of the MNS topic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicName() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicUrl: The URL of the topic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.datasource.TopicProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.datasource.TopicProps.class));
        }
    }
}
