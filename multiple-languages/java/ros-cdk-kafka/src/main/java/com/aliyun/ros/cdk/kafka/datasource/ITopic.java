package com.aliyun.ros.cdk.kafka.datasource;

/**
 * Represents a <code>Topic</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:41.002Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.kafka.$Module.class, fqn = "@alicloud/ros-cdk-kafka.datasource.ITopic")
@software.amazon.jsii.Jsii.Proxy(ITopic.Jsii$Proxy.class)
public interface ITopic extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CompactTopic: Can log merge.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompactTopic();

    /**
     * Attribute CreateTime: Creation time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute InstanceId: Resource id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute LocalTopic: Whether to store locally.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalTopic();

    /**
     * Attribute PartitionNum: Number of partitions.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPartitionNum();

    /**
     * Attribute Remark: Remarks.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark();

    /**
     * Attribute StatusName: Meaning of status value.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusName();

    /**
     * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute Topic: Topic Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopic();

    /**
     * Attribute TopicStatus: The Topic status.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicStatus();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.datasource.TopicProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.kafka.datasource.ITopic.Jsii$Default {
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
         * Attribute CompactTopic: Can log merge.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompactTopic() {
            return software.amazon.jsii.Kernel.get(this, "attrCompactTopic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: Resource id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LocalTopic: Whether to store locally.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalTopic() {
            return software.amazon.jsii.Kernel.get(this, "attrLocalTopic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PartitionNum: Number of partitions.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPartitionNum() {
            return software.amazon.jsii.Kernel.get(this, "attrPartitionNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Remark: Remarks.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark() {
            return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StatusName: Meaning of status value.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusName() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Topic: Topic Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopic() {
            return software.amazon.jsii.Kernel.get(this, "attrTopic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicStatus: The Topic status.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.datasource.TopicProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kafka.datasource.TopicProps.class));
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
         * Attribute CompactTopic: Can log merge.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCompactTopic() {
            return software.amazon.jsii.Kernel.get(this, "attrCompactTopic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Creation time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: Resource id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LocalTopic: Whether to store locally.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalTopic() {
            return software.amazon.jsii.Kernel.get(this, "attrLocalTopic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PartitionNum: Number of partitions.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPartitionNum() {
            return software.amazon.jsii.Kernel.get(this, "attrPartitionNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Remark: Remarks.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark() {
            return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StatusName: Meaning of status value.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatusName() {
            return software.amazon.jsii.Kernel.get(this, "attrStatusName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tag of the kafka console, which is used to group instance,topic, and consumption.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Topic: Topic Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopic() {
            return software.amazon.jsii.Kernel.get(this, "attrTopic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TopicStatus: The Topic status.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTopicStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrTopicStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.kafka.datasource.TopicProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.kafka.datasource.TopicProps.class));
        }
    }
}
