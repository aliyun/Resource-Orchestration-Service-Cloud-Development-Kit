// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::EventBridge::Rule`
 */
export interface RosRuleProps {

    /**
     * @Property eventBusName: The name of the event bus.
     */
    readonly eventBusName: string | ros.IResolvable;

    /**
     * @Property filterPattern: The event pattern, in the JSON format.
     */
    readonly filterPattern: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property ruleName: The name of the event rule.
     */
    readonly ruleName: string | ros.IResolvable;

    /**
     * @Property targets: The event target to which events are delivered.
     */
    readonly targets: Array<RosRule.TargetsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of the event rule.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property status: The status of the event rule. Valid values:
     * ENABLE: The event rule is enabled. It is the default state of the event rule.
     * DISABLE: The event rule is disabled.
     */
    readonly status?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the result of the validation.
 */
function RosRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('eventBusName', ros.requiredValidator)(properties.eventBusName));
    errors.collect(ros.propertyValidator('eventBusName', ros.validateString)(properties.eventBusName));
    errors.collect(ros.propertyValidator('filterPattern', ros.requiredValidator)(properties.filterPattern));
    errors.collect(ros.propertyValidator('filterPattern', ros.hashValidator(ros.validateAny))(properties.filterPattern));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('targets', ros.requiredValidator)(properties.targets));
    if(properties.targets && (Array.isArray(properties.targets) || (typeof properties.targets) === 'string')) {
        errors.collect(ros.propertyValidator('targets', ros.validateLength)({
            data: properties.targets.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('targets', ros.listValidator(RosRule_TargetsPropertyValidator))(properties.targets));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule` resource
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule` resource.
 */
// @ts-ignore TS6133
function rosRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRulePropsValidator(properties).assertSuccess();
    }
    return {
      EventBusName: ros.stringToRosTemplate(properties.eventBusName),
      FilterPattern: ros.hashMapper(ros.objectToRosTemplate)(properties.filterPattern),
      RuleName: ros.stringToRosTemplate(properties.ruleName),
      Targets: ros.listMapper(rosRuleTargetsPropertyToRosTemplate)(properties.targets),
      Description: ros.stringToRosTemplate(properties.description),
      Status: ros.stringToRosTemplate(properties.status),
    };
}

/**
 * A ROS template type:  `ALIYUN::EventBridge::Rule`
 */
export class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EventBridge::Rule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute EventBusName: The name of the event bus.
     */
    public readonly attrEventBusName: ros.IResolvable;

    /**
     * @Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule. The ARN is used for authorization.
     */
    public readonly attrRuleArn: ros.IResolvable;

    /**
     * @Attribute RuleName: The name of the event rule.
     */
    public readonly attrRuleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property eventBusName: The name of the event bus.
     */
    public eventBusName: string | ros.IResolvable;

    /**
     * @Property filterPattern: The event pattern, in the JSON format.
     */
    public filterPattern: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property ruleName: The name of the event rule.
     */
    public ruleName: string | ros.IResolvable;

    /**
     * @Property targets: The event target to which events are delivered.
     */
    public targets: Array<RosRule.TargetsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of the event rule.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the event rule. Valid values:
     * ENABLE: The event rule is enabled. It is the default state of the event rule.
     * DISABLE: The event rule is disabled.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::EventBridge::Rule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEventBusName = this.getAtt('EventBusName');
        this.attrRuleArn = this.getAtt('RuleARN');
        this.attrRuleName = this.getAtt('RuleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.eventBusName = props.eventBusName;
        this.filterPattern = props.filterPattern;
        this.ruleName = props.ruleName;
        this.targets = props.targets;
        this.description = props.description;
        this.status = props.status;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            eventBusName: this.eventBusName,
            filterPattern: this.filterPattern,
            ruleName: this.ruleName,
            targets: this.targets,
            description: this.description,
            status: this.status,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface ParamListProperty {
        /**
         * @Property form: The transformation method.For more information, see Event target parameters.
         */
        readonly form: string | ros.IResolvable;
        /**
         * @Property value: The event value to be transformed.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property resourceKey: The resource key of the transformed event.For more information, see Event target parameters.
         */
        readonly resourceKey: string | ros.IResolvable;
        /**
         * @Property template: The format of the template.
         */
        readonly template?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ParamListProperty`
 *
 * @param properties - the TypeScript properties of a `ParamListProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_ParamListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('form', ros.requiredValidator)(properties.form));
    errors.collect(ros.propertyValidator('form', ros.validateString)(properties.form));
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('resourceKey', ros.requiredValidator)(properties.resourceKey));
    errors.collect(ros.propertyValidator('resourceKey', ros.validateString)(properties.resourceKey));
    errors.collect(ros.propertyValidator('template', ros.validateString)(properties.template));
    return errors.wrap('supplied properties not correct for "ParamListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule.ParamList` resource
 *
 * @param properties - the TypeScript properties of a `ParamListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule.ParamList` resource.
 */
// @ts-ignore TS6133
function rosRuleParamListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_ParamListPropertyValidator(properties).assertSuccess();
    return {
      Form: ros.stringToRosTemplate(properties.form),
      Value: ros.stringToRosTemplate(properties.value),
      ResourceKey: ros.stringToRosTemplate(properties.resourceKey),
      Template: ros.stringToRosTemplate(properties.template),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface TargetsProperty {
        /**
         * @Property pushRetryStrategy: The retry policy that is used to push the event. Valid values: BACKOFF_RETRY: backoff retry. The request can be retried up to three times. The interval between two consecutive retries is a random value between 10 and 20 seconds. EXPONENTIAL_DECAY_RETRY: exponential decay retry. The request can be retried up to 176 times. The interval between two consecutive retries exponentially increases to 512 seconds, and the total retry time is one day. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512, ..., and 512 seconds, including a maximum of one hundred and sixty-seven 512 seconds in total.
         */
        readonly pushRetryStrategy?: string | ros.IResolvable;
        /**
         * @Property type: The type of the event target.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property endpoint: The endpoint of the event target.
         */
        readonly endpoint: string | ros.IResolvable;
        /**
         * @Property id: The custom ID of the event target.
         */
        readonly id: string | ros.IResolvable;
        /**
         * @Property paramList: The parameters that the event passes.
         */
        readonly paramList: Array<RosRule.ParamListProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TargetsProperty`
 *
 * @param properties - the TypeScript properties of a `TargetsProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_TargetsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pushRetryStrategy', ros.validateString)(properties.pushRetryStrategy));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('endpoint', ros.requiredValidator)(properties.endpoint));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('id', ros.requiredValidator)(properties.id));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    errors.collect(ros.propertyValidator('paramList', ros.requiredValidator)(properties.paramList));
    if(properties.paramList && (Array.isArray(properties.paramList) || (typeof properties.paramList) === 'string')) {
        errors.collect(ros.propertyValidator('paramList', ros.validateLength)({
            data: properties.paramList.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('paramList', ros.listValidator(RosRule_ParamListPropertyValidator))(properties.paramList));
    return errors.wrap('supplied properties not correct for "TargetsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule.Targets` resource
 *
 * @param properties - the TypeScript properties of a `TargetsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EventBridge::Rule.Targets` resource.
 */
// @ts-ignore TS6133
function rosRuleTargetsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_TargetsPropertyValidator(properties).assertSuccess();
    return {
      PushRetryStrategy: ros.stringToRosTemplate(properties.pushRetryStrategy),
      Type: ros.stringToRosTemplate(properties.type),
      Endpoint: ros.stringToRosTemplate(properties.endpoint),
      Id: ros.stringToRosTemplate(properties.id),
      ParamList: ros.listMapper(rosRuleParamListPropertyToRosTemplate)(properties.paramList),
    };
}
