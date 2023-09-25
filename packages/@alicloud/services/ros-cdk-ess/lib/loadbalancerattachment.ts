import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancerAttachment } from './ess.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancerAttachment as LoadBalancerAttachmentProperty };

/**
 * Properties for defining a `ALIYUN::ESS::LoadBalancerAttachment`
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
 * A ROS resource type:  `ALIYUN::ESS::LoadBalancerAttachment`
 */
export class LoadBalancerAttachment extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::ESS::LoadBalancerAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosLoadBalancerAttachment = new RosLoadBalancerAttachment(this, id,  {
            scalingGroupId: props.scalingGroupId,
            forceAttach: props.forceAttach,
            loadBalancers: props.loadBalancers,
            loadBalancerConfigs: props.loadBalancerConfigs,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancerAttachment;
    }
}
