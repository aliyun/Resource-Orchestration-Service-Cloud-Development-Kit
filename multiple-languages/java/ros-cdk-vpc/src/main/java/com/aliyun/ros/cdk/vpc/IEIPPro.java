package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>EIPPro</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:21.838Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IEIPPro")
@software.amazon.jsii.Jsii.Proxy(IEIPPro.Jsii$Proxy.class)
public interface IEIPPro extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC.
     * <p>
     * Returned only for VPC elastic IP addresses.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllocationId();

    /**
     * Attribute EipAddress: IP address of created EIP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipAddress();

    /**
     * Attribute ISP: The line type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsp();

    /**
     * Attribute OrderId: Order ID of prepaid EIP instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPProProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.IEIPPro.Jsii$Default {
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
         * Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC.
         * <p>
         * Returned only for VPC elastic IP addresses.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllocationId() {
            return software.amazon.jsii.Kernel.get(this, "attrAllocationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EipAddress: IP address of created EIP.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrEipAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ISP: The line type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsp() {
            return software.amazon.jsii.Kernel.get(this, "attrIsp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: Order ID of prepaid EIP instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPProProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.EIPProProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IEIPPro}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IEIPPro, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC.
         * <p>
         * Returned only for VPC elastic IP addresses.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllocationId() {
            return software.amazon.jsii.Kernel.get(this, "attrAllocationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EipAddress: IP address of created EIP.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipAddress() {
            return software.amazon.jsii.Kernel.get(this, "attrEipAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ISP: The line type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsp() {
            return software.amazon.jsii.Kernel.get(this, "attrIsp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OrderId: Order ID of prepaid EIP instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
            return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPProProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.EIPProProps.class));
        }
    }
}
