import * as ros from '@alicloud/ros-cdk-core';
import { RosPort } from './ddospro.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPort as PortProperty };

/**
 * Properties for defining a `Port`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-port
 */
export interface PortProps {

    /**
     * Property frontendProtocol: The type of the protocol. Valid values: 
     * tcp
     * udp
     */
    readonly frontendProtocol: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property realServers: An array that consists of the IP addresses of origin servers.
     */
    readonly realServers: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property backendPort: The port of the origin server. Valid values: 0 to 65535.
     */
    readonly backendPort?: string | ros.IResolvable;

    /**
     * Property frontendPort: The forwarding port. Valid values: 0 to 65535.
     */
    readonly frontendPort?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DDoSPro::Port`, which is used to create a port forwarding rule for an Anti-DDoS Proxy instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPort`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-port
 */
export class Port extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PortProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FrontendPort: The forwarding port.
     */
    public readonly attrFrontendPort: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PortProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPort = new RosPort(this, id,  {
            backendPort: props.backendPort,
            instanceId: props.instanceId,
            realServers: props.realServers,
            frontendPort: props.frontendPort,
            frontendProtocol: props.frontendProtocol,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPort;
        this.attrFrontendPort = rosPort.attrFrontendPort;
    }
}
