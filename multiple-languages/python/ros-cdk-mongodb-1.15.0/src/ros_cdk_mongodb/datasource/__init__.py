import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


@jsii.interface(jsii_type="@alicloud/ros-cdk-mongodb.datasource.IInstance")
class IInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccountDescription")
    def attr_account_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountDescription: The description of the account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountName: The name of the account.

        Value: **root * *.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance.

        Valid values:
        true: Auto-renewal is enabled for the instance.
        false: Auto-renewal is disabled for the instance.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenewDuration")
    def attr_auto_renew_duration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AutoRenewDuration: Auto Renew Duration.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackupInterval")
    def attr_backup_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupInterval: The frequency at which high-frequency backup is created.

        Valid values:
        -1: High-frequency backup is disabled.
        15: every 15 minutes.
        30: every 30 minutes.
        60: every hour.
        120: every 2 hours.
        180: every 3 hours.
        240: every 4 hours.
        360: every 6 hours.
        480: every 8 hours.
        720: every 12 hours.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackupRetentionPeriod")
    def attr_backup_retention_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupRetentionPeriod: The retention period of the backup data.

        Unit: day.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The Database create time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceClass")
    def attr_db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceClass: The instance type of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDescription")
    def attr_db_instance_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceDescription: The name of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceReleaseProtection")
    def attr_db_instance_release_protection(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance.

        Valid values:
        true
        false
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorage")
    def attr_db_instance_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceStorage: The storage capacity of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceType")
    def attr_db_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceType: The architecture of the instance.

        Valid values:
        replicate: replica set instance
        sharding: sharded cluster instance
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnableBackupLog")
    def attr_enable_backup_log(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnableBackupLog: Indicates whether the log backup feature is enabled.

        Valid values:
        0 (default): The log backup feature is disabled.
        1: The log backup feature is enabled.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Engine: The database engine of the instance.

        Default value: mongodb.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EngineVersion: The database engine version of the instance.

        6.0
        5.0
        4.4
        4.2
        4.0
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpireTime: The time when the subscription instance expires.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHiddenZoneId")
    def attr_hidden_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the mongos.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrKindCode")
    def attr_kind_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KindCode: The kind code of the instance.

        Valid values:
        0: physical machine
        1: Elastic Compute Service (ECS) instance
        2: Docker cluster
        18: Kubernetes cluster
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLastDowngradeTime")
    def attr_last_downgrade_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockMode: The lock status of the instance.

        Valid values:
        Unlock: The instance is not locked.
        ManualLock: The instance is manually locked.
        LockByExpiration: The instance is automatically locked due to instance expiration.
        LockByRestoration: The instance is automatically locked before the instance is rolled back.
        LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
        Released: The instance is released.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLogBackupRetentionPeriod")
    def attr_log_backup_retention_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained.

        Valid values: 7 to 730.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMaintainEndTime")
    def attr_maintain_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainEndTime: The end time of the maintenance window.

        The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMaintainStartTime")
    def attr_maintain_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainStartTime: The start time of the maintenance window.

        The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMongosList")
    def attr_mongos_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MongosList: The information of the mongos nodes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAddresses")
    def attr_network_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkType: The network type of the instance.

        Valid values:
        Classic: classic network
        VPC: VPC
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Parameters: The settings of the parameters that have taken effect.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The billing method of the Database.

        Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupPeriod")
    def attr_preferred_backup_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PreferredBackupPeriod: The day of a week on which to back up data.

        Valid values:
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
        Sunday
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupTime")
    def attr_preferred_backup_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PreferredBackupTime: The time range during which the backup was created.

        The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProtocolType")
    def attr_protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProtocolType: The access protocol type of the instance.

        Valid values:
        mongodb
        dynamodb
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReadonlyReplicas")
    def attr_readonly_replicas(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReadonlyReplicas: The number of read-only nodes in the shard node.

        Valid values: 0 to 5. The value must be an integer.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplicaSetsConnections")
    def attr_replica_sets_connections(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaSetsConnections: ReplicaSets Connections.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplicationFactor")
    def attr_replication_factor(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationFactor: The number of nodes in the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecondaryZoneId")
    def attr_secondary_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupId: The ID of the ECS security group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpList")
    def attr_security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIpList: The name of the IP whitelist.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIps: The IP addresses in the default whitelist.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrShardList")
    def attr_shard_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ShardList: The information of the shard nodes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSnapshotBackupType")
    def attr_snapshot_backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SnapshotBackupType: The snapshot backup type.

        Valid values:
        Flash: single-digit second backup
        Standard (default): standard backup
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSslExpiredTime")
    def attr_ssl_expired_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SslExpiredTime: The time when the SSL certificate expires.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSslStatus")
    def attr_ssl_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SslStatus: The status of the SSL feature.

        Valid values:
        Open: The SSL feature is enabled.
        Closed: The SSL feature is disabled.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStorageEngine")
    def attr_storage_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageEngine: The Storage Engine Of The Instance Type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The details of the instance tags.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTdeStatus")
    def attr_tde_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TdeStatus: The TDE status.

        Valid values:
        enabled
        disabled
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcAuthMode")
    def attr_vpc_auth_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled.

        Valid values:
        Open: Password-free access within the VPC is enabled.
        Close: Password-free access within the VPC is disabled, and you must use a password for access.
        NotSupport: Password-free access within the VPC is not supported.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The VPC ID of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The vSwitch ID of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: The ID of the zone in which the instance resides.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        ...


class _IInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mongodb.datasource.IInstance"

    @builtins.property
    @jsii.member(jsii_name="attrAccountDescription")
    def attr_account_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountDescription: The description of the account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountName: The name of the account.

        Value: **root * *.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance.

        Valid values:
        true: Auto-renewal is enabled for the instance.
        false: Auto-renewal is disabled for the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAutoRenew"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenewDuration")
    def attr_auto_renew_duration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AutoRenewDuration: Auto Renew Duration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAutoRenewDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupInterval")
    def attr_backup_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupInterval: The frequency at which high-frequency backup is created.

        Valid values:
        -1: High-frequency backup is disabled.
        15: every 15 minutes.
        30: every 30 minutes.
        60: every hour.
        120: every 2 hours.
        180: every 3 hours.
        240: every 4 hours.
        360: every 6 hours.
        480: every 8 hours.
        720: every 12 hours.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupRetentionPeriod")
    def attr_backup_retention_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupRetentionPeriod: The retention period of the backup data.

        Unit: day.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupRetentionPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The Database create time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceClass")
    def attr_db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceClass: The instance type of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDescription")
    def attr_db_instance_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceDescription: The name of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceReleaseProtection")
    def attr_db_instance_release_protection(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance.

        Valid values:
        true
        false
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceReleaseProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorage")
    def attr_db_instance_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceStorage: The storage capacity of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceType")
    def attr_db_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceType: The architecture of the instance.

        Valid values:
        replicate: replica set instance
        sharding: sharded cluster instance
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnableBackupLog")
    def attr_enable_backup_log(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnableBackupLog: Indicates whether the log backup feature is enabled.

        Valid values:
        0 (default): The log backup feature is disabled.
        1: The log backup feature is enabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnableBackupLog"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Engine: The database engine of the instance.

        Default value: mongodb.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EngineVersion: The database engine version of the instance.

        6.0
        5.0
        4.4
        4.2
        4.0
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpireTime: The time when the subscription instance expires.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrHiddenZoneId")
    def attr_hidden_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHiddenZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the mongos.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrKindCode")
    def attr_kind_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KindCode: The kind code of the instance.

        Valid values:
        0: physical machine
        1: Elastic Compute Service (ECS) instance
        2: Docker cluster
        18: Kubernetes cluster
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKindCode"))

    @builtins.property
    @jsii.member(jsii_name="attrLastDowngradeTime")
    def attr_last_downgrade_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLastDowngradeTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockMode: The lock status of the instance.

        Valid values:
        Unlock: The instance is not locked.
        ManualLock: The instance is manually locked.
        LockByExpiration: The instance is automatically locked due to instance expiration.
        LockByRestoration: The instance is automatically locked before the instance is rolled back.
        LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
        Released: The instance is released.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLogBackupRetentionPeriod")
    def attr_log_backup_retention_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained.

        Valid values: 7 to 730.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogBackupRetentionPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainEndTime")
    def attr_maintain_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainEndTime: The end time of the maintenance window.

        The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintainEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainStartTime")
    def attr_maintain_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainStartTime: The start time of the maintenance window.

        The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintainStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMongosList")
    def attr_mongos_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MongosList: The information of the mongos nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMongosList"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAddresses")
    def attr_network_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkType: The network type of the instance.

        Valid values:
        Classic: classic network
        VPC: VPC
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Parameters: The settings of the parameters that have taken effect.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The billing method of the Database.

        Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupPeriod")
    def attr_preferred_backup_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PreferredBackupPeriod: The day of a week on which to back up data.

        Valid values:
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
        Sunday
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPreferredBackupPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupTime")
    def attr_preferred_backup_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PreferredBackupTime: The time range during which the backup was created.

        The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPreferredBackupTime"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolType")
    def attr_protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProtocolType: The access protocol type of the instance.

        Valid values:
        mongodb
        dynamodb
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProtocolType"))

    @builtins.property
    @jsii.member(jsii_name="attrReadonlyReplicas")
    def attr_readonly_replicas(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReadonlyReplicas: The number of read-only nodes in the shard node.

        Valid values: 0 to 5. The value must be an integer.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReadonlyReplicas"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaSetsConnections")
    def attr_replica_sets_connections(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaSetsConnections: ReplicaSets Connections.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicaSetsConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationFactor")
    def attr_replication_factor(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationFactor: The number of nodes in the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationFactor"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecondaryZoneId")
    def attr_secondary_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecondaryZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupId: The ID of the ECS security group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpList")
    def attr_security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIpList: The name of the IP whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityIpList"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIps: The IP addresses in the default whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityIps"))

    @builtins.property
    @jsii.member(jsii_name="attrShardList")
    def attr_shard_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ShardList: The information of the shard nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrShardList"))

    @builtins.property
    @jsii.member(jsii_name="attrSnapshotBackupType")
    def attr_snapshot_backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SnapshotBackupType: The snapshot backup type.

        Valid values:
        Flash: single-digit second backup
        Standard (default): standard backup
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSnapshotBackupType"))

    @builtins.property
    @jsii.member(jsii_name="attrSslExpiredTime")
    def attr_ssl_expired_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SslExpiredTime: The time when the SSL certificate expires.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSslExpiredTime"))

    @builtins.property
    @jsii.member(jsii_name="attrSslStatus")
    def attr_ssl_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SslStatus: The status of the SSL feature.

        Valid values:
        Open: The SSL feature is enabled.
        Closed: The SSL feature is disabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSslStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageEngine")
    def attr_storage_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageEngine: The Storage Engine Of The Instance Type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The details of the instance tags.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTdeStatus")
    def attr_tde_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TdeStatus: The TDE status.

        Valid values:
        enabled
        disabled
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTdeStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcAuthMode")
    def attr_vpc_auth_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled.

        Valid values:
        Open: Password-free access within the VPC is enabled.
        Close: Password-free access within the VPC is disabled, and you must use a password for access.
        NotSupport: Password-free access within the VPC is not supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcAuthMode"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The VPC ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The vSwitch ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: The ID of the zone in which the instance resides.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstance).__jsii_proxy_class__ = lambda : _IInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mongodb.datasource.IInstanceClasses")
class IInstanceClasses(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``InstanceClasses``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClasses")
    def attr_instance_classes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceClasses: The list of The instance classes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClassIds")
    def attr_instance_class_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceClassIds: The list of The instance class Ids.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceClassesProps":
        ...


class _IInstanceClassesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``InstanceClasses``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mongodb.datasource.IInstanceClasses"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClasses")
    def attr_instance_classes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceClasses: The list of The instance classes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceClasses"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClassIds")
    def attr_instance_class_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceClassIds: The list of The instance class Ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceClassIds"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceClassesProps":
        return typing.cast("InstanceClassesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstanceClasses).__jsii_proxy_class__ = lambda : _IInstanceClassesProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-mongodb.datasource.IInstances")
class IInstances(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instances``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: The list of The instance Ids.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Instances: The list of The instances.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstancesProps":
        ...


class _IInstancesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instances``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-mongodb.datasource.IInstances"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: The list of The instance Ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Instances: The list of The instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstances"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstancesProps":
        return typing.cast("InstancesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstances).__jsii_proxy_class__ = lambda : _IInstancesProxy


@jsii.implements(IInstance)
class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::MONGODB::Instance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97ed0e61070789ae974d0a538a41ea324098aa3e8d14e56b2a43a52cd6e0580d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountDescription")
    def attr_account_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountDescription: The description of the account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountName: The name of the account.

        Value: **root * *.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance.

        Valid values:
        true: Auto-renewal is enabled for the instance.
        false: Auto-renewal is disabled for the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAutoRenew"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenewDuration")
    def attr_auto_renew_duration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AutoRenewDuration: Auto Renew Duration.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAutoRenewDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupInterval")
    def attr_backup_interval(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupInterval: The frequency at which high-frequency backup is created.

        Valid values:
        -1: High-frequency backup is disabled.
        15: every 15 minutes.
        30: every 30 minutes.
        60: every hour.
        120: every 2 hours.
        180: every 3 hours.
        240: every 4 hours.
        360: every 6 hours.
        480: every 8 hours.
        720: every 12 hours.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupRetentionPeriod")
    def attr_backup_retention_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupRetentionPeriod: The retention period of the backup data.

        Unit: day.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupRetentionPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The Database create time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceClass")
    def attr_db_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceClass: The instance type of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDescription")
    def attr_db_instance_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceDescription: The name of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceReleaseProtection")
    def attr_db_instance_release_protection(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance.

        Valid values:
        true
        false
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceReleaseProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorage")
    def attr_db_instance_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbInstanceStorage: The storage capacity of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceType")
    def attr_db_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DBInstanceType: The architecture of the instance.

        Valid values:
        replicate: replica set instance
        sharding: sharded cluster instance
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnableBackupLog")
    def attr_enable_backup_log(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnableBackupLog: Indicates whether the log backup feature is enabled.

        Valid values:
        0 (default): The log backup feature is disabled.
        1: The log backup feature is enabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnableBackupLog"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Engine: The database engine of the instance.

        Default value: mongodb.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EngineVersion: The database engine version of the instance.

        6.0
        5.0
        4.4
        4.2
        4.0
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExpireTime: The time when the subscription instance expires.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrHiddenZoneId")
    def attr_hidden_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHiddenZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the mongos.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrKindCode")
    def attr_kind_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute KindCode: The kind code of the instance.

        Valid values:
        0: physical machine
        1: Elastic Compute Service (ECS) instance
        2: Docker cluster
        18: Kubernetes cluster
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrKindCode"))

    @builtins.property
    @jsii.member(jsii_name="attrLastDowngradeTime")
    def attr_last_downgrade_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLastDowngradeTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LockMode: The lock status of the instance.

        Valid values:
        Unlock: The instance is not locked.
        ManualLock: The instance is manually locked.
        LockByExpiration: The instance is automatically locked due to instance expiration.
        LockByRestoration: The instance is automatically locked before the instance is rolled back.
        LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
        Released: The instance is released.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLogBackupRetentionPeriod")
    def attr_log_backup_retention_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained.

        Valid values: 7 to 730.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogBackupRetentionPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainEndTime")
    def attr_maintain_end_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainEndTime: The end time of the maintenance window.

        The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintainEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainStartTime")
    def attr_maintain_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaintainStartTime: The start time of the maintenance window.

        The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaintainStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMongosList")
    def attr_mongos_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MongosList: The information of the mongos nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMongosList"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAddresses")
    def attr_network_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkType: The network type of the instance.

        Valid values:
        Classic: classic network
        VPC: VPC
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Parameters: The settings of the parameters that have taken effect.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The billing method of the Database.

        Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupPeriod")
    def attr_preferred_backup_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PreferredBackupPeriod: The day of a week on which to back up data.

        Valid values:
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
        Sunday
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPreferredBackupPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupTime")
    def attr_preferred_backup_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PreferredBackupTime: The time range during which the backup was created.

        The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPreferredBackupTime"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolType")
    def attr_protocol_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProtocolType: The access protocol type of the instance.

        Valid values:
        mongodb
        dynamodb
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProtocolType"))

    @builtins.property
    @jsii.member(jsii_name="attrReadonlyReplicas")
    def attr_readonly_replicas(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReadonlyReplicas: The number of read-only nodes in the shard node.

        Valid values: 0 to 5. The value must be an integer.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReadonlyReplicas"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaSetsConnections")
    def attr_replica_sets_connections(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicaSetsConnections: ReplicaSets Connections.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicaSetsConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationFactor")
    def attr_replication_factor(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationFactor: The number of nodes in the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationFactor"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecondaryZoneId")
    def attr_secondary_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecondaryZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityGroupId: The ID of the ECS security group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpList")
    def attr_security_ip_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIpList: The name of the IP whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityIpList"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityIps: The IP addresses in the default whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityIps"))

    @builtins.property
    @jsii.member(jsii_name="attrShardList")
    def attr_shard_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ShardList: The information of the shard nodes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrShardList"))

    @builtins.property
    @jsii.member(jsii_name="attrSnapshotBackupType")
    def attr_snapshot_backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SnapshotBackupType: The snapshot backup type.

        Valid values:
        Flash: single-digit second backup
        Standard (default): standard backup
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSnapshotBackupType"))

    @builtins.property
    @jsii.member(jsii_name="attrSslExpiredTime")
    def attr_ssl_expired_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SslExpiredTime: The time when the SSL certificate expires.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSslExpiredTime"))

    @builtins.property
    @jsii.member(jsii_name="attrSslStatus")
    def attr_ssl_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SslStatus: The status of the SSL feature.

        Valid values:
        Open: The SSL feature is enabled.
        Closed: The SSL feature is disabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSslStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageEngine")
    def attr_storage_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageEngine: The Storage Engine Of The Instance Type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The details of the instance tags.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTdeStatus")
    def attr_tde_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TdeStatus: The TDE status.

        Valid values:
        enabled
        disabled
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTdeStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcAuthMode")
    def attr_vpc_auth_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled.

        Valid values:
        Open: Password-free access within the VPC is enabled.
        Close: Password-free access within the VPC is disabled, and you must use a password for access.
        NotSupport: Password-free access within the VPC is not supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcAuthMode"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The VPC ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VSwitchId: The vSwitch ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneId: The ID of the zone in which the instance resides.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a240898435ca1142e758cc749a109bb666d4c246941a6ad8ec1c7ea1c12ecd8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f740e30e87419dba90d3fa04f559d9a6b262417367a89130a841aa29bb4e085c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b92f982084a73828245a36a214c84eb1e0998c9759e715787503fb0a65cb921d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IInstanceClasses)
class InstanceClasses(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.InstanceClasses",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::MONGODB::InstanceClasses``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstanceClasses``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instanceclasses
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["InstanceClassesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88e235f27aba92adf65ad6c60c4eb2e230aaf419396fcd0fbfbe5ab0f07f0886)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClasses")
    def attr_instance_classes(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceClasses: The list of The instance classes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceClasses"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClassIds")
    def attr_instance_class_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceClassIds: The list of The instance class Ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceClassIds"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceClassesProps":
        return typing.cast("InstanceClassesProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a251cb4ec9b679a5f42a6c43f9b173ab4a3d1b14fe7c65cb67914513e21a27d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__308968882e7c6bad88a8695b112b28e052f72888b12ca80559bab44932cbb46c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2baadf928d43a6080b1059942c8418e06531c409ef8aeea5627580a9b91f6401)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.InstanceClassesProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_type": "dbType",
        "instance_charge_type": "instanceChargeType",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
        "zone_id": "zoneId",
    },
)
class InstanceClassesProps:
    def __init__(
        self,
        *,
        db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``InstanceClasses``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instanceclasses

        :param db_type: Property dbType: The database engine type of the instance. normal: replica set instance sharding: sharded cluster instance
        :param instance_charge_type: Property instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values: PrePaid: subscription PostPaid: pay-as-you-go
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param zone_id: Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36c11cccdcc33f1daaf355250c1a553c95498650b8997bd9020ad236e28642bf)
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_type is not None:
            self._values["db_type"] = db_type
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbType: The database engine type of the instance.

        normal: replica set instance
        sharding: sharded cluster instance
        '''
        result = self._values.get("db_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: The billing method of the instance.

        Default value: PostPaid. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone ID of the instance.

        You can call the DescribeRegions operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceClassesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "refresh_options": "refreshOptions"},
)
class InstanceProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instance

        :param instance_id: Property instanceId: The ID of the mongos.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d12c4e35100dac3e1faabe99502f233bd39c6db04ac7dbd06580f8aa321b99c)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the mongos.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IInstances)
class Instances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.Instances",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::MONGODB::Instances``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstances``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["InstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5477ebd8528ae568dd5b31384ff11e46e6fe6833c0c171a3ad2d9bc7b63b4b49)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: The list of The instance Ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Instances: The list of The instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstances"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstancesProps":
        return typing.cast("InstancesProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32011ad2b516fb7c227e7590d94f4cd057019c440792e1422cebeb04f9b0e3ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1b6549df7ea7471ec356e38f3464863c4f1e7470038cebd78e1d563ab679983)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9b8a181c7b2c1934c8e7e136689bc535b2106762c9baeab55fe0d4367960c04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.InstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "charge_type": "chargeType",
        "connection_domain": "connectionDomain",
        "db_instance_class": "dbInstanceClass",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_id": "dbInstanceId",
        "db_instance_status": "dbInstanceStatus",
        "db_instance_type": "dbInstanceType",
        "engine_version": "engineVersion",
        "expired": "expired",
        "network_type": "networkType",
        "refresh_options": "refreshOptions",
        "replication_factor": "replicationFactor",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class InstancesProps:
    def __init__(
        self,
        *,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        expired: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        replication_factor: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosInstances.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instances

        :param charge_type: Property chargeType: The billing method of the instance. Valid values: PostPaid: pay-as-you-go PrePaid: subscription
        :param connection_domain: Property connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
        :param db_instance_class: Property dbInstanceClass: The instance type. For more information about valid values, see Instance types.
        :param db_instance_description: Property dbInstanceDescription: The description of the instance.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        :param db_instance_status: Property dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
        :param db_instance_type: Property dbInstanceType: The category of the instance. Default value: replicate. Valid values: sharding: sharded cluster instance replicate: replica set or standalone instance Note To query the list of sharded cluster instances, you must set the parameter to sharding. This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
        :param engine_version: Property engineVersion: The database engine version of the instance. Valid values: 5.0 4.4 4.2 4.0 3.4
        :param expired: Property expired: Specifies whether the instance expires. Valid values: true: The instance expires. false: The instance does not expire.
        :param network_type: Property networkType: The network type of the instance. Valid values: Classic Vpc
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param replication_factor: Property replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags of instance.
        :param vpc_id: Property vpcId: The VPC ID of the instance.
        :param v_switch_id: Property vSwitchId: The vSwitch ID of the instance.
        :param zone_id: Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c2898a46ebde1869b9dff511f4ec12313ebb0e2150f0d52e88d6b1a1d61ab8b)
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument connection_domain", value=connection_domain, expected_type=type_hints["connection_domain"])
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_instance_status", value=db_instance_status, expected_type=type_hints["db_instance_status"])
            check_type(argname="argument db_instance_type", value=db_instance_type, expected_type=type_hints["db_instance_type"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument expired", value=expired, expected_type=type_hints["expired"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument replication_factor", value=replication_factor, expected_type=type_hints["replication_factor"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if connection_domain is not None:
            self._values["connection_domain"] = connection_domain
        if db_instance_class is not None:
            self._values["db_instance_class"] = db_instance_class
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id
        if db_instance_status is not None:
            self._values["db_instance_status"] = db_instance_status
        if db_instance_type is not None:
            self._values["db_instance_type"] = db_instance_type
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if expired is not None:
            self._values["expired"] = expired
        if network_type is not None:
            self._values["network_type"] = network_type
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if replication_factor is not None:
            self._values["replication_factor"] = replication_factor
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: The billing method of the instance.

        Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionDomain: The endpoint of the node.

        You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
        '''
        result = self._values.get("connection_domain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceClass: The instance type.

        For more information about valid values, see Instance types.
        '''
        result = self._values.get("db_instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceDescription: The description of the instance.'''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceId: The ID of the instance.'''
        result = self._values.get("db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceStatus: The state of the instance.

        For more information about valid values, see Instance states.
        '''
        result = self._values.get("db_instance_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceType: The category of the instance.

        Default value: replicate. Valid values:
        sharding: sharded cluster instance
        replicate: replica set or standalone instance
        Note
        To query the list of sharded cluster instances, you must set the parameter to sharding.
        This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
        '''
        result = self._values.get("db_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engineVersion: The database engine version of the instance.

        Valid values:
        5.0
        4.4
        4.2
        4.0
        3.4
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property expired: Specifies whether the instance expires.

        Valid values:
        true: The instance expires.
        false: The instance does not expire.
        '''
        result = self._values.get("expired")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkType: The network type of the instance.

        Valid values:
        Classic
        Vpc
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property replicationFactor: The number of nodes in a replica set instance.

        Valid values: 3, 5, and 7.
        '''
        result = self._values.get("replication_factor")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstances.TagsProperty"]]:
        '''Property tags: Tags of instance.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstances.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The VPC ID of the instance.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The vSwitch ID of the instance.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The zone ID of the instance.

        You can call the DescribeRegions operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::MONGODB::Instance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0df32591e5bb2cdcafdbce20fd7fdceb12f04734a2700bf349aa7789ff45f043)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5b2b844c5a973d2400daa7523b7aa03fcc5b8f5d182c9d078bd15de4a76dce1)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountDescription")
    def attr_account_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountDescription: The description of the account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountName")
    def attr_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountName: The name of the account. Value: **root * *.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        AutoRenew: Indicates whether auto-renewal is enabled for the instance. Valid values:
        true: Auto-renewal is enabled for the instance.
        false: Auto-renewal is disabled for the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoRenew"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenewDuration")
    def attr_auto_renew_duration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoRenewDuration: Auto Renew Duration.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoRenewDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupInterval")
    def attr_backup_interval(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        BackupInterval: The frequency at which high-frequency backup is created. Valid values:
        -1: High-frequency backup is disabled.
        15: every 15 minutes.
        30: every 30 minutes.
        60: every hour.
        120: every 2 hours.
        180: every 3 hours.
        240: every 4 hours.
        360: every 6 hours.
        480: every 8 hours.
        720: every 12 hours.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupInterval"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupRetentionPeriod")
    def attr_backup_retention_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupRetentionPeriod: The retention period of the backup data. Unit: day.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupRetentionPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The Database create time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceClass")
    def attr_db_instance_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceClass: The instance type of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDescription")
    def attr_db_instance_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceDescription: The name of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceReleaseProtection")
    def attr_db_instance_release_protection(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance. Valid values:
        true
        false
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceReleaseProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorage")
    def attr_db_instance_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbInstanceStorage: The storage capacity of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceType")
    def attr_db_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        DBInstanceType: The architecture of the instance. Valid values:
        replicate: replica set instance
        sharding: sharded cluster instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnableBackupLog")
    def attr_enable_backup_log(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        EnableBackupLog: Indicates whether the log backup feature is enabled. Valid values:
        0 (default): The log backup feature is disabled.
        1: The log backup feature is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnableBackupLog"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Engine: The database engine of the instance. Default value: mongodb.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        EngineVersion: The database engine version of the instance.
        6.0
        5.0
        4.4
        4.2
        4.0
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExpireTime: The time when the subscription instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrHiddenZoneId")
    def attr_hidden_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHiddenZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the mongos
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrKindCode")
    def attr_kind_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        KindCode: The kind code of the instance. Valid values:
        0: physical machine
        1: Elastic Compute Service (ECS) instance
        2: Docker cluster
        18: Kubernetes cluster
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKindCode"))

    @builtins.property
    @jsii.member(jsii_name="attrLastDowngradeTime")
    def attr_last_downgrade_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LastDowngradeTime: The date when the last downgrade operation was performed on the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLastDowngradeTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        LockMode: The lock status of the instance. Valid values:
        Unlock: The instance is not locked.
        ManualLock: The instance is manually locked.
        LockByExpiration: The instance is automatically locked due to instance expiration.
        LockByRestoration: The instance is automatically locked before the instance is rolled back.
        LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
        Released: The instance is released.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLogBackupRetentionPeriod")
    def attr_log_backup_retention_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LogBackupRetentionPeriod: The number of days for which log backups are retained. Valid values: 7 to 730.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogBackupRetentionPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainEndTime")
    def attr_maintain_end_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaintainEndTime: The end time of the maintenance window. The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainEndTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainStartTime")
    def attr_maintain_start_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaintainStartTime: The start time of the maintenance window. The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMongosList")
    def attr_mongos_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MongosList: The information of the mongos nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMongosList"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkAddresses")
    def attr_network_addresses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        NetworkType: The network type of the instance. Valid values:
        Classic: classic network
        VPC: VPC
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrParameters")
    def attr_parameters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Parameters: The settings of the parameters that have taken effect.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The billing method of the Database. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupPeriod")
    def attr_preferred_backup_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        PreferredBackupPeriod: The day of a week on which to back up data. Valid values:
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
        Sunday
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPreferredBackupPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrPreferredBackupTime")
    def attr_preferred_backup_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PreferredBackupTime: The time range during which the backup was created. The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPreferredBackupTime"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolType")
    def attr_protocol_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ProtocolType: The access protocol type of the instance. Valid values:
        mongodb
        dynamodb
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocolType"))

    @builtins.property
    @jsii.member(jsii_name="attrReadonlyReplicas")
    def attr_readonly_replicas(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReadonlyReplicas: The number of read-only nodes in the shard node. Valid values: 0 to 5. The value must be an integer.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReadonlyReplicas"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicaSetsConnections")
    def attr_replica_sets_connections(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicaSetsConnections: ReplicaSets Connections.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicaSetsConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationFactor")
    def attr_replication_factor(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicationFactor: The number of nodes in the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicationFactor"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group to which the instance belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecondaryZoneId")
    def attr_secondary_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecondaryZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroupId: The ID of the ECS security group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpList")
    def attr_security_ip_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIpList: The name of the IP whitelist.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpList"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIps: The IP addresses in the default whitelist.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIps"))

    @builtins.property
    @jsii.member(jsii_name="attrShardList")
    def attr_shard_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ShardList: The information of the shard nodes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrShardList"))

    @builtins.property
    @jsii.member(jsii_name="attrSnapshotBackupType")
    def attr_snapshot_backup_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        SnapshotBackupType: The snapshot backup type. Valid values:
        Flash: single-digit second backup
        Standard (default): standard backup
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSnapshotBackupType"))

    @builtins.property
    @jsii.member(jsii_name="attrSslExpiredTime")
    def attr_ssl_expired_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SslExpiredTime: The time when the SSL certificate expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSslExpiredTime"))

    @builtins.property
    @jsii.member(jsii_name="attrSslStatus")
    def attr_ssl_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        SslStatus: The status of the SSL feature. Valid values:
        Open: The SSL feature is enabled.
        Closed: The SSL feature is disabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSslStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageEngine")
    def attr_storage_engine(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageEngine: The Storage Engine Of The Instance Type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The details of the instance tags.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTdeStatus")
    def attr_tde_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        TdeStatus: The TDE status. Valid values:
        enabled
        disabled
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTdeStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcAuthMode")
    def attr_vpc_auth_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        VpcAuthMode: Indicates whether password-free access within the VPC is enabled. Valid values:
        Open: Password-free access within the VPC is enabled.
        Close: Password-free access within the VPC is disabled, and you must use a password for access.
        NotSupport: Password-free access within the VPC is not supported.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcAuthMode"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The VPC ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The vSwitch ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: The ID of the zone in which the instance resides.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bfa2f5f32f8a7672f071cb5d337729cf58d182cfcc567789af8c3ef800590fbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the mongos
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9fd5a7f500a26c924f97cff79afb8e58cd9d174f75e36d1fcd95ca6a9cc1eb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ca8a71bf8f2272813a44223c17266dfe976cbeac35c3599355d1c49bc64b5f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


class RosInstanceClasses(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.RosInstanceClasses",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::MONGODB::InstanceClasses``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``InstanceClasses`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instanceclasses
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceClassesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__557943b2ae71a7a483e141328e4d202c46150fca1d56213603b303993859fcb7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc3057d047ef37e35473c86cc385ef8951cfb49f984d18d9222a5e4e3fa8eb8b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClasses")
    def attr_instance_classes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceClasses: The list of The instance classes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClasses"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClassIds")
    def attr_instance_class_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceClassIds: The list of The instance class Ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClassIds"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fa2673123eda7a278146c5de8b31a74336c7223db8372e063abd3843367012c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dbType")
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbType: The database engine type of the instance.
        normal: replica set instance
        sharding: sharded cluster instance
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbType"))

    @db_type.setter
    def db_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4c032538e17c41c60b8eaf51b14c8b2aba3a2253bda1112dcf3a85bd726702b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70fc6967a76ed47e465d6f3df138669158fdf511416c7c4b475df8e8954e622a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ffaca6d67c6314d1302d3ef1e47ec0029e4a33df2a7d5677703830bcd333da6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77f2ecf1f8aa1c3b3509c90f2cb9a4c0a14ebae9586b26a700049fe311fa1ef5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b82a510470f161f848b573355cac87b195f91409d3c79df7afc92623a2569ecc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.RosInstanceClassesProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_type": "dbType",
        "instance_charge_type": "instanceChargeType",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
        "zone_id": "zoneId",
    },
)
class RosInstanceClassesProps:
    def __init__(
        self,
        *,
        db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstanceClasses``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instanceclasses

        :param db_type: 
        :param instance_charge_type: 
        :param refresh_options: 
        :param resource_group_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfa148beffb52e6776358468d867529fdcac2b6dc3ec8fcc0b956cebfe6db1ab)
            check_type(argname="argument db_type", value=db_type, expected_type=type_hints["db_type"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_type is not None:
            self._values["db_type"] = db_type
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbType: The database engine type of the instance.
        normal: replica set instance
        sharding: sharded cluster instance
        '''
        result = self._values.get("db_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values:
        PrePaid: subscription
        PostPaid: pay-as-you-go
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceClassesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "refresh_options": "refreshOptions"},
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instance

        :param instance_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96b95439e8bf8ae7dde3e6247e790768986333718e53adab57c097b3b98ae889)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the mongos
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.RosInstances",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::MONGODB::Instances``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instances`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9fc864bcdbfbcdb6827b6010ca9898f7dbda381c98178b1d93595fe28c5db79)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f708a9517ee0234569db8aae269ff7c43308a0a2b6f7418ba7987533be9e4dfb)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceIds: The list of The instance Ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstances")
    def attr_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Instances: The list of The instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstances"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95f7bc40e21dff61623ed062f689f5d53444af6aeeae6010cca7c75ae70442c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the instance. Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf6706aebf305dff377332de3039428b8ce3c8d8a3579746f55146cd92c0e6c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="connectionDomain")
    def connection_domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionDomain"))

    @connection_domain.setter
    def connection_domain(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab5c998ce3892bbf3811786a86b18e6b4be985084085bc256a876f333569b74b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionDomain", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceClass: The instance type. For more information about valid values, see Instance types.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d34bd03c55e08c04bd8ca93272dc22b07f7b2b113d5e42098037c7c6a5ec9551)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceDescription"))

    @db_instance_description.setter
    def db_instance_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5693df14645b90d9c23968cda06867f69b95805cffe9863083661443f1649b33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af2a08ba749f2350024218020162dbe4a13451cbfde8e08742b306e6605f6b98)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStatus")
    def db_instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceStatus"))

    @db_instance_status.setter
    def db_instance_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__815a09fd0646607cd440a249c1a39fd80a8f2c3737763cc9738c9d46817b1130)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStatus", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceType")
    def db_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbInstanceType: The category of the instance. Default value: replicate. Valid values:
        sharding: sharded cluster instance
        replicate: replica set or standalone instance
        Note
        To query the list of sharded cluster instances, you must set the parameter to sharding.
        This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceType"))

    @db_instance_type.setter
    def db_instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__267ed30a0cdaae8bd479099d57c64efc440fe54c2ef2b2d510f8bd3b6460e212)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        engineVersion: The database engine version of the instance. Valid values:
        5.0
        4.4
        4.2
        4.0
        3.4
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fbe91998afb3186e9b5d5078648e6fc216ba392a6f455ce3238e869e1434fe2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="expired")
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        expired: Specifies whether the instance expires. Valid values:
        true: The instance expires.
        false: The instance does not expire.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "expired"))

    @expired.setter
    def expired(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbd415ece4b2c138be0d70683527017ad885c715243b83423c24d71c6c258387)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "expired", value)

    @builtins.property
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkType: The network type of the instance. Valid values:
        Classic
        Vpc
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7ef4644c84d4898d60a96568e9445dad322683bc10c63d01818fd8caf574fe6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkType", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__500fdf53b5c44ff171ecfac127fce3846f30dc812630fdb5f0f0340f2b125a05)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="replicationFactor")
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "replicationFactor"))

    @replication_factor.setter
    def replication_factor(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4495a1bcecd5523b3b0d9834d81e2216151e2e951f2864d5f717d9c36ec86e93)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replicationFactor", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1bff38fd1d626cd78cd2ad5af05695d2f28f839998a97bcc45cc65ea2f7f97b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstances.TagsProperty"]]:
        '''
        :Property: tags: Tags of instance.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstances.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstances.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__786995b97ead900814e3e1458f1326a0935a65b3201648d2a1f59053f5f37c9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC ID of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__013993a805f21a5d31eb4d4e1012af241d3f1330fd44dcf6ae1f43ee0b82b5e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch ID of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39d8c2f0c03224c0f01eb7564e32a97c84711f0e52e1908e44471e2a1ff5c009)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fdf1c330b2d60b42f6696bbffa5d1ed72abc64f26a6a8794d1191627f9402e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.datasource.RosInstances.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__01917631b462fc00e43e68d1be4e653b1af610e837184e868503c5ebaf7aa531)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.datasource.RosInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "charge_type": "chargeType",
        "connection_domain": "connectionDomain",
        "db_instance_class": "dbInstanceClass",
        "db_instance_description": "dbInstanceDescription",
        "db_instance_id": "dbInstanceId",
        "db_instance_status": "dbInstanceStatus",
        "db_instance_type": "dbInstanceType",
        "engine_version": "engineVersion",
        "expired": "expired",
        "network_type": "networkType",
        "refresh_options": "refreshOptions",
        "replication_factor": "replicationFactor",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosInstancesProps:
    def __init__(
        self,
        *,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        expired: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        replication_factor: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instances

        :param charge_type: 
        :param connection_domain: 
        :param db_instance_class: 
        :param db_instance_description: 
        :param db_instance_id: 
        :param db_instance_status: 
        :param db_instance_type: 
        :param engine_version: 
        :param expired: 
        :param network_type: 
        :param refresh_options: 
        :param replication_factor: 
        :param resource_group_id: 
        :param tags: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__feb8946901e2547979a3e7f615ac9988a0e0e6654911987a09d434f8a4b18574)
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument connection_domain", value=connection_domain, expected_type=type_hints["connection_domain"])
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_description", value=db_instance_description, expected_type=type_hints["db_instance_description"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_instance_status", value=db_instance_status, expected_type=type_hints["db_instance_status"])
            check_type(argname="argument db_instance_type", value=db_instance_type, expected_type=type_hints["db_instance_type"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument expired", value=expired, expected_type=type_hints["expired"])
            check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument replication_factor", value=replication_factor, expected_type=type_hints["replication_factor"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if connection_domain is not None:
            self._values["connection_domain"] = connection_domain
        if db_instance_class is not None:
            self._values["db_instance_class"] = db_instance_class
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id
        if db_instance_status is not None:
            self._values["db_instance_status"] = db_instance_status
        if db_instance_type is not None:
            self._values["db_instance_type"] = db_instance_type
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if expired is not None:
            self._values["expired"] = expired
        if network_type is not None:
            self._values["network_type"] = network_type
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if replication_factor is not None:
            self._values["replication_factor"] = replication_factor
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the instance. Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_domain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
        '''
        result = self._values.get("connection_domain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceClass: The instance type. For more information about valid values, see Instance types.
        '''
        result = self._values.get("db_instance_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceDescription: The description of the instance.
        '''
        result = self._values.get("db_instance_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        result = self._values.get("db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
        '''
        result = self._values.get("db_instance_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dbInstanceType: The category of the instance. Default value: replicate. Valid values:
        sharding: sharded cluster instance
        replicate: replica set or standalone instance
        Note
        To query the list of sharded cluster instances, you must set the parameter to sharding.
        This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
        '''
        result = self._values.get("db_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        engineVersion: The database engine version of the instance. Valid values:
        5.0
        4.4
        4.2
        4.0
        3.4
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        expired: Specifies whether the instance expires. Valid values:
        true: The instance expires.
        false: The instance does not expire.
        '''
        result = self._values.get("expired")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkType: The network type of the instance. Valid values:
        Classic
        Vpc
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
        '''
        result = self._values.get("replication_factor")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstances.TagsProperty]]:
        '''
        :Property: tags: Tags of instance.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstances.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC ID of the instance.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch ID of the instance.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IInstance",
    "IInstanceClasses",
    "IInstances",
    "Instance",
    "InstanceClasses",
    "InstanceClassesProps",
    "InstanceProps",
    "Instances",
    "InstancesProps",
    "RosInstance",
    "RosInstanceClasses",
    "RosInstanceClassesProps",
    "RosInstanceProps",
    "RosInstances",
    "RosInstancesProps",
]

publication.publish()

def _typecheckingstub__97ed0e61070789ae974d0a538a41ea324098aa3e8d14e56b2a43a52cd6e0580d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a240898435ca1142e758cc749a109bb666d4c246941a6ad8ec1c7ea1c12ecd8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f740e30e87419dba90d3fa04f559d9a6b262417367a89130a841aa29bb4e085c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b92f982084a73828245a36a214c84eb1e0998c9759e715787503fb0a65cb921d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88e235f27aba92adf65ad6c60c4eb2e230aaf419396fcd0fbfbe5ab0f07f0886(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstanceClassesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a251cb4ec9b679a5f42a6c43f9b173ab4a3d1b14fe7c65cb67914513e21a27d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__308968882e7c6bad88a8695b112b28e052f72888b12ca80559bab44932cbb46c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2baadf928d43a6080b1059942c8418e06531c409ef8aeea5627580a9b91f6401(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36c11cccdcc33f1daaf355250c1a553c95498650b8997bd9020ad236e28642bf(
    *,
    db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d12c4e35100dac3e1faabe99502f233bd39c6db04ac7dbd06580f8aa321b99c(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5477ebd8528ae568dd5b31384ff11e46e6fe6833c0c171a3ad2d9bc7b63b4b49(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[InstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32011ad2b516fb7c227e7590d94f4cd057019c440792e1422cebeb04f9b0e3ef(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1b6549df7ea7471ec356e38f3464863c4f1e7470038cebd78e1d563ab679983(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9b8a181c7b2c1934c8e7e136689bc535b2106762c9baeab55fe0d4367960c04(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c2898a46ebde1869b9dff511f4ec12313ebb0e2150f0d52e88d6b1a1d61ab8b(
    *,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replication_factor: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0df32591e5bb2cdcafdbce20fd7fdceb12f04734a2700bf349aa7789ff45f043(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5b2b844c5a973d2400daa7523b7aa03fcc5b8f5d182c9d078bd15de4a76dce1(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bfa2f5f32f8a7672f071cb5d337729cf58d182cfcc567789af8c3ef800590fbf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9fd5a7f500a26c924f97cff79afb8e58cd9d174f75e36d1fcd95ca6a9cc1eb9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ca8a71bf8f2272813a44223c17266dfe976cbeac35c3599355d1c49bc64b5f9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__557943b2ae71a7a483e141328e4d202c46150fca1d56213603b303993859fcb7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceClassesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc3057d047ef37e35473c86cc385ef8951cfb49f984d18d9222a5e4e3fa8eb8b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fa2673123eda7a278146c5de8b31a74336c7223db8372e063abd3843367012c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4c032538e17c41c60b8eaf51b14c8b2aba3a2253bda1112dcf3a85bd726702b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70fc6967a76ed47e465d6f3df138669158fdf511416c7c4b475df8e8954e622a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ffaca6d67c6314d1302d3ef1e47ec0029e4a33df2a7d5677703830bcd333da6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77f2ecf1f8aa1c3b3509c90f2cb9a4c0a14ebae9586b26a700049fe311fa1ef5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b82a510470f161f848b573355cac87b195f91409d3c79df7afc92623a2569ecc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfa148beffb52e6776358468d867529fdcac2b6dc3ec8fcc0b956cebfe6db1ab(
    *,
    db_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96b95439e8bf8ae7dde3e6247e790768986333718e53adab57c097b3b98ae889(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9fc864bcdbfbcdb6827b6010ca9898f7dbda381c98178b1d93595fe28c5db79(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f708a9517ee0234569db8aae269ff7c43308a0a2b6f7418ba7987533be9e4dfb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95f7bc40e21dff61623ed062f689f5d53444af6aeeae6010cca7c75ae70442c0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf6706aebf305dff377332de3039428b8ce3c8d8a3579746f55146cd92c0e6c6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab5c998ce3892bbf3811786a86b18e6b4be985084085bc256a876f333569b74b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d34bd03c55e08c04bd8ca93272dc22b07f7b2b113d5e42098037c7c6a5ec9551(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5693df14645b90d9c23968cda06867f69b95805cffe9863083661443f1649b33(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af2a08ba749f2350024218020162dbe4a13451cbfde8e08742b306e6605f6b98(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__815a09fd0646607cd440a249c1a39fd80a8f2c3737763cc9738c9d46817b1130(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__267ed30a0cdaae8bd479099d57c64efc440fe54c2ef2b2d510f8bd3b6460e212(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fbe91998afb3186e9b5d5078648e6fc216ba392a6f455ce3238e869e1434fe2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbd415ece4b2c138be0d70683527017ad885c715243b83423c24d71c6c258387(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7ef4644c84d4898d60a96568e9445dad322683bc10c63d01818fd8caf574fe6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__500fdf53b5c44ff171ecfac127fce3846f30dc812630fdb5f0f0340f2b125a05(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4495a1bcecd5523b3b0d9834d81e2216151e2e951f2864d5f717d9c36ec86e93(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1bff38fd1d626cd78cd2ad5af05695d2f28f839998a97bcc45cc65ea2f7f97b5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__786995b97ead900814e3e1458f1326a0935a65b3201648d2a1f59053f5f37c9e(
    value: typing.Optional[typing.List[RosInstances.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__013993a805f21a5d31eb4d4e1012af241d3f1330fd44dcf6ae1f43ee0b82b5e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39d8c2f0c03224c0f01eb7564e32a97c84711f0e52e1908e44471e2a1ff5c009(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fdf1c330b2d60b42f6696bbffa5d1ed72abc64f26a6a8794d1191627f9402e6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01917631b462fc00e43e68d1be4e653b1af610e837184e868503c5ebaf7aa531(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__feb8946901e2547979a3e7f615ac9988a0e0e6654911987a09d434f8a4b18574(
    *,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replication_factor: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
