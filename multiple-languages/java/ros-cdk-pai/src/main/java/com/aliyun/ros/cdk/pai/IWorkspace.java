package com.aliyun.ros.cdk.pai;

/**
 * Represents a <code>Workspace</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.591Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.IWorkspace")
@software.amazon.jsii.Jsii.Proxy(IWorkspace.Jsii$Proxy.class)
public interface IWorkspace extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AdminNames: List of administrator account names.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdminNames();

    /**
     * Attribute Creator: The user ID of the creator.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreator();

    /**
     * Attribute Description: Workspace description, no more than 80 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.
     * <p>
     * If not configured, the default value is the workspace name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName();

    /**
     * Attribute EnvTypes: Environments contained in the workspace:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvTypes();

    /**
     * Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraInfos();

    /**
     * Attribute Owner: Workspace owner ID, displayed when Verbose is true.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwner();

    /**
     * Attribute Users: List of users.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsers();

    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId();

    /**
     * Attribute WorkspaceName: The workspace name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.IWorkspace.Jsii$Default {
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
         * Attribute AdminNames: List of administrator account names.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdminNames() {
            return software.amazon.jsii.Kernel.get(this, "attrAdminNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Creator: The user ID of the creator.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreator() {
            return software.amazon.jsii.Kernel.get(this, "attrCreator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Workspace description, no more than 80 characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.
         * <p>
         * If not configured, the default value is the workspace name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvTypes: Environments contained in the workspace:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraInfos() {
            return software.amazon.jsii.Kernel.get(this, "attrExtraInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Owner: Workspace owner ID, displayed when Verbose is true.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwner() {
            return software.amazon.jsii.Kernel.get(this, "attrOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Users: List of users.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsers() {
            return software.amazon.jsii.Kernel.get(this, "attrUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: The ID of the workspace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceName: The workspace name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceName() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.WorkspaceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IWorkspace}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IWorkspace, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AdminNames: List of administrator account names.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdminNames() {
            return software.amazon.jsii.Kernel.get(this, "attrAdminNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Creator: The user ID of the creator.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreator() {
            return software.amazon.jsii.Kernel.get(this, "attrCreator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: Workspace description, no more than 80 characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.
         * <p>
         * If not configured, the default value is the workspace name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnvTypes: Environments contained in the workspace:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrEnvTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraInfos() {
            return software.amazon.jsii.Kernel.get(this, "attrExtraInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Owner: Workspace owner ID, displayed when Verbose is true.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwner() {
            return software.amazon.jsii.Kernel.get(this, "attrOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Users: List of users.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsers() {
            return software.amazon.jsii.Kernel.get(this, "attrUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: The ID of the workspace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceName: The workspace name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceName() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.WorkspaceProps.class));
        }
    }
}
