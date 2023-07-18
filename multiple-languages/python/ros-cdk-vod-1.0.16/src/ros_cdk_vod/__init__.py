'''
## Aliyun ROS VOD Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as VOD from '@alicloud/ros-cdk-vod';
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


class EditingProject(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vod.EditingProject",
):
    '''A ROS resource type:  ``ALIYUN::VOD::EditingProject``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["EditingProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VOD::EditingProject``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30b7f74220d51fcefce567c396721c4d94e3a0c75fb654513d9994a53841069b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The time when the online editing project was created.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEditingProjectId")
    def attr_editing_project_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EditingProjectId: The ID of the online editing project.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEditingProjectId"))

    @builtins.property
    @jsii.member(jsii_name="attrEditingProjectName")
    def attr_editing_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EditingProjectName: The name of the online editing project.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEditingProjectName"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ModifiedTime: The last time when the online editing project was modified.

        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTimeline")
    def attr_timeline(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Timeline: The timeline of the online editing project.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTimeline"))

    @builtins.property
    @jsii.member(jsii_name="attrTitle")
    def attr_title(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Title: The title of the online editing project.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTitle"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vod.EditingProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "title": "title",
        "editing_project_name": "editingProjectName",
        "timeline": "timeline",
    },
)
class EditingProjectProps:
    def __init__(
        self,
        *,
        title: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        editing_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeline: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VOD::EditingProject``.

        :param title: Property title: The title of the online editing project.
        :param editing_project_name: Property editingProjectName: The name of the online editing project.
        :param timeline: Property timeline: The timeline of the online editing project, in JSON format. If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a99e72de491d07826d047b16c0c505c51dfbf3dd4106b5f6ba0ee7da74f5355e)
            check_type(argname="argument title", value=title, expected_type=type_hints["title"])
            check_type(argname="argument editing_project_name", value=editing_project_name, expected_type=type_hints["editing_project_name"])
            check_type(argname="argument timeline", value=timeline, expected_type=type_hints["timeline"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "title": title,
        }
        if editing_project_name is not None:
            self._values["editing_project_name"] = editing_project_name
        if timeline is not None:
            self._values["timeline"] = timeline

    @builtins.property
    def title(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property title: The title of the online editing project.'''
        result = self._values.get("title")
        assert result is not None, "Required property 'title' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def editing_project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property editingProjectName: The name of the online editing project.'''
        result = self._values.get("editing_project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeline(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeline: The timeline of the online editing project, in JSON format.

        If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
        '''
        result = self._values.get("timeline")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EditingProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEditingProject(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vod.RosEditingProject",
):
    '''A ROS template type:  ``ALIYUN::VOD::EditingProject``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEditingProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VOD::EditingProject``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a351947cf3f0f01edcdd8373f2db3008e418f645776c6aec08ed0a41e4d6211c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d6123df0b6e19e51a26f647b00dff7a12937fb825ceb069c026306b46a3ee4fd)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        CreateTime: The time when the online editing project was created.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEditingProjectId")
    def attr_editing_project_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EditingProjectId: The ID of the online editing project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEditingProjectId"))

    @builtins.property
    @jsii.member(jsii_name="attrEditingProjectName")
    def attr_editing_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EditingProjectName: The name of the online editing project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEditingProjectName"))

    @builtins.property
    @jsii.member(jsii_name="attrModifiedTime")
    def attr_modified_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ModifiedTime: The last time when the online editing project was modified.
        The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrModifiedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrTimeline")
    def attr_timeline(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Timeline: The timeline of the online editing project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTimeline"))

    @builtins.property
    @jsii.member(jsii_name="attrTitle")
    def attr_title(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Title: The title of the online editing project.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTitle"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3ce6d4f4a1078ed3f3fb2e1de7df36c1821e1649d37ca2fcfc1b43edc471274c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="title")
    def title(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: title: The title of the online editing project.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "title"))

    @title.setter
    def title(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15da52f83161e71e04b797ca2624e84686f67e2c9f57ffa980b4e1fd4c30cea2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "title", value)

    @builtins.property
    @jsii.member(jsii_name="editingProjectName")
    def editing_project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: editingProjectName: The name of the online editing project.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "editingProjectName"))

    @editing_project_name.setter
    def editing_project_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__185859f14e725b4f87fcfbde5887f0083c4a0664a36f2f20979bc509f5ce812c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "editingProjectName", value)

    @builtins.property
    @jsii.member(jsii_name="timeline")
    def timeline(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        timeline: The timeline of the online editing project, in JSON format.
        If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeline"))

    @timeline.setter
    def timeline(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b640779a4e44fed0e5a1de0709578f4f15a7285aead96270692fb004c0d211a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeline", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vod.RosEditingProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "title": "title",
        "editing_project_name": "editingProjectName",
        "timeline": "timeline",
    },
)
class RosEditingProjectProps:
    def __init__(
        self,
        *,
        title: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        editing_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeline: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VOD::EditingProject``.

        :param title: 
        :param editing_project_name: 
        :param timeline: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbb0cbda62c44105bfa4940abf7f44377ccdc5930fa3e3b8adc5138ae92fc5df)
            check_type(argname="argument title", value=title, expected_type=type_hints["title"])
            check_type(argname="argument editing_project_name", value=editing_project_name, expected_type=type_hints["editing_project_name"])
            check_type(argname="argument timeline", value=timeline, expected_type=type_hints["timeline"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "title": title,
        }
        if editing_project_name is not None:
            self._values["editing_project_name"] = editing_project_name
        if timeline is not None:
            self._values["timeline"] = timeline

    @builtins.property
    def title(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: title: The title of the online editing project.
        '''
        result = self._values.get("title")
        assert result is not None, "Required property 'title' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def editing_project_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: editingProjectName: The name of the online editing project.
        '''
        result = self._values.get("editing_project_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeline(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        timeline: The timeline of the online editing project, in JSON format.
        If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
        '''
        result = self._values.get("timeline")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEditingProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "EditingProject",
    "EditingProjectProps",
    "RosEditingProject",
    "RosEditingProjectProps",
]

publication.publish()

def _typecheckingstub__30b7f74220d51fcefce567c396721c4d94e3a0c75fb654513d9994a53841069b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EditingProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a99e72de491d07826d047b16c0c505c51dfbf3dd4106b5f6ba0ee7da74f5355e(
    *,
    title: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    editing_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeline: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a351947cf3f0f01edcdd8373f2db3008e418f645776c6aec08ed0a41e4d6211c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEditingProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6123df0b6e19e51a26f647b00dff7a12937fb825ceb069c026306b46a3ee4fd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ce6d4f4a1078ed3f3fb2e1de7df36c1821e1649d37ca2fcfc1b43edc471274c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15da52f83161e71e04b797ca2624e84686f67e2c9f57ffa980b4e1fd4c30cea2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__185859f14e725b4f87fcfbde5887f0083c4a0664a36f2f20979bc509f5ce812c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b640779a4e44fed0e5a1de0709578f4f15a7285aead96270692fb004c0d211a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbb0cbda62c44105bfa4940abf7f44377ccdc5930fa3e3b8adc5138ae92fc5df(
    *,
    title: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    editing_project_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeline: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
