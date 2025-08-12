import * as ros from '@alicloud/ros-cdk-core';
import { RosProduct } from './iot.generated';
export { RosProduct as ProductProperty };
/**
 * Properties for defining a `Product`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-product
 */
export interface ProductProps {
    /**
     * Property nodeType: The node type of the product. Values:
     * 0: Device. A device cannot be mounted with sub-devices. It can connect to IoT Platform
     * either directly or as a sub-device of a gateway.
     * 1: Gateway. A gateway can be mounted with sub-devices. It can manage sub-devices, maintain
     * the topological relationships with sub-devices, and synchronize the topological relationships
     * to IoT Platform.
     */
    readonly nodeType: number | ros.IResolvable;
    /**
     * Property productName: The name of the product. A product name can be 4 to 30 characters in length and can
     * contain Chinese characters, English letters, digits, and underscores (_).
     * Note A product name must be unique in an account.
     */
    readonly productName: string | ros.IResolvable;
    /**
     * Property aliyunCommodityCode: The edition of the product that you want to create. There are two options:
     * iothub_senior: Pro Edition.
     * iothub: Basic Edition.
     * If you do not input this parameter, the default value is used, which is iothub (Basic
     * Edition).
     */
    readonly aliyunCommodityCode?: string | ros.IResolvable;
    /**
     * Property authType: Authentication device to access the Internet of Things platform under the product. Optional:
     * secret: using a device key for device authentication.
     * Details can be found MQTT-TCP connection communication.
     * id2: Use things device authentication ID.
     * x509: X.509 certificates using the device for device authentication.
     * The use of X.509 certificates device side configuration instructions, see Using X.509 certificate authentication.
     * If this parameter is passed, the default value is secret.
     */
    readonly authType?: string | ros.IResolvable;
    /**
     * Property categoryKey: Identifier Product category. If you pass this parameter, the product will be created using the object model specified category; not passed, the standard model is not used in any category.
     * Call ListThingTemplates, view of things platform predefined category information from the returned results, get the value of CategoryKey.
     */
    readonly categoryKey?: string | ros.IResolvable;
    /**
     * Property dataFormat: You must specify this parameter if the value of AliyunCommodityCode is iothub_senior.
     * This parameter is only available and required when you create a Pro Edition product.
     * Options:
     * 0: Do not parse\/Custom.
     * 1: Alink JSON.
     */
    readonly dataFormat?: number | ros.IResolvable;
    /**
     * Property description: A description of the product. The description can be a maximum of 100 characters in
     * length.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property id2: Whether ID2 certification.
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
     * Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    readonly iotInstanceId?: string | ros.IResolvable;
    /**
     * Property joinPermissionId: LoRaWAN network credential ID. When networking mode NetType chosen LORA, the necessary parameters.
     * Please call QueryLoRaJoinPermissions query JoinPermissionId network credentials LoRaWAN under your account.
     * If you do not LoRaWAN network credentials, visit the network management platform to create things together.
     */
    readonly joinPermissionId?: string | ros.IResolvable;
    /**
     * Property netType: Networking mode.
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
     * Property protocolType: The protocol that devices of this product use to connect to gateways.
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
     * Property publishAuto: Whether to automatically model publication after the product is created.
     * true: publishing.
     * false: not released.
     * This parameter is not passed, the default value true.
     */
    readonly publishAuto?: boolean | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group ID (group ID to view the resource in the resource management console), specify the product is classified as a resource group.
     * If this parameter is passed, the product will be classified as a default resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `Product`.
 */
export interface IProduct extends ros.IResource {
    readonly props: ProductProps;
    /**
     * Attribute IotInstanceId: IOT instance ID.
     */
    readonly attrIotInstanceId: ros.IResolvable | string;
    /**
     * Attribute ProductKey: The globally unique identifier of the product issued by IoT Platform.
     */
    readonly attrProductKey: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::IOT::Product`, which is used to create a product.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProduct`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-product
 */
export declare class Product extends ros.Resource implements IProduct {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ProductProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute IotInstanceId: IOT instance ID.
     */
    readonly attrIotInstanceId: ros.IResolvable | string;
    /**
     * Attribute ProductKey: The globally unique identifier of the product issued by IoT Platform.
     */
    readonly attrProductKey: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProductProps, enableResourcePropertyConstraint?: boolean);
}
