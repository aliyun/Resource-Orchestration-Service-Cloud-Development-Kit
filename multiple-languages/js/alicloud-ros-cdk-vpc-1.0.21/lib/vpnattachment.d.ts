import * as ros from '@alicloud/ros-cdk-core';
import { RosVpnAttachment } from './vpc.generated';
export { RosVpnAttachment as VpnAttachmentProperty };
/**
 * Properties for defining a `ALIYUN::VPC::VpnAttachment`
 */
export interface VpnAttachmentProps {
    /**
     * Property customerGatewayId: The ID of the user gateway.
     */
    readonly customerGatewayId: string | ros.IResolvable;
    /**
     * Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
     */
    readonly localSubnet: string | ros.IResolvable;
    /**
     * Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
     */
    readonly remoteSubnet: string | ros.IResolvable;
    /**
     * Property autoConfigRoute: Specifies whether to automatically configure routes. Valid values:
     * true (default)
     * false
     */
    readonly autoConfigRoute?: boolean | ros.IResolvable;
    /**
     * Property bgpConfig: The Border Gateway Protocol (BGP) configuration.
     * This parameter is required when the VPN gateway has dynamic BGP enabled.
     * Before you configure BGP, we recommend that you learn about how BGP works and its limits. For more information, see VPN Gateway supports BGP dynamic routing.
     * We recommend that you use a private ASN to establish a connection with Alibaba Cloud over BGP.
     * Refer to the relevant documentation for the private ASN range.
     */
    readonly bgpConfig?: RosVpnAttachment.BgpConfigProperty | ros.IResolvable;
    /**
     * Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
     * True: Negotiate immediately after the configuration is complete.
     * False (default): Negotiate when traffic enters.
     */
    readonly effectImmediately?: boolean | ros.IResolvable;
    /**
     * Property enableDpd: Specifies whether to enable the dead peer detection (DPD) feature. Valid values:
     * true (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no response is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
     * false: disables DPD. The IPsec initiator does not send DPD packets.
     */
    readonly enableDpd?: boolean | ros.IResolvable;
    /**
     * Property enableNatTraversal: Specifies whether to enable NAT traversal. Valid values:
     * true (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
     * false
     */
    readonly enableNatTraversal?: boolean | ros.IResolvable;
    /**
     * Property healthCheckConfig: Whether to enable the health check configuration.
     */
    readonly healthCheckConfig?: RosVpnAttachment.HealthCheckConfigProperty | ros.IResolvable;
    /**
     * Property ikeConfig: Configuration information for the first phase of negotiation.
     */
    readonly ikeConfig?: RosVpnAttachment.IkeConfigProperty | ros.IResolvable;
    /**
     * Property ipsecConfig: Configuration information for the second phase negotiation.
     */
    readonly ipsecConfig?: RosVpnAttachment.IpsecConfigProperty | ros.IResolvable;
    /**
     * Property name: The name of the IPsec connection.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property networkType: The network type of the IPsec connection. Value: public|private.
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * Property remoteCaCert: The peer CA certificate when a ShangMi (SM) VPN gateway is used to establish the IPsec-VPN connection.
     * This parameter is required when an SM VPN gateway is used to establish the IPsec-VPN connection.
     * You can ignore this parameter when a standard VPN gateway is used to create the IPsec-VPN connection.
     */
    readonly remoteCaCert?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::VpnAttachment`
 */
export declare class VpnAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InternetIp: The gateway IP address of the IPsec connection.
     */
    readonly attrInternetIp: ros.IResolvable;
    /**
     * Attribute PeerVpnAttachmentConfig: Peer vpc Attachment config.
     */
    readonly attrPeerVpnAttachmentConfig: ros.IResolvable;
    /**
     * Attribute VpnAttachmentId: ID of the IPsec attachment.
     */
    readonly attrVpnAttachmentId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::VpnAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpnAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
