// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::IOT::Device`
 */
export interface RosDeviceProps {

    /**
     * @Property productKey: The identifier of the product to which the device to be registered belongs.
     */
    readonly productKey: string;

    /**
     * @Property devEui: DevEUI LoRaWAN equipment.
     * When you create a LoRaWAN devices, this will pass.
     */
    readonly devEui?: string;

    /**
     * @Property deviceName: The name of the device that you want to register. The device name must consist of
     * 4 to 32 characters, including English letters, digits, and special characters, for
     * example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).
     * DeviceName is used with ProductKey to identify a specified device.
     * Note If you do not specify this parameter, the system will generate a name for the device.
     */
    readonly deviceName?: string;

    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    readonly iotInstanceId?: string;

    /**
     * @Property nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
     * contain Chinese characters, English letters, numbers and underscores (_). A Chinese
     * character counts as two characters.
     */
    readonly nickname?: string;

    /**
     * @Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
     * When you create a LoRaWAN devices, this will pass.
     */
    readonly pinCode?: string;
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
      ProductKey: ros.stringToRosTemplate(properties.productKey),
      DevEui: ros.stringToRosTemplate(properties.devEui),
      DeviceName: ros.stringToRosTemplate(properties.deviceName),
      IotInstanceId: ros.stringToRosTemplate(properties.iotInstanceId),
      Nickname: ros.stringToRosTemplate(properties.nickname),
      PinCode: ros.stringToRosTemplate(properties.pinCode),
    };
}

/**
 * A ROS template type:  `ALIYUN::IOT::Device`
 */
export class RosDevice extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::Device";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DeviceName: Device name.
     */
    public readonly attrDeviceName: any;

    /**
     * @Attribute DeviceSecret: Device key.
     */
    public readonly attrDeviceSecret: any;

    /**
     * @Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
Description Keep, do not leak.
     */
    public readonly attrIotId: any;

    /**
     * @Attribute IotInstanceId: IOT instance ID.
     */
    public readonly attrIotInstanceId: any;

    /**
     * @Attribute IpAddress: IP address.
     */
    public readonly attrIpAddress: any;

    /**
     * @Attribute NickName: Nick name.
     */
    public readonly attrNickName: any;

    /**
     * @Attribute NodeType: Node type.
     */
    public readonly attrNodeType: any;

    /**
     * @Attribute ProductKey: Product key.
     */
    public readonly attrProductKey: any;

    /**
     * @Attribute ProductName: Product name.
     */
    public readonly attrProductName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property productKey: The identifier of the product to which the device to be registered belongs.
     */
    public productKey: string;

    /**
     * @Property devEui: DevEUI LoRaWAN equipment.
     * When you create a LoRaWAN devices, this will pass.
     */
    public devEui: string | undefined;

    /**
     * @Property deviceName: The name of the device that you want to register. The device name must consist of
     * 4 to 32 characters, including English letters, digits, and special characters, for
     * example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).
     * DeviceName is used with ProductKey to identify a specified device.
     * Note If you do not specify this parameter, the system will generate a name for the device.
     */
    public deviceName: string | undefined;

    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    public iotInstanceId: string | undefined;

    /**
     * @Property nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
     * contain Chinese characters, English letters, numbers and underscores (_). A Chinese
     * character counts as two characters.
     */
    public nickname: string | undefined;

    /**
     * @Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
     * When you create a LoRaWAN devices, this will pass.
     */
    public pinCode: string | undefined;

    /**
     * Create a new `ALIYUN::IOT::Device`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeviceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDevice.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDeviceName = ros.Token.asString(this.getAtt('DeviceName'));
        this.attrDeviceSecret = ros.Token.asString(this.getAtt('DeviceSecret'));
        this.attrIotId = ros.Token.asString(this.getAtt('IotId'));
        this.attrIotInstanceId = ros.Token.asString(this.getAtt('IotInstanceId'));
        this.attrIpAddress = ros.Token.asString(this.getAtt('IpAddress'));
        this.attrNickName = ros.Token.asString(this.getAtt('NickName'));
        this.attrNodeType = ros.Token.asString(this.getAtt('NodeType'));
        this.attrProductKey = ros.Token.asString(this.getAtt('ProductKey'));
        this.attrProductName = ros.Token.asString(this.getAtt('ProductName'));

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
 * Properties for defining a `ALIYUN::IOT::DeviceGroup`
 */
export interface RosDeviceGroupProps {

    /**
     * @Property groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
     */
    readonly groupName: string;

    /**
     * @Property groupDesc: The description of the group. You can enter a description with up to 100 characters.
     */
    readonly groupDesc?: string;

    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    readonly iotInstanceId?: string;

    /**
     * @Property superGroupId: The ID of the parent group.
     * If you want to create a first-level group, do not enter this parameter.
     */
    readonly superGroupId?: string;
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
    errors.collect(ros.propertyValidator('iotInstanceId', ros.validateString)(properties.iotInstanceId));
    errors.collect(ros.propertyValidator('superGroupId', ros.validateString)(properties.superGroupId));
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
      GroupName: ros.stringToRosTemplate(properties.groupName),
      GroupDesc: ros.stringToRosTemplate(properties.groupDesc),
      IotInstanceId: ros.stringToRosTemplate(properties.iotInstanceId),
      SuperGroupId: ros.stringToRosTemplate(properties.superGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::IOT::DeviceGroup`
 */
export class RosDeviceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::DeviceGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GroupId: Packet, ID, System for the globally unique identifier generated packet.
     */
    public readonly attrGroupId: any;

    /**
     * @Attribute IotInstanceId: IOT instance ID.
     */
    public readonly attrIotInstanceId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
     */
    public groupName: string;

    /**
     * @Property groupDesc: The description of the group. You can enter a description with up to 100 characters.
     */
    public groupDesc: string | undefined;

    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    public iotInstanceId: string | undefined;

    /**
     * @Property superGroupId: The ID of the parent group.
     * If you want to create a first-level group, do not enter this parameter.
     */
    public superGroupId: string | undefined;

    /**
     * Create a new `ALIYUN::IOT::DeviceGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeviceGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDeviceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = ros.Token.asString(this.getAtt('GroupId'));
        this.attrIotInstanceId = ros.Token.asString(this.getAtt('IotInstanceId'));

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
 * Properties for defining a `ALIYUN::IOT::Product`
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
    readonly nodeType: number;

    /**
     * @Property productName: The name of the product. A product name can be 4 to 30 characters in length and can
     * contain Chinese characters, English letters, digits, and underscores (_).
     * Note A product name must be unique in an account.
     */
    readonly productName: string;

    /**
     * @Property aliyunCommodityCode: The edition of the product that you want to create. There are two options:
     * iothub_senior: Pro Edition.
     * iothub: Basic Edition.
     * If you do not input this parameter, the default value is used, which is iothub (Basic
     * Edition).
     */
    readonly aliyunCommodityCode?: string;

    /**
     * @Property authType: Authentication device to access the Internet of Things platform under the product. Optional:
     * secret: using a device key for device authentication.
     * Details can be found MQTT-TCP connection communication.
     * id2: Use things device authentication ID.
     * x509: X.509 certificates using the device for device authentication.
     * The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
     * If this parameter is passed, the default value is secret.
     */
    readonly authType?: string;

    /**
     * @Property categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
     * Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
     */
    readonly categoryKey?: string;

    /**
     * @Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
     * This parameter is only available and required when you create a Pro Edition product.
     * Options:
     * 0: Do not parse/Custom.
     * 1: Alink JSON.
     */
    readonly dataFormat?: number;

    /**
     * @Property description: A description of the product. The description can be a maximum of 100 characters in
     * length.
     */
    readonly description?: string;

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
    readonly iotInstanceId?: string;

    /**
     * @Property joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
     * Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
     * If you do not LoRaWAN network credentials, visit the network management platform to create things together.
     */
    readonly joinPermissionId?: string;

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
    readonly netType?: string;

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
    readonly protocolType?: string;

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
    readonly resourceGroupId?: string;
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
      NodeType: ros.numberToRosTemplate(properties.nodeType),
      ProductName: ros.stringToRosTemplate(properties.productName),
      AliyunCommodityCode: ros.stringToRosTemplate(properties.aliyunCommodityCode),
      AuthType: ros.stringToRosTemplate(properties.authType),
      CategoryKey: ros.stringToRosTemplate(properties.categoryKey),
      DataFormat: ros.numberToRosTemplate(properties.dataFormat),
      Description: ros.stringToRosTemplate(properties.description),
      Id2: ros.booleanToRosTemplate(properties.id2),
      IotInstanceId: ros.stringToRosTemplate(properties.iotInstanceId),
      JoinPermissionId: ros.stringToRosTemplate(properties.joinPermissionId),
      NetType: ros.stringToRosTemplate(properties.netType),
      ProtocolType: ros.stringToRosTemplate(properties.protocolType),
      PublishAuto: ros.booleanToRosTemplate(properties.publishAuto),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::IOT::Product`
 */
export class RosProduct extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::Product";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute IotInstanceId: IOT instance ID.
     */
    public readonly attrIotInstanceId: any;

    /**
     * @Attribute ProductKey: The globally unique identifier of the product issued by IoT Platform.
     */
    public readonly attrProductKey: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property nodeType: The node type of the product. Values:
     * 0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
     * either directly or as a sub-device of a gateway.
     * 1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
     * the topological relationships with sub-devices, and synchronize the topological relationships
     * to IoT Platform.
     */
    public nodeType: number;

    /**
     * @Property productName: The name of the product. A product name can be 4 to 30 characters in length and can
     * contain Chinese characters, English letters, digits, and underscores (_).
     * Note A product name must be unique in an account.
     */
    public productName: string;

    /**
     * @Property aliyunCommodityCode: The edition of the product that you want to create. There are two options:
     * iothub_senior: Pro Edition.
     * iothub: Basic Edition.
     * If you do not input this parameter, the default value is used, which is iothub (Basic
     * Edition).
     */
    public aliyunCommodityCode: string | undefined;

    /**
     * @Property authType: Authentication device to access the Internet of Things platform under the product. Optional:
     * secret: using a device key for device authentication.
     * Details can be found MQTT-TCP connection communication.
     * id2: Use things device authentication ID.
     * x509: X.509 certificates using the device for device authentication.
     * The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
     * If this parameter is passed, the default value is secret.
     */
    public authType: string | undefined;

    /**
     * @Property categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
     * Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
     */
    public categoryKey: string | undefined;

    /**
     * @Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
     * This parameter is only available and required when you create a Pro Edition product.
     * Options:
     * 0: Do not parse/Custom.
     * 1: Alink JSON.
     */
    public dataFormat: number | undefined;

    /**
     * @Property description: A description of the product. The description can be a maximum of 100 characters in
     * length.
     */
    public description: string | undefined;

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
    public iotInstanceId: string | undefined;

    /**
     * @Property joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
     * Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
     * If you do not LoRaWAN network credentials, visit the network management platform to create things together.
     */
    public joinPermissionId: string | undefined;

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
    public netType: string | undefined;

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
    public protocolType: string | undefined;

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
    public resourceGroupId: string | undefined;

    /**
     * Create a new `ALIYUN::IOT::Product`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProductProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProduct.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIotInstanceId = ros.Token.asString(this.getAtt('IotInstanceId'));
        this.attrProductKey = ros.Token.asString(this.getAtt('ProductKey'));

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
 * Properties for defining a `ALIYUN::IOT::ProductTopic`
 */
export interface RosProductTopicProps {

    /**
     * @Property operation: Operation permissions of devices on the topic category. Value options:
     * SUB: Subscribe. Devices can subscribe to the topics of this category.
     * PUB: Publish. Devices can publish messages using the topics of this category.
     * ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
     */
    readonly operation: string;

    /**
     * @Property productKey: The unique identifier of the product for which you want to create a topic category.
     */
    readonly productKey: string;

    /**
     * @Property topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
     * Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
     */
    readonly topicShortName: string;

    /**
     * @Property desc: The description of the topic category. You can enter a description with up to 100 characters.
     */
    readonly desc?: string;

    /**
     * @Property iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
     */
    readonly iotInstanceId?: string;
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
      Operation: ros.stringToRosTemplate(properties.operation),
      ProductKey: ros.stringToRosTemplate(properties.productKey),
      TopicShortName: ros.stringToRosTemplate(properties.topicShortName),
      Desc: ros.stringToRosTemplate(properties.desc),
      IotInstanceId: ros.stringToRosTemplate(properties.iotInstanceId),
    };
}

/**
 * A ROS template type:  `ALIYUN::IOT::ProductTopic`
 */
export class RosProductTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::ProductTopic";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute TopicId: Topic ID
     */
    public readonly attrTopicId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property operation: Operation permissions of devices on the topic category. Value options:
     * SUB: Subscribe. Devices can subscribe to the topics of this category.
     * PUB: Publish. Devices can publish messages using the topics of this category.
     * ALL: Subscribe and publish. Devices can subscribe to and publish messages to the topics of this category.
     */
    public operation: string;

    /**
     * @Property productKey: The unique identifier of the product for which you want to create a topic category.
     */
    public productKey: string;

    /**
     * @Property topicShortName: The custom category hierarchy in the topic category. By default, a topic category contains two system defined category hierarchies: productKey and ${deviceName}. Forward slashes (/) are used to delimit the topic hierarchies. The format of a topic category is productKey/${deviceName}/topicShortName.
     * Note The name of each category hierarchy can contain English letters, digits, and underscores (_), and cannot be empty.
     */
    public topicShortName: string;

    /**
     * @Property desc: The description of the topic category. You can enter a description with up to 100 characters.
     */
    public desc: string | undefined;

    /**
     * @Property iotInstanceId: Instance ID you purchased. Public instances do not need pass this property.
     */
    public iotInstanceId: string | undefined;

    /**
     * Create a new `ALIYUN::IOT::ProductTopic`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProductTopicProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProductTopic.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTopicId = ros.Token.asString(this.getAtt('TopicId'));

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
 * Properties for defining a `ALIYUN::IOT::Rule`
 */
export interface RosRuleProps {

    /**
     * @Property name: The name of the rule. The name must be 1 to 30 characters in length and can contain English letters, digits, underscores (_), and hyphens (-). Chinese language is also supported. Each Chinese symbol occupies 2 characters.
     */
    readonly name: string;

    /**
     * @Property dataType: The format of the data to be processed by the rule. You must specify the format of device data to be processed for this parameter. Valid values:  JSON: JSON data BINARY: binary data
     */
    readonly dataType?: string;

    /**
     * @Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
     */
    readonly iotInstanceId?: string;

    /**
     * @Property productKey: The ProductKey of the product to which the rule applies.
     */
    readonly productKey?: string;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource group information in the Resource Management console.  If you do not specify this parameter, the rule is assigned to the default resource group.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property ruleDesc: The description of the rule. The description can be up to 100 characters in length. Each Chinese symbol occupies 1 characters.
     */
    readonly ruleDesc?: string;

    /**
     * @Property select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
     */
    readonly select?: string;

    /**
     * @Property shortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.  Basic communication topics or Thing Specification Language (TSL)-based communication topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the product. Valid values of topicShortName: /thing/event/property/post: submits the property data of a device. /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL. /thing/lifecycle: submits device lifecycle changes. /thing/downlink/reply/message: sends a response to a request from IoT Platform. /thing/list/found: submits the data when a gateway detects a new sub-device. /thing/topo/lifecycle: submits device topology changes. /thing/event/property/history/post: submits historical property data of a device. /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL. /ota/upgrade: submits OTA update status. /ota/version/post: submits OTA module versions. /thing/deviceinfo/update: submits device tag changes. /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.  ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic. ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.  Custom topics. Example:${deviceName}/user/get.  You can call theQueryProductTopicoperation to view all custom topics of the product.  When you specify a custom topic, you can use the + and # wildcards.  You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the product. You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that follow/user.  For more information about how to use wildcards, see Wildcards in topics.  Topic that is used to submit device status changes: ${deviceName}.  You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
     */
    readonly shortTopic?: string;

    /**
     * @Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic. 1: The topic is a custom topic. 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
     */
    readonly topicType?: number;

    /**
     * @Property where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
     */
    readonly where?: string;
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
    errors.collect(ros.propertyValidator('shortTopic', ros.validateString)(properties.shortTopic));
    errors.collect(ros.propertyValidator('select', ros.validateString)(properties.select));
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
      Name: ros.stringToRosTemplate(properties.name),
      DataType: ros.stringToRosTemplate(properties.dataType),
      IotInstanceId: ros.stringToRosTemplate(properties.iotInstanceId),
      ProductKey: ros.stringToRosTemplate(properties.productKey),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      RuleDesc: ros.stringToRosTemplate(properties.ruleDesc),
      Select: ros.stringToRosTemplate(properties.select),
      ShortTopic: ros.stringToRosTemplate(properties.shortTopic),
      TopicType: ros.numberToRosTemplate(properties.topicType),
      Where: ros.stringToRosTemplate(properties.where),
    };
}

/**
 * A ROS template type:  `ALIYUN::IOT::Rule`
 */
export class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IOT::Rule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DataType: The format of the data to be processed by the rule. You must specify the format of device data to be processed for this parameter. Valid values:  JSON: JSON data BINARY: binary data
     */
    public readonly attrDataType: any;

    /**
     * @Attribute IotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
     */
    public readonly attrIotInstanceId: any;

    /**
     * @Attribute Name: The name of the rule. The name must be 1 to 30 characters in length and can contain English letters, digits, underscores (_), and hyphens (-). Chinese language is also supported. Each Chinese symbol occupies 2 characters.
     */
    public readonly attrName: any;

    /**
     * @Attribute ProductKey: The ProductKey of the product to which the rule applies.
     */
    public readonly attrProductKey: any;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource group information in the Resource Management console.  If you do not specify this parameter, the rule is assigned to the default resource group.
     */
    public readonly attrResourceGroupId: any;

    /**
     * @Attribute RuleDesc: The description of the rule. The description can be up to 100 characters in length. Each Chinese symbol occupies 1 characters.
     */
    public readonly attrRuleDesc: any;

    /**
     * @Attribute RuleId: The ID of the rule. The rule ID is generated by the rules engine if the call was successful.
     */
    public readonly attrRuleId: any;

    /**
     * @Attribute Select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
     */
    public readonly attrSelect: any;

    /**
     * @Attribute ShortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.  Basic communication topics or Thing Specification Language (TSL)-based communication topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the product. Valid values of topicShortName: /thing/event/property/post: submits the property data of a device. /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL. /thing/lifecycle: submits device lifecycle changes. /thing/downlink/reply/message: sends a response to a request from IoT Platform. /thing/list/found: submits the data when a gateway detects a new sub-device. /thing/topo/lifecycle: submits device topology changes. /thing/event/property/history/post: submits historical property data of a device. /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL. /ota/upgrade: submits OTA update status. /ota/version/post: submits OTA module versions. /thing/deviceinfo/update: submits device tag changes. /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.  ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic. ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.  Custom topics. Example:${deviceName}/user/get.  You can call theQueryProductTopicoperation to view all custom topics of the product.  When you specify a custom topic, you can use the + and # wildcards.  You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the product. You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that follow/user.  For more information about how to use wildcards, see Wildcards in topics.  Topic that is used to submit device status changes: ${deviceName}.  You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
     */
    public readonly attrShortTopic: any;

    /**
     * @Attribute TopicType: 0: The topic is a basic communication topic or TSL-based communication topic. 1: The topic is a custom topic. 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
     */
    public readonly attrTopicType: any;

    /**
     * @Attribute Where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
     */
    public readonly attrWhere: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the rule. The name must be 1 to 30 characters in length and can contain English letters, digits, underscores (_), and hyphens (-). Chinese language is also supported. Each Chinese symbol occupies 2 characters.
     */
    public name: string;

    /**
     * @Property dataType: The format of the data to be processed by the rule. You must specify the format of device data to be processed for this parameter. Valid values:  JSON: JSON data BINARY: binary data
     */
    public dataType: string | undefined;

    /**
     * @Property iotInstanceId: The ID of the instance. This parameter is not required for public instances. However, the parameter is required for the instances that you have purchased.
     */
    public iotInstanceId: string | undefined;

    /**
     * @Property productKey: The ProductKey of the product to which the rule applies.
     */
    public productKey: string | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource group information in the Resource Management console.  If you do not specify this parameter, the rule is assigned to the default resource group.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property ruleDesc: The description of the rule. The description can be up to 100 characters in length. Each Chinese symbol occupies 1 characters.
     */
    public ruleDesc: string | undefined;

    /**
     * @Property select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
     */
    public select: string | undefined;

    /**
     * @Property shortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.  Basic communication topics or Thing Specification Language (TSL)-based communication topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the product. Valid values of topicShortName: /thing/event/property/post: submits the property data of a device. /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL. /thing/lifecycle: submits device lifecycle changes. /thing/downlink/reply/message: sends a response to a request from IoT Platform. /thing/list/found: submits the data when a gateway detects a new sub-device. /thing/topo/lifecycle: submits device topology changes. /thing/event/property/history/post: submits historical property data of a device. /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL. /ota/upgrade: submits OTA update status. /ota/version/post: submits OTA module versions. /thing/deviceinfo/update: submits device tag changes. /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.  ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic. ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.  Custom topics. Example:${deviceName}/user/get.  You can call theQueryProductTopicoperation to view all custom topics of the product.  When you specify a custom topic, you can use the + and # wildcards.  You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the product. You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that follow/user.  For more information about how to use wildcards, see Wildcards in topics.  Topic that is used to submit device status changes: ${deviceName}.  You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
     */
    public shortTopic: string | undefined;

    /**
     * @Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic. 1: The topic is a custom topic. 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
     */
    public topicType: number | undefined;

    /**
     * @Property where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
     */
    public where: string | undefined;

    /**
     * Create a new `ALIYUN::IOT::Rule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDataType = ros.Token.asString(this.getAtt('DataType'));
        this.attrIotInstanceId = ros.Token.asString(this.getAtt('IotInstanceId'));
        this.attrName = ros.Token.asString(this.getAtt('Name'));
        this.attrProductKey = ros.Token.asString(this.getAtt('ProductKey'));
        this.attrResourceGroupId = ros.Token.asString(this.getAtt('ResourceGroupId'));
        this.attrRuleDesc = ros.Token.asString(this.getAtt('RuleDesc'));
        this.attrRuleId = ros.Token.asString(this.getAtt('RuleId'));
        this.attrSelect = ros.Token.asString(this.getAtt('Select'));
        this.attrShortTopic = ros.Token.asString(this.getAtt('ShortTopic'));
        this.attrTopicType = ros.Token.asString(this.getAtt('TopicType'));
        this.attrWhere = ros.Token.asString(this.getAtt('Where'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.dataType = props.dataType;
        this.iotInstanceId = props.iotInstanceId;
        this.productKey = props.productKey;
        this.resourceGroupId = props.resourceGroupId;
        this.ruleDesc = props.ruleDesc;
        this.select = props.select;
        this.shortTopic = props.shortTopic;
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
            ruleDesc: this.ruleDesc,
            select: this.select,
            shortTopic: this.shortTopic,
            topicType: this.topicType,
            where: this.where,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
