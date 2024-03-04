// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosStackGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
 */
export interface RosStackGroupsProps {

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosStackGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosStackGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosStackGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    return errors.wrap('supplied properties not correct for "RosStackGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ROS::StackGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosStackGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ROS::StackGroups` resource.
 */
// @ts-ignore TS6133
function rosStackGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStackGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROS::StackGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `StackGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
 */
export class RosStackGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROS::StackGroups";

    /**
     * @Attribute StackGroupNames: The list of stack group names.
     */
    public readonly attrStackGroupNames: ros.IResolvable;

    /**
     * @Attribute StackGroups: The list of stack groups.
     */
    public readonly attrStackGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStackGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosStackGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrStackGroupNames = this.getAtt('StackGroupNames');
        this.attrStackGroups = this.getAtt('StackGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStackGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosStackInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
 */
export interface RosStackInstanceProps {

    /**
     * @Property stackGroupName: Resource stack group name. Names are unique within a single region.
     * The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
     */
    readonly stackGroupName: string | ros.IResolvable;

    /**
     * @Property stackInstanceAccountId: The target account ID to which the resource stack belongs. 
     * In the self-service management permission mode, the account is an Alibaba Cloud account.
     * In service management permission mode, this account is a member account of the resource directory.
     */
    readonly stackInstanceAccountId: string | ros.IResolvable;

    /**
     * @Property stackInstanceRegionId: The region to which the resource stack belongs.
     */
    readonly stackInstanceRegionId: string | ros.IResolvable;

    /**
     * @Property outputOption: Whether to return the Outputs parameter resource stack output list.
     */
    readonly outputOption?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosStackInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosStackInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosStackInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('stackInstanceAccountId', ros.requiredValidator)(properties.stackInstanceAccountId));
    errors.collect(ros.propertyValidator('stackInstanceAccountId', ros.validateString)(properties.stackInstanceAccountId));
    errors.collect(ros.propertyValidator('stackGroupName', ros.requiredValidator)(properties.stackGroupName));
    errors.collect(ros.propertyValidator('stackGroupName', ros.validateString)(properties.stackGroupName));
    errors.collect(ros.propertyValidator('stackInstanceRegionId', ros.requiredValidator)(properties.stackInstanceRegionId));
    errors.collect(ros.propertyValidator('stackInstanceRegionId', ros.validateString)(properties.stackInstanceRegionId));
    errors.collect(ros.propertyValidator('outputOption', ros.validateString)(properties.outputOption));
    return errors.wrap('supplied properties not correct for "RosStackInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ROS::StackInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosStackInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ROS::StackInstance` resource.
 */
// @ts-ignore TS6133
function rosStackInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStackInstancePropsValidator(properties).assertSuccess();
    }
    return {
      StackGroupName: ros.stringToRosTemplate(properties.stackGroupName),
      StackInstanceAccountId: ros.stringToRosTemplate(properties.stackInstanceAccountId),
      StackInstanceRegionId: ros.stringToRosTemplate(properties.stackInstanceRegionId),
      OutputOption: ros.stringToRosTemplate(properties.outputOption),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROS::StackInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `StackInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackinstance
 */
export class RosStackInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROS::StackInstance";

    /**
     * @Attribute AccountId: The account id of the stack.
     */
    public readonly attrAccountId: ros.IResolvable;

    /**
     * @Attribute DriftDetectionTime: The time when the resource stack group last successfully completed deviation detection.
     */
    public readonly attrDriftDetectionTime: ros.IResolvable;

    /**
     * @Attribute Outputs: The outputs of the stack instance
     */
    public readonly attrOutputs: ros.IResolvable;

    /**
     * @Attribute ParameterOverrides: Override parameter list.
     */
    public readonly attrParameterOverrides: ros.IResolvable;

    /**
     * @Attribute RdFolderId: The resource folder ID of the resource directory.
     */
    public readonly attrRdFolderId: ros.IResolvable;

    /**
     * @Attribute RegionId: The region id of the stack.
     */
    public readonly attrRegionId: ros.IResolvable;

    /**
     * @Attribute StackDriftStatus: The status of the last successful deviation detection of the resource stack group.
     */
    public readonly attrStackDriftStatus: ros.IResolvable;

    /**
     * @Attribute StackGroupId: The resource stack group ID.
     */
    public readonly attrStackGroupId: ros.IResolvable;

    /**
     * @Attribute StackGroupName: The resource stack group name
     */
    public readonly attrStackGroupName: ros.IResolvable;

    /**
     * @Attribute StackId: The stack id of stack instance.
     */
    public readonly attrStackId: ros.IResolvable;

    /**
     * @Attribute Status: Resource stack status.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * @Attribute StatusReason: Status reason description.
     */
    public readonly attrStatusReason: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property stackGroupName: Resource stack group name. Names are unique within a single region.
     * The length must not exceed 255 characters, must start with a number or an English letter, and can contain numbers, English letters, dashes (-) and underscores (_)
     */
    public stackGroupName: string | ros.IResolvable;

    /**
     * @Property stackInstanceAccountId: The target account ID to which the resource stack belongs. 
     * In the self-service management permission mode, the account is an Alibaba Cloud account.
     * In service management permission mode, this account is a member account of the resource directory.
     */
    public stackInstanceAccountId: string | ros.IResolvable;

    /**
     * @Property stackInstanceRegionId: The region to which the resource stack belongs.
     */
    public stackInstanceRegionId: string | ros.IResolvable;

    /**
     * @Property outputOption: Whether to return the Outputs parameter resource stack output list.
     */
    public outputOption: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStackInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosStackInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountId = this.getAtt('AccountId');
        this.attrDriftDetectionTime = this.getAtt('DriftDetectionTime');
        this.attrOutputs = this.getAtt('Outputs');
        this.attrParameterOverrides = this.getAtt('ParameterOverrides');
        this.attrRdFolderId = this.getAtt('RdFolderId');
        this.attrRegionId = this.getAtt('RegionId');
        this.attrStackDriftStatus = this.getAtt('StackDriftStatus');
        this.attrStackGroupId = this.getAtt('StackGroupId');
        this.attrStackGroupName = this.getAtt('StackGroupName');
        this.attrStackId = this.getAtt('StackId');
        this.attrStatus = this.getAtt('Status');
        this.attrStatusReason = this.getAtt('StatusReason');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.stackGroupName = props.stackGroupName;
        this.stackInstanceAccountId = props.stackInstanceAccountId;
        this.stackInstanceRegionId = props.stackInstanceRegionId;
        this.outputOption = props.outputOption;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            stackGroupName: this.stackGroupName,
            stackInstanceAccountId: this.stackInstanceAccountId,
            stackInstanceRegionId: this.stackInstanceRegionId,
            outputOption: this.outputOption,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStackInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
