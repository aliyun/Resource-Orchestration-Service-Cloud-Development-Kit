import * as ros from '@alicloud/ros-cdk-core';
import { RosTopics } from './kafka.generated';
export { RosTopics as TopicsProperty };
/**
 * Properties for defining a `Topics`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topics
 */
export interface TopicsProps {
    /**
     * Property instanceId: Resource id.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property topic: Topic Name.
     */
    readonly topic: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KAFKA::Topics`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTopics`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topics
 */
export declare class Topics extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TopicsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Topics: The list of topics.
     */
    readonly attrTopics: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TopicsProps, enableResourcePropertyConstraint?: boolean);
}
