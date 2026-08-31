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
    errors.collect(ros.propertyValidator('subscriptionName', ros.requiredValidator)(properties.subscriptionName));
    if (properties.subscriptionName && (Array.isArray(properties.subscriptionName) || (typeof properties.subscriptionName) === 'string')) {
        errors.collect(ros.propertyValidator('subscriptionName', ros.validateLength)({
            data: properties.subscriptionName.length,
            min: 1,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('subscriptionName', ros.validateString)(properties.subscriptionName));
    if (properties.filterTag && (Array.isArray(properties.filterTag) || (typeof properties.filterTag) === 'string')) {
        errors.collect(ros.propertyValidator('filterTag', ros.validateLength)({
            data: properties.filterTag.length,
            min: undefined,
            max: 16,
        }));
    }
    errors.collect(ros.propertyValidator('filterTag', ros.validateString)(properties.filterTag));
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
    errors.collect(ros.propertyValidator('topicName', ros.requiredValidator)(properties.topicName));
    if (properties.topicName && (Array.isArray(properties.topicName) || (typeof properties.topicName) === 'string')) {
        errors.collect(ros.propertyValidator('topicName', ros.validateLength)({
            data: properties.topicName.length,
            min: 1,
            max: 256,
        }));
    }
    errors.collect(ros.propertyValidator('topicName', ros.validateString)(properties.topicName));
    errors.collect(ros.propertyValidator('loggingEnabled', ros.validateBoolean)(properties.loggingEnabled));
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MNS::Topic`.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW5zLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1ucy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQThEOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxzQkFBc0IsQ0FBQyxVQUFlO0lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLElBQUcsVUFBVSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUN6RSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BFLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWTtZQUM3QixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxNQUFNO1NBQ1osQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbkcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLG1DQUFtQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDOUcsSUFBRyxVQUFVLENBQUMsa0JBQWtCLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNyRixNQUFNLENBQUMsT0FBTyxDQUFD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O0FBQzdFLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxvQkFBb0I7QUFDcEIsU0FBUyxpQ0FBaUMsQ0FBQyxVQUFlO0lBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxVQUFVLENBQUM7S0FBRTtJQUN2RCw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBQ2xELEtBQUssRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztLQUMvQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zUXVldWVgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbW5zLXF1ZXVlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUXVldWVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcXVldWVOYW1lOiBRdWV1ZSBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgcXVldWVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsYXlTZWNvbmRzOiBJdCBpcyBtZWFzdXJlZCBpbiBzZWNvbmRzLiBBbGwgbWVzc2FnZXMgc2VudCB0byB0aGUgcXVldWUgY2FuIGJlIGNvbnN1bWVkIHVudGlsIHRoZSBEZWxheVNlY29uZHMgZXhwaXJlcy5cbiAgICAgKiBBbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgNjA0ODAwICg3IGRheXMpLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsYXlTZWNvbmRzPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRscVBvbGljeTogRGVhZC1sZXR0ZXIgcXVldWUgcG9saWN5XG4gICAgICovXG4gICAgcmVhZG9ubHkgZGxxUG9saWN5PzogUm9zUXVldWUuRGxxUG9saWN5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nZ2luZ0VuYWJsZWQ6IFdoZXRoZXIgdG8gZW5hYmxlIGxvZyBtYW5hZ2VtZW50LiBcInRydWVcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBlbmFibGVkLCB3aGVyZWFzIFwiZmFsc2VcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBkaXNhYmxlZC4gXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dnaW5nRW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF4aW11bU1lc3NhZ2VTaXplOiBNYXhpbXVtIGJvZHkgbGVuZ3RoIG9mIGEgbWVzc2FnZSBzZW50IHRvIHRoZSBxdWV1ZSwgbWVhc3VyZWQgaW4gYnl0ZXMuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDEwMjQgKDFLKSBhbmQgNjU1MzYgKDY0SykuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDY1NTM2ICg2NEspLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1heGltdW1NZXNzYWdlU2l6ZT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtZXNzYWdlUmV0ZW50aW9uUGVyaW9kOiBUaGUgbWF4aW11bSB0aW1lIHRvIGxpdmUgKFRUTCkgZm9yIGEgbWVzc2FnZSBpbiB0aGUgcXVldWUuIEFmdGVyIHRoZSBzcGVjaWZpZWRcbiAgICAgKiBwZXJpb2QsIHRoZSBtZXNzYWdlIGlzIGRlbGV0ZWQsIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciBpdCBoYXMgYmVlbiByZXRyaWV2ZWQuXG4gICAgICogVmFsaWQgdmFsdWVzOiA2MCB0byA2MDQ4MDAuIFVuaXQ6IHNlY29uZHMuXG4gICAgICogRGVmYXVsdCB2YWx1ZTogMzQ1NjAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1lc3NhZ2VSZXRlbnRpb25QZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9sbGluZ1dhaXRTZWNvbmRzOiBJdCBpcyB0aGUgbWF4aW11bSB0aW1lIHRoYXQgYSBSZWNlaXZlTWVzc2FnZSByZXF1ZXN0IGNvdWxkIGJlIHdhaXRpbmcgZm9yIGFueSBpbmNvbWluZyBtZXNzYWdlcywgd2hpbGUgdGhlcmUgYXJlIG5vIG1lc3NhZ2UgaW4gdGhlIHF1ZXVlLiBNZWFzdXJlZCBpbiBzZWNvbmRzLlxuICAgICAqIEFuIGludGVnZXIgYmV0d2VlbiAwIGFuZCAzMCBzZWNvbmRzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwIChzZWNvbmRzKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGxpbmdXYWl0U2Vjb25kcz86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBRdWV1ZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBRdWV1ZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NRdWV1ZS5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2aXNpYmlsaXR5VGltZW91dDogRHVyYXRpb24gaW4gd2hpY2ggYSBtZXNzYWdlIHN0YXlzIGluIEluYWN0aXZlIHN0YXR1cyBhZnRlciBpdCBpcyBjb25zdW1lZCBmcm9tIHRoZSBxdWV1ZS4gTWVhc3VyZWQgaW4gc2Vjb25kcy5cbiAgICAgKiBBbiBpbnRlZ2VyIGJldHdlZW4gMSBhbmQgNDMyMDAgKDEyIGhvdXJzKS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMzAgKHNlY29uZHMpXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmlzaWJpbGl0eVRpbWVvdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUXVldWVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUXVldWVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NRdWV1ZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuZGVsYXlTZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy5kZWxheVNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGF5U2Vjb25kcycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlbGF5U2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogNjA0ODAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxheVNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZGVsYXlTZWNvbmRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkbHFQb2xpY3knLCBSb3NRdWV1ZV9EbHFQb2xpY3lQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5kbHFQb2xpY3kpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBvbGxpbmdXYWl0U2Vjb25kcyAmJiAodHlwZW9mIHByb3BlcnRpZXMucG9sbGluZ1dhaXRTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xsaW5nV2FpdFNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wb2xsaW5nV2FpdFNlY29uZHMsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDMwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xsaW5nV2FpdFNlY29uZHMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucG9sbGluZ1dhaXRTZWNvbmRzKSk7XG4gICAgaWYocHJvcGVydGllcy5tZXNzYWdlUmV0ZW50aW9uUGVyaW9kICYmICh0eXBlb2YgcHJvcGVydGllcy5tZXNzYWdlUmV0ZW50aW9uUGVyaW9kKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZXNzYWdlUmV0ZW50aW9uUGVyaW9kJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWVzc2FnZVJldGVudGlvblBlcmlvZCxcbiAgICAgICAgICAgIG1pbjogNjAsXG4gICAgICAgICAgICBtYXg6IDYwNDgwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWVzc2FnZVJldGVudGlvblBlcmlvZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5tZXNzYWdlUmV0ZW50aW9uUGVyaW9kKSk7XG4gICAgaWYocHJvcGVydGllcy5tYXhpbXVtTWVzc2FnZVNpemUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1heGltdW1NZXNzYWdlU2l6ZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4aW11bU1lc3NhZ2VTaXplJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWF4aW11bU1lc3NhZ2VTaXplLFxuICAgICAgICAgICAgbWluOiAxMDI0LFxuICAgICAgICAgICAgbWF4OiA2NTUzNixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4aW11bU1lc3NhZ2VTaXplJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1heGltdW1NZXNzYWdlU2l6ZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudmlzaWJpbGl0eVRpbWVvdXQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnZpc2liaWxpdHlUaW1lb3V0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2aXNpYmlsaXR5VGltZW91dCcsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnZpc2liaWxpdHlUaW1lb3V0LFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA0MzIwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmlzaWJpbGl0eVRpbWVvdXQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudmlzaWJpbGl0eVRpbWVvdXQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3F1ZXVlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5xdWV1ZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnF1ZXVlTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnF1ZXVlTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnF1ZXVlTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3F1ZXVlTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5xdWV1ZU5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAyNTYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3F1ZXVlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5xdWV1ZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YWdzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFncy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MubGlzdFZhbGlkYXRvcihSb3NRdWV1ZV9UYWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ2dpbmdFbmFibGVkJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5sb2dnaW5nRW5hYmxlZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NRdWV1ZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNTlM6OlF1ZXVlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NRdWV1ZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNTlM6OlF1ZXVlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1F1ZXVlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NRdWV1ZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdRdWV1ZU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnF1ZXVlTmFtZSksXG4gICAgICAnRGVsYXlTZWNvbmRzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxheVNlY29uZHMpLFxuICAgICAgJ0RscVBvbGljeSc6IHJvc1F1ZXVlRGxxUG9saWN5UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGxxUG9saWN5KSxcbiAgICAgICdMb2dnaW5nRW5hYmxlZCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ2dpbmdFbmFibGVkKSxcbiAgICAgICdNYXhpbXVtTWVzc2FnZVNpemUnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1heGltdW1NZXNzYWdlU2l6ZSksXG4gICAgICAnTWVzc2FnZVJldGVudGlvblBlcmlvZCc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWVzc2FnZVJldGVudGlvblBlcmlvZCksXG4gICAgICAnUG9sbGluZ1dhaXRTZWNvbmRzJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb2xsaW5nV2FpdFNlY29uZHMpLFxuICAgICAgJ1RhZ3MnOiByb3MubGlzdE1hcHBlcihyb3NRdWV1ZVRhZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGFncyksXG4gICAgICAnVmlzaWJpbGl0eVRpbWVvdXQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZpc2liaWxpdHlUaW1lb3V0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpNTlM6OlF1ZXVlYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgUXVldWVgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW1ucy1xdWV1ZVxuICovXG5leHBvcnQgY2xhc3MgUm9zUXVldWUgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok1OUzo6UXVldWVcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQVJOLldpdGhTbGFzaDogVGhlIEFSTjogYWNzOm1uczokcmVnaW9uOiRhY2NvdW50aWQ6L3F1ZXVlcy8kcXVldWVOYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcm5XaXRoU2xhc2g6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUXVldWVOYW1lOiBRdWV1ZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJRdWV1ZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUXVldWVVcmw6IFVSTCBvZiBjcmVhdGVkIHF1ZXVlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJRdWV1ZVVybDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcXVldWVOYW1lOiBRdWV1ZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHF1ZXVlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGF5U2Vjb25kczogSXQgaXMgbWVhc3VyZWQgaW4gc2Vjb25kcy4gQWxsIG1lc3NhZ2VzIHNlbnQgdG8gdGhlIHF1ZXVlIGNhbiBiZSBjb25zdW1lZCB1bnRpbCB0aGUgRGVsYXlTZWNvbmRzIGV4cGlyZXMuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDYwNDgwMCAoNyBkYXlzKS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMFxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxheVNlY29uZHM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkbHFQb2xpY3k6IERlYWQtbGV0dGVyIHF1ZXVlIHBvbGljeVxuICAgICAqL1xuICAgIHB1YmxpYyBkbHFQb2xpY3k6IFJvc1F1ZXVlLkRscVBvbGljeVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2dpbmdFbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSBsb2cgbWFuYWdlbWVudC4gXCJ0cnVlXCIgaW5kaWNhdGVzIHRoYXQgbG9nIG1hbmFnZW1lbnQgaXMgZW5hYmxlZCwgd2hlcmVhcyBcImZhbHNlXCIgaW5kaWNhdGVzIHRoYXQgbG9nIG1hbmFnZW1lbnQgaXMgZGlzYWJsZWQuIFxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIGxvZ2dpbmdFbmFibGVkOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1heGltdW1NZXNzYWdlU2l6ZTogTWF4aW11bSBib2R5IGxlbmd0aCBvZiBhIG1lc3NhZ2Ugc2VudCB0byB0aGUgcXVldWUsIG1lYXN1cmVkIGluIGJ5dGVzLlxuICAgICAqIEFuIGludGVnZXIgYmV0d2VlbiAxMDI0ICgxSykgYW5kIDY1NTM2ICg2NEspLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA2NTUzNiAoNjRLKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWF4aW11bU1lc3NhZ2VTaXplOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWVzc2FnZVJldGVudGlvblBlcmlvZDogVGhlIG1heGltdW0gdGltZSB0byBsaXZlIChUVEwpIGZvciBhIG1lc3NhZ2UgaW4gdGhlIHF1ZXVlLiBBZnRlciB0aGUgc3BlY2lmaWVkXG4gICAgICogcGVyaW9kLCB0aGUgbWVzc2FnZSBpcyBkZWxldGVkLCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgaXQgaGFzIGJlZW4gcmV0cmlldmVkLlxuICAgICAqIFZhbGlkIHZhbHVlczogNjAgdG8gNjA0ODAwLiBVbml0OiBzZWNvbmRzLlxuICAgICAqIERlZmF1bHQgdmFsdWU6IDM0NTYwMC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWVzc2FnZVJldGVudGlvblBlcmlvZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGxpbmdXYWl0U2Vjb25kczogSXQgaXMgdGhlIG1heGltdW0gdGltZSB0aGF0IGEgUmVjZWl2ZU1lc3NhZ2UgcmVxdWVzdCBjb3VsZCBiZSB3YWl0aW5nIGZvciBhbnkgaW5jb21pbmcgbWVzc2FnZXMsIHdoaWxlIHRoZXJlIGFyZSBubyBtZXNzYWdlIGluIHRoZSBxdWV1ZS4gTWVhc3VyZWQgaW4gc2Vjb25kcy5cbiAgICAgKiBBbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMzAgc2Vjb25kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMCAoc2Vjb25kcylcbiAgICAgKi9cbiAgICBwdWJsaWMgcG9sbGluZ1dhaXRTZWNvbmRzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gUXVldWUuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgUXVldWUuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnczogUm9zUXVldWUuVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdmlzaWJpbGl0eVRpbWVvdXQ6IER1cmF0aW9uIGluIHdoaWNoIGEgbWVzc2FnZSBzdGF5cyBpbiBJbmFjdGl2ZSBzdGF0dXMgYWZ0ZXIgaXQgaXMgY29uc3VtZWQgZnJvbSB0aGUgcXVldWUuIE1lYXN1cmVkIGluIHNlY29uZHMuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDEgYW5kIDQzMjAwICgxMiBob3VycykuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDMwIChzZWNvbmRzKVxuICAgICAqL1xuICAgIHB1YmxpYyB2aXNpYmlsaXR5VGltZW91dDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1F1ZXVlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NRdWV1ZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQXJuV2l0aFNsYXNoID0gdGhpcy5nZXRBdHQoJ0FSTi5XaXRoU2xhc2gnKTtcbiAgICAgICAgdGhpcy5hdHRyUXVldWVOYW1lID0gdGhpcy5nZXRBdHQoJ1F1ZXVlTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJRdWV1ZVVybCA9IHRoaXMuZ2V0QXR0KCdRdWV1ZVVybCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5xdWV1ZU5hbWUgPSBwcm9wcy5xdWV1ZU5hbWU7XG4gICAgICAgIHRoaXMuZGVsYXlTZWNvbmRzID0gcHJvcHMuZGVsYXlTZWNvbmRzO1xuICAgICAgICB0aGlzLmRscVBvbGljeSA9IHByb3BzLmRscVBvbGljeTtcbiAgICAgICAgdGhpcy5sb2dnaW5nRW5hYmxlZCA9IHByb3BzLmxvZ2dpbmdFbmFibGVkO1xuICAgICAgICB0aGlzLm1heGltdW1NZXNzYWdlU2l6ZSA9IHByb3BzLm1heGltdW1NZXNzYWdlU2l6ZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlUmV0ZW50aW9uUGVyaW9kID0gcHJvcHMubWVzc2FnZVJldGVudGlvblBlcmlvZDtcbiAgICAgICAgdGhpcy5wb2xsaW5nV2FpdFNlY29uZHMgPSBwcm9wcy5wb2xsaW5nV2FpdFNlY29uZHM7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgICAgIHRoaXMudmlzaWJpbGl0eVRpbWVvdXQgPSBwcm9wcy52aXNpYmlsaXR5VGltZW91dDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWV1ZU5hbWU6IHRoaXMucXVldWVOYW1lLFxuICAgICAgICAgICAgZGVsYXlTZWNvbmRzOiB0aGlzLmRlbGF5U2Vjb25kcyxcbiAgICAgICAgICAgIGRscVBvbGljeTogdGhpcy5kbHFQb2xpY3ksXG4gICAgICAgICAgICBsb2dnaW5nRW5hYmxlZDogdGhpcy5sb2dnaW5nRW5hYmxlZCxcbiAgICAgICAgICAgIG1heGltdW1NZXNzYWdlU2l6ZTogdGhpcy5tYXhpbXVtTWVzc2FnZVNpemUsXG4gICAgICAgICAgICBtZXNzYWdlUmV0ZW50aW9uUGVyaW9kOiB0aGlzLm1lc3NhZ2VSZXRlbnRpb25QZXJpb2QsXG4gICAgICAgICAgICBwb2xsaW5nV2FpdFNlY29uZHM6IHRoaXMucG9sbGluZ1dhaXRTZWNvbmRzLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICAgICAgdmlzaWJpbGl0eVRpbWVvdXQ6IHRoaXMudmlzaWJpbGl0eVRpbWVvdXQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1F1ZXVlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zUXVldWUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIERscVBvbGljeVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtYXhSZWNlaXZlQ291bnQ6IE1heGltdW0gbnVtYmVyIG9mIHJldHJpZXNcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1heFJlY2VpdmVDb3VudDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRlYWRMZXR0ZXJUYXJnZXRRdWV1ZTogRGVhZC1sZXR0ZXIgcXVldWUgbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVhZExldHRlclRhcmdldFF1ZXVlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW5hYmxlZDogV2hldGhlciB0byBlbmFibGUgZGVhZC1sZXR0ZXIgcXVldWVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBEbHFQb2xpY3lQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRGxxUG9saWN5UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUXVldWVfRGxxUG9saWN5UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhSZWNlaXZlQ291bnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubWF4UmVjZWl2ZUNvdW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhSZWNlaXZlQ291bnQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWF4UmVjZWl2ZUNvdW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWFkTGV0dGVyVGFyZ2V0UXVldWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVhZExldHRlclRhcmdldFF1ZXVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWFkTGV0dGVyVGFyZ2V0UXVldWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVhZExldHRlclRhcmdldFF1ZXVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmVuYWJsZWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZWQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmVuYWJsZWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRGxxUG9saWN5UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok1OUzo6UXVldWUuRGxxUG9saWN5YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBEbHFQb2xpY3lQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpRdWV1ZS5EbHFQb2xpY3lgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUXVldWVEbHFQb2xpY3lQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zUXVldWVfRGxxUG9saWN5UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnTWF4UmVjZWl2ZUNvdW50Jzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXhSZWNlaXZlQ291bnQpLFxuICAgICAgJ0RlYWRMZXR0ZXJUYXJnZXRRdWV1ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVhZExldHRlclRhcmdldFF1ZXVlKSxcbiAgICAgICdFbmFibGVkJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5hYmxlZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NRdWV1ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGFnc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXk6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NRdWV1ZV9UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUYWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok1OUzo6UXVldWUuVGFnc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNTlM6OlF1ZXVlLlRhZ3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUXVldWVUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1F1ZXVlX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWYWx1ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgJ0tleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1N1YnNjcmlwdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1tbnMtc3Vic2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU3Vic2NyaXB0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuZHBvaW50OiAjIyBUaGUgbWVzc2FnZSBkZWxpdmVyeSBlbmRwb2ludC5cbiAgICAgKiBUaGUgZm9ybWF0IHZhcmllcyBiYXNlZCBvbiB0aGUgYFB1c2hUeXBlYCB2YWx1ZTpcbiAgICAgKiAtIElmIGBQdXNoVHlwZWAgaXMgYGh0dHBgOiBBbiBIVFRQXFwvSFRUUFMgY2FsbGJhY2sgVVJMLCBzdWNoIGFzXG4gICAgICogYGh0dHA6XFwvXFwvZXhhbXBsZS5jb21cXC9jYWxsYmFja2Agb3IgYGh0dHBzOlxcL1xcL2V4YW1wbGUuY29tXFwvY2FsbGJhY2tgLlxuICAgICAqIC0gSWYgYFB1c2hUeXBlYCBpcyBgcXVldWVgOiBUaGUgQVJOIG9mIHRoZSBkZXN0aW5hdGlvbiBxdWV1ZSwgaW4gdGhlIGZvcm1hdFxuICAgICAqIGBhY3M6bW5zOntSZWdpb25JZH06e2FjY291bnQgSUR9OnF1ZXVlc1xcL3tRdWV1ZU5hbWV9YC5cbiAgICAgKiAtIElmIGBQdXNoVHlwZWAgaXMgYGRtYDogVGhlIGVuZHBvaW50IGZvciBlbWFpbCBwdXNoLCBpbiB0aGUgZml4ZWQgZm9ybWF0XG4gICAgICogYHNtcS1lcDpkbTp7YWNjb3VudCBJRH06X19keW5hbWljYC4gUmVwbGFjZSBge2FjY291bnRcbiAgICAgKiBJRH1gIHdpdGggeW91ciBhY2NvdW50IElELlxuICAgICAqIC0gSWYgYFB1c2hUeXBlYCBpcyBgZHlzbXNgOiBUaGUgZW5kcG9pbnQgZm9yIFNNUyBwdXNoLCBpbiB0aGUgZm9ybWF0XG4gICAgICogYHNtcS1lcDpkeXNtczp7YWNjb3VudCBJRH06e01vYmlsZU51bWJlcn1gLlxuICAgICAqIC0gSWYgYFB1c2hUeXBlYCBpcyBga2Fma2FgOiBUaGUgS2Fma2EgcHVzaCBlbmRwb2ludC5cbiAgICAgKiAtIElmIGBQdXNoVHlwZWAgaXMgYGZjYDogVGhlIGVuZHBvaW50IGZvciBGdW5jdGlvbiBDb21wdXRlLCBpbiB0aGUgZm9ybWF0XG4gICAgICogYGFjczpmYzp7UmVnaW9uSWR9OnthY2NvdW50XG4gICAgICogSUR9OnNlcnZpY2VzXFwve1NlcnZpY2VOYW1lfVxcL2Z1bmN0aW9uc1xcL3tGdW5jdGlvbk5hbWV9YC5cbiAgICAgKiAtIElmIGBQdXNoVHlwZWAgaXMgYGV2ZW50YnVzYDogVGhlIGVuZHBvaW50IGZvciBFdmVudEJyaWRnZSwgaW4gdGhlIGZvcm1hdFxuICAgICAqIGBhY3M6ZXZlbnRicmlkZ2U6e1JlZ2lvbklkfTp7YWNjb3VudCBJRH06ZXZlbnRidXNcXC97RXZlbnRCdXNOYW1lfWAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5kcG9pbnQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdWJzY3JpcHRpb25OYW1lOiBTdWJzY3JpcHRpb24gbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN1YnNjcmlwdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0b3BpY05hbWU6IFRvcGljIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSB0b3BpY05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkbHFQb2xpY3k6IERlYWQtbGV0dGVyIHF1ZXVlIHBvbGljeVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRscVBvbGljeT86IFJvc1N1YnNjcmlwdGlvbi5EbHFQb2xpY3lQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmaWx0ZXJUYWc6IE1lc3NhZ2UgZmlsdGVyIHRhZyBpbiB0aGUgY3JlYXRlZCBzdWJzY3JpcHRpb24gKE9ubHkgbWVzc2FnZXMgd2l0aCBjb25zaXN0ZW50IHRhZ3MgYXJlIHB1c2hlZC4pXG4gICAgICogVGhlIHZhbHVlIGlzIGEgc3RyaW5nIG9mIG5vIG1vcmUgdGhhbiAxNiBjaGFyYWN0ZXJzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBubyBtZXNzYWdlIGZpbHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBmaWx0ZXJUYWc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbm90aWZ5Q29udGVudEZvcm1hdDogRm9ybWF0IG9mIHRoZSBtZXNzYWdlIGNvbnRlbnQgcHVzaGVkIHRvIHRoZSBlbmRwb2ludC5cbiAgICAgKiBYTUwsIEpTT04sIG9yIFNJTVBMSUZJRUQ7IGRlZmF1bHQgdmFsdWU6IFhNTC4gRm9yIGRldGFpbHMgYWJvdXQgbWVzc2FnZSBmb3JtYXRzLCByZWZlciB0byBCYXNpYyBDb25jZXB0c1xcL05vdGlmeUNvbnRlbnRGb3JtYXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbm90aWZ5Q29udGVudEZvcm1hdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBub3RpZnlTdHJhdGVneTogUmV0cnkgcG9saWN5IHRoYXQgd2lsbCBiZSBhcHBsaWVkIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGR1cmluZyBtZXNzYWdlIHB1c2ggdG8gdGhlIGVuZHBvaW50LlxuICAgICAqIEJBQ0tPRkZfUkVUUlkgb3IgRVhQT05FTlRJQUxfREVDQVlfUkVUUlk7IGRlZmF1bHQgdmFsdWU6IEJBQ0tPRkZfUkVUUlkuIEZvciBkZXRhaWxzIGFib3V0IHJldHJ5IHBvbGljaWVzLCByZWZlciB0byBCYXNpYyBDb25jZXB0c1xcL05vdGlmeVN0cmF0ZWd5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5vdGlmeVN0cmF0ZWd5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHB1c2hUeXBlOiBQdXNoIHR5cGUgb2YgdGhlIGNyZWF0ZWQgc3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHB1c2hUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1N1YnNjcmlwdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTdWJzY3JpcHRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTdWJzY3JpcHRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLnB1c2hUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5wdXNoVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHVzaFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wdXNoVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJodHRwXCIsXCJxdWV1ZVwiLFwibXB1c2hcIixcImVtYWlsXCIsXCJhbGlzbXNcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwdXNoVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wdXNoVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5kcG9pbnQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZW5kcG9pbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuZHBvaW50Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVuZHBvaW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkbHFQb2xpY3knLCBSb3NTdWJzY3JpcHRpb25fRGxxUG9saWN5UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGxxUG9saWN5KSk7XG4gICAgaWYocHJvcGVydGllcy5ub3RpZnlTdHJhdGVneSAmJiAodHlwZW9mIHByb3BlcnRpZXMubm90aWZ5U3RyYXRlZ3kpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25vdGlmeVN0cmF0ZWd5Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubm90aWZ5U3RyYXRlZ3ksXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQkFDS09GRl9SRVRSWVwiLFwiRVhQT05FTlRJQUxfREVDQVlfUkVUUllcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdub3RpZnlTdHJhdGVneScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ub3RpZnlTdHJhdGVneSkpO1xuICAgIGlmKHByb3BlcnRpZXMubm90aWZ5Q29udGVudEZvcm1hdCAmJiAodHlwZW9mIHByb3BlcnRpZXMubm90aWZ5Q29udGVudEZvcm1hdCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbm90aWZ5Q29udGVudEZvcm1hdCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm5vdGlmeUNvbnRlbnRGb3JtYXQsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiWE1MXCIsXCJKU09OXCIsXCJTSU1QTElGSUVEXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbm90aWZ5Q29udGVudEZvcm1hdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ub3RpZnlDb250ZW50Rm9ybWF0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWJzY3JpcHRpb25OYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN1YnNjcmlwdGlvbk5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnN1YnNjcmlwdGlvbk5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zdWJzY3JpcHRpb25OYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc3Vic2NyaXB0aW9uTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1YnNjcmlwdGlvbk5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc3Vic2NyaXB0aW9uTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDI1NixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3Vic2NyaXB0aW9uTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdWJzY3JpcHRpb25OYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5maWx0ZXJUYWcgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5maWx0ZXJUYWcpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5maWx0ZXJUYWcpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmaWx0ZXJUYWcnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZmlsdGVyVGFnLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAxNixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmlsdGVyVGFnJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZpbHRlclRhZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndG9waWNOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRvcGljTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudG9waWNOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudG9waWNOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudG9waWNOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndG9waWNOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRvcGljTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDI1NixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndG9waWNOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRvcGljTmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NTdWJzY3JpcHRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpTdWJzY3JpcHRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1N1YnNjcmlwdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNTlM6OlN1YnNjcmlwdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTdWJzY3JpcHRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1N1YnNjcmlwdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdFbmRwb2ludCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5kcG9pbnQpLFxuICAgICAgJ1N1YnNjcmlwdGlvbk5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1YnNjcmlwdGlvbk5hbWUpLFxuICAgICAgJ1RvcGljTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudG9waWNOYW1lKSxcbiAgICAgICdEbHFQb2xpY3knOiByb3NTdWJzY3JpcHRpb25EbHFQb2xpY3lQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kbHFQb2xpY3kpLFxuICAgICAgJ0ZpbHRlclRhZyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmlsdGVyVGFnKSxcbiAgICAgICdOb3RpZnlDb250ZW50Rm9ybWF0Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ub3RpZnlDb250ZW50Rm9ybWF0KSxcbiAgICAgICdOb3RpZnlTdHJhdGVneSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubm90aWZ5U3RyYXRlZ3kpLFxuICAgICAgJ1B1c2hUeXBlJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wdXNoVHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6TU5TOjpTdWJzY3JpcHRpb25gLCB3aGljaCBpcyB1c2VkIHRvIGRlc2NyaWJlIGEgc3Vic2NyaXB0aW9uIHJlbGF0aW9uc2hpcCwgaW5jbHVkaW5nIHRoZSBzdWJzY3JpYmVkIHRvcGljIGFuZCB0aGUgZW5kcG9pbnQgdGhhdCB0aGUgc3Vic2NyaWJlciB1c2VzIHRvIHJlY2VpdmUgbWVzc2FnZXMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFN1YnNjcmlwdGlvbmAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbW5zLXN1YnNjcmlwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUm9zU3Vic2NyaXB0aW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpNTlM6OlN1YnNjcmlwdGlvblwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTdWJzY3JpcHRpb25OYW1lOiBTdWJzY3JpcHRpb24gbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3Vic2NyaXB0aW9uTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTdWJzY3JpcHRpb25Vcmw6IFVSTCBvZiBjcmVhdGVkIHN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3Vic2NyaXB0aW9uVXJsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRvcGljTmFtZTogVG9waWMgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVG9waWNOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmRwb2ludDogIyMgVGhlIG1lc3NhZ2UgZGVsaXZlcnkgZW5kcG9pbnQuXG4gICAgICogVGhlIGZvcm1hdCB2YXJpZXMgYmFzZWQgb24gdGhlIGBQdXNoVHlwZWAgdmFsdWU6XG4gICAgICogLSBJZiBgUHVzaFR5cGVgIGlzIGBodHRwYDogQW4gSFRUUFxcL0hUVFBTIGNhbGxiYWNrIFVSTCwgc3VjaCBhc1xuICAgICAqIGBodHRwOlxcL1xcL2V4YW1wbGUuY29tXFwvY2FsbGJhY2tgIG9yIGBodHRwczpcXC9cXC9leGFtcGxlLmNvbVxcL2NhbGxiYWNrYC5cbiAgICAgKiAtIElmIGBQdXNoVHlwZWAgaXMgYHF1ZXVlYDogVGhlIEFSTiBvZiB0aGUgZGVzdGluYXRpb24gcXVldWUsIGluIHRoZSBmb3JtYXRcbiAgICAgKiBgYWNzOm1uczp7UmVnaW9uSWR9OnthY2NvdW50IElEfTpxdWV1ZXNcXC97UXVldWVOYW1lfWAuXG4gICAgICogLSBJZiBgUHVzaFR5cGVgIGlzIGBkbWA6IFRoZSBlbmRwb2ludCBmb3IgZW1haWwgcHVzaCwgaW4gdGhlIGZpeGVkIGZvcm1hdFxuICAgICAqIGBzbXEtZXA6ZG06e2FjY291bnQgSUR9Ol9fZHluYW1pY2AuIFJlcGxhY2UgYHthY2NvdW50XG4gICAgICogSUR9YCB3aXRoIHlvdXIgYWNjb3VudCBJRC5cbiAgICAgKiAtIElmIGBQdXNoVHlwZWAgaXMgYGR5c21zYDogVGhlIGVuZHBvaW50IGZvciBTTVMgcHVzaCwgaW4gdGhlIGZvcm1hdFxuICAgICAqIGBzbXEtZXA6ZHlzbXM6e2FjY291bnQgSUR9OntNb2JpbGVOdW1iZXJ9YC5cbiAgICAgKiAtIElmIGBQdXNoVHlwZWAgaXMgYGthZmthYDogVGhlIEthZmthIHB1c2ggZW5kcG9pbnQuXG4gICAgICogLSBJZiBgUHVzaFR5cGVgIGlzIGBmY2A6IFRoZSBlbmRwb2ludCBmb3IgRnVuY3Rpb24gQ29tcHV0ZSwgaW4gdGhlIGZvcm1hdFxuICAgICAqIGBhY3M6ZmM6e1JlZ2lvbklkfTp7YWNjb3VudFxuICAgICAqIElEfTpzZXJ2aWNlc1xcL3tTZXJ2aWNlTmFtZX1cXC9mdW5jdGlvbnNcXC97RnVuY3Rpb25OYW1lfWAuXG4gICAgICogLSBJZiBgUHVzaFR5cGVgIGlzIGBldmVudGJ1c2A6IFRoZSBlbmRwb2ludCBmb3IgRXZlbnRCcmlkZ2UsIGluIHRoZSBmb3JtYXRcbiAgICAgKiBgYWNzOmV2ZW50YnJpZGdlOntSZWdpb25JZH06e2FjY291bnQgSUR9OmV2ZW50YnVzXFwve0V2ZW50QnVzTmFtZX1gLlxuICAgICAqL1xuICAgIHB1YmxpYyBlbmRwb2ludDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN1YnNjcmlwdGlvbk5hbWU6IFN1YnNjcmlwdGlvbiBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHN1YnNjcmlwdGlvbk5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0b3BpY05hbWU6IFRvcGljIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9waWNOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGxxUG9saWN5OiBEZWFkLWxldHRlciBxdWV1ZSBwb2xpY3lcbiAgICAgKi9cbiAgICBwdWJsaWMgZGxxUG9saWN5OiBSb3NTdWJzY3JpcHRpb24uRGxxUG9saWN5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmlsdGVyVGFnOiBNZXNzYWdlIGZpbHRlciB0YWcgaW4gdGhlIGNyZWF0ZWQgc3Vic2NyaXB0aW9uIChPbmx5IG1lc3NhZ2VzIHdpdGggY29uc2lzdGVudCB0YWdzIGFyZSBwdXNoZWQuKVxuICAgICAqIFRoZSB2YWx1ZSBpcyBhIHN0cmluZyBvZiBubyBtb3JlIHRoYW4gMTYgY2hhcmFjdGVycy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgbm8gbWVzc2FnZSBmaWx0ZXIuXG4gICAgICovXG4gICAgcHVibGljIGZpbHRlclRhZzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5vdGlmeUNvbnRlbnRGb3JtYXQ6IEZvcm1hdCBvZiB0aGUgbWVzc2FnZSBjb250ZW50IHB1c2hlZCB0byB0aGUgZW5kcG9pbnQuXG4gICAgICogWE1MLCBKU09OLCBvciBTSU1QTElGSUVEOyBkZWZhdWx0IHZhbHVlOiBYTUwuIEZvciBkZXRhaWxzIGFib3V0IG1lc3NhZ2UgZm9ybWF0cywgcmVmZXIgdG8gQmFzaWMgQ29uY2VwdHNcXC9Ob3RpZnlDb250ZW50Rm9ybWF0LlxuICAgICAqL1xuICAgIHB1YmxpYyBub3RpZnlDb250ZW50Rm9ybWF0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbm90aWZ5U3RyYXRlZ3k6IFJldHJ5IHBvbGljeSB0aGF0IHdpbGwgYmUgYXBwbGllZCB3aGVuIGFuIGVycm9yIG9jY3VycyBkdXJpbmcgbWVzc2FnZSBwdXNoIHRvIHRoZSBlbmRwb2ludC5cbiAgICAgKiBCQUNLT0ZGX1JFVFJZIG9yIEVYUE9ORU5USUFMX0RFQ0FZX1JFVFJZOyBkZWZhdWx0IHZhbHVlOiBCQUNLT0ZGX1JFVFJZLiBGb3IgZGV0YWlscyBhYm91dCByZXRyeSBwb2xpY2llcywgcmVmZXIgdG8gQmFzaWMgQ29uY2VwdHNcXC9Ob3RpZnlTdHJhdGVneS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbm90aWZ5U3RyYXRlZ3k6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwdXNoVHlwZTogUHVzaCB0eXBlIG9mIHRoZSBjcmVhdGVkIHN1YnNjcmlwdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHVzaFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTdWJzY3JpcHRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1N1YnNjcmlwdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyU3Vic2NyaXB0aW9uTmFtZSA9IHRoaXMuZ2V0QXR0KCdTdWJzY3JpcHRpb25OYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clN1YnNjcmlwdGlvblVybCA9IHRoaXMuZ2V0QXR0KCdTdWJzY3JpcHRpb25VcmwnKTtcbiAgICAgICAgdGhpcy5hdHRyVG9waWNOYW1lID0gdGhpcy5nZXRBdHQoJ1RvcGljTmFtZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9IHByb3BzLmVuZHBvaW50O1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbk5hbWUgPSBwcm9wcy5zdWJzY3JpcHRpb25OYW1lO1xuICAgICAgICB0aGlzLnRvcGljTmFtZSA9IHByb3BzLnRvcGljTmFtZTtcbiAgICAgICAgdGhpcy5kbHFQb2xpY3kgPSBwcm9wcy5kbHFQb2xpY3k7XG4gICAgICAgIHRoaXMuZmlsdGVyVGFnID0gcHJvcHMuZmlsdGVyVGFnO1xuICAgICAgICB0aGlzLm5vdGlmeUNvbnRlbnRGb3JtYXQgPSBwcm9wcy5ub3RpZnlDb250ZW50Rm9ybWF0O1xuICAgICAgICB0aGlzLm5vdGlmeVN0cmF0ZWd5ID0gcHJvcHMubm90aWZ5U3RyYXRlZ3k7XG4gICAgICAgIHRoaXMucHVzaFR5cGUgPSBwcm9wcy5wdXNoVHlwZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbmRwb2ludDogdGhpcy5lbmRwb2ludCxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbk5hbWU6IHRoaXMuc3Vic2NyaXB0aW9uTmFtZSxcbiAgICAgICAgICAgIHRvcGljTmFtZTogdGhpcy50b3BpY05hbWUsXG4gICAgICAgICAgICBkbHFQb2xpY3k6IHRoaXMuZGxxUG9saWN5LFxuICAgICAgICAgICAgZmlsdGVyVGFnOiB0aGlzLmZpbHRlclRhZyxcbiAgICAgICAgICAgIG5vdGlmeUNvbnRlbnRGb3JtYXQ6IHRoaXMubm90aWZ5Q29udGVudEZvcm1hdCxcbiAgICAgICAgICAgIG5vdGlmeVN0cmF0ZWd5OiB0aGlzLm5vdGlmeVN0cmF0ZWd5LFxuICAgICAgICAgICAgcHVzaFR5cGU6IHRoaXMucHVzaFR5cGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1N1YnNjcmlwdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc1N1YnNjcmlwdGlvbiB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRGxxUG9saWN5UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRlYWRMZXR0ZXJUYXJnZXRRdWV1ZTogRGVhZC1sZXR0ZXIgcXVldWUgbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVhZExldHRlclRhcmdldFF1ZXVlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW5hYmxlZDogV2hldGhlciB0byBlbmFibGUgZGVhZC1sZXR0ZXIgcXVldWVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBEbHFQb2xpY3lQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRGxxUG9saWN5UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU3Vic2NyaXB0aW9uX0RscVBvbGljeVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVhZExldHRlclRhcmdldFF1ZXVlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRlYWRMZXR0ZXJUYXJnZXRRdWV1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVhZExldHRlclRhcmdldFF1ZXVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlYWRMZXR0ZXJUYXJnZXRRdWV1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5lbmFibGVkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVkJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkRscVBvbGljeVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNTlM6OlN1YnNjcmlwdGlvbi5EbHFQb2xpY3lgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERscVBvbGljeVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNTlM6OlN1YnNjcmlwdGlvbi5EbHFQb2xpY3lgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU3Vic2NyaXB0aW9uRGxxUG9saWN5UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1N1YnNjcmlwdGlvbl9EbHFQb2xpY3lQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdEZWFkTGV0dGVyVGFyZ2V0UXVldWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlYWRMZXR0ZXJUYXJnZXRRdWV1ZSksXG4gICAgICAnRW5hYmxlZCc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zVG9waWNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbW5zLXRvcGljXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVG9waWNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdG9waWNOYW1lOiBUb3BpYyBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgdG9waWNOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nZ2luZ0VuYWJsZWQ6IFdoZXRoZXIgdG8gZW5hYmxlIGxvZyBtYW5hZ2VtZW50LiBcInRydWVcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBlbmFibGVkLCB3aGVyZWFzIFwiZmFsc2VcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBkaXNhYmxlZC4gXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dnaW5nRW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF4aW11bU1lc3NhZ2VTaXplOiBNYXhpbXVtIGJvZHkgbGVuZ3RoIG9mIGEgbWVzc2FnZSBzZW50IHRvIHRoZSB0b3BpYywgaW4gdGhlIHVuaXQgb2YgYnl0ZXMuXG4gICAgICogQW4gaW50ZWdlciBpbiB0aGUgcmFuZ2Ugb2YgMSwwMjQgKDEgS0IpIHRvIDY1LCA1MzYgKDY0IEtCKTsgZGVmYXVsdCB2YWx1ZTogNjUsNTM2ICg2NCBLQikuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF4aW11bU1lc3NhZ2VTaXplPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIFRvcGljLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIFRvcGljLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc1RvcGljLlRhZ3NQcm9wZXJ0eVtdO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1RvcGljUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RvcGljUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVG9waWNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1heGltdW1NZXNzYWdlU2l6ZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubWF4aW11bU1lc3NhZ2VTaXplKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhpbXVtTWVzc2FnZVNpemUnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tYXhpbXVtTWVzc2FnZVNpemUsXG4gICAgICAgICAgICBtaW46IDEwMjQsXG4gICAgICAgICAgICBtYXg6IDY1NTM2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhpbXVtTWVzc2FnZVNpemUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWF4aW11bU1lc3NhZ2VTaXplKSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zVG9waWNfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy50YWdzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0b3BpY05hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudG9waWNOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy50b3BpY05hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50b3BpY05hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50b3BpY05hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0b3BpY05hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudG9waWNOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMjU2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0b3BpY05hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudG9waWNOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dnaW5nRW5hYmxlZCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMubG9nZ2luZ0VuYWJsZWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVG9waWNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpUb3BpY2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVG9waWNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpUb3BpY2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NUb3BpY1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVG9waWNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnVG9waWNOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50b3BpY05hbWUpLFxuICAgICAgJ0xvZ2dpbmdFbmFibGVkJzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nZ2luZ0VuYWJsZWQpLFxuICAgICAgJ01heGltdW1NZXNzYWdlU2l6ZSc6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4aW11bU1lc3NhZ2VTaXplKSxcbiAgICAgICdUYWdzJzogcm9zLmxpc3RNYXBwZXIocm9zVG9waWNUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhZ3MpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46Ok1OUzo6VG9waWNgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBUb3BpY2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tbW5zLXRvcGljXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NUb3BpYyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6TU5TOjpUb3BpY1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBUk4uV2l0aFNsYXNoOiBUaGUgQVJOOiBhY3M6bW5zOiRyZWdpb246JGFjY291bnRpZDovdG9waWNzLyR0b3BpY05hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFybldpdGhTbGFzaDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUb3BpY05hbWU6IFRvcGljIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRvcGljTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUb3BpY1VybDogVVJMIG9mIGNyZWF0ZWQgdG9waWNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRvcGljVXJsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0b3BpY05hbWU6IFRvcGljIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9waWNOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nZ2luZ0VuYWJsZWQ6IFdoZXRoZXIgdG8gZW5hYmxlIGxvZyBtYW5hZ2VtZW50LiBcInRydWVcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBlbmFibGVkLCB3aGVyZWFzIFwiZmFsc2VcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBkaXNhYmxlZC4gXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nZ2luZ0VuYWJsZWQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF4aW11bU1lc3NhZ2VTaXplOiBNYXhpbXVtIGJvZHkgbGVuZ3RoIG9mIGEgbWVzc2FnZSBzZW50IHRvIHRoZSB0b3BpYywgaW4gdGhlIHVuaXQgb2YgYnl0ZXMuXG4gICAgICogQW4gaW50ZWdlciBpbiB0aGUgcmFuZ2Ugb2YgMSwwMjQgKDEgS0IpIHRvIDY1LCA1MzYgKDY0IEtCKTsgZGVmYXVsdCB2YWx1ZTogNjUsNTM2ICg2NCBLQikuXG4gICAgICovXG4gICAgcHVibGljIG1heGltdW1NZXNzYWdlU2l6ZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIFRvcGljLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIFRvcGljLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcHVibGljIHRhZ3M6IFJvc1RvcGljLlRhZ3NQcm9wZXJ0eVtdIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1RvcGljUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NUb3BpYy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQXJuV2l0aFNsYXNoID0gdGhpcy5nZXRBdHQoJ0FSTi5XaXRoU2xhc2gnKTtcbiAgICAgICAgdGhpcy5hdHRyVG9waWNOYW1lID0gdGhpcy5nZXRBdHQoJ1RvcGljTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJUb3BpY1VybCA9IHRoaXMuZ2V0QXR0KCdUb3BpY1VybCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy50b3BpY05hbWUgPSBwcm9wcy50b3BpY05hbWU7XG4gICAgICAgIHRoaXMubG9nZ2luZ0VuYWJsZWQgPSBwcm9wcy5sb2dnaW5nRW5hYmxlZDtcbiAgICAgICAgdGhpcy5tYXhpbXVtTWVzc2FnZVNpemUgPSBwcm9wcy5tYXhpbXVtTWVzc2FnZVNpemU7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9waWNOYW1lOiB0aGlzLnRvcGljTmFtZSxcbiAgICAgICAgICAgIGxvZ2dpbmdFbmFibGVkOiB0aGlzLmxvZ2dpbmdFbmFibGVkLFxuICAgICAgICAgICAgbWF4aW11bU1lc3NhZ2VTaXplOiB0aGlzLm1heGltdW1NZXNzYWdlU2l6ZSxcbiAgICAgICAgICAgIHRhZ3M6IHRoaXMudGFncyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVG9waWNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NUb3BpYyB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGFnc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXk6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NUb3BpY19UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2YWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52YWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmtleSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUYWdzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok1OUzo6VG9waWMuVGFnc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpNTlM6OlRvcGljLlRhZ3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zVG9waWNUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1RvcGljX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWYWx1ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgJ0tleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuIl19