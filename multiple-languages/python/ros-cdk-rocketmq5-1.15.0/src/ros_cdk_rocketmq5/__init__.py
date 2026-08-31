'''
## Aliyun ROS ROCKETMQ5 Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ROCKETMQ5 from '@alicloud/ros-cdk-rocketmq5';
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
    jsii_type="@alicloud/ros-cdk-rocketmq5.AccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "password": "password",
        "username": "username",
        "account_status": "accountStatus",
    },
)
class AccountProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Account``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-account

        :param instance_id: Property instanceId: The unifed ID of the instance.
        :param password: Property password: Account password Length Limit: 3~64 characters.
        :param username: Property username: Account Name Length Limit: 3~64 characters Character limit: Supports letters a ~ z or A ~ Z, numbers 0~9, underscore (_) and dash (-).
        :param account_status: Property accountStatus: Account Status DISABLE: DISABLE. ENABLE: Enabled.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea5ed3504c51c348fcc2148818396dfe7008098b7e30af5dd0288e678f62b836)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument account_status", value=account_status, expected_type=type_hints["account_status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "password": password,
            "username": username,
        }
        if account_status is not None:
            self._values["account_status"] = account_status

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The unifed ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property password: Account password Length Limit: 3~64 characters.'''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property username: Account Name Length Limit: 3~64 characters Character limit: Supports letters a ~ z or A ~ Z, numbers 0~9, underscore (_) and dash (-).'''
        result = self._values.get("username")
        assert result is not None, "Required property 'username' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountStatus: Account Status DISABLE: DISABLE.

        ENABLE: Enabled.
        '''
        result = self._values.get("account_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq5.AclProps",
    jsii_struct_bases=[],
    name_mapping={
        "actions": "actions",
        "decision": "decision",
        "instance_id": "instanceId",
        "resource_name": "resourceName",
        "resource_type": "resourceType",
        "username": "username",
        "ip_whitelists": "ipWhitelists",
    },
)
class AclProps:
    def __init__(
        self,
        *,
        actions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        decision: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ip_whitelists: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``Acl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl

        :param actions: Property actions: The type of operation authorized.
        :param decision: Property decision: The decision result of the authorization. Valid values: - Deny: Access is denied. - Allow: Allow access.
        :param instance_id: Property instanceId: The ID of the RocketMQ instance.
        :param resource_name: Property resourceName: The name of the resource on which you want to grant permissions.
        :param resource_type: Property resourceType: The type of the resource on which you want to grant permissions. Valid values: - Group: consumer Group. - Topic: Topic.
        :param username: Property username: The username of the account.
        :param ip_whitelists: Property ipWhitelists: The IP addresses in the whitelist.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bdb0d3a8739240d26fcf251c2df6a82343fd8fb328c0f81171e6b3281f099a76)
            check_type(argname="argument actions", value=actions, expected_type=type_hints["actions"])
            check_type(argname="argument decision", value=decision, expected_type=type_hints["decision"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument resource_name", value=resource_name, expected_type=type_hints["resource_name"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument ip_whitelists", value=ip_whitelists, expected_type=type_hints["ip_whitelists"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "actions": actions,
            "decision": decision,
            "instance_id": instance_id,
            "resource_name": resource_name,
            "resource_type": resource_type,
            "username": username,
        }
        if ip_whitelists is not None:
            self._values["ip_whitelists"] = ip_whitelists

    @builtins.property
    def actions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property actions: The type of operation authorized.'''
        result = self._values.get("actions")
        assert result is not None, "Required property 'actions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def decision(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property decision: The decision result of the authorization.

        Valid values:

        - Deny: Access is denied.
        - Allow: Allow access.
        '''
        result = self._values.get("decision")
        assert result is not None, "Required property 'decision' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the RocketMQ instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property resourceName: The name of the resource on which you want to grant permissions.'''
        result = self._values.get("resource_name")
        assert result is not None, "Required property 'resource_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property resourceType: The type of the resource on which you want to grant permissions.

        Valid values:

        - Group: consumer Group.
        - Topic: Topic.
        '''
        result = self._values.get("resource_type")
        assert result is not None, "Required property 'resource_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property username: The username of the account.'''
        result = self._values.get("username")
        assert result is not None, "Required property 'username' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ip_whitelists(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property ipWhitelists: The IP addresses in the whitelist.'''
        result = self._values.get("ip_whitelists")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq5.ConsumerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "consume_retry_policy": "consumeRetryPolicy",
        "consumer_group_id": "consumerGroupId",
        "delivery_order_type": "deliveryOrderType",
        "instance_id": "instanceId",
        "remark": "remark",
    },
)
class ConsumerGroupProps:
    def __init__(
        self,
        *,
        consume_retry_policy: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosConsumerGroup.ConsumeRetryPolicyProperty", typing.Dict[builtins.str, typing.Any]]],
        consumer_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delivery_order_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ConsumerGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup

        :param consume_retry_policy: Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created.
        :param consumer_group_id: Property consumerGroupId: The ID of the consumer group to be created. Used to identify consumer groups, globally unique. The value description is as follows: Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%). Length limit: 1-60 characters.
        :param delivery_order_type: Property deliveryOrderType: Delivery sequence of the consumer group to be created.
        :param instance_id: Property instanceId: The ID of the instance.
        :param remark: Property remark: The remark of the consumer group to be created.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b39f7b9a096e182abc2b2a1f91f78c475b657401245f1d31a13321ad3b9880e)
            check_type(argname="argument consume_retry_policy", value=consume_retry_policy, expected_type=type_hints["consume_retry_policy"])
            check_type(argname="argument consumer_group_id", value=consumer_group_id, expected_type=type_hints["consumer_group_id"])
            check_type(argname="argument delivery_order_type", value=delivery_order_type, expected_type=type_hints["delivery_order_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "consume_retry_policy": consume_retry_policy,
            "consumer_group_id": consumer_group_id,
            "delivery_order_type": delivery_order_type,
            "instance_id": instance_id,
        }
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def consume_retry_policy(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConsumerGroup.ConsumeRetryPolicyProperty"]:
        '''Property consumeRetryPolicy: The consumption retry policy of the consumer group to be created.'''
        result = self._values.get("consume_retry_policy")
        assert result is not None, "Required property 'consume_retry_policy' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConsumerGroup.ConsumeRetryPolicyProperty"], result)

    @builtins.property
    def consumer_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property consumerGroupId: The ID of the consumer group to be created.

        Used to identify consumer groups, globally unique.
        The value description is as follows:
        Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
        Length limit: 1-60 characters.
        '''
        result = self._values.get("consumer_group_id")
        assert result is not None, "Required property 'consumer_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delivery_order_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property deliveryOrderType: Delivery sequence of the consumer group to be created.'''
        result = self._values.get("delivery_order_type")
        assert result is not None, "Required property 'delivery_order_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remark: The remark of the consumer group to be created.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ConsumerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-rocketmq5.IAccount")
class IAccount(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Account``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccountStatus")
    def attr_account_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountStatus: Account Status.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPassword")
    def attr_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Password: Account password.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: Account Name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountProps:
        ...


class _IAccountProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Account``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-rocketmq5.IAccount"

    @builtins.property
    @jsii.member(jsii_name="attrAccountStatus")
    def attr_account_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountStatus: Account Status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrPassword")
    def attr_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Password: Account password.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPassword"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: Account Name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUsername"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountProps:
        return typing.cast(AccountProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAccount).__jsii_proxy_class__ = lambda : _IAccountProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-rocketmq5.IAcl")
class IAcl(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Acl``.'''

    @builtins.property
    @jsii.member(jsii_name="attrActions")
    def attr_actions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Actions: The type of operation authorized.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDecision")
    def attr_decision(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Decision: The decision result of the authorization.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the RocketMQ instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIpWhitelists")
    def attr_ip_whitelists(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IpWhitelists: The IP addresses in the whitelist.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceName")
    def attr_resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceName: The name of the resource on which you want to grant permissions.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceType: The type of the resource on which you want to grant permissions.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: The username of the account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AclProps:
        ...


class _IAclProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Acl``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-rocketmq5.IAcl"

    @builtins.property
    @jsii.member(jsii_name="attrActions")
    def attr_actions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Actions: The type of operation authorized.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrActions"))

    @builtins.property
    @jsii.member(jsii_name="attrDecision")
    def attr_decision(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Decision: The decision result of the authorization.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDecision"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the RocketMQ instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrIpWhitelists")
    def attr_ip_whitelists(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IpWhitelists: The IP addresses in the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIpWhitelists"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceName")
    def attr_resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceName: The name of the resource on which you want to grant permissions.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceType: The type of the resource on which you want to grant permissions.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: The username of the account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUsername"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AclProps:
        return typing.cast(AclProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAcl).__jsii_proxy_class__ = lambda : _IAclProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-rocketmq5.IConsumerGroup")
class IConsumerGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ConsumerGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroupId")
    def attr_consumer_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConsumerGroupId: The ID of the consumer group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryOrderType")
    def attr_delivery_order_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryOrderType: Delivery sequence of consumer group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConsumerGroupProps:
        ...


class _IConsumerGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ConsumerGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-rocketmq5.IConsumerGroup"

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroupId")
    def attr_consumer_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConsumerGroupId: The ID of the consumer group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConsumerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryOrderType")
    def attr_delivery_order_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryOrderType: Delivery sequence of consumer group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryOrderType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConsumerGroupProps:
        return typing.cast(ConsumerGroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IConsumerGroup).__jsii_proxy_class__ = lambda : _IConsumerGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-rocketmq5.IInstance")
class IInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Instance ID created.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceName: Instance name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetEndpoint: Internet endpoint.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcEndpoint")
    def attr_vpc_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcEndpoint: VPC endpoint.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        ...


class _IInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-rocketmq5.IInstance"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Instance ID created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceName: Instance name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetEndpoint: Internet endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcEndpoint")
    def attr_vpc_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcEndpoint: VPC endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstance).__jsii_proxy_class__ = lambda : _IInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-rocketmq5.ITopic")
class ITopic(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Topic``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMessageType")
    def attr_message_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MessageType: The type of the message.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TopicName: The name of the topic.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TopicProps":
        ...


class _ITopicProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Topic``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-rocketmq5.ITopic"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrMessageType")
    def attr_message_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MessageType: The type of the message.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMessageType"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TopicName: The name of the topic.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTopicName"))

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
    jsii_type="@alicloud/ros-cdk-rocketmq5.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ROCKETMQ5::Instance``The , which resource type creates an ApsaraMQ for RocketMQ 5.0 instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__1e988426fb5f136340ea35db7eee902edfa925979e432eca816b191213af8206)
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
        '''Attribute InstanceId: Instance ID created.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceName: Instance name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InternetEndpoint: Internet endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInternetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcEndpoint")
    def attr_vpc_endpoint(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcEndpoint: VPC endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcEndpoint"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__85afef30acb75845a872b9e1d2d7e00047c89b02d7767a17dfe6548a33167cf1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__122ea269877cc312f90e4fc48ad8fcda7f6c0081c7987526e05f93f605b15de2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1af2bc234bb3410a56e2f092c3dcc1af900cd2239694f5223820992b6d1468de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq5.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "internet_info": "internetInfo",
        "product_info": "productInfo",
        "series_code": "seriesCode",
        "sub_series_code": "subSeriesCode",
        "vpc_info": "vpcInfo",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "instance_name": "instanceName",
        "payment_type": "paymentType",
        "period": "period",
        "period_unit": "periodUnit",
        "remark": "remark",
        "resource_group_id": "resourceGroupId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        internet_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.InternetInfoProperty", typing.Dict[builtins.str, typing.Any]]],
        product_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.ProductInfoProperty", typing.Dict[builtins.str, typing.Any]]],
        series_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sub_series_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.VpcInfoProperty", typing.Dict[builtins.str, typing.Any]]],
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-instance

        :param internet_info: Property internetInfo: Public network configuration information.
        :param product_info: Property productInfo: Instance specification information.
        :param series_code: Property seriesCode: The primary series code of the instance.
        :param sub_series_code: Property subSeriesCode: The sub series code of the instance.
        :param vpc_info: Property vpcInfo: Private network configuration information.
        :param auto_renew: Property autoRenew: Whether to auto-renew. This parameter takes effect only when the PaymentType=Subscription.
        :param auto_renew_period: Property autoRenewPeriod: Automatic renewal period. This parameter is valid only when automatic renewal is enabled. Unit: Month.
        :param instance_name: Property instanceName: The name of the instance to be created.
        :param payment_type: Property paymentType: The sub series code of the instance.
        :param period: Property period: The subscription duration. Valid values: When Period is Month, it could be from 1 to 6, 12, 24, 36. When Period is Year, it could be from 1 to 3.
        :param period_unit: Property periodUnit: The period unit for the duration of the instance.
        :param remark: Property remark: The remark of instance.
        :param resource_group_id: Property resourceGroupId: Resource group ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9cf81912aea6f80405b935026ca275ea116cd29618d9b0aefda263ca63ba6ba1)
            check_type(argname="argument internet_info", value=internet_info, expected_type=type_hints["internet_info"])
            check_type(argname="argument product_info", value=product_info, expected_type=type_hints["product_info"])
            check_type(argname="argument series_code", value=series_code, expected_type=type_hints["series_code"])
            check_type(argname="argument sub_series_code", value=sub_series_code, expected_type=type_hints["sub_series_code"])
            check_type(argname="argument vpc_info", value=vpc_info, expected_type=type_hints["vpc_info"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "internet_info": internet_info,
            "product_info": product_info,
            "series_code": series_code,
            "sub_series_code": sub_series_code,
            "vpc_info": vpc_info,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if remark is not None:
            self._values["remark"] = remark
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def internet_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.InternetInfoProperty"]:
        '''Property internetInfo: Public network configuration information.'''
        result = self._values.get("internet_info")
        assert result is not None, "Required property 'internet_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.InternetInfoProperty"], result)

    @builtins.property
    def product_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ProductInfoProperty"]:
        '''Property productInfo: Instance specification information.'''
        result = self._values.get("product_info")
        assert result is not None, "Required property 'product_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ProductInfoProperty"], result)

    @builtins.property
    def series_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property seriesCode: The primary series code of the instance.'''
        result = self._values.get("series_code")
        assert result is not None, "Required property 'series_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sub_series_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property subSeriesCode: The sub series code of the instance.'''
        result = self._values.get("sub_series_code")
        assert result is not None, "Required property 'sub_series_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.VpcInfoProperty"]:
        '''Property vpcInfo: Private network configuration information.'''
        result = self._values.get("vpc_info")
        assert result is not None, "Required property 'vpc_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.VpcInfoProperty"], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether to auto-renew.

        This parameter takes effect only when the PaymentType=Subscription.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: Automatic renewal period.

        This parameter is valid only when automatic renewal is enabled. Unit: Month.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceName: The name of the instance to be created.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentType: The sub series code of the instance.'''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription duration.

        Valid values:
        When Period is Month, it could be from 1 to 6, 12, 24, 36.
        When Period is Year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The period unit for the duration of the instance.'''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remark: The remark of instance.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group ID.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq5.RosAccount",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ROCKETMQ5::Account``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Account`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-account
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__002effde76d94d746dffcc7e3f7054314dbffcceedb0d5c522a49fc189c7d0fe)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cbacb7237347c70aed9bab56bbb0982bc3f0176888951c41daefa2e8c2a202c1)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountStatus")
    def attr_account_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountStatus: Account Status.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrPassword")
    def attr_password(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Password: Account password.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPassword"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Username: Account Name.
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
            type_hints = typing.get_type_hints(_typecheckingstub__1aa09732e87468c7c1d7cdcf22080548fadde30386b4b3305344edf821d59131)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The unifed ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea6431d9a55c9b69d2415de5e3734ea61db14352e5ebdb64c2ab630a03d50a9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        password: Account password
        Length Limit: 3~64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__773b797ed371fdb4f9cc0d6abcc76c953599fa0069c91a2db10f26820cd3e197)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="username")
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        username: Account Name
        Length Limit: 3~64 characters
        Character limit: Supports letters a ~ z or A ~ Z, numbers 0~9, underscore (_) and dash (-).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "username"))

    @username.setter
    def username(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9d94e2dec0aa1da8bfb376cfb7951b9800dff44897cc51a064b255d83549fbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "username", value)

    @builtins.property
    @jsii.member(jsii_name="accountStatus")
    def account_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountStatus: Account Status
        DISABLE: DISABLE.
        ENABLE: Enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountStatus"))

    @account_status.setter
    def account_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63123411abebe29a6627a95a7d12d8c18e5954ba334b58a34925f1bee1a79b76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountStatus", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq5.RosAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "password": "password",
        "username": "username",
        "account_status": "accountStatus",
    },
)
class RosAccountProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAccount``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-account

        :param instance_id: 
        :param password: 
        :param username: 
        :param account_status: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0d2162c2711afbaa0d36f6ee01b6a17b0edbbfdf66b53f31e3986957792fc13)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument account_status", value=account_status, expected_type=type_hints["account_status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "password": password,
            "username": username,
        }
        if account_status is not None:
            self._values["account_status"] = account_status

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The unifed ID of the instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        password: Account password
        Length Limit: 3~64 characters.
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        username: Account Name
        Length Limit: 3~64 characters
        Character limit: Supports letters a ~ z or A ~ Z, numbers 0~9, underscore (_) and dash (-).
        '''
        result = self._values.get("username")
        assert result is not None, "Required property 'username' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accountStatus: Account Status
        DISABLE: DISABLE.
        ENABLE: Enabled.
        '''
        result = self._values.get("account_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAcl(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq5.RosAcl",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ROCKETMQ5::Acl``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Acl`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl
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
            type_hints = typing.get_type_hints(_typecheckingstub__15118a084cc8fafcc64abbbb5c8bb0a2018b8309dd5974c897b161b1e9998aff)
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
            type_hints = typing.get_type_hints(_typecheckingstub__28769eca3989eda42614553aa7267bad8bec08bfb132b50f4910b7fed5120343)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrActions")
    def attr_actions(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Actions: The type of operation authorized.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrActions"))

    @builtins.property
    @jsii.member(jsii_name="attrDecision")
    def attr_decision(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Decision: The decision result of the authorization.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDecision"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the RocketMQ instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrIpWhitelists")
    def attr_ip_whitelists(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpWhitelists: The IP addresses in the whitelist.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpWhitelists"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceName")
    def attr_resource_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceName: The name of the resource on which you want to grant permissions.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceType: The type of the resource on which you want to grant permissions.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Username: The username of the account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUsername"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="actions")
    def actions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: actions: The type of operation authorized.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "actions"))

    @actions.setter
    def actions(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae655660af737f15775ce42f08da3fd107174d80a34a00b064b3294ed11e0b73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "actions", value)

    @builtins.property
    @jsii.member(jsii_name="decision")
    def decision(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        decision: The decision result of the authorization. Valid values:

        - Deny: Access is denied.
        - Allow: Allow access.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "decision"))

    @decision.setter
    def decision(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93bc63988f0612626adf895a35ecfda659d12de4173c4634b9d626b675eb0baf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "decision", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70266096a00900f0b39be303c0f31da6eaa8c0aff4ce00c6ef50931ab6a7e0ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the RocketMQ instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79d67445ce67f41be1a34245d0707bfba748c54d63afbca46427beb36ef9b60a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceName")
    def resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: resourceName: The name of the resource on which you want to grant permissions.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "resourceName"))

    @resource_name.setter
    def resource_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25daee5847558face65a4a6f31ac64cbfc81fdf35b750335dd5eb1c696567e5b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceName", value)

    @builtins.property
    @jsii.member(jsii_name="resourceType")
    def resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        resourceType: The type of the resource on which you want to grant permissions. Valid values:

        - Group: consumer Group.
        - Topic: Topic.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "resourceType"))

    @resource_type.setter
    def resource_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d16c642e50b5676596a6aa08ebbc5890ea4635abbe712e5e7aa96a77ad58b10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceType", value)

    @builtins.property
    @jsii.member(jsii_name="username")
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: username: The username of the account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "username"))

    @username.setter
    def username(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c62a80f755247dc942577ea6258d30ec34556af820ce0762d923e4a6536928b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "username", value)

    @builtins.property
    @jsii.member(jsii_name="ipWhitelists")
    def ip_whitelists(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: ipWhitelists: The IP addresses in the whitelist.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "ipWhitelists"))

    @ip_whitelists.setter
    def ip_whitelists(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__719013bc9a6bba066b73a67c660b2b9967e57e96b0b03b26c8b72b5178b2ee78)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipWhitelists", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq5.RosAclProps",
    jsii_struct_bases=[],
    name_mapping={
        "actions": "actions",
        "decision": "decision",
        "instance_id": "instanceId",
        "resource_name": "resourceName",
        "resource_type": "resourceType",
        "username": "username",
        "ip_whitelists": "ipWhitelists",
    },
)
class RosAclProps:
    def __init__(
        self,
        *,
        actions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        decision: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ip_whitelists: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosAcl``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl

        :param actions: 
        :param decision: 
        :param instance_id: 
        :param resource_name: 
        :param resource_type: 
        :param username: 
        :param ip_whitelists: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83a2dbe987f854bcf7fa676ee471a1e981d47a6fd433e414f4bfa814c6a41f4c)
            check_type(argname="argument actions", value=actions, expected_type=type_hints["actions"])
            check_type(argname="argument decision", value=decision, expected_type=type_hints["decision"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument resource_name", value=resource_name, expected_type=type_hints["resource_name"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            check_type(argname="argument ip_whitelists", value=ip_whitelists, expected_type=type_hints["ip_whitelists"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "actions": actions,
            "decision": decision,
            "instance_id": instance_id,
            "resource_name": resource_name,
            "resource_type": resource_type,
            "username": username,
        }
        if ip_whitelists is not None:
            self._values["ip_whitelists"] = ip_whitelists

    @builtins.property
    def actions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: actions: The type of operation authorized.
        '''
        result = self._values.get("actions")
        assert result is not None, "Required property 'actions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def decision(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        decision: The decision result of the authorization. Valid values:

        - Deny: Access is denied.
        - Allow: Allow access.
        '''
        result = self._values.get("decision")
        assert result is not None, "Required property 'decision' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the RocketMQ instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: resourceName: The name of the resource on which you want to grant permissions.
        '''
        result = self._values.get("resource_name")
        assert result is not None, "Required property 'resource_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        resourceType: The type of the resource on which you want to grant permissions. Valid values:

        - Group: consumer Group.
        - Topic: Topic.
        '''
        result = self._values.get("resource_type")
        assert result is not None, "Required property 'resource_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: username: The username of the account.
        '''
        result = self._values.get("username")
        assert result is not None, "Required property 'username' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ip_whitelists(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: ipWhitelists: The IP addresses in the whitelist.
        '''
        result = self._values.get("ip_whitelists")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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
    jsii_type="@alicloud/ros-cdk-rocketmq5.RosConsumerGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ROCKETMQ5::ConsumerGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ConsumerGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup
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
            type_hints = typing.get_type_hints(_typecheckingstub__fafc06e3242f49175f592a7787ebbe1b3cc5883d4a77491462dfbafd4277ecd4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2519f82991e1a61258c3dd89c333914713b44ad14a6ff0dd6d7634c478171d66)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroupId")
    def attr_consumer_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConsumerGroupId: The ID of the consumer group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsumerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryOrderType")
    def attr_delivery_order_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeliveryOrderType: Delivery sequence of consumer group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeliveryOrderType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="consumeRetryPolicy")
    def consume_retry_policy(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConsumerGroup.ConsumeRetryPolicyProperty"]:
        '''
        :Property: consumeRetryPolicy: The consumption retry policy of the consumer group to be created.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConsumerGroup.ConsumeRetryPolicyProperty"], jsii.get(self, "consumeRetryPolicy"))

    @consume_retry_policy.setter
    def consume_retry_policy(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConsumerGroup.ConsumeRetryPolicyProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bd7522c2dd0b882487c4a186d8f953015a050351a88627c97eea4da6478064a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "consumeRetryPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="consumerGroupId")
    def consumer_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        consumerGroupId: The ID of the consumer group to be created. Used to identify consumer groups, globally unique.
        The value description is as follows:
        Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
        Length limit: 1-60 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "consumerGroupId"))

    @consumer_group_id.setter
    def consumer_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f91a59c3d844678e3cf39f0d33e159a80a822457acd7b589e8fa2a892fbf41a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "consumerGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="deliveryOrderType")
    def delivery_order_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: deliveryOrderType: Delivery sequence of the consumer group to be created.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "deliveryOrderType"))

    @delivery_order_type.setter
    def delivery_order_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69b0d22d9e85e6421ad2e26a1ddd7548939db2390513aa7dc507b27a65baf8c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deliveryOrderType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e8b7949c3646637f85eae848a5ac87d25943035fc53c77a6a85ef24bc9bf5c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ed4046169ed7a3f820219f0b08231a7517edd627724023bc9414d6a48981b6a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of the consumer group to be created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9604082d0fcb123bca2006c15ff3e0e74472b61c2f1c899a11ca043adcf7db75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rocketmq5.RosConsumerGroup.ConsumeRetryPolicyProperty",
        jsii_struct_bases=[],
        name_mapping={
            "retry_policy": "retryPolicy",
            "dead_letter_target_topic": "deadLetterTargetTopic",
            "max_retry_times": "maxRetryTimes",
        },
    )
    class ConsumeRetryPolicyProperty:
        def __init__(
            self,
            *,
            retry_policy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            dead_letter_target_topic: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            max_retry_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param retry_policy: 
            :param dead_letter_target_topic: 
            :param max_retry_times: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__efb7384590012ff8491bb0ef0b1d7af238a8fb13a545b23681dc112f9549673c)
                check_type(argname="argument retry_policy", value=retry_policy, expected_type=type_hints["retry_policy"])
                check_type(argname="argument dead_letter_target_topic", value=dead_letter_target_topic, expected_type=type_hints["dead_letter_target_topic"])
                check_type(argname="argument max_retry_times", value=max_retry_times, expected_type=type_hints["max_retry_times"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "retry_policy": retry_policy,
            }
            if dead_letter_target_topic is not None:
                self._values["dead_letter_target_topic"] = dead_letter_target_topic
            if max_retry_times is not None:
                self._values["max_retry_times"] = max_retry_times

        @builtins.property
        def retry_policy(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: retryPolicy: Retry policy type.
            '''
            result = self._values.get("retry_policy")
            assert result is not None, "Required property 'retry_policy' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def dead_letter_target_topic(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: deadLetterTargetTopic: The dead letter topic of the consumer group.
            '''
            result = self._values.get("dead_letter_target_topic")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def max_retry_times(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: maxRetryTimes: Maximum number of retries.
            '''
            result = self._values.get("max_retry_times")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConsumeRetryPolicyProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq5.RosConsumerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "consume_retry_policy": "consumeRetryPolicy",
        "consumer_group_id": "consumerGroupId",
        "delivery_order_type": "deliveryOrderType",
        "instance_id": "instanceId",
        "remark": "remark",
    },
)
class RosConsumerGroupProps:
    def __init__(
        self,
        *,
        consume_retry_policy: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConsumerGroup.ConsumeRetryPolicyProperty, typing.Dict[builtins.str, typing.Any]]],
        consumer_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delivery_order_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosConsumerGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup

        :param consume_retry_policy: 
        :param consumer_group_id: 
        :param delivery_order_type: 
        :param instance_id: 
        :param remark: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc2d07edfbec13f876c79418b7a417f9fdbba4bf32cd0eaaf92dbd259055d4ae)
            check_type(argname="argument consume_retry_policy", value=consume_retry_policy, expected_type=type_hints["consume_retry_policy"])
            check_type(argname="argument consumer_group_id", value=consumer_group_id, expected_type=type_hints["consumer_group_id"])
            check_type(argname="argument delivery_order_type", value=delivery_order_type, expected_type=type_hints["delivery_order_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "consume_retry_policy": consume_retry_policy,
            "consumer_group_id": consumer_group_id,
            "delivery_order_type": delivery_order_type,
            "instance_id": instance_id,
        }
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def consume_retry_policy(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosConsumerGroup.ConsumeRetryPolicyProperty]:
        '''
        :Property: consumeRetryPolicy: The consumption retry policy of the consumer group to be created.
        '''
        result = self._values.get("consume_retry_policy")
        assert result is not None, "Required property 'consume_retry_policy' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosConsumerGroup.ConsumeRetryPolicyProperty], result)

    @builtins.property
    def consumer_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        consumerGroupId: The ID of the consumer group to be created. Used to identify consumer groups, globally unique.
        The value description is as follows:
        Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
        Length limit: 1-60 characters.
        '''
        result = self._values.get("consumer_group_id")
        assert result is not None, "Required property 'consumer_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delivery_order_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: deliveryOrderType: Delivery sequence of the consumer group to be created.
        '''
        result = self._values.get("delivery_order_type")
        assert result is not None, "Required property 'delivery_order_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of the consumer group to be created.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    jsii_type="@alicloud/ros-cdk-rocketmq5.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ROCKETMQ5::Instance``The , which resource type creates an ApsaraMQ for RocketMQ 5.0 instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__6c886981a437f998e6d0d5684c0ca22e90c1ef74a878c10daacaf26be43a38b1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2fbaf41ff6739d9ace0733507c980e55977f4008d1e10ccbee0681db8bfd78c0)
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
        :Attribute: InstanceId: Instance ID created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceName: Instance name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetEndpoint")
    def attr_internet_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetEndpoint: Internet endpoint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcEndpoint")
    def attr_vpc_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcEndpoint: VPC endpoint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcEndpoint"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2d9e5bf57c2b4ff888175c59d57e75f0b266c6feda261ea503e6c912f1f0089b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="internetInfo")
    def internet_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.InternetInfoProperty"]:
        '''
        :Property: internetInfo: Public network configuration information.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.InternetInfoProperty"], jsii.get(self, "internetInfo"))

    @internet_info.setter
    def internet_info(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.InternetInfoProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee49a27506efea1d859c1f23c474e2c24228d8651d69c89284ff33694086cfc7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetInfo", value)

    @builtins.property
    @jsii.member(jsii_name="productInfo")
    def product_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ProductInfoProperty"]:
        '''
        :Property: productInfo: Instance specification information.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ProductInfoProperty"], jsii.get(self, "productInfo"))

    @product_info.setter
    def product_info(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ProductInfoProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a1ee66b2a7aebb81b5b7ca9c1c478b4b84bf472715019c1dee9bcc79a4046a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productInfo", value)

    @builtins.property
    @jsii.member(jsii_name="seriesCode")
    def series_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: seriesCode: The primary series code of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "seriesCode"))

    @series_code.setter
    def series_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2bb02d7b7095fe0ac0e58e19cf306c986374dea658692552bb4dfb88ddf3e58)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "seriesCode", value)

    @builtins.property
    @jsii.member(jsii_name="subSeriesCode")
    def sub_series_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: subSeriesCode: The sub series code of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "subSeriesCode"))

    @sub_series_code.setter
    def sub_series_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68192429f4b9aa642c450fad388f0a2e41263c087dbce2113cc96274d02be93a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "subSeriesCode", value)

    @builtins.property
    @jsii.member(jsii_name="vpcInfo")
    def vpc_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.VpcInfoProperty"]:
        '''
        :Property: vpcInfo: Private network configuration information.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.VpcInfoProperty"], jsii.get(self, "vpcInfo"))

    @vpc_info.setter
    def vpc_info(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.VpcInfoProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e71822e769da0548d28b6c2da20fb80eb7e4ac01e0a3061c809508bcfa888ff2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcInfo", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to auto-renew. This parameter takes effect only when the PaymentType=Subscription.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd8bed65a9ef96ce27828d2a283d8ee44ee7582c1b184fdef9ec1c226c118e22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: Automatic renewal period. This parameter is valid only when automatic renewal is enabled. Unit: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d926bccade181a8b3b468d1201485f5f0e19fedf7253965cdb20637a7444065c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The name of the instance to be created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c9d80bcf2b15e915fa224a77a5b811a5d037450207002734dc7bd1bd69833e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: The sub series code of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb73b23cfe64a5efdaa7ed86f85212db9d943b244775671555a7e49ccf17b32f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When Period is Month, it could be from 1 to 6, 12, 24, 36.
        When Period is Year, it could be from 1 to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b6969d6fd45a733713afe131d7e7f33ccf14fcc37770d5ea60c38d33a948774)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: The period unit for the duration of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28ebfc28fddd1c7446456a60698d49f129b74c7a6291c89cbfab8572c6b499fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71ca1fa6c17a083d6214cdebf2ff27f1f4d9fd349f322b105507747ab161da0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0bc9bdcf24abb51b6ed8bfd75986b32dbbedb7f5b528c266f333b91e075f6bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rocketmq5.RosInstance.InternetInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "internet_spec": "internetSpec",
            "flow_out_bandwidth": "flowOutBandwidth",
            "flow_out_type": "flowOutType",
            "ip_whitelist": "ipWhitelist",
        },
    )
    class InternetInfoProperty:
        def __init__(
            self,
            *,
            internet_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            flow_out_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            flow_out_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip_whitelist: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param internet_spec: 
            :param flow_out_bandwidth: 
            :param flow_out_type: 
            :param ip_whitelist: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d0b39b92ac46b13fc4241cd2fda6a219c936c40994ad6bfc817e8b219cc5edf2)
                check_type(argname="argument internet_spec", value=internet_spec, expected_type=type_hints["internet_spec"])
                check_type(argname="argument flow_out_bandwidth", value=flow_out_bandwidth, expected_type=type_hints["flow_out_bandwidth"])
                check_type(argname="argument flow_out_type", value=flow_out_type, expected_type=type_hints["flow_out_type"])
                check_type(argname="argument ip_whitelist", value=ip_whitelist, expected_type=type_hints["ip_whitelist"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "internet_spec": internet_spec,
            }
            if flow_out_bandwidth is not None:
                self._values["flow_out_bandwidth"] = flow_out_bandwidth
            if flow_out_type is not None:
                self._values["flow_out_type"] = flow_out_type
            if ip_whitelist is not None:
                self._values["ip_whitelist"] = ip_whitelist

        @builtins.property
        def internet_spec(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: internetSpec: Whether to enable public network access.
            '''
            result = self._values.get("internet_spec")
            assert result is not None, "Required property 'internet_spec' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def flow_out_bandwidth(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            flowOutBandwidth: Public network bandwidth specification. Unit: Mb/s.
            It needs to be filled in only when the billing type of the public network is billed by fixed bandwidth.
            '''
            result = self._values.get("flow_out_bandwidth")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def flow_out_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: flowOutType: The billing method of Internet usage. Valid values: payByBandwidth: pay-by-bandwidth. If Internet access is enabled for an instance, specify this value for the parameter. payByTraffic: pay-by-traffic. If Internet access is enabled for an instance, specify this value for the parameter. uninvolved: No billing method is involved. If Internet access is disabled for an instance, specify this value for the parameter.
            '''
            result = self._values.get("flow_out_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip_whitelist(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: ipWhitelist: Public network access whitelist address segment.
            '''
            result = self._values.get("ip_whitelist")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InternetInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rocketmq5.RosInstance.ProductInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "msg_process_spec": "msgProcessSpec",
            "auto_scaling": "autoScaling",
            "capacity_type": "capacityType",
            "message_retention_time": "messageRetentionTime",
            "provisioned_capacity": "provisionedCapacity",
            "send_receive_ratio": "sendReceiveRatio",
        },
    )
    class ProductInfoProperty:
        def __init__(
            self,
            *,
            msg_process_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            auto_scaling: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            capacity_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            message_retention_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            provisioned_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            send_receive_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param msg_process_spec: 
            :param auto_scaling: 
            :param capacity_type: 
            :param message_retention_time: 
            :param provisioned_capacity: 
            :param send_receive_ratio: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6ac3320ec75003444c8525c06a68e7d27369457c265cb1962c4ca624d793ff20)
                check_type(argname="argument msg_process_spec", value=msg_process_spec, expected_type=type_hints["msg_process_spec"])
                check_type(argname="argument auto_scaling", value=auto_scaling, expected_type=type_hints["auto_scaling"])
                check_type(argname="argument capacity_type", value=capacity_type, expected_type=type_hints["capacity_type"])
                check_type(argname="argument message_retention_time", value=message_retention_time, expected_type=type_hints["message_retention_time"])
                check_type(argname="argument provisioned_capacity", value=provisioned_capacity, expected_type=type_hints["provisioned_capacity"])
                check_type(argname="argument send_receive_ratio", value=send_receive_ratio, expected_type=type_hints["send_receive_ratio"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "msg_process_spec": msg_process_spec,
            }
            if auto_scaling is not None:
                self._values["auto_scaling"] = auto_scaling
            if capacity_type is not None:
                self._values["capacity_type"] = capacity_type
            if message_retention_time is not None:
                self._values["message_retention_time"] = message_retention_time
            if provisioned_capacity is not None:
                self._values["provisioned_capacity"] = provisioned_capacity
            if send_receive_ratio is not None:
                self._values["send_receive_ratio"] = send_receive_ratio

        @builtins.property
        def msg_process_spec(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: msgProcessSpec: Message processing specification.
            '''
            result = self._values.get("msg_process_spec")
            assert result is not None, "Required property 'msg_process_spec' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def auto_scaling(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            autoScaling: Whether to enable out-of-spec burst resiliency.
            After the elastic burst capability is enabled, the message queue RocketMQ allows the instance to exceed the TPS limited by the basic specification within a certain range, and the part exceeding the basic specification requires additional elastic specification fees.
            '''
            result = self._values.get("auto_scaling")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def capacity_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: capacityType: The type of capacity.
            '''
            result = self._values.get("capacity_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def message_retention_time(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: messageRetentionTime: The message storage time. Unit: Hour.
            '''
            result = self._values.get("message_retention_time")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def provisioned_capacity(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: provisionedCapacity: The provisioned capacity.
            '''
            result = self._values.get("provisioned_capacity")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def send_receive_ratio(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sendReceiveRatio: The ratio of messages sent and received.
            '''
            result = self._values.get("send_receive_ratio")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ProductInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-rocketmq5.RosInstance.VpcInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "vpc_id": "vpcId",
            "security_group_id": "securityGroupId",
            "v_switch_id": "vSwitchId",
            "v_switch_ids": "vSwitchIds",
        },
    )
    class VpcInfoProperty:
        def __init__(
            self,
            *,
            vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param vpc_id: 
            :param security_group_id: 
            :param v_switch_id: 
            :param v_switch_ids: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ab194163ad2d0abb0b5eeb404a371273f2bf2f4fe8d941e9e4c77d928e96021c)
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "vpc_id": vpc_id,
            }
            if security_group_id is not None:
                self._values["security_group_id"] = security_group_id
            if v_switch_id is not None:
                self._values["v_switch_id"] = v_switch_id
            if v_switch_ids is not None:
                self._values["v_switch_ids"] = v_switch_ids

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vpcId: ID of the VPC associated with the instance to be created.
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: securityGroupId: ID of the security group associated with the instance to be created. Required when creating serverless.
            '''
            result = self._values.get("security_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vSwitchId: ID of the vSwitch associated with the instance to be created.
            '''
            result = self._values.get("v_switch_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property:

            vSwitchIds: IDs of the vSwitchs associated with the instance to be created.
            **Note**: Only one is required for VSwitchIds and VSwitchId. When both are filled in, VSwitchIds overwrites VSwitchId.
            '''
            result = self._values.get("v_switch_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VpcInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq5.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "internet_info": "internetInfo",
        "product_info": "productInfo",
        "series_code": "seriesCode",
        "sub_series_code": "subSeriesCode",
        "vpc_info": "vpcInfo",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "instance_name": "instanceName",
        "payment_type": "paymentType",
        "period": "period",
        "period_unit": "periodUnit",
        "remark": "remark",
        "resource_group_id": "resourceGroupId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        internet_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.InternetInfoProperty, typing.Dict[builtins.str, typing.Any]]],
        product_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ProductInfoProperty, typing.Dict[builtins.str, typing.Any]]],
        series_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        sub_series_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.VpcInfoProperty, typing.Dict[builtins.str, typing.Any]]],
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-instance

        :param internet_info: 
        :param product_info: 
        :param series_code: 
        :param sub_series_code: 
        :param vpc_info: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param instance_name: 
        :param payment_type: 
        :param period: 
        :param period_unit: 
        :param remark: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fd32fec669d4d859c4cb0dfdc36c63bb55d4d6b52bfa45105234248621d43dc)
            check_type(argname="argument internet_info", value=internet_info, expected_type=type_hints["internet_info"])
            check_type(argname="argument product_info", value=product_info, expected_type=type_hints["product_info"])
            check_type(argname="argument series_code", value=series_code, expected_type=type_hints["series_code"])
            check_type(argname="argument sub_series_code", value=sub_series_code, expected_type=type_hints["sub_series_code"])
            check_type(argname="argument vpc_info", value=vpc_info, expected_type=type_hints["vpc_info"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "internet_info": internet_info,
            "product_info": product_info,
            "series_code": series_code,
            "sub_series_code": sub_series_code,
            "vpc_info": vpc_info,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if remark is not None:
            self._values["remark"] = remark
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def internet_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.InternetInfoProperty]:
        '''
        :Property: internetInfo: Public network configuration information.
        '''
        result = self._values.get("internet_info")
        assert result is not None, "Required property 'internet_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.InternetInfoProperty], result)

    @builtins.property
    def product_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.ProductInfoProperty]:
        '''
        :Property: productInfo: Instance specification information.
        '''
        result = self._values.get("product_info")
        assert result is not None, "Required property 'product_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.ProductInfoProperty], result)

    @builtins.property
    def series_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: seriesCode: The primary series code of the instance.
        '''
        result = self._values.get("series_code")
        assert result is not None, "Required property 'series_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def sub_series_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: subSeriesCode: The sub series code of the instance.
        '''
        result = self._values.get("sub_series_code")
        assert result is not None, "Required property 'sub_series_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.VpcInfoProperty]:
        '''
        :Property: vpcInfo: Private network configuration information.
        '''
        result = self._values.get("vpc_info")
        assert result is not None, "Required property 'vpc_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.VpcInfoProperty], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to auto-renew. This parameter takes effect only when the PaymentType=Subscription.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: Automatic renewal period. This parameter is valid only when automatic renewal is enabled. Unit: Month.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The name of the instance to be created.
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: The sub series code of the instance.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. Valid values:
        When Period is Month, it could be from 1 to 6, 12, 24, 36.
        When Period is Year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: The period unit for the duration of the instance.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of instance.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group ID.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTopic(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq5.RosTopic",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ROCKETMQ5::Topic``, which is used to create a topic for a Message Queue for Apache RocketMQ V5.0 instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Topic`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic
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
            type_hints = typing.get_type_hints(_typecheckingstub__06716b36c207545460fe43b18d7b8a14e4c047941f535cabe1a456f7c9871b11)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3bfdfee8975f2867932277499fe742dcac14771bacc7496c47219f8c9d8d9eb9)
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
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrMessageType")
    def attr_message_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MessageType: The type of the message.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMessageType"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TopicName: The name of the topic.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7b0be4371111c695af2596e3c9645fea89ba78b6ca5b7548a82c62dd35804baf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80de6cb2da04ba386b35955073197ad2d8bb069451bb6cfaa73170ac06eb6b80)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="messageType")
    def message_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        messageType: The message type of the topic to be created. Valid values:
        NORMAL
        FIFO
        DELAY
        TRANSACTION
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "messageType"))

    @message_type.setter
    def message_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bff250fe5c5201d056ab24ea1ae5b48dc1001aeaa8889361ef781fd717655ba1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "messageType", value)

    @builtins.property
    @jsii.member(jsii_name="topicName")
    def topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        topicName: The name of the topic to be created is used to identify the topic and is globally unique.
        Valid values:
        Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
        Length limit: 1-60 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "topicName"))

    @topic_name.setter
    def topic_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64cb699d4ff9de7f3b48a22662d704708998ec5167d3db454c6ff1f7dc4cd952)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topicName", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of the topic to be created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ffdb83f2bb96ac9bea276cd5f75e8aa9b65f2f35edc2baaa573d24d9b255bc1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq5.RosTopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "message_type": "messageType",
        "topic_name": "topicName",
        "remark": "remark",
    },
)
class RosTopicProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        message_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTopic``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic

        :param instance_id: 
        :param message_type: 
        :param topic_name: 
        :param remark: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d51b5af71a2e9d2b7200ed347d63f7da01b909e702070d91ce33296a5b6f395)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument message_type", value=message_type, expected_type=type_hints["message_type"])
            check_type(argname="argument topic_name", value=topic_name, expected_type=type_hints["topic_name"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "message_type": message_type,
            "topic_name": topic_name,
        }
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def message_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        messageType: The message type of the topic to be created. Valid values:
        NORMAL
        FIFO
        DELAY
        TRANSACTION
        '''
        result = self._values.get("message_type")
        assert result is not None, "Required property 'message_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        topicName: The name of the topic to be created is used to identify the topic and is globally unique.
        Valid values:
        Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
        Length limit: 1-60 characters.
        '''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remark of the topic to be created.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ITopic)
class Topic(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq5.Topic",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ROCKETMQ5::Topic``, which is used to create a topic for a Message Queue for Apache RocketMQ V5.0 instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTopic``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic
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
            type_hints = typing.get_type_hints(_typecheckingstub__bd4fc71cc559e182a389e876e0cc704bdbb9be0f2cdb17d36dd683add4cf5a6e)
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
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrMessageType")
    def attr_message_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MessageType: The type of the message.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMessageType"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicName")
    def attr_topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TopicName: The name of the topic.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTopicName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2b3da382de9e3b81b4fdd277184542db5a35588f33ceba3e2de3a39eb1ae92ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c218aa8b920cda98301ba0724f9bbd57f801594cda60fafaf149674a4916a74f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5387c6b1a3074a6d1b0e4c7eea9851230374e34f78ee06ec8c47c76f4ae9f786)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-rocketmq5.TopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "message_type": "messageType",
        "topic_name": "topicName",
        "remark": "remark",
    },
)
class TopicProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        message_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Topic``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-topic

        :param instance_id: Property instanceId: The ID of the instance.
        :param message_type: Property messageType: The message type of the topic to be created. Valid values: NORMAL FIFO DELAY TRANSACTION
        :param topic_name: Property topicName: The name of the topic to be created is used to identify the topic and is globally unique. Valid values: Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%). Length limit: 1-60 characters.
        :param remark: Property remark: The remark of the topic to be created.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76ecfc37773e714f68c3f3b175e2d011cb6101f3614cc9779fb7cae42e012bb9)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument message_type", value=message_type, expected_type=type_hints["message_type"])
            check_type(argname="argument topic_name", value=topic_name, expected_type=type_hints["topic_name"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "message_type": message_type,
            "topic_name": topic_name,
        }
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def message_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property messageType: The message type of the topic to be created.

        Valid values:
        NORMAL
        FIFO
        DELAY
        TRANSACTION
        '''
        result = self._values.get("message_type")
        assert result is not None, "Required property 'message_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property topicName: The name of the topic to be created is used to identify the topic and is globally unique.

        Valid values:
        Character limitation: supports letters a~z or A-Z, numbers 0-9, underscore (_), dash (-) and percent sign (%).
        Length limit: 1-60 characters.
        '''
        result = self._values.get("topic_name")
        assert result is not None, "Required property 'topic_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remark: The remark of the topic to be created.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAccount)
class Account(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq5.Account",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ROCKETMQ5::Account``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccount``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-account
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7e1729500b6cd3ce30f105993ce8a3e70f828e6fcac8047401e4d64bd16ec2f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountStatus")
    def attr_account_status(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountStatus: Account Status.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountStatus"))

    @builtins.property
    @jsii.member(jsii_name="attrPassword")
    def attr_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Password: Account password.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPassword"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: Account Name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUsername"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountProps:
        return typing.cast(AccountProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c5efa44366451ffc8e29de8407b41ac53df3fbce83bcf8856c6d89fd2df471c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07eab96f3e0d4193d8b51cc3bf15f3aa3a98a394f7940632a2cfbd2422ea690d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79b846e3476b45f20d65d09455acb80a24e5345ef466dc5a2d9b57d8cb55ed68)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IAcl)
class Acl(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq5.Acl",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ROCKETMQ5::Acl``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAcl``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl
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
            type_hints = typing.get_type_hints(_typecheckingstub__8651daadbbf192141df58adc9666eee5340b349ff320fb0540823c3d25520084)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrActions")
    def attr_actions(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Actions: The type of operation authorized.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrActions"))

    @builtins.property
    @jsii.member(jsii_name="attrDecision")
    def attr_decision(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Decision: The decision result of the authorization.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDecision"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the RocketMQ instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrIpWhitelists")
    def attr_ip_whitelists(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IpWhitelists: The IP addresses in the whitelist.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIpWhitelists"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceName")
    def attr_resource_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceName: The name of the resource on which you want to grant permissions.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceType: The type of the resource on which you want to grant permissions.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: The username of the account.'''
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
            type_hints = typing.get_type_hints(_typecheckingstub__4fd493c92f7410f1071028866c264159aff96fdcc10a9e91b510bf9da9f4620a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2301c1473c6e19e5e05b6dd63fd55f31bd66f2129424b4ec998370dafdf001bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aac80dac485f4fb3c75fe6c8e8d3f1ca60b01ccc6bc7e3a93af58c1a7fc2310e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IConsumerGroup)
class ConsumerGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-rocketmq5.ConsumerGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ROCKETMQ5::ConsumerGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosConsumerGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-consumergroup
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
            type_hints = typing.get_type_hints(_typecheckingstub__6ecc09c51acff18256afffe508ad16e6c282d9a7a64cb1f3dcadf08046d05c0e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroupId")
    def attr_consumer_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConsumerGroupId: The ID of the consumer group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConsumerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryOrderType")
    def attr_delivery_order_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryOrderType: Delivery sequence of consumer group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryOrderType"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__dc2d3a600ff4ca671f42bbbce94949747bb7fcb508eb293630bbbe3a53a7a7a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd8883766585ff0634719ebe2d9e754359813f50010ae060ae60b7371e18ea01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f1495eced8b9586096561db795c841dcae713e94cb5bf98e70dd5e8489d3aa1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Account",
    "AccountProps",
    "Acl",
    "AclProps",
    "ConsumerGroup",
    "ConsumerGroupProps",
    "IAccount",
    "IAcl",
    "IConsumerGroup",
    "IInstance",
    "ITopic",
    "Instance",
    "InstanceProps",
    "RosAccount",
    "RosAccountProps",
    "RosAcl",
    "RosAclProps",
    "RosConsumerGroup",
    "RosConsumerGroupProps",
    "RosInstance",
    "RosInstanceProps",
    "RosTopic",
    "RosTopicProps",
    "Topic",
    "TopicProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__ea5ed3504c51c348fcc2148818396dfe7008098b7e30af5dd0288e678f62b836(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdb0d3a8739240d26fcf251c2df6a82343fd8fb328c0f81171e6b3281f099a76(
    *,
    actions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    decision: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ip_whitelists: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b39f7b9a096e182abc2b2a1f91f78c475b657401245f1d31a13321ad3b9880e(
    *,
    consume_retry_policy: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConsumerGroup.ConsumeRetryPolicyProperty, typing.Dict[builtins.str, typing.Any]]],
    consumer_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delivery_order_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e988426fb5f136340ea35db7eee902edfa925979e432eca816b191213af8206(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85afef30acb75845a872b9e1d2d7e00047c89b02d7767a17dfe6548a33167cf1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__122ea269877cc312f90e4fc48ad8fcda7f6c0081c7987526e05f93f605b15de2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1af2bc234bb3410a56e2f092c3dcc1af900cd2239694f5223820992b6d1468de(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9cf81912aea6f80405b935026ca275ea116cd29618d9b0aefda263ca63ba6ba1(
    *,
    internet_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.InternetInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    product_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ProductInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    series_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sub_series_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.VpcInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__002effde76d94d746dffcc7e3f7054314dbffcceedb0d5c522a49fc189c7d0fe(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbacb7237347c70aed9bab56bbb0982bc3f0176888951c41daefa2e8c2a202c1(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1aa09732e87468c7c1d7cdcf22080548fadde30386b4b3305344edf821d59131(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea6431d9a55c9b69d2415de5e3734ea61db14352e5ebdb64c2ab630a03d50a9b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__773b797ed371fdb4f9cc0d6abcc76c953599fa0069c91a2db10f26820cd3e197(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9d94e2dec0aa1da8bfb376cfb7951b9800dff44897cc51a064b255d83549fbc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63123411abebe29a6627a95a7d12d8c18e5954ba334b58a34925f1bee1a79b76(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0d2162c2711afbaa0d36f6ee01b6a17b0edbbfdf66b53f31e3986957792fc13(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15118a084cc8fafcc64abbbb5c8bb0a2018b8309dd5974c897b161b1e9998aff(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAclProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28769eca3989eda42614553aa7267bad8bec08bfb132b50f4910b7fed5120343(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae655660af737f15775ce42f08da3fd107174d80a34a00b064b3294ed11e0b73(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93bc63988f0612626adf895a35ecfda659d12de4173c4634b9d626b675eb0baf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70266096a00900f0b39be303c0f31da6eaa8c0aff4ce00c6ef50931ab6a7e0ef(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79d67445ce67f41be1a34245d0707bfba748c54d63afbca46427beb36ef9b60a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25daee5847558face65a4a6f31ac64cbfc81fdf35b750335dd5eb1c696567e5b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d16c642e50b5676596a6aa08ebbc5890ea4635abbe712e5e7aa96a77ad58b10(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c62a80f755247dc942577ea6258d30ec34556af820ce0762d923e4a6536928b7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__719013bc9a6bba066b73a67c660b2b9967e57e96b0b03b26c8b72b5178b2ee78(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83a2dbe987f854bcf7fa676ee471a1e981d47a6fd433e414f4bfa814c6a41f4c(
    *,
    actions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    decision: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    username: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ip_whitelists: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fafc06e3242f49175f592a7787ebbe1b3cc5883d4a77491462dfbafd4277ecd4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosConsumerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2519f82991e1a61258c3dd89c333914713b44ad14a6ff0dd6d7634c478171d66(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bd7522c2dd0b882487c4a186d8f953015a050351a88627c97eea4da6478064a(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosConsumerGroup.ConsumeRetryPolicyProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f91a59c3d844678e3cf39f0d33e159a80a822457acd7b589e8fa2a892fbf41a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69b0d22d9e85e6421ad2e26a1ddd7548939db2390513aa7dc507b27a65baf8c1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e8b7949c3646637f85eae848a5ac87d25943035fc53c77a6a85ef24bc9bf5c2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ed4046169ed7a3f820219f0b08231a7517edd627724023bc9414d6a48981b6a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9604082d0fcb123bca2006c15ff3e0e74472b61c2f1c899a11ca043adcf7db75(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efb7384590012ff8491bb0ef0b1d7af238a8fb13a545b23681dc112f9549673c(
    *,
    retry_policy: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dead_letter_target_topic: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_retry_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc2d07edfbec13f876c79418b7a417f9fdbba4bf32cd0eaaf92dbd259055d4ae(
    *,
    consume_retry_policy: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConsumerGroup.ConsumeRetryPolicyProperty, typing.Dict[builtins.str, typing.Any]]],
    consumer_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delivery_order_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c886981a437f998e6d0d5684c0ca22e90c1ef74a878c10daacaf26be43a38b1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fbaf41ff6739d9ace0733507c980e55977f4008d1e10ccbee0681db8bfd78c0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d9e5bf57c2b4ff888175c59d57e75f0b266c6feda261ea503e6c912f1f0089b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee49a27506efea1d859c1f23c474e2c24228d8651d69c89284ff33694086cfc7(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.InternetInfoProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a1ee66b2a7aebb81b5b7ca9c1c478b4b84bf472715019c1dee9bcc79a4046a4(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.ProductInfoProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2bb02d7b7095fe0ac0e58e19cf306c986374dea658692552bb4dfb88ddf3e58(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68192429f4b9aa642c450fad388f0a2e41263c087dbce2113cc96274d02be93a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e71822e769da0548d28b6c2da20fb80eb7e4ac01e0a3061c809508bcfa888ff2(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.VpcInfoProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd8bed65a9ef96ce27828d2a283d8ee44ee7582c1b184fdef9ec1c226c118e22(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d926bccade181a8b3b468d1201485f5f0e19fedf7253965cdb20637a7444065c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c9d80bcf2b15e915fa224a77a5b811a5d037450207002734dc7bd1bd69833e6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb73b23cfe64a5efdaa7ed86f85212db9d943b244775671555a7e49ccf17b32f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b6969d6fd45a733713afe131d7e7f33ccf14fcc37770d5ea60c38d33a948774(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28ebfc28fddd1c7446456a60698d49f129b74c7a6291c89cbfab8572c6b499fb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71ca1fa6c17a083d6214cdebf2ff27f1f4d9fd349f322b105507747ab161da0e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0bc9bdcf24abb51b6ed8bfd75986b32dbbedb7f5b528c266f333b91e075f6bb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0b39b92ac46b13fc4241cd2fda6a219c936c40994ad6bfc817e8b219cc5edf2(
    *,
    internet_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    flow_out_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    flow_out_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_whitelist: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ac3320ec75003444c8525c06a68e7d27369457c265cb1962c4ca624d793ff20(
    *,
    msg_process_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_scaling: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    capacity_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    message_retention_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    provisioned_capacity: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    send_receive_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab194163ad2d0abb0b5eeb404a371273f2bf2f4fe8d941e9e4c77d928e96021c(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fd32fec669d4d859c4cb0dfdc36c63bb55d4d6b52bfa45105234248621d43dc(
    *,
    internet_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.InternetInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    product_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ProductInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    series_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    sub_series_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.VpcInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06716b36c207545460fe43b18d7b8a14e4c047941f535cabe1a456f7c9871b11(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTopicProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bfdfee8975f2867932277499fe742dcac14771bacc7496c47219f8c9d8d9eb9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b0be4371111c695af2596e3c9645fea89ba78b6ca5b7548a82c62dd35804baf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80de6cb2da04ba386b35955073197ad2d8bb069451bb6cfaa73170ac06eb6b80(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bff250fe5c5201d056ab24ea1ae5b48dc1001aeaa8889361ef781fd717655ba1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64cb699d4ff9de7f3b48a22662d704708998ec5167d3db454c6ff1f7dc4cd952(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffdb83f2bb96ac9bea276cd5f75e8aa9b65f2f35edc2baaa573d24d9b255bc1a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d51b5af71a2e9d2b7200ed347d63f7da01b909e702070d91ce33296a5b6f395(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    message_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd4fc71cc559e182a389e876e0cc704bdbb9be0f2cdb17d36dd683add4cf5a6e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TopicProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b3da382de9e3b81b4fdd277184542db5a35588f33ceba3e2de3a39eb1ae92ce(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c218aa8b920cda98301ba0724f9bbd57f801594cda60fafaf149674a4916a74f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5387c6b1a3074a6d1b0e4c7eea9851230374e34f78ee06ec8c47c76f4ae9f786(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76ecfc37773e714f68c3f3b175e2d011cb6101f3614cc9779fb7cae42e012bb9(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    message_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7e1729500b6cd3ce30f105993ce8a3e70f828e6fcac8047401e4d64bd16ec2f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c5efa44366451ffc8e29de8407b41ac53df3fbce83bcf8856c6d89fd2df471c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07eab96f3e0d4193d8b51cc3bf15f3aa3a98a394f7940632a2cfbd2422ea690d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79b846e3476b45f20d65d09455acb80a24e5345ef466dc5a2d9b57d8cb55ed68(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8651daadbbf192141df58adc9666eee5340b349ff320fb0540823c3d25520084(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AclProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fd493c92f7410f1071028866c264159aff96fdcc10a9e91b510bf9da9f4620a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2301c1473c6e19e5e05b6dd63fd55f31bd66f2129424b4ec998370dafdf001bd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aac80dac485f4fb3c75fe6c8e8d3f1ca60b01ccc6bc7e3a93af58c1a7fc2310e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ecc09c51acff18256afffe508ad16e6c282d9a7a64cb1f3dcadf08046d05c0e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ConsumerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc2d3a600ff4ca671f42bbbce94949747bb7fcb508eb293630bbbe3a53a7a7a4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd8883766585ff0634719ebe2d9e754359813f50010ae060ae60b7371e18ea01(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f1495eced8b9586096561db795c841dcae713e94cb5bf98e70dd5e8489d3aa1(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
