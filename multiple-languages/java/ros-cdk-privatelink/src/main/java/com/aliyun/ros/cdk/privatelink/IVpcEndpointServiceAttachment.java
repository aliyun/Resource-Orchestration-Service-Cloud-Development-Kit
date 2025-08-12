package com.aliyun.ros.cdk.privatelink;

/**
 * Represents a <code>VpcEndpointServiceAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:49.532Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.IVpcEndpointServiceAttachment")
@software.amazon.jsii.Jsii.Proxy(IVpcEndpointServiceAttachment.Jsii$Proxy.class)
public interface IVpcEndpointServiceAttachment extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ResourceId: The resource id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceId();

    /**
     * Attribute ResourceType: The resource type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType();

    /**
     * Attribute ServiceId: The endpoint service that is associated with the endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachmentProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.privatelink.IVpcEndpointServiceAttachment.Jsii$Default {
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
         * Attribute ResourceId: The resource id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceType: The resource type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceId: The endpoint service that is associated with the endpoint.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachmentProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVpcEndpointServiceAttachment}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVpcEndpointServiceAttachment, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ResourceId: The resource id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceType: The resource type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServiceId: The endpoint service that is associated with the endpoint.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.privatelink.VpcEndpointServiceAttachmentProps.class));
        }
    }
}
