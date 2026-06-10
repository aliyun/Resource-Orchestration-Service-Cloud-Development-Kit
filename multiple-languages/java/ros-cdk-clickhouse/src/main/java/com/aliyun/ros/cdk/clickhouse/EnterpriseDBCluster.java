package com.aliyun.ros.cdk.clickhouse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ClickHouse::EnterpriseDBCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:46:45.017Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.EnterpriseDBCluster")
public class EnterpriseDBCluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.clickhouse.IEnterpriseDBCluster {

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
    public EnterpriseDBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public EnterpriseDBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DBInstanceId: The ID of the database instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivateConnectionString: The private connection string.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicConnectionString: The public connection string.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.clickhouse.EnterpriseDBCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.clickhouse.EnterpriseDBCluster> {
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
        private final com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.clickhouse.EnterpriseDBClusterProps.Builder();
        }

        /**
         * Property engine: The engine type.
         * <p>
         * @return {@code this}
         * @param engine Property engine: The engine type. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * Property engine: The engine type.
         * <p>
         * @return {@code this}
         * @param engine Property engine: The engine type. This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * Property nodeCount: The number of nodes.
         * <p>
         * @return {@code this}
         * @param nodeCount Property nodeCount: The number of nodes. This parameter is required.
         */
        public Builder nodeCount(final java.lang.Number nodeCount) {
            this.props.nodeCount(nodeCount);
            return this;
        }
        /**
         * Property nodeCount: The number of nodes.
         * <p>
         * @return {@code this}
         * @param nodeCount Property nodeCount: The number of nodes. This parameter is required.
         */
        public Builder nodeCount(final com.aliyun.ros.cdk.core.IResolvable nodeCount) {
            this.props.nodeCount(nodeCount);
            return this;
        }

        /**
         * Property nodeScaleMax: The maximum number of nodes for scaling.
         * <p>
         * @return {@code this}
         * @param nodeScaleMax Property nodeScaleMax: The maximum number of nodes for scaling. This parameter is required.
         */
        public Builder nodeScaleMax(final java.lang.Number nodeScaleMax) {
            this.props.nodeScaleMax(nodeScaleMax);
            return this;
        }
        /**
         * Property nodeScaleMax: The maximum number of nodes for scaling.
         * <p>
         * @return {@code this}
         * @param nodeScaleMax Property nodeScaleMax: The maximum number of nodes for scaling. This parameter is required.
         */
        public Builder nodeScaleMax(final com.aliyun.ros.cdk.core.IResolvable nodeScaleMax) {
            this.props.nodeScaleMax(nodeScaleMax);
            return this;
        }

        /**
         * Property nodeScaleMin: The minimum number of nodes for scaling.
         * <p>
         * @return {@code this}
         * @param nodeScaleMin Property nodeScaleMin: The minimum number of nodes for scaling. This parameter is required.
         */
        public Builder nodeScaleMin(final java.lang.Number nodeScaleMin) {
            this.props.nodeScaleMin(nodeScaleMin);
            return this;
        }
        /**
         * Property nodeScaleMin: The minimum number of nodes for scaling.
         * <p>
         * @return {@code this}
         * @param nodeScaleMin Property nodeScaleMin: The minimum number of nodes for scaling. This parameter is required.
         */
        public Builder nodeScaleMin(final com.aliyun.ros.cdk.core.IResolvable nodeScaleMin) {
            this.props.nodeScaleMin(nodeScaleMin);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property backupSetId: The ID of the backup set.
         * <p>
         * @return {@code this}
         * @param backupSetId Property backupSetId: The ID of the backup set. This parameter is required.
         */
        public Builder backupSetId(final java.lang.String backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }
        /**
         * Property backupSetId: The ID of the backup set.
         * <p>
         * @return {@code this}
         * @param backupSetId Property backupSetId: The ID of the backup set. This parameter is required.
         */
        public Builder backupSetId(final com.aliyun.ros.cdk.core.IResolvable backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }

        /**
         * Property dbInstanceDescription: The description of the database instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the database instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final java.lang.String dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }
        /**
         * Property dbInstanceDescription: The description of the database instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the database instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }

        /**
         * Property dbTimeZone: The time zone of the database.
         * <p>
         * @return {@code this}
         * @param dbTimeZone Property dbTimeZone: The time zone of the database. This parameter is required.
         */
        public Builder dbTimeZone(final java.lang.String dbTimeZone) {
            this.props.dbTimeZone(dbTimeZone);
            return this;
        }
        /**
         * Property dbTimeZone: The time zone of the database.
         * <p>
         * @return {@code this}
         * @param dbTimeZone Property dbTimeZone: The time zone of the database. This parameter is required.
         */
        public Builder dbTimeZone(final com.aliyun.ros.cdk.core.IResolvable dbTimeZone) {
            this.props.dbTimeZone(dbTimeZone);
            return this;
        }

        /**
         * Property deploySchema: The deployment schema.
         * <p>
         * @return {@code this}
         * @param deploySchema Property deploySchema: The deployment schema. This parameter is required.
         */
        public Builder deploySchema(final java.lang.String deploySchema) {
            this.props.deploySchema(deploySchema);
            return this;
        }
        /**
         * Property deploySchema: The deployment schema.
         * <p>
         * @return {@code this}
         * @param deploySchema Property deploySchema: The deployment schema. This parameter is required.
         */
        public Builder deploySchema(final com.aliyun.ros.cdk.core.IResolvable deploySchema) {
            this.props.deploySchema(deploySchema);
            return this;
        }

        /**
         * Property multiZone: Multi-zone configuration.
         * <p>
         * @return {@code this}
         * @param multiZone Property multiZone: Multi-zone configuration. This parameter is required.
         */
        public Builder multiZone(final com.aliyun.ros.cdk.core.IResolvable multiZone) {
            this.props.multiZone(multiZone);
            return this;
        }
        /**
         * Property multiZone: Multi-zone configuration.
         * <p>
         * @return {@code this}
         * @param multiZone Property multiZone: Multi-zone configuration. This parameter is required.
         */
        public Builder multiZone(final java.util.List<? extends java.lang.Object> multiZone) {
            this.props.multiZone(multiZone);
            return this;
        }

        /**
         * Property publicConnectionSetting: The public connection setting.
         * <p>
         * @return {@code this}
         * @param publicConnectionSetting Property publicConnectionSetting: The public connection setting. This parameter is required.
         */
        public Builder publicConnectionSetting(final com.aliyun.ros.cdk.core.IResolvable publicConnectionSetting) {
            this.props.publicConnectionSetting(publicConnectionSetting);
            return this;
        }
        /**
         * Property publicConnectionSetting: The public connection setting.
         * <p>
         * @return {@code this}
         * @param publicConnectionSetting Property publicConnectionSetting: The public connection setting. This parameter is required.
         */
        public Builder publicConnectionSetting(final com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.PublicConnectionSettingProperty publicConnectionSetting) {
            this.props.publicConnectionSetting(publicConnectionSetting);
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
         * Property sourceDbInstanceId: The ID of the source database instance.
         * <p>
         * @return {@code this}
         * @param sourceDbInstanceId Property sourceDbInstanceId: The ID of the source database instance. This parameter is required.
         */
        public Builder sourceDbInstanceId(final java.lang.String sourceDbInstanceId) {
            this.props.sourceDbInstanceId(sourceDbInstanceId);
            return this;
        }
        /**
         * Property sourceDbInstanceId: The ID of the source database instance.
         * <p>
         * @return {@code this}
         * @param sourceDbInstanceId Property sourceDbInstanceId: The ID of the source database instance. This parameter is required.
         */
        public Builder sourceDbInstanceId(final com.aliyun.ros.cdk.core.IResolvable sourceDbInstanceId) {
            this.props.sourceDbInstanceId(sourceDbInstanceId);
            return this;
        }

        /**
         * Property storageQuota: The storage quota.
         * <p>
         * @return {@code this}
         * @param storageQuota Property storageQuota: The storage quota. This parameter is required.
         */
        public Builder storageQuota(final java.lang.Number storageQuota) {
            this.props.storageQuota(storageQuota);
            return this;
        }
        /**
         * Property storageQuota: The storage quota.
         * <p>
         * @return {@code this}
         * @param storageQuota Property storageQuota: The storage quota. This parameter is required.
         */
        public Builder storageQuota(final com.aliyun.ros.cdk.core.IResolvable storageQuota) {
            this.props.storageQuota(storageQuota);
            return this;
        }

        /**
         * Property storageType: The type of storage.
         * <p>
         * @return {@code this}
         * @param storageType Property storageType: The type of storage. This parameter is required.
         */
        public Builder storageType(final java.lang.String storageType) {
            this.props.storageType(storageType);
            return this;
        }
        /**
         * Property storageType: The type of storage.
         * <p>
         * @return {@code this}
         * @param storageType Property storageType: The type of storage. This parameter is required.
         */
        public Builder storageType(final com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.props.storageType(storageType);
            return this;
        }

        /**
         * Property tags: Tags to attach to clickhouse_enterprise_db.
         * <p>
         * Max support 20 tags to add during create clickhouse_enterprise_db. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to clickhouse_enterprise_db. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.clickhouse.EnterpriseDBCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.clickhouse.EnterpriseDBCluster build() {
            return new com.aliyun.ros.cdk.clickhouse.EnterpriseDBCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
