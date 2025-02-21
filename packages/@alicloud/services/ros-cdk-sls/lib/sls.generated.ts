// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAlert`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
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
      'Detail': rosAlertDetailPropertyToRosTemplate(properties.detail),
      'Project': ros.stringToRosTemplate(properties.project),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Alert`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Alert` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-alert
 */
export class RosAlert extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Alert";

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
    export interface AnnotationsProperty {
        /**
         * @Property value:
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key:
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AnnotationsProperty`
 *
 * @param properties - the TypeScript properties of a `AnnotationsProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_AnnotationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "AnnotationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.Annotations` resource
 *
 * @param properties - the TypeScript properties of a `AnnotationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.Annotations` resource.
 */
// @ts-ignore TS6133
function rosAlertAnnotationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAlert_AnnotationsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosAlert {
    /**
     * @stability external
     */
    export interface ConfigurationProperty {
        /**
         * @Property throttling: Notification interval, default is no interval.
         */
        readonly throttling?: string | ros.IResolvable;
        /**
         * @Property condition: The condition that is required to trigger an alert. 
     * Log Service triggers an alert if the trigger condition is met. 
     * For example, you can set the trigger condition to pv%100 > 0 && uv > 0.
         */
        readonly condition?: string | ros.IResolvable;
        /**
         * @Property autoAnnotation:
         */
        readonly autoAnnotation?: boolean | ros.IResolvable;
        /**
         * @Property severityConfigurations: The list of severity configurations.
         */
        readonly severityConfigurations?: Array<RosAlert.SeverityConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property noDataFire: Whether to trigger an alarm if there is no data, the default is false.
         */
        readonly noDataFire?: boolean | ros.IResolvable;
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
         * @Property muteUntil:
         */
        readonly muteUntil?: number | ros.IResolvable;
        /**
         * @Property dashboard: Alarm associated dashboard.
         */
        readonly dashboard: string | ros.IResolvable;
        /**
         * @Property labels: The list of tags.
         */
        readonly labels?: Array<RosAlert.LabelsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property groupConfiguration:
         */
        readonly groupConfiguration?: RosAlert.GroupConfigurationProperty | ros.IResolvable;
        /**
         * @Property noDataSeverity: The alarm level when there is no data to trigger the alarm. Valid values:
     * 2: Report
     * 4: Low
     * 6: Medium
     * 8: High
     * 10: Critical.
         */
        readonly noDataSeverity?: number | ros.IResolvable;
        /**
         * @Property type: Configuration type.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property annotations: The list of annotations.
         */
        readonly annotations?: Array<RosAlert.AnnotationsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property version: Configuration version.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property joinConfigurations: The list of Join conditions when multiple tables are joined. For example, 3 tables join, and 2 joinConfigurations are passed in.
         */
        readonly joinConfigurations?: Array<RosAlert.JoinConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property policyConfiguration:
         */
        readonly policyConfiguration?: RosAlert.PolicyConfigurationProperty | ros.IResolvable;
        /**
         * @Property queryList:
         */
        readonly queryList: Array<RosAlert.QueryListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property sendResolved: Whether to notify when the alarm is restored, the default is false.
         */
        readonly sendResolved?: boolean | ros.IResolvable;
        /**
         * @Property threshold: Trigger threshold.
         */
        readonly threshold?: number | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('throttling', ros.validateString)(properties.throttling));
    errors.collect(ros.propertyValidator('condition', ros.validateString)(properties.condition));
    errors.collect(ros.propertyValidator('autoAnnotation', ros.validateBoolean)(properties.autoAnnotation));
    errors.collect(ros.propertyValidator('severityConfigurations', ros.listValidator(RosAlert_SeverityConfigurationsPropertyValidator))(properties.severityConfigurations));
    errors.collect(ros.propertyValidator('noDataFire', ros.validateBoolean)(properties.noDataFire));
    errors.collect(ros.propertyValidator('notificationList', ros.listValidator(RosAlert_NotificationListPropertyValidator))(properties.notificationList));
    errors.collect(ros.propertyValidator('notifyThreshold', ros.validateNumber)(properties.notifyThreshold));
    errors.collect(ros.propertyValidator('muteUntil', ros.validateNumber)(properties.muteUntil));
    errors.collect(ros.propertyValidator('dashboard', ros.requiredValidator)(properties.dashboard));
    errors.collect(ros.propertyValidator('dashboard', ros.validateString)(properties.dashboard));
    errors.collect(ros.propertyValidator('labels', ros.listValidator(RosAlert_LabelsPropertyValidator))(properties.labels));
    errors.collect(ros.propertyValidator('groupConfiguration', RosAlert_GroupConfigurationPropertyValidator)(properties.groupConfiguration));
    if(properties.noDataSeverity && (typeof properties.noDataSeverity) !== 'object') {
        errors.collect(ros.propertyValidator('noDataSeverity', ros.validateAllowedValues)({
          data: properties.noDataSeverity,
          allowedValues: [2,4,6,8,10],
        }));
    }
    errors.collect(ros.propertyValidator('noDataSeverity', ros.validateNumber)(properties.noDataSeverity));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('annotations', ros.listValidator(RosAlert_AnnotationsPropertyValidator))(properties.annotations));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('joinConfigurations', ros.listValidator(RosAlert_JoinConfigurationsPropertyValidator))(properties.joinConfigurations));
    errors.collect(ros.propertyValidator('policyConfiguration', RosAlert_PolicyConfigurationPropertyValidator)(properties.policyConfiguration));
    errors.collect(ros.propertyValidator('queryList', ros.requiredValidator)(properties.queryList));
    errors.collect(ros.propertyValidator('queryList', ros.listValidator(RosAlert_QueryListPropertyValidator))(properties.queryList));
    errors.collect(ros.propertyValidator('sendResolved', ros.validateBoolean)(properties.sendResolved));
    errors.collect(ros.propertyValidator('threshold', ros.validateNumber)(properties.threshold));
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
      'Throttling': ros.stringToRosTemplate(properties.throttling),
      'Condition': ros.stringToRosTemplate(properties.condition),
      'AutoAnnotation': ros.booleanToRosTemplate(properties.autoAnnotation),
      'SeverityConfigurations': ros.listMapper(rosAlertSeverityConfigurationsPropertyToRosTemplate)(properties.severityConfigurations),
      'NoDataFire': ros.booleanToRosTemplate(properties.noDataFire),
      'NotificationList': ros.listMapper(rosAlertNotificationListPropertyToRosTemplate)(properties.notificationList),
      'NotifyThreshold': ros.numberToRosTemplate(properties.notifyThreshold),
      'MuteUntil': ros.numberToRosTemplate(properties.muteUntil),
      'Dashboard': ros.stringToRosTemplate(properties.dashboard),
      'Labels': ros.listMapper(rosAlertLabelsPropertyToRosTemplate)(properties.labels),
      'GroupConfiguration': rosAlertGroupConfigurationPropertyToRosTemplate(properties.groupConfiguration),
      'NoDataSeverity': ros.numberToRosTemplate(properties.noDataSeverity),
      'Type': ros.stringToRosTemplate(properties.type),
      'Annotations': ros.listMapper(rosAlertAnnotationsPropertyToRosTemplate)(properties.annotations),
      'Version': ros.stringToRosTemplate(properties.version),
      'JoinConfigurations': ros.listMapper(rosAlertJoinConfigurationsPropertyToRosTemplate)(properties.joinConfigurations),
      'PolicyConfiguration': rosAlertPolicyConfigurationPropertyToRosTemplate(properties.policyConfiguration),
      'QueryList': ros.listMapper(rosAlertQueryListPropertyToRosTemplate)(properties.queryList),
      'SendResolved': ros.booleanToRosTemplate(properties.sendResolved),
      'Threshold': ros.numberToRosTemplate(properties.threshold),
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
      'Type': ros.stringToRosTemplate(properties.type),
      'Description': ros.stringToRosTemplate(properties.description),
      'Configuration': rosAlertConfigurationPropertyToRosTemplate(properties.configuration),
      'State': ros.stringToRosTemplate(properties.state),
      'Schedule': rosAlertSchedulePropertyToRosTemplate(properties.schedule),
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosAlert {
    /**
     * @stability external
     */
    export interface EvalConditionProperty {
        /**
         * @Property condition: It is triggered when any piece of data in the result of judging the Cartesian product satisfies the Condition. After grouping, it indicates the data trigger condition for each group, and an empty string indicates that any data row is satisfied.
         */
        readonly condition?: string | ros.IResolvable;
        /**
         * @Property countCondition: Alarm expression, indicating how much data meets the alarm condition.
         */
        readonly countCondition?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EvalConditionProperty`
 *
 * @param properties - the TypeScript properties of a `EvalConditionProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_EvalConditionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.validateString)(properties.condition));
    errors.collect(ros.propertyValidator('countCondition', ros.validateString)(properties.countCondition));
    return errors.wrap('supplied properties not correct for "EvalConditionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.EvalCondition` resource
 *
 * @param properties - the TypeScript properties of a `EvalConditionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.EvalCondition` resource.
 */
// @ts-ignore TS6133
function rosAlertEvalConditionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAlert_EvalConditionPropertyValidator(properties).assertSuccess();
    return {
      'Condition': ros.stringToRosTemplate(properties.condition),
      'CountCondition': ros.stringToRosTemplate(properties.countCondition),
    };
}

export namespace RosAlert {
    /**
     * @stability external
     */
    export interface GroupConfigurationProperty {
        /**
         * @Property type: Grouping type.
     * no_group: no grouping
     * labels_auto: autocustom: custom.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property fields: The fields of group. Fill in the empty list when not group. No fill when group automatically. Fill required when group in custom.
         */
        readonly fields?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `GroupConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `GroupConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_GroupConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["no_group","labels_auto","custom"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('fields', ros.listValidator(ros.validateString))(properties.fields));
    return errors.wrap('supplied properties not correct for "GroupConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.GroupConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `GroupConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.GroupConfiguration` resource.
 */
// @ts-ignore TS6133
function rosAlertGroupConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAlert_GroupConfigurationPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Fields': ros.listMapper(ros.stringToRosTemplate)(properties.fields),
    };
}

export namespace RosAlert {
    /**
     * @stability external
     */
    export interface JoinConfigurationsProperty {
        /**
         * @Property condition: Condition for a set operation. Not required when using Cartesian product.
         */
        readonly condition?: string | ros.IResolvable;
        /**
         * @Property type: The type of set operation join.
         */
        readonly type: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `JoinConfigurationsProperty`
 *
 * @param properties - the TypeScript properties of a `JoinConfigurationsProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_JoinConfigurationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('condition', ros.validateString)(properties.condition));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["cross_join","inner_join","left_join","right_join","full_join","left_exclude","right_exclude","concat","no_join"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    return errors.wrap('supplied properties not correct for "JoinConfigurationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.JoinConfigurations` resource
 *
 * @param properties - the TypeScript properties of a `JoinConfigurationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.JoinConfigurations` resource.
 */
// @ts-ignore TS6133
function rosAlertJoinConfigurationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAlert_JoinConfigurationsPropertyValidator(properties).assertSuccess();
    return {
      'Condition': ros.stringToRosTemplate(properties.condition),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

export namespace RosAlert {
    /**
     * @stability external
     */
    export interface LabelsProperty {
        /**
         * @Property value:
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key:
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LabelsProperty`
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_LabelsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "LabelsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.Labels` resource
 *
 * @param properties - the TypeScript properties of a `LabelsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.Labels` resource.
 */
// @ts-ignore TS6133
function rosAlertLabelsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAlert_LabelsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
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
         * @Property headers:
         */
        readonly headers?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property emailList:
         */
        readonly emailList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property method:
         */
        readonly method?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('headers', ros.hashValidator(ros.validateAny))(properties.headers));
    errors.collect(ros.propertyValidator('emailList', ros.listValidator(ros.validateAny))(properties.emailList));
    errors.collect(ros.propertyValidator('method', ros.validateString)(properties.method));
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
      'Type': ros.stringToRosTemplate(properties.type),
      'MobileList': ros.listMapper(ros.objectToRosTemplate)(properties.mobileList),
      'ServiceUri': ros.stringToRosTemplate(properties.serviceUri),
      'Content': ros.stringToRosTemplate(properties.content),
      'Headers': ros.hashMapper(ros.objectToRosTemplate)(properties.headers),
      'EmailList': ros.listMapper(ros.objectToRosTemplate)(properties.emailList),
      'Method': ros.stringToRosTemplate(properties.method),
    };
}

export namespace RosAlert {
    /**
     * @stability external
     */
    export interface PolicyConfigurationProperty {
        /**
         * @Property alertPolicyId: The ID of alert policy.
         */
        readonly alertPolicyId?: string | ros.IResolvable;
        /**
         * @Property actionPolicyId: The ID of action policy. It is useful when an alert policy references a dynamic action policy.
         */
        readonly actionPolicyId?: string | ros.IResolvable;
        /**
         * @Property useDefault:
         */
        readonly useDefault?: boolean | ros.IResolvable;
        /**
         * @Property repeatInterval: Repeat interval. The format is number with suffix s\/m\/h.
         */
        readonly repeatInterval?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PolicyConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `PolicyConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_PolicyConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('alertPolicyId', ros.validateString)(properties.alertPolicyId));
    errors.collect(ros.propertyValidator('actionPolicyId', ros.validateString)(properties.actionPolicyId));
    errors.collect(ros.propertyValidator('useDefault', ros.validateBoolean)(properties.useDefault));
    errors.collect(ros.propertyValidator('repeatInterval', ros.validateString)(properties.repeatInterval));
    return errors.wrap('supplied properties not correct for "PolicyConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.PolicyConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `PolicyConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.PolicyConfiguration` resource.
 */
// @ts-ignore TS6133
function rosAlertPolicyConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAlert_PolicyConfigurationPropertyValidator(properties).assertSuccess();
    return {
      'AlertPolicyId': ros.stringToRosTemplate(properties.alertPolicyId),
      'ActionPolicyId': ros.stringToRosTemplate(properties.actionPolicyId),
      'UseDefault': ros.booleanToRosTemplate(properties.useDefault),
      'RepeatInterval': ros.stringToRosTemplate(properties.repeatInterval),
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
        readonly logStore?: string | ros.IResolvable;
        /**
         * @Property start:
         */
        readonly start: string | ros.IResolvable;
        /**
         * @Property timeSpanType:
         */
        readonly timeSpanType: string | ros.IResolvable;
        /**
         * @Property powerSqlMode:
         */
        readonly powerSqlMode?: string | ros.IResolvable;
        /**
         * @Property store: When StoreType is log or metric, it indicates the LogStore to be queried.
     * When StoreType is meta, it indicates the ResourceName to be queried.
         */
        readonly store?: string | ros.IResolvable;
        /**
         * @Property dashboardId: The ID of associated dashboard.
         */
        readonly dashboardId?: string | ros.IResolvable;
        /**
         * @Property roleArn: ARN used by role access.
         */
        readonly roleArn?: string | ros.IResolvable;
        /**
         * @Property storeType: Log store type. Valid values:
     * log: sls query analysis statement
     * metric: sls time series data
     * meta: query metastore.
         */
        readonly storeType?: string | ros.IResolvable;
        /**
         * @Property project:
         */
        readonly project?: string | ros.IResolvable;
        /**
         * @Property region:
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property end:
         */
        readonly end: string | ros.IResolvable;
        /**
         * @Property chartTitle:
         */
        readonly chartTitle?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('logStore', ros.validateString)(properties.logStore));
    errors.collect(ros.propertyValidator('start', ros.requiredValidator)(properties.start));
    errors.collect(ros.propertyValidator('start', ros.validateString)(properties.start));
    errors.collect(ros.propertyValidator('timeSpanType', ros.requiredValidator)(properties.timeSpanType));
    errors.collect(ros.propertyValidator('timeSpanType', ros.validateString)(properties.timeSpanType));
    errors.collect(ros.propertyValidator('powerSqlMode', ros.validateString)(properties.powerSqlMode));
    errors.collect(ros.propertyValidator('store', ros.validateString)(properties.store));
    errors.collect(ros.propertyValidator('dashboardId', ros.validateString)(properties.dashboardId));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    if(properties.storeType && (typeof properties.storeType) !== 'object') {
        errors.collect(ros.propertyValidator('storeType', ros.validateAllowedValues)({
          data: properties.storeType,
          allowedValues: ["log","metric","meta"],
        }));
    }
    errors.collect(ros.propertyValidator('storeType', ros.validateString)(properties.storeType));
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('end', ros.requiredValidator)(properties.end));
    errors.collect(ros.propertyValidator('end', ros.validateString)(properties.end));
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
      'Query': ros.stringToRosTemplate(properties.query),
      'LogStore': ros.stringToRosTemplate(properties.logStore),
      'Start': ros.stringToRosTemplate(properties.start),
      'TimeSpanType': ros.stringToRosTemplate(properties.timeSpanType),
      'PowerSqlMode': ros.stringToRosTemplate(properties.powerSqlMode),
      'Store': ros.stringToRosTemplate(properties.store),
      'DashboardId': ros.stringToRosTemplate(properties.dashboardId),
      'RoleArn': ros.stringToRosTemplate(properties.roleArn),
      'StoreType': ros.stringToRosTemplate(properties.storeType),
      'Project': ros.stringToRosTemplate(properties.project),
      'Region': ros.stringToRosTemplate(properties.region),
      'End': ros.stringToRosTemplate(properties.end),
      'ChartTitle': ros.stringToRosTemplate(properties.chartTitle),
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
      'DayOfWeek': ros.numberToRosTemplate(properties.dayOfWeek),
      'Type': ros.stringToRosTemplate(properties.type),
      'RunImmediately': ros.booleanToRosTemplate(properties.runImmediately),
      'Hour': ros.numberToRosTemplate(properties.hour),
      'CronExpression': ros.stringToRosTemplate(properties.cronExpression),
      'Delay': ros.numberToRosTemplate(properties.delay),
      'Interval': ros.stringToRosTemplate(properties.interval),
    };
}

export namespace RosAlert {
    /**
     * @stability external
     */
    export interface SeverityConfigurationsProperty {
        /**
         * @Property severity: The alarm level when there is no data to trigger the alarm. Valid values:
     * 2: Report
     * 4: Low
     * 6: Medium
     * 8: High
     * 10: Critical.
         */
        readonly severity: number | ros.IResolvable;
        /**
         * @Property evalCondition:
         */
        readonly evalCondition?: RosAlert.EvalConditionProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SeverityConfigurationsProperty`
 *
 * @param properties - the TypeScript properties of a `SeverityConfigurationsProperty`
 *
 * @returns the result of the validation.
 */
function RosAlert_SeverityConfigurationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('severity', ros.requiredValidator)(properties.severity));
    errors.collect(ros.propertyValidator('severity', ros.validateNumber)(properties.severity));
    errors.collect(ros.propertyValidator('evalCondition', RosAlert_EvalConditionPropertyValidator)(properties.evalCondition));
    return errors.wrap('supplied properties not correct for "SeverityConfigurationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.SeverityConfigurations` resource
 *
 * @param properties - the TypeScript properties of a `SeverityConfigurationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Alert.SeverityConfigurations` resource.
 */
// @ts-ignore TS6133
function rosAlertSeverityConfigurationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAlert_SeverityConfigurationsPropertyValidator(properties).assertSuccess();
    return {
      'Severity': ros.numberToRosTemplate(properties.severity),
      'EvalCondition': rosAlertEvalConditionPropertyToRosTemplate(properties.evalCondition),
    };
}

/**
 * Properties for defining a `RosApplyConfigToMachineGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup
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
      'ConfigName': ros.stringToRosTemplate(properties.configName),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::ApplyConfigToMachineGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApplyConfigToMachineGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-applyconfigtomachinegroup
 */
export class RosApplyConfigToMachineGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::ApplyConfigToMachineGroup";

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
 * Properties for defining a `RosAudit`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
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
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
      'VariableMap': rosAuditVariableMapPropertyToRosTemplate(properties.variableMap),
      'MultiAccount': ros.listMapper(ros.stringToRosTemplate)(properties.multiAccount),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Audit`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Audit` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-audit
 */
export class RosAudit extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Audit";

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
         * @Property vpcFlowEnabled: Flow log of VPC. Default false.
         */
        readonly vpcFlowEnabled?: boolean | ros.IResolvable;
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
         * @Property rdsEnabled: RDS audit log switch. Default true.
         */
        readonly rdsEnabled?: boolean | ros.IResolvable;
        /**
         * @Property redisSyncTtl: Redis sync to center switch. Default 180.
         */
        readonly redisSyncTtl?: number | ros.IResolvable;
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
         * @Property albAccessEnabled: Specifies whether to collect ALB access log. Default false.
         */
        readonly albAccessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property bastionTtl: Fort machine centralized ttl. Default 180.
         */
        readonly bastionTtl?: number | ros.IResolvable;
        /**
         * @Property albSyncEnabled: ALB synchronization to central configuration switch. Default true.
         */
        readonly albSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsSlowEnabled: RDS slow log switch. Default false.
         */
        readonly rdsSlowEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasDnsQueryEnabled: Specifies whether to collect DNS query logs. Default false.
         */
        readonly sasDnsQueryEnabled?: boolean | ros.IResolvable;
        /**
         * @Property polardbErrorTtl: PolarDB error log TTL. Default 180.
         */
        readonly polardbErrorTtl?: number | ros.IResolvable;
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
         * @Property albAccessTtl: ALB access log TTL. Default 180.
         */
        readonly albAccessTtl?: number | ros.IResolvable;
        /**
         * @Property sasSnapshotPortEnabled: Cloud Security Center Port Snapshot Switch. Default false.
         */
        readonly sasSnapshotPortEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudconfigChangeEnabled: CloudConfig change log switch. Default false.
         */
        readonly cloudconfigChangeEnabled?: boolean | ros.IResolvable;
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
         * @Property vpcFlowCollectionPolicy: VPC flow log collection policy script. Default empty.
         */
        readonly vpcFlowCollectionPolicy?: string | ros.IResolvable;
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
         * @Property ddosBgpAccessEnabled: Anti-DDoS (Origin) access log switch. Default false.
         */
        readonly ddosBgpAccessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property rdsSlowCollectionPolicy: Rds slow collection policy.
         */
        readonly rdsSlowCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property vpcSyncTtl: VPC synchronization to central TTL. Default 180.
         */
        readonly vpcSyncTtl?: number | ros.IResolvable;
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
         * @Property idaasMngTtl: IDaaS management log TTL. Default 180.
         */
        readonly idaasMngTtl?: number | ros.IResolvable;
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
         * @Property sasHttpEnabled: Cloud Security Center WEB access log switch. Default false.
         */
        readonly sasHttpEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ossMeteringPolicySetting: Oss metering policy setting.
         */
        readonly ossMeteringPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ossMeteringEnabled: OSS metering log switch.Default true.
         */
        readonly ossMeteringEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudfirewallEnabled: Cloud firewall log switch. Default true.
         */
        readonly cloudfirewallEnabled?: boolean | ros.IResolvable;
        /**
         * @Property dnsIntranetEnabled: Specifies whether to collect intranet Alibaba Cloud DNS (DNS) logs. Default false.
         */
        readonly dnsIntranetEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudfirewallVpcTtl: The retention period of Cloud Firewall VPC firewall traffic logs in the central Logstore. Default 180.
         */
        readonly cloudfirewallVpcTtl?: number | ros.IResolvable;
        /**
         * @Property albAccessCollectionPolicy: ALB access log collection policy script. Default empty.
         */
        readonly albAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property dnsSyncTtl: The retention period of intranet DNS logs in the central Logstore. Default 180.
         */
        readonly dnsSyncTtl?: number | ros.IResolvable;
        /**
         * @Property slbAccessTiEnabled: Threat Intelligence of SLB.
         */
        readonly slbAccessTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ddosDipAccessEnabled: Anti-DDoS Premium access log switch. Default false.
         */
        readonly ddosDipAccessEnabled?: boolean | ros.IResolvable;
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
         * @Property rdsErrorEnabled: Specifies whether to collect RDS error log. Default false.
         */
        readonly rdsErrorEnabled?: boolean | ros.IResolvable;
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
         * @Property rdsErrorTtl: RDS error log TTL. Default 180.
         */
        readonly rdsErrorTtl?: number | ros.IResolvable;
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
         * @Property vpcFlowTtl: Regional flow log TTL of VPC. Default 7.
         */
        readonly vpcFlowTtl?: number | ros.IResolvable;
        /**
         * @Property idaasUserTtl: IDaaS user behavior log. Default 180.
         */
        readonly idaasUserTtl?: number | ros.IResolvable;
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
         * @Property idaasMngEnabled: Specifies whether to collect IDaaS management log. Default false.
         */
        readonly idaasMngEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ddosCooAccessCollectionPolicy: Ddos audit collection policy
         */
        readonly ddosCooAccessCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property ossMeteringTiEnabled: Threat Intelligence of oss metering.
         */
        readonly ossMeteringTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SAuditEnabled: K8s access log switch. Default false.
         */
        readonly k8SAuditEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudconfigChangeTtl: CloudConfig change log ttl. Default 180.
         */
        readonly cloudconfigChangeTtl?: number | ros.IResolvable;
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
         * @Property dnsIntranetCollectionPolicy: DNS intranet log collection policy script. Default empty.
         */
        readonly dnsIntranetCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property vpcSyncEnabled: VPC synchronization to central configuration switch. Default true.
         */
        readonly vpcSyncEnabled?: boolean | ros.IResolvable;
        /**
         * @Property ddosCooAccessTiEnabled: Threat Intelligence of Ddos.
         */
        readonly ddosCooAccessTiEnabled?: boolean | ros.IResolvable;
        /**
         * @Property appconnectOpCollectionPolicy: Appconnect audit collection policy
         */
        readonly appconnectOpCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property ddosDipAccessTtl: Anti-DDoS Premium access log ttl. Default 180.
         */
        readonly ddosDipAccessTtl?: number | ros.IResolvable;
        /**
         * @Property cloudfirewallVpcEnabled: Specifies whether to collect VPC firewall traffic logs from Cloud Firewall. Default false.
         */
        readonly cloudfirewallVpcEnabled?: boolean | ros.IResolvable;
        /**
         * @Property appconnectOpPolicySetting: Appconnect audit policy setting.
         */
        readonly appconnectOpPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property idaasUserCollectionPolicy: IDaaS user behavior log collection policy script. Default empty.
         */
        readonly idaasUserCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property polardbErrorEnabled: Specifies whether to collect PolarDB error log. Default false.
         */
        readonly polardbErrorEnabled?: boolean | ros.IResolvable;
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
         * @Property albSyncTtl: ALB synchronization to central TTL. Default 180.
         */
        readonly albSyncTtl?: number | ros.IResolvable;
        /**
         * @Property sasTtl: Cloud Security Center centralized ttl. Default 180.
         */
        readonly sasTtl?: number | ros.IResolvable;
        /**
         * @Property idaasMngCollectionPolicy: IDaaS management log collection policy script. Default empty.
         */
        readonly idaasMngCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property actiontrailTtl: Actiontrail action log TTL.
         */
        readonly actiontrailTtl?: number | ros.IResolvable;
        /**
         * @Property rdsPerfCollectionPolicy: Rds perf collection policy.
         */
        readonly rdsPerfCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property ddosBgpAccessTtl: Anti-DDoS (Origin) access log ttl. Default 180.
         */
        readonly ddosBgpAccessTtl?: number | ros.IResolvable;
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
         * @Property cloudconfigNoncomTtl: CloudConfig non-compliance log ttl. Default 180.
         */
        readonly cloudconfigNoncomTtl?: number | ros.IResolvable;
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
         * @Property rdsErrorCollectionPolicy: RDS error log collection policy script. Default empty.
         */
        readonly rdsErrorCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property drdsAuditPolicySetting: DRDS audit policy setting.
         */
        readonly drdsAuditPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property idaasUserEnabled: Specifies whether to collect IDaaS user behavior log. Default false.
         */
        readonly idaasUserEnabled?: boolean | ros.IResolvable;
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
         * @Property polardbSlowEnabled: POLARDB slow log switch. Default false.
         */
        readonly polardbSlowEnabled?: boolean | ros.IResolvable;
        /**
         * @Property k8SEventTtl: K8s event log centralization ttl. Default 180.
         */
        readonly k8SEventTtl?: number | ros.IResolvable;
        /**
         * @Property sasSecurityAlertEnabled: Cloud Security Center Security Alarm Log Switch .Default false.
         */
        readonly sasSecurityAlertEnabled?: boolean | ros.IResolvable;
        /**
         * @Property drdsAuditEnabled: DRDS audit log switch. Default true.
         */
        readonly drdsAuditEnabled?: boolean | ros.IResolvable;
        /**
         * @Property slbAccessEnabled: Slb log switch. Default true.
         */
        readonly slbAccessEnabled?: boolean | ros.IResolvable;
        /**
         * @Property cloudconfigNoncomEnabled: CloudConfig non-compliance log switch. Default false.
         */
        readonly cloudconfigNoncomEnabled?: boolean | ros.IResolvable;
        /**
         * @Property sasNetworkEnabled: Cloud security center network connection log switch. Default false.
         */
        readonly sasNetworkEnabled?: boolean | ros.IResolvable;
        /**
         * @Property dnsIntranetTtl: The retention period of intranet DNS logs in the regional Logstore. Default 7.
         */
        readonly dnsIntranetTtl?: number | ros.IResolvable;
        /**
         * @Property k8SIngressPolicySetting: K8s Ingress policy setting.
         */
        readonly k8SIngressPolicySetting?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ossMeteringCollectionPolicy: Oss metering collection policy.
         */
        readonly ossMeteringCollectionPolicy?: string | ros.IResolvable;
        /**
         * @Property polardbErrorCollectionPolicy: PolarDB error log collection policy script. Default empty.
         */
        readonly polardbErrorCollectionPolicy?: string | ros.IResolvable;
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
         * @Property dnsSyncEnabled: Specifies whether to synchronize DNS intranet logs to the central project. Default true.
         */
        readonly dnsSyncEnabled?: boolean | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('vpcFlowEnabled', ros.validateBoolean)(properties.vpcFlowEnabled));
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
    errors.collect(ros.propertyValidator('rdsEnabled', ros.validateBoolean)(properties.rdsEnabled));
    errors.collect(ros.propertyValidator('redisSyncTtl', ros.validateNumber)(properties.redisSyncTtl));
    errors.collect(ros.propertyValidator('sasSessionEnabled', ros.validateBoolean)(properties.sasSessionEnabled));
    errors.collect(ros.propertyValidator('rdsAuditPolicySetting', ros.listValidator(ros.validateAny))(properties.rdsAuditPolicySetting));
    errors.collect(ros.propertyValidator('ddosCooAccessTtl', ros.validateNumber)(properties.ddosCooAccessTtl));
    errors.collect(ros.propertyValidator('albAccessEnabled', ros.validateBoolean)(properties.albAccessEnabled));
    errors.collect(ros.propertyValidator('bastionTtl', ros.validateNumber)(properties.bastionTtl));
    errors.collect(ros.propertyValidator('albSyncEnabled', ros.validateBoolean)(properties.albSyncEnabled));
    errors.collect(ros.propertyValidator('rdsSlowEnabled', ros.validateBoolean)(properties.rdsSlowEnabled));
    errors.collect(ros.propertyValidator('sasDnsQueryEnabled', ros.validateBoolean)(properties.sasDnsQueryEnabled));
    errors.collect(ros.propertyValidator('polardbErrorTtl', ros.validateNumber)(properties.polardbErrorTtl));
    errors.collect(ros.propertyValidator('wafAccessCollectionPolicy', ros.validateString)(properties.wafAccessCollectionPolicy));
    errors.collect(ros.propertyValidator('k8SAuditTtl', ros.validateNumber)(properties.k8SAuditTtl));
    errors.collect(ros.propertyValidator('polardbTtl', ros.validateNumber)(properties.polardbTtl));
    errors.collect(ros.propertyValidator('drdsAuditCollectionPolicy', ros.validateString)(properties.drdsAuditCollectionPolicy));
    errors.collect(ros.propertyValidator('slbAccessCollectionPolicy', ros.validateString)(properties.slbAccessCollectionPolicy));
    errors.collect(ros.propertyValidator('albAccessTtl', ros.validateNumber)(properties.albAccessTtl));
    errors.collect(ros.propertyValidator('sasSnapshotPortEnabled', ros.validateBoolean)(properties.sasSnapshotPortEnabled));
    errors.collect(ros.propertyValidator('cloudconfigChangeEnabled', ros.validateBoolean)(properties.cloudconfigChangeEnabled));
    errors.collect(ros.propertyValidator('rdsSlowTtl', ros.validateNumber)(properties.rdsSlowTtl));
    errors.collect(ros.propertyValidator('polardbEnabled', ros.validateBoolean)(properties.polardbEnabled));
    errors.collect(ros.propertyValidator('sasSnapshotProcessEnabled', ros.validateBoolean)(properties.sasSnapshotProcessEnabled));
    errors.collect(ros.propertyValidator('actiontrailTiEnabled', ros.validateBoolean)(properties.actiontrailTiEnabled));
    errors.collect(ros.propertyValidator('nasTiEnabled', ros.validateBoolean)(properties.nasTiEnabled));
    errors.collect(ros.propertyValidator('appconnectTiEnabled', ros.validateBoolean)(properties.appconnectTiEnabled));
    errors.collect(ros.propertyValidator('vpcFlowCollectionPolicy', ros.validateString)(properties.vpcFlowCollectionPolicy));
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
    errors.collect(ros.propertyValidator('ddosBgpAccessEnabled', ros.validateBoolean)(properties.ddosBgpAccessEnabled));
    errors.collect(ros.propertyValidator('rdsSlowCollectionPolicy', ros.validateString)(properties.rdsSlowCollectionPolicy));
    errors.collect(ros.propertyValidator('vpcSyncTtl', ros.validateNumber)(properties.vpcSyncTtl));
    errors.collect(ros.propertyValidator('actiontrailOpenapiCollectionPolicy', ros.validateString)(properties.actiontrailOpenapiCollectionPolicy));
    errors.collect(ros.propertyValidator('rdsPerfPolicySetting', ros.listValidator(ros.validateAny))(properties.rdsPerfPolicySetting));
    errors.collect(ros.propertyValidator('cloudfirewallAccessPolicySetting', ros.listValidator(ros.validateAny))(properties.cloudfirewallAccessPolicySetting));
    errors.collect(ros.propertyValidator('idaasMngTtl', ros.validateNumber)(properties.idaasMngTtl));
    errors.collect(ros.propertyValidator('ossAccessEnabled', ros.validateBoolean)(properties.ossAccessEnabled));
    errors.collect(ros.propertyValidator('cpsCallbackPolicySetting', ros.listValidator(ros.validateAny))(properties.cpsCallbackPolicySetting));
    errors.collect(ros.propertyValidator('slbAccessTtl', ros.validateNumber)(properties.slbAccessTtl));
    errors.collect(ros.propertyValidator('wafAccessPolicySetting', ros.listValidator(ros.validateAny))(properties.wafAccessPolicySetting));
    errors.collect(ros.propertyValidator('polardbPerfTiEnabled', ros.validateBoolean)(properties.polardbPerfTiEnabled));
    errors.collect(ros.propertyValidator('sasLocalDnsEnabled', ros.validateBoolean)(properties.sasLocalDnsEnabled));
    errors.collect(ros.propertyValidator('ossAccessTtl', ros.validateNumber)(properties.ossAccessTtl));
    errors.collect(ros.propertyValidator('sasHttpEnabled', ros.validateBoolean)(properties.sasHttpEnabled));
    errors.collect(ros.propertyValidator('ossMeteringPolicySetting', ros.listValidator(ros.validateAny))(properties.ossMeteringPolicySetting));
    errors.collect(ros.propertyValidator('ossMeteringEnabled', ros.validateBoolean)(properties.ossMeteringEnabled));
    errors.collect(ros.propertyValidator('cloudfirewallEnabled', ros.validateBoolean)(properties.cloudfirewallEnabled));
    errors.collect(ros.propertyValidator('dnsIntranetEnabled', ros.validateBoolean)(properties.dnsIntranetEnabled));
    errors.collect(ros.propertyValidator('cloudfirewallVpcTtl', ros.validateNumber)(properties.cloudfirewallVpcTtl));
    errors.collect(ros.propertyValidator('albAccessCollectionPolicy', ros.validateString)(properties.albAccessCollectionPolicy));
    errors.collect(ros.propertyValidator('dnsSyncTtl', ros.validateNumber)(properties.dnsSyncTtl));
    errors.collect(ros.propertyValidator('slbAccessTiEnabled', ros.validateBoolean)(properties.slbAccessTiEnabled));
    errors.collect(ros.propertyValidator('ddosDipAccessEnabled', ros.validateBoolean)(properties.ddosDipAccessEnabled));
    errors.collect(ros.propertyValidator('drdsSyncTtl', ros.validateNumber)(properties.drdsSyncTtl));
    errors.collect(ros.propertyValidator('k8SEventPolicySetting', ros.listValidator(ros.validateAny))(properties.k8SEventPolicySetting));
    errors.collect(ros.propertyValidator('nasTtl', ros.validateNumber)(properties.nasTtl));
    errors.collect(ros.propertyValidator('sasLoginEnabled', ros.validateBoolean)(properties.sasLoginEnabled));
    errors.collect(ros.propertyValidator('wafTtl', ros.validateNumber)(properties.wafTtl));
    errors.collect(ros.propertyValidator('nasAuditPolicySetting', ros.listValidator(ros.validateAny))(properties.nasAuditPolicySetting));
    errors.collect(ros.propertyValidator('rdsTtl', ros.validateNumber)(properties.rdsTtl));
    errors.collect(ros.propertyValidator('k8SIngressEnabled', ros.validateBoolean)(properties.k8SIngressEnabled));
    errors.collect(ros.propertyValidator('rdsErrorEnabled', ros.validateBoolean)(properties.rdsErrorEnabled));
    errors.collect(ros.propertyValidator('cloudfirewallTiEnabled', ros.validateBoolean)(properties.cloudfirewallTiEnabled));
    errors.collect(ros.propertyValidator('k8SEventCollectionPolicy', ros.validateString)(properties.k8SEventCollectionPolicy));
    errors.collect(ros.propertyValidator('actiontrailEnabled', ros.validateBoolean)(properties.actiontrailEnabled));
    errors.collect(ros.propertyValidator('drdsSyncEnabled', ros.validateBoolean)(properties.drdsSyncEnabled));
    errors.collect(ros.propertyValidator('apigatewayEnabled', ros.validateBoolean)(properties.apigatewayEnabled));
    errors.collect(ros.propertyValidator('sasCrackEnabled', ros.validateBoolean)(properties.sasCrackEnabled));
    errors.collect(ros.propertyValidator('cpsTiEnabled', ros.validateBoolean)(properties.cpsTiEnabled));
    errors.collect(ros.propertyValidator('rdsErrorTtl', ros.validateNumber)(properties.rdsErrorTtl));
    errors.collect(ros.propertyValidator('k8SEventEnabled', ros.validateBoolean)(properties.k8SEventEnabled));
    errors.collect(ros.propertyValidator('ossSyncTtl', ros.validateNumber)(properties.ossSyncTtl));
    errors.collect(ros.propertyValidator('rdsPerfTtl', ros.validateNumber)(properties.rdsPerfTtl));
    errors.collect(ros.propertyValidator('sasSnapshotAccountEnabled', ros.validateBoolean)(properties.sasSnapshotAccountEnabled));
    errors.collect(ros.propertyValidator('slbSyncEnabled', ros.validateBoolean)(properties.slbSyncEnabled));
    errors.collect(ros.propertyValidator('bastionTiEnabled', ros.validateBoolean)(properties.bastionTiEnabled));
    errors.collect(ros.propertyValidator('ossAccessPolicySetting', ros.listValidator(ros.validateAny))(properties.ossAccessPolicySetting));
    errors.collect(ros.propertyValidator('sasTiEnabled', ros.validateBoolean)(properties.sasTiEnabled));
    errors.collect(ros.propertyValidator('vpcFlowTtl', ros.validateNumber)(properties.vpcFlowTtl));
    errors.collect(ros.propertyValidator('idaasUserTtl', ros.validateNumber)(properties.idaasUserTtl));
    errors.collect(ros.propertyValidator('drdsAuditTtl', ros.validateNumber)(properties.drdsAuditTtl));
    errors.collect(ros.propertyValidator('redisAuditCollectionPolicy', ros.validateString)(properties.redisAuditCollectionPolicy));
    errors.collect(ros.propertyValidator('polardbPerfEnabled', ros.validateBoolean)(properties.polardbPerfEnabled));
    errors.collect(ros.propertyValidator('idaasMngEnabled', ros.validateBoolean)(properties.idaasMngEnabled));
    errors.collect(ros.propertyValidator('ddosCooAccessCollectionPolicy', ros.validateString)(properties.ddosCooAccessCollectionPolicy));
    errors.collect(ros.propertyValidator('ossMeteringTiEnabled', ros.validateBoolean)(properties.ossMeteringTiEnabled));
    errors.collect(ros.propertyValidator('k8SAuditEnabled', ros.validateBoolean)(properties.k8SAuditEnabled));
    errors.collect(ros.propertyValidator('cloudconfigChangeTtl', ros.validateNumber)(properties.cloudconfigChangeTtl));
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
    errors.collect(ros.propertyValidator('dnsIntranetCollectionPolicy', ros.validateString)(properties.dnsIntranetCollectionPolicy));
    errors.collect(ros.propertyValidator('vpcSyncEnabled', ros.validateBoolean)(properties.vpcSyncEnabled));
    errors.collect(ros.propertyValidator('ddosCooAccessTiEnabled', ros.validateBoolean)(properties.ddosCooAccessTiEnabled));
    errors.collect(ros.propertyValidator('appconnectOpCollectionPolicy', ros.validateString)(properties.appconnectOpCollectionPolicy));
    errors.collect(ros.propertyValidator('ddosDipAccessTtl', ros.validateNumber)(properties.ddosDipAccessTtl));
    errors.collect(ros.propertyValidator('cloudfirewallVpcEnabled', ros.validateBoolean)(properties.cloudfirewallVpcEnabled));
    errors.collect(ros.propertyValidator('appconnectOpPolicySetting', ros.listValidator(ros.validateAny))(properties.appconnectOpPolicySetting));
    errors.collect(ros.propertyValidator('idaasUserCollectionPolicy', ros.validateString)(properties.idaasUserCollectionPolicy));
    errors.collect(ros.propertyValidator('polardbErrorEnabled', ros.validateBoolean)(properties.polardbErrorEnabled));
    errors.collect(ros.propertyValidator('polardbTiEnabled', ros.validateBoolean)(properties.polardbTiEnabled));
    errors.collect(ros.propertyValidator('redisAuditTtl', ros.validateNumber)(properties.redisAuditTtl));
    errors.collect(ros.propertyValidator('rdsSlowTiEnabled', ros.validateBoolean)(properties.rdsSlowTiEnabled));
    errors.collect(ros.propertyValidator('albSyncTtl', ros.validateNumber)(properties.albSyncTtl));
    errors.collect(ros.propertyValidator('sasTtl', ros.validateNumber)(properties.sasTtl));
    errors.collect(ros.propertyValidator('idaasMngCollectionPolicy', ros.validateString)(properties.idaasMngCollectionPolicy));
    errors.collect(ros.propertyValidator('actiontrailTtl', ros.validateNumber)(properties.actiontrailTtl));
    errors.collect(ros.propertyValidator('rdsPerfCollectionPolicy', ros.validateString)(properties.rdsPerfCollectionPolicy));
    errors.collect(ros.propertyValidator('ddosBgpAccessTtl', ros.validateNumber)(properties.ddosBgpAccessTtl));
    errors.collect(ros.propertyValidator('ossAccessCollectionPolicy', ros.validateString)(properties.ossAccessCollectionPolicy));
    errors.collect(ros.propertyValidator('redisAuditEnabled', ros.validateBoolean)(properties.redisAuditEnabled));
    errors.collect(ros.propertyValidator('wafTiEnabled', ros.validateBoolean)(properties.wafTiEnabled));
    errors.collect(ros.propertyValidator('cloudconfigNoncomTtl', ros.validateNumber)(properties.cloudconfigNoncomTtl));
    errors.collect(ros.propertyValidator('redisSyncEnabled', ros.validateBoolean)(properties.redisSyncEnabled));
    errors.collect(ros.propertyValidator('k8SAuditTiEnabled', ros.validateBoolean)(properties.k8SAuditTiEnabled));
    errors.collect(ros.propertyValidator('sasProcessEnabled', ros.validateBoolean)(properties.sasProcessEnabled));
    errors.collect(ros.propertyValidator('redisAuditPolicySetting', ros.listValidator(ros.validateAny))(properties.redisAuditPolicySetting));
    errors.collect(ros.propertyValidator('appconnectEnabled', ros.validateBoolean)(properties.appconnectEnabled));
    errors.collect(ros.propertyValidator('rdsErrorCollectionPolicy', ros.validateString)(properties.rdsErrorCollectionPolicy));
    errors.collect(ros.propertyValidator('drdsAuditPolicySetting', ros.listValidator(ros.validateAny))(properties.drdsAuditPolicySetting));
    errors.collect(ros.propertyValidator('idaasUserEnabled', ros.validateBoolean)(properties.idaasUserEnabled));
    errors.collect(ros.propertyValidator('k8SEventTiEnabled', ros.validateBoolean)(properties.k8SEventTiEnabled));
    errors.collect(ros.propertyValidator('polardbAuditCollectionPolicy', ros.validateString)(properties.polardbAuditCollectionPolicy));
    errors.collect(ros.propertyValidator('ddosCooAccessPolicySetting', ros.listValidator(ros.validateAny))(properties.ddosCooAccessPolicySetting));
    errors.collect(ros.propertyValidator('polardbSlowEnabled', ros.validateBoolean)(properties.polardbSlowEnabled));
    errors.collect(ros.propertyValidator('k8SEventTtl', ros.validateNumber)(properties.k8SEventTtl));
    errors.collect(ros.propertyValidator('sasSecurityAlertEnabled', ros.validateBoolean)(properties.sasSecurityAlertEnabled));
    errors.collect(ros.propertyValidator('drdsAuditEnabled', ros.validateBoolean)(properties.drdsAuditEnabled));
    errors.collect(ros.propertyValidator('slbAccessEnabled', ros.validateBoolean)(properties.slbAccessEnabled));
    errors.collect(ros.propertyValidator('cloudconfigNoncomEnabled', ros.validateBoolean)(properties.cloudconfigNoncomEnabled));
    errors.collect(ros.propertyValidator('sasNetworkEnabled', ros.validateBoolean)(properties.sasNetworkEnabled));
    errors.collect(ros.propertyValidator('dnsIntranetTtl', ros.validateNumber)(properties.dnsIntranetTtl));
    errors.collect(ros.propertyValidator('k8SIngressPolicySetting', ros.listValidator(ros.validateAny))(properties.k8SIngressPolicySetting));
    errors.collect(ros.propertyValidator('ossMeteringCollectionPolicy', ros.validateString)(properties.ossMeteringCollectionPolicy));
    errors.collect(ros.propertyValidator('polardbErrorCollectionPolicy', ros.validateString)(properties.polardbErrorCollectionPolicy));
    errors.collect(ros.propertyValidator('polardbSlowTiEnabled', ros.validateBoolean)(properties.polardbSlowTiEnabled));
    errors.collect(ros.propertyValidator('polardbSlowTtl', ros.validateNumber)(properties.polardbSlowTtl));
    errors.collect(ros.propertyValidator('ossAccessTiEnabled', ros.validateBoolean)(properties.ossAccessTiEnabled));
    errors.collect(ros.propertyValidator('polardbPerfCollectionPolicy', ros.validateString)(properties.polardbPerfCollectionPolicy));
    errors.collect(ros.propertyValidator('actiontrailOpenapiPolicySetting', ros.listValidator(ros.validateAny))(properties.actiontrailOpenapiPolicySetting));
    errors.collect(ros.propertyValidator('apigatewayTiEnabled', ros.validateBoolean)(properties.apigatewayTiEnabled));
    errors.collect(ros.propertyValidator('bastionAuditPolicySetting', ros.listValidator(ros.validateAny))(properties.bastionAuditPolicySetting));
    errors.collect(ros.propertyValidator('slbAccessPolicySetting', ros.listValidator(ros.validateAny))(properties.slbAccessPolicySetting));
    errors.collect(ros.propertyValidator('rdsTiEnabled', ros.validateBoolean)(properties.rdsTiEnabled));
    errors.collect(ros.propertyValidator('dnsSyncEnabled', ros.validateBoolean)(properties.dnsSyncEnabled));
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
      'PolardbPerfPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.polardbPerfPolicySetting),
      'WafEnabled': ros.booleanToRosTemplate(properties.wafEnabled),
      'VpcFlowEnabled': ros.booleanToRosTemplate(properties.vpcFlowEnabled),
      'RdsPerfEnabled': ros.booleanToRosTemplate(properties.rdsPerfEnabled),
      'CpsCallbackCollectionPolicy': ros.stringToRosTemplate(properties.cpsCallbackCollectionPolicy),
      'RedisAuditTiEnabled': ros.booleanToRosTemplate(properties.redisAuditTiEnabled),
      'RdsPerfTiEnabled': ros.booleanToRosTemplate(properties.rdsPerfTiEnabled),
      'RdsSlowPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.rdsSlowPolicySetting),
      'K8sIngressTtl': ros.numberToRosTemplate(properties.k8SIngressTtl),
      'OssSyncEnabled': ros.booleanToRosTemplate(properties.ossSyncEnabled),
      'RdsAuditCollectionPolicy': ros.stringToRosTemplate(properties.rdsAuditCollectionPolicy),
      'BastionAuditCollectionPolicy': ros.stringToRosTemplate(properties.bastionAuditCollectionPolicy),
      'BastionEnabled': ros.booleanToRosTemplate(properties.bastionEnabled),
      'RdsEnabled': ros.booleanToRosTemplate(properties.rdsEnabled),
      'RedisSyncTtl': ros.numberToRosTemplate(properties.redisSyncTtl),
      'SasSessionEnabled': ros.booleanToRosTemplate(properties.sasSessionEnabled),
      'RdsAuditPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.rdsAuditPolicySetting),
      'DdosCooAccessTtl': ros.numberToRosTemplate(properties.ddosCooAccessTtl),
      'AlbAccessEnabled': ros.booleanToRosTemplate(properties.albAccessEnabled),
      'BastionTtl': ros.numberToRosTemplate(properties.bastionTtl),
      'AlbSyncEnabled': ros.booleanToRosTemplate(properties.albSyncEnabled),
      'RdsSlowEnabled': ros.booleanToRosTemplate(properties.rdsSlowEnabled),
      'SasDnsQueryEnabled': ros.booleanToRosTemplate(properties.sasDnsQueryEnabled),
      'PolardbErrorTtl': ros.numberToRosTemplate(properties.polardbErrorTtl),
      'WafAccessCollectionPolicy': ros.stringToRosTemplate(properties.wafAccessCollectionPolicy),
      'K8sAuditTtl': ros.numberToRosTemplate(properties.k8SAuditTtl),
      'PolardbTtl': ros.numberToRosTemplate(properties.polardbTtl),
      'DrdsAuditCollectionPolicy': ros.stringToRosTemplate(properties.drdsAuditCollectionPolicy),
      'SlbAccessCollectionPolicy': ros.stringToRosTemplate(properties.slbAccessCollectionPolicy),
      'AlbAccessTtl': ros.numberToRosTemplate(properties.albAccessTtl),
      'SasSnapshotPortEnabled': ros.booleanToRosTemplate(properties.sasSnapshotPortEnabled),
      'CloudconfigChangeEnabled': ros.booleanToRosTemplate(properties.cloudconfigChangeEnabled),
      'RdsSlowTtl': ros.numberToRosTemplate(properties.rdsSlowTtl),
      'PolardbEnabled': ros.booleanToRosTemplate(properties.polardbEnabled),
      'SasSnapshotProcessEnabled': ros.booleanToRosTemplate(properties.sasSnapshotProcessEnabled),
      'ActiontrailTiEnabled': ros.booleanToRosTemplate(properties.actiontrailTiEnabled),
      'NasTiEnabled': ros.booleanToRosTemplate(properties.nasTiEnabled),
      'AppconnectTiEnabled': ros.booleanToRosTemplate(properties.appconnectTiEnabled),
      'VpcFlowCollectionPolicy': ros.stringToRosTemplate(properties.vpcFlowCollectionPolicy),
      'CpsTtl': ros.numberToRosTemplate(properties.cpsTtl),
      'SlbSyncTtl': ros.numberToRosTemplate(properties.slbSyncTtl),
      'CloudfirewallAccessCollectionPolicy': ros.stringToRosTemplate(properties.cloudfirewallAccessCollectionPolicy),
      'DdosCooAccessEnabled': ros.booleanToRosTemplate(properties.ddosCooAccessEnabled),
      'K8sIngressTiEnabled': ros.booleanToRosTemplate(properties.k8SIngressTiEnabled),
      'DrdsAuditTiEnabled': ros.booleanToRosTemplate(properties.drdsAuditTiEnabled),
      'SasSecurityVulEnabled': ros.booleanToRosTemplate(properties.sasSecurityVulEnabled),
      'PolardbSlowPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.polardbSlowPolicySetting),
      'K8sIngressCollectionPolicy': ros.stringToRosTemplate(properties.k8SIngressCollectionPolicy),
      'ApigatewayTtl': ros.numberToRosTemplate(properties.apigatewayTtl),
      'CpsEnabled': ros.booleanToRosTemplate(properties.cpsEnabled),
      'DdosBgpAccessEnabled': ros.booleanToRosTemplate(properties.ddosBgpAccessEnabled),
      'RdsSlowCollectionPolicy': ros.stringToRosTemplate(properties.rdsSlowCollectionPolicy),
      'VpcSyncTtl': ros.numberToRosTemplate(properties.vpcSyncTtl),
      'ActiontrailOpenapiCollectionPolicy': ros.stringToRosTemplate(properties.actiontrailOpenapiCollectionPolicy),
      'RdsPerfPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.rdsPerfPolicySetting),
      'CloudfirewallAccessPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.cloudfirewallAccessPolicySetting),
      'IdaasMngTtl': ros.numberToRosTemplate(properties.idaasMngTtl),
      'OssAccessEnabled': ros.booleanToRosTemplate(properties.ossAccessEnabled),
      'CpsCallbackPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.cpsCallbackPolicySetting),
      'SlbAccessTtl': ros.numberToRosTemplate(properties.slbAccessTtl),
      'WafAccessPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.wafAccessPolicySetting),
      'PolardbPerfTiEnabled': ros.booleanToRosTemplate(properties.polardbPerfTiEnabled),
      'SasLocalDnsEnabled': ros.booleanToRosTemplate(properties.sasLocalDnsEnabled),
      'OssAccessTtl': ros.numberToRosTemplate(properties.ossAccessTtl),
      'SasHttpEnabled': ros.booleanToRosTemplate(properties.sasHttpEnabled),
      'OssMeteringPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.ossMeteringPolicySetting),
      'OssMeteringEnabled': ros.booleanToRosTemplate(properties.ossMeteringEnabled),
      'CloudfirewallEnabled': ros.booleanToRosTemplate(properties.cloudfirewallEnabled),
      'DnsIntranetEnabled': ros.booleanToRosTemplate(properties.dnsIntranetEnabled),
      'CloudfirewallVpcTtl': ros.numberToRosTemplate(properties.cloudfirewallVpcTtl),
      'AlbAccessCollectionPolicy': ros.stringToRosTemplate(properties.albAccessCollectionPolicy),
      'DnsSyncTtl': ros.numberToRosTemplate(properties.dnsSyncTtl),
      'SlbAccessTiEnabled': ros.booleanToRosTemplate(properties.slbAccessTiEnabled),
      'DdosDipAccessEnabled': ros.booleanToRosTemplate(properties.ddosDipAccessEnabled),
      'DrdsSyncTtl': ros.numberToRosTemplate(properties.drdsSyncTtl),
      'K8sEventPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.k8SEventPolicySetting),
      'NasTtl': ros.numberToRosTemplate(properties.nasTtl),
      'SasLoginEnabled': ros.booleanToRosTemplate(properties.sasLoginEnabled),
      'WafTtl': ros.numberToRosTemplate(properties.wafTtl),
      'NasAuditPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.nasAuditPolicySetting),
      'RdsTtl': ros.numberToRosTemplate(properties.rdsTtl),
      'K8sIngressEnabled': ros.booleanToRosTemplate(properties.k8SIngressEnabled),
      'RdsErrorEnabled': ros.booleanToRosTemplate(properties.rdsErrorEnabled),
      'CloudfirewallTiEnabled': ros.booleanToRosTemplate(properties.cloudfirewallTiEnabled),
      'K8sEventCollectionPolicy': ros.stringToRosTemplate(properties.k8SEventCollectionPolicy),
      'ActiontrailEnabled': ros.booleanToRosTemplate(properties.actiontrailEnabled),
      'DrdsSyncEnabled': ros.booleanToRosTemplate(properties.drdsSyncEnabled),
      'ApigatewayEnabled': ros.booleanToRosTemplate(properties.apigatewayEnabled),
      'SasCrackEnabled': ros.booleanToRosTemplate(properties.sasCrackEnabled),
      'CpsTiEnabled': ros.booleanToRosTemplate(properties.cpsTiEnabled),
      'RdsErrorTtl': ros.numberToRosTemplate(properties.rdsErrorTtl),
      'K8sEventEnabled': ros.booleanToRosTemplate(properties.k8SEventEnabled),
      'OssSyncTtl': ros.numberToRosTemplate(properties.ossSyncTtl),
      'RdsPerfTtl': ros.numberToRosTemplate(properties.rdsPerfTtl),
      'SasSnapshotAccountEnabled': ros.booleanToRosTemplate(properties.sasSnapshotAccountEnabled),
      'SlbSyncEnabled': ros.booleanToRosTemplate(properties.slbSyncEnabled),
      'BastionTiEnabled': ros.booleanToRosTemplate(properties.bastionTiEnabled),
      'OssAccessPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.ossAccessPolicySetting),
      'SasTiEnabled': ros.booleanToRosTemplate(properties.sasTiEnabled),
      'VpcFlowTtl': ros.numberToRosTemplate(properties.vpcFlowTtl),
      'IdaasUserTtl': ros.numberToRosTemplate(properties.idaasUserTtl),
      'DrdsAuditTtl': ros.numberToRosTemplate(properties.drdsAuditTtl),
      'RedisAuditCollectionPolicy': ros.stringToRosTemplate(properties.redisAuditCollectionPolicy),
      'PolardbPerfEnabled': ros.booleanToRosTemplate(properties.polardbPerfEnabled),
      'IdaasMngEnabled': ros.booleanToRosTemplate(properties.idaasMngEnabled),
      'DdosCooAccessCollectionPolicy': ros.stringToRosTemplate(properties.ddosCooAccessCollectionPolicy),
      'OssMeteringTiEnabled': ros.booleanToRosTemplate(properties.ossMeteringTiEnabled),
      'K8sAuditEnabled': ros.booleanToRosTemplate(properties.k8SAuditEnabled),
      'CloudconfigChangeTtl ': ros.numberToRosTemplate(properties.cloudconfigChangeTtl),
      'PolardbPerfTtl': ros.numberToRosTemplate(properties.polardbPerfTtl),
      'ApigatewayAccessPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.apigatewayAccessPolicySetting),
      'NasEnabled': ros.booleanToRosTemplate(properties.nasEnabled),
      'SasDnsEnabled': ros.booleanToRosTemplate(properties.sasDnsEnabled),
      'NasAuditCollectionPolicy': ros.stringToRosTemplate(properties.nasAuditCollectionPolicy),
      'PolardbSlowCollectionPolicy': ros.stringToRosTemplate(properties.polardbSlowCollectionPolicy),
      'AppconnectTtl': ros.numberToRosTemplate(properties.appconnectTtl),
      'OssMeteringTtl': ros.numberToRosTemplate(properties.ossMeteringTtl),
      'SasSecurityHcEnabled': ros.booleanToRosTemplate(properties.sasSecurityHcEnabled),
      'K8sAuditCollectionPolicy': ros.stringToRosTemplate(properties.k8SAuditCollectionPolicy),
      'DnsIntranetCollectionPolicy': ros.stringToRosTemplate(properties.dnsIntranetCollectionPolicy),
      'VpcSyncEnabled': ros.booleanToRosTemplate(properties.vpcSyncEnabled),
      'DdosCooAccessTiEnabled': ros.booleanToRosTemplate(properties.ddosCooAccessTiEnabled),
      'AppconnectOpCollectionPolicy': ros.stringToRosTemplate(properties.appconnectOpCollectionPolicy),
      'DdosDipAccessTtl': ros.numberToRosTemplate(properties.ddosDipAccessTtl),
      'CloudfirewallVpcEnabled': ros.booleanToRosTemplate(properties.cloudfirewallVpcEnabled),
      'AppconnectOpPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.appconnectOpPolicySetting),
      'IdaasUserCollectionPolicy': ros.stringToRosTemplate(properties.idaasUserCollectionPolicy),
      'PolardbErrorEnabled': ros.booleanToRosTemplate(properties.polardbErrorEnabled),
      'PolardbTiEnabled': ros.booleanToRosTemplate(properties.polardbTiEnabled),
      'RedisAuditTtl': ros.numberToRosTemplate(properties.redisAuditTtl),
      'RdsSlowTiEnabled': ros.booleanToRosTemplate(properties.rdsSlowTiEnabled),
      'AlbSyncTtl': ros.numberToRosTemplate(properties.albSyncTtl),
      'SasTtl': ros.numberToRosTemplate(properties.sasTtl),
      'IdaasMngCollectionPolicy': ros.stringToRosTemplate(properties.idaasMngCollectionPolicy),
      'ActiontrailTtl': ros.numberToRosTemplate(properties.actiontrailTtl),
      'RdsPerfCollectionPolicy': ros.stringToRosTemplate(properties.rdsPerfCollectionPolicy),
      'DdosBgpAccessTtl': ros.numberToRosTemplate(properties.ddosBgpAccessTtl),
      'OssAccessCollectionPolicy': ros.stringToRosTemplate(properties.ossAccessCollectionPolicy),
      'RedisAuditEnabled': ros.booleanToRosTemplate(properties.redisAuditEnabled),
      'WafTiEnabled': ros.booleanToRosTemplate(properties.wafTiEnabled),
      'CloudconfigNoncomTtl ': ros.numberToRosTemplate(properties.cloudconfigNoncomTtl),
      'RedisSyncEnabled': ros.booleanToRosTemplate(properties.redisSyncEnabled),
      'K8sAuditTiEnabled': ros.booleanToRosTemplate(properties.k8SAuditTiEnabled),
      'SasProcessEnabled': ros.booleanToRosTemplate(properties.sasProcessEnabled),
      'RedisAuditPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.redisAuditPolicySetting),
      'AppconnectEnabled': ros.booleanToRosTemplate(properties.appconnectEnabled),
      'RdsErrorCollectionPolicy': ros.stringToRosTemplate(properties.rdsErrorCollectionPolicy),
      'DrdsAuditPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.drdsAuditPolicySetting),
      'IdaasUserEnabled': ros.booleanToRosTemplate(properties.idaasUserEnabled),
      'K8sEventTiEnabled': ros.booleanToRosTemplate(properties.k8SEventTiEnabled),
      'PolardbAuditCollectionPolicy': ros.stringToRosTemplate(properties.polardbAuditCollectionPolicy),
      'DdosCooAccessPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.ddosCooAccessPolicySetting),
      'PolardbSlowEnabled': ros.booleanToRosTemplate(properties.polardbSlowEnabled),
      'K8sEventTtl': ros.numberToRosTemplate(properties.k8SEventTtl),
      'SasSecurityAlertEnabled': ros.booleanToRosTemplate(properties.sasSecurityAlertEnabled),
      'DrdsAuditEnabled': ros.booleanToRosTemplate(properties.drdsAuditEnabled),
      'SlbAccessEnabled': ros.booleanToRosTemplate(properties.slbAccessEnabled),
      'CloudconfigNoncomEnabled': ros.booleanToRosTemplate(properties.cloudconfigNoncomEnabled),
      'SasNetworkEnabled': ros.booleanToRosTemplate(properties.sasNetworkEnabled),
      'DnsIntranetTtl': ros.numberToRosTemplate(properties.dnsIntranetTtl),
      'K8sIngressPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.k8SIngressPolicySetting),
      'OssMeteringCollectionPolicy': ros.stringToRosTemplate(properties.ossMeteringCollectionPolicy),
      'PolardbErrorCollectionPolicy': ros.stringToRosTemplate(properties.polardbErrorCollectionPolicy),
      'PolardbSlowTiEnabled': ros.booleanToRosTemplate(properties.polardbSlowTiEnabled),
      'PolardbSlowTtl': ros.numberToRosTemplate(properties.polardbSlowTtl),
      'OssAccessTiEnabled': ros.booleanToRosTemplate(properties.ossAccessTiEnabled),
      'PolardbPerfCollectionPolicy': ros.stringToRosTemplate(properties.polardbPerfCollectionPolicy),
      'ActiontrailOpenapiPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.actiontrailOpenapiPolicySetting),
      'ApigatewayTiEnabled': ros.booleanToRosTemplate(properties.apigatewayTiEnabled),
      'BastionAuditPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.bastionAuditPolicySetting),
      'SlbAccessPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.slbAccessPolicySetting),
      'RdsTiEnabled': ros.booleanToRosTemplate(properties.rdsTiEnabled),
      'DnsSyncEnabled': ros.booleanToRosTemplate(properties.dnsSyncEnabled),
      'ApigatewayAccessCollectionPolicy': ros.stringToRosTemplate(properties.apigatewayAccessCollectionPolicy),
      'CloudfirewallTtl': ros.numberToRosTemplate(properties.cloudfirewallTtl),
      'PolardbAuditPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.polardbAuditPolicySetting),
      'K8sAuditPolicySetting': ros.listMapper(ros.objectToRosTemplate)(properties.k8SAuditPolicySetting),
    };
}

/**
 * Properties for defining a `RosConsumerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup
 */
export interface RosConsumerGroupProps {

    /**
     * @Property consumerGroup: The name of the consumer group. The name must be unique in a project.
     */
    readonly consumerGroup: string | ros.IResolvable;

    /**
     * @Property logstore: The name of the Logstore.
     */
    readonly logstore: string | ros.IResolvable;

    /**
     * @Property order: Specifies whether to consume data in sequence. Valid values:
     * true
     * In a shard, data is consumed in ascending order based on the value of the **__tag__:__receive_time__** field.
     * If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
     * If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
     * false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
     */
    readonly order: boolean | ros.IResolvable;

    /**
     * @Property project: The name of the project.
     */
    readonly project: string | ros.IResolvable;

    /**
     * @Property timeout: The timeout period. If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
     */
    readonly timeout: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosConsumerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosConsumerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('order', ros.requiredValidator)(properties.order));
    errors.collect(ros.propertyValidator('order', ros.validateBoolean)(properties.order));
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('timeout', ros.requiredValidator)(properties.timeout));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 4294967295,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('logstore', ros.requiredValidator)(properties.logstore));
    errors.collect(ros.propertyValidator('logstore', ros.validateString)(properties.logstore));
    errors.collect(ros.propertyValidator('consumerGroup', ros.requiredValidator)(properties.consumerGroup));
    errors.collect(ros.propertyValidator('consumerGroup', ros.validateString)(properties.consumerGroup));
    return errors.wrap('supplied properties not correct for "RosConsumerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::ConsumerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosConsumerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::ConsumerGroup` resource.
 */
// @ts-ignore TS6133
function rosConsumerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosConsumerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'ConsumerGroup': ros.stringToRosTemplate(properties.consumerGroup),
      'Logstore': ros.stringToRosTemplate(properties.logstore),
      'Order': ros.booleanToRosTemplate(properties.order),
      'Project': ros.stringToRosTemplate(properties.project),
      'Timeout': ros.numberToRosTemplate(properties.timeout),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::ConsumerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ConsumerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-consumergroup
 */
export class RosConsumerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::ConsumerGroup";

    /**
     * @Attribute ConsumerGroup: The name of the consumer group.
     */
    public readonly attrConsumerGroup: ros.IResolvable;

    /**
     * @Attribute Logstore: The name of the logstore to which this consumer group belongs.
     */
    public readonly attrLogstore: ros.IResolvable;

    /**
     * @Attribute Project: The name of the project to which the logstore belongs.
     */
    public readonly attrProject: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property consumerGroup: The name of the consumer group. The name must be unique in a project.
     */
    public consumerGroup: string | ros.IResolvable;

    /**
     * @Property logstore: The name of the Logstore.
     */
    public logstore: string | ros.IResolvable;

    /**
     * @Property order: Specifies whether to consume data in sequence. Valid values:
     * true
     * In a shard, data is consumed in ascending order based on the value of the **__tag__:__receive_time__** field.
     * If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
     * If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
     * false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
     */
    public order: boolean | ros.IResolvable;

    /**
     * @Property project: The name of the project.
     */
    public project: string | ros.IResolvable;

    /**
     * @Property timeout: The timeout period. If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
     */
    public timeout: number | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConsumerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosConsumerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConsumerGroup = this.getAtt('ConsumerGroup');
        this.attrLogstore = this.getAtt('Logstore');
        this.attrProject = this.getAtt('Project');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.consumerGroup = props.consumerGroup;
        this.logstore = props.logstore;
        this.order = props.order;
        this.project = props.project;
        this.timeout = props.timeout;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            consumerGroup: this.consumerGroup,
            logstore: this.logstore,
            order: this.order,
            project: this.project,
            timeout: this.timeout,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosConsumerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDashboard`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard
 */
export interface RosDashboardProps {

    /**
     * @Property charts: Chart list.
     */
    readonly charts: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * @Property dashboardName: Dashboard name.
     */
    readonly dashboardName: string | ros.IResolvable;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property description: Dashboard description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property displayName: Dashboard display name.
     */
    readonly displayName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDashboardProps`
 *
 * @param properties - the TypeScript properties of a `RosDashboardProps`
 *
 * @returns the result of the validation.
 */
function RosDashboardPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dashboardName', ros.requiredValidator)(properties.dashboardName));
    errors.collect(ros.propertyValidator('dashboardName', ros.validateString)(properties.dashboardName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
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
    if(properties.displayName && (Array.isArray(properties.displayName) || (typeof properties.displayName) === 'string')) {
        errors.collect(ros.propertyValidator('displayName', ros.validateLength)({
            data: properties.displayName.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('charts', ros.requiredValidator)(properties.charts));
    if(properties.charts && (Array.isArray(properties.charts) || (typeof properties.charts) === 'string')) {
        errors.collect(ros.propertyValidator('charts', ros.validateLength)({
            data: properties.charts.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('charts', ros.listValidator(ros.validateAnyDict))(properties.charts));
    return errors.wrap('supplied properties not correct for "RosDashboardProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Dashboard` resource
 *
 * @param properties - the TypeScript properties of a `RosDashboardProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Dashboard` resource.
 */
// @ts-ignore TS6133
function rosDashboardPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDashboardPropsValidator(properties).assertSuccess();
    }
    return {
      'Charts': ros.listMapper(ros.anyDictToRosTemplate)(properties.charts),
      'DashboardName': ros.stringToRosTemplate(properties.dashboardName),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'Description': ros.stringToRosTemplate(properties.description),
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Dashboard`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Dashboard` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard
 */
export class RosDashboard extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Dashboard";

    /**
     * @Attribute DashboardName: Dashboard name.
     */
    public readonly attrDashboardName: ros.IResolvable;

    /**
     * @Attribute DisplayName: Display name.
     */
    public readonly attrDisplayName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property charts: Chart list.
     */
    public charts: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * @Property dashboardName: Dashboard name.
     */
    public dashboardName: string | ros.IResolvable;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property description: Dashboard description.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property displayName: Dashboard display name.
     */
    public displayName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDashboardProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDashboard.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDashboardName = this.getAtt('DashboardName');
        this.attrDisplayName = this.getAtt('DisplayName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.charts = props.charts;
        this.dashboardName = props.dashboardName;
        this.projectName = props.projectName;
        this.description = props.description;
        this.displayName = props.displayName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            charts: this.charts,
            dashboardName: this.dashboardName,
            projectName: this.projectName,
            description: this.description,
            displayName: this.displayName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDashboardPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosEtl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
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
      'Configuration': rosEtlConfigurationPropertyToRosTemplate(properties.configuration),
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
      'Name': ros.stringToRosTemplate(properties.name),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'Schedule': rosEtlSchedulePropertyToRosTemplate(properties.schedule),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Etl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Etl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-etl
 */
export class RosEtl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Etl";

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
      'Script': ros.stringToRosTemplate(properties.script),
      'Sinks': ros.listMapper(rosEtlSinksPropertyToRosTemplate)(properties.sinks),
      'Parameters': ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      'ToTime': ros.numberToRosTemplate(properties.toTime),
      'Version': ros.numberToRosTemplate(properties.version),
      'Logstore': ros.stringToRosTemplate(properties.logstore),
      'FromTime': ros.numberToRosTemplate(properties.fromTime),
      'RoleArn': ros.stringToRosTemplate(properties.roleArn),
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
      'Type': ros.stringToRosTemplate(properties.type),
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
      'Project': ros.stringToRosTemplate(properties.project),
      'Type': ros.stringToRosTemplate(properties.type),
      'Endpoint': ros.stringToRosTemplate(properties.endpoint),
      'Logstore': ros.stringToRosTemplate(properties.logstore),
      'RoleArn': ros.stringToRosTemplate(properties.roleArn),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `RosIndex`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index
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
    if(properties.logstoreName && (typeof properties.logstoreName) !== 'object') {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateAllowedPattern)({
          data: properties.logstoreName,
          reg: /^[a-zA-Z0-9_-]+$/
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
      'FullTextIndex': rosIndexFullTextIndexPropertyToRosTemplate(properties.fullTextIndex),
      'LogstoreName': ros.stringToRosTemplate(properties.logstoreName),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'KeyIndices': ros.listMapper(rosIndexKeyIndicesPropertyToRosTemplate)(properties.keyIndices),
      'LogReduce': ros.booleanToRosTemplate(properties.logReduce),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Index`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Index` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-index
 */
export class RosIndex extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Index";

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
         * @Property delimiter: Delimiter. Default to (( , '";=()[]{}?@&<>\/:\n\t\r )).
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
      'Delimiter': ros.stringToRosTemplate(properties.delimiter),
      'IncludeChinese': ros.booleanToRosTemplate(properties.includeChinese),
      'CaseSensitive': ros.booleanToRosTemplate(properties.caseSensitive),
      'Enable': ros.booleanToRosTemplate(properties.enable),
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
      'Type': ros.stringToRosTemplate(properties.type),
      'Alias': ros.stringToRosTemplate(properties.alias),
      'EnableAnalytics': ros.booleanToRosTemplate(properties.enableAnalytics),
      'Name': ros.stringToRosTemplate(properties.name),
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
         * @Property delimiter: Delimiter. It takes effect when Type is text or json. Default to (( , '";=()[]{}?@&<>\/:\n\t\r )).
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
      'Type': ros.stringToRosTemplate(properties.type),
      'JsonKeyIndices': ros.listMapper(rosIndexJsonKeyIndicesPropertyToRosTemplate)(properties.jsonKeyIndices),
      'Delimiter': ros.stringToRosTemplate(properties.delimiter),
      'IncludeChinese': ros.booleanToRosTemplate(properties.includeChinese),
      'Alias': ros.stringToRosTemplate(properties.alias),
      'EnableAnalytics': ros.booleanToRosTemplate(properties.enableAnalytics),
      'CaseSensitive': ros.booleanToRosTemplate(properties.caseSensitive),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `RosLogstore`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logstore
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
     * @Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS\/Android\/APP access information.
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
     * @Property mode: The type of the Logstore. Simple Log Service provides two types of Logstores: Standard Logstores and Query Logstores. Valid values:
     * standard: Standard Logstore. This type of Logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can also use this type of Logstore to build a comprehensive observability system.
     * query: Query Logstore. This type of Logstore supports high-performance queries. The index traffic fee of a Query Logstore is approximately half that of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the amount of data is large, the log retention period is long, or log analysis is not required. If logs are stored for weeks or months, the log retention period is considered long.
     */
    readonly mode?: string | ros.IResolvable;

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
    if(properties.logstoreName && (typeof properties.logstoreName) !== 'object') {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateAllowedPattern)({
          data: properties.logstoreName,
          reg: /^[a-zA-Z0-9_-]+$/
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
    if(properties.mode && (typeof properties.mode) !== 'object') {
        errors.collect(ros.propertyValidator('mode', ros.validateAllowedValues)({
          data: properties.mode,
          allowedValues: ["standard","query"],
        }));
    }
    errors.collect(ros.propertyValidator('mode', ros.validateString)(properties.mode));
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
      'LogstoreName': ros.stringToRosTemplate(properties.logstoreName),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'AppendMeta': ros.booleanToRosTemplate(properties.appendMeta),
      'AutoSplit': ros.booleanToRosTemplate(properties.autoSplit),
      'EnableTracking': ros.booleanToRosTemplate(properties.enableTracking),
      'EncryptConf': rosLogstoreEncryptConfPropertyToRosTemplate(properties.encryptConf),
      'MaxSplitShard': ros.numberToRosTemplate(properties.maxSplitShard),
      'Mode': ros.stringToRosTemplate(properties.mode),
      'PreserveStorage': ros.booleanToRosTemplate(properties.preserveStorage),
      'ShardCount': ros.numberToRosTemplate(properties.shardCount),
      'TTL': ros.numberToRosTemplate(properties.ttl),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Logstore`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Logstore` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logstore
 */
export class RosLogstore extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Logstore";

    /**
     * @Attribute LogstoreName: Logstore name.
     */
    public readonly attrLogstoreName: ros.IResolvable;

    /**
     * @Attribute ProjectName: Project name.
     */
    public readonly attrProjectName: ros.IResolvable;

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
     * @Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS\/Android\/APP access information.
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
     * @Property mode: The type of the Logstore. Simple Log Service provides two types of Logstores: Standard Logstores and Query Logstores. Valid values:
     * standard: Standard Logstore. This type of Logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can also use this type of Logstore to build a comprehensive observability system.
     * query: Query Logstore. This type of Logstore supports high-performance queries. The index traffic fee of a Query Logstore is approximately half that of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the amount of data is large, the log retention period is long, or log analysis is not required. If logs are stored for weeks or months, the log retention period is considered long.
     */
    public mode: string | ros.IResolvable | undefined;

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
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogstoreProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLogstore.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLogstoreName = this.getAtt('LogstoreName');
        this.attrProjectName = this.getAtt('ProjectName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.logstoreName = props.logstoreName;
        this.projectName = props.projectName;
        this.appendMeta = props.appendMeta;
        this.autoSplit = props.autoSplit;
        this.enableTracking = props.enableTracking;
        this.encryptConf = props.encryptConf;
        this.maxSplitShard = props.maxSplitShard;
        this.mode = props.mode;
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
            mode: this.mode,
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
      'EncryptType': ros.stringToRosTemplate(properties.encryptType),
      'Enable': ros.booleanToRosTemplate(properties.enable),
      'UserCmkInfo': rosLogstoreUserCmkInfoPropertyToRosTemplate(properties.userCmkInfo),
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
      'CmkKeyId': ros.stringToRosTemplate(properties.cmkKeyId),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
      'Arn': ros.stringToRosTemplate(properties.arn),
    };
}

/**
 * Properties for defining a `RosLogtailConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logtailconfig
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
     *         "logPath": "\/var\/log\/test",
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
    if(properties.logstoreName && (typeof properties.logstoreName) !== 'object') {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateAllowedPattern)({
          data: properties.logstoreName,
          reg: /^[a-zA-Z0-9_-]+$/
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
      'LogstoreName': ros.stringToRosTemplate(properties.logstoreName),
      'LogtailConfigName': ros.stringToRosTemplate(properties.logtailConfigName),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'CloneFrom': rosLogtailConfigCloneFromPropertyToRosTemplate(properties.cloneFrom),
      'RawConfigData': ros.hashMapper(ros.objectToRosTemplate)(properties.rawConfigData),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::LogtailConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LogtailConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logtailconfig
 */
export class RosLogtailConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::LogtailConfig";

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
     *         "logPath": "\/var\/log\/test",
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
    if(properties.projectName && (typeof properties.projectName) !== 'object') {
        errors.collect(ros.propertyValidator('projectName', ros.validateAllowedPattern)({
          data: properties.projectName,
          reg: /^[a-zA-Z0-9_-]+$/
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
      'LogtailConfigName': ros.stringToRosTemplate(properties.logtailConfigName),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
    };
}

/**
 * Properties for defining a `RosMachineGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup
 */
export interface RosMachineGroupProps {

    /**
     * @Property groupAttribute: Group attribute, default is null. The object value is groupTopic and externalName
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
      'GroupAttribute': ros.stringToRosTemplate(properties.groupAttribute),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'GroupType': ros.stringToRosTemplate(properties.groupType),
      'MachineIdentifyType': ros.stringToRosTemplate(properties.machineIdentifyType),
      'MachineList': ros.listMapper(ros.objectToRosTemplate)(properties.machineList),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::MachineGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MachineGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-machinegroup
 */
export class RosMachineGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::MachineGroup";

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
     * @Property groupAttribute: Group attribute, default is null. The object value is groupTopic and externalName
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
 * Properties for defining a `RosMetricStore`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-metricstore
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
    if(properties.logstoreName && (typeof properties.logstoreName) !== 'object') {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateAllowedPattern)({
          data: properties.logstoreName,
          reg: /^[a-zA-Z0-9_-]+$/
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
      'LogstoreName': ros.stringToRosTemplate(properties.logstoreName),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'PreserveStorage': ros.booleanToRosTemplate(properties.preserveStorage),
      'ShardCount': ros.numberToRosTemplate(properties.shardCount),
      'TTL': ros.numberToRosTemplate(properties.ttl),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::MetricStore`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MetricStore` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-metricstore
 */
export class RosMetricStore extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::MetricStore";

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
 * Properties for defining a `RosOssExport`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
 */
export interface RosOssExportProps {

    /**
     * @Property configuration: The configuration of the export job.
     */
    readonly configuration: RosOssExport.ConfigurationProperty | ros.IResolvable;

    /**
     * @Property displayName: The display name of the export job. It must be 4 to 100 characters in length.
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * @Property exportName: The name of the export job. This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
     */
    readonly exportName: string | ros.IResolvable;

    /**
     * @Property projectName: The project name of SLS.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property description: The description of the export job. It could be 0 to 256 characters in length.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosOssExportProps`
 *
 * @param properties - the TypeScript properties of a `RosOssExportProps`
 *
 * @returns the result of the validation.
 */
function RosOssExportPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 0,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('configuration', ros.requiredValidator)(properties.configuration));
    errors.collect(ros.propertyValidator('configuration', RosOssExport_ConfigurationPropertyValidator)(properties.configuration));
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
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    if(properties.displayName && (Array.isArray(properties.displayName) || (typeof properties.displayName) === 'string')) {
        errors.collect(ros.propertyValidator('displayName', ros.validateLength)({
            data: properties.displayName.length,
            min: 4,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('exportName', ros.requiredValidator)(properties.exportName));
    if(properties.exportName && (Array.isArray(properties.exportName) || (typeof properties.exportName) === 'string')) {
        errors.collect(ros.propertyValidator('exportName', ros.validateLength)({
            data: properties.exportName.length,
            min: 2,
            max: 64,
          }));
    }
    if(properties.exportName && (typeof properties.exportName) !== 'object') {
        errors.collect(ros.propertyValidator('exportName', ros.validateAllowedPattern)({
          data: properties.exportName,
          reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('exportName', ros.validateString)(properties.exportName));
    return errors.wrap('supplied properties not correct for "RosOssExportProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::OssExport` resource
 *
 * @param properties - the TypeScript properties of a `RosOssExportProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::OssExport` resource.
 */
// @ts-ignore TS6133
function rosOssExportPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosOssExportPropsValidator(properties).assertSuccess();
    }
    return {
      'Configuration': rosOssExportConfigurationPropertyToRosTemplate(properties.configuration),
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
      'ExportName': ros.stringToRosTemplate(properties.exportName),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::OssExport`.
 * @Note This class does not contain additional functions, so it is recommended to use the `OssExport` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexport
 */
export class RosOssExport extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::OssExport";

    /**
     * @Attribute ExportName: The name of the export job.
     */
    public readonly attrExportName: ros.IResolvable;

    /**
     * @Attribute ProjectName: The project name of SLS.
     */
    public readonly attrProjectName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property configuration: The configuration of the export job.
     */
    public configuration: RosOssExport.ConfigurationProperty | ros.IResolvable;

    /**
     * @Property displayName: The display name of the export job. It must be 4 to 100 characters in length.
     */
    public displayName: string | ros.IResolvable;

    /**
     * @Property exportName: The name of the export job. This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
     */
    public exportName: string | ros.IResolvable;

    /**
     * @Property projectName: The project name of SLS.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property description: The description of the export job. It could be 0 to 256 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOssExportProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOssExport.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrExportName = this.getAtt('ExportName');
        this.attrProjectName = this.getAtt('ProjectName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.configuration = props.configuration;
        this.displayName = props.displayName;
        this.exportName = props.exportName;
        this.projectName = props.projectName;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            configuration: this.configuration,
            displayName: this.displayName,
            exportName: this.exportName,
            projectName: this.projectName,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosOssExportPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosOssExport {
    /**
     * @stability external
     */
    export interface ConfigurationProperty {
        /**
         * @Property toTime: The end time of the time range.
         */
        readonly toTime?: number | ros.IResolvable;
        /**
         * @Property sink: The sink name.
         */
        readonly sink: RosOssExport.SinkProperty | ros.IResolvable;
        /**
         * @Property logstore: The logstore name of the project.
         */
        readonly logstore: string | ros.IResolvable;
        /**
         * @Property fromTime: The start time of the time range.
         */
        readonly fromTime?: number | ros.IResolvable;
        /**
         * @Property roleArn: Used to control permissions of writing data to OSS and reading data in Logstores. Example: acs:ram::13234:role\/aliyunlogdefaultrole.
         */
        readonly roleArn: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConfigurationProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigurationProperty`
 *
 * @returns the result of the validation.
 */
function RosOssExport_ConfigurationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('toTime', ros.validateNumber)(properties.toTime));
    errors.collect(ros.propertyValidator('sink', ros.requiredValidator)(properties.sink));
    errors.collect(ros.propertyValidator('sink', RosOssExport_SinkPropertyValidator)(properties.sink));
    errors.collect(ros.propertyValidator('logstore', ros.requiredValidator)(properties.logstore));
    errors.collect(ros.propertyValidator('logstore', ros.validateString)(properties.logstore));
    errors.collect(ros.propertyValidator('fromTime', ros.validateNumber)(properties.fromTime));
    errors.collect(ros.propertyValidator('roleArn', ros.requiredValidator)(properties.roleArn));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    return errors.wrap('supplied properties not correct for "ConfigurationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::OssExport.Configuration` resource
 *
 * @param properties - the TypeScript properties of a `ConfigurationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::OssExport.Configuration` resource.
 */
// @ts-ignore TS6133
function rosOssExportConfigurationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosOssExport_ConfigurationPropertyValidator(properties).assertSuccess();
    return {
      'ToTime': ros.numberToRosTemplate(properties.toTime),
      'Sink': rosOssExportSinkPropertyToRosTemplate(properties.sink),
      'Logstore': ros.stringToRosTemplate(properties.logstore),
      'FromTime': ros.numberToRosTemplate(properties.fromTime),
      'RoleArn': ros.stringToRosTemplate(properties.roleArn),
    };
}

export namespace RosOssExport {
    /**
     * @stability external
     */
    export interface SinkProperty {
        /**
         * @Property bufferInterval: The shipping time. The maximum interval at which data is shipped. Valid values: 300 to 900. Unit: seconds.
         */
        readonly bufferInterval: number | ros.IResolvable;
        /**
         * @Property contentType: The storage format. You can store data in the Parquet format for data analysis. Compared with data stored in the CSV or JSON format, data stored in the Parquet format can be scanned at a higher efficiency.You are charged more fees when you ship data in the Parquet format than in the CSV or JSON format. Select a storage format for data shipping based on your business requirements.
         */
        readonly contentType: string | ros.IResolvable;
        /**
         * @Property contentDetail: The content detail. If ContentType=json, the default value is {"EnableTag": false}.
         */
        readonly contentDetail?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property pathFormat: The partition format is used to generate subdirectories. A subdirectory is dynamically generated based on the shipping time. The default partition format is %Y\/%m\/%d\/%H\/%M. Example: 2017\/01\/23\/12\/00. Note that the partition format cannot start with a forward slash (\/). For more information about how to integrate with the compute engines of E-MapReduce such as Hive and Impala to query and analyze data
         */
        readonly pathFormat?: string | ros.IResolvable;
        /**
         * @Property prefix: The prefix of the OSS object name.
         */
        readonly prefix?: string | ros.IResolvable;
        /**
         * @Property pathFormatType: The partition format type. Only support time.
         */
        readonly pathFormatType?: string | ros.IResolvable;
        /**
         * @Property roleArn: Used to control permissions of writing data to OSS and reading data in Logstores. Example: acs:ram::13234:role\/aliyunlogdefaultrole.
         */
        readonly roleArn: string | ros.IResolvable;
        /**
         * @Property bufferSize: The shipping size. The value of this parameter determines the maximum size of raw log data that is shipped and stored in an object. Unit: MB. If the size of log data that you want to ship reaches the specified value, a shipping job is automatically created.
         */
        readonly bufferSize: number | ros.IResolvable;
        /**
         * @Property timeZone: The time zone. Partition paths vary based on time zones. The value should be -1200 to +1400. For example, +0800.
         */
        readonly timeZone?: string | ros.IResolvable;
        /**
         * @Property suffix: The suffix of the OSS object name.
         */
        readonly suffix?: string | ros.IResolvable;
        /**
         * @Property endpoint: The endpoint of the OSS bucket.
         */
        readonly endpoint?: string | ros.IResolvable;
        /**
         * @Property delaySeconds: The shipping latency. The period of time after which data is shipped. Valid values: 900 to 63244800. Unit: seconds.
     * Note: Do not specify a latency that exceeds the data retention period of the Logstore. We recommend that you reserve a buffer period of a few days for the latency. Otherwise, data loss may occur.
         */
        readonly delaySeconds?: number | ros.IResolvable;
        /**
         * @Property bucket: The name of the OSS bucket.
         */
        readonly bucket: string | ros.IResolvable;
        /**
         * @Property compressionType: The compression method of OSS data. Valid values: none, snappy, gzip, and zstd. The value none indicates that raw data is not compressed. The value snappy, gzip, or zstd indicates that a specified algorithm is used to compress data, which can reduce the storage space usage of OSS buckets. The compression methods vary based on storage formats.
         */
        readonly compressionType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SinkProperty`
 *
 * @param properties - the TypeScript properties of a `SinkProperty`
 *
 * @returns the result of the validation.
 */
function RosOssExport_SinkPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bufferInterval', ros.requiredValidator)(properties.bufferInterval));
    if(properties.bufferInterval && (typeof properties.bufferInterval) !== 'object') {
        errors.collect(ros.propertyValidator('bufferInterval', ros.validateRange)({
            data: properties.bufferInterval,
            min: 300,
            max: 900,
          }));
    }
    errors.collect(ros.propertyValidator('bufferInterval', ros.validateNumber)(properties.bufferInterval));
    errors.collect(ros.propertyValidator('contentType', ros.requiredValidator)(properties.contentType));
    if(properties.contentType && (typeof properties.contentType) !== 'object') {
        errors.collect(ros.propertyValidator('contentType', ros.validateAllowedValues)({
          data: properties.contentType,
          allowedValues: ["json","parquet","csv","orc"],
        }));
    }
    errors.collect(ros.propertyValidator('contentType', ros.validateString)(properties.contentType));
    errors.collect(ros.propertyValidator('contentDetail', ros.hashValidator(ros.validateAny))(properties.contentDetail));
    errors.collect(ros.propertyValidator('pathFormat', ros.validateString)(properties.pathFormat));
    errors.collect(ros.propertyValidator('prefix', ros.validateString)(properties.prefix));
    if(properties.pathFormatType && (typeof properties.pathFormatType) !== 'object') {
        errors.collect(ros.propertyValidator('pathFormatType', ros.validateAllowedValues)({
          data: properties.pathFormatType,
          allowedValues: ["time"],
        }));
    }
    errors.collect(ros.propertyValidator('pathFormatType', ros.validateString)(properties.pathFormatType));
    errors.collect(ros.propertyValidator('roleArn', ros.requiredValidator)(properties.roleArn));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    errors.collect(ros.propertyValidator('bufferSize', ros.requiredValidator)(properties.bufferSize));
    if(properties.bufferSize && (typeof properties.bufferSize) !== 'object') {
        errors.collect(ros.propertyValidator('bufferSize', ros.validateRange)({
            data: properties.bufferSize,
            min: 5,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('bufferSize', ros.validateNumber)(properties.bufferSize));
    errors.collect(ros.propertyValidator('timeZone', ros.validateString)(properties.timeZone));
    errors.collect(ros.propertyValidator('suffix', ros.validateString)(properties.suffix));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    if(properties.delaySeconds && (typeof properties.delaySeconds) !== 'object') {
        errors.collect(ros.propertyValidator('delaySeconds', ros.validateRange)({
            data: properties.delaySeconds,
            min: 900,
            max: 63244800,
          }));
    }
    errors.collect(ros.propertyValidator('delaySeconds', ros.validateNumber)(properties.delaySeconds));
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    if(properties.compressionType && (typeof properties.compressionType) !== 'object') {
        errors.collect(ros.propertyValidator('compressionType', ros.validateAllowedValues)({
          data: properties.compressionType,
          allowedValues: ["none","snappy","gzip","zstd"],
        }));
    }
    errors.collect(ros.propertyValidator('compressionType', ros.validateString)(properties.compressionType));
    return errors.wrap('supplied properties not correct for "SinkProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::OssExport.Sink` resource
 *
 * @param properties - the TypeScript properties of a `SinkProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::OssExport.Sink` resource.
 */
// @ts-ignore TS6133
function rosOssExportSinkPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosOssExport_SinkPropertyValidator(properties).assertSuccess();
    return {
      'BufferInterval': ros.numberToRosTemplate(properties.bufferInterval),
      'ContentType': ros.stringToRosTemplate(properties.contentType),
      'ContentDetail': ros.hashMapper(ros.objectToRosTemplate)(properties.contentDetail),
      'PathFormat': ros.stringToRosTemplate(properties.pathFormat),
      'Prefix': ros.stringToRosTemplate(properties.prefix),
      'PathFormatType': ros.stringToRosTemplate(properties.pathFormatType),
      'RoleArn': ros.stringToRosTemplate(properties.roleArn),
      'BufferSize': ros.numberToRosTemplate(properties.bufferSize),
      'TimeZone': ros.stringToRosTemplate(properties.timeZone),
      'Suffix': ros.stringToRosTemplate(properties.suffix),
      'Endpoint': ros.stringToRosTemplate(properties.endpoint),
      'DelaySeconds': ros.numberToRosTemplate(properties.delaySeconds),
      'Bucket': ros.stringToRosTemplate(properties.bucket),
      'CompressionType': ros.stringToRosTemplate(properties.compressionType),
    };
}

/**
 * Properties for defining a `RosOssExternalStore`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
 */
export interface RosOssExternalStoreProps {

    /**
     * @Property accessId: The AccessKey ID.
     */
    readonly accessId: string | ros.IResolvable;

    /**
     * @Property accessKey: The AccessKey secret.
     */
    readonly accessKey: string | ros.IResolvable;

    /**
     * @Property bucket: The name of the OSS bucket.
     */
    readonly bucket: string | ros.IResolvable;

    /**
     * @Property columns: The associated fields.
     */
    readonly columns: Array<RosOssExternalStore.ColumnsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property endpoint: The OSS endpoint.
     */
    readonly endpoint: string | ros.IResolvable;

    /**
     * @Property externalStoreName: The name of the external store.
     */
    readonly externalStoreName: string | ros.IResolvable;

    /**
     * @Property objects: The associated OSS objects. Valid values of n: 1 to 100.
     */
    readonly objects: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property project: A short description of struct
     */
    readonly project: string | ros.IResolvable;

    /**
     * @Property storeType: The type of the external store. Set the value to oss.
     */
    readonly storeType: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosOssExternalStoreProps`
 *
 * @param properties - the TypeScript properties of a `RosOssExternalStoreProps`
 *
 * @returns the result of the validation.
 */
function RosOssExternalStorePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('storeType', ros.requiredValidator)(properties.storeType));
    if(properties.storeType && (typeof properties.storeType) !== 'object') {
        errors.collect(ros.propertyValidator('storeType', ros.validateAllowedValues)({
          data: properties.storeType,
          allowedValues: ["oss"],
        }));
    }
    errors.collect(ros.propertyValidator('storeType', ros.validateString)(properties.storeType));
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('endpoint', ros.requiredValidator)(properties.endpoint));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    errors.collect(ros.propertyValidator('accessId', ros.requiredValidator)(properties.accessId));
    errors.collect(ros.propertyValidator('accessId', ros.validateString)(properties.accessId));
    errors.collect(ros.propertyValidator('objects', ros.requiredValidator)(properties.objects));
    if(properties.objects && (Array.isArray(properties.objects) || (typeof properties.objects) === 'string')) {
        errors.collect(ros.propertyValidator('objects', ros.validateLength)({
            data: properties.objects.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('objects', ros.listValidator(ros.validateString))(properties.objects));
    errors.collect(ros.propertyValidator('columns', ros.requiredValidator)(properties.columns));
    errors.collect(ros.propertyValidator('columns', ros.listValidator(RosOssExternalStore_ColumnsPropertyValidator))(properties.columns));
    errors.collect(ros.propertyValidator('accessKey', ros.requiredValidator)(properties.accessKey));
    errors.collect(ros.propertyValidator('accessKey', ros.validateString)(properties.accessKey));
    errors.collect(ros.propertyValidator('externalStoreName', ros.requiredValidator)(properties.externalStoreName));
    errors.collect(ros.propertyValidator('externalStoreName', ros.validateString)(properties.externalStoreName));
    return errors.wrap('supplied properties not correct for "RosOssExternalStoreProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::OssExternalStore` resource
 *
 * @param properties - the TypeScript properties of a `RosOssExternalStoreProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::OssExternalStore` resource.
 */
// @ts-ignore TS6133
function rosOssExternalStorePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosOssExternalStorePropsValidator(properties).assertSuccess();
    }
    return {
      'AccessId': ros.stringToRosTemplate(properties.accessId),
      'AccessKey': ros.stringToRosTemplate(properties.accessKey),
      'Bucket': ros.stringToRosTemplate(properties.bucket),
      'Columns': ros.listMapper(rosOssExternalStoreColumnsPropertyToRosTemplate)(properties.columns),
      'Endpoint': ros.stringToRosTemplate(properties.endpoint),
      'ExternalStoreName': ros.stringToRosTemplate(properties.externalStoreName),
      'Objects': ros.listMapper(ros.stringToRosTemplate)(properties.objects),
      'Project': ros.stringToRosTemplate(properties.project),
      'StoreType': ros.stringToRosTemplate(properties.storeType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::OssExternalStore`.
 * @Note This class does not contain additional functions, so it is recommended to use the `OssExternalStore` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-ossexternalstore
 */
export class RosOssExternalStore extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::OssExternalStore";

    /**
     * @Attribute ExternalStoreName: The name of the external store.
     */
    public readonly attrExternalStoreName: ros.IResolvable;

    /**
     * @Attribute Project: The name of the project to which the external store belongs.
     */
    public readonly attrProject: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessId: The AccessKey ID.
     */
    public accessId: string | ros.IResolvable;

    /**
     * @Property accessKey: The AccessKey secret.
     */
    public accessKey: string | ros.IResolvable;

    /**
     * @Property bucket: The name of the OSS bucket.
     */
    public bucket: string | ros.IResolvable;

    /**
     * @Property columns: The associated fields.
     */
    public columns: Array<RosOssExternalStore.ColumnsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property endpoint: The OSS endpoint.
     */
    public endpoint: string | ros.IResolvable;

    /**
     * @Property externalStoreName: The name of the external store.
     */
    public externalStoreName: string | ros.IResolvable;

    /**
     * @Property objects: The associated OSS objects. Valid values of n: 1 to 100.
     */
    public objects: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property project: A short description of struct
     */
    public project: string | ros.IResolvable;

    /**
     * @Property storeType: The type of the external store. Set the value to oss.
     */
    public storeType: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOssExternalStoreProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOssExternalStore.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrExternalStoreName = this.getAtt('ExternalStoreName');
        this.attrProject = this.getAtt('Project');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessId = props.accessId;
        this.accessKey = props.accessKey;
        this.bucket = props.bucket;
        this.columns = props.columns;
        this.endpoint = props.endpoint;
        this.externalStoreName = props.externalStoreName;
        this.objects = props.objects;
        this.project = props.project;
        this.storeType = props.storeType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessId: this.accessId,
            accessKey: this.accessKey,
            bucket: this.bucket,
            columns: this.columns,
            endpoint: this.endpoint,
            externalStoreName: this.externalStoreName,
            objects: this.objects,
            project: this.project,
            storeType: this.storeType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosOssExternalStorePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosOssExternalStore {
    /**
     * @stability external
     */
    export interface ColumnsProperty {
        /**
         * @Property type: The data type of the field.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: The name of the field.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ColumnsProperty`
 *
 * @param properties - the TypeScript properties of a `ColumnsProperty`
 *
 * @returns the result of the validation.
 */
function RosOssExternalStore_ColumnsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["varchar","bigint","double"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "ColumnsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::OssExternalStore.Columns` resource
 *
 * @param properties - the TypeScript properties of a `ColumnsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::OssExternalStore.Columns` resource.
 */
// @ts-ignore TS6133
function rosOssExternalStoreColumnsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosOssExternalStore_ColumnsPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project
 */
export interface RosProjectProps {

    /**
     * @Property name: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property dataRedundancyType: Disaster recovery type.LRS: Local redundant storage.ZRS: Local redundant storage.
     */
    readonly dataRedundancyType?: string | ros.IResolvable;

    /**
     * @Property description: Project description: <>'"\ is not supported, up to 64 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the sls project belongs. If not provided, the project belongs to the default resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

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
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.dataRedundancyType && (typeof properties.dataRedundancyType) !== 'object') {
        errors.collect(ros.propertyValidator('dataRedundancyType', ros.validateAllowedValues)({
          data: properties.dataRedundancyType,
          allowedValues: ["LRS","ZRS"],
        }));
    }
    errors.collect(ros.propertyValidator('dataRedundancyType', ros.validateString)(properties.dataRedundancyType));
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
          reg: /^[a-zA-Z0-9-]+$/
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
      'Name': ros.stringToRosTemplate(properties.name),
      'DataRedundancyType': ros.stringToRosTemplate(properties.dataRedundancyType),
      'Description': ros.stringToRosTemplate(properties.description),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosProjectTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Project`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Project";

    /**
     * @Attribute Name: Project name.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property dataRedundancyType: Disaster recovery type.LRS: Local redundant storage.ZRS: Local redundant storage.
     */
    public dataRedundancyType: string | ros.IResolvable | undefined;

    /**
     * @Property description: Project description: <>'"\ is not supported, up to 64 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the sls project belongs. If not provided, the project belongs to the default resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosProject.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.dataRedundancyType = props.dataRedundancyType;
        this.description = props.description;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            dataRedundancyType: this.dataRedundancyType,
            description: this.description,
            resourceGroupId: this.resourceGroupId,
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
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosRdsExternalStore`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore
 */
export interface RosRdsExternalStoreProps {

    /**
     * @Property db: The name of the database in the ApsaraDB RDS for MySQL instance.
     */
    readonly db: string | ros.IResolvable;

    /**
     * @Property externalStoreName: The name of the external store. The name must be unique in a project and different from Logstore.
     */
    readonly externalStoreName: string | ros.IResolvable;

    /**
     * @Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
     */
    readonly host: string | ros.IResolvable;

    /**
     * @Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.
     */
    readonly password: string | ros.IResolvable;

    /**
     * @Property port: The internal or public port of the ApsaraDB RDS for MySQL instance.
     */
    readonly port: number | ros.IResolvable;

    /**
     * @Property project: The name of the project.
     */
    readonly project: string | ros.IResolvable;

    /**
     * @Property region: The region where the ApsaraDB RDS for MySQL instance resides. Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
     */
    readonly region: string | ros.IResolvable;

    /**
     * @Property storeType: The storage type. Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
     */
    readonly storeType: string | ros.IResolvable;

    /**
     * @Property table: The name of the database table in the ApsaraDB RDS for MySQL instance.
     */
    readonly table: string | ros.IResolvable;

    /**
     * @Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.
     */
    readonly username: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property instanceId: The id of the RDS instance
     */
    readonly instanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRdsExternalStoreProps`
 *
 * @param properties - the TypeScript properties of a `RosRdsExternalStoreProps`
 *
 * @returns the result of the validation.
 */
function RosRdsExternalStorePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('storeType', ros.requiredValidator)(properties.storeType));
    if(properties.storeType && (typeof properties.storeType) !== 'object') {
        errors.collect(ros.propertyValidator('storeType', ros.validateAllowedValues)({
          data: properties.storeType,
          allowedValues: ["rds-vpc"],
        }));
    }
    errors.collect(ros.propertyValidator('storeType', ros.validateString)(properties.storeType));
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('table', ros.requiredValidator)(properties.table));
    errors.collect(ros.propertyValidator('table', ros.validateString)(properties.table));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('username', ros.requiredValidator)(properties.username));
    errors.collect(ros.propertyValidator('username', ros.validateString)(properties.username));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('region', ros.requiredValidator)(properties.region));
    if(properties.region && (typeof properties.region) !== 'object') {
        errors.collect(ros.propertyValidator('region', ros.validateAllowedValues)({
          data: properties.region,
          allowedValues: ["cn-qingdao","cn-beijing","cn-hangzhou"],
        }));
    }
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('host', ros.requiredValidator)(properties.host));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    errors.collect(ros.propertyValidator('externalStoreName', ros.requiredValidator)(properties.externalStoreName));
    errors.collect(ros.propertyValidator('externalStoreName', ros.validateString)(properties.externalStoreName));
    errors.collect(ros.propertyValidator('db', ros.requiredValidator)(properties.db));
    errors.collect(ros.propertyValidator('db', ros.validateString)(properties.db));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosRdsExternalStoreProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::RdsExternalStore` resource
 *
 * @param properties - the TypeScript properties of a `RosRdsExternalStoreProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::RdsExternalStore` resource.
 */
// @ts-ignore TS6133
function rosRdsExternalStorePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRdsExternalStorePropsValidator(properties).assertSuccess();
    }
    return {
      'Db': ros.stringToRosTemplate(properties.db),
      'ExternalStoreName': ros.stringToRosTemplate(properties.externalStoreName),
      'Host': ros.stringToRosTemplate(properties.host),
      'Password': ros.stringToRosTemplate(properties.password),
      'Port': ros.numberToRosTemplate(properties.port),
      'Project': ros.stringToRosTemplate(properties.project),
      'Region': ros.stringToRosTemplate(properties.region),
      'StoreType': ros.stringToRosTemplate(properties.storeType),
      'Table': ros.stringToRosTemplate(properties.table),
      'Username': ros.stringToRosTemplate(properties.username),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::RdsExternalStore`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RdsExternalStore` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore
 */
export class RosRdsExternalStore extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::RdsExternalStore";

    /**
     * @Attribute ExternalStoreName: The name of the external store.
     */
    public readonly attrExternalStoreName: ros.IResolvable;

    /**
     * @Attribute Project: The name of the project to which the external store belongs.
     */
    public readonly attrProject: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property db: The name of the database in the ApsaraDB RDS for MySQL instance.
     */
    public db: string | ros.IResolvable;

    /**
     * @Property externalStoreName: The name of the external store. The name must be unique in a project and different from Logstore.
     */
    public externalStoreName: string | ros.IResolvable;

    /**
     * @Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
     */
    public host: string | ros.IResolvable;

    /**
     * @Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.
     */
    public password: string | ros.IResolvable;

    /**
     * @Property port: The internal or public port of the ApsaraDB RDS for MySQL instance.
     */
    public port: number | ros.IResolvable;

    /**
     * @Property project: The name of the project.
     */
    public project: string | ros.IResolvable;

    /**
     * @Property region: The region where the ApsaraDB RDS for MySQL instance resides. Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
     */
    public region: string | ros.IResolvable;

    /**
     * @Property storeType: The storage type. Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
     */
    public storeType: string | ros.IResolvable;

    /**
     * @Property table: The name of the database table in the ApsaraDB RDS for MySQL instance.
     */
    public table: string | ros.IResolvable;

    /**
     * @Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.
     */
    public username: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property instanceId: The id of the RDS instance
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRdsExternalStoreProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRdsExternalStore.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrExternalStoreName = this.getAtt('ExternalStoreName');
        this.attrProject = this.getAtt('Project');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.db = props.db;
        this.externalStoreName = props.externalStoreName;
        this.host = props.host;
        this.password = props.password;
        this.port = props.port;
        this.project = props.project;
        this.region = props.region;
        this.storeType = props.storeType;
        this.table = props.table;
        this.username = props.username;
        this.vpcId = props.vpcId;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            db: this.db,
            externalStoreName: this.externalStoreName,
            host: this.host,
            password: this.password,
            port: this.port,
            project: this.project,
            region: this.region,
            storeType: this.storeType,
            table: this.table,
            username: this.username,
            vpcId: this.vpcId,
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRdsExternalStorePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSavedsearch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch
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
      'Detail': rosSavedsearchDetailPropertyToRosTemplate(properties.detail),
      'Project': ros.stringToRosTemplate(properties.project),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::Savedsearch`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Savedsearch` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch
 */
export class RosSavedsearch extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Savedsearch";

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
      'SearchQuery': ros.stringToRosTemplate(properties.searchQuery),
      'Logstore': ros.stringToRosTemplate(properties.logstore),
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
      'SavedsearchName': ros.stringToRosTemplate(properties.savedsearchName),
      'Topic': ros.stringToRosTemplate(properties.topic),
    };
}

/**
 * Properties for defining a `RosServiceLog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
 */
export interface RosServiceLogProps {

    /**
     * @Property logStorageLocation: The location of the service log.
     */
    readonly logStorageLocation: string | ros.IResolvable;

    /**
     * @Property projectName: The name of the project that needs to be activated. If it has been activated, it will be reactivated again.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property serviceLogTypes: Types of service log that needs to be activated.
     */
    readonly serviceLogTypes: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServiceLogProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceLogProps`
 *
 * @returns the result of the validation.
 */
function RosServiceLogPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceLogTypes', ros.requiredValidator)(properties.serviceLogTypes));
    if(properties.serviceLogTypes && (Array.isArray(properties.serviceLogTypes) || (typeof properties.serviceLogTypes) === 'string')) {
        errors.collect(ros.propertyValidator('serviceLogTypes', ros.validateLength)({
            data: properties.serviceLogTypes.length,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('serviceLogTypes', ros.listValidator(ros.validateString))(properties.serviceLogTypes));
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
    errors.collect(ros.propertyValidator('logStorageLocation', ros.requiredValidator)(properties.logStorageLocation));
    errors.collect(ros.propertyValidator('logStorageLocation', ros.validateString)(properties.logStorageLocation));
    return errors.wrap('supplied properties not correct for "RosServiceLogProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::ServiceLog` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceLogProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::ServiceLog` resource.
 */
// @ts-ignore TS6133
function rosServiceLogPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServiceLogPropsValidator(properties).assertSuccess();
    }
    return {
      'LogStorageLocation': ros.stringToRosTemplate(properties.logStorageLocation),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'ServiceLogTypes': ros.listMapper(ros.stringToRosTemplate)(properties.serviceLogTypes),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SLS::ServiceLog`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceLog` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-servicelog
 */
export class RosServiceLog extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::ServiceLog";

    /**
     * @Attribute ProjectName: The name of the project that needs to be activated.
     */
    public readonly attrProjectName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property logStorageLocation: The location of the service log.
     */
    public logStorageLocation: string | ros.IResolvable;

    /**
     * @Property projectName: The name of the project that needs to be activated. If it has been activated, it will be reactivated again.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property serviceLogTypes: Types of service log that needs to be activated.
     */
    public serviceLogTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceLogProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServiceLog.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrProjectName = this.getAtt('ProjectName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.logStorageLocation = props.logStorageLocation;
        this.projectName = props.projectName;
        this.serviceLogTypes = props.serviceLogTypes;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            logStorageLocation: this.logStorageLocation,
            projectName: this.projectName,
            serviceLogTypes: this.serviceLogTypes,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServiceLogPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
