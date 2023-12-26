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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROS::StackGroups`, which is used to query the details of stack groups.
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
