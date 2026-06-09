package com.aliyun.ros.cdk.cen;

/**
 * Represents a <code>TransitRouterCidr</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:45:17.302Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.ITransitRouterCidr")
@software.amazon.jsii.Jsii.Proxy(ITransitRouterCidr.Jsii$Proxy.class)
public interface ITransitRouterCidr extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Cidr: The CIDR block of the transit router.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidr();

    /**
     * Attribute Description: The new description of the transit router CIDR block.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute Family: The type of the CIDR block.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFamily();

    /**
     * Attribute PublishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublishCidrRoute();

    /**
     * Attribute TransitRouterCidrId: The ID of the CIDR block.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterCidrId();

    /**
     * Attribute TransitRouterCidrName: The new name of the transit router CIDR block.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterCidrName();

    /**
     * Attribute TransitRouterId: The ID of the transit router.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterCidrProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cen.ITransitRouterCidr.Jsii$Default {
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
         * Attribute Cidr: The CIDR block of the transit router.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The new description of the transit router CIDR block.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Family: The type of the CIDR block.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFamily() {
            return software.amazon.jsii.Kernel.get(this, "attrFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublishCidrRoute() {
            return software.amazon.jsii.Kernel.get(this, "attrPublishCidrRoute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterCidrId: The ID of the CIDR block.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterCidrId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterCidrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterCidrName: The new name of the transit router CIDR block.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterCidrName() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterCidrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterId: The ID of the transit router.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterCidrProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterCidrProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITransitRouterCidr}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITransitRouterCidr, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Cidr: The CIDR block of the transit router.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidr() {
            return software.amazon.jsii.Kernel.get(this, "attrCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The new description of the transit router CIDR block.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Family: The type of the CIDR block.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFamily() {
            return software.amazon.jsii.Kernel.get(this, "attrFamily", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PublishCidrRoute: Specifies whether to allow the system to automatically add a route that points to the CIDR block to the route table of the transit router.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublishCidrRoute() {
            return software.amazon.jsii.Kernel.get(this, "attrPublishCidrRoute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterCidrId: The ID of the CIDR block.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterCidrId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterCidrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterCidrName: The new name of the transit router CIDR block.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterCidrName() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterCidrName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterId: The ID of the transit router.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterCidrProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterCidrProps.class));
        }
    }
}
