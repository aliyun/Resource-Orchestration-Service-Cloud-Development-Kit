package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>EIPSegment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:21.840Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IEIPSegment")
@software.amazon.jsii.Jsii.Proxy(IEIPSegment.Jsii$Proxy.class)
public interface IEIPSegment extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute EipAddresses: List of EIP addresses.
     * <p>
     * like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipAddresses();

    /**
     * Attribute EipSegmentInstanceId: The ID of the contiguous EIP group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipSegmentInstanceId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPSegmentProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.IEIPSegment.Jsii$Default {
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
         * Attribute EipAddresses: List of EIP addresses.
         * <p>
         * like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipAddresses() {
            return software.amazon.jsii.Kernel.get(this, "attrEipAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EipSegmentInstanceId: The ID of the contiguous EIP group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipSegmentInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrEipSegmentInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPSegmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.EIPSegmentProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IEIPSegment}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IEIPSegment, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute EipAddresses: List of EIP addresses.
         * <p>
         * like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipAddresses() {
            return software.amazon.jsii.Kernel.get(this, "attrEipAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EipSegmentInstanceId: The ID of the contiguous EIP group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipSegmentInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrEipSegmentInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPSegmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.EIPSegmentProps.class));
        }
    }
}
