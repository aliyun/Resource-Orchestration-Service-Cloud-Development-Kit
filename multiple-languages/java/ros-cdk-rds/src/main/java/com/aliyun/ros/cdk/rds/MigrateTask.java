package com.aliyun.ros.cdk.rds;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RDS::MigrateTask</code>, which is used to create a migration task to restore backup files from an Object Storage Service (OSS) bucket to an ApsaraDB RDS for SQL Server instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:11.014Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.MigrateTask")
public class MigrateTask extends com.aliyun.ros.cdk.core.Resource {

    protected MigrateTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MigrateTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public MigrateTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.MigrateTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public MigrateTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.MigrateTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DBName: The name of the database that you want to restore.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbName() {
        return software.amazon.jsii.Kernel.get(this, "attrDbName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MigrateTaskId: The ID of the migrate task.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMigrateTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrMigrateTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.MigrateTaskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.MigrateTaskProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.MigrateTaskProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.MigrateTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.MigrateTask> {
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
        private final com.aliyun.ros.cdk.rds.MigrateTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.MigrateTaskProps.Builder();
        }

        /**
         * Property backupMode: The type of the migration task.
         * <p>
         * Valid values:
         * FULL: specifies that full backup files are used to restore data.
         * UPDF: specifies that incremental backup files or log files are used to restore incremental data.
         * <p>
         * @return {@code this}
         * @param backupMode Property backupMode: The type of the migration task. This parameter is required.
         */
        public Builder backupMode(final java.lang.String backupMode) {
            this.props.backupMode(backupMode);
            return this;
        }
        /**
         * Property backupMode: The type of the migration task.
         * <p>
         * Valid values:
         * FULL: specifies that full backup files are used to restore data.
         * UPDF: specifies that incremental backup files or log files are used to restore incremental data.
         * <p>
         * @return {@code this}
         * @param backupMode Property backupMode: The type of the migration task. This parameter is required.
         */
        public Builder backupMode(final com.aliyun.ros.cdk.core.IResolvable backupMode) {
            this.props.backupMode(backupMode);
            return this;
        }

        /**
         * Property dbInstanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property dbName: The name of the database that you want to restore.
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: The name of the database that you want to restore. This parameter is required.
         */
        public Builder dbName(final java.lang.String dbName) {
            this.props.dbName(dbName);
            return this;
        }
        /**
         * Property dbName: The name of the database that you want to restore.
         * <p>
         * @return {@code this}
         * @param dbName Property dbName: The name of the database that you want to restore. This parameter is required.
         */
        public Builder dbName(final com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.props.dbName(dbName);
            return this;
        }

        /**
         * Property isOnlineDb: Specifies whether to bring the restored database online for user access.
         * <p>
         * Note The value for SQL Server 2008 R2 is fixed to True.
         * <p>
         * @return {@code this}
         * @param isOnlineDb Property isOnlineDb: Specifies whether to bring the restored database online for user access. This parameter is required.
         */
        public Builder isOnlineDb(final java.lang.Boolean isOnlineDb) {
            this.props.isOnlineDb(isOnlineDb);
            return this;
        }
        /**
         * Property isOnlineDb: Specifies whether to bring the restored database online for user access.
         * <p>
         * Note The value for SQL Server 2008 R2 is fixed to True.
         * <p>
         * @return {@code this}
         * @param isOnlineDb Property isOnlineDb: Specifies whether to bring the restored database online for user access. This parameter is required.
         */
        public Builder isOnlineDb(final com.aliyun.ros.cdk.core.IResolvable isOnlineDb) {
            this.props.isOnlineDb(isOnlineDb);
            return this;
        }

        /**
         * Property checkDbMode: The consistency check method of the database.
         * <p>
         * Valid values:
         * SyncExecuteDBCheck: synchronous database check
         * AsyncExecuteDBCheck: asynchronous database check
         * Default value: AsyncExecuteDBCheck (compatible with SQL Server 2008 R2).
         * Note When IsOnlineDB is set to True, this value is valid.
         * <p>
         * @return {@code this}
         * @param checkDbMode Property checkDbMode: The consistency check method of the database. This parameter is required.
         */
        public Builder checkDbMode(final java.lang.String checkDbMode) {
            this.props.checkDbMode(checkDbMode);
            return this;
        }
        /**
         * Property checkDbMode: The consistency check method of the database.
         * <p>
         * Valid values:
         * SyncExecuteDBCheck: synchronous database check
         * AsyncExecuteDBCheck: asynchronous database check
         * Default value: AsyncExecuteDBCheck (compatible with SQL Server 2008 R2).
         * Note When IsOnlineDB is set to True, this value is valid.
         * <p>
         * @return {@code this}
         * @param checkDbMode Property checkDbMode: The consistency check method of the database. This parameter is required.
         */
        public Builder checkDbMode(final com.aliyun.ros.cdk.core.IResolvable checkDbMode) {
            this.props.checkDbMode(checkDbMode);
            return this;
        }

        /**
         * Property ossObjectPositions: The information of the backup file in the OSS bucket.
         * <p>
         * The values consist of three parts that are separated by colons (:):
         * The endpoint of the OSS bucket: oss-ap-southeast-1.aliyuncs.com.
         * The name of the OSS bucket: rdsmssqlsingapore.
         * The key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak.
         * Note
         * This parameter is optional for instances that run SQL Server 2008 R2.
         * This parameter is required for instances that run a database engine later than SQL
         * Server 2008 R2.
         * <p>
         * @return {@code this}
         * @param ossObjectPositions Property ossObjectPositions: The information of the backup file in the OSS bucket. This parameter is required.
         */
        public Builder ossObjectPositions(final java.lang.String ossObjectPositions) {
            this.props.ossObjectPositions(ossObjectPositions);
            return this;
        }
        /**
         * Property ossObjectPositions: The information of the backup file in the OSS bucket.
         * <p>
         * The values consist of three parts that are separated by colons (:):
         * The endpoint of the OSS bucket: oss-ap-southeast-1.aliyuncs.com.
         * The name of the OSS bucket: rdsmssqlsingapore.
         * The key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak.
         * Note
         * This parameter is optional for instances that run SQL Server 2008 R2.
         * This parameter is required for instances that run a database engine later than SQL
         * Server 2008 R2.
         * <p>
         * @return {@code this}
         * @param ossObjectPositions Property ossObjectPositions: The information of the backup file in the OSS bucket. This parameter is required.
         */
        public Builder ossObjectPositions(final com.aliyun.ros.cdk.core.IResolvable ossObjectPositions) {
            this.props.ossObjectPositions(ossObjectPositions);
            return this;
        }

        /**
         * Property ossUrls: The shared URL of the backup file in the OSS bucket.
         * <p>
         * The URL must be encoded.
         * If you specify multiple URLs, separate them with vertical bars (|) and then encode
         * them.
         * Note This parameter must be entered for instances that run SQL Server 2008 R2.
         * <p>
         * @return {@code this}
         * @param ossUrls Property ossUrls: The shared URL of the backup file in the OSS bucket. This parameter is required.
         */
        public Builder ossUrls(final java.lang.String ossUrls) {
            this.props.ossUrls(ossUrls);
            return this;
        }
        /**
         * Property ossUrls: The shared URL of the backup file in the OSS bucket.
         * <p>
         * The URL must be encoded.
         * If you specify multiple URLs, separate them with vertical bars (|) and then encode
         * them.
         * Note This parameter must be entered for instances that run SQL Server 2008 R2.
         * <p>
         * @return {@code this}
         * @param ossUrls Property ossUrls: The shared URL of the backup file in the OSS bucket. This parameter is required.
         */
        public Builder ossUrls(final com.aliyun.ros.cdk.core.IResolvable ossUrls) {
            this.props.ossUrls(ossUrls);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.MigrateTask}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.MigrateTask build() {
            return new com.aliyun.ros.cdk.rds.MigrateTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
