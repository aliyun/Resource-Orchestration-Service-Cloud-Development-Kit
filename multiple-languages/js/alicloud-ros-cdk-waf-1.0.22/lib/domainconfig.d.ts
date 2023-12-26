import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainConfig } from './waf.generated';
export { RosDomainConfig as DomainConfigProperty };
/**
 * Properties for defining a `DomainConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domainconfig
 */
export interface DomainConfigProps {
    /**
     * Property domain: Domain name.
     */
    readonly domain: string | ros.IResolvable;
    /**
     * Property instanceId: WAF instance ID.
     * Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
     * 0: none.
     * 1: expressed.
     */
    readonly isAccessProduct: number | ros.IResolvable;
    /**
     * Property protocols: The domain supports access protocols, values:
     * http: expressed support for the HTTP protocol.
     * https: support for HTTPS protocol.
     * http, https: supports HTTP, HTTPS protocol.
     */
    readonly protocols: string | ros.IResolvable;
    /**
     * Property httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
     * Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    readonly httpPort?: string | ros.IResolvable;
    /**
     * Property httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
     * Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
     */
    readonly httpsPort?: string | ros.IResolvable;
    /**
     * Property httpsRedirect: HTTPS is turned forcefully jump the argument:
     * 0: off (default)
     * 1: Turn
     * Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
     */
    readonly httpsRedirect?: number | ros.IResolvable;
    /**
     * Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
     * 0: off (default)
     * 1: Turn
     * Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
     */
    readonly httpToUserIp?: number | ros.IResolvable;
    /**
     * Property loadBalancing: Back to the source load balancing policy values:
     * 0: IP Hash way.
     * 1: represents a polling mode.
     */
    readonly loadBalancing?: number | ros.IResolvable;
    /**
     * Property region: Examples of areas where the WAF. Value:
     * cn: China mainland (default)
     * cn-hongkong: China HongKong and other overseas
     */
    readonly region?: string | ros.IResolvable;
    /**
     * Property rsType: Back to the source address type the domain name values:
     * 0: back to the source to IP.
     * 1: Indicates the domain name back to the source.
     */
    readonly rsType?: number | ros.IResolvable;
    /**
     * Property sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
     */
    readonly sourceIps?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::WAF::DomainConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-waf-domainconfig
 */
export declare class DomainConfig extends ros.Resource {
    /**
     * Attribute Cname: CNAME assigned by WAF instance.
     */
    readonly attrCname: ros.IResolvable;
    /**
     * Attribute ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.
     */
    readonly attrProtocolType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainConfigProps, enableResourcePropertyConstraint?: boolean);
}
