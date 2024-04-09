import * as ros from '@alicloud/ros-cdk-core';
import { RosSmartAccessGateway } from './sag.generated';
export { RosSmartAccessGateway as SmartAccessGatewayProperty };
/**
 * Properties for defining a `SmartAccessGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgateway
 */
export interface SmartAccessGatewayProps {
    /**
     * Property buyerMessage: The remarks left by the buyer.
     */
    readonly buyerMessage: string | ros.IResolvable;
    /**
     * Property chargeType: The billing method of the SAG instance.
     * Set the value to PREPAY, which specifies the subscription billing method.
     */
    readonly chargeType: string | ros.IResolvable;
    /**
     * Property hardWareSpec: The type of the SAG instance. Valid values:
     * sag-100wm
     * sag-1000
     * sag-vcpe
     */
    readonly hardWareSpec: string | ros.IResolvable;
    /**
     * Property haType: The deployment mode. Valid values:
     * no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
     * cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
     * device and the other serves as a standby device. Only the active device is connected
     * to Alibaba Cloud. If the active device is not working as expected, you must manually
     * perform a switchover.
     * warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
     * Alibaba Cloud. If an active device is not working as expected, a failover is automatically
     * performed.
     * Note If you want to create an SAG vCPE instance, set the value to warm_backup.
     */
    readonly haType: string | ros.IResolvable;
    /**
     * Property maxBandWidth: The bandwidth of the SAG instance.
     * If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit\/s.
     * If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit\/s.
     * If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit\/s.
     */
    readonly maxBandWidth: number | ros.IResolvable;
    /**
     * Property period: The subscription period of the SAG instance. Unit: months.
     * Valid values: 1 to 9, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;
    /**
     * Property receiverAddress: The detailed address of the recipient.
     */
    readonly receiverAddress: string | ros.IResolvable;
    /**
     * Property receiverCity: The city of the recipient address.
     */
    readonly receiverCity: string | ros.IResolvable;
    /**
     * Property receiverCountry: The country of the recipient address.
     */
    readonly receiverCountry: string | ros.IResolvable;
    /**
     * Property receiverDistrict: The district of the recipient address.
     */
    readonly receiverDistrict: string | ros.IResolvable;
    /**
     * Property receiverEmail: The email address of the recipient.
     */
    readonly receiverEmail: string | ros.IResolvable;
    /**
     * Property receiverMobile: The mobile phone number of the recipient.
     */
    readonly receiverMobile: string | ros.IResolvable;
    /**
     * Property receiverName: The name of the recipient.
     */
    readonly receiverName: string | ros.IResolvable;
    /**
     * Property receiverState: The province of the recipient address.
     */
    readonly receiverState: string | ros.IResolvable;
    /**
     * Property receiverTown: The town of the recipient address.
     */
    readonly receiverTown: string | ros.IResolvable;
    /**
     * Property receiverZip: The postcode of the recipient address.
     */
    readonly receiverZip: string | ros.IResolvable;
    /**
     * Property activate: Activate SAG or not. Default is False
     */
    readonly activate?: boolean | ros.IResolvable;
    /**
     * Property alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
     * true: yes
     * false (default): no
     */
    readonly alreadyHaveSag?: boolean | ros.IResolvable;
    /**
     * Property autoPay: Specifies whether to enable auto-payment for the instance. Valid values:
     * true: yes
     * false: no
     * If you set the parameter to false, go to Billing Management to complete the payment
     * after you call this operation. After you complete the payment, the instance can be
     * created.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * Property cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
     * do not overlap with each other.
     * If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
     * the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
     * Protocol (DHCP) enabled.
     */
    readonly cidrBlock?: string | ros.IResolvable;
    /**
     * Property description: The description of the SAG instance.
     * The description must be 2 to 256 characters in length, and can contain digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property name: The name of the SAG instance.
     * The name must be 2 to 128 characters in length and can contain digits, periods (.),
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property receiverPhone: The landline phone number of the recipient.
     */
    readonly receiverPhone?: string | ros.IResolvable;
    /**
     * Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
     * static: static routing.
     * dynamic: dynamic routing.
     */
    readonly routingStrategy?: string | ros.IResolvable;
    /**
     * Property securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
     * than zero second.
     * Unit: second.
     */
    readonly securityLockThreshold?: number | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::SmartAccessGateway`, which is used to create a Smart Access Gateway (SAG) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSmartAccessGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgateway
 */
export declare class SmartAccessGateway extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SmartAccessGatewayProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute OrderId: The ID of the order.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * Attribute SmartAGId: The ID of the SAG instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SmartAccessGatewayProps, enableResourcePropertyConstraint?: boolean);
}
