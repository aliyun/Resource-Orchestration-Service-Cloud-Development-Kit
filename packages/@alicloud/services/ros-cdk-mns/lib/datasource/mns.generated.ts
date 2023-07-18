// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::MNS::Queues`
 */
export interface RosQueuesProps {

    /**
     * @Property queueName: Queue name.
     */
    readonly queueName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosQueuesProps`
 *
 * @param properties - the TypeScript properties of a `RosQueuesProps`
 *
 * @returns the result of the validation.
 */
function RosQueuesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('queueName', ros.validateString)(properties.queueName));
    return errors.wrap('supplied properties not correct for "RosQueuesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MNS::Queues` resource
 *
 * @param properties - the TypeScript properties of a `RosQueuesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MNS::Queues` resource.
 */
// @ts-ignore TS6133
function rosQueuesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosQueuesPropsValidator(properties).assertSuccess();
    }
    return {
      QueueName: ros.stringToRosTemplate(properties.queueName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::MNS::Queues`
 */
export class RosQueues extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Queues";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute QueueNames: The list of queue names.
     */
    public readonly attrQueueNames: ros.IResolvable;

    /**
     * @Attribute Queues: The list of queues.
     */
    public readonly attrQueues: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property queueName: Queue name.
     */
    public queueName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::MNS::Queues`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQueuesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosQueues.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrQueueNames = this.getAtt('QueueNames');
        this.attrQueues = this.getAtt('Queues');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.queueName = props.queueName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            queueName: this.queueName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosQueuesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::MNS::Subscriptions`
 */
export interface RosSubscriptionsProps {

    /**
     * @Property topicName: Topic name.
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * @Property subscriptionName: Subscription name.
     */
    readonly subscriptionName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSubscriptionsProps`
 *
 * @param properties - the TypeScript properties of a `RosSubscriptionsProps`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('subscriptionName', ros.validateString)(properties.subscriptionName));
    errors.collect(ros.propertyValidator('topicName', ros.requiredValidator)(properties.topicName));
    errors.collect(ros.propertyValidator('topicName', ros.validateString)(properties.topicName));
    return errors.wrap('supplied properties not correct for "RosSubscriptionsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MNS::Subscriptions` resource
 *
 * @param properties - the TypeScript properties of a `RosSubscriptionsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MNS::Subscriptions` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSubscriptionsPropsValidator(properties).assertSuccess();
    }
    return {
      TopicName: ros.stringToRosTemplate(properties.topicName),
      SubscriptionName: ros.stringToRosTemplate(properties.subscriptionName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::MNS::Subscriptions`
 */
export class RosSubscriptions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Subscriptions";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SubscriptionIds: The list of subscription names.
     */
    public readonly attrSubscriptionIds: ros.IResolvable;

    /**
     * @Attribute Subscriptions: The list of subscriptions.
     */
    public readonly attrSubscriptions: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property topicName: Topic name.
     */
    public topicName: string | ros.IResolvable;

    /**
     * @Property subscriptionName: Subscription name.
     */
    public subscriptionName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::MNS::Subscriptions`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSubscriptionsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSubscriptions.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSubscriptionIds = this.getAtt('SubscriptionIds');
        this.attrSubscriptions = this.getAtt('Subscriptions');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.topicName = props.topicName;
        this.subscriptionName = props.subscriptionName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            topicName: this.topicName,
            subscriptionName: this.subscriptionName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSubscriptionsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::MNS::Topics`
 */
export interface RosTopicsProps {

    /**
     * @Property topicName: Topic name.
     */
    readonly topicName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTopicsProps`
 *
 * @param properties - the TypeScript properties of a `RosTopicsProps`
 *
 * @returns the result of the validation.
 */
function RosTopicsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('topicName', ros.validateString)(properties.topicName));
    return errors.wrap('supplied properties not correct for "RosTopicsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MNS::Topics` resource
 *
 * @param properties - the TypeScript properties of a `RosTopicsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MNS::Topics` resource.
 */
// @ts-ignore TS6133
function rosTopicsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTopicsPropsValidator(properties).assertSuccess();
    }
    return {
      TopicName: ros.stringToRosTemplate(properties.topicName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::MNS::Topics`
 */
export class RosTopics extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Topics";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute TopicNames: The list of topic names.
     */
    public readonly attrTopicNames: ros.IResolvable;

    /**
     * @Attribute Topics: The list of topics.
     */
    public readonly attrTopics: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property topicName: Topic name.
     */
    public topicName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::MNS::Topics`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTopics.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTopicNames = this.getAtt('TopicNames');
        this.attrTopics = this.getAtt('Topics');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.topicName = props.topicName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            topicName: this.topicName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTopicsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
