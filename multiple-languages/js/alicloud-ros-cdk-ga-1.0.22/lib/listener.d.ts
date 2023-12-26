import * as ros from '@alicloud/ros-cdk-core';
import { RosListener } from './ga.generated';
export { RosListener as ListenerProperty };
/**
 * Properties for defining a `Listener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener
 */
export interface ListenerProps {
    /**
     * Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * Property portRanges:
     */
    readonly portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     * http: HTTP protocolhttps: HTTPS protocol.
     */
    readonly protocol: string | ros.IResolvable;
    /**
     * Property certificates:
     */
    readonly certificates?: Array<RosListener.CertificatesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    readonly clientAffinity?: string | ros.IResolvable;
    /**
     * Property description: The description of the listener.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property proxyProtocol: Specifies whether to preserve client IP addresses. Valid values:
     * true: preserves client IP addresses. After this feature is enabled, backend servers can retrieve client IP addresses.
     * false (default): does not preserve client IP addresses.
     */
    readonly proxyProtocol?: boolean | ros.IResolvable;
    /**
     * Property securityPolicyId: The ID of the security policy. Valid values:
     * tls_cipher_policy_1_0
     * tls_cipher_policy_1_1
     * tls_cipher_policy_1_2
     * tls_cipher_policy_1_2_strict
     * tls_cipher_policy_1_2_strict_with_1_3
     * Note Only HTTPS listeners support this parameter.
     */
    readonly securityPolicyId?: string | ros.IResolvable;
    /**
     * Property xForwardedForConfig: The configuration of the XForward field.
     */
    readonly xForwardedForConfig?: RosListener.XForwardedForConfigProperty | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::Listener`, which is used to create a listener for a Global Accelerator (GA) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosListener`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-listener
 */
export declare class Listener extends ros.Resource {
    /**
     * Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ListenerProps, enableResourcePropertyConstraint?: boolean);
}
