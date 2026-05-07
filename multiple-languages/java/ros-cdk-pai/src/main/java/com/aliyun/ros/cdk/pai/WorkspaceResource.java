package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::WorkspaceResource</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:52.472Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.WorkspaceResource")
public class WorkspaceResource extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pai.IWorkspaceResource {

    protected WorkspaceResource(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WorkspaceResource(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public WorkspaceResource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceResourceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public WorkspaceResource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceResourceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: Create UTC time in ISO8601 format.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnvType: Environment type, possible values:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnvType() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GroupName: Resource group name.
     * <p>
     * If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IsDefault: Whether it is the default resource, each resource type has a default resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsDefault() {
        return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceId: The resource ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceType: Resource type, possible values:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Spec: Resource configuration, required for public resource groups of DLC, enter the content.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkspaceId: The ID of the workspace to which the workspace belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkspaceResourceName: The resource name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceResourceName() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceResourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceResourceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.WorkspaceResourceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.WorkspaceResource}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.WorkspaceResource> {
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
        private final com.aliyun.ros.cdk.pai.WorkspaceResourceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.WorkspaceResourceProps.Builder();
        }

        /**
         * Property envType: Environment type, possible values: - dev: Development environment.
         * <p>
         * <ul>
         * <li>prod: Production environment.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param envType Property envType: Environment type, possible values: - dev: Development environment. This parameter is required.
         */
        public Builder envType(final java.lang.String envType) {
            this.props.envType(envType);
            return this;
        }
        /**
         * Property envType: Environment type, possible values: - dev: Development environment.
         * <p>
         * <ul>
         * <li>prod: Production environment.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param envType Property envType: Environment type, possible values: - dev: Development environment. This parameter is required.
         */
        public Builder envType(final com.aliyun.ros.cdk.core.IResolvable envType) {
            this.props.envType(envType);
            return this;
        }

        /**
         * Property resourceType: The resource types.
         * <p>
         * Valid values:
         * MaxCompute
         * ECS
         * Lingjun
         * ACS
         * FLINK
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The resource types. This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }
        /**
         * Property resourceType: The resource types.
         * <p>
         * Valid values:
         * MaxCompute
         * ECS
         * Lingjun
         * ACS
         * FLINK
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The resource types. This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }

        /**
         * Property workspaceId: The ID of the workspace to which the workspace belongs.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The ID of the workspace to which the workspace belongs. This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * Property workspaceId: The ID of the workspace to which the workspace belongs.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The ID of the workspace to which the workspace belongs. This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * Property workspaceResourceName: The resource name.
         * <p>
         * @return {@code this}
         * @param workspaceResourceName Property workspaceResourceName: The resource name. This parameter is required.
         */
        public Builder workspaceResourceName(final java.lang.String workspaceResourceName) {
            this.props.workspaceResourceName(workspaceResourceName);
            return this;
        }
        /**
         * Property workspaceResourceName: The resource name.
         * <p>
         * @return {@code this}
         * @param workspaceResourceName Property workspaceResourceName: The resource name. This parameter is required.
         */
        public Builder workspaceResourceName(final com.aliyun.ros.cdk.core.IResolvable workspaceResourceName) {
            this.props.workspaceResourceName(workspaceResourceName);
            return this;
        }

        /**
         * Property groupName: Resource group name.
         * <p>
         * If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Resource group name. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * Property groupName: Resource group name.
         * <p>
         * If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Resource group name. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * Property isDefault: Whether it is the default resource, each resource type has a default resource.
         * <p>
         * Possible values:
         * <p>
         * <ul>
         * <li>true: is the default resource.</li>
         * <li>false: Not the default resource.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param isDefault Property isDefault: Whether it is the default resource, each resource type has a default resource. This parameter is required.
         */
        public Builder isDefault(final java.lang.Boolean isDefault) {
            this.props.isDefault(isDefault);
            return this;
        }
        /**
         * Property isDefault: Whether it is the default resource, each resource type has a default resource.
         * <p>
         * Possible values:
         * <p>
         * <ul>
         * <li>true: is the default resource.</li>
         * <li>false: Not the default resource.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param isDefault Property isDefault: Whether it is the default resource, each resource type has a default resource. This parameter is required.
         */
        public Builder isDefault(final com.aliyun.ros.cdk.core.IResolvable isDefault) {
            this.props.isDefault(isDefault);
            return this;
        }

        /**
         * Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.
         * <p>
         * @return {@code this}
         * @param spec Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}. This parameter is required.
         */
        public Builder spec(final com.aliyun.ros.cdk.core.IResolvable spec) {
            this.props.spec(spec);
            return this;
        }
        /**
         * Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.
         * <p>
         * @return {@code this}
         * @param spec Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}. This parameter is required.
         */
        public Builder spec(final java.util.Map<java.lang.String, ? extends java.lang.Object> spec) {
            this.props.spec(spec);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.WorkspaceResource}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.WorkspaceResource build() {
            return new com.aliyun.ros.cdk.pai.WorkspaceResource(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
