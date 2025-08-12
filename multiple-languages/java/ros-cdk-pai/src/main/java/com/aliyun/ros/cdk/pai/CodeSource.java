package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::CodeSource</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:49.074Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.CodeSource")
public class CodeSource extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pai.ICodeSource {

    protected CodeSource(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CodeSource(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public CodeSource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.CodeSourceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CodeSource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.CodeSourceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Accessibility: Visibility of the code configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CodeBranch: Code repository branch.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeBranch() {
        return software.amazon.jsii.Kernel.get(this, "attrCodeBranch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CodeCommit: The code CommitId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeCommit() {
        return software.amazon.jsii.Kernel.get(this, "attrCodeCommit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CodeRepo: Code repository address.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeRepo() {
        return software.amazon.jsii.Kernel.get(this, "attrCodeRepo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CodeRepoAccessToken: The Token used to access the code repository.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeRepoAccessToken() {
        return software.amazon.jsii.Kernel.get(this, "attrCodeRepoAccessToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CodeRepoUserName: The user name of the code repository.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeRepoUserName() {
        return software.amazon.jsii.Kernel.get(this, "attrCodeRepoUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CodeSourcesId: The ID of the created code configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCodeSourcesId() {
        return software.amazon.jsii.Kernel.get(this, "attrCodeSourcesId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the code.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: A detailed description of the code configuration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DisplayName: Code source configuration name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GmtModifyTime: Code configuration modification time.
     * <p>
     * The time format is iso8601.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifyTime() {
        return software.amazon.jsii.Kernel.get(this, "attrGmtModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MountPath: The local Mount Directory of the code.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMountPath() {
        return software.amazon.jsii.Kernel.get(this, "attrMountPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserId: The ID of the creator of the code configuration source.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.CodeSourceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.CodeSourceProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.CodeSource}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.CodeSource> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.pai.CodeSourceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.CodeSourceProps.Builder();
        }

        /**
         * Property accessibility: Visibility of the code configuration, possible values: - PRIVATE: In this workspace, it is only visible to you and the administrator.
         * <p>
         * <ul>
         * <li>PUBLIC: In this workspace, it is visible to everyone.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accessibility Property accessibility: Visibility of the code configuration, possible values: - PRIVATE: In this workspace, it is only visible to you and the administrator. This parameter is required.
         */
        public Builder accessibility(final java.lang.String accessibility) {
            this.props.accessibility(accessibility);
            return this;
        }
        /**
         * Property accessibility: Visibility of the code configuration, possible values: - PRIVATE: In this workspace, it is only visible to you and the administrator.
         * <p>
         * <ul>
         * <li>PUBLIC: In this workspace, it is visible to everyone.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accessibility Property accessibility: Visibility of the code configuration, possible values: - PRIVATE: In this workspace, it is only visible to you and the administrator. This parameter is required.
         */
        public Builder accessibility(final com.aliyun.ros.cdk.core.IResolvable accessibility) {
            this.props.accessibility(accessibility);
            return this;
        }

        /**
         * Property codeRepo: Code repository address.
         * <p>
         * @return {@code this}
         * @param codeRepo Property codeRepo: Code repository address. This parameter is required.
         */
        public Builder codeRepo(final java.lang.String codeRepo) {
            this.props.codeRepo(codeRepo);
            return this;
        }
        /**
         * Property codeRepo: Code repository address.
         * <p>
         * @return {@code this}
         * @param codeRepo Property codeRepo: Code repository address. This parameter is required.
         */
        public Builder codeRepo(final com.aliyun.ros.cdk.core.IResolvable codeRepo) {
            this.props.codeRepo(codeRepo);
            return this;
        }

        /**
         * Property displayName: Code source configuration name.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: Code source configuration name. This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * Property displayName: Code source configuration name.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: Code source configuration name. This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * Property mountPath: The local Mount Directory of the code.
         * <p>
         * @return {@code this}
         * @param mountPath Property mountPath: The local Mount Directory of the code. This parameter is required.
         */
        public Builder mountPath(final java.lang.String mountPath) {
            this.props.mountPath(mountPath);
            return this;
        }
        /**
         * Property mountPath: The local Mount Directory of the code.
         * <p>
         * @return {@code this}
         * @param mountPath Property mountPath: The local Mount Directory of the code. This parameter is required.
         */
        public Builder mountPath(final com.aliyun.ros.cdk.core.IResolvable mountPath) {
            this.props.mountPath(mountPath);
            return this;
        }

        /**
         * Property workspaceId: The ID of the workspace.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The ID of the workspace. This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * Property workspaceId: The ID of the workspace.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The ID of the workspace. This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * Property codeBranch: Code repository branch.
         * <p>
         * @return {@code this}
         * @param codeBranch Property codeBranch: Code repository branch. This parameter is required.
         */
        public Builder codeBranch(final java.lang.String codeBranch) {
            this.props.codeBranch(codeBranch);
            return this;
        }
        /**
         * Property codeBranch: Code repository branch.
         * <p>
         * @return {@code this}
         * @param codeBranch Property codeBranch: Code repository branch. This parameter is required.
         */
        public Builder codeBranch(final com.aliyun.ros.cdk.core.IResolvable codeBranch) {
            this.props.codeBranch(codeBranch);
            return this;
        }

        /**
         * Property codeCommit: The code CommitId.
         * <p>
         * @return {@code this}
         * @param codeCommit Property codeCommit: The code CommitId. This parameter is required.
         */
        public Builder codeCommit(final java.lang.String codeCommit) {
            this.props.codeCommit(codeCommit);
            return this;
        }
        /**
         * Property codeCommit: The code CommitId.
         * <p>
         * @return {@code this}
         * @param codeCommit Property codeCommit: The code CommitId. This parameter is required.
         */
        public Builder codeCommit(final com.aliyun.ros.cdk.core.IResolvable codeCommit) {
            this.props.codeCommit(codeCommit);
            return this;
        }

        /**
         * Property codeRepoAccessToken: The Token used to access the code repository.
         * <p>
         * @return {@code this}
         * @param codeRepoAccessToken Property codeRepoAccessToken: The Token used to access the code repository. This parameter is required.
         */
        public Builder codeRepoAccessToken(final java.lang.String codeRepoAccessToken) {
            this.props.codeRepoAccessToken(codeRepoAccessToken);
            return this;
        }
        /**
         * Property codeRepoAccessToken: The Token used to access the code repository.
         * <p>
         * @return {@code this}
         * @param codeRepoAccessToken Property codeRepoAccessToken: The Token used to access the code repository. This parameter is required.
         */
        public Builder codeRepoAccessToken(final com.aliyun.ros.cdk.core.IResolvable codeRepoAccessToken) {
            this.props.codeRepoAccessToken(codeRepoAccessToken);
            return this;
        }

        /**
         * Property codeRepoUserName: The user name of the code repository.
         * <p>
         * @return {@code this}
         * @param codeRepoUserName Property codeRepoUserName: The user name of the code repository. This parameter is required.
         */
        public Builder codeRepoUserName(final java.lang.String codeRepoUserName) {
            this.props.codeRepoUserName(codeRepoUserName);
            return this;
        }
        /**
         * Property codeRepoUserName: The user name of the code repository.
         * <p>
         * @return {@code this}
         * @param codeRepoUserName Property codeRepoUserName: The user name of the code repository. This parameter is required.
         */
        public Builder codeRepoUserName(final com.aliyun.ros.cdk.core.IResolvable codeRepoUserName) {
            this.props.codeRepoUserName(codeRepoUserName);
            return this;
        }

        /**
         * Property description: A detailed description of the code configuration.
         * <p>
         * @return {@code this}
         * @param description Property description: A detailed description of the code configuration. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: A detailed description of the code configuration.
         * <p>
         * @return {@code this}
         * @param description Property description: A detailed description of the code configuration. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.CodeSource}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.CodeSource build() {
            return new com.aliyun.ros.cdk.pai.CodeSource(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
