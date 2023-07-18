import * as ros from '@alicloud/ros-cdk-core';
import { RosQueues } from './mns.generated';
export { RosQueues as QueuesProperty };
/**
 * Properties for defining a `DATASOURCE::MNS::Queues`
 */
export interface QueuesProps {
    /**
     * Property queueName: Queue name.
     */
    readonly queueName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::MNS::Queues`
 */
export declare class Queues extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute QueueNames: The list of queue names.
     */
    readonly attrQueueNames: ros.IResolvable;
    /**
     * Attribute Queues: The list of queues.
     */
    readonly attrQueues: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::MNS::Queues`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: QueuesProps, enableResourcePropertyConstraint?: boolean);
}
