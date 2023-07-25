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


class Flows(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fnf.datasource.Flows",
):
    '''A ROS resource type:  ``DATASOURCE::FNF::Flows``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["FlowsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::FNF::Flows``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eead93028d57f108448a147fd997578aec2541a07e92e90295d6c886880e58b9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFlowNames")
    def attr_flow_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FlowNames: The list of flow names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowNames"))

    @builtins.property
    @jsii.member(jsii_name="attrFlows")
    def attr_flows(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Flows: The details about flows.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlows"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fnf.datasource.FlowsProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class FlowsProps:
    def __init__(self) -> None:
        '''Properties for defining a ``DATASOURCE::FNF::Flows``.'''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FlowsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFlows(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fnf.datasource.RosFlows",
):
    '''A ROS template type:  ``DATASOURCE::FNF::Flows``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFlowsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::FNF::Flows``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__468d29bf975e6be4da667eb3e11d9093cbab502e30c907e7477f46b69330c9da)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1fc02d06ef7cc6d46b2f47c81ccf3828d741fa3e3f71c343faf307fed96b3e74)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowNames")
    def attr_flow_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FlowNames: The list of flow names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowNames"))

    @builtins.property
    @jsii.member(jsii_name="attrFlows")
    def attr_flows(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Flows: The details about flows.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlows"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__83cc0cdcab50a90a56cb0806d42e221d53c6aa7fff9705a2b40c49cff3ff77d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fnf.datasource.RosFlowsProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class RosFlowsProps:
    def __init__(self) -> None:
        '''Properties for defining a ``DATASOURCE::FNF::Flows``.'''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFlowsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSchedules(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fnf.datasource.RosSchedules",
):
    '''A ROS template type:  ``DATASOURCE::FNF::Schedules``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSchedulesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::FNF::Schedules``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d4f9febb90149e490eb1feb98c3b9d86180276d6f9c13742ab9586d9bbb9eee)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fed51440b20a8dc98e182ab0948fd7a0241e3e1f54e712b37aed994ac565b485)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrScheduleNames")
    def attr_schedule_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScheduleNames: The list of schedule names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScheduleNames"))

    @builtins.property
    @jsii.member(jsii_name="attrSchedules")
    def attr_schedules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Schedules: The queried time-based schedules.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSchedules"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__f0b19cb06cb48bdb3a4f99608ccb9b2b59001170fc8c582e08f732671c698114)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="flowName")
    def flow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        flowName: The name of the flow that is bound to the time-based schedule.
        The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
        The name can contain letters, digits, underscores (*), and hyphens (-).
        The name must start with a letter or an underscore (*).
        The name is case-sensitive.
        The name must be 1 to 128 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "flowName"))

    @flow_name.setter
    def flow_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edf0a27483dbeeb7ce553e8c511207543a4cf8049e2d4995ace9c11ec69f4ddf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fnf.datasource.RosSchedulesProps",
    jsii_struct_bases=[],
    name_mapping={"flow_name": "flowName"},
)
class RosSchedulesProps:
    def __init__(
        self,
        *,
        flow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DATASOURCE::FNF::Schedules``.

        :param flow_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f75b36ae35e30f659d56f0ca403a71aa5e79c1059070ef620df8d33bb1c06d19)
            check_type(argname="argument flow_name", value=flow_name, expected_type=type_hints["flow_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "flow_name": flow_name,
        }

    @builtins.property
    def flow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        flowName: The name of the flow that is bound to the time-based schedule.
        The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
        The name can contain letters, digits, underscores (*), and hyphens (-).
        The name must start with a letter or an underscore (*).
        The name is case-sensitive.
        The name must be 1 to 128 characters in length.
        '''
        result = self._values.get("flow_name")
        assert result is not None, "Required property 'flow_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSchedulesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Schedules(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fnf.datasource.Schedules",
):
    '''A ROS resource type:  ``DATASOURCE::FNF::Schedules``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SchedulesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::FNF::Schedules``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3e4253cad6e5640158be0429a3362ac5ab71932e79e6fd4c466b571dbf832c7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrScheduleNames")
    def attr_schedule_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScheduleNames: The list of schedule names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScheduleNames"))

    @builtins.property
    @jsii.member(jsii_name="attrSchedules")
    def attr_schedules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Schedules: The queried time-based schedules.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSchedules"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fnf.datasource.SchedulesProps",
    jsii_struct_bases=[],
    name_mapping={"flow_name": "flowName"},
)
class SchedulesProps:
    def __init__(
        self,
        *,
        flow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DATASOURCE::FNF::Schedules``.

        :param flow_name: Property flowName: The name of the flow that is bound to the time-based schedule. The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values: The name can contain letters, digits, underscores (*), and hyphens (-). The name must start with a letter or an underscore (*). The name is case-sensitive. The name must be 1 to 128 characters in length.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37a78ee2b720bceb92d6fd8e93b57f94ccb38610f8f833e7811dd2652719c176)
            check_type(argname="argument flow_name", value=flow_name, expected_type=type_hints["flow_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "flow_name": flow_name,
        }

    @builtins.property
    def flow_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property flowName: The name of the flow that is bound to the time-based schedule.

        The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
        The name can contain letters, digits, underscores (*), and hyphens (-).
        The name must start with a letter or an underscore (*).
        The name is case-sensitive.
        The name must be 1 to 128 characters in length.
        '''
        result = self._values.get("flow_name")
        assert result is not None, "Required property 'flow_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SchedulesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Flows",
    "FlowsProps",
    "RosFlows",
    "RosFlowsProps",
    "RosSchedules",
    "RosSchedulesProps",
    "Schedules",
    "SchedulesProps",
]

publication.publish()

def _typecheckingstub__eead93028d57f108448a147fd997578aec2541a07e92e90295d6c886880e58b9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[FlowsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__468d29bf975e6be4da667eb3e11d9093cbab502e30c907e7477f46b69330c9da(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFlowsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fc02d06ef7cc6d46b2f47c81ccf3828d741fa3e3f71c343faf307fed96b3e74(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83cc0cdcab50a90a56cb0806d42e221d53c6aa7fff9705a2b40c49cff3ff77d1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d4f9febb90149e490eb1feb98c3b9d86180276d6f9c13742ab9586d9bbb9eee(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSchedulesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fed51440b20a8dc98e182ab0948fd7a0241e3e1f54e712b37aed994ac565b485(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0b19cb06cb48bdb3a4f99608ccb9b2b59001170fc8c582e08f732671c698114(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edf0a27483dbeeb7ce553e8c511207543a4cf8049e2d4995ace9c11ec69f4ddf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f75b36ae35e30f659d56f0ca403a71aa5e79c1059070ef620df8d33bb1c06d19(
    *,
    flow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3e4253cad6e5640158be0429a3362ac5ab71932e79e6fd4c466b571dbf832c7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SchedulesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37a78ee2b720bceb92d6fd8e93b57f94ccb38610f8f833e7811dd2652719c176(
    *,
    flow_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
