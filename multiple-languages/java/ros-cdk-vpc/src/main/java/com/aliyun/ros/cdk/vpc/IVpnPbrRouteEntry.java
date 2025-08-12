package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>VpnPbrRouteEntry</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.234Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IVpnPbrRouteEntry")
@software.amazon.jsii.Jsii.Proxy(IVpnPbrRouteEntry.Jsii$Proxy.class)
public interface IVpnPbrRouteEntry extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute NextHop: The next hop of the destination route entry.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNextHop();

    /**
     * Attribute RouteDest: The destination CIDR block of the destination route.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteDest();

    /**
     * Attribute RouteSource: The destination CIDR block of the policy-based route.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteSource();

    /**
     * Attribute VpnGatewayId: The ID of the VPN Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnGatewayId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnPbrRouteEntryProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.IVpnPbrRouteEntry.Jsii$Default {
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
         * Attribute NextHop: The next hop of the destination route entry.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNextHop() {
            return software.amazon.jsii.Kernel.get(this, "attrNextHop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteDest: The destination CIDR block of the destination route.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteDest() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteDest", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteSource: The destination CIDR block of the policy-based route.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteSource() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpnGatewayId: The ID of the VPN Gateway.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnPbrRouteEntryProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VpnPbrRouteEntryProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVpnPbrRouteEntry}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVpnPbrRouteEntry, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute NextHop: The next hop of the destination route entry.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNextHop() {
            return software.amazon.jsii.Kernel.get(this, "attrNextHop", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteDest: The destination CIDR block of the destination route.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteDest() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteDest", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteSource: The destination CIDR block of the policy-based route.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteSource() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpnGatewayId: The ID of the VPN Gateway.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpnGatewayId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpnGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpnPbrRouteEntryProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VpnPbrRouteEntryProps.class));
        }
    }
}
