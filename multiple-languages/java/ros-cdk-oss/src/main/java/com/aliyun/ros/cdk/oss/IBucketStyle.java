package com.aliyun.ros.cdk.oss;

/**
 * Represents a <code>BucketStyle</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:55.861Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oss.$Module.class, fqn = "@alicloud/ros-cdk-oss.IBucketStyle")
@software.amazon.jsii.Jsii.Proxy(IBucketStyle.Jsii$Proxy.class)
public interface IBucketStyle extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Category: Style category, valid values: image, document, video.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory();

    /**
     * Attribute Content: The Image style content can contain single or multiple image processing parameters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrContent();

    /**
     * Attribute CreateTime: Image Style Creation Time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute LastModifyTime: Last modification time of Image style.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifyTime();

    /**
     * Attribute StyleName: Image Style Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStyleName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.BucketStyleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.oss.IBucketStyle.Jsii$Default {
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
         * Attribute Category: Style category, valid values: image, document, video.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Content: The Image style content can contain single or multiple image processing parameters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrContent() {
            return software.amazon.jsii.Kernel.get(this, "attrContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Image Style Creation Time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastModifyTime: Last modification time of Image style.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLastModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StyleName: Image Style Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStyleName() {
            return software.amazon.jsii.Kernel.get(this, "attrStyleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.BucketStyleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oss.BucketStyleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IBucketStyle}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IBucketStyle, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Category: Style category, valid values: image, document, video.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Content: The Image style content can contain single or multiple image processing parameters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrContent() {
            return software.amazon.jsii.Kernel.get(this, "attrContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Image Style Creation Time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastModifyTime: Last modification time of Image style.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrLastModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StyleName: Image Style Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStyleName() {
            return software.amazon.jsii.Kernel.get(this, "attrStyleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oss.BucketStyleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oss.BucketStyleProps.class));
        }
    }
}
