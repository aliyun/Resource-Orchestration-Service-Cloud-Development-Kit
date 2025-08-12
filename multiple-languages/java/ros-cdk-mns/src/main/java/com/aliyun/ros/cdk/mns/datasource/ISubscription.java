package com.aliyun.ros.cdk.mns.datasource;

/**
 * Represents a <code>Subscription</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.581Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.datasource.ISubscription")
@software.amazon.jsii.Jsii.Proxy(ISubscription.Jsii$Proxy.class)
public interface ISubscription extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The time when the subscription was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Endpoint: The endpoint that is used by the subscriber to receive messages.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoint();

    /**
     * Attribute FilterTag: Describes the labels by which messages are filtered in this subscription (only messages with consistent labels are pushed).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFilterTag();

    /**
     * Attribute LastModifyTime: The time when the subscription was last modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifyTime();

    /**
     * Attribute NotifyContentFormat: The format of the message that is pushed to the endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotifyContentFormat();

    /**
     * Attribute NotifyStrategy: The retry policy that is applied if an error occurs when Message Service (MNS) pushes messages to the endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotifyStrategy();

    /**
     * Attribute SubscriptionName: The name of the subscription.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionName();

    /**
     * Attribute SubscriptionURL: TThe URL of the subscription.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionUrl();

    /**
     * Attribute TopicName: The name of the topic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicName();

    /**
     * Attribute TopicOwner: The owner of the topic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicOwner();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.datasource.SubscriptionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.mns.datasource.ISubscription.Jsii$Default {
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
         * Attribute CreateTime: The time when the subscription was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Endpoint: The endpoint that is used by the subscriber to receive messages.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FilterTag: Describes the labels by which messages are filtered in this subscription (only messages with consistent labels are pushed).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFilterTag() {
            return software.amazon.jsii.Kernel.get(this, "attrFilterTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastModifyTime: The time when the subscription was last modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLastModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotifyContentFormat: The format of the message that is pushed to the endpoint.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotifyContentFormat() {
            return software.amazon.jsii.Kernel.get(this, "attrNotifyContentFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotifyStrategy: The retry policy that is applied if an error occurs when Message Service (MNS) pushes messages to the endpoint.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotifyStrategy() {
            return software.amazon.jsii.Kernel.get(this, "attrNotifyStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubscriptionName: The name of the subscription.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionName() {
            return software.amazon.jsii.Kernel.get(this, "attrSubscriptionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubscriptionURL: TThe URL of the subscription.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrSubscriptionUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicName: The name of the topic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicName() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicOwner: The owner of the topic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicOwner() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.datasource.SubscriptionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.datasource.SubscriptionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISubscription}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISubscription, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The time when the subscription was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Endpoint: The endpoint that is used by the subscriber to receive messages.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoint() {
            return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FilterTag: Describes the labels by which messages are filtered in this subscription (only messages with consistent labels are pushed).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFilterTag() {
            return software.amazon.jsii.Kernel.get(this, "attrFilterTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastModifyTime: The time when the subscription was last modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLastModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotifyContentFormat: The format of the message that is pushed to the endpoint.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotifyContentFormat() {
            return software.amazon.jsii.Kernel.get(this, "attrNotifyContentFormat", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NotifyStrategy: The retry policy that is applied if an error occurs when Message Service (MNS) pushes messages to the endpoint.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotifyStrategy() {
            return software.amazon.jsii.Kernel.get(this, "attrNotifyStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubscriptionName: The name of the subscription.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionName() {
            return software.amazon.jsii.Kernel.get(this, "attrSubscriptionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubscriptionURL: TThe URL of the subscription.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrSubscriptionUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicName: The name of the topic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicName() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicOwner: The owner of the topic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicOwner() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.datasource.SubscriptionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.datasource.SubscriptionProps.class));
        }
    }
}
