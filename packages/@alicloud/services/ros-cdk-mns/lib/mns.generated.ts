// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::MNS::Queue`
 */
export interface RosQueueProps {

    /**
     * @Property queueName: Queue name
     */
    readonly queueName: string;

    /**
     * @Property delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
     * An integer between 0 and 604800 (7 days). The default value is 0
     */
    readonly delaySeconds?: number;

    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. 
     * The default value is false
     */
    readonly loggingEnabled?: boolean | ros.IResolvable;

    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
     * An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
     */
    readonly maximumMessageSize?: number;

    /**
     * @Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
     * An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
     */
    readonly messageRetentionPeriod?: number;

    /**
     * @Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
     * An integer between 0 and 30 seconds. The default value is 0 (seconds)
     */
    readonly pollingWaitSeconds?: number;

    /**
     * @Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
     * An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
     */
    readonly visibilityTimeout?: number;
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
    if(properties.delaySeconds && (typeof properties.delaySeconds) !== 'object') {
        errors.collect(ros.propertyValidator('delaySeconds', ros.validateRange)({
            data: properties.delaySeconds,
            min: 0,
            max: 604800,
          }));
    }
    errors.collect(ros.propertyValidator('delaySeconds', ros.validateNumber)(properties.delaySeconds));
    if(properties.pollingWaitSeconds && (typeof properties.pollingWaitSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('pollingWaitSeconds', ros.validateRange)({
            data: properties.pollingWaitSeconds,
            min: 0,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('pollingWaitSeconds', ros.validateNumber)(properties.pollingWaitSeconds));
    if(properties.messageRetentionPeriod && (typeof properties.messageRetentionPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('messageRetentionPeriod', ros.validateRange)({
            data: properties.messageRetentionPeriod,
            min: 60,
            max: 604800,
          }));
    }
    errors.collect(ros.propertyValidator('messageRetentionPeriod', ros.validateNumber)(properties.messageRetentionPeriod));
    if(properties.maximumMessageSize && (typeof properties.maximumMessageSize) !== 'object') {
        errors.collect(ros.propertyValidator('maximumMessageSize', ros.validateRange)({
            data: properties.maximumMessageSize,
            min: 1024,
            max: 65536,
          }));
    }
    errors.collect(ros.propertyValidator('maximumMessageSize', ros.validateNumber)(properties.maximumMessageSize));
    if(properties.visibilityTimeout && (typeof properties.visibilityTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('visibilityTimeout', ros.validateRange)({
            data: properties.visibilityTimeout,
            min: 1,
            max: 43200,
          }));
    }
    errors.collect(ros.propertyValidator('visibilityTimeout', ros.validateNumber)(properties.visibilityTimeout));
    errors.collect(ros.propertyValidator('queueName', ros.requiredValidator)(properties.queueName));
    if(properties.queueName && (Array.isArray(properties.queueName) || (typeof properties.queueName) === 'string')) {
        errors.collect(ros.propertyValidator('queueName', ros.validateLength)({
            data: properties.queueName.length,
            min: 1,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('queueName', ros.validateString)(properties.queueName));
    errors.collect(ros.propertyValidator('loggingEnabled', ros.validateBoolean)(properties.loggingEnabled));
    return errors.wrap('supplied properties not correct for "RosQueueProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MNS::Queue` resource
 *
 * @param properties - the TypeScript properties of a `RosQueueProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MNS::Queue` resource.
 */
// @ts-ignore TS6133
function rosQueuePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosQueuePropsValidator(properties).assertSuccess();
    }
    return {
      QueueName: ros.stringToRosTemplate(properties.queueName),
      DelaySeconds: ros.numberToRosTemplate(properties.delaySeconds),
      LoggingEnabled: ros.booleanToRosTemplate(properties.loggingEnabled),
      MaximumMessageSize: ros.numberToRosTemplate(properties.maximumMessageSize),
      MessageRetentionPeriod: ros.numberToRosTemplate(properties.messageRetentionPeriod),
      PollingWaitSeconds: ros.numberToRosTemplate(properties.pollingWaitSeconds),
      VisibilityTimeout: ros.numberToRosTemplate(properties.visibilityTimeout),
    };
}

/**
 * A ROS template type:  `ALIYUN::MNS::Queue`
 */
export class RosQueue extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MNS::Queue";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName
     */
    public readonly attrArnWithSlash: any;

    /**
     * @Attribute QueueUrl: URL of created queue
     */
    public readonly attrQueueUrl: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property queueName: Queue name
     */
    public queueName: string;

    /**
     * @Property delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
     * An integer between 0 and 604800 (7 days). The default value is 0
     */
    public delaySeconds: number | undefined;

    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. 
     * The default value is false
     */
    public loggingEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
     * An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
     */
    public maximumMessageSize: number | undefined;

    /**
     * @Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
     * An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
     */
    public messageRetentionPeriod: number | undefined;

    /**
     * @Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
     * An integer between 0 and 30 seconds. The default value is 0 (seconds)
     */
    public pollingWaitSeconds: number | undefined;

    /**
     * @Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
     * An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
     */
    public visibilityTimeout: number | undefined;

    /**
     * Create a new `ALIYUN::MNS::Queue`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQueueProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosQueue.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArnWithSlash = ros.Token.asString(this.getAtt('ARN.WithSlash'));
        this.attrQueueUrl = ros.Token.asString(this.getAtt('QueueUrl'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.queueName = props.queueName;
        this.delaySeconds = props.delaySeconds;
        this.loggingEnabled = props.loggingEnabled;
        this.maximumMessageSize = props.maximumMessageSize;
        this.messageRetentionPeriod = props.messageRetentionPeriod;
        this.pollingWaitSeconds = props.pollingWaitSeconds;
        this.visibilityTimeout = props.visibilityTimeout;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            queueName: this.queueName,
            delaySeconds: this.delaySeconds,
            loggingEnabled: this.loggingEnabled,
            maximumMessageSize: this.maximumMessageSize,
            messageRetentionPeriod: this.messageRetentionPeriod,
            pollingWaitSeconds: this.pollingWaitSeconds,
            visibilityTimeout: this.visibilityTimeout,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosQueuePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::MNS::Subscription`
 */
export interface RosSubscriptionProps {

    /**
     * @Property endpoint: Terminal address of the message recipient for the created subscription.
     * Currently, four types of endpoints are supported: 
     * 1. HttpEndpoint, which must be prefixed with "http://"; 
     * 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName}; 
     * 3. MailEndpoint, in the format of mail:directmail:{MailAddress}; 
     * 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
     */
    readonly endpoint: string;

    /**
     * @Property subscriptionName: Subscription name
     */
    readonly subscriptionName: string;

    /**
     * @Property topicName: Topic name
     */
    readonly topicName: string;

    /**
     * @Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
     * The value is a string of no more than 16 characters. The default value is no message filter.
     */
    readonly filterTag?: string;

    /**
     * @Property notifyContentFormat: Format of the message content pushed to the endpoint.
     * XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
     */
    readonly notifyContentFormat?: string;

    /**
     * @Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
     * BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
     */
    readonly notifyStrategy?: string;
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
    errors.collect(ros.propertyValidator('endpoint', ros.requiredValidator)(properties.endpoint));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    if(properties.notifyStrategy && (typeof properties.notifyStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('notifyStrategy', ros.validateAllowedValues)({
          data: properties.notifyStrategy,
          allowedValues: ["BACKOFF_RETRY","EXPONENTIAL_DECAY_RETRY"],
        }));
    }
    errors.collect(ros.propertyValidator('notifyStrategy', ros.validateString)(properties.notifyStrategy));
    if(properties.notifyContentFormat && (typeof properties.notifyContentFormat) !== 'object') {
        errors.collect(ros.propertyValidator('notifyContentFormat', ros.validateAllowedValues)({
          data: properties.notifyContentFormat,
          allowedValues: ["XML","JSON","SIMPLIFIED"],
        }));
    }
    errors.collect(ros.propertyValidator('notifyContentFormat', ros.validateString)(properties.notifyContentFormat));
    if(properties.filterTag && (Array.isArray(properties.filterTag) || (typeof properties.filterTag) === 'string')) {
        errors.collect(ros.propertyValidator('filterTag', ros.validateLength)({
            data: properties.filterTag.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('filterTag', ros.validateString)(properties.filterTag));
    errors.collect(ros.propertyValidator('subscriptionName', ros.requiredValidator)(properties.subscriptionName));
    if(properties.subscriptionName && (Array.isArray(properties.subscriptionName) || (typeof properties.subscriptionName) === 'string')) {
        errors.collect(ros.propertyValidator('subscriptionName', ros.validateLength)({
            data: properties.subscriptionName.length,
            min: 1,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('subscriptionName', ros.validateString)(properties.subscriptionName));
    errors.collect(ros.propertyValidator('topicName', ros.requiredValidator)(properties.topicName));
    if(properties.topicName && (Array.isArray(properties.topicName) || (typeof properties.topicName) === 'string')) {
        errors.collect(ros.propertyValidator('topicName', ros.validateLength)({
            data: properties.topicName.length,
            min: 1,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('topicName', ros.validateString)(properties.topicName));
    return errors.wrap('supplied properties not correct for "RosSubscriptionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MNS::Subscription` resource
 *
 * @param properties - the TypeScript properties of a `RosSubscriptionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MNS::Subscription` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSubscriptionPropsValidator(properties).assertSuccess();
    }
    return {
      Endpoint: ros.stringToRosTemplate(properties.endpoint),
      SubscriptionName: ros.stringToRosTemplate(properties.subscriptionName),
      TopicName: ros.stringToRosTemplate(properties.topicName),
      FilterTag: ros.stringToRosTemplate(properties.filterTag),
      NotifyContentFormat: ros.stringToRosTemplate(properties.notifyContentFormat),
      NotifyStrategy: ros.stringToRosTemplate(properties.notifyStrategy),
    };
}

/**
 * A ROS template type:  `ALIYUN::MNS::Subscription`
 */
export class RosSubscription extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MNS::Subscription";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SubscriptionUrl: URL of created subscription
     */
    public readonly attrSubscriptionUrl: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property endpoint: Terminal address of the message recipient for the created subscription.
     * Currently, four types of endpoints are supported: 
     * 1. HttpEndpoint, which must be prefixed with "http://"; 
     * 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues/{QueueName}; 
     * 3. MailEndpoint, in the format of mail:directmail:{MailAddress}; 
     * 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
     */
    public endpoint: string;

    /**
     * @Property subscriptionName: Subscription name
     */
    public subscriptionName: string;

    /**
     * @Property topicName: Topic name
     */
    public topicName: string;

    /**
     * @Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
     * The value is a string of no more than 16 characters. The default value is no message filter.
     */
    public filterTag: string | undefined;

    /**
     * @Property notifyContentFormat: Format of the message content pushed to the endpoint.
     * XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts/NotifyContentFormat.
     */
    public notifyContentFormat: string | undefined;

    /**
     * @Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
     * BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts/NotifyStrategy.
     */
    public notifyStrategy: string | undefined;

    /**
     * Create a new `ALIYUN::MNS::Subscription`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSubscriptionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSubscription.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSubscriptionUrl = ros.Token.asString(this.getAtt('SubscriptionUrl'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.endpoint = props.endpoint;
        this.subscriptionName = props.subscriptionName;
        this.topicName = props.topicName;
        this.filterTag = props.filterTag;
        this.notifyContentFormat = props.notifyContentFormat;
        this.notifyStrategy = props.notifyStrategy;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            endpoint: this.endpoint,
            subscriptionName: this.subscriptionName,
            topicName: this.topicName,
            filterTag: this.filterTag,
            notifyContentFormat: this.notifyContentFormat,
            notifyStrategy: this.notifyStrategy,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSubscriptionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::MNS::Topic`
 */
export interface RosTopicProps {

    /**
     * @Property topicName: Topic name
     */
    readonly topicName: string;

    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. 
     * The default value is false
     */
    readonly loggingEnabled?: boolean | ros.IResolvable;

    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
     * An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
     */
    readonly maximumMessageSize?: number;
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
    if(properties.maximumMessageSize && (typeof properties.maximumMessageSize) !== 'object') {
        errors.collect(ros.propertyValidator('maximumMessageSize', ros.validateRange)({
            data: properties.maximumMessageSize,
            min: 1024,
            max: 65536,
          }));
    }
    errors.collect(ros.propertyValidator('maximumMessageSize', ros.validateNumber)(properties.maximumMessageSize));
    errors.collect(ros.propertyValidator('loggingEnabled', ros.validateBoolean)(properties.loggingEnabled));
    errors.collect(ros.propertyValidator('topicName', ros.requiredValidator)(properties.topicName));
    if(properties.topicName && (Array.isArray(properties.topicName) || (typeof properties.topicName) === 'string')) {
        errors.collect(ros.propertyValidator('topicName', ros.validateLength)({
            data: properties.topicName.length,
            min: 1,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('topicName', ros.validateString)(properties.topicName));
    return errors.wrap('supplied properties not correct for "RosTopicProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MNS::Topic` resource
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MNS::Topic` resource.
 */
// @ts-ignore TS6133
function rosTopicPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTopicPropsValidator(properties).assertSuccess();
    }
    return {
      TopicName: ros.stringToRosTemplate(properties.topicName),
      LoggingEnabled: ros.booleanToRosTemplate(properties.loggingEnabled),
      MaximumMessageSize: ros.numberToRosTemplate(properties.maximumMessageSize),
    };
}

/**
 * A ROS template type:  `ALIYUN::MNS::Topic`
 */
export class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MNS::Topic";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName
     */
    public readonly attrArnWithSlash: any;

    /**
     * @Attribute TopicName: Topic name
     */
    public readonly attrTopicName: any;

    /**
     * @Attribute TopicUrl: URL of created topic
     */
    public readonly attrTopicUrl: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property topicName: Topic name
     */
    public topicName: string;

    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. 
     * The default value is false
     */
    public loggingEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
     * An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
     */
    public maximumMessageSize: number | undefined;

    /**
     * Create a new `ALIYUN::MNS::Topic`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTopic.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArnWithSlash = ros.Token.asString(this.getAtt('ARN.WithSlash'));
        this.attrTopicName = ros.Token.asString(this.getAtt('TopicName'));
        this.attrTopicUrl = ros.Token.asString(this.getAtt('TopicUrl'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.topicName = props.topicName;
        this.loggingEnabled = props.loggingEnabled;
        this.maximumMessageSize = props.maximumMessageSize;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            topicName: this.topicName,
            loggingEnabled: this.loggingEnabled,
            maximumMessageSize: this.maximumMessageSize,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTopicPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
