package com.aliyun.ros.cdk.polardb;

/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:29.809Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBCluster")
public class DBCluster extends com.aliyun.ros.cdk.core.Resource {

    protected DBCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::POLARDB::DBCluster`.
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
    public DBCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::POLARDB::DBCluster`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrimaryEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryEndpointId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * PostgreSQL: 11
         * Oracle: 11
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
         * PostgreSQL: 11
         * Oracle: 11
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.polardb.DBCluster}.
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
