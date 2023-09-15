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


class FlowProjects(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.datasource.FlowProjects",
):
    '''A ROS resource type:  ``DATASOURCE::EMR::FlowProjects``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["FlowProjectsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::EMR::FlowProjects``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e957aaf21cfc3ae937e91828e41291df7fe8a45403c89b7223b82fdded86d660)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFlowProjectIds")
    def attr_flow_project_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FlowProjectIds: The list of flow project IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowProjectIds"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowProjects")
    def attr_flow_projects(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FlowProjects: The list of flow projects.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowProjects"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.datasource.FlowProjectsProps",
    jsii_struct_bases=[],
    name_mapping={
        "flow_project_id": "flowProjectId",
        "flow_project_name": "flowProjectName",
    },
)
class FlowProjectsProps:
    def __init__(
        self,
        *,
        flow_project_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::EMR::FlowProjects``.

        :param flow_project_id: Property flowProjectId: The first ID of the resource.
        :param flow_project_name: Property flowProjectName: Project name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38f8478b118ca07818f3e79738cfe0f53806774070cfa361e5a775ed2df52159)
            check_type(argname="argument flow_project_id", value=flow_project_id, expected_type=type_hints["flow_project_id"])
            check_type(argname="argument flow_project_name", value=flow_project_name, expected_type=type_hints["flow_project_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if flow_project_id is not None:
            self._values["flow_project_id"] = flow_project_id
        if flow_project_name is not None:
            self._values["flow_project_name"] = flow_project_name

    @builtins.property
    def flow_project_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property flowProjectId: The first ID of the resource.'''
        result = self._values.get("flow_project_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property flowProjectName: Project name.'''
        result = self._values.get("flow_project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FlowProjectsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFlowProjects(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-emr.datasource.RosFlowProjects",
):
    '''A ROS template type:  ``DATASOURCE::EMR::FlowProjects``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFlowProjectsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::EMR::FlowProjects``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__855b05da8c5758abee4e6d077e07921c1b8c9a5fd97d2d181fe428c031bdcc25)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6d244fd8dc3e8ab3b14fa473ec1cde10f46662fb33aa774245d4b684af585e1a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowProjectIds")
    def attr_flow_project_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FlowProjectIds: The list of flow project IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowProjectIds"))

    @builtins.property
    @jsii.member(jsii_name="attrFlowProjects")
    def attr_flow_projects(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FlowProjects: The list of flow projects.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFlowProjects"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2628f8d78d342bbb8beb6b63d3088f145f93c1eff680fd5c0b3cbb61e03a4467)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="flowProjectId")
    def flow_project_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowProjectId: The first ID of the resource
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "flowProjectId"))

    @flow_project_id.setter
    def flow_project_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__492877c596ddc4ab1602a02c9639c28eed1c27b54f4ec460040dbe2167bef355)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowProjectId", value)

    @builtins.property
    @jsii.member(jsii_name="flowProjectName")
    def flow_project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowProjectName: Project name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "flowProjectName"))

    @flow_project_name.setter
    def flow_project_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4546da45d7bc712b9d68fc97ca09d1f84b5023a38f32b1f7af5eae1f5681948)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "flowProjectName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-emr.datasource.RosFlowProjectsProps",
    jsii_struct_bases=[],
    name_mapping={
        "flow_project_id": "flowProjectId",
        "flow_project_name": "flowProjectName",
    },
)
class RosFlowProjectsProps:
    def __init__(
        self,
        *,
        flow_project_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        flow_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::EMR::FlowProjects``.

        :param flow_project_id: 
        :param flow_project_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c97dada1b4afdb1bca965c399e818470287f774e0e1348b5cab6cb7384aa68a)
            check_type(argname="argument flow_project_id", value=flow_project_id, expected_type=type_hints["flow_project_id"])
            check_type(argname="argument flow_project_name", value=flow_project_name, expected_type=type_hints["flow_project_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if flow_project_id is not None:
            self._values["flow_project_id"] = flow_project_id
        if flow_project_name is not None:
            self._values["flow_project_name"] = flow_project_name

    @builtins.property
    def flow_project_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowProjectId: The first ID of the resource
        '''
        result = self._values.get("flow_project_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def flow_project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: flowProjectName: Project name.
        '''
        result = self._values.get("flow_project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFlowProjectsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "FlowProjects",
    "FlowProjectsProps",
    "RosFlowProjects",
    "RosFlowProjectsProps",
]

publication.publish()

def _typecheckingstub__e957aaf21cfc3ae937e91828e41291df7fe8a45403c89b7223b82fdded86d660(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[FlowProjectsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38f8478b118ca07818f3e79738cfe0f53806774070cfa361e5a775ed2df52159(
    *,
    flow_project_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__855b05da8c5758abee4e6d077e07921c1b8c9a5fd97d2d181fe428c031bdcc25(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFlowProjectsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d244fd8dc3e8ab3b14fa473ec1cde10f46662fb33aa774245d4b684af585e1a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2628f8d78d342bbb8beb6b63d3088f145f93c1eff680fd5c0b3cbb61e03a4467(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__492877c596ddc4ab1602a02c9639c28eed1c27b54f4ec460040dbe2167bef355(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4546da45d7bc712b9d68fc97ca09d1f84b5023a38f32b1f7af5eae1f5681948(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c97dada1b4afdb1bca965c399e818470287f774e0e1348b5cab6cb7384aa68a(
    *,
    flow_project_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
