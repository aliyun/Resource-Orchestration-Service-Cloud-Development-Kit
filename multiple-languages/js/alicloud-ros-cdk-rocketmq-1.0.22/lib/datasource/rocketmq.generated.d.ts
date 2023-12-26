import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-groups
 */
export interface RosGroupsProps {
    /**
     * @Property groupName: GroupName
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property groupType: GroupType
     */
    readonly groupType?: string | ros.IResolvable;
    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ::Groups`, which is used to query the groups in Message Queue for Apache RocketMQ.
 * @Note This class does not contain additional functions, so it is recommended to use the `Groups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-groups
 */
export declare class RosGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ::Groups";
    /**
     * @Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable;
    /**
     * @Attribute Groups: The list of groups.
     */
    readonly attrGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: GroupName
     */
    groupName: string | ros.IResolvable | undefined;
    /**
     * @Property groupType: GroupType
     */
    groupType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: InstanceId
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-instances
 */
export interface RosInstancesProps {
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ::Instances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ::Instances";
    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosTopics`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-topics
 */
export interface RosTopicsProps {
    /**
     * @Property instanceId: InstanceId
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property topicName: TopicName
     */
    readonly topicName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ::Topics`, which is used to query topics in Message Queue for Apache RocketMQ.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topics` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-topics
 */
export declare class RosTopics extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ::Topics";
    /**
     * @Attribute TopicNames: The list of topic names.
     */
    readonly attrTopicNames: ros.IResolvable;
    /**
     * @Attribute Topics: The list of topics.
     */
    readonly attrTopics: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: InstanceId
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property topicName: TopicName
     */
    topicName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
