import * as ros from '@alicloud/ros-cdk-core';
import { RosQueues } from './mns.generated';
export { RosQueues as QueuesProperty };
/**
 * Properties for defining a `Queues`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
 */
export interface QueuesProps {
    /**
     * Property queueName: Queue name.
     */
    readonly queueName?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Queues`.
 */
export interface IQueues extends ros.IResource {
    readonly props: QueuesProps;
    /**
     * Attribute QueueNames: The list of queue names.
     */
    readonly attrQueueNames: ros.IResolvable | string;
    /**
     * Attribute Queues: The list of queues.
     */
    readonly attrQueues: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MNS::Queues`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQueues`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
 */
export declare class Queues extends ros.Resource implements IQueues {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: QueuesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute QueueNames: The list of queue names.
     */
    readonly attrQueueNames: ros.IResolvable | string;
    /**
     * Attribute Queues: The list of queues.
     */
    readonly attrQueues: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: QueuesProps, enableResourcePropertyConstraint?: boolean);
}
