// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosWorkspaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mobi-workspaces
 */
export interface RosWorkspacesProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWorkspacesProps`
 *
 * @param properties - the TypeScript properties of a `RosWorkspacesProps`
 *
 * @returns the result of the validation.
 */
function RosWorkspacesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosWorkspacesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::MOBI::Workspaces` resource
 *
 * @param properties - the TypeScript properties of a `RosWorkspacesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::MOBI::Workspaces` resource.
 */
// @ts-ignore TS6133
function rosWorkspacesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWorkspacesPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MOBI::Workspaces`, which is used to query workspaces.
 * @Note This class does not contain additional functions, so it is recommended to use the `Workspaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mobi-workspaces
 */
export class RosWorkspaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MOBI::Workspaces";

    /**
     * @Attribute WorkspaceIds: The list of workspace IDs.
     */
    public readonly attrWorkspaceIds: ros.IResolvable;

    /**
     * @Attribute Workspaces: The list of workspaces.
     */
    public readonly attrWorkspaces: ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosWorkspacesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWorkspaces.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrWorkspaceIds = this.getAtt('WorkspaceIds');
        this.attrWorkspaces = this.getAtt('Workspaces');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWorkspacesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
