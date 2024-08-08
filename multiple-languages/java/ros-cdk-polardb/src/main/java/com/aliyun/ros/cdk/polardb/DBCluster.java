package com.aliyun.ros.cdk.polardb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::POLARDB::DBCluster</code>, which is used to create a PolarDB cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:12.975Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBCluster")
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
    public DBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterConnectionString: The cluster connection string of the db cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterEndpointId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ColdStorageInstanceId: The ID of the cold storage instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrColdStorageInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrColdStorageInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCustomConnectionStrings() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomConnectionStrings", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCustomEndpointIds() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomEndpointIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBClusterDescription: The description of the db cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DBNodeIds: The ID list of cluster nodes.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbNodeIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: The Order ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrimaryConnectionString: The primary connection string of the db cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrimaryConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrimaryConnectionStrings() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryConnectionStrings", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrimaryEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryEndpointId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrimaryEndpointIds() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryEndpointIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.DBClusterProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.DBCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.DBCluster> {
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
        private final com.aliyun.ros.cdk.polardb.DBClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.DBClusterProps.Builder();
        }

        /**
         * Property dbNodeClass: The node specifications of the cluster.
         * <p>
         * For more information, see Specifications and pricing.
         * <p>
         * @return {@code this}
         * @param dbNodeClass Property dbNodeClass: The node specifications of the cluster. This parameter is required.
         */
        public Builder dbNodeClass(final java.lang.String dbNodeClass) {
            this.props.dbNodeClass(dbNodeClass);
            return this;
        }
        /**
         * Property dbNodeClass: The node specifications of the cluster.
         * <p>
         * For more information, see Specifications and pricing.
         * <p>
         * @return {@code this}
         * @param dbNodeClass Property dbNodeClass: The node specifications of the cluster. This parameter is required.
         */
        public Builder dbNodeClass(final com.aliyun.ros.cdk.core.IResolvable dbNodeClass) {
            this.props.dbNodeClass(dbNodeClass);
            return this;
        }

        /**
         * Property dbType: Database type, value: MySQL PostgreSQL Oracle.
         * <p>
         * @return {@code this}
         * @param dbType Property dbType: Database type, value: MySQL PostgreSQL Oracle. This parameter is required.
         */
        public Builder dbType(final java.lang.String dbType) {
            this.props.dbType(dbType);
            return this;
        }
        /**
         * Property dbType: Database type, value: MySQL PostgreSQL Oracle.
         * <p>
         * @return {@code this}
         * @param dbType Property dbType: Database type, value: MySQL PostgreSQL Oracle. This parameter is required.
         */
        public Builder dbType(final com.aliyun.ros.cdk.core.IResolvable dbType) {
            this.props.dbType(dbType);
            return this;
        }

        /**
         * Property dbVersion: The version of the database.
         * <p>
         * Valid values:
         * MySQL: 5.6, 5.7 or 8.0
         * PostgreSQL: 11, 14
         * Oracle: 11, 14
         * <p>
         * @return {@code this}
         * @param dbVersion Property dbVersion: The version of the database. This parameter is required.
         */
        public Builder dbVersion(final java.lang.String dbVersion) {
            this.props.dbVersion(dbVersion);
            return this;
        }
        /**
         * Property dbVersion: The version of the database.
         * <p>
         * Valid values:
         * MySQL: 5.6, 5.7 or 8.0
         * PostgreSQL: 11, 14
         * Oracle: 11, 14
         * <p>
         * @return {@code this}
         * @param dbVersion Property dbVersion: The version of the database. This parameter is required.
         */
        public Builder dbVersion(final com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.props.dbVersion(dbVersion);
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
         * Property allowShutDown: Whether to turn on No activity pause.
         * <p>
         * The default is false.
         * <p>
         * @return {@code this}
         * @param allowShutDown Property allowShutDown: Whether to turn on No activity pause. This parameter is required.
         */
        public Builder allowShutDown(final java.lang.Boolean allowShutDown) {
            this.props.allowShutDown(allowShutDown);
            return this;
        }
        /**
         * Property allowShutDown: Whether to turn on No activity pause.
         * <p>
         * The default is false.
         * <p>
         * @return {@code this}
         * @param allowShutDown Property allowShutDown: Whether to turn on No activity pause. This parameter is required.
         */
        public Builder allowShutDown(final com.aliyun.ros.cdk.core.IResolvable allowShutDown) {
            this.props.allowShutDown(allowShutDown);
            return this;
        }

        /**
         * Property architecture: The architecture of CPU.
         * <p>
         * Valid values:
         * X86
         * ARM
         * <p>
         * @return {@code this}
         * @param architecture Property architecture: The architecture of CPU. This parameter is required.
         */
        public Builder architecture(final java.lang.String architecture) {
            this.props.architecture(architecture);
            return this;
        }
        /**
         * Property architecture: The architecture of CPU.
         * <p>
         * Valid values:
         * X86
         * ARM
         * <p>
         * @return {@code this}
         * @param architecture Property architecture: The architecture of CPU. This parameter is required.
         */
        public Builder architecture(final com.aliyun.ros.cdk.core.IResolvable architecture) {
            this.props.architecture(architecture);
            return this;
        }

        /**
         * Property autoRenewPeriod: Set the cluster auto renewal time.
         * <p>
         * Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: Set the cluster auto renewal time. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: Set the cluster auto renewal time.
         * <p>
         * Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: Set the cluster auto renewal time. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently.
         * <p>
         * LATEST: Permanently keep the last backup (automatic backup before deletion).
         * NONE: The backup set is not retained when the cluster is deleted.
         * When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
         * Note: This parameter takes effect only when the value of DBType is MySQL.
         * <p>
         * @return {@code this}
         * @param backupRetentionPolicyOnClusterDeletion Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently. This parameter is required.
         */
        public Builder backupRetentionPolicyOnClusterDeletion(final java.lang.String backupRetentionPolicyOnClusterDeletion) {
            this.props.backupRetentionPolicyOnClusterDeletion(backupRetentionPolicyOnClusterDeletion);
            return this;
        }
        /**
         * Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently.
         * <p>
         * LATEST: Permanently keep the last backup (automatic backup before deletion).
         * NONE: The backup set is not retained when the cluster is deleted.
         * When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
         * Note: This parameter takes effect only when the value of DBType is MySQL.
         * <p>
         * @return {@code this}
         * @param backupRetentionPolicyOnClusterDeletion Property backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows: ALL: Keep all backups permanently. This parameter is required.
         */
        public Builder backupRetentionPolicyOnClusterDeletion(final com.aliyun.ros.cdk.core.IResolvable backupRetentionPolicyOnClusterDeletion) {
            this.props.backupRetentionPolicyOnClusterDeletion(backupRetentionPolicyOnClusterDeletion);
            return this;
        }

        /**
         * Property cloneDataPoint: The time point of data to be cloned.
         * <p>
         * Valid values:
         * LATEST: clones data of the latest time point.
         * <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
         * <Timestamp>: clones data of a historical time point. Specify the specific time in
         * the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
         * Default value: LATEST.
         * Note
         * This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
         * If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
         * <p>
         * @return {@code this}
         * @param cloneDataPoint Property cloneDataPoint: The time point of data to be cloned. This parameter is required.
         */
        public Builder cloneDataPoint(final java.lang.String cloneDataPoint) {
            this.props.cloneDataPoint(cloneDataPoint);
            return this;
        }
        /**
         * Property cloneDataPoint: The time point of data to be cloned.
         * <p>
         * Valid values:
         * LATEST: clones data of the latest time point.
         * <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
         * <Timestamp>: clones data of a historical time point. Specify the specific time in
         * the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
         * Default value: LATEST.
         * Note
         * This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
         * If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
         * <p>
         * @return {@code this}
         * @param cloneDataPoint Property cloneDataPoint: The time point of data to be cloned. This parameter is required.
         */
        public Builder cloneDataPoint(final com.aliyun.ros.cdk.core.IResolvable cloneDataPoint) {
            this.props.cloneDataPoint(cloneDataPoint);
            return this;
        }

        /**
         * Property clusterNetworkType: The network type of the cluster.
         * <p>
         * Currently, only VPC is supported. Default value: VPC.
         * <p>
         * @return {@code this}
         * @param clusterNetworkType Property clusterNetworkType: The network type of the cluster. This parameter is required.
         */
        public Builder clusterNetworkType(final java.lang.String clusterNetworkType) {
            this.props.clusterNetworkType(clusterNetworkType);
            return this;
        }
        /**
         * Property clusterNetworkType: The network type of the cluster.
         * <p>
         * Currently, only VPC is supported. Default value: VPC.
         * <p>
         * @return {@code this}
         * @param clusterNetworkType Property clusterNetworkType: The network type of the cluster. This parameter is required.
         */
        public Builder clusterNetworkType(final com.aliyun.ros.cdk.core.IResolvable clusterNetworkType) {
            this.props.clusterNetworkType(clusterNetworkType);
            return this;
        }

        /**
         * Property coldStorageOption: The option of cold storage.
         * <p>
         * @return {@code this}
         * @param coldStorageOption Property coldStorageOption: The option of cold storage. This parameter is required.
         */
        public Builder coldStorageOption(final com.aliyun.ros.cdk.core.IResolvable coldStorageOption) {
            this.props.coldStorageOption(coldStorageOption);
            return this;
        }
        /**
         * Property coldStorageOption: The option of cold storage.
         * <p>
         * @return {@code this}
         * @param coldStorageOption Property coldStorageOption: The option of cold storage. This parameter is required.
         */
        public Builder coldStorageOption(final com.aliyun.ros.cdk.polardb.RosDBCluster.ColdStorageOptionProperty coldStorageOption) {
            this.props.coldStorageOption(coldStorageOption);
            return this;
        }

        /**
         * Property creationCategory: Cluster series.
         * <p>
         * The value could be Normal (standard version), Basic and ArchiveNormal.
         * <p>
         * @return {@code this}
         * @param creationCategory Property creationCategory: Cluster series. This parameter is required.
         */
        public Builder creationCategory(final java.lang.String creationCategory) {
            this.props.creationCategory(creationCategory);
            return this;
        }
        /**
         * Property creationCategory: Cluster series.
         * <p>
         * The value could be Normal (standard version), Basic and ArchiveNormal.
         * <p>
         * @return {@code this}
         * @param creationCategory Property creationCategory: Cluster series. This parameter is required.
         */
        public Builder creationCategory(final com.aliyun.ros.cdk.core.IResolvable creationCategory) {
            this.props.creationCategory(creationCategory);
            return this;
        }

        /**
         * Property creationOption: The method for creating an ApsaraDB for POLARDB cluster.
         * <p>
         * Valid values:
         * Normal: creates an ApsaraDB for POLARDB cluster.
         * CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
         * CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
         * for POLARDB cluster.
         * MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
         * CreateGdnStandby: Create a secondary cluster.
         * Default value: Normal.
         * Note:
         * When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
         * When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
         * <p>
         * @return {@code this}
         * @param creationOption Property creationOption: The method for creating an ApsaraDB for POLARDB cluster. This parameter is required.
         */
        public Builder creationOption(final java.lang.String creationOption) {
            this.props.creationOption(creationOption);
            return this;
        }
        /**
         * Property creationOption: The method for creating an ApsaraDB for POLARDB cluster.
         * <p>
         * Valid values:
         * Normal: creates an ApsaraDB for POLARDB cluster.
         * CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
         * CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
         * for POLARDB cluster.
         * MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
         * CreateGdnStandby: Create a secondary cluster.
         * Default value: Normal.
         * Note:
         * When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
         * When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
         * <p>
         * @return {@code this}
         * @param creationOption Property creationOption: The method for creating an ApsaraDB for POLARDB cluster. This parameter is required.
         */
        public Builder creationOption(final com.aliyun.ros.cdk.core.IResolvable creationOption) {
            this.props.creationOption(creationOption);
            return this;
        }

        /**
         * Property dbClusterDescription: The description of the cluster.
         * <p>
         * The description must comply with the following rules:
         * It must start with a Chinese character or an English letter.
         * It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
         * It cannot start with http:// or https://.
         * It must be 2 to 256 characters in length.
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
         * The description must comply with the following rules:
         * It must start with a Chinese character or an English letter.
         * It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
         * It cannot start with http:// or https://.
         * It must be 2 to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param dbClusterDescription Property dbClusterDescription: The description of the cluster. This parameter is required.
         */
        public Builder dbClusterDescription(final com.aliyun.ros.cdk.core.IResolvable dbClusterDescription) {
            this.props.dbClusterDescription(dbClusterDescription);
            return this;
        }

        /**
         * Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterParameters Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster. This parameter is required.
         */
        public Builder dbClusterParameters(final com.aliyun.ros.cdk.core.IResolvable dbClusterParameters) {
            this.props.dbClusterParameters(dbClusterParameters);
            return this;
        }
        /**
         * Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterParameters Property dbClusterParameters: Modifies the parameters of a the PolarDB cluster. This parameter is required.
         */
        public Builder dbClusterParameters(final com.aliyun.ros.cdk.polardb.RosDBCluster.DBClusterParametersProperty dbClusterParameters) {
            this.props.dbClusterParameters(dbClusterParameters);
            return this;
        }

        /**
         * Property dbMinorVersion: The minor version of the cluster.
         * <p>
         * Valid values:
         * 8.0.2
         * 8.0.1
         * This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
         * <p>
         * @return {@code this}
         * @param dbMinorVersion Property dbMinorVersion: The minor version of the cluster. This parameter is required.
         */
        public Builder dbMinorVersion(final java.lang.String dbMinorVersion) {
            this.props.dbMinorVersion(dbMinorVersion);
            return this;
        }
        /**
         * Property dbMinorVersion: The minor version of the cluster.
         * <p>
         * Valid values:
         * 8.0.2
         * 8.0.1
         * This parameter is valid only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 8.0.
         * <p>
         * @return {@code this}
         * @param dbMinorVersion Property dbMinorVersion: The minor version of the cluster. This parameter is required.
         */
        public Builder dbMinorVersion(final com.aliyun.ros.cdk.core.IResolvable dbMinorVersion) {
            this.props.dbMinorVersion(dbMinorVersion);
            return this;
        }

        /**
         * Property dbNodeNum: The number of Standard Edition nodes.
         * <p>
         * Default value: 1. Valid values:
         * 1: only one primary node.
         * 2: one read-only node and one primary node.
         * <p>
         * @return {@code this}
         * @param dbNodeNum Property dbNodeNum: The number of Standard Edition nodes. This parameter is required.
         */
        public Builder dbNodeNum(final java.lang.Number dbNodeNum) {
            this.props.dbNodeNum(dbNodeNum);
            return this;
        }
        /**
         * Property dbNodeNum: The number of Standard Edition nodes.
         * <p>
         * Default value: 1. Valid values:
         * 1: only one primary node.
         * 2: one read-only node and one primary node.
         * <p>
         * @return {@code this}
         * @param dbNodeNum Property dbNodeNum: The number of Standard Edition nodes. This parameter is required.
         */
        public Builder dbNodeNum(final com.aliyun.ros.cdk.core.IResolvable dbNodeNum) {
            this.props.dbNodeNum(dbNodeNum);
            return this;
        }

        /**
         * Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located.
         * <p>
         * This is default value.
         * Other pickable value range is from -12:00 to +13:00, for example, 00:00.
         * Note: This parameter takes effect only when DBType is MySQL.
         * <p>
         * @return {@code this}
         * @param defaultTimeZone Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located. This parameter is required.
         */
        public Builder defaultTimeZone(final java.lang.String defaultTimeZone) {
            this.props.defaultTimeZone(defaultTimeZone);
            return this;
        }
        /**
         * Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located.
         * <p>
         * This is default value.
         * Other pickable value range is from -12:00 to +13:00, for example, 00:00.
         * Note: This parameter takes effect only when DBType is MySQL.
         * <p>
         * @return {@code this}
         * @param defaultTimeZone Property defaultTimeZone: Set up a time zone (UTC), the value range is as follows: System:  The default time zone is the same as the time zone where the region is located. This parameter is required.
         */
        public Builder defaultTimeZone(final com.aliyun.ros.cdk.core.IResolvable defaultTimeZone) {
            this.props.defaultTimeZone(defaultTimeZone);
            return this;
        }

        /**
         * Property gdnId: The ID of the Global Database Network (GDN).
         * <p>
         * Note: This parameter is required when the CreationOption is CreateGdnStandby.
         * <p>
         * @return {@code this}
         * @param gdnId Property gdnId: The ID of the Global Database Network (GDN). This parameter is required.
         */
        public Builder gdnId(final java.lang.String gdnId) {
            this.props.gdnId(gdnId);
            return this;
        }
        /**
         * Property gdnId: The ID of the Global Database Network (GDN).
         * <p>
         * Note: This parameter is required when the CreationOption is CreateGdnStandby.
         * <p>
         * @return {@code this}
         * @param gdnId Property gdnId: The ID of the Global Database Network (GDN). This parameter is required.
         */
        public Builder gdnId(final com.aliyun.ros.cdk.core.IResolvable gdnId) {
            this.props.gdnId(gdnId);
            return this;
        }

        /**
         * Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature.
         * <p>
         * Default value: ON. Valid values:
         * ON: enables the hot standby storage cluster feature.
         * OFF: disables the hot standby storage cluster feature
         * STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
         * The default value for Standard Edition clusters is STANDBY.
         * <p>
         * @return {@code this}
         * @param hotStandbyCluster Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature. This parameter is required.
         */
        public Builder hotStandbyCluster(final java.lang.String hotStandbyCluster) {
            this.props.hotStandbyCluster(hotStandbyCluster);
            return this;
        }
        /**
         * Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature.
         * <p>
         * Default value: ON. Valid values:
         * ON: enables the hot standby storage cluster feature.
         * OFF: disables the hot standby storage cluster feature
         * STANDBY: enables the hot standby storage cluster feature only for Standard Edition clusters.
         * The default value for Standard Edition clusters is STANDBY.
         * <p>
         * @return {@code this}
         * @param hotStandbyCluster Property hotStandbyCluster: Specifies whether to enable the hot standby storage cluster feature. This parameter is required.
         */
        public Builder hotStandbyCluster(final com.aliyun.ros.cdk.core.IResolvable hotStandbyCluster) {
            this.props.hotStandbyCluster(hotStandbyCluster);
            return this;
        }

        /**
         * Property loosePolarLogBin: Enable the Binlog function, the value range is as follows: ON: The cluster enables the Binlog function OFF: The cluster disables the Binlog function This parameter takes effect only when the parameter DBType is MySQL.
         * <p>
         * @return {@code this}
         * @param loosePolarLogBin Property loosePolarLogBin: Enable the Binlog function, the value range is as follows: ON: The cluster enables the Binlog function OFF: The cluster disables the Binlog function This parameter takes effect only when the parameter DBType is MySQL. This parameter is required.
         */
        public Builder loosePolarLogBin(final java.lang.String loosePolarLogBin) {
            this.props.loosePolarLogBin(loosePolarLogBin);
            return this;
        }
        /**
         * Property loosePolarLogBin: Enable the Binlog function, the value range is as follows: ON: The cluster enables the Binlog function OFF: The cluster disables the Binlog function This parameter takes effect only when the parameter DBType is MySQL.
         * <p>
         * @return {@code this}
         * @param loosePolarLogBin Property loosePolarLogBin: Enable the Binlog function, the value range is as follows: ON: The cluster enables the Binlog function OFF: The cluster disables the Binlog function This parameter takes effect only when the parameter DBType is MySQL. This parameter is required.
         */
        public Builder loosePolarLogBin(final com.aliyun.ros.cdk.core.IResolvable loosePolarLogBin) {
            this.props.loosePolarLogBin(loosePolarLogBin);
            return this;
        }

        /**
         * Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows: ON: The cluster starts the X-Engine enginen OFF: The cluster shuts down the X-Engine engine This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.
         * <p>
         * @return {@code this}
         * @param looseXEngine Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows: ON: The cluster starts the X-Engine enginen OFF: The cluster shuts down the X-Engine engine This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB. This parameter is required.
         */
        public Builder looseXEngine(final java.lang.String looseXEngine) {
            this.props.looseXEngine(looseXEngine);
            return this;
        }
        /**
         * Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows: ON: The cluster starts the X-Engine enginen OFF: The cluster shuts down the X-Engine engine This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB.
         * <p>
         * @return {@code this}
         * @param looseXEngine Property looseXEngine: Enable the X-Engine storage engine function, the value range is as follows: ON: The cluster starts the X-Engine enginen OFF: The cluster shuts down the X-Engine engine This parameter takes effect only when the parameter CreationOption is not equal to CreateGdnStandby, DBType is MySQL and DBVersion is 8.0. The memory specification of the node with X-Engine enabled must be greater than or equal to 16 GB. This parameter is required.
         */
        public Builder looseXEngine(final com.aliyun.ros.cdk.core.IResolvable looseXEngine) {
            this.props.looseXEngine(looseXEngine);
            return this;
        }

        /**
         * Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.
         * <p>
         * This parameter takes effect only when the parameter LooseXEngine is ON.
         * <p>
         * @return {@code this}
         * @param looseXEngineUseMemoryPct Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90. This parameter is required.
         */
        public Builder looseXEngineUseMemoryPct(final java.lang.Number looseXEngineUseMemoryPct) {
            this.props.looseXEngineUseMemoryPct(looseXEngineUseMemoryPct);
            return this;
        }
        /**
         * Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90.
         * <p>
         * This parameter takes effect only when the parameter LooseXEngine is ON.
         * <p>
         * @return {@code this}
         * @param looseXEngineUseMemoryPct Property looseXEngineUseMemoryPct: Set the ratio of enabling the X-Engine storage engine, an integer ranging from 10 to 90. This parameter is required.
         */
        public Builder looseXEngineUseMemoryPct(final com.aliyun.ros.cdk.core.IResolvable looseXEngineUseMemoryPct) {
            this.props.looseXEngineUseMemoryPct(looseXEngineUseMemoryPct);
            return this;
        }

        /**
         * Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1.
         * <p>
         * Note: This parameter takes effect only when the value of DBType is MySQL.
         * <p>
         * @return {@code this}
         * @param lowerCaseTableNames Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1. This parameter is required.
         */
        public Builder lowerCaseTableNames(final java.lang.Number lowerCaseTableNames) {
            this.props.lowerCaseTableNames(lowerCaseTableNames);
            return this;
        }
        /**
         * Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1.
         * <p>
         * Note: This parameter takes effect only when the value of DBType is MySQL.
         * <p>
         * @return {@code this}
         * @param lowerCaseTableNames Property lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows: 1: Not case sensitive0: case sensitive The default value is 1. This parameter is required.
         */
        public Builder lowerCaseTableNames(final com.aliyun.ros.cdk.core.IResolvable lowerCaseTableNames) {
            this.props.lowerCaseTableNames(lowerCaseTableNames);
            return this;
        }

        /**
         * Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ.
         * <p>
         * Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
         * <p>
         * @return {@code this}
         * @param maintainTime Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ. This parameter is required.
         */
        public Builder maintainTime(final java.lang.String maintainTime) {
            this.props.maintainTime(maintainTime);
            return this;
        }
        /**
         * Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ.
         * <p>
         * Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
         * <p>
         * @return {@code this}
         * @param maintainTime Property maintainTime: The maintainable time of the cluster: Format: HH: mmZ- HH: mmZ. This parameter is required.
         */
        public Builder maintainTime(final com.aliyun.ros.cdk.core.IResolvable maintainTime) {
            this.props.maintainTime(maintainTime);
            return this;
        }

        /**
         * Property parameterGroupId: The ID of the parameter template.
         * <p>
         * You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
         * <p>
         * @return {@code this}
         * @param parameterGroupId Property parameterGroupId: The ID of the parameter template. This parameter is required.
         */
        public Builder parameterGroupId(final java.lang.String parameterGroupId) {
            this.props.parameterGroupId(parameterGroupId);
            return this;
        }
        /**
         * Property parameterGroupId: The ID of the parameter template.
         * <p>
         * You can call the DescribeParameterGroups operation to query the details of all parameter templates of a specified region, such as the ID of a parameter template.
         * <p>
         * @return {@code this}
         * @param parameterGroupId Property parameterGroupId: The ID of the parameter template. This parameter is required.
         */
        public Builder parameterGroupId(final com.aliyun.ros.cdk.core.IResolvable parameterGroupId) {
            this.props.parameterGroupId(parameterGroupId);
            return this;
        }

        /**
         * Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36 If periodUnit is year, the valid range is 1, 2, 3.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36 If periodUnit is year, the valid range is 1, 2, 3. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36 If periodUnit is year, the valid range is 1, 2, 3.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the clusterIf PeriodUnit is month, the valid range is 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36 If periodUnit is year, the valid range is 1, 2, 3. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the subscription duration.
         * <p>
         * Valid values:
         * Month
         * Year
         * Default value: Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property proxyClass: The specifications of the Standard Edition PolarProxy.
         * <p>
         * Valid values:
         * polar.maxscale.g2.medium.c: 2 cores
         * polar.maxscale.g2.large.c: 4 cores
         * polar.maxscale.g2.xlarge.c: 8 cores
         * polar.maxscale.g2.2xlarge.c: 16 cores
         * polar.maxscale.g2.3xlarge.c: 24 cores
         * polar.maxscale.g2.4xlarge.c: 32 cores
         * polar.maxscale.g2.8xlarge.c: 64 cores
         * <p>
         * @return {@code this}
         * @param proxyClass Property proxyClass: The specifications of the Standard Edition PolarProxy. This parameter is required.
         */
        public Builder proxyClass(final java.lang.String proxyClass) {
            this.props.proxyClass(proxyClass);
            return this;
        }
        /**
         * Property proxyClass: The specifications of the Standard Edition PolarProxy.
         * <p>
         * Valid values:
         * polar.maxscale.g2.medium.c: 2 cores
         * polar.maxscale.g2.large.c: 4 cores
         * polar.maxscale.g2.xlarge.c: 8 cores
         * polar.maxscale.g2.2xlarge.c: 16 cores
         * polar.maxscale.g2.3xlarge.c: 24 cores
         * polar.maxscale.g2.4xlarge.c: 32 cores
         * polar.maxscale.g2.8xlarge.c: 64 cores
         * <p>
         * @return {@code this}
         * @param proxyClass Property proxyClass: The specifications of the Standard Edition PolarProxy. This parameter is required.
         */
        public Builder proxyClass(final com.aliyun.ros.cdk.core.IResolvable proxyClass) {
            this.props.proxyClass(proxyClass);
            return this;
        }

        /**
         * Property proxyType: The type of PolarProxy.
         * <p>
         * Default value: OFF. Valid values:
         * OFF: disables PolarProxy.
         * EXCLUSIVE: Dedicated Enterprise Edition
         * GENERAL: Standard Enterprise Edition
         * <p>
         * @return {@code this}
         * @param proxyType Property proxyType: The type of PolarProxy. This parameter is required.
         */
        public Builder proxyType(final java.lang.String proxyType) {
            this.props.proxyType(proxyType);
            return this;
        }
        /**
         * Property proxyType: The type of PolarProxy.
         * <p>
         * Default value: OFF. Valid values:
         * OFF: disables PolarProxy.
         * EXCLUSIVE: Dedicated Enterprise Edition
         * GENERAL: Standard Enterprise Edition
         * <p>
         * @return {@code this}
         * @param proxyType Property proxyType: The type of PolarProxy. This parameter is required.
         */
        public Builder proxyType(final com.aliyun.ros.cdk.core.IResolvable proxyType) {
            this.props.proxyType(proxyType);
            return this;
        }

        /**
         * Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster.
         * <p>
         * Normal: manually renews the cluster.
         * NotRenewal: does not renew the cluster.
         * Default value: Normal.
         * Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
         * but only sends an SMS message three days before the cluster expires to remind you
         * that the cluster is not renewed.
         * <p>
         * @return {@code this}
         * @param renewalStatus Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster. This parameter is required.
         */
        public Builder renewalStatus(final java.lang.String renewalStatus) {
            this.props.renewalStatus(renewalStatus);
            return this;
        }
        /**
         * Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster.
         * <p>
         * Normal: manually renews the cluster.
         * NotRenewal: does not renew the cluster.
         * Default value: Normal.
         * Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
         * but only sends an SMS message three days before the cluster expires to remind you
         * that the cluster is not renewed.
         * <p>
         * @return {@code this}
         * @param renewalStatus Property renewalStatus: The auto renewal status of the cluster Valid values: AutoRenewal: automatically renews the cluster. This parameter is required.
         */
        public Builder renewalStatus(final com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.props.renewalStatus(renewalStatus);
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
         * Property restartMasterNode: Whether to restart the master node.
         * <p>
         * @return {@code this}
         * @param restartMasterNode Property restartMasterNode: Whether to restart the master node. This parameter is required.
         */
        public Builder restartMasterNode(final java.lang.Boolean restartMasterNode) {
            this.props.restartMasterNode(restartMasterNode);
            return this;
        }
        /**
         * Property restartMasterNode: Whether to restart the master node.
         * <p>
         * @return {@code this}
         * @param restartMasterNode Property restartMasterNode: Whether to restart the master node. This parameter is required.
         */
        public Builder restartMasterNode(final com.aliyun.ros.cdk.core.IResolvable restartMasterNode) {
            this.props.restartMasterNode(restartMasterNode);
            return this;
        }

        /**
         * Property scaleMax: Maximum limit of single-node scaling.
         * <p>
         * @return {@code this}
         * @param scaleMax Property scaleMax: Maximum limit of single-node scaling. This parameter is required.
         */
        public Builder scaleMax(final java.lang.Number scaleMax) {
            this.props.scaleMax(scaleMax);
            return this;
        }
        /**
         * Property scaleMax: Maximum limit of single-node scaling.
         * <p>
         * @return {@code this}
         * @param scaleMax Property scaleMax: Maximum limit of single-node scaling. This parameter is required.
         */
        public Builder scaleMax(final com.aliyun.ros.cdk.core.IResolvable scaleMax) {
            this.props.scaleMax(scaleMax);
            return this;
        }

        /**
         * Property scaleMin: Minimum limit of single-node scaling.
         * <p>
         * @return {@code this}
         * @param scaleMin Property scaleMin: Minimum limit of single-node scaling. This parameter is required.
         */
        public Builder scaleMin(final java.lang.Number scaleMin) {
            this.props.scaleMin(scaleMin);
            return this;
        }
        /**
         * Property scaleMin: Minimum limit of single-node scaling.
         * <p>
         * @return {@code this}
         * @param scaleMin Property scaleMin: Minimum limit of single-node scaling. This parameter is required.
         */
        public Builder scaleMin(final com.aliyun.ros.cdk.core.IResolvable scaleMin) {
            this.props.scaleMin(scaleMin);
            return this;
        }

        /**
         * Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.
         * <p>
         * @return {@code this}
         * @param scaleRoNumMax Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes. This parameter is required.
         */
        public Builder scaleRoNumMax(final java.lang.Number scaleRoNumMax) {
            this.props.scaleRoNumMax(scaleRoNumMax);
            return this;
        }
        /**
         * Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes.
         * <p>
         * @return {@code this}
         * @param scaleRoNumMax Property scaleRoNumMax: The maximum scaling limit for the number of read-only nodes. This parameter is required.
         */
        public Builder scaleRoNumMax(final com.aliyun.ros.cdk.core.IResolvable scaleRoNumMax) {
            this.props.scaleRoNumMax(scaleRoNumMax);
            return this;
        }

        /**
         * Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.
         * <p>
         * @return {@code this}
         * @param scaleRoNumMin Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes. This parameter is required.
         */
        public Builder scaleRoNumMin(final java.lang.Number scaleRoNumMin) {
            this.props.scaleRoNumMin(scaleRoNumMin);
            return this;
        }
        /**
         * Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes.
         * <p>
         * @return {@code this}
         * @param scaleRoNumMin Property scaleRoNumMin: The minimum scaling limit for the number of read-only nodes. This parameter is required.
         */
        public Builder scaleRoNumMin(final com.aliyun.ros.cdk.core.IResolvable scaleRoNumMin) {
            this.props.scaleRoNumMin(scaleRoNumMin);
            return this;
        }

        /**
         * Property securityGroupIds: The ID of the security group.
         * <p>
         * You can add up to three security groups to a cluster.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The ID of the security group. This parameter is required.
         */
        public Builder securityGroupIds(final com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }
        /**
         * Property securityGroupIds: The ID of the security group.
         * <p>
         * You can add up to three security groups to a cluster.
         * <p>
         * @return {@code this}
         * @param securityGroupIds Property securityGroupIds: The ID of the security group. This parameter is required.
         */
        public Builder securityGroupIds(final java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.props.securityGroupIds(securityGroupIds);
            return this;
        }

        /**
         * Property securityIpList: The whitelist of the Apsara PolarDB cluster.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The whitelist of the Apsara PolarDB cluster. This parameter is required.
         */
        public Builder securityIpList(final java.lang.String securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: The whitelist of the Apsara PolarDB cluster.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The whitelist of the Apsara PolarDB cluster. This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * Property serverlessType: Serverless type.
         * <p>
         * @return {@code this}
         * @param serverlessType Property serverlessType: Serverless type. This parameter is required.
         */
        public Builder serverlessType(final java.lang.String serverlessType) {
            this.props.serverlessType(serverlessType);
            return this;
        }
        /**
         * Property serverlessType: Serverless type.
         * <p>
         * @return {@code this}
         * @param serverlessType Property serverlessType: Serverless type. This parameter is required.
         */
        public Builder serverlessType(final com.aliyun.ros.cdk.core.IResolvable serverlessType) {
            this.props.serverlessType(serverlessType);
            return this;
        }

        /**
         * Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
         * <p>
         * Note
         * This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
         * This parameter is required if the CreationOption parameter is not set to Normal.
         * <p>
         * @return {@code this}
         * @param sourceResourceId Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster. This parameter is required.
         */
        public Builder sourceResourceId(final java.lang.String sourceResourceId) {
            this.props.sourceResourceId(sourceResourceId);
            return this;
        }
        /**
         * Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
         * <p>
         * Note
         * This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
         * This parameter is required if the CreationOption parameter is not set to Normal.
         * <p>
         * @return {@code this}
         * @param sourceResourceId Property sourceResourceId: The ID of the source RDS instance or source POLARDB cluster. This parameter is required.
         */
        public Builder sourceResourceId(final com.aliyun.ros.cdk.core.IResolvable sourceResourceId) {
            this.props.sourceResourceId(sourceResourceId);
            return this;
        }

        /**
         * Property standbyAz: The zone where the hot standby storage cluster is stored.
         * <p>
         * This is valid for Standard Edition clusters of Multi-zone Edition.
         * This parameter takes effect only when the multi-zone data consistency feature is enabled.
         * <p>
         * @return {@code this}
         * @param standbyAz Property standbyAz: The zone where the hot standby storage cluster is stored. This parameter is required.
         */
        public Builder standbyAz(final java.lang.String standbyAz) {
            this.props.standbyAz(standbyAz);
            return this;
        }
        /**
         * Property standbyAz: The zone where the hot standby storage cluster is stored.
         * <p>
         * This is valid for Standard Edition clusters of Multi-zone Edition.
         * This parameter takes effect only when the multi-zone data consistency feature is enabled.
         * <p>
         * @return {@code this}
         * @param standbyAz Property standbyAz: The zone where the hot standby storage cluster is stored. This parameter is required.
         */
        public Builder standbyAz(final com.aliyun.ros.cdk.core.IResolvable standbyAz) {
            this.props.standbyAz(standbyAz);
            return this;
        }

        /**
         * Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters.
         * <p>
         * The value range is as follows:
         * Enable: Enable automatic storage scale.
         * Disable: Disable automatic storage scale.
         * <p>
         * @return {@code this}
         * @param storageAutoScale Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters. This parameter is required.
         */
        public Builder storageAutoScale(final java.lang.String storageAutoScale) {
            this.props.storageAutoScale(storageAutoScale);
            return this;
        }
        /**
         * Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters.
         * <p>
         * The value range is as follows:
         * Enable: Enable automatic storage scale.
         * Disable: Disable automatic storage scale.
         * <p>
         * @return {@code this}
         * @param storageAutoScale Property storageAutoScale: Whether to enable automatic storage scale for standard version clusters. This parameter is required.
         */
        public Builder storageAutoScale(final com.aliyun.ros.cdk.core.IResolvable storageAutoScale) {
            this.props.storageAutoScale(storageAutoScale);
            return this;
        }

        /**
         * Property storagePayType: The storage pay type.
         * <p>
         * @return {@code this}
         * @param storagePayType Property storagePayType: The storage pay type. This parameter is required.
         */
        public Builder storagePayType(final java.lang.String storagePayType) {
            this.props.storagePayType(storagePayType);
            return this;
        }
        /**
         * Property storagePayType: The storage pay type.
         * <p>
         * @return {@code this}
         * @param storagePayType Property storagePayType: The storage pay type. This parameter is required.
         */
        public Builder storagePayType(final com.aliyun.ros.cdk.core.IResolvable storagePayType) {
            this.props.storagePayType(storagePayType);
            return this;
        }

        /**
         * Property storageSpace: The storage space that uses the subscription billing method.
         * <p>
         * Unit: GB.
         * Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
         * <p>
         * @return {@code this}
         * @param storageSpace Property storageSpace: The storage space that uses the subscription billing method. This parameter is required.
         */
        public Builder storageSpace(final java.lang.Number storageSpace) {
            this.props.storageSpace(storageSpace);
            return this;
        }
        /**
         * Property storageSpace: The storage space that uses the subscription billing method.
         * <p>
         * Unit: GB.
         * Valid values for PolarDB for MySQL Standard Edition: 20 to 32000.
         * <p>
         * @return {@code this}
         * @param storageSpace Property storageSpace: The storage space that uses the subscription billing method. This parameter is required.
         */
        public Builder storageSpace(final com.aliyun.ros.cdk.core.IResolvable storageSpace) {
            this.props.storageSpace(storageSpace);
            return this;
        }

        /**
         * Property storageType: The storage type.
         * <p>
         * Valid values for Enterprise Edition:
         * PSL5
         * PSL4
         * Valid values for Standard Edition:
         * ESSDPL1
         * ESSDPL2
         * ESSDPL3
         * This parameter is invalid for serverless clusters.
         * <p>
         * @return {@code this}
         * @param storageType Property storageType: The storage type. This parameter is required.
         */
        public Builder storageType(final java.lang.String storageType) {
            this.props.storageType(storageType);
            return this;
        }
        /**
         * Property storageType: The storage type.
         * <p>
         * Valid values for Enterprise Edition:
         * PSL5
         * PSL4
         * Valid values for Standard Edition:
         * ESSDPL1
         * ESSDPL2
         * ESSDPL3
         * This parameter is invalid for serverless clusters.
         * <p>
         * @return {@code this}
         * @param storageType Property storageType: The storage type. This parameter is required.
         */
        public Builder storageType(final com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.props.storageType(storageType);
            return this;
        }

        /**
         * Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.
         * <p>
         * The maximum value is 32000.
         * <p>
         * @return {@code this}
         * @param storageUpperBound Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB. This parameter is required.
         */
        public Builder storageUpperBound(final java.lang.Number storageUpperBound) {
            this.props.storageUpperBound(storageUpperBound);
            return this;
        }
        /**
         * Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB.
         * <p>
         * The maximum value is 32000.
         * <p>
         * @return {@code this}
         * @param storageUpperBound Property storageUpperBound: Set the upper limit of automatic scale of standard cluster storage, unit: GB. This parameter is required.
         */
        public Builder storageUpperBound(final com.aliyun.ros.cdk.core.IResolvable storageUpperBound) {
            this.props.storageUpperBound(storageUpperBound);
            return this;
        }

        /**
         * Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature.
         * <p>
         * Valid values:
         * ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
         * OFF: disables the multi-zone data consistency feature.
         * <p>
         * @return {@code this}
         * @param strictConsistency Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature. This parameter is required.
         */
        public Builder strictConsistency(final java.lang.String strictConsistency) {
            this.props.strictConsistency(strictConsistency);
            return this;
        }
        /**
         * Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature.
         * <p>
         * Valid values:
         * ON: enables the multi-zone data consistency feature, which is valid for Standard Edition clusters of Multi-zone Edition.
         * OFF: disables the multi-zone data consistency feature.
         * <p>
         * @return {@code this}
         * @param strictConsistency Property strictConsistency: Specifies whether to enable the multi-zone data consistency feature. This parameter is required.
         */
        public Builder strictConsistency(final com.aliyun.ros.cdk.core.IResolvable strictConsistency) {
            this.props.strictConsistency(strictConsistency);
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
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
         * <p>
         * Valid values:
         * true: enable TDE
         * false: disable TDE (default)
         * Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
         * <p>
         * @return {@code this}
         * @param tdeStatus Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). This parameter is required.
         */
        public Builder tdeStatus(final java.lang.Boolean tdeStatus) {
            this.props.tdeStatus(tdeStatus);
            return this;
        }
        /**
         * Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).
         * <p>
         * Valid values:
         * true: enable TDE
         * false: disable TDE (default)
         * Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
         * <p>
         * @return {@code this}
         * @param tdeStatus Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). This parameter is required.
         */
        public Builder tdeStatus(final com.aliyun.ros.cdk.core.IResolvable tdeStatus) {
            this.props.tdeStatus(tdeStatus);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC to connect to.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC to connect to. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC to connect to.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC to connect to. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the VSwitch to connect to.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch to connect to. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the VSwitch to connect to.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch to connect to. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the cluster.
         * <p>
         * You can call the DescribeRegions operation to query available zones.
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
         * You can call the DescribeRegions operation to query available zones.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the cluster. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.DBCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.DBCluster build() {
            return new com.aliyun.ros.cdk.polardb.DBCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
