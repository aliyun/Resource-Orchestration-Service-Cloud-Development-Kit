import * as ros from '@alicloud/ros-cdk-core';
import { RosListener } from './alb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosListener as ListenerProperty };

/**
 * Properties for defining a `Listener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-listener
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
     * Property caCertificates: List of configured CA certificates for listener.
     */
    readonly caCertificates?: Array<RosListener.CaCertificatesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property caEnabled: Specifies whether to enable mutual authentication. Default false.
     */
    readonly caEnabled?: boolean | ros.IResolvable;

    /**
     * Property certificates: The list of SSL certificates for listener.
     */
    readonly certificates?: Array<RosListener.CertificatesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property gzipEnabled: Specifies whether to enable gzip compression to compress files of a specific type.
     * Valid values: true and false.
     * Default value: true.
     */
    readonly gzipEnabled?: boolean | ros.IResolvable;

    /**
     * Property http2Enabled: Specifies whether to enable HTTP\/2. Default value: on.
     * Valid values: true and false.
     * Default value: true.
     * Note: Only HTTPS listeners support this parameter.
     */
    readonly http2Enabled?: boolean | ros.IResolvable;

    /**
     * Property idleTimeout: The timeout period of idle connections.
     * Valid values: 1 to 3600. Unit: seconds.
     * Default value: 15.
     * If no requests are received within the specified timeout period, ALB closes the current connection. When a new request is received, ALB establishes a new connection.
     */
    readonly idleTimeout?: number | ros.IResolvable;

    /**
     * Property listenerDescription: The description of the listener. 
     * The description must be 2 to 256 characters in length.
     */
    readonly listenerDescription?: string | ros.IResolvable;

    /**
     * Property listenerStatus: The status of the listener.
     */
    readonly listenerStatus?: string | ros.IResolvable;

    /**
     * Property logConfig: The configuration information about the access log.
     */
    readonly logConfig?: RosListener.LogConfigProperty | ros.IResolvable;

    /**
     * Property quicConfig: Select a QUIC listener and associate it with the ALB instance.
     */
    readonly quicConfig?: RosListener.QuicConfigProperty | ros.IResolvable;

    /**
     * Property requestTimeout: The timeout period of the request.
     * Valid values: 1 to 900. Unit: seconds.
     * Default value: 60.
     * If no response is received from the backend server during the request timeout period,
     * ALB sends an HTTP 504 error code to the client.
     */
    readonly requestTimeout?: number | ros.IResolvable;

    /**
     * Property securityPolicyId: The ID of the security policy. System security policies and custom security policies
     * are supported.
     * Default value: tls_cipher_policy_1_0. This value indicates a system security policy.
     * Note: Only HTTPS listeners support this parameter.
     */
    readonly securityPolicyId?: string | ros.IResolvable;

    /**
     * Property xForwardedForConfig: The configuration of the XForward field.
     */
    readonly xForwardedForConfig?: RosListener.XForwardedForConfigProperty | ros.IResolvable;
}

/**
 * Represents a `Listener`.
 */
export interface IListener extends ros.IResource {
    readonly props: ListenerProps;

    /**
     * Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The ID of the ALB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::Listener`, which is used to create an HTTP, HTTPS, or Quick UDP Internet Connections (QUIC) listener.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosListener`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-listener
 */
export class Listener extends ros.Resource implements IListener {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ListenerProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ListenerId: The ID of the listener.
     */
    public readonly attrListenerId: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The ID of the ALB instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ListenerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosListener = new RosListener(this, id,  {
            caEnabled: props.caEnabled,
            listenerPort: props.listenerPort,
            requestTimeout: props.requestTimeout,
            http2Enabled: props.http2Enabled,
            defaultActions: props.defaultActions,
            certificates: props.certificates,
            idleTimeout: props.idleTimeout,
            loadBalancerId: props.loadBalancerId,
            listenerProtocol: props.listenerProtocol,
            quicConfig: props.quicConfig,
            gzipEnabled: props.gzipEnabled,
            securityPolicyId: props.securityPolicyId,
            listenerStatus: props.listenerStatus,
            listenerDescription: props.listenerDescription,
            xForwardedForConfig: props.xForwardedForConfig,
            caCertificates: props.caCertificates,
            logConfig: props.logConfig,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosListener;
        this.attrListenerId = rosListener.attrListenerId;
        this.attrLoadBalancerId = rosListener.attrLoadBalancerId;
    }
}
