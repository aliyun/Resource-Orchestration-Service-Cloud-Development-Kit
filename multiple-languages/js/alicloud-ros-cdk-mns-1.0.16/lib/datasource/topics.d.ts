import * as ros from '@alicloud/ros-cdk-core';
import { RosTopics } from './mns.generated';
export { RosTopics as TopicsProperty };
/**
 * Properties for defining a `DATASOURCE::MNS::Topics`
 */
export interface TopicsProps {
    /**
     * Property topicName: Topic name.
     */
    readonly topicName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::MNS::Topics`
 */
export declare class Topics extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute TopicNames: The list of topic names.
     */
    readonly attrTopicNames: ros.IResolvable;
    /**
     * Attribute Topics: The list of topics.
     */
    readonly attrTopics: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::MNS::Topics`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: TopicsProps, enableResourcePropertyConstraint?: boolean);
}
