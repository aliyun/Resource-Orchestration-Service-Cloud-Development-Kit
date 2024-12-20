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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MOBI::Workspaces`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Workspaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mobi-workspaces
 */
export declare class RosWorkspaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MOBI::Workspaces";
    /**
     * @Attribute WorkspaceIds: The list of workspace IDs.
     */
    readonly attrWorkspaceIds: ros.IResolvable;
    /**
     * @Attribute Workspaces: The list of workspaces.
     */
    readonly attrWorkspaces: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWorkspacesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
