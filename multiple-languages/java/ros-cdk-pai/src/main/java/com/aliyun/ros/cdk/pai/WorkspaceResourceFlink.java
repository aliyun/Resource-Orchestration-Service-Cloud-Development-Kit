package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::WorkspaceResourceFlink</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:56.541Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.WorkspaceResourceFlink")
public class WorkspaceResourceFlink extends com.aliyun.ros.cdk.core.Resource {

    protected WorkspaceResourceFlink(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WorkspaceResourceFlink(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public WorkspaceResourceFlink(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceResourceFlinkProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public WorkspaceResourceFlink(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceResourceFlinkProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GroupName: Resource group name.
     * <p>
     * If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IsDefault: Indicates whether it is the default resource.
     * <p>
     * Currently, this parameter only supports the input of true and does not support false.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIsDefault() {
        return software.amazon.jsii.Kernel.get(this, "attrIsDefault", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Resources: Resource List.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResources() {
        return software.amazon.jsii.Kernel.get(this, "attrResources", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceResourceFlinkProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.WorkspaceResourceFlinkProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.WorkspaceResourceFlinkProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.WorkspaceResourceFlink}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.WorkspaceResourceFlink> {
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
        private final com.aliyun.ros.cdk.pai.WorkspaceResourceFlinkProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.WorkspaceResourceFlinkProps.Builder();
        }

        /**
         * Property groupName: Resource group name.
         * <p>
         * If you want to obtain a resource group name, see [ListResources].
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
         * If you want to obtain a resource group name, see [ListResources].
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: Resource group name. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * Property resources: Resource List.
         * <p>
         * @return {@code this}
         * @param resources Property resources: Resource List. This parameter is required.
         */
        public Builder resources(final com.aliyun.ros.cdk.core.IResolvable resources) {
            this.props.resources(resources);
            return this;
        }
        /**
         * Property resources: Resource List.
         * <p>
         * @return {@code this}
         * @param resources Property resources: Resource List. This parameter is required.
         */
        public Builder resources(final java.util.List<? extends java.lang.Object> resources) {
            this.props.resources(resources);
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
         * Property isDefault: Indicates whether it is the default resource.
         * <p>
         * Currently, this parameter only supports the input of true and does not support false.
         * <p>
         * @return {@code this}
         * @param isDefault Property isDefault: Indicates whether it is the default resource. This parameter is required.
         */
        public Builder isDefault(final java.lang.Boolean isDefault) {
            this.props.isDefault(isDefault);
            return this;
        }
        /**
         * Property isDefault: Indicates whether it is the default resource.
         * <p>
         * Currently, this parameter only supports the input of true and does not support false.
         * <p>
         * @return {@code this}
         * @param isDefault Property isDefault: Indicates whether it is the default resource. This parameter is required.
         */
        public Builder isDefault(final com.aliyun.ros.cdk.core.IResolvable isDefault) {
            this.props.isDefault(isDefault);
            return this;
        }

        /**
         * Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.
         * <p>
         * @return {@code this}
         * @param option Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace. This parameter is required.
         */
        public Builder option(final java.lang.String option) {
            this.props.option(option);
            return this;
        }
        /**
         * Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace.
         * <p>
         * @return {@code this}
         * @param option Property option: Create behavior that supports the following values: - CreateAndAttach: Create resource and bind to workspace - Attach: bind resource to workspace. This parameter is required.
         */
        public Builder option(final com.aliyun.ros.cdk.core.IResolvable option) {
            this.props.option(option);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.WorkspaceResourceFlink}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.WorkspaceResourceFlink build() {
            return new com.aliyun.ros.cdk.pai.WorkspaceResourceFlink(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
