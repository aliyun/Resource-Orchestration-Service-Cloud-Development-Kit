package com.aliyun.ros.cdk.pai;

/**
 * Represents a <code>Image</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:28.372Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.IImage")
@software.amazon.jsii.Jsii.Proxy(IImage.Jsii$Proxy.class)
public interface IImage extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Accessibility: Visibility of the mirror.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility();

    /**
     * Attribute ImageName: The image name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageName();

    /**
     * Attribute ImageUri: The Image address, which contains the version number.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageUri();

    /**
     * Attribute Labels: Labels.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels();

    /**
     * Attribute WorkspaceId: The ID of the workspace to which the image belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ImageProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.IImage.Jsii$Default {
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
         * Attribute Accessibility: Visibility of the mirror.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageName: The image name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageName() {
            return software.amazon.jsii.Kernel.get(this, "attrImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageUri: The Image address, which contains the version number.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageUri() {
            return software.amazon.jsii.Kernel.get(this, "attrImageUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: Labels.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
            return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: The ID of the workspace to which the image belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ImageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.ImageProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IImage}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IImage, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Accessibility: Visibility of the mirror.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageName: The image name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageName() {
            return software.amazon.jsii.Kernel.get(this, "attrImageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageUri: The Image address, which contains the version number.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageUri() {
            return software.amazon.jsii.Kernel.get(this, "attrImageUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: Labels.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
            return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: The ID of the workspace to which the image belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ImageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.ImageProps.class));
        }
    }
}
