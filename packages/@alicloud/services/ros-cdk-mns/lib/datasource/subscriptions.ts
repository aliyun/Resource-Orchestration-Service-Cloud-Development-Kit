import * as ros from '@alicloud/ros-cdk-core';
import { RosSubscriptions } from './mns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSubscriptions as SubscriptionsProperty };

/**
 * Properties for defining a `Subscriptions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
 */
export interface SubscriptionsProps {

    /**
     * Property topicName: Topic name.
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property subscriptionName: Subscription name.
     */
    readonly subscriptionName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MNS::Subscriptions`, which is used to query the information about subscriptions.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSubscriptions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
 */
export class Subscriptions extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SubscriptionsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SubscriptionIds: The list of subscription names.
     */
    public readonly attrSubscriptionIds: ros.IResolvable;

    /**
     * Attribute Subscriptions: The list of subscriptions.
     */
    public readonly attrSubscriptions: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SubscriptionsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSubscriptions = new RosSubscriptions(this, id,  {
            subscriptionName: props.subscriptionName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            topicName: props.topicName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSubscriptions;
        this.attrSubscriptionIds = rosSubscriptions.attrSubscriptionIds;
        this.attrSubscriptions = rosSubscriptions.attrSubscriptions;
    }
}
