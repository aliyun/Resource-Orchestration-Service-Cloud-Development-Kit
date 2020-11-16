import * as ros from '@ros-cdk/core';
import { RosTopic } from './kafka.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTopic as TopicProperty };

/**
 * Properties for defining a `ALIYUN::KAFKA::Topic`
 */
export interface TopicProps {

    /**
     * @Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
     * You can call the GetInstanceList operation to query instances.
     */
    readonly instanceId: string;

    /**
     * @Property remark: The description of the topic. The value of this parameter must meet the following
     * requirements:
     * The value can only contain letters, digits, hyphens (-), and underscores (_).
     * The value must be 3 to 64 characters in length.
     */
    readonly remark: string;

    /**
     * @Property topic: The name of the topic. The value of this parameter must meet the following requirements:
     * The name can only contain letters, digits, hyphens (-), and underscores (_).
     * The name must be 3 to 64 characters in length, and will be automatically truncated
     * if it contains more characters.
     * The name cannot be modified after being created.
     */
    readonly topic: string;

    /**
     * @Property partitionNum: The number of partitions in the topic. Valid values:
     * 1 to 48
     * We recommend that you set the number of partitions to a multiple of 6 to reduce the
     * risk of data skew.Note:For special requirements,submit a ticket.
     */
    readonly partitionNum?: number;
}

/**
 * A ROS resource type:  `ALIYUN::KAFKA::Topic`
 */
export class Topic extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
You can call the GetInstanceList operation to query instances.
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute Topic: Topic name.
     */
    public readonly attrTopic: any;

    /**
     * Create a new `ALIYUN::KAFKA::Topic`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTopic = new RosTopic(this, id,  {
            partitionNum: props.partitionNum,
            instanceId: props.instanceId,
            topic: props.topic,
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTopic;
        this.attrInstanceId = rosTopic.attrInstanceId;
        this.attrTopic = rosTopic.attrTopic;
    }
}
