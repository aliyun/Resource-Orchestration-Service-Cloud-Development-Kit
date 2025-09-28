"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosTopic = exports.RosSubscription = exports.RosQueue = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosQueueProps`
 *
 * @param properties - the TypeScript properties of a `RosQueueProps`
 *
 * @returns the result of the validation.
 */
function RosQueuePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.delaySeconds && (typeof properties.delaySeconds) !== 'object') {
        errors.collect(ros.propertyValidator('delaySeconds', ros.validateRange)({
            data: properties.delaySeconds,
            min: 0,
            max: 604800,
        }));
    }
    errors.collect(ros.propertyValidator('delaySeconds', ros.validateNumber)(properties.delaySeconds));
    errors.collect(ros.propertyValidator('dlqPolicy', RosQueue_DlqPolicyPropertyValidator)(properties.dlqPolicy));
    if (properties.pollingWaitSeconds && (typeof properties.pollingWaitSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('pollingWaitSeconds', ros.validateRange)({
            data: properties.pollingWaitSeconds,
            min: 0,
            max: 30,
        }));
    }
    errors.collect(ros.propertyValidator('pollingWaitSeconds', ros.validateNumber)(properties.pollingWaitSeconds));
    if (properties.messageRetentionPeriod && (typeof properties.messageRetentionPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('messageRetentionPeriod', ros.validateRange)({
            data: properties.messageRetentionPeriod,
            min: 60,
            max: 604800,
        }));
    }
    errors.collect(ros.propertyValidator('messageRetentionPeriod', ros.validateNumber)(properties.messageRetentionPeriod));
    if (properties.maximumMessageSize && (typeof properties.maximumMessageSize) !== 'object') {
        errors.collect(ros.propertyValidator('maximumMessageSize', ros.validateRange)({
            data: properties.maximumMessageSize,
            min: 1024,
            max: 65536,
        }));
    }
    errors.collect(ros.propertyValidator('maximumMessageSize', ros.validateNumber)(properties.maximumMessageSize));
    if (properties.visibilityTimeout && (typeof properties.visibilityTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('visibilityTimeout', ros.validateRange)({
            data: properties.visibilityTimeout,
            min: 1,
            max: 43200,
        }));
    }
    errors.collect(ros.propertyValidator('visibilityTimeout', ros.validateNumber)(properties.visibilityTimeout));
    errors.collect(ros.propertyValidator('queueName', ros.requiredValidator)(properties.queueName));
    if (properties.queueName && (Array.isArray(properties.queueName) || (typeof properties.queueName) === 'string')) {
        errors.collect(ros.propertyValidator('queueName', ros.validateLength)({
            data: properties.queueName.length,
            min: 1,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('queueName', ros.validateString)(properties.queueName));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
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
function rosQueuePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosQueue extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosQueuePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosQueue = RosQueue;
/**
 * The resource type name for this resource class.
 */
RosQueue.ROS_RESOURCE_TYPE_NAME = "ALIYUN::MNS::Queue";
/**
 * Determine whether the given properties match those of a `DlqPolicyProperty`
 *
 * @param properties - the TypeScript properties of a `DlqPolicyProperty`
 *
 * @returns the result of the validation.
 */
function RosQueue_DlqPolicyPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosQueueDlqPolicyPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosQueue_DlqPolicyPropertyValidator(properties).assertSuccess();
    return {
        'MaxReceiveCount': ros.numberToRosTemplate(properties.maxReceiveCount),
        'DeadLetterTargetQueue': ros.stringToRosTemplate(properties.deadLetterTargetQueue),
        'Enabled': ros.booleanToRosTemplate(properties.enabled),
    };
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosQueue_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosQueueTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosQueue_TagsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosSubscriptionProps`
 *
 * @param properties - the TypeScript properties of a `RosSubscriptionProps`
 *
 * @returns the result of the validation.
 */
function RosSubscriptionPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.pushType && (typeof properties.pushType) !== 'object') {
        errors.collect(ros.propertyValidator('pushType', ros.validateAllowedValues)({
            data: properties.pushType,
            allowedValues: ["http", "queue", "mpush", "email", "alisms"],
        }));
    }
    errors.collect(ros.propertyValidator('pushType', ros.validateString)(properties.pushType));
    errors.collect(ros.propertyValidator('endpoint', ros.requiredValidator)(properties.endpoint));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('dlqPolicy', RosSubscription_DlqPolicyPropertyValidator)(properties.dlqPolicy));
    if (properties.notifyStrategy && (typeof properties.notifyStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('notifyStrategy', ros.validateAllowedValues)({
            data: properties.notifyStrategy,
            allowedValues: ["BACKOFF_RETRY", "EXPONENTIAL_DECAY_RETRY"],
        }));
    }
    errors.collect(ros.propertyValidator('notifyStrategy', ros.validateString)(properties.notifyStrategy));
    if (properties.notifyContentFormat && (typeof properties.notifyContentFormat) !== 'object') {
        errors.collect(ros.propertyValidator('notifyContentFormat', ros.validateAllowedValues)({
            data: properties.notifyContentFormat,
            allowedValues: ["XML", "JSON", "SIMPLIFIED"],
        }));
    }
    errors.collect(ros.propertyValidator('notifyContentFormat', ros.validateString)(properties.notifyContentFormat));
    if (properties.filterTag && (Array.isArray(properties.filterTag) || (typeof properties.filterTag) === 'string')) {
        errors.collect(ros.propertyValidator('filterTag', ros.validateLength)({
            data: properties.filterTag.length,
            min: undefined,
            max: 16,
        }));
    }
    errors.collect(ros.propertyValidator('filterTag', ros.validateString)(properties.filterTag));
    errors.collect(ros.propertyValidator('subscriptionName', ros.requiredValidator)(properties.subscriptionName));
    if (properties.subscriptionName && (Array.isArray(properties.subscriptionName) || (typeof properties.subscriptionName) === 'string')) {
        errors.collect(ros.propertyValidator('subscriptionName', ros.validateLength)({
            data: properties.subscriptionName.length,
            min: 1,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('subscriptionName', ros.validateString)(properties.subscriptionName));
    errors.collect(ros.propertyValidator('topicName', ros.requiredValidator)(properties.topicName));
    if (properties.topicName && (Array.isArray(properties.topicName) || (typeof properties.topicName) === 'string')) {
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
function rosSubscriptionPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosSubscription extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosSubscriptionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSubscription = RosSubscription;
/**
 * The resource type name for this resource class.
 */
RosSubscription.ROS_RESOURCE_TYPE_NAME = "ALIYUN::MNS::Subscription";
/**
 * Determine whether the given properties match those of a `DlqPolicyProperty`
 *
 * @param properties - the TypeScript properties of a `DlqPolicyProperty`
 *
 * @returns the result of the validation.
 */
function RosSubscription_DlqPolicyPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosSubscriptionDlqPolicyPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSubscription_DlqPolicyPropertyValidator(properties).assertSuccess();
    return {
        'DeadLetterTargetQueue': ros.stringToRosTemplate(properties.deadLetterTargetQueue),
        'Enabled': ros.booleanToRosTemplate(properties.enabled),
    };
}
/**
 * Determine whether the given properties match those of a `RosTopicProps`
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the result of the validation.
 */
function RosTopicPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.maximumMessageSize && (typeof properties.maximumMessageSize) !== 'object') {
        errors.collect(ros.propertyValidator('maximumMessageSize', ros.validateRange)({
            data: properties.maximumMessageSize,
            min: 1024,
            max: 65536,
        }));
    }
    errors.collect(ros.propertyValidator('maximumMessageSize', ros.validateNumber)(properties.maximumMessageSize));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosTopic_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('loggingEnabled', ros.validateBoolean)(properties.loggingEnabled));
    errors.collect(ros.propertyValidator('topicName', ros.requiredValidator)(properties.topicName));
    if (properties.topicName && (Array.isArray(properties.topicName) || (typeof properties.topicName) === 'string')) {
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
function rosTopicPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosTopic extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            topicName: this.topicName,
            loggingEnabled: this.loggingEnabled,
            maximumMessageSize: this.maximumMessageSize,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosTopicPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosTopic = RosTopic;
/**
 * The resource type name for this resource class.
 */
RosTopic.ROS_RESOURCE_TYPE_NAME = "ALIYUN::MNS::Topic";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosTopic_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosTopicTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosTopic_TagsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW5zLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1ucy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQTREOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxzQkFBc0IsQ0FBQyxVQUFlO0lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLElBQUcsVUFBVSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUN6RSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BFLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWTtZQUM3QixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxNQUFNO1NBQ1osQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLG1DQUFtQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDOUcsSUFBRyxVQUFVLENBQUMsa0JBQWtCLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNyRixNQUFNLENBQUMsT0FBTyxDQUFD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O0FBQzdFLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyxpQ0FBaUMsQ0FBQyxVQUFlO0lBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2xELEtBQUssRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztLQUMvQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zUXVldWVgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbW5zLXF1ZXVlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUXVldWVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcXVldWVOYW1lOiBRdWV1ZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgcXVldWVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsYXlTZWNvbmRzOiBJdCBpcyBtZWFzdXJlZCBpbiBzZWNvbmRzLiBBbGwgbWVzc2FnZXMgc2VudCB0byB0aGUgcXVldWUgY2FuIGJlIGNvbnN1bWVkIHVudGlsIHRoZSBEZWxheVNlY29uZHMgZXhwaXJlcy5cbiAgICAgKiBBbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgNjA0ODAwICg3IGRheXMpLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsYXlTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRscVBvbGljeTogRGVhZC1sZXR0ZXIgcXVldWUgcG9saWN5XG4gICAgICovXG4gICAgcmVhZG9ubHkgZGxxUG9saWN5PzogUm9zUXVldWUuRGxxUG9saWN5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nZ2luZ0VuYWJsZWQ6IFdoZXRoZXIgdG8gZW5hYmxlIGxvZyBtYW5hZ2VtZW50LiBcInRydWVcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBlbmFibGVkLCB3aGVyZWFzIFwiZmFsc2VcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBkaXNhYmxlZC4gXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dnaW5nRW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF4aW11bU1lc3NhZ2VTaXplOiBNYXhpbXVtIGJvZHkgbGVuZ3RoIG9mIGEgbWVzc2FnZSBzZW50IHRvIHRoZSBxdWV1ZSwgbWVhc3VyZWQgaW4gYnl0ZXMuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDEwMjQgKDFLKSBhbmQgNjU1MzYgKDY0SykuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDY1NTM2ICg2NEspLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1heGltdW1NZXNzYWdlU2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtZXNzYWdlUmV0ZW50aW9uUGVyaW9kOiBNYXhpbXVtIGxpZmV0aW1lIG9mIHRoZSBtZXNzYWdlIGluIHRoZSBxdWV1ZSwgbWVhc3VyZWQgaW4gc2Vjb25kcy4gQWZ0ZXIgdGhlIHRpbWUgc3BlY2lmaWVkIGJ5IHRoaXMgcGFyYW1ldGVyIGV4cGlyZXMsIHRoZSBtZXNzYWdlIHdpbGwgYmUgZGVsZXRlZCBubyBtYXR0ZXIgd2hldGhlciBpdCBoYXMgYmVlbiBjb25zdW1lZCBvciBub3QuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDYwICgxIG1pbnV0ZSkgYW5kIDEyOTYwMDAgKDE1IGRheXMpLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAzNDU2MDAgKDQgZGF5cylcbiAgICAgKi9cbiAgICByZWFkb25seSBtZXNzYWdlUmV0ZW50aW9uUGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGxpbmdXYWl0U2Vjb25kczogSXQgaXMgdGhlIG1heGltdW0gdGltZSB0aGF0IGEgUmVjZWl2ZU1lc3NhZ2UgcmVxdWVzdCBjb3VsZCBiZSB3YWl0aW5nIGZvciBhbnkgaW5jb21pbmcgbWVzc2FnZXMsIHdoaWxlIHRoZXJlIGFyZSBubyBtZXNzYWdlIGluIHRoZSBxdWV1ZS4gTWVhc3VyZWQgaW4gc2Vjb25kcy5cbiAgICAgKiBBbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMzAgc2Vjb25kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMCAoc2Vjb25kcylcbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xsaW5nV2FpdFNlY29uZHM/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gUXVldWUuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgUXVldWUuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zUXVldWUuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdmlzaWJpbGl0eVRpbWVvdXQ6IER1cmF0aW9uIGluIHdoaWNoIGEgbWVzc2FnZSBzdGF5cyBpbiBJbmFjdGl2ZSBzdGF0dXMgYWZ0ZXIgaXQgaXMgY29uc3VtZWQgZnJvbSB0aGUgcXVldWUuIE1lYXN1cmVkIGluIHNlY29uZHMuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDEgYW5kIDQzMjAwICgxMiBob3VycykuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDMwIChzZWNvbmRzKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZpc2liaWxpdHlUaW1lb3V0PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1F1ZXVlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1F1ZXVlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUXVldWVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRlbGF5U2Vjb25kcyAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGVsYXlTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxheVNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZWxheVNlY29uZHMsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDYwNDgwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsYXlTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmRlbGF5U2Vjb25kcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGxxUG9saWN5JywgUm9zUXVldWVfRGxxUG9saWN5UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGxxUG9saWN5KSk7XG4gICAgaWYocHJvcGVydGllcy5wb2xsaW5nV2FpdFNlY29uZHMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBvbGxpbmdXYWl0U2Vjb25kcykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9sbGluZ1dhaXRTZWNvbmRzJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucG9sbGluZ1dhaXRTZWNvbmRzLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9sbGluZ1dhaXRTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBvbGxpbmdXYWl0U2Vjb25kcykpO1xuICAgIGlmKHByb3BlcnRpZXMubWVzc2FnZVJldGVudGlvblBlcmlvZCAmJiAodHlwZW9mIHByb3BlcnRpZXMubWVzc2FnZVJldGVudGlvblBlcmlvZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWVzc2FnZVJldGVudGlvblBlcmlvZCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1lc3NhZ2VSZXRlbnRpb25QZXJpb2QsXG4gICAgICAgICAgICBtaW46IDYwLFxuICAgICAgICAgICAgbWF4OiA2MDQ4MDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21lc3NhZ2VSZXRlbnRpb25QZXJpb2QnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWVzc2FnZVJldGVudGlvblBlcmlvZCkpO1xuICAgIGlmKHByb3BlcnRpZXMubWF4aW11bU1lc3NhZ2VTaXplICYmICh0eXBlb2YgcHJvcGVydGllcy5tYXhpbXVtTWVzc2FnZVNpemUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heGltdW1NZXNzYWdlU2l6ZScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1heGltdW1NZXNzYWdlU2l6ZSxcbiAgICAgICAgICAgIG1pbjogMTAyNCxcbiAgICAgICAgICAgIG1heDogNjU1MzYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heGltdW1NZXNzYWdlU2l6ZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5tYXhpbXVtTWVzc2FnZVNpemUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnZpc2liaWxpdHlUaW1lb3V0ICYmICh0eXBlb2YgcHJvcGVydGllcy52aXNpYmlsaXR5VGltZW91dCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmlzaWJpbGl0eVRpbWVvdXQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy52aXNpYmlsaXR5VGltZW91dCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNDMyMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Zpc2liaWxpdHlUaW1lb3V0Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnZpc2liaWxpdHlUaW1lb3V0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdxdWV1ZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucXVldWVOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5xdWV1ZU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5xdWV1ZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5xdWV1ZU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdxdWV1ZU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucXVldWVOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMjU2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdxdWV1ZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucXVldWVOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zUXVldWVfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy50YWdzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dnaW5nRW5hYmxlZCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMubG9nZ2luZ0VuYWJsZWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zUXVldWVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpRdWV1ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUXVldWVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpRdWV1ZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NRdWV1ZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUXVldWVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnUXVldWVOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5xdWV1ZU5hbWUpLFxuICAgICAgJ0RlbGF5U2Vjb25kcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVsYXlTZWNvbmRzKSxcbiAgICAgICdEbHFQb2xpY3knOiByb3NRdWV1ZURscVBvbGljeVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRscVBvbGljeSksXG4gICAgICAnTG9nZ2luZ0VuYWJsZWQnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dnaW5nRW5hYmxlZCksXG4gICAgICAnTWF4aW11bU1lc3NhZ2VTaXplJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhpbXVtTWVzc2FnZVNpemUpLFxuICAgICAgJ01lc3NhZ2VSZXRlbnRpb25QZXJpb2QnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1lc3NhZ2VSZXRlbnRpb25QZXJpb2QpLFxuICAgICAgJ1BvbGxpbmdXYWl0U2Vjb25kcyc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucG9sbGluZ1dhaXRTZWNvbmRzKSxcbiAgICAgICdUYWdzJzogcm9zLmxpc3RNYXBwZXIocm9zUXVldWVUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhZ3MpLFxuICAgICAgJ1Zpc2liaWxpdHlUaW1lb3V0Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy52aXNpYmlsaXR5VGltZW91dCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6TU5TOjpRdWV1ZWAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFF1ZXVlYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1tbnMtcXVldWVcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1F1ZXVlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpNTlM6OlF1ZXVlXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFSTi5XaXRoU2xhc2g6IFRoZSBBUk46IGFjczptbnM6JHJlZ2lvbjokYWNjb3VudGlkOi9xdWV1ZXMvJHF1ZXVlTmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXJuV2l0aFNsYXNoOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFF1ZXVlTmFtZTogUXVldWUgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUXVldWVOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFF1ZXVlVXJsOiBVUkwgb2YgY3JlYXRlZCBxdWV1ZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUXVldWVVcmw6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHF1ZXVlTmFtZTogUXVldWUgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBxdWV1ZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxheVNlY29uZHM6IEl0IGlzIG1lYXN1cmVkIGluIHNlY29uZHMuIEFsbCBtZXNzYWdlcyBzZW50IHRvIHRoZSBxdWV1ZSBjYW4gYmUgY29uc3VtZWQgdW50aWwgdGhlIERlbGF5U2Vjb25kcyBleHBpcmVzLlxuICAgICAqIEFuIGludGVnZXIgYmV0d2VlbiAwIGFuZCA2MDQ4MDAgKDcgZGF5cykuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDBcbiAgICAgKi9cbiAgICBwdWJsaWMgZGVsYXlTZWNvbmRzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGxxUG9saWN5OiBEZWFkLWxldHRlciBxdWV1ZSBwb2xpY3lcbiAgICAgKi9cbiAgICBwdWJsaWMgZGxxUG9saWN5OiBSb3NRdWV1ZS5EbHFQb2xpY3lQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dnaW5nRW5hYmxlZDogV2hldGhlciB0byBlbmFibGUgbG9nIG1hbmFnZW1lbnQuIFwidHJ1ZVwiIGluZGljYXRlcyB0aGF0IGxvZyBtYW5hZ2VtZW50IGlzIGVuYWJsZWQsIHdoZXJlYXMgXCJmYWxzZVwiIGluZGljYXRlcyB0aGF0IGxvZyBtYW5hZ2VtZW50IGlzIGRpc2FibGVkLiBcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dnaW5nRW5hYmxlZDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXhpbXVtTWVzc2FnZVNpemU6IE1heGltdW0gYm9keSBsZW5ndGggb2YgYSBtZXNzYWdlIHNlbnQgdG8gdGhlIHF1ZXVlLCBtZWFzdXJlZCBpbiBieXRlcy5cbiAgICAgKiBBbiBpbnRlZ2VyIGJldHdlZW4gMTAyNCAoMUspIGFuZCA2NTUzNiAoNjRLKS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgNjU1MzYgKDY0SykuXG4gICAgICovXG4gICAgcHVibGljIG1heGltdW1NZXNzYWdlU2l6ZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1lc3NhZ2VSZXRlbnRpb25QZXJpb2Q6IE1heGltdW0gbGlmZXRpbWUgb2YgdGhlIG1lc3NhZ2UgaW4gdGhlIHF1ZXVlLCBtZWFzdXJlZCBpbiBzZWNvbmRzLiBBZnRlciB0aGUgdGltZSBzcGVjaWZpZWQgYnkgdGhpcyBwYXJhbWV0ZXIgZXhwaXJlcywgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBkZWxldGVkIG5vIG1hdHRlciB3aGV0aGVyIGl0IGhhcyBiZWVuIGNvbnN1bWVkIG9yIG5vdC5cbiAgICAgKiBBbiBpbnRlZ2VyIGJldHdlZW4gNjAgKDEgbWludXRlKSBhbmQgMTI5NjAwMCAoMTUgZGF5cykuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDM0NTYwMCAoNCBkYXlzKVxuICAgICAqL1xuICAgIHB1YmxpYyBtZXNzYWdlUmV0ZW50aW9uUGVyaW9kOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9sbGluZ1dhaXRTZWNvbmRzOiBJdCBpcyB0aGUgbWF4aW11bSB0aW1lIHRoYXQgYSBSZWNlaXZlTWVzc2FnZSByZXF1ZXN0IGNvdWxkIGJlIHdhaXRpbmcgZm9yIGFueSBpbmNvbWluZyBtZXNzYWdlcywgd2hpbGUgdGhlcmUgYXJlIG5vIG1lc3NhZ2UgaW4gdGhlIHF1ZXVlLiBNZWFzdXJlZCBpbiBzZWNvbmRzLlxuICAgICAqIEFuIGludGVnZXIgYmV0d2VlbiAwIGFuZCAzMCBzZWNvbmRzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwIChzZWNvbmRzKVxuICAgICAqL1xuICAgIHB1YmxpYyBwb2xsaW5nV2FpdFNlY29uZHM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBRdWV1ZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBRdWV1ZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdzOiBSb3NRdWV1ZS5UYWdzUHJvcGVydHlbXSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2aXNpYmlsaXR5VGltZW91dDogRHVyYXRpb24gaW4gd2hpY2ggYSBtZXNzYWdlIHN0YXlzIGluIEluYWN0aXZlIHN0YXR1cyBhZnRlciBpdCBpcyBjb25zdW1lZCBmcm9tIHRoZSBxdWV1ZS4gTWVhc3VyZWQgaW4gc2Vjb25kcy5cbiAgICAgKiBBbiBpbnRlZ2VyIGJldHdlZW4gMSBhbmQgNDMyMDAgKDEyIGhvdXJzKS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMzAgKHNlY29uZHMpXG4gICAgICovXG4gICAgcHVibGljIHZpc2liaWxpdHlUaW1lb3V0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUXVldWVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1F1ZXVlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBcm5XaXRoU2xhc2ggPSB0aGlzLmdldEF0dCgnQVJOLldpdGhTbGFzaCcpO1xuICAgICAgICB0aGlzLmF0dHJRdWV1ZU5hbWUgPSB0aGlzLmdldEF0dCgnUXVldWVOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clF1ZXVlVXJsID0gdGhpcy5nZXRBdHQoJ1F1ZXVlVXJsJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnF1ZXVlTmFtZSA9IHByb3BzLnF1ZXVlTmFtZTtcbiAgICAgICAgdGhpcy5kZWxheVNlY29uZHMgPSBwcm9wcy5kZWxheVNlY29uZHM7XG4gICAgICAgIHRoaXMuZGxxUG9saWN5ID0gcHJvcHMuZGxxUG9saWN5O1xuICAgICAgICB0aGlzLmxvZ2dpbmdFbmFibGVkID0gcHJvcHMubG9nZ2luZ0VuYWJsZWQ7XG4gICAgICAgIHRoaXMubWF4aW11bU1lc3NhZ2VTaXplID0gcHJvcHMubWF4aW11bU1lc3NhZ2VTaXplO1xuICAgICAgICB0aGlzLm1lc3NhZ2VSZXRlbnRpb25QZXJpb2QgPSBwcm9wcy5tZXNzYWdlUmV0ZW50aW9uUGVyaW9kO1xuICAgICAgICB0aGlzLnBvbGxpbmdXYWl0U2Vjb25kcyA9IHByb3BzLnBvbGxpbmdXYWl0U2Vjb25kcztcbiAgICAgICAgdGhpcy50YWdzID0gcHJvcHMudGFncztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VGltZW91dCA9IHByb3BzLnZpc2liaWxpdHlUaW1lb3V0O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXVlTmFtZTogdGhpcy5xdWV1ZU5hbWUsXG4gICAgICAgICAgICBkZWxheVNlY29uZHM6IHRoaXMuZGVsYXlTZWNvbmRzLFxuICAgICAgICAgICAgZGxxUG9saWN5OiB0aGlzLmRscVBvbGljeSxcbiAgICAgICAgICAgIGxvZ2dpbmdFbmFibGVkOiB0aGlzLmxvZ2dpbmdFbmFibGVkLFxuICAgICAgICAgICAgbWF4aW11bU1lc3NhZ2VTaXplOiB0aGlzLm1heGltdW1NZXNzYWdlU2l6ZSxcbiAgICAgICAgICAgIG1lc3NhZ2VSZXRlbnRpb25QZXJpb2Q6IHRoaXMubWVzc2FnZVJldGVudGlvblBlcmlvZCxcbiAgICAgICAgICAgIHBvbGxpbmdXYWl0U2Vjb25kczogdGhpcy5wb2xsaW5nV2FpdFNlY29uZHMsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgICAgICB2aXNpYmlsaXR5VGltZW91dDogdGhpcy52aXNpYmlsaXR5VGltZW91dCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zUXVldWVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NRdWV1ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRGxxUG9saWN5UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1heFJlY2VpdmVDb3VudDogTWF4aW11bSBudW1iZXIgb2YgcmV0cmllc1xuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWF4UmVjZWl2ZUNvdW50OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGVhZExldHRlclRhcmdldFF1ZXVlOiBEZWFkLWxldHRlciBxdWV1ZSBuYW1lXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkZWFkTGV0dGVyVGFyZ2V0UXVldWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBlbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSBkZWFkLWxldHRlciBxdWV1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYERscVBvbGljeVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBEbHFQb2xpY3lQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NRdWV1ZV9EbHFQb2xpY3lQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFJlY2VpdmVDb3VudCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tYXhSZWNlaXZlQ291bnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFJlY2VpdmVDb3VudCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5tYXhSZWNlaXZlQ291bnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlYWRMZXR0ZXJUYXJnZXRRdWV1ZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kZWFkTGV0dGVyVGFyZ2V0UXVldWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlYWRMZXR0ZXJUYXJnZXRRdWV1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZWFkTGV0dGVyVGFyZ2V0UXVldWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZW5hYmxlZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlZCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZW5hYmxlZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJEbHFQb2xpY3lQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpRdWV1ZS5EbHFQb2xpY3lgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERscVBvbGljeVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNTlM6OlF1ZXVlLkRscVBvbGljeWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NRdWV1ZURscVBvbGljeVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NRdWV1ZV9EbHFQb2xpY3lQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdNYXhSZWNlaXZlQ291bnQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heFJlY2VpdmVDb3VudCksXG4gICAgICAnRGVhZExldHRlclRhcmdldFF1ZXVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWFkTGV0dGVyVGFyZ2V0UXVldWUpLFxuICAgICAgJ0VuYWJsZWQnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVkKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1F1ZXVlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBUYWdzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1F1ZXVlX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlRhZ3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpRdWV1ZS5UYWdzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok1OUzo6UXVldWUuVGFnc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NRdWV1ZVRhZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zUXVldWVfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1ZhbHVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICAnS2V5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5rZXkpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zU3Vic2NyaXB0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW1ucy1zdWJzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTdWJzY3JpcHRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5kcG9pbnQ6IFRlcm1pbmFsIGFkZHJlc3Mgb2YgdGhlIG1lc3NhZ2UgcmVjaXBpZW50IGZvciB0aGUgY3JlYXRlZCBzdWJzY3JpcHRpb24uXG4gICAgICogQ3VycmVudGx5LCBmb3VyIHR5cGVzIG9mIGVuZHBvaW50cyBhcmUgc3VwcG9ydGVkOiBcbiAgICAgKiAxLiBIdHRwRW5kcG9pbnQsIHdoaWNoIG11c3QgYmUgcHJlZml4ZWQgd2l0aCBcImh0dHA6XFwvXFwvXCI7IFxuICAgICAqIDIuIFF1ZXVlRW5kcG9pbnQsIGluIHRoZSBmb3JtYXQgb2YgYWNzOm1uczp7UkVHSU9OfTp7QWNjb3VudElEfTpxdWV1ZXNcXC97UXVldWVOYW1lfTsgXG4gICAgICogMy4gTWFpbEVuZHBvaW50LCBpbiB0aGUgZm9ybWF0IG9mIG1haWw6ZGlyZWN0bWFpbDp7TWFpbEFkZHJlc3N9OyBcbiAgICAgKiA0LiBTbXNFbmRwb2ludCwgaW4gdGhlIGZvcm1hdCBvZiBzbXM6ZGlyZWN0c21zOmFub255bW91cyBvciBzbXM6ZGlyZWN0c21zOntQaG9uZX0uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdWJzY3JpcHRpb25OYW1lOiBTdWJzY3JpcHRpb24gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN1YnNjcmlwdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0b3BpY05hbWU6IFRvcGljIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSB0b3BpY05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkbHFQb2xpY3k6IERlYWQtbGV0dGVyIHF1ZXVlIHBvbGljeVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRscVBvbGljeT86IFJvc1N1YnNjcmlwdGlvbi5EbHFQb2xpY3lQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmaWx0ZXJUYWc6IE1lc3NhZ2UgZmlsdGVyIHRhZyBpbiB0aGUgY3JlYXRlZCBzdWJzY3JpcHRpb24gKE9ubHkgbWVzc2FnZXMgd2l0aCBjb25zaXN0ZW50IHRhZ3MgYXJlIHB1c2hlZC4pXG4gICAgICogVGhlIHZhbHVlIGlzIGEgc3RyaW5nIG9mIG5vIG1vcmUgdGhhbiAxNiBjaGFyYWN0ZXJzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBubyBtZXNzYWdlIGZpbHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBmaWx0ZXJUYWc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbm90aWZ5Q29udGVudEZvcm1hdDogRm9ybWF0IG9mIHRoZSBtZXNzYWdlIGNvbnRlbnQgcHVzaGVkIHRvIHRoZSBlbmRwb2ludC5cbiAgICAgKiBYTUwsIEpTT04sIG9yIFNJTVBMSUZJRUQ7IGRlZmF1bHQgdmFsdWU6IFhNTC4gRm9yIGRldGFpbHMgYWJvdXQgbWVzc2FnZSBmb3JtYXRzLCByZWZlciB0byBCYXNpYyBDb25jZXB0c1xcL05vdGlmeUNvbnRlbnRGb3JtYXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbm90aWZ5Q29udGVudEZvcm1hdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBub3RpZnlTdHJhdGVneTogUmV0cnkgcG9saWN5IHRoYXQgd2lsbCBiZSBhcHBsaWVkIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGR1cmluZyBtZXNzYWdlIHB1c2ggdG8gdGhlIGVuZHBvaW50LlxuICAgICAqIEJBQ0tPRkZfUkVUUlkgb3IgRVhQT05FTlRJQUxfREVDQVlfUkVUUlk7IGRlZmF1bHQgdmFsdWU6IEJBQ0tPRkZfUkVUUlkuIEZvciBkZXRhaWxzIGFib3V0IHJldHJ5IHBvbGljaWVzLCByZWZlciB0byBCYXNpYyBDb25jZXB0c1xcL05vdGlmeVN0cmF0ZWd5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5vdGlmeVN0cmF0ZWd5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHB1c2hUeXBlOiBQdXNoIHR5cGUgb2YgdGhlIGNyZWF0ZWQgc3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHB1c2hUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1N1YnNjcmlwdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTdWJzY3JpcHRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTdWJzY3JpcHRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnB1c2hUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5wdXNoVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHVzaFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wdXNoVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJodHRwXCIsXCJxdWV1ZVwiLFwibXB1c2hcIixcImVtYWlsXCIsXCJhbGlzbXNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwdXNoVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wdXNoVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5kcG9pbnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZW5kcG9pbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuZHBvaW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVuZHBvaW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkbHFQb2xpY3knLCBSb3NTdWJzY3JpcHRpb25fRGxxUG9saWN5UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGxxUG9saWN5KSk7XG4gICAgaWYocHJvcGVydGllcy5ub3RpZnlTdHJhdGVneSAmJiAodHlwZW9mIHByb3BlcnRpZXMubm90aWZ5U3RyYXRlZ3kpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25vdGlmeVN0cmF0ZWd5Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubm90aWZ5U3RyYXRlZ3ksXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQkFDS09GRl9SRVRSWVwiLFwiRVhQT05FTlRJQUxfREVDQVlfUkVUUllcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdub3RpZnlTdHJhdGVneScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ub3RpZnlTdHJhdGVneSkpO1xuICAgIGlmKHByb3BlcnRpZXMubm90aWZ5Q29udGVudEZvcm1hdCAmJiAodHlwZW9mIHByb3BlcnRpZXMubm90aWZ5Q29udGVudEZvcm1hdCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbm90aWZ5Q29udGVudEZvcm1hdCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm5vdGlmeUNvbnRlbnRGb3JtYXQsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiWE1MXCIsXCJKU09OXCIsXCJTSU1QTElGSUVEXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbm90aWZ5Q29udGVudEZvcm1hdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ub3RpZnlDb250ZW50Rm9ybWF0KSk7XG4gICAgaWYocHJvcGVydGllcy5maWx0ZXJUYWcgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5maWx0ZXJUYWcpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5maWx0ZXJUYWcpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmaWx0ZXJUYWcnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZmlsdGVyVGFnLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxNixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmlsdGVyVGFnJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZpbHRlclRhZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3Vic2NyaXB0aW9uTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdWJzY3JpcHRpb25OYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5zdWJzY3JpcHRpb25OYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuc3Vic2NyaXB0aW9uTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnN1YnNjcmlwdGlvbk5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWJzY3JpcHRpb25OYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnN1YnNjcmlwdGlvbk5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAyNTYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1YnNjcmlwdGlvbk5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3Vic2NyaXB0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndG9waWNOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRvcGljTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudG9waWNOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudG9waWNOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudG9waWNOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndG9waWNOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRvcGljTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDI1NixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndG9waWNOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRvcGljTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NTdWJzY3JpcHRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpTdWJzY3JpcHRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1N1YnNjcmlwdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNTlM6OlN1YnNjcmlwdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTdWJzY3JpcHRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1N1YnNjcmlwdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdFbmRwb2ludCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5kcG9pbnQpLFxuICAgICAgJ1N1YnNjcmlwdGlvbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1YnNjcmlwdGlvbk5hbWUpLFxuICAgICAgJ1RvcGljTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudG9waWNOYW1lKSxcbiAgICAgICdEbHFQb2xpY3knOiByb3NTdWJzY3JpcHRpb25EbHFQb2xpY3lQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kbHFQb2xpY3kpLFxuICAgICAgJ0ZpbHRlclRhZyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmlsdGVyVGFnKSxcbiAgICAgICdOb3RpZnlDb250ZW50Rm9ybWF0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ub3RpZnlDb250ZW50Rm9ybWF0KSxcbiAgICAgICdOb3RpZnlTdHJhdGVneSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubm90aWZ5U3RyYXRlZ3kpLFxuICAgICAgJ1B1c2hUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wdXNoVHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6TU5TOjpTdWJzY3JpcHRpb25gLCB3aGljaCBpcyB1c2VkIHRvIGRlc2NyaWJlIGEgc3Vic2NyaXB0aW9uIHJlbGF0aW9uc2hpcCwgaW5jbHVkaW5nIHRoZSBzdWJzY3JpYmVkIHRvcGljIGFuZCB0aGUgZW5kcG9pbnQgdGhhdCB0aGUgc3Vic2NyaWJlciB1c2VzIHRvIHJlY2VpdmUgbWVzc2FnZXMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFN1YnNjcmlwdGlvbmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbW5zLXN1YnNjcmlwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUm9zU3Vic2NyaXB0aW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpNTlM6OlN1YnNjcmlwdGlvblwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTdWJzY3JpcHRpb25OYW1lOiBTdWJzY3JpcHRpb24gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3Vic2NyaXB0aW9uTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTdWJzY3JpcHRpb25Vcmw6IFVSTCBvZiBjcmVhdGVkIHN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3Vic2NyaXB0aW9uVXJsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRvcGljTmFtZTogVG9waWMgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVG9waWNOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmRwb2ludDogVGVybWluYWwgYWRkcmVzcyBvZiB0aGUgbWVzc2FnZSByZWNpcGllbnQgZm9yIHRoZSBjcmVhdGVkIHN1YnNjcmlwdGlvbi5cbiAgICAgKiBDdXJyZW50bHksIGZvdXIgdHlwZXMgb2YgZW5kcG9pbnRzIGFyZSBzdXBwb3J0ZWQ6IFxuICAgICAqIDEuIEh0dHBFbmRwb2ludCwgd2hpY2ggbXVzdCBiZSBwcmVmaXhlZCB3aXRoIFwiaHR0cDpcXC9cXC9cIjsgXG4gICAgICogMi4gUXVldWVFbmRwb2ludCwgaW4gdGhlIGZvcm1hdCBvZiBhY3M6bW5zOntSRUdJT059OntBY2NvdW50SUR9OnF1ZXVlc1xcL3tRdWV1ZU5hbWV9OyBcbiAgICAgKiAzLiBNYWlsRW5kcG9pbnQsIGluIHRoZSBmb3JtYXQgb2YgbWFpbDpkaXJlY3RtYWlsOntNYWlsQWRkcmVzc307IFxuICAgICAqIDQuIFNtc0VuZHBvaW50LCBpbiB0aGUgZm9ybWF0IG9mIHNtczpkaXJlY3RzbXM6YW5vbnltb3VzIG9yIHNtczpkaXJlY3RzbXM6e1Bob25lfS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW5kcG9pbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdWJzY3JpcHRpb25OYW1lOiBTdWJzY3JpcHRpb24gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBzdWJzY3JpcHRpb25OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdG9waWNOYW1lOiBUb3BpYyBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHRvcGljTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRscVBvbGljeTogRGVhZC1sZXR0ZXIgcXVldWUgcG9saWN5XG4gICAgICovXG4gICAgcHVibGljIGRscVBvbGljeTogUm9zU3Vic2NyaXB0aW9uLkRscVBvbGljeVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZpbHRlclRhZzogTWVzc2FnZSBmaWx0ZXIgdGFnIGluIHRoZSBjcmVhdGVkIHN1YnNjcmlwdGlvbiAoT25seSBtZXNzYWdlcyB3aXRoIGNvbnNpc3RlbnQgdGFncyBhcmUgcHVzaGVkLilcbiAgICAgKiBUaGUgdmFsdWUgaXMgYSBzdHJpbmcgb2Ygbm8gbW9yZSB0aGFuIDE2IGNoYXJhY3RlcnMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vIG1lc3NhZ2UgZmlsdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBmaWx0ZXJUYWc6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBub3RpZnlDb250ZW50Rm9ybWF0OiBGb3JtYXQgb2YgdGhlIG1lc3NhZ2UgY29udGVudCBwdXNoZWQgdG8gdGhlIGVuZHBvaW50LlxuICAgICAqIFhNTCwgSlNPTiwgb3IgU0lNUExJRklFRDsgZGVmYXVsdCB2YWx1ZTogWE1MLiBGb3IgZGV0YWlscyBhYm91dCBtZXNzYWdlIGZvcm1hdHMsIHJlZmVyIHRvIEJhc2ljIENvbmNlcHRzXFwvTm90aWZ5Q29udGVudEZvcm1hdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbm90aWZ5Q29udGVudEZvcm1hdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5vdGlmeVN0cmF0ZWd5OiBSZXRyeSBwb2xpY3kgdGhhdCB3aWxsIGJlIGFwcGxpZWQgd2hlbiBhbiBlcnJvciBvY2N1cnMgZHVyaW5nIG1lc3NhZ2UgcHVzaCB0byB0aGUgZW5kcG9pbnQuXG4gICAgICogQkFDS09GRl9SRVRSWSBvciBFWFBPTkVOVElBTF9ERUNBWV9SRVRSWTsgZGVmYXVsdCB2YWx1ZTogQkFDS09GRl9SRVRSWS4gRm9yIGRldGFpbHMgYWJvdXQgcmV0cnkgcG9saWNpZXMsIHJlZmVyIHRvIEJhc2ljIENvbmNlcHRzXFwvTm90aWZ5U3RyYXRlZ3kuXG4gICAgICovXG4gICAgcHVibGljIG5vdGlmeVN0cmF0ZWd5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHVzaFR5cGU6IFB1c2ggdHlwZSBvZiB0aGUgY3JlYXRlZCBzdWJzY3JpcHRpb24uXG4gICAgICovXG4gICAgcHVibGljIHB1c2hUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU3Vic2NyaXB0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTdWJzY3JpcHRpb24uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clN1YnNjcmlwdGlvbk5hbWUgPSB0aGlzLmdldEF0dCgnU3Vic2NyaXB0aW9uTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJTdWJzY3JpcHRpb25VcmwgPSB0aGlzLmdldEF0dCgnU3Vic2NyaXB0aW9uVXJsJyk7XG4gICAgICAgIHRoaXMuYXR0clRvcGljTmFtZSA9IHRoaXMuZ2V0QXR0KCdUb3BpY05hbWUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBwcm9wcy5lbmRwb2ludDtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25OYW1lID0gcHJvcHMuc3Vic2NyaXB0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50b3BpY05hbWUgPSBwcm9wcy50b3BpY05hbWU7XG4gICAgICAgIHRoaXMuZGxxUG9saWN5ID0gcHJvcHMuZGxxUG9saWN5O1xuICAgICAgICB0aGlzLmZpbHRlclRhZyA9IHByb3BzLmZpbHRlclRhZztcbiAgICAgICAgdGhpcy5ub3RpZnlDb250ZW50Rm9ybWF0ID0gcHJvcHMubm90aWZ5Q29udGVudEZvcm1hdDtcbiAgICAgICAgdGhpcy5ub3RpZnlTdHJhdGVneSA9IHByb3BzLm5vdGlmeVN0cmF0ZWd5O1xuICAgICAgICB0aGlzLnB1c2hUeXBlID0gcHJvcHMucHVzaFR5cGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5kcG9pbnQ6IHRoaXMuZW5kcG9pbnQsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25OYW1lOiB0aGlzLnN1YnNjcmlwdGlvbk5hbWUsXG4gICAgICAgICAgICB0b3BpY05hbWU6IHRoaXMudG9waWNOYW1lLFxuICAgICAgICAgICAgZGxxUG9saWN5OiB0aGlzLmRscVBvbGljeSxcbiAgICAgICAgICAgIGZpbHRlclRhZzogdGhpcy5maWx0ZXJUYWcsXG4gICAgICAgICAgICBub3RpZnlDb250ZW50Rm9ybWF0OiB0aGlzLm5vdGlmeUNvbnRlbnRGb3JtYXQsXG4gICAgICAgICAgICBub3RpZnlTdHJhdGVneTogdGhpcy5ub3RpZnlTdHJhdGVneSxcbiAgICAgICAgICAgIHB1c2hUeXBlOiB0aGlzLnB1c2hUeXBlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTdWJzY3JpcHRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTdWJzY3JpcHRpb24ge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIERscVBvbGljeVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkZWFkTGV0dGVyVGFyZ2V0UXVldWU6IERlYWQtbGV0dGVyIHF1ZXVlIG5hbWVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRlYWRMZXR0ZXJUYXJnZXRRdWV1ZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVuYWJsZWQ6IFdoZXRoZXIgdG8gZW5hYmxlIGRlYWQtbGV0dGVyIHF1ZXVlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlbmFibGVkOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRGxxUG9saWN5UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERscVBvbGljeVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1N1YnNjcmlwdGlvbl9EbHFQb2xpY3lQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlYWRMZXR0ZXJUYXJnZXRRdWV1ZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kZWFkTGV0dGVyVGFyZ2V0UXVldWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlYWRMZXR0ZXJUYXJnZXRRdWV1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZWFkTGV0dGVyVGFyZ2V0UXVldWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZW5hYmxlZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlZCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZW5hYmxlZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJEbHFQb2xpY3lQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpTdWJzY3JpcHRpb24uRGxxUG9saWN5YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBEbHFQb2xpY3lQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpTdWJzY3JpcHRpb24uRGxxUG9saWN5YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1N1YnNjcmlwdGlvbkRscVBvbGljeVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTdWJzY3JpcHRpb25fRGxxUG9saWN5UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnRGVhZExldHRlclRhcmdldFF1ZXVlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWFkTGV0dGVyVGFyZ2V0UXVldWUpLFxuICAgICAgJ0VuYWJsZWQnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1RvcGljYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW1ucy10b3BpY1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1RvcGljUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRvcGljTmFtZTogVG9waWMgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRvcGljTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2dpbmdFbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSBsb2cgbWFuYWdlbWVudC4gXCJ0cnVlXCIgaW5kaWNhdGVzIHRoYXQgbG9nIG1hbmFnZW1lbnQgaXMgZW5hYmxlZCwgd2hlcmVhcyBcImZhbHNlXCIgaW5kaWNhdGVzIHRoYXQgbG9nIG1hbmFnZW1lbnQgaXMgZGlzYWJsZWQuIFxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9nZ2luZ0VuYWJsZWQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1heGltdW1NZXNzYWdlU2l6ZTogTWF4aW11bSBib2R5IGxlbmd0aCBvZiBhIG1lc3NhZ2Ugc2VudCB0byB0aGUgdG9waWMsIGluIHRoZSB1bml0IG9mIGJ5dGVzLlxuICAgICAqIEFuIGludGVnZXIgaW4gdGhlIHJhbmdlIG9mIDEsMDI0ICgxIEtCKSB0byA2NSwgNTM2ICg2NCBLQik7IGRlZmF1bHQgdmFsdWU6IDY1LDUzNiAoNjQgS0IpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1heGltdW1NZXNzYWdlU2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBUb3BpYy4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBUb3BpYy4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NUb3BpYy5UYWdzUHJvcGVydHlbXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NUb3BpY1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NUb3BpY1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1RvcGljUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5tYXhpbXVtTWVzc2FnZVNpemUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1heGltdW1NZXNzYWdlU2l6ZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4aW11bU1lc3NhZ2VTaXplJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWF4aW11bU1lc3NhZ2VTaXplLFxuICAgICAgICAgICAgbWluOiAxMDI0LFxuICAgICAgICAgICAgbWF4OiA2NTUzNixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4aW11bU1lc3NhZ2VTaXplJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1heGltdW1NZXNzYWdlU2l6ZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFncyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRhZ3MpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50YWdzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWdzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFncycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc1RvcGljX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMudGFncykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nZ2luZ0VuYWJsZWQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmxvZ2dpbmdFbmFibGVkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0b3BpY05hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudG9waWNOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy50b3BpY05hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50b3BpY05hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50b3BpY05hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0b3BpY05hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudG9waWNOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMjU2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0b3BpY05hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudG9waWNOYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1RvcGljUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok1OUzo6VG9waWNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RvcGljUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok1OUzo6VG9waWNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVG9waWNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1RvcGljUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ1RvcGljTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudG9waWNOYW1lKSxcbiAgICAgICdMb2dnaW5nRW5hYmxlZCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ2dpbmdFbmFibGVkKSxcbiAgICAgICdNYXhpbXVtTWVzc2FnZVNpemUnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heGltdW1NZXNzYWdlU2l6ZSksXG4gICAgICAnVGFncyc6IHJvcy5saXN0TWFwcGVyKHJvc1RvcGljVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpNTlM6OlRvcGljYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSB0b3BpYy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgVG9waWNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW1ucy10b3BpY1xuICovXG5leHBvcnQgY2xhc3MgUm9zVG9waWMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok1OUzo6VG9waWNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQVJOLldpdGhTbGFzaDogVGhlIEFSTjogYWNzOm1uczokcmVnaW9uOiRhY2NvdW50aWQ6L3RvcGljcy8kdG9waWNOYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcm5XaXRoU2xhc2g6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVG9waWNOYW1lOiBUb3BpYyBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUb3BpY05hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVG9waWNVcmw6IFVSTCBvZiBjcmVhdGVkIHRvcGljXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUb3BpY1VybDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdG9waWNOYW1lOiBUb3BpYyBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHRvcGljTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2dpbmdFbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSBsb2cgbWFuYWdlbWVudC4gXCJ0cnVlXCIgaW5kaWNhdGVzIHRoYXQgbG9nIG1hbmFnZW1lbnQgaXMgZW5hYmxlZCwgd2hlcmVhcyBcImZhbHNlXCIgaW5kaWNhdGVzIHRoYXQgbG9nIG1hbmFnZW1lbnQgaXMgZGlzYWJsZWQuIFxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIGxvZ2dpbmdFbmFibGVkOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1heGltdW1NZXNzYWdlU2l6ZTogTWF4aW11bSBib2R5IGxlbmd0aCBvZiBhIG1lc3NhZ2Ugc2VudCB0byB0aGUgdG9waWMsIGluIHRoZSB1bml0IG9mIGJ5dGVzLlxuICAgICAqIEFuIGludGVnZXIgaW4gdGhlIHJhbmdlIG9mIDEsMDI0ICgxIEtCKSB0byA2NSwgNTM2ICg2NCBLQik7IGRlZmF1bHQgdmFsdWU6IDY1LDUzNiAoNjQgS0IpLlxuICAgICAqL1xuICAgIHB1YmxpYyBtYXhpbXVtTWVzc2FnZVNpemU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBUb3BpYy4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBUb3BpYy4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdzOiBSb3NUb3BpYy5UYWdzUHJvcGVydHlbXSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NUb3BpY1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zVG9waWMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFybldpdGhTbGFzaCA9IHRoaXMuZ2V0QXR0KCdBUk4uV2l0aFNsYXNoJyk7XG4gICAgICAgIHRoaXMuYXR0clRvcGljTmFtZSA9IHRoaXMuZ2V0QXR0KCdUb3BpY05hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyVG9waWNVcmwgPSB0aGlzLmdldEF0dCgnVG9waWNVcmwnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMudG9waWNOYW1lID0gcHJvcHMudG9waWNOYW1lO1xuICAgICAgICB0aGlzLmxvZ2dpbmdFbmFibGVkID0gcHJvcHMubG9nZ2luZ0VuYWJsZWQ7XG4gICAgICAgIHRoaXMubWF4aW11bU1lc3NhZ2VTaXplID0gcHJvcHMubWF4aW11bU1lc3NhZ2VTaXplO1xuICAgICAgICB0aGlzLnRhZ3MgPSBwcm9wcy50YWdzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcGljTmFtZTogdGhpcy50b3BpY05hbWUsXG4gICAgICAgICAgICBsb2dnaW5nRW5hYmxlZDogdGhpcy5sb2dnaW5nRW5hYmxlZCxcbiAgICAgICAgICAgIG1heGltdW1NZXNzYWdlU2l6ZTogdGhpcy5tYXhpbXVtTWVzc2FnZVNpemUsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1RvcGljUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zVG9waWMge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVG9waWNfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGFnc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNTlM6OlRvcGljLlRhZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpUb3BpYy5UYWdzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1RvcGljVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NUb3BpY19UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnVmFsdWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZhbHVlKSxcbiAgICAgICdLZXknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cbiJdfQ==