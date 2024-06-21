package com.aliyun.ros.cdk.rds;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RDS::DBInstance</code>, which is used to create an ApsaraDB RDS instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:11.695Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.DBInstance")
public class DBInstance extends com.aliyun.ros.cdk.core.Resource {

    protected DBInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DBInstanceId: The instance id of created database instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInnerConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInnerIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIpAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InnerPort: Intranet port of created DB instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInnerPort() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicIpAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicPort: Internet port of created DB instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.DBInstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.DBInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.DBInstance> {
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
        private final com.aliyun.ros.cdk.rds.DBInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.DBInstanceProps.Builder();
        }

        /**
         * Property dbInstanceClass: Database instance type.
         * <p>
         * Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
         * <p>
         * @return {@code this}
         * @param dbInstanceClass Property dbInstanceClass: Database instance type. This parameter is required.
         */
        public Builder dbInstanceClass(final java.lang.String dbInstanceClass) {
            this.props.dbInstanceClass(dbInstanceClass);
            return this;
        }
        /**
         * Property dbInstanceClass: Database instance type.
         * <p>
         * Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
         * <p>
         * @return {@code this}
         * @param dbInstanceClass Property dbInstanceClass: Database instance type. This parameter is required.
         */
        public Builder dbInstanceClass(final com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.props.dbInstanceClass(dbInstanceClass);
            return this;
        }

        /**
         * Property dbInstanceStorage: The storage capacity of the instance.
         * <p>
         * Unit: GB. The storage capacity increases in increments of 5 GB.
         * You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
         * <p>
         * @return {@code this}
         * @param dbInstanceStorage Property dbInstanceStorage: The storage capacity of the instance. This parameter is required.
         */
        public Builder dbInstanceStorage(final java.lang.Number dbInstanceStorage) {
            this.props.dbInstanceStorage(dbInstanceStorage);
            return this;
        }
        /**
         * Property dbInstanceStorage: The storage capacity of the instance.
         * <p>
         * Unit: GB. The storage capacity increases in increments of 5 GB.
         * You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
         * <p>
         * @return {@code this}
         * @param dbInstanceStorage Property dbInstanceStorage: The storage capacity of the instance. This parameter is required.
         */
        public Builder dbInstanceStorage(final com.aliyun.ros.cdk.core.IResolvable dbInstanceStorage) {
            this.props.dbInstanceStorage(dbInstanceStorage);
            return this;
        }

        /**
         * Property engine: Database instance engine type.
         * <p>
         * Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
         * <p>
         * @return {@code this}
         * @param engine Property engine: Database instance engine type. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * Property engine: Database instance engine type.
         * <p>
         * Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
         * <p>
         * @return {@code this}
         * @param engine Property engine: Database instance engine type. This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * Property engineVersion: Database instance version of the relative engine type.
         * <p>
         * Support:
         * Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
         * Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
         * Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
         * Valid values when you set the Engine parameter to MariaDB: 10.3
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: Database instance version of the relative engine type. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: Database instance version of the relative engine type.
         * <p>
         * Support:
         * Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
         * Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
         * Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
         * Valid values when you set the Engine parameter to MariaDB: 10.3
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: Database instance version of the relative engine type. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }

        /**
         * Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation. This parameter is required.
         */
        public Builder securityIpList(final java.lang.String securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation. This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * Property allocatePublicConnection: If true, allocate public connection automate.
         * <p>
         * @return {@code this}
         * @param allocatePublicConnection Property allocatePublicConnection: If true, allocate public connection automate. This parameter is required.
         */
        public Builder allocatePublicConnection(final java.lang.Boolean allocatePublicConnection) {
            this.props.allocatePublicConnection(allocatePublicConnection);
            return this;
        }
        /**
         * Property allocatePublicConnection: If true, allocate public connection automate.
         * <p>
         * @return {@code this}
         * @param allocatePublicConnection Property allocatePublicConnection: If true, allocate public connection automate. This parameter is required.
         */
        public Builder allocatePublicConnection(final com.aliyun.ros.cdk.core.IResolvable allocatePublicConnection) {
            this.props.allocatePublicConnection(allocatePublicConnection);
            return this;
        }

        /**
         * Property archiveBackupKeepCount: The number of archived backups that can be retained.
         * <p>
         * Default value: 1. Valid values:
         * The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
         * parameter is set to ByMonth.
         * The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
         * parameter is set to ByWeek.
         * Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
         * parameter is set to KeepAll.
         * <p>
         * @return {@code this}
         * @param archiveBackupKeepCount Property archiveBackupKeepCount: The number of archived backups that can be retained. This parameter is required.
         */
        public Builder archiveBackupKeepCount(final java.lang.Number archiveBackupKeepCount) {
            this.props.archiveBackupKeepCount(archiveBackupKeepCount);
            return this;
        }
        /**
         * Property archiveBackupKeepCount: The number of archived backups that can be retained.
         * <p>
         * Default value: 1. Valid values:
         * The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
         * parameter is set to ByMonth.
         * The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
         * parameter is set to ByWeek.
         * Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
         * parameter is set to KeepAll.
         * <p>
         * @return {@code this}
         * @param archiveBackupKeepCount Property archiveBackupKeepCount: The number of archived backups that can be retained. This parameter is required.
         */
        public Builder archiveBackupKeepCount(final com.aliyun.ros.cdk.core.IResolvable archiveBackupKeepCount) {
            this.props.archiveBackupKeepCount(archiveBackupKeepCount);
            return this;
        }

        /**
         * Property archiveBackupKeepPolicy: The period for which to retain archived backups.
         * <p>
         * The number of archived backups that can
         * be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
         * Default value: 0. Valid values:
         * ByMonth
         * ByWeek
         * KeepAll
         * <p>
         * @return {@code this}
         * @param archiveBackupKeepPolicy Property archiveBackupKeepPolicy: The period for which to retain archived backups. This parameter is required.
         */
        public Builder archiveBackupKeepPolicy(final java.lang.String archiveBackupKeepPolicy) {
            this.props.archiveBackupKeepPolicy(archiveBackupKeepPolicy);
            return this;
        }
        /**
         * Property archiveBackupKeepPolicy: The period for which to retain archived backups.
         * <p>
         * The number of archived backups that can
         * be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
         * Default value: 0. Valid values:
         * ByMonth
         * ByWeek
         * KeepAll
         * <p>
         * @return {@code this}
         * @param archiveBackupKeepPolicy Property archiveBackupKeepPolicy: The period for which to retain archived backups. This parameter is required.
         */
        public Builder archiveBackupKeepPolicy(final com.aliyun.ros.cdk.core.IResolvable archiveBackupKeepPolicy) {
            this.props.archiveBackupKeepPolicy(archiveBackupKeepPolicy);
            return this;
        }

        /**
         * Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
         * <p>
         * The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
         * <p>
         * @return {@code this}
         * @param archiveBackupRetentionPeriod Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups. This parameter is required.
         */
        public Builder archiveBackupRetentionPeriod(final java.lang.Number archiveBackupRetentionPeriod) {
            this.props.archiveBackupRetentionPeriod(archiveBackupRetentionPeriod);
            return this;
        }
        /**
         * Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
         * <p>
         * The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
         * <p>
         * @return {@code this}
         * @param archiveBackupRetentionPeriod Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups. This parameter is required.
         */
        public Builder archiveBackupRetentionPeriod(final com.aliyun.ros.cdk.core.IResolvable archiveBackupRetentionPeriod) {
            this.props.archiveBackupRetentionPeriod(archiveBackupRetentionPeriod);
            return this;
        }

        /**
         * Property autoRenew: Specifies whether to enable auto-renewal.
         * <p>
         * Valid values: true and false. Note
         * :Monthly subscription: The auto-renewal cycle is one month.
         * Annual subscription: The auto-renewal cycle is one year.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Specifies whether to enable auto-renewal.
         * <p>
         * Valid values: true and false. Note
         * :Monthly subscription: The auto-renewal cycle is one month.
         * Annual subscription: The auto-renewal cycle is one year.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Specifies whether to enable auto-renewal. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property backUpCategory: Specifies whether to enable the second-level backup function.
         * <p>
         * This function allows a backup
         * to be completed within seconds. Valid values:
         * Flash: specifies to enable the second-level backup function.
         * Standard: specifies to disable the second-level backup function.
         * <p>
         * @return {@code this}
         * @param backUpCategory Property backUpCategory: Specifies whether to enable the second-level backup function. This parameter is required.
         */
        public Builder backUpCategory(final java.lang.String backUpCategory) {
            this.props.backUpCategory(backUpCategory);
            return this;
        }
        /**
         * Property backUpCategory: Specifies whether to enable the second-level backup function.
         * <p>
         * This function allows a backup
         * to be completed within seconds. Valid values:
         * Flash: specifies to enable the second-level backup function.
         * Standard: specifies to disable the second-level backup function.
         * <p>
         * @return {@code this}
         * @param backUpCategory Property backUpCategory: Specifies whether to enable the second-level backup function. This parameter is required.
         */
        public Builder backUpCategory(final com.aliyun.ros.cdk.core.IResolvable backUpCategory) {
            this.props.backUpCategory(backUpCategory);
            return this;
        }

        /**
         * Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup.
         * <p>
         * @return {@code this}
         * @param backupPolicyMode Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup. This parameter is required.
         */
        public Builder backupPolicyMode(final java.lang.String backupPolicyMode) {
            this.props.backupPolicyMode(backupPolicyMode);
            return this;
        }
        /**
         * Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup.
         * <p>
         * @return {@code this}
         * @param backupPolicyMode Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup. This parameter is required.
         */
        public Builder backupPolicyMode(final com.aliyun.ros.cdk.core.IResolvable backupPolicyMode) {
            this.props.backupPolicyMode(backupPolicyMode);
            return this;
        }

        /**
         * Property backupRetentionPeriod: The retention period of the data backup.
         * <p>
         * Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
         * <p>
         * @return {@code this}
         * @param backupRetentionPeriod Property backupRetentionPeriod: The retention period of the data backup. This parameter is required.
         */
        public Builder backupRetentionPeriod(final java.lang.Number backupRetentionPeriod) {
            this.props.backupRetentionPeriod(backupRetentionPeriod);
            return this;
        }
        /**
         * Property backupRetentionPeriod: The retention period of the data backup.
         * <p>
         * Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
         * <p>
         * @return {@code this}
         * @param backupRetentionPeriod Property backupRetentionPeriod: The retention period of the data backup. This parameter is required.
         */
        public Builder backupRetentionPeriod(final com.aliyun.ros.cdk.core.IResolvable backupRetentionPeriod) {
            this.props.backupRetentionPeriod(backupRetentionPeriod);
            return this;
        }

        /**
         * Property category: The edition of the instance.
         * <p>
         * Valid values:
         * Basic: RDS Basic Edition
         * HighAvailability: RDS High-availability Edition
         * cluster: RDS Cluster Edition
         * AlwaysOn: RDS Cluster Edition for SQL Server
         * Finance: RDS Enterprise Edition
         * serverless_basic: RDS Serverless Basic Edition
         * <p>
         * @return {@code this}
         * @param category Property category: The edition of the instance. This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * Property category: The edition of the instance.
         * <p>
         * Valid values:
         * Basic: RDS Basic Edition
         * HighAvailability: RDS High-availability Edition
         * cluster: RDS Cluster Edition
         * AlwaysOn: RDS Cluster Edition for SQL Server
         * Finance: RDS Enterprise Edition
         * serverless_basic: RDS Serverless Basic Edition
         * <p>
         * @return {@code this}
         * @param category Property category: The edition of the instance. This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * Property compressType: The format used to compress backups.
         * <p>
         * Valid values:
         * 1: The zlib tool is used to compress backups into .tar.gz files.
         * 4: The QuickLZ tool is used to compress backups into .xb.gz files.
         * This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
         * It can be used to restore individual databases and tables.
         * 8: The QuickLZ tool is used to compress backups into .xb.gz files.
         * This compression format is supported only when the instance runs MySQL 8.0.
         * It cannot be used to restore individual databases or tables.
         * <p>
         * @return {@code this}
         * @param compressType Property compressType: The format used to compress backups. This parameter is required.
         */
        public Builder compressType(final java.lang.Number compressType) {
            this.props.compressType(compressType);
            return this;
        }
        /**
         * Property compressType: The format used to compress backups.
         * <p>
         * Valid values:
         * 1: The zlib tool is used to compress backups into .tar.gz files.
         * 4: The QuickLZ tool is used to compress backups into .xb.gz files.
         * This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
         * It can be used to restore individual databases and tables.
         * 8: The QuickLZ tool is used to compress backups into .xb.gz files.
         * This compression format is supported only when the instance runs MySQL 8.0.
         * It cannot be used to restore individual databases or tables.
         * <p>
         * @return {@code this}
         * @param compressType Property compressType: The format used to compress backups. This parameter is required.
         */
        public Builder compressType(final com.aliyun.ros.cdk.core.IResolvable compressType) {
            this.props.compressType(compressType);
            return this;
        }

        /**
         * Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.
         * <p>
         * Default is RDS system assigns.
         * <p>
         * @return {@code this}
         * @param connectionMode Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. This parameter is required.
         */
        public Builder connectionMode(final java.lang.String connectionMode) {
            this.props.connectionMode(connectionMode);
            return this;
        }
        /**
         * Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.
         * <p>
         * Default is RDS system assigns.
         * <p>
         * @return {@code this}
         * @param connectionMode Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. This parameter is required.
         */
        public Builder connectionMode(final com.aliyun.ros.cdk.core.IResolvable connectionMode) {
            this.props.connectionMode(connectionMode);
            return this;
        }

        /**
         * Property connectionStringPrefix: The prefix of the endpoint.
         * <p>
         * Only the prefix of the CurrentConnectionString parameter value can be modified.
         * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
         * <p>
         * @return {@code this}
         * @param connectionStringPrefix Property connectionStringPrefix: The prefix of the endpoint. This parameter is required.
         */
        public Builder connectionStringPrefix(final java.lang.String connectionStringPrefix) {
            this.props.connectionStringPrefix(connectionStringPrefix);
            return this;
        }
        /**
         * Property connectionStringPrefix: The prefix of the endpoint.
         * <p>
         * Only the prefix of the CurrentConnectionString parameter value can be modified.
         * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
         * <p>
         * @return {@code this}
         * @param connectionStringPrefix Property connectionStringPrefix: The prefix of the endpoint. This parameter is required.
         */
        public Builder connectionStringPrefix(final com.aliyun.ros.cdk.core.IResolvable connectionStringPrefix) {
            this.props.connectionStringPrefix(connectionStringPrefix);
            return this;
        }

        /**
         * Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.
         * <p>
         * @return {@code this}
         * @param connectionStringType Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public. This parameter is required.
         */
        public Builder connectionStringType(final java.lang.String connectionStringType) {
            this.props.connectionStringType(connectionStringType);
            return this;
        }
        /**
         * Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.
         * <p>
         * @return {@code this}
         * @param connectionStringType Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public. This parameter is required.
         */
        public Builder connectionStringType(final com.aliyun.ros.cdk.core.IResolvable connectionStringType) {
            this.props.connectionStringType(connectionStringType);
            return this;
        }

        /**
         * Property dbInstanceDescription: Description of created database instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final java.lang.String dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }
        /**
         * Property dbInstanceDescription: Description of created database instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }

        /**
         * Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
         * <p>
         * @return {@code this}
         * @param dbInstanceNetType Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access. This parameter is required.
         */
        public Builder dbInstanceNetType(final java.lang.String dbInstanceNetType) {
            this.props.dbInstanceNetType(dbInstanceNetType);
            return this;
        }
        /**
         * Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
         * <p>
         * @return {@code this}
         * @param dbInstanceNetType Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access. This parameter is required.
         */
        public Builder dbInstanceNetType(final com.aliyun.ros.cdk.core.IResolvable dbInstanceNetType) {
            this.props.dbInstanceNetType(dbInstanceNetType);
            return this;
        }

        /**
         * Property dbInstanceStorageType: The storage type of the instance.
         * <p>
         * Valid values:
         * local_ssd: specifies to use local SSDs. This is the recommended storage type.
         * cloud_ssd: specifies to use standard SSDs.
         * cloud_essd: enhanced SSD of performance level (PL)1.
         * cloud_essd2: enhanced SSD of PL2.
         * cloud_essd3: enhanced SSD of PL3.
         * <p>
         * @return {@code this}
         * @param dbInstanceStorageType Property dbInstanceStorageType: The storage type of the instance. This parameter is required.
         */
        public Builder dbInstanceStorageType(final java.lang.String dbInstanceStorageType) {
            this.props.dbInstanceStorageType(dbInstanceStorageType);
            return this;
        }
        /**
         * Property dbInstanceStorageType: The storage type of the instance.
         * <p>
         * Valid values:
         * local_ssd: specifies to use local SSDs. This is the recommended storage type.
         * cloud_ssd: specifies to use standard SSDs.
         * cloud_essd: enhanced SSD of performance level (PL)1.
         * cloud_essd2: enhanced SSD of PL2.
         * cloud_essd3: enhanced SSD of PL3.
         * <p>
         * @return {@code this}
         * @param dbInstanceStorageType Property dbInstanceStorageType: The storage type of the instance. This parameter is required.
         */
        public Builder dbInstanceStorageType(final com.aliyun.ros.cdk.core.IResolvable dbInstanceStorageType) {
            this.props.dbInstanceStorageType(dbInstanceStorageType);
            return this;
        }

        /**
         * Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.
         * <p>
         * Valid values:
         * 1: Table names are not case-sensitive. This is the default value.
         * 0: Table names are case-sensitive.
         * <p>
         * @return {@code this}
         * @param dbIsIgnoreCase Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. This parameter is required.
         */
        public Builder dbIsIgnoreCase(final java.lang.Number dbIsIgnoreCase) {
            this.props.dbIsIgnoreCase(dbIsIgnoreCase);
            return this;
        }
        /**
         * Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.
         * <p>
         * Valid values:
         * 1: Table names are not case-sensitive. This is the default value.
         * 0: Table names are case-sensitive.
         * <p>
         * @return {@code this}
         * @param dbIsIgnoreCase Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. This parameter is required.
         */
        public Builder dbIsIgnoreCase(final com.aliyun.ros.cdk.core.IResolvable dbIsIgnoreCase) {
            this.props.dbIsIgnoreCase(dbIsIgnoreCase);
            return this;
        }

        /**
         * Property dbMappings: Database mappings to attach to db instance.
         * <p>
         * @return {@code this}
         * @param dbMappings Property dbMappings: Database mappings to attach to db instance. This parameter is required.
         */
        public Builder dbMappings(final com.aliyun.ros.cdk.core.IResolvable dbMappings) {
            this.props.dbMappings(dbMappings);
            return this;
        }
        /**
         * Property dbMappings: Database mappings to attach to db instance.
         * <p>
         * @return {@code this}
         * @param dbMappings Property dbMappings: Database mappings to attach to db instance. This parameter is required.
         */
        public Builder dbMappings(final java.util.List<? extends java.lang.Object> dbMappings) {
            this.props.dbMappings(dbMappings);
            return this;
        }

        /**
         * Property dbParamGroupId: The ID of the parameter template used by the instance.
         * <p>
         * @return {@code this}
         * @param dbParamGroupId Property dbParamGroupId: The ID of the parameter template used by the instance. This parameter is required.
         */
        public Builder dbParamGroupId(final java.lang.String dbParamGroupId) {
            this.props.dbParamGroupId(dbParamGroupId);
            return this;
        }
        /**
         * Property dbParamGroupId: The ID of the parameter template used by the instance.
         * <p>
         * @return {@code this}
         * @param dbParamGroupId Property dbParamGroupId: The ID of the parameter template used by the instance. This parameter is required.
         */
        public Builder dbParamGroupId(final com.aliyun.ros.cdk.core.IResolvable dbParamGroupId) {
            this.props.dbParamGroupId(dbParamGroupId);
            return this;
        }

        /**
         * Property dbTimeZone: The UTC time zone of the instance.
         * <p>
         * Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
         * <p>
         * @return {@code this}
         * @param dbTimeZone Property dbTimeZone: The UTC time zone of the instance. This parameter is required.
         */
        public Builder dbTimeZone(final java.lang.String dbTimeZone) {
            this.props.dbTimeZone(dbTimeZone);
            return this;
        }
        /**
         * Property dbTimeZone: The UTC time zone of the instance.
         * <p>
         * Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
         * <p>
         * @return {@code this}
         * @param dbTimeZone Property dbTimeZone: The UTC time zone of the instance. This parameter is required.
         */
        public Builder dbTimeZone(final com.aliyun.ros.cdk.core.IResolvable dbTimeZone) {
            this.props.dbTimeZone(dbTimeZone);
            return this;
        }

        /**
         * Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group. This parameter is required.
         */
        public Builder dedicatedHostGroupId(final java.lang.String dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }
        /**
         * Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group. This parameter is required.
         */
        public Builder dedicatedHostGroupId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.props.dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }

        /**
         * Property enableBackupLog: Specifies whether to enable the log backup function.
         * <p>
         * Valid values:
         * True: specifies to enable the log backup function.
         * False: specifies to disable the log backup function.
         * Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
         * <p>
         * @return {@code this}
         * @param enableBackupLog Property enableBackupLog: Specifies whether to enable the log backup function. This parameter is required.
         */
        public Builder enableBackupLog(final java.lang.Boolean enableBackupLog) {
            this.props.enableBackupLog(enableBackupLog);
            return this;
        }
        /**
         * Property enableBackupLog: Specifies whether to enable the log backup function.
         * <p>
         * Valid values:
         * True: specifies to enable the log backup function.
         * False: specifies to disable the log backup function.
         * Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
         * <p>
         * @return {@code this}
         * @param enableBackupLog Property enableBackupLog: Specifies whether to enable the log backup function. This parameter is required.
         */
        public Builder enableBackupLog(final com.aliyun.ros.cdk.core.IResolvable enableBackupLog) {
            this.props.enableBackupLog(enableBackupLog);
            return this;
        }

        /**
         * Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.
         * <p>
         * You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
         * <p>
         * @return {@code this}
         * @param encryptionKey Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. This parameter is required.
         */
        public Builder encryptionKey(final java.lang.String encryptionKey) {
            this.props.encryptionKey(encryptionKey);
            return this;
        }
        /**
         * Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.
         * <p>
         * You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
         * <p>
         * @return {@code this}
         * @param encryptionKey Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. This parameter is required.
         */
        public Builder encryptionKey(final com.aliyun.ros.cdk.core.IResolvable encryptionKey) {
            this.props.encryptionKey(encryptionKey);
            return this;
        }

        /**
         * Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB.
         * <p>
         * Valid values:
         * Enable and Disable. You can retain the default value. Note You must specify
         * this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
         * <p>
         * @return {@code this}
         * @param highSpaceUsageProtection Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB. This parameter is required.
         */
        public Builder highSpaceUsageProtection(final java.lang.String highSpaceUsageProtection) {
            this.props.highSpaceUsageProtection(highSpaceUsageProtection);
            return this;
        }
        /**
         * Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB.
         * <p>
         * Valid values:
         * Enable and Disable. You can retain the default value. Note You must specify
         * this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
         * <p>
         * @return {@code this}
         * @param highSpaceUsageProtection Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB. This parameter is required.
         */
        public Builder highSpaceUsageProtection(final com.aliyun.ros.cdk.core.IResolvable highSpaceUsageProtection) {
            this.props.highSpaceUsageProtection(highSpaceUsageProtection);
            return this;
        }

        /**
         * Property instanceNetworkType: Instance network type, VPC or Classic.
         * <p>
         * @return {@code this}
         * @param instanceNetworkType Property instanceNetworkType: Instance network type, VPC or Classic. This parameter is required.
         */
        public Builder instanceNetworkType(final java.lang.String instanceNetworkType) {
            this.props.instanceNetworkType(instanceNetworkType);
            return this;
        }
        /**
         * Property instanceNetworkType: Instance network type, VPC or Classic.
         * <p>
         * @return {@code this}
         * @param instanceNetworkType Property instanceNetworkType: Instance network type, VPC or Classic. This parameter is required.
         */
        public Builder instanceNetworkType(final com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.props.instanceNetworkType(instanceNetworkType);
            return this;
        }

        /**
         * Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
         * <p>
         * Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
         * You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
         * parameter is set to LogBackupPolicy.
         * <p>
         * @return {@code this}
         * @param localLogRetentionHours Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance. This parameter is required.
         */
        public Builder localLogRetentionHours(final java.lang.Number localLogRetentionHours) {
            this.props.localLogRetentionHours(localLogRetentionHours);
            return this;
        }
        /**
         * Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
         * <p>
         * Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
         * You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
         * parameter is set to LogBackupPolicy.
         * <p>
         * @return {@code this}
         * @param localLogRetentionHours Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance. This parameter is required.
         */
        public Builder localLogRetentionHours(final com.aliyun.ros.cdk.core.IResolvable localLogRetentionHours) {
            this.props.localLogRetentionHours(localLogRetentionHours);
            return this;
        }

        /**
         * Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
         * <p>
         * If the space usage for log backup files exceeds this percentage, the system deletes earlier
         * log backup files until the space usage falls below this percentage. Valid values:0 to 50.
         * You can retain the default value. Note You must specify this parameter when the
         * BackupPolicyMode parameter is set to LogBackupPolicy.
         * <p>
         * @return {@code this}
         * @param localLogRetentionSpace Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance. This parameter is required.
         */
        public Builder localLogRetentionSpace(final java.lang.Number localLogRetentionSpace) {
            this.props.localLogRetentionSpace(localLogRetentionSpace);
            return this;
        }
        /**
         * Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
         * <p>
         * If the space usage for log backup files exceeds this percentage, the system deletes earlier
         * log backup files until the space usage falls below this percentage. Valid values:0 to 50.
         * You can retain the default value. Note You must specify this parameter when the
         * BackupPolicyMode parameter is set to LogBackupPolicy.
         * <p>
         * @return {@code this}
         * @param localLogRetentionSpace Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance. This parameter is required.
         */
        public Builder localLogRetentionSpace(final com.aliyun.ros.cdk.core.IResolvable localLogRetentionSpace) {
            this.props.localLogRetentionSpace(localLogRetentionSpace);
            return this;
        }

        /**
         * Property logBackupFrequency: The frequency at which to back up logs.
         * <p>
         * Valid values:
         * The value LogInterval specifies to back up logs every 30 minutes.
         * The default value of this parameter is the same as the data backup frequency.
         * Note The value LogInterval is supported only when the instance runs SQL Server.
         * <p>
         * @return {@code this}
         * @param logBackupFrequency Property logBackupFrequency: The frequency at which to back up logs. This parameter is required.
         */
        public Builder logBackupFrequency(final java.lang.String logBackupFrequency) {
            this.props.logBackupFrequency(logBackupFrequency);
            return this;
        }
        /**
         * Property logBackupFrequency: The frequency at which to back up logs.
         * <p>
         * Valid values:
         * The value LogInterval specifies to back up logs every 30 minutes.
         * The default value of this parameter is the same as the data backup frequency.
         * Note The value LogInterval is supported only when the instance runs SQL Server.
         * <p>
         * @return {@code this}
         * @param logBackupFrequency Property logBackupFrequency: The frequency at which to back up logs. This parameter is required.
         */
        public Builder logBackupFrequency(final com.aliyun.ros.cdk.core.IResolvable logBackupFrequency) {
            this.props.logBackupFrequency(logBackupFrequency);
            return this;
        }

        /**
         * Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
         * <p>
         * Default value: 60. Valid values: 6 to 100.
         * <p>
         * @return {@code this}
         * @param logBackupLocalRetentionNumber Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance. This parameter is required.
         */
        public Builder logBackupLocalRetentionNumber(final java.lang.Number logBackupLocalRetentionNumber) {
            this.props.logBackupLocalRetentionNumber(logBackupLocalRetentionNumber);
            return this;
        }
        /**
         * Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
         * <p>
         * Default value: 60. Valid values: 6 to 100.
         * <p>
         * @return {@code this}
         * @param logBackupLocalRetentionNumber Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance. This parameter is required.
         */
        public Builder logBackupLocalRetentionNumber(final com.aliyun.ros.cdk.core.IResolvable logBackupLocalRetentionNumber) {
            this.props.logBackupLocalRetentionNumber(logBackupLocalRetentionNumber);
            return this;
        }

        /**
         * Property logBackupRetentionPeriod: The number of days for which to retain log backup files.
         * <p>
         * Valid values: 7 to 730. The log backup
         * retention period cannot be longer than the data backup retention period.Note If you enable the log
         * backup function, you can specify the log backup retention period. This applies only when the
         * instance runs MySQL, PostgreSQL, or PPAS.
         * <p>
         * @return {@code this}
         * @param logBackupRetentionPeriod Property logBackupRetentionPeriod: The number of days for which to retain log backup files. This parameter is required.
         */
        public Builder logBackupRetentionPeriod(final java.lang.Number logBackupRetentionPeriod) {
            this.props.logBackupRetentionPeriod(logBackupRetentionPeriod);
            return this;
        }
        /**
         * Property logBackupRetentionPeriod: The number of days for which to retain log backup files.
         * <p>
         * Valid values: 7 to 730. The log backup
         * retention period cannot be longer than the data backup retention period.Note If you enable the log
         * backup function, you can specify the log backup retention period. This applies only when the
         * instance runs MySQL, PostgreSQL, or PPAS.
         * <p>
         * @return {@code this}
         * @param logBackupRetentionPeriod Property logBackupRetentionPeriod: The number of days for which to retain log backup files. This parameter is required.
         */
        public Builder logBackupRetentionPeriod(final com.aliyun.ros.cdk.core.IResolvable logBackupRetentionPeriod) {
            this.props.logBackupRetentionPeriod(logBackupRetentionPeriod);
            return this;
        }

        /**
         * Property maintainTime: The period during which the maintenance performs.
         * <p>
         * The format is HH:mmZ-HH:mmZ.
         * <p>
         * @return {@code this}
         * @param maintainTime Property maintainTime: The period during which the maintenance performs. This parameter is required.
         */
        public Builder maintainTime(final java.lang.String maintainTime) {
            this.props.maintainTime(maintainTime);
            return this;
        }
        /**
         * Property maintainTime: The period during which the maintenance performs.
         * <p>
         * The format is HH:mmZ-HH:mmZ.
         * <p>
         * @return {@code this}
         * @param maintainTime Property maintainTime: The period during which the maintenance performs. This parameter is required.
         */
        public Builder maintainTime(final com.aliyun.ros.cdk.core.IResolvable maintainTime) {
            this.props.maintainTime(maintainTime);
            return this;
        }

        /**
         * Property masterUsername: The master user name for the database instance.
         * <p>
         * @return {@code this}
         * @param masterUsername Property masterUsername: The master user name for the database instance. This parameter is required.
         */
        public Builder masterUsername(final java.lang.String masterUsername) {
            this.props.masterUsername(masterUsername);
            return this;
        }
        /**
         * Property masterUsername: The master user name for the database instance.
         * <p>
         * @return {@code this}
         * @param masterUsername Property masterUsername: The master user name for the database instance. This parameter is required.
         */
        public Builder masterUsername(final com.aliyun.ros.cdk.core.IResolvable masterUsername) {
            this.props.masterUsername(masterUsername);
            return this;
        }

        /**
         * Property masterUserPassword: The master password for the database instance.
         * <p>
         * @return {@code this}
         * @param masterUserPassword Property masterUserPassword: The master password for the database instance. This parameter is required.
         */
        public Builder masterUserPassword(final java.lang.String masterUserPassword) {
            this.props.masterUserPassword(masterUserPassword);
            return this;
        }
        /**
         * Property masterUserPassword: The master password for the database instance.
         * <p>
         * @return {@code this}
         * @param masterUserPassword Property masterUserPassword: The master password for the database instance. This parameter is required.
         */
        public Builder masterUserPassword(final com.aliyun.ros.cdk.core.IResolvable masterUserPassword) {
            this.props.masterUserPassword(masterUserPassword);
            return this;
        }

        /**
         * Property masterUserType: Privilege type of account.
         * <p>
         * Normal: Common privilege.
         * Super: High privilege.
         * Sysadmin: Super privileges (SA) (only supported by SQL Server)
         * The default value is Normal.
         * <p>
         * @return {@code this}
         * @param masterUserType Property masterUserType: Privilege type of account. This parameter is required.
         */
        public Builder masterUserType(final java.lang.String masterUserType) {
            this.props.masterUserType(masterUserType);
            return this;
        }
        /**
         * Property masterUserType: Privilege type of account.
         * <p>
         * Normal: Common privilege.
         * Super: High privilege.
         * Sysadmin: Super privileges (SA) (only supported by SQL Server)
         * The default value is Normal.
         * <p>
         * @return {@code this}
         * @param masterUserType Property masterUserType: Privilege type of account. This parameter is required.
         */
        public Builder masterUserType(final com.aliyun.ros.cdk.core.IResolvable masterUserType) {
            this.props.masterUserType(masterUserType);
            return this;
        }

        /**
         * Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
         * <p>
         * @return {@code this}
         * @param multiAz Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment. This parameter is required.
         */
        public Builder multiAz(final java.lang.Boolean multiAz) {
            this.props.multiAz(multiAz);
            return this;
        }
        /**
         * Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
         * <p>
         * @return {@code this}
         * @param multiAz Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment. This parameter is required.
         */
        public Builder multiAz(final com.aliyun.ros.cdk.core.IResolvable multiAz) {
            this.props.multiAz(multiAz);
            return this;
        }

        /**
         * Property payType: The charge type of created instance.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The charge type of created instance. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The charge type of created instance.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The charge type of created instance. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property period: The subscription duration.
         * <p>
         * Valid values:
         * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
         * When PeriodType is Year, it could be from 1 to 5.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription duration.
         * <p>
         * Valid values:
         * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
         * When PeriodType is Year, it could be from 1 to 5.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodType: Charge period for created instances.
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: Charge period for created instances. This parameter is required.
         */
        public Builder periodType(final java.lang.String periodType) {
            this.props.periodType(periodType);
            return this;
        }
        /**
         * Property periodType: Charge period for created instances.
         * <p>
         * @return {@code this}
         * @param periodType Property periodType: Charge period for created instances. This parameter is required.
         */
        public Builder periodType(final com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.props.periodType(periodType);
            return this;
        }

        /**
         * Property port: The port of the database service.
         * <p>
         * @return {@code this}
         * @param port Property port: The port of the database service. This parameter is required.
         */
        public Builder port(final java.lang.Number port) {
            this.props.port(port);
            return this;
        }
        /**
         * Property port: The port of the database service.
         * <p>
         * @return {@code this}
         * @param port Property port: The port of the database service. This parameter is required.
         */
        public Builder port(final com.aliyun.ros.cdk.core.IResolvable port) {
            this.props.port(port);
            return this;
        }

        /**
         * Property preferredBackupPeriod: The backup period.
         * <p>
         * Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
         * <p>
         * @return {@code this}
         * @param preferredBackupPeriod Property preferredBackupPeriod: The backup period. This parameter is required.
         */
        public Builder preferredBackupPeriod(final com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
            this.props.preferredBackupPeriod(preferredBackupPeriod);
            return this;
        }
        /**
         * Property preferredBackupPeriod: The backup period.
         * <p>
         * Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
         * <p>
         * @return {@code this}
         * @param preferredBackupPeriod Property preferredBackupPeriod: The backup period. This parameter is required.
         */
        public Builder preferredBackupPeriod(final java.util.List<? extends java.lang.Object> preferredBackupPeriod) {
            this.props.preferredBackupPeriod(preferredBackupPeriod);
            return this;
        }

        /**
         * Property preferredBackupTime: The time when the backup task is performed.
         * <p>
         * Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
         * <p>
         * @return {@code this}
         * @param preferredBackupTime Property preferredBackupTime: The time when the backup task is performed. This parameter is required.
         */
        public Builder preferredBackupTime(final java.lang.String preferredBackupTime) {
            this.props.preferredBackupTime(preferredBackupTime);
            return this;
        }
        /**
         * Property preferredBackupTime: The time when the backup task is performed.
         * <p>
         * Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
         * <p>
         * @return {@code this}
         * @param preferredBackupTime Property preferredBackupTime: The time when the backup task is performed. This parameter is required.
         */
        public Builder preferredBackupTime(final com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
            this.props.preferredBackupTime(preferredBackupTime);
            return this;
        }

        /**
         * Property privateIpAddress: The private ip for created instance.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: The private ip for created instance. This parameter is required.
         */
        public Builder privateIpAddress(final java.lang.String privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }
        /**
         * Property privateIpAddress: The private ip for created instance.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: The private ip for created instance. This parameter is required.
         */
        public Builder privateIpAddress(final com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }

        /**
         * Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released.
         * <p>
         * Default value: None.
         * Valid values:
         * Lastest: Only the last archived backup is retained.
         * All: All of the archived backups are retained.
         * <p>
         * @return {@code this}
         * @param releasedKeepPolicy Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released. This parameter is required.
         */
        public Builder releasedKeepPolicy(final java.lang.String releasedKeepPolicy) {
            this.props.releasedKeepPolicy(releasedKeepPolicy);
            return this;
        }
        /**
         * Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released.
         * <p>
         * Default value: None.
         * Valid values:
         * Lastest: Only the last archived backup is retained.
         * All: All of the archived backups are retained.
         * <p>
         * @return {@code this}
         * @param releasedKeepPolicy Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released. This parameter is required.
         */
        public Builder releasedKeepPolicy(final com.aliyun.ros.cdk.core.IResolvable releasedKeepPolicy) {
            this.props.releasedKeepPolicy(releasedKeepPolicy);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.
         * <p>
         * You can copy the ARN from the RAM console.
         * <p>
         * @return {@code this}
         * @param roleArn Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. This parameter is required.
         */
        public Builder roleArn(final java.lang.String roleArn) {
            this.props.roleArn(roleArn);
            return this;
        }
        /**
         * Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.
         * <p>
         * You can copy the ARN from the RAM console.
         * <p>
         * @return {@code this}
         * @param roleArn Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. This parameter is required.
         */
        public Builder roleArn(final com.aliyun.ros.cdk.core.IResolvable roleArn) {
            this.props.roleArn(roleArn);
            return this;
        }

        /**
         * Property securityGroupId: The ID of the ECS security groups.
         * <p>
         * Each RDS instance can be associated with up to three ECS security groups.
         * You must separate them with commas (,).
         * To delete an ECS Security group, leave this parameter empty.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the ECS security groups. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The ID of the ECS security groups.
         * <p>
         * Each RDS instance can be associated with up to three ECS security groups.
         * You must separate them with commas (,).
         * To delete an ECS Security group, leave this parameter empty.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the ECS security groups. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property serverlessConfig: The config of RDS serverless instance.
         * <p>
         * This is required when creating serverless instance.
         * <p>
         * @return {@code this}
         * @param serverlessConfig Property serverlessConfig: The config of RDS serverless instance. This parameter is required.
         */
        public Builder serverlessConfig(final com.aliyun.ros.cdk.core.IResolvable serverlessConfig) {
            this.props.serverlessConfig(serverlessConfig);
            return this;
        }
        /**
         * Property serverlessConfig: The config of RDS serverless instance.
         * <p>
         * This is required when creating serverless instance.
         * <p>
         * @return {@code this}
         * @param serverlessConfig Property serverlessConfig: The config of RDS serverless instance. This parameter is required.
         */
        public Builder serverlessConfig(final com.aliyun.ros.cdk.rds.RosDBInstance.ServerlessConfigProperty serverlessConfig) {
            this.props.serverlessConfig(serverlessConfig);
            return this;
        }

        /**
         * Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.
         * <p>
         * Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
         * <p>
         * @return {@code this}
         * @param slaveZoneIds Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. This parameter is required.
         */
        public Builder slaveZoneIds(final com.aliyun.ros.cdk.core.IResolvable slaveZoneIds) {
            this.props.slaveZoneIds(slaveZoneIds);
            return this;
        }
        /**
         * Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.
         * <p>
         * Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
         * <p>
         * @return {@code this}
         * @param slaveZoneIds Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. This parameter is required.
         */
        public Builder slaveZoneIds(final java.util.List<? extends java.lang.Object> slaveZoneIds) {
            this.props.slaveZoneIds(slaveZoneIds);
            return this;
        }

        /**
         * Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
         * <p>
         * Valid values:Enable | Disabled.
         * <p>
         * @return {@code this}
         * @param sqlCollectorStatus Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. This parameter is required.
         */
        public Builder sqlCollectorStatus(final java.lang.String sqlCollectorStatus) {
            this.props.sqlCollectorStatus(sqlCollectorStatus);
            return this;
        }
        /**
         * Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
         * <p>
         * Valid values:Enable | Disabled.
         * <p>
         * @return {@code this}
         * @param sqlCollectorStatus Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. This parameter is required.
         */
        public Builder sqlCollectorStatus(final com.aliyun.ros.cdk.core.IResolvable sqlCollectorStatus) {
            this.props.sqlCollectorStatus(sqlCollectorStatus);
            return this;
        }

        /**
         * Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.
         * <p>
         * Valid values:
         * Disabled: Disable SSL
         * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
         * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
         * Default value is Disabled.
         * <p>
         * @return {@code this}
         * @param sslSetting Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. This parameter is required.
         */
        public Builder sslSetting(final java.lang.String sslSetting) {
            this.props.sslSetting(sslSetting);
            return this;
        }
        /**
         * Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.
         * <p>
         * Valid values:
         * Disabled: Disable SSL
         * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
         * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
         * Default value is Disabled.
         * <p>
         * @return {@code this}
         * @param sslSetting Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. This parameter is required.
         */
        public Builder sslSetting(final com.aliyun.ros.cdk.core.IResolvable sslSetting) {
            this.props.sslSetting(sslSetting);
            return this;
        }

        /**
         * Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL.
         * <p>
         * @return {@code this}
         * @param storageAutoScale Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL. This parameter is required.
         */
        public Builder storageAutoScale(final java.lang.String storageAutoScale) {
            this.props.storageAutoScale(storageAutoScale);
            return this;
        }
        /**
         * Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL.
         * <p>
         * @return {@code this}
         * @param storageAutoScale Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL. This parameter is required.
         */
        public Builder storageAutoScale(final com.aliyun.ros.cdk.core.IResolvable storageAutoScale) {
            this.props.storageAutoScale(storageAutoScale);
            return this;
        }

        /**
         * Property storageThreshold: Storage space automatic expansion trigger threshold (percentage).
         * <p>
         * @return {@code this}
         * @param storageThreshold Property storageThreshold: Storage space automatic expansion trigger threshold (percentage). This parameter is required.
         */
        public Builder storageThreshold(final java.lang.Number storageThreshold) {
            this.props.storageThreshold(storageThreshold);
            return this;
        }
        /**
         * Property storageThreshold: Storage space automatic expansion trigger threshold (percentage).
         * <p>
         * @return {@code this}
         * @param storageThreshold Property storageThreshold: Storage space automatic expansion trigger threshold (percentage). This parameter is required.
         */
        public Builder storageThreshold(final com.aliyun.ros.cdk.core.IResolvable storageThreshold) {
            this.props.storageThreshold(storageThreshold);
            return this;
        }

        /**
         * Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.
         * <p>
         * @return {@code this}
         * @param storageUpperBound Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value. This parameter is required.
         */
        public Builder storageUpperBound(final java.lang.Number storageUpperBound) {
            this.props.storageUpperBound(storageUpperBound);
            return this;
        }
        /**
         * Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.
         * <p>
         * @return {@code this}
         * @param storageUpperBound Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value. This parameter is required.
         */
        public Builder storageUpperBound(final com.aliyun.ros.cdk.core.IResolvable storageUpperBound) {
            this.props.storageUpperBound(storageUpperBound);
            return this;
        }

        /**
         * Property tags: The tags of an instance.
         * <p>
         * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
         * At most 20 tags can be specified.
         * Key
         * It can be up to 64 characters in length.
         * Cannot begin with aliyun.
         * Cannot begin with http:// or https://.
         * Cannot be a null string.
         * Value
         * It can be up to 128 characters in length.
         * Cannot begin with aliyun.
         * Cannot begin with http:// or https://.
         * Can be a null string.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The tags of an instance. This parameter is required.
         */
        public Builder tags(final java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
         * <p>
         * @return {@code this}
         * @param targetDedicatedHostIdForLog Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group. This parameter is required.
         */
        public Builder targetDedicatedHostIdForLog(final java.lang.String targetDedicatedHostIdForLog) {
            this.props.targetDedicatedHostIdForLog(targetDedicatedHostIdForLog);
            return this;
        }
        /**
         * Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
         * <p>
         * @return {@code this}
         * @param targetDedicatedHostIdForLog Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group. This parameter is required.
         */
        public Builder targetDedicatedHostIdForLog(final com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForLog) {
            this.props.targetDedicatedHostIdForLog(targetDedicatedHostIdForLog);
            return this;
        }

        /**
         * Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
         * <p>
         * @return {@code this}
         * @param targetDedicatedHostIdForMaster Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group. This parameter is required.
         */
        public Builder targetDedicatedHostIdForMaster(final java.lang.String targetDedicatedHostIdForMaster) {
            this.props.targetDedicatedHostIdForMaster(targetDedicatedHostIdForMaster);
            return this;
        }
        /**
         * Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
         * <p>
         * @return {@code this}
         * @param targetDedicatedHostIdForMaster Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group. This parameter is required.
         */
        public Builder targetDedicatedHostIdForMaster(final com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForMaster) {
            this.props.targetDedicatedHostIdForMaster(targetDedicatedHostIdForMaster);
            return this;
        }

        /**
         * Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
         * <p>
         * @return {@code this}
         * @param targetDedicatedHostIdForSlave Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group. This parameter is required.
         */
        public Builder targetDedicatedHostIdForSlave(final java.lang.String targetDedicatedHostIdForSlave) {
            this.props.targetDedicatedHostIdForSlave(targetDedicatedHostIdForSlave);
            return this;
        }
        /**
         * Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
         * <p>
         * @return {@code this}
         * @param targetDedicatedHostIdForSlave Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group. This parameter is required.
         */
        public Builder targetDedicatedHostIdForSlave(final com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForSlave) {
            this.props.targetDedicatedHostIdForSlave(targetDedicatedHostIdForSlave);
            return this;
        }

        /**
         * Property vpcId: The VPC id of created database instance.
         * <p>
         * For VPC network, the property is required.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id of created database instance. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC id of created database instance.
         * <p>
         * For VPC network, the property is required.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC id of created database instance. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The vSwitch id of created instance.
         * <p>
         * For VPC network, the property is required.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch id of created instance. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vSwitch id of created instance.
         * <p>
         * For VPC network, the property is required.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch id of created instance. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: selected zone to create database instance.
         * <p>
         * You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: selected zone to create database instance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: selected zone to create database instance.
         * <p>
         * You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: selected zone to create database instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.DBInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.DBInstance build() {
            return new com.aliyun.ros.cdk.rds.DBInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
