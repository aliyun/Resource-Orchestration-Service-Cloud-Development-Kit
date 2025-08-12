package com.aliyun.ros.cdk.cen;

/**
 * Represents a <code>TransitRouterVpcAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:44.327Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.ITransitRouterVpcAttachment")
@software.amazon.jsii.Jsii.Proxy(ITransitRouterVpcAttachment.Jsii$Proxy.class)
public interface ITransitRouterVpcAttachment extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CenId: CenId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId();

    /**
     * Attribute ClientToken: ClientToken.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientToken();

    /**
     * Attribute ResourceType: ResourceType.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType();

    /**
     * Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentDescription();

    /**
     * Attribute TransitRouterAttachmentId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId();

    /**
     * Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentName();

    /**
     * Attribute TransitRouterId: TransitRouterId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId();

    /**
     * Attribute VpcId: VpcId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VpcOwnerId: VpcOwnerId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcOwnerId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVpcAttachmentProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cen.ITransitRouterVpcAttachment.Jsii$Default {
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
         * Attribute CenId: CenId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId() {
            return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClientToken: ClientToken.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientToken() {
            return software.amazon.jsii.Kernel.get(this, "attrClientToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceType: ResourceType.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterAttachmentId: The first ID of the resource.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentName() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterId: TransitRouterId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VpcId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcOwnerId: VpcOwnerId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVpcAttachmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterVpcAttachmentProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITransitRouterVpcAttachment}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITransitRouterVpcAttachment, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CenId: CenId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId() {
            return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ClientToken: ClientToken.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientToken() {
            return software.amazon.jsii.Kernel.get(this, "attrClientToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceType: ResourceType.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterAttachmentId: The first ID of the resource.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentName() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TransitRouterId: TransitRouterId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
            return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: VpcId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcOwnerId: VpcOwnerId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVpcAttachmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterVpcAttachmentProps.class));
        }
    }
}
