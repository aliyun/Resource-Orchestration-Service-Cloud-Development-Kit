package com.aliyun.ros.cdk.dataworks;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DataWorks::Project</code>, which is used to create a DataWorks workspace.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:13.795Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.Project")
public class Project extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dataworks.IProject {

    protected Project(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Project(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Project(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.ProjectProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Project(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.ProjectProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute EnvTypes: The environment of the workspace.
     * <p>
     * Valid values: PROD and DEV.
     * The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
     * The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvTypes() {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault() {
        return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProjectId: The ID of the workspace.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectId() {
        return software.amazon.jsii.Kernel.get(this, "attrProjectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProjectIdentifier: The name of the workspace.
     * <p>
     * The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProjectIdentifier() {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtectedMode() {
        return software.amazon.jsii.Kernel.get(this, "attrProtectedMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResidentArea: The type of the workspace.
     * <p>
     * Valid values: private and swap.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResidentArea() {
        return software.amazon.jsii.Kernel.get(this, "attrResidentArea", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchedulerMaxRetryTimes() {
        return software.amazon.jsii.Kernel.get(this, "attrSchedulerMaxRetryTimes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs.
     * <p>
     * Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSchedulerRetryInterval() {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTablePrivacyMode() {
        return software.amazon.jsii.Kernel.get(this, "attrTablePrivacyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.ProjectProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dataworks.ProjectProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dataworks.Project}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dataworks.Project> {
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
        private final com.aliyun.ros.cdk.dataworks.ProjectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dataworks.ProjectProps.Builder();
        }

        /**
         * Property projectIdentifier: The name of the workspace.
         * <p>
         * The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
         * <p>
         * @return {@code this}
         * @param projectIdentifier Property projectIdentifier: The name of the workspace. This parameter is required.
         */
        public Builder projectIdentifier(final java.lang.String projectIdentifier) {
            this.props.projectIdentifier(projectIdentifier);
            return this;
        }
        /**
         * Property projectIdentifier: The name of the workspace.
         * <p>
         * The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
         * <p>
         * @return {@code this}
         * @param projectIdentifier Property projectIdentifier: The name of the workspace. This parameter is required.
         */
        public Builder projectIdentifier(final com.aliyun.ros.cdk.core.IResolvable projectIdentifier) {
            this.props.projectIdentifier(projectIdentifier);
            return this;
        }

        /**
         * Property disableDevelopment: Specifies whether to disable the Development role.
         * <p>
         * Valid values:
         * false: enables the Development role.
         * true: disables the Development role.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param disableDevelopment Property disableDevelopment: Specifies whether to disable the Development role. This parameter is required.
         */
        public Builder disableDevelopment(final java.lang.Boolean disableDevelopment) {
            this.props.disableDevelopment(disableDevelopment);
            return this;
        }
        /**
         * Property disableDevelopment: Specifies whether to disable the Development role.
         * <p>
         * Valid values:
         * false: enables the Development role.
         * true: disables the Development role.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param disableDevelopment Property disableDevelopment: Specifies whether to disable the Development role. This parameter is required.
         */
        public Builder disableDevelopment(final com.aliyun.ros.cdk.core.IResolvable disableDevelopment) {
            this.props.disableDevelopment(disableDevelopment);
            return this;
        }

        /**
         * Property isAllowDownload: Specifies whether query result download from DataStudio is allowed.
         * <p>
         * Valid values:
         * true: allowed
         * false: not allowed
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param isAllowDownload Property isAllowDownload: Specifies whether query result download from DataStudio is allowed. This parameter is required.
         */
        public Builder isAllowDownload(final java.lang.Boolean isAllowDownload) {
            this.props.isAllowDownload(isAllowDownload);
            return this;
        }
        /**
         * Property isAllowDownload: Specifies whether query result download from DataStudio is allowed.
         * <p>
         * Valid values:
         * true: allowed
         * false: not allowed
         * Default value: true.
         * <p>
         * @return {@code this}
         * @param isAllowDownload Property isAllowDownload: Specifies whether query result download from DataStudio is allowed. This parameter is required.
         */
        public Builder isAllowDownload(final com.aliyun.ros.cdk.core.IResolvable isAllowDownload) {
            this.props.isAllowDownload(isAllowDownload);
            return this;
        }

        /**
         * Property projectDescription: The description of the workspace.
         * <p>
         * If not provided, it is the same as ProjectIdentifier.
         * <p>
         * @return {@code this}
         * @param projectDescription Property projectDescription: The description of the workspace. This parameter is required.
         */
        public Builder projectDescription(final java.lang.String projectDescription) {
            this.props.projectDescription(projectDescription);
            return this;
        }
        /**
         * Property projectDescription: The description of the workspace.
         * <p>
         * If not provided, it is the same as ProjectIdentifier.
         * <p>
         * @return {@code this}
         * @param projectDescription Property projectDescription: The description of the workspace. This parameter is required.
         */
        public Builder projectDescription(final com.aliyun.ros.cdk.core.IResolvable projectDescription) {
            this.props.projectDescription(projectDescription);
            return this;
        }

        /**
         * Property projectMode: The mode of the workspace.
         * <p>
         * For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
         * 2: basic mode
         * 3: standard mode
         * Default value: 2.
         * <p>
         * @return {@code this}
         * @param projectMode Property projectMode: The mode of the workspace. This parameter is required.
         */
        public Builder projectMode(final java.lang.Number projectMode) {
            this.props.projectMode(projectMode);
            return this;
        }
        /**
         * Property projectMode: The mode of the workspace.
         * <p>
         * For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
         * 2: basic mode
         * 3: standard mode
         * Default value: 2.
         * <p>
         * @return {@code this}
         * @param projectMode Property projectMode: The mode of the workspace. This parameter is required.
         */
        public Builder projectMode(final com.aliyun.ros.cdk.core.IResolvable projectMode) {
            this.props.projectMode(projectMode);
            return this;
        }

        /**
         * Property projectName: The display name of the workspace.
         * <p>
         * If not provided, it is the same as ProjectIdentifier.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The display name of the workspace. This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * Property projectName: The display name of the workspace.
         * <p>
         * If not provided, it is the same as ProjectIdentifier.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: The display name of the workspace. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags to attach to workspace.
         * <p>
         * Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to workspace. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.dataworks.RosProject.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dataworks.Project}.
         */
        @Override
        public com.aliyun.ros.cdk.dataworks.Project build() {
            return new com.aliyun.ros.cdk.dataworks.Project(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
