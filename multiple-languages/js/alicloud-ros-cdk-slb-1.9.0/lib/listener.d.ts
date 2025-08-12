import * as ros from '@alicloud/ros-cdk-core';
import { RosListener } from './slb.generated';
export { RosListener as ListenerProperty };
/**
 * Properties for defining a `Listener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-listener
 */
export interface ListenerProps {
    /**
     * Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * Property listenerPort: Port for front listener. Range from 0 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;
    /**
     * Property loadBalancerId: The id of load balancer to create listener.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
     */
    readonly protocol: string | ros.IResolvable;
    /**
     * Property aclId: The ID of the access control associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    readonly aclId?: string | ros.IResolvable;
    /**
     * Property aclIds: The ID list of the access controls associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.AclIds have higher priority than AclId.
     */
    readonly aclIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property aclStatus: Indicates whether to enable access control.
     * Valid values: on | off. Default value: off
     */
    readonly aclStatus?: string | ros.IResolvable;
    /**
     * Property aclType: The access control type:
     * * white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
     * Enabling a whitelist poses some risks to your services.
     * After a whitelist is enabled, only the IP addresses in the list can access the listener.
     * If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
     * * black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
     * If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.
     *
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    readonly aclType?: string | ros.IResolvable;
    /**
     * Property backendServerPort: Backend server can listen on ports from 0 to 65535.
     */
    readonly backendServerPort?: number | ros.IResolvable;
    /**
     * Property caCertificateId: CA server certificate id, for https listener only.
     */
    readonly caCertificateId?: string | ros.IResolvable;
    /**
     * Property connectionDrain: Whether to enable graceful connection interruption. Value:on: turn on
     * off: Not turned on
     * Note: Only effective TCP listener.
     */
    readonly connectionDrain?: string | ros.IResolvable;
    /**
     * Property connectionDrainTimeout: Set the connection graceful interruption timeout. Unit: seconds. Value range: 10-900.
     * Note: Only effective for TCP listener. When ConnectionDrain is on, this option is required.
     */
    readonly connectionDrainTimeout?: number | ros.IResolvable;
    /**
     * Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (\/), periods (.), and underscores (_). Chinese characters are supported.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property enableHttp2: Specifies whether to use HTTP\/2. It takes effect when Protocol=https. Valid values:
     * on: yes
     * off: no
     */
    readonly enableHttp2?: string | ros.IResolvable;
    /**
     * Property fullNatEnabled: When Full NAT mode is enabled, it can support the backend servers as clients for access. Default value is false.
     * Note: Only effective for TCP or UDP listener.
     */
    readonly fullNatEnabled?: boolean | ros.IResolvable;
    /**
     * Property gzip: Specifies whether to enable Gzip compression to compress specific types of files. Valid values:
     * on (default): yes
     * off: no
     */
    readonly gzip?: string | ros.IResolvable;
    /**
     * Property healthCheck: The properties of health checking setting.
     */
    readonly healthCheck?: RosListener.HealthCheckProperty | ros.IResolvable;
    /**
     * Property httpConfig: Config for http protocol.
     */
    readonly httpConfig?: RosListener.HttpConfigProperty | ros.IResolvable;
    /**
     * Property idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
     */
    readonly idleTimeout?: number | ros.IResolvable;
    /**
     * Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
     */
    readonly masterSlaveServerGroupId?: string | ros.IResolvable;
    /**
     * Property persistence: The properties of persistence.
     */
    readonly persistence?: RosListener.PersistenceProperty | ros.IResolvable;
    /**
     * Property portRange: Port range, only supports TCP or UDP listener. ListenerPort should be 0 when PortRange is specified.
     */
    readonly portRange?: Array<RosListener.PortRangeProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property proxyProtocolV2Enabled: Whether to support carrying the client source address to the backend server through the Proxy Protocol. Value:
     * true: Yes
     * false (default): No
     * Note: Only effective TCP or UDP listener.
     */
    readonly proxyProtocolV2Enabled?: boolean | ros.IResolvable;
    /**
     * Property requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
     */
    readonly requestTimeout?: number | ros.IResolvable;
    /**
     * Property scheduler: The scheduling algorithm. Valid values:
     * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
     * wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
     * rr: Requests are distributed to backend servers in sequence.
     * sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
     * tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
     * Default: wrr
     */
    readonly scheduler?: string | ros.IResolvable;
    /**
     * Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
     */
    readonly serverCertificateId?: string | ros.IResolvable;
    /**
     * Property startListener: Whether start listener after listener created. Default True.
     */
    readonly startListener?: boolean | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosListener.TagsProperty[];
    /**
     * Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy. Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
     */
    readonly tlsCipherPolicy?: string | ros.IResolvable;
    /**
     * Property vServerGroupId: The id of the VServerGroup which use in listener.
     */
    readonly vServerGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `Listener`.
 */
export interface IListener extends ros.IResource {
    readonly props: ListenerProps;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute ListenerPortsAndProtocol: The collection of listener.
     */
    readonly attrListenerPortsAndProtocol: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The id of load balancer
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::Listener`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosListener`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-listener
 */
export declare class Listener extends ros.Resource implements IListener {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ListenerProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute ListenerPortsAndProtocol: The collection of listener.
     */
    readonly attrListenerPortsAndProtocol: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The id of load balancer
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ListenerProps, enableResourcePropertyConstraint?: boolean);
}
