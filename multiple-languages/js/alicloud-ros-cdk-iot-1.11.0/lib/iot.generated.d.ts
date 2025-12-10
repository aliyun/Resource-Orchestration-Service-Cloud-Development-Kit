import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDevice`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
 */
export interface RosDeviceProps {
    /**
     * @Property productKey: The identifier of the product to which the device to be registered belongs.
     */
    readonly productKey: string | ros.IResolvable;
    /**
     * @Property devEui: DevEUI LoRaWAN equipment.
     * When you create a LoRaWAN devices, this will pass.
     */
    readonly devEui?: string | ros.IResolvable;
    /**
     * @Property deviceName: The name of the device that you want to register. The device name must consist of
     * 4 to 32 characters, including English letters, digits, and special characters, for
     * example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).
     * DeviceName is used with ProductKey to identify a specified device.
     * Note If you do not specify this parameter, the system will generate a name for the device.
     */
    readonly deviceName?: string | ros.IResolvable;
    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    readonly iotInstanceId?: string | ros.IResolvable;
    /**
     * @Property nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
     * contain Chinese characters, English letters, numbers and underscores (_). A Chinese
     * character counts as two characters.
     */
    readonly nickname?: string | ros.IResolvable;
    /**
     * @Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
     * When you create a LoRaWAN devices, this will pass.
     */
    readonly pinCode?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IOT::Device`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Device` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
 */
export declare class RosDevice extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::Device";
    /**
     * @Attribute DeviceName: Device name.
     */
    readonly attrDeviceName: ros.IResolvable;
    /**
     * @Attribute DeviceSecret: Device key.
     */
    readonly attrDeviceSecret: ros.IResolvable;
    /**
     * @Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
Description Keep, do not leak.
     */
    readonly attrIotId: ros.IResolvable;
    /**
     * @Attribute IotInstanceId: IOT instance ID.
     */
    readonly attrIotInstanceId: ros.IResolvable;
    /**
     * @Attribute IpAddress: IP address.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * @Attribute NickName: Nick name.
     */
    readonly attrNickName: ros.IResolvable;
    /**
     * @Attribute NodeType: Node type.
     */
    readonly attrNodeType: ros.IResolvable;
    /**
     * @Attribute ProductKey: Product key.
     */
    readonly attrProductKey: ros.IResolvable;
    /**
     * @Attribute ProductName: Product name.
     */
    readonly attrProductName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property productKey: The identifier of the product to which the device to be registered belongs.
     */
    productKey: string | ros.IResolvable;
    /**
     * @Property devEui: DevEUI LoRaWAN equipment.
     * When you create a LoRaWAN devices, this will pass.
     */
    devEui: string | ros.IResolvable | undefined;
    /**
     * @Property deviceName: The name of the device that you want to register. The device name must consist of
     * 4 to 32 characters, including English letters, digits, and special characters, for
     * example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).
     * DeviceName is used with ProductKey to identify a specified device.
     * Note If you do not specify this parameter, the system will generate a name for the device.
     */
    deviceName: string | ros.IResolvable | undefined;
    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    iotInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
     * contain Chinese characters, English letters, numbers and underscores (_). A Chinese
     * character counts as two characters.
     */
    nickname: string | ros.IResolvable | undefined;
    /**
     * @Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
     * When you create a LoRaWAN devices, this will pass.
     */
    pinCode: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeviceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosDeviceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-devicegroup
 */
export interface RosDeviceGroupProps {
    /**
     * @Property groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property groupDesc: The description of the group. You can enter a description with up to 100 characters.
     */
    readonly groupDesc?: string | ros.IResolvable;
    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    readonly iotInstanceId?: string | ros.IResolvable;
    /**
     * @Property superGroupId: The ID of the parent group.
     * If you want to create a first-level group, do not enter this parameter.
     */
    readonly superGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IOT::DeviceGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeviceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-devicegroup
 */
export declare class RosDeviceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::DeviceGroup";
    /**
     * @Attribute GroupId: Packet, ID, System for the globally unique identifier generated packet.
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * @Attribute IotInstanceId: IOT instance ID.
     */
    readonly attrIotInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
     */
    groupName: string | ros.IResolvable;
    /**
     * @Property groupDesc: The description of the group. You can enter a description with up to 100 characters.
     */
    groupDesc: string | ros.IResolvable | undefined;
    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    iotInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property superGroupId: The ID of the parent group.
     * If you want to create a first-level group, do not enter this parameter.
     */
    superGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeviceGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosProduct`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-product
 */
export interface RosProductProps {
    /**
     * @Property nodeType: The node type of the product. Values:
     * 0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
     * either directly or as a sub-device of a gateway.
     * 1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
     * the topological relationships with sub-devices, and synchronize the topological relationships
     * to IoT Platform.
     */
    readonly nodeType: number | ros.IResolvable;
    /**
     * @Property productName: The name of the product. A product name can be 4 to 30 characters in length and can
     * contain Chinese characters, English letters, digits, and underscores (_).
     * Note A product name must be unique in an account.
     */
    readonly productName: string | ros.IResolvable;
    /**
     * @Property aliyunCommodityCode: The edition of the product that you want to create. There are two options:
     * iothub_senior: Pro Edition.
     * iothub: Basic Edition.
     * If you do not input this parameter, the default value is used, which is iothub (Basic
     * Edition).
     */
    readonly aliyunCommodityCode?: string | ros.IResolvable;
    /**
     * @Property authType: Authentication device to access the Internet of Things platform under the product. Optional:
     * secret: using a device key for device authentication.
     * Details can be found MQTT-TCP connection communication.
     * id2: Use things device authentication ID.
     * x509: X.509 certificates using the device for device authentication.
     * The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
     * If this parameter is passed, the default value is secret.
     */
    readonly authType?: string | ros.IResolvable;
    /**
     * @Property categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
     * Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
     */
    readonly categoryKey?: string | ros.IResolvable;
    /**
     * @Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
     * This parameter is only available and required when you create a Pro Edition product.
     * Options:
     * 0: Do not parse\/Custom.
     * 1: Alink JSON.
     */
    readonly dataFormat?: number | ros.IResolvable;
    /**
     * @Property description: A description of the product. The description can be a maximum of 100 characters in
     * length.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property id2: Whether ID2 certification.
     * Optional values:
     * true: the opening of ID2 certification.
     * false: do not open ID2 certification.
     * Do not pass this parameter, the default is not opened.
     * Explanation
     * Only 2 East China (Shanghai) regional support ID2 authentication.
     * If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
     */
    readonly id2?: boolean | ros.IResolvable;
    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    readonly iotInstanceId?: string | ros.IResolvable;
    /**
     * @Property joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
     * Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
     * If you do not LoRaWAN network credentials, visit the network management platform to create things together.
     */
    readonly joinPermissionId?: string | ros.IResolvable;
    /**
     * @Property netType: Networking mode.
     * Set this parameter only if you are creating a product whose devices directly connect
     * to IoT Platform.
     * Options:
     * WIFI
     * CELLULAR
     * ETHERNET
     * OTHER
     * The default value is WIFI.
     */
    readonly netType?: string | ros.IResolvable;
    /**
     * @Property protocolType: The protocol that devices of this product use to connect to gateways.
     * Set this parameter only if you are creating a product whose devices will be connected
     * to gateways.
     * Options:
     * modbus: Modbus.
     * opc-ua: OPC UA.
     * customize: Customized protocol.
     * ble: BLE.
     * zigbee: ZigBee.
     */
    readonly protocolType?: string | ros.IResolvable;
    /**
     * @Property publishAuto: Whether to automatically model publication after the product is created.
     * true: publishing.
     * false: not released.
     * This parameter is not passed, the default value true.
     */
    readonly publishAuto?: boolean | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
     * If this parameter is passed, the product will be classified as a default resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IOT::Product`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Product` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-product
 */
export declare class RosProduct extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::Product";
    /**
     * @Attribute IotInstanceId: IOT instance ID.
     */
    readonly attrIotInstanceId: ros.IResolvable;
    /**
     * @Attribute ProductKey: The globally unique identifier of the product issued by IoT Platform.
     */
    readonly attrProductKey: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property nodeType: The node type of the product. Values:
     * 0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
     * either directly or as a sub-device of a gateway.
     * 1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
     * the topological relationships with sub-devices, and synchronize the topological relationships
     * to IoT Platform.
     */
    nodeType: number | ros.IResolvable;
    /**
     * @Property productName: The name of the product. A product name can be 4 to 30 characters in length and can
     * contain Chinese characters, English letters, digits, and underscores (_).
     * Note A product name must be unique in an account.
     */
    productName: string | ros.IResolvable;
    /**
     * @Property aliyunCommodityCode: The edition of the product that you want to create. There are two options:
     * iothub_senior: Pro Edition.
     * iothub: Basic Edition.
     * If you do not input this parameter, the default value is used, which is iothub (Basic
     * Edition).
     */
    aliyunCommodityCode: string | ros.IResolvable | undefined;
    /**
     * @Property authType: Authentication device to access the Internet of Things platform under the product. Optional:
     * secret: using a device key for device authentication.
     * Details can be found MQTT-TCP connection communication.
     * id2: Use things device authentication ID.
     * x509: X.509 certificates using the device for device authentication.
     * The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
     * If this parameter is passed, the default value is secret.
     */
    authType: string | ros.IResolvable | undefined;
    /**
     * @Property categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
     * Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
     */
    categoryKey: string | ros.IResolvable | undefined;
    /**
     * @Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
     * This parameter is only available and required when you create a Pro Edition product.
     * Options:
     * 0: Do not parse\/Custom.
     * 1: Alink JSON.
     */
    dataFormat: number | ros.IResolvable | undefined;
    /**
     * @Property description: A description of the product. The description can be a maximum of 100 characters in
     * length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property id2: Whether ID2 certification.
     * Optional values:
     * true: the opening of ID2 certification.
     * false: do not open ID2 certification.
     * Do not pass this parameter, the default is not opened.
     * Explanation
     * Only 2 East China (Shanghai) regional support ID2 authentication.
     * If this parameter value is set to true, but passed AuthType parameter value is not id2, the system will AuthType parameter values prevail.
     */
    id2: boolean | ros.IResolvable | undefined;
    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    iotInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
     * Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
     * If you do not LoRaWAN network credentials, visit the network management platform to create things together.
     */
    joinPermissionId: string | ros.IResolvable | undefined;
    /**
     * @Property netType: Networking mode.
     * Set this parameter only if you are creating a product whose devices directly connect
     * to IoT Platform.
     * Options:
     * WIFI
     * CELLULAR
     * ETHERNET
     * OTHER
     * The default value is WIFI.
     */
    netType: string | ros.IResolvable | undefined;
    /**
     * @Property protocolType: The protocol that devices of this product use to connect to gateways.
     * Set this parameter only if you are creating a product whose devices will be connected
     * to gateways.
     * Options:
     * modbus: Modbus.
     * opc-ua: OPC UA.
     * customize: Customized protocol.
     * ble: BLE.
     * zigbee: ZigBee.
     */
    protocolType: string | ros.IResolvable | undefined;
    /**
     * @Property publishAuto: Whether to automatically model publication after the product is created.
     * true: publishing.
     * false: not released.
     * This parameter is not passed, the default value true.
     */
    publishAuto: boolean | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
     * If this parameter is passed, the product will be classified as a default resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProductProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosProductTopic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-producttopic
 */
export interface RosProductTopicProps {
    /**
     * @Property operation: Operation permissions of devices on the topic category. Value options:
     * SUB: Subscribe. Devices can subscribe to the topics of this category.
     * PUB: Publish. Devices can publish messages using the topics of this category.
     * ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
     */
    readonly operation: string | ros.IResolvable;
    /**
     * @Property productKey: The unique identifier of the product for which you want to create a topic category.
     */
    readonly productKey: string | ros.IResolvable;
    /**
     * @Property topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (\/) are used to delimit the topic hierarchies. The format of a topic category is productKey\/${deviceName}\/topicShortName.
     * Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
     */
    readonly topicShortName: string | ros.IResolvable;
    /**
     * @Property desc: The description of the topic category. You can enter a description with up to 100 characters.
     */
    readonly desc?: string | ros.IResolvable;
    /**
     * @Property iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
     */
    readonly iotInstanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IOT::ProductTopic`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProductTopic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-producttopic
 */
export declare class RosProductTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::ProductTopic";
    /**
     * @Attribute TopicId: Topic ID
     */
    readonly attrTopicId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property operation: Operation permissions of devices on the topic category. Value options:
     * SUB: Subscribe. Devices can subscribe to the topics of this category.
     * PUB: Publish. Devices can publish messages using the topics of this category.
     * ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
     */
    operation: string | ros.IResolvable;
    /**
     * @Property productKey: The unique identifier of the product for which you want to create a topic category.
     */
    productKey: string | ros.IResolvable;
    /**
     * @Property topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (\/) are used to delimit the topic hierarchies. The format of a topic category is productKey\/${deviceName}\/topicShortName.
     * Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
     */
    topicShortName: string | ros.IResolvable;
    /**
     * @Property desc: The description of the topic category. You can enter a description with up to 100 characters.
     */
    desc: string | ros.IResolvable | undefined;
    /**
     * @Property iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
     */
    iotInstanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProductTopicProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-rule
 */
export interface RosRuleProps {
    /**
     * @Property name: The name of the rule. The name must be 1 to 30 characters in length and can contain
     * English letters, digits, underscores (_), and hyphens (-). Chinese language is also
     * supported. Each Chinese symbol occupies 2 characters.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property dataType: The format of the data to be processed by the rule. You must specify the format of
     * device data to be processed for this parameter. Valid values:
     * JSON: JSON data
     * BINARY: binary data
     * Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
     * for RDS.
     * Default value: JSON.
     */
    readonly dataType?: string | ros.IResolvable;
    /**
     * @Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
     * the parameter is required for the instances that you have purchased.
     */
    readonly iotInstanceId?: string | ros.IResolvable;
    /**
     * @Property productKey: The ProductKey of the product to which the rule applies.
     */
    readonly productKey?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource
     * group information in the Resource Management console.
     * If you do not specify this parameter, the rule is assigned to the default resource
     * group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property ruleAction:
     */
    readonly ruleAction?: Array<RosRule.RuleActionProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ruleDesc: The description of the rule. The description can be up to 100 characters in length.
     * Each Chinese symbol occupies 1 characters.
     */
    readonly ruleDesc?: string | ros.IResolvable;
    /**
     * @Property select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
     * Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
     */
    readonly select?: string | ros.IResolvable;
    /**
     * @Property shortTopic: The topic to which this rule is applied. Syntax: ${deviceName}\/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
     * Basic communication topics or Thing Specification Language (TSL)-based communication
     * topics. Syntax: ${deviceName}\/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the
     * product. Valid values of topicShortName:
     * \/thing\/event\/property\/post: submits the property data of a device.
     * \/thing\/event\/${tsl.event.identifier}\/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.
     * \/thing\/lifecycle: submits device lifecycle changes.
     * \/thing\/downlink\/reply\/message: sends a response to a request from IoT Platform.
     * \/thing\/list\/found: submits the data when a gateway detects a new sub-device.
     * \/thing\/topo\/lifecycle: submits device topology changes.
     * \/thing\/event\/property\/history\/post: submits historical property data of a device.
     * \/thing\/event\/${tsl.event.identifier}\/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.
     * \/ota\/upgrade: submits OTA update status.
     * \/ota\/version\/post: submits OTA module versions.
     * \/thing\/deviceinfo\/update: submits device tag changes.
     * \/edge\/driver\/${driver_id}\/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.
     * ${packageId}\/${jobId}\/ota\/job\/status: submits the status of OTA update batches. This topic is a basic communication topic.
     * ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.
     * Custom topics. Example:${deviceName}\/user\/get.
     * You can call theQueryProductTopicoperation to view all custom topics of the product.
     * When you specify a custom topic, you can use the + and # wildcards.
     * You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the
     * product.
     * You can replace the fields that follow ${deviceName} with \/user\/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that
     * follow\/user.
     * For more information about how to use wildcards, see Wildcards in topics.
     * Topic that is used to submit device status changes: ${deviceName}.
     * You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
     */
    readonly shortTopic?: string | ros.IResolvable;
    /**
     * @Property startRule: Start the rule. The rule at least contains one rule action with normal data forward.
     */
    readonly startRule?: boolean | ros.IResolvable;
    /**
     * @Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
     * 1: The topic is a custom topic.
     * 2: The topic is used to submit device status changes. Syntax: \/as\/mqtt\/status\/${productKey}\/${deviceName}.
     */
    readonly topicType?: number | ros.IResolvable;
    /**
     * @Property where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
     * Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter.
     */
    readonly where?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IOT::Rule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-rule
 */
export declare class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::Rule";
    /**
     * @Attribute ActionId: The ID of the rule action.
     */
    readonly attrActionId: ros.IResolvable;
    /**
     * @Attribute RuleId: The ID of the rule.
     */
    readonly attrRuleId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the rule. The name must be 1 to 30 characters in length and can contain
     * English letters, digits, underscores (_), and hyphens (-). Chinese language is also
     * supported. Each Chinese symbol occupies 2 characters.
     */
    name: string | ros.IResolvable;
    /**
     * @Property dataType: The format of the data to be processed by the rule. You must specify the format of
     * device data to be processed for this parameter. Valid values:
     * JSON: JSON data
     * BINARY: binary data
     * Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
     * for RDS.
     * Default value: JSON.
     */
    dataType: string | ros.IResolvable | undefined;
    /**
     * @Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
     * the parameter is required for the instances that you have purchased.
     */
    iotInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property productKey: The ProductKey of the product to which the rule applies.
     */
    productKey: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource
     * group information in the Resource Management console.
     * If you do not specify this parameter, the rule is assigned to the default resource
     * group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property ruleAction:
     */
    ruleAction: Array<RosRule.RuleActionProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ruleDesc: The description of the rule. The description can be up to 100 characters in length.
     * Each Chinese symbol occupies 1 characters.
     */
    ruleDesc: string | ros.IResolvable | undefined;
    /**
     * @Property select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
     * Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
     */
    select: string | ros.IResolvable | undefined;
    /**
     * @Property shortTopic: The topic to which this rule is applied. Syntax: ${deviceName}\/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
     * Basic communication topics or Thing Specification Language (TSL)-based communication
     * topics. Syntax: ${deviceName}\/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the
     * product. Valid values of topicShortName:
     * \/thing\/event\/property\/post: submits the property data of a device.
     * \/thing\/event\/${tsl.event.identifier}\/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.
     * \/thing\/lifecycle: submits device lifecycle changes.
     * \/thing\/downlink\/reply\/message: sends a response to a request from IoT Platform.
     * \/thing\/list\/found: submits the data when a gateway detects a new sub-device.
     * \/thing\/topo\/lifecycle: submits device topology changes.
     * \/thing\/event\/property\/history\/post: submits historical property data of a device.
     * \/thing\/event\/${tsl.event.identifier}\/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.
     * \/ota\/upgrade: submits OTA update status.
     * \/ota\/version\/post: submits OTA module versions.
     * \/thing\/deviceinfo\/update: submits device tag changes.
     * \/edge\/driver\/${driver_id}\/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.
     * ${packageId}\/${jobId}\/ota\/job\/status: submits the status of OTA update batches. This topic is a basic communication topic.
     * ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.
     * Custom topics. Example:${deviceName}\/user\/get.
     * You can call theQueryProductTopicoperation to view all custom topics of the product.
     * When you specify a custom topic, you can use the + and # wildcards.
     * You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the
     * product.
     * You can replace the fields that follow ${deviceName} with \/user\/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that
     * follow\/user.
     * For more information about how to use wildcards, see Wildcards in topics.
     * Topic that is used to submit device status changes: ${deviceName}.
     * You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
     */
    shortTopic: string | ros.IResolvable | undefined;
    /**
     * @Property startRule: Start the rule. The rule at least contains one rule action with normal data forward.
     */
    startRule: boolean | ros.IResolvable | undefined;
    /**
     * @Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
     * 1: The topic is a custom topic.
     * 2: The topic is used to submit device status changes. Syntax: \/as\/mqtt\/status\/${productKey}\/${deviceName}.
     */
    topicType: number | ros.IResolvable | undefined;
    /**
     * @Property where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
     * Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter.
     */
    where: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosRule {
    /**
     * @stability external
     */
    interface RuleActionProperty {
        /**
         * @Property errorActionFlag: Indicates whether the rule action forwarded error operation data. Error operation
     * data indicates that the rule engine failed to forward data from the IoT Platform topic
     * to the destination cloud service. A data forwarding failure indicates that forwarding
     * retries also failed. Valid values:
     * true: forwards error operation data.
     * false: forwards normal data instead of error operation data.
     * Default value: false.
         */
        readonly errorActionFlag?: string | ros.IResolvable;
        /**
         * @Property type: The type of the rule action. Valid values:
     * MNS: forwards data in the topics that have been processed by the rule engine to Message
     * Service (MNS) for message transmission.
     * FC: forwards data in the topics that have been processed by the rule engine to Function
     * Compute for event computing.
     * REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
     * IoT Platform topic.
     * AMQP: forwards data to AMQP consumer groups.
     * OTS: forwards data in the topics that have been processed by the rule engine to Table
     * Store for NoSQL data storage.
     * Note
     * Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
     * Destination Alibaba Cloud services that are supported by the rule engine vary based
     * on regions. For more information about the regions and destination cloud services
     * that are supported by the rule engine, see Regions and zones.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property configuration: The configurations of the rule action. You must specify a JSON string. The configurations
     * for different types of rule actions are different. For more information about required
     * syntax and examples, see the following tables.
         */
        readonly configuration: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosRuleAction`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-ruleaction
 */
export interface RosRuleActionProps {
    /**
     * @Property configuration: The configurations of the rule action. You must specify a JSON string. The configurations
     * for different types of rule actions are different. For more information about required
     * syntax and examples, see the following tables.
     */
    readonly configuration: string | ros.IResolvable;
    /**
     * @Property ruleId: The ID of the rule for which you want to create an action. You can use either of the
     * following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
     */
    readonly ruleId: number | ros.IResolvable;
    /**
     * @Property type: The type of the rule action. Valid values:
     * MNS: forwards data in the topics that have been processed by the rule engine to Message
     * Service (MNS) for message transmission.
     * FC: forwards data in the topics that have been processed by the rule engine to Function
     * Compute for event computing.
     * REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
     * IoT Platform topic.
     * AMQP: forwards data to AMQP consumer groups.
     * OTS: forwards data in the topics that have been processed by the rule engine to Table
     * Store for NoSQL data storage.
     * Note
     * Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
     * Destination Alibaba Cloud services that are supported by the rule engine vary based
     * on regions. For more information about the regions and destination cloud services
     * that are supported by the rule engine, see Regions and zones.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property errorActionFlag: Indicates whether the rule action forwarded error operation data. Error operation
     * data indicates that the rule engine failed to forward data from the IoT Platform topic
     * to the destination cloud service. A data forwarding failure indicates that forwarding
     * retries also failed. Valid values:
     * true: forwards error operation data.
     * false: forwards normal data instead of error operation data.
     * Default value: false.
     */
    readonly errorActionFlag?: boolean | ros.IResolvable;
    /**
     * @Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
     * the parameter is required for the instances that you have purchased.
     */
    readonly iotInstanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IOT::RuleAction`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RuleAction` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-ruleaction
 */
export declare class RosRuleAction extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::RuleAction";
    /**
     * @Attribute ActionId: The ID of the rule action.
     */
    readonly attrActionId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property configuration: The configurations of the rule action. You must specify a JSON string. The configurations
     * for different types of rule actions are different. For more information about required
     * syntax and examples, see the following tables.
     */
    configuration: string | ros.IResolvable;
    /**
     * @Property ruleId: The ID of the rule for which you want to create an action. You can use either of the
     * following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
     */
    ruleId: number | ros.IResolvable;
    /**
     * @Property type: The type of the rule action. Valid values:
     * MNS: forwards data in the topics that have been processed by the rule engine to Message
     * Service (MNS) for message transmission.
     * FC: forwards data in the topics that have been processed by the rule engine to Function
     * Compute for event computing.
     * REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
     * IoT Platform topic.
     * AMQP: forwards data to AMQP consumer groups.
     * OTS: forwards data in the topics that have been processed by the rule engine to Table
     * Store for NoSQL data storage.
     * Note
     * Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
     * Destination Alibaba Cloud services that are supported by the rule engine vary based
     * on regions. For more information about the regions and destination cloud services
     * that are supported by the rule engine, see Regions and zones.
     */
    type: string | ros.IResolvable;
    /**
     * @Property errorActionFlag: Indicates whether the rule action forwarded error operation data. Error operation
     * data indicates that the rule engine failed to forward data from the IoT Platform topic
     * to the destination cloud service. A data forwarding failure indicates that forwarding
     * retries also failed. Valid values:
     * true: forwards error operation data.
     * false: forwards normal data instead of error operation data.
     * Default value: false.
     */
    errorActionFlag: boolean | ros.IResolvable | undefined;
    /**
     * @Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
     * the parameter is required for the instances that you have purchased.
     */
    iotInstanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleActionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
