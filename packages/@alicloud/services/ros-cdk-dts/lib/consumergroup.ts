import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerGroup } from './dts.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosConsumerGroup as ConsumerGroupProperty };

/**
 * Properties for defining a `ALIYUN::DTS::ConsumerGroup`
 */
export interface ConsumerGroupProps {

    /**
     * Property consumerGroupName: Consumer group name.
     */
    readonly consumerGroupName: string;

    /**
     * Property consumerGroupPassword: Password of consumer group.
     */
    readonly consumerGroupPassword: string;

    /**
     * Property consumerGroupUserName: User name of consumer group.
     */
    readonly consumerGroupUserName: string;

    /**
     * Property subscriptionInstanceId: Subscription instance ID.
     */
    readonly subscriptionInstanceId: string;
}

/**
 * A ROS resource type:  `ALIYUN::DTS::ConsumerGroup`
 */
export class ConsumerGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ConsumerGroupID: Consumer group ID
     */
    public readonly attrConsumerGroupId: any;

    /**
     * Attribute ConsumerGroupName: Consumer group name
     */
    public readonly attrConsumerGroupName: any;

    /**
     * Attribute SubscriptionInstanceId: Subscription instance ID
     */
    public readonly attrSubscriptionInstanceId: any;

    /**
     * Create a new `ALIYUN::DTS::ConsumerGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosConsumerGroup = new RosConsumerGroup(this, id,  {
            consumerGroupPassword: props.consumerGroupPassword,
            consumerGroupUserName: props.consumerGroupUserName,
            consumerGroupName: props.consumerGroupName,
            subscriptionInstanceId: props.subscriptionInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConsumerGroup;
        this.attrConsumerGroupId = rosConsumerGroup.attrConsumerGroupId;
        this.attrConsumerGroupName = rosConsumerGroup.attrConsumerGroupName;
        this.attrSubscriptionInstanceId = rosConsumerGroup.attrSubscriptionInstanceId;
    }
}
