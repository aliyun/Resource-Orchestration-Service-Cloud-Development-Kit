'''
## Aliyun ROS CLOUDPHONE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CLOUDPHONE from '@alicloud/ros-cdk-cloudphone';
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


class InstanceGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.InstanceGroup",
):
    '''A ROS resource type:  ``ALIYUN::CloudPhone::InstanceGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CloudPhone::InstanceGroup``.

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
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceIds: instance ids.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: oder id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTradePrice")
    def attr_trade_price(self) -> ros_cdk_core.IResolvable:
        '''Attribute TradePrice: price.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTradePrice"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.InstanceGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "image_id": "imageId",
        "instance_type": "instanceType",
        "security_group_id": "securityGroupId",
        "v_switch_id": "vSwitchId",
        "amount": "amount",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "charge_type": "chargeType",
        "description": "description",
        "eip_bandwidth": "eipBandwidth",
        "instance_name": "instanceName",
        "key_pair_name": "keyPairName",
        "period": "period",
        "resolution": "resolution",
        "tag": "tag",
        "vnc_password": "vncPassword",
    },
)
class InstanceGroupProps:
    def __init__(
        self,
        *,
        image_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        security_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        amount: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        eip_bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        resolution: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tag: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]] = None,
        vnc_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CloudPhone::InstanceGroup``.

        :param image_id: Property imageId: The image id.
        :param instance_type: Property instanceType: instance type.
        :param security_group_id: Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        :param v_switch_id: Property vSwitchId: vswitch id.
        :param amount: Property amount: Specifies the number of ECS instances to create.Value range: 1~100 Default：1.
        :param auto_pay: Property autoPay: Whether to pay automatically, the default is true.
        :param auto_renew: Property autoRenew: Whether renew the fee automatically. When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal. False: no automatic renewal. Default value is False.
        :param charge_type: Property chargeType: Instance internet access charge type.
        :param description: Property description: Description of instance. The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
        :param eip_bandwidth: Property eipBandwidth: EIP bandwidth value, the value range is 1-200. Setting this parameter will automatically create an EIP instance corresponding to the bandwidth and bind the EIP instance to the cloud phone instance. When the instance is released, this EIP instance will be released and recycled together.
        :param instance_name: Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, "_" or ".", "-".
        :param key_pair_name: Property keyPairName: Cloud phone instance key pair name. The cloud phone key can be imported through the ImportKeyPair interface.
        :param period: Property period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6. While PeriodUnit is year, it could be from 1 to 5Default value is 1.
        :param resolution: Property resolution: You can use the DescribeInstanceTypes interface to query the list of resolutions supported by the current specification and select an appropriate resolution.
        :param tag: Property tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param vnc_password: Property vncPassword: Cloud phone VNC password. The password must be six characters long, and must contain only uppercase, lowercase English letters and Arabic numerals.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "image_id": image_id,
            "instance_type": instance_type,
            "security_group_id": security_group_id,
            "v_switch_id": v_switch_id,
        }
        if amount is not None:
            self._values["amount"] = amount
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if description is not None:
            self._values["description"] = description
        if eip_bandwidth is not None:
            self._values["eip_bandwidth"] = eip_bandwidth
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if period is not None:
            self._values["period"] = period
        if resolution is not None:
            self._values["resolution"] = resolution
        if tag is not None:
            self._values["tag"] = tag
        if vnc_password is not None:
            self._values["vnc_password"] = vnc_password

    @builtins.property
    def image_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property imageId: The image id.'''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceType: instance type.'''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def security_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property securityGroupId: Security group to create ecs instance.

        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        '''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: vswitch id.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property amount: Specifies the number of ECS instances to create.Value range: 1~100 Default：1.'''
        result = self._values.get("amount")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPay: Whether to pay automatically, the default is true.'''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: Whether renew the fee automatically.

        When the parameter InstanceChargeType is PrePaid, it will take effect.
        Range of value:True: automatic renewal.
        False: no automatic renewal. Default value is False.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property chargeType: Instance internet access charge type.'''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of instance.

        The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def eip_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property eipBandwidth: EIP bandwidth value, the value range is 1-200.

        Setting this parameter will automatically create an EIP instance
        corresponding to the bandwidth and bind the EIP instance to the
        cloud phone instance. When the instance is released, this EIP
        instance will be released and recycled together.
        '''
        result = self._values.get("eip_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must  start with a letter or Chinese in size, can contain numbers, "_" or ".", "-".'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property keyPairName: Cloud phone instance key pair name.

        The cloud phone key can be imported through the ImportKeyPair interface.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: Prepaid time period.

        While PeriodUnit is month, it could be 1, 2, 3, 6.
        While PeriodUnit is year, it could be from 1 to 5Default value is 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resolution(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resolution: You can use the DescribeInstanceTypes interface to query the list of  resolutions supported by the current specification and select an appropriate resolution.'''
        result = self._values.get("resolution")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tag(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]]:
        '''Property tag: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tag")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]], result)

    @builtins.property
    def vnc_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vncPassword: Cloud phone VNC password.

        The password must be six characters long, and must contain only uppercase,
        lowercase English letters and Arabic numerals.
        '''
        result = self._values.get("vnc_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstanceGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.RosInstanceGroup",
):
    '''A ROS template type:  ``ALIYUN::CloudPhone::InstanceGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CloudPhone::InstanceGroup``.

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
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceIds: instance ids
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: oder id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTradePrice")
    def attr_trade_price(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TradePrice: price
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTradePrice"))

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
    @jsii.member(jsii_name="imageId")
    def image_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: imageId: The image id
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "imageId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceType")
    def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceType: instance type
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: vswitch id
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="amount")
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        amount: Specifies the number of ECS instances to create.Value range: 1~100
        Default：1
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "amount"))

    @amount.setter
    def amount(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "amount", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: Whether to pay automatically, the default is true
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether renew the fee automatically.
        When the parameter InstanceChargeType is PrePaid, it will take effect.
        Range of value:True: automatic renewal.
        False: no automatic renewal. Default value is False.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: chargeType: Instance internet access charge type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: Description of instance.
        The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="eipBandwidth")
    def eip_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        eipBandwidth: EIP bandwidth value, the value range is 1-200.
        Setting this parameter will automatically create an EIP instance
        corresponding to the bandwidth and bind the EIP instance to the
        cloud phone instance. When the instance is released, this EIP
        instance will be released and recycled together.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "eipBandwidth"))

    @eip_bandwidth.setter
    def eip_bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "eipBandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must
        start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        keyPairName: Cloud phone instance key pair name.
        The cloud phone key can be imported through the ImportKeyPair interface.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "keyPairName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
        While PeriodUnit is year, it could be from 1 to 5Default value is 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resolution")
    def resolution(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        resolution: You can use the DescribeInstanceTypes interface to query the list of
        resolutions supported by the current specification and select an appropriate resolution.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resolution"))

    @resolution.setter
    def resolution(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resolution", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tag")
    def tag(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]]:
        '''
        :Property: tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]], jsii.get(self, "tag"))

    @tag.setter
    def tag(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]],
    ) -> None:
        jsii.set(self, "tag", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vncPassword")
    def vnc_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vncPassword: Cloud phone VNC password.
        The password must be six characters long, and must contain only uppercase,
        lowercase English letters and Arabic numerals.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vncPassword"))

    @vnc_password.setter
    def vnc_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vncPassword", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cloudphone.RosInstanceGroup.TagProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagProperty:
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
            return "TagProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.RosInstanceGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "image_id": "imageId",
        "instance_type": "instanceType",
        "security_group_id": "securityGroupId",
        "v_switch_id": "vSwitchId",
        "amount": "amount",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "charge_type": "chargeType",
        "description": "description",
        "eip_bandwidth": "eipBandwidth",
        "instance_name": "instanceName",
        "key_pair_name": "keyPairName",
        "period": "period",
        "resolution": "resolution",
        "tag": "tag",
        "vnc_password": "vncPassword",
    },
)
class RosInstanceGroupProps:
    def __init__(
        self,
        *,
        image_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        security_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        amount: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        eip_bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        resolution: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tag: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]] = None,
        vnc_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CloudPhone::InstanceGroup``.

        :param image_id: 
        :param instance_type: 
        :param security_group_id: 
        :param v_switch_id: 
        :param amount: 
        :param auto_pay: 
        :param auto_renew: 
        :param charge_type: 
        :param description: 
        :param eip_bandwidth: 
        :param instance_name: 
        :param key_pair_name: 
        :param period: 
        :param resolution: 
        :param tag: 
        :param vnc_password: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "image_id": image_id,
            "instance_type": instance_type,
            "security_group_id": security_group_id,
            "v_switch_id": v_switch_id,
        }
        if amount is not None:
            self._values["amount"] = amount
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if description is not None:
            self._values["description"] = description
        if eip_bandwidth is not None:
            self._values["eip_bandwidth"] = eip_bandwidth
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if period is not None:
            self._values["period"] = period
        if resolution is not None:
            self._values["resolution"] = resolution
        if tag is not None:
            self._values["tag"] = tag
        if vnc_password is not None:
            self._values["vnc_password"] = vnc_password

    @builtins.property
    def image_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: imageId: The image id
        '''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceType: instance type
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def security_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        '''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: vswitch id
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        amount: Specifies the number of ECS instances to create.Value range: 1~100
        Default：1
        '''
        result = self._values.get("amount")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: Whether to pay automatically, the default is true
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether renew the fee automatically.
        When the parameter InstanceChargeType is PrePaid, it will take effect.
        Range of value:True: automatic renewal.
        False: no automatic renewal. Default value is False.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: chargeType: Instance internet access charge type.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: Description of instance.
        The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def eip_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        eipBandwidth: EIP bandwidth value, the value range is 1-200.
        Setting this parameter will automatically create an EIP instance
        corresponding to the bandwidth and bind the EIP instance to the
        cloud phone instance. When the instance is released, this EIP
        instance will be released and recycled together.
        '''
        result = self._values.get("eip_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must
        start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        keyPairName: Cloud phone instance key pair name.
        The cloud phone key can be imported through the ImportKeyPair interface.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
        While PeriodUnit is year, it could be from 1 to 5Default value is 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resolution(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        resolution: You can use the DescribeInstanceTypes interface to query the list of
        resolutions supported by the current specification and select an appropriate resolution.
        '''
        result = self._values.get("resolution")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tag(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]]:
        '''
        :Property: tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tag")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, ros_cdk_core.RosTag]]]], result)

    @builtins.property
    def vnc_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        vncPassword: Cloud phone VNC password.
        The password must be six characters long, and must contain only uppercase,
        lowercase English letters and Arabic numerals.
        '''
        result = self._values.get("vnc_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "InstanceGroup",
    "InstanceGroupProps",
    "RosInstanceGroup",
    "RosInstanceGroupProps",
]

publication.publish()
