import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './waf.generated';
export { RosDomain as DomainProperty };
/**
 * Properties for defining a `Domain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domain
 */
export interface DomainProps {
    /**
     * Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * Property instanceId: Instance id
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property isAccessProduct: Is there a seven-layer agency before WAF
     */
    readonly isAccessProduct: string | ros.IResolvable;
    /**
     * Property sourceIps: Back to source IP configuration
     */
    readonly sourceIps: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property clusterType: Cluster type
     */
    readonly clusterType?: string | ros.IResolvable;
    /**
     * Property connectionTime: Connection timeout
     */
    readonly connectionTime?: number | ros.IResolvable;
    /**
     * Property http2Port: Http2 port configuration
     */
    readonly http2Port?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property httpPort: Http port configuration
     */
    readonly httpPort?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property httpsPort: Https port configuration
     */
    readonly httpsPort?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property httpsRedirect: Https forced redirect configuration
     */
    readonly httpsRedirect?: string | ros.IResolvable;
    /**
     * Property httpToUserIp: Http back to source
     */
    readonly httpToUserIp?: string | ros.IResolvable;
    /**
     * Property loadBalancing: Load balancing configuration
     */
    readonly loadBalancing?: string | ros.IResolvable;
    /**
     * Property logHeaders: Domain traffic tagging
     */
    readonly logHeaders?: Array<RosDomain.LogHeadersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property readTime: Read connection timeout period
     */
    readonly readTime?: number | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group Id
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property writeTime: Write connection timeout period
     */
    readonly writeTime?: number | ros.IResolvable;
}
/**
 * Represents a `Domain`.
 */
export interface IDomain extends ros.IResource {
    readonly props: DomainProps;
    /**
     * Attribute ClusterType: Cluster type
     */
    readonly attrClusterType: ros.IResolvable | string;
    /**
     * Attribute Cname: CNAME assigned by WAF instance
     */
    readonly attrCname: ros.IResolvable | string;
    /**
     * Attribute DomainName: Domain name
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Attribute Http2Port: Http2 port configuration
     */
    readonly attrHttp2Port: ros.IResolvable | string;
    /**
     * Attribute HttpPort: Http port configuration
     */
    readonly attrHttpPort: ros.IResolvable | string;
    /**
     * Attribute HttpToUserIp: Http back to source
     */
    readonly attrHttpToUserIp: ros.IResolvable | string;
    /**
     * Attribute HttpsPort: Https port configuration
     */
    readonly attrHttpsPort: ros.IResolvable | string;
    /**
     * Attribute HttpsRedirect: Https forced redirect configuration
     */
    readonly attrHttpsRedirect: ros.IResolvable | string;
    /**
     * Attribute InstanceId: Instance id
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute IsAccessProduct: Is there a seven-layer agency before WAF
     */
    readonly attrIsAccessProduct: ros.IResolvable | string;
    /**
     * Attribute LoadBalancing: Load balancing configuration
     */
    readonly attrLoadBalancing: ros.IResolvable | string;
    /**
     * Attribute LogHeaders: Domain traffic tagging
     */
    readonly attrLogHeaders: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: Resource group Id
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SourceIps: Back to source IP configuration
     */
    readonly attrSourceIps: ros.IResolvable | string;
    /**
     * Attribute Version: Optimistic lock version
     */
    readonly attrVersion: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::WAF::Domain`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domain
 */
export declare class Domain extends ros.Resource implements IDomain {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterType: Cluster type
     */
    readonly attrClusterType: ros.IResolvable | string;
    /**
     * Attribute Cname: CNAME assigned by WAF instance
     */
    readonly attrCname: ros.IResolvable | string;
    /**
     * Attribute DomainName: Domain name
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Attribute Http2Port: Http2 port configuration
     */
    readonly attrHttp2Port: ros.IResolvable | string;
    /**
     * Attribute HttpPort: Http port configuration
     */
    readonly attrHttpPort: ros.IResolvable | string;
    /**
     * Attribute HttpToUserIp: Http back to source
     */
    readonly attrHttpToUserIp: ros.IResolvable | string;
    /**
     * Attribute HttpsPort: Https port configuration
     */
    readonly attrHttpsPort: ros.IResolvable | string;
    /**
     * Attribute HttpsRedirect: Https forced redirect configuration
     */
    readonly attrHttpsRedirect: ros.IResolvable | string;
    /**
     * Attribute InstanceId: Instance id
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute IsAccessProduct: Is there a seven-layer agency before WAF
     */
    readonly attrIsAccessProduct: ros.IResolvable | string;
    /**
     * Attribute LoadBalancing: Load balancing configuration
     */
    readonly attrLoadBalancing: ros.IResolvable | string;
    /**
     * Attribute LogHeaders: Domain traffic tagging
     */
    readonly attrLogHeaders: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: Resource group Id
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SourceIps: Back to source IP configuration
     */
    readonly attrSourceIps: ros.IResolvable | string;
    /**
     * Attribute Version: Optimistic lock version
     */
    readonly attrVersion: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint?: boolean);
}
