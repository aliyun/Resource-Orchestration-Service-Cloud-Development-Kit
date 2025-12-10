'''
## Aliyun ROS DDOS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DDOS from '@alicloud/ros-cdk-ddos';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-ddos.IOriginInstance")
class IOriginInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``OriginInstance``.'''

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
        '''Attribute InstanceId: The ID of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OriginInstanceProps":
        ...


class _IOriginInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``OriginInstance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ddos.IOriginInstance"

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
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OriginInstanceProps":
        return typing.cast("OriginInstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IOriginInstance).__jsii_proxy_class__ = lambda : _IOriginInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-ddos.IPolicy")
class IPolicy(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Policy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrContent")
    def attr_content(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Content: Configuration Content.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyName: The name of the policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: The type of the policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PolicyProps":
        ...


class _IPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Policy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-ddos.IPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrContent")
    def attr_content(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Content: Configuration Content.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrContent"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyName: The name of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: The type of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PolicyProps":
        return typing.cast("PolicyProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPolicy).__jsii_proxy_class__ = lambda : _IPolicyProxy


@jsii.implements(IOriginInstance)
class OriginInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ddos.OriginInstance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DDoS::OriginInstance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosOriginInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["OriginInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__240838b86ab501a30fb6c7d0ece0d5d2df9c61a8d37cb517b282375d551e2eb3)
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
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "OriginInstanceProps":
        return typing.cast("OriginInstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e85d198fe3b99e9083f3b5a5c8f3f34d19cd0d0c61da94d81a74dd45b5aacdd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d52a0510ffcd7413dbe40823d47c5951186bc94b5f6d01c046e2018c05233309)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a48540455e6aa6934aa6a57ad797abd02caf9079622f11ed5d445a6c88f196a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ddos.OriginInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "edition": "edition",
        "protection_mode": "protectionMode",
        "charge_type": "chargeType",
        "clean_bandwidth": "cleanBandwidth",
        "enable_log": "enableLog",
        "ip_addresses": "ipAddresses",
        "network_protocol": "networkProtocol",
        "period": "period",
        "period_unit": "periodUnit",
        "tags": "tags",
    },
)
class OriginInstanceProps:
    def __init__(
        self,
        *,
        edition: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protection_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        clean_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_addresses: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosOriginInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``OriginInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance

        :param edition: Property edition: Edition of the instance. Valid values: - enterprise: Enterprise Edition. - smb: Affordable and general edition for small and medium-sized enterprises.
        :param protection_mode: Property protectionMode: The mode of the protection. Valid values: unlimited: The Unlimited protection mode is intended for internal use within enterprises.
        :param charge_type: Property chargeType: The charge type of the instance. Valid values: PostPaid: Pay-as-you-go. PrePaid: Subscription.
        :param clean_bandwidth: Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth. When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit/s.
        :param enable_log: Property enableLog: Whether to enable protection logs.
        :param ip_addresses: Property ipAddresses: The number of ip addresses. When Edition is smb， IP Addresses ranges from 1 to 29. When Edition is enterprise, The minimum number of IP Addresses is 30.
        :param network_protocol: Property networkProtocol: The network protocol of the instance. Valid values: v4: IPv4. v6: IPv6. v4_6: IPv4+IPv6.
        :param period: Property period: The period of the instance.
        :param period_unit: Property periodUnit: The period unit of the instance. Valid values: Month: Month. Year: Year.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__760a9d712579177d9457d41d4bc2ddca8e4708dc9c9522973a784c69e3a2843e)
            check_type(argname="argument edition", value=edition, expected_type=type_hints["edition"])
            check_type(argname="argument protection_mode", value=protection_mode, expected_type=type_hints["protection_mode"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument clean_bandwidth", value=clean_bandwidth, expected_type=type_hints["clean_bandwidth"])
            check_type(argname="argument enable_log", value=enable_log, expected_type=type_hints["enable_log"])
            check_type(argname="argument ip_addresses", value=ip_addresses, expected_type=type_hints["ip_addresses"])
            check_type(argname="argument network_protocol", value=network_protocol, expected_type=type_hints["network_protocol"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "edition": edition,
            "protection_mode": protection_mode,
        }
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if clean_bandwidth is not None:
            self._values["clean_bandwidth"] = clean_bandwidth
        if enable_log is not None:
            self._values["enable_log"] = enable_log
        if ip_addresses is not None:
            self._values["ip_addresses"] = ip_addresses
        if network_protocol is not None:
            self._values["network_protocol"] = network_protocol
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def edition(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property edition: Edition of the instance.

        Valid values:

        - enterprise: Enterprise Edition.
        - smb: Affordable and general edition for small and medium-sized enterprises.
        '''
        result = self._values.get("edition")
        assert result is not None, "Required property 'edition' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protection_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protectionMode: The mode of the protection.

        Valid values:
        unlimited: The Unlimited protection mode is intended for internal use within enterprises.
        '''
        result = self._values.get("protection_mode")
        assert result is not None, "Required property 'protection_mode' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: The charge type of the instance.

        Valid values:
        PostPaid: Pay-as-you-go.
        PrePaid: Subscription.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def clean_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.

        When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit/s.
        '''
        result = self._values.get("clean_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableLog: Whether to enable protection logs.'''
        result = self._values.get("enable_log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipAddresses: The number of ip addresses.

        When Edition is smb， IP Addresses ranges from 1 to 29.
        When Edition is enterprise, The minimum number of IP Addresses is 30.
        '''
        result = self._values.get("ip_addresses")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property networkProtocol: The network protocol of the instance.

        Valid values:
        v4: IPv4.
        v6: IPv6.
        v4_6: IPv4+IPv6.
        '''
        result = self._values.get("network_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The period of the instance.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The period unit of the instance.

        Valid values:
        Month: Month.
        Year: Year.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosOriginInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosOriginInstance.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "OriginInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPolicy)
class Policy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ddos.Policy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DDoS::Policy``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7c1bf3683493e6a903a6e355d8f28745451fb022eeb8e98ceb6531ebad9aad2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrContent")
    def attr_content(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Content: Configuration Content.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrContent"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: The ID of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyName: The name of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: The type of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PolicyProps":
        return typing.cast("PolicyProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6daf51ec69cad4880ad132b032246c475c50be5904d1d97330aef8581ca64348)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcf0a70bb631bb6900afbc92da10dac2f2dee93ff982e7438d65e311750c2c7f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0c5e22e2440ee37dfd70b66b787c80b522bbc57700f54364146f6a7a683f2db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ddos.PolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_name": "policyName",
        "type": "type",
        "action_type": "actionType",
        "black_ip_list": "blackIpList",
        "content": "content",
        "white_ip_list": "whiteIpList",
    },
)
class PolicyProps:
    def __init__(
        self,
        *,
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        action_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        black_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        content: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPolicy.ContentProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        white_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``Policy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy

        :param policy_name: Property policyName: The name of the policy.
        :param type: Property type: The type of the policy. Values: - default: Indicates the default protection strategy. - l3: Indicates the IP protection strategy. - l4: Indicates the port protection strategy.
        :param action_type: Property actionType: Operation type ActionType = 10 Modify policy name ActionType = 11 Modify whitelist and whitelist timeout ActionType = 12 modify add white high anti-back source network segment switch ActionType = 13 Modify the switch to discard ICMP ActionType = 20 Add black and white list ActionType = 21 Delete whitelist and whitelist ActionType = 22 Clear White List ActionType = 23 Clear the blacklist ActionType = 30 Modify Smart Switch ActionType = 31 Modify regional ban ActionType = 32 Modify Source Speed Limit Black ActionType = 34 Modifying Reflective Port Filtering ActionType = 40,41,42 Create, delete, and modify Port rules ActionType = 50,51,52 Create, delete, and modify fingerprint rules ActionType = 60 switch L4 protection ActionType = 61,62,63 Create, delete, and modify L4 rules.
        :param black_ip_list: Property blackIpList: Blacklist list.
        :param content: Property content: Configuration Content.
        :param white_ip_list: Property whiteIpList: Whitelist IP list.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13ad798713b9d9407460a9c6081f39f06149aee031b570c59ce684da479921a1)
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument action_type", value=action_type, expected_type=type_hints["action_type"])
            check_type(argname="argument black_ip_list", value=black_ip_list, expected_type=type_hints["black_ip_list"])
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            check_type(argname="argument white_ip_list", value=white_ip_list, expected_type=type_hints["white_ip_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_name": policy_name,
            "type": type,
        }
        if action_type is not None:
            self._values["action_type"] = action_type
        if black_ip_list is not None:
            self._values["black_ip_list"] = black_ip_list
        if content is not None:
            self._values["content"] = content
        if white_ip_list is not None:
            self._values["white_ip_list"] = white_ip_list

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyName: The name of the policy.'''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: The type of the policy.

        Values:

        - default: Indicates the default protection strategy.
        - l3: Indicates the IP protection strategy.
        - l4: Indicates the port protection strategy.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def action_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property actionType: Operation type ActionType = 10 Modify policy name ActionType = 11 Modify whitelist and whitelist timeout ActionType = 12 modify add white high anti-back source network segment switch ActionType = 13 Modify the switch to discard ICMP ActionType = 20 Add black and white list ActionType = 21 Delete whitelist and whitelist ActionType = 22 Clear White List ActionType = 23 Clear the blacklist ActionType = 30 Modify Smart Switch ActionType = 31 Modify regional ban ActionType = 32 Modify Source Speed Limit Black ActionType = 34 Modifying Reflective Port Filtering ActionType = 40,41,42 Create, delete, and modify Port rules ActionType = 50,51,52 Create, delete, and modify fingerprint rules ActionType = 60 switch L4 protection ActionType = 61,62,63 Create, delete, and modify L4 rules.'''
        result = self._values.get("action_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def black_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property blackIpList: Blacklist list.'''
        result = self._values.get("black_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def content(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.ContentProperty"]]:
        '''Property content: Configuration Content.'''
        result = self._values.get("content")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.ContentProperty"]], result)

    @builtins.property
    def white_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property whiteIpList: Whitelist IP list.'''
        result = self._values.get("white_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosOriginInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ddos.RosOriginInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DDoS::OriginInstance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``OriginInstance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosOriginInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c5735a17957aef6a805a641d14d683e91dfc8c6454b127622c2156a69679314)
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
            type_hints = typing.get_type_hints(_typecheckingstub__49123a50669613dd82cae2d0f20e5b54ed09ba214c667bf96e85fcd6308510b3)
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
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="edition")
    def edition(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        edition: Edition of the instance. Valid values:

        - enterprise: Enterprise Edition.
        - smb: Affordable and general edition for small and medium-sized enterprises.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "edition"))

    @edition.setter
    def edition(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc139eaac6870fc0df3a1ab18bc0cb02598193116e4bb89bf61c42b42f0400d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "edition", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2eeab6f15c69b37e60f766ecfe450d3c21543f355730bfe56c3077b5747f063c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="protectionMode")
    def protection_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        protectionMode: The mode of the protection. Valid values:
        unlimited: The Unlimited protection mode is intended for internal use within enterprises.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protectionMode"))

    @protection_mode.setter
    def protection_mode(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cf42d9ce9222daa070e749a808efac768bf21c361ff5e1662f2256a821da776)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protectionMode", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The charge type of the instance. Valid values:
        PostPaid: Pay-as-you-go.
        PrePaid: Subscription.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e38d697c92ba886642b94bb9a9092d9082c11fb59ab11e34c661ba196972492c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="cleanBandwidth")
    def clean_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.
        When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit/s.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cleanBandwidth"))

    @clean_bandwidth.setter
    def clean_bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9d842041dc7674b4cc55dcf384877c10b60c49387bd5b5ef82cb864f6aca753)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cleanBandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="enableLog")
    def enable_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableLog: Whether to enable protection logs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableLog"))

    @enable_log.setter
    def enable_log(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2475ca4efa16e81edf01a7e5846521cb55910318a9e8692a891a15750b77f9d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableLog", value)

    @builtins.property
    @jsii.member(jsii_name="ipAddresses")
    def ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ipAddresses: The number of ip addresses.
        When Edition is smb， IP Addresses ranges from 1 to 29.
        When Edition is enterprise, The minimum number of IP Addresses is 30.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipAddresses"))

    @ip_addresses.setter
    def ip_addresses(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9cb7d9a67fcee11013f424b966ca3ee5eff464cb8695909e2ce9790567a45880)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipAddresses", value)

    @builtins.property
    @jsii.member(jsii_name="networkProtocol")
    def network_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkProtocol: The network protocol of the instance. Valid values:
        v4: IPv4.
        v6: IPv6.
        v4_6: IPv4+IPv6.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "networkProtocol"))

    @network_protocol.setter
    def network_protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0eabebd6e0b51425ff4726b6809d9a18b569ff2d0127fd7bb1d15b49ef80c16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The period of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d0a450143f8d2d3cd70ba8b24e14b482c93661b5911e3acd57aa2cd1a57d801)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The period unit of the instance. Valid values:
        Month: Month.
        Year: Year.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd722f6b93c45395ed865a312d465129c2a96735769515c2e78c5a411bc5606a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosOriginInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosOriginInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosOriginInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e5e10b5c8f2edb6c51578e53626d62b7dc563ed04da5b492384b678a729a53b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ddos.RosOriginInstance.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__c1726dfea1ef105d9138b89210c0d1ab69d504aca1bcf746f6ffdfa311b3640f)
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
    jsii_type="@alicloud/ros-cdk-ddos.RosOriginInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "edition": "edition",
        "protection_mode": "protectionMode",
        "charge_type": "chargeType",
        "clean_bandwidth": "cleanBandwidth",
        "enable_log": "enableLog",
        "ip_addresses": "ipAddresses",
        "network_protocol": "networkProtocol",
        "period": "period",
        "period_unit": "periodUnit",
        "tags": "tags",
    },
)
class RosOriginInstanceProps:
    def __init__(
        self,
        *,
        edition: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protection_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        clean_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_addresses: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        network_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosOriginInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosOriginInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-origininstance

        :param edition: 
        :param protection_mode: 
        :param charge_type: 
        :param clean_bandwidth: 
        :param enable_log: 
        :param ip_addresses: 
        :param network_protocol: 
        :param period: 
        :param period_unit: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c2809eb9e8ce3e064f51f0bd496fb4a7502ed64c8cf9075fb8af252946ae5fa)
            check_type(argname="argument edition", value=edition, expected_type=type_hints["edition"])
            check_type(argname="argument protection_mode", value=protection_mode, expected_type=type_hints["protection_mode"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument clean_bandwidth", value=clean_bandwidth, expected_type=type_hints["clean_bandwidth"])
            check_type(argname="argument enable_log", value=enable_log, expected_type=type_hints["enable_log"])
            check_type(argname="argument ip_addresses", value=ip_addresses, expected_type=type_hints["ip_addresses"])
            check_type(argname="argument network_protocol", value=network_protocol, expected_type=type_hints["network_protocol"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "edition": edition,
            "protection_mode": protection_mode,
        }
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if clean_bandwidth is not None:
            self._values["clean_bandwidth"] = clean_bandwidth
        if enable_log is not None:
            self._values["enable_log"] = enable_log
        if ip_addresses is not None:
            self._values["ip_addresses"] = ip_addresses
        if network_protocol is not None:
            self._values["network_protocol"] = network_protocol
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def edition(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        edition: Edition of the instance. Valid values:

        - enterprise: Enterprise Edition.
        - smb: Affordable and general edition for small and medium-sized enterprises.
        '''
        result = self._values.get("edition")
        assert result is not None, "Required property 'edition' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protection_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        protectionMode: The mode of the protection. Valid values:
        unlimited: The Unlimited protection mode is intended for internal use within enterprises.
        '''
        result = self._values.get("protection_mode")
        assert result is not None, "Required property 'protection_mode' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The charge type of the instance. Valid values:
        PostPaid: Pay-as-you-go.
        PrePaid: Subscription.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def clean_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cleanBandwidth: The mitigation capability of Anti-DDoS is measured by the inbound or outbound clean bandwidth.
        When Edition is enterprise, CleanBandwidth ranges from 100 to 1000 Mbit/s.When Edition is smb， CleanBandwidth ranges from 50 to 1000 Mbit/s.
        '''
        result = self._values.get("clean_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableLog: Whether to enable protection logs.
        '''
        result = self._values.get("enable_log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_addresses(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ipAddresses: The number of ip addresses.
        When Edition is smb， IP Addresses ranges from 1 to 29.
        When Edition is enterprise, The minimum number of IP Addresses is 30.
        '''
        result = self._values.get("ip_addresses")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def network_protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        networkProtocol: The network protocol of the instance. Valid values:
        v4: IPv4.
        v6: IPv6.
        v4_6: IPv4+IPv6.
        '''
        result = self._values.get("network_protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The period of the instance.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The period unit of the instance. Valid values:
        Month: Month.
        Year: Year.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosOriginInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosOriginInstance.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosOriginInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ddos.RosPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DDoS::Policy``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Policy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b1e723aeeaf0ce14cae296e92b752136fe7a0187729f70140f37b426c08d5d6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4ac42875173118c9bc828915762e26546da17a865af5e69300d369b87d897307)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrContent")
    def attr_content(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Content: Configuration Content.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContent"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyId: The ID of the policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyName: The name of the policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Type: The type of the policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__319725327fe6232db2adf82b74ef745bfd71cf214fcf0a5e24bc59b5f7f604e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="policyName")
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: The name of the policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyName"))

    @policy_name.setter
    def policy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5845ecc889bd0b8395154c739dfe563ca980edbbe2f7e62d67da99f9c0e31eec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyName", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The type of the policy. Values:

        - default: Indicates the default protection strategy.
        - l3: Indicates the IP protection strategy.
        - l4: Indicates the port protection strategy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9fb19cf4f5cc4a3038bdc9b6f246a910411b4f92222cd7df4a408054eda712c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="actionType")
    def action_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        actionType: Operation type
        ActionType = 10 Modify policy name
        ActionType = 11 Modify whitelist and whitelist timeout
        ActionType = 12 modify add white high anti-back source network segment switch
        ActionType = 13 Modify the switch to discard ICMP
        ActionType = 20 Add black and white list
        ActionType = 21 Delete whitelist and whitelist
        ActionType = 22 Clear White List
        ActionType = 23 Clear the blacklist
        ActionType = 30 Modify Smart Switch
        ActionType = 31 Modify regional ban
        ActionType = 32 Modify Source Speed Limit Black
        ActionType = 34 Modifying Reflective Port Filtering
        ActionType = 40,41,42 Create, delete, and modify Port rules
        ActionType = 50,51,52 Create, delete, and modify fingerprint rules
        ActionType = 60 switch L4 protection
        ActionType = 61,62,63 Create, delete, and modify L4 rules.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "actionType"))

    @action_type.setter
    def action_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c8f1d3a4d3126ec9f7ac5fbe0d4b30062f9677e53bfaff8e57136f060872aa7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "actionType", value)

    @builtins.property
    @jsii.member(jsii_name="blackIpList")
    def black_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: blackIpList: Blacklist list.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "blackIpList"))

    @black_ip_list.setter
    def black_ip_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29165d578fc38e66d428879fea52635469851df5e598515682858d80a677b8b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "blackIpList", value)

    @builtins.property
    @jsii.member(jsii_name="content")
    def content(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.ContentProperty"]]:
        '''
        :Property: content: Configuration Content.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.ContentProperty"]], jsii.get(self, "content"))

    @content.setter
    def content(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.ContentProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcfcff064f557e5f4414463a8de23bfb1eb1deca05c3c6d776bae0a2aaa99262)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "content", value)

    @builtins.property
    @jsii.member(jsii_name="whiteIpList")
    def white_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: whiteIpList: Whitelist IP list.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "whiteIpList"))

    @white_ip_list.setter
    def white_ip_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fbed5f3b5ef47a74b00f33bfd1bf11d1f81542fecfbce72782c5855360c2b77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "whiteIpList", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ddos.RosPolicy.ConditionListProperty",
        jsii_struct_bases=[],
        name_mapping={"arg": "arg", "depth": "depth", "position": "position"},
    )
    class ConditionListProperty:
        def __init__(
            self,
            *,
            arg: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            depth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            position: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param arg: 
            :param depth: 
            :param position: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a54361f822c01f265e4656d3b71018d14039d34733bf5c885202df3945eed4c5)
                check_type(argname="argument arg", value=arg, expected_type=type_hints["arg"])
                check_type(argname="argument depth", value=depth, expected_type=type_hints["depth"])
                check_type(argname="argument position", value=position, expected_type=type_hints["position"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "arg": arg,
                "depth": depth,
                "position": position,
            }

        @builtins.property
        def arg(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: arg: Matching target character.
            '''
            result = self._values.get("arg")
            assert result is not None, "Required property 'arg' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def depth(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: depth: Depth of Matching.
            '''
            result = self._values.get("depth")
            assert result is not None, "Required property 'depth' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def position(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: position: Position to start matching, starting from 0.
            '''
            result = self._values.get("position")
            assert result is not None, "Required property 'position' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConditionListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ddos.RosPolicy.ContentProperty",
        jsii_struct_bases=[],
        name_mapping={
            "black_ip_list_expire_at": "blackIpListExpireAt",
            "enable_defense": "enableDefense",
            "enable_drop_icmp": "enableDropIcmp",
            "enable_intelligence": "enableIntelligence",
            "finger_print_rule_list": "fingerPrintRuleList",
            "intelligence_level": "intelligenceLevel",
            "layer4_rule_list": "layer4RuleList",
            "port_rule_list": "portRuleList",
            "reflect_block_udp_port_list": "reflectBlockUdpPortList",
            "region_block_country_list": "regionBlockCountryList",
            "region_block_province_list": "regionBlockProvinceList",
            "source_block_list": "sourceBlockList",
            "source_limit": "sourceLimit",
            "whiten_gfbr_nets": "whitenGfbrNets",
        },
    )
    class ContentProperty:
        def __init__(
            self,
            *,
            black_ip_list_expire_at: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_defense: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_drop_icmp: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_intelligence: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            finger_print_rule_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPolicy.FingerPrintRuleListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            intelligence_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            layer4_rule_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPolicy.Layer4RuleListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            port_rule_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPolicy.PortRuleListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            reflect_block_udp_port_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            region_block_country_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            region_block_province_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            source_block_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPolicy.SourceBlockListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            source_limit: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPolicy.SourceLimitProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            whiten_gfbr_nets: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param black_ip_list_expire_at: 
            :param enable_defense: 
            :param enable_drop_icmp: 
            :param enable_intelligence: 
            :param finger_print_rule_list: 
            :param intelligence_level: 
            :param layer4_rule_list: 
            :param port_rule_list: 
            :param reflect_block_udp_port_list: 
            :param region_block_country_list: 
            :param region_block_province_list: 
            :param source_block_list: 
            :param source_limit: 
            :param whiten_gfbr_nets: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b64ad32b57d59d78fa279c989a2a3fad03af1b3e1cf4fe384153c97ce70dca98)
                check_type(argname="argument black_ip_list_expire_at", value=black_ip_list_expire_at, expected_type=type_hints["black_ip_list_expire_at"])
                check_type(argname="argument enable_defense", value=enable_defense, expected_type=type_hints["enable_defense"])
                check_type(argname="argument enable_drop_icmp", value=enable_drop_icmp, expected_type=type_hints["enable_drop_icmp"])
                check_type(argname="argument enable_intelligence", value=enable_intelligence, expected_type=type_hints["enable_intelligence"])
                check_type(argname="argument finger_print_rule_list", value=finger_print_rule_list, expected_type=type_hints["finger_print_rule_list"])
                check_type(argname="argument intelligence_level", value=intelligence_level, expected_type=type_hints["intelligence_level"])
                check_type(argname="argument layer4_rule_list", value=layer4_rule_list, expected_type=type_hints["layer4_rule_list"])
                check_type(argname="argument port_rule_list", value=port_rule_list, expected_type=type_hints["port_rule_list"])
                check_type(argname="argument reflect_block_udp_port_list", value=reflect_block_udp_port_list, expected_type=type_hints["reflect_block_udp_port_list"])
                check_type(argname="argument region_block_country_list", value=region_block_country_list, expected_type=type_hints["region_block_country_list"])
                check_type(argname="argument region_block_province_list", value=region_block_province_list, expected_type=type_hints["region_block_province_list"])
                check_type(argname="argument source_block_list", value=source_block_list, expected_type=type_hints["source_block_list"])
                check_type(argname="argument source_limit", value=source_limit, expected_type=type_hints["source_limit"])
                check_type(argname="argument whiten_gfbr_nets", value=whiten_gfbr_nets, expected_type=type_hints["whiten_gfbr_nets"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if black_ip_list_expire_at is not None:
                self._values["black_ip_list_expire_at"] = black_ip_list_expire_at
            if enable_defense is not None:
                self._values["enable_defense"] = enable_defense
            if enable_drop_icmp is not None:
                self._values["enable_drop_icmp"] = enable_drop_icmp
            if enable_intelligence is not None:
                self._values["enable_intelligence"] = enable_intelligence
            if finger_print_rule_list is not None:
                self._values["finger_print_rule_list"] = finger_print_rule_list
            if intelligence_level is not None:
                self._values["intelligence_level"] = intelligence_level
            if layer4_rule_list is not None:
                self._values["layer4_rule_list"] = layer4_rule_list
            if port_rule_list is not None:
                self._values["port_rule_list"] = port_rule_list
            if reflect_block_udp_port_list is not None:
                self._values["reflect_block_udp_port_list"] = reflect_block_udp_port_list
            if region_block_country_list is not None:
                self._values["region_block_country_list"] = region_block_country_list
            if region_block_province_list is not None:
                self._values["region_block_province_list"] = region_block_province_list
            if source_block_list is not None:
                self._values["source_block_list"] = source_block_list
            if source_limit is not None:
                self._values["source_limit"] = source_limit
            if whiten_gfbr_nets is not None:
                self._values["whiten_gfbr_nets"] = whiten_gfbr_nets

        @builtins.property
        def black_ip_list_expire_at(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: blackIpListExpireAt: Blacklist and whitelist timeout.
            '''
            result = self._values.get("black_ip_list_expire_at")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_defense(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableDefense: Whether to enable L4 protection.
            '''
            result = self._values.get("enable_defense")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_drop_icmp(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableDropIcmp: Switch to discard ICMP.
            '''
            result = self._values.get("enable_drop_icmp")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_intelligence(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableIntelligence: Whether the intelligent switch is on.
            '''
            result = self._values.get("enable_intelligence")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def finger_print_rule_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.FingerPrintRuleListProperty"]]]]:
            '''
            :Property: fingerPrintRuleList: Fingerprint Rules.
            '''
            result = self._values.get("finger_print_rule_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.FingerPrintRuleListProperty"]]]], result)

        @builtins.property
        def intelligence_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: intelligenceLevel: Smart mode. Valid values: weak, hard, and default.
            '''
            result = self._values.get("intelligence_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def layer4_rule_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.Layer4RuleListProperty"]]]]:
            '''
            :Property: layer4RuleList: L4 protection rules.
            '''
            result = self._values.get("layer4_rule_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.Layer4RuleListProperty"]]]], result)

        @builtins.property
        def port_rule_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.PortRuleListProperty"]]]]:
            '''
            :Property: portRuleList: Port Rule List.
            '''
            result = self._values.get("port_rule_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.PortRuleListProperty"]]]], result)

        @builtins.property
        def reflect_block_udp_port_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: reflectBlockUdpPortList: Reflective port filtering.
            '''
            result = self._values.get("reflect_block_udp_port_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def region_block_country_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: regionBlockCountryList: List of Regional Banned Countries.
            '''
            result = self._values.get("region_block_country_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def region_block_province_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: regionBlockProvinceList: List of Prohibited Provinces by Region.
            '''
            result = self._values.get("region_block_province_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def source_block_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.SourceBlockListProperty"]]]]:
            '''
            :Property: sourceBlockList: Source pull Black.
            '''
            result = self._values.get("source_block_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.SourceBlockListProperty"]]]], result)

        @builtins.property
        def source_limit(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.SourceLimitProperty"]]:
            '''
            :Property: sourceLimit: Do not fill in when the source speed limit is deleted.
            '''
            result = self._values.get("source_limit")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.SourceLimitProperty"]], result)

        @builtins.property
        def whiten_gfbr_nets(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: whitenGfbrNets: Add white high protection back to source network segment switch.
            '''
            result = self._values.get("whiten_gfbr_nets")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ContentProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ddos.RosPolicy.FingerPrintRuleListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "dst_port_end": "dstPortEnd",
            "dst_port_start": "dstPortStart",
            "match_action": "matchAction",
            "max_pkt_len": "maxPktLen",
            "min_pkt_len": "minPktLen",
            "protocol": "protocol",
            "seq_no": "seqNo",
            "src_port_end": "srcPortEnd",
            "src_port_start": "srcPortStart",
            "finger_print_rule_id": "fingerPrintRuleId",
            "offset": "offset",
            "payload_bytes": "payloadBytes",
            "rate_value": "rateValue",
        },
    )
    class FingerPrintRuleListProperty:
        def __init__(
            self,
            *,
            dst_port_end: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            dst_port_start: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            match_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            max_pkt_len: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            min_pkt_len: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            seq_no: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            src_port_end: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            src_port_start: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            finger_print_rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            offset: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            payload_bytes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            rate_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param dst_port_end: 
            :param dst_port_start: 
            :param match_action: 
            :param max_pkt_len: 
            :param min_pkt_len: 
            :param protocol: 
            :param seq_no: 
            :param src_port_end: 
            :param src_port_start: 
            :param finger_print_rule_id: 
            :param offset: 
            :param payload_bytes: 
            :param rate_value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__66104ccdf13aa7fea1222ecd3f8d05a3f9b4ee73f63a9d86db2cd3acdf75025c)
                check_type(argname="argument dst_port_end", value=dst_port_end, expected_type=type_hints["dst_port_end"])
                check_type(argname="argument dst_port_start", value=dst_port_start, expected_type=type_hints["dst_port_start"])
                check_type(argname="argument match_action", value=match_action, expected_type=type_hints["match_action"])
                check_type(argname="argument max_pkt_len", value=max_pkt_len, expected_type=type_hints["max_pkt_len"])
                check_type(argname="argument min_pkt_len", value=min_pkt_len, expected_type=type_hints["min_pkt_len"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
                check_type(argname="argument seq_no", value=seq_no, expected_type=type_hints["seq_no"])
                check_type(argname="argument src_port_end", value=src_port_end, expected_type=type_hints["src_port_end"])
                check_type(argname="argument src_port_start", value=src_port_start, expected_type=type_hints["src_port_start"])
                check_type(argname="argument finger_print_rule_id", value=finger_print_rule_id, expected_type=type_hints["finger_print_rule_id"])
                check_type(argname="argument offset", value=offset, expected_type=type_hints["offset"])
                check_type(argname="argument payload_bytes", value=payload_bytes, expected_type=type_hints["payload_bytes"])
                check_type(argname="argument rate_value", value=rate_value, expected_type=type_hints["rate_value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "dst_port_end": dst_port_end,
                "dst_port_start": dst_port_start,
                "match_action": match_action,
                "max_pkt_len": max_pkt_len,
                "min_pkt_len": min_pkt_len,
                "protocol": protocol,
                "seq_no": seq_no,
                "src_port_end": src_port_end,
                "src_port_start": src_port_start,
            }
            if finger_print_rule_id is not None:
                self._values["finger_print_rule_id"] = finger_print_rule_id
            if offset is not None:
                self._values["offset"] = offset
            if payload_bytes is not None:
                self._values["payload_bytes"] = payload_bytes
            if rate_value is not None:
                self._values["rate_value"] = rate_value

        @builtins.property
        def dst_port_end(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dstPortEnd: End of destination port 0-65535.
            '''
            result = self._values.get("dst_port_end")
            assert result is not None, "Required property 'dst_port_end' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def dst_port_start(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dstPortStart: Destination Port start 0-65535.
            '''
            result = self._values.get("dst_port_start")
            assert result is not None, "Required property 'dst_port_start' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def match_action(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: matchAction: Actions. Currently, drop, accept, session_rate, and ip_rate are supported.
            '''
            result = self._values.get("match_action")
            assert result is not None, "Required property 'match_action' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def max_pkt_len(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: maxPktLen: Maximum bag length.
            '''
            result = self._values.get("max_pkt_len")
            assert result is not None, "Required property 'max_pkt_len' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def min_pkt_len(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: minPktLen: Minimum package length.
            '''
            result = self._values.get("min_pkt_len")
            assert result is not None, "Required property 'min_pkt_len' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: protocol: Protocol, tcp or udp.
            '''
            result = self._values.get("protocol")
            assert result is not None, "Required property 'protocol' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def seq_no(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: seqNo: Serial number 1-100 Affects the order issued by the bottom layer The larger the number, the lower it is.
            '''
            result = self._values.get("seq_no")
            assert result is not None, "Required property 'seq_no' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def src_port_end(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: srcPortEnd: Source Port end 0-65535.
            '''
            result = self._values.get("src_port_end")
            assert result is not None, "Required property 'src_port_end' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def src_port_start(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: srcPortStart: Source port start 0-65535.
            '''
            result = self._values.get("src_port_start")
            assert result is not None, "Required property 'src_port_start' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def finger_print_rule_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: fingerPrintRuleId: The UUID of the rule is required to be deleted and modified, and it is not required to be created.
            '''
            result = self._values.get("finger_print_rule_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def offset(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: offset: Offset.
            '''
            result = self._values.get("offset")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def payload_bytes(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: payloadBytes: Load match, hexadecimal string; Similar to 'abcd'.
            '''
            result = self._values.get("payload_bytes")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def rate_value(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rateValue: Speed limit value 1-100000.
            '''
            result = self._values.get("rate_value")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "FingerPrintRuleListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ddos.RosPolicy.Layer4RuleListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "action": "action",
            "condition_list": "conditionList",
            "limited": "limited",
            "match": "match",
            "method": "method",
            "name": "name",
            "priority": "priority",
        },
    )
    class Layer4RuleListProperty:
        def __init__(
            self,
            *,
            action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            condition_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosPolicy.ConditionListProperty", typing.Dict[builtins.str, typing.Any]]]]],
            limited: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            match: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            method: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param action: 
            :param condition_list: 
            :param limited: 
            :param match: 
            :param method: 
            :param name: 
            :param priority: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f1522823ff7e77eb49d98eef2f5f765d9a8df2411d54bb7faca31dc365681c64)
                check_type(argname="argument action", value=action, expected_type=type_hints["action"])
                check_type(argname="argument condition_list", value=condition_list, expected_type=type_hints["condition_list"])
                check_type(argname="argument limited", value=limited, expected_type=type_hints["limited"])
                check_type(argname="argument match", value=match, expected_type=type_hints["match"])
                check_type(argname="argument method", value=method, expected_type=type_hints["method"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "action": action,
                "condition_list": condition_list,
                "limited": limited,
                "match": match,
                "method": method,
                "name": name,
                "priority": priority,
            }

        @builtins.property
        def action(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: action: 1 for observation 2 for blocking.
            '''
            result = self._values.get("action")
            assert result is not None, "Required property 'action' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def condition_list(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.ConditionListProperty"]]]:
            '''
            :Property: conditionList: Matching Condition.
            '''
            result = self._values.get("condition_list")
            assert result is not None, "Required property 'condition_list' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosPolicy.ConditionListProperty"]]], result)

        @builtins.property
        def limited(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: limited: <2048, length limit, 0 means no limit.
            '''
            result = self._values.get("limited")
            assert result is not None, "Required property 'limited' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def match(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: match: 0 indicates that the condition is not met 1 indicates that the condition is met.
            '''
            result = self._values.get("match")
            assert result is not None, "Required property 'match' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def method(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: method: Char indicates a string match hex match.
            '''
            result = self._values.get("method")
            assert result is not None, "Required property 'method' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Rule Name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def priority(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: priority: 1-100, priority, the lower the number, the higher the priority.
            '''
            result = self._values.get("priority")
            assert result is not None, "Required property 'priority' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "Layer4RuleListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ddos.RosPolicy.PortRuleListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "dst_port_end": "dstPortEnd",
            "dst_port_start": "dstPortStart",
            "protocol": "protocol",
            "seq_no": "seqNo",
            "src_port_end": "srcPortEnd",
            "src_port_start": "srcPortStart",
            "port_rule_id": "portRuleId",
        },
    )
    class PortRuleListProperty:
        def __init__(
            self,
            *,
            dst_port_end: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            dst_port_start: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            seq_no: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            src_port_end: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            src_port_start: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            port_rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param dst_port_end: 
            :param dst_port_start: 
            :param protocol: 
            :param seq_no: 
            :param src_port_end: 
            :param src_port_start: 
            :param port_rule_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__08f228038c97b6903c53b332fdcb34789fd67a30e3eaccdd0d899e04497eb97b)
                check_type(argname="argument dst_port_end", value=dst_port_end, expected_type=type_hints["dst_port_end"])
                check_type(argname="argument dst_port_start", value=dst_port_start, expected_type=type_hints["dst_port_start"])
                check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
                check_type(argname="argument seq_no", value=seq_no, expected_type=type_hints["seq_no"])
                check_type(argname="argument src_port_end", value=src_port_end, expected_type=type_hints["src_port_end"])
                check_type(argname="argument src_port_start", value=src_port_start, expected_type=type_hints["src_port_start"])
                check_type(argname="argument port_rule_id", value=port_rule_id, expected_type=type_hints["port_rule_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "dst_port_end": dst_port_end,
                "dst_port_start": dst_port_start,
                "protocol": protocol,
                "seq_no": seq_no,
                "src_port_end": src_port_end,
                "src_port_start": src_port_start,
            }
            if port_rule_id is not None:
                self._values["port_rule_id"] = port_rule_id

        @builtins.property
        def dst_port_end(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dstPortEnd: End of destination port 0-65535.
            '''
            result = self._values.get("dst_port_end")
            assert result is not None, "Required property 'dst_port_end' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def dst_port_start(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: dstPortStart: Destination Port start 0-65535.
            '''
            result = self._values.get("dst_port_start")
            assert result is not None, "Required property 'dst_port_start' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def protocol(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: protocol: Protocol, tcp or udp.
            '''
            result = self._values.get("protocol")
            assert result is not None, "Required property 'protocol' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def seq_no(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: seqNo: Serial number 1-100 Affects the order issued by the bottom layer The larger the number, the lower it is.
            '''
            result = self._values.get("seq_no")
            assert result is not None, "Required property 'seq_no' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def src_port_end(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: srcPortEnd: Source Port end 0-65535.
            '''
            result = self._values.get("src_port_end")
            assert result is not None, "Required property 'src_port_end' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def src_port_start(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: srcPortStart: Source port start 0-65535.
            '''
            result = self._values.get("src_port_start")
            assert result is not None, "Required property 'src_port_start' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def port_rule_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: portRuleId: Rule UUID is required to be deleted and modified, and is not required to be created.
            '''
            result = self._values.get("port_rule_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PortRuleListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ddos.RosPolicy.SourceBlockListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "block_expire_seconds": "blockExpireSeconds",
            "every_seconds": "everySeconds",
            "exceed_limit_times": "exceedLimitTimes",
            "type": "type",
        },
    )
    class SourceBlockListProperty:
        def __init__(
            self,
            *,
            block_expire_seconds: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            every_seconds: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            exceed_limit_times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param block_expire_seconds: 
            :param every_seconds: 
            :param exceed_limit_times: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a57ef84960df701f8cb2b41eb73ca25d6cf9d6219bfaad82e98cbe658f267597)
                check_type(argname="argument block_expire_seconds", value=block_expire_seconds, expected_type=type_hints["block_expire_seconds"])
                check_type(argname="argument every_seconds", value=every_seconds, expected_type=type_hints["every_seconds"])
                check_type(argname="argument exceed_limit_times", value=exceed_limit_times, expected_type=type_hints["exceed_limit_times"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "block_expire_seconds": block_expire_seconds,
                "every_seconds": every_seconds,
                "exceed_limit_times": exceed_limit_times,
                "type": type,
            }

        @builtins.property
        def block_expire_seconds(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: blockExpireSeconds: Statistical cycle range 60-1200.
            '''
            result = self._values.get("block_expire_seconds")
            assert result is not None, "Required property 'block_expire_seconds' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def every_seconds(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: everySeconds: The time (unit second) for automatically releasing the black after triggering the speed limit is 60~2592000.
            '''
            result = self._values.get("every_seconds")
            assert result is not None, "Required property 'every_seconds' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def exceed_limit_times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: exceedLimitTimes: The number of times the speed limit is exceeded in a statistical period ranges from 1 to 1200.
            '''
            result = self._values.get("exceed_limit_times")
            assert result is not None, "Required property 'exceed_limit_times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: The type of black is optional source PPS speed limit Black: 3 source BPS speed limit Black: 4 SYNPPS speed limit Black: 5 SYNBPS speed limit Black: 6.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceBlockListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ddos.RosPolicy.SourceLimitProperty",
        jsii_struct_bases=[],
        name_mapping={
            "bps": "bps",
            "pps": "pps",
            "syn_bps": "synBps",
            "syn_pps": "synPps",
        },
    )
    class SourceLimitProperty:
        def __init__(
            self,
            *,
            bps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            pps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            syn_bps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            syn_pps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param bps: 
            :param pps: 
            :param syn_bps: 
            :param syn_pps: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0619ad0aa126cd55c9101669a20b3339a306d037b24006fa143d4d435210c594)
                check_type(argname="argument bps", value=bps, expected_type=type_hints["bps"])
                check_type(argname="argument pps", value=pps, expected_type=type_hints["pps"])
                check_type(argname="argument syn_bps", value=syn_bps, expected_type=type_hints["syn_bps"])
                check_type(argname="argument syn_pps", value=syn_pps, expected_type=type_hints["syn_pps"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if bps is not None:
                self._values["bps"] = bps
            if pps is not None:
                self._values["pps"] = pps
            if syn_bps is not None:
                self._values["syn_bps"] = syn_bps
            if syn_pps is not None:
                self._values["syn_pps"] = syn_pps

        @builtins.property
        def bps(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: bps: bps range 1024~268435456.
            '''
            result = self._values.get("bps")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def pps(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: pps: Pps range 32~500000.
            '''
            result = self._values.get("pps")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def syn_bps(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: synBps: SynBps range 1024~268435456.
            '''
            result = self._values.get("syn_bps")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def syn_pps(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: synPps: SynPps range 1~100000.
            '''
            result = self._values.get("syn_pps")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceLimitProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ddos.RosPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_name": "policyName",
        "type": "type",
        "action_type": "actionType",
        "black_ip_list": "blackIpList",
        "content": "content",
        "white_ip_list": "whiteIpList",
    },
)
class RosPolicyProps:
    def __init__(
        self,
        *,
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        action_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        black_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        content: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.ContentProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        white_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddos-policy

        :param policy_name: 
        :param type: 
        :param action_type: 
        :param black_ip_list: 
        :param content: 
        :param white_ip_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94fc01cab990ae084e6b831d20304ea3093245fc03dc2e0be9a99238c2e3bd94)
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument action_type", value=action_type, expected_type=type_hints["action_type"])
            check_type(argname="argument black_ip_list", value=black_ip_list, expected_type=type_hints["black_ip_list"])
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
            check_type(argname="argument white_ip_list", value=white_ip_list, expected_type=type_hints["white_ip_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_name": policy_name,
            "type": type,
        }
        if action_type is not None:
            self._values["action_type"] = action_type
        if black_ip_list is not None:
            self._values["black_ip_list"] = black_ip_list
        if content is not None:
            self._values["content"] = content
        if white_ip_list is not None:
            self._values["white_ip_list"] = white_ip_list

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: The name of the policy.
        '''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The type of the policy. Values:

        - default: Indicates the default protection strategy.
        - l3: Indicates the IP protection strategy.
        - l4: Indicates the port protection strategy.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def action_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        actionType: Operation type
        ActionType = 10 Modify policy name
        ActionType = 11 Modify whitelist and whitelist timeout
        ActionType = 12 modify add white high anti-back source network segment switch
        ActionType = 13 Modify the switch to discard ICMP
        ActionType = 20 Add black and white list
        ActionType = 21 Delete whitelist and whitelist
        ActionType = 22 Clear White List
        ActionType = 23 Clear the blacklist
        ActionType = 30 Modify Smart Switch
        ActionType = 31 Modify regional ban
        ActionType = 32 Modify Source Speed Limit Black
        ActionType = 34 Modifying Reflective Port Filtering
        ActionType = 40,41,42 Create, delete, and modify Port rules
        ActionType = 50,51,52 Create, delete, and modify fingerprint rules
        ActionType = 60 switch L4 protection
        ActionType = 61,62,63 Create, delete, and modify L4 rules.
        '''
        result = self._values.get("action_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def black_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: blackIpList: Blacklist list.
        '''
        result = self._values.get("black_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def content(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPolicy.ContentProperty]]:
        '''
        :Property: content: Configuration Content.
        '''
        result = self._values.get("content")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPolicy.ContentProperty]], result)

    @builtins.property
    def white_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: whiteIpList: Whitelist IP list.
        '''
        result = self._values.get("white_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IOriginInstance",
    "IPolicy",
    "OriginInstance",
    "OriginInstanceProps",
    "Policy",
    "PolicyProps",
    "RosOriginInstance",
    "RosOriginInstanceProps",
    "RosPolicy",
    "RosPolicyProps",
]

publication.publish()

def _typecheckingstub__240838b86ab501a30fb6c7d0ece0d5d2df9c61a8d37cb517b282375d551e2eb3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[OriginInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e85d198fe3b99e9083f3b5a5c8f3f34d19cd0d0c61da94d81a74dd45b5aacdd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d52a0510ffcd7413dbe40823d47c5951186bc94b5f6d01c046e2018c05233309(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a48540455e6aa6934aa6a57ad797abd02caf9079622f11ed5d445a6c88f196a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__760a9d712579177d9457d41d4bc2ddca8e4708dc9c9522973a784c69e3a2843e(
    *,
    edition: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protection_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    clean_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_addresses: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosOriginInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7c1bf3683493e6a903a6e355d8f28745451fb022eeb8e98ceb6531ebad9aad2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6daf51ec69cad4880ad132b032246c475c50be5904d1d97330aef8581ca64348(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcf0a70bb631bb6900afbc92da10dac2f2dee93ff982e7438d65e311750c2c7f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0c5e22e2440ee37dfd70b66b787c80b522bbc57700f54364146f6a7a683f2db(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13ad798713b9d9407460a9c6081f39f06149aee031b570c59ce684da479921a1(
    *,
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    action_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    black_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    content: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.ContentProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    white_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c5735a17957aef6a805a641d14d683e91dfc8c6454b127622c2156a69679314(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosOriginInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49123a50669613dd82cae2d0f20e5b54ed09ba214c667bf96e85fcd6308510b3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc139eaac6870fc0df3a1ab18bc0cb02598193116e4bb89bf61c42b42f0400d2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2eeab6f15c69b37e60f766ecfe450d3c21543f355730bfe56c3077b5747f063c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cf42d9ce9222daa070e749a808efac768bf21c361ff5e1662f2256a821da776(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e38d697c92ba886642b94bb9a9092d9082c11fb59ab11e34c661ba196972492c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9d842041dc7674b4cc55dcf384877c10b60c49387bd5b5ef82cb864f6aca753(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2475ca4efa16e81edf01a7e5846521cb55910318a9e8692a891a15750b77f9d3(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9cb7d9a67fcee11013f424b966ca3ee5eff464cb8695909e2ce9790567a45880(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0eabebd6e0b51425ff4726b6809d9a18b569ff2d0127fd7bb1d15b49ef80c16(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d0a450143f8d2d3cd70ba8b24e14b482c93661b5911e3acd57aa2cd1a57d801(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd722f6b93c45395ed865a312d465129c2a96735769515c2e78c5a411bc5606a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e5e10b5c8f2edb6c51578e53626d62b7dc563ed04da5b492384b678a729a53b(
    value: typing.Optional[typing.List[RosOriginInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1726dfea1ef105d9138b89210c0d1ab69d504aca1bcf746f6ffdfa311b3640f(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c2809eb9e8ce3e064f51f0bd496fb4a7502ed64c8cf9075fb8af252946ae5fa(
    *,
    edition: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protection_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    clean_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_addresses: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    network_protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosOriginInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b1e723aeeaf0ce14cae296e92b752136fe7a0187729f70140f37b426c08d5d6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ac42875173118c9bc828915762e26546da17a865af5e69300d369b87d897307(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__319725327fe6232db2adf82b74ef745bfd71cf214fcf0a5e24bc59b5f7f604e2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5845ecc889bd0b8395154c739dfe563ca980edbbe2f7e62d67da99f9c0e31eec(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9fb19cf4f5cc4a3038bdc9b6f246a910411b4f92222cd7df4a408054eda712c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c8f1d3a4d3126ec9f7ac5fbe0d4b30062f9677e53bfaff8e57136f060872aa7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29165d578fc38e66d428879fea52635469851df5e598515682858d80a677b8b1(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcfcff064f557e5f4414463a8de23bfb1eb1deca05c3c6d776bae0a2aaa99262(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosPolicy.ContentProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fbed5f3b5ef47a74b00f33bfd1bf11d1f81542fecfbce72782c5855360c2b77(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a54361f822c01f265e4656d3b71018d14039d34733bf5c885202df3945eed4c5(
    *,
    arg: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    depth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    position: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b64ad32b57d59d78fa279c989a2a3fad03af1b3e1cf4fe384153c97ce70dca98(
    *,
    black_ip_list_expire_at: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_defense: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_drop_icmp: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_intelligence: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    finger_print_rule_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.FingerPrintRuleListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    intelligence_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    layer4_rule_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.Layer4RuleListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    port_rule_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.PortRuleListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    reflect_block_udp_port_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    region_block_country_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    region_block_province_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    source_block_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.SourceBlockListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    source_limit: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.SourceLimitProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    whiten_gfbr_nets: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66104ccdf13aa7fea1222ecd3f8d05a3f9b4ee73f63a9d86db2cd3acdf75025c(
    *,
    dst_port_end: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    dst_port_start: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    match_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    max_pkt_len: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    min_pkt_len: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    seq_no: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    src_port_end: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    src_port_start: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    finger_print_rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    offset: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payload_bytes: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rate_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1522823ff7e77eb49d98eef2f5f765d9a8df2411d54bb7faca31dc365681c64(
    *,
    action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    condition_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.ConditionListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    limited: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    match: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    method: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    priority: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08f228038c97b6903c53b332fdcb34789fd67a30e3eaccdd0d899e04497eb97b(
    *,
    dst_port_end: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    dst_port_start: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    seq_no: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    src_port_end: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    src_port_start: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    port_rule_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a57ef84960df701f8cb2b41eb73ca25d6cf9d6219bfaad82e98cbe658f267597(
    *,
    block_expire_seconds: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    every_seconds: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    exceed_limit_times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0619ad0aa126cd55c9101669a20b3339a306d037b24006fa143d4d435210c594(
    *,
    bps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    syn_bps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    syn_pps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94fc01cab990ae084e6b831d20304ea3093245fc03dc2e0be9a99238c2e3bd94(
    *,
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    action_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    black_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    content: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosPolicy.ContentProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    white_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
