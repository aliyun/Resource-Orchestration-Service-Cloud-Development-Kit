package com.aliyun.ros.cdk.pai.datasource;

/**
 * A ROS template type:  <code>DATASOURCE::PAI::Workspaces</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:38.700Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.datasource.RosWorkspaces")
public class RosWorkspaces extends com.aliyun.ros.cdk.core.RosResource {

    protected RosWorkspaces(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosWorkspaces(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.pai.datasource.RosWorkspaces.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>DATASOURCE::PAI::Workspaces</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosWorkspaces(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.datasource.RosWorkspacesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWorkspaceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWorkspaces() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaces", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkspaceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workspaceId", value);
    }

    /**
     */
    public void setWorkspaceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workspaceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkspaceName() {
        return software.amazon.jsii.Kernel.get(this, "workspaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkspaceName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workspaceName", value);
    }

    /**
     */
    public void setWorkspaceName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workspaceName", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.datasource.RosWorkspaces}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.datasource.RosWorkspaces> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.pai.datasource.RosWorkspacesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.datasource.RosWorkspacesProps.Builder();
        }

        /**
         * @return {@code this}
         * @param workspaceId This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param workspaceId This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param workspaceName This parameter is required.
         */
        public Builder workspaceName(final java.lang.String workspaceName) {
            this.props.workspaceName(workspaceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param workspaceName This parameter is required.
         */
        public Builder workspaceName(final com.aliyun.ros.cdk.core.IResolvable workspaceName) {
            this.props.workspaceName(workspaceName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.datasource.RosWorkspaces}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.datasource.RosWorkspaces build() {
            return new com.aliyun.ros.cdk.pai.datasource.RosWorkspaces(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
