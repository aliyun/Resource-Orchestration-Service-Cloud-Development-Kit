package com.aliyun.ros.cdk.dataworks;

/**
 * Represents a <code>Route</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.619Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.IRoute")
@software.amazon.jsii.Jsii.Proxy(IRoute.Jsii$Proxy.class)
public interface IRoute extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: Time when route information was created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DestinationCidr: The CIDR blocks of the destination-based route.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationCidr();

    /**
     * Attribute DwResourceGroupId: ID of the resource group to which the route belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDwResourceGroupId();

    /**
     * Attribute NetworkId: The ID of the network resource to which the route belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkId();

    /**
     * Attribute ResourceId: Identifier of the network resource to which the route belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceId();

    /**
     * Attribute RouteId: The route ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.RouteProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dataworks.IRoute.Jsii$Default {
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
         * Attribute CreateTime: Time when route information was created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DestinationCidr: The CIDR blocks of the destination-based route.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrDestinationCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DwResourceGroupId: ID of the resource group to which the route belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDwResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrDwResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkId: The ID of the network resource to which the route belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkId() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceId: Identifier of the network resource to which the route belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteId: The route ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteId() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.RouteProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dataworks.RouteProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IRoute}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRoute, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: Time when route information was created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DestinationCidr: The CIDR blocks of the destination-based route.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDestinationCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrDestinationCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DwResourceGroupId: ID of the resource group to which the route belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDwResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrDwResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkId: The ID of the network resource to which the route belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkId() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceId: Identifier of the network resource to which the route belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteId: The route ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteId() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.RouteProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dataworks.RouteProps.class));
        }
    }
}
