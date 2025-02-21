package com.aliyun.ros.cdk.mobi;

/**
 * Represents a <code>App</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:18.010Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mobi.$Module.class, fqn = "@alicloud/ros-cdk-mobi.IApp")
@software.amazon.jsii.Jsii.Proxy(IApp.Jsii$Proxy.class)
public interface IApp extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AppDescription: Description of application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppDescription();

    /**
     * Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.
     * <p>
     * The default value is -1.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppIcon();

    /**
     * Attribute AppId: Application ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId();

    /**
     * Attribute AppName: The application name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppName();

    /**
     * Attribute AppType: The application type.
     * <p>
     * Web applications and Copilot applications are supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppType();

    /**
     * Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppWorkspaceId();

    /**
     * Attribute CreateTime: Create time of application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute ModifiedTime: Modified time of application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mobi.AppProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.mobi.IApp.Jsii$Default {
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
         * Attribute AppDescription: Description of application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrAppDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.
         * <p>
         * The default value is -1.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppIcon() {
            return software.amazon.jsii.Kernel.get(this, "attrAppIcon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppId: Application ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId() {
            return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppName: The application name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppName() {
            return software.amazon.jsii.Kernel.get(this, "attrAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppType: The application type.
         * <p>
         * Web applications and Copilot applications are supported.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppType() {
            return software.amazon.jsii.Kernel.get(this, "attrAppType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrAppWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Create time of application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifiedTime: Modified time of application.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mobi.AppProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mobi.AppProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IApp}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IApp, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AppDescription: Description of application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrAppDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label.
         * <p>
         * The default value is -1.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppIcon() {
            return software.amazon.jsii.Kernel.get(this, "attrAppIcon", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppId: Application ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppId() {
            return software.amazon.jsii.Kernel.get(this, "attrAppId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppName: The application name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppName() {
            return software.amazon.jsii.Kernel.get(this, "attrAppName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppType: The application type.
         * <p>
         * Web applications and Copilot applications are supported.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppType() {
            return software.amazon.jsii.Kernel.get(this, "attrAppType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrAppWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Create time of application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifiedTime: Modified time of application.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mobi.AppProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mobi.AppProps.class));
        }
    }
}
