'''
## Aliyun ROS ROCKETMQ Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ROCKETMQ from '@alicloud/ros-cdk-rocketmq';
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


class Group(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq.Group",
):
    '''A ROS resource type:  ``ALIYUN::ROCKETMQ::Group``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ROCKETMQ::Group``.

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
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute GroupId: Group ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroupType")
    def attr_group_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute GroupType: Group Type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: Instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))


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
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        remark: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROCKETMQ::Group``.

        :param group_id: Property groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects: A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_). A group ID ranges from 7 to 64 bytes. Once a group ID is created, it cannot be edited anymore.
        :param instance_id: Property instanceId: The ID of the instance.
        :param group_type: Property groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows: tcp: Default, indicates Group ID is created only for the TCP protocol messaging. http: represents the Group ID was created only for the HTTP protocol messaging.
        :param remark: Property remark: The remarks on the request.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_id": group_id,
            "instance_id": instance_id,
        }
        if group_type is not None:
            self._values["group_type"] = group_type
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupId: The group ID of the consumption cluster.

        When creating a group ID, pay attention to the following aspects:
        A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
        A group ID ranges from 7 to 64 bytes.
        Once a group ID is created, it cannot be edited anymore.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property groupType: Group ID specify the creation of applicable agreements.

        Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
        tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
        http: represents the Group ID was created only for the HTTP protocol messaging.
        '''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property remark: The remarks on the request.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS resource type:  ``ALIYUN::ROCKETMQ::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ROCKETMQ::Instance``.

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
    @jsii.member(jsii_name="attrHttpInternalEndpoint")
    def attr_http_internal_endpoint(self) -> ros_cdk_core.IResolvable:
        '''Attribute HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpInternalEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttpInternetEndpoint")
    def attr_http_internet_endpoint(self) -> ros_cdk_core.IResolvable:
        '''Attribute HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpInternetEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttpInternetSecureEndpoint")
    def attr_http_internet_secure_endpoint(self) -> ros_cdk_core.IResolvable:
        '''Attribute HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpInternetSecureEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: Instance ID created.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceName: Instance name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceType: Instance Type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTcpEndpoint")
    def attr_tcp_endpoint(self) -> ros_cdk_core.IResolvable:
        '''Attribute TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTcpEndpoint"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={"instance_name": "instanceName", "remark": "remark", "tags": "tags"},
)
class InstanceProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosInstance.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROCKETMQ::Instance``.

        :param instance_name: Property instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
        :param remark: Property remark: The remark of instance.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
        }
        if remark is not None:
            self._values["remark"] = remark
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property remark: The remark of instance.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], result)

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
    '''A ROS template type:  ``ALIYUN::ROCKETMQ::Group``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ROCKETMQ::Group``.

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
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GroupId: Group ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroupType")
    def attr_group_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GroupType: Group Type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: Instance ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

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
    @jsii.member(jsii_name="groupId")
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
        A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
        A group ID ranges from 7 to 64 bytes.
        Once a group ID is created, it cannot be edited anymore.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupType")
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
        tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
        http: represents the Group ID was created only for the HTTP protocol messaging.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "groupType"))

    @group_type.setter
    def group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "groupType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: remark: The remarks on the request.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        remark: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROCKETMQ::Group``.

        :param group_id: 
        :param instance_id: 
        :param group_type: 
        :param remark: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_id": group_id,
            "instance_id": instance_id,
        }
        if group_type is not None:
            self._values["group_type"] = group_type
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
        A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
        A group ID ranges from 7 to 64 bytes.
        Once a group ID is created, it cannot be edited anymore.
        '''
        result = self._values.get("group_id")
        assert result is not None, "Required property 'group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
        tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
        http: represents the Group ID was created only for the HTTP protocol messaging.
        '''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: remark: The remarks on the request.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::ROCKETMQ::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ROCKETMQ::Instance``.

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
    @jsii.member(jsii_name="attrHttpInternalEndpoint")
    def attr_http_internal_endpoint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpInternalEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttpInternetEndpoint")
    def attr_http_internet_endpoint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpInternetEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttpInternetSecureEndpoint")
    def attr_http_internet_secure_endpoint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpInternetSecureEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: Instance ID created
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceName: Instance name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceType: Instance Type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTcpEndpoint")
    def attr_tcp_endpoint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTcpEndpoint"))

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
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: remark: The remark of instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "remark", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstance.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rocketmq.RosInstance.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={"instance_name": "instanceName", "remark": "remark", "tags": "tags"},
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosInstance.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROCKETMQ::Instance``.

        :param instance_name: 
        :param remark: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_name": instance_name,
        }
        if remark is not None:
            self._values["remark"] = remark
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: The name of the instance, which contains 3 to 64 characters in Chinese or English.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: remark: The remark of instance.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstance.TagsProperty]], result)

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
    '''A ROS template type:  ``ALIYUN::ROCKETMQ::Topic``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTopicProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ROCKETMQ::Topic``.

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
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMessageType")
    def attr_message_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MessageType: The type of the message.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMessageType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Topic: The name of the topic.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopic"))

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
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="messageType")
    def message_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        messageType: The type of the message. Valid values:
        0: normal message
        1: partitionally ordered message
        2: globally ordered message
        4: transactional message
        5: scheduled/delayed message
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "messageType"))

    @message_type.setter
    def message_type(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "messageType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="topic")
    def topic(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        topic: The name of the topic you want to create.
        Note:
        "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
        If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
        If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "topic"))

    @topic.setter
    def topic(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "topic", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: remark: The remarks on the request. This parameter can be left blank.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "remark", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.RosTopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "message_type": "messageType",
        "topic": "topic",
        "remark": "remark",
    },
)
class RosTopicProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        message_type: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        topic: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROCKETMQ::Topic``.

        :param instance_id: 
        :param message_type: 
        :param topic: 
        :param remark: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "message_type": message_type,
            "topic": topic,
        }
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def message_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        messageType: The type of the message. Valid values:
        0: normal message
        1: partitionally ordered message
        2: globally ordered message
        4: transactional message
        5: scheduled/delayed message
        '''
        result = self._values.get("message_type")
        assert result is not None, "Required property 'message_type' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def topic(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        topic: The name of the topic you want to create.
        Note:
        "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
        If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
        If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
        '''
        result = self._values.get("topic")
        assert result is not None, "Required property 'topic' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: remark: The remarks on the request. This parameter can be left blank.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS resource type:  ``ALIYUN::ROCKETMQ::Topic``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TopicProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ROCKETMQ::Topic``.

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
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMessageType")
    def attr_message_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute MessageType: The type of the message.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMessageType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(self) -> ros_cdk_core.IResolvable:
        '''Attribute Topic: The name of the topic.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopic"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq.TopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "message_type": "messageType",
        "topic": "topic",
        "remark": "remark",
    },
)
class TopicProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        message_type: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        topic: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ROCKETMQ::Topic``.

        :param instance_id: Property instanceId: The ID of the instance.
        :param message_type: Property messageType: The type of the message. Valid values: 0: normal message 1: partitionally ordered message 2: globally ordered message 4: transactional message 5: scheduled/delayed message
        :param topic: Property topic: The name of the topic you want to create. Note: "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name. If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances. If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
        :param remark: Property remark: The remarks on the request. This parameter can be left blank.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "message_type": message_type,
            "topic": topic,
        }
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def message_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property messageType: The type of the message.

        Valid values:
        0: normal message
        1: partitionally ordered message
        2: globally ordered message
        4: transactional message
        5: scheduled/delayed message
        '''
        result = self._values.get("message_type")
        assert result is not None, "Required property 'message_type' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def topic(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property topic: The name of the topic you want to create.

        Note:
        "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
        If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
        If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
        '''
        result = self._values.get("topic")
        assert result is not None, "Required property 'topic' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property remark: The remarks on the request.

        This parameter can be left blank.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
