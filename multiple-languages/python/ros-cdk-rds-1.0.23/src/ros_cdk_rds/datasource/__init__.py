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


class Accounts(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.Accounts",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::RDS::Accounts``, which is used to query the database accounts of an ApsaraDB RDS instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccounts``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccountsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95dd19288d1fb07c44dfcdad60894614316ceb698204df838f1ca1215160d3c2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountNames")
    def attr_account_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountNames: The list of The RDS account names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Accounts: The list of The RDS accounts.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccounts"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae587f27fe256169bde12ab7d5d2bbf18fb4cfa4dcd8d0e5ec258622787381a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ec0104a1d3dec1d2a5e2fced6ed5a77a88f95cd2caace98d7fc27a76ee2ccf1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AccountsProps":
        return typing.cast("AccountsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AccountsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef74f383cda4515999574d16de6a49d31f725312a35dc181fc1b668eeca7ecba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8f7acbe0a0d6b2d926d44ec3708327a36ef0ffb0e4a2f412569dc7ca2c23717)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.AccountsProps",
    jsii_struct_bases=[],
    name_mapping={"db_instance_id": "dbInstanceId", "account_name": "accountName"},
)
class AccountsProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Accounts``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts

        :param db_instance_id: Property dbInstanceId: The ID of the RDS instance.
        :param account_name: Property accountName: The name of the RDS account.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f962f50ad4f9cf1d7d6fd6cd87a930fc0f522df76f98c027c9df725124e1353)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if account_name is not None:
            self._values["account_name"] = account_name

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the RDS instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountName: The name of the RDS account.'''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.DBInstance",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::RDS::DBInstance``, which is used to query an ApsaraDB RDS instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDBInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DBInstanceProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86e45063b6bbb387d4feb8800d889fd47b2dc0ef400b2db4867e70f5b7aa683e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountMaxQuantity")
    def attr_account_max_quantity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountMaxQuantity: The maximum number of accounts that can be created on the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountMaxQuantity"))

    @builtins.property
    @jsii.member(jsii_name="attrAdvancedFeatures")
    def attr_advanced_features(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AdvancedFeatures: The advanced features that are enabled for the instance.

        If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
        LinkedServer
        DistributeTransaction
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAdvancedFeatures"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoUpgradeMinorVersion")
    def attr_auto_upgrade_minor_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance.

        Valid values:
        Auto: automatic update.
        Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoUpgradeMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrAvailabilityValue")
    def attr_availability_value(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AvailabilityValue: The availability status of the instance in percentage.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAvailabilityValue"))

    @builtins.property
    @jsii.member(jsii_name="attrBabelfishConfig")
    def attr_babelfish_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBabelfishConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Category: The RDS edition of the instance.

        Valid values:
        Basic: RDS Basic Edition
        HighAvailability: RDS High-availability Edition
        cluster: RDS Cluster Edition for ApsaraDB RDS for MySQL
        AlwaysOn: RDS Cluster Edition for ApsaraDB RDS for SQL Server
        Finance: RDS Enterprise Edition
        Serverless_basic: RDS Basic Edition for serverless instances
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrCollation")
    def attr_collation(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Collation: The character set collation of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCollation"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionMode")
    def attr_connection_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionMode: The connection mode of the instance.

        Valid values:
        Standard: standard mode
        Safe: database proxy mode
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionMode"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConnectionString: The internal endpoint of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrConsoleVersion")
    def attr_console_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConsoleVersion: The type of the proxy that is used by the instance.

        Valid values:
        1: shared proxy
        2: dedicated proxy
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsoleVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrCreationTime")
    def attr_creation_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreationTime: The creation time.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreationTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentKernelVersion")
    def attr_current_kernel_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CurrentKernelVersion: The minor engine version of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCurrentKernelVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterNodes")
    def attr_db_cluster_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBClusterNodes: The information about the node in the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceClass")
    def attr_db_instance_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceClass: The instance type of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceClassType")
    def attr_db_instance_class_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceClassType: The instance family to which the instance belongs.

        Valid values:
        s: shared instance family
        x: general-purpose instance family
        d: dedicated instance family
        h: dedicated host instance family
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceClassType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceCpu")
    def attr_db_instance_cpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceCPU: The number of CPU cores.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDescription")
    def attr_db_instance_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceDescription: The description of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDiskUsed")
    def attr_db_instance_disk_used(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceDiskUsed: The disk usage of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceDiskUsed"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceId: The instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceMemory")
    def attr_db_instance_memory(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceMemory: The memory capacity of the instance.

        Unit: MB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceNetType")
    def attr_db_instance_net_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceNetType: The type of the network over which the instance is connected.

        Valid values:
        Internet: Internet
        Intranet: internal network
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceNetType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceStatus: The status of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorage")
    def attr_db_instance_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceStorage: The storage capacity of the instance.

        Unit: GB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorageType")
    def attr_db_instance_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceStorageType: The storage type of the instance.

        Valid values:
        local_ssd and ephemeral_ssd: local SSD
        cloud_ssd: standard SSD
        cloud_essd: enhanced SSD (ESSD)
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceType")
    def attr_db_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceType: The type of the instance.

        Valid values:
        Primary: primary instance
        Readonly: read-only instance
        Guard: disaster recovery instance
        Temp: temporary instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbMaxQuantity")
    def attr_db_max_quantity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBMaxQuantity: The maximum number of databases that can be created on the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbMaxQuantity"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DedicatedHostGroupId: The ID of the dedicated cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeletionProtection")
    def attr_deletion_protection(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DeletionProtection: Indicates whether the release protection feature is enabled.

        Valid values:
        true
        false
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeletionProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Engine: The database engine of the instance.

        Valid values:
        MySQL
        PostgreSQL
        SQLServer
        MariaDB
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EngineVersion: The database engine version.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExpireTime: The expiration time.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        Note: Pay-as-you-go instances never expire.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrExtra")
    def attr_extra(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Extra: The extended information of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExtra"))

    @builtins.property
    @jsii.member(jsii_name="attrGeneralGroupName")
    def attr_general_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GeneralGroupName: The name of the dedicated cluster to which the instance belongs.

        This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGeneralGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrGuardDbInstanceId")
    def attr_guard_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGuardDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrIncrementSourceDbInstanceId")
    def attr_increment_source_db_instance_id(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes.

        The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIncrementSourceDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceNetworkType")
    def attr_instance_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceNetworkType: The network type of the instance.

        Valid values:
        Classic
        VPC
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstructionSetArch")
    def attr_instruction_set_arch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstructionSetArch: The architecture type of the instance.

        Valid values:
        x86
        arm
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstructionSetArch"))

    @builtins.property
    @jsii.member(jsii_name="attrIpType")
    def attr_ip_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IPType: The type of the IP address.

        Only IPv4 addresses are supported.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpType"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestKernelVersion")
    def attr_latest_kernel_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LatestKernelVersion: The latest minor engine version that is supported by the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestKernelVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LockMode: The lock mode of the instance.

        Valid values:
        Unlock: The instance is not locked.
        ManualLock: The instance is manually locked.
        LockByExpiration: The instance is automatically locked due to instance expiration.
        LockByRestoration: The instance is automatically locked due to instance restoration.
        LockByDiskQuota: The instance is automatically locked due to exhausted storage space.
        LockReadInstanceByDiskQuota: The instance is a read-only instance and is automatically locked due to exhausted storage.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LockReason: The reason why the instance was locked.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainTime")
    def attr_maintain_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MaintainTime: The maintenance window of the instance.

        The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterInstanceId")
    def attr_master_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MasterInstanceId: The ID of the primary instance.

        Note: If this parameter is not returned, the instance is the primary instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterZone")
    def attr_master_zone(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MasterZone: The zone ID of the primary instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterZone"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxConnections")
    def attr_max_connections(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MaxConnections: The maximum number of concurrent connections.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxIombps")
    def attr_max_iombps(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MaxIOMBPS: The maximum I/O throughput.

        Unit: MB/s.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxIombps"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxIops")
    def attr_max_iops(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MaxIOPS: The maximum number of I/O requests per second.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxIops"))

    @builtins.property
    @jsii.member(jsii_name="attrPayType")
    def attr_pay_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PayType: The billing method of the instance.

        Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPayType"))

    @builtins.property
    @jsii.member(jsii_name="attrPgBouncerEnabled")
    def attr_pg_bouncer_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PGBouncerEnabled: Indicates whether PgBouncer is enabled.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPgBouncerEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Port: The port that is used to connect to the instance over an internal network.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrProxyType")
    def attr_proxy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProxyType: The type of the proxy that is supported by the instance.

        Valid values:
        0: The instance does not support database proxies.
        1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
        2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProxyType"))

    @builtins.property
    @jsii.member(jsii_name="attrReadOnlyDbInstanceIds")
    def attr_read_only_db_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReadOnlyDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrReadonlyInstanceSqlDelayedTime")
    def attr_readonly_instance_sql_delayed_time(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances.

        The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReadonlyInstanceSqlDelayedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The resource group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpList")
    def attr_security_ip_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityIPList: The IP addresses in the IP address whitelist.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpList"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpMode")
    def attr_security_ip_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityIPMode: The whitelist mode of the instance.

        Valid values:
        normal: standard whitelist mode
        safety: enhanced whitelist mode
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpMode"))

    @builtins.property
    @jsii.member(jsii_name="attrServerlessConfig")
    def attr_serverless_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServerlessConfig: The settings of the serverless instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServerlessConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrSlaveZones")
    def attr_slave_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SlaveZones: The information about the zone of the secondary instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlaveZones"))

    @builtins.property
    @jsii.member(jsii_name="attrSuperPermissionMode")
    def attr_super_permission_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.

        Enable
        Disabled
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSuperPermissionMode"))

    @builtins.property
    @jsii.member(jsii_name="attrTempDbInstanceId")
    def attr_temp_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TempDBInstanceId: The ID of the temporary instance that is attached to the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTempDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrTimeZone")
    def attr_time_zone(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TimeZone: The time zone of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTimeZone"))

    @builtins.property
    @jsii.member(jsii_name="attrTips")
    def attr_tips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tips: The information about the exception that is detected on the instance.

        This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTips"))

    @builtins.property
    @jsii.member(jsii_name="attrTipsLevel")
    def attr_tips_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TipsLevel: The severity level of the exception that is detected on the instance.

        This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
        1: The instance is normal.
        2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTipsLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcCloudInstanceId: The VPC ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: The virtual private cloud (VPC) ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: The vSwitch ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneId: The zone ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e432af3c98b4f1b4999ac257d9d3087ac16ecef2513db4f74cfb7ad34f66922)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__958efde3a0b82acacae39e40cd7cb6e58a39784961caacf2a98ff3ae293be7e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DBInstanceProps":
        return typing.cast("DBInstanceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DBInstanceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f247be03da8fe80a529fab0b24c6906ac51993f1e9c378c9bda8af10fa255c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06e1c662b4b5591dcaa59662a4794145fada8d7416c214b509408854bb5afb99)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.DBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={"db_instance_id": "dbInstanceId"},
)
class DBInstanceProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DBInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance

        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ebd5169f1b92ab5dd4a0b5bb511a117722bb263f61c72b02806d12d1b1ef86e8)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceId: The ID of the instance.'''
        result = self._values.get("db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DBInstances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.DBInstances",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::RDS::DBInstances``, which is used to query ApsaraDB RDS instances.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDBInstances``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["DBInstancesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f09ed459dce499ec4d06cf0fec5e00cfb28949ffc462caa87c87f5495e4d3e57)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIds")
    def attr_db_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstanceIds: The list of The RDS Database instance Ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstances")
    def attr_db_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBInstances: The list of The RDS Database instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstances"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74399a8af667287120001b3545d15d02f0027cbcc4e4443874c0431d1373568b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdfb77902b365fa6259707c155c72a6bc2147e3249ef94f1f641d54d7dd0b750)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DBInstancesProps":
        return typing.cast("DBInstancesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DBInstancesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__268ca0a6f6b857b0721d4643ec583170440b007c100e0e8286b426698bb59676)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__731f3c1c8aa571f91a01d09160caa817fa4d12f052e97b8214efdd4b5c726e51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.DBInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "connection_mode": "connectionMode",
        "connection_string": "connectionString",
        "db_instance_class": "dbInstanceClass",
        "db_instance_id": "dbInstanceId",
        "db_instance_status": "dbInstanceStatus",
        "db_instance_type": "dbInstanceType",
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "dedicated_host_id": "dedicatedHostId",
        "engine": "engine",
        "engine_version": "engineVersion",
        "expired": "expired",
        "instance_level": "instanceLevel",
        "instance_network_type": "instanceNetworkType",
        "pay_type": "payType",
        "proxy_id": "proxyId",
        "resource_group_id": "resourceGroupId",
        "search_key": "searchKey",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class DBInstancesProps:
    def __init__(
        self,
        *,
        connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        search_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DBInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances

        :param connection_mode: Property connectionMode: The connection mode of the instance.
        :param connection_string: Property connectionString: The endpoint of the instance.
        :param db_instance_class: Property dbInstanceClass: The instance type of the instances.
        :param db_instance_id: Property dbInstanceId: The ID of the instance.
        :param db_instance_status: Property dbInstanceStatus: The status of the instances.
        :param db_instance_type: Property dbInstanceType: The role of the instances.
        :param dedicated_host_group_id: Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
        :param dedicated_host_id: Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
        :param engine: Property engine: The database engine that is run by the instances.
        :param engine_version: Property engineVersion: The version of the database engine that is run by the instances.
        :param expired: Property expired: Specifies whether the instances have expired.
        :param instance_level: Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
        :param instance_network_type: Property instanceNetworkType: The network type of the instances.
        :param pay_type: Property payType: The billing method of the instances.
        :param proxy_id: Property proxyId: The ID of the proxy mode.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the instances belong.
        :param search_key: Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
        :param v_switch_id: Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
        :param zone_id: Property zoneId: The ID of the zone to which the instances belong.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1d3e543666aca4b1c633978aec2f1fb5d2fc096ac0c13b6aa201864cb7e6490)
            check_type(argname="argument connection_mode", value=connection_mode, expected_type=type_hints["connection_mode"])
            check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_instance_status", value=db_instance_status, expected_type=type_hints["db_instance_status"])
            check_type(argname="argument db_instance_type", value=db_instance_type, expected_type=type_hints["db_instance_type"])
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument dedicated_host_id", value=dedicated_host_id, expected_type=type_hints["dedicated_host_id"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument expired", value=expired, expected_type=type_hints["expired"])
            check_type(argname="argument instance_level", value=instance_level, expected_type=type_hints["instance_level"])
            check_type(argname="argument instance_network_type", value=instance_network_type, expected_type=type_hints["instance_network_type"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument proxy_id", value=proxy_id, expected_type=type_hints["proxy_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument search_key", value=search_key, expected_type=type_hints["search_key"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if connection_mode is not None:
            self._values["connection_mode"] = connection_mode
        if connection_string is not None:
            self._values["connection_string"] = connection_string
        if db_instance_class is not None:
            self._values["db_instance_class"] = db_instance_class
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id
        if db_instance_status is not None:
            self._values["db_instance_status"] = db_instance_status
        if db_instance_type is not None:
            self._values["db_instance_type"] = db_instance_type
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if dedicated_host_id is not None:
            self._values["dedicated_host_id"] = dedicated_host_id
        if engine is not None:
            self._values["engine"] = engine
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if expired is not None:
            self._values["expired"] = expired
        if instance_level is not None:
            self._values["instance_level"] = instance_level
        if instance_network_type is not None:
            self._values["instance_network_type"] = instance_network_type
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if proxy_id is not None:
            self._values["proxy_id"] = proxy_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if search_key is not None:
            self._values["search_key"] = search_key
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionMode: The connection mode of the instance.'''
        result = self._values.get("connection_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionString: The endpoint of the instance.'''
        result = self._values.get("connection_string")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceClass: The instance type of the instances.'''
        result = self._values.get("db_instance_class")
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
        '''Property dbInstanceStatus: The status of the instances.'''
        result = self._values.get("db_instance_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbInstanceType: The role of the instances.'''
        result = self._values.get("db_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.'''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.'''
        result = self._values.get("dedicated_host_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engine: The database engine that is run by the instances.'''
        result = self._values.get("engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engineVersion: The version of the database engine that is run by the instances.'''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property expired: Specifies whether the instances have expired.'''
        result = self._values.get("expired")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.'''
        result = self._values.get("instance_level")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceNetworkType: The network type of the instances.'''
        result = self._values.get("instance_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: The billing method of the instances.'''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property proxyId: The ID of the proxy mode.'''
        result = self._values.get("proxy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the instances belong.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def search_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.'''
        result = self._values.get("search_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The ID of the zone to which the instances belong.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DBInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Databases(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.Databases",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::RDS::Databases``, which is used to query the details of databases in an ApsaraDB RDS instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDatabases``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DatabasesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__095546846bb6c1d643ffe24a42650823ccb30dade7d00fc1121edcef2cd54b60)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDatabases")
    def attr_databases(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Databases: The list of The RDS databases.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatabases"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNames")
    def attr_db_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DBNames: The list of The RDS database names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNames"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__193a590842d68717a3c2ce891b71e361f9933cad552e93ae1f9be3b2945d5efb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89f29d38d6461abfc51a771cf79084bbed57558bd461cdcddfb8cb08d86a1be4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DatabasesProps":
        return typing.cast("DatabasesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DatabasesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a656a6d97cebe5ffc118f2450b756abfa981d73b046ee1ccab4092179a010374)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65ddb95676f94e2ed5e1bed37d651a3547973681422b82fccfbbd9e90fccddce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.DatabasesProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "db_name": "dbName",
        "db_status": "dbStatus",
    },
)
class DatabasesProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Databases``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases

        :param db_instance_id: Property dbInstanceId: The ID of the RDS instance.
        :param db_name: Property dbName: The names of the databases whose information you want to query.
        :param db_status: Property dbStatus: The status of the databases whose information you want to query.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c0ed223ef2a3b3a2ee99a78bf47098de3a785588cb6b0a6c713df0af35163bc)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument db_status", value=db_status, expected_type=type_hints["db_status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if db_name is not None:
            self._values["db_name"] = db_name
        if db_status is not None:
            self._values["db_status"] = db_status

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbInstanceId: The ID of the RDS instance.'''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbName: The names of the databases whose information you want to query.'''
        result = self._values.get("db_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dbStatus: The status of the databases whose information you want to query.'''
        result = self._values.get("db_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DatabasesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccounts(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosAccounts",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::RDS::Accounts``, which is used to query the database accounts of an ApsaraDB RDS instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Accounts`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6403a60a492995dae9e4c1213db98dc4125f9a185d74fc62e5de394874aee3f3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6d68198122df3f2d8393cd194889e9059c0829c6cd929f193c88bc500bb42028)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountNames")
    def attr_account_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountNames: The list of The RDS account names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAccounts")
    def attr_accounts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Accounts: The list of The RDS accounts.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccounts"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the RDS instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0592db2389438f88a69781fa2cbeb169837bd6e10e406281e17546e932ff0619)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4097358e6b8e592193f73aa14bbd663b9c1cb1f7f94216b4085277170f171f0c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="accountName")
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountName: The name of the RDS account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountName"))

    @account_name.setter
    def account_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c56e06ae040832706ea6022b4961dce08de2255016096619cd6f06738921ce52)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosAccountsProps",
    jsii_struct_bases=[],
    name_mapping={"db_instance_id": "dbInstanceId", "account_name": "accountName"},
)
class RosAccountsProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAccounts``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts

        :param db_instance_id: 
        :param account_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__011008303007edb6dfde9f809cd3a812c87c605e379629843ab22fea0a4cef44)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument account_name", value=account_name, expected_type=type_hints["account_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if account_name is not None:
            self._values["account_name"] = account_name

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the RDS instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountName: The name of the RDS account.
        '''
        result = self._values.get("account_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosDBInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::RDS::DBInstance``, which is used to query an ApsaraDB RDS instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DBInstance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4c64589e8979a05cb457026c40a5e0f23242b2b07da36c1e78ea6debc0a07b0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f017027487f483c7ad07292962ad455fb2e916f505cf28815638e52e3eacc138)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountMaxQuantity")
    def attr_account_max_quantity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountMaxQuantity: The maximum number of accounts that can be created on the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountMaxQuantity"))

    @builtins.property
    @jsii.member(jsii_name="attrAdvancedFeatures")
    def attr_advanced_features(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        AdvancedFeatures: The advanced features that are enabled for the instance. If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
        LinkedServer
        DistributeTransaction
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAdvancedFeatures"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoUpgradeMinorVersion")
    def attr_auto_upgrade_minor_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance. Valid values:
        Auto: automatic update.
        Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoUpgradeMinorVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrAvailabilityValue")
    def attr_availability_value(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AvailabilityValue: The availability status of the instance in percentage.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAvailabilityValue"))

    @builtins.property
    @jsii.member(jsii_name="attrBabelfishConfig")
    def attr_babelfish_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBabelfishConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        Category: The RDS edition of the instance. Valid values:
        Basic: RDS Basic Edition
        HighAvailability: RDS High-availability Edition
        cluster: RDS Cluster Edition for ApsaraDB RDS for MySQL
        AlwaysOn: RDS Cluster Edition for ApsaraDB RDS for SQL Server
        Finance: RDS Enterprise Edition
        Serverless_basic: RDS Basic Edition for serverless instances
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrCollation")
    def attr_collation(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Collation: The character set collation of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCollation"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionMode")
    def attr_connection_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ConnectionMode: The connection mode of the instance. Valid values:
        Standard: standard mode
        Safe: database proxy mode
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionMode"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionString")
    def attr_connection_string(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionString: The internal endpoint of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionString"))

    @builtins.property
    @jsii.member(jsii_name="attrConsoleVersion")
    def attr_console_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ConsoleVersion: The type of the proxy that is used by the instance. Valid values:
        1: shared proxy
        2: dedicated proxy
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsoleVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrCreationTime")
    def attr_creation_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreationTime: The creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreationTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCurrentKernelVersion")
    def attr_current_kernel_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CurrentKernelVersion: The minor engine version of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCurrentKernelVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrDbClusterNodes")
    def attr_db_cluster_nodes(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBClusterNodes: The information about the node in the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbClusterNodes"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceClass")
    def attr_db_instance_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceClass: The instance type of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceClassType")
    def attr_db_instance_class_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        DBInstanceClassType: The instance family to which the instance belongs. Valid values:
        s: shared instance family
        x: general-purpose instance family
        d: dedicated instance family
        h: dedicated host instance family
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceClassType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceCpu")
    def attr_db_instance_cpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceCPU: The number of CPU cores.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDescription")
    def attr_db_instance_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceDescription: The description of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceDiskUsed")
    def attr_db_instance_disk_used(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceDiskUsed: The disk usage of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceDiskUsed"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceId: The instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceMemory")
    def attr_db_instance_memory(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceMemory: The memory capacity of the instance. Unit: MB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceMemory"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceNetType")
    def attr_db_instance_net_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        DBInstanceNetType: The type of the network over which the instance is connected. Valid values:
        Internet: Internet
        Intranet: internal network
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceNetType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceStatus: The status of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorage")
    def attr_db_instance_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceStorage: The storage capacity of the instance. Unit: GB.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceStorageType")
    def attr_db_instance_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        DBInstanceStorageType: The storage type of the instance. Valid values:
        local_ssd and ephemeral_ssd: local SSD
        cloud_ssd: standard SSD
        cloud_essd: enhanced SSD (ESSD)
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceType")
    def attr_db_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        DBInstanceType: The type of the instance. Valid values:
        Primary: primary instance
        Readonly: read-only instance
        Guard: disaster recovery instance
        Temp: temporary instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrDbMaxQuantity")
    def attr_db_max_quantity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBMaxQuantity: The maximum number of databases that can be created on the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbMaxQuantity"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostGroupId: The ID of the dedicated cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeletionProtection")
    def attr_deletion_protection(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        DeletionProtection: Indicates whether the release protection feature is enabled. Valid values:
        true
        false
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeletionProtection"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        Engine: The database engine of the instance. Valid values:
        MySQL
        PostgreSQL
        SQLServer
        MariaDB
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrEngineVersion")
    def attr_engine_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EngineVersion: The database engine version.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngineVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrExpireTime")
    def attr_expire_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ExpireTime: The expiration time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        Note: Pay-as-you-go instances never expire.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpireTime"))

    @builtins.property
    @jsii.member(jsii_name="attrExtra")
    def attr_extra(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Extra: The extended information of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExtra"))

    @builtins.property
    @jsii.member(jsii_name="attrGeneralGroupName")
    def attr_general_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GeneralGroupName: The name of the dedicated cluster to which the instance belongs. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGeneralGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrGuardDbInstanceId")
    def attr_guard_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGuardDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrIncrementSourceDbInstanceId")
    def attr_increment_source_db_instance_id(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes. The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIncrementSourceDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceNetworkType")
    def attr_instance_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        InstanceNetworkType: The network type of the instance. Valid values:
        Classic
        VPC
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstructionSetArch")
    def attr_instruction_set_arch(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        InstructionSetArch: The architecture type of the instance. Valid values:
        x86
        arm
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstructionSetArch"))

    @builtins.property
    @jsii.member(jsii_name="attrIpType")
    def attr_ip_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IPType: The type of the IP address. Only IPv4 addresses are supported.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpType"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestKernelVersion")
    def attr_latest_kernel_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LatestKernelVersion: The latest minor engine version that is supported by the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestKernelVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrLockMode")
    def attr_lock_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        LockMode: The lock mode of the instance. Valid values:
        Unlock: The instance is not locked.
        ManualLock: The instance is manually locked.
        LockByExpiration: The instance is automatically locked due to instance expiration.
        LockByRestoration: The instance is automatically locked due to instance restoration.
        LockByDiskQuota: The instance is automatically locked due to exhausted storage space.
        LockReadInstanceByDiskQuota: The instance is a read-only instance and is automatically locked due to exhausted storage.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockMode"))

    @builtins.property
    @jsii.member(jsii_name="attrLockReason")
    def attr_lock_reason(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LockReason: The reason why the instance was locked.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLockReason"))

    @builtins.property
    @jsii.member(jsii_name="attrMaintainTime")
    def attr_maintain_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaintainTime: The maintenance window of the instance. The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaintainTime"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterInstanceId")
    def attr_master_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        MasterInstanceId: The ID of the primary instance.
        Note: If this parameter is not returned, the instance is the primary instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterZone")
    def attr_master_zone(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterZone: The zone ID of the primary instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterZone"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxConnections")
    def attr_max_connections(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaxConnections: The maximum number of concurrent connections.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxConnections"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxIombps")
    def attr_max_iombps(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaxIOMBPS: The maximum I/O throughput. Unit: MB/s.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxIombps"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxIops")
    def attr_max_iops(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaxIOPS: The maximum number of I/O requests per second.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxIops"))

    @builtins.property
    @jsii.member(jsii_name="attrPayType")
    def attr_pay_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        PayType: The billing method of the instance. Valid values:
        Postpaid: pay-as-you-go
        Prepaid: subscription
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPayType"))

    @builtins.property
    @jsii.member(jsii_name="attrPgBouncerEnabled")
    def attr_pg_bouncer_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PGBouncerEnabled: Indicates whether PgBouncer is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPgBouncerEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Port: The port that is used to connect to the instance over an internal network.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPort"))

    @builtins.property
    @jsii.member(jsii_name="attrProxyType")
    def attr_proxy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ProxyType: The type of the proxy that is supported by the instance. Valid values:
        0: The instance does not support database proxies.
        1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
        2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProxyType"))

    @builtins.property
    @jsii.member(jsii_name="attrReadOnlyDbInstanceIds")
    def attr_read_only_db_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReadOnlyDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrReadonlyInstanceSqlDelayedTime")
    def attr_readonly_instance_sql_delayed_time(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances. The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReadonlyInstanceSqlDelayedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The resource group ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpList")
    def attr_security_ip_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityIPList: The IP addresses in the IP address whitelist.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpList"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityIpMode")
    def attr_security_ip_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        SecurityIPMode: The whitelist mode of the instance. Valid values:
        normal: standard whitelist mode
        safety: enhanced whitelist mode
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityIpMode"))

    @builtins.property
    @jsii.member(jsii_name="attrServerlessConfig")
    def attr_serverless_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServerlessConfig: The settings of the serverless instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServerlessConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrSlaveZones")
    def attr_slave_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SlaveZones: The information about the zone of the secondary instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlaveZones"))

    @builtins.property
    @jsii.member(jsii_name="attrSuperPermissionMode")
    def attr_super_permission_mode(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.
        Enable
        Disabled
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSuperPermissionMode"))

    @builtins.property
    @jsii.member(jsii_name="attrTempDbInstanceId")
    def attr_temp_db_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TempDBInstanceId: The ID of the temporary instance that is attached to the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTempDbInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrTimeZone")
    def attr_time_zone(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TimeZone: The time zone of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTimeZone"))

    @builtins.property
    @jsii.member(jsii_name="attrTips")
    def attr_tips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tips: The information about the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTips"))

    @builtins.property
    @jsii.member(jsii_name="attrTipsLevel")
    def attr_tips_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        TipsLevel: The severity level of the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
        1: The instance is normal.
        2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTipsLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcCloudInstanceId")
    def attr_vpc_cloud_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcCloudInstanceId: The VPC ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcCloudInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The virtual private cloud (VPC) ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The vSwitch ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: The zone ID.
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
            type_hints = typing.get_type_hints(_typecheckingstub__ce42e66ddafdffac211b31f7d33f495bb1a6ec0471bc6f01d2b1d1c291369afa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__7ef4387a1a77b3fbd2a06c1f0636c779349aa4a40e8970ec03aa45dac69d3806)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosDBInstanceProps",
    jsii_struct_bases=[],
    name_mapping={"db_instance_id": "dbInstanceId"},
)
class RosDBInstanceProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDBInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance

        :param db_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efde6dc51037e9526cf0fbe4eecb972e9232f3d8fffe81fb67e7df7414230ab2)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceId: The ID of the instance.
        '''
        result = self._values.get("db_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDBInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosDBInstances",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::RDS::DBInstances``, which is used to query ApsaraDB RDS instances.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DBInstances`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDBInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e022a870a09e1ed87c61bec5400b1612ae4d7fae0de68f51a2a463c4ce3a5d91)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3097560f91b88ec03a69e187429a221dbb89af49bd866b4a362b01eb9184e1f0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstanceIds")
    def attr_db_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstanceIds: The list of The RDS Database instance Ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDbInstances")
    def attr_db_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBInstances: The list of The RDS Database instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbInstances"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5367f25e2aedbb0336fac2182ed4156421619539c3035bc1fafad880d43949a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="connectionMode")
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionMode: The connection mode of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionMode"))

    @connection_mode.setter
    def connection_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d079027b78a89496f9f89fc0b4b27c33c6f89208a6c3140492631c682aa951e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionMode", value)

    @builtins.property
    @jsii.member(jsii_name="connectionString")
    def connection_string(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionString: The endpoint of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionString"))

    @connection_string.setter
    def connection_string(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a844f993d2df02648e26aa83acc3537f0f05ab7aaeafdad8b81095b2175c9c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionString", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceClass: The instance type of the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceClass"))

    @db_instance_class.setter
    def db_instance_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cdab30874814eb1eb740b3c336218a3e01d9c5d0333837dd74e6db833f4e2390)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceClass", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__f44e46dd912588b9b2994241da8f8ccd385c508167cee51c70542752e366fdeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceStatus")
    def db_instance_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceStatus: The status of the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceStatus"))

    @db_instance_status.setter
    def db_instance_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d501744eefd3cfa3b59e5f4dd9dacd91962d79b532139effdfd3fa4ba17ce9be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceStatus", value)

    @builtins.property
    @jsii.member(jsii_name="dbInstanceType")
    def db_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceType: The role of the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbInstanceType"))

    @db_instance_type.setter
    def db_instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b4b52d9cae4ab68ea90ab5670f188f9829cb8eab344cdb123c24753f8b10541)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05a74a6411efe579b26c20a4ab9589ebc0d792d78e289d9a2f9a7194d8e699cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostId")
    def dedicated_host_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostId"))

    @dedicated_host_id.setter
    def dedicated_host_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b911b3dd52dc6033892ab71cec030d2893259be3b0b4060260fd66f7e0022c8d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostId", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engine: The database engine that is run by the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ae2577191f1791fea08f86432febe88ea8bba879c405e260ac5f6d9da8d598e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: The version of the database engine that is run by the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dcf468fcc929e462dde7cd30faafbab52d0e7ce648a44f4aab390603b8cb0405)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="expired")
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: expired: Specifies whether the instances have expired.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "expired"))

    @expired.setter
    def expired(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23753d99e221e47a1ae8d2b39dc27f09359d99c7ac0ef25c340299d1deeb5d4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "expired", value)

    @builtins.property
    @jsii.member(jsii_name="instanceLevel")
    def instance_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceLevel"))

    @instance_level.setter
    def instance_level(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f60c462b246f9672e3416089378248998fdb2fa7740f1a7f513ff3f93b48ad6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceLevel", value)

    @builtins.property
    @jsii.member(jsii_name="instanceNetworkType")
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceNetworkType: The network type of the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceNetworkType"))

    @instance_network_type.setter
    def instance_network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a635dbb58762f4c0470968cb1d7a5481a4ff69c091f1405a92b1a20ff84c52c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceNetworkType", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: The billing method of the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d063a2a0198eb06eafaa0464b7f5429c15cac84369c18f77a009702844f25585)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="proxyId")
    def proxy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyId: The ID of the proxy mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "proxyId"))

    @proxy_id.setter
    def proxy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6426bc878ad32cb5f153252be3da7c9e9c95cae8a2ecdaf02cc01a9fb3bfd00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the instances belong.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c71900502692688cb2547a2de956ca6c75c4a55ec0522152ac10d74405c4a228)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="searchKey")
    def search_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: searchKey: The keywords that are contained in the IDs or descriptions of the instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "searchKey"))

    @search_key.setter
    def search_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ceed69a17dbc386dac268fb1bb940b5437c5489dd6837c90d787044bc245150)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "searchKey", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1465ed6f4cb30b1c985df03b04dd841d46dcab09f98987f0a04d861cff692b1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49ce89cb9bc52dd45b6db182350492de7a5b5e032c887618280cc5f01a2d362e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The ID of the zone to which the instances belong
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64ace5e86c8ed91232add743877e39979809fc6b1e3e5e7ee14302a8c63f12e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosDBInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "connection_mode": "connectionMode",
        "connection_string": "connectionString",
        "db_instance_class": "dbInstanceClass",
        "db_instance_id": "dbInstanceId",
        "db_instance_status": "dbInstanceStatus",
        "db_instance_type": "dbInstanceType",
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "dedicated_host_id": "dedicatedHostId",
        "engine": "engine",
        "engine_version": "engineVersion",
        "expired": "expired",
        "instance_level": "instanceLevel",
        "instance_network_type": "instanceNetworkType",
        "pay_type": "payType",
        "proxy_id": "proxyId",
        "resource_group_id": "resourceGroupId",
        "search_key": "searchKey",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosDBInstancesProps:
    def __init__(
        self,
        *,
        connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_string: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        search_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDBInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances

        :param connection_mode: 
        :param connection_string: 
        :param db_instance_class: 
        :param db_instance_id: 
        :param db_instance_status: 
        :param db_instance_type: 
        :param dedicated_host_group_id: 
        :param dedicated_host_id: 
        :param engine: 
        :param engine_version: 
        :param expired: 
        :param instance_level: 
        :param instance_network_type: 
        :param pay_type: 
        :param proxy_id: 
        :param resource_group_id: 
        :param search_key: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3d6887a5625d0c58c5f817ea828aa5960a39d7d4249dc962ec387e8358d6928)
            check_type(argname="argument connection_mode", value=connection_mode, expected_type=type_hints["connection_mode"])
            check_type(argname="argument connection_string", value=connection_string, expected_type=type_hints["connection_string"])
            check_type(argname="argument db_instance_class", value=db_instance_class, expected_type=type_hints["db_instance_class"])
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_instance_status", value=db_instance_status, expected_type=type_hints["db_instance_status"])
            check_type(argname="argument db_instance_type", value=db_instance_type, expected_type=type_hints["db_instance_type"])
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument dedicated_host_id", value=dedicated_host_id, expected_type=type_hints["dedicated_host_id"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument expired", value=expired, expected_type=type_hints["expired"])
            check_type(argname="argument instance_level", value=instance_level, expected_type=type_hints["instance_level"])
            check_type(argname="argument instance_network_type", value=instance_network_type, expected_type=type_hints["instance_network_type"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument proxy_id", value=proxy_id, expected_type=type_hints["proxy_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument search_key", value=search_key, expected_type=type_hints["search_key"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if connection_mode is not None:
            self._values["connection_mode"] = connection_mode
        if connection_string is not None:
            self._values["connection_string"] = connection_string
        if db_instance_class is not None:
            self._values["db_instance_class"] = db_instance_class
        if db_instance_id is not None:
            self._values["db_instance_id"] = db_instance_id
        if db_instance_status is not None:
            self._values["db_instance_status"] = db_instance_status
        if db_instance_type is not None:
            self._values["db_instance_type"] = db_instance_type
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if dedicated_host_id is not None:
            self._values["dedicated_host_id"] = dedicated_host_id
        if engine is not None:
            self._values["engine"] = engine
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if expired is not None:
            self._values["expired"] = expired
        if instance_level is not None:
            self._values["instance_level"] = instance_level
        if instance_network_type is not None:
            self._values["instance_network_type"] = instance_network_type
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if proxy_id is not None:
            self._values["proxy_id"] = proxy_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if search_key is not None:
            self._values["search_key"] = search_key
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def connection_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionMode: The connection mode of the instance.
        '''
        result = self._values.get("connection_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_string(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionString: The endpoint of the instance.
        '''
        result = self._values.get("connection_string")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceClass: The instance type of the instances.
        '''
        result = self._values.get("db_instance_class")
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
        :Property: dbInstanceStatus: The status of the instances.
        '''
        result = self._values.get("db_instance_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbInstanceType: The role of the instances.
        '''
        result = self._values.get("db_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
        '''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
        '''
        result = self._values.get("dedicated_host_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engine: The database engine that is run by the instances.
        '''
        result = self._values.get("engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: The version of the database engine that is run by the instances.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def expired(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: expired: Specifies whether the instances have expired.
        '''
        result = self._values.get("expired")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_level(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
        '''
        result = self._values.get("instance_level")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceNetworkType: The network type of the instances.
        '''
        result = self._values.get("instance_network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: The billing method of the instances.
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyId: The ID of the proxy mode.
        '''
        result = self._values.get("proxy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the instances belong.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def search_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: searchKey: The keywords that are contained in the IDs or descriptions of the instances.
        '''
        result = self._values.get("search_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The ID of the zone to which the instances belong
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDBInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDatabases(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosDatabases",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::RDS::Databases``, which is used to query the details of databases in an ApsaraDB RDS instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Databases`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDatabasesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab3a11e1eb36bb6b73465acd4d7bcf4a9cb487b3f783b5753ae92b08867386b5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__191dd8c75186d709b2929d8bef4132040683c7c03edffed40f66a05c3cfdb944)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDatabases")
    def attr_databases(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Databases: The list of The RDS databases.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatabases"))

    @builtins.property
    @jsii.member(jsii_name="attrDbNames")
    def attr_db_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DBNames: The list of The RDS database names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbNames"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbInstanceId")
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the RDS instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbInstanceId"))

    @db_instance_id.setter
    def db_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5965645b934aa2aadd4bd51b27c68859642268b80e444e8b0d3d83400302ae6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b557aaf4a7d0cabb2134aea0ea7e350805bbcd64fa190b176d8b599aefeb82db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dbName")
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbName: The names of the databases whose information you want to query.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbName"))

    @db_name.setter
    def db_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3453762179e68dabce6bac907149c280996a25f0aedf281e1da065b5ebf2d1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbName", value)

    @builtins.property
    @jsii.member(jsii_name="dbStatus")
    def db_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbStatus: The status of the databases whose information you want to query.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dbStatus"))

    @db_status.setter
    def db_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f80bbcec45a7b636c227e35a70d39845543c64fd1cc209026206619447e0d9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbStatus", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosDatabasesProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_id": "dbInstanceId",
        "db_name": "dbName",
        "db_status": "dbStatus",
    },
)
class RosDatabasesProps:
    def __init__(
        self,
        *,
        db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        db_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDatabases``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases

        :param db_instance_id: 
        :param db_name: 
        :param db_status: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e711614d7229c1a4d4a6bfdeb6a241fe84fda06a4c3e078b94e141814d36d926)
            check_type(argname="argument db_instance_id", value=db_instance_id, expected_type=type_hints["db_instance_id"])
            check_type(argname="argument db_name", value=db_name, expected_type=type_hints["db_name"])
            check_type(argname="argument db_status", value=db_status, expected_type=type_hints["db_status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_instance_id": db_instance_id,
        }
        if db_name is not None:
            self._values["db_name"] = db_name
        if db_status is not None:
            self._values["db_status"] = db_status

    @builtins.property
    def db_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbInstanceId: The ID of the RDS instance.
        '''
        result = self._values.get("db_instance_id")
        assert result is not None, "Required property 'db_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbName: The names of the databases whose information you want to query.
        '''
        result = self._values.get("db_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def db_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dbStatus: The status of the databases whose information you want to query.
        '''
        result = self._values.get("db_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDatabasesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosZones(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosZones",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::RDS::Zones``, which is used to query the zones that are available to an ApsaraDB RDS instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Zones`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosZonesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3342df28272fd8a764ed9d9b544a7be62e45230fd21efa8c3fc85d2aeee1a356)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8566c11e86edf3ca6989528188a36af823b298c297b6f5cf21507efade23419e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneIds: The list of zone IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Zones: The list of The Zones.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b42492fe13f9cbeca2e19f2f610ea458634180b2470c839c6628f4ec59203b19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: The database engine that is run by the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a3e87ff17ea4165492955b3bfd0f35197633a0785d39ea1b0aed8f116ca80a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="category")
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The RDS edition of the instance. Valid values:
        Basic: RDS Basic Edition
        HighAvailability: RDS High-availability Edition
        AlwaysOn: RDS Cluster Edition
        Finance: RDS Enterprise Edition
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "category"))

    @category.setter
    def category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b9859c0a33d79e15201ec304796cc41fc96f7f9248d4d2ff57b0735ba5b2dd4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "category", value)

    @builtins.property
    @jsii.member(jsii_name="commodityCode")
    def commodity_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commodityCode: The commodity code of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "commodityCode"))

    @commodity_code.setter
    def commodity_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1276b1353642d142ce307a1399b8bf55389f6a505347acf8eebddc1b8583619)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commodityCode", value)

    @builtins.property
    @jsii.member(jsii_name="dispenseMode")
    def dispense_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:
        1: returns the zones.
        0: does not return the zones.
        Default value: 0.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dispenseMode"))

    @dispense_mode.setter
    def dispense_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10d754e75dc37827f4f3ba67cec91e626497c81c3ce79307d85e2e4cf4ce61f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dispenseMode", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: The version of the database engine that is run by the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea47ef18721d13018258816edac0a907acad1a992644231ca041eeb05cc83f07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneId: The ID of the zone in which the instance is located.
        If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e932e6e81de5b4949983d22014f7c72eefca39a7d3d41af502f426f8b7d96f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.RosZonesProps",
    jsii_struct_bases=[],
    name_mapping={
        "engine": "engine",
        "category": "category",
        "commodity_code": "commodityCode",
        "dispense_mode": "dispenseMode",
        "engine_version": "engineVersion",
        "zone_id": "zoneId",
    },
)
class RosZonesProps:
    def __init__(
        self,
        *,
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        commodity_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dispense_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosZones``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones

        :param engine: 
        :param category: 
        :param commodity_code: 
        :param dispense_mode: 
        :param engine_version: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b9202487b6c0873ba88a5e22c5b60aea7172c1c5561c87fe03d9bd8ab645d51)
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument commodity_code", value=commodity_code, expected_type=type_hints["commodity_code"])
            check_type(argname="argument dispense_mode", value=dispense_mode, expected_type=type_hints["dispense_mode"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "engine": engine,
        }
        if category is not None:
            self._values["category"] = category
        if commodity_code is not None:
            self._values["commodity_code"] = commodity_code
        if dispense_mode is not None:
            self._values["dispense_mode"] = dispense_mode
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: The database engine that is run by the instance.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        category: The RDS edition of the instance. Valid values:
        Basic: RDS Basic Edition
        HighAvailability: RDS High-availability Edition
        AlwaysOn: RDS Cluster Edition
        Finance: RDS Enterprise Edition
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def commodity_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: commodityCode: The commodity code of the instance.
        '''
        result = self._values.get("commodity_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dispense_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:
        1: returns the zones.
        0: does not return the zones.
        Default value: 0.
        '''
        result = self._values.get("dispense_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engineVersion: The version of the database engine that is run by the instance.
        '''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        zoneId: The ID of the zone in which the instance is located.
        If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Zones(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rds.datasource.Zones",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::RDS::Zones``, which is used to query the zones that are available to an ApsaraDB RDS instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosZones``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ZonesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69c3f2d88b2e6826e4c2a107f458c4c4f7e638f8c623d2a96da017fe0c4cca09)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneIds: The list of zone IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Zones: The list of The Zones.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e3a5007bec8b67ac20951752806b8d48e9413995455ad97c37bdbe47dcc00f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf289cd9affd73ae7fdf938080c8f5b88c0a2ca48889f93bac6cd2782b1843a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ZonesProps":
        return typing.cast("ZonesProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ZonesProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e558b4b468d70840a7567491d2d92fc02ad9c400e1c8ff7d4a82f24573392c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da838bd9130c6f46db20039df8999274c29c2e43b988f7ab9824d3214692b40d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rds.datasource.ZonesProps",
    jsii_struct_bases=[],
    name_mapping={
        "engine": "engine",
        "category": "category",
        "commodity_code": "commodityCode",
        "dispense_mode": "dispenseMode",
        "engine_version": "engineVersion",
        "zone_id": "zoneId",
    },
)
class ZonesProps:
    def __init__(
        self,
        *,
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        commodity_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dispense_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Zones``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones

        :param engine: Property engine: The database engine that is run by the instance.
        :param category: Property category: The RDS edition of the instance. Valid values: Basic: RDS Basic Edition HighAvailability: RDS High-availability Edition AlwaysOn: RDS Cluster Edition Finance: RDS Enterprise Edition
        :param commodity_code: Property commodityCode: The commodity code of the instance.
        :param dispense_mode: Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values: 1: returns the zones. 0: does not return the zones. Default value: 0.
        :param engine_version: Property engineVersion: The version of the database engine that is run by the instance.
        :param zone_id: Property zoneId: The ID of the zone in which the instance is located. If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b865630716bb670d189dc901ce5b87039c74ddd66ebcf848734a34a0b31ecec5)
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument category", value=category, expected_type=type_hints["category"])
            check_type(argname="argument commodity_code", value=commodity_code, expected_type=type_hints["commodity_code"])
            check_type(argname="argument dispense_mode", value=dispense_mode, expected_type=type_hints["dispense_mode"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "engine": engine,
        }
        if category is not None:
            self._values["category"] = category
        if commodity_code is not None:
            self._values["commodity_code"] = commodity_code
        if dispense_mode is not None:
            self._values["dispense_mode"] = dispense_mode
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engine: The database engine that is run by the instance.'''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property category: The RDS edition of the instance.

        Valid values:
        Basic: RDS Basic Edition
        HighAvailability: RDS High-availability Edition
        AlwaysOn: RDS Cluster Edition
        Finance: RDS Enterprise Edition
        '''
        result = self._values.get("category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def commodity_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property commodityCode: The commodity code of the instance.'''
        result = self._values.get("commodity_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dispense_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported.

        Valid values:
        1: returns the zones.
        0: does not return the zones.
        Default value: 0.
        '''
        result = self._values.get("dispense_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engineVersion: The version of the database engine that is run by the instance.'''
        result = self._values.get("engine_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The ID of the zone in which the instance is located.

        If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Accounts",
    "AccountsProps",
    "DBInstance",
    "DBInstanceProps",
    "DBInstances",
    "DBInstancesProps",
    "Databases",
    "DatabasesProps",
    "RosAccounts",
    "RosAccountsProps",
    "RosDBInstance",
    "RosDBInstanceProps",
    "RosDBInstances",
    "RosDBInstancesProps",
    "RosDatabases",
    "RosDatabasesProps",
    "RosZones",
    "RosZonesProps",
    "Zones",
    "ZonesProps",
]

publication.publish()

def _typecheckingstub__95dd19288d1fb07c44dfcdad60894614316ceb698204df838f1ca1215160d3c2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae587f27fe256169bde12ab7d5d2bbf18fb4cfa4dcd8d0e5ec258622787381a5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ec0104a1d3dec1d2a5e2fced6ed5a77a88f95cd2caace98d7fc27a76ee2ccf1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef74f383cda4515999574d16de6a49d31f725312a35dc181fc1b668eeca7ecba(
    value: AccountsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8f7acbe0a0d6b2d926d44ec3708327a36ef0ffb0e4a2f412569dc7ca2c23717(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f962f50ad4f9cf1d7d6fd6cd87a930fc0f522df76f98c027c9df725124e1353(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86e45063b6bbb387d4feb8800d889fd47b2dc0ef400b2db4867e70f5b7aa683e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DBInstanceProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e432af3c98b4f1b4999ac257d9d3087ac16ecef2513db4f74cfb7ad34f66922(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__958efde3a0b82acacae39e40cd7cb6e58a39784961caacf2a98ff3ae293be7e1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f247be03da8fe80a529fab0b24c6906ac51993f1e9c378c9bda8af10fa255c9(
    value: DBInstanceProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06e1c662b4b5591dcaa59662a4794145fada8d7416c214b509408854bb5afb99(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebd5169f1b92ab5dd4a0b5bb511a117722bb263f61c72b02806d12d1b1ef86e8(
    *,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f09ed459dce499ec4d06cf0fec5e00cfb28949ffc462caa87c87f5495e4d3e57(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DBInstancesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74399a8af667287120001b3545d15d02f0027cbcc4e4443874c0431d1373568b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdfb77902b365fa6259707c155c72a6bc2147e3249ef94f1f641d54d7dd0b750(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__268ca0a6f6b857b0721d4643ec583170440b007c100e0e8286b426698bb59676(
    value: DBInstancesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__731f3c1c8aa571f91a01d09160caa817fa4d12f052e97b8214efdd4b5c726e51(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1d3e543666aca4b1c633978aec2f1fb5d2fc096ac0c13b6aa201864cb7e6490(
    *,
    connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    search_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__095546846bb6c1d643ffe24a42650823ccb30dade7d00fc1121edcef2cd54b60(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DatabasesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__193a590842d68717a3c2ce891b71e361f9933cad552e93ae1f9be3b2945d5efb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89f29d38d6461abfc51a771cf79084bbed57558bd461cdcddfb8cb08d86a1be4(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a656a6d97cebe5ffc118f2450b756abfa981d73b046ee1ccab4092179a010374(
    value: DatabasesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65ddb95676f94e2ed5e1bed37d651a3547973681422b82fccfbbd9e90fccddce(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c0ed223ef2a3b3a2ee99a78bf47098de3a785588cb6b0a6c713df0af35163bc(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6403a60a492995dae9e4c1213db98dc4125f9a185d74fc62e5de394874aee3f3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d68198122df3f2d8393cd194889e9059c0829c6cd929f193c88bc500bb42028(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0592db2389438f88a69781fa2cbeb169837bd6e10e406281e17546e932ff0619(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4097358e6b8e592193f73aa14bbd663b9c1cb1f7f94216b4085277170f171f0c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c56e06ae040832706ea6022b4961dce08de2255016096619cd6f06738921ce52(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__011008303007edb6dfde9f809cd3a812c87c605e379629843ab22fea0a4cef44(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4c64589e8979a05cb457026c40a5e0f23242b2b07da36c1e78ea6debc0a07b0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f017027487f483c7ad07292962ad455fb2e916f505cf28815638e52e3eacc138(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce42e66ddafdffac211b31f7d33f495bb1a6ec0471bc6f01d2b1d1c291369afa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ef4387a1a77b3fbd2a06c1f0636c779349aa4a40e8970ec03aa45dac69d3806(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efde6dc51037e9526cf0fbe4eecb972e9232f3d8fffe81fb67e7df7414230ab2(
    *,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e022a870a09e1ed87c61bec5400b1612ae4d7fae0de68f51a2a463c4ce3a5d91(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDBInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3097560f91b88ec03a69e187429a221dbb89af49bd866b4a362b01eb9184e1f0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5367f25e2aedbb0336fac2182ed4156421619539c3035bc1fafad880d43949a3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d079027b78a89496f9f89fc0b4b27c33c6f89208a6c3140492631c682aa951e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a844f993d2df02648e26aa83acc3537f0f05ab7aaeafdad8b81095b2175c9c6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cdab30874814eb1eb740b3c336218a3e01d9c5d0333837dd74e6db833f4e2390(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f44e46dd912588b9b2994241da8f8ccd385c508167cee51c70542752e366fdeb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d501744eefd3cfa3b59e5f4dd9dacd91962d79b532139effdfd3fa4ba17ce9be(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b4b52d9cae4ab68ea90ab5670f188f9829cb8eab344cdb123c24753f8b10541(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05a74a6411efe579b26c20a4ab9589ebc0d792d78e289d9a2f9a7194d8e699cd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b911b3dd52dc6033892ab71cec030d2893259be3b0b4060260fd66f7e0022c8d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ae2577191f1791fea08f86432febe88ea8bba879c405e260ac5f6d9da8d598e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcf468fcc929e462dde7cd30faafbab52d0e7ce648a44f4aab390603b8cb0405(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23753d99e221e47a1ae8d2b39dc27f09359d99c7ac0ef25c340299d1deeb5d4a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f60c462b246f9672e3416089378248998fdb2fa7740f1a7f513ff3f93b48ad6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a635dbb58762f4c0470968cb1d7a5481a4ff69c091f1405a92b1a20ff84c52c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d063a2a0198eb06eafaa0464b7f5429c15cac84369c18f77a009702844f25585(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6426bc878ad32cb5f153252be3da7c9e9c95cae8a2ecdaf02cc01a9fb3bfd00(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c71900502692688cb2547a2de956ca6c75c4a55ec0522152ac10d74405c4a228(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ceed69a17dbc386dac268fb1bb940b5437c5489dd6837c90d787044bc245150(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1465ed6f4cb30b1c985df03b04dd841d46dcab09f98987f0a04d861cff692b1e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49ce89cb9bc52dd45b6db182350492de7a5b5e032c887618280cc5f01a2d362e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64ace5e86c8ed91232add743877e39979809fc6b1e3e5e7ee14302a8c63f12e1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3d6887a5625d0c58c5f817ea828aa5960a39d7d4249dc962ec387e8358d6928(
    *,
    connection_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_string: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    expired: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_level: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_network_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    search_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab3a11e1eb36bb6b73465acd4d7bcf4a9cb487b3f783b5753ae92b08867386b5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDatabasesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__191dd8c75186d709b2929d8bef4132040683c7c03edffed40f66a05c3cfdb944(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5965645b934aa2aadd4bd51b27c68859642268b80e444e8b0d3d83400302ae6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b557aaf4a7d0cabb2134aea0ea7e350805bbcd64fa190b176d8b599aefeb82db(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3453762179e68dabce6bac907149c280996a25f0aedf281e1da065b5ebf2d1e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f80bbcec45a7b636c227e35a70d39845543c64fd1cc209026206619447e0d9f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e711614d7229c1a4d4a6bfdeb6a241fe84fda06a4c3e078b94e141814d36d926(
    *,
    db_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    db_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3342df28272fd8a764ed9d9b544a7be62e45230fd21efa8c3fc85d2aeee1a356(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosZonesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8566c11e86edf3ca6989528188a36af823b298c297b6f5cf21507efade23419e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b42492fe13f9cbeca2e19f2f610ea458634180b2470c839c6628f4ec59203b19(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a3e87ff17ea4165492955b3bfd0f35197633a0785d39ea1b0aed8f116ca80a2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b9859c0a33d79e15201ec304796cc41fc96f7f9248d4d2ff57b0735ba5b2dd4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1276b1353642d142ce307a1399b8bf55389f6a505347acf8eebddc1b8583619(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10d754e75dc37827f4f3ba67cec91e626497c81c3ce79307d85e2e4cf4ce61f0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea47ef18721d13018258816edac0a907acad1a992644231ca041eeb05cc83f07(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e932e6e81de5b4949983d22014f7c72eefca39a7d3d41af502f426f8b7d96f6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b9202487b6c0873ba88a5e22c5b60aea7172c1c5561c87fe03d9bd8ab645d51(
    *,
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    commodity_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dispense_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69c3f2d88b2e6826e4c2a107f458c4c4f7e638f8c623d2a96da017fe0c4cca09(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ZonesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e3a5007bec8b67ac20951752806b8d48e9413995455ad97c37bdbe47dcc00f6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf289cd9affd73ae7fdf938080c8f5b88c0a2ca48889f93bac6cd2782b1843a6(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e558b4b468d70840a7567491d2d92fc02ad9c400e1c8ff7d4a82f24573392c8(
    value: ZonesProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da838bd9130c6f46db20039df8999274c29c2e43b988f7ab9824d3214692b40d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b865630716bb670d189dc901ce5b87039c74ddd66ebcf848734a34a0b31ecec5(
    *,
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    commodity_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dispense_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
