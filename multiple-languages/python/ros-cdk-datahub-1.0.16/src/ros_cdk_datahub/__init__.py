'''
## Aliyun ROS DATAHUB Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DATAHUB from '@alicloud/ros-cdk-datahub';
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


class Project(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-datahub.Project",
):
    '''A ROS resource type:  ``ALIYUN::DATAHUB::Project``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DATAHUB::Project``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50dfc056b9398a9ab9b34003ab17cd155bbec18da3d12878eb2e9aea72c62457)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProjectName: Project name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-datahub.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={"comment": "comment", "project_name": "projectName"},
)
class ProjectProps:
    def __init__(
        self,
        *,
        comment: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::DATAHUB::Project``.

        :param comment: Property comment: The comment of project.
        :param project_name: Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9caf7bd29056a8268cf50ee1d063260066d8323d82fc4af1d3b315db6f267492)
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "comment": comment,
            "project_name": project_name,
        }

    @builtins.property
    def comment(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property comment: The comment of project.'''
        result = self._values.get("comment")
        assert result is not None, "Required property 'comment' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectName: The name of the project.

        Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProject(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-datahub.RosProject",
):
    '''A ROS template type:  ``ALIYUN::DATAHUB::Project``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DATAHUB::Project``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c7338b071153bcfde8d33207e841449ed5308c8c8cbc44c4680ae31962e8ffa)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f0546defe91eb8a66a1ea636b4f1ec81728fa886fe57b14a4cfcbc2d3f468518)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProjectName: Project name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="comment")
    def comment(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: comment: The comment of project.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e4498523183ed4f393ba5c8c250755a306e8f9a1eb515ae6d4f2bdac716ab67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comment", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a545595a1493c7c89c0906475d685804e0f585abc3c9b2c15670ffd77661fdc7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cfbe9cc5f57cdaed738d0bf826cb2f83b6381c9c63c09a1cc9566cd87d9f6f39)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-datahub.RosProjectProps",
    jsii_struct_bases=[],
    name_mapping={"comment": "comment", "project_name": "projectName"},
)
class RosProjectProps:
    def __init__(
        self,
        *,
        comment: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::DATAHUB::Project``.

        :param comment: 
        :param project_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c941e2878510b0e82c16aefc25065ae5e15014fd0ebe9b58488bf01860292cbd)
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "comment": comment,
            "project_name": project_name,
        }

    @builtins.property
    def comment(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: comment: The comment of project.
        '''
        result = self._values.get("comment")
        assert result is not None, "Required property 'comment' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTopic(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-datahub.RosTopic",
):
    '''A ROS template type:  ``ALIYUN::DATAHUB::Topic``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTopicProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DATAHUB::Topic``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f557455eb1e05e5635ae5ba3c8067ed00f6ae74eef10386f06ebef2dd108abc3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5360d56ea04a9e8324ffc9a4c7e483a97873cda20bac66aa05085ce83d909934)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProjectName: Project name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TopicName: Topic name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="comment")
    def comment(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: comment: The comment of topic.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4db97e1a0458078f3625092643ba8263b7bc1176a5fc436ca8df969ef207cfe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comment", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1a29f3c52071495ef4b54972c955f138e2d19476f8849fe1f1b04b19dadcc3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="projectName")
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9713540a0f64c06145ebbb78d0fda327410314f8c065693805c05f8652a9d315)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "projectName", value)

    @builtins.property
    @jsii.member(jsii_name="recordType")
    def record_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "recordType"))

    @record_type.setter
    def record_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__676077b907903c271936dd019cc8df947b589ac06b5111d6d6392a56bb3cc8b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "recordType", value)

    @builtins.property
    @jsii.member(jsii_name="topicName")
    def topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "topicName"))

    @topic_name.setter
    def topic_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3937f1a2862c93b1978bf1ab4181a9009581622b4c9f5285975cf12661120fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topicName", value)

    @builtins.property
    @jsii.member(jsii_name="lifecycle")
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lifecycle: Data storage life cycle.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lifecycle"))

    @lifecycle.setter
    def lifecycle(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1a48c4cb00cd9808afa6ba578ad39b09c61fc8fc462279be799bb748dde3040)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lifecycle", value)

    @builtins.property
    @jsii.member(jsii_name="recordSchema")
    def record_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "recordSchema"))

    @record_schema.setter
    def record_schema(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a793434caaa9cdf5980983719b50bc3d0a3a791c79db54e2ca7d2b50bdacd9cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "recordSchema", value)

    @builtins.property
    @jsii.member(jsii_name="shardCount")
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: shardCount: Initial shard number.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "shardCount"))

    @shard_count.setter
    def shard_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a523c0b86ca10bd089b9688a250dafa282f9ec5d92791b8a488cceb2829f7b67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "shardCount", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-datahub.RosTopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "comment": "comment",
        "project_name": "projectName",
        "record_type": "recordType",
        "topic_name": "topicName",
        "lifecycle": "lifecycle",
        "record_schema": "recordSchema",
        "shard_count": "shardCount",
    },
)
class RosTopicProps:
    def __init__(
        self,
        *,
        comment: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        record_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        lifecycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        record_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DATAHUB::Topic``.

        :param comment: 
        :param project_name: 
        :param record_type: 
        :param topic_name: 
        :param lifecycle: 
        :param record_schema: 
        :param shard_count: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52249b77163a1f13d503c214ce74f6392c7b8079d2111733578233453e878dfe)
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument record_type", value=record_type, expected_type=type_hints["record_type"])
            check_type(argname="argument topic_name", value=topic_name, expected_type=type_hints["topic_name"])
            check_type(argname="argument lifecycle", value=lifecycle, expected_type=type_hints["lifecycle"])
            check_type(argname="argument record_schema", value=record_schema, expected_type=type_hints["record_schema"])
            check_type(argname="argument shard_count", value=shard_count, expected_type=type_hints["shard_count"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "comment": comment,
            "project_name": project_name,
            "record_type": record_type,
            "topic_name": topic_name,
        }
        if lifecycle is not None:
            self._values["lifecycle"] = lifecycle
        if record_schema is not None:
            self._values["record_schema"] = record_schema
        if shard_count is not None:
            self._values["shard_count"] = shard_count

    @builtins.property
    def comment(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: comment: The comment of topic.
        '''
        result = self._values.get("comment")
        assert result is not None, "Required property 'comment' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def record_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
        '''
        result = self._values.get("record_type")
        assert result is not None, "Required property 'record_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lifecycle: Data storage life cycle.
        '''
        result = self._values.get("lifecycle")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def record_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
        '''
        result = self._values.get("record_schema")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: shardCount: Initial shard number.
        '''
        result = self._values.get("shard_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Topic(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-datahub.Topic",
):
    '''A ROS resource type:  ``ALIYUN::DATAHUB::Topic``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TopicProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::DATAHUB::Topic``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f65435665b7039f0e596bf268460f6a9aa1ccc244db93ee8254e74009570a65)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProjectName: Project name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProjectName"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TopicName: Topic name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-datahub.TopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "comment": "comment",
        "project_name": "projectName",
        "record_type": "recordType",
        "topic_name": "topicName",
        "lifecycle": "lifecycle",
        "record_schema": "recordSchema",
        "shard_count": "shardCount",
    },
)
class TopicProps:
    def __init__(
        self,
        *,
        comment: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        record_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        lifecycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        record_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::DATAHUB::Topic``.

        :param comment: Property comment: The comment of topic.
        :param project_name: Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        :param record_type: Property recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
        :param topic_name: Property topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        :param lifecycle: Property lifecycle: Data storage life cycle.
        :param record_schema: Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
        :param shard_count: Property shardCount: Initial shard number.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d2a1de7a80dae497915bfcd85a2674bf386ba9d994d93bcd20cfa68aa5c537c)
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument project_name", value=project_name, expected_type=type_hints["project_name"])
            check_type(argname="argument record_type", value=record_type, expected_type=type_hints["record_type"])
            check_type(argname="argument topic_name", value=topic_name, expected_type=type_hints["topic_name"])
            check_type(argname="argument lifecycle", value=lifecycle, expected_type=type_hints["lifecycle"])
            check_type(argname="argument record_schema", value=record_schema, expected_type=type_hints["record_schema"])
            check_type(argname="argument shard_count", value=shard_count, expected_type=type_hints["shard_count"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "comment": comment,
            "project_name": project_name,
            "record_type": record_type,
            "topic_name": topic_name,
        }
        if lifecycle is not None:
            self._values["lifecycle"] = lifecycle
        if record_schema is not None:
            self._values["record_schema"] = record_schema
        if shard_count is not None:
            self._values["shard_count"] = shard_count

    @builtins.property
    def comment(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property comment: The comment of topic.'''
        result = self._values.get("comment")
        assert result is not None, "Required property 'comment' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property projectName: The name of the project.

        Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def record_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property recordType: Record type.

        TUPLE: structured data, BLOB: unstructured data.
        '''
        result = self._values.get("record_type")
        assert result is not None, "Required property 'record_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property topicName: The name of the topic.

        Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lifecycle: Data storage life cycle.'''
        result = self._values.get("lifecycle")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def record_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.'''
        result = self._values.get("record_schema")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property shardCount: Initial shard number.'''
        result = self._values.get("shard_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Project",
    "ProjectProps",
    "RosProject",
    "RosProjectProps",
    "RosTopic",
    "RosTopicProps",
    "Topic",
    "TopicProps",
]

publication.publish()

def _typecheckingstub__50dfc056b9398a9ab9b34003ab17cd155bbec18da3d12878eb2e9aea72c62457(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9caf7bd29056a8268cf50ee1d063260066d8323d82fc4af1d3b315db6f267492(
    *,
    comment: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c7338b071153bcfde8d33207e841449ed5308c8c8cbc44c4680ae31962e8ffa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0546defe91eb8a66a1ea636b4f1ec81728fa886fe57b14a4cfcbc2d3f468518(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e4498523183ed4f393ba5c8c250755a306e8f9a1eb515ae6d4f2bdac716ab67(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a545595a1493c7c89c0906475d685804e0f585abc3c9b2c15670ffd77661fdc7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfbe9cc5f57cdaed738d0bf826cb2f83b6381c9c63c09a1cc9566cd87d9f6f39(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c941e2878510b0e82c16aefc25065ae5e15014fd0ebe9b58488bf01860292cbd(
    *,
    comment: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f557455eb1e05e5635ae5ba3c8067ed00f6ae74eef10386f06ebef2dd108abc3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTopicProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5360d56ea04a9e8324ffc9a4c7e483a97873cda20bac66aa05085ce83d909934(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4db97e1a0458078f3625092643ba8263b7bc1176a5fc436ca8df969ef207cfe(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1a29f3c52071495ef4b54972c955f138e2d19476f8849fe1f1b04b19dadcc3c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9713540a0f64c06145ebbb78d0fda327410314f8c065693805c05f8652a9d315(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__676077b907903c271936dd019cc8df947b589ac06b5111d6d6392a56bb3cc8b2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3937f1a2862c93b1978bf1ab4181a9009581622b4c9f5285975cf12661120fa(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1a48c4cb00cd9808afa6ba578ad39b09c61fc8fc462279be799bb748dde3040(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a793434caaa9cdf5980983719b50bc3d0a3a791c79db54e2ca7d2b50bdacd9cf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a523c0b86ca10bd089b9688a250dafa282f9ec5d92791b8a488cceb2829f7b67(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52249b77163a1f13d503c214ce74f6392c7b8079d2111733578233453e878dfe(
    *,
    comment: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    record_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    lifecycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    record_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f65435665b7039f0e596bf268460f6a9aa1ccc244db93ee8254e74009570a65(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TopicProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d2a1de7a80dae497915bfcd85a2674bf386ba9d994d93bcd20cfa68aa5c537c(
    *,
    comment: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    record_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    lifecycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    record_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    shard_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
