package com.aliyun.ros.cdk.vpc;

/**
 * Represents a <code>VirtualBorderRouter</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.303Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IVirtualBorderRouter")
@software.amazon.jsii.Jsii.Proxy(IVirtualBorderRouter.Jsii$Proxy.class)
public interface IVirtualBorderRouter extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Name: The name of the VBR.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrName();

    /**
     * Attribute RouteTableId: The ID of the route table of the VBR.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteTableId();

    /**
     * Attribute VbrId: The ID of the VBR.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVbrId();

    /**
     * Attribute VlanInterfaceId: The ID of the VBR interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVlanInterfaceId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VirtualBorderRouterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.vpc.IVirtualBorderRouter.Jsii$Default {
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
         * Attribute Name: The name of the VBR.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteTableId: The ID of the route table of the VBR.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VbrId: The ID of the VBR.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVbrId() {
            return software.amazon.jsii.Kernel.get(this, "attrVbrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VlanInterfaceId: The ID of the VBR interface.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVlanInterfaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVlanInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VirtualBorderRouterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VirtualBorderRouterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVirtualBorderRouter}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVirtualBorderRouter, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Name: The name of the VBR.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrName() {
            return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RouteTableId: The ID of the route table of the VBR.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRouteTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VbrId: The ID of the VBR.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVbrId() {
            return software.amazon.jsii.Kernel.get(this, "attrVbrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VlanInterfaceId: The ID of the VBR interface.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVlanInterfaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVlanInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VirtualBorderRouterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VirtualBorderRouterProps.class));
        }
    }
}
