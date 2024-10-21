import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancerTCPListeners } from './slb.generated';
export { RosLoadBalancerTCPListeners as LoadBalancerTCPListenersProperty };
/**
 * Properties for defining a `LoadBalancerTCPListeners`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners
 */
export interface LoadBalancerTCPListenersProps {
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::LoadBalancerTCPListeners`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancerTCPListeners`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancertcplisteners
 */
export declare class LoadBalancerTCPListeners extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LoadBalancerTCPListenersProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ListenerPorts: The list of listener ports.
     */
    readonly attrListenerPorts: ros.IResolvable;
    /**
     * Attribute LoadBalancerTCPListeners: The list of load balancer tcp listeners.
     */
    readonly attrLoadBalancerTcpListeners: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerTCPListenersProps, enableResourcePropertyConstraint?: boolean);
}
