package com.aliyun.ros.cdk.adblake;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ADBLake::ResourceGroup</code>, which is used to create a resource group for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.177Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adblake.$Module.class, fqn = "@alicloud/ros-cdk-adblake.ResourceGroup")
public class ResourceGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.adblake.IResourceGroup {

    protected ResourceGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ResourceGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ResourceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adblake.ResourceGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ResourceGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adblake.ResourceGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GroupName: The name of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GroupType: The type of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupType() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GroupUsers: The list of users in the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupUsers() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupUsers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adblake.ResourceGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.adblake.ResourceGroupProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.adblake.ResourceGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.adblake.ResourceGroup> {
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
        private final com.aliyun.ros.cdk.adblake.ResourceGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.adblake.ResourceGroupProps.Builder();
        }

        /**
         * Property dbClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property engine: Database engine, value: AnalyticDB (default): AnalyticDB for mysql engine.
         * <p>
         * Sparkwarehouse: Sparkwarehous engine.
         * <p>
         * @return {@code this}
         * @param engine Property engine: Database engine, value: AnalyticDB (default): AnalyticDB for mysql engine. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * Property engine: Database engine, value: AnalyticDB (default): AnalyticDB for mysql engine.
         * <p>
         * Sparkwarehouse: Sparkwarehous engine.
         * <p>
         * @return {@code this}
         * @param engine Property engine: Database engine, value: AnalyticDB (default): AnalyticDB for mysql engine. This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * Property groupName: The name of the resource group.
         * <p>
         * The name can be up to 255 characters in length.
         * The name must start with a letter or digit.
         * The name can contain letters, digits, hyphens (-), and underscores (_).
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The name of the resource group. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * Property groupName: The name of the resource group.
         * <p>
         * The name can be up to 255 characters in length.
         * The name must start with a letter or digit.
         * The name can contain letters, digits, hyphens (-), and underscores (_).
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The name of the resource group. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * Property groupType: The type of the resource group.
         * <p>
         * Valid values:
         * Interactive
         * Job
         * Note For more information about resource groups, see Resource group overview.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: The type of the resource group. This parameter is required.
         */
        public Builder groupType(final java.lang.String groupType) {
            this.props.groupType(groupType);
            return this;
        }
        /**
         * Property groupType: The type of the resource group.
         * <p>
         * Valid values:
         * Interactive
         * Job
         * Note For more information about resource groups, see Resource group overview.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: The type of the resource group. This parameter is required.
         */
        public Builder groupType(final com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.props.groupType(groupType);
            return this;
        }

        /**
         * Property autoStopInterval: Automatically stop time, the unit is minutes (m).
         * <p>
         * @return {@code this}
         * @param autoStopInterval Property autoStopInterval: Automatically stop time, the unit is minutes (m). This parameter is required.
         */
        public Builder autoStopInterval(final java.lang.String autoStopInterval) {
            this.props.autoStopInterval(autoStopInterval);
            return this;
        }
        /**
         * Property autoStopInterval: Automatically stop time, the unit is minutes (m).
         * <p>
         * @return {@code this}
         * @param autoStopInterval Property autoStopInterval: Automatically stop time, the unit is minutes (m). This parameter is required.
         */
        public Builder autoStopInterval(final com.aliyun.ros.cdk.core.IResolvable autoStopInterval) {
            this.props.autoStopInterval(autoStopInterval);
            return this;
        }

        /**
         * Property clusterMode: The mode of cluster.
         * <p>
         * Default: AutoScale.
         * <p>
         * @return {@code this}
         * @param clusterMode Property clusterMode: The mode of cluster. This parameter is required.
         */
        public Builder clusterMode(final java.lang.String clusterMode) {
            this.props.clusterMode(clusterMode);
            return this;
        }
        /**
         * Property clusterMode: The mode of cluster.
         * <p>
         * Default: AutoScale.
         * <p>
         * @return {@code this}
         * @param clusterMode Property clusterMode: The mode of cluster. This parameter is required.
         */
        public Builder clusterMode(final com.aliyun.ros.cdk.core.IResolvable clusterMode) {
            this.props.clusterMode(clusterMode);
            return this;
        }

        /**
         * Property clusterSizeResource: A reserved parameter.
         * <p>
         * @return {@code this}
         * @param clusterSizeResource Property clusterSizeResource: A reserved parameter. This parameter is required.
         */
        public Builder clusterSizeResource(final java.lang.String clusterSizeResource) {
            this.props.clusterSizeResource(clusterSizeResource);
            return this;
        }
        /**
         * Property clusterSizeResource: A reserved parameter.
         * <p>
         * @return {@code this}
         * @param clusterSizeResource Property clusterSizeResource: A reserved parameter. This parameter is required.
         */
        public Builder clusterSizeResource(final com.aliyun.ros.cdk.core.IResolvable clusterSizeResource) {
            this.props.clusterSizeResource(clusterSizeResource);
            return this;
        }

        /**
         * Property enableSpot: Specifies whether to enable the spot instance feature for the resource group.
         * <p>
         * After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
         * True
         * False
         * <p>
         * @return {@code this}
         * @param enableSpot Property enableSpot: Specifies whether to enable the spot instance feature for the resource group. This parameter is required.
         */
        public Builder enableSpot(final java.lang.Boolean enableSpot) {
            this.props.enableSpot(enableSpot);
            return this;
        }
        /**
         * Property enableSpot: Specifies whether to enable the spot instance feature for the resource group.
         * <p>
         * After you enable the spot instance feature, you are charged for resources at a lower unit price but the resources are probably released. You can enable the spot instance feature only for job resource groups. Valid values:
         * True
         * False
         * <p>
         * @return {@code this}
         * @param enableSpot Property enableSpot: Specifies whether to enable the spot instance feature for the resource group. This parameter is required.
         */
        public Builder enableSpot(final com.aliyun.ros.cdk.core.IResolvable enableSpot) {
            this.props.enableSpot(enableSpot);
            return this;
        }

        /**
         * Property engineParams: Engine configuration.
         * <p>
         * @return {@code this}
         * @param engineParams Property engineParams: Engine configuration. This parameter is required.
         */
        public Builder engineParams(final com.aliyun.ros.cdk.core.IResolvable engineParams) {
            this.props.engineParams(engineParams);
            return this;
        }
        /**
         * Property engineParams: Engine configuration.
         * <p>
         * @return {@code this}
         * @param engineParams Property engineParams: Engine configuration. This parameter is required.
         */
        public Builder engineParams(final java.util.Map<java.lang.String, ? extends java.lang.Object> engineParams) {
            this.props.engineParams(engineParams);
            return this;
        }

        /**
         * Property maxClusterCount: A reserved parameter.
         * <p>
         * @return {@code this}
         * @param maxClusterCount Property maxClusterCount: A reserved parameter. This parameter is required.
         */
        public Builder maxClusterCount(final java.lang.Number maxClusterCount) {
            this.props.maxClusterCount(maxClusterCount);
            return this;
        }
        /**
         * Property maxClusterCount: A reserved parameter.
         * <p>
         * @return {@code this}
         * @param maxClusterCount Property maxClusterCount: A reserved parameter. This parameter is required.
         */
        public Builder maxClusterCount(final com.aliyun.ros.cdk.core.IResolvable maxClusterCount) {
            this.props.maxClusterCount(maxClusterCount);
            return this;
        }

        /**
         * Property maxComputeResource: The maximum reserved computing resources.
         * <p>
         * If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16ACU.
         * If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8ACU.
         * <p>
         * @return {@code this}
         * @param maxComputeResource Property maxComputeResource: The maximum reserved computing resources. This parameter is required.
         */
        public Builder maxComputeResource(final java.lang.String maxComputeResource) {
            this.props.maxComputeResource(maxComputeResource);
            return this;
        }
        /**
         * Property maxComputeResource: The maximum reserved computing resources.
         * <p>
         * If GroupType is set to Interactive, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 16ACU.
         * If GroupType is set to Job, the maximum amount of reserved computing resources refers to the amount of resources that are not allocated in the cluster. Set this parameter to a value in increments of 8ACU.
         * <p>
         * @return {@code this}
         * @param maxComputeResource Property maxComputeResource: The maximum reserved computing resources. This parameter is required.
         */
        public Builder maxComputeResource(final com.aliyun.ros.cdk.core.IResolvable maxComputeResource) {
            this.props.maxComputeResource(maxComputeResource);
            return this;
        }

        /**
         * Property minClusterCount: A reserved parameter.
         * <p>
         * @return {@code this}
         * @param minClusterCount Property minClusterCount: A reserved parameter. This parameter is required.
         */
        public Builder minClusterCount(final java.lang.Number minClusterCount) {
            this.props.minClusterCount(minClusterCount);
            return this;
        }
        /**
         * Property minClusterCount: A reserved parameter.
         * <p>
         * @return {@code this}
         * @param minClusterCount Property minClusterCount: A reserved parameter. This parameter is required.
         */
        public Builder minClusterCount(final com.aliyun.ros.cdk.core.IResolvable minClusterCount) {
            this.props.minClusterCount(minClusterCount);
            return this;
        }

        /**
         * Property minComputeResource: The minimum reserved computing resources.
         * <p>
         * When GroupType is set to Interactive, set this parameter to 16ACU.
         * When GroupType is set to Job, set this parameter to 0ACU.
         * <p>
         * @return {@code this}
         * @param minComputeResource Property minComputeResource: The minimum reserved computing resources. This parameter is required.
         */
        public Builder minComputeResource(final java.lang.String minComputeResource) {
            this.props.minComputeResource(minComputeResource);
            return this;
        }
        /**
         * Property minComputeResource: The minimum reserved computing resources.
         * <p>
         * When GroupType is set to Interactive, set this parameter to 16ACU.
         * When GroupType is set to Job, set this parameter to 0ACU.
         * <p>
         * @return {@code this}
         * @param minComputeResource Property minComputeResource: The minimum reserved computing resources. This parameter is required.
         */
        public Builder minComputeResource(final com.aliyun.ros.cdk.core.IResolvable minComputeResource) {
            this.props.minComputeResource(minComputeResource);
            return this;
        }

        /**
         * Property rules: The job resubmission rules.
         * <p>
         * @return {@code this}
         * @param rules Property rules: The job resubmission rules. This parameter is required.
         */
        public Builder rules(final com.aliyun.ros.cdk.core.IResolvable rules) {
            this.props.rules(rules);
            return this;
        }
        /**
         * Property rules: The job resubmission rules.
         * <p>
         * @return {@code this}
         * @param rules Property rules: The job resubmission rules. This parameter is required.
         */
        public Builder rules(final java.util.List<? extends java.lang.Object> rules) {
            this.props.rules(rules);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.adblake.ResourceGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.adblake.ResourceGroup build() {
            return new com.aliyun.ros.cdk.adblake.ResourceGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
