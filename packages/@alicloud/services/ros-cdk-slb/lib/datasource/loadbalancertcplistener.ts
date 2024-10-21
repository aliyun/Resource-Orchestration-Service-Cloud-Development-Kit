import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancerTCPListener } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancerTCPListener as LoadBalancerTCPListenerProperty };

/**
 * Properties for defining a `LoadBalancerTCPListener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
 */
export interface LoadBalancerTCPListenerProps {

    /**
     * Property listenerPort: The frontend port used by the CLB instance.Valid values: 1 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;

    /**
     * Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::LoadBalancerTCPListener`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancerTCPListener`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
 */
export class LoadBalancerTCPListener extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LoadBalancerTCPListenerProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AclId: The ID of the network ACL that is associated with the listener.
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * Attribute AclIds: The ID list of the network ACL that is associated with the listener.
     */
    public readonly attrAclIds: ros.IResolvable;

    /**
     * Attribute AclStatus: Indicates whether access control is enabled.
     */
    public readonly attrAclStatus: ros.IResolvable;

    /**
     * Attribute AclType: The type of the ACL.
     */
    public readonly attrAclType: ros.IResolvable;

    /**
     * Attribute BackendServerPort: The backend port used by the CLB instance.
     */
    public readonly attrBackendServerPort: ros.IResolvable;

    /**
     * Attribute Bandwidth: The maximum bandwidth of the listener. Unit: Mbit/s.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * Attribute ConnectionDrain: Indicates whether connection draining is enabled. If ConnectionDrain is set to on, the parameter is returned.
     */
    public readonly attrConnectionDrain: ros.IResolvable;

    /**
     * Attribute ConnectionDrainTimeout: The timeout period of connection draining. If ConnectionDrain is set to on, the parameter is returned.
     */
    public readonly attrConnectionDrainTimeout: ros.IResolvable;

    /**
     * Attribute Description: The description of the listener.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute EstablishedTimeout: The timeout period of a connection.
     */
    public readonly attrEstablishedTimeout: ros.IResolvable;

    /**
     * Attribute HealthCheck: Indicates whether the health check feature is enabled.
     */
    public readonly attrHealthCheck: ros.IResolvable;

    /**
     * Attribute HealthCheckConnectPort: The port that is used for health checks.
     */
    public readonly attrHealthCheckConnectPort: ros.IResolvable;

    /**
     * Attribute HealthCheckConnectTimeout: The timeout period. Unit: seconds.
     */
    public readonly attrHealthCheckConnectTimeout: ros.IResolvable;

    /**
     * Attribute HealthCheckDomain: The domain name that is used for health checks.
     */
    public readonly attrHealthCheckDomain: ros.IResolvable;

    /**
     * Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.
     */
    public readonly attrHealthCheckHttpCode: ros.IResolvable;

    /**
     * Attribute HealthCheckInterval: The interval between two consecutive health checks. Valid values: 1 to 50. Unit: seconds.
     */
    public readonly attrHealthCheckInterval: ros.IResolvable;

    /**
     * Attribute HealthCheckMethod: The health check method.
     */
    public readonly attrHealthCheckMethod: ros.IResolvable;

    /**
     * Attribute HealthCheckType: The health check method that is used by the TCP listener.
     */
    public readonly attrHealthCheckType: ros.IResolvable;

    /**
     * Attribute HealthCheckUri: The URL that is used for health checks.
     */
    public readonly attrHealthCheckUri: ros.IResolvable;

    /**
     * Attribute HealthyThreshold: The healthy threshold. The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
     */
    public readonly attrHealthyThreshold: ros.IResolvable;

    /**
     * Attribute ListenerPort: The frontend port used by the CLB instance.
     */
    public readonly attrListenerPort: ros.IResolvable;

    /**
     * Attribute LoadBalancerId: The ID of the CLB instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.
     */
    public readonly attrMasterSlaveServerGroupId: ros.IResolvable;

    /**
     * Attribute PersistenceTimeout: The timeout period of session persistence.
     */
    public readonly attrPersistenceTimeout: ros.IResolvable;

    /**
     * Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
     */
    public readonly attrProxyProtocolV2Enabled: ros.IResolvable;

    /**
     * Attribute Scheduler: The scheduling algorithm.
     */
    public readonly attrScheduler: ros.IResolvable;

    /**
     * Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.
     */
    public readonly attrSynProxy: ros.IResolvable;

    /**
     * Attribute UnhealthyThreshold: The unhealthy threshold. The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
     */
    public readonly attrUnhealthyThreshold: ros.IResolvable;

    /**
     * Attribute VServerGroupId: The ID of the associated server group.
     */
    public readonly attrVServerGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerTCPListenerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLoadBalancerTCPListener = new RosLoadBalancerTCPListener(this, id,  {
            listenerPort: props.listenerPort,
            loadBalancerId: props.loadBalancerId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancerTCPListener;
        this.attrAclId = rosLoadBalancerTCPListener.attrAclId;
        this.attrAclIds = rosLoadBalancerTCPListener.attrAclIds;
        this.attrAclStatus = rosLoadBalancerTCPListener.attrAclStatus;
        this.attrAclType = rosLoadBalancerTCPListener.attrAclType;
        this.attrBackendServerPort = rosLoadBalancerTCPListener.attrBackendServerPort;
        this.attrBandwidth = rosLoadBalancerTCPListener.attrBandwidth;
        this.attrConnectionDrain = rosLoadBalancerTCPListener.attrConnectionDrain;
        this.attrConnectionDrainTimeout = rosLoadBalancerTCPListener.attrConnectionDrainTimeout;
        this.attrDescription = rosLoadBalancerTCPListener.attrDescription;
        this.attrEstablishedTimeout = rosLoadBalancerTCPListener.attrEstablishedTimeout;
        this.attrHealthCheck = rosLoadBalancerTCPListener.attrHealthCheck;
        this.attrHealthCheckConnectPort = rosLoadBalancerTCPListener.attrHealthCheckConnectPort;
        this.attrHealthCheckConnectTimeout = rosLoadBalancerTCPListener.attrHealthCheckConnectTimeout;
        this.attrHealthCheckDomain = rosLoadBalancerTCPListener.attrHealthCheckDomain;
        this.attrHealthCheckHttpCode = rosLoadBalancerTCPListener.attrHealthCheckHttpCode;
        this.attrHealthCheckInterval = rosLoadBalancerTCPListener.attrHealthCheckInterval;
        this.attrHealthCheckMethod = rosLoadBalancerTCPListener.attrHealthCheckMethod;
        this.attrHealthCheckType = rosLoadBalancerTCPListener.attrHealthCheckType;
        this.attrHealthCheckUri = rosLoadBalancerTCPListener.attrHealthCheckUri;
        this.attrHealthyThreshold = rosLoadBalancerTCPListener.attrHealthyThreshold;
        this.attrListenerPort = rosLoadBalancerTCPListener.attrListenerPort;
        this.attrLoadBalancerId = rosLoadBalancerTCPListener.attrLoadBalancerId;
        this.attrMasterSlaveServerGroupId = rosLoadBalancerTCPListener.attrMasterSlaveServerGroupId;
        this.attrPersistenceTimeout = rosLoadBalancerTCPListener.attrPersistenceTimeout;
        this.attrProxyProtocolV2Enabled = rosLoadBalancerTCPListener.attrProxyProtocolV2Enabled;
        this.attrScheduler = rosLoadBalancerTCPListener.attrScheduler;
        this.attrSynProxy = rosLoadBalancerTCPListener.attrSynProxy;
        this.attrUnhealthyThreshold = rosLoadBalancerTCPListener.attrUnhealthyThreshold;
        this.attrVServerGroupId = rosLoadBalancerTCPListener.attrVServerGroupId;
    }
}
