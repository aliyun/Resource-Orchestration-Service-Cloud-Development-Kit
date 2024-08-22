// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosDeviceProps`
 *
 * @param properties - the TypeScript properties of a `RosDeviceProps`
 *
 * @returns the result of the validation.
 */
function RosDevicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('iotInstanceId', ros.validateString)(properties.iotInstanceId));
    errors.collect(ros.propertyValidator('devEui', ros.validateString)(properties.devEui));
    errors.collect(ros.propertyValidator('productKey', ros.requiredValidator)(properties.productKey));
    errors.collect(ros.propertyValidator('productKey', ros.validateString)(properties.productKey));
    errors.collect(ros.propertyValidator('deviceName', ros.validateString)(properties.deviceName));
    errors.collect(ros.propertyValidator('pinCode', ros.validateString)(properties.pinCode));
    errors.collect(ros.propertyValidator('nickname', ros.validateString)(properties.nickname));
    return errors.wrap('supplied properties not correct for "RosDeviceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::IOT::Device` resource
 *
 * @param properties - the TypeScript properties of a `RosDeviceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::IOT::Device` resource.
 */
// @ts-ignore TS6133
function rosDevicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDevicePropsValidator(properties).assertSuccess();
    }
    return {
      'ProductKey': ros.stringToRosTemplate(properties.productKey),
      'DevEui': ros.stringToRosTemplate(properties.devEui),
      'DeviceName': ros.stringToRosTemplate(properties.deviceName),
      'IotInstanceId': ros.stringToRosTemplate(properties.iotInstanceId),
      'Nickname': ros.stringToRosTemplate(properties.nickname),
      'PinCode': ros.stringToRosTemplate(properties.pinCode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IOT::Device`, which is used to register a Device.
 * @Note This class does not contain additional functions, so it is recommended to use the `Device` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
 */
export class RosDevice extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::Device";

    /**
     * @Attribute DeviceName: Device name.
     */
    public readonly attrDeviceName: ros.IResolvable;

    /**
     * @Attribute DeviceSecret: Device key.
     */
    public readonly attrDeviceSecret: ros.IResolvable;

    /**
     * @Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
Description Keep, do not leak.
     */
    public readonly attrIotId: ros.IResolvable;

    /**
     * @Attribute IotInstanceId: IOT instance ID.
     */
    public readonly attrIotInstanceId: ros.IResolvable;

    /**
     * @Attribute IpAddress: IP address.
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * @Attribute NickName: Nick name.
     */
    public readonly attrNickName: ros.IResolvable;

    /**
     * @Attribute NodeType: Node type.
     */
    public readonly attrNodeType: ros.IResolvable;

    /**
     * @Attribute ProductKey: Product key.
     */
    public readonly attrProductKey: ros.IResolvable;

    /**
     * @Attribute ProductName: Product name.
     */
    public readonly attrProductName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property productKey: The identifier of the product to which the device to be registered belongs.
     */
    public productKey: string | ros.IResolvable;

    /**
     * @Property devEui: DevEUI LoRaWAN equipment.
     * When you create a LoRaWAN devices, this will pass.
     */
    public devEui: string | ros.IResolvable | undefined;

    /**
     * @Property deviceName: The name of the device that you want to register. The device name must consist of
     * 4 to 32 characters, including English letters, digits, and special characters, for
     * example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).
     * DeviceName is used with ProductKey to identify a specified device.
     * Note If you do not specify this parameter, the system will generate a name for the device.
     */
    public deviceName: string | ros.IResolvable | undefined;

    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    public iotInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
     * contain Chinese characters, English letters, numbers and underscores (_). A Chinese
     * character counts as two characters.
     */
    public nickname: string | ros.IResolvable | undefined;

    /**
     * @Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
     * When you create a LoRaWAN devices, this will pass.
     */
    public pinCode: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeviceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDevice.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDeviceName = this.getAtt('DeviceName');
        this.attrDeviceSecret = this.getAtt('DeviceSecret');
        this.attrIotId = this.getAtt('IotId');
        this.attrIotInstanceId = this.getAtt('IotInstanceId');
        this.attrIpAddress = this.getAtt('IpAddress');
        this.attrNickName = this.getAtt('NickName');
        this.attrNodeType = this.getAtt('NodeType');
        this.attrProductKey = this.getAtt('ProductKey');
        this.attrProductName = this.getAtt('ProductName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.productKey = props.productKey;
        this.devEui = props.devEui;
        this.deviceName = props.deviceName;
        this.iotInstanceId = props.iotInstanceId;
        this.nickname = props.nickname;
        this.pinCode = props.pinCode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            productKey: this.productKey,
            devEui: this.devEui,
            deviceName: this.deviceName,
            iotInstanceId: this.iotInstanceId,
            nickname: this.nickname,
            pinCode: this.pinCode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDevicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosDeviceGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDeviceGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDeviceGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('superGroupId', ros.validateString)(properties.superGroupId));
    errors.collect(ros.propertyValidator('iotInstanceId', ros.validateString)(properties.iotInstanceId));
    errors.collect(ros.propertyValidator('groupDesc', ros.validateString)(properties.groupDesc));
    return errors.wrap('supplied properties not correct for "RosDeviceGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::IOT::DeviceGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDeviceGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::IOT::DeviceGroup` resource.
 */
// @ts-ignore TS6133
function rosDeviceGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDeviceGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'GroupDesc': ros.stringToRosTemplate(properties.groupDesc),
      'IotInstanceId': ros.stringToRosTemplate(properties.iotInstanceId),
      'SuperGroupId': ros.stringToRosTemplate(properties.superGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IOT::DeviceGroup`, which is used to create a group.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeviceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-devicegroup
 */
export class RosDeviceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::DeviceGroup";

    /**
     * @Attribute GroupId: Packet, ID, System for the globally unique identifier generated packet.
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * @Attribute IotInstanceId: IOT instance ID.
     */
    public readonly attrIotInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
     */
    public groupName: string | ros.IResolvable;

    /**
     * @Property groupDesc: The description of the group. You can enter a description with up to 100 characters.
     */
    public groupDesc: string | ros.IResolvable | undefined;

    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    public iotInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property superGroupId: The ID of the parent group.
     * If you want to create a first-level group, do not enter this parameter.
     */
    public superGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeviceGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDeviceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = this.getAtt('GroupId');
        this.attrIotInstanceId = this.getAtt('IotInstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.groupDesc = props.groupDesc;
        this.iotInstanceId = props.iotInstanceId;
        this.superGroupId = props.superGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            groupDesc: this.groupDesc,
            iotInstanceId: this.iotInstanceId,
            superGroupId: this.superGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDeviceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosProductProps`
 *
 * @param properties - the TypeScript properties of a `RosProductProps`
 *
 * @returns the result of the validation.
 */
function RosProductPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('publishAuto', ros.validateBoolean)(properties.publishAuto));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('iotInstanceId', ros.validateString)(properties.iotInstanceId));
    errors.collect(ros.propertyValidator('productName', ros.requiredValidator)(properties.productName));
    errors.collect(ros.propertyValidator('productName', ros.validateString)(properties.productName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('aliyunCommodityCode', ros.validateString)(properties.aliyunCommodityCode));
    errors.collect(ros.propertyValidator('categoryKey', ros.validateString)(properties.categoryKey));
    if(properties.protocolType && (typeof properties.protocolType) !== 'object') {
        errors.collect(ros.propertyValidator('protocolType', ros.validateAllowedValues)({
          data: properties.protocolType,
          allowedValues: ["ble","customize","modbus","opc-ua","zigbee"],
        }));
    }
    errors.collect(ros.propertyValidator('protocolType', ros.validateString)(properties.protocolType));
    errors.collect(ros.propertyValidator('id2', ros.validateBoolean)(properties.id2));
    errors.collect(ros.propertyValidator('nodeType', ros.requiredValidator)(properties.nodeType));
    if(properties.nodeType && (typeof properties.nodeType) !== 'object') {
        errors.collect(ros.propertyValidator('nodeType', ros.validateAllowedValues)({
          data: properties.nodeType,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('nodeType', ros.validateNumber)(properties.nodeType));
    if(properties.dataFormat && (typeof properties.dataFormat) !== 'object') {
        errors.collect(ros.propertyValidator('dataFormat', ros.validateAllowedValues)({
          data: properties.dataFormat,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('dataFormat', ros.validateNumber)(properties.dataFormat));
    errors.collect(ros.propertyValidator('authType', ros.validateString)(properties.authType));
    errors.collect(ros.propertyValidator('joinPermissionId', ros.validateString)(properties.joinPermissionId));
    if(properties.netType && (typeof properties.netType) !== 'object') {
        errors.collect(ros.propertyValidator('netType', ros.validateAllowedValues)({
          data: properties.netType,
          allowedValues: ["CELLULAR","ETHERNET","LORA","OTHER","WIFI"],
        }));
    }
    errors.collect(ros.propertyValidator('netType', ros.validateString)(properties.netType));
    return errors.wrap('supplied properties not correct for "RosProductProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::IOT::Product` resource
 *
 * @param properties - the TypeScript properties of a `RosProductProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::IOT::Product` resource.
 */
// @ts-ignore TS6133
function rosProductPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProductPropsValidator(properties).assertSuccess();
    }
    return {
      'NodeType': ros.numberToRosTemplate(properties.nodeType),
      'ProductName': ros.stringToRosTemplate(properties.productName),
      'AliyunCommodityCode': ros.stringToRosTemplate(properties.aliyunCommodityCode),
      'AuthType': ros.stringToRosTemplate(properties.authType),
      'CategoryKey': ros.stringToRosTemplate(properties.categoryKey),
      'DataFormat': ros.numberToRosTemplate(properties.dataFormat),
      'Description': ros.stringToRosTemplate(properties.description),
      'Id2': ros.booleanToRosTemplate(properties.id2),
      'IotInstanceId': ros.stringToRosTemplate(properties.iotInstanceId),
      'JoinPermissionId': ros.stringToRosTemplate(properties.joinPermissionId),
      'NetType': ros.stringToRosTemplate(properties.netType),
      'ProtocolType': ros.stringToRosTemplate(properties.protocolType),
      'PublishAuto': ros.booleanToRosTemplate(properties.publishAuto),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IOT::Product`, which is used to create a product.
 * @Note This class does not contain additional functions, so it is recommended to use the `Product` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-product
 */
export class RosProduct extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::Product";

    /**
     * @Attribute IotInstanceId: IOT instance ID.
     */
    public readonly attrIotInstanceId: ros.IResolvable;

    /**
     * @Attribute ProductKey: The globally unique identifier of the product issued by IoT Platform.
     */
    public readonly attrProductKey: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property nodeType: The node type of the product. Values:
     * 0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
     * either directly or as a sub-device of a gateway.
     * 1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
     * the topological relationships with sub-devices, and synchronize the topological relationships
     * to IoT Platform.
     */
    public nodeType: number | ros.IResolvable;

    /**
     * @Property productName: The name of the product. A product name can be 4 to 30 characters in length and can
     * contain Chinese characters, English letters, digits, and underscores (_).
     * Note A product name must be unique in an account.
     */
    public productName: string | ros.IResolvable;

    /**
     * @Property aliyunCommodityCode: The edition of the product that you want to create. There are two options:
     * iothub_senior: Pro Edition.
     * iothub: Basic Edition.
     * If you do not input this parameter, the default value is used, which is iothub (Basic
     * Edition).
     */
    public aliyunCommodityCode: string | ros.IResolvable | undefined;

    /**
     * @Property authType: Authentication device to access the Internet of Things platform under the product. Optional:
     * secret: using a device key for device authentication.
     * Details can be found MQTT-TCP connection communication.
     * id2: Use things device authentication ID.
     * x509: X.509 certificates using the device for device authentication.
     * The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
     * If this parameter is passed, the default value is secret.
     */
    public authType: string | ros.IResolvable | undefined;

    /**
     * @Property categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
     * Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
     */
    public categoryKey: string | ros.IResolvable | undefined;

    /**
     * @Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
     * This parameter is only available and required when you create a Pro Edition product.
     * Options:
     * 0: Do not parse\/Custom.
     * 1: Alink JSON.
     */
    public dataFormat: number | ros.IResolvable | undefined;

    /**
     * @Property description: A description of the product. The description can be a maximum of 100 characters in
     * length.
     */
    public description: string | ros.IResolvable | undefined;

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
    public id2: boolean | ros.IResolvable | undefined;

    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    public iotInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
     * Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
     * If you do not LoRaWAN network credentials, visit the network management platform to create things together.
     */
    public joinPermissionId: string | ros.IResolvable | undefined;

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
    public netType: string | ros.IResolvable | undefined;

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
    public protocolType: string | ros.IResolvable | undefined;

    /**
     * @Property publishAuto: Whether to automatically model publication after the product is created.
     * true: publishing.
     * false: not released.
     * This parameter is not passed, the default value true.
     */
    public publishAuto: boolean | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
     * If this parameter is passed, the product will be classified as a default resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProductProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProduct.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIotInstanceId = this.getAtt('IotInstanceId');
        this.attrProductKey = this.getAtt('ProductKey');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.nodeType = props.nodeType;
        this.productName = props.productName;
        this.aliyunCommodityCode = props.aliyunCommodityCode;
        this.authType = props.authType;
        this.categoryKey = props.categoryKey;
        this.dataFormat = props.dataFormat;
        this.description = props.description;
        this.id2 = props.id2;
        this.iotInstanceId = props.iotInstanceId;
        this.joinPermissionId = props.joinPermissionId;
        this.netType = props.netType;
        this.protocolType = props.protocolType;
        this.publishAuto = props.publishAuto;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            nodeType: this.nodeType,
            productName: this.productName,
            aliyunCommodityCode: this.aliyunCommodityCode,
            authType: this.authType,
            categoryKey: this.categoryKey,
            dataFormat: this.dataFormat,
            description: this.description,
            id2: this.id2,
            iotInstanceId: this.iotInstanceId,
            joinPermissionId: this.joinPermissionId,
            netType: this.netType,
            protocolType: this.protocolType,
            publishAuto: this.publishAuto,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProductPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosProductTopicProps`
 *
 * @param properties - the TypeScript properties of a `RosProductTopicProps`
 *
 * @returns the result of the validation.
 */
function RosProductTopicPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.desc && (Array.isArray(properties.desc) || (typeof properties.desc) === 'string')) {
        errors.collect(ros.propertyValidator('desc', ros.validateLength)({
            data: properties.desc.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('desc', ros.validateString)(properties.desc));
    errors.collect(ros.propertyValidator('iotInstanceId', ros.validateString)(properties.iotInstanceId));
    errors.collect(ros.propertyValidator('topicShortName', ros.requiredValidator)(properties.topicShortName));
    errors.collect(ros.propertyValidator('topicShortName', ros.validateString)(properties.topicShortName));
    errors.collect(ros.propertyValidator('operation', ros.requiredValidator)(properties.operation));
    if(properties.operation && (typeof properties.operation) !== 'object') {
        errors.collect(ros.propertyValidator('operation', ros.validateAllowedValues)({
          data: properties.operation,
          allowedValues: ["ALL","PUB","SUB"],
        }));
    }
    errors.collect(ros.propertyValidator('operation', ros.validateString)(properties.operation));
    errors.collect(ros.propertyValidator('productKey', ros.requiredValidator)(properties.productKey));
    errors.collect(ros.propertyValidator('productKey', ros.validateString)(properties.productKey));
    return errors.wrap('supplied properties not correct for "RosProductTopicProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::IOT::ProductTopic` resource
 *
 * @param properties - the TypeScript properties of a `RosProductTopicProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::IOT::ProductTopic` resource.
 */
// @ts-ignore TS6133
function rosProductTopicPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProductTopicPropsValidator(properties).assertSuccess();
    }
    return {
      'Operation': ros.stringToRosTemplate(properties.operation),
      'ProductKey': ros.stringToRosTemplate(properties.productKey),
      'TopicShortName': ros.stringToRosTemplate(properties.topicShortName),
      'Desc': ros.stringToRosTemplate(properties.desc),
      'IotInstanceId': ros.stringToRosTemplate(properties.iotInstanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IOT::ProductTopic`, which is used to create a topic category for a specified product.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProductTopic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-producttopic
 */
export class RosProductTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::ProductTopic";

    /**
     * @Attribute TopicId: Topic ID
     */
    public readonly attrTopicId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property operation: Operation permissions of devices on the topic category. Value options:
     * SUB: Subscribe. Devices can subscribe to the topics of this category.
     * PUB: Publish. Devices can publish messages using the topics of this category.
     * ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
     */
    public operation: string | ros.IResolvable;

    /**
     * @Property productKey: The unique identifier of the product for which you want to create a topic category.
     */
    public productKey: string | ros.IResolvable;

    /**
     * @Property topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (\/) are used to delimit the topic hierarchies. The format of a topic category is productKey\/${deviceName}\/topicShortName.
     * Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
     */
    public topicShortName: string | ros.IResolvable;

    /**
     * @Property desc: The description of the topic category. You can enter a description with up to 100 characters.
     */
    public desc: string | ros.IResolvable | undefined;

    /**
     * @Property iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
     */
    public iotInstanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProductTopicProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProductTopic.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTopicId = this.getAtt('TopicId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.operation = props.operation;
        this.productKey = props.productKey;
        this.topicShortName = props.topicShortName;
        this.desc = props.desc;
        this.iotInstanceId = props.iotInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            operation: this.operation,
            productKey: this.productKey,
            topicShortName: this.topicShortName,
            desc: this.desc,
            iotInstanceId: this.iotInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProductTopicPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the result of the validation.
 */
function RosRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('topicType', ros.validateNumber)(properties.topicType));
    errors.collect(ros.propertyValidator('iotInstanceId', ros.validateString)(properties.iotInstanceId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.ruleAction && (Array.isArray(properties.ruleAction) || (typeof properties.ruleAction) === 'string')) {
        errors.collect(ros.propertyValidator('ruleAction', ros.validateLength)({
            data: properties.ruleAction.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('ruleAction', ros.listValidator(RosRule_RuleActionPropertyValidator))(properties.ruleAction));
    errors.collect(ros.propertyValidator('shortTopic', ros.validateString)(properties.shortTopic));
    errors.collect(ros.propertyValidator('select', ros.validateString)(properties.select));
    errors.collect(ros.propertyValidator('startRule', ros.validateBoolean)(properties.startRule));
    if(properties.dataType && (typeof properties.dataType) !== 'object') {
        errors.collect(ros.propertyValidator('dataType', ros.validateAllowedValues)({
          data: properties.dataType,
          allowedValues: ["BINARY","JSON"],
        }));
    }
    errors.collect(ros.propertyValidator('dataType', ros.validateString)(properties.dataType));
    errors.collect(ros.propertyValidator('ruleDesc', ros.validateString)(properties.ruleDesc));
    errors.collect(ros.propertyValidator('where', ros.validateString)(properties.where));
    errors.collect(ros.propertyValidator('productKey', ros.validateString)(properties.productKey));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::IOT::Rule` resource
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::IOT::Rule` resource.
 */
// @ts-ignore TS6133
function rosRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRulePropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'DataType': ros.stringToRosTemplate(properties.dataType),
      'IotInstanceId': ros.stringToRosTemplate(properties.iotInstanceId),
      'ProductKey': ros.stringToRosTemplate(properties.productKey),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'RuleAction': ros.listMapper(rosRuleRuleActionPropertyToRosTemplate)(properties.ruleAction),
      'RuleDesc': ros.stringToRosTemplate(properties.ruleDesc),
      'Select': ros.stringToRosTemplate(properties.select),
      'ShortTopic': ros.stringToRosTemplate(properties.shortTopic),
      'StartRule': ros.booleanToRosTemplate(properties.startRule),
      'TopicType': ros.numberToRosTemplate(properties.topicType),
      'Where': ros.stringToRosTemplate(properties.where),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IOT::Rule`, which is used to create a rule for a specific topic.
 * @Note This class does not contain additional functions, so it is recommended to use the `Rule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-rule
 */
export class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::Rule";

    /**
     * @Attribute ActionId: The ID of the rule action.
     */
    public readonly attrActionId: ros.IResolvable;

    /**
     * @Attribute RuleId: The ID of the rule.
     */
    public readonly attrRuleId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the rule. The name must be 1 to 30 characters in length and can contain
     * English letters, digits, underscores (_), and hyphens (-). Chinese language is also
     * supported. Each Chinese symbol occupies 2 characters.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property dataType: The format of the data to be processed by the rule. You must specify the format of
     * device data to be processed for this parameter. Valid values:
     * JSON: JSON data
     * BINARY: binary data
     * Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
     * for RDS.
     * Default value: JSON.
     */
    public dataType: string | ros.IResolvable | undefined;

    /**
     * @Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
     * the parameter is required for the instances that you have purchased.
     */
    public iotInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property productKey: The ProductKey of the product to which the rule applies.
     */
    public productKey: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource
     * group information in the Resource Management console.
     * If you do not specify this parameter, the rule is assigned to the default resource
     * group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property ruleAction:
     */
    public ruleAction: Array<RosRule.RuleActionProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property ruleDesc: The description of the rule. The description can be up to 100 characters in length.
     * Each Chinese symbol occupies 1 characters.
     */
    public ruleDesc: string | ros.IResolvable | undefined;

    /**
     * @Property select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
     * Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
     */
    public select: string | ros.IResolvable | undefined;

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
    public shortTopic: string | ros.IResolvable | undefined;

    /**
     * @Property startRule: Start the rule. The rule at least contains one rule action with normal data forward.
     */
    public startRule: boolean | ros.IResolvable | undefined;

    /**
     * @Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
     * 1: The topic is a custom topic.
     * 2: The topic is used to submit device status changes. Syntax: \/as\/mqtt\/status\/${productKey}\/${deviceName}.
     */
    public topicType: number | ros.IResolvable | undefined;

    /**
     * @Property where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
     * Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter.
     */
    public where: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrActionId = this.getAtt('ActionId');
        this.attrRuleId = this.getAtt('RuleId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.dataType = props.dataType;
        this.iotInstanceId = props.iotInstanceId;
        this.productKey = props.productKey;
        this.resourceGroupId = props.resourceGroupId;
        this.ruleAction = props.ruleAction;
        this.ruleDesc = props.ruleDesc;
        this.select = props.select;
        this.shortTopic = props.shortTopic;
        this.startRule = props.startRule;
        this.topicType = props.topicType;
        this.where = props.where;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            dataType: this.dataType,
            iotInstanceId: this.iotInstanceId,
            productKey: this.productKey,
            resourceGroupId: this.resourceGroupId,
            ruleAction: this.ruleAction,
            ruleDesc: this.ruleDesc,
            select: this.select,
            shortTopic: this.shortTopic,
            startRule: this.startRule,
            topicType: this.topicType,
            where: this.where,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface RuleActionProperty {
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
 * Determine whether the given properties match those of a `RuleActionProperty`
 *
 * @param properties - the TypeScript properties of a `RuleActionProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_RuleActionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.errorActionFlag && (typeof properties.errorActionFlag) !== 'object') {
        errors.collect(ros.propertyValidator('errorActionFlag', ros.validateAllowedValues)({
          data: properties.errorActionFlag,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('errorActionFlag', ros.validateString)(properties.errorActionFlag));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["AMQP","DATAHUB","FC","MNS","ONS","OTS","REPUBLISH"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('configuration', ros.requiredValidator)(properties.configuration));
    errors.collect(ros.propertyValidator('configuration', ros.validateString)(properties.configuration));
    return errors.wrap('supplied properties not correct for "RuleActionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::IOT::Rule.RuleAction` resource
 *
 * @param properties - the TypeScript properties of a `RuleActionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::IOT::Rule.RuleAction` resource.
 */
// @ts-ignore TS6133
function rosRuleRuleActionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_RuleActionPropertyValidator(properties).assertSuccess();
    return {
      'ErrorActionFlag': ros.stringToRosTemplate(properties.errorActionFlag),
      'Type': ros.stringToRosTemplate(properties.type),
      'Configuration': ros.stringToRosTemplate(properties.configuration),
    };
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
 * Determine whether the given properties match those of a `RosRuleActionProps`
 *
 * @param properties - the TypeScript properties of a `RosRuleActionProps`
 *
 * @returns the result of the validation.
 */
function RosRuleActionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('errorActionFlag', ros.validateBoolean)(properties.errorActionFlag));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["AMQP","DATAHUB","FC","MNS","ONS","OTS","REPUBLISH"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('iotInstanceId', ros.validateString)(properties.iotInstanceId));
    errors.collect(ros.propertyValidator('configuration', ros.requiredValidator)(properties.configuration));
    errors.collect(ros.propertyValidator('configuration', ros.validateString)(properties.configuration));
    errors.collect(ros.propertyValidator('ruleId', ros.requiredValidator)(properties.ruleId));
    errors.collect(ros.propertyValidator('ruleId', ros.validateNumber)(properties.ruleId));
    return errors.wrap('supplied properties not correct for "RosRuleActionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::IOT::RuleAction` resource
 *
 * @param properties - the TypeScript properties of a `RosRuleActionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::IOT::RuleAction` resource.
 */
// @ts-ignore TS6133
function rosRuleActionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRuleActionPropsValidator(properties).assertSuccess();
    }
    return {
      'Configuration': ros.stringToRosTemplate(properties.configuration),
      'RuleId': ros.numberToRosTemplate(properties.ruleId),
      'Type': ros.stringToRosTemplate(properties.type),
      'ErrorActionFlag': ros.booleanToRosTemplate(properties.errorActionFlag),
      'IotInstanceId': ros.stringToRosTemplate(properties.iotInstanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IOT::RuleAction`, which is used to create a rule action for a specified rule.
 * @Note This class does not contain additional functions, so it is recommended to use the `RuleAction` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-ruleaction
 */
export class RosRuleAction extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::RuleAction";

    /**
     * @Attribute ActionId: The ID of the rule action.
     */
    public readonly attrActionId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property configuration: The configurations of the rule action. You must specify a JSON string. The configurations
     * for different types of rule actions are different. For more information about required
     * syntax and examples, see the following tables.
     */
    public configuration: string | ros.IResolvable;

    /**
     * @Property ruleId: The ID of the rule for which you want to create an action. You can use either of the
     * following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
     */
    public ruleId: number | ros.IResolvable;

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
    public type: string | ros.IResolvable;

    /**
     * @Property errorActionFlag: Indicates whether the rule action forwarded error operation data. Error operation
     * data indicates that the rule engine failed to forward data from the IoT Platform topic
     * to the destination cloud service. A data forwarding failure indicates that forwarding
     * retries also failed. Valid values:
     * true: forwards error operation data.
     * false: forwards normal data instead of error operation data.
     * Default value: false.
     */
    public errorActionFlag: boolean | ros.IResolvable | undefined;

    /**
     * @Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
     * the parameter is required for the instances that you have purchased.
     */
    public iotInstanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleActionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRuleAction.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrActionId = this.getAtt('ActionId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.configuration = props.configuration;
        this.ruleId = props.ruleId;
        this.type = props.type;
        this.errorActionFlag = props.errorActionFlag;
        this.iotInstanceId = props.iotInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            configuration: this.configuration,
            ruleId: this.ruleId,
            type: this.type,
            errorActionFlag: this.errorActionFlag,
            iotInstanceId: this.iotInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRuleActionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
