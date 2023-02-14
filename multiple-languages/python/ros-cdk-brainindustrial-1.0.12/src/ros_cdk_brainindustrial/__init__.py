'''
## Aliyun ROS BRAININDUSTRIAL Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as BRAININDUSTRIAL from '@alicloud/ros-cdk-brainindustrial';
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


class PidOrganization(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-brainindustrial.PidOrganization",
):
    '''A ROS resource type:  ``ALIYUN::BrainIndustrial::PidOrganization``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PidOrganizationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::BrainIndustrial::PidOrganization``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a68e46e3024070f07bca6b6d9c8da5ecd8a64f2b25ab45bdb2bde9c63ad613f6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrParentPidOrganizationId")
    def attr_parent_pid_organization_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ParentPidOrganizationId: ParentPidOrganizationId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParentPidOrganizationId"))

    @builtins.property
    @jsii.member(jsii_name="attrPidOrganizationId")
    def attr_pid_organization_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PidOrganizationId: PidOrganizationId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidOrganizationId"))

    @builtins.property
    @jsii.member(jsii_name="attrPidOrganizationLevel")
    def attr_pid_organization_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PidOrganizationLevel: PidOrganizationLevel.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidOrganizationLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrPidOrganizationName")
    def attr_pid_organization_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PidOrganizationName: PidOrganizationName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidOrganizationName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-brainindustrial.PidOrganizationProps",
    jsii_struct_bases=[],
    name_mapping={
        "pid_organization_name": "pidOrganizationName",
        "parent_pid_organization_id": "parentPidOrganizationId",
    },
)
class PidOrganizationProps:
    def __init__(
        self,
        *,
        pid_organization_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        parent_pid_organization_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BrainIndustrial::PidOrganization``.

        :param pid_organization_name: Property pidOrganizationName: PidOrganizationName.
        :param parent_pid_organization_id: Property parentPidOrganizationId: ParentPidOrganizationId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54e1b2a8e5a0b32ff01731941ddfbb8e6a446d90912965a804278c433b5d9984)
            check_type(argname="argument pid_organization_name", value=pid_organization_name, expected_type=type_hints["pid_organization_name"])
            check_type(argname="argument parent_pid_organization_id", value=parent_pid_organization_id, expected_type=type_hints["parent_pid_organization_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "pid_organization_name": pid_organization_name,
        }
        if parent_pid_organization_id is not None:
            self._values["parent_pid_organization_id"] = parent_pid_organization_id

    @builtins.property
    def pid_organization_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property pidOrganizationName: PidOrganizationName.'''
        result = self._values.get("pid_organization_name")
        assert result is not None, "Required property 'pid_organization_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def parent_pid_organization_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property parentPidOrganizationId: ParentPidOrganizationId.'''
        result = self._values.get("parent_pid_organization_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PidOrganizationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PidProject(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-brainindustrial.PidProject",
):
    '''A ROS resource type:  ``ALIYUN::BrainIndustrial::PidProject``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PidProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::BrainIndustrial::PidProject``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70d9bb95a83b5076494fb185606ccce5fe4e80f7194f4363e09d6f9ed1af6050)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPidOrganizationId")
    def attr_pid_organization_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PidOrganizationId: PidOrganizationId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidOrganizationId"))

    @builtins.property
    @jsii.member(jsii_name="attrPidProjectDesc")
    def attr_pid_project_desc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PidProjectDesc: PidProjectDesc.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidProjectDesc"))

    @builtins.property
    @jsii.member(jsii_name="attrPidProjectId")
    def attr_pid_project_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PidProjectId: PidProjectId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidProjectId"))

    @builtins.property
    @jsii.member(jsii_name="attrPidProjectName")
    def attr_pid_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PidProjectName: PidProjectName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidProjectName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-brainindustrial.PidProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "pid_organization_id": "pidOrganizationId",
        "pid_project_name": "pidProjectName",
        "pid_project_desc": "pidProjectDesc",
    },
)
class PidProjectProps:
    def __init__(
        self,
        *,
        pid_organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pid_project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pid_project_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BrainIndustrial::PidProject``.

        :param pid_organization_id: Property pidOrganizationId: PidOrganizationId.
        :param pid_project_name: Property pidProjectName: PidProjectName.
        :param pid_project_desc: Property pidProjectDesc: PidProjectDesc.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ca247f5309b8d2e6462ecc74f1663d6bec898b679146edb112ffd9714599b2d)
            check_type(argname="argument pid_organization_id", value=pid_organization_id, expected_type=type_hints["pid_organization_id"])
            check_type(argname="argument pid_project_name", value=pid_project_name, expected_type=type_hints["pid_project_name"])
            check_type(argname="argument pid_project_desc", value=pid_project_desc, expected_type=type_hints["pid_project_desc"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "pid_organization_id": pid_organization_id,
            "pid_project_name": pid_project_name,
        }
        if pid_project_desc is not None:
            self._values["pid_project_desc"] = pid_project_desc

    @builtins.property
    def pid_organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property pidOrganizationId: PidOrganizationId.'''
        result = self._values.get("pid_organization_id")
        assert result is not None, "Required property 'pid_organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pid_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property pidProjectName: PidProjectName.'''
        result = self._values.get("pid_project_name")
        assert result is not None, "Required property 'pid_project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pid_project_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pidProjectDesc: PidProjectDesc.'''
        result = self._values.get("pid_project_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PidProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPidOrganization(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-brainindustrial.RosPidOrganization",
):
    '''A ROS template type:  ``ALIYUN::BrainIndustrial::PidOrganization``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPidOrganizationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::BrainIndustrial::PidOrganization``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f877a23982316e74e86a3fb558bc8f3b6d64efe835fd0e036a75e5010f39febd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d80b631f9d89b43d86942edd2d5a687850804d8f384a12e199998e5bcf18faae)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrParentPidOrganizationId")
    def attr_parent_pid_organization_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParentPidOrganizationId: ParentPidOrganizationId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParentPidOrganizationId"))

    @builtins.property
    @jsii.member(jsii_name="attrPidOrganizationId")
    def attr_pid_organization_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PidOrganizationId: PidOrganizationId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidOrganizationId"))

    @builtins.property
    @jsii.member(jsii_name="attrPidOrganizationLevel")
    def attr_pid_organization_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PidOrganizationLevel: PidOrganizationLevel
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidOrganizationLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrPidOrganizationName")
    def attr_pid_organization_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PidOrganizationName: PidOrganizationName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidOrganizationName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5fe5a3e9af08ad51249c3154e24288d558b68665f7a31af2c9b939bccec3162a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="pidOrganizationName")
    def pid_organization_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pidOrganizationName: PidOrganizationName
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "pidOrganizationName"))

    @pid_organization_name.setter
    def pid_organization_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0dbf82bc92cb7322fae7cd6764fe4d523d6469f517244c4d86111359b7939e9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pidOrganizationName", value)

    @builtins.property
    @jsii.member(jsii_name="parentPidOrganizationId")
    def parent_pid_organization_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parentPidOrganizationId: ParentPidOrganizationId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "parentPidOrganizationId"))

    @parent_pid_organization_id.setter
    def parent_pid_organization_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5099e5f52e2b54282653fe7cba56ef83da712b63cc1f5dbeb8fcc107ad5032e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parentPidOrganizationId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-brainindustrial.RosPidOrganizationProps",
    jsii_struct_bases=[],
    name_mapping={
        "pid_organization_name": "pidOrganizationName",
        "parent_pid_organization_id": "parentPidOrganizationId",
    },
)
class RosPidOrganizationProps:
    def __init__(
        self,
        *,
        pid_organization_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        parent_pid_organization_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BrainIndustrial::PidOrganization``.

        :param pid_organization_name: 
        :param parent_pid_organization_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ff3c559d3e146057d23bd6edd9a14747aa5952bbfcce94012e8f7ddd81050dd)
            check_type(argname="argument pid_organization_name", value=pid_organization_name, expected_type=type_hints["pid_organization_name"])
            check_type(argname="argument parent_pid_organization_id", value=parent_pid_organization_id, expected_type=type_hints["parent_pid_organization_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "pid_organization_name": pid_organization_name,
        }
        if parent_pid_organization_id is not None:
            self._values["parent_pid_organization_id"] = parent_pid_organization_id

    @builtins.property
    def pid_organization_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pidOrganizationName: PidOrganizationName
        '''
        result = self._values.get("pid_organization_name")
        assert result is not None, "Required property 'pid_organization_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def parent_pid_organization_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parentPidOrganizationId: ParentPidOrganizationId
        '''
        result = self._values.get("parent_pid_organization_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPidOrganizationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPidProject(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-brainindustrial.RosPidProject",
):
    '''A ROS template type:  ``ALIYUN::BrainIndustrial::PidProject``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPidProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::BrainIndustrial::PidProject``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f2b1afa90a16b4b02fe7f45772626629e071eec4bcfeb855c9aa93a1946bf73)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1ec054f9296186e376c401e06ea98922a209fa59594fdb691a2379b64a8c653e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPidOrganizationId")
    def attr_pid_organization_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PidOrganizationId: PidOrganizationId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidOrganizationId"))

    @builtins.property
    @jsii.member(jsii_name="attrPidProjectDesc")
    def attr_pid_project_desc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PidProjectDesc: PidProjectDesc
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidProjectDesc"))

    @builtins.property
    @jsii.member(jsii_name="attrPidProjectId")
    def attr_pid_project_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PidProjectId: PidProjectId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidProjectId"))

    @builtins.property
    @jsii.member(jsii_name="attrPidProjectName")
    def attr_pid_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PidProjectName: PidProjectName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPidProjectName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8946c0e32a34c836a9f8bc56a0e35d335f65dc82bee1a9251b3d791d15286d10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="pidOrganizationId")
    def pid_organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pidOrganizationId: PidOrganizationId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "pidOrganizationId"))

    @pid_organization_id.setter
    def pid_organization_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a015bf19d0b722e89ae90b4b5111619d8a8028739f4b8074438c2223714f4c20)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pidOrganizationId", value)

    @builtins.property
    @jsii.member(jsii_name="pidProjectName")
    def pid_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pidProjectName: PidProjectName
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "pidProjectName"))

    @pid_project_name.setter
    def pid_project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc6594b1d88d0002fcbf90328a68f30c827e20d95b64ad2d0fe062799245bccd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pidProjectName", value)

    @builtins.property
    @jsii.member(jsii_name="pidProjectDesc")
    def pid_project_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pidProjectDesc: PidProjectDesc
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pidProjectDesc"))

    @pid_project_desc.setter
    def pid_project_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4814c8e52eb84ef06309d8685537b4b6abeda3068fa7f158167cf53f2598bf0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pidProjectDesc", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-brainindustrial.RosPidProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "pid_organization_id": "pidOrganizationId",
        "pid_project_name": "pidProjectName",
        "pid_project_desc": "pidProjectDesc",
    },
)
class RosPidProjectProps:
    def __init__(
        self,
        *,
        pid_organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pid_project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pid_project_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BrainIndustrial::PidProject``.

        :param pid_organization_id: 
        :param pid_project_name: 
        :param pid_project_desc: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bd9cc1a15298bf2cdb3226828850b70b94f84499d47c1fc0a158e23099b6f80)
            check_type(argname="argument pid_organization_id", value=pid_organization_id, expected_type=type_hints["pid_organization_id"])
            check_type(argname="argument pid_project_name", value=pid_project_name, expected_type=type_hints["pid_project_name"])
            check_type(argname="argument pid_project_desc", value=pid_project_desc, expected_type=type_hints["pid_project_desc"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "pid_organization_id": pid_organization_id,
            "pid_project_name": pid_project_name,
        }
        if pid_project_desc is not None:
            self._values["pid_project_desc"] = pid_project_desc

    @builtins.property
    def pid_organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pidOrganizationId: PidOrganizationId
        '''
        result = self._values.get("pid_organization_id")
        assert result is not None, "Required property 'pid_organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pid_project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pidProjectName: PidProjectName
        '''
        result = self._values.get("pid_project_name")
        assert result is not None, "Required property 'pid_project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pid_project_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pidProjectDesc: PidProjectDesc
        '''
        result = self._values.get("pid_project_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPidProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "PidOrganization",
    "PidOrganizationProps",
    "PidProject",
    "PidProjectProps",
    "RosPidOrganization",
    "RosPidOrganizationProps",
    "RosPidProject",
    "RosPidProjectProps",
]

publication.publish()

def _typecheckingstub__a68e46e3024070f07bca6b6d9c8da5ecd8a64f2b25ab45bdb2bde9c63ad613f6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PidOrganizationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54e1b2a8e5a0b32ff01731941ddfbb8e6a446d90912965a804278c433b5d9984(
    *,
    pid_organization_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parent_pid_organization_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70d9bb95a83b5076494fb185606ccce5fe4e80f7194f4363e09d6f9ed1af6050(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PidProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ca247f5309b8d2e6462ecc74f1663d6bec898b679146edb112ffd9714599b2d(
    *,
    pid_organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pid_project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pid_project_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f877a23982316e74e86a3fb558bc8f3b6d64efe835fd0e036a75e5010f39febd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPidOrganizationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d80b631f9d89b43d86942edd2d5a687850804d8f384a12e199998e5bcf18faae(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fe5a3e9af08ad51249c3154e24288d558b68665f7a31af2c9b939bccec3162a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0dbf82bc92cb7322fae7cd6764fe4d523d6469f517244c4d86111359b7939e9e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5099e5f52e2b54282653fe7cba56ef83da712b63cc1f5dbeb8fcc107ad5032e5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ff3c559d3e146057d23bd6edd9a14747aa5952bbfcce94012e8f7ddd81050dd(
    *,
    pid_organization_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parent_pid_organization_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f2b1afa90a16b4b02fe7f45772626629e071eec4bcfeb855c9aa93a1946bf73(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPidProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ec054f9296186e376c401e06ea98922a209fa59594fdb691a2379b64a8c653e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8946c0e32a34c836a9f8bc56a0e35d335f65dc82bee1a9251b3d791d15286d10(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a015bf19d0b722e89ae90b4b5111619d8a8028739f4b8074438c2223714f4c20(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc6594b1d88d0002fcbf90328a68f30c827e20d95b64ad2d0fe062799245bccd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4814c8e52eb84ef06309d8685537b4b6abeda3068fa7f158167cf53f2598bf0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bd9cc1a15298bf2cdb3226828850b70b94f84499d47c1fc0a158e23099b6f80(
    *,
    pid_organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pid_project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pid_project_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
