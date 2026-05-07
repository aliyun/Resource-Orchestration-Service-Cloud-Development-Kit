import * as ros from '@alicloud/ros-cdk-core';
import { RosRole } from './resourcemanager.generated';
export { RosRole as RoleProperty };
/**
 * Properties for defining a `Role`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
 */
export interface RoleProps {
    /**
     * Property assumeRolePolicyDocument: The content of the permissions strategy that plays a role.
     */
    readonly assumeRolePolicyDocument: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property roleName: Role Name.
     */
    readonly roleName: string | ros.IResolvable;
    /**
     * Property description: The description of the Resource Manager role.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property maxSessionDuration: Role maximum session time. Valid values: [3600-43200]. Default to 3600.
     */
    readonly maxSessionDuration?: number | ros.IResolvable;
}
/**
 * Represents a `Role`.
 */
export interface IRole extends ros.IResource {
    readonly props: RoleProps;
    /**
     * Attribute Arn: The resource descriptor of the role.
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.
     */
    readonly attrAssumeRolePolicyDocument: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Role creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the Resource Manager role.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute MaxSessionDuration: Role maximum session time. Valid values: [3600-43200].
     */
    readonly attrMaxSessionDuration: ros.IResolvable | string;
    /**
     * Attribute RoleId: This ID of Resource Manager role.
     */
    readonly attrRoleId: ros.IResolvable | string;
    /**
     * Attribute RoleName: Role Name.
     */
    readonly attrRoleName: ros.IResolvable | string;
    /**
     * Attribute UpdateDate: Role update time.
     */
    readonly attrUpdateDate: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::Role`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRole`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
 */
export declare class Role extends ros.Resource implements IRole {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RoleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The resource descriptor of the role.
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.
     */
    readonly attrAssumeRolePolicyDocument: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Role creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the Resource Manager role.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute MaxSessionDuration: Role maximum session time. Valid values: [3600-43200].
     */
    readonly attrMaxSessionDuration: ros.IResolvable | string;
    /**
     * Attribute RoleId: This ID of Resource Manager role.
     */
    readonly attrRoleId: ros.IResolvable | string;
    /**
     * Attribute RoleName: Role Name.
     */
    readonly attrRoleName: ros.IResolvable | string;
    /**
     * Attribute UpdateDate: Role update time.
     */
    readonly attrUpdateDate: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RoleProps, enableResourcePropertyConstraint?: boolean);
}
