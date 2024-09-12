package com.aliyun.ros.cdk.adb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ADB::DBCluster</code>, which is used to create an AnalyticDB for MySQL cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:22.699Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adb.$Module.class, fqn = "@alicloud/ros-cdk-adb.DBCluster")
public class DBCluster extends com.aliyun.ros.cdk.core.Resource {

    protected DBCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adb.DBClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adb.DBClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConnectionString: Vpc connection string.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBClusterId: The ID of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: The ID of the order.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adb.DBClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.adb.DBClusterProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adb.DBClusterProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.adb.DBCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.adb.DBCluster> {
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
        private final com.aliyun.ros.cdk.adb.DBClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.adb.DBClusterProps.Builder();
        }

        /**
         * Property dbClusterCategory: The edition of the cluster.
         * <p>
         * Valid values when the cluster is in reserved mode:
         * Basic
         * Cluster
         * When the cluster is in elastic mode, set the value to MixedStorage.
         * <p>
         * @return {@code this}
         * @param dbClusterCategory Property dbClusterCategory: The edition of the cluster. This parameter is required.
         */
        public Builder dbClusterCategory(final java.lang.String dbClusterCategory) {
            this.props.dbClusterCategory(dbClusterCategory);
            return this;
        }
        /**
         * Property dbClusterCategory: The edition of the cluster.
         * <p>
         * Valid values when the cluster is in reserved mode:
         * Basic
         * Cluster
         * When the cluster is in elastic mode, set the value to MixedStorage.
         * <p>
         * @return {@code this}
         * @param dbClusterCategory Property dbClusterCategory: The edition of the cluster. This parameter is required.
         */
        public Builder dbClusterCategory(final com.aliyun.ros.cdk.core.IResolvable dbClusterCategory) {
            this.props.dbClusterCategory(dbClusterCategory);
            return this;
        }

        /**
         * Property dbClusterVersion: The version of the cluster.
         * <p>
         * Set the value to 3.0.
         * <p>
         * @return {@code this}
         * @param dbClusterVersion Property dbClusterVersion: The version of the cluster. This parameter is required.
         */
        public Builder dbClusterVersion(final java.lang.String dbClusterVersion) {
            this.props.dbClusterVersion(dbClusterVersion);
            return this;
        }
        /**
         * Property dbClusterVersion: The version of the cluster.
         * <p>
         * Set the value to 3.0.
         * <p>
         * @return {@code this}
         * @param dbClusterVersion Property dbClusterVersion: The version of the cluster. This parameter is required.
         */
        public Builder dbClusterVersion(final com.aliyun.ros.cdk.core.IResolvable dbClusterVersion) {
            this.props.dbClusterVersion(dbClusterVersion);
            return this;
        }

        /**
         * Property mode: The mode of the cluster.
         * <p>
         * Valid values:
         * Reserver: the reserved mode
         * Flexible: the elastic mode
         * <p>
         * @return {@code this}
         * @param mode Property mode: The mode of the cluster. This parameter is required.
         */
        public Builder mode(final java.lang.String mode) {
            this.props.mode(mode);
            return this;
        }
        /**
         * Property mode: The mode of the cluster.
         * <p>
         * Valid values:
         * Reserver: the reserved mode
         * Flexible: the elastic mode
         * <p>
         * @return {@code this}
         * @param mode Property mode: The mode of the cluster. This parameter is required.
         */
        public Builder mode(final com.aliyun.ros.cdk.core.IResolvable mode) {
            this.props.mode(mode);
            return this;
        }

        /**
         * Property payType: The billing method of the cluster.
         * <p>
         * Valid values:
         * Postpaid: pay-as-you-go
         * Prepaid: subscription
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the cluster. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method of the cluster.
         * <p>
         * Valid values:
         * Postpaid: pay-as-you-go
         * Prepaid: subscription
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the cluster. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
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
         * Property vSwitchId: The ID of the vSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the vSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property computeResource: The computing resource of the cluster.
         * <p>
         * This parameter is required in elastic mode.
         * <p>
         * @return {@code this}
         * @param computeResource Property computeResource: The computing resource of the cluster. This parameter is required.
         */
        public Builder computeResource(final java.lang.String computeResource) {
            this.props.computeResource(computeResource);
            return this;
        }
        /**
         * Property computeResource: The computing resource of the cluster.
         * <p>
         * This parameter is required in elastic mode.
         * <p>
         * @return {@code this}
         * @param computeResource Property computeResource: The computing resource of the cluster. This parameter is required.
         */
        public Builder computeResource(final com.aliyun.ros.cdk.core.IResolvable computeResource) {
            this.props.computeResource(computeResource);
            return this;
        }

        /**
         * Property dbClusterClass: The specification of the cluster.
         * <p>
         * This parameter is required in reserved mode. Valid values:
         * Basic Edition: T8, T16, T32, and T52
         * Cluster Edition: C8 and C32
         * <p>
         * @return {@code this}
         * @param dbClusterClass Property dbClusterClass: The specification of the cluster. This parameter is required.
         */
        public Builder dbClusterClass(final java.lang.String dbClusterClass) {
            this.props.dbClusterClass(dbClusterClass);
            return this;
        }
        /**
         * Property dbClusterClass: The specification of the cluster.
         * <p>
         * This parameter is required in reserved mode. Valid values:
         * Basic Edition: T8, T16, T32, and T52
         * Cluster Edition: C8 and C32
         * <p>
         * @return {@code this}
         * @param dbClusterClass Property dbClusterClass: The specification of the cluster. This parameter is required.
         */
        public Builder dbClusterClass(final com.aliyun.ros.cdk.core.IResolvable dbClusterClass) {
            this.props.dbClusterClass(dbClusterClass);
            return this;
        }

        /**
         * Property dbClusterDescription: The description of the cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterDescription Property dbClusterDescription: The description of the cluster. This parameter is required.
         */
        public Builder dbClusterDescription(final java.lang.String dbClusterDescription) {
            this.props.dbClusterDescription(dbClusterDescription);
            return this;
        }
        /**
         * Property dbClusterDescription: The description of the cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterDescription Property dbClusterDescription: The description of the cluster. This parameter is required.
         */
        public Builder dbClusterDescription(final com.aliyun.ros.cdk.core.IResolvable dbClusterDescription) {
            this.props.dbClusterDescription(dbClusterDescription);
            return this;
        }

        /**
         * Property dbNodeGroupCount: The number of node groups.
         * <p>
         * This parameter is required in reserved mode. Valid values:
         * T8, T16, T32, and T52: 1
         * C8 and C32: 1 to 128
         * <p>
         * @return {@code this}
         * @param dbNodeGroupCount Property dbNodeGroupCount: The number of node groups. This parameter is required.
         */
        public Builder dbNodeGroupCount(final java.lang.Number dbNodeGroupCount) {
            this.props.dbNodeGroupCount(dbNodeGroupCount);
            return this;
        }
        /**
         * Property dbNodeGroupCount: The number of node groups.
         * <p>
         * This parameter is required in reserved mode. Valid values:
         * T8, T16, T32, and T52: 1
         * C8 and C32: 1 to 128
         * <p>
         * @return {@code this}
         * @param dbNodeGroupCount Property dbNodeGroupCount: The number of node groups. This parameter is required.
         */
        public Builder dbNodeGroupCount(final com.aliyun.ros.cdk.core.IResolvable dbNodeGroupCount) {
            this.props.dbNodeGroupCount(dbNodeGroupCount);
            return this;
        }

        /**
         * Property dbNodeStorage: The storage space of the node.
         * <p>
         * This parameter is required in reserved mode. Unit: GB. Valid values:
         * T8: 100 to 500
         * T16 and T32: 100 to 2000
         * T52: 100 to 4000
         * C8: 100 to 1000
         * C32: 100 to 8000
         * Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
         * <p>
         * @return {@code this}
         * @param dbNodeStorage Property dbNodeStorage: The storage space of the node. This parameter is required.
         */
        public Builder dbNodeStorage(final java.lang.Number dbNodeStorage) {
            this.props.dbNodeStorage(dbNodeStorage);
            return this;
        }
        /**
         * Property dbNodeStorage: The storage space of the node.
         * <p>
         * This parameter is required in reserved mode. Unit: GB. Valid values:
         * T8: 100 to 500
         * T16 and T32: 100 to 2000
         * T52: 100 to 4000
         * C8: 100 to 1000
         * C32: 100 to 8000
         * Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
         * <p>
         * @return {@code this}
         * @param dbNodeStorage Property dbNodeStorage: The storage space of the node. This parameter is required.
         */
        public Builder dbNodeStorage(final com.aliyun.ros.cdk.core.IResolvable dbNodeStorage) {
            this.props.dbNodeStorage(dbNodeStorage);
            return this;
        }

        /**
         * Property elasticIoResource: Elastic IO Unit Note the flexible mode cluster will use this parameter.
         * <p>
         * @return {@code this}
         * @param elasticIoResource Property elasticIoResource: Elastic IO Unit Note the flexible mode cluster will use this parameter. This parameter is required.
         */
        public Builder elasticIoResource(final java.lang.Number elasticIoResource) {
            this.props.elasticIoResource(elasticIoResource);
            return this;
        }
        /**
         * Property elasticIoResource: Elastic IO Unit Note the flexible mode cluster will use this parameter.
         * <p>
         * @return {@code this}
         * @param elasticIoResource Property elasticIoResource: Elastic IO Unit Note the flexible mode cluster will use this parameter. This parameter is required.
         */
        public Builder elasticIoResource(final com.aliyun.ros.cdk.core.IResolvable elasticIoResource) {
            this.props.elasticIoResource(elasticIoResource);
            return this;
        }

        /**
         * Property executorCount: ExecutorCount.
         * <p>
         * @return {@code this}
         * @param executorCount Property executorCount: ExecutorCount. This parameter is required.
         */
        public Builder executorCount(final java.lang.Number executorCount) {
            this.props.executorCount(executorCount);
            return this;
        }
        /**
         * Property executorCount: ExecutorCount.
         * <p>
         * @return {@code this}
         * @param executorCount Property executorCount: ExecutorCount. This parameter is required.
         */
        public Builder executorCount(final com.aliyun.ros.cdk.core.IResolvable executorCount) {
            this.props.executorCount(executorCount);
            return this;
        }

        /**
         * Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
         * <p>
         * Valid values when the Period parameter is set to Year: 1, 2, and 3.
         * <p>
         * @return {@code this}
         * @param period Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
         * <p>
         * Valid values when the Period parameter is set to Year: 1, 2, and 3.
         * <p>
         * @return {@code this}
         * @param period Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodType: The subscription period for the cluster.
         * <p>
         * This parameter is required if the PayType parameter is set to Prepaid. Valid values:
         * Year: subscription on a yearly basis
         * Month: subscription on a monthly basis
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: The subscription period for the cluster. This parameter is required.
         */
        public Builder periodType(final java.lang.String periodType) {
            this.props.periodType(periodType);
            return this;
        }
        /**
         * Property periodType: The subscription period for the cluster.
         * <p>
         * This parameter is required if the PayType parameter is set to Prepaid. Valid values:
         * Year: subscription on a yearly basis
         * Month: subscription on a monthly basis
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: The subscription period for the cluster. This parameter is required.
         */
        public Builder periodType(final com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.props.periodType(periodType);
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
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.adb.RosDBCluster.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the cluster.
         * <p>
         * You can call the DescribeRegions operation to query the most recent zone list.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the cluster. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID of the cluster.
         * <p>
         * You can call the DescribeRegions operation to query the most recent zone list.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the cluster. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.adb.DBCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.adb.DBCluster build() {
            return new com.aliyun.ros.cdk.adb.DBCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
