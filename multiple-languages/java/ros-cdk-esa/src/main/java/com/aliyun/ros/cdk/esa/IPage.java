package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>Page</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.554Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IPage")
@software.amazon.jsii.Jsii.Proxy(IPage.Jsii$Proxy.class)
public interface IPage extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Content: The Base64-encoded content of the error page.
     * <p>
     * The content type is specified by the Content-Type field.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrContent();

    /**
     * Attribute ContentType: The Content-Type field in the HTTP header.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrContentType();

    /**
     * Attribute Description: The description of the custom error page.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute Kind: The type of the custom response page.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKind();

    /**
     * Attribute PageId: The ID of the custom error page.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPageId();

    /**
     * Attribute PageName: The name of the custom response page.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPageName();

    /**
     * Attribute UpdateTime: The time when the custom error page was last modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.PageProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IPage.Jsii$Default {
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
         * Attribute Content: The Base64-encoded content of the error page.
         * <p>
         * The content type is specified by the Content-Type field.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrContent() {
            return software.amazon.jsii.Kernel.get(this, "attrContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ContentType: The Content-Type field in the HTTP header.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrContentType() {
            return software.amazon.jsii.Kernel.get(this, "attrContentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the custom error page.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Kind: The type of the custom response page.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKind() {
            return software.amazon.jsii.Kernel.get(this, "attrKind", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PageId: The ID of the custom error page.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPageId() {
            return software.amazon.jsii.Kernel.get(this, "attrPageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PageName: The name of the custom response page.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPageName() {
            return software.amazon.jsii.Kernel.get(this, "attrPageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the custom error page was last modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.PageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.PageProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IPage}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPage, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Content: The Base64-encoded content of the error page.
         * <p>
         * The content type is specified by the Content-Type field.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrContent() {
            return software.amazon.jsii.Kernel.get(this, "attrContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ContentType: The Content-Type field in the HTTP header.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrContentType() {
            return software.amazon.jsii.Kernel.get(this, "attrContentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the custom error page.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Kind: The type of the custom response page.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKind() {
            return software.amazon.jsii.Kernel.get(this, "attrKind", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PageId: The ID of the custom error page.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPageId() {
            return software.amazon.jsii.Kernel.get(this, "attrPageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PageName: The name of the custom response page.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPageName() {
            return software.amazon.jsii.Kernel.get(this, "attrPageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the custom error page was last modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.PageProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.PageProps.class));
        }
    }
}
