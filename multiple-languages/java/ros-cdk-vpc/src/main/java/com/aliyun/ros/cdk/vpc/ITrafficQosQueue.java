package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>TrafficQosQueue</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.885Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.ITrafficQosQueue")
@software.amazon.jsii.Jsii.Proxy(ITrafficQosQueue.Jsii$Proxy.class)
public interface ITrafficQosQueue extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BandwidthPercent: QoS queue bandwidth percentage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPercent();

    /**
     * Attribute QosId: The ID of the QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosId();

    /**
     * Attribute QueueDescription: The description of the QoS queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueDescription();

    /**
     * Attribute QueueId: The ID of the QoS queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueId();

    /**
     * Attribute QueueName: The name of the QoS queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName();

    /**
     * Attribute QueueType: QoS queue type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosQueueProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.ITrafficQosQueue.Jsii$Default {
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
         * Attribute BandwidthPercent: QoS queue bandwidth percentage.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPercent() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QosId: The ID of the QoS policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosId() {
            return software.amazon.jsii.Kernel.get(this, "attrQosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueDescription: The description of the QoS queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueId: The ID of the QoS queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueId() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueName: The name of the QoS queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueType: QoS queue type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueType() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosQueueProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.TrafficQosQueueProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITrafficQosQueue}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITrafficQosQueue, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute BandwidthPercent: QoS queue bandwidth percentage.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidthPercent() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidthPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QosId: The ID of the QoS policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQosId() {
            return software.amazon.jsii.Kernel.get(this, "attrQosId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueDescription: The description of the QoS queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueId: The ID of the QoS queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueId() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueName: The name of the QoS queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueName() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute QueueType: QoS queue type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrQueueType() {
            return software.amazon.jsii.Kernel.get(this, "attrQueueType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.TrafficQosQueueProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.TrafficQosQueueProps.class));
        }
    }
}
