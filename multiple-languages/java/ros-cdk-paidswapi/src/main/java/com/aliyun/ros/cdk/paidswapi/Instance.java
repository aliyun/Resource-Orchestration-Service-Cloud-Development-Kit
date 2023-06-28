package com.aliyun.ros.cdk.paidswapi;

/**
 * A ROS resource type:  <code>ALIYUN::PaiDswApi::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:29.653Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paidswapi.$Module.class, fqn = "@alicloud/ros-cdk-paidswapi.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::PaiDswApi::Instance</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paidswapi.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::PaiDswApi::Instance</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.paidswapi.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Accessibility: Whether the workspace is visible to others.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccessibility() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Datasets: A collection of datasets.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDatasets() {
        return software.amazon.jsii.Kernel.get(this, "attrDatasets", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EcsSpec: The ECS specification of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEcsSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrEcsSpec", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EnvironmentVariables: Environment variable.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnvironmentVariables() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentVariables", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ImageUrl: The mirror address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrImageUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The first ID of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceName: The instance name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceUrl: The instance address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute JupyterlabUrl: The jupyterlab address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJupyterlabUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrJupyterlabUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Labels: User-defined labels.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLabels() {
        return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TerminalUrl: The terminal address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTerminalUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrTerminalUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UserVpc: User vpc configuration.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserVpc() {
        return software.amazon.jsii.Kernel.get(this, "attrUserVpc", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute WebIDEUrl: The web IDE address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWebIdeUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrWebIdeUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute WorkspaceId: The Id of the workspace.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.paidswapi.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.paidswapi.Instance> {
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
        private final com.aliyun.ros.cdk.paidswapi.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.paidswapi.InstanceProps.Builder();
        }

        /**
         * Property ecsSpec: The ECS specification of the instance.
         * <p>
         * @return {@code this}
         * @param ecsSpec Property ecsSpec: The ECS specification of the instance. This parameter is required.
         */
        public Builder ecsSpec(final java.lang.String ecsSpec) {
            this.props.ecsSpec(ecsSpec);
            return this;
        }
        /**
         * Property ecsSpec: The ECS specification of the instance.
         * <p>
         * @return {@code this}
         * @param ecsSpec Property ecsSpec: The ECS specification of the instance. This parameter is required.
         */
        public Builder ecsSpec(final com.aliyun.ros.cdk.core.IResolvable ecsSpec) {
            this.props.ecsSpec(ecsSpec);
            return this;
        }

        /**
         * Property imageUrl: The mirror address.
         * <p>
         * @return {@code this}
         * @param imageUrl Property imageUrl: The mirror address. This parameter is required.
         */
        public Builder imageUrl(final java.lang.String imageUrl) {
            this.props.imageUrl(imageUrl);
            return this;
        }
        /**
         * Property imageUrl: The mirror address.
         * <p>
         * @return {@code this}
         * @param imageUrl Property imageUrl: The mirror address. This parameter is required.
         */
        public Builder imageUrl(final com.aliyun.ros.cdk.core.IResolvable imageUrl) {
            this.props.imageUrl(imageUrl);
            return this;
        }

        /**
         * Property instanceName: The instance name.
         * <p>
         * Format requirements:
         * <p>
         * <ul>
         * <li>Can only contain letters, numbers and underscores (_).</li>
         * <li>It cannot exceed 27 characters.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The instance name. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The instance name.
         * <p>
         * Format requirements:
         * <p>
         * <ul>
         * <li>Can only contain letters, numbers and underscores (_).</li>
         * <li>It cannot exceed 27 characters.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The instance name. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property accessibility: Whether the workspace is visible to others.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>PUBLIC</strong>: Visible to all users of the workspace.</li>
         * <li><strong>PRIVATE</strong>: Only visible to yourself and the administrator of the workspace.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accessibility Property accessibility: Whether the workspace is visible to others. This parameter is required.
         */
        public Builder accessibility(final java.lang.String accessibility) {
            this.props.accessibility(accessibility);
            return this;
        }
        /**
         * Property accessibility: Whether the workspace is visible to others.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>PUBLIC</strong>: Visible to all users of the workspace.</li>
         * <li><strong>PRIVATE</strong>: Only visible to yourself and the administrator of the workspace.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param accessibility Property accessibility: Whether the workspace is visible to others. This parameter is required.
         */
        public Builder accessibility(final com.aliyun.ros.cdk.core.IResolvable accessibility) {
            this.props.accessibility(accessibility);
            return this;
        }

        /**
         * Property datasets: A collection of datasets.
         * <p>
         * @return {@code this}
         * @param datasets Property datasets: A collection of datasets. This parameter is required.
         */
        public Builder datasets(final com.aliyun.ros.cdk.core.IResolvable datasets) {
            this.props.datasets(datasets);
            return this;
        }
        /**
         * Property datasets: A collection of datasets.
         * <p>
         * @return {@code this}
         * @param datasets Property datasets: A collection of datasets. This parameter is required.
         */
        public Builder datasets(final java.util.List<? extends java.lang.Object> datasets) {
            this.props.datasets(datasets);
            return this;
        }

        /**
         * Property environmentVariables: Environment variable.
         * <p>
         * @return {@code this}
         * @param environmentVariables Property environmentVariables: Environment variable. This parameter is required.
         */
        public Builder environmentVariables(final com.aliyun.ros.cdk.core.IResolvable environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }
        /**
         * Property environmentVariables: Environment variable.
         * <p>
         * @return {@code this}
         * @param environmentVariables Property environmentVariables: Environment variable. This parameter is required.
         */
        public Builder environmentVariables(final java.util.Map<java.lang.String, ? extends java.lang.Object> environmentVariables) {
            this.props.environmentVariables(environmentVariables);
            return this;
        }

        /**
         * Property labels: User-defined labels.
         * <p>
         * @return {@code this}
         * @param labels Property labels: User-defined labels. This parameter is required.
         */
        public Builder labels(final com.aliyun.ros.cdk.core.IResolvable labels) {
            this.props.labels(labels);
            return this;
        }
        /**
         * Property labels: User-defined labels.
         * <p>
         * @return {@code this}
         * @param labels Property labels: User-defined labels. This parameter is required.
         */
        public Builder labels(final java.util.List<? extends java.lang.Object> labels) {
            this.props.labels(labels);
            return this;
        }

        /**
         * Property saveImage: Whether to close the instance after saving the environment.
         * <p>
         * @return {@code this}
         * @param saveImage Property saveImage: Whether to close the instance after saving the environment. This parameter is required.
         */
        public Builder saveImage(final java.lang.Boolean saveImage) {
            this.props.saveImage(saveImage);
            return this;
        }
        /**
         * Property saveImage: Whether to close the instance after saving the environment.
         * <p>
         * @return {@code this}
         * @param saveImage Property saveImage: Whether to close the instance after saving the environment. This parameter is required.
         */
        public Builder saveImage(final com.aliyun.ros.cdk.core.IResolvable saveImage) {
            this.props.saveImage(saveImage);
            return this;
        }

        /**
         * Property userVpc: User vpc configuration.
         * <p>
         * @return {@code this}
         * @param userVpc Property userVpc: User vpc configuration. This parameter is required.
         */
        public Builder userVpc(final com.aliyun.ros.cdk.core.IResolvable userVpc) {
            this.props.userVpc(userVpc);
            return this;
        }
        /**
         * Property userVpc: User vpc configuration.
         * <p>
         * @return {@code this}
         * @param userVpc Property userVpc: User vpc configuration. This parameter is required.
         */
        public Builder userVpc(final com.aliyun.ros.cdk.paidswapi.RosInstance.UserVpcProperty userVpc) {
            this.props.userVpc(userVpc);
            return this;
        }

        /**
         * Property workspaceId: The Id of the workspace.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The Id of the workspace. This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * Property workspaceId: The Id of the workspace.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: The Id of the workspace. This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.paidswapi.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.paidswapi.Instance build() {
            return new com.aliyun.ros.cdk.paidswapi.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
