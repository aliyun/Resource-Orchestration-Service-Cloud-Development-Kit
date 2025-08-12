import * as ros from '@alicloud/ros-cdk-core';
import { RosSubscriptions } from './mns.generated';
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
 * Represents a `Subscriptions`.
 */
export interface ISubscriptions extends ros.IResource {
    readonly props: SubscriptionsProps;
    /**
     * Attribute SubscriptionIds: The list of subscription names.
     */
    readonly attrSubscriptionIds: ros.IResolvable | string;
    /**
     * Attribute Subscriptions: The list of subscriptions.
     */
    readonly attrSubscriptions: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MNS::Subscriptions`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSubscriptions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
 */
export declare class Subscriptions extends ros.Resource implements ISubscriptions {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SubscriptionsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SubscriptionIds: The list of subscription names.
     */
    readonly attrSubscriptionIds: ros.IResolvable | string;
    /**
     * Attribute Subscriptions: The list of subscriptions.
     */
    readonly attrSubscriptions: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SubscriptionsProps, enableResourcePropertyConstraint?: boolean);
}
