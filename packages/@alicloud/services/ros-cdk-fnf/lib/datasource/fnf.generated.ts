// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flow
 */
export interface RosFlowProps {

    /**
     * @Property flowName: The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.
     */
    readonly flowName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('flowName', ros.requiredValidator)(properties.flowName));
    errors.collect(ros.propertyValidator('flowName', ros.validateString)(properties.flowName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosFlowProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FNF::Flow` resource
 *
 * @param properties - the TypeScript properties of a `RosFlowProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FNF::Flow` resource.
 */
// @ts-ignore TS6133
function rosFlowPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFlowPropsValidator(properties).assertSuccess();
    }
    return {
      'FlowName': ros.stringToRosTemplate(properties.flowName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FNF::Flow`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Flow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flow
 */
export class RosFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FNF::Flow";

    /**
     * @Attribute CreateTime: The time when the flow was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Definition: The flow definition, which follows the flow definition language (FDL) syntax standard. Considering compatibility, the system supports the two flow definition specifications.
     */
    public readonly attrDefinition: ros.IResolvable;

    /**
     * @Attribute Description: The description of the flow.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute FlowId: The unique ID of the flow.
     */
    public readonly attrFlowId: ros.IResolvable;

    /**
     * @Attribute FlowName: The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.
     */
    public readonly attrFlowName: ros.IResolvable;

    /**
     * @Attribute LastModifiedTime: The time when the flow was last modified.
     */
    public readonly attrLastModifiedTime: ros.IResolvable;

    /**
     * @Attribute RoleArn: The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
     */
    public readonly attrRoleArn: ros.IResolvable;

    /**
     * @Attribute Type: The type of the flow. Valid values are FDL or DEFAULT.
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property flowName: The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.
     */
    public flowName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFlow.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDefinition = this.getAtt('Definition');
        this.attrDescription = this.getAtt('Description');
        this.attrFlowId = this.getAtt('FlowId');
        this.attrFlowName = this.getAtt('FlowName');
        this.attrLastModifiedTime = this.getAtt('LastModifiedTime');
        this.attrRoleArn = this.getAtt('RoleArn');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.flowName = props.flowName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            flowName: this.flowName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFlowPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosFlows`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
 */
export interface RosFlowsProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFlowsProps`
 *
 * @param properties - the TypeScript properties of a `RosFlowsProps`
 *
 * @returns the result of the validation.
 */
function RosFlowsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosFlowsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FNF::Flows` resource
 *
 * @param properties - the TypeScript properties of a `RosFlowsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FNF::Flows` resource.
 */
// @ts-ignore TS6133
function rosFlowsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFlowsPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FNF::Flows`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Flows` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
 */
export class RosFlows extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FNF::Flows";

    /**
     * @Attribute FlowNames: The list of flow names.
     */
    public readonly attrFlowNames: ros.IResolvable;

    /**
     * @Attribute Flows: The details about flows.
     */
    public readonly attrFlows: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFlows.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFlowNames = this.getAtt('FlowNames');
        this.attrFlows = this.getAtt('Flows');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFlowsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSchedule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedule
 */
export interface RosScheduleProps {

    /**
     * @Property flowName: The name of the flow that is associated with the time-based schedule. The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    readonly flowName: string | ros.IResolvable;

    /**
     * @Property scheduleName: The name of the time-based schedule. The name must meet the following conventions:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    readonly scheduleName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('flowName', ros.requiredValidator)(properties.flowName));
    errors.collect(ros.propertyValidator('flowName', ros.validateString)(properties.flowName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('scheduleName', ros.requiredValidator)(properties.scheduleName));
    errors.collect(ros.propertyValidator('scheduleName', ros.validateString)(properties.scheduleName));
    return errors.wrap('supplied properties not correct for "RosScheduleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FNF::Schedule` resource
 *
 * @param properties - the TypeScript properties of a `RosScheduleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FNF::Schedule` resource.
 */
// @ts-ignore TS6133
function rosSchedulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSchedulePropsValidator(properties).assertSuccess();
    }
    return {
      'FlowName': ros.stringToRosTemplate(properties.flowName),
      'ScheduleName': ros.stringToRosTemplate(properties.scheduleName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FNF::Schedule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Schedule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedule
 */
export class RosSchedule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FNF::Schedule";

    /**
     * @Attribute CreateTime: The time when the time-based schedule was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CronExpression: The CRON expression of the time-based schedule to be created.
     */
    public readonly attrCronExpression: ros.IResolvable;

    /**
     * @Attribute Description: The description of the time-based schedule to be created.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute LastModifiedTime: The time when the time-based schedule was last updated.
     */
    public readonly attrLastModifiedTime: ros.IResolvable;

    /**
     * @Attribute Payload: The trigger message of the time-based schedule to be created.
     */
    public readonly attrPayload: ros.IResolvable;

    /**
     * @Attribute ScheduleId: The ID of the time-based schedule.
     */
    public readonly attrScheduleId: ros.IResolvable;

    /**
     * @Attribute ScheduleName: The name of the time-based schedule to be created.
     */
    public readonly attrScheduleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property flowName: The name of the flow that is associated with the time-based schedule. The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    public flowName: string | ros.IResolvable;

    /**
     * @Property scheduleName: The name of the time-based schedule. The name must meet the following conventions:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    public scheduleName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScheduleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSchedule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCronExpression = this.getAtt('CronExpression');
        this.attrDescription = this.getAtt('Description');
        this.attrLastModifiedTime = this.getAtt('LastModifiedTime');
        this.attrPayload = this.getAtt('Payload');
        this.attrScheduleId = this.getAtt('ScheduleId');
        this.attrScheduleName = this.getAtt('ScheduleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.flowName = props.flowName;
        this.scheduleName = props.scheduleName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            flowName: this.flowName,
            scheduleName: this.scheduleName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSchedulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSchedules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedules
 */
export interface RosSchedulesProps {

    /**
     * @Property flowName: The name of the flow that is bound to the time-based schedule. 
     * The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    readonly flowName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSchedulesProps`
 *
 * @param properties - the TypeScript properties of a `RosSchedulesProps`
 *
 * @returns the result of the validation.
 */
function RosSchedulesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('flowName', ros.requiredValidator)(properties.flowName));
    errors.collect(ros.propertyValidator('flowName', ros.validateString)(properties.flowName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosSchedulesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::FNF::Schedules` resource
 *
 * @param properties - the TypeScript properties of a `RosSchedulesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::FNF::Schedules` resource.
 */
// @ts-ignore TS6133
function rosSchedulesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSchedulesPropsValidator(properties).assertSuccess();
    }
    return {
      'FlowName': ros.stringToRosTemplate(properties.flowName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FNF::Schedules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Schedules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedules
 */
export class RosSchedules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FNF::Schedules";

    /**
     * @Attribute ScheduleNames: The list of schedule names.
     */
    public readonly attrScheduleNames: ros.IResolvable;

    /**
     * @Attribute Schedules: The queried time-based schedules.
     */
    public readonly attrSchedules: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property flowName: The name of the flow that is bound to the time-based schedule. 
     * The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    public flowName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSchedulesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSchedules.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScheduleNames = this.getAtt('ScheduleNames');
        this.attrSchedules = this.getAtt('Schedules');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.flowName = props.flowName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            flowName: this.flowName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSchedulesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
