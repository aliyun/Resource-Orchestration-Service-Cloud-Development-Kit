package com.aliyun.ros.cdk.rds.datasource;

/**
 * Represents a <code>DBInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.761Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.datasource.IDBInstance")
@software.amazon.jsii.Jsii.Proxy(IDBInstance.Jsii$Proxy.class)
public interface IDBInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccountMaxQuantity: The maximum number of accounts that can be created on the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountMaxQuantity();

    /**
     * Attribute AdvancedFeatures: The advanced features that are enabled for the instance.
     * <p>
     * If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
     * LinkedServer
     * DistributeTransaction
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdvancedFeatures();

    /**
     * Attribute AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance.
     * <p>
     * Valid values:
     * Auto: automatic update.
     * Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoUpgradeMinorVersion();

    /**
     * Attribute AvailabilityValue: The availability status of the instance in percentage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailabilityValue();

    /**
     * Attribute BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBabelfishConfig();

    /**
     * Attribute Category: The RDS edition of the instance.
     * <p>
     * Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * cluster: RDS Cluster Edition for ApsaraDB RDS for MySQL
     * AlwaysOn: RDS Cluster Edition for ApsaraDB RDS for SQL Server
     * Finance: RDS Enterprise Edition
     * Serverless_basic: RDS Basic Edition for serverless instances
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory();

    /**
     * Attribute Collation: The character set collation of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCollation();

    /**
     * Attribute ConnectionMode: The connection mode of the instance.
     * <p>
     * Valid values:
     * Standard: standard mode
     * Safe: database proxy mode
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionMode();

    /**
     * Attribute ConnectionString: The internal endpoint of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString();

    /**
     * Attribute ConsoleVersion: The type of the proxy that is used by the instance.
     * <p>
     * Valid values:
     * 1: shared proxy
     * 2: dedicated proxy
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsoleVersion();

    /**
     * Attribute CreationTime: The creation time.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime();

    /**
     * Attribute CurrentKernelVersion: The minor engine version of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentKernelVersion();

    /**
     * Attribute DBClusterNodes: The information about the node in the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterNodes();

    /**
     * Attribute DBInstanceClass: The instance type of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceClass();

    /**
     * Attribute DBInstanceClassType: The instance family to which the instance belongs.
     * <p>
     * Valid values:
     * s: shared instance family
     * x: general-purpose instance family
     * d: dedicated instance family
     * h: dedicated host instance family
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceClassType();

    /**
     * Attribute DBInstanceCPU: The number of CPU cores.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceCpu();

    /**
     * Attribute DBInstanceDescription: The description of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDescription();

    /**
     * Attribute DBInstanceDiskUsed: The disk usage of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDiskUsed();

    /**
     * Attribute DBInstanceId: The instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId();

    /**
     * Attribute DBInstanceMemory: The memory capacity of the instance.
     * <p>
     * Unit: MB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceMemory();

    /**
     * Attribute DBInstanceNetType: The type of the network over which the instance is connected.
     * <p>
     * Valid values:
     * Internet: Internet
     * Intranet: internal network
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceNetType();

    /**
     * Attribute DBInstanceStatus: The status of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStatus();

    /**
     * Attribute DBInstanceStorage: The storage capacity of the instance.
     * <p>
     * Unit: GB.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorage();

    /**
     * Attribute DBInstanceStorageType: The storage type of the instance.
     * <p>
     * Valid values:
     * local_ssd and ephemeral_ssd: local SSD
     * cloud_ssd: standard SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorageType();

    /**
     * Attribute DBInstanceType: The type of the instance.
     * <p>
     * Valid values:
     * Primary: primary instance
     * Readonly: read-only instance
     * Guard: disaster recovery instance
     * Temp: temporary instance
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceType();

    /**
     * Attribute DBMaxQuantity: The maximum number of databases that can be created on the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbMaxQuantity();

    /**
     * Attribute DedicatedHostGroupId: The ID of the dedicated cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupId();

    /**
     * Attribute DeletionProtection: Indicates whether the release protection feature is enabled.
     * <p>
     * Valid values:
     * true
     * false
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection();

    /**
     * Attribute Engine: The database engine of the instance.
     * <p>
     * Valid values:
     * MySQL
     * PostgreSQL
     * SQLServer
     * MariaDB
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine();

    /**
     * Attribute EngineVersion: The database engine version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion();

    /**
     * Attribute ExpireTime: The expiration time.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     * Note: Pay-as-you-go instances never expire.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime();

    /**
     * Attribute Extra: The extended information of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtra();

    /**
     * Attribute GeneralGroupName: The name of the dedicated cluster to which the instance belongs.
     * <p>
     * This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGeneralGroupName();

    /**
     * Attribute GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGuardDbInstanceId();

    /**
     * Attribute IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes.
     * <p>
     * The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncrementSourceDbInstanceId();

    /**
     * Attribute InstanceNetworkType: The network type of the instance.
     * <p>
     * Valid values:
     * Classic
     * VPC
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNetworkType();

    /**
     * Attribute InstructionSetArch: The architecture type of the instance.
     * <p>
     * Valid values:
     * x86
     * arm
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstructionSetArch();

    /**
     * Attribute IPType: The type of the IP address.
     * <p>
     * Only IPv4 addresses are supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpType();

    /**
     * Attribute LatestKernelVersion: The latest minor engine version that is supported by the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestKernelVersion();

    /**
     * Attribute LockMode: The lock mode of the instance.
     * <p>
     * Valid values:
     * Unlock: The instance is not locked.
     * ManualLock: The instance is manually locked.
     * LockByExpiration: The instance is automatically locked due to instance expiration.
     * LockByRestoration: The instance is automatically locked due to instance restoration.
     * LockByDiskQuota: The instance is automatically locked due to exhausted storage space.
     * LockReadInstanceByDiskQuota: The instance is a read-only instance and is automatically locked due to exhausted storage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode();

    /**
     * Attribute LockReason: The reason why the instance was locked.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason();

    /**
     * Attribute MaintainTime: The maintenance window of the instance.
     * <p>
     * The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainTime();

    /**
     * Attribute MasterInstanceId: The ID of the primary instance.
     * <p>
     * Note: If this parameter is not returned, the instance is the primary instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterInstanceId();

    /**
     * Attribute MasterZone: The zone ID of the primary instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterZone();

    /**
     * Attribute MaxConnections: The maximum number of concurrent connections.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxConnections();

    /**
     * Attribute MaxIOMBPS: The maximum I/O throughput.
     * <p>
     * Unit: MB/s.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxIombps();

    /**
     * Attribute MaxIOPS: The maximum number of I/O requests per second.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxIops();

    /**
     * Attribute PayType: The billing method of the instance.
     * <p>
     * Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayType();

    /**
     * Attribute PGBouncerEnabled: Indicates whether PgBouncer is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPgBouncerEnabled();

    /**
     * Attribute Port: The port that is used to connect to the instance over an internal network.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort();

    /**
     * Attribute ProxyType: The type of the proxy that is supported by the instance.
     * <p>
     * Valid values:
     * 0: The instance does not support database proxies.
     * 1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
     * 2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxyType();

    /**
     * Attribute ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyDbInstanceIds();

    /**
     * Attribute ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances.
     * <p>
     * The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadonlyInstanceSqlDelayedTime();

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SecurityIPList: The IP addresses in the IP address whitelist.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList();

    /**
     * Attribute SecurityIPMode: The whitelist mode of the instance.
     * <p>
     * Valid values:
     * normal: standard whitelist mode
     * safety: enhanced whitelist mode
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpMode();

    /**
     * Attribute ServerlessConfig: The settings of the serverless instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerlessConfig();

    /**
     * Attribute SlaveZones: The information about the zone of the secondary instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlaveZones();

    /**
     * Attribute SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.
     * <p>
     * Enable
     * Disabled
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSuperPermissionMode();

    /**
     * Attribute TempDBInstanceId: The ID of the temporary instance that is attached to the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTempDbInstanceId();

    /**
     * Attribute TimeZone: The time zone of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeZone();

    /**
     * Attribute Tips: The information about the exception that is detected on the instance.
     * <p>
     * This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTips();

    /**
     * Attribute TipsLevel: The severity level of the exception that is detected on the instance.
     * <p>
     * This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
     * 1: The instance is normal.
     * 2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTipsLevel();

    /**
     * Attribute VpcCloudInstanceId: The VPC ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId();

    /**
     * Attribute VpcId: The virtual private cloud (VPC) ID of the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId();

    /**
     * Attribute VSwitchId: The vSwitch ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId();

    /**
     * Attribute ZoneId: The zone ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.datasource.DBInstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.rds.datasource.IDBInstance.Jsii$Default {
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
         * Attribute AccountMaxQuantity: The maximum number of accounts that can be created on the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountMaxQuantity() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountMaxQuantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AdvancedFeatures: The advanced features that are enabled for the instance.
         * <p>
         * If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
         * LinkedServer
         * DistributeTransaction
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdvancedFeatures() {
            return software.amazon.jsii.Kernel.get(this, "attrAdvancedFeatures", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance.
         * <p>
         * Valid values:
         * Auto: automatic update.
         * Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoUpgradeMinorVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoUpgradeMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AvailabilityValue: The availability status of the instance in percentage.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailabilityValue() {
            return software.amazon.jsii.Kernel.get(this, "attrAvailabilityValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBabelfishConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrBabelfishConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: The RDS edition of the instance.
         * <p>
         * Valid values:
         * Basic: RDS Basic Edition
         * HighAvailability: RDS High-availability Edition
         * cluster: RDS Cluster Edition for ApsaraDB RDS for MySQL
         * AlwaysOn: RDS Cluster Edition for ApsaraDB RDS for SQL Server
         * Finance: RDS Enterprise Edition
         * Serverless_basic: RDS Basic Edition for serverless instances
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Collation: The character set collation of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCollation() {
            return software.amazon.jsii.Kernel.get(this, "attrCollation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionMode: The connection mode of the instance.
         * <p>
         * Valid values:
         * Standard: standard mode
         * Safe: database proxy mode
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionMode() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionString: The internal endpoint of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConsoleVersion: The type of the proxy that is used by the instance.
         * <p>
         * Valid values:
         * 1: shared proxy
         * 2: dedicated proxy
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsoleVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrConsoleVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreationTime: The creation time.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CurrentKernelVersion: The minor engine version of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentKernelVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrCurrentKernelVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterNodes: The information about the node in the cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterNodes() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceClass: The instance type of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceClass() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceClassType: The instance family to which the instance belongs.
         * <p>
         * Valid values:
         * s: shared instance family
         * x: general-purpose instance family
         * d: dedicated instance family
         * h: dedicated host instance family
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceClassType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceClassType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceCPU: The number of CPU cores.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceDescription: The description of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceDiskUsed: The disk usage of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDiskUsed() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceDiskUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceId: The instance ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceMemory: The memory capacity of the instance.
         * <p>
         * Unit: MB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceNetType: The type of the network over which the instance is connected.
         * <p>
         * Valid values:
         * Internet: Internet
         * Intranet: internal network
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceNetType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceNetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceStatus: The status of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceStorage: The storage capacity of the instance.
         * <p>
         * Unit: GB.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorage() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceStorageType: The storage type of the instance.
         * <p>
         * Valid values:
         * local_ssd and ephemeral_ssd: local SSD
         * cloud_ssd: standard SSD
         * cloud_essd: enhanced SSD (ESSD)
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceType: The type of the instance.
         * <p>
         * Valid values:
         * Primary: primary instance
         * Readonly: read-only instance
         * Guard: disaster recovery instance
         * Temp: temporary instance
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBMaxQuantity: The maximum number of databases that can be created on the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbMaxQuantity() {
            return software.amazon.jsii.Kernel.get(this, "attrDbMaxQuantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostGroupId: The ID of the dedicated cluster.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: Indicates whether the release protection feature is enabled.
         * <p>
         * Valid values:
         * true
         * false
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Engine: The database engine of the instance.
         * <p>
         * Valid values:
         * MySQL
         * PostgreSQL
         * SQLServer
         * MariaDB
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
            return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EngineVersion: The database engine version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: The expiration time.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         * Note: Pay-as-you-go instances never expire.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Extra: The extended information of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtra() {
            return software.amazon.jsii.Kernel.get(this, "attrExtra", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GeneralGroupName: The name of the dedicated cluster to which the instance belongs.
         * <p>
         * This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGeneralGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrGeneralGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGuardDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrGuardDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes.
         * <p>
         * The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncrementSourceDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrIncrementSourceDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceNetworkType: The network type of the instance.
         * <p>
         * Valid values:
         * Classic
         * VPC
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstructionSetArch: The architecture type of the instance.
         * <p>
         * Valid values:
         * x86
         * arm
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstructionSetArch() {
            return software.amazon.jsii.Kernel.get(this, "attrInstructionSetArch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IPType: The type of the IP address.
         * <p>
         * Only IPv4 addresses are supported.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpType() {
            return software.amazon.jsii.Kernel.get(this, "attrIpType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestKernelVersion: The latest minor engine version that is supported by the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestKernelVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestKernelVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockMode: The lock mode of the instance.
         * <p>
         * Valid values:
         * Unlock: The instance is not locked.
         * ManualLock: The instance is manually locked.
         * LockByExpiration: The instance is automatically locked due to instance expiration.
         * LockByRestoration: The instance is automatically locked due to instance restoration.
         * LockByDiskQuota: The instance is automatically locked due to exhausted storage space.
         * LockReadInstanceByDiskQuota: The instance is a read-only instance and is automatically locked due to exhausted storage.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
            return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockReason: The reason why the instance was locked.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason() {
            return software.amazon.jsii.Kernel.get(this, "attrLockReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainTime: The maintenance window of the instance.
         * <p>
         * The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterInstanceId: The ID of the primary instance.
         * <p>
         * Note: If this parameter is not returned, the instance is the primary instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterZone: The zone ID of the primary instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterZone() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxConnections: The maximum number of concurrent connections.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxConnections() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxIOMBPS: The maximum I/O throughput.
         * <p>
         * Unit: MB/s.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxIombps() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxIombps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxIOPS: The maximum number of I/O requests per second.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxIops() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PayType: The billing method of the instance.
         * <p>
         * Valid values:
         * Postpaid: pay-as-you-go
         * Prepaid: subscription
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayType() {
            return software.amazon.jsii.Kernel.get(this, "attrPayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PGBouncerEnabled: Indicates whether PgBouncer is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPgBouncerEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrPgBouncerEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: The port that is used to connect to the instance over an internal network.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProxyType: The type of the proxy that is supported by the instance.
         * <p>
         * Valid values:
         * 0: The instance does not support database proxies.
         * 1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
         * 2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxyType() {
            return software.amazon.jsii.Kernel.get(this, "attrProxyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyDbInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrReadOnlyDbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances.
         * <p>
         * The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadonlyInstanceSqlDelayedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrReadonlyInstanceSqlDelayedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The resource group ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIPList: The IP addresses in the IP address whitelist.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIPMode: The whitelist mode of the instance.
         * <p>
         * Valid values:
         * normal: standard whitelist mode
         * safety: enhanced whitelist mode
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpMode() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServerlessConfig: The settings of the serverless instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerlessConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrServerlessConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlaveZones: The information about the zone of the secondary instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlaveZones() {
            return software.amazon.jsii.Kernel.get(this, "attrSlaveZones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.
         * <p>
         * Enable
         * Disabled
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSuperPermissionMode() {
            return software.amazon.jsii.Kernel.get(this, "attrSuperPermissionMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TempDBInstanceId: The ID of the temporary instance that is attached to the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTempDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrTempDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TimeZone: The time zone of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeZone() {
            return software.amazon.jsii.Kernel.get(this, "attrTimeZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tips: The information about the exception that is detected on the instance.
         * <p>
         * This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTips() {
            return software.amazon.jsii.Kernel.get(this, "attrTips", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TipsLevel: The severity level of the exception that is detected on the instance.
         * <p>
         * This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
         * 1: The instance is normal.
         * 2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTipsLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrTipsLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcCloudInstanceId: The VPC ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The virtual private cloud (VPC) ID of the instance.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The vSwitch ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The zone ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.datasource.DBInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.datasource.DBInstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IDBInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IDBInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AccountMaxQuantity: The maximum number of accounts that can be created on the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccountMaxQuantity() {
            return software.amazon.jsii.Kernel.get(this, "attrAccountMaxQuantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AdvancedFeatures: The advanced features that are enabled for the instance.
         * <p>
         * If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
         * LinkedServer
         * DistributeTransaction
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAdvancedFeatures() {
            return software.amazon.jsii.Kernel.get(this, "attrAdvancedFeatures", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance.
         * <p>
         * Valid values:
         * Auto: automatic update.
         * Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoUpgradeMinorVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAutoUpgradeMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AvailabilityValue: The availability status of the instance in percentage.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailabilityValue() {
            return software.amazon.jsii.Kernel.get(this, "attrAvailabilityValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBabelfishConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrBabelfishConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: The RDS edition of the instance.
         * <p>
         * Valid values:
         * Basic: RDS Basic Edition
         * HighAvailability: RDS High-availability Edition
         * cluster: RDS Cluster Edition for ApsaraDB RDS for MySQL
         * AlwaysOn: RDS Cluster Edition for ApsaraDB RDS for SQL Server
         * Finance: RDS Enterprise Edition
         * Serverless_basic: RDS Basic Edition for serverless instances
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Collation: The character set collation of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCollation() {
            return software.amazon.jsii.Kernel.get(this, "attrCollation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionMode: The connection mode of the instance.
         * <p>
         * Valid values:
         * Standard: standard mode
         * Safe: database proxy mode
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionMode() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConnectionString: The internal endpoint of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnectionString() {
            return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConsoleVersion: The type of the proxy that is used by the instance.
         * <p>
         * Valid values:
         * 1: shared proxy
         * 2: dedicated proxy
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsoleVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrConsoleVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreationTime: The creation time.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreationTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreationTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CurrentKernelVersion: The minor engine version of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurrentKernelVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrCurrentKernelVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBClusterNodes: The information about the node in the cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbClusterNodes() {
            return software.amazon.jsii.Kernel.get(this, "attrDbClusterNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceClass: The instance type of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceClass() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceClassType: The instance family to which the instance belongs.
         * <p>
         * Valid values:
         * s: shared instance family
         * x: general-purpose instance family
         * d: dedicated instance family
         * h: dedicated host instance family
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceClassType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceClassType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceCPU: The number of CPU cores.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceCpu() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceDescription: The description of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceDiskUsed: The disk usage of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceDiskUsed() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceDiskUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceId: The instance ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceMemory: The memory capacity of the instance.
         * <p>
         * Unit: MB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceMemory() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceMemory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceNetType: The type of the network over which the instance is connected.
         * <p>
         * Valid values:
         * Internet: Internet
         * Intranet: internal network
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceNetType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceNetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceStatus: The status of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceStorage: The storage capacity of the instance.
         * <p>
         * Unit: GB.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorage() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceStorageType: The storage type of the instance.
         * <p>
         * Valid values:
         * local_ssd and ephemeral_ssd: local SSD
         * cloud_ssd: standard SSD
         * cloud_essd: enhanced SSD (ESSD)
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStorageType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBInstanceType: The type of the instance.
         * <p>
         * Valid values:
         * Primary: primary instance
         * Readonly: read-only instance
         * Guard: disaster recovery instance
         * Temp: temporary instance
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceType() {
            return software.amazon.jsii.Kernel.get(this, "attrDbInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DBMaxQuantity: The maximum number of databases that can be created on the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbMaxQuantity() {
            return software.amazon.jsii.Kernel.get(this, "attrDbMaxQuantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DedicatedHostGroupId: The ID of the dedicated cluster.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedHostGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrDedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute DeletionProtection: Indicates whether the release protection feature is enabled.
         * <p>
         * Valid values:
         * true
         * false
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
            return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Engine: The database engine of the instance.
         * <p>
         * Valid values:
         * MySQL
         * PostgreSQL
         * SQLServer
         * MariaDB
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngine() {
            return software.amazon.jsii.Kernel.get(this, "attrEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EngineVersion: The database engine version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEngineVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrEngineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExpireTime: The expiration time.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         * Note: Pay-as-you-go instances never expire.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
            return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Extra: The extended information of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtra() {
            return software.amazon.jsii.Kernel.get(this, "attrExtra", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GeneralGroupName: The name of the dedicated cluster to which the instance belongs.
         * <p>
         * This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGeneralGroupName() {
            return software.amazon.jsii.Kernel.get(this, "attrGeneralGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGuardDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrGuardDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes.
         * <p>
         * The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIncrementSourceDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrIncrementSourceDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceNetworkType: The network type of the instance.
         * <p>
         * Valid values:
         * Classic
         * VPC
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceNetworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstructionSetArch: The architecture type of the instance.
         * <p>
         * Valid values:
         * x86
         * arm
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstructionSetArch() {
            return software.amazon.jsii.Kernel.get(this, "attrInstructionSetArch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IPType: The type of the IP address.
         * <p>
         * Only IPv4 addresses are supported.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpType() {
            return software.amazon.jsii.Kernel.get(this, "attrIpType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LatestKernelVersion: The latest minor engine version that is supported by the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLatestKernelVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrLatestKernelVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockMode: The lock mode of the instance.
         * <p>
         * Valid values:
         * Unlock: The instance is not locked.
         * ManualLock: The instance is manually locked.
         * LockByExpiration: The instance is automatically locked due to instance expiration.
         * LockByRestoration: The instance is automatically locked due to instance restoration.
         * LockByDiskQuota: The instance is automatically locked due to exhausted storage space.
         * LockReadInstanceByDiskQuota: The instance is a read-only instance and is automatically locked due to exhausted storage.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockMode() {
            return software.amazon.jsii.Kernel.get(this, "attrLockMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LockReason: The reason why the instance was locked.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLockReason() {
            return software.amazon.jsii.Kernel.get(this, "attrLockReason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaintainTime: The maintenance window of the instance.
         * <p>
         * The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainTime() {
            return software.amazon.jsii.Kernel.get(this, "attrMaintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterInstanceId: The ID of the primary instance.
         * <p>
         * Note: If this parameter is not returned, the instance is the primary instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MasterZone: The zone ID of the primary instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterZone() {
            return software.amazon.jsii.Kernel.get(this, "attrMasterZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxConnections: The maximum number of concurrent connections.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxConnections() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxConnections", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxIOMBPS: The maximum I/O throughput.
         * <p>
         * Unit: MB/s.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxIombps() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxIombps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxIOPS: The maximum number of I/O requests per second.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxIops() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PayType: The billing method of the instance.
         * <p>
         * Valid values:
         * Postpaid: pay-as-you-go
         * Prepaid: subscription
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayType() {
            return software.amazon.jsii.Kernel.get(this, "attrPayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PGBouncerEnabled: Indicates whether PgBouncer is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPgBouncerEnabled() {
            return software.amazon.jsii.Kernel.get(this, "attrPgBouncerEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Port: The port that is used to connect to the instance over an internal network.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
            return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProxyType: The type of the proxy that is supported by the instance.
         * <p>
         * Valid values:
         * 0: The instance does not support database proxies.
         * 1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
         * 2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxyType() {
            return software.amazon.jsii.Kernel.get(this, "attrProxyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyDbInstanceIds() {
            return software.amazon.jsii.Kernel.get(this, "attrReadOnlyDbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances.
         * <p>
         * The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadonlyInstanceSqlDelayedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrReadonlyInstanceSqlDelayedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The resource group ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIPList: The IP addresses in the IP address whitelist.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpList() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SecurityIPMode: The whitelist mode of the instance.
         * <p>
         * Valid values:
         * normal: standard whitelist mode
         * safety: enhanced whitelist mode
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityIpMode() {
            return software.amazon.jsii.Kernel.get(this, "attrSecurityIpMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ServerlessConfig: The settings of the serverless instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrServerlessConfig() {
            return software.amazon.jsii.Kernel.get(this, "attrServerlessConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlaveZones: The information about the zone of the secondary instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlaveZones() {
            return software.amazon.jsii.Kernel.get(this, "attrSlaveZones", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.
         * <p>
         * Enable
         * Disabled
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSuperPermissionMode() {
            return software.amazon.jsii.Kernel.get(this, "attrSuperPermissionMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TempDBInstanceId: The ID of the temporary instance that is attached to the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTempDbInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrTempDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TimeZone: The time zone of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTimeZone() {
            return software.amazon.jsii.Kernel.get(this, "attrTimeZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tips: The information about the exception that is detected on the instance.
         * <p>
         * This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTips() {
            return software.amazon.jsii.Kernel.get(this, "attrTips", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TipsLevel: The severity level of the exception that is detected on the instance.
         * <p>
         * This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
         * 1: The instance is normal.
         * 2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTipsLevel() {
            return software.amazon.jsii.Kernel.get(this, "attrTipsLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcCloudInstanceId: The VPC ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VpcId: The virtual private cloud (VPC) ID of the instance.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
            return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VSwitchId: The vSwitch ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVSwitchId() {
            return software.amazon.jsii.Kernel.get(this, "attrVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The zone ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.datasource.DBInstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.datasource.DBInstanceProps.class));
        }
    }
}
