import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './waf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomain as DomainProperty };

/**
 * Properties for defining a `ALIYUN::WAF::Domain`
 */
export interface DomainProps {

    /**
     * Property domainName: Domain name
     */
    readonly domainName: string;

    /**
     * Property instanceId: Instance id
     */
    readonly instanceId: string;

    /**
     * Property isAccessProduct: Is there a seven-layer agency before WAF
     */
    readonly isAccessProduct: string;

    /**
     * Property sourceIps: Back to source IP configuration
     */
    readonly sourceIps: string[];

    /**
     * Property clusterType: Cluster type
     */
    readonly clusterType?: string;

    /**
     * Property connectionTime: Connection timeout
     */
    readonly connectionTime?: number;

    /**
     * Property http2Port: Http2 port configuration
     */
    readonly http2Port?: string[];

    /**
     * Property httpPort: Http port configuration
     */
    readonly httpPort?: string[];

    /**
     * Property httpsPort: Https port configuration
     */
    readonly httpsPort?: string[];

    /**
     * Property httpsRedirect: Https forced redirect configuration
     */
    readonly httpsRedirect?: string;

    /**
     * Property httpToUserIp: Http back to source
     */
    readonly httpToUserIp?: string;

    /**
     * Property loadBalancing: Load balancing configuration
     */
    readonly loadBalancing?: string;

    /**
     * Property logHeaders: Domain traffic tagging
     */
    readonly logHeaders?: Array<RosDomain.LogHeadersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property readTime: Read connection timeout period
     */
    readonly readTime?: number;

    /**
     * Property resourceGroupId: Resource group Id
     */
    readonly resourceGroupId?: string;

    /**
     * Property writeTime: Write connection timeout period
     */
    readonly writeTime?: number;
}

/**
 * A ROS resource type:  `ALIYUN::WAF::Domain`
 */
export class Domain extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterType: Cluster type
     */
    public readonly attrClusterType: any;

    /**
     * Attribute Cname: CNAME assigned by WAF instance
     */
    public readonly attrCname: any;

    /**
     * Attribute DomainName: Domain name
     */
    public readonly attrDomainName: any;

    /**
     * Attribute Http2Port: Http2 port configuration
     */
    public readonly attrHttp2Port: any;

    /**
     * Attribute HttpPort: Http port configuration
     */
    public readonly attrHttpPort: any;

    /**
     * Attribute HttpToUserIp: Http back to source
     */
    public readonly attrHttpToUserIp: any;

    /**
     * Attribute HttpsPort: Https port configuration
     */
    public readonly attrHttpsPort: any;

    /**
     * Attribute HttpsRedirect: Https forced redirect configuration
     */
    public readonly attrHttpsRedirect: any;

    /**
     * Attribute InstanceId: Instance id
     */
    public readonly attrInstanceId: any;

    /**
     * Attribute IsAccessProduct: Is there a seven-layer agency before WAF
     */
    public readonly attrIsAccessProduct: any;

    /**
     * Attribute LoadBalancing: Load balancing configuration
     */
    public readonly attrLoadBalancing: any;

    /**
     * Attribute LogHeaders: Domain traffic tagging
     */
    public readonly attrLogHeaders: any;

    /**
     * Attribute ResourceGroupId: Resource group Id
     */
    public readonly attrResourceGroupId: any;

    /**
     * Attribute SourceIps: Back to source IP configuration
     */
    public readonly attrSourceIps: any;

    /**
     * Attribute Version: Optimistic lock version
     */
    public readonly attrVersion: any;

    /**
     * Create a new `ALIYUN::WAF::Domain`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDomain = new RosDomain(this, id,  {
            httpToUserIp: props.httpToUserIp,
            httpPort: props.httpPort,
            isAccessProduct: props.isAccessProduct,
            resourceGroupId: props.resourceGroupId,
            domainName: props.domainName,
            instanceId: props.instanceId,
            sourceIps: props.sourceIps,
            readTime: props.readTime,
            clusterType: props.clusterType,
            loadBalancing: props.loadBalancing,
            logHeaders: props.logHeaders,
            writeTime: props.writeTime,
            http2Port: props.http2Port,
            connectionTime: props.connectionTime,
            httpsRedirect: props.httpsRedirect,
            httpsPort: props.httpsPort,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomain;
        this.attrClusterType = rosDomain.attrClusterType;
        this.attrCname = rosDomain.attrCname;
        this.attrDomainName = rosDomain.attrDomainName;
        this.attrHttp2Port = rosDomain.attrHttp2Port;
        this.attrHttpPort = rosDomain.attrHttpPort;
        this.attrHttpToUserIp = rosDomain.attrHttpToUserIp;
        this.attrHttpsPort = rosDomain.attrHttpsPort;
        this.attrHttpsRedirect = rosDomain.attrHttpsRedirect;
        this.attrInstanceId = rosDomain.attrInstanceId;
        this.attrIsAccessProduct = rosDomain.attrIsAccessProduct;
        this.attrLoadBalancing = rosDomain.attrLoadBalancing;
        this.attrLogHeaders = rosDomain.attrLogHeaders;
        this.attrResourceGroupId = rosDomain.attrResourceGroupId;
        this.attrSourceIps = rosDomain.attrSourceIps;
        this.attrVersion = rosDomain.attrVersion;
    }
}
