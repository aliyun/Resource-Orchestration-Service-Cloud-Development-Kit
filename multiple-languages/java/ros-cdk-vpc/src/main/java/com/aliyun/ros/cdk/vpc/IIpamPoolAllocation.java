package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>IpamPoolAllocation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T14:04:31.423Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IIpamPoolAllocation")
@software.amazon.jsii.Jsii.Proxy(IIpamPoolAllocation.Jsii$Proxy.class)
public interface IIpamPoolAllocation extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Cidr: The allocated address segment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidr();

    /**
     * Attribute CreateTime: Instance creation time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute IpamPoolAllocationDescription: The description of the ipam pool alloctaion.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolAllocationDescription();

    /**
     * Attribute IpamPoolAllocationId: The instance ID of the ipam pool allocation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolAllocationId();

    /**
     * Attribute IpamPoolAllocationName: The name of the ipam pool allocation.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolAllocationName();

    /**
     * Attribute IpamPoolId: The ID of the IPAM Pool.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolId();

    /**
     * Attribute ResourceOwnerId: The ID of the Alibaba Cloud account (primary account) to which the resource belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceOwnerId();

    /**
     * Attribute ResourceType: The type of resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType();

    /**
     * Attribute SourceCidr: The source address segment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceCidr();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamPoolAllocationProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.IIpamPoolAllocation.Jsii$Default {
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
         * Attribute Cidr: The allocated address segment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Instance creation time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamPoolAllocationDescription: The description of the ipam pool alloctaion.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolAllocationDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamPoolAllocationDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamPoolAllocationId: The instance ID of the ipam pool allocation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolAllocationId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamPoolAllocationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamPoolAllocationName: The name of the ipam pool allocation.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolAllocationName() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamPoolAllocationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamPoolId: The ID of the IPAM Pool.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceOwnerId: The ID of the Alibaba Cloud account (primary account) to which the resource belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceType: The type of resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceCidr: The source address segment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamPoolAllocationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamPoolAllocationProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IIpamPoolAllocation}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IIpamPoolAllocation, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Cidr: The allocated address segment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Instance creation time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamPoolAllocationDescription: The description of the ipam pool alloctaion.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolAllocationDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamPoolAllocationDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamPoolAllocationId: The instance ID of the ipam pool allocation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolAllocationId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamPoolAllocationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamPoolAllocationName: The name of the ipam pool allocation.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolAllocationName() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamPoolAllocationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IpamPoolId: The ID of the IPAM Pool.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceOwnerId: The ID of the Alibaba Cloud account (primary account) to which the resource belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceType: The type of resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceCidr: The source address segment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamPoolAllocationProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamPoolAllocationProps.class));
        }
    }
}
