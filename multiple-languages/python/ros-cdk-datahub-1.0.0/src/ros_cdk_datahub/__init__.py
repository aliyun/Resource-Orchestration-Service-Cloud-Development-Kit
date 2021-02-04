"""
## Aliyun ROS DATAHUB Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_datahub as DATAHUB
```
"""
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
    """A ROS resource type:  ``ALIYUN::DATAHUB::Project``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ProjectProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::DATAHUB::Project``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Project, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> typing.Any:
        """
        :Attribute: ProjectName: Project name
        """
        return jsii.get(self, "attrProjectName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-datahub.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={"comment": "comment", "project_name": "projectName"},
)
class ProjectProps:
    def __init__(self, *, comment: builtins.str, project_name: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::DATAHUB::Project``.

        :param comment: 
        :param project_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "comment": comment,
            "project_name": project_name,
        }

    @builtins.property
    def comment(self) -> builtins.str:
        """
        :Property: comment: The comment of project.
        """
        result = self._values.get("comment")
        assert result is not None, "Required property 'comment' is missing"
        return result

    @builtins.property
    def project_name(self) -> builtins.str:
        """
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        """
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return result

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
    """A ROS template type:  ``ALIYUN::DATAHUB::Project``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosProjectProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::DATAHUB::Project``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosProject, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> typing.Any:
        """
        :Attribute: ProjectName: Project name
        """
        return jsii.get(self, "attrProjectName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="comment")
    def comment(self) -> builtins.str:
        """
        :Property: comment: The comment of project.
        """
        return jsii.get(self, "comment")

    @comment.setter # type: ignore
    def comment(self, value: builtins.str) -> None:
        jsii.set(self, "comment", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> builtins.str:
        """
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        """
        return jsii.get(self, "projectName")

    @project_name.setter # type: ignore
    def project_name(self, value: builtins.str) -> None:
        jsii.set(self, "projectName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-datahub.RosProjectProps",
    jsii_struct_bases=[],
    name_mapping={"comment": "comment", "project_name": "projectName"},
)
class RosProjectProps:
    def __init__(self, *, comment: builtins.str, project_name: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::DATAHUB::Project``.

        :param comment: 
        :param project_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "comment": comment,
            "project_name": project_name,
        }

    @builtins.property
    def comment(self) -> builtins.str:
        """
        :Property: comment: The comment of project.
        """
        result = self._values.get("comment")
        assert result is not None, "Required property 'comment' is missing"
        return result

    @builtins.property
    def project_name(self) -> builtins.str:
        """
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        """
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return result

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
    """A ROS template type:  ``ALIYUN::DATAHUB::Topic``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTopicProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::DATAHUB::Topic``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosTopic, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> typing.Any:
        """
        :Attribute: ProjectName: Project name
        """
        return jsii.get(self, "attrProjectName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> typing.Any:
        """
        :Attribute: TopicName: Topic name
        """
        return jsii.get(self, "attrTopicName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="comment")
    def comment(self) -> builtins.str:
        """
        :Property: comment: The comment of topic.
        """
        return jsii.get(self, "comment")

    @comment.setter # type: ignore
    def comment(self, value: builtins.str) -> None:
        jsii.set(self, "comment", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> builtins.str:
        """
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        """
        return jsii.get(self, "projectName")

    @project_name.setter # type: ignore
    def project_name(self, value: builtins.str) -> None:
        jsii.set(self, "projectName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="recordType")
    def record_type(self) -> builtins.str:
        """
        :Property: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
        """
        return jsii.get(self, "recordType")

    @record_type.setter # type: ignore
    def record_type(self, value: builtins.str) -> None:
        jsii.set(self, "recordType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="topicName")
    def topic_name(self) -> builtins.str:
        """
        :Property: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        """
        return jsii.get(self, "topicName")

    @topic_name.setter # type: ignore
    def topic_name(self, value: builtins.str) -> None:
        jsii.set(self, "topicName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="lifecycle")
    def lifecycle(self) -> typing.Optional[jsii.Number]:
        """
        :Property: lifecycle: Data storage life cycle.
        """
        return jsii.get(self, "lifecycle")

    @lifecycle.setter # type: ignore
    def lifecycle(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "lifecycle", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="recordSchema")
    def record_schema(self) -> typing.Optional[builtins.str]:
        """
        :Property: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
        """
        return jsii.get(self, "recordSchema")

    @record_schema.setter # type: ignore
    def record_schema(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "recordSchema", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="shardCount")
    def shard_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: shardCount: Initial shard number.
        """
        return jsii.get(self, "shardCount")

    @shard_count.setter # type: ignore
    def shard_count(self, value: typing.Optional[jsii.Number]) -> None:
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
        comment: builtins.str,
        project_name: builtins.str,
        record_type: builtins.str,
        topic_name: builtins.str,
        lifecycle: typing.Optional[jsii.Number] = None,
        record_schema: typing.Optional[builtins.str] = None,
        shard_count: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DATAHUB::Topic``.

        :param comment: 
        :param project_name: 
        :param record_type: 
        :param topic_name: 
        :param lifecycle: 
        :param record_schema: 
        :param shard_count: 
        """
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
    def comment(self) -> builtins.str:
        """
        :Property: comment: The comment of topic.
        """
        result = self._values.get("comment")
        assert result is not None, "Required property 'comment' is missing"
        return result

    @builtins.property
    def project_name(self) -> builtins.str:
        """
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        """
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return result

    @builtins.property
    def record_type(self) -> builtins.str:
        """
        :Property: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
        """
        result = self._values.get("record_type")
        assert result is not None, "Required property 'record_type' is missing"
        return result

    @builtins.property
    def topic_name(self) -> builtins.str:
        """
        :Property: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        """
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return result

    @builtins.property
    def lifecycle(self) -> typing.Optional[jsii.Number]:
        """
        :Property: lifecycle: Data storage life cycle.
        """
        result = self._values.get("lifecycle")
        return result

    @builtins.property
    def record_schema(self) -> typing.Optional[builtins.str]:
        """
        :Property: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
        """
        result = self._values.get("record_schema")
        return result

    @builtins.property
    def shard_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: shardCount: Initial shard number.
        """
        result = self._values.get("shard_count")
        return result

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
    """A ROS resource type:  ``ALIYUN::DATAHUB::Topic``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TopicProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::DATAHUB::Topic``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Topic, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> typing.Any:
        """
        :Attribute: ProjectName: Project name
        """
        return jsii.get(self, "attrProjectName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> typing.Any:
        """
        :Attribute: TopicName: Topic name
        """
        return jsii.get(self, "attrTopicName")


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
        comment: builtins.str,
        project_name: builtins.str,
        record_type: builtins.str,
        topic_name: builtins.str,
        lifecycle: typing.Optional[jsii.Number] = None,
        record_schema: typing.Optional[builtins.str] = None,
        shard_count: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::DATAHUB::Topic``.

        :param comment: 
        :param project_name: 
        :param record_type: 
        :param topic_name: 
        :param lifecycle: 
        :param record_schema: 
        :param shard_count: 
        """
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
    def comment(self) -> builtins.str:
        """
        :Property: comment: The comment of topic.
        """
        result = self._values.get("comment")
        assert result is not None, "Required property 'comment' is missing"
        return result

    @builtins.property
    def project_name(self) -> builtins.str:
        """
        :Property: projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        """
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return result

    @builtins.property
    def record_type(self) -> builtins.str:
        """
        :Property: recordType: Record type. TUPLE: structured data, BLOB: unstructured data.
        """
        result = self._values.get("record_type")
        assert result is not None, "Required property 'record_type' is missing"
        return result

    @builtins.property
    def topic_name(self) -> builtins.str:
        """
        :Property: topicName: The name of the topic. Length [3, 64]. Beginning with characters, only characters, numbers and _ are allowed.
        """
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return result

    @builtins.property
    def lifecycle(self) -> typing.Optional[jsii.Number]:
        """
        :Property: lifecycle: Data storage life cycle.
        """
        result = self._values.get("lifecycle")
        return result

    @builtins.property
    def record_schema(self) -> typing.Optional[builtins.str]:
        """
        :Property: recordSchema: When creating a TUPLE type topic, you need to specify the schema, but the BLOB type does not pass this parameter.
        """
        result = self._values.get("record_schema")
        return result

    @builtins.property
    def shard_count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: shardCount: Initial shard number.
        """
        result = self._values.get("shard_count")
        return result

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
