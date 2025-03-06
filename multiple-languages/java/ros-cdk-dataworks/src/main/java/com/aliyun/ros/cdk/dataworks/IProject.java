package com.aliyun.ros.cdk.dataworks;

/**
 * Represents a <code>Project</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.622Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.IProject")
@software.amazon.jsii.Jsii.Proxy(IProject.Jsii$Proxy.class)
public interface IProject extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute EnvTypes: The environment of the workspace.
     * <p>
     * Valid values: PROD and DEV.
     * The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
     * The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvTypes();

    /**
     * Attribute IsDefault: Indicates whether the workspace is the default workspace.
     * <p>
     * Valid values:
     * 1: The workspace is the default workspace.
     * 0: The workspace is not the default workspace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault();

    /**
     * Attribute ProjectId: The ID of the workspace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectId();

    /**
     * Attribute ProjectIdentifier: The name of the workspace.
     * <p>
     * The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectIdentifier();

    /**
     * Attribute ProtectedMode: Indicates whether the workspace protection feature is enabled.
     * <p>
     * Valid values:
     * 1: The workspace protection feature is enabled.
     * 0: The workspace protection feature is disabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtectedMode();

    /**
     * Attribute ResidentArea: The type of the workspace.
     * <p>
     * Valid values: private and swap.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResidentArea();

    /**
     * Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchedulerMaxRetryTimes();

    /**
     * Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs.
     * <p>
     * Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchedulerRetryInterval();

    /**
     * Attribute TablePrivacyMode: Indicates whether the MaxCompute tables in the workspace are visible to the users within the tenant.
     * <p>
     * Valid values:
     * 0: The MaxCompute tables are invisible to the users within a tenant.
     * 1: The MaxCompute tables are visible to the users within a tenant.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTablePrivacyMode();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.ProjectProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.dataworks.IProject.Jsii$Default {
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
         * Attribute EnvTypes: The environment of the workspace.
         * <p>
         * Valid values: PROD and DEV.
         * The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
         * The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsDefault: Indicates whether the workspace is the default workspace.
         * <p>
         * Valid values:
         * 1: The workspace is the default workspace.
         * 0: The workspace is not the default workspace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault() {
            return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProjectId: The ID of the workspace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectId() {
            return software.amazon.jsii.Kernel.get(this, "attrProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProjectIdentifier: The name of the workspace.
         * <p>
         * The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectIdentifier() {
            return software.amazon.jsii.Kernel.get(this, "attrProjectIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProtectedMode: Indicates whether the workspace protection feature is enabled.
         * <p>
         * Valid values:
         * 1: The workspace protection feature is enabled.
         * 0: The workspace protection feature is disabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtectedMode() {
            return software.amazon.jsii.Kernel.get(this, "attrProtectedMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResidentArea: The type of the workspace.
         * <p>
         * Valid values: private and swap.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResidentArea() {
            return software.amazon.jsii.Kernel.get(this, "attrResidentArea", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchedulerMaxRetryTimes() {
            return software.amazon.jsii.Kernel.get(this, "attrSchedulerMaxRetryTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs.
         * <p>
         * Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchedulerRetryInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrSchedulerRetryInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TablePrivacyMode: Indicates whether the MaxCompute tables in the workspace are visible to the users within the tenant.
         * <p>
         * Valid values:
         * 0: The MaxCompute tables are invisible to the users within a tenant.
         * 1: The MaxCompute tables are visible to the users within a tenant.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTablePrivacyMode() {
            return software.amazon.jsii.Kernel.get(this, "attrTablePrivacyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.ProjectProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dataworks.ProjectProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IProject}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IProject, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute EnvTypes: The environment of the workspace.
         * <p>
         * Valid values: PROD and DEV.
         * The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
         * The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsDefault: Indicates whether the workspace is the default workspace.
         * <p>
         * Valid values:
         * 1: The workspace is the default workspace.
         * 0: The workspace is not the default workspace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault() {
            return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProjectId: The ID of the workspace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectId() {
            return software.amazon.jsii.Kernel.get(this, "attrProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProjectIdentifier: The name of the workspace.
         * <p>
         * The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectIdentifier() {
            return software.amazon.jsii.Kernel.get(this, "attrProjectIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProtectedMode: Indicates whether the workspace protection feature is enabled.
         * <p>
         * Valid values:
         * 1: The workspace protection feature is enabled.
         * 0: The workspace protection feature is disabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtectedMode() {
            return software.amazon.jsii.Kernel.get(this, "attrProtectedMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResidentArea: The type of the workspace.
         * <p>
         * Valid values: private and swap.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResidentArea() {
            return software.amazon.jsii.Kernel.get(this, "attrResidentArea", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchedulerMaxRetryTimes() {
            return software.amazon.jsii.Kernel.get(this, "attrSchedulerMaxRetryTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs.
         * <p>
         * Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchedulerRetryInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrSchedulerRetryInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TablePrivacyMode: Indicates whether the MaxCompute tables in the workspace are visible to the users within the tenant.
         * <p>
         * Valid values:
         * 0: The MaxCompute tables are invisible to the users within a tenant.
         * 1: The MaxCompute tables are visible to the users within a tenant.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTablePrivacyMode() {
            return software.amazon.jsii.Kernel.get(this, "attrTablePrivacyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.ProjectProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dataworks.ProjectProps.class));
        }
    }
}
