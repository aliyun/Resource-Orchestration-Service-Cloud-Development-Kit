import * as ros from '@alicloud/ros-cdk-core';
import { RosSubscriptions } from './mns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSubscriptions as SubscriptionsProperty };

/**
 * Properties for defining a `DATASOURCE::MNS::Subscriptions`
 */
export interface SubscriptionsProps {

    /**
     * Property topicName: Topic name.
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * Property subscriptionName: Subscription name.
     */
    readonly subscriptionName?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::MNS::Subscriptions`
 */
export class Subscriptions extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute SubscriptionIds: The list of subscription names.
     */
    public readonly attrSubscriptionIds: ros.IResolvable;

    /**
     * Attribute Subscriptions: The list of subscriptions.
     */
    public readonly attrSubscriptions: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::MNS::Subscriptions`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SubscriptionsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSubscriptions = new RosSubscriptions(this, id,  {
            subscriptionName: props.subscriptionName,
            topicName: props.topicName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSubscriptions;
        this.attrSubscriptionIds = rosSubscriptions.attrSubscriptionIds;
        this.attrSubscriptions = rosSubscriptions.attrSubscriptions;
    }
}
