package com.aliyun.ros.cdk.hbr;

/**
 * A ROS resource type:  `ALIYUN::HBR::DbPlan`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:29.490Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.DbPlan")
public class DbPlan extends com.aliyun.ros.cdk.core.Resource {

    protected DbPlan(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DbPlan(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::HBR::DbPlan`.
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
    public DbPlan(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbPlanProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::HBR::DbPlan`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DbPlan(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbPlanProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ContinuousPlan: Continuous backup plan schedule.
     * <p>
     * Use {   "type": "continuous" }.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContinuousPlan() {
        return software.amazon.jsii.Kernel.get(this, "attrContinuousPlan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ContinuousUuid: Uuid of continuous backup plan.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContinuousUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrContinuousUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CumulativePlan: Cumulative plan schedule, only for mssql.
     * <p>
     * More details see FullPlan.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCumulativePlan() {
        return software.amazon.jsii.Kernel.get(this, "attrCumulativePlan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CumulativeUuid: Uuid of cumulative plan.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCumulativeUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrCumulativeUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DbPlanName: Display name of the backup plan.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbPlanName() {
        return software.amazon.jsii.Kernel.get(this, "attrDbPlanName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FullPlan: Full backup plan schedule.
     * <p>
     * daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFullPlan() {
        return software.amazon.jsii.Kernel.get(this, "attrFullPlan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FullUuid: Uuid of full backup plan.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFullUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrFullUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HostUuid: Uuid of the host of the database instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrHostUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IncPlan: Incremental backup plan schedule.
     * <p>
     * Only for mysql and oracle. More details see FullPlan.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIncPlan() {
        return software.amazon.jsii.Kernel.get(this, "attrIncPlan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IncUuid: Uuid of the incremental bakcup plan.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIncUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrIncUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceUuid: Uuid of database instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LogPlan: Log backup plan schedule.More details see FullPlan.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogPlan() {
        return software.amazon.jsii.Kernel.get(this, "attrLogPlan", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LogUuid: Uuid of the log backup plan.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrLogUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MaxRateLimit: Max rate limit for backup job,.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaxRateLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxRateLimit", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MaxRetrySeconds: Max retry seconds on network failure.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaxRetrySeconds() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxRetrySeconds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Options: Backup options in json format, different for each type of database.
     * <p>
     * For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOptions() {
        return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PlanId: Id of the backup plan.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPlanId() {
        return software.amazon.jsii.Kernel.get(this, "attrPlanId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Target: Target vault to backup.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTarget() {
        return software.amazon.jsii.Kernel.get(this, "attrTarget", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVaultId() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.DbPlan}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.DbPlan> {
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
        private final com.aliyun.ros.cdk.hbr.DbPlanProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.DbPlanProps.Builder();
        }

        /**
         * Property dbPlanName: Display name of the backup plan.
         * <p>
         * @return {@code this}
         * @param dbPlanName Property dbPlanName: Display name of the backup plan. This parameter is required.
         */
        public Builder dbPlanName(final java.lang.String dbPlanName) {
            this.props.dbPlanName(dbPlanName);
            return this;
        }
        /**
         * Property dbPlanName: Display name of the backup plan.
         * <p>
         * @return {@code this}
         * @param dbPlanName Property dbPlanName: Display name of the backup plan. This parameter is required.
         */
        public Builder dbPlanName(final com.aliyun.ros.cdk.core.IResolvable dbPlanName) {
            this.props.dbPlanName(dbPlanName);
            return this;
        }

        /**
         * Property hostUuid: Uuid of the host of the database instance.
         * <p>
         * @return {@code this}
         * @param hostUuid Property hostUuid: Uuid of the host of the database instance. This parameter is required.
         */
        public Builder hostUuid(final java.lang.String hostUuid) {
            this.props.hostUuid(hostUuid);
            return this;
        }
        /**
         * Property hostUuid: Uuid of the host of the database instance.
         * <p>
         * @return {@code this}
         * @param hostUuid Property hostUuid: Uuid of the host of the database instance. This parameter is required.
         */
        public Builder hostUuid(final com.aliyun.ros.cdk.core.IResolvable hostUuid) {
            this.props.hostUuid(hostUuid);
            return this;
        }

        /**
         * Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
         * <p>
         * @return {@code this}
         * @param vaultId Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault. This parameter is required.
         */
        public Builder vaultId(final java.lang.String vaultId) {
            this.props.vaultId(vaultId);
            return this;
        }
        /**
         * Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
         * <p>
         * @return {@code this}
         * @param vaultId Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault. This parameter is required.
         */
        public Builder vaultId(final com.aliyun.ros.cdk.core.IResolvable vaultId) {
            this.props.vaultId(vaultId);
            return this;
        }

        /**
         * Property continuousPlan: Continuous backup plan schedule.
         * <p>
         * Use {   "type": "continuous" }.
         * <p>
         * @return {@code this}
         * @param continuousPlan Property continuousPlan: Continuous backup plan schedule. This parameter is required.
         */
        public Builder continuousPlan(final java.lang.String continuousPlan) {
            this.props.continuousPlan(continuousPlan);
            return this;
        }
        /**
         * Property continuousPlan: Continuous backup plan schedule.
         * <p>
         * Use {   "type": "continuous" }.
         * <p>
         * @return {@code this}
         * @param continuousPlan Property continuousPlan: Continuous backup plan schedule. This parameter is required.
         */
        public Builder continuousPlan(final com.aliyun.ros.cdk.core.IResolvable continuousPlan) {
            this.props.continuousPlan(continuousPlan);
            return this;
        }

        /**
         * Property cumulativePlan: Cumulative plan schedule, only for mssql.
         * <p>
         * More details see FullPlan.
         * <p>
         * @return {@code this}
         * @param cumulativePlan Property cumulativePlan: Cumulative plan schedule, only for mssql. This parameter is required.
         */
        public Builder cumulativePlan(final java.lang.String cumulativePlan) {
            this.props.cumulativePlan(cumulativePlan);
            return this;
        }
        /**
         * Property cumulativePlan: Cumulative plan schedule, only for mssql.
         * <p>
         * More details see FullPlan.
         * <p>
         * @return {@code this}
         * @param cumulativePlan Property cumulativePlan: Cumulative plan schedule, only for mssql. This parameter is required.
         */
        public Builder cumulativePlan(final com.aliyun.ros.cdk.core.IResolvable cumulativePlan) {
            this.props.cumulativePlan(cumulativePlan);
            return this;
        }

        /**
         * Property fullPlan: Full backup plan schedule.
         * <p>
         * daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
         * <p>
         * @return {@code this}
         * @param fullPlan Property fullPlan: Full backup plan schedule. This parameter is required.
         */
        public Builder fullPlan(final java.lang.String fullPlan) {
            this.props.fullPlan(fullPlan);
            return this;
        }
        /**
         * Property fullPlan: Full backup plan schedule.
         * <p>
         * daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
         * <p>
         * @return {@code this}
         * @param fullPlan Property fullPlan: Full backup plan schedule. This parameter is required.
         */
        public Builder fullPlan(final com.aliyun.ros.cdk.core.IResolvable fullPlan) {
            this.props.fullPlan(fullPlan);
            return this;
        }

        /**
         * Property incPlan: Incremental backup plan schedule.
         * <p>
         * Only for mysql and oracle. More details see FullPlan.
         * <p>
         * @return {@code this}
         * @param incPlan Property incPlan: Incremental backup plan schedule. This parameter is required.
         */
        public Builder incPlan(final java.lang.String incPlan) {
            this.props.incPlan(incPlan);
            return this;
        }
        /**
         * Property incPlan: Incremental backup plan schedule.
         * <p>
         * Only for mysql and oracle. More details see FullPlan.
         * <p>
         * @return {@code this}
         * @param incPlan Property incPlan: Incremental backup plan schedule. This parameter is required.
         */
        public Builder incPlan(final com.aliyun.ros.cdk.core.IResolvable incPlan) {
            this.props.incPlan(incPlan);
            return this;
        }

        /**
         * Property instanceUuid: Uuid of database instance.
         * <p>
         * @return {@code this}
         * @param instanceUuid Property instanceUuid: Uuid of database instance. This parameter is required.
         */
        public Builder instanceUuid(final java.lang.String instanceUuid) {
            this.props.instanceUuid(instanceUuid);
            return this;
        }
        /**
         * Property instanceUuid: Uuid of database instance.
         * <p>
         * @return {@code this}
         * @param instanceUuid Property instanceUuid: Uuid of database instance. This parameter is required.
         */
        public Builder instanceUuid(final com.aliyun.ros.cdk.core.IResolvable instanceUuid) {
            this.props.instanceUuid(instanceUuid);
            return this;
        }

        /**
         * Property logPlan: Log backup plan schedule.More details see FullPlan.
         * <p>
         * @return {@code this}
         * @param logPlan Property logPlan: Log backup plan schedule.More details see FullPlan. This parameter is required.
         */
        public Builder logPlan(final java.lang.String logPlan) {
            this.props.logPlan(logPlan);
            return this;
        }
        /**
         * Property logPlan: Log backup plan schedule.More details see FullPlan.
         * <p>
         * @return {@code this}
         * @param logPlan Property logPlan: Log backup plan schedule.More details see FullPlan. This parameter is required.
         */
        public Builder logPlan(final com.aliyun.ros.cdk.core.IResolvable logPlan) {
            this.props.logPlan(logPlan);
            return this;
        }

        /**
         * Property maxRateLimit: Max rate limit for backup job,.
         * <p>
         * @return {@code this}
         * @param maxRateLimit Property maxRateLimit: Max rate limit for backup job,. This parameter is required.
         */
        public Builder maxRateLimit(final java.lang.Number maxRateLimit) {
            this.props.maxRateLimit(maxRateLimit);
            return this;
        }
        /**
         * Property maxRateLimit: Max rate limit for backup job,.
         * <p>
         * @return {@code this}
         * @param maxRateLimit Property maxRateLimit: Max rate limit for backup job,. This parameter is required.
         */
        public Builder maxRateLimit(final com.aliyun.ros.cdk.core.IResolvable maxRateLimit) {
            this.props.maxRateLimit(maxRateLimit);
            return this;
        }

        /**
         * Property maxRetrySeconds: Max retry seconds on network failure.
         * <p>
         * @return {@code this}
         * @param maxRetrySeconds Property maxRetrySeconds: Max retry seconds on network failure. This parameter is required.
         */
        public Builder maxRetrySeconds(final java.lang.Number maxRetrySeconds) {
            this.props.maxRetrySeconds(maxRetrySeconds);
            return this;
        }
        /**
         * Property maxRetrySeconds: Max retry seconds on network failure.
         * <p>
         * @return {@code this}
         * @param maxRetrySeconds Property maxRetrySeconds: Max retry seconds on network failure. This parameter is required.
         */
        public Builder maxRetrySeconds(final com.aliyun.ros.cdk.core.IResolvable maxRetrySeconds) {
            this.props.maxRetrySeconds(maxRetrySeconds);
            return this;
        }

        /**
         * Property options: Backup options in json format, different for each type of database.
         * <p>
         * For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
         * <p>
         * @return {@code this}
         * @param options Property options: Backup options in json format, different for each type of database. This parameter is required.
         */
        public Builder options(final java.lang.String options) {
            this.props.options(options);
            return this;
        }
        /**
         * Property options: Backup options in json format, different for each type of database.
         * <p>
         * For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
         * <p>
         * @return {@code this}
         * @param options Property options: Backup options in json format, different for each type of database. This parameter is required.
         */
        public Builder options(final com.aliyun.ros.cdk.core.IResolvable options) {
            this.props.options(options);
            return this;
        }

        /**
         * Property source: Which database instance or database will be backup.
         * <p>
         * @return {@code this}
         * @param source Property source: Which database instance or database will be backup. This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }
        /**
         * Property source: Which database instance or database will be backup.
         * <p>
         * @return {@code this}
         * @param source Property source: Which database instance or database will be backup. This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.hbr.RosDbPlan.SourceProperty source) {
            this.props.source(source);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.hbr.DbPlan}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.DbPlan build() {
            return new com.aliyun.ros.cdk.hbr.DbPlan(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
