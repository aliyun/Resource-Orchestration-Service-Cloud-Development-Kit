import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficQosQueue } from './vpc.generated';
export { RosTrafficQosQueue as TrafficQosQueueProperty };
/**
 * Properties for defining a `TrafficQosQueue`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosqueue
 */
export interface TrafficQosQueueProps {
    /**
     * Property qosId: The ID of the QoS policy.
     */
    readonly qosId: string | ros.IResolvable;
    /**
     * Property queueType: QoS queue type, value:
     * - **High**: High priority queue.
     * - **Medium**: Normal priority queue.
     * - **Default**: the Default priority queue.
     * > Default priority queue cannot be created.
     */
    readonly queueType: string | ros.IResolvable;
    /**
     * Property bandwidthPercent: QoS queue bandwidth percentage.
     * * When the QoS queue type is **Medium**, this field must be entered. Valid values: 1 to 100.
     * * When the QoS queue type is **Default**, this field is "-".
     */
    readonly bandwidthPercent?: string | ros.IResolvable;
    /**
     * Property queueDescription: The description of the QoS queue.
     * The length is 0 to 256 characters and cannot start with 'http:\/\/ 'or 'https.
     */
    readonly queueDescription?: string | ros.IResolvable;
    /**
     * Property queueName: The name of the QoS queue.
     * The length is 0 to 128 characters and cannot start with 'http:\/\/ 'or 'https.
     */
    readonly queueName?: string | ros.IResolvable;
}
/**
 * Represents a `TrafficQosQueue`.
 */
export interface ITrafficQosQueue extends ros.IResource {
    readonly props: TrafficQosQueueProps;
    /**
     * Attribute BandwidthPercent: QoS queue bandwidth percentage.
     */
    readonly attrBandwidthPercent: ros.IResolvable | string;
    /**
     * Attribute QosId: The ID of the QoS policy.
     */
    readonly attrQosId: ros.IResolvable | string;
    /**
     * Attribute QueueDescription: The description of the QoS queue.
     */
    readonly attrQueueDescription: ros.IResolvable | string;
    /**
     * Attribute QueueId: The ID of the QoS queue.
     */
    readonly attrQueueId: ros.IResolvable | string;
    /**
     * Attribute QueueName: The name of the QoS queue.
     */
    readonly attrQueueName: ros.IResolvable | string;
    /**
     * Attribute QueueType: QoS queue type.
     */
    readonly attrQueueType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::TrafficQosQueue`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficQosQueue`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosqueue
 */
export declare class TrafficQosQueue extends ros.Resource implements ITrafficQosQueue {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TrafficQosQueueProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BandwidthPercent: QoS queue bandwidth percentage.
     */
    readonly attrBandwidthPercent: ros.IResolvable | string;
    /**
     * Attribute QosId: The ID of the QoS policy.
     */
    readonly attrQosId: ros.IResolvable | string;
    /**
     * Attribute QueueDescription: The description of the QoS queue.
     */
    readonly attrQueueDescription: ros.IResolvable | string;
    /**
     * Attribute QueueId: The ID of the QoS queue.
     */
    readonly attrQueueId: ros.IResolvable | string;
    /**
     * Attribute QueueName: The name of the QoS queue.
     */
    readonly attrQueueName: ros.IResolvable | string;
    /**
     * Attribute QueueType: QoS queue type.
     */
    readonly attrQueueType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficQosQueueProps, enableResourcePropertyConstraint?: boolean);
}
