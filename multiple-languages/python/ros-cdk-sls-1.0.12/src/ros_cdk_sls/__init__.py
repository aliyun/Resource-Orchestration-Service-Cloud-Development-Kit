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


class Alert(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Alert",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Alert``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AlertProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Alert``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: Alert name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.AlertProps",
    jsii_struct_bases=[],
    name_mapping={"detail": "detail", "project": "project"},
)
class AlertProps:
    def __init__(
        self,
        *,
        detail: typing.Union[typing.Union["RosAlert.DetailProperty", typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Alert``.

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
    ) -> typing.Union["RosAlert.DetailProperty", _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property detail:.'''
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return typing.cast(typing.Union["RosAlert.DetailProperty", _ros_cdk_core_7adfd82f.IResolvable], result)

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


class ApplyConfigToMachineGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.ApplyConfigToMachineGroup",
):
    '''A ROS resource type:  ``ALIYUN::SLS::ApplyConfigToMachineGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ApplyConfigToMachineGroupProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
        '''Properties for defining a ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

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


class Audit(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Audit",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Audit``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AuditProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Audit``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DisplayName: Name of SLS log audit.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))


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
        '''Properties for defining a ``ALIYUN::SLS::Audit``.

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


class Dashboard(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Dashboard",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Dashboard``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DashboardProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Dashboard``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_dashboard_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DashboardName: Dashboard name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDashboardName"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DisplayName: Display name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))


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
        '''Properties for defining a ``ALIYUN::SLS::Dashboard``.

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


class Etl(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Etl",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Etl``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["EtlProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Etl``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: ETL name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))


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
        '''Properties for defining a ``ALIYUN::SLS::Etl``.

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


class Index(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Index",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Index``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["IndexProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Index``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
        '''Properties for defining a ``ALIYUN::SLS::Index``.

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


class Logstore(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Logstore",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Logstore``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LogstoreProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Logstore``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_logstore_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LogstoreName: Logstore name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogstoreName"))


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
        preserve_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Logstore``.

        :param logstore_name: Property logstoreName: Logstore name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param project_name: Property projectName: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param append_meta: Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log. Default to false.
        :param auto_split: Property autoSplit: Whether to automatically split the shard. Default to false.
        :param enable_tracking: Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information. Default to false.
        :param encrypt_conf: Property encryptConf: Data encryption config.
        :param max_split_shard: Property maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true. Allowed Values: 1-64.
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


class LogtailConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.LogtailConfig",
):
    '''A ROS resource type:  ``ALIYUN::SLS::LogtailConfig``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LogtailConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::LogtailConfig``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_applied_machine_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AppliedMachineGroups: Applied machine groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppliedMachineGroups"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Endpoint: Endpoint address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrLogtailConfigName")
    def attr_logtail_config_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LogtailConfigName: Logtail config name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogtailConfigName"))


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
        '''Properties for defining a ``ALIYUN::SLS::LogtailConfig``.

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


class MachineGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.MachineGroup",
):
    '''A ROS resource type:  ``ALIYUN::SLS::MachineGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["MachineGroupProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::MachineGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupName: GroupName of SLS.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProjectName: ProjectName of SLS.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectName"))


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
        '''Properties for defining a ``ALIYUN::SLS::MachineGroup``.

        :param group_attribute: Property groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
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

        The object value is groupToic and externalName
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


class MetricStore(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.MetricStore",
):
    '''A ROS resource type:  ``ALIYUN::SLS::MetricStore``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MetricStoreProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::MetricStore``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_logstore_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LogstoreName: Metric store name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogstoreName"))


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
        '''Properties for defining a ``ALIYUN::SLS::MetricStore``.

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


class Project(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Project",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Project``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Project``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: Project name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={"name": "name", "description": "description", "tags": "tags"},
)
class ProjectProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosProject.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Project``.

        :param name: Property name: Project name: 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_). 2. Must start and end with lowercase letters and numbers. 3. The name length is 3-63 characters.
        :param description: Property description: Project description: <>'"\\ is not supported, up to 64 characters.
        :param tags: Property tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8200cc4deccd66b4f1d77b8d6692341d01973dca3ef46fe9678865407d439cb)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if description is not None:
            self._values["description"] = description
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Project name: 1.

        Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Project description: <>'"\\ is not supported, up to 64 characters.'''
        result = self._values.get("description")
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


class RosAlert(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosAlert",
):
    '''A ROS template type:  ``ALIYUN::SLS::Alert``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAlertProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Alert``.

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
    ) -> typing.Union["RosAlert.DetailProperty", _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: detail:
        '''
        return typing.cast(typing.Union["RosAlert.DetailProperty", _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "detail"))

    @detail.setter
    def detail(
        self,
        value: typing.Union["RosAlert.DetailProperty", _ros_cdk_core_7adfd82f.IResolvable],
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
        detail: typing.Union[typing.Union[RosAlert.DetailProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Alert``.

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
    ) -> typing.Union[RosAlert.DetailProperty, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: detail:
        '''
        result = self._values.get("detail")
        assert result is not None, "Required property 'detail' is missing"
        return typing.cast(typing.Union[RosAlert.DetailProperty, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    '''A ROS template type:  ``ALIYUN::SLS::ApplyConfigToMachineGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApplyConfigToMachineGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

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
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
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
        '''Properties for defining a ``ALIYUN::SLS::ApplyConfigToMachineGroup``.

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
    '''A ROS template type:  ``ALIYUN::SLS::Audit``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAuditProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Audit``.

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
            "cloudfirewall_access_collection_policy": "cloudfirewallAccessCollectionPolicy",
            "cloudfirewall_access_policy_setting": "cloudfirewallAccessPolicySetting",
            "cloudfirewall_enabled": "cloudfirewallEnabled",
            "cloudfirewall_ti_enabled": "cloudfirewallTiEnabled",
            "cloudfirewall_ttl": "cloudfirewallTtl",
            "cps_callback_collection_policy": "cpsCallbackCollectionPolicy",
            "cps_callback_policy_setting": "cpsCallbackPolicySetting",
            "cps_enabled": "cpsEnabled",
            "cps_ti_enabled": "cpsTiEnabled",
            "cps_ttl": "cpsTtl",
            "ddos_coo_access_collection_policy": "ddosCooAccessCollectionPolicy",
            "ddos_coo_access_enabled": "ddosCooAccessEnabled",
            "ddos_coo_access_policy_setting": "ddosCooAccessPolicySetting",
            "ddos_coo_access_ti_enabled": "ddosCooAccessTiEnabled",
            "ddos_coo_access_ttl": "ddosCooAccessTtl",
            "drds_audit_collection_policy": "drdsAuditCollectionPolicy",
            "drds_audit_enabled": "drdsAuditEnabled",
            "drds_audit_policy_setting": "drdsAuditPolicySetting",
            "drds_audit_ti_enabled": "drdsAuditTiEnabled",
            "drds_audit_ttl": "drdsAuditTtl",
            "drds_sync_enabled": "drdsSyncEnabled",
            "drds_sync_ttl": "drdsSyncTtl",
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
            cloudfirewall_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudfirewall_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudfirewall_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudfirewall_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cloudfirewall_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cps_callback_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cps_callback_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cps_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cps_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cps_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_coo_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_coo_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_coo_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_coo_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ddos_coo_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_audit_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_audit_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            drds_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
            :param cloudfirewall_access_collection_policy: 
            :param cloudfirewall_access_policy_setting: 
            :param cloudfirewall_enabled: 
            :param cloudfirewall_ti_enabled: 
            :param cloudfirewall_ttl: 
            :param cps_callback_collection_policy: 
            :param cps_callback_policy_setting: 
            :param cps_enabled: 
            :param cps_ti_enabled: 
            :param cps_ttl: 
            :param ddos_coo_access_collection_policy: 
            :param ddos_coo_access_enabled: 
            :param ddos_coo_access_policy_setting: 
            :param ddos_coo_access_ti_enabled: 
            :param ddos_coo_access_ttl: 
            :param drds_audit_collection_policy: 
            :param drds_audit_enabled: 
            :param drds_audit_policy_setting: 
            :param drds_audit_ti_enabled: 
            :param drds_audit_ttl: 
            :param drds_sync_enabled: 
            :param drds_sync_ttl: 
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
                check_type(argname="argument cloudfirewall_access_collection_policy", value=cloudfirewall_access_collection_policy, expected_type=type_hints["cloudfirewall_access_collection_policy"])
                check_type(argname="argument cloudfirewall_access_policy_setting", value=cloudfirewall_access_policy_setting, expected_type=type_hints["cloudfirewall_access_policy_setting"])
                check_type(argname="argument cloudfirewall_enabled", value=cloudfirewall_enabled, expected_type=type_hints["cloudfirewall_enabled"])
                check_type(argname="argument cloudfirewall_ti_enabled", value=cloudfirewall_ti_enabled, expected_type=type_hints["cloudfirewall_ti_enabled"])
                check_type(argname="argument cloudfirewall_ttl", value=cloudfirewall_ttl, expected_type=type_hints["cloudfirewall_ttl"])
                check_type(argname="argument cps_callback_collection_policy", value=cps_callback_collection_policy, expected_type=type_hints["cps_callback_collection_policy"])
                check_type(argname="argument cps_callback_policy_setting", value=cps_callback_policy_setting, expected_type=type_hints["cps_callback_policy_setting"])
                check_type(argname="argument cps_enabled", value=cps_enabled, expected_type=type_hints["cps_enabled"])
                check_type(argname="argument cps_ti_enabled", value=cps_ti_enabled, expected_type=type_hints["cps_ti_enabled"])
                check_type(argname="argument cps_ttl", value=cps_ttl, expected_type=type_hints["cps_ttl"])
                check_type(argname="argument ddos_coo_access_collection_policy", value=ddos_coo_access_collection_policy, expected_type=type_hints["ddos_coo_access_collection_policy"])
                check_type(argname="argument ddos_coo_access_enabled", value=ddos_coo_access_enabled, expected_type=type_hints["ddos_coo_access_enabled"])
                check_type(argname="argument ddos_coo_access_policy_setting", value=ddos_coo_access_policy_setting, expected_type=type_hints["ddos_coo_access_policy_setting"])
                check_type(argname="argument ddos_coo_access_ti_enabled", value=ddos_coo_access_ti_enabled, expected_type=type_hints["ddos_coo_access_ti_enabled"])
                check_type(argname="argument ddos_coo_access_ttl", value=ddos_coo_access_ttl, expected_type=type_hints["ddos_coo_access_ttl"])
                check_type(argname="argument drds_audit_collection_policy", value=drds_audit_collection_policy, expected_type=type_hints["drds_audit_collection_policy"])
                check_type(argname="argument drds_audit_enabled", value=drds_audit_enabled, expected_type=type_hints["drds_audit_enabled"])
                check_type(argname="argument drds_audit_policy_setting", value=drds_audit_policy_setting, expected_type=type_hints["drds_audit_policy_setting"])
                check_type(argname="argument drds_audit_ti_enabled", value=drds_audit_ti_enabled, expected_type=type_hints["drds_audit_ti_enabled"])
                check_type(argname="argument drds_audit_ttl", value=drds_audit_ttl, expected_type=type_hints["drds_audit_ttl"])
                check_type(argname="argument drds_sync_enabled", value=drds_sync_enabled, expected_type=type_hints["drds_sync_enabled"])
                check_type(argname="argument drds_sync_ttl", value=drds_sync_ttl, expected_type=type_hints["drds_sync_ttl"])
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
        '''Properties for defining a ``ALIYUN::SLS::Audit``.

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


class RosDashboard(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosDashboard",
):
    '''A ROS template type:  ``ALIYUN::SLS::Dashboard``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDashboardProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Dashboard``.

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
        '''Properties for defining a ``ALIYUN::SLS::Dashboard``.

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
    '''A ROS template type:  ``ALIYUN::SLS::Etl``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEtlProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Etl``.

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
        '''Properties for defining a ``ALIYUN::SLS::Etl``.

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
    '''A ROS template type:  ``ALIYUN::SLS::Index``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosIndexProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Index``.

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
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
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
        '''Properties for defining a ``ALIYUN::SLS::Index``.

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
    '''A ROS template type:  ``ALIYUN::SLS::Logstore``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLogstoreProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Logstore``.

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
        preserve_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Logstore``.

        :param logstore_name: 
        :param project_name: 
        :param append_meta: 
        :param auto_split: 
        :param enable_tracking: 
        :param encrypt_conf: 
        :param max_split_shard: 
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
    '''A ROS template type:  ``ALIYUN::SLS::LogtailConfig``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLogtailConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::LogtailConfig``.

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
        '''Properties for defining a ``ALIYUN::SLS::LogtailConfig``.

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
    '''A ROS template type:  ``ALIYUN::SLS::MachineGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMachineGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::MachineGroup``.

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
        :Property: groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
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
        '''Properties for defining a ``ALIYUN::SLS::MachineGroup``.

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
        :Property: groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
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
    '''A ROS template type:  ``ALIYUN::SLS::MetricStore``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMetricStoreProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::MetricStore``.

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
        '''Properties for defining a ``ALIYUN::SLS::MetricStore``.

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


class RosProject(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosProject",
):
    '''A ROS template type:  ``ALIYUN::SLS::Project``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Project``.

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

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
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
    name_mapping={"name": "name", "description": "description", "tags": "tags"},
)
class RosProjectProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosProject.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLS::Project``.

        :param name: 
        :param description: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3784af050a0cb65f900ea3b984feccd3c0a8f0f3db206be5c1e9d19d884b8593)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if description is not None:
            self._values["description"] = description
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: Project name:

        1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        2. Must start and end with lowercase letters and numbers.
        3. The name length is 3-63 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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


class RosSavedsearch(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.RosSavedsearch",
):
    '''A ROS template type:  ``ALIYUN::SLS::Savedsearch``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSavedsearchProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Savedsearch``.

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
        '''Properties for defining a ``ALIYUN::SLS::Savedsearch``.

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


class Savedsearch(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.Savedsearch",
):
    '''A ROS resource type:  ``ALIYUN::SLS::Savedsearch``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SavedsearchProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLS::Savedsearch``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

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
    def attr_savedsearch_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SavedsearchName: Savedsearch name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSavedsearchName"))


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
        '''Properties for defining a ``ALIYUN::SLS::Savedsearch``.

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


__all__ = [
    "Alert",
    "AlertProps",
    "ApplyConfigToMachineGroup",
    "ApplyConfigToMachineGroupProps",
    "Audit",
    "AuditProps",
    "Dashboard",
    "DashboardProps",
    "Etl",
    "EtlProps",
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
    "Project",
    "ProjectProps",
    "RosAlert",
    "RosAlertProps",
    "RosApplyConfigToMachineGroup",
    "RosApplyConfigToMachineGroupProps",
    "RosAudit",
    "RosAuditProps",
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
    "RosProject",
    "RosProjectProps",
    "RosSavedsearch",
    "RosSavedsearchProps",
    "Savedsearch",
    "SavedsearchProps",
]

publication.publish()

def _typecheckingstub__4dc90d5eb990de440a55f36fefa7ba92d25bf22b7c503f361ce5506d11d4cad0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AlertProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3915aaafcbce9b37683554165f5ef18d4047883b83d2acc3696d4f04edbd3d00(
    *,
    detail: typing.Union[typing.Union[RosAlert.DetailProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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

def _typecheckingstub__2e841975a95f0caaef38704a787ff0fa3aa4f36c0404a05c0478c221b7b60a3f(
    *,
    config_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__ca39effacb160cba87db70b32051e2903b282cd4c0b9680d83ffa990931dad6d(
    *,
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    variable_map: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAudit.VariableMapProperty, typing.Dict[builtins.str, typing.Any]]],
    multi_account: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
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

def _typecheckingstub__29fc8efa98adb9273024b08d52cba929ca77378561006bf0c9c31f8298610651(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EtlProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
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

def _typecheckingstub__e93c4fefc36d5232872c87439488763bf3f8c4c3075cdb5894f83c2d2de01d77(
    *,
    logstore_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    append_meta: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_split: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_tracking: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypt_conf: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLogstore.EncryptConfProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    max_split_shard: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__43e5ccce68dcd7589fe7a912c535fededac7de18ffe6efb56ce3a0e02ca34050(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8200cc4deccd66b4f1d77b8d6692341d01973dca3ef46fe9678865407d439cb(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosProject.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
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
    value: typing.Union[RosAlert.DetailProperty, _ros_cdk_core_7adfd82f.IResolvable],
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
    detail: typing.Union[typing.Union[RosAlert.DetailProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable],
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
    cloudfirewall_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudfirewall_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudfirewall_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudfirewall_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloudfirewall_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cps_callback_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cps_callback_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cps_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cps_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cps_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_coo_access_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_coo_access_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_coo_access_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_coo_access_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ddos_coo_access_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_audit_collection_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_audit_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_audit_policy_setting: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_audit_ti_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_audit_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_sync_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    drds_sync_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__26f055a2c2f4717089f86145879345e33573886f27696c8af3de79916d58bef4(
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
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosProject.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
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

def _typecheckingstub__458a07583ab8bee446484154b86ec9ad5f79b3e3be831442878c01ff66e71e74(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SavedsearchProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
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
