package com.aliyun.ros.cdk.mns;

/**
 * Represents a <code>Subscription</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:17.940Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.ISubscription")
@software.amazon.jsii.Jsii.Proxy(ISubscription.Jsii$Proxy.class)
public interface ISubscription extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute SubscriptionName: Subscription name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionName();

    /**
     * Attribute SubscriptionUrl: URL of created subscription.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionUrl();

    /**
     * Attribute TopicName: Topic name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.SubscriptionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.mns.ISubscription.Jsii$Default {
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
         * Attribute SubscriptionName: Subscription name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionName() {
            return software.amazon.jsii.Kernel.get(this, "attrSubscriptionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubscriptionUrl: URL of created subscription.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrSubscriptionUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicName: Topic name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicName() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.SubscriptionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.SubscriptionProps.class));
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
         * Attribute SubscriptionName: Subscription name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionName() {
            return software.amazon.jsii.Kernel.get(this, "attrSubscriptionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SubscriptionUrl: URL of created subscription.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSubscriptionUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrSubscriptionUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicName: Topic name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicName() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.SubscriptionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.SubscriptionProps.class));
        }
    }
}
