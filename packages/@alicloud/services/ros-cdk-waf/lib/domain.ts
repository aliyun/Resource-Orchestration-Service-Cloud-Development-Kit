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
export class Domain extends ros.Resource implements IDomain {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterType: Cluster type
     */
    public readonly attrClusterType: ros.IResolvable | string;

    /**
     * Attribute Cname: CNAME assigned by WAF instance
     */
    public readonly attrCname: ros.IResolvable | string;

    /**
     * Attribute DomainName: Domain name
     */
    public readonly attrDomainName: ros.IResolvable | string;

    /**
     * Attribute Http2Port: Http2 port configuration
     */
    public readonly attrHttp2Port: ros.IResolvable | string;

    /**
     * Attribute HttpPort: Http port configuration
     */
    public readonly attrHttpPort: ros.IResolvable | string;

    /**
     * Attribute HttpToUserIp: Http back to source
     */
    public readonly attrHttpToUserIp: ros.IResolvable | string;

    /**
     * Attribute HttpsPort: Https port configuration
     */
    public readonly attrHttpsPort: ros.IResolvable | string;

    /**
     * Attribute HttpsRedirect: Https forced redirect configuration
     */
    public readonly attrHttpsRedirect: ros.IResolvable | string;

    /**
     * Attribute InstanceId: Instance id
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute IsAccessProduct: Is there a seven-layer agency before WAF
     */
    public readonly attrIsAccessProduct: ros.IResolvable | string;

    /**
     * Attribute LoadBalancing: Load balancing configuration
     */
    public readonly attrLoadBalancing: ros.IResolvable | string;

    /**
     * Attribute LogHeaders: Domain traffic tagging
     */
    public readonly attrLogHeaders: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: Resource group Id
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SourceIps: Back to source IP configuration
     */
    public readonly attrSourceIps: ros.IResolvable | string;

    /**
     * Attribute Version: Optimistic lock version
     */
    public readonly attrVersion: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
