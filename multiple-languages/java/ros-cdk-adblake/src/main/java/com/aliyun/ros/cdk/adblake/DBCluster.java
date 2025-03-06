package com.aliyun.ros.cdk.adblake;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ADBLake::DBCluster</code>, which is used to create an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:00.965Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adblake.$Module.class, fqn = "@alicloud/ros-cdk-adblake.DBCluster")
public class DBCluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.adblake.IDBCluster {

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
    public DBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adblake.DBClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adblake.DBClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConnectionString: The public endpoint that is used to connect to the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBClusterId: The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderId: The order ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.adblake.DBClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.adblake.DBClusterProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.adblake.DBCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.adblake.DBCluster> {
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
        private final com.aliyun.ros.cdk.adblake.DBClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.adblake.DBClusterProps.Builder();
        }

        /**
         * Property computeResource: The amount of reserved computing resources.
         * <p>
         * Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
         * Note This parameter must be specified with a unit.
         * <p>
         * @return {@code this}
         * @param computeResource Property computeResource: The amount of reserved computing resources. This parameter is required.
         */
        public Builder computeResource(final java.lang.String computeResource) {
            this.props.computeResource(computeResource);
            return this;
        }
        /**
         * Property computeResource: The amount of reserved computing resources.
         * <p>
         * Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
         * Note This parameter must be specified with a unit.
         * <p>
         * @return {@code this}
         * @param computeResource Property computeResource: The amount of reserved computing resources. This parameter is required.
         */
        public Builder computeResource(final com.aliyun.ros.cdk.core.IResolvable computeResource) {
            this.props.computeResource(computeResource);
            return this;
        }

        /**
         * Property dbClusterVersion: The version of the cluster.
         * <p>
         * Set the value to 5.0.
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
         * Set the value to 5.0.
         * <p>
         * @return {@code this}
         * @param dbClusterVersion Property dbClusterVersion: The version of the cluster. This parameter is required.
         */
        public Builder dbClusterVersion(final com.aliyun.ros.cdk.core.IResolvable dbClusterVersion) {
            this.props.dbClusterVersion(dbClusterVersion);
            return this;
        }

        /**
         * Property payType: The billing method of the cluster.
         * <p>
         * Valid values:
         * Postpaid: pay-as-you-go.
         * Prepaid: subscription.
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
         * Postpaid: pay-as-you-go.
         * Prepaid: subscription.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the cluster. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property storageResource: The amount of reserved storage resources.
         * <p>
         * Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
         * Note This parameter must be specified with a unit.
         * <p>
         * @return {@code this}
         * @param storageResource Property storageResource: The amount of reserved storage resources. This parameter is required.
         */
        public Builder storageResource(final java.lang.String storageResource) {
            this.props.storageResource(storageResource);
            return this;
        }
        /**
         * Property storageResource: The amount of reserved storage resources.
         * <p>
         * Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
         * Note This parameter must be specified with a unit.
         * <p>
         * @return {@code this}
         * @param storageResource Property storageResource: The amount of reserved storage resources. This parameter is required.
         */
        public Builder storageResource(final com.aliyun.ros.cdk.core.IResolvable storageResource) {
            this.props.storageResource(storageResource);
            return this;
        }

        /**
         * Property vpcId: The virtual private cloud (VPC) ID of the cluster.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The virtual private cloud (VPC) ID of the cluster. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The virtual private cloud (VPC) ID of the cluster.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The virtual private cloud (VPC) ID of the cluster. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The vSwitch ID of the cluster.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the cluster. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vSwitch ID of the cluster.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the cluster. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The zone ID.
         * <p>
         * Note You can call the  DescribeRegions  operation to query the most recent zone list.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID.
         * <p>
         * Note You can call the  DescribeRegions  operation to query the most recent zone list.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property backupSetId: The ID of the backup set that you want to use to restore data.
         * <p>
         * Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
         * <p>
         * @return {@code this}
         * @param backupSetId Property backupSetId: The ID of the backup set that you want to use to restore data. This parameter is required.
         */
        public Builder backupSetId(final java.lang.String backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }
        /**
         * Property backupSetId: The ID of the backup set that you want to use to restore data.
         * <p>
         * Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
         * <p>
         * @return {@code this}
         * @param backupSetId Property backupSetId: The ID of the backup set that you want to use to restore data. This parameter is required.
         */
        public Builder backupSetId(final com.aliyun.ros.cdk.core.IResolvable backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }

        /**
         * Property cloneSourceRegionId: The ID of the source region where the cluster is located.
         * <p>
         * @return {@code this}
         * @param cloneSourceRegionId Property cloneSourceRegionId: The ID of the source region where the cluster is located. This parameter is required.
         */
        public Builder cloneSourceRegionId(final java.lang.String cloneSourceRegionId) {
            this.props.cloneSourceRegionId(cloneSourceRegionId);
            return this;
        }
        /**
         * Property cloneSourceRegionId: The ID of the source region where the cluster is located.
         * <p>
         * @return {@code this}
         * @param cloneSourceRegionId Property cloneSourceRegionId: The ID of the source region where the cluster is located. This parameter is required.
         */
        public Builder cloneSourceRegionId(final com.aliyun.ros.cdk.core.IResolvable cloneSourceRegionId) {
            this.props.cloneSourceRegionId(cloneSourceRegionId);
            return this;
        }

        /**
         * Property dbClusterDescription: The description of the cluster.
         * <p>
         * The description cannot start with http:// or https://.
         * The description must be 2 to 256 characters in length
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
         * The description cannot start with http:// or https://.
         * The description must be 2 to 256 characters in length
         * <p>
         * @return {@code this}
         * @param dbClusterDescription Property dbClusterDescription: The description of the cluster. This parameter is required.
         */
        public Builder dbClusterDescription(final com.aliyun.ros.cdk.core.IResolvable dbClusterDescription) {
            this.props.dbClusterDescription(dbClusterDescription);
            return this;
        }

        /**
         * Property dbClusterNetworkType: The network type of the cluster.
         * <p>
         * Valid values:
         * VPC
         * <p>
         * @return {@code this}
         * @param dbClusterNetworkType Property dbClusterNetworkType: The network type of the cluster. This parameter is required.
         */
        public Builder dbClusterNetworkType(final java.lang.String dbClusterNetworkType) {
            this.props.dbClusterNetworkType(dbClusterNetworkType);
            return this;
        }
        /**
         * Property dbClusterNetworkType: The network type of the cluster.
         * <p>
         * Valid values:
         * VPC
         * <p>
         * @return {@code this}
         * @param dbClusterNetworkType Property dbClusterNetworkType: The network type of the cluster. This parameter is required.
         */
        public Builder dbClusterNetworkType(final com.aliyun.ros.cdk.core.IResolvable dbClusterNetworkType) {
            this.props.dbClusterNetworkType(dbClusterNetworkType);
            return this;
        }

        /**
         * Property diskEncryption: Specifies whether to encrypt the disk.
         * <p>
         * Valid values:
         * true
         * false (default)
         * <p>
         * @return {@code this}
         * @param diskEncryption Property diskEncryption: Specifies whether to encrypt the disk. This parameter is required.
         */
        public Builder diskEncryption(final java.lang.Boolean diskEncryption) {
            this.props.diskEncryption(diskEncryption);
            return this;
        }
        /**
         * Property diskEncryption: Specifies whether to encrypt the disk.
         * <p>
         * Valid values:
         * true
         * false (default)
         * <p>
         * @return {@code this}
         * @param diskEncryption Property diskEncryption: Specifies whether to encrypt the disk. This parameter is required.
         */
        public Builder diskEncryption(final com.aliyun.ros.cdk.core.IResolvable diskEncryption) {
            this.props.diskEncryption(diskEncryption);
            return this;
        }

        /**
         * Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group.
         * <p>
         * Valid values:
         * true (default)
         * false
         * <p>
         * @return {@code this}
         * @param enableDefaultResourcePool Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. This parameter is required.
         */
        public Builder enableDefaultResourcePool(final java.lang.Boolean enableDefaultResourcePool) {
            this.props.enableDefaultResourcePool(enableDefaultResourcePool);
            return this;
        }
        /**
         * Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group.
         * <p>
         * Valid values:
         * true (default)
         * false
         * <p>
         * @return {@code this}
         * @param enableDefaultResourcePool Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. This parameter is required.
         */
        public Builder enableDefaultResourcePool(final com.aliyun.ros.cdk.core.IResolvable enableDefaultResourcePool) {
            this.props.enableDefaultResourcePool(enableDefaultResourcePool);
            return this;
        }

        /**
         * Property kmsId:.
         * <p>
         * @return {@code this}
         * @param kmsId Property kmsId:. This parameter is required.
         */
        public Builder kmsId(final java.lang.String kmsId) {
            this.props.kmsId(kmsId);
            return this;
        }
        /**
         * Property kmsId:.
         * <p>
         * @return {@code this}
         * @param kmsId Property kmsId:. This parameter is required.
         */
        public Builder kmsId(final com.aliyun.ros.cdk.core.IResolvable kmsId) {
            this.props.kmsId(kmsId);
            return this;
        }

        /**
         * Property period: The subscription duration of the subscription cluster.
         * <p>
         * Valid values when Period is set to Year: 1 to 3 (integer).
         * Valid values when Period is set to Month: 1 to 9 (integer).
         * Note This parameter must be specified when PayType is set to Prepaid.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration of the subscription cluster. This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription duration of the subscription cluster.
         * <p>
         * Valid values when Period is set to Year: 1 to 3 (integer).
         * Valid values when Period is set to Month: 1 to 9 (integer).
         * Note This parameter must be specified when PayType is set to Prepaid.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration of the subscription cluster. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodType: The subscription type of the subscription cluster.
         * <p>
         * Valid values:
         * Year: subscription on a yearly basis.
         * Month: subscription on a monthly basis.
         * Note This parameter must be specified when PayType is set to Prepaid.
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: The subscription type of the subscription cluster. This parameter is required.
         */
        public Builder periodType(final java.lang.String periodType) {
            this.props.periodType(periodType);
            return this;
        }
        /**
         * Property periodType: The subscription type of the subscription cluster.
         * <p>
         * Valid values:
         * Year: subscription on a yearly basis.
         * Month: subscription on a monthly basis.
         * Note This parameter must be specified when PayType is set to Prepaid.
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: The subscription type of the subscription cluster. This parameter is required.
         */
        public Builder periodType(final com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.props.periodType(periodType);
            return this;
        }

        /**
         * Property productForm: Valid values: IntegrationForm LegacyForm.
         * <p>
         * @return {@code this}
         * @param productForm Property productForm: Valid values: IntegrationForm LegacyForm. This parameter is required.
         */
        public Builder productForm(final java.lang.String productForm) {
            this.props.productForm(productForm);
            return this;
        }
        /**
         * Property productForm: Valid values: IntegrationForm LegacyForm.
         * <p>
         * @return {@code this}
         * @param productForm Property productForm: Valid values: IntegrationForm LegacyForm. This parameter is required.
         */
        public Builder productForm(final com.aliyun.ros.cdk.core.IResolvable productForm) {
            this.props.productForm(productForm);
            return this;
        }

        /**
         * Property reservedNodeCount: The number of reserved nodes.
         * <p>
         * Must be 1 for basic version and multiple
         * of 3 for enterprise version.
         * <p>
         * @return {@code this}
         * @param reservedNodeCount Property reservedNodeCount: The number of reserved nodes. This parameter is required.
         */
        public Builder reservedNodeCount(final java.lang.Number reservedNodeCount) {
            this.props.reservedNodeCount(reservedNodeCount);
            return this;
        }
        /**
         * Property reservedNodeCount: The number of reserved nodes.
         * <p>
         * Must be 1 for basic version and multiple
         * of 3 for enterprise version.
         * <p>
         * @return {@code this}
         * @param reservedNodeCount Property reservedNodeCount: The number of reserved nodes. This parameter is required.
         */
        public Builder reservedNodeCount(final com.aliyun.ros.cdk.core.IResolvable reservedNodeCount) {
            this.props.reservedNodeCount(reservedNodeCount);
            return this;
        }

        /**
         * Property reservedNodeSize: The size of each reserved node.
         * <p>
         * @return {@code this}
         * @param reservedNodeSize Property reservedNodeSize: The size of each reserved node. This parameter is required.
         */
        public Builder reservedNodeSize(final java.lang.Number reservedNodeSize) {
            this.props.reservedNodeSize(reservedNodeSize);
            return this;
        }
        /**
         * Property reservedNodeSize: The size of each reserved node.
         * <p>
         * @return {@code this}
         * @param reservedNodeSize Property reservedNodeSize: The size of each reserved node. This parameter is required.
         */
        public Builder reservedNodeSize(final com.aliyun.ros.cdk.core.IResolvable reservedNodeSize) {
            this.props.reservedNodeSize(reservedNodeSize);
            return this;
        }

        /**
         * Property resourceGroupId: The resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property restoreToTime: The point in time to which you want to restore data from the backup set.
         * <p>
         * @return {@code this}
         * @param restoreToTime Property restoreToTime: The point in time to which you want to restore data from the backup set. This parameter is required.
         */
        public Builder restoreToTime(final java.lang.String restoreToTime) {
            this.props.restoreToTime(restoreToTime);
            return this;
        }
        /**
         * Property restoreToTime: The point in time to which you want to restore data from the backup set.
         * <p>
         * @return {@code this}
         * @param restoreToTime Property restoreToTime: The point in time to which you want to restore data from the backup set. This parameter is required.
         */
        public Builder restoreToTime(final com.aliyun.ros.cdk.core.IResolvable restoreToTime) {
            this.props.restoreToTime(restoreToTime);
            return this;
        }

        /**
         * Property restoreType: The method that you want to use to restore data.
         * <p>
         * Valid values:
         * backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
         * timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
         * <p>
         * @return {@code this}
         * @param restoreType Property restoreType: The method that you want to use to restore data. This parameter is required.
         */
        public Builder restoreType(final java.lang.String restoreType) {
            this.props.restoreType(restoreType);
            return this;
        }
        /**
         * Property restoreType: The method that you want to use to restore data.
         * <p>
         * Valid values:
         * backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
         * timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
         * <p>
         * @return {@code this}
         * @param restoreType Property restoreType: The method that you want to use to restore data. This parameter is required.
         */
        public Builder restoreType(final com.aliyun.ros.cdk.core.IResolvable restoreType) {
            this.props.restoreType(restoreType);
            return this;
        }

        /**
         * Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster.
         * <p>
         * If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
         * <p>
         * @return {@code this}
         * @param sourceDbClusterId Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. This parameter is required.
         */
        public Builder sourceDbClusterId(final java.lang.String sourceDbClusterId) {
            this.props.sourceDbClusterId(sourceDbClusterId);
            return this;
        }
        /**
         * Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster.
         * <p>
         * If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
         * <p>
         * @return {@code this}
         * @param sourceDbClusterId Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. This parameter is required.
         */
        public Builder sourceDbClusterId(final com.aliyun.ros.cdk.core.IResolvable sourceDbClusterId) {
            this.props.sourceDbClusterId(sourceDbClusterId);
            return this;
        }

        /**
         * Property tags: Tags to attach to cluster.
         * <p>
         * Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to cluster. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.adblake.DBCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.adblake.DBCluster build() {
            return new com.aliyun.ros.cdk.adblake.DBCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
