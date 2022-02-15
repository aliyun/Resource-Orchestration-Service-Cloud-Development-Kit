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

from ._jsii import *

import ros_cdk_core


class BackupClients(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.BackupClients",
):
    '''A ROS resource type:  ``ALIYUN::HBR::BackupClients``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BackupClientsProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::BackupClients``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClientIds")
    def attr_client_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClientIds: ID list of clients installed in instances.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClientIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceIds: ID list of instances to install backup client.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.BackupClientsProps",
    jsii_struct_bases=[],
    name_mapping={"instance_ids": "instanceIds"},
)
class BackupClientsProps:
    def __init__(
        self,
        *,
        instance_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::BackupClients``.

        :param instance_ids: Property instanceIds: ID list of instances to install backup client.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_ids": instance_ids,
        }

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property instanceIds: ID list of instances to install backup client.'''
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BackupClientsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DbAgent(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.DbAgent",
):
    '''A ROS resource type:  ``ALIYUN::HBR::DbAgent``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DbAgentProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::DbAgent``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceIds: Uni backup agent instance ids.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TaskId: Uni backup agent install task id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUniBackupInstanceDetails")
    def attr_uni_backup_instance_details(self) -> ros_cdk_core.IResolvable:
        '''Attribute UniBackupInstanceDetails: Uni backup agent instance info details.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUniBackupInstanceDetails"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUniBackupInstances")
    def attr_uni_backup_instances(self) -> ros_cdk_core.IResolvable:
        '''Attribute UniBackupInstances: Uni backup agent instance info.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUniBackupInstances"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.DbAgentProps",
    jsii_struct_bases=[],
    name_mapping={"instance_info": "instanceInfo"},
)
class DbAgentProps:
    def __init__(
        self,
        *,
        instance_info: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosDbAgent.InstanceInfoProperty"]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::DbAgent``.

        :param instance_info: Property instanceInfo: Instance infos.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_info": instance_info,
        }

    @builtins.property
    def instance_info(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDbAgent.InstanceInfoProperty"]]]:
        '''Property instanceInfo: Instance infos.'''
        result = self._values.get("instance_info")
        assert result is not None, "Required property 'instance_info' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDbAgent.InstanceInfoProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DbAgentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DbPlan(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.DbPlan",
):
    '''A ROS resource type:  ``ALIYUN::HBR::DbPlan``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DbPlanProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::DbPlan``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrContinuousPlan")
    def attr_continuous_plan(self) -> ros_cdk_core.IResolvable:
        '''Attribute ContinuousPlan: Continuous backup plan schedule.

        Use {   "type": "continuous" }.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrContinuousPlan"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrContinuousUuid")
    def attr_continuous_uuid(self) -> ros_cdk_core.IResolvable:
        '''Attribute ContinuousUuid: Uuid of continuous backup plan.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrContinuousUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCumulativePlan")
    def attr_cumulative_plan(self) -> ros_cdk_core.IResolvable:
        '''Attribute CumulativePlan: Cumulative plan schedule, only for mssql.

        More details see FullPlan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCumulativePlan"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCumulativeUuid")
    def attr_cumulative_uuid(self) -> ros_cdk_core.IResolvable:
        '''Attribute CumulativeUuid: Uuid of cumulative plan.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCumulativeUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbPlanName")
    def attr_db_plan_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DbPlanName: Display name of the backup plan.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbPlanName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFullPlan")
    def attr_full_plan(self) -> ros_cdk_core.IResolvable:
        '''Attribute FullPlan: Full backup plan schedule.

        daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFullPlan"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFullUuid")
    def attr_full_uuid(self) -> ros_cdk_core.IResolvable:
        '''Attribute FullUuid: Uuid of full backup plan.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFullUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostUuid")
    def attr_host_uuid(self) -> ros_cdk_core.IResolvable:
        '''Attribute HostUuid: Uuid of the host of the database instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIncPlan")
    def attr_inc_plan(self) -> ros_cdk_core.IResolvable:
        '''Attribute IncPlan: Incremental backup plan schedule.

        Only for mysql and oracle. More details see FullPlan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIncPlan"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIncUuid")
    def attr_inc_uuid(self) -> ros_cdk_core.IResolvable:
        '''Attribute IncUuid: Uuid of the incremental bakcup plan.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIncUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceUuid")
    def attr_instance_uuid(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceUuid: Uuid of database instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLogPlan")
    def attr_log_plan(self) -> ros_cdk_core.IResolvable:
        '''Attribute LogPlan: Log backup plan schedule.More details see FullPlan.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogPlan"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLogUuid")
    def attr_log_uuid(self) -> ros_cdk_core.IResolvable:
        '''Attribute LogUuid: Uuid of the log backup plan.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMaxRateLimit")
    def attr_max_rate_limit(self) -> ros_cdk_core.IResolvable:
        '''Attribute MaxRateLimit: Max rate limit for backup job,.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMaxRateLimit"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMaxRetrySeconds")
    def attr_max_retry_seconds(self) -> ros_cdk_core.IResolvable:
        '''Attribute MaxRetrySeconds: Max retry seconds on network failure.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMaxRetrySeconds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOptions")
    def attr_options(self) -> ros_cdk_core.IResolvable:
        '''Attribute Options: Backup options in json format, different for each type of database.

        For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOptions"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PlanId: Id of the backup plan.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPlanId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTarget")
    def attr_target(self) -> ros_cdk_core.IResolvable:
        '''Attribute Target: Target vault to backup.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTarget"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVaultId"))


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
        db_plan_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_uuid: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vault_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        continuous_plan: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cumulative_plan: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        full_plan: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        inc_plan: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_uuid: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        log_plan: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        max_rate_limit: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        max_retry_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        options: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        source: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosDbPlan.SourceProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::DbPlan``.

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
        self._values: typing.Dict[str, typing.Any] = {
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
    def db_plan_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dbPlanName: Display name of the backup plan.'''
        result = self._values.get("db_plan_name")
        assert result is not None, "Required property 'db_plan_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_uuid(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property hostUuid: Uuid of the host of the database instance.'''
        result = self._values.get("host_uuid")
        assert result is not None, "Required property 'host_uuid' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.'''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vault_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.'''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def continuous_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property continuousPlan: Continuous backup plan schedule.

        Use {   "type": "continuous" }.
        '''
        result = self._values.get("continuous_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cumulative_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property cumulativePlan: Cumulative plan schedule, only for mssql.

        More details see FullPlan.
        '''
        result = self._values.get("cumulative_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def full_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property fullPlan: Full backup plan schedule.

        daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        result = self._values.get("full_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def inc_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property incPlan: Incremental backup plan schedule.

        Only for mysql and oracle. More details see FullPlan.
        '''
        result = self._values.get("inc_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_uuid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceUuid: Uuid of database instance.'''
        result = self._values.get("instance_uuid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property logPlan: Log backup plan schedule.More details see FullPlan.'''
        result = self._values.get("log_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def max_rate_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property maxRateLimit: Max rate limit for backup job,.'''
        result = self._values.get("max_rate_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def max_retry_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property maxRetrySeconds: Max retry seconds on network failure.'''
        result = self._values.get("max_retry_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property options: Backup options in json format, different for each type of database.

        For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosDbPlan.SourceProperty"]]:
        '''Property source: Which database instance or database will be backup.'''
        result = self._values.get("source")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosDbPlan.SourceProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DbPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DbVault(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.DbVault",
):
    '''A ROS resource type:  ``ALIYUN::HBR::DbVault``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DbVaultProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::DbVault``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute Description: Description of the vault.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRetentionDays")
    def attr_retention_days(self) -> ros_cdk_core.IResolvable:
        '''Attribute RetentionDays: Data retention days of the vault.

        Data will be deleted when it's older than this time.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRetentionDays"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VaultId: Vault ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVaultId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute VaultName: Display name of the vault.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVaultName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVaultRegionId")
    def attr_vault_region_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VaultRegionId: The region ID to create the vault.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVaultRegionId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.DbVaultProps",
    jsii_struct_bases=[],
    name_mapping={
        "retention_days": "retentionDays",
        "vault_name": "vaultName",
        "vault_region_id": "vaultRegionId",
        "description": "description",
    },
)
class DbVaultProps:
    def __init__(
        self,
        *,
        retention_days: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        vault_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vault_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::DbVault``.

        :param retention_days: Property retentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
        :param vault_name: Property vaultName: Display name of the vault.
        :param vault_region_id: Property vaultRegionId: The region ID to create the vault.
        :param description: Property description: Description of the vault.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "retention_days": retention_days,
            "vault_name": vault_name,
            "vault_region_id": vault_region_id,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def retention_days(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property retentionDays: Data retention days of the vault.

        Data will be deleted when it's older than this time.
        '''
        result = self._values.get("retention_days")
        assert result is not None, "Required property 'retention_days' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vault_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vaultName: Display name of the vault.'''
        result = self._values.get("vault_name")
        assert result is not None, "Required property 'vault_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vault_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vaultRegionId: The region ID to create the vault.'''
        result = self._values.get("vault_region_id")
        assert result is not None, "Required property 'vault_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of the vault.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DbVaultProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RestoreJob(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RestoreJob",
):
    '''A ROS resource type:  ``ALIYUN::HBR::RestoreJob``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RestoreJobProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::RestoreJob``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrErrorMessage")
    def attr_error_message(self) -> ros_cdk_core.IResolvable:
        '''Attribute ErrorMessage: Error message of restore job.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrErrorMessage"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRestoreId")
    def attr_restore_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RestoreId: Restore job ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRestoreId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRestoreType")
    def attr_restore_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute RestoreType: Restore type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRestoreType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute SourceType: Source type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> ros_cdk_core.IResolvable:
        '''Attribute Status: Restore job status.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatus"))


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
        restore_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        snapshot_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_client_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_client_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_path: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vault_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::RestoreJob``.

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
        self._values: typing.Dict[str, typing.Any] = {
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
    def restore_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property restoreType: Restore type.'''
        result = self._values.get("restore_type")
        assert result is not None, "Required property 'restore_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def snapshot_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property snapshotId: Snapshot ID.'''
        result = self._values.get("snapshot_id")
        assert result is not None, "Required property 'snapshot_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_client_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceClientId: Source client ID.

        It should be provided when SourceType=FILE.
        '''
        result = self._values.get("source_client_id")
        assert result is not None, "Required property 'source_client_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_instance_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceInstanceId: Source instance ID.

        It should be provided when SourceType=ECS_FILE.
        '''
        result = self._values.get("source_instance_id")
        assert result is not None, "Required property 'source_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceType: Source type.'''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_client_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property targetClientId: Target client ID.

        It should be provided when RestoreType=FILE.
        '''
        result = self._values.get("target_client_id")
        assert result is not None, "Required property 'target_client_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_instance_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property targetInstanceId: Target instance ID.

        It should be provided when RestoreType=ECS_FILE.
        '''
        result = self._values.get("target_instance_id")
        assert result is not None, "Required property 'target_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_path(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property targetPath: Target path.

        For instance, "/".
        '''
        result = self._values.get("target_path")
        assert result is not None, "Required property 'target_path' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vault_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vaultId: Vault ID.'''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RestoreJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBackupClients(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosBackupClients",
):
    '''A ROS template type:  ``ALIYUN::HBR::BackupClients``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBackupClientsProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::BackupClients``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClientIds")
    def attr_client_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClientIds: ID list of clients installed in instances
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClientIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceIds: ID list of instances to install backup client
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceIds")
    def instance_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: instanceIds: ID list of instances to install backup client
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "instanceIds"))

    @instance_ids.setter
    def instance_ids(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "instanceIds", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosBackupClientsProps",
    jsii_struct_bases=[],
    name_mapping={"instance_ids": "instanceIds"},
)
class RosBackupClientsProps:
    def __init__(
        self,
        *,
        instance_ids: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::BackupClients``.

        :param instance_ids: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_ids": instance_ids,
        }

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: instanceIds: ID list of instances to install backup client
        '''
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBackupClientsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDbAgent(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosDbAgent",
):
    '''A ROS template type:  ``ALIYUN::HBR::DbAgent``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDbAgentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::DbAgent``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceIds: Uni backup agent instance ids
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TaskId: Uni backup agent install task id.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUniBackupInstanceDetails")
    def attr_uni_backup_instance_details(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: UniBackupInstanceDetails: Uni backup agent instance info details
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUniBackupInstanceDetails"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUniBackupInstances")
    def attr_uni_backup_instances(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: UniBackupInstances: Uni backup agent instance info
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUniBackupInstances"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceInfo")
    def instance_info(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDbAgent.InstanceInfoProperty"]]]:
        '''
        :Property: instanceInfo: Instance infos
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDbAgent.InstanceInfoProperty"]]], jsii.get(self, "instanceInfo"))

    @instance_info.setter
    def instance_info(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDbAgent.InstanceInfoProperty"]]],
    ) -> None:
        jsii.set(self, "instanceInfo", value)

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
            instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            source_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            authentication_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_id: 
            :param source_type: 
            :param authentication_type: 
            :param password: 
            :param user_name: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
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
        def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: instanceId: ECS instance id
            '''
            result = self._values.get("instance_id")
            assert result is not None, "Required property 'instance_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: sourceType: Data source type, valid value: MYSQL, ORACLE, MSSQL
            '''
            result = self._values.get("source_type")
            assert result is not None, "Required property 'source_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def authentication_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: authenticationType: verification method, valid value: INSTANCE, ACCESS_KEY
            '''
            result = self._values.get("authentication_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: password: Database backup account password
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: userName: Database backup account username
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    name_mapping={"instance_info": "instanceInfo"},
)
class RosDbAgentProps:
    def __init__(
        self,
        *,
        instance_info: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosDbAgent.InstanceInfoProperty]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::DbAgent``.

        :param instance_info: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_info": instance_info,
        }

    @builtins.property
    def instance_info(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDbAgent.InstanceInfoProperty]]]:
        '''
        :Property: instanceInfo: Instance infos
        '''
        result = self._values.get("instance_info")
        assert result is not None, "Required property 'instance_info' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDbAgent.InstanceInfoProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDbAgentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDbPlan(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosDbPlan",
):
    '''A ROS template type:  ``ALIYUN::HBR::DbPlan``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDbPlanProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::DbPlan``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrContinuousPlan")
    def attr_continuous_plan(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ContinuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrContinuousPlan"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrContinuousUuid")
    def attr_continuous_uuid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ContinuousUuid: Uuid of continuous backup plan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrContinuousUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCumulativePlan")
    def attr_cumulative_plan(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCumulativePlan"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCumulativeUuid")
    def attr_cumulative_uuid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CumulativeUuid: Uuid of cumulative plan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCumulativeUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDbPlanName")
    def attr_db_plan_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DbPlanName: Display name of the backup plan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDbPlanName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFullPlan")
    def attr_full_plan(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFullPlan"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFullUuid")
    def attr_full_uuid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FullUuid: Uuid of full backup plan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFullUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostUuid")
    def attr_host_uuid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HostUuid: Uuid of the host of the database instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIncPlan")
    def attr_inc_plan(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IncPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIncPlan"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIncUuid")
    def attr_inc_uuid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IncUuid: Uuid of the incremental bakcup plan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIncUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceUuid")
    def attr_instance_uuid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceUuid: Uuid of database instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLogPlan")
    def attr_log_plan(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LogPlan: Log backup plan schedule.More details see FullPlan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogPlan"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLogUuid")
    def attr_log_uuid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LogUuid: Uuid of the log backup plan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMaxRateLimit")
    def attr_max_rate_limit(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MaxRateLimit: Max rate limit for backup job,
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMaxRateLimit"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMaxRetrySeconds")
    def attr_max_retry_seconds(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MaxRetrySeconds: Max retry seconds on network failure.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMaxRetrySeconds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOptions")
    def attr_options(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOptions"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PlanId: Id of the backup plan.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPlanId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTarget")
    def attr_target(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Target: Target vault to backup.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTarget"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVaultId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dbPlanName")
    def db_plan_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbPlanName: Display name of the backup plan.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dbPlanName"))

    @db_plan_name.setter
    def db_plan_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dbPlanName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="hostUuid")
    def host_uuid(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: hostUuid: Uuid of the host of the database instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "hostUuid"))

    @host_uuid.setter
    def host_uuid(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "hostUuid", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceType")
    def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vaultId")
    def vault_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vaultId"))

    @vault_id.setter
    def vault_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vaultId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="continuousPlan")
    def continuous_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: continuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "continuousPlan"))

    @continuous_plan.setter
    def continuous_plan(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "continuousPlan", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cumulativePlan")
    def cumulative_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "cumulativePlan"))

    @cumulative_plan.setter
    def cumulative_plan(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cumulativePlan", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="fullPlan")
    def full_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: fullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "fullPlan"))

    @full_plan.setter
    def full_plan(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "fullPlan", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="incPlan")
    def inc_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: incPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "incPlan"))

    @inc_plan.setter
    def inc_plan(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "incPlan", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceUuid")
    def instance_uuid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceUuid: Uuid of database instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceUuid"))

    @instance_uuid.setter
    def instance_uuid(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceUuid", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logPlan")
    def log_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logPlan: Log backup plan schedule.More details see FullPlan.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "logPlan"))

    @log_plan.setter
    def log_plan(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "logPlan", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="maxRateLimit")
    def max_rate_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: maxRateLimit: Max rate limit for backup job,
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "maxRateLimit"))

    @max_rate_limit.setter
    def max_rate_limit(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "maxRateLimit", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="maxRetrySeconds")
    def max_retry_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: maxRetrySeconds: Max retry seconds on network failure.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "maxRetrySeconds"))

    @max_retry_seconds.setter
    def max_retry_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "maxRetrySeconds", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="options")
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "options"))

    @options.setter
    def options(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "options", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="source")
    def source(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosDbPlan.SourceProperty"]]:
        '''
        :Property: source: Which database instance or database will be backup.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosDbPlan.SourceProperty"]], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosDbPlan.SourceProperty"]],
    ) -> None:
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
            entries: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param entries: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if entries is not None:
                self._values["entries"] = entries

        @builtins.property
        def entries(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: entries: Backup database instance or databases or tables. For Oracle, use ["oracle://${instanceName}", "oracle://${instanceName}/archivelog"], ${instanceName} is the name of the oracle database instance, which can be get from dbAgent resource. For Mysql, use "mysql://${instanceName}". For SQL Server,  use ["mssql://${instanceName}/${databse1}", "mssql://${instanceName}/${databse2}"], ${databse} can be get from dbAgent resource(MSSQL)
            '''
            result = self._values.get("entries")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

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
        db_plan_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_uuid: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vault_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        continuous_plan: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cumulative_plan: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        full_plan: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        inc_plan: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_uuid: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        log_plan: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        max_rate_limit: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        max_retry_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        options: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        source: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosDbPlan.SourceProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::DbPlan``.

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
        self._values: typing.Dict[str, typing.Any] = {
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
    def db_plan_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dbPlanName: Display name of the backup plan.
        '''
        result = self._values.get("db_plan_name")
        assert result is not None, "Required property 'db_plan_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_uuid(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: hostUuid: Uuid of the host of the database instance.
        '''
        result = self._values.get("host_uuid")
        assert result is not None, "Required property 'host_uuid' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vault_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vaultId: Vault ID to create backup plan, the backup data will be stored to the vault.
        '''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def continuous_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: continuousPlan: Continuous backup plan schedule. Use {   "type": "continuous" }.
        '''
        result = self._values.get("continuous_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cumulative_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: cumulativePlan: Cumulative plan schedule, only for mssql. More details see FullPlan.
        '''
        result = self._values.get("cumulative_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def full_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: fullPlan: Full backup plan schedule. daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        result = self._values.get("full_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def inc_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: incPlan: Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.
        '''
        result = self._values.get("inc_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_uuid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceUuid: Uuid of database instance.
        '''
        result = self._values.get("instance_uuid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_plan(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: logPlan: Log backup plan schedule.More details see FullPlan.
        '''
        result = self._values.get("log_plan")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def max_rate_limit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: maxRateLimit: Max rate limit for backup job,
        '''
        result = self._values.get("max_rate_limit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def max_retry_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: maxRetrySeconds: Max retry seconds on network failure.
        '''
        result = self._values.get("max_retry_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: options: Backup options in json format, different for each type of database. For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        result = self._values.get("options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosDbPlan.SourceProperty]]:
        '''
        :Property: source: Which database instance or database will be backup.
        '''
        result = self._values.get("source")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosDbPlan.SourceProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDbPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDbVault(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosDbVault",
):
    '''A ROS template type:  ``ALIYUN::HBR::DbVault``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDbVaultProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::DbVault``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Description: Description of the vault.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRetentionDays")
    def attr_retention_days(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RetentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRetentionDays"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VaultId: Vault ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVaultId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VaultName: Display name of the vault.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVaultName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVaultRegionId")
    def attr_vault_region_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VaultRegionId: The region ID to create the vault.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVaultRegionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="retentionDays")
    def retention_days(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: retentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "retentionDays"))

    @retention_days.setter
    def retention_days(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "retentionDays", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vaultName")
    def vault_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vaultName: Display name of the vault.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vaultName"))

    @vault_name.setter
    def vault_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vaultName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vaultRegionId")
    def vault_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vaultRegionId: The region ID to create the vault.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vaultRegionId"))

    @vault_region_id.setter
    def vault_region_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vaultRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the vault.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.RosDbVaultProps",
    jsii_struct_bases=[],
    name_mapping={
        "retention_days": "retentionDays",
        "vault_name": "vaultName",
        "vault_region_id": "vaultRegionId",
        "description": "description",
    },
)
class RosDbVaultProps:
    def __init__(
        self,
        *,
        retention_days: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        vault_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vault_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::DbVault``.

        :param retention_days: 
        :param vault_name: 
        :param vault_region_id: 
        :param description: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "retention_days": retention_days,
            "vault_name": vault_name,
            "vault_region_id": vault_region_id,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def retention_days(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: retentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
        '''
        result = self._values.get("retention_days")
        assert result is not None, "Required property 'retention_days' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vault_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vaultName: Display name of the vault.
        '''
        result = self._values.get("vault_name")
        assert result is not None, "Required property 'vault_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vault_region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vaultRegionId: The region ID to create the vault.
        '''
        result = self._values.get("vault_region_id")
        assert result is not None, "Required property 'vault_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the vault.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDbVaultProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRestoreJob(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosRestoreJob",
):
    '''A ROS template type:  ``ALIYUN::HBR::RestoreJob``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRestoreJobProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::RestoreJob``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrErrorMessage")
    def attr_error_message(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ErrorMessage: Error message of restore job
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrErrorMessage"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRestoreId")
    def attr_restore_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RestoreId: Restore job ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRestoreId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRestoreType")
    def attr_restore_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RestoreType: Restore type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRestoreType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SourceType: Source type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Status: Restore job status
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="restoreType")
    def restore_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: restoreType: Restore type
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "restoreType"))

    @restore_type.setter
    def restore_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "restoreType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="snapshotId")
    def snapshot_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: snapshotId: Snapshot ID
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "snapshotId"))

    @snapshot_id.setter
    def snapshot_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "snapshotId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceClientId")
    def source_client_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceClientId"))

    @source_client_id.setter
    def source_client_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourceClientId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceInstanceId")
    def source_instance_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceInstanceId"))

    @source_instance_id.setter
    def source_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourceInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceType")
    def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceType: Source type
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetClientId")
    def target_client_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "targetClientId"))

    @target_client_id.setter
    def target_client_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "targetClientId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetInstanceId")
    def target_instance_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "targetInstanceId"))

    @target_instance_id.setter
    def target_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "targetInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetPath")
    def target_path(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetPath: Target path. For instance, "/".
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "targetPath"))

    @target_path.setter
    def target_path(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "targetPath", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vaultId")
    def vault_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vaultId: Vault ID
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vaultId"))

    @vault_id.setter
    def vault_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        restore_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        snapshot_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_client_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_client_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_path: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vault_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::RestoreJob``.

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
        self._values: typing.Dict[str, typing.Any] = {
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
    def restore_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: restoreType: Restore type
        '''
        result = self._values.get("restore_type")
        assert result is not None, "Required property 'restore_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def snapshot_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: snapshotId: Snapshot ID
        '''
        result = self._values.get("snapshot_id")
        assert result is not None, "Required property 'snapshot_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_client_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceClientId: Source client ID. It should be provided when SourceType=FILE.
        '''
        result = self._values.get("source_client_id")
        assert result is not None, "Required property 'source_client_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_instance_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceInstanceId: Source instance ID. It should be provided when SourceType=ECS_FILE.
        '''
        result = self._values.get("source_instance_id")
        assert result is not None, "Required property 'source_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceType: Source type
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_client_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetClientId: Target client ID. It should be provided when RestoreType=FILE.
        '''
        result = self._values.get("target_client_id")
        assert result is not None, "Required property 'target_client_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_instance_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetInstanceId: Target instance ID. It should be provided when RestoreType=ECS_FILE.
        '''
        result = self._values.get("target_instance_id")
        assert result is not None, "Required property 'target_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_path(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetPath: Target path. For instance, "/".
        '''
        result = self._values.get("target_path")
        assert result is not None, "Required property 'target_path' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vault_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vaultId: Vault ID
        '''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRestoreJobProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "BackupClients",
    "BackupClientsProps",
    "DbAgent",
    "DbAgentProps",
    "DbPlan",
    "DbPlanProps",
    "DbVault",
    "DbVaultProps",
    "RestoreJob",
    "RestoreJobProps",
    "RosBackupClients",
    "RosBackupClientsProps",
    "RosDbAgent",
    "RosDbAgentProps",
    "RosDbPlan",
    "RosDbPlanProps",
    "RosDbVault",
    "RosDbVaultProps",
    "RosRestoreJob",
    "RosRestoreJobProps",
]

publication.publish()
