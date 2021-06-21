import * as ros from '@alicloud/ros-cdk-core';
import { RosVpnGateway } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpnGateway as VpnGatewayProperty };

/**
 * Properties for defining a `ALIYUN::VPC::VpnGateway`
 */
export interface VpnGatewayProps {

    /**
     * Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
     * Value: 5|10|20|50|100|200.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * Property vpcId: VPC ID to which the VPN gateway belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
     * True: Automatically pays the bill for the VPN gateway.
     * False (default): Does not automatically pay the bill for the VPN gateway.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property description: Description of the VPN gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
     * True (default): Enables the IPsec-VPN feature.
     * False: The IPsec-VPN function is not enabled.
     */
    readonly enableIpsec?: boolean | ros.IResolvable;

    /**
     * Property enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
     * True: Enable SSL-VPN.
     * False (default): Does not enable SSL-VPN.
     */
    readonly enableSsl?: boolean | ros.IResolvable;

    /**
     * Property instanceChargeType: Accounting type of the VPN gateway, the value is:
     * PREPAY, POSTPAY
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
     * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property period: Purchase time, value: 1~9|12|24|36.
     * When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property sslConnections: The maximum number of clients allowed to connect at the same time.
     */
    readonly sslConnections?: number | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVpnGateway.TagsProperty[];

    /**
     * Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::VpnGateway`
 */
export class VpnGateway extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute InternetIp: The public IP address of the VPN gateway.
     */
    public readonly attrInternetIp: ros.IResolvable;

    /**
     * Attribute OrderId: The order ID.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Attribute Spec: The specification of the VPN gateway.
     */
    public readonly attrSpec: ros.IResolvable;

    /**
     * Attribute SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
     */
    public readonly attrSslMaxConnections: ros.IResolvable;

    /**
     * Attribute VpnGatewayId: ID of the VPN gateway.
     */
    public readonly attrVpnGatewayId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::VpnGateway`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpnGatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVpnGateway = new RosVpnGateway(this, id,  {
            enableIpsec: props.enableIpsec === undefined || props.enableIpsec === null ? true : props.enableIpsec,
            enableSsl: props.enableSsl === undefined || props.enableSsl === null ? false : props.enableSsl,
            sslConnections: props.sslConnections,
            description: props.description,
            vpcId: props.vpcId,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PREPAY' : props.instanceChargeType,
            bandwidth: props.bandwidth,
            vSwitchId: props.vSwitchId,
            period: props.period,
            autoPay: props.autoPay === undefined || props.autoPay === null ? false : props.autoPay,
            tags: props.tags,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpnGateway;
        this.attrInternetIp = rosVpnGateway.attrInternetIp;
        this.attrOrderId = rosVpnGateway.attrOrderId;
        this.attrSpec = rosVpnGateway.attrSpec;
        this.attrSslMaxConnections = rosVpnGateway.attrSslMaxConnections;
        this.attrVpnGatewayId = rosVpnGateway.attrVpnGatewayId;
    }
}
