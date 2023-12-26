"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosTopic = exports.RosInstance = exports.RosGroup = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the result of the validation.
 */
function RosGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.groupType && (typeof properties.groupType) !== 'object') {
        errors.collect(ros.propertyValidator('groupType', ros.validateAllowedValues)({
            data: properties.groupType,
            allowedValues: ["tcp", "http"],
        }));
    }
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    if (properties.groupId && (Array.isArray(properties.groupId) || (typeof properties.groupId) === 'string')) {
        errors.collect(ros.propertyValidator('groupId', ros.validateLength)({
            data: properties.groupId.length,
            min: 7,
            max: 64,
        }));
    }
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Group` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Group` resource.
 */
// @ts-ignore TS6133
function rosGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosGroupPropsValidator(properties).assertSuccess();
    }
    return {
        GroupId: ros.stringToRosTemplate(properties.groupId),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        GroupType: ros.stringToRosTemplate(properties.groupType),
        Remark: ros.stringToRosTemplate(properties.remark),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ::Group`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-group
 */
class RosGroup extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = this.getAtt('GroupId');
        this.attrGroupType = this.getAtt('GroupType');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupId = props.groupId;
        this.instanceId = props.instanceId;
        this.groupType = props.groupType;
        this.remark = props.remark;
    }
    get rosProperties() {
        return {
            groupId: this.groupId,
            instanceId: this.instanceId,
            groupType: this.groupType,
            remark: this.remark,
        };
    }
    renderProperties(props) {
        return rosGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosGroup = RosGroup;
/**
 * The resource type name for this resource class.
 */
RosGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ::Group";
/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if (properties.instanceName && (Array.isArray(properties.instanceName) || (typeof properties.instanceName) === 'string')) {
        errors.collect(ros.propertyValidator('instanceName', ros.validateLength)({
            data: properties.instanceName.length,
            min: 3,
            max: 64,
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
        InstanceName: ros.stringToRosTemplate(properties.instanceName),
        Remark: ros.stringToRosTemplate(properties.remark),
        Tags: ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ::Instance`ALIYUN::ROCKETMQ::Group is used to create a Group ID on the ROCKETMQ client. The Group ID that you create is used to publish and subscribe to messages.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-instance
 */
class RosInstance extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHttpInternalEndpoint = this.getAtt('HttpInternalEndpoint');
        this.attrHttpInternetEndpoint = this.getAtt('HttpInternetEndpoint');
        this.attrHttpInternetSecureEndpoint = this.getAtt('HttpInternetSecureEndpoint');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrTcpEndpoint = this.getAtt('TcpEndpoint');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceName = props.instanceName;
        this.remark = props.remark;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            instanceName: this.instanceName,
            remark: this.remark,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosInstance = RosInstance;
/**
 * The resource type name for this resource class.
 */
RosInstance.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ::Instance";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Instance.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
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
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('topic', ros.requiredValidator)(properties.topic));
    errors.collect(ros.propertyValidator('topic', ros.validateString)(properties.topic));
    errors.collect(ros.propertyValidator('messageType', ros.requiredValidator)(properties.messageType));
    if (properties.messageType && (typeof properties.messageType) !== 'object') {
        errors.collect(ros.propertyValidator('messageType', ros.validateAllowedValues)({
            data: properties.messageType,
            allowedValues: [0, 1, 2, 4, 5],
        }));
    }
    errors.collect(ros.propertyValidator('messageType', ros.validateNumber)(properties.messageType));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    return errors.wrap('supplied properties not correct for "RosTopicProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Topic` resource
 *
 * @param properties - the TypeScript properties of a `RosTopicProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ROCKETMQ::Topic` resource.
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
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        MessageType: ros.numberToRosTemplate(properties.messageType),
        Topic: ros.stringToRosTemplate(properties.topic),
        Remark: ros.stringToRosTemplate(properties.remark),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ROCKETMQ::Topic`, which is used to create a topic.
 * @Note This class does not contain additional functions, so it is recommended to use the `Topic` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-topic
 */
class RosTopic extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosTopic.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrMessageType = this.getAtt('MessageType');
        this.attrTopic = this.getAtt('Topic');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.messageType = props.messageType;
        this.topic = props.topic;
        this.remark = props.remark;
    }
    get rosProperties() {
        return {
            instanceId: this.instanceId,
            messageType: this.messageType,
            topic: this.topic,
            remark: this.remark,
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
RosTopic.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ROCKETMQ::Topic";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9ja2V0bXEuZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9ja2V0bXEuZ2VuZXJhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBeUQ7OztBQUV6RCw4Q0FBOEM7QUFrQzlDOzs7Ozs7R0FNRztBQUNILFNBQVMsc0JBQXNCLENBQUMsVUFBZTtJQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0tBQUU7SUFDbkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxJQUFHLFVBQVUsQ0FBQyxTQUFTLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDbkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzNFLElBQUksRUFBRSxVQUFVLENBQUMsU0FBUztZQUMxQixhQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUMsTUFBTSxDQUFDO1NBQzlCLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFD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QVksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQztJQUNOLENBQUM7SUFDUyxnQkFBZ0IsQ0FBQyxLQUEyQjtRQUNsRCxPQUFPLDBCQUEwQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNwRixDQUFDOztBQWxGTCw0QkFtRkM7QUFsRkc7O0dBRUc7QUFDb0IsK0JBQXNCLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0dyb3VwYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJvY2tldG1xLWdyb3VwXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zR3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIGdyb3VwIElEIG9mIHRoZSBjb25zdW1wdGlvbiBjbHVzdGVyLiBXaGVuIGNyZWF0aW5nIGEgZ3JvdXAgSUQsIHBheSBhdHRlbnRpb24gdG8gdGhlIGZvbGxvd2luZyBhc3BlY3RzOlxuICAgICAqIEEgZ3JvdXAgSUQgc3RhcnRzIHdpdGhcIkdJRF9cIiBvciBcIkdJRC1cIiwgYW5kIGNvbnRhaW5zIGxldHRlcnMsIG51bWJlcnMsIGh5cGhlbnMgKC0pLCBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIEEgZ3JvdXAgSUQgcmFuZ2VzIGZyb20gNyB0byA2NCBieXRlcy5cbiAgICAgKiBPbmNlIGEgZ3JvdXAgSUQgaXMgY3JlYXRlZCwgaXQgY2Fubm90IGJlIGVkaXRlZCBhbnltb3JlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cFR5cGU6IEdyb3VwIElEIHNwZWNpZnkgdGhlIGNyZWF0aW9uIG9mIGFwcGxpY2FibGUgYWdyZWVtZW50cy4gR3JvdXAgSUQgVENQIHByb3RvY29sIGFuZCB0aGUgSFRUUCBwcm90b2NvbCBjYW4gbm90IGJlIHNoYXJlZCwgdGhlIG5lZWQgdG8gY3JlYXRlIHNlcGFyYXRlbHkuIFZhbHVlIGFzIGZvbGxvd3M6XG4gICAgICogdGNwOiBEZWZhdWx0LCBpbmRpY2F0ZXMgR3JvdXAgSUQgaXMgY3JlYXRlZCBvbmx5IGZvciB0aGUgVENQIHByb3RvY29sIG1lc3NhZ2luZy5cbiAgICAgKiBodHRwOiByZXByZXNlbnRzIHRoZSBHcm91cCBJRCB3YXMgY3JlYXRlZCBvbmx5IGZvciB0aGUgSFRUUCBwcm90b2NvbCBtZXNzYWdpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbWFyazogVGhlIHJlbWFya3Mgb24gdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVtYXJrPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0dyb3VwUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0dyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmdyb3VwVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMuZ3JvdXBUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cFR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5ncm91cFR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1widGNwXCIsXCJodHRwXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbWFyaycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZW1hcmspKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMuZ3JvdXBJZCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmdyb3VwSWQpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5ncm91cElkKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5ncm91cElkLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogNyxcbiAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NHcm91cFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST0NLRVRNUTo6R3JvdXBgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0dyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPQ0tFVE1ROjpHcm91cGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwSWQpLFxuICAgICAgSW5zdGFuY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZUlkKSxcbiAgICAgIEdyb3VwVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cFR5cGUpLFxuICAgICAgUmVtYXJrOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlbWFyayksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Uk9DS0VUTVE6Okdyb3VwYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgR3JvdXBgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJvY2tldG1xLWdyb3VwXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NHcm91cCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Uk9DS0VUTVE6Okdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEdyb3VwSWQ6IEdyb3VwIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEdyb3VwVHlwZTogR3JvdXAgVHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWQ6IEluc3RhbmNlIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgZ3JvdXAgSUQgb2YgdGhlIGNvbnN1bXB0aW9uIGNsdXN0ZXIuIFdoZW4gY3JlYXRpbmcgYSBncm91cCBJRCwgcGF5IGF0dGVudGlvbiB0byB0aGUgZm9sbG93aW5nIGFzcGVjdHM6XG4gICAgICogQSBncm91cCBJRCBzdGFydHMgd2l0aFwiR0lEX1wiIG9yIFwiR0lELVwiLCBhbmQgY29udGFpbnMgbGV0dGVycywgbnVtYmVycywgaHlwaGVucyAoLSksIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogQSBncm91cCBJRCByYW5nZXMgZnJvbSA3IHRvIDY0IGJ5dGVzLlxuICAgICAqIE9uY2UgYSBncm91cCBJRCBpcyBjcmVhdGVkLCBpdCBjYW5ub3QgYmUgZWRpdGVkIGFueW1vcmUuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBUeXBlOiBHcm91cCBJRCBzcGVjaWZ5IHRoZSBjcmVhdGlvbiBvZiBhcHBsaWNhYmxlIGFncmVlbWVudHMuIEdyb3VwIElEIFRDUCBwcm90b2NvbCBhbmQgdGhlIEhUVFAgcHJvdG9jb2wgY2FuIG5vdCBiZSBzaGFyZWQsIHRoZSBuZWVkIHRvIGNyZWF0ZSBzZXBhcmF0ZWx5LiBWYWx1ZSBhcyBmb2xsb3dzOlxuICAgICAqIHRjcDogRGVmYXVsdCwgaW5kaWNhdGVzIEdyb3VwIElEIGlzIGNyZWF0ZWQgb25seSBmb3IgdGhlIFRDUCBwcm90b2NvbCBtZXNzYWdpbmcuXG4gICAgICogaHR0cDogcmVwcmVzZW50cyB0aGUgR3JvdXAgSUQgd2FzIGNyZWF0ZWQgb25seSBmb3IgdGhlIEhUVFAgcHJvdG9jb2wgbWVzc2FnaW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW1hcms6IFRoZSByZW1hcmtzIG9uIHRoZSByZXF1ZXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZW1hcms6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zR3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwSWQgPSB0aGlzLmdldEF0dCgnR3JvdXBJZCcpO1xuICAgICAgICB0aGlzLmF0dHJHcm91cFR5cGUgPSB0aGlzLmdldEF0dCgnR3JvdXBUeXBlJyk7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWQgPSB0aGlzLmdldEF0dCgnSW5zdGFuY2VJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5ncm91cElkID0gcHJvcHMuZ3JvdXBJZDtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUlkID0gcHJvcHMuaW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5ncm91cFR5cGUgPSBwcm9wcy5ncm91cFR5cGU7XG4gICAgICAgIHRoaXMucmVtYXJrID0gcHJvcHMucmVtYXJrO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdyb3VwSWQ6IHRoaXMuZ3JvdXBJZCxcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHRoaXMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGdyb3VwVHlwZTogdGhpcy5ncm91cFR5cGUsXG4gICAgICAgICAgICByZW1hcms6IHRoaXMucmVtYXJrLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0luc3RhbmNlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJvY2tldG1xLWluc3RhbmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW5zdGFuY2UsIHdoaWNoIGNvbnRhaW5zIDMgdG8gNjQgY2hhcmFjdGVycyBpbiBDaGluZXNlIG9yIEVuZ2xpc2guXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVtYXJrOiBUaGUgcmVtYXJrIG9mIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlbWFyaz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NJbnN0YW5jZS5UYWdzUHJvcGVydHlbXTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NJbnN0YW5jZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJbnN0YW5jZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0luc3RhbmNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5pbnN0YW5jZU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMyxcbiAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ3MgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YWdzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFncykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFncy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMjAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ3MnLCByb3MubGlzdFZhbGlkYXRvcihSb3NJbnN0YW5jZV9UYWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlbWFyaycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZW1hcmspKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSW5zdGFuY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Uk9DS0VUTVE6Okluc3RhbmNlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJbnN0YW5jZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST0NLRVRNUTo6SW5zdGFuY2VgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSW5zdGFuY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0luc3RhbmNlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgSW5zdGFuY2VOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSksXG4gICAgICBSZW1hcms6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVtYXJrKSxcbiAgICAgIFRhZ3M6IHJvcy5saXN0TWFwcGVyKHJvc0luc3RhbmNlVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpST0NLRVRNUTo6SW5zdGFuY2VgQUxJWVVOOjpST0NLRVRNUTo6R3JvdXAgaXMgdXNlZCB0byBjcmVhdGUgYSBHcm91cCBJRCBvbiB0aGUgUk9DS0VUTVEgY2xpZW50LiBUaGUgR3JvdXAgSUQgdGhhdCB5b3UgY3JlYXRlIGlzIHVzZWQgdG8gcHVibGlzaCBhbmQgc3Vic2NyaWJlIHRvIG1lc3NhZ2VzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBJbnN0YW5jZWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcm9ja2V0bXEtaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0luc3RhbmNlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpST0NLRVRNUTo6SW5zdGFuY2VcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSHR0cEludGVybmFsRW5kcG9pbnQ6IFRoZSBpbnRlcm5hbCBIVFRQIGVuZHBvaW50IGZvciB0aGUgTWVzc2FnZSBRdWV1ZSBmb3IgQXBhY2hlIFJvY2tldE1RIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySHR0cEludGVybmFsRW5kcG9pbnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSHR0cEludGVybmV0RW5kcG9pbnQ6IFRoZSBJbnRlcm5ldCBIVFRQIGVuZHBvaW50IGZvciB0aGUgTWVzc2FnZSBRdWV1ZSBmb3IgQXBhY2hlIFJvY2tldE1RIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySHR0cEludGVybmV0RW5kcG9pbnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSHR0cEludGVybmV0U2VjdXJlRW5kcG9pbnQ6IFRoZSBJbnRlcm5ldCBIVFRQUyBlbmRwb2ludCBmb3IgdGhlIE1lc3NhZ2UgUXVldWUgZm9yIEFwYWNoZSBSb2NrZXRNUSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckh0dHBJbnRlcm5ldFNlY3VyZUVuZHBvaW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWQ6IEluc3RhbmNlIElEIGNyZWF0ZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VOYW1lOiBJbnN0YW5jZSBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSW5zdGFuY2VUeXBlOiBJbnN0YW5jZSBUeXBlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVGNwRW5kcG9pbnQ6IFRoZSBUQ1AgZW5kcG9pbnQgZm9yIHRoZSBNZXNzYWdlIFF1ZXVlIGZvciBBcGFjaGUgUm9ja2V0TVEgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUY3BFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW5zdGFuY2UsIHdoaWNoIGNvbnRhaW5zIDMgdG8gNjQgY2hhcmFjdGVycyBpbiBDaGluZXNlIG9yIEVuZ2xpc2guXG4gICAgICovXG4gICAgcHVibGljIGluc3RhbmNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlbWFyazogVGhlIHJlbWFyayBvZiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtYXJrOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnczogUm9zSW5zdGFuY2UuVGFnc1Byb3BlcnR5W10gfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0luc3RhbmNlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJIdHRwSW50ZXJuYWxFbmRwb2ludCA9IHRoaXMuZ2V0QXR0KCdIdHRwSW50ZXJuYWxFbmRwb2ludCcpO1xuICAgICAgICB0aGlzLmF0dHJIdHRwSW50ZXJuZXRFbmRwb2ludCA9IHRoaXMuZ2V0QXR0KCdIdHRwSW50ZXJuZXRFbmRwb2ludCcpO1xuICAgICAgICB0aGlzLmF0dHJIdHRwSW50ZXJuZXRTZWN1cmVFbmRwb2ludCA9IHRoaXMuZ2V0QXR0KCdIdHRwSW50ZXJuZXRTZWN1cmVFbmRwb2ludCcpO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gdGhpcy5nZXRBdHQoJ0luc3RhbmNlSWQnKTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VOYW1lID0gdGhpcy5nZXRBdHQoJ0luc3RhbmNlTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZVR5cGUgPSB0aGlzLmdldEF0dCgnSW5zdGFuY2VUeXBlJyk7XG4gICAgICAgIHRoaXMuYXR0clRjcEVuZHBvaW50ID0gdGhpcy5nZXRBdHQoJ1RjcEVuZHBvaW50Jyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmluc3RhbmNlTmFtZSA9IHByb3BzLmluc3RhbmNlTmFtZTtcbiAgICAgICAgdGhpcy5yZW1hcmsgPSBwcm9wcy5yZW1hcms7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5zdGFuY2VOYW1lOiB0aGlzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICAgIHJlbWFyazogdGhpcy5yZW1hcmssXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0luc3RhbmNlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zSW5zdGFuY2Uge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhZ3NQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdmFsdWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkga2V5OiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGtleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSW5zdGFuY2VfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGFnc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST0NLRVRNUTo6SW5zdGFuY2UuVGFnc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST0NLRVRNUTo6SW5zdGFuY2UuVGFnc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NJbnN0YW5jZVRhZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSW5zdGFuY2VfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVmFsdWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgS2V5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmtleSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NUb3BpY2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yb2NrZXRtcS10b3BpY1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1RvcGljUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1lc3NhZ2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgbWVzc2FnZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIDA6IG5vcm1hbCBtZXNzYWdlXG4gICAgICogMTogcGFydGl0aW9uYWxseSBvcmRlcmVkIG1lc3NhZ2VcbiAgICAgKiAyOiBnbG9iYWxseSBvcmRlcmVkIG1lc3NhZ2VcbiAgICAgKiA0OiB0cmFuc2FjdGlvbmFsIG1lc3NhZ2VcbiAgICAgKiA1OiBzY2hlZHVsZWRcXC9kZWxheWVkIG1lc3NhZ2VcbiAgICAgKi9cbiAgICByZWFkb25seSBtZXNzYWdlVHlwZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRvcGljOiBUaGUgbmFtZSBvZiB0aGUgdG9waWMgeW91IHdhbnQgdG8gY3JlYXRlLlxuICAgICAqIE5vdGU6XG4gICAgICogXCJDSURcIiBhbmQgXCJHSURcIiBhcmUgdGhlIHJlc2VydmVkIGZpZWxkcyBvZiBhIGdyb3VwIElELCBhbmQgdGhleSBjYW5ub3QgYmUgdGhlIHN0YXJ0IG9mIGEgdG9waWMgbmFtZS5cbiAgICAgKiBJZiBuYW1lc3BhY2VzIGFyZSBhdmFpbGFibGUgaW4gdGhlIGluc3RhbmNlIGZvciB3aGljaCB0aGUgdG9waWMgaXMgY3JlYXRlZCwgdGhlIHRvcGljIG5hbWUgbXVzdCBiZSB1bmlxdWUgaW4gdGhlIGluc3RhbmNlIGFuZCBjYW4gYmUgZHVwbGljYXRlZCBhY3Jvc3MgaW5zdGFuY2VzLlxuICAgICAqIElmIG5vIG5hbWVzcGFjZXMgYXJlIGF2YWlsYWJsZSBpbiB0aGUgaW5zdGFuY2UsIHRoZSB0b3BpYyBuYW1lIG11c3QgYmUgdW5pcXVlIGJvdGggaW4gdGhlIGluc3RhbmNlIGFuZCBhY3Jvc3MgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRvcGljOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVtYXJrOiBUaGUgcmVtYXJrcyBvbiB0aGUgcmVxdWVzdC4gVGhpcyBwYXJhbWV0ZXIgY2FuIGJlIGxlZnQgYmxhbmsuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVtYXJrPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1RvcGljUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RvcGljUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zVG9waWNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0b3BpYycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50b3BpYykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndG9waWMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudG9waWMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21lc3NhZ2VUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm1lc3NhZ2VUeXBlKSk7XG4gICAgaWYocHJvcGVydGllcy5tZXNzYWdlVHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMubWVzc2FnZVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21lc3NhZ2VUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWVzc2FnZVR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogWzAsMSwyLDQsNV0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZXNzYWdlVHlwZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5tZXNzYWdlVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVtYXJrJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlbWFyaykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NUb3BpY1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpST0NLRVRNUTo6VG9waWNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1RvcGljUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJPQ0tFVE1ROjpUb3BpY2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NUb3BpY1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zVG9waWNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpLFxuICAgICAgTWVzc2FnZVR5cGU6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWVzc2FnZVR5cGUpLFxuICAgICAgVG9waWM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudG9waWMpLFxuICAgICAgUmVtYXJrOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlbWFyayksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Uk9DS0VUTVE6OlRvcGljYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSB0b3BpYy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgVG9waWNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJvY2tldG1xLXRvcGljXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NUb3BpYyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Uk9DS0VUTVE6OlRvcGljXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE1lc3NhZ2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1lc3NhZ2VUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRvcGljOiBUaGUgbmFtZSBvZiB0aGUgdG9waWMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUb3BpYzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1lc3NhZ2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgbWVzc2FnZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIDA6IG5vcm1hbCBtZXNzYWdlXG4gICAgICogMTogcGFydGl0aW9uYWxseSBvcmRlcmVkIG1lc3NhZ2VcbiAgICAgKiAyOiBnbG9iYWxseSBvcmRlcmVkIG1lc3NhZ2VcbiAgICAgKiA0OiB0cmFuc2FjdGlvbmFsIG1lc3NhZ2VcbiAgICAgKiA1OiBzY2hlZHVsZWRcXC9kZWxheWVkIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBwdWJsaWMgbWVzc2FnZVR5cGU6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0b3BpYzogVGhlIG5hbWUgb2YgdGhlIHRvcGljIHlvdSB3YW50IHRvIGNyZWF0ZS5cbiAgICAgKiBOb3RlOlxuICAgICAqIFwiQ0lEXCIgYW5kIFwiR0lEXCIgYXJlIHRoZSByZXNlcnZlZCBmaWVsZHMgb2YgYSBncm91cCBJRCwgYW5kIHRoZXkgY2Fubm90IGJlIHRoZSBzdGFydCBvZiBhIHRvcGljIG5hbWUuXG4gICAgICogSWYgbmFtZXNwYWNlcyBhcmUgYXZhaWxhYmxlIGluIHRoZSBpbnN0YW5jZSBmb3Igd2hpY2ggdGhlIHRvcGljIGlzIGNyZWF0ZWQsIHRoZSB0b3BpYyBuYW1lIG11c3QgYmUgdW5pcXVlIGluIHRoZSBpbnN0YW5jZSBhbmQgY2FuIGJlIGR1cGxpY2F0ZWQgYWNyb3NzIGluc3RhbmNlcy5cbiAgICAgKiBJZiBubyBuYW1lc3BhY2VzIGFyZSBhdmFpbGFibGUgaW4gdGhlIGluc3RhbmNlLCB0aGUgdG9waWMgbmFtZSBtdXN0IGJlIHVuaXF1ZSBib3RoIGluIHRoZSBpbnN0YW5jZSBhbmQgYWNyb3NzIGluc3RhbmNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdG9waWM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZW1hcms6IFRoZSByZW1hcmtzIG9uIHRoZSByZXF1ZXN0LiBUaGlzIHBhcmFtZXRlciBjYW4gYmUgbGVmdCBibGFuay5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtYXJrOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zVG9waWNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1RvcGljLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJJbnN0YW5jZUlkID0gdGhpcy5nZXRBdHQoJ0luc3RhbmNlSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyTWVzc2FnZVR5cGUgPSB0aGlzLmdldEF0dCgnTWVzc2FnZVR5cGUnKTtcbiAgICAgICAgdGhpcy5hdHRyVG9waWMgPSB0aGlzLmdldEF0dCgnVG9waWMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VJZCA9IHByb3BzLmluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMubWVzc2FnZVR5cGUgPSBwcm9wcy5tZXNzYWdlVHlwZTtcbiAgICAgICAgdGhpcy50b3BpYyA9IHByb3BzLnRvcGljO1xuICAgICAgICB0aGlzLnJlbWFyayA9IHByb3BzLnJlbWFyaztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnN0YW5jZUlkOiB0aGlzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBtZXNzYWdlVHlwZTogdGhpcy5tZXNzYWdlVHlwZSxcbiAgICAgICAgICAgIHRvcGljOiB0aGlzLnRvcGljLFxuICAgICAgICAgICAgcmVtYXJrOiB0aGlzLnJlbWFyayxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zVG9waWNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==