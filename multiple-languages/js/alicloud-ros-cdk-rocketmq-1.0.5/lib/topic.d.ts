import * as ros from '@alicloud/ros-cdk-core';
import { RosTopic } from './rocketmq.generated';
export { RosTopic as TopicProperty };
/**
 * Properties for defining a `ALIYUN::ROCKETMQ::Topic`
 */
export interface TopicProps {
    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property messageType: The type of the message. Valid values:
     * 0: normal message
     * 1: partitionally ordered message
     * 2: globally ordered message
     * 4: transactional message
     * 5: scheduled/delayed message
     */
    readonly messageType: number | ros.IResolvable;
    /**
     * Property topic: The name of the topic you want to create.
     * Note:
     * "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
     * If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
     * If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
     */
    readonly topic: string | ros.IResolvable;
    /**
     * Property perm: Set the read-write mode for the topic Valid values.:
     * 6: Both read and write operations are supported.
     * 4: Write operation is prohibited.
     * 2: Read operation is prohibited.
     */
    readonly perm?: number | ros.IResolvable;
    /**
     * Property remark: The remarks on the request. This parameter can be left blank.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ROCKETMQ::Topic`
 */
export declare class Topic extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute MessageType: The type of the message.
     */
    readonly attrMessageType: ros.IResolvable;
    /**
     * Attribute Topic: The name of the topic.
     */
    readonly attrTopic: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ROCKETMQ::Topic`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicProps, enableResourcePropertyConstraint?: boolean);
}
