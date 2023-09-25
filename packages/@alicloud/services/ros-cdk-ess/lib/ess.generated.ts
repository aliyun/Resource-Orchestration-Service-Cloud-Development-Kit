// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ESS::AlarmTask`
 */
export interface RosAlarmTaskProps {

    /**
     * @Property alarmAction: Alarm Actions
     */
    readonly alarmAction: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property metricName: Metric Name
     */
    readonly metricName: string | ros.IResolvable;

    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * @Property threshold: Threshold
     */
    readonly threshold: number | ros.IResolvable;

    /**
     * @Property comparisonOperator: Comparison Operator
     */
    readonly comparisonOperator?: string | ros.IResolvable;

    /**
     * @Property description: Description
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property dimensions: Dimensions
     */
    readonly dimensions?: Array<RosAlarmTask.DimensionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property evaluationCount: Evaluation Count
     */
    readonly evaluationCount?: number | ros.IResolvable;

    /**
     * @Property groupId: Group Id
     */
    readonly groupId?: number | ros.IResolvable;

    /**
     * @Property metricType: Metric Type
     */
    readonly metricType?: string | ros.IResolvable;

    /**
     * @Property name: Name
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property period: Period
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property statistics: Statistics
     */
    readonly statistics?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAlarmTaskProps`
 *
 * @param properties - the TypeScript properties of a `RosAlarmTaskProps`
 *
 * @returns the result of the validation.
 */
function RosAlarmTaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.comparisonOperator && (typeof properties.comparisonOperator) !== 'object') {
        errors.collect(ros.propertyValidator('comparisonOperator', ros.validateAllowedValues)({
          data: properties.comparisonOperator,
          allowedValues: [">=","<=",">","<"],
        }));
    }
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.requiredValidator)(properties.scalingGroupId));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.validateString)(properties.scalingGroupId));
    if(properties.metricType && (typeof properties.metricType) !== 'object') {
        errors.collect(ros.propertyValidator('metricType', ros.validateAllowedValues)({
          data: properties.metricType,
          allowedValues: ["system","custom"],
        }));
    }
    errors.collect(ros.propertyValidator('metricType', ros.validateString)(properties.metricType));
    if(properties.evaluationCount && (typeof properties.evaluationCount) !== 'object') {
        errors.collect(ros.propertyValidator('evaluationCount', ros.validateRange)({
            data: properties.evaluationCount,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('evaluationCount', ros.validateNumber)(properties.evaluationCount));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [60,120,300,900],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.dimensions && (Array.isArray(properties.dimensions) || (typeof properties.dimensions) === 'string')) {
        errors.collect(ros.propertyValidator('dimensions', ros.validateLength)({
            data: properties.dimensions.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dimensions', ros.listValidator(RosAlarmTask_DimensionsPropertyValidator))(properties.dimensions));
    if(properties.statistics && (typeof properties.statistics) !== 'object') {
        errors.collect(ros.propertyValidator('statistics', ros.validateAllowedValues)({
          data: properties.statistics,
          allowedValues: ["Average","Minimum","Maximum"],
        }));
    }
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('groupId', ros.validateNumber)(properties.groupId));
    errors.collect(ros.propertyValidator('metricName', ros.requiredValidator)(properties.metricName));
    errors.collect(ros.propertyValidator('metricName', ros.validateString)(properties.metricName));
    errors.collect(ros.propertyValidator('alarmAction', ros.requiredValidator)(properties.alarmAction));
    if(properties.alarmAction && (Array.isArray(properties.alarmAction) || (typeof properties.alarmAction) === 'string')) {
        errors.collect(ros.propertyValidator('alarmAction', ros.validateLength)({
            data: properties.alarmAction.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('alarmAction', ros.listValidator(ros.validateString))(properties.alarmAction));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateNumber)(properties.threshold));
    return errors.wrap('supplied properties not correct for "RosAlarmTaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::AlarmTask` resource
 *
 * @param properties - the TypeScript properties of a `RosAlarmTaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::AlarmTask` resource.
 */
// @ts-ignore TS6133
function rosAlarmTaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAlarmTaskPropsValidator(properties).assertSuccess();
    }
    return {
      AlarmAction: ros.listMapper(ros.stringToRosTemplate)(properties.alarmAction),
      MetricName: ros.stringToRosTemplate(properties.metricName),
      ScalingGroupId: ros.stringToRosTemplate(properties.scalingGroupId),
      Threshold: ros.numberToRosTemplate(properties.threshold),
      ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
      Description: ros.stringToRosTemplate(properties.description),
      Dimensions: ros.listMapper(rosAlarmTaskDimensionsPropertyToRosTemplate)(properties.dimensions),
      EvaluationCount: ros.numberToRosTemplate(properties.evaluationCount),
      GroupId: ros.numberToRosTemplate(properties.groupId),
      MetricType: ros.stringToRosTemplate(properties.metricType),
      Name: ros.stringToRosTemplate(properties.name),
      Period: ros.numberToRosTemplate(properties.period),
      Statistics: ros.stringToRosTemplate(properties.statistics),
    };
}

/**
 * A ROS template type:  `ALIYUN::ESS::AlarmTask`
 */
export class RosAlarmTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::AlarmTask";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AlarmTaskId: The alarm task ID
     */
    public readonly attrAlarmTaskId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property alarmAction: Alarm Actions
     */
    public alarmAction: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property metricName: Metric Name
     */
    public metricName: string | ros.IResolvable;

    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    public scalingGroupId: string | ros.IResolvable;

    /**
     * @Property threshold: Threshold
     */
    public threshold: number | ros.IResolvable;

    /**
     * @Property comparisonOperator: Comparison Operator
     */
    public comparisonOperator: string | ros.IResolvable | undefined;

    /**
     * @Property description: Description
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property dimensions: Dimensions
     */
    public dimensions: Array<RosAlarmTask.DimensionsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property evaluationCount: Evaluation Count
     */
    public evaluationCount: number | ros.IResolvable | undefined;

    /**
     * @Property groupId: Group Id
     */
    public groupId: number | ros.IResolvable | undefined;

    /**
     * @Property metricType: Metric Type
     */
    public metricType: string | ros.IResolvable | undefined;

    /**
     * @Property name: Name
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property period: Period
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property statistics: Statistics
     */
    public statistics: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ESS::AlarmTask`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlarmTaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAlarmTask.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAlarmTaskId = this.getAtt('AlarmTaskId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.alarmAction = props.alarmAction;
        this.metricName = props.metricName;
        this.scalingGroupId = props.scalingGroupId;
        this.threshold = props.threshold;
        this.comparisonOperator = props.comparisonOperator;
        this.description = props.description;
        this.dimensions = props.dimensions;
        this.evaluationCount = props.evaluationCount;
        this.groupId = props.groupId;
        this.metricType = props.metricType;
        this.name = props.name;
        this.period = props.period;
        this.statistics = props.statistics;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            alarmAction: this.alarmAction,
            metricName: this.metricName,
            scalingGroupId: this.scalingGroupId,
            threshold: this.threshold,
            comparisonOperator: this.comparisonOperator,
            description: this.description,
            dimensions: this.dimensions,
            evaluationCount: this.evaluationCount,
            groupId: this.groupId,
            metricType: this.metricType,
            name: this.name,
            period: this.period,
            statistics: this.statistics,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAlarmTaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAlarmTask {
    /**
     * @stability external
     */
    export interface DimensionsProperty {
        /**
         * @Property dimensionValue: DimensionValue
         */
        readonly dimensionValue: string | ros.IResolvable;
        /**
         * @Property dimensionKey: DimensionKey
         */
        readonly dimensionKey: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DimensionsProperty`
 *
 * @param properties - the TypeScript properties of a `DimensionsProperty`
 *
 * @returns the result of the validation.
 */
function RosAlarmTask_DimensionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dimensionValue', ros.requiredValidator)(properties.dimensionValue));
    errors.collect(ros.propertyValidator('dimensionValue', ros.validateString)(properties.dimensionValue));
    errors.collect(ros.propertyValidator('dimensionKey', ros.requiredValidator)(properties.dimensionKey));
    errors.collect(ros.propertyValidator('dimensionKey', ros.validateString)(properties.dimensionKey));
    return errors.wrap('supplied properties not correct for "DimensionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::AlarmTask.Dimensions` resource
 *
 * @param properties - the TypeScript properties of a `DimensionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::AlarmTask.Dimensions` resource.
 */
// @ts-ignore TS6133
function rosAlarmTaskDimensionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAlarmTask_DimensionsPropertyValidator(properties).assertSuccess();
    return {
      DimensionValue: ros.stringToRosTemplate(properties.dimensionValue),
      DimensionKey: ros.stringToRosTemplate(properties.dimensionKey),
    };
}

/**
 * Properties for defining a `ALIYUN::ESS::AlarmTaskEnable`
 */
export interface RosAlarmTaskEnableProps {

    /**
     * @Property alarmTaskId: The id of alarm task.
     */
    readonly alarmTaskId: string | ros.IResolvable;

    /**
     * @Property enable: Enable alarm task or not
     */
    readonly enable: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAlarmTaskEnableProps`
 *
 * @param properties - the TypeScript properties of a `RosAlarmTaskEnableProps`
 *
 * @returns the result of the validation.
 */
function RosAlarmTaskEnablePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enable', ros.requiredValidator)(properties.enable));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('alarmTaskId', ros.requiredValidator)(properties.alarmTaskId));
    errors.collect(ros.propertyValidator('alarmTaskId', ros.validateString)(properties.alarmTaskId));
    return errors.wrap('supplied properties not correct for "RosAlarmTaskEnableProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::AlarmTaskEnable` resource
 *
 * @param properties - the TypeScript properties of a `RosAlarmTaskEnableProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::AlarmTaskEnable` resource.
 */
// @ts-ignore TS6133
function rosAlarmTaskEnablePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAlarmTaskEnablePropsValidator(properties).assertSuccess();
    }
    return {
      AlarmTaskId: ros.stringToRosTemplate(properties.alarmTaskId),
      Enable: ros.booleanToRosTemplate(properties.enable),
    };
}

/**
 * A ROS template type:  `ALIYUN::ESS::AlarmTaskEnable`
 */
export class RosAlarmTaskEnable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::AlarmTaskEnable";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property alarmTaskId: The id of alarm task.
     */
    public alarmTaskId: string | ros.IResolvable;

    /**
     * @Property enable: Enable alarm task or not
     */
    public enable: boolean | ros.IResolvable;

    /**
     * Create a new `ALIYUN::ESS::AlarmTaskEnable`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlarmTaskEnableProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAlarmTaskEnable.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.alarmTaskId = props.alarmTaskId;
        this.enable = props.enable;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            alarmTaskId: this.alarmTaskId,
            enable: this.enable,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAlarmTaskEnablePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ESS::LifecycleHook`
 */
export interface RosLifecycleHookProps {

    /**
     * @Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:
     *  SCALE_OUT: scale-out event
     *  SCALE_IN: scale-in event
     */
    readonly lifecycleTransition: string | ros.IResolvable;

    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * @Property defaultResult: The action that the scaling group takes when the lifecycle hook times out. Value range:
     *  CONTINUE: the scaling group continues with the scale-in or scale-out process.
     *  ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
     * Default value: CONTINUE
     * If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
     */
    readonly defaultResult?: string | ros.IResolvable;

    /**
     * @Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
     * You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
     */
    readonly heartbeatTimeout?: number | ros.IResolvable;

    /**
     * @Property lifecycleHookName: The name of the lifecycle hook. Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
     * Default value: Lifecycle Hook ID
     */
    readonly lifecycleHookName?: string | ros.IResolvable;

    /**
     * @Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
     * region: the region to which the scaling group locates
     * account-id: Alibaba Cloud ID
     * For example:
     * MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
     * MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
     * OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
     */
    readonly notificationArn?: string | ros.IResolvable;

    /**
     * @Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
     */
    readonly notificationMetadata?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLifecycleHookProps`
 *
 * @param properties - the TypeScript properties of a `RosLifecycleHookProps`
 *
 * @returns the result of the validation.
 */
function RosLifecycleHookPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.lifecycleHookName && (typeof properties.lifecycleHookName) !== 'object') {
        errors.collect(ros.propertyValidator('lifecycleHookName', ros.validateAllowedPattern)({
          data: properties.lifecycleHookName,
          reg: /^[a-zA-Z0-9\u4e00-\u9fa5][-_.a-zA-Z0-9\u4e00-\u9fa5]{1,63}$/
        }));
    }
    errors.collect(ros.propertyValidator('lifecycleHookName', ros.validateString)(properties.lifecycleHookName));
    if(properties.notificationArn && (Array.isArray(properties.notificationArn) || (typeof properties.notificationArn) === 'string')) {
        errors.collect(ros.propertyValidator('notificationArn', ros.validateLength)({
            data: properties.notificationArn.length,
            min: undefined,
            max: 300,
          }));
    }
    if(properties.notificationArn && (typeof properties.notificationArn) !== 'object') {
        errors.collect(ros.propertyValidator('notificationArn', ros.validateAllowedPattern)({
          data: properties.notificationArn,
          reg: /^acs:ess:([a-zA-Z0-9-]+):(\d+):(queue|topic|oos)\/([a-zA-Z0-9][-_a-zA-Z0-9]{0,255})$/
        }));
    }
    errors.collect(ros.propertyValidator('notificationArn', ros.validateString)(properties.notificationArn));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.requiredValidator)(properties.scalingGroupId));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.validateString)(properties.scalingGroupId));
    errors.collect(ros.propertyValidator('lifecycleTransition', ros.requiredValidator)(properties.lifecycleTransition));
    if(properties.lifecycleTransition && (typeof properties.lifecycleTransition) !== 'object') {
        errors.collect(ros.propertyValidator('lifecycleTransition', ros.validateAllowedValues)({
          data: properties.lifecycleTransition,
          allowedValues: ["SCALE_OUT","SCALE_IN"],
        }));
    }
    errors.collect(ros.propertyValidator('lifecycleTransition', ros.validateString)(properties.lifecycleTransition));
    if(properties.heartbeatTimeout && (typeof properties.heartbeatTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('heartbeatTimeout', ros.validateRange)({
            data: properties.heartbeatTimeout,
            min: 30,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('heartbeatTimeout', ros.validateNumber)(properties.heartbeatTimeout));
    if(properties.notificationMetadata && (Array.isArray(properties.notificationMetadata) || (typeof properties.notificationMetadata) === 'string')) {
        errors.collect(ros.propertyValidator('notificationMetadata', ros.validateLength)({
            data: properties.notificationMetadata.length,
            min: undefined,
            max: 4096,
          }));
    }
    errors.collect(ros.propertyValidator('notificationMetadata', ros.validateString)(properties.notificationMetadata));
    if(properties.defaultResult && (typeof properties.defaultResult) !== 'object') {
        errors.collect(ros.propertyValidator('defaultResult', ros.validateAllowedValues)({
          data: properties.defaultResult,
          allowedValues: ["CONTINUE","ABANDON","ROLLBACK"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultResult', ros.validateString)(properties.defaultResult));
    return errors.wrap('supplied properties not correct for "RosLifecycleHookProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::LifecycleHook` resource
 *
 * @param properties - the TypeScript properties of a `RosLifecycleHookProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::LifecycleHook` resource.
 */
// @ts-ignore TS6133
function rosLifecycleHookPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLifecycleHookPropsValidator(properties).assertSuccess();
    }
    return {
      LifecycleTransition: ros.stringToRosTemplate(properties.lifecycleTransition),
      ScalingGroupId: ros.stringToRosTemplate(properties.scalingGroupId),
      DefaultResult: ros.stringToRosTemplate(properties.defaultResult),
      HeartbeatTimeout: ros.numberToRosTemplate(properties.heartbeatTimeout),
      LifecycleHookName: ros.stringToRosTemplate(properties.lifecycleHookName),
      NotificationArn: ros.stringToRosTemplate(properties.notificationArn),
      NotificationMetadata: ros.stringToRosTemplate(properties.notificationMetadata),
    };
}

/**
 * A ROS template type:  `ALIYUN::ESS::LifecycleHook`
 */
export class RosLifecycleHook extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::LifecycleHook";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute LifecycleHookId: The lifecycle hook ID
     */
    public readonly attrLifecycleHookId: ros.IResolvable;

    /**
     * @Attribute ScalingGroupId: The id of the scaling group to which the lifecycle hook belongs.
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property lifecycleTransition: The scaling activities to which lifecycle hooks apply Value range:
     *  SCALE_OUT: scale-out event
     *  SCALE_IN: scale-in event
     */
    public lifecycleTransition: string | ros.IResolvable;

    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    public scalingGroupId: string | ros.IResolvable;

    /**
     * @Property defaultResult: The action that the scaling group takes when the lifecycle hook times out. Value range:
     *  CONTINUE: the scaling group continues with the scale-in or scale-out process.
     *  ABANDON: the scaling group stops any remaining action of the scale-in or scale-out event.
     * Default value: CONTINUE
     * If the scaling group has multiple lifecycle hooks and one of them is terminated by the DefaultResult=ABANDON parameter during a scale-in event (SCALE_IN), the remaining lifecycle hooks under the same scaling group will also be terminated. Otherwise, the action following the wait state is the next action, as specified in the parameter DefaultResult, after the last lifecycle event under the same scaling group.
     */
    public defaultResult: string | ros.IResolvable | undefined;

    /**
     * @Property heartbeatTimeout: The time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, the scaling group performs the default action (DefaultResult). The range is from 30 to 86400 seconds. The default value is 600 seconds.
     * You can prevent the lifecycle hook from timing out by calling the RecordLifecycleActionHeartbeat operation. You can also terminate the lifecycle action by calling the CompleteLifecycleAction operation.
     */
    public heartbeatTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property lifecycleHookName: The name of the lifecycle hook. Each name must be unique within a scaling group. The name must be 2 to 64 characters in length and can contain letters, numbers, Chinese characters, and special characters including underscores (_), hyphens (-) and periods (.).
     * Default value: Lifecycle Hook ID
     */
    public lifecycleHookName: string | ros.IResolvable | undefined;

    /**
     * @Property notificationArn: The Alibaba Cloud Resource Name (ARN) of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This target can be either an MNS queue or an MNS topic. The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
     * region: the region to which the scaling group locates
     * account-id: Alibaba Cloud ID
     * For example:
     * MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
     * MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
     * OOS template: acs:ess:{region}:{account-id}:oos/{templatename}
     */
    public notificationArn: string | ros.IResolvable | undefined;

    /**
     * @Property notificationMetadata: The fixed string that you want to include when Auto Scaling sends a message about the wait state of the scaling activity to the notification target. The length of the parameter can be up to 4096 characters. Auto Scaling will send the specified NotificationMetadata parameter along with the notification message so that you can easily categorize your notifications. The NotificationMetadata parameter will only take effect after you specify the NotificationArn parameter.
     */
    public notificationMetadata: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ESS::LifecycleHook`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLifecycleHookProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLifecycleHook.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLifecycleHookId = this.getAtt('LifecycleHookId');
        this.attrScalingGroupId = this.getAtt('ScalingGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.lifecycleTransition = props.lifecycleTransition;
        this.scalingGroupId = props.scalingGroupId;
        this.defaultResult = props.defaultResult;
        this.heartbeatTimeout = props.heartbeatTimeout;
        this.lifecycleHookName = props.lifecycleHookName;
        this.notificationArn = props.notificationArn;
        this.notificationMetadata = props.notificationMetadata;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            lifecycleTransition: this.lifecycleTransition,
            scalingGroupId: this.scalingGroupId,
            defaultResult: this.defaultResult,
            heartbeatTimeout: this.heartbeatTimeout,
            lifecycleHookName: this.lifecycleHookName,
            notificationArn: this.notificationArn,
            notificationMetadata: this.notificationMetadata,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLifecycleHookPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ESS::LoadBalancerAttachment`
 */
export interface RosLoadBalancerAttachmentProps {

    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * @Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly forceAttach?: boolean | ros.IResolvable;

    /**
     * @Property loadBalancerConfigs: Load balancer configuration list.
     */
    readonly loadBalancerConfigs?: Array<RosLoadBalancerAttachment.LoadBalancerConfigsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group. Valid values of N: 1 to 5.
     */
    readonly loadBalancers?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLoadBalancerAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('scalingGroupId', ros.requiredValidator)(properties.scalingGroupId));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.validateString)(properties.scalingGroupId));
    errors.collect(ros.propertyValidator('forceAttach', ros.validateBoolean)(properties.forceAttach));
    if(properties.loadBalancers && (Array.isArray(properties.loadBalancers) || (typeof properties.loadBalancers) === 'string')) {
        errors.collect(ros.propertyValidator('loadBalancers', ros.validateLength)({
            data: properties.loadBalancers.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('loadBalancers', ros.listValidator(ros.validateString))(properties.loadBalancers));
    if(properties.loadBalancerConfigs && (Array.isArray(properties.loadBalancerConfigs) || (typeof properties.loadBalancerConfigs) === 'string')) {
        errors.collect(ros.propertyValidator('loadBalancerConfigs', ros.validateLength)({
            data: properties.loadBalancerConfigs.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('loadBalancerConfigs', ros.listValidator(RosLoadBalancerAttachment_LoadBalancerConfigsPropertyValidator))(properties.loadBalancerConfigs));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::LoadBalancerAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::LoadBalancerAttachment` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancerAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      ScalingGroupId: ros.stringToRosTemplate(properties.scalingGroupId),
      ForceAttach: ros.booleanToRosTemplate(properties.forceAttach),
      LoadBalancerConfigs: ros.listMapper(rosLoadBalancerAttachmentLoadBalancerConfigsPropertyToRosTemplate)(properties.loadBalancerConfigs),
      LoadBalancers: ros.listMapper(ros.stringToRosTemplate)(properties.loadBalancers),
    };
}

/**
 * A ROS template type:  `ALIYUN::ESS::LoadBalancerAttachment`
 */
export class RosLoadBalancerAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::LoadBalancerAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    public scalingGroupId: string | ros.IResolvable;

    /**
     * @Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance. Valid values:
     * true
     * false
     * Default value: false.
     */
    public forceAttach: boolean | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerConfigs: Load balancer configuration list.
     */
    public loadBalancerConfigs: Array<RosLoadBalancerAttachment.LoadBalancerConfigsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group. Valid values of N: 1 to 5.
     */
    public loadBalancers: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ESS::LoadBalancerAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancerAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.scalingGroupId = props.scalingGroupId;
        this.forceAttach = props.forceAttach;
        this.loadBalancerConfigs = props.loadBalancerConfigs;
        this.loadBalancers = props.loadBalancers;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            scalingGroupId: this.scalingGroupId,
            forceAttach: this.forceAttach,
            loadBalancerConfigs: this.loadBalancerConfigs,
            loadBalancers: this.loadBalancers,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoadBalancerAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosLoadBalancerAttachment {
    /**
     * @stability external
     */
    export interface LoadBalancerConfigsProperty {
        /**
         * @Property loadBalancerId: The ID of the CLB instance.
         */
        readonly loadBalancerId?: string | ros.IResolvable;
        /**
         * @Property weight: The weight of an Elastic Compute Service (ECS) instance as a backend server in the backend server groups of the attached CLB instance. If you increase the weight of an ECS instance, the number of access requests that are forwarded to the ECS instance also increases. If you set Weight to 0 for an ECS instance, no access requests are forwarded to the ECS instance.
     * Valid values: 0 to 100.
         */
        readonly weight?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LoadBalancerConfigsProperty`
 *
 * @param properties - the TypeScript properties of a `LoadBalancerConfigsProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerAttachment_LoadBalancerConfigsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "LoadBalancerConfigsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::LoadBalancerAttachment.LoadBalancerConfigs` resource
 *
 * @param properties - the TypeScript properties of a `LoadBalancerConfigsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::LoadBalancerAttachment.LoadBalancerConfigs` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerAttachmentLoadBalancerConfigsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancerAttachment_LoadBalancerConfigsPropertyValidator(properties).assertSuccess();
    return {
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

/**
 * Properties for defining a `ALIYUN::ESS::ScalingConfiguration`
 */
export interface RosScalingConfigurationProps {

    /**
     * @Property scalingGroupId: Scaling group id to create the scaling configuration.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * @Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * Standard: the standard mode.
     * Unlimited: the unlimited mode.
     */
    readonly creditSpecification?: string | ros.IResolvable;

    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    readonly deploymentSetId?: string | ros.IResolvable;

    /**
     * @Property diskMappings: Disk mappings to attach to instance.
     */
    readonly diskMappings?: Array<RosScalingConfiguration.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property hostName: The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
     * Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
     * Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
     */
    readonly hostName?: string | ros.IResolvable;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    readonly hpcClusterId?: string | ros.IResolvable;

    /**
     * @Property imageFamily: The name of the image family. You can configure this parameter to obtain the latest available custom images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
     */
    readonly imageFamily?: string | ros.IResolvable;

    /**
     * @Property imageId: Image ID to create ecs instance .
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * @Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property instanceName: The name of the instance launched from the current scaling configuration.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property instanceType: ecs supported instance type.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
     */
    readonly instanceTypes?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number | ros.IResolvable;

    /**
     * @Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
     * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
     * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
     */
    readonly ioOptimized?: string | ros.IResolvable;

    /**
     * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property loadBalancerWeight: The weight of the ECS instance as a backend server. Valid values: 1 to 100.
     * Default value: 50.
     */
    readonly loadBalancerWeight?: number | ros.IResolvable;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property scalingConfigurationName: Name of created scaling configuration.
     */
    readonly scalingConfigurationName?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security Group to create ecs instance.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
     */
    readonly spotPriceLimit?: number | ros.IResolvable;

    /**
     * @Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
     * The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 50 items can be specified.
     * Key
     * 	ecs instance type
     * Value
     * 	Supports a maximum of 3 decimal places.
     */
    readonly spotPriceLimitForInstanceType?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
     * NoSpot: Normal pay-per-use instance
     * SpotWithPriceLimit: Set a preemptive instance of the cap price
     * SpotAsPriceGo: System automatic bidding, following the current market actual price
     * Default: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string | ros.IResolvable;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
     */
    readonly systemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of an ESSD.
     */
    readonly systemDiskPerformanceLevel?: string | ros.IResolvable;

    /**
     * @Property systemDiskSize: Size of system disk. Unit is GB.
     */
    readonly systemDiskSize?: number | ros.IResolvable;

    /**
     * @Property tagList: The tags of an instance in list format.
     * Do not use with Tags at the same time.
     * You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
     * At most 20 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>_stack_<stack_id>") if possible.
     */
    readonly tagList?: Array<RosScalingConfiguration.TagListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    readonly userData?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosScalingConfigurationProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingConfigurationProps`
 *
 * @returns the result of the validation.
 */
function RosScalingConfigurationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('scalingConfigurationName', ros.validateString)(properties.scalingConfigurationName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('diskMappings', ros.listValidator(RosScalingConfiguration_DiskMappingsPropertyValidator))(properties.diskMappings));
    if(properties.systemDiskSize && (typeof properties.systemDiskSize) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskSize', ros.validateRange)({
            data: properties.systemDiskSize,
            min: 20,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    errors.collect(ros.propertyValidator('systemDiskAutoSnapshotPolicyId', ros.validateString)(properties.systemDiskAutoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('systemDiskPerformanceLevel', ros.validateString)(properties.systemDiskPerformanceLevel));
    errors.collect(ros.propertyValidator('spotPriceLimitForInstanceType', ros.hashValidator(ros.validateAny))(properties.spotPriceLimitForInstanceType));
    if(properties.ipv6AddressCount && (typeof properties.ipv6AddressCount) !== 'object') {
        errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateRange)({
            data: properties.ipv6AddressCount,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateNumber)(properties.spotPriceLimit));
    if(properties.tagList && (Array.isArray(properties.tagList) || (typeof properties.tagList) === 'string')) {
        errors.collect(ros.propertyValidator('tagList', ros.validateLength)({
            data: properties.tagList.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tagList', ros.listValidator(RosScalingConfiguration_TagListPropertyValidator))(properties.tagList));
    if(properties.instanceTypes && (Array.isArray(properties.instanceTypes) || (typeof properties.instanceTypes) === 'string')) {
        errors.collect(ros.propertyValidator('instanceTypes', ros.validateLength)({
            data: properties.instanceTypes.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('instanceTypes', ros.listValidator(ros.validateAny))(properties.instanceTypes));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('passwordInherit', ros.validateBoolean)(properties.passwordInherit));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    if(properties.loadBalancerWeight && (typeof properties.loadBalancerWeight) !== 'object') {
        errors.collect(ros.propertyValidator('loadBalancerWeight', ros.validateRange)({
            data: properties.loadBalancerWeight,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('loadBalancerWeight', ros.validateNumber)(properties.loadBalancerWeight));
    if(properties.ioOptimized && (typeof properties.ioOptimized) !== 'object') {
        errors.collect(ros.propertyValidator('ioOptimized', ros.validateAllowedValues)({
          data: properties.ioOptimized,
          allowedValues: ["none","optimized"],
        }));
    }
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateString)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('hpcClusterId', ros.validateString)(properties.hpcClusterId));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.requiredValidator)(properties.scalingGroupId));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.validateString)(properties.scalingGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('imageFamily', ros.validateString)(properties.imageFamily));
    if(properties.systemDiskCategory && (typeof properties.systemDiskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateAllowedValues)({
          data: properties.systemDiskCategory,
          allowedValues: ["cloud","cloud_efficiency","cloud_ssd","cloud_essd","ephemeral_ssd","cloud_auto"],
        }));
    }
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["paybytraffic","PayByTraffic","paybybandwidth","PayByBandwidth"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    if(properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    if(properties.internetMaxBandwidthIn && (typeof properties.internetMaxBandwidthIn) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateRange)({
            data: properties.internetMaxBandwidthIn,
            min: 1,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthIn', ros.validateNumber)(properties.internetMaxBandwidthIn));
    if(properties.creditSpecification && (typeof properties.creditSpecification) !== 'object') {
        errors.collect(ros.propertyValidator('creditSpecification', ros.validateAllowedValues)({
          data: properties.creditSpecification,
          allowedValues: ["Standard","Unlimited"],
        }));
    }
    errors.collect(ros.propertyValidator('creditSpecification', ros.validateString)(properties.creditSpecification));
    return errors.wrap('supplied properties not correct for "RosScalingConfigurationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingConfigurationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingConfiguration` resource.
 */
// @ts-ignore TS6133
function rosScalingConfigurationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScalingConfigurationPropsValidator(properties).assertSuccess();
    }
    return {
      ScalingGroupId: ros.stringToRosTemplate(properties.scalingGroupId),
      CreditSpecification: ros.stringToRosTemplate(properties.creditSpecification),
      DeploymentSetId: ros.stringToRosTemplate(properties.deploymentSetId),
      DiskMappings: ros.listMapper(rosScalingConfigurationDiskMappingsPropertyToRosTemplate)(properties.diskMappings),
      HostName: ros.stringToRosTemplate(properties.hostName),
      HpcClusterId: ros.stringToRosTemplate(properties.hpcClusterId),
      ImageFamily: ros.stringToRosTemplate(properties.imageFamily),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      InstanceTypes: ros.listMapper(ros.objectToRosTemplate)(properties.instanceTypes),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      InternetMaxBandwidthIn: ros.numberToRosTemplate(properties.internetMaxBandwidthIn),
      InternetMaxBandwidthOut: ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      IoOptimized: ros.stringToRosTemplate(properties.ioOptimized),
      Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      LoadBalancerWeight: ros.numberToRosTemplate(properties.loadBalancerWeight),
      Password: ros.stringToRosTemplate(properties.password),
      PasswordInherit: ros.booleanToRosTemplate(properties.passwordInherit),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      ScalingConfigurationName: ros.stringToRosTemplate(properties.scalingConfigurationName),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SpotPriceLimit: ros.numberToRosTemplate(properties.spotPriceLimit),
      SpotPriceLimitForInstanceType: ros.hashMapper(ros.objectToRosTemplate)(properties.spotPriceLimitForInstanceType),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
      SystemDiskAutoSnapshotPolicyId: ros.stringToRosTemplate(properties.systemDiskAutoSnapshotPolicyId),
      SystemDiskCategory: ros.stringToRosTemplate(properties.systemDiskCategory),
      SystemDiskPerformanceLevel: ros.stringToRosTemplate(properties.systemDiskPerformanceLevel),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      TagList: ros.listMapper(rosScalingConfigurationTagListPropertyToRosTemplate)(properties.tagList),
      UserData: ros.stringToRosTemplate(properties.userData),
    };
}

/**
 * A ROS template type:  `ALIYUN::ESS::ScalingConfiguration`
 */
export class RosScalingConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScalingConfiguration";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ScalingConfigurationId: The scaling configuration id
     */
    public readonly attrScalingConfigurationId: ros.IResolvable;

    /**
     * @Attribute ScalingGroupId: The id of the scaling group to which the scaling configuration belongs.
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property scalingGroupId: Scaling group id to create the scaling configuration.
     */
    public scalingGroupId: string | ros.IResolvable;

    /**
     * @Property creditSpecification: The performance mode of the burstable instance. Valid values:
     * Standard: the standard mode.
     * Unlimited: the unlimited mode.
     */
    public creditSpecification: string | ros.IResolvable | undefined;

    /**
     * @Property deploymentSetId: Deployment set ID.
     */
    public deploymentSetId: string | ros.IResolvable | undefined;

    /**
     * @Property diskMappings: Disk mappings to attach to instance.
     */
    public diskMappings: Array<RosScalingConfiguration.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property hostName: The hostname of the ECS instance. The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-). Naming conventions for different types of instances:
     * Windows instances: The hostname must be 2 to 15 characters in length, and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
     * Other instances such as Linux instances: The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
     */
    public hostName: string | ros.IResolvable | undefined;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.
     */
    public hpcClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property imageFamily: The name of the image family. You can configure this parameter to obtain the latest available custom images within the specified image family. The images are used to create ECS instances. If you have set the ImageId parameter, you cannot set the ImageFamily parameter.
     */
    public imageFamily: string | ros.IResolvable | undefined;

    /**
     * @Property imageId: Image ID to create ecs instance .
     */
    public imageId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: Source ECS instance to copy configuration, if the properties is setting, Which will copy the InstanceType, ImageId, InternetChargeType, IoOptimized,UserData, KeyPairName, RamRoleName, InternetMaxBandwidthIn,InternetMaxBandwidthOut, and first security group id from source instance, you can also specify the relative properties to overwrite the properties copy from source instance id.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceName: The name of the instance launched from the current scaling configuration.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property instanceType: ecs supported instance type.
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceTypes: ecs supported instance types. Length [1,10]. If InstanceTypes is specified,the InstanceType will be ignored.
     */
    public instanceTypes: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property internetMaxBandwidthIn: Maximum incoming bandwidth from the public network, measured in Mbps (Mega bit per second). The value range is [1,200]. If this parameter value is not specified, AliyunAPI automatically sets the value to 200 Mbps.
     */
    public internetMaxBandwidthIn: number | ros.IResolvable | undefined;

    /**
     * @Property internetMaxBandwidthOut: Maximum outgoing bandwidth from the public network, measured in Mbps (Mega bit per second).
     * The value range for PayByBandwidth is [0,100]. If this parameter value is not specified, AliyunAPI automatically sets the value to 0 Mbps.
     * The value range for PayByTraffic is [0,100]. If this parameter value is not specified, an error is reported
     */
    public internetMaxBandwidthOut: number | ros.IResolvable | undefined;

    /**
     * @Property ioOptimized: The 'optimized' instance can provide better IO performance. Support 'none' and 'optimized' only, default is 'none'.
     */
    public ioOptimized: string | ros.IResolvable | undefined;

    /**
     * @Property ipv6AddressCount: The number of randomly generated IPv6 addresses to be assigned to the elastic network interface (ENI).
     */
    public ipv6AddressCount: number | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: SSH key pair name.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerWeight: The weight of the ECS instance as a backend server. Valid values: 1 to 100.
     * Default value: 50.
     */
    public loadBalancerWeight: number | ros.IResolvable | undefined;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property passwordInherit: Whether to use the password pre-configured in the image you select or not. When PasswordInherit is specified, the Password must be null. For a secure access, make sure that the selected image has password configured.
     */
    public passwordInherit: boolean | ros.IResolvable | undefined;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    public ramRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property scalingConfigurationName: Name of created scaling configuration.
     */
    public scalingConfigurationName: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Security Group to create ecs instance.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property spotPriceLimit: Set the hourly maximum price for the instance. Supports a maximum of 3 decimal places, and the parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.It is a default value for all instance types, and can be overwrite by SpotPriceLimitForInstanceType
     */
    public spotPriceLimit: number | ros.IResolvable | undefined;

    /**
     * @Property spotPriceLimitForInstanceType: Set the hourly maximum price for the instance of specified instance type.
     * The parameter takes effect only when the value of SpotStrategy is SpotWithPriceLimit.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 50 items can be specified.
     * Key
     * 	ecs instance type
     * Value
     * 	Supports a maximum of 3 decimal places.
     */
    public spotPriceLimitForInstanceType: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property spotStrategy: Preemption strategy for post-paid instances. It takes effect when the parameter InstanceChargeType takes the value of PostPaid. Ranges:
     * NoSpot: Normal pay-per-use instance
     * SpotWithPriceLimit: Set a preemptive instance of the cap price
     * SpotAsPriceGo: System automatic bidding, following the current market actual price
     * Default: NoSpot.
     */
    public spotStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    public systemDiskAutoSnapshotPolicyId: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud.support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd|cloud_auto
     */
    public systemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskPerformanceLevel: The performance level of an ESSD.
     */
    public systemDiskPerformanceLevel: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskSize: Size of system disk. Unit is GB.
     */
    public systemDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property tagList: The tags of an instance in list format.
     * Do not use with Tags at the same time.
     * You should input the information of the tag with the format of Key-Value list, such as [{"Key":"key1","Value":"value1"}, ...].
     * At most 20 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.If less then 20 tags are specified, ros will add a tag(Key: "ros-aliyun-created", Value:"<resource_name>_stack_<stack_id>") if possible.
     */
    public tagList: Array<RosScalingConfiguration.TagListProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    public userData: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ESS::ScalingConfiguration`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingConfigurationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScalingConfiguration.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingConfigurationId = this.getAtt('ScalingConfigurationId');
        this.attrScalingGroupId = this.getAtt('ScalingGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.scalingGroupId = props.scalingGroupId;
        this.creditSpecification = props.creditSpecification;
        this.deploymentSetId = props.deploymentSetId;
        this.diskMappings = props.diskMappings;
        this.hostName = props.hostName;
        this.hpcClusterId = props.hpcClusterId;
        this.imageFamily = props.imageFamily;
        this.imageId = props.imageId;
        this.instanceId = props.instanceId;
        this.instanceName = props.instanceName;
        this.instanceType = props.instanceType;
        this.instanceTypes = props.instanceTypes;
        this.internetChargeType = props.internetChargeType;
        this.internetMaxBandwidthIn = props.internetMaxBandwidthIn;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.ioOptimized = props.ioOptimized;
        this.ipv6AddressCount = props.ipv6AddressCount;
        this.keyPairName = props.keyPairName;
        this.loadBalancerWeight = props.loadBalancerWeight;
        this.password = props.password;
        this.passwordInherit = props.passwordInherit;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.scalingConfigurationName = props.scalingConfigurationName;
        this.securityGroupId = props.securityGroupId;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotPriceLimitForInstanceType = props.spotPriceLimitForInstanceType;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskAutoSnapshotPolicyId = props.systemDiskAutoSnapshotPolicyId;
        this.systemDiskCategory = props.systemDiskCategory;
        this.systemDiskPerformanceLevel = props.systemDiskPerformanceLevel;
        this.systemDiskSize = props.systemDiskSize;
        this.tagList = props.tagList;
        this.userData = props.userData;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            scalingGroupId: this.scalingGroupId,
            creditSpecification: this.creditSpecification,
            deploymentSetId: this.deploymentSetId,
            diskMappings: this.diskMappings,
            hostName: this.hostName,
            hpcClusterId: this.hpcClusterId,
            imageFamily: this.imageFamily,
            imageId: this.imageId,
            instanceId: this.instanceId,
            instanceName: this.instanceName,
            instanceType: this.instanceType,
            instanceTypes: this.instanceTypes,
            internetChargeType: this.internetChargeType,
            internetMaxBandwidthIn: this.internetMaxBandwidthIn,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            ioOptimized: this.ioOptimized,
            ipv6AddressCount: this.ipv6AddressCount,
            keyPairName: this.keyPairName,
            loadBalancerWeight: this.loadBalancerWeight,
            password: this.password,
            passwordInherit: this.passwordInherit,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            scalingConfigurationName: this.scalingConfigurationName,
            securityGroupId: this.securityGroupId,
            spotPriceLimit: this.spotPriceLimit,
            spotPriceLimitForInstanceType: this.spotPriceLimitForInstanceType,
            spotStrategy: this.spotStrategy,
            systemDiskAutoSnapshotPolicyId: this.systemDiskAutoSnapshotPolicyId,
            systemDiskCategory: this.systemDiskCategory,
            systemDiskPerformanceLevel: this.systemDiskPerformanceLevel,
            systemDiskSize: this.systemDiskSize,
            tagList: this.tagList,
            userData: this.userData,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScalingConfigurationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosScalingConfiguration {
    /**
     * @stability external
     */
    export interface DiskMappingsProperty {
        /**
         * @Property snapshotId: ID of the snapshot to create the volume.
         */
        readonly snapshotId?: string | ros.IResolvable;
        /**
         * @Property category: The volume type to create.Now support: cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssdDefault is cloud.
         */
        readonly category?: string | ros.IResolvable;
        /**
         * @Property description: Description of the disk, [2, 256] characters. Do not fill or empty, the default is empty.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property kmsKeyId: The KMS key ID for the data disk.
         */
        readonly kmsKeyId?: string | ros.IResolvable;
        /**
         * @Property encrypted: Whether the data disk is encrypted or not. Options:
     * true: Encrypted.
     * false: Not encrypted.
     * Default value: false.
         */
        readonly encrypted?: string | ros.IResolvable;
        /**
         * @Property device: A device name where the volume will be attached in the system at /dev/xvd[id]. Range from '/dev/xvdb' to '/dev/xvdz'.
         */
        readonly device?: string | ros.IResolvable;
        /**
         * @Property performanceLevel: The performance level of an ESSD.
         */
        readonly performanceLevel?: string | ros.IResolvable;
        /**
         * @Property size: The size of the volume, in GB. Must be equal or greater than the size of the snapshot. It is safe to leave this blank and have the Compute service infer the size.
         */
        readonly size?: string | ros.IResolvable;
        /**
         * @Property autoSnapshotPolicyId: Auto snapshot policy ID.
         */
        readonly autoSnapshotPolicyId?: string | ros.IResolvable;
        /**
         * @Property diskName: Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         */
        readonly diskName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DiskMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosScalingConfiguration_DiskMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    if(properties.encrypted && (typeof properties.encrypted) !== 'object') {
        errors.collect(ros.propertyValidator('encrypted', ros.validateAllowedValues)({
          data: properties.encrypted,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('encrypted', ros.validateString)(properties.encrypted));
    errors.collect(ros.propertyValidator('device', ros.validateString)(properties.device));
    errors.collect(ros.propertyValidator('performanceLevel', ros.validateString)(properties.performanceLevel));
    errors.collect(ros.propertyValidator('size', ros.validateString)(properties.size));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    return errors.wrap('supplied properties not correct for "DiskMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingConfiguration.DiskMappings` resource
 *
 * @param properties - the TypeScript properties of a `DiskMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingConfiguration.DiskMappings` resource.
 */
// @ts-ignore TS6133
function rosScalingConfigurationDiskMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosScalingConfiguration_DiskMappingsPropertyValidator(properties).assertSuccess();
    return {
      SnapshotId: ros.stringToRosTemplate(properties.snapshotId),
      Category: ros.stringToRosTemplate(properties.category),
      Description: ros.stringToRosTemplate(properties.description),
      KMSKeyId: ros.stringToRosTemplate(properties.kmsKeyId),
      Encrypted: ros.stringToRosTemplate(properties.encrypted),
      Device: ros.stringToRosTemplate(properties.device),
      PerformanceLevel: ros.stringToRosTemplate(properties.performanceLevel),
      Size: ros.stringToRosTemplate(properties.size),
      AutoSnapshotPolicyId: ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
      DiskName: ros.stringToRosTemplate(properties.diskName),
    };
}

export namespace RosScalingConfiguration {
    /**
     * @stability external
     */
    export interface TagListProperty {
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
 * Determine whether the given properties match those of a `TagListProperty`
 *
 * @param properties - the TypeScript properties of a `TagListProperty`
 *
 * @returns the result of the validation.
 */
function RosScalingConfiguration_TagListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingConfiguration.TagList` resource
 *
 * @param properties - the TypeScript properties of a `TagListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingConfiguration.TagList` resource.
 */
// @ts-ignore TS6133
function rosScalingConfigurationTagListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosScalingConfiguration_TagListPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ESS::ScalingGroup`
 */
export interface RosScalingGroupProps {

    /**
     * @Property maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
     */
    readonly maxSize: number | ros.IResolvable;

    /**
     * @Property minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
     */
    readonly minSize: number | ros.IResolvable;

    /**
     * @Property allocationStrategy: The allocation policy of instances. Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.
     * - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
     * Default value: priority.
     */
    readonly allocationStrategy?: string | ros.IResolvable;

    /**
     * @Property azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - true
     * - false
     * Default value: false.
     */
    readonly azBalance?: boolean | ros.IResolvable;

    /**
     * @Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
     * Default value: true.
     */
    readonly compensateWithOnDemand?: boolean | ros.IResolvable;

    /**
     * @Property containerGroupId: The ID of the elastic container instance.
     */
    readonly containerGroupId?: string | ros.IResolvable;

    /**
     * @Property customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function). This parameter takes effect only if you specify CustomPolicy as the value of first item of RemovalPolicys.
     */
    readonly customPolicyArn?: string | ros.IResolvable;

    /**
     * @Property dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
     */
    readonly dbInstanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
     * The default value is 300s.
     */
    readonly defaultCooldown?: number | ros.IResolvable;

    /**
     * @Property desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
     */
    readonly desiredCapacity?: number | ros.IResolvable;

    /**
     * @Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
     * Default to False.
     */
    readonly groupDeletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS
     * ECI
     * Default value: ECS.
     */
    readonly groupType?: string | ros.IResolvable;

    /**
     * @Property healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
     */
    readonly healthCheckType?: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
     */
    readonly launchTemplateId?: string | ros.IResolvable;

    /**
     * @Property launchTemplateOverrides: You can specify up to 10 overrides.
     * Note: This parameter takes effect only if you specify LaunchTemplateId.
     */
    readonly launchTemplateOverrides?: Array<RosScalingGroup.LaunchTemplateOverridesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property launchTemplateVersion: The version of the instance launch template. Valid values:
     * A fixed template version numbe.
     * Default: The default template version is always used.
     * Latest: The latest template version is always used.
     */
    readonly launchTemplateVersion?: string | ros.IResolvable;

    /**
     * @Property loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
     */
    readonly loadBalancerIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group. Unit: seconds.
     * Valid values: 86400 to the value of Integer.maxValue.
     * Default value: null.
     * Note: This parameter is unavailable for scaling groups of the ECI type or scaling groups whose ScalingPolicy is set to recycle.
     */
    readonly maxInstanceLifetime?: number | ros.IResolvable;

    /**
     * @Property multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:
     * 1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
     * 2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.
     * 3. COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
     * Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.
     * 4. COMPOSABLE: You can flexibly combine the preceding policies based on your business requirements.
     */
    readonly multiAzPolicy?: string | ros.IResolvable;

    /**
     * @Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
     */
    readonly notificationConfigurations?: Array<RosScalingGroup.NotificationConfigurationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
     * If you set MultiAZPolicy to COMPOSABLE Policy, the default value of this parameter is 0.
     */
    readonly onDemandBaseCapacity?: number | ros.IResolvable;

    /**
     * @Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
     * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 100.
     */
    readonly onDemandPercentageAboveBaseCapacity?: number | ros.IResolvable;

    /**
     * @Property protectedInstances: ECS instances of protected mode in the scaling group.
     */
    readonly protectedInstances?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property removalPolicys: Policy for removing ECS instances from the scaling group.
     * Optional values:
     * - OldestInstance: removes the first ECS instance attached to the scaling group.
     * - NewestInstance: removes the first ECS instance attached to the scaling group.
     * - OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
     * - CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
     * You can enter up to three removal policies.
     * You cannot set any item of RemovalPolicys to the same value.
     * The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. You can specify CustomPolicy only as the value of first item of RemovalPolicys. If you set first item of RemovalPolicys to CustomPolicy, you must also specify CustomPolicyARN.
     * Note: The removal of ECS instances from a scaling group is also affected by the value of MultiAZPolicy.
     */
    readonly removalPolicys?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
     * If this parameter is not specified, the default value is ScalingGroupId.
     */
    readonly scalingGroupName?: string | ros.IResolvable;

    /**
     * @Property scalingPolicy: The reclaim mode of the scaling group. Valid values:
     * recycle
     * release
     * ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
     */
    readonly scalingPolicy?: string | ros.IResolvable;

    /**
     * @Property spotAllocationStrategy: The allocation policy of preemptible instances. You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.
     * - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
     * Default value: priority.
     */
    readonly spotAllocationStrategy?: string | ros.IResolvable;

    /**
     * @Property spotInstancePools: The number of instance types that are available. The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
     * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 2.
     */
    readonly spotInstancePools?: number | ros.IResolvable;

    /**
     * @Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
     */
    readonly spotInstanceRemedy?: boolean | ros.IResolvable;

    /**
     * @Property standbyInstances: ECS instances of standby mode in the scaling group.
     */
    readonly standbyInstances?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosScalingGroup.TagsProperty[];

    /**
     * @Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
     * The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC.
     * The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority.
     * When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
     */
    readonly vSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosScalingGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingGroupProps`
 *
 * @returns the result of the validation.
 */
function RosScalingGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('spotInstanceRemedy', ros.validateBoolean)(properties.spotInstanceRemedy));
    errors.collect(ros.propertyValidator('compensateWithOnDemand', ros.validateBoolean)(properties.compensateWithOnDemand));
    errors.collect(ros.propertyValidator('notificationConfigurations', ros.listValidator(RosScalingGroup_NotificationConfigurationsPropertyValidator))(properties.notificationConfigurations));
    if(properties.onDemandPercentageAboveBaseCapacity && (typeof properties.onDemandPercentageAboveBaseCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('onDemandPercentageAboveBaseCapacity', ros.validateRange)({
            data: properties.onDemandPercentageAboveBaseCapacity,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('onDemandPercentageAboveBaseCapacity', ros.validateNumber)(properties.onDemandPercentageAboveBaseCapacity));
    errors.collect(ros.propertyValidator('desiredCapacity', ros.validateNumber)(properties.desiredCapacity));
    if(properties.allocationStrategy && (typeof properties.allocationStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('allocationStrategy', ros.validateAllowedValues)({
          data: properties.allocationStrategy,
          allowedValues: ["priority","lowestPrice"],
        }));
    }
    errors.collect(ros.propertyValidator('allocationStrategy', ros.validateString)(properties.allocationStrategy));
    if(properties.onDemandBaseCapacity && (typeof properties.onDemandBaseCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('onDemandBaseCapacity', ros.validateRange)({
            data: properties.onDemandBaseCapacity,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('onDemandBaseCapacity', ros.validateNumber)(properties.onDemandBaseCapacity));
    if(properties.standbyInstances && (Array.isArray(properties.standbyInstances) || (typeof properties.standbyInstances) === 'string')) {
        errors.collect(ros.propertyValidator('standbyInstances', ros.validateLength)({
            data: properties.standbyInstances.length,
            min: undefined,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('standbyInstances', ros.listValidator(ros.validateAny))(properties.standbyInstances));
    if(properties.launchTemplateOverrides && (Array.isArray(properties.launchTemplateOverrides) || (typeof properties.launchTemplateOverrides) === 'string')) {
        errors.collect(ros.propertyValidator('launchTemplateOverrides', ros.validateLength)({
            data: properties.launchTemplateOverrides.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('launchTemplateOverrides', ros.listValidator(RosScalingGroup_LaunchTemplateOverridesPropertyValidator))(properties.launchTemplateOverrides));
    if(properties.removalPolicys && (Array.isArray(properties.removalPolicys) || (typeof properties.removalPolicys) === 'string')) {
        errors.collect(ros.propertyValidator('removalPolicys', ros.validateLength)({
            data: properties.removalPolicys.length,
            min: undefined,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('removalPolicys', ros.listValidator(ros.validateAny))(properties.removalPolicys));
    if(properties.spotAllocationStrategy && (typeof properties.spotAllocationStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotAllocationStrategy', ros.validateAllowedValues)({
          data: properties.spotAllocationStrategy,
          allowedValues: ["priority","lowestPrice"],
        }));
    }
    errors.collect(ros.propertyValidator('spotAllocationStrategy', ros.validateString)(properties.spotAllocationStrategy));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosScalingGroup_TagsPropertyValidator))(properties.tags));
    if(properties.scalingPolicy && (typeof properties.scalingPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('scalingPolicy', ros.validateAllowedValues)({
          data: properties.scalingPolicy,
          allowedValues: ["recycle","release"],
        }));
    }
    errors.collect(ros.propertyValidator('scalingPolicy', ros.validateString)(properties.scalingPolicy));
    if(properties.vSwitchIds && (Array.isArray(properties.vSwitchIds) || (typeof properties.vSwitchIds) === 'string')) {
        errors.collect(ros.propertyValidator('vSwitchIds', ros.validateLength)({
            data: properties.vSwitchIds.length,
            min: 0,
            max: 8,
          }));
    }
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateAny))(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.loadBalancerIds && (Array.isArray(properties.loadBalancerIds) || (typeof properties.loadBalancerIds) === 'string')) {
        errors.collect(ros.propertyValidator('loadBalancerIds', ros.validateLength)({
            data: properties.loadBalancerIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('loadBalancerIds', ros.listValidator(ros.validateAny))(properties.loadBalancerIds));
    if(properties.spotInstancePools && (typeof properties.spotInstancePools) !== 'object') {
        errors.collect(ros.propertyValidator('spotInstancePools', ros.validateRange)({
            data: properties.spotInstancePools,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('spotInstancePools', ros.validateNumber)(properties.spotInstancePools));
    errors.collect(ros.propertyValidator('groupDeletionProtection', ros.validateBoolean)(properties.groupDeletionProtection));
    errors.collect(ros.propertyValidator('launchTemplateId', ros.validateString)(properties.launchTemplateId));
    errors.collect(ros.propertyValidator('customPolicyArn', ros.validateString)(properties.customPolicyArn));
    errors.collect(ros.propertyValidator('maxSize', ros.requiredValidator)(properties.maxSize));
    if(properties.maxSize && (typeof properties.maxSize) !== 'object') {
        errors.collect(ros.propertyValidator('maxSize', ros.validateRange)({
            data: properties.maxSize,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('maxSize', ros.validateNumber)(properties.maxSize));
    if(properties.scalingGroupName && (typeof properties.scalingGroupName) !== 'object') {
        errors.collect(ros.propertyValidator('scalingGroupName', ros.validateAllowedPattern)({
          data: properties.scalingGroupName,
          reg: /^[a-zA-Z0-9\u4e00-\u9fa5][-_.a-zA-Z0-9\u4e00-\u9fa5]{1,63}$/
        }));
    }
    errors.collect(ros.propertyValidator('scalingGroupName', ros.validateString)(properties.scalingGroupName));
    errors.collect(ros.propertyValidator('minSize', ros.requiredValidator)(properties.minSize));
    if(properties.minSize && (typeof properties.minSize) !== 'object') {
        errors.collect(ros.propertyValidator('minSize', ros.validateRange)({
            data: properties.minSize,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('minSize', ros.validateNumber)(properties.minSize));
    if(properties.defaultCooldown && (typeof properties.defaultCooldown) !== 'object') {
        errors.collect(ros.propertyValidator('defaultCooldown', ros.validateRange)({
            data: properties.defaultCooldown,
            min: 0,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('defaultCooldown', ros.validateNumber)(properties.defaultCooldown));
    errors.collect(ros.propertyValidator('azBalance', ros.validateBoolean)(properties.azBalance));
    if(properties.groupType && (typeof properties.groupType) !== 'object') {
        errors.collect(ros.propertyValidator('groupType', ros.validateAllowedValues)({
          data: properties.groupType,
          allowedValues: ["ECS","ECI"],
        }));
    }
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    errors.collect(ros.propertyValidator('launchTemplateVersion', ros.validateString)(properties.launchTemplateVersion));
    if(properties.multiAzPolicy && (typeof properties.multiAzPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('multiAzPolicy', ros.validateAllowedValues)({
          data: properties.multiAzPolicy,
          allowedValues: ["PRIORITY","BALANCE","COST_OPTIMIZED","COMPOSABLE"],
        }));
    }
    errors.collect(ros.propertyValidator('multiAzPolicy', ros.validateString)(properties.multiAzPolicy));
    if(properties.protectedInstances && (Array.isArray(properties.protectedInstances) || (typeof properties.protectedInstances) === 'string')) {
        errors.collect(ros.propertyValidator('protectedInstances', ros.validateLength)({
            data: properties.protectedInstances.length,
            min: undefined,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('protectedInstances', ros.listValidator(ros.validateAny))(properties.protectedInstances));
    errors.collect(ros.propertyValidator('containerGroupId', ros.validateString)(properties.containerGroupId));
    if(properties.dbInstanceIds && (Array.isArray(properties.dbInstanceIds) || (typeof properties.dbInstanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('dbInstanceIds', ros.validateLength)({
            data: properties.dbInstanceIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('dbInstanceIds', ros.listValidator(ros.validateAny))(properties.dbInstanceIds));
    if(properties.healthCheckType && (typeof properties.healthCheckType) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckType', ros.validateAllowedValues)({
          data: properties.healthCheckType,
          allowedValues: ["ECS","NONE"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckType', ros.validateString)(properties.healthCheckType));
    if(properties.maxInstanceLifetime && (typeof properties.maxInstanceLifetime) !== 'object') {
        errors.collect(ros.propertyValidator('maxInstanceLifetime', ros.validateRange)({
            data: properties.maxInstanceLifetime,
            min: 86400,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('maxInstanceLifetime', ros.validateNumber)(properties.maxInstanceLifetime));
    return errors.wrap('supplied properties not correct for "RosScalingGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroup` resource.
 */
// @ts-ignore TS6133
function rosScalingGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScalingGroupPropsValidator(properties).assertSuccess();
    }
    return {
      MaxSize: ros.numberToRosTemplate(properties.maxSize),
      MinSize: ros.numberToRosTemplate(properties.minSize),
      AllocationStrategy: ros.stringToRosTemplate(properties.allocationStrategy),
      AzBalance: ros.booleanToRosTemplate(properties.azBalance),
      CompensateWithOnDemand: ros.booleanToRosTemplate(properties.compensateWithOnDemand),
      ContainerGroupId: ros.stringToRosTemplate(properties.containerGroupId),
      CustomPolicyARN: ros.stringToRosTemplate(properties.customPolicyArn),
      DBInstanceIds: ros.listMapper(ros.objectToRosTemplate)(properties.dbInstanceIds),
      DefaultCooldown: ros.numberToRosTemplate(properties.defaultCooldown),
      DesiredCapacity: ros.numberToRosTemplate(properties.desiredCapacity),
      GroupDeletionProtection: ros.booleanToRosTemplate(properties.groupDeletionProtection),
      GroupType: ros.stringToRosTemplate(properties.groupType),
      HealthCheckType: ros.stringToRosTemplate(properties.healthCheckType),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      LaunchTemplateId: ros.stringToRosTemplate(properties.launchTemplateId),
      LaunchTemplateOverrides: ros.listMapper(rosScalingGroupLaunchTemplateOverridesPropertyToRosTemplate)(properties.launchTemplateOverrides),
      LaunchTemplateVersion: ros.stringToRosTemplate(properties.launchTemplateVersion),
      LoadBalancerIds: ros.listMapper(ros.objectToRosTemplate)(properties.loadBalancerIds),
      MaxInstanceLifetime: ros.numberToRosTemplate(properties.maxInstanceLifetime),
      MultiAZPolicy: ros.stringToRosTemplate(properties.multiAzPolicy),
      NotificationConfigurations: ros.listMapper(rosScalingGroupNotificationConfigurationsPropertyToRosTemplate)(properties.notificationConfigurations),
      OnDemandBaseCapacity: ros.numberToRosTemplate(properties.onDemandBaseCapacity),
      OnDemandPercentageAboveBaseCapacity: ros.numberToRosTemplate(properties.onDemandPercentageAboveBaseCapacity),
      ProtectedInstances: ros.listMapper(ros.objectToRosTemplate)(properties.protectedInstances),
      RemovalPolicys: ros.listMapper(ros.objectToRosTemplate)(properties.removalPolicys),
      ScalingGroupName: ros.stringToRosTemplate(properties.scalingGroupName),
      ScalingPolicy: ros.stringToRosTemplate(properties.scalingPolicy),
      SpotAllocationStrategy: ros.stringToRosTemplate(properties.spotAllocationStrategy),
      SpotInstancePools: ros.numberToRosTemplate(properties.spotInstancePools),
      SpotInstanceRemedy: ros.booleanToRosTemplate(properties.spotInstanceRemedy),
      StandbyInstances: ros.listMapper(ros.objectToRosTemplate)(properties.standbyInstances),
      Tags: ros.listMapper(rosScalingGroupTagsPropertyToRosTemplate)(properties.tags),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      VSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.vSwitchIds),
    };
}

/**
 * A ROS template type:  `ALIYUN::ESS::ScalingGroup`
 */
export class RosScalingGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScalingGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ScalingGroupId: Scaling group Id
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * @Attribute ScalingGroupName: Scaling group name
     */
    public readonly attrScalingGroupName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property maxSize: Maximum number of ECS instances in the scaling group. Value range: [0, 1000].
     */
    public maxSize: number | ros.IResolvable;

    /**
     * @Property minSize: Minimum number of ECS instances in the scaling group. Value range: [0, 1000].
     */
    public minSize: number | ros.IResolvable;

    /**
     * @Property allocationStrategy: The allocation policy of instances. Auto Scaling selects instance types based on the allocation policy to create the required number of instances. The policy can be applied to pay-as-you-go instances and preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - priority: Auto Scaling selects instance types based on the specified order to create the required number of instances.
     * - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of instances.
     * Default value: priority.
     */
    public allocationStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property azBalance: Specifies whether to evenly distribute instances in the scaling group across multiple zones. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - true
     * - false
     * Default value: false.
     */
    public azBalance: boolean | ros.IResolvable | undefined;

    /**
     * @Property compensateWithOnDemand: Specifies whether to automatically create pay-as-you-go instances to meet the requirements on the number of instances when the expected capacity of preemptible instances cannot be fulfilled due to reasons such as high prices or insufficient resources. This parameter takes effect only when MultiAZPolicy is set to COST_OPTIMIZED.
     * Default value: true.
     */
    public compensateWithOnDemand: boolean | ros.IResolvable | undefined;

    /**
     * @Property containerGroupId: The ID of the elastic container instance.
     */
    public containerGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property customPolicyArn: The Alibaba Cloud Resource Name (ARN) of the custom scale-in policy (Function). This parameter takes effect only if you specify CustomPolicy as the value of first item of RemovalPolicys.
     */
    public customPolicyArn: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceIds: ID list of an RDS instance. A Json Array with format: [ "rm-id0", "rm-id1", ... "rm-idz" ], support up to 100 RDS instance.
     */
    public dbInstanceIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property defaultCooldown: Default cool-down time (in seconds) of the scaling group. Value range: [0, 86400].
     * The default value is 300s.
     */
    public defaultCooldown: number | ros.IResolvable | undefined;

    /**
     * @Property desiredCapacity: The expected number of ECS instances in a scaling group. The scaling group automatically keeps the number of ECS instances as expected. The number of ECS instances cannot be greater than the value of MaxSize and cannot be less than the value of MinSize.
     */
    public desiredCapacity: number | ros.IResolvable | undefined;

    /**
     * @Property groupDeletionProtection: Whether to enable deletion protection for scaling group.
     * Default to False.
     */
    public groupDeletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS
     * ECI
     * Default value: ECS.
     */
    public groupType: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckType: The health check type. Allow values is "ECS" and "NONE", default to "ECS".
     */
    public healthCheckType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The ID of the ECS instance from which the scaling group obtains configuration information of the specified instance.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateId: The ID of the instance launch template from which the scaling group obtains launch configurations.
     */
    public launchTemplateId: string | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateOverrides: You can specify up to 10 overrides.
     * Note: This parameter takes effect only if you specify LaunchTemplateId.
     */
    public launchTemplateOverrides: Array<RosScalingGroup.LaunchTemplateOverridesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateVersion: The version of the instance launch template. Valid values:
     * A fixed template version numbe.
     * Default: The default template version is always used.
     * Latest: The latest template version is always used.
     */
    public launchTemplateVersion: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerIds: ID list of a Server Load Balancer instance. A Json Array with format: [ "lb-id0", "lb-id1", ... "lb-idz" ], support up to 100 Load Balancer instance.
     */
    public loadBalancerIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property maxInstanceLifetime: The maximum life span of an ECS instance in the scaling group. Unit: seconds.
     * Valid values: 86400 to the value of Integer.maxValue.
     * Default value: null.
     * Note: This parameter is unavailable for scaling groups of the ECI type or scaling groups whose ScalingPolicy is set to recycle.
     */
    public maxInstanceLifetime: number | ros.IResolvable | undefined;

    /**
     * @Property multiAzPolicy: ECS scaling strategy for multi availability zone. Allow value:
     * 1. PRIORITY: scaling the capacity according to the virtual switch (VSwitchIds.N) you define. ECS instances are automatically created using the next priority virtual switch when the higher priority virtual switch cannot be created in the available zone.
     * 2. BALANCE: evenly allocate ECS instances between the multiple available zone specified by the scaling group.
     * 3. COST_OPTIMIZED: During a scale-out activity, Auto Scaling attempts to create ECS instances that have vCPUs provided at the lowest price. During a scale-in activity, Auto Scaling attempts to remove ECS instances that have vCPUs provided at the highest price. Preemptible instances are preferentially created when preemptible instance types are specified in the active scaling configuration. You can configure the CompensateWithOnDemand parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
     * Note COST_OPTIMIZED is valid when multiple instance types are specified or at least one preemptible instance type is specified.
     * 4. COMPOSABLE: You can flexibly combine the preceding policies based on your business requirements.
     */
    public multiAzPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property notificationConfigurations: When a scaling event occurs in a scaling group, ESS will send a notification to Cloud Monitor or MNS.
     */
    public notificationConfigurations: Array<RosScalingGroup.NotificationConfigurationsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property onDemandBaseCapacity: The minimum number of pay-as-you-go instances required in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferentially creates pay-as-you-go instances.
     * If you set MultiAZPolicy to COMPOSABLE Policy, the default value of this parameter is 0.
     */
    public onDemandBaseCapacity: number | ros.IResolvable | undefined;

    /**
     * @Property onDemandPercentageAboveBaseCapacity: The percentage of pay-as-you-go instances that can be created when instances are added to the scaling group. This parameter takes effect when the number of pay-as-you-go instances reaches the value for the OnDemandBaseCapacity parameter. Valid values: 0 to 100.
     * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 100.
     */
    public onDemandPercentageAboveBaseCapacity: number | ros.IResolvable | undefined;

    /**
     * @Property protectedInstances: ECS instances of protected mode in the scaling group.
     */
    public protectedInstances: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property removalPolicys: Policy for removing ECS instances from the scaling group.
     * Optional values:
     * - OldestInstance: removes the first ECS instance attached to the scaling group.
     * - NewestInstance: removes the first ECS instance attached to the scaling group.
     * - OldestScalingConfiguration: removes the ECS instance with the oldest scaling configuration.
     * - CustomPolicy: removes ECS instances based on the custom scale-in policy (Function).
     * You can enter up to three removal policies.
     * You cannot set any item of RemovalPolicys to the same value.
     * The scaling configuration source specified by the OldestScalingConfiguration setting can be a scaling configuration or a launch template. You can specify CustomPolicy only as the value of first item of RemovalPolicys. If you set first item of RemovalPolicys to CustomPolicy, you must also specify CustomPolicyARN.
     * Note: The removal of ECS instances from a scaling group is also affected by the value of MultiAZPolicy.
     */
    public removalPolicys: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scalingGroupName: Name shown for the scaling group, which must contain 2-40 characters (English or Chinese). The name must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".". The account name is unique in the same region.
     * If this parameter is not specified, the default value is ScalingGroupId.
     */
    public scalingGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property scalingPolicy: The reclaim mode of the scaling group. Valid values:
     * recycle
     * release
     * ScalingPolicy specifies the reclaim modes of scaling groups, but the policy that is used to remove ECS instances from scaling groups is determined by the RemovePolicy parameter of the RemoveInstances operation.
     */
    public scalingPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property spotAllocationStrategy: The allocation policy of preemptible instances. You can use this parameter to individually specify the allocation policy of preemptible instances. This parameter takes effect only if you set MultiAZPolicy to COMPOSABLE. Valid values:
     * - priority: Auto Scaling selects instance types based on the specified order to create the required number of preemptible instances.
     * - lowestPrice: Auto Scaling selects instance types that have the lowest unit price of vCPUs to create the required number of preemptible instances.
     * Default value: priority.
     */
    public spotAllocationStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property spotInstancePools: The number of instance types that are available. The system creates preemptible instances of multiple instance types that are available at the lowest cost in the scaling group. Valid values: 1 to 10.
     * If you set MultiAZPolicy to COMPOSABLE, the default value of this parameter is 2.
     */
    public spotInstancePools: number | ros.IResolvable | undefined;

    /**
     * @Property spotInstanceRemedy: Specifies whether to supplement preemptible instances. If this parameter is set to true, Auto Scaling attempts to create an instance to replace a preemptible instance when Auto Scaling receives a system message which indicates that the preemptible instance is to be reclaimed.
     */
    public spotInstanceRemedy: boolean | ros.IResolvable | undefined;

    /**
     * @Property standbyInstances: ECS instances of standby mode in the scaling group.
     */
    public standbyInstances: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosScalingGroup.TagsProperty[] | undefined;

    /**
     * @Property vSwitchId: If you create a VPC scaling group, you must specify the ID of a VSwitch.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchIds: Parameter VSwitchIds.N is used to create instance in multiple zones. Parameter VSwitchIds.N has a priority over parameter VSwitchId.
     * The valid range of N is [1, 8], and you can specify at most 5 VSwitches in a VPC.
     * The priority of VSwitches descends from 1 to 8, and 1 indicates the highest priority.
     * When you fail to create an instance in the zone to which a specified VSwitch belongs, another VSwitch with less priority replaces the specified one automatically.
     */
    public vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ESS::ScalingGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScalingGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingGroupId = this.getAtt('ScalingGroupId');
        this.attrScalingGroupName = this.getAtt('ScalingGroupName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.maxSize = props.maxSize;
        this.minSize = props.minSize;
        this.allocationStrategy = props.allocationStrategy;
        this.azBalance = props.azBalance;
        this.compensateWithOnDemand = props.compensateWithOnDemand;
        this.containerGroupId = props.containerGroupId;
        this.customPolicyArn = props.customPolicyArn;
        this.dbInstanceIds = props.dbInstanceIds;
        this.defaultCooldown = props.defaultCooldown;
        this.desiredCapacity = props.desiredCapacity;
        this.groupDeletionProtection = props.groupDeletionProtection;
        this.groupType = props.groupType;
        this.healthCheckType = props.healthCheckType;
        this.instanceId = props.instanceId;
        this.launchTemplateId = props.launchTemplateId;
        this.launchTemplateOverrides = props.launchTemplateOverrides;
        this.launchTemplateVersion = props.launchTemplateVersion;
        this.loadBalancerIds = props.loadBalancerIds;
        this.maxInstanceLifetime = props.maxInstanceLifetime;
        this.multiAzPolicy = props.multiAzPolicy;
        this.notificationConfigurations = props.notificationConfigurations;
        this.onDemandBaseCapacity = props.onDemandBaseCapacity;
        this.onDemandPercentageAboveBaseCapacity = props.onDemandPercentageAboveBaseCapacity;
        this.protectedInstances = props.protectedInstances;
        this.removalPolicys = props.removalPolicys;
        this.scalingGroupName = props.scalingGroupName;
        this.scalingPolicy = props.scalingPolicy;
        this.spotAllocationStrategy = props.spotAllocationStrategy;
        this.spotInstancePools = props.spotInstancePools;
        this.spotInstanceRemedy = props.spotInstanceRemedy;
        this.standbyInstances = props.standbyInstances;
        this.tags = props.tags;
        this.vSwitchId = props.vSwitchId;
        this.vSwitchIds = props.vSwitchIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            maxSize: this.maxSize,
            minSize: this.minSize,
            allocationStrategy: this.allocationStrategy,
            azBalance: this.azBalance,
            compensateWithOnDemand: this.compensateWithOnDemand,
            containerGroupId: this.containerGroupId,
            customPolicyArn: this.customPolicyArn,
            dbInstanceIds: this.dbInstanceIds,
            defaultCooldown: this.defaultCooldown,
            desiredCapacity: this.desiredCapacity,
            groupDeletionProtection: this.groupDeletionProtection,
            groupType: this.groupType,
            healthCheckType: this.healthCheckType,
            instanceId: this.instanceId,
            launchTemplateId: this.launchTemplateId,
            launchTemplateOverrides: this.launchTemplateOverrides,
            launchTemplateVersion: this.launchTemplateVersion,
            loadBalancerIds: this.loadBalancerIds,
            maxInstanceLifetime: this.maxInstanceLifetime,
            multiAzPolicy: this.multiAzPolicy,
            notificationConfigurations: this.notificationConfigurations,
            onDemandBaseCapacity: this.onDemandBaseCapacity,
            onDemandPercentageAboveBaseCapacity: this.onDemandPercentageAboveBaseCapacity,
            protectedInstances: this.protectedInstances,
            removalPolicys: this.removalPolicys,
            scalingGroupName: this.scalingGroupName,
            scalingPolicy: this.scalingPolicy,
            spotAllocationStrategy: this.spotAllocationStrategy,
            spotInstancePools: this.spotInstancePools,
            spotInstanceRemedy: this.spotInstanceRemedy,
            standbyInstances: this.standbyInstances,
            tags: this.tags,
            vSwitchId: this.vSwitchId,
            vSwitchIds: this.vSwitchIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScalingGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosScalingGroup {
    /**
     * @stability external
     */
    export interface LaunchTemplateOverridesProperty {
        /**
         * @Property weightedCapacity: If you want to scale instances in the scaling group based on the weights of the specified instance types, you must specify WeightedCapacity after you specify InstanceType.
         */
        readonly weightedCapacity?: number | ros.IResolvable;
        /**
         * @Property spotPriceLimit: The maximum bid price of instance type that is specified by InstanceType.
         */
        readonly spotPriceLimit?: number | ros.IResolvable;
        /**
         * @Property instanceType: Specify this to override the instance type that is specified in the launch template.
         */
        readonly instanceType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LaunchTemplateOverridesProperty`
 *
 * @param properties - the TypeScript properties of a `LaunchTemplateOverridesProperty`
 *
 * @returns the result of the validation.
 */
function RosScalingGroup_LaunchTemplateOverridesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.weightedCapacity && (typeof properties.weightedCapacity) !== 'object') {
        errors.collect(ros.propertyValidator('weightedCapacity', ros.validateRange)({
            data: properties.weightedCapacity,
            min: 1,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('weightedCapacity', ros.validateNumber)(properties.weightedCapacity));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateNumber)(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    return errors.wrap('supplied properties not correct for "LaunchTemplateOverridesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroup.LaunchTemplateOverrides` resource
 *
 * @param properties - the TypeScript properties of a `LaunchTemplateOverridesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroup.LaunchTemplateOverrides` resource.
 */
// @ts-ignore TS6133
function rosScalingGroupLaunchTemplateOverridesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosScalingGroup_LaunchTemplateOverridesPropertyValidator(properties).assertSuccess();
    return {
      WeightedCapacity: ros.numberToRosTemplate(properties.weightedCapacity),
      SpotPriceLimit: ros.numberToRosTemplate(properties.spotPriceLimit),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
    };
}

export namespace RosScalingGroup {
    /**
     * @stability external
     */
    export interface NotificationConfigurationsProperty {
        /**
         * @Property notificationArn: The format of the parameter value is acs:ess:{region}:{account-id}:{resource-relative-id}.
     * region: the region to which the scaling group locates
     * account-id: Alibaba Cloud ID
     * For example:
     * MNS queue: acs:ess:{region}:{account-id}:queue/{queuename}
     * MNS topic: acs:ess:{region}:{account-id}:topic/{topicname}
     * Cloud Monitor: acs:ess:{region}:{account-id}:/cloudmonitor
         */
        readonly notificationArn: string | ros.IResolvable;
        /**
         * @Property notificationTypes: Ess events and resource change notification types. Possible values:
     * AUTOSCALING:SCALE_OUT_SUCCESS
     * AUTOSCALING:SCALE_IN_SUCCESS
     * AUTOSCALING:SCALE_OUT_ERROR
     * AUTOSCALING:SCALE_IN_ERROR
     * AUTOSCALING:SCALE_REJECT
     * AUTOSCALING:SCALE_OUT_START
     * AUTOSCALING:SCALE_IN_START
     * AUTOSCALING:SCHEDULE_TASK_EXPIRING
         */
        readonly notificationTypes: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `NotificationConfigurationsProperty`
 *
 * @param properties - the TypeScript properties of a `NotificationConfigurationsProperty`
 *
 * @returns the result of the validation.
 */
function RosScalingGroup_NotificationConfigurationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('notificationArn', ros.requiredValidator)(properties.notificationArn));
    if(properties.notificationArn && (Array.isArray(properties.notificationArn) || (typeof properties.notificationArn) === 'string')) {
        errors.collect(ros.propertyValidator('notificationArn', ros.validateLength)({
            data: properties.notificationArn.length,
            min: undefined,
            max: 300,
          }));
    }
    if(properties.notificationArn && (typeof properties.notificationArn) !== 'object') {
        errors.collect(ros.propertyValidator('notificationArn', ros.validateAllowedPattern)({
          data: properties.notificationArn,
          reg: /^acs:ess:([a-zA-Z0-9-]+):(\d+):(((queue|topic)\/([a-zA-Z0-9][a-zA-Z0-9-]{0,255}))|cloudmonitor)$/
        }));
    }
    errors.collect(ros.propertyValidator('notificationArn', ros.validateString)(properties.notificationArn));
    errors.collect(ros.propertyValidator('notificationTypes', ros.requiredValidator)(properties.notificationTypes));
    if(properties.notificationTypes && (Array.isArray(properties.notificationTypes) || (typeof properties.notificationTypes) === 'string')) {
        errors.collect(ros.propertyValidator('notificationTypes', ros.validateLength)({
            data: properties.notificationTypes.length,
            min: 1,
            max: 8,
          }));
    }
    errors.collect(ros.propertyValidator('notificationTypes', ros.listValidator(ros.validateAny))(properties.notificationTypes));
    return errors.wrap('supplied properties not correct for "NotificationConfigurationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroup.NotificationConfigurations` resource
 *
 * @param properties - the TypeScript properties of a `NotificationConfigurationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroup.NotificationConfigurations` resource.
 */
// @ts-ignore TS6133
function rosScalingGroupNotificationConfigurationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosScalingGroup_NotificationConfigurationsPropertyValidator(properties).assertSuccess();
    return {
      NotificationArn: ros.stringToRosTemplate(properties.notificationArn),
      NotificationTypes: ros.listMapper(ros.objectToRosTemplate)(properties.notificationTypes),
    };
}

export namespace RosScalingGroup {
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
function RosScalingGroup_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroup.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroup.Tags` resource.
 */
// @ts-ignore TS6133
function rosScalingGroupTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosScalingGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::ESS::ScalingGroupEnable`
 */
export interface RosScalingGroupEnableProps {

    /**
     * @Property scalingGroupId: The id of operated scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * @Property attachOptions: Options for attaching instances.
     */
    readonly attachOptions?: RosScalingGroupEnable.AttachOptionsProperty | ros.IResolvable;

    /**
     * @Property detachOptions: Options for detaching instances.
     */
    readonly detachOptions?: RosScalingGroupEnable.DetachOptionsProperty | ros.IResolvable;

    /**
     * @Property instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
     */
    readonly instanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
     */
    readonly removeInstanceIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property scalingConfigurationId: The id of scaling configuration which will be activate.
     */
    readonly scalingConfigurationId?: string | ros.IResolvable;

    /**
     * @Property scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
     * When creating the resource, all the scaling rule aris in the list will be executed.
     * When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
     */
    readonly scalingRuleAris?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
     */
    readonly scalingRuleArisExecuteVersion?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosScalingGroupEnableProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingGroupEnableProps`
 *
 * @returns the result of the validation.
 */
function RosScalingGroupEnablePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('attachOptions', RosScalingGroupEnable_AttachOptionsPropertyValidator)(properties.attachOptions));
    errors.collect(ros.propertyValidator('detachOptions', RosScalingGroupEnable_DetachOptionsPropertyValidator)(properties.detachOptions));
    if(properties.scalingRuleArisExecuteVersion && (typeof properties.scalingRuleArisExecuteVersion) !== 'object') {
        errors.collect(ros.propertyValidator('scalingRuleArisExecuteVersion', ros.validateRange)({
            data: properties.scalingRuleArisExecuteVersion,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('scalingRuleArisExecuteVersion', ros.validateNumber)(properties.scalingRuleArisExecuteVersion));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.requiredValidator)(properties.scalingGroupId));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.validateString)(properties.scalingGroupId));
    if(properties.scalingRuleAris && (Array.isArray(properties.scalingRuleAris) || (typeof properties.scalingRuleAris) === 'string')) {
        errors.collect(ros.propertyValidator('scalingRuleAris', ros.validateLength)({
            data: properties.scalingRuleAris.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('scalingRuleAris', ros.listValidator(ros.validateAny))(properties.scalingRuleAris));
    if(properties.removeInstanceIds && (Array.isArray(properties.removeInstanceIds) || (typeof properties.removeInstanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('removeInstanceIds', ros.validateLength)({
            data: properties.removeInstanceIds.length,
            min: undefined,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('removeInstanceIds', ros.listValidator(ros.validateAny))(properties.removeInstanceIds));
    errors.collect(ros.propertyValidator('scalingConfigurationId', ros.validateString)(properties.scalingConfigurationId));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: undefined,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateAny))(properties.instanceIds));
    return errors.wrap('supplied properties not correct for "RosScalingGroupEnableProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroupEnable` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingGroupEnableProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroupEnable` resource.
 */
// @ts-ignore TS6133
function rosScalingGroupEnablePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScalingGroupEnablePropsValidator(properties).assertSuccess();
    }
    return {
      ScalingGroupId: ros.stringToRosTemplate(properties.scalingGroupId),
      AttachOptions: rosScalingGroupEnableAttachOptionsPropertyToRosTemplate(properties.attachOptions),
      DetachOptions: rosScalingGroupEnableDetachOptionsPropertyToRosTemplate(properties.detachOptions),
      InstanceIds: ros.listMapper(ros.objectToRosTemplate)(properties.instanceIds),
      RemoveInstanceIds: ros.listMapper(ros.objectToRosTemplate)(properties.removeInstanceIds),
      ScalingConfigurationId: ros.stringToRosTemplate(properties.scalingConfigurationId),
      ScalingRuleAris: ros.listMapper(ros.objectToRosTemplate)(properties.scalingRuleAris),
      ScalingRuleArisExecuteVersion: ros.numberToRosTemplate(properties.scalingRuleArisExecuteVersion),
    };
}

/**
 * A ROS template type:  `ALIYUN::ESS::ScalingGroupEnable`
 */
export class RosScalingGroupEnable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScalingGroupEnable";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute LifecycleState: The scaling group status
     */
    public readonly attrLifecycleState: ros.IResolvable;

    /**
     * @Attribute ScalingGroupId: The scaling group id
     */
    public readonly attrScalingGroupId: ros.IResolvable;

    /**
     * @Attribute ScalingInstanceDetails: Detail information of auto created scaling instances
     */
    public readonly attrScalingInstanceDetails: ros.IResolvable;

    /**
     * @Attribute ScalingInstances: The auto created scaling instances
     */
    public readonly attrScalingInstances: ros.IResolvable;

    /**
     * @Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris
     */
    public readonly attrScalingRuleArisExecuteErrorInfo: ros.IResolvable;

    /**
     * @Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris
     */
    public readonly attrScalingRuleArisExecuteResultInstancesAdded: ros.IResolvable;

    /**
     * @Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris
     */
    public readonly attrScalingRuleArisExecuteResultInstancesRemoved: ros.IResolvable;

    /**
     * @Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris
     */
    public readonly attrScalingRuleArisExecuteResultNumberOfAddedInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property scalingGroupId: The id of operated scaling group.
     */
    public scalingGroupId: string | ros.IResolvable;

    /**
     * @Property attachOptions: Options for attaching instances.
     */
    public attachOptions: RosScalingGroupEnable.AttachOptionsProperty | ros.IResolvable | undefined;

    /**
     * @Property detachOptions: Options for detaching instances.
     */
    public detachOptions: RosScalingGroupEnable.DetachOptionsProperty | ros.IResolvable | undefined;

    /**
     * @Property instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
     */
    public instanceIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
     */
    public removeInstanceIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scalingConfigurationId: The id of scaling configuration which will be activate.
     */
    public scalingConfigurationId: string | ros.IResolvable | undefined;

    /**
     * @Property scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
     * When creating the resource, all the scaling rule aris in the list will be executed.
     * When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
     */
    public scalingRuleAris: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
     */
    public scalingRuleArisExecuteVersion: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ESS::ScalingGroupEnable`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingGroupEnableProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScalingGroupEnable.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLifecycleState = this.getAtt('LifecycleState');
        this.attrScalingGroupId = this.getAtt('ScalingGroupId');
        this.attrScalingInstanceDetails = this.getAtt('ScalingInstanceDetails');
        this.attrScalingInstances = this.getAtt('ScalingInstances');
        this.attrScalingRuleArisExecuteErrorInfo = this.getAtt('ScalingRuleArisExecuteErrorInfo');
        this.attrScalingRuleArisExecuteResultInstancesAdded = this.getAtt('ScalingRuleArisExecuteResultInstancesAdded');
        this.attrScalingRuleArisExecuteResultInstancesRemoved = this.getAtt('ScalingRuleArisExecuteResultInstancesRemoved');
        this.attrScalingRuleArisExecuteResultNumberOfAddedInstances = this.getAtt('ScalingRuleArisExecuteResultNumberOfAddedInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.scalingGroupId = props.scalingGroupId;
        this.attachOptions = props.attachOptions;
        this.detachOptions = props.detachOptions;
        this.instanceIds = props.instanceIds;
        this.removeInstanceIds = props.removeInstanceIds;
        this.scalingConfigurationId = props.scalingConfigurationId;
        this.scalingRuleAris = props.scalingRuleAris;
        this.scalingRuleArisExecuteVersion = props.scalingRuleArisExecuteVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            scalingGroupId: this.scalingGroupId,
            attachOptions: this.attachOptions,
            detachOptions: this.detachOptions,
            instanceIds: this.instanceIds,
            removeInstanceIds: this.removeInstanceIds,
            scalingConfigurationId: this.scalingConfigurationId,
            scalingRuleAris: this.scalingRuleAris,
            scalingRuleArisExecuteVersion: this.scalingRuleArisExecuteVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScalingGroupEnablePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosScalingGroupEnable {
    /**
     * @stability external
     */
    export interface AttachOptionsProperty {
        /**
         * @Property entrusted: Specifies whether the scaling group manages the lifecycle of instances that are manually added to the scaling group. Valid values:
     * - true: The scaling group manages the lifecycle of instances that are manually added in a similar manner in which the scaling group manages the lifecycle of automatically created instances. When the instances are removed from the scaling group, the instances are automatically released. However, if you call the DetachInstances operation to remove the instances from the scaling group, the instances are not released.
     * - false: The scaling group does not manage the lifecycle of instances that are manually added. After the instances are removed from the scaling group, the instances are not released.
     * Default value: false.
     * Note: This property is unavailable for subscription instances.
         */
        readonly entrusted?: boolean | ros.IResolvable;
        /**
         * @Property lifecycleHook: Specifies whether to trigger a lifecycle hook for the scaling group to which instances are being added. Valid values:
     * - true
     * - false
     * Default value: false.
         */
        readonly lifecycleHook?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AttachOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `AttachOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosScalingGroupEnable_AttachOptionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('entrusted', ros.validateBoolean)(properties.entrusted));
    errors.collect(ros.propertyValidator('lifecycleHook', ros.validateBoolean)(properties.lifecycleHook));
    return errors.wrap('supplied properties not correct for "AttachOptionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroupEnable.AttachOptions` resource
 *
 * @param properties - the TypeScript properties of a `AttachOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroupEnable.AttachOptions` resource.
 */
// @ts-ignore TS6133
function rosScalingGroupEnableAttachOptionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosScalingGroupEnable_AttachOptionsPropertyValidator(properties).assertSuccess();
    return {
      Entrusted: ros.booleanToRosTemplate(properties.entrusted),
      LifecycleHook: ros.booleanToRosTemplate(properties.lifecycleHook),
    };
}

export namespace RosScalingGroupEnable {
    /**
     * @stability external
     */
    export interface DetachOptionsProperty {
        /**
         * @Property detachOption: Specifies whether to remove the instances from the default server groups and vServer groups of the Server Load Balancer (SLB) instance that is associated with the scaling group, and whether to remove the IP addresses of the instances from the whitelist that manages access to the ApsaraDB RDS instance that is associated with the scaling group.
     * If you set this parameter to both, the instances are removed from the default sever groups and vServer groups of the associated SLB instance, and the IP addresses of the instances are removed from the whitelist that manages access to the associated ApsaraDB RDS instance.
         */
        readonly detachOption?: string | ros.IResolvable;
        /**
         * @Property decreaseDesiredCapacity: Specifies whether to adjust the expected number of instances in the scaling group. Valid values:
     * - true: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group decreases.
     * - false: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group remains unchanged.
     * Default value: true.
         */
        readonly decreaseDesiredCapacity?: boolean | ros.IResolvable;
        /**
         * @Property lifecycleHook: Specifies whether to trigger the lifecycle hook for the scaling group when you remove instances from the scaling group. Valid values:
     * - true
     * - false
     * Default value: false.
         */
        readonly lifecycleHook?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DetachOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `DetachOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosScalingGroupEnable_DetachOptionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('detachOption', ros.validateString)(properties.detachOption));
    errors.collect(ros.propertyValidator('decreaseDesiredCapacity', ros.validateBoolean)(properties.decreaseDesiredCapacity));
    errors.collect(ros.propertyValidator('lifecycleHook', ros.validateBoolean)(properties.lifecycleHook));
    return errors.wrap('supplied properties not correct for "DetachOptionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroupEnable.DetachOptions` resource
 *
 * @param properties - the TypeScript properties of a `DetachOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingGroupEnable.DetachOptions` resource.
 */
// @ts-ignore TS6133
function rosScalingGroupEnableDetachOptionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosScalingGroupEnable_DetachOptionsPropertyValidator(properties).assertSuccess();
    return {
      DetachOption: ros.stringToRosTemplate(properties.detachOption),
      DecreaseDesiredCapacity: ros.booleanToRosTemplate(properties.decreaseDesiredCapacity),
      LifecycleHook: ros.booleanToRosTemplate(properties.lifecycleHook),
    };
}

/**
 * Properties for defining a `ALIYUN::ESS::ScalingRule`
 */
export interface RosScalingRuleProps {

    /**
     * @Property scalingGroupId: ID of the scaling group of a scaling rule.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * @Property adjustmentType: Adjustment mode of a scaling rule. Optional values:
     * - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
     * - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
     * - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
     */
    readonly adjustmentType?: string | ros.IResolvable;

    /**
     * @Property adjustmentValue: Adjusted value of a scaling rule. Value range:
     * - QuantityChangeInCapacity: [-500, 500]
     * - PercentChangeInCapacity: [-100, 10000]
     * - TotalCapacity: [0, 1000]
     */
    readonly adjustmentValue?: number | ros.IResolvable;

    /**
     * @Property cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
     */
    readonly cooldown?: number | ros.IResolvable;

    /**
     * @Property disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
     *  Default value: false
     */
    readonly disableScaleIn?: boolean | ros.IResolvable;

    /**
     * @Property estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
     * Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
     * Valid values: 0 to 86400. Unit: seconds. Default value: 300.
     */
    readonly estimatedInstanceWarmup?: number | ros.IResolvable;

    /**
     * @Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
     *  Default value: the same as the value of MaxSize
     */
    readonly initialMaxSize?: number | ros.IResolvable;

    /**
     * @Property metricName: The predefined metric to monitor. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
     * Valid values of a target tracking scaling rule:
     * - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network
     * - ClassicInternetTx: the average public network outbound traffic over the classic network
     * - VpcInternetRx: the average public network inbound traffic over the VPC
     * - VpcInternetTx: the average public network outbound traffic over the VPC
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     * Valid values of a predictive scaling rule:
     * - CpuUtilization: the average CPU utilization
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     */
    readonly metricName?: string | ros.IResolvable;

    /**
     * @Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
     */
    readonly minAdjustmentMagnitude?: number | ros.IResolvable;

    /**
     * @Property predictiveScalingMode: The mode of the predictive scaling rule. Valid values:
     * - PredictAndScale: generates forecasts and creates forecast tasks.
     * - PredictOnly: generates forecasts but does not create forecast tasks.
     * Default value: PredictAndScale
     */
    readonly predictiveScalingMode?: string | ros.IResolvable;

    /**
     * @Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
     *  Default value: 0
     */
    readonly predictiveTaskBufferTime?: number | ros.IResolvable;

    /**
     * @Property predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:
     * - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
     *  Default value: MaxOverridePredictiveValue
     */
    readonly predictiveValueBehavior?: string | ros.IResolvable;

    /**
     * @Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
     *  Default value: 0
     */
    readonly predictiveValueBuffer?: number | ros.IResolvable;

    /**
     * @Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
     * Default value: 15.
     */
    readonly scaleInEvaluationCount?: number | ros.IResolvable;

    /**
     * @Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
     * Default value: 3.
     */
    readonly scaleOutEvaluationCount?: number | ros.IResolvable;

    /**
     * @Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
     */
    readonly scalingRuleName?: string | ros.IResolvable;

    /**
     * @Property scalingRuleType: The type of the scaling rule. Valid values:
     * - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
     * - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
     * - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
     * - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
     *  If this parameter value is not specified, the default value is SimpleScalingRule.
     */
    readonly scalingRuleType?: string | ros.IResolvable;

    /**
     * @Property stepAdjustment:
     */
    readonly stepAdjustment?: Array<RosScalingRule.StepAdjustmentProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
     */
    readonly targetValue?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosScalingRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingRuleProps`
 *
 * @returns the result of the validation.
 */
function RosScalingRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('targetValue', ros.validateNumber)(properties.targetValue));
    if(properties.cooldown && (typeof properties.cooldown) !== 'object') {
        errors.collect(ros.propertyValidator('cooldown', ros.validateRange)({
            data: properties.cooldown,
            min: 0,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('cooldown', ros.validateNumber)(properties.cooldown));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.requiredValidator)(properties.scalingGroupId));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.validateString)(properties.scalingGroupId));
    if(properties.predictiveValueBehavior && (typeof properties.predictiveValueBehavior) !== 'object') {
        errors.collect(ros.propertyValidator('predictiveValueBehavior', ros.validateAllowedValues)({
          data: properties.predictiveValueBehavior,
          allowedValues: ["MaxOverridePredictiveValue","PredictiveValueOverrideMax","PredictiveValueOverrideMaxWithBuffer"],
        }));
    }
    errors.collect(ros.propertyValidator('predictiveValueBehavior', ros.validateString)(properties.predictiveValueBehavior));
    if(properties.minAdjustmentMagnitude && (typeof properties.minAdjustmentMagnitude) !== 'object') {
        errors.collect(ros.propertyValidator('minAdjustmentMagnitude', ros.validateRange)({
            data: properties.minAdjustmentMagnitude,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('minAdjustmentMagnitude', ros.validateNumber)(properties.minAdjustmentMagnitude));
    errors.collect(ros.propertyValidator('disableScaleIn', ros.validateBoolean)(properties.disableScaleIn));
    errors.collect(ros.propertyValidator('stepAdjustment', ros.listValidator(RosScalingRule_StepAdjustmentPropertyValidator))(properties.stepAdjustment));
    if(properties.adjustmentType && (typeof properties.adjustmentType) !== 'object') {
        errors.collect(ros.propertyValidator('adjustmentType', ros.validateAllowedValues)({
          data: properties.adjustmentType,
          allowedValues: ["QuantityChangeInCapacity","PercentChangeInCapacity","TotalCapacity"],
        }));
    }
    errors.collect(ros.propertyValidator('adjustmentType', ros.validateString)(properties.adjustmentType));
    if(properties.metricName && (typeof properties.metricName) !== 'object') {
        errors.collect(ros.propertyValidator('metricName', ros.validateAllowedValues)({
          data: properties.metricName,
          allowedValues: ["CpuUtilization","ClassicInternetRx","ClassicInternetTx","VpcInternetRx","VpcInternetTx","IntranetRx","IntranetTx"],
        }));
    }
    errors.collect(ros.propertyValidator('metricName', ros.validateString)(properties.metricName));
    if(properties.scalingRuleName && (typeof properties.scalingRuleName) !== 'object') {
        errors.collect(ros.propertyValidator('scalingRuleName', ros.validateAllowedPattern)({
          data: properties.scalingRuleName,
          reg: /^[a-zA-Z0-9\u4e00-\u9fa5][-_.a-zA-Z0-9\u4e00-\u9fa5]{1,63}$/
        }));
    }
    errors.collect(ros.propertyValidator('scalingRuleName', ros.validateString)(properties.scalingRuleName));
    if(properties.adjustmentValue && (typeof properties.adjustmentValue) !== 'object') {
        errors.collect(ros.propertyValidator('adjustmentValue', ros.validateRange)({
            data: properties.adjustmentValue,
            min: -500,
            max: 10000,
          }));
    }
    errors.collect(ros.propertyValidator('adjustmentValue', ros.validateNumber)(properties.adjustmentValue));
    errors.collect(ros.propertyValidator('scaleOutEvaluationCount', ros.validateNumber)(properties.scaleOutEvaluationCount));
    if(properties.initialMaxSize && (typeof properties.initialMaxSize) !== 'object') {
        errors.collect(ros.propertyValidator('initialMaxSize', ros.validateRange)({
            data: properties.initialMaxSize,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('initialMaxSize', ros.validateNumber)(properties.initialMaxSize));
    if(properties.scalingRuleType && (typeof properties.scalingRuleType) !== 'object') {
        errors.collect(ros.propertyValidator('scalingRuleType', ros.validateAllowedValues)({
          data: properties.scalingRuleType,
          allowedValues: ["SimpleScalingRule","TargetTrackingScalingRule","StepScalingRule","PredictiveScalingRule"],
        }));
    }
    errors.collect(ros.propertyValidator('scalingRuleType', ros.validateString)(properties.scalingRuleType));
    if(properties.estimatedInstanceWarmup && (typeof properties.estimatedInstanceWarmup) !== 'object') {
        errors.collect(ros.propertyValidator('estimatedInstanceWarmup', ros.validateRange)({
            data: properties.estimatedInstanceWarmup,
            min: 0,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('estimatedInstanceWarmup', ros.validateNumber)(properties.estimatedInstanceWarmup));
    if(properties.predictiveScalingMode && (typeof properties.predictiveScalingMode) !== 'object') {
        errors.collect(ros.propertyValidator('predictiveScalingMode', ros.validateAllowedValues)({
          data: properties.predictiveScalingMode,
          allowedValues: ["PredictAndScale","PredictOnly"],
        }));
    }
    errors.collect(ros.propertyValidator('predictiveScalingMode', ros.validateString)(properties.predictiveScalingMode));
    if(properties.predictiveTaskBufferTime && (typeof properties.predictiveTaskBufferTime) !== 'object') {
        errors.collect(ros.propertyValidator('predictiveTaskBufferTime', ros.validateRange)({
            data: properties.predictiveTaskBufferTime,
            min: 0,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('predictiveTaskBufferTime', ros.validateNumber)(properties.predictiveTaskBufferTime));
    if(properties.predictiveValueBuffer && (typeof properties.predictiveValueBuffer) !== 'object') {
        errors.collect(ros.propertyValidator('predictiveValueBuffer', ros.validateRange)({
            data: properties.predictiveValueBuffer,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('predictiveValueBuffer', ros.validateNumber)(properties.predictiveValueBuffer));
    errors.collect(ros.propertyValidator('scaleInEvaluationCount', ros.validateNumber)(properties.scaleInEvaluationCount));
    return errors.wrap('supplied properties not correct for "RosScalingRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingRule` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingRule` resource.
 */
// @ts-ignore TS6133
function rosScalingRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScalingRulePropsValidator(properties).assertSuccess();
    }
    return {
      ScalingGroupId: ros.stringToRosTemplate(properties.scalingGroupId),
      AdjustmentType: ros.stringToRosTemplate(properties.adjustmentType),
      AdjustmentValue: ros.numberToRosTemplate(properties.adjustmentValue),
      Cooldown: ros.numberToRosTemplate(properties.cooldown),
      DisableScaleIn: ros.booleanToRosTemplate(properties.disableScaleIn),
      EstimatedInstanceWarmup: ros.numberToRosTemplate(properties.estimatedInstanceWarmup),
      InitialMaxSize: ros.numberToRosTemplate(properties.initialMaxSize),
      MetricName: ros.stringToRosTemplate(properties.metricName),
      MinAdjustmentMagnitude: ros.numberToRosTemplate(properties.minAdjustmentMagnitude),
      PredictiveScalingMode: ros.stringToRosTemplate(properties.predictiveScalingMode),
      PredictiveTaskBufferTime: ros.numberToRosTemplate(properties.predictiveTaskBufferTime),
      PredictiveValueBehavior: ros.stringToRosTemplate(properties.predictiveValueBehavior),
      PredictiveValueBuffer: ros.numberToRosTemplate(properties.predictiveValueBuffer),
      ScaleInEvaluationCount: ros.numberToRosTemplate(properties.scaleInEvaluationCount),
      ScaleOutEvaluationCount: ros.numberToRosTemplate(properties.scaleOutEvaluationCount),
      ScalingRuleName: ros.stringToRosTemplate(properties.scalingRuleName),
      ScalingRuleType: ros.stringToRosTemplate(properties.scalingRuleType),
      StepAdjustment: ros.listMapper(rosScalingRuleStepAdjustmentPropertyToRosTemplate)(properties.stepAdjustment),
      TargetValue: ros.numberToRosTemplate(properties.targetValue),
    };
}

/**
 * A ROS template type:  `ALIYUN::ESS::ScalingRule`
 */
export class RosScalingRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScalingRule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ScalingRuleAri: Unique identifier of a scaling rule.
     */
    public readonly attrScalingRuleAri: ros.IResolvable;

    /**
     * @Attribute ScalingRuleId: ID of a scaling rule, generated by the system and globally unique.
     */
    public readonly attrScalingRuleId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property scalingGroupId: ID of the scaling group of a scaling rule.
     */
    public scalingGroupId: string | ros.IResolvable;

    /**
     * @Property adjustmentType: Adjustment mode of a scaling rule. Optional values:
     * - QuantityChangeInCapacity: It is used to increase or decrease a specified number of ECS instances.
     * - PercentChangeInCapacity: It is used to increase or decrease a specified proportion of ECS instances.
     * - TotalCapacity: It is used to adjust the quantity of ECS instances in the current scaling group to a specified value.
     */
    public adjustmentType: string | ros.IResolvable | undefined;

    /**
     * @Property adjustmentValue: Adjusted value of a scaling rule. Value range:
     * - QuantityChangeInCapacity: [-500, 500]
     * - PercentChangeInCapacity: [-100, 10000]
     * - TotalCapacity: [0, 1000]
     */
    public adjustmentValue: number | ros.IResolvable | undefined;

    /**
     * @Property cooldown: Cool-down time of a scaling rule. Value range: [0, 86,400], in seconds. The default value is empty.
     */
    public cooldown: number | ros.IResolvable | undefined;

    /**
     * @Property disableScaleIn: Specifies whether to disable scale-in. This parameter is applicable only to target tracking scaling rules.
     *  Default value: false
     */
    public disableScaleIn: boolean | ros.IResolvable | undefined;

    /**
     * @Property estimatedInstanceWarmup: The warm-up period of the ECS instances. This parameter is applicable to target tracking scaling rules and step scaling rules. The system adds ECS instances that are in the warm-up state to the scaling group, but does not report monitoring data during the warm-up period to CloudMonitor.
     * Note: When calculating the number of ECS instances to be adjusted, the system does not count ECS instances in the warm-up state as part of the current capacity of the scaling group.
     * Valid values: 0 to 86400. Unit: seconds. Default value: 300.
     */
    public estimatedInstanceWarmup: number | ros.IResolvable | undefined;

    /**
     * @Property initialMaxSize: The maximum number of ECS instances in the scaling group, which is used together with PredictiveValueBehavior.
     *  Default value: the same as the value of MaxSize
     */
    public initialMaxSize: number | ros.IResolvable | undefined;

    /**
     * @Property metricName: The predefined metric to monitor. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules.
     * Valid values of a target tracking scaling rule:
     * - CpuUtilization: the average CPU utilization- ClassicInternetRx: the average public network inbound traffic over the classic network
     * - ClassicInternetTx: the average public network outbound traffic over the classic network
     * - VpcInternetRx: the average public network inbound traffic over the VPC
     * - VpcInternetTx: the average public network outbound traffic over the VPC
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     * Valid values of a predictive scaling rule:
     * - CpuUtilization: the average CPU utilization
     * - IntranetRx: the average internal network inbound traffic
     * - IntranetTx: the average internal network outbound traffic
     */
    public metricName: string | ros.IResolvable | undefined;

    /**
     * @Property minAdjustmentMagnitude: The minimum number of ECS instances to be adjusted in a scaling rule. This parameter takes effect only when the scaling rule type is SimpleScalingRule or StepScalingRule and AdjustmentType is PercentChangeInCapacity.
     */
    public minAdjustmentMagnitude: number | ros.IResolvable | undefined;

    /**
     * @Property predictiveScalingMode: The mode of the predictive scaling rule. Valid values:
     * - PredictAndScale: generates forecasts and creates forecast tasks.
     * - PredictOnly: generates forecasts but does not create forecast tasks.
     * Default value: PredictAndScale
     */
    public predictiveScalingMode: string | ros.IResolvable | undefined;

    /**
     * @Property predictiveTaskBufferTime: The amount of buffer time ahead of the forecast task execution time. By default, all scheduled tasks that are automatically created for a predictive scaling rule are executed at the beginning of each hour. You can set a buffer time to execute forecast tasks ahead of schedule, so that resources can be prepared in advance. Valid values: 0 to 60. Unit: minutes.
     *  Default value: 0
     */
    public predictiveTaskBufferTime: number | ros.IResolvable | undefined;

    /**
     * @Property predictiveValueBehavior: The action taken on the predicted maximum value. Valid values:
     * - MaxOverridePredictiveValue: uses the initial maximum capacity as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMax: uses the predicted value as the maximum value for forecast tasks when the predicted value is greater than the initial maximum capacity.
     *  - PredictiveValueOverrideMaxWithBuffer: increases the predicted value with a ratio, which is specified by PredictiveValueBuffer. If the value after the increase is greater than the initial maximum capacity, the value after the increase is used as the maximum value for forecast tasks.
     *  Default value: MaxOverridePredictiveValue
     */
    public predictiveValueBehavior: string | ros.IResolvable | undefined;

    /**
     * @Property predictiveValueBuffer: The ratio of the increment to the predicted value when PredictiveValueBehavior is set to PredictiveValueOverrideMaxWithBuffer. When the value after the increase is greater than the initial maximum capacity, the value after the increase is used for forecast tasks. Valid values: 0 to 100
     *  Default value: 0
     */
    public predictiveValueBuffer: number | ros.IResolvable | undefined;

    /**
     * @Property scaleInEvaluationCount: The number of consecutive times that the event-triggered task created for scale-in activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
     * Default value: 15.
     */
    public scaleInEvaluationCount: number | ros.IResolvable | undefined;

    /**
     * @Property scaleOutEvaluationCount: The number of consecutive times that the event-triggered task created for scale-out activities meets the threshold conditions before an alert is triggered. After a target tracking scaling rule is created, an event-triggered task is automatically created and then associated with the target tracking scaling rule.
     * Default value: 3.
     */
    public scaleOutEvaluationCount: number | ros.IResolvable | undefined;

    /**
     * @Property scalingRuleName: Name shown for the scaling group, which is a string containing 2 to 40 English or Chinese characters. It must begin with a number, a letter (case-insensitive) or a Chinese character and can contain numbers, "_", "-" or ".". The account name in the same scaling group is unique in the same region. If this parameter value is not specified, the default value is ScalingRuleId.
     */
    public scalingRuleName: string | ros.IResolvable | undefined;

    /**
     * @Property scalingRuleType: The type of the scaling rule. Valid values:
     * - SimpleScalingRule: scales ECS instances based on the values of AdjustmentType and AdjustmentValue.
     * - TargetTrackingScalingRule: dynamically calculates the number of ECS instances to be adjusted and tries to keep the value of a predefined monitoring metric close to TargetValue.
     * - StepScalingRule: scales ECS instances in steps based on specified thresholds and metric values.
     * - PredictiveScalingRule: uses machine learning to analyze historical monitoring data of the scaling group and then predicts the future values of monitored metrics, the rule then automatically creates scheduled tasks to set the boundary values for the scaling group.
     *  If this parameter value is not specified, the default value is SimpleScalingRule.
     */
    public scalingRuleType: string | ros.IResolvable | undefined;

    /**
     * @Property stepAdjustment:
     */
    public stepAdjustment: Array<RosScalingRule.StepAdjustmentProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property targetValue: The target value of a metric. This parameter is required and applicable only to target tracking scaling rules and predictive scaling rules. The value of TargetValue must be greater than 0 and can have a maximum of three decimal places.
     */
    public targetValue: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ESS::ScalingRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScalingRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingRuleAri = this.getAtt('ScalingRuleAri');
        this.attrScalingRuleId = this.getAtt('ScalingRuleId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.scalingGroupId = props.scalingGroupId;
        this.adjustmentType = props.adjustmentType;
        this.adjustmentValue = props.adjustmentValue;
        this.cooldown = props.cooldown;
        this.disableScaleIn = props.disableScaleIn;
        this.estimatedInstanceWarmup = props.estimatedInstanceWarmup;
        this.initialMaxSize = props.initialMaxSize;
        this.metricName = props.metricName;
        this.minAdjustmentMagnitude = props.minAdjustmentMagnitude;
        this.predictiveScalingMode = props.predictiveScalingMode;
        this.predictiveTaskBufferTime = props.predictiveTaskBufferTime;
        this.predictiveValueBehavior = props.predictiveValueBehavior;
        this.predictiveValueBuffer = props.predictiveValueBuffer;
        this.scaleInEvaluationCount = props.scaleInEvaluationCount;
        this.scaleOutEvaluationCount = props.scaleOutEvaluationCount;
        this.scalingRuleName = props.scalingRuleName;
        this.scalingRuleType = props.scalingRuleType;
        this.stepAdjustment = props.stepAdjustment;
        this.targetValue = props.targetValue;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            scalingGroupId: this.scalingGroupId,
            adjustmentType: this.adjustmentType,
            adjustmentValue: this.adjustmentValue,
            cooldown: this.cooldown,
            disableScaleIn: this.disableScaleIn,
            estimatedInstanceWarmup: this.estimatedInstanceWarmup,
            initialMaxSize: this.initialMaxSize,
            metricName: this.metricName,
            minAdjustmentMagnitude: this.minAdjustmentMagnitude,
            predictiveScalingMode: this.predictiveScalingMode,
            predictiveTaskBufferTime: this.predictiveTaskBufferTime,
            predictiveValueBehavior: this.predictiveValueBehavior,
            predictiveValueBuffer: this.predictiveValueBuffer,
            scaleInEvaluationCount: this.scaleInEvaluationCount,
            scaleOutEvaluationCount: this.scaleOutEvaluationCount,
            scalingRuleName: this.scalingRuleName,
            scalingRuleType: this.scalingRuleType,
            stepAdjustment: this.stepAdjustment,
            targetValue: this.targetValue,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScalingRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosScalingRule {
    /**
     * @stability external
     */
    export interface StepAdjustmentProperty {
        /**
         * @Property metricIntervalUpperBound: The upper limit value specified in step adjustment N.
     * Valid values: -9.999999E18 to 9.999999E18.
         */
        readonly metricIntervalUpperBound?: number | ros.IResolvable;
        /**
         * @Property metricIntervalLowerBound: The lower limit value specified in step adjustment N.
     * Valid values: -9.999999E18 to 9.999999E18.
         */
        readonly metricIntervalLowerBound?: number | ros.IResolvable;
        /**
         * @Property scalingAdjustment: The specified number of ECS instances to be adjusted in step adjustment.
         */
        readonly scalingAdjustment?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `StepAdjustmentProperty`
 *
 * @param properties - the TypeScript properties of a `StepAdjustmentProperty`
 *
 * @returns the result of the validation.
 */
function RosScalingRule_StepAdjustmentPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.metricIntervalUpperBound && (typeof properties.metricIntervalUpperBound) !== 'object') {
        errors.collect(ros.propertyValidator('metricIntervalUpperBound', ros.validateRange)({
            data: properties.metricIntervalUpperBound,
            min: -9999999000000000000,
            max: 9999999000000000000,
          }));
    }
    errors.collect(ros.propertyValidator('metricIntervalUpperBound', ros.validateNumber)(properties.metricIntervalUpperBound));
    if(properties.metricIntervalLowerBound && (typeof properties.metricIntervalLowerBound) !== 'object') {
        errors.collect(ros.propertyValidator('metricIntervalLowerBound', ros.validateRange)({
            data: properties.metricIntervalLowerBound,
            min: -9999999000000000000,
            max: 9999999000000000000,
          }));
    }
    errors.collect(ros.propertyValidator('metricIntervalLowerBound', ros.validateNumber)(properties.metricIntervalLowerBound));
    if(properties.scalingAdjustment && (typeof properties.scalingAdjustment) !== 'object') {
        errors.collect(ros.propertyValidator('scalingAdjustment', ros.validateRange)({
            data: properties.scalingAdjustment,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('scalingAdjustment', ros.validateNumber)(properties.scalingAdjustment));
    return errors.wrap('supplied properties not correct for "StepAdjustmentProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingRule.StepAdjustment` resource
 *
 * @param properties - the TypeScript properties of a `StepAdjustmentProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScalingRule.StepAdjustment` resource.
 */
// @ts-ignore TS6133
function rosScalingRuleStepAdjustmentPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosScalingRule_StepAdjustmentPropertyValidator(properties).assertSuccess();
    return {
      MetricIntervalUpperBound: ros.numberToRosTemplate(properties.metricIntervalUpperBound),
      MetricIntervalLowerBound: ros.numberToRosTemplate(properties.metricIntervalLowerBound),
      ScalingAdjustment: ros.numberToRosTemplate(properties.scalingAdjustment),
    };
}

/**
 * Properties for defining a `ALIYUN::ESS::ScheduledTask`
 */
export interface RosScheduledTaskProps {

    /**
     * @Property launchTime: Time point at which the scheduled task is triggered.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
     * A time point 90 days after creation or modification cannot be entered.
     */
    readonly launchTime: string | ros.IResolvable;

    /**
     * @Property scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
     */
    readonly scheduledAction: string | ros.IResolvable;

    /**
     * @Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property launchExpirationTime: Time period within which the failed scheduled task is retried.
     * The default value is 600s.
     * Value range: [0, 21600]
     */
    readonly launchExpirationTime?: number | ros.IResolvable;

    /**
     * @Property recurrenceEndTime: End time of the scheduled task to be repeated.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * A time point 90 days after creation or modification cannot be entered.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    readonly recurrenceEndTime?: string | ros.IResolvable;

    /**
     * @Property recurrenceType: Type of the scheduled task to be repeated. Optional values:
     * - Daily: Recurrence interval by day for a scheduled task.
     * - Weekly: Recurrence interval by week for a scheduled task.
     * - Monthly: Recurrence interval by month for a scheduled task.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    readonly recurrenceType?: string | ros.IResolvable;

    /**
     * @Property recurrenceValue: Value of the scheduled task to be repeated.
     * - Daily: Only one value in the range [1,31] can be filled.
     * - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
     * - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    readonly recurrenceValue?: string | ros.IResolvable;

    /**
     * @Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
     * The account name is unique in the same region.
     * If this parameter is not specified, the default value ScheduledScalingTaskId is used.
     */
    readonly scheduledTaskName?: string | ros.IResolvable;

    /**
     * @Property taskEnabled: Whether to enable the scheduled task.
     * - When the parameter is set to true, the task is enabled.
     * - When the parameter is set to false, the task is disabled.
     * The default value is true.
     */
    readonly taskEnabled?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosScheduledTaskProps`
 *
 * @param properties - the TypeScript properties of a `RosScheduledTaskProps`
 *
 * @returns the result of the validation.
 */
function RosScheduledTaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 2,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('launchTime', ros.requiredValidator)(properties.launchTime));
    if(properties.launchTime && (typeof properties.launchTime) !== 'object') {
        errors.collect(ros.propertyValidator('launchTime', ros.validateAllowedPattern)({
          data: properties.launchTime,
          reg: /^\d{4}-\d{2}-\d{2}T\d{2}[:]\d{2}Z$/
        }));
    }
    errors.collect(ros.propertyValidator('launchTime', ros.validateString)(properties.launchTime));
    if(properties.recurrenceType && (typeof properties.recurrenceType) !== 'object') {
        errors.collect(ros.propertyValidator('recurrenceType', ros.validateAllowedValues)({
          data: properties.recurrenceType,
          allowedValues: ["Daily","Weekly","Monthly"],
        }));
    }
    errors.collect(ros.propertyValidator('recurrenceType', ros.validateString)(properties.recurrenceType));
    if(properties.scheduledTaskName && (typeof properties.scheduledTaskName) !== 'object') {
        errors.collect(ros.propertyValidator('scheduledTaskName', ros.validateAllowedPattern)({
          data: properties.scheduledTaskName,
          reg: /^[a-zA-Z0-9\u4e00-\u9fa5][-_.a-zA-Z0-9\u4e00-\u9fa5]{1,63}$/
        }));
    }
    errors.collect(ros.propertyValidator('scheduledTaskName', ros.validateString)(properties.scheduledTaskName));
    errors.collect(ros.propertyValidator('scheduledAction', ros.requiredValidator)(properties.scheduledAction));
    if(properties.scheduledAction && (Array.isArray(properties.scheduledAction) || (typeof properties.scheduledAction) === 'string')) {
        errors.collect(ros.propertyValidator('scheduledAction', ros.validateLength)({
            data: properties.scheduledAction.length,
            min: undefined,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('scheduledAction', ros.validateString)(properties.scheduledAction));
    if(properties.recurrenceEndTime && (typeof properties.recurrenceEndTime) !== 'object') {
        errors.collect(ros.propertyValidator('recurrenceEndTime', ros.validateAllowedPattern)({
          data: properties.recurrenceEndTime,
          reg: /^\d{4}-\d{2}-\d{2}T\d{2}[:]\d{2}Z$/
        }));
    }
    errors.collect(ros.propertyValidator('recurrenceEndTime', ros.validateString)(properties.recurrenceEndTime));
    if(properties.recurrenceValue && (Array.isArray(properties.recurrenceValue) || (typeof properties.recurrenceValue) === 'string')) {
        errors.collect(ros.propertyValidator('recurrenceValue', ros.validateLength)({
            data: properties.recurrenceValue.length,
            min: undefined,
            max: 50,
          }));
    }
    if(properties.recurrenceValue && (typeof properties.recurrenceValue) !== 'object') {
        errors.collect(ros.propertyValidator('recurrenceValue', ros.validateAllowedPattern)({
          data: properties.recurrenceValue,
          reg: /^(\d{1,2})$|^([0-6](,\s*[0-6]){,6})$|^(\d{1,2}[-]\d{1,2})$/
        }));
    }
    errors.collect(ros.propertyValidator('recurrenceValue', ros.validateString)(properties.recurrenceValue));
    errors.collect(ros.propertyValidator('taskEnabled', ros.validateBoolean)(properties.taskEnabled));
    if(properties.launchExpirationTime && (typeof properties.launchExpirationTime) !== 'object') {
        errors.collect(ros.propertyValidator('launchExpirationTime', ros.validateRange)({
            data: properties.launchExpirationTime,
            min: 0,
            max: 21600,
          }));
    }
    errors.collect(ros.propertyValidator('launchExpirationTime', ros.validateNumber)(properties.launchExpirationTime));
    return errors.wrap('supplied properties not correct for "RosScheduledTaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScheduledTask` resource
 *
 * @param properties - the TypeScript properties of a `RosScheduledTaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ScheduledTask` resource.
 */
// @ts-ignore TS6133
function rosScheduledTaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScheduledTaskPropsValidator(properties).assertSuccess();
    }
    return {
      LaunchTime: ros.stringToRosTemplate(properties.launchTime),
      ScheduledAction: ros.stringToRosTemplate(properties.scheduledAction),
      Description: ros.stringToRosTemplate(properties.description),
      LaunchExpirationTime: ros.numberToRosTemplate(properties.launchExpirationTime),
      RecurrenceEndTime: ros.stringToRosTemplate(properties.recurrenceEndTime),
      RecurrenceType: ros.stringToRosTemplate(properties.recurrenceType),
      RecurrenceValue: ros.stringToRosTemplate(properties.recurrenceValue),
      ScheduledTaskName: ros.stringToRosTemplate(properties.scheduledTaskName),
      TaskEnabled: ros.booleanToRosTemplate(properties.taskEnabled),
    };
}

/**
 * A ROS template type:  `ALIYUN::ESS::ScheduledTask`
 */
export class RosScheduledTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ScheduledTask";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ScheduledTaskId: ID of the scheduled task, which is generated by the system and globally unique.
     */
    public readonly attrScheduledTaskId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property launchTime: Time point at which the scheduled task is triggered.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * If RecurrenceType is specified, the time point specified by this attribute is the default time point at which the circle is executed. If RecurrenceType is not specified, the task is executed once on the designated date and time.
     * A time point 90 days after creation or modification cannot be entered.
     */
    public launchTime: string | ros.IResolvable;

    /**
     * @Property scheduledAction: Operations performed when the scheduled task is triggered. Fill in the unique identifier of the scaling rule.
     */
    public scheduledAction: string | ros.IResolvable;

    /**
     * @Property description: Description of the scheduled task, which is 2-200 characters (English or Chinese) long.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property launchExpirationTime: Time period within which the failed scheduled task is retried.
     * The default value is 600s.
     * Value range: [0, 21600]
     */
    public launchExpirationTime: number | ros.IResolvable | undefined;

    /**
     * @Property recurrenceEndTime: End time of the scheduled task to be repeated.
     * The date format follows the ISO8601 standard and uses UTC time. It is in the format of YYYY-MM-DDThh:mmZ.
     * A time point 90 days after creation or modification cannot be entered.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    public recurrenceEndTime: string | ros.IResolvable | undefined;

    /**
     * @Property recurrenceType: Type of the scheduled task to be repeated. Optional values:
     * - Daily: Recurrence interval by day for a scheduled task.
     * - Weekly: Recurrence interval by week for a scheduled task.
     * - Monthly: Recurrence interval by month for a scheduled task.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    public recurrenceType: string | ros.IResolvable | undefined;

    /**
     * @Property recurrenceValue: Value of the scheduled task to be repeated.
     * - Daily: Only one value in the range [1,31] can be filled.
     * - Weekly: Multiple values can be filled. The values of Sunday to Saturday are 0 to 6 in sequence. Multiple values shall be separated by a comma ",".
     * - Monthly: In the format of A-B. The value range of A and B is 1 to 31, and the B value must be greater than the A value.
     * RecurrenceType, RecurrenceValue and RecurrenceEndTime must be specified.
     */
    public recurrenceValue: string | ros.IResolvable | undefined;

    /**
     * @Property scheduledTaskName: Display name of the scheduled task, which must be 2-40 characters (English or Chinese) long. It must begin with a number, an upper/lower-case letter or a Chinese character and may contain numbers, "_", "-" or ".".
     * The account name is unique in the same region.
     * If this parameter is not specified, the default value ScheduledScalingTaskId is used.
     */
    public scheduledTaskName: string | ros.IResolvable | undefined;

    /**
     * @Property taskEnabled: Whether to enable the scheduled task.
     * - When the parameter is set to true, the task is enabled.
     * - When the parameter is set to false, the task is disabled.
     * The default value is true.
     */
    public taskEnabled: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ESS::ScheduledTask`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScheduledTaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScheduledTask.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScheduledTaskId = this.getAtt('ScheduledTaskId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.launchTime = props.launchTime;
        this.scheduledAction = props.scheduledAction;
        this.description = props.description;
        this.launchExpirationTime = props.launchExpirationTime;
        this.recurrenceEndTime = props.recurrenceEndTime;
        this.recurrenceType = props.recurrenceType;
        this.recurrenceValue = props.recurrenceValue;
        this.scheduledTaskName = props.scheduledTaskName;
        this.taskEnabled = props.taskEnabled;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            launchTime: this.launchTime,
            scheduledAction: this.scheduledAction,
            description: this.description,
            launchExpirationTime: this.launchExpirationTime,
            recurrenceEndTime: this.recurrenceEndTime,
            recurrenceType: this.recurrenceType,
            recurrenceValue: this.recurrenceValue,
            scheduledTaskName: this.scheduledTaskName,
            taskEnabled: this.taskEnabled,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScheduledTaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::ESS::ServerGroupAttachment`
 */
export interface RosServerGroupAttachmentProps {

    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;

    /**
     * @Property serverGroups: A collection of information about server groups.
     */
    readonly serverGroups: Array<RosServerGroupAttachment.ServerGroupsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly forceAttach?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServerGroupAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosServerGroupAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosServerGroupAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverGroups', ros.requiredValidator)(properties.serverGroups));
    if(properties.serverGroups && (Array.isArray(properties.serverGroups) || (typeof properties.serverGroups) === 'string')) {
        errors.collect(ros.propertyValidator('serverGroups', ros.validateLength)({
            data: properties.serverGroups.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('serverGroups', ros.listValidator(RosServerGroupAttachment_ServerGroupsPropertyValidator))(properties.serverGroups));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.requiredValidator)(properties.scalingGroupId));
    errors.collect(ros.propertyValidator('scalingGroupId', ros.validateString)(properties.scalingGroupId));
    errors.collect(ros.propertyValidator('forceAttach', ros.validateBoolean)(properties.forceAttach));
    return errors.wrap('supplied properties not correct for "RosServerGroupAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ServerGroupAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosServerGroupAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ServerGroupAttachment` resource.
 */
// @ts-ignore TS6133
function rosServerGroupAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServerGroupAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      ScalingGroupId: ros.stringToRosTemplate(properties.scalingGroupId),
      ServerGroups: ros.listMapper(rosServerGroupAttachmentServerGroupsPropertyToRosTemplate)(properties.serverGroups),
      ForceAttach: ros.booleanToRosTemplate(properties.forceAttach),
    };
}

/**
 * A ROS template type:  `ALIYUN::ESS::ServerGroupAttachment`
 */
export class RosServerGroupAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESS::ServerGroupAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ScalingActivityId: The ID of the scaling activity during which one or more SLB instances are attached to the scaling group and the ECS instances in the scaling group are added to the backend server groups of the SLB instances.
Note This parameter is returned only after you set the ForceAttach parameter to true.
     */
    public readonly attrScalingActivityId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property scalingGroupId: The ID of the scaling group.
     */
    public scalingGroupId: string | ros.IResolvable;

    /**
     * @Property serverGroups: A collection of information about server groups.
     */
    public serverGroups: Array<RosServerGroupAttachment.ServerGroupsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance. Valid values:
     * true
     * false
     * Default value: false.
     */
    public forceAttach: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ESS::ServerGroupAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServerGroupAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServerGroupAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingActivityId = this.getAtt('ScalingActivityId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.scalingGroupId = props.scalingGroupId;
        this.serverGroups = props.serverGroups;
        this.forceAttach = props.forceAttach;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            scalingGroupId: this.scalingGroupId,
            serverGroups: this.serverGroups,
            forceAttach: this.forceAttach,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServerGroupAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosServerGroupAttachment {
    /**
     * @stability external
     */
    export interface ServerGroupsProperty {
        /**
         * @Property type: The type of backend server group.
     * Valid values:
     * ALB
     * NLB
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property port: The port number used by an ECS instance in the scaling group after Auto Scaling adds the ECS instance to backend server group.
     * ALB server group port range [1,65535], NLB server group port range [0,65535].
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property serverGroupId: The ID of backend server group.
         */
        readonly serverGroupId: string | ros.IResolvable;
        /**
         * @Property weight: The weight of an ECS instance in the scaling group as a backend server after Auto Scaling adds the ECS instance to backend server group. Valid values: 0 to 100.
     * If you increase the weight of an ECS instance in a backend server group, the number of access requests that are forwarded to the ECS instance increases. If you set the Weight parameter for an ECS instance in a backend server group to 0, no access requests are forwarded to the ECS instance.
         */
        readonly weight: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ServerGroupsProperty`
 *
 * @param properties - the TypeScript properties of a `ServerGroupsProperty`
 *
 * @returns the result of the validation.
 */
function RosServerGroupAttachment_ServerGroupsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["ALB","NLB"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('serverGroupId', ros.requiredValidator)(properties.serverGroupId));
    errors.collect(ros.propertyValidator('serverGroupId', ros.validateString)(properties.serverGroupId));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "ServerGroupsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESS::ServerGroupAttachment.ServerGroups` resource
 *
 * @param properties - the TypeScript properties of a `ServerGroupsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESS::ServerGroupAttachment.ServerGroups` resource.
 */
// @ts-ignore TS6133
function rosServerGroupAttachmentServerGroupsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerGroupAttachment_ServerGroupsPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Port: ros.numberToRosTemplate(properties.port),
      ServerGroupId: ros.stringToRosTemplate(properties.serverGroupId),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}
