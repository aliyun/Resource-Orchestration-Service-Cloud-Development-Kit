import * as ros from '@alicloud/ros-cdk-core';
import { RosAddressPool } from './dns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAddressPool as AddressPoolProperty };

/**
 * Properties for defining a `AddressPool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
 */
export interface AddressPoolProps {

    /**
     * Property addr: The list of addresses in the address pool.
     */
    readonly addr: Array<RosAddressPool.AddrProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property instanceId: The ID of the GTM instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property lbaStrategy: The load balancing policy. Valid values:
     * - ALL_RR: returns all addresses.
     * - RATIO: returns addresses by weight.
     */
    readonly lbaStrategy: string | ros.IResolvable;

    /**
     * Property name: The name of the address pool.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property type: The type of the address pool. Valid values:
     * - IPV4: IPv4 address
     * - IPV6: IPv6 address
     * - DOMAIN: domain name
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property evaluationCount: The number of times that the system waits for a response from each address before it marks the address as unhealthy.
     */
    readonly evaluationCount?: number | ros.IResolvable;

    /**
     * Property interval: The interval between two consecutive health checks, in seconds.
     */
    readonly interval?: number | ros.IResolvable;

    /**
     * Property ispCityNode: The list of ISP city nodes.
     */
    readonly ispCityNode?: Array<RosAddressPool.IspCityNodeProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property monitorExtendInfo: The extended information. This parameter is a JSON string. The required
     * parameters vary based on the health check protocol:
     * - HTTP and HTTPS:
     * - port: The health check port.
     * - host: The host settings.
     * - path: The URL path.
     * - code: The return code. A response with a status code greater than this value is
     * considered abnormal. Valid values: 400 and 500.
     * - failureRate: The failure rate.
     * - sni: Specifies whether to enable Server Name Indication (SNI). This parameter
     * is available only for the HTTPS protocol.
     * - true: Enable SNI.
     * - Other values: Disable SNI.
     * - nodeType: The type of the health check node when the address pool type is
     * DOMAIN. Valid values:
     * - IPV4
     * - IPV6
     * - PING:
     * - failureRate: The failure rate.
     * - packetNum: The number of ping packets.
     * - packetLossRate: The packet loss rate.
     * - nodeType: The type of the health check node when the address pool type is
     * DOMAIN. Valid values:
     * - IPV4
     * - IPV6
     * - TCP:
     * - port: The health check port.
     * - failureRate: The failure rate.
     * - nodeType: The type of the health check node when the address pool type is
     * DOMAIN. Valid values:
     * - IPV4
     * - IPV6
     */
    readonly monitorExtendInfo?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property monitorStatus: The status of the health check feature. Default value: CLOSE. If you set this
     * parameter to OPEN, the health check configuration is verified. Otherwise, the
     * configuration is ignored.
     * - OPEN: enabled
     * - CLOSE: disabled
     */
    readonly monitorStatus?: string | ros.IResolvable;

    /**
     * Property protocolType: The protocol type.
     */
    readonly protocolType?: string | ros.IResolvable;

    /**
     * Property timeout: The timeout period of a health check, in seconds.
     */
    readonly timeout?: number | ros.IResolvable;
}

/**
 * Represents a `AddressPool`.
 */
export interface IAddressPool extends ros.IResource {
    readonly props: AddressPoolProps;

    /**
     * Attribute AddrPoolId: The ID of the address pool.
     */
    readonly attrAddrPoolId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::AddressPool`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAddressPool`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-addresspool
 */
export class AddressPool extends ros.Resource implements IAddressPool {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AddressPoolProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AddrPoolId: The ID of the address pool.
     */
    public readonly attrAddrPoolId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AddressPoolProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAddressPool = new RosAddressPool(this, id,  {
            ispCityNode: props.ispCityNode,
            type: props.type,
            lbaStrategy: props.lbaStrategy,
            instanceId: props.instanceId,
            protocolType: props.protocolType,
            timeout: props.timeout,
            evaluationCount: props.evaluationCount,
            monitorExtendInfo: props.monitorExtendInfo,
            monitorStatus: props.monitorStatus,
            addr: props.addr,
            name: props.name,
            interval: props.interval,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAddressPool;
        this.attrAddrPoolId = rosAddressPool.attrAddrPoolId;
    }
}
