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

from ._jsii import *

import ros_cdk_core


class Project(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-datahub.Project",
):
    '''A ROS resource type:  ``ALIYUN::DATAHUB::Project``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ProjectProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ProjectName: Project name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProjectName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-datahub.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={"comment": "comment", "project_name": "projectName"},
)
class ProjectProps:
    def __init__(
        self,
        *,
        comment: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::DATAHUB::Project``.

        :param comment: Property comment: The comment of project.
        :param project_name: Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "comment": comment,
            "project_name": project_name,
        }

    @builtins.property
    def comment(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property comment: The comment of project.'''
        result = self._values.get("comment")
        assert result is not None, "Required property 'comment' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property projectName: The name of the project.

        Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProject(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-datahub.RosProject",
):
    '''A ROS template type:  ``ALIYUN::DATAHUB::Project``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosProjectProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DATAHUB::Project``.

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
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ProjectName: Project name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProjectName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="comment")
    def comment(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: comment: The comment of project.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "comment", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        comment: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::DATAHUB::Project``.

        :param comment: 
        :param project_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "comment": comment,
            "project_name": project_name,
        }

    @builtins.property
    def comment(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: comment: The comment of project.
        '''
        result = self._values.get("comment")
        assert result is not None, "Required property 'comment' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTopic(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-datahub.RosTopic",
):
    '''A ROS template type:  ``ALIYUN::DATAHUB::Topic``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTopicProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::DATAHUB::Topic``.

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
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ProjectName: Project name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProjectName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TopicName: Topic name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopicName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="comment")
    def comment(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: comment: The comment of topic.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "comment", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "projectName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="recordType")
    def record_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "recordType"))

    @record_type.setter
    def record_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "recordType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="topicName")
    def topic_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "topicName"))

    @topic_name.setter
    def topic_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "topicName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="lifecycle")
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: lifecycle: Data storage life cycle.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "lifecycle"))

    @lifecycle.setter
    def lifecycle(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "lifecycle", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="recordSchema")
    def record_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "recordSchema"))

    @record_schema.setter
    def record_schema(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "recordSchema", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="shardCount")
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: shardCount: Initial shard number.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "shardCount"))

    @shard_count.setter
    def shard_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
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
        comment: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        record_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        topic_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        lifecycle: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        record_schema: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def comment(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: comment: The comment of topic.
        '''
        result = self._values.get("comment")
        assert result is not None, "Required property 'comment' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def record_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
        '''
        result = self._values.get("record_type")
        assert result is not None, "Required property 'record_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def topic_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: lifecycle: Data storage life cycle.
        '''
        result = self._values.get("lifecycle")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def record_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
        '''
        result = self._values.get("record_schema")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: shardCount: Initial shard number.
        '''
        result = self._values.get("shard_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Topic(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-datahub.Topic",
):
    '''A ROS resource type:  ``ALIYUN::DATAHUB::Topic``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TopicProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ProjectName: Project name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProjectName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute TopicName: Topic name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopicName"))


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
        comment: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        record_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        topic_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        lifecycle: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        record_schema: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        shard_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def comment(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property comment: The comment of topic.'''
        result = self._values.get("comment")
        assert result is not None, "Required property 'comment' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property projectName: The name of the project.

        Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def record_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property recordType: Record type.

        TUPLE: structured data, BLOB: unstructured data.
        '''
        result = self._values.get("record_type")
        assert result is not None, "Required property 'record_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def topic_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property topicName: The name of the topic.

        Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        '''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property lifecycle: Data storage life cycle.'''
        result = self._values.get("lifecycle")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def record_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.'''
        result = self._values.get("record_schema")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def shard_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property shardCount: Initial shard number.'''
        result = self._values.get("shard_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
