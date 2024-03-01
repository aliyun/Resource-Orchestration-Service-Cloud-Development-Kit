// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosScalingConfigurations`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
 */
export interface RosScalingConfigurationsProps {

    /**
     * @Property scalingConfigurationIds: The ID of scaling configuration that you want to query. Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
     */
    readonly scalingConfigurationIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property scalingConfigurationNames: The name of scaling configuration that you want to query. Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
     */
    readonly scalingConfigurationNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property scalingGroupId: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
     */
    readonly scalingGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosScalingConfigurationsProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingConfigurationsProps`
 *
 * @returns the result of the validation.
 */
function RosScalingConfigurationsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('scalingGroupId', ros.validateString)(properties.scalingGroupId));
    if(properties.scalingConfigurationIds && (Array.isArray(properties.scalingConfigurationIds) || (typeof properties.scalingConfigurationIds) === 'string')) {
        errors.collect(ros.propertyValidator('scalingConfigurationIds', ros.validateLength)({
            data: properties.scalingConfigurationIds.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('scalingConfigurationIds', ros.listValidator(ros.validateString))(properties.scalingConfigurationIds));
    if(properties.scalingConfigurationNames && (Array.isArray(properties.scalingConfigurationNames) || (typeof properties.scalingConfigurationNames) === 'string')) {
        errors.collect(ros.propertyValidator('scalingConfigurationNames', ros.validateLength)({
            data: properties.scalingConfigurationNames.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('scalingConfigurationNames', ros.listValidator(ros.validateString))(properties.scalingConfigurationNames));
    return errors.wrap('supplied properties not correct for "RosScalingConfigurationsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingConfigurations` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingConfigurationsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingConfigurations` resource.
 */
// @ts-ignore TS6133
function rosScalingConfigurationsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScalingConfigurationsPropsValidator(properties).assertSuccess();
    }
    return {
      ScalingConfigurationIds: ros.listMapper(ros.stringToRosTemplate)(properties.scalingConfigurationIds),
      ScalingConfigurationNames: ros.listMapper(ros.stringToRosTemplate)(properties.scalingConfigurationNames),
      ScalingGroupId: ros.stringToRosTemplate(properties.scalingGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingConfigurations`, which is used to query the details of scaling configurations.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingConfigurations` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
 */
export class RosScalingConfigurations extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingConfigurations";

    /**
     * @Attribute ScalingConfigurationIds: The list of scaling configuration IDs.
     */
    public readonly attrScalingConfigurationIds: ros.IResolvable;

    /**
     * @Attribute ScalingConfigurations: The list of scaling configurations.
     */
    public readonly attrScalingConfigurations: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property scalingConfigurationIds: The ID of scaling configuration that you want to query. Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
     */
    public scalingConfigurationIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scalingConfigurationNames: The name of scaling configuration that you want to query. Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
     */
    public scalingConfigurationNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scalingGroupId: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
     */
    public scalingGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingConfigurationsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScalingConfigurations.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingConfigurationIds = this.getAtt('ScalingConfigurationIds');
        this.attrScalingConfigurations = this.getAtt('ScalingConfigurations');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.scalingConfigurationIds = props.scalingConfigurationIds;
        this.scalingConfigurationNames = props.scalingConfigurationNames;
        this.scalingGroupId = props.scalingGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            scalingConfigurationIds: this.scalingConfigurationIds,
            scalingConfigurationNames: this.scalingConfigurationNames,
            scalingGroupId: this.scalingGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScalingConfigurationsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosScalingGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
 */
export interface RosScalingGroupsProps {

    /**
     * @Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS: the Elastic Compute Service (ECS) instances
     * ECI: the elastic container instances
     * Default value: ECS.
     */
    readonly groupType?: string | ros.IResolvable;

    /**
     * @Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    readonly scalingGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    readonly scalingGroupNames?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosScalingGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosScalingGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosScalingGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.scalingGroupNames && (Array.isArray(properties.scalingGroupNames) || (typeof properties.scalingGroupNames) === 'string')) {
        errors.collect(ros.propertyValidator('scalingGroupNames', ros.validateLength)({
            data: properties.scalingGroupNames.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('scalingGroupNames', ros.listValidator(ros.validateString))(properties.scalingGroupNames));
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    if(properties.scalingGroupIds && (Array.isArray(properties.scalingGroupIds) || (typeof properties.scalingGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('scalingGroupIds', ros.validateLength)({
            data: properties.scalingGroupIds.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('scalingGroupIds', ros.listValidator(ros.validateString))(properties.scalingGroupIds));
    return errors.wrap('supplied properties not correct for "RosScalingGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosScalingGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ESS::ScalingGroups` resource.
 */
// @ts-ignore TS6133
function rosScalingGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScalingGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      GroupType: ros.stringToRosTemplate(properties.groupType),
      ScalingGroupIds: ros.listMapper(ros.stringToRosTemplate)(properties.scalingGroupIds),
      ScalingGroupNames: ros.listMapper(ros.stringToRosTemplate)(properties.scalingGroupNames),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ESS::ScalingGroups`, which is used to query scaling groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScalingGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
 */
export class RosScalingGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ESS::ScalingGroups";

    /**
     * @Attribute ScalingGroupIds: The list of scaling group IDs.
     */
    public readonly attrScalingGroupIds: ros.IResolvable;

    /**
     * @Attribute ScalingGroups: The list of scaling groups.
     */
    public readonly attrScalingGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupType: The type of instances that are managed by the scaling group. Valid values:
     * ECS: the Elastic Compute Service (ECS) instances
     * ECI: the elastic container instances
     * Default value: ECS.
     */
    public groupType: string | ros.IResolvable | undefined;

    /**
     * @Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    public scalingGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
     */
    public scalingGroupNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScalingGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScalingGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrScalingGroupIds = this.getAtt('ScalingGroupIds');
        this.attrScalingGroups = this.getAtt('ScalingGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupType = props.groupType;
        this.scalingGroupIds = props.scalingGroupIds;
        this.scalingGroupNames = props.scalingGroupNames;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupType: this.groupType,
            scalingGroupIds: this.scalingGroupIds,
            scalingGroupNames: this.scalingGroupNames,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScalingGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
