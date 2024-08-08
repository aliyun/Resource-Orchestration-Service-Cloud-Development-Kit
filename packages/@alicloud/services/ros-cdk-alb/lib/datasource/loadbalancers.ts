import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancers } from './alb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancers as LoadBalancersProperty };

/**
 * Properties for defining a `LoadBalancers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-alb-loadbalancers
 */
export interface LoadBalancersProps {

    /**
     * Property addressType: The address type of the load balancing instance.
     */
    readonly addressType?: string | ros.IResolvable;

    /**
     * Property loadBalancerBussinessStatus: Service status of application load balancing
     */
    readonly loadBalancerBussinessStatus?: string | ros.IResolvable;

    /**
     * Property loadBalancerIds: IDs of the load balancer instance.
     */
    readonly loadBalancerIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property loadBalancerNames: Names of the load balancing instance.
     */
    readonly loadBalancerNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property loadBalancerStatus: The status of SLB.
     */
    readonly loadBalancerStatus?: string | ros.IResolvable;

    /**
     * Property payType: Load balancing instance payment type
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags of Alb.
     */
    readonly tags?: RosLoadBalancers.TagsProperty[];

    /**
     * Property vpcIds: VPC IDs
     */
    readonly vpcIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property zoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ALB::LoadBalancers`, which is used to query the basic information about created Application Load Balancer (ALB) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancers`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-alb-loadbalancers
 */
export class LoadBalancers extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LoadBalancersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute LoadBalancerIds: The list of load balancer IDs.
     */
    public readonly attrLoadBalancerIds: ros.IResolvable;

    /**
     * Attribute LoadBalancers: The list of load balancers.
     */
    public readonly attrLoadBalancers: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLoadBalancers = new RosLoadBalancers(this, id,  {
            loadBalancerNames: props.loadBalancerNames,
            loadBalancerBussinessStatus: props.loadBalancerBussinessStatus,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            vpcIds: props.vpcIds,
            loadBalancerIds: props.loadBalancerIds,
            payType: props.payType,
            addressType: props.addressType,
            loadBalancerStatus: props.loadBalancerStatus,
            tags: props.tags,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancers;
        this.attrLoadBalancerIds = rosLoadBalancers.attrLoadBalancerIds;
        this.attrLoadBalancers = rosLoadBalancers.attrLoadBalancers;
    }
}
