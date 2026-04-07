import * as ros from '@alicloud/ros-cdk-core';
import { RosAddressPool } from './dns.generated';
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
     * Property lbaStrategy: The load balancing strategy. Valid values: RoundRobin, Weighted, FallbackToFirst.
     */
    readonly lbaStrategy: string | ros.IResolvable;
    /**
     * Property name: The name of the address pool.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property type: The type of the address pool. Valid values: Ipv4, Ipv6, Domain.
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
     * Property monitorExtendInfo: The extended information of the health check.
     */
    readonly monitorExtendInfo?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property monitorStatus: The monitoring status of the address pool.
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
export declare class AddressPool extends ros.Resource implements IAddressPool {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AddressPoolProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AddrPoolId: The ID of the address pool.
     */
    readonly attrAddrPoolId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AddressPoolProps, enableResourcePropertyConstraint?: boolean);
}
