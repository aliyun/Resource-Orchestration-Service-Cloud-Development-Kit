import * as ros from '@ros-cdk/core';
import { RosSslVpnServer } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSslVpnServer as SslVpnServerProperty };

/**
 * Properties for defining a `ALIYUN::VPC::SslVpnServer`
 */
export interface SslVpnServerProps {

    /**
     * @Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
     * When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
     * The network segment cannot conflict with the LocalSubnet address segment.
     */
    readonly clientIpPool: string;

    /**
     * @Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
     * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
     */
    readonly localSubnet: string;

    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    readonly vpnGatewayId: string;

    /**
     * @Property cipher: The encryption algorithm used by SSL-VPN. Value:
     * AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
     */
    readonly cipher?: string;

    /**
     * @Property compress: Whether it is compressed.
     */
    readonly compress?: boolean | ros.IResolvable;

    /**
     * @Property name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
     * But it can't start with http:// or https://.
     */
    readonly name?: string;

    /**
     * @Property port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
     * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
     */
    readonly port?: number;

    /**
     * @Property proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
     */
    readonly proto?: string;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::SslVpnServer`
 */
export class SslVpnServer extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute SslVpnServerId: ID of the SSL-VPN server.
     */
    public readonly attrSslVpnServerId: any;

    /**
     * Create a new `ALIYUN::VPC::SslVpnServer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SslVpnServerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSslVpnServer = new RosSslVpnServer(this, id,  {
            compress: props.compress ? props.compress : false,
            localSubnet: props.localSubnet,
            clientIpPool: props.clientIpPool,
            proto: props.proto ? props.proto : 'UDP',
            vpnGatewayId: props.vpnGatewayId,
            port: props.port ? props.port : 1194,
            cipher: props.cipher ? props.cipher : 'AES-128-CBC',
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSslVpnServer;
        this.attrSslVpnServerId = rosSslVpnServer.attrSslVpnServerId;
    }
}
