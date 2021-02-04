"""
## Aliyun ROS KAFKA Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_kafka as KAFKA
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


class RosTopic(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.RosTopic",
):
    """A ROS template type:  ``ALIYUN::KAFKA::Topic``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTopicProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::KAFKA::Topic``.

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
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute:

        InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(self) -> typing.Any:
        """
        :Attribute: Topic: Topic name.
        """
        return jsii.get(self, "attrTopic")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property:

        instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="remark")
    def remark(self) -> builtins.str:
        """
        :Property:

        remark: The description of the topic. The value of this parameter must meet the following
        requirements:
        The value can only contain letters, digits, hyphens (-), and underscores (_).
        The value must be 3 to 64 characters in length.
        """
        return jsii.get(self, "remark")

    @remark.setter # type: ignore
    def remark(self, value: builtins.str) -> None:
        jsii.set(self, "remark", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="topic")
    def topic(self) -> builtins.str:
        """
        :Property:

        topic: The name of the topic. The value of this parameter must meet the following requirements:
        The name can only contain letters, digits, hyphens (-), and underscores (_).
        The name must be 3 to 64 characters in length, and will be automatically truncated
        if it contains more characters.
        The name cannot be modified after being created.
        """
        return jsii.get(self, "topic")

    @topic.setter # type: ignore
    def topic(self, value: builtins.str) -> None:
        jsii.set(self, "topic", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="partitionNum")
    def partition_num(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        partitionNum: The number of partitions in the topic. Valid values:
        1 to 48
        We recommend that you set the number of partitions to a multiple of 6 to reduce the
        risk of data skew.Note:For special requirements,submit a ticket.
        """
        return jsii.get(self, "partitionNum")

    @partition_num.setter # type: ignore
    def partition_num(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "partitionNum", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.RosTopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "remark": "remark",
        "topic": "topic",
        "partition_num": "partitionNum",
    },
)
class RosTopicProps:
    def __init__(
        self,
        *,
        instance_id: builtins.str,
        remark: builtins.str,
        topic: builtins.str,
        partition_num: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::KAFKA::Topic``.

        :param instance_id: 
        :param remark: 
        :param topic: 
        :param partition_num: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "remark": remark,
            "topic": topic,
        }
        if partition_num is not None:
            self._values["partition_num"] = partition_num

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property:

        instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def remark(self) -> builtins.str:
        """
        :Property:

        remark: The description of the topic. The value of this parameter must meet the following
        requirements:
        The value can only contain letters, digits, hyphens (-), and underscores (_).
        The value must be 3 to 64 characters in length.
        """
        result = self._values.get("remark")
        assert result is not None, "Required property 'remark' is missing"
        return result

    @builtins.property
    def topic(self) -> builtins.str:
        """
        :Property:

        topic: The name of the topic. The value of this parameter must meet the following requirements:
        The name can only contain letters, digits, hyphens (-), and underscores (_).
        The name must be 3 to 64 characters in length, and will be automatically truncated
        if it contains more characters.
        The name cannot be modified after being created.
        """
        result = self._values.get("topic")
        assert result is not None, "Required property 'topic' is missing"
        return result

    @builtins.property
    def partition_num(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        partitionNum: The number of partitions in the topic. Valid values:
        1 to 48
        We recommend that you set the number of partitions to a multiple of 6 to reduce the
        risk of data skew.Note:For special requirements,submit a ticket.
        """
        result = self._values.get("partition_num")
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
    jsii_type="@alicloud/ros-cdk-kafka.Topic",
):
    """A ROS resource type:  ``ALIYUN::KAFKA::Topic``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TopicProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::KAFKA::Topic``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Topic, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute:

        InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(self) -> typing.Any:
        """
        :Attribute: Topic: Topic name.
        """
        return jsii.get(self, "attrTopic")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.TopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "remark": "remark",
        "topic": "topic",
        "partition_num": "partitionNum",
    },
)
class TopicProps:
    def __init__(
        self,
        *,
        instance_id: builtins.str,
        remark: builtins.str,
        topic: builtins.str,
        partition_num: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::KAFKA::Topic``.

        :param instance_id: 
        :param remark: 
        :param topic: 
        :param partition_num: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "remark": remark,
            "topic": topic,
        }
        if partition_num is not None:
            self._values["partition_num"] = partition_num

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property:

        instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def remark(self) -> builtins.str:
        """
        :Property:

        remark: The description of the topic. The value of this parameter must meet the following
        requirements:
        The value can only contain letters, digits, hyphens (-), and underscores (_).
        The value must be 3 to 64 characters in length.
        """
        result = self._values.get("remark")
        assert result is not None, "Required property 'remark' is missing"
        return result

    @builtins.property
    def topic(self) -> builtins.str:
        """
        :Property:

        topic: The name of the topic. The value of this parameter must meet the following requirements:
        The name can only contain letters, digits, hyphens (-), and underscores (_).
        The name must be 3 to 64 characters in length, and will be automatically truncated
        if it contains more characters.
        The name cannot be modified after being created.
        """
        result = self._values.get("topic")
        assert result is not None, "Required property 'topic' is missing"
        return result

    @builtins.property
    def partition_num(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        partitionNum: The number of partitions in the topic. Valid values:
        1 to 48
        We recommend that you set the number of partitions to a multiple of 6 to reduce the
        risk of data skew.Note:For special requirements,submit a ticket.
        """
        result = self._values.get("partition_num")
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
    "RosTopic",
    "RosTopicProps",
    "Topic",
    "TopicProps",
]

publication.publish()
