'''
## Aliyun ROS KAFKA Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as KAFKA from '@alicloud/ros-cdk-kafka';
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
    jsii_type="@alicloud/ros-cdk-kafka.AclProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_operation_types": "aclOperationTypes",
        "acl_resource_name": "aclResourceName",
        "acl_resource_pattern_type": "aclResourcePatternType",
        "acl_resource_type": "aclResourceType",
        "instance_id": "instanceId",
        "username": "username",
        "acl_permission_type": "aclPermissionType",
        "host": "host",
    },
)
class AclProps:
    def __init__(
        self,
        *,
        acl_operation_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        acl_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acl_resource_pattern_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acl_resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acl_permission_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Acl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl

        :param acl_operation_types: Property aclOperationTypes: The types of operations allowed by the ACL.
        :param acl_resource_name: Property aclResourceName: The resource name. The value can be a topic name, a group ID, a cluster name, or a transaction ID. You can use an asterisk (*) to specify the names of all resources of the specified type. Note You can use an asterisk (*) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
        :param acl_resource_pattern_type: Property aclResourcePatternType: The matching mode. Valid values: LITERAL: exact match PREFIXED: prefix match
        :param acl_resource_type: Property aclResourceType: The resource type. Valid values: Topic Group Cluster TransactionalId: transactional ID
        :param instance_id: Property instanceId: The instance ID.
        :param username: Property username: The username. You can use an asterisk (*) to specify all usernames. Note You can use an asterisk (*) to query the authorized users only after you grant the required permissions to all users.
        :param acl_permission_type: Property aclPermissionType: The authorization method. Valid values: DENY ALLOW Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        :param host: Property host: The source IP address. Note You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported. This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8c17917a47d36e942af7d7bfd4e31d914816343913ece67dae051bddd798f7a)
            check_type(argname="argument acl_operation_types", value=acl_operation_types, expected_type=type_hints["acl_operation_types"])
            check_type(argname="argument acl_resource_name", value=acl_resource_name, expected_type=type_hints["acl_resource_name"])
            check_type(argname="argument acl_resource_pattern_type", value=acl_resource_pattern_type, expected_type=type_hints["acl_resource_pattern_type"])
            check_type(argname="argument acl_resource_type", value=acl_resource_type, expected_type=type_hints["acl_resource_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument acl_permission_type", value=acl_permission_type, expected_type=type_hints["acl_permission_type"])
            check_type(argname="argument host", value=host, expected_type=type_hints["host"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_operation_types": acl_operation_types,
            "acl_resource_name": acl_resource_name,
            "acl_resource_pattern_type": acl_resource_pattern_type,
            "acl_resource_type": acl_resource_type,
            "instance_id": instance_id,
            "username": username,
        }
        if acl_permission_type is not None:
            self._values["acl_permission_type"] = acl_permission_type
        if host is not None:
            self._values["host"] = host

    @builtins.property
    def acl_operation_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property aclOperationTypes: The types of operations allowed by the ACL.'''
        result = self._values.get("acl_operation_types")
        assert result is not None, "Required property 'acl_operation_types' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def acl_resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aclResourceName: The resource name.

        The value can be a topic name, a group ID, a cluster name, or a transaction ID.
        You can use an asterisk (*) to specify the names of all resources of the specified type.
        Note You can use an asterisk (*) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
        '''
        result = self._values.get("acl_resource_name")
        assert result is not None, "Required property 'acl_resource_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_resource_pattern_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aclResourcePatternType: The matching mode.

        Valid values:
        LITERAL: exact match
        PREFIXED: prefix match
        '''
        result = self._values.get("acl_resource_pattern_type")
        assert result is not None, "Required property 'acl_resource_pattern_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aclResourceType: The resource type.

        Valid values:
        Topic
        Group
        Cluster
        TransactionalId: transactional ID
        '''
        result = self._values.get("acl_resource_type")
        assert result is not None, "Required property 'acl_resource_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The instance ID.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property username: The username.

        You can use an asterisk (*) to specify all usernames.
        Note You can use an asterisk (*) to query the authorized users only after you grant the required permissions to all users.
        '''
        result = self._values.get("username")
        assert result is not None, "Required property 'username' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_permission_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aclPermissionType: The authorization method.

        Valid values:
        DENY
        ALLOW
        Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        '''
        result = self._values.get("acl_permission_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property host: The source IP address.

        Note
        You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
        This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        '''
        result = self._values.get("host")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.ConsumerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "consumer_id": "consumerId",
        "instance_id": "instanceId",
        "remark": "remark",
        "tags": "tags",
    },
)
class ConsumerGroupProps:
    def __init__(
        self,
        *,
        consumer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosConsumerGroup.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ConsumerGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup

        :param consumer_id: Property consumerId: Group name. Value: Can only contain letters, numbers, dashes (-), underscores (_), and at least one English or number. The length is limited to 3 to 128 characters, and more than 128 characters will be automatically intercepted. Once the group name is created, it cannot be modified.
        :param instance_id: Property instanceId: Kafka instance id.
        :param remark: Property remark: Remark description.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cddb03fd90634fd87ec6b6327c65ff226c377248414f79c129f35a0b711159bb)
            check_type(argname="argument consumer_id", value=consumer_id, expected_type=type_hints["consumer_id"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "consumer_id": consumer_id,
            "instance_id": instance_id,
        }
        if remark is not None:
            self._values["remark"] = remark
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def consumer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property consumerId: Group name.

        Value:
        Can only contain letters, numbers, dashes (-), underscores (_), and at least one English or number.
        The length is limited to 3 to 128 characters, and more than 128 characters will be automatically intercepted.
        Once the group name is created, it cannot be modified.
        '''
        result = self._values.get("consumer_id")
        assert result is not None, "Required property 'consumer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: Kafka instance id.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remark: Remark description.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosConsumerGroup.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosConsumerGroup.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ConsumerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-kafka.IAcl")
class IAcl(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Acl``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAclResourceType")
    def attr_acl_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclResourceType: The resource type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The instance ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: The username.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AclProps:
        ...


class _IAclProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Acl``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-kafka.IAcl"

    @builtins.property
    @jsii.member(jsii_name="attrAclResourceType")
    def attr_acl_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclResourceType: The resource type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: The username.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUsername"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AclProps:
        return typing.cast(AclProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAcl).__jsii_proxy_class__ = lambda : _IAclProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-kafka.IConsumerGroup")
class IConsumerGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ConsumerGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConsumerId")
    def attr_consumer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConsumerId: Consumer group ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConsumerGroupProps:
        ...


class _IConsumerGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ConsumerGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-kafka.IConsumerGroup"

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrConsumerId")
    def attr_consumer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConsumerId: Consumer group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConsumerId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConsumerGroupProps:
        return typing.cast(ConsumerGroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IConsumerGroup).__jsii_proxy_class__ = lambda : _IConsumerGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-kafka.IInstance")
class IInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDomainEndpoint")
    def attr_domain_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainEndpoint: The default endpoints of the instance in domain name mode.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Endpoint: The SSL endpoints of the instance in IP address mode.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Id of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Name of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: Id of the order.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSaslDomainEndpoint")
    def attr_sasl_domain_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SaslDomainEndpoint: The Simple Authentication and Security Layer (SASL) endpoints of the instance in domain name mode.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSslDomainEndpoint")
    def attr_ssl_domain_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SslDomainEndpoint: The SSL endpoints of the instance in domain name mode.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSslEndpoint")
    def attr_ssl_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SslEndpoint: The SSL endpoints of the instance in IP address mode.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        ...


class _IInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-kafka.IInstance"

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainEndpoint")
    def attr_domain_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainEndpoint: The default endpoints of the instance in domain name mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Endpoint: The SSL endpoints of the instance in IP address mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Id of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Name of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: Id of the order.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrSaslDomainEndpoint")
    def attr_sasl_domain_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SaslDomainEndpoint: The Simple Authentication and Security Layer (SASL) endpoints of the instance in domain name mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSaslDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrSslDomainEndpoint")
    def attr_ssl_domain_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SslDomainEndpoint: The SSL endpoints of the instance in domain name mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSslDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrSslEndpoint")
    def attr_ssl_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SslEndpoint: The SSL endpoints of the instance in IP address mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSslEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstance).__jsii_proxy_class__ = lambda : _IInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-kafka.ISaslUser")
class ISaslUser(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``SaslUser``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The instance ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: The user name of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SaslUserProps":
        ...


class _ISaslUserProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SaslUser``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-kafka.ISaslUser"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: The user name of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUsername"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SaslUserProps":
        return typing.cast("SaslUserProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISaslUser).__jsii_proxy_class__ = lambda : _ISaslUserProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-kafka.ITopic")
class ITopic(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Topic``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.

        You can call the GetInstanceList operation to query instances.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Topic: Topic name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TopicProps":
        ...


class _ITopicProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Topic``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-kafka.ITopic"

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.

        You can call the GetInstanceList operation to query instances.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Topic: Topic name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTopic"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TopicProps":
        return typing.cast("TopicProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITopic).__jsii_proxy_class__ = lambda : _ITopicProxy


@jsii.implements(IInstance)
class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::KAFKA::Instance``, which is used to create an ApsaraMQ for Kafka instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5443d10bbefc22c9269d268fc3f631a0135b9f3154677e49893b262da6804b90)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainEndpoint")
    def attr_domain_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainEndpoint: The default endpoints of the instance in domain name mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Endpoint: The SSL endpoints of the instance in IP address mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Id of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: Name of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OrderId: Id of the order.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrSaslDomainEndpoint")
    def attr_sasl_domain_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SaslDomainEndpoint: The Simple Authentication and Security Layer (SASL) endpoints of the instance in domain name mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSaslDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrSslDomainEndpoint")
    def attr_ssl_domain_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SslDomainEndpoint: The SSL endpoints of the instance in domain name mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSslDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrSslEndpoint")
    def attr_ssl_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SslEndpoint: The SSL endpoints of the instance in IP address mode.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSslEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8cbd4fd55d51c7452af22cac4d6d0afd51af15d8aa20bee15c1694ea13304b14)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2b6b5e9a7d38afeaeb920ea4d5100f2cc2531b1b2644b746eda88694f327ea1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d5af42d5ca8068a1db9df284a167cc7331d7bd11546657dcbb1b9b663cb2853)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "deploy_type": "deployType",
        "deletion_force": "deletionForce",
        "deploy_option": "deployOption",
        "disk_size": "diskSize",
        "disk_type": "diskType",
        "eip_max": "eipMax",
        "io_max": "ioMax",
        "io_max_spec": "ioMaxSpec",
        "open_connector": "openConnector",
        "partition_num": "partitionNum",
        "pay_type": "payType",
        "serverless_config": "serverlessConfig",
        "spec_type": "specType",
        "tags": "tags",
        "topic_quota": "topicQuota",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        deploy_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy_option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.DeployOptionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        eip_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_max_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        open_connector: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        partition_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        serverless_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.ServerlessConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        spec_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        topic_quota: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance

        :param deploy_type: Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values: 4: Instance of the public type 5: Instance of the VPC type
        :param deletion_force: Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
        :param deploy_option: Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.
        :param disk_size: Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
        :param disk_type: Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values: 0: Ultra disk 1: SSD
        :param eip_max: Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance. This parameter must be specified when the DeployType parameter is set to 4.
        :param io_max: Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance. For more information about the value range, see Billing.
        :param io_max_spec: Property ioMaxSpec: Flow specification (recommended) The IoMax and IoMaxSpec must be optional. When filling in at the same time, subject to IoMaxSpec. It is recommended that you only fill in the flow specification
        :param open_connector: Property openConnector: Whether open kafka connector or not.
        :param partition_num: Property partitionNum: Number of partitions(recommended). The number of partitions to be configured for the Message Queue for Apache Kafka instance. PartitionNum and TopicQuota must be selected. It is recommended that you only fill in the number of partitions.
        :param pay_type: Property payType: Pay by hour or month.
        :param serverless_config: Property serverlessConfig: Serverless instance related settings.
        :param spec_type: Property specType: The edition of the Message Queue for Apache Kafka instance. Valid values: normal: Normal version professional: Professional Edition (high writing edition) professionalForHighRead: Professional Edition (high reading edition)
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param topic_quota: Property topicQuota: Number of topics (not recommended). The number of topics to be configured for the Message Queue for Apache Kafka instance. PartitionNum and TopicQuota must be selected. It is recommended that you only fill in the number of partitions. The default value of this parameter varies with different peak traffic values. Additional fees are charged if the default values are exceeded. Different specifications have different default values, and extra fees are charged. For more information, see Billing.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25c4e18ec018d9ba58e1e15577102bd0e4f8fd83aa96695297d5c0a4367670a2)
            check_type(argname="argument deploy_type", value=deploy_type, expected_type=type_hints["deploy_type"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument deploy_option", value=deploy_option, expected_type=type_hints["deploy_option"])
            check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
            check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
            check_type(argname="argument eip_max", value=eip_max, expected_type=type_hints["eip_max"])
            check_type(argname="argument io_max", value=io_max, expected_type=type_hints["io_max"])
            check_type(argname="argument io_max_spec", value=io_max_spec, expected_type=type_hints["io_max_spec"])
            check_type(argname="argument open_connector", value=open_connector, expected_type=type_hints["open_connector"])
            check_type(argname="argument partition_num", value=partition_num, expected_type=type_hints["partition_num"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument serverless_config", value=serverless_config, expected_type=type_hints["serverless_config"])
            check_type(argname="argument spec_type", value=spec_type, expected_type=type_hints["spec_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument topic_quota", value=topic_quota, expected_type=type_hints["topic_quota"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "deploy_type": deploy_type,
        }
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if deploy_option is not None:
            self._values["deploy_option"] = deploy_option
        if disk_size is not None:
            self._values["disk_size"] = disk_size
        if disk_type is not None:
            self._values["disk_type"] = disk_type
        if eip_max is not None:
            self._values["eip_max"] = eip_max
        if io_max is not None:
            self._values["io_max"] = io_max
        if io_max_spec is not None:
            self._values["io_max_spec"] = io_max_spec
        if open_connector is not None:
            self._values["open_connector"] = open_connector
        if partition_num is not None:
            self._values["partition_num"] = partition_num
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if serverless_config is not None:
            self._values["serverless_config"] = serverless_config
        if spec_type is not None:
            self._values["spec_type"] = spec_type
        if tags is not None:
            self._values["tags"] = tags
        if topic_quota is not None:
            self._values["topic_quota"] = topic_quota

    @builtins.property
    def deploy_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property deployType: The deployment mode of the Message Queue for Apache Kafka instance.

        Valid values:
        4: Instance of the public type
        5: Instance of the VPC type
        '''
        result = self._values.get("deploy_type")
        assert result is not None, "Required property 'deploy_type' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance.

        Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deploy_option(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DeployOptionProperty"]]:
        '''Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.'''
        result = self._values.get("deploy_option")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DeployOptionProperty"]], result)

    @builtins.property
    def disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.'''
        result = self._values.get("disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance.

        Valid values:
        0: Ultra disk
        1: SSD
        '''
        result = self._values.get("disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def eip_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.

        This parameter must be specified when the DeployType parameter is set to 4.
        '''
        result = self._values.get("eip_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.

        For more information about the value range, see Billing.
        '''
        result = self._values.get("io_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_max_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional.

        When filling in at the same time, subject to IoMaxSpec.
        It is recommended that you only fill in the flow specification
        '''
        result = self._values.get("io_max_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def open_connector(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property openConnector: Whether open kafka connector or not.'''
        result = self._values.get("open_connector")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def partition_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property partitionNum: Number of partitions(recommended).

        The number of partitions to be configured for the Message Queue for Apache Kafka instance.
        PartitionNum and TopicQuota must be selected.
        It is recommended that you only fill in the number of partitions.
        '''
        result = self._values.get("partition_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: Pay by hour or month.'''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def serverless_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ServerlessConfigProperty"]]:
        '''Property serverlessConfig: Serverless instance related settings.'''
        result = self._values.get("serverless_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ServerlessConfigProperty"]], result)

    @builtins.property
    def spec_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property specType: The edition of the Message Queue for Apache Kafka instance.

        Valid values:
        normal: Normal version
        professional: Professional Edition (high writing edition)
        professionalForHighRead: Professional Edition (high reading edition)
        '''
        result = self._values.get("spec_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], result)

    @builtins.property
    def topic_quota(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property topicQuota: Number of topics (not recommended).

        The number of topics to be configured for the Message Queue for Apache Kafka instance.
        PartitionNum and TopicQuota must be selected.
        It is recommended that you only fill in the number of partitions.
        The default value of this parameter varies with different peak traffic values.
        Additional fees are charged if the default values are exceeded.
        Different specifications have different default values, and extra fees are charged.
        For more information, see Billing.
        '''
        result = self._values.get("topic_quota")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAcl(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.RosAcl",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::KAFKA::Acl``, which is used to create an access control list (ACL).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Acl`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAclProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87727ea2210d156092e87ebed75f5044c620816827fcbbbe3d6b7711883e4e90)
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
            type_hints = typing.get_type_hints(_typecheckingstub__34452d3b972af4f6416ee70fb2d60945d7b628c78c24d17e233ef762629e15d2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAclResourceType")
    def attr_acl_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclResourceType: The resource type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Username: The username.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUsername"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="aclOperationTypes")
    def acl_operation_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: aclOperationTypes: The types of operations allowed by the ACL.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "aclOperationTypes"))

    @acl_operation_types.setter
    def acl_operation_types(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__721e115f84f666b234b42dbb395c40fa748232c9450ee6c0ba96ccabe071df6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclOperationTypes", value)

    @builtins.property
    @jsii.member(jsii_name="aclResourceName")
    def acl_resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclResourceName: The resource name.
        The value can be a topic name, a group ID, a cluster name, or a transaction ID.
        You can use an asterisk (*) to specify the names of all resources of the specified type.
        Note You can use an asterisk (*) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aclResourceName"))

    @acl_resource_name.setter
    def acl_resource_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab56fe1bd173a76f47ae7f15f4d5cc36301e95208ac47a366088b6dca0b1e8c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclResourceName", value)

    @builtins.property
    @jsii.member(jsii_name="aclResourcePatternType")
    def acl_resource_pattern_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclResourcePatternType: The matching mode. Valid values:
        LITERAL: exact match
        PREFIXED: prefix match
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aclResourcePatternType"))

    @acl_resource_pattern_type.setter
    def acl_resource_pattern_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e293460b1e7af6006b2ebb201768732d66ea20acb7f3b02fd3dca45462cc7822)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclResourcePatternType", value)

    @builtins.property
    @jsii.member(jsii_name="aclResourceType")
    def acl_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclResourceType: The resource type. Valid values:
        Topic
        Group
        Cluster
        TransactionalId: transactional ID
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aclResourceType"))

    @acl_resource_type.setter
    def acl_resource_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34b85ea34e9a155ddb2b5ae22503891081a9b38dda41c35bd60a7622365b92ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclResourceType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b60f7480c332d7122728bc6bb4aa86174d1693e8f52e17d65032dc040ca3cd85)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcfa4236619ee997a97429841800a77960730aca056f278964c146c0296fe111)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="username")
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        username: The username.
        You can use an asterisk (*) to specify all usernames.
        Note You can use an asterisk (*) to query the authorized users only after you grant the required permissions to all users.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "username"))

    @username.setter
    def username(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d920a1e3c0dbe9221398997d4936713e415c635178b5a00edf3d0f1668bab1ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "username", value)

    @builtins.property
    @jsii.member(jsii_name="aclPermissionType")
    def acl_permission_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        aclPermissionType: The authorization method. Valid values:
        DENY
        ALLOW
        Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aclPermissionType"))

    @acl_permission_type.setter
    def acl_permission_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef0adb66cd12610e06e62231448b00a9296773c6d661cbe9ef8f7759c13bd0b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclPermissionType", value)

    @builtins.property
    @jsii.member(jsii_name="host")
    def host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        host: The source IP address.
        Note
        You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
        This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "host"))

    @host.setter
    def host(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be3dfdf0a6a2615fee4f5687382c1c9587d13b5586f6661413848d6a39734fa1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "host", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.RosAclProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_operation_types": "aclOperationTypes",
        "acl_resource_name": "aclResourceName",
        "acl_resource_pattern_type": "aclResourcePatternType",
        "acl_resource_type": "aclResourceType",
        "instance_id": "instanceId",
        "username": "username",
        "acl_permission_type": "aclPermissionType",
        "host": "host",
    },
)
class RosAclProps:
    def __init__(
        self,
        *,
        acl_operation_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        acl_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acl_resource_pattern_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acl_resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acl_permission_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAcl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl

        :param acl_operation_types: 
        :param acl_resource_name: 
        :param acl_resource_pattern_type: 
        :param acl_resource_type: 
        :param instance_id: 
        :param username: 
        :param acl_permission_type: 
        :param host: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40cf052502609b558f2ed54f54188e3423c761cbbfc9fd503f75e2f5672629b4)
            check_type(argname="argument acl_operation_types", value=acl_operation_types, expected_type=type_hints["acl_operation_types"])
            check_type(argname="argument acl_resource_name", value=acl_resource_name, expected_type=type_hints["acl_resource_name"])
            check_type(argname="argument acl_resource_pattern_type", value=acl_resource_pattern_type, expected_type=type_hints["acl_resource_pattern_type"])
            check_type(argname="argument acl_resource_type", value=acl_resource_type, expected_type=type_hints["acl_resource_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument acl_permission_type", value=acl_permission_type, expected_type=type_hints["acl_permission_type"])
            check_type(argname="argument host", value=host, expected_type=type_hints["host"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_operation_types": acl_operation_types,
            "acl_resource_name": acl_resource_name,
            "acl_resource_pattern_type": acl_resource_pattern_type,
            "acl_resource_type": acl_resource_type,
            "instance_id": instance_id,
            "username": username,
        }
        if acl_permission_type is not None:
            self._values["acl_permission_type"] = acl_permission_type
        if host is not None:
            self._values["host"] = host

    @builtins.property
    def acl_operation_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: aclOperationTypes: The types of operations allowed by the ACL.
        '''
        result = self._values.get("acl_operation_types")
        assert result is not None, "Required property 'acl_operation_types' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def acl_resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclResourceName: The resource name.
        The value can be a topic name, a group ID, a cluster name, or a transaction ID.
        You can use an asterisk (*) to specify the names of all resources of the specified type.
        Note You can use an asterisk (*) to query the resources on which permissions are granted only after you grant the user the required permissions on all resources.
        '''
        result = self._values.get("acl_resource_name")
        assert result is not None, "Required property 'acl_resource_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_resource_pattern_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclResourcePatternType: The matching mode. Valid values:
        LITERAL: exact match
        PREFIXED: prefix match
        '''
        result = self._values.get("acl_resource_pattern_type")
        assert result is not None, "Required property 'acl_resource_pattern_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclResourceType: The resource type. Valid values:
        Topic
        Group
        Cluster
        TransactionalId: transactional ID
        '''
        result = self._values.get("acl_resource_type")
        assert result is not None, "Required property 'acl_resource_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The instance ID.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        username: The username.
        You can use an asterisk (*) to specify all usernames.
        Note You can use an asterisk (*) to query the authorized users only after you grant the required permissions to all users.
        '''
        result = self._values.get("username")
        assert result is not None, "Required property 'username' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_permission_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        aclPermissionType: The authorization method. Valid values:
        DENY
        ALLOW
        Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        '''
        result = self._values.get("acl_permission_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        host: The source IP address.
        Note
        You can specify only a specific IP address or use the asterisk (*) wildcard character to specify all IP addresses. CIDR blocks are not supported.
        This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        '''
        result = self._values.get("host")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosConsumerGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.RosConsumerGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::KAFKA::ConsumerGroup``, which is used to create a consumer group.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ConsumerGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosConsumerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a83626160cd6de1ccd0a93e231ab26c2e42569b1bd097b6be0a169b76414404)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b57e9fa8ce4f848ff2f804c39f121d7bc97e484512496f7602b07a6a42fbe493)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrConsumerId")
    def attr_consumer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConsumerId: Consumer group ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsumerId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="consumerId")
    def consumer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        consumerId: Group name. Value:
        Can only contain letters, numbers, dashes (-), underscores (_), and at least one English or number.
        The length is limited to 3 to 128 characters, and more than 128 characters will be automatically intercepted.
        Once the group name is created, it cannot be modified.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "consumerId"))

    @consumer_id.setter
    def consumer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6010cc9525ae2fdd8598896542a49600e4ee6f74ec9f41092b8b2e8af4257b96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "consumerId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afca68a2ee2e8e8f6383728cffa5cd1fab74cdcbbdbf81ca74b991750311d21e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: Kafka instance id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5a192926542b90cf5fa21f0b6037edc260c995bf0ef1d043f34428f4f73d645)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: Remark description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e27f0e49120c1782e512bb0a043cd8dbc342460460a7de91ea26d8cdb6783ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosConsumerGroup.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosConsumerGroup.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosConsumerGroup.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1989c501502607f8829f62cdb56184c2ac0327981b539a38969c55c85e5f3b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-kafka.RosConsumerGroup.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f6681012f3e49a105a7880f438329cff1adfb92b2230a37d34d6fdaceed88507)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.RosConsumerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "consumer_id": "consumerId",
        "instance_id": "instanceId",
        "remark": "remark",
        "tags": "tags",
    },
)
class RosConsumerGroupProps:
    def __init__(
        self,
        *,
        consumer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosConsumerGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosConsumerGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup

        :param consumer_id: 
        :param instance_id: 
        :param remark: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__acc3cd7d209ebaf90aa86662fb2e99517ba36e58a86c94e6e5c3f35b2c5a11e3)
            check_type(argname="argument consumer_id", value=consumer_id, expected_type=type_hints["consumer_id"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "consumer_id": consumer_id,
            "instance_id": instance_id,
        }
        if remark is not None:
            self._values["remark"] = remark
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def consumer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        consumerId: Group name. Value:
        Can only contain letters, numbers, dashes (-), underscores (_), and at least one English or number.
        The length is limited to 3 to 128 characters, and more than 128 characters will be automatically intercepted.
        Once the group name is created, it cannot be modified.
        '''
        result = self._values.get("consumer_id")
        assert result is not None, "Required property 'consumer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: Kafka instance id.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: Remark description.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosConsumerGroup.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosConsumerGroup.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosConsumerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::KAFKA::Instance``, which is used to create an ApsaraMQ for Kafka instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e7e9e49e86ffda5613782114e9100783c1b804308e54b77f4d9caef430bcda5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__125b951a66915d6b7d2f45a0f7344e26c7a8262e821f915db5c8187cfdf36205)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainEndpoint")
    def attr_domain_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainEndpoint: The default endpoints of the instance in domain name mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Endpoint: The SSL endpoints of the instance in IP address mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: Id of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: Name of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: Id of the order.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrSaslDomainEndpoint")
    def attr_sasl_domain_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SaslDomainEndpoint: The Simple Authentication and Security Layer (SASL) endpoints of the instance in domain name mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSaslDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrSslDomainEndpoint")
    def attr_ssl_domain_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SslDomainEndpoint: The SSL endpoints of the instance in domain name mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSslDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrSslEndpoint")
    def attr_ssl_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SslEndpoint: The SSL endpoints of the instance in IP address mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSslEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="deployType")
    def deploy_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values:
        4: Instance of the public type
        5: Instance of the VPC type
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "deployType"))

    @deploy_type.setter
    def deploy_type(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d5c31494c0d5fe69235c28f0fb24f9fd08c13fc8d24f18d63f9a9cfce982e6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deployType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e028a42e04049aef2168ab11ce27f0886e6f3e32d4b27fb913c78c05dd2fd6f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__266760183f657b9aae501817ac3b4e565edeb807d34e6388132846f0838a48ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="deployOption")
    def deploy_option(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DeployOptionProperty"]]:
        '''
        :Property: deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DeployOptionProperty"]], jsii.get(self, "deployOption"))

    @deploy_option.setter
    def deploy_option(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DeployOptionProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1da1256dbe455e851c1958dac60b7087507d97a392d4412ebf08d5551ae9d9cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deployOption", value)

    @builtins.property
    @jsii.member(jsii_name="diskSize")
    def disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskSize"))

    @disk_size.setter
    def disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86ad40cb3f7342b5d391758661072264426f3ab1b0f47b856a0a9135f509b3e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskSize", value)

    @builtins.property
    @jsii.member(jsii_name="diskType")
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values:
        0: Ultra disk
        1: SSD
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskType"))

    @disk_type.setter
    def disk_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf33aceb916b6e49cab31c9b1331d1cdbca7711ccfc85f74458017a73109f912)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskType", value)

    @builtins.property
    @jsii.member(jsii_name="eipMax")
    def eip_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
        This parameter must be specified when the DeployType parameter is set to 4.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "eipMax"))

    @eip_max.setter
    def eip_max(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0df8402b06c3e3e7e8cf490f8c81d0313c8591e2ba287816249231c5762ba586)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eipMax", value)

    @builtins.property
    @jsii.member(jsii_name="ioMax")
    def io_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
        For more information about the value range, see Billing.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ioMax"))

    @io_max.setter
    def io_max(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__004ebc5a30a2a5a9e9439db40cd3996b2ff5df89c5fa8af14ecd9ce8781e7fe5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ioMax", value)

    @builtins.property
    @jsii.member(jsii_name="ioMaxSpec")
    def io_max_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ioMaxSpec: Flow specification (recommended)
        The IoMax and IoMaxSpec must be optional.
        When filling in at the same time, subject to IoMaxSpec.
        It is recommended that you only fill in the flow specification
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ioMaxSpec"))

    @io_max_spec.setter
    def io_max_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01e9d35d5075607f6bab99dd6f04c2cf0b0a6de93648e9e0d16e3260975104e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ioMaxSpec", value)

    @builtins.property
    @jsii.member(jsii_name="openConnector")
    def open_connector(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: openConnector: Whether open kafka connector or not
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "openConnector"))

    @open_connector.setter
    def open_connector(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52b105fe045ed76bc997d41e2aac7e7282c90e88054b4db20db0d048451353ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "openConnector", value)

    @builtins.property
    @jsii.member(jsii_name="partitionNum")
    def partition_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        partitionNum: Number of partitions(recommended).
        The number of partitions to be configured for the Message Queue for Apache Kafka instance.
        PartitionNum and TopicQuota must be selected.
        It is recommended that you only fill in the number of partitions.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "partitionNum"))

    @partition_num.setter
    def partition_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e3d5c726ee5f7607bfd2efa25776ff324abb2c0ee8bab22a40eff0267b37149)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "partitionNum", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: Pay by hour or month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0eb2050bba774d316b9feaf7926e1f1d8a00077ad8f3f378efe512d41ab00a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="serverlessConfig")
    def serverless_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ServerlessConfigProperty"]]:
        '''
        :Property: serverlessConfig: Serverless instance related settings.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ServerlessConfigProperty"]], jsii.get(self, "serverlessConfig"))

    @serverless_config.setter
    def serverless_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ServerlessConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9666cf059a29b8cac8eadc2854f80cea84b827b43ad0ae714f88f37bca2ba57)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverlessConfig", value)

    @builtins.property
    @jsii.member(jsii_name="specType")
    def spec_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        specType: The edition of the Message Queue for Apache Kafka instance. Valid values:
        normal: Normal version
        professional: Professional Edition (high writing edition)
        professionalForHighRead: Professional Edition (high reading edition)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "specType"))

    @spec_type.setter
    def spec_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31c9712d23a47883b13b6e088748efb57ac500595f37d00f4d7f5ac4e2eb9202)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "specType", value)

    @builtins.property
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9799e86b7d76e0d25e86bb6e099348f4d5a5caa21616b038f92ede40a49e738)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="topicQuota")
    def topic_quota(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        topicQuota: Number of topics (not recommended).
        The number of topics to be configured for the Message Queue for Apache Kafka instance.
        PartitionNum and TopicQuota must be selected.
        It is recommended that you only fill in the number of partitions.
        The default value of this parameter varies with different peak traffic values.
        Additional fees are charged if the default values are exceeded.
        Different specifications have different default values, and extra fees are charged.
        For more information, see Billing.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "topicQuota"))

    @topic_quota.setter
    def topic_quota(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb29966d06b76e5c00b6e1a6cea35d1cbfe3f18615b7c998e8bf8536acbfa43d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topicQuota", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "deploy_module": "deployModule",
            "v_switch_id": "vSwitchId",
            "config": "config",
            "cross_zone": "crossZone",
            "is_eip_inner": "isEipInner",
            "is_force_selected_zones": "isForceSelectedZones",
            "is_set_user_and_password": "isSetUserAndPassword",
            "kms_key_id": "kmsKeyId",
            "name": "name",
            "notifier": "notifier",
            "password": "password",
            "security_group": "securityGroup",
            "selected_zones": "selectedZones",
            "service_version": "serviceVersion",
            "username": "username",
            "user_phone_num": "userPhoneNum",
            "vpc_id": "vpcId",
            "v_switch_ids": "vSwitchIds",
            "zone_id": "zoneId",
        },
    )
    class DeployOptionProperty:
        def __init__(
            self,
            *,
            deploy_module: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            cross_zone: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            is_eip_inner: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            is_force_selected_zones: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            is_set_user_and_password: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            notifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            security_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            selected_zones: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            service_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_phone_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param deploy_module: 
            :param v_switch_id: 
            :param config: 
            :param cross_zone: 
            :param is_eip_inner: 
            :param is_force_selected_zones: 
            :param is_set_user_and_password: 
            :param kms_key_id: 
            :param name: 
            :param notifier: 
            :param password: 
            :param security_group: 
            :param selected_zones: 
            :param service_version: 
            :param username: 
            :param user_phone_num: 
            :param vpc_id: 
            :param v_switch_ids: 
            :param zone_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__94fe64261deb08e963f13295caa651d44dd4c2963c23019ae132eab6a2f2b4ac)
                check_type(argname="argument deploy_module", value=deploy_module, expected_type=type_hints["deploy_module"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument config", value=config, expected_type=type_hints["config"])
                check_type(argname="argument cross_zone", value=cross_zone, expected_type=type_hints["cross_zone"])
                check_type(argname="argument is_eip_inner", value=is_eip_inner, expected_type=type_hints["is_eip_inner"])
                check_type(argname="argument is_force_selected_zones", value=is_force_selected_zones, expected_type=type_hints["is_force_selected_zones"])
                check_type(argname="argument is_set_user_and_password", value=is_set_user_and_password, expected_type=type_hints["is_set_user_and_password"])
                check_type(argname="argument kms_key_id", value=kms_key_id, expected_type=type_hints["kms_key_id"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument notifier", value=notifier, expected_type=type_hints["notifier"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument security_group", value=security_group, expected_type=type_hints["security_group"])
                check_type(argname="argument selected_zones", value=selected_zones, expected_type=type_hints["selected_zones"])
                check_type(argname="argument service_version", value=service_version, expected_type=type_hints["service_version"])
                check_type(argname="argument username", value=username, expected_type=type_hints["username"])
                check_type(argname="argument user_phone_num", value=user_phone_num, expected_type=type_hints["user_phone_num"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "deploy_module": deploy_module,
                "v_switch_id": v_switch_id,
            }
            if config is not None:
                self._values["config"] = config
            if cross_zone is not None:
                self._values["cross_zone"] = cross_zone
            if is_eip_inner is not None:
                self._values["is_eip_inner"] = is_eip_inner
            if is_force_selected_zones is not None:
                self._values["is_force_selected_zones"] = is_force_selected_zones
            if is_set_user_and_password is not None:
                self._values["is_set_user_and_password"] = is_set_user_and_password
            if kms_key_id is not None:
                self._values["kms_key_id"] = kms_key_id
            if name is not None:
                self._values["name"] = name
            if notifier is not None:
                self._values["notifier"] = notifier
            if password is not None:
                self._values["password"] = password
            if security_group is not None:
                self._values["security_group"] = security_group
            if selected_zones is not None:
                self._values["selected_zones"] = selected_zones
            if service_version is not None:
                self._values["service_version"] = service_version
            if username is not None:
                self._values["username"] = username
            if user_phone_num is not None:
                self._values["user_phone_num"] = user_phone_num
            if vpc_id is not None:
                self._values["vpc_id"] = vpc_id
            if v_switch_ids is not None:
                self._values["v_switch_ids"] = v_switch_ids
            if zone_id is not None:
                self._values["zone_id"] = zone_id

        @builtins.property
        def deploy_module(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            deployModule: The deployment mode of the instance. Valid values:
            vpc: virtual private cloud (VPC)
            eip: Internet and VPC
            The deployment mode of the instance must be consistent with the instance type.
            Set this value to vpc if your instance type is VPC.
            Set this value to eip if your instance type is Internet and VPC.
            '''
            result = self._values.get("deploy_module")
            assert result is not None, "Required property 'deploy_module' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vSwitchId: The ID of the vSwitch associated with the VPC.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property:

            config: The initial configurations of the Message Queue for Apache Kafka instance. If you do not specify this parameter, it is left empty.The Config parameter supports the following parameters:
            enable.vpc_sasl_ssl: specifies whether to enable VPC transmission encryption. Valid values:
            true: indicates that VPC transmission encryption is enabled. If you enable VPC transmission encryption, enable access control list (ACL).
            false: indicates that VPC transmission encryption is disabled. By default, VPC transmission encryption is disabled.

            enable.acl: specifies whether to enable ACL. Valid values:
            true: indicates that ACL is enabled.
            false: indicates that ACL is disabled. By default, ACL is disabled.

            kafka.log.retention.hours: the maximum message retention period when the disk capacity is sufficient. Unit: hours. Valid values: 24 to 480. Default value: 72. When the disk usage reaches 85%, the disk capacity is considered insufficient, and the system deletes messages in the order in which messages are stored, from the earliest to latest.

            kafka.message.max.bytes: the maximum size of messages that Message Queue for Apache Kafka can send and receive. Unit: byte. Valid values: 1048576 to 10485760. Default value: 1048576. Before you modify the maximum message size, make sure that the new value is consistent with those on the producer and consumer.
            '''
            result = self._values.get("config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def cross_zone(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            crossZone: Specifies whether to enable cross-zone deployment. Valid values:
            true: indicates that cross-zone deployment is enabled.
            false: indicates that cross-zone deployment is disabled.
            '''
            result = self._values.get("cross_zone")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def is_eip_inner(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            isEipInner: Specifies whether the instance supports elastic IP addresses (EIPs). Valid values:
            true: The instance supports EIP mode.
            false: The instance does not support EIP mode.
            This parameter must be consistent with the instance type.
            Set the parameter to true for instances of the Internet and VPC type or to false for instances of the VPC type.
            '''
            result = self._values.get("is_eip_inner")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def is_force_selected_zones(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: isForceSelectedZones: Whether to force deployment in the selected availability zone.
            '''
            result = self._values.get("is_force_selected_zones")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def is_set_user_and_password(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            isSetUserAndPassword: Specifies whether to set a new user name and password for instance. Valid values:
            true: Set a new user name and password.
            false: Do not set a new user name and password.
            This parameter is supported only for instances of the Internet and VPC type.
            '''
            result = self._values.get("is_set_user_and_password")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def kms_key_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: kmsKeyId: The ID of the KMS key that is used to encrypt the data disk. This parameter is supported only for instances of the VPC type.
            '''
            result = self._values.get("kms_key_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The new name of the instance.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def notifier(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: notifier: Alert contact.
            '''
            result = self._values.get("notifier")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            password: The new password for the instance.
            This parameter is supported only for instances of the Internet and VPC type.
            Support characters (uppercase and lowercase), numbers, length 8-40,
            containing at least one lowercase letter, one uppercase letter, and one number
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def security_group(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            securityGroup: The security group of the instance.
            If you do not specify this parameter, Message Queue for Apache Kafka automatically
            configures a security group for the instance. If you specify this parameter,
            you must create the specified security group in advance.
            For more information, see Create a security group.
            '''
            result = self._values.get("security_group")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def selected_zones(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: selectedZones: Select the primary availability zone candidate set for deployment and the two-dimensional array of the standby availability zone candidate set.
            '''
            result = self._values.get("selected_zones")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def service_version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serviceVersion: The version of the Message Queue for Apache Kafka instance. For example: 0.10.2, 2.2.0 and etc.
            '''
            result = self._values.get("service_version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def username(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            username: The new user name for the instance.
            This parameter is supported only for instances of the Internet and VPC type.
            Support characters (uppercase and lowercase), numbers, length 8-40
            '''
            result = self._values.get("username")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_phone_num(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: userPhoneNum: The phone number of the alert contact.
            '''
            result = self._values.get("user_phone_num")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vpcId: The ID of the VPC on which you want to deploy the instance.
            '''
            result = self._values.get("vpc_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: vSwitchIds: List of vSwitch IDs deployed by the instance. This parameter is required for V2 and V3 series instances. Confluent type instances support this parameter, and at least one of VSwitchIds and VSwitchId needs to be filled in. When both are filled in, VSwitchIds is used first.
            '''
            result = self._values.get("v_switch_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            zoneId: The ID of the zone where you want to deploy the instance.
            The zone ID of the instance must be the same as that of the vSwitch.
            '''
            result = self._values.get("zone_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DeployOptionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-kafka.RosInstance.ServerlessConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "reserved_publish_capacity": "reservedPublishCapacity",
            "reserved_subscribe_capacity": "reservedSubscribeCapacity",
        },
    )
    class ServerlessConfigProperty:
        def __init__(
            self,
            *,
            reserved_publish_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            reserved_subscribe_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param reserved_publish_capacity: 
            :param reserved_subscribe_capacity: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__611163be651eea629308309b7e1c783dde8c0cdf1c3b9d9e6e5bca274745ab39)
                check_type(argname="argument reserved_publish_capacity", value=reserved_publish_capacity, expected_type=type_hints["reserved_publish_capacity"])
                check_type(argname="argument reserved_subscribe_capacity", value=reserved_subscribe_capacity, expected_type=type_hints["reserved_subscribe_capacity"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "reserved_publish_capacity": reserved_publish_capacity,
                "reserved_subscribe_capacity": reserved_subscribe_capacity,
            }

        @builtins.property
        def reserved_publish_capacity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: reservedPublishCapacity: Reserved sending traffic specification value, minimum 60
            '''
            result = self._values.get("reserved_publish_capacity")
            assert result is not None, "Required property 'reserved_publish_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def reserved_subscribe_capacity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: reservedSubscribeCapacity: Reserved consumption traffic specification value, minimum 20
            '''
            result = self._values.get("reserved_subscribe_capacity")
            assert result is not None, "Required property 'reserved_subscribe_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServerlessConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-kafka.RosInstance.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c862bf2c2b8bbdecfa8448644ecae8f7a3e8ead229311c7e1b51471918a20906)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "deploy_type": "deployType",
        "deletion_force": "deletionForce",
        "deploy_option": "deployOption",
        "disk_size": "diskSize",
        "disk_type": "diskType",
        "eip_max": "eipMax",
        "io_max": "ioMax",
        "io_max_spec": "ioMaxSpec",
        "open_connector": "openConnector",
        "partition_num": "partitionNum",
        "pay_type": "payType",
        "serverless_config": "serverlessConfig",
        "spec_type": "specType",
        "tags": "tags",
        "topic_quota": "topicQuota",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        deploy_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy_option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.DeployOptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        eip_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_max_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        open_connector: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        partition_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        serverless_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ServerlessConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        spec_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        topic_quota: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-instance

        :param deploy_type: 
        :param deletion_force: 
        :param deploy_option: 
        :param disk_size: 
        :param disk_type: 
        :param eip_max: 
        :param io_max: 
        :param io_max_spec: 
        :param open_connector: 
        :param partition_num: 
        :param pay_type: 
        :param serverless_config: 
        :param spec_type: 
        :param tags: 
        :param topic_quota: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67825981dd5d97d8902e6f88ec121471c4cef9b6b20dd99b3e239d3402220369)
            check_type(argname="argument deploy_type", value=deploy_type, expected_type=type_hints["deploy_type"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument deploy_option", value=deploy_option, expected_type=type_hints["deploy_option"])
            check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
            check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
            check_type(argname="argument eip_max", value=eip_max, expected_type=type_hints["eip_max"])
            check_type(argname="argument io_max", value=io_max, expected_type=type_hints["io_max"])
            check_type(argname="argument io_max_spec", value=io_max_spec, expected_type=type_hints["io_max_spec"])
            check_type(argname="argument open_connector", value=open_connector, expected_type=type_hints["open_connector"])
            check_type(argname="argument partition_num", value=partition_num, expected_type=type_hints["partition_num"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument serverless_config", value=serverless_config, expected_type=type_hints["serverless_config"])
            check_type(argname="argument spec_type", value=spec_type, expected_type=type_hints["spec_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument topic_quota", value=topic_quota, expected_type=type_hints["topic_quota"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "deploy_type": deploy_type,
        }
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if deploy_option is not None:
            self._values["deploy_option"] = deploy_option
        if disk_size is not None:
            self._values["disk_size"] = disk_size
        if disk_type is not None:
            self._values["disk_type"] = disk_type
        if eip_max is not None:
            self._values["eip_max"] = eip_max
        if io_max is not None:
            self._values["io_max"] = io_max
        if io_max_spec is not None:
            self._values["io_max_spec"] = io_max_spec
        if open_connector is not None:
            self._values["open_connector"] = open_connector
        if partition_num is not None:
            self._values["partition_num"] = partition_num
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if serverless_config is not None:
            self._values["serverless_config"] = serverless_config
        if spec_type is not None:
            self._values["spec_type"] = spec_type
        if tags is not None:
            self._values["tags"] = tags
        if topic_quota is not None:
            self._values["topic_quota"] = topic_quota

    @builtins.property
    def deploy_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values:
        4: Instance of the public type
        5: Instance of the VPC type
        '''
        result = self._values.get("deploy_type")
        assert result is not None, "Required property 'deploy_type' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deploy_option(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.DeployOptionProperty]]:
        '''
        :Property: deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
        '''
        result = self._values.get("deploy_option")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.DeployOptionProperty]], result)

    @builtins.property
    def disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
        '''
        result = self._values.get("disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values:
        0: Ultra disk
        1: SSD
        '''
        result = self._values.get("disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def eip_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
        This parameter must be specified when the DeployType parameter is set to 4.
        '''
        result = self._values.get("eip_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
        For more information about the value range, see Billing.
        '''
        result = self._values.get("io_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_max_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ioMaxSpec: Flow specification (recommended)
        The IoMax and IoMaxSpec must be optional.
        When filling in at the same time, subject to IoMaxSpec.
        It is recommended that you only fill in the flow specification
        '''
        result = self._values.get("io_max_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def open_connector(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: openConnector: Whether open kafka connector or not
        '''
        result = self._values.get("open_connector")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def partition_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        partitionNum: Number of partitions(recommended).
        The number of partitions to be configured for the Message Queue for Apache Kafka instance.
        PartitionNum and TopicQuota must be selected.
        It is recommended that you only fill in the number of partitions.
        '''
        result = self._values.get("partition_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: Pay by hour or month.
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def serverless_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.ServerlessConfigProperty]]:
        '''
        :Property: serverlessConfig: Serverless instance related settings.
        '''
        result = self._values.get("serverless_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.ServerlessConfigProperty]], result)

    @builtins.property
    def spec_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        specType: The edition of the Message Queue for Apache Kafka instance. Valid values:
        normal: Normal version
        professional: Professional Edition (high writing edition)
        professionalForHighRead: Professional Edition (high reading edition)
        '''
        result = self._values.get("spec_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstance.TagsProperty]], result)

    @builtins.property
    def topic_quota(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        topicQuota: Number of topics (not recommended).
        The number of topics to be configured for the Message Queue for Apache Kafka instance.
        PartitionNum and TopicQuota must be selected.
        It is recommended that you only fill in the number of partitions.
        The default value of this parameter varies with different peak traffic values.
        Additional fees are charged if the default values are exceeded.
        Different specifications have different default values, and extra fees are charged.
        For more information, see Billing.
        '''
        result = self._values.get("topic_quota")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSaslUser(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.RosSaslUser",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::KAFKA::SaslUser``, which is used to create a Simple Authentication and Security Layer (SASL) user.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SaslUser`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSaslUserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0a4fbf76f12a24df44d13b9e485c5fb36758efeb8be91b8a1c26a47e6fe2b9d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b6430db50a3ddf0e128a807759e542c458bd20b07ccc52d154c60c7c79c00016)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Username: The user name of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUsername"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__c96891d7f0b5cecf315098e760acae8264d7fe2ac48f3319d624be21625b5716)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fd698a55dce127749d35cd6b3e056da9dd5c3e49e77738690da3c2dfe611661)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: password: The password of the SASL user.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dd6c2a6de53da54885edd90c236adcd2b77c29f0a9dcac45349d2fe9aff62cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="username")
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: username: The name of the SASL user.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "username"))

    @username.setter
    def username(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88e417f803d80052232f01671430ee25c0d0fec5e4e4d2d66d88ac209a256b33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "username", value)

    @builtins.property
    @jsii.member(jsii_name="mechanism")
    def mechanism(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mechanism: The encryption method. Valid values:
        SCRAM-SHA-512 (default)
        SCRAM-SHA-256
        Note
        This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mechanism"))

    @mechanism.setter
    def mechanism(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9e3a5fdfd41f1ca536fdae46e9c868720c40a60d756a977f027c65a38c18f53)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mechanism", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the Simple Authentication and Security Layer (SASL) user. Valid values:
        plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
        SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
        LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
        Default value: plain.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8290da8c434895cbd5d14b090a2ec6360c96dedbe3ddbd3d9af5766fadfad089)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.RosSaslUserProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "password": "password",
        "username": "username",
        "mechanism": "mechanism",
        "type": "type",
    },
)
class RosSaslUserProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        mechanism: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSaslUser``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser

        :param instance_id: 
        :param password: 
        :param username: 
        :param mechanism: 
        :param type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ac9858c9cd85e25a45ebf9ebc7ebf2dab02b493b14e8f0f6a1bc71691c63161)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument mechanism", value=mechanism, expected_type=type_hints["mechanism"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "password": password,
            "username": username,
        }
        if mechanism is not None:
            self._values["mechanism"] = mechanism
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The instance ID.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: password: The password of the SASL user.
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: username: The name of the SASL user.
        '''
        result = self._values.get("username")
        assert result is not None, "Required property 'username' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def mechanism(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        mechanism: The encryption method. Valid values:
        SCRAM-SHA-512 (default)
        SCRAM-SHA-256
        Note
        This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        '''
        result = self._values.get("mechanism")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        type: The type of the Simple Authentication and Security Layer (SASL) user. Valid values:
        plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
        SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
        LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
        Default value: plain.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSaslUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTopic(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.RosTopic",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::KAFKA::Topic``, which is used to create a topic.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Topic`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-topic
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTopicProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__160be9ef6820de1cc6b7a9f91756870e5ef390481d80f022b162b7d2640e84a8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9a89f8c6f1a477a7123db3a9558be1b5cea5353e1f7ba473b4b387924d999c4a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Topic: Topic name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopic"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2be8c0cc96cd02d19d1b17da35b606d1da9f89b134eafa1f4fb14e46bd738f3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0aec3ba1d54419732c273bf2f0ada355d50f2a32536e3fc1bee7ef070acfe8b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        remark: The description of the topic. The value of this parameter must meet the following
        requirements:
        The value can only contain letters, digits, hyphens (-), and underscores (_).
        The value must be 3 to 64 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0955eafa540a32cf7e4322b1e3c5d4989ac22d24fb48673e11e3ada75d940f31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)

    @builtins.property
    @jsii.member(jsii_name="topic")
    def topic(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        topic: The name of the topic. The value of this parameter must meet the following requirements:
        The name can only contain letters, digits, hyphens (-), and underscores (_).
        The name must be 3 to 64 characters in length, and will be automatically truncated
        if it contains more characters.
        The name cannot be modified after being created.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "topic"))

    @topic.setter
    def topic(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89f4ae109f8654689575b2840f9938a50a1594314c9a5bdfd9d3ec47de212111)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topic", value)

    @builtins.property
    @jsii.member(jsii_name="compactTopic")
    def compact_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        compactTopic: The log cleanup policy for the topic. This parameter is available when the Local Storage mode is specified for the topic. Valid values:
        false: uses the default log cleanup policy.
        true: uses the Apache Kafka log compaction policy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "compactTopic"))

    @compact_topic.setter
    def compact_topic(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc9b5cf844ddeb8b0a01d291e521f4b788cfce35ce53b0aa395d796e18d3d72c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "compactTopic", value)

    @builtins.property
    @jsii.member(jsii_name="config")
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        config: Supplementary configuration.
        Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
        This parameter can only be specified if the LocalTopic value is true.
        NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "config"))

    @config.setter
    def config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__739312b7fd20301fee203513e29f4339202e633b89767d501bfcde16624d9640)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "config", value)

    @builtins.property
    @jsii.member(jsii_name="localTopic")
    def local_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localTopic: The storage engine of the topic. Valid values:
        false: the Cloud Storage mode.
        true: the Local Storage mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "localTopic"))

    @local_topic.setter
    def local_topic(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a830387d3faa3ae76e0a1e0c77bc89661eebc91e788901a9b1571964065b1ba1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localTopic", value)

    @builtins.property
    @jsii.member(jsii_name="minInsyncReplicas")
    def min_insync_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        minInsyncReplicas: The minimum number of ISR sync replicas.
        This parameter can only be specified if the LocalTopic value is true.
        The value must be less than the number of Topic copies.
        The number of synchronous replicas is limited to 1~3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "minInsyncReplicas"))

    @min_insync_replicas.setter
    def min_insync_replicas(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5df2bd0ca0d1ea8be959750e6509f3556b614f20bd614072c4fef1e82c0cba5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "minInsyncReplicas", value)

    @builtins.property
    @jsii.member(jsii_name="partitionNum")
    def partition_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        partitionNum: The number of partitions in the topic. Valid values:
        1 to 48
        We recommend that you set the number of partitions to a multiple of 6 to reduce the
        risk of data skew.Note:For special requirements,submit a ticket.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "partitionNum"))

    @partition_num.setter
    def partition_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6223dbf0afc2c99c93aa773e02be654e490b4be200f6113d9dd81da308e8727)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "partitionNum", value)

    @builtins.property
    @jsii.member(jsii_name="replicationFactor")
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        replicationFactor: The number of copies of the topic.
        This parameter can only be specified if the LocalTopic value is true.
        The number of copies is limited to 1~3.
        Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "replicationFactor"))

    @replication_factor.setter
    def replication_factor(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e2f251a7895b5bff3bef3e5f96e77dc507c7a638e20a9043c12dcb843b1c6e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replicationFactor", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosTopic.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosTopic.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosTopic.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00de779235fc02b3975151d00f69db32201014a7667f0e4a6286dfb8102cfb76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-kafka.RosTopic.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__246a35c616f40275eb7b60e94c79957e21bb45f8f8c78f57d0631526ede3147b)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.RosTopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "remark": "remark",
        "topic": "topic",
        "compact_topic": "compactTopic",
        "config": "config",
        "local_topic": "localTopic",
        "min_insync_replicas": "minInsyncReplicas",
        "partition_num": "partitionNum",
        "replication_factor": "replicationFactor",
        "tags": "tags",
    },
)
class RosTopicProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        compact_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        local_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        min_insync_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        partition_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        replication_factor: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosTopic.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosTopic``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-topic

        :param instance_id: 
        :param remark: 
        :param topic: 
        :param compact_topic: 
        :param config: 
        :param local_topic: 
        :param min_insync_replicas: 
        :param partition_num: 
        :param replication_factor: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7934985224c4d815a09dfd1883f9ead5f5e06e98dd7cbbb35a71311a22cef871)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument topic", value=topic, expected_type=type_hints["topic"])
            check_type(argname="argument compact_topic", value=compact_topic, expected_type=type_hints["compact_topic"])
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
            check_type(argname="argument local_topic", value=local_topic, expected_type=type_hints["local_topic"])
            check_type(argname="argument min_insync_replicas", value=min_insync_replicas, expected_type=type_hints["min_insync_replicas"])
            check_type(argname="argument partition_num", value=partition_num, expected_type=type_hints["partition_num"])
            check_type(argname="argument replication_factor", value=replication_factor, expected_type=type_hints["replication_factor"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "remark": remark,
            "topic": topic,
        }
        if compact_topic is not None:
            self._values["compact_topic"] = compact_topic
        if config is not None:
            self._values["config"] = config
        if local_topic is not None:
            self._values["local_topic"] = local_topic
        if min_insync_replicas is not None:
            self._values["min_insync_replicas"] = min_insync_replicas
        if partition_num is not None:
            self._values["partition_num"] = partition_num
        if replication_factor is not None:
            self._values["replication_factor"] = replication_factor
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        remark: The description of the topic. The value of this parameter must meet the following
        requirements:
        The value can only contain letters, digits, hyphens (-), and underscores (_).
        The value must be 3 to 64 characters in length.
        '''
        result = self._values.get("remark")
        assert result is not None, "Required property 'remark' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        topic: The name of the topic. The value of this parameter must meet the following requirements:
        The name can only contain letters, digits, hyphens (-), and underscores (_).
        The name must be 3 to 64 characters in length, and will be automatically truncated
        if it contains more characters.
        The name cannot be modified after being created.
        '''
        result = self._values.get("topic")
        assert result is not None, "Required property 'topic' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def compact_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        compactTopic: The log cleanup policy for the topic. This parameter is available when the Local Storage mode is specified for the topic. Valid values:
        false: uses the default log cleanup policy.
        true: uses the Apache Kafka log compaction policy.
        '''
        result = self._values.get("compact_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        config: Supplementary configuration.
        Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
        This parameter can only be specified if the LocalTopic value is true.
        NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def local_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localTopic: The storage engine of the topic. Valid values:
        false: the Cloud Storage mode.
        true: the Local Storage mode.
        '''
        result = self._values.get("local_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def min_insync_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        minInsyncReplicas: The minimum number of ISR sync replicas.
        This parameter can only be specified if the LocalTopic value is true.
        The value must be less than the number of Topic copies.
        The number of synchronous replicas is limited to 1~3.
        '''
        result = self._values.get("min_insync_replicas")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def partition_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        partitionNum: The number of partitions in the topic. Valid values:
        1 to 48
        We recommend that you set the number of partitions to a multiple of 6 to reduce the
        risk of data skew.Note:For special requirements,submit a ticket.
        '''
        result = self._values.get("partition_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        replicationFactor: The number of copies of the topic.
        This parameter can only be specified if the LocalTopic value is true.
        The number of copies is limited to 1~3.
        Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
        '''
        result = self._values.get("replication_factor")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosTopic.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosTopic.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISaslUser)
class SaslUser(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.SaslUser",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::KAFKA::SaslUser``, which is used to create a Simple Authentication and Security Layer (SASL) user.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSaslUser``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SaslUserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b5160a5069197912cb49f904dc9cf766b41b04788fd25a0014bc6877fbf69e1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: The user name of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUsername"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SaslUserProps":
        return typing.cast("SaslUserProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd6a2e805c60cb485e735043ad8ee0ff93ddec6d71506e828000361448045bec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db2bd437eb0491857bc7685a2a232fc87afb08526548fad85b971f6151cbf0f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e75e4403a7f4486ba7ce20996385807b7a8cf296a489a7deb0885a16f2ca4504)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.SaslUserProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "password": "password",
        "username": "username",
        "mechanism": "mechanism",
        "type": "type",
    },
)
class SaslUserProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        mechanism: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SaslUser``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-sasluser

        :param instance_id: Property instanceId: The instance ID.
        :param password: Property password: The password of the SASL user.
        :param username: Property username: The name of the SASL user.
        :param mechanism: Property mechanism: The encryption method. Valid values: SCRAM-SHA-512 (default) SCRAM-SHA-256 Note This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        :param type: Property type: The type of the Simple Authentication and Security Layer (SASL) user. Valid values: plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance. SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm. LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances. Default value: plain.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d23d0ee90244da6976eaae935acbd6518caf5358756e37728f67f2ea6c89ba8d)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument mechanism", value=mechanism, expected_type=type_hints["mechanism"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "password": password,
            "username": username,
        }
        if mechanism is not None:
            self._values["mechanism"] = mechanism
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The instance ID.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property password: The password of the SASL user.'''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property username: The name of the SASL user.'''
        result = self._values.get("username")
        assert result is not None, "Required property 'username' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def mechanism(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mechanism: The encryption method.

        Valid values:
        SCRAM-SHA-512 (default)
        SCRAM-SHA-256
        Note
        This parameter is available only for ApsaraMQ for Kafka V3 serverless instances.
        '''
        result = self._values.get("mechanism")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: The type of the Simple Authentication and Security Layer (SASL) user.

        Valid values:
        plain: a simple mechanism that uses usernames and passwords to verify user identities. ApsaraMQ for Kafka provides an improved PLAIN mechanism that allows you to dynamically add SASL users without the need to restart an instance.
        SCRAM: a mechanism that uses usernames and passwords to verify user identities. Compared with the PLAIN mechanism, this mechanism provides better security protection. ApsaraMQ for Kafka uses the SCRAM-SHA-256 algorithm.
        LDAP: This value is available only for the SASL users of ApsaraMQ for Confluent instances.
        Default value: plain.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SaslUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ITopic)
class Topic(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.Topic",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::KAFKA::Topic``, which is used to create a topic.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTopic``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-topic
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TopicProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5332659ab4aad27a09d0d98fb75e57a366e649faf8942096da3cd7711836d4f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.

        You can call the GetInstanceList operation to query instances.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Topic: Topic name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTopic"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TopicProps":
        return typing.cast("TopicProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f07ef1bb250c494d4e72135574a181f00e876c114efa458c88b31330d47ab9f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51640ce37f58936dfc560cbf653364c1d21fbf1a19f39605bbb98a7188ac6b80)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5518c40e7e7211e33e4634f190891300ed920a96bd3b4c35553c275ba602c563)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.TopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "remark": "remark",
        "topic": "topic",
        "compact_topic": "compactTopic",
        "config": "config",
        "local_topic": "localTopic",
        "min_insync_replicas": "minInsyncReplicas",
        "partition_num": "partitionNum",
        "replication_factor": "replicationFactor",
        "tags": "tags",
    },
)
class TopicProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        compact_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        local_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        min_insync_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        partition_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        replication_factor: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosTopic.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Topic``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-topic

        :param instance_id: Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located. You can call the GetInstanceList operation to query instances.
        :param remark: Property remark: The description of the topic. The value of this parameter must meet the following requirements: The value can only contain letters, digits, hyphens (-), and underscores (_). The value must be 3 to 64 characters in length.
        :param topic: Property topic: The name of the topic. The value of this parameter must meet the following requirements: The name can only contain letters, digits, hyphens (-), and underscores (_). The name must be 3 to 64 characters in length, and will be automatically truncated if it contains more characters. The name cannot be modified after being created.
        :param compact_topic: Property compactTopic: The log cleanup policy for the topic. This parameter is available when the Local Storage mode is specified for the topic. Valid values: false: uses the default log cleanup policy. true: uses the Apache Kafka log compaction policy.
        :param config: Property config: Supplementary configuration. Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3. This parameter can only be specified if the LocalTopic value is true. NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
        :param local_topic: Property localTopic: The storage engine of the topic. Valid values: false: the Cloud Storage mode. true: the Local Storage mode.
        :param min_insync_replicas: Property minInsyncReplicas: The minimum number of ISR sync replicas. This parameter can only be specified if the LocalTopic value is true. The value must be less than the number of Topic copies. The number of synchronous replicas is limited to 1~3.
        :param partition_num: Property partitionNum: The number of partitions in the topic. Valid values: 1 to 48 We recommend that you set the number of partitions to a multiple of 6 to reduce the risk of data skew.Note:For special requirements,submit a ticket.
        :param replication_factor: Property replicationFactor: The number of copies of the topic. This parameter can only be specified if the LocalTopic value is true. The number of copies is limited to 1~3. Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2774e4d4e724454236a4b844b6d52626be36ba5d97a20999275a210ee7c47bae)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument topic", value=topic, expected_type=type_hints["topic"])
            check_type(argname="argument compact_topic", value=compact_topic, expected_type=type_hints["compact_topic"])
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
            check_type(argname="argument local_topic", value=local_topic, expected_type=type_hints["local_topic"])
            check_type(argname="argument min_insync_replicas", value=min_insync_replicas, expected_type=type_hints["min_insync_replicas"])
            check_type(argname="argument partition_num", value=partition_num, expected_type=type_hints["partition_num"])
            check_type(argname="argument replication_factor", value=replication_factor, expected_type=type_hints["replication_factor"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "remark": remark,
            "topic": topic,
        }
        if compact_topic is not None:
            self._values["compact_topic"] = compact_topic
        if config is not None:
            self._values["config"] = config
        if local_topic is not None:
            self._values["local_topic"] = local_topic
        if min_insync_replicas is not None:
            self._values["min_insync_replicas"] = min_insync_replicas
        if partition_num is not None:
            self._values["partition_num"] = partition_num
        if replication_factor is not None:
            self._values["replication_factor"] = replication_factor
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.

        You can call the GetInstanceList operation to query instances.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property remark: The description of the topic.

        The value of this parameter must meet the following
        requirements:
        The value can only contain letters, digits, hyphens (-), and underscores (_).
        The value must be 3 to 64 characters in length.
        '''
        result = self._values.get("remark")
        assert result is not None, "Required property 'remark' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property topic: The name of the topic.

        The value of this parameter must meet the following requirements:
        The name can only contain letters, digits, hyphens (-), and underscores (_).
        The name must be 3 to 64 characters in length, and will be automatically truncated
        if it contains more characters.
        The name cannot be modified after being created.
        '''
        result = self._values.get("topic")
        assert result is not None, "Required property 'topic' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def compact_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property compactTopic: The log cleanup policy for the topic.

        This parameter is available when the Local Storage mode is specified for the topic. Valid values:
        false: uses the default log cleanup policy.
        true: uses the Apache Kafka log compaction policy.
        '''
        result = self._values.get("compact_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property config: Supplementary configuration.

        Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
        This parameter can only be specified if the LocalTopic value is true.
        NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def local_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property localTopic: The storage engine of the topic.

        Valid values:
        false: the Cloud Storage mode.
        true: the Local Storage mode.
        '''
        result = self._values.get("local_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def min_insync_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property minInsyncReplicas: The minimum number of ISR sync replicas.

        This parameter can only be specified if the LocalTopic value is true.
        The value must be less than the number of Topic copies.
        The number of synchronous replicas is limited to 1~3.
        '''
        result = self._values.get("min_insync_replicas")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def partition_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property partitionNum: The number of partitions in the topic.

        Valid values:
        1 to 48
        We recommend that you set the number of partitions to a multiple of 6 to reduce the
        risk of data skew.Note:For special requirements,submit a ticket.
        '''
        result = self._values.get("partition_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property replicationFactor: The number of copies of the topic.

        This parameter can only be specified if the LocalTopic value is true.
        The number of copies is limited to 1~3.
        Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
        '''
        result = self._values.get("replication_factor")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosTopic.TagsProperty]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosTopic.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAcl)
class Acl(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.Acl",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::KAFKA::Acl``, which is used to create an access control list (ACL).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAcl``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-acl
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AclProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0da7893a0c9ea932440c1934781c44ccf94d816338699467d3a98ce51add3e14)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclResourceType")
    def attr_acl_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclResourceType: The resource type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The instance ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: The username.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUsername"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AclProps:
        return typing.cast(AclProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__943293fafbc6c6bea5dfce8cd6ca210aaa8a8a7f66227105605fa0001c979c0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ecb47d9f41eb1cad35351b09e717a672e4592e36135856319b949ecc4217a86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33ee7fe995a31347b8773a9bb701332f318083baff5902c8d85d31ae9cd69b68)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IConsumerGroup)
class ConsumerGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.ConsumerGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::KAFKA::ConsumerGroup``, which is used to create a consumer group.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosConsumerGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kafka-consumergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ConsumerGroupProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__720b20cc96a7af99c364fedf9ac590ec18248904ae0bdb648ca325eb0574b3be)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrConsumerId")
    def attr_consumer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConsumerId: Consumer group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConsumerId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConsumerGroupProps:
        return typing.cast(ConsumerGroupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c3b7576e727457d7fe765d51cb505af73c04ad514c67895f883199ab02510ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e4276b9cefc72899d1896c7e4726e020a5c92df1e3d269fa1393d3950b71a46)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36632df85eed0ea5c43ecbb866d6fc649c5c69bed7062baa042e1d29ed50972d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Acl",
    "AclProps",
    "ConsumerGroup",
    "ConsumerGroupProps",
    "IAcl",
    "IConsumerGroup",
    "IInstance",
    "ISaslUser",
    "ITopic",
    "Instance",
    "InstanceProps",
    "RosAcl",
    "RosAclProps",
    "RosConsumerGroup",
    "RosConsumerGroupProps",
    "RosInstance",
    "RosInstanceProps",
    "RosSaslUser",
    "RosSaslUserProps",
    "RosTopic",
    "RosTopicProps",
    "SaslUser",
    "SaslUserProps",
    "Topic",
    "TopicProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__e8c17917a47d36e942af7d7bfd4e31d914816343913ece67dae051bddd798f7a(
    *,
    acl_operation_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    acl_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acl_resource_pattern_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acl_resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acl_permission_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cddb03fd90634fd87ec6b6327c65ff226c377248414f79c129f35a0b711159bb(
    *,
    consumer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosConsumerGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5443d10bbefc22c9269d268fc3f631a0135b9f3154677e49893b262da6804b90(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8cbd4fd55d51c7452af22cac4d6d0afd51af15d8aa20bee15c1694ea13304b14(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2b6b5e9a7d38afeaeb920ea4d5100f2cc2531b1b2644b746eda88694f327ea1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d5af42d5ca8068a1db9df284a167cc7331d7bd11546657dcbb1b9b663cb2853(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25c4e18ec018d9ba58e1e15577102bd0e4f8fd83aa96695297d5c0a4367670a2(
    *,
    deploy_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy_option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.DeployOptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eip_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_max_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    open_connector: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    partition_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    serverless_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ServerlessConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    spec_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    topic_quota: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87727ea2210d156092e87ebed75f5044c620816827fcbbbe3d6b7711883e4e90(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAclProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34452d3b972af4f6416ee70fb2d60945d7b628c78c24d17e233ef762629e15d2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__721e115f84f666b234b42dbb395c40fa748232c9450ee6c0ba96ccabe071df6d(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab56fe1bd173a76f47ae7f15f4d5cc36301e95208ac47a366088b6dca0b1e8c4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e293460b1e7af6006b2ebb201768732d66ea20acb7f3b02fd3dca45462cc7822(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34b85ea34e9a155ddb2b5ae22503891081a9b38dda41c35bd60a7622365b92ae(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b60f7480c332d7122728bc6bb4aa86174d1693e8f52e17d65032dc040ca3cd85(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcfa4236619ee997a97429841800a77960730aca056f278964c146c0296fe111(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d920a1e3c0dbe9221398997d4936713e415c635178b5a00edf3d0f1668bab1ac(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef0adb66cd12610e06e62231448b00a9296773c6d661cbe9ef8f7759c13bd0b6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be3dfdf0a6a2615fee4f5687382c1c9587d13b5586f6661413848d6a39734fa1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40cf052502609b558f2ed54f54188e3423c761cbbfc9fd503f75e2f5672629b4(
    *,
    acl_operation_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    acl_resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acl_resource_pattern_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acl_resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acl_permission_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a83626160cd6de1ccd0a93e231ab26c2e42569b1bd097b6be0a169b76414404(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosConsumerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b57e9fa8ce4f848ff2f804c39f121d7bc97e484512496f7602b07a6a42fbe493(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6010cc9525ae2fdd8598896542a49600e4ee6f74ec9f41092b8b2e8af4257b96(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afca68a2ee2e8e8f6383728cffa5cd1fab74cdcbbdbf81ca74b991750311d21e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5a192926542b90cf5fa21f0b6037edc260c995bf0ef1d043f34428f4f73d645(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e27f0e49120c1782e512bb0a043cd8dbc342460460a7de91ea26d8cdb6783ea(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1989c501502607f8829f62cdb56184c2ac0327981b539a38969c55c85e5f3b2(
    value: typing.Optional[typing.List[RosConsumerGroup.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6681012f3e49a105a7880f438329cff1adfb92b2230a37d34d6fdaceed88507(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acc3cd7d209ebaf90aa86662fb2e99517ba36e58a86c94e6e5c3f35b2c5a11e3(
    *,
    consumer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosConsumerGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e7e9e49e86ffda5613782114e9100783c1b804308e54b77f4d9caef430bcda5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__125b951a66915d6b7d2f45a0f7344e26c7a8262e821f915db5c8187cfdf36205(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d5c31494c0d5fe69235c28f0fb24f9fd08c13fc8d24f18d63f9a9cfce982e6c(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e028a42e04049aef2168ab11ce27f0886e6f3e32d4b27fb913c78c05dd2fd6f5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__266760183f657b9aae501817ac3b4e565edeb807d34e6388132846f0838a48ef(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1da1256dbe455e851c1958dac60b7087507d97a392d4412ebf08d5551ae9d9cd(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.DeployOptionProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86ad40cb3f7342b5d391758661072264426f3ab1b0f47b856a0a9135f509b3e8(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf33aceb916b6e49cab31c9b1331d1cdbca7711ccfc85f74458017a73109f912(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0df8402b06c3e3e7e8cf490f8c81d0313c8591e2ba287816249231c5762ba586(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__004ebc5a30a2a5a9e9439db40cd3996b2ff5df89c5fa8af14ecd9ce8781e7fe5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01e9d35d5075607f6bab99dd6f04c2cf0b0a6de93648e9e0d16e3260975104e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52b105fe045ed76bc997d41e2aac7e7282c90e88054b4db20db0d048451353ad(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e3d5c726ee5f7607bfd2efa25776ff324abb2c0ee8bab22a40eff0267b37149(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0eb2050bba774d316b9feaf7926e1f1d8a00077ad8f3f378efe512d41ab00a8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9666cf059a29b8cac8eadc2854f80cea84b827b43ad0ae714f88f37bca2ba57(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.ServerlessConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31c9712d23a47883b13b6e088748efb57ac500595f37d00f4d7f5ac4e2eb9202(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9799e86b7d76e0d25e86bb6e099348f4d5a5caa21616b038f92ede40a49e738(
    value: typing.Optional[typing.List[RosInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb29966d06b76e5c00b6e1a6cea35d1cbfe3f18615b7c998e8bf8536acbfa43d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94fe64261deb08e963f13295caa651d44dd4c2963c23019ae132eab6a2f2b4ac(
    *,
    deploy_module: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    cross_zone: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_eip_inner: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_force_selected_zones: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_set_user_and_password: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    notifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    selected_zones: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    service_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_phone_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__611163be651eea629308309b7e1c783dde8c0cdf1c3b9d9e6e5bca274745ab39(
    *,
    reserved_publish_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    reserved_subscribe_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c862bf2c2b8bbdecfa8448644ecae8f7a3e8ead229311c7e1b51471918a20906(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67825981dd5d97d8902e6f88ec121471c4cef9b6b20dd99b3e239d3402220369(
    *,
    deploy_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy_option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.DeployOptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eip_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_max_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    open_connector: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    partition_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    serverless_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ServerlessConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    spec_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    topic_quota: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0a4fbf76f12a24df44d13b9e485c5fb36758efeb8be91b8a1c26a47e6fe2b9d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSaslUserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6430db50a3ddf0e128a807759e542c458bd20b07ccc52d154c60c7c79c00016(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c96891d7f0b5cecf315098e760acae8264d7fe2ac48f3319d624be21625b5716(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fd698a55dce127749d35cd6b3e056da9dd5c3e49e77738690da3c2dfe611661(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dd6c2a6de53da54885edd90c236adcd2b77c29f0a9dcac45349d2fe9aff62cb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88e417f803d80052232f01671430ee25c0d0fec5e4e4d2d66d88ac209a256b33(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9e3a5fdfd41f1ca536fdae46e9c868720c40a60d756a977f027c65a38c18f53(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8290da8c434895cbd5d14b090a2ec6360c96dedbe3ddbd3d9af5766fadfad089(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ac9858c9cd85e25a45ebf9ebc7ebf2dab02b493b14e8f0f6a1bc71691c63161(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    mechanism: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__160be9ef6820de1cc6b7a9f91756870e5ef390481d80f022b162b7d2640e84a8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTopicProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a89f8c6f1a477a7123db3a9558be1b5cea5353e1f7ba473b4b387924d999c4a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2be8c0cc96cd02d19d1b17da35b606d1da9f89b134eafa1f4fb14e46bd738f3c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0aec3ba1d54419732c273bf2f0ada355d50f2a32536e3fc1bee7ef070acfe8b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0955eafa540a32cf7e4322b1e3c5d4989ac22d24fb48673e11e3ada75d940f31(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89f4ae109f8654689575b2840f9938a50a1594314c9a5bdfd9d3ec47de212111(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc9b5cf844ddeb8b0a01d291e521f4b788cfce35ce53b0aa395d796e18d3d72c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__739312b7fd20301fee203513e29f4339202e633b89767d501bfcde16624d9640(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a830387d3faa3ae76e0a1e0c77bc89661eebc91e788901a9b1571964065b1ba1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5df2bd0ca0d1ea8be959750e6509f3556b614f20bd614072c4fef1e82c0cba5e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6223dbf0afc2c99c93aa773e02be654e490b4be200f6113d9dd81da308e8727(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e2f251a7895b5bff3bef3e5f96e77dc507c7a638e20a9043c12dcb843b1c6e6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00de779235fc02b3975151d00f69db32201014a7667f0e4a6286dfb8102cfb76(
    value: typing.Optional[typing.List[RosTopic.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__246a35c616f40275eb7b60e94c79957e21bb45f8f8c78f57d0631526ede3147b(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7934985224c4d815a09dfd1883f9ead5f5e06e98dd7cbbb35a71311a22cef871(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    compact_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    local_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_insync_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    partition_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replication_factor: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosTopic.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b5160a5069197912cb49f904dc9cf766b41b04788fd25a0014bc6877fbf69e1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SaslUserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd6a2e805c60cb485e735043ad8ee0ff93ddec6d71506e828000361448045bec(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db2bd437eb0491857bc7685a2a232fc87afb08526548fad85b971f6151cbf0f3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e75e4403a7f4486ba7ce20996385807b7a8cf296a489a7deb0885a16f2ca4504(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d23d0ee90244da6976eaae935acbd6518caf5358756e37728f67f2ea6c89ba8d(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    mechanism: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5332659ab4aad27a09d0d98fb75e57a366e649faf8942096da3cd7711836d4f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TopicProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f07ef1bb250c494d4e72135574a181f00e876c114efa458c88b31330d47ab9f1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51640ce37f58936dfc560cbf653364c1d21fbf1a19f39605bbb98a7188ac6b80(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5518c40e7e7211e33e4634f190891300ed920a96bd3b4c35553c275ba602c563(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2774e4d4e724454236a4b844b6d52626be36ba5d97a20999275a210ee7c47bae(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    compact_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    local_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_insync_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    partition_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replication_factor: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosTopic.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0da7893a0c9ea932440c1934781c44ccf94d816338699467d3a98ce51add3e14(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AclProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__943293fafbc6c6bea5dfce8cd6ca210aaa8a8a7f66227105605fa0001c979c0d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ecb47d9f41eb1cad35351b09e717a672e4592e36135856319b949ecc4217a86(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33ee7fe995a31347b8773a9bb701332f318083baff5902c8d85d31ae9cd69b68(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__720b20cc96a7af99c364fedf9ac590ec18248904ae0bdb648ca325eb0574b3be(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ConsumerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c3b7576e727457d7fe765d51cb505af73c04ad514c67895f883199ab02510ef(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e4276b9cefc72899d1896c7e4726e020a5c92df1e3d269fa1393d3950b71a46(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36632df85eed0ea5c43ecbb866d6fc649c5c69bed7062baa042e1d29ed50972d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
