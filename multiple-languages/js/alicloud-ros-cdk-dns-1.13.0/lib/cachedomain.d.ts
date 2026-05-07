import * as ros from '@alicloud/ros-cdk-core';
import { RosCacheDomain } from './dns.generated';
export { RosCacheDomain as CacheDomainProperty };
/**
 * Properties for defining a `CacheDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
 */
export interface CacheDomainProps {
    /**
     * Property cacheTtlMax: The maximum TTL value for cached records.
     */
    readonly cacheTtlMax: number | ros.IResolvable;
    /**
     * Property cacheTtlMin: The minimum TTL value for cached records.
     */
    readonly cacheTtlMin: number | ros.IResolvable;
    /**
     * Property domainName: The domain name of the DNS cache domain.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * Property instanceId: The instance ID associated with the DNS cache domain.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property sourceDnsServer: List of source DNS servers.
     */
    readonly sourceDnsServer: Array<RosCacheDomain.SourceDnsServerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property sourceEdns: Whether EDNS is enabled for the source DNS server.
     */
    readonly sourceEdns: string | ros.IResolvable;
    /**
     * Property sourceProtocol: The protocol used by the source DNS server.
     */
    readonly sourceProtocol: string | ros.IResolvable;
    /**
     * Property remark: Remark for the DNS cache domain.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * Represents a `CacheDomain`.
 */
export interface ICacheDomain extends ros.IResource {
    readonly props: CacheDomainProps;
    /**
     * Attribute DomainName: The domain name of the DNS cache.
     */
    readonly attrDomainName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::CacheDomain`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCacheDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-cachedomain
 */
export declare class CacheDomain extends ros.Resource implements ICacheDomain {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CacheDomainProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DomainName: The domain name of the DNS cache.
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CacheDomainProps, enableResourcePropertyConstraint?: boolean);
}
