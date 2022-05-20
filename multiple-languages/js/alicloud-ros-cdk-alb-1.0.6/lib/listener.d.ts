import * as ros from '@alicloud/ros-cdk-core';
import { RosListener } from './alb.generated';
export { RosListener as ListenerProperty };
/**
 * Properties for defining a `ALIYUN::ALB::Listener`
 */
export interface ListenerProps {
    /**
     * Property defaultActions: The actions of the rule.
     */
    readonly defaultActions: Array<RosListener.DefaultActionsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property listenerPort: The frontend port that is used by the ALB instance.
     * Valid values: 1 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;
    /**
     * Property listenerProtocol: The listener protocol.
     * Valid values: HTTP, HTTPS, and QUIC.
     */
    readonly listenerProtocol: string | ros.IResolvable;
    /**
     * Property loadBalancerId: The ID of the ALB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * Property certificates: The content of the SSL certificate.
     */
    readonly certificates?: Array<RosListener.CertificatesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
     * Valid values: true and false.
     * Default value: true.
     */
    readonly gzipEnabled?: boolean | ros.IResolvable;
    /**
     * Property http2Enabled: Specifies whether to enable HTTP/2. Default value: on.
     * Valid values: true and false.
     * Default value: true.
     * Note Only HTTPS listeners support this parameter.
     */
    readonly http2Enabled?: boolean | ros.IResolvable;
    /**
     * Property idleTimeout: The timeout period of idle connections.
     * Valid values: 1 to 60. Unit: seconds.
     * Default value: 15.
     * If no request is received within the specified timeout period, ALB closes the connection.
     * ALB recreates the connection when a new connection request is received.
     */
    readonly idleTimeout?: number | ros.IResolvable;
    /**
     * Property listenerDescription: The description of the listener.
     * The description must be 2 to 256 characters in length.
     */
    readonly listenerDescription?: string | ros.IResolvable;
    /**
     * Property quicConfig: Select a QUIC listener and associate it with the ALB instance.
     */
    readonly quicConfig?: RosListener.QuicConfigProperty | ros.IResolvable;
    /**
     * Property requestTimeout: The timeout period of the request.
     * Valid values: 1 to 180. Unit: seconds.
     * Default value: 60.
     * If no response is received from the backend server during the request timeout period,
     * ALB sends an HTTP 504 error code to the client.
     */
    readonly requestTimeout?: number | ros.IResolvable;
    /**
     * Property securityPolicyId: The ID of the security policy. System security policies and custom security policies
     * are supported.
     * Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
     * Note Only HTTPS listeners support this parameter.
     */
    readonly securityPolicyId?: string | ros.IResolvable;
    /**
     * Property xForwardedForConfig: The configuration of the XForward field.
     */
    readonly xForwardedForConfig?: RosListener.XForwardedForConfigProperty | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ALB::Listener`
 */
export declare class Listener extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ALB::Listener`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ListenerProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=listener.d.ts.map