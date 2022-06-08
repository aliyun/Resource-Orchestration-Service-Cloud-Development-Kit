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

from ._jsii import *

import ros_cdk_core


class PidOrganization(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-brainindustrial.PidOrganization",
):
    '''A ROS resource type:  ``ALIYUN::BrainIndustrial::PidOrganization``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "PidOrganizationProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrParentPidOrganizationId")
    def attr_parent_pid_organization_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ParentPidOrganizationId: ParentPidOrganizationId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrParentPidOrganizationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationId")
    def attr_pid_organization_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidOrganizationId: PidOrganizationId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationLevel")
    def attr_pid_organization_level(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidOrganizationLevel: PidOrganizationLevel.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationLevel"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationName")
    def attr_pid_organization_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidOrganizationName: PidOrganizationName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationName"))


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
        pid_organization_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        parent_pid_organization_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BrainIndustrial::PidOrganization``.

        :param pid_organization_name: Property pidOrganizationName: PidOrganizationName.
        :param parent_pid_organization_id: Property parentPidOrganizationId: ParentPidOrganizationId.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "pid_organization_name": pid_organization_name,
        }
        if parent_pid_organization_id is not None:
            self._values["parent_pid_organization_id"] = parent_pid_organization_id

    @builtins.property
    def pid_organization_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property pidOrganizationName: PidOrganizationName.'''
        result = self._values.get("pid_organization_name")
        assert result is not None, "Required property 'pid_organization_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def parent_pid_organization_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property parentPidOrganizationId: ParentPidOrganizationId.'''
        result = self._values.get("parent_pid_organization_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PidOrganizationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PidProject(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-brainindustrial.PidProject",
):
    '''A ROS resource type:  ``ALIYUN::BrainIndustrial::PidProject``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "PidProjectProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationId")
    def attr_pid_organization_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidOrganizationId: PidOrganizationId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidProjectDesc")
    def attr_pid_project_desc(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidProjectDesc: PidProjectDesc.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidProjectDesc"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidProjectId")
    def attr_pid_project_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidProjectId: PidProjectId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidProjectId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidProjectName")
    def attr_pid_project_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute PidProjectName: PidProjectName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidProjectName"))


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
        pid_organization_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pid_project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pid_project_desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BrainIndustrial::PidProject``.

        :param pid_organization_id: Property pidOrganizationId: PidOrganizationId.
        :param pid_project_name: Property pidProjectName: PidProjectName.
        :param pid_project_desc: Property pidProjectDesc: PidProjectDesc.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "pid_organization_id": pid_organization_id,
            "pid_project_name": pid_project_name,
        }
        if pid_project_desc is not None:
            self._values["pid_project_desc"] = pid_project_desc

    @builtins.property
    def pid_organization_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property pidOrganizationId: PidOrganizationId.'''
        result = self._values.get("pid_organization_id")
        assert result is not None, "Required property 'pid_organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pid_project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property pidProjectName: PidProjectName.'''
        result = self._values.get("pid_project_name")
        assert result is not None, "Required property 'pid_project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pid_project_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pidProjectDesc: PidProjectDesc.'''
        result = self._values.get("pid_project_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PidProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPidOrganization(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-brainindustrial.RosPidOrganization",
):
    '''A ROS template type:  ``ALIYUN::BrainIndustrial::PidOrganization``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPidOrganizationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::BrainIndustrial::PidOrganization``.

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
    @jsii.member(jsii_name="attrParentPidOrganizationId")
    def attr_parent_pid_organization_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ParentPidOrganizationId: ParentPidOrganizationId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrParentPidOrganizationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationId")
    def attr_pid_organization_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidOrganizationId: PidOrganizationId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationLevel")
    def attr_pid_organization_level(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidOrganizationLevel: PidOrganizationLevel
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationLevel"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidOrganizationName")
    def attr_pid_organization_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidOrganizationName: PidOrganizationName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationName"))

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
    @jsii.member(jsii_name="pidOrganizationName")
    def pid_organization_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pidOrganizationName: PidOrganizationName
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "pidOrganizationName"))

    @pid_organization_name.setter
    def pid_organization_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "pidOrganizationName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="parentPidOrganizationId")
    def parent_pid_organization_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: parentPidOrganizationId: ParentPidOrganizationId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "parentPidOrganizationId"))

    @parent_pid_organization_id.setter
    def parent_pid_organization_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        pid_organization_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        parent_pid_organization_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BrainIndustrial::PidOrganization``.

        :param pid_organization_name: 
        :param parent_pid_organization_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "pid_organization_name": pid_organization_name,
        }
        if parent_pid_organization_id is not None:
            self._values["parent_pid_organization_id"] = parent_pid_organization_id

    @builtins.property
    def pid_organization_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pidOrganizationName: PidOrganizationName
        '''
        result = self._values.get("pid_organization_name")
        assert result is not None, "Required property 'pid_organization_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def parent_pid_organization_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: parentPidOrganizationId: ParentPidOrganizationId
        '''
        result = self._values.get("parent_pid_organization_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPidOrganizationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPidProject(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-brainindustrial.RosPidProject",
):
    '''A ROS template type:  ``ALIYUN::BrainIndustrial::PidProject``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPidProjectProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::BrainIndustrial::PidProject``.

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
    @jsii.member(jsii_name="attrPidOrganizationId")
    def attr_pid_organization_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidOrganizationId: PidOrganizationId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidOrganizationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidProjectDesc")
    def attr_pid_project_desc(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidProjectDesc: PidProjectDesc
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidProjectDesc"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidProjectId")
    def attr_pid_project_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidProjectId: PidProjectId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidProjectId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPidProjectName")
    def attr_pid_project_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PidProjectName: PidProjectName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPidProjectName"))

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
    @jsii.member(jsii_name="pidOrganizationId")
    def pid_organization_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pidOrganizationId: PidOrganizationId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "pidOrganizationId"))

    @pid_organization_id.setter
    def pid_organization_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "pidOrganizationId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pidProjectName")
    def pid_project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pidProjectName: PidProjectName
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "pidProjectName"))

    @pid_project_name.setter
    def pid_project_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "pidProjectName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pidProjectDesc")
    def pid_project_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pidProjectDesc: PidProjectDesc
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pidProjectDesc"))

    @pid_project_desc.setter
    def pid_project_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        pid_organization_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pid_project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        pid_project_desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::BrainIndustrial::PidProject``.

        :param pid_organization_id: 
        :param pid_project_name: 
        :param pid_project_desc: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "pid_organization_id": pid_organization_id,
            "pid_project_name": pid_project_name,
        }
        if pid_project_desc is not None:
            self._values["pid_project_desc"] = pid_project_desc

    @builtins.property
    def pid_organization_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pidOrganizationId: PidOrganizationId
        '''
        result = self._values.get("pid_organization_id")
        assert result is not None, "Required property 'pid_organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pid_project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: pidProjectName: PidProjectName
        '''
        result = self._values.get("pid_project_name")
        assert result is not None, "Required property 'pid_project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def pid_project_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pidProjectDesc: PidProjectDesc
        '''
        result = self._values.get("pid_project_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
