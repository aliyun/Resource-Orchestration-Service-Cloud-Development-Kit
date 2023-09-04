import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::ROCKETMQ::Groups`
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
 * A ROS template type:  `DATASOURCE::ROCKETMQ::Groups`
 */
export declare class RosGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ::Groups";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::ROCKETMQ::Groups`.
     *
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
 * Properties for defining a `DATASOURCE::ROCKETMQ::Instances`
 */
export interface RosInstancesProps {
}
/**
 * A ROS template type:  `DATASOURCE::ROCKETMQ::Instances`
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ::Instances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::ROCKETMQ::Instances`.
     *
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
 * Properties for defining a `DATASOURCE::ROCKETMQ::Topics`
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
 * A ROS template type:  `DATASOURCE::ROCKETMQ::Topics`
 */
export declare class RosTopics extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ::Topics";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::ROCKETMQ::Topics`.
     *
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
