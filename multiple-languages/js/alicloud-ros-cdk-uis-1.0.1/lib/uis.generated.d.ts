import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::UIS::Uis`
 */
export interface RosUisProps {
    /**
     * @Property description: Description of the instance.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the instance.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::UIS::Uis`
 */
export declare class RosUis extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::UIS::Uis";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClientInfoDB: The client info DB.
     */
    readonly attrClientInfoDb: ros.IResolvable;
    /**
     * @Attribute ClientInfoDBAccount: The client info DB account.
     */
    readonly attrClientInfoDbAccount: ros.IResolvable;
    /**
     * @Attribute ClientInfoDBPassword: The client info DB password.
     */
    readonly attrClientInfoDbPassword: ros.IResolvable;
    /**
     * @Attribute SslClientCertUrl: The ssl client cert url.
     */
    readonly attrSslClientCertUrl: ros.IResolvable;
    /**
     * @Attribute UisId: The ID of the instance.
     */
    readonly attrUisId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property description: Description of the instance.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the instance.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::UIS::Uis`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUisProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::UIS::UisConnection`
 */
export interface RosUisConnectionProps {
    /**
     * @Property uisNodeId: Node instance ID.
     */
    readonly uisNodeId: string | ros.IResolvable;
    /**
     * @Property uisProtocol: The protocol name used by the software and server. The default value is SSLVPN.
     */
    readonly uisProtocol: string | ros.IResolvable;
    /**
     * @Property description: A description of the tunnel connection.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property greConfig: The config for GRE. Item can be overwritten, but removed.
     */
    readonly greConfig?: Array<RosUisConnection.GreConfigProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property name: The name of the tunnel connection.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property sslConfig: The config for SSLVPN.
     */
    readonly sslConfig?: RosUisConnection.SslConfigProperty | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::UIS::UisConnection`
 */
export declare class RosUisConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::UIS::UisConnection";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute UisConnectionId: ID of the VPN server. This ID does not distinguish between protocols.
     */
    readonly attrUisConnectionId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property uisNodeId: Node instance ID.
     */
    uisNodeId: string | ros.IResolvable;
    /**
     * @Property uisProtocol: The protocol name used by the software and server. The default value is SSLVPN.
     */
    uisProtocol: string | ros.IResolvable;
    /**
     * @Property description: A description of the tunnel connection.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property greConfig: The config for GRE. Item can be overwritten, but removed.
     */
    greConfig: Array<RosUisConnection.GreConfigProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the tunnel connection.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property sslConfig: The config for SSLVPN.
     */
    sslConfig: RosUisConnection.SslConfigProperty | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::UIS::UisConnection`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUisConnectionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosUisConnection {
    /**
     * @stability external
     */
    interface GreConfigProperty {
        /**
         * @Property customerTunnelIp: The GRE Tunnel IP for Customer.
         */
        readonly customerTunnelIp: string | ros.IResolvable;
        /**
         * @Property localTunnelIp: The GRE Tunnel IP for UisNode.
         */
        readonly localTunnelIp: string | ros.IResolvable;
        /**
         * @Property localIp: UisNode IP.
         */
        readonly localIp: string | ros.IResolvable;
        /**
         * @Property customerIp: The customer's public IP.
         */
        readonly customerIp: string | ros.IResolvable;
        /**
         * @Property customerSubnet: The CIDR of customer's GRE private network.
         */
        readonly customerSubnet: string | ros.IResolvable;
    }
}
export declare namespace RosUisConnection {
    /**
     * @stability external
     */
    interface SslConfigProperty {
        /**
         * @Property port: The port used by the SSL-VPN server. The default value is 1194. The port range us 1025-10000, and avoid the following well-known ports [22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500]
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property cipher: The encryption algorithm used by SSL-VPN. Value: AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none.
         */
        readonly cipher: string | ros.IResolvable;
        /**
         * @Property protocol: The protocol used by the SSL-VPN server. Value: UDP (default) | TCP
         */
        readonly protocol: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::UIS::UisNode`
 */
export interface RosUisNodeProps {
    /**
     * @Property ipAddrsNum: The number of IPs available at the boarding point. The default is 2, the maximum is 10, if you need more quota, please submit the work order.
     */
    readonly ipAddrsNum: number | ros.IResolvable;
    /**
     * @Property uisId: The instance ID to which the boarding point belongs.
     */
    readonly uisId: string | ros.IResolvable;
    /**
     * @Property uisNodeAreaId: Specifies the territory ID of the node. You can query the supported territories through the DescribeRegions interface.
     */
    readonly uisNodeAreaId: string | ros.IResolvable;
    /**
     * @Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
     * If you do not specify a bandwidth, the default value is 20Mbps.
     */
    readonly uisNodeBandwidth: number | ros.IResolvable;
    /**
     * @Property description: Description of the instance of the boarding point.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property name: The name of the instance of the boarding point.
     */
    readonly name?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::UIS::UisNode`
 */
export declare class RosUisNode extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::UIS::UisNode";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute UisNodeActiveIps: The node active IP list.
     */
    readonly attrUisNodeActiveIps: ros.IResolvable;
    /**
     * @Attribute UisNodeId: The node ID of the instance.
     */
    readonly attrUisNodeId: ros.IResolvable;
    /**
     * @Attribute UisNodeIps: The node IP list.
     */
    readonly attrUisNodeIps: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ipAddrsNum: The number of IPs available at the boarding point. The default is 2, the maximum is 10, if you need more quota, please submit the work order.
     */
    ipAddrsNum: number | ros.IResolvable;
    /**
     * @Property uisId: The instance ID to which the boarding point belongs.
     */
    uisId: string | ros.IResolvable;
    /**
     * @Property uisNodeAreaId: Specifies the territory ID of the node. You can query the supported territories through the DescribeRegions interface.
     */
    uisNodeAreaId: string | ros.IResolvable;
    /**
     * @Property uisNodeBandwidth: Specify the bandwidth bandwidth value for this pick-up point, even if the Internet bandwidth.
     * If you do not specify a bandwidth, the default value is 20Mbps.
     */
    uisNodeBandwidth: number | ros.IResolvable;
    /**
     * @Property description: Description of the instance of the boarding point.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the instance of the boarding point.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::UIS::UisNode`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUisNodeProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
