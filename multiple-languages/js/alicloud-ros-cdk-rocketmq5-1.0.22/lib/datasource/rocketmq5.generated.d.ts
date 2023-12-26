import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosConsumerGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroups
 */
export interface RosConsumerGroupsProps {
    /**
     * @Property instanceId: Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROCKETMQ5::ConsumerGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroups
 */
export declare class RosConsumerGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROCKETMQ5::ConsumerGroups";
    /**
     * @Attribute ConsumerGroupIds: The list of consumer group IDs.
     */
    readonly attrConsumerGroupIds: ros.IResolvable;
    /**
     * @Attribute ConsumerGroups: The list of consumer groups.
     */
    readonly attrConsumerGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Instance ID.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
