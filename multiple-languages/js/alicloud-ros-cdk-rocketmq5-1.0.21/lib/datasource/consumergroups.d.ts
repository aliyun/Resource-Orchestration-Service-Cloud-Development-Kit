import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroups } from './rocketmq5.generated';
export { RosConsumerGroups as ConsumerGroupsProperty };
/**
 * Properties for defining a `DATASOURCE::ROCKETMQ5::ConsumerGroups`
 */
export interface ConsumerGroupsProps {
    /**
     * Property instanceId: Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::ROCKETMQ5::ConsumerGroups`
 */
export declare class ConsumerGroups extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ConsumerGroupIds: The list of consumer group IDs.
     */
    readonly attrConsumerGroupIds: ros.IResolvable;
    /**
     * Attribute ConsumerGroups: The list of consumer groups.
     */
    readonly attrConsumerGroups: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ROCKETMQ5::ConsumerGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupsProps, enableResourcePropertyConstraint?: boolean);
}
