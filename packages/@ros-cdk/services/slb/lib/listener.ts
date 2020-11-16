import * as ros from '@ros-cdk/core';
import { RosListener } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosListener as ListenerProperty };

/**
 * Properties for defining a `ALIYUN::SLB::Listener`
 */
export interface ListenerProps {

    /**
     * @Property backendServerPort: Backend server can listen on ports from 1 to 65535.
     */
    readonly backendServerPort: number;

    /**
     * @Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
     */
    readonly bandwidth: number;

    /**
     * @Property listenerPort: Port for front listener. Range from 1 to 65535.
     */
    readonly listenerPort: number;

    /**
     * @Property loadBalancerId: The id of load balancer to create listener.
     */
    readonly loadBalancerId: string;

    /**
     * @Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
     */
    readonly protocol: string;

    /**
     * @Property aclId: The ID of the access control list associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    readonly aclId?: string;

    /**
     * @Property aclStatus: Indicates whether to enable access control.
     * Valid values: on | off. Default value: off
     */
    readonly aclStatus?: string;

    /**
     * @Property aclType: The access control type:
     * * white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
     * Enabling a whitelist poses some risks to your services.
     * After a whitelist is enabled, only the IP addresses in the list can access the listener.
     * If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
     * * black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
     * If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.
     * 
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    readonly aclType?: string;

    /**
     * @Property caCertificateId: CA server certificate id, for https listener only.
     */
    readonly caCertificateId?: string;

    /**
     * @Property healthCheck: The properties of health checking setting.
     */
    readonly healthCheck?: RosListener.HealthCheckProperty | ros.IResolvable;

    /**
     * @Property httpConfig: Config for http protocol.
     */
    readonly httpConfig?: RosListener.HttpConfigProperty | ros.IResolvable;

    /**
     * @Property idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
     */
    readonly idleTimeout?: number;

    /**
     * @Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
     */
    readonly masterSlaveServerGroupId?: string;

    /**
     * @Property persistence: The properties of persistence.
     */
    readonly persistence?: RosListener.PersistenceProperty | ros.IResolvable;

    /**
     * @Property requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
     */
    readonly requestTimeout?: number;

    /**
     * @Property scheduler: The scheduler algorithm. Support 'wrr' or 'wlc' only, default is 'wrr'
     */
    readonly scheduler?: string;

    /**
     * @Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
     */
    readonly serverCertificateId?: string;

    /**
     * @Property vServerGroupId: The id of the VServerGroup which use in listener.
     */
    readonly vServerGroupId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::SLB::Listener`
 */
export class Listener extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ListenerPortsAndProtocol: The collection of listener.
     */
    public readonly attrListenerPortsAndProtocol: any;

    /**
     * @Attribute LoadBalancerId: The id of load balancer
     */
    public readonly attrLoadBalancerId: any;

    /**
     * Create a new `ALIYUN::SLB::Listener`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ListenerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosListener = new RosListener(this, id,  {
            requestTimeout: props.requestTimeout,
            listenerPort: props.listenerPort,
            vServerGroupId: props.vServerGroupId,
            caCertificateId: props.caCertificateId,
            scheduler: props.scheduler ? props.scheduler : 'wrr',
            aclId: props.aclId,
            healthCheck: props.healthCheck,
            idleTimeout: props.idleTimeout,
            loadBalancerId: props.loadBalancerId,
            backendServerPort: props.backendServerPort,
            persistence: props.persistence,
            aclStatus: props.aclStatus ? props.aclStatus : 'off',
            bandwidth: props.bandwidth,
            masterSlaveServerGroupId: props.masterSlaveServerGroupId,
            serverCertificateId: props.serverCertificateId,
            httpConfig: props.httpConfig,
            aclType: props.aclType,
            protocol: props.protocol,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosListener;
        this.attrListenerPortsAndProtocol = rosListener.attrListenerPortsAndProtocol;
        this.attrLoadBalancerId = rosListener.attrLoadBalancerId;
    }
}
