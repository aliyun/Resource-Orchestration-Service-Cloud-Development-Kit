import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancerTCPListener } from './slb.generated';
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
 * Represents a `LoadBalancerTCPListener`.
 */
export interface ILoadBalancerTCPListener extends ros.IResource {
    readonly props: LoadBalancerTCPListenerProps;
    /**
     * Attribute AclId: The ID of the network ACL that is associated with the listener.
     */
    readonly attrAclId: ros.IResolvable | string;
    /**
     * Attribute AclIds: The ID list of the network ACL that is associated with the listener.
     */
    readonly attrAclIds: ros.IResolvable | string;
    /**
     * Attribute AclStatus: Indicates whether access control is enabled.
     */
    readonly attrAclStatus: ros.IResolvable | string;
    /**
     * Attribute AclType: The type of the ACL.
     */
    readonly attrAclType: ros.IResolvable | string;
    /**
     * Attribute BackendServerPort: The backend port used by the CLB instance.
     */
    readonly attrBackendServerPort: ros.IResolvable | string;
    /**
     * Attribute Bandwidth: The maximum bandwidth of the listener. Unit: Mbit/s.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute ConnectionDrain: Indicates whether connection draining is enabled. If ConnectionDrain is set to on, the parameter is returned.
     */
    readonly attrConnectionDrain: ros.IResolvable | string;
    /**
     * Attribute ConnectionDrainTimeout: The timeout period of connection draining. If ConnectionDrain is set to on, the parameter is returned.
     */
    readonly attrConnectionDrainTimeout: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the listener.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EstablishedTimeout: The timeout period of a connection.
     */
    readonly attrEstablishedTimeout: ros.IResolvable | string;
    /**
     * Attribute HealthCheck: Indicates whether the health check feature is enabled.
     */
    readonly attrHealthCheck: ros.IResolvable | string;
    /**
     * Attribute HealthCheckConnectPort: The port that is used for health checks.
     */
    readonly attrHealthCheckConnectPort: ros.IResolvable | string;
    /**
     * Attribute HealthCheckConnectTimeout: The timeout period. Unit: seconds.
     */
    readonly attrHealthCheckConnectTimeout: ros.IResolvable | string;
    /**
     * Attribute HealthCheckDomain: The domain name that is used for health checks.
     */
    readonly attrHealthCheckDomain: ros.IResolvable | string;
    /**
     * Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.
     */
    readonly attrHealthCheckHttpCode: ros.IResolvable | string;
    /**
     * Attribute HealthCheckInterval: The interval between two consecutive health checks. Valid values: 1 to 50. Unit: seconds.
     */
    readonly attrHealthCheckInterval: ros.IResolvable | string;
    /**
     * Attribute HealthCheckMethod: The health check method.
     */
    readonly attrHealthCheckMethod: ros.IResolvable | string;
    /**
     * Attribute HealthCheckType: The health check method that is used by the TCP listener.
     */
    readonly attrHealthCheckType: ros.IResolvable | string;
    /**
     * Attribute HealthCheckUri: The URL that is used for health checks.
     */
    readonly attrHealthCheckUri: ros.IResolvable | string;
    /**
     * Attribute HealthyThreshold: The healthy threshold. The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
     */
    readonly attrHealthyThreshold: ros.IResolvable | string;
    /**
     * Attribute ListenerPort: The frontend port used by the CLB instance.
     */
    readonly attrListenerPort: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of the CLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.
     */
    readonly attrMasterSlaveServerGroupId: ros.IResolvable | string;
    /**
     * Attribute PersistenceTimeout: The timeout period of session persistence.
     */
    readonly attrPersistenceTimeout: ros.IResolvable | string;
    /**
     * Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
     */
    readonly attrProxyProtocolV2Enabled: ros.IResolvable | string;
    /**
     * Attribute Scheduler: The scheduling algorithm.
     */
    readonly attrScheduler: ros.IResolvable | string;
    /**
     * Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.
     */
    readonly attrSynProxy: ros.IResolvable | string;
    /**
     * Attribute UnhealthyThreshold: The unhealthy threshold. The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
     */
    readonly attrUnhealthyThreshold: ros.IResolvable | string;
    /**
     * Attribute VServerGroupId: The ID of the associated server group.
     */
    readonly attrVServerGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::LoadBalancerTCPListener`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancerTCPListener`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplistener
 */
export declare class LoadBalancerTCPListener extends ros.Resource implements ILoadBalancerTCPListener {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: LoadBalancerTCPListenerProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclId: The ID of the network ACL that is associated with the listener.
     */
    readonly attrAclId: ros.IResolvable | string;
    /**
     * Attribute AclIds: The ID list of the network ACL that is associated with the listener.
     */
    readonly attrAclIds: ros.IResolvable | string;
    /**
     * Attribute AclStatus: Indicates whether access control is enabled.
     */
    readonly attrAclStatus: ros.IResolvable | string;
    /**
     * Attribute AclType: The type of the ACL.
     */
    readonly attrAclType: ros.IResolvable | string;
    /**
     * Attribute BackendServerPort: The backend port used by the CLB instance.
     */
    readonly attrBackendServerPort: ros.IResolvable | string;
    /**
     * Attribute Bandwidth: The maximum bandwidth of the listener. Unit: Mbit/s.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute ConnectionDrain: Indicates whether connection draining is enabled. If ConnectionDrain is set to on, the parameter is returned.
     */
    readonly attrConnectionDrain: ros.IResolvable | string;
    /**
     * Attribute ConnectionDrainTimeout: The timeout period of connection draining. If ConnectionDrain is set to on, the parameter is returned.
     */
    readonly attrConnectionDrainTimeout: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the listener.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EstablishedTimeout: The timeout period of a connection.
     */
    readonly attrEstablishedTimeout: ros.IResolvable | string;
    /**
     * Attribute HealthCheck: Indicates whether the health check feature is enabled.
     */
    readonly attrHealthCheck: ros.IResolvable | string;
    /**
     * Attribute HealthCheckConnectPort: The port that is used for health checks.
     */
    readonly attrHealthCheckConnectPort: ros.IResolvable | string;
    /**
     * Attribute HealthCheckConnectTimeout: The timeout period. Unit: seconds.
     */
    readonly attrHealthCheckConnectTimeout: ros.IResolvable | string;
    /**
     * Attribute HealthCheckDomain: The domain name that is used for health checks.
     */
    readonly attrHealthCheckDomain: ros.IResolvable | string;
    /**
     * Attribute HealthCheckHttpCode: The HTTP status code for a successful health check.
     */
    readonly attrHealthCheckHttpCode: ros.IResolvable | string;
    /**
     * Attribute HealthCheckInterval: The interval between two consecutive health checks. Valid values: 1 to 50. Unit: seconds.
     */
    readonly attrHealthCheckInterval: ros.IResolvable | string;
    /**
     * Attribute HealthCheckMethod: The health check method.
     */
    readonly attrHealthCheckMethod: ros.IResolvable | string;
    /**
     * Attribute HealthCheckType: The health check method that is used by the TCP listener.
     */
    readonly attrHealthCheckType: ros.IResolvable | string;
    /**
     * Attribute HealthCheckUri: The URL that is used for health checks.
     */
    readonly attrHealthCheckUri: ros.IResolvable | string;
    /**
     * Attribute HealthyThreshold: The healthy threshold. The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success. Valid values: 2 to 10.
     */
    readonly attrHealthyThreshold: ros.IResolvable | string;
    /**
     * Attribute ListenerPort: The frontend port used by the CLB instance.
     */
    readonly attrListenerPort: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of the CLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute MasterSlaveServerGroupId: The ID of the primary/secondary server group that is associated with the listener.
     */
    readonly attrMasterSlaveServerGroupId: ros.IResolvable | string;
    /**
     * Attribute PersistenceTimeout: The timeout period of session persistence.
     */
    readonly attrPersistenceTimeout: ros.IResolvable | string;
    /**
     * Attribute ProxyProtocolV2Enabled: Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers.
     */
    readonly attrProxyProtocolV2Enabled: ros.IResolvable | string;
    /**
     * Attribute Scheduler: The scheduling algorithm.
     */
    readonly attrScheduler: ros.IResolvable | string;
    /**
     * Attribute SynProxy: Indicates whether the SynProxy feature of CLB is enabled for protection.
     */
    readonly attrSynProxy: ros.IResolvable | string;
    /**
     * Attribute UnhealthyThreshold: The unhealthy threshold. The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail. Valid values: 2 to 10.
     */
    readonly attrUnhealthyThreshold: ros.IResolvable | string;
    /**
     * Attribute VServerGroupId: The ID of the associated server group.
     */
    readonly attrVServerGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerTCPListenerProps, enableResourcePropertyConstraint?: boolean);
}
