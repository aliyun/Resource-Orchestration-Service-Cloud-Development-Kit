import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroups } from './rocketmq5.generated';
export { RosConsumerGroups as ConsumerGroupsProperty };
/**
 * Properties for defining a `ConsumerGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroups
 */
export interface ConsumerGroupsProps {
    /**
     * Property instanceId: Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROCKETMQ5::ConsumerGroups`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConsumerGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroups
 */
export declare class ConsumerGroups extends ros.Resource {
    /**
     * Attribute ConsumerGroupIds: The list of consumer group IDs.
     */
    readonly attrConsumerGroupIds: ros.IResolvable;
    /**
     * Attribute ConsumerGroups: The list of consumer groups.
     */
    readonly attrConsumerGroups: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupsProps, enableResourcePropertyConstraint?: boolean);
}
