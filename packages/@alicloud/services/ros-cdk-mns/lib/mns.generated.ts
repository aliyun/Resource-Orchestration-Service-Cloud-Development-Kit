// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosQueue`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-queue
 */
export interface RosQueueProps {

    /**
     * @Property queueName: Queue name
     */
    readonly queueName: string | ros.IResolvable;

    /**
     * @Property delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
     * An integer between 0 and 604800 (7 days). The default value is 0
     */
    readonly delaySeconds?: number | ros.IResolvable;

    /**
     * @Property dlqPolicy: Dead-letter queue policy
     */
    readonly dlqPolicy?: RosQueue.DlqPolicyProperty | ros.IResolvable;

    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. 
     * The default value is false
     */
    readonly loggingEnabled?: boolean | ros.IResolvable;

    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
     * An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
     */
    readonly maximumMessageSize?: number | ros.IResolvable;

    /**
     * @Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
     * An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
     */
    readonly messageRetentionPeriod?: number | ros.IResolvable;

    /**
     * @Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
     * An integer between 0 and 30 seconds. The default value is 0 (seconds)
     */
    readonly pollingWaitSeconds?: number | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to Queue. Max support 20 tags to add during create Queue. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosQueue.TagsProperty[];

    /**
     * @Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
     * An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
     */
    readonly visibilityTimeout?: number | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('dlqPolicy', RosQueue_DlqPolicyPropertyValidator)(properties.dlqPolicy));
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
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosQueue_TagsPropertyValidator))(properties.tags));
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
      'QueueName': ros.stringToRosTemplate(properties.queueName),
      'DelaySeconds': ros.numberToRosTemplate(properties.delaySeconds),
      'DlqPolicy': rosQueueDlqPolicyPropertyToRosTemplate(properties.dlqPolicy),
      'LoggingEnabled': ros.booleanToRosTemplate(properties.loggingEnabled),
      'MaximumMessageSize': ros.numberToRosTemplate(properties.maximumMessageSize),
      'MessageRetentionPeriod': ros.numberToRosTemplate(properties.messageRetentionPeriod),
      'PollingWaitSeconds': ros.numberToRosTemplate(properties.pollingWaitSeconds),
      'Tags': ros.listMapper(rosQueueTagsPropertyToRosTemplate)(properties.tags),
      'VisibilityTimeout': ros.numberToRosTemplate(properties.visibilityTimeout),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MNS::Queue`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Queue` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-queue
 */
export class RosQueue extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MNS::Queue";

    /**
     * @Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName
     */
    public readonly attrArnWithSlash: ros.IResolvable;

    /**
     * @Attribute QueueName: Queue name
     */
    public readonly attrQueueName: ros.IResolvable;

    /**
     * @Attribute QueueUrl: URL of created queue
     */
    public readonly attrQueueUrl: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property queueName: Queue name
     */
    public queueName: string | ros.IResolvable;

    /**
     * @Property delaySeconds: It is measured in seconds. All messages sent to the queue can be consumed until the DelaySeconds expires.
     * An integer between 0 and 604800 (7 days). The default value is 0
     */
    public delaySeconds: number | ros.IResolvable | undefined;

    /**
     * @Property dlqPolicy: Dead-letter queue policy
     */
    public dlqPolicy: RosQueue.DlqPolicyProperty | ros.IResolvable | undefined;

    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. 
     * The default value is false
     */
    public loggingEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the queue, measured in bytes.
     * An integer between 1024 (1K) and 65536 (64K). The default value is 65536 (64K).
     */
    public maximumMessageSize: number | ros.IResolvable | undefined;

    /**
     * @Property messageRetentionPeriod: Maximum lifetime of the message in the queue, measured in seconds. After the time specified by this parameter expires, the message will be deleted no matter whether it has been consumed or not.
     * An integer between 60 (1 minute) and 1296000 (15 days). The default value is 345600 (4 days)
     */
    public messageRetentionPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property pollingWaitSeconds: It is the maximum time that a ReceiveMessage request could be waiting for any incoming messages, while there are no message in the queue. Measured in seconds.
     * An integer between 0 and 30 seconds. The default value is 0 (seconds)
     */
    public pollingWaitSeconds: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to Queue. Max support 20 tags to add during create Queue. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosQueue.TagsProperty[] | undefined;

    /**
     * @Property visibilityTimeout: Duration in which a message stays in Inactive status after it is consumed from the queue. Measured in seconds.
     * An integer between 1 and 43200 (12 hours). The default value is 30 (seconds)
     */
    public visibilityTimeout: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQueueProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosQueue.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArnWithSlash = this.getAtt('ARN.WithSlash');
        this.attrQueueName = this.getAtt('QueueName');
        this.attrQueueUrl = this.getAtt('QueueUrl');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.queueName = props.queueName;
        this.delaySeconds = props.delaySeconds;
        this.dlqPolicy = props.dlqPolicy;
        this.loggingEnabled = props.loggingEnabled;
        this.maximumMessageSize = props.maximumMessageSize;
        this.messageRetentionPeriod = props.messageRetentionPeriod;
        this.pollingWaitSeconds = props.pollingWaitSeconds;
        this.tags = props.tags;
        this.visibilityTimeout = props.visibilityTimeout;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            queueName: this.queueName,
            delaySeconds: this.delaySeconds,
            dlqPolicy: this.dlqPolicy,
            loggingEnabled: this.loggingEnabled,
            maximumMessageSize: this.maximumMessageSize,
            messageRetentionPeriod: this.messageRetentionPeriod,
            pollingWaitSeconds: this.pollingWaitSeconds,
            tags: this.tags,
            visibilityTimeout: this.visibilityTimeout,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosQueuePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosQueue {
    /**
     * @stability external
     */
    export interface DlqPolicyProperty {
        /**
         * @Property maxReceiveCount: Maximum number of retries
         */
        readonly maxReceiveCount: number | ros.IResolvable;
        /**
         * @Property deadLetterTargetQueue: Dead-letter queue name
         */
        readonly deadLetterTargetQueue: string | ros.IResolvable;
        /**
         * @Property enabled: Whether to enable dead-letter queue
         */
        readonly enabled: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DlqPolicyProperty`
 *
 * @param properties - the TypeScript properties of a `DlqPolicyProperty`
 *
 * @returns the result of the validation.
 */
function RosQueue_DlqPolicyPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('maxReceiveCount', ros.requiredValidator)(properties.maxReceiveCount));
    errors.collect(ros.propertyValidator('maxReceiveCount', ros.validateNumber)(properties.maxReceiveCount));
    errors.collect(ros.propertyValidator('deadLetterTargetQueue', ros.requiredValidator)(properties.deadLetterTargetQueue));
    errors.collect(ros.propertyValidator('deadLetterTargetQueue', ros.validateString)(properties.deadLetterTargetQueue));
    errors.collect(ros.propertyValidator('enabled', ros.requiredValidator)(properties.enabled));
    errors.collect(ros.propertyValidator('enabled', ros.validateBoolean)(properties.enabled));
    return errors.wrap('supplied properties not correct for "DlqPolicyProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MNS::Queue.DlqPolicy` resource
 *
 * @param properties - the TypeScript properties of a `DlqPolicyProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MNS::Queue.DlqPolicy` resource.
 */
// @ts-ignore TS6133
function rosQueueDlqPolicyPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosQueue_DlqPolicyPropertyValidator(properties).assertSuccess();
    return {
      'MaxReceiveCount': ros.numberToRosTemplate(properties.maxReceiveCount),
      'DeadLetterTargetQueue': ros.stringToRosTemplate(properties.deadLetterTargetQueue),
      'Enabled': ros.booleanToRosTemplate(properties.enabled),
    };
}

export namespace RosQueue {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosQueue_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MNS::Queue.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MNS::Queue.Tags` resource.
 */
// @ts-ignore TS6133
function rosQueueTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosQueue_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosSubscription`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-subscription
 */
export interface RosSubscriptionProps {

    /**
     * @Property endpoint: Terminal address of the message recipient for the created subscription.
     * Currently, four types of endpoints are supported: 
     * 1. HttpEndpoint, which must be prefixed with "http:\/\/"; 
     * 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues\/{QueueName}; 
     * 3. MailEndpoint, in the format of mail:directmail:{MailAddress}; 
     * 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
     */
    readonly endpoint: string | ros.IResolvable;

    /**
     * @Property subscriptionName: Subscription name
     */
    readonly subscriptionName: string | ros.IResolvable;

    /**
     * @Property topicName: Topic name
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * @Property dlqPolicy: Dead-letter queue policy
     */
    readonly dlqPolicy?: RosSubscription.DlqPolicyProperty | ros.IResolvable;

    /**
     * @Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
     * The value is a string of no more than 16 characters. The default value is no message filter.
     */
    readonly filterTag?: string | ros.IResolvable;

    /**
     * @Property notifyContentFormat: Format of the message content pushed to the endpoint.
     * XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts\/NotifyContentFormat.
     */
    readonly notifyContentFormat?: string | ros.IResolvable;

    /**
     * @Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
     * BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts\/NotifyStrategy.
     */
    readonly notifyStrategy?: string | ros.IResolvable;

    /**
     * @Property pushType: Push type of the created subscription.
     */
    readonly pushType?: string | ros.IResolvable;
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
    if(properties.pushType && (typeof properties.pushType) !== 'object') {
        errors.collect(ros.propertyValidator('pushType', ros.validateAllowedValues)({
          data: properties.pushType,
          allowedValues: ["http","queue","mpush","email","alisms"],
        }));
    }
    errors.collect(ros.propertyValidator('pushType', ros.validateString)(properties.pushType));
    errors.collect(ros.propertyValidator('endpoint', ros.requiredValidator)(properties.endpoint));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('dlqPolicy', RosSubscription_DlqPolicyPropertyValidator)(properties.dlqPolicy));
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
      'Endpoint': ros.stringToRosTemplate(properties.endpoint),
      'SubscriptionName': ros.stringToRosTemplate(properties.subscriptionName),
      'TopicName': ros.stringToRosTemplate(properties.topicName),
      'DlqPolicy': rosSubscriptionDlqPolicyPropertyToRosTemplate(properties.dlqPolicy),
      'FilterTag': ros.stringToRosTemplate(properties.filterTag),
      'NotifyContentFormat': ros.stringToRosTemplate(properties.notifyContentFormat),
      'NotifyStrategy': ros.stringToRosTemplate(properties.notifyStrategy),
      'PushType': ros.stringToRosTemplate(properties.pushType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MNS::Subscription`, which is used to describe a subscription relationship, including the subscribed topic and the endpoint that the subscriber uses to receive messages.
 * @Note This class does not contain additional functions, so it is recommended to use the `Subscription` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-subscription
 */
export class RosSubscription extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MNS::Subscription";

    /**
     * @Attribute SubscriptionName: Subscription name
     */
    public readonly attrSubscriptionName: ros.IResolvable;

    /**
     * @Attribute SubscriptionUrl: URL of created subscription
     */
    public readonly attrSubscriptionUrl: ros.IResolvable;

    /**
     * @Attribute TopicName: Topic name
     */
    public readonly attrTopicName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property endpoint: Terminal address of the message recipient for the created subscription.
     * Currently, four types of endpoints are supported: 
     * 1. HttpEndpoint, which must be prefixed with "http:\/\/"; 
     * 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues\/{QueueName}; 
     * 3. MailEndpoint, in the format of mail:directmail:{MailAddress}; 
     * 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
     */
    public endpoint: string | ros.IResolvable;

    /**
     * @Property subscriptionName: Subscription name
     */
    public subscriptionName: string | ros.IResolvable;

    /**
     * @Property topicName: Topic name
     */
    public topicName: string | ros.IResolvable;

    /**
     * @Property dlqPolicy: Dead-letter queue policy
     */
    public dlqPolicy: RosSubscription.DlqPolicyProperty | ros.IResolvable | undefined;

    /**
     * @Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.)
     * The value is a string of no more than 16 characters. The default value is no message filter.
     */
    public filterTag: string | ros.IResolvable | undefined;

    /**
     * @Property notifyContentFormat: Format of the message content pushed to the endpoint.
     * XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts\/NotifyContentFormat.
     */
    public notifyContentFormat: string | ros.IResolvable | undefined;

    /**
     * @Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
     * BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts\/NotifyStrategy.
     */
    public notifyStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property pushType: Push type of the created subscription.
     */
    public pushType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSubscriptionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSubscription.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSubscriptionName = this.getAtt('SubscriptionName');
        this.attrSubscriptionUrl = this.getAtt('SubscriptionUrl');
        this.attrTopicName = this.getAtt('TopicName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.endpoint = props.endpoint;
        this.subscriptionName = props.subscriptionName;
        this.topicName = props.topicName;
        this.dlqPolicy = props.dlqPolicy;
        this.filterTag = props.filterTag;
        this.notifyContentFormat = props.notifyContentFormat;
        this.notifyStrategy = props.notifyStrategy;
        this.pushType = props.pushType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            endpoint: this.endpoint,
            subscriptionName: this.subscriptionName,
            topicName: this.topicName,
            dlqPolicy: this.dlqPolicy,
            filterTag: this.filterTag,
            notifyContentFormat: this.notifyContentFormat,
            notifyStrategy: this.notifyStrategy,
            pushType: this.pushType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSubscriptionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSubscription {
    /**
     * @stability external
     */
    export interface DlqPolicyProperty {
        /**
         * @Property deadLetterTargetQueue: Dead-letter queue name
         */
        readonly deadLetterTargetQueue: string | ros.IResolvable;
        /**
         * @Property enabled: Whether to enable dead-letter queue
         */
        readonly enabled: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DlqPolicyProperty`
 *
 * @param properties - the TypeScript properties of a `DlqPolicyProperty`
 *
 * @returns the result of the validation.
 */
function RosSubscription_DlqPolicyPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('deadLetterTargetQueue', ros.requiredValidator)(properties.deadLetterTargetQueue));
    errors.collect(ros.propertyValidator('deadLetterTargetQueue', ros.validateString)(properties.deadLetterTargetQueue));
    errors.collect(ros.propertyValidator('enabled', ros.requiredValidator)(properties.enabled));
    errors.collect(ros.propertyValidator('enabled', ros.validateBoolean)(properties.enabled));
    return errors.wrap('supplied properties not correct for "DlqPolicyProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MNS::Subscription.DlqPolicy` resource
 *
 * @param properties - the TypeScript properties of a `DlqPolicyProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MNS::Subscription.DlqPolicy` resource.
 */
// @ts-ignore TS6133
function rosSubscriptionDlqPolicyPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSubscription_DlqPolicyPropertyValidator(properties).assertSuccess();
    return {
      'DeadLetterTargetQueue': ros.stringToRosTemplate(properties.deadLetterTargetQueue),
      'Enabled': ros.booleanToRosTemplate(properties.enabled),
    };
}

/**
 * Properties for defining a `RosTopic`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-topic
 */
export interface RosTopicProps {

    /**
     * @Property topicName: Topic name
     */
    readonly topicName: string | ros.IResolvable;

    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. 
     * The default value is false
     */
    readonly loggingEnabled?: boolean | ros.IResolvable;

    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
     * An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
     */
    readonly maximumMessageSize?: number | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to Topic. Max support 20 tags to add during create Topic. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosTopic.TagsProperty[];
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
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosTopic_TagsPropertyValidator))(properties.tags));
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
      'TopicName': ros.stringToRosTemplate(properties.topicName),
      'LoggingEnabled': ros.booleanToRosTemplate(properties.loggingEnabled),
      'MaximumMessageSize': ros.numberToRosTemplate(properties.maximumMessageSize),
      'Tags': ros.listMapper(rosTopicTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MNS::Topic`, which is used to create a topic.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-topic
 */
export class RosTopic extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MNS::Topic";

    /**
     * @Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/topics/$topicName
     */
    public readonly attrArnWithSlash: ros.IResolvable;

    /**
     * @Attribute TopicName: Topic name
     */
    public readonly attrTopicName: ros.IResolvable;

    /**
     * @Attribute TopicUrl: URL of created topic
     */
    public readonly attrTopicUrl: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property topicName: Topic name
     */
    public topicName: string | ros.IResolvable;

    /**
     * @Property loggingEnabled: Whether to enable log management. "true" indicates that log management is enabled, whereas "false" indicates that log management is disabled. 
     * The default value is false
     */
    public loggingEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property maximumMessageSize: Maximum body length of a message sent to the topic, in the unit of bytes.
     * An integer in the range of 1,024 (1 KB) to 65, 536 (64 KB); default value: 65,536 (64 KB).
     */
    public maximumMessageSize: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to Topic. Max support 20 tags to add during create Topic. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosTopic.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTopicProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTopic.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArnWithSlash = this.getAtt('ARN.WithSlash');
        this.attrTopicName = this.getAtt('TopicName');
        this.attrTopicUrl = this.getAtt('TopicUrl');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.topicName = props.topicName;
        this.loggingEnabled = props.loggingEnabled;
        this.maximumMessageSize = props.maximumMessageSize;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            topicName: this.topicName,
            loggingEnabled: this.loggingEnabled,
            maximumMessageSize: this.maximumMessageSize,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTopicPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosTopic {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosTopic_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MNS::Topic.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MNS::Topic.Tags` resource.
 */
// @ts-ignore TS6133
function rosTopicTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTopic_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
