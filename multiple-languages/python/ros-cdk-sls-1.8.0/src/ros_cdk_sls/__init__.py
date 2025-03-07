'''
## Aliyun ROS SLS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as SLS from '@alicloud/ros-cdk-sls';
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
    jsii_type="@alicloud/ros-cdk-sls.AlertProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class AlertProps:
    def __init__(
        self,
        *,
        detail: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlert.DetailProperty", typing.Dict[builtins.str, typing.Any]]],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Alert``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert

        :param detail: Property detail:.
        :param project: Property project: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3915aaafcbce9b37683554165f5ef18d4047883b83d2acc3696d4f04edbd3d00)
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "detail": detail,
            "project": project,
        }

    @builtins.property
    def detail(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.DetailProperty"]:
        '''Property detail:.'''
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.DetailProperty"], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property project: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AlertProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.ApplyConfigToMachineGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_name": "configName",
        "group_name": "groupName",
        "project_name": "projectName",
    },
)
class ApplyConfigToMachineGroupProps:
    def __init__(
        self,
        *,
        config_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ApplyConfigToMachineGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup

        :param config_name: Property configName: Apply config to the config name.
        :param group_name: Property groupName: Apply config to the group name.
        :param project_name: Property projectName: Apply config to the project name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e841975a95f0caaef38704a787ff0fa3aa4f36c0404a05c0478c221b7b60a3f)
            check_type(argname="argument config_name", value=config_name, expected_type=type_hints["config_name"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if config_name is not None:
            self._values["config_name"] = config_name
        if group_name is not None:
            self._values["group_name"] = group_name
        if project_name is not None:
            self._values["project_name"] = project_name

    @builtins.property
    def config_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property configName: Apply config to the config name.'''
        result = self._values.get("config_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupName: Apply config to the group name.'''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property projectName: Apply config to the project name.'''
        result = self._values.get("project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApplyConfigToMachineGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.AuditProps",
    jsii_struct_bases=[],
    name_mapping={
        "display_name": "displayName",
        "variable_map": "variableMap",
        "multi_account": "multiAccount",
    },
)
class AuditProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        variable_map: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAudit.VariableMapProperty", typing.Dict[builtins.str, typing.Any]]],
        multi_account: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``Audit``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit

        :param display_name: Property displayName: Name of SLS log audit.
        :param variable_map: Property variableMap: Log audit detailed configuration.
        :param multi_account: Property multiAccount: Multi-account configuration, please fill in multiple aliuid.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca39effacb160cba87db70b32051e2903b282cd4c0b9680d83ffa990931dad6d)
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument variable_map", value=variable_map, expected_type=type_hints["variable_map"])
            check_type(argname="argument multi_account", value=multi_account, expected_type=type_hints["multi_account"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "display_name": display_name,
            "variable_map": variable_map,
        }
        if multi_account is not None:
            self._values["multi_account"] = multi_account

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property displayName: Name of SLS log audit.'''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def variable_map(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAudit.VariableMapProperty"]:
        '''Property variableMap: Log audit detailed configuration.'''
        result = self._values.get("variable_map")
        assert result is not None, "Required property 'variable_map' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAudit.VariableMapProperty"], result)

    @builtins.property
    def multi_account(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property multiAccount: Multi-account configuration, please fill in multiple aliuid.'''
        result = self._values.get("multi_account")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AuditProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.ConsumerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "consumer_group": "consumerGroup",
        "logstore": "logstore",
        "order": "order",
        "project": "project",
        "timeout": "timeout",
    },
)
class ConsumerGroupProps:
    def __init__(
        self,
        *,
        consumer_group: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        order: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ConsumerGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup

        :param consumer_group: Property consumerGroup: The name of the consumer group. The name must be unique in a project.
        :param logstore: Property logstore: The name of the Logstore.
        :param order: Property order: Specifies whether to consume data in sequence. Valid values: true In a shard, data is consumed in ascending order based on the value of the ****tag**:**receive_time**** field. If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time. If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed. false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
        :param project: Property project: The name of the project.
        :param timeout: Property timeout: The timeout period. If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df436eea86cbc69117df7fdf400f277e2af0db586498d6a4f90bc6dd5ee23fae)
            check_type(argname="argument consumer_group", value=consumer_group, expected_type=type_hints["consumer_group"])
            check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
            check_type(argname="argument order", value=order, expected_type=type_hints["order"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "consumer_group": consumer_group,
            "logstore": logstore,
            "order": order,
            "project": project,
            "timeout": timeout,
        }

    @builtins.property
    def consumer_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property consumerGroup: The name of the consumer group.

        The name must be unique in a project.
        '''
        result = self._values.get("consumer_group")
        assert result is not None, "Required property 'consumer_group' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def logstore(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logstore: The name of the Logstore.'''
        result = self._values.get("logstore")
        assert result is not None, "Required property 'logstore' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def order(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property order: Specifies whether to consume data in sequence.

        Valid values:
        true
        In a shard, data is consumed in ascending order based on the value of the ****tag**:**receive_time**** field.
        If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
        If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
        false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
        '''
        result = self._values.get("order")
        assert result is not None, "Required property 'order' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property project: The name of the project.'''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def timeout(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property timeout: The timeout period.

        If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
        '''
        result = self._values.get("timeout")
        assert result is not None, "Required property 'timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ConsumerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.DashboardProps",
    jsii_struct_bases=[],
    name_mapping={
        "charts": "charts",
        "dashboard_name": "dashboardName",
        "project_name": "projectName",
        "description": "description",
        "display_name": "displayName",
    },
)
class DashboardProps:
    def __init__(
        self,
        *,
        charts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
        dashboard_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Dashboard``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard

        :param charts: Property charts: Chart list.
        :param dashboard_name: Property dashboardName: Dashboard name.
        :param project_name: Property projectName: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param description: Property description: Dashboard description.
        :param display_name: Property displayName: Dashboard display name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02bccad83b27835df2ad9a17842b3b5a447fa55e96c1dcbe1743ca027925c5ae)
            check_type(argname="argument charts", value=charts, expected_type=type_hints["charts"])
            check_type(argname="argument dashboard_name", value=dashboard_name, expected_type=type_hints["dashboard_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "charts": charts,
            "dashboard_name": dashboard_name,
            "project_name": project_name,
        }
        if description is not None:
            self._values["description"] = description
        if display_name is not None:
            self._values["display_name"] = display_name

    @builtins.property
    def charts(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        '''Property charts: Chart list.'''
        result = self._values.get("charts")
        assert result is not None, "Required property 'charts' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def dashboard_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dashboardName: Dashboard name.'''
        result = self._values.get("dashboard_name")
        assert result is not None, "Required property 'dashboard_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectName: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Dashboard description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property displayName: Dashboard display name.'''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DashboardProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.EtlProps",
    jsii_struct_bases=[],
    name_mapping={
        "configuration": "configuration",
        "display_name": "displayName",
        "name": "name",
        "project_name": "projectName",
        "schedule": "schedule",
        "description": "description",
    },
)
class EtlProps:
    def __init__(
        self,
        *,
        configuration: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEtl.ConfigurationProperty", typing.Dict[builtins.str, typing.Any]]],
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        schedule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEtl.ScheduleProperty", typing.Dict[builtins.str, typing.Any]]],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Etl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl

        :param configuration: Property configuration: The configuration of ETL task.
        :param display_name: Property displayName: ETL display name.
        :param name: Property name: ETL name.
        :param project_name: Property projectName: Project name.
        :param schedule: Property schedule: Task scheduling strategy.
        :param description: Property description: ETL description message.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7844781c2020366512942ad290c99edac6cd8eaf9c14acd4e2137e86d318ddf6)
            check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "configuration": configuration,
            "display_name": display_name,
            "name": name,
            "project_name": project_name,
            "schedule": schedule,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def configuration(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEtl.ConfigurationProperty"]:
        '''Property configuration: The configuration of ETL task.'''
        result = self._values.get("configuration")
        assert result is not None, "Required property 'configuration' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEtl.ConfigurationProperty"], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property displayName: ETL display name.'''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: ETL name.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectName: Project name.'''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schedule(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEtl.ScheduleProperty"]:
        '''Property schedule: Task scheduling strategy.'''
        result = self._values.get("schedule")
        assert result is not None, "Required property 'schedule' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEtl.ScheduleProperty"], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: ETL description message.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EtlProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IAlert")
class IAlert(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Alert``.'''

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Alert name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AlertProps:
        ...


class _IAlertProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Alert``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IAlert"

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Alert name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AlertProps:
        return typing.cast(AlertProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAlert).__jsii_proxy_class__ = lambda : _IAlertProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IApplyConfigToMachineGroup")
class IApplyConfigToMachineGroup(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ApplyConfigToMachineGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApplyConfigToMachineGroupProps:
        ...


class _IApplyConfigToMachineGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ApplyConfigToMachineGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IApplyConfigToMachineGroup"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApplyConfigToMachineGroupProps:
        return typing.cast(ApplyConfigToMachineGroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IApplyConfigToMachineGroup).__jsii_proxy_class__ = lambda : _IApplyConfigToMachineGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IAudit")
class IAudit(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Audit``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Name of SLS log audit.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AuditProps:
        ...


class _IAuditProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Audit``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IAudit"

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Name of SLS log audit.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AuditProps:
        return typing.cast(AuditProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAudit).__jsii_proxy_class__ = lambda : _IAuditProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IConsumerGroup")
class IConsumerGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ConsumerGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroup")
    def attr_consumer_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConsumerGroup: The name of the consumer group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLogstore")
    def attr_logstore(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Logstore: The name of the logstore to which this consumer group belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Project: The name of the project to which the logstore belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConsumerGroupProps:
        ...


class _IConsumerGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ConsumerGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IConsumerGroup"

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroup")
    def attr_consumer_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConsumerGroup: The name of the consumer group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConsumerGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrLogstore")
    def attr_logstore(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Logstore: The name of the logstore to which this consumer group belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogstore"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Project: The name of the project to which the logstore belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProject"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConsumerGroupProps:
        return typing.cast(ConsumerGroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IConsumerGroup).__jsii_proxy_class__ = lambda : _IConsumerGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IDashboard")
class IDashboard(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Dashboard``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDashboardName")
    def attr_dashboard_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DashboardName: Dashboard name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Display name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DashboardProps:
        ...


class _IDashboardProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Dashboard``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IDashboard"

    @builtins.property
    @jsii.member(jsii_name="attrDashboardName")
    def attr_dashboard_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DashboardName: Dashboard name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDashboardName"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Display name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DashboardProps:
        return typing.cast(DashboardProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDashboard).__jsii_proxy_class__ = lambda : _IDashboardProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IEtl")
class IEtl(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Etl``.'''

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: ETL name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EtlProps:
        ...


class _IEtlProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Etl``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IEtl"

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: ETL name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EtlProps:
        return typing.cast(EtlProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEtl).__jsii_proxy_class__ = lambda : _IEtlProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IIndex")
class IIndex(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Index``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "IndexProps":
        ...


class _IIndexProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Index``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IIndex"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "IndexProps":
        return typing.cast("IndexProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IIndex).__jsii_proxy_class__ = lambda : _IIndexProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.ILogstore")
class ILogstore(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Logstore``.'''

    @builtins.property
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogstoreName: Logstore name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: Project name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LogstoreProps":
        ...


class _ILogstoreProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Logstore``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.ILogstore"

    @builtins.property
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogstoreName: Logstore name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogstoreName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: Project name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LogstoreProps":
        return typing.cast("LogstoreProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ILogstore).__jsii_proxy_class__ = lambda : _ILogstoreProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.ILogtailConfig")
class ILogtailConfig(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``LogtailConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAppliedMachineGroups")
    def attr_applied_machine_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppliedMachineGroups: Applied machine groups.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Endpoint: Endpoint address.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLogtailConfigName")
    def attr_logtail_config_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogtailConfigName: Logtail config name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LogtailConfigProps":
        ...


class _ILogtailConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``LogtailConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.ILogtailConfig"

    @builtins.property
    @jsii.member(jsii_name="attrAppliedMachineGroups")
    def attr_applied_machine_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppliedMachineGroups: Applied machine groups.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppliedMachineGroups"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Endpoint: Endpoint address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLogtailConfigName")
    def attr_logtail_config_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogtailConfigName: Logtail config name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogtailConfigName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LogtailConfigProps":
        return typing.cast("LogtailConfigProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ILogtailConfig).__jsii_proxy_class__ = lambda : _ILogtailConfigProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IMachineGroup")
class IMachineGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``MachineGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: GroupName of SLS.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: ProjectName of SLS.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MachineGroupProps":
        ...


class _IMachineGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``MachineGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IMachineGroup"

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: GroupName of SLS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: ProjectName of SLS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MachineGroupProps":
        return typing.cast("MachineGroupProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IMachineGroup).__jsii_proxy_class__ = lambda : _IMachineGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IMetricStore")
class IMetricStore(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``MetricStore``.'''

    @builtins.property
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogstoreName: Metric store name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MetricStoreProps":
        ...


class _IMetricStoreProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``MetricStore``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IMetricStore"

    @builtins.property
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogstoreName: Metric store name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogstoreName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MetricStoreProps":
        return typing.cast("MetricStoreProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IMetricStore).__jsii_proxy_class__ = lambda : _IMetricStoreProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IOssExport")
class IOssExport(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``OssExport``.'''

    @builtins.property
    @jsii.member(jsii_name="attrExportName")
    def attr_export_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExportName: The name of the export job.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: The project name of SLS.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OssExportProps":
        ...


class _IOssExportProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``OssExport``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IOssExport"

    @builtins.property
    @jsii.member(jsii_name="attrExportName")
    def attr_export_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExportName: The name of the export job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExportName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: The project name of SLS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OssExportProps":
        return typing.cast("OssExportProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IOssExport).__jsii_proxy_class__ = lambda : _IOssExportProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IOssExternalStore")
class IOssExternalStore(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``OssExternalStore``.'''

    @builtins.property
    @jsii.member(jsii_name="attrExternalStoreName")
    def attr_external_store_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExternalStoreName: The name of the external store.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Project: The name of the project to which the external store belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OssExternalStoreProps":
        ...


class _IOssExternalStoreProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``OssExternalStore``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IOssExternalStore"

    @builtins.property
    @jsii.member(jsii_name="attrExternalStoreName")
    def attr_external_store_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExternalStoreName: The name of the external store.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExternalStoreName"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Project: The name of the project to which the external store belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProject"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OssExternalStoreProps":
        return typing.cast("OssExternalStoreProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IOssExternalStore).__jsii_proxy_class__ = lambda : _IOssExternalStoreProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IProject")
class IProject(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Project``.'''

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Project name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProjectProps":
        ...


class _IProjectProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Project``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IProject"

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Project name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProjectProps":
        return typing.cast("ProjectProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IProject).__jsii_proxy_class__ = lambda : _IProjectProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IRdsExternalStore")
class IRdsExternalStore(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``RdsExternalStore``.'''

    @builtins.property
    @jsii.member(jsii_name="attrExternalStoreName")
    def attr_external_store_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExternalStoreName: The name of the external store.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Project: The name of the project to which the external store belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RdsExternalStoreProps":
        ...


class _IRdsExternalStoreProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``RdsExternalStore``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IRdsExternalStore"

    @builtins.property
    @jsii.member(jsii_name="attrExternalStoreName")
    def attr_external_store_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExternalStoreName: The name of the external store.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExternalStoreName"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Project: The name of the project to which the external store belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProject"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RdsExternalStoreProps":
        return typing.cast("RdsExternalStoreProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRdsExternalStore).__jsii_proxy_class__ = lambda : _IRdsExternalStoreProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.ISavedsearch")
class ISavedsearch(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Savedsearch``.'''

    @builtins.property
    @jsii.member(jsii_name="attrSavedsearchName")
    def attr_savedsearch_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SavedsearchName: Savedsearch name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SavedsearchProps":
        ...


class _ISavedsearchProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Savedsearch``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.ISavedsearch"

    @builtins.property
    @jsii.member(jsii_name="attrSavedsearchName")
    def attr_savedsearch_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SavedsearchName: Savedsearch name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSavedsearchName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SavedsearchProps":
        return typing.cast("SavedsearchProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISavedsearch).__jsii_proxy_class__ = lambda : _ISavedsearchProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-sls.IServiceLog")
class IServiceLog(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ServiceLog``.'''

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: The name of the project that needs to be activated.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceLogProps":
        ...


class _IServiceLogProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ServiceLog``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-sls.IServiceLog"

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: The name of the project that needs to be activated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceLogProps":
        return typing.cast("ServiceLogProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IServiceLog).__jsii_proxy_class__ = lambda : _IServiceLogProxy


@jsii.implements(IIndex)
class Index(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Index",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::Index``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosIndex``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["IndexProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37ce56cf99a18afc6ffc83bdf68f8d54a6c421ecc5be7b831935e0ce3191b534)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "IndexProps":
        return typing.cast("IndexProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe0099e8467539a6e2f069ea6050b20dff6001d0f164c35e8462bb1ac89933ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85fb51ba26c092709c22e625df8f0c3d7ddc6d4f8573add467eb9b28057aaa05)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de0a7311656f4f59dbb0f6d5fabff8accd2590e0a8a86638abe8f130f7d9e513)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.IndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "full_text_index": "fullTextIndex",
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "key_indices": "keyIndices",
        "log_reduce": "logReduce",
    },
)
class IndexProps:
    def __init__(
        self,
        *,
        full_text_index: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosIndex.FullTextIndexProperty", typing.Dict[builtins.str, typing.Any]]],
        logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        key_indices: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosIndex.KeyIndicesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        log_reduce: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Index``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index

        :param full_text_index: Property fullTextIndex: Full-text indexing configuration. Full-text indexing and key indexing must have at least one enabled.
        :param logstore_name: Property logstoreName: Logstore name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param project_name: Property projectName: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param key_indices: Property keyIndices: Key index configurations. Full-text indexing and key indexing must have at least one enabled.
        :param log_reduce: Property logReduce: Whether to enable log reduce. Default to false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87a3553e99bb30490cd4d8a4606bb24823b1f2d5fb7a923d6a3196ad70dacb9c)
            check_type(argname="argument full_text_index", value=full_text_index, expected_type=type_hints["full_text_index"])
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument key_indices", value=key_indices, expected_type=type_hints["key_indices"])
            check_type(argname="argument log_reduce", value=log_reduce, expected_type=type_hints["log_reduce"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "full_text_index": full_text_index,
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if key_indices is not None:
            self._values["key_indices"] = key_indices
        if log_reduce is not None:
            self._values["log_reduce"] = log_reduce

    @builtins.property
    def full_text_index(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.FullTextIndexProperty"]:
        '''Property fullTextIndex: Full-text indexing configuration.

        Full-text indexing and key indexing must have at least one enabled.
        '''
        result = self._values.get("full_text_index")
        assert result is not None, "Required property 'full_text_index' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.FullTextIndexProperty"], result)

    @builtins.property
    def logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logstoreName: Logstore name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectName: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def key_indices(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.KeyIndicesProperty"]]]]:
        '''Property keyIndices: Key index configurations.

        Full-text indexing and key indexing must have at least one enabled.
        '''
        result = self._values.get("key_indices")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.KeyIndicesProperty"]]]], result)

    @builtins.property
    def log_reduce(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logReduce: Whether to enable log reduce.

        Default to false.
        '''
        result = self._values.get("log_reduce")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "IndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ILogstore)
class Logstore(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Logstore",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::Logstore``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosLogstore``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logstore
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LogstoreProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c79bb65dcabce61b887a71b17ddce83bdae93928e2a65252e7a2b7ff3a264b9e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogstoreName: Logstore name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogstoreName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: Project name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LogstoreProps":
        return typing.cast("LogstoreProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4819a641daf7e13ef67f1ca8aba9bf9daa97a9b6f6bf87db2c491ea964a8ab2d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3907773295dae84236972692e98a0f4e19c06288b0c7e971b4b42fd028a79f23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6575c5bd4c8649af556d46f576b114c83075df19f43c2ad52a8915fcf3e0d08e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.LogstoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "append_meta": "appendMeta",
        "auto_split": "autoSplit",
        "enable_tracking": "enableTracking",
        "encrypt_conf": "encryptConf",
        "max_split_shard": "maxSplitShard",
        "mode": "mode",
        "preserve_storage": "preserveStorage",
        "shard_count": "shardCount",
        "ttl": "ttl",
    },
)
class LogstoreProps:
    def __init__(
        self,
        *,
        logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        append_meta: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_split: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_tracking: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypt_conf: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLogstore.EncryptConfProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        max_split_shard: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preserve_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Logstore``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logstore

        :param logstore_name: Property logstoreName: Logstore name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param project_name: Property projectName: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param append_meta: Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log. Default to false.
        :param auto_split: Property autoSplit: Whether to automatically split the shard. Default to false.
        :param enable_tracking: Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information. Default to false.
        :param encrypt_conf: Property encryptConf: Data encryption config.
        :param max_split_shard: Property maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true. Allowed Values: 1-64.
        :param mode: Property mode: The type of the Logstore. Simple Log Service provides two types of Logstores: Standard Logstores and Query Logstores. Valid values: standard: Standard Logstore. This type of Logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can also use this type of Logstore to build a comprehensive observability system. query: Query Logstore. This type of Logstore supports high-performance queries. The index traffic fee of a Query Logstore is approximately half that of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the amount of data is large, the log retention period is long, or log analysis is not required. If logs are stored for weeks or months, the log retention period is considered long.
        :param preserve_storage: Property preserveStorage: Whether to keep the log permanently. If set to true, TTL will be ignored. Default to false.
        :param shard_count: Property shardCount: The number of Shards. Allowed Values: 1-100, default to 2.
        :param ttl: Property ttl: The lifecycle of log in the logstore in days. Allowed Values: 1-3600, default to 30.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e93c4fefc36d5232872c87439488763bf3f8c4c3075cdb5894f83c2d2de01d77)
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument append_meta", value=append_meta, expected_type=type_hints["append_meta"])
            check_type(argname="argument auto_split", value=auto_split, expected_type=type_hints["auto_split"])
            check_type(argname="argument enable_tracking", value=enable_tracking, expected_type=type_hints["enable_tracking"])
            check_type(argname="argument encrypt_conf", value=encrypt_conf, expected_type=type_hints["encrypt_conf"])
            check_type(argname="argument max_split_shard", value=max_split_shard, expected_type=type_hints["max_split_shard"])
            check_type(argname="argument mode", value=mode, expected_type=type_hints["mode"])
            check_type(argname="argument preserve_storage", value=preserve_storage, expected_type=type_hints["preserve_storage"])
            check_type(argname="argument shard_count", value=shard_count, expected_type=type_hints["shard_count"])
            check_type(argname="argument ttl", value=ttl, expected_type=type_hints["ttl"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if append_meta is not None:
            self._values["append_meta"] = append_meta
        if auto_split is not None:
            self._values["auto_split"] = auto_split
        if enable_tracking is not None:
            self._values["enable_tracking"] = enable_tracking
        if encrypt_conf is not None:
            self._values["encrypt_conf"] = encrypt_conf
        if max_split_shard is not None:
            self._values["max_split_shard"] = max_split_shard
        if mode is not None:
            self._values["mode"] = mode
        if preserve_storage is not None:
            self._values["preserve_storage"] = preserve_storage
        if shard_count is not None:
            self._values["shard_count"] = shard_count
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logstoreName: Logstore name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectName: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def append_meta(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.

        Default to false.
        '''
        result = self._values.get("append_meta")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_split(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoSplit: Whether to automatically split the shard.

        Default to false.
        '''
        result = self._values.get("auto_split")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_tracking(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.

        Default to false.
        '''
        result = self._values.get("enable_tracking")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypt_conf(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLogstore.EncryptConfProperty"]]:
        '''Property encryptConf: Data encryption config.'''
        result = self._values.get("encrypt_conf")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLogstore.EncryptConfProperty"]], result)

    @builtins.property
    def max_split_shard(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxSplitShard: The maximum number of shards when splitting automatically.

        Must be specified if AutoSplit is set to true.
        Allowed Values: 1-64.
        '''
        result = self._values.get("max_split_shard")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mode: The type of the Logstore.

        Simple Log Service provides two types of Logstores: Standard Logstores and Query Logstores. Valid values:
        standard: Standard Logstore. This type of Logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can also use this type of Logstore to build a comprehensive observability system.
        query: Query Logstore. This type of Logstore supports high-performance queries. The index traffic fee of a Query Logstore is approximately half that of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the amount of data is large, the log retention period is long, or log analysis is not required. If logs are stored for weeks or months, the log retention period is considered long.
        '''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property preserveStorage: Whether to keep the log permanently.

        If set to true, TTL will be ignored.
        Default to false.
        '''
        result = self._values.get("preserve_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property shardCount: The number of Shards.

        Allowed Values: 1-100, default to 2.
        '''
        result = self._values.get("shard_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ttl: The lifecycle of log in the logstore in days.

        Allowed Values: 1-3600, default to 30.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LogstoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ILogtailConfig)
class LogtailConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.LogtailConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::LogtailConfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosLogtailConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logtailconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LogtailConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70ffb82ed17c7a61e3451a40493e2f4eeb542c6ff00318fd972681920c0f24b9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAppliedMachineGroups")
    def attr_applied_machine_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AppliedMachineGroups: Applied machine groups.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAppliedMachineGroups"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Endpoint: Endpoint address.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLogtailConfigName")
    def attr_logtail_config_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogtailConfigName: Logtail config name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogtailConfigName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LogtailConfigProps":
        return typing.cast("LogtailConfigProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bce28cb37dca3b188ab1c4190d91291d7b95226077f0f373ae9cb3718d92008)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__794da1afe04df34b32ac3cf92ad804fc69514d7425102eafd6052e76252e296f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbf4fabf5156910534681ebdd7576f325839005a55a047a034daadd789f40a36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.LogtailConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "logtail_config_name": "logtailConfigName",
        "project_name": "projectName",
        "clone_from": "cloneFrom",
        "raw_config_data": "rawConfigData",
    },
)
class LogtailConfigProps:
    def __init__(
        self,
        *,
        logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        logtail_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        clone_from: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLogtailConfig.CloneFromProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        raw_config_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``LogtailConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logtailconfig

        :param logstore_name: Property logstoreName: Logstore name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param logtail_config_name: Property logtailConfigName: Logtail config name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param project_name: Property projectName: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param clone_from: Property cloneFrom: Clone logtail config data from existing logtail config. Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        :param raw_config_data: Property rawConfigData: The format is the same as the response of SLS API GetConfig. Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first. configName, outputType, outputDetail in data will be ignored.For example: { "configName": "test-logtail-config", "createTime": 1574843554, "inputDetail": { "acceptNoEnoughKeys": false, "adjustTimezone": false, "advanced": { "force_multiconfig": false }, "autoExtend": true, "delayAlarmBytes": 0, "delaySkipBytes": 0, "discardNonUtf8": false, "discardUnmatch": false, "dockerExcludeEnv": {}, "dockerExcludeLabel": {}, "dockerFile": false, "dockerIncludeEnv": {}, "dockerIncludeLabel": {}, "enableRawLog": false, "enableTag": false, "fileEncoding": "utf8", "filePattern": "test.log*", "filterKey": [], "filterRegex": [], "key": [ "time", "logger", "level", "request_id", "user_id", "region_id", "content" ], "localStorage": true, "logPath": "/var/log/test", "logTimezone": "", "logType": "delimiter_log", "maxDepth": 100, "maxSendRate": -1, "mergeType": "topic", "preserve": true, "preserveDepth": 1, "priority": 0, "quote": "\\u0001", "sendRateExpire": 0, "sensitive_keys": [], "separator": ",,,", "shardHashKey": [], "tailExisted": false, "timeFormat": "", "timeKey": "", "topicFormat": "none" }, "inputType": "file", "lastModifyTime": 1574843554, "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.", "outputDetail": { "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com", "logstoreName": "test-logstore", "region": "cn-hangzhou" }, "outputType": "LogService" }
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__997427b30c5163225c21712ca6967753c2240e9b45aec519ef99002bd95d1ebd)
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument logtail_config_name", value=logtail_config_name, expected_type=type_hints["logtail_config_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument clone_from", value=clone_from, expected_type=type_hints["clone_from"])
            check_type(argname="argument raw_config_data", value=raw_config_data, expected_type=type_hints["raw_config_data"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "logstore_name": logstore_name,
            "logtail_config_name": logtail_config_name,
            "project_name": project_name,
        }
        if clone_from is not None:
            self._values["clone_from"] = clone_from
        if raw_config_data is not None:
            self._values["raw_config_data"] = raw_config_data

    @builtins.property
    def logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logstoreName: Logstore name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def logtail_config_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logtailConfigName: Logtail config name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logtail_config_name")
        assert result is not None, "Required property 'logtail_config_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectName: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def clone_from(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLogtailConfig.CloneFromProperty"]]:
        '''Property cloneFrom: Clone logtail config data from existing logtail config.

        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        '''
        result = self._values.get("clone_from")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLogtailConfig.CloneFromProperty"]], result)

    @builtins.property
    def raw_config_data(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property rawConfigData: The format is the same as the response of SLS API GetConfig.

        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        configName, outputType, outputDetail in data will be ignored.For example:
        {
        "configName": "test-logtail-config",
        "createTime": 1574843554,
        "inputDetail": {
        "acceptNoEnoughKeys": false,
        "adjustTimezone": false,
        "advanced": {
        "force_multiconfig": false
        },
        "autoExtend": true,
        "delayAlarmBytes": 0,
        "delaySkipBytes": 0,
        "discardNonUtf8": false,
        "discardUnmatch": false,
        "dockerExcludeEnv": {},
        "dockerExcludeLabel": {},
        "dockerFile": false,
        "dockerIncludeEnv": {},
        "dockerIncludeLabel": {},
        "enableRawLog": false,
        "enableTag": false,
        "fileEncoding": "utf8",
        "filePattern": "test.log*",
        "filterKey": [],
        "filterRegex": [],
        "key": [
        "time",
        "logger",
        "level",
        "request_id",
        "user_id",
        "region_id",
        "content"
        ],
        "localStorage": true,
        "logPath": "/var/log/test",
        "logTimezone": "",
        "logType": "delimiter_log",
        "maxDepth": 100,
        "maxSendRate": -1,
        "mergeType": "topic",
        "preserve": true,
        "preserveDepth": 1,
        "priority": 0,
        "quote": "\\u0001",
        "sendRateExpire": 0,
        "sensitive_keys": [],
        "separator": ",,,",
        "shardHashKey": [],
        "tailExisted": false,
        "timeFormat": "",
        "timeKey": "",
        "topicFormat": "none"
        },
        "inputType": "file",
        "lastModifyTime": 1574843554,
        "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
        "outputDetail": {
        "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
        "logstoreName": "test-logstore",
        "region": "cn-hangzhou"
        },
        "outputType": "LogService"
        }
        '''
        result = self._values.get("raw_config_data")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LogtailConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IMachineGroup)
class MachineGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.MachineGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::MachineGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosMachineGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["MachineGroupProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b22aba27590c9ba9fcef78ece9af9628932bed672c0ab16db139b31d1392669e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupName: GroupName of SLS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: ProjectName of SLS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MachineGroupProps":
        return typing.cast("MachineGroupProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdd3311afd17e3a59194661486f30543ffcbaaa5c49d29047d33a38c35815d36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d5ed476f62390ba690522348d6a65415175a730415674468d7aaebf57dfece3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98fd3efc09ef4dbba35839091f369814fac7b72400aa8929d949e67e29e3a69a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.MachineGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_attribute": "groupAttribute",
        "group_name": "groupName",
        "group_type": "groupType",
        "machine_identify_type": "machineIdentifyType",
        "machine_list": "machineList",
        "project_name": "projectName",
    },
)
class MachineGroupProps:
    def __init__(
        self,
        *,
        group_attribute: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        machine_identify_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        machine_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``MachineGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup

        :param group_attribute: Property groupAttribute: Group attribute, default is null. The object value is groupTopic and externalName
        :param group_name: Property groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        :param group_type: Property groupType: MachineGroup type, the value is empty or Armory.
        :param machine_identify_type: Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.
        :param machine_list: Property machineList: The machine tag, the value is ip or userdefined-id.
        :param project_name: Property projectName: MachineGroup created in project.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45ed99b8d188d732f608210e6fa1bc867af7e5ee0e1bab8d04237b6137de3303)
            check_type(argname="argument group_attribute", value=group_attribute, expected_type=type_hints["group_attribute"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument machine_identify_type", value=machine_identify_type, expected_type=type_hints["machine_identify_type"])
            check_type(argname="argument machine_list", value=machine_list, expected_type=type_hints["machine_list"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_attribute is not None:
            self._values["group_attribute"] = group_attribute
        if group_name is not None:
            self._values["group_name"] = group_name
        if group_type is not None:
            self._values["group_type"] = group_type
        if machine_identify_type is not None:
            self._values["machine_identify_type"] = machine_identify_type
        if machine_list is not None:
            self._values["machine_list"] = machine_list
        if project_name is not None:
            self._values["project_name"] = project_name

    @builtins.property
    def group_attribute(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupAttribute: Group attribute, default is null.

        The object value is groupTopic and externalName
        '''
        result = self._values.get("group_attribute")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupName: Display name of the group name, the Project only.

        [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupType: MachineGroup type, the value is empty or Armory.'''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def machine_identify_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'.'''
        result = self._values.get("machine_identify_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def machine_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property machineList: The machine tag, the value is ip or userdefined-id.'''
        result = self._values.get("machine_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property projectName: MachineGroup created in project.'''
        result = self._values.get("project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MachineGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IMetricStore)
class MetricStore(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.MetricStore",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::MetricStore``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosMetricStore``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-metricstore
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MetricStoreProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4663a674839438b2c47edf7b54c23c2beedb0d1ce18df1282b31edadf5d78587)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LogstoreName: Metric store name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogstoreName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MetricStoreProps":
        return typing.cast("MetricStoreProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bfc3193f58c0ed824da7ad355984019b4874ffcdd10c5e28202775f5c785676)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__591fec34b75126c09821718c2c1d0a3d01f2790cec0ed087c7439a1db98bea0b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b49b818fbe7de55c6b649152c09e7687bf9bac62c570f68e3381bf70df597148)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.MetricStoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "preserve_storage": "preserveStorage",
        "shard_count": "shardCount",
        "ttl": "ttl",
    },
)
class MetricStoreProps:
    def __init__(
        self,
        *,
        logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        preserve_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``MetricStore``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-metricstore

        :param logstore_name: Property logstoreName: Metric store name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param project_name: Property projectName: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param preserve_storage: Property preserveStorage: Whether to keep the log permanently. If set to true, TTL will be ignored. Default to false.
        :param shard_count: Property shardCount: The number of Shards. Allowed Values: 1-10, default to 2.
        :param ttl: Property ttl: The lifecycle of log in the metrice store in days. Allowed Values: 1-3000, default to 30.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b34e84ca87f2fe6236aeb3933401db5149795129f06227666f5ad165a9ae952e)
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument preserve_storage", value=preserve_storage, expected_type=type_hints["preserve_storage"])
            check_type(argname="argument shard_count", value=shard_count, expected_type=type_hints["shard_count"])
            check_type(argname="argument ttl", value=ttl, expected_type=type_hints["ttl"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if preserve_storage is not None:
            self._values["preserve_storage"] = preserve_storage
        if shard_count is not None:
            self._values["shard_count"] = shard_count
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logstoreName: Metric store name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectName: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property preserveStorage: Whether to keep the log permanently.

        If set to true, TTL will be ignored.
        Default to false.
        '''
        result = self._values.get("preserve_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property shardCount: The number of Shards.

        Allowed Values: 1-10, default to 2.
        '''
        result = self._values.get("shard_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ttl: The lifecycle of log in the metrice store in days.

        Allowed Values: 1-3000, default to 30.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MetricStoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IOssExport)
class OssExport(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.OssExport",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::OssExport``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosOssExport``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["OssExportProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e32cf16ee60c37ed93c9be32ed37b470cd4f2b87ad4591d2365820e6e85c2f4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrExportName")
    def attr_export_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExportName: The name of the export job.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExportName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: The project name of SLS.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OssExportProps":
        return typing.cast("OssExportProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c17e2c1d5bee5a7645cb536c6b72a3e699d1e3220f034b322d34484c697e96b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff1e1662f7231c00f8140c5984e40b269862ff8a903542089033823f8190f6ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a8138bb85ca3fd279026f0fe563f232e36f1047c3fa2d29ee50d3ca43e5d528)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.OssExportProps",
    jsii_struct_bases=[],
    name_mapping={
        "configuration": "configuration",
        "display_name": "displayName",
        "export_name": "exportName",
        "project_name": "projectName",
        "description": "description",
    },
)
class OssExportProps:
    def __init__(
        self,
        *,
        configuration: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosOssExport.ConfigurationProperty", typing.Dict[builtins.str, typing.Any]]],
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        export_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``OssExport``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport

        :param configuration: Property configuration: The configuration of the export job.
        :param display_name: Property displayName: The display name of the export job. It must be 4 to 100 characters in length.
        :param export_name: Property exportName: The name of the export job. This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
        :param project_name: Property projectName: The project name of SLS.
        :param description: Property description: The description of the export job. It could be 0 to 256 characters in length.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6a0102cc134107f8a469346b66ae16476c7793f79488f1ed460e243412cb149)
            check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument export_name", value=export_name, expected_type=type_hints["export_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "configuration": configuration,
            "display_name": display_name,
            "export_name": export_name,
            "project_name": project_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def configuration(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOssExport.ConfigurationProperty"]:
        '''Property configuration: The configuration of the export job.'''
        result = self._values.get("configuration")
        assert result is not None, "Required property 'configuration' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOssExport.ConfigurationProperty"], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property displayName: The display name of the export job.

        It must be 4 to 100 characters in length.
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def export_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property exportName: The name of the export job.

        This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
        '''
        result = self._values.get("export_name")
        assert result is not None, "Required property 'export_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectName: The project name of SLS.'''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the export job.

        It could be 0 to 256 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "OssExportProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IOssExternalStore)
class OssExternalStore(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.OssExternalStore",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::OssExternalStore``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosOssExternalStore``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["OssExternalStoreProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84b10e7629487db9ed8e8662cb3adfa2fb8c189a3b73e81841b93cc9d3528955)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrExternalStoreName")
    def attr_external_store_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExternalStoreName: The name of the external store.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExternalStoreName"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Project: The name of the project to which the external store belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProject"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OssExternalStoreProps":
        return typing.cast("OssExternalStoreProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f610aa1e71c1ffb7fd03fb0312c56f0ebfbc91f7722f5d546ee30a21c14e8cee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__445b9b5a2acd853826f5482268566ed0a4a0b7bde505b8f357a1bde5da307e7c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__975db080475635cdefaa35b08b71054d1570011d01d21d4f5cd93377833fc66e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.OssExternalStoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_id": "accessId",
        "access_key": "accessKey",
        "bucket": "bucket",
        "columns": "columns",
        "endpoint": "endpoint",
        "external_store_name": "externalStoreName",
        "objects": "objects",
        "project": "project",
        "store_type": "storeType",
    },
)
class OssExternalStoreProps:
    def __init__(
        self,
        *,
        access_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        access_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        columns: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosOssExternalStore.ColumnsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        external_store_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        objects: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        store_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``OssExternalStore``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore

        :param access_id: Property accessId: The AccessKey ID.
        :param access_key: Property accessKey: The AccessKey secret.
        :param bucket: Property bucket: The name of the OSS bucket.
        :param columns: Property columns: The associated fields.
        :param endpoint: Property endpoint: The OSS endpoint.
        :param external_store_name: Property externalStoreName: The name of the external store.
        :param objects: Property objects: The associated OSS objects. Valid values of n: 1 to 100.
        :param project: Property project: A short description of struct.
        :param store_type: Property storeType: The type of the external store. Set the value to oss.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adfd0599cc3c73e8ab9a893bfceea55f0e2707b3118c3403cf5cac46c0606547)
            check_type(argname="argument access_id", value=access_id, expected_type=type_hints["access_id"])
            check_type(argname="argument access_key", value=access_key, expected_type=type_hints["access_key"])
            check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
            check_type(argname="argument columns", value=columns, expected_type=type_hints["columns"])
            check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
            check_type(argname="argument external_store_name", value=external_store_name, expected_type=type_hints["external_store_name"])
            check_type(argname="argument objects", value=objects, expected_type=type_hints["objects"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument store_type", value=store_type, expected_type=type_hints["store_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_id": access_id,
            "access_key": access_key,
            "bucket": bucket,
            "columns": columns,
            "endpoint": endpoint,
            "external_store_name": external_store_name,
            "objects": objects,
            "project": project,
            "store_type": store_type,
        }

    @builtins.property
    def access_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessId: The AccessKey ID.'''
        result = self._values.get("access_id")
        assert result is not None, "Required property 'access_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def access_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accessKey: The AccessKey secret.'''
        result = self._values.get("access_key")
        assert result is not None, "Required property 'access_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bucket: The name of the OSS bucket.'''
        result = self._values.get("bucket")
        assert result is not None, "Required property 'bucket' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def columns(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOssExternalStore.ColumnsProperty"]]]:
        '''Property columns: The associated fields.'''
        result = self._values.get("columns")
        assert result is not None, "Required property 'columns' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOssExternalStore.ColumnsProperty"]]], result)

    @builtins.property
    def endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property endpoint: The OSS endpoint.'''
        result = self._values.get("endpoint")
        assert result is not None, "Required property 'endpoint' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def external_store_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property externalStoreName: The name of the external store.'''
        result = self._values.get("external_store_name")
        assert result is not None, "Required property 'external_store_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def objects(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property objects: The associated OSS objects.

        Valid values of n: 1 to 100.
        '''
        result = self._values.get("objects")
        assert result is not None, "Required property 'objects' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property project: A short description of struct.'''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def store_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property storeType: The type of the external store.

        Set the value to oss.
        '''
        result = self._values.get("store_type")
        assert result is not None, "Required property 'store_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "OssExternalStoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IProject)
class Project(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Project",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::Project``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosProject``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43e5ccce68dcd7589fe7a912c535fededac7de18ffe6efb56ce3a0e02ca34050)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Project name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProjectProps":
        return typing.cast("ProjectProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b404a7fc68a551042ca03d53c70be52efb941cc7331be5829aa55fa0e949228)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1aca078affd68839b225e193f0a7af17e0c76843bcb1fd2781e6d81c08236b01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6bf6f2bf1d5ca611db460eab6b9b83946d23b6f32e40dfe9ef727037f1b3a7a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "data_redundancy_type": "dataRedundancyType",
        "description": "description",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class ProjectProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosProject.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Project``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project

        :param name: Property name: Project name: 1. Only supports lowercase letters, numbers, hyphens (-). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param data_redundancy_type: Property dataRedundancyType: Disaster recovery type.LRS: Local redundant storage.ZRS: Local redundant storage.
        :param description: Property description: Project description: <>'"\\ is not supported, up to 64 characters.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the sls project belongs. If not provided, the project belongs to the default resource group.
        :param tags: Property tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8200cc4deccd66b4f1d77b8d6692341d01973dca3ef46fe9678865407d439cb)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument data_redundancy_type", value=data_redundancy_type, expected_type=type_hints["data_redundancy_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if data_redundancy_type is not None:
            self._values["data_redundancy_type"] = data_redundancy_type
        if description is not None:
            self._values["description"] = description
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataRedundancyType: Disaster recovery type.LRS: Local redundant storage.ZRS: Local redundant storage.'''
        result = self._values.get("data_redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Project description: <>'"\\ is not supported, up to 64 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the sls project belongs.

        If not provided, the project belongs to the default resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosProject.TagsProperty"]]:
        '''Property tags: Tags to attach to project.

        Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosProject.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRdsExternalStore)
class RdsExternalStore(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RdsExternalStore",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::RdsExternalStore``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRdsExternalStore``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RdsExternalStoreProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f45c30271d08f2072a8cdd4bd869e1af143f636de5b548c827e3e4c3811716be)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrExternalStoreName")
    def attr_external_store_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ExternalStoreName: The name of the external store.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExternalStoreName"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Project: The name of the project to which the external store belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProject"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RdsExternalStoreProps":
        return typing.cast("RdsExternalStoreProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de0040264d853ff6b9721712e1bd8bc3f1c37b593416eae6d1f3abb62ef2d7bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d6d36ad86e8ef0fcb47b9ef25c2211598bcd32557ab40fe4ab5717dde969e55)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c69997dd367d228e9a93156ee300a581b602e3ec8349b2e52d952d28e472f26d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RdsExternalStoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "db": "db",
        "external_store_name": "externalStoreName",
        "host": "host",
        "password": "password",
        "port": "port",
        "project": "project",
        "region": "region",
        "store_type": "storeType",
        "table": "table",
        "username": "username",
        "vpc_id": "vpcId",
        "instance_id": "instanceId",
    },
)
class RdsExternalStoreProps:
    def __init__(
        self,
        *,
        db: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        external_store_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        store_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        table: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RdsExternalStore``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore

        :param db: Property db: The name of the database in the ApsaraDB RDS for MySQL instance.
        :param external_store_name: Property externalStoreName: The name of the external store. The name must be unique in a project and different from Logstore.
        :param host: Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
        :param password: Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.
        :param port: Property port: The internal or public port of the ApsaraDB RDS for MySQL instance.
        :param project: Property project: The name of the project.
        :param region: Property region: The region where the ApsaraDB RDS for MySQL instance resides. Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
        :param store_type: Property storeType: The storage type. Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
        :param table: Property table: The name of the database table in the ApsaraDB RDS for MySQL instance.
        :param username: Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.
        :param vpc_id: Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
        :param instance_id: Property instanceId: The id of the RDS instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d57139427ea3e418ac52ab7176ee4af6dd0557475d270847f2d012479c62e84)
            check_type(argname="argument db", value=db, expected_type=type_hints["db"])
            check_type(argname="argument external_store_name", value=external_store_name, expected_type=type_hints["external_store_name"])
            check_type(argname="argument host", value=host, expected_type=type_hints["host"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument store_type", value=store_type, expected_type=type_hints["store_type"])
            check_type(argname="argument table", value=table, expected_type=type_hints["table"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db": db,
            "external_store_name": external_store_name,
            "host": host,
            "password": password,
            "port": port,
            "project": project,
            "region": region,
            "store_type": store_type,
            "table": table,
            "username": username,
            "vpc_id": vpc_id,
        }
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def db(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property db: The name of the database in the ApsaraDB RDS for MySQL instance.'''
        result = self._values.get("db")
        assert result is not None, "Required property 'db' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def external_store_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property externalStoreName: The name of the external store.

        The name must be unique in a project and different from Logstore.
        '''
        result = self._values.get("external_store_name")
        assert result is not None, "Required property 'external_store_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.'''
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.'''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property port: The internal or public port of the ApsaraDB RDS for MySQL instance.'''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property project: The name of the project.'''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def region(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property region: The region where the ApsaraDB RDS for MySQL instance resides.

        Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
        '''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def store_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property storeType: The storage type.

        Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
        '''
        result = self._values.get("store_type")
        assert result is not None, "Required property 'store_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def table(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property table: The name of the database table in the ApsaraDB RDS for MySQL instance.'''
        result = self._values.get("table")
        assert result is not None, "Required property 'table' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.'''
        result = self._values.get("username")
        assert result is not None, "Required property 'username' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The id of the RDS instance.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RdsExternalStoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAlert(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosAlert",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::Alert``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Alert`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAlertProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d81c9e3194e6b74ce23c4c5e1d279882e3252bf091e874c82783f7ac748f7177)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d4d410b4f4685a4baf0479d010a853ff24bfbd0f3059de40d98068a808e88a7b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: Alert name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="detail")
    def detail(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.DetailProperty"]:
        '''
        :Property: detail:
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.DetailProperty"], jsii.get(self, "detail"))

    @detail.setter
    def detail(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.DetailProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__916f1f24d97236db3a911f4c9e173175fefd41025b668e4820e1d7d21c45adc6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "detail", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41eac6e8840febf9281354bd51a1d0951f6fbff1e70327787d45e0481fd96b11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="project")
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        project: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "project"))

    @project.setter
    def project(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ceefc40fd026b604c27ac8617a5f924b8bed63bdd4be5315c6519368d5fb177)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "project", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.AnnotationsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class AnnotationsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d177d30c91b26129266385e50775754752a8632d3f8c4221bd5d6c21c5b479cd)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key:
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value:
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AnnotationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.ConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "dashboard": "dashboard",
            "query_list": "queryList",
            "annotations": "annotations",
            "auto_annotation": "autoAnnotation",
            "condition": "condition",
            "group_configuration": "groupConfiguration",
            "join_configurations": "joinConfigurations",
            "labels": "labels",
            "mute_until": "muteUntil",
            "no_data_fire": "noDataFire",
            "no_data_severity": "noDataSeverity",
            "notification_list": "notificationList",
            "notify_threshold": "notifyThreshold",
            "policy_configuration": "policyConfiguration",
            "send_resolved": "sendResolved",
            "severity_configurations": "severityConfigurations",
            "threshold": "threshold",
            "throttling": "throttling",
            "type": "type",
            "version": "version",
        },
    )
    class ConfigurationProperty:
        def __init__(
            self,
            *,
            dashboard: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            query_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlert.QueryListProperty", typing.Dict[builtins.str, typing.Any]]]]],
            annotations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlert.AnnotationsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            auto_annotation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            group_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlert.GroupConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            join_configurations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlert.JoinConfigurationsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlert.LabelsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            mute_until: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            no_data_fire: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            no_data_severity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            notification_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlert.NotificationListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            notify_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            policy_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlert.PolicyConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            send_resolved: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            severity_configurations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlert.SeverityConfigurationsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            throttling: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param dashboard: 
            :param query_list: 
            :param annotations: 
            :param auto_annotation: 
            :param condition: 
            :param group_configuration: 
            :param join_configurations: 
            :param labels: 
            :param mute_until: 
            :param no_data_fire: 
            :param no_data_severity: 
            :param notification_list: 
            :param notify_threshold: 
            :param policy_configuration: 
            :param send_resolved: 
            :param severity_configurations: 
            :param threshold: 
            :param throttling: 
            :param type: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c40c5940d9d97be9c83588103df6b0efbb235317d46fe5b6ac39a04a0f362866)
                check_type(argname="argument dashboard", value=dashboard, expected_type=type_hints["dashboard"])
                check_type(argname="argument query_list", value=query_list, expected_type=type_hints["query_list"])
                check_type(argname="argument annotations", value=annotations, expected_type=type_hints["annotations"])
                check_type(argname="argument auto_annotation", value=auto_annotation, expected_type=type_hints["auto_annotation"])
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
                check_type(argname="argument group_configuration", value=group_configuration, expected_type=type_hints["group_configuration"])
                check_type(argname="argument join_configurations", value=join_configurations, expected_type=type_hints["join_configurations"])
                check_type(argname="argument labels", value=labels, expected_type=type_hints["labels"])
                check_type(argname="argument mute_until", value=mute_until, expected_type=type_hints["mute_until"])
                check_type(argname="argument no_data_fire", value=no_data_fire, expected_type=type_hints["no_data_fire"])
                check_type(argname="argument no_data_severity", value=no_data_severity, expected_type=type_hints["no_data_severity"])
                check_type(argname="argument notification_list", value=notification_list, expected_type=type_hints["notification_list"])
                check_type(argname="argument notify_threshold", value=notify_threshold, expected_type=type_hints["notify_threshold"])
                check_type(argname="argument policy_configuration", value=policy_configuration, expected_type=type_hints["policy_configuration"])
                check_type(argname="argument send_resolved", value=send_resolved, expected_type=type_hints["send_resolved"])
                check_type(argname="argument severity_configurations", value=severity_configurations, expected_type=type_hints["severity_configurations"])
                check_type(argname="argument threshold", value=threshold, expected_type=type_hints["threshold"])
                check_type(argname="argument throttling", value=throttling, expected_type=type_hints["throttling"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "dashboard": dashboard,
                "query_list": query_list,
            }
            if annotations is not None:
                self._values["annotations"] = annotations
            if auto_annotation is not None:
                self._values["auto_annotation"] = auto_annotation
            if condition is not None:
                self._values["condition"] = condition
            if group_configuration is not None:
                self._values["group_configuration"] = group_configuration
            if join_configurations is not None:
                self._values["join_configurations"] = join_configurations
            if labels is not None:
                self._values["labels"] = labels
            if mute_until is not None:
                self._values["mute_until"] = mute_until
            if no_data_fire is not None:
                self._values["no_data_fire"] = no_data_fire
            if no_data_severity is not None:
                self._values["no_data_severity"] = no_data_severity
            if notification_list is not None:
                self._values["notification_list"] = notification_list
            if notify_threshold is not None:
                self._values["notify_threshold"] = notify_threshold
            if policy_configuration is not None:
                self._values["policy_configuration"] = policy_configuration
            if send_resolved is not None:
                self._values["send_resolved"] = send_resolved
            if severity_configurations is not None:
                self._values["severity_configurations"] = severity_configurations
            if threshold is not None:
                self._values["threshold"] = threshold
            if throttling is not None:
                self._values["throttling"] = throttling
            if type is not None:
                self._values["type"] = type
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def dashboard(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dashboard: Alarm associated dashboard.
            '''
            result = self._values.get("dashboard")
            assert result is not None, "Required property 'dashboard' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def query_list(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.QueryListProperty"]]]:
            '''
            :Property: queryList:
            '''
            result = self._values.get("query_list")
            assert result is not None, "Required property 'query_list' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.QueryListProperty"]]], result)

        @builtins.property
        def annotations(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.AnnotationsProperty"]]]]:
            '''
            :Property: annotations: The list of annotations.
            '''
            result = self._values.get("annotations")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.AnnotationsProperty"]]]], result)

        @builtins.property
        def auto_annotation(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: autoAnnotation:
            '''
            result = self._values.get("auto_annotation")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            condition: The condition that is required to trigger an alert.
            Log Service triggers an alert if the trigger condition is met.
            For example, you can set the trigger condition to pv%100 > 0 && uv > 0.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def group_configuration(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.GroupConfigurationProperty"]]:
            '''
            :Property: groupConfiguration:
            '''
            result = self._values.get("group_configuration")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.GroupConfigurationProperty"]], result)

        @builtins.property
        def join_configurations(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.JoinConfigurationsProperty"]]]]:
            '''
            :Property: joinConfigurations: The list of Join conditions when multiple tables are joined. For example, 3 tables join, and 2 joinConfigurations are passed in.
            '''
            result = self._values.get("join_configurations")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.JoinConfigurationsProperty"]]]], result)

        @builtins.property
        def labels(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.LabelsProperty"]]]]:
            '''
            :Property: labels: The list of tags.
            '''
            result = self._values.get("labels")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.LabelsProperty"]]]], result)

        @builtins.property
        def mute_until(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: muteUntil:
            '''
            result = self._values.get("mute_until")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def no_data_fire(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: noDataFire: Whether to trigger an alarm if there is no data, the default is false.
            '''
            result = self._values.get("no_data_fire")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def no_data_severity(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            noDataSeverity: The alarm level when there is no data to trigger the alarm. Valid values:
            2: Report
            4: Low
            6: Medium
            8: High
            10: Critical.
            '''
            result = self._values.get("no_data_severity")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def notification_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.NotificationListProperty"]]]]:
            '''
            :Property: notificationList:
            '''
            result = self._values.get("notification_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.NotificationListProperty"]]]], result)

        @builtins.property
        def notify_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            notifyThreshold: The notification threshold,
            which will not be notified until the number of triggers is reached.
            '''
            result = self._values.get("notify_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def policy_configuration(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.PolicyConfigurationProperty"]]:
            '''
            :Property: policyConfiguration:
            '''
            result = self._values.get("policy_configuration")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.PolicyConfigurationProperty"]], result)

        @builtins.property
        def send_resolved(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sendResolved: Whether to notify when the alarm is restored, the default is false.
            '''
            result = self._values.get("send_resolved")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def severity_configurations(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.SeverityConfigurationsProperty"]]]]:
            '''
            :Property: severityConfigurations: The list of severity configurations.
            '''
            result = self._values.get("severity_configurations")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.SeverityConfigurationsProperty"]]]], result)

        @builtins.property
        def threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: threshold: Trigger threshold.
            '''
            result = self._values.get("threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def throttling(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: throttling: Notification interval, default is no interval.
            '''
            result = self._values.get("throttling")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: Configuration type.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: Configuration version.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.DetailProperty",
        jsii_struct_bases=[],
        name_mapping={
            "configuration": "configuration",
            "display_name": "displayName",
            "name": "name",
            "schedule": "schedule",
            "description": "description",
            "state": "state",
            "type": "type",
        },
    )
    class DetailProperty:
        def __init__(
            self,
            *,
            configuration: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlert.ConfigurationProperty", typing.Dict[builtins.str, typing.Any]]],
            display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            schedule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlert.ScheduleProperty", typing.Dict[builtins.str, typing.Any]]],
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param configuration: 
            :param display_name: 
            :param name: 
            :param schedule: 
            :param description: 
            :param state: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a1b980fb01df01e7cca013f9fc86e5c17aad18f9d87e2e9ca54b93c028f419d2)
                check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
                check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument state", value=state, expected_type=type_hints["state"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "configuration": configuration,
                "display_name": display_name,
                "name": name,
                "schedule": schedule,
            }
            if description is not None:
                self._values["description"] = description
            if state is not None:
                self._values["state"] = state
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def configuration(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.ConfigurationProperty"]:
            '''
            :Property: configuration:
            '''
            result = self._values.get("configuration")
            assert result is not None, "Required property 'configuration' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.ConfigurationProperty"], result)

        @builtins.property
        def display_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: displayName: Alert name display in console. The name length is 1-64 characters.
            '''
            result = self._values.get("display_name")
            assert result is not None, "Required property 'display_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Alert name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def schedule(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.ScheduleProperty"]:
            '''
            :Property:

            schedule: The interval at which Log Service evaluates the alert rule.
            Note During an alert rule evaluation, if a query returns more than 100 log entries,
            Log Service checks only the first 100 log entries.
            '''
            result = self._values.get("schedule")
            assert result is not None, "Required property 'schedule' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.ScheduleProperty"], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: description: Description of the alert.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def state(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: state:
            '''
            result = self._values.get("state")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type:
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DetailProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.EvalConditionProperty",
        jsii_struct_bases=[],
        name_mapping={"condition": "condition", "count_condition": "countCondition"},
    )
    class EvalConditionProperty:
        def __init__(
            self,
            *,
            condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            count_condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param condition: 
            :param count_condition: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9baca7159b8bd19387ed97626c68cdfd774f1dcc1af7da6401a45e579625eb5a)
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
                check_type(argname="argument count_condition", value=count_condition, expected_type=type_hints["count_condition"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if condition is not None:
                self._values["condition"] = condition
            if count_condition is not None:
                self._values["count_condition"] = count_condition

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: condition: It is triggered when any piece of data in the result of judging the Cartesian product satisfies the Condition. After grouping, it indicates the data trigger condition for each group, and an empty string indicates that any data row is satisfied.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def count_condition(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: countCondition: Alarm expression, indicating how much data meets the alarm condition.
            '''
            result = self._values.get("count_condition")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EvalConditionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.GroupConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type", "fields": "fields"},
    )
    class GroupConfigurationProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            fields: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param type: 
            :param fields: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8335fbd7beb94c51b7a74abf2a0515bdf8c2144e3face1e0111afd38cc5a617d)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument fields", value=fields, expected_type=type_hints["fields"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "type": type,
            }
            if fields is not None:
                self._values["fields"] = fields

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            type: Grouping type.
            no_group: no grouping
            labels_auto: autocustom: custom.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def fields(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: fields: The fields of group. Fill in the empty list when not group. No fill when group automatically. Fill required when group in custom.
            '''
            result = self._values.get("fields")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "GroupConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.JoinConfigurationsProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type", "condition": "condition"},
    )
    class JoinConfigurationsProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param type: 
            :param condition: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bb37763eb7980adc3f4162a2b98986b2371ec6bc9b4ec74553a9d5d56b84b542)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "type": type,
            }
            if condition is not None:
                self._values["condition"] = condition

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: The type of set operation join.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: condition: Condition for a set operation. Not required when using Cartesian product.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "JoinConfigurationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.LabelsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class LabelsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__330c80b091e838652d1dcd3174153eabe55351c1bf74e4246a6dd874081b732b)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
                "value": value,
            }

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key:
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value:
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LabelsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.NotificationListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "type": "type",
            "content": "content",
            "email_list": "emailList",
            "headers": "headers",
            "method": "method",
            "mobile_list": "mobileList",
            "service_uri": "serviceUri",
        },
    )
    class NotificationListProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            email_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mobile_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            service_uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param type: 
            :param content: 
            :param email_list: 
            :param headers: 
            :param method: 
            :param mobile_list: 
            :param service_uri: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0dadac77daffa12d08cfcd4cc632a75631f1d14dbf49037a5890a74c08721c3a)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument content", value=content, expected_type=type_hints["content"])
                check_type(argname="argument email_list", value=email_list, expected_type=type_hints["email_list"])
                check_type(argname="argument headers", value=headers, expected_type=type_hints["headers"])
                check_type(argname="argument method", value=method, expected_type=type_hints["method"])
                check_type(argname="argument mobile_list", value=mobile_list, expected_type=type_hints["mobile_list"])
                check_type(argname="argument service_uri", value=service_uri, expected_type=type_hints["service_uri"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "type": type,
            }
            if content is not None:
                self._values["content"] = content
            if email_list is not None:
                self._values["email_list"] = email_list
            if headers is not None:
                self._values["headers"] = headers
            if method is not None:
                self._values["method"] = method
            if mobile_list is not None:
                self._values["mobile_list"] = mobile_list
            if service_uri is not None:
                self._values["service_uri"] = service_uri

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            type: This topic describes how to configure a notification method.
            Log Service can send alert notifications by using one or more methods.
            Available notification methods include emails, DingTalk chatbot webhooks,
            custom webhooks, and Alibaba Cloud Message Center.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def content(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: content: The content of an alert notification
            '''
            result = self._values.get("content")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def email_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: emailList:
            '''
            result = self._values.get("email_list")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def headers(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: headers:
            '''
            result = self._values.get("headers")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def method(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: method:
            '''
            result = self._values.get("method")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mobile_list(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mobileList:
            '''
            result = self._values.get("mobile_list")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def service_uri(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serviceUri: The webhook URL of the DingTalk chatbot.
            '''
            result = self._values.get("service_uri")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NotificationListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.PolicyConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "action_policy_id": "actionPolicyId",
            "alert_policy_id": "alertPolicyId",
            "repeat_interval": "repeatInterval",
            "use_default": "useDefault",
        },
    )
    class PolicyConfigurationProperty:
        def __init__(
            self,
            *,
            action_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            alert_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            repeat_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            use_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param action_policy_id: 
            :param alert_policy_id: 
            :param repeat_interval: 
            :param use_default: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__cea1347ca092dea0f8a2d7a1806f9c9f6eb5df8ef4f23212cc08f852fedee5df)
                check_type(argname="argument action_policy_id", value=action_policy_id, expected_type=type_hints["action_policy_id"])
                check_type(argname="argument alert_policy_id", value=alert_policy_id, expected_type=type_hints["alert_policy_id"])
                check_type(argname="argument repeat_interval", value=repeat_interval, expected_type=type_hints["repeat_interval"])
                check_type(argname="argument use_default", value=use_default, expected_type=type_hints["use_default"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if action_policy_id is not None:
                self._values["action_policy_id"] = action_policy_id
            if alert_policy_id is not None:
                self._values["alert_policy_id"] = alert_policy_id
            if repeat_interval is not None:
                self._values["repeat_interval"] = repeat_interval
            if use_default is not None:
                self._values["use_default"] = use_default

        @builtins.property
        def action_policy_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: actionPolicyId: The ID of action policy. It is useful when an alert policy references a dynamic action policy.
            '''
            result = self._values.get("action_policy_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def alert_policy_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: alertPolicyId: The ID of alert policy.
            '''
            result = self._values.get("alert_policy_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def repeat_interval(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: repeatInterval: Repeat interval. The format is number with suffix s/m/h.
            '''
            result = self._values.get("repeat_interval")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def use_default(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: useDefault:
            '''
            result = self._values.get("use_default")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PolicyConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.QueryListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "end": "end",
            "query": "query",
            "start": "start",
            "time_span_type": "timeSpanType",
            "chart_title": "chartTitle",
            "dashboard_id": "dashboardId",
            "log_store": "logStore",
            "power_sql_mode": "powerSqlMode",
            "project": "project",
            "region": "region",
            "role_arn": "roleArn",
            "store": "store",
            "store_type": "storeType",
        },
    )
    class QueryListProperty:
        def __init__(
            self,
            *,
            end: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            query: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            start: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            time_span_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            chart_title: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            dashboard_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            log_store: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            power_sql_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            store: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            store_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param end: 
            :param query: 
            :param start: 
            :param time_span_type: 
            :param chart_title: 
            :param dashboard_id: 
            :param log_store: 
            :param power_sql_mode: 
            :param project: 
            :param region: 
            :param role_arn: 
            :param store: 
            :param store_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__86fafbbbc10fca3015f28a29fa7dc2f5489989dc36e8bf3ed1fd392f86183ea6)
                check_type(argname="argument end", value=end, expected_type=type_hints["end"])
                check_type(argname="argument query", value=query, expected_type=type_hints["query"])
                check_type(argname="argument start", value=start, expected_type=type_hints["start"])
                check_type(argname="argument time_span_type", value=time_span_type, expected_type=type_hints["time_span_type"])
                check_type(argname="argument chart_title", value=chart_title, expected_type=type_hints["chart_title"])
                check_type(argname="argument dashboard_id", value=dashboard_id, expected_type=type_hints["dashboard_id"])
                check_type(argname="argument log_store", value=log_store, expected_type=type_hints["log_store"])
                check_type(argname="argument power_sql_mode", value=power_sql_mode, expected_type=type_hints["power_sql_mode"])
                check_type(argname="argument project", value=project, expected_type=type_hints["project"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
                check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
                check_type(argname="argument store", value=store, expected_type=type_hints["store"])
                check_type(argname="argument store_type", value=store_type, expected_type=type_hints["store_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "end": end,
                "query": query,
                "start": start,
                "time_span_type": time_span_type,
            }
            if chart_title is not None:
                self._values["chart_title"] = chart_title
            if dashboard_id is not None:
                self._values["dashboard_id"] = dashboard_id
            if log_store is not None:
                self._values["log_store"] = log_store
            if power_sql_mode is not None:
                self._values["power_sql_mode"] = power_sql_mode
            if project is not None:
                self._values["project"] = project
            if region is not None:
                self._values["region"] = region
            if role_arn is not None:
                self._values["role_arn"] = role_arn
            if store is not None:
                self._values["store"] = store
            if store_type is not None:
                self._values["store_type"] = store_type

        @builtins.property
        def end(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: end:
            '''
            result = self._values.get("end")
            assert result is not None, "Required property 'end' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def query(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: query:
            '''
            result = self._values.get("query")
            assert result is not None, "Required property 'query' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def start(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: start:
            '''
            result = self._values.get("start")
            assert result is not None, "Required property 'start' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def time_span_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: timeSpanType:
            '''
            result = self._values.get("time_span_type")
            assert result is not None, "Required property 'time_span_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def chart_title(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: chartTitle:
            '''
            result = self._values.get("chart_title")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def dashboard_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dashboardId: The ID of associated dashboard.
            '''
            result = self._values.get("dashboard_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def log_store(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: logStore:
            '''
            result = self._values.get("log_store")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def power_sql_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: powerSqlMode:
            '''
            result = self._values.get("power_sql_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def project(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: project:
            '''
            result = self._values.get("project")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: region:
            '''
            result = self._values.get("region")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def role_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: roleArn: ARN used by role access.
            '''
            result = self._values.get("role_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def store(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            store: When StoreType is log or metric, it indicates the LogStore to be queried.
            When StoreType is meta, it indicates the ResourceName to be queried.
            '''
            result = self._values.get("store")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def store_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            storeType: Log store type. Valid values:
            log: sls query analysis statement
            metric: sls time series data
            meta: query metastore.
            '''
            result = self._values.get("store_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QueryListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.ScheduleProperty",
        jsii_struct_bases=[],
        name_mapping={
            "type": "type",
            "cron_expression": "cronExpression",
            "day_of_week": "dayOfWeek",
            "delay": "delay",
            "hour": "hour",
            "interval": "interval",
            "run_immediately": "runImmediately",
        },
    )
    class ScheduleProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            cron_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            day_of_week: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            delay: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            hour: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            run_immediately: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param type: 
            :param cron_expression: 
            :param day_of_week: 
            :param delay: 
            :param hour: 
            :param interval: 
            :param run_immediately: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c34ed5f1de3c4967fda894df32f3f1b97edb2df72eb5c71d737b6cd739f64af7)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument cron_expression", value=cron_expression, expected_type=type_hints["cron_expression"])
                check_type(argname="argument day_of_week", value=day_of_week, expected_type=type_hints["day_of_week"])
                check_type(argname="argument delay", value=delay, expected_type=type_hints["delay"])
                check_type(argname="argument hour", value=hour, expected_type=type_hints["hour"])
                check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
                check_type(argname="argument run_immediately", value=run_immediately, expected_type=type_hints["run_immediately"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "type": type,
            }
            if cron_expression is not None:
                self._values["cron_expression"] = cron_expression
            if day_of_week is not None:
                self._values["day_of_week"] = day_of_week
            if delay is not None:
                self._values["delay"] = delay
            if hour is not None:
                self._values["hour"] = hour
            if interval is not None:
                self._values["interval"] = interval
            if run_immediately is not None:
                self._values["run_immediately"] = run_immediately

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type:
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def cron_expression(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cronExpression:
            '''
            result = self._values.get("cron_expression")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def day_of_week(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dayOfWeek:
            '''
            result = self._values.get("day_of_week")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def delay(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: delay:
            '''
            result = self._values.get("delay")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def hour(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: hour:
            '''
            result = self._values.get("hour")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def interval(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: interval: Execution interval
            '''
            result = self._values.get("interval")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def run_immediately(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: runImmediately:
            '''
            result = self._values.get("run_immediately")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScheduleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAlert.SeverityConfigurationsProperty",
        jsii_struct_bases=[],
        name_mapping={"severity": "severity", "eval_condition": "evalCondition"},
    )
    class SeverityConfigurationsProperty:
        def __init__(
            self,
            *,
            severity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            eval_condition: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAlert.EvalConditionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param severity: 
            :param eval_condition: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7e55c1d8adc9c7e907a04150d234949970efec6488cf020183afce9f2050ff11)
                check_type(argname="argument severity", value=severity, expected_type=type_hints["severity"])
                check_type(argname="argument eval_condition", value=eval_condition, expected_type=type_hints["eval_condition"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "severity": severity,
            }
            if eval_condition is not None:
                self._values["eval_condition"] = eval_condition

        @builtins.property
        def severity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            severity: The alarm level when there is no data to trigger the alarm. Valid values:
            2: Report
            4: Low
            6: Medium
            8: High
            10: Critical.
            '''
            result = self._values.get("severity")
            assert result is not None, "Required property 'severity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def eval_condition(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.EvalConditionProperty"]]:
            '''
            :Property: evalCondition:
            '''
            result = self._values.get("eval_condition")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAlert.EvalConditionProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SeverityConfigurationsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosAlertProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class RosAlertProps:
    def __init__(
        self,
        *,
        detail: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.DetailProperty, typing.Dict[builtins.str, typing.Any]]],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosAlert``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert

        :param detail: 
        :param project: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e604851b523ce98d9c9ba9fcf69e0fe38558dfd63c154b23e62b9e4fd4d6fc93)
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "detail": detail,
            "project": project,
        }

    @builtins.property
    def detail(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAlert.DetailProperty]:
        '''
        :Property: detail:
        '''
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAlert.DetailProperty], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        project: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAlertProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApplyConfigToMachineGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosApplyConfigToMachineGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ApplyConfigToMachineGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApplyConfigToMachineGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be2133a7cf1f199681a7fe74dd560b109406022dad7bea3042489e0034a35dc8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fe251e09b0fc2e85f6e790399a06cf82d60cc1f9a3e09a263a2a11e5110738a4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ad4e141f0c62780e02a6d37240cae998eb287add36782d84871573b0ae969c58)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="configName")
    def config_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configName: Apply config to the config name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "configName"))

    @config_name.setter
    def config_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30b716a11fc60ae769f44c954c8efdfae53cf934597adcbcb98a24e8d0602f7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configName", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Apply config to the group name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9f8a87a2f0f569408590ffc26efaef5982dce3f5eebb9ab6d6ba0dbd50a5135)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: projectName: Apply config to the project name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c777153b3ae0ff5ffb51374409be2ab6448452d10758f417c5329807b05ee59)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosApplyConfigToMachineGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_name": "configName",
        "group_name": "groupName",
        "project_name": "projectName",
    },
)
class RosApplyConfigToMachineGroupProps:
    def __init__(
        self,
        *,
        config_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApplyConfigToMachineGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup

        :param config_name: 
        :param group_name: 
        :param project_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__192cc019a9c4b40b582b57524bf78829b5f94fc33f62ab700eb3a8624aae6ef5)
            check_type(argname="argument config_name", value=config_name, expected_type=type_hints["config_name"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if config_name is not None:
            self._values["config_name"] = config_name
        if group_name is not None:
            self._values["group_name"] = group_name
        if project_name is not None:
            self._values["project_name"] = project_name

    @builtins.property
    def config_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configName: Apply config to the config name
        '''
        result = self._values.get("config_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Apply config to the group name
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: projectName: Apply config to the project name.
        '''
        result = self._values.get("project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApplyConfigToMachineGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAudit(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosAudit",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::Audit``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Audit`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAuditProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__890a1962056ff122d07ae419445879d7b2f5faea95741af30a499a3ff32f8a4e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b7ca55328c22e0103dc0a42399f0d4567e9ac1fcab9df4f14765320fec062de9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DisplayName: Name of SLS log audit.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: Name of SLS log audit.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf33293395b9373c6ef70b59b742a68b6ac28cf041f036cc99ae2ed229816e75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__faa37e69e70f953f7646bf82e0ce6ca88468f7b105492d9208b709aac0572e0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="variableMap")
    def variable_map(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAudit.VariableMapProperty"]:
        '''
        :Property: variableMap: Log audit detailed configuration.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAudit.VariableMapProperty"], jsii.get(self, "variableMap"))

    @variable_map.setter
    def variable_map(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAudit.VariableMapProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e569cc2500a074f550f2f545e5f8f1d51ac4f94cf82972b5600a446a45a65dcc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "variableMap", value)

    @builtins.property
    @jsii.member(jsii_name="multiAccount")
    def multi_account(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: multiAccount: Multi-account configuration, please fill in multiple aliuid.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "multiAccount"))

    @multi_account.setter
    def multi_account(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f94fdcbe12723d6ae915c332b0c83101ceb1891bfa990a8d85b7f04d119445d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiAccount", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty",
        jsii_struct_bases=[],
        name_mapping={
            "actiontrail_enabled": "actiontrailEnabled",
            "actiontrail_openapi_collection_policy": "actiontrailOpenapiCollectionPolicy",
            "actiontrail_openapi_policy_setting": "actiontrailOpenapiPolicySetting",
            "actiontrail_ti_enabled": "actiontrailTiEnabled",
            "actiontrail_ttl": "actiontrailTtl",
            "alb_access_collection_policy": "albAccessCollectionPolicy",
            "alb_access_enabled": "albAccessEnabled",
            "alb_access_ttl": "albAccessTtl",
            "alb_sync_enabled": "albSyncEnabled",
            "alb_sync_ttl": "albSyncTtl",
            "apigateway_access_collection_policy": "apigatewayAccessCollectionPolicy",
            "apigateway_access_policy_setting": "apigatewayAccessPolicySetting",
            "apigateway_enabled": "apigatewayEnabled",
            "apigateway_ti_enabled": "apigatewayTiEnabled",
            "apigateway_ttl": "apigatewayTtl",
            "appconnect_enabled": "appconnectEnabled",
            "appconnect_op_collection_policy": "appconnectOpCollectionPolicy",
            "appconnect_op_policy_setting": "appconnectOpPolicySetting",
            "appconnect_ti_enabled": "appconnectTiEnabled",
            "appconnect_ttl": "appconnectTtl",
            "bastion_audit_collection_policy": "bastionAuditCollectionPolicy",
            "bastion_audit_policy_setting": "bastionAuditPolicySetting",
            "bastion_enabled": "bastionEnabled",
            "bastion_ti_enabled": "bastionTiEnabled",
            "bastion_ttl": "bastionTtl",
            "cloudconfig_change_enabled": "cloudconfigChangeEnabled",
            "cloudconfig_change_ttl": "cloudconfigChangeTtl",
            "cloudconfig_noncom_enabled": "cloudconfigNoncomEnabled",
            "cloudconfig_noncom_ttl": "cloudconfigNoncomTtl",
            "cloudfirewall_access_collection_policy": "cloudfirewallAccessCollectionPolicy",
            "cloudfirewall_access_policy_setting": "cloudfirewallAccessPolicySetting",
            "cloudfirewall_enabled": "cloudfirewallEnabled",
            "cloudfirewall_ti_enabled": "cloudfirewallTiEnabled",
            "cloudfirewall_ttl": "cloudfirewallTtl",
            "cloudfirewall_vpc_enabled": "cloudfirewallVpcEnabled",
            "cloudfirewall_vpc_ttl": "cloudfirewallVpcTtl",
            "cps_callback_collection_policy": "cpsCallbackCollectionPolicy",
            "cps_callback_policy_setting": "cpsCallbackPolicySetting",
            "cps_enabled": "cpsEnabled",
            "cps_ti_enabled": "cpsTiEnabled",
            "cps_ttl": "cpsTtl",
            "ddos_bgp_access_enabled": "ddosBgpAccessEnabled",
            "ddos_bgp_access_ttl": "ddosBgpAccessTtl",
            "ddos_coo_access_collection_policy": "ddosCooAccessCollectionPolicy",
            "ddos_coo_access_enabled": "ddosCooAccessEnabled",
            "ddos_coo_access_policy_setting": "ddosCooAccessPolicySetting",
            "ddos_coo_access_ti_enabled": "ddosCooAccessTiEnabled",
            "ddos_coo_access_ttl": "ddosCooAccessTtl",
            "ddos_dip_access_enabled": "ddosDipAccessEnabled",
            "ddos_dip_access_ttl": "ddosDipAccessTtl",
            "dns_intranet_collection_policy": "dnsIntranetCollectionPolicy",
            "dns_intranet_enabled": "dnsIntranetEnabled",
            "dns_intranet_ttl": "dnsIntranetTtl",
            "dns_sync_enabled": "dnsSyncEnabled",
            "dns_sync_ttl": "dnsSyncTtl",
            "drds_audit_collection_policy": "drdsAuditCollectionPolicy",
            "drds_audit_enabled": "drdsAuditEnabled",
            "drds_audit_policy_setting": "drdsAuditPolicySetting",
            "drds_audit_ti_enabled": "drdsAuditTiEnabled",
            "drds_audit_ttl": "drdsAuditTtl",
            "drds_sync_enabled": "drdsSyncEnabled",
            "drds_sync_ttl": "drdsSyncTtl",
            "idaas_mng_collection_policy": "idaasMngCollectionPolicy",
            "idaas_mng_enabled": "idaasMngEnabled",
            "idaas_mng_ttl": "idaasMngTtl",
            "idaas_user_collection_policy": "idaasUserCollectionPolicy",
            "idaas_user_enabled": "idaasUserEnabled",
            "idaas_user_ttl": "idaasUserTtl",
            "k8_s_audit_collection_policy": "k8SAuditCollectionPolicy",
            "k8_s_audit_enabled": "k8SAuditEnabled",
            "k8_s_audit_policy_setting": "k8SAuditPolicySetting",
            "k8_s_audit_ti_enabled": "k8SAuditTiEnabled",
            "k8_s_audit_ttl": "k8SAuditTtl",
            "k8_s_event_collection_policy": "k8SEventCollectionPolicy",
            "k8_s_event_enabled": "k8SEventEnabled",
            "k8_s_event_policy_setting": "k8SEventPolicySetting",
            "k8_s_event_ti_enabled": "k8SEventTiEnabled",
            "k8_s_event_ttl": "k8SEventTtl",
            "k8_s_ingress_collection_policy": "k8SIngressCollectionPolicy",
            "k8_s_ingress_enabled": "k8SIngressEnabled",
            "k8_s_ingress_policy_setting": "k8SIngressPolicySetting",
            "k8_s_ingress_ti_enabled": "k8SIngressTiEnabled",
            "k8_s_ingress_ttl": "k8SIngressTtl",
            "nas_audit_collection_policy": "nasAuditCollectionPolicy",
            "nas_audit_policy_setting": "nasAuditPolicySetting",
            "nas_enabled": "nasEnabled",
            "nas_ti_enabled": "nasTiEnabled",
            "nas_ttl": "nasTtl",
            "oss_access_collection_policy": "ossAccessCollectionPolicy",
            "oss_access_enabled": "ossAccessEnabled",
            "oss_access_policy_setting": "ossAccessPolicySetting",
            "oss_access_ti_enabled": "ossAccessTiEnabled",
            "oss_access_ttl": "ossAccessTtl",
            "oss_metering_collection_policy": "ossMeteringCollectionPolicy",
            "oss_metering_enabled": "ossMeteringEnabled",
            "oss_metering_policy_setting": "ossMeteringPolicySetting",
            "oss_metering_ti_enabled": "ossMeteringTiEnabled",
            "oss_metering_ttl": "ossMeteringTtl",
            "oss_sync_enabled": "ossSyncEnabled",
            "oss_sync_ttl": "ossSyncTtl",
            "polardb_audit_collection_policy": "polardbAuditCollectionPolicy",
            "polardb_audit_policy_setting": "polardbAuditPolicySetting",
            "polardb_enabled": "polardbEnabled",
            "polardb_error_collection_policy": "polardbErrorCollectionPolicy",
            "polardb_error_enabled": "polardbErrorEnabled",
            "polardb_error_ttl": "polardbErrorTtl",
            "polardb_perf_collection_policy": "polardbPerfCollectionPolicy",
            "polardb_perf_enabled": "polardbPerfEnabled",
            "polardb_perf_policy_setting": "polardbPerfPolicySetting",
            "polardb_perf_ti_enabled": "polardbPerfTiEnabled",
            "polardb_perf_ttl": "polardbPerfTtl",
            "polardb_slow_collection_policy": "polardbSlowCollectionPolicy",
            "polardb_slow_enabled": "polardbSlowEnabled",
            "polardb_slow_policy_setting": "polardbSlowPolicySetting",
            "polardb_slow_ti_enabled": "polardbSlowTiEnabled",
            "polardb_slow_ttl": "polardbSlowTtl",
            "polardb_ti_enabled": "polardbTiEnabled",
            "polardb_ttl": "polardbTtl",
            "rds_audit_collection_policy": "rdsAuditCollectionPolicy",
            "rds_audit_policy_setting": "rdsAuditPolicySetting",
            "rds_enabled": "rdsEnabled",
            "rds_error_collection_policy": "rdsErrorCollectionPolicy",
            "rds_error_enabled": "rdsErrorEnabled",
            "rds_error_ttl": "rdsErrorTtl",
            "rds_perf_collection_policy": "rdsPerfCollectionPolicy",
            "rds_perf_enabled": "rdsPerfEnabled",
            "rds_perf_policy_setting": "rdsPerfPolicySetting",
            "rds_perf_ti_enabled": "rdsPerfTiEnabled",
            "rds_perf_ttl": "rdsPerfTtl",
            "rds_slow_collection_policy": "rdsSlowCollectionPolicy",
            "rds_slow_enabled": "rdsSlowEnabled",
            "rds_slow_policy_setting": "rdsSlowPolicySetting",
            "rds_slow_ti_enabled": "rdsSlowTiEnabled",
            "rds_slow_ttl": "rdsSlowTtl",
            "rds_ti_enabled": "rdsTiEnabled",
            "rds_ttl": "rdsTtl",
            "redis_audit_collection_policy": "redisAuditCollectionPolicy",
            "redis_audit_enabled": "redisAuditEnabled",
            "redis_audit_policy_setting": "redisAuditPolicySetting",
            "redis_audit_ti_enabled": "redisAuditTiEnabled",
            "redis_audit_ttl": "redisAuditTtl",
            "redis_sync_enabled": "redisSyncEnabled",
            "redis_sync_ttl": "redisSyncTtl",
            "sas_crack_enabled": "sasCrackEnabled",
            "sas_dns_enabled": "sasDnsEnabled",
            "sas_dns_query_enabled": "sasDnsQueryEnabled",
            "sas_http_enabled": "sasHttpEnabled",
            "sas_local_dns_enabled": "sasLocalDnsEnabled",
            "sas_login_enabled": "sasLoginEnabled",
            "sas_network_enabled": "sasNetworkEnabled",
            "sas_process_enabled": "sasProcessEnabled",
            "sas_security_alert_enabled": "sasSecurityAlertEnabled",
            "sas_security_hc_enabled": "sasSecurityHcEnabled",
            "sas_security_vul_enabled": "sasSecurityVulEnabled",
            "sas_session_enabled": "sasSessionEnabled",
            "sas_snapshot_account_enabled": "sasSnapshotAccountEnabled",
            "sas_snapshot_port_enabled": "sasSnapshotPortEnabled",
            "sas_snapshot_process_enabled": "sasSnapshotProcessEnabled",
            "sas_ti_enabled": "sasTiEnabled",
            "sas_ttl": "sasTtl",
            "slb_access_collection_policy": "slbAccessCollectionPolicy",
            "slb_access_enabled": "slbAccessEnabled",
            "slb_access_policy_setting": "slbAccessPolicySetting",
            "slb_access_ti_enabled": "slbAccessTiEnabled",
            "slb_access_ttl": "slbAccessTtl",
            "slb_sync_enabled": "slbSyncEnabled",
            "slb_sync_ttl": "slbSyncTtl",
            "vpc_flow_collection_policy": "vpcFlowCollectionPolicy",
            "vpc_flow_enabled": "vpcFlowEnabled",
            "vpc_flow_ttl": "vpcFlowTtl",
            "vpc_sync_enabled": "vpcSyncEnabled",
            "vpc_sync_ttl": "vpcSyncTtl",
            "waf_access_collection_policy": "wafAccessCollectionPolicy",
            "waf_access_policy_setting": "wafAccessPolicySetting",
            "waf_enabled": "wafEnabled",
            "waf_ti_enabled": "wafTiEnabled",
            "waf_ttl": "wafTtl",
        },
    )
    class VariableMapProperty:
        def __init__(
            self,
            *,
            actiontrail_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            actiontrail_openapi_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            actiontrail_openapi_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            actiontrail_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            actiontrail_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            alb_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            alb_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            alb_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            alb_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            alb_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            apigateway_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            apigateway_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            apigateway_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            apigateway_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            apigateway_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            appconnect_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            appconnect_op_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            appconnect_op_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            appconnect_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            appconnect_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            bastion_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            bastion_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            bastion_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            bastion_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            bastion_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudconfig_change_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudconfig_change_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudconfig_noncom_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudconfig_noncom_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudfirewall_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudfirewall_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudfirewall_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudfirewall_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudfirewall_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudfirewall_vpc_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudfirewall_vpc_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cps_callback_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cps_callback_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cps_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cps_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cps_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_bgp_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_bgp_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_coo_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_coo_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_coo_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_coo_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_coo_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_dip_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_dip_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            dns_intranet_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            dns_intranet_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            dns_intranet_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            dns_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            dns_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_audit_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_audit_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            idaas_mng_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            idaas_mng_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            idaas_mng_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            idaas_user_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            idaas_user_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            idaas_user_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_audit_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_audit_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_event_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_event_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_event_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_event_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_event_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_ingress_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_ingress_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_ingress_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_ingress_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            k8_s_ingress_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            nas_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            nas_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            nas_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            nas_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            nas_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_metering_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_metering_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_metering_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_metering_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_metering_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_error_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_error_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_error_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_perf_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_perf_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_perf_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_perf_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_perf_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_slow_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_slow_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_slow_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_slow_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_slow_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            polardb_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_error_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_error_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_error_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_perf_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_perf_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_perf_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_perf_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_perf_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_slow_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_slow_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_slow_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_slow_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_slow_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rds_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            redis_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            redis_audit_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            redis_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            redis_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            redis_audit_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            redis_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            redis_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_crack_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_dns_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_dns_query_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_http_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_local_dns_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_login_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_network_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_process_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_security_alert_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_security_hc_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_security_vul_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_session_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_snapshot_account_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_snapshot_port_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_snapshot_process_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sas_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            slb_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            slb_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            slb_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            slb_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            slb_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            slb_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            slb_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_flow_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_flow_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_flow_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            waf_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            waf_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            waf_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            waf_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            waf_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param actiontrail_enabled: 
            :param actiontrail_openapi_collection_policy: 
            :param actiontrail_openapi_policy_setting: 
            :param actiontrail_ti_enabled: 
            :param actiontrail_ttl: 
            :param alb_access_collection_policy: 
            :param alb_access_enabled: 
            :param alb_access_ttl: 
            :param alb_sync_enabled: 
            :param alb_sync_ttl: 
            :param apigateway_access_collection_policy: 
            :param apigateway_access_policy_setting: 
            :param apigateway_enabled: 
            :param apigateway_ti_enabled: 
            :param apigateway_ttl: 
            :param appconnect_enabled: 
            :param appconnect_op_collection_policy: 
            :param appconnect_op_policy_setting: 
            :param appconnect_ti_enabled: 
            :param appconnect_ttl: 
            :param bastion_audit_collection_policy: 
            :param bastion_audit_policy_setting: 
            :param bastion_enabled: 
            :param bastion_ti_enabled: 
            :param bastion_ttl: 
            :param cloudconfig_change_enabled: 
            :param cloudconfig_change_ttl: 
            :param cloudconfig_noncom_enabled: 
            :param cloudconfig_noncom_ttl: 
            :param cloudfirewall_access_collection_policy: 
            :param cloudfirewall_access_policy_setting: 
            :param cloudfirewall_enabled: 
            :param cloudfirewall_ti_enabled: 
            :param cloudfirewall_ttl: 
            :param cloudfirewall_vpc_enabled: 
            :param cloudfirewall_vpc_ttl: 
            :param cps_callback_collection_policy: 
            :param cps_callback_policy_setting: 
            :param cps_enabled: 
            :param cps_ti_enabled: 
            :param cps_ttl: 
            :param ddos_bgp_access_enabled: 
            :param ddos_bgp_access_ttl: 
            :param ddos_coo_access_collection_policy: 
            :param ddos_coo_access_enabled: 
            :param ddos_coo_access_policy_setting: 
            :param ddos_coo_access_ti_enabled: 
            :param ddos_coo_access_ttl: 
            :param ddos_dip_access_enabled: 
            :param ddos_dip_access_ttl: 
            :param dns_intranet_collection_policy: 
            :param dns_intranet_enabled: 
            :param dns_intranet_ttl: 
            :param dns_sync_enabled: 
            :param dns_sync_ttl: 
            :param drds_audit_collection_policy: 
            :param drds_audit_enabled: 
            :param drds_audit_policy_setting: 
            :param drds_audit_ti_enabled: 
            :param drds_audit_ttl: 
            :param drds_sync_enabled: 
            :param drds_sync_ttl: 
            :param idaas_mng_collection_policy: 
            :param idaas_mng_enabled: 
            :param idaas_mng_ttl: 
            :param idaas_user_collection_policy: 
            :param idaas_user_enabled: 
            :param idaas_user_ttl: 
            :param k8_s_audit_collection_policy: 
            :param k8_s_audit_enabled: 
            :param k8_s_audit_policy_setting: 
            :param k8_s_audit_ti_enabled: 
            :param k8_s_audit_ttl: 
            :param k8_s_event_collection_policy: 
            :param k8_s_event_enabled: 
            :param k8_s_event_policy_setting: 
            :param k8_s_event_ti_enabled: 
            :param k8_s_event_ttl: 
            :param k8_s_ingress_collection_policy: 
            :param k8_s_ingress_enabled: 
            :param k8_s_ingress_policy_setting: 
            :param k8_s_ingress_ti_enabled: 
            :param k8_s_ingress_ttl: 
            :param nas_audit_collection_policy: 
            :param nas_audit_policy_setting: 
            :param nas_enabled: 
            :param nas_ti_enabled: 
            :param nas_ttl: 
            :param oss_access_collection_policy: 
            :param oss_access_enabled: 
            :param oss_access_policy_setting: 
            :param oss_access_ti_enabled: 
            :param oss_access_ttl: 
            :param oss_metering_collection_policy: 
            :param oss_metering_enabled: 
            :param oss_metering_policy_setting: 
            :param oss_metering_ti_enabled: 
            :param oss_metering_ttl: 
            :param oss_sync_enabled: 
            :param oss_sync_ttl: 
            :param polardb_audit_collection_policy: 
            :param polardb_audit_policy_setting: 
            :param polardb_enabled: 
            :param polardb_error_collection_policy: 
            :param polardb_error_enabled: 
            :param polardb_error_ttl: 
            :param polardb_perf_collection_policy: 
            :param polardb_perf_enabled: 
            :param polardb_perf_policy_setting: 
            :param polardb_perf_ti_enabled: 
            :param polardb_perf_ttl: 
            :param polardb_slow_collection_policy: 
            :param polardb_slow_enabled: 
            :param polardb_slow_policy_setting: 
            :param polardb_slow_ti_enabled: 
            :param polardb_slow_ttl: 
            :param polardb_ti_enabled: 
            :param polardb_ttl: 
            :param rds_audit_collection_policy: 
            :param rds_audit_policy_setting: 
            :param rds_enabled: 
            :param rds_error_collection_policy: 
            :param rds_error_enabled: 
            :param rds_error_ttl: 
            :param rds_perf_collection_policy: 
            :param rds_perf_enabled: 
            :param rds_perf_policy_setting: 
            :param rds_perf_ti_enabled: 
            :param rds_perf_ttl: 
            :param rds_slow_collection_policy: 
            :param rds_slow_enabled: 
            :param rds_slow_policy_setting: 
            :param rds_slow_ti_enabled: 
            :param rds_slow_ttl: 
            :param rds_ti_enabled: 
            :param rds_ttl: 
            :param redis_audit_collection_policy: 
            :param redis_audit_enabled: 
            :param redis_audit_policy_setting: 
            :param redis_audit_ti_enabled: 
            :param redis_audit_ttl: 
            :param redis_sync_enabled: 
            :param redis_sync_ttl: 
            :param sas_crack_enabled: 
            :param sas_dns_enabled: 
            :param sas_dns_query_enabled: 
            :param sas_http_enabled: 
            :param sas_local_dns_enabled: 
            :param sas_login_enabled: 
            :param sas_network_enabled: 
            :param sas_process_enabled: 
            :param sas_security_alert_enabled: 
            :param sas_security_hc_enabled: 
            :param sas_security_vul_enabled: 
            :param sas_session_enabled: 
            :param sas_snapshot_account_enabled: 
            :param sas_snapshot_port_enabled: 
            :param sas_snapshot_process_enabled: 
            :param sas_ti_enabled: 
            :param sas_ttl: 
            :param slb_access_collection_policy: 
            :param slb_access_enabled: 
            :param slb_access_policy_setting: 
            :param slb_access_ti_enabled: 
            :param slb_access_ttl: 
            :param slb_sync_enabled: 
            :param slb_sync_ttl: 
            :param vpc_flow_collection_policy: 
            :param vpc_flow_enabled: 
            :param vpc_flow_ttl: 
            :param vpc_sync_enabled: 
            :param vpc_sync_ttl: 
            :param waf_access_collection_policy: 
            :param waf_access_policy_setting: 
            :param waf_enabled: 
            :param waf_ti_enabled: 
            :param waf_ttl: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4e86dadc77abd9f0591b0907ef25e31e7aad62ae1ae0ba4279815f3fb59a7e2d)
                check_type(argname="argument actiontrail_enabled", value=actiontrail_enabled, expected_type=type_hints["actiontrail_enabled"])
                check_type(argname="argument actiontrail_openapi_collection_policy", value=actiontrail_openapi_collection_policy, expected_type=type_hints["actiontrail_openapi_collection_policy"])
                check_type(argname="argument actiontrail_openapi_policy_setting", value=actiontrail_openapi_policy_setting, expected_type=type_hints["actiontrail_openapi_policy_setting"])
                check_type(argname="argument actiontrail_ti_enabled", value=actiontrail_ti_enabled, expected_type=type_hints["actiontrail_ti_enabled"])
                check_type(argname="argument actiontrail_ttl", value=actiontrail_ttl, expected_type=type_hints["actiontrail_ttl"])
                check_type(argname="argument alb_access_collection_policy", value=alb_access_collection_policy, expected_type=type_hints["alb_access_collection_policy"])
                check_type(argname="argument alb_access_enabled", value=alb_access_enabled, expected_type=type_hints["alb_access_enabled"])
                check_type(argname="argument alb_access_ttl", value=alb_access_ttl, expected_type=type_hints["alb_access_ttl"])
                check_type(argname="argument alb_sync_enabled", value=alb_sync_enabled, expected_type=type_hints["alb_sync_enabled"])
                check_type(argname="argument alb_sync_ttl", value=alb_sync_ttl, expected_type=type_hints["alb_sync_ttl"])
                check_type(argname="argument apigateway_access_collection_policy", value=apigateway_access_collection_policy, expected_type=type_hints["apigateway_access_collection_policy"])
                check_type(argname="argument apigateway_access_policy_setting", value=apigateway_access_policy_setting, expected_type=type_hints["apigateway_access_policy_setting"])
                check_type(argname="argument apigateway_enabled", value=apigateway_enabled, expected_type=type_hints["apigateway_enabled"])
                check_type(argname="argument apigateway_ti_enabled", value=apigateway_ti_enabled, expected_type=type_hints["apigateway_ti_enabled"])
                check_type(argname="argument apigateway_ttl", value=apigateway_ttl, expected_type=type_hints["apigateway_ttl"])
                check_type(argname="argument appconnect_enabled", value=appconnect_enabled, expected_type=type_hints["appconnect_enabled"])
                check_type(argname="argument appconnect_op_collection_policy", value=appconnect_op_collection_policy, expected_type=type_hints["appconnect_op_collection_policy"])
                check_type(argname="argument appconnect_op_policy_setting", value=appconnect_op_policy_setting, expected_type=type_hints["appconnect_op_policy_setting"])
                check_type(argname="argument appconnect_ti_enabled", value=appconnect_ti_enabled, expected_type=type_hints["appconnect_ti_enabled"])
                check_type(argname="argument appconnect_ttl", value=appconnect_ttl, expected_type=type_hints["appconnect_ttl"])
                check_type(argname="argument bastion_audit_collection_policy", value=bastion_audit_collection_policy, expected_type=type_hints["bastion_audit_collection_policy"])
                check_type(argname="argument bastion_audit_policy_setting", value=bastion_audit_policy_setting, expected_type=type_hints["bastion_audit_policy_setting"])
                check_type(argname="argument bastion_enabled", value=bastion_enabled, expected_type=type_hints["bastion_enabled"])
                check_type(argname="argument bastion_ti_enabled", value=bastion_ti_enabled, expected_type=type_hints["bastion_ti_enabled"])
                check_type(argname="argument bastion_ttl", value=bastion_ttl, expected_type=type_hints["bastion_ttl"])
                check_type(argname="argument cloudconfig_change_enabled", value=cloudconfig_change_enabled, expected_type=type_hints["cloudconfig_change_enabled"])
                check_type(argname="argument cloudconfig_change_ttl", value=cloudconfig_change_ttl, expected_type=type_hints["cloudconfig_change_ttl"])
                check_type(argname="argument cloudconfig_noncom_enabled", value=cloudconfig_noncom_enabled, expected_type=type_hints["cloudconfig_noncom_enabled"])
                check_type(argname="argument cloudconfig_noncom_ttl", value=cloudconfig_noncom_ttl, expected_type=type_hints["cloudconfig_noncom_ttl"])
                check_type(argname="argument cloudfirewall_access_collection_policy", value=cloudfirewall_access_collection_policy, expected_type=type_hints["cloudfirewall_access_collection_policy"])
                check_type(argname="argument cloudfirewall_access_policy_setting", value=cloudfirewall_access_policy_setting, expected_type=type_hints["cloudfirewall_access_policy_setting"])
                check_type(argname="argument cloudfirewall_enabled", value=cloudfirewall_enabled, expected_type=type_hints["cloudfirewall_enabled"])
                check_type(argname="argument cloudfirewall_ti_enabled", value=cloudfirewall_ti_enabled, expected_type=type_hints["cloudfirewall_ti_enabled"])
                check_type(argname="argument cloudfirewall_ttl", value=cloudfirewall_ttl, expected_type=type_hints["cloudfirewall_ttl"])
                check_type(argname="argument cloudfirewall_vpc_enabled", value=cloudfirewall_vpc_enabled, expected_type=type_hints["cloudfirewall_vpc_enabled"])
                check_type(argname="argument cloudfirewall_vpc_ttl", value=cloudfirewall_vpc_ttl, expected_type=type_hints["cloudfirewall_vpc_ttl"])
                check_type(argname="argument cps_callback_collection_policy", value=cps_callback_collection_policy, expected_type=type_hints["cps_callback_collection_policy"])
                check_type(argname="argument cps_callback_policy_setting", value=cps_callback_policy_setting, expected_type=type_hints["cps_callback_policy_setting"])
                check_type(argname="argument cps_enabled", value=cps_enabled, expected_type=type_hints["cps_enabled"])
                check_type(argname="argument cps_ti_enabled", value=cps_ti_enabled, expected_type=type_hints["cps_ti_enabled"])
                check_type(argname="argument cps_ttl", value=cps_ttl, expected_type=type_hints["cps_ttl"])
                check_type(argname="argument ddos_bgp_access_enabled", value=ddos_bgp_access_enabled, expected_type=type_hints["ddos_bgp_access_enabled"])
                check_type(argname="argument ddos_bgp_access_ttl", value=ddos_bgp_access_ttl, expected_type=type_hints["ddos_bgp_access_ttl"])
                check_type(argname="argument ddos_coo_access_collection_policy", value=ddos_coo_access_collection_policy, expected_type=type_hints["ddos_coo_access_collection_policy"])
                check_type(argname="argument ddos_coo_access_enabled", value=ddos_coo_access_enabled, expected_type=type_hints["ddos_coo_access_enabled"])
                check_type(argname="argument ddos_coo_access_policy_setting", value=ddos_coo_access_policy_setting, expected_type=type_hints["ddos_coo_access_policy_setting"])
                check_type(argname="argument ddos_coo_access_ti_enabled", value=ddos_coo_access_ti_enabled, expected_type=type_hints["ddos_coo_access_ti_enabled"])
                check_type(argname="argument ddos_coo_access_ttl", value=ddos_coo_access_ttl, expected_type=type_hints["ddos_coo_access_ttl"])
                check_type(argname="argument ddos_dip_access_enabled", value=ddos_dip_access_enabled, expected_type=type_hints["ddos_dip_access_enabled"])
                check_type(argname="argument ddos_dip_access_ttl", value=ddos_dip_access_ttl, expected_type=type_hints["ddos_dip_access_ttl"])
                check_type(argname="argument dns_intranet_collection_policy", value=dns_intranet_collection_policy, expected_type=type_hints["dns_intranet_collection_policy"])
                check_type(argname="argument dns_intranet_enabled", value=dns_intranet_enabled, expected_type=type_hints["dns_intranet_enabled"])
                check_type(argname="argument dns_intranet_ttl", value=dns_intranet_ttl, expected_type=type_hints["dns_intranet_ttl"])
                check_type(argname="argument dns_sync_enabled", value=dns_sync_enabled, expected_type=type_hints["dns_sync_enabled"])
                check_type(argname="argument dns_sync_ttl", value=dns_sync_ttl, expected_type=type_hints["dns_sync_ttl"])
                check_type(argname="argument drds_audit_collection_policy", value=drds_audit_collection_policy, expected_type=type_hints["drds_audit_collection_policy"])
                check_type(argname="argument drds_audit_enabled", value=drds_audit_enabled, expected_type=type_hints["drds_audit_enabled"])
                check_type(argname="argument drds_audit_policy_setting", value=drds_audit_policy_setting, expected_type=type_hints["drds_audit_policy_setting"])
                check_type(argname="argument drds_audit_ti_enabled", value=drds_audit_ti_enabled, expected_type=type_hints["drds_audit_ti_enabled"])
                check_type(argname="argument drds_audit_ttl", value=drds_audit_ttl, expected_type=type_hints["drds_audit_ttl"])
                check_type(argname="argument drds_sync_enabled", value=drds_sync_enabled, expected_type=type_hints["drds_sync_enabled"])
                check_type(argname="argument drds_sync_ttl", value=drds_sync_ttl, expected_type=type_hints["drds_sync_ttl"])
                check_type(argname="argument idaas_mng_collection_policy", value=idaas_mng_collection_policy, expected_type=type_hints["idaas_mng_collection_policy"])
                check_type(argname="argument idaas_mng_enabled", value=idaas_mng_enabled, expected_type=type_hints["idaas_mng_enabled"])
                check_type(argname="argument idaas_mng_ttl", value=idaas_mng_ttl, expected_type=type_hints["idaas_mng_ttl"])
                check_type(argname="argument idaas_user_collection_policy", value=idaas_user_collection_policy, expected_type=type_hints["idaas_user_collection_policy"])
                check_type(argname="argument idaas_user_enabled", value=idaas_user_enabled, expected_type=type_hints["idaas_user_enabled"])
                check_type(argname="argument idaas_user_ttl", value=idaas_user_ttl, expected_type=type_hints["idaas_user_ttl"])
                check_type(argname="argument k8_s_audit_collection_policy", value=k8_s_audit_collection_policy, expected_type=type_hints["k8_s_audit_collection_policy"])
                check_type(argname="argument k8_s_audit_enabled", value=k8_s_audit_enabled, expected_type=type_hints["k8_s_audit_enabled"])
                check_type(argname="argument k8_s_audit_policy_setting", value=k8_s_audit_policy_setting, expected_type=type_hints["k8_s_audit_policy_setting"])
                check_type(argname="argument k8_s_audit_ti_enabled", value=k8_s_audit_ti_enabled, expected_type=type_hints["k8_s_audit_ti_enabled"])
                check_type(argname="argument k8_s_audit_ttl", value=k8_s_audit_ttl, expected_type=type_hints["k8_s_audit_ttl"])
                check_type(argname="argument k8_s_event_collection_policy", value=k8_s_event_collection_policy, expected_type=type_hints["k8_s_event_collection_policy"])
                check_type(argname="argument k8_s_event_enabled", value=k8_s_event_enabled, expected_type=type_hints["k8_s_event_enabled"])
                check_type(argname="argument k8_s_event_policy_setting", value=k8_s_event_policy_setting, expected_type=type_hints["k8_s_event_policy_setting"])
                check_type(argname="argument k8_s_event_ti_enabled", value=k8_s_event_ti_enabled, expected_type=type_hints["k8_s_event_ti_enabled"])
                check_type(argname="argument k8_s_event_ttl", value=k8_s_event_ttl, expected_type=type_hints["k8_s_event_ttl"])
                check_type(argname="argument k8_s_ingress_collection_policy", value=k8_s_ingress_collection_policy, expected_type=type_hints["k8_s_ingress_collection_policy"])
                check_type(argname="argument k8_s_ingress_enabled", value=k8_s_ingress_enabled, expected_type=type_hints["k8_s_ingress_enabled"])
                check_type(argname="argument k8_s_ingress_policy_setting", value=k8_s_ingress_policy_setting, expected_type=type_hints["k8_s_ingress_policy_setting"])
                check_type(argname="argument k8_s_ingress_ti_enabled", value=k8_s_ingress_ti_enabled, expected_type=type_hints["k8_s_ingress_ti_enabled"])
                check_type(argname="argument k8_s_ingress_ttl", value=k8_s_ingress_ttl, expected_type=type_hints["k8_s_ingress_ttl"])
                check_type(argname="argument nas_audit_collection_policy", value=nas_audit_collection_policy, expected_type=type_hints["nas_audit_collection_policy"])
                check_type(argname="argument nas_audit_policy_setting", value=nas_audit_policy_setting, expected_type=type_hints["nas_audit_policy_setting"])
                check_type(argname="argument nas_enabled", value=nas_enabled, expected_type=type_hints["nas_enabled"])
                check_type(argname="argument nas_ti_enabled", value=nas_ti_enabled, expected_type=type_hints["nas_ti_enabled"])
                check_type(argname="argument nas_ttl", value=nas_ttl, expected_type=type_hints["nas_ttl"])
                check_type(argname="argument oss_access_collection_policy", value=oss_access_collection_policy, expected_type=type_hints["oss_access_collection_policy"])
                check_type(argname="argument oss_access_enabled", value=oss_access_enabled, expected_type=type_hints["oss_access_enabled"])
                check_type(argname="argument oss_access_policy_setting", value=oss_access_policy_setting, expected_type=type_hints["oss_access_policy_setting"])
                check_type(argname="argument oss_access_ti_enabled", value=oss_access_ti_enabled, expected_type=type_hints["oss_access_ti_enabled"])
                check_type(argname="argument oss_access_ttl", value=oss_access_ttl, expected_type=type_hints["oss_access_ttl"])
                check_type(argname="argument oss_metering_collection_policy", value=oss_metering_collection_policy, expected_type=type_hints["oss_metering_collection_policy"])
                check_type(argname="argument oss_metering_enabled", value=oss_metering_enabled, expected_type=type_hints["oss_metering_enabled"])
                check_type(argname="argument oss_metering_policy_setting", value=oss_metering_policy_setting, expected_type=type_hints["oss_metering_policy_setting"])
                check_type(argname="argument oss_metering_ti_enabled", value=oss_metering_ti_enabled, expected_type=type_hints["oss_metering_ti_enabled"])
                check_type(argname="argument oss_metering_ttl", value=oss_metering_ttl, expected_type=type_hints["oss_metering_ttl"])
                check_type(argname="argument oss_sync_enabled", value=oss_sync_enabled, expected_type=type_hints["oss_sync_enabled"])
                check_type(argname="argument oss_sync_ttl", value=oss_sync_ttl, expected_type=type_hints["oss_sync_ttl"])
                check_type(argname="argument polardb_audit_collection_policy", value=polardb_audit_collection_policy, expected_type=type_hints["polardb_audit_collection_policy"])
                check_type(argname="argument polardb_audit_policy_setting", value=polardb_audit_policy_setting, expected_type=type_hints["polardb_audit_policy_setting"])
                check_type(argname="argument polardb_enabled", value=polardb_enabled, expected_type=type_hints["polardb_enabled"])
                check_type(argname="argument polardb_error_collection_policy", value=polardb_error_collection_policy, expected_type=type_hints["polardb_error_collection_policy"])
                check_type(argname="argument polardb_error_enabled", value=polardb_error_enabled, expected_type=type_hints["polardb_error_enabled"])
                check_type(argname="argument polardb_error_ttl", value=polardb_error_ttl, expected_type=type_hints["polardb_error_ttl"])
                check_type(argname="argument polardb_perf_collection_policy", value=polardb_perf_collection_policy, expected_type=type_hints["polardb_perf_collection_policy"])
                check_type(argname="argument polardb_perf_enabled", value=polardb_perf_enabled, expected_type=type_hints["polardb_perf_enabled"])
                check_type(argname="argument polardb_perf_policy_setting", value=polardb_perf_policy_setting, expected_type=type_hints["polardb_perf_policy_setting"])
                check_type(argname="argument polardb_perf_ti_enabled", value=polardb_perf_ti_enabled, expected_type=type_hints["polardb_perf_ti_enabled"])
                check_type(argname="argument polardb_perf_ttl", value=polardb_perf_ttl, expected_type=type_hints["polardb_perf_ttl"])
                check_type(argname="argument polardb_slow_collection_policy", value=polardb_slow_collection_policy, expected_type=type_hints["polardb_slow_collection_policy"])
                check_type(argname="argument polardb_slow_enabled", value=polardb_slow_enabled, expected_type=type_hints["polardb_slow_enabled"])
                check_type(argname="argument polardb_slow_policy_setting", value=polardb_slow_policy_setting, expected_type=type_hints["polardb_slow_policy_setting"])
                check_type(argname="argument polardb_slow_ti_enabled", value=polardb_slow_ti_enabled, expected_type=type_hints["polardb_slow_ti_enabled"])
                check_type(argname="argument polardb_slow_ttl", value=polardb_slow_ttl, expected_type=type_hints["polardb_slow_ttl"])
                check_type(argname="argument polardb_ti_enabled", value=polardb_ti_enabled, expected_type=type_hints["polardb_ti_enabled"])
                check_type(argname="argument polardb_ttl", value=polardb_ttl, expected_type=type_hints["polardb_ttl"])
                check_type(argname="argument rds_audit_collection_policy", value=rds_audit_collection_policy, expected_type=type_hints["rds_audit_collection_policy"])
                check_type(argname="argument rds_audit_policy_setting", value=rds_audit_policy_setting, expected_type=type_hints["rds_audit_policy_setting"])
                check_type(argname="argument rds_enabled", value=rds_enabled, expected_type=type_hints["rds_enabled"])
                check_type(argname="argument rds_error_collection_policy", value=rds_error_collection_policy, expected_type=type_hints["rds_error_collection_policy"])
                check_type(argname="argument rds_error_enabled", value=rds_error_enabled, expected_type=type_hints["rds_error_enabled"])
                check_type(argname="argument rds_error_ttl", value=rds_error_ttl, expected_type=type_hints["rds_error_ttl"])
                check_type(argname="argument rds_perf_collection_policy", value=rds_perf_collection_policy, expected_type=type_hints["rds_perf_collection_policy"])
                check_type(argname="argument rds_perf_enabled", value=rds_perf_enabled, expected_type=type_hints["rds_perf_enabled"])
                check_type(argname="argument rds_perf_policy_setting", value=rds_perf_policy_setting, expected_type=type_hints["rds_perf_policy_setting"])
                check_type(argname="argument rds_perf_ti_enabled", value=rds_perf_ti_enabled, expected_type=type_hints["rds_perf_ti_enabled"])
                check_type(argname="argument rds_perf_ttl", value=rds_perf_ttl, expected_type=type_hints["rds_perf_ttl"])
                check_type(argname="argument rds_slow_collection_policy", value=rds_slow_collection_policy, expected_type=type_hints["rds_slow_collection_policy"])
                check_type(argname="argument rds_slow_enabled", value=rds_slow_enabled, expected_type=type_hints["rds_slow_enabled"])
                check_type(argname="argument rds_slow_policy_setting", value=rds_slow_policy_setting, expected_type=type_hints["rds_slow_policy_setting"])
                check_type(argname="argument rds_slow_ti_enabled", value=rds_slow_ti_enabled, expected_type=type_hints["rds_slow_ti_enabled"])
                check_type(argname="argument rds_slow_ttl", value=rds_slow_ttl, expected_type=type_hints["rds_slow_ttl"])
                check_type(argname="argument rds_ti_enabled", value=rds_ti_enabled, expected_type=type_hints["rds_ti_enabled"])
                check_type(argname="argument rds_ttl", value=rds_ttl, expected_type=type_hints["rds_ttl"])
                check_type(argname="argument redis_audit_collection_policy", value=redis_audit_collection_policy, expected_type=type_hints["redis_audit_collection_policy"])
                check_type(argname="argument redis_audit_enabled", value=redis_audit_enabled, expected_type=type_hints["redis_audit_enabled"])
                check_type(argname="argument redis_audit_policy_setting", value=redis_audit_policy_setting, expected_type=type_hints["redis_audit_policy_setting"])
                check_type(argname="argument redis_audit_ti_enabled", value=redis_audit_ti_enabled, expected_type=type_hints["redis_audit_ti_enabled"])
                check_type(argname="argument redis_audit_ttl", value=redis_audit_ttl, expected_type=type_hints["redis_audit_ttl"])
                check_type(argname="argument redis_sync_enabled", value=redis_sync_enabled, expected_type=type_hints["redis_sync_enabled"])
                check_type(argname="argument redis_sync_ttl", value=redis_sync_ttl, expected_type=type_hints["redis_sync_ttl"])
                check_type(argname="argument sas_crack_enabled", value=sas_crack_enabled, expected_type=type_hints["sas_crack_enabled"])
                check_type(argname="argument sas_dns_enabled", value=sas_dns_enabled, expected_type=type_hints["sas_dns_enabled"])
                check_type(argname="argument sas_dns_query_enabled", value=sas_dns_query_enabled, expected_type=type_hints["sas_dns_query_enabled"])
                check_type(argname="argument sas_http_enabled", value=sas_http_enabled, expected_type=type_hints["sas_http_enabled"])
                check_type(argname="argument sas_local_dns_enabled", value=sas_local_dns_enabled, expected_type=type_hints["sas_local_dns_enabled"])
                check_type(argname="argument sas_login_enabled", value=sas_login_enabled, expected_type=type_hints["sas_login_enabled"])
                check_type(argname="argument sas_network_enabled", value=sas_network_enabled, expected_type=type_hints["sas_network_enabled"])
                check_type(argname="argument sas_process_enabled", value=sas_process_enabled, expected_type=type_hints["sas_process_enabled"])
                check_type(argname="argument sas_security_alert_enabled", value=sas_security_alert_enabled, expected_type=type_hints["sas_security_alert_enabled"])
                check_type(argname="argument sas_security_hc_enabled", value=sas_security_hc_enabled, expected_type=type_hints["sas_security_hc_enabled"])
                check_type(argname="argument sas_security_vul_enabled", value=sas_security_vul_enabled, expected_type=type_hints["sas_security_vul_enabled"])
                check_type(argname="argument sas_session_enabled", value=sas_session_enabled, expected_type=type_hints["sas_session_enabled"])
                check_type(argname="argument sas_snapshot_account_enabled", value=sas_snapshot_account_enabled, expected_type=type_hints["sas_snapshot_account_enabled"])
                check_type(argname="argument sas_snapshot_port_enabled", value=sas_snapshot_port_enabled, expected_type=type_hints["sas_snapshot_port_enabled"])
                check_type(argname="argument sas_snapshot_process_enabled", value=sas_snapshot_process_enabled, expected_type=type_hints["sas_snapshot_process_enabled"])
                check_type(argname="argument sas_ti_enabled", value=sas_ti_enabled, expected_type=type_hints["sas_ti_enabled"])
                check_type(argname="argument sas_ttl", value=sas_ttl, expected_type=type_hints["sas_ttl"])
                check_type(argname="argument slb_access_collection_policy", value=slb_access_collection_policy, expected_type=type_hints["slb_access_collection_policy"])
                check_type(argname="argument slb_access_enabled", value=slb_access_enabled, expected_type=type_hints["slb_access_enabled"])
                check_type(argname="argument slb_access_policy_setting", value=slb_access_policy_setting, expected_type=type_hints["slb_access_policy_setting"])
                check_type(argname="argument slb_access_ti_enabled", value=slb_access_ti_enabled, expected_type=type_hints["slb_access_ti_enabled"])
                check_type(argname="argument slb_access_ttl", value=slb_access_ttl, expected_type=type_hints["slb_access_ttl"])
                check_type(argname="argument slb_sync_enabled", value=slb_sync_enabled, expected_type=type_hints["slb_sync_enabled"])
                check_type(argname="argument slb_sync_ttl", value=slb_sync_ttl, expected_type=type_hints["slb_sync_ttl"])
                check_type(argname="argument vpc_flow_collection_policy", value=vpc_flow_collection_policy, expected_type=type_hints["vpc_flow_collection_policy"])
                check_type(argname="argument vpc_flow_enabled", value=vpc_flow_enabled, expected_type=type_hints["vpc_flow_enabled"])
                check_type(argname="argument vpc_flow_ttl", value=vpc_flow_ttl, expected_type=type_hints["vpc_flow_ttl"])
                check_type(argname="argument vpc_sync_enabled", value=vpc_sync_enabled, expected_type=type_hints["vpc_sync_enabled"])
                check_type(argname="argument vpc_sync_ttl", value=vpc_sync_ttl, expected_type=type_hints["vpc_sync_ttl"])
                check_type(argname="argument waf_access_collection_policy", value=waf_access_collection_policy, expected_type=type_hints["waf_access_collection_policy"])
                check_type(argname="argument waf_access_policy_setting", value=waf_access_policy_setting, expected_type=type_hints["waf_access_policy_setting"])
                check_type(argname="argument waf_enabled", value=waf_enabled, expected_type=type_hints["waf_enabled"])
                check_type(argname="argument waf_ti_enabled", value=waf_ti_enabled, expected_type=type_hints["waf_ti_enabled"])
                check_type(argname="argument waf_ttl", value=waf_ttl, expected_type=type_hints["waf_ttl"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if actiontrail_enabled is not None:
                self._values["actiontrail_enabled"] = actiontrail_enabled
            if actiontrail_openapi_collection_policy is not None:
                self._values["actiontrail_openapi_collection_policy"] = actiontrail_openapi_collection_policy
            if actiontrail_openapi_policy_setting is not None:
                self._values["actiontrail_openapi_policy_setting"] = actiontrail_openapi_policy_setting
            if actiontrail_ti_enabled is not None:
                self._values["actiontrail_ti_enabled"] = actiontrail_ti_enabled
            if actiontrail_ttl is not None:
                self._values["actiontrail_ttl"] = actiontrail_ttl
            if alb_access_collection_policy is not None:
                self._values["alb_access_collection_policy"] = alb_access_collection_policy
            if alb_access_enabled is not None:
                self._values["alb_access_enabled"] = alb_access_enabled
            if alb_access_ttl is not None:
                self._values["alb_access_ttl"] = alb_access_ttl
            if alb_sync_enabled is not None:
                self._values["alb_sync_enabled"] = alb_sync_enabled
            if alb_sync_ttl is not None:
                self._values["alb_sync_ttl"] = alb_sync_ttl
            if apigateway_access_collection_policy is not None:
                self._values["apigateway_access_collection_policy"] = apigateway_access_collection_policy
            if apigateway_access_policy_setting is not None:
                self._values["apigateway_access_policy_setting"] = apigateway_access_policy_setting
            if apigateway_enabled is not None:
                self._values["apigateway_enabled"] = apigateway_enabled
            if apigateway_ti_enabled is not None:
                self._values["apigateway_ti_enabled"] = apigateway_ti_enabled
            if apigateway_ttl is not None:
                self._values["apigateway_ttl"] = apigateway_ttl
            if appconnect_enabled is not None:
                self._values["appconnect_enabled"] = appconnect_enabled
            if appconnect_op_collection_policy is not None:
                self._values["appconnect_op_collection_policy"] = appconnect_op_collection_policy
            if appconnect_op_policy_setting is not None:
                self._values["appconnect_op_policy_setting"] = appconnect_op_policy_setting
            if appconnect_ti_enabled is not None:
                self._values["appconnect_ti_enabled"] = appconnect_ti_enabled
            if appconnect_ttl is not None:
                self._values["appconnect_ttl"] = appconnect_ttl
            if bastion_audit_collection_policy is not None:
                self._values["bastion_audit_collection_policy"] = bastion_audit_collection_policy
            if bastion_audit_policy_setting is not None:
                self._values["bastion_audit_policy_setting"] = bastion_audit_policy_setting
            if bastion_enabled is not None:
                self._values["bastion_enabled"] = bastion_enabled
            if bastion_ti_enabled is not None:
                self._values["bastion_ti_enabled"] = bastion_ti_enabled
            if bastion_ttl is not None:
                self._values["bastion_ttl"] = bastion_ttl
            if cloudconfig_change_enabled is not None:
                self._values["cloudconfig_change_enabled"] = cloudconfig_change_enabled
            if cloudconfig_change_ttl is not None:
                self._values["cloudconfig_change_ttl"] = cloudconfig_change_ttl
            if cloudconfig_noncom_enabled is not None:
                self._values["cloudconfig_noncom_enabled"] = cloudconfig_noncom_enabled
            if cloudconfig_noncom_ttl is not None:
                self._values["cloudconfig_noncom_ttl"] = cloudconfig_noncom_ttl
            if cloudfirewall_access_collection_policy is not None:
                self._values["cloudfirewall_access_collection_policy"] = cloudfirewall_access_collection_policy
            if cloudfirewall_access_policy_setting is not None:
                self._values["cloudfirewall_access_policy_setting"] = cloudfirewall_access_policy_setting
            if cloudfirewall_enabled is not None:
                self._values["cloudfirewall_enabled"] = cloudfirewall_enabled
            if cloudfirewall_ti_enabled is not None:
                self._values["cloudfirewall_ti_enabled"] = cloudfirewall_ti_enabled
            if cloudfirewall_ttl is not None:
                self._values["cloudfirewall_ttl"] = cloudfirewall_ttl
            if cloudfirewall_vpc_enabled is not None:
                self._values["cloudfirewall_vpc_enabled"] = cloudfirewall_vpc_enabled
            if cloudfirewall_vpc_ttl is not None:
                self._values["cloudfirewall_vpc_ttl"] = cloudfirewall_vpc_ttl
            if cps_callback_collection_policy is not None:
                self._values["cps_callback_collection_policy"] = cps_callback_collection_policy
            if cps_callback_policy_setting is not None:
                self._values["cps_callback_policy_setting"] = cps_callback_policy_setting
            if cps_enabled is not None:
                self._values["cps_enabled"] = cps_enabled
            if cps_ti_enabled is not None:
                self._values["cps_ti_enabled"] = cps_ti_enabled
            if cps_ttl is not None:
                self._values["cps_ttl"] = cps_ttl
            if ddos_bgp_access_enabled is not None:
                self._values["ddos_bgp_access_enabled"] = ddos_bgp_access_enabled
            if ddos_bgp_access_ttl is not None:
                self._values["ddos_bgp_access_ttl"] = ddos_bgp_access_ttl
            if ddos_coo_access_collection_policy is not None:
                self._values["ddos_coo_access_collection_policy"] = ddos_coo_access_collection_policy
            if ddos_coo_access_enabled is not None:
                self._values["ddos_coo_access_enabled"] = ddos_coo_access_enabled
            if ddos_coo_access_policy_setting is not None:
                self._values["ddos_coo_access_policy_setting"] = ddos_coo_access_policy_setting
            if ddos_coo_access_ti_enabled is not None:
                self._values["ddos_coo_access_ti_enabled"] = ddos_coo_access_ti_enabled
            if ddos_coo_access_ttl is not None:
                self._values["ddos_coo_access_ttl"] = ddos_coo_access_ttl
            if ddos_dip_access_enabled is not None:
                self._values["ddos_dip_access_enabled"] = ddos_dip_access_enabled
            if ddos_dip_access_ttl is not None:
                self._values["ddos_dip_access_ttl"] = ddos_dip_access_ttl
            if dns_intranet_collection_policy is not None:
                self._values["dns_intranet_collection_policy"] = dns_intranet_collection_policy
            if dns_intranet_enabled is not None:
                self._values["dns_intranet_enabled"] = dns_intranet_enabled
            if dns_intranet_ttl is not None:
                self._values["dns_intranet_ttl"] = dns_intranet_ttl
            if dns_sync_enabled is not None:
                self._values["dns_sync_enabled"] = dns_sync_enabled
            if dns_sync_ttl is not None:
                self._values["dns_sync_ttl"] = dns_sync_ttl
            if drds_audit_collection_policy is not None:
                self._values["drds_audit_collection_policy"] = drds_audit_collection_policy
            if drds_audit_enabled is not None:
                self._values["drds_audit_enabled"] = drds_audit_enabled
            if drds_audit_policy_setting is not None:
                self._values["drds_audit_policy_setting"] = drds_audit_policy_setting
            if drds_audit_ti_enabled is not None:
                self._values["drds_audit_ti_enabled"] = drds_audit_ti_enabled
            if drds_audit_ttl is not None:
                self._values["drds_audit_ttl"] = drds_audit_ttl
            if drds_sync_enabled is not None:
                self._values["drds_sync_enabled"] = drds_sync_enabled
            if drds_sync_ttl is not None:
                self._values["drds_sync_ttl"] = drds_sync_ttl
            if idaas_mng_collection_policy is not None:
                self._values["idaas_mng_collection_policy"] = idaas_mng_collection_policy
            if idaas_mng_enabled is not None:
                self._values["idaas_mng_enabled"] = idaas_mng_enabled
            if idaas_mng_ttl is not None:
                self._values["idaas_mng_ttl"] = idaas_mng_ttl
            if idaas_user_collection_policy is not None:
                self._values["idaas_user_collection_policy"] = idaas_user_collection_policy
            if idaas_user_enabled is not None:
                self._values["idaas_user_enabled"] = idaas_user_enabled
            if idaas_user_ttl is not None:
                self._values["idaas_user_ttl"] = idaas_user_ttl
            if k8_s_audit_collection_policy is not None:
                self._values["k8_s_audit_collection_policy"] = k8_s_audit_collection_policy
            if k8_s_audit_enabled is not None:
                self._values["k8_s_audit_enabled"] = k8_s_audit_enabled
            if k8_s_audit_policy_setting is not None:
                self._values["k8_s_audit_policy_setting"] = k8_s_audit_policy_setting
            if k8_s_audit_ti_enabled is not None:
                self._values["k8_s_audit_ti_enabled"] = k8_s_audit_ti_enabled
            if k8_s_audit_ttl is not None:
                self._values["k8_s_audit_ttl"] = k8_s_audit_ttl
            if k8_s_event_collection_policy is not None:
                self._values["k8_s_event_collection_policy"] = k8_s_event_collection_policy
            if k8_s_event_enabled is not None:
                self._values["k8_s_event_enabled"] = k8_s_event_enabled
            if k8_s_event_policy_setting is not None:
                self._values["k8_s_event_policy_setting"] = k8_s_event_policy_setting
            if k8_s_event_ti_enabled is not None:
                self._values["k8_s_event_ti_enabled"] = k8_s_event_ti_enabled
            if k8_s_event_ttl is not None:
                self._values["k8_s_event_ttl"] = k8_s_event_ttl
            if k8_s_ingress_collection_policy is not None:
                self._values["k8_s_ingress_collection_policy"] = k8_s_ingress_collection_policy
            if k8_s_ingress_enabled is not None:
                self._values["k8_s_ingress_enabled"] = k8_s_ingress_enabled
            if k8_s_ingress_policy_setting is not None:
                self._values["k8_s_ingress_policy_setting"] = k8_s_ingress_policy_setting
            if k8_s_ingress_ti_enabled is not None:
                self._values["k8_s_ingress_ti_enabled"] = k8_s_ingress_ti_enabled
            if k8_s_ingress_ttl is not None:
                self._values["k8_s_ingress_ttl"] = k8_s_ingress_ttl
            if nas_audit_collection_policy is not None:
                self._values["nas_audit_collection_policy"] = nas_audit_collection_policy
            if nas_audit_policy_setting is not None:
                self._values["nas_audit_policy_setting"] = nas_audit_policy_setting
            if nas_enabled is not None:
                self._values["nas_enabled"] = nas_enabled
            if nas_ti_enabled is not None:
                self._values["nas_ti_enabled"] = nas_ti_enabled
            if nas_ttl is not None:
                self._values["nas_ttl"] = nas_ttl
            if oss_access_collection_policy is not None:
                self._values["oss_access_collection_policy"] = oss_access_collection_policy
            if oss_access_enabled is not None:
                self._values["oss_access_enabled"] = oss_access_enabled
            if oss_access_policy_setting is not None:
                self._values["oss_access_policy_setting"] = oss_access_policy_setting
            if oss_access_ti_enabled is not None:
                self._values["oss_access_ti_enabled"] = oss_access_ti_enabled
            if oss_access_ttl is not None:
                self._values["oss_access_ttl"] = oss_access_ttl
            if oss_metering_collection_policy is not None:
                self._values["oss_metering_collection_policy"] = oss_metering_collection_policy
            if oss_metering_enabled is not None:
                self._values["oss_metering_enabled"] = oss_metering_enabled
            if oss_metering_policy_setting is not None:
                self._values["oss_metering_policy_setting"] = oss_metering_policy_setting
            if oss_metering_ti_enabled is not None:
                self._values["oss_metering_ti_enabled"] = oss_metering_ti_enabled
            if oss_metering_ttl is not None:
                self._values["oss_metering_ttl"] = oss_metering_ttl
            if oss_sync_enabled is not None:
                self._values["oss_sync_enabled"] = oss_sync_enabled
            if oss_sync_ttl is not None:
                self._values["oss_sync_ttl"] = oss_sync_ttl
            if polardb_audit_collection_policy is not None:
                self._values["polardb_audit_collection_policy"] = polardb_audit_collection_policy
            if polardb_audit_policy_setting is not None:
                self._values["polardb_audit_policy_setting"] = polardb_audit_policy_setting
            if polardb_enabled is not None:
                self._values["polardb_enabled"] = polardb_enabled
            if polardb_error_collection_policy is not None:
                self._values["polardb_error_collection_policy"] = polardb_error_collection_policy
            if polardb_error_enabled is not None:
                self._values["polardb_error_enabled"] = polardb_error_enabled
            if polardb_error_ttl is not None:
                self._values["polardb_error_ttl"] = polardb_error_ttl
            if polardb_perf_collection_policy is not None:
                self._values["polardb_perf_collection_policy"] = polardb_perf_collection_policy
            if polardb_perf_enabled is not None:
                self._values["polardb_perf_enabled"] = polardb_perf_enabled
            if polardb_perf_policy_setting is not None:
                self._values["polardb_perf_policy_setting"] = polardb_perf_policy_setting
            if polardb_perf_ti_enabled is not None:
                self._values["polardb_perf_ti_enabled"] = polardb_perf_ti_enabled
            if polardb_perf_ttl is not None:
                self._values["polardb_perf_ttl"] = polardb_perf_ttl
            if polardb_slow_collection_policy is not None:
                self._values["polardb_slow_collection_policy"] = polardb_slow_collection_policy
            if polardb_slow_enabled is not None:
                self._values["polardb_slow_enabled"] = polardb_slow_enabled
            if polardb_slow_policy_setting is not None:
                self._values["polardb_slow_policy_setting"] = polardb_slow_policy_setting
            if polardb_slow_ti_enabled is not None:
                self._values["polardb_slow_ti_enabled"] = polardb_slow_ti_enabled
            if polardb_slow_ttl is not None:
                self._values["polardb_slow_ttl"] = polardb_slow_ttl
            if polardb_ti_enabled is not None:
                self._values["polardb_ti_enabled"] = polardb_ti_enabled
            if polardb_ttl is not None:
                self._values["polardb_ttl"] = polardb_ttl
            if rds_audit_collection_policy is not None:
                self._values["rds_audit_collection_policy"] = rds_audit_collection_policy
            if rds_audit_policy_setting is not None:
                self._values["rds_audit_policy_setting"] = rds_audit_policy_setting
            if rds_enabled is not None:
                self._values["rds_enabled"] = rds_enabled
            if rds_error_collection_policy is not None:
                self._values["rds_error_collection_policy"] = rds_error_collection_policy
            if rds_error_enabled is not None:
                self._values["rds_error_enabled"] = rds_error_enabled
            if rds_error_ttl is not None:
                self._values["rds_error_ttl"] = rds_error_ttl
            if rds_perf_collection_policy is not None:
                self._values["rds_perf_collection_policy"] = rds_perf_collection_policy
            if rds_perf_enabled is not None:
                self._values["rds_perf_enabled"] = rds_perf_enabled
            if rds_perf_policy_setting is not None:
                self._values["rds_perf_policy_setting"] = rds_perf_policy_setting
            if rds_perf_ti_enabled is not None:
                self._values["rds_perf_ti_enabled"] = rds_perf_ti_enabled
            if rds_perf_ttl is not None:
                self._values["rds_perf_ttl"] = rds_perf_ttl
            if rds_slow_collection_policy is not None:
                self._values["rds_slow_collection_policy"] = rds_slow_collection_policy
            if rds_slow_enabled is not None:
                self._values["rds_slow_enabled"] = rds_slow_enabled
            if rds_slow_policy_setting is not None:
                self._values["rds_slow_policy_setting"] = rds_slow_policy_setting
            if rds_slow_ti_enabled is not None:
                self._values["rds_slow_ti_enabled"] = rds_slow_ti_enabled
            if rds_slow_ttl is not None:
                self._values["rds_slow_ttl"] = rds_slow_ttl
            if rds_ti_enabled is not None:
                self._values["rds_ti_enabled"] = rds_ti_enabled
            if rds_ttl is not None:
                self._values["rds_ttl"] = rds_ttl
            if redis_audit_collection_policy is not None:
                self._values["redis_audit_collection_policy"] = redis_audit_collection_policy
            if redis_audit_enabled is not None:
                self._values["redis_audit_enabled"] = redis_audit_enabled
            if redis_audit_policy_setting is not None:
                self._values["redis_audit_policy_setting"] = redis_audit_policy_setting
            if redis_audit_ti_enabled is not None:
                self._values["redis_audit_ti_enabled"] = redis_audit_ti_enabled
            if redis_audit_ttl is not None:
                self._values["redis_audit_ttl"] = redis_audit_ttl
            if redis_sync_enabled is not None:
                self._values["redis_sync_enabled"] = redis_sync_enabled
            if redis_sync_ttl is not None:
                self._values["redis_sync_ttl"] = redis_sync_ttl
            if sas_crack_enabled is not None:
                self._values["sas_crack_enabled"] = sas_crack_enabled
            if sas_dns_enabled is not None:
                self._values["sas_dns_enabled"] = sas_dns_enabled
            if sas_dns_query_enabled is not None:
                self._values["sas_dns_query_enabled"] = sas_dns_query_enabled
            if sas_http_enabled is not None:
                self._values["sas_http_enabled"] = sas_http_enabled
            if sas_local_dns_enabled is not None:
                self._values["sas_local_dns_enabled"] = sas_local_dns_enabled
            if sas_login_enabled is not None:
                self._values["sas_login_enabled"] = sas_login_enabled
            if sas_network_enabled is not None:
                self._values["sas_network_enabled"] = sas_network_enabled
            if sas_process_enabled is not None:
                self._values["sas_process_enabled"] = sas_process_enabled
            if sas_security_alert_enabled is not None:
                self._values["sas_security_alert_enabled"] = sas_security_alert_enabled
            if sas_security_hc_enabled is not None:
                self._values["sas_security_hc_enabled"] = sas_security_hc_enabled
            if sas_security_vul_enabled is not None:
                self._values["sas_security_vul_enabled"] = sas_security_vul_enabled
            if sas_session_enabled is not None:
                self._values["sas_session_enabled"] = sas_session_enabled
            if sas_snapshot_account_enabled is not None:
                self._values["sas_snapshot_account_enabled"] = sas_snapshot_account_enabled
            if sas_snapshot_port_enabled is not None:
                self._values["sas_snapshot_port_enabled"] = sas_snapshot_port_enabled
            if sas_snapshot_process_enabled is not None:
                self._values["sas_snapshot_process_enabled"] = sas_snapshot_process_enabled
            if sas_ti_enabled is not None:
                self._values["sas_ti_enabled"] = sas_ti_enabled
            if sas_ttl is not None:
                self._values["sas_ttl"] = sas_ttl
            if slb_access_collection_policy is not None:
                self._values["slb_access_collection_policy"] = slb_access_collection_policy
            if slb_access_enabled is not None:
                self._values["slb_access_enabled"] = slb_access_enabled
            if slb_access_policy_setting is not None:
                self._values["slb_access_policy_setting"] = slb_access_policy_setting
            if slb_access_ti_enabled is not None:
                self._values["slb_access_ti_enabled"] = slb_access_ti_enabled
            if slb_access_ttl is not None:
                self._values["slb_access_ttl"] = slb_access_ttl
            if slb_sync_enabled is not None:
                self._values["slb_sync_enabled"] = slb_sync_enabled
            if slb_sync_ttl is not None:
                self._values["slb_sync_ttl"] = slb_sync_ttl
            if vpc_flow_collection_policy is not None:
                self._values["vpc_flow_collection_policy"] = vpc_flow_collection_policy
            if vpc_flow_enabled is not None:
                self._values["vpc_flow_enabled"] = vpc_flow_enabled
            if vpc_flow_ttl is not None:
                self._values["vpc_flow_ttl"] = vpc_flow_ttl
            if vpc_sync_enabled is not None:
                self._values["vpc_sync_enabled"] = vpc_sync_enabled
            if vpc_sync_ttl is not None:
                self._values["vpc_sync_ttl"] = vpc_sync_ttl
            if waf_access_collection_policy is not None:
                self._values["waf_access_collection_policy"] = waf_access_collection_policy
            if waf_access_policy_setting is not None:
                self._values["waf_access_policy_setting"] = waf_access_policy_setting
            if waf_enabled is not None:
                self._values["waf_enabled"] = waf_enabled
            if waf_ti_enabled is not None:
                self._values["waf_ti_enabled"] = waf_ti_enabled
            if waf_ttl is not None:
                self._values["waf_ttl"] = waf_ttl

        @builtins.property
        def actiontrail_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: actiontrailEnabled: Notification type. Support Email, SMS, DingTalk. Default true.
            '''
            result = self._values.get("actiontrail_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def actiontrail_openapi_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: actiontrailOpenapiCollectionPolicy: Actiontrail openapi collection policy
            '''
            result = self._values.get("actiontrail_openapi_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def actiontrail_openapi_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: actiontrailOpenapiPolicySetting: Actiontrail openapi policy setting.
            '''
            result = self._values.get("actiontrail_openapi_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def actiontrail_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: actiontrailTiEnabled: Threat Intelligence of actiontrail.
            '''
            result = self._values.get("actiontrail_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def actiontrail_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: actiontrailTtl: Actiontrail action log TTL.
            '''
            result = self._values.get("actiontrail_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def alb_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: albAccessCollectionPolicy: ALB access log collection policy script. Default empty.
            '''
            result = self._values.get("alb_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def alb_access_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: albAccessEnabled: Specifies whether to collect ALB access log. Default false.
            '''
            result = self._values.get("alb_access_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def alb_access_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: albAccessTtl: ALB access log TTL. Default 180.
            '''
            result = self._values.get("alb_access_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def alb_sync_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: albSyncEnabled: ALB synchronization to central configuration switch. Default true.
            '''
            result = self._values.get("alb_sync_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def alb_sync_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: albSyncTtl: ALB synchronization to central TTL. Default 180.
            '''
            result = self._values.get("alb_sync_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def apigateway_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: apigatewayAccessCollectionPolicy: Apigateway audit collection policy
            '''
            result = self._values.get("apigateway_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def apigateway_access_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: apigatewayAccessPolicySetting: Apigateway audit policy setting.
            '''
            result = self._values.get("apigateway_access_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def apigateway_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: apigatewayEnabled: API Gateway Log Switch. Default true.
            '''
            result = self._values.get("apigateway_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def apigateway_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: apigatewayTiEnabled: Threat Intelligence of Apigateway.
            '''
            result = self._values.get("apigateway_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def apigateway_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: apigatewayTtl: API Gateway ttl. Default 180.
            '''
            result = self._values.get("apigateway_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def appconnect_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: appconnectEnabled: Appconnect access log switch. Default false.
            '''
            result = self._values.get("appconnect_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def appconnect_op_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: appconnectOpCollectionPolicy: Appconnect audit collection policy
            '''
            result = self._values.get("appconnect_op_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def appconnect_op_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: appconnectOpPolicySetting: Appconnect audit policy setting.
            '''
            result = self._values.get("appconnect_op_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def appconnect_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: appconnectTiEnabled: Threat Intelligence of Appconnect.
            '''
            result = self._values.get("appconnect_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def appconnect_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: appconnectTtl: Appconnect log centralization ttl. Default 180.
            '''
            result = self._values.get("appconnect_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def bastion_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: bastionAuditCollectionPolicy: Bastion audit collection policy
            '''
            result = self._values.get("bastion_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def bastion_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: bastionAuditPolicySetting: Bastion audit policy setting.
            '''
            result = self._values.get("bastion_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def bastion_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: bastionEnabled: Fortress machine operation log switch.Default true.
            '''
            result = self._values.get("bastion_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def bastion_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: bastionTiEnabled: Threat Intelligence of Bastion.
            '''
            result = self._values.get("bastion_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def bastion_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: bastionTtl: Fort machine centralized ttl. Default 180.
            '''
            result = self._values.get("bastion_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cloudconfig_change_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cloudconfigChangeEnabled: CloudConfig change log switch. Default false.
            '''
            result = self._values.get("cloudconfig_change_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cloudconfig_change_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cloudconfigChangeTtl: CloudConfig change log ttl. Default 180.
            '''
            result = self._values.get("cloudconfig_change_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cloudconfig_noncom_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cloudconfigNoncomEnabled: CloudConfig non-compliance log switch. Default false.
            '''
            result = self._values.get("cloudconfig_noncom_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cloudconfig_noncom_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cloudconfigNoncomTtl: CloudConfig non-compliance log ttl. Default 180.
            '''
            result = self._values.get("cloudconfig_noncom_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cloudfirewall_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cloudfirewallAccessCollectionPolicy: Cloud firewall audit collection policy
            '''
            result = self._values.get("cloudfirewall_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cloudfirewall_access_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cloudfirewallAccessPolicySetting: Cloud firewall audit policy setting.
            '''
            result = self._values.get("cloudfirewall_access_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cloudfirewall_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cloudfirewallEnabled: Cloud firewall log switch. Default true.
            '''
            result = self._values.get("cloudfirewall_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cloudfirewall_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cloudfirewallTiEnabled: Threat Intelligence of Cloud firewall.
            '''
            result = self._values.get("cloudfirewall_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cloudfirewall_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cloudfirewallTtl: Cloud firewall log centralized ttl. Default 180.
            '''
            result = self._values.get("cloudfirewall_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cloudfirewall_vpc_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cloudfirewallVpcEnabled: Specifies whether to collect VPC firewall traffic logs from Cloud Firewall. Default false.
            '''
            result = self._values.get("cloudfirewall_vpc_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cloudfirewall_vpc_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cloudfirewallVpcTtl: The retention period of Cloud Firewall VPC firewall traffic logs in the central Logstore. Default 180.
            '''
            result = self._values.get("cloudfirewall_vpc_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cps_callback_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cpsCallbackCollectionPolicy: Mobile push collection policy
            '''
            result = self._values.get("cps_callback_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cps_callback_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cpsCallbackPolicySetting: Mobile push policy setting.
            '''
            result = self._values.get("cps_callback_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cps_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cpsEnabled: Mobile push log switch. Default true.
            '''
            result = self._values.get("cps_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cps_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cpsTiEnabled: Threat Intelligence of mobile push.
            '''
            result = self._values.get("cps_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cps_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cpsTtl: Mobile push ttl. Default 180.
            '''
            result = self._values.get("cps_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ddos_bgp_access_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ddosBgpAccessEnabled: Anti-DDoS (Origin) access log switch. Default false.
            '''
            result = self._values.get("ddos_bgp_access_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ddos_bgp_access_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ddosBgpAccessTtl: Anti-DDoS (Origin) access log ttl. Default 180.
            '''
            result = self._values.get("ddos_bgp_access_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ddos_coo_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ddosCooAccessCollectionPolicy: Ddos audit collection policy
            '''
            result = self._values.get("ddos_coo_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ddos_coo_access_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ddosCooAccessEnabled: Ddos access log switch. Default false.
            '''
            result = self._values.get("ddos_coo_access_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ddos_coo_access_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ddosCooAccessPolicySetting: Ddos audit policy setting.
            '''
            result = self._values.get("ddos_coo_access_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ddos_coo_access_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ddosCooAccessTiEnabled: Threat Intelligence of Ddos.
            '''
            result = self._values.get("ddos_coo_access_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ddos_coo_access_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ddosCooAccessTtl: Ddos log centralization ttl. Default 180.
            '''
            result = self._values.get("ddos_coo_access_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ddos_dip_access_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ddosDipAccessEnabled: Anti-DDoS Premium access log switch. Default false.
            '''
            result = self._values.get("ddos_dip_access_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ddos_dip_access_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ddosDipAccessTtl: Anti-DDoS Premium access log ttl. Default 180.
            '''
            result = self._values.get("ddos_dip_access_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def dns_intranet_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dnsIntranetCollectionPolicy: DNS intranet log collection policy script. Default empty.
            '''
            result = self._values.get("dns_intranet_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def dns_intranet_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dnsIntranetEnabled: Specifies whether to collect intranet Alibaba Cloud DNS (DNS) logs. Default false.
            '''
            result = self._values.get("dns_intranet_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def dns_intranet_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dnsIntranetTtl: The retention period of intranet DNS logs in the regional Logstore. Default 7.
            '''
            result = self._values.get("dns_intranet_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def dns_sync_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dnsSyncEnabled: Specifies whether to synchronize DNS intranet logs to the central project. Default true.
            '''
            result = self._values.get("dns_sync_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def dns_sync_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dnsSyncTtl: The retention period of intranet DNS logs in the central Logstore. Default 180.
            '''
            result = self._values.get("dns_sync_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def drds_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: drdsAuditCollectionPolicy: DRDS audit collection policy
            '''
            result = self._values.get("drds_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def drds_audit_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: drdsAuditEnabled: DRDS audit log switch. Default true.
            '''
            result = self._values.get("drds_audit_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def drds_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: drdsAuditPolicySetting: DRDS audit policy setting.
            '''
            result = self._values.get("drds_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def drds_audit_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: drdsAuditTiEnabled: Threat Intelligence of DRDS.
            '''
            result = self._values.get("drds_audit_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def drds_audit_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: drdsAuditTtl: DRDS log centralization ttl. Default 7.
            '''
            result = self._values.get("drds_audit_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def drds_sync_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: drdsSyncEnabled: DRDS sync to center switch. Default true.
            '''
            result = self._values.get("drds_sync_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def drds_sync_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: drdsSyncTtl: DRDS sync to center ttl. Default 180.
            '''
            result = self._values.get("drds_sync_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def idaas_mng_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: idaasMngCollectionPolicy: IDaaS management log collection policy script. Default empty.
            '''
            result = self._values.get("idaas_mng_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def idaas_mng_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: idaasMngEnabled: Specifies whether to collect IDaaS management log. Default false.
            '''
            result = self._values.get("idaas_mng_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def idaas_mng_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: idaasMngTtl: IDaaS management log TTL. Default 180.
            '''
            result = self._values.get("idaas_mng_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def idaas_user_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: idaasUserCollectionPolicy: IDaaS user behavior log collection policy script. Default empty.
            '''
            result = self._values.get("idaas_user_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def idaas_user_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: idaasUserEnabled: Specifies whether to collect IDaaS user behavior log. Default false.
            '''
            result = self._values.get("idaas_user_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def idaas_user_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: idaasUserTtl: IDaaS user behavior log. Default 180.
            '''
            result = self._values.get("idaas_user_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SAuditCollectionPolicy: K8s audit collection policy
            '''
            result = self._values.get("k8_s_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_audit_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SAuditEnabled: K8s access log switch. Default false.
            '''
            result = self._values.get("k8_s_audit_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SAuditPolicySetting: K8s audit policy setting.
            '''
            result = self._values.get("k8_s_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_audit_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SAuditTiEnabled: Threat Intelligence of K8s.
            '''
            result = self._values.get("k8_s_audit_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_audit_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SAuditTtl: K8s log centralization ttl. Default 180.
            '''
            result = self._values.get("k8_s_audit_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_event_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SEventCollectionPolicy: K8s event collection policy
            '''
            result = self._values.get("k8_s_event_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_event_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SEventEnabled: K8s event log switch. Default false.
            '''
            result = self._values.get("k8_s_event_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_event_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SEventPolicySetting: K8s event policy setting.
            '''
            result = self._values.get("k8_s_event_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_event_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SEventTiEnabled: Threat Intelligence of k8s event.
            '''
            result = self._values.get("k8_s_event_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_event_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SEventTtl: K8s event log centralization ttl. Default 180.
            '''
            result = self._values.get("k8_s_event_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_ingress_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SIngressCollectionPolicy: K8s Ingress collection policy
            '''
            result = self._values.get("k8_s_ingress_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_ingress_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SIngressEnabled: K8s Ingress log switch. Default false.
            '''
            result = self._values.get("k8_s_ingress_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_ingress_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SIngressPolicySetting: K8s Ingress policy setting.
            '''
            result = self._values.get("k8_s_ingress_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_ingress_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SIngressTiEnabled: Threat Intelligence of k8s Ingress.
            '''
            result = self._values.get("k8_s_ingress_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def k8_s_ingress_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k8SIngressTtl: K8s Ingress log centralization ttl. Default 180.
            '''
            result = self._values.get("k8_s_ingress_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def nas_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nasAuditCollectionPolicy: Nas audit collection policy
            '''
            result = self._values.get("nas_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def nas_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nasAuditPolicySetting: Nas audit policy setting.
            '''
            result = self._values.get("nas_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def nas_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nasEnabled: Nas log switch. Default true.
            '''
            result = self._values.get("nas_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def nas_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nasTiEnabled: Threat Intelligence of Nas.
            '''
            result = self._values.get("nas_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def nas_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nasTtl: Nas centralized ttl. Default 180.
            '''
            result = self._values.get("nas_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossAccessCollectionPolicy: Oss access collection policy.
            '''
            result = self._values.get("oss_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_access_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossAccessEnabled: Access log switch of OSS. Default true.
            '''
            result = self._values.get("oss_access_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_access_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossAccessPolicySetting: Oss access policy setting.
            '''
            result = self._values.get("oss_access_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_access_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossAccessTiEnabled: Threat Intelligence of oss.
            '''
            result = self._values.get("oss_access_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_access_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossAccessTtl: Access log TTL of OSS. Default 180.
            '''
            result = self._values.get("oss_access_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_metering_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossMeteringCollectionPolicy: Oss metering collection policy.
            '''
            result = self._values.get("oss_metering_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_metering_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossMeteringEnabled: OSS metering log switch.Default true.
            '''
            result = self._values.get("oss_metering_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_metering_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossMeteringPolicySetting: Oss metering policy setting.
            '''
            result = self._values.get("oss_metering_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_metering_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossMeteringTiEnabled: Threat Intelligence of oss metering.
            '''
            result = self._values.get("oss_metering_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_metering_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossMeteringTtl: OSS measurement log TTL. Default 180.
            '''
            result = self._values.get("oss_metering_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_sync_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossSyncEnabled: OSS synchronization to central configuration switch. Default true.
            '''
            result = self._values.get("oss_sync_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_sync_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossSyncTtl: OSS synchronization to central TTL. Default 180.
            '''
            result = self._values.get("oss_sync_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbAuditCollectionPolicy: POLARDB audit collection policy
            '''
            result = self._values.get("polardb_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbAuditPolicySetting: POLARDB audit policy setting.
            '''
            result = self._values.get("polardb_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbEnabled: POLARDB audit log switch. Default true.
            '''
            result = self._values.get("polardb_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_error_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbErrorCollectionPolicy: PolarDB error log collection policy script. Default empty.
            '''
            result = self._values.get("polardb_error_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_error_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbErrorEnabled: Specifies whether to collect PolarDB error log. Default false.
            '''
            result = self._values.get("polardb_error_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_error_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbErrorTtl: PolarDB error log TTL. Default 180.
            '''
            result = self._values.get("polardb_error_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_perf_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbPerfCollectionPolicy: POLARDB perf collection policy.
            '''
            result = self._values.get("polardb_perf_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_perf_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbPerfEnabled: POLARDB perf log switch. Default false.
            '''
            result = self._values.get("polardb_perf_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_perf_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbPerfPolicySetting: POLARDB perf policy setting.
            '''
            result = self._values.get("polardb_perf_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_perf_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbPerfTiEnabled: Threat Intelligence of POLARDB perf log.
            '''
            result = self._values.get("polardb_perf_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_perf_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbPerfTtl: POLARDB perf log centralization ttl. Default 180.
            '''
            result = self._values.get("polardb_perf_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_slow_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbSlowCollectionPolicy: POLARDB slow collection policy.
            '''
            result = self._values.get("polardb_slow_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_slow_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbSlowEnabled: POLARDB slow log switch. Default false.
            '''
            result = self._values.get("polardb_slow_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_slow_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbSlowPolicySetting: POLARDB slow policy setting.
            '''
            result = self._values.get("polardb_slow_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_slow_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbSlowTiEnabled: Threat Intelligence of POLARDB slow log.
            '''
            result = self._values.get("polardb_slow_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_slow_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbSlowTtl: POLARDB slow log centralization ttl. Default 180.
            '''
            result = self._values.get("polardb_slow_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbTiEnabled: Threat Intelligence of POLARDB.
            '''
            result = self._values.get("polardb_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def polardb_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: polardbTtl: POLARDB log centralization ttl. Default 180.
            '''
            result = self._values.get("polardb_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsAuditCollectionPolicy: Rds audit collection policy
            '''
            result = self._values.get("rds_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsAuditPolicySetting: Rds audit policy setting.
            '''
            result = self._values.get("rds_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsEnabled: RDS audit log switch. Default true.
            '''
            result = self._values.get("rds_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_error_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsErrorCollectionPolicy: RDS error log collection policy script. Default empty.
            '''
            result = self._values.get("rds_error_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_error_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsErrorEnabled: Specifies whether to collect RDS error log. Default false.
            '''
            result = self._values.get("rds_error_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_error_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsErrorTtl: RDS error log TTL. Default 180.
            '''
            result = self._values.get("rds_error_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_perf_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsPerfCollectionPolicy: Rds perf collection policy.
            '''
            result = self._values.get("rds_perf_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_perf_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsPerfEnabled: RDS perf log switch. Default false.
            '''
            result = self._values.get("rds_perf_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_perf_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsPerfPolicySetting: Rds perf policy setting.
            '''
            result = self._values.get("rds_perf_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_perf_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsPerfTiEnabled: Threat Intelligence of rds perf log.
            '''
            result = self._values.get("rds_perf_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_perf_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsPerfTtl: Rds perf log centralization ttl. Default 180.
            '''
            result = self._values.get("rds_perf_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_slow_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsSlowCollectionPolicy: Rds slow collection policy.
            '''
            result = self._values.get("rds_slow_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_slow_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsSlowEnabled: RDS slow log switch. Default false.
            '''
            result = self._values.get("rds_slow_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_slow_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsSlowPolicySetting: Rds slow policy setting.
            '''
            result = self._values.get("rds_slow_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_slow_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsSlowTiEnabled: Threat Intelligence of rds slow log.
            '''
            result = self._values.get("rds_slow_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_slow_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsSlowTtl: Rds slow log centralization ttl. Default 180.
            '''
            result = self._values.get("rds_slow_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsTiEnabled: Threat Intelligence of rds.
            '''
            result = self._values.get("rds_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rds_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rdsTtl: Rds log centralization ttl. Default 180.
            '''
            result = self._values.get("rds_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def redis_audit_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: redisAuditCollectionPolicy: Redis audit collection policy
            '''
            result = self._values.get("redis_audit_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def redis_audit_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: redisAuditEnabled: Redis audit log switch. Default true.
            '''
            result = self._values.get("redis_audit_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def redis_audit_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: redisAuditPolicySetting: Redis audit policy setting.
            '''
            result = self._values.get("redis_audit_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def redis_audit_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: redisAuditTiEnabled: Threat Intelligence of Redis audit.
            '''
            result = self._values.get("redis_audit_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def redis_audit_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: redisAuditTtl: Redis audit log centralization ttl. Default 7.
            '''
            result = self._values.get("redis_audit_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def redis_sync_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: redisSyncEnabled: Redis sync to center switch. Default true.
            '''
            result = self._values.get("redis_sync_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def redis_sync_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: redisSyncTtl: Redis sync to center switch. Default 180.
            '''
            result = self._values.get("redis_sync_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_crack_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasCrackEnabled: Cloud Security Center Brute Force Log Switch. Default false.
            '''
            result = self._values.get("sas_crack_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_dns_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasDnsEnabled: Cloud Security Center DNS resolution log switch. Default false.
            '''
            result = self._values.get("sas_dns_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_dns_query_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasDnsQueryEnabled: Specifies whether to collect DNS query logs. Default false.
            '''
            result = self._values.get("sas_dns_query_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_http_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasHttpEnabled: Cloud Security Center WEB access log switch. Default false.
            '''
            result = self._values.get("sas_http_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_local_dns_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasLocalDnsEnabled: Cloud security center local DNS log switch. Default false.
            '''
            result = self._values.get("sas_local_dns_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_login_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasLoginEnabled: Cloud security center login flow log switch. Default false.
            '''
            result = self._values.get("sas_login_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_network_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasNetworkEnabled: Cloud security center network connection log switch. Default false.
            '''
            result = self._values.get("sas_network_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_process_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasProcessEnabled: Cloud Security Center process startup log switch. Default false.
            '''
            result = self._values.get("sas_process_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_security_alert_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasSecurityAlertEnabled: Cloud Security Center Security Alarm Log Switch .Default false.
            '''
            result = self._values.get("sas_security_alert_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_security_hc_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasSecurityHcEnabled: Cloud Security Center Baseline Log Switch. Default false.
            '''
            result = self._values.get("sas_security_hc_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_security_vul_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasSecurityVulEnabled: Cloud Security Center Vulnerability Log Switch.Default false.
            '''
            result = self._values.get("sas_security_vul_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_session_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasSessionEnabled: Cloud security center network session log switch.Default false.
            '''
            result = self._values.get("sas_session_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_snapshot_account_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasSnapshotAccountEnabled: Cloud Security Center account snapshot switch. Default false.
            '''
            result = self._values.get("sas_snapshot_account_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_snapshot_port_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasSnapshotPortEnabled: Cloud Security Center Port Snapshot Switch. Default false.
            '''
            result = self._values.get("sas_snapshot_port_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_snapshot_process_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasSnapshotProcessEnabled: Cloud Security Center process snapshot switch. Default false.
            '''
            result = self._values.get("sas_snapshot_process_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasTiEnabled: Threat Intelligence of Cloud Security Center.
            '''
            result = self._values.get("sas_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sas_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sasTtl: Cloud Security Center centralized ttl. Default 180.
            '''
            result = self._values.get("sas_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def slb_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: slbAccessCollectionPolicy: SLB audit collection policy
            '''
            result = self._values.get("slb_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def slb_access_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: slbAccessEnabled: Slb log switch. Default true.
            '''
            result = self._values.get("slb_access_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def slb_access_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: slbAccessPolicySetting: SLB audit policy setting.
            '''
            result = self._values.get("slb_access_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def slb_access_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: slbAccessTiEnabled: Threat Intelligence of SLB.
            '''
            result = self._values.get("slb_access_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def slb_access_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: slbAccessTtl: Slb centralized ttl. Default 7.
            '''
            result = self._values.get("slb_access_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def slb_sync_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: slbSyncEnabled: Slb sync to center switch. Default true.
            '''
            result = self._values.get("slb_sync_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def slb_sync_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: slbSyncTtl: Slb sync to center switch. Default 180.
            '''
            result = self._values.get("slb_sync_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vpc_flow_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vpcFlowCollectionPolicy: VPC flow log collection policy script. Default empty.
            '''
            result = self._values.get("vpc_flow_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vpc_flow_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vpcFlowEnabled: Flow log of VPC. Default false.
            '''
            result = self._values.get("vpc_flow_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vpc_flow_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vpcFlowTtl: Regional flow log TTL of VPC. Default 7.
            '''
            result = self._values.get("vpc_flow_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vpc_sync_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vpcSyncEnabled: VPC synchronization to central configuration switch. Default true.
            '''
            result = self._values.get("vpc_sync_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vpc_sync_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vpcSyncTtl: VPC synchronization to central TTL. Default 180.
            '''
            result = self._values.get("vpc_sync_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def waf_access_collection_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: wafAccessCollectionPolicy: Waf audit collection policy
            '''
            result = self._values.get("waf_access_collection_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def waf_access_policy_setting(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: wafAccessPolicySetting: Waf audit policy setting.
            '''
            result = self._values.get("waf_access_policy_setting")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def waf_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: wafEnabled: Waf log switch. Default true.
            '''
            result = self._values.get("waf_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def waf_ti_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: wafTiEnabled: Threat Intelligence of Waf.
            '''
            result = self._values.get("waf_ti_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def waf_ttl(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: wafTtl: Waf centralized ttl. Default true.
            '''
            result = self._values.get("waf_ttl")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VariableMapProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosAuditProps",
    jsii_struct_bases=[],
    name_mapping={
        "display_name": "displayName",
        "variable_map": "variableMap",
        "multi_account": "multiAccount",
    },
)
class RosAuditProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        variable_map: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAudit.VariableMapProperty, typing.Dict[builtins.str, typing.Any]]],
        multi_account: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosAudit``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit

        :param display_name: 
        :param variable_map: 
        :param multi_account: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d2861046ac4d48cde619a94d8919ee5e9c24ee45791046b89dfc9fb8d1d8e42)
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument variable_map", value=variable_map, expected_type=type_hints["variable_map"])
            check_type(argname="argument multi_account", value=multi_account, expected_type=type_hints["multi_account"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "display_name": display_name,
            "variable_map": variable_map,
        }
        if multi_account is not None:
            self._values["multi_account"] = multi_account

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: Name of SLS log audit.
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def variable_map(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAudit.VariableMapProperty]:
        '''
        :Property: variableMap: Log audit detailed configuration.
        '''
        result = self._values.get("variable_map")
        assert result is not None, "Required property 'variable_map' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAudit.VariableMapProperty], result)

    @builtins.property
    def multi_account(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: multiAccount: Multi-account configuration, please fill in multiple aliuid.
        '''
        result = self._values.get("multi_account")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAuditProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosConsumerGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosConsumerGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::ConsumerGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ConsumerGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosConsumerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0304bf3cc74fbe555d821d45de1ef478ab49cfa1847b1f4c43bf91df1ba600a6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__59ef8ab62b7d0e9beeb4da701f2fc338413abd5c40e2711c32d5162d726363a2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroup")
    def attr_consumer_group(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConsumerGroup: The name of the consumer group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsumerGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrLogstore")
    def attr_logstore(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Logstore: The name of the logstore to which this consumer group belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogstore"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Project: The name of the project to which the logstore belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProject"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="consumerGroup")
    def consumer_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroup: The name of the consumer group. The name must be unique in a project.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "consumerGroup"))

    @consumer_group.setter
    def consumer_group(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab1b519357bca0f53e04fe896a879c09a7a84a84faf3acf9a504a43ad8603597)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "consumerGroup", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7651d657f8217329cd09813a440a61c5f99c1d5574d14df8b7e1d9bb62fb5f1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="logstore")
    def logstore(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logstore: The name of the Logstore.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logstore"))

    @logstore.setter
    def logstore(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__204dad7212e4785a5425a937a332a179fbccd72b26764c63d387186684a0e9e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logstore", value)

    @builtins.property
    @jsii.member(jsii_name="order")
    def order(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        order: Specifies whether to consume data in sequence. Valid values:
        true
        In a shard, data is consumed in ascending order based on the value of the ****tag**:**receive_time**** field.
        If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
        If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
        false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "order"))

    @order.setter
    def order(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3eec5fb8fc538f1cd712f71c90e8456b91843e63ceeb6d74ee361122fe0c140a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "order", value)

    @builtins.property
    @jsii.member(jsii_name="project")
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: The name of the project.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "project"))

    @project.setter
    def project(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb487776662df267a99af2f87dda302186400980e302cb005adde7da87ccc301)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "project", value)

    @builtins.property
    @jsii.member(jsii_name="timeout")
    def timeout(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: timeout: The timeout period. If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "timeout"))

    @timeout.setter
    def timeout(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59e50fbc9080a27d572e7d725223eb0d4aff036201accbd01b09b645007c2e3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeout", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosConsumerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "consumer_group": "consumerGroup",
        "logstore": "logstore",
        "order": "order",
        "project": "project",
        "timeout": "timeout",
    },
)
class RosConsumerGroupProps:
    def __init__(
        self,
        *,
        consumer_group: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        order: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosConsumerGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup

        :param consumer_group: 
        :param logstore: 
        :param order: 
        :param project: 
        :param timeout: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8d56dbe93a9f4e723f866685ba374512505787b49203a6aa4be298891fe5fff)
            check_type(argname="argument consumer_group", value=consumer_group, expected_type=type_hints["consumer_group"])
            check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
            check_type(argname="argument order", value=order, expected_type=type_hints["order"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "consumer_group": consumer_group,
            "logstore": logstore,
            "order": order,
            "project": project,
            "timeout": timeout,
        }

    @builtins.property
    def consumer_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroup: The name of the consumer group. The name must be unique in a project.
        '''
        result = self._values.get("consumer_group")
        assert result is not None, "Required property 'consumer_group' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def logstore(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logstore: The name of the Logstore.
        '''
        result = self._values.get("logstore")
        assert result is not None, "Required property 'logstore' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def order(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        order: Specifies whether to consume data in sequence. Valid values:
        true
        In a shard, data is consumed in ascending order based on the value of the ****tag**:**receive_time**** field.
        If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
        If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
        false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
        '''
        result = self._values.get("order")
        assert result is not None, "Required property 'order' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: The name of the project.
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def timeout(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: timeout: The timeout period. If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
        '''
        result = self._values.get("timeout")
        assert result is not None, "Required property 'timeout' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosConsumerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDashboard(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosDashboard",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::Dashboard``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Dashboard`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDashboardProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd50f65d29bc70c859f0193198038e1f8bb1d06f1d48b13646eaa5811c34cb78)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b10123e297b0bd87f1531d795fd616db36165eb2a822dde28d1600151f9de981)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDashboardName")
    def attr_dashboard_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DashboardName: Dashboard name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDashboardName"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DisplayName: Display name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="charts")
    def charts(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: charts: Chart list.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "charts"))

    @charts.setter
    def charts(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb09229de9b13f454f82a24993cb6f24401ab5ff300dea9120fd22c4c1b1f00f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "charts", value)

    @builtins.property
    @jsii.member(jsii_name="dashboardName")
    def dashboard_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dashboardName: Dashboard name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dashboardName"))

    @dashboard_name.setter
    def dashboard_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8fb543f50a85a4b565866c57626719892e7d61e88ec6377a6c4af0202933f36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dashboardName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__439bbc6870978e93eed81f405e3a75c5b7326485ec7a80dd8cc17c0baa2f9958)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9bc5d0198c94fb52870bd05f1791ac5581591fdafa04b4bb0dc7eb818a3352c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Dashboard description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cddded3fddc15c08b72183294f32f51b7a0e7b61f692adeb6a21c0a0218bcb95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: displayName: Dashboard display name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe911883fffd2344bcc81368339aa13d9893f1deb704301f8c77ff1eee5bd1fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosDashboardProps",
    jsii_struct_bases=[],
    name_mapping={
        "charts": "charts",
        "dashboard_name": "dashboardName",
        "project_name": "projectName",
        "description": "description",
        "display_name": "displayName",
    },
)
class RosDashboardProps:
    def __init__(
        self,
        *,
        charts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
        dashboard_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDashboard``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard

        :param charts: 
        :param dashboard_name: 
        :param project_name: 
        :param description: 
        :param display_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc97c1c3bf010a5ce2fbb4b8c6229fafd53acb09a877429a7944c70bfacb1d6b)
            check_type(argname="argument charts", value=charts, expected_type=type_hints["charts"])
            check_type(argname="argument dashboard_name", value=dashboard_name, expected_type=type_hints["dashboard_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "charts": charts,
            "dashboard_name": dashboard_name,
            "project_name": project_name,
        }
        if description is not None:
            self._values["description"] = description
        if display_name is not None:
            self._values["display_name"] = display_name

    @builtins.property
    def charts(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: charts: Chart list.
        '''
        result = self._values.get("charts")
        assert result is not None, "Required property 'charts' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def dashboard_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dashboardName: Dashboard name.
        '''
        result = self._values.get("dashboard_name")
        assert result is not None, "Required property 'dashboard_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Dashboard description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: displayName: Dashboard display name.
        '''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDashboardProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEtl(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosEtl",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::Etl``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Etl`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEtlProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cee91076e193c92146eb93c8756d807308a573c4dbb6f640f4b797dfb8d86278)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e7a340b1b1e4c697934de0451aa1c7331e64e5611f505f966eca4918488b3faf)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: ETL name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="configuration")
    def configuration(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEtl.ConfigurationProperty"]:
        '''
        :Property: configuration: The configuration of ETL task
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEtl.ConfigurationProperty"], jsii.get(self, "configuration"))

    @configuration.setter
    def configuration(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEtl.ConfigurationProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92b196e0ce9e6d731e7b057fb07e10c8d062fc90c9811e8171730711a8519252)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configuration", value)

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: ETL display name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__986a3f1614fc9039f94c6acfc7cc2e274d14a302f44b81e5d712c83e7a11fa97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f49a3ca5092a23e35b5970fa51b5c37c42a2b2ad56a93a3e8840ca9794b119dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: ETL name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e52fe6ab379e81e2db7402e819733676b20a0117dabc665ac6cdfd4e5743a38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: Project name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__229bf768ee665446a15e05cf25e084765eda239e0a64f9a08bf09bc458142561)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="schedule")
    def schedule(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEtl.ScheduleProperty"]:
        '''
        :Property: schedule: Task scheduling strategy
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEtl.ScheduleProperty"], jsii.get(self, "schedule"))

    @schedule.setter
    def schedule(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEtl.ScheduleProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be98996241ebe2d3e1a5ba2f9e4142cd1d6144eed0260bf66ee0a87290a8e876)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "schedule", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: ETL description message.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d3b541beec74566db83233cc704409d70bd0c0bcfa2433c7495d8ef9d8a8d4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosEtl.ConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "logstore": "logstore",
            "script": "script",
            "sinks": "sinks",
            "from_time": "fromTime",
            "parameters": "parameters",
            "role_arn": "roleArn",
            "to_time": "toTime",
            "version": "version",
        },
    )
    class ConfigurationProperty:
        def __init__(
            self,
            *,
            logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            script: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            sinks: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEtl.SinksProperty", typing.Dict[builtins.str, typing.Any]]]]],
            from_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            to_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param logstore: 
            :param script: 
            :param sinks: 
            :param from_time: 
            :param parameters: 
            :param role_arn: 
            :param to_time: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bf246d0e31ea2a23bbf398a5a71e102a739d43371572c597135c8dcda16be38e)
                check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
                check_type(argname="argument script", value=script, expected_type=type_hints["script"])
                check_type(argname="argument sinks", value=sinks, expected_type=type_hints["sinks"])
                check_type(argname="argument from_time", value=from_time, expected_type=type_hints["from_time"])
                check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
                check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
                check_type(argname="argument to_time", value=to_time, expected_type=type_hints["to_time"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "logstore": logstore,
                "script": script,
                "sinks": sinks,
            }
            if from_time is not None:
                self._values["from_time"] = from_time
            if parameters is not None:
                self._values["parameters"] = parameters
            if role_arn is not None:
                self._values["role_arn"] = role_arn
            if to_time is not None:
                self._values["to_time"] = to_time
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def logstore(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: logstore: The source logstore of the processing job.
            '''
            result = self._values.get("logstore")
            assert result is not None, "Required property 'logstore' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def script(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: script: Processing operation grammar.
            '''
            result = self._values.get("script")
            assert result is not None, "Required property 'script' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def sinks(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEtl.SinksProperty"]]]:
            '''
            :Property: sinks: target logstore configuration for delivery after data processing.
            '''
            result = self._values.get("sinks")
            assert result is not None, "Required property 'sinks' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEtl.SinksProperty"]]], result)

        @builtins.property
        def from_time(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: fromTime: The start time of the processing job, the default starts from the current time.
            '''
            result = self._values.get("from_time")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def parameters(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: parameters: Advanced parameter configuration of processing operations.
            '''
            result = self._values.get("parameters")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def role_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: roleArn: Sts role info under delivery target logstore.
            '''
            result = self._values.get("role_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def to_time(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: toTime: Deadline of processing job, the default value is None
            '''
            result = self._values.get("to_time")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: version: The script version.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosEtl.ScheduleProperty",
        jsii_struct_bases=[],
        name_mapping={"type": "type"},
    )
    class ScheduleProperty:
        def __init__(
            self,
            *,
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4f64a84148b18d95ef18365a2ad3a1752c45ce6b9a05fd9e1b973a8e1408a8b0)
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "type": type,
            }

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: The type of task scheduling strategies, value: Resident
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScheduleProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosEtl.SinksProperty",
        jsii_struct_bases=[],
        name_mapping={
            "logstore": "logstore",
            "name": "name",
            "project": "project",
            "endpoint": "endpoint",
            "role_arn": "roleArn",
            "type": "type",
        },
    )
    class SinksProperty:
        def __init__(
            self,
            *,
            logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param logstore: 
            :param name: 
            :param project: 
            :param endpoint: 
            :param role_arn: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__632876a1e42214bb020ccdf46163e7d34055ebb30c52a08d926414bf4286d93e)
                check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument project", value=project, expected_type=type_hints["project"])
                check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
                check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "logstore": logstore,
                "name": name,
                "project": project,
            }
            if endpoint is not None:
                self._values["endpoint"] = endpoint
            if role_arn is not None:
                self._values["role_arn"] = role_arn
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def logstore(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: logstore: Delivery target logstore.
            '''
            result = self._values.get("logstore")
            assert result is not None, "Required property 'logstore' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Delivery target name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def project(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: project: The project where the target logstore is delivered.
            '''
            result = self._values.get("project")
            assert result is not None, "Required property 'project' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def endpoint(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: endpoint: Delivery target logstore region.
            '''
            result = self._values.get("endpoint")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def role_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: roleArn: Sts role info under delivery target logstore.
            '''
            result = self._values.get("role_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: ETL sinks type, the default value is AliyunLOG.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SinksProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosEtlProps",
    jsii_struct_bases=[],
    name_mapping={
        "configuration": "configuration",
        "display_name": "displayName",
        "name": "name",
        "project_name": "projectName",
        "schedule": "schedule",
        "description": "description",
    },
)
class RosEtlProps:
    def __init__(
        self,
        *,
        configuration: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEtl.ConfigurationProperty, typing.Dict[builtins.str, typing.Any]]],
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        schedule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEtl.ScheduleProperty, typing.Dict[builtins.str, typing.Any]]],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEtl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl

        :param configuration: 
        :param display_name: 
        :param name: 
        :param project_name: 
        :param schedule: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd5c0c77487f9a99e8a5949ee53700c39bb2b387d8d7e298f528d5e470c58217)
            check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument schedule", value=schedule, expected_type=type_hints["schedule"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "configuration": configuration,
            "display_name": display_name,
            "name": name,
            "project_name": project_name,
            "schedule": schedule,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def configuration(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEtl.ConfigurationProperty]:
        '''
        :Property: configuration: The configuration of ETL task
        '''
        result = self._values.get("configuration")
        assert result is not None, "Required property 'configuration' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEtl.ConfigurationProperty], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: ETL display name
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: ETL name
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: Project name
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def schedule(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEtl.ScheduleProperty]:
        '''
        :Property: schedule: Task scheduling strategy
        '''
        result = self._values.get("schedule")
        assert result is not None, "Required property 'schedule' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEtl.ScheduleProperty], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: ETL description message.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEtlProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIndex(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosIndex",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::Index``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Index`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosIndexProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37f495e2bfa9abf956c9392aa2f8709463c449c5ffe8d1de60b88201775d05b2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1efa356708c9f6976afd733ef3e2533a8e4020bc02341fe33b8bd384d056d5e2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c2e15e2874891bfbfad283076b534ecb7c53ce77135f5d3994b67571fcdd79dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="fullTextIndex")
    def full_text_index(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.FullTextIndexProperty"]:
        '''
        :Property:

        fullTextIndex: Full-text indexing configuration.
        Full-text indexing and key indexing must have at least one enabled.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.FullTextIndexProperty"], jsii.get(self, "fullTextIndex"))

    @full_text_index.setter
    def full_text_index(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.FullTextIndexProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a8297738a61654c125b945e7df17d6cad7f9cd343e54f113699bbe43ccbb991)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fullTextIndex", value)

    @builtins.property
    @jsii.member(jsii_name="logstoreName")
    def logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logstoreName"))

    @logstore_name.setter
    def logstore_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d63092da3741744d0b1ebed6e91eb3c4fd0593ea747e0819d73ebf13535c1f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logstoreName", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14a0325c6a3c22d152d3d73a42f1a710e7e61a24165f79c4253c762286834e9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="keyIndices")
    def key_indices(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.KeyIndicesProperty"]]]]:
        '''
        :Property:

        keyIndices: Key index configurations.
        Full-text indexing and key indexing must have at least one enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.KeyIndicesProperty"]]]], jsii.get(self, "keyIndices"))

    @key_indices.setter
    def key_indices(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.KeyIndicesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68bbf95f114dcf8be54931485e82ed1b47dff468ee5621f09d278bd53637fa9a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyIndices", value)

    @builtins.property
    @jsii.member(jsii_name="logReduce")
    def log_reduce(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logReduce: Whether to enable log reduce. Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logReduce"))

    @log_reduce.setter
    def log_reduce(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2f49703976a6c4004246fcd06b4f1f6163ab03e8268d04cc94c3b84bcf57894)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logReduce", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosIndex.FullTextIndexProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable": "enable",
            "case_sensitive": "caseSensitive",
            "delimiter": "delimiter",
            "include_chinese": "includeChinese",
        },
    )
    class FullTextIndexProperty:
        def __init__(
            self,
            *,
            enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            case_sensitive: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            delimiter: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            include_chinese: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param enable: 
            :param case_sensitive: 
            :param delimiter: 
            :param include_chinese: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__de2ec08454981a62199bef98eb856a556b723526f9b8cbd3effd3b1434903aee)
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
                check_type(argname="argument case_sensitive", value=case_sensitive, expected_type=type_hints["case_sensitive"])
                check_type(argname="argument delimiter", value=delimiter, expected_type=type_hints["delimiter"])
                check_type(argname="argument include_chinese", value=include_chinese, expected_type=type_hints["include_chinese"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "enable": enable,
            }
            if case_sensitive is not None:
                self._values["case_sensitive"] = case_sensitive
            if delimiter is not None:
                self._values["delimiter"] = delimiter
            if include_chinese is not None:
                self._values["include_chinese"] = include_chinese

        @builtins.property
        def enable(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: enable: Whether to enable full-text indexing. Default to true.
            '''
            result = self._values.get("enable")
            assert result is not None, "Required property 'enable' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def case_sensitive(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: caseSensitive: Whether it is case sensitive. Default to false.
            '''
            result = self._values.get("case_sensitive")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def delimiter(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :: &<>/:\\n\\t\\r )).
            :Property: delimiter: Delimiter. Default to (( , '";=()[]{}?
            '''
            result = self._values.get("delimiter")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def include_chinese(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: includeChinese: Whether it contains Chinese. Default to false.
            '''
            result = self._values.get("include_chinese")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FullTextIndexProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosIndex.JsonKeyIndicesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "type": "type",
            "alias": "alias",
            "enable_analytics": "enableAnalytics",
        },
    )
    class JsonKeyIndicesProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_analytics: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param alias: 
            :param enable_analytics: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__16dc17dd234ed1b812f66947478d6c879cb3bcd68450b5807a20ada37bdbd3af)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument alias", value=alias, expected_type=type_hints["alias"])
                check_type(argname="argument enable_analytics", value=enable_analytics, expected_type=type_hints["enable_analytics"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if alias is not None:
                self._values["alias"] = alias
            if enable_analytics is not None:
                self._values["enable_analytics"] = enable_analytics

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Json key name. It can be nested by dot(.), such as k1.k2.k3.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: Json key type. Allowed types: text, long, double. Default to text.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def alias(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: alias: Json key alias.
            '''
            result = self._values.get("alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_analytics(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableAnalytics: Whether this json key is enabled for statistics. Default to true.
            '''
            result = self._values.get("enable_analytics")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "JsonKeyIndicesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosIndex.KeyIndicesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "type": "type",
            "alias": "alias",
            "case_sensitive": "caseSensitive",
            "delimiter": "delimiter",
            "enable_analytics": "enableAnalytics",
            "include_chinese": "includeChinese",
            "json_key_indices": "jsonKeyIndices",
        },
    )
    class KeyIndicesProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            case_sensitive: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            delimiter: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_analytics: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            include_chinese: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            json_key_indices: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosIndex.JsonKeyIndicesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param alias: 
            :param case_sensitive: 
            :param delimiter: 
            :param enable_analytics: 
            :param include_chinese: 
            :param json_key_indices: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bfe03b0f2c5fecef23eff4c706134418d426969d7b16ca2278a2ce16a185e5f5)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument alias", value=alias, expected_type=type_hints["alias"])
                check_type(argname="argument case_sensitive", value=case_sensitive, expected_type=type_hints["case_sensitive"])
                check_type(argname="argument delimiter", value=delimiter, expected_type=type_hints["delimiter"])
                check_type(argname="argument enable_analytics", value=enable_analytics, expected_type=type_hints["enable_analytics"])
                check_type(argname="argument include_chinese", value=include_chinese, expected_type=type_hints["include_chinese"])
                check_type(argname="argument json_key_indices", value=json_key_indices, expected_type=type_hints["json_key_indices"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if alias is not None:
                self._values["alias"] = alias
            if case_sensitive is not None:
                self._values["case_sensitive"] = case_sensitive
            if delimiter is not None:
                self._values["delimiter"] = delimiter
            if enable_analytics is not None:
                self._values["enable_analytics"] = enable_analytics
            if include_chinese is not None:
                self._values["include_chinese"] = include_chinese
            if json_key_indices is not None:
                self._values["json_key_indices"] = json_key_indices

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Key name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: Key type. Allowed types: text, long, double, json. Default to text.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def alias(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: alias: Key alias.
            '''
            result = self._values.get("alias")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def case_sensitive(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: caseSensitive: Whether it is case sensitive. It takes effect when Type is text or json. Default to false.
            '''
            result = self._values.get("case_sensitive")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def delimiter(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :: &<>/:\\n\\t\\r )).
            :Property: delimiter: Delimiter. It takes effect when Type is text or json. Default to (( , '";=()[]{}?
            '''
            result = self._values.get("delimiter")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_analytics(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableAnalytics: Whether this key is enabled for statistics. Default to false for json type, else true.
            '''
            result = self._values.get("enable_analytics")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def include_chinese(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: includeChinese: Whether it contains Chinese. It takes effect when Type is text or json. Default to false.
            '''
            result = self._values.get("include_chinese")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def json_key_indices(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.JsonKeyIndicesProperty"]]]]:
            '''
            :Property: jsonKeyIndices: Json key index configurations.
            '''
            result = self._values.get("json_key_indices")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosIndex.JsonKeyIndicesProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "KeyIndicesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosIndexProps",
    jsii_struct_bases=[],
    name_mapping={
        "full_text_index": "fullTextIndex",
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "key_indices": "keyIndices",
        "log_reduce": "logReduce",
    },
)
class RosIndexProps:
    def __init__(
        self,
        *,
        full_text_index: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIndex.FullTextIndexProperty, typing.Dict[builtins.str, typing.Any]]],
        logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        key_indices: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIndex.KeyIndicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        log_reduce: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosIndex``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index

        :param full_text_index: 
        :param logstore_name: 
        :param project_name: 
        :param key_indices: 
        :param log_reduce: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61e9320e6265a141ad3fb19c272fe7dbcee64aea49c5aa2626e4a841feaf24a8)
            check_type(argname="argument full_text_index", value=full_text_index, expected_type=type_hints["full_text_index"])
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument key_indices", value=key_indices, expected_type=type_hints["key_indices"])
            check_type(argname="argument log_reduce", value=log_reduce, expected_type=type_hints["log_reduce"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "full_text_index": full_text_index,
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if key_indices is not None:
            self._values["key_indices"] = key_indices
        if log_reduce is not None:
            self._values["log_reduce"] = log_reduce

    @builtins.property
    def full_text_index(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIndex.FullTextIndexProperty]:
        '''
        :Property:

        fullTextIndex: Full-text indexing configuration.
        Full-text indexing and key indexing must have at least one enabled.
        '''
        result = self._values.get("full_text_index")
        assert result is not None, "Required property 'full_text_index' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIndex.FullTextIndexProperty], result)

    @builtins.property
    def logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def key_indices(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIndex.KeyIndicesProperty]]]]:
        '''
        :Property:

        keyIndices: Key index configurations.
        Full-text indexing and key indexing must have at least one enabled.
        '''
        result = self._values.get("key_indices")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIndex.KeyIndicesProperty]]]], result)

    @builtins.property
    def log_reduce(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logReduce: Whether to enable log reduce. Default to false.
        '''
        result = self._values.get("log_reduce")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIndexProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLogstore(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosLogstore",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::Logstore``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Logstore`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logstore
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLogstoreProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e99911c25ef1771030dc1aff0f4622acd22c72d91b62967fa50502445e9e1daa)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ca09612fbd1dfb6ce94c68f4b31b1bded3e41747535c836851bef796f56df9c4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LogstoreName: Logstore name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogstoreName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProjectName: Project name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__14be6e6178234d789a03b622398e2e0eaf87d9efe1f02684dac49283119aab2d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="logstoreName")
    def logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logstoreName"))

    @logstore_name.setter
    def logstore_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3205ff0bf4813b85ce8caf586d88d9b95deaa5732d8977ac73d8dad4b9e5c28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logstoreName", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c24dca99c400b487486acc38e61d30ae7ec5214830dbb65bd3337f17503c5018)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="appendMeta")
    def append_meta(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appendMeta"))

    @append_meta.setter
    def append_meta(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b10d2e874bbb32709b515f8358a31b727241714cdd02fa054b1e442a14a39bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appendMeta", value)

    @builtins.property
    @jsii.member(jsii_name="autoSplit")
    def auto_split(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoSplit: Whether to automatically split the shard.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoSplit"))

    @auto_split.setter
    def auto_split(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc147794358c6c51ac6aa1d7c1074f4c04d3262317196ea5d5dde593d82dedd3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoSplit", value)

    @builtins.property
    @jsii.member(jsii_name="enableTracking")
    def enable_tracking(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableTracking"))

    @enable_tracking.setter
    def enable_tracking(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e1de55c3c6af4f5945029917237529f54392d50bbe587726e3ca6840d885861)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableTracking", value)

    @builtins.property
    @jsii.member(jsii_name="encryptConf")
    def encrypt_conf(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLogstore.EncryptConfProperty"]]:
        '''
        :Property: encryptConf: Data encryption config
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLogstore.EncryptConfProperty"]], jsii.get(self, "encryptConf"))

    @encrypt_conf.setter
    def encrypt_conf(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLogstore.EncryptConfProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__047500645b3f2e3bd6f3df19b1e2d99c848f6e0ddeaaec1485ea51d26d0ae32b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptConf", value)

    @builtins.property
    @jsii.member(jsii_name="maxSplitShard")
    def max_split_shard(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
        Allowed Values: 1-64.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxSplitShard"))

    @max_split_shard.setter
    def max_split_shard(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9f1f593938163ac49aa924abe5ce358144fb41168fcbce43ecb941981086b44)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxSplitShard", value)

    @builtins.property
    @jsii.member(jsii_name="mode")
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mode: The type of the Logstore. Simple Log Service provides two types of Logstores: Standard Logstores and Query Logstores. Valid values:
        standard: Standard Logstore. This type of Logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can also use this type of Logstore to build a comprehensive observability system.
        query: Query Logstore. This type of Logstore supports high-performance queries. The index traffic fee of a Query Logstore is approximately half that of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the amount of data is large, the log retention period is long, or log analysis is not required. If logs are stored for weeks or months, the log retention period is considered long.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mode"))

    @mode.setter
    def mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86f55052f62460929912008f0ff8e9835f88d740cfbff2f247ca65d44c9f963d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mode", value)

    @builtins.property
    @jsii.member(jsii_name="preserveStorage")
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        preserveStorage: Whether to keep the log permanently.
        If set to true, TTL will be ignored.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "preserveStorage"))

    @preserve_storage.setter
    def preserve_storage(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e01696a95b514f403c6b21a31c83062a1b24103a25b8c2b71af35ab88cfedf69)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preserveStorage", value)

    @builtins.property
    @jsii.member(jsii_name="shardCount")
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shardCount: The number of Shards.
        Allowed Values: 1-100, default to 2.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "shardCount"))

    @shard_count.setter
    def shard_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3c5cd42a790ab0c0dac531af4c4a4d54f2cc88ce3f45b01e342a6aa26ebd1bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "shardCount", value)

    @builtins.property
    @jsii.member(jsii_name="ttl")
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ttl: The lifecycle of log in the logstore in days.
        Allowed Values: 1-3600, default to 30.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ttl"))

    @ttl.setter
    def ttl(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__929b5c2fd95bd3f831fb38f2913dabd6bd5c794c02f0fc118e338374b4781987)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ttl", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosLogstore.EncryptConfProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable": "enable",
            "encrypt_type": "encryptType",
            "user_cmk_info": "userCmkInfo",
        },
    )
    class EncryptConfProperty:
        def __init__(
            self,
            *,
            enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            encrypt_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            user_cmk_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLogstore.UserCmkInfoProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param enable: 
            :param encrypt_type: 
            :param user_cmk_info: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ae51c1b1297fbcd609b31020090e99e91eedd6d795bdd27e4c53cc18e344dbca)
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
                check_type(argname="argument encrypt_type", value=encrypt_type, expected_type=type_hints["encrypt_type"])
                check_type(argname="argument user_cmk_info", value=user_cmk_info, expected_type=type_hints["user_cmk_info"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "enable": enable,
                "encrypt_type": encrypt_type,
            }
            if user_cmk_info is not None:
                self._values["user_cmk_info"] = user_cmk_info

        @builtins.property
        def enable(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: enable: Specifies whether data encryption is enabled.
            '''
            result = self._values.get("enable")
            assert result is not None, "Required property 'enable' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def encrypt_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            encryptType: The encryption algorithm. The encrypt_type
            parameter can be set to only default or m4.
            '''
            result = self._values.get("encrypt_type")
            assert result is not None, "Required property 'encrypt_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def user_cmk_info(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLogstore.UserCmkInfoProperty"]]:
            '''
            :Property:

            userCmkInfo: If this parameter is specified, the BYOK key is used.
            Otherwise, the service key is used.
            '''
            result = self._values.get("user_cmk_info")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLogstore.UserCmkInfoProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EncryptConfProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosLogstore.UserCmkInfoProperty",
        jsii_struct_bases=[],
        name_mapping={"arn": "arn", "cmk_key_id": "cmkKeyId", "region_id": "regionId"},
    )
    class UserCmkInfoProperty:
        def __init__(
            self,
            *,
            arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            cmk_key_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param arn: 
            :param cmk_key_id: 
            :param region_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__89cfea88e93938bdb7c0d2d2d439b7b999aa37d643de878d5be444b97822a2d6)
                check_type(argname="argument arn", value=arn, expected_type=type_hints["arn"])
                check_type(argname="argument cmk_key_id", value=cmk_key_id, expected_type=type_hints["cmk_key_id"])
                check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "arn": arn,
                "cmk_key_id": cmk_key_id,
                "region_id": region_id,
            }

        @builtins.property
        def arn(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            arn: The ARN of the RAM role. For more information
            about how to obtain the ARN of a RAM role,
            see Ship log data from Log Service to OSS.
            '''
            result = self._values.get("arn")
            assert result is not None, "Required property 'arn' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def cmk_key_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            cmkKeyId: The ID of the CMK to which the BYOK key belongs,
            for example, f5136b95-2420-ab31-xxxxxxxxx.
            '''
            result = self._values.get("cmk_key_id")
            assert result is not None, "Required property 'cmk_key_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def region_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: regionId: The ID of the region where the CMK resides.
            '''
            result = self._values.get("region_id")
            assert result is not None, "Required property 'region_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "UserCmkInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosLogstoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "append_meta": "appendMeta",
        "auto_split": "autoSplit",
        "enable_tracking": "enableTracking",
        "encrypt_conf": "encryptConf",
        "max_split_shard": "maxSplitShard",
        "mode": "mode",
        "preserve_storage": "preserveStorage",
        "shard_count": "shardCount",
        "ttl": "ttl",
    },
)
class RosLogstoreProps:
    def __init__(
        self,
        *,
        logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        append_meta: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_split: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_tracking: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypt_conf: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLogstore.EncryptConfProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        max_split_shard: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preserve_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosLogstore``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logstore

        :param logstore_name: 
        :param project_name: 
        :param append_meta: 
        :param auto_split: 
        :param enable_tracking: 
        :param encrypt_conf: 
        :param max_split_shard: 
        :param mode: 
        :param preserve_storage: 
        :param shard_count: 
        :param ttl: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc4a4748fe1c43946564ba15ce1137dc87e445eaf58614d72a09430b459eaa25)
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument append_meta", value=append_meta, expected_type=type_hints["append_meta"])
            check_type(argname="argument auto_split", value=auto_split, expected_type=type_hints["auto_split"])
            check_type(argname="argument enable_tracking", value=enable_tracking, expected_type=type_hints["enable_tracking"])
            check_type(argname="argument encrypt_conf", value=encrypt_conf, expected_type=type_hints["encrypt_conf"])
            check_type(argname="argument max_split_shard", value=max_split_shard, expected_type=type_hints["max_split_shard"])
            check_type(argname="argument mode", value=mode, expected_type=type_hints["mode"])
            check_type(argname="argument preserve_storage", value=preserve_storage, expected_type=type_hints["preserve_storage"])
            check_type(argname="argument shard_count", value=shard_count, expected_type=type_hints["shard_count"])
            check_type(argname="argument ttl", value=ttl, expected_type=type_hints["ttl"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if append_meta is not None:
            self._values["append_meta"] = append_meta
        if auto_split is not None:
            self._values["auto_split"] = auto_split
        if enable_tracking is not None:
            self._values["enable_tracking"] = enable_tracking
        if encrypt_conf is not None:
            self._values["encrypt_conf"] = encrypt_conf
        if max_split_shard is not None:
            self._values["max_split_shard"] = max_split_shard
        if mode is not None:
            self._values["mode"] = mode
        if preserve_storage is not None:
            self._values["preserve_storage"] = preserve_storage
        if shard_count is not None:
            self._values["shard_count"] = shard_count
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def append_meta(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
        Default to false.
        '''
        result = self._values.get("append_meta")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_split(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoSplit: Whether to automatically split the shard.
        Default to false.
        '''
        result = self._values.get("auto_split")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_tracking(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
        Default to false.
        '''
        result = self._values.get("enable_tracking")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypt_conf(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLogstore.EncryptConfProperty]]:
        '''
        :Property: encryptConf: Data encryption config
        '''
        result = self._values.get("encrypt_conf")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLogstore.EncryptConfProperty]], result)

    @builtins.property
    def max_split_shard(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
        Allowed Values: 1-64.
        '''
        result = self._values.get("max_split_shard")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mode: The type of the Logstore. Simple Log Service provides two types of Logstores: Standard Logstores and Query Logstores. Valid values:
        standard: Standard Logstore. This type of Logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can also use this type of Logstore to build a comprehensive observability system.
        query: Query Logstore. This type of Logstore supports high-performance queries. The index traffic fee of a Query Logstore is approximately half that of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the amount of data is large, the log retention period is long, or log analysis is not required. If logs are stored for weeks or months, the log retention period is considered long.
        '''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        preserveStorage: Whether to keep the log permanently.
        If set to true, TTL will be ignored.
        Default to false.
        '''
        result = self._values.get("preserve_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shardCount: The number of Shards.
        Allowed Values: 1-100, default to 2.
        '''
        result = self._values.get("shard_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ttl: The lifecycle of log in the logstore in days.
        Allowed Values: 1-3600, default to 30.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLogstoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLogtailConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosLogtailConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::LogtailConfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``LogtailConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logtailconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLogtailConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__575fec4ea1be80faa42157f7d7b3093633a76abde41983322c5b96de52d32d2e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cd20e01bfc8fafd3d9ef0862e32ea2b942dfc68850bf99f291266b9c1ddf3b73)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAppliedMachineGroups")
    def attr_applied_machine_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppliedMachineGroups: Applied machine groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppliedMachineGroups"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Endpoint: Endpoint address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLogtailConfigName")
    def attr_logtail_config_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LogtailConfigName: Logtail config name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogtailConfigName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ffdd50dd56ad6630720b6e1e78b901edf9fd66a198cd451aa191c330de151f27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="logstoreName")
    def logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logstoreName"))

    @logstore_name.setter
    def logstore_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e0d43703eba35b9974f8ba13a49fcab9ac3ae87f9fcd64eace9d2bb1ead7308)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logstoreName", value)

    @builtins.property
    @jsii.member(jsii_name="logtailConfigName")
    def logtail_config_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        logtailConfigName: Logtail config name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logtailConfigName"))

    @logtail_config_name.setter
    def logtail_config_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ffaa0a6a0821b6dc58b230f81bb91e403e31dfff4f523a402e6badf6f91a84d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logtailConfigName", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__590d9229743075c4733038a888fe2fa8e51d03916378e60a3ba509cec4905c7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="cloneFrom")
    def clone_from(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLogtailConfig.CloneFromProperty"]]:
        '''
        :Property:

        cloneFrom: Clone logtail config data from existing logtail config.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLogtailConfig.CloneFromProperty"]], jsii.get(self, "cloneFrom"))

    @clone_from.setter
    def clone_from(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLogtailConfig.CloneFromProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ec9f6e431392df03d37d1080860050758a7a6a1ad0bf9c990d5eced75808a06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cloneFrom", value)

    @builtins.property
    @jsii.member(jsii_name="rawConfigData")
    def raw_config_data(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        rawConfigData: The format is the same as the response of SLS API GetConfig.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        configName, outputType, outputDetail in data will be ignored.For example:
        {
        "configName": "test-logtail-config",
        "createTime": 1574843554,
        "inputDetail": {
        "acceptNoEnoughKeys": false,
        "adjustTimezone": false,
        "advanced": {
        "force_multiconfig": false
        },
        "autoExtend": true,
        "delayAlarmBytes": 0,
        "delaySkipBytes": 0,
        "discardNonUtf8": false,
        "discardUnmatch": false,
        "dockerExcludeEnv": {},
        "dockerExcludeLabel": {},
        "dockerFile": false,
        "dockerIncludeEnv": {},
        "dockerIncludeLabel": {},
        "enableRawLog": false,
        "enableTag": false,
        "fileEncoding": "utf8",
        "filePattern": "test.log*",
        "filterKey": [],
        "filterRegex": [],
        "key": [
        "time",
        "logger",
        "level",
        "request_id",
        "user_id",
        "region_id",
        "content"
        ],
        "localStorage": true,
        "logPath": "/var/log/test",
        "logTimezone": "",
        "logType": "delimiter_log",
        "maxDepth": 100,
        "maxSendRate": -1,
        "mergeType": "topic",
        "preserve": true,
        "preserveDepth": 1,
        "priority": 0,
        "quote": "\\u0001",
        "sendRateExpire": 0,
        "sensitive_keys": [],
        "separator": ",,,",
        "shardHashKey": [],
        "tailExisted": false,
        "timeFormat": "",
        "timeKey": "",
        "topicFormat": "none"
        },
        "inputType": "file",
        "lastModifyTime": 1574843554,
        "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
        "outputDetail": {
        "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
        "logstoreName": "test-logstore",
        "region": "cn-hangzhou"
        },
        "outputType": "LogService"
        }
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "rawConfigData"))

    @raw_config_data.setter
    def raw_config_data(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e92dd84454d18182ce5e90a291f1a400193d965f8abe0aed4ae8b6bbc6c3147c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rawConfigData", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosLogtailConfig.CloneFromProperty",
        jsii_struct_bases=[],
        name_mapping={
            "logtail_config_name": "logtailConfigName",
            "project_name": "projectName",
        },
    )
    class CloneFromProperty:
        def __init__(
            self,
            *,
            logtail_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param logtail_config_name: 
            :param project_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bd4c3d39edca26d97f75583f415b7fd36790ab2630c2fd89da5aa92326dfb58a)
                check_type(argname="argument logtail_config_name", value=logtail_config_name, expected_type=type_hints["logtail_config_name"])
                check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "logtail_config_name": logtail_config_name,
                "project_name": project_name,
            }

        @builtins.property
        def logtail_config_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            logtailConfigName: Logtail config name:

            1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            2. Must start and end with lowercase letters and numbers.
            3. The name length is 3-63 characters.
            '''
            result = self._values.get("logtail_config_name")
            assert result is not None, "Required property 'logtail_config_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def project_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            projectName: Project name:

            1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            2. Must start and end with lowercase letters and numbers.
            3. The name length is 3-63 characters.
            '''
            result = self._values.get("project_name")
            assert result is not None, "Required property 'project_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CloneFromProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosLogtailConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "logtail_config_name": "logtailConfigName",
        "project_name": "projectName",
        "clone_from": "cloneFrom",
        "raw_config_data": "rawConfigData",
    },
)
class RosLogtailConfigProps:
    def __init__(
        self,
        *,
        logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        logtail_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        clone_from: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLogtailConfig.CloneFromProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        raw_config_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosLogtailConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logtailconfig

        :param logstore_name: 
        :param logtail_config_name: 
        :param project_name: 
        :param clone_from: 
        :param raw_config_data: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25087996a9532cdffeaa27214286e1df397df759a1757848ad254cac7bf2da39)
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument logtail_config_name", value=logtail_config_name, expected_type=type_hints["logtail_config_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument clone_from", value=clone_from, expected_type=type_hints["clone_from"])
            check_type(argname="argument raw_config_data", value=raw_config_data, expected_type=type_hints["raw_config_data"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "logstore_name": logstore_name,
            "logtail_config_name": logtail_config_name,
            "project_name": project_name,
        }
        if clone_from is not None:
            self._values["clone_from"] = clone_from
        if raw_config_data is not None:
            self._values["raw_config_data"] = raw_config_data

    @builtins.property
    def logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        logstoreName: Logstore name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def logtail_config_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        logtailConfigName: Logtail config name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logtail_config_name")
        assert result is not None, "Required property 'logtail_config_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def clone_from(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLogtailConfig.CloneFromProperty]]:
        '''
        :Property:

        cloneFrom: Clone logtail config data from existing logtail config.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        '''
        result = self._values.get("clone_from")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLogtailConfig.CloneFromProperty]], result)

    @builtins.property
    def raw_config_data(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        rawConfigData: The format is the same as the response of SLS API GetConfig.
        Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        configName, outputType, outputDetail in data will be ignored.For example:
        {
        "configName": "test-logtail-config",
        "createTime": 1574843554,
        "inputDetail": {
        "acceptNoEnoughKeys": false,
        "adjustTimezone": false,
        "advanced": {
        "force_multiconfig": false
        },
        "autoExtend": true,
        "delayAlarmBytes": 0,
        "delaySkipBytes": 0,
        "discardNonUtf8": false,
        "discardUnmatch": false,
        "dockerExcludeEnv": {},
        "dockerExcludeLabel": {},
        "dockerFile": false,
        "dockerIncludeEnv": {},
        "dockerIncludeLabel": {},
        "enableRawLog": false,
        "enableTag": false,
        "fileEncoding": "utf8",
        "filePattern": "test.log*",
        "filterKey": [],
        "filterRegex": [],
        "key": [
        "time",
        "logger",
        "level",
        "request_id",
        "user_id",
        "region_id",
        "content"
        ],
        "localStorage": true,
        "logPath": "/var/log/test",
        "logTimezone": "",
        "logType": "delimiter_log",
        "maxDepth": 100,
        "maxSendRate": -1,
        "mergeType": "topic",
        "preserve": true,
        "preserveDepth": 1,
        "priority": 0,
        "quote": "\\u0001",
        "sendRateExpire": 0,
        "sensitive_keys": [],
        "separator": ",,,",
        "shardHashKey": [],
        "tailExisted": false,
        "timeFormat": "",
        "timeKey": "",
        "topicFormat": "none"
        },
        "inputType": "file",
        "lastModifyTime": 1574843554,
        "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
        "outputDetail": {
        "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
        "logstoreName": "test-logstore",
        "region": "cn-hangzhou"
        },
        "outputType": "LogService"
        }
        '''
        result = self._values.get("raw_config_data")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLogtailConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMachineGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosMachineGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::MachineGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``MachineGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMachineGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a42b2eab7a43080f80c9908f46208e45e112912f1f3385791472173f57e8dbb)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7f9451afe70285e91b7c4676ad7a92580ee42afd3fa5d1c377d5d1cf5d5e5695)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupName: GroupName of SLS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProjectName: ProjectName of SLS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__191cdef9c79284db9e62826a25fe4229f5db0b87ccb1ec4b8a599c475e350130)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupAttribute")
    def group_attribute(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupAttribute: Group attribute, default is null. The object value is groupTopic and externalName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupAttribute"))

    @group_attribute.setter
    def group_attribute(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbcd9d6c08c05685f10ba2c33faa1fad8d60203f4158289a2dcd092af2455688)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupAttribute", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a20e5e4f569064875d96d43eb1bdcc7d0f5c53d0260467eff1d7d1518a9450d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="groupType")
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupType: MachineGroup type, the value is empty or Armory
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupType"))

    @group_type.setter
    def group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__097cf54e1bfa9aa585ca89c8278c59b7713d7fac9c54e4f6dc91ca5c88e2c1b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupType", value)

    @builtins.property
    @jsii.member(jsii_name="machineIdentifyType")
    def machine_identify_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "machineIdentifyType"))

    @machine_identify_type.setter
    def machine_identify_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2d2ada03e20b922d7af0991c424ec372a87aa9f3a32cab6b08e1171c0a86e07)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "machineIdentifyType", value)

    @builtins.property
    @jsii.member(jsii_name="machineList")
    def machine_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: machineList: The machine tag, the value is ip or userdefined-id.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "machineList"))

    @machine_list.setter
    def machine_list(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34bc65b21c8bbb7d82df291218b293f229090fab039191b5cab300b966323345)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "machineList", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: projectName: MachineGroup created in project.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bda85b8de49bb54c758eac251b9c0988d269fc90fa73de41eed1a53638f410a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosMachineGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_attribute": "groupAttribute",
        "group_name": "groupName",
        "group_type": "groupType",
        "machine_identify_type": "machineIdentifyType",
        "machine_list": "machineList",
        "project_name": "projectName",
    },
)
class RosMachineGroupProps:
    def __init__(
        self,
        *,
        group_attribute: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        machine_identify_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        machine_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosMachineGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup

        :param group_attribute: 
        :param group_name: 
        :param group_type: 
        :param machine_identify_type: 
        :param machine_list: 
        :param project_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__885aeb7c14b65270b96554da6f93ec97bace9e50aa88e9e316d540661d983a65)
            check_type(argname="argument group_attribute", value=group_attribute, expected_type=type_hints["group_attribute"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument machine_identify_type", value=machine_identify_type, expected_type=type_hints["machine_identify_type"])
            check_type(argname="argument machine_list", value=machine_list, expected_type=type_hints["machine_list"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_attribute is not None:
            self._values["group_attribute"] = group_attribute
        if group_name is not None:
            self._values["group_name"] = group_name
        if group_type is not None:
            self._values["group_type"] = group_type
        if machine_identify_type is not None:
            self._values["machine_identify_type"] = machine_identify_type
        if machine_list is not None:
            self._values["machine_list"] = machine_list
        if project_name is not None:
            self._values["project_name"] = project_name

    @builtins.property
    def group_attribute(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupAttribute: Group attribute, default is null. The object value is groupTopic and externalName
        '''
        result = self._values.get("group_attribute")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        result = self._values.get("group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupType: MachineGroup type, the value is empty or Armory
        '''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def machine_identify_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
        '''
        result = self._values.get("machine_identify_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def machine_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: machineList: The machine tag, the value is ip or userdefined-id.
        '''
        result = self._values.get("machine_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: projectName: MachineGroup created in project.
        '''
        result = self._values.get("project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMachineGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMetricStore(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosMetricStore",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::MetricStore``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``MetricStore`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-metricstore
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMetricStoreProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fddef050da68afb68b22771ca25cd858e8927bacb6fc4c39a3d3d078db07a8f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a9e91cdc2567a239becec870c41e56bbc6918cebaa2832385d1871e60f60aa4e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLogstoreName")
    def attr_logstore_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LogstoreName: Metric store name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogstoreName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__db4efdbe966d4dc5e514607d183d9a0c3d5caede43ce41faab4c9263bc9b2483)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="logstoreName")
    def logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        logstoreName: Metric store name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logstoreName"))

    @logstore_name.setter
    def logstore_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c528355f24501c7d849ddc151f2aea435743eb479f1bc73959f42913238e00e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logstoreName", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79d73d74a7f726d08fdb3e14b3779123666ba8c822da3886de5906b78c44053a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="preserveStorage")
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        preserveStorage: Whether to keep the log permanently.
        If set to true, TTL will be ignored.
        Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "preserveStorage"))

    @preserve_storage.setter
    def preserve_storage(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4489138315151e5ccc92958a670d850b5e0cff5b3d34ba6212f6321b747ef1b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preserveStorage", value)

    @builtins.property
    @jsii.member(jsii_name="shardCount")
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shardCount: The number of Shards.
        Allowed Values: 1-10, default to 2.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "shardCount"))

    @shard_count.setter
    def shard_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa964e589700e8f21cacf38ca48de0dc419be0996952e7a6a3f616753ccbe56f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "shardCount", value)

    @builtins.property
    @jsii.member(jsii_name="ttl")
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ttl: The lifecycle of log in the metrice store in days.
        Allowed Values: 1-3000, default to 30.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ttl"))

    @ttl.setter
    def ttl(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8e94b098142b0de758fb4a71f509b9dda865ccdfc467aa64f9a3fa729379371)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ttl", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosMetricStoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "logstore_name": "logstoreName",
        "project_name": "projectName",
        "preserve_storage": "preserveStorage",
        "shard_count": "shardCount",
        "ttl": "ttl",
    },
)
class RosMetricStoreProps:
    def __init__(
        self,
        *,
        logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        preserve_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosMetricStore``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-metricstore

        :param logstore_name: 
        :param project_name: 
        :param preserve_storage: 
        :param shard_count: 
        :param ttl: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e37eb04ea66385b49a63e0c05eff511770563a72306240e160632f2f28ef914)
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument preserve_storage", value=preserve_storage, expected_type=type_hints["preserve_storage"])
            check_type(argname="argument shard_count", value=shard_count, expected_type=type_hints["shard_count"])
            check_type(argname="argument ttl", value=ttl, expected_type=type_hints["ttl"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "logstore_name": logstore_name,
            "project_name": project_name,
        }
        if preserve_storage is not None:
            self._values["preserve_storage"] = preserve_storage
        if shard_count is not None:
            self._values["shard_count"] = shard_count
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def logstore_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        logstoreName: Metric store name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("logstore_name")
        assert result is not None, "Required property 'logstore_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        projectName: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def preserve_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        preserveStorage: Whether to keep the log permanently.
        If set to true, TTL will be ignored.
        Default to false.
        '''
        result = self._values.get("preserve_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shardCount: The number of Shards.
        Allowed Values: 1-10, default to 2.
        '''
        result = self._values.get("shard_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ttl: The lifecycle of log in the metrice store in days.
        Allowed Values: 1-3000, default to 30.
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMetricStoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosOssExport(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosOssExport",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::OssExport``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``OssExport`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosOssExportProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea879597e30b3db30749cbd6bfedf7a4bff1f0d54398f13921169b280992cc04)
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
            type_hints = typing.get_type_hints(_typecheckingstub__dedd1a0fa4b4c09c3305a969d2ad63cccbf8c88f3072ac74935b67e27f2fa465)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrExportName")
    def attr_export_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExportName: The name of the export job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExportName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProjectName: The project name of SLS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="configuration")
    def configuration(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOssExport.ConfigurationProperty"]:
        '''
        :Property: configuration: The configuration of the export job.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOssExport.ConfigurationProperty"], jsii.get(self, "configuration"))

    @configuration.setter
    def configuration(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOssExport.ConfigurationProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff764e517ed0ff13d37b25563ae5d7a1d726f6e604e6c961e767ee4bd5514dc4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configuration", value)

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: The display name of the export job. It must be 4 to 100 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__849d3fb46a9456589e2b0b61046bb03737827c30ec761a2dff2470d548a4d620)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5eb703fa81ac049d3a5f3e66313853f6e223a8b27137de1d16cc147a5f9c8d85)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="exportName")
    def export_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: exportName: The name of the export job. This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "exportName"))

    @export_name.setter
    def export_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f63a2505b34d11a45309b559fa5ddd54040b628b13f749f6fdee6d7c84b66abf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "exportName", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: The project name of SLS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc7ccfc58fd92ce2a3ab71548bbc07d96d9c49157934cda350f148530dfc7619)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the export job. It could be 0 to 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17c175292f8f43c03930ab3a48b7f13cc609f05c1920003a47fe8a8e0190a4fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosOssExport.ConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "logstore": "logstore",
            "role_arn": "roleArn",
            "sink": "sink",
            "from_time": "fromTime",
            "to_time": "toTime",
        },
    )
    class ConfigurationProperty:
        def __init__(
            self,
            *,
            logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            role_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            sink: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosOssExport.SinkProperty", typing.Dict[builtins.str, typing.Any]]],
            from_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            to_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param logstore: 
            :param role_arn: 
            :param sink: 
            :param from_time: 
            :param to_time: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b15509f9b78f23955e0f4a448457348940c26320c8a2c31529ff56a20ebd763d)
                check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
                check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
                check_type(argname="argument sink", value=sink, expected_type=type_hints["sink"])
                check_type(argname="argument from_time", value=from_time, expected_type=type_hints["from_time"])
                check_type(argname="argument to_time", value=to_time, expected_type=type_hints["to_time"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "logstore": logstore,
                "role_arn": role_arn,
                "sink": sink,
            }
            if from_time is not None:
                self._values["from_time"] = from_time
            if to_time is not None:
                self._values["to_time"] = to_time

        @builtins.property
        def logstore(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: logstore: The logstore name of the project.
            '''
            result = self._values.get("logstore")
            assert result is not None, "Required property 'logstore' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def role_arn(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: roleArn: Used to control permissions of writing data to OSS and reading data in Logstores. Example: acs:ram::13234:role/aliyunlogdefaultrole.
            '''
            result = self._values.get("role_arn")
            assert result is not None, "Required property 'role_arn' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def sink(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOssExport.SinkProperty"]:
            '''
            :Property: sink: The sink name.
            '''
            result = self._values.get("sink")
            assert result is not None, "Required property 'sink' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOssExport.SinkProperty"], result)

        @builtins.property
        def from_time(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: fromTime: The start time of the time range.
            '''
            result = self._values.get("from_time")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def to_time(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: toTime: The end time of the time range.
            '''
            result = self._values.get("to_time")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosOssExport.SinkProperty",
        jsii_struct_bases=[],
        name_mapping={
            "bucket": "bucket",
            "buffer_interval": "bufferInterval",
            "buffer_size": "bufferSize",
            "content_type": "contentType",
            "role_arn": "roleArn",
            "compression_type": "compressionType",
            "content_detail": "contentDetail",
            "delay_seconds": "delaySeconds",
            "endpoint": "endpoint",
            "path_format": "pathFormat",
            "path_format_type": "pathFormatType",
            "prefix": "prefix",
            "suffix": "suffix",
            "time_zone": "timeZone",
        },
    )
    class SinkProperty:
        def __init__(
            self,
            *,
            bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            buffer_interval: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            buffer_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            content_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            role_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            compression_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            content_detail: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            path_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            path_format_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            suffix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param bucket: 
            :param buffer_interval: 
            :param buffer_size: 
            :param content_type: 
            :param role_arn: 
            :param compression_type: 
            :param content_detail: 
            :param delay_seconds: 
            :param endpoint: 
            :param path_format: 
            :param path_format_type: 
            :param prefix: 
            :param suffix: 
            :param time_zone: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0879f40bf0c76f3639cef763b62681af0e7c61619b12bcb7a33f809ffa5b68bd)
                check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
                check_type(argname="argument buffer_interval", value=buffer_interval, expected_type=type_hints["buffer_interval"])
                check_type(argname="argument buffer_size", value=buffer_size, expected_type=type_hints["buffer_size"])
                check_type(argname="argument content_type", value=content_type, expected_type=type_hints["content_type"])
                check_type(argname="argument role_arn", value=role_arn, expected_type=type_hints["role_arn"])
                check_type(argname="argument compression_type", value=compression_type, expected_type=type_hints["compression_type"])
                check_type(argname="argument content_detail", value=content_detail, expected_type=type_hints["content_detail"])
                check_type(argname="argument delay_seconds", value=delay_seconds, expected_type=type_hints["delay_seconds"])
                check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
                check_type(argname="argument path_format", value=path_format, expected_type=type_hints["path_format"])
                check_type(argname="argument path_format_type", value=path_format_type, expected_type=type_hints["path_format_type"])
                check_type(argname="argument prefix", value=prefix, expected_type=type_hints["prefix"])
                check_type(argname="argument suffix", value=suffix, expected_type=type_hints["suffix"])
                check_type(argname="argument time_zone", value=time_zone, expected_type=type_hints["time_zone"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "bucket": bucket,
                "buffer_interval": buffer_interval,
                "buffer_size": buffer_size,
                "content_type": content_type,
                "role_arn": role_arn,
            }
            if compression_type is not None:
                self._values["compression_type"] = compression_type
            if content_detail is not None:
                self._values["content_detail"] = content_detail
            if delay_seconds is not None:
                self._values["delay_seconds"] = delay_seconds
            if endpoint is not None:
                self._values["endpoint"] = endpoint
            if path_format is not None:
                self._values["path_format"] = path_format
            if path_format_type is not None:
                self._values["path_format_type"] = path_format_type
            if prefix is not None:
                self._values["prefix"] = prefix
            if suffix is not None:
                self._values["suffix"] = suffix
            if time_zone is not None:
                self._values["time_zone"] = time_zone

        @builtins.property
        def bucket(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: bucket: The name of the OSS bucket.
            '''
            result = self._values.get("bucket")
            assert result is not None, "Required property 'bucket' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def buffer_interval(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: bufferInterval: The shipping time. The maximum interval at which data is shipped. Valid values: 300 to 900. Unit: seconds.
            '''
            result = self._values.get("buffer_interval")
            assert result is not None, "Required property 'buffer_interval' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def buffer_size(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: bufferSize: The shipping size. The value of this parameter determines the maximum size of raw log data that is shipped and stored in an object. Unit: MB. If the size of log data that you want to ship reaches the specified value, a shipping job is automatically created.
            '''
            result = self._values.get("buffer_size")
            assert result is not None, "Required property 'buffer_size' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def content_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: contentType: The storage format. You can store data in the Parquet format for data analysis. Compared with data stored in the CSV or JSON format, data stored in the Parquet format can be scanned at a higher efficiency.You are charged more fees when you ship data in the Parquet format than in the CSV or JSON format. Select a storage format for data shipping based on your business requirements.
            '''
            result = self._values.get("content_type")
            assert result is not None, "Required property 'content_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def role_arn(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: roleArn: Used to control permissions of writing data to OSS and reading data in Logstores. Example: acs:ram::13234:role/aliyunlogdefaultrole.
            '''
            result = self._values.get("role_arn")
            assert result is not None, "Required property 'role_arn' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def compression_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: compressionType: The compression method of OSS data. Valid values: none, snappy, gzip, and zstd. The value none indicates that raw data is not compressed. The value snappy, gzip, or zstd indicates that a specified algorithm is used to compress data, which can reduce the storage space usage of OSS buckets. The compression methods vary based on storage formats.
            '''
            result = self._values.get("compression_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def content_detail(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: contentDetail: The content detail. If ContentType=json, the default value is {"EnableTag": false}.
            '''
            result = self._values.get("content_detail")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def delay_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            delaySeconds: The shipping latency. The period of time after which data is shipped. Valid values: 900 to 63244800. Unit: seconds.
            Note: Do not specify a latency that exceeds the data retention period of the Logstore. We recommend that you reserve a buffer period of a few days for the latency. Otherwise, data loss may occur.
            '''
            result = self._values.get("delay_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def endpoint(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: endpoint: The endpoint of the OSS bucket.
            '''
            result = self._values.get("endpoint")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def path_format(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: pathFormat: The partition format is used to generate subdirectories. A subdirectory is dynamically generated based on the shipping time. The default partition format is %Y/%m/%d/%H/%M. Example: 2017/01/23/12/00. Note that the partition format cannot start with a forward slash (/). For more information about how to integrate with the compute engines of E-MapReduce such as Hive and Impala to query and analyze data
            '''
            result = self._values.get("path_format")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def path_format_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: pathFormatType: The partition format type. Only support time.
            '''
            result = self._values.get("path_format_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def prefix(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: prefix: The prefix of the OSS object name.
            '''
            result = self._values.get("prefix")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def suffix(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: suffix: The suffix of the OSS object name.
            '''
            result = self._values.get("suffix")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def time_zone(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: timeZone: The time zone. Partition paths vary based on time zones. The value should be -1200 to +1400. For example, +0800.
            '''
            result = self._values.get("time_zone")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SinkProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosOssExportProps",
    jsii_struct_bases=[],
    name_mapping={
        "configuration": "configuration",
        "display_name": "displayName",
        "export_name": "exportName",
        "project_name": "projectName",
        "description": "description",
    },
)
class RosOssExportProps:
    def __init__(
        self,
        *,
        configuration: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOssExport.ConfigurationProperty, typing.Dict[builtins.str, typing.Any]]],
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        export_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosOssExport``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport

        :param configuration: 
        :param display_name: 
        :param export_name: 
        :param project_name: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39bd01f9cd9e5525844f29b1d91dd56303a318a88bc94ec7a05bf2bfeaf6ec9a)
            check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument export_name", value=export_name, expected_type=type_hints["export_name"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "configuration": configuration,
            "display_name": display_name,
            "export_name": export_name,
            "project_name": project_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def configuration(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOssExport.ConfigurationProperty]:
        '''
        :Property: configuration: The configuration of the export job.
        '''
        result = self._values.get("configuration")
        assert result is not None, "Required property 'configuration' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOssExport.ConfigurationProperty], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: The display name of the export job. It must be 4 to 100 characters in length.
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def export_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: exportName: The name of the export job. This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
        '''
        result = self._values.get("export_name")
        assert result is not None, "Required property 'export_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: The project name of SLS.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the export job. It could be 0 to 256 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosOssExportProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosOssExternalStore(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosOssExternalStore",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::OssExternalStore``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``OssExternalStore`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosOssExternalStoreProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ed3928e312d833b049f6593af7e984ab80b71a60e7c31daccde8e7dc78c0cca)
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
            type_hints = typing.get_type_hints(_typecheckingstub__da905b97d614da518f25793aa1af8df3ea80049f94059415a4adf4c328021a5a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrExternalStoreName")
    def attr_external_store_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExternalStoreName: The name of the external store.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExternalStoreName"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Project: The name of the project to which the external store belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProject"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accessId")
    def access_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessId: The AccessKey ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessId"))

    @access_id.setter
    def access_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bf87e910dde51bbaa79f1efd1f3b29e4d7aa99202458442fcb5cc5c845bed60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessId", value)

    @builtins.property
    @jsii.member(jsii_name="accessKey")
    def access_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessKey: The AccessKey secret.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accessKey"))

    @access_key.setter
    def access_key(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3d7649048f5d597d1ae379bd042987d03b040f79d5c1ea1b4ddd405f4f2cf0b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessKey", value)

    @builtins.property
    @jsii.member(jsii_name="bucket")
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucket: The name of the OSS bucket.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bucket"))

    @bucket.setter
    def bucket(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__581958b2abcaccad8c01e043fb9ec19ac6efca2b1c96a2d9866d0ab1ebcd8d1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucket", value)

    @builtins.property
    @jsii.member(jsii_name="columns")
    def columns(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOssExternalStore.ColumnsProperty"]]]:
        '''
        :Property: columns: The associated fields.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOssExternalStore.ColumnsProperty"]]], jsii.get(self, "columns"))

    @columns.setter
    def columns(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosOssExternalStore.ColumnsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90f8f4d181fb01c07f6c9df9ae4383cbd95fb7e1e986f661262ec17093fbd3a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "columns", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22863a74231788ceae641d67b0ba3f7a5551a39777fe29f84540cc7b197fa063)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endpoint")
    def endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpoint: The OSS endpoint.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "endpoint"))

    @endpoint.setter
    def endpoint(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac291df688083b21e8e6538186d60756ba99b738a15e213d91fc0a91f186d0ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpoint", value)

    @builtins.property
    @jsii.member(jsii_name="externalStoreName")
    def external_store_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: externalStoreName: The name of the external store.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "externalStoreName"))

    @external_store_name.setter
    def external_store_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a7e30e026e7935aca8a8062e70ec2c1e8fe435419b91e1d8283ac5b8cada673)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "externalStoreName", value)

    @builtins.property
    @jsii.member(jsii_name="objects")
    def objects(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: objects: The associated OSS objects. Valid values of n: 1 to 100.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "objects"))

    @objects.setter
    def objects(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ef50a813478fdb33c4af22a85930f07f743b279fe0b9d9350b39a6904ba331a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "objects", value)

    @builtins.property
    @jsii.member(jsii_name="project")
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: A short description of struct
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "project"))

    @project.setter
    def project(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dec154ac3547b7c908a796bb334e430036bbb71bfcdfe46eafcd704c9b7a19f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "project", value)

    @builtins.property
    @jsii.member(jsii_name="storeType")
    def store_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: storeType: The type of the external store. Set the value to oss.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "storeType"))

    @store_type.setter
    def store_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94268538f60caa38b6a62da3682c5908c22386340443328746b4ec00585df65f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storeType", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosOssExternalStore.ColumnsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type"},
    )
    class ColumnsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param name: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d203e018d753fd92855b00ef7dc7f6e986712034cbe3f6ca68f762c53a9e3b1b)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "type": type,
            }

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: The name of the field.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: The data type of the field.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosOssExternalStoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "access_id": "accessId",
        "access_key": "accessKey",
        "bucket": "bucket",
        "columns": "columns",
        "endpoint": "endpoint",
        "external_store_name": "externalStoreName",
        "objects": "objects",
        "project": "project",
        "store_type": "storeType",
    },
)
class RosOssExternalStoreProps:
    def __init__(
        self,
        *,
        access_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        access_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        columns: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOssExternalStore.ColumnsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        external_store_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        objects: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        store_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosOssExternalStore``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore

        :param access_id: 
        :param access_key: 
        :param bucket: 
        :param columns: 
        :param endpoint: 
        :param external_store_name: 
        :param objects: 
        :param project: 
        :param store_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df5e3f1a1009a620a786adbe10d68c91bb1cd8f0a64dce2a64ca83f8eba65b2b)
            check_type(argname="argument access_id", value=access_id, expected_type=type_hints["access_id"])
            check_type(argname="argument access_key", value=access_key, expected_type=type_hints["access_key"])
            check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
            check_type(argname="argument columns", value=columns, expected_type=type_hints["columns"])
            check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
            check_type(argname="argument external_store_name", value=external_store_name, expected_type=type_hints["external_store_name"])
            check_type(argname="argument objects", value=objects, expected_type=type_hints["objects"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument store_type", value=store_type, expected_type=type_hints["store_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "access_id": access_id,
            "access_key": access_key,
            "bucket": bucket,
            "columns": columns,
            "endpoint": endpoint,
            "external_store_name": external_store_name,
            "objects": objects,
            "project": project,
            "store_type": store_type,
        }

    @builtins.property
    def access_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessId: The AccessKey ID.
        '''
        result = self._values.get("access_id")
        assert result is not None, "Required property 'access_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def access_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accessKey: The AccessKey secret.
        '''
        result = self._values.get("access_key")
        assert result is not None, "Required property 'access_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def bucket(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bucket: The name of the OSS bucket.
        '''
        result = self._values.get("bucket")
        assert result is not None, "Required property 'bucket' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def columns(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOssExternalStore.ColumnsProperty]]]:
        '''
        :Property: columns: The associated fields.
        '''
        result = self._values.get("columns")
        assert result is not None, "Required property 'columns' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOssExternalStore.ColumnsProperty]]], result)

    @builtins.property
    def endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endpoint: The OSS endpoint.
        '''
        result = self._values.get("endpoint")
        assert result is not None, "Required property 'endpoint' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def external_store_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: externalStoreName: The name of the external store.
        '''
        result = self._values.get("external_store_name")
        assert result is not None, "Required property 'external_store_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def objects(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: objects: The associated OSS objects. Valid values of n: 1 to 100.
        '''
        result = self._values.get("objects")
        assert result is not None, "Required property 'objects' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: A short description of struct
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def store_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: storeType: The type of the external store. Set the value to oss.
        '''
        result = self._values.get("store_type")
        assert result is not None, "Required property 'store_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosOssExternalStoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProject(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosProject",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::Project``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Project`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38a7af9ea5b5e764f37121b3cf403526a1b4c66420c7ffe80556610eb94b0a84)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1641ef3b0f008269d7cb1f8ccf79d180e6e1852ace6ec26ff20ecedb3f9211e6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: Project name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__6c029aa59f998b498df772c9774bc3430dc84a3a13158252d7ad7148b90b03ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb8e142c132b888d5c4654d9eb94dc54768a0e63c44f4e76c074cbc180e5b4b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="dataRedundancyType")
    def data_redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataRedundancyType: Disaster recovery type.LRS: Local redundant storage.ZRS: Local redundant storage.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataRedundancyType"))

    @data_redundancy_type.setter
    def data_redundancy_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__741a6867f8ead76cfa8aa36d0f015dcfc0e0c7b1f2dee4503a3d07e59fd79663)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataRedundancyType", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Project description: <>'"\\ is not supported, up to 64 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26f055a2c2f4717089f86145879345e33573886f27696c8af3de79916d58bef4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the sls project belongs. If not provided, the project belongs to the default resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee99e7f83f274e4af8b94da300d0857a70b31c0f660516b84f8ea6a7e64f4d64)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosProject.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosProject.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosProject.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6a59f8bd6ba8a6d93d290f3c4b11c612773d74d83efba92159a8e4a30881df7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosProject.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__a72e6dcd789c2dcaa2d07ca250a132f64d678c64115e8f4b55c76eb1514f9857)
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
    jsii_type="@alicloud/ros-cdk-sls.RosProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "data_redundancy_type": "dataRedundancyType",
        "description": "description",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosProjectProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosProject.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosProject``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project

        :param name: 
        :param data_redundancy_type: 
        :param description: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3784af050a0cb65f900ea3b984feccd3c0a8f0f3db206be5c1e9d19d884b8593)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument data_redundancy_type", value=data_redundancy_type, expected_type=type_hints["data_redundancy_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if data_redundancy_type is not None:
            self._values["data_redundancy_type"] = data_redundancy_type
        if description is not None:
            self._values["description"] = description
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_redundancy_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataRedundancyType: Disaster recovery type.LRS: Local redundant storage.ZRS: Local redundant storage.
        '''
        result = self._values.get("data_redundancy_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Project description: <>'"\\ is not supported, up to 64 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the sls project belongs. If not provided, the project belongs to the default resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosProject.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosProject.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRdsExternalStore(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosRdsExternalStore",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::RdsExternalStore``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``RdsExternalStore`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRdsExternalStoreProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81a4f6f5f0d44701fb67027d6d7da91f3f751adb6e28eed8a815ab3c1726bf33)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7604a540dd9a1f23c3f6f7b79f6da4313cab0aef827635b507385059d1601e6b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrExternalStoreName")
    def attr_external_store_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExternalStoreName: The name of the external store.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExternalStoreName"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Project: The name of the project to which the external store belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProject"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="db")
    def db(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: db: The name of the database in the ApsaraDB RDS for MySQL instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "db"))

    @db.setter
    def db(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__580dea44c5a26558ebe0eb435991b0644f9370ae4fbb89c74731ca678a887315)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "db", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9bd7ae06b545b3fc00e8b0fb0f9d73dad99bad06e8c7cdbb28afc40fc0d4874d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="externalStoreName")
    def external_store_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: externalStoreName: The name of the external store. The name must be unique in a project and different from Logstore.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "externalStoreName"))

    @external_store_name.setter
    def external_store_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e81d6a0e5cd9092db1d4c206168207b1d33f3d67f068f301374ba6c838a48108)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "externalStoreName", value)

    @builtins.property
    @jsii.member(jsii_name="host")
    def host(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "host"))

    @host.setter
    def host(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__497b03f8844ab6408a341aa7e4dbae280c8d9988db3d5db4b9f9c23d7e4a00b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "host", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da9b3e9e2a64bed5c19ea4c67c67f6f20ff47c729c09478e00e01aecd31a23dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="port")
    def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: port: The internal or public port of the ApsaraDB RDS for MySQL instance.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "port"))

    @port.setter
    def port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40f915ea827766a5868eb8c25d2f858756f2542c5c6c0b9d9d5db5f4d1616652)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "port", value)

    @builtins.property
    @jsii.member(jsii_name="project")
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: The name of the project.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "project"))

    @project.setter
    def project(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f101bdcdbb7f739baa05366a9294751c07c6905ab2cc10574cae420ed8fbc28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "project", value)

    @builtins.property
    @jsii.member(jsii_name="region")
    def region(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: region: The region where the ApsaraDB RDS for MySQL instance resides. Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "region"))

    @region.setter
    def region(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65eab8555d6be827ba113e58615c6c4d7c78a156bdbb6fb1ce706369de3fac4e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "region", value)

    @builtins.property
    @jsii.member(jsii_name="storeType")
    def store_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: storeType: The storage type. Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "storeType"))

    @store_type.setter
    def store_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55ffff0b908969cae2a9930538e6b21590efff9d0b88eee11b60caba38460cbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storeType", value)

    @builtins.property
    @jsii.member(jsii_name="table")
    def table(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: table: The name of the database table in the ApsaraDB RDS for MySQL instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "table"))

    @table.setter
    def table(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d01e6bbb27c50d2b6dc911efbcf5f63d858de71dd92a8a48210e6b4d4f18a2ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "table", value)

    @builtins.property
    @jsii.member(jsii_name="username")
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "username"))

    @username.setter
    def username(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a0ded7f2cadb551a1253cadd55a2944e7c3f852afa88494fddadff15b389239)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "username", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86ecddb79ebab06e143336934108c9bda273b1b116b6de458181ef5a6af64fe6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The id of the RDS instance
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d2da78249baf86a9d0f8f7437892a9dbb70b8f6b3e1edfa441a84b3884733ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosRdsExternalStoreProps",
    jsii_struct_bases=[],
    name_mapping={
        "db": "db",
        "external_store_name": "externalStoreName",
        "host": "host",
        "password": "password",
        "port": "port",
        "project": "project",
        "region": "region",
        "store_type": "storeType",
        "table": "table",
        "username": "username",
        "vpc_id": "vpcId",
        "instance_id": "instanceId",
    },
)
class RosRdsExternalStoreProps:
    def __init__(
        self,
        *,
        db: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        external_store_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        store_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        table: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosRdsExternalStore``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore

        :param db: 
        :param external_store_name: 
        :param host: 
        :param password: 
        :param port: 
        :param project: 
        :param region: 
        :param store_type: 
        :param table: 
        :param username: 
        :param vpc_id: 
        :param instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f805b82501177616596daa623068fbaaf06ead162290e2a738c8debe18fc3fec)
            check_type(argname="argument db", value=db, expected_type=type_hints["db"])
            check_type(argname="argument external_store_name", value=external_store_name, expected_type=type_hints["external_store_name"])
            check_type(argname="argument host", value=host, expected_type=type_hints["host"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument store_type", value=store_type, expected_type=type_hints["store_type"])
            check_type(argname="argument table", value=table, expected_type=type_hints["table"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db": db,
            "external_store_name": external_store_name,
            "host": host,
            "password": password,
            "port": port,
            "project": project,
            "region": region,
            "store_type": store_type,
            "table": table,
            "username": username,
            "vpc_id": vpc_id,
        }
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def db(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: db: The name of the database in the ApsaraDB RDS for MySQL instance.
        '''
        result = self._values.get("db")
        assert result is not None, "Required property 'db' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def external_store_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: externalStoreName: The name of the external store. The name must be unique in a project and different from Logstore.
        '''
        result = self._values.get("external_store_name")
        assert result is not None, "Required property 'external_store_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
        '''
        result = self._values.get("host")
        assert result is not None, "Required property 'host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: port: The internal or public port of the ApsaraDB RDS for MySQL instance.
        '''
        result = self._values.get("port")
        assert result is not None, "Required property 'port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: The name of the project.
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def region(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: region: The region where the ApsaraDB RDS for MySQL instance resides. Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
        '''
        result = self._values.get("region")
        assert result is not None, "Required property 'region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def store_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: storeType: The storage type. Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
        '''
        result = self._values.get("store_type")
        assert result is not None, "Required property 'store_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def table(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: table: The name of the database table in the ApsaraDB RDS for MySQL instance.
        '''
        result = self._values.get("table")
        assert result is not None, "Required property 'table' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.
        '''
        result = self._values.get("username")
        assert result is not None, "Required property 'username' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The id of the RDS instance
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRdsExternalStoreProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSavedsearch(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosSavedsearch",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::Savedsearch``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Savedsearch`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSavedsearchProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63cdff2941d2aaa0d3b23c7fabd077a489003541fce47432b25840ad2a14d8d4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__077eb76bb7d0d0917657a66a47111e98ce71cc38cd7e5d6307fed8a926aaa871)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSavedsearchName")
    def attr_savedsearch_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SavedsearchName: Savedsearch name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSavedsearchName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="detail")
    def detail(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSavedsearch.DetailProperty"]:
        '''
        :Property: detail:
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSavedsearch.DetailProperty"], jsii.get(self, "detail"))

    @detail.setter
    def detail(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSavedsearch.DetailProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6510412b2082ebfacd12a3b3700d095cef8fce737dc28b19dbf3b2f4a8336f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "detail", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2eec3d6125611bdd1f3ca67b4e0c7fc7e60c9843679896b1471e59893a5bd7c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="project")
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: Project name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "project"))

    @project.setter
    def project(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__667d871155eff750a2e1b7608da42b671b6a20219fb7a87d4e9cb785f21c3b73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "project", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-sls.RosSavedsearch.DetailProperty",
        jsii_struct_bases=[],
        name_mapping={
            "logstore": "logstore",
            "savedsearch_name": "savedsearchName",
            "search_query": "searchQuery",
            "topic": "topic",
            "display_name": "displayName",
        },
    )
    class DetailProperty:
        def __init__(
            self,
            *,
            logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            savedsearch_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            search_query: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            topic: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param logstore: 
            :param savedsearch_name: 
            :param search_query: 
            :param topic: 
            :param display_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__59ae1b270bae267d4f788fad936d5b73b37f3acc3c0df7c1dac27b6a8a4336f2)
                check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
                check_type(argname="argument savedsearch_name", value=savedsearch_name, expected_type=type_hints["savedsearch_name"])
                check_type(argname="argument search_query", value=search_query, expected_type=type_hints["search_query"])
                check_type(argname="argument topic", value=topic, expected_type=type_hints["topic"])
                check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "logstore": logstore,
                "savedsearch_name": savedsearch_name,
                "search_query": search_query,
                "topic": topic,
            }
            if display_name is not None:
                self._values["display_name"] = display_name

        @builtins.property
        def logstore(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: logstore: Logstore name.
            '''
            result = self._values.get("logstore")
            assert result is not None, "Required property 'logstore' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def savedsearch_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: savedsearchName: Savedsearch name.
            '''
            result = self._values.get("savedsearch_name")
            assert result is not None, "Required property 'savedsearch_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def search_query(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: searchQuery: Check sentence.
            '''
            result = self._values.get("search_query")
            assert result is not None, "Required property 'search_query' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def topic(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: topic: Topic name
            '''
            result = self._values.get("topic")
            assert result is not None, "Required property 'topic' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def display_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: displayName: Display name.
            '''
            result = self._values.get("display_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DetailProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosSavedsearchProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class RosSavedsearchProps:
    def __init__(
        self,
        *,
        detail: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSavedsearch.DetailProperty, typing.Dict[builtins.str, typing.Any]]],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosSavedsearch``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch

        :param detail: 
        :param project: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f47599eb1ddc82dff23faeca78a8ccd7dc22cd8c98219b7f48612be6ae539736)
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "detail": detail,
            "project": project,
        }

    @builtins.property
    def detail(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSavedsearch.DetailProperty]:
        '''
        :Property: detail:
        '''
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSavedsearch.DetailProperty], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: Project name
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSavedsearchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosServiceLog(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosServiceLog",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SLS::ServiceLog``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ServiceLog`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosServiceLogProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11ea6542a1112f6270736fd1644b14177980047dc8b0a50162fe9adf109cbd34)
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
            type_hints = typing.get_type_hints(_typecheckingstub__246d4c3649dd8ae261ef245d497c79717961332d04ee16e093883fb55f1526a5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProjectName: The name of the project that needs to be activated.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__006c6bfc9145a29785503b124d75c475f7c9f6d54faeb69a1066117f0f6b6cb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="logStorageLocation")
    def log_storage_location(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logStorageLocation: The location of the service log.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logStorageLocation"))

    @log_storage_location.setter
    def log_storage_location(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08a7484fbd2aefea923f1f98f09ed77f5f12478cf643c8dc7bde2e45b1a52391)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logStorageLocation", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: The name of the project that needs to be activated. If it has been activated, it will be reactivated again.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c61684a994ee18b2f8d59e3f5e5a6cc73d1467a482712a97321756eeead3381)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="serviceLogTypes")
    def service_log_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: serviceLogTypes: Types of service log that needs to be activated.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "serviceLogTypes"))

    @service_log_types.setter
    def service_log_types(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b255c28387ced04a770936f10cb1a4d3652ac0791888bf7781b37a6f1909365)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceLogTypes", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.RosServiceLogProps",
    jsii_struct_bases=[],
    name_mapping={
        "log_storage_location": "logStorageLocation",
        "project_name": "projectName",
        "service_log_types": "serviceLogTypes",
    },
)
class RosServiceLogProps:
    def __init__(
        self,
        *,
        log_storage_location: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_log_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        '''Properties for defining a ``RosServiceLog``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog

        :param log_storage_location: 
        :param project_name: 
        :param service_log_types: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e1d0c72d24d9da607d9cf3b0073bc66a3a730221e837e243b579cf8e592a9eb)
            check_type(argname="argument log_storage_location", value=log_storage_location, expected_type=type_hints["log_storage_location"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument service_log_types", value=service_log_types, expected_type=type_hints["service_log_types"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "log_storage_location": log_storage_location,
            "project_name": project_name,
            "service_log_types": service_log_types,
        }

    @builtins.property
    def log_storage_location(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logStorageLocation: The location of the service log.
        '''
        result = self._values.get("log_storage_location")
        assert result is not None, "Required property 'log_storage_location' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: The name of the project that needs to be activated. If it has been activated, it will be reactivated again.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_log_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: serviceLogTypes: Types of service log that needs to be activated.
        '''
        result = self._values.get("service_log_types")
        assert result is not None, "Required property 'service_log_types' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServiceLogProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISavedsearch)
class Savedsearch(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Savedsearch",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::Savedsearch``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSavedsearch``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SavedsearchProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__458a07583ab8bee446484154b86ec9ad5f79b3e3be831442878c01ff66e71e74)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSavedsearchName")
    def attr_savedsearch_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SavedsearchName: Savedsearch name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSavedsearchName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SavedsearchProps":
        return typing.cast("SavedsearchProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af3d9c9667225f0a9598ec8eb075c55af7cfac7555cc6a7ca893ac30d89c9cd7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4927d0a1cec60a01a9f26deb91397d7b06cbbe742d6c089515512591d5cc35a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26f0f0ecffd73e02ef06c5e6c9d48a254bed6a33d0998ac35bba5d3f981e44ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.SavedsearchProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class SavedsearchProps:
    def __init__(
        self,
        *,
        detail: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSavedsearch.DetailProperty, typing.Dict[builtins.str, typing.Any]]],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Savedsearch``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch

        :param detail: Property detail:.
        :param project: Property project: Project name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6972516e071b7a7b27a7772549622bc99bef356a2b30bc2d18d026172e6ed28)
            check_type(argname="argument detail", value=detail, expected_type=type_hints["detail"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "detail": detail,
            "project": project,
        }

    @builtins.property
    def detail(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSavedsearch.DetailProperty]:
        '''Property detail:.'''
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSavedsearch.DetailProperty], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property project: Project name.'''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SavedsearchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IServiceLog)
class ServiceLog(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.ServiceLog",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::ServiceLog``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosServiceLog``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ServiceLogProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d835d7c96459073bd23e7c5292863c148a0c422c3ce183904b660a71e2b05e94)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ProjectName: The name of the project that needs to be activated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceLogProps":
        return typing.cast("ServiceLogProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb7792b6bdb71993ea7cd79fe5316a1fa1d702191091629a781f8668d37b4a8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ff81993a17a503b0fca57d11e217707110b56842ef033e72a61875376065f01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc82b5d43f1ab5177ee87e84b2420c137ec7dc8e5beb6e60b2d8ce7bbe10f8b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.ServiceLogProps",
    jsii_struct_bases=[],
    name_mapping={
        "log_storage_location": "logStorageLocation",
        "project_name": "projectName",
        "service_log_types": "serviceLogTypes",
    },
)
class ServiceLogProps:
    def __init__(
        self,
        *,
        log_storage_location: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_log_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        '''Properties for defining a ``ServiceLog``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog

        :param log_storage_location: Property logStorageLocation: The location of the service log.
        :param project_name: Property projectName: The name of the project that needs to be activated. If it has been activated, it will be reactivated again.
        :param service_log_types: Property serviceLogTypes: Types of service log that needs to be activated.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e445b1911fd955910b039122caed025658354ab4af1f8dc5053219aeb2209ec)
            check_type(argname="argument log_storage_location", value=log_storage_location, expected_type=type_hints["log_storage_location"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument service_log_types", value=service_log_types, expected_type=type_hints["service_log_types"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "log_storage_location": log_storage_location,
            "project_name": project_name,
            "service_log_types": service_log_types,
        }

    @builtins.property
    def log_storage_location(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logStorageLocation: The location of the service log.'''
        result = self._values.get("log_storage_location")
        assert result is not None, "Required property 'log_storage_location' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectName: The name of the project that needs to be activated.

        If it has been activated, it will be reactivated again.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_log_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property serviceLogTypes: Types of service log that needs to be activated.'''
        result = self._values.get("service_log_types")
        assert result is not None, "Required property 'service_log_types' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServiceLogProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAlert)
class Alert(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Alert",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::Alert``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAlert``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AlertProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4dc90d5eb990de440a55f36fefa7ba92d25bf22b7c503f361ce5506d11d4cad0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Alert name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AlertProps:
        return typing.cast(AlertProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a32d514ce1fd50bcab5bb05bc49e581858350b029e0429600d7ecdce5c0ae1ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5426954a3a27c64fb19721cf1fda09934cb8d0e33c622864832c9d9b64dfd3ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4832d9f0f4383e2b083f7b629233eb6264a539d5bbb2ffd3b1f55bc3acd0278)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IApplyConfigToMachineGroup)
class ApplyConfigToMachineGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.ApplyConfigToMachineGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApplyConfigToMachineGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[ApplyConfigToMachineGroupProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__939f798867cdbdd3ccac4a71da46d977541b7535df2acc8acf96d4b2fb1532d8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApplyConfigToMachineGroupProps:
        return typing.cast(ApplyConfigToMachineGroupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da4b4fc47c172ef704dbdc8f469b9c3d7fc3efc68ba3b8367f7c76e96ee04eb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e83a6480710419f88bfae1e7d0085e5b3d65dea98bcbdcf3884a2872492eb920)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad5fe09c0223cc11d4288108285a900c06a25afed0579a2535a0f820b62690d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IAudit)
class Audit(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Audit",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::Audit``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAudit``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AuditProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f71af29470adc4f3830048e02c84c908818932ae9d7e9fe3cb445d358ec121ce)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Name of SLS log audit.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AuditProps:
        return typing.cast(AuditProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d48d4b503fb7d83d588601a32c8724ca7f722c2e474409dfe95db502e1b17672)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a781e4f65be36bd55afd7d4efc9bfba902479169f8e05c3ab2c6cac19b5a0b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__277d1e5cdc798ae870ee9730920690bf78915370258b5e7235a738c89c9bf968)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IConsumerGroup)
class ConsumerGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.ConsumerGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::ConsumerGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosConsumerGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ConsumerGroupProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b506f3af12249fe4bde09fe41ef72514a797d1e01143bd38284f38704594c507)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroup")
    def attr_consumer_group(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConsumerGroup: The name of the consumer group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConsumerGroup"))

    @builtins.property
    @jsii.member(jsii_name="attrLogstore")
    def attr_logstore(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Logstore: The name of the logstore to which this consumer group belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLogstore"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Project: The name of the project to which the logstore belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrProject"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConsumerGroupProps:
        return typing.cast(ConsumerGroupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4ebc1213d28bdab1ea167b40c5d9dd864904bce7182e96d6cf43d24bc0261d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b12cdc4bf4a36bb86630f27562aaee9360b3a096785d95c94e33e037b4de00df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__194ec7298341de01ac7e60775cf797ffb2f871de41ed4a8956b9a929204a77e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDashboard)
class Dashboard(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Dashboard",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::Dashboard``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDashboard``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DashboardProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a612850618f1228ee78250a54ce5b64a134718cdc0866e17c6c5241dcd92cd8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDashboardName")
    def attr_dashboard_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DashboardName: Dashboard name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDashboardName"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Display name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DashboardProps:
        return typing.cast(DashboardProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a3ccec76de7b0dc10bd53567ea1578a9eb5a069da6d3889946ff323f2ed63d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20ab4bf7b470d33206b81bfefc35d979fd95c46f14083574f2a4852e93a043a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bc7ef2a7b02f0d417e740cc9232de316505a3558dac8fbf3347ca65e7ffdcfa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEtl)
class Etl(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Etl",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SLS::Etl``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEtl``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EtlProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29fc8efa98adb9273024b08d52cba929ca77378561006bf0c9c31f8298610651)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: ETL name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EtlProps:
        return typing.cast(EtlProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__268b6be42bd4cdf35f2e37ba799c834ed54e1fcdcb1cfe8679b42e7b762b863c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ebdcbb5fdfddc51ed95ab84f94e359a0be9e4b1472cffab11fdbc71c19fa675)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a13255b4319224c758baa9f5c349fc87ad8a87c4ff69dfb7919ef4603da125b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Alert",
    "AlertProps",
    "ApplyConfigToMachineGroup",
    "ApplyConfigToMachineGroupProps",
    "Audit",
    "AuditProps",
    "ConsumerGroup",
    "ConsumerGroupProps",
    "Dashboard",
    "DashboardProps",
    "Etl",
    "EtlProps",
    "IAlert",
    "IApplyConfigToMachineGroup",
    "IAudit",
    "IConsumerGroup",
    "IDashboard",
    "IEtl",
    "IIndex",
    "ILogstore",
    "ILogtailConfig",
    "IMachineGroup",
    "IMetricStore",
    "IOssExport",
    "IOssExternalStore",
    "IProject",
    "IRdsExternalStore",
    "ISavedsearch",
    "IServiceLog",
    "Index",
    "IndexProps",
    "Logstore",
    "LogstoreProps",
    "LogtailConfig",
    "LogtailConfigProps",
    "MachineGroup",
    "MachineGroupProps",
    "MetricStore",
    "MetricStoreProps",
    "OssExport",
    "OssExportProps",
    "OssExternalStore",
    "OssExternalStoreProps",
    "Project",
    "ProjectProps",
    "RdsExternalStore",
    "RdsExternalStoreProps",
    "RosAlert",
    "RosAlertProps",
    "RosApplyConfigToMachineGroup",
    "RosApplyConfigToMachineGroupProps",
    "RosAudit",
    "RosAuditProps",
    "RosConsumerGroup",
    "RosConsumerGroupProps",
    "RosDashboard",
    "RosDashboardProps",
    "RosEtl",
    "RosEtlProps",
    "RosIndex",
    "RosIndexProps",
    "RosLogstore",
    "RosLogstoreProps",
    "RosLogtailConfig",
    "RosLogtailConfigProps",
    "RosMachineGroup",
    "RosMachineGroupProps",
    "RosMetricStore",
    "RosMetricStoreProps",
    "RosOssExport",
    "RosOssExportProps",
    "RosOssExternalStore",
    "RosOssExternalStoreProps",
    "RosProject",
    "RosProjectProps",
    "RosRdsExternalStore",
    "RosRdsExternalStoreProps",
    "RosSavedsearch",
    "RosSavedsearchProps",
    "RosServiceLog",
    "RosServiceLogProps",
    "Savedsearch",
    "SavedsearchProps",
    "ServiceLog",
    "ServiceLogProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__3915aaafcbce9b37683554165f5ef18d4047883b83d2acc3696d4f04edbd3d00(
    *,
    detail: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.DetailProperty, typing.Dict[builtins.str, typing.Any]]],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e841975a95f0caaef38704a787ff0fa3aa4f36c0404a05c0478c221b7b60a3f(
    *,
    config_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca39effacb160cba87db70b32051e2903b282cd4c0b9680d83ffa990931dad6d(
    *,
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    variable_map: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAudit.VariableMapProperty, typing.Dict[builtins.str, typing.Any]]],
    multi_account: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df436eea86cbc69117df7fdf400f277e2af0db586498d6a4f90bc6dd5ee23fae(
    *,
    consumer_group: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    order: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02bccad83b27835df2ad9a17842b3b5a447fa55e96c1dcbe1743ca027925c5ae(
    *,
    charts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
    dashboard_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7844781c2020366512942ad290c99edac6cd8eaf9c14acd4e2137e86d318ddf6(
    *,
    configuration: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEtl.ConfigurationProperty, typing.Dict[builtins.str, typing.Any]]],
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    schedule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEtl.ScheduleProperty, typing.Dict[builtins.str, typing.Any]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37ce56cf99a18afc6ffc83bdf68f8d54a6c421ecc5be7b831935e0ce3191b534(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[IndexProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe0099e8467539a6e2f069ea6050b20dff6001d0f164c35e8462bb1ac89933ec(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85fb51ba26c092709c22e625df8f0c3d7ddc6d4f8573add467eb9b28057aaa05(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de0a7311656f4f59dbb0f6d5fabff8accd2590e0a8a86638abe8f130f7d9e513(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87a3553e99bb30490cd4d8a4606bb24823b1f2d5fb7a923d6a3196ad70dacb9c(
    *,
    full_text_index: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIndex.FullTextIndexProperty, typing.Dict[builtins.str, typing.Any]]],
    logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    key_indices: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIndex.KeyIndicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    log_reduce: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c79bb65dcabce61b887a71b17ddce83bdae93928e2a65252e7a2b7ff3a264b9e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[LogstoreProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4819a641daf7e13ef67f1ca8aba9bf9daa97a9b6f6bf87db2c491ea964a8ab2d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3907773295dae84236972692e98a0f4e19c06288b0c7e971b4b42fd028a79f23(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6575c5bd4c8649af556d46f576b114c83075df19f43c2ad52a8915fcf3e0d08e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e93c4fefc36d5232872c87439488763bf3f8c4c3075cdb5894f83c2d2de01d77(
    *,
    logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    append_meta: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_split: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_tracking: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_conf: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLogstore.EncryptConfProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    max_split_shard: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preserve_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70ffb82ed17c7a61e3451a40493e2f4eeb542c6ff00318fd972681920c0f24b9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[LogtailConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bce28cb37dca3b188ab1c4190d91291d7b95226077f0f373ae9cb3718d92008(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__794da1afe04df34b32ac3cf92ad804fc69514d7425102eafd6052e76252e296f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbf4fabf5156910534681ebdd7576f325839005a55a047a034daadd789f40a36(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__997427b30c5163225c21712ca6967753c2240e9b45aec519ef99002bd95d1ebd(
    *,
    logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    logtail_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    clone_from: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLogtailConfig.CloneFromProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    raw_config_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b22aba27590c9ba9fcef78ece9af9628932bed672c0ab16db139b31d1392669e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[MachineGroupProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdd3311afd17e3a59194661486f30543ffcbaaa5c49d29047d33a38c35815d36(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d5ed476f62390ba690522348d6a65415175a730415674468d7aaebf57dfece3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98fd3efc09ef4dbba35839091f369814fac7b72400aa8929d949e67e29e3a69a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45ed99b8d188d732f608210e6fa1bc867af7e5ee0e1bab8d04237b6137de3303(
    *,
    group_attribute: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    machine_identify_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    machine_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4663a674839438b2c47edf7b54c23c2beedb0d1ce18df1282b31edadf5d78587(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MetricStoreProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bfc3193f58c0ed824da7ad355984019b4874ffcdd10c5e28202775f5c785676(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__591fec34b75126c09821718c2c1d0a3d01f2790cec0ed087c7439a1db98bea0b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b49b818fbe7de55c6b649152c09e7687bf9bac62c570f68e3381bf70df597148(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b34e84ca87f2fe6236aeb3933401db5149795129f06227666f5ad165a9ae952e(
    *,
    logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    preserve_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e32cf16ee60c37ed93c9be32ed37b470cd4f2b87ad4591d2365820e6e85c2f4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[OssExportProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c17e2c1d5bee5a7645cb536c6b72a3e699d1e3220f034b322d34484c697e96b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff1e1662f7231c00f8140c5984e40b269862ff8a903542089033823f8190f6ab(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a8138bb85ca3fd279026f0fe563f232e36f1047c3fa2d29ee50d3ca43e5d528(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6a0102cc134107f8a469346b66ae16476c7793f79488f1ed460e243412cb149(
    *,
    configuration: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOssExport.ConfigurationProperty, typing.Dict[builtins.str, typing.Any]]],
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    export_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84b10e7629487db9ed8e8662cb3adfa2fb8c189a3b73e81841b93cc9d3528955(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[OssExternalStoreProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f610aa1e71c1ffb7fd03fb0312c56f0ebfbc91f7722f5d546ee30a21c14e8cee(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__445b9b5a2acd853826f5482268566ed0a4a0b7bde505b8f357a1bde5da307e7c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__975db080475635cdefaa35b08b71054d1570011d01d21d4f5cd93377833fc66e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adfd0599cc3c73e8ab9a893bfceea55f0e2707b3118c3403cf5cac46c0606547(
    *,
    access_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    columns: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOssExternalStore.ColumnsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    external_store_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    objects: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    store_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43e5ccce68dcd7589fe7a912c535fededac7de18ffe6efb56ce3a0e02ca34050(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b404a7fc68a551042ca03d53c70be52efb941cc7331be5829aa55fa0e949228(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1aca078affd68839b225e193f0a7af17e0c76843bcb1fd2781e6d81c08236b01(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6bf6f2bf1d5ca611db460eab6b9b83946d23b6f32e40dfe9ef727037f1b3a7a7(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8200cc4deccd66b4f1d77b8d6692341d01973dca3ef46fe9678865407d439cb(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosProject.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f45c30271d08f2072a8cdd4bd869e1af143f636de5b548c827e3e4c3811716be(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RdsExternalStoreProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de0040264d853ff6b9721712e1bd8bc3f1c37b593416eae6d1f3abb62ef2d7bd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d6d36ad86e8ef0fcb47b9ef25c2211598bcd32557ab40fe4ab5717dde969e55(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c69997dd367d228e9a93156ee300a581b602e3ec8349b2e52d952d28e472f26d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d57139427ea3e418ac52ab7176ee4af6dd0557475d270847f2d012479c62e84(
    *,
    db: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    external_store_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    store_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    table: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d81c9e3194e6b74ce23c4c5e1d279882e3252bf091e874c82783f7ac748f7177(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAlertProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4d410b4f4685a4baf0479d010a853ff24bfbd0f3059de40d98068a808e88a7b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__916f1f24d97236db3a911f4c9e173175fefd41025b668e4820e1d7d21c45adc6(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAlert.DetailProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41eac6e8840febf9281354bd51a1d0951f6fbff1e70327787d45e0481fd96b11(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ceefc40fd026b604c27ac8617a5f924b8bed63bdd4be5315c6519368d5fb177(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d177d30c91b26129266385e50775754752a8632d3f8c4221bd5d6c21c5b479cd(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c40c5940d9d97be9c83588103df6b0efbb235317d46fe5b6ac39a04a0f362866(
    *,
    dashboard: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    query_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.QueryListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    annotations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.AnnotationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    auto_annotation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.GroupConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    join_configurations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.JoinConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    labels: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.LabelsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    mute_until: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    no_data_fire: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    no_data_severity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notification_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.NotificationListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    notify_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policy_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.PolicyConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    send_resolved: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    severity_configurations: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.SeverityConfigurationsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    throttling: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1b980fb01df01e7cca013f9fc86e5c17aad18f9d87e2e9ca54b93c028f419d2(
    *,
    configuration: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.ConfigurationProperty, typing.Dict[builtins.str, typing.Any]]],
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    schedule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.ScheduleProperty, typing.Dict[builtins.str, typing.Any]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    state: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9baca7159b8bd19387ed97626c68cdfd774f1dcc1af7da6401a45e579625eb5a(
    *,
    condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    count_condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8335fbd7beb94c51b7a74abf2a0515bdf8c2144e3face1e0111afd38cc5a617d(
    *,
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    fields: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb37763eb7980adc3f4162a2b98986b2371ec6bc9b4ec74553a9d5d56b84b542(
    *,
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    condition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__330c80b091e838652d1dcd3174153eabe55351c1bf74e4246a6dd874081b732b(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0dadac77daffa12d08cfcd4cc632a75631f1d14dbf49037a5890a74c08721c3a(
    *,
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    content: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mobile_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cea1347ca092dea0f8a2d7a1806f9c9f6eb5df8ef4f23212cc08f852fedee5df(
    *,
    action_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alert_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    use_default: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86fafbbbc10fca3015f28a29fa7dc2f5489989dc36e8bf3ed1fd392f86183ea6(
    *,
    end: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    query: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    start: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    time_span_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    chart_title: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dashboard_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_store: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    power_sql_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    store: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    store_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c34ed5f1de3c4967fda894df32f3f1b97edb2df72eb5c71d737b6cd739f64af7(
    *,
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cron_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    day_of_week: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hour: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    run_immediately: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e55c1d8adc9c7e907a04150d234949970efec6488cf020183afce9f2050ff11(
    *,
    severity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    eval_condition: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.EvalConditionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e604851b523ce98d9c9ba9fcf69e0fe38558dfd63c154b23e62b9e4fd4d6fc93(
    *,
    detail: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAlert.DetailProperty, typing.Dict[builtins.str, typing.Any]]],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be2133a7cf1f199681a7fe74dd560b109406022dad7bea3042489e0034a35dc8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosApplyConfigToMachineGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe251e09b0fc2e85f6e790399a06cf82d60cc1f9a3e09a263a2a11e5110738a4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad4e141f0c62780e02a6d37240cae998eb287add36782d84871573b0ae969c58(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30b716a11fc60ae769f44c954c8efdfae53cf934597adcbcb98a24e8d0602f7b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9f8a87a2f0f569408590ffc26efaef5982dce3f5eebb9ab6d6ba0dbd50a5135(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c777153b3ae0ff5ffb51374409be2ab6448452d10758f417c5329807b05ee59(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__192cc019a9c4b40b582b57524bf78829b5f94fc33f62ab700eb3a8624aae6ef5(
    *,
    config_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__890a1962056ff122d07ae419445879d7b2f5faea95741af30a499a3ff32f8a4e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAuditProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7ca55328c22e0103dc0a42399f0d4567e9ac1fcab9df4f14765320fec062de9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf33293395b9373c6ef70b59b742a68b6ac28cf041f036cc99ae2ed229816e75(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__faa37e69e70f953f7646bf82e0ce6ca88468f7b105492d9208b709aac0572e0d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e569cc2500a074f550f2f545e5f8f1d51ac4f94cf82972b5600a446a45a65dcc(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAudit.VariableMapProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f94fdcbe12723d6ae915c332b0c83101ceb1891bfa990a8d85b7f04d119445d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e86dadc77abd9f0591b0907ef25e31e7aad62ae1ae0ba4279815f3fb59a7e2d(
    *,
    actiontrail_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    actiontrail_openapi_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    actiontrail_openapi_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    actiontrail_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    actiontrail_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alb_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alb_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alb_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alb_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alb_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    apigateway_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    apigateway_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    apigateway_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    apigateway_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    apigateway_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    appconnect_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    appconnect_op_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    appconnect_op_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    appconnect_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    appconnect_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bastion_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bastion_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bastion_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bastion_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bastion_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudconfig_change_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudconfig_change_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudconfig_noncom_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudconfig_noncom_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudfirewall_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudfirewall_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudfirewall_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudfirewall_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudfirewall_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudfirewall_vpc_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudfirewall_vpc_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cps_callback_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cps_callback_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cps_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cps_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cps_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_bgp_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_bgp_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_coo_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_coo_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_coo_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_coo_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_coo_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_dip_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_dip_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dns_intranet_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dns_intranet_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dns_intranet_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dns_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dns_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_audit_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_audit_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    idaas_mng_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    idaas_mng_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    idaas_mng_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    idaas_user_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    idaas_user_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    idaas_user_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_audit_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_audit_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_event_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_event_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_event_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_event_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_event_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_ingress_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_ingress_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_ingress_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_ingress_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    k8_s_ingress_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_metering_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_metering_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_metering_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_metering_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_metering_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_error_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_error_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_error_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_perf_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_perf_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_perf_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_perf_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_perf_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_slow_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_slow_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_slow_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_slow_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_slow_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    polardb_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_error_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_error_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_error_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_perf_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_perf_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_perf_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_perf_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_perf_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_slow_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_slow_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_slow_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_slow_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_slow_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rds_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    redis_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    redis_audit_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    redis_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    redis_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    redis_audit_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    redis_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    redis_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_crack_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_dns_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_dns_query_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_http_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_local_dns_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_login_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_network_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_process_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_security_alert_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_security_hc_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_security_vul_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_session_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_snapshot_account_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_snapshot_port_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_snapshot_process_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sas_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slb_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slb_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slb_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slb_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slb_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slb_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slb_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_flow_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_flow_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_flow_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    waf_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    waf_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    waf_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    waf_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    waf_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d2861046ac4d48cde619a94d8919ee5e9c24ee45791046b89dfc9fb8d1d8e42(
    *,
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    variable_map: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAudit.VariableMapProperty, typing.Dict[builtins.str, typing.Any]]],
    multi_account: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0304bf3cc74fbe555d821d45de1ef478ab49cfa1847b1f4c43bf91df1ba600a6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosConsumerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59ef8ab62b7d0e9beeb4da701f2fc338413abd5c40e2711c32d5162d726363a2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab1b519357bca0f53e04fe896a879c09a7a84a84faf3acf9a504a43ad8603597(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7651d657f8217329cd09813a440a61c5f99c1d5574d14df8b7e1d9bb62fb5f1e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__204dad7212e4785a5425a937a332a179fbccd72b26764c63d387186684a0e9e8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3eec5fb8fc538f1cd712f71c90e8456b91843e63ceeb6d74ee361122fe0c140a(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb487776662df267a99af2f87dda302186400980e302cb005adde7da87ccc301(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59e50fbc9080a27d572e7d725223eb0d4aff036201accbd01b09b645007c2e3c(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8d56dbe93a9f4e723f866685ba374512505787b49203a6aa4be298891fe5fff(
    *,
    consumer_group: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    order: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    timeout: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd50f65d29bc70c859f0193198038e1f8bb1d06f1d48b13646eaa5811c34cb78(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDashboardProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b10123e297b0bd87f1531d795fd616db36165eb2a822dde28d1600151f9de981(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb09229de9b13f454f82a24993cb6f24401ab5ff300dea9120fd22c4c1b1f00f(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8fb543f50a85a4b565866c57626719892e7d61e88ec6377a6c4af0202933f36(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__439bbc6870978e93eed81f405e3a75c5b7326485ec7a80dd8cc17c0baa2f9958(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9bc5d0198c94fb52870bd05f1791ac5581591fdafa04b4bb0dc7eb818a3352c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cddded3fddc15c08b72183294f32f51b7a0e7b61f692adeb6a21c0a0218bcb95(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe911883fffd2344bcc81368339aa13d9893f1deb704301f8c77ff1eee5bd1fb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc97c1c3bf010a5ce2fbb4b8c6229fafd53acb09a877429a7944c70bfacb1d6b(
    *,
    charts: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
    dashboard_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cee91076e193c92146eb93c8756d807308a573c4dbb6f640f4b797dfb8d86278(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEtlProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7a340b1b1e4c697934de0451aa1c7331e64e5611f505f966eca4918488b3faf(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92b196e0ce9e6d731e7b057fb07e10c8d062fc90c9811e8171730711a8519252(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEtl.ConfigurationProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__986a3f1614fc9039f94c6acfc7cc2e274d14a302f44b81e5d712c83e7a11fa97(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f49a3ca5092a23e35b5970fa51b5c37c42a2b2ad56a93a3e8840ca9794b119dc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e52fe6ab379e81e2db7402e819733676b20a0117dabc665ac6cdfd4e5743a38(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__229bf768ee665446a15e05cf25e084765eda239e0a64f9a08bf09bc458142561(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be98996241ebe2d3e1a5ba2f9e4142cd1d6144eed0260bf66ee0a87290a8e876(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEtl.ScheduleProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d3b541beec74566db83233cc704409d70bd0c0bcfa2433c7495d8ef9d8a8d4a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf246d0e31ea2a23bbf398a5a71e102a739d43371572c597135c8dcda16be38e(
    *,
    logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    script: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sinks: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEtl.SinksProperty, typing.Dict[builtins.str, typing.Any]]]]],
    from_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    to_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f64a84148b18d95ef18365a2ad3a1752c45ce6b9a05fd9e1b973a8e1408a8b0(
    *,
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__632876a1e42214bb020ccdf46163e7d34055ebb30c52a08d926414bf4286d93e(
    *,
    logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd5c0c77487f9a99e8a5949ee53700c39bb2b387d8d7e298f528d5e470c58217(
    *,
    configuration: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEtl.ConfigurationProperty, typing.Dict[builtins.str, typing.Any]]],
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    schedule: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEtl.ScheduleProperty, typing.Dict[builtins.str, typing.Any]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37f495e2bfa9abf956c9392aa2f8709463c449c5ffe8d1de60b88201775d05b2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosIndexProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1efa356708c9f6976afd733ef3e2533a8e4020bc02341fe33b8bd384d056d5e2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2e15e2874891bfbfad283076b534ecb7c53ce77135f5d3994b67571fcdd79dd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a8297738a61654c125b945e7df17d6cad7f9cd343e54f113699bbe43ccbb991(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIndex.FullTextIndexProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d63092da3741744d0b1ebed6e91eb3c4fd0593ea747e0819d73ebf13535c1f0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14a0325c6a3c22d152d3d73a42f1a710e7e61a24165f79c4253c762286834e9f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68bbf95f114dcf8be54931485e82ed1b47dff468ee5621f09d278bd53637fa9a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosIndex.KeyIndicesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2f49703976a6c4004246fcd06b4f1f6163ab03e8268d04cc94c3b84bcf57894(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de2ec08454981a62199bef98eb856a556b723526f9b8cbd3effd3b1434903aee(
    *,
    enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    case_sensitive: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delimiter: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    include_chinese: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16dc17dd234ed1b812f66947478d6c879cb3bcd68450b5807a20ada37bdbd3af(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_analytics: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bfe03b0f2c5fecef23eff4c706134418d426969d7b16ca2278a2ce16a185e5f5(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alias: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    case_sensitive: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delimiter: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_analytics: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    include_chinese: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    json_key_indices: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIndex.JsonKeyIndicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61e9320e6265a141ad3fb19c272fe7dbcee64aea49c5aa2626e4a841feaf24a8(
    *,
    full_text_index: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIndex.FullTextIndexProperty, typing.Dict[builtins.str, typing.Any]]],
    logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    key_indices: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosIndex.KeyIndicesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    log_reduce: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e99911c25ef1771030dc1aff0f4622acd22c72d91b62967fa50502445e9e1daa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLogstoreProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca09612fbd1dfb6ce94c68f4b31b1bded3e41747535c836851bef796f56df9c4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14be6e6178234d789a03b622398e2e0eaf87d9efe1f02684dac49283119aab2d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3205ff0bf4813b85ce8caf586d88d9b95deaa5732d8977ac73d8dad4b9e5c28(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c24dca99c400b487486acc38e61d30ae7ec5214830dbb65bd3337f17503c5018(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b10d2e874bbb32709b515f8358a31b727241714cdd02fa054b1e442a14a39bb(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc147794358c6c51ac6aa1d7c1074f4c04d3262317196ea5d5dde593d82dedd3(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e1de55c3c6af4f5945029917237529f54392d50bbe587726e3ca6840d885861(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__047500645b3f2e3bd6f3df19b1e2d99c848f6e0ddeaaec1485ea51d26d0ae32b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLogstore.EncryptConfProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9f1f593938163ac49aa924abe5ce358144fb41168fcbce43ecb941981086b44(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86f55052f62460929912008f0ff8e9835f88d740cfbff2f247ca65d44c9f963d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e01696a95b514f403c6b21a31c83062a1b24103a25b8c2b71af35ab88cfedf69(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3c5cd42a790ab0c0dac531af4c4a4d54f2cc88ce3f45b01e342a6aa26ebd1bf(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__929b5c2fd95bd3f831fb38f2913dabd6bd5c794c02f0fc118e338374b4781987(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae51c1b1297fbcd609b31020090e99e91eedd6d795bdd27e4c53cc18e344dbca(
    *,
    enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    encrypt_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_cmk_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLogstore.UserCmkInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89cfea88e93938bdb7c0d2d2d439b7b999aa37d643de878d5be444b97822a2d6(
    *,
    arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cmk_key_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc4a4748fe1c43946564ba15ce1137dc87e445eaf58614d72a09430b459eaa25(
    *,
    logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    append_meta: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_split: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_tracking: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_conf: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLogstore.EncryptConfProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    max_split_shard: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preserve_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__575fec4ea1be80faa42157f7d7b3093633a76abde41983322c5b96de52d32d2e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLogtailConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd20e01bfc8fafd3d9ef0862e32ea2b942dfc68850bf99f291266b9c1ddf3b73(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffdd50dd56ad6630720b6e1e78b901edf9fd66a198cd451aa191c330de151f27(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e0d43703eba35b9974f8ba13a49fcab9ac3ae87f9fcd64eace9d2bb1ead7308(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ffaa0a6a0821b6dc58b230f81bb91e403e31dfff4f523a402e6badf6f91a84d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__590d9229743075c4733038a888fe2fa8e51d03916378e60a3ba509cec4905c7b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ec9f6e431392df03d37d1080860050758a7a6a1ad0bf9c990d5eced75808a06(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLogtailConfig.CloneFromProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e92dd84454d18182ce5e90a291f1a400193d965f8abe0aed4ae8b6bbc6c3147c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd4c3d39edca26d97f75583f415b7fd36790ab2630c2fd89da5aa92326dfb58a(
    *,
    logtail_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25087996a9532cdffeaa27214286e1df397df759a1757848ad254cac7bf2da39(
    *,
    logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    logtail_config_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    clone_from: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLogtailConfig.CloneFromProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    raw_config_data: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a42b2eab7a43080f80c9908f46208e45e112912f1f3385791472173f57e8dbb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMachineGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f9451afe70285e91b7c4676ad7a92580ee42afd3fa5d1c377d5d1cf5d5e5695(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__191cdef9c79284db9e62826a25fe4229f5db0b87ccb1ec4b8a599c475e350130(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbcd9d6c08c05685f10ba2c33faa1fad8d60203f4158289a2dcd092af2455688(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a20e5e4f569064875d96d43eb1bdcc7d0f5c53d0260467eff1d7d1518a9450d0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__097cf54e1bfa9aa585ca89c8278c59b7713d7fac9c54e4f6dc91ca5c88e2c1b0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2d2ada03e20b922d7af0991c424ec372a87aa9f3a32cab6b08e1171c0a86e07(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34bc65b21c8bbb7d82df291218b293f229090fab039191b5cab300b966323345(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bda85b8de49bb54c758eac251b9c0988d269fc90fa73de41eed1a53638f410a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__885aeb7c14b65270b96554da6f93ec97bace9e50aa88e9e316d540661d983a65(
    *,
    group_attribute: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    machine_identify_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    machine_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fddef050da68afb68b22771ca25cd858e8927bacb6fc4c39a3d3d078db07a8f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMetricStoreProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9e91cdc2567a239becec870c41e56bbc6918cebaa2832385d1871e60f60aa4e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db4efdbe966d4dc5e514607d183d9a0c3d5caede43ce41faab4c9263bc9b2483(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c528355f24501c7d849ddc151f2aea435743eb479f1bc73959f42913238e00e2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79d73d74a7f726d08fdb3e14b3779123666ba8c822da3886de5906b78c44053a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4489138315151e5ccc92958a670d850b5e0cff5b3d34ba6212f6321b747ef1b3(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa964e589700e8f21cacf38ca48de0dc419be0996952e7a6a3f616753ccbe56f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8e94b098142b0de758fb4a71f509b9dda865ccdfc467aa64f9a3fa729379371(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e37eb04ea66385b49a63e0c05eff511770563a72306240e160632f2f28ef914(
    *,
    logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    preserve_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea879597e30b3db30749cbd6bfedf7a4bff1f0d54398f13921169b280992cc04(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosOssExportProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dedd1a0fa4b4c09c3305a969d2ad63cccbf8c88f3072ac74935b67e27f2fa465(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff764e517ed0ff13d37b25563ae5d7a1d726f6e604e6c961e767ee4bd5514dc4(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOssExport.ConfigurationProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__849d3fb46a9456589e2b0b61046bb03737827c30ec761a2dff2470d548a4d620(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5eb703fa81ac049d3a5f3e66313853f6e223a8b27137de1d16cc147a5f9c8d85(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f63a2505b34d11a45309b559fa5ddd54040b628b13f749f6fdee6d7c84b66abf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc7ccfc58fd92ce2a3ab71548bbc07d96d9c49157934cda350f148530dfc7619(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17c175292f8f43c03930ab3a48b7f13cc609f05c1920003a47fe8a8e0190a4fb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b15509f9b78f23955e0f4a448457348940c26320c8a2c31529ff56a20ebd763d(
    *,
    logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    role_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sink: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOssExport.SinkProperty, typing.Dict[builtins.str, typing.Any]]],
    from_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    to_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0879f40bf0c76f3639cef763b62681af0e7c61619b12bcb7a33f809ffa5b68bd(
    *,
    bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    buffer_interval: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    buffer_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    content_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    role_arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    compression_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    content_detail: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    path_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    path_format_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    suffix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39bd01f9cd9e5525844f29b1d91dd56303a318a88bc94ec7a05bf2bfeaf6ec9a(
    *,
    configuration: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOssExport.ConfigurationProperty, typing.Dict[builtins.str, typing.Any]]],
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    export_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ed3928e312d833b049f6593af7e984ab80b71a60e7c31daccde8e7dc78c0cca(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosOssExternalStoreProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da905b97d614da518f25793aa1af8df3ea80049f94059415a4adf4c328021a5a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bf87e910dde51bbaa79f1efd1f3b29e4d7aa99202458442fcb5cc5c845bed60(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3d7649048f5d597d1ae379bd042987d03b040f79d5c1ea1b4ddd405f4f2cf0b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__581958b2abcaccad8c01e043fb9ec19ac6efca2b1c96a2d9866d0ab1ebcd8d1e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90f8f4d181fb01c07f6c9df9ae4383cbd95fb7e1e986f661262ec17093fbd3a9(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosOssExternalStore.ColumnsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22863a74231788ceae641d67b0ba3f7a5551a39777fe29f84540cc7b197fa063(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac291df688083b21e8e6538186d60756ba99b738a15e213d91fc0a91f186d0ea(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a7e30e026e7935aca8a8062e70ec2c1e8fe435419b91e1d8283ac5b8cada673(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ef50a813478fdb33c4af22a85930f07f743b279fe0b9d9350b39a6904ba331a(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dec154ac3547b7c908a796bb334e430036bbb71bfcdfe46eafcd704c9b7a19f1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94268538f60caa38b6a62da3682c5908c22386340443328746b4ec00585df65f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d203e018d753fd92855b00ef7dc7f6e986712034cbe3f6ca68f762c53a9e3b1b(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df5e3f1a1009a620a786adbe10d68c91bb1cd8f0a64dce2a64ca83f8eba65b2b(
    *,
    access_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    access_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    bucket: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    columns: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosOssExternalStore.ColumnsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    external_store_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    objects: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    store_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38a7af9ea5b5e764f37121b3cf403526a1b4c66420c7ffe80556610eb94b0a84(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1641ef3b0f008269d7cb1f8ccf79d180e6e1852ace6ec26ff20ecedb3f9211e6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c029aa59f998b498df772c9774bc3430dc84a3a13158252d7ad7148b90b03ce(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb8e142c132b888d5c4654d9eb94dc54768a0e63c44f4e76c074cbc180e5b4b9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__741a6867f8ead76cfa8aa36d0f015dcfc0e0c7b1f2dee4503a3d07e59fd79663(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26f055a2c2f4717089f86145879345e33573886f27696c8af3de79916d58bef4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee99e7f83f274e4af8b94da300d0857a70b31c0f660516b84f8ea6a7e64f4d64(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6a59f8bd6ba8a6d93d290f3c4b11c612773d74d83efba92159a8e4a30881df7(
    value: typing.Optional[typing.List[RosProject.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a72e6dcd789c2dcaa2d07ca250a132f64d678c64115e8f4b55c76eb1514f9857(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3784af050a0cb65f900ea3b984feccd3c0a8f0f3db206be5c1e9d19d884b8593(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_redundancy_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosProject.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81a4f6f5f0d44701fb67027d6d7da91f3f751adb6e28eed8a815ab3c1726bf33(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRdsExternalStoreProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7604a540dd9a1f23c3f6f7b79f6da4313cab0aef827635b507385059d1601e6b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__580dea44c5a26558ebe0eb435991b0644f9370ae4fbb89c74731ca678a887315(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bd7ae06b545b3fc00e8b0fb0f9d73dad99bad06e8c7cdbb28afc40fc0d4874d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e81d6a0e5cd9092db1d4c206168207b1d33f3d67f068f301374ba6c838a48108(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__497b03f8844ab6408a341aa7e4dbae280c8d9988db3d5db4b9f9c23d7e4a00b9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da9b3e9e2a64bed5c19ea4c67c67f6f20ff47c729c09478e00e01aecd31a23dd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40f915ea827766a5868eb8c25d2f858756f2542c5c6c0b9d9d5db5f4d1616652(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f101bdcdbb7f739baa05366a9294751c07c6905ab2cc10574cae420ed8fbc28(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65eab8555d6be827ba113e58615c6c4d7c78a156bdbb6fb1ce706369de3fac4e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55ffff0b908969cae2a9930538e6b21590efff9d0b88eee11b60caba38460cbe(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d01e6bbb27c50d2b6dc911efbcf5f63d858de71dd92a8a48210e6b4d4f18a2ed(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a0ded7f2cadb551a1253cadd55a2944e7c3f852afa88494fddadff15b389239(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86ecddb79ebab06e143336934108c9bda273b1b116b6de458181ef5a6af64fe6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d2da78249baf86a9d0f8f7437892a9dbb70b8f6b3e1edfa441a84b3884733ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f805b82501177616596daa623068fbaaf06ead162290e2a738c8debe18fc3fec(
    *,
    db: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    external_store_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    store_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    table: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63cdff2941d2aaa0d3b23c7fabd077a489003541fce47432b25840ad2a14d8d4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSavedsearchProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__077eb76bb7d0d0917657a66a47111e98ce71cc38cd7e5d6307fed8a926aaa871(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6510412b2082ebfacd12a3b3700d095cef8fce737dc28b19dbf3b2f4a8336f5(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSavedsearch.DetailProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2eec3d6125611bdd1f3ca67b4e0c7fc7e60c9843679896b1471e59893a5bd7c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__667d871155eff750a2e1b7608da42b671b6a20219fb7a87d4e9cb785f21c3b73(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59ae1b270bae267d4f788fad936d5b73b37f3acc3c0df7c1dac27b6a8a4336f2(
    *,
    logstore: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    savedsearch_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    search_query: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f47599eb1ddc82dff23faeca78a8ccd7dc22cd8c98219b7f48612be6ae539736(
    *,
    detail: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSavedsearch.DetailProperty, typing.Dict[builtins.str, typing.Any]]],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11ea6542a1112f6270736fd1644b14177980047dc8b0a50162fe9adf109cbd34(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosServiceLogProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__246d4c3649dd8ae261ef245d497c79717961332d04ee16e093883fb55f1526a5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__006c6bfc9145a29785503b124d75c475f7c9f6d54faeb69a1066117f0f6b6cb1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08a7484fbd2aefea923f1f98f09ed77f5f12478cf643c8dc7bde2e45b1a52391(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c61684a994ee18b2f8d59e3f5e5a6cc73d1467a482712a97321756eeead3381(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b255c28387ced04a770936f10cb1a4d3652ac0791888bf7781b37a6f1909365(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e1d0c72d24d9da607d9cf3b0073bc66a3a730221e837e243b579cf8e592a9eb(
    *,
    log_storage_location: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_log_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__458a07583ab8bee446484154b86ec9ad5f79b3e3be831442878c01ff66e71e74(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SavedsearchProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af3d9c9667225f0a9598ec8eb075c55af7cfac7555cc6a7ca893ac30d89c9cd7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4927d0a1cec60a01a9f26deb91397d7b06cbbe742d6c089515512591d5cc35a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26f0f0ecffd73e02ef06c5e6c9d48a254bed6a33d0998ac35bba5d3f981e44ab(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6972516e071b7a7b27a7772549622bc99bef356a2b30bc2d18d026172e6ed28(
    *,
    detail: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSavedsearch.DetailProperty, typing.Dict[builtins.str, typing.Any]]],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d835d7c96459073bd23e7c5292863c148a0c422c3ce183904b660a71e2b05e94(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ServiceLogProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb7792b6bdb71993ea7cd79fe5316a1fa1d702191091629a781f8668d37b4a8e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ff81993a17a503b0fca57d11e217707110b56842ef033e72a61875376065f01(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc82b5d43f1ab5177ee87e84b2420c137ec7dc8e5beb6e60b2d8ce7bbe10f8b0(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e445b1911fd955910b039122caed025658354ab4af1f8dc5053219aeb2209ec(
    *,
    log_storage_location: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_log_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dc90d5eb990de440a55f36fefa7ba92d25bf22b7c503f361ce5506d11d4cad0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AlertProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a32d514ce1fd50bcab5bb05bc49e581858350b029e0429600d7ecdce5c0ae1ba(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5426954a3a27c64fb19721cf1fda09934cb8d0e33c622864832c9d9b64dfd3ca(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4832d9f0f4383e2b083f7b629233eb6264a539d5bbb2ffd3b1f55bc3acd0278(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__939f798867cdbdd3ccac4a71da46d977541b7535df2acc8acf96d4b2fb1532d8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ApplyConfigToMachineGroupProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da4b4fc47c172ef704dbdc8f469b9c3d7fc3efc68ba3b8367f7c76e96ee04eb1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e83a6480710419f88bfae1e7d0085e5b3d65dea98bcbdcf3884a2872492eb920(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad5fe09c0223cc11d4288108285a900c06a25afed0579a2535a0f820b62690d1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f71af29470adc4f3830048e02c84c908818932ae9d7e9fe3cb445d358ec121ce(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AuditProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d48d4b503fb7d83d588601a32c8724ca7f722c2e474409dfe95db502e1b17672(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a781e4f65be36bd55afd7d4efc9bfba902479169f8e05c3ab2c6cac19b5a0b1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__277d1e5cdc798ae870ee9730920690bf78915370258b5e7235a738c89c9bf968(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b506f3af12249fe4bde09fe41ef72514a797d1e01143bd38284f38704594c507(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ConsumerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4ebc1213d28bdab1ea167b40c5d9dd864904bce7182e96d6cf43d24bc0261d8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b12cdc4bf4a36bb86630f27562aaee9360b3a096785d95c94e33e037b4de00df(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__194ec7298341de01ac7e60775cf797ffb2f871de41ed4a8956b9a929204a77e1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a612850618f1228ee78250a54ce5b64a134718cdc0866e17c6c5241dcd92cd8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DashboardProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a3ccec76de7b0dc10bd53567ea1578a9eb5a069da6d3889946ff323f2ed63d0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20ab4bf7b470d33206b81bfefc35d979fd95c46f14083574f2a4852e93a043a8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bc7ef2a7b02f0d417e740cc9232de316505a3558dac8fbf3347ca65e7ffdcfa(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29fc8efa98adb9273024b08d52cba929ca77378561006bf0c9c31f8298610651(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EtlProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__268b6be42bd4cdf35f2e37ba799c834ed54e1fcdcb1cfe8679b42e7b762b863c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ebdcbb5fdfddc51ed95ab84f94e359a0be9e4b1472cffab11fdbc71c19fa675(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a13255b4319224c758baa9f5c349fc87ad8a87c4ff69dfb7919ef4603da125b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
