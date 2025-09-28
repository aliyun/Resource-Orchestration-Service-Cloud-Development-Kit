import * as ros from '@alicloud/ros-cdk-core';
import { RosK8sSlbBinding } from './edas.generated';
export { RosK8sSlbBinding as K8sSlbBindingProperty };
/**
 * Properties for defining a `K8sSlbBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sslbbinding
 */
export interface K8sSlbBindingProps {
    /**
     * Property appId: The ID of the application.
     */
    readonly appId: string | ros.IResolvable;
    /**
     * Property clusterId: The ID of the cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property servicePortInfos: The information about the ports.
     */
    readonly servicePortInfos: Array<RosK8sSlbBinding.ServicePortInfosProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property type: The type of the SLB instance. Valid values: internet and intranet.
     */
    readonly type: string | ros.IResolvable;
    /**
     * Property loadBalancerId: The ID of the load balancer instance. If you leave this parameter empty, Enterprise Distributed Application Service (EDAS) automatically purchases an SLB instance.
     */
    readonly loadBalancerId?: string | ros.IResolvable;
    /**
     * Property scheduler: The scheduling algorithm. Valid values:
     * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
     * rr: Requests are distributed to backend servers in sequence.
     * Default value: rr
     */
    readonly scheduler?: string | ros.IResolvable;
    /**
     * Property specification: The specification of the load balancer instance.
     */
    readonly specification?: string | ros.IResolvable;
}
/**
 * Represents a `K8sSlbBinding`.
 */
export interface IK8sSlbBinding extends ros.IResource {
    readonly props: K8sSlbBindingProps;
    /**
     * Attribute Address: The address of load balancer instance.
     */
    readonly attrAddress: ros.IResolvable | string;
    /**
     * Attribute AppId: The ID of the application.
     */
    readonly attrAppId: ros.IResolvable | string;
    /**
     * Attribute ChangeOrderId: The ID of the change process.
     */
    readonly attrChangeOrderId: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of load balancer instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerName: The name of load balancer instance defined in EDAS.
     */
    readonly attrLoadBalancerName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::K8sSlbBinding`, which is used to bind a Server Load Balancer (SLB) instance to an application in a Container Service for Kubernetes (ACK) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosK8sSlbBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sslbbinding
 */
export declare class K8sSlbBinding extends ros.Resource implements IK8sSlbBinding {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: K8sSlbBindingProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Address: The address of load balancer instance.
     */
    readonly attrAddress: ros.IResolvable | string;
    /**
     * Attribute AppId: The ID of the application.
     */
    readonly attrAppId: ros.IResolvable | string;
    /**
     * Attribute ChangeOrderId: The ID of the change process.
     */
    readonly attrChangeOrderId: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of load balancer instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerName: The name of load balancer instance defined in EDAS.
     */
    readonly attrLoadBalancerName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: K8sSlbBindingProps, enableResourcePropertyConstraint?: boolean);
}
