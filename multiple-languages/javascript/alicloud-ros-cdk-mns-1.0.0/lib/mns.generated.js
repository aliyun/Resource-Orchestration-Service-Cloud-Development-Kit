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
class RosQueue extends ros.RosResource {
    /**
     * Create a new `ALIYUN::MNS::Queue`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    errors.collect(ros.propertyValidator('endpoint', ros.requiredValidator)(properties.endpoint));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
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
class RosSubscription extends ros.RosResource {
    /**
     * Create a new `ALIYUN::MNS::Subscription`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            endpoint: this.endpoint,
            subscriptionName: this.subscriptionName,
            topicName: this.topicName,
            filterTag: this.filterTag,
            notifyContentFormat: this.notifyContentFormat,
            notifyStrategy: this.notifyStrategy,
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
        TopicName: ros.stringToRosTemplate(properties.topicName),
        LoggingEnabled: ros.booleanToRosTemplate(properties.loggingEnabled),
        MaximumMessageSize: ros.numberToRosTemplate(properties.maximumMessageSize),
    };
}
/**
 * A ROS template type:  `ALIYUN::MNS::Topic`
 */
class RosTopic extends ros.RosResource {
    /**
     * Create a new `ALIYUN::MNS::Topic`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosTopic.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArnWithSlash = ros.Token.asString(this.getAtt('ARN.WithSlash'));
        this.attrTopicName = ros.Token.asString(this.getAtt('TopicName'));
        this.attrTopicUrl = ros.Token.asString(this.getAtt('TopicUrl'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.topicName = props.topicName;
        this.loggingEnabled = props.loggingEnabled;
        this.maximumMessageSize = props.maximumMessageSize;
    }
    get rosProperties() {
        return {
            topicName: this.topicName,
            loggingEnabled: this.loggingEnabled,
            maximumMessageSize: this.maximumMessageSize,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW5zLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1ucy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWlEOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxzQkFBc0IsQ0FBQyxVQUFlO0lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLElBQUcsVUFBVSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUN6RSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BFLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWTtZQUM3QixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxNQUFNO1NBQ1osQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbkcsSUFBRyxVQUFVLENBQUMsa0JBQWtCLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNyRixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxrQkFBa0I7WUFDbkMsR0FBRyxF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LE9BQU87WUFDSCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7U0FDOUMsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLDBCQUEwQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNwRixDQUFDOztBQTNFTCw0QkE0RUM7QUEzRUc7O0dBRUc7QUFDb0IsK0JBQXNCLEdBQUcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6TU5TOjpRdWV1ZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NRdWV1ZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBxdWV1ZU5hbWU6IFF1ZXVlIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBxdWV1ZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxheVNlY29uZHM6IEl0IGlzIG1lYXN1cmVkIGluIHNlY29uZHMuIEFsbCBtZXNzYWdlcyBzZW50IHRvIHRoZSBxdWV1ZSBjYW4gYmUgY29uc3VtZWQgdW50aWwgdGhlIERlbGF5U2Vjb25kcyBleHBpcmVzLlxuICAgICAqIEFuIGludGVnZXIgYmV0d2VlbiAwIGFuZCA2MDQ4MDAgKDcgZGF5cykuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDBcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxheVNlY29uZHM/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nZ2luZ0VuYWJsZWQ6IFdoZXRoZXIgdG8gZW5hYmxlIGxvZyBtYW5hZ2VtZW50LiBcInRydWVcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBlbmFibGVkLCB3aGVyZWFzIFwiZmFsc2VcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBkaXNhYmxlZC4gXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dnaW5nRW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF4aW11bU1lc3NhZ2VTaXplOiBNYXhpbXVtIGJvZHkgbGVuZ3RoIG9mIGEgbWVzc2FnZSBzZW50IHRvIHRoZSBxdWV1ZSwgbWVhc3VyZWQgaW4gYnl0ZXMuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDEwMjQgKDFLKSBhbmQgNjU1MzYgKDY0SykuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDY1NTM2ICg2NEspLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1heGltdW1NZXNzYWdlU2l6ZT86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtZXNzYWdlUmV0ZW50aW9uUGVyaW9kOiBNYXhpbXVtIGxpZmV0aW1lIG9mIHRoZSBtZXNzYWdlIGluIHRoZSBxdWV1ZSwgbWVhc3VyZWQgaW4gc2Vjb25kcy4gQWZ0ZXIgdGhlIHRpbWUgc3BlY2lmaWVkIGJ5IHRoaXMgcGFyYW1ldGVyIGV4cGlyZXMsIHRoZSBtZXNzYWdlIHdpbGwgYmUgZGVsZXRlZCBubyBtYXR0ZXIgd2hldGhlciBpdCBoYXMgYmVlbiBjb25zdW1lZCBvciBub3QuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDYwICgxIG1pbnV0ZSkgYW5kIDEyOTYwMDAgKDE1IGRheXMpLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAzNDU2MDAgKDQgZGF5cylcbiAgICAgKi9cbiAgICByZWFkb25seSBtZXNzYWdlUmV0ZW50aW9uUGVyaW9kPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGxpbmdXYWl0U2Vjb25kczogSXQgaXMgdGhlIG1heGltdW0gdGltZSB0aGF0IGEgUmVjZWl2ZU1lc3NhZ2UgcmVxdWVzdCBjb3VsZCBiZSB3YWl0aW5nIGZvciBhbnkgaW5jb21pbmcgbWVzc2FnZXMsIHdoaWxlIHRoZXJlIGFyZSBubyBtZXNzYWdlIGluIHRoZSBxdWV1ZS4gTWVhc3VyZWQgaW4gc2Vjb25kcy5cbiAgICAgKiBBbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMzAgc2Vjb25kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMCAoc2Vjb25kcylcbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xsaW5nV2FpdFNlY29uZHM/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdmlzaWJpbGl0eVRpbWVvdXQ6IER1cmF0aW9uIGluIHdoaWNoIGEgbWVzc2FnZSBzdGF5cyBpbiBJbmFjdGl2ZSBzdGF0dXMgYWZ0ZXIgaXQgaXMgY29uc3VtZWQgZnJvbSB0aGUgcXVldWUuIE1lYXN1cmVkIGluIHNlY29uZHMuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDEgYW5kIDQzMjAwICgxMiBob3VycykuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDMwIChzZWNvbmRzKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZpc2liaWxpdHlUaW1lb3V0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1F1ZXVlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1F1ZXVlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUXVldWVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRlbGF5U2Vjb25kcyAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGVsYXlTZWNvbmRzKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxheVNlY29uZHMnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZWxheVNlY29uZHMsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDYwNDgwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsYXlTZWNvbmRzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmRlbGF5U2Vjb25kcykpO1xuICAgIGlmKHByb3BlcnRpZXMucG9sbGluZ1dhaXRTZWNvbmRzICYmICh0eXBlb2YgcHJvcGVydGllcy5wb2xsaW5nV2FpdFNlY29uZHMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGxpbmdXYWl0U2Vjb25kcycsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBvbGxpbmdXYWl0U2Vjb25kcyxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMzAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGxpbmdXYWl0U2Vjb25kcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wb2xsaW5nV2FpdFNlY29uZHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1lc3NhZ2VSZXRlbnRpb25QZXJpb2QgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1lc3NhZ2VSZXRlbnRpb25QZXJpb2QpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21lc3NhZ2VSZXRlbnRpb25QZXJpb2QnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tZXNzYWdlUmV0ZW50aW9uUGVyaW9kLFxuICAgICAgICAgICAgbWluOiA2MCxcbiAgICAgICAgICAgIG1heDogNjA0ODAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZXNzYWdlUmV0ZW50aW9uUGVyaW9kJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLm1lc3NhZ2VSZXRlbnRpb25QZXJpb2QpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1heGltdW1NZXNzYWdlU2l6ZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubWF4aW11bU1lc3NhZ2VTaXplKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhpbXVtTWVzc2FnZVNpemUnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tYXhpbXVtTWVzc2FnZVNpemUsXG4gICAgICAgICAgICBtaW46IDEwMjQsXG4gICAgICAgICAgICBtYXg6IDY1NTM2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhpbXVtTWVzc2FnZVNpemUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWF4aW11bU1lc3NhZ2VTaXplKSk7XG4gICAgaWYocHJvcGVydGllcy52aXNpYmlsaXR5VGltZW91dCAmJiAodHlwZW9mIHByb3BlcnRpZXMudmlzaWJpbGl0eVRpbWVvdXQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Zpc2liaWxpdHlUaW1lb3V0Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudmlzaWJpbGl0eVRpbWVvdXQsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDQzMjAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2aXNpYmlsaXR5VGltZW91dCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy52aXNpYmlsaXR5VGltZW91dCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVldWVOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnF1ZXVlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucXVldWVOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMucXVldWVOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMucXVldWVOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVldWVOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnF1ZXVlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDI1NixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncXVldWVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1ZXVlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nZ2luZ0VuYWJsZWQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmxvZ2dpbmdFbmFibGVkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1F1ZXVlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok1OUzo6UXVldWVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1F1ZXVlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok1OUzo6UXVldWVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUXVldWVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1F1ZXVlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgUXVldWVOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnF1ZXVlTmFtZSksXG4gICAgICBEZWxheVNlY29uZHM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVsYXlTZWNvbmRzKSxcbiAgICAgIExvZ2dpbmdFbmFibGVkOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dnaW5nRW5hYmxlZCksXG4gICAgICBNYXhpbXVtTWVzc2FnZVNpemU6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4aW11bU1lc3NhZ2VTaXplKSxcbiAgICAgIE1lc3NhZ2VSZXRlbnRpb25QZXJpb2Q6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWVzc2FnZVJldGVudGlvblBlcmlvZCksXG4gICAgICBQb2xsaW5nV2FpdFNlY29uZHM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucG9sbGluZ1dhaXRTZWNvbmRzKSxcbiAgICAgIFZpc2liaWxpdHlUaW1lb3V0OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZpc2liaWxpdHlUaW1lb3V0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpNTlM6OlF1ZXVlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zUXVldWUgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok1OUzo6UXVldWVcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBUk4uV2l0aFNsYXNoOiBUaGUgQVJOOiBhY3M6bW5zOiRyZWdpb246JGFjY291bnRpZDovcXVldWVzLyRxdWV1ZU5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFybldpdGhTbGFzaDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBRdWV1ZVVybDogVVJMIG9mIGNyZWF0ZWQgcXVldWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clF1ZXVlVXJsOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBxdWV1ZU5hbWU6IFF1ZXVlIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcXVldWVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsYXlTZWNvbmRzOiBJdCBpcyBtZWFzdXJlZCBpbiBzZWNvbmRzLiBBbGwgbWVzc2FnZXMgc2VudCB0byB0aGUgcXVldWUgY2FuIGJlIGNvbnN1bWVkIHVudGlsIHRoZSBEZWxheVNlY29uZHMgZXhwaXJlcy5cbiAgICAgKiBBbiBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgNjA0ODAwICg3IGRheXMpLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwXG4gICAgICovXG4gICAgcHVibGljIGRlbGF5U2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ2dpbmdFbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSBsb2cgbWFuYWdlbWVudC4gXCJ0cnVlXCIgaW5kaWNhdGVzIHRoYXQgbG9nIG1hbmFnZW1lbnQgaXMgZW5hYmxlZCwgd2hlcmVhcyBcImZhbHNlXCIgaW5kaWNhdGVzIHRoYXQgbG9nIG1hbmFnZW1lbnQgaXMgZGlzYWJsZWQuIFxuICAgICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIGxvZ2dpbmdFbmFibGVkOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1heGltdW1NZXNzYWdlU2l6ZTogTWF4aW11bSBib2R5IGxlbmd0aCBvZiBhIG1lc3NhZ2Ugc2VudCB0byB0aGUgcXVldWUsIG1lYXN1cmVkIGluIGJ5dGVzLlxuICAgICAqIEFuIGludGVnZXIgYmV0d2VlbiAxMDI0ICgxSykgYW5kIDY1NTM2ICg2NEspLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA2NTUzNiAoNjRLKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWF4aW11bU1lc3NhZ2VTaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWVzc2FnZVJldGVudGlvblBlcmlvZDogTWF4aW11bSBsaWZldGltZSBvZiB0aGUgbWVzc2FnZSBpbiB0aGUgcXVldWUsIG1lYXN1cmVkIGluIHNlY29uZHMuIEFmdGVyIHRoZSB0aW1lIHNwZWNpZmllZCBieSB0aGlzIHBhcmFtZXRlciBleHBpcmVzLCB0aGUgbWVzc2FnZSB3aWxsIGJlIGRlbGV0ZWQgbm8gbWF0dGVyIHdoZXRoZXIgaXQgaGFzIGJlZW4gY29uc3VtZWQgb3Igbm90LlxuICAgICAqIEFuIGludGVnZXIgYmV0d2VlbiA2MCAoMSBtaW51dGUpIGFuZCAxMjk2MDAwICgxNSBkYXlzKS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMzQ1NjAwICg0IGRheXMpXG4gICAgICovXG4gICAgcHVibGljIG1lc3NhZ2VSZXRlbnRpb25QZXJpb2Q6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xsaW5nV2FpdFNlY29uZHM6IEl0IGlzIHRoZSBtYXhpbXVtIHRpbWUgdGhhdCBhIFJlY2VpdmVNZXNzYWdlIHJlcXVlc3QgY291bGQgYmUgd2FpdGluZyBmb3IgYW55IGluY29taW5nIG1lc3NhZ2VzLCB3aGlsZSB0aGVyZSBhcmUgbm8gbWVzc2FnZSBpbiB0aGUgcXVldWUuIE1lYXN1cmVkIGluIHNlY29uZHMuXG4gICAgICogQW4gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDMwIHNlY29uZHMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAgKHNlY29uZHMpXG4gICAgICovXG4gICAgcHVibGljIHBvbGxpbmdXYWl0U2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZpc2liaWxpdHlUaW1lb3V0OiBEdXJhdGlvbiBpbiB3aGljaCBhIG1lc3NhZ2Ugc3RheXMgaW4gSW5hY3RpdmUgc3RhdHVzIGFmdGVyIGl0IGlzIGNvbnN1bWVkIGZyb20gdGhlIHF1ZXVlLiBNZWFzdXJlZCBpbiBzZWNvbmRzLlxuICAgICAqIEFuIGludGVnZXIgYmV0d2VlbiAxIGFuZCA0MzIwMCAoMTIgaG91cnMpLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAzMCAoc2Vjb25kcylcbiAgICAgKi9cbiAgICBwdWJsaWMgdmlzaWJpbGl0eVRpbWVvdXQ6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpNTlM6OlF1ZXVlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NRdWV1ZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zUXVldWUuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFybldpdGhTbGFzaCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnQVJOLldpdGhTbGFzaCcpKTtcbiAgICAgICAgdGhpcy5hdHRyUXVldWVVcmwgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1F1ZXVlVXJsJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5xdWV1ZU5hbWUgPSBwcm9wcy5xdWV1ZU5hbWU7XG4gICAgICAgIHRoaXMuZGVsYXlTZWNvbmRzID0gcHJvcHMuZGVsYXlTZWNvbmRzO1xuICAgICAgICB0aGlzLmxvZ2dpbmdFbmFibGVkID0gcHJvcHMubG9nZ2luZ0VuYWJsZWQ7XG4gICAgICAgIHRoaXMubWF4aW11bU1lc3NhZ2VTaXplID0gcHJvcHMubWF4aW11bU1lc3NhZ2VTaXplO1xuICAgICAgICB0aGlzLm1lc3NhZ2VSZXRlbnRpb25QZXJpb2QgPSBwcm9wcy5tZXNzYWdlUmV0ZW50aW9uUGVyaW9kO1xuICAgICAgICB0aGlzLnBvbGxpbmdXYWl0U2Vjb25kcyA9IHByb3BzLnBvbGxpbmdXYWl0U2Vjb25kcztcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5VGltZW91dCA9IHByb3BzLnZpc2liaWxpdHlUaW1lb3V0O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXVlTmFtZTogdGhpcy5xdWV1ZU5hbWUsXG4gICAgICAgICAgICBkZWxheVNlY29uZHM6IHRoaXMuZGVsYXlTZWNvbmRzLFxuICAgICAgICAgICAgbG9nZ2luZ0VuYWJsZWQ6IHRoaXMubG9nZ2luZ0VuYWJsZWQsXG4gICAgICAgICAgICBtYXhpbXVtTWVzc2FnZVNpemU6IHRoaXMubWF4aW11bU1lc3NhZ2VTaXplLFxuICAgICAgICAgICAgbWVzc2FnZVJldGVudGlvblBlcmlvZDogdGhpcy5tZXNzYWdlUmV0ZW50aW9uUGVyaW9kLFxuICAgICAgICAgICAgcG9sbGluZ1dhaXRTZWNvbmRzOiB0aGlzLnBvbGxpbmdXYWl0U2Vjb25kcyxcbiAgICAgICAgICAgIHZpc2liaWxpdHlUaW1lb3V0OiB0aGlzLnZpc2liaWxpdHlUaW1lb3V0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NRdWV1ZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6TU5TOjpTdWJzY3JpcHRpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU3Vic2NyaXB0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuZHBvaW50OiBUZXJtaW5hbCBhZGRyZXNzIG9mIHRoZSBtZXNzYWdlIHJlY2lwaWVudCBmb3IgdGhlIGNyZWF0ZWQgc3Vic2NyaXB0aW9uLlxuICAgICAqIEN1cnJlbnRseSwgZm91ciB0eXBlcyBvZiBlbmRwb2ludHMgYXJlIHN1cHBvcnRlZDogXG4gICAgICogMS4gSHR0cEVuZHBvaW50LCB3aGljaCBtdXN0IGJlIHByZWZpeGVkIHdpdGggXCJodHRwOi8vXCI7IFxuICAgICAqIDIuIFF1ZXVlRW5kcG9pbnQsIGluIHRoZSBmb3JtYXQgb2YgYWNzOm1uczp7UkVHSU9OfTp7QWNjb3VudElEfTpxdWV1ZXMve1F1ZXVlTmFtZX07IFxuICAgICAqIDMuIE1haWxFbmRwb2ludCwgaW4gdGhlIGZvcm1hdCBvZiBtYWlsOmRpcmVjdG1haWw6e01haWxBZGRyZXNzfTsgXG4gICAgICogNC4gU21zRW5kcG9pbnQsIGluIHRoZSBmb3JtYXQgb2Ygc21zOmRpcmVjdHNtczphbm9ueW1vdXMgb3Igc21zOmRpcmVjdHNtczp7UGhvbmV9LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuZHBvaW50OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3Vic2NyaXB0aW9uTmFtZTogU3Vic2NyaXB0aW9uIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBzdWJzY3JpcHRpb25OYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdG9waWNOYW1lOiBUb3BpYyBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgdG9waWNOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmlsdGVyVGFnOiBNZXNzYWdlIGZpbHRlciB0YWcgaW4gdGhlIGNyZWF0ZWQgc3Vic2NyaXB0aW9uIChPbmx5IG1lc3NhZ2VzIHdpdGggY29uc2lzdGVudCB0YWdzIGFyZSBwdXNoZWQuKVxuICAgICAqIFRoZSB2YWx1ZSBpcyBhIHN0cmluZyBvZiBubyBtb3JlIHRoYW4gMTYgY2hhcmFjdGVycy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgbm8gbWVzc2FnZSBmaWx0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmlsdGVyVGFnPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5vdGlmeUNvbnRlbnRGb3JtYXQ6IEZvcm1hdCBvZiB0aGUgbWVzc2FnZSBjb250ZW50IHB1c2hlZCB0byB0aGUgZW5kcG9pbnQuXG4gICAgICogWE1MLCBKU09OLCBvciBTSU1QTElGSUVEOyBkZWZhdWx0IHZhbHVlOiBYTUwuIEZvciBkZXRhaWxzIGFib3V0IG1lc3NhZ2UgZm9ybWF0cywgcmVmZXIgdG8gQmFzaWMgQ29uY2VwdHMvTm90aWZ5Q29udGVudEZvcm1hdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBub3RpZnlDb250ZW50Rm9ybWF0Pzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5vdGlmeVN0cmF0ZWd5OiBSZXRyeSBwb2xpY3kgdGhhdCB3aWxsIGJlIGFwcGxpZWQgd2hlbiBhbiBlcnJvciBvY2N1cnMgZHVyaW5nIG1lc3NhZ2UgcHVzaCB0byB0aGUgZW5kcG9pbnQuXG4gICAgICogQkFDS09GRl9SRVRSWSBvciBFWFBPTkVOVElBTF9ERUNBWV9SRVRSWTsgZGVmYXVsdCB2YWx1ZTogQkFDS09GRl9SRVRSWS4gRm9yIGRldGFpbHMgYWJvdXQgcmV0cnkgcG9saWNpZXMsIHJlZmVyIHRvIEJhc2ljIENvbmNlcHRzL05vdGlmeVN0cmF0ZWd5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5vdGlmeVN0cmF0ZWd5Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1N1YnNjcmlwdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTdWJzY3JpcHRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTdWJzY3JpcHRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuZHBvaW50Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmVuZHBvaW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmRwb2ludCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lbmRwb2ludCkpO1xuICAgIGlmKHByb3BlcnRpZXMubm90aWZ5U3RyYXRlZ3kgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm5vdGlmeVN0cmF0ZWd5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdub3RpZnlTdHJhdGVneScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm5vdGlmeVN0cmF0ZWd5LFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkJBQ0tPRkZfUkVUUllcIixcIkVYUE9ORU5USUFMX0RFQ0FZX1JFVFJZXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbm90aWZ5U3RyYXRlZ3knLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubm90aWZ5U3RyYXRlZ3kpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm5vdGlmeUNvbnRlbnRGb3JtYXQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm5vdGlmeUNvbnRlbnRGb3JtYXQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25vdGlmeUNvbnRlbnRGb3JtYXQnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5ub3RpZnlDb250ZW50Rm9ybWF0LFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlhNTFwiLFwiSlNPTlwiLFwiU0lNUExJRklFRFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25vdGlmeUNvbnRlbnRGb3JtYXQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubm90aWZ5Q29udGVudEZvcm1hdCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZmlsdGVyVGFnICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZmlsdGVyVGFnKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZmlsdGVyVGFnKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZmlsdGVyVGFnJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmZpbHRlclRhZy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMTYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZpbHRlclRhZycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5maWx0ZXJUYWcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N1YnNjcmlwdGlvbk5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3Vic2NyaXB0aW9uTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuc3Vic2NyaXB0aW9uTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnN1YnNjcmlwdGlvbk5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zdWJzY3JpcHRpb25OYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3Vic2NyaXB0aW9uTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zdWJzY3JpcHRpb25OYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMjU2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdWJzY3JpcHRpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN1YnNjcmlwdGlvbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RvcGljTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50b3BpY05hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRvcGljTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRvcGljTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRvcGljTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RvcGljTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50b3BpY05hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAyNTYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RvcGljTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50b3BpY05hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zU3Vic2NyaXB0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46Ok1OUzo6U3Vic2NyaXB0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTdWJzY3JpcHRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpTdWJzY3JpcHRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU3Vic2NyaXB0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NTdWJzY3JpcHRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBFbmRwb2ludDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmRwb2ludCksXG4gICAgICBTdWJzY3JpcHRpb25OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN1YnNjcmlwdGlvbk5hbWUpLFxuICAgICAgVG9waWNOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRvcGljTmFtZSksXG4gICAgICBGaWx0ZXJUYWc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZmlsdGVyVGFnKSxcbiAgICAgIE5vdGlmeUNvbnRlbnRGb3JtYXQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubm90aWZ5Q29udGVudEZvcm1hdCksXG4gICAgICBOb3RpZnlTdHJhdGVneTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ub3RpZnlTdHJhdGVneSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6TU5TOjpTdWJzY3JpcHRpb25gXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NTdWJzY3JpcHRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok1OUzo6U3Vic2NyaXB0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgU3Vic2NyaXB0aW9uVXJsOiBVUkwgb2YgY3JlYXRlZCBzdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN1YnNjcmlwdGlvblVybDogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5kcG9pbnQ6IFRlcm1pbmFsIGFkZHJlc3Mgb2YgdGhlIG1lc3NhZ2UgcmVjaXBpZW50IGZvciB0aGUgY3JlYXRlZCBzdWJzY3JpcHRpb24uXG4gICAgICogQ3VycmVudGx5LCBmb3VyIHR5cGVzIG9mIGVuZHBvaW50cyBhcmUgc3VwcG9ydGVkOiBcbiAgICAgKiAxLiBIdHRwRW5kcG9pbnQsIHdoaWNoIG11c3QgYmUgcHJlZml4ZWQgd2l0aCBcImh0dHA6Ly9cIjsgXG4gICAgICogMi4gUXVldWVFbmRwb2ludCwgaW4gdGhlIGZvcm1hdCBvZiBhY3M6bW5zOntSRUdJT059OntBY2NvdW50SUR9OnF1ZXVlcy97UXVldWVOYW1lfTsgXG4gICAgICogMy4gTWFpbEVuZHBvaW50LCBpbiB0aGUgZm9ybWF0IG9mIG1haWw6ZGlyZWN0bWFpbDp7TWFpbEFkZHJlc3N9OyBcbiAgICAgKiA0LiBTbXNFbmRwb2ludCwgaW4gdGhlIGZvcm1hdCBvZiBzbXM6ZGlyZWN0c21zOmFub255bW91cyBvciBzbXM6ZGlyZWN0c21zOntQaG9uZX0uXG4gICAgICovXG4gICAgcHVibGljIGVuZHBvaW50OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3Vic2NyaXB0aW9uTmFtZTogU3Vic2NyaXB0aW9uIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9uTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRvcGljTmFtZTogVG9waWMgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyB0b3BpY05hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmaWx0ZXJUYWc6IE1lc3NhZ2UgZmlsdGVyIHRhZyBpbiB0aGUgY3JlYXRlZCBzdWJzY3JpcHRpb24gKE9ubHkgbWVzc2FnZXMgd2l0aCBjb25zaXN0ZW50IHRhZ3MgYXJlIHB1c2hlZC4pXG4gICAgICogVGhlIHZhbHVlIGlzIGEgc3RyaW5nIG9mIG5vIG1vcmUgdGhhbiAxNiBjaGFyYWN0ZXJzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBubyBtZXNzYWdlIGZpbHRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgZmlsdGVyVGFnOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbm90aWZ5Q29udGVudEZvcm1hdDogRm9ybWF0IG9mIHRoZSBtZXNzYWdlIGNvbnRlbnQgcHVzaGVkIHRvIHRoZSBlbmRwb2ludC5cbiAgICAgKiBYTUwsIEpTT04sIG9yIFNJTVBMSUZJRUQ7IGRlZmF1bHQgdmFsdWU6IFhNTC4gRm9yIGRldGFpbHMgYWJvdXQgbWVzc2FnZSBmb3JtYXRzLCByZWZlciB0byBCYXNpYyBDb25jZXB0cy9Ob3RpZnlDb250ZW50Rm9ybWF0LlxuICAgICAqL1xuICAgIHB1YmxpYyBub3RpZnlDb250ZW50Rm9ybWF0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbm90aWZ5U3RyYXRlZ3k6IFJldHJ5IHBvbGljeSB0aGF0IHdpbGwgYmUgYXBwbGllZCB3aGVuIGFuIGVycm9yIG9jY3VycyBkdXJpbmcgbWVzc2FnZSBwdXNoIHRvIHRoZSBlbmRwb2ludC5cbiAgICAgKiBCQUNLT0ZGX1JFVFJZIG9yIEVYUE9ORU5USUFMX0RFQ0FZX1JFVFJZOyBkZWZhdWx0IHZhbHVlOiBCQUNLT0ZGX1JFVFJZLiBGb3IgZGV0YWlscyBhYm91dCByZXRyeSBwb2xpY2llcywgcmVmZXIgdG8gQmFzaWMgQ29uY2VwdHMvTm90aWZ5U3RyYXRlZ3kuXG4gICAgICovXG4gICAgcHVibGljIG5vdGlmeVN0cmF0ZWd5OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6TU5TOjpTdWJzY3JpcHRpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1N1YnNjcmlwdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU3Vic2NyaXB0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJTdWJzY3JpcHRpb25VcmwgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1N1YnNjcmlwdGlvblVybCcpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBwcm9wcy5lbmRwb2ludDtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25OYW1lID0gcHJvcHMuc3Vic2NyaXB0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50b3BpY05hbWUgPSBwcm9wcy50b3BpY05hbWU7XG4gICAgICAgIHRoaXMuZmlsdGVyVGFnID0gcHJvcHMuZmlsdGVyVGFnO1xuICAgICAgICB0aGlzLm5vdGlmeUNvbnRlbnRGb3JtYXQgPSBwcm9wcy5ub3RpZnlDb250ZW50Rm9ybWF0O1xuICAgICAgICB0aGlzLm5vdGlmeVN0cmF0ZWd5ID0gcHJvcHMubm90aWZ5U3RyYXRlZ3k7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW5kcG9pbnQ6IHRoaXMuZW5kcG9pbnQsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25OYW1lOiB0aGlzLnN1YnNjcmlwdGlvbk5hbWUsXG4gICAgICAgICAgICB0b3BpY05hbWU6IHRoaXMudG9waWNOYW1lLFxuICAgICAgICAgICAgZmlsdGVyVGFnOiB0aGlzLmZpbHRlclRhZyxcbiAgICAgICAgICAgIG5vdGlmeUNvbnRlbnRGb3JtYXQ6IHRoaXMubm90aWZ5Q29udGVudEZvcm1hdCxcbiAgICAgICAgICAgIG5vdGlmeVN0cmF0ZWd5OiB0aGlzLm5vdGlmeVN0cmF0ZWd5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTdWJzY3JpcHRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46Ok1OUzo6VG9waWNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zVG9waWNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdG9waWNOYW1lOiBUb3BpYyBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgdG9waWNOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nZ2luZ0VuYWJsZWQ6IFdoZXRoZXIgdG8gZW5hYmxlIGxvZyBtYW5hZ2VtZW50LiBcInRydWVcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBlbmFibGVkLCB3aGVyZWFzIFwiZmFsc2VcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBkaXNhYmxlZC4gXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2VcbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dnaW5nRW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF4aW11bU1lc3NhZ2VTaXplOiBNYXhpbXVtIGJvZHkgbGVuZ3RoIG9mIGEgbWVzc2FnZSBzZW50IHRvIHRoZSB0b3BpYywgaW4gdGhlIHVuaXQgb2YgYnl0ZXMuXG4gICAgICogQW4gaW50ZWdlciBpbiB0aGUgcmFuZ2Ugb2YgMSwwMjQgKDEgS0IpIHRvIDY1LCA1MzYgKDY0IEtCKTsgZGVmYXVsdCB2YWx1ZTogNjUsNTM2ICg2NCBLQikuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF4aW11bU1lc3NhZ2VTaXplPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1RvcGljUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RvcGljUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVG9waWNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1heGltdW1NZXNzYWdlU2l6ZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubWF4aW11bU1lc3NhZ2VTaXplKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhpbXVtTWVzc2FnZVNpemUnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tYXhpbXVtTWVzc2FnZVNpemUsXG4gICAgICAgICAgICBtaW46IDEwMjQsXG4gICAgICAgICAgICBtYXg6IDY1NTM2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXhpbXVtTWVzc2FnZVNpemUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMubWF4aW11bU1lc3NhZ2VTaXplKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dnaW5nRW5hYmxlZCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMubG9nZ2luZ0VuYWJsZWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RvcGljTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50b3BpY05hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRvcGljTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRvcGljTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRvcGljTmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RvcGljTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50b3BpY05hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAyNTYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RvcGljTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50b3BpY05hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zVG9waWNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpUb3BpY2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zVG9waWNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6TU5TOjpUb3BpY2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NUb3BpY1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVG9waWNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBUb3BpY05hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudG9waWNOYW1lKSxcbiAgICAgIExvZ2dpbmdFbmFibGVkOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dnaW5nRW5hYmxlZCksXG4gICAgICBNYXhpbXVtTWVzc2FnZVNpemU6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4aW11bU1lc3NhZ2VTaXplKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpNTlM6OlRvcGljYFxuICovXG5leHBvcnQgY2xhc3MgUm9zVG9waWMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46Ok1OUzo6VG9waWNcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBUk4uV2l0aFNsYXNoOiBUaGUgQVJOOiBhY3M6bW5zOiRyZWdpb246JGFjY291bnRpZDovdG9waWNzLyR0b3BpY05hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFybldpdGhTbGFzaDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUb3BpY05hbWU6IFRvcGljIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRvcGljTmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUb3BpY1VybDogVVJMIG9mIGNyZWF0ZWQgdG9waWNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRvcGljVXJsOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0b3BpY05hbWU6IFRvcGljIG5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgdG9waWNOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nZ2luZ0VuYWJsZWQ6IFdoZXRoZXIgdG8gZW5hYmxlIGxvZyBtYW5hZ2VtZW50LiBcInRydWVcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBlbmFibGVkLCB3aGVyZWFzIFwiZmFsc2VcIiBpbmRpY2F0ZXMgdGhhdCBsb2cgbWFuYWdlbWVudCBpcyBkaXNhYmxlZC4gXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nZ2luZ0VuYWJsZWQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF4aW11bU1lc3NhZ2VTaXplOiBNYXhpbXVtIGJvZHkgbGVuZ3RoIG9mIGEgbWVzc2FnZSBzZW50IHRvIHRoZSB0b3BpYywgaW4gdGhlIHVuaXQgb2YgYnl0ZXMuXG4gICAgICogQW4gaW50ZWdlciBpbiB0aGUgcmFuZ2Ugb2YgMSwwMjQgKDEgS0IpIHRvIDY1LCA1MzYgKDY0IEtCKTsgZGVmYXVsdCB2YWx1ZTogNjUsNTM2ICg2NCBLQikuXG4gICAgICovXG4gICAgcHVibGljIG1heGltdW1NZXNzYWdlU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46Ok1OUzo6VG9waWNgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1RvcGljUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NUb3BpYy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQXJuV2l0aFNsYXNoID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdBUk4uV2l0aFNsYXNoJykpO1xuICAgICAgICB0aGlzLmF0dHJUb3BpY05hbWUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1RvcGljTmFtZScpKTtcbiAgICAgICAgdGhpcy5hdHRyVG9waWNVcmwgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1RvcGljVXJsJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy50b3BpY05hbWUgPSBwcm9wcy50b3BpY05hbWU7XG4gICAgICAgIHRoaXMubG9nZ2luZ0VuYWJsZWQgPSBwcm9wcy5sb2dnaW5nRW5hYmxlZDtcbiAgICAgICAgdGhpcy5tYXhpbXVtTWVzc2FnZVNpemUgPSBwcm9wcy5tYXhpbXVtTWVzc2FnZVNpemU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9waWNOYW1lOiB0aGlzLnRvcGljTmFtZSxcbiAgICAgICAgICAgIGxvZ2dpbmdFbmFibGVkOiB0aGlzLmxvZ2dpbmdFbmFibGVkLFxuICAgICAgICAgICAgbWF4aW11bU1lc3NhZ2VTaXplOiB0aGlzLm1heGltdW1NZXNzYWdlU2l6ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVG9waWNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==