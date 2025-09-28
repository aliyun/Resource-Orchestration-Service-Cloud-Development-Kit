package com.aliyun.ros.cdk.mongodb.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::MONGODB::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:31.107Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.datasource.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mongodb.datasource.IInstance {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.datasource.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.datasource.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccountDescription: The description of the account.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AccountName: The name of the account.
     * <p>
     * Value: **root * *.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountName() {
        return software.amazon.jsii.Kernel.get(this, "attrAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance.
     * <p>
     * Valid values:
     * true: Auto-renewal is enabled for the instance.
     * false: Auto-renewal is disabled for the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AutoRenewDuration: Auto Renew Duration.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewDuration() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoRenewDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackupInterval: The frequency at which high-frequency backup is created.
     * <p>
     * Valid values:
     * -1: High-frequency backup is disabled.
     * 15: every 15 minutes.
     * 30: every 30 minutes.
     * 60: every hour.
     * 120: every 2 hours.
     * 180: every 3 hours.
     * 240: every 4 hours.
     * 360: every 6 hours.
     * 480: every 8 hours.
     * 720: every 12 hours.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupInterval() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BackupRetentionPeriod: The retention period of the backup data.
     * <p>
     * Unit: day.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The Database create time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstanceClass: The instance type of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceClass() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstanceDescription: The name of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance.
     * <p>
     * Valid values:
     * true
     * false
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceReleaseProtection() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceReleaseProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DbInstanceStorage: The storage capacity of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorage() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstanceType: The architecture of the instance.
     * <p>
     * Valid values:
     * replicate: replica set instance
     * sharding: sharded cluster instance
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableBackupLog: Indicates whether the log backup feature is enabled.
     * <p>
     * Valid values:
     * 0 (default): The log backup feature is disabled.
     * 1: The log backup feature is enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableBackupLog() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableBackupLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Engine: The database engine of the instance.
     * <p>
     * Default value: mongodb.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
        return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EngineVersion: The database engine version of the instance.
     * <p>
     * 6.0
     * 5.0
     * 4.4
     * 4.2
     * 4.0
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExpireTime: The time when the subscription instance expires.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHiddenZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrHiddenZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the mongos.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute KindCode: The kind code of the instance.
     * <p>
     * Valid values:
     * 0: physical machine
     * 1: Elastic Compute Service (ECS) instance
     * 2: Docker cluster
     * 18: Kubernetes cluster
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKindCode() {
        return software.amazon.jsii.Kernel.get(this, "attrKindCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastDowngradeTime() {
        return software.amazon.jsii.Kernel.get(this, "attrLastDowngradeTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LockMode: The lock status of the instance.
     * <p>
     * Valid values:
     * Unlock: The instance is not locked.
     * ManualLock: The instance is manually locked.
     * LockByExpiration: The instance is automatically locked due to instance expiration.
     * LockByRestoration: The instance is automatically locked before the instance is rolled back.
     * LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
     * Released: The instance is released.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
        return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained.
     * <p>
     * Valid values: 7 to 730.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogBackupRetentionPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrLogBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MaintainEndTime: The end time of the maintenance window.
     * <p>
     * The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintainEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MaintainStartTime: The start time of the maintenance window.
     * <p>
     * The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainStartTime() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintainStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MongosList: The information of the mongos nodes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMongosList() {
        return software.amazon.jsii.Kernel.get(this, "attrMongosList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkType: The network type of the instance.
     * <p>
     * Valid values:
     * Classic: classic network
     * VPC: VPC
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Parameters: The settings of the parameters that have taken effect.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
        return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: The billing method of the Database.
     * <p>
     * Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PreferredBackupPeriod: The day of a week on which to back up data.
     * <p>
     * Valid values:
     * Monday
     * Tuesday
     * Wednesday
     * Thursday
     * Friday
     * Saturday
     * Sunday
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreferredBackupPeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrPreferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PreferredBackupTime: The time range during which the backup was created.
     * <p>
     * The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreferredBackupTime() {
        return software.amazon.jsii.Kernel.get(this, "attrPreferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ProtocolType: The access protocol type of the instance.
     * <p>
     * Valid values:
     * mongodb
     * dynamodb
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocolType() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReadonlyReplicas: The number of read-only nodes in the shard node.
     * <p>
     * Valid values: 0 to 5. The value must be an integer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadonlyReplicas() {
        return software.amazon.jsii.Kernel.get(this, "attrReadonlyReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReplicaSetsConnections: ReplicaSets Connections.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicaSetsConnections() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicaSetsConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReplicationFactor: The number of nodes in the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationFactor() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicationFactor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecondaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityGroupId: The ID of the ECS security group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityIpList: The name of the IP whitelist.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityIps: The IP addresses in the default whitelist.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIps() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ShardList: The information of the shard nodes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrShardList() {
        return software.amazon.jsii.Kernel.get(this, "attrShardList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SnapshotBackupType: The snapshot backup type.
     * <p>
     * Valid values:
     * Flash: single-digit second backup
     * Standard (default): standard backup
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotBackupType() {
        return software.amazon.jsii.Kernel.get(this, "attrSnapshotBackupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SslExpiredTime: The time when the SSL certificate expires.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslExpiredTime() {
        return software.amazon.jsii.Kernel.get(this, "attrSslExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SslStatus: The status of the SSL feature.
     * <p>
     * Valid values:
     * Open: The SSL feature is enabled.
     * Closed: The SSL feature is disabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrSslStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StorageEngine: The Storage Engine Of The Instance Type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageEngine() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The details of the instance tags.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TdeStatus: The TDE status.
     * <p>
     * Valid values:
     * enabled
     * disabled
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTdeStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrTdeStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled.
     * <p>
     * Valid values:
     * Open: Password-free access within the VPC is enabled.
     * Close: Password-free access within the VPC is disabled, and you must use a password for access.
     * NotSupport: Password-free access within the VPC is not supported.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcAuthMode() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcAuthMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: The VPC ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VSwitchId: The vSwitch ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: The ID of the zone in which the instance resides.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.datasource.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mongodb.datasource.InstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.mongodb.datasource.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mongodb.datasource.Instance> {
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
        private final com.aliyun.ros.cdk.mongodb.datasource.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mongodb.datasource.InstanceProps.Builder();
        }

        /**
         * Property instanceId: The ID of the mongos.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the mongos. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the mongos.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the mongos. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mongodb.datasource.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.mongodb.datasource.Instance build() {
            return new com.aliyun.ros.cdk.mongodb.datasource.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
