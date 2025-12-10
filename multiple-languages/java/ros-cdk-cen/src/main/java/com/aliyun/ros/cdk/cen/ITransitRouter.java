package com.aliyun.ros.cdk.cen;

/**
 * Represents a <code>TransitRouter</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.133Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.ITransitRouter")
@software.amazon.jsii.Jsii.Proxy(ITransitRouter.Jsii$Proxy.class)
public interface ITransitRouter extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AliUid: AliUid.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid();

    /**
     * Attribute CenId: CenId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId();

    /**
     * Attribute SystemTransitRouterRouteTableId: The system route table ID of transit router.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSystemTransitRouterRouteTableId();

    /**
     * Attribute TransitRouterDescription: TransitRouterDescription.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterDescription();

    /**
     * Attribute TransitRouterId: TransitRouterId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId();

    /**
     * Attribute TransitRouterName: TransitRouterName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterName();

    /**
     * Attribute Type: Type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cen.ITransitRouter.Jsii$Default {
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
         * Attribute AliUid: AliUid.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid() {
            return software.amazon.jsii.Kernel.get(this, "attrAliUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CenId: CenId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId() {
            return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SystemTransitRouterRouteTableId: The system route table ID of transit router.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSystemTransitRouterRouteTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrSystemTransitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterDescription: TransitRouterDescription.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterId: TransitRouterId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterName: TransitRouterName.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterName() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITransitRouter}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITransitRouter, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AliUid: AliUid.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAliUid() {
            return software.amazon.jsii.Kernel.get(this, "attrAliUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CenId: CenId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId() {
            return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SystemTransitRouterRouteTableId: The system route table ID of transit router.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSystemTransitRouterRouteTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrSystemTransitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterDescription: TransitRouterDescription.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterId: TransitRouterId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterName: TransitRouterName.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterName() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Type: Type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
            return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterProps.class));
        }
    }
}
