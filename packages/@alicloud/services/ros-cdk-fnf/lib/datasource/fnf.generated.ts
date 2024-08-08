// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

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
      RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
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
      FlowName: ros.stringToRosTemplate(properties.flowName),
      RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FNF::Schedules`, which is used to query time-based schedules.
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
