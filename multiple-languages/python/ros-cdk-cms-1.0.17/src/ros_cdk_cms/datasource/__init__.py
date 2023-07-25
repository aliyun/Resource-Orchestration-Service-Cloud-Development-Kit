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


class AlarmContacts(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.datasource.AlarmContacts",
):
    '''A ROS resource type:  ``DATASOURCE::CMS::AlarmContacts``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["AlarmContactsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::CMS::AlarmContacts``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__974d6ca9b859d34b74369f0d33d9e032f5e80c22045629eb03da4f4c05d7abb3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAlarmContactNames")
    def attr_alarm_contact_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AlarmContactNames: The list of alarm contact names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAlarmContactNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAlarmContacts")
    def attr_alarm_contacts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AlarmContacts: The list of alarm contacts.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAlarmContacts"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.datasource.AlarmContactsProps",
    jsii_struct_bases=[],
    name_mapping={"alarm_contact_name": "alarmContactName"},
)
class AlarmContactsProps:
    def __init__(
        self,
        *,
        alarm_contact_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CMS::AlarmContacts``.

        :param alarm_contact_name: Property alarmContactName: The name of the alert contact.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab3672bd49847a9d0db1d3cc16b362e8f55bf46c3ae19daf19603253a0eefac1)
            check_type(argname="argument alarm_contact_name", value=alarm_contact_name, expected_type=type_hints["alarm_contact_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if alarm_contact_name is not None:
            self._values["alarm_contact_name"] = alarm_contact_name

    @builtins.property
    def alarm_contact_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property alarmContactName: The name of the alert contact.'''
        result = self._values.get("alarm_contact_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AlarmContactsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MonitorGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.datasource.MonitorGroups",
):
    '''A ROS resource type:  ``DATASOURCE::CMS::MonitorGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["MonitorGroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::CMS::MonitorGroups``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5c32909dc7716f08894a2fe04724f9ffe64cb3056c13ce858e01d0d077ff21c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupIds")
    def attr_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupIds: The list of group IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrMonitorGroups")
    def attr_monitor_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MonitorGroups: The list of monitor groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMonitorGroups"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.datasource.MonitorGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "dynamic_tag_rule_id": "dynamicTagRuleId",
        "group_id": "groupId",
        "monitor_group_name": "monitorGroupName",
        "type": "type",
    },
)
class MonitorGroupsProps:
    def __init__(
        self,
        *,
        dynamic_tag_rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        monitor_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CMS::MonitorGroups``.

        :param dynamic_tag_rule_id: Property dynamicTagRuleId: The ID of the tag rule.
        :param group_id: Property groupId: The IDs of the application groups.
        :param monitor_group_name: Property monitorGroupName: The name of the application group.
        :param type: Property type: The type of the application group. Valid values: custom: a self-managed application group. ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster. kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9f614dedaf103ab407030768ca42aee5a7af98f2ddbd65fad12e992a104d20c)
            check_type(argname="argument dynamic_tag_rule_id", value=dynamic_tag_rule_id, expected_type=type_hints["dynamic_tag_rule_id"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument monitor_group_name", value=monitor_group_name, expected_type=type_hints["monitor_group_name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dynamic_tag_rule_id is not None:
            self._values["dynamic_tag_rule_id"] = dynamic_tag_rule_id
        if group_id is not None:
            self._values["group_id"] = group_id
        if monitor_group_name is not None:
            self._values["monitor_group_name"] = monitor_group_name
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def dynamic_tag_rule_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dynamicTagRuleId: The ID of the tag rule.'''
        result = self._values.get("dynamic_tag_rule_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupId: The IDs of the application groups.'''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def monitor_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property monitorGroupName: The name of the application group.'''
        result = self._values.get("monitor_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: The type of the application group.

        Valid values:
        custom: a self-managed application group.
        ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
        kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MonitorGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Namespaces(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.datasource.Namespaces",
):
    '''A ROS resource type:  ``DATASOURCE::CMS::Namespaces``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["NamespacesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::CMS::Namespaces``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea72f240458b3900e66bbaf3da3c2391a96d96e8a925522f9d10431b872e88d7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNamespaces")
    def attr_namespaces(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Namespaces: The list of namespaces.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaces"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.datasource.NamespacesProps",
    jsii_struct_bases=[],
    name_mapping={"namespace": "namespace"},
)
class NamespacesProps:
    def __init__(
        self,
        *,
        namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CMS::Namespaces``.

        :param namespace: Property namespace: Indicator warehouse name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ed6bbbc50d40fdbc28c383563c70bb8f4b63e13a79c32a523bb431a780a9eb7)
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if namespace is not None:
            self._values["namespace"] = namespace

    @builtins.property
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespace: Indicator warehouse name.'''
        result = self._values.get("namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NamespacesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAlarmContacts(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.datasource.RosAlarmContacts",
):
    '''A ROS template type:  ``DATASOURCE::CMS::AlarmContacts``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAlarmContactsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::CMS::AlarmContacts``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad495d1c88ae9029766cb641780ea6b9c8695b8d11a8a79c79ea1e598a56f263)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0badb4e72377b197967a6ae6b700edc73765c122cae3431ffc2b3f40ec73075a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAlarmContactNames")
    def attr_alarm_contact_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AlarmContactNames: The list of alarm contact names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAlarmContactNames"))

    @builtins.property
    @jsii.member(jsii_name="attrAlarmContacts")
    def attr_alarm_contacts(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AlarmContacts: The list of alarm contacts.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAlarmContacts"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__a176e29295a3bae411973bacafd59c11724e2a8fd375354fb82f9c30768979d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="alarmContactName")
    def alarm_contact_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alarmContactName: The name of the alert contact.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "alarmContactName"))

    @alarm_contact_name.setter
    def alarm_contact_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ed104c732226ff7744dcadc2fecae2f841ca8715a721ab0c6683a775d59014c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alarmContactName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.datasource.RosAlarmContactsProps",
    jsii_struct_bases=[],
    name_mapping={"alarm_contact_name": "alarmContactName"},
)
class RosAlarmContactsProps:
    def __init__(
        self,
        *,
        alarm_contact_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CMS::AlarmContacts``.

        :param alarm_contact_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b9ac3e43f9ec93b292987ca0eb115d639925c7ccf485055994255ec89750648)
            check_type(argname="argument alarm_contact_name", value=alarm_contact_name, expected_type=type_hints["alarm_contact_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if alarm_contact_name is not None:
            self._values["alarm_contact_name"] = alarm_contact_name

    @builtins.property
    def alarm_contact_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alarmContactName: The name of the alert contact.
        '''
        result = self._values.get("alarm_contact_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAlarmContactsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMonitorGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.datasource.RosMonitorGroups",
):
    '''A ROS template type:  ``DATASOURCE::CMS::MonitorGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMonitorGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::CMS::MonitorGroups``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aae273538038a333e4063e6ba0d1c1edd222b47d39786fa75d7c8e47aad5a3d6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ac71533e56ce995375c83a29a78fc4c8496e4ab9ad5003be574447d3fffb96c9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupIds")
    def attr_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupIds: The list of group IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrMonitorGroups")
    def attr_monitor_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MonitorGroups: The list of monitor groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMonitorGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3ac9b5ddfeec149c71b3b9eebecfd6f8f7074624795928f6543305c576d22012)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dynamicTagRuleId")
    def dynamic_tag_rule_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dynamicTagRuleId: The ID of the tag rule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dynamicTagRuleId"))

    @dynamic_tag_rule_id.setter
    def dynamic_tag_rule_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cdbc4c02db89e32096dd99b4449653e3eaa926271110c8bbbf0d97034f4aaa2c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dynamicTagRuleId", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: The IDs of the application groups.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2592c87d692f67cf9fdecca82e9f1a8e95ff22d52cec2c47a8b34e82e9191d12)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="monitorGroupName")
    def monitor_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: monitorGroupName: The name of the application group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "monitorGroupName"))

    @monitor_group_name.setter
    def monitor_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb8f410ad194a0e4939af00badb2071441b841d536b73d067341475553e9453e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "monitorGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the application group. Valid values:
        custom: a self-managed application group.
        ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
        kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08868c86a5940ebab10ad1caca0fe76bb835a6c7d745e81f723da1807e4ed812)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.datasource.RosMonitorGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "dynamic_tag_rule_id": "dynamicTagRuleId",
        "group_id": "groupId",
        "monitor_group_name": "monitorGroupName",
        "type": "type",
    },
)
class RosMonitorGroupsProps:
    def __init__(
        self,
        *,
        dynamic_tag_rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        monitor_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CMS::MonitorGroups``.

        :param dynamic_tag_rule_id: 
        :param group_id: 
        :param monitor_group_name: 
        :param type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__731f5bddef36dabd6d3c16df08c3cedce2fbd95c4cfdd0c96fbd442c53ece3f4)
            check_type(argname="argument dynamic_tag_rule_id", value=dynamic_tag_rule_id, expected_type=type_hints["dynamic_tag_rule_id"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument monitor_group_name", value=monitor_group_name, expected_type=type_hints["monitor_group_name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dynamic_tag_rule_id is not None:
            self._values["dynamic_tag_rule_id"] = dynamic_tag_rule_id
        if group_id is not None:
            self._values["group_id"] = group_id
        if monitor_group_name is not None:
            self._values["monitor_group_name"] = monitor_group_name
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def dynamic_tag_rule_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dynamicTagRuleId: The ID of the tag rule.
        '''
        result = self._values.get("dynamic_tag_rule_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupId: The IDs of the application groups.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def monitor_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: monitorGroupName: The name of the application group.
        '''
        result = self._values.get("monitor_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the application group. Valid values:
        custom: a self-managed application group.
        ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
        kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMonitorGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNamespaces(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.datasource.RosNamespaces",
):
    '''A ROS template type:  ``DATASOURCE::CMS::Namespaces``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNamespacesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::CMS::Namespaces``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2dcdec04774d31238619f0924defd816459bde03f11b53331b2170f73d2eafe5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0602f52e6ef007261862dff155d1190300ecd8d343e6dec1fefa67e580feb562)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaces")
    def attr_namespaces(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Namespaces: The list of namespaces.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaces"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8937c2edccd83c2a0a97bb70b300af930ad3d46b034edd13b0dc3cd45e1a8269)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespace: Indicator warehouse name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__174accfbe05857a345f6233fb2f074bb6b552862fe58d0472f212245c4c1a624)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.datasource.RosNamespacesProps",
    jsii_struct_bases=[],
    name_mapping={"namespace": "namespace"},
)
class RosNamespacesProps:
    def __init__(
        self,
        *,
        namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CMS::Namespaces``.

        :param namespace: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8302c6aefb33022136cf725624c7453d63f90d741a1e76f101fb8d8cfbacea2f)
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if namespace is not None:
            self._values["namespace"] = namespace

    @builtins.property
    def namespace(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespace: Indicator warehouse name.
        '''
        result = self._values.get("namespace")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNamespacesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSlsGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.datasource.RosSlsGroups",
):
    '''A ROS template type:  ``DATASOURCE::CMS::SlsGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSlsGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::CMS::SlsGroups``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2969361ca39ef48398fbcedffb339245a07608804de59392510e8d62309440e9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b0bb35aa69bba32bfc1f83f2e7f565176ca4979ebe318799d81a9e54b49f4302)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrSlsGroupNames")
    def attr_sls_group_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SlsGroupNames: The list of sls group names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlsGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrSlsGroups")
    def attr_sls_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SlsGroups: The list of sls groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlsGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3d761dc00dc397a74b632a474294830911950bc320745fd72b10e8b229ba1e6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="slsGroupName")
    def sls_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsGroupName: The name of the Logstore group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "slsGroupName"))

    @sls_group_name.setter
    def sls_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91300478d7d4911087ea264d8e3ee8474c867164edaf7ed3e1b541c62e3607eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slsGroupName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.datasource.RosSlsGroupsProps",
    jsii_struct_bases=[],
    name_mapping={"sls_group_name": "slsGroupName"},
)
class RosSlsGroupsProps:
    def __init__(
        self,
        *,
        sls_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CMS::SlsGroups``.

        :param sls_group_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70dae7d08bedf4b75e6dad478a76fe4eccf57edf547c5ee5900ecc2ce7965bb6)
            check_type(argname="argument sls_group_name", value=sls_group_name, expected_type=type_hints["sls_group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if sls_group_name is not None:
            self._values["sls_group_name"] = sls_group_name

    @builtins.property
    def sls_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsGroupName: The name of the Logstore group.
        '''
        result = self._values.get("sls_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSlsGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SlsGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cms.datasource.SlsGroups",
):
    '''A ROS resource type:  ``DATASOURCE::CMS::SlsGroups``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["SlsGroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::CMS::SlsGroups``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54ac10613537f0af3b21dde95605bbbd33fee81f68350dc4ad35d56458b3df6d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrSlsGroupNames")
    def attr_sls_group_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SlsGroupNames: The list of sls group names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlsGroupNames"))

    @builtins.property
    @jsii.member(jsii_name="attrSlsGroups")
    def attr_sls_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SlsGroups: The list of sls groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlsGroups"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cms.datasource.SlsGroupsProps",
    jsii_struct_bases=[],
    name_mapping={"sls_group_name": "slsGroupName"},
)
class SlsGroupsProps:
    def __init__(
        self,
        *,
        sls_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::CMS::SlsGroups``.

        :param sls_group_name: Property slsGroupName: The name of the Logstore group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__425c7d64afac48d35a1d4567798f0482dca3d086b59077101caddb85d14012e9)
            check_type(argname="argument sls_group_name", value=sls_group_name, expected_type=type_hints["sls_group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if sls_group_name is not None:
            self._values["sls_group_name"] = sls_group_name

    @builtins.property
    def sls_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property slsGroupName: The name of the Logstore group.'''
        result = self._values.get("sls_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SlsGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AlarmContacts",
    "AlarmContactsProps",
    "MonitorGroups",
    "MonitorGroupsProps",
    "Namespaces",
    "NamespacesProps",
    "RosAlarmContacts",
    "RosAlarmContactsProps",
    "RosMonitorGroups",
    "RosMonitorGroupsProps",
    "RosNamespaces",
    "RosNamespacesProps",
    "RosSlsGroups",
    "RosSlsGroupsProps",
    "SlsGroups",
    "SlsGroupsProps",
]

publication.publish()

def _typecheckingstub__974d6ca9b859d34b74369f0d33d9e032f5e80c22045629eb03da4f4c05d7abb3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AlarmContactsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab3672bd49847a9d0db1d3cc16b362e8f55bf46c3ae19daf19603253a0eefac1(
    *,
    alarm_contact_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5c32909dc7716f08894a2fe04724f9ffe64cb3056c13ce858e01d0d077ff21c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[MonitorGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9f614dedaf103ab407030768ca42aee5a7af98f2ddbd65fad12e992a104d20c(
    *,
    dynamic_tag_rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    monitor_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea72f240458b3900e66bbaf3da3c2391a96d96e8a925522f9d10431b872e88d7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[NamespacesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ed6bbbc50d40fdbc28c383563c70bb8f4b63e13a79c32a523bb431a780a9eb7(
    *,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad495d1c88ae9029766cb641780ea6b9c8695b8d11a8a79c79ea1e598a56f263(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAlarmContactsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0badb4e72377b197967a6ae6b700edc73765c122cae3431ffc2b3f40ec73075a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a176e29295a3bae411973bacafd59c11724e2a8fd375354fb82f9c30768979d2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ed104c732226ff7744dcadc2fecae2f841ca8715a721ab0c6683a775d59014c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b9ac3e43f9ec93b292987ca0eb115d639925c7ccf485055994255ec89750648(
    *,
    alarm_contact_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aae273538038a333e4063e6ba0d1c1edd222b47d39786fa75d7c8e47aad5a3d6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMonitorGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac71533e56ce995375c83a29a78fc4c8496e4ab9ad5003be574447d3fffb96c9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ac9b5ddfeec149c71b3b9eebecfd6f8f7074624795928f6543305c576d22012(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cdbc4c02db89e32096dd99b4449653e3eaa926271110c8bbbf0d97034f4aaa2c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2592c87d692f67cf9fdecca82e9f1a8e95ff22d52cec2c47a8b34e82e9191d12(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb8f410ad194a0e4939af00badb2071441b841d536b73d067341475553e9453e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08868c86a5940ebab10ad1caca0fe76bb835a6c7d745e81f723da1807e4ed812(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__731f5bddef36dabd6d3c16df08c3cedce2fbd95c4cfdd0c96fbd442c53ece3f4(
    *,
    dynamic_tag_rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    monitor_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2dcdec04774d31238619f0924defd816459bde03f11b53331b2170f73d2eafe5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNamespacesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0602f52e6ef007261862dff155d1190300ecd8d343e6dec1fefa67e580feb562(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8937c2edccd83c2a0a97bb70b300af930ad3d46b034edd13b0dc3cd45e1a8269(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__174accfbe05857a345f6233fb2f074bb6b552862fe58d0472f212245c4c1a624(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8302c6aefb33022136cf725624c7453d63f90d741a1e76f101fb8d8cfbacea2f(
    *,
    namespace: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2969361ca39ef48398fbcedffb339245a07608804de59392510e8d62309440e9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSlsGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0bb35aa69bba32bfc1f83f2e7f565176ca4979ebe318799d81a9e54b49f4302(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d761dc00dc397a74b632a474294830911950bc320745fd72b10e8b229ba1e6d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91300478d7d4911087ea264d8e3ee8474c867164edaf7ed3e1b541c62e3607eb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70dae7d08bedf4b75e6dad478a76fe4eccf57edf547c5ee5900ecc2ce7965bb6(
    *,
    sls_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54ac10613537f0af3b21dde95605bbbd33fee81f68350dc4ad35d56458b3df6d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[SlsGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__425c7d64afac48d35a1d4567798f0482dca3d086b59077101caddb85d14012e9(
    *,
    sls_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
