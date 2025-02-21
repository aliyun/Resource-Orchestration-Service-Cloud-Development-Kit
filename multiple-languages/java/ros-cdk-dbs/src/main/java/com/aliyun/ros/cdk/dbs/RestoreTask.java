package com.aliyun.ros.cdk.dbs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DBS::RestoreTask</code>, which is used to create a restore task.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:13.813Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.RestoreTask")
public class RestoreTask extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dbs.IRestoreTask {

    protected RestoreTask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RestoreTask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public RestoreTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.RestoreTaskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public RestoreTask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.RestoreTaskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RestoreTaskId: The ID of the restoration task.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRestoreTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrRestoreTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.RestoreTaskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dbs.RestoreTaskProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dbs.RestoreTask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dbs.RestoreTask> {
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
        private final com.aliyun.ros.cdk.dbs.RestoreTaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dbs.RestoreTaskProps.Builder();
        }

        /**
         * Property backupPlanId: The ID of the backup plan.
         * <p>
         * @return {@code this}
         * @param backupPlanId Property backupPlanId: The ID of the backup plan. This parameter is required.
         */
        public Builder backupPlanId(final java.lang.String backupPlanId) {
            this.props.backupPlanId(backupPlanId);
            return this;
        }
        /**
         * Property backupPlanId: The ID of the backup plan.
         * <p>
         * @return {@code this}
         * @param backupPlanId Property backupPlanId: The ID of the backup plan. This parameter is required.
         */
        public Builder backupPlanId(final com.aliyun.ros.cdk.core.IResolvable backupPlanId) {
            this.props.backupPlanId(backupPlanId);
            return this;
        }

        /**
         * Property destinationEndpointInstanceType: The location of the database.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>rds</li>
         * <li>ecs</li>
         * <li>express: a database connected over express connect, VPN Gateway, or smart gateway.</li>
         * <li>agent: The database connected through the backup Gateway</li>
         * <li>dds: apsaradb for MongoDB</li>
         * <li>kvstore</li>
         * <li>polardb</li>
         * <li>drds</li>
         * <li>dg: the database is directly connected through IP Address: Port.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param destinationEndpointInstanceType Property destinationEndpointInstanceType: The location of the database. This parameter is required.
         */
        public Builder destinationEndpointInstanceType(final java.lang.String destinationEndpointInstanceType) {
            this.props.destinationEndpointInstanceType(destinationEndpointInstanceType);
            return this;
        }
        /**
         * Property destinationEndpointInstanceType: The location of the database.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>rds</li>
         * <li>ecs</li>
         * <li>express: a database connected over express connect, VPN Gateway, or smart gateway.</li>
         * <li>agent: The database connected through the backup Gateway</li>
         * <li>dds: apsaradb for MongoDB</li>
         * <li>kvstore</li>
         * <li>polardb</li>
         * <li>drds</li>
         * <li>dg: the database is directly connected through IP Address: Port.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param destinationEndpointInstanceType Property destinationEndpointInstanceType: The location of the database. This parameter is required.
         */
        public Builder destinationEndpointInstanceType(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointInstanceType) {
            this.props.destinationEndpointInstanceType(destinationEndpointInstanceType);
            return this;
        }

        /**
         * Property restoreTaskName: The name of the restoration task.
         * <p>
         * @return {@code this}
         * @param restoreTaskName Property restoreTaskName: The name of the restoration task. This parameter is required.
         */
        public Builder restoreTaskName(final java.lang.String restoreTaskName) {
            this.props.restoreTaskName(restoreTaskName);
            return this;
        }
        /**
         * Property restoreTaskName: The name of the restoration task.
         * <p>
         * @return {@code this}
         * @param restoreTaskName Property restoreTaskName: The name of the restoration task. This parameter is required.
         */
        public Builder restoreTaskName(final com.aliyun.ros.cdk.core.IResolvable restoreTaskName) {
            this.props.restoreTaskName(restoreTaskName);
            return this;
        }

        /**
         * Property backupGatewayId: The ID of the backup gateway.
         * <p>
         * NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
         * <p>
         * @return {@code this}
         * @param backupGatewayId Property backupGatewayId: The ID of the backup gateway. This parameter is required.
         */
        public Builder backupGatewayId(final java.lang.Number backupGatewayId) {
            this.props.backupGatewayId(backupGatewayId);
            return this;
        }
        /**
         * Property backupGatewayId: The ID of the backup gateway.
         * <p>
         * NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
         * <p>
         * @return {@code this}
         * @param backupGatewayId Property backupGatewayId: The ID of the backup gateway. This parameter is required.
         */
        public Builder backupGatewayId(final com.aliyun.ros.cdk.core.IResolvable backupGatewayId) {
            this.props.backupGatewayId(backupGatewayId);
            return this;
        }

        /**
         * Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.
         * <p>
         * @return {@code this}
         * @param backupSetId Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime. This parameter is required.
         */
        public Builder backupSetId(final java.lang.String backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }
        /**
         * Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.
         * <p>
         * @return {@code this}
         * @param backupSetId Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime. This parameter is required.
         */
        public Builder backupSetId(final com.aliyun.ros.cdk.core.IResolvable backupSetId) {
            this.props.backupSetId(backupSetId);
            return this;
        }

        /**
         * Property destinationEndpointDatabaseName: The name of the RDS database.
         * <p>
         * Note When the database type is PostgreSQL or MongoDB, this parameter is required.
         * <p>
         * @return {@code this}
         * @param destinationEndpointDatabaseName Property destinationEndpointDatabaseName: The name of the RDS database. This parameter is required.
         */
        public Builder destinationEndpointDatabaseName(final java.lang.String destinationEndpointDatabaseName) {
            this.props.destinationEndpointDatabaseName(destinationEndpointDatabaseName);
            return this;
        }
        /**
         * Property destinationEndpointDatabaseName: The name of the RDS database.
         * <p>
         * Note When the database type is PostgreSQL or MongoDB, this parameter is required.
         * <p>
         * @return {@code this}
         * @param destinationEndpointDatabaseName Property destinationEndpointDatabaseName: The name of the RDS database. This parameter is required.
         */
        public Builder destinationEndpointDatabaseName(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointDatabaseName) {
            this.props.destinationEndpointDatabaseName(destinationEndpointDatabaseName);
            return this;
        }

        /**
         * Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
         * <p>
         * NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
         * <p>
         * @return {@code this}
         * @param destinationEndpointInstanceId Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query. This parameter is required.
         */
        public Builder destinationEndpointInstanceId(final java.lang.String destinationEndpointInstanceId) {
            this.props.destinationEndpointInstanceId(destinationEndpointInstanceId);
            return this;
        }
        /**
         * Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
         * <p>
         * NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
         * <p>
         * @return {@code this}
         * @param destinationEndpointInstanceId Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query. This parameter is required.
         */
        public Builder destinationEndpointInstanceId(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointInstanceId) {
            this.props.destinationEndpointInstanceId(destinationEndpointInstanceId);
            return this;
        }

        /**
         * Property destinationEndpointIp: The endpoint used to connect to the database.
         * <p>
         * NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
         * <p>
         * @return {@code this}
         * @param destinationEndpointIp Property destinationEndpointIp: The endpoint used to connect to the database. This parameter is required.
         */
        public Builder destinationEndpointIp(final java.lang.String destinationEndpointIp) {
            this.props.destinationEndpointIp(destinationEndpointIp);
            return this;
        }
        /**
         * Property destinationEndpointIp: The endpoint used to connect to the database.
         * <p>
         * NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
         * <p>
         * @return {@code this}
         * @param destinationEndpointIp Property destinationEndpointIp: The endpoint used to connect to the database. This parameter is required.
         */
        public Builder destinationEndpointIp(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointIp) {
            this.props.destinationEndpointIp(destinationEndpointIp);
            return this;
        }

        /**
         * Property destinationEndpointOracleSid: The SID of the Oracle instance.
         * <p>
         * Note This parameter is required if the database type is Oracle.
         * <p>
         * @return {@code this}
         * @param destinationEndpointOracleSid Property destinationEndpointOracleSid: The SID of the Oracle instance. This parameter is required.
         */
        public Builder destinationEndpointOracleSid(final java.lang.String destinationEndpointOracleSid) {
            this.props.destinationEndpointOracleSid(destinationEndpointOracleSid);
            return this;
        }
        /**
         * Property destinationEndpointOracleSid: The SID of the Oracle instance.
         * <p>
         * Note This parameter is required if the database type is Oracle.
         * <p>
         * @return {@code this}
         * @param destinationEndpointOracleSid Property destinationEndpointOracleSid: The SID of the Oracle instance. This parameter is required.
         */
        public Builder destinationEndpointOracleSid(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointOracleSid) {
            this.props.destinationEndpointOracleSid(destinationEndpointOracleSid);
            return this;
        }

        /**
         * Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
         * <p>
         * Note You must specify this parameter when the database type is Redis, or the database location
         * is agent and the database type is MSSQL.
         * <p>
         * @return {@code this}
         * @param destinationEndpointPassword Property destinationEndpointPassword: The password that is used to log on to the RDS instance. This parameter is required.
         */
        public Builder destinationEndpointPassword(final java.lang.String destinationEndpointPassword) {
            this.props.destinationEndpointPassword(destinationEndpointPassword);
            return this;
        }
        /**
         * Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
         * <p>
         * Note You must specify this parameter when the database type is Redis, or the database location
         * is agent and the database type is MSSQL.
         * <p>
         * @return {@code this}
         * @param destinationEndpointPassword Property destinationEndpointPassword: The password that is used to log on to the RDS instance. This parameter is required.
         */
        public Builder destinationEndpointPassword(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointPassword) {
            this.props.destinationEndpointPassword(destinationEndpointPassword);
            return this;
        }

        /**
         * Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
         * <p>
         * NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
         * <p>
         * @return {@code this}
         * @param destinationEndpointPort Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server. This parameter is required.
         */
        public Builder destinationEndpointPort(final java.lang.Number destinationEndpointPort) {
            this.props.destinationEndpointPort(destinationEndpointPort);
            return this;
        }
        /**
         * Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
         * <p>
         * NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
         * <p>
         * @return {@code this}
         * @param destinationEndpointPort Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server. This parameter is required.
         */
        public Builder destinationEndpointPort(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointPort) {
            this.props.destinationEndpointPort(destinationEndpointPort);
            return this;
        }

        /**
         * Property destinationEndpointRegion: The region of the database.
         * <p>
         * NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
         * <p>
         * @return {@code this}
         * @param destinationEndpointRegion Property destinationEndpointRegion: The region of the database. This parameter is required.
         */
        public Builder destinationEndpointRegion(final java.lang.String destinationEndpointRegion) {
            this.props.destinationEndpointRegion(destinationEndpointRegion);
            return this;
        }
        /**
         * Property destinationEndpointRegion: The region of the database.
         * <p>
         * NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
         * <p>
         * @return {@code this}
         * @param destinationEndpointRegion Property destinationEndpointRegion: The region of the database. This parameter is required.
         */
        public Builder destinationEndpointRegion(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointRegion) {
            this.props.destinationEndpointRegion(destinationEndpointRegion);
            return this;
        }

        /**
         * Property destinationEndpointUserName: The database account.
         * <p>
         * Note You must specify this parameter when the database type is Redis, or the database location
         * is agent and the database type is MSSQL.
         * <p>
         * @return {@code this}
         * @param destinationEndpointUserName Property destinationEndpointUserName: The database account. This parameter is required.
         */
        public Builder destinationEndpointUserName(final java.lang.String destinationEndpointUserName) {
            this.props.destinationEndpointUserName(destinationEndpointUserName);
            return this;
        }
        /**
         * Property destinationEndpointUserName: The database account.
         * <p>
         * Note You must specify this parameter when the database type is Redis, or the database location
         * is agent and the database type is MSSQL.
         * <p>
         * @return {@code this}
         * @param destinationEndpointUserName Property destinationEndpointUserName: The database account. This parameter is required.
         */
        public Builder destinationEndpointUserName(final com.aliyun.ros.cdk.core.IResolvable destinationEndpointUserName) {
            this.props.destinationEndpointUserName(destinationEndpointUserName);
            return this;
        }

        /**
         * Property duplicateConflict: The handling method for conflicts between objects with the same name.
         * <p>
         * Valid values:
         * failure: The object with the same name fails (default).
         * renamenew: renames an object with the same name.
         * <p>
         * @return {@code this}
         * @param duplicateConflict Property duplicateConflict: The handling method for conflicts between objects with the same name. This parameter is required.
         */
        public Builder duplicateConflict(final java.lang.String duplicateConflict) {
            this.props.duplicateConflict(duplicateConflict);
            return this;
        }
        /**
         * Property duplicateConflict: The handling method for conflicts between objects with the same name.
         * <p>
         * Valid values:
         * failure: The object with the same name fails (default).
         * renamenew: renames an object with the same name.
         * <p>
         * @return {@code this}
         * @param duplicateConflict Property duplicateConflict: The handling method for conflicts between objects with the same name. This parameter is required.
         */
        public Builder duplicateConflict(final com.aliyun.ros.cdk.core.IResolvable duplicateConflict) {
            this.props.duplicateConflict(duplicateConflict);
            return this;
        }

        /**
         * Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
         * <p>
         * @return {@code this}
         * @param restoreDir Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL. This parameter is required.
         */
        public Builder restoreDir(final java.lang.String restoreDir) {
            this.props.restoreDir(restoreDir);
            return this;
        }
        /**
         * Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
         * <p>
         * @return {@code this}
         * @param restoreDir Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL. This parameter is required.
         */
        public Builder restoreDir(final com.aliyun.ros.cdk.core.IResolvable restoreDir) {
            this.props.restoreDir(restoreDir);
            return this;
        }

        /**
         * Property restoreHome: Database Program Directory.
         * <p>
         * @return {@code this}
         * @param restoreHome Property restoreHome: Database Program Directory. This parameter is required.
         */
        public Builder restoreHome(final java.lang.String restoreHome) {
            this.props.restoreHome(restoreHome);
            return this;
        }
        /**
         * Property restoreHome: Database Program Directory.
         * <p>
         * @return {@code this}
         * @param restoreHome Property restoreHome: Database Program Directory. This parameter is required.
         */
        public Builder restoreHome(final com.aliyun.ros.cdk.core.IResolvable restoreHome) {
            this.props.restoreHome(restoreHome);
            return this;
        }

        /**
         * Property restoreObjects: Restore an object.
         * <p>
         * Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
         * <p>
         * @return {@code this}
         * @param restoreObjects Property restoreObjects: Restore an object. This parameter is required.
         */
        public Builder restoreObjects(final java.lang.String restoreObjects) {
            this.props.restoreObjects(restoreObjects);
            return this;
        }
        /**
         * Property restoreObjects: Restore an object.
         * <p>
         * Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
         * <p>
         * @return {@code this}
         * @param restoreObjects Property restoreObjects: Restore an object. This parameter is required.
         */
        public Builder restoreObjects(final com.aliyun.ros.cdk.core.IResolvable restoreObjects) {
            this.props.restoreObjects(restoreObjects);
            return this;
        }

        /**
         * Property restoreTime: The time when the fault is restored.
         * <p>
         * Set the value to 1554560477000.
         * <p>
         * @return {@code this}
         * @param restoreTime Property restoreTime: The time when the fault is restored. This parameter is required.
         */
        public Builder restoreTime(final java.lang.Number restoreTime) {
            this.props.restoreTime(restoreTime);
            return this;
        }
        /**
         * Property restoreTime: The time when the fault is restored.
         * <p>
         * Set the value to 1554560477000.
         * <p>
         * @return {@code this}
         * @param restoreTime Property restoreTime: The time when the fault is restored. This parameter is required.
         */
        public Builder restoreTime(final com.aliyun.ros.cdk.core.IResolvable restoreTime) {
            this.props.restoreTime(restoreTime);
            return this;
        }

        /**
         * Property startTask: Start restore task after creating a recovery task.
         * <p>
         * @return {@code this}
         * @param startTask Property startTask: Start restore task after creating a recovery task. This parameter is required.
         */
        public Builder startTask(final java.lang.Boolean startTask) {
            this.props.startTask(startTask);
            return this;
        }
        /**
         * Property startTask: Start restore task after creating a recovery task.
         * <p>
         * @return {@code this}
         * @param startTask Property startTask: Start restore task after creating a recovery task. This parameter is required.
         */
        public Builder startTask(final com.aliyun.ros.cdk.core.IResolvable startTask) {
            this.props.startTask(startTask);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dbs.RestoreTask}.
         */
        @Override
        public com.aliyun.ros.cdk.dbs.RestoreTask build() {
            return new com.aliyun.ros.cdk.dbs.RestoreTask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
