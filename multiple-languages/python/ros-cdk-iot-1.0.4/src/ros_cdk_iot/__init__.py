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

from ._jsii import *

import ros_cdk_core


class Device(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.Device",
):
    '''A ROS resource type:  ``ALIYUN::IOT::Device``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DeviceProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDeviceName")
    def attr_device_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DeviceName: Device name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDeviceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDeviceSecret")
    def attr_device_secret(self) -> ros_cdk_core.IResolvable:
        '''Attribute DeviceSecret: Device key.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDeviceSecret"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIotId")
    def attr_iot_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.

        Description Keep, do not leak.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIotId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute IotInstanceId: IOT instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIotInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute IpAddress: IP address.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNickName")
    def attr_nick_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute NickName: Nick name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNickName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute NodeType: Node type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> ros_cdk_core.IResolvable:
        '''Attribute ProductKey: Product key.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProductKey"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProductName")
    def attr_product_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ProductName: Product name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProductName"))


class DeviceGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.DeviceGroup",
):
    '''A ROS resource type:  ``ALIYUN::IOT::DeviceGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DeviceGroupProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute GroupId: Packet, ID, System for the globally unique identifier generated packet.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute IotInstanceId: IOT instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIotInstanceId"))


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
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        super_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::DeviceGroup``.

        :param group_name: Property groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        :param group_desc: Property groupDesc: The description of the group. You can enter a description with up to 100 characters.
        :param iot_instance_id: Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        :param super_group_id: Property superGroupId: The ID of the parent group. If you want to create a first-level group, do not enter this parameter.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }
        if group_desc is not None:
            self._values["group_desc"] = group_desc
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id
        if super_group_id is not None:
            self._values["super_group_id"] = super_group_id

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupName: The name of the group.

        The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property groupDesc: The description of the group.

        You can enter a description with up to 100 characters.
        '''
        result = self._values.get("group_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property iotInstanceId: Public instance does not pass this parameter;

        instance that you need to buy the incoming instance ID.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def super_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property superGroupId: The ID of the parent group.

        If you want to create a first-level group, do not enter this parameter.
        '''
        result = self._values.get("super_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        product_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        dev_eui: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        device_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        nickname: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pin_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::Device``.

        :param product_key: Property productKey: The identifier of the product to which the device to be registered belongs.
        :param dev_eui: Property devEui: DevEUI LoRaWAN equipment. When you create a LoRaWAN devices, this will pass.
        :param device_name: Property deviceName: The name of the device that you want to register. The device name must consist of 4 to 32 characters, including English letters, digits, and special characters, for example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:). DeviceName is used with ProductKey to identify a specified device. Note If you do not specify this parameter, the system will generate a name for the device.
        :param iot_instance_id: Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        :param nickname: Property nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can contain Chinese characters, English letters, numbers and underscores (_). A Chinese character counts as two characters.
        :param pin_code: Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI. When you create a LoRaWAN devices, this will pass.
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    def product_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property productKey: The identifier of the product to which the device to be registered belongs.'''
        result = self._values.get("product_key")
        assert result is not None, "Required property 'product_key' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def dev_eui(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property devEui: DevEUI LoRaWAN equipment.

        When you create a LoRaWAN devices, this will pass.
        '''
        result = self._values.get("dev_eui")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def device_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property deviceName: The name of the device that you want to register.

        The device name must consist of
        4 to 32 characters, including English letters, digits, and special characters, for
        example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).
        DeviceName is used with ProductKey to identify a specified device.
        Note If you do not specify this parameter, the system will generate a name for the device.
        '''
        result = self._values.get("device_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property iotInstanceId: Public instance does not pass this parameter;

        instance that you need to buy the incoming instance ID.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def nickname(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property nickname: Add a nickname for the device.

        A nickname can be 4-64 characters in length, and can
        contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        character counts as two characters.
        '''
        result = self._values.get("nickname")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pin_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.

        When you create a LoRaWAN devices, this will pass.
        '''
        result = self._values.get("pin_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DeviceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Product(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.Product",
):
    '''A ROS resource type:  ``ALIYUN::IOT::Product``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ProductProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute IotInstanceId: IOT instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIotInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> ros_cdk_core.IResolvable:
        '''Attribute ProductKey: The globally unique identifier of the product issued by IoT Platform.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProductKey"))


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
        node_type: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        product_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        aliyun_commodity_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auth_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        category_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        data_format: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        id2: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        join_permission_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        net_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        protocol_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        publish_auto: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def node_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def product_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property productName: The name of the product.

        A product name can be 4 to 30 characters in length and can
        contain Chinese characters, English letters, digits, and underscores (_).
        Note A product name must be unique in an account.
        '''
        result = self._values.get("product_name")
        assert result is not None, "Required property 'product_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def aliyun_commodity_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property aliyunCommodityCode: The edition of the product that you want to create.

        There are two options:
        iothub_senior: Pro Edition.
        iothub: Basic Edition.
        If you do not input this parameter, the default value is used, which is iothub (Basic
        Edition).
        '''
        result = self._values.get("aliyun_commodity_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def category_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property categoryKey: Identifier Product category.

        If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
        Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
        '''
        result = self._values.get("category_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def data_format(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.

        This parameter is only available and required when you create a Pro Edition product.
        Options:
        0: Do not parse/Custom.
        1: Alink JSON.
        '''
        result = self._values.get("data_format")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: A description of the product.

        The description can be a maximum of 100 characters in
        length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def id2(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property iotInstanceId: Public instance does not pass this parameter;

        instance that you need to buy the incoming instance ID.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def join_permission_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property joinPermissionId: LoRaWAN network credential ID.

        When networking mode NetType chosen LORA, the necessary parameters.
        Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
        If you do not LoRaWAN network credentials, visit the network management platform to create things together.
        '''
        result = self._values.get("join_permission_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def publish_auto(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property publishAuto: Whether to automatically model publication after the product is created.

        true: publishing.
        false: not released.
        This parameter is not passed, the default value true.
        '''
        result = self._values.get("publish_auto")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.

        If this parameter is passed, the product will be classified as a default resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProductProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ProductTopic(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.ProductTopic",
):
    '''A ROS resource type:  ``ALIYUN::IOT::ProductTopic``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ProductTopicProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopicId")
    def attr_topic_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TopicId: Topic ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopicId"))


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
        operation: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        product_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        topic_short_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::ProductTopic``.

        :param operation: Property operation: Operation permissions of devices on the topic category. Value options: SUB: Subscribe. Devices can subscribe to the topics of this category. PUB: Publish. Devices can publish messages using the topics of this category. ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        :param product_key: Property productKey: The unique identifier of the product for which you want to create a topic category.
        :param topic_short_name: Property topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName. Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        :param desc: Property desc: The description of the topic category. You can enter a description with up to 100 characters.
        :param iot_instance_id: Property iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "operation": operation,
            "product_key": product_key,
            "topic_short_name": topic_short_name,
        }
        if desc is not None:
            self._values["desc"] = desc
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id

    @builtins.property
    def operation(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property operation: Operation permissions of devices on the topic category.

        Value options:
        SUB: Subscribe. Devices can subscribe to the topics of this category.
        PUB: Publish. Devices can publish messages using the topics of this category.
        ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        '''
        result = self._values.get("operation")
        assert result is not None, "Required property 'operation' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def product_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property productKey: The unique identifier of the product for which you want to create a topic category.'''
        result = self._values.get("product_key")
        assert result is not None, "Required property 'product_key' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def topic_short_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property topicShortName: The custom category hierarchy in the topic category.

        By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
        Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        '''
        result = self._values.get("topic_short_name")
        assert result is not None, "Required property 'topic_short_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property desc: The description of the topic category.

        You can enter a description with up to 100 characters.
        '''
        result = self._values.get("desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property iotInstanceId: Instance ID you purchased.

        Public instances do not need pass this property.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProductTopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDevice(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosDevice",
):
    '''A ROS template type:  ``ALIYUN::IOT::Device``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDeviceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::Device``.

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
    @jsii.member(jsii_name="attrDeviceName")
    def attr_device_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DeviceName: Device name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDeviceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDeviceSecret")
    def attr_device_secret(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DeviceSecret: Device key.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDeviceSecret"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIotId")
    def attr_iot_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        IotId: Things internet device ID issued for the device, as the unique identifier of the device.
        Description Keep, do not leak.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIotId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IotInstanceId: IOT instance ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIotInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IpAddress: IP address.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNickName")
    def attr_nick_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NickName: Nick name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNickName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NodeType: Node type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNodeType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ProductKey: Product key.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProductKey"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProductName")
    def attr_product_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ProductName: Product name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProductName"))

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
    @jsii.member(jsii_name="productKey")
    def product_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: productKey: The identifier of the product to which the device to be registered belongs.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "productKey"))

    @product_key.setter
    def product_key(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "productKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="devEui")
    def dev_eui(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        devEui: DevEUI LoRaWAN equipment.
        When you create a LoRaWAN devices, this will pass.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "devEui"))

    @dev_eui.setter
    def dev_eui(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "devEui", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deviceName")
    def device_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "deviceName"))

    @device_name.setter
    def device_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deviceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "iotInstanceId"))

    @iot_instance_id.setter
    def iot_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "iotInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="nickname")
    def nickname(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
        contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        character counts as two characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "nickname"))

    @nickname.setter
    def nickname(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "nickname", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pinCode")
    def pin_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
        When you create a LoRaWAN devices, this will pass.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pinCode"))

    @pin_code.setter
    def pin_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pinCode", value)


class RosDeviceGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosDeviceGroup",
):
    '''A ROS template type:  ``ALIYUN::IOT::DeviceGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDeviceGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::DeviceGroup``.

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
        :Attribute: GroupId: Packet, ID, System for the globally unique identifier generated packet.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IotInstanceId: IOT instance ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIotInstanceId"))

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
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupDesc")
    def group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: groupDesc: The description of the group. You can enter a description with up to 100 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "groupDesc"))

    @group_desc.setter
    def group_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "groupDesc", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "iotInstanceId"))

    @iot_instance_id.setter
    def iot_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "iotInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="superGroupId")
    def super_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        superGroupId: The ID of the parent group.
        If you want to create a first-level group, do not enter this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "superGroupId"))

    @super_group_id.setter
    def super_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        super_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::DeviceGroup``.

        :param group_name: 
        :param group_desc: 
        :param iot_instance_id: 
        :param super_group_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }
        if group_desc is not None:
            self._values["group_desc"] = group_desc
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id
        if super_group_id is not None:
            self._values["super_group_id"] = super_group_id

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: groupDesc: The description of the group. You can enter a description with up to 100 characters.
        '''
        result = self._values.get("group_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def super_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        superGroupId: The ID of the parent group.
        If you want to create a first-level group, do not enter this parameter.
        '''
        result = self._values.get("super_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        product_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        dev_eui: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        device_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        nickname: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pin_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::Device``.

        :param product_key: 
        :param dev_eui: 
        :param device_name: 
        :param iot_instance_id: 
        :param nickname: 
        :param pin_code: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    def product_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: productKey: The identifier of the product to which the device to be registered belongs.
        '''
        result = self._values.get("product_key")
        assert result is not None, "Required property 'product_key' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def dev_eui(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        devEui: DevEUI LoRaWAN equipment.
        When you create a LoRaWAN devices, this will pass.
        '''
        result = self._values.get("dev_eui")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def device_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def nickname(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
        contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        character counts as two characters.
        '''
        result = self._values.get("nickname")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pin_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
        When you create a LoRaWAN devices, this will pass.
        '''
        result = self._values.get("pin_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDeviceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProduct(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosProduct",
):
    '''A ROS template type:  ``ALIYUN::IOT::Product``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosProductProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::Product``.

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
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IotInstanceId: IOT instance ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIotInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ProductKey: The globally unique identifier of the product issued by IoT Platform.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProductKey"))

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
    @jsii.member(jsii_name="nodeType")
    def node_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        nodeType: The node type of the product. Values:
        0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
        either directly or as a sub-device of a gateway.
        1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
        the topological relationships with sub-devices, and synchronize the topological relationships
        to IoT Platform.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "nodeType"))

    @node_type.setter
    def node_type(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "nodeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="productName")
    def product_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        productName: The name of the product. A product name can be 4 to 30 characters in length and can
        contain Chinese characters, English letters, digits, and underscores (_).
        Note A product name must be unique in an account.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "productName"))

    @product_name.setter
    def product_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "productName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aliyunCommodityCode")
    def aliyun_commodity_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        aliyunCommodityCode: The edition of the product that you want to create. There are two options:
        iothub_senior: Pro Edition.
        iothub: Basic Edition.
        If you do not input this parameter, the default value is used, which is iothub (Basic
        Edition).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "aliyunCommodityCode"))

    @aliyun_commodity_code.setter
    def aliyun_commodity_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "aliyunCommodityCode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="authType")
    def auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "authType"))

    @auth_type.setter
    def auth_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "authType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="categoryKey")
    def category_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
        Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "categoryKey"))

    @category_key.setter
    def category_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "categoryKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dataFormat")
    def data_format(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
        This parameter is only available and required when you create a Pro Edition product.
        Options:
        0: Do not parse/Custom.
        1: Alink JSON.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "dataFormat"))

    @data_format.setter
    def data_format(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dataFormat", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: A description of the product. The description can be a maximum of 100 characters in
        length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="id2")
    def id2(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "id2"))

    @id2.setter
    def id2(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "id2", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "iotInstanceId"))

    @iot_instance_id.setter
    def iot_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "iotInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="joinPermissionId")
    def join_permission_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
        Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
        If you do not LoRaWAN network credentials, visit the network management platform to create things together.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "joinPermissionId"))

    @join_permission_id.setter
    def join_permission_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "joinPermissionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="netType")
    def net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "netType"))

    @net_type.setter
    def net_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "netType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="protocolType")
    def protocol_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "protocolType"))

    @protocol_type.setter
    def protocol_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "protocolType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="publishAuto")
    def publish_auto(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        publishAuto: Whether to automatically model publication after the product is created.
        true: publishing.
        false: not released.
        This parameter is not passed, the default value true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "publishAuto"))

    @publish_auto.setter
    def publish_auto(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "publishAuto", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
        If this parameter is passed, the product will be classified as a default resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        node_type: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        product_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        aliyun_commodity_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auth_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        category_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        data_format: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        id2: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        join_permission_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        net_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        protocol_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        publish_auto: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def node_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def product_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        productName: The name of the product. A product name can be 4 to 30 characters in length and can
        contain Chinese characters, English letters, digits, and underscores (_).
        Note A product name must be unique in an account.
        '''
        result = self._values.get("product_name")
        assert result is not None, "Required property 'product_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def aliyun_commodity_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        aliyunCommodityCode: The edition of the product that you want to create. There are two options:
        iothub_senior: Pro Edition.
        iothub: Basic Edition.
        If you do not input this parameter, the default value is used, which is iothub (Basic
        Edition).
        '''
        result = self._values.get("aliyun_commodity_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def category_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
        Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
        '''
        result = self._values.get("category_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def data_format(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
        This parameter is only available and required when you create a Pro Edition product.
        Options:
        0: Do not parse/Custom.
        1: Alink JSON.
        '''
        result = self._values.get("data_format")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: A description of the product. The description can be a maximum of 100 characters in
        length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def id2(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def join_permission_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
        Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
        If you do not LoRaWAN network credentials, visit the network management platform to create things together.
        '''
        result = self._values.get("join_permission_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def net_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def protocol_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def publish_auto(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        publishAuto: Whether to automatically model publication after the product is created.
        true: publishing.
        false: not released.
        This parameter is not passed, the default value true.
        '''
        result = self._values.get("publish_auto")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
        If this parameter is passed, the product will be classified as a default resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProductProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProductTopic(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosProductTopic",
):
    '''A ROS template type:  ``ALIYUN::IOT::ProductTopic``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosProductTopicProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::ProductTopic``.

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
    @jsii.member(jsii_name="attrTopicId")
    def attr_topic_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TopicId: Topic ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopicId"))

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
    @jsii.member(jsii_name="operation")
    def operation(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        operation: Operation permissions of devices on the topic category. Value options:
        SUB: Subscribe. Devices can subscribe to the topics of this category.
        PUB: Publish. Devices can publish messages using the topics of this category.
        ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "operation"))

    @operation.setter
    def operation(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "operation", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="productKey")
    def product_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: productKey: The unique identifier of the product for which you want to create a topic category.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "productKey"))

    @product_key.setter
    def product_key(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "productKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="topicShortName")
    def topic_short_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
        Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "topicShortName"))

    @topic_short_name.setter
    def topic_short_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "topicShortName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="desc")
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: desc: The description of the topic category. You can enter a description with up to 100 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "desc"))

    @desc.setter
    def desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "desc", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "iotInstanceId"))

    @iot_instance_id.setter
    def iot_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        operation: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        product_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        topic_short_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::ProductTopic``.

        :param operation: 
        :param product_key: 
        :param topic_short_name: 
        :param desc: 
        :param iot_instance_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "operation": operation,
            "product_key": product_key,
            "topic_short_name": topic_short_name,
        }
        if desc is not None:
            self._values["desc"] = desc
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id

    @builtins.property
    def operation(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        operation: Operation permissions of devices on the topic category. Value options:
        SUB: Subscribe. Devices can subscribe to the topics of this category.
        PUB: Publish. Devices can publish messages using the topics of this category.
        ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        '''
        result = self._values.get("operation")
        assert result is not None, "Required property 'operation' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def product_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: productKey: The unique identifier of the product for which you want to create a topic category.
        '''
        result = self._values.get("product_key")
        assert result is not None, "Required property 'product_key' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def topic_short_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
        Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        '''
        result = self._values.get("topic_short_name")
        assert result is not None, "Required property 'topic_short_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: desc: The description of the topic category. You can enter a description with up to 100 characters.
        '''
        result = self._values.get("desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProductTopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRule(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosRule",
):
    '''A ROS template type:  ``ALIYUN::IOT::Rule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::Rule``.

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
    @jsii.member(jsii_name="attrActionId")
    def attr_action_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ActionId: The ID of the rule action.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrActionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RuleId: The ID of the rule.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRuleId"))

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
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: The name of the rule. The name must be 1 to 30 characters in length and can contain
        English letters, digits, underscores (_), and hyphens (-). Chinese language is also
        supported. Each Chinese symbol occupies 2 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dataType")
    def data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dataType"))

    @data_type.setter
    def data_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dataType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
        the parameter is required for the instances that you have purchased.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "iotInstanceId"))

    @iot_instance_id.setter
    def iot_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "iotInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="productKey")
    def product_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: productKey: The ProductKey of the product to which the rule applies.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "productKey"))

    @product_key.setter
    def product_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "productKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource
        group information in the Resource Management console.
        If you do not specify this parameter, the rule is assigned to the default resource
        group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ruleAction")
    def rule_action(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.RuleActionProperty"]]]]:
        '''
        :Property: ruleAction:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.RuleActionProperty"]]]], jsii.get(self, "ruleAction"))

    @rule_action.setter
    def rule_action(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.RuleActionProperty"]]]],
    ) -> None:
        jsii.set(self, "ruleAction", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ruleDesc")
    def rule_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ruleDesc: The description of the rule. The description can be up to 100 characters in length.
        Each Chinese symbol occupies 1 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "ruleDesc"))

    @rule_desc.setter
    def rule_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ruleDesc", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="select")
    def select(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
        Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "select"))

    @select.setter
    def select(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "select", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="shortTopic")
    def short_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "shortTopic"))

    @short_topic.setter
    def short_topic(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "shortTopic", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="startRule")
    def start_rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: startRule: Start the rule. The rule at least contains one rule action with normal data forward.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "startRule"))

    @start_rule.setter
    def start_rule(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "startRule", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="topicType")
    def topic_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
        1: The topic is a custom topic.
        2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "topicType"))

    @topic_type.setter
    def topic_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "topicType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="where")
    def where(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
        Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "where"))

    @where.setter
    def where(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
            configuration: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            error_action_flag: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param configuration: 
            :param type: 
            :param error_action_flag: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "configuration": configuration,
                "type": type,
            }
            if error_action_flag is not None:
                self._values["error_action_flag"] = error_action_flag

        @builtins.property
        def configuration(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            configuration: The configurations of the rule action. You must specify a JSON string. The configurations
            for different types of rule actions are different. For more information about required
            syntax and examples, see the following tables.
            '''
            result = self._values.get("configuration")
            assert result is not None, "Required property 'configuration' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def error_action_flag(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RuleActionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosRuleAction(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosRuleAction",
):
    '''A ROS template type:  ``ALIYUN::IOT::RuleAction``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRuleActionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::IOT::RuleAction``.

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
    @jsii.member(jsii_name="attrActionId")
    def attr_action_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ActionId: The ID of the rule action.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrActionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="configuration")
    def configuration(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        configuration: The configurations of the rule action. You must specify a JSON string. The configurations
        for different types of rule actions are different. For more information about required
        syntax and examples, see the following tables.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "configuration"))

    @configuration.setter
    def configuration(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "configuration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ruleId")
    def rule_id(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        ruleId: The ID of the rule for which you want to create an action. You can use either of the
        following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "ruleId"))

    @rule_id.setter
    def rule_id(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ruleId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "type", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="errorActionFlag")
    def error_action_flag(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "errorActionFlag"))

    @error_action_flag.setter
    def error_action_flag(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "errorActionFlag", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
        the parameter is required for the instances that you have purchased.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "iotInstanceId"))

    @iot_instance_id.setter
    def iot_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        configuration: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        rule_id: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        error_action_flag: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::RuleAction``.

        :param configuration: 
        :param rule_id: 
        :param type: 
        :param error_action_flag: 
        :param iot_instance_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "configuration": configuration,
            "rule_id": rule_id,
            "type": type,
        }
        if error_action_flag is not None:
            self._values["error_action_flag"] = error_action_flag
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id

    @builtins.property
    def configuration(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        configuration: The configurations of the rule action. You must specify a JSON string. The configurations
        for different types of rule actions are different. For more information about required
        syntax and examples, see the following tables.
        '''
        result = self._values.get("configuration")
        assert result is not None, "Required property 'configuration' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rule_id(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        ruleId: The ID of the rule for which you want to create an action. You can use either of the
        following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
        '''
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def error_action_flag(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
        the parameter is required for the instances that you have purchased.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        data_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        product_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        rule_action: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleActionProperty]]]] = None,
        rule_desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        select: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        short_topic: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        start_rule: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        topic_type: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        where: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        name: The name of the rule. The name must be 1 to 30 characters in length and can contain
        English letters, digits, underscores (_), and hyphens (-). Chinese language is also
        supported. Each Chinese symbol occupies 2 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
        the parameter is required for the instances that you have purchased.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def product_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: productKey: The ProductKey of the product to which the rule applies.
        '''
        result = self._values.get("product_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource
        group information in the Resource Management console.
        If you do not specify this parameter, the rule is assigned to the default resource
        group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def rule_action(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleActionProperty]]]]:
        '''
        :Property: ruleAction:
        '''
        result = self._values.get("rule_action")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleActionProperty]]]], result)

    @builtins.property
    def rule_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ruleDesc: The description of the rule. The description can be up to 100 characters in length.
        Each Chinese symbol occupies 1 characters.
        '''
        result = self._values.get("rule_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def select(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
        Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
        '''
        result = self._values.get("select")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def short_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def start_rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: startRule: Start the rule. The rule at least contains one rule action with normal data forward.
        '''
        result = self._values.get("start_rule")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def topic_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
        1: The topic is a custom topic.
        2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        '''
        result = self._values.get("topic_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def where(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
        Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter.
        '''
        result = self._values.get("where")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Rule(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.Rule",
):
    '''A ROS resource type:  ``ALIYUN::IOT::Rule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RuleProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrActionId")
    def attr_action_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ActionId: The ID of the rule action.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrActionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RuleId: The ID of the rule.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRuleId"))


class RuleAction(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RuleAction",
):
    '''A ROS resource type:  ``ALIYUN::IOT::RuleAction``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RuleActionProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrActionId")
    def attr_action_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ActionId: The ID of the rule action.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrActionId"))


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
        configuration: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        rule_id: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        error_action_flag: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::IOT::RuleAction``.

        :param configuration: Property configuration: The configurations of the rule action. You must specify a JSON string. The configurations for different types of rule actions are different. For more information about required syntax and examples, see the following tables.
        :param rule_id: Property ruleId: The ID of the rule for which you want to create an action. You can use either of the following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
        :param type: Property type: The type of the rule action. Valid values: MNS: forwards data in the topics that have been processed by the rule engine to Message Service (MNS) for message transmission. FC: forwards data in the topics that have been processed by the rule engine to Function Compute for event computing. REPUBLISH: forwards data in the topics that have been processed by the rule engine to another IoT Platform topic. AMQP: forwards data to AMQP consumer groups. OTS: forwards data in the topics that have been processed by the rule engine to Table Store for NoSQL data storage. Note Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store. Destination Alibaba Cloud services that are supported by the rule engine vary based on regions. For more information about the regions and destination cloud services that are supported by the rule engine, see Regions and zones.
        :param error_action_flag: Property errorActionFlag: Indicates whether the rule action forwarded error operation data. Error operation data indicates that the rule engine failed to forward data from the IoT Platform topic to the destination cloud service. A data forwarding failure indicates that forwarding retries also failed. Valid values: true: forwards error operation data. false: forwards normal data instead of error operation data. Default value: false.
        :param iot_instance_id: Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "configuration": configuration,
            "rule_id": rule_id,
            "type": type,
        }
        if error_action_flag is not None:
            self._values["error_action_flag"] = error_action_flag
        if iot_instance_id is not None:
            self._values["iot_instance_id"] = iot_instance_id

    @builtins.property
    def configuration(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property configuration: The configurations of the rule action.

        You must specify a JSON string. The configurations
        for different types of rule actions are different. For more information about required
        syntax and examples, see the following tables.
        '''
        result = self._values.get("configuration")
        assert result is not None, "Required property 'configuration' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rule_id(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property ruleId: The ID of the rule for which you want to create an action.

        You can use either of the
        following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
        '''
        result = self._values.get("rule_id")
        assert result is not None, "Required property 'rule_id' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def error_action_flag(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property iotInstanceId: The ID of the instance.

        This parameter is not required for public instances. However,
        the parameter is required for the instances that you have purchased.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        data_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        product_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        rule_action: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleActionProperty]]]] = None,
        rule_desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        select: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        short_topic: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        start_rule: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        topic_type: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        where: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: The name of the rule.

        The name must be 1 to 30 characters in length and can contain
        English letters, digits, underscores (_), and hyphens (-). Chinese language is also
        supported. Each Chinese symbol occupies 2 characters.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def iot_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property iotInstanceId: The ID of the instance.

        This parameter is not required for public instances. However,
        the parameter is required for the instances that you have purchased.
        '''
        result = self._values.get("iot_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def product_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property productKey: The ProductKey of the product to which the rule applies.'''
        result = self._values.get("product_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the rule is assigned.

        You can view the resource
        group information in the Resource Management console.
        If you do not specify this parameter, the rule is assigned to the default resource
        group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def rule_action(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleActionProperty]]]]:
        '''Property ruleAction:.'''
        result = self._values.get("rule_action")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleActionProperty]]]], result)

    @builtins.property
    def rule_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property ruleDesc: The description of the rule.

        The description can be up to 100 characters in length.
        Each Chinese symbol occupies 1 characters.
        '''
        result = self._values.get("rule_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def select(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property select: The SQL SELECT statement that you want to execute.

        For more information, seeSQL expressions.
        Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
        '''
        result = self._values.get("select")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def short_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def start_rule(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property startRule: Start the rule.

        The rule at least contains one rule action with normal data forward.
        '''
        result = self._values.get("start_rule")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def topic_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.

        1: The topic is a custom topic.
        2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        '''
        result = self._values.get("topic_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def where(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property where: The condition that is used to trigger the rule.

        For more information, seeSQL expressions.
        Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter.
        '''
        result = self._values.get("where")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
