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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class Image(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.Image",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudPhone::Image``, which is used to create a custom image for an Elastic Cloud Phone (ECP) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosImage``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ImageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bda8c2f1a5410bc09238432fce3f93d02d25b33b369dc21e76f5a1c190aaeba)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The time when the image was created.

        The time follows the ISO 8601 standard.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: The image description.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCategory")
    def attr_image_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageCategory: The image type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrImageId")
    def attr_image_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageId: The image ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageId"))

    @builtins.property
    @jsii.member(jsii_name="attrImageName")
    def attr_image_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageName: The image name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsSelfShared")
    def attr_is_self_shared(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsSelfShared"))

    @builtins.property
    @jsii.member(jsii_name="attrOsName")
    def attr_os_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OsName: The display name of the OS in Chinese.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOsName"))

    @builtins.property
    @jsii.member(jsii_name="attrOsNameEn")
    def attr_os_name_en(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OsNameEn: The display name of the OS in English.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOsNameEn"))

    @builtins.property
    @jsii.member(jsii_name="attrOsType")
    def attr_os_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OsType: The image OS.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOsType"))

    @builtins.property
    @jsii.member(jsii_name="attrPlatform")
    def attr_platform(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Platform: The OS distribution.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPlatform"))

    @builtins.property
    @jsii.member(jsii_name="attrProgress")
    def attr_progress(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Progress: The progress of image creation.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrUsage")
    def attr_usage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Usage: Whether the image is already running in the cloud phone instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUsage"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0cacef806422ed011d36b315f130e525e4d573f7154fc2d13710fcf19e48fdbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ac9ff8d07336ae7c5c9213a4dd15ae34bd0664615af21e11e337d4433d7792e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ImageProps":
        return typing.cast("ImageProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ImageProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__018de34c8da197201ed7efbae123b9a9b419e0dd31602822d99dc0b0d777c5c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecae2309a0bdc1b88d98405b42765a811ddf035185f8edcee14724bb83f59fd3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.ImageProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "description": "description",
        "image_name": "imageName",
    },
)
class ImageProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Image``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image

        :param instance_id: Property instanceId: The ID of the mobile phone instance.
        :param description: Property description: The image description. The description must be 2 to 256 characters in length. It cannot start with http:// or https://.
        :param image_name: Property imageName: The image name. The name must be 2 to 128 characters in length. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0da355614ab4e7ab9d8f569d9ff2e47d3973e81048744b7c99cb3763802104c)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument image_name", value=image_name, expected_type=type_hints["image_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
        if description is not None:
            self._values["description"] = description
        if image_name is not None:
            self._values["image_name"] = image_name

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the mobile phone instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The image description.

        The description must be 2 to 256 characters in length. It cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageName: The image name.

        The name must be 2 to 128 characters in length. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
        '''
        result = self._values.get("image_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ImageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class InstanceGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.InstanceGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudPhone::InstanceGroup``, which is used to create and start Elastic Cloud Phone (ECP) instances.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstanceGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-instancegroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86e84627ec74c6c4acdcc54ecaa9cfeb0657d070f4e8e7cdb507e349c2c27c52)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceIds: instance ids.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: oder id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateIps")
    def attr_private_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrivateIps: Private IP address list of created cloud phone instances.

        Only for VPC instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateIps"))

    @builtins.property
    @jsii.member(jsii_name="attrTradePrice")
    def attr_trade_price(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TradePrice: price.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTradePrice"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18aa48fb7229c6fdc66c01de11dfc0253fa91d9a966dc08c6be965bde1f42575)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98bfc268a739d1cee7f8c9fab75c0a1896063b642cd45ff8923080a83f65271d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "InstanceGroupProps":
        return typing.cast("InstanceGroupProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "InstanceGroupProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe1d3572a4a2dc0074425b6a4b4b274eb43bc3f21feb6b8202400910de28108d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__807ef7e6d3d787406b1a2e76ad6ad66ba313e38b505805e142d491b6a7ba3ec9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


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
        "period_unit": "periodUnit",
        "resolution": "resolution",
        "tag": "tag",
        "vnc_password": "vncPassword",
    },
)
class InstanceGroupProps:
    def __init__(
        self,
        *,
        image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        eip_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resolution: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[_ros_cdk_core_7adfd82f.RosTag, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        vnc_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``InstanceGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-instancegroup

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
        :param period_unit: Property periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
        :param resolution: Property resolution: You can use the DescribeInstanceTypes interface to query the list of resolutions supported by the current specification and select an appropriate resolution.
        :param tag: Property tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param vnc_password: Property vncPassword: Cloud phone VNC password. The password must be six characters long, and must contain only uppercase, lowercase English letters and Arabic numerals.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba537fc48c3fe21b4e23c8d15da8f3364547b74c62ddaeba68f917cd22827f6e)
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument amount", value=amount, expected_type=type_hints["amount"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument eip_bandwidth", value=eip_bandwidth, expected_type=type_hints["eip_bandwidth"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resolution", value=resolution, expected_type=type_hints["resolution"])
            check_type(argname="argument tag", value=tag, expected_type=type_hints["tag"])
            check_type(argname="argument vnc_password", value=vnc_password, expected_type=type_hints["vnc_password"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resolution is not None:
            self._values["resolution"] = resolution
        if tag is not None:
            self._values["tag"] = tag
        if vnc_password is not None:
            self._values["vnc_password"] = vnc_password

    @builtins.property
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property imageId: The image id.'''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceType: instance type.'''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property securityGroupId: Security group to create ecs instance.

        For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        '''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: vswitch id.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property amount: Specifies the number of ECS instances to create.Value range: 1~100 Default：1.'''
        result = self._values.get("amount")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Whether to pay automatically, the default is true.'''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether renew the fee automatically.

        When the parameter InstanceChargeType is PrePaid, it will take effect.
        Range of value:True: automatic renewal.
        False: no automatic renewal. Default value is False.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: Instance internet access charge type.'''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Description of instance.

        The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def eip_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property eipBandwidth: EIP bandwidth value, the value range is 1-200.

        Setting this parameter will automatically create an EIP instance
        corresponding to the bandwidth and bind the EIP instance to the
        cloud phone instance. When the instance is released, this EIP
        instance will be released and recycled together.
        '''
        result = self._values.get("eip_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must  start with a letter or Chinese in size, can contain numbers, "_" or ".", "-".'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairName: Cloud phone instance key pair name.

        The cloud phone key can be imported through the ImportKeyPair interface.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: Prepaid time period.

        While PeriodUnit is month, it could be 1, 2, 3, 6.
        While PeriodUnit is year, it could be from 1 to 5Default value is 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: Unit of prepaid time period, it could be Month/Year.

        Default value is Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resolution(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resolution: You can use the DescribeInstanceTypes interface to query the list of  resolutions supported by the current specification and select an appropriate resolution.'''
        result = self._values.get("resolution")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]]:
        '''Property tag: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tag")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]], result)

    @builtins.property
    def vnc_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vncPassword: Cloud phone VNC password.

        The password must be six characters long, and must contain only uppercase,
        lowercase English letters and Arabic numerals.
        '''
        result = self._values.get("vnc_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class KeyPair(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.KeyPair",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudPhone::KeyPair``, which is used to import the public key of a Rivest-Shamir-Adleman (RSA)-encrypted key pair that is generated by a third-party tool.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosKeyPair``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["KeyPairProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b19fff5a5a4ffe1b9a0dc4dc5ef2efd7799a000bffea35a8542129fc78136b1f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairFingerPrint")
    def attr_key_pair_finger_print(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KeyPairFingerPrint: The fingerprint of the key pair.

        The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairFingerPrint"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairName")
    def attr_key_pair_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KeyPairName: The name of the key pair.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5f368e8835f9cd7b03d2234193f35f22b3d9869f104b6560fe5497296b7d744)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3fbfb69f47dcc2f5338f677a75ccf03ee921d4d2593ed69db0e769b1f1d68b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "KeyPairProps":
        return typing.cast("KeyPairProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "KeyPairProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68765fb9792e6c5cc96a614bd3a0293fc30bd638d081a99dca50df6d5935aefd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c103f472bb13f82bca1216370e5dd4ca67fe897e9da2dc9b1ecac56d47d34998)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.KeyPairProps",
    jsii_struct_bases=[],
    name_mapping={"key_pair_name": "keyPairName", "public_key_body": "publicKeyBody"},
)
class KeyPairProps:
    def __init__(
        self,
        *,
        key_pair_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        public_key_body: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``KeyPair``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair

        :param key_pair_name: Property keyPairName: The name of the key pair. The name must be globally unique. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        :param public_key_body: Property publicKeyBody: The public key content of the key pair.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8e540f15f10894cf12acdc5c4840167fb3cd8f193c6dc3d6d6ded87e1924fd2)
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument public_key_body", value=public_key_body, expected_type=type_hints["public_key_body"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "key_pair_name": key_pair_name,
            "public_key_body": public_key_body,
        }

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property keyPairName: The name of the key pair.

        The name must be globally unique. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        '''
        result = self._values.get("key_pair_name")
        assert result is not None, "Required property 'key_pair_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def public_key_body(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property publicKeyBody: The public key content of the key pair.'''
        result = self._values.get("public_key_body")
        assert result is not None, "Required property 'public_key_body' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "KeyPairProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosImage(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.RosImage",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudPhone::Image``, which is used to create a custom image for an Elastic Cloud Phone (ECP) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Image`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosImageProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__893449982f4319cbc6595aa01932b37072b1b907d265b6bf6efb3b27017b8f42)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a9ff09915df6c541a008bc22f2448bccdc44348528f30ce07c11e9720eaf28e0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The time when the image was created. The time follows the ISO 8601 standard.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The image description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCategory")
    def attr_image_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageCategory: The image type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrImageId")
    def attr_image_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageId: The image ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageId"))

    @builtins.property
    @jsii.member(jsii_name="attrImageName")
    def attr_image_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageName: The image name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageName"))

    @builtins.property
    @jsii.member(jsii_name="attrIsSelfShared")
    def attr_is_self_shared(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsSelfShared"))

    @builtins.property
    @jsii.member(jsii_name="attrOsName")
    def attr_os_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OsName: The display name of the OS in Chinese.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOsName"))

    @builtins.property
    @jsii.member(jsii_name="attrOsNameEn")
    def attr_os_name_en(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OsNameEn: The display name of the OS in English.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOsNameEn"))

    @builtins.property
    @jsii.member(jsii_name="attrOsType")
    def attr_os_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OsType: The image OS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOsType"))

    @builtins.property
    @jsii.member(jsii_name="attrPlatform")
    def attr_platform(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Platform: The OS distribution.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPlatform"))

    @builtins.property
    @jsii.member(jsii_name="attrProgress")
    def attr_progress(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Progress: The progress of image creation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrUsage")
    def attr_usage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Usage: Whether the image is already running in the cloud phone instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUsage"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2554030fdcd6045366d6e6b4894c1c762a36bc2bb0c2b8d6b0a83ad00404bd2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the mobile phone instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__782b7aad2d2cd992c33d17d05587183883f4c08fbdcf3cdbc109f875131a0d2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The image description. The description must be 2 to 256 characters in length. It cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9948edfe157af2169a588b0a631ff29c75af9fb32e8de8b0c7360cb453f1bc1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="imageName")
    def image_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageName: The image name. The name must be 2 to 128 characters in length. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageName"))

    @image_name.setter
    def image_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4e8fedcfebe2ef6f6a599fd2fc9a862313b742b0027098132c9c46bcb5e912c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.RosImageProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "description": "description",
        "image_name": "imageName",
    },
)
class RosImageProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosImage``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-image

        :param instance_id: 
        :param description: 
        :param image_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7be2a2ee91945efa8ca2c6d9a8ced684bbc1fa030260197796176f245c1396ee)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument image_name", value=image_name, expected_type=type_hints["image_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
        }
        if description is not None:
            self._values["description"] = description
        if image_name is not None:
            self._values["image_name"] = image_name

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the mobile phone instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The image description. The description must be 2 to 256 characters in length. It cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageName: The image name. The name must be 2 to 128 characters in length. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
        '''
        result = self._values.get("image_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosImageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstanceGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.RosInstanceGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudPhone::InstanceGroup``, which is used to create and start Elastic Cloud Phone (ECP) instances.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``InstanceGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-instancegroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea25404931bd356573d9d1d039004321c36760647ca90b3e435a68f8eb63173a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a2ec6223d697b5ed2d76c683edcc0f5c566bd1979a073fa8ce81e73da1fb0a1b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceIds: instance ids
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: oder id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateIps")
    def attr_private_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateIps: Private IP address list of created cloud phone instances. Only for VPC instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateIps"))

    @builtins.property
    @jsii.member(jsii_name="attrTradePrice")
    def attr_trade_price(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TradePrice: price
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTradePrice"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7362c0bb99c64bb68ad4a3f7118f69bd23f8bc664a649d63892da2078ef3236f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageId: The image id
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d77a027d4709dca5b8bd90adfedc7833365d8dce40e353c3f185328e0e5bcffd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceType: instance type
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85f2a18fc3b4ec5032fef9b6d5b156b96580f23c1ca100ea371d9e086190f4d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__258d84372ddf137cadee363c986fc5163dddd050ebc0a9b54a2c98953650bad1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: vswitch id
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbb9ef4778d23dc567bf365912b115e9f48db1f05774df043013e376aa40ec5b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="amount")
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        amount: Specifies the number of ECS instances to create.Value range: 1~100
        Default：1
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "amount"))

    @amount.setter
    def amount(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__727f508be80e60e793c9d6e1903b13b8548ba41e9860c6c5e2694dd616ff9b15)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "amount", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to pay automatically, the default is true
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a86b9047fd7efdc38e6b7d6dcc8599b729f6cb891837822e59789eb71ff93cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether renew the fee automatically.
        When the parameter InstanceChargeType is PrePaid, it will take effect.
        Range of value:True: automatic renewal.
        False: no automatic renewal. Default value is False.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85d913c334e8222a9093a1609f91e3aab2008c1ed2a0e88a1e1fb55ed550f827)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType: Instance internet access charge type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09be4e54451cabb3ae51a53a198bee60d72be97cb8a0d6370b1ef3adf3b813ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: Description of instance.
        The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bb7fdd45228b1f55b57c512a5c646d31f6255209421c851c21d1359ed355b86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="eipBandwidth")
    def eip_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        eipBandwidth: EIP bandwidth value, the value range is 1-200.
        Setting this parameter will automatically create an EIP instance
        corresponding to the bandwidth and bind the EIP instance to the
        cloud phone instance. When the instance is released, this EIP
        instance will be released and recycled together.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "eipBandwidth"))

    @eip_bandwidth.setter
    def eip_bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9dd3483640f62ec196b050a90cee2d3001c0a7e2b70dd4682f05ee54cae5d59d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eipBandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must
        start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e314d0f333d065a81867d9eefba4ac6afb5e8abb0d864048f64e28f1a4d9ceb5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        keyPairName: Cloud phone instance key pair name.
        The cloud phone key can be imported through the ImportKeyPair interface.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbebe80a7e2d1f2a423a733567f7e1b027f1d9ec05c6f0461c2be11b7556f32d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairName", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
        While PeriodUnit is year, it could be from 1 to 5Default value is 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f03acd6205604c2784fd8a8a192867e1fafc8be8ad3e0e71962ef869a62ac1b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18f30e1c6e618468ec1870d05dc9477b2db677fa8b582f65b59c4a7f3983a2d6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="resolution")
    def resolution(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resolution: You can use the DescribeInstanceTypes interface to query the list of
        resolutions supported by the current specification and select an appropriate resolution.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resolution"))

    @resolution.setter
    def resolution(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e14cb478afd40bd9cf2b9df8360e8f4bd4c45f34e690c1d3fe16f01009c61413)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resolution", value)

    @builtins.property
    @jsii.member(jsii_name="tag")
    def tag(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]]:
        '''
        :Property: tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]], jsii.get(self, "tag"))

    @tag.setter
    def tag(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d9c79b53050ec09facbdab6b8dcfbf7fff5fb09f29a3fcacfdaf65959bfb06c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tag", value)

    @builtins.property
    @jsii.member(jsii_name="vncPassword")
    def vnc_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vncPassword: Cloud phone VNC password.
        The password must be six characters long, and must contain only uppercase,
        lowercase English letters and Arabic numerals.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vncPassword"))

    @vnc_password.setter
    def vnc_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0e4aa61889d9bedbef7c310f17d0a5b1b66a0be1cb18da12e5b0b1b0984c869)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__032b926c9c1778c388cefdafa9f3b906cc55ca1879ebd2e285f38752b0b932b1)
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
        "period_unit": "periodUnit",
        "resolution": "resolution",
        "tag": "tag",
        "vnc_password": "vncPassword",
    },
)
class RosInstanceGroupProps:
    def __init__(
        self,
        *,
        image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        eip_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resolution: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[_ros_cdk_core_7adfd82f.RosTag, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        vnc_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstanceGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-instancegroup

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
        :param period_unit: 
        :param resolution: 
        :param tag: 
        :param vnc_password: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4948934fe5abb62adddfcb305725259073df46b17922bf8fdfa9a13afc7488fe)
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument amount", value=amount, expected_type=type_hints["amount"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument eip_bandwidth", value=eip_bandwidth, expected_type=type_hints["eip_bandwidth"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resolution", value=resolution, expected_type=type_hints["resolution"])
            check_type(argname="argument tag", value=tag, expected_type=type_hints["tag"])
            check_type(argname="argument vnc_password", value=vnc_password, expected_type=type_hints["vnc_password"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resolution is not None:
            self._values["resolution"] = resolution
        if tag is not None:
            self._values["tag"] = tag
        if vnc_password is not None:
            self._values["vnc_password"] = vnc_password

    @builtins.property
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageId: The image id
        '''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceType: instance type
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        '''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: vswitch id
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        amount: Specifies the number of ECS instances to create.Value range: 1~100
        Default：1
        '''
        result = self._values.get("amount")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to pay automatically, the default is true
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Whether renew the fee automatically.
        When the parameter InstanceChargeType is PrePaid, it will take effect.
        Range of value:True: automatic renewal.
        False: no automatic renewal. Default value is False.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType: Instance internet access charge type.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: Description of instance.
        The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def eip_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        eipBandwidth: EIP bandwidth value, the value range is 1-200.
        Setting this parameter will automatically create an EIP instance
        corresponding to the bandwidth and bind the EIP instance to the
        cloud phone instance. When the instance is released, this EIP
        instance will be released and recycled together.
        '''
        result = self._values.get("eip_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must
        start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        keyPairName: Cloud phone instance key pair name.
        The cloud phone key can be imported through the ImportKeyPair interface.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
        While PeriodUnit is year, it could be from 1 to 5Default value is 1.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodUnit: Unit of prepaid time period, it could be Month/Year. Default value is Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resolution(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resolution: You can use the DescribeInstanceTypes interface to query the list of
        resolutions supported by the current specification and select an appropriate resolution.
        '''
        result = self._values.get("resolution")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]]:
        '''
        :Property: tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tag")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]], result)

    @builtins.property
    def vnc_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vncPassword: Cloud phone VNC password.
        The password must be six characters long, and must contain only uppercase,
        lowercase English letters and Arabic numerals.
        '''
        result = self._values.get("vnc_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKeyPair(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.RosKeyPair",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudPhone::KeyPair``, which is used to import the public key of a Rivest-Shamir-Adleman (RSA)-encrypted key pair that is generated by a third-party tool.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``KeyPair`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosKeyPairProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4dfb9cbb972b696ac7ae5b1309e18ec3d97f9e643154c1e1191925056476eb1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a5a978a5e54b1d25f978ed96e4189d4320a8d641637850b224191e5314e7166f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairFingerPrint")
    def attr_key_pair_finger_print(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairFingerPrint"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairName")
    def attr_key_pair_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeyPairName: The name of the key pair.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__243bd67dcb8bd0c829ce0dbf479039b88f622cc359807e136059052ad7d651ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: keyPairName: The name of the key pair. The name must be globally unique. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d270418f797825d65e5d5cc142266d0b390f85f9026e7a98a7c4df7993f0bfec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairName", value)

    @builtins.property
    @jsii.member(jsii_name="publicKeyBody")
    def public_key_body(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: publicKeyBody: The public key content of the key pair.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "publicKeyBody"))

    @public_key_body.setter
    def public_key_body(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96101b18987e683213e73c05db84d663b3e4b3f37ed88a9613eead765dcd40cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "publicKeyBody", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.RosKeyPairProps",
    jsii_struct_bases=[],
    name_mapping={"key_pair_name": "keyPairName", "public_key_body": "publicKeyBody"},
)
class RosKeyPairProps:
    def __init__(
        self,
        *,
        key_pair_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        public_key_body: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosKeyPair``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-keypair

        :param key_pair_name: 
        :param public_key_body: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12ee80d6283fbec3448de4a8dbf1ef6e878c4ed4c17f0d99ad7bd2cf4bd03ee8)
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument public_key_body", value=public_key_body, expected_type=type_hints["public_key_body"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "key_pair_name": key_pair_name,
            "public_key_body": public_key_body,
        }

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: keyPairName: The name of the key pair. The name must be globally unique. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        '''
        result = self._values.get("key_pair_name")
        assert result is not None, "Required property 'key_pair_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def public_key_body(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: publicKeyBody: The public key content of the key pair.
        '''
        result = self._values.get("public_key_body")
        assert result is not None, "Required property 'public_key_body' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosKeyPairProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRunCommand(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.RosRunCommand",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CloudPhone::RunCommand``, which is used to run a command on Elastic Cloud Phone (ECP) instances.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``RunCommand`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRunCommandProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b013ee8f0cb9122dfcc2a5645611cff15416d6cf6b2c574fd92c5f18200e49d1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3be436bf58b5ae5a59ef9fb51bca36f9b26748e3096e7f98528334fa2267a29c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="command")
    def command(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        command: The command to be executed.
        The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium line (-).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "command"))

    @command.setter
    def command(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0193e7586b96e2a3467f7a5f382544e2681674571f3dfee4920a68028ed79071)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "command", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed517333fb004af0bd92f0e654552f5c73a1063d574a792d449aea296d194e0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceIds")
    def instance_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property:

        instanceIds: ID of the instance executing the command.
        Range of n: 1 ~ 10
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "instanceIds"))

    @instance_ids.setter
    def instance_ids(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9294cae49c46ceebc56f978dfb9608d380236ca317b4920e428f8c5a5e0c670a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceIds", value)

    @builtins.property
    @jsii.member(jsii_name="runAgainOn")
    def run_again_on(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: runAgainOn: The stage of executing the command again.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "runAgainOn"))

    @run_again_on.setter
    def run_again_on(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40c76ebfd05f80b1cec6eed30e23bc334b04e1d0b4bfc750c2f241233127d6d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "runAgainOn", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.RosRunCommandProps",
    jsii_struct_bases=[],
    name_mapping={
        "command": "command",
        "instance_ids": "instanceIds",
        "run_again_on": "runAgainOn",
    },
)
class RosRunCommandProps:
    def __init__(
        self,
        *,
        command: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        run_again_on: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosRunCommand``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand

        :param command: 
        :param instance_ids: 
        :param run_again_on: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b21511b5eab13592821242a751249cdb92420de39804210f8a841745b408c29)
            check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
            check_type(argname="argument run_again_on", value=run_again_on, expected_type=type_hints["run_again_on"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "command": command,
            "instance_ids": instance_ids,
        }
        if run_again_on is not None:
            self._values["run_again_on"] = run_again_on

    @builtins.property
    def command(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        command: The command to be executed.
        The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium line (-).
        '''
        result = self._values.get("command")
        assert result is not None, "Required property 'command' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property:

        instanceIds: ID of the instance executing the command.
        Range of n: 1 ~ 10
        '''
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def run_again_on(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: runAgainOn: The stage of executing the command again.
        '''
        result = self._values.get("run_again_on")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRunCommandProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RunCommand(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudphone.RunCommand",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CloudPhone::RunCommand``, which is used to run a command on Elastic Cloud Phone (ECP) instances.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRunCommand``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RunCommandProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4105bf9f96633712abb8cfabd61c1722bb5bf1af89244e973e80ad983653498)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b1b958720f40422ea17a07c6a227f63e6bb48beb805a3a665113b20cd2bb16a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0aa4ade56f7cd7a8656a5c3e51d15036f475a89e2c1a5bd81894987a9278f15)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "RunCommandProps":
        return typing.cast("RunCommandProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "RunCommandProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b51254aac1626a3c504dacb575485a0a155dfb20997ec08d37d302aec88d1b91)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4bf21043f0e95f72d81aa315d3705ad1de67cbf597f0bbe10d7d3502273aeb8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudphone.RunCommandProps",
    jsii_struct_bases=[],
    name_mapping={
        "command": "command",
        "instance_ids": "instanceIds",
        "run_again_on": "runAgainOn",
    },
)
class RunCommandProps:
    def __init__(
        self,
        *,
        command: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        run_again_on: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RunCommand``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand

        :param command: Property command: The command to be executed. The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium line (-).
        :param instance_ids: Property instanceIds: ID of the instance executing the command. Range of n: 1 ~ 10
        :param run_again_on: Property runAgainOn: The stage of executing the command again.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb34776e3a1ad4cfd015cf197264f8ebf81091cee30d4dfd258306686a0df904)
            check_type(argname="argument command", value=command, expected_type=type_hints["command"])
            check_type(argname="argument instance_ids", value=instance_ids, expected_type=type_hints["instance_ids"])
            check_type(argname="argument run_again_on", value=run_again_on, expected_type=type_hints["run_again_on"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "command": command,
            "instance_ids": instance_ids,
        }
        if run_again_on is not None:
            self._values["run_again_on"] = run_again_on

    @builtins.property
    def command(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property command: The command to be executed.

        The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (/), colon (:), medium line (-).
        '''
        result = self._values.get("command")
        assert result is not None, "Required property 'command' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property instanceIds: ID of the instance executing the command.

        Range of n: 1 ~ 10
        '''
        result = self._values.get("instance_ids")
        assert result is not None, "Required property 'instance_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def run_again_on(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property runAgainOn: The stage of executing the command again.'''
        result = self._values.get("run_again_on")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RunCommandProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Image",
    "ImageProps",
    "InstanceGroup",
    "InstanceGroupProps",
    "KeyPair",
    "KeyPairProps",
    "RosImage",
    "RosImageProps",
    "RosInstanceGroup",
    "RosInstanceGroupProps",
    "RosKeyPair",
    "RosKeyPairProps",
    "RosRunCommand",
    "RosRunCommandProps",
    "RunCommand",
    "RunCommandProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__8bda8c2f1a5410bc09238432fce3f93d02d25b33b369dc21e76f5a1c190aaeba(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ImageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0cacef806422ed011d36b315f130e525e4d573f7154fc2d13710fcf19e48fdbb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ac9ff8d07336ae7c5c9213a4dd15ae34bd0664615af21e11e337d4433d7792e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__018de34c8da197201ed7efbae123b9a9b419e0dd31602822d99dc0b0d777c5c5(
    value: ImageProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecae2309a0bdc1b88d98405b42765a811ddf035185f8edcee14724bb83f59fd3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0da355614ab4e7ab9d8f569d9ff2e47d3973e81048744b7c99cb3763802104c(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86e84627ec74c6c4acdcc54ecaa9cfeb0657d070f4e8e7cdb507e349c2c27c52(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18aa48fb7229c6fdc66c01de11dfc0253fa91d9a966dc08c6be965bde1f42575(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98bfc268a739d1cee7f8c9fab75c0a1896063b642cd45ff8923080a83f65271d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe1d3572a4a2dc0074425b6a4b4b274eb43bc3f21feb6b8202400910de28108d(
    value: InstanceGroupProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__807ef7e6d3d787406b1a2e76ad6ad66ba313e38b505805e142d491b6a7ba3ec9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba537fc48c3fe21b4e23c8d15da8f3364547b74c62ddaeba68f917cd22827f6e(
    *,
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eip_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resolution: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[_ros_cdk_core_7adfd82f.RosTag, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    vnc_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b19fff5a5a4ffe1b9a0dc4dc5ef2efd7799a000bffea35a8542129fc78136b1f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[KeyPairProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5f368e8835f9cd7b03d2234193f35f22b3d9869f104b6560fe5497296b7d744(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3fbfb69f47dcc2f5338f677a75ccf03ee921d4d2593ed69db0e769b1f1d68b3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68765fb9792e6c5cc96a614bd3a0293fc30bd638d081a99dca50df6d5935aefd(
    value: KeyPairProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c103f472bb13f82bca1216370e5dd4ca67fe897e9da2dc9b1ecac56d47d34998(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8e540f15f10894cf12acdc5c4840167fb3cd8f193c6dc3d6d6ded87e1924fd2(
    *,
    key_pair_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    public_key_body: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__893449982f4319cbc6595aa01932b37072b1b907d265b6bf6efb3b27017b8f42(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosImageProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9ff09915df6c541a008bc22f2448bccdc44348528f30ce07c11e9720eaf28e0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2554030fdcd6045366d6e6b4894c1c762a36bc2bb0c2b8d6b0a83ad00404bd2a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__782b7aad2d2cd992c33d17d05587183883f4c08fbdcf3cdbc109f875131a0d2b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9948edfe157af2169a588b0a631ff29c75af9fb32e8de8b0c7360cb453f1bc1b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4e8fedcfebe2ef6f6a599fd2fc9a862313b742b0027098132c9c46bcb5e912c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7be2a2ee91945efa8ca2c6d9a8ced684bbc1fa030260197796176f245c1396ee(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea25404931bd356573d9d1d039004321c36760647ca90b3e435a68f8eb63173a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2ec6223d697b5ed2d76c683edcc0f5c566bd1979a073fa8ce81e73da1fb0a1b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7362c0bb99c64bb68ad4a3f7118f69bd23f8bc664a649d63892da2078ef3236f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d77a027d4709dca5b8bd90adfedc7833365d8dce40e353c3f185328e0e5bcffd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85f2a18fc3b4ec5032fef9b6d5b156b96580f23c1ca100ea371d9e086190f4d3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__258d84372ddf137cadee363c986fc5163dddd050ebc0a9b54a2c98953650bad1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbb9ef4778d23dc567bf365912b115e9f48db1f05774df043013e376aa40ec5b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__727f508be80e60e793c9d6e1903b13b8548ba41e9860c6c5e2694dd616ff9b15(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a86b9047fd7efdc38e6b7d6dcc8599b729f6cb891837822e59789eb71ff93cb(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85d913c334e8222a9093a1609f91e3aab2008c1ed2a0e88a1e1fb55ed550f827(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09be4e54451cabb3ae51a53a198bee60d72be97cb8a0d6370b1ef3adf3b813ee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bb7fdd45228b1f55b57c512a5c646d31f6255209421c851c21d1359ed355b86(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9dd3483640f62ec196b050a90cee2d3001c0a7e2b70dd4682f05ee54cae5d59d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e314d0f333d065a81867d9eefba4ac6afb5e8abb0d864048f64e28f1a4d9ceb5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbebe80a7e2d1f2a423a733567f7e1b027f1d9ec05c6f0461c2be11b7556f32d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f03acd6205604c2784fd8a8a192867e1fafc8be8ad3e0e71962ef869a62ac1b3(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18f30e1c6e618468ec1870d05dc9477b2db677fa8b582f65b59c4a7f3983a2d6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e14cb478afd40bd9cf2b9df8360e8f4bd4c45f34e690c1d3fe16f01009c61413(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d9c79b53050ec09facbdab6b8dcfbf7fff5fb09f29a3fcacfdaf65959bfb06c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, _ros_cdk_core_7adfd82f.RosTag]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0e4aa61889d9bedbef7c310f17d0a5b1b66a0be1cb18da12e5b0b1b0984c869(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__032b926c9c1778c388cefdafa9f3b906cc55ca1879ebd2e285f38752b0b932b1(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4948934fe5abb62adddfcb305725259073df46b17922bf8fdfa9a13afc7488fe(
    *,
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eip_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resolution: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[_ros_cdk_core_7adfd82f.RosTag, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    vnc_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4dfb9cbb972b696ac7ae5b1309e18ec3d97f9e643154c1e1191925056476eb1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosKeyPairProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5a978a5e54b1d25f978ed96e4189d4320a8d641637850b224191e5314e7166f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__243bd67dcb8bd0c829ce0dbf479039b88f622cc359807e136059052ad7d651ff(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d270418f797825d65e5d5cc142266d0b390f85f9026e7a98a7c4df7993f0bfec(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96101b18987e683213e73c05db84d663b3e4b3f37ed88a9613eead765dcd40cc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12ee80d6283fbec3448de4a8dbf1ef6e878c4ed4c17f0d99ad7bd2cf4bd03ee8(
    *,
    key_pair_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    public_key_body: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b013ee8f0cb9122dfcc2a5645611cff15416d6cf6b2c574fd92c5f18200e49d1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRunCommandProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3be436bf58b5ae5a59ef9fb51bca36f9b26748e3096e7f98528334fa2267a29c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0193e7586b96e2a3467f7a5f382544e2681674571f3dfee4920a68028ed79071(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed517333fb004af0bd92f0e654552f5c73a1063d574a792d449aea296d194e0d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9294cae49c46ceebc56f978dfb9608d380236ca317b4920e428f8c5a5e0c670a(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40c76ebfd05f80b1cec6eed30e23bc334b04e1d0b4bfc750c2f241233127d6d7(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b21511b5eab13592821242a751249cdb92420de39804210f8a841745b408c29(
    *,
    command: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    run_again_on: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4105bf9f96633712abb8cfabd61c1722bb5bf1af89244e973e80ad983653498(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RunCommandProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b1b958720f40422ea17a07c6a227f63e6bb48beb805a3a665113b20cd2bb16a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0aa4ade56f7cd7a8656a5c3e51d15036f475a89e2c1a5bd81894987a9278f15(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b51254aac1626a3c504dacb575485a0a155dfb20997ec08d37d302aec88d1b91(
    value: RunCommandProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4bf21043f0e95f72d81aa315d3705ad1de67cbf597f0bbe10d7d3502273aeb8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb34776e3a1ad4cfd015cf197264f8ebf81091cee30d4dfd258306686a0df904(
    *,
    command: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    run_again_on: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
