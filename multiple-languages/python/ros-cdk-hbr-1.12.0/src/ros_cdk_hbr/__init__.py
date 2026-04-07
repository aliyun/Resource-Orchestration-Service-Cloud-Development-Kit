'''
## Aliyun ROS HBR Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as HBR from '@alicloud/ros-cdk-hbr';
```
'''
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.BackupClientsProps",
    jsii_struct_bases=[],
    name_mapping={"instance_ids": "instanceIds", "tags": "tags"},
)
class BackupClientsProps:
    def __init__(
        self,
        *,
        instance_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        tags: typing.Optional[typing.Sequence[typing.Union["RosBackupClients.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``BackupClients``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients

        :param instance_ids: Property instanceIds: ID list of instances to install backup client.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a94b2401d75b5a76244d0a0303664832aa529ddc0a94890d71dbb4d306c551cb)
            check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_ids": instance_ids,
        }
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property instanceIds: ID list of instances to install backup client.'''
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosBackupClients.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosBackupClients.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BackupClientsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.CrossAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "alias": "alias",
        "cross_account_role_name": "crossAccountRoleName",
        "cross_account_type": "crossAccountType",
        "cross_account_user_id": "crossAccountUserId",
    },
)
class CrossAccountProps:
    def __init__(
        self,
        *,
        alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_user_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``CrossAccount``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount

        :param alias: Property alias: The alias of the cross-account authorization.
        :param cross_account_role_name: Property crossAccountRoleName: The name of the RAM role that is used to grant permissions to the authorized account.
        :param cross_account_type: Property crossAccountType: The type of the cross-account authorization. Valid values: CROSS_ACCOUNT, CROSS_ACCOUNT_BY_RD.
        :param cross_account_user_id: Property crossAccountUserId: The user ID of the account that you want to authorize to back up data in your account.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__757563a2adb9b424ee5584362c9dcf3f9928a74c9ac327a4a9b63004898de89a)
            check_type(argname="argument alias", value=alias, expected_type=type_hints["alias"])
            check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
            check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
            check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if alias is not None:
            self._values["alias"] = alias
        if cross_account_role_name is not None:
            self._values["cross_account_role_name"] = cross_account_role_name
        if cross_account_type is not None:
            self._values["cross_account_type"] = cross_account_type
        if cross_account_user_id is not None:
            self._values["cross_account_user_id"] = cross_account_user_id

    @builtins.property
    def alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property alias: The alias of the cross-account authorization.'''
        result = self._values.get("alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountRoleName: The name of the RAM role that is used to grant permissions to the authorized account.'''
        result = self._values.get("cross_account_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountType: The type of the cross-account authorization.

        Valid values: CROSS_ACCOUNT, CROSS_ACCOUNT_BY_RD.
        '''
        result = self._values.get("cross_account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountUserId: The user ID of the account that you want to authorize to back up data in your account.'''
        result = self._values.get("cross_account_user_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CrossAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.DbAgentProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_info": "instanceInfo",
        "cross_account_role_name": "crossAccountRoleName",
        "cross_account_type": "crossAccountType",
        "cross_account_user_id": "crossAccountUserId",
    },
)
class DbAgentProps:
    def __init__(
        self,
        *,
        instance_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDbAgent.InstanceInfoProperty", typing.Dict[builtins.str, typing.Any]]]]],
        cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_user_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DbAgent``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent

        :param instance_info: Property instanceInfo: Instance infos.
        :param cross_account_role_name: Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
        :param cross_account_type: Property crossAccountType: The type of cross-account backup. Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
        :param cross_account_user_id: Property crossAccountUserId: The user ID of the original account for cross-account backup operations.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c2260099289c94a9004cf5330a1ce2e434cf6a5b83967553d363d3670689991)
            check_type(argname="argument instance_info", value=instance_info, expected_type=type_hints["instance_info"])
            check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
            check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
            check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_info": instance_info,
        }
        if cross_account_role_name is not None:
            self._values["cross_account_role_name"] = cross_account_role_name
        if cross_account_type is not None:
            self._values["cross_account_type"] = cross_account_type
        if cross_account_user_id is not None:
            self._values["cross_account_user_id"] = cross_account_user_id

    @builtins.property
    def instance_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbAgent.InstanceInfoProperty"]]]:
        '''Property instanceInfo: Instance infos.'''
        result = self._values.get("instance_info")
        assert result is not None, "Required property 'instance_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbAgent.InstanceInfoProperty"]]], result)

    @builtins.property
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.'''
        result = self._values.get("cross_account_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountType: The type of cross-account backup.

        Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
        '''
        result = self._values.get("cross_account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountUserId: The user ID of the original account for cross-account backup operations.'''
        result = self._values.get("cross_account_user_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DbAgentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.DbPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_plan_name": "dbPlanName",
        "host_uuid": "hostUuid",
        "source_type": "sourceType",
        "vault_id": "vaultId",
        "continuous_plan": "continuousPlan",
        "cumulative_plan": "cumulativePlan",
        "full_plan": "fullPlan",
        "inc_plan": "incPlan",
        "instance_uuid": "instanceUuid",
        "log_plan": "logPlan",
        "max_rate_limit": "maxRateLimit",
        "max_retry_seconds": "maxRetrySeconds",
        "options": "options",
        "source": "source",
    },
)
class DbPlanProps:
    def __init__(
        self,
        *,
        db_plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_uuid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        continuous_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cumulative_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        full_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        inc_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_uuid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_rate_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_retry_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDbPlan.SourceProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``DbPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan

        :param db_plan_name: Property dbPlanName: Display name of the backup plan.
        :param host_uuid: Property hostUuid: Uuid of the host of the database instance.
        :param source_type: Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.
        :param vault_id: Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
        :param continuous_plan: Property continuousPlan: Continuous backup plan schedule. Use { "type": "continuous" }.
        :param cumulative_plan: Property cumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
        :param full_plan: Property fullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        :param inc_plan: Property incPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
        :param instance_uuid: Property instanceUuid: Uuid of database instance.
        :param log_plan: Property logPlan: Log backup plan schedule.More details see FullPlan.
        :param max_rate_limit: Property maxRateLimit: Max rate limit for backup job,.
        :param max_retry_seconds: Property maxRetrySeconds: Max retry seconds on network failure.
        :param options: Property options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        :param source: Property source: Which database instance or database will be backup.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4039c55ef42682cb0714edefbc752cc428beec1ba6f23fd37f1107cc5fb16c8)
            check_type(argname="argument db_plan_name", value=db_plan_name, expected_type=type_hints["db_plan_name"])
            check_type(argname="argument host_uuid", value=host_uuid, expected_type=type_hints["host_uuid"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument continuous_plan", value=continuous_plan, expected_type=type_hints["continuous_plan"])
            check_type(argname="argument cumulative_plan", value=cumulative_plan, expected_type=type_hints["cumulative_plan"])
            check_type(argname="argument full_plan", value=full_plan, expected_type=type_hints["full_plan"])
            check_type(argname="argument inc_plan", value=inc_plan, expected_type=type_hints["inc_plan"])
            check_type(argname="argument instance_uuid", value=instance_uuid, expected_type=type_hints["instance_uuid"])
            check_type(argname="argument log_plan", value=log_plan, expected_type=type_hints["log_plan"])
            check_type(argname="argument max_rate_limit", value=max_rate_limit, expected_type=type_hints["max_rate_limit"])
            check_type(argname="argument max_retry_seconds", value=max_retry_seconds, expected_type=type_hints["max_retry_seconds"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_plan_name": db_plan_name,
            "host_uuid": host_uuid,
            "source_type": source_type,
            "vault_id": vault_id,
        }
        if continuous_plan is not None:
            self._values["continuous_plan"] = continuous_plan
        if cumulative_plan is not None:
            self._values["cumulative_plan"] = cumulative_plan
        if full_plan is not None:
            self._values["full_plan"] = full_plan
        if inc_plan is not None:
            self._values["inc_plan"] = inc_plan
        if instance_uuid is not None:
            self._values["instance_uuid"] = instance_uuid
        if log_plan is not None:
            self._values["log_plan"] = log_plan
        if max_rate_limit is not None:
            self._values["max_rate_limit"] = max_rate_limit
        if max_retry_seconds is not None:
            self._values["max_retry_seconds"] = max_retry_seconds
        if options is not None:
            self._values["options"] = options
        if source is not None:
            self._values["source"] = source

    @builtins.property
    def db_plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbPlanName: Display name of the backup plan.'''
        result = self._values.get("db_plan_name")
        assert result is not None, "Required property 'db_plan_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property hostUuid: Uuid of the host of the database instance.'''
        result = self._values.get("host_uuid")
        assert result is not None, "Required property 'host_uuid' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.'''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.'''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def continuous_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property continuousPlan: Continuous backup plan schedule.

        Use {   "type": "continuous" }.
        '''
        result = self._values.get("continuous_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cumulative_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cumulativePlan: Cumulative plan schedule, only for mssql.

        More details see FullPlan.
        '''
        result = self._values.get("cumulative_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def full_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fullPlan: Full backup plan schedule.

        daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        result = self._values.get("full_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def inc_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property incPlan: Incremental backup plan schedule.

        Only for mysql and oracle. More details see FullPlan.
        '''
        result = self._values.get("inc_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_uuid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceUuid: Uuid of database instance.'''
        result = self._values.get("instance_uuid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logPlan: Log backup plan schedule.More details see FullPlan.'''
        result = self._values.get("log_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_rate_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxRateLimit: Max rate limit for backup job,.'''
        result = self._values.get("max_rate_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_retry_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxRetrySeconds: Max retry seconds on network failure.'''
        result = self._values.get("max_retry_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property options: Backup options in json format, different for each type of database.

        For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbPlan.SourceProperty"]]:
        '''Property source: Which database instance or database will be backup.'''
        result = self._values.get("source")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbPlan.SourceProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DbPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.DbVaultProps",
    jsii_struct_bases=[],
    name_mapping={
        "retention_days": "retentionDays",
        "vault_name": "vaultName",
        "vault_region_id": "vaultRegionId",
        "description": "description",
        "tags": "tags",
    },
)
class DbVaultProps:
    def __init__(
        self,
        *,
        retention_days: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        vault_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDbVault.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``DbVault``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault

        :param retention_days: Property retentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
        :param vault_name: Property vaultName: Display name of the vault.
        :param vault_region_id: Property vaultRegionId: The region ID to create the vault.
        :param description: Property description: Description of the vault.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c65238d1cba0f307df1141e975f3040bb28946a7518789d35e54689ce7a76f2)
            check_type(argname="argument retention_days", value=retention_days, expected_type=type_hints["retention_days"])
            check_type(argname="argument vault_name", value=vault_name, expected_type=type_hints["vault_name"])
            check_type(argname="argument vault_region_id", value=vault_region_id, expected_type=type_hints["vault_region_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "retention_days": retention_days,
            "vault_name": vault_name,
            "vault_region_id": vault_region_id,
        }
        if description is not None:
            self._values["description"] = description
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def retention_days(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property retentionDays: Data retention days of the vault.

        Data will be deleted when it's older than this time.
        '''
        result = self._values.get("retention_days")
        assert result is not None, "Required property 'retention_days' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vaultName: Display name of the vault.'''
        result = self._values.get("vault_name")
        assert result is not None, "Required property 'vault_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vaultRegionId: The region ID to create the vault.'''
        result = self._values.get("vault_region_id")
        assert result is not None, "Required property 'vault_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Description of the vault.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDbVault.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDbVault.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DbVaultProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.EcsBackupPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_type": "backupType",
        "instance_id": "instanceId",
        "plan_name": "planName",
        "retention": "retention",
        "schedule": "schedule",
        "vault_id": "vaultId",
        "cross_account_role_name": "crossAccountRoleName",
        "cross_account_type": "crossAccountType",
        "cross_account_user_id": "crossAccountUserId",
        "detail": "detail",
        "disabled": "disabled",
        "exclude": "exclude",
        "include": "include",
        "options": "options",
        "paths": "paths",
        "speed_limit": "speedLimit",
    },
)
class EcsBackupPlanProps:
    def __init__(
        self,
        *,
        backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        detail: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        include: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        paths: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        speed_limit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``EcsBackupPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ecsbackupplan

        :param backup_type: Property backupType: Backup type. Valid values: COMPLETE.
        :param instance_id: Property instanceId: The ID of ECS instance. The ecs backup client must have been installed on the host.
        :param plan_name: Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        :param retention: Property retention: Backup retention days, the minimum is 1.
        :param schedule: Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        :param vault_id: Property vaultId: The ID of backup vault.
        :param cross_account_role_name: Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
        :param cross_account_type: Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        :param cross_account_user_id: Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
        :param detail: Property detail: The detail of the backup plan.
        :param disabled: Property disabled: Whether to disable the backup task. Valid values: true, false.
        :param exclude: Property exclude: The exclude paths of the backup plan.
        :param include: Property include: The include paths of the backup plan.
        :param options: Property options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.
        :param paths: Property paths: The paths of the backup plan.
        :param speed_limit: Property speedLimit: The speed limit of the backup plan.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bfb0eb8db0debf51cb3230dac3492c1ffe7dff40edf1b713ba4270e425dbbf6)
            check_type(argname="argument backup_type", value=backup_type, expected_type=type_hints["backup_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument plan_name", value=plan_name, expected_type=type_hints["plan_name"])
            check_type(argname="argument retention", value=retention, expected_type=type_hints["retention"])
            check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
            check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
            check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
            check_type(argname="argument exclude", value=exclude, expected_type=type_hints["exclude"])
            check_type(argname="argument include", value=include, expected_type=type_hints["include"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument paths", value=paths, expected_type=type_hints["paths"])
            check_type(argname="argument speed_limit", value=speed_limit, expected_type=type_hints["speed_limit"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_type": backup_type,
            "instance_id": instance_id,
            "plan_name": plan_name,
            "retention": retention,
            "schedule": schedule,
            "vault_id": vault_id,
        }
        if cross_account_role_name is not None:
            self._values["cross_account_role_name"] = cross_account_role_name
        if cross_account_type is not None:
            self._values["cross_account_type"] = cross_account_type
        if cross_account_user_id is not None:
            self._values["cross_account_user_id"] = cross_account_user_id
        if detail is not None:
            self._values["detail"] = detail
        if disabled is not None:
            self._values["disabled"] = disabled
        if exclude is not None:
            self._values["exclude"] = exclude
        if include is not None:
            self._values["include"] = include
        if options is not None:
            self._values["options"] = options
        if paths is not None:
            self._values["paths"] = paths
        if speed_limit is not None:
            self._values["speed_limit"] = speed_limit

    @builtins.property
    def backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property backupType: Backup type.

        Valid values: COMPLETE.
        '''
        result = self._values.get("backup_type")
        assert result is not None, "Required property 'backup_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of ECS instance.

        The ecs backup client must have been installed on the host.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property planName: The name of the backup plan.

        1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        '''
        result = self._values.get("plan_name")
        assert result is not None, "Required property 'plan_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retention(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property retention: Backup retention days, the minimum is 1.'''
        result = self._values.get("retention")
        assert result is not None, "Required property 'retention' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schedule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property schedule: Backup strategy.

        Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        '''
        result = self._values.get("schedule")
        assert result is not None, "Required property 'schedule' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vaultId: The ID of backup vault.'''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.'''
        result = self._values.get("cross_account_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountType: The type of the cross account backup.

        Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        '''
        result = self._values.get("cross_account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.'''
        result = self._values.get("cross_account_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def detail(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property detail: The detail of the backup plan.'''
        result = self._values.get("detail")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def disabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disabled: Whether to disable the backup task.

        Valid values: true, false.
        '''
        result = self._values.get("disabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property exclude: The exclude paths of the backup plan.'''
        result = self._values.get("exclude")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def include(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property include: The include paths of the backup plan.'''
        result = self._values.get("include")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.'''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def paths(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property paths: The paths of the backup plan.'''
        result = self._values.get("paths")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def speed_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property speedLimit: The speed limit of the backup plan.'''
        result = self._values.get("speed_limit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EcsBackupPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.IBackupClients")
class IBackupClients(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``BackupClients``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrClientIds")
    def attr_client_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClientIds: ID list of clients installed in instances.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: ID list of instances to install backup client.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackupClientsProps:
        ...


class _IBackupClientsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``BackupClients``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.IBackupClients"

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrClientIds")
    def attr_client_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClientIds: ID list of clients installed in instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClientIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: ID list of instances to install backup client.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackupClientsProps:
        return typing.cast(BackupClientsProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IBackupClients).__jsii_proxy_class__ = lambda : _IBackupClientsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.ICrossAccount")
class ICrossAccount(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``CrossAccount``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CrossAccountProps:
        ...


class _ICrossAccountProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CrossAccount``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.ICrossAccount"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CrossAccountProps:
        return typing.cast(CrossAccountProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICrossAccount).__jsii_proxy_class__ = lambda : _ICrossAccountProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.IDbAgent")
class IDbAgent(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DbAgent``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: Uni backup agent instance ids.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: Uni backup agent install task id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUniBackupInstanceDetails")
    def attr_uni_backup_instance_details(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UniBackupInstanceDetails: Uni backup agent instance info details.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUniBackupInstances")
    def attr_uni_backup_instances(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UniBackupInstances: Uni backup agent instance info.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbAgentProps:
        ...


class _IDbAgentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DbAgent``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.IDbAgent"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: Uni backup agent instance ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: Uni backup agent install task id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrUniBackupInstanceDetails")
    def attr_uni_backup_instance_details(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UniBackupInstanceDetails: Uni backup agent instance info details.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUniBackupInstanceDetails"))

    @builtins.property
    @jsii.member(jsii_name="attrUniBackupInstances")
    def attr_uni_backup_instances(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UniBackupInstances: Uni backup agent instance info.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUniBackupInstances"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbAgentProps:
        return typing.cast(DbAgentProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDbAgent).__jsii_proxy_class__ = lambda : _IDbAgentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.IDbPlan")
class IDbPlan(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DbPlan``.'''

    @builtins.property
    @jsii.member(jsii_name="attrContinuousPlan")
    def attr_continuous_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ContinuousPlan: Continuous backup plan schedule.

        Use {   "type": "continuous" }.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrContinuousUuid")
    def attr_continuous_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ContinuousUuid: Uuid of continuous backup plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCumulativePlan")
    def attr_cumulative_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CumulativePlan: Cumulative plan schedule, only for mssql.

        More details see FullPlan.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCumulativeUuid")
    def attr_cumulative_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CumulativeUuid: Uuid of cumulative plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDbPlanName")
    def attr_db_plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbPlanName: Display name of the backup plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFullPlan")
    def attr_full_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FullPlan: Full backup plan schedule.

        daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFullUuid")
    def attr_full_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FullUuid: Uuid of full backup plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHostUuid")
    def attr_host_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostUuid: Uuid of the host of the database instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIncPlan")
    def attr_inc_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IncPlan: Incremental backup plan schedule.

        Only for mysql and oracle. More details see FullPlan.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIncUuid")
    def attr_inc_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IncUuid: Uuid of the incremental bakcup plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceUuid")
    def attr_instance_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceUuid: Uuid of database instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLogPlan")
    def attr_log_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogPlan: Log backup plan schedule.More details see FullPlan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLogUuid")
    def attr_log_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogUuid: Uuid of the log backup plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMaxRateLimit")
    def attr_max_rate_limit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxRateLimit: Max rate limit for backup job,.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMaxRetrySeconds")
    def attr_max_retry_seconds(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxRetrySeconds: Max retry seconds on network failure.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Options: Backup options in json format, different for each type of database.

        For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: Id of the backup plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTarget")
    def attr_target(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Target: Target vault to backup.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbPlanProps:
        ...


class _IDbPlanProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DbPlan``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.IDbPlan"

    @builtins.property
    @jsii.member(jsii_name="attrContinuousPlan")
    def attr_continuous_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ContinuousPlan: Continuous backup plan schedule.

        Use {   "type": "continuous" }.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrContinuousPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrContinuousUuid")
    def attr_continuous_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ContinuousUuid: Uuid of continuous backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrContinuousUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrCumulativePlan")
    def attr_cumulative_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CumulativePlan: Cumulative plan schedule, only for mssql.

        More details see FullPlan.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCumulativePlan"))

    @builtins.property
    @jsii.member(jsii_name="attrCumulativeUuid")
    def attr_cumulative_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CumulativeUuid: Uuid of cumulative plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCumulativeUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrDbPlanName")
    def attr_db_plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbPlanName: Display name of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbPlanName"))

    @builtins.property
    @jsii.member(jsii_name="attrFullPlan")
    def attr_full_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FullPlan: Full backup plan schedule.

        daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFullPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrFullUuid")
    def attr_full_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FullUuid: Uuid of full backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFullUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrHostUuid")
    def attr_host_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostUuid: Uuid of the host of the database instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHostUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrIncPlan")
    def attr_inc_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IncPlan: Incremental backup plan schedule.

        Only for mysql and oracle. More details see FullPlan.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIncPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrIncUuid")
    def attr_inc_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IncUuid: Uuid of the incremental bakcup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIncUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceUuid")
    def attr_instance_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceUuid: Uuid of database instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrLogPlan")
    def attr_log_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogPlan: Log backup plan schedule.More details see FullPlan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrLogUuid")
    def attr_log_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogUuid: Uuid of the log backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxRateLimit")
    def attr_max_rate_limit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxRateLimit: Max rate limit for backup job,.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaxRateLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxRetrySeconds")
    def attr_max_retry_seconds(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxRetrySeconds: Max retry seconds on network failure.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaxRetrySeconds"))

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Options: Backup options in json format, different for each type of database.

        For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOptions"))

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: Id of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTarget")
    def attr_target(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Target: Target vault to backup.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTarget"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbPlanProps:
        return typing.cast(DbPlanProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDbPlan).__jsii_proxy_class__ = lambda : _IDbPlanProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.IDbVault")
class IDbVault(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DbVault``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description of the vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRetentionDays")
    def attr_retention_days(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RetentionDays: Data retention days of the vault.

        Data will be deleted when it's older than this time.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: Vault ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultName: Display name of the vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultRegionId")
    def attr_vault_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultRegionId: The region ID to create the vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbVaultProps:
        ...


class _IDbVaultProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DbVault``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.IDbVault"

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description of the vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrRetentionDays")
    def attr_retention_days(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RetentionDays: Data retention days of the vault.

        Data will be deleted when it's older than this time.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRetentionDays"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: Vault ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultName: Display name of the vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultName"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultRegionId")
    def attr_vault_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultRegionId: The region ID to create the vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultRegionId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbVaultProps:
        return typing.cast(DbVaultProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDbVault).__jsii_proxy_class__ = lambda : _IDbVaultProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.IEcsBackupPlan")
class IEcsBackupPlan(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``EcsBackupPlan``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: The ID of the backup plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EcsBackupPlanProps:
        ...


class _IEcsBackupPlanProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``EcsBackupPlan``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.IEcsBackupPlan"

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: The ID of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EcsBackupPlanProps:
        return typing.cast(EcsBackupPlanProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEcsBackupPlan).__jsii_proxy_class__ = lambda : _IEcsBackupPlanProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.INasBackupPlan")
class INasBackupPlan(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``NasBackupPlan``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: The ID of the backup plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NasBackupPlanProps":
        ...


class _INasBackupPlanProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``NasBackupPlan``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.INasBackupPlan"

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: The ID of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NasBackupPlanProps":
        return typing.cast("NasBackupPlanProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, INasBackupPlan).__jsii_proxy_class__ = lambda : _INasBackupPlanProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.IOssBackupPlan")
class IOssBackupPlan(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``OssBackupPlan``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: The ID of the backup plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OssBackupPlanProps":
        ...


class _IOssBackupPlanProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``OssBackupPlan``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.IOssBackupPlan"

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: The ID of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OssBackupPlanProps":
        return typing.cast("OssBackupPlanProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IOssBackupPlan).__jsii_proxy_class__ = lambda : _IOssBackupPlanProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.IOtsBackupPlan")
class IOtsBackupPlan(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``OtsBackupPlan``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: The ID of the backup plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OtsBackupPlanProps":
        ...


class _IOtsBackupPlanProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``OtsBackupPlan``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.IOtsBackupPlan"

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: The ID of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OtsBackupPlanProps":
        return typing.cast("OtsBackupPlanProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IOtsBackupPlan).__jsii_proxy_class__ = lambda : _IOtsBackupPlanProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.IPolicy")
class IPolicy(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Policy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PolicyProps":
        ...


class _IPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Policy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.IPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PolicyProps":
        return typing.cast("PolicyProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPolicy).__jsii_proxy_class__ = lambda : _IPolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.IReplicationVault")
class IReplicationVault(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ReplicationVault``.'''

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: The ID of the vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ReplicationVaultProps":
        ...


class _IReplicationVaultProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ReplicationVault``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.IReplicationVault"

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: The ID of the vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ReplicationVaultProps":
        return typing.cast("ReplicationVaultProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IReplicationVault).__jsii_proxy_class__ = lambda : _IReplicationVaultProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.IRestoreJob")
class IRestoreJob(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``RestoreJob``.'''

    @builtins.property
    @jsii.member(jsii_name="attrErrorMessage")
    def attr_error_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ErrorMessage: Error message of restore job.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRestoreId")
    def attr_restore_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RestoreId: Restore job ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRestoreType")
    def attr_restore_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RestoreType: Restore type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: Source type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Status: Restore job status.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RestoreJobProps":
        ...


class _IRestoreJobProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``RestoreJob``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.IRestoreJob"

    @builtins.property
    @jsii.member(jsii_name="attrErrorMessage")
    def attr_error_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ErrorMessage: Error message of restore job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrErrorMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrRestoreId")
    def attr_restore_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RestoreId: Restore job ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRestoreId"))

    @builtins.property
    @jsii.member(jsii_name="attrRestoreType")
    def attr_restore_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RestoreType: Restore type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRestoreType"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: Source type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Status: Restore job status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RestoreJobProps":
        return typing.cast("RestoreJobProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRestoreJob).__jsii_proxy_class__ = lambda : _IRestoreJobProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.IVault")
class IVault(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Vault``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanStatistics")
    def attr_backup_plan_statistics(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBytesDone")
    def attr_bytes_done(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BytesDone: The amount of data that is backed up.

        Unit: bytes.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the backup vault was created.

        This value is a UNIX timestamp. Unit: seconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDedup")
    def attr_dedup(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Dedup: Indicates whether the deduplication feature is enabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIndexAvailable")
    def attr_index_available(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexAvailable: Indicates whether indexes are available.

        Indexes are available when they are not being updated.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIndexLevel")
    def attr_index_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexLevel: The index level.

        - **OFF**: No indexes are created.
        - **META**: Metadata indexes are created.
        - **ALL**: Full-text indexes are created.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIndexUpdateTime")
    def attr_index_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexUpdateTime: The time when the index was updated.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLatestReplicationTime")
    def attr_latest_replication_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestReplicationTime: The time when the last remote backup was synchronized.

        This value is a UNIX timestamp. Unit: seconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: PaymentType.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRedundancyType")
    def attr_redundancy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RedundancyType: The data redundancy type of the backup vault.

        Valid values:

        - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
        - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplication")
    def attr_replication(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Replication: Indicates whether the backup vault is a remote backup vault.

        Valid values:

        - **true**: The backup vault is a remote backup vault.
        - **false**: The backup vault is an on-premises backup vault.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplicationProgress")
    def attr_replication_progress(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceRegionId")
    def attr_replication_source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationSourceRegionId: The ID of the region where the remote backup vault resides.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceVaultId")
    def attr_replication_source_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRetention")
    def attr_retention(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Retention: The retention period of the backup vault.

        Unit: days.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSearchEnabled")
    def attr_search_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SearchEnabled: Indicates whether the backup search feature is enabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceTypes")
    def attr_source_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceTypes: The information about the data source.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStorageSize")
    def attr_storage_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageSize: The usage of the backup vault.

        Unit: bytes.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTrialInfo")
    def attr_trial_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TrialInfo: The free trial information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedTime")
    def attr_updated_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedTime: The time when the backup vault was updated.

        This value is a UNIX timestamp. Unit: seconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: The ID of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultName: The name of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultStatusMessage")
    def attr_vault_status_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.

        This parameter is available only for remote backup vaults. Valid values:

        - **UNKNOWN_ERROR*: An unknown error occurs.
        - **SOURCE_VAULT_ALREADY_HAS_REPLICATION**: A mirror vault is configured for the source vault.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultStorageClass")
    def attr_vault_storage_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultStorageClass: The storage type of the backup vault.

        Valid value: **STANDARD**, which indicates standard storage.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultType")
    def attr_vault_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultType: The type of the backup vault.

        Valid value: **STANDARD**, which indicates a standard backup vault.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VaultProps":
        ...


class _IVaultProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Vault``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.IVault"

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanStatistics")
    def attr_backup_plan_statistics(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPlanStatistics"))

    @builtins.property
    @jsii.member(jsii_name="attrBytesDone")
    def attr_bytes_done(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BytesDone: The amount of data that is backed up.

        Unit: bytes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBytesDone"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the backup vault was created.

        This value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDedup")
    def attr_dedup(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Dedup: Indicates whether the deduplication feature is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedup"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexAvailable")
    def attr_index_available(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexAvailable: Indicates whether indexes are available.

        Indexes are available when they are not being updated.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndexAvailable"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexLevel")
    def attr_index_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexLevel: The index level.

        - **OFF**: No indexes are created.
        - **META**: Metadata indexes are created.
        - **ALL**: Full-text indexes are created.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndexLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexUpdateTime")
    def attr_index_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexUpdateTime: The time when the index was updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndexUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestReplicationTime")
    def attr_latest_replication_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestReplicationTime: The time when the last remote backup was synchronized.

        This value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLatestReplicationTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: PaymentType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRedundancyType")
    def attr_redundancy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RedundancyType: The data redundancy type of the backup vault.

        Valid values:

        - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
        - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRedundancyType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplication")
    def attr_replication(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Replication: Indicates whether the backup vault is a remote backup vault.

        Valid values:

        - **true**: The backup vault is a remote backup vault.
        - **false**: The backup vault is an on-premises backup vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplication"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationProgress")
    def attr_replication_progress(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceRegionId")
    def attr_replication_source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationSourceRegionId: The ID of the region where the remote backup vault resides.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationSourceRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceVaultId")
    def attr_replication_source_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationSourceVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRetention")
    def attr_retention(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Retention: The retention period of the backup vault.

        Unit: days.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRetention"))

    @builtins.property
    @jsii.member(jsii_name="attrSearchEnabled")
    def attr_search_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SearchEnabled: Indicates whether the backup search feature is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSearchEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceTypes")
    def attr_source_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceTypes: The information about the data source.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageSize")
    def attr_storage_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageSize: The usage of the backup vault.

        Unit: bytes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageSize"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTrialInfo")
    def attr_trial_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TrialInfo: The free trial information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTrialInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedTime")
    def attr_updated_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedTime: The time when the backup vault was updated.

        This value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: The ID of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultName: The name of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultName"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultStatusMessage")
    def attr_vault_status_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.

        This parameter is available only for remote backup vaults. Valid values:

        - **UNKNOWN_ERROR*: An unknown error occurs.
        - **SOURCE_VAULT_ALREADY_HAS_REPLICATION**: A mirror vault is configured for the source vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultStatusMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultStorageClass")
    def attr_vault_storage_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultStorageClass: The storage type of the backup vault.

        Valid value: **STANDARD**, which indicates standard storage.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultStorageClass"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultType")
    def attr_vault_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultType: The type of the backup vault.

        Valid value: **STANDARD**, which indicates a standard backup vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VaultProps":
        return typing.cast("VaultProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IVault).__jsii_proxy_class__ = lambda : _IVaultProxy


@jsii.implements(INasBackupPlan)
class NasBackupPlan(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.NasBackupPlan",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::NasBackupPlan``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosNasBackupPlan``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-nasbackupplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["NasBackupPlanProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6355160713cc73fb6575250d2237e6cec1fa0d61d43a7115ebd5885f545fdc4d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: The ID of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NasBackupPlanProps":
        return typing.cast("NasBackupPlanProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a71d8ac075f804199cfa590b85c2d4834efd47d5dcb759a9b21496e18d9312b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4feb22bcded834e9b1675e00d1aa17c387a84d616b4e9a566fac7a59010df3d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6598e35388621fff7c3f0bd4155a9583e34fee75b161eee78504bebf1f1fd4e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.NasBackupPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_type": "backupType",
        "file_system_id": "fileSystemId",
        "paths": "paths",
        "plan_name": "planName",
        "retention": "retention",
        "schedule": "schedule",
        "vault_id": "vaultId",
        "cross_account_role_name": "crossAccountRoleName",
        "cross_account_type": "crossAccountType",
        "cross_account_user_id": "crossAccountUserId",
        "disabled": "disabled",
        "options": "options",
    },
)
class NasBackupPlanProps:
    def __init__(
        self,
        *,
        backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        paths: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``NasBackupPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-nasbackupplan

        :param backup_type: Property backupType: Backup type. Valid values: COMPLETE.
        :param file_system_id: Property fileSystemId: The ID of the file system.
        :param paths: Property paths: The paths of the backup plan.
        :param plan_name: Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        :param retention: Property retention: Backup retention days, the minimum is 1.
        :param schedule: Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        :param vault_id: Property vaultId: The ID of backup vault.
        :param cross_account_role_name: Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
        :param cross_account_type: Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        :param cross_account_user_id: Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
        :param disabled: Property disabled: Whether to disable the backup task. Valid values: true, false.
        :param options: Property options: This parameter specifies whether to use Windows VSS to define a backup path.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1914a3e370ae0f5ebdcc17b35611874ab638a67ed957782828bf49e966e4cbb)
            check_type(argname="argument backup_type", value=backup_type, expected_type=type_hints["backup_type"])
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument paths", value=paths, expected_type=type_hints["paths"])
            check_type(argname="argument plan_name", value=plan_name, expected_type=type_hints["plan_name"])
            check_type(argname="argument retention", value=retention, expected_type=type_hints["retention"])
            check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
            check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
            check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
            check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_type": backup_type,
            "file_system_id": file_system_id,
            "paths": paths,
            "plan_name": plan_name,
            "retention": retention,
            "schedule": schedule,
            "vault_id": vault_id,
        }
        if cross_account_role_name is not None:
            self._values["cross_account_role_name"] = cross_account_role_name
        if cross_account_type is not None:
            self._values["cross_account_type"] = cross_account_type
        if cross_account_user_id is not None:
            self._values["cross_account_user_id"] = cross_account_user_id
        if disabled is not None:
            self._values["disabled"] = disabled
        if options is not None:
            self._values["options"] = options

    @builtins.property
    def backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property backupType: Backup type.

        Valid values: COMPLETE.
        '''
        result = self._values.get("backup_type")
        assert result is not None, "Required property 'backup_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property fileSystemId: The ID of the file system.'''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def paths(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property paths: The paths of the backup plan.'''
        result = self._values.get("paths")
        assert result is not None, "Required property 'paths' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property planName: The name of the backup plan.

        1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        '''
        result = self._values.get("plan_name")
        assert result is not None, "Required property 'plan_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retention(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property retention: Backup retention days, the minimum is 1.'''
        result = self._values.get("retention")
        assert result is not None, "Required property 'retention' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schedule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property schedule: Backup strategy.

        Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        '''
        result = self._values.get("schedule")
        assert result is not None, "Required property 'schedule' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vaultId: The ID of backup vault.'''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.'''
        result = self._values.get("cross_account_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountType: The type of the cross account backup.

        Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        '''
        result = self._values.get("cross_account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.'''
        result = self._values.get("cross_account_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disabled: Whether to disable the backup task.

        Valid values: true, false.
        '''
        result = self._values.get("disabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property options: This parameter specifies whether to use Windows VSS to define a backup path.'''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NasBackupPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IOssBackupPlan)
class OssBackupPlan(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.OssBackupPlan",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::OssBackupPlan``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosOssBackupPlan``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ossbackupplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["OssBackupPlanProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af1dde86bb53dd5e09b96cb61203991c1b0f9a3a9644246d075b96354bc27e3d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: The ID of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OssBackupPlanProps":
        return typing.cast("OssBackupPlanProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__865372e69c7e2e95bf22f60691252c96c1c0b42472336fecca15370eafcc3d49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8e81edbc35b436350167d43d6ba74b4c636f4afa266c8743794ffacb2791703)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1bf2621f0687c9747b8662517e574cba1a448c17c78934bedc8cf19271e4172)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.OssBackupPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_type": "backupType",
        "bucket": "bucket",
        "plan_name": "planName",
        "retention": "retention",
        "schedule": "schedule",
        "vault_id": "vaultId",
        "cross_account_role_name": "crossAccountRoleName",
        "cross_account_type": "crossAccountType",
        "cross_account_user_id": "crossAccountUserId",
        "disabled": "disabled",
        "prefix": "prefix",
    },
)
class OssBackupPlanProps:
    def __init__(
        self,
        *,
        backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``OssBackupPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ossbackupplan

        :param backup_type: Property backupType: Backup type. Valid values: COMPLETE.
        :param bucket: Property bucket: The name of OSS bucket.
        :param plan_name: Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        :param retention: Property retention: Backup retention days, the minimum is 1.
        :param schedule: Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        :param vault_id: Property vaultId: The ID of backup vault.
        :param cross_account_role_name: Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
        :param cross_account_type: Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        :param cross_account_user_id: Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
        :param disabled: Property disabled: Whether to disable the backup task. Valid values: true, false.
        :param prefix: Property prefix: Backup prefix. Once specified, only objects with matching prefixes will be backed up.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48b15e252a189818d25886cbd1bcbf36dfcdb414377298d8a75bcf9413ba62ad)
            check_type(argname="argument backup_type", value=backup_type, expected_type=type_hints["backup_type"])
            check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
            check_type(argname="argument plan_name", value=plan_name, expected_type=type_hints["plan_name"])
            check_type(argname="argument retention", value=retention, expected_type=type_hints["retention"])
            check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
            check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
            check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
            check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
            check_type(argname="argument prefix", value=prefix, expected_type=type_hints["prefix"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_type": backup_type,
            "bucket": bucket,
            "plan_name": plan_name,
            "retention": retention,
            "schedule": schedule,
            "vault_id": vault_id,
        }
        if cross_account_role_name is not None:
            self._values["cross_account_role_name"] = cross_account_role_name
        if cross_account_type is not None:
            self._values["cross_account_type"] = cross_account_type
        if cross_account_user_id is not None:
            self._values["cross_account_user_id"] = cross_account_user_id
        if disabled is not None:
            self._values["disabled"] = disabled
        if prefix is not None:
            self._values["prefix"] = prefix

    @builtins.property
    def backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property backupType: Backup type.

        Valid values: COMPLETE.
        '''
        result = self._values.get("backup_type")
        assert result is not None, "Required property 'backup_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucket: The name of OSS bucket.'''
        result = self._values.get("bucket")
        assert result is not None, "Required property 'bucket' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property planName: The name of the backup plan.

        1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        '''
        result = self._values.get("plan_name")
        assert result is not None, "Required property 'plan_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retention(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property retention: Backup retention days, the minimum is 1.'''
        result = self._values.get("retention")
        assert result is not None, "Required property 'retention' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schedule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property schedule: Backup strategy.

        Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        '''
        result = self._values.get("schedule")
        assert result is not None, "Required property 'schedule' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vaultId: The ID of backup vault.'''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.'''
        result = self._values.get("cross_account_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountType: The type of the cross account backup.

        Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        '''
        result = self._values.get("cross_account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.'''
        result = self._values.get("cross_account_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disabled: Whether to disable the backup task.

        Valid values: true, false.
        '''
        result = self._values.get("disabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property prefix: Backup prefix.

        Once specified, only objects with matching prefixes will be backed up.
        '''
        result = self._values.get("prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "OssBackupPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IOtsBackupPlan)
class OtsBackupPlan(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.OtsBackupPlan",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::OtsBackupPlan``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosOtsBackupPlan``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-otsbackupplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["OtsBackupPlanProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b416230e427fbcf54764a1ace6bc9dc108e806b4f3e8a50bf0cfb03f5a6ff886)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: The ID of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OtsBackupPlanProps":
        return typing.cast("OtsBackupPlanProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36f8f34340b31373c96c375a54b137e5f7d255c7d53f4e085567d13059cac207)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b521b8d8c32f0c0781e3606bfc4c62880b487e4578b0fadc3baf9c78b2a1e554)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12b3caffaab480c93199cdb24d96b18d836b662948481f443bf3bf9fa584f8be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.OtsBackupPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_type": "backupType",
        "plan_name": "planName",
        "retention": "retention",
        "schedule": "schedule",
        "vault_id": "vaultId",
        "cross_account_role_name": "crossAccountRoleName",
        "cross_account_type": "crossAccountType",
        "cross_account_user_id": "crossAccountUserId",
        "disabled": "disabled",
        "instance_name": "instanceName",
        "ots_detail": "otsDetail",
        "rules": "rules",
    },
)
class OtsBackupPlanProps:
    def __init__(
        self,
        *,
        backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ots_detail: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosOtsBackupPlan.OtsDetailProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosOtsBackupPlan.RulesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``OtsBackupPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-otsbackupplan

        :param backup_type: Property backupType: Backup type. Valid values: COMPLETE.
        :param plan_name: Property planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        :param retention: Property retention: Backup retention days, the minimum is 1.
        :param schedule: Property schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        :param vault_id: Property vaultId: The ID of backup vault.
        :param cross_account_role_name: Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
        :param cross_account_type: Property crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        :param cross_account_user_id: Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.
        :param disabled: Property disabled: Whether to disable the backup task. Valid values: true, false.
        :param instance_name: Property instanceName: The name of the Table store instance.
        :param ots_detail: Property otsDetail: The details about the Table store instance.
        :param rules: Property rules: The backup plan rule.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff437a8677ad8a0d989bed274bfd6edf434ba1f7c59b5afb3c074495b6152a4b)
            check_type(argname="argument backup_type", value=backup_type, expected_type=type_hints["backup_type"])
            check_type(argname="argument plan_name", value=plan_name, expected_type=type_hints["plan_name"])
            check_type(argname="argument retention", value=retention, expected_type=type_hints["retention"])
            check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
            check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
            check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
            check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument ots_detail", value=ots_detail, expected_type=type_hints["ots_detail"])
            check_type(argname="argument rules", value=rules, expected_type=type_hints["rules"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_type": backup_type,
            "plan_name": plan_name,
            "retention": retention,
            "schedule": schedule,
            "vault_id": vault_id,
        }
        if cross_account_role_name is not None:
            self._values["cross_account_role_name"] = cross_account_role_name
        if cross_account_type is not None:
            self._values["cross_account_type"] = cross_account_type
        if cross_account_user_id is not None:
            self._values["cross_account_user_id"] = cross_account_user_id
        if disabled is not None:
            self._values["disabled"] = disabled
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if ots_detail is not None:
            self._values["ots_detail"] = ots_detail
        if rules is not None:
            self._values["rules"] = rules

    @builtins.property
    def backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property backupType: Backup type.

        Valid values: COMPLETE.
        '''
        result = self._values.get("backup_type")
        assert result is not None, "Required property 'backup_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property planName: The name of the backup plan.

        1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        '''
        result = self._values.get("plan_name")
        assert result is not None, "Required property 'plan_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retention(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property retention: Backup retention days, the minimum is 1.'''
        result = self._values.get("retention")
        assert result is not None, "Required property 'retention' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schedule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property schedule: Backup strategy.

        Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        '''
        result = self._values.get("schedule")
        assert result is not None, "Required property 'schedule' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vaultId: The ID of backup vault.'''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.'''
        result = self._values.get("cross_account_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountType: The type of the cross account backup.

        Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        '''
        result = self._values.get("cross_account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossAccountUserId: The original account ID of the cross account backup managed by the current account.'''
        result = self._values.get("cross_account_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disabled: Whether to disable the backup task.

        Valid values: true, false.
        '''
        result = self._values.get("disabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceName: The name of the Table store instance.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ots_detail(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOtsBackupPlan.OtsDetailProperty"]]:
        '''Property otsDetail: The details about the Table store instance.'''
        result = self._values.get("ots_detail")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOtsBackupPlan.OtsDetailProperty"]], result)

    @builtins.property
    def rules(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOtsBackupPlan.RulesProperty"]]]]:
        '''Property rules: The backup plan rule.'''
        result = self._values.get("rules")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOtsBackupPlan.RulesProperty"]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "OtsBackupPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPolicy)
class Policy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.Policy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::Policy``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca7d3fda8f895e09e38f996fa3c1f44ce527ba692aeafbfe0ff27429b4eee8ed)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PolicyProps":
        return typing.cast("PolicyProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d08d426457a0544fbc67fdc80240949bfdabb5602c0d9029464c89d7ef0ae424)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54640ee99f121cc6e37b4749660d61ac7965f68f50f587c75483a6e9defa2146)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f5e68c1c6a333bea7dd95980f90ddf1996f8165ea29b1a6e8a7f66b43be8598)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.PolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_name": "policyName",
        "policy_type": "policyType",
        "rules": "rules",
        "policy_description": "policyDescription",
    },
)
class PolicyProps:
    def __init__(
        self,
        *,
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rules: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPolicy.RulesProperty", typing.Dict[builtins.str, typing.Any]]]]],
        policy_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Policy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy

        :param policy_name: Property policyName: The name of the policy.
        :param policy_type: Property policyType: The type of the policy.
        :param rules: Property rules: The rules of the policy.
        :param policy_description: Property policyDescription: The description of the policy.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c88c73d4b15e7b0d25e74c1b218a44812666c6ef0ca6b136b11b6ddc68f4fb5)
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument rules", value=rules, expected_type=type_hints["rules"])
            check_type(argname="argument policy_description", value=policy_description, expected_type=type_hints["policy_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "rules": rules,
        }
        if policy_description is not None:
            self._values["policy_description"] = policy_description

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyName: The name of the policy.'''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyType: The type of the policy.'''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rules(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.RulesProperty"]]]:
        '''Property rules: The rules of the policy.'''
        result = self._values.get("rules")
        assert result is not None, "Required property 'rules' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.RulesProperty"]]], result)

    @builtins.property
    def policy_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property policyDescription: The description of the policy.'''
        result = self._values.get("policy_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IReplicationVault)
class ReplicationVault(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.ReplicationVault",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::ReplicationVault``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosReplicationVault``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ReplicationVaultProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7d5314bfd235003a9705c3795007e1d2f73efef33ed0412e09ae4320df906f2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: The ID of the vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ReplicationVaultProps":
        return typing.cast("ReplicationVaultProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3d19f74dfb5ec9943856bf1ffd0ab7d15e1ab8a340b6a366373a766dda77192)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28bfc4ccb8de582732da4b2000f0d05fdf0d66e9b67534b413c5433386ae3422)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da4cb6bc7f99dceec8e323d8ee8684fbe1010936338b4cbb7db71d2483cb786a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.ReplicationVaultProps",
    jsii_struct_bases=[],
    name_mapping={
        "replication_source_region_id": "replicationSourceRegionId",
        "replication_source_vault_id": "replicationSourceVaultId",
        "vault_name": "vaultName",
        "description": "description",
        "encrypt_type": "encryptType",
        "kms_key_id": "kmsKeyId",
        "redundancy_type": "redundancyType",
        "vault_storage_class": "vaultStorageClass",
    },
)
class ReplicationVaultProps:
    def __init__(
        self,
        *,
        replication_source_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        replication_source_vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypt_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vault_storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ReplicationVault``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault

        :param replication_source_region_id: Property replicationSourceRegionId: The region ID of the source vault for replication.
        :param replication_source_vault_id: Property replicationSourceVaultId: The ID of the source vault for replication.
        :param vault_name: Property vaultName: The name of the vault.
        :param description: Property description: The description of the vault.
        :param encrypt_type: Property encryptType: The encryption type of the vault.
        :param kms_key_id: Property kmsKeyId: The KMS key ID used for encryption.
        :param redundancy_type: Property redundancyType: The redundancy type of the vault.
        :param vault_storage_class: Property vaultStorageClass: The storage class of the vault.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3b451a2f7bf3d3d65a56eb31f56ac86d6840224a5c78c96b87d950c4b670e1e)
            check_type(argname="argument replication_source_region_id", value=replication_source_region_id, expected_type=type_hints["replication_source_region_id"])
            check_type(argname="argument replication_source_vault_id", value=replication_source_vault_id, expected_type=type_hints["replication_source_vault_id"])
            check_type(argname="argument vault_name", value=vault_name, expected_type=type_hints["vault_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument encrypt_type", value=encrypt_type, expected_type=type_hints["encrypt_type"])
            check_type(argname="argument kms_key_id", value=kms_key_id, expected_type=type_hints["kms_key_id"])
            check_type(argname="argument redundancy_type", value=redundancy_type, expected_type=type_hints["redundancy_type"])
            check_type(argname="argument vault_storage_class", value=vault_storage_class, expected_type=type_hints["vault_storage_class"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "replication_source_region_id": replication_source_region_id,
            "replication_source_vault_id": replication_source_vault_id,
            "vault_name": vault_name,
        }
        if description is not None:
            self._values["description"] = description
        if encrypt_type is not None:
            self._values["encrypt_type"] = encrypt_type
        if kms_key_id is not None:
            self._values["kms_key_id"] = kms_key_id
        if redundancy_type is not None:
            self._values["redundancy_type"] = redundancy_type
        if vault_storage_class is not None:
            self._values["vault_storage_class"] = vault_storage_class

    @builtins.property
    def replication_source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property replicationSourceRegionId: The region ID of the source vault for replication.'''
        result = self._values.get("replication_source_region_id")
        assert result is not None, "Required property 'replication_source_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def replication_source_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property replicationSourceVaultId: The ID of the source vault for replication.'''
        result = self._values.get("replication_source_vault_id")
        assert result is not None, "Required property 'replication_source_vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vaultName: The name of the vault.'''
        result = self._values.get("vault_name")
        assert result is not None, "Required property 'vault_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the vault.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypt_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptType: The encryption type of the vault.'''
        result = self._values.get("encrypt_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property kmsKeyId: The KMS key ID used for encryption.'''
        result = self._values.get("kms_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property redundancyType: The redundancy type of the vault.'''
        result = self._values.get("redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vault_storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vaultStorageClass: The storage class of the vault.'''
        result = self._values.get("vault_storage_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ReplicationVaultProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRestoreJob)
class RestoreJob(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RestoreJob",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::RestoreJob``, which is used to create a restore job.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRestoreJob``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RestoreJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7a3b5f4ffbb1175dbe8b23bfd591faea3b199652d132511028ff88f27342dc7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrErrorMessage")
    def attr_error_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ErrorMessage: Error message of restore job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrErrorMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrRestoreId")
    def attr_restore_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RestoreId: Restore job ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRestoreId"))

    @builtins.property
    @jsii.member(jsii_name="attrRestoreType")
    def attr_restore_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RestoreType: Restore type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRestoreType"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: Source type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Status: Restore job status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStatus"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RestoreJobProps":
        return typing.cast("RestoreJobProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e04fc9af4026feb9fd1d4958e99910ecb65b8de34b8372254d8cb59e6a66dc63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__073903ff72cd3c55c211ee42639ef450eab80a2f744c33a8ea2254ff844fafb5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76b4340f6d57ed740c7b99a4009b7c7393bbb08765c4f543a7f781741f9fb6ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RestoreJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "restore_type": "restoreType",
        "snapshot_id": "snapshotId",
        "source_client_id": "sourceClientId",
        "source_instance_id": "sourceInstanceId",
        "source_type": "sourceType",
        "target_client_id": "targetClientId",
        "target_instance_id": "targetInstanceId",
        "target_path": "targetPath",
        "vault_id": "vaultId",
    },
)
class RestoreJobProps:
    def __init__(
        self,
        *,
        restore_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        snapshot_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_client_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_client_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RestoreJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob

        :param restore_type: Property restoreType: Restore type.
        :param snapshot_id: Property snapshotId: Snapshot ID.
        :param source_client_id: Property sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        :param source_instance_id: Property sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        :param source_type: Property sourceType: Source type.
        :param target_client_id: Property targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        :param target_instance_id: Property targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
        :param target_path: Property targetPath: Target path. For instance, "/".
        :param vault_id: Property vaultId: Vault ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__601fbb97b77e17679dd1112af9bbd3b1d1e3e04115cba06a8fb83b0ec6ab1ef4)
            check_type(argname="argument restore_type", value=restore_type, expected_type=type_hints["restore_type"])
            check_type(argname="argument snapshot_id", value=snapshot_id, expected_type=type_hints["snapshot_id"])
            check_type(argname="argument source_client_id", value=source_client_id, expected_type=type_hints["source_client_id"])
            check_type(argname="argument source_instance_id", value=source_instance_id, expected_type=type_hints["source_instance_id"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument target_client_id", value=target_client_id, expected_type=type_hints["target_client_id"])
            check_type(argname="argument target_instance_id", value=target_instance_id, expected_type=type_hints["target_instance_id"])
            check_type(argname="argument target_path", value=target_path, expected_type=type_hints["target_path"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "restore_type": restore_type,
            "snapshot_id": snapshot_id,
            "source_client_id": source_client_id,
            "source_instance_id": source_instance_id,
            "source_type": source_type,
            "target_client_id": target_client_id,
            "target_instance_id": target_instance_id,
            "target_path": target_path,
            "vault_id": vault_id,
        }

    @builtins.property
    def restore_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property restoreType: Restore type.'''
        result = self._values.get("restore_type")
        assert result is not None, "Required property 'restore_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def snapshot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property snapshotId: Snapshot ID.'''
        result = self._values.get("snapshot_id")
        assert result is not None, "Required property 'snapshot_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_client_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceClientId: Source client ID.

        It should be provided when SourceType=FILE.
        '''
        result = self._values.get("source_client_id")
        assert result is not None, "Required property 'source_client_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceInstanceId: Source instance ID.

        It should be provided when SourceType=ECS_FILE.
        '''
        result = self._values.get("source_instance_id")
        assert result is not None, "Required property 'source_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceType: Source type.'''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_client_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetClientId: Target client ID.

        It should be provided when RestoreType=FILE.
        '''
        result = self._values.get("target_client_id")
        assert result is not None, "Required property 'target_client_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetInstanceId: Target instance ID.

        It should be provided when RestoreType=ECS_FILE.
        '''
        result = self._values.get("target_instance_id")
        assert result is not None, "Required property 'target_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetPath: Target path.

        For instance, "/".
        '''
        result = self._values.get("target_path")
        assert result is not None, "Required property 'target_path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vaultId: Vault ID.'''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RestoreJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBackupClients(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosBackupClients",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::BackupClients``, which is used to install backup clients on Elastic Compute Service (ECS) instances.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BackupClients`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBackupClientsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14dd4bbb398604cf129c5f4e61717c4b503c32488fbd4c982334e6fb453cfe16)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ecf8a3ffae86a01df9bf807dea5a248ea6800ac93d69023bcd86cb1dcffab5c4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrClientIds")
    def attr_client_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClientIds: ID list of clients installed in instances
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClientIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceIds: ID list of instances to install backup client
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2f2625c7bdfd51facf9e8d04a808398b7d0ecc984408b54c4387d3fac7cd8307)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceIds")
    def instance_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: instanceIds: ID list of instances to install backup client
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "instanceIds"))

    @instance_ids.setter
    def instance_ids(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2764a12e646b646856dc56ba6398521f3459e6aeca7571ff20b1c1a6098a52ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceIds", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosBackupClients.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosBackupClients.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosBackupClients.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86938888a3cf49b30e080ade260545ba514bc481ead00528df53e7e9c668ab5d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-hbr.RosBackupClients.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__27c08f64141ea82eb9e53396570a26f42841976a80c0e902e17154aafa30b699)
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
    jsii_type="@alicloud/ros-cdk-hbr.RosBackupClientsProps",
    jsii_struct_bases=[],
    name_mapping={"instance_ids": "instanceIds", "tags": "tags"},
)
class RosBackupClientsProps:
    def __init__(
        self,
        *,
        instance_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        tags: typing.Optional[typing.Sequence[typing.Union[RosBackupClients.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosBackupClients``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients

        :param instance_ids: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58dcd70a16c8885986d23b214fb714af73f5f7e58e743320e25c5f4c40cc32b0)
            check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_ids": instance_ids,
        }
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: instanceIds: ID list of instances to install backup client
        '''
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosBackupClients.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosBackupClients.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBackupClientsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCrossAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosCrossAccount",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::CrossAccount``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CrossAccount`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCrossAccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65b6a2e046b48d19aeb63191db7bb297aebee1e838533368d4b131cf26f334ea)
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
            type_hints = typing.get_type_hints(_typecheckingstub__253358b85fd23aa07f33653dc48761678a93dc9baee5f7f273f476b8867cd737)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__208ca0ba844d42004aae1b2e75714fbab5c56bd55fec31a6d1d8d5dcd251ef1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="alias")
    def alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alias: The alias of the cross-account authorization.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "alias"))

    @alias.setter
    def alias(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f1652c7f0f012b83582156657af5ced08c46c4d6a3f94d04a83a34720ee340f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alias", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountRoleName")
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountRoleName: The name of the RAM role that is used to grant permissions to the authorized account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountRoleName"))

    @cross_account_role_name.setter
    def cross_account_role_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7ca5ea2f5f299a39369ca9428f456bc26019b2a3e5ef22f7a49ad9d7bfa13ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountRoleName", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountType")
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountType: The type of the cross-account authorization. Valid values: CROSS_ACCOUNT, CROSS_ACCOUNT_BY_RD.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountType"))

    @cross_account_type.setter
    def cross_account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1ed56e7246546b4904ce612eb776aec45b761ec4d9eaf4cb62254529006e15a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountType", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountUserId")
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountUserId: The user ID of the account that you want to authorize to back up data in your account.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountUserId"))

    @cross_account_user_id.setter
    def cross_account_user_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e12edaf7ea60bfabf070c06f3a098a7b0faba103ecd5e2774e59b5c84f686d06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountUserId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosCrossAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "alias": "alias",
        "cross_account_role_name": "crossAccountRoleName",
        "cross_account_type": "crossAccountType",
        "cross_account_user_id": "crossAccountUserId",
    },
)
class RosCrossAccountProps:
    def __init__(
        self,
        *,
        alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_user_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCrossAccount``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount

        :param alias: 
        :param cross_account_role_name: 
        :param cross_account_type: 
        :param cross_account_user_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c297a23d00919b53eb704c39b91ab9c91beb0a6e7402988ba9ad10da3e03e0e4)
            check_type(argname="argument alias", value=alias, expected_type=type_hints["alias"])
            check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
            check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
            check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if alias is not None:
            self._values["alias"] = alias
        if cross_account_role_name is not None:
            self._values["cross_account_role_name"] = cross_account_role_name
        if cross_account_type is not None:
            self._values["cross_account_type"] = cross_account_type
        if cross_account_user_id is not None:
            self._values["cross_account_user_id"] = cross_account_user_id

    @builtins.property
    def alias(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alias: The alias of the cross-account authorization.
        '''
        result = self._values.get("alias")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountRoleName: The name of the RAM role that is used to grant permissions to the authorized account.
        '''
        result = self._values.get("cross_account_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountType: The type of the cross-account authorization. Valid values: CROSS_ACCOUNT, CROSS_ACCOUNT_BY_RD.
        '''
        result = self._values.get("cross_account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountUserId: The user ID of the account that you want to authorize to back up data in your account.
        '''
        result = self._values.get("cross_account_user_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCrossAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDbAgent(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosDbAgent",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::DbAgent``, which is used to install a Data Disaster Recovery client.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DbAgent`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDbAgentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2840154d5947ec58394507f1522c2e6b0b959100883361749287b2483028f712)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d88cb0a39db51bcc3e14083f8b1876928c75e74729ed32288f3109578964bc04)
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
        :Attribute: InstanceIds: Uni backup agent instance ids
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskId: Uni backup agent install task id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrUniBackupInstanceDetails")
    def attr_uni_backup_instance_details(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UniBackupInstanceDetails: Uni backup agent instance info details
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUniBackupInstanceDetails"))

    @builtins.property
    @jsii.member(jsii_name="attrUniBackupInstances")
    def attr_uni_backup_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UniBackupInstances: Uni backup agent instance info
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUniBackupInstances"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__e545887d6c7e40f20a548cfb8dc91eb167ed31f19b3a7486163ae18a75c3cb96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceInfo")
    def instance_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbAgent.InstanceInfoProperty"]]]:
        '''
        :Property: instanceInfo: Instance infos
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbAgent.InstanceInfoProperty"]]], jsii.get(self, "instanceInfo"))

    @instance_info.setter
    def instance_info(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbAgent.InstanceInfoProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__115d0018313df457def88501ee63ce25f15b0e1fbf7099b09b1003b4e45319c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceInfo", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountRoleName")
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountRoleName"))

    @cross_account_role_name.setter
    def cross_account_role_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4876fa91fb0e2eb3059846591df662121239d2fabae4e577ff938c63154a7f89)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountRoleName", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountType")
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountType: The type of cross-account backup. Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountType"))

    @cross_account_type.setter
    def cross_account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2923e776fa405a48010acff17335bd720c57f89f77d3c6720b9f7862c366f4f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountType", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountUserId")
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountUserId: The user ID of the original account for cross-account backup operations.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountUserId"))

    @cross_account_user_id.setter
    def cross_account_user_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__394a5fdb8f0cb5183dd4a250af2705497745d165b671fcdb2dfb5e738e74846f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountUserId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-hbr.RosDbAgent.InstanceInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_id": "instanceId",
            "source_type": "sourceType",
            "authentication_type": "authenticationType",
            "password": "password",
            "user_name": "userName",
        },
    )
    class InstanceInfoProperty:
        def __init__(
            self,
            *,
            instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            authentication_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_id: 
            :param source_type: 
            :param authentication_type: 
            :param password: 
            :param user_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__855704f415dec8c1f79614887c9b6636ee036bdc2b0481a2ba2ff2786c1e9e26)
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
                check_type(argname="argument authentication_type", value=authentication_type, expected_type=type_hints["authentication_type"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_id": instance_id,
                "source_type": source_type,
            }
            if authentication_type is not None:
                self._values["authentication_type"] = authentication_type
            if password is not None:
                self._values["password"] = password
            if user_name is not None:
                self._values["user_name"] = user_name

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: instanceId: ECS instance id
            '''
            result = self._values.get("instance_id")
            assert result is not None, "Required property 'instance_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def source_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: sourceType: Data source type, valid value: MYSQL, ORACLE, MSSQL
            '''
            result = self._values.get("source_type")
            assert result is not None, "Required property 'source_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def authentication_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: authenticationType: verification method, valid value: INSTANCE, ACCESS_KEY
            '''
            result = self._values.get("authentication_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: password: Database backup account password
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: userName: Database backup account username
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InstanceInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosDbAgentProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_info": "instanceInfo",
        "cross_account_role_name": "crossAccountRoleName",
        "cross_account_type": "crossAccountType",
        "cross_account_user_id": "crossAccountUserId",
    },
)
class RosDbAgentProps:
    def __init__(
        self,
        *,
        instance_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbAgent.InstanceInfoProperty, typing.Dict[builtins.str, typing.Any]]]]],
        cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_user_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDbAgent``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent

        :param instance_info: 
        :param cross_account_role_name: 
        :param cross_account_type: 
        :param cross_account_user_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cdc942c087f1229f8dc8a7d7e28adbd7eda1d09d7f7f1b16db544489e5054201)
            check_type(argname="argument instance_info", value=instance_info, expected_type=type_hints["instance_info"])
            check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
            check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
            check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_info": instance_info,
        }
        if cross_account_role_name is not None:
            self._values["cross_account_role_name"] = cross_account_role_name
        if cross_account_type is not None:
            self._values["cross_account_type"] = cross_account_type
        if cross_account_user_id is not None:
            self._values["cross_account_user_id"] = cross_account_user_id

    @builtins.property
    def instance_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDbAgent.InstanceInfoProperty]]]:
        '''
        :Property: instanceInfo: Instance infos
        '''
        result = self._values.get("instance_info")
        assert result is not None, "Required property 'instance_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDbAgent.InstanceInfoProperty]]], result)

    @builtins.property
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
        '''
        result = self._values.get("cross_account_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountType: The type of cross-account backup. Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
        '''
        result = self._values.get("cross_account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountUserId: The user ID of the original account for cross-account backup operations.
        '''
        result = self._values.get("cross_account_user_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDbAgentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDbPlan(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosDbPlan",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::DbPlan``, which is used to create a backup plan.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DbPlan`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDbPlanProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__937e5b61ec280e35d7d046abe93c7849f00a8131f95b14788ff0153621c26f84)
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
            type_hints = typing.get_type_hints(_typecheckingstub__82c48d458dd80669ddc02d12a7071fa159c102d32152797aedfff939cda1e558)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrContinuousPlan")
    def attr_continuous_plan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContinuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContinuousPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrContinuousUuid")
    def attr_continuous_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContinuousUuid: Uuid of continuous backup plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContinuousUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrCumulativePlan")
    def attr_cumulative_plan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCumulativePlan"))

    @builtins.property
    @jsii.member(jsii_name="attrCumulativeUuid")
    def attr_cumulative_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CumulativeUuid: Uuid of cumulative plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCumulativeUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrDbPlanName")
    def attr_db_plan_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DbPlanName: Display name of the backup plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbPlanName"))

    @builtins.property
    @jsii.member(jsii_name="attrFullPlan")
    def attr_full_plan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFullPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrFullUuid")
    def attr_full_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FullUuid: Uuid of full backup plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFullUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrHostUuid")
    def attr_host_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostUuid: Uuid of the host of the database instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrIncPlan")
    def attr_inc_plan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IncPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIncPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrIncUuid")
    def attr_inc_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IncUuid: Uuid of the incremental bakcup plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIncUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceUuid")
    def attr_instance_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceUuid: Uuid of database instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrLogPlan")
    def attr_log_plan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LogPlan: Log backup plan schedule.More details see FullPlan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrLogUuid")
    def attr_log_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LogUuid: Uuid of the log backup plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxRateLimit")
    def attr_max_rate_limit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaxRateLimit: Max rate limit for backup job,
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxRateLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxRetrySeconds")
    def attr_max_retry_seconds(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaxRetrySeconds: Max retry seconds on network failure.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxRetrySeconds"))

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOptions"))

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PlanId: Id of the backup plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTarget")
    def attr_target(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Target: Target vault to backup.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTarget"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbPlanName")
    def db_plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbPlanName: Display name of the backup plan.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbPlanName"))

    @db_plan_name.setter
    def db_plan_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f00de1ae56e98d3639be7204a61f9d0fbcc10234e81568c678999fc0ac01228)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbPlanName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8724bc40c9b9b9c24d32c0a1d53fbb1d9f085ba1f06d5d305cdfdccb67a2ec6b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="hostUuid")
    def host_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostUuid: Uuid of the host of the database instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "hostUuid"))

    @host_uuid.setter
    def host_uuid(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__856ddce93cca9298174cbe361ebe43559dfa75324368f4c6c9944c6c3c4170e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostUuid", value)

    @builtins.property
    @jsii.member(jsii_name="sourceType")
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb481e7234f241f04381cd23b396f19dbc0bbbe52785dd0e661e52363cbc013d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)

    @builtins.property
    @jsii.member(jsii_name="vaultId")
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vaultId"))

    @vault_id.setter
    def vault_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__021e02f944dcf1a6777b67c6ac60a0cfa0fcb59572b8fbd868d09dc22cd6918e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultId", value)

    @builtins.property
    @jsii.member(jsii_name="continuousPlan")
    def continuous_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: continuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "continuousPlan"))

    @continuous_plan.setter
    def continuous_plan(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__791d540c22ebf897fd432c6336ae95b8d37eced8c474954b51f17d021ebd5e0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "continuousPlan", value)

    @builtins.property
    @jsii.member(jsii_name="cumulativePlan")
    def cumulative_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cumulativePlan"))

    @cumulative_plan.setter
    def cumulative_plan(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de735986ba324df62fe9d7b7e1866b3580b710403b8072ff1c3bdcf5972b8fb8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cumulativePlan", value)

    @builtins.property
    @jsii.member(jsii_name="fullPlan")
    def full_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fullPlan"))

    @full_plan.setter
    def full_plan(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8ac9b7ac8ebb21deab66c37bd551c20e31e8dca892a74fd42f8d931191fea0c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fullPlan", value)

    @builtins.property
    @jsii.member(jsii_name="incPlan")
    def inc_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: incPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "incPlan"))

    @inc_plan.setter
    def inc_plan(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b06eed20a8f1a9e01c77009c8839a8d36992f4b7d93fa13c640e44c7d5b905c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "incPlan", value)

    @builtins.property
    @jsii.member(jsii_name="instanceUuid")
    def instance_uuid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceUuid: Uuid of database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceUuid"))

    @instance_uuid.setter
    def instance_uuid(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a15e6ec5559f93e96439d028d228261674d57b8b182ec983525abc653298fc15)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceUuid", value)

    @builtins.property
    @jsii.member(jsii_name="logPlan")
    def log_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logPlan: Log backup plan schedule.More details see FullPlan.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logPlan"))

    @log_plan.setter
    def log_plan(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eaf9e21fbec79460de0634f28e81b13676354c0b081410ff72468c3c1b736326)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logPlan", value)

    @builtins.property
    @jsii.member(jsii_name="maxRateLimit")
    def max_rate_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxRateLimit: Max rate limit for backup job,
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxRateLimit"))

    @max_rate_limit.setter
    def max_rate_limit(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1a3f072cc61f5369c97bbdfbf838e37b4060f8363f9a036764e7b3bbc9db9cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxRateLimit", value)

    @builtins.property
    @jsii.member(jsii_name="maxRetrySeconds")
    def max_retry_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxRetrySeconds: Max retry seconds on network failure.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxRetrySeconds"))

    @max_retry_seconds.setter
    def max_retry_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf7eced39ebe4d68fe7f1bd19bf49aa57fadff66cd0dedf1de45c86e956e3b6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxRetrySeconds", value)

    @builtins.property
    @jsii.member(jsii_name="options")
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "options"))

    @options.setter
    def options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4935180342fb153a9addb9d4f9b7b0bef5db38785e9033dc3b7a8405eed45b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "options", value)

    @builtins.property
    @jsii.member(jsii_name="source")
    def source(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbPlan.SourceProperty"]]:
        '''
        :Property: source: Which database instance or database will be backup.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbPlan.SourceProperty"]], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbPlan.SourceProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c68cde74aef8beb5133eb88426d23e7d7322dd59cb92faf84c3ac3277bee8dc9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "source", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-hbr.RosDbPlan.SourceProperty",
        jsii_struct_bases=[],
        name_mapping={"entries": "entries"},
    )
    class SourceProperty:
        def __init__(
            self,
            *,
            entries: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param entries: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b4dcdfb2615ea02dfbae425dc8a5f8866f851b972b6c5dd92d7e61e2559179a3)
                check_type(argname="argument entries", value=entries, expected_type=type_hints["entries"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if entries is not None:
                self._values["entries"] = entries

        @builtins.property
        def entries(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: entries: Backup database instance or databases or tables. For Oracle, use ["oracle://${instanceName}", "oracle://${instanceName}/archivelog"], ${instanceName} is the name of the oracle database instance, which can be get from dbAgent resource. For Mysql, use "mysql://${instanceName}". For SQL Server,  use ["mssql://${instanceName}/${databse1}", "mssql://${instanceName}/${databse2}"], ${databse} can be get from dbAgent resource(MSSQL)
            '''
            result = self._values.get("entries")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosDbPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_plan_name": "dbPlanName",
        "host_uuid": "hostUuid",
        "source_type": "sourceType",
        "vault_id": "vaultId",
        "continuous_plan": "continuousPlan",
        "cumulative_plan": "cumulativePlan",
        "full_plan": "fullPlan",
        "inc_plan": "incPlan",
        "instance_uuid": "instanceUuid",
        "log_plan": "logPlan",
        "max_rate_limit": "maxRateLimit",
        "max_retry_seconds": "maxRetrySeconds",
        "options": "options",
        "source": "source",
    },
)
class RosDbPlanProps:
    def __init__(
        self,
        *,
        db_plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_uuid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        continuous_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cumulative_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        full_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        inc_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_uuid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_rate_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_retry_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbPlan.SourceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosDbPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan

        :param db_plan_name: 
        :param host_uuid: 
        :param source_type: 
        :param vault_id: 
        :param continuous_plan: 
        :param cumulative_plan: 
        :param full_plan: 
        :param inc_plan: 
        :param instance_uuid: 
        :param log_plan: 
        :param max_rate_limit: 
        :param max_retry_seconds: 
        :param options: 
        :param source: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89148a7709920c9cd022cb49d6de5a3d6550edfe5673fcf368380d242485f98d)
            check_type(argname="argument db_plan_name", value=db_plan_name, expected_type=type_hints["db_plan_name"])
            check_type(argname="argument host_uuid", value=host_uuid, expected_type=type_hints["host_uuid"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument continuous_plan", value=continuous_plan, expected_type=type_hints["continuous_plan"])
            check_type(argname="argument cumulative_plan", value=cumulative_plan, expected_type=type_hints["cumulative_plan"])
            check_type(argname="argument full_plan", value=full_plan, expected_type=type_hints["full_plan"])
            check_type(argname="argument inc_plan", value=inc_plan, expected_type=type_hints["inc_plan"])
            check_type(argname="argument instance_uuid", value=instance_uuid, expected_type=type_hints["instance_uuid"])
            check_type(argname="argument log_plan", value=log_plan, expected_type=type_hints["log_plan"])
            check_type(argname="argument max_rate_limit", value=max_rate_limit, expected_type=type_hints["max_rate_limit"])
            check_type(argname="argument max_retry_seconds", value=max_retry_seconds, expected_type=type_hints["max_retry_seconds"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_plan_name": db_plan_name,
            "host_uuid": host_uuid,
            "source_type": source_type,
            "vault_id": vault_id,
        }
        if continuous_plan is not None:
            self._values["continuous_plan"] = continuous_plan
        if cumulative_plan is not None:
            self._values["cumulative_plan"] = cumulative_plan
        if full_plan is not None:
            self._values["full_plan"] = full_plan
        if inc_plan is not None:
            self._values["inc_plan"] = inc_plan
        if instance_uuid is not None:
            self._values["instance_uuid"] = instance_uuid
        if log_plan is not None:
            self._values["log_plan"] = log_plan
        if max_rate_limit is not None:
            self._values["max_rate_limit"] = max_rate_limit
        if max_retry_seconds is not None:
            self._values["max_retry_seconds"] = max_retry_seconds
        if options is not None:
            self._values["options"] = options
        if source is not None:
            self._values["source"] = source

    @builtins.property
    def db_plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbPlanName: Display name of the backup plan.
        '''
        result = self._values.get("db_plan_name")
        assert result is not None, "Required property 'db_plan_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostUuid: Uuid of the host of the database instance.
        '''
        result = self._values.get("host_uuid")
        assert result is not None, "Required property 'host_uuid' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
        '''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def continuous_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: continuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
        '''
        result = self._values.get("continuous_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cumulative_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
        '''
        result = self._values.get("cumulative_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def full_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        result = self._values.get("full_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def inc_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: incPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
        '''
        result = self._values.get("inc_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_uuid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceUuid: Uuid of database instance.
        '''
        result = self._values.get("instance_uuid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logPlan: Log backup plan schedule.More details see FullPlan.
        '''
        result = self._values.get("log_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_rate_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxRateLimit: Max rate limit for backup job,
        '''
        result = self._values.get("max_rate_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_retry_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxRetrySeconds: Max retry seconds on network failure.
        '''
        result = self._values.get("max_retry_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDbPlan.SourceProperty]]:
        '''
        :Property: source: Which database instance or database will be backup.
        '''
        result = self._values.get("source")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDbPlan.SourceProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDbPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDbVault(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosDbVault",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::DbVault``, which is used to create a mirror vault.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DbVault`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDbVaultProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ef53fa5fcfccaf30d5fd36485dd604ddc6129939c733d769cf7245d4fc87d88)
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
            type_hints = typing.get_type_hints(_typecheckingstub__73ac9048f4e4047201173d0942e2667a33ed1b74543642f3ffc27f9287d153c3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Description of the vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrRetentionDays")
    def attr_retention_days(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RetentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRetentionDays"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultId: Vault ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultName: Display name of the vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultName"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultRegionId")
    def attr_vault_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultRegionId: The region ID to create the vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultRegionId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__9ce45db5c28c521b4acd0b8cafe55acf62b7c06c0d32d4d204cb14def3f9d742)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="retentionDays")
    def retention_days(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "retentionDays"))

    @retention_days.setter
    def retention_days(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05a3b2ab310cf3c8166eff5323974c7b1919c788d5e1d1ba7337eee37ea2053a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "retentionDays", value)

    @builtins.property
    @jsii.member(jsii_name="vaultName")
    def vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultName: Display name of the vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vaultName"))

    @vault_name.setter
    def vault_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76754f024ebd11e3fb3ee861fe21ff7e6c46fa944e6243da37f878356a170ce8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultName", value)

    @builtins.property
    @jsii.member(jsii_name="vaultRegionId")
    def vault_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultRegionId: The region ID to create the vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vaultRegionId"))

    @vault_region_id.setter
    def vault_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0d4f8fd0e57c6a2af772b98efb19860c2f1efd4ce14a1bbd11b65bb3cfec31d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description of the vault.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c6486e512ad41ee91cb343d8c0743ec8be89e470f53f57c0d6f549ec36d20c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDbVault.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosDbVault.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDbVault.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2f61788b93699c18ed391b24257e7905136add5a3beca232aaf8893a32f35b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-hbr.RosDbVault.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__4b7d2a8d01e0b24bca084e738f31475e843323ddf17b7f8b033967160851e64a)
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
    jsii_type="@alicloud/ros-cdk-hbr.RosDbVaultProps",
    jsii_struct_bases=[],
    name_mapping={
        "retention_days": "retentionDays",
        "vault_name": "vaultName",
        "vault_region_id": "vaultRegionId",
        "description": "description",
        "tags": "tags",
    },
)
class RosDbVaultProps:
    def __init__(
        self,
        *,
        retention_days: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        vault_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDbVault.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosDbVault``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault

        :param retention_days: 
        :param vault_name: 
        :param vault_region_id: 
        :param description: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4851223cd8c3a46305d591fac08dd1a6d2d82296f2a2cfd6b22fc5f9e5cb37dc)
            check_type(argname="argument retention_days", value=retention_days, expected_type=type_hints["retention_days"])
            check_type(argname="argument vault_name", value=vault_name, expected_type=type_hints["vault_name"])
            check_type(argname="argument vault_region_id", value=vault_region_id, expected_type=type_hints["vault_region_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "retention_days": retention_days,
            "vault_name": vault_name,
            "vault_region_id": vault_region_id,
        }
        if description is not None:
            self._values["description"] = description
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def retention_days(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
        '''
        result = self._values.get("retention_days")
        assert result is not None, "Required property 'retention_days' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultName: Display name of the vault.
        '''
        result = self._values.get("vault_name")
        assert result is not None, "Required property 'vault_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultRegionId: The region ID to create the vault.
        '''
        result = self._values.get("vault_region_id")
        assert result is not None, "Required property 'vault_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description of the vault.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDbVault.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDbVault.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDbVaultProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEcsBackupPlan(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosEcsBackupPlan",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::EcsBackupPlan``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EcsBackupPlan`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ecsbackupplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEcsBackupPlanProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__827dc9d1b0914471a35fc1b645bf2aa9f963d92c38923377be1e471bf6f6d75b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fe83f27babf947dc8d2405b1c751dd278b7d7f1d9c9610b0190f20a0e288a6f9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PlanId: The ID of the backup plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="backupType")
    def backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backupType: Backup type. Valid values: COMPLETE.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "backupType"))

    @backup_type.setter
    def backup_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62a60d147c08ef7d0f800aabc70890c2b379cbb0c2d4167d4a33eebbc2ab559d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aefcd226dee968e0b84f0f6478374e0063a97d2dfa009a6760ae2effc80e2cf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of ECS instance. The ecs backup client must have been installed on the host.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__acb400fa381a836848220f44fda31383cd0b743a5c2d81cdf11d6e2c245116cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="planName")
    def plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "planName"))

    @plan_name.setter
    def plan_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5af982a84136cd071805edea4ef4ced8c21943d0521851ba18832b35af5ac67d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "planName", value)

    @builtins.property
    @jsii.member(jsii_name="retention")
    def retention(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retention: Backup retention days, the minimum is 1.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "retention"))

    @retention.setter
    def retention(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15be22d14520f346a9542362c5339ecb9ea0d87aa617467ca538b272001197ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "retention", value)

    @builtins.property
    @jsii.member(jsii_name="schedule")
    def schedule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "schedule"))

    @schedule.setter
    def schedule(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__983052b6c7d39d7b4e5aef248a46ffe7ab56b9ea476b0a94fa2d30e560461476)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "schedule", value)

    @builtins.property
    @jsii.member(jsii_name="vaultId")
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: The ID of backup vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vaultId"))

    @vault_id.setter
    def vault_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ee4fdf8b2359f4f976d13b7e081298aad8c6b817accab4e0a7ba3ba6fd34d3a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultId", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountRoleName")
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountRoleName"))

    @cross_account_role_name.setter
    def cross_account_role_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28e7c120aef5b753b780c4063e8c7954d6fb688fb2544535a3e49b92bcb6d898)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountRoleName", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountType")
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountType"))

    @cross_account_type.setter
    def cross_account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24f76da5f68950c22a9642b22f82289a851962e12b3b1e88cd773635cab8e453)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountType", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountUserId")
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountUserId: The original account ID of the cross account backup managed by the current account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountUserId"))

    @cross_account_user_id.setter
    def cross_account_user_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc786a5ef7945f88f5ebf41293af17fee2faf5e1b907fde86a85102b363f68e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountUserId", value)

    @builtins.property
    @jsii.member(jsii_name="detail")
    def detail(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: detail: The detail of the backup plan.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "detail"))

    @detail.setter
    def detail(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b23fcbb103b2cfa9cf36d8908c328ddd497c056ff3279f5966a4cb08ade26080)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "detail", value)

    @builtins.property
    @jsii.member(jsii_name="disabled")
    def disabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disabled: Whether to disable the backup task. Valid values: true, false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disabled"))

    @disabled.setter
    def disabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3435f7be795a6aecc4aa1cbd06dd22dfb876eddc4ac0f9363fb2955f9db1a97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disabled", value)

    @builtins.property
    @jsii.member(jsii_name="exclude")
    def exclude(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: exclude: The exclude paths of the backup plan.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "exclude"))

    @exclude.setter
    def exclude(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b7f04b2a7047ac4d2bbe2cbfbd7409538a986496fb857193209609191642900)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "exclude", value)

    @builtins.property
    @jsii.member(jsii_name="include")
    def include(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: include: The include paths of the backup plan.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "include"))

    @include.setter
    def include(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f72252a9731df8192ae5fc0d7dd1b7c5e3a6f9a79028a05b553880251888a251)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "include", value)

    @builtins.property
    @jsii.member(jsii_name="options")
    def options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "options"))

    @options.setter
    def options(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9543927ad0e2f26652566b7e7ddd94f94421941d10a1c2c10c21efcd6dde81bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "options", value)

    @builtins.property
    @jsii.member(jsii_name="paths")
    def paths(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: paths: The paths of the backup plan.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "paths"))

    @paths.setter
    def paths(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__264a6554ea2381ecb00c90aa02e47c4487f6fda5276a4b14aedfbc89ebc94de2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paths", value)

    @builtins.property
    @jsii.member(jsii_name="speedLimit")
    def speed_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: speedLimit: The speed limit of the backup plan.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "speedLimit"))

    @speed_limit.setter
    def speed_limit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6987136583bf4ad86f26663169f48f9e72a61e4f95bb59a839f01c0ab56c0353)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "speedLimit", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosEcsBackupPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_type": "backupType",
        "instance_id": "instanceId",
        "plan_name": "planName",
        "retention": "retention",
        "schedule": "schedule",
        "vault_id": "vaultId",
        "cross_account_role_name": "crossAccountRoleName",
        "cross_account_type": "crossAccountType",
        "cross_account_user_id": "crossAccountUserId",
        "detail": "detail",
        "disabled": "disabled",
        "exclude": "exclude",
        "include": "include",
        "options": "options",
        "paths": "paths",
        "speed_limit": "speedLimit",
    },
)
class RosEcsBackupPlanProps:
    def __init__(
        self,
        *,
        backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        detail: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        include: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        paths: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        speed_limit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEcsBackupPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ecsbackupplan

        :param backup_type: 
        :param instance_id: 
        :param plan_name: 
        :param retention: 
        :param schedule: 
        :param vault_id: 
        :param cross_account_role_name: 
        :param cross_account_type: 
        :param cross_account_user_id: 
        :param detail: 
        :param disabled: 
        :param exclude: 
        :param include: 
        :param options: 
        :param paths: 
        :param speed_limit: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ffca1ba93b8ae6a281f59ad20c4d1c2eb0be7962bb523283a923e48a40a09a5)
            check_type(argname="argument backup_type", value=backup_type, expected_type=type_hints["backup_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument plan_name", value=plan_name, expected_type=type_hints["plan_name"])
            check_type(argname="argument retention", value=retention, expected_type=type_hints["retention"])
            check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
            check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
            check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
            check_type(argname="argument exclude", value=exclude, expected_type=type_hints["exclude"])
            check_type(argname="argument include", value=include, expected_type=type_hints["include"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
            check_type(argname="argument paths", value=paths, expected_type=type_hints["paths"])
            check_type(argname="argument speed_limit", value=speed_limit, expected_type=type_hints["speed_limit"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_type": backup_type,
            "instance_id": instance_id,
            "plan_name": plan_name,
            "retention": retention,
            "schedule": schedule,
            "vault_id": vault_id,
        }
        if cross_account_role_name is not None:
            self._values["cross_account_role_name"] = cross_account_role_name
        if cross_account_type is not None:
            self._values["cross_account_type"] = cross_account_type
        if cross_account_user_id is not None:
            self._values["cross_account_user_id"] = cross_account_user_id
        if detail is not None:
            self._values["detail"] = detail
        if disabled is not None:
            self._values["disabled"] = disabled
        if exclude is not None:
            self._values["exclude"] = exclude
        if include is not None:
            self._values["include"] = include
        if options is not None:
            self._values["options"] = options
        if paths is not None:
            self._values["paths"] = paths
        if speed_limit is not None:
            self._values["speed_limit"] = speed_limit

    @builtins.property
    def backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backupType: Backup type. Valid values: COMPLETE.
        '''
        result = self._values.get("backup_type")
        assert result is not None, "Required property 'backup_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of ECS instance. The ecs backup client must have been installed on the host.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        '''
        result = self._values.get("plan_name")
        assert result is not None, "Required property 'plan_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retention(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retention: Backup retention days, the minimum is 1.
        '''
        result = self._values.get("retention")
        assert result is not None, "Required property 'retention' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schedule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        '''
        result = self._values.get("schedule")
        assert result is not None, "Required property 'schedule' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: The ID of backup vault.
        '''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
        '''
        result = self._values.get("cross_account_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        '''
        result = self._values.get("cross_account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountUserId: The original account ID of the cross account backup managed by the current account.
        '''
        result = self._values.get("cross_account_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def detail(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: detail: The detail of the backup plan.
        '''
        result = self._values.get("detail")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def disabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disabled: Whether to disable the backup task. Valid values: true, false.
        '''
        result = self._values.get("disabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: exclude: The exclude paths of the backup plan.
        '''
        result = self._values.get("exclude")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def include(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: include: The include paths of the backup plan.
        '''
        result = self._values.get("include")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: options: Windows operating system with application consistency using VSS, e.g: {"UseVSS":false}.
        '''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def paths(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: paths: The paths of the backup plan.
        '''
        result = self._values.get("paths")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def speed_limit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: speedLimit: The speed limit of the backup plan.
        '''
        result = self._values.get("speed_limit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEcsBackupPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNasBackupPlan(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosNasBackupPlan",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::NasBackupPlan``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``NasBackupPlan`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-nasbackupplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNasBackupPlanProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d155f43a14d2bc3283391d04f980b81669b0a3350c31667cc3fca783841415a4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b99ef25207f08e75f17132c6074298477eb5146cfc4a9654b736ad812070e4cc)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PlanId: The ID of the backup plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="backupType")
    def backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backupType: Backup type. Valid values: COMPLETE.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "backupType"))

    @backup_type.setter
    def backup_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36988cee0206cd47c98526a6598a0abd0ed88d68653adfc142eb42c6795c64e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dcbd94a91f63d0dcf08f63e574b9357188e6372d98d0f6d4e5e968ae447d2020)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fileSystemId")
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: The ID of the file system.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "fileSystemId"))

    @file_system_id.setter
    def file_system_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47449af8ab8048be9e756747082c79708f564141787cd93691dc625fce8b9ae6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileSystemId", value)

    @builtins.property
    @jsii.member(jsii_name="paths")
    def paths(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: paths: The paths of the backup plan.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "paths"))

    @paths.setter
    def paths(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bf93dd6ccf22a58f099d304c31d386ef198dec4a3003cd963e62769cad86424)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paths", value)

    @builtins.property
    @jsii.member(jsii_name="planName")
    def plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "planName"))

    @plan_name.setter
    def plan_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0972ea47657202ecb18cdff123f68d0b8ad0fd3b3cadfc883e24c5249b8e660)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "planName", value)

    @builtins.property
    @jsii.member(jsii_name="retention")
    def retention(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retention: Backup retention days, the minimum is 1.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "retention"))

    @retention.setter
    def retention(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0afa47b2318b47077b929178cb3a9b4c85395f8b41fa716220ea82633e015e0a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "retention", value)

    @builtins.property
    @jsii.member(jsii_name="schedule")
    def schedule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "schedule"))

    @schedule.setter
    def schedule(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bafd8fcbee697b377b2e2232ee72ce5379c735a3e5b646ffd4de148f614ebfd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "schedule", value)

    @builtins.property
    @jsii.member(jsii_name="vaultId")
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: The ID of backup vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vaultId"))

    @vault_id.setter
    def vault_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0891c54b293ffb019975eee6bd095e823a4960288c4964f1516980d3b9bbcbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultId", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountRoleName")
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountRoleName"))

    @cross_account_role_name.setter
    def cross_account_role_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__baf3cdc7b5044afb46214b3196e6c2e0d7f226b0869fe5ca9a89cca30c7b23f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountRoleName", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountType")
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountType"))

    @cross_account_type.setter
    def cross_account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48fe1904036ac8f66c066235d3adca0f7bda117a20c67c704b480a546a458974)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountType", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountUserId")
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountUserId: The original account ID of the cross account backup managed by the current account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountUserId"))

    @cross_account_user_id.setter
    def cross_account_user_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d783feae04d792544863d8431ce15cd102f3c0457a4184f3b30d3b957ffbc863)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountUserId", value)

    @builtins.property
    @jsii.member(jsii_name="disabled")
    def disabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disabled: Whether to disable the backup task. Valid values: true, false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disabled"))

    @disabled.setter
    def disabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e2ffb4b40d1da4def45f81be2e0417a3a128eb7b2a56483fae355347d59898d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disabled", value)

    @builtins.property
    @jsii.member(jsii_name="options")
    def options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: options: This parameter specifies whether to use Windows VSS to define a backup path.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "options"))

    @options.setter
    def options(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32da613b4f9e2691ac7d83952b7611a684c5765fcc65895d4574e6a0525fb044)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "options", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosNasBackupPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_type": "backupType",
        "file_system_id": "fileSystemId",
        "paths": "paths",
        "plan_name": "planName",
        "retention": "retention",
        "schedule": "schedule",
        "vault_id": "vaultId",
        "cross_account_role_name": "crossAccountRoleName",
        "cross_account_type": "crossAccountType",
        "cross_account_user_id": "crossAccountUserId",
        "disabled": "disabled",
        "options": "options",
    },
)
class RosNasBackupPlanProps:
    def __init__(
        self,
        *,
        backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        paths: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosNasBackupPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-nasbackupplan

        :param backup_type: 
        :param file_system_id: 
        :param paths: 
        :param plan_name: 
        :param retention: 
        :param schedule: 
        :param vault_id: 
        :param cross_account_role_name: 
        :param cross_account_type: 
        :param cross_account_user_id: 
        :param disabled: 
        :param options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__641c20b54eb8061b4b41f8b884201f3c7094822214d2490cf668e01bff353b49)
            check_type(argname="argument backup_type", value=backup_type, expected_type=type_hints["backup_type"])
            check_type(argname="argument file_system_id", value=file_system_id, expected_type=type_hints["file_system_id"])
            check_type(argname="argument paths", value=paths, expected_type=type_hints["paths"])
            check_type(argname="argument plan_name", value=plan_name, expected_type=type_hints["plan_name"])
            check_type(argname="argument retention", value=retention, expected_type=type_hints["retention"])
            check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
            check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
            check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
            check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
            check_type(argname="argument options", value=options, expected_type=type_hints["options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_type": backup_type,
            "file_system_id": file_system_id,
            "paths": paths,
            "plan_name": plan_name,
            "retention": retention,
            "schedule": schedule,
            "vault_id": vault_id,
        }
        if cross_account_role_name is not None:
            self._values["cross_account_role_name"] = cross_account_role_name
        if cross_account_type is not None:
            self._values["cross_account_type"] = cross_account_type
        if cross_account_user_id is not None:
            self._values["cross_account_user_id"] = cross_account_user_id
        if disabled is not None:
            self._values["disabled"] = disabled
        if options is not None:
            self._values["options"] = options

    @builtins.property
    def backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backupType: Backup type. Valid values: COMPLETE.
        '''
        result = self._values.get("backup_type")
        assert result is not None, "Required property 'backup_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def file_system_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: fileSystemId: The ID of the file system.
        '''
        result = self._values.get("file_system_id")
        assert result is not None, "Required property 'file_system_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def paths(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: paths: The paths of the backup plan.
        '''
        result = self._values.get("paths")
        assert result is not None, "Required property 'paths' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        '''
        result = self._values.get("plan_name")
        assert result is not None, "Required property 'plan_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retention(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retention: Backup retention days, the minimum is 1.
        '''
        result = self._values.get("retention")
        assert result is not None, "Required property 'retention' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schedule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        '''
        result = self._values.get("schedule")
        assert result is not None, "Required property 'schedule' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: The ID of backup vault.
        '''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
        '''
        result = self._values.get("cross_account_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        '''
        result = self._values.get("cross_account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountUserId: The original account ID of the cross account backup managed by the current account.
        '''
        result = self._values.get("cross_account_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disabled: Whether to disable the backup task. Valid values: true, false.
        '''
        result = self._values.get("disabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: options: This parameter specifies whether to use Windows VSS to define a backup path.
        '''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNasBackupPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosOssBackupPlan(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosOssBackupPlan",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::OssBackupPlan``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``OssBackupPlan`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ossbackupplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosOssBackupPlanProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24e833f4d069264cc8b1c6f96018cffc10b0271119088a462cd7fca9b2eb4c12)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cf6988759b7224f34f08d817cd3670b66c3e6bddecbe51d70eccb035f28878d8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PlanId: The ID of the backup plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="backupType")
    def backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backupType: Backup type. Valid values: COMPLETE.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "backupType"))

    @backup_type.setter
    def backup_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ea098d36043e06533497babbee035568155f486073a7f28bbd8f06d44e9b39f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupType", value)

    @builtins.property
    @jsii.member(jsii_name="bucket")
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucket: The name of OSS bucket.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bucket"))

    @bucket.setter
    def bucket(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92c8ed5d2613ae8385bf1e9fcf5d051d69fd31989da4a8a9017f4c83c71bc400)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucket", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__393a7bc5ce6afdc4574da4ff291f406ca2e85f6a68360df9adead92378ecb8fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="planName")
    def plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "planName"))

    @plan_name.setter
    def plan_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c0e4aad0ee336f6dac3a588f0da633547e6e1268301ed32ad9ffc047f9dd544)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "planName", value)

    @builtins.property
    @jsii.member(jsii_name="retention")
    def retention(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retention: Backup retention days, the minimum is 1.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "retention"))

    @retention.setter
    def retention(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8207e7988d26f60f3bcc18bfc9bbfd9400ae098c5115b58e38f8252cbceced3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "retention", value)

    @builtins.property
    @jsii.member(jsii_name="schedule")
    def schedule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "schedule"))

    @schedule.setter
    def schedule(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82346e6199dd8dd3c5a147ad7b4a2731bc1c75cc62db08759dbf27f36d401697)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "schedule", value)

    @builtins.property
    @jsii.member(jsii_name="vaultId")
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: The ID of backup vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vaultId"))

    @vault_id.setter
    def vault_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d8f085936f37f75b2102dc9b87542680f3037690e7e074ef21cbd18446a51e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultId", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountRoleName")
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountRoleName"))

    @cross_account_role_name.setter
    def cross_account_role_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a667fb14c86b7d13a871c4785f927883d235f2f97d4951151211cedac3c9128)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountRoleName", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountType")
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountType"))

    @cross_account_type.setter
    def cross_account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47e0f9f3d4e99ccacd99e1d09b87803aab26d080d93a0d996b6b5d9a69b6fdf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountType", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountUserId")
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountUserId: The original account ID of the cross account backup managed by the current account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountUserId"))

    @cross_account_user_id.setter
    def cross_account_user_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6c4524eec9b5dd0fb9e10e611ca10db063b326927aa2aaa2e3f72d392ec049a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountUserId", value)

    @builtins.property
    @jsii.member(jsii_name="disabled")
    def disabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disabled: Whether to disable the backup task. Valid values: true, false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disabled"))

    @disabled.setter
    def disabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47241b289d9694848995173ea07a609bbaa8a82b61b94510d88fca3acc5b297f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disabled", value)

    @builtins.property
    @jsii.member(jsii_name="prefix")
    def prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: prefix: Backup prefix. Once specified, only objects with matching prefixes will be backed up.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "prefix"))

    @prefix.setter
    def prefix(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33a2695b139abf5b9eb78a69395a6a1acda30a4acc3c8fc046b05c87f329b253)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prefix", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosOssBackupPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_type": "backupType",
        "bucket": "bucket",
        "plan_name": "planName",
        "retention": "retention",
        "schedule": "schedule",
        "vault_id": "vaultId",
        "cross_account_role_name": "crossAccountRoleName",
        "cross_account_type": "crossAccountType",
        "cross_account_user_id": "crossAccountUserId",
        "disabled": "disabled",
        "prefix": "prefix",
    },
)
class RosOssBackupPlanProps:
    def __init__(
        self,
        *,
        backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosOssBackupPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ossbackupplan

        :param backup_type: 
        :param bucket: 
        :param plan_name: 
        :param retention: 
        :param schedule: 
        :param vault_id: 
        :param cross_account_role_name: 
        :param cross_account_type: 
        :param cross_account_user_id: 
        :param disabled: 
        :param prefix: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1ff87a2ed9ab236c4618c8a28e6287daf0408678855a6d6e330a54c713b3956)
            check_type(argname="argument backup_type", value=backup_type, expected_type=type_hints["backup_type"])
            check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
            check_type(argname="argument plan_name", value=plan_name, expected_type=type_hints["plan_name"])
            check_type(argname="argument retention", value=retention, expected_type=type_hints["retention"])
            check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
            check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
            check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
            check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
            check_type(argname="argument prefix", value=prefix, expected_type=type_hints["prefix"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_type": backup_type,
            "bucket": bucket,
            "plan_name": plan_name,
            "retention": retention,
            "schedule": schedule,
            "vault_id": vault_id,
        }
        if cross_account_role_name is not None:
            self._values["cross_account_role_name"] = cross_account_role_name
        if cross_account_type is not None:
            self._values["cross_account_type"] = cross_account_type
        if cross_account_user_id is not None:
            self._values["cross_account_user_id"] = cross_account_user_id
        if disabled is not None:
            self._values["disabled"] = disabled
        if prefix is not None:
            self._values["prefix"] = prefix

    @builtins.property
    def backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backupType: Backup type. Valid values: COMPLETE.
        '''
        result = self._values.get("backup_type")
        assert result is not None, "Required property 'backup_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucket: The name of OSS bucket.
        '''
        result = self._values.get("bucket")
        assert result is not None, "Required property 'bucket' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        '''
        result = self._values.get("plan_name")
        assert result is not None, "Required property 'plan_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retention(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retention: Backup retention days, the minimum is 1.
        '''
        result = self._values.get("retention")
        assert result is not None, "Required property 'retention' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schedule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        '''
        result = self._values.get("schedule")
        assert result is not None, "Required property 'schedule' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: The ID of backup vault.
        '''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
        '''
        result = self._values.get("cross_account_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        '''
        result = self._values.get("cross_account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountUserId: The original account ID of the cross account backup managed by the current account.
        '''
        result = self._values.get("cross_account_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disabled: Whether to disable the backup task. Valid values: true, false.
        '''
        result = self._values.get("disabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: prefix: Backup prefix. Once specified, only objects with matching prefixes will be backed up.
        '''
        result = self._values.get("prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosOssBackupPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosOtsBackupPlan(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosOtsBackupPlan",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::OtsBackupPlan``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``OtsBackupPlan`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-otsbackupplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosOtsBackupPlanProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09a66465b8b3458015f10385f335de2b0312772e0836356bd18b2a6729a6cc5a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3bdeb4021b91913cf240a34064767757ef8d6a6dcc113275fc4d19a56629e7b3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PlanId: The ID of the backup plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="backupType")
    def backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backupType: Backup type. Valid values: COMPLETE.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "backupType"))

    @backup_type.setter
    def backup_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ef1a83313f6368c6c10a7874a1d7a1d8021ee66ab44c7c624e9b3fd1b5a16d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9efad0eab17fd8c14ee40610320ecfd02707c03e22ba43f90e37374d8ead5ad8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="planName")
    def plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "planName"))

    @plan_name.setter
    def plan_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e113c48ec2f1f0776b6142452a516f18ae04cd57959b99cb237ab0423a02739)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "planName", value)

    @builtins.property
    @jsii.member(jsii_name="retention")
    def retention(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retention: Backup retention days, the minimum is 1.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "retention"))

    @retention.setter
    def retention(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cab8df6758693b49d802cd8e1d411e1df130b0f85774d5ccaee68ee56ab48248)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "retention", value)

    @builtins.property
    @jsii.member(jsii_name="schedule")
    def schedule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "schedule"))

    @schedule.setter
    def schedule(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69741a04ac1c47b4335d397d551d2de3353fd0be3a70f8541369381326d03bc5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "schedule", value)

    @builtins.property
    @jsii.member(jsii_name="vaultId")
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: The ID of backup vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vaultId"))

    @vault_id.setter
    def vault_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f627440eefe12b9d1d8536b88e2046f603735604bc68ed452e7a1df3d15ec2b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultId", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountRoleName")
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountRoleName"))

    @cross_account_role_name.setter
    def cross_account_role_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d5e3c3ae1c5cd9946ec455dc0352dded316eabd2706ec69b73ab1f984fbd6c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountRoleName", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountType")
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountType"))

    @cross_account_type.setter
    def cross_account_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73dce851f76b8af1eb3604bba0133eece6d52652af8d921b2102f9d1a2318839)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountType", value)

    @builtins.property
    @jsii.member(jsii_name="crossAccountUserId")
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountUserId: The original account ID of the cross account backup managed by the current account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossAccountUserId"))

    @cross_account_user_id.setter
    def cross_account_user_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a4ad09b7879a132ac9d195c27272444e3e17df96526871df9702fe31acdc6a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossAccountUserId", value)

    @builtins.property
    @jsii.member(jsii_name="disabled")
    def disabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disabled: Whether to disable the backup task. Valid values: true, false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disabled"))

    @disabled.setter
    def disabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ae82339d1f7991da06dbd0d46ceda97a4c0b99a8f57215c50266b8d331c4221)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disabled", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The name of the Table store instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2fc8dd243d0aaf68c868933fcead0d3ec838b24b72f1842b671411abe2937290)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="otsDetail")
    def ots_detail(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOtsBackupPlan.OtsDetailProperty"]]:
        '''
        :Property: otsDetail: The details about the Table store instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOtsBackupPlan.OtsDetailProperty"]], jsii.get(self, "otsDetail"))

    @ots_detail.setter
    def ots_detail(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOtsBackupPlan.OtsDetailProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a19ff1104a3a2950ee780d50a35c60a7995fafcf98e3317523cd83f53f55916a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "otsDetail", value)

    @builtins.property
    @jsii.member(jsii_name="rules")
    def rules(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOtsBackupPlan.RulesProperty"]]]]:
        '''
        :Property: rules: The backup plan rule.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOtsBackupPlan.RulesProperty"]]]], jsii.get(self, "rules"))

    @rules.setter
    def rules(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOtsBackupPlan.RulesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6b289c8bb4810a070bc64805a329fb3a189fe6b608b55cba4d6c8aefd2a40e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rules", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-hbr.RosOtsBackupPlan.OtsDetailProperty",
        jsii_struct_bases=[],
        name_mapping={"table_names": "tableNames"},
    )
    class OtsDetailProperty:
        def __init__(
            self,
            *,
            table_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param table_names: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__932f439a03edcd5c0744ee152f1ae549b3863a1c00461fc639f2676c8c143233)
                check_type(argname="argument table_names", value=table_names, expected_type=type_hints["table_names"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if table_names is not None:
                self._values["table_names"] = table_names

        @builtins.property
        def table_names(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: tableNames: The names of the destination tables in the Tablestore instance.
            '''
            result = self._values.get("table_names")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OtsDetailProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-hbr.RosOtsBackupPlan.RulesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "backup_type": "backupType",
            "disabled": "disabled",
            "retention": "retention",
            "rule_name": "ruleName",
            "schedule": "schedule",
        },
    )
    class RulesProperty:
        def __init__(
            self,
            *,
            backup_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            retention: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            schedule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param backup_type: 
            :param disabled: 
            :param retention: 
            :param rule_name: 
            :param schedule: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__412f5ce92479619e1b085dec87d8f038cd1235880020ee224270f0dab8d5276e)
                check_type(argname="argument backup_type", value=backup_type, expected_type=type_hints["backup_type"])
                check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
                check_type(argname="argument retention", value=retention, expected_type=type_hints["retention"])
                check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
                check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if backup_type is not None:
                self._values["backup_type"] = backup_type
            if disabled is not None:
                self._values["disabled"] = disabled
            if retention is not None:
                self._values["retention"] = retention
            if rule_name is not None:
                self._values["rule_name"] = rule_name
            if schedule is not None:
                self._values["schedule"] = schedule

        @builtins.property
        def backup_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: backupType: The name of the tableStore instance. Valid values: COMPLETE, INCREMENTAL.
            '''
            result = self._values.get("backup_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def disabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: disabled: Whether the rule is disabled.
            '''
            result = self._values.get("disabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def retention(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: retention: Backup retention days, the minimum is 1.
            '''
            result = self._values.get("retention")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rule_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ruleName: The name of the rule.
            '''
            result = self._values.get("rule_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def schedule(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
            '''
            result = self._values.get("schedule")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RulesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosOtsBackupPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_type": "backupType",
        "plan_name": "planName",
        "retention": "retention",
        "schedule": "schedule",
        "vault_id": "vaultId",
        "cross_account_role_name": "crossAccountRoleName",
        "cross_account_type": "crossAccountType",
        "cross_account_user_id": "crossAccountUserId",
        "disabled": "disabled",
        "instance_name": "instanceName",
        "ots_detail": "otsDetail",
        "rules": "rules",
    },
)
class RosOtsBackupPlanProps:
    def __init__(
        self,
        *,
        backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ots_detail: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOtsBackupPlan.OtsDetailProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOtsBackupPlan.RulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosOtsBackupPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-otsbackupplan

        :param backup_type: 
        :param plan_name: 
        :param retention: 
        :param schedule: 
        :param vault_id: 
        :param cross_account_role_name: 
        :param cross_account_type: 
        :param cross_account_user_id: 
        :param disabled: 
        :param instance_name: 
        :param ots_detail: 
        :param rules: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__475ebda01b979f09ad359a0aa06fcae791e41b451f8663b3eb754a3667789bbc)
            check_type(argname="argument backup_type", value=backup_type, expected_type=type_hints["backup_type"])
            check_type(argname="argument plan_name", value=plan_name, expected_type=type_hints["plan_name"])
            check_type(argname="argument retention", value=retention, expected_type=type_hints["retention"])
            check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
            check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
            check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
            check_type(argname="argument disabled", value=disabled, expected_type=type_hints["disabled"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument ots_detail", value=ots_detail, expected_type=type_hints["ots_detail"])
            check_type(argname="argument rules", value=rules, expected_type=type_hints["rules"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_type": backup_type,
            "plan_name": plan_name,
            "retention": retention,
            "schedule": schedule,
            "vault_id": vault_id,
        }
        if cross_account_role_name is not None:
            self._values["cross_account_role_name"] = cross_account_role_name
        if cross_account_type is not None:
            self._values["cross_account_type"] = cross_account_type
        if cross_account_user_id is not None:
            self._values["cross_account_user_id"] = cross_account_user_id
        if disabled is not None:
            self._values["disabled"] = disabled
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if ots_detail is not None:
            self._values["ots_detail"] = ots_detail
        if rules is not None:
            self._values["rules"] = rules

    @builtins.property
    def backup_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backupType: Backup type. Valid values: COMPLETE.
        '''
        result = self._values.get("backup_type")
        assert result is not None, "Required property 'backup_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: planName: The name of the backup plan. 1~64 characters, the backup plan name of each data source type in a single warehouse required to be unique.
        '''
        result = self._values.get("plan_name")
        assert result is not None, "Required property 'plan_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retention(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retention: Backup retention days, the minimum is 1.
        '''
        result = self._values.get("retention")
        assert result is not None, "Required property 'retention' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schedule(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: schedule: Backup strategy. Optional format: I|{startTime}|{interval}. It means to execute a backup task every {interval} starting from {startTime}. The backup task for the elapsed time will not be compensated. If the last backup task has not completed yet, the next backup task will not be triggered.
        '''
        result = self._values.get("schedule")
        assert result is not None, "Required property 'schedule' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: The ID of backup vault.
        '''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cross_account_role_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountRoleName: The role name created in the original account RAM backup by the cross account managed by the current account.
        '''
        result = self._values.get("cross_account_role_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountType: The type of the cross account backup. Valid values: SELF_ACCOUNT, CROSS_ACCOUNT.
        '''
        result = self._values.get("cross_account_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_account_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossAccountUserId: The original account ID of the cross account backup managed by the current account.
        '''
        result = self._values.get("cross_account_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disabled: Whether to disable the backup task. Valid values: true, false.
        '''
        result = self._values.get("disabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The name of the Table store instance.
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ots_detail(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOtsBackupPlan.OtsDetailProperty]]:
        '''
        :Property: otsDetail: The details about the Table store instance.
        '''
        result = self._values.get("ots_detail")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOtsBackupPlan.OtsDetailProperty]], result)

    @builtins.property
    def rules(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOtsBackupPlan.RulesProperty]]]]:
        '''
        :Property: rules: The backup plan rule.
        '''
        result = self._values.get("rules")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOtsBackupPlan.RulesProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosOtsBackupPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::Policy``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Policy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb148621bfd9d64b7b785f8820213a62b83b075a4c2a55deb110a88076043826)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b8f54ab23d9a408cb5c8c57d1dacbedec9c84cbcbc6935cdeddda426d3922027)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyId: The ID of the policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__32a5dfb4e24b08fb31cafc5a2ea9203d7709c0f7b312ba46add60d19e56a6827)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="policyName")
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: The name of the policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyName"))

    @policy_name.setter
    def policy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d9fdb66e485ade14e6372c493fec2539c3152531d026296def530f2b633a168)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyName", value)

    @builtins.property
    @jsii.member(jsii_name="policyType")
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyType: The type of the policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyType"))

    @policy_type.setter
    def policy_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b5216301ab05375efbfc1f77d6b46ecd5520e678116f2aedad994a7ed9f3f82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyType", value)

    @builtins.property
    @jsii.member(jsii_name="rules")
    def rules(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.RulesProperty"]]]:
        '''
        :Property: rules: The rules of the policy.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.RulesProperty"]]], jsii.get(self, "rules"))

    @rules.setter
    def rules(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.RulesProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87cebcaa7428b563aa3b70edb775d262823cf01ed7a7e38c33be2c1e01b92670)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rules", value)

    @builtins.property
    @jsii.member(jsii_name="policyDescription")
    def policy_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: policyDescription: The description of the policy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "policyDescription"))

    @policy_description.setter
    def policy_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb81abe415415fecd81150242492d3269f42643707887748c6c1af2e9b10afc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyDescription", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-hbr.RosPolicy.DataSourceFiltersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "cross_account_role_name": "crossAccountRoleName",
            "cross_account_type": "crossAccountType",
            "cross_account_user_id": "crossAccountUserId",
            "source_type": "sourceType",
        },
    )
    class DataSourceFiltersProperty:
        def __init__(
            self,
            *,
            cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param cross_account_role_name: 
            :param cross_account_type: 
            :param cross_account_user_id: 
            :param source_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2dc30099b6f5fe319ea539e73378e613123d992f2e74628c08c77acde2740dab)
                check_type(argname="argument cross_account_role_name", value=cross_account_role_name, expected_type=type_hints["cross_account_role_name"])
                check_type(argname="argument cross_account_type", value=cross_account_type, expected_type=type_hints["cross_account_type"])
                check_type(argname="argument cross_account_user_id", value=cross_account_user_id, expected_type=type_hints["cross_account_user_id"])
                check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if cross_account_role_name is not None:
                self._values["cross_account_role_name"] = cross_account_role_name
            if cross_account_type is not None:
                self._values["cross_account_type"] = cross_account_type
            if cross_account_user_id is not None:
                self._values["cross_account_user_id"] = cross_account_user_id
            if source_type is not None:
                self._values["source_type"] = source_type

        @builtins.property
        def cross_account_role_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: crossAccountRoleName: The cross account role name of the data source filter.
            '''
            result = self._values.get("cross_account_role_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cross_account_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: crossAccountType: The cross account type of the data source filter.
            '''
            result = self._values.get("cross_account_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cross_account_user_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: crossAccountUserId: The cross account user ID of the data source filter.
            '''
            result = self._values.get("cross_account_user_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def source_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sourceType: The source type of the data source filter.
            '''
            result = self._values.get("source_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataSourceFiltersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-hbr.RosPolicy.RetentionRulesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "advanced_retention_type": "advancedRetentionType",
            "retention": "retention",
            "which_snapshot": "whichSnapshot",
        },
    )
    class RetentionRulesProperty:
        def __init__(
            self,
            *,
            advanced_retention_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            retention: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            which_snapshot: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param advanced_retention_type: 
            :param retention: 
            :param which_snapshot: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9d5398bdc73c735d149dfccecd9c36b7aaf2031bd5f64ec789a2a076a508af3f)
                check_type(argname="argument advanced_retention_type", value=advanced_retention_type, expected_type=type_hints["advanced_retention_type"])
                check_type(argname="argument retention", value=retention, expected_type=type_hints["retention"])
                check_type(argname="argument which_snapshot", value=which_snapshot, expected_type=type_hints["which_snapshot"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if advanced_retention_type is not None:
                self._values["advanced_retention_type"] = advanced_retention_type
            if retention is not None:
                self._values["retention"] = retention
            if which_snapshot is not None:
                self._values["which_snapshot"] = which_snapshot

        @builtins.property
        def advanced_retention_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: advancedRetentionType: The advanced retention type of the retention rule.
            '''
            result = self._values.get("advanced_retention_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def retention(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: retention: The retention of the retention rule.
            '''
            result = self._values.get("retention")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def which_snapshot(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: whichSnapshot: The which snapshot of the retention rule.
            '''
            result = self._values.get("which_snapshot")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RetentionRulesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-hbr.RosPolicy.RulesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "rule_type": "ruleType",
            "archive_days": "archiveDays",
            "archive_vault_id": "archiveVaultId",
            "backup_type": "backupType",
            "cold_archive_days": "coldArchiveDays",
            "continuous": "continuous",
            "data_source_filters": "dataSourceFilters",
            "do_detect": "doDetect",
            "immutable": "immutable",
            "keep_latest_snapshots": "keepLatestSnapshots",
            "replication_region_id": "replicationRegionId",
            "replication_vault_id": "replicationVaultId",
            "retention": "retention",
            "retention_rules": "retentionRules",
            "schedule": "schedule",
            "selector": "selector",
            "tag_filters": "tagFilters",
            "vault_id": "vaultId",
        },
    )
    class RulesProperty:
        def __init__(
            self,
            *,
            rule_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            archive_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            archive_vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            backup_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cold_archive_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            continuous: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_source_filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPolicy.DataSourceFiltersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            do_detect: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            immutable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            keep_latest_snapshots: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            replication_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            replication_vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            retention: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            retention_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPolicy.RetentionRulesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            schedule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            selector: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPolicy.SelectorProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            tag_filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPolicy.TagFiltersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param rule_type: 
            :param archive_days: 
            :param archive_vault_id: 
            :param backup_type: 
            :param cold_archive_days: 
            :param continuous: 
            :param data_source_filters: 
            :param do_detect: 
            :param immutable: 
            :param keep_latest_snapshots: 
            :param replication_region_id: 
            :param replication_vault_id: 
            :param retention: 
            :param retention_rules: 
            :param schedule: 
            :param selector: 
            :param tag_filters: 
            :param vault_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__23ebc8908f7b3883ea5ba18355126136c5aeddca6271a495cf8fb155fab809e3)
                check_type(argname="argument rule_type", value=rule_type, expected_type=type_hints["rule_type"])
                check_type(argname="argument archive_days", value=archive_days, expected_type=type_hints["archive_days"])
                check_type(argname="argument archive_vault_id", value=archive_vault_id, expected_type=type_hints["archive_vault_id"])
                check_type(argname="argument backup_type", value=backup_type, expected_type=type_hints["backup_type"])
                check_type(argname="argument cold_archive_days", value=cold_archive_days, expected_type=type_hints["cold_archive_days"])
                check_type(argname="argument continuous", value=continuous, expected_type=type_hints["continuous"])
                check_type(argname="argument data_source_filters", value=data_source_filters, expected_type=type_hints["data_source_filters"])
                check_type(argname="argument do_detect", value=do_detect, expected_type=type_hints["do_detect"])
                check_type(argname="argument immutable", value=immutable, expected_type=type_hints["immutable"])
                check_type(argname="argument keep_latest_snapshots", value=keep_latest_snapshots, expected_type=type_hints["keep_latest_snapshots"])
                check_type(argname="argument replication_region_id", value=replication_region_id, expected_type=type_hints["replication_region_id"])
                check_type(argname="argument replication_vault_id", value=replication_vault_id, expected_type=type_hints["replication_vault_id"])
                check_type(argname="argument retention", value=retention, expected_type=type_hints["retention"])
                check_type(argname="argument retention_rules", value=retention_rules, expected_type=type_hints["retention_rules"])
                check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
                check_type(argname="argument selector", value=selector, expected_type=type_hints["selector"])
                check_type(argname="argument tag_filters", value=tag_filters, expected_type=type_hints["tag_filters"])
                check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "rule_type": rule_type,
            }
            if archive_days is not None:
                self._values["archive_days"] = archive_days
            if archive_vault_id is not None:
                self._values["archive_vault_id"] = archive_vault_id
            if backup_type is not None:
                self._values["backup_type"] = backup_type
            if cold_archive_days is not None:
                self._values["cold_archive_days"] = cold_archive_days
            if continuous is not None:
                self._values["continuous"] = continuous
            if data_source_filters is not None:
                self._values["data_source_filters"] = data_source_filters
            if do_detect is not None:
                self._values["do_detect"] = do_detect
            if immutable is not None:
                self._values["immutable"] = immutable
            if keep_latest_snapshots is not None:
                self._values["keep_latest_snapshots"] = keep_latest_snapshots
            if replication_region_id is not None:
                self._values["replication_region_id"] = replication_region_id
            if replication_vault_id is not None:
                self._values["replication_vault_id"] = replication_vault_id
            if retention is not None:
                self._values["retention"] = retention
            if retention_rules is not None:
                self._values["retention_rules"] = retention_rules
            if schedule is not None:
                self._values["schedule"] = schedule
            if selector is not None:
                self._values["selector"] = selector
            if tag_filters is not None:
                self._values["tag_filters"] = tag_filters
            if vault_id is not None:
                self._values["vault_id"] = vault_id

        @builtins.property
        def rule_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: ruleType: The type of the rule.
            '''
            result = self._values.get("rule_type")
            assert result is not None, "Required property 'rule_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def archive_days(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: archiveDays: The archive days of the rule.
            '''
            result = self._values.get("archive_days")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def archive_vault_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: archiveVaultId: The archive vault ID of the rule.
            '''
            result = self._values.get("archive_vault_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def backup_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: backupType: The backup type of the rule.
            '''
            result = self._values.get("backup_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cold_archive_days(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: coldArchiveDays: The cold archive days of the rule.
            '''
            result = self._values.get("cold_archive_days")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def continuous(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: continuous: Whether continuous of the rule.
            '''
            result = self._values.get("continuous")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_source_filters(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.DataSourceFiltersProperty"]]]]:
            '''
            :Property: dataSourceFilters: The data source filters of the rule.
            '''
            result = self._values.get("data_source_filters")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.DataSourceFiltersProperty"]]]], result)

        @builtins.property
        def do_detect(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: doDetect: Whether do detect of the rule.
            '''
            result = self._values.get("do_detect")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def immutable(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: immutable: Whether immutable of the rule.
            '''
            result = self._values.get("immutable")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def keep_latest_snapshots(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: keepLatestSnapshots: The keep latest snapshots of the rule.
            '''
            result = self._values.get("keep_latest_snapshots")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def replication_region_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: replicationRegionId: The replication region ID of the rule.
            '''
            result = self._values.get("replication_region_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def replication_vault_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: replicationVaultId: The replication vault ID of the rule.
            '''
            result = self._values.get("replication_vault_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def retention(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: retention: The retention of the rule.
            '''
            result = self._values.get("retention")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def retention_rules(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.RetentionRulesProperty"]]]]:
            '''
            :Property: retentionRules: The retention rules of the rule.
            '''
            result = self._values.get("retention_rules")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.RetentionRulesProperty"]]]], result)

        @builtins.property
        def schedule(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: schedule: The schedule of the rule.
            '''
            result = self._values.get("schedule")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def selector(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.SelectorProperty"]]:
            '''
            :Property: selector: The selector of the rule.
            '''
            result = self._values.get("selector")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.SelectorProperty"]], result)

        @builtins.property
        def tag_filters(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.TagFiltersProperty"]]]]:
            '''
            :Property: tagFilters: The tag filters of the rule.
            '''
            result = self._values.get("tag_filters")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.TagFiltersProperty"]]]], result)

        @builtins.property
        def vault_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vaultId: The vault ID of the rule.
            '''
            result = self._values.get("vault_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RulesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-hbr.RosPolicy.SelectorProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class SelectorProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__44bf4b63b618d4dc536865e2829e0b1eef791c40db573b2b2a1301177ce1cbb0)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: The key of the selector.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the selector.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SelectorProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-hbr.RosPolicy.TagFiltersProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "operator": "operator", "value": "value"},
    )
    class TagFiltersProperty:
        def __init__(
            self,
            *,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            operator: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param operator: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ec44d083ef35082a3852be9b03f5a0948f3613d3f4cb54c280add7a4d2277bae)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument operator", value=operator, expected_type=type_hints["operator"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if key is not None:
                self._values["key"] = key
            if operator is not None:
                self._values["operator"] = operator
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: The key of the tag filter.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def operator(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: operator: The operator of the tag filter.
            '''
            result = self._values.get("operator")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the tag filter.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagFiltersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_name": "policyName",
        "policy_type": "policyType",
        "rules": "rules",
        "policy_description": "policyDescription",
    },
)
class RosPolicyProps:
    def __init__(
        self,
        *,
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rules: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.RulesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        policy_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-policy

        :param policy_name: 
        :param policy_type: 
        :param rules: 
        :param policy_description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__062e18e1ea943bd24b50f2bc553a761796e07bd608292e403792e9c3fdbc36a6)
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument rules", value=rules, expected_type=type_hints["rules"])
            check_type(argname="argument policy_description", value=policy_description, expected_type=type_hints["policy_description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "rules": rules,
        }
        if policy_description is not None:
            self._values["policy_description"] = policy_description

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: The name of the policy.
        '''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyType: The type of the policy.
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rules(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPolicy.RulesProperty]]]:
        '''
        :Property: rules: The rules of the policy.
        '''
        result = self._values.get("rules")
        assert result is not None, "Required property 'rules' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPolicy.RulesProperty]]], result)

    @builtins.property
    def policy_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: policyDescription: The description of the policy.
        '''
        result = self._values.get("policy_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosReplicationVault(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosReplicationVault",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::ReplicationVault``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ReplicationVault`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosReplicationVaultProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc77298866984829cf1a68c17deaccd6de0e589c6b9e94f912776254fba9bde7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0c950d0fc072bb79c7a5b80b14c2f17c142071ce96abd4bdcb1ec613a96b9b25)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultId: The ID of the vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3c197fcc5e5f063a290121f58ec5c7d07f20e49bd3500f3596f4db4f0a3d967b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="replicationSourceRegionId")
    def replication_source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replicationSourceRegionId: The region ID of the source vault for replication.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "replicationSourceRegionId"))

    @replication_source_region_id.setter
    def replication_source_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__812a3382340274c6fe4ca9f250a636d54df82e1fb11896cf8ae0fedb8fac87e4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replicationSourceRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="replicationSourceVaultId")
    def replication_source_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replicationSourceVaultId: The ID of the source vault for replication.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "replicationSourceVaultId"))

    @replication_source_vault_id.setter
    def replication_source_vault_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bff88c73a3e6ba6be5275bc8c99d16c09e8d998d0e9af5600bba6c659c47640e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replicationSourceVaultId", value)

    @builtins.property
    @jsii.member(jsii_name="vaultName")
    def vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultName: The name of the vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vaultName"))

    @vault_name.setter
    def vault_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b854763f022590f194ea2525b238117f5571a90004950410da07a1a6d3928a4f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the vault.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__caa1d30147c977da4f18b5d8b4e5033bf3a3839d6ed8b1a1f8b601fbb9c37762)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="encryptType")
    def encrypt_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptType: The encryption type of the vault.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptType"))

    @encrypt_type.setter
    def encrypt_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb5dddece021b8133a25c61d9f6c59777eca96c46ed0b1d62c50b3499763e7d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptType", value)

    @builtins.property
    @jsii.member(jsii_name="kmsKeyId")
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kmsKeyId: The KMS key ID used for encryption.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "kmsKeyId"))

    @kms_key_id.setter
    def kms_key_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2b5e469ea61d2fe5629f52371275409c770578fa0c0fc5743f2e7cf002ca785)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kmsKeyId", value)

    @builtins.property
    @jsii.member(jsii_name="redundancyType")
    def redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: redundancyType: The redundancy type of the vault.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "redundancyType"))

    @redundancy_type.setter
    def redundancy_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9f8e73fb1c6ec4cddacaf057cbd236f28df7d50d7046216149bd4b50332cc46)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "redundancyType", value)

    @builtins.property
    @jsii.member(jsii_name="vaultStorageClass")
    def vault_storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vaultStorageClass: The storage class of the vault.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vaultStorageClass"))

    @vault_storage_class.setter
    def vault_storage_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__791cc2db5b6b267b1b8978a7645e22ca74f8cd0bdd861ffd0b1886c5cc0ec3eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultStorageClass", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosReplicationVaultProps",
    jsii_struct_bases=[],
    name_mapping={
        "replication_source_region_id": "replicationSourceRegionId",
        "replication_source_vault_id": "replicationSourceVaultId",
        "vault_name": "vaultName",
        "description": "description",
        "encrypt_type": "encryptType",
        "kms_key_id": "kmsKeyId",
        "redundancy_type": "redundancyType",
        "vault_storage_class": "vaultStorageClass",
    },
)
class RosReplicationVaultProps:
    def __init__(
        self,
        *,
        replication_source_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        replication_source_vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypt_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vault_storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosReplicationVault``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault

        :param replication_source_region_id: 
        :param replication_source_vault_id: 
        :param vault_name: 
        :param description: 
        :param encrypt_type: 
        :param kms_key_id: 
        :param redundancy_type: 
        :param vault_storage_class: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c297ecf9593df4ce6e8c5075725546a85e8f4cfb64fefeba81ff571701f18b4f)
            check_type(argname="argument replication_source_region_id", value=replication_source_region_id, expected_type=type_hints["replication_source_region_id"])
            check_type(argname="argument replication_source_vault_id", value=replication_source_vault_id, expected_type=type_hints["replication_source_vault_id"])
            check_type(argname="argument vault_name", value=vault_name, expected_type=type_hints["vault_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument encrypt_type", value=encrypt_type, expected_type=type_hints["encrypt_type"])
            check_type(argname="argument kms_key_id", value=kms_key_id, expected_type=type_hints["kms_key_id"])
            check_type(argname="argument redundancy_type", value=redundancy_type, expected_type=type_hints["redundancy_type"])
            check_type(argname="argument vault_storage_class", value=vault_storage_class, expected_type=type_hints["vault_storage_class"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "replication_source_region_id": replication_source_region_id,
            "replication_source_vault_id": replication_source_vault_id,
            "vault_name": vault_name,
        }
        if description is not None:
            self._values["description"] = description
        if encrypt_type is not None:
            self._values["encrypt_type"] = encrypt_type
        if kms_key_id is not None:
            self._values["kms_key_id"] = kms_key_id
        if redundancy_type is not None:
            self._values["redundancy_type"] = redundancy_type
        if vault_storage_class is not None:
            self._values["vault_storage_class"] = vault_storage_class

    @builtins.property
    def replication_source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replicationSourceRegionId: The region ID of the source vault for replication.
        '''
        result = self._values.get("replication_source_region_id")
        assert result is not None, "Required property 'replication_source_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def replication_source_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: replicationSourceVaultId: The ID of the source vault for replication.
        '''
        result = self._values.get("replication_source_vault_id")
        assert result is not None, "Required property 'replication_source_vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultName: The name of the vault.
        '''
        result = self._values.get("vault_name")
        assert result is not None, "Required property 'vault_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the vault.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypt_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encryptType: The encryption type of the vault.
        '''
        result = self._values.get("encrypt_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kmsKeyId: The KMS key ID used for encryption.
        '''
        result = self._values.get("kms_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: redundancyType: The redundancy type of the vault.
        '''
        result = self._values.get("redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vault_storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vaultStorageClass: The storage class of the vault.
        '''
        result = self._values.get("vault_storage_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosReplicationVaultProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRestoreJob(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosRestoreJob",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::RestoreJob``, which is used to create a restore job.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``RestoreJob`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRestoreJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20ed7a80c881e9657c47292819760ec03d3e427f77d261184d3ee610ac2f7b85)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9de89174935c9fce2a53f3335337126710f0e533870870b8500abc1edb8a65ea)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrErrorMessage")
    def attr_error_message(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ErrorMessage: Error message of restore job
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrErrorMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrRestoreId")
    def attr_restore_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RestoreId: Restore job ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRestoreId"))

    @builtins.property
    @jsii.member(jsii_name="attrRestoreType")
    def attr_restore_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RestoreType: Restore type
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRestoreType"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceType: Source type
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Status: Restore job status
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatus"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5dde7cf1a8b626b138f237e9fcf007da8991fd51d15cc7daa5e522b6a471c62e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="restoreType")
    def restore_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: restoreType: Restore type
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "restoreType"))

    @restore_type.setter
    def restore_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc92975efb39ebc33a21ca44a673d46e1812c02550ff2ce01ca209d2773690c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "restoreType", value)

    @builtins.property
    @jsii.member(jsii_name="snapshotId")
    def snapshot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: snapshotId: Snapshot ID
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "snapshotId"))

    @snapshot_id.setter
    def snapshot_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8aa6be3e555dc970ae7c02e45f92877bdb2e189fc326cd89cac0d5ada33b5740)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "snapshotId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceClientId")
    def source_client_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceClientId"))

    @source_client_id.setter
    def source_client_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__649d04d51cb96039096c7df7f45e213427a692ee4203546a5515abada4dbae36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceClientId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceInstanceId")
    def source_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceInstanceId"))

    @source_instance_id.setter
    def source_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae2dd0eb4c55289b51e7bc7cf866b15ceee0eb6faa94db4b66e1c592e8bc8631)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceType")
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceType: Source type
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f40bd40736ec44f74cf0289b4ecccee4a9d6d5b1055a1f5c61e34184dad0213)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)

    @builtins.property
    @jsii.member(jsii_name="targetClientId")
    def target_client_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetClientId"))

    @target_client_id.setter
    def target_client_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8df41fcae953bd44b4c7fef882b6a5fbe282c49833b6d9293aa158bb06d9a24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetClientId", value)

    @builtins.property
    @jsii.member(jsii_name="targetInstanceId")
    def target_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetInstanceId"))

    @target_instance_id.setter
    def target_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38c5276c41147667c74f3a6029f710fbc1cc13b9a708315a0f21f0611a65edba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="targetPath")
    def target_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetPath: Target path. For instance, "/".
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetPath"))

    @target_path.setter
    def target_path(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2588e3818085b2afb1a8cdec894923877b4375f2e9efd2850bb37651453e0734)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetPath", value)

    @builtins.property
    @jsii.member(jsii_name="vaultId")
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: Vault ID
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vaultId"))

    @vault_id.setter
    def vault_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__667ebe3393e88704896054eae54860a6636922bc321161d7235ff83d4793d08b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosRestoreJobProps",
    jsii_struct_bases=[],
    name_mapping={
        "restore_type": "restoreType",
        "snapshot_id": "snapshotId",
        "source_client_id": "sourceClientId",
        "source_instance_id": "sourceInstanceId",
        "source_type": "sourceType",
        "target_client_id": "targetClientId",
        "target_instance_id": "targetInstanceId",
        "target_path": "targetPath",
        "vault_id": "vaultId",
    },
)
class RosRestoreJobProps:
    def __init__(
        self,
        *,
        restore_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        snapshot_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_client_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_client_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosRestoreJob``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-restorejob

        :param restore_type: 
        :param snapshot_id: 
        :param source_client_id: 
        :param source_instance_id: 
        :param source_type: 
        :param target_client_id: 
        :param target_instance_id: 
        :param target_path: 
        :param vault_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54c122a19da579b6b8e5eab6af7e86f4bcc3f132f50e9f6cd4443edb0c11b532)
            check_type(argname="argument restore_type", value=restore_type, expected_type=type_hints["restore_type"])
            check_type(argname="argument snapshot_id", value=snapshot_id, expected_type=type_hints["snapshot_id"])
            check_type(argname="argument source_client_id", value=source_client_id, expected_type=type_hints["source_client_id"])
            check_type(argname="argument source_instance_id", value=source_instance_id, expected_type=type_hints["source_instance_id"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument target_client_id", value=target_client_id, expected_type=type_hints["target_client_id"])
            check_type(argname="argument target_instance_id", value=target_instance_id, expected_type=type_hints["target_instance_id"])
            check_type(argname="argument target_path", value=target_path, expected_type=type_hints["target_path"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "restore_type": restore_type,
            "snapshot_id": snapshot_id,
            "source_client_id": source_client_id,
            "source_instance_id": source_instance_id,
            "source_type": source_type,
            "target_client_id": target_client_id,
            "target_instance_id": target_instance_id,
            "target_path": target_path,
            "vault_id": vault_id,
        }

    @builtins.property
    def restore_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: restoreType: Restore type
        '''
        result = self._values.get("restore_type")
        assert result is not None, "Required property 'restore_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def snapshot_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: snapshotId: Snapshot ID
        '''
        result = self._values.get("snapshot_id")
        assert result is not None, "Required property 'snapshot_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_client_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        '''
        result = self._values.get("source_client_id")
        assert result is not None, "Required property 'source_client_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        '''
        result = self._values.get("source_instance_id")
        assert result is not None, "Required property 'source_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceType: Source type
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_client_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        '''
        result = self._values.get("target_client_id")
        assert result is not None, "Required property 'target_client_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
        '''
        result = self._values.get("target_instance_id")
        assert result is not None, "Required property 'target_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_path(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetPath: Target path. For instance, "/".
        '''
        result = self._values.get("target_path")
        assert result is not None, "Required property 'target_path' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: Vault ID
        '''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRestoreJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVault(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosVault",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBR::Vault``, which is used to create a backup vault.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Vault`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVaultProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8064864bc994ad48c2a85662658df92b9b6338d52251e1e8fd1c5a1be3dd958)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2ba5117817af2ad2cb574194334ac6bc65dc09b513eb5e61073b72192ce04be3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanStatistics")
    def attr_backup_plan_statistics(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupPlanStatistics: The statistics of backup plans that use the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupPlanStatistics"))

    @builtins.property
    @jsii.member(jsii_name="attrBytesDone")
    def attr_bytes_done(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BytesDone: The amount of data that is backed up. Unit: bytes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBytesDone"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the backup vault was created. This value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDedup")
    def attr_dedup(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Dedup: Indicates whether the deduplication feature is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedup"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexAvailable")
    def attr_index_available(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IndexAvailable: Indicates whether indexes are available. Indexes are available when they are not being updated.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIndexAvailable"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexLevel")
    def attr_index_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        IndexLevel: The index level.

        - **OFF**: No indexes are created.
        - **META**: Metadata indexes are created.
        - **ALL**: Full-text indexes are created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIndexLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexUpdateTime")
    def attr_index_update_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IndexUpdateTime: The time when the index was updated.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIndexUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestReplicationTime")
    def attr_latest_replication_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LatestReplicationTime: The time when the last remote backup was synchronized. This value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestReplicationTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: PaymentType.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRedundancyType")
    def attr_redundancy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        RedundancyType: The data redundancy type of the backup vault. Valid values:

        - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
        - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRedundancyType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplication")
    def attr_replication(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        Replication: Indicates whether the backup vault is a remote backup vault. Valid values:

        - **true**: The backup vault is a remote backup vault.
        - **false**: The backup vault is an on-premises backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplication"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationProgress")
    def attr_replication_progress(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicationProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceRegionId")
    def attr_replication_source_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicationSourceRegionId: The ID of the region where the remote backup vault resides.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicationSourceRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceVaultId")
    def attr_replication_source_vault_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicationSourceVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRetention")
    def attr_retention(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Retention: The retention period of the backup vault. Unit: days.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRetention"))

    @builtins.property
    @jsii.member(jsii_name="attrSearchEnabled")
    def attr_search_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SearchEnabled: Indicates whether the backup search feature is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSearchEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceTypes")
    def attr_source_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceTypes: The information about the data source.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageSize")
    def attr_storage_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageSize: The usage of the backup vault. Unit: bytes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageSize"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTrialInfo")
    def attr_trial_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TrialInfo: The free trial information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrialInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedTime")
    def attr_updated_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedTime: The time when the backup vault was updated. This value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultId: The ID of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultName: The name of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultName"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultStatusMessage")
    def attr_vault_status_message(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state. This parameter is available only for remote backup vaults. Valid values:

        - **UNKNOWN_ERROR*: An unknown error occurs.
        - **SOURCE_VAULT_ALREADY_HAS_REPLICATION**: A mirror vault is configured for the source vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultStatusMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultStorageClass")
    def attr_vault_storage_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultStorageClass: The storage type of the backup vault. Valid value: **STANDARD**, which indicates standard storage.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultStorageClass"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultType")
    def attr_vault_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultType: The type of the backup vault. Valid value: **STANDARD**, which indicates a standard backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__cf33518c4a9b5d463f573be5fc45f67199da280b2430dbbb93ccd5c9e29740ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vaultName")
    def vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultName: The name of the backup vault. The name must be 1 to 64 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vaultName"))

    @vault_name.setter
    def vault_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f24c926879a931f4ae6f908ebee1f2e269fee9b0f41de54fdc5181fc9077caf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultName", value)

    @builtins.property
    @jsii.member(jsii_name="vaultType")
    def vault_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        vaultType: The type of the backup vault. Valid values:

        - **STANDARD**: standard backup vault.
        - **OTS_BACKUP**: backup vault for Tablestore.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vaultType"))

    @vault_type.setter
    def vault_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10ef37cf410d546016904a3675f5f7cc362de98b1dfd4a853bfd974a57342f7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultType", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the backup vault. The description must be 0 to 255 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f993c33af940d92e9964f36fd59bd2a7c5e2b5a9e65506a8bbcbb35d2ceb250)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="encryptType")
    def encrypt_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encryptType: The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP.
        Valid values:- **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).

        - **KMS**: The source data is encrypted by using Key Management Service (KMS).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptType"))

    @encrypt_type.setter
    def encrypt_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbd9675dc1de8a76e711ba6d3818604208ea5eca711c15c0d3290e4fb6af2b3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptType", value)

    @builtins.property
    @jsii.member(jsii_name="kmsKeyId")
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "kmsKeyId"))

    @kms_key_id.setter
    def kms_key_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1df9870cbb44569adfa906142b2ff6e4b77eadb4d44e50981c1f9314334eb507)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kmsKeyId", value)

    @builtins.property
    @jsii.member(jsii_name="redundancyType")
    def redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        redundancyType: The data redundancy type of the backup vault. Valid values:

        - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
        - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "redundancyType"))

    @redundancy_type.setter
    def redundancy_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f694e935e997a2e25e7b411409c42d7db18f1a33c6465ec76bf874e0b9fb572)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "redundancyType", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__ccea6aa7170e1c3ab63c11db63bc8408e7294d07813d6b3d40085aba0ddf4ecf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosVault.TagsProperty"]]:
        '''
        :Property: tags: Tags of The resource attribute field representing the resource tag..
        '''
        return typing.cast(typing.Optional[typing.List["RosVault.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosVault.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ca96586b445f24d8a3cd17c124e10db983b2d8b211a7b5caf40e9036af3db6b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vaultStorageClass")
    def vault_storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vaultStorageClass: The storage type of the backup vault. The value is only **STANDARD**, which indicates STANDARD storage.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vaultStorageClass"))

    @vault_storage_class.setter
    def vault_storage_class(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__094c3068dd34ac94645d0fa802de3f86b5878a4d3c98448d551daa9aa7c1464f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultStorageClass", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-hbr.RosVault.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__ac73d53b8df5d9c999e2a684f855d023c8081dfee5b43d26f6b3a46ef684feeb)
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
    jsii_type="@alicloud/ros-cdk-hbr.RosVaultProps",
    jsii_struct_bases=[],
    name_mapping={
        "vault_name": "vaultName",
        "vault_type": "vaultType",
        "description": "description",
        "encrypt_type": "encryptType",
        "kms_key_id": "kmsKeyId",
        "redundancy_type": "redundancyType",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vault_storage_class": "vaultStorageClass",
    },
)
class RosVaultProps:
    def __init__(
        self,
        *,
        vault_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypt_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosVault.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vault_storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVault``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault

        :param vault_name: 
        :param vault_type: 
        :param description: 
        :param encrypt_type: 
        :param kms_key_id: 
        :param redundancy_type: 
        :param resource_group_id: 
        :param tags: 
        :param vault_storage_class: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce2d90c1fef7f15bbf9852612a3e9e563f369099058443ea9c435d0ed4786236)
            check_type(argname="argument vault_name", value=vault_name, expected_type=type_hints["vault_name"])
            check_type(argname="argument vault_type", value=vault_type, expected_type=type_hints["vault_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument encrypt_type", value=encrypt_type, expected_type=type_hints["encrypt_type"])
            check_type(argname="argument kms_key_id", value=kms_key_id, expected_type=type_hints["kms_key_id"])
            check_type(argname="argument redundancy_type", value=redundancy_type, expected_type=type_hints["redundancy_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vault_storage_class", value=vault_storage_class, expected_type=type_hints["vault_storage_class"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vault_name": vault_name,
            "vault_type": vault_type,
        }
        if description is not None:
            self._values["description"] = description
        if encrypt_type is not None:
            self._values["encrypt_type"] = encrypt_type
        if kms_key_id is not None:
            self._values["kms_key_id"] = kms_key_id
        if redundancy_type is not None:
            self._values["redundancy_type"] = redundancy_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vault_storage_class is not None:
            self._values["vault_storage_class"] = vault_storage_class

    @builtins.property
    def vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultName: The name of the backup vault. The name must be 1 to 64 characters in length.
        '''
        result = self._values.get("vault_name")
        assert result is not None, "Required property 'vault_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        vaultType: The type of the backup vault. Valid values:

        - **STANDARD**: standard backup vault.
        - **OTS_BACKUP**: backup vault for Tablestore.
        '''
        result = self._values.get("vault_type")
        assert result is not None, "Required property 'vault_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the backup vault. The description must be 0 to 255 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypt_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encryptType: The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP.
        Valid values:- **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).

        - **KMS**: The source data is encrypted by using Key Management Service (KMS).
        '''
        result = self._values.get("encrypt_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.
        '''
        result = self._values.get("kms_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        redundancyType: The data redundancy type of the backup vault. Valid values:

        - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
        - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
        '''
        result = self._values.get("redundancy_type")
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
    def tags(self) -> typing.Optional[typing.List[RosVault.TagsProperty]]:
        '''
        :Property: tags: Tags of The resource attribute field representing the resource tag..
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosVault.TagsProperty]], result)

    @builtins.property
    def vault_storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vaultStorageClass: The storage type of the backup vault. The value is only **STANDARD**, which indicates STANDARD storage.
        '''
        result = self._values.get("vault_storage_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVaultProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IVault)
class Vault(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.Vault",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::Vault``, which is used to create a backup vault.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVault``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VaultProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__118eb87dedc0165296f7b3d57e645d6b5d5508e092a7c53c1ecdcc3ec42c9ac0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanStatistics")
    def attr_backup_plan_statistics(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPlanStatistics"))

    @builtins.property
    @jsii.member(jsii_name="attrBytesDone")
    def attr_bytes_done(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BytesDone: The amount of data that is backed up.

        Unit: bytes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBytesDone"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The time when the backup vault was created.

        This value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDedup")
    def attr_dedup(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Dedup: Indicates whether the deduplication feature is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedup"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexAvailable")
    def attr_index_available(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexAvailable: Indicates whether indexes are available.

        Indexes are available when they are not being updated.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndexAvailable"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexLevel")
    def attr_index_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexLevel: The index level.

        - **OFF**: No indexes are created.
        - **META**: Metadata indexes are created.
        - **ALL**: Full-text indexes are created.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndexLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexUpdateTime")
    def attr_index_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexUpdateTime: The time when the index was updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndexUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestReplicationTime")
    def attr_latest_replication_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestReplicationTime: The time when the last remote backup was synchronized.

        This value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLatestReplicationTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: PaymentType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRedundancyType")
    def attr_redundancy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RedundancyType: The data redundancy type of the backup vault.

        Valid values:

        - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
        - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRedundancyType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplication")
    def attr_replication(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Replication: Indicates whether the backup vault is a remote backup vault.

        Valid values:

        - **true**: The backup vault is a remote backup vault.
        - **false**: The backup vault is an on-premises backup vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplication"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationProgress")
    def attr_replication_progress(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceRegionId")
    def attr_replication_source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationSourceRegionId: The ID of the region where the remote backup vault resides.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationSourceRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceVaultId")
    def attr_replication_source_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationSourceVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRetention")
    def attr_retention(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Retention: The retention period of the backup vault.

        Unit: days.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRetention"))

    @builtins.property
    @jsii.member(jsii_name="attrSearchEnabled")
    def attr_search_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SearchEnabled: Indicates whether the backup search feature is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSearchEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceTypes")
    def attr_source_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceTypes: The information about the data source.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageSize")
    def attr_storage_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageSize: The usage of the backup vault.

        Unit: bytes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageSize"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTrialInfo")
    def attr_trial_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TrialInfo: The free trial information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTrialInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedTime")
    def attr_updated_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedTime: The time when the backup vault was updated.

        This value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: The ID of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultName: The name of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultName"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultStatusMessage")
    def attr_vault_status_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.

        This parameter is available only for remote backup vaults. Valid values:

        - **UNKNOWN_ERROR*: An unknown error occurs.
        - **SOURCE_VAULT_ALREADY_HAS_REPLICATION**: A mirror vault is configured for the source vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultStatusMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultStorageClass")
    def attr_vault_storage_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultStorageClass: The storage type of the backup vault.

        Valid value: **STANDARD**, which indicates standard storage.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultStorageClass"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultType")
    def attr_vault_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultType: The type of the backup vault.

        Valid value: **STANDARD**, which indicates a standard backup vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VaultProps":
        return typing.cast("VaultProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d2418343bddc909c7e87f52c089731921bc3c8b613ed61dfc9abd654f76187e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab0d5e283ce080dccf75f89468eb8a0f796004ef40d9571b676a95947859a356)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da56e2543c4779fea6e9e9af4945f85d82b009893874d803076cf6c9d6196842)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.VaultProps",
    jsii_struct_bases=[],
    name_mapping={
        "vault_name": "vaultName",
        "vault_type": "vaultType",
        "description": "description",
        "encrypt_type": "encryptType",
        "kms_key_id": "kmsKeyId",
        "redundancy_type": "redundancyType",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vault_storage_class": "vaultStorageClass",
    },
)
class VaultProps:
    def __init__(
        self,
        *,
        vault_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vault_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypt_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosVault.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vault_storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Vault``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault

        :param vault_name: Property vaultName: The name of the backup vault. The name must be 1 to 64 characters in length.
        :param vault_type: Property vaultType: The type of the backup vault. Valid values: - **STANDARD**: standard backup vault. - **OTS_BACKUP**: backup vault for Tablestore.
        :param description: Property description: The description of the backup vault. The description must be 0 to 255 characters in length.
        :param encrypt_type: Property encryptType: The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP. Valid values:- **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR). - **KMS**: The source data is encrypted by using Key Management Service (KMS).
        :param kms_key_id: Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.
        :param redundancy_type: Property redundancyType: The data redundancy type of the backup vault. Valid values: - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur. - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags of The resource attribute field representing the resource tag..
        :param vault_storage_class: Property vaultStorageClass: The storage type of the backup vault. The value is only **STANDARD**, which indicates STANDARD storage.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36a23955d72280cbc16481f191f0e18b687703f71a1992ccaf5eb78705a1e66b)
            check_type(argname="argument vault_name", value=vault_name, expected_type=type_hints["vault_name"])
            check_type(argname="argument vault_type", value=vault_type, expected_type=type_hints["vault_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument encrypt_type", value=encrypt_type, expected_type=type_hints["encrypt_type"])
            check_type(argname="argument kms_key_id", value=kms_key_id, expected_type=type_hints["kms_key_id"])
            check_type(argname="argument redundancy_type", value=redundancy_type, expected_type=type_hints["redundancy_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vault_storage_class", value=vault_storage_class, expected_type=type_hints["vault_storage_class"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vault_name": vault_name,
            "vault_type": vault_type,
        }
        if description is not None:
            self._values["description"] = description
        if encrypt_type is not None:
            self._values["encrypt_type"] = encrypt_type
        if kms_key_id is not None:
            self._values["kms_key_id"] = kms_key_id
        if redundancy_type is not None:
            self._values["redundancy_type"] = redundancy_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vault_storage_class is not None:
            self._values["vault_storage_class"] = vault_storage_class

    @builtins.property
    def vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vaultName: The name of the backup vault.

        The name must be 1 to 64 characters in length.
        '''
        result = self._values.get("vault_name")
        assert result is not None, "Required property 'vault_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vault_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vaultType: The type of the backup vault.

        Valid values:

        - **STANDARD**: standard backup vault.
        - **OTS_BACKUP**: backup vault for Tablestore.
        '''
        result = self._values.get("vault_type")
        assert result is not None, "Required property 'vault_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the backup vault.

        The description must be 0 to 255 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypt_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptType: The method that is used to encrypt the source data.

        This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP.
        Valid values:- **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).

        - **KMS**: The source data is encrypted by using Key Management Service (KMS).
        '''
        result = self._values.get("encrypt_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key.

        This parameter is required only if you set the EncryptType parameter to KMS.
        '''
        result = self._values.get("kms_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property redundancyType: The data redundancy type of the backup vault.

        Valid values:

        - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
        - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
        '''
        result = self._values.get("redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosVault.TagsProperty]]:
        '''Property tags: Tags of The resource attribute field representing the resource tag..'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosVault.TagsProperty]], result)

    @builtins.property
    def vault_storage_class(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vaultStorageClass: The storage type of the backup vault.

        The value is only **STANDARD**, which indicates STANDARD storage.
        '''
        result = self._values.get("vault_storage_class")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VaultProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IBackupClients)
class BackupClients(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.BackupClients",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::BackupClients``, which is used to install backup clients on Elastic Compute Service (ECS) instances.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBackupClients``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[BackupClientsProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55c4ad0a8e13954d77fb017de80aebbb84aabf01284e0f8279ac6533809901a5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrClientIds")
    def attr_client_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ClientIds: ID list of clients installed in instances.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrClientIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: ID list of instances to install backup client.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackupClientsProps:
        return typing.cast(BackupClientsProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__101998cc9f0588f9c1e1603ff7d5d0032a9b379da5f7b519fa0e8014b22d8489)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf2188932a7dc9d9a7fa79e158b0acb4ba18e522c7ac16ed8c67721f848158f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9107c91bfa236ce3352563687b43856134a7a992f97bd612e8fbd90cb44da4e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ICrossAccount)
class CrossAccount(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.CrossAccount",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::CrossAccount``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCrossAccount``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[CrossAccountProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b11fae136486924372bd2dbe5c8583228a6cf5699066e8ed3838c9c30b76c0bd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CrossAccountProps:
        return typing.cast(CrossAccountProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe64efd5ac931fe987480eefe06c213b2fd392361c75e3cadf82f0d67300c95a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a20c2cba844630a077416597128d1bb1e3b6c90405c615205f1fade73f19c1c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52bc4dc25e208bc1ef922b32761aa91fa5ba221eec428106578567edca108fca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDbAgent)
class DbAgent(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.DbAgent",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::DbAgent``, which is used to install a Data Disaster Recovery client.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDbAgent``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DbAgentProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5b29c3351e78644fa93ffc5311dce8027fd4c6807a9d0cdba4ce60c213791b5)
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
        '''Attribute InstanceIds: Uni backup agent instance ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: Uni backup agent install task id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrUniBackupInstanceDetails")
    def attr_uni_backup_instance_details(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UniBackupInstanceDetails: Uni backup agent instance info details.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUniBackupInstanceDetails"))

    @builtins.property
    @jsii.member(jsii_name="attrUniBackupInstances")
    def attr_uni_backup_instances(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UniBackupInstances: Uni backup agent instance info.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUniBackupInstances"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbAgentProps:
        return typing.cast(DbAgentProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__020eb0faf838a674d1d01f95f226bf4b9c781794611e00916ec8829a6a7dfb65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__abfed8739efff7a01010b194ed50697c5f10a53ffd85f0ddae9a41a9686ca004)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6896176fba63852487ad9c5adee867511a175b876091464f066b40627245e449)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDbPlan)
class DbPlan(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.DbPlan",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::DbPlan``, which is used to create a backup plan.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDbPlan``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DbPlanProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8be57fe9da1e39bbe0c463bb08db0e22360cf849186fc787ff8440b3419d5461)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrContinuousPlan")
    def attr_continuous_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ContinuousPlan: Continuous backup plan schedule.

        Use {   "type": "continuous" }.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrContinuousPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrContinuousUuid")
    def attr_continuous_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ContinuousUuid: Uuid of continuous backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrContinuousUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrCumulativePlan")
    def attr_cumulative_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CumulativePlan: Cumulative plan schedule, only for mssql.

        More details see FullPlan.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCumulativePlan"))

    @builtins.property
    @jsii.member(jsii_name="attrCumulativeUuid")
    def attr_cumulative_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CumulativeUuid: Uuid of cumulative plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCumulativeUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrDbPlanName")
    def attr_db_plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DbPlanName: Display name of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDbPlanName"))

    @builtins.property
    @jsii.member(jsii_name="attrFullPlan")
    def attr_full_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FullPlan: Full backup plan schedule.

        daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFullPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrFullUuid")
    def attr_full_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FullUuid: Uuid of full backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFullUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrHostUuid")
    def attr_host_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostUuid: Uuid of the host of the database instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHostUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrIncPlan")
    def attr_inc_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IncPlan: Incremental backup plan schedule.

        Only for mysql and oracle. More details see FullPlan.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIncPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrIncUuid")
    def attr_inc_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IncUuid: Uuid of the incremental bakcup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIncUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceUuid")
    def attr_instance_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceUuid: Uuid of database instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrLogPlan")
    def attr_log_plan(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogPlan: Log backup plan schedule.More details see FullPlan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrLogUuid")
    def attr_log_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogUuid: Uuid of the log backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxRateLimit")
    def attr_max_rate_limit(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxRateLimit: Max rate limit for backup job,.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaxRateLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxRetrySeconds")
    def attr_max_retry_seconds(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxRetrySeconds: Max retry seconds on network failure.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaxRetrySeconds"))

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Options: Backup options in json format, different for each type of database.

        For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOptions"))

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: Id of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTarget")
    def attr_target(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Target: Target vault to backup.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTarget"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbPlanProps:
        return typing.cast(DbPlanProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e71cda9a27786f04a0baa2c8811950aa016b4cd14f4cd1669f1e7d127ad436b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a0b26a65f1700f235100e6a5b82601d74dac3d4b2639b6b42f3abf9d523f9c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a096c173adfc7f6f678268104017001b2a0fabf0e0e5b7676651f25bc5d77eaa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDbVault)
class DbVault(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.DbVault",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::DbVault``, which is used to create a mirror vault.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDbVault``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DbVaultProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8de1e367c2b5f7ca096c0bf2016aaaf19eabf172a50e721ffefb20e3e357bd7a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description of the vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrRetentionDays")
    def attr_retention_days(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RetentionDays: Data retention days of the vault.

        Data will be deleted when it's older than this time.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRetentionDays"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: Vault ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultName: Display name of the vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultName"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultRegionId")
    def attr_vault_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultRegionId: The region ID to create the vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultRegionId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DbVaultProps:
        return typing.cast(DbVaultProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af9593d3474b67b22ce1e8b27ff3de563a39b30f5bf1b8ca4723e0f61ccb1305)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9178a634f306aa9c016c2692379d58f75ee3f088acb8651f1feeaba633c8613b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a78c990c0fa3950d2c853304e49ae95c987faa69c2fbcdbd71dd5517072d49e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEcsBackupPlan)
class EcsBackupPlan(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.EcsBackupPlan",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBR::EcsBackupPlan``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEcsBackupPlan``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-ecsbackupplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EcsBackupPlanProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37a7870a51f96eb5f19bc418c10d9b43b5b512437e6bcd7838df9aa1c01b0628)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PlanId: The ID of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EcsBackupPlanProps:
        return typing.cast(EcsBackupPlanProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0646c2d9e5a7baf7ff84134a8859d72bdffeac2f796f285d02708a1f1fdc36d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__760a2758c6e411af566b6d3848d2ba863e4b78fbdb75dfa10469e70bf8ed3807)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d64fe06628ed24898f88d77fb162803e31b2d5a359b1063307d1576ae110f4f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "BackupClients",
    "BackupClientsProps",
    "CrossAccount",
    "CrossAccountProps",
    "DbAgent",
    "DbAgentProps",
    "DbPlan",
    "DbPlanProps",
    "DbVault",
    "DbVaultProps",
    "EcsBackupPlan",
    "EcsBackupPlanProps",
    "IBackupClients",
    "ICrossAccount",
    "IDbAgent",
    "IDbPlan",
    "IDbVault",
    "IEcsBackupPlan",
    "INasBackupPlan",
    "IOssBackupPlan",
    "IOtsBackupPlan",
    "IPolicy",
    "IReplicationVault",
    "IRestoreJob",
    "IVault",
    "NasBackupPlan",
    "NasBackupPlanProps",
    "OssBackupPlan",
    "OssBackupPlanProps",
    "OtsBackupPlan",
    "OtsBackupPlanProps",
    "Policy",
    "PolicyProps",
    "ReplicationVault",
    "ReplicationVaultProps",
    "RestoreJob",
    "RestoreJobProps",
    "RosBackupClients",
    "RosBackupClientsProps",
    "RosCrossAccount",
    "RosCrossAccountProps",
    "RosDbAgent",
    "RosDbAgentProps",
    "RosDbPlan",
    "RosDbPlanProps",
    "RosDbVault",
    "RosDbVaultProps",
    "RosEcsBackupPlan",
    "RosEcsBackupPlanProps",
    "RosNasBackupPlan",
    "RosNasBackupPlanProps",
    "RosOssBackupPlan",
    "RosOssBackupPlanProps",
    "RosOtsBackupPlan",
    "RosOtsBackupPlanProps",
    "RosPolicy",
    "RosPolicyProps",
    "RosReplicationVault",
    "RosReplicationVaultProps",
    "RosRestoreJob",
    "RosRestoreJobProps",
    "RosVault",
    "RosVaultProps",
    "Vault",
    "VaultProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__a94b2401d75b5a76244d0a0303664832aa529ddc0a94890d71dbb4d306c551cb(
    *,
    instance_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    tags: typing.Optional[typing.Sequence[typing.Union[RosBackupClients.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__757563a2adb9b424ee5584362c9dcf3f9928a74c9ac327a4a9b63004898de89a(
    *,
    alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c2260099289c94a9004cf5330a1ce2e434cf6a5b83967553d363d3670689991(
    *,
    instance_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbAgent.InstanceInfoProperty, typing.Dict[builtins.str, typing.Any]]]]],
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4039c55ef42682cb0714edefbc752cc428beec1ba6f23fd37f1107cc5fb16c8(
    *,
    db_plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_uuid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    continuous_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cumulative_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inc_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_uuid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_rate_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_retry_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbPlan.SourceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c65238d1cba0f307df1141e975f3040bb28946a7518789d35e54689ce7a76f2(
    *,
    retention_days: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    vault_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDbVault.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bfb0eb8db0debf51cb3230dac3492c1ffe7dff40edf1b713ba4270e425dbbf6(
    *,
    backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    detail: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    include: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    paths: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    speed_limit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6355160713cc73fb6575250d2237e6cec1fa0d61d43a7115ebd5885f545fdc4d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[NasBackupPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a71d8ac075f804199cfa590b85c2d4834efd47d5dcb759a9b21496e18d9312b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4feb22bcded834e9b1675e00d1aa17c387a84d616b4e9a566fac7a59010df3d4(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6598e35388621fff7c3f0bd4155a9583e34fee75b161eee78504bebf1f1fd4e4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1914a3e370ae0f5ebdcc17b35611874ab638a67ed957782828bf49e966e4cbb(
    *,
    backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    paths: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af1dde86bb53dd5e09b96cb61203991c1b0f9a3a9644246d075b96354bc27e3d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[OssBackupPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__865372e69c7e2e95bf22f60691252c96c1c0b42472336fecca15370eafcc3d49(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8e81edbc35b436350167d43d6ba74b4c636f4afa266c8743794ffacb2791703(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1bf2621f0687c9747b8662517e574cba1a448c17c78934bedc8cf19271e4172(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48b15e252a189818d25886cbd1bcbf36dfcdb414377298d8a75bcf9413ba62ad(
    *,
    backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b416230e427fbcf54764a1ace6bc9dc108e806b4f3e8a50bf0cfb03f5a6ff886(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[OtsBackupPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36f8f34340b31373c96c375a54b137e5f7d255c7d53f4e085567d13059cac207(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b521b8d8c32f0c0781e3606bfc4c62880b487e4578b0fadc3baf9c78b2a1e554(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12b3caffaab480c93199cdb24d96b18d836b662948481f443bf3bf9fa584f8be(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff437a8677ad8a0d989bed274bfd6edf434ba1f7c59b5afb3c074495b6152a4b(
    *,
    backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ots_detail: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOtsBackupPlan.OtsDetailProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOtsBackupPlan.RulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca7d3fda8f895e09e38f996fa3c1f44ce527ba692aeafbfe0ff27429b4eee8ed(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d08d426457a0544fbc67fdc80240949bfdabb5602c0d9029464c89d7ef0ae424(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54640ee99f121cc6e37b4749660d61ac7965f68f50f587c75483a6e9defa2146(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f5e68c1c6a333bea7dd95980f90ddf1996f8165ea29b1a6e8a7f66b43be8598(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c88c73d4b15e7b0d25e74c1b218a44812666c6ef0ca6b136b11b6ddc68f4fb5(
    *,
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rules: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.RulesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    policy_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7d5314bfd235003a9705c3795007e1d2f73efef33ed0412e09ae4320df906f2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ReplicationVaultProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3d19f74dfb5ec9943856bf1ffd0ab7d15e1ab8a340b6a366373a766dda77192(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28bfc4ccb8de582732da4b2000f0d05fdf0d66e9b67534b413c5433386ae3422(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da4cb6bc7f99dceec8e323d8ee8684fbe1010936338b4cbb7db71d2483cb786a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3b451a2f7bf3d3d65a56eb31f56ac86d6840224a5c78c96b87d950c4b670e1e(
    *,
    replication_source_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    replication_source_vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vault_storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7a3b5f4ffbb1175dbe8b23bfd591faea3b199652d132511028ff88f27342dc7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RestoreJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e04fc9af4026feb9fd1d4958e99910ecb65b8de34b8372254d8cb59e6a66dc63(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__073903ff72cd3c55c211ee42639ef450eab80a2f744c33a8ea2254ff844fafb5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76b4340f6d57ed740c7b99a4009b7c7393bbb08765c4f543a7f781741f9fb6ec(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__601fbb97b77e17679dd1112af9bbd3b1d1e3e04115cba06a8fb83b0ec6ab1ef4(
    *,
    restore_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    snapshot_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_client_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_client_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14dd4bbb398604cf129c5f4e61717c4b503c32488fbd4c982334e6fb453cfe16(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBackupClientsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecf8a3ffae86a01df9bf807dea5a248ea6800ac93d69023bcd86cb1dcffab5c4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f2625c7bdfd51facf9e8d04a808398b7d0ecc984408b54c4387d3fac7cd8307(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2764a12e646b646856dc56ba6398521f3459e6aeca7571ff20b1c1a6098a52ae(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86938888a3cf49b30e080ade260545ba514bc481ead00528df53e7e9c668ab5d(
    value: typing.Optional[typing.List[RosBackupClients.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27c08f64141ea82eb9e53396570a26f42841976a80c0e902e17154aafa30b699(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58dcd70a16c8885986d23b214fb714af73f5f7e58e743320e25c5f4c40cc32b0(
    *,
    instance_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    tags: typing.Optional[typing.Sequence[typing.Union[RosBackupClients.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65b6a2e046b48d19aeb63191db7bb297aebee1e838533368d4b131cf26f334ea(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCrossAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__253358b85fd23aa07f33653dc48761678a93dc9baee5f7f273f476b8867cd737(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__208ca0ba844d42004aae1b2e75714fbab5c56bd55fec31a6d1d8d5dcd251ef1f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f1652c7f0f012b83582156657af5ced08c46c4d6a3f94d04a83a34720ee340f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7ca5ea2f5f299a39369ca9428f456bc26019b2a3e5ef22f7a49ad9d7bfa13ef(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1ed56e7246546b4904ce612eb776aec45b761ec4d9eaf4cb62254529006e15a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e12edaf7ea60bfabf070c06f3a098a7b0faba103ecd5e2774e59b5c84f686d06(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c297a23d00919b53eb704c39b91ab9c91beb0a6e7402988ba9ad10da3e03e0e4(
    *,
    alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2840154d5947ec58394507f1522c2e6b0b959100883361749287b2483028f712(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDbAgentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d88cb0a39db51bcc3e14083f8b1876928c75e74729ed32288f3109578964bc04(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e545887d6c7e40f20a548cfb8dc91eb167ed31f19b3a7486163ae18a75c3cb96(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__115d0018313df457def88501ee63ce25f15b0e1fbf7099b09b1003b4e45319c0(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDbAgent.InstanceInfoProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4876fa91fb0e2eb3059846591df662121239d2fabae4e577ff938c63154a7f89(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2923e776fa405a48010acff17335bd720c57f89f77d3c6720b9f7862c366f4f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__394a5fdb8f0cb5183dd4a250af2705497745d165b671fcdb2dfb5e738e74846f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__855704f415dec8c1f79614887c9b6636ee036bdc2b0481a2ba2ff2786c1e9e26(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    authentication_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cdc942c087f1229f8dc8a7d7e28adbd7eda1d09d7f7f1b16db544489e5054201(
    *,
    instance_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbAgent.InstanceInfoProperty, typing.Dict[builtins.str, typing.Any]]]]],
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__937e5b61ec280e35d7d046abe93c7849f00a8131f95b14788ff0153621c26f84(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDbPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82c48d458dd80669ddc02d12a7071fa159c102d32152797aedfff939cda1e558(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f00de1ae56e98d3639be7204a61f9d0fbcc10234e81568c678999fc0ac01228(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8724bc40c9b9b9c24d32c0a1d53fbb1d9f085ba1f06d5d305cdfdccb67a2ec6b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__856ddce93cca9298174cbe361ebe43559dfa75324368f4c6c9944c6c3c4170e7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb481e7234f241f04381cd23b396f19dbc0bbbe52785dd0e661e52363cbc013d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__021e02f944dcf1a6777b67c6ac60a0cfa0fcb59572b8fbd868d09dc22cd6918e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__791d540c22ebf897fd432c6336ae95b8d37eced8c474954b51f17d021ebd5e0e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de735986ba324df62fe9d7b7e1866b3580b710403b8072ff1c3bdcf5972b8fb8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8ac9b7ac8ebb21deab66c37bd551c20e31e8dca892a74fd42f8d931191fea0c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b06eed20a8f1a9e01c77009c8839a8d36992f4b7d93fa13c640e44c7d5b905c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a15e6ec5559f93e96439d028d228261674d57b8b182ec983525abc653298fc15(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eaf9e21fbec79460de0634f28e81b13676354c0b081410ff72468c3c1b736326(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1a3f072cc61f5369c97bbdfbf838e37b4060f8363f9a036764e7b3bbc9db9cf(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf7eced39ebe4d68fe7f1bd19bf49aa57fadff66cd0dedf1de45c86e956e3b6e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4935180342fb153a9addb9d4f9b7b0bef5db38785e9033dc3b7a8405eed45b7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c68cde74aef8beb5133eb88426d23e7d7322dd59cb92faf84c3ac3277bee8dc9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDbPlan.SourceProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4dcdfb2615ea02dfbae425dc8a5f8866f851b972b6c5dd92d7e61e2559179a3(
    *,
    entries: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89148a7709920c9cd022cb49d6de5a3d6550edfe5673fcf368380d242485f98d(
    *,
    db_plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_uuid: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    continuous_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cumulative_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    inc_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_uuid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_plan: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_rate_limit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_retry_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbPlan.SourceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ef53fa5fcfccaf30d5fd36485dd604ddc6129939c733d769cf7245d4fc87d88(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDbVaultProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73ac9048f4e4047201173d0942e2667a33ed1b74543642f3ffc27f9287d153c3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ce45db5c28c521b4acd0b8cafe55acf62b7c06c0d32d4d204cb14def3f9d742(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05a3b2ab310cf3c8166eff5323974c7b1919c788d5e1d1ba7337eee37ea2053a(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76754f024ebd11e3fb3ee861fe21ff7e6c46fa944e6243da37f878356a170ce8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0d4f8fd0e57c6a2af772b98efb19860c2f1efd4ce14a1bbd11b65bb3cfec31d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c6486e512ad41ee91cb343d8c0743ec8be89e470f53f57c0d6f549ec36d20c5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2f61788b93699c18ed391b24257e7905136add5a3beca232aaf8893a32f35b9(
    value: typing.Optional[typing.List[RosDbVault.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b7d2a8d01e0b24bca084e738f31475e843323ddf17b7f8b033967160851e64a(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4851223cd8c3a46305d591fac08dd1a6d2d82296f2a2cfd6b22fc5f9e5cb37dc(
    *,
    retention_days: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    vault_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDbVault.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__827dc9d1b0914471a35fc1b645bf2aa9f963d92c38923377be1e471bf6f6d75b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEcsBackupPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe83f27babf947dc8d2405b1c751dd278b7d7f1d9c9610b0190f20a0e288a6f9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62a60d147c08ef7d0f800aabc70890c2b379cbb0c2d4167d4a33eebbc2ab559d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aefcd226dee968e0b84f0f6478374e0063a97d2dfa009a6760ae2effc80e2cf9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acb400fa381a836848220f44fda31383cd0b743a5c2d81cdf11d6e2c245116cb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5af982a84136cd071805edea4ef4ced8c21943d0521851ba18832b35af5ac67d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15be22d14520f346a9542362c5339ecb9ea0d87aa617467ca538b272001197ad(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__983052b6c7d39d7b4e5aef248a46ffe7ab56b9ea476b0a94fa2d30e560461476(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ee4fdf8b2359f4f976d13b7e081298aad8c6b817accab4e0a7ba3ba6fd34d3a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28e7c120aef5b753b780c4063e8c7954d6fb688fb2544535a3e49b92bcb6d898(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24f76da5f68950c22a9642b22f82289a851962e12b3b1e88cd773635cab8e453(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc786a5ef7945f88f5ebf41293af17fee2faf5e1b907fde86a85102b363f68e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b23fcbb103b2cfa9cf36d8908c328ddd497c056ff3279f5966a4cb08ade26080(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3435f7be795a6aecc4aa1cbd06dd22dfb876eddc4ac0f9363fb2955f9db1a97(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b7f04b2a7047ac4d2bbe2cbfbd7409538a986496fb857193209609191642900(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f72252a9731df8192ae5fc0d7dd1b7c5e3a6f9a79028a05b553880251888a251(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9543927ad0e2f26652566b7e7ddd94f94421941d10a1c2c10c21efcd6dde81bf(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__264a6554ea2381ecb00c90aa02e47c4487f6fda5276a4b14aedfbc89ebc94de2(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6987136583bf4ad86f26663169f48f9e72a61e4f95bb59a839f01c0ab56c0353(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ffca1ba93b8ae6a281f59ad20c4d1c2eb0be7962bb523283a923e48a40a09a5(
    *,
    backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    detail: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    include: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    paths: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    speed_limit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d155f43a14d2bc3283391d04f980b81669b0a3350c31667cc3fca783841415a4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNasBackupPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b99ef25207f08e75f17132c6074298477eb5146cfc4a9654b736ad812070e4cc(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36988cee0206cd47c98526a6598a0abd0ed88d68653adfc142eb42c6795c64e2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcbd94a91f63d0dcf08f63e574b9357188e6372d98d0f6d4e5e968ae447d2020(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47449af8ab8048be9e756747082c79708f564141787cd93691dc625fce8b9ae6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bf93dd6ccf22a58f099d304c31d386ef198dec4a3003cd963e62769cad86424(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0972ea47657202ecb18cdff123f68d0b8ad0fd3b3cadfc883e24c5249b8e660(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0afa47b2318b47077b929178cb3a9b4c85395f8b41fa716220ea82633e015e0a(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bafd8fcbee697b377b2e2232ee72ce5379c735a3e5b646ffd4de148f614ebfd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0891c54b293ffb019975eee6bd095e823a4960288c4964f1516980d3b9bbcbc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__baf3cdc7b5044afb46214b3196e6c2e0d7f226b0869fe5ca9a89cca30c7b23f1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48fe1904036ac8f66c066235d3adca0f7bda117a20c67c704b480a546a458974(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d783feae04d792544863d8431ce15cd102f3c0457a4184f3b30d3b957ffbc863(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e2ffb4b40d1da4def45f81be2e0417a3a128eb7b2a56483fae355347d59898d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32da613b4f9e2691ac7d83952b7611a684c5765fcc65895d4574e6a0525fb044(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__641c20b54eb8061b4b41f8b884201f3c7094822214d2490cf668e01bff353b49(
    *,
    backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    file_system_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    paths: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24e833f4d069264cc8b1c6f96018cffc10b0271119088a462cd7fca9b2eb4c12(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosOssBackupPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf6988759b7224f34f08d817cd3670b66c3e6bddecbe51d70eccb035f28878d8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ea098d36043e06533497babbee035568155f486073a7f28bbd8f06d44e9b39f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92c8ed5d2613ae8385bf1e9fcf5d051d69fd31989da4a8a9017f4c83c71bc400(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__393a7bc5ce6afdc4574da4ff291f406ca2e85f6a68360df9adead92378ecb8fb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c0e4aad0ee336f6dac3a588f0da633547e6e1268301ed32ad9ffc047f9dd544(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8207e7988d26f60f3bcc18bfc9bbfd9400ae098c5115b58e38f8252cbceced3(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82346e6199dd8dd3c5a147ad7b4a2731bc1c75cc62db08759dbf27f36d401697(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d8f085936f37f75b2102dc9b87542680f3037690e7e074ef21cbd18446a51e3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a667fb14c86b7d13a871c4785f927883d235f2f97d4951151211cedac3c9128(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47e0f9f3d4e99ccacd99e1d09b87803aab26d080d93a0d996b6b5d9a69b6fdf9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6c4524eec9b5dd0fb9e10e611ca10db063b326927aa2aaa2e3f72d392ec049a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47241b289d9694848995173ea07a609bbaa8a82b61b94510d88fca3acc5b297f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33a2695b139abf5b9eb78a69395a6a1acda30a4acc3c8fc046b05c87f329b253(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1ff87a2ed9ab236c4618c8a28e6287daf0408678855a6d6e330a54c713b3956(
    *,
    backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09a66465b8b3458015f10385f335de2b0312772e0836356bd18b2a6729a6cc5a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosOtsBackupPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bdeb4021b91913cf240a34064767757ef8d6a6dcc113275fc4d19a56629e7b3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ef1a83313f6368c6c10a7874a1d7a1d8021ee66ab44c7c624e9b3fd1b5a16d4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9efad0eab17fd8c14ee40610320ecfd02707c03e22ba43f90e37374d8ead5ad8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e113c48ec2f1f0776b6142452a516f18ae04cd57959b99cb237ab0423a02739(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cab8df6758693b49d802cd8e1d411e1df130b0f85774d5ccaee68ee56ab48248(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69741a04ac1c47b4335d397d551d2de3353fd0be3a70f8541369381326d03bc5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f627440eefe12b9d1d8536b88e2046f603735604bc68ed452e7a1df3d15ec2b2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d5e3c3ae1c5cd9946ec455dc0352dded316eabd2706ec69b73ab1f984fbd6c5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73dce851f76b8af1eb3604bba0133eece6d52652af8d921b2102f9d1a2318839(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a4ad09b7879a132ac9d195c27272444e3e17df96526871df9702fe31acdc6a4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ae82339d1f7991da06dbd0d46ceda97a4c0b99a8f57215c50266b8d331c4221(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fc8dd243d0aaf68c868933fcead0d3ec838b24b72f1842b671411abe2937290(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a19ff1104a3a2950ee780d50a35c60a7995fafcf98e3317523cd83f53f55916a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOtsBackupPlan.OtsDetailProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6b289c8bb4810a070bc64805a329fb3a189fe6b608b55cba4d6c8aefd2a40e4(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOtsBackupPlan.RulesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__932f439a03edcd5c0744ee152f1ae549b3863a1c00461fc639f2676c8c143233(
    *,
    table_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__412f5ce92479619e1b085dec87d8f038cd1235880020ee224270f0dab8d5276e(
    *,
    backup_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    retention: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    schedule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__475ebda01b979f09ad359a0aa06fcae791e41b451f8663b3eb754a3667789bbc(
    *,
    backup_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    plan_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retention: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    schedule: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ots_detail: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOtsBackupPlan.OtsDetailProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOtsBackupPlan.RulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb148621bfd9d64b7b785f8820213a62b83b075a4c2a55deb110a88076043826(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8f54ab23d9a408cb5c8c57d1dacbedec9c84cbcbc6935cdeddda426d3922027(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32a5dfb4e24b08fb31cafc5a2ea9203d7709c0f7b312ba46add60d19e56a6827(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d9fdb66e485ade14e6372c493fec2539c3152531d026296def530f2b633a168(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b5216301ab05375efbfc1f77d6b46ecd5520e678116f2aedad994a7ed9f3f82(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87cebcaa7428b563aa3b70edb775d262823cf01ed7a7e38c33be2c1e01b92670(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPolicy.RulesProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb81abe415415fecd81150242492d3269f42643707887748c6c1af2e9b10afc8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2dc30099b6f5fe319ea539e73378e613123d992f2e74628c08c77acde2740dab(
    *,
    cross_account_role_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_account_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d5398bdc73c735d149dfccecd9c36b7aaf2031bd5f64ec789a2a076a508af3f(
    *,
    advanced_retention_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    retention: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    which_snapshot: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23ebc8908f7b3883ea5ba18355126136c5aeddca6271a495cf8fb155fab809e3(
    *,
    rule_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    archive_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    archive_vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cold_archive_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    continuous: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_source_filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.DataSourceFiltersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    do_detect: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    immutable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    keep_latest_snapshots: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replication_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replication_vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    retention: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    retention_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.RetentionRulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    schedule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    selector: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.SelectorProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tag_filters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.TagFiltersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44bf4b63b618d4dc536865e2829e0b1eef791c40db573b2b2a1301177ce1cbb0(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec44d083ef35082a3852be9b03f5a0948f3613d3f4cb54c280add7a4d2277bae(
    *,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    operator: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__062e18e1ea943bd24b50f2bc553a761796e07bd608292e403792e9c3fdbc36a6(
    *,
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rules: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.RulesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    policy_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc77298866984829cf1a68c17deaccd6de0e589c6b9e94f912776254fba9bde7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosReplicationVaultProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c950d0fc072bb79c7a5b80b14c2f17c142071ce96abd4bdcb1ec613a96b9b25(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c197fcc5e5f063a290121f58ec5c7d07f20e49bd3500f3596f4db4f0a3d967b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__812a3382340274c6fe4ca9f250a636d54df82e1fb11896cf8ae0fedb8fac87e4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bff88c73a3e6ba6be5275bc8c99d16c09e8d998d0e9af5600bba6c659c47640e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b854763f022590f194ea2525b238117f5571a90004950410da07a1a6d3928a4f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__caa1d30147c977da4f18b5d8b4e5033bf3a3839d6ed8b1a1f8b601fbb9c37762(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb5dddece021b8133a25c61d9f6c59777eca96c46ed0b1d62c50b3499763e7d0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2b5e469ea61d2fe5629f52371275409c770578fa0c0fc5743f2e7cf002ca785(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9f8e73fb1c6ec4cddacaf057cbd236f28df7d50d7046216149bd4b50332cc46(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__791cc2db5b6b267b1b8978a7645e22ca74f8cd0bdd861ffd0b1886c5cc0ec3eb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c297ecf9593df4ce6e8c5075725546a85e8f4cfb64fefeba81ff571701f18b4f(
    *,
    replication_source_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    replication_source_vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vault_storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20ed7a80c881e9657c47292819760ec03d3e427f77d261184d3ee610ac2f7b85(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRestoreJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9de89174935c9fce2a53f3335337126710f0e533870870b8500abc1edb8a65ea(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5dde7cf1a8b626b138f237e9fcf007da8991fd51d15cc7daa5e522b6a471c62e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc92975efb39ebc33a21ca44a673d46e1812c02550ff2ce01ca209d2773690c8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8aa6be3e555dc970ae7c02e45f92877bdb2e189fc326cd89cac0d5ada33b5740(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__649d04d51cb96039096c7df7f45e213427a692ee4203546a5515abada4dbae36(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae2dd0eb4c55289b51e7bc7cf866b15ceee0eb6faa94db4b66e1c592e8bc8631(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f40bd40736ec44f74cf0289b4ecccee4a9d6d5b1055a1f5c61e34184dad0213(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8df41fcae953bd44b4c7fef882b6a5fbe282c49833b6d9293aa158bb06d9a24(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38c5276c41147667c74f3a6029f710fbc1cc13b9a708315a0f21f0611a65edba(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2588e3818085b2afb1a8cdec894923877b4375f2e9efd2850bb37651453e0734(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__667ebe3393e88704896054eae54860a6636922bc321161d7235ff83d4793d08b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54c122a19da579b6b8e5eab6af7e86f4bcc3f132f50e9f6cd4443edb0c11b532(
    *,
    restore_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    snapshot_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_client_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_client_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8064864bc994ad48c2a85662658df92b9b6338d52251e1e8fd1c5a1be3dd958(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVaultProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ba5117817af2ad2cb574194334ac6bc65dc09b513eb5e61073b72192ce04be3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf33518c4a9b5d463f573be5fc45f67199da280b2430dbbb93ccd5c9e29740ff(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f24c926879a931f4ae6f908ebee1f2e269fee9b0f41de54fdc5181fc9077caf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10ef37cf410d546016904a3675f5f7cc362de98b1dfd4a853bfd974a57342f7a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f993c33af940d92e9964f36fd59bd2a7c5e2b5a9e65506a8bbcbb35d2ceb250(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbd9675dc1de8a76e711ba6d3818604208ea5eca711c15c0d3290e4fb6af2b3b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1df9870cbb44569adfa906142b2ff6e4b77eadb4d44e50981c1f9314334eb507(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f694e935e997a2e25e7b411409c42d7db18f1a33c6465ec76bf874e0b9fb572(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccea6aa7170e1c3ab63c11db63bc8408e7294d07813d6b3d40085aba0ddf4ecf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ca96586b445f24d8a3cd17c124e10db983b2d8b211a7b5caf40e9036af3db6b(
    value: typing.Optional[typing.List[RosVault.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__094c3068dd34ac94645d0fa802de3f86b5878a4d3c98448d551daa9aa7c1464f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac73d53b8df5d9c999e2a684f855d023c8081dfee5b43d26f6b3a46ef684feeb(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce2d90c1fef7f15bbf9852612a3e9e563f369099058443ea9c435d0ed4786236(
    *,
    vault_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosVault.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vault_storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__118eb87dedc0165296f7b3d57e645d6b5d5508e092a7c53c1ecdcc3ec42c9ac0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VaultProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d2418343bddc909c7e87f52c089731921bc3c8b613ed61dfc9abd654f76187e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab0d5e283ce080dccf75f89468eb8a0f796004ef40d9571b676a95947859a356(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da56e2543c4779fea6e9e9af4945f85d82b009893874d803076cf6c9d6196842(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36a23955d72280cbc16481f191f0e18b687703f71a1992ccaf5eb78705a1e66b(
    *,
    vault_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vault_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosVault.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vault_storage_class: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55c4ad0a8e13954d77fb017de80aebbb84aabf01284e0f8279ac6533809901a5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BackupClientsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__101998cc9f0588f9c1e1603ff7d5d0032a9b379da5f7b519fa0e8014b22d8489(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf2188932a7dc9d9a7fa79e158b0acb4ba18e522c7ac16ed8c67721f848158f0(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9107c91bfa236ce3352563687b43856134a7a992f97bd612e8fbd90cb44da4e8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b11fae136486924372bd2dbe5c8583228a6cf5699066e8ed3838c9c30b76c0bd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[CrossAccountProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe64efd5ac931fe987480eefe06c213b2fd392361c75e3cadf82f0d67300c95a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a20c2cba844630a077416597128d1bb1e3b6c90405c615205f1fade73f19c1c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52bc4dc25e208bc1ef922b32761aa91fa5ba221eec428106578567edca108fca(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5b29c3351e78644fa93ffc5311dce8027fd4c6807a9d0cdba4ce60c213791b5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DbAgentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__020eb0faf838a674d1d01f95f226bf4b9c781794611e00916ec8829a6a7dfb65(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__abfed8739efff7a01010b194ed50697c5f10a53ffd85f0ddae9a41a9686ca004(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6896176fba63852487ad9c5adee867511a175b876091464f066b40627245e449(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8be57fe9da1e39bbe0c463bb08db0e22360cf849186fc787ff8440b3419d5461(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DbPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e71cda9a27786f04a0baa2c8811950aa016b4cd14f4cd1669f1e7d127ad436b0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a0b26a65f1700f235100e6a5b82601d74dac3d4b2639b6b42f3abf9d523f9c7(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a096c173adfc7f6f678268104017001b2a0fabf0e0e5b7676651f25bc5d77eaa(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8de1e367c2b5f7ca096c0bf2016aaaf19eabf172a50e721ffefb20e3e357bd7a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DbVaultProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af9593d3474b67b22ce1e8b27ff3de563a39b30f5bf1b8ca4723e0f61ccb1305(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9178a634f306aa9c016c2692379d58f75ee3f088acb8651f1feeaba633c8613b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a78c990c0fa3950d2c853304e49ae95c987faa69c2fbcdbd71dd5517072d49e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37a7870a51f96eb5f19bc418c10d9b43b5b512437e6bcd7838df9aa1c01b0628(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EcsBackupPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0646c2d9e5a7baf7ff84134a8859d72bdffeac2f796f285d02708a1f1fdc36d9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__760a2758c6e411af566b6d3848d2ba863e4b78fbdb75dfa10469e70bf8ed3807(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d64fe06628ed24898f88d77fb162803e31b2d5a359b1063307d1576ae110f4f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
