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


class Logstores(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.datasource.Logstores",
):
    '''A ROS resource type:  ``DATASOURCE::SLS::Logstores``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LogstoresProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::SLS::Logstores``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1773c0564d2af19a910611cfa0ec7b22c610df74efabf900f32b21d18fe61595)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLogstores")
    def attr_logstores(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Logstores: The list of logstores.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogstores"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.datasource.LogstoresProps",
    jsii_struct_bases=[],
    name_mapping={"project": "project", "logstore_name": "logstoreName"},
)
class LogstoresProps:
    def __init__(
        self,
        *,
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        logstore_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLS::Logstores``.

        :param project: Property project: Project name.
        :param logstore_name: Property logstoreName: Logstore name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bbb118cec9bc1a96a1206f5438ebc3cbf9fdcfb141dd2fec3ef059446c5676e)
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "project": project,
        }
        if logstore_name is not None:
            self._values["logstore_name"] = logstore_name

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property project: Project name.'''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def logstore_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logstoreName: Logstore name.'''
        result = self._values.get("logstore_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LogstoresProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Projects(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.datasource.Projects",
):
    '''A ROS resource type:  ``DATASOURCE::SLS::Projects``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ProjectsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::SLS::Projects``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecd07f73db06dba5d3641aa12f387a8cd18dbc908a58866d14aaabeddf5d73e1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrProjectNames")
    def attr_project_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProjectNames: The list of project names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectNames"))

    @builtins.property
    @jsii.member(jsii_name="attrProjects")
    def attr_projects(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Projects: The list of projects.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjects"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.datasource.ProjectsProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class ProjectsProps:
    def __init__(self) -> None:
        '''Properties for defining a ``DATASOURCE::SLS::Projects``.'''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProjectsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLogstores(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.datasource.RosLogstores",
):
    '''A ROS template type:  ``DATASOURCE::SLS::Logstores``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLogstoresProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::SLS::Logstores``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd1c69f086ac2f02accdaf083db5649a27164a2c5df7c860c2df1871d9b0fb3d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ea9b3acbe677b6d161d3c0fcde5170ff611e1afc1b678bbe63332f0752540bbb)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLogstores")
    def attr_logstores(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Logstores: The list of logstores.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogstores"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__86b3c1143351c5a4ca9ebeab7c28584e5f006534c80459ae635f0d65ca00b27e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="project")
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: Project name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "project"))

    @project.setter
    def project(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c4570797736cc785b82bd8cef332c599ccbfabb21c72a0f5cb5e6258ab395e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "project", value)

    @builtins.property
    @jsii.member(jsii_name="logstoreName")
    def logstore_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logstoreName: Logstore name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logstoreName"))

    @logstore_name.setter
    def logstore_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb0c65b637f2f13273f377bc157f4607171f428b65203394003653da944c50a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logstoreName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.datasource.RosLogstoresProps",
    jsii_struct_bases=[],
    name_mapping={"project": "project", "logstore_name": "logstoreName"},
)
class RosLogstoresProps:
    def __init__(
        self,
        *,
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        logstore_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SLS::Logstores``.

        :param project: 
        :param logstore_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d671445ed4cc689493177ecd760c85676f1f4187f21c8ee78659a96d5d7540be)
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument logstore_name", value=logstore_name, expected_type=type_hints["logstore_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "project": project,
        }
        if logstore_name is not None:
            self._values["logstore_name"] = logstore_name

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: Project name.
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def logstore_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logstoreName: Logstore name.
        '''
        result = self._values.get("logstore_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLogstoresProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProjects(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sls.datasource.RosProjects",
):
    '''A ROS template type:  ``DATASOURCE::SLS::Projects``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProjectsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::SLS::Projects``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__162b01871e5937832a25ca37575ec9bb644a9224bd4b84372181e3dde329d3a7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5cf5393a37718793e9c5d5115c4e673be0e3485bb839867b98296dcfd2f77da5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectNames")
    def attr_project_names(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProjectNames: The list of project names.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectNames"))

    @builtins.property
    @jsii.member(jsii_name="attrProjects")
    def attr_projects(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Projects: The list of projects.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjects"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__c735e0cff073c79b611ba3034ef5223f07870e29aae636e9c72a841590e840a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sls.datasource.RosProjectsProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class RosProjectsProps:
    def __init__(self) -> None:
        '''Properties for defining a ``DATASOURCE::SLS::Projects``.'''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProjectsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Logstores",
    "LogstoresProps",
    "Projects",
    "ProjectsProps",
    "RosLogstores",
    "RosLogstoresProps",
    "RosProjects",
    "RosProjectsProps",
]

publication.publish()

def _typecheckingstub__1773c0564d2af19a910611cfa0ec7b22c610df74efabf900f32b21d18fe61595(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[LogstoresProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bbb118cec9bc1a96a1206f5438ebc3cbf9fdcfb141dd2fec3ef059446c5676e(
    *,
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    logstore_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecd07f73db06dba5d3641aa12f387a8cd18dbc908a58866d14aaabeddf5d73e1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ProjectsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd1c69f086ac2f02accdaf083db5649a27164a2c5df7c860c2df1871d9b0fb3d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLogstoresProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea9b3acbe677b6d161d3c0fcde5170ff611e1afc1b678bbe63332f0752540bbb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86b3c1143351c5a4ca9ebeab7c28584e5f006534c80459ae635f0d65ca00b27e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c4570797736cc785b82bd8cef332c599ccbfabb21c72a0f5cb5e6258ab395e2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb0c65b637f2f13273f377bc157f4607171f428b65203394003653da944c50a2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d671445ed4cc689493177ecd760c85676f1f4187f21c8ee78659a96d5d7540be(
    *,
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    logstore_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__162b01871e5937832a25ca37575ec9bb644a9224bd4b84372181e3dde329d3a7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProjectsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5cf5393a37718793e9c5d5115c4e673be0e3485bb839867b98296dcfd2f77da5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c735e0cff073c79b611ba3034ef5223f07870e29aae636e9c72a841590e840a0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass
