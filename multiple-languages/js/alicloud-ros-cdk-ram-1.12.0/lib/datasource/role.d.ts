import * as ros from '@alicloud/ros-cdk-core';
import { RosRole } from './ram.generated';
export { RosRole as RoleProperty };
/**
 * Properties for defining a `Role`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-role
 */
export interface RoleProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property roleName: RAM role name. If not specified, the current ram role will be used.
     */
    readonly roleName?: string | ros.IResolvable;
}
/**
 * Represents a `Role`.
 */
export interface IRole extends ros.IResource {
    readonly props: RoleProps;
    /**
     * Attribute Arn: The ARN of the RAM role.
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute CreateDate: The time when the RAM role was created.
     */
    readonly attrCreateDate: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the RAM role.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute MaxSessionDuration: The maximum session duration of the RAM role.
     */
    readonly attrMaxSessionDuration: ros.IResolvable | string;
    /**
     * Attribute RoleId: The ID of the RAM role.
     */
    readonly attrRoleId: ros.IResolvable | string;
    /**
     * Attribute RoleName: The name of the RAM role.
     */
    readonly attrRoleName: ros.IResolvable | string;
    /**
     * Attribute UpdateDate: The time when the RAM role was last updated.
     */
    readonly attrUpdateDate: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RAM::Role`, which is used to query the information about a role.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRole`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-role
 */
export declare class Role extends ros.Resource implements IRole {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RoleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The ARN of the RAM role.
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute CreateDate: The time when the RAM role was created.
     */
    readonly attrCreateDate: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the RAM role.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute MaxSessionDuration: The maximum session duration of the RAM role.
     */
    readonly attrMaxSessionDuration: ros.IResolvable | string;
    /**
     * Attribute RoleId: The ID of the RAM role.
     */
    readonly attrRoleId: ros.IResolvable | string;
    /**
     * Attribute RoleName: The name of the RAM role.
     */
    readonly attrRoleName: ros.IResolvable | string;
    /**
     * Attribute UpdateDate: The time when the RAM role was last updated.
     */
    readonly attrUpdateDate: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: RoleProps, enableResourcePropertyConstraint?: boolean);
}
