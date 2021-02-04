"""
## Aliyun ROS IOT Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_iot as IOT
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


class Device(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.Device",
):
    """A ROS resource type:  ``ALIYUN::IOT::Device``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DeviceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::IOT::Device``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Device, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDeviceName")
    def attr_device_name(self) -> typing.Any:
        """
        :Attribute: DeviceName: Device name.
        """
        return jsii.get(self, "attrDeviceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDeviceSecret")
    def attr_device_secret(self) -> typing.Any:
        """
        :Attribute: DeviceSecret: Device key.
        """
        return jsii.get(self, "attrDeviceSecret")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIotId")
    def attr_iot_id(self) -> typing.Any:
        """
        :Attribute:

        IotId: Things internet device ID issued for the device, as the unique identifier of the device.
        Description Keep, do not leak.
        """
        return jsii.get(self, "attrIotId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> typing.Any:
        """
        :Attribute: IotInstanceId: IOT instance ID.
        """
        return jsii.get(self, "attrIotInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> typing.Any:
        """
        :Attribute: IpAddress: IP address.
        """
        return jsii.get(self, "attrIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNickName")
    def attr_nick_name(self) -> typing.Any:
        """
        :Attribute: NickName: Nick name.
        """
        return jsii.get(self, "attrNickName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> typing.Any:
        """
        :Attribute: NodeType: Node type.
        """
        return jsii.get(self, "attrNodeType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> typing.Any:
        """
        :Attribute: ProductKey: Product key.
        """
        return jsii.get(self, "attrProductKey")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProductName")
    def attr_product_name(self) -> typing.Any:
        """
        :Attribute: ProductName: Product name.
        """
        return jsii.get(self, "attrProductName")


class DeviceGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.DeviceGroup",
):
    """A ROS resource type:  ``ALIYUN::IOT::DeviceGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DeviceGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::IOT::DeviceGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DeviceGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupId")
    def attr_group_id(self) -> typing.Any:
        """
        :Attribute: GroupId: Packet, ID, System for the globally unique identifier generated packet.
        """
        return jsii.get(self, "attrGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> typing.Any:
        """
        :Attribute: IotInstanceId: IOT instance ID.
        """
        return jsii.get(self, "attrIotInstanceId")


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
        group_name: builtins.str,
        group_desc: typing.Optional[builtins.str] = None,
        iot_instance_id: typing.Optional[builtins.str] = None,
        super_group_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::IOT::DeviceGroup``.

        :param group_name: 
        :param group_desc: 
        :param iot_instance_id: 
        :param super_group_id: 
        """
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
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        """
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return result

    @builtins.property
    def group_desc(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupDesc: The description of the group. You can enter a description with up to 100 characters.
        """
        result = self._values.get("group_desc")
        return result

    @builtins.property
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        """
        result = self._values.get("iot_instance_id")
        return result

    @builtins.property
    def super_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        superGroupId: The ID of the parent group.
        If you want to create a first-level group, do not enter this parameter.
        """
        result = self._values.get("super_group_id")
        return result

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
        product_key: builtins.str,
        dev_eui: typing.Optional[builtins.str] = None,
        device_name: typing.Optional[builtins.str] = None,
        iot_instance_id: typing.Optional[builtins.str] = None,
        nickname: typing.Optional[builtins.str] = None,
        pin_code: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::IOT::Device``.

        :param product_key: 
        :param dev_eui: 
        :param device_name: 
        :param iot_instance_id: 
        :param nickname: 
        :param pin_code: 
        """
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
    def product_key(self) -> builtins.str:
        """
        :Property: productKey: The identifier of the product to which the device to be registered belongs.
        """
        result = self._values.get("product_key")
        assert result is not None, "Required property 'product_key' is missing"
        return result

    @builtins.property
    def dev_eui(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        devEui: DevEUI LoRaWAN equipment.
        When you create a LoRaWAN devices, this will pass.
        """
        result = self._values.get("dev_eui")
        return result

    @builtins.property
    def device_name(self) -> typing.Optional[builtins.str]:
        """
        ::

        ), periods (.) , and colons (:).
        DeviceName is used with ProductKey to identify a specified device.
        Note If you do not specify this parameter, the system will generate a name for the device.
        :Property:

        deviceName: The name of the device that you want to register. The device name must consist of
        4 to 32 characters, including English letters, digits, and special characters, for
        example, hyphens (-), underscores (_), at signs (
        """
        result = self._values.get("device_name")
        return result

    @builtins.property
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        """
        result = self._values.get("iot_instance_id")
        return result

    @builtins.property
    def nickname(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
        contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        character counts as two characters.
        """
        result = self._values.get("nickname")
        return result

    @builtins.property
    def pin_code(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
        When you create a LoRaWAN devices, this will pass.
        """
        result = self._values.get("pin_code")
        return result

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
    """A ROS resource type:  ``ALIYUN::IOT::Product``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ProductProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::IOT::Product``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Product, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> typing.Any:
        """
        :Attribute: IotInstanceId: IOT instance ID.
        """
        return jsii.get(self, "attrIotInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> typing.Any:
        """
        :Attribute: ProductKey: The globally unique identifier of the product issued by IoT Platform.
        """
        return jsii.get(self, "attrProductKey")


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
        node_type: jsii.Number,
        product_name: builtins.str,
        aliyun_commodity_code: typing.Optional[builtins.str] = None,
        auth_type: typing.Optional[builtins.str] = None,
        category_key: typing.Optional[builtins.str] = None,
        data_format: typing.Optional[jsii.Number] = None,
        description: typing.Optional[builtins.str] = None,
        id2: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[builtins.str] = None,
        join_permission_id: typing.Optional[builtins.str] = None,
        net_type: typing.Optional[builtins.str] = None,
        protocol_type: typing.Optional[builtins.str] = None,
        publish_auto: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::IOT::Product``.

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
        """
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
    def node_type(self) -> jsii.Number:
        """
        :Property:

        nodeType: The node type of the product. Values:
        0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
        either directly or as a sub-device of a gateway.
        1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
        the topological relationships with sub-devices, and synchronize the topological relationships
        to IoT Platform.
        """
        result = self._values.get("node_type")
        assert result is not None, "Required property 'node_type' is missing"
        return result

    @builtins.property
    def product_name(self) -> builtins.str:
        """
        :Property:

        productName: The name of the product. A product name can be 4 to 30 characters in length and can
        contain Chinese characters, English letters, digits, and underscores (_).
        Note A product name must be unique in an account.
        """
        result = self._values.get("product_name")
        assert result is not None, "Required property 'product_name' is missing"
        return result

    @builtins.property
    def aliyun_commodity_code(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        aliyunCommodityCode: The edition of the product that you want to create. There are two options:
        iothub_senior: Pro Edition.
        iothub: Basic Edition.
        If you do not input this parameter, the default value is used, which is iothub (Basic
        Edition).
        """
        result = self._values.get("aliyun_commodity_code")
        return result

    @builtins.property
    def auth_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        authType: Authentication device to access the Internet of Things platform under the product. Optional:
        secret: using a device key for device authentication.
        Details can be found MQTT-TCP connection communication.
        id2: Use things device authentication ID.
        x509: X.509 certificates using the device for device authentication.
        The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
        If this parameter is passed, the default value is secret.
        """
        result = self._values.get("auth_type")
        return result

    @builtins.property
    def category_key(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
        Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
        """
        result = self._values.get("category_key")
        return result

    @builtins.property
    def data_format(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
        This parameter is only available and required when you create a Pro Edition product.
        Options:
        0: Do not parse/Custom.
        1: Alink JSON.
        """
        result = self._values.get("data_format")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: A description of the product. The description can be a maximum of 100 characters in
        length.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def id2(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        id2: Whether ID2 certification.
        Optional values:
        true: the opening of ID2 certification.
        false: do not open ID2 certification.
        Do not pass this parameter, the default is not opened.
        Explanation
        Only 2 East China (Shanghai) regional support ID2 authentication.
        If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
        """
        result = self._values.get("id2")
        return result

    @builtins.property
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        """
        result = self._values.get("iot_instance_id")
        return result

    @builtins.property
    def join_permission_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
        Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
        If you do not LoRaWAN network credentials, visit the network management platform to create things together.
        """
        result = self._values.get("join_permission_id")
        return result

    @builtins.property
    def net_type(self) -> typing.Optional[builtins.str]:
        """
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
        """
        result = self._values.get("net_type")
        return result

    @builtins.property
    def protocol_type(self) -> typing.Optional[builtins.str]:
        """
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
        """
        result = self._values.get("protocol_type")
        return result

    @builtins.property
    def publish_auto(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        publishAuto: Whether to automatically model publication after the product is created.
        true: publishing.
        false: not released.
        This parameter is not passed, the default value true.
        """
        result = self._values.get("publish_auto")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
        If this parameter is passed, the product will be classified as a default resource group.
        """
        result = self._values.get("resource_group_id")
        return result

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
    """A ROS resource type:  ``ALIYUN::IOT::ProductTopic``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ProductTopicProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::IOT::ProductTopic``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ProductTopic, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopicId")
    def attr_topic_id(self) -> typing.Any:
        """
        :Attribute: TopicId: Topic ID
        """
        return jsii.get(self, "attrTopicId")


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
        operation: builtins.str,
        product_key: builtins.str,
        topic_short_name: builtins.str,
        desc: typing.Optional[builtins.str] = None,
        iot_instance_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::IOT::ProductTopic``.

        :param operation: 
        :param product_key: 
        :param topic_short_name: 
        :param desc: 
        :param iot_instance_id: 
        """
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
    def operation(self) -> builtins.str:
        """
        :Property:

        operation: Operation permissions of devices on the topic category. Value options:
        SUB: Subscribe. Devices can subscribe to the topics of this category.
        PUB: Publish. Devices can publish messages using the topics of this category.
        ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        """
        result = self._values.get("operation")
        assert result is not None, "Required property 'operation' is missing"
        return result

    @builtins.property
    def product_key(self) -> builtins.str:
        """
        :Property: productKey: The unique identifier of the product for which you want to create a topic category.
        """
        result = self._values.get("product_key")
        assert result is not None, "Required property 'product_key' is missing"
        return result

    @builtins.property
    def topic_short_name(self) -> builtins.str:
        """
        :Property:

        topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
        Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        """
        result = self._values.get("topic_short_name")
        assert result is not None, "Required property 'topic_short_name' is missing"
        return result

    @builtins.property
    def desc(self) -> typing.Optional[builtins.str]:
        """
        :Property: desc: The description of the topic category. You can enter a description with up to 100 characters.
        """
        result = self._values.get("desc")
        return result

    @builtins.property
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
        """
        result = self._values.get("iot_instance_id")
        return result

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
    """A ROS template type:  ``ALIYUN::IOT::Device``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDeviceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::IOT::Device``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDevice, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrDeviceName")
    def attr_device_name(self) -> typing.Any:
        """
        :Attribute: DeviceName: Device name.
        """
        return jsii.get(self, "attrDeviceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDeviceSecret")
    def attr_device_secret(self) -> typing.Any:
        """
        :Attribute: DeviceSecret: Device key.
        """
        return jsii.get(self, "attrDeviceSecret")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIotId")
    def attr_iot_id(self) -> typing.Any:
        """
        :Attribute:

        IotId: Things internet device ID issued for the device, as the unique identifier of the device.
        Description Keep, do not leak.
        """
        return jsii.get(self, "attrIotId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> typing.Any:
        """
        :Attribute: IotInstanceId: IOT instance ID.
        """
        return jsii.get(self, "attrIotInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> typing.Any:
        """
        :Attribute: IpAddress: IP address.
        """
        return jsii.get(self, "attrIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNickName")
    def attr_nick_name(self) -> typing.Any:
        """
        :Attribute: NickName: Nick name.
        """
        return jsii.get(self, "attrNickName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNodeType")
    def attr_node_type(self) -> typing.Any:
        """
        :Attribute: NodeType: Node type.
        """
        return jsii.get(self, "attrNodeType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> typing.Any:
        """
        :Attribute: ProductKey: Product key.
        """
        return jsii.get(self, "attrProductKey")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProductName")
    def attr_product_name(self) -> typing.Any:
        """
        :Attribute: ProductName: Product name.
        """
        return jsii.get(self, "attrProductName")

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
    @jsii.member(jsii_name="productKey")
    def product_key(self) -> builtins.str:
        """
        :Property: productKey: The identifier of the product to which the device to be registered belongs.
        """
        return jsii.get(self, "productKey")

    @product_key.setter # type: ignore
    def product_key(self, value: builtins.str) -> None:
        jsii.set(self, "productKey", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="devEui")
    def dev_eui(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        devEui: DevEUI LoRaWAN equipment.
        When you create a LoRaWAN devices, this will pass.
        """
        return jsii.get(self, "devEui")

    @dev_eui.setter # type: ignore
    def dev_eui(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "devEui", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="deviceName")
    def device_name(self) -> typing.Optional[builtins.str]:
        """
        ::

        ), periods (.) , and colons (:).
        DeviceName is used with ProductKey to identify a specified device.
        Note If you do not specify this parameter, the system will generate a name for the device.
        :Property:

        deviceName: The name of the device that you want to register. The device name must consist of
        4 to 32 characters, including English letters, digits, and special characters, for
        example, hyphens (-), underscores (_), at signs (
        """
        return jsii.get(self, "deviceName")

    @device_name.setter # type: ignore
    def device_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "deviceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        """
        return jsii.get(self, "iotInstanceId")

    @iot_instance_id.setter # type: ignore
    def iot_instance_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "iotInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="nickname")
    def nickname(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
        contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        character counts as two characters.
        """
        return jsii.get(self, "nickname")

    @nickname.setter # type: ignore
    def nickname(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "nickname", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pinCode")
    def pin_code(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
        When you create a LoRaWAN devices, this will pass.
        """
        return jsii.get(self, "pinCode")

    @pin_code.setter # type: ignore
    def pin_code(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "pinCode", value)


class RosDeviceGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-iot.RosDeviceGroup",
):
    """A ROS template type:  ``ALIYUN::IOT::DeviceGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDeviceGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::IOT::DeviceGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDeviceGroup, self, [scope, id, props, enable_resource_property_constraint])

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
        :Attribute: GroupId: Packet, ID, System for the globally unique identifier generated packet.
        """
        return jsii.get(self, "attrGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> typing.Any:
        """
        :Attribute: IotInstanceId: IOT instance ID.
        """
        return jsii.get(self, "attrIotInstanceId")

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
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        """
        return jsii.get(self, "groupName")

    @group_name.setter # type: ignore
    def group_name(self, value: builtins.str) -> None:
        jsii.set(self, "groupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupDesc")
    def group_desc(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupDesc: The description of the group. You can enter a description with up to 100 characters.
        """
        return jsii.get(self, "groupDesc")

    @group_desc.setter # type: ignore
    def group_desc(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "groupDesc", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        """
        return jsii.get(self, "iotInstanceId")

    @iot_instance_id.setter # type: ignore
    def iot_instance_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "iotInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="superGroupId")
    def super_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        superGroupId: The ID of the parent group.
        If you want to create a first-level group, do not enter this parameter.
        """
        return jsii.get(self, "superGroupId")

    @super_group_id.setter # type: ignore
    def super_group_id(self, value: typing.Optional[builtins.str]) -> None:
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
        group_name: builtins.str,
        group_desc: typing.Optional[builtins.str] = None,
        iot_instance_id: typing.Optional[builtins.str] = None,
        super_group_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::IOT::DeviceGroup``.

        :param group_name: 
        :param group_desc: 
        :param iot_instance_id: 
        :param super_group_id: 
        """
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
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        """
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return result

    @builtins.property
    def group_desc(self) -> typing.Optional[builtins.str]:
        """
        :Property: groupDesc: The description of the group. You can enter a description with up to 100 characters.
        """
        result = self._values.get("group_desc")
        return result

    @builtins.property
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        """
        result = self._values.get("iot_instance_id")
        return result

    @builtins.property
    def super_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        superGroupId: The ID of the parent group.
        If you want to create a first-level group, do not enter this parameter.
        """
        result = self._values.get("super_group_id")
        return result

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
        product_key: builtins.str,
        dev_eui: typing.Optional[builtins.str] = None,
        device_name: typing.Optional[builtins.str] = None,
        iot_instance_id: typing.Optional[builtins.str] = None,
        nickname: typing.Optional[builtins.str] = None,
        pin_code: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::IOT::Device``.

        :param product_key: 
        :param dev_eui: 
        :param device_name: 
        :param iot_instance_id: 
        :param nickname: 
        :param pin_code: 
        """
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
    def product_key(self) -> builtins.str:
        """
        :Property: productKey: The identifier of the product to which the device to be registered belongs.
        """
        result = self._values.get("product_key")
        assert result is not None, "Required property 'product_key' is missing"
        return result

    @builtins.property
    def dev_eui(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        devEui: DevEUI LoRaWAN equipment.
        When you create a LoRaWAN devices, this will pass.
        """
        result = self._values.get("dev_eui")
        return result

    @builtins.property
    def device_name(self) -> typing.Optional[builtins.str]:
        """
        ::

        ), periods (.) , and colons (:).
        DeviceName is used with ProductKey to identify a specified device.
        Note If you do not specify this parameter, the system will generate a name for the device.
        :Property:

        deviceName: The name of the device that you want to register. The device name must consist of
        4 to 32 characters, including English letters, digits, and special characters, for
        example, hyphens (-), underscores (_), at signs (
        """
        result = self._values.get("device_name")
        return result

    @builtins.property
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        """
        result = self._values.get("iot_instance_id")
        return result

    @builtins.property
    def nickname(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
        contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        character counts as two characters.
        """
        result = self._values.get("nickname")
        return result

    @builtins.property
    def pin_code(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
        When you create a LoRaWAN devices, this will pass.
        """
        result = self._values.get("pin_code")
        return result

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
    """A ROS template type:  ``ALIYUN::IOT::Product``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosProductProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::IOT::Product``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosProduct, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> typing.Any:
        """
        :Attribute: IotInstanceId: IOT instance ID.
        """
        return jsii.get(self, "attrIotInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> typing.Any:
        """
        :Attribute: ProductKey: The globally unique identifier of the product issued by IoT Platform.
        """
        return jsii.get(self, "attrProductKey")

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
    @jsii.member(jsii_name="nodeType")
    def node_type(self) -> jsii.Number:
        """
        :Property:

        nodeType: The node type of the product. Values:
        0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
        either directly or as a sub-device of a gateway.
        1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
        the topological relationships with sub-devices, and synchronize the topological relationships
        to IoT Platform.
        """
        return jsii.get(self, "nodeType")

    @node_type.setter # type: ignore
    def node_type(self, value: jsii.Number) -> None:
        jsii.set(self, "nodeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="productName")
    def product_name(self) -> builtins.str:
        """
        :Property:

        productName: The name of the product. A product name can be 4 to 30 characters in length and can
        contain Chinese characters, English letters, digits, and underscores (_).
        Note A product name must be unique in an account.
        """
        return jsii.get(self, "productName")

    @product_name.setter # type: ignore
    def product_name(self, value: builtins.str) -> None:
        jsii.set(self, "productName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="aliyunCommodityCode")
    def aliyun_commodity_code(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        aliyunCommodityCode: The edition of the product that you want to create. There are two options:
        iothub_senior: Pro Edition.
        iothub: Basic Edition.
        If you do not input this parameter, the default value is used, which is iothub (Basic
        Edition).
        """
        return jsii.get(self, "aliyunCommodityCode")

    @aliyun_commodity_code.setter # type: ignore
    def aliyun_commodity_code(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "aliyunCommodityCode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="authType")
    def auth_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        authType: Authentication device to access the Internet of Things platform under the product. Optional:
        secret: using a device key for device authentication.
        Details can be found MQTT-TCP connection communication.
        id2: Use things device authentication ID.
        x509: X.509 certificates using the device for device authentication.
        The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
        If this parameter is passed, the default value is secret.
        """
        return jsii.get(self, "authType")

    @auth_type.setter # type: ignore
    def auth_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "authType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="categoryKey")
    def category_key(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
        Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
        """
        return jsii.get(self, "categoryKey")

    @category_key.setter # type: ignore
    def category_key(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "categoryKey", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dataFormat")
    def data_format(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
        This parameter is only available and required when you create a Pro Edition product.
        Options:
        0: Do not parse/Custom.
        1: Alink JSON.
        """
        return jsii.get(self, "dataFormat")

    @data_format.setter # type: ignore
    def data_format(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "dataFormat", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: A description of the product. The description can be a maximum of 100 characters in
        length.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="id2")
    def id2(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        id2: Whether ID2 certification.
        Optional values:
        true: the opening of ID2 certification.
        false: do not open ID2 certification.
        Do not pass this parameter, the default is not opened.
        Explanation
        Only 2 East China (Shanghai) regional support ID2 authentication.
        If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
        """
        return jsii.get(self, "id2")

    @id2.setter # type: ignore
    def id2(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "id2", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        """
        return jsii.get(self, "iotInstanceId")

    @iot_instance_id.setter # type: ignore
    def iot_instance_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "iotInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="joinPermissionId")
    def join_permission_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
        Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
        If you do not LoRaWAN network credentials, visit the network management platform to create things together.
        """
        return jsii.get(self, "joinPermissionId")

    @join_permission_id.setter # type: ignore
    def join_permission_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "joinPermissionId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="netType")
    def net_type(self) -> typing.Optional[builtins.str]:
        """
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
        """
        return jsii.get(self, "netType")

    @net_type.setter # type: ignore
    def net_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "netType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="protocolType")
    def protocol_type(self) -> typing.Optional[builtins.str]:
        """
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
        """
        return jsii.get(self, "protocolType")

    @protocol_type.setter # type: ignore
    def protocol_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "protocolType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="publishAuto")
    def publish_auto(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        publishAuto: Whether to automatically model publication after the product is created.
        true: publishing.
        false: not released.
        This parameter is not passed, the default value true.
        """
        return jsii.get(self, "publishAuto")

    @publish_auto.setter # type: ignore
    def publish_auto(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "publishAuto", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
        If this parameter is passed, the product will be classified as a default resource group.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
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
        node_type: jsii.Number,
        product_name: builtins.str,
        aliyun_commodity_code: typing.Optional[builtins.str] = None,
        auth_type: typing.Optional[builtins.str] = None,
        category_key: typing.Optional[builtins.str] = None,
        data_format: typing.Optional[jsii.Number] = None,
        description: typing.Optional[builtins.str] = None,
        id2: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        iot_instance_id: typing.Optional[builtins.str] = None,
        join_permission_id: typing.Optional[builtins.str] = None,
        net_type: typing.Optional[builtins.str] = None,
        protocol_type: typing.Optional[builtins.str] = None,
        publish_auto: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::IOT::Product``.

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
        """
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
    def node_type(self) -> jsii.Number:
        """
        :Property:

        nodeType: The node type of the product. Values:
        0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
        either directly or as a sub-device of a gateway.
        1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
        the topological relationships with sub-devices, and synchronize the topological relationships
        to IoT Platform.
        """
        result = self._values.get("node_type")
        assert result is not None, "Required property 'node_type' is missing"
        return result

    @builtins.property
    def product_name(self) -> builtins.str:
        """
        :Property:

        productName: The name of the product. A product name can be 4 to 30 characters in length and can
        contain Chinese characters, English letters, digits, and underscores (_).
        Note A product name must be unique in an account.
        """
        result = self._values.get("product_name")
        assert result is not None, "Required property 'product_name' is missing"
        return result

    @builtins.property
    def aliyun_commodity_code(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        aliyunCommodityCode: The edition of the product that you want to create. There are two options:
        iothub_senior: Pro Edition.
        iothub: Basic Edition.
        If you do not input this parameter, the default value is used, which is iothub (Basic
        Edition).
        """
        result = self._values.get("aliyun_commodity_code")
        return result

    @builtins.property
    def auth_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        authType: Authentication device to access the Internet of Things platform under the product. Optional:
        secret: using a device key for device authentication.
        Details can be found MQTT-TCP connection communication.
        id2: Use things device authentication ID.
        x509: X.509 certificates using the device for device authentication.
        The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
        If this parameter is passed, the default value is secret.
        """
        result = self._values.get("auth_type")
        return result

    @builtins.property
    def category_key(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
        Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
        """
        result = self._values.get("category_key")
        return result

    @builtins.property
    def data_format(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
        This parameter is only available and required when you create a Pro Edition product.
        Options:
        0: Do not parse/Custom.
        1: Alink JSON.
        """
        result = self._values.get("data_format")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        description: A description of the product. The description can be a maximum of 100 characters in
        length.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def id2(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        id2: Whether ID2 certification.
        Optional values:
        true: the opening of ID2 certification.
        false: do not open ID2 certification.
        Do not pass this parameter, the default is not opened.
        Explanation
        Only 2 East China (Shanghai) regional support ID2 authentication.
        If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
        """
        result = self._values.get("id2")
        return result

    @builtins.property
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        """
        result = self._values.get("iot_instance_id")
        return result

    @builtins.property
    def join_permission_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
        Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
        If you do not LoRaWAN network credentials, visit the network management platform to create things together.
        """
        result = self._values.get("join_permission_id")
        return result

    @builtins.property
    def net_type(self) -> typing.Optional[builtins.str]:
        """
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
        """
        result = self._values.get("net_type")
        return result

    @builtins.property
    def protocol_type(self) -> typing.Optional[builtins.str]:
        """
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
        """
        result = self._values.get("protocol_type")
        return result

    @builtins.property
    def publish_auto(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        publishAuto: Whether to automatically model publication after the product is created.
        true: publishing.
        false: not released.
        This parameter is not passed, the default value true.
        """
        result = self._values.get("publish_auto")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
        If this parameter is passed, the product will be classified as a default resource group.
        """
        result = self._values.get("resource_group_id")
        return result

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
    """A ROS template type:  ``ALIYUN::IOT::ProductTopic``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosProductTopicProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::IOT::ProductTopic``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosProductTopic, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrTopicId")
    def attr_topic_id(self) -> typing.Any:
        """
        :Attribute: TopicId: Topic ID
        """
        return jsii.get(self, "attrTopicId")

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
    @jsii.member(jsii_name="operation")
    def operation(self) -> builtins.str:
        """
        :Property:

        operation: Operation permissions of devices on the topic category. Value options:
        SUB: Subscribe. Devices can subscribe to the topics of this category.
        PUB: Publish. Devices can publish messages using the topics of this category.
        ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        """
        return jsii.get(self, "operation")

    @operation.setter # type: ignore
    def operation(self, value: builtins.str) -> None:
        jsii.set(self, "operation", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="productKey")
    def product_key(self) -> builtins.str:
        """
        :Property: productKey: The unique identifier of the product for which you want to create a topic category.
        """
        return jsii.get(self, "productKey")

    @product_key.setter # type: ignore
    def product_key(self, value: builtins.str) -> None:
        jsii.set(self, "productKey", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="topicShortName")
    def topic_short_name(self) -> builtins.str:
        """
        :Property:

        topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
        Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        """
        return jsii.get(self, "topicShortName")

    @topic_short_name.setter # type: ignore
    def topic_short_name(self, value: builtins.str) -> None:
        jsii.set(self, "topicShortName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="desc")
    def desc(self) -> typing.Optional[builtins.str]:
        """
        :Property: desc: The description of the topic category. You can enter a description with up to 100 characters.
        """
        return jsii.get(self, "desc")

    @desc.setter # type: ignore
    def desc(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "desc", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
        """
        return jsii.get(self, "iotInstanceId")

    @iot_instance_id.setter # type: ignore
    def iot_instance_id(self, value: typing.Optional[builtins.str]) -> None:
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
        operation: builtins.str,
        product_key: builtins.str,
        topic_short_name: builtins.str,
        desc: typing.Optional[builtins.str] = None,
        iot_instance_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::IOT::ProductTopic``.

        :param operation: 
        :param product_key: 
        :param topic_short_name: 
        :param desc: 
        :param iot_instance_id: 
        """
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
    def operation(self) -> builtins.str:
        """
        :Property:

        operation: Operation permissions of devices on the topic category. Value options:
        SUB: Subscribe. Devices can subscribe to the topics of this category.
        PUB: Publish. Devices can publish messages using the topics of this category.
        ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
        """
        result = self._values.get("operation")
        assert result is not None, "Required property 'operation' is missing"
        return result

    @builtins.property
    def product_key(self) -> builtins.str:
        """
        :Property: productKey: The unique identifier of the product for which you want to create a topic category.
        """
        result = self._values.get("product_key")
        assert result is not None, "Required property 'product_key' is missing"
        return result

    @builtins.property
    def topic_short_name(self) -> builtins.str:
        """
        :Property:

        topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
        Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
        """
        result = self._values.get("topic_short_name")
        assert result is not None, "Required property 'topic_short_name' is missing"
        return result

    @builtins.property
    def desc(self) -> typing.Optional[builtins.str]:
        """
        :Property: desc: The description of the topic category. You can enter a description with up to 100 characters.
        """
        result = self._values.get("desc")
        return result

    @builtins.property
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
        """
        result = self._values.get("iot_instance_id")
        return result

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
    """A ROS template type:  ``ALIYUN::IOT::Rule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::IOT::Rule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosRule, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrDataType")
    def attr_data_type(self) -> typing.Any:
        """
        :Attribute: DataType: The format of the data to be processed by the rule. You must specify the format of device data to be processed for this parameter. Valid values:  JSON: JSON data BINARY: binary data
        """
        return jsii.get(self, "attrDataType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> typing.Any:
        """
        :Attribute: IotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
        """
        return jsii.get(self, "attrIotInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: The name of the rule. The name must be 1 to 30 characters in length and can contain English letters, digits, underscores (_), and hyphens (-). Chinese language is also supported. Each Chinese symbol occupies 2 characters.
        """
        return jsii.get(self, "attrName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> typing.Any:
        """
        :Attribute: ProductKey: The ProductKey of the product to which the rule applies.
        """
        return jsii.get(self, "attrProductKey")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> typing.Any:
        """
        :Attribute: ResourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource group information in the Resource Management console.  If you do not specify this parameter, the rule is assigned to the default resource group.
        """
        return jsii.get(self, "attrResourceGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRuleDesc")
    def attr_rule_desc(self) -> typing.Any:
        """
        :Attribute: RuleDesc: The description of the rule. The description can be up to 100 characters in length. Each Chinese symbol occupies 1 characters.
        """
        return jsii.get(self, "attrRuleDesc")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> typing.Any:
        """
        :Attribute: RuleId: The ID of the rule. The rule ID is generated by the rules engine if the call was successful.
        """
        return jsii.get(self, "attrRuleId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSelect")
    def attr_select(self) -> typing.Any:
        """
        :Attribute: Select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
        """
        return jsii.get(self, "attrSelect")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrShortTopic")
    def attr_short_topic(self) -> typing.Any:
        """
        :Attribute: ShortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.  Basic communication topics or Thing Specification Language (TSL)-based communication topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the product. Valid values of topicShortName: /thing/event/property/post: submits the property data of a device. /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL. /thing/lifecycle: submits device lifecycle changes. /thing/downlink/reply/message: sends a response to a request from IoT Platform. /thing/list/found: submits the data when a gateway detects a new sub-device. /thing/topo/lifecycle: submits device topology changes. /thing/event/property/history/post: submits historical property data of a device. /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL. /ota/upgrade: submits OTA update status. /ota/version/post: submits OTA module versions. /thing/deviceinfo/update: submits device tag changes. /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.  ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic. ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.  Custom topics. Example:${deviceName}/user/get.  You can call theQueryProductTopicoperation to view all custom topics of the product.  When you specify a custom topic, you can use the + and # wildcards.  You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the product. You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that follow/user.  For more information about how to use wildcards, see Wildcards in topics.  Topic that is used to submit device status changes: ${deviceName}.  You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
        """
        return jsii.get(self, "attrShortTopic")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopicType")
    def attr_topic_type(self) -> typing.Any:
        """
        :Attribute: TopicType: 0: The topic is a basic communication topic or TSL-based communication topic. 1: The topic is a custom topic. 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        """
        return jsii.get(self, "attrTopicType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWhere")
    def attr_where(self) -> typing.Any:
        """
        :Attribute: Where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
        """
        return jsii.get(self, "attrWhere")

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
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the rule. The name must be 1 to 30 characters in length and can contain English letters, digits, underscores (_), and hyphens (-). Chinese language is also supported. Each Chinese symbol occupies 2 characters.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dataType")
    def data_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: dataType: The format of the data to be processed by the rule. You must specify the format of device data to be processed for this parameter. Valid values:  JSON: JSON data BINARY: binary data
        """
        return jsii.get(self, "dataType")

    @data_type.setter # type: ignore
    def data_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dataType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="iotInstanceId")
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
        """
        return jsii.get(self, "iotInstanceId")

    @iot_instance_id.setter # type: ignore
    def iot_instance_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "iotInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="productKey")
    def product_key(self) -> typing.Optional[builtins.str]:
        """
        :Property: productKey: The ProductKey of the product to which the rule applies.
        """
        return jsii.get(self, "productKey")

    @product_key.setter # type: ignore
    def product_key(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "productKey", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource group information in the Resource Management console.  If you do not specify this parameter, the rule is assigned to the default resource group.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ruleDesc")
    def rule_desc(self) -> typing.Optional[builtins.str]:
        """
        :Property: ruleDesc: The description of the rule. The description can be up to 100 characters in length. Each Chinese symbol occupies 1 characters.
        """
        return jsii.get(self, "ruleDesc")

    @rule_desc.setter # type: ignore
    def rule_desc(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "ruleDesc", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="select")
    def select(self) -> typing.Optional[builtins.str]:
        """
        :Property: select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
        """
        return jsii.get(self, "select")

    @select.setter # type: ignore
    def select(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "select", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="shortTopic")
    def short_topic(self) -> typing.Optional[builtins.str]:
        """
        :Property: shortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.  Basic communication topics or Thing Specification Language (TSL)-based communication topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the product. Valid values of topicShortName: /thing/event/property/post: submits the property data of a device. /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL. /thing/lifecycle: submits device lifecycle changes. /thing/downlink/reply/message: sends a response to a request from IoT Platform. /thing/list/found: submits the data when a gateway detects a new sub-device. /thing/topo/lifecycle: submits device topology changes. /thing/event/property/history/post: submits historical property data of a device. /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL. /ota/upgrade: submits OTA update status. /ota/version/post: submits OTA module versions. /thing/deviceinfo/update: submits device tag changes. /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.  ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic. ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.  Custom topics. Example:${deviceName}/user/get.  You can call theQueryProductTopicoperation to view all custom topics of the product.  When you specify a custom topic, you can use the + and # wildcards.  You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the product. You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that follow/user.  For more information about how to use wildcards, see Wildcards in topics.  Topic that is used to submit device status changes: ${deviceName}.  You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
        """
        return jsii.get(self, "shortTopic")

    @short_topic.setter # type: ignore
    def short_topic(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "shortTopic", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="topicType")
    def topic_type(self) -> typing.Optional[jsii.Number]:
        """
        :Property: topicType: 0: The topic is a basic communication topic or TSL-based communication topic. 1: The topic is a custom topic. 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        """
        return jsii.get(self, "topicType")

    @topic_type.setter # type: ignore
    def topic_type(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "topicType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="where")
    def where(self) -> typing.Optional[builtins.str]:
        """
        :Property: where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
        """
        return jsii.get(self, "where")

    @where.setter # type: ignore
    def where(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "where", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.RosRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "data_type": "dataType",
        "iot_instance_id": "iotInstanceId",
        "product_key": "productKey",
        "resource_group_id": "resourceGroupId",
        "rule_desc": "ruleDesc",
        "select": "select",
        "short_topic": "shortTopic",
        "topic_type": "topicType",
        "where": "where",
    },
)
class RosRuleProps:
    def __init__(
        self,
        *,
        name: builtins.str,
        data_type: typing.Optional[builtins.str] = None,
        iot_instance_id: typing.Optional[builtins.str] = None,
        product_key: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        rule_desc: typing.Optional[builtins.str] = None,
        select: typing.Optional[builtins.str] = None,
        short_topic: typing.Optional[builtins.str] = None,
        topic_type: typing.Optional[jsii.Number] = None,
        where: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::IOT::Rule``.

        :param name: 
        :param data_type: 
        :param iot_instance_id: 
        :param product_key: 
        :param resource_group_id: 
        :param rule_desc: 
        :param select: 
        :param short_topic: 
        :param topic_type: 
        :param where: 
        """
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
        if rule_desc is not None:
            self._values["rule_desc"] = rule_desc
        if select is not None:
            self._values["select"] = select
        if short_topic is not None:
            self._values["short_topic"] = short_topic
        if topic_type is not None:
            self._values["topic_type"] = topic_type
        if where is not None:
            self._values["where"] = where

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the rule. The name must be 1 to 30 characters in length and can contain English letters, digits, underscores (_), and hyphens (-). Chinese language is also supported. Each Chinese symbol occupies 2 characters.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def data_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: dataType: The format of the data to be processed by the rule. You must specify the format of device data to be processed for this parameter. Valid values:  JSON: JSON data BINARY: binary data
        """
        result = self._values.get("data_type")
        return result

    @builtins.property
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
        """
        result = self._values.get("iot_instance_id")
        return result

    @builtins.property
    def product_key(self) -> typing.Optional[builtins.str]:
        """
        :Property: productKey: The ProductKey of the product to which the rule applies.
        """
        result = self._values.get("product_key")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource group information in the Resource Management console.  If you do not specify this parameter, the rule is assigned to the default resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def rule_desc(self) -> typing.Optional[builtins.str]:
        """
        :Property: ruleDesc: The description of the rule. The description can be up to 100 characters in length. Each Chinese symbol occupies 1 characters.
        """
        result = self._values.get("rule_desc")
        return result

    @builtins.property
    def select(self) -> typing.Optional[builtins.str]:
        """
        :Property: select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
        """
        result = self._values.get("select")
        return result

    @builtins.property
    def short_topic(self) -> typing.Optional[builtins.str]:
        """
        :Property: shortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.  Basic communication topics or Thing Specification Language (TSL)-based communication topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the product. Valid values of topicShortName: /thing/event/property/post: submits the property data of a device. /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL. /thing/lifecycle: submits device lifecycle changes. /thing/downlink/reply/message: sends a response to a request from IoT Platform. /thing/list/found: submits the data when a gateway detects a new sub-device. /thing/topo/lifecycle: submits device topology changes. /thing/event/property/history/post: submits historical property data of a device. /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL. /ota/upgrade: submits OTA update status. /ota/version/post: submits OTA module versions. /thing/deviceinfo/update: submits device tag changes. /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.  ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic. ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.  Custom topics. Example:${deviceName}/user/get.  You can call theQueryProductTopicoperation to view all custom topics of the product.  When you specify a custom topic, you can use the + and # wildcards.  You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the product. You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that follow/user.  For more information about how to use wildcards, see Wildcards in topics.  Topic that is used to submit device status changes: ${deviceName}.  You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
        """
        result = self._values.get("short_topic")
        return result

    @builtins.property
    def topic_type(self) -> typing.Optional[jsii.Number]:
        """
        :Property: topicType: 0: The topic is a basic communication topic or TSL-based communication topic. 1: The topic is a custom topic. 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        """
        result = self._values.get("topic_type")
        return result

    @builtins.property
    def where(self) -> typing.Optional[builtins.str]:
        """
        :Property: where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
        """
        result = self._values.get("where")
        return result

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
    """A ROS resource type:  ``ALIYUN::IOT::Rule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RuleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::IOT::Rule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Rule, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDataType")
    def attr_data_type(self) -> typing.Any:
        """
        :Attribute: DataType: The format of the data to be processed by the rule. You must specify the format of device data to be processed for this parameter. Valid values:  JSON: JSON data BINARY: binary data
        """
        return jsii.get(self, "attrDataType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIotInstanceId")
    def attr_iot_instance_id(self) -> typing.Any:
        """
        :Attribute: IotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
        """
        return jsii.get(self, "attrIotInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: The name of the rule. The name must be 1 to 30 characters in length and can contain English letters, digits, underscores (_), and hyphens (-). Chinese language is also supported. Each Chinese symbol occupies 2 characters.
        """
        return jsii.get(self, "attrName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProductKey")
    def attr_product_key(self) -> typing.Any:
        """
        :Attribute: ProductKey: The ProductKey of the product to which the rule applies.
        """
        return jsii.get(self, "attrProductKey")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> typing.Any:
        """
        :Attribute: ResourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource group information in the Resource Management console.  If you do not specify this parameter, the rule is assigned to the default resource group.
        """
        return jsii.get(self, "attrResourceGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRuleDesc")
    def attr_rule_desc(self) -> typing.Any:
        """
        :Attribute: RuleDesc: The description of the rule. The description can be up to 100 characters in length. Each Chinese symbol occupies 1 characters.
        """
        return jsii.get(self, "attrRuleDesc")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRuleId")
    def attr_rule_id(self) -> typing.Any:
        """
        :Attribute: RuleId: The ID of the rule. The rule ID is generated by the rules engine if the call was successful.
        """
        return jsii.get(self, "attrRuleId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSelect")
    def attr_select(self) -> typing.Any:
        """
        :Attribute: Select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
        """
        return jsii.get(self, "attrSelect")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrShortTopic")
    def attr_short_topic(self) -> typing.Any:
        """
        :Attribute: ShortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.  Basic communication topics or Thing Specification Language (TSL)-based communication topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the product. Valid values of topicShortName: /thing/event/property/post: submits the property data of a device. /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL. /thing/lifecycle: submits device lifecycle changes. /thing/downlink/reply/message: sends a response to a request from IoT Platform. /thing/list/found: submits the data when a gateway detects a new sub-device. /thing/topo/lifecycle: submits device topology changes. /thing/event/property/history/post: submits historical property data of a device. /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL. /ota/upgrade: submits OTA update status. /ota/version/post: submits OTA module versions. /thing/deviceinfo/update: submits device tag changes. /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.  ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic. ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.  Custom topics. Example:${deviceName}/user/get.  You can call theQueryProductTopicoperation to view all custom topics of the product.  When you specify a custom topic, you can use the + and # wildcards.  You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the product. You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that follow/user.  For more information about how to use wildcards, see Wildcards in topics.  Topic that is used to submit device status changes: ${deviceName}.  You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
        """
        return jsii.get(self, "attrShortTopic")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTopicType")
    def attr_topic_type(self) -> typing.Any:
        """
        :Attribute: TopicType: 0: The topic is a basic communication topic or TSL-based communication topic. 1: The topic is a custom topic. 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        """
        return jsii.get(self, "attrTopicType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWhere")
    def attr_where(self) -> typing.Any:
        """
        :Attribute: Where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
        """
        return jsii.get(self, "attrWhere")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-iot.RuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "data_type": "dataType",
        "iot_instance_id": "iotInstanceId",
        "product_key": "productKey",
        "resource_group_id": "resourceGroupId",
        "rule_desc": "ruleDesc",
        "select": "select",
        "short_topic": "shortTopic",
        "topic_type": "topicType",
        "where": "where",
    },
)
class RuleProps:
    def __init__(
        self,
        *,
        name: builtins.str,
        data_type: typing.Optional[builtins.str] = None,
        iot_instance_id: typing.Optional[builtins.str] = None,
        product_key: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        rule_desc: typing.Optional[builtins.str] = None,
        select: typing.Optional[builtins.str] = None,
        short_topic: typing.Optional[builtins.str] = None,
        topic_type: typing.Optional[jsii.Number] = None,
        where: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::IOT::Rule``.

        :param name: 
        :param data_type: 
        :param iot_instance_id: 
        :param product_key: 
        :param resource_group_id: 
        :param rule_desc: 
        :param select: 
        :param short_topic: 
        :param topic_type: 
        :param where: 
        """
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
        if rule_desc is not None:
            self._values["rule_desc"] = rule_desc
        if select is not None:
            self._values["select"] = select
        if short_topic is not None:
            self._values["short_topic"] = short_topic
        if topic_type is not None:
            self._values["topic_type"] = topic_type
        if where is not None:
            self._values["where"] = where

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the rule. The name must be 1 to 30 characters in length and can contain English letters, digits, underscores (_), and hyphens (-). Chinese language is also supported. Each Chinese symbol occupies 2 characters.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def data_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: dataType: The format of the data to be processed by the rule. You must specify the format of device data to be processed for this parameter. Valid values:  JSON: JSON data BINARY: binary data
        """
        result = self._values.get("data_type")
        return result

    @builtins.property
    def iot_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: iotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
        """
        result = self._values.get("iot_instance_id")
        return result

    @builtins.property
    def product_key(self) -> typing.Optional[builtins.str]:
        """
        :Property: productKey: The ProductKey of the product to which the rule applies.
        """
        result = self._values.get("product_key")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource group information in the Resource Management console.  If you do not specify this parameter, the rule is assigned to the default resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def rule_desc(self) -> typing.Optional[builtins.str]:
        """
        :Property: ruleDesc: The description of the rule. The description can be up to 100 characters in length. Each Chinese symbol occupies 1 characters.
        """
        result = self._values.get("rule_desc")
        return result

    @builtins.property
    def select(self) -> typing.Optional[builtins.str]:
        """
        :Property: select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
        """
        result = self._values.get("select")
        return result

    @builtins.property
    def short_topic(self) -> typing.Optional[builtins.str]:
        """
        :Property: shortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.  Basic communication topics or Thing Specification Language (TSL)-based communication topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the product. Valid values of topicShortName: /thing/event/property/post: submits the property data of a device. /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL. /thing/lifecycle: submits device lifecycle changes. /thing/downlink/reply/message: sends a response to a request from IoT Platform. /thing/list/found: submits the data when a gateway detects a new sub-device. /thing/topo/lifecycle: submits device topology changes. /thing/event/property/history/post: submits historical property data of a device. /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL. /ota/upgrade: submits OTA update status. /ota/version/post: submits OTA module versions. /thing/deviceinfo/update: submits device tag changes. /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.  ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic. ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.  Custom topics. Example:${deviceName}/user/get.  You can call theQueryProductTopicoperation to view all custom topics of the product.  When you specify a custom topic, you can use the + and # wildcards.  You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the product. You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that follow/user.  For more information about how to use wildcards, see Wildcards in topics.  Topic that is used to submit device status changes: ${deviceName}.  You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
        """
        result = self._values.get("short_topic")
        return result

    @builtins.property
    def topic_type(self) -> typing.Optional[jsii.Number]:
        """
        :Property: topicType: 0: The topic is a basic communication topic or TSL-based communication topic. 1: The topic is a custom topic. 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        """
        result = self._values.get("topic_type")
        return result

    @builtins.property
    def where(self) -> typing.Optional[builtins.str]:
        """
        :Property: where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
        """
        result = self._values.get("where")
        return result

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
    "RosRuleProps",
    "Rule",
    "RuleProps",
]

publication.publish()
