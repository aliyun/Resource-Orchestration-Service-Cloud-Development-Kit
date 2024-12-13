import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroup } from './sls.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::ConsumerGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConsumerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup
 */
export declare class ConsumerGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ConsumerGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConsumerGroup: The name of the consumer group.
     */
    readonly attrConsumerGroup: ros.IResolvable;
    /**
     * Attribute Logstore: The name of the logstore to which this consumer group belongs.
     */
    readonly attrLogstore: ros.IResolvable;
    /**
     * Attribute Project: The name of the project to which the logstore belongs.
     */
    readonly attrProject: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupProps, enableResourcePropertyConstraint?: boolean);
}
