package com.aliyun.ros.cdk.aligreen;

/**
 * Represents a <code>ImageLib</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:34.321Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.IImageLib")
@software.amazon.jsii.Jsii.Proxy(IImageLib.Jsii$Proxy.class)
public interface IImageLib extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BizTypes: List of business scenarios.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizTypes();

    /**
     * Attribute Category: The category of the image library.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory();

    /**
     * Attribute Enable: Specifies whether to enable the image library.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable();

    /**
     * Attribute ImageLibId: The ID of the primary key of the image library.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageLibId();

    /**
     * Attribute ImageLibName: The name of the image library defined by the customer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageLibName();

    /**
     * Attribute Scene: The moderation scenario to which the custom image library applies.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrScene();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.ImageLibProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.aligreen.IImageLib.Jsii$Default {
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
         * Attribute BizTypes: List of business scenarios.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrBizTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: The category of the image library.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Enable: Specifies whether to enable the image library.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageLibId: The ID of the primary key of the image library.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageLibId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageLibId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageLibName: The name of the image library defined by the customer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageLibName() {
            return software.amazon.jsii.Kernel.get(this, "attrImageLibName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scene: The moderation scenario to which the custom image library applies.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrScene() {
            return software.amazon.jsii.Kernel.get(this, "attrScene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.ImageLibProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.ImageLibProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IImageLib}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IImageLib, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute BizTypes: List of business scenarios.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrBizTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: The category of the image library.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Enable: Specifies whether to enable the image library.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageLibId: The ID of the primary key of the image library.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageLibId() {
            return software.amazon.jsii.Kernel.get(this, "attrImageLibId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ImageLibName: The name of the image library defined by the customer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrImageLibName() {
            return software.amazon.jsii.Kernel.get(this, "attrImageLibName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Scene: The moderation scenario to which the custom image library applies.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrScene() {
            return software.amazon.jsii.Kernel.get(this, "attrScene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.ImageLibProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.ImageLibProps.class));
        }
    }
}
