import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroup } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosConsumerGroup as ConsumerGroupProperty };

/**
 * Properties for defining a `ConsumerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup
 */
export interface ConsumerGroupProps {

    /**
     * Property consumerGroup: The name of the consumer group. The name must be unique in a project.
     */
    readonly consumerGroup: string | ros.IResolvable;

    /**
     * Property logstore: The name of the Logstore.
     */
    readonly logstore: string | ros.IResolvable;

    /**
     * Property order: Specifies whether to consume data in sequence. Valid values:
     * true
     * In a shard, data is consumed in ascending order based on the value of the **__tag__:__receive_time__** field.
     * If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
     * If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
     * false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
     */
    readonly order: boolean | ros.IResolvable;

    /**
     * Property project: The name of the project.
     */
    readonly project: string | ros.IResolvable;

    /**
     * Property timeout: The timeout period. If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
     */
    readonly timeout: number | ros.IResolvable;
}

/**
 * Represents a `ConsumerGroup`.
 */
export interface IConsumerGroup extends ros.IResource {
    readonly props: ConsumerGroupProps;

    /**
     * Attribute ConsumerGroup: The name of the consumer group.
     */
    readonly attrConsumerGroup: ros.IResolvable | string;

    /**
     * Attribute Logstore: The name of the logstore to which this consumer group belongs.
     */
    readonly attrLogstore: ros.IResolvable | string;

    /**
     * Attribute Project: The name of the project to which the logstore belongs.
     */
    readonly attrProject: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::ConsumerGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConsumerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup
 */
export class ConsumerGroup extends ros.Resource implements IConsumerGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ConsumerGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConsumerGroup: The name of the consumer group.
     */
    public readonly attrConsumerGroup: ros.IResolvable | string;

    /**
     * Attribute Logstore: The name of the logstore to which this consumer group belongs.
     */
    public readonly attrLogstore: ros.IResolvable | string;

    /**
     * Attribute Project: The name of the project to which the logstore belongs.
     */
    public readonly attrProject: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosConsumerGroup = new RosConsumerGroup(this, id,  {
            order: props.order,
            project: props.project,
            timeout: props.timeout,
            logstore: props.logstore,
            consumerGroup: props.consumerGroup,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConsumerGroup;
        this.attrConsumerGroup = rosConsumerGroup.attrConsumerGroup;
        this.attrLogstore = rosConsumerGroup.attrLogstore;
        this.attrProject = rosConsumerGroup.attrProject;
    }
}
