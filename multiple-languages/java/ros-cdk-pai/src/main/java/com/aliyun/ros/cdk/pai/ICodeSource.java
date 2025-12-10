package com.aliyun.ros.cdk.pai;

/**
 * Represents a <code>CodeSource</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.703Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.ICodeSource")
@software.amazon.jsii.Jsii.Proxy(ICodeSource.Jsii$Proxy.class)
public interface ICodeSource extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Accessibility: Visibility of the code configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility();

    /**
     * Attribute CodeBranch: Code repository branch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeBranch();

    /**
     * Attribute CodeCommit: The code CommitId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeCommit();

    /**
     * Attribute CodeRepo: Code repository address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeRepo();

    /**
     * Attribute CodeRepoAccessToken: The Token used to access the code repository.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeRepoAccessToken();

    /**
     * Attribute CodeRepoUserName: The user name of the code repository.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeRepoUserName();

    /**
     * Attribute CodeSourcesId: The ID of the created code configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeSourcesId();

    /**
     * Attribute CreateTime: The creation time of the code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: A detailed description of the code configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute DisplayName: Code source configuration name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName();

    /**
     * Attribute GmtModifyTime: Code configuration modification time.
     * <p>
     * The time format is iso8601.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifyTime();

    /**
     * Attribute MountPath: The local Mount Directory of the code.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountPath();

    /**
     * Attribute UserId: The ID of the creator of the code configuration source.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.CodeSourceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.ICodeSource.Jsii$Default {
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
         * Attribute Accessibility: Visibility of the code configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeBranch: Code repository branch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeBranch() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeBranch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeCommit: The code CommitId.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeCommit() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeCommit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeRepo: Code repository address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeRepo() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeRepo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeRepoAccessToken: The Token used to access the code repository.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeRepoAccessToken() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeRepoAccessToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeRepoUserName: The user name of the code repository.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeRepoUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeRepoUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeSourcesId: The ID of the created code configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeSourcesId() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeSourcesId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the code.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: A detailed description of the code configuration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: Code source configuration name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModifyTime: Code configuration modification time.
         * <p>
         * The time format is iso8601.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MountPath: The local Mount Directory of the code.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountPath() {
            return software.amazon.jsii.Kernel.get(this, "attrMountPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The ID of the creator of the code configuration source.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: The ID of the workspace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.CodeSourceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.CodeSourceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ICodeSource}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ICodeSource, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Accessibility: Visibility of the code configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeBranch: Code repository branch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeBranch() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeBranch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeCommit: The code CommitId.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeCommit() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeCommit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeRepo: Code repository address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeRepo() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeRepo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeRepoAccessToken: The Token used to access the code repository.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeRepoAccessToken() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeRepoAccessToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeRepoUserName: The user name of the code repository.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeRepoUserName() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeRepoUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CodeSourcesId: The ID of the created code configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeSourcesId() {
            return software.amazon.jsii.Kernel.get(this, "attrCodeSourcesId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The creation time of the code.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: A detailed description of the code configuration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DisplayName: Code source configuration name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
            return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModifyTime: Code configuration modification time.
         * <p>
         * The time format is iso8601.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MountPath: The local Mount Directory of the code.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountPath() {
            return software.amazon.jsii.Kernel.get(this, "attrMountPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The ID of the creator of the code configuration source.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WorkspaceId: The ID of the workspace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.CodeSourceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.CodeSourceProps.class));
        }
    }
}
