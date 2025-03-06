import * as ros from '@alicloud/ros-cdk-core';
import { RosGroups } from './ram.generated';
export { RosGroups as GroupsProperty };
/**
 * Properties for defining a `Groups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-groups
 */
export interface GroupsProps {
    /**
     * Property groupName: Filter the results by a specific group name. Supports using * and ? to fuzzy match.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property userName: The specific user which groups contains.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * Represents a `Groups`.
 */
export interface IGroups extends ros.IResource {
    readonly props: GroupsProps;
    /**
     * Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable | string;
    /**
     * Attribute Groups: The list of groups.
     */
    readonly attrGroups: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RAM::Groups`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-groups
 */
export declare class Groups extends ros.Resource implements IGroups {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GroupsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable | string;
    /**
     * Attribute Groups: The list of groups.
     */
    readonly attrGroups: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: GroupsProps, enableResourcePropertyConstraint?: boolean);
}
