// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::FNF::Flow`
 */
export interface RosFlowProps {

    /**
     * @Property definition: The definition of the created flow following the FDL syntax standard.
     */
    readonly definition: string | ros.IResolvable;

    /**
     * @Property name: The name of the flow created. This name is unique under the account.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property description: Create a description of the flow.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
     */
    readonly requestId?: string | ros.IResolvable;

    /**
     * @Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
     */
    readonly roleArn?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFlowProps`
 *
 * @param properties - the TypeScript properties of a `RosFlowProps`
 *
 * @returns the result of the validation.
 */
function RosFlowPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('requestId', ros.validateString)(properties.requestId));
    errors.collect(ros.propertyValidator('definition', ros.requiredValidator)(properties.definition));
    errors.collect(ros.propertyValidator('definition', ros.validateString)(properties.definition));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosFlowProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FNF::Flow` resource
 *
 * @param properties - the TypeScript properties of a `RosFlowProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FNF::Flow` resource.
 */
// @ts-ignore TS6133
function rosFlowPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFlowPropsValidator(properties).assertSuccess();
    }
    return {
      Definition: ros.stringToRosTemplate(properties.definition),
      Name: ros.stringToRosTemplate(properties.name),
      Description: ros.stringToRosTemplate(properties.description),
      RequestId: ros.stringToRosTemplate(properties.requestId),
      RoleArn: ros.stringToRosTemplate(properties.roleArn),
    };
}

/**
 * A ROS template type:  `ALIYUN::FNF::Flow`
 */
export class RosFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FNF::Flow";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CreatedTime: Flow creation time.
     */
    public readonly attrCreatedTime: ros.IResolvable;

    /**
     * @Attribute Id: The unique ID of the flow.
     */
    public readonly attrId: ros.IResolvable;

    /**
     * @Attribute LastModifiedTime: The most recently modified time of the flow.
     */
    public readonly attrLastModifiedTime: ros.IResolvable;

    /**
     * @Attribute Name: The name of the flow created.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property definition: The definition of the created flow following the FDL syntax standard.
     */
    public definition: string | ros.IResolvable;

    /**
     * @Property name: The name of the flow created. This name is unique under the account.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property description: Create a description of the flow.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
     */
    public requestId: string | ros.IResolvable | undefined;

    /**
     * @Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
     */
    public roleArn: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::FNF::Flow`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFlow.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreatedTime = this.getAtt('CreatedTime');
        this.attrId = this.getAtt('Id');
        this.attrLastModifiedTime = this.getAtt('LastModifiedTime');
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.definition = props.definition;
        this.name = props.name;
        this.description = props.description;
        this.requestId = props.requestId;
        this.roleArn = props.roleArn;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            definition: this.definition,
            name: this.name,
            description: this.description,
            requestId: this.requestId,
            roleArn: this.roleArn,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFlowPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::FNF::Schedule`
 */
export interface RosScheduleProps {

    /**
     * @Property cronExpression: Cron expression.
     */
    readonly cronExpression: string | ros.IResolvable;

    /**
     * @Property flowName: Flow name.
     */
    readonly flowName: string | ros.IResolvable;

    /**
     * @Property scheduleName: Schedule name.
     */
    readonly scheduleName: string | ros.IResolvable;

    /**
     * @Property description: Description of the schedule.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property enable: Whether enable schedule.
     */
    readonly enable?: boolean | ros.IResolvable;

    /**
     * @Property payload: Payload.
     */
    readonly payload?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosScheduleProps`
 *
 * @param properties - the TypeScript properties of a `RosScheduleProps`
 *
 * @returns the result of the validation.
 */
function RosSchedulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('flowName', ros.requiredValidator)(properties.flowName));
    errors.collect(ros.propertyValidator('flowName', ros.validateString)(properties.flowName));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('payload', ros.validateString)(properties.payload));
    errors.collect(ros.propertyValidator('cronExpression', ros.requiredValidator)(properties.cronExpression));
    errors.collect(ros.propertyValidator('cronExpression', ros.validateString)(properties.cronExpression));
    errors.collect(ros.propertyValidator('scheduleName', ros.requiredValidator)(properties.scheduleName));
    errors.collect(ros.propertyValidator('scheduleName', ros.validateString)(properties.scheduleName));
    return errors.wrap('supplied properties not correct for "RosScheduleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::FNF::Schedule` resource
 *
 * @param properties - the TypeScript properties of a `RosScheduleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::FNF::Schedule` resource.
 */
// @ts-ignore TS6133
function rosSchedulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSchedulePropsValidator(properties).assertSuccess();
    }
    return {
      CronExpression: ros.stringToRosTemplate(properties.cronExpression),
      FlowName: ros.stringToRosTemplate(properties.flowName),
      ScheduleName: ros.stringToRosTemplate(properties.scheduleName),
      Description: ros.stringToRosTemplate(properties.description),
      Enable: ros.booleanToRosTemplate(properties.enable),
      Payload: ros.stringToRosTemplate(properties.payload),
    };
}

/**
 * A ROS template type:  `ALIYUN::FNF::Schedule`
 */
export class RosSchedule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FNF::Schedule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute FlowName: Flow name.
     */
    public readonly attrFlowName: ros.IResolvable;

    /**
     * @Attribute ScheduleId: Schedule Id
     */
    public readonly attrScheduleId: ros.IResolvable;

    /**
     * @Attribute ScheduleName: Schedule name.
     */
    public readonly attrScheduleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cronExpression: Cron expression.
     */
    public cronExpression: string | ros.IResolvable;

    /**
     * @Property flowName: Flow name.
     */
    public flowName: string | ros.IResolvable;

    /**
     * @Property scheduleName: Schedule name.
     */
    public scheduleName: string | ros.IResolvable;

    /**
     * @Property description: Description of the schedule.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property enable: Whether enable schedule.
     */
    public enable: boolean | ros.IResolvable | undefined;

    /**
     * @Property payload: Payload.
     */
    public payload: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::FNF::Schedule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScheduleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSchedule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFlowName = this.getAtt('FlowName');
        this.attrScheduleId = this.getAtt('ScheduleId');
        this.attrScheduleName = this.getAtt('ScheduleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cronExpression = props.cronExpression;
        this.flowName = props.flowName;
        this.scheduleName = props.scheduleName;
        this.description = props.description;
        this.enable = props.enable;
        this.payload = props.payload;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cronExpression: this.cronExpression,
            flowName: this.flowName,
            scheduleName: this.scheduleName,
            description: this.description,
            enable: this.enable,
            payload: this.payload,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSchedulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
