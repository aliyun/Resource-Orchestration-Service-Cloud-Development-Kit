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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ROS::StackGroups`, which is used to query the details of stack groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `StackGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ros-stackgroups
 */
export declare class RosStackGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ROS::StackGroups";
    /**
     * @Attribute StackGroupNames: The list of stack group names.
     */
    readonly attrStackGroupNames: ros.IResolvable;
    /**
     * @Attribute StackGroups: The list of stack groups.
     */
    readonly attrStackGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStackGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
