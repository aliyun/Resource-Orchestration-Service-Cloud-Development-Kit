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


class BackupClients(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.BackupClients",
):
    '''A ROS resource type:  ``ALIYUN::HBR::BackupClients``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BackupClientsProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55c4ad0a8e13954d77fb017de80aebbb84aabf01284e0f8279ac6533809901a5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClientIds")
    def attr_client_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClientIds: ID list of clients installed in instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClientIds"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceIds: ID list of instances to install backup client.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))


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
        '''Properties for defining a ``ALIYUN::HBR::BackupClients``.

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


class DbAgent(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.DbAgent",
):
    '''A ROS resource type:  ``ALIYUN::HBR::DbAgent``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DbAgentProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5b29c3351e78644fa93ffc5311dce8027fd4c6807a9d0cdba4ce60c213791b5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceIds: Uni backup agent instance ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TaskId: Uni backup agent install task id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="attrUniBackupInstanceDetails")
    def attr_uni_backup_instance_details(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UniBackupInstanceDetails: Uni backup agent instance info details.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUniBackupInstanceDetails"))

    @builtins.property
    @jsii.member(jsii_name="attrUniBackupInstances")
    def attr_uni_backup_instances(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UniBackupInstances: Uni backup agent instance info.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUniBackupInstances"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.DbAgentProps",
    jsii_struct_bases=[],
    name_mapping={"instance_info": "instanceInfo"},
)
class DbAgentProps:
    def __init__(
        self,
        *,
        instance_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDbAgent.InstanceInfoProperty", typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::DbAgent``.

        :param instance_info: Property instanceInfo: Instance infos.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c2260099289c94a9004cf5330a1ce2e434cf6a5b83967553d363d3670689991)
            check_type(argname="argument instance_info", value=instance_info, expected_type=type_hints["instance_info"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_info": instance_info,
        }

    @builtins.property
    def instance_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbAgent.InstanceInfoProperty"]]]:
        '''Property instanceInfo: Instance infos.'''
        result = self._values.get("instance_info")
        assert result is not None, "Required property 'instance_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDbAgent.InstanceInfoProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DbAgentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DbPlan(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.DbPlan",
):
    '''A ROS resource type:  ``ALIYUN::HBR::DbPlan``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DbPlanProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8be57fe9da1e39bbe0c463bb08db0e22360cf849186fc787ff8440b3419d5461)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrContinuousPlan")
    def attr_continuous_plan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ContinuousPlan: Continuous backup plan schedule.

        Use {   "type": "continuous" }.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContinuousPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrContinuousUuid")
    def attr_continuous_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ContinuousUuid: Uuid of continuous backup plan.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContinuousUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrCumulativePlan")
    def attr_cumulative_plan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CumulativePlan: Cumulative plan schedule, only for mssql.

        More details see FullPlan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCumulativePlan"))

    @builtins.property
    @jsii.member(jsii_name="attrCumulativeUuid")
    def attr_cumulative_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CumulativeUuid: Uuid of cumulative plan.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCumulativeUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrDbPlanName")
    def attr_db_plan_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DbPlanName: Display name of the backup plan.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDbPlanName"))

    @builtins.property
    @jsii.member(jsii_name="attrFullPlan")
    def attr_full_plan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FullPlan: Full backup plan schedule.

        daily: {"type": "daily", "start": "00:00:00", "interval": 3}, weekly {"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFullPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrFullUuid")
    def attr_full_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FullUuid: Uuid of full backup plan.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFullUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrHostUuid")
    def attr_host_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HostUuid: Uuid of the host of the database instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrIncPlan")
    def attr_inc_plan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IncPlan: Incremental backup plan schedule.

        Only for mysql and oracle. More details see FullPlan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIncPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrIncUuid")
    def attr_inc_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IncUuid: Uuid of the incremental bakcup plan.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIncUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceUuid")
    def attr_instance_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceUuid: Uuid of database instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrLogPlan")
    def attr_log_plan(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LogPlan: Log backup plan schedule.More details see FullPlan.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogPlan"))

    @builtins.property
    @jsii.member(jsii_name="attrLogUuid")
    def attr_log_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LogUuid: Uuid of the log backup plan.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxRateLimit")
    def attr_max_rate_limit(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MaxRateLimit: Max rate limit for backup job,.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxRateLimit"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxRetrySeconds")
    def attr_max_retry_seconds(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MaxRetrySeconds: Max retry seconds on network failure.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxRetrySeconds"))

    @builtins.property
    @jsii.member(jsii_name="attrOptions")
    def attr_options(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Options: Backup options in json format, different for each type of database.

        For Oracle, use {"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}, "channels" means numbers of concurrent theads, "archivelog_reserve_hours" means how long before the archive log will be deleted after backup job completed, other paramters should use the default vaule. For Mysql, use {"channels":4,"compression":"lzop","del_binlog":false}, "del_binlog" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {"channels":4,"verify":false,"compression":"lzop","backup_new_databases":false}.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOptions"))

    @builtins.property
    @jsii.member(jsii_name="attrPlanId")
    def attr_plan_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PlanId: Id of the backup plan.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPlanId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SourceType: Database type, allowed value: MYSQL, ORACLE, MSSQL.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrTarget")
    def attr_target(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Target: Target vault to backup.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTarget"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VaultId: Vault ID to create backup plan, the backup data will be stored to the vault.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultId"))


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


class DbVault(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.DbVault",
):
    '''A ROS resource type:  ``ALIYUN::HBR::DbVault``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DbVaultProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8de1e367c2b5f7ca096c0bf2016aaaf19eabf172a50e721ffefb20e3e357bd7a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: Description of the vault.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrRetentionDays")
    def attr_retention_days(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RetentionDays: Data retention days of the vault.

        Data will be deleted when it's older than this time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRetentionDays"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VaultId: Vault ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VaultName: Display name of the vault.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultName"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultRegionId")
    def attr_vault_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VaultRegionId: The region ID to create the vault.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultRegionId"))


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
        '''Properties for defining a ``ALIYUN::HBR::DbVault``.

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


class RestoreJob(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RestoreJob",
):
    '''A ROS resource type:  ``ALIYUN::HBR::RestoreJob``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RestoreJobProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7a3b5f4ffbb1175dbe8b23bfd591faea3b199652d132511028ff88f27342dc7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrErrorMessage")
    def attr_error_message(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ErrorMessage: Error message of restore job.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrErrorMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrRestoreId")
    def attr_restore_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RestoreId: Restore job ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRestoreId"))

    @builtins.property
    @jsii.member(jsii_name="attrRestoreType")
    def attr_restore_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RestoreType: Restore type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRestoreType"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceType")
    def attr_source_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SourceType: Source type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Status: Restore job status.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatus"))


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
    '''A ROS template type:  ``ALIYUN::HBR::BackupClients``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBackupClientsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::BackupClients``.

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
        '''Properties for defining a ``ALIYUN::HBR::BackupClients``.

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


class RosDbAgent(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosDbAgent",
):
    '''A ROS template type:  ``ALIYUN::HBR::DbAgent``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDbAgentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::DbAgent``.

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
    name_mapping={"instance_info": "instanceInfo"},
)
class RosDbAgentProps:
    def __init__(
        self,
        *,
        instance_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbAgent.InstanceInfoProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::HBR::DbAgent``.

        :param instance_info: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cdc942c087f1229f8dc8a7d7e28adbd7eda1d09d7f7f1b16db544489e5054201)
            check_type(argname="argument instance_info", value=instance_info, expected_type=type_hints["instance_info"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_info": instance_info,
        }

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
    '''A ROS template type:  ``ALIYUN::HBR::DbPlan``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDbPlanProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::DbPlan``.

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
    '''A ROS template type:  ``ALIYUN::HBR::DbVault``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDbVaultProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::DbVault``.

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
        '''Properties for defining a ``ALIYUN::HBR::DbVault``.

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


class RosRestoreJob(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.RosRestoreJob",
):
    '''A ROS template type:  ``ALIYUN::HBR::RestoreJob``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRestoreJobProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::HBR::RestoreJob``.

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

def _typecheckingstub__55c4ad0a8e13954d77fb017de80aebbb84aabf01284e0f8279ac6533809901a5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BackupClientsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a94b2401d75b5a76244d0a0303664832aa529ddc0a94890d71dbb4d306c551cb(
    *,
    instance_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    tags: typing.Optional[typing.Sequence[typing.Union[RosBackupClients.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
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

def _typecheckingstub__9c2260099289c94a9004cf5330a1ce2e434cf6a5b83967553d363d3670689991(
    *,
    instance_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDbAgent.InstanceInfoProperty, typing.Dict[builtins.str, typing.Any]]]]],
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

def _typecheckingstub__8de1e367c2b5f7ca096c0bf2016aaaf19eabf172a50e721ffefb20e3e357bd7a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DbVaultProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
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

def _typecheckingstub__f7a3b5f4ffbb1175dbe8b23bfd591faea3b199652d132511028ff88f27342dc7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RestoreJobProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
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
