// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::SLS::Alert`
 */
export interface RosAlertProps {

    /**
     * @Property detail:
     */
    readonly detail: RosAlert.DetailProperty | ros.IResolvable;

    /**
     * @Property project: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly project: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAlertProps`
 *
 * @param properties - the TypeScript properties of a `RosAlertProps`
 *
 * @returns the result of the validation.
 */
function RosAlertPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    if(properties.project && (Array.isArray(properties.project) || (typeof properties.project) === 'string')) {
        errors.collect(ros.propertyValidator('project', ros.validateLength)({
            data: properties.project.length,
            min: 3,
            max: 63,
          }));
    }
    if(properties.project && (typeof properties.project) !== 'object') {
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
function rosAlertPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosAlert extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Alert";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Name: Alert name.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property detail:
     */
    public detail: RosAlert.DetailProperty | ros.IResolvable;

    /**
     * @Property project: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public project: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::SLS::Alert`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlertProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAlert.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.detail = props.detail;
        this.project = props.project;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            detail: this.detail,
            project: this.project,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAlertPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAlert {
    /**
     * @stability external
     */
    export interface ConfigurationProperty {
        /**
         * @Property throttling: Notification interval, default is no interval.
         */
        readonly throttling: string | ros.IResolvable;
        /**
         * @Property condition: he condition that is required to trigger an alert. 
     * Log Service triggers an alert if the trigger condition is met. 
     * For example, you can set the trigger condition to pv%100 > 0 && uv > 0.
         */
        readonly condition: string | ros.IResolvable;
        /**
         * @Property notificationList:
         */
        readonly notificationList?: Array<RosAlert.NotificationListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property notifyThreshold: The notification threshold, 
     * which will not be notified until the number of triggers is reached.
         */
        readonly notifyThreshold?: number | ros.IResolvable;
        /**
         * @Property dashboard: Alarm associated dashboard.
         */
        readonly dashboard: string | ros.IResolvable;
        /**
         * @Property queryList:
         */
        readonly queryList: Array<RosAlert.QueryListProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_ConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosAlertConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
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

export namespace RosAlert {
    /**
     * @stability external
     */
    export interface DetailProperty {
        /**
         * @Property type:
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property description: Description of the alert.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property configuration:
         */
        readonly configuration: RosAlert.ConfigurationProperty | ros.IResolvable;
        /**
         * @Property state:
         */
        readonly state?: string | ros.IResolvable;
        /**
         * @Property schedule: The interval at which Log Service evaluates the alert rule. 
     * Note During an alert rule evaluation, if a query returns more than 100 log entries, 
     *  Log Service checks only the first 100 log entries.
         */
        readonly schedule: RosAlert.ScheduleProperty | ros.IResolvable;
        /**
         * @Property displayName: Alert name display in console. The name length is 1-64 characters.
         */
        readonly displayName: string | ros.IResolvable;
        /**
         * @Property name: Alert name.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DetailProperty`
 *
 * @param properties - the TypeScript properties of a `DetailProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_DetailPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('configuration', ros.requiredValidator)(properties.configuration));
    errors.collect(ros.propertyValidator('configuration', RosAlert_ConfigurationPropertyValidator)(properties.configuration));
    errors.collect(ros.propertyValidator('state', ros.validateString)(properties.state));
    errors.collect(ros.propertyValidator('schedule', ros.requiredValidator)(properties.schedule));
    errors.collect(ros.propertyValidator('schedule', RosAlert_SchedulePropertyValidator)(properties.schedule));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    if(properties.displayName && (Array.isArray(properties.displayName) || (typeof properties.displayName) === 'string')) {
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
function rosAlertDetailPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
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

export namespace RosAlert {
    /**
     * @stability external
     */
    export interface NotificationListProperty {
        /**
         * @Property type: This topic describes how to configure a notification method. 
     * Log Service can send alert notifications by using one or more methods. 
     * Available notification methods include emails, DingTalk chatbot webhooks, 
     * custom webhooks, and Alibaba Cloud Message Center.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property mobileList:
         */
        readonly mobileList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property serviceUri: The webhook URL of the DingTalk chatbot.
         */
        readonly serviceUri?: string | ros.IResolvable;
        /**
         * @Property content: The content of an alert notification
         */
        readonly content?: string | ros.IResolvable;
        /**
         * @Property emailList:
         */
        readonly emailList?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NotificationListProperty`
 *
 * @param properties - the TypeScript properties of a `NotificationListProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_NotificationListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosAlertNotificationListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAlert_NotificationListPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      MobileList: ros.listMapper(ros.objectToRosTemplate)(properties.mobileList),
      ServiceUri: ros.stringToRosTemplate(properties.serviceUri),
      Content: ros.stringToRosTemplate(properties.content),
      EmailList: ros.listMapper(ros.objectToRosTemplate)(properties.emailList),
    };
}

export namespace RosAlert {
    /**
     * @stability external
     */
    export interface QueryListProperty {
        /**
         * @Property query:
         */
        readonly query: string | ros.IResolvable;
        /**
         * @Property logStore:
         */
        readonly logStore: string | ros.IResolvable;
        /**
         * @Property start:
         */
        readonly start: string | ros.IResolvable;
        /**
         * @Property timeSpanType:
         */
        readonly timeSpanType: string | ros.IResolvable;
        /**
         * @Property end:
         */
        readonly end: string | ros.IResolvable;
        /**
         * @Property chartTitle:
         */
        readonly chartTitle: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `QueryListProperty`
 *
 * @param properties - the TypeScript properties of a `QueryListProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_QueryListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosAlertQueryListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
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

export namespace RosAlert {
    /**
     * @stability external
     */
    export interface ScheduleProperty {
        /**
         * @Property dayOfWeek:
         */
        readonly dayOfWeek?: number | ros.IResolvable;
        /**
         * @Property type:
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property runImmediately:
         */
        readonly runImmediately?: boolean | ros.IResolvable;
        /**
         * @Property hour:
         */
        readonly hour?: number | ros.IResolvable;
        /**
         * @Property cronExpression:
         */
        readonly cronExpression?: string | ros.IResolvable;
        /**
         * @Property delay:
         */
        readonly delay?: number | ros.IResolvable;
        /**
         * @Property interval: Execution interval
         */
        readonly interval?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ScheduleProperty`
 *
 * @param properties - the TypeScript properties of a `ScheduleProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_SchedulePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosAlertSchedulePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
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
 * Properties for defining a `ALIYUN::SLS::ApplyConfigToMachineGroup`
 */
export interface RosApplyConfigToMachineGroupProps {

    /**
     * @Property configName: Apply config to the config name
     */
    readonly configName?: string | ros.IResolvable;

    /**
     * @Property groupName: Apply config to the group name
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * @Property projectName: Apply config to the project name.
     */
    readonly projectName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApplyConfigToMachineGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosApplyConfigToMachineGroupProps`
 *
 * @returns the result of the validation.
 */
function RosApplyConfigToMachineGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosApplyConfigToMachineGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosApplyConfigToMachineGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::ApplyConfigToMachineGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property configName: Apply config to the config name
     */
    public configName: string | ros.IResolvable | undefined;

    /**
     * @Property groupName: Apply config to the group name
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property projectName: Apply config to the project name.
     */
    public projectName: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLS::ApplyConfigToMachineGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplyConfigToMachineGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplyConfigToMachineGroup.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.configName = props.configName;
        this.groupName = props.groupName;
        this.projectName = props.projectName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            configName: this.configName,
            groupName: this.groupName,
            projectName: this.projectName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplyConfigToMachineGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::SLS::Audit`
 */
export interface RosAuditProps {

    /**
     * @Property displayName: Name of SLS log audit.
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * @Property variableMap: Log audit detailed configuration.
     */
    readonly variableMap: RosAudit.VariableMapProperty | ros.IResolvable;

    /**
     * @Property multiAccount: Multi-account configuration, please fill in multiple aliuid.
     */
    readonly multiAccount?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAuditProps`
 *
 * @param properties - the TypeScript properties of a `RosAuditProps`
 *
 * @returns the result of the validation.
 */
function RosAuditPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('variableMap', ros.requiredValidator)(properties.variableMap));
    errors.collect(ros.propertyValidator('variableMap', RosAudit_VariableMapPropertyValidator)(properties.variableMap));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    if(properties.displayName && (Array.isArray(properties.displayName) || (typeof properties.displayName) === 'string')) {
        errors.collect(ros.propertyValidator('displayName', ros.validateLength)({
            data: properties.displayName.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    if(properties.multiAccount && (Array.isArray(properties.multiAccount) || (typeof properties.multiAccount) === 'string')) {
        errors.collect(ros.propertyValidator('multiAccount', ros.validateLength)({
            data: properties.multiAccount.length,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('multiAccount', ros.listValidator(ros.validateString))(properties.multiAccount));
    return errors.wrap('supplied properties not correct for "RosAuditProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Audit` resource
 *
 * @param properties - the TypeScript properties of a `RosAuditProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Audit` resource.
 */
// @ts-ignore TS6133
function rosAuditPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAuditPropsValidator(properties).assertSuccess();
    }
    return {
      DisplayName: ros.stringToRosTemplate(properties.displayName),
      VariableMap: rosAuditVariableMapPropertyToRosTemplate(properties.variableMap),
      MultiAccount: ros.listMapper(ros.stringToRosTemplate)(properties.multiAccount),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLS::Audit`
 */
export class RosAudit extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Audit";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DisplayName: Name of SLS log audit.
     */
    public readonly attrDisplayName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property displayName: Name of SLS log audit.
     */
    public displayName: string | ros.IResolvable;

    /**
     * @Property variableMap: Log audit detailed configuration.
     */
    public variableMap: RosAudit.VariableMapProperty | ros.IResolvable;

    /**
     * @Property multiAccount: Multi-account configuration, please fill in multiple aliuid.
     */
    public multiAccount: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLS::Audit`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAuditProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAudit.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDisplayName = this.getAtt('DisplayName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.displayName = props.displayName;
        this.variableMap = props.variableMap;
        this.multiAccount = props.multiAccount;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            displayName: this.displayName,
            variableMap: this.variableMap,
            multiAccount: this.multiAccount,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAuditPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAudit {
    /**
     * @stability external
     */
    export interface VariableMapProperty {
        /**
         * @Property polardbPerfPolicySetting: POLARDB perf policy setting.
         */
        readonly polardbPerfPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property wafEnabled: Waf log switch. Default true.
         */
        readonly wafEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsPerfEnabled: RDS perf log switch. Default false.
         */
        readonly rdsPerfEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cpsCallbackCollectionPolicy: Mobile push collection policy
         */
        readonly cpsCallbackCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property redisAuditTiEnabled: Threat Intelligence of Redis audit.
         */
        readonly redisAuditTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsPerfTiEnabled: Threat Intelligence of rds perf log.
         */
        readonly rdsPerfTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsSlowPolicySetting: Rds slow policy setting.
         */
        readonly rdsSlowPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property k8SIngressTtl: K8s Ingress log centralization ttl. Default 180.
         */
        readonly k8SIngressTtl?: number | ros.IResolvable;
        /**
         * @Property ossSyncEnabled: OSS synchronization to central configuration switch. Default true.
         */
        readonly ossSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsAuditCollectionPolicy: Rds audit collection policy
         */
        readonly rdsAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property bastionAuditCollectionPolicy: Bastion audit collection policy
         */
        readonly bastionAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property bastionEnabled: Fortress machine operation log switch.Default true.
         */
        readonly bastionEnabled?: boolean | ros.IResolvable;
        /**
         * @Property redisSyncTtl: Redis sync to center switch. Default 180.
         */
        readonly redisSyncTtl?: number | ros.IResolvable;
        /**
         * @Property rdsEnabled: RDS audit log switch. Default true.
         */
        readonly rdsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasSessionEnabled: Cloud security center network session log switch.Default false.
         */
        readonly sasSessionEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsAuditPolicySetting: Rds audit policy setting.
         */
        readonly rdsAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ddosCooAccessTtl: Ddos log centralization ttl. Default 180.
         */
        readonly ddosCooAccessTtl?: number | ros.IResolvable;
        /**
         * @Property bastionTtl: Fort machine centralized ttl. Default 180.
         */
        readonly bastionTtl?: number | ros.IResolvable;
        /**
         * @Property rdsSlowEnabled: RDS slow log switch. Default false.
         */
        readonly rdsSlowEnabled?: boolean | ros.IResolvable;
        /**
         * @Property wafAccessCollectionPolicy: Waf audit collection policy
         */
        readonly wafAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property k8SAuditTtl: K8s log centralization ttl. Default 180.
         */
        readonly k8SAuditTtl?: number | ros.IResolvable;
        /**
         * @Property polardbTtl: POLARDB log centralization ttl. Default 180.
         */
        readonly polardbTtl?: number | ros.IResolvable;
        /**
         * @Property drdsAuditCollectionPolicy: DRDS audit collection policy
         */
        readonly drdsAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property slbAccessCollectionPolicy: SLB audit collection policy
         */
        readonly slbAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property sasSnapshotPortEnabled: Cloud Security Center Port Snapshot Switch. Default false.
         */
        readonly sasSnapshotPortEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsSlowTtl: Rds slow log centralization ttl. Default 180.
         */
        readonly rdsSlowTtl?: number | ros.IResolvable;
        /**
         * @Property polardbEnabled: POLARDB audit log switch. Default true.
         */
        readonly polardbEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasSnapshotProcessEnabled: Cloud Security Center process snapshot switch. Default false.
         */
        readonly sasSnapshotProcessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property actiontrailTiEnabled: Threat Intelligence of actiontrail.
         */
        readonly actiontrailTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property nasTiEnabled: Threat Intelligence of Nas.
         */
        readonly nasTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property appconnectTiEnabled: Threat Intelligence of Appconnect.
         */
        readonly appconnectTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cpsTtl: Mobile push ttl. Default 180.
         */
        readonly cpsTtl?: number | ros.IResolvable;
        /**
         * @Property slbSyncTtl: Slb sync to center switch. Default 180.
         */
        readonly slbSyncTtl?: number | ros.IResolvable;
        /**
         * @Property cloudfirewallAccessCollectionPolicy: Cloud firewall audit collection policy
         */
        readonly cloudfirewallAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property ddosCooAccessEnabled: Ddos access log switch. Default false.
         */
        readonly ddosCooAccessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SIngressTiEnabled: Threat Intelligence of k8s Ingress.
         */
        readonly k8SIngressTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property drdsAuditTiEnabled: Threat Intelligence of DRDS.
         */
        readonly drdsAuditTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasSecurityVulEnabled: Cloud Security Center Vulnerability Log Switch.Default false.
         */
        readonly sasSecurityVulEnabled?: boolean | ros.IResolvable;
        /**
         * @Property polardbSlowPolicySetting: POLARDB slow policy setting.
         */
        readonly polardbSlowPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property k8SIngressCollectionPolicy: K8s Ingress collection policy
         */
        readonly k8SIngressCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property apigatewayTtl: API Gateway ttl. Default 180.
         */
        readonly apigatewayTtl?: number | ros.IResolvable;
        /**
         * @Property cpsEnabled: Mobile push log switch. Default true.
         */
        readonly cpsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsSlowCollectionPolicy: Rds slow collection policy.
         */
        readonly rdsSlowCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property actiontrailOpenapiCollectionPolicy: Actiontrail openapi collection policy
         */
        readonly actiontrailOpenapiCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property rdsPerfPolicySetting: Rds perf policy setting.
         */
        readonly rdsPerfPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property cloudfirewallAccessPolicySetting: Cloud firewall audit policy setting.
         */
        readonly cloudfirewallAccessPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ossAccessEnabled: Access log switch of OSS. Default true.
         */
        readonly ossAccessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cpsCallbackPolicySetting: Mobile push policy setting.
         */
        readonly cpsCallbackPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property slbAccessTtl: Slb centralized ttl. Default 7.
         */
        readonly slbAccessTtl?: number | ros.IResolvable;
        /**
         * @Property wafAccessPolicySetting: Waf audit policy setting.
         */
        readonly wafAccessPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property polardbPerfTiEnabled: Threat Intelligence of POLARDB perf log.
         */
        readonly polardbPerfTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasLocalDnsEnabled: Cloud security center local DNS log switch. Default false.
         */
        readonly sasLocalDnsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ossAccessTtl: Access log TTL of OSS. Default 180.
         */
        readonly ossAccessTtl?: number | ros.IResolvable;
        /**
         * @Property ossMeteringPolicySetting: Oss metering policy setting.
         */
        readonly ossMeteringPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sasHttpEnabled: Cloud Security Center WEB access log switch. Default false.
         */
        readonly sasHttpEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ossMeteringEnabled: OSS metering log switch.Default true.
         */
        readonly ossMeteringEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudfirewallEnabled: Cloud firewall log switch. Default true.
         */
        readonly cloudfirewallEnabled?: boolean | ros.IResolvable;
        /**
         * @Property slbAccessTiEnabled: Threat Intelligence of SLB.
         */
        readonly slbAccessTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property drdsSyncTtl: DRDS sync to center ttl. Default 180.
         */
        readonly drdsSyncTtl?: number | ros.IResolvable;
        /**
         * @Property k8SEventPolicySetting: K8s event policy setting.
         */
        readonly k8SEventPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property nasTtl: Nas centralized ttl. Default 180.
         */
        readonly nasTtl?: number | ros.IResolvable;
        /**
         * @Property sasLoginEnabled: Cloud security center login flow log switch. Default false.
         */
        readonly sasLoginEnabled?: boolean | ros.IResolvable;
        /**
         * @Property wafTtl: Waf centralized ttl. Default true.
         */
        readonly wafTtl?: number | ros.IResolvable;
        /**
         * @Property nasAuditPolicySetting: Nas audit policy setting.
         */
        readonly nasAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property rdsTtl: Rds log centralization ttl. Default 180.
         */
        readonly rdsTtl?: number | ros.IResolvable;
        /**
         * @Property k8SIngressEnabled: K8s Ingress log switch. Default false.
         */
        readonly k8SIngressEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudfirewallTiEnabled: Threat Intelligence of Cloud firewall.
         */
        readonly cloudfirewallTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SEventCollectionPolicy: K8s event collection policy
         */
        readonly k8SEventCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property actiontrailEnabled: Notification type. Support Email, SMS, DingTalk. Default true.
         */
        readonly actiontrailEnabled?: boolean | ros.IResolvable;
        /**
         * @Property drdsSyncEnabled: DRDS sync to center switch. Default true.
         */
        readonly drdsSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property apigatewayEnabled: API Gateway Log Switch. Default true.
         */
        readonly apigatewayEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasCrackEnabled: Cloud Security Center Brute Force Log Switch. Default false.
         */
        readonly sasCrackEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cpsTiEnabled: Threat Intelligence of mobile push.
         */
        readonly cpsTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SEventEnabled: K8s event log switch. Default false.
         */
        readonly k8SEventEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ossSyncTtl: OSS synchronization to central TTL. Default 180.
         */
        readonly ossSyncTtl?: number | ros.IResolvable;
        /**
         * @Property rdsPerfTtl: Rds perf log centralization ttl. Default 180.
         */
        readonly rdsPerfTtl?: number | ros.IResolvable;
        /**
         * @Property sasSnapshotAccountEnabled: Cloud Security Center account snapshot switch. Default false.
         */
        readonly sasSnapshotAccountEnabled?: boolean | ros.IResolvable;
        /**
         * @Property slbSyncEnabled: Slb sync to center switch. Default true.
         */
        readonly slbSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property bastionTiEnabled: Threat Intelligence of Bastion.
         */
        readonly bastionTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ossAccessPolicySetting: Oss access policy setting.
         */
        readonly ossAccessPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sasTiEnabled: Threat Intelligence of Cloud Security Center.
         */
        readonly sasTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property drdsAuditTtl: DRDS log centralization ttl. Default 7.
         */
        readonly drdsAuditTtl?: number | ros.IResolvable;
        /**
         * @Property redisAuditCollectionPolicy: Redis audit collection policy
         */
        readonly redisAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property polardbPerfEnabled: POLARDB perf log switch. Default false.
         */
        readonly polardbPerfEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ddosCooAccessCollectionPolicy: Ddos audit collection policy
         */
        readonly ddosCooAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property k8SAuditEnabled: K8s access log switch. Default false.
         */
        readonly k8SAuditEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ossMeteringTiEnabled: Threat Intelligence of oss metering.
         */
        readonly ossMeteringTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property polardbPerfTtl: POLARDB perf log centralization ttl. Default 180.
         */
        readonly polardbPerfTtl?: number | ros.IResolvable;
        /**
         * @Property apigatewayAccessPolicySetting: Apigateway audit policy setting.
         */
        readonly apigatewayAccessPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property nasEnabled: Nas log switch. Default true.
         */
        readonly nasEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasDnsEnabled: Cloud Security Center DNS resolution log switch. Default false.
         */
        readonly sasDnsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property nasAuditCollectionPolicy: Nas audit collection policy
         */
        readonly nasAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property polardbSlowCollectionPolicy: POLARDB slow collection policy.
         */
        readonly polardbSlowCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property appconnectTtl: Appconnect log centralization ttl. Default 180.
         */
        readonly appconnectTtl?: number | ros.IResolvable;
        /**
         * @Property ossMeteringTtl: OSS measurement log TTL. Default 180.
         */
        readonly ossMeteringTtl?: number | ros.IResolvable;
        /**
         * @Property sasSecurityHcEnabled: Cloud Security Center Baseline Log Switch. Default false.
         */
        readonly sasSecurityHcEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SAuditCollectionPolicy: K8s audit collection policy
         */
        readonly k8SAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property ddosCooAccessTiEnabled: Threat Intelligence of Ddos.
         */
        readonly ddosCooAccessTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property appconnectOpCollectionPolicy: Appconnect audit collection policy
         */
        readonly appconnectOpCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property appconnectOpPolicySetting: Appconnect audit policy setting.
         */
        readonly appconnectOpPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property polardbTiEnabled: Threat Intelligence of POLARDB.
         */
        readonly polardbTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property redisAuditTtl: Redis audit log centralization ttl. Default 7.
         */
        readonly redisAuditTtl?: number | ros.IResolvable;
        /**
         * @Property rdsSlowTiEnabled: Threat Intelligence of rds slow log.
         */
        readonly rdsSlowTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasTtl: Cloud Security Center centralized ttl. Default 180.
         */
        readonly sasTtl?: number | ros.IResolvable;
        /**
         * @Property actiontrailTtl: Actiontrail action log TTL.
         */
        readonly actiontrailTtl?: number | ros.IResolvable;
        /**
         * @Property rdsPerfCollectionPolicy: Rds perf collection policy.
         */
        readonly rdsPerfCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property ossAccessCollectionPolicy: Oss access collection policy.
         */
        readonly ossAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property redisAuditEnabled: Redis audit log switch. Default true.
         */
        readonly redisAuditEnabled?: boolean | ros.IResolvable;
        /**
         * @Property wafTiEnabled: Threat Intelligence of Waf.
         */
        readonly wafTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property redisSyncEnabled: Redis sync to center switch. Default true.
         */
        readonly redisSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SAuditTiEnabled: Threat Intelligence of K8s.
         */
        readonly k8SAuditTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasProcessEnabled: Cloud Security Center process startup log switch. Default false.
         */
        readonly sasProcessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property redisAuditPolicySetting: Redis audit policy setting.
         */
        readonly redisAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property appconnectEnabled: Appconnect access log switch. Default false.
         */
        readonly appconnectEnabled?: boolean | ros.IResolvable;
        /**
         * @Property drdsAuditPolicySetting: DRDS audit policy setting.
         */
        readonly drdsAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property k8SEventTiEnabled: Threat Intelligence of k8s event.
         */
        readonly k8SEventTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property polardbAuditCollectionPolicy: POLARDB audit collection policy
         */
        readonly polardbAuditCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property ddosCooAccessPolicySetting: Ddos audit policy setting.
         */
        readonly ddosCooAccessPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property k8SEventTtl: K8s event log centralization ttl. Default 180.
         */
        readonly k8SEventTtl?: number | ros.IResolvable;
        /**
         * @Property polardbSlowEnabled: POLARDB slow log switch. Default false.
         */
        readonly polardbSlowEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasSecurityAlertEnabled: Cloud Security Center Security Alarm Log Switch .Default false.
         */
        readonly sasSecurityAlertEnabled?: boolean | ros.IResolvable;
        /**
         * @Property slbAccessEnabled: Slb log switch. Default true.
         */
        readonly slbAccessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property drdsAuditEnabled: DRDS audit log switch. Default true.
         */
        readonly drdsAuditEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasNetworkEnabled: Cloud security center network connection log switch. Default false.
         */
        readonly sasNetworkEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SIngressPolicySetting: K8s Ingress policy setting.
         */
        readonly k8SIngressPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ossMeteringCollectionPolicy: Oss metering collection policy.
         */
        readonly ossMeteringCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property polardbSlowTiEnabled: Threat Intelligence of POLARDB slow log.
         */
        readonly polardbSlowTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property polardbSlowTtl: POLARDB slow log centralization ttl. Default 180.
         */
        readonly polardbSlowTtl?: number | ros.IResolvable;
        /**
         * @Property ossAccessTiEnabled: Threat Intelligence of oss.
         */
        readonly ossAccessTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property polardbPerfCollectionPolicy: POLARDB perf collection policy.
         */
        readonly polardbPerfCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property actiontrailOpenapiPolicySetting: Actiontrail openapi policy setting.
         */
        readonly actiontrailOpenapiPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property apigatewayTiEnabled: Threat Intelligence of Apigateway.
         */
        readonly apigatewayTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property bastionAuditPolicySetting: Bastion audit policy setting.
         */
        readonly bastionAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property slbAccessPolicySetting: SLB audit policy setting.
         */
        readonly slbAccessPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property rdsTiEnabled: Threat Intelligence of rds.
         */
        readonly rdsTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property apigatewayAccessCollectionPolicy: Apigateway audit collection policy
         */
        readonly apigatewayAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property cloudfirewallTtl: Cloud firewall log centralized ttl. Default 180.
         */
        readonly cloudfirewallTtl?: number | ros.IResolvable;
        /**
         * @Property polardbAuditPolicySetting: POLARDB audit policy setting.
         */
        readonly polardbAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property k8SAuditPolicySetting: K8s audit policy setting.
         */
        readonly k8SAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VariableMapProperty`
 *
 * @param properties - the TypeScript properties of a `VariableMapProperty`
 *
 * @returns the result of the validation.
 */
function RosAudit_VariableMapPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('polardbPerfPolicySetting', ros.listValidator(ros.validateAny))(properties.polardbPerfPolicySetting));
    errors.collect(ros.propertyValidator('wafEnabled', ros.validateBoolean)(properties.wafEnabled));
    errors.collect(ros.propertyValidator('rdsPerfEnabled', ros.validateBoolean)(properties.rdsPerfEnabled));
    errors.collect(ros.propertyValidator('cpsCallbackCollectionPolicy', ros.validateString)(properties.cpsCallbackCollectionPolicy));
    errors.collect(ros.propertyValidator('redisAuditTiEnabled', ros.validateBoolean)(properties.redisAuditTiEnabled));
    errors.collect(ros.propertyValidator('rdsPerfTiEnabled', ros.validateBoolean)(properties.rdsPerfTiEnabled));
    errors.collect(ros.propertyValidator('rdsSlowPolicySetting', ros.listValidator(ros.validateAny))(properties.rdsSlowPolicySetting));
    errors.collect(ros.propertyValidator('k8SIngressTtl', ros.validateNumber)(properties.k8SIngressTtl));
    errors.collect(ros.propertyValidator('ossSyncEnabled', ros.validateBoolean)(properties.ossSyncEnabled));
    errors.collect(ros.propertyValidator('rdsAuditCollectionPolicy', ros.validateString)(properties.rdsAuditCollectionPolicy));
    errors.collect(ros.propertyValidator('bastionAuditCollectionPolicy', ros.validateString)(properties.bastionAuditCollectionPolicy));
    errors.collect(ros.propertyValidator('bastionEnabled', ros.validateBoolean)(properties.bastionEnabled));
    errors.collect(ros.propertyValidator('redisSyncTtl', ros.validateNumber)(properties.redisSyncTtl));
    errors.collect(ros.propertyValidator('rdsEnabled', ros.validateBoolean)(properties.rdsEnabled));
    errors.collect(ros.propertyValidator('sasSessionEnabled', ros.validateBoolean)(properties.sasSessionEnabled));
    errors.collect(ros.propertyValidator('rdsAuditPolicySetting', ros.listValidator(ros.validateAny))(properties.rdsAuditPolicySetting));
    errors.collect(ros.propertyValidator('ddosCooAccessTtl', ros.validateNumber)(properties.ddosCooAccessTtl));
    errors.collect(ros.propertyValidator('bastionTtl', ros.validateNumber)(properties.bastionTtl));
    errors.collect(ros.propertyValidator('rdsSlowEnabled', ros.validateBoolean)(properties.rdsSlowEnabled));
    errors.collect(ros.propertyValidator('wafAccessCollectionPolicy', ros.validateString)(properties.wafAccessCollectionPolicy));
    errors.collect(ros.propertyValidator('k8SAuditTtl', ros.validateNumber)(properties.k8SAuditTtl));
    errors.collect(ros.propertyValidator('polardbTtl', ros.validateNumber)(properties.polardbTtl));
    errors.collect(ros.propertyValidator('drdsAuditCollectionPolicy', ros.validateString)(properties.drdsAuditCollectionPolicy));
    errors.collect(ros.propertyValidator('slbAccessCollectionPolicy', ros.validateString)(properties.slbAccessCollectionPolicy));
    errors.collect(ros.propertyValidator('sasSnapshotPortEnabled', ros.validateBoolean)(properties.sasSnapshotPortEnabled));
    errors.collect(ros.propertyValidator('rdsSlowTtl', ros.validateNumber)(properties.rdsSlowTtl));
    errors.collect(ros.propertyValidator('polardbEnabled', ros.validateBoolean)(properties.polardbEnabled));
    errors.collect(ros.propertyValidator('sasSnapshotProcessEnabled', ros.validateBoolean)(properties.sasSnapshotProcessEnabled));
    errors.collect(ros.propertyValidator('actiontrailTiEnabled', ros.validateBoolean)(properties.actiontrailTiEnabled));
    errors.collect(ros.propertyValidator('nasTiEnabled', ros.validateBoolean)(properties.nasTiEnabled));
    errors.collect(ros.propertyValidator('appconnectTiEnabled', ros.validateBoolean)(properties.appconnectTiEnabled));
    errors.collect(ros.propertyValidator('cpsTtl', ros.validateNumber)(properties.cpsTtl));
    errors.collect(ros.propertyValidator('slbSyncTtl', ros.validateNumber)(properties.slbSyncTtl));
    errors.collect(ros.propertyValidator('cloudfirewallAccessCollectionPolicy', ros.validateString)(properties.cloudfirewallAccessCollectionPolicy));
    errors.collect(ros.propertyValidator('ddosCooAccessEnabled', ros.validateBoolean)(properties.ddosCooAccessEnabled));
    errors.collect(ros.propertyValidator('k8SIngressTiEnabled', ros.validateBoolean)(properties.k8SIngressTiEnabled));
    errors.collect(ros.propertyValidator('drdsAuditTiEnabled', ros.validateBoolean)(properties.drdsAuditTiEnabled));
    errors.collect(ros.propertyValidator('sasSecurityVulEnabled', ros.validateBoolean)(properties.sasSecurityVulEnabled));
    errors.collect(ros.propertyValidator('polardbSlowPolicySetting', ros.listValidator(ros.validateAny))(properties.polardbSlowPolicySetting));
    errors.collect(ros.propertyValidator('k8SIngressCollectionPolicy', ros.validateString)(properties.k8SIngressCollectionPolicy));
    errors.collect(ros.propertyValidator('apigatewayTtl', ros.validateNumber)(properties.apigatewayTtl));
    errors.collect(ros.propertyValidator('cpsEnabled', ros.validateBoolean)(properties.cpsEnabled));
    errors.collect(ros.propertyValidator('rdsSlowCollectionPolicy', ros.validateString)(properties.rdsSlowCollectionPolicy));
    errors.collect(ros.propertyValidator('actiontrailOpenapiCollectionPolicy', ros.validateString)(properties.actiontrailOpenapiCollectionPolicy));
    errors.collect(ros.propertyValidator('rdsPerfPolicySetting', ros.listValidator(ros.validateAny))(properties.rdsPerfPolicySetting));
    errors.collect(ros.propertyValidator('cloudfirewallAccessPolicySetting', ros.listValidator(ros.validateAny))(properties.cloudfirewallAccessPolicySetting));
    errors.collect(ros.propertyValidator('ossAccessEnabled', ros.validateBoolean)(properties.ossAccessEnabled));
    errors.collect(ros.propertyValidator('cpsCallbackPolicySetting', ros.listValidator(ros.validateAny))(properties.cpsCallbackPolicySetting));
    errors.collect(ros.propertyValidator('slbAccessTtl', ros.validateNumber)(properties.slbAccessTtl));
    errors.collect(ros.propertyValidator('wafAccessPolicySetting', ros.listValidator(ros.validateAny))(properties.wafAccessPolicySetting));
    errors.collect(ros.propertyValidator('polardbPerfTiEnabled', ros.validateBoolean)(properties.polardbPerfTiEnabled));
    errors.collect(ros.propertyValidator('sasLocalDnsEnabled', ros.validateBoolean)(properties.sasLocalDnsEnabled));
    errors.collect(ros.propertyValidator('ossAccessTtl', ros.validateNumber)(properties.ossAccessTtl));
    errors.collect(ros.propertyValidator('ossMeteringPolicySetting', ros.listValidator(ros.validateAny))(properties.ossMeteringPolicySetting));
    errors.collect(ros.propertyValidator('sasHttpEnabled', ros.validateBoolean)(properties.sasHttpEnabled));
    errors.collect(ros.propertyValidator('ossMeteringEnabled', ros.validateBoolean)(properties.ossMeteringEnabled));
    errors.collect(ros.propertyValidator('cloudfirewallEnabled', ros.validateBoolean)(properties.cloudfirewallEnabled));
    errors.collect(ros.propertyValidator('slbAccessTiEnabled', ros.validateBoolean)(properties.slbAccessTiEnabled));
    errors.collect(ros.propertyValidator('drdsSyncTtl', ros.validateNumber)(properties.drdsSyncTtl));
    errors.collect(ros.propertyValidator('k8SEventPolicySetting', ros.listValidator(ros.validateAny))(properties.k8SEventPolicySetting));
    errors.collect(ros.propertyValidator('nasTtl', ros.validateNumber)(properties.nasTtl));
    errors.collect(ros.propertyValidator('sasLoginEnabled', ros.validateBoolean)(properties.sasLoginEnabled));
    errors.collect(ros.propertyValidator('wafTtl', ros.validateNumber)(properties.wafTtl));
    errors.collect(ros.propertyValidator('nasAuditPolicySetting', ros.listValidator(ros.validateAny))(properties.nasAuditPolicySetting));
    errors.collect(ros.propertyValidator('rdsTtl', ros.validateNumber)(properties.rdsTtl));
    errors.collect(ros.propertyValidator('k8SIngressEnabled', ros.validateBoolean)(properties.k8SIngressEnabled));
    errors.collect(ros.propertyValidator('cloudfirewallTiEnabled', ros.validateBoolean)(properties.cloudfirewallTiEnabled));
    errors.collect(ros.propertyValidator('k8SEventCollectionPolicy', ros.validateString)(properties.k8SEventCollectionPolicy));
    errors.collect(ros.propertyValidator('actiontrailEnabled', ros.validateBoolean)(properties.actiontrailEnabled));
    errors.collect(ros.propertyValidator('drdsSyncEnabled', ros.validateBoolean)(properties.drdsSyncEnabled));
    errors.collect(ros.propertyValidator('apigatewayEnabled', ros.validateBoolean)(properties.apigatewayEnabled));
    errors.collect(ros.propertyValidator('sasCrackEnabled', ros.validateBoolean)(properties.sasCrackEnabled));
    errors.collect(ros.propertyValidator('cpsTiEnabled', ros.validateBoolean)(properties.cpsTiEnabled));
    errors.collect(ros.propertyValidator('k8SEventEnabled', ros.validateBoolean)(properties.k8SEventEnabled));
    errors.collect(ros.propertyValidator('ossSyncTtl', ros.validateNumber)(properties.ossSyncTtl));
    errors.collect(ros.propertyValidator('rdsPerfTtl', ros.validateNumber)(properties.rdsPerfTtl));
    errors.collect(ros.propertyValidator('sasSnapshotAccountEnabled', ros.validateBoolean)(properties.sasSnapshotAccountEnabled));
    errors.collect(ros.propertyValidator('slbSyncEnabled', ros.validateBoolean)(properties.slbSyncEnabled));
    errors.collect(ros.propertyValidator('bastionTiEnabled', ros.validateBoolean)(properties.bastionTiEnabled));
    errors.collect(ros.propertyValidator('ossAccessPolicySetting', ros.listValidator(ros.validateAny))(properties.ossAccessPolicySetting));
    errors.collect(ros.propertyValidator('sasTiEnabled', ros.validateBoolean)(properties.sasTiEnabled));
    errors.collect(ros.propertyValidator('drdsAuditTtl', ros.validateNumber)(properties.drdsAuditTtl));
    errors.collect(ros.propertyValidator('redisAuditCollectionPolicy', ros.validateString)(properties.redisAuditCollectionPolicy));
    errors.collect(ros.propertyValidator('polardbPerfEnabled', ros.validateBoolean)(properties.polardbPerfEnabled));
    errors.collect(ros.propertyValidator('ddosCooAccessCollectionPolicy', ros.validateString)(properties.ddosCooAccessCollectionPolicy));
    errors.collect(ros.propertyValidator('k8SAuditEnabled', ros.validateBoolean)(properties.k8SAuditEnabled));
    errors.collect(ros.propertyValidator('ossMeteringTiEnabled', ros.validateBoolean)(properties.ossMeteringTiEnabled));
    errors.collect(ros.propertyValidator('polardbPerfTtl', ros.validateNumber)(properties.polardbPerfTtl));
    errors.collect(ros.propertyValidator('apigatewayAccessPolicySetting', ros.listValidator(ros.validateAny))(properties.apigatewayAccessPolicySetting));
    errors.collect(ros.propertyValidator('nasEnabled', ros.validateBoolean)(properties.nasEnabled));
    errors.collect(ros.propertyValidator('sasDnsEnabled', ros.validateBoolean)(properties.sasDnsEnabled));
    errors.collect(ros.propertyValidator('nasAuditCollectionPolicy', ros.validateString)(properties.nasAuditCollectionPolicy));
    errors.collect(ros.propertyValidator('polardbSlowCollectionPolicy', ros.validateString)(properties.polardbSlowCollectionPolicy));
    errors.collect(ros.propertyValidator('appconnectTtl', ros.validateNumber)(properties.appconnectTtl));
    errors.collect(ros.propertyValidator('ossMeteringTtl', ros.validateNumber)(properties.ossMeteringTtl));
    errors.collect(ros.propertyValidator('sasSecurityHcEnabled', ros.validateBoolean)(properties.sasSecurityHcEnabled));
    errors.collect(ros.propertyValidator('k8SAuditCollectionPolicy', ros.validateString)(properties.k8SAuditCollectionPolicy));
    errors.collect(ros.propertyValidator('ddosCooAccessTiEnabled', ros.validateBoolean)(properties.ddosCooAccessTiEnabled));
    errors.collect(ros.propertyValidator('appconnectOpCollectionPolicy', ros.validateString)(properties.appconnectOpCollectionPolicy));
    errors.collect(ros.propertyValidator('appconnectOpPolicySetting', ros.listValidator(ros.validateAny))(properties.appconnectOpPolicySetting));
    errors.collect(ros.propertyValidator('polardbTiEnabled', ros.validateBoolean)(properties.polardbTiEnabled));
    errors.collect(ros.propertyValidator('redisAuditTtl', ros.validateNumber)(properties.redisAuditTtl));
    errors.collect(ros.propertyValidator('rdsSlowTiEnabled', ros.validateBoolean)(properties.rdsSlowTiEnabled));
    errors.collect(ros.propertyValidator('sasTtl', ros.validateNumber)(properties.sasTtl));
    errors.collect(ros.propertyValidator('actiontrailTtl', ros.validateNumber)(properties.actiontrailTtl));
    errors.collect(ros.propertyValidator('rdsPerfCollectionPolicy', ros.validateString)(properties.rdsPerfCollectionPolicy));
    errors.collect(ros.propertyValidator('ossAccessCollectionPolicy', ros.validateString)(properties.ossAccessCollectionPolicy));
    errors.collect(ros.propertyValidator('redisAuditEnabled', ros.validateBoolean)(properties.redisAuditEnabled));
    errors.collect(ros.propertyValidator('wafTiEnabled', ros.validateBoolean)(properties.wafTiEnabled));
    errors.collect(ros.propertyValidator('redisSyncEnabled', ros.validateBoolean)(properties.redisSyncEnabled));
    errors.collect(ros.propertyValidator('k8SAuditTiEnabled', ros.validateBoolean)(properties.k8SAuditTiEnabled));
    errors.collect(ros.propertyValidator('sasProcessEnabled', ros.validateBoolean)(properties.sasProcessEnabled));
    errors.collect(ros.propertyValidator('redisAuditPolicySetting', ros.listValidator(ros.validateAny))(properties.redisAuditPolicySetting));
    errors.collect(ros.propertyValidator('appconnectEnabled', ros.validateBoolean)(properties.appconnectEnabled));
    errors.collect(ros.propertyValidator('drdsAuditPolicySetting', ros.listValidator(ros.validateAny))(properties.drdsAuditPolicySetting));
    errors.collect(ros.propertyValidator('k8SEventTiEnabled', ros.validateBoolean)(properties.k8SEventTiEnabled));
    errors.collect(ros.propertyValidator('polardbAuditCollectionPolicy', ros.validateString)(properties.polardbAuditCollectionPolicy));
    errors.collect(ros.propertyValidator('ddosCooAccessPolicySetting', ros.listValidator(ros.validateAny))(properties.ddosCooAccessPolicySetting));
    errors.collect(ros.propertyValidator('k8SEventTtl', ros.validateNumber)(properties.k8SEventTtl));
    errors.collect(ros.propertyValidator('polardbSlowEnabled', ros.validateBoolean)(properties.polardbSlowEnabled));
    errors.collect(ros.propertyValidator('sasSecurityAlertEnabled', ros.validateBoolean)(properties.sasSecurityAlertEnabled));
    errors.collect(ros.propertyValidator('slbAccessEnabled', ros.validateBoolean)(properties.slbAccessEnabled));
    errors.collect(ros.propertyValidator('drdsAuditEnabled', ros.validateBoolean)(properties.drdsAuditEnabled));
    errors.collect(ros.propertyValidator('sasNetworkEnabled', ros.validateBoolean)(properties.sasNetworkEnabled));
    errors.collect(ros.propertyValidator('k8SIngressPolicySetting', ros.listValidator(ros.validateAny))(properties.k8SIngressPolicySetting));
    errors.collect(ros.propertyValidator('ossMeteringCollectionPolicy', ros.validateString)(properties.ossMeteringCollectionPolicy));
    errors.collect(ros.propertyValidator('polardbSlowTiEnabled', ros.validateBoolean)(properties.polardbSlowTiEnabled));
    errors.collect(ros.propertyValidator('polardbSlowTtl', ros.validateNumber)(properties.polardbSlowTtl));
    errors.collect(ros.propertyValidator('ossAccessTiEnabled', ros.validateBoolean)(properties.ossAccessTiEnabled));
    errors.collect(ros.propertyValidator('polardbPerfCollectionPolicy', ros.validateString)(properties.polardbPerfCollectionPolicy));
    errors.collect(ros.propertyValidator('actiontrailOpenapiPolicySetting', ros.listValidator(ros.validateAny))(properties.actiontrailOpenapiPolicySetting));
    errors.collect(ros.propertyValidator('apigatewayTiEnabled', ros.validateBoolean)(properties.apigatewayTiEnabled));
    errors.collect(ros.propertyValidator('bastionAuditPolicySetting', ros.listValidator(ros.validateAny))(properties.bastionAuditPolicySetting));
    errors.collect(ros.propertyValidator('slbAccessPolicySetting', ros.listValidator(ros.validateAny))(properties.slbAccessPolicySetting));
    errors.collect(ros.propertyValidator('rdsTiEnabled', ros.validateBoolean)(properties.rdsTiEnabled));
    errors.collect(ros.propertyValidator('apigatewayAccessCollectionPolicy', ros.validateString)(properties.apigatewayAccessCollectionPolicy));
    errors.collect(ros.propertyValidator('cloudfirewallTtl', ros.validateNumber)(properties.cloudfirewallTtl));
    errors.collect(ros.propertyValidator('polardbAuditPolicySetting', ros.listValidator(ros.validateAny))(properties.polardbAuditPolicySetting));
    errors.collect(ros.propertyValidator('k8SAuditPolicySetting', ros.listValidator(ros.validateAny))(properties.k8SAuditPolicySetting));
    return errors.wrap('supplied properties not correct for "VariableMapProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Audit.VariableMap` resource
 *
 * @param properties - the TypeScript properties of a `VariableMapProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Audit.VariableMap` resource.
 */
// @ts-ignore TS6133
function rosAuditVariableMapPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAudit_VariableMapPropertyValidator(properties).assertSuccess();
    return {
      PolardbPerfPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.polardbPerfPolicySetting),
      WafEnabled: ros.booleanToRosTemplate(properties.wafEnabled),
      RdsPerfEnabled: ros.booleanToRosTemplate(properties.rdsPerfEnabled),
      CpsCallbackCollectionPolicy: ros.stringToRosTemplate(properties.cpsCallbackCollectionPolicy),
      RedisAuditTiEnabled: ros.booleanToRosTemplate(properties.redisAuditTiEnabled),
      RdsPerfTiEnabled: ros.booleanToRosTemplate(properties.rdsPerfTiEnabled),
      RdsSlowPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.rdsSlowPolicySetting),
      K8sIngressTtl: ros.numberToRosTemplate(properties.k8SIngressTtl),
      OssSyncEnabled: ros.booleanToRosTemplate(properties.ossSyncEnabled),
      RdsAuditCollectionPolicy: ros.stringToRosTemplate(properties.rdsAuditCollectionPolicy),
      BastionAuditCollectionPolicy: ros.stringToRosTemplate(properties.bastionAuditCollectionPolicy),
      BastionEnabled: ros.booleanToRosTemplate(properties.bastionEnabled),
      RedisSyncTtl: ros.numberToRosTemplate(properties.redisSyncTtl),
      RdsEnabled: ros.booleanToRosTemplate(properties.rdsEnabled),
      SasSessionEnabled: ros.booleanToRosTemplate(properties.sasSessionEnabled),
      RdsAuditPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.rdsAuditPolicySetting),
      DdosCooAccessTtl: ros.numberToRosTemplate(properties.ddosCooAccessTtl),
      BastionTtl: ros.numberToRosTemplate(properties.bastionTtl),
      RdsSlowEnabled: ros.booleanToRosTemplate(properties.rdsSlowEnabled),
      WafAccessCollectionPolicy: ros.stringToRosTemplate(properties.wafAccessCollectionPolicy),
      K8sAuditTtl: ros.numberToRosTemplate(properties.k8SAuditTtl),
      PolardbTtl: ros.numberToRosTemplate(properties.polardbTtl),
      DrdsAuditCollectionPolicy: ros.stringToRosTemplate(properties.drdsAuditCollectionPolicy),
      SlbAccessCollectionPolicy: ros.stringToRosTemplate(properties.slbAccessCollectionPolicy),
      SasSnapshotPortEnabled: ros.booleanToRosTemplate(properties.sasSnapshotPortEnabled),
      RdsSlowTtl: ros.numberToRosTemplate(properties.rdsSlowTtl),
      PolardbEnabled: ros.booleanToRosTemplate(properties.polardbEnabled),
      SasSnapshotProcessEnabled: ros.booleanToRosTemplate(properties.sasSnapshotProcessEnabled),
      ActiontrailTiEnabled: ros.booleanToRosTemplate(properties.actiontrailTiEnabled),
      NasTiEnabled: ros.booleanToRosTemplate(properties.nasTiEnabled),
      AppconnectTiEnabled: ros.booleanToRosTemplate(properties.appconnectTiEnabled),
      CpsTtl: ros.numberToRosTemplate(properties.cpsTtl),
      SlbSyncTtl: ros.numberToRosTemplate(properties.slbSyncTtl),
      CloudfirewallAccessCollectionPolicy: ros.stringToRosTemplate(properties.cloudfirewallAccessCollectionPolicy),
      DdosCooAccessEnabled: ros.booleanToRosTemplate(properties.ddosCooAccessEnabled),
      K8sIngressTiEnabled: ros.booleanToRosTemplate(properties.k8SIngressTiEnabled),
      DrdsAuditTiEnabled: ros.booleanToRosTemplate(properties.drdsAuditTiEnabled),
      SasSecurityVulEnabled: ros.booleanToRosTemplate(properties.sasSecurityVulEnabled),
      PolardbSlowPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.polardbSlowPolicySetting),
      K8sIngressCollectionPolicy: ros.stringToRosTemplate(properties.k8SIngressCollectionPolicy),
      ApigatewayTtl: ros.numberToRosTemplate(properties.apigatewayTtl),
      CpsEnabled: ros.booleanToRosTemplate(properties.cpsEnabled),
      RdsSlowCollectionPolicy: ros.stringToRosTemplate(properties.rdsSlowCollectionPolicy),
      ActiontrailOpenapiCollectionPolicy: ros.stringToRosTemplate(properties.actiontrailOpenapiCollectionPolicy),
      RdsPerfPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.rdsPerfPolicySetting),
      CloudfirewallAccessPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.cloudfirewallAccessPolicySetting),
      OssAccessEnabled: ros.booleanToRosTemplate(properties.ossAccessEnabled),
      CpsCallbackPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.cpsCallbackPolicySetting),
      SlbAccessTtl: ros.numberToRosTemplate(properties.slbAccessTtl),
      WafAccessPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.wafAccessPolicySetting),
      PolardbPerfTiEnabled: ros.booleanToRosTemplate(properties.polardbPerfTiEnabled),
      SasLocalDnsEnabled: ros.booleanToRosTemplate(properties.sasLocalDnsEnabled),
      OssAccessTtl: ros.numberToRosTemplate(properties.ossAccessTtl),
      OssMeteringPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.ossMeteringPolicySetting),
      SasHttpEnabled: ros.booleanToRosTemplate(properties.sasHttpEnabled),
      OssMeteringEnabled: ros.booleanToRosTemplate(properties.ossMeteringEnabled),
      CloudfirewallEnabled: ros.booleanToRosTemplate(properties.cloudfirewallEnabled),
      SlbAccessTiEnabled: ros.booleanToRosTemplate(properties.slbAccessTiEnabled),
      DrdsSyncTtl: ros.numberToRosTemplate(properties.drdsSyncTtl),
      K8sEventPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.k8SEventPolicySetting),
      NasTtl: ros.numberToRosTemplate(properties.nasTtl),
      SasLoginEnabled: ros.booleanToRosTemplate(properties.sasLoginEnabled),
      WafTtl: ros.numberToRosTemplate(properties.wafTtl),
      NasAuditPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.nasAuditPolicySetting),
      RdsTtl: ros.numberToRosTemplate(properties.rdsTtl),
      K8sIngressEnabled: ros.booleanToRosTemplate(properties.k8SIngressEnabled),
      CloudfirewallTiEnabled: ros.booleanToRosTemplate(properties.cloudfirewallTiEnabled),
      K8sEventCollectionPolicy: ros.stringToRosTemplate(properties.k8SEventCollectionPolicy),
      ActiontrailEnabled: ros.booleanToRosTemplate(properties.actiontrailEnabled),
      DrdsSyncEnabled: ros.booleanToRosTemplate(properties.drdsSyncEnabled),
      ApigatewayEnabled: ros.booleanToRosTemplate(properties.apigatewayEnabled),
      SasCrackEnabled: ros.booleanToRosTemplate(properties.sasCrackEnabled),
      CpsTiEnabled: ros.booleanToRosTemplate(properties.cpsTiEnabled),
      K8sEventEnabled: ros.booleanToRosTemplate(properties.k8SEventEnabled),
      OssSyncTtl: ros.numberToRosTemplate(properties.ossSyncTtl),
      RdsPerfTtl: ros.numberToRosTemplate(properties.rdsPerfTtl),
      SasSnapshotAccountEnabled: ros.booleanToRosTemplate(properties.sasSnapshotAccountEnabled),
      SlbSyncEnabled: ros.booleanToRosTemplate(properties.slbSyncEnabled),
      BastionTiEnabled: ros.booleanToRosTemplate(properties.bastionTiEnabled),
      OssAccessPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.ossAccessPolicySetting),
      SasTiEnabled: ros.booleanToRosTemplate(properties.sasTiEnabled),
      DrdsAuditTtl: ros.numberToRosTemplate(properties.drdsAuditTtl),
      RedisAuditCollectionPolicy: ros.stringToRosTemplate(properties.redisAuditCollectionPolicy),
      PolardbPerfEnabled: ros.booleanToRosTemplate(properties.polardbPerfEnabled),
      DdosCooAccessCollectionPolicy: ros.stringToRosTemplate(properties.ddosCooAccessCollectionPolicy),
      K8sAuditEnabled: ros.booleanToRosTemplate(properties.k8SAuditEnabled),
      OssMeteringTiEnabled: ros.booleanToRosTemplate(properties.ossMeteringTiEnabled),
      PolardbPerfTtl: ros.numberToRosTemplate(properties.polardbPerfTtl),
      ApigatewayAccessPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.apigatewayAccessPolicySetting),
      NasEnabled: ros.booleanToRosTemplate(properties.nasEnabled),
      SasDnsEnabled: ros.booleanToRosTemplate(properties.sasDnsEnabled),
      NasAuditCollectionPolicy: ros.stringToRosTemplate(properties.nasAuditCollectionPolicy),
      PolardbSlowCollectionPolicy: ros.stringToRosTemplate(properties.polardbSlowCollectionPolicy),
      AppconnectTtl: ros.numberToRosTemplate(properties.appconnectTtl),
      OssMeteringTtl: ros.numberToRosTemplate(properties.ossMeteringTtl),
      SasSecurityHcEnabled: ros.booleanToRosTemplate(properties.sasSecurityHcEnabled),
      K8sAuditCollectionPolicy: ros.stringToRosTemplate(properties.k8SAuditCollectionPolicy),
      DdosCooAccessTiEnabled: ros.booleanToRosTemplate(properties.ddosCooAccessTiEnabled),
      AppconnectOpCollectionPolicy: ros.stringToRosTemplate(properties.appconnectOpCollectionPolicy),
      AppconnectOpPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.appconnectOpPolicySetting),
      PolardbTiEnabled: ros.booleanToRosTemplate(properties.polardbTiEnabled),
      RedisAuditTtl: ros.numberToRosTemplate(properties.redisAuditTtl),
      RdsSlowTiEnabled: ros.booleanToRosTemplate(properties.rdsSlowTiEnabled),
      SasTtl: ros.numberToRosTemplate(properties.sasTtl),
      ActiontrailTtl: ros.numberToRosTemplate(properties.actiontrailTtl),
      RdsPerfCollectionPolicy: ros.stringToRosTemplate(properties.rdsPerfCollectionPolicy),
      OssAccessCollectionPolicy: ros.stringToRosTemplate(properties.ossAccessCollectionPolicy),
      RedisAuditEnabled: ros.booleanToRosTemplate(properties.redisAuditEnabled),
      WafTiEnabled: ros.booleanToRosTemplate(properties.wafTiEnabled),
      RedisSyncEnabled: ros.booleanToRosTemplate(properties.redisSyncEnabled),
      K8sAuditTiEnabled: ros.booleanToRosTemplate(properties.k8SAuditTiEnabled),
      SasProcessEnabled: ros.booleanToRosTemplate(properties.sasProcessEnabled),
      RedisAuditPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.redisAuditPolicySetting),
      AppconnectEnabled: ros.booleanToRosTemplate(properties.appconnectEnabled),
      DrdsAuditPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.drdsAuditPolicySetting),
      K8sEventTiEnabled: ros.booleanToRosTemplate(properties.k8SEventTiEnabled),
      PolardbAuditCollectionPolicy: ros.stringToRosTemplate(properties.polardbAuditCollectionPolicy),
      DdosCooAccessPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.ddosCooAccessPolicySetting),
      K8sEventTtl: ros.numberToRosTemplate(properties.k8SEventTtl),
      PolardbSlowEnabled: ros.booleanToRosTemplate(properties.polardbSlowEnabled),
      SasSecurityAlertEnabled: ros.booleanToRosTemplate(properties.sasSecurityAlertEnabled),
      SlbAccessEnabled: ros.booleanToRosTemplate(properties.slbAccessEnabled),
      DrdsAuditEnabled: ros.booleanToRosTemplate(properties.drdsAuditEnabled),
      SasNetworkEnabled: ros.booleanToRosTemplate(properties.sasNetworkEnabled),
      K8sIngressPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.k8SIngressPolicySetting),
      OssMeteringCollectionPolicy: ros.stringToRosTemplate(properties.ossMeteringCollectionPolicy),
      PolardbSlowTiEnabled: ros.booleanToRosTemplate(properties.polardbSlowTiEnabled),
      PolardbSlowTtl: ros.numberToRosTemplate(properties.polardbSlowTtl),
      OssAccessTiEnabled: ros.booleanToRosTemplate(properties.ossAccessTiEnabled),
      PolardbPerfCollectionPolicy: ros.stringToRosTemplate(properties.polardbPerfCollectionPolicy),
      ActiontrailOpenapiPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.actiontrailOpenapiPolicySetting),
      ApigatewayTiEnabled: ros.booleanToRosTemplate(properties.apigatewayTiEnabled),
      BastionAuditPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.bastionAuditPolicySetting),
      SlbAccessPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.slbAccessPolicySetting),
      RdsTiEnabled: ros.booleanToRosTemplate(properties.rdsTiEnabled),
      ApigatewayAccessCollectionPolicy: ros.stringToRosTemplate(properties.apigatewayAccessCollectionPolicy),
      CloudfirewallTtl: ros.numberToRosTemplate(properties.cloudfirewallTtl),
      PolardbAuditPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.polardbAuditPolicySetting),
      K8sAuditPolicySetting: ros.listMapper(ros.objectToRosTemplate)(properties.k8SAuditPolicySetting),
    };
}

/**
 * Properties for defining a `ALIYUN::SLS::Etl`
 */
export interface RosEtlProps {

    /**
     * @Property configuration: The configuration of ETL task
     */
    readonly configuration: RosEtl.ConfigurationProperty | ros.IResolvable;

    /**
     * @Property displayName: ETL display name
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * @Property name: ETL name
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property projectName: Project name
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property schedule: Task scheduling strategy
     */
    readonly schedule: RosEtl.ScheduleProperty | ros.IResolvable;

    /**
     * @Property description: ETL description message.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEtlProps`
 *
 * @param properties - the TypeScript properties of a `RosEtlProps`
 *
 * @returns the result of the validation.
 */
function RosEtlPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('configuration', ros.requiredValidator)(properties.configuration));
    errors.collect(ros.propertyValidator('configuration', RosEtl_ConfigurationPropertyValidator)(properties.configuration));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('schedule', ros.requiredValidator)(properties.schedule));
    errors.collect(ros.propertyValidator('schedule', RosEtl_SchedulePropertyValidator)(properties.schedule));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosEtlProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Etl` resource
 *
 * @param properties - the TypeScript properties of a `RosEtlProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Etl` resource.
 */
// @ts-ignore TS6133
function rosEtlPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEtlPropsValidator(properties).assertSuccess();
    }
    return {
      Configuration: rosEtlConfigurationPropertyToRosTemplate(properties.configuration),
      DisplayName: ros.stringToRosTemplate(properties.displayName),
      Name: ros.stringToRosTemplate(properties.name),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
      Schedule: rosEtlSchedulePropertyToRosTemplate(properties.schedule),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLS::Etl`
 */
export class RosEtl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Etl";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Name: ETL name.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property configuration: The configuration of ETL task
     */
    public configuration: RosEtl.ConfigurationProperty | ros.IResolvable;

    /**
     * @Property displayName: ETL display name
     */
    public displayName: string | ros.IResolvable;

    /**
     * @Property name: ETL name
     */
    public name: string | ros.IResolvable;

    /**
     * @Property projectName: Project name
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property schedule: Task scheduling strategy
     */
    public schedule: RosEtl.ScheduleProperty | ros.IResolvable;

    /**
     * @Property description: ETL description message.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLS::Etl`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEtlProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEtl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.configuration = props.configuration;
        this.displayName = props.displayName;
        this.name = props.name;
        this.projectName = props.projectName;
        this.schedule = props.schedule;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            configuration: this.configuration,
            displayName: this.displayName,
            name: this.name,
            projectName: this.projectName,
            schedule: this.schedule,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEtlPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEtl {
    /**
     * @stability external
     */
    export interface ConfigurationProperty {
        /**
         * @Property script: Processing operation grammar.
         */
        readonly script: string | ros.IResolvable;
        /**
         * @Property sinks: target logstore configuration for delivery after data processing.
         */
        readonly sinks: Array<RosEtl.SinksProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property parameters: Advanced parameter configuration of processing operations.
         */
        readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property toTime: Deadline of processing job, the default value is None
         */
        readonly toTime?: number | ros.IResolvable;
        /**
         * @Property version: The script version.
         */
        readonly version?: number | ros.IResolvable;
        /**
         * @Property logstore: The source logstore of the processing job.
         */
        readonly logstore: string | ros.IResolvable;
        /**
         * @Property fromTime: The start time of the processing job, the default starts from the current time.
         */
        readonly fromTime?: number | ros.IResolvable;
        /**
         * @Property roleArn: Sts role info under delivery target logstore. 
     *
         */
        readonly roleArn?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosEtl_ConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('script', ros.requiredValidator)(properties.script));
    errors.collect(ros.propertyValidator('script', ros.validateString)(properties.script));
    errors.collect(ros.propertyValidator('sinks', ros.requiredValidator)(properties.sinks));
    errors.collect(ros.propertyValidator('sinks', ros.listValidator(RosEtl_SinksPropertyValidator))(properties.sinks));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('toTime', ros.validateNumber)(properties.toTime));
    errors.collect(ros.propertyValidator('version', ros.validateNumber)(properties.version));
    errors.collect(ros.propertyValidator('logstore', ros.requiredValidator)(properties.logstore));
    errors.collect(ros.propertyValidator('logstore', ros.validateString)(properties.logstore));
    errors.collect(ros.propertyValidator('fromTime', ros.validateNumber)(properties.fromTime));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    return errors.wrap('supplied properties not correct for "ConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Etl.Configuration` resource
 *
 * @param properties - the TypeScript properties of a `ConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Etl.Configuration` resource.
 */
// @ts-ignore TS6133
function rosEtlConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEtl_ConfigurationPropertyValidator(properties).assertSuccess();
    return {
      Script: ros.stringToRosTemplate(properties.script),
      Sinks: ros.listMapper(rosEtlSinksPropertyToRosTemplate)(properties.sinks),
      Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      ToTime: ros.numberToRosTemplate(properties.toTime),
      Version: ros.numberToRosTemplate(properties.version),
      Logstore: ros.stringToRosTemplate(properties.logstore),
      FromTime: ros.numberToRosTemplate(properties.fromTime),
      RoleArn: ros.stringToRosTemplate(properties.roleArn),
    };
}

export namespace RosEtl {
    /**
     * @stability external
     */
    export interface ScheduleProperty {
        /**
         * @Property type: The type of task scheduling strategies, value: Resident
         */
        readonly type: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ScheduleProperty`
 *
 * @param properties - the TypeScript properties of a `ScheduleProperty`
 *
 * @returns the result of the validation.
 */
function RosEtl_SchedulePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    return errors.wrap('supplied properties not correct for "ScheduleProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Etl.Schedule` resource
 *
 * @param properties - the TypeScript properties of a `ScheduleProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Etl.Schedule` resource.
 */
// @ts-ignore TS6133
function rosEtlSchedulePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEtl_SchedulePropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
    };
}

export namespace RosEtl {
    /**
     * @stability external
     */
    export interface SinksProperty {
        /**
         * @Property project: The project where the target logstore is delivered.
         */
        readonly project: string | ros.IResolvable;
        /**
         * @Property type: ETL sinks type, the default value is AliyunLOG.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property endpoint: Delivery target logstore region.
         */
        readonly endpoint?: string | ros.IResolvable;
        /**
         * @Property logstore: Delivery target logstore.
         */
        readonly logstore: string | ros.IResolvable;
        /**
         * @Property roleArn: Sts role info under delivery target logstore. 
     *
         */
        readonly roleArn?: string | ros.IResolvable;
        /**
         * @Property name: Delivery target name.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SinksProperty`
 *
 * @param properties - the TypeScript properties of a `SinksProperty`
 *
 * @returns the result of the validation.
 */
function RosEtl_SinksPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('logstore', ros.requiredValidator)(properties.logstore));
    errors.collect(ros.propertyValidator('logstore', ros.validateString)(properties.logstore));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "SinksProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Etl.Sinks` resource
 *
 * @param properties - the TypeScript properties of a `SinksProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Etl.Sinks` resource.
 */
// @ts-ignore TS6133
function rosEtlSinksPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEtl_SinksPropertyValidator(properties).assertSuccess();
    return {
      Project: ros.stringToRosTemplate(properties.project),
      Type: ros.stringToRosTemplate(properties.type),
      Endpoint: ros.stringToRosTemplate(properties.endpoint),
      Logstore: ros.stringToRosTemplate(properties.logstore),
      RoleArn: ros.stringToRosTemplate(properties.roleArn),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `ALIYUN::SLS::Index`
 */
export interface RosIndexProps {

    /**
     * @Property fullTextIndex: Full-text indexing configuration.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    readonly fullTextIndex: RosIndex.FullTextIndexProperty | ros.IResolvable;

    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string | ros.IResolvable;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property keyIndices: Key index configurations.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    readonly keyIndices?: Array<RosIndex.KeyIndicesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property logReduce: Whether to enable log reduce. Default to false.
     */
    readonly logReduce?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosIndexProps`
 *
 * @param properties - the TypeScript properties of a `RosIndexProps`
 *
 * @returns the result of the validation.
 */
function RosIndexPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logstoreName', ros.requiredValidator)(properties.logstoreName));
    if(properties.logstoreName && (Array.isArray(properties.logstoreName) || (typeof properties.logstoreName) === 'string')) {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateLength)({
            data: properties.logstoreName.length,
            min: 3,
            max: 63,
          }));
    }
    errors.collect(ros.propertyValidator('logstoreName', ros.validateString)(properties.logstoreName));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 63,
          }));
    }
    if(properties.projectName && (typeof properties.projectName) !== 'object') {
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
function rosIndexPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosIndex extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Index";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property fullTextIndex: Full-text indexing configuration.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    public fullTextIndex: RosIndex.FullTextIndexProperty | ros.IResolvable;

    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public logstoreName: string | ros.IResolvable;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property keyIndices: Key index configurations.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    public keyIndices: Array<RosIndex.KeyIndicesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property logReduce: Whether to enable log reduce. Default to false.
     */
    public logReduce: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLS::Index`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIndexProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIndex.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fullTextIndex = props.fullTextIndex;
        this.logstoreName = props.logstoreName;
        this.projectName = props.projectName;
        this.keyIndices = props.keyIndices;
        this.logReduce = props.logReduce;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            fullTextIndex: this.fullTextIndex,
            logstoreName: this.logstoreName,
            projectName: this.projectName,
            keyIndices: this.keyIndices,
            logReduce: this.logReduce,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIndexPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosIndex {
    /**
     * @stability external
     */
    export interface FullTextIndexProperty {
        /**
         * @Property delimiter: Delimiter. Default to (( , '";=()[]{}?@&<>/:\n\t\r )).
         */
        readonly delimiter?: string | ros.IResolvable;
        /**
         * @Property includeChinese: Whether it contains Chinese. Default to false.
         */
        readonly includeChinese?: boolean | ros.IResolvable;
        /**
         * @Property caseSensitive: Whether it is case sensitive. Default to false.
         */
        readonly caseSensitive?: boolean | ros.IResolvable;
        /**
         * @Property enable: Whether to enable full-text indexing. Default to true.
         */
        readonly enable: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FullTextIndexProperty`
 *
 * @param properties - the TypeScript properties of a `FullTextIndexProperty`
 *
 * @returns the result of the validation.
 */
function RosIndex_FullTextIndexPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosIndexFullTextIndexPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIndex_FullTextIndexPropertyValidator(properties).assertSuccess();
    return {
      Delimiter: ros.stringToRosTemplate(properties.delimiter),
      IncludeChinese: ros.booleanToRosTemplate(properties.includeChinese),
      CaseSensitive: ros.booleanToRosTemplate(properties.caseSensitive),
      Enable: ros.booleanToRosTemplate(properties.enable),
    };
}

export namespace RosIndex {
    /**
     * @stability external
     */
    export interface JsonKeyIndicesProperty {
        /**
         * @Property type: Json key type. Allowed types: text, long, double. Default to text.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property alias: Json key alias.
         */
        readonly alias?: string | ros.IResolvable;
        /**
         * @Property enableAnalytics: Whether this json key is enabled for statistics. Default to true.
         */
        readonly enableAnalytics?: boolean | ros.IResolvable;
        /**
         * @Property name: Json key name. It can be nested by dot(.), such as k1.k2.k3.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `JsonKeyIndicesProperty`
 *
 * @param properties - the TypeScript properties of a `JsonKeyIndicesProperty`
 *
 * @returns the result of the validation.
 */
function RosIndex_JsonKeyIndicesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["text","long","double"],
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
function rosIndexJsonKeyIndicesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIndex_JsonKeyIndicesPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Alias: ros.stringToRosTemplate(properties.alias),
      EnableAnalytics: ros.booleanToRosTemplate(properties.enableAnalytics),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosIndex {
    /**
     * @stability external
     */
    export interface KeyIndicesProperty {
        /**
         * @Property type: Key type. Allowed types: text, long, double, json. Default to text.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property jsonKeyIndices: Json key index configurations.
         */
        readonly jsonKeyIndices?: Array<RosIndex.JsonKeyIndicesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property delimiter: Delimiter. It takes effect when Type is text or json. Default to (( , '";=()[]{}?@&<>/:\n\t\r )).
         */
        readonly delimiter?: string | ros.IResolvable;
        /**
         * @Property includeChinese: Whether it contains Chinese. It takes effect when Type is text or json. Default to false.
         */
        readonly includeChinese?: boolean | ros.IResolvable;
        /**
         * @Property alias: Key alias.
         */
        readonly alias?: string | ros.IResolvable;
        /**
         * @Property enableAnalytics: Whether this key is enabled for statistics. Default to false for json type, else true.
         */
        readonly enableAnalytics?: boolean | ros.IResolvable;
        /**
         * @Property caseSensitive: Whether it is case sensitive. It takes effect when Type is text or json. Default to false.
         */
        readonly caseSensitive?: boolean | ros.IResolvable;
        /**
         * @Property name: Key name.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `KeyIndicesProperty`
 *
 * @param properties - the TypeScript properties of a `KeyIndicesProperty`
 *
 * @returns the result of the validation.
 */
function RosIndex_KeyIndicesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["text","long","double","json"],
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
function rosIndexKeyIndicesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
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
 * Properties for defining a `ALIYUN::SLS::Logstore`
 */
export interface RosLogstoreProps {

    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string | ros.IResolvable;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
     * Default to false.
     */
    readonly appendMeta?: boolean | ros.IResolvable;

    /**
     * @Property autoSplit: Whether to automatically split the shard.
     * Default to false.
     */
    readonly autoSplit?: boolean | ros.IResolvable;

    /**
     * @Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
     * Default to false.
     */
    readonly enableTracking?: boolean | ros.IResolvable;

    /**
     * @Property encryptConf: Data encryption config
     */
    readonly encryptConf?: RosLogstore.EncryptConfProperty | ros.IResolvable;

    /**
     * @Property maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
     * Allowed Values: 1-64.
     */
    readonly maxSplitShard?: number | ros.IResolvable;

    /**
     * @Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    readonly preserveStorage?: boolean | ros.IResolvable;

    /**
     * @Property shardCount: The number of Shards.
     * Allowed Values: 1-100, default to 2.
     */
    readonly shardCount?: number | ros.IResolvable;

    /**
     * @Property ttl: The lifecycle of log in the logstore in days.
     * Allowed Values: 1-3600, default to 30.
     */
    readonly ttl?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLogstoreProps`
 *
 * @param properties - the TypeScript properties of a `RosLogstoreProps`
 *
 * @returns the result of the validation.
 */
function RosLogstorePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logstoreName', ros.requiredValidator)(properties.logstoreName));
    if(properties.logstoreName && (Array.isArray(properties.logstoreName) || (typeof properties.logstoreName) === 'string')) {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateLength)({
            data: properties.logstoreName.length,
            min: 3,
            max: 63,
          }));
    }
    errors.collect(ros.propertyValidator('logstoreName', ros.validateString)(properties.logstoreName));
    errors.collect(ros.propertyValidator('preserveStorage', ros.validateBoolean)(properties.preserveStorage));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 63,
          }));
    }
    if(properties.projectName && (typeof properties.projectName) !== 'object') {
        errors.collect(ros.propertyValidator('projectName', ros.validateAllowedPattern)({
          data: properties.projectName,
          reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('appendMeta', ros.validateBoolean)(properties.appendMeta));
    if(properties.maxSplitShard && (typeof properties.maxSplitShard) !== 'object') {
        errors.collect(ros.propertyValidator('maxSplitShard', ros.validateRange)({
            data: properties.maxSplitShard,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('maxSplitShard', ros.validateNumber)(properties.maxSplitShard));
    errors.collect(ros.propertyValidator('autoSplit', ros.validateBoolean)(properties.autoSplit));
    errors.collect(ros.propertyValidator('enableTracking', ros.validateBoolean)(properties.enableTracking));
    errors.collect(ros.propertyValidator('encryptConf', RosLogstore_EncryptConfPropertyValidator)(properties.encryptConf));
    if(properties.ttl && (typeof properties.ttl) !== 'object') {
        errors.collect(ros.propertyValidator('ttl', ros.validateRange)({
            data: properties.ttl,
            min: 1,
            max: 3600,
          }));
    }
    errors.collect(ros.propertyValidator('ttl', ros.validateNumber)(properties.ttl));
    if(properties.shardCount && (typeof properties.shardCount) !== 'object') {
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
function rosLogstorePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLogstorePropsValidator(properties).assertSuccess();
    }
    return {
      LogstoreName: ros.stringToRosTemplate(properties.logstoreName),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
      AppendMeta: ros.booleanToRosTemplate(properties.appendMeta),
      AutoSplit: ros.booleanToRosTemplate(properties.autoSplit),
      EnableTracking: ros.booleanToRosTemplate(properties.enableTracking),
      EncryptConf: rosLogstoreEncryptConfPropertyToRosTemplate(properties.encryptConf),
      MaxSplitShard: ros.numberToRosTemplate(properties.maxSplitShard),
      PreserveStorage: ros.booleanToRosTemplate(properties.preserveStorage),
      ShardCount: ros.numberToRosTemplate(properties.shardCount),
      TTL: ros.numberToRosTemplate(properties.ttl),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLS::Logstore`
 */
export class RosLogstore extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Logstore";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute LogstoreName: Logstore name.
     */
    public readonly attrLogstoreName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public logstoreName: string | ros.IResolvable;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
     * Default to false.
     */
    public appendMeta: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoSplit: Whether to automatically split the shard.
     * Default to false.
     */
    public autoSplit: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
     * Default to false.
     */
    public enableTracking: boolean | ros.IResolvable | undefined;

    /**
     * @Property encryptConf: Data encryption config
     */
    public encryptConf: RosLogstore.EncryptConfProperty | ros.IResolvable | undefined;

    /**
     * @Property maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
     * Allowed Values: 1-64.
     */
    public maxSplitShard: number | ros.IResolvable | undefined;

    /**
     * @Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    public preserveStorage: boolean | ros.IResolvable | undefined;

    /**
     * @Property shardCount: The number of Shards.
     * Allowed Values: 1-100, default to 2.
     */
    public shardCount: number | ros.IResolvable | undefined;

    /**
     * @Property ttl: The lifecycle of log in the logstore in days.
     * Allowed Values: 1-3600, default to 30.
     */
    public ttl: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLS::Logstore`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogstoreProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLogstore.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLogstoreName = this.getAtt('LogstoreName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.logstoreName = props.logstoreName;
        this.projectName = props.projectName;
        this.appendMeta = props.appendMeta;
        this.autoSplit = props.autoSplit;
        this.enableTracking = props.enableTracking;
        this.encryptConf = props.encryptConf;
        this.maxSplitShard = props.maxSplitShard;
        this.preserveStorage = props.preserveStorage;
        this.shardCount = props.shardCount;
        this.ttl = props.ttl;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            logstoreName: this.logstoreName,
            projectName: this.projectName,
            appendMeta: this.appendMeta,
            autoSplit: this.autoSplit,
            enableTracking: this.enableTracking,
            encryptConf: this.encryptConf,
            maxSplitShard: this.maxSplitShard,
            preserveStorage: this.preserveStorage,
            shardCount: this.shardCount,
            ttl: this.ttl,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLogstorePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosLogstore {
    /**
     * @stability external
     */
    export interface EncryptConfProperty {
        /**
         * @Property encryptType: The encryption algorithm. The encrypt_type 
     * parameter can be set to only default or m4.
         */
        readonly encryptType: string | ros.IResolvable;
        /**
         * @Property enable: Specifies whether data encryption is enabled.
         */
        readonly enable: boolean | ros.IResolvable;
        /**
         * @Property userCmkInfo: If this parameter is specified, the BYOK key is used. 
     * Otherwise, the service key is used.
         */
        readonly userCmkInfo?: RosLogstore.UserCmkInfoProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EncryptConfProperty`
 *
 * @param properties - the TypeScript properties of a `EncryptConfProperty`
 *
 * @returns the result of the validation.
 */
function RosLogstore_EncryptConfPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('encryptType', ros.requiredValidator)(properties.encryptType));
    errors.collect(ros.propertyValidator('encryptType', ros.validateString)(properties.encryptType));
    errors.collect(ros.propertyValidator('enable', ros.requiredValidator)(properties.enable));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('userCmkInfo', RosLogstore_UserCmkInfoPropertyValidator)(properties.userCmkInfo));
    return errors.wrap('supplied properties not correct for "EncryptConfProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Logstore.EncryptConf` resource
 *
 * @param properties - the TypeScript properties of a `EncryptConfProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Logstore.EncryptConf` resource.
 */
// @ts-ignore TS6133
function rosLogstoreEncryptConfPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLogstore_EncryptConfPropertyValidator(properties).assertSuccess();
    return {
      EncryptType: ros.stringToRosTemplate(properties.encryptType),
      Enable: ros.booleanToRosTemplate(properties.enable),
      UserCmkInfo: rosLogstoreUserCmkInfoPropertyToRosTemplate(properties.userCmkInfo),
    };
}

export namespace RosLogstore {
    /**
     * @stability external
     */
    export interface UserCmkInfoProperty {
        /**
         * @Property cmkKeyId: The ID of the CMK to which the BYOK key belongs, 
     * for example, f5136b95-2420-ab31-xxxxxxxxx.
         */
        readonly cmkKeyId: string | ros.IResolvable;
        /**
         * @Property regionId: The ID of the region where the CMK resides.
         */
        readonly regionId: string | ros.IResolvable;
        /**
         * @Property arn: The ARN of the RAM role. For more information 
     * about how to obtain the ARN of a RAM role, 
     * see Ship log data from Log Service to OSS.
         */
        readonly arn: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `UserCmkInfoProperty`
 *
 * @param properties - the TypeScript properties of a `UserCmkInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosLogstore_UserCmkInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cmkKeyId', ros.requiredValidator)(properties.cmkKeyId));
    errors.collect(ros.propertyValidator('cmkKeyId', ros.validateString)(properties.cmkKeyId));
    errors.collect(ros.propertyValidator('regionId', ros.requiredValidator)(properties.regionId));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('arn', ros.requiredValidator)(properties.arn));
    errors.collect(ros.propertyValidator('arn', ros.validateString)(properties.arn));
    return errors.wrap('supplied properties not correct for "UserCmkInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Logstore.UserCmkInfo` resource
 *
 * @param properties - the TypeScript properties of a `UserCmkInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Logstore.UserCmkInfo` resource.
 */
// @ts-ignore TS6133
function rosLogstoreUserCmkInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLogstore_UserCmkInfoPropertyValidator(properties).assertSuccess();
    return {
      CmkKeyId: ros.stringToRosTemplate(properties.cmkKeyId),
      RegionId: ros.stringToRosTemplate(properties.regionId),
      Arn: ros.stringToRosTemplate(properties.arn),
    };
}

/**
 * Properties for defining a `ALIYUN::SLS::LogtailConfig`
 */
export interface RosLogtailConfigProps {

    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string | ros.IResolvable;

    /**
     * @Property logtailConfigName: Logtail config name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logtailConfigName: string | ros.IResolvable;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property cloneFrom: Clone logtail config data from existing logtail config.
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     */
    readonly cloneFrom?: RosLogtailConfig.CloneFromProperty | ros.IResolvable;

    /**
     * @Property rawConfigData: The format is the same as the response of SLS API GetConfig.
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     * configName, outputType, outputDetail in data will be ignored.For example:
     * {
     *     "configName": "test-logtail-config",
     *     "createTime": 1574843554,
     *     "inputDetail": {
     *         "acceptNoEnoughKeys": false,
     *         "adjustTimezone": false,
     *         "advanced": {
     *             "force_multiconfig": false
     *         },
     *         "autoExtend": true,
     *         "delayAlarmBytes": 0,
     *         "delaySkipBytes": 0,
     *         "discardNonUtf8": false,
     *         "discardUnmatch": false,
     *         "dockerExcludeEnv": {},
     *         "dockerExcludeLabel": {},
     *         "dockerFile": false,
     *         "dockerIncludeEnv": {},
     *         "dockerIncludeLabel": {},
     *         "enableRawLog": false,
     *         "enableTag": false,
     *         "fileEncoding": "utf8",
     *         "filePattern": "test.log*",
     *         "filterKey": [],
     *         "filterRegex": [],
     *         "key": [
     *             "time",
     *             "logger",
     *             "level",
     *             "request_id",
     *             "user_id",
     *             "region_id",
     *             "content"
     *         ],
     *         "localStorage": true,
     *         "logPath": "/var/log/test",
     *         "logTimezone": "",
     *         "logType": "delimiter_log",
     *         "maxDepth": 100,
     *         "maxSendRate": -1,
     *         "mergeType": "topic",
     *         "preserve": true,
     *         "preserveDepth": 1,
     *         "priority": 0,
     *         "quote": "\u0001",
     *         "sendRateExpire": 0,
     *         "sensitive_keys": [],
     *         "separator": ",,,",
     *         "shardHashKey": [],
     *         "tailExisted": false,
     *         "timeFormat": "",
     *         "timeKey": "",
     *         "topicFormat": "none"
     *     },
     *     "inputType": "file",
     *     "lastModifyTime": 1574843554,
     *     "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
     *     "outputDetail": {
     *         "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
     *         "logstoreName": "test-logstore",
     *         "region": "cn-hangzhou"
     *     },
     *     "outputType": "LogService"
     * }
     */
    readonly rawConfigData?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLogtailConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosLogtailConfigProps`
 *
 * @returns the result of the validation.
 */
function RosLogtailConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logtailConfigName', ros.requiredValidator)(properties.logtailConfigName));
    if(properties.logtailConfigName && (Array.isArray(properties.logtailConfigName) || (typeof properties.logtailConfigName) === 'string')) {
        errors.collect(ros.propertyValidator('logtailConfigName', ros.validateLength)({
            data: properties.logtailConfigName.length,
            min: 3,
            max: 63,
          }));
    }
    errors.collect(ros.propertyValidator('logtailConfigName', ros.validateString)(properties.logtailConfigName));
    errors.collect(ros.propertyValidator('logstoreName', ros.requiredValidator)(properties.logstoreName));
    if(properties.logstoreName && (Array.isArray(properties.logstoreName) || (typeof properties.logstoreName) === 'string')) {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateLength)({
            data: properties.logstoreName.length,
            min: 3,
            max: 63,
          }));
    }
    errors.collect(ros.propertyValidator('logstoreName', ros.validateString)(properties.logstoreName));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 63,
          }));
    }
    if(properties.projectName && (typeof properties.projectName) !== 'object') {
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
function rosLogtailConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosLogtailConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::LogtailConfig";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AppliedMachineGroups: Applied machine groups.
     */
    public readonly attrAppliedMachineGroups: ros.IResolvable;

    /**
     * @Attribute Endpoint: Endpoint address.
     */
    public readonly attrEndpoint: ros.IResolvable;

    /**
     * @Attribute LogtailConfigName: Logtail config name.
     */
    public readonly attrLogtailConfigName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public logstoreName: string | ros.IResolvable;

    /**
     * @Property logtailConfigName: Logtail config name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public logtailConfigName: string | ros.IResolvable;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property cloneFrom: Clone logtail config data from existing logtail config.
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     */
    public cloneFrom: RosLogtailConfig.CloneFromProperty | ros.IResolvable | undefined;

    /**
     * @Property rawConfigData: The format is the same as the response of SLS API GetConfig.
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     * configName, outputType, outputDetail in data will be ignored.For example:
     * {
     *     "configName": "test-logtail-config",
     *     "createTime": 1574843554,
     *     "inputDetail": {
     *         "acceptNoEnoughKeys": false,
     *         "adjustTimezone": false,
     *         "advanced": {
     *             "force_multiconfig": false
     *         },
     *         "autoExtend": true,
     *         "delayAlarmBytes": 0,
     *         "delaySkipBytes": 0,
     *         "discardNonUtf8": false,
     *         "discardUnmatch": false,
     *         "dockerExcludeEnv": {},
     *         "dockerExcludeLabel": {},
     *         "dockerFile": false,
     *         "dockerIncludeEnv": {},
     *         "dockerIncludeLabel": {},
     *         "enableRawLog": false,
     *         "enableTag": false,
     *         "fileEncoding": "utf8",
     *         "filePattern": "test.log*",
     *         "filterKey": [],
     *         "filterRegex": [],
     *         "key": [
     *             "time",
     *             "logger",
     *             "level",
     *             "request_id",
     *             "user_id",
     *             "region_id",
     *             "content"
     *         ],
     *         "localStorage": true,
     *         "logPath": "/var/log/test",
     *         "logTimezone": "",
     *         "logType": "delimiter_log",
     *         "maxDepth": 100,
     *         "maxSendRate": -1,
     *         "mergeType": "topic",
     *         "preserve": true,
     *         "preserveDepth": 1,
     *         "priority": 0,
     *         "quote": "\u0001",
     *         "sendRateExpire": 0,
     *         "sensitive_keys": [],
     *         "separator": ",,,",
     *         "shardHashKey": [],
     *         "tailExisted": false,
     *         "timeFormat": "",
     *         "timeKey": "",
     *         "topicFormat": "none"
     *     },
     *     "inputType": "file",
     *     "lastModifyTime": 1574843554,
     *     "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
     *     "outputDetail": {
     *         "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
     *         "logstoreName": "test-logstore",
     *         "region": "cn-hangzhou"
     *     },
     *     "outputType": "LogService"
     * }
     */
    public rawConfigData: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLS::LogtailConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogtailConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLogtailConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppliedMachineGroups = this.getAtt('AppliedMachineGroups');
        this.attrEndpoint = this.getAtt('Endpoint');
        this.attrLogtailConfigName = this.getAtt('LogtailConfigName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.logstoreName = props.logstoreName;
        this.logtailConfigName = props.logtailConfigName;
        this.projectName = props.projectName;
        this.cloneFrom = props.cloneFrom;
        this.rawConfigData = props.rawConfigData;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            logstoreName: this.logstoreName,
            logtailConfigName: this.logtailConfigName,
            projectName: this.projectName,
            cloneFrom: this.cloneFrom,
            rawConfigData: this.rawConfigData,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLogtailConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosLogtailConfig {
    /**
     * @stability external
     */
    export interface CloneFromProperty {
        /**
         * @Property logtailConfigName: Logtail config name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
         */
        readonly logtailConfigName: string | ros.IResolvable;
        /**
         * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
         */
        readonly projectName: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `CloneFromProperty`
 *
 * @param properties - the TypeScript properties of a `CloneFromProperty`
 *
 * @returns the result of the validation.
 */
function RosLogtailConfig_CloneFromPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logtailConfigName', ros.requiredValidator)(properties.logtailConfigName));
    if(properties.logtailConfigName && (Array.isArray(properties.logtailConfigName) || (typeof properties.logtailConfigName) === 'string')) {
        errors.collect(ros.propertyValidator('logtailConfigName', ros.validateLength)({
            data: properties.logtailConfigName.length,
            min: 3,
            max: 63,
          }));
    }
    errors.collect(ros.propertyValidator('logtailConfigName', ros.validateString)(properties.logtailConfigName));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
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
function rosLogtailConfigCloneFromPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLogtailConfig_CloneFromPropertyValidator(properties).assertSuccess();
    return {
      LogtailConfigName: ros.stringToRosTemplate(properties.logtailConfigName),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
    };
}

/**
 * Properties for defining a `ALIYUN::SLS::MachineGroup`
 */
export interface RosMachineGroupProps {

    /**
     * @Property groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
     */
    readonly groupAttribute?: string | ros.IResolvable;

    /**
     * @Property groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * @Property groupType: MachineGroup type, the value is empty or Armory
     */
    readonly groupType?: string | ros.IResolvable;

    /**
     * @Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
     */
    readonly machineIdentifyType?: string | ros.IResolvable;

    /**
     * @Property machineList: The machine tag, the value is ip or userdefined-id.
     */
    readonly machineList?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property projectName: MachineGroup created in project.
     */
    readonly projectName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMachineGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosMachineGroupProps`
 *
 * @returns the result of the validation.
 */
function RosMachineGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('machineList', ros.listValidator(ros.validateAny))(properties.machineList));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    if(properties.groupType && (typeof properties.groupType) !== 'object') {
        errors.collect(ros.propertyValidator('groupType', ros.validateAllowedValues)({
          data: properties.groupType,
          allowedValues: ["","Armory"],
        }));
    }
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    if(properties.machineIdentifyType && (typeof properties.machineIdentifyType) !== 'object') {
        errors.collect(ros.propertyValidator('machineIdentifyType', ros.validateAllowedValues)({
          data: properties.machineIdentifyType,
          allowedValues: ["ip","userdefined"],
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
function rosMachineGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosMachineGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::MachineGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GroupName: GroupName of SLS.
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * @Attribute ProjectName: ProjectName of SLS.
     */
    public readonly attrProjectName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
     */
    public groupAttribute: string | ros.IResolvable | undefined;

    /**
     * @Property groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property groupType: MachineGroup type, the value is empty or Armory
     */
    public groupType: string | ros.IResolvable | undefined;

    /**
     * @Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
     */
    public machineIdentifyType: string | ros.IResolvable | undefined;

    /**
     * @Property machineList: The machine tag, the value is ip or userdefined-id.
     */
    public machineList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property projectName: MachineGroup created in project.
     */
    public projectName: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLS::MachineGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMachineGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMachineGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupName = this.getAtt('GroupName');
        this.attrProjectName = this.getAtt('ProjectName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupAttribute = props.groupAttribute;
        this.groupName = props.groupName;
        this.groupType = props.groupType;
        this.machineIdentifyType = props.machineIdentifyType;
        this.machineList = props.machineList;
        this.projectName = props.projectName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupAttribute: this.groupAttribute,
            groupName: this.groupName,
            groupType: this.groupType,
            machineIdentifyType: this.machineIdentifyType,
            machineList: this.machineList,
            projectName: this.projectName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMachineGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::SLS::MetricStore`
 */
export interface RosMetricStoreProps {

    /**
     * @Property logstoreName: Metric store name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string | ros.IResolvable;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    readonly preserveStorage?: boolean | ros.IResolvable;

    /**
     * @Property shardCount: The number of Shards.
     * Allowed Values: 1-10, default to 2.
     */
    readonly shardCount?: number | ros.IResolvable;

    /**
     * @Property ttl: The lifecycle of log in the metrice store in days.
     * Allowed Values: 1-3000, default to 30.
     */
    readonly ttl?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMetricStoreProps`
 *
 * @param properties - the TypeScript properties of a `RosMetricStoreProps`
 *
 * @returns the result of the validation.
 */
function RosMetricStorePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logstoreName', ros.requiredValidator)(properties.logstoreName));
    if(properties.logstoreName && (Array.isArray(properties.logstoreName) || (typeof properties.logstoreName) === 'string')) {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateLength)({
            data: properties.logstoreName.length,
            min: 3,
            max: 63,
          }));
    }
    errors.collect(ros.propertyValidator('logstoreName', ros.validateString)(properties.logstoreName));
    errors.collect(ros.propertyValidator('preserveStorage', ros.validateBoolean)(properties.preserveStorage));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 63,
          }));
    }
    if(properties.projectName && (typeof properties.projectName) !== 'object') {
        errors.collect(ros.propertyValidator('projectName', ros.validateAllowedPattern)({
          data: properties.projectName,
          reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    if(properties.ttl && (typeof properties.ttl) !== 'object') {
        errors.collect(ros.propertyValidator('ttl', ros.validateRange)({
            data: properties.ttl,
            min: 1,
            max: 3000,
          }));
    }
    errors.collect(ros.propertyValidator('ttl', ros.validateNumber)(properties.ttl));
    if(properties.shardCount && (typeof properties.shardCount) !== 'object') {
        errors.collect(ros.propertyValidator('shardCount', ros.validateRange)({
            data: properties.shardCount,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('shardCount', ros.validateNumber)(properties.shardCount));
    return errors.wrap('supplied properties not correct for "RosMetricStoreProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::MetricStore` resource
 *
 * @param properties - the TypeScript properties of a `RosMetricStoreProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::MetricStore` resource.
 */
// @ts-ignore TS6133
function rosMetricStorePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMetricStorePropsValidator(properties).assertSuccess();
    }
    return {
      LogstoreName: ros.stringToRosTemplate(properties.logstoreName),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
      PreserveStorage: ros.booleanToRosTemplate(properties.preserveStorage),
      ShardCount: ros.numberToRosTemplate(properties.shardCount),
      TTL: ros.numberToRosTemplate(properties.ttl),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLS::MetricStore`
 */
export class RosMetricStore extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::MetricStore";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute LogstoreName: Metric store name.
     */
    public readonly attrLogstoreName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property logstoreName: Metric store name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public logstoreName: string | ros.IResolvable;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    public preserveStorage: boolean | ros.IResolvable | undefined;

    /**
     * @Property shardCount: The number of Shards.
     * Allowed Values: 1-10, default to 2.
     */
    public shardCount: number | ros.IResolvable | undefined;

    /**
     * @Property ttl: The lifecycle of log in the metrice store in days.
     * Allowed Values: 1-3000, default to 30.
     */
    public ttl: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLS::MetricStore`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMetricStoreProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMetricStore.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLogstoreName = this.getAtt('LogstoreName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.logstoreName = props.logstoreName;
        this.projectName = props.projectName;
        this.preserveStorage = props.preserveStorage;
        this.shardCount = props.shardCount;
        this.ttl = props.ttl;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            logstoreName: this.logstoreName,
            projectName: this.projectName,
            preserveStorage: this.preserveStorage,
            shardCount: this.shardCount,
            ttl: this.ttl,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMetricStorePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::SLS::Project`
 */
export interface RosProjectProps {

    /**
     * @Property name: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property description: Project description: <>'"\ is not supported, up to 64 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosProject.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the result of the validation.
 */
function RosProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosProject_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if(properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 3,
            max: 63,
          }));
    }
    if(properties.name && (typeof properties.name) !== 'object') {
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
function rosProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      Description: ros.stringToRosTemplate(properties.description),
      Tags: ros.listMapper(rosProjectTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLS::Project`
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Project";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Name: Project name.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property description: Project description: <>'"\ is not supported, up to 64 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosProject.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::SLS::Project`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.description = props.description;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            description: this.description,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosProject {
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
function RosProject_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Project.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Project.Tags` resource.
 */
// @ts-ignore TS6133
function rosProjectTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProject_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::SLS::Savedsearch`
 */
export interface RosSavedsearchProps {

    /**
     * @Property detail:
     */
    readonly detail: RosSavedsearch.DetailProperty | ros.IResolvable;

    /**
     * @Property project: Project name
     */
    readonly project: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSavedsearchProps`
 *
 * @param properties - the TypeScript properties of a `RosSavedsearchProps`
 *
 * @returns the result of the validation.
 */
function RosSavedsearchPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosSavedsearchPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
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
export class RosSavedsearch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Savedsearch";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SavedsearchName: Savedsearch name.
     */
    public readonly attrSavedsearchName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property detail:
     */
    public detail: RosSavedsearch.DetailProperty | ros.IResolvable;

    /**
     * @Property project: Project name
     */
    public project: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::SLS::Savedsearch`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSavedsearchProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSavedsearch.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSavedsearchName = this.getAtt('SavedsearchName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.detail = props.detail;
        this.project = props.project;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            detail: this.detail,
            project: this.project,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSavedsearchPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSavedsearch {
    /**
     * @stability external
     */
    export interface DetailProperty {
        /**
         * @Property searchQuery: Check sentence.
         */
        readonly searchQuery: string | ros.IResolvable;
        /**
         * @Property logstore: Logstore name.
         */
        readonly logstore: string | ros.IResolvable;
        /**
         * @Property displayName: Display name.
         */
        readonly displayName?: string | ros.IResolvable;
        /**
         * @Property savedsearchName: Savedsearch name.
         */
        readonly savedsearchName: string | ros.IResolvable;
        /**
         * @Property topic: Topic name
         */
        readonly topic: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DetailProperty`
 *
 * @param properties - the TypeScript properties of a `DetailProperty`
 *
 * @returns the result of the validation.
 */
function RosSavedsearch_DetailPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosSavedsearchDetailPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSavedsearch_DetailPropertyValidator(properties).assertSuccess();
    return {
      SearchQuery: ros.stringToRosTemplate(properties.searchQuery),
      Logstore: ros.stringToRosTemplate(properties.logstore),
      DisplayName: ros.stringToRosTemplate(properties.displayName),
      SavedsearchName: ros.stringToRosTemplate(properties.savedsearchName),
      Topic: ros.stringToRosTemplate(properties.topic),
    };
}
