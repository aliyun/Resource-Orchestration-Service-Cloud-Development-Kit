package com.aliyun.ros.cdk.polardb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::POLARDB::DBCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:41:17.518Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBCluster")
public class DBCluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.polardb.IDBCluster {

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
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClusterConnectionString: The cluster connection string of the db cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ColdStorageInstanceId: The ID of the cold storage instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrColdStorageInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrColdStorageInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomConnectionStrings() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomConnectionStrings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCustomEndpointIds() {
        return software.amazon.jsii.Kernel.get(this, "attrCustomEndpointIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBClusterDescription: The description of the db cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBNodeIds: The ID list of cluster nodes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderId: The Order ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrimaryConnectionString: The primary connection string of the db cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryConnectionStrings() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryConnectionStrings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryEndpointIds() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryEndpointIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.DBClusterProps.class));
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
         * Property dbNodeClass: The node specification.
         * <p>
         * For more information, see the following topics:
         * <p>
         * <ul>
         * <li>PolarDB for MySQL: Compute node specifications</li>
         * <li>PolarDB for PostgreSQL (compatible with Oracle): Compute node
         * specifications</li>
         * <li>PolarDB for PostgreSQL: Compute node specifications</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>To create a PolarDB for MySQL Cluster Edition serverless cluster, set this
         * parameter to polar.mysql.sl.small.</li>
         * <li>To create a PolarDB for MySQL Standard Edition serverless cluster, set this
         * parameter to polar.mysql.sl.small.c.</li>
         * <li>To create a PolarDB for PostgreSQL Cluster Edition serverless cluster, set
         * this parameter to polar.pg.sl.small.</li>
         * <li>To create a PolarDB for PostgreSQL Standard Edition serverless cluster, set
         * this parameter to polar.pg.sl.small.c.</li>
         * <li>To create a PolarDB for PostgreSQL (compatible with Oracle) serverless
         * cluster, set this parameter to polar.o.sl.small.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dbNodeClass Property dbNodeClass: The node specification. This parameter is required.
         */
        public Builder dbNodeClass(final java.lang.String dbNodeClass) {
            this.props.dbNodeClass(dbNodeClass);
            return this;
        }
        /**
         * Property dbNodeClass: The node specification.
         * <p>
         * For more information, see the following topics:
         * <p>
         * <ul>
         * <li>PolarDB for MySQL: Compute node specifications</li>
         * <li>PolarDB for PostgreSQL (compatible with Oracle): Compute node
         * specifications</li>
         * <li>PolarDB for PostgreSQL: Compute node specifications</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>To create a PolarDB for MySQL Cluster Edition serverless cluster, set this
         * parameter to polar.mysql.sl.small.</li>
         * <li>To create a PolarDB for MySQL Standard Edition serverless cluster, set this
         * parameter to polar.mysql.sl.small.c.</li>
         * <li>To create a PolarDB for PostgreSQL Cluster Edition serverless cluster, set
         * this parameter to polar.pg.sl.small.</li>
         * <li>To create a PolarDB for PostgreSQL Standard Edition serverless cluster, set
         * this parameter to polar.pg.sl.small.c.</li>
         * <li>To create a PolarDB for PostgreSQL (compatible with Oracle) serverless
         * cluster, set this parameter to polar.o.sl.small.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dbNodeClass Property dbNodeClass: The node specification. This parameter is required.
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
         * Property dbVersion: The version of the database engine.
         * <p>
         * <ul>
         * <li>Valid values for MySQL:</li>
         * <li>5.6</li>
         * <li>5.7</li>
         * <li>8.0</li>
         * <li>Valid values for PostgreSQL:</li>
         * <li>11</li>
         * <li>14</li>
         * <li>15</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you create a serverless cluster for PolarDB for PostgreSQL, you must set
         * this parameter to <code>14</code>.
         * <p>
         * <ul>
         * <li>Valid values for Oracle:</li>
         * <li>11</li>
         * <li>14</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dbVersion Property dbVersion: The version of the database engine. This parameter is required.
         */
        public Builder dbVersion(final java.lang.String dbVersion) {
            this.props.dbVersion(dbVersion);
            return this;
        }
        /**
         * Property dbVersion: The version of the database engine.
         * <p>
         * <ul>
         * <li>Valid values for MySQL:</li>
         * <li>5.6</li>
         * <li>5.7</li>
         * <li>8.0</li>
         * <li>Valid values for PostgreSQL:</li>
         * <li>11</li>
         * <li>14</li>
         * <li>15</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you create a serverless cluster for PolarDB for PostgreSQL, you must set
         * this parameter to <code>14</code>.
         * <p>
         * <ul>
         * <li>Valid values for Oracle:</li>
         * <li>11</li>
         * <li>14</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dbVersion Property dbVersion: The version of the database engine. This parameter is required.
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
         * Property allowShutDown: Specifies whether to enable pause on inactivity.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: enables pause on inactivity.</li>
         * <li>false (default): disables pause on inactivity.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter is supported only for serverless clusters.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param allowShutDown Property allowShutDown: Specifies whether to enable pause on inactivity. This parameter is required.
         */
        public Builder allowShutDown(final java.lang.Boolean allowShutDown) {
            this.props.allowShutDown(allowShutDown);
            return this;
        }
        /**
         * Property allowShutDown: Specifies whether to enable pause on inactivity.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>true: enables pause on inactivity.</li>
         * <li>false (default): disables pause on inactivity.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter is supported only for serverless clusters.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param allowShutDown Property allowShutDown: Specifies whether to enable pause on inactivity. This parameter is required.
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
         * Property backupRetentionPolicyOnClusterDeletion: The backup retention policy to apply when the cluster is deleted.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>ALL: retains all backup sets.</li>
         * <li>LATEST: retains only the last backup set. An automatic backup is performed
         * before the cluster is deleted.</li>
         * <li>NONE: does not retain backup sets.
         * Default value: NONE.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>This parameter is valid only if DBType is set to MySQL.</li>
         * <li>Serverless clusters do not support this parameter.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param backupRetentionPolicyOnClusterDeletion Property backupRetentionPolicyOnClusterDeletion: The backup retention policy to apply when the cluster is deleted. This parameter is required.
         */
        public Builder backupRetentionPolicyOnClusterDeletion(final java.lang.String backupRetentionPolicyOnClusterDeletion) {
            this.props.backupRetentionPolicyOnClusterDeletion(backupRetentionPolicyOnClusterDeletion);
            return this;
        }
        /**
         * Property backupRetentionPolicyOnClusterDeletion: The backup retention policy to apply when the cluster is deleted.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>ALL: retains all backup sets.</li>
         * <li>LATEST: retains only the last backup set. An automatic backup is performed
         * before the cluster is deleted.</li>
         * <li>NONE: does not retain backup sets.
         * Default value: NONE.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>This parameter is valid only if DBType is set to MySQL.</li>
         * <li>Serverless clusters do not support this parameter.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param backupRetentionPolicyOnClusterDeletion Property backupRetentionPolicyOnClusterDeletion: The backup retention policy to apply when the cluster is deleted. This parameter is required.
         */
        public Builder backupRetentionPolicyOnClusterDeletion(final com.aliyun.ros.cdk.core.IResolvable backupRetentionPolicyOnClusterDeletion) {
            this.props.backupRetentionPolicyOnClusterDeletion(backupRetentionPolicyOnClusterDeletion);
            return this;
        }

        /**
         * Property cloneDataPoint: The point in time for the clone.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>LATEST: The latest point in time.</li>
         * <li>BackupID: The ID of a historical backup set.</li>
         * <li>Timestamp: A specific point in time in the <code>YYYY-MM-DDThh:mm:ssZ</code> format. The
         * time must be in UTC.
         * Default value: LATEST.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you set CreationOption to CloneFromRDS, you can set this parameter only to
         * LATEST.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param cloneDataPoint Property cloneDataPoint: The point in time for the clone. This parameter is required.
         */
        public Builder cloneDataPoint(final java.lang.String cloneDataPoint) {
            this.props.cloneDataPoint(cloneDataPoint);
            return this;
        }
        /**
         * Property cloneDataPoint: The point in time for the clone.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>LATEST: The latest point in time.</li>
         * <li>BackupID: The ID of a historical backup set.</li>
         * <li>Timestamp: A specific point in time in the <code>YYYY-MM-DDThh:mm:ssZ</code> format. The
         * time must be in UTC.
         * Default value: LATEST.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you set CreationOption to CloneFromRDS, you can set this parameter only to
         * LATEST.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param cloneDataPoint Property cloneDataPoint: The point in time for the clone. This parameter is required.
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
         * Property creationCategory: The edition of the cluster.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Normal: Cluster Edition (default)</li>
         * <li>Basic: Single-node Edition</li>
         * <li>ArchiveNormal: X-Engine Edition</li>
         * <li>NormalMultimaster: Multi-master Cluster Edition</li>
         * <li>SENormal: Standard Edition</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>The Basic edition is supported for PolarDB for MySQL 5.6, 5.7, and 8.0;
         * PolarDB for PostgreSQL 14; and PolarDB for PostgreSQL (compatible with Oracle)
         * 2.0.</li>
         * <li>The ArchiveNormal and NormalMultimaster editions are supported for PolarDB
         * for MySQL 8.0.</li>
         * <li>The SENormal edition is supported for PolarDB for MySQL 5.6, 5.7, and 8.0 and
         * PolarDB for PostgreSQL 14.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param creationCategory Property creationCategory: The edition of the cluster. This parameter is required.
         */
        public Builder creationCategory(final java.lang.String creationCategory) {
            this.props.creationCategory(creationCategory);
            return this;
        }
        /**
         * Property creationCategory: The edition of the cluster.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Normal: Cluster Edition (default)</li>
         * <li>Basic: Single-node Edition</li>
         * <li>ArchiveNormal: X-Engine Edition</li>
         * <li>NormalMultimaster: Multi-master Cluster Edition</li>
         * <li>SENormal: Standard Edition</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>The Basic edition is supported for PolarDB for MySQL 5.6, 5.7, and 8.0;
         * PolarDB for PostgreSQL 14; and PolarDB for PostgreSQL (compatible with Oracle)
         * 2.0.</li>
         * <li>The ArchiveNormal and NormalMultimaster editions are supported for PolarDB
         * for MySQL 8.0.</li>
         * <li>The SENormal edition is supported for PolarDB for MySQL 5.6, 5.7, and 8.0 and
         * PolarDB for PostgreSQL 14.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param creationCategory Property creationCategory: The edition of the cluster. This parameter is required.
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
         * RecoverFromRecyclebin: Recovers data from the freed PolarDB cluster to the new PolarDB cluster.
         * UpgradeFromPolarDB: Upgrade migration from PolarDB.
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
         * RecoverFromRecyclebin: Recovers data from the freed PolarDB cluster to the new PolarDB cluster.
         * UpgradeFromPolarDB: Upgrade migration from PolarDB.
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
         * Property dbNodeNum: The number of nodes for a Standard Edition or Enterprise Edition cluster.
         * <p>
         * Valid
         * values:
         * <p>
         * <ul>
         * <li>Standard Edition: 1 to 8. A cluster of this edition includes one read/write
         * node and up to seven read-only nodes.</li>
         * <li>Enterprise Edition: 1 to 16. A cluster of this edition includes one read/write
         * node and up to 15 read-only nodes.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>By default, an Enterprise Edition cluster has two nodes and a Standard
         * Edition cluster has one node.</li>
         * <li>This parameter is supported only for PolarDB for MySQL.</li>
         * <li>You cannot change the number of nodes in a Multi-master Cluster Edition
         * cluster.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dbNodeNum Property dbNodeNum: The number of nodes for a Standard Edition or Enterprise Edition cluster. This parameter is required.
         */
        public Builder dbNodeNum(final java.lang.Number dbNodeNum) {
            this.props.dbNodeNum(dbNodeNum);
            return this;
        }
        /**
         * Property dbNodeNum: The number of nodes for a Standard Edition or Enterprise Edition cluster.
         * <p>
         * Valid
         * values:
         * <p>
         * <ul>
         * <li>Standard Edition: 1 to 8. A cluster of this edition includes one read/write
         * node and up to seven read-only nodes.</li>
         * <li>Enterprise Edition: 1 to 16. A cluster of this edition includes one read/write
         * node and up to 15 read-only nodes.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>By default, an Enterprise Edition cluster has two nodes and a Standard
         * Edition cluster has one node.</li>
         * <li>This parameter is supported only for PolarDB for MySQL.</li>
         * <li>You cannot change the number of nodes in a Multi-master Cluster Edition
         * cluster.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dbNodeNum Property dbNodeNum: The number of nodes for a Standard Edition or Enterprise Edition cluster. This parameter is required.
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
         * Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.
         * <p>
         * Default is false.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.
         * <p>
         * Default is false.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
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
         * Property hotStandbyCluster: Specifies whether to enable the hot standby cluster feature.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>ON (default): enables a hot standby storage cluster.</li>
         * <li>OFF: disables the hot standby cluster feature.</li>
         * <li>STANDBY: enables a hot standby cluster.</li>
         * <li>EQUAL: enables hot standby for both storage and computing resources.</li>
         * <li>3AZ: enables multi-AZ strong consistency.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * The value STANDBY is valid only for PolarDB for PostgreSQL.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param hotStandbyCluster Property hotStandbyCluster: Specifies whether to enable the hot standby cluster feature. This parameter is required.
         */
        public Builder hotStandbyCluster(final java.lang.String hotStandbyCluster) {
            this.props.hotStandbyCluster(hotStandbyCluster);
            return this;
        }
        /**
         * Property hotStandbyCluster: Specifies whether to enable the hot standby cluster feature.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>ON (default): enables a hot standby storage cluster.</li>
         * <li>OFF: disables the hot standby cluster feature.</li>
         * <li>STANDBY: enables a hot standby cluster.</li>
         * <li>EQUAL: enables hot standby for both storage and computing resources.</li>
         * <li>3AZ: enables multi-AZ strong consistency.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * The value STANDBY is valid only for PolarDB for PostgreSQL.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param hotStandbyCluster Property hotStandbyCluster: Specifies whether to enable the hot standby cluster feature. This parameter is required.
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
         * Property looseXEngine: Specifies whether to enable the X-Engine storage engine.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>ON: enables the X-Engine storage engine.</li>
         * <li>OFF: disables the X-Engine storage engine.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter is valid only if the CreationOption parameter is not set to
         * CreateGdnStandby, DBType is set to MySQL, and DBVersion is set to 8.0. To enable
         * the X-Engine storage engine, the node must have at least 8 GB of memory.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param looseXEngine Property looseXEngine: Specifies whether to enable the X-Engine storage engine. This parameter is required.
         */
        public Builder looseXEngine(final java.lang.String looseXEngine) {
            this.props.looseXEngine(looseXEngine);
            return this;
        }
        /**
         * Property looseXEngine: Specifies whether to enable the X-Engine storage engine.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>ON: enables the X-Engine storage engine.</li>
         * <li>OFF: disables the X-Engine storage engine.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * This parameter is valid only if the CreationOption parameter is not set to
         * CreateGdnStandby, DBType is set to MySQL, and DBVersion is set to 8.0. To enable
         * the X-Engine storage engine, the node must have at least 8 GB of memory.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param looseXEngine Property looseXEngine: Specifies whether to enable the X-Engine storage engine. This parameter is required.
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
         * Property provisionedIops: The provisioned read/write IOPS of the ESSD AutoPL cloud disk.
         * <p>
         * Valid values: 0 to
         * min{50,000, 1,000 × Capacity - Baseline IOPS}.
         * <p>
         * @return {@code this}
         * @param provisionedIops Property provisionedIops: The provisioned read/write IOPS of the ESSD AutoPL cloud disk. This parameter is required.
         */
        public Builder provisionedIops(final java.lang.Number provisionedIops) {
            this.props.provisionedIops(provisionedIops);
            return this;
        }
        /**
         * Property provisionedIops: The provisioned read/write IOPS of the ESSD AutoPL cloud disk.
         * <p>
         * Valid values: 0 to
         * min{50,000, 1,000 × Capacity - Baseline IOPS}.
         * <p>
         * @return {@code this}
         * @param provisionedIops Property provisionedIops: The provisioned read/write IOPS of the ESSD AutoPL cloud disk. This parameter is required.
         */
        public Builder provisionedIops(final com.aliyun.ros.cdk.core.IResolvable provisionedIops) {
            this.props.provisionedIops(provisionedIops);
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
         * Property proxyType: The type of the database proxy.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>EXCLUSIVE: Enterprise Dedicated</li>
         * <li>GENERAL: Enterprise General-purpose</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * The proxy type must be consistent with the type that corresponds to the node
         * specification of the cluster:
         * <p>
         * <ul>
         * <li>If the node specification is general-purpose, the proxy type must be
         * Enterprise General-purpose.</li>
         * <li>If the node specification is dedicated, the proxy type must be Enterprise
         * Dedicated.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param proxyType Property proxyType: The type of the database proxy. This parameter is required.
         */
        public Builder proxyType(final java.lang.String proxyType) {
            this.props.proxyType(proxyType);
            return this;
        }
        /**
         * Property proxyType: The type of the database proxy.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>EXCLUSIVE: Enterprise Dedicated</li>
         * <li>GENERAL: Enterprise General-purpose</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * The proxy type must be consistent with the type that corresponds to the node
         * specification of the cluster:
         * <p>
         * <ul>
         * <li>If the node specification is general-purpose, the proxy type must be
         * Enterprise General-purpose.</li>
         * <li>If the node specification is dedicated, the proxy type must be Enterprise
         * Dedicated.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param proxyType Property proxyType: The type of the database proxy. This parameter is required.
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
         * Property scaleMax: The maximum number of PCUs for a single-node serverless cluster to scale up to.
         * <p>
         * Valid values: 1 to 32.
         * <p>
         * <blockquote>
         * <p>
         * This parameter is supported only for serverless clusters.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param scaleMax Property scaleMax: The maximum number of PCUs for a single-node serverless cluster to scale up to. This parameter is required.
         */
        public Builder scaleMax(final java.lang.Number scaleMax) {
            this.props.scaleMax(scaleMax);
            return this;
        }
        /**
         * Property scaleMax: The maximum number of PCUs for a single-node serverless cluster to scale up to.
         * <p>
         * Valid values: 1 to 32.
         * <p>
         * <blockquote>
         * <p>
         * This parameter is supported only for serverless clusters.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param scaleMax Property scaleMax: The maximum number of PCUs for a single-node serverless cluster to scale up to. This parameter is required.
         */
        public Builder scaleMax(final com.aliyun.ros.cdk.core.IResolvable scaleMax) {
            this.props.scaleMax(scaleMax);
            return this;
        }

        /**
         * Property scaleMin: The minimum number of PolarDB compute units (PCUs) for a single-node serverless cluster to scale down to.
         * <p>
         * Valid values: 1 to 31.
         * <p>
         * <blockquote>
         * <p>
         * This parameter is supported only for serverless clusters.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param scaleMin Property scaleMin: The minimum number of PolarDB compute units (PCUs) for a single-node serverless cluster to scale down to. This parameter is required.
         */
        public Builder scaleMin(final java.lang.Number scaleMin) {
            this.props.scaleMin(scaleMin);
            return this;
        }
        /**
         * Property scaleMin: The minimum number of PolarDB compute units (PCUs) for a single-node serverless cluster to scale down to.
         * <p>
         * Valid values: 1 to 31.
         * <p>
         * <blockquote>
         * <p>
         * This parameter is supported only for serverless clusters.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param scaleMin Property scaleMin: The minimum number of PolarDB compute units (PCUs) for a single-node serverless cluster to scale down to. This parameter is required.
         */
        public Builder scaleMin(final com.aliyun.ros.cdk.core.IResolvable scaleMin) {
            this.props.scaleMin(scaleMin);
            return this;
        }

        /**
         * Property scaleRoNumMax: The maximum number of read-only nodes that the serverless cluster scales up to.
         * <p>
         * Valid values: 0 to 15.
         * <p>
         * <blockquote>
         * <p>
         * This parameter is supported only for serverless clusters.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param scaleRoNumMax Property scaleRoNumMax: The maximum number of read-only nodes that the serverless cluster scales up to. This parameter is required.
         */
        public Builder scaleRoNumMax(final java.lang.Number scaleRoNumMax) {
            this.props.scaleRoNumMax(scaleRoNumMax);
            return this;
        }
        /**
         * Property scaleRoNumMax: The maximum number of read-only nodes that the serverless cluster scales up to.
         * <p>
         * Valid values: 0 to 15.
         * <p>
         * <blockquote>
         * <p>
         * This parameter is supported only for serverless clusters.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param scaleRoNumMax Property scaleRoNumMax: The maximum number of read-only nodes that the serverless cluster scales up to. This parameter is required.
         */
        public Builder scaleRoNumMax(final com.aliyun.ros.cdk.core.IResolvable scaleRoNumMax) {
            this.props.scaleRoNumMax(scaleRoNumMax);
            return this;
        }

        /**
         * Property scaleRoNumMin: The minimum number of read-only nodes that the serverless cluster scales down to.
         * <p>
         * Valid values: 0 to 15.
         * <p>
         * <blockquote>
         * <p>
         * This parameter is supported only for serverless clusters.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param scaleRoNumMin Property scaleRoNumMin: The minimum number of read-only nodes that the serverless cluster scales down to. This parameter is required.
         */
        public Builder scaleRoNumMin(final java.lang.Number scaleRoNumMin) {
            this.props.scaleRoNumMin(scaleRoNumMin);
            return this;
        }
        /**
         * Property scaleRoNumMin: The minimum number of read-only nodes that the serverless cluster scales down to.
         * <p>
         * Valid values: 0 to 15.
         * <p>
         * <blockquote>
         * <p>
         * This parameter is supported only for serverless clusters.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param scaleRoNumMin Property scaleRoNumMin: The minimum number of read-only nodes that the serverless cluster scales down to. This parameter is required.
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
         * Property securityIpList: The IP whitelist of the PolarDB cluster.
         * <p>
         * <blockquote>
         * <p>
         * You can specify multiple IP addresses in the IP whitelist. Separate the IP
         * addresses with commas (,).
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The IP whitelist of the PolarDB cluster. This parameter is required.
         */
        public Builder securityIpList(final java.lang.String securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: The IP whitelist of the PolarDB cluster.
         * <p>
         * <blockquote>
         * <p>
         * You can specify multiple IP addresses in the IP whitelist. Separate the IP
         * addresses with commas (,).
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The IP whitelist of the PolarDB cluster. This parameter is required.
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
         * Property sourceResourceId: The ID of the source ApsaraDB RDS instance or source PolarDB cluster.
         * <p>
         * This
         * parameter is required only if CreationOption is set to MigrationFromRDS,
         * CloneFromRDS, CloneFromPolarDB, or RecoverFromRecyclebin.
         * <p>
         * <ul>
         * <li>If CreationOption is set to MigrationFromRDS or CloneFromRDS, specify the ID of
         * the source ApsaraDB RDS instance. The source ApsaraDB RDS instance must be
         * ApsaraDB RDS for MySQL 5.6, 5.7, or 8.0 High-availability Edition.</li>
         * <li>If CreationOption is set to CloneFromPolarDB, specify the ID of the source
         * PolarDB cluster. The new cluster must use the same database engine as the source
         * cluster. For example, if the source cluster runs MySQL 8.0, you must set DBType
         * to MySQL and DBVersion to 8.0 for the new cluster.</li>
         * <li>If CreationOption is set to RecoverFromRecyclebin, specify the ID of the
         * released source PolarDB cluster. The restored cluster must use the same database
         * engine as the source cluster.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceResourceId Property sourceResourceId: The ID of the source ApsaraDB RDS instance or source PolarDB cluster. This parameter is required.
         */
        public Builder sourceResourceId(final java.lang.String sourceResourceId) {
            this.props.sourceResourceId(sourceResourceId);
            return this;
        }
        /**
         * Property sourceResourceId: The ID of the source ApsaraDB RDS instance or source PolarDB cluster.
         * <p>
         * This
         * parameter is required only if CreationOption is set to MigrationFromRDS,
         * CloneFromRDS, CloneFromPolarDB, or RecoverFromRecyclebin.
         * <p>
         * <ul>
         * <li>If CreationOption is set to MigrationFromRDS or CloneFromRDS, specify the ID of
         * the source ApsaraDB RDS instance. The source ApsaraDB RDS instance must be
         * ApsaraDB RDS for MySQL 5.6, 5.7, or 8.0 High-availability Edition.</li>
         * <li>If CreationOption is set to CloneFromPolarDB, specify the ID of the source
         * PolarDB cluster. The new cluster must use the same database engine as the source
         * cluster. For example, if the source cluster runs MySQL 8.0, you must set DBType
         * to MySQL and DBVersion to 8.0 for the new cluster.</li>
         * <li>If CreationOption is set to RecoverFromRecyclebin, specify the ID of the
         * released source PolarDB cluster. The restored cluster must use the same database
         * engine as the source cluster.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceResourceId Property sourceResourceId: The ID of the source ApsaraDB RDS instance or source PolarDB cluster. This parameter is required.
         */
        public Builder sourceResourceId(final com.aliyun.ros.cdk.core.IResolvable sourceResourceId) {
            this.props.sourceResourceId(sourceResourceId);
            return this;
        }

        /**
         * Property sslEnabled: Modifies the SSL status.
         * <p>
         * Valid values:
         * Disable: disables SSL encryption.
         * Enable: enables SSL encryption.
         * Update: updates the SSL certificate.
         * <p>
         * @return {@code this}
         * @param sslEnabled Property sslEnabled: Modifies the SSL status. This parameter is required.
         */
        public Builder sslEnabled(final java.lang.String sslEnabled) {
            this.props.sslEnabled(sslEnabled);
            return this;
        }
        /**
         * Property sslEnabled: Modifies the SSL status.
         * <p>
         * Valid values:
         * Disable: disables SSL encryption.
         * Enable: enables SSL encryption.
         * Update: updates the SSL certificate.
         * <p>
         * @return {@code this}
         * @param sslEnabled Property sslEnabled: Modifies the SSL status. This parameter is required.
         */
        public Builder sslEnabled(final com.aliyun.ros.cdk.core.IResolvable sslEnabled) {
            this.props.sslEnabled(sslEnabled);
            return this;
        }

        /**
         * Property standbyAz: The zone for the hot standby cluster.
         * <p>
         * <blockquote>
         * <p>
         * This parameter is valid only when the hot standby cluster feature or multi-AZ
         * strong consistency is enabled.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param standbyAz Property standbyAz: The zone for the hot standby cluster. This parameter is required.
         */
        public Builder standbyAz(final java.lang.String standbyAz) {
            this.props.standbyAz(standbyAz);
            return this;
        }
        /**
         * Property standbyAz: The zone for the hot standby cluster.
         * <p>
         * <blockquote>
         * <p>
         * This parameter is valid only when the hot standby cluster feature or multi-AZ
         * strong consistency is enabled.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param standbyAz Property standbyAz: The zone for the hot standby cluster. This parameter is required.
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
         * Property storagePayType: The billing method for storage.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Postpaid: pay-by-capacity (a pay-as-you-go method).</li>
         * <li>Prepaid: pay-by-space (a subscription method).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param storagePayType Property storagePayType: The billing method for storage. This parameter is required.
         */
        public Builder storagePayType(final java.lang.String storagePayType) {
            this.props.storagePayType(storagePayType);
            return this;
        }
        /**
         * Property storagePayType: The billing method for storage.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Postpaid: pay-by-capacity (a pay-as-you-go method).</li>
         * <li>Prepaid: pay-by-space (a subscription method).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param storagePayType Property storagePayType: The billing method for storage. This parameter is required.
         */
        public Builder storagePayType(final com.aliyun.ros.cdk.core.IResolvable storagePayType) {
            this.props.storagePayType(storagePayType);
            return this;
        }

        /**
         * Property storageSpace: The storage space for a pay-by-space (subscription) cluster.
         * <p>
         * Unit: GB.
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>Valid values for a PolarDB for MySQL Enterprise Edition cluster: 10 to 50000.</li>
         * <li>Valid values for a PolarDB for MySQL Standard Edition cluster: 20 to 64000.</li>
         * <li>If the storage type of a Standard Edition cluster is ESSD AutoPL, the storage
         * space must be a multiple of 10 between 40 and 64000.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param storageSpace Property storageSpace: The storage space for a pay-by-space (subscription) cluster. This parameter is required.
         */
        public Builder storageSpace(final java.lang.Number storageSpace) {
            this.props.storageSpace(storageSpace);
            return this;
        }
        /**
         * Property storageSpace: The storage space for a pay-by-space (subscription) cluster.
         * <p>
         * Unit: GB.
         * <p>
         * <blockquote>
         * <p>
         * <ul>
         * <li>Valid values for a PolarDB for MySQL Enterprise Edition cluster: 10 to 50000.</li>
         * <li>Valid values for a PolarDB for MySQL Standard Edition cluster: 20 to 64000.</li>
         * <li>If the storage type of a Standard Edition cluster is ESSD AutoPL, the storage
         * space must be a multiple of 10 between 40 and 64000.</li>
         * </ul>
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param storageSpace Property storageSpace: The storage space for a pay-by-space (subscription) cluster. This parameter is required.
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
         * ESSDPL0
         * ESSDPL1
         * ESSDPL2
         * ESSDPL3
         * ESSDAUTOPL
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
         * ESSDPL0
         * ESSDPL1
         * ESSDPL2
         * ESSDPL3
         * ESSDAUTOPL
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
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * <blockquote>
         * <p>
         * If you specify the VPCId parameter, you must also specify this parameter.
         * <p>
         * </blockquote>
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
         * <blockquote>
         * <p>
         * If you specify the VPCId parameter, you must also specify this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
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
