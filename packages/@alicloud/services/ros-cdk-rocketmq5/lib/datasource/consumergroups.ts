import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroups } from './rocketmq5.generated';
// Generated from the AliCloud ROS Resource Specification
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

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `ConsumerGroups`.
 */
export interface IConsumerGroups extends ros.IResource {
    readonly props: ConsumerGroupsProps;

    /**
     * Attribute ConsumerGroupIds: The list of consumer group IDs.
     */
    readonly attrConsumerGroupIds: ros.IResolvable | string;

    /**
     * Attribute ConsumerGroups: The list of consumer groups.
     */
    readonly attrConsumerGroups: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROCKETMQ5::ConsumerGroups`, which is used to query consumer groups in ApsaraMQ for RocketMQ 5.0.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConsumerGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq5-consumergroups
 */
export class ConsumerGroups extends ros.Resource implements IConsumerGroups {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ConsumerGroupsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConsumerGroupIds: The list of consumer group IDs.
     */
    public readonly attrConsumerGroupIds: ros.IResolvable | string;

    /**
     * Attribute ConsumerGroups: The list of consumer groups.
     */
    public readonly attrConsumerGroups: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosConsumerGroups = new RosConsumerGroups(this, id,  {
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConsumerGroups;
        this.attrConsumerGroupIds = rosConsumerGroups.attrConsumerGroupIds;
        this.attrConsumerGroups = rosConsumerGroups.attrConsumerGroups;
    }
}
