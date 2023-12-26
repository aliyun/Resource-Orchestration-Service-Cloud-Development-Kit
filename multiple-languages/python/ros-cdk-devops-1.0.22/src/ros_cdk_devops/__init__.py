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


class Pipeline(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.Pipeline",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DEVOPS::Pipeline``ALIYUN::DFS::AccessGroup is used to create a permission group.

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
    def attr_pipeline_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PipelineId: Pipeline id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPipelineId"))


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


class PipelineRelations(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.PipelineRelations",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DEVOPS::PipelineRelations``.

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


class PipelineRun(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.PipelineRun",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DEVOPS::PipelineRun``.

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
    def attr_pipeline_run_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PipelineRunId: Pipeline run id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPipelineRunId"))


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


class RosPipeline(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.RosPipeline",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DEVOPS::Pipeline``ALIYUN::DFS::AccessGroup is used to create a permission group.

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DEVOPS::PipelineRelations``.

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DEVOPS::PipelineRun``.

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DEVOPS::VariableGroup``.

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


class VariableGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-devops.VariableGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DEVOPS::VariableGroup``.

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
    def attr_variable_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VariableGroupId: Variable group id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVariableGroupId"))


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


__all__ = [
    "Pipeline",
    "PipelineProps",
    "PipelineRelations",
    "PipelineRelationsProps",
    "PipelineRun",
    "PipelineRunProps",
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

def _typecheckingstub__41075a0ab71478dc9168b0be94b7354d99ac937ac95f5d59a0c4504e2db8ee69(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PipelineProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
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

def _typecheckingstub__0f48df084ae4b9fe388340d242c457b08a61431be85ff1ede34cf163741ef440(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    organization_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    variables: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVariableGroup.VariablesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
