package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>Ipv4Gateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.206Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IIpv4Gateway")
@software.amazon.jsii.Jsii.Proxy(IIpv4Gateway.Jsii$Proxy.class)
public interface IIpv4Gateway extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Ipv4GatewayDescription: Description information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv4GatewayDescription();

    /**
     * Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv4GatewayId();

    /**
     * Attribute Ipv4GatewayName: Resource name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv4GatewayName();

    /**
     * Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv4GatewayRouteTableId();

    /**
     * Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.Ipv4GatewayProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.IIpv4Gateway.Jsii$Default {
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
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv4GatewayDescription: Description information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv4GatewayDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv4GatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv4GatewayName: Resource name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv4GatewayName() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv4GatewayRouteTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.Ipv4GatewayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.Ipv4GatewayProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IIpv4Gateway}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IIpv4Gateway, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The creation time of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv4GatewayDescription: Description information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv4GatewayDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv4GatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv4GatewayName: Resource name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv4GatewayName() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpv4GatewayRouteTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrIpv4GatewayRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.Ipv4GatewayProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.Ipv4GatewayProps.class));
        }
    }
}
