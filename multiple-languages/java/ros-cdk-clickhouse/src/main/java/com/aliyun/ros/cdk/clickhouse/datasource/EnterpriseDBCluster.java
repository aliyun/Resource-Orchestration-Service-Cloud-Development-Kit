package com.aliyun.ros.cdk.clickhouse.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ClickHouse::EnterpriseDBCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.598Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.datasource.EnterpriseDBCluster")
public class EnterpriseDBCluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.clickhouse.datasource.IEnterpriseDBCluster {

    protected EnterpriseDBCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EnterpriseDBCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public EnterpriseDBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public EnterpriseDBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Category: Type, value description: enterprise: Enterprise Edition.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ChargeType: The billing method.
     * <p>
     * Enterprise Edition clusters use the pay-as-you-go billing method.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ComputingGroupIds: The list of computing group IDs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrComputingGroupIds() {
        return software.amazon.jsii.Kernel.get(this, "attrComputingGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstanceId: The cluster ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The cluster description.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DisabledPorts: The specified database port is disabled.
     * <p>
     * Multiple ports separated by commas (,) are supported.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisabledPorts() {
        return software.amazon.jsii.Kernel.get(this, "attrDisabledPorts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Endpoints: List of Endpoint details.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpoints() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Engine: The engine type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
        return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EngineMinorVersion: The minor version number of the cluster engine.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineMinorVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrEngineMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EngineVersion: The engine version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceNetworkType: The network type of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MaintainEndTime: The end time of the maintenance window.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintainEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MaintainStartTime: The maintainable time start time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintainStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MultiZones: The information about the zones.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMultiZones() {
        return software.amazon.jsii.Kernel.get(this, "attrMultiZones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NodeCount: The number of nodes.
     * <p>
     * The value range is 2-16. Required when you use NodeScaleMin and NodeScaleMax to configure an elastic interval.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeCount() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Nodes: The Node information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodes() {
        return software.amazon.jsii.Kernel.get(this, "attrNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NodeScaleMax: The maximum value of serverless node auto scaling.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeScaleMax() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeScaleMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NodeScaleMin: Minimum number of Serverless nodes for auto-scaling.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodeScaleMin() {
        return software.amazon.jsii.Kernel.get(this, "attrNodeScaleMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ObjectStoreSize: The size of the object storage space.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrObjectStoreSize() {
        return software.amazon.jsii.Kernel.get(this, "attrObjectStoreSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScaleMax: The maximum capacity for elastic scaling.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleMax() {
        return software.amazon.jsii.Kernel.get(this, "attrScaleMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScaleMin: The minimum capacity for elastic scaling.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScaleMin() {
        return software.amazon.jsii.Kernel.get(this, "attrScaleMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StorageQuota: Storage Pre-purchased Capacity (GB).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageQuota() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageQuota", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StorageSize: The size of the storage space.
     * <p>
     * Unit: GB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageSize() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StorageType: The storage type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The details of the tags.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: The VPC ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VswitchId: The VSwitch ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: The zone ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBClusterProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBCluster> {
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
        private final com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBClusterProps.Builder();
        }

        /**
         * Property dbInstanceId: The cluster ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The cluster ID. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The cluster ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The cluster ID. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBCluster build() {
            return new com.aliyun.ros.cdk.clickhouse.datasource.EnterpriseDBCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
