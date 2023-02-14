'''
## Aliyun ROS IOT Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as IOT from '@alicloud/ros-cdk-iot';
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


class Device(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.Device",
):
    '''A ROS resource type:  ``ALIYUN::IOT::Device``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DeviceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::Device``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ac566b5b80162572f6151c0268e9d9fc51b028483e4d8f38ee5f7c762e8f27d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDeviceName")
    def attr_device_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DeviceName: Device name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeviceName"))

    @builtins.property
    @jsii.member(jsii_name="attrDeviceSecret")
    def attr_device_secret(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DeviceSecret: Device key.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeviceSecret"))

    @builtins.property
    @jsii.member(jsii_name="attrIotId")
    def attr_iot_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.

        Description Keep, do not leak.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIotId"))

    @builtins.property
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IotInstanceId: IOT instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIotInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IpAddress: IP address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrNickName")
    def attr_nick_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NickName: Nick name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNickName"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NodeType: Node type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeType"))

    @builtins.property
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProductKey: Product key.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProductKey"))

    @builtins.property
    @jsii.member(jsii_name="attrProductName")
    def attr_product_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProductName: Product name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProductName"))


class DeviceGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.DeviceGroup",
):
    '''A ROS resource type:  ``ALIYUN::IOT::DeviceGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DeviceGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::DeviceGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92d033fee69306c579accd123fdc1756c474e5bbf5fd77fa5210ec0cec3d6c29)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupId: Packet, ID, System for the globally unique identifier generated packet.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IotInstanceId: IOT instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIotInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.DeviceGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "group_desc": "groupDesc",
        "iot_instance_id": "iotInstanceId",
        "super_group_id": "superGroupId",
    },
)
class DeviceGroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        super_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::DeviceGroup``.

        :param group_name: Property groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        :param group_desc: Property groupDesc: The description of the group. You can enter a description with up to 100 characters.
        :param iot_instance_id: Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        :param super_group_id: Property superGroupId: The ID of the parent group. If you want to create a first-level group, do not enter this parameter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__229087b60a164f1eb26fc74077e7bac7a523f12e4c4a8aab8f775f6ce25ec3bf)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument group_desc", value=group_desc, expected_type=type_hints["group_desc"])
            check_type(argname="argument iot_instance_id", value=iot_instance_id, expected_type=type_hints["iot_instance_id"])
            check_type(argname="argument super_group_id", value=super_group_id, expected_type=type_hints["super_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
        }
        if group_desc is not None:
            self._values["group_desc"] = group_desc
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id
        if super_group_id is not None:
            self._values["super_group_id"] = super_group_id

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupName: The name of the group.

        The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupDesc: The description of the group.

        You can enter a description with up to 100 characters.
        '''
        result = self._values.get("group_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property iotInstanceId: Public instance does not pass this parameter;

        instance that you need to buy the incoming instance ID.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def super_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property superGroupId: The ID of the parent group.

        If you want to create a first-level group, do not enter this parameter.
        '''
        result = self._values.get("super_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DeviceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.DeviceProps",
    jsii_struct_bases=[],
    name_mapping={
        "product_key": "productKey",
        "dev_eui": "devEui",
        "device_name": "deviceName",
        "iot_instance_id": "iotInstanceId",
        "nickname": "nickname",
        "pin_code": "pinCode",
    },
)
class DeviceProps:
    def __init__(
        self,
        *,
        product_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dev_eui: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        device_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nickname: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pin_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::Device``.

        :param product_key: Property productKey: The identifier of the product to which the device to be registered belongs.
        :param dev_eui: Property devEui: DevEUI LoRaWAN equipment. When you create a LoRaWAN devices, this will pass.
        :param device_name: Property deviceName: The name of the device that you want to register. The device name must consist of 4 to 32 characters, including English letters, digits, and special characters, for example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:). DeviceName is used with ProductKey to identify a specified device. Note If you do not specify this parameter, the system will generate a name for the device.
        :param iot_instance_id: Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        :param nickname: Property nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can contain Chinese characters, English letters, numbers and underscores (_). A Chinese character counts as two characters.
        :param pin_code: Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI. When you create a LoRaWAN devices, this will pass.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2323ff50a7b2a720da6ceb765e24fd59dd2a790aa442ce0ae438f25f2a3ad4c2)
            check_type(argname="argument product_key", value=product_key, expected_type=type_hints["product_key"])
            check_type(argname="argument dev_eui", value=dev_eui, expected_type=type_hints["dev_eui"])
            check_type(argname="argument device_name", value=device_name, expected_type=type_hints["device_name"])
            check_type(argname="argument iot_instance_id", value=iot_instance_id, expected_type=type_hints["iot_instance_id"])
            check_type(argname="argument nickname", value=nickname, expected_type=type_hints["nickname"])
            check_type(argname="argument pin_code", value=pin_code, expected_type=type_hints["pin_code"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "product_key": product_key,
        }
        if dev_eui is not None:
            self._values["dev_eui"] = dev_eui
        if device_name is not None:
            self._values["device_name"] = device_name
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id
        if nickname is not None:
            self._values["nickname"] = nickname
        if pin_code is not None:
            self._values["pin_code"] = pin_code

    @builtins.property
    def product_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property productKey: The identifier of the product to which the device to be registered belongs.'''
        result = self._values.get("product_key")
        assert result is not None, "Required property 'product_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dev_eui(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property devEui: DevEUI LoRaWAN equipment.

        When you create a LoRaWAN devices, this will pass.
        '''
        result = self._values.get("dev_eui")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def device_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deviceName: The name of the device that you want to register.

        The device name must consist of
        4 to 32 characters, including English letters, digits, and special characters, for
        example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).
        DeviceName is used with ProductKey to identify a specified device.
        Note If you do not specify this parameter, the system will generate a name for the device.
        '''
        result = self._values.get("device_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property iotInstanceId: Public instance does not pass this parameter;

        instance that you need to buy the incoming instance ID.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nickname(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property nickname: Add a nickname for the device.

        A nickname can be 4-64 characters in length, and can
        contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        character counts as two characters.
        '''
        result = self._values.get("nickname")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pin_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.

        When you create a LoRaWAN devices, this will pass.
        '''
        result = self._values.get("pin_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DeviceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Product(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.Product",
):
    '''A ROS resource type:  ``ALIYUN::IOT::Product``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProductProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::Product``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31cdb02c56c3fe04b275cea81b478a51b680982ffe64156bb4f38c152e5abf6d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IotInstanceId: IOT instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIotInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProductKey: The globally unique identifier of the product issued by IoT Platform.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProductKey"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.ProductProps",
    jsii_struct_bases=[],
    name_mapping={
        "node_type": "nodeType",
        "product_name": "productName",
        "aliyun_commodity_code": "aliyunCommodityCode",
        "auth_type": "authType",
        "category_key": "categoryKey",
        "data_format": "dataFormat",
        "description": "description",
        "id2": "id2",
        "iot_instance_id": "iotInstanceId",
        "join_permission_id": "joinPermissionId",
        "net_type": "netType",
        "protocol_type": "protocolType",
        "publish_auto": "publishAuto",
        "resource_group_id": "resourceGroupId",
    },
)
class ProductProps:
    def __init__(
        self,
        *,
        node_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        product_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        aliyun_commodity_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auth_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        category_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_format: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        id2: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        join_permission_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        publish_auto: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::Product``.

        :param node_type: Property nodeType: The node type of the product. Values: 0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform either directly or as a sub-device of a gateway. 1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain the topological relationships with sub-devices, and synchronize the topological relationships to IoT Platform.
        :param product_name: Property productName: The name of the product. A product name can be 4 to 30 characters in length and can contain Chinese characters, English letters, digits, and underscores (_). Note A product name must be unique in an account.
        :param aliyun_commodity_code: Property aliyunCommodityCode: The edition of the product that you want to create. There are two options: iothub_senior: Pro Edition. iothub: Basic Edition. If you do not input this parameter, the default value is used, which is iothub (Basic Edition).
        :param auth_type: Property authType: Authentication device to access the Internet of Things platform under the product. Optional: secret: using a device key for device authentication. Details can be found MQTT-TCP connection communication. id2: Use things device authentication ID. x509: X.509 certificates using the device for device authentication. The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication. If this parameter is passed, the default value is secret.
        :param category_key: Property categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category. Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
        :param data_format: Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior. This parameter is only available and required when you create a Pro Edition product. Options: 0: Do not parse/Custom. 1: Alink JSON.
        :param description: Property description: A description of the product. The description can be a maximum of 100 characters in length.
        :param id2: Property id2: Whether ID2 certification. Optional values: true: the opening of ID2 certification. false: do not open ID2 certification. Do not pass this parameter, the default is not opened. Explanation Only 2 East China (Shanghai) regional support ID2 authentication. If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
        :param iot_instance_id: Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        :param join_permission_id: Property joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters. Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account. If you do not LoRaWAN network credentials, visit the network management platform to create things together.
        :param net_type: Property netType: Networking mode. Set this parameter only if you are creating a product whose devices directly connect to IoT Platform. Options: WIFI CELLULAR ETHERNET OTHER The default value is WIFI.
        :param protocol_type: Property protocolType: The protocol that devices of this product use to connect to gateways. Set this parameter only if you are creating a product whose devices will be connected to gateways. Options: modbus: Modbus. opc-ua: OPC UA. customize: Customized protocol. ble: BLE. zigbee: ZigBee.
        :param publish_auto: Property publishAuto: Whether to automatically model publication after the product is created. true: publishing. false: not released. This parameter is not passed, the default value true.
        :param resource_group_id: Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group. If this parameter is passed, the product will be classified as a default resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c19124601d68a8f032cfeb2a37062241b851ae60254d01c3a9178d3cb60bda3b)
            check_type(argname="argument node_type", value=node_type, expected_type=type_hints["node_type"])
            check_type(argname="argument product_name", value=product_name, expected_type=type_hints["product_name"])
            check_type(argname="argument aliyun_commodity_code", value=aliyun_commodity_code, expected_type=type_hints["aliyun_commodity_code"])
            check_type(argname="argument auth_type", value=auth_type, expected_type=type_hints["auth_type"])
            check_type(argname="argument category_key", value=category_key, expected_type=type_hints["category_key"])
            check_type(argname="argument data_format", value=data_format, expected_type=type_hints["data_format"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument id2", value=id2, expected_type=type_hints["id2"])
            check_type(argname="argument iot_instance_id", value=iot_instance_id, expected_type=type_hints["iot_instance_id"])
            check_type(argname="argument join_permission_id", value=join_permission_id, expected_type=type_hints["join_permission_id"])
            check_type(argname="argument net_type", value=net_type, expected_type=type_hints["net_type"])
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument publish_auto", value=publish_auto, expected_type=type_hints["publish_auto"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "node_type": node_type,
            "product_name": product_name,
        }
        if aliyun_commodity_code is not None:
            self._values["aliyun_commodity_code"] = aliyun_commodity_code
        if auth_type is not None:
            self._values["auth_type"] = auth_type
        if category_key is not None:
            self._values["category_key"] = category_key
        if data_format is not None:
            self._values["data_format"] = data_format
        if description is not None:
            self._values["description"] = description
        if id2 is not None:
            self._values["id2"] = id2
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id
        if join_permission_id is not None:
            self._values["join_permission_id"] = join_permission_id
        if net_type is not None:
            self._values["net_type"] = net_type
        if protocol_type is not None:
            self._values["protocol_type"] = protocol_type
        if publish_auto is not None:
            self._values["publish_auto"] = publish_auto
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def node_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property nodeType: The node type of the product.

        Values:
        0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
        either directly or as a sub-device of a gateway.
        1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
        the topological relationships with sub-devices, and synchronize the topological relationships
        to IoT Platform.
        '''
        result = self._values.get("node_type")
        assert result is not None, "Required property 'node_type' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def product_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property productName: The name of the product.

        A product name can be 4 to 30 characters in length and can
        contain Chinese characters, English letters, digits, and underscores (_).
        Note A product name must be unique in an account.
        '''
        result = self._values.get("product_name")
        assert result is not None, "Required property 'product_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def aliyun_commodity_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aliyunCommodityCode: The edition of the product that you want to create.

        There are two options:
        iothub_senior: Pro Edition.
        iothub: Basic Edition.
        If you do not input this parameter, the default value is used, which is iothub (Basic
        Edition).
        '''
        result = self._values.get("aliyun_commodity_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property authType: Authentication device to access the Internet of Things platform under the product.

        Optional:
        secret: using a device key for device authentication.
        Details can be found MQTT-TCP connection communication.
        id2: Use things device authentication ID.
        x509: X.509 certificates using the device for device authentication.
        The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
        If this parameter is passed, the default value is secret.
        '''
        result = self._values.get("auth_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def category_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property categoryKey: Identifier Product category.

        If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
        Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
        '''
        result = self._values.get("category_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_format(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.

        This parameter is only available and required when you create a Pro Edition product.
        Options:
        0: Do not parse/Custom.
        1: Alink JSON.
        '''
        result = self._values.get("data_format")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: A description of the product.

        The description can be a maximum of 100 characters in
        length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def id2(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property id2: Whether ID2 certification.

        Optional values:
        true: the opening of ID2 certification.
        false: do not open ID2 certification.
        Do not pass this parameter, the default is not opened.
        Explanation
        Only 2 East China (Shanghai) regional support ID2 authentication.
        If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
        '''
        result = self._values.get("id2")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property iotInstanceId: Public instance does not pass this parameter;

        instance that you need to buy the incoming instance ID.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def join_permission_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property joinPermissionId: LoRaWAN network credential ID.

        When networking mode NetType chosen LORA, the necessary parameters.
        Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
        If you do not LoRaWAN network credentials, visit the network management platform to create things together.
        '''
        result = self._values.get("join_permission_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property netType: Networking mode.

        Set this parameter only if you are creating a product whose devices directly connect
        to IoT Platform.
        Options:
        WIFI
        CELLULAR
        ETHERNET
        OTHER
        The default value is WIFI.
        '''
        result = self._values.get("net_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property protocolType: The protocol that devices of this product use to connect to gateways.

        Set this parameter only if you are creating a product whose devices will be connected
        to gateways.
        Options:
        modbus: Modbus.
        opc-ua: OPC UA.
        customize: Customized protocol.
        ble: BLE.
        zigbee: ZigBee.
        '''
        result = self._values.get("protocol_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def publish_auto(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property publishAuto: Whether to automatically model publication after the product is created.

        true: publishing.
        false: not released.
        This parameter is not passed, the default value true.
        '''
        result = self._values.get("publish_auto")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.

        If this parameter is passed, the product will be classified as a default resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProductProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ProductTopic(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.ProductTopic",
):
    '''A ROS resource type:  ``ALIYUN::IOT::ProductTopic``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProductTopicProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::ProductTopic``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ffcd484a0ac891a2697c3758fda8427134931e37606768e029f54fe2c4f55138)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrTopicId")
    def attr_topic_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TopicId: Topic ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.ProductTopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "operation": "operation",
        "product_key": "productKey",
        "topic_short_name": "topicShortName",
        "desc": "desc",
        "iot_instance_id": "iotInstanceId",
    },
)
class ProductTopicProps:
    def __init__(
        self,
        *,
        operation: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        product_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic_short_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::ProductTopic``.

        :param operation: Property operation: Operation permissions of devices on the topic category. Value options: SUB: Subscribe. Devices can subscribe to the topics of this category. PUB: Publish. Devices can publish messages using the topics of this category. ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        :param product_key: Property productKey: The unique identifier of the product for which you want to create a topic category.
        :param topic_short_name: Property topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName. Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        :param desc: Property desc: The description of the topic category. You can enter a description with up to 100 characters.
        :param iot_instance_id: Property iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1983441e60c45f960d64ead796ed504ea2f81888da6238f67e85457ef3b138dd)
            check_type(argname="argument operation", value=operation, expected_type=type_hints["operation"])
            check_type(argname="argument product_key", value=product_key, expected_type=type_hints["product_key"])
            check_type(argname="argument topic_short_name", value=topic_short_name, expected_type=type_hints["topic_short_name"])
            check_type(argname="argument desc", value=desc, expected_type=type_hints["desc"])
            check_type(argname="argument iot_instance_id", value=iot_instance_id, expected_type=type_hints["iot_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "operation": operation,
            "product_key": product_key,
            "topic_short_name": topic_short_name,
        }
        if desc is not None:
            self._values["desc"] = desc
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id

    @builtins.property
    def operation(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property operation: Operation permissions of devices on the topic category.

        Value options:
        SUB: Subscribe. Devices can subscribe to the topics of this category.
        PUB: Publish. Devices can publish messages using the topics of this category.
        ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        '''
        result = self._values.get("operation")
        assert result is not None, "Required property 'operation' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def product_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property productKey: The unique identifier of the product for which you want to create a topic category.'''
        result = self._values.get("product_key")
        assert result is not None, "Required property 'product_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic_short_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property topicShortName: The custom category hierarchy in the topic category.

        By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
        Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        '''
        result = self._values.get("topic_short_name")
        assert result is not None, "Required property 'topic_short_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property desc: The description of the topic category.

        You can enter a description with up to 100 characters.
        '''
        result = self._values.get("desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property iotInstanceId: Instance ID you purchased.

        Public instances do not need pass this property.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProductTopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDevice(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosDevice",
):
    '''A ROS template type:  ``ALIYUN::IOT::Device``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDeviceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::Device``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__137a28e19f7b2c0c484a7b321cca14482a65b5e152d82a7f6939b005da4dd9fc)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cb49a912a8959322db90f2585b645935ef68eacd7e0cb204ef3219e7e3b30686)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDeviceName")
    def attr_device_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeviceName: Device name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeviceName"))

    @builtins.property
    @jsii.member(jsii_name="attrDeviceSecret")
    def attr_device_secret(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeviceSecret: Device key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeviceSecret"))

    @builtins.property
    @jsii.member(jsii_name="attrIotId")
    def attr_iot_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        IotId: Things internet device ID issued for the device, as the unique identifier of the device.
        Description Keep, do not leak.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIotId"))

    @builtins.property
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IotInstanceId: IOT instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIotInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpAddress: IP address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrNickName")
    def attr_nick_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NickName: Nick name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNickName"))

    @builtins.property
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NodeType: Node type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNodeType"))

    @builtins.property
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProductKey: Product key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProductKey"))

    @builtins.property
    @jsii.member(jsii_name="attrProductName")
    def attr_product_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProductName: Product name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProductName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ac694e0267ddbd981007bfcbb0a8c8c97e8d4cc87e81f4ee4875183cd848df0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="productKey")
    def product_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productKey: The identifier of the product to which the device to be registered belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "productKey"))

    @product_key.setter
    def product_key(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea2904d9d4e9a2bfc3bb1fc82d2e076cd34a1b0802879bd6d168824ce47d4024)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productKey", value)

    @builtins.property
    @jsii.member(jsii_name="devEui")
    def dev_eui(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        devEui: DevEUI LoRaWAN equipment.
        When you create a LoRaWAN devices, this will pass.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "devEui"))

    @dev_eui.setter
    def dev_eui(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b451bb67a0d7c2d86c0c65773a4737f160b2381c61a44d0a8afe460579c62210)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "devEui", value)

    @builtins.property
    @jsii.member(jsii_name="deviceName")
    def device_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        ::

        ), periods (.) , and colons (:).
        DeviceName is used with ProductKey to identify a specified device.
        Note If you do not specify this parameter, the system will generate a name for the device.
        :Property:

        deviceName: The name of the device that you want to register. The device name must consist of
        4 to 32 characters, including English letters, digits, and special characters, for
        example, hyphens (-), underscores (_), at signs (
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deviceName"))

    @device_name.setter
    def device_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a579dfaeff84acd23f529e9ed4333cf7519f70004b25ff483db9163df28ff3d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deviceName", value)

    @builtins.property
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "iotInstanceId"))

    @iot_instance_id.setter
    def iot_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5b39f72fd072fb2a7877a4344b2e34a2adc1b818b5f153e2a16935e428f9c65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "iotInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="nickname")
    def nickname(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
        contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        character counts as two characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "nickname"))

    @nickname.setter
    def nickname(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f33bb348c5bd40e210ec1dcb2dde1b99ad507e6aa7e482a8c32b3aafa01c935a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nickname", value)

    @builtins.property
    @jsii.member(jsii_name="pinCode")
    def pin_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
        When you create a LoRaWAN devices, this will pass.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pinCode"))

    @pin_code.setter
    def pin_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81d8d7e1251b1c1d94b669f53af5da5ff61efb3e703a76b224f173db0b8df405)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pinCode", value)


class RosDeviceGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosDeviceGroup",
):
    '''A ROS template type:  ``ALIYUN::IOT::DeviceGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDeviceGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::DeviceGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dd337e623767a74285f48856036b9ce8b256182a49c0b2085481be8a5c66b31)
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
            type_hints = typing.get_type_hints(_typecheckingstub__49e6dc63a5f981990401ee1e2ec03bc94fe218038a1d992a0b1804f2fc9bd4f9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupId: Packet, ID, System for the globally unique identifier generated packet.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IotInstanceId: IOT instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIotInstanceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__87b032bf610c841a3a3ded62305733e6edebec8972c768b49e37d7f7fed55775)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ebce8d91846220cb5cd746880856faaca165acc4ec20a33860db71146076f154)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="groupDesc")
    def group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupDesc: The description of the group. You can enter a description with up to 100 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupDesc"))

    @group_desc.setter
    def group_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c33fe5aee4e8e5f501ce78ed55f9c48310ed195e3544e845ca553093b34f5831)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupDesc", value)

    @builtins.property
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "iotInstanceId"))

    @iot_instance_id.setter
    def iot_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee64c5804457b8d18a6d443f7a074930da26147013a67a9d9441320b04e55691)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "iotInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="superGroupId")
    def super_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        superGroupId: The ID of the parent group.
        If you want to create a first-level group, do not enter this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "superGroupId"))

    @super_group_id.setter
    def super_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a385e5e01909e0aed0dd3b4749cda7db4b6d687a0ce7ee348a9fefa5f967d1e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "superGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.RosDeviceGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "group_desc": "groupDesc",
        "iot_instance_id": "iotInstanceId",
        "super_group_id": "superGroupId",
    },
)
class RosDeviceGroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        super_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::DeviceGroup``.

        :param group_name: 
        :param group_desc: 
        :param iot_instance_id: 
        :param super_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__187feae8dfade4fb19da128966c23857feeb3d4768dac74f7ad9f21af521d556)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument group_desc", value=group_desc, expected_type=type_hints["group_desc"])
            check_type(argname="argument iot_instance_id", value=iot_instance_id, expected_type=type_hints["iot_instance_id"])
            check_type(argname="argument super_group_id", value=super_group_id, expected_type=type_hints["super_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
        }
        if group_desc is not None:
            self._values["group_desc"] = group_desc
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id
        if super_group_id is not None:
            self._values["super_group_id"] = super_group_id

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groupDesc: The description of the group. You can enter a description with up to 100 characters.
        '''
        result = self._values.get("group_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def super_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        superGroupId: The ID of the parent group.
        If you want to create a first-level group, do not enter this parameter.
        '''
        result = self._values.get("super_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDeviceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.RosDeviceProps",
    jsii_struct_bases=[],
    name_mapping={
        "product_key": "productKey",
        "dev_eui": "devEui",
        "device_name": "deviceName",
        "iot_instance_id": "iotInstanceId",
        "nickname": "nickname",
        "pin_code": "pinCode",
    },
)
class RosDeviceProps:
    def __init__(
        self,
        *,
        product_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dev_eui: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        device_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nickname: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pin_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::Device``.

        :param product_key: 
        :param dev_eui: 
        :param device_name: 
        :param iot_instance_id: 
        :param nickname: 
        :param pin_code: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bc585dbac660946af6345c1c23893f2840c74f7cb8fc5212b19277e5d559fe9)
            check_type(argname="argument product_key", value=product_key, expected_type=type_hints["product_key"])
            check_type(argname="argument dev_eui", value=dev_eui, expected_type=type_hints["dev_eui"])
            check_type(argname="argument device_name", value=device_name, expected_type=type_hints["device_name"])
            check_type(argname="argument iot_instance_id", value=iot_instance_id, expected_type=type_hints["iot_instance_id"])
            check_type(argname="argument nickname", value=nickname, expected_type=type_hints["nickname"])
            check_type(argname="argument pin_code", value=pin_code, expected_type=type_hints["pin_code"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "product_key": product_key,
        }
        if dev_eui is not None:
            self._values["dev_eui"] = dev_eui
        if device_name is not None:
            self._values["device_name"] = device_name
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id
        if nickname is not None:
            self._values["nickname"] = nickname
        if pin_code is not None:
            self._values["pin_code"] = pin_code

    @builtins.property
    def product_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productKey: The identifier of the product to which the device to be registered belongs.
        '''
        result = self._values.get("product_key")
        assert result is not None, "Required property 'product_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dev_eui(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        devEui: DevEUI LoRaWAN equipment.
        When you create a LoRaWAN devices, this will pass.
        '''
        result = self._values.get("dev_eui")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def device_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        ::

        ), periods (.) , and colons (:).
        DeviceName is used with ProductKey to identify a specified device.
        Note If you do not specify this parameter, the system will generate a name for the device.
        :Property:

        deviceName: The name of the device that you want to register. The device name must consist of
        4 to 32 characters, including English letters, digits, and special characters, for
        example, hyphens (-), underscores (_), at signs (
        '''
        result = self._values.get("device_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nickname(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
        contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        character counts as two characters.
        '''
        result = self._values.get("nickname")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pin_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
        When you create a LoRaWAN devices, this will pass.
        '''
        result = self._values.get("pin_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDeviceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProduct(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosProduct",
):
    '''A ROS template type:  ``ALIYUN::IOT::Product``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProductProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::Product``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fabbd3c1594a79737e652e2acb0f050e9d85bc3483c201fd9bd91666df55d77)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cc51fd2b5109392c204a8b08821604916dd6b3fba9e8ccde10fdac25f0d8989d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IotInstanceId: IOT instance ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIotInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProductKey: The globally unique identifier of the product issued by IoT Platform.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProductKey"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__84f5e2f5a602370170bb60719890fc86d5cc875085de7d96105c34580d1d3c96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="nodeType")
    def node_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        nodeType: The node type of the product. Values:
        0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
        either directly or as a sub-device of a gateway.
        1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
        the topological relationships with sub-devices, and synchronize the topological relationships
        to IoT Platform.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "nodeType"))

    @node_type.setter
    def node_type(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d2a20ee46ac0ba01b85a8f349e70d04c894a3a0a77de97c95c83d2ba03f5be2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeType", value)

    @builtins.property
    @jsii.member(jsii_name="productName")
    def product_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        productName: The name of the product. A product name can be 4 to 30 characters in length and can
        contain Chinese characters, English letters, digits, and underscores (_).
        Note A product name must be unique in an account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "productName"))

    @product_name.setter
    def product_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c9303a507a713d0d737d397a75fc02c42806cf3a0a71724b56fc192d6a78dab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productName", value)

    @builtins.property
    @jsii.member(jsii_name="aliyunCommodityCode")
    def aliyun_commodity_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        aliyunCommodityCode: The edition of the product that you want to create. There are two options:
        iothub_senior: Pro Edition.
        iothub: Basic Edition.
        If you do not input this parameter, the default value is used, which is iothub (Basic
        Edition).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aliyunCommodityCode"))

    @aliyun_commodity_code.setter
    def aliyun_commodity_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0484d9ff699754664383d704144265af08cf5d8f5ff0bb1a3f269890bc3dd4b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aliyunCommodityCode", value)

    @builtins.property
    @jsii.member(jsii_name="authType")
    def auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        authType: Authentication device to access the Internet of Things platform under the product. Optional:
        secret: using a device key for device authentication.
        Details can be found MQTT-TCP connection communication.
        id2: Use things device authentication ID.
        x509: X.509 certificates using the device for device authentication.
        The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
        If this parameter is passed, the default value is secret.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "authType"))

    @auth_type.setter
    def auth_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20dd8b5a3b22367ea404bec7f0ca8407943cb1d5bbf9f2f25cc6ec18537ec49b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authType", value)

    @builtins.property
    @jsii.member(jsii_name="categoryKey")
    def category_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
        Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "categoryKey"))

    @category_key.setter
    def category_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__960fc4cf773655286c399dab520a92cf26cade0932dc78bcd3fe1a0b0859ae85)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "categoryKey", value)

    @builtins.property
    @jsii.member(jsii_name="dataFormat")
    def data_format(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
        This parameter is only available and required when you create a Pro Edition product.
        Options:
        0: Do not parse/Custom.
        1: Alink JSON.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataFormat"))

    @data_format.setter
    def data_format(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c0075904316f481d545e21d8ea68afa7df8b2b74bd59d1d9e20ea97ea30a3be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataFormat", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: A description of the product. The description can be a maximum of 100 characters in
        length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b57a3d254fad8332b60d334406e57cb23b625866ba8758185a97e1e846ee9a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="id2")
    def id2(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        id2: Whether ID2 certification.
        Optional values:
        true: the opening of ID2 certification.
        false: do not open ID2 certification.
        Do not pass this parameter, the default is not opened.
        Explanation
        Only 2 East China (Shanghai) regional support ID2 authentication.
        If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "id2"))

    @id2.setter
    def id2(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76b3ee71af2474a95d2cb11a6d38bb3904dc9cfad0d68f0b36252497c9e79de9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id2", value)

    @builtins.property
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "iotInstanceId"))

    @iot_instance_id.setter
    def iot_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1eb4de6b8bd62915307c4f4ec4d517ae8cb7ec2adee1923ef930a4a1217802a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "iotInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="joinPermissionId")
    def join_permission_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
        Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
        If you do not LoRaWAN network credentials, visit the network management platform to create things together.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "joinPermissionId"))

    @join_permission_id.setter
    def join_permission_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41d98ff337466cd5c1f565f7fc73d6db1dfdba6562a38b644799f552473a4a12)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "joinPermissionId", value)

    @builtins.property
    @jsii.member(jsii_name="netType")
    def net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        netType: Networking mode.
        Set this parameter only if you are creating a product whose devices directly connect
        to IoT Platform.
        Options:
        WIFI
        CELLULAR
        ETHERNET
        OTHER
        The default value is WIFI.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "netType"))

    @net_type.setter
    def net_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6abca50e9c7528b80cbd78dc5ecdb68c388deff4ac8a386a699339b32e9cd8fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "netType", value)

    @builtins.property
    @jsii.member(jsii_name="protocolType")
    def protocol_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        protocolType: The protocol that devices of this product use to connect to gateways.
        Set this parameter only if you are creating a product whose devices will be connected
        to gateways.
        Options:
        modbus: Modbus.
        opc-ua: OPC UA.
        customize: Customized protocol.
        ble: BLE.
        zigbee: ZigBee.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "protocolType"))

    @protocol_type.setter
    def protocol_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db7c1bd5250feb9897d95b8a1ec45b9aaf5214894fb3a30b9b2658cf731f1bda)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocolType", value)

    @builtins.property
    @jsii.member(jsii_name="publishAuto")
    def publish_auto(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        publishAuto: Whether to automatically model publication after the product is created.
        true: publishing.
        false: not released.
        This parameter is not passed, the default value true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "publishAuto"))

    @publish_auto.setter
    def publish_auto(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afe9fef6c1a93384d06a4b061d2f7573f42d3e3b244d43c90dc777c8e044967c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "publishAuto", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
        If this parameter is passed, the product will be classified as a default resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b43aedf60a79beb10ea0bad175ee1e570dc7d28284df2f7d65cddacea7a66927)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.RosProductProps",
    jsii_struct_bases=[],
    name_mapping={
        "node_type": "nodeType",
        "product_name": "productName",
        "aliyun_commodity_code": "aliyunCommodityCode",
        "auth_type": "authType",
        "category_key": "categoryKey",
        "data_format": "dataFormat",
        "description": "description",
        "id2": "id2",
        "iot_instance_id": "iotInstanceId",
        "join_permission_id": "joinPermissionId",
        "net_type": "netType",
        "protocol_type": "protocolType",
        "publish_auto": "publishAuto",
        "resource_group_id": "resourceGroupId",
    },
)
class RosProductProps:
    def __init__(
        self,
        *,
        node_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        product_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        aliyun_commodity_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auth_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        category_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_format: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        id2: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        join_permission_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        publish_auto: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::Product``.

        :param node_type: 
        :param product_name: 
        :param aliyun_commodity_code: 
        :param auth_type: 
        :param category_key: 
        :param data_format: 
        :param description: 
        :param id2: 
        :param iot_instance_id: 
        :param join_permission_id: 
        :param net_type: 
        :param protocol_type: 
        :param publish_auto: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c4e24f8f9d3dc72247868bb9e7071024e9c97506ef79beb7407dbc34831122c)
            check_type(argname="argument node_type", value=node_type, expected_type=type_hints["node_type"])
            check_type(argname="argument product_name", value=product_name, expected_type=type_hints["product_name"])
            check_type(argname="argument aliyun_commodity_code", value=aliyun_commodity_code, expected_type=type_hints["aliyun_commodity_code"])
            check_type(argname="argument auth_type", value=auth_type, expected_type=type_hints["auth_type"])
            check_type(argname="argument category_key", value=category_key, expected_type=type_hints["category_key"])
            check_type(argname="argument data_format", value=data_format, expected_type=type_hints["data_format"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument id2", value=id2, expected_type=type_hints["id2"])
            check_type(argname="argument iot_instance_id", value=iot_instance_id, expected_type=type_hints["iot_instance_id"])
            check_type(argname="argument join_permission_id", value=join_permission_id, expected_type=type_hints["join_permission_id"])
            check_type(argname="argument net_type", value=net_type, expected_type=type_hints["net_type"])
            check_type(argname="argument protocol_type", value=protocol_type, expected_type=type_hints["protocol_type"])
            check_type(argname="argument publish_auto", value=publish_auto, expected_type=type_hints["publish_auto"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "node_type": node_type,
            "product_name": product_name,
        }
        if aliyun_commodity_code is not None:
            self._values["aliyun_commodity_code"] = aliyun_commodity_code
        if auth_type is not None:
            self._values["auth_type"] = auth_type
        if category_key is not None:
            self._values["category_key"] = category_key
        if data_format is not None:
            self._values["data_format"] = data_format
        if description is not None:
            self._values["description"] = description
        if id2 is not None:
            self._values["id2"] = id2
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id
        if join_permission_id is not None:
            self._values["join_permission_id"] = join_permission_id
        if net_type is not None:
            self._values["net_type"] = net_type
        if protocol_type is not None:
            self._values["protocol_type"] = protocol_type
        if publish_auto is not None:
            self._values["publish_auto"] = publish_auto
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def node_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        nodeType: The node type of the product. Values:
        0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
        either directly or as a sub-device of a gateway.
        1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
        the topological relationships with sub-devices, and synchronize the topological relationships
        to IoT Platform.
        '''
        result = self._values.get("node_type")
        assert result is not None, "Required property 'node_type' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def product_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        productName: The name of the product. A product name can be 4 to 30 characters in length and can
        contain Chinese characters, English letters, digits, and underscores (_).
        Note A product name must be unique in an account.
        '''
        result = self._values.get("product_name")
        assert result is not None, "Required property 'product_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def aliyun_commodity_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        aliyunCommodityCode: The edition of the product that you want to create. There are two options:
        iothub_senior: Pro Edition.
        iothub: Basic Edition.
        If you do not input this parameter, the default value is used, which is iothub (Basic
        Edition).
        '''
        result = self._values.get("aliyun_commodity_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        authType: Authentication device to access the Internet of Things platform under the product. Optional:
        secret: using a device key for device authentication.
        Details can be found MQTT-TCP connection communication.
        id2: Use things device authentication ID.
        x509: X.509 certificates using the device for device authentication.
        The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
        If this parameter is passed, the default value is secret.
        '''
        result = self._values.get("auth_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def category_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
        Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
        '''
        result = self._values.get("category_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_format(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
        This parameter is only available and required when you create a Pro Edition product.
        Options:
        0: Do not parse/Custom.
        1: Alink JSON.
        '''
        result = self._values.get("data_format")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        description: A description of the product. The description can be a maximum of 100 characters in
        length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def id2(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        id2: Whether ID2 certification.
        Optional values:
        true: the opening of ID2 certification.
        false: do not open ID2 certification.
        Do not pass this parameter, the default is not opened.
        Explanation
        Only 2 East China (Shanghai) regional support ID2 authentication.
        If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
        '''
        result = self._values.get("id2")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def join_permission_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
        Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
        If you do not LoRaWAN network credentials, visit the network management platform to create things together.
        '''
        result = self._values.get("join_permission_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        netType: Networking mode.
        Set this parameter only if you are creating a product whose devices directly connect
        to IoT Platform.
        Options:
        WIFI
        CELLULAR
        ETHERNET
        OTHER
        The default value is WIFI.
        '''
        result = self._values.get("net_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        protocolType: The protocol that devices of this product use to connect to gateways.
        Set this parameter only if you are creating a product whose devices will be connected
        to gateways.
        Options:
        modbus: Modbus.
        opc-ua: OPC UA.
        customize: Customized protocol.
        ble: BLE.
        zigbee: ZigBee.
        '''
        result = self._values.get("protocol_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def publish_auto(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        publishAuto: Whether to automatically model publication after the product is created.
        true: publishing.
        false: not released.
        This parameter is not passed, the default value true.
        '''
        result = self._values.get("publish_auto")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
        If this parameter is passed, the product will be classified as a default resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProductProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProductTopic(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosProductTopic",
):
    '''A ROS template type:  ``ALIYUN::IOT::ProductTopic``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProductTopicProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::ProductTopic``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c86a65c0bfeaa9bf20886df6d13136500d7f31e5a9d2856d32e3e4fd0764e6b3)
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
            type_hints = typing.get_type_hints(_typecheckingstub__de68ae36eb1fa744ac4607671d7999d13dee5f7a7c445951fd43eb547dc5ecdc)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrTopicId")
    def attr_topic_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TopicId: Topic ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopicId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d1437bff5bffdad5a1ca1c35d94fdb84872b8e7d02b645e8c93241cdf92fe927)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="operation")
    def operation(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        operation: Operation permissions of devices on the topic category. Value options:
        SUB: Subscribe. Devices can subscribe to the topics of this category.
        PUB: Publish. Devices can publish messages using the topics of this category.
        ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "operation"))

    @operation.setter
    def operation(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d007a5918b51539524a90357b69b933db556a8a4813ab4162bb5223909ba5df5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "operation", value)

    @builtins.property
    @jsii.member(jsii_name="productKey")
    def product_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productKey: The unique identifier of the product for which you want to create a topic category.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "productKey"))

    @product_key.setter
    def product_key(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14be31536e550b2d93d682c53c7774403e573d5d9bc5fb3dd616f85215605833)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productKey", value)

    @builtins.property
    @jsii.member(jsii_name="topicShortName")
    def topic_short_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
        Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "topicShortName"))

    @topic_short_name.setter
    def topic_short_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b550e298138e6ee4206132e1d7ec977ff81231a7679197e459b67ebc07cdc20)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topicShortName", value)

    @builtins.property
    @jsii.member(jsii_name="desc")
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: desc: The description of the topic category. You can enter a description with up to 100 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "desc"))

    @desc.setter
    def desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b43b7b0fb58b545164cb48aa3185c16aa59e34c3d75a4fa1fa217d34534c719)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "desc", value)

    @builtins.property
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "iotInstanceId"))

    @iot_instance_id.setter
    def iot_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e029c3b0e92a56b1c54ad5572105945225065b8c2927a9386636b739d20c0ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "iotInstanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.RosProductTopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "operation": "operation",
        "product_key": "productKey",
        "topic_short_name": "topicShortName",
        "desc": "desc",
        "iot_instance_id": "iotInstanceId",
    },
)
class RosProductTopicProps:
    def __init__(
        self,
        *,
        operation: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        product_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic_short_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::ProductTopic``.

        :param operation: 
        :param product_key: 
        :param topic_short_name: 
        :param desc: 
        :param iot_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d82d7fe4083b3dd0489b59c4289ec05b5690a537e366d91f5d2c2f0e624a220)
            check_type(argname="argument operation", value=operation, expected_type=type_hints["operation"])
            check_type(argname="argument product_key", value=product_key, expected_type=type_hints["product_key"])
            check_type(argname="argument topic_short_name", value=topic_short_name, expected_type=type_hints["topic_short_name"])
            check_type(argname="argument desc", value=desc, expected_type=type_hints["desc"])
            check_type(argname="argument iot_instance_id", value=iot_instance_id, expected_type=type_hints["iot_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "operation": operation,
            "product_key": product_key,
            "topic_short_name": topic_short_name,
        }
        if desc is not None:
            self._values["desc"] = desc
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id

    @builtins.property
    def operation(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        operation: Operation permissions of devices on the topic category. Value options:
        SUB: Subscribe. Devices can subscribe to the topics of this category.
        PUB: Publish. Devices can publish messages using the topics of this category.
        ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        '''
        result = self._values.get("operation")
        assert result is not None, "Required property 'operation' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def product_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productKey: The unique identifier of the product for which you want to create a topic category.
        '''
        result = self._values.get("product_key")
        assert result is not None, "Required property 'product_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic_short_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
        Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        '''
        result = self._values.get("topic_short_name")
        assert result is not None, "Required property 'topic_short_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: desc: The description of the topic category. You can enter a description with up to 100 characters.
        '''
        result = self._values.get("desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProductTopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosRule",
):
    '''A ROS template type:  ``ALIYUN::IOT::Rule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::Rule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5bbd106b8a34a927ed3fb94753b2b28c81750a5c8f2134e95ebb84f07da629da)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9dfba5e37f52b619b41a7fdd1f508c666ad04c016ab1e0702e981e1b4ea70cb7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrActionId")
    def attr_action_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ActionId: The ID of the rule action.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrActionId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleId: The ID of the rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__952f091f8abe41c20ce79af262b61a958ce5c49a24dc0ee21998347a76f9f5fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The name of the rule. The name must be 1 to 30 characters in length and can contain
        English letters, digits, underscores (_), and hyphens (-). Chinese language is also
        supported. Each Chinese symbol occupies 2 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76d7d8fe73303b86f4a3368150bb1e3ffcca1f93a556a4a4e359da96b280c50e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="dataType")
    def data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataType: The format of the data to be processed by the rule. You must specify the format of
        device data to be processed for this parameter. Valid values:
        JSON: JSON data
        BINARY: binary data
        Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
        for RDS.
        Default value: JSON.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataType"))

    @data_type.setter
    def data_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c921134de66de6ae8c48122dc7cbdb6c55a79abcbabff2fdd8b93549e7e2016)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataType", value)

    @builtins.property
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
        the parameter is required for the instances that you have purchased.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "iotInstanceId"))

    @iot_instance_id.setter
    def iot_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__303f75cfec83501586f9e38916e9aa29262ae49a0e35e761adf5554ba016d40a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "iotInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="productKey")
    def product_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: productKey: The ProductKey of the product to which the rule applies.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "productKey"))

    @product_key.setter
    def product_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e41c852e68694bec8a552531b774657f206030c25c073300593107e6d5a0e402)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productKey", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource
        group information in the Resource Management console.
        If you do not specify this parameter, the rule is assigned to the default resource
        group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa0557fb3628ca51ceaa047d2948a8ccacb8d3e24fa4a9b8c64d63eedae718d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="ruleAction")
    def rule_action(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RuleActionProperty"]]]]:
        '''
        :Property: ruleAction:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RuleActionProperty"]]]], jsii.get(self, "ruleAction"))

    @rule_action.setter
    def rule_action(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RuleActionProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4db3cd688de666ca42c357c2f88f65069e413274a8f07a90f32600748a353c30)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleAction", value)

    @builtins.property
    @jsii.member(jsii_name="ruleDesc")
    def rule_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleDesc: The description of the rule. The description can be up to 100 characters in length.
        Each Chinese symbol occupies 1 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleDesc"))

    @rule_desc.setter
    def rule_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5a93d0de921f84ebc30fddcb4a2c0baa52da10b9539513d75d0c7785ef77b81)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleDesc", value)

    @builtins.property
    @jsii.member(jsii_name="select")
    def select(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
        Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "select"))

    @select.setter
    def select(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__529feb2c3b28321e14e1d5cb8e015821bc0859745f282f39f1c7630962dddf91)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "select", value)

    @builtins.property
    @jsii.member(jsii_name="shortTopic")
    def short_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
        Basic communication topics or Thing Specification Language (TSL)-based communication
        topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the
        product. Valid values of topicShortName:
        /thing/event/property/post: submits the property data of a device.
        /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.
        /thing/lifecycle: submits device lifecycle changes.
        /thing/downlink/reply/message: sends a response to a request from IoT Platform.
        /thing/list/found: submits the data when a gateway detects a new sub-device.
        /thing/topo/lifecycle: submits device topology changes.
        /thing/event/property/history/post: submits historical property data of a device.
        /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.
        /ota/upgrade: submits OTA update status.
        /ota/version/post: submits OTA module versions.
        /thing/deviceinfo/update: submits device tag changes.
        /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.
        ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic.
        ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.
        Custom topics. Example:${deviceName}/user/get.
        You can call theQueryProductTopicoperation to view all custom topics of the product.
        When you specify a custom topic, you can use the + and # wildcards.
        You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the
        product.
        You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that
        follow/user.
        For more information about how to use wildcards, see Wildcards in topics.
        Topic that is used to submit device status changes: ${deviceName}.
        You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "shortTopic"))

    @short_topic.setter
    def short_topic(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e82282e2294f201c47cdd988a5daecebc7546434ba027490812e43eed151002d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "shortTopic", value)

    @builtins.property
    @jsii.member(jsii_name="startRule")
    def start_rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: startRule: Start the rule. The rule at least contains one rule action with normal data forward.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "startRule"))

    @start_rule.setter
    def start_rule(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93be0c6ab89b305083fed54488bb6db604ea76e44150498530dcbe11deb96fcc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "startRule", value)

    @builtins.property
    @jsii.member(jsii_name="topicType")
    def topic_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
        1: The topic is a custom topic.
        2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "topicType"))

    @topic_type.setter
    def topic_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b12b0416a57293fea014fec01c13b7b3a505a47462d0ddcc8e1c3e416320deaf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topicType", value)

    @builtins.property
    @jsii.member(jsii_name="where")
    def where(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
        Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "where"))

    @where.setter
    def where(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a37b8c22be33c191b2bf4b04099a583ad3a5e636290192291ecdad773fbd52df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "where", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-iot.RosRule.RuleActionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "configuration": "configuration",
            "type": "type",
            "error_action_flag": "errorActionFlag",
        },
    )
    class RuleActionProperty:
        def __init__(
            self,
            *,
            configuration: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            error_action_flag: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param configuration: 
            :param type: 
            :param error_action_flag: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__56d6b017086d3d4edeaf6b55d227b226f0ac5954e884388be099039ae9c0947c)
                check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument error_action_flag", value=error_action_flag, expected_type=type_hints["error_action_flag"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "configuration": configuration,
                "type": type,
            }
            if error_action_flag is not None:
                self._values["error_action_flag"] = error_action_flag

        @builtins.property
        def configuration(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            configuration: The configurations of the rule action. You must specify a JSON string. The configurations
            for different types of rule actions are different. For more information about required
            syntax and examples, see the following tables.
            '''
            result = self._values.get("configuration")
            assert result is not None, "Required property 'configuration' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            type: The type of the rule action. Valid values:
            MNS: forwards data in the topics that have been processed by the rule engine to Message
            Service (MNS) for message transmission.
            FC: forwards data in the topics that have been processed by the rule engine to Function
            Compute for event computing.
            REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
            IoT Platform topic.
            AMQP: forwards data to AMQP consumer groups.
            OTS: forwards data in the topics that have been processed by the rule engine to Table
            Store for NoSQL data storage.
            Note
            Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
            Destination Alibaba Cloud services that are supported by the rule engine vary based
            on regions. For more information about the regions and destination cloud services
            that are supported by the rule engine, see Regions and zones.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def error_action_flag(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            errorActionFlag: Indicates whether the rule action forwarded error operation data. Error operation
            data indicates that the rule engine failed to forward data from the IoT Platform topic
            to the destination cloud service. A data forwarding failure indicates that forwarding
            retries also failed. Valid values:
            true: forwards error operation data.
            false: forwards normal data instead of error operation data.
            Default value: false.
            '''
            result = self._values.get("error_action_flag")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RuleActionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosRuleAction(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosRuleAction",
):
    '''A ROS template type:  ``ALIYUN::IOT::RuleAction``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRuleActionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::RuleAction``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2a8fed41400f16eddc8ab7d22d85b06cad631990518589ddf681ce6164c5bd4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__79b3667d3a4160cc861b0b4bed11606263cef6beeb7e4149f49cfadcb722e004)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrActionId")
    def attr_action_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ActionId: The ID of the rule action.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrActionId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="configuration")
    def configuration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        configuration: The configurations of the rule action. You must specify a JSON string. The configurations
        for different types of rule actions are different. For more information about required
        syntax and examples, see the following tables.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "configuration"))

    @configuration.setter
    def configuration(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e30493374f4ddb251dff7a96870dbfeec66fc9b29c4e6af44c7524849129db31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configuration", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6dff3d0c510eea6e1af195667b62d94af89a1967c0bfbd7e570505095cdca6ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ruleId")
    def rule_id(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        ruleId: The ID of the rule for which you want to create an action. You can use either of the
        following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleId"))

    @rule_id.setter
    def rule_id(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60d606d36a0c08a629de972d275cdb468888c30bd3c7216d8772e0b511e91ce2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleId", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The type of the rule action. Valid values:
        MNS: forwards data in the topics that have been processed by the rule engine to Message
        Service (MNS) for message transmission.
        FC: forwards data in the topics that have been processed by the rule engine to Function
        Compute for event computing.
        REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
        IoT Platform topic.
        AMQP: forwards data to AMQP consumer groups.
        OTS: forwards data in the topics that have been processed by the rule engine to Table
        Store for NoSQL data storage.
        Note
        Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
        Destination Alibaba Cloud services that are supported by the rule engine vary based
        on regions. For more information about the regions and destination cloud services
        that are supported by the rule engine, see Regions and zones.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__528ba8c74f3fdd02e33aa900cfccae251952df4c438b6fb4487d5dd1bb4c54bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="errorActionFlag")
    def error_action_flag(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        errorActionFlag: Indicates whether the rule action forwarded error operation data. Error operation
        data indicates that the rule engine failed to forward data from the IoT Platform topic
        to the destination cloud service. A data forwarding failure indicates that forwarding
        retries also failed. Valid values:
        true: forwards error operation data.
        false: forwards normal data instead of error operation data.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "errorActionFlag"))

    @error_action_flag.setter
    def error_action_flag(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7d0dbde5a33d56c62bb791977b00ee07cfad6b539e7becc1af190bcfbb159ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "errorActionFlag", value)

    @builtins.property
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
        the parameter is required for the instances that you have purchased.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "iotInstanceId"))

    @iot_instance_id.setter
    def iot_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a8a11ed4ffa318df9bfb2bc04ed06ace247483c16f1a92c843749cbcc5ed80e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "iotInstanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.RosRuleActionProps",
    jsii_struct_bases=[],
    name_mapping={
        "configuration": "configuration",
        "rule_id": "ruleId",
        "type": "type",
        "error_action_flag": "errorActionFlag",
        "iot_instance_id": "iotInstanceId",
    },
)
class RosRuleActionProps:
    def __init__(
        self,
        *,
        configuration: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rule_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        error_action_flag: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::RuleAction``.

        :param configuration: 
        :param rule_id: 
        :param type: 
        :param error_action_flag: 
        :param iot_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b31bf809ae1d7da631f5e63c32cc0a3a11840b31c9b609bf8f7dc880a487bf9)
            check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument error_action_flag", value=error_action_flag, expected_type=type_hints["error_action_flag"])
            check_type(argname="argument iot_instance_id", value=iot_instance_id, expected_type=type_hints["iot_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "configuration": configuration,
            "rule_id": rule_id,
            "type": type,
        }
        if error_action_flag is not None:
            self._values["error_action_flag"] = error_action_flag
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id

    @builtins.property
    def configuration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        configuration: The configurations of the rule action. You must specify a JSON string. The configurations
        for different types of rule actions are different. For more information about required
        syntax and examples, see the following tables.
        '''
        result = self._values.get("configuration")
        assert result is not None, "Required property 'configuration' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_id(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        ruleId: The ID of the rule for which you want to create an action. You can use either of the
        following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
        '''
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The type of the rule action. Valid values:
        MNS: forwards data in the topics that have been processed by the rule engine to Message
        Service (MNS) for message transmission.
        FC: forwards data in the topics that have been processed by the rule engine to Function
        Compute for event computing.
        REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
        IoT Platform topic.
        AMQP: forwards data to AMQP consumer groups.
        OTS: forwards data in the topics that have been processed by the rule engine to Table
        Store for NoSQL data storage.
        Note
        Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
        Destination Alibaba Cloud services that are supported by the rule engine vary based
        on regions. For more information about the regions and destination cloud services
        that are supported by the rule engine, see Regions and zones.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def error_action_flag(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        errorActionFlag: Indicates whether the rule action forwarded error operation data. Error operation
        data indicates that the rule engine failed to forward data from the IoT Platform topic
        to the destination cloud service. A data forwarding failure indicates that forwarding
        retries also failed. Valid values:
        true: forwards error operation data.
        false: forwards normal data instead of error operation data.
        Default value: false.
        '''
        result = self._values.get("error_action_flag")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
        the parameter is required for the instances that you have purchased.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleActionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.RosRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "data_type": "dataType",
        "iot_instance_id": "iotInstanceId",
        "product_key": "productKey",
        "resource_group_id": "resourceGroupId",
        "rule_action": "ruleAction",
        "rule_desc": "ruleDesc",
        "select": "select",
        "short_topic": "shortTopic",
        "start_rule": "startRule",
        "topic_type": "topicType",
        "where": "where",
    },
)
class RosRuleProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_action: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleActionProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        rule_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        select: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        short_topic: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_rule: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        topic_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        where: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::Rule``.

        :param name: 
        :param data_type: 
        :param iot_instance_id: 
        :param product_key: 
        :param resource_group_id: 
        :param rule_action: 
        :param rule_desc: 
        :param select: 
        :param short_topic: 
        :param start_rule: 
        :param topic_type: 
        :param where: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bf4f2a3caac6d91717c136a12791b6b49c38ee0222f5cfadb15644796617cc0)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument data_type", value=data_type, expected_type=type_hints["data_type"])
            check_type(argname="argument iot_instance_id", value=iot_instance_id, expected_type=type_hints["iot_instance_id"])
            check_type(argname="argument product_key", value=product_key, expected_type=type_hints["product_key"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument rule_action", value=rule_action, expected_type=type_hints["rule_action"])
            check_type(argname="argument rule_desc", value=rule_desc, expected_type=type_hints["rule_desc"])
            check_type(argname="argument select", value=select, expected_type=type_hints["select"])
            check_type(argname="argument short_topic", value=short_topic, expected_type=type_hints["short_topic"])
            check_type(argname="argument start_rule", value=start_rule, expected_type=type_hints["start_rule"])
            check_type(argname="argument topic_type", value=topic_type, expected_type=type_hints["topic_type"])
            check_type(argname="argument where", value=where, expected_type=type_hints["where"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if data_type is not None:
            self._values["data_type"] = data_type
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id
        if product_key is not None:
            self._values["product_key"] = product_key
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if rule_action is not None:
            self._values["rule_action"] = rule_action
        if rule_desc is not None:
            self._values["rule_desc"] = rule_desc
        if select is not None:
            self._values["select"] = select
        if short_topic is not None:
            self._values["short_topic"] = short_topic
        if start_rule is not None:
            self._values["start_rule"] = start_rule
        if topic_type is not None:
            self._values["topic_type"] = topic_type
        if where is not None:
            self._values["where"] = where

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The name of the rule. The name must be 1 to 30 characters in length and can contain
        English letters, digits, underscores (_), and hyphens (-). Chinese language is also
        supported. Each Chinese symbol occupies 2 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataType: The format of the data to be processed by the rule. You must specify the format of
        device data to be processed for this parameter. Valid values:
        JSON: JSON data
        BINARY: binary data
        Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
        for RDS.
        Default value: JSON.
        '''
        result = self._values.get("data_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
        the parameter is required for the instances that you have purchased.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: productKey: The ProductKey of the product to which the rule applies.
        '''
        result = self._values.get("product_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource
        group information in the Resource Management console.
        If you do not specify this parameter, the rule is assigned to the default resource
        group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_action(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleActionProperty]]]]:
        '''
        :Property: ruleAction:
        '''
        result = self._values.get("rule_action")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleActionProperty]]]], result)

    @builtins.property
    def rule_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ruleDesc: The description of the rule. The description can be up to 100 characters in length.
        Each Chinese symbol occupies 1 characters.
        '''
        result = self._values.get("rule_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def select(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
        Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
        '''
        result = self._values.get("select")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def short_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        shortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
        Basic communication topics or Thing Specification Language (TSL)-based communication
        topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the
        product. Valid values of topicShortName:
        /thing/event/property/post: submits the property data of a device.
        /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.
        /thing/lifecycle: submits device lifecycle changes.
        /thing/downlink/reply/message: sends a response to a request from IoT Platform.
        /thing/list/found: submits the data when a gateway detects a new sub-device.
        /thing/topo/lifecycle: submits device topology changes.
        /thing/event/property/history/post: submits historical property data of a device.
        /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.
        /ota/upgrade: submits OTA update status.
        /ota/version/post: submits OTA module versions.
        /thing/deviceinfo/update: submits device tag changes.
        /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.
        ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic.
        ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.
        Custom topics. Example:${deviceName}/user/get.
        You can call theQueryProductTopicoperation to view all custom topics of the product.
        When you specify a custom topic, you can use the + and # wildcards.
        You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the
        product.
        You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that
        follow/user.
        For more information about how to use wildcards, see Wildcards in topics.
        Topic that is used to submit device status changes: ${deviceName}.
        You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
        '''
        result = self._values.get("short_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: startRule: Start the rule. The rule at least contains one rule action with normal data forward.
        '''
        result = self._values.get("start_rule")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def topic_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
        1: The topic is a custom topic.
        2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        '''
        result = self._values.get("topic_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def where(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
        Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter.
        '''
        result = self._values.get("where")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Rule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.Rule",
):
    '''A ROS resource type:  ``ALIYUN::IOT::Rule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::Rule``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__679e1d4021baf037f3ffc6b78cac666e2e5556a43bd7b6cdfd691ee02c7d9b8c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrActionId")
    def attr_action_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ActionId: The ID of the rule action.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrActionId"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RuleId: The ID of the rule.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleId"))


class RuleAction(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RuleAction",
):
    '''A ROS resource type:  ``ALIYUN::IOT::RuleAction``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RuleActionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::RuleAction``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__937ad0d74c02d25c9b85d085be4d40b24af87309ef7b750d7b2db1b1545bea70)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrActionId")
    def attr_action_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ActionId: The ID of the rule action.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrActionId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.RuleActionProps",
    jsii_struct_bases=[],
    name_mapping={
        "configuration": "configuration",
        "rule_id": "ruleId",
        "type": "type",
        "error_action_flag": "errorActionFlag",
        "iot_instance_id": "iotInstanceId",
    },
)
class RuleActionProps:
    def __init__(
        self,
        *,
        configuration: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rule_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        error_action_flag: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::RuleAction``.

        :param configuration: Property configuration: The configurations of the rule action. You must specify a JSON string. The configurations for different types of rule actions are different. For more information about required syntax and examples, see the following tables.
        :param rule_id: Property ruleId: The ID of the rule for which you want to create an action. You can use either of the following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
        :param type: Property type: The type of the rule action. Valid values: MNS: forwards data in the topics that have been processed by the rule engine to Message Service (MNS) for message transmission. FC: forwards data in the topics that have been processed by the rule engine to Function Compute for event computing. REPUBLISH: forwards data in the topics that have been processed by the rule engine to another IoT Platform topic. AMQP: forwards data to AMQP consumer groups. OTS: forwards data in the topics that have been processed by the rule engine to Table Store for NoSQL data storage. Note Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store. Destination Alibaba Cloud services that are supported by the rule engine vary based on regions. For more information about the regions and destination cloud services that are supported by the rule engine, see Regions and zones.
        :param error_action_flag: Property errorActionFlag: Indicates whether the rule action forwarded error operation data. Error operation data indicates that the rule engine failed to forward data from the IoT Platform topic to the destination cloud service. A data forwarding failure indicates that forwarding retries also failed. Valid values: true: forwards error operation data. false: forwards normal data instead of error operation data. Default value: false.
        :param iot_instance_id: Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23c5bcaa1fdc83f8ce53e359595d89abec15e7e1b682b6d684cdf7919e82f25c)
            check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument error_action_flag", value=error_action_flag, expected_type=type_hints["error_action_flag"])
            check_type(argname="argument iot_instance_id", value=iot_instance_id, expected_type=type_hints["iot_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "configuration": configuration,
            "rule_id": rule_id,
            "type": type,
        }
        if error_action_flag is not None:
            self._values["error_action_flag"] = error_action_flag
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id

    @builtins.property
    def configuration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property configuration: The configurations of the rule action.

        You must specify a JSON string. The configurations
        for different types of rule actions are different. For more information about required
        syntax and examples, see the following tables.
        '''
        result = self._values.get("configuration")
        assert result is not None, "Required property 'configuration' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_id(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleId: The ID of the rule for which you want to create an action.

        You can use either of the
        following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
        '''
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: The type of the rule action.

        Valid values:
        MNS: forwards data in the topics that have been processed by the rule engine to Message
        Service (MNS) for message transmission.
        FC: forwards data in the topics that have been processed by the rule engine to Function
        Compute for event computing.
        REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
        IoT Platform topic.
        AMQP: forwards data to AMQP consumer groups.
        OTS: forwards data in the topics that have been processed by the rule engine to Table
        Store for NoSQL data storage.
        Note
        Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
        Destination Alibaba Cloud services that are supported by the rule engine vary based
        on regions. For more information about the regions and destination cloud services
        that are supported by the rule engine, see Regions and zones.
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def error_action_flag(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property errorActionFlag: Indicates whether the rule action forwarded error operation data.

        Error operation
        data indicates that the rule engine failed to forward data from the IoT Platform topic
        to the destination cloud service. A data forwarding failure indicates that forwarding
        retries also failed. Valid values:
        true: forwards error operation data.
        false: forwards normal data instead of error operation data.
        Default value: false.
        '''
        result = self._values.get("error_action_flag")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property iotInstanceId: The ID of the instance.

        This parameter is not required for public instances. However,
        the parameter is required for the instances that you have purchased.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RuleActionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.RuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "data_type": "dataType",
        "iot_instance_id": "iotInstanceId",
        "product_key": "productKey",
        "resource_group_id": "resourceGroupId",
        "rule_action": "ruleAction",
        "rule_desc": "ruleDesc",
        "select": "select",
        "short_topic": "shortTopic",
        "start_rule": "startRule",
        "topic_type": "topicType",
        "where": "where",
    },
)
class RuleProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        data_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        product_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_action: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleActionProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        rule_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        select: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        short_topic: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_rule: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        topic_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        where: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::Rule``.

        :param name: Property name: The name of the rule. The name must be 1 to 30 characters in length and can contain English letters, digits, underscores (_), and hyphens (-). Chinese language is also supported. Each Chinese symbol occupies 2 characters.
        :param data_type: Property dataType: The format of the data to be processed by the rule. You must specify the format of device data to be processed for this parameter. Valid values: JSON: JSON data BINARY: binary data Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB for RDS. Default value: JSON.
        :param iot_instance_id: Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
        :param product_key: Property productKey: The ProductKey of the product to which the rule applies.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource group information in the Resource Management console. If you do not specify this parameter, the rule is assigned to the default resource group.
        :param rule_action: Property ruleAction:.
        :param rule_desc: Property ruleDesc: The description of the rule. The description can be up to 100 characters in length. Each Chinese symbol occupies 1 characters.
        :param select: Property select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions. Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
        :param short_topic: Property shortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic. Basic communication topics or Thing Specification Language (TSL)-based communication topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the product. Valid values of topicShortName: /thing/event/property/post: submits the property data of a device. /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL. /thing/lifecycle: submits device lifecycle changes. /thing/downlink/reply/message: sends a response to a request from IoT Platform. /thing/list/found: submits the data when a gateway detects a new sub-device. /thing/topo/lifecycle: submits device topology changes. /thing/event/property/history/post: submits historical property data of a device. /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL. /ota/upgrade: submits OTA update status. /ota/version/post: submits OTA module versions. /thing/deviceinfo/update: submits device tag changes. /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge. ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic. ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch. Custom topics. Example:${deviceName}/user/get. You can call theQueryProductTopicoperation to view all custom topics of the product. When you specify a custom topic, you can use the + and # wildcards. You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the product. You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that follow/user. For more information about how to use wildcards, see Wildcards in topics. Topic that is used to submit device status changes: ${deviceName}. You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
        :param start_rule: Property startRule: Start the rule. The rule at least contains one rule action with normal data forward.
        :param topic_type: Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic. 1: The topic is a custom topic. 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        :param where: Property where: The condition that is used to trigger the rule. For more information, seeSQL expressions. Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f21b92733a05b4903e00220dc7f0b7852f65e73f5344c9911f6ad22afae7697)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument data_type", value=data_type, expected_type=type_hints["data_type"])
            check_type(argname="argument iot_instance_id", value=iot_instance_id, expected_type=type_hints["iot_instance_id"])
            check_type(argname="argument product_key", value=product_key, expected_type=type_hints["product_key"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument rule_action", value=rule_action, expected_type=type_hints["rule_action"])
            check_type(argname="argument rule_desc", value=rule_desc, expected_type=type_hints["rule_desc"])
            check_type(argname="argument select", value=select, expected_type=type_hints["select"])
            check_type(argname="argument short_topic", value=short_topic, expected_type=type_hints["short_topic"])
            check_type(argname="argument start_rule", value=start_rule, expected_type=type_hints["start_rule"])
            check_type(argname="argument topic_type", value=topic_type, expected_type=type_hints["topic_type"])
            check_type(argname="argument where", value=where, expected_type=type_hints["where"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if data_type is not None:
            self._values["data_type"] = data_type
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id
        if product_key is not None:
            self._values["product_key"] = product_key
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if rule_action is not None:
            self._values["rule_action"] = rule_action
        if rule_desc is not None:
            self._values["rule_desc"] = rule_desc
        if select is not None:
            self._values["select"] = select
        if short_topic is not None:
            self._values["short_topic"] = short_topic
        if start_rule is not None:
            self._values["start_rule"] = start_rule
        if topic_type is not None:
            self._values["topic_type"] = topic_type
        if where is not None:
            self._values["where"] = where

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the rule.

        The name must be 1 to 30 characters in length and can contain
        English letters, digits, underscores (_), and hyphens (-). Chinese language is also
        supported. Each Chinese symbol occupies 2 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataType: The format of the data to be processed by the rule.

        You must specify the format of
        device data to be processed for this parameter. Valid values:
        JSON: JSON data
        BINARY: binary data
        Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
        for RDS.
        Default value: JSON.
        '''
        result = self._values.get("data_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property iotInstanceId: The ID of the instance.

        This parameter is not required for public instances. However,
        the parameter is required for the instances that you have purchased.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def product_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property productKey: The ProductKey of the product to which the rule applies.'''
        result = self._values.get("product_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the rule is assigned.

        You can view the resource
        group information in the Resource Management console.
        If you do not specify this parameter, the rule is assigned to the default resource
        group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_action(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleActionProperty]]]]:
        '''Property ruleAction:.'''
        result = self._values.get("rule_action")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleActionProperty]]]], result)

    @builtins.property
    def rule_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleDesc: The description of the rule.

        The description can be up to 100 characters in length.
        Each Chinese symbol occupies 1 characters.
        '''
        result = self._values.get("rule_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def select(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property select: The SQL SELECT statement that you want to execute.

        For more information, seeSQL expressions.
        Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
        '''
        result = self._values.get("select")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def short_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property shortTopic: The topic to which this rule is applied.

        Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
        Basic communication topics or Thing Specification Language (TSL)-based communication
        topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the
        product. Valid values of topicShortName:
        /thing/event/property/post: submits the property data of a device.
        /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.
        /thing/lifecycle: submits device lifecycle changes.
        /thing/downlink/reply/message: sends a response to a request from IoT Platform.
        /thing/list/found: submits the data when a gateway detects a new sub-device.
        /thing/topo/lifecycle: submits device topology changes.
        /thing/event/property/history/post: submits historical property data of a device.
        /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.
        /ota/upgrade: submits OTA update status.
        /ota/version/post: submits OTA module versions.
        /thing/deviceinfo/update: submits device tag changes.
        /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.
        ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic.
        ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.
        Custom topics. Example:${deviceName}/user/get.
        You can call theQueryProductTopicoperation to view all custom topics of the product.
        When you specify a custom topic, you can use the + and # wildcards.
        You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the
        product.
        You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that
        follow/user.
        For more information about how to use wildcards, see Wildcards in topics.
        Topic that is used to submit device status changes: ${deviceName}.
        You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
        '''
        result = self._values.get("short_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property startRule: Start the rule.

        The rule at least contains one rule action with normal data forward.
        '''
        result = self._values.get("start_rule")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def topic_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.

        1: The topic is a custom topic.
        2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        '''
        result = self._values.get("topic_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def where(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property where: The condition that is used to trigger the rule.

        For more information, seeSQL expressions.
        Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter.
        '''
        result = self._values.get("where")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Device",
    "DeviceGroup",
    "DeviceGroupProps",
    "DeviceProps",
    "Product",
    "ProductProps",
    "ProductTopic",
    "ProductTopicProps",
    "RosDevice",
    "RosDeviceGroup",
    "RosDeviceGroupProps",
    "RosDeviceProps",
    "RosProduct",
    "RosProductProps",
    "RosProductTopic",
    "RosProductTopicProps",
    "RosRule",
    "RosRuleAction",
    "RosRuleActionProps",
    "RosRuleProps",
    "Rule",
    "RuleAction",
    "RuleActionProps",
    "RuleProps",
]

publication.publish()

def _typecheckingstub__7ac566b5b80162572f6151c0268e9d9fc51b028483e4d8f38ee5f7c762e8f27d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DeviceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92d033fee69306c579accd123fdc1756c474e5bbf5fd77fa5210ec0cec3d6c29(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DeviceGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__229087b60a164f1eb26fc74077e7bac7a523f12e4c4a8aab8f775f6ce25ec3bf(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    super_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2323ff50a7b2a720da6ceb765e24fd59dd2a790aa442ce0ae438f25f2a3ad4c2(
    *,
    product_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dev_eui: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    device_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nickname: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pin_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31cdb02c56c3fe04b275cea81b478a51b680982ffe64156bb4f38c152e5abf6d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProductProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c19124601d68a8f032cfeb2a37062241b851ae60254d01c3a9178d3cb60bda3b(
    *,
    node_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    product_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    aliyun_commodity_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auth_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_format: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    id2: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    join_permission_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    publish_auto: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffcd484a0ac891a2697c3758fda8427134931e37606768e029f54fe2c4f55138(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProductTopicProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1983441e60c45f960d64ead796ed504ea2f81888da6238f67e85457ef3b138dd(
    *,
    operation: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    product_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic_short_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__137a28e19f7b2c0c484a7b321cca14482a65b5e152d82a7f6939b005da4dd9fc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDeviceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb49a912a8959322db90f2585b645935ef68eacd7e0cb204ef3219e7e3b30686(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac694e0267ddbd981007bfcbb0a8c8c97e8d4cc87e81f4ee4875183cd848df0e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea2904d9d4e9a2bfc3bb1fc82d2e076cd34a1b0802879bd6d168824ce47d4024(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b451bb67a0d7c2d86c0c65773a4737f160b2381c61a44d0a8afe460579c62210(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a579dfaeff84acd23f529e9ed4333cf7519f70004b25ff483db9163df28ff3d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5b39f72fd072fb2a7877a4344b2e34a2adc1b818b5f153e2a16935e428f9c65(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f33bb348c5bd40e210ec1dcb2dde1b99ad507e6aa7e482a8c32b3aafa01c935a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81d8d7e1251b1c1d94b669f53af5da5ff61efb3e703a76b224f173db0b8df405(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dd337e623767a74285f48856036b9ce8b256182a49c0b2085481be8a5c66b31(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDeviceGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49e6dc63a5f981990401ee1e2ec03bc94fe218038a1d992a0b1804f2fc9bd4f9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87b032bf610c841a3a3ded62305733e6edebec8972c768b49e37d7f7fed55775(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebce8d91846220cb5cd746880856faaca165acc4ec20a33860db71146076f154(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c33fe5aee4e8e5f501ce78ed55f9c48310ed195e3544e845ca553093b34f5831(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee64c5804457b8d18a6d443f7a074930da26147013a67a9d9441320b04e55691(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a385e5e01909e0aed0dd3b4749cda7db4b6d687a0ce7ee348a9fefa5f967d1e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__187feae8dfade4fb19da128966c23857feeb3d4768dac74f7ad9f21af521d556(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    super_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bc585dbac660946af6345c1c23893f2840c74f7cb8fc5212b19277e5d559fe9(
    *,
    product_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dev_eui: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    device_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nickname: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pin_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fabbd3c1594a79737e652e2acb0f050e9d85bc3483c201fd9bd91666df55d77(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProductProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc51fd2b5109392c204a8b08821604916dd6b3fba9e8ccde10fdac25f0d8989d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84f5e2f5a602370170bb60719890fc86d5cc875085de7d96105c34580d1d3c96(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d2a20ee46ac0ba01b85a8f349e70d04c894a3a0a77de97c95c83d2ba03f5be2(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c9303a507a713d0d737d397a75fc02c42806cf3a0a71724b56fc192d6a78dab(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0484d9ff699754664383d704144265af08cf5d8f5ff0bb1a3f269890bc3dd4b0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20dd8b5a3b22367ea404bec7f0ca8407943cb1d5bbf9f2f25cc6ec18537ec49b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__960fc4cf773655286c399dab520a92cf26cade0932dc78bcd3fe1a0b0859ae85(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c0075904316f481d545e21d8ea68afa7df8b2b74bd59d1d9e20ea97ea30a3be(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b57a3d254fad8332b60d334406e57cb23b625866ba8758185a97e1e846ee9a6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76b3ee71af2474a95d2cb11a6d38bb3904dc9cfad0d68f0b36252497c9e79de9(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1eb4de6b8bd62915307c4f4ec4d517ae8cb7ec2adee1923ef930a4a1217802a5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41d98ff337466cd5c1f565f7fc73d6db1dfdba6562a38b644799f552473a4a12(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6abca50e9c7528b80cbd78dc5ecdb68c388deff4ac8a386a699339b32e9cd8fc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db7c1bd5250feb9897d95b8a1ec45b9aaf5214894fb3a30b9b2658cf731f1bda(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afe9fef6c1a93384d06a4b061d2f7573f42d3e3b244d43c90dc777c8e044967c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b43aedf60a79beb10ea0bad175ee1e570dc7d28284df2f7d65cddacea7a66927(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c4e24f8f9d3dc72247868bb9e7071024e9c97506ef79beb7407dbc34831122c(
    *,
    node_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    product_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    aliyun_commodity_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auth_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    category_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_format: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    id2: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    join_permission_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    net_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    publish_auto: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c86a65c0bfeaa9bf20886df6d13136500d7f31e5a9d2856d32e3e4fd0764e6b3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProductTopicProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de68ae36eb1fa744ac4607671d7999d13dee5f7a7c445951fd43eb547dc5ecdc(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1437bff5bffdad5a1ca1c35d94fdb84872b8e7d02b645e8c93241cdf92fe927(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d007a5918b51539524a90357b69b933db556a8a4813ab4162bb5223909ba5df5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14be31536e550b2d93d682c53c7774403e573d5d9bc5fb3dd616f85215605833(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b550e298138e6ee4206132e1d7ec977ff81231a7679197e459b67ebc07cdc20(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b43b7b0fb58b545164cb48aa3185c16aa59e34c3d75a4fa1fa217d34534c719(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e029c3b0e92a56b1c54ad5572105945225065b8c2927a9386636b739d20c0ee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d82d7fe4083b3dd0489b59c4289ec05b5690a537e366d91f5d2c2f0e624a220(
    *,
    operation: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    product_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic_short_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5bbd106b8a34a927ed3fb94753b2b28c81750a5c8f2134e95ebb84f07da629da(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9dfba5e37f52b619b41a7fdd1f508c666ad04c016ab1e0702e981e1b4ea70cb7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__952f091f8abe41c20ce79af262b61a958ce5c49a24dc0ee21998347a76f9f5fa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76d7d8fe73303b86f4a3368150bb1e3ffcca1f93a556a4a4e359da96b280c50e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c921134de66de6ae8c48122dc7cbdb6c55a79abcbabff2fdd8b93549e7e2016(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__303f75cfec83501586f9e38916e9aa29262ae49a0e35e761adf5554ba016d40a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e41c852e68694bec8a552531b774657f206030c25c073300593107e6d5a0e402(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa0557fb3628ca51ceaa047d2948a8ccacb8d3e24fa4a9b8c64d63eedae718d5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4db3cd688de666ca42c357c2f88f65069e413274a8f07a90f32600748a353c30(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleActionProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5a93d0de921f84ebc30fddcb4a2c0baa52da10b9539513d75d0c7785ef77b81(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__529feb2c3b28321e14e1d5cb8e015821bc0859745f282f39f1c7630962dddf91(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e82282e2294f201c47cdd988a5daecebc7546434ba027490812e43eed151002d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93be0c6ab89b305083fed54488bb6db604ea76e44150498530dcbe11deb96fcc(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b12b0416a57293fea014fec01c13b7b3a505a47462d0ddcc8e1c3e416320deaf(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a37b8c22be33c191b2bf4b04099a583ad3a5e636290192291ecdad773fbd52df(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56d6b017086d3d4edeaf6b55d227b226f0ac5954e884388be099039ae9c0947c(
    *,
    configuration: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    error_action_flag: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2a8fed41400f16eddc8ab7d22d85b06cad631990518589ddf681ce6164c5bd4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRuleActionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79b3667d3a4160cc861b0b4bed11606263cef6beeb7e4149f49cfadcb722e004(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e30493374f4ddb251dff7a96870dbfeec66fc9b29c4e6af44c7524849129db31(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6dff3d0c510eea6e1af195667b62d94af89a1967c0bfbd7e570505095cdca6ea(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60d606d36a0c08a629de972d275cdb468888c30bd3c7216d8772e0b511e91ce2(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__528ba8c74f3fdd02e33aa900cfccae251952df4c438b6fb4487d5dd1bb4c54bf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7d0dbde5a33d56c62bb791977b00ee07cfad6b539e7becc1af190bcfbb159ad(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a8a11ed4ffa318df9bfb2bc04ed06ace247483c16f1a92c843749cbcc5ed80e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b31bf809ae1d7da631f5e63c32cc0a3a11840b31c9b609bf8f7dc880a487bf9(
    *,
    configuration: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    error_action_flag: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bf4f2a3caac6d91717c136a12791b6b49c38ee0222f5cfadb15644796617cc0(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_action: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleActionProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    rule_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    select: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    short_topic: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_rule: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    topic_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    where: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__679e1d4021baf037f3ffc6b78cac666e2e5556a43bd7b6cdfd691ee02c7d9b8c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__937ad0d74c02d25c9b85d085be4d40b24af87309ef7b750d7b2db1b1545bea70(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RuleActionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23c5bcaa1fdc83f8ce53e359595d89abec15e7e1b682b6d684cdf7919e82f25c(
    *,
    configuration: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    error_action_flag: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f21b92733a05b4903e00220dc7f0b7852f65e73f5344c9911f6ad22afae7697(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    data_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    iot_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    product_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_action: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleActionProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    rule_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    select: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    short_topic: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_rule: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    topic_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    where: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
