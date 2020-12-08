import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './waf.generated';
export { RosDomain as DomainProperty };
/**
 * Properties for defining a `ALIYUN::WAF::Domain`
 */
export interface DomainProps {
    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string;
    /**
     * @Property instanceId: Instance id
     */
    readonly instanceId: string;
    /**
     * @Property isAccessProduct: Is there a seven-layer agency before WAF
     */
    readonly isAccessProduct: string;
    /**
     * @Property sourceIps: Back to source IP configuration
     */
    readonly sourceIps: string[];
    /**
     * @Property clusterType: Cluster type
     */
    readonly clusterType?: string;
    /**
     * @Property connectionTime: Connection timeout
     */
    readonly connectionTime?: number;
    /**
     * @Property http2Port: Http2 port configuration
     */
    readonly http2Port?: string[];
    /**
     * @Property httpPort: Http port configuration
     */
    readonly httpPort?: string[];
    /**
     * @Property httpsPort: Https port configuration
     */
    readonly httpsPort?: string[];
    /**
     * @Property httpsRedirect: Https forced redirect configuration
     */
    readonly httpsRedirect?: string;
    /**
     * @Property httpToUserIp: Http back to source
     */
    readonly httpToUserIp?: string;
    /**
     * @Property loadBalancing: Load balancing configuration
     */
    readonly loadBalancing?: string;
    /**
     * @Property logHeaders: Domain traffic tagging
     */
    readonly logHeaders?: Array<RosDomain.LogHeadersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property readTime: Read connection timeout period
     */
    readonly readTime?: number;
    /**
     * @Property resourceGroupId: Resource group Id
     */
    readonly resourceGroupId?: string;
    /**
     * @Property writeTime: Write connection timeout period
     */
    readonly writeTime?: number;
}
/**
 * A ROS resource type:  `ALIYUN::WAF::Domain`
 */
export declare class Domain extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute ClusterType: Cluster type
     */
    readonly attrClusterType: any;
    /**
     * @Attribute Cname: CNAME assigned by WAF instance
     */
    readonly attrCname: any;
    /**
     * @Attribute DomainName: Domain name
     */
    readonly attrDomainName: any;
    /**
     * @Attribute Http2Port: Http2 port configuration
     */
    readonly attrHttp2Port: any;
    /**
     * @Attribute HttpPort: Http port configuration
     */
    readonly attrHttpPort: any;
    /**
     * @Attribute HttpToUserIp: Http back to source
     */
    readonly attrHttpToUserIp: any;
    /**
     * @Attribute HttpsPort: Https port configuration
     */
    readonly attrHttpsPort: any;
    /**
     * @Attribute HttpsRedirect: Https forced redirect configuration
     */
    readonly attrHttpsRedirect: any;
    /**
     * @Attribute InstanceId: Instance id
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute IsAccessProduct: Is there a seven-layer agency before WAF
     */
    readonly attrIsAccessProduct: any;
    /**
     * @Attribute LoadBalancing: Load balancing configuration
     */
    readonly attrLoadBalancing: any;
    /**
     * @Attribute LogHeaders: Domain traffic tagging
     */
    readonly attrLogHeaders: any;
    /**
     * @Attribute ResourceGroupId: Resource group Id
     */
    readonly attrResourceGroupId: any;
    /**
     * @Attribute SourceIps: Back to source IP configuration
     */
    readonly attrSourceIps: any;
    /**
     * @Attribute Version: Optimistic lock version
     */
    readonly attrVersion: any;
    /**
     * Create a new `ALIYUN::WAF::Domain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint?: boolean);
}
