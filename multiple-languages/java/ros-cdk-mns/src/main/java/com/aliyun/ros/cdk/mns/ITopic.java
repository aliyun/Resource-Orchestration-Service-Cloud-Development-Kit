package com.aliyun.ros.cdk.mns;

/**
 * Represents a <code>Topic</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.002Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mns.$Module.class, fqn = "@alicloud/ros-cdk-mns.ITopic")
@software.amazon.jsii.Jsii.Proxy(ITopic.Jsii$Proxy.class)
public interface ITopic extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArnWithSlash();

    /**
     * Attribute TopicName: Topic name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicName();

    /**
     * Attribute TopicUrl: URL of created topic.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicUrl();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.TopicProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.mns.ITopic.Jsii$Default {
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
         * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArnWithSlash() {
            return software.amazon.jsii.Kernel.get(this, "attrArnWithSlash", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicName: Topic name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicName() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicUrl: URL of created topic.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.TopicProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.TopicProps.class));
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
         * Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArnWithSlash() {
            return software.amazon.jsii.Kernel.get(this, "attrArnWithSlash", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicName: Topic name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicName() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicUrl: URL of created topic.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mns.TopicProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mns.TopicProps.class));
        }
    }
}
