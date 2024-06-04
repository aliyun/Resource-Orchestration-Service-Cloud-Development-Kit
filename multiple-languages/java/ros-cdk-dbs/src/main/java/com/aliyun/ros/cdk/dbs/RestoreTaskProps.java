package com.aliyun.ros.cdk.dbs;

/**
 * Properties for defining a <code>RestoreTask</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dbs-restoretask
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:53.724Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.RestoreTaskProps")
@software.amazon.jsii.Jsii.Proxy(RestoreTaskProps.Jsii$Proxy.class)
public interface RestoreTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property backupPlanId: The ID of the backup plan.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBackupPlanId();

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
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationEndpointInstanceType();

    /**
     * Property restoreTaskName: The name of the restoration task.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRestoreTaskName();

    /**
     * Property backupGatewayId: The ID of the backup gateway.
     * <p>
     * NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupGatewayId() {
        return null;
    }

    /**
     * Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupSetId() {
        return null;
    }

    /**
     * Property destinationEndpointDatabaseName: The name of the RDS database.
     * <p>
     * Note When the database type is PostgreSQL or MongoDB, this parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointDatabaseName() {
        return null;
    }

    /**
     * Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
     * <p>
     * NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointInstanceId() {
        return null;
    }

    /**
     * Property destinationEndpointIp: The endpoint used to connect to the database.
     * <p>
     * NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointIp() {
        return null;
    }

    /**
     * Property destinationEndpointOracleSid: The SID of the Oracle instance.
     * <p>
     * Note This parameter is required if the database type is Oracle.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointOracleSid() {
        return null;
    }

    /**
     * Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
     * <p>
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointPassword() {
        return null;
    }

    /**
     * Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
     * <p>
     * NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointPort() {
        return null;
    }

    /**
     * Property destinationEndpointRegion: The region of the database.
     * <p>
     * NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointRegion() {
        return null;
    }

    /**
     * Property destinationEndpointUserName: The database account.
     * <p>
     * Note You must specify this parameter when the database type is Redis, or the database location
     * is agent and the database type is MSSQL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDestinationEndpointUserName() {
        return null;
    }

    /**
     * Property duplicateConflict: The handling method for conflicts between objects with the same name.
     * <p>
     * Valid values:
     * failure: The object with the same name fails (default).
     * renamenew: renames an object with the same name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuplicateConflict() {
        return null;
    }

    /**
     * Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreDir() {
        return null;
    }

    /**
     * Property restoreHome: Database Program Directory.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreHome() {
        return null;
    }

    /**
     * Property restoreObjects: Restore an object.
     * <p>
     * Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreObjects() {
        return null;
    }

    /**
     * Property restoreTime: The time when the fault is restored.
     * <p>
     * Set the value to 1554560477000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreTime() {
        return null;
    }

    /**
     * Property startTask: Start restore task after creating a recovery task.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStartTask() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RestoreTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RestoreTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RestoreTaskProps> {
        java.lang.Object backupPlanId;
        java.lang.Object destinationEndpointInstanceType;
        java.lang.Object restoreTaskName;
        java.lang.Object backupGatewayId;
        java.lang.Object backupSetId;
        java.lang.Object destinationEndpointDatabaseName;
        java.lang.Object destinationEndpointInstanceId;
        java.lang.Object destinationEndpointIp;
        java.lang.Object destinationEndpointOracleSid;
        java.lang.Object destinationEndpointPassword;
        java.lang.Object destinationEndpointPort;
        java.lang.Object destinationEndpointRegion;
        java.lang.Object destinationEndpointUserName;
        java.lang.Object duplicateConflict;
        java.lang.Object restoreDir;
        java.lang.Object restoreHome;
        java.lang.Object restoreObjects;
        java.lang.Object restoreTime;
        java.lang.Object startTask;

        /**
         * Sets the value of {@link RestoreTaskProps#getBackupPlanId}
         * @param backupPlanId Property backupPlanId: The ID of the backup plan. This parameter is required.
         * @return {@code this}
         */
        public Builder backupPlanId(java.lang.String backupPlanId) {
            this.backupPlanId = backupPlanId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getBackupPlanId}
         * @param backupPlanId Property backupPlanId: The ID of the backup plan. This parameter is required.
         * @return {@code this}
         */
        public Builder backupPlanId(com.aliyun.ros.cdk.core.IResolvable backupPlanId) {
            this.backupPlanId = backupPlanId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointInstanceType}
         * @param destinationEndpointInstanceType Property destinationEndpointInstanceType: The location of the database. This parameter is required.
         *                                        Valid values:
         *                                        <p>
         *                                        <ul>
         *                                        <li>rds</li>
         *                                        <li>ecs</li>
         *                                        <li>express: a database connected over express connect, VPN Gateway, or smart gateway.</li>
         *                                        <li>agent: The database connected through the backup Gateway</li>
         *                                        <li>dds: apsaradb for MongoDB</li>
         *                                        <li>kvstore</li>
         *                                        <li>polardb</li>
         *                                        <li>drds</li>
         *                                        <li>dg: the database is directly connected through IP Address: Port.</li>
         *                                        </ul>
         * @return {@code this}
         */
        public Builder destinationEndpointInstanceType(java.lang.String destinationEndpointInstanceType) {
            this.destinationEndpointInstanceType = destinationEndpointInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointInstanceType}
         * @param destinationEndpointInstanceType Property destinationEndpointInstanceType: The location of the database. This parameter is required.
         *                                        Valid values:
         *                                        <p>
         *                                        <ul>
         *                                        <li>rds</li>
         *                                        <li>ecs</li>
         *                                        <li>express: a database connected over express connect, VPN Gateway, or smart gateway.</li>
         *                                        <li>agent: The database connected through the backup Gateway</li>
         *                                        <li>dds: apsaradb for MongoDB</li>
         *                                        <li>kvstore</li>
         *                                        <li>polardb</li>
         *                                        <li>drds</li>
         *                                        <li>dg: the database is directly connected through IP Address: Port.</li>
         *                                        </ul>
         * @return {@code this}
         */
        public Builder destinationEndpointInstanceType(com.aliyun.ros.cdk.core.IResolvable destinationEndpointInstanceType) {
            this.destinationEndpointInstanceType = destinationEndpointInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getRestoreTaskName}
         * @param restoreTaskName Property restoreTaskName: The name of the restoration task. This parameter is required.
         * @return {@code this}
         */
        public Builder restoreTaskName(java.lang.String restoreTaskName) {
            this.restoreTaskName = restoreTaskName;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getRestoreTaskName}
         * @param restoreTaskName Property restoreTaskName: The name of the restoration task. This parameter is required.
         * @return {@code this}
         */
        public Builder restoreTaskName(com.aliyun.ros.cdk.core.IResolvable restoreTaskName) {
            this.restoreTaskName = restoreTaskName;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getBackupGatewayId}
         * @param backupGatewayId Property backupGatewayId: The ID of the backup gateway.
         *                        NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
         * @return {@code this}
         */
        public Builder backupGatewayId(java.lang.Number backupGatewayId) {
            this.backupGatewayId = backupGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getBackupGatewayId}
         * @param backupGatewayId Property backupGatewayId: The ID of the backup gateway.
         *                        NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
         * @return {@code this}
         */
        public Builder backupGatewayId(com.aliyun.ros.cdk.core.IResolvable backupGatewayId) {
            this.backupGatewayId = backupGatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getBackupSetId}
         * @param backupSetId Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.
         * @return {@code this}
         */
        public Builder backupSetId(java.lang.String backupSetId) {
            this.backupSetId = backupSetId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getBackupSetId}
         * @param backupSetId Property backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to RestoreTime.
         * @return {@code this}
         */
        public Builder backupSetId(com.aliyun.ros.cdk.core.IResolvable backupSetId) {
            this.backupSetId = backupSetId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointDatabaseName}
         * @param destinationEndpointDatabaseName Property destinationEndpointDatabaseName: The name of the RDS database.
         *                                        Note When the database type is PostgreSQL or MongoDB, this parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpointDatabaseName(java.lang.String destinationEndpointDatabaseName) {
            this.destinationEndpointDatabaseName = destinationEndpointDatabaseName;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointDatabaseName}
         * @param destinationEndpointDatabaseName Property destinationEndpointDatabaseName: The name of the RDS database.
         *                                        Note When the database type is PostgreSQL or MongoDB, this parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpointDatabaseName(com.aliyun.ros.cdk.core.IResolvable destinationEndpointDatabaseName) {
            this.destinationEndpointDatabaseName = destinationEndpointDatabaseName;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointInstanceId}
         * @param destinationEndpointInstanceId Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
         *                                      NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpointInstanceId(java.lang.String destinationEndpointInstanceId) {
            this.destinationEndpointInstanceId = destinationEndpointInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointInstanceId}
         * @param destinationEndpointInstanceId Property destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
         *                                      NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpointInstanceId(com.aliyun.ros.cdk.core.IResolvable destinationEndpointInstanceId) {
            this.destinationEndpointInstanceId = destinationEndpointInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointIp}
         * @param destinationEndpointIp Property destinationEndpointIp: The endpoint used to connect to the database.
         *                              NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpointIp(java.lang.String destinationEndpointIp) {
            this.destinationEndpointIp = destinationEndpointIp;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointIp}
         * @param destinationEndpointIp Property destinationEndpointIp: The endpoint used to connect to the database.
         *                              NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpointIp(com.aliyun.ros.cdk.core.IResolvable destinationEndpointIp) {
            this.destinationEndpointIp = destinationEndpointIp;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointOracleSid}
         * @param destinationEndpointOracleSid Property destinationEndpointOracleSid: The SID of the Oracle instance.
         *                                     Note This parameter is required if the database type is Oracle.
         * @return {@code this}
         */
        public Builder destinationEndpointOracleSid(java.lang.String destinationEndpointOracleSid) {
            this.destinationEndpointOracleSid = destinationEndpointOracleSid;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointOracleSid}
         * @param destinationEndpointOracleSid Property destinationEndpointOracleSid: The SID of the Oracle instance.
         *                                     Note This parameter is required if the database type is Oracle.
         * @return {@code this}
         */
        public Builder destinationEndpointOracleSid(com.aliyun.ros.cdk.core.IResolvable destinationEndpointOracleSid) {
            this.destinationEndpointOracleSid = destinationEndpointOracleSid;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointPassword}
         * @param destinationEndpointPassword Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
         *                                    Note You must specify this parameter when the database type is Redis, or the database location
         *                                    is agent and the database type is MSSQL.
         * @return {@code this}
         */
        public Builder destinationEndpointPassword(java.lang.String destinationEndpointPassword) {
            this.destinationEndpointPassword = destinationEndpointPassword;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointPassword}
         * @param destinationEndpointPassword Property destinationEndpointPassword: The password that is used to log on to the RDS instance.
         *                                    Note You must specify this parameter when the database type is Redis, or the database location
         *                                    is agent and the database type is MSSQL.
         * @return {@code this}
         */
        public Builder destinationEndpointPassword(com.aliyun.ros.cdk.core.IResolvable destinationEndpointPassword) {
            this.destinationEndpointPassword = destinationEndpointPassword;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointPort}
         * @param destinationEndpointPort Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
         *                                NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpointPort(java.lang.Number destinationEndpointPort) {
            this.destinationEndpointPort = destinationEndpointPort;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointPort}
         * @param destinationEndpointPort Property destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
         *                                NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpointPort(com.aliyun.ros.cdk.core.IResolvable destinationEndpointPort) {
            this.destinationEndpointPort = destinationEndpointPort;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointRegion}
         * @param destinationEndpointRegion Property destinationEndpointRegion: The region of the database.
         *                                  NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpointRegion(java.lang.String destinationEndpointRegion) {
            this.destinationEndpointRegion = destinationEndpointRegion;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointRegion}
         * @param destinationEndpointRegion Property destinationEndpointRegion: The region of the database.
         *                                  NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
         * @return {@code this}
         */
        public Builder destinationEndpointRegion(com.aliyun.ros.cdk.core.IResolvable destinationEndpointRegion) {
            this.destinationEndpointRegion = destinationEndpointRegion;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointUserName}
         * @param destinationEndpointUserName Property destinationEndpointUserName: The database account.
         *                                    Note You must specify this parameter when the database type is Redis, or the database location
         *                                    is agent and the database type is MSSQL.
         * @return {@code this}
         */
        public Builder destinationEndpointUserName(java.lang.String destinationEndpointUserName) {
            this.destinationEndpointUserName = destinationEndpointUserName;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDestinationEndpointUserName}
         * @param destinationEndpointUserName Property destinationEndpointUserName: The database account.
         *                                    Note You must specify this parameter when the database type is Redis, or the database location
         *                                    is agent and the database type is MSSQL.
         * @return {@code this}
         */
        public Builder destinationEndpointUserName(com.aliyun.ros.cdk.core.IResolvable destinationEndpointUserName) {
            this.destinationEndpointUserName = destinationEndpointUserName;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDuplicateConflict}
         * @param duplicateConflict Property duplicateConflict: The handling method for conflicts between objects with the same name.
         *                          Valid values:
         *                          failure: The object with the same name fails (default).
         *                          renamenew: renames an object with the same name.
         * @return {@code this}
         */
        public Builder duplicateConflict(java.lang.String duplicateConflict) {
            this.duplicateConflict = duplicateConflict;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getDuplicateConflict}
         * @param duplicateConflict Property duplicateConflict: The handling method for conflicts between objects with the same name.
         *                          Valid values:
         *                          failure: The object with the same name fails (default).
         *                          renamenew: renames an object with the same name.
         * @return {@code this}
         */
        public Builder duplicateConflict(com.aliyun.ros.cdk.core.IResolvable duplicateConflict) {
            this.duplicateConflict = duplicateConflict;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getRestoreDir}
         * @param restoreDir Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
         * @return {@code this}
         */
        public Builder restoreDir(java.lang.String restoreDir) {
            this.restoreDir = restoreDir;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getRestoreDir}
         * @param restoreDir Property restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
         * @return {@code this}
         */
        public Builder restoreDir(com.aliyun.ros.cdk.core.IResolvable restoreDir) {
            this.restoreDir = restoreDir;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getRestoreHome}
         * @param restoreHome Property restoreHome: Database Program Directory.
         * @return {@code this}
         */
        public Builder restoreHome(java.lang.String restoreHome) {
            this.restoreHome = restoreHome;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getRestoreHome}
         * @param restoreHome Property restoreHome: Database Program Directory.
         * @return {@code this}
         */
        public Builder restoreHome(com.aliyun.ros.cdk.core.IResolvable restoreHome) {
            this.restoreHome = restoreHome;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getRestoreObjects}
         * @param restoreObjects Property restoreObjects: Restore an object.
         *                       Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
         * @return {@code this}
         */
        public Builder restoreObjects(java.lang.String restoreObjects) {
            this.restoreObjects = restoreObjects;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getRestoreObjects}
         * @param restoreObjects Property restoreObjects: Restore an object.
         *                       Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
         * @return {@code this}
         */
        public Builder restoreObjects(com.aliyun.ros.cdk.core.IResolvable restoreObjects) {
            this.restoreObjects = restoreObjects;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getRestoreTime}
         * @param restoreTime Property restoreTime: The time when the fault is restored.
         *                    Set the value to 1554560477000.
         * @return {@code this}
         */
        public Builder restoreTime(java.lang.Number restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getRestoreTime}
         * @param restoreTime Property restoreTime: The time when the fault is restored.
         *                    Set the value to 1554560477000.
         * @return {@code this}
         */
        public Builder restoreTime(com.aliyun.ros.cdk.core.IResolvable restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getStartTask}
         * @param startTask Property startTask: Start restore task after creating a recovery task.
         * @return {@code this}
         */
        public Builder startTask(java.lang.Boolean startTask) {
            this.startTask = startTask;
            return this;
        }

        /**
         * Sets the value of {@link RestoreTaskProps#getStartTask}
         * @param startTask Property startTask: Start restore task after creating a recovery task.
         * @return {@code this}
         */
        public Builder startTask(com.aliyun.ros.cdk.core.IResolvable startTask) {
            this.startTask = startTask;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RestoreTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RestoreTaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RestoreTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RestoreTaskProps {
        private final java.lang.Object backupPlanId;
        private final java.lang.Object destinationEndpointInstanceType;
        private final java.lang.Object restoreTaskName;
        private final java.lang.Object backupGatewayId;
        private final java.lang.Object backupSetId;
        private final java.lang.Object destinationEndpointDatabaseName;
        private final java.lang.Object destinationEndpointInstanceId;
        private final java.lang.Object destinationEndpointIp;
        private final java.lang.Object destinationEndpointOracleSid;
        private final java.lang.Object destinationEndpointPassword;
        private final java.lang.Object destinationEndpointPort;
        private final java.lang.Object destinationEndpointRegion;
        private final java.lang.Object destinationEndpointUserName;
        private final java.lang.Object duplicateConflict;
        private final java.lang.Object restoreDir;
        private final java.lang.Object restoreHome;
        private final java.lang.Object restoreObjects;
        private final java.lang.Object restoreTime;
        private final java.lang.Object startTask;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.backupPlanId = software.amazon.jsii.Kernel.get(this, "backupPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationEndpointInstanceType = software.amazon.jsii.Kernel.get(this, "destinationEndpointInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreTaskName = software.amazon.jsii.Kernel.get(this, "restoreTaskName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupGatewayId = software.amazon.jsii.Kernel.get(this, "backupGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupSetId = software.amazon.jsii.Kernel.get(this, "backupSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationEndpointDatabaseName = software.amazon.jsii.Kernel.get(this, "destinationEndpointDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationEndpointInstanceId = software.amazon.jsii.Kernel.get(this, "destinationEndpointInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationEndpointIp = software.amazon.jsii.Kernel.get(this, "destinationEndpointIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationEndpointOracleSid = software.amazon.jsii.Kernel.get(this, "destinationEndpointOracleSid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationEndpointPassword = software.amazon.jsii.Kernel.get(this, "destinationEndpointPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationEndpointPort = software.amazon.jsii.Kernel.get(this, "destinationEndpointPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationEndpointRegion = software.amazon.jsii.Kernel.get(this, "destinationEndpointRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationEndpointUserName = software.amazon.jsii.Kernel.get(this, "destinationEndpointUserName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duplicateConflict = software.amazon.jsii.Kernel.get(this, "duplicateConflict", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreDir = software.amazon.jsii.Kernel.get(this, "restoreDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreHome = software.amazon.jsii.Kernel.get(this, "restoreHome", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreObjects = software.amazon.jsii.Kernel.get(this, "restoreObjects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreTime = software.amazon.jsii.Kernel.get(this, "restoreTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.startTask = software.amazon.jsii.Kernel.get(this, "startTask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.backupPlanId = java.util.Objects.requireNonNull(builder.backupPlanId, "backupPlanId is required");
            this.destinationEndpointInstanceType = java.util.Objects.requireNonNull(builder.destinationEndpointInstanceType, "destinationEndpointInstanceType is required");
            this.restoreTaskName = java.util.Objects.requireNonNull(builder.restoreTaskName, "restoreTaskName is required");
            this.backupGatewayId = builder.backupGatewayId;
            this.backupSetId = builder.backupSetId;
            this.destinationEndpointDatabaseName = builder.destinationEndpointDatabaseName;
            this.destinationEndpointInstanceId = builder.destinationEndpointInstanceId;
            this.destinationEndpointIp = builder.destinationEndpointIp;
            this.destinationEndpointOracleSid = builder.destinationEndpointOracleSid;
            this.destinationEndpointPassword = builder.destinationEndpointPassword;
            this.destinationEndpointPort = builder.destinationEndpointPort;
            this.destinationEndpointRegion = builder.destinationEndpointRegion;
            this.destinationEndpointUserName = builder.destinationEndpointUserName;
            this.duplicateConflict = builder.duplicateConflict;
            this.restoreDir = builder.restoreDir;
            this.restoreHome = builder.restoreHome;
            this.restoreObjects = builder.restoreObjects;
            this.restoreTime = builder.restoreTime;
            this.startTask = builder.startTask;
        }

        @Override
        public final java.lang.Object getBackupPlanId() {
            return this.backupPlanId;
        }

        @Override
        public final java.lang.Object getDestinationEndpointInstanceType() {
            return this.destinationEndpointInstanceType;
        }

        @Override
        public final java.lang.Object getRestoreTaskName() {
            return this.restoreTaskName;
        }

        @Override
        public final java.lang.Object getBackupGatewayId() {
            return this.backupGatewayId;
        }

        @Override
        public final java.lang.Object getBackupSetId() {
            return this.backupSetId;
        }

        @Override
        public final java.lang.Object getDestinationEndpointDatabaseName() {
            return this.destinationEndpointDatabaseName;
        }

        @Override
        public final java.lang.Object getDestinationEndpointInstanceId() {
            return this.destinationEndpointInstanceId;
        }

        @Override
        public final java.lang.Object getDestinationEndpointIp() {
            return this.destinationEndpointIp;
        }

        @Override
        public final java.lang.Object getDestinationEndpointOracleSid() {
            return this.destinationEndpointOracleSid;
        }

        @Override
        public final java.lang.Object getDestinationEndpointPassword() {
            return this.destinationEndpointPassword;
        }

        @Override
        public final java.lang.Object getDestinationEndpointPort() {
            return this.destinationEndpointPort;
        }

        @Override
        public final java.lang.Object getDestinationEndpointRegion() {
            return this.destinationEndpointRegion;
        }

        @Override
        public final java.lang.Object getDestinationEndpointUserName() {
            return this.destinationEndpointUserName;
        }

        @Override
        public final java.lang.Object getDuplicateConflict() {
            return this.duplicateConflict;
        }

        @Override
        public final java.lang.Object getRestoreDir() {
            return this.restoreDir;
        }

        @Override
        public final java.lang.Object getRestoreHome() {
            return this.restoreHome;
        }

        @Override
        public final java.lang.Object getRestoreObjects() {
            return this.restoreObjects;
        }

        @Override
        public final java.lang.Object getRestoreTime() {
            return this.restoreTime;
        }

        @Override
        public final java.lang.Object getStartTask() {
            return this.startTask;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("backupPlanId", om.valueToTree(this.getBackupPlanId()));
            data.set("destinationEndpointInstanceType", om.valueToTree(this.getDestinationEndpointInstanceType()));
            data.set("restoreTaskName", om.valueToTree(this.getRestoreTaskName()));
            if (this.getBackupGatewayId() != null) {
                data.set("backupGatewayId", om.valueToTree(this.getBackupGatewayId()));
            }
            if (this.getBackupSetId() != null) {
                data.set("backupSetId", om.valueToTree(this.getBackupSetId()));
            }
            if (this.getDestinationEndpointDatabaseName() != null) {
                data.set("destinationEndpointDatabaseName", om.valueToTree(this.getDestinationEndpointDatabaseName()));
            }
            if (this.getDestinationEndpointInstanceId() != null) {
                data.set("destinationEndpointInstanceId", om.valueToTree(this.getDestinationEndpointInstanceId()));
            }
            if (this.getDestinationEndpointIp() != null) {
                data.set("destinationEndpointIp", om.valueToTree(this.getDestinationEndpointIp()));
            }
            if (this.getDestinationEndpointOracleSid() != null) {
                data.set("destinationEndpointOracleSid", om.valueToTree(this.getDestinationEndpointOracleSid()));
            }
            if (this.getDestinationEndpointPassword() != null) {
                data.set("destinationEndpointPassword", om.valueToTree(this.getDestinationEndpointPassword()));
            }
            if (this.getDestinationEndpointPort() != null) {
                data.set("destinationEndpointPort", om.valueToTree(this.getDestinationEndpointPort()));
            }
            if (this.getDestinationEndpointRegion() != null) {
                data.set("destinationEndpointRegion", om.valueToTree(this.getDestinationEndpointRegion()));
            }
            if (this.getDestinationEndpointUserName() != null) {
                data.set("destinationEndpointUserName", om.valueToTree(this.getDestinationEndpointUserName()));
            }
            if (this.getDuplicateConflict() != null) {
                data.set("duplicateConflict", om.valueToTree(this.getDuplicateConflict()));
            }
            if (this.getRestoreDir() != null) {
                data.set("restoreDir", om.valueToTree(this.getRestoreDir()));
            }
            if (this.getRestoreHome() != null) {
                data.set("restoreHome", om.valueToTree(this.getRestoreHome()));
            }
            if (this.getRestoreObjects() != null) {
                data.set("restoreObjects", om.valueToTree(this.getRestoreObjects()));
            }
            if (this.getRestoreTime() != null) {
                data.set("restoreTime", om.valueToTree(this.getRestoreTime()));
            }
            if (this.getStartTask() != null) {
                data.set("startTask", om.valueToTree(this.getStartTask()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dbs.RestoreTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RestoreTaskProps.Jsii$Proxy that = (RestoreTaskProps.Jsii$Proxy) o;

            if (!backupPlanId.equals(that.backupPlanId)) return false;
            if (!destinationEndpointInstanceType.equals(that.destinationEndpointInstanceType)) return false;
            if (!restoreTaskName.equals(that.restoreTaskName)) return false;
            if (this.backupGatewayId != null ? !this.backupGatewayId.equals(that.backupGatewayId) : that.backupGatewayId != null) return false;
            if (this.backupSetId != null ? !this.backupSetId.equals(that.backupSetId) : that.backupSetId != null) return false;
            if (this.destinationEndpointDatabaseName != null ? !this.destinationEndpointDatabaseName.equals(that.destinationEndpointDatabaseName) : that.destinationEndpointDatabaseName != null) return false;
            if (this.destinationEndpointInstanceId != null ? !this.destinationEndpointInstanceId.equals(that.destinationEndpointInstanceId) : that.destinationEndpointInstanceId != null) return false;
            if (this.destinationEndpointIp != null ? !this.destinationEndpointIp.equals(that.destinationEndpointIp) : that.destinationEndpointIp != null) return false;
            if (this.destinationEndpointOracleSid != null ? !this.destinationEndpointOracleSid.equals(that.destinationEndpointOracleSid) : that.destinationEndpointOracleSid != null) return false;
            if (this.destinationEndpointPassword != null ? !this.destinationEndpointPassword.equals(that.destinationEndpointPassword) : that.destinationEndpointPassword != null) return false;
            if (this.destinationEndpointPort != null ? !this.destinationEndpointPort.equals(that.destinationEndpointPort) : that.destinationEndpointPort != null) return false;
            if (this.destinationEndpointRegion != null ? !this.destinationEndpointRegion.equals(that.destinationEndpointRegion) : that.destinationEndpointRegion != null) return false;
            if (this.destinationEndpointUserName != null ? !this.destinationEndpointUserName.equals(that.destinationEndpointUserName) : that.destinationEndpointUserName != null) return false;
            if (this.duplicateConflict != null ? !this.duplicateConflict.equals(that.duplicateConflict) : that.duplicateConflict != null) return false;
            if (this.restoreDir != null ? !this.restoreDir.equals(that.restoreDir) : that.restoreDir != null) return false;
            if (this.restoreHome != null ? !this.restoreHome.equals(that.restoreHome) : that.restoreHome != null) return false;
            if (this.restoreObjects != null ? !this.restoreObjects.equals(that.restoreObjects) : that.restoreObjects != null) return false;
            if (this.restoreTime != null ? !this.restoreTime.equals(that.restoreTime) : that.restoreTime != null) return false;
            return this.startTask != null ? this.startTask.equals(that.startTask) : that.startTask == null;
        }

        @Override
        public final int hashCode() {
            int result = this.backupPlanId.hashCode();
            result = 31 * result + (this.destinationEndpointInstanceType.hashCode());
            result = 31 * result + (this.restoreTaskName.hashCode());
            result = 31 * result + (this.backupGatewayId != null ? this.backupGatewayId.hashCode() : 0);
            result = 31 * result + (this.backupSetId != null ? this.backupSetId.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointDatabaseName != null ? this.destinationEndpointDatabaseName.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointInstanceId != null ? this.destinationEndpointInstanceId.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointIp != null ? this.destinationEndpointIp.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointOracleSid != null ? this.destinationEndpointOracleSid.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointPassword != null ? this.destinationEndpointPassword.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointPort != null ? this.destinationEndpointPort.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointRegion != null ? this.destinationEndpointRegion.hashCode() : 0);
            result = 31 * result + (this.destinationEndpointUserName != null ? this.destinationEndpointUserName.hashCode() : 0);
            result = 31 * result + (this.duplicateConflict != null ? this.duplicateConflict.hashCode() : 0);
            result = 31 * result + (this.restoreDir != null ? this.restoreDir.hashCode() : 0);
            result = 31 * result + (this.restoreHome != null ? this.restoreHome.hashCode() : 0);
            result = 31 * result + (this.restoreObjects != null ? this.restoreObjects.hashCode() : 0);
            result = 31 * result + (this.restoreTime != null ? this.restoreTime.hashCode() : 0);
            result = 31 * result + (this.startTask != null ? this.startTask.hashCode() : 0);
            return result;
        }
    }
}
