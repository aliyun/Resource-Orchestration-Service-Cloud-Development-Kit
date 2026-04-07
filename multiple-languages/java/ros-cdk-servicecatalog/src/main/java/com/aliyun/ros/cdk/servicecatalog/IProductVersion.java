package com.aliyun.ros.cdk.servicecatalog;

/**
 * Represents a <code>ProductVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.038Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.servicecatalog.$Module.class, fqn = "@alicloud/ros-cdk-servicecatalog.IProductVersion")
@software.amazon.jsii.Jsii.Proxy(IProductVersion.Jsii$Proxy.class)
public interface IProductVersion extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Active: Specifies whether the product version is active.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrActive();

    /**
     * Attribute CreateTime: The creation time of the product version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the product version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute Guidance: The recommendation information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGuidance();

    /**
     * Attribute ProductId: The ID of the product to which the product version belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductId();

    /**
     * Attribute ProductVersionId: The ID of the product version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductVersionId();

    /**
     * Attribute ProductVersionName: The name of the product version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductVersionName();

    /**
     * Attribute TemplateType: The type of the product template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateType();

    /**
     * Attribute TemplateUrl: The URL of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateUrl();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.servicecatalog.ProductVersionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.servicecatalog.IProductVersion.Jsii$Default {
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
         * Attribute Active: Specifies whether the product version is active.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrActive() {
            return software.amazon.jsii.Kernel.get(this, "attrActive", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the product version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the product version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Guidance: The recommendation information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGuidance() {
            return software.amazon.jsii.Kernel.get(this, "attrGuidance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductId: The ID of the product to which the product version belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductId() {
            return software.amazon.jsii.Kernel.get(this, "attrProductId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductVersionId: The ID of the product version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductVersionId() {
            return software.amazon.jsii.Kernel.get(this, "attrProductVersionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductVersionName: The name of the product version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductVersionName() {
            return software.amazon.jsii.Kernel.get(this, "attrProductVersionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateType: The type of the product template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateType() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateUrl: The URL of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.servicecatalog.ProductVersionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.servicecatalog.ProductVersionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IProductVersion}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IProductVersion, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Active: Specifies whether the product version is active.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrActive() {
            return software.amazon.jsii.Kernel.get(this, "attrActive", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the product version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the product version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Guidance: The recommendation information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGuidance() {
            return software.amazon.jsii.Kernel.get(this, "attrGuidance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductId: The ID of the product to which the product version belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductId() {
            return software.amazon.jsii.Kernel.get(this, "attrProductId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductVersionId: The ID of the product version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductVersionId() {
            return software.amazon.jsii.Kernel.get(this, "attrProductVersionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProductVersionName: The name of the product version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProductVersionName() {
            return software.amazon.jsii.Kernel.get(this, "attrProductVersionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateType: The type of the product template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateType() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateUrl: The URL of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.servicecatalog.ProductVersionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.servicecatalog.ProductVersionProps.class));
        }
    }
}
