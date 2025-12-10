package com.aliyun.ros.cdk.apig;

/**
 * Represents a <code>PluginAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.323Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.IPluginAttachment")
@software.amazon.jsii.Jsii.Proxy(IPluginAttachment.Jsii$Proxy.class)
public interface IPluginAttachment extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AttachResourceId: The resource ID to be attached by the plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceId();

    /**
     * Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceIds();

    /**
     * Attribute AttachResourceNames: The list of resource names to be attached by the plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceNames();

    /**
     * Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceParentIds();

    /**
     * Attribute AttachResourceType: The type of the resource to be attached by the plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceType();

    /**
     * Attribute Enable: Whether to enable this plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable();

    /**
     * Attribute EnvironmentId: The ID of the environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId();

    /**
     * Attribute PluginAttachmentId: The ID of plugin attachment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginAttachmentId();

    /**
     * Attribute PluginClassInfo: The type of the plugin.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginClassInfo();

    /**
     * Attribute PluginInfo: The information about the association of plugin with gateway instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginInfo();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginAttachmentProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.apig.IPluginAttachment.Jsii$Default {
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
         * Attribute AttachResourceId: The resource ID to be attached by the plugin.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachResourceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AttachResourceNames: The list of resource names to be attached by the plugin.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceNames() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachResourceNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceParentIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachResourceParentIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AttachResourceType: The type of the resource to be attached by the plugin.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Enable: Whether to enable this plugin.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentId: The ID of the environment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginAttachmentId: The ID of plugin attachment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginAttachmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginClassInfo: The type of the plugin.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginClassInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginClassInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginInfo: The information about the association of plugin with gateway instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginAttachmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.PluginAttachmentProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IPluginAttachment}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPluginAttachment, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AttachResourceId: The resource ID to be attached by the plugin.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachResourceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AttachResourceNames: The list of resource names to be attached by the plugin.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceNames() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachResourceNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceParentIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachResourceParentIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AttachResourceType: The type of the resource to be attached by the plugin.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAttachResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrAttachResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Enable: Whether to enable this plugin.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvironmentId: The ID of the environment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvironmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginAttachmentId: The ID of plugin attachment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginAttachmentId() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginClassInfo: The type of the plugin.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginClassInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginClassInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PluginInfo: The information about the association of plugin with gateway instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPluginInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrPluginInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.PluginAttachmentProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.PluginAttachmentProps.class));
        }
    }
}
