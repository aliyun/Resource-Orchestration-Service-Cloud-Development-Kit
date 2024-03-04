import * as ros from '@alicloud/ros-cdk-core';
import { RosK8sSlbBinding } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::K8sSlbBinding`, which is used to bind a Server Load Balancer (SLB) instance to an application in a Container Service for Kubernetes (ACK) cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosK8sSlbBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8sslbbinding
 */
export class K8sSlbBinding extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: K8sSlbBindingProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Address: The address of load balancer instance.
     */
    public readonly attrAddress: ros.IResolvable;

    /**
     * Attribute AppId: The ID of the application.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * Attribute ChangeOrderId: The ID of the change process.
     */
    public readonly attrChangeOrderId: ros.IResolvable;

    /**
     * Attribute LoadBalancerId: The ID of load balancer instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * Attribute LoadBalancerName: The name of load balancer instance defined in EDAS.
     */
    public readonly attrLoadBalancerName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: K8sSlbBindingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosK8sSlbBinding = new RosK8sSlbBinding(this, id,  {
            type: props.type,
            appId: props.appId,
            clusterId: props.clusterId,
            scheduler: props.scheduler,
            specification: props.specification,
            loadBalancerId: props.loadBalancerId,
            servicePortInfos: props.servicePortInfos,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosK8sSlbBinding;
        this.attrAddress = rosK8sSlbBinding.attrAddress;
        this.attrAppId = rosK8sSlbBinding.attrAppId;
        this.attrChangeOrderId = rosK8sSlbBinding.attrChangeOrderId;
        this.attrLoadBalancerId = rosK8sSlbBinding.attrLoadBalancerId;
        this.attrLoadBalancerName = rosK8sSlbBinding.attrLoadBalancerName;
    }
}
