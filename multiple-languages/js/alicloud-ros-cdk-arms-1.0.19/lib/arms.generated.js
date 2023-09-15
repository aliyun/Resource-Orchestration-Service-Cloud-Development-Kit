"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosRetcodeApp = exports.RosManagedPrometheus = exports.RosAlertContactGroup = exports.RosAlertContact = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAlertContactProps`
 *
 * @param properties - the TypeScript properties of a `RosAlertContactProps`
 *
 * @returns the result of the validation.
 */
function RosAlertContactPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('proxyUserId', ros.validateString)(properties.proxyUserId));
    errors.collect(ros.propertyValidator('email', ros.validateString)(properties.email));
    errors.collect(ros.propertyValidator('dingRobotWebhookUrl', ros.validateString)(properties.dingRobotWebhookUrl));
    errors.collect(ros.propertyValidator('phoneNum', ros.validateString)(properties.phoneNum));
    if (properties.regionId && (typeof properties.regionId) !== 'object') {
        errors.collect(ros.propertyValidator('regionId', ros.validateAllowedValues)({
            data: properties.regionId,
            allowedValues: ["cn-qingdao", "cn-beijing", "cn-shanghai", "cn-hangzhou", "cn-shenzhen", "cn-hongkong", "ap-southeast-1"],
        }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('systemNoc', ros.validateBoolean)(properties.systemNoc));
    errors.collect(ros.propertyValidator('contactName', ros.requiredValidator)(properties.contactName));
    errors.collect(ros.propertyValidator('contactName', ros.validateString)(properties.contactName));
    return errors.wrap('supplied properties not correct for "RosAlertContactProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AlertContact` resource
 *
 * @param properties - the TypeScript properties of a `RosAlertContactProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AlertContact` resource.
 */
// @ts-ignore TS6133
function rosAlertContactPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAlertContactPropsValidator(properties).assertSuccess();
    }
    return {
        ContactName: ros.stringToRosTemplate(properties.contactName),
        DingRobotWebhookUrl: ros.stringToRosTemplate(properties.dingRobotWebhookUrl),
        Email: ros.stringToRosTemplate(properties.email),
        PhoneNum: ros.stringToRosTemplate(properties.phoneNum),
        ProxyUserId: ros.stringToRosTemplate(properties.proxyUserId),
        RegionId: ros.stringToRosTemplate(properties.regionId),
        SystemNoc: ros.booleanToRosTemplate(properties.systemNoc),
    };
}
/**
 * A ROS template type:  `ALIYUN::ARMS::AlertContact`
 */
class RosAlertContact extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ARMS::AlertContact`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAlertContact.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactId = this.getAtt('ContactId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.contactName = props.contactName;
        this.dingRobotWebhookUrl = props.dingRobotWebhookUrl;
        this.email = props.email;
        this.phoneNum = props.phoneNum;
        this.proxyUserId = props.proxyUserId;
        this.regionId = props.regionId;
        this.systemNoc = props.systemNoc;
    }
    get rosProperties() {
        return {
            contactName: this.contactName,
            dingRobotWebhookUrl: this.dingRobotWebhookUrl,
            email: this.email,
            phoneNum: this.phoneNum,
            proxyUserId: this.proxyUserId,
            regionId: this.regionId,
            systemNoc: this.systemNoc,
        };
    }
    renderProperties(props) {
        return rosAlertContactPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAlertContact = RosAlertContact;
/**
 * The resource type name for this resource class.
 */
RosAlertContact.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContact";
/**
 * Determine whether the given properties match those of a `RosAlertContactGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosAlertContactGroupProps`
 *
 * @returns the result of the validation.
 */
function RosAlertContactGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('proxyUserId', ros.validateString)(properties.proxyUserId));
    errors.collect(ros.propertyValidator('contactGroupName', ros.requiredValidator)(properties.contactGroupName));
    errors.collect(ros.propertyValidator('contactGroupName', ros.validateString)(properties.contactGroupName));
    if (properties.regionId && (typeof properties.regionId) !== 'object') {
        errors.collect(ros.propertyValidator('regionId', ros.validateAllowedValues)({
            data: properties.regionId,
            allowedValues: ["cn-qingdao", "cn-beijing", "cn-shanghai", "cn-hangzhou", "cn-shenzhen", "cn-hongkong", "ap-southeast-1"],
        }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('contactIds', ros.requiredValidator)(properties.contactIds));
    errors.collect(ros.propertyValidator('contactIds', ros.listValidator(ros.validateNumber))(properties.contactIds));
    return errors.wrap('supplied properties not correct for "RosAlertContactGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AlertContactGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosAlertContactGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AlertContactGroup` resource.
 */
// @ts-ignore TS6133
function rosAlertContactGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAlertContactGroupPropsValidator(properties).assertSuccess();
    }
    return {
        ContactGroupName: ros.stringToRosTemplate(properties.contactGroupName),
        ContactIds: ros.listMapper(ros.numberToRosTemplate)(properties.contactIds),
        ProxyUserId: ros.stringToRosTemplate(properties.proxyUserId),
        RegionId: ros.stringToRosTemplate(properties.regionId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ARMS::AlertContactGroup`
 */
class RosAlertContactGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ARMS::AlertContactGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAlertContactGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactGroupId = this.getAtt('ContactGroupId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.contactGroupName = props.contactGroupName;
        this.contactIds = props.contactIds;
        this.proxyUserId = props.proxyUserId;
        this.regionId = props.regionId;
    }
    get rosProperties() {
        return {
            contactGroupName: this.contactGroupName,
            contactIds: this.contactIds,
            proxyUserId: this.proxyUserId,
            regionId: this.regionId,
        };
    }
    renderProperties(props) {
        return rosAlertContactGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAlertContactGroup = RosAlertContactGroup;
/**
 * The resource type name for this resource class.
 */
RosAlertContactGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContactGroup";
/**
 * Determine whether the given properties match those of a `RosManagedPrometheusProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedPrometheusProps`
 *
 * @returns the result of the validation.
 */
function RosManagedPrometheusPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    if (properties.clusterType && (typeof properties.clusterType) !== 'object') {
        errors.collect(ros.propertyValidator('clusterType', ros.validateAllowedValues)({
            data: properties.clusterType,
            allowedValues: ["ecs", "ask", "one"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    errors.collect(ros.propertyValidator('grafanaInstanceId', ros.validateString)(properties.grafanaInstanceId));
    return errors.wrap('supplied properties not correct for "RosManagedPrometheusProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::ManagedPrometheus` resource
 *
 * @param properties - the TypeScript properties of a `RosManagedPrometheusProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::ManagedPrometheus` resource.
 */
// @ts-ignore TS6133
function rosManagedPrometheusPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosManagedPrometheusPropsValidator(properties).assertSuccess();
    }
    return {
        ClusterType: ros.stringToRosTemplate(properties.clusterType),
        SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
        VpcId: ros.stringToRosTemplate(properties.vpcId),
        VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
        ClusterId: ros.stringToRosTemplate(properties.clusterId),
        ClusterName: ros.stringToRosTemplate(properties.clusterName),
        GrafanaInstanceId: ros.stringToRosTemplate(properties.grafanaInstanceId),
    };
}
/**
 * A ROS template type:  `ALIYUN::ARMS::ManagedPrometheus`
 */
class RosManagedPrometheus extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ARMS::ManagedPrometheus`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosManagedPrometheus.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrVpcId = this.getAtt('VpcId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterType = props.clusterType;
        this.securityGroupId = props.securityGroupId;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.clusterId = props.clusterId;
        this.clusterName = props.clusterName;
        this.grafanaInstanceId = props.grafanaInstanceId;
    }
    get rosProperties() {
        return {
            clusterType: this.clusterType,
            securityGroupId: this.securityGroupId,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            clusterId: this.clusterId,
            clusterName: this.clusterName,
            grafanaInstanceId: this.grafanaInstanceId,
        };
    }
    renderProperties(props) {
        return rosManagedPrometheusPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosManagedPrometheus = RosManagedPrometheus;
/**
 * The resource type name for this resource class.
 */
RosManagedPrometheus.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::ManagedPrometheus";
/**
 * Determine whether the given properties match those of a `RosRetcodeAppProps`
 *
 * @param properties - the TypeScript properties of a `RosRetcodeAppProps`
 *
 * @returns the result of the validation.
 */
function RosRetcodeAppPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('retcodeAppType', ros.requiredValidator)(properties.retcodeAppType));
    errors.collect(ros.propertyValidator('retcodeAppType', ros.validateString)(properties.retcodeAppType));
    errors.collect(ros.propertyValidator('retcodeAppName', ros.requiredValidator)(properties.retcodeAppName));
    errors.collect(ros.propertyValidator('retcodeAppName', ros.validateString)(properties.retcodeAppName));
    errors.collect(ros.propertyValidator('regionId', ros.requiredValidator)(properties.regionId));
    if (properties.regionId && (typeof properties.regionId) !== 'object') {
        errors.collect(ros.propertyValidator('regionId', ros.validateAllowedValues)({
            data: properties.regionId,
            allowedValues: ["cn-hangzhou", "ap-southeast-1"],
        }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "RosRetcodeAppProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::RetcodeApp` resource
 *
 * @param properties - the TypeScript properties of a `RosRetcodeAppProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::RetcodeApp` resource.
 */
// @ts-ignore TS6133
function rosRetcodeAppPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosRetcodeAppPropsValidator(properties).assertSuccess();
    }
    return {
        RegionId: ros.stringToRosTemplate(properties.regionId),
        RetcodeAppName: ros.stringToRosTemplate(properties.retcodeAppName),
        RetcodeAppType: ros.stringToRosTemplate(properties.retcodeAppType),
    };
}
/**
 * A ROS template type:  `ALIYUN::ARMS::RetcodeApp`
 */
class RosRetcodeApp extends ros.RosResource {
    /**
     * Create a new `ALIYUN::ARMS::RetcodeApp`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosRetcodeApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrPid = this.getAtt('Pid');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.regionId = props.regionId;
        this.retcodeAppName = props.retcodeAppName;
        this.retcodeAppType = props.retcodeAppType;
    }
    get rosProperties() {
        return {
            regionId: this.regionId,
            retcodeAppName: this.retcodeAppName,
            retcodeAppType: this.retcodeAppType,
        };
    }
    renderProperties(props) {
        return rosRetcodeAppPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRetcodeApp = RosRetcodeApp;
/**
 * The resource type name for this resource class.
 */
RosRetcodeApp.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::RetcodeApp";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJtcy5nZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcm1zLmdlbmVyYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseURBQXlEOzs7QUFFekQsOENBQThDO0FBMkM5Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLDZCQUE2QixDQUFDLFVBQWU7SUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ2pILE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDM0YsSUFBRyxVQUFVLENBQUMsUUFBUSxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQ2pFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixD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QUNILFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3RDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTywrQkFBK0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7QUFuRUwsc0NBb0VDO0FBbkVHOztHQUVHO0FBQ29CLG9DQUFzQixHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkFSTVM6OkFsZXJ0Q29udGFjdGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBbGVydENvbnRhY3RQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29udGFjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0IHRoYXQgeW91IHdhbnQgdG8gY3JlYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRhY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGluZ1JvYm90V2ViaG9va1VybDogVGhlIERpbmdUYWxrIENoYXRib3QgYWRkcmVzcyBvZiB0aGUgY29udGFjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaW5nUm9ib3RXZWJob29rVXJsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVtYWlsOiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgY29udGFjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbWFpbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwaG9uZU51bTogVGhlIHBob25lIG51bWJlciBvZiB0aGUgY29udGFjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwaG9uZU51bT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm94eVVzZXJJZDogSW50ZXJuYWwgcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb3h5VXNlcklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbklkOiBSZWdpb24gSUQuIERlZmF1bHQgdG8gcmVnaW9uIG9mIHN0YWNrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZ2lvbklkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN5c3RlbU5vYzogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVjZWl2ZSBzeXN0ZW0gYWxlcnRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN5c3RlbU5vYz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQWxlcnRDb250YWN0UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FsZXJ0Q29udGFjdFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FsZXJ0Q29udGFjdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJveHlVc2VySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJveHlVc2VySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VtYWlsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVtYWlsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaW5nUm9ib3RXZWJob29rVXJsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpbmdSb2JvdFdlYmhvb2tVcmwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Bob25lTnVtJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnBob25lTnVtKSk7XG4gICAgaWYocHJvcGVydGllcy5yZWdpb25JZCAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVnaW9uSWQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZ2lvbklkJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVnaW9uSWQsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiY24tcWluZ2Rhb1wiLFwiY24tYmVpamluZ1wiLFwiY24tc2hhbmdoYWlcIixcImNuLWhhbmd6aG91XCIsXCJjbi1zaGVuemhlblwiLFwiY24taG9uZ2tvbmdcIixcImFwLXNvdXRoZWFzdC0xXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVnaW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N5c3RlbU5vYycsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuc3lzdGVtTm9jKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250YWN0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb250YWN0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGFjdE5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQWxlcnRDb250YWN0UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFSTVM6OkFsZXJ0Q29udGFjdGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWxlcnRDb250YWN0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFSTVM6OkFsZXJ0Q29udGFjdGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBbGVydENvbnRhY3RQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FsZXJ0Q29udGFjdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENvbnRhY3ROYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnRhY3ROYW1lKSxcbiAgICAgIERpbmdSb2JvdFdlYmhvb2tVcmw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGluZ1JvYm90V2ViaG9va1VybCksXG4gICAgICBFbWFpbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbWFpbCksXG4gICAgICBQaG9uZU51bTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5waG9uZU51bSksXG4gICAgICBQcm94eVVzZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm94eVVzZXJJZCksXG4gICAgICBSZWdpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWdpb25JZCksXG4gICAgICBTeXN0ZW1Ob2M6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN5c3RlbU5vYyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6QVJNUzo6QWxlcnRDb250YWN0YFxuICovXG5leHBvcnQgY2xhc3MgUm9zQWxlcnRDb250YWN0IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpBUk1TOjpBbGVydENvbnRhY3RcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDb250YWN0SWQ6IFRoZSBJRCBvZiB0aGUgYWxlcnQgY29udGFjdCB0aGF0IHlvdSBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29udGFjdElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IGNvbnRhY3QgdGhhdCB5b3Ugd2FudCB0byBjcmVhdGUuXG4gICAgICovXG4gICAgcHVibGljIGNvbnRhY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGluZ1JvYm90V2ViaG9va1VybDogVGhlIERpbmdUYWxrIENoYXRib3QgYWRkcmVzcyBvZiB0aGUgY29udGFjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGluZ1JvYm90V2ViaG9va1VybDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVtYWlsOiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgY29udGFjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwaG9uZU51bTogVGhlIHBob25lIG51bWJlciBvZiB0aGUgY29udGFjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGhvbmVOdW06IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm94eVVzZXJJZDogSW50ZXJuYWwgcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHB1YmxpYyBwcm94eVVzZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbklkOiBSZWdpb24gSUQuIERlZmF1bHQgdG8gcmVnaW9uIG9mIHN0YWNrLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN5c3RlbU5vYzogU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmVjZWl2ZSBzeXN0ZW0gYWxlcnRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzeXN0ZW1Ob2M6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6QVJNUzo6QWxlcnRDb250YWN0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBbGVydENvbnRhY3RQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0FsZXJ0Q29udGFjdC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ29udGFjdElkID0gdGhpcy5nZXRBdHQoJ0NvbnRhY3RJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jb250YWN0TmFtZSA9IHByb3BzLmNvbnRhY3ROYW1lO1xuICAgICAgICB0aGlzLmRpbmdSb2JvdFdlYmhvb2tVcmwgPSBwcm9wcy5kaW5nUm9ib3RXZWJob29rVXJsO1xuICAgICAgICB0aGlzLmVtYWlsID0gcHJvcHMuZW1haWw7XG4gICAgICAgIHRoaXMucGhvbmVOdW0gPSBwcm9wcy5waG9uZU51bTtcbiAgICAgICAgdGhpcy5wcm94eVVzZXJJZCA9IHByb3BzLnByb3h5VXNlcklkO1xuICAgICAgICB0aGlzLnJlZ2lvbklkID0gcHJvcHMucmVnaW9uSWQ7XG4gICAgICAgIHRoaXMuc3lzdGVtTm9jID0gcHJvcHMuc3lzdGVtTm9jO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRhY3ROYW1lOiB0aGlzLmNvbnRhY3ROYW1lLFxuICAgICAgICAgICAgZGluZ1JvYm90V2ViaG9va1VybDogdGhpcy5kaW5nUm9ib3RXZWJob29rVXJsLFxuICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBwaG9uZU51bTogdGhpcy5waG9uZU51bSxcbiAgICAgICAgICAgIHByb3h5VXNlcklkOiB0aGlzLnByb3h5VXNlcklkLFxuICAgICAgICAgICAgcmVnaW9uSWQ6IHRoaXMucmVnaW9uSWQsXG4gICAgICAgICAgICBzeXN0ZW1Ob2M6IHRoaXMuc3lzdGVtTm9jLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBbGVydENvbnRhY3RQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkFSTVM6OkFsZXJ0Q29udGFjdEdyb3VwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FsZXJ0Q29udGFjdEdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRhY3RHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0IGdyb3VwIHRoYXQgeW91IHdhbnQgdG8gY3JlYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRhY3RHcm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWN0SWRzOiBUaGUgbGlzdCBvZiBhbGVydCBjb250YWN0IElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRhY3RJZHM6IEFycmF5PG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJveHlVc2VySWQ6IEludGVybmFsIHBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICByZWFkb25seSBwcm94eVVzZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWdpb25JZDogUmVnaW9uIElELiBEZWZhdWx0IHRvIHJlZ2lvbiBvZiBzdGFjay5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWdpb25JZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBbGVydENvbnRhY3RHcm91cFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBbGVydENvbnRhY3RHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FsZXJ0Q29udGFjdEdyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm94eVVzZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm94eVVzZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdEdyb3VwTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb250YWN0R3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250YWN0R3JvdXBOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnRhY3RHcm91cE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZ2lvbklkICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWdpb25JZCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uSWQnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWdpb25JZCxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJjbi1xaW5nZGFvXCIsXCJjbi1iZWlqaW5nXCIsXCJjbi1zaGFuZ2hhaVwiLFwiY24taGFuZ3pob3VcIixcImNuLXNoZW56aGVuXCIsXCJjbi1ob25na29uZ1wiLFwiYXAtc291dGhlYXN0LTFcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWdpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdElkcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb250YWN0SWRzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250YWN0SWRzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlTnVtYmVyKSkocHJvcGVydGllcy5jb250YWN0SWRzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0FsZXJ0Q29udGFjdEdyb3VwUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFSTVM6OkFsZXJ0Q29udGFjdEdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBbGVydENvbnRhY3RHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBUk1TOjpBbGVydENvbnRhY3RHcm91cGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBbGVydENvbnRhY3RHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQWxlcnRDb250YWN0R3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDb250YWN0R3JvdXBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnRhY3RHcm91cE5hbWUpLFxuICAgICAgQ29udGFjdElkczogcm9zLmxpc3RNYXBwZXIocm9zLm51bWJlclRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29udGFjdElkcyksXG4gICAgICBQcm94eVVzZXJJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm94eVVzZXJJZCksXG4gICAgICBSZWdpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWdpb25JZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6QVJNUzo6QWxlcnRDb250YWN0R3JvdXBgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBbGVydENvbnRhY3RHcm91cCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6QVJNUzo6QWxlcnRDb250YWN0R3JvdXBcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDb250YWN0R3JvdXBJZDogVGhlIElEIG9mIHRoZSBhbGVydCBjb250YWN0IGdyb3VwIHRoYXQgeW91IGNyZWF0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb250YWN0R3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29udGFjdEdyb3VwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IGNvbnRhY3QgZ3JvdXAgdGhhdCB5b3Ugd2FudCB0byBjcmVhdGUuXG4gICAgICovXG4gICAgcHVibGljIGNvbnRhY3RHcm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWN0SWRzOiBUaGUgbGlzdCBvZiBhbGVydCBjb250YWN0IElELlxuICAgICAqL1xuICAgIHB1YmxpYyBjb250YWN0SWRzOiBBcnJheTxudW1iZXIgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb3h5VXNlcklkOiBJbnRlcm5hbCBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgcHVibGljIHByb3h5VXNlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVnaW9uSWQ6IFJlZ2lvbiBJRC4gRGVmYXVsdCB0byByZWdpb24gb2Ygc3RhY2suXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6QVJNUzo6QWxlcnRDb250YWN0R3JvdXBgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FsZXJ0Q29udGFjdEdyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBbGVydENvbnRhY3RHcm91cC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ29udGFjdEdyb3VwSWQgPSB0aGlzLmdldEF0dCgnQ29udGFjdEdyb3VwSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY29udGFjdEdyb3VwTmFtZSA9IHByb3BzLmNvbnRhY3RHcm91cE5hbWU7XG4gICAgICAgIHRoaXMuY29udGFjdElkcyA9IHByb3BzLmNvbnRhY3RJZHM7XG4gICAgICAgIHRoaXMucHJveHlVc2VySWQgPSBwcm9wcy5wcm94eVVzZXJJZDtcbiAgICAgICAgdGhpcy5yZWdpb25JZCA9IHByb3BzLnJlZ2lvbklkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRhY3RHcm91cE5hbWU6IHRoaXMuY29udGFjdEdyb3VwTmFtZSxcbiAgICAgICAgICAgIGNvbnRhY3RJZHM6IHRoaXMuY29udGFjdElkcyxcbiAgICAgICAgICAgIHByb3h5VXNlcklkOiB0aGlzLnByb3h5VXNlcklkLFxuICAgICAgICAgICAgcmVnaW9uSWQ6IHRoaXMucmVnaW9uSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0FsZXJ0Q29udGFjdEdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpBUk1TOjpNYW5hZ2VkUHJvbWV0aGV1c2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NNYW5hZ2VkUHJvbWV0aGV1c1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVyVHlwZTogVGhlIHR5cGUgb2YgdGhlIGNsdXN0ZXIuIEN1cnJlbnRseSwgb25seSBhc2ssIGVjcyBhbmQgb25lIGNsdXN0ZXJzIGFyZSBzdXBwb3J0ZWQuIERlZmF1bHQgaXMgZWNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBUaGUgc2VjdXJpdHkgZ3JvdXAgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdnBjSWQ6IFRoZSB2cGMgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSB2c3dpdGggSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIEt1YmVybmV0ZXMgY2x1c3RlciBvZiBBbGliYWJhIENsb3VkIENvbnRhaW5lciBTZXJ2aWNlIGZvciBLdWJlcm5ldGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsdXN0ZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVyTmFtZTogVGhlIG5hbWUgb2YgdGhlIGNsdXN0ZXIuIFJlcXVpcmVkIHdoZW4gdGhlIENsdXN0ZXJUeXBlIGlzIGVjcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVyTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncmFmYW5hSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBtYW5hZ2VkIEdyYWZhbmEgd29ya3NwYWNlIGJvdW5kIHRvIHRoZSBjbHVzdGVyLiBXaGVuIGVtcHR5IG9yIFwiZnJlZVwiLCBiaW5kcyB0byB0aGUgc2hhcmVkIHZlcnNpb24gb2YgR3JhZmFuYS5cbiAgICAgKi9cbiAgICByZWFkb25seSBncmFmYW5hSW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NNYW5hZ2VkUHJvbWV0aGV1c1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNYW5hZ2VkUHJvbWV0aGV1c1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01hbmFnZWRQcm9tZXRoZXVzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd2cGNJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52cGNJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndnBjSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudnBjSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jbHVzdGVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlY3VyaXR5R3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZWN1cml0eUdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlY3VyaXR5R3JvdXBJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZWN1cml0eUdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy52U3dpdGNoSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZTd2l0Y2hJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy52U3dpdGNoSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NsdXN0ZXJOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNsdXN0ZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVyVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jbHVzdGVyVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuY2x1c3RlclR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVyVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImVjc1wiLFwiYXNrXCIsXCJvbmVcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjbHVzdGVyVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jbHVzdGVyVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JhZmFuYUluc3RhbmNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JhZmFuYUluc3RhbmNlSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTWFuYWdlZFByb21ldGhldXNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QVJNUzo6TWFuYWdlZFByb21ldGhldXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc01hbmFnZWRQcm9tZXRoZXVzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkFSTVM6Ok1hbmFnZWRQcm9tZXRoZXVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc01hbmFnZWRQcm9tZXRoZXVzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NNYW5hZ2VkUHJvbWV0aGV1c1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENsdXN0ZXJUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNsdXN0ZXJUeXBlKSxcbiAgICAgIFNlY3VyaXR5R3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZWN1cml0eUdyb3VwSWQpLFxuICAgICAgVnBjSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudnBjSWQpLFxuICAgICAgVlN3aXRjaElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnZTd2l0Y2hJZCksXG4gICAgICBDbHVzdGVySWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2x1c3RlcklkKSxcbiAgICAgIENsdXN0ZXJOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNsdXN0ZXJOYW1lKSxcbiAgICAgIEdyYWZhbmFJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyYWZhbmFJbnN0YW5jZUlkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpBUk1TOjpNYW5hZ2VkUHJvbWV0aGV1c2BcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc01hbmFnZWRQcm9tZXRoZXVzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpBUk1TOjpNYW5hZ2VkUHJvbWV0aGV1c1wiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENsdXN0ZXJUeXBlOiBUaGUgdHlwZSBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFZwY0lkOiBUaGUgdnBjIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsdXN0ZXJUeXBlOiBUaGUgdHlwZSBvZiB0aGUgY2x1c3Rlci4gQ3VycmVudGx5LCBvbmx5IGFzaywgZWNzIGFuZCBvbmUgY2x1c3RlcnMgYXJlIHN1cHBvcnRlZC4gRGVmYXVsdCBpcyBlY3MuXG4gICAgICovXG4gICAgcHVibGljIGNsdXN0ZXJUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBUaGUgc2VjdXJpdHkgZ3JvdXAgSUQgb2YgdGhlIGNsdXN0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHNlY3VyaXR5R3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZwY0lkOiBUaGUgdnBjIElEIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHZTd2l0Y2hJZDogVGhlIHZzd2l0aCBJRCBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgdlN3aXRjaElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2x1c3RlcklkOiBUaGUgSUQgb2YgdGhlIEt1YmVybmV0ZXMgY2x1c3RlciBvZiBBbGliYWJhIENsb3VkIENvbnRhaW5lciBTZXJ2aWNlIGZvciBLdWJlcm5ldGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjbHVzdGVyTmFtZTogVGhlIG5hbWUgb2YgdGhlIGNsdXN0ZXIuIFJlcXVpcmVkIHdoZW4gdGhlIENsdXN0ZXJUeXBlIGlzIGVjcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2x1c3Rlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncmFmYW5hSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBtYW5hZ2VkIEdyYWZhbmEgd29ya3NwYWNlIGJvdW5kIHRvIHRoZSBjbHVzdGVyLiBXaGVuIGVtcHR5IG9yIFwiZnJlZVwiLCBiaW5kcyB0byB0aGUgc2hhcmVkIHZlcnNpb24gb2YgR3JhZmFuYS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JhZmFuYUluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpBUk1TOjpNYW5hZ2VkUHJvbWV0aGV1c2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTWFuYWdlZFByb21ldGhldXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc01hbmFnZWRQcm9tZXRoZXVzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVyVHlwZSA9IHRoaXMuZ2V0QXR0KCdDbHVzdGVyVHlwZScpO1xuICAgICAgICB0aGlzLmF0dHJWcGNJZCA9IHRoaXMuZ2V0QXR0KCdWcGNJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jbHVzdGVyVHlwZSA9IHByb3BzLmNsdXN0ZXJUeXBlO1xuICAgICAgICB0aGlzLnNlY3VyaXR5R3JvdXBJZCA9IHByb3BzLnNlY3VyaXR5R3JvdXBJZDtcbiAgICAgICAgdGhpcy52cGNJZCA9IHByb3BzLnZwY0lkO1xuICAgICAgICB0aGlzLnZTd2l0Y2hJZCA9IHByb3BzLnZTd2l0Y2hJZDtcbiAgICAgICAgdGhpcy5jbHVzdGVySWQgPSBwcm9wcy5jbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuY2x1c3Rlck5hbWUgPSBwcm9wcy5jbHVzdGVyTmFtZTtcbiAgICAgICAgdGhpcy5ncmFmYW5hSW5zdGFuY2VJZCA9IHByb3BzLmdyYWZhbmFJbnN0YW5jZUlkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsdXN0ZXJUeXBlOiB0aGlzLmNsdXN0ZXJUeXBlLFxuICAgICAgICAgICAgc2VjdXJpdHlHcm91cElkOiB0aGlzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHZwY0lkOiB0aGlzLnZwY0lkLFxuICAgICAgICAgICAgdlN3aXRjaElkOiB0aGlzLnZTd2l0Y2hJZCxcbiAgICAgICAgICAgIGNsdXN0ZXJJZDogdGhpcy5jbHVzdGVySWQsXG4gICAgICAgICAgICBjbHVzdGVyTmFtZTogdGhpcy5jbHVzdGVyTmFtZSxcbiAgICAgICAgICAgIGdyYWZhbmFJbnN0YW5jZUlkOiB0aGlzLmdyYWZhbmFJbnN0YW5jZUlkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NNYW5hZ2VkUHJvbWV0aGV1c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6QVJNUzo6UmV0Y29kZUFwcGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NSZXRjb2RlQXBwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbklkOiBSZWdpb24gSUQuIEFsbG93ZWQgdmFsdWVzOiBjbi1oYW5nemhvdSwgYXAtc291dGhlYXN0LTEuIERlZmF1bHQgdG8gY24taGFuZ3pob3UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXRjb2RlQXBwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFwcGxpY2F0aW9uIGZvciB3aGljaCB5b3Ugd2FudCB0byBjcmVhdGUgdGhlIGJyb3dzZXIgbW9uaXRvcmluZyBqb2IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmV0Y29kZUFwcE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXRjb2RlQXBwVHlwZTogVGhlIHR5cGUgb2YgdGhlIGFwcGxpY2F0aW9uIGZvciB3aGljaCB5b3Ugd2FudCB0byBjcmVhdGUgdGhlIGJyb3dzZXIgbW9uaXRvcmluZyBqb2IuIEFsbG93ZWQgdmFsdWVzOiB3ZWIsIHdlZXgsIG1pbmlfZGQsIG1pbmlfYWxpcGF5LCBtaW5pX3d4LCBtaW5pX2NvbW1vbi5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXRjb2RlQXBwVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1JldGNvZGVBcHBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUmV0Y29kZUFwcFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1JldGNvZGVBcHBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JldGNvZGVBcHBUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJldGNvZGVBcHBUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXRjb2RlQXBwVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXRjb2RlQXBwVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmV0Y29kZUFwcE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmV0Y29kZUFwcE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JldGNvZGVBcHBOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJldGNvZGVBcHBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb25JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZWdpb25JZCkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVnaW9uSWQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlZ2lvbklkKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb25JZCcsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlZ2lvbklkLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImNuLWhhbmd6aG91XCIsXCJhcC1zb3V0aGVhc3QtMVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZ2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZ2lvbklkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1JldGNvZGVBcHBQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6QVJNUzo6UmV0Y29kZUFwcGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUmV0Y29kZUFwcFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpBUk1TOjpSZXRjb2RlQXBwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1JldGNvZGVBcHBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1JldGNvZGVBcHBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBSZWdpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWdpb25JZCksXG4gICAgICBSZXRjb2RlQXBwTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXRjb2RlQXBwTmFtZSksXG4gICAgICBSZXRjb2RlQXBwVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXRjb2RlQXBwVHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6QVJNUzo6UmV0Y29kZUFwcGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1JldGNvZGVBcHAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkFSTVM6OlJldGNvZGVBcHBcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcHBJZDogVGhlIElEIG9mIHRoZSBhcHBsaWNhdGlvbiBmb3Igd2hpY2ggeW91IGNyZWF0ZWQgdGhlIGJyb3dzZXIgbW9uaXRvcmluZyBqb2IuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQaWQ6IFRoZSBQSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQaWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZ2lvbklkOiBSZWdpb24gSUQuIEFsbG93ZWQgdmFsdWVzOiBjbi1oYW5nemhvdSwgYXAtc291dGhlYXN0LTEuIERlZmF1bHQgdG8gY24taGFuZ3pob3UuXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lvbklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmV0Y29kZUFwcE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhcHBsaWNhdGlvbiBmb3Igd2hpY2ggeW91IHdhbnQgdG8gY3JlYXRlIHRoZSBicm93c2VyIG1vbml0b3Jpbmcgam9iLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXRjb2RlQXBwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJldGNvZGVBcHBUeXBlOiBUaGUgdHlwZSBvZiB0aGUgYXBwbGljYXRpb24gZm9yIHdoaWNoIHlvdSB3YW50IHRvIGNyZWF0ZSB0aGUgYnJvd3NlciBtb25pdG9yaW5nIGpvYi4gQWxsb3dlZCB2YWx1ZXM6IHdlYiwgd2VleCwgbWluaV9kZCwgbWluaV9hbGlwYXksIG1pbmlfd3gsIG1pbmlfY29tbW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXRjb2RlQXBwVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkFSTVM6OlJldGNvZGVBcHBgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1JldGNvZGVBcHBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1JldGNvZGVBcHAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFwcElkID0gdGhpcy5nZXRBdHQoJ0FwcElkJyk7XG4gICAgICAgIHRoaXMuYXR0clBpZCA9IHRoaXMuZ2V0QXR0KCdQaWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucmVnaW9uSWQgPSBwcm9wcy5yZWdpb25JZDtcbiAgICAgICAgdGhpcy5yZXRjb2RlQXBwTmFtZSA9IHByb3BzLnJldGNvZGVBcHBOYW1lO1xuICAgICAgICB0aGlzLnJldGNvZGVBcHBUeXBlID0gcHJvcHMucmV0Y29kZUFwcFR5cGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVnaW9uSWQ6IHRoaXMucmVnaW9uSWQsXG4gICAgICAgICAgICByZXRjb2RlQXBwTmFtZTogdGhpcy5yZXRjb2RlQXBwTmFtZSxcbiAgICAgICAgICAgIHJldGNvZGVBcHBUeXBlOiB0aGlzLnJldGNvZGVBcHBUeXBlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NSZXRjb2RlQXBwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG4iXX0=