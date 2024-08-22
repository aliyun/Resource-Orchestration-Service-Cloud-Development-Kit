package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::Workspace</code>, which is used to create a workspace.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:22.882Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.Workspace")
public class Workspace extends com.aliyun.ros.cdk.core.Resource {

    protected Workspace(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Workspace(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Workspace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Workspace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AdminNames: List of administrator account names.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAdminNames() {
        return software.amazon.jsii.Kernel.get(this, "attrAdminNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Creator: The user ID of the creator.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreator() {
        return software.amazon.jsii.Kernel.get(this, "attrCreator", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Description: Workspace description, no more than 80 characters.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.
     * <p>
     * If not configured, the default value is the workspace name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EnvTypes: Environments contained in the workspace:.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnvTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvTypes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExtraInfos() {
        return software.amazon.jsii.Kernel.get(this, "attrExtraInfos", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Owner: Workspace owner ID, displayed when Verbose is true.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOwner() {
        return software.amazon.jsii.Kernel.get(this, "attrOwner", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Users: List of users.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUsers() {
        return software.amazon.jsii.Kernel.get(this, "attrUsers", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute WorkspaceName: The workspace name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWorkspaceName() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.WorkspaceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.Workspace}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.Workspace> {
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
        private final com.aliyun.ros.cdk.pai.WorkspaceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.WorkspaceProps.Builder();
        }

        /**
         * Property description: Workspace description, no more than 80 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Workspace description, no more than 80 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Workspace description, no more than 80 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Workspace description, no more than 80 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property envTypes: Environments contained in the workspace: - Simple mode only production environment (prod).
         * <p>
         * <ul>
         * <li>Standard mode includes development environment (dev) and production environment (prod).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param envTypes Property envTypes: Environments contained in the workspace: - Simple mode only production environment (prod). This parameter is required.
         */
        public Builder envTypes(final com.aliyun.ros.cdk.core.IResolvable envTypes) {
            this.props.envTypes(envTypes);
            return this;
        }
        /**
         * Property envTypes: Environments contained in the workspace: - Simple mode only production environment (prod).
         * <p>
         * <ul>
         * <li>Standard mode includes development environment (dev) and production environment (prod).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param envTypes Property envTypes: Environments contained in the workspace: - Simple mode only production environment (prod). This parameter is required.
         */
        public Builder envTypes(final java.util.List<? extends java.lang.Object> envTypes) {
            this.props.envTypes(envTypes);
            return this;
        }

        /**
         * Property workspaceName: The workspace name.
         * <p>
         * The format is as follows:
         * <p>
         * <ul>
         * <li>3 to 23 characters in length and can contain letters, underscores, or numbers.</li>
         * <li>Must start with a large or small letter.</li>
         * <li>Unique in the current region.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param workspaceName Property workspaceName: The workspace name. This parameter is required.
         */
        public Builder workspaceName(final java.lang.String workspaceName) {
            this.props.workspaceName(workspaceName);
            return this;
        }
        /**
         * Property workspaceName: The workspace name.
         * <p>
         * The format is as follows:
         * <p>
         * <ul>
         * <li>3 to 23 characters in length and can contain letters, underscores, or numbers.</li>
         * <li>Must start with a large or small letter.</li>
         * <li>Unique in the current region.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param workspaceName Property workspaceName: The workspace name. This parameter is required.
         */
        public Builder workspaceName(final com.aliyun.ros.cdk.core.IResolvable workspaceName) {
            this.props.workspaceName(workspaceName);
            return this;
        }

        /**
         * Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.
         * <p>
         * If not configured, the default value is the workspace name. The format is as follows:
         * <p>
         * <ul>
         * <li>3 to 23 characters in length and can contain letters, underscores, or numbers.</li>
         * <li>Must start with a large or small letter.</li>
         * <li>Unique in the current region.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.
         * <p>
         * If not configured, the default value is the workspace name. The format is as follows:
         * <p>
         * <ul>
         * <li>3 to 23 characters in length and can contain letters, underscores, or numbers.</li>
         * <li>Must start with a large or small letter.</li>
         * <li>Unique in the current region.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.Workspace}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.Workspace build() {
            return new com.aliyun.ros.cdk.pai.Workspace(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
