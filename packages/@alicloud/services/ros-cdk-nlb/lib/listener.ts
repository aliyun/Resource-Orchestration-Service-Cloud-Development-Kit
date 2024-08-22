import * as ros from '@alicloud/ros-cdk-core';
import { RosListener } from './nlb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosListener as ListenerProperty };

/**
 * Properties for defining a `Listener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
 */
export interface ListenerProps {

    /**
     * Property listenerProtocol: undefined
     */
    readonly listenerProtocol: string | ros.IResolvable;

    /**
     * Property loadBalancerId: ID of the LoadBalancer
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property serverGroupId: ID of the ServerGroup
     */
    readonly serverGroupId: string | ros.IResolvable;

    /**
     * Property alpnEnabled: undefined
     */
    readonly alpnEnabled?: boolean | ros.IResolvable;

    /**
     * Property alpnPolicy: Proxy of alpn
     */
    readonly alpnPolicy?: string | ros.IResolvable;

    /**
     * Property caCertificateIds: List of the ca certificate ids
     */
    readonly caCertificateIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property caEnabled: Whether to open CA
     */
    readonly caEnabled?: boolean | ros.IResolvable;

    /**
     * Property certificateIds: List of the certificate ids
     */
    readonly certificateIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property cps: New connection rate limit of Instance
     */
    readonly cps?: number | ros.IResolvable;

    /**
     * Property enable: Whether to start listener or not. Default True.
     */
    readonly enable?: boolean | ros.IResolvable;

    /**
     * Property endPort: EndPort of the portRange
     */
    readonly endPort?: number | ros.IResolvable;

    /**
     * Property idleTimeout: Specifies the connection idle timeout
     */
    readonly idleTimeout?: number | ros.IResolvable;

    /**
     * Property listenerDescription: Description of the listener, [2, 256] characters.
     */
    readonly listenerDescription?: string | ros.IResolvable;

    /**
     * Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0
     */
    readonly listenerPort?: number | ros.IResolvable;

    /**
     * Property mss: Max length of the TCP packet
     */
    readonly mss?: number | ros.IResolvable;

    /**
     * Property proxyProtocolEnabled: Whether to enable ppv2 function
     */
    readonly proxyProtocolEnabled?: boolean | ros.IResolvable;

    /**
     * Property proxyProtocolV2Config: ProxyProtocolV2Config of the listener
     */
    readonly proxyProtocolV2Config?: RosListener.ProxyProtocolV2ConfigProperty | ros.IResolvable;

    /**
     * Property secSensorEnabled: Whether to enable the second-level monitoring function
     */
    readonly secSensorEnabled?: boolean | ros.IResolvable;

    /**
     * Property securityPolicyId: Only valid for TcpSSL protocol monitoring
     */
    readonly securityPolicyId?: string | ros.IResolvable;

    /**
     * Property startPort: StartPort of the portRange
     */
    readonly startPort?: number | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosListener.TagsProperty[];
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLB::Listener`, which is used to create a listener.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosListener`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
 */
export class Listener extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ListenerProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ListenerId: Id of created Listener
     */
    public readonly attrListenerId: ros.IResolvable;

    /**
     * Attribute ListenerPort: ListenerPort of created Listener
     */
    public readonly attrListenerPort: ros.IResolvable;

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
            startPort: props.startPort,
            cps: props.cps,
            serverGroupId: props.serverGroupId,
            idleTimeout: props.idleTimeout,
            proxyProtocolV2Config: props.proxyProtocolV2Config,
            loadBalancerId: props.loadBalancerId,
            mss: props.mss,
            listenerProtocol: props.listenerProtocol,
            securityPolicyId: props.securityPolicyId,
            listenerDescription: props.listenerDescription,
            alpnPolicy: props.alpnPolicy,
            caCertificateIds: props.caCertificateIds,
            endPort: props.endPort,
            proxyProtocolEnabled: props.proxyProtocolEnabled,
            certificateIds: props.certificateIds,
            secSensorEnabled: props.secSensorEnabled,
            enable: props.enable,
            tags: props.tags,
            alpnEnabled: props.alpnEnabled,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosListener;
        this.attrListenerId = rosListener.attrListenerId;
        this.attrListenerPort = rosListener.attrListenerPort;
    }
}
