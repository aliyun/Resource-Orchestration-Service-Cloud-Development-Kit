package com.aliyun.ros.cdk.cen;

/**
 * Represents a <code>TransitRouterRouteTable</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.137Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.ITransitRouterRouteTable")
@software.amazon.jsii.Jsii.Proxy(ITransitRouterRouteTable.Jsii$Proxy.class)
public interface ITransitRouterRouteTable extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ClientToken: ClientToken.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientToken();

    /**
     * Attribute TransitRouterId: TransitRouterId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId();

    /**
     * Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableDescription();

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableId();

    /**
     * Attribute TransitRouterRouteTableName: TransitRouterRouteTableName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableName();

    /**
     * Attribute TransitRouterRouteTableType: TransitRouterRouteTableType.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteTableProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cen.ITransitRouterRouteTable.Jsii$Default {
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
         * Attribute ClientToken: ClientToken.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientToken() {
            return software.amazon.jsii.Kernel.get(this, "attrClientToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterId: TransitRouterId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteTableName: TransitRouterRouteTableName.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableName() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteTableType: TransitRouterRouteTableType.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableType() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteTableProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterRouteTableProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITransitRouterRouteTable}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITransitRouterRouteTable, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ClientToken: ClientToken.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientToken() {
            return software.amazon.jsii.Kernel.get(this, "attrClientToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterId: TransitRouterId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteTableDescription: TransitRouterRouteTableDescription.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteTableName: TransitRouterRouteTableName.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableName() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteTableType: TransitRouterRouteTableType.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableType() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteTableProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterRouteTableProps.class));
        }
    }
}
