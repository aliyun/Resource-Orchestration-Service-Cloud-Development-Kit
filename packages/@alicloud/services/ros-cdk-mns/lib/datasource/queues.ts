import * as ros from '@alicloud/ros-cdk-core';
import { RosQueues } from './mns.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MNS::Queues`, which is used to query all queues within an Alibaba Cloud account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQueues`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
 */
export class Queues extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: QueuesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute QueueNames: The list of queue names.
     */
    public readonly attrQueueNames: ros.IResolvable;

    /**
     * Attribute Queues: The list of queues.
     */
    public readonly attrQueues: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QueuesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosQueues = new RosQueues(this, id,  {
            queueName: props.queueName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQueues;
        this.attrQueueNames = rosQueues.attrQueueNames;
        this.attrQueues = rosQueues.attrQueues;
    }
}
