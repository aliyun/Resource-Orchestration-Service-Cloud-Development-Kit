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


class OriginInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ddos.OriginInstance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DDoS::OriginInstance``, which is used to create an Anti-DDoS Origin instance.

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
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "OriginInstanceProps":
        return typing.cast("OriginInstanceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "OriginInstanceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__265016ef5a34183c91481b37cabaa4a7fad29db39527b3b066f0d751bd282236)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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


class RosOriginInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ddos.RosOriginInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DDoS::OriginInstance``, which is used to create an Anti-DDoS Origin instance.

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


__all__ = [
    "OriginInstance",
    "OriginInstanceProps",
    "RosOriginInstance",
    "RosOriginInstanceProps",
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

def _typecheckingstub__265016ef5a34183c91481b37cabaa4a7fad29db39527b3b066f0d751bd282236(
    value: OriginInstanceProps,
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
