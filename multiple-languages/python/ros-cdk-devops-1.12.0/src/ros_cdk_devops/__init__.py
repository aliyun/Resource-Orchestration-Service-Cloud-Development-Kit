'''
## Aliyun ROS DEVOPS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DEVOPS from '@alicloud/ros-cdk-devops';
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
    jsii_type="@alicloud/ros-cdk-devops.HostGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "organization_id": "organizationId",
        "service_connection_id": "serviceConnectionId",
        "aliyun_region": "aliyunRegion",
        "ecs_label_key": "ecsLabelKey",
        "ecs_label_value": "ecsLabelValue",
        "ecs_type": "ecsType",
        "env_id": "envId",
        "machine_infos": "machineInfos",
        "tag_ids": "tagIds",
        "type": "type",
    },
)
class HostGroupProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_connection_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        aliyun_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_label_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_label_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        env_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        machine_infos: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosHostGroup.MachineInfosProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        tag_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``HostGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup

        :param name: Property name: Host group name.
        :param organization_id: Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        :param service_connection_id: Property serviceConnectionId: Service connection.
        :param aliyun_region: Property aliyunRegion: The aliyun region.
        :param ecs_label_key: Property ecsLabelKey: The tag key of the ECS.
        :param ecs_label_value: Property ecsLabelValue: The tag value of the ECS.
        :param ecs_type: Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.
        :param env_id: Property envId: Environment id.
        :param machine_infos: Property machineInfos: The machine infos.
        :param tag_ids: Property tagIds: The ids of tag.
        :param type: Property type: Host group type, currently only supports ECS.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__479b32c1718b7fc7c26bca41898094ff529fc13c791e8ec57615a728d8c090be)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument organization_id", value=organization_id, expected_type=type_hints["organization_id"])
            check_type(argname="argument service_connection_id", value=service_connection_id, expected_type=type_hints["service_connection_id"])
            check_type(argname="argument aliyun_region", value=aliyun_region, expected_type=type_hints["aliyun_region"])
            check_type(argname="argument ecs_label_key", value=ecs_label_key, expected_type=type_hints["ecs_label_key"])
            check_type(argname="argument ecs_label_value", value=ecs_label_value, expected_type=type_hints["ecs_label_value"])
            check_type(argname="argument ecs_type", value=ecs_type, expected_type=type_hints["ecs_type"])
            check_type(argname="argument env_id", value=env_id, expected_type=type_hints["env_id"])
            check_type(argname="argument machine_infos", value=machine_infos, expected_type=type_hints["machine_infos"])
            check_type(argname="argument tag_ids", value=tag_ids, expected_type=type_hints["tag_ids"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "organization_id": organization_id,
            "service_connection_id": service_connection_id,
        }
        if aliyun_region is not None:
            self._values["aliyun_region"] = aliyun_region
        if ecs_label_key is not None:
            self._values["ecs_label_key"] = ecs_label_key
        if ecs_label_value is not None:
            self._values["ecs_label_value"] = ecs_label_value
        if ecs_type is not None:
            self._values["ecs_type"] = ecs_type
        if env_id is not None:
            self._values["env_id"] = env_id
        if machine_infos is not None:
            self._values["machine_infos"] = machine_infos
        if tag_ids is not None:
            self._values["tag_ids"] = tag_ids
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Host group name.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.'''
        result = self._values.get("organization_id")
        assert result is not None, "Required property 'organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_connection_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serviceConnectionId: Service connection.'''
        result = self._values.get("service_connection_id")
        assert result is not None, "Required property 'service_connection_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def aliyun_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aliyunRegion: The aliyun region.'''
        result = self._values.get("aliyun_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_label_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsLabelKey: The tag key of the ECS.'''
        result = self._values.get("ecs_label_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_label_value(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsLabelValue: The tag value of the ECS.'''
        result = self._values.get("ecs_label_value")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsType: The type of ECS, currently only supports ECS_ALIYUN.'''
        result = self._values.get("ecs_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def env_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property envId: Environment id.'''
        result = self._values.get("env_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def machine_infos(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHostGroup.MachineInfosProperty"]]]]:
        '''Property machineInfos: The machine infos.'''
        result = self._values.get("machine_infos")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHostGroup.MachineInfosProperty"]]]], result)

    @builtins.property
    def tag_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property tagIds: The ids of tag.'''
        result = self._values.get("tag_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: Host group type, currently only supports ECS.'''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HostGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-devops.IHostGroup")
class IHostGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``HostGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrHostGroupId")
    def attr_host_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostGroupId: The id of the host group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HostGroupProps:
        ...


class _IHostGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``HostGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-devops.IHostGroup"

    @builtins.property
    @jsii.member(jsii_name="attrHostGroupId")
    def attr_host_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostGroupId: The id of the host group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHostGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HostGroupProps:
        return typing.cast(HostGroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IHostGroup).__jsii_proxy_class__ = lambda : _IHostGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-devops.IPipeline")
class IPipeline(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Pipeline``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPipelineId")
    def attr_pipeline_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PipelineId: Pipeline id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PipelineProps":
        ...


class _IPipelineProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Pipeline``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-devops.IPipeline"

    @builtins.property
    @jsii.member(jsii_name="attrPipelineId")
    def attr_pipeline_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PipelineId: Pipeline id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPipelineId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PipelineProps":
        return typing.cast("PipelineProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPipeline).__jsii_proxy_class__ = lambda : _IPipelineProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-devops.IPipelineRelations")
class IPipelineRelations(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``PipelineRelations``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PipelineRelationsProps":
        ...


class _IPipelineRelationsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PipelineRelations``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-devops.IPipelineRelations"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PipelineRelationsProps":
        return typing.cast("PipelineRelationsProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPipelineRelations).__jsii_proxy_class__ = lambda : _IPipelineRelationsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-devops.IPipelineRun")
class IPipelineRun(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``PipelineRun``.'''

    @builtins.property
    @jsii.member(jsii_name="attrPipelineRunId")
    def attr_pipeline_run_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PipelineRunId: Pipeline run id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PipelineRunProps":
        ...


class _IPipelineRunProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PipelineRun``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-devops.IPipelineRun"

    @builtins.property
    @jsii.member(jsii_name="attrPipelineRunId")
    def attr_pipeline_run_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PipelineRunId: Pipeline run id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPipelineRunId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PipelineRunProps":
        return typing.cast("PipelineRunProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPipelineRun).__jsii_proxy_class__ = lambda : _IPipelineRunProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-devops.IVariableGroup")
class IVariableGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``VariableGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrVariableGroupId")
    def attr_variable_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VariableGroupId: Variable group id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VariableGroupProps":
        ...


class _IVariableGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``VariableGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-devops.IVariableGroup"

    @builtins.property
    @jsii.member(jsii_name="attrVariableGroupId")
    def attr_variable_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VariableGroupId: Variable group id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVariableGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VariableGroupProps":
        return typing.cast("VariableGroupProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IVariableGroup).__jsii_proxy_class__ = lambda : _IVariableGroupProxy


@jsii.implements(IPipeline)
class Pipeline(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.Pipeline",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DEVOPS::Pipeline``, which is used to create a pipeline.

    YAML-based pipelines are supported.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPipeline``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PipelineProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41075a0ab71478dc9168b0be94b7354d99ac937ac95f5d59a0c4504e2db8ee69)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPipelineId")
    def attr_pipeline_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PipelineId: Pipeline id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPipelineId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PipelineProps":
        return typing.cast("PipelineProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__376dbe57279fc3200a19e4c933b05407d46d495caeb516dcd504eb2124968c42)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6680339cbb2783e5cf1d7ad1ff5f72676c742b7941902a074ddfcf79e4871174)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71a20e4899f559df4050fc4fad02bd2f2a5458f9ea9f13164d7f8d92b9b3cee4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-devops.PipelineProps",
    jsii_struct_bases=[],
    name_mapping={
        "content": "content",
        "name": "name",
        "organization_id": "organizationId",
    },
)
class PipelineProps:
    def __init__(
        self,
        *,
        content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Pipeline``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline

        :param content: Property content: Pipeline description in YAML format.
        :param name: Property name: Pipeline name.
        :param organization_id: Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07a322d3c63f84952812459e1681478612bdd543d6e916e16b1bbf09cc95134f)
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument organization_id", value=organization_id, expected_type=type_hints["organization_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "content": content,
            "name": name,
            "organization_id": organization_id,
        }

    @builtins.property
    def content(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property content: Pipeline description in YAML format.'''
        result = self._values.get("content")
        assert result is not None, "Required property 'content' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Pipeline name.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.'''
        result = self._values.get("organization_id")
        assert result is not None, "Required property 'organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PipelineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPipelineRelations)
class PipelineRelations(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.PipelineRelations",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DEVOPS::PipelineRelations``, which is used to associate resources with a pipeline.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPipelineRelations``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PipelineRelationsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43d4778588e0a664b2485b70ea5fb5a78130f93a4588f0d7e45c722a3dbb631a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PipelineRelationsProps":
        return typing.cast("PipelineRelationsProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe72ebcd61b4cdbb49f16d924470f47bd78dee220b8f68bb592c3dd1bbd6eafe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d2fbf8ee04f579c11f32d13547ef1c829ff36428ffe8a842f4c0147847ddaaf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ed3529b2e43e742c81c53e730f2a2eb0878c4d14c0bcc2f5809e4bcf902e20b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-devops.PipelineRelationsProps",
    jsii_struct_bases=[],
    name_mapping={
        "organization_id": "organizationId",
        "pipeline_id": "pipelineId",
        "rel_object_ids": "relObjectIds",
        "rel_object_type": "relObjectType",
    },
)
class PipelineRelationsProps:
    def __init__(
        self,
        *,
        organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pipeline_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        rel_object_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
        rel_object_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``PipelineRelations``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations

        :param organization_id: Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        :param pipeline_id: Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
        :param rel_object_ids: Property relObjectIds: Ids of the associated resource. For now, only variable group ids are supported.
        :param rel_object_type: Property relObjectType: Associated resource type. Valid values: - VARIABLE_GROUP - OOS_APP_ID For now, only VARIABLE GROUP is supported.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__485cfe79037e8a1a4635c8492e85528bdb6551af36516bd2400323dfe7cdaea1)
            check_type(argname="argument organization_id", value=organization_id, expected_type=type_hints["organization_id"])
            check_type(argname="argument pipeline_id", value=pipeline_id, expected_type=type_hints["pipeline_id"])
            check_type(argname="argument rel_object_ids", value=rel_object_ids, expected_type=type_hints["rel_object_ids"])
            check_type(argname="argument rel_object_type", value=rel_object_type, expected_type=type_hints["rel_object_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "organization_id": organization_id,
            "pipeline_id": pipeline_id,
            "rel_object_ids": rel_object_ids,
            "rel_object_type": rel_object_type,
        }

    @builtins.property
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.'''
        result = self._values.get("organization_id")
        assert result is not None, "Required property 'organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pipeline_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.'''
        result = self._values.get("pipeline_id")
        assert result is not None, "Required property 'pipeline_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rel_object_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property relObjectIds: Ids of the associated resource.

        For now, only variable group ids are supported.
        '''
        result = self._values.get("rel_object_ids")
        assert result is not None, "Required property 'rel_object_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def rel_object_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property relObjectType: Associated resource type.

        Valid values:

        - VARIABLE_GROUP
        - OOS_APP_ID
          For now, only VARIABLE GROUP is supported.
        '''
        result = self._values.get("rel_object_type")
        assert result is not None, "Required property 'rel_object_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PipelineRelationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPipelineRun)
class PipelineRun(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.PipelineRun",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DEVOPS::PipelineRun``, which is used to run a pipeline.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPipelineRun``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PipelineRunProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50e88a6da8ca59d27c749c9c307717afa82e83b2d08c070cfd7bd28071a7c76f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPipelineRunId")
    def attr_pipeline_run_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PipelineRunId: Pipeline run id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPipelineRunId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PipelineRunProps":
        return typing.cast("PipelineRunProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b2bda7492820bec0dd7b96cc991cf9075026dcf64233a76ea4021ad121a60e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de2b67f2f73b1fc8b5686a4be18c6b678ad1e69e45d86f2591d2cae7817532ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60ff1b32bd3f51e7ea82c27126ae22dcf0469ad99ecf6c393543f6db55e41d04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-devops.PipelineRunProps",
    jsii_struct_bases=[],
    name_mapping={
        "organization_id": "organizationId",
        "pipeline_id": "pipelineId",
        "params": "params",
        "sync": "sync",
        "timeout": "timeout",
    },
)
class PipelineRunProps:
    def __init__(
        self,
        *,
        organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pipeline_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        params: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        sync: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PipelineRun``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun

        :param organization_id: Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        :param pipeline_id: Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
        :param params: Property params: Pipeline operating parameters. Keys: - **branchModeBranchs**: Branch mode runs branches. - **envs**: Running variables. - **runningBranchs**: Running branches whose key is the warehouse address. - **runningTags**: Running tags whose key is the warehouse address.
        :param sync: Property sync: Whether to wait synchronously for the result of the pipeline execution. If you select true, the resource will not be created until the pipeline is complete. **Default is false.** Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
        :param timeout: Property timeout: Maximum wait time for pipeline execution in minutes. This parameter need only be configured if Sync is set to true. **Default is 10.**
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dbc2adbf39254a34ede98482f68880c4320cdeb4df712efe01dbe6657a2cd01)
            check_type(argname="argument organization_id", value=organization_id, expected_type=type_hints["organization_id"])
            check_type(argname="argument pipeline_id", value=pipeline_id, expected_type=type_hints["pipeline_id"])
            check_type(argname="argument params", value=params, expected_type=type_hints["params"])
            check_type(argname="argument sync", value=sync, expected_type=type_hints["sync"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "organization_id": organization_id,
            "pipeline_id": pipeline_id,
        }
        if params is not None:
            self._values["params"] = params
        if sync is not None:
            self._values["sync"] = sync
        if timeout is not None:
            self._values["timeout"] = timeout

    @builtins.property
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.'''
        result = self._values.get("organization_id")
        assert result is not None, "Required property 'organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pipeline_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.'''
        result = self._values.get("pipeline_id")
        assert result is not None, "Required property 'pipeline_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def params(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property params: Pipeline operating parameters.

        Keys:

        - **branchModeBranchs**: Branch mode runs branches.
        - **envs**: Running variables.
        - **runningBranchs**: Running branches whose key is the warehouse address.
        - **runningTags**: Running tags whose key is the warehouse address.
        '''
        result = self._values.get("params")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def sync(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sync: Whether to wait synchronously for the result of the pipeline execution.

        If you select true, the resource will not be created until the pipeline is complete. **Default is false.**
        Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
        '''
        result = self._values.get("sync")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeout: Maximum wait time for pipeline execution in minutes.

        This parameter need only be configured if Sync is set to true. **Default is 10.**
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PipelineRunProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHostGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.RosHostGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DEVOPS::HostGroup``, which is used to create a host group.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``HostGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHostGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4860cfe5cd458ab67e95e319ed56f8e68df738f346bd5820d127c20032bf0a1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9cf5261897cc0b6de015b6775116f7aee1ff54e5cd0415193e139cfe8d09bf9f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHostGroupId")
    def attr_host_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostGroupId: The id of the host group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__64b17f2ca7575201f9716c84ad7c9b12897fec04f8bddc01dfc408e94d0bdb6b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Host group name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2c9ea8bddd864def280d048c36405159b03c531bfa54f32cf2e5d200bf60d87)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="organizationId")
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "organizationId"))

    @organization_id.setter
    def organization_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3339522019649fed954962ec2a55d4d56c3b7a18d6cc51d6f1ab5cf716371ff3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "organizationId", value)

    @builtins.property
    @jsii.member(jsii_name="serviceConnectionId")
    def service_connection_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceConnectionId: Service connection.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serviceConnectionId"))

    @service_connection_id.setter
    def service_connection_id(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49f7b1978f7a3c444b7d90f44184124cc5e050c34c9c87884e7264e3a73e967c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceConnectionId", value)

    @builtins.property
    @jsii.member(jsii_name="aliyunRegion")
    def aliyun_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aliyunRegion: The aliyun region.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aliyunRegion"))

    @aliyun_region.setter
    def aliyun_region(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__247a785ce199458e2f2b120e91c5b3c84a640e4b05bbdf157e4fdeef94196f6b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aliyunRegion", value)

    @builtins.property
    @jsii.member(jsii_name="ecsLabelKey")
    def ecs_label_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsLabelKey: The tag key of the ECS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsLabelKey"))

    @ecs_label_key.setter
    def ecs_label_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7536c21064c05ddf81558496361ca1384abceb347055d3809bdc469858912548)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsLabelKey", value)

    @builtins.property
    @jsii.member(jsii_name="ecsLabelValue")
    def ecs_label_value(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsLabelValue: The tag value of the ECS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsLabelValue"))

    @ecs_label_value.setter
    def ecs_label_value(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0348bf0eaf495f85c22cff22603a0d089813d561995788c11697b61cc77b2e05)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsLabelValue", value)

    @builtins.property
    @jsii.member(jsii_name="ecsType")
    def ecs_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsType: The type of ECS, currently only supports ECS_ALIYUN.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsType"))

    @ecs_type.setter
    def ecs_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a027dbacd9ef0270930e64a4379a3a2a867bfa3930d41c0616703c3329d32df3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsType", value)

    @builtins.property
    @jsii.member(jsii_name="envId")
    def env_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: envId: Environment id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "envId"))

    @env_id.setter
    def env_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5512b04622312f47bf834113425f008a7ba942680cae5590b66c99b8b533153b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "envId", value)

    @builtins.property
    @jsii.member(jsii_name="machineInfos")
    def machine_infos(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHostGroup.MachineInfosProperty"]]]]:
        '''
        :Property: machineInfos: The machine infos
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHostGroup.MachineInfosProperty"]]]], jsii.get(self, "machineInfos"))

    @machine_infos.setter
    def machine_infos(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosHostGroup.MachineInfosProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4253055fd9144e6bbecfb684ac33197d5f13c545e1016727a0632ecbdc4a5e43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "machineInfos", value)

    @builtins.property
    @jsii.member(jsii_name="tagIds")
    def tag_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: tagIds: The ids of tag.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "tagIds"))

    @tag_ids.setter
    def tag_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5820e2fb1d986915bd4d8d6d0ed502e151628d5ff04b2a2bd31643e20026311a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tagIds", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: type: Host group type, currently only supports ECS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adc7db31bceb8771965c8e008fe6056debb3fadd7d3499579ef673fcdb6df5d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-devops.RosHostGroup.MachineInfosProperty",
        jsii_struct_bases=[],
        name_mapping={
            "machine_sn": "machineSn",
            "aliyun_region_id": "aliyunRegionId",
            "instance_name": "instanceName",
            "ip": "ip",
        },
    )
    class MachineInfosProperty:
        def __init__(
            self,
            *,
            machine_sn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            aliyun_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param machine_sn: 
            :param aliyun_region_id: 
            :param instance_name: 
            :param ip: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__caacd68bb2744f1fbf24679c60f6270537bc1470452a6a5ef4cdb6c796885072)
                check_type(argname="argument machine_sn", value=machine_sn, expected_type=type_hints["machine_sn"])
                check_type(argname="argument aliyun_region_id", value=aliyun_region_id, expected_type=type_hints["aliyun_region_id"])
                check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "machine_sn": machine_sn,
            }
            if aliyun_region_id is not None:
                self._values["aliyun_region_id"] = aliyun_region_id
            if instance_name is not None:
                self._values["instance_name"] = instance_name
            if ip is not None:
                self._values["ip"] = ip

        @builtins.property
        def machine_sn(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: machineSn: The id of the instance.
            '''
            result = self._values.get("machine_sn")
            assert result is not None, "Required property 'machine_sn' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def aliyun_region_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: aliyunRegionId: The aliyun region of the instance.
            '''
            result = self._values.get("aliyun_region_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: instanceName: The name of the instance.
            '''
            result = self._values.get("instance_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ip: The ip address of the instance.
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MachineInfosProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-devops.RosHostGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "organization_id": "organizationId",
        "service_connection_id": "serviceConnectionId",
        "aliyun_region": "aliyunRegion",
        "ecs_label_key": "ecsLabelKey",
        "ecs_label_value": "ecsLabelValue",
        "ecs_type": "ecsType",
        "env_id": "envId",
        "machine_infos": "machineInfos",
        "tag_ids": "tagIds",
        "type": "type",
    },
)
class RosHostGroupProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_connection_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        aliyun_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_label_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_label_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        env_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        machine_infos: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHostGroup.MachineInfosProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        tag_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosHostGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup

        :param name: 
        :param organization_id: 
        :param service_connection_id: 
        :param aliyun_region: 
        :param ecs_label_key: 
        :param ecs_label_value: 
        :param ecs_type: 
        :param env_id: 
        :param machine_infos: 
        :param tag_ids: 
        :param type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7206d2a0eab7e2006c690d939586cb056fb7f8d42fb647fadccb497c05e507b0)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument organization_id", value=organization_id, expected_type=type_hints["organization_id"])
            check_type(argname="argument service_connection_id", value=service_connection_id, expected_type=type_hints["service_connection_id"])
            check_type(argname="argument aliyun_region", value=aliyun_region, expected_type=type_hints["aliyun_region"])
            check_type(argname="argument ecs_label_key", value=ecs_label_key, expected_type=type_hints["ecs_label_key"])
            check_type(argname="argument ecs_label_value", value=ecs_label_value, expected_type=type_hints["ecs_label_value"])
            check_type(argname="argument ecs_type", value=ecs_type, expected_type=type_hints["ecs_type"])
            check_type(argname="argument env_id", value=env_id, expected_type=type_hints["env_id"])
            check_type(argname="argument machine_infos", value=machine_infos, expected_type=type_hints["machine_infos"])
            check_type(argname="argument tag_ids", value=tag_ids, expected_type=type_hints["tag_ids"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "organization_id": organization_id,
            "service_connection_id": service_connection_id,
        }
        if aliyun_region is not None:
            self._values["aliyun_region"] = aliyun_region
        if ecs_label_key is not None:
            self._values["ecs_label_key"] = ecs_label_key
        if ecs_label_value is not None:
            self._values["ecs_label_value"] = ecs_label_value
        if ecs_type is not None:
            self._values["ecs_type"] = ecs_type
        if env_id is not None:
            self._values["env_id"] = env_id
        if machine_infos is not None:
            self._values["machine_infos"] = machine_infos
        if tag_ids is not None:
            self._values["tag_ids"] = tag_ids
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Host group name.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        '''
        result = self._values.get("organization_id")
        assert result is not None, "Required property 'organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_connection_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceConnectionId: Service connection.
        '''
        result = self._values.get("service_connection_id")
        assert result is not None, "Required property 'service_connection_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def aliyun_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aliyunRegion: The aliyun region.
        '''
        result = self._values.get("aliyun_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_label_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsLabelKey: The tag key of the ECS.
        '''
        result = self._values.get("ecs_label_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_label_value(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsLabelValue: The tag value of the ECS.
        '''
        result = self._values.get("ecs_label_value")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsType: The type of ECS, currently only supports ECS_ALIYUN.
        '''
        result = self._values.get("ecs_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def env_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: envId: Environment id.
        '''
        result = self._values.get("env_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def machine_infos(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosHostGroup.MachineInfosProperty]]]]:
        '''
        :Property: machineInfos: The machine infos
        '''
        result = self._values.get("machine_infos")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosHostGroup.MachineInfosProperty]]]], result)

    @builtins.property
    def tag_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: tagIds: The ids of tag.
        '''
        result = self._values.get("tag_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: type: Host group type, currently only supports ECS.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHostGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPipeline(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.RosPipeline",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DEVOPS::Pipeline``, which is used to create a pipeline.

    YAML-based pipelines are supported.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Pipeline`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPipelineProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bf3079d64432f73b0c8b9399684f7971e0a02556d241cf412884eccb72c9fdf)
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
            type_hints = typing.get_type_hints(_typecheckingstub__473f49317e89b23b3da420a56b11120596306162c2eb8173fec11e0df270751a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPipelineId")
    def attr_pipeline_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PipelineId: Pipeline id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPipelineId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="content")
    def content(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: content: Pipeline description in YAML format.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "content"))

    @content.setter
    def content(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3e967ee2a89d17a256ababff159579e0824195e308e41faef3d87bd6ae509b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "content", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93454ac51c73e45b2e7553a0ac124568a453b3535dafec71c51b4cbcd726b8a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Pipeline name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5eb4adecfb3ab53eb7f0c249de02fa1c605ed21afad94528b27e9e93a48c05b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="organizationId")
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "organizationId"))

    @organization_id.setter
    def organization_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fc0fd0eeb9b19c43958b14f2405e353150119faff70fd9b294ebeca22dd5dd1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "organizationId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-devops.RosPipelineProps",
    jsii_struct_bases=[],
    name_mapping={
        "content": "content",
        "name": "name",
        "organization_id": "organizationId",
    },
)
class RosPipelineProps:
    def __init__(
        self,
        *,
        content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosPipeline``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline

        :param content: 
        :param name: 
        :param organization_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e21a8b5ae1177ff52704a2271ebb0cfcdefe68aeb637059014052d32c9fb494)
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument organization_id", value=organization_id, expected_type=type_hints["organization_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "content": content,
            "name": name,
            "organization_id": organization_id,
        }

    @builtins.property
    def content(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: content: Pipeline description in YAML format.
        '''
        result = self._values.get("content")
        assert result is not None, "Required property 'content' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Pipeline name.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        '''
        result = self._values.get("organization_id")
        assert result is not None, "Required property 'organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPipelineProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPipelineRelations(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.RosPipelineRelations",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DEVOPS::PipelineRelations``, which is used to associate resources with a pipeline.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PipelineRelations`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPipelineRelationsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6905649029a743ed6debd63dfcb52d30215a7f71492010fd754cd1affab3f656)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5311aa003cc1d00ecfb03b7787d7663180d389fc5b899487307885ec38fa4042)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d6b32b6a4b8b2c564832c46cc48427e16a1a21e557d0d8be014551570a88d851)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="organizationId")
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "organizationId"))

    @organization_id.setter
    def organization_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a93c89540bb8bedf793a30bf9b6febb39e2a853b008c953f74b93a0db9d21b40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "organizationId", value)

    @builtins.property
    @jsii.member(jsii_name="pipelineId")
    def pipeline_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pipelineId: The pipeline ID, which can be obtained from the pipeline link.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "pipelineId"))

    @pipeline_id.setter
    def pipeline_id(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f71d4292185022a7321b059b8bbc77c72dada77fb48db46fb0c0feb9b37f0696)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pipelineId", value)

    @builtins.property
    @jsii.member(jsii_name="relObjectIds")
    def rel_object_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: relObjectIds: Ids of the associated resource. For now, only variable group ids are supported.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "relObjectIds"))

    @rel_object_ids.setter
    def rel_object_ids(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d3494e048705c67afadcc0f7b00e5381b8083780c4f6ccfa49d616f6acd3056)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "relObjectIds", value)

    @builtins.property
    @jsii.member(jsii_name="relObjectType")
    def rel_object_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        relObjectType: Associated resource type. Valid values:

        - VARIABLE_GROUP
        - OOS_APP_ID
        For now, only VARIABLE GROUP is supported.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "relObjectType"))

    @rel_object_type.setter
    def rel_object_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c306aac218351ecd21e2054263ba53e46d5a1ed8f7d53d18f2a7dcf36bf9400a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "relObjectType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-devops.RosPipelineRelationsProps",
    jsii_struct_bases=[],
    name_mapping={
        "organization_id": "organizationId",
        "pipeline_id": "pipelineId",
        "rel_object_ids": "relObjectIds",
        "rel_object_type": "relObjectType",
    },
)
class RosPipelineRelationsProps:
    def __init__(
        self,
        *,
        organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pipeline_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        rel_object_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
        rel_object_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosPipelineRelations``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations

        :param organization_id: 
        :param pipeline_id: 
        :param rel_object_ids: 
        :param rel_object_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72cf01e0fc9b2ff18c2c52385cc668c0baea13a4227641662d4bea2fda794840)
            check_type(argname="argument organization_id", value=organization_id, expected_type=type_hints["organization_id"])
            check_type(argname="argument pipeline_id", value=pipeline_id, expected_type=type_hints["pipeline_id"])
            check_type(argname="argument rel_object_ids", value=rel_object_ids, expected_type=type_hints["rel_object_ids"])
            check_type(argname="argument rel_object_type", value=rel_object_type, expected_type=type_hints["rel_object_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "organization_id": organization_id,
            "pipeline_id": pipeline_id,
            "rel_object_ids": rel_object_ids,
            "rel_object_type": rel_object_type,
        }

    @builtins.property
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        '''
        result = self._values.get("organization_id")
        assert result is not None, "Required property 'organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pipeline_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pipelineId: The pipeline ID, which can be obtained from the pipeline link.
        '''
        result = self._values.get("pipeline_id")
        assert result is not None, "Required property 'pipeline_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rel_object_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: relObjectIds: Ids of the associated resource. For now, only variable group ids are supported.
        '''
        result = self._values.get("rel_object_ids")
        assert result is not None, "Required property 'rel_object_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def rel_object_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        relObjectType: Associated resource type. Valid values:

        - VARIABLE_GROUP
        - OOS_APP_ID
        For now, only VARIABLE GROUP is supported.
        '''
        result = self._values.get("rel_object_type")
        assert result is not None, "Required property 'rel_object_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPipelineRelationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPipelineRun(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.RosPipelineRun",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DEVOPS::PipelineRun``, which is used to run a pipeline.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PipelineRun`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPipelineRunProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eed2672cf6b38128609595daf6cd7b47a6b5daa0732d78519585845629fa9704)
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
            type_hints = typing.get_type_hints(_typecheckingstub__40d195d10e41d533e4e21cc5e1417bd251a84f227cc5888271cf197657cf3ad3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPipelineRunId")
    def attr_pipeline_run_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PipelineRunId: Pipeline run id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPipelineRunId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__c2d54684ded6baf3013e56e70686836d6ed52afb03ec967ad9cea320f862d29a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="organizationId")
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "organizationId"))

    @organization_id.setter
    def organization_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50d47c6ed933155c835b15478f2af9e68d3454de3f4a4de461961a7086212bd4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "organizationId", value)

    @builtins.property
    @jsii.member(jsii_name="pipelineId")
    def pipeline_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pipelineId: The pipeline ID, which can be obtained from the pipeline link.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "pipelineId"))

    @pipeline_id.setter
    def pipeline_id(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0e52690452345c91ae9fd4c353670fa5281f74ee6d2b608ddb1fe2ec2f6d25c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pipelineId", value)

    @builtins.property
    @jsii.member(jsii_name="params")
    def params(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        params: Pipeline operating parameters. Keys:

        - **branchModeBranchs**: Branch mode runs branches.
        - **envs**: Running variables.
        - **runningBranchs**: Running branches whose key is the warehouse address.
        - **runningTags**: Running tags whose key is the warehouse address.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "params"))

    @params.setter
    def params(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__724d31713bdc85e8a24dd40ff5bae33188fb4e08e4bfef17d62a7215ab5eac41)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "params", value)

    @builtins.property
    @jsii.member(jsii_name="sync")
    def sync(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sync: Whether to wait synchronously for the result of the pipeline execution. If you select true, the resource will not be created until the pipeline is complete. **Default is false.**
        Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sync"))

    @sync.setter
    def sync(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16cbb0efa833e197b1d0a1ed569e68350129d954d2c12770898feaccdb3a495d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sync", value)

    @builtins.property
    @jsii.member(jsii_name="timeout")
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeout: Maximum wait time for pipeline execution in minutes. This parameter need only be configured if Sync is set to true. **Default is 10.**
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeout"))

    @timeout.setter
    def timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__914fb048e57c4e506ff612ac0bdbc54a0eee939dc0c13978f0bf1cd4d664fdbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeout", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-devops.RosPipelineRunProps",
    jsii_struct_bases=[],
    name_mapping={
        "organization_id": "organizationId",
        "pipeline_id": "pipelineId",
        "params": "params",
        "sync": "sync",
        "timeout": "timeout",
    },
)
class RosPipelineRunProps:
    def __init__(
        self,
        *,
        organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pipeline_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        params: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        sync: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPipelineRun``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun

        :param organization_id: 
        :param pipeline_id: 
        :param params: 
        :param sync: 
        :param timeout: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e4dcfa78a50062272d864ca541e1bfd6b4a3be430c02616f9af68b3ca74ec88)
            check_type(argname="argument organization_id", value=organization_id, expected_type=type_hints["organization_id"])
            check_type(argname="argument pipeline_id", value=pipeline_id, expected_type=type_hints["pipeline_id"])
            check_type(argname="argument params", value=params, expected_type=type_hints["params"])
            check_type(argname="argument sync", value=sync, expected_type=type_hints["sync"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "organization_id": organization_id,
            "pipeline_id": pipeline_id,
        }
        if params is not None:
            self._values["params"] = params
        if sync is not None:
            self._values["sync"] = sync
        if timeout is not None:
            self._values["timeout"] = timeout

    @builtins.property
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        '''
        result = self._values.get("organization_id")
        assert result is not None, "Required property 'organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pipeline_id(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: pipelineId: The pipeline ID, which can be obtained from the pipeline link.
        '''
        result = self._values.get("pipeline_id")
        assert result is not None, "Required property 'pipeline_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def params(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        params: Pipeline operating parameters. Keys:

        - **branchModeBranchs**: Branch mode runs branches.
        - **envs**: Running variables.
        - **runningBranchs**: Running branches whose key is the warehouse address.
        - **runningTags**: Running tags whose key is the warehouse address.
        '''
        result = self._values.get("params")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def sync(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sync: Whether to wait synchronously for the result of the pipeline execution. If you select true, the resource will not be created until the pipeline is complete. **Default is false.**
        Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
        '''
        result = self._values.get("sync")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeout: Maximum wait time for pipeline execution in minutes. This parameter need only be configured if Sync is set to true. **Default is 10.**
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPipelineRunProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVariableGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.RosVariableGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DEVOPS::VariableGroup``, which is used to create a variable group.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``VariableGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVariableGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c1706a729f444f8607cf8333c48499c10baac1d3239dbea3d34db352d05c508)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c2dddf3ebaa5b4242fa7151c8bff82b8a5986c32209d04eeb1c74365336ddd6e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrVariableGroupId")
    def attr_variable_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VariableGroupId: Variable group id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVariableGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__513a60f4bf36850eb1090806a713d238bf5ed2d7608b7a306cdd211256187cec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of variable group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7e7dba200a8efdfbdba2e6069ea4341954239d08cc3d7f9fba2b8944232cd9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="organizationId")
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "organizationId"))

    @organization_id.setter
    def organization_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0dcd2af0ef4b9d535c76adf76a081a2668cc552d8beed1369dc5231ad6b9812)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "organizationId", value)

    @builtins.property
    @jsii.member(jsii_name="variables")
    def variables(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVariableGroup.VariablesProperty"]]]:
        '''
        :Property: variables: Variables information.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVariableGroup.VariablesProperty"]]], jsii.get(self, "variables"))

    @variables.setter
    def variables(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVariableGroup.VariablesProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bb14b8b1c2983ac29742a0a56766e052ad0103f8433ae55ae54f82b70b5bad6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "variables", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of variable group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bef396b463c3b36fd719a71e9cde710b6179be96a91e1267fdacc02414c447b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-devops.RosVariableGroup.VariablesProperty",
        jsii_struct_bases=[],
        name_mapping={"is_encrypted": "isEncrypted", "name": "name", "value": "value"},
    )
    class VariablesProperty:
        def __init__(
            self,
            *,
            is_encrypted: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param is_encrypted: 
            :param name: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__34a15d479a4848c002fd1bebe75fa22f198de693c63d8bc070939b6d845b9274)
                check_type(argname="argument is_encrypted", value=is_encrypted, expected_type=type_hints["is_encrypted"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "is_encrypted": is_encrypted,
                "name": name,
                "value": value,
            }

        @builtins.property
        def is_encrypted(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: isEncrypted: Encryption or not.
            '''
            result = self._values.get("is_encrypted")
            assert result is not None, "Required property 'is_encrypted' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Name of the variable.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: Value of the variable.
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VariablesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-devops.RosVariableGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "organization_id": "organizationId",
        "variables": "variables",
        "description": "description",
    },
)
class RosVariableGroupProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        variables: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVariableGroup.VariablesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVariableGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup

        :param name: 
        :param organization_id: 
        :param variables: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb62e74f71edaffecdd72fa2194f3d84ae766685e31345140742e34b902d3e79)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument organization_id", value=organization_id, expected_type=type_hints["organization_id"])
            check_type(argname="argument variables", value=variables, expected_type=type_hints["variables"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "organization_id": organization_id,
            "variables": variables,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of variable group.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        '''
        result = self._values.get("organization_id")
        assert result is not None, "Required property 'organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def variables(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVariableGroup.VariablesProperty]]]:
        '''
        :Property: variables: Variables information.
        '''
        result = self._values.get("variables")
        assert result is not None, "Required property 'variables' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVariableGroup.VariablesProperty]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of variable group.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVariableGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IVariableGroup)
class VariableGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.VariableGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DEVOPS::VariableGroup``, which is used to create a variable group.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVariableGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VariableGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f25481c13f9f0c0a86c34406652a2c14c123fc38a73477920b90be0e2e68fab)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrVariableGroupId")
    def attr_variable_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VariableGroupId: Variable group id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVariableGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VariableGroupProps":
        return typing.cast("VariableGroupProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__624b475f46319c787dfeea6f5de8391b3a9b5bac8f2545287c50bc719a93154b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f78ce0bc8690dd7d4d83bd68a17a8f64d82c0d80396288a46f477544671aa07a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d00dd2538637933d85a921d79abed3536dfd39e7861baacdc7b23b1e4a5dc14b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-devops.VariableGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "organization_id": "organizationId",
        "variables": "variables",
        "description": "description",
    },
)
class VariableGroupProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        variables: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVariableGroup.VariablesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``VariableGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup

        :param name: Property name: The name of variable group.
        :param organization_id: Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        :param variables: Property variables: Variables information.
        :param description: Property description: The description of variable group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f48df084ae4b9fe388340d242c457b08a61431be85ff1ede34cf163741ef440)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument organization_id", value=organization_id, expected_type=type_hints["organization_id"])
            check_type(argname="argument variables", value=variables, expected_type=type_hints["variables"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "organization_id": organization_id,
            "variables": variables,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of variable group.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def organization_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.'''
        result = self._values.get("organization_id")
        assert result is not None, "Required property 'organization_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def variables(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVariableGroup.VariablesProperty]]]:
        '''Property variables: Variables information.'''
        result = self._values.get("variables")
        assert result is not None, "Required property 'variables' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVariableGroup.VariablesProperty]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of variable group.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VariableGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IHostGroup)
class HostGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.HostGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DEVOPS::HostGroup``, which is used to create a host group.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHostGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-hostgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[HostGroupProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d57d664cd9856802b0eafdcdfc868df58424b0f6865e48fa0cfdef1b0edfe430)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHostGroupId")
    def attr_host_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostGroupId: The id of the host group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHostGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HostGroupProps:
        return typing.cast(HostGroupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ee7c5ba5b674bb6b0c2574a544f90904abd14d7b0a55062f84f41b1b4f55704)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93a3dd2c14ab056517e5a1d17bc1dc4928a6c69008f3c9747cacb62fffa88ec7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0a64f2c2aedb570147001a8ecf480c3504691cc599c3a0aad531f0c2b7876aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "HostGroup",
    "HostGroupProps",
    "IHostGroup",
    "IPipeline",
    "IPipelineRelations",
    "IPipelineRun",
    "IVariableGroup",
    "Pipeline",
    "PipelineProps",
    "PipelineRelations",
    "PipelineRelationsProps",
    "PipelineRun",
    "PipelineRunProps",
    "RosHostGroup",
    "RosHostGroupProps",
    "RosPipeline",
    "RosPipelineProps",
    "RosPipelineRelations",
    "RosPipelineRelationsProps",
    "RosPipelineRun",
    "RosPipelineRunProps",
    "RosVariableGroup",
    "RosVariableGroupProps",
    "VariableGroup",
    "VariableGroupProps",
]

publication.publish()

def _typecheckingstub__479b32c1718b7fc7c26bca41898094ff529fc13c791e8ec57615a728d8c090be(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_connection_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    aliyun_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_label_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_label_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    env_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    machine_infos: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHostGroup.MachineInfosProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    tag_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41075a0ab71478dc9168b0be94b7354d99ac937ac95f5d59a0c4504e2db8ee69(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PipelineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__376dbe57279fc3200a19e4c933b05407d46d495caeb516dcd504eb2124968c42(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6680339cbb2783e5cf1d7ad1ff5f72676c742b7941902a074ddfcf79e4871174(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71a20e4899f559df4050fc4fad02bd2f2a5458f9ea9f13164d7f8d92b9b3cee4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07a322d3c63f84952812459e1681478612bdd543d6e916e16b1bbf09cc95134f(
    *,
    content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43d4778588e0a664b2485b70ea5fb5a78130f93a4588f0d7e45c722a3dbb631a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PipelineRelationsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe72ebcd61b4cdbb49f16d924470f47bd78dee220b8f68bb592c3dd1bbd6eafe(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d2fbf8ee04f579c11f32d13547ef1c829ff36428ffe8a842f4c0147847ddaaf(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ed3529b2e43e742c81c53e730f2a2eb0878c4d14c0bcc2f5809e4bcf902e20b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__485cfe79037e8a1a4635c8492e85528bdb6551af36516bd2400323dfe7cdaea1(
    *,
    organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pipeline_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    rel_object_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    rel_object_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50e88a6da8ca59d27c749c9c307717afa82e83b2d08c070cfd7bd28071a7c76f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PipelineRunProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b2bda7492820bec0dd7b96cc991cf9075026dcf64233a76ea4021ad121a60e0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de2b67f2f73b1fc8b5686a4be18c6b678ad1e69e45d86f2591d2cae7817532ac(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60ff1b32bd3f51e7ea82c27126ae22dcf0469ad99ecf6c393543f6db55e41d04(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dbc2adbf39254a34ede98482f68880c4320cdeb4df712efe01dbe6657a2cd01(
    *,
    organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pipeline_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    params: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    sync: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4860cfe5cd458ab67e95e319ed56f8e68df738f346bd5820d127c20032bf0a1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHostGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9cf5261897cc0b6de015b6775116f7aee1ff54e5cd0415193e139cfe8d09bf9f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64b17f2ca7575201f9716c84ad7c9b12897fec04f8bddc01dfc408e94d0bdb6b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2c9ea8bddd864def280d048c36405159b03c531bfa54f32cf2e5d200bf60d87(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3339522019649fed954962ec2a55d4d56c3b7a18d6cc51d6f1ab5cf716371ff3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49f7b1978f7a3c444b7d90f44184124cc5e050c34c9c87884e7264e3a73e967c(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__247a785ce199458e2f2b120e91c5b3c84a640e4b05bbdf157e4fdeef94196f6b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7536c21064c05ddf81558496361ca1384abceb347055d3809bdc469858912548(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0348bf0eaf495f85c22cff22603a0d089813d561995788c11697b61cc77b2e05(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a027dbacd9ef0270930e64a4379a3a2a867bfa3930d41c0616703c3329d32df3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5512b04622312f47bf834113425f008a7ba942680cae5590b66c99b8b533153b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4253055fd9144e6bbecfb684ac33197d5f13c545e1016727a0632ecbdc4a5e43(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosHostGroup.MachineInfosProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5820e2fb1d986915bd4d8d6d0ed502e151628d5ff04b2a2bd31643e20026311a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adc7db31bceb8771965c8e008fe6056debb3fadd7d3499579ef673fcdb6df5d8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__caacd68bb2744f1fbf24679c60f6270537bc1470452a6a5ef4cdb6c796885072(
    *,
    machine_sn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    aliyun_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7206d2a0eab7e2006c690d939586cb056fb7f8d42fb647fadccb497c05e507b0(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_connection_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    aliyun_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_label_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_label_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    env_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    machine_infos: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosHostGroup.MachineInfosProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    tag_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bf3079d64432f73b0c8b9399684f7971e0a02556d241cf412884eccb72c9fdf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPipelineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__473f49317e89b23b3da420a56b11120596306162c2eb8173fec11e0df270751a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3e967ee2a89d17a256ababff159579e0824195e308e41faef3d87bd6ae509b5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93454ac51c73e45b2e7553a0ac124568a453b3535dafec71c51b4cbcd726b8a8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5eb4adecfb3ab53eb7f0c249de02fa1c605ed21afad94528b27e9e93a48c05b3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fc0fd0eeb9b19c43958b14f2405e353150119faff70fd9b294ebeca22dd5dd1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e21a8b5ae1177ff52704a2271ebb0cfcdefe68aeb637059014052d32c9fb494(
    *,
    content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6905649029a743ed6debd63dfcb52d30215a7f71492010fd754cd1affab3f656(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPipelineRelationsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5311aa003cc1d00ecfb03b7787d7663180d389fc5b899487307885ec38fa4042(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6b32b6a4b8b2c564832c46cc48427e16a1a21e557d0d8be014551570a88d851(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a93c89540bb8bedf793a30bf9b6febb39e2a853b008c953f74b93a0db9d21b40(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f71d4292185022a7321b059b8bbc77c72dada77fb48db46fb0c0feb9b37f0696(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d3494e048705c67afadcc0f7b00e5381b8083780c4f6ccfa49d616f6acd3056(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c306aac218351ecd21e2054263ba53e46d5a1ed8f7d53d18f2a7dcf36bf9400a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72cf01e0fc9b2ff18c2c52385cc668c0baea13a4227641662d4bea2fda794840(
    *,
    organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pipeline_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    rel_object_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    rel_object_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eed2672cf6b38128609595daf6cd7b47a6b5daa0732d78519585845629fa9704(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPipelineRunProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40d195d10e41d533e4e21cc5e1417bd251a84f227cc5888271cf197657cf3ad3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2d54684ded6baf3013e56e70686836d6ed52afb03ec967ad9cea320f862d29a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50d47c6ed933155c835b15478f2af9e68d3454de3f4a4de461961a7086212bd4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0e52690452345c91ae9fd4c353670fa5281f74ee6d2b608ddb1fe2ec2f6d25c(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__724d31713bdc85e8a24dd40ff5bae33188fb4e08e4bfef17d62a7215ab5eac41(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16cbb0efa833e197b1d0a1ed569e68350129d954d2c12770898feaccdb3a495d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__914fb048e57c4e506ff612ac0bdbc54a0eee939dc0c13978f0bf1cd4d664fdbc(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e4dcfa78a50062272d864ca541e1bfd6b4a3be430c02616f9af68b3ca74ec88(
    *,
    organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pipeline_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    params: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    sync: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c1706a729f444f8607cf8333c48499c10baac1d3239dbea3d34db352d05c508(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVariableGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2dddf3ebaa5b4242fa7151c8bff82b8a5986c32209d04eeb1c74365336ddd6e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__513a60f4bf36850eb1090806a713d238bf5ed2d7608b7a306cdd211256187cec(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7e7dba200a8efdfbdba2e6069ea4341954239d08cc3d7f9fba2b8944232cd9b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0dcd2af0ef4b9d535c76adf76a081a2668cc552d8beed1369dc5231ad6b9812(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bb14b8b1c2983ac29742a0a56766e052ad0103f8433ae55ae54f82b70b5bad6(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVariableGroup.VariablesProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bef396b463c3b36fd719a71e9cde710b6179be96a91e1267fdacc02414c447b0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34a15d479a4848c002fd1bebe75fa22f198de693c63d8bc070939b6d845b9274(
    *,
    is_encrypted: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb62e74f71edaffecdd72fa2194f3d84ae766685e31345140742e34b902d3e79(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    variables: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVariableGroup.VariablesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f25481c13f9f0c0a86c34406652a2c14c123fc38a73477920b90be0e2e68fab(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VariableGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__624b475f46319c787dfeea6f5de8391b3a9b5bac8f2545287c50bc719a93154b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f78ce0bc8690dd7d4d83bd68a17a8f64d82c0d80396288a46f477544671aa07a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d00dd2538637933d85a921d79abed3536dfd39e7861baacdc7b23b1e4a5dc14b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f48df084ae4b9fe388340d242c457b08a61431be85ff1ede34cf163741ef440(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    variables: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVariableGroup.VariablesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d57d664cd9856802b0eafdcdfc868df58424b0f6865e48fa0cfdef1b0edfe430(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HostGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ee7c5ba5b674bb6b0c2574a544f90904abd14d7b0a55062f84f41b1b4f55704(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93a3dd2c14ab056517e5a1d17bc1dc4928a6c69008f3c9747cacb62fffa88ec7(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0a64f2c2aedb570147001a8ecf480c3504691cc599c3a0aad531f0c2b7876aa(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
