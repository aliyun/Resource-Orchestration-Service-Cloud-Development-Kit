import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancerAttachment } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancerAttachment as LoadBalancerAttachmentProperty };

/**
 * Properties for defining a `LoadBalancerAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-loadbalancerattachment
 */
export interface LoadBalancerAttachmentProps {

    /**
     * Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly forceAttach?: boolean | ros.IResolvable;

    /**
     * Property loadBalancerConfigs: Load balancer configuration list.
     */
    readonly loadBalancerConfigs?: Array<RosLoadBalancerAttachment.LoadBalancerConfigsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group. Valid values of N: 1 to 5.
     */
    readonly loadBalancers?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `LoadBalancerAttachment`.
 */
export interface ILoadBalancerAttachment extends ros.IResource {
    readonly props: LoadBalancerAttachmentProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESS::LoadBalancerAttachment`, which is used to add one or more Server Load Balancer (SLB) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancerAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-loadbalancerattachment
 */
export class LoadBalancerAttachment extends ros.Resource implements ILoadBalancerAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: LoadBalancerAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLoadBalancerAttachment = new RosLoadBalancerAttachment(this, id,  {
            scalingGroupId: props.scalingGroupId,
            forceAttach: props.forceAttach,
            loadBalancers: props.loadBalancers,
            loadBalancerConfigs: props.loadBalancerConfigs,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancerAttachment;
    }
}
