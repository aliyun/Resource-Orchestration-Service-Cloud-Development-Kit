// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosQueue`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queue
 */
export interface RosQueueProps {

    /**
     * @Property queueName: The name of the MNS queue.
     */
    readonly queueName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosQueueProps`
 *
 * @param properties - the TypeScript properties of a `RosQueueProps`
 *
 * @returns the result of the validation.
 */
function RosQueuePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('queueName', ros.requiredValidator)(properties.queueName));
    errors.collect(ros.propertyValidator('queueName', ros.validateString)(properties.queueName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosQueueProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MNS::Queue` resource
 *
 * @param properties - the TypeScript properties of a `RosQueueProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MNS::Queue` resource.
 */
// @ts-ignore TS6133
function rosQueuePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosQueuePropsValidator(properties).assertSuccess();
    }
    return {
      'QueueName': ros.stringToRosTemplate(properties.queueName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Queue`, which is used to query the information about a created queue.
 * @Note This class does not contain additional functions, so it is recommended to use the `Queue` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queue
 */
export class RosQueue extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Queue";

    /**
     * @Attribute ActiveMessages: The total number of active messages in the queue.
     */
    public readonly attrActiveMessages: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the queue was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DelayMessages: The total number of delayed messages in the queue.
     */
    public readonly attrDelayMessages: ros.IResolvable;

    /**
     * @Attribute DelaySeconds: The delay time after which all messages that are sent to the queue can be consumed.
     */
    public readonly attrDelaySeconds: ros.IResolvable;

    /**
     * @Attribute InactiveMessages: The total number of inactive messages in the queue.
     */
    public readonly attrInactiveMessages: ros.IResolvable;

    /**
     * @Attribute LastModifyTime: The most recent time when the queue was modified.
     */
    public readonly attrLastModifyTime: ros.IResolvable;

    /**
     * @Attribute LoggingEnabled: Specifies whether to enable the log management feature.
     */
    public readonly attrLoggingEnabled: ros.IResolvable;

    /**
     * @Attribute MaximumMessageSize: The maximum size of a message that can be sent to the queue.
     */
    public readonly attrMaximumMessageSize: ros.IResolvable;

    /**
     * @Attribute MessageRetentionPeriod: The maximum lifetime of a message in the queue. After the time that is specified by this parameter expires, the message is deleted, regardless of whether the message has been consumed.
     */
    public readonly attrMessageRetentionPeriod: ros.IResolvable;

    /**
     * @Attribute PollingWaitSeconds: The maximum time period that a ReceiveMessage request can wait till a message is in the queue.
     */
    public readonly attrPollingWaitSeconds: ros.IResolvable;

    /**
     * @Attribute QueueInternalUrl: The internal URL of the queue.
     */
    public readonly attrQueueInternalUrl: ros.IResolvable;

    /**
     * @Attribute QueueName: The name of the MNS queue.
     */
    public readonly attrQueueName: ros.IResolvable;

    /**
     * @Attribute QueueUrl: The URL of the queue.
     */
    public readonly attrQueueUrl: ros.IResolvable;

    /**
     * @Attribute VisibilityTimeout: The duration for which a message stays in the Inactive state after it is consumed from the queue.
     */
    public readonly attrVisibilityTimeout: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property queueName: The name of the MNS queue.
     */
    public queueName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQueueProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosQueue.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrActiveMessages = this.getAtt('ActiveMessages');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDelayMessages = this.getAtt('DelayMessages');
        this.attrDelaySeconds = this.getAtt('DelaySeconds');
        this.attrInactiveMessages = this.getAtt('InactiveMessages');
        this.attrLastModifyTime = this.getAtt('LastModifyTime');
        this.attrLoggingEnabled = this.getAtt('LoggingEnabled');
        this.attrMaximumMessageSize = this.getAtt('MaximumMessageSize');
        this.attrMessageRetentionPeriod = this.getAtt('MessageRetentionPeriod');
        this.attrPollingWaitSeconds = this.getAtt('PollingWaitSeconds');
        this.attrQueueInternalUrl = this.getAtt('QueueInternalUrl');
        this.attrQueueName = this.getAtt('QueueName');
        this.attrQueueUrl = this.getAtt('QueueUrl');
        this.attrVisibilityTimeout = this.getAtt('VisibilityTimeout');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.queueName = props.queueName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            queueName: this.queueName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosQueuePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosQueues`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
 */
export interface RosQueuesProps {

    /**
     * @Property queueName: Queue name.
     */
    readonly queueName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
      'QueueName': ros.stringToRosTemplate(properties.queueName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Queues`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Queues` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
 */
export class RosQueues extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Queues";

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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
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
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            queueName: this.queueName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosQueuesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSubscription`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscription
 */
export interface RosSubscriptionProps {

    /**
     * @Property subscriptionName: The name of the subscription.
     */
    readonly subscriptionName: string | ros.IResolvable;

    /**
     * @Property topicName: The name of the topic.
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSubscriptionProps`
 *
 * @param properties - the TypeScript properties of a `RosSubscriptionProps`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('subscriptionName', ros.requiredValidator)(properties.subscriptionName));
    errors.collect(ros.propertyValidator('subscriptionName', ros.validateString)(properties.subscriptionName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('topicName', ros.requiredValidator)(properties.topicName));
    errors.collect(ros.propertyValidator('topicName', ros.validateString)(properties.topicName));
    return errors.wrap('supplied properties not correct for "RosSubscriptionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MNS::Subscription` resource
 *
 * @param properties - the TypeScript properties of a `RosSubscriptionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MNS::Subscription` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSubscriptionPropsValidator(properties).assertSuccess();
    }
    return {
      'SubscriptionName': ros.stringToRosTemplate(properties.subscriptionName),
      'TopicName': ros.stringToRosTemplate(properties.topicName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Subscription`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Subscription` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscription
 */
export class RosSubscription extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Subscription";

    /**
     * @Attribute CreateTime: The time when the subscription was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Endpoint: The endpoint that is used by the subscriber to receive messages.
     */
    public readonly attrEndpoint: ros.IResolvable;

    /**
     * @Attribute FilterTag: Describes the labels by which messages are filtered in this subscription (only messages with consistent labels are pushed).
     */
    public readonly attrFilterTag: ros.IResolvable;

    /**
     * @Attribute LastModifyTime: The time when the subscription was last modified.
     */
    public readonly attrLastModifyTime: ros.IResolvable;

    /**
     * @Attribute NotifyContentFormat: The format of the message that is pushed to the endpoint.
     */
    public readonly attrNotifyContentFormat: ros.IResolvable;

    /**
     * @Attribute NotifyStrategy: The retry policy that is applied if an error occurs when Message Service (MNS) pushes messages to the endpoint.
     */
    public readonly attrNotifyStrategy: ros.IResolvable;

    /**
     * @Attribute SubscriptionName: The name of the subscription.
     */
    public readonly attrSubscriptionName: ros.IResolvable;

    /**
     * @Attribute SubscriptionURL: TThe URL of the subscription.
     */
    public readonly attrSubscriptionUrl: ros.IResolvable;

    /**
     * @Attribute TopicName: The name of the topic.
     */
    public readonly attrTopicName: ros.IResolvable;

    /**
     * @Attribute TopicOwner: The owner of the topic.
     */
    public readonly attrTopicOwner: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property subscriptionName: The name of the subscription.
     */
    public subscriptionName: string | ros.IResolvable;

    /**
     * @Property topicName: The name of the topic.
     */
    public topicName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSubscriptionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSubscription.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEndpoint = this.getAtt('Endpoint');
        this.attrFilterTag = this.getAtt('FilterTag');
        this.attrLastModifyTime = this.getAtt('LastModifyTime');
        this.attrNotifyContentFormat = this.getAtt('NotifyContentFormat');
        this.attrNotifyStrategy = this.getAtt('NotifyStrategy');
        this.attrSubscriptionName = this.getAtt('SubscriptionName');
        this.attrSubscriptionUrl = this.getAtt('SubscriptionURL');
        this.attrTopicName = this.getAtt('TopicName');
        this.attrTopicOwner = this.getAtt('TopicOwner');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.subscriptionName = props.subscriptionName;
        this.topicName = props.topicName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            subscriptionName: this.subscriptionName,
            topicName: this.topicName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSubscriptionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSubscriptions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
 */
export interface RosSubscriptionsProps {

    /**
     * @Property topicName: Topic name.
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

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
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
      'TopicName': ros.stringToRosTemplate(properties.topicName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'SubscriptionName': ros.stringToRosTemplate(properties.subscriptionName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Subscriptions`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Subscriptions` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
 */
export class RosSubscriptions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Subscriptions";

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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property subscriptionName: Subscription name.
     */
    public subscriptionName: string | ros.IResolvable | undefined;

    /**
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
        this.refreshOptions = props.refreshOptions;
        this.subscriptionName = props.subscriptionName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            topicName: this.topicName,
            refreshOptions: this.refreshOptions,
            subscriptionName: this.subscriptionName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSubscriptionsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTopic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topic
 */
export interface RosTopicProps {

    /**
     * @Property topicName: The name of the resource.
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTopicProps`
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the result of the validation.
 */
function RosTopicPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('topicName', ros.requiredValidator)(properties.topicName));
    errors.collect(ros.propertyValidator('topicName', ros.validateString)(properties.topicName));
    return errors.wrap('supplied properties not correct for "RosTopicProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MNS::Topic` resource
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MNS::Topic` resource.
 */
// @ts-ignore TS6133
function rosTopicPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTopicPropsValidator(properties).assertSuccess();
    }
    return {
      'TopicName': ros.stringToRosTemplate(properties.topicName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Topic`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topic
 */
export class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Topic";

    /**
     * @Attribute CreateTime: The time when the topic was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute LastModifyTime: The time when the topic was last modified.
     */
    public readonly attrLastModifyTime: ros.IResolvable;

    /**
     * @Attribute LoggingEnabled: Indicates whether the log management feature is enabled for the topic.
     */
    public readonly attrLoggingEnabled: ros.IResolvable;

    /**
     * @Attribute MaxMessageSize: The maximum size of a message body that is sent to the topic.
     */
    public readonly attrMaxMessageSize: ros.IResolvable;

    /**
     * @Attribute MessageCount: The number of messages in the topic.
     */
    public readonly attrMessageCount: ros.IResolvable;

    /**
     * @Attribute MessageRetentionPeriod: The retention period of the message in the topic.
     */
    public readonly attrMessageRetentionPeriod: ros.IResolvable;

    /**
     * @Attribute TopicInnerUrl: The internal URL of the topic.
     */
    public readonly attrTopicInnerUrl: ros.IResolvable;

    /**
     * @Attribute TopicName: The name of the MNS topic.
     */
    public readonly attrTopicName: ros.IResolvable;

    /**
     * @Attribute TopicUrl: The URL of the topic.
     */
    public readonly attrTopicUrl: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property topicName: The name of the resource.
     */
    public topicName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTopic.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrLastModifyTime = this.getAtt('LastModifyTime');
        this.attrLoggingEnabled = this.getAtt('LoggingEnabled');
        this.attrMaxMessageSize = this.getAtt('MaxMessageSize');
        this.attrMessageCount = this.getAtt('MessageCount');
        this.attrMessageRetentionPeriod = this.getAtt('MessageRetentionPeriod');
        this.attrTopicInnerUrl = this.getAtt('TopicInnerUrl');
        this.attrTopicName = this.getAtt('TopicName');
        this.attrTopicUrl = this.getAtt('TopicUrl');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.topicName = props.topicName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            topicName: this.topicName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTopicPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosTopics`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topics
 */
export interface RosTopicsProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

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
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'TopicName': ros.stringToRosTemplate(properties.topicName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MNS::Topics`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topics` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-topics
 */
export class RosTopics extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MNS::Topics";

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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property topicName: Topic name.
     */
    public topicName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTopics.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTopicNames = this.getAtt('TopicNames');
        this.attrTopics = this.getAtt('Topics');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.topicName = props.topicName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            topicName: this.topicName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTopicsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
