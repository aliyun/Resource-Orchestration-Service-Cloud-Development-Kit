import * as ros from '@alicloud/ros-cdk-core';
import { RosTopics } from './mns.generated';
export { RosTopics as TopicsProperty };
/**
 * Properties for defining a `Topics`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topics
 */
export interface TopicsProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property topicName: Topic name.
     */
    readonly topicName?: string | ros.IResolvable;
}
/**
 * Represents a `Topics`.
 */
export interface ITopics extends ros.IResource {
    readonly props: TopicsProps;
    /**
     * Attribute TopicNames: The list of topic names.
     */
    readonly attrTopicNames: ros.IResolvable | string;
    /**
     * Attribute Topics: The list of topics.
     */
    readonly attrTopics: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MNS::Topics`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopics`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topics
 */
export declare class Topics extends ros.Resource implements ITopics {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TopicsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute TopicNames: The list of topic names.
     */
    readonly attrTopicNames: ros.IResolvable | string;
    /**
     * Attribute Topics: The list of topics.
     */
    readonly attrTopics: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: TopicsProps, enableResourcePropertyConstraint?: boolean);
}
