package com.aliyun.ros.cdk.cen;

/**
 * Represents a <code>InterRegionTrafficQosQueue</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:45:17.298Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.IInterRegionTrafficQosQueue")
@software.amazon.jsii.Jsii.Proxy(IInterRegionTrafficQosQueue.Jsii$Proxy.class)
public interface IInterRegionTrafficQosQueue extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.
     * <p>
     * Unit: Mbit/s.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth();

    /**
     * Attribute Dscps: The DSCP value of the traffic packet to be matched in the current queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDscps();

    /**
     * Attribute EffectiveBandwidth: The actual bandwidth value of the current queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEffectiveBandwidth();

    /**
     * Attribute InterRegionTrafficQosQueueDescription: The description of the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosQueueDescription();

    /**
     * Attribute InterRegionTrafficQosQueueId: The ID of the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosQueueId();

    /**
     * Attribute InterRegionTrafficQosQueueName: The name of the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosQueueName();

    /**
     * Attribute RemainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemainBandwidthPercent();

    /**
     * Attribute TrafficQosPolicyId: The ID of the QoS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficQosPolicyId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueueProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cen.IInterRegionTrafficQosQueue.Jsii$Default {
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
         * Attribute Bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Dscps: The DSCP value of the traffic packet to be matched in the current queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDscps() {
            return software.amazon.jsii.Kernel.get(this, "attrDscps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EffectiveBandwidth: The actual bandwidth value of the current queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEffectiveBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrEffectiveBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterRegionTrafficQosQueueDescription: The description of the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosQueueDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosQueueDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterRegionTrafficQosQueueId: The ID of the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosQueueId() {
            return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosQueueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterRegionTrafficQosQueueName: The name of the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosQueueName() {
            return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemainBandwidthPercent() {
            return software.amazon.jsii.Kernel.get(this, "attrRemainBandwidthPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TrafficQosPolicyId: The ID of the QoS policy.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficQosPolicyId() {
            return software.amazon.jsii.Kernel.get(this, "attrTrafficQosPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueueProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueueProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInterRegionTrafficQosQueue}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInterRegionTrafficQosQueue, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.
         * <p>
         * Unit: Mbit/s.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Dscps: The DSCP value of the traffic packet to be matched in the current queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDscps() {
            return software.amazon.jsii.Kernel.get(this, "attrDscps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EffectiveBandwidth: The actual bandwidth value of the current queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEffectiveBandwidth() {
            return software.amazon.jsii.Kernel.get(this, "attrEffectiveBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterRegionTrafficQosQueueDescription: The description of the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosQueueDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosQueueDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterRegionTrafficQosQueueId: The ID of the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosQueueId() {
            return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosQueueId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InterRegionTrafficQosQueueName: The name of the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInterRegionTrafficQosQueueName() {
            return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosQueueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RemainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemainBandwidthPercent() {
            return software.amazon.jsii.Kernel.get(this, "attrRemainBandwidthPercent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TrafficQosPolicyId: The ID of the QoS policy.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrafficQosPolicyId() {
            return software.amazon.jsii.Kernel.get(this, "attrTrafficQosPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueueProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.InterRegionTrafficQosQueueProps.class));
        }
    }
}
