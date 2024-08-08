package com.aliyun.ros.cdk.rds;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RDS::DBInstanceClone</code>, which is used to restore historical data of an instance to a new instance.
 * <p>
 * The new instance is the clone of the instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:13.371Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.DBInstanceClone")
public class DBInstanceClone extends com.aliyun.ros.cdk.core.Resource {

    protected DBInstanceClone(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBInstanceClone(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DBInstanceClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceCloneProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBInstanceClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceCloneProps props) {
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceCloneProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.DBInstanceCloneProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBInstanceCloneProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.DBInstanceClone}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.DBInstanceClone> {
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
        private final com.aliyun.ros.cdk.rds.DBInstanceCloneProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.DBInstanceCloneProps.Builder();
        }

        /**
         * Property dbInstanceId: Instance id.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Instance id. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: Instance id.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Instance id. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
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
         * Property backupId: The ID of the backup set that you want to use.
         * <p>
         * You can call the DescribeBackups operation to query the most recent backup set list.
         * Note You must specify at least one of the BackupId and RestoreTime parameters.
         * <p>
         * @return {@code this}
         * @param backupId Property backupId: The ID of the backup set that you want to use. This parameter is required.
         */
        public Builder backupId(final java.lang.String backupId) {
            this.props.backupId(backupId);
            return this;
        }
        /**
         * Property backupId: The ID of the backup set that you want to use.
         * <p>
         * You can call the DescribeBackups operation to query the most recent backup set list.
         * Note You must specify at least one of the BackupId and RestoreTime parameters.
         * <p>
         * @return {@code this}
         * @param backupId Property backupId: The ID of the backup set that you want to use. This parameter is required.
         */
        public Builder backupId(final com.aliyun.ros.cdk.core.IResolvable backupId) {
            this.props.backupId(backupId);
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
         * Property backupType: The type of backup used by the new instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>FullBackup: full backup</li>
         * <li>IncrementalBackup: incremental backup</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param backupType Property backupType: The type of backup used by the new instance. This parameter is required.
         */
        public Builder backupType(final java.lang.String backupType) {
            this.props.backupType(backupType);
            return this;
        }
        /**
         * Property backupType: The type of backup used by the new instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>FullBackup: full backup</li>
         * <li>IncrementalBackup: incremental backup</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param backupType Property backupType: The type of backup used by the new instance. This parameter is required.
         */
        public Builder backupType(final com.aliyun.ros.cdk.core.IResolvable backupType) {
            this.props.backupType(backupType);
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
         * Property dbNames: The names of the databases that you want to create on the new instance.
         * <p>
         * @return {@code this}
         * @param dbNames Property dbNames: The names of the databases that you want to create on the new instance. This parameter is required.
         */
        public Builder dbNames(final java.lang.String dbNames) {
            this.props.dbNames(dbNames);
            return this;
        }
        /**
         * Property dbNames: The names of the databases that you want to create on the new instance.
         * <p>
         * @return {@code this}
         * @param dbNames Property dbNames: The names of the databases that you want to create on the new instance. This parameter is required.
         */
        public Builder dbNames(final com.aliyun.ros.cdk.core.IResolvable dbNames) {
            this.props.dbNames(dbNames);
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
         * Property instanceNetworkType: The network type of the new instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>VPC</li>
         * <li>Classic
         * The default value is the network type of the original instance.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceNetworkType Property instanceNetworkType: The network type of the new instance. This parameter is required.
         */
        public Builder instanceNetworkType(final java.lang.String instanceNetworkType) {
            this.props.instanceNetworkType(instanceNetworkType);
            return this;
        }
        /**
         * Property instanceNetworkType: The network type of the new instance.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>VPC</li>
         * <li>Classic
         * The default value is the network type of the original instance.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceNetworkType Property instanceNetworkType: The network type of the new instance. This parameter is required.
         */
        public Builder instanceNetworkType(final com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.props.instanceNetworkType(instanceNetworkType);
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
         * Property restoreTable: Specifies whether to restore specific databases and tables.
         * <p>
         * The value 1 specifies to restore specific databases and tables.
         * If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
         * <p>
         * @return {@code this}
         * @param restoreTable Property restoreTable: Specifies whether to restore specific databases and tables. This parameter is required.
         */
        public Builder restoreTable(final java.lang.String restoreTable) {
            this.props.restoreTable(restoreTable);
            return this;
        }
        /**
         * Property restoreTable: Specifies whether to restore specific databases and tables.
         * <p>
         * The value 1 specifies to restore specific databases and tables.
         * If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
         * <p>
         * @return {@code this}
         * @param restoreTable Property restoreTable: Specifies whether to restore specific databases and tables. This parameter is required.
         */
        public Builder restoreTable(final com.aliyun.ros.cdk.core.IResolvable restoreTable) {
            this.props.restoreTable(restoreTable);
            return this;
        }

        /**
         * Property restoreTime: The point in time to which you want to restore the data of the original instance.
         * <p>
         * The point in time must fall within the specified log backup retention period.
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
         * The time must be in UTC.
         * <p>
         * @return {@code this}
         * @param restoreTime Property restoreTime: The point in time to which you want to restore the data of the original instance. This parameter is required.
         */
        public Builder restoreTime(final java.lang.String restoreTime) {
            this.props.restoreTime(restoreTime);
            return this;
        }
        /**
         * Property restoreTime: The point in time to which you want to restore the data of the original instance.
         * <p>
         * The point in time must fall within the specified log backup retention period.
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
         * The time must be in UTC.
         * <p>
         * @return {@code this}
         * @param restoreTime Property restoreTime: The point in time to which you want to restore the data of the original instance. This parameter is required.
         */
        public Builder restoreTime(final com.aliyun.ros.cdk.core.IResolvable restoreTime) {
            this.props.restoreTime(restoreTime);
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
         * Property tableMeta: The information about the databases and tables that you want to restore.
         * <p>
         * @return {@code this}
         * @param tableMeta Property tableMeta: The information about the databases and tables that you want to restore. This parameter is required.
         */
        public Builder tableMeta(final com.aliyun.ros.cdk.core.IResolvable tableMeta) {
            this.props.tableMeta(tableMeta);
            return this;
        }
        /**
         * Property tableMeta: The information about the databases and tables that you want to restore.
         * <p>
         * @return {@code this}
         * @param tableMeta Property tableMeta: The information about the databases and tables that you want to restore. This parameter is required.
         */
        public Builder tableMeta(final java.util.List<? extends java.lang.Object> tableMeta) {
            this.props.tableMeta(tableMeta);
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
         * Property timeoutInMinutes: The timeout period for creating the clone instance resource.
         * <p>
         * Unit: Minute. Default: 120.
         * <p>
         * @return {@code this}
         * @param timeoutInMinutes Property timeoutInMinutes: The timeout period for creating the clone instance resource. This parameter is required.
         */
        public Builder timeoutInMinutes(final java.lang.Number timeoutInMinutes) {
            this.props.timeoutInMinutes(timeoutInMinutes);
            return this;
        }
        /**
         * Property timeoutInMinutes: The timeout period for creating the clone instance resource.
         * <p>
         * Unit: Minute. Default: 120.
         * <p>
         * @return {@code this}
         * @param timeoutInMinutes Property timeoutInMinutes: The timeout period for creating the clone instance resource. This parameter is required.
         */
        public Builder timeoutInMinutes(final com.aliyun.ros.cdk.core.IResolvable timeoutInMinutes) {
            this.props.timeoutInMinutes(timeoutInMinutes);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.DBInstanceClone}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.DBInstanceClone build() {
            return new com.aliyun.ros.cdk.rds.DBInstanceClone(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
