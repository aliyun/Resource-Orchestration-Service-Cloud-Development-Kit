"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosSavedsearch = exports.RosProject = exports.RosMachineGroup = exports.RosLogtailConfig = exports.RosLogstore = exports.RosIndex = exports.RosApplyConfigToMachineGroup = exports.RosAlert = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAlertProps`
 *
 * @param properties - the TypeScript properties of a `RosAlertProps`
 *
 * @returns the result of the validation.
 */
function RosAlertPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    if (properties.project && (Array.isArray(properties.project) || (typeof properties.project) === 'string')) {
        errors.collect(ros.propertyValidator('project', ros.validateLength)({
            data: properties.project.length,
            min: 3,
            max: 63,
        }));
    }
    if (properties.project && (typeof properties.project) !== 'object') {
        errors.collect(ros.propertyValidator('project', ros.validateAllowedPattern)({
            data: properties.project,
            reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('detail', ros.requiredValidator)(properties.detail));
    errors.collect(ros.propertyValidator('detail', RosAlert_DetailPropertyValidator)(properties.detail));
    return errors.wrap('supplied properties not correct for "RosAlertProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert` resource
 *
 * @param properties - the TypeScript properties of a `RosAlertProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert` resource.
 */
// @ts-ignore TS6133
function rosAlertPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAlertPropsValidator(properties).assertSuccess();
    }
    return {
        Detail: rosAlertDetailPropertyToRosTemplate(properties.detail),
        Project: ros.stringToRosTemplate(properties.project),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLS::Alert`
 */
class RosAlert extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLS::Alert`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAlert.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = ros.Token.asString(this.getAtt('Name'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.detail = props.detail;
        this.project = props.project;
    }
    get rosProperties() {
        return {
            detail: this.detail,
            project: this.project,
        };
    }
    renderProperties(props) {
        return rosAlertPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAlert = RosAlert;
/**
 * The resource type name for this resource class.
 */
RosAlert.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Alert";
/**
 * Determine whether the given properties match those of a `ConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_ConfigurationPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('throttling', ros.requiredValidator)(properties.throttling));
    errors.collect(ros.propertyValidator('throttling', ros.validateString)(properties.throttling));
    errors.collect(ros.propertyValidator('condition', ros.requiredValidator)(properties.condition));
    errors.collect(ros.propertyValidator('condition', ros.validateString)(properties.condition));
    errors.collect(ros.propertyValidator('notificationList', ros.listValidator(RosAlert_NotificationListPropertyValidator))(properties.notificationList));
    errors.collect(ros.propertyValidator('notifyThreshold', ros.validateNumber)(properties.notifyThreshold));
    errors.collect(ros.propertyValidator('dashboard', ros.requiredValidator)(properties.dashboard));
    errors.collect(ros.propertyValidator('dashboard', ros.validateString)(properties.dashboard));
    errors.collect(ros.propertyValidator('queryList', ros.requiredValidator)(properties.queryList));
    errors.collect(ros.propertyValidator('queryList', ros.listValidator(RosAlert_QueryListPropertyValidator))(properties.queryList));
    return errors.wrap('supplied properties not correct for "ConfigurationProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.Configuration` resource
 *
 * @param properties - the TypeScript properties of a `ConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.Configuration` resource.
 */
// @ts-ignore TS6133
function rosAlertConfigurationPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAlert_ConfigurationPropertyValidator(properties).assertSuccess();
    return {
        Throttling: ros.stringToRosTemplate(properties.throttling),
        Condition: ros.stringToRosTemplate(properties.condition),
        NotificationList: ros.listMapper(rosAlertNotificationListPropertyToRosTemplate)(properties.notificationList),
        NotifyThreshold: ros.numberToRosTemplate(properties.notifyThreshold),
        Dashboard: ros.stringToRosTemplate(properties.dashboard),
        QueryList: ros.listMapper(rosAlertQueryListPropertyToRosTemplate)(properties.queryList),
    };
}
/**
 * Determine whether the given properties match those of a `DetailProperty`
 *
 * @param properties - the TypeScript properties of a `DetailProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_DetailPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('configuration', ros.requiredValidator)(properties.configuration));
    errors.collect(ros.propertyValidator('configuration', RosAlert_ConfigurationPropertyValidator)(properties.configuration));
    errors.collect(ros.propertyValidator('state', ros.validateString)(properties.state));
    errors.collect(ros.propertyValidator('schedule', ros.requiredValidator)(properties.schedule));
    errors.collect(ros.propertyValidator('schedule', RosAlert_SchedulePropertyValidator)(properties.schedule));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    if (properties.displayName && (Array.isArray(properties.displayName) || (typeof properties.displayName) === 'string')) {
        errors.collect(ros.propertyValidator('displayName', ros.validateLength)({
            data: properties.displayName.length,
            min: 1,
            max: 64,
        }));
    }
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "DetailProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.Detail` resource
 *
 * @param properties - the TypeScript properties of a `DetailProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.Detail` resource.
 */
// @ts-ignore TS6133
function rosAlertDetailPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAlert_DetailPropertyValidator(properties).assertSuccess();
    return {
        Type: ros.stringToRosTemplate(properties.type),
        Description: ros.stringToRosTemplate(properties.description),
        Configuration: rosAlertConfigurationPropertyToRosTemplate(properties.configuration),
        State: ros.stringToRosTemplate(properties.state),
        Schedule: rosAlertSchedulePropertyToRosTemplate(properties.schedule),
        DisplayName: ros.stringToRosTemplate(properties.displayName),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * Determine whether the given properties match those of a `NotificationListProperty`
 *
 * @param properties - the TypeScript properties of a `NotificationListProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_NotificationListPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('mobileList', ros.listValidator(ros.validateAny))(properties.mobileList));
    errors.collect(ros.propertyValidator('serviceUri', ros.validateString)(properties.serviceUri));
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    errors.collect(ros.propertyValidator('emailList', ros.listValidator(ros.validateAny))(properties.emailList));
    return errors.wrap('supplied properties not correct for "NotificationListProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.NotificationList` resource
 *
 * @param properties - the TypeScript properties of a `NotificationListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.NotificationList` resource.
 */
// @ts-ignore TS6133
function rosAlertNotificationListPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAlert_NotificationListPropertyValidator(properties).assertSuccess();
    return {
        Type: ros.stringToRosTemplate(properties.type),
        MobileList: ros.listMapper(ros.objectToRosTemplate)(properties.mobileList),
        ServiceUri: ros.stringToRosTemplate(properties.serviceUri),
        Content: ros.stringToRosTemplate(properties.content),
        EmailList: ros.listMapper(ros.objectToRosTemplate)(properties.emailList),
    };
}
/**
 * Determine whether the given properties match those of a `QueryListProperty`
 *
 * @param properties - the TypeScript properties of a `QueryListProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_QueryListPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('query', ros.requiredValidator)(properties.query));
    errors.collect(ros.propertyValidator('query', ros.validateString)(properties.query));
    errors.collect(ros.propertyValidator('logStore', ros.requiredValidator)(properties.logStore));
    errors.collect(ros.propertyValidator('logStore', ros.validateString)(properties.logStore));
    errors.collect(ros.propertyValidator('start', ros.requiredValidator)(properties.start));
    errors.collect(ros.propertyValidator('start', ros.validateString)(properties.start));
    errors.collect(ros.propertyValidator('timeSpanType', ros.requiredValidator)(properties.timeSpanType));
    errors.collect(ros.propertyValidator('timeSpanType', ros.validateString)(properties.timeSpanType));
    errors.collect(ros.propertyValidator('end', ros.requiredValidator)(properties.end));
    errors.collect(ros.propertyValidator('end', ros.validateString)(properties.end));
    errors.collect(ros.propertyValidator('chartTitle', ros.requiredValidator)(properties.chartTitle));
    errors.collect(ros.propertyValidator('chartTitle', ros.validateString)(properties.chartTitle));
    return errors.wrap('supplied properties not correct for "QueryListProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.QueryList` resource
 *
 * @param properties - the TypeScript properties of a `QueryListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.QueryList` resource.
 */
// @ts-ignore TS6133
function rosAlertQueryListPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAlert_QueryListPropertyValidator(properties).assertSuccess();
    return {
        Query: ros.stringToRosTemplate(properties.query),
        LogStore: ros.stringToRosTemplate(properties.logStore),
        Start: ros.stringToRosTemplate(properties.start),
        TimeSpanType: ros.stringToRosTemplate(properties.timeSpanType),
        End: ros.stringToRosTemplate(properties.end),
        ChartTitle: ros.stringToRosTemplate(properties.chartTitle),
    };
}
/**
 * Determine whether the given properties match those of a `ScheduleProperty`
 *
 * @param properties - the TypeScript properties of a `ScheduleProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_SchedulePropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dayOfWeek', ros.validateNumber)(properties.dayOfWeek));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('runImmediately', ros.validateBoolean)(properties.runImmediately));
    errors.collect(ros.propertyValidator('hour', ros.validateNumber)(properties.hour));
    errors.collect(ros.propertyValidator('cronExpression', ros.validateString)(properties.cronExpression));
    errors.collect(ros.propertyValidator('delay', ros.validateNumber)(properties.delay));
    errors.collect(ros.propertyValidator('interval', ros.validateString)(properties.interval));
    return errors.wrap('supplied properties not correct for "ScheduleProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.Schedule` resource
 *
 * @param properties - the TypeScript properties of a `ScheduleProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.Schedule` resource.
 */
// @ts-ignore TS6133
function rosAlertSchedulePropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosAlert_SchedulePropertyValidator(properties).assertSuccess();
    return {
        DayOfWeek: ros.numberToRosTemplate(properties.dayOfWeek),
        Type: ros.stringToRosTemplate(properties.type),
        RunImmediately: ros.booleanToRosTemplate(properties.runImmediately),
        Hour: ros.numberToRosTemplate(properties.hour),
        CronExpression: ros.stringToRosTemplate(properties.cronExpression),
        Delay: ros.numberToRosTemplate(properties.delay),
        Interval: ros.stringToRosTemplate(properties.interval),
    };
}
/**
 * Determine whether the given properties match those of a `RosApplyConfigToMachineGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosApplyConfigToMachineGroupProps`
 *
 * @returns the result of the validation.
 */
function RosApplyConfigToMachineGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('configName', ros.validateString)(properties.configName));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    return errors.wrap('supplied properties not correct for "RosApplyConfigToMachineGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::ApplyConfigToMachineGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosApplyConfigToMachineGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::ApplyConfigToMachineGroup` resource.
 */
// @ts-ignore TS6133
function rosApplyConfigToMachineGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosApplyConfigToMachineGroupPropsValidator(properties).assertSuccess();
    }
    return {
        ConfigName: ros.stringToRosTemplate(properties.configName),
        GroupName: ros.stringToRosTemplate(properties.groupName),
        ProjectName: ros.stringToRosTemplate(properties.projectName),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLS::ApplyConfigToMachineGroup`
 */
class RosApplyConfigToMachineGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLS::ApplyConfigToMachineGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosApplyConfigToMachineGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.configName = props.configName;
        this.groupName = props.groupName;
        this.projectName = props.projectName;
    }
    get rosProperties() {
        return {
            configName: this.configName,
            groupName: this.groupName,
            projectName: this.projectName,
        };
    }
    renderProperties(props) {
        return rosApplyConfigToMachineGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosApplyConfigToMachineGroup = RosApplyConfigToMachineGroup;
/**
 * The resource type name for this resource class.
 */
RosApplyConfigToMachineGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::ApplyConfigToMachineGroup";
/**
 * Determine whether the given properties match those of a `RosIndexProps`
 *
 * @param properties - the TypeScript properties of a `RosIndexProps`
 *
 * @returns the result of the validation.
 */
function RosIndexPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logstoreName', ros.requiredValidator)(properties.logstoreName));
    if (properties.logstoreName && (Array.isArray(properties.logstoreName) || (typeof properties.logstoreName) === 'string')) {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateLength)({
            data: properties.logstoreName.length,
            min: 3,
            max: 63,
        }));
    }
    errors.collect(ros.propertyValidator('logstoreName', ros.validateString)(properties.logstoreName));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if (properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 63,
        }));
    }
    if (properties.projectName && (typeof properties.projectName) !== 'object') {
        errors.collect(ros.propertyValidator('projectName', ros.validateAllowedPattern)({
            data: properties.projectName,
            reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('keyIndices', ros.listValidator(RosIndex_KeyIndicesPropertyValidator))(properties.keyIndices));
    errors.collect(ros.propertyValidator('fullTextIndex', ros.requiredValidator)(properties.fullTextIndex));
    errors.collect(ros.propertyValidator('fullTextIndex', RosIndex_FullTextIndexPropertyValidator)(properties.fullTextIndex));
    errors.collect(ros.propertyValidator('logReduce', ros.validateBoolean)(properties.logReduce));
    return errors.wrap('supplied properties not correct for "RosIndexProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index` resource
 *
 * @param properties - the TypeScript properties of a `RosIndexProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index` resource.
 */
// @ts-ignore TS6133
function rosIndexPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosIndexPropsValidator(properties).assertSuccess();
    }
    return {
        FullTextIndex: rosIndexFullTextIndexPropertyToRosTemplate(properties.fullTextIndex),
        LogstoreName: ros.stringToRosTemplate(properties.logstoreName),
        ProjectName: ros.stringToRosTemplate(properties.projectName),
        KeyIndices: ros.listMapper(rosIndexKeyIndicesPropertyToRosTemplate)(properties.keyIndices),
        LogReduce: ros.booleanToRosTemplate(properties.logReduce),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLS::Index`
 */
class RosIndex extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLS::Index`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosIndex.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fullTextIndex = props.fullTextIndex;
        this.logstoreName = props.logstoreName;
        this.projectName = props.projectName;
        this.keyIndices = props.keyIndices;
        this.logReduce = props.logReduce;
    }
    get rosProperties() {
        return {
            fullTextIndex: this.fullTextIndex,
            logstoreName: this.logstoreName,
            projectName: this.projectName,
            keyIndices: this.keyIndices,
            logReduce: this.logReduce,
        };
    }
    renderProperties(props) {
        return rosIndexPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosIndex = RosIndex;
/**
 * The resource type name for this resource class.
 */
RosIndex.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Index";
/**
 * Determine whether the given properties match those of a `FullTextIndexProperty`
 *
 * @param properties - the TypeScript properties of a `FullTextIndexProperty`
 *
 * @returns the result of the validation.
 */
function RosIndex_FullTextIndexPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('delimiter', ros.validateString)(properties.delimiter));
    errors.collect(ros.propertyValidator('includeChinese', ros.validateBoolean)(properties.includeChinese));
    errors.collect(ros.propertyValidator('caseSensitive', ros.validateBoolean)(properties.caseSensitive));
    errors.collect(ros.propertyValidator('enable', ros.requiredValidator)(properties.enable));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    return errors.wrap('supplied properties not correct for "FullTextIndexProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index.FullTextIndex` resource
 *
 * @param properties - the TypeScript properties of a `FullTextIndexProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index.FullTextIndex` resource.
 */
// @ts-ignore TS6133
function rosIndexFullTextIndexPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosIndex_FullTextIndexPropertyValidator(properties).assertSuccess();
    return {
        Delimiter: ros.stringToRosTemplate(properties.delimiter),
        IncludeChinese: ros.booleanToRosTemplate(properties.includeChinese),
        CaseSensitive: ros.booleanToRosTemplate(properties.caseSensitive),
        Enable: ros.booleanToRosTemplate(properties.enable),
    };
}
/**
 * Determine whether the given properties match those of a `JsonKeyIndicesProperty`
 *
 * @param properties - the TypeScript properties of a `JsonKeyIndicesProperty`
 *
 * @returns the result of the validation.
 */
function RosIndex_JsonKeyIndicesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if (properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
            data: properties.type,
            allowedValues: ["text", "long", "double"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('alias', ros.validateString)(properties.alias));
    errors.collect(ros.propertyValidator('enableAnalytics', ros.validateBoolean)(properties.enableAnalytics));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "JsonKeyIndicesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index.JsonKeyIndices` resource
 *
 * @param properties - the TypeScript properties of a `JsonKeyIndicesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index.JsonKeyIndices` resource.
 */
// @ts-ignore TS6133
function rosIndexJsonKeyIndicesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosIndex_JsonKeyIndicesPropertyValidator(properties).assertSuccess();
    return {
        Type: ros.stringToRosTemplate(properties.type),
        Alias: ros.stringToRosTemplate(properties.alias),
        EnableAnalytics: ros.booleanToRosTemplate(properties.enableAnalytics),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * Determine whether the given properties match those of a `KeyIndicesProperty`
 *
 * @param properties - the TypeScript properties of a `KeyIndicesProperty`
 *
 * @returns the result of the validation.
 */
function RosIndex_KeyIndicesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if (properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
            data: properties.type,
            allowedValues: ["text", "long", "double", "json"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('jsonKeyIndices', ros.listValidator(RosIndex_JsonKeyIndicesPropertyValidator))(properties.jsonKeyIndices));
    errors.collect(ros.propertyValidator('delimiter', ros.validateString)(properties.delimiter));
    errors.collect(ros.propertyValidator('includeChinese', ros.validateBoolean)(properties.includeChinese));
    errors.collect(ros.propertyValidator('alias', ros.validateString)(properties.alias));
    errors.collect(ros.propertyValidator('enableAnalytics', ros.validateBoolean)(properties.enableAnalytics));
    errors.collect(ros.propertyValidator('caseSensitive', ros.validateBoolean)(properties.caseSensitive));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "KeyIndicesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index.KeyIndices` resource
 *
 * @param properties - the TypeScript properties of a `KeyIndicesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index.KeyIndices` resource.
 */
// @ts-ignore TS6133
function rosIndexKeyIndicesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosIndex_KeyIndicesPropertyValidator(properties).assertSuccess();
    return {
        Type: ros.stringToRosTemplate(properties.type),
        JsonKeyIndices: ros.listMapper(rosIndexJsonKeyIndicesPropertyToRosTemplate)(properties.jsonKeyIndices),
        Delimiter: ros.stringToRosTemplate(properties.delimiter),
        IncludeChinese: ros.booleanToRosTemplate(properties.includeChinese),
        Alias: ros.stringToRosTemplate(properties.alias),
        EnableAnalytics: ros.booleanToRosTemplate(properties.enableAnalytics),
        CaseSensitive: ros.booleanToRosTemplate(properties.caseSensitive),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * Determine whether the given properties match those of a `RosLogstoreProps`
 *
 * @param properties - the TypeScript properties of a `RosLogstoreProps`
 *
 * @returns the result of the validation.
 */
function RosLogstorePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logstoreName', ros.requiredValidator)(properties.logstoreName));
    if (properties.logstoreName && (Array.isArray(properties.logstoreName) || (typeof properties.logstoreName) === 'string')) {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateLength)({
            data: properties.logstoreName.length,
            min: 3,
            max: 63,
        }));
    }
    errors.collect(ros.propertyValidator('logstoreName', ros.validateString)(properties.logstoreName));
    errors.collect(ros.propertyValidator('preserveStorage', ros.validateBoolean)(properties.preserveStorage));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if (properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 63,
        }));
    }
    if (properties.projectName && (typeof properties.projectName) !== 'object') {
        errors.collect(ros.propertyValidator('projectName', ros.validateAllowedPattern)({
            data: properties.projectName,
            reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('appendMeta', ros.validateBoolean)(properties.appendMeta));
    if (properties.maxSplitShard && (typeof properties.maxSplitShard) !== 'object') {
        errors.collect(ros.propertyValidator('maxSplitShard', ros.validateRange)({
            data: properties.maxSplitShard,
            min: 1,
            max: 64,
        }));
    }
    errors.collect(ros.propertyValidator('maxSplitShard', ros.validateNumber)(properties.maxSplitShard));
    errors.collect(ros.propertyValidator('autoSplit', ros.validateBoolean)(properties.autoSplit));
    errors.collect(ros.propertyValidator('enableTracking', ros.validateBoolean)(properties.enableTracking));
    if (properties.ttl && (typeof properties.ttl) !== 'object') {
        errors.collect(ros.propertyValidator('ttl', ros.validateRange)({
            data: properties.ttl,
            min: 1,
            max: 3600,
        }));
    }
    errors.collect(ros.propertyValidator('ttl', ros.validateNumber)(properties.ttl));
    if (properties.shardCount && (typeof properties.shardCount) !== 'object') {
        errors.collect(ros.propertyValidator('shardCount', ros.validateRange)({
            data: properties.shardCount,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('shardCount', ros.validateNumber)(properties.shardCount));
    return errors.wrap('supplied properties not correct for "RosLogstoreProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Logstore` resource
 *
 * @param properties - the TypeScript properties of a `RosLogstoreProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Logstore` resource.
 */
// @ts-ignore TS6133
function rosLogstorePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosLogstorePropsValidator(properties).assertSuccess();
    }
    return {
        LogstoreName: ros.stringToRosTemplate(properties.logstoreName),
        ProjectName: ros.stringToRosTemplate(properties.projectName),
        AppendMeta: ros.booleanToRosTemplate(properties.appendMeta),
        AutoSplit: ros.booleanToRosTemplate(properties.autoSplit),
        EnableTracking: ros.booleanToRosTemplate(properties.enableTracking),
        MaxSplitShard: ros.numberToRosTemplate(properties.maxSplitShard),
        PreserveStorage: ros.booleanToRosTemplate(properties.preserveStorage),
        ShardCount: ros.numberToRosTemplate(properties.shardCount),
        TTL: ros.numberToRosTemplate(properties.ttl),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLS::Logstore`
 */
class RosLogstore extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLS::Logstore`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosLogstore.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLogstoreName = ros.Token.asString(this.getAtt('LogstoreName'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.logstoreName = props.logstoreName;
        this.projectName = props.projectName;
        this.appendMeta = props.appendMeta;
        this.autoSplit = props.autoSplit;
        this.enableTracking = props.enableTracking;
        this.maxSplitShard = props.maxSplitShard;
        this.preserveStorage = props.preserveStorage;
        this.shardCount = props.shardCount;
        this.ttl = props.ttl;
    }
    get rosProperties() {
        return {
            logstoreName: this.logstoreName,
            projectName: this.projectName,
            appendMeta: this.appendMeta,
            autoSplit: this.autoSplit,
            enableTracking: this.enableTracking,
            maxSplitShard: this.maxSplitShard,
            preserveStorage: this.preserveStorage,
            shardCount: this.shardCount,
            ttl: this.ttl,
        };
    }
    renderProperties(props) {
        return rosLogstorePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosLogstore = RosLogstore;
/**
 * The resource type name for this resource class.
 */
RosLogstore.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Logstore";
/**
 * Determine whether the given properties match those of a `RosLogtailConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosLogtailConfigProps`
 *
 * @returns the result of the validation.
 */
function RosLogtailConfigPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logtailConfigName', ros.requiredValidator)(properties.logtailConfigName));
    if (properties.logtailConfigName && (Array.isArray(properties.logtailConfigName) || (typeof properties.logtailConfigName) === 'string')) {
        errors.collect(ros.propertyValidator('logtailConfigName', ros.validateLength)({
            data: properties.logtailConfigName.length,
            min: 3,
            max: 63,
        }));
    }
    errors.collect(ros.propertyValidator('logtailConfigName', ros.validateString)(properties.logtailConfigName));
    errors.collect(ros.propertyValidator('logstoreName', ros.requiredValidator)(properties.logstoreName));
    if (properties.logstoreName && (Array.isArray(properties.logstoreName) || (typeof properties.logstoreName) === 'string')) {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateLength)({
            data: properties.logstoreName.length,
            min: 3,
            max: 63,
        }));
    }
    errors.collect(ros.propertyValidator('logstoreName', ros.validateString)(properties.logstoreName));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if (properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 63,
        }));
    }
    if (properties.projectName && (typeof properties.projectName) !== 'object') {
        errors.collect(ros.propertyValidator('projectName', ros.validateAllowedPattern)({
            data: properties.projectName,
            reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('rawConfigData', ros.hashValidator(ros.validateAny))(properties.rawConfigData));
    errors.collect(ros.propertyValidator('cloneFrom', RosLogtailConfig_CloneFromPropertyValidator)(properties.cloneFrom));
    return errors.wrap('supplied properties not correct for "RosLogtailConfigProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::LogtailConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosLogtailConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::LogtailConfig` resource.
 */
// @ts-ignore TS6133
function rosLogtailConfigPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosLogtailConfigPropsValidator(properties).assertSuccess();
    }
    return {
        LogstoreName: ros.stringToRosTemplate(properties.logstoreName),
        LogtailConfigName: ros.stringToRosTemplate(properties.logtailConfigName),
        ProjectName: ros.stringToRosTemplate(properties.projectName),
        CloneFrom: rosLogtailConfigCloneFromPropertyToRosTemplate(properties.cloneFrom),
        RawConfigData: ros.hashMapper(ros.objectToRosTemplate)(properties.rawConfigData),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLS::LogtailConfig`
 */
class RosLogtailConfig extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLS::LogtailConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosLogtailConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppliedMachineGroups = ros.Token.asString(this.getAtt('AppliedMachineGroups'));
        this.attrEndpoint = ros.Token.asString(this.getAtt('Endpoint'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.logstoreName = props.logstoreName;
        this.logtailConfigName = props.logtailConfigName;
        this.projectName = props.projectName;
        this.cloneFrom = props.cloneFrom;
        this.rawConfigData = props.rawConfigData;
    }
    get rosProperties() {
        return {
            logstoreName: this.logstoreName,
            logtailConfigName: this.logtailConfigName,
            projectName: this.projectName,
            cloneFrom: this.cloneFrom,
            rawConfigData: this.rawConfigData,
        };
    }
    renderProperties(props) {
        return rosLogtailConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosLogtailConfig = RosLogtailConfig;
/**
 * The resource type name for this resource class.
 */
RosLogtailConfig.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::LogtailConfig";
/**
 * Determine whether the given properties match those of a `CloneFromProperty`
 *
 * @param properties - the TypeScript properties of a `CloneFromProperty`
 *
 * @returns the result of the validation.
 */
function RosLogtailConfig_CloneFromPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logtailConfigName', ros.requiredValidator)(properties.logtailConfigName));
    if (properties.logtailConfigName && (Array.isArray(properties.logtailConfigName) || (typeof properties.logtailConfigName) === 'string')) {
        errors.collect(ros.propertyValidator('logtailConfigName', ros.validateLength)({
            data: properties.logtailConfigName.length,
            min: 3,
            max: 63,
        }));
    }
    errors.collect(ros.propertyValidator('logtailConfigName', ros.validateString)(properties.logtailConfigName));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if (properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 63,
        }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    return errors.wrap('supplied properties not correct for "CloneFromProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::LogtailConfig.CloneFrom` resource
 *
 * @param properties - the TypeScript properties of a `CloneFromProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::LogtailConfig.CloneFrom` resource.
 */
// @ts-ignore TS6133
function rosLogtailConfigCloneFromPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosLogtailConfig_CloneFromPropertyValidator(properties).assertSuccess();
    return {
        LogtailConfigName: ros.stringToRosTemplate(properties.logtailConfigName),
        ProjectName: ros.stringToRosTemplate(properties.projectName),
    };
}
/**
 * Determine whether the given properties match those of a `RosMachineGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosMachineGroupProps`
 *
 * @returns the result of the validation.
 */
function RosMachineGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('machineList', ros.listValidator(ros.validateAny))(properties.machineList));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    if (properties.groupType && (typeof properties.groupType) !== 'object') {
        errors.collect(ros.propertyValidator('groupType', ros.validateAllowedValues)({
            data: properties.groupType,
            allowedValues: ["", "Armory"],
        }));
    }
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    if (properties.machineIdentifyType && (typeof properties.machineIdentifyType) !== 'object') {
        errors.collect(ros.propertyValidator('machineIdentifyType', ros.validateAllowedValues)({
            data: properties.machineIdentifyType,
            allowedValues: ["ip", "userdefined"],
        }));
    }
    errors.collect(ros.propertyValidator('machineIdentifyType', ros.validateString)(properties.machineIdentifyType));
    errors.collect(ros.propertyValidator('groupAttribute', ros.validateString)(properties.groupAttribute));
    return errors.wrap('supplied properties not correct for "RosMachineGroupProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::MachineGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosMachineGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::MachineGroup` resource.
 */
// @ts-ignore TS6133
function rosMachineGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosMachineGroupPropsValidator(properties).assertSuccess();
    }
    return {
        GroupAttribute: ros.stringToRosTemplate(properties.groupAttribute),
        GroupName: ros.stringToRosTemplate(properties.groupName),
        GroupType: ros.stringToRosTemplate(properties.groupType),
        MachineIdentifyType: ros.stringToRosTemplate(properties.machineIdentifyType),
        MachineList: ros.listMapper(ros.objectToRosTemplate)(properties.machineList),
        ProjectName: ros.stringToRosTemplate(properties.projectName),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLS::MachineGroup`
 */
class RosMachineGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLS::MachineGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosMachineGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupName = ros.Token.asString(this.getAtt('GroupName'));
        this.attrProjectName = ros.Token.asString(this.getAtt('ProjectName'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupAttribute = props.groupAttribute;
        this.groupName = props.groupName;
        this.groupType = props.groupType;
        this.machineIdentifyType = props.machineIdentifyType;
        this.machineList = props.machineList;
        this.projectName = props.projectName;
    }
    get rosProperties() {
        return {
            groupAttribute: this.groupAttribute,
            groupName: this.groupName,
            groupType: this.groupType,
            machineIdentifyType: this.machineIdentifyType,
            machineList: this.machineList,
            projectName: this.projectName,
        };
    }
    renderProperties(props) {
        return rosMachineGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosMachineGroup = RosMachineGroup;
/**
 * The resource type name for this resource class.
 */
RosMachineGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::MachineGroup";
/**
 * Determine whether the given properties match those of a `RosProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the result of the validation.
 */
function RosProjectPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 64,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if (properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 3,
            max: 63,
        }));
    }
    if (properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
            data: properties.name,
            reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
        Name: ros.stringToRosTemplate(properties.name),
        Description: ros.stringToRosTemplate(properties.description),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLS::Project`
 */
class RosProject extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLS::Project`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = ros.Token.asString(this.getAtt('Name'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.description = props.description;
    }
    get rosProperties() {
        return {
            name: this.name,
            description: this.description,
        };
    }
    renderProperties(props) {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosProject = RosProject;
/**
 * The resource type name for this resource class.
 */
RosProject.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Project";
/**
 * Determine whether the given properties match those of a `RosSavedsearchProps`
 *
 * @param properties - the TypeScript properties of a `RosSavedsearchProps`
 *
 * @returns the result of the validation.
 */
function RosSavedsearchPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('detail', ros.requiredValidator)(properties.detail));
    errors.collect(ros.propertyValidator('detail', RosSavedsearch_DetailPropertyValidator)(properties.detail));
    return errors.wrap('supplied properties not correct for "RosSavedsearchProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Savedsearch` resource
 *
 * @param properties - the TypeScript properties of a `RosSavedsearchProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Savedsearch` resource.
 */
// @ts-ignore TS6133
function rosSavedsearchPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSavedsearchPropsValidator(properties).assertSuccess();
    }
    return {
        Detail: rosSavedsearchDetailPropertyToRosTemplate(properties.detail),
        Project: ros.stringToRosTemplate(properties.project),
    };
}
/**
 * A ROS template type:  `ALIYUN::SLS::Savedsearch`
 */
class RosSavedsearch extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SLS::Savedsearch`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSavedsearch.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSavedsearchName = ros.Token.asString(this.getAtt('SavedsearchName'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.detail = props.detail;
        this.project = props.project;
    }
    get rosProperties() {
        return {
            detail: this.detail,
            project: this.project,
        };
    }
    renderProperties(props) {
        return rosSavedsearchPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSavedsearch = RosSavedsearch;
/**
 * The resource type name for this resource class.
 */
RosSavedsearch.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Savedsearch";
/**
 * Determine whether the given properties match those of a `DetailProperty`
 *
 * @param properties - the TypeScript properties of a `DetailProperty`
 *
 * @returns the result of the validation.
 */
function RosSavedsearch_DetailPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('searchQuery', ros.requiredValidator)(properties.searchQuery));
    errors.collect(ros.propertyValidator('searchQuery', ros.validateString)(properties.searchQuery));
    errors.collect(ros.propertyValidator('logstore', ros.requiredValidator)(properties.logstore));
    errors.collect(ros.propertyValidator('logstore', ros.validateString)(properties.logstore));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('savedsearchName', ros.requiredValidator)(properties.savedsearchName));
    errors.collect(ros.propertyValidator('savedsearchName', ros.validateString)(properties.savedsearchName));
    errors.collect(ros.propertyValidator('topic', ros.requiredValidator)(properties.topic));
    errors.collect(ros.propertyValidator('topic', ros.validateString)(properties.topic));
    return errors.wrap('supplied properties not correct for "DetailProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Savedsearch.Detail` resource
 *
 * @param properties - the TypeScript properties of a `DetailProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Savedsearch.Detail` resource.
 */
// @ts-ignore TS6133
function rosSavedsearchDetailPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSavedsearch_DetailPropertyValidator(properties).assertSuccess();
    return {
        SearchQuery: ros.stringToRosTemplate(properties.searchQuery),
        Logstore: ros.stringToRosTemplate(properties.logstore),
        DisplayName: ros.stringToRosTemplate(properties.displayName),
        SavedsearchName: ros.stringToRosTemplate(properties.savedsearchName),
        Topic: ros.stringToRosTemplate(properties.topic),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xzLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNscy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXFCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxzQkFBc0IsQ0FBQyxVQUFlO0lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RixJQUFHLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxFQUFFO1FBQ3RHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUMvQixHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxFQUFFO1NBQ1IsQ0FBQyxDQUFDLENBQUM7S0FDVDtJQUNELElBQUcsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUMvRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFD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LENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0RBQXNELENBQUMsQ0FBQztBQUMvRSxDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsb0JBQW9CO0FBQ3BCLFNBQVMseUNBQXlDLENBQUMsVUFBZTtJQUM5RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUFFLE9BQU8sVUFBVSxDQUFDO0tBQUU7SUFDdkQsc0NBQXNDLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDbkUsT0FBTztRQUNMLFdBQVcsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztRQUM1RCxRQUFRLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDdEQsV0FBVyxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVELGVBQWUsRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUNwRSxLQUFLLEVBQUUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7S0FDakQsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cblxuaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0xTOjpBbGVydGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBbGVydFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXRhaWw6XG4gICAgICovXG4gICAgcmVhZG9ubHkgZGV0YWlsOiBSb3NBbGVydC5EZXRhaWxQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0OiBQcm9qZWN0IG5hbWU6XG4gICAgICogMS4gT25seSBzdXBwb3J0cyBsb3dlcmNhc2UgbGV0dGVycywgbnVtYmVycywgaHlwaGVucyAoLSkgYW5kIHVuZGVyc2NvcmVzIChfKS5cbiAgICAgKiAyLiBNdXN0IHN0YXJ0IGFuZCBlbmQgd2l0aCBsb3dlcmNhc2UgbGV0dGVycyBhbmQgbnVtYmVycy5cbiAgICAgKiAzLiBUaGUgbmFtZSBsZW5ndGggaXMgMy02MyBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2plY3Q6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBbGVydFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBbGVydFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FsZXJ0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByb2plY3QpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByb2plY3QgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5wcm9qZWN0KSB8fCAodHlwZW9mIHByb3BlcnRpZXMucHJvamVjdCkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3QnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJvamVjdC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDMsXG4gICAgICAgICAgICBtYXg6IDYzLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYocHJvcGVydGllcy5wcm9qZWN0ICYmICh0eXBlb2YgcHJvcGVydGllcy5wcm9qZWN0KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByb2plY3QsXG4gICAgICAgICAgcmVnOiAvXlthLXpBLVowLTlfLV0rJC9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvamVjdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGV0YWlsJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRldGFpbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGV0YWlsJywgUm9zQWxlcnRfRGV0YWlsUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGV0YWlsKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0FsZXJ0UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6QWxlcnRgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FsZXJ0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6QWxlcnRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQWxlcnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FsZXJ0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRGV0YWlsOiByb3NBbGVydERldGFpbFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRldGFpbCksXG4gICAgICBQcm9qZWN0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb2plY3QpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlNMUzo6QWxlcnRgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBbGVydCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6U0xTOjpBbGVydFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5hbWU6IEFsZXJ0IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXRhaWw6XG4gICAgICovXG4gICAgcHVibGljIGRldGFpbDogUm9zQWxlcnQuRGV0YWlsUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvamVjdDogUHJvamVjdCBuYW1lOlxuICAgICAqIDEuIE9ubHkgc3VwcG9ydHMgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGh5cGhlbnMgKC0pIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogMi4gTXVzdCBzdGFydCBhbmQgZW5kIHdpdGggbG93ZXJjYXNlIGxldHRlcnMgYW5kIG51bWJlcnMuXG4gICAgICogMy4gVGhlIG5hbWUgbGVuZ3RoIGlzIDMtNjMgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJvamVjdDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNMUzo6QWxlcnRgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FsZXJ0UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBbGVydC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyTmFtZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnTmFtZScpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZGV0YWlsID0gcHJvcHMuZGV0YWlsO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9wcy5wcm9qZWN0O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRldGFpbDogdGhpcy5kZXRhaWwsXG4gICAgICAgICAgICBwcm9qZWN0OiB0aGlzLnByb2plY3QsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0FsZXJ0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQWxlcnQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGhyb3R0bGluZzogTm90aWZpY2F0aW9uIGludGVydmFsLCBkZWZhdWx0IGlzIG5vIGludGVydmFsLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGhyb3R0bGluZzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbmRpdGlvbjogaGUgY29uZGl0aW9uIHRoYXQgaXMgcmVxdWlyZWQgdG8gdHJpZ2dlciBhbiBhbGVydC4gXG4gICAgICogTG9nIFNlcnZpY2UgdHJpZ2dlcnMgYW4gYWxlcnQgaWYgdGhlIHRyaWdnZXIgY29uZGl0aW9uIGlzIG1ldC4gXG4gICAgICogRm9yIGV4YW1wbGUsIHlvdSBjYW4gc2V0IHRoZSB0cmlnZ2VyIGNvbmRpdGlvbiB0byBwdiUxMDAgPiAwICYmIHV2ID4gMC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbmRpdGlvbjogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5vdGlmaWNhdGlvbkxpc3Q6XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBub3RpZmljYXRpb25MaXN0PzogQXJyYXk8Um9zQWxlcnQuTm90aWZpY2F0aW9uTGlzdFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBub3RpZnlUaHJlc2hvbGQ6IFRoZSBub3RpZmljYXRpb24gdGhyZXNob2xkLCBcbiAgICAgKiB3aGljaCB3aWxsIG5vdCBiZSBub3RpZmllZCB1bnRpbCB0aGUgbnVtYmVyIG9mIHRyaWdnZXJzIGlzIHJlYWNoZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBub3RpZnlUaHJlc2hvbGQ/OiBudW1iZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGFzaGJvYXJkOiBBbGFybSBhc3NvY2lhdGVkIGRhc2hib2FyZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRhc2hib2FyZDogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHF1ZXJ5TGlzdDpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHF1ZXJ5TGlzdDogQXJyYXk8Um9zQWxlcnQuUXVlcnlMaXN0UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ29uZmlndXJhdGlvblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb25maWd1cmF0aW9uUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQWxlcnRfQ29uZmlndXJhdGlvblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyb3R0bGluZycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50aHJvdHRsaW5nKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aHJvdHRsaW5nJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRocm90dGxpbmcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbmRpdGlvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb25kaXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbmRpdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb25kaXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25vdGlmaWNhdGlvbkxpc3QnLCByb3MubGlzdFZhbGlkYXRvcihSb3NBbGVydF9Ob3RpZmljYXRpb25MaXN0UHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLm5vdGlmaWNhdGlvbkxpc3QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25vdGlmeVRocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5ub3RpZnlUaHJlc2hvbGQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rhc2hib2FyZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kYXNoYm9hcmQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rhc2hib2FyZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kYXNoYm9hcmQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3F1ZXJ5TGlzdCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5xdWVyeUxpc3QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3F1ZXJ5TGlzdCcsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0FsZXJ0X1F1ZXJ5TGlzdFByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5xdWVyeUxpc3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ29uZmlndXJhdGlvblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTFM6OkFsZXJ0LkNvbmZpZ3VyYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvbmZpZ3VyYXRpb25Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xTOjpBbGVydC5Db25maWd1cmF0aW9uYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FsZXJ0Q29uZmlndXJhdGlvblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NBbGVydF9Db25maWd1cmF0aW9uUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBUaHJvdHRsaW5nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRocm90dGxpbmcpLFxuICAgICAgQ29uZGl0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbmRpdGlvbiksXG4gICAgICBOb3RpZmljYXRpb25MaXN0OiByb3MubGlzdE1hcHBlcihyb3NBbGVydE5vdGlmaWNhdGlvbkxpc3RQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubm90aWZpY2F0aW9uTGlzdCksXG4gICAgICBOb3RpZnlUaHJlc2hvbGQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubm90aWZ5VGhyZXNob2xkKSxcbiAgICAgIERhc2hib2FyZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kYXNoYm9hcmQpLFxuICAgICAgUXVlcnlMaXN0OiByb3MubGlzdE1hcHBlcihyb3NBbGVydFF1ZXJ5TGlzdFByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5xdWVyeUxpc3QpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQWxlcnQge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIERldGFpbFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0eXBlOlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdHlwZT86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgdGhlIGFsZXJ0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY29uZmlndXJhdGlvbjpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb246IFJvc0FsZXJ0LkNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGF0ZTpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXRlPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNjaGVkdWxlOiBUaGUgaW50ZXJ2YWwgYXQgd2hpY2ggTG9nIFNlcnZpY2UgZXZhbHVhdGVzIHRoZSBhbGVydCBydWxlLiBcbiAgICAgKiBOb3RlIER1cmluZyBhbiBhbGVydCBydWxlIGV2YWx1YXRpb24sIGlmIGEgcXVlcnkgcmV0dXJucyBtb3JlIHRoYW4gMTAwIGxvZyBlbnRyaWVzLCBcbiAgICAgKiAgTG9nIFNlcnZpY2UgY2hlY2tzIG9ubHkgdGhlIGZpcnN0IDEwMCBsb2cgZW50cmllcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNjaGVkdWxlOiBSb3NBbGVydC5TY2hlZHVsZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRpc3BsYXlOYW1lOiBBbGVydCBuYW1lIGRpc3BsYXkgaW4gY29uc29sZS4gVGhlIG5hbWUgbGVuZ3RoIGlzIDEtNjQgY2hhcmFjdGVycy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZTogQWxlcnQgbmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYERldGFpbFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBEZXRhaWxQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBbGVydF9EZXRhaWxQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbmZpZ3VyYXRpb24nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29uZmlndXJhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29uZmlndXJhdGlvbicsIFJvc0FsZXJ0X0NvbmZpZ3VyYXRpb25Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jb25maWd1cmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGF0ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2NoZWR1bGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2NoZWR1bGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NjaGVkdWxlJywgUm9zQWxlcnRfU2NoZWR1bGVQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5zY2hlZHVsZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlzcGxheU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGlzcGxheU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZGlzcGxheU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kaXNwbGF5TmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc3BsYXlOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc3BsYXlOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJEZXRhaWxQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xTOjpBbGVydC5EZXRhaWxgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERldGFpbFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTFM6OkFsZXJ0LkRldGFpbGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBbGVydERldGFpbFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NBbGVydF9EZXRhaWxQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHlwZSksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBDb25maWd1cmF0aW9uOiByb3NBbGVydENvbmZpZ3VyYXRpb25Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb25maWd1cmF0aW9uKSxcbiAgICAgIFN0YXRlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXRlKSxcbiAgICAgIFNjaGVkdWxlOiByb3NBbGVydFNjaGVkdWxlUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2NoZWR1bGUpLFxuICAgICAgRGlzcGxheU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlzcGxheU5hbWUpLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0FsZXJ0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25MaXN0UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHR5cGU6IFRoaXMgdG9waWMgZGVzY3JpYmVzIGhvdyB0byBjb25maWd1cmUgYSBub3RpZmljYXRpb24gbWV0aG9kLiBcbiAgICAgKiBMb2cgU2VydmljZSBjYW4gc2VuZCBhbGVydCBub3RpZmljYXRpb25zIGJ5IHVzaW5nIG9uZSBvciBtb3JlIG1ldGhvZHMuIFxuICAgICAqIEF2YWlsYWJsZSBub3RpZmljYXRpb24gbWV0aG9kcyBpbmNsdWRlIGVtYWlscywgRGluZ1RhbGsgY2hhdGJvdCB3ZWJob29rcywgXG4gICAgICogY3VzdG9tIHdlYmhvb2tzLCBhbmQgQWxpYmFiYSBDbG91ZCBNZXNzYWdlIENlbnRlci5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtb2JpbGVMaXN0OlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbW9iaWxlTGlzdD86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VydmljZVVyaTogVGhlIHdlYmhvb2sgVVJMIG9mIHRoZSBEaW5nVGFsayBjaGF0Ym90LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmljZVVyaT86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb250ZW50OiBUaGUgY29udGVudCBvZiBhbiBhbGVydCBub3RpZmljYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbnRlbnQ/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW1haWxMaXN0OlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW1haWxMaXN0PzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE5vdGlmaWNhdGlvbkxpc3RQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTm90aWZpY2F0aW9uTGlzdFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FsZXJ0X05vdGlmaWNhdGlvbkxpc3RQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb2JpbGVMaXN0Jywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5tb2JpbGVMaXN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZXJ2aWNlVXJpJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VVcmkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRlbnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW1haWxMaXN0Jywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5lbWFpbExpc3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiTm90aWZpY2F0aW9uTGlzdFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTFM6OkFsZXJ0Lk5vdGlmaWNhdGlvbkxpc3RgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE5vdGlmaWNhdGlvbkxpc3RQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xTOjpBbGVydC5Ob3RpZmljYXRpb25MaXN0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FsZXJ0Tm90aWZpY2F0aW9uTGlzdFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NBbGVydF9Ob3RpZmljYXRpb25MaXN0UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnR5cGUpLFxuICAgICAgTW9iaWxlTGlzdDogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubW9iaWxlTGlzdCksXG4gICAgICBTZXJ2aWNlVXJpOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VVcmkpLFxuICAgICAgQ29udGVudDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb250ZW50KSxcbiAgICAgIEVtYWlsTGlzdDogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZW1haWxMaXN0KSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0FsZXJ0IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBRdWVyeUxpc3RQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcXVlcnk6XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBxdWVyeTogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGxvZ1N0b3JlOlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbG9nU3RvcmU6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGFydDpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXJ0OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGltZVNwYW5UeXBlOlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGltZVNwYW5UeXBlOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW5kOlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW5kOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY2hhcnRUaXRsZTpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNoYXJ0VGl0bGU6IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFF1ZXJ5TGlzdFByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBRdWVyeUxpc3RQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBbGVydF9RdWVyeUxpc3RQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3F1ZXJ5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnF1ZXJ5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdxdWVyeScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5xdWVyeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nU3RvcmUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9nU3RvcmUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ1N0b3JlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvZ1N0b3JlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGFydCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdGFydCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhcnQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhcnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVTcGFuVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50aW1lU3BhblR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVTcGFuVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50aW1lU3BhblR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5lbmQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lbmQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NoYXJ0VGl0bGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2hhcnRUaXRsZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hhcnRUaXRsZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jaGFydFRpdGxlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlF1ZXJ5TGlzdFByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTFM6OkFsZXJ0LlF1ZXJ5TGlzdGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUXVlcnlMaXN0UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6QWxlcnQuUXVlcnlMaXN0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FsZXJ0UXVlcnlMaXN0UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0FsZXJ0X1F1ZXJ5TGlzdFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgUXVlcnk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucXVlcnkpLFxuICAgICAgTG9nU3RvcmU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nU3RvcmUpLFxuICAgICAgU3RhcnQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhcnQpLFxuICAgICAgVGltZVNwYW5UeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVTcGFuVHlwZSksXG4gICAgICBFbmQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5kKSxcbiAgICAgIENoYXJ0VGl0bGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2hhcnRUaXRsZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NBbGVydCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2NoZWR1bGVQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGF5T2ZXZWVrOlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGF5T2ZXZWVrPzogbnVtYmVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHR5cGU6XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcnVuSW1tZWRpYXRlbHk6XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBydW5JbW1lZGlhdGVseT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaG91cjpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGhvdXI/OiBudW1iZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY3JvbkV4cHJlc3Npb246XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjcm9uRXhwcmVzc2lvbj86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkZWxheTpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGRlbGF5PzogbnVtYmVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGludGVydmFsOiBFeGVjdXRpb24gaW50ZXJ2YWxcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGludGVydmFsPzogc3RyaW5nO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU2NoZWR1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2NoZWR1bGVQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBbGVydF9TY2hlZHVsZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGF5T2ZXZWVrJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmRheU9mV2VlaykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0eXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bkltbWVkaWF0ZWx5Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5ydW5JbW1lZGlhdGVseSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaG91cicsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5ob3VyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjcm9uRXhwcmVzc2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jcm9uRXhwcmVzc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsYXknLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZGVsYXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVydmFsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmludGVydmFsKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlNjaGVkdWxlUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6QWxlcnQuU2NoZWR1bGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNjaGVkdWxlUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6QWxlcnQuU2NoZWR1bGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQWxlcnRTY2hlZHVsZVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NBbGVydF9TY2hlZHVsZVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgRGF5T2ZXZWVrOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRheU9mV2VlayksXG4gICAgICBUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnR5cGUpLFxuICAgICAgUnVuSW1tZWRpYXRlbHk6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJ1bkltbWVkaWF0ZWx5KSxcbiAgICAgIEhvdXI6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaG91ciksXG4gICAgICBDcm9uRXhwcmVzc2lvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jcm9uRXhwcmVzc2lvbiksXG4gICAgICBEZWxheTogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxheSksXG4gICAgICBJbnRlcnZhbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcnZhbCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMUzo6QXBwbHlDb25maWdUb01hY2hpbmVHcm91cGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBcHBseUNvbmZpZ1RvTWFjaGluZUdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbmZpZ05hbWU6IEFwcGx5IGNvbmZpZyB0byB0aGUgY29uZmlnIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBjb25maWdOYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogQXBwbHkgY29uZmlnIHRvIHRoZSBncm91cCBuYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBOYW1lPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3ROYW1lOiBBcHBseSBjb25maWcgdG8gdGhlIHByb2plY3QgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9qZWN0TmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBcHBseUNvbmZpZ1RvTWFjaGluZUdyb3VwUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FwcGx5Q29uZmlnVG9NYWNoaW5lR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBcHBseUNvbmZpZ1RvTWFjaGluZUdyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb25maWdOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbmZpZ05hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3ROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0FwcGx5Q29uZmlnVG9NYWNoaW5lR3JvdXBQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xTOjpBcHBseUNvbmZpZ1RvTWFjaGluZUdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBcHBseUNvbmZpZ1RvTWFjaGluZUdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6QXBwbHlDb25maWdUb01hY2hpbmVHcm91cGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBcHBseUNvbmZpZ1RvTWFjaGluZUdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NBcHBseUNvbmZpZ1RvTWFjaGluZUdyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ29uZmlnTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb25maWdOYW1lKSxcbiAgICAgIEdyb3VwTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cE5hbWUpLFxuICAgICAgUHJvamVjdE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvamVjdE5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlNMUzo6QXBwbHlDb25maWdUb01hY2hpbmVHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FwcGx5Q29uZmlnVG9NYWNoaW5lR3JvdXAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlNMUzo6QXBwbHlDb25maWdUb01hY2hpbmVHcm91cFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb25maWdOYW1lOiBBcHBseSBjb25maWcgdG8gdGhlIGNvbmZpZyBuYW1lXG4gICAgICovXG4gICAgcHVibGljIGNvbmZpZ05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cE5hbWU6IEFwcGx5IGNvbmZpZyB0byB0aGUgZ3JvdXAgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0TmFtZTogQXBwbHkgY29uZmlnIHRvIHRoZSBwcm9qZWN0IG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHByb2plY3ROYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xTOjpBcHBseUNvbmZpZ1RvTWFjaGluZUdyb3VwYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBcHBseUNvbmZpZ1RvTWFjaGluZUdyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBcHBseUNvbmZpZ1RvTWFjaGluZUdyb3VwLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jb25maWdOYW1lID0gcHJvcHMuY29uZmlnTmFtZTtcbiAgICAgICAgdGhpcy5ncm91cE5hbWUgPSBwcm9wcy5ncm91cE5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9wcy5wcm9qZWN0TmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb25maWdOYW1lOiB0aGlzLmNvbmZpZ05hbWUsXG4gICAgICAgICAgICBncm91cE5hbWU6IHRoaXMuZ3JvdXBOYW1lLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6IHRoaXMucHJvamVjdE5hbWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0FwcGx5Q29uZmlnVG9NYWNoaW5lR3JvdXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNMUzo6SW5kZXhgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zSW5kZXhQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVsbFRleHRJbmRleDogRnVsbC10ZXh0IGluZGV4aW5nIGNvbmZpZ3VyYXRpb24uXG4gICAgICogRnVsbC10ZXh0IGluZGV4aW5nIGFuZCBrZXkgaW5kZXhpbmcgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBlbmFibGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZ1bGxUZXh0SW5kZXg6IFJvc0luZGV4LkZ1bGxUZXh0SW5kZXhQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dzdG9yZU5hbWU6IExvZ3N0b3JlIG5hbWU6XG4gICAgICogMS4gT25seSBzdXBwb3J0cyBsb3dlcmNhc2UgbGV0dGVycywgbnVtYmVycywgaHlwaGVucyAoLSkgYW5kIHVuZGVyc2NvcmVzIChfKS5cbiAgICAgKiAyLiBNdXN0IHN0YXJ0IGFuZCBlbmQgd2l0aCBsb3dlcmNhc2UgbGV0dGVycyBhbmQgbnVtYmVycy5cbiAgICAgKiAzLiBUaGUgbmFtZSBsZW5ndGggaXMgMy02MyBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvZ3N0b3JlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3ROYW1lOiBQcm9qZWN0IG5hbWU6XG4gICAgICogMS4gT25seSBzdXBwb3J0cyBsb3dlcmNhc2UgbGV0dGVycywgbnVtYmVycywgaHlwaGVucyAoLSkgYW5kIHVuZGVyc2NvcmVzIChfKS5cbiAgICAgKiAyLiBNdXN0IHN0YXJ0IGFuZCBlbmQgd2l0aCBsb3dlcmNhc2UgbGV0dGVycyBhbmQgbnVtYmVycy5cbiAgICAgKiAzLiBUaGUgbmFtZSBsZW5ndGggaXMgMy02MyBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2plY3ROYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkga2V5SW5kaWNlczogS2V5IGluZGV4IGNvbmZpZ3VyYXRpb25zLlxuICAgICAqIEZ1bGwtdGV4dCBpbmRleGluZyBhbmQga2V5IGluZGV4aW5nIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgZW5hYmxlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBrZXlJbmRpY2VzPzogQXJyYXk8Um9zSW5kZXguS2V5SW5kaWNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dSZWR1Y2U6IFdoZXRoZXIgdG8gZW5hYmxlIGxvZyByZWR1Y2UuIERlZmF1bHQgdG8gZmFsc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9nUmVkdWNlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NJbmRleFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NJbmRleFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0luZGV4UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dzdG9yZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9nc3RvcmVOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5sb2dzdG9yZU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5sb2dzdG9yZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5sb2dzdG9yZU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dzdG9yZU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubG9nc3RvcmVOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMyxcbiAgICAgICAgICAgIG1heDogNjMsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ3N0b3JlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dzdG9yZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3ROYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5wcm9qZWN0TmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMucHJvamVjdE5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0TmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcm9qZWN0TmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDMsXG4gICAgICAgICAgICBtYXg6IDYzLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYocHJvcGVydGllcy5wcm9qZWN0TmFtZSAmJiAodHlwZW9mIHByb3BlcnRpZXMucHJvamVjdE5hbWUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3ROYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByb2plY3ROYW1lLFxuICAgICAgICAgIHJlZzogL15bYS16QS1aMC05Xy1dKyQvXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm9qZWN0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigna2V5SW5kaWNlcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0luZGV4X0tleUluZGljZXNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMua2V5SW5kaWNlcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVsbFRleHRJbmRleCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5mdWxsVGV4dEluZGV4KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmdWxsVGV4dEluZGV4JywgUm9zSW5kZXhfRnVsbFRleHRJbmRleFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZ1bGxUZXh0SW5kZXgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ1JlZHVjZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMubG9nUmVkdWNlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0luZGV4UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6SW5kZXhgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0luZGV4UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6SW5kZXhgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSW5kZXhQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0luZGV4UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRnVsbFRleHRJbmRleDogcm9zSW5kZXhGdWxsVGV4dEluZGV4UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZnVsbFRleHRJbmRleCksXG4gICAgICBMb2dzdG9yZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nc3RvcmVOYW1lKSxcbiAgICAgIFByb2plY3ROYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSxcbiAgICAgIEtleUluZGljZXM6IHJvcy5saXN0TWFwcGVyKHJvc0luZGV4S2V5SW5kaWNlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5rZXlJbmRpY2VzKSxcbiAgICAgIExvZ1JlZHVjZTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nUmVkdWNlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpTTFM6OkluZGV4YFxuICovXG5leHBvcnQgY2xhc3MgUm9zSW5kZXggZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlNMUzo6SW5kZXhcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZnVsbFRleHRJbmRleDogRnVsbC10ZXh0IGluZGV4aW5nIGNvbmZpZ3VyYXRpb24uXG4gICAgICogRnVsbC10ZXh0IGluZGV4aW5nIGFuZCBrZXkgaW5kZXhpbmcgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBlbmFibGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBmdWxsVGV4dEluZGV4OiBSb3NJbmRleC5GdWxsVGV4dEluZGV4UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nc3RvcmVOYW1lOiBMb2dzdG9yZSBuYW1lOlxuICAgICAqIDEuIE9ubHkgc3VwcG9ydHMgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGh5cGhlbnMgKC0pIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogMi4gTXVzdCBzdGFydCBhbmQgZW5kIHdpdGggbG93ZXJjYXNlIGxldHRlcnMgYW5kIG51bWJlcnMuXG4gICAgICogMy4gVGhlIG5hbWUgbGVuZ3RoIGlzIDMtNjMgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9nc3RvcmVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvamVjdE5hbWU6IFByb2plY3QgbmFtZTpcbiAgICAgKiAxLiBPbmx5IHN1cHBvcnRzIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBoeXBoZW5zICgtKSBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIDIuIE11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBudW1iZXJzLlxuICAgICAqIDMuIFRoZSBuYW1lIGxlbmd0aCBpcyAzLTYzIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIHByb2plY3ROYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkga2V5SW5kaWNlczogS2V5IGluZGV4IGNvbmZpZ3VyYXRpb25zLlxuICAgICAqIEZ1bGwtdGV4dCBpbmRleGluZyBhbmQga2V5IGluZGV4aW5nIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgZW5hYmxlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMga2V5SW5kaWNlczogQXJyYXk8Um9zSW5kZXguS2V5SW5kaWNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dSZWR1Y2U6IFdoZXRoZXIgdG8gZW5hYmxlIGxvZyByZWR1Y2UuIERlZmF1bHQgdG8gZmFsc2UuXG4gICAgICovXG4gICAgcHVibGljIGxvZ1JlZHVjZTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTTFM6OkluZGV4YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NJbmRleFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zSW5kZXguUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmZ1bGxUZXh0SW5kZXggPSBwcm9wcy5mdWxsVGV4dEluZGV4O1xuICAgICAgICB0aGlzLmxvZ3N0b3JlTmFtZSA9IHByb3BzLmxvZ3N0b3JlTmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb3BzLnByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLmtleUluZGljZXMgPSBwcm9wcy5rZXlJbmRpY2VzO1xuICAgICAgICB0aGlzLmxvZ1JlZHVjZSA9IHByb3BzLmxvZ1JlZHVjZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmdWxsVGV4dEluZGV4OiB0aGlzLmZ1bGxUZXh0SW5kZXgsXG4gICAgICAgICAgICBsb2dzdG9yZU5hbWU6IHRoaXMubG9nc3RvcmVOYW1lLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6IHRoaXMucHJvamVjdE5hbWUsXG4gICAgICAgICAgICBrZXlJbmRpY2VzOiB0aGlzLmtleUluZGljZXMsXG4gICAgICAgICAgICBsb2dSZWR1Y2U6IHRoaXMubG9nUmVkdWNlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NJbmRleFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0luZGV4IHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBGdWxsVGV4dEluZGV4UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRlbGltaXRlcjogRGVsaW1pdGVyLiBEZWZhdWx0IHRvICgoICwgJ1wiOz0oKVtde30/QCY8Pi86XFxuXFx0XFxyICkpLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVsaW1pdGVyPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGluY2x1ZGVDaGluZXNlOiBXaGV0aGVyIGl0IGNvbnRhaW5zIENoaW5lc2UuIERlZmF1bHQgdG8gZmFsc2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmNsdWRlQ2hpbmVzZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY2FzZVNlbnNpdGl2ZTogV2hldGhlciBpdCBpcyBjYXNlIHNlbnNpdGl2ZS4gRGVmYXVsdCB0byBmYWxzZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNhc2VTZW5zaXRpdmU/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVuYWJsZTogV2hldGhlciB0byBlbmFibGUgZnVsbC10ZXh0IGluZGV4aW5nLiBEZWZhdWx0IHRvIHRydWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBlbmFibGU6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBGdWxsVGV4dEluZGV4UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEZ1bGxUZXh0SW5kZXhQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NJbmRleF9GdWxsVGV4dEluZGV4UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxpbWl0ZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVsaW1pdGVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmNsdWRlQ2hpbmVzZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuaW5jbHVkZUNoaW5lc2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Nhc2VTZW5zaXRpdmUnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmNhc2VTZW5zaXRpdmUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5lbmFibGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZW5hYmxlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkZ1bGxUZXh0SW5kZXhQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xTOjpJbmRleC5GdWxsVGV4dEluZGV4YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBGdWxsVGV4dEluZGV4UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6SW5kZXguRnVsbFRleHRJbmRleGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NJbmRleEZ1bGxUZXh0SW5kZXhQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zSW5kZXhfRnVsbFRleHRJbmRleFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgRGVsaW1pdGVyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlbGltaXRlciksXG4gICAgICBJbmNsdWRlQ2hpbmVzZTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5jbHVkZUNoaW5lc2UpLFxuICAgICAgQ2FzZVNlbnNpdGl2ZTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2FzZVNlbnNpdGl2ZSksXG4gICAgICBFbmFibGU6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NJbmRleCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSnNvbktleUluZGljZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdHlwZTogSnNvbiBrZXkgdHlwZS4gQWxsb3dlZCB0eXBlczogdGV4dCwgbG9uZywgZG91YmxlLiBEZWZhdWx0IHRvIHRleHQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWxpYXM6IEpzb24ga2V5IGFsaWFzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYWxpYXM/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZW5hYmxlQW5hbHl0aWNzOiBXaGV0aGVyIHRoaXMganNvbiBrZXkgaXMgZW5hYmxlZCBmb3Igc3RhdGlzdGljcy4gRGVmYXVsdCB0byB0cnVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZW5hYmxlQW5hbHl0aWNzPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBKc29uIGtleSBuYW1lLiBJdCBjYW4gYmUgbmVzdGVkIGJ5IGRvdCguKSwgc3VjaCBhcyBrMS5rMi5rMy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEpzb25LZXlJbmRpY2VzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEpzb25LZXlJbmRpY2VzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zSW5kZXhfSnNvbktleUluZGljZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMudHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1widGV4dFwiLFwibG9uZ1wiLFwiZG91YmxlXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGlhcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hbGlhcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlQW5hbHl0aWNzJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVBbmFseXRpY3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkpzb25LZXlJbmRpY2VzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6SW5kZXguSnNvbktleUluZGljZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEpzb25LZXlJbmRpY2VzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6SW5kZXguSnNvbktleUluZGljZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSW5kZXhKc29uS2V5SW5kaWNlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NJbmRleF9Kc29uS2V5SW5kaWNlc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50eXBlKSxcbiAgICAgIEFsaWFzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFsaWFzKSxcbiAgICAgIEVuYWJsZUFuYWx5dGljczogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5hYmxlQW5hbHl0aWNzKSxcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NJbmRleCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgS2V5SW5kaWNlc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBLZXkgdHlwZS4gQWxsb3dlZCB0eXBlczogdGV4dCwgbG9uZywgZG91YmxlLCBqc29uLiBEZWZhdWx0IHRvIHRleHQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0eXBlOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkganNvbktleUluZGljZXM6IEpzb24ga2V5IGluZGV4IGNvbmZpZ3VyYXRpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkganNvbktleUluZGljZXM/OiBBcnJheTxSb3NJbmRleC5Kc29uS2V5SW5kaWNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkZWxpbWl0ZXI6IERlbGltaXRlci4gSXQgdGFrZXMgZWZmZWN0IHdoZW4gVHlwZSBpcyB0ZXh0IG9yIGpzb24uIERlZmF1bHQgdG8gKCggLCAnXCI7PSgpW117fT9AJjw+LzpcXG5cXHRcXHIgKSkuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkZWxpbWl0ZXI/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5jbHVkZUNoaW5lc2U6IFdoZXRoZXIgaXQgY29udGFpbnMgQ2hpbmVzZS4gSXQgdGFrZXMgZWZmZWN0IHdoZW4gVHlwZSBpcyB0ZXh0IG9yIGpzb24uIERlZmF1bHQgdG8gZmFsc2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmNsdWRlQ2hpbmVzZT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWxpYXM6IEtleSBhbGlhcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFsaWFzPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGVuYWJsZUFuYWx5dGljczogV2hldGhlciB0aGlzIGtleSBpcyBlbmFibGVkIGZvciBzdGF0aXN0aWNzLiBEZWZhdWx0IHRvIGZhbHNlIGZvciBqc29uIHR5cGUsIGVsc2UgdHJ1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGVuYWJsZUFuYWx5dGljcz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY2FzZVNlbnNpdGl2ZTogV2hldGhlciBpdCBpcyBjYXNlIHNlbnNpdGl2ZS4gSXQgdGFrZXMgZWZmZWN0IHdoZW4gVHlwZSBpcyB0ZXh0IG9yIGpzb24uIERlZmF1bHQgdG8gZmFsc2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjYXNlU2Vuc2l0aXZlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBLZXkgbmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEtleUluZGljZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgS2V5SW5kaWNlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0luZGV4X0tleUluZGljZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMudHlwZSAmJiAodHlwZW9mIHByb3BlcnRpZXMudHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnR5cGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1widGV4dFwiLFwibG9uZ1wiLFwiZG91YmxlXCIsXCJqc29uXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50eXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdqc29uS2V5SW5kaWNlcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0luZGV4X0pzb25LZXlJbmRpY2VzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmpzb25LZXlJbmRpY2VzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxpbWl0ZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVsaW1pdGVyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmNsdWRlQ2hpbmVzZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuaW5jbHVkZUNoaW5lc2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsaWFzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFsaWFzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVBbmFseXRpY3MnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmVuYWJsZUFuYWx5dGljcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2FzZVNlbnNpdGl2ZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuY2FzZVNlbnNpdGl2ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiS2V5SW5kaWNlc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTFM6OkluZGV4LktleUluZGljZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEtleUluZGljZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xTOjpJbmRleC5LZXlJbmRpY2VzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0luZGV4S2V5SW5kaWNlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NJbmRleF9LZXlJbmRpY2VzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnR5cGUpLFxuICAgICAgSnNvbktleUluZGljZXM6IHJvcy5saXN0TWFwcGVyKHJvc0luZGV4SnNvbktleUluZGljZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuanNvbktleUluZGljZXMpLFxuICAgICAgRGVsaW1pdGVyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlbGltaXRlciksXG4gICAgICBJbmNsdWRlQ2hpbmVzZTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5jbHVkZUNoaW5lc2UpLFxuICAgICAgQWxpYXM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWxpYXMpLFxuICAgICAgRW5hYmxlQW5hbHl0aWNzOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVBbmFseXRpY3MpLFxuICAgICAgQ2FzZVNlbnNpdGl2ZTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2FzZVNlbnNpdGl2ZSksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTTFM6OkxvZ3N0b3JlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0xvZ3N0b3JlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvZ3N0b3JlTmFtZTogTG9nc3RvcmUgbmFtZTpcbiAgICAgKiAxLiBPbmx5IHN1cHBvcnRzIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBoeXBoZW5zICgtKSBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIDIuIE11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBudW1iZXJzLlxuICAgICAqIDMuIFRoZSBuYW1lIGxlbmd0aCBpcyAzLTYzIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9nc3RvcmVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvamVjdE5hbWU6IFByb2plY3QgbmFtZTpcbiAgICAgKiAxLiBPbmx5IHN1cHBvcnRzIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBoeXBoZW5zICgtKSBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIDIuIE11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBudW1iZXJzLlxuICAgICAqIDMuIFRoZSBuYW1lIGxlbmd0aCBpcyAzLTYzIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvamVjdE5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBlbmRNZXRhOiBXaGV0aGVyIHRvIGFkZCBjbGllbnQgZXh0ZXJuYWwgbmV0d29yayBJUCBhbmQgbG9nIGFycml2YWwgdGltZSBhZnRlciByZWNlaXZpbmcgdGhlIGxvZy5cbiAgICAgKiBEZWZhdWx0IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFwcGVuZE1ldGE/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9TcGxpdDogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IHNwbGl0IHRoZSBzaGFyZC5cbiAgICAgKiBEZWZhdWx0IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9TcGxpdD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlVHJhY2tpbmc6IFdoZXRoZXIgdG8gZW5hYmxlIFdlYlRyYWNraW5nLCB3aGljaCBzdXBwb3J0cyBmYXN0IGNhcHR1cmUgb2YgdmFyaW91cyBicm93c2VycyBhbmQgaU9TL0FuZHJvaWQvQVBQIGFjY2VzcyBpbmZvcm1hdGlvbi5cbiAgICAgKiBEZWZhdWx0IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZVRyYWNraW5nPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXhTcGxpdFNoYXJkOiBUaGUgbWF4aW11bSBudW1iZXIgb2Ygc2hhcmRzIHdoZW4gc3BsaXR0aW5nIGF1dG9tYXRpY2FsbHkuIE11c3QgYmUgc3BlY2lmaWVkIGlmIEF1dG9TcGxpdCBpcyBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBBbGxvd2VkIFZhbHVlczogMS02NC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhTcGxpdFNoYXJkPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByZXNlcnZlU3RvcmFnZTogV2hldGhlciB0byBrZWVwIHRoZSBsb2cgcGVybWFuZW50bHkuXG4gICAgICogSWYgc2V0IHRvIHRydWUsIFRUTCB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICogRGVmYXVsdCB0byBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcmVzZXJ2ZVN0b3JhZ2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNoYXJkQ291bnQ6IFRoZSBudW1iZXIgb2YgU2hhcmRzLlxuICAgICAqIEFsbG93ZWQgVmFsdWVzOiAxLTEwMCwgZGVmYXVsdCB0byAyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNoYXJkQ291bnQ/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHRsOiBUaGUgbGlmZWN5Y2xlIG9mIGxvZyBpbiB0aGUgbG9nc3RvcmUgaW4gZGF5cy5cbiAgICAgKiBBbGxvd2VkIFZhbHVlczogMS0zNjAwLCBkZWZhdWx0IHRvIDMwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHR0bD86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NMb2dzdG9yZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NMb2dzdG9yZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0xvZ3N0b3JlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dzdG9yZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubG9nc3RvcmVOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5sb2dzdG9yZU5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5sb2dzdG9yZU5hbWUpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5sb2dzdG9yZU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dzdG9yZU5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubG9nc3RvcmVOYW1lLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMyxcbiAgICAgICAgICAgIG1heDogNjMsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ3N0b3JlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dzdG9yZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByZXNlcnZlU3RvcmFnZScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMucHJlc2VydmVTdG9yYWdlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcm9qZWN0TmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJvamVjdE5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5wcm9qZWN0TmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdE5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJvamVjdE5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAzLFxuICAgICAgICAgICAgbWF4OiA2MyxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGlmKHByb3BlcnRpZXMucHJvamVjdE5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0TmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcm9qZWN0TmFtZSxcbiAgICAgICAgICByZWc6IC9eW2EtekEtWjAtOV8tXSskL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvamVjdE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FwcGVuZE1ldGEnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmFwcGVuZE1ldGEpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1heFNwbGl0U2hhcmQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1heFNwbGl0U2hhcmQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFNwbGl0U2hhcmQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tYXhTcGxpdFNoYXJkLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiA2NCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF4U3BsaXRTaGFyZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5tYXhTcGxpdFNoYXJkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRvU3BsaXQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmF1dG9TcGxpdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlVHJhY2tpbmcnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmVuYWJsZVRyYWNraW5nKSk7XG4gICAgaWYocHJvcGVydGllcy50dGwgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnR0bCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndHRsJywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudHRsLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAzNjAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0dGwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudHRsKSk7XG4gICAgaWYocHJvcGVydGllcy5zaGFyZENvdW50ICYmICh0eXBlb2YgcHJvcGVydGllcy5zaGFyZENvdW50KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzaGFyZENvdW50Jywgcm9zLnZhbGlkYXRlUmFuZ2UpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2hhcmRDb3VudCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzaGFyZENvdW50Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnNoYXJkQ291bnQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTG9nc3RvcmVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xTOjpMb2dzdG9yZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTG9nc3RvcmVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xTOjpMb2dzdG9yZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NMb2dzdG9yZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zTG9nc3RvcmVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBMb2dzdG9yZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nc3RvcmVOYW1lKSxcbiAgICAgIFByb2plY3ROYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSxcbiAgICAgIEFwcGVuZE1ldGE6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFwcGVuZE1ldGEpLFxuICAgICAgQXV0b1NwbGl0OiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hdXRvU3BsaXQpLFxuICAgICAgRW5hYmxlVHJhY2tpbmc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZVRyYWNraW5nKSxcbiAgICAgIE1heFNwbGl0U2hhcmQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4U3BsaXRTaGFyZCksXG4gICAgICBQcmVzZXJ2ZVN0b3JhZ2U6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByZXNlcnZlU3RvcmFnZSksXG4gICAgICBTaGFyZENvdW50OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNoYXJkQ291bnQpLFxuICAgICAgVFRMOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnR0bCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6U0xTOjpMb2dzdG9yZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0xvZ3N0b3JlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpTTFM6OkxvZ3N0b3JlXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTG9nc3RvcmVOYW1lOiBMb2dzdG9yZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9nc3RvcmVOYW1lOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dzdG9yZU5hbWU6IExvZ3N0b3JlIG5hbWU6XG4gICAgICogMS4gT25seSBzdXBwb3J0cyBsb3dlcmNhc2UgbGV0dGVycywgbnVtYmVycywgaHlwaGVucyAoLSkgYW5kIHVuZGVyc2NvcmVzIChfKS5cbiAgICAgKiAyLiBNdXN0IHN0YXJ0IGFuZCBlbmQgd2l0aCBsb3dlcmNhc2UgbGV0dGVycyBhbmQgbnVtYmVycy5cbiAgICAgKiAzLiBUaGUgbmFtZSBsZW5ndGggaXMgMy02MyBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dzdG9yZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0TmFtZTogUHJvamVjdCBuYW1lOlxuICAgICAqIDEuIE9ubHkgc3VwcG9ydHMgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGh5cGhlbnMgKC0pIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogMi4gTXVzdCBzdGFydCBhbmQgZW5kIHdpdGggbG93ZXJjYXNlIGxldHRlcnMgYW5kIG51bWJlcnMuXG4gICAgICogMy4gVGhlIG5hbWUgbGVuZ3RoIGlzIDMtNjMgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJvamVjdE5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhcHBlbmRNZXRhOiBXaGV0aGVyIHRvIGFkZCBjbGllbnQgZXh0ZXJuYWwgbmV0d29yayBJUCBhbmQgbG9nIGFycml2YWwgdGltZSBhZnRlciByZWNlaXZpbmcgdGhlIGxvZy5cbiAgICAgKiBEZWZhdWx0IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBlbmRNZXRhOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9TcGxpdDogV2hldGhlciB0byBhdXRvbWF0aWNhbGx5IHNwbGl0IHRoZSBzaGFyZC5cbiAgICAgKiBEZWZhdWx0IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhdXRvU3BsaXQ6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlVHJhY2tpbmc6IFdoZXRoZXIgdG8gZW5hYmxlIFdlYlRyYWNraW5nLCB3aGljaCBzdXBwb3J0cyBmYXN0IGNhcHR1cmUgb2YgdmFyaW91cyBicm93c2VycyBhbmQgaU9TL0FuZHJvaWQvQVBQIGFjY2VzcyBpbmZvcm1hdGlvbi5cbiAgICAgKiBEZWZhdWx0IHRvIGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVUcmFja2luZzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXhTcGxpdFNoYXJkOiBUaGUgbWF4aW11bSBudW1iZXIgb2Ygc2hhcmRzIHdoZW4gc3BsaXR0aW5nIGF1dG9tYXRpY2FsbHkuIE11c3QgYmUgc3BlY2lmaWVkIGlmIEF1dG9TcGxpdCBpcyBzZXQgdG8gdHJ1ZS5cbiAgICAgKiBBbGxvd2VkIFZhbHVlczogMS02NC5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWF4U3BsaXRTaGFyZDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByZXNlcnZlU3RvcmFnZTogV2hldGhlciB0byBrZWVwIHRoZSBsb2cgcGVybWFuZW50bHkuXG4gICAgICogSWYgc2V0IHRvIHRydWUsIFRUTCB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICogRGVmYXVsdCB0byBmYWxzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJlc2VydmVTdG9yYWdlOiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNoYXJkQ291bnQ6IFRoZSBudW1iZXIgb2YgU2hhcmRzLlxuICAgICAqIEFsbG93ZWQgVmFsdWVzOiAxLTEwMCwgZGVmYXVsdCB0byAyLlxuICAgICAqL1xuICAgIHB1YmxpYyBzaGFyZENvdW50OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdHRsOiBUaGUgbGlmZWN5Y2xlIG9mIGxvZyBpbiB0aGUgbG9nc3RvcmUgaW4gZGF5cy5cbiAgICAgKiBBbGxvd2VkIFZhbHVlczogMS0zNjAwLCBkZWZhdWx0IHRvIDMwLlxuICAgICAqL1xuICAgIHB1YmxpYyB0dGw6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTTFM6OkxvZ3N0b3JlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NMb2dzdG9yZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTG9nc3RvcmUuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckxvZ3N0b3JlTmFtZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnTG9nc3RvcmVOYW1lJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5sb2dzdG9yZU5hbWUgPSBwcm9wcy5sb2dzdG9yZU5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9wcy5wcm9qZWN0TmFtZTtcbiAgICAgICAgdGhpcy5hcHBlbmRNZXRhID0gcHJvcHMuYXBwZW5kTWV0YTtcbiAgICAgICAgdGhpcy5hdXRvU3BsaXQgPSBwcm9wcy5hdXRvU3BsaXQ7XG4gICAgICAgIHRoaXMuZW5hYmxlVHJhY2tpbmcgPSBwcm9wcy5lbmFibGVUcmFja2luZztcbiAgICAgICAgdGhpcy5tYXhTcGxpdFNoYXJkID0gcHJvcHMubWF4U3BsaXRTaGFyZDtcbiAgICAgICAgdGhpcy5wcmVzZXJ2ZVN0b3JhZ2UgPSBwcm9wcy5wcmVzZXJ2ZVN0b3JhZ2U7XG4gICAgICAgIHRoaXMuc2hhcmRDb3VudCA9IHByb3BzLnNoYXJkQ291bnQ7XG4gICAgICAgIHRoaXMudHRsID0gcHJvcHMudHRsO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvZ3N0b3JlTmFtZTogdGhpcy5sb2dzdG9yZU5hbWUsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogdGhpcy5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIGFwcGVuZE1ldGE6IHRoaXMuYXBwZW5kTWV0YSxcbiAgICAgICAgICAgIGF1dG9TcGxpdDogdGhpcy5hdXRvU3BsaXQsXG4gICAgICAgICAgICBlbmFibGVUcmFja2luZzogdGhpcy5lbmFibGVUcmFja2luZyxcbiAgICAgICAgICAgIG1heFNwbGl0U2hhcmQ6IHRoaXMubWF4U3BsaXRTaGFyZCxcbiAgICAgICAgICAgIHByZXNlcnZlU3RvcmFnZTogdGhpcy5wcmVzZXJ2ZVN0b3JhZ2UsXG4gICAgICAgICAgICBzaGFyZENvdW50OiB0aGlzLnNoYXJkQ291bnQsXG4gICAgICAgICAgICB0dGw6IHRoaXMudHRsLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NMb2dzdG9yZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0xTOjpMb2d0YWlsQ29uZmlnYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0xvZ3RhaWxDb25maWdQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbG9nc3RvcmVOYW1lOiBMb2dzdG9yZSBuYW1lOlxuICAgICAqIDEuIE9ubHkgc3VwcG9ydHMgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGh5cGhlbnMgKC0pIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogMi4gTXVzdCBzdGFydCBhbmQgZW5kIHdpdGggbG93ZXJjYXNlIGxldHRlcnMgYW5kIG51bWJlcnMuXG4gICAgICogMy4gVGhlIG5hbWUgbGVuZ3RoIGlzIDMtNjMgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2dzdG9yZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2d0YWlsQ29uZmlnTmFtZTogTG9ndGFpbCBjb25maWcgbmFtZTpcbiAgICAgKiAxLiBPbmx5IHN1cHBvcnRzIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBoeXBoZW5zICgtKSBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIDIuIE11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBudW1iZXJzLlxuICAgICAqIDMuIFRoZSBuYW1lIGxlbmd0aCBpcyAzLTYzIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9ndGFpbENvbmZpZ05hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0TmFtZTogUHJvamVjdCBuYW1lOlxuICAgICAqIDEuIE9ubHkgc3VwcG9ydHMgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGh5cGhlbnMgKC0pIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogMi4gTXVzdCBzdGFydCBhbmQgZW5kIHdpdGggbG93ZXJjYXNlIGxldHRlcnMgYW5kIG51bWJlcnMuXG4gICAgICogMy4gVGhlIG5hbWUgbGVuZ3RoIGlzIDMtNjMgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9qZWN0TmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNsb25lRnJvbTogQ2xvbmUgbG9ndGFpbCBjb25maWcgZGF0YSBmcm9tIGV4aXN0aW5nIGxvZ3RhaWwgY29uZmlnLlxuICAgICAqIEVpdGhlciBDbG9uZUZyb20gb3IgUmF3Q29uZmlnRGF0YSBtdXN0IGJlIHNwZWNpZmllZC4gSWYgQ2xvbmVGcm9tIGFuZCBSYXdDb25maWdEYXRhIGFyZSBib3RoIHNwZWNpZmllZCwgbG9ndGFpbCBjb25maWcgZGF0YSB3aWxsIGJlIG1lcmdlZCBmcm9tIGJvdGggd2l0aCBSYXdDb25maWdEYXRhIGZpcnN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNsb25lRnJvbT86IFJvc0xvZ3RhaWxDb25maWcuQ2xvbmVGcm9tUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmF3Q29uZmlnRGF0YTogVGhlIGZvcm1hdCBpcyB0aGUgc2FtZSBhcyB0aGUgcmVzcG9uc2Ugb2YgU0xTIEFQSSBHZXRDb25maWcuXG4gICAgICogRWl0aGVyIENsb25lRnJvbSBvciBSYXdDb25maWdEYXRhIG11c3QgYmUgc3BlY2lmaWVkLiBJZiBDbG9uZUZyb20gYW5kIFJhd0NvbmZpZ0RhdGEgYXJlIGJvdGggc3BlY2lmaWVkLCBsb2d0YWlsIGNvbmZpZyBkYXRhIHdpbGwgYmUgbWVyZ2VkIGZyb20gYm90aCB3aXRoIFJhd0NvbmZpZ0RhdGEgZmlyc3QuXG4gICAgICogY29uZmlnTmFtZSwgb3V0cHV0VHlwZSwgb3V0cHV0RGV0YWlsIGluIGRhdGEgd2lsbCBiZSBpZ25vcmVkLkZvciBleGFtcGxlOlxuICAgICAqIHtcbiAgICAgKiAgICAgXCJjb25maWdOYW1lXCI6IFwidGVzdC1sb2d0YWlsLWNvbmZpZ1wiLFxuICAgICAqICAgICBcImNyZWF0ZVRpbWVcIjogMTU3NDg0MzU1NCxcbiAgICAgKiAgICAgXCJpbnB1dERldGFpbFwiOiB7XG4gICAgICogICAgICAgICBcImFjY2VwdE5vRW5vdWdoS2V5c1wiOiBmYWxzZSxcbiAgICAgKiAgICAgICAgIFwiYWRqdXN0VGltZXpvbmVcIjogZmFsc2UsXG4gICAgICogICAgICAgICBcImFkdmFuY2VkXCI6IHtcbiAgICAgKiAgICAgICAgICAgICBcImZvcmNlX211bHRpY29uZmlnXCI6IGZhbHNlXG4gICAgICogICAgICAgICB9LFxuICAgICAqICAgICAgICAgXCJhdXRvRXh0ZW5kXCI6IHRydWUsXG4gICAgICogICAgICAgICBcImRlbGF5QWxhcm1CeXRlc1wiOiAwLFxuICAgICAqICAgICAgICAgXCJkZWxheVNraXBCeXRlc1wiOiAwLFxuICAgICAqICAgICAgICAgXCJkaXNjYXJkTm9uVXRmOFwiOiBmYWxzZSxcbiAgICAgKiAgICAgICAgIFwiZGlzY2FyZFVubWF0Y2hcIjogZmFsc2UsXG4gICAgICogICAgICAgICBcImRvY2tlckV4Y2x1ZGVFbnZcIjoge30sXG4gICAgICogICAgICAgICBcImRvY2tlckV4Y2x1ZGVMYWJlbFwiOiB7fSxcbiAgICAgKiAgICAgICAgIFwiZG9ja2VyRmlsZVwiOiBmYWxzZSxcbiAgICAgKiAgICAgICAgIFwiZG9ja2VySW5jbHVkZUVudlwiOiB7fSxcbiAgICAgKiAgICAgICAgIFwiZG9ja2VySW5jbHVkZUxhYmVsXCI6IHt9LFxuICAgICAqICAgICAgICAgXCJlbmFibGVSYXdMb2dcIjogZmFsc2UsXG4gICAgICogICAgICAgICBcImVuYWJsZVRhZ1wiOiBmYWxzZSxcbiAgICAgKiAgICAgICAgIFwiZmlsZUVuY29kaW5nXCI6IFwidXRmOFwiLFxuICAgICAqICAgICAgICAgXCJmaWxlUGF0dGVyblwiOiBcInRlc3QubG9nKlwiLFxuICAgICAqICAgICAgICAgXCJmaWx0ZXJLZXlcIjogW10sXG4gICAgICogICAgICAgICBcImZpbHRlclJlZ2V4XCI6IFtdLFxuICAgICAqICAgICAgICAgXCJrZXlcIjogW1xuICAgICAqICAgICAgICAgICAgIFwidGltZVwiLFxuICAgICAqICAgICAgICAgICAgIFwibG9nZ2VyXCIsXG4gICAgICogICAgICAgICAgICAgXCJsZXZlbFwiLFxuICAgICAqICAgICAgICAgICAgIFwicmVxdWVzdF9pZFwiLFxuICAgICAqICAgICAgICAgICAgIFwidXNlcl9pZFwiLFxuICAgICAqICAgICAgICAgICAgIFwicmVnaW9uX2lkXCIsXG4gICAgICogICAgICAgICAgICAgXCJjb250ZW50XCJcbiAgICAgKiAgICAgICAgIF0sXG4gICAgICogICAgICAgICBcImxvY2FsU3RvcmFnZVwiOiB0cnVlLFxuICAgICAqICAgICAgICAgXCJsb2dQYXRoXCI6IFwiL3Zhci9sb2cvdGVzdFwiLFxuICAgICAqICAgICAgICAgXCJsb2dUaW1lem9uZVwiOiBcIlwiLFxuICAgICAqICAgICAgICAgXCJsb2dUeXBlXCI6IFwiZGVsaW1pdGVyX2xvZ1wiLFxuICAgICAqICAgICAgICAgXCJtYXhEZXB0aFwiOiAxMDAsXG4gICAgICogICAgICAgICBcIm1heFNlbmRSYXRlXCI6IC0xLFxuICAgICAqICAgICAgICAgXCJtZXJnZVR5cGVcIjogXCJ0b3BpY1wiLFxuICAgICAqICAgICAgICAgXCJwcmVzZXJ2ZVwiOiB0cnVlLFxuICAgICAqICAgICAgICAgXCJwcmVzZXJ2ZURlcHRoXCI6IDEsXG4gICAgICogICAgICAgICBcInByaW9yaXR5XCI6IDAsXG4gICAgICogICAgICAgICBcInF1b3RlXCI6IFwiXFx1MDAwMVwiLFxuICAgICAqICAgICAgICAgXCJzZW5kUmF0ZUV4cGlyZVwiOiAwLFxuICAgICAqICAgICAgICAgXCJzZW5zaXRpdmVfa2V5c1wiOiBbXSxcbiAgICAgKiAgICAgICAgIFwic2VwYXJhdG9yXCI6IFwiLCwsXCIsXG4gICAgICogICAgICAgICBcInNoYXJkSGFzaEtleVwiOiBbXSxcbiAgICAgKiAgICAgICAgIFwidGFpbEV4aXN0ZWRcIjogZmFsc2UsXG4gICAgICogICAgICAgICBcInRpbWVGb3JtYXRcIjogXCJcIixcbiAgICAgKiAgICAgICAgIFwidGltZUtleVwiOiBcIlwiLFxuICAgICAqICAgICAgICAgXCJ0b3BpY0Zvcm1hdFwiOiBcIm5vbmVcIlxuICAgICAqICAgICB9LFxuICAgICAqICAgICBcImlucHV0VHlwZVwiOiBcImZpbGVcIixcbiAgICAgKiAgICAgXCJsYXN0TW9kaWZ5VGltZVwiOiAxNTc0ODQzNTU0LFxuICAgICAqICAgICBcImxvZ1NhbXBsZVwiOiBcIjIwMTktMTEtMjcgMTA6NDg6MjMsMTYwLCwsTUFJTiwsLElORk8sLCw5OERDQzUxRC1CRTVELTQ5QzctQjNGRC0zN0IyQkFFRkIyOTYsLCwxMjM0NTY3ODksLCxjbi1oYW5nemhvdSwsLHRoaXMgaXMgYSBzaW1wbGUgdGVzdC5cIixcbiAgICAgKiAgICAgXCJvdXRwdXREZXRhaWxcIjoge1xuICAgICAqICAgICAgICAgXCJlbmRwb2ludFwiOiBcImNuLWhhbmd6aG91LWludHJhbmV0LmxvZy5hbGl5dW5jcy5jb21cIixcbiAgICAgKiAgICAgICAgIFwibG9nc3RvcmVOYW1lXCI6IFwidGVzdC1sb2dzdG9yZVwiLFxuICAgICAqICAgICAgICAgXCJyZWdpb25cIjogXCJjbi1oYW5nemhvdVwiXG4gICAgICogICAgIH0sXG4gICAgICogICAgIFwib3V0cHV0VHlwZVwiOiBcIkxvZ1NlcnZpY2VcIlxuICAgICAqIH1cbiAgICAgKi9cbiAgICByZWFkb25seSByYXdDb25maWdEYXRhPzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0xvZ3RhaWxDb25maWdQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTG9ndGFpbENvbmZpZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0xvZ3RhaWxDb25maWdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ3RhaWxDb25maWdOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxvZ3RhaWxDb25maWdOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5sb2d0YWlsQ29uZmlnTmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmxvZ3RhaWxDb25maWdOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubG9ndGFpbENvbmZpZ05hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2d0YWlsQ29uZmlnTmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5sb2d0YWlsQ29uZmlnTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDMsXG4gICAgICAgICAgICBtYXg6IDYzLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2d0YWlsQ29uZmlnTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2d0YWlsQ29uZmlnTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nc3RvcmVOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxvZ3N0b3JlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMubG9nc3RvcmVOYW1lICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMubG9nc3RvcmVOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubG9nc3RvcmVOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nc3RvcmVOYW1lJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmxvZ3N0b3JlTmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDMsXG4gICAgICAgICAgICBtYXg6IDYzLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dzdG9yZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9nc3RvcmVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcm9qZWN0TmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucHJvamVjdE5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5wcm9qZWN0TmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdE5hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJvamVjdE5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAzLFxuICAgICAgICAgICAgbWF4OiA2MyxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGlmKHByb3BlcnRpZXMucHJvamVjdE5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0TmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcm9qZWN0TmFtZSxcbiAgICAgICAgICByZWc6IC9eW2EtekEtWjAtOV8tXSskL1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvamVjdE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jhd0NvbmZpZ0RhdGEnLCByb3MuaGFzaFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLnJhd0NvbmZpZ0RhdGEpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Nsb25lRnJvbScsIFJvc0xvZ3RhaWxDb25maWdfQ2xvbmVGcm9tUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2xvbmVGcm9tKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0xvZ3RhaWxDb25maWdQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xTOjpMb2d0YWlsQ29uZmlnYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NMb2d0YWlsQ29uZmlnUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6TG9ndGFpbENvbmZpZ2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NMb2d0YWlsQ29uZmlnUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NMb2d0YWlsQ29uZmlnUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgTG9nc3RvcmVOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ3N0b3JlTmFtZSksXG4gICAgICBMb2d0YWlsQ29uZmlnTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2d0YWlsQ29uZmlnTmFtZSksXG4gICAgICBQcm9qZWN0TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm9qZWN0TmFtZSksXG4gICAgICBDbG9uZUZyb206IHJvc0xvZ3RhaWxDb25maWdDbG9uZUZyb21Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jbG9uZUZyb20pLFxuICAgICAgUmF3Q29uZmlnRGF0YTogcm9zLmhhc2hNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucmF3Q29uZmlnRGF0YSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6U0xTOjpMb2d0YWlsQ29uZmlnYFxuICovXG5leHBvcnQgY2xhc3MgUm9zTG9ndGFpbENvbmZpZyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6U0xTOjpMb2d0YWlsQ29uZmlnXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXBwbGllZE1hY2hpbmVHcm91cHM6IEFwcGxpZWQgbWFjaGluZSBncm91cHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcHBsaWVkTWFjaGluZUdyb3VwczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBFbmRwb2ludDogRW5kcG9pbnQgYWRkcmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuZHBvaW50OiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2dzdG9yZU5hbWU6IExvZ3N0b3JlIG5hbWU6XG4gICAgICogMS4gT25seSBzdXBwb3J0cyBsb3dlcmNhc2UgbGV0dGVycywgbnVtYmVycywgaHlwaGVucyAoLSkgYW5kIHVuZGVyc2NvcmVzIChfKS5cbiAgICAgKiAyLiBNdXN0IHN0YXJ0IGFuZCBlbmQgd2l0aCBsb3dlcmNhc2UgbGV0dGVycyBhbmQgbnVtYmVycy5cbiAgICAgKiAzLiBUaGUgbmFtZSBsZW5ndGggaXMgMy02MyBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBsb2dzdG9yZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2d0YWlsQ29uZmlnTmFtZTogTG9ndGFpbCBjb25maWcgbmFtZTpcbiAgICAgKiAxLiBPbmx5IHN1cHBvcnRzIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBoeXBoZW5zICgtKSBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIDIuIE11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBudW1iZXJzLlxuICAgICAqIDMuIFRoZSBuYW1lIGxlbmd0aCBpcyAzLTYzIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIGxvZ3RhaWxDb25maWdOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvamVjdE5hbWU6IFByb2plY3QgbmFtZTpcbiAgICAgKiAxLiBPbmx5IHN1cHBvcnRzIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBoeXBoZW5zICgtKSBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIDIuIE11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBudW1iZXJzLlxuICAgICAqIDMuIFRoZSBuYW1lIGxlbmd0aCBpcyAzLTYzIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIHByb2plY3ROYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2xvbmVGcm9tOiBDbG9uZSBsb2d0YWlsIGNvbmZpZyBkYXRhIGZyb20gZXhpc3RpbmcgbG9ndGFpbCBjb25maWcuXG4gICAgICogRWl0aGVyIENsb25lRnJvbSBvciBSYXdDb25maWdEYXRhIG11c3QgYmUgc3BlY2lmaWVkLiBJZiBDbG9uZUZyb20gYW5kIFJhd0NvbmZpZ0RhdGEgYXJlIGJvdGggc3BlY2lmaWVkLCBsb2d0YWlsIGNvbmZpZyBkYXRhIHdpbGwgYmUgbWVyZ2VkIGZyb20gYm90aCB3aXRoIFJhd0NvbmZpZ0RhdGEgZmlyc3QuXG4gICAgICovXG4gICAgcHVibGljIGNsb25lRnJvbTogUm9zTG9ndGFpbENvbmZpZy5DbG9uZUZyb21Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByYXdDb25maWdEYXRhOiBUaGUgZm9ybWF0IGlzIHRoZSBzYW1lIGFzIHRoZSByZXNwb25zZSBvZiBTTFMgQVBJIEdldENvbmZpZy5cbiAgICAgKiBFaXRoZXIgQ2xvbmVGcm9tIG9yIFJhd0NvbmZpZ0RhdGEgbXVzdCBiZSBzcGVjaWZpZWQuIElmIENsb25lRnJvbSBhbmQgUmF3Q29uZmlnRGF0YSBhcmUgYm90aCBzcGVjaWZpZWQsIGxvZ3RhaWwgY29uZmlnIGRhdGEgd2lsbCBiZSBtZXJnZWQgZnJvbSBib3RoIHdpdGggUmF3Q29uZmlnRGF0YSBmaXJzdC5cbiAgICAgKiBjb25maWdOYW1lLCBvdXRwdXRUeXBlLCBvdXRwdXREZXRhaWwgaW4gZGF0YSB3aWxsIGJlIGlnbm9yZWQuRm9yIGV4YW1wbGU6XG4gICAgICoge1xuICAgICAqICAgICBcImNvbmZpZ05hbWVcIjogXCJ0ZXN0LWxvZ3RhaWwtY29uZmlnXCIsXG4gICAgICogICAgIFwiY3JlYXRlVGltZVwiOiAxNTc0ODQzNTU0LFxuICAgICAqICAgICBcImlucHV0RGV0YWlsXCI6IHtcbiAgICAgKiAgICAgICAgIFwiYWNjZXB0Tm9Fbm91Z2hLZXlzXCI6IGZhbHNlLFxuICAgICAqICAgICAgICAgXCJhZGp1c3RUaW1lem9uZVwiOiBmYWxzZSxcbiAgICAgKiAgICAgICAgIFwiYWR2YW5jZWRcIjoge1xuICAgICAqICAgICAgICAgICAgIFwiZm9yY2VfbXVsdGljb25maWdcIjogZmFsc2VcbiAgICAgKiAgICAgICAgIH0sXG4gICAgICogICAgICAgICBcImF1dG9FeHRlbmRcIjogdHJ1ZSxcbiAgICAgKiAgICAgICAgIFwiZGVsYXlBbGFybUJ5dGVzXCI6IDAsXG4gICAgICogICAgICAgICBcImRlbGF5U2tpcEJ5dGVzXCI6IDAsXG4gICAgICogICAgICAgICBcImRpc2NhcmROb25VdGY4XCI6IGZhbHNlLFxuICAgICAqICAgICAgICAgXCJkaXNjYXJkVW5tYXRjaFwiOiBmYWxzZSxcbiAgICAgKiAgICAgICAgIFwiZG9ja2VyRXhjbHVkZUVudlwiOiB7fSxcbiAgICAgKiAgICAgICAgIFwiZG9ja2VyRXhjbHVkZUxhYmVsXCI6IHt9LFxuICAgICAqICAgICAgICAgXCJkb2NrZXJGaWxlXCI6IGZhbHNlLFxuICAgICAqICAgICAgICAgXCJkb2NrZXJJbmNsdWRlRW52XCI6IHt9LFxuICAgICAqICAgICAgICAgXCJkb2NrZXJJbmNsdWRlTGFiZWxcIjoge30sXG4gICAgICogICAgICAgICBcImVuYWJsZVJhd0xvZ1wiOiBmYWxzZSxcbiAgICAgKiAgICAgICAgIFwiZW5hYmxlVGFnXCI6IGZhbHNlLFxuICAgICAqICAgICAgICAgXCJmaWxlRW5jb2RpbmdcIjogXCJ1dGY4XCIsXG4gICAgICogICAgICAgICBcImZpbGVQYXR0ZXJuXCI6IFwidGVzdC5sb2cqXCIsXG4gICAgICogICAgICAgICBcImZpbHRlcktleVwiOiBbXSxcbiAgICAgKiAgICAgICAgIFwiZmlsdGVyUmVnZXhcIjogW10sXG4gICAgICogICAgICAgICBcImtleVwiOiBbXG4gICAgICogICAgICAgICAgICAgXCJ0aW1lXCIsXG4gICAgICogICAgICAgICAgICAgXCJsb2dnZXJcIixcbiAgICAgKiAgICAgICAgICAgICBcImxldmVsXCIsXG4gICAgICogICAgICAgICAgICAgXCJyZXF1ZXN0X2lkXCIsXG4gICAgICogICAgICAgICAgICAgXCJ1c2VyX2lkXCIsXG4gICAgICogICAgICAgICAgICAgXCJyZWdpb25faWRcIixcbiAgICAgKiAgICAgICAgICAgICBcImNvbnRlbnRcIlxuICAgICAqICAgICAgICAgXSxcbiAgICAgKiAgICAgICAgIFwibG9jYWxTdG9yYWdlXCI6IHRydWUsXG4gICAgICogICAgICAgICBcImxvZ1BhdGhcIjogXCIvdmFyL2xvZy90ZXN0XCIsXG4gICAgICogICAgICAgICBcImxvZ1RpbWV6b25lXCI6IFwiXCIsXG4gICAgICogICAgICAgICBcImxvZ1R5cGVcIjogXCJkZWxpbWl0ZXJfbG9nXCIsXG4gICAgICogICAgICAgICBcIm1heERlcHRoXCI6IDEwMCxcbiAgICAgKiAgICAgICAgIFwibWF4U2VuZFJhdGVcIjogLTEsXG4gICAgICogICAgICAgICBcIm1lcmdlVHlwZVwiOiBcInRvcGljXCIsXG4gICAgICogICAgICAgICBcInByZXNlcnZlXCI6IHRydWUsXG4gICAgICogICAgICAgICBcInByZXNlcnZlRGVwdGhcIjogMSxcbiAgICAgKiAgICAgICAgIFwicHJpb3JpdHlcIjogMCxcbiAgICAgKiAgICAgICAgIFwicXVvdGVcIjogXCJcXHUwMDAxXCIsXG4gICAgICogICAgICAgICBcInNlbmRSYXRlRXhwaXJlXCI6IDAsXG4gICAgICogICAgICAgICBcInNlbnNpdGl2ZV9rZXlzXCI6IFtdLFxuICAgICAqICAgICAgICAgXCJzZXBhcmF0b3JcIjogXCIsLCxcIixcbiAgICAgKiAgICAgICAgIFwic2hhcmRIYXNoS2V5XCI6IFtdLFxuICAgICAqICAgICAgICAgXCJ0YWlsRXhpc3RlZFwiOiBmYWxzZSxcbiAgICAgKiAgICAgICAgIFwidGltZUZvcm1hdFwiOiBcIlwiLFxuICAgICAqICAgICAgICAgXCJ0aW1lS2V5XCI6IFwiXCIsXG4gICAgICogICAgICAgICBcInRvcGljRm9ybWF0XCI6IFwibm9uZVwiXG4gICAgICogICAgIH0sXG4gICAgICogICAgIFwiaW5wdXRUeXBlXCI6IFwiZmlsZVwiLFxuICAgICAqICAgICBcImxhc3RNb2RpZnlUaW1lXCI6IDE1NzQ4NDM1NTQsXG4gICAgICogICAgIFwibG9nU2FtcGxlXCI6IFwiMjAxOS0xMS0yNyAxMDo0ODoyMywxNjAsLCxNQUlOLCwsSU5GTywsLDk4RENDNTFELUJFNUQtNDlDNy1CM0ZELTM3QjJCQUVGQjI5NiwsLDEyMzQ1Njc4OSwsLGNuLWhhbmd6aG91LCwsdGhpcyBpcyBhIHNpbXBsZSB0ZXN0LlwiLFxuICAgICAqICAgICBcIm91dHB1dERldGFpbFwiOiB7XG4gICAgICogICAgICAgICBcImVuZHBvaW50XCI6IFwiY24taGFuZ3pob3UtaW50cmFuZXQubG9nLmFsaXl1bmNzLmNvbVwiLFxuICAgICAqICAgICAgICAgXCJsb2dzdG9yZU5hbWVcIjogXCJ0ZXN0LWxvZ3N0b3JlXCIsXG4gICAgICogICAgICAgICBcInJlZ2lvblwiOiBcImNuLWhhbmd6aG91XCJcbiAgICAgKiAgICAgfSxcbiAgICAgKiAgICAgXCJvdXRwdXRUeXBlXCI6IFwiTG9nU2VydmljZVwiXG4gICAgICogfVxuICAgICAqL1xuICAgIHB1YmxpYyByYXdDb25maWdEYXRhOiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xTOjpMb2d0YWlsQ29uZmlnYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NMb2d0YWlsQ29uZmlnUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NMb2d0YWlsQ29uZmlnLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBcHBsaWVkTWFjaGluZUdyb3VwcyA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnQXBwbGllZE1hY2hpbmVHcm91cHMnKSk7XG4gICAgICAgIHRoaXMuYXR0ckVuZHBvaW50ID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdFbmRwb2ludCcpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMubG9nc3RvcmVOYW1lID0gcHJvcHMubG9nc3RvcmVOYW1lO1xuICAgICAgICB0aGlzLmxvZ3RhaWxDb25maWdOYW1lID0gcHJvcHMubG9ndGFpbENvbmZpZ05hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9wcy5wcm9qZWN0TmFtZTtcbiAgICAgICAgdGhpcy5jbG9uZUZyb20gPSBwcm9wcy5jbG9uZUZyb207XG4gICAgICAgIHRoaXMucmF3Q29uZmlnRGF0YSA9IHByb3BzLnJhd0NvbmZpZ0RhdGE7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9nc3RvcmVOYW1lOiB0aGlzLmxvZ3N0b3JlTmFtZSxcbiAgICAgICAgICAgIGxvZ3RhaWxDb25maWdOYW1lOiB0aGlzLmxvZ3RhaWxDb25maWdOYW1lLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6IHRoaXMucHJvamVjdE5hbWUsXG4gICAgICAgICAgICBjbG9uZUZyb206IHRoaXMuY2xvbmVGcm9tLFxuICAgICAgICAgICAgcmF3Q29uZmlnRGF0YTogdGhpcy5yYXdDb25maWdEYXRhLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NMb2d0YWlsQ29uZmlnUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zTG9ndGFpbENvbmZpZyB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2xvbmVGcm9tUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGxvZ3RhaWxDb25maWdOYW1lOiBMb2d0YWlsIGNvbmZpZyBuYW1lOlxuICAgICAqIDEuIE9ubHkgc3VwcG9ydHMgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGh5cGhlbnMgKC0pIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogMi4gTXVzdCBzdGFydCBhbmQgZW5kIHdpdGggbG93ZXJjYXNlIGxldHRlcnMgYW5kIG51bWJlcnMuXG4gICAgICogMy4gVGhlIG5hbWUgbGVuZ3RoIGlzIDMtNjMgY2hhcmFjdGVycy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvZ3RhaWxDb25maWdOYW1lOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJvamVjdE5hbWU6IFByb2plY3QgbmFtZTpcbiAgICAgKiAxLiBPbmx5IHN1cHBvcnRzIGxvd2VyY2FzZSBsZXR0ZXJzLCBudW1iZXJzLCBoeXBoZW5zICgtKSBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqIDIuIE11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoIGxvd2VyY2FzZSBsZXR0ZXJzIGFuZCBudW1iZXJzLlxuICAgICAqIDMuIFRoZSBuYW1lIGxlbmd0aCBpcyAzLTYzIGNoYXJhY3RlcnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcm9qZWN0TmFtZTogc3RyaW5nO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ2xvbmVGcm9tUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENsb25lRnJvbVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0xvZ3RhaWxDb25maWdfQ2xvbmVGcm9tUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2d0YWlsQ29uZmlnTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5sb2d0YWlsQ29uZmlnTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMubG9ndGFpbENvbmZpZ05hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5sb2d0YWlsQ29uZmlnTmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmxvZ3RhaWxDb25maWdOYW1lKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9ndGFpbENvbmZpZ05hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubG9ndGFpbENvbmZpZ05hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAzLFxuICAgICAgICAgICAgbWF4OiA2MyxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9ndGFpbENvbmZpZ05hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9ndGFpbENvbmZpZ05hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3ROYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5wcm9qZWN0TmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMucHJvamVjdE5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0TmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcm9qZWN0TmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDMsXG4gICAgICAgICAgICBtYXg6IDYzLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm9qZWN0TmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDbG9uZUZyb21Qcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xTOjpMb2d0YWlsQ29uZmlnLkNsb25lRnJvbWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ2xvbmVGcm9tUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6TG9ndGFpbENvbmZpZy5DbG9uZUZyb21gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTG9ndGFpbENvbmZpZ0Nsb25lRnJvbVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NMb2d0YWlsQ29uZmlnX0Nsb25lRnJvbVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgTG9ndGFpbENvbmZpZ05hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9ndGFpbENvbmZpZ05hbWUpLFxuICAgICAgUHJvamVjdE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvamVjdE5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTTFM6Ok1hY2hpbmVHcm91cGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NNYWNoaW5lR3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBBdHRyaWJ1dGU6IEdyb3VwIGF0dHJpYnV0ZSwgZGVmYXVsdCBpcyBudWxsLiBUaGUgb2JqZWN0IHZhbHVlIGlzIGdyb3VwVG9pYyBhbmQgZXh0ZXJuYWxOYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBBdHRyaWJ1dGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBEaXNwbGF5IG5hbWUgb2YgdGhlIGdyb3VwIG5hbWUsIHRoZSBQcm9qZWN0IG9ubHkuIFsyLCAxMjhdIEVuZ2xpc2ggb3IgQ2hpbmVzZSBjaGFyYWN0ZXJzLCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIgb3IgQ2hpbmVzZSBpbiBzaXplLCBjYW4gY29udGFpbiBudW1iZXJzLCAnXycgb3IgJy4nLCAnLSdcbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cE5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBUeXBlOiBNYWNoaW5lR3JvdXAgdHlwZSwgdGhlIHZhbHVlIGlzIGVtcHR5IG9yIEFybW9yeVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwVHlwZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYWNoaW5lSWRlbnRpZnlUeXBlOiBNYWNoaW5lIGluZGVudGlmeSB0eXBlLCB0aGUgdmFsdWUgaXMgJ2lwJyBvciAndXNlcmRlZmluZWQnXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFjaGluZUlkZW50aWZ5VHlwZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYWNoaW5lTGlzdDogVGhlIG1hY2hpbmUgdGFnLCB0aGUgdmFsdWUgaXMgaXAgb3IgdXNlcmRlZmluZWQtaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWFjaGluZUxpc3Q/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3ROYW1lOiBNYWNoaW5lR3JvdXAgY3JlYXRlZCBpbiBwcm9qZWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2plY3ROYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc01hY2hpbmVHcm91cFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNYWNoaW5lR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNYWNoaW5lR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21hY2hpbmVMaXN0Jywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5tYWNoaW5lTGlzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuZ3JvdXBUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5ncm91cFR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmdyb3VwVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJcIixcIkFybW9yeVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ncm91cFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3ROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb2plY3ROYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5tYWNoaW5lSWRlbnRpZnlUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5tYWNoaW5lSWRlbnRpZnlUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYWNoaW5lSWRlbnRpZnlUeXBlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubWFjaGluZUlkZW50aWZ5VHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJpcFwiLFwidXNlcmRlZmluZWRcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYWNoaW5lSWRlbnRpZnlUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1hY2hpbmVJZGVudGlmeVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwQXR0cmlidXRlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwQXR0cmlidXRlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc01hY2hpbmVHcm91cFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTFM6Ok1hY2hpbmVHcm91cGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTWFjaGluZUdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6TWFjaGluZUdyb3VwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc01hY2hpbmVHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zTWFjaGluZUdyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgR3JvdXBBdHRyaWJ1dGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBBdHRyaWJ1dGUpLFxuICAgICAgR3JvdXBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwTmFtZSksXG4gICAgICBHcm91cFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBUeXBlKSxcbiAgICAgIE1hY2hpbmVJZGVudGlmeVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWFjaGluZUlkZW50aWZ5VHlwZSksXG4gICAgICBNYWNoaW5lTGlzdDogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubWFjaGluZUxpc3QpLFxuICAgICAgUHJvamVjdE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvamVjdE5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlNMUzo6TWFjaGluZUdyb3VwYFxuICovXG5leHBvcnQgY2xhc3MgUm9zTWFjaGluZUdyb3VwIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpTTFM6Ok1hY2hpbmVHcm91cFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEdyb3VwTmFtZTogR3JvdXBOYW1lIG9mIFNMUy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckdyb3VwTmFtZTogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQcm9qZWN0TmFtZTogUHJvamVjdE5hbWUgb2YgU0xTLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJvamVjdE5hbWU6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwQXR0cmlidXRlOiBHcm91cCBhdHRyaWJ1dGUsIGRlZmF1bHQgaXMgbnVsbC4gVGhlIG9iamVjdCB2YWx1ZSBpcyBncm91cFRvaWMgYW5kIGV4dGVybmFsTmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cEF0dHJpYnV0ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogRGlzcGxheSBuYW1lIG9mIHRoZSBncm91cCBuYW1lLCB0aGUgUHJvamVjdCBvbmx5LiBbMiwgMTI4XSBFbmdsaXNoIG9yIENoaW5lc2UgY2hhcmFjdGVycywgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UgaW4gc2l6ZSwgY2FuIGNvbnRhaW4gbnVtYmVycywgJ18nIG9yICcuJywgJy0nXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwVHlwZTogTWFjaGluZUdyb3VwIHR5cGUsIHRoZSB2YWx1ZSBpcyBlbXB0eSBvciBBcm1vcnlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWFjaGluZUlkZW50aWZ5VHlwZTogTWFjaGluZSBpbmRlbnRpZnkgdHlwZSwgdGhlIHZhbHVlIGlzICdpcCcgb3IgJ3VzZXJkZWZpbmVkJ1xuICAgICAqL1xuICAgIHB1YmxpYyBtYWNoaW5lSWRlbnRpZnlUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWFjaGluZUxpc3Q6IFRoZSBtYWNoaW5lIHRhZywgdGhlIHZhbHVlIGlzIGlwIG9yIHVzZXJkZWZpbmVkLWlkLlxuICAgICAqL1xuICAgIHB1YmxpYyBtYWNoaW5lTGlzdDogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9qZWN0TmFtZTogTWFjaGluZUdyb3VwIGNyZWF0ZWQgaW4gcHJvamVjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJvamVjdE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTTFM6Ok1hY2hpbmVHcm91cGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTWFjaGluZUdyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NNYWNoaW5lR3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwTmFtZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnR3JvdXBOYW1lJykpO1xuICAgICAgICB0aGlzLmF0dHJQcm9qZWN0TmFtZSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnUHJvamVjdE5hbWUnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmdyb3VwQXR0cmlidXRlID0gcHJvcHMuZ3JvdXBBdHRyaWJ1dGU7XG4gICAgICAgIHRoaXMuZ3JvdXBOYW1lID0gcHJvcHMuZ3JvdXBOYW1lO1xuICAgICAgICB0aGlzLmdyb3VwVHlwZSA9IHByb3BzLmdyb3VwVHlwZTtcbiAgICAgICAgdGhpcy5tYWNoaW5lSWRlbnRpZnlUeXBlID0gcHJvcHMubWFjaGluZUlkZW50aWZ5VHlwZTtcbiAgICAgICAgdGhpcy5tYWNoaW5lTGlzdCA9IHByb3BzLm1hY2hpbmVMaXN0O1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvcHMucHJvamVjdE5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3JvdXBBdHRyaWJ1dGU6IHRoaXMuZ3JvdXBBdHRyaWJ1dGUsXG4gICAgICAgICAgICBncm91cE5hbWU6IHRoaXMuZ3JvdXBOYW1lLFxuICAgICAgICAgICAgZ3JvdXBUeXBlOiB0aGlzLmdyb3VwVHlwZSxcbiAgICAgICAgICAgIG1hY2hpbmVJZGVudGlmeVR5cGU6IHRoaXMubWFjaGluZUlkZW50aWZ5VHlwZSxcbiAgICAgICAgICAgIG1hY2hpbmVMaXN0OiB0aGlzLm1hY2hpbmVMaXN0LFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6IHRoaXMucHJvamVjdE5hbWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc01hY2hpbmVHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0xTOjpQcm9qZWN0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1Byb2plY3RQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogUHJvamVjdCBuYW1lOlxuICAgICAqIDEuIE9ubHkgc3VwcG9ydHMgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGh5cGhlbnMgKC0pIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogMi4gTXVzdCBzdGFydCBhbmQgZW5kIHdpdGggbG93ZXJjYXNlIGxldHRlcnMgYW5kIG51bWJlcnMuXG4gICAgICogMy4gVGhlIG5hbWUgbGVuZ3RoIGlzIDMtNjMgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFByb2plY3QgZGVzY3JpcHRpb246IDw+J1wiXFwgaXMgbm90IHN1cHBvcnRlZCwgdXAgdG8gNjQgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NQcm9qZWN0UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1Byb2plY3RQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NQcm9qZWN0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNjQsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm5hbWUgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5uYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMubmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDMsXG4gICAgICAgICAgICBtYXg6IDYzLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYocHJvcGVydGllcy5uYW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5uYW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlQWxsb3dlZFBhdHRlcm4pKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm5hbWUsXG4gICAgICAgICAgcmVnOiAvXlthLXpBLVowLTlfLV0rJC9cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NQcm9qZWN0UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6UHJvamVjdGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUHJvamVjdFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTFM6OlByb2plY3RgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUHJvamVjdFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUHJvamVjdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6U0xTOjpQcm9qZWN0YFxuICovXG5leHBvcnQgY2xhc3MgUm9zUHJvamVjdCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6U0xTOjpQcm9qZWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmFtZTogUHJvamVjdCBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmFtZTogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogUHJvamVjdCBuYW1lOlxuICAgICAqIDEuIE9ubHkgc3VwcG9ydHMgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGh5cGhlbnMgKC0pIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogMi4gTXVzdCBzdGFydCBhbmQgZW5kIHdpdGggbG93ZXJjYXNlIGxldHRlcnMgYW5kIG51bWJlcnMuXG4gICAgICogMy4gVGhlIG5hbWUgbGVuZ3RoIGlzIDMtNjMgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBQcm9qZWN0IGRlc2NyaXB0aW9uOiA8PidcIlxcIGlzIG5vdCBzdXBwb3J0ZWQsIHVwIHRvIDY0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xTOjpQcm9qZWN0YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NQcm9qZWN0UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NQcm9qZWN0LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJOYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdOYW1lJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NQcm9qZWN0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTTFM6OlNhdmVkc2VhcmNoYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NhdmVkc2VhcmNoUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRldGFpbDpcbiAgICAgKi9cbiAgICByZWFkb25seSBkZXRhaWw6IFJvc1NhdmVkc2VhcmNoLkRldGFpbFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3Q6IFByb2plY3QgbmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2plY3Q6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTYXZlZHNlYXJjaFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTYXZlZHNlYXJjaFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NhdmVkc2VhcmNoUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9qZWN0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnByb2plY3QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvamVjdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGV0YWlsJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRldGFpbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGV0YWlsJywgUm9zU2F2ZWRzZWFyY2hfRGV0YWlsUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGV0YWlsKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NhdmVkc2VhcmNoUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6U2F2ZWRzZWFyY2hgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NhdmVkc2VhcmNoUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNMUzo6U2F2ZWRzZWFyY2hgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2F2ZWRzZWFyY2hQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NhdmVkc2VhcmNoUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRGV0YWlsOiByb3NTYXZlZHNlYXJjaERldGFpbFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRldGFpbCksXG4gICAgICBQcm9qZWN0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb2plY3QpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlNMUzo6U2F2ZWRzZWFyY2hgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NTYXZlZHNlYXJjaCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6U0xTOjpTYXZlZHNlYXJjaFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNhdmVkc2VhcmNoTmFtZTogU2F2ZWRzZWFyY2ggbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNhdmVkc2VhcmNoTmFtZTogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGV0YWlsOlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXRhaWw6IFJvc1NhdmVkc2VhcmNoLkRldGFpbFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2plY3Q6IFByb2plY3QgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBwcm9qZWN0OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0xTOjpTYXZlZHNlYXJjaGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU2F2ZWRzZWFyY2hQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1NhdmVkc2VhcmNoLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJTYXZlZHNlYXJjaE5hbWUgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ1NhdmVkc2VhcmNoTmFtZScpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZGV0YWlsID0gcHJvcHMuZGV0YWlsO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9wcy5wcm9qZWN0O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRldGFpbDogdGhpcy5kZXRhaWwsXG4gICAgICAgICAgICBwcm9qZWN0OiB0aGlzLnByb2plY3QsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1NhdmVkc2VhcmNoUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zU2F2ZWRzZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIERldGFpbFByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzZWFyY2hRdWVyeTogQ2hlY2sgc2VudGVuY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGxvZ3N0b3JlOiBMb2dzdG9yZSBuYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbG9nc3RvcmU6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkaXNwbGF5TmFtZTogRGlzcGxheSBuYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2F2ZWRzZWFyY2hOYW1lOiBTYXZlZHNlYXJjaCBuYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2F2ZWRzZWFyY2hOYW1lOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdG9waWM6IFRvcGljIG5hbWVcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRvcGljOiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBEZXRhaWxQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRGV0YWlsUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2F2ZWRzZWFyY2hfRGV0YWlsUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZWFyY2hRdWVyeScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZWFyY2hRdWVyeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VhcmNoUXVlcnknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VhcmNoUXVlcnkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xvZ3N0b3JlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmxvZ3N0b3JlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dzdG9yZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dzdG9yZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlzcGxheU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGlzcGxheU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NhdmVkc2VhcmNoTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zYXZlZHNlYXJjaE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NhdmVkc2VhcmNoTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zYXZlZHNlYXJjaE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RvcGljJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRvcGljKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0b3BpYycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50b3BpYykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJEZXRhaWxQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0xTOjpTYXZlZHNlYXJjaC5EZXRhaWxgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERldGFpbFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTTFM6OlNhdmVkc2VhcmNoLkRldGFpbGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTYXZlZHNlYXJjaERldGFpbFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTYXZlZHNlYXJjaF9EZXRhaWxQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFNlYXJjaFF1ZXJ5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlYXJjaFF1ZXJ5KSxcbiAgICAgIExvZ3N0b3JlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvZ3N0b3JlKSxcbiAgICAgIERpc3BsYXlOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lKSxcbiAgICAgIFNhdmVkc2VhcmNoTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zYXZlZHNlYXJjaE5hbWUpLFxuICAgICAgVG9waWM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudG9waWMpLFxuICAgIH07XG59XG4iXX0=