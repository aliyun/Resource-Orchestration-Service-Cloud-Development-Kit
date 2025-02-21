package com.aliyun.ros.cdk.cen;

/**
 * Represents a <code>TransitRouterRouteEntry</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:12.545Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.ITransitRouterRouteEntry")
@software.amazon.jsii.Jsii.Proxy(ITransitRouterRouteEntry.Jsii$Proxy.class)
public interface ITransitRouterRouteEntry extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryDescription();

    /**
     * Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryDestinationCidrBlock();

    /**
     * Attribute TransitRouterRouteEntryId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryId();

    /**
     * Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryName();

    /**
     * Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryNextHopId();

    /**
     * Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryNextHopType();

    /**
     * Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryType();

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteEntryProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cen.ITransitRouterRouteEntry.Jsii$Default {
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
         * Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryDestinationCidrBlock() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryDestinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteEntryId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryName() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryNextHopId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryNextHopId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryNextHopType() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryNextHopType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryType() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteEntryProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterRouteEntryProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITransitRouterRouteEntry}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITransitRouterRouteEntry, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryDestinationCidrBlock() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryDestinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteEntryId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryName() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryNextHopId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryNextHopId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryNextHopType() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryNextHopType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteEntryType() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterRouteTableId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteEntryProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterRouteEntryProps.class));
        }
    }
}
