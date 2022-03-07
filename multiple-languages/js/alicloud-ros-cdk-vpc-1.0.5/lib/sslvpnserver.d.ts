import * as ros from '@alicloud/ros-cdk-core';
import { RosSslVpnServer } from './vpc.generated';
export { RosSslVpnServer as SslVpnServerProperty };
/**
 * Properties for defining a `ALIYUN::VPC::SslVpnServer`
 */
export interface SslVpnServerProps {
    /**
     * Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
     * When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
     * The network segment cannot conflict with the LocalSubnet address segment.
     */
    readonly clientIpPool: string | ros.IResolvable;
    /**
     * Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
     * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
     */
    readonly localSubnet: string | ros.IResolvable;
    /**
     * Property vpnGatewayId: ID of the VPN gateway.
     */
    readonly vpnGatewayId: string | ros.IResolvable;
    /**
     * Property cipher: The encryption algorithm used by SSL-VPN. Value:
     * AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
     */
    readonly cipher?: string | ros.IResolvable;
    /**
     * Property compress: Whether it is compressed.
     */
    readonly compress?: boolean | ros.IResolvable;
    /**
     * Property name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
     * But it can't start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
     * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
     */
    readonly port?: number | ros.IResolvable;
    /**
     * Property proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
     */
    readonly proto?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::SslVpnServer`
 */
export declare class SslVpnServer extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SslVpnServerId: ID of the SSL-VPN server.
     */
    readonly attrSslVpnServerId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::SslVpnServer`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SslVpnServerProps, enableResourcePropertyConstraint?: boolean);
}
