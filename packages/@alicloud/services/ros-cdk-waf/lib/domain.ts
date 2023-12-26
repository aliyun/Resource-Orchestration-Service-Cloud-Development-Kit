import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './waf.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::WAF::Domain`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domain
 */
export class Domain extends ros.Resource {

    /**
     * Attribute ClusterType: Cluster type
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * Attribute Cname: CNAME assigned by WAF instance
     */
    public readonly attrCname: ros.IResolvable;

    /**
     * Attribute DomainName: Domain name
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * Attribute Http2Port: Http2 port configuration
     */
    public readonly attrHttp2Port: ros.IResolvable;

    /**
     * Attribute HttpPort: Http port configuration
     */
    public readonly attrHttpPort: ros.IResolvable;

    /**
     * Attribute HttpToUserIp: Http back to source
     */
    public readonly attrHttpToUserIp: ros.IResolvable;

    /**
     * Attribute HttpsPort: Https port configuration
     */
    public readonly attrHttpsPort: ros.IResolvable;

    /**
     * Attribute HttpsRedirect: Https forced redirect configuration
     */
    public readonly attrHttpsRedirect: ros.IResolvable;

    /**
     * Attribute InstanceId: Instance id
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute IsAccessProduct: Is there a seven-layer agency before WAF
     */
    public readonly attrIsAccessProduct: ros.IResolvable;

    /**
     * Attribute LoadBalancing: Load balancing configuration
     */
    public readonly attrLoadBalancing: ros.IResolvable;

    /**
     * Attribute LogHeaders: Domain traffic tagging
     */
    public readonly attrLogHeaders: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: Resource group Id
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SourceIps: Back to source IP configuration
     */
    public readonly attrSourceIps: ros.IResolvable;

    /**
     * Attribute Version: Optimistic lock version
     */
    public readonly attrVersion: ros.IResolvable;

    /**
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
