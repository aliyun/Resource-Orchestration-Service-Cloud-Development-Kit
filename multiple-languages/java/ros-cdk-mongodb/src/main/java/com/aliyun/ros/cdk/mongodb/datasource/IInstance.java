package com.aliyun.ros.cdk.mongodb.datasource;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.829Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.datasource.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccountDescription: The description of the account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountDescription();

    /**
     * Attribute AccountName: The name of the account.
     * <p>
     * Value: **root * *.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountName();

    /**
     * Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance.
     * <p>
     * Valid values:
     * true: Auto-renewal is enabled for the instance.
     * false: Auto-renewal is disabled for the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenew();

    /**
     * Attribute AutoRenewDuration: Auto Renew Duration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewDuration();

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
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupInterval();

    /**
     * Attribute BackupRetentionPeriod: The retention period of the backup data.
     * <p>
     * Unit: day.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupRetentionPeriod();

    /**
     * Attribute CreateTime: The Database create time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute DBInstanceClass: The instance type of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceClass();

    /**
     * Attribute DBInstanceDescription: The name of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDescription();

    /**
     * Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance.
     * <p>
     * Valid values:
     * true
     * false
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceReleaseProtection();

    /**
     * Attribute DbInstanceStorage: The storage capacity of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorage();

    /**
     * Attribute DBInstanceType: The architecture of the instance.
     * <p>
     * Valid values:
     * replicate: replica set instance
     * sharding: sharded cluster instance
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceType();

    /**
     * Attribute EnableBackupLog: Indicates whether the log backup feature is enabled.
     * <p>
     * Valid values:
     * 0 (default): The log backup feature is disabled.
     * 1: The log backup feature is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableBackupLog();

    /**
     * Attribute Engine: The database engine of the instance.
     * <p>
     * Default value: mongodb.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine();

    /**
     * Attribute EngineVersion: The database engine version of the instance.
     * <p>
     * 6.0
     * 5.0
     * 4.4
     * 4.2
     * 4.0
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion();

    /**
     * Attribute ExpireTime: The time when the subscription instance expires.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime();

    /**
     * Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHiddenZoneId();

    /**
     * Attribute InstanceId: The ID of the mongos.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute KindCode: The kind code of the instance.
     * <p>
     * Valid values:
     * 0: physical machine
     * 1: Elastic Compute Service (ECS) instance
     * 2: Docker cluster
     * 18: Kubernetes cluster
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKindCode();

    /**
     * Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastDowngradeTime();

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
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode();

    /**
     * Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained.
     * <p>
     * Valid values: 7 to 730.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogBackupRetentionPeriod();

    /**
     * Attribute MaintainEndTime: The end time of the maintenance window.
     * <p>
     * The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainEndTime();

    /**
     * Attribute MaintainStartTime: The start time of the maintenance window.
     * <p>
     * The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainStartTime();

    /**
     * Attribute MongosList: The information of the mongos nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMongosList();

    /**
     * Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkAddresses();

    /**
     * Attribute NetworkType: The network type of the instance.
     * <p>
     * Valid values:
     * Classic: classic network
     * VPC: VPC
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType();

    /**
     * Attribute Parameters: The settings of the parameters that have taken effect.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters();

    /**
     * Attribute PaymentType: The billing method of the Database.
     * <p>
     * Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType();

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
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreferredBackupPeriod();

    /**
     * Attribute PreferredBackupTime: The time range during which the backup was created.
     * <p>
     * The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreferredBackupTime();

    /**
     * Attribute ProtocolType: The access protocol type of the instance.
     * <p>
     * Valid values:
     * mongodb
     * dynamodb
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocolType();

    /**
     * Attribute ReadonlyReplicas: The number of read-only nodes in the shard node.
     * <p>
     * Valid values: 0 to 5. The value must be an integer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadonlyReplicas();

    /**
     * Attribute ReplicaSetsConnections: ReplicaSets Connections.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicaSetsConnections();

    /**
     * Attribute ReplicationFactor: The number of nodes in the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationFactor();

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryZoneId();

    /**
     * Attribute SecurityGroupId: The ID of the ECS security group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId();

    /**
     * Attribute SecurityIpList: The name of the IP whitelist.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList();

    /**
     * Attribute SecurityIps: The IP addresses in the default whitelist.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIps();

    /**
     * Attribute ShardList: The information of the shard nodes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrShardList();

    /**
     * Attribute SnapshotBackupType: The snapshot backup type.
     * <p>
     * Valid values:
     * Flash: single-digit second backup
     * Standard (default): standard backup
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotBackupType();

    /**
     * Attribute SslExpiredTime: The time when the SSL certificate expires.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslExpiredTime();

    /**
     * Attribute SslStatus: The status of the SSL feature.
     * <p>
     * Valid values:
     * Open: The SSL feature is enabled.
     * Closed: The SSL feature is disabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslStatus();

    /**
     * Attribute StorageEngine: The Storage Engine Of The Instance Type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageEngine();

    /**
     * Attribute Tags: The details of the instance tags.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute TdeStatus: The TDE status.
     * <p>
     * Valid values:
     * enabled
     * disabled
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTdeStatus();

    /**
     * Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled.
     * <p>
     * Valid values:
     * Open: Password-free access within the VPC is enabled.
     * Close: Password-free access within the VPC is disabled, and you must use a password for access.
     * NotSupport: Password-free access within the VPC is not supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcAuthMode();

    /**
     * Attribute VpcId: The VPC ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: The vSwitch ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute ZoneId: The ID of the zone in which the instance resides.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.datasource.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.mongodb.datasource.IInstance.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AccountDescription: The description of the account.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AccountName: The name of the account.
         * <p>
         * Value: **root * *.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountName() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenew() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoRenewDuration: Auto Renew Duration.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewDuration() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupRetentionPeriod: The retention period of the backup data.
         * <p>
         * Unit: day.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupRetentionPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The Database create time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceClass: The instance type of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceClass() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceDescription: The name of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDescription() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceReleaseProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceReleaseProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceStorage: The storage capacity of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorage() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceType() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableBackupLog() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableBackupLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Engine: The database engine of the instance.
         * <p>
         * Default value: mongodb.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: The time when the subscription instance expires.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHiddenZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrHiddenZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the mongos.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKindCode() {
            return software.amazon.jsii.Kernel.get(this, "attrKindCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastDowngradeTime() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
            return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained.
         * <p>
         * Valid values: 7 to 730.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogBackupRetentionPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrLogBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainEndTime: The end time of the maintenance window.
         * <p>
         * The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainStartTime: The start time of the maintenance window.
         * <p>
         * The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MongosList: The information of the mongos nodes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMongosList() {
            return software.amazon.jsii.Kernel.get(this, "attrMongosList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkAddresses() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Parameters: The settings of the parameters that have taken effect.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The billing method of the Database.
         * <p>
         * Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreferredBackupPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrPreferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PreferredBackupTime: The time range during which the backup was created.
         * <p>
         * The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreferredBackupTime() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocolType() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReadonlyReplicas: The number of read-only nodes in the shard node.
         * <p>
         * Valid values: 0 to 5. The value must be an integer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadonlyReplicas() {
            return software.amazon.jsii.Kernel.get(this, "attrReadonlyReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicaSetsConnections: ReplicaSets Connections.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicaSetsConnections() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicaSetsConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicationFactor: The number of nodes in the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationFactor() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicationFactor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupId: The ID of the ECS security group.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIpList: The name of the IP whitelist.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIps: The IP addresses in the default whitelist.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIps() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShardList: The information of the shard nodes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrShardList() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotBackupType() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotBackupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SslExpiredTime: The time when the SSL certificate expires.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslExpiredTime() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrSslStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageEngine: The Storage Engine Of The Instance Type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageEngine() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The details of the instance tags.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTdeStatus() {
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
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcAuthMode() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcAuthMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The VPC ID of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The vSwitch ID of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The ID of the zone in which the instance resides.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mongodb.datasource.InstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AccountDescription: The description of the account.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AccountName: The name of the account.
         * <p>
         * Value: **root * *.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountName() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenew() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoRenewDuration: Auto Renew Duration.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoRenewDuration() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupInterval() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BackupRetentionPeriod: The retention period of the backup data.
         * <p>
         * Unit: day.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBackupRetentionPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The Database create time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceClass: The instance type of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceClass() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceDescription: The name of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDescription() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceReleaseProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceReleaseProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DbInstanceStorage: The storage capacity of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorage() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceType() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableBackupLog() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableBackupLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Engine: The database engine of the instance.
         * <p>
         * Default value: mongodb.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: The time when the subscription instance expires.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHiddenZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrHiddenZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the mongos.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKindCode() {
            return software.amazon.jsii.Kernel.get(this, "attrKindCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLastDowngradeTime() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
            return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained.
         * <p>
         * Valid values: 7 to 730.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogBackupRetentionPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrLogBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainEndTime: The end time of the maintenance window.
         * <p>
         * The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainEndTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainEndTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainStartTime: The start time of the maintenance window.
         * <p>
         * The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainStartTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainStartTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MongosList: The information of the mongos nodes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMongosList() {
            return software.amazon.jsii.Kernel.get(this, "attrMongosList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkAddresses() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Parameters: The settings of the parameters that have taken effect.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrParameters() {
            return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PaymentType: The billing method of the Database.
         * <p>
         * Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreferredBackupPeriod() {
            return software.amazon.jsii.Kernel.get(this, "attrPreferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PreferredBackupTime: The time range during which the backup was created.
         * <p>
         * The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPreferredBackupTime() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocolType() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocolType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReadonlyReplicas: The number of read-only nodes in the shard node.
         * <p>
         * Valid values: 0 to 5. The value must be an integer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadonlyReplicas() {
            return software.amazon.jsii.Kernel.get(this, "attrReadonlyReplicas", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicaSetsConnections: ReplicaSets Connections.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicaSetsConnections() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicaSetsConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReplicationFactor: The number of nodes in the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReplicationFactor() {
            return software.amazon.jsii.Kernel.get(this, "attrReplicationFactor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecondaryZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityGroupId: The ID of the ECS security group.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIpList: The name of the IP whitelist.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIps: The IP addresses in the default whitelist.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIps() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ShardList: The information of the shard nodes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrShardList() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnapshotBackupType() {
            return software.amazon.jsii.Kernel.get(this, "attrSnapshotBackupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SslExpiredTime: The time when the SSL certificate expires.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslExpiredTime() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSslStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrSslStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute StorageEngine: The Storage Engine Of The Instance Type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageEngine() {
            return software.amazon.jsii.Kernel.get(this, "attrStorageEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The details of the instance tags.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTdeStatus() {
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
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcAuthMode() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcAuthMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The VPC ID of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The vSwitch ID of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The ID of the zone in which the instance resides.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.datasource.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mongodb.datasource.InstanceProps.class));
        }
    }
}
