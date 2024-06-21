import * as ros from '@alicloud/ros-cdk-core';
import { RosWebRule } from './ddospro.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWebRule as WebRuleProperty };

/**
 * Properties for defining a `WebRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-webrule
 */
export interface WebRuleProps {

    /**
     * Property domain: The domain name of the website that you want to add to the instance.
     */
    readonly domain: string | ros.IResolvable;

    /**
     * Property rsType: The address type of the origin server. Valid values:
     * 0: IP address
     * 1: domain name The domain name of the origin server is returned if you deploy proxies, such as Web Application Firewall (WAF), between the origin server and the instance. In this case, the address of the proxy, such as the CNAME provided by WAF, is returned.
     */
    readonly rsType: number | ros.IResolvable;

    /**
     * Property rules: The details of the forwarding rule. The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields: 
     * ProxyRules: the information about the origin server. The information includes the port number and IP address. This field is required and must be a JSON array. Each element in a JSON array is a JSON struct that contains the following fields: ProxyPort: the port number. This field is required and must be an integer; RealServers: the IP address. This field is required and must be a string array.
     * ProxyType: the protocol type. This field is required and must be a string. Valid values: http, https, websocket, and websockets.
     */
    readonly rules: string | ros.IResolvable;

    /**
     * Property defenseId: The ID of the associated defense. This parameter applies to scenarios in which other cloud services, such as Object Storage Service (OSS), are integrated with Anti-DDoS Pro or Anti-DDoS Premium.
     */
    readonly defenseId?: string | ros.IResolvable;

    /**
     * Property httpsExt: The advanced HTTPS settings. This parameter takes effect only when the value of the ProxyType parameter includes https. The value is a string that consists of a JSON struct. The JSON struct contains the following fields: 
     * Http2https: specifies whether to turn on Enforce HTTPS Routing. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enforce HTTPS Routing is turned off. The value 1 indicates that Enforce HTTPS Routing is turned on. The default value is 0. If your website supports both HTTP and HTTPS, this feature meets your business requirements. If you enable this feature, all HTTP requests to access the website are redirected to HTTPS requests on the standard port 443.
     * Https2http: specifies whether to turn on Enable HTTP. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP is turned off. The value 1 indicates that Enable HTTP is turned on. The default value is 0. If your website does not support HTTPS, this feature meets your business requirements If this feature is enabled, all HTTPS requests are redirected to HTTP requests and forwarded to origin servers. This feature can redirect WebSockets requests to WebSocket requests. Requests are redirected over the standard port 80.
     * Http2: specifies whether to turn on Enable HTTP\/2. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP\/2 is turned off. The value 1 indicates that Enable HTTP\/2 is turned on. The default value is 0. After you turn on Enable HTTP\/2, the protocol type is HTTP\/2.
     */
    readonly httpsExt?: string | ros.IResolvable;

    /**
     * Property instanceIds: An array consisting of the IDs of instances that you want to associate.
     */
    readonly instanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DDoSPro::WebRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWebRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-webrule
 */
export class WebRule extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: WebRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Domain: The domain name of the website that you want to add to the instance.
     */
    public readonly attrDomain: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WebRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWebRule = new RosWebRule(this, id,  {
            rsType: props.rsType,
            resourceGroupId: props.resourceGroupId,
            defenseId: props.defenseId,
            domain: props.domain,
            instanceIds: props.instanceIds,
            rules: props.rules,
            httpsExt: props.httpsExt,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWebRule;
        this.attrDomain = rosWebRule.attrDomain;
    }
}
