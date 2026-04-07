import * as ros from '@alicloud/ros-cdk-core';
import { RosInterRegionTrafficQosQueue } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInterRegionTrafficQosQueue as InterRegionTrafficQosQueueProperty };

/**
 * Properties for defining a `InterRegionTrafficQosQueue`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqosqueue
 */
export interface InterRegionTrafficQosQueueProps {

    /**
     * Property dscps: The DSCP value of the traffic packet to be matched in the current queue, ranging from 0 to 63.
     */
    readonly dscps: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * Property trafficQosPolicyId: The ID of the QoS policy.
     */
    readonly trafficQosPolicyId: string | ros.IResolvable;

    /**
     * Property bandwidth: The maximum absolute bandwidth value that can be allocated to the queue. Unit: Mbit\/s. 
     *  * The value specifies an absolute bandwidth. For example, a value of 20 specifies that the queue can consume at most 20 Mbit\/s of bandwidth. 
     *  * The sum of the bandwidth values specified for all queues that belong to the same inter-region connection cannot exceed the maximum bandwidth of the inter-region connection.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * Property interRegionTrafficQosQueueDescription: The description of the queue. This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly interRegionTrafficQosQueueDescription?: string | ros.IResolvable;

    /**
     * Property interRegionTrafficQosQueueName: The name of the queue. The name can be empty or 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly interRegionTrafficQosQueueName?: string | ros.IResolvable;

    /**
     * Property remainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue. 
     *  * Unit: percentage. For example, a value of 20 specifies that the queue can consume at most 20% of inter-region bandwidth. 
     *  * The sum of the percentage values specified for all queues that belong to the same inter-region connection cannot exceed 100%.
     */
    readonly remainBandwidthPercent?: number | ros.IResolvable;
}

/**
 * Represents a `InterRegionTrafficQosQueue`.
 */
export interface IInterRegionTrafficQosQueue extends ros.IResource {
    readonly props: InterRegionTrafficQosQueueProps;

    /**
     * Attribute Bandwidth: The maximum absolute bandwidth value that can be allocated to the queue. Unit: Mbit/s.
     */
    readonly attrBandwidth: ros.IResolvable | string;

    /**
     * Attribute Dscps: The DSCP value of the traffic packet to be matched in the current queue.
     */
    readonly attrDscps: ros.IResolvable | string;

    /**
     * Attribute EffectiveBandwidth: The actual bandwidth value of the current queue.
     */
    readonly attrEffectiveBandwidth: ros.IResolvable | string;

    /**
     * Attribute InterRegionTrafficQosQueueDescription: The description of the queue.
     */
    readonly attrInterRegionTrafficQosQueueDescription: ros.IResolvable | string;

    /**
     * Attribute InterRegionTrafficQosQueueId: The ID of the queue.
     */
    readonly attrInterRegionTrafficQosQueueId: ros.IResolvable | string;

    /**
     * Attribute InterRegionTrafficQosQueueName: The name of the queue.
     */
    readonly attrInterRegionTrafficQosQueueName: ros.IResolvable | string;

    /**
     * Attribute RemainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
     */
    readonly attrRemainBandwidthPercent: ros.IResolvable | string;

    /**
     * Attribute TrafficQosPolicyId: The ID of the QoS policy.
     */
    readonly attrTrafficQosPolicyId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::InterRegionTrafficQosQueue`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInterRegionTrafficQosQueue`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqosqueue
 */
export class InterRegionTrafficQosQueue extends ros.Resource implements IInterRegionTrafficQosQueue {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InterRegionTrafficQosQueueProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Bandwidth: The maximum absolute bandwidth value that can be allocated to the queue. Unit: Mbit/s.
     */
    public readonly attrBandwidth: ros.IResolvable | string;

    /**
     * Attribute Dscps: The DSCP value of the traffic packet to be matched in the current queue.
     */
    public readonly attrDscps: ros.IResolvable | string;

    /**
     * Attribute EffectiveBandwidth: The actual bandwidth value of the current queue.
     */
    public readonly attrEffectiveBandwidth: ros.IResolvable | string;

    /**
     * Attribute InterRegionTrafficQosQueueDescription: The description of the queue.
     */
    public readonly attrInterRegionTrafficQosQueueDescription: ros.IResolvable | string;

    /**
     * Attribute InterRegionTrafficQosQueueId: The ID of the queue.
     */
    public readonly attrInterRegionTrafficQosQueueId: ros.IResolvable | string;

    /**
     * Attribute InterRegionTrafficQosQueueName: The name of the queue.
     */
    public readonly attrInterRegionTrafficQosQueueName: ros.IResolvable | string;

    /**
     * Attribute RemainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.
     */
    public readonly attrRemainBandwidthPercent: ros.IResolvable | string;

    /**
     * Attribute TrafficQosPolicyId: The ID of the QoS policy.
     */
    public readonly attrTrafficQosPolicyId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InterRegionTrafficQosQueueProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInterRegionTrafficQosQueue = new RosInterRegionTrafficQosQueue(this, id,  {
            remainBandwidthPercent: props.remainBandwidthPercent,
            dscps: props.dscps,
            interRegionTrafficQosQueueName: props.interRegionTrafficQosQueueName,
            bandwidth: props.bandwidth,
            trafficQosPolicyId: props.trafficQosPolicyId,
            interRegionTrafficQosQueueDescription: props.interRegionTrafficQosQueueDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInterRegionTrafficQosQueue;
        this.attrBandwidth = rosInterRegionTrafficQosQueue.attrBandwidth;
        this.attrDscps = rosInterRegionTrafficQosQueue.attrDscps;
        this.attrEffectiveBandwidth = rosInterRegionTrafficQosQueue.attrEffectiveBandwidth;
        this.attrInterRegionTrafficQosQueueDescription = rosInterRegionTrafficQosQueue.attrInterRegionTrafficQosQueueDescription;
        this.attrInterRegionTrafficQosQueueId = rosInterRegionTrafficQosQueue.attrInterRegionTrafficQosQueueId;
        this.attrInterRegionTrafficQosQueueName = rosInterRegionTrafficQosQueue.attrInterRegionTrafficQosQueueName;
        this.attrRemainBandwidthPercent = rosInterRegionTrafficQosQueue.attrRemainBandwidthPercent;
        this.attrTrafficQosPolicyId = rosInterRegionTrafficQosQueue.attrTrafficQosPolicyId;
    }
}
