"""
## Aliyun ROS ROCKETMQ Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_rocketmq as ROCKETMQ
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


class Group(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq.Group",
):
    """A ROS resource type:  ``ALIYUN::ROCKETMQ::Group``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ROCKETMQ::Group``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Group, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: Group ID
        """
        return jsii.get(self, "attrGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupType")
    def attr_group_type(self) -> typing.Any:
        """
        :Attribute: GroupType: Group Type
        """
        return jsii.get(self, "attrGroupType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance ID
        """
        return jsii.get(self, "attrInstanceId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.GroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_id": "groupId",
        "instance_id": "instanceId",
        "group_type": "groupType",
        "remark": "remark",
    },
)
class GroupProps:
    def __init__(
        self,
        *,
        group_id: builtins.str,
        instance_id: builtins.str,
        group_type: typing.Optional[builtins.str] = None,
        remark: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROCKETMQ::Group``.

        :param group_id: 
        :param instance_id: 
        :param group_type: 
        :param remark: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_id": group_id,
            "instance_id": instance_id,
        }
        if group_type is not None:
            self._values["group_type"] = group_type
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property:

        groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
        A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
        A group ID ranges from 7 to 64 bytes.
        Once a group ID is created, it cannot be edited anymore.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def group_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
        tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
        http: represents the Group ID was created only for the HTTP protocol messaging.
        """
        result = self._values.get("group_type")
        return result

    @builtins.property
    def remark(self) -> typing.Optional[builtins.str]:
        """
        :Property: remark: The remarks on the request.
        """
        result = self._values.get("remark")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq.Instance",
):
    """A ROS resource type:  ``ALIYUN::ROCKETMQ::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ROCKETMQ::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Instance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpInternalEndpoint")
    def attr_http_internal_endpoint(self) -> typing.Any:
        """
        :Attribute: HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
        """
        return jsii.get(self, "attrHttpInternalEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpInternetEndpoint")
    def attr_http_internet_endpoint(self) -> typing.Any:
        """
        :Attribute: HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
        """
        return jsii.get(self, "attrHttpInternetEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpInternetSecureEndpoint")
    def attr_http_internet_secure_endpoint(self) -> typing.Any:
        """
        :Attribute: HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
        """
        return jsii.get(self, "attrHttpInternetSecureEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance ID created
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> typing.Any:
        """
        :Attribute: InstanceType: Instance Type
        """
        return jsii.get(self, "attrInstanceType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTcpEndpoint")
    def attr_tcp_endpoint(self) -> typing.Any:
        """
        :Attribute: TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
        """
        return jsii.get(self, "attrTcpEndpoint")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={"instance_name": "instanceName", "remark": "remark"},
)
class InstanceProps:
    def __init__(
        self,
        *,
        instance_name: builtins.str,
        remark: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROCKETMQ::Instance``.

        :param instance_name: 
        :param remark: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
        }
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
        """
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return result

    @builtins.property
    def remark(self) -> typing.Optional[builtins.str]:
        """
        :Property: remark: The remark of instance.
        """
        result = self._values.get("remark")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq.RosGroup",
):
    """A ROS template type:  ``ALIYUN::ROCKETMQ::Group``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ROCKETMQ::Group``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosGroup, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: Group ID
        """
        return jsii.get(self, "attrGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupType")
    def attr_group_type(self) -> typing.Any:
        """
        :Attribute: GroupType: Group Type
        """
        return jsii.get(self, "attrGroupType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance ID
        """
        return jsii.get(self, "attrInstanceId")

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
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> builtins.str:
        """
        :Property:

        groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
        A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
        A group ID ranges from 7 to 64 bytes.
        Once a group ID is created, it cannot be edited anymore.
        """
        return jsii.get(self, "groupId")

    @group_id.setter # type: ignore
    def group_id(self, value: builtins.str) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupType")
    def group_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
        tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
        http: represents the Group ID was created only for the HTTP protocol messaging.
        """
        return jsii.get(self, "groupType")

    @group_type.setter # type: ignore
    def group_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "groupType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="remark")
    def remark(self) -> typing.Optional[builtins.str]:
        """
        :Property: remark: The remarks on the request.
        """
        return jsii.get(self, "remark")

    @remark.setter # type: ignore
    def remark(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "remark", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.RosGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_id": "groupId",
        "instance_id": "instanceId",
        "group_type": "groupType",
        "remark": "remark",
    },
)
class RosGroupProps:
    def __init__(
        self,
        *,
        group_id: builtins.str,
        instance_id: builtins.str,
        group_type: typing.Optional[builtins.str] = None,
        remark: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROCKETMQ::Group``.

        :param group_id: 
        :param instance_id: 
        :param group_type: 
        :param remark: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_id": group_id,
            "instance_id": instance_id,
        }
        if group_type is not None:
            self._values["group_type"] = group_type
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def group_id(self) -> builtins.str:
        """
        :Property:

        groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
        A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
        A group ID ranges from 7 to 64 bytes.
        Once a group ID is created, it cannot be edited anymore.
        """
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def group_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
        tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
        http: represents the Group ID was created only for the HTTP protocol messaging.
        """
        result = self._values.get("group_type")
        return result

    @builtins.property
    def remark(self) -> typing.Optional[builtins.str]:
        """
        :Property: remark: The remarks on the request.
        """
        result = self._values.get("remark")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq.RosInstance",
):
    """A ROS template type:  ``ALIYUN::ROCKETMQ::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ROCKETMQ::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosInstance, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrHttpInternalEndpoint")
    def attr_http_internal_endpoint(self) -> typing.Any:
        """
        :Attribute: HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
        """
        return jsii.get(self, "attrHttpInternalEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpInternetEndpoint")
    def attr_http_internet_endpoint(self) -> typing.Any:
        """
        :Attribute: HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
        """
        return jsii.get(self, "attrHttpInternetEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpInternetSecureEndpoint")
    def attr_http_internet_secure_endpoint(self) -> typing.Any:
        """
        :Attribute: HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
        """
        return jsii.get(self, "attrHttpInternetSecureEndpoint")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance ID created
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> typing.Any:
        """
        :Attribute: InstanceType: Instance Type
        """
        return jsii.get(self, "attrInstanceType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTcpEndpoint")
    def attr_tcp_endpoint(self) -> typing.Any:
        """
        :Attribute: TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
        """
        return jsii.get(self, "attrTcpEndpoint")

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
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
        """
        return jsii.get(self, "instanceName")

    @instance_name.setter # type: ignore
    def instance_name(self, value: builtins.str) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="remark")
    def remark(self) -> typing.Optional[builtins.str]:
        """
        :Property: remark: The remark of instance.
        """
        return jsii.get(self, "remark")

    @remark.setter # type: ignore
    def remark(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "remark", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={"instance_name": "instanceName", "remark": "remark"},
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        instance_name: builtins.str,
        remark: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROCKETMQ::Instance``.

        :param instance_name: 
        :param remark: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
        }
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def instance_name(self) -> builtins.str:
        """
        :Property: instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
        """
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return result

    @builtins.property
    def remark(self) -> typing.Optional[builtins.str]:
        """
        :Property: remark: The remark of instance.
        """
        result = self._values.get("remark")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTopic(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq.RosTopic",
):
    """A ROS template type:  ``ALIYUN::ROCKETMQ::Topic``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTopicProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ROCKETMQ::Topic``.

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
        :Attribute: InstanceId: The ID of the instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMessageType")
    def attr_message_type(self) -> typing.Any:
        """
        :Attribute: MessageType: The type of the message.
        """
        return jsii.get(self, "attrMessageType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(self) -> typing.Any:
        """
        :Attribute: Topic: The name of the topic.
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
        :Property: instanceId: The ID of the instance.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="messageType")
    def message_type(self) -> jsii.Number:
        """
        :Property:

        messageType: The type of the message. Valid values:
        0: normal message
        1: partitionally ordered message
        2: globally ordered message
        4: transactional message
        5: scheduled/delayed message
        """
        return jsii.get(self, "messageType")

    @message_type.setter # type: ignore
    def message_type(self, value: jsii.Number) -> None:
        jsii.set(self, "messageType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="topic")
    def topic(self) -> builtins.str:
        """
        :Property:

        topic: The name of the topic you want to create.
        Note:
        "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
        If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
        If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
        """
        return jsii.get(self, "topic")

    @topic.setter # type: ignore
    def topic(self, value: builtins.str) -> None:
        jsii.set(self, "topic", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="perm")
    def perm(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        perm: Set the read-write mode for the topic Valid values.:
        6: Both read and write operations are supported.
        4: Write operation is prohibited.
        2: Read operation is prohibited.
        """
        return jsii.get(self, "perm")

    @perm.setter # type: ignore
    def perm(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "perm", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="remark")
    def remark(self) -> typing.Optional[builtins.str]:
        """
        :Property: remark: The remarks on the request. This parameter can be left blank.
        """
        return jsii.get(self, "remark")

    @remark.setter # type: ignore
    def remark(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "remark", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.RosTopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "message_type": "messageType",
        "topic": "topic",
        "perm": "perm",
        "remark": "remark",
    },
)
class RosTopicProps:
    def __init__(
        self,
        *,
        instance_id: builtins.str,
        message_type: jsii.Number,
        topic: builtins.str,
        perm: typing.Optional[jsii.Number] = None,
        remark: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROCKETMQ::Topic``.

        :param instance_id: 
        :param message_type: 
        :param topic: 
        :param perm: 
        :param remark: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "message_type": message_type,
            "topic": topic,
        }
        if perm is not None:
            self._values["perm"] = perm
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def message_type(self) -> jsii.Number:
        """
        :Property:

        messageType: The type of the message. Valid values:
        0: normal message
        1: partitionally ordered message
        2: globally ordered message
        4: transactional message
        5: scheduled/delayed message
        """
        result = self._values.get("message_type")
        assert result is not None, "Required property 'message_type' is missing"
        return result

    @builtins.property
    def topic(self) -> builtins.str:
        """
        :Property:

        topic: The name of the topic you want to create.
        Note:
        "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
        If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
        If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
        """
        result = self._values.get("topic")
        assert result is not None, "Required property 'topic' is missing"
        return result

    @builtins.property
    def perm(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        perm: Set the read-write mode for the topic Valid values.:
        6: Both read and write operations are supported.
        4: Write operation is prohibited.
        2: Read operation is prohibited.
        """
        result = self._values.get("perm")
        return result

    @builtins.property
    def remark(self) -> typing.Optional[builtins.str]:
        """
        :Property: remark: The remarks on the request. This parameter can be left blank.
        """
        result = self._values.get("remark")
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
    jsii_type="@alicloud/ros-cdk-rocketmq.Topic",
):
    """A ROS resource type:  ``ALIYUN::ROCKETMQ::Topic``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TopicProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ROCKETMQ::Topic``.

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
        :Attribute: InstanceId: The ID of the instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMessageType")
    def attr_message_type(self) -> typing.Any:
        """
        :Attribute: MessageType: The type of the message.
        """
        return jsii.get(self, "attrMessageType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(self) -> typing.Any:
        """
        :Attribute: Topic: The name of the topic.
        """
        return jsii.get(self, "attrTopic")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.TopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "message_type": "messageType",
        "topic": "topic",
        "perm": "perm",
        "remark": "remark",
    },
)
class TopicProps:
    def __init__(
        self,
        *,
        instance_id: builtins.str,
        message_type: jsii.Number,
        topic: builtins.str,
        perm: typing.Optional[jsii.Number] = None,
        remark: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROCKETMQ::Topic``.

        :param instance_id: 
        :param message_type: 
        :param topic: 
        :param perm: 
        :param remark: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "message_type": message_type,
            "topic": topic,
        }
        if perm is not None:
            self._values["perm"] = perm
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: The ID of the instance.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def message_type(self) -> jsii.Number:
        """
        :Property:

        messageType: The type of the message. Valid values:
        0: normal message
        1: partitionally ordered message
        2: globally ordered message
        4: transactional message
        5: scheduled/delayed message
        """
        result = self._values.get("message_type")
        assert result is not None, "Required property 'message_type' is missing"
        return result

    @builtins.property
    def topic(self) -> builtins.str:
        """
        :Property:

        topic: The name of the topic you want to create.
        Note:
        "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
        If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
        If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
        """
        result = self._values.get("topic")
        assert result is not None, "Required property 'topic' is missing"
        return result

    @builtins.property
    def perm(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        perm: Set the read-write mode for the topic Valid values.:
        6: Both read and write operations are supported.
        4: Write operation is prohibited.
        2: Read operation is prohibited.
        """
        result = self._values.get("perm")
        return result

    @builtins.property
    def remark(self) -> typing.Optional[builtins.str]:
        """
        :Property: remark: The remarks on the request. This parameter can be left blank.
        """
        result = self._values.get("remark")
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
    "Group",
    "GroupProps",
    "Instance",
    "InstanceProps",
    "RosGroup",
    "RosGroupProps",
    "RosInstance",
    "RosInstanceProps",
    "RosTopic",
    "RosTopicProps",
    "Topic",
    "TopicProps",
]

publication.publish()
