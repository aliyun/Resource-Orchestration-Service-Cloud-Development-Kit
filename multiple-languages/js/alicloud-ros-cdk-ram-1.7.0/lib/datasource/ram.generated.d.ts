import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccountAlias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-accountalias
 */
export interface RosAccountAliasProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::AccountAlias`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccountAlias` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-accountalias
 */
export declare class RosAccountAlias extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::AccountAlias";
    /**
     * @Attribute AccountAlias: Account alias.
     */
    readonly attrAccountAlias: ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosAccountAliasProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-groups
 */
export interface RosGroupsProps {
    /**
     * @Property groupName: Filter the results by a specific group name. Supports using * and ? to fuzzy match.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property userName: The specific user which groups contains.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Groups`, which is used to query Resource Access Management (RAM) user groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `Groups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-groups
 */
export declare class RosGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Groups";
    /**
     * @Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable;
    /**
     * @Attribute Groups: The list of groups.
     */
    readonly attrGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: Filter the results by a specific group name. Supports using * and ? to fuzzy match.
     */
    groupName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property userName: The specific user which groups contains.
     */
    userName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosPolicies`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-policies
 */
export interface RosPoliciesProps {
    /**
     * @Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property policyName: Filter the results by a specific policy name. Supports using * and ?  to fuzzy match.
     */
    readonly policyName?: string | ros.IResolvable;
    /**
     * @Property policyType: Filter the results by a specific policy type.
     */
    readonly policyType?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    readonly roleName?: string | ros.IResolvable;
    /**
     * @Property userName: The specific user to which policies attached. Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Policies`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policies` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-policies
 */
export declare class RosPolicies extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Policies";
    /**
     * @Attribute Policies: The list of policies.
     */
    readonly attrPolicies: ros.IResolvable;
    /**
     * @Attribute PolicyNames: The list of policy names.
     */
    readonly attrPolicyNames: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    groupName: string | ros.IResolvable | undefined;
    /**
     * @Property policyName: Filter the results by a specific policy name. Supports using * and ?  to fuzzy match.
     */
    policyName: string | ros.IResolvable | undefined;
    /**
     * @Property policyType: Filter the results by a specific policy type.
     */
    policyType: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    roleName: string | ros.IResolvable | undefined;
    /**
     * @Property userName: The specific user to which policies attached. Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    userName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPoliciesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosRole`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-role
 */
export interface RosRoleProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property roleName: RAM role name. If not specified, the current ram role will be used.
     */
    readonly roleName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Role`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Role` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-role
 */
export declare class RosRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Role";
    /**
     * @Attribute Arn: The ARN of the RAM role.
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute CreateDate: The time when the RAM role was created.
     */
    readonly attrCreateDate: ros.IResolvable;
    /**
     * @Attribute Description: The description of the RAM role.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute MaxSessionDuration: The maximum session duration of the RAM role.
     */
    readonly attrMaxSessionDuration: ros.IResolvable;
    /**
     * @Attribute RoleId: The ID of the RAM role.
     */
    readonly attrRoleId: ros.IResolvable;
    /**
     * @Attribute RoleName: The name of the RAM role.
     */
    readonly attrRoleName: ros.IResolvable;
    /**
     * @Attribute UpdateDate: The time when the RAM role was last updated.
     */
    readonly attrUpdateDate: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property roleName: RAM role name. If not specified, the current ram role will be used.
     */
    roleName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRoleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosRoles`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-roles
 */
export interface RosRolesProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property roleName: Filter the results by a specific role name. Supports using * and ?  to fuzzy match.
     */
    readonly roleName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Roles`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Roles` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-roles
 */
export declare class RosRoles extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Roles";
    /**
     * @Attribute RoleNames: The list of role names.
     */
    readonly attrRoleNames: ros.IResolvable;
    /**
     * @Attribute Roles: The list of roles.
     */
    readonly attrRoles: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property roleName: Filter the results by a specific role name. Supports using * and ?  to fuzzy match.
     */
    roleName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRolesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
 */
export interface RosUserProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property userId: RAM user ID. At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
     */
    readonly userId?: string | ros.IResolvable;
    /**
     * @Property userName: RAM user name. At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::User`.
 * @Note This class does not contain additional functions, so it is recommended to use the `User` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
 */
export declare class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::User";
    /**
     * @Attribute Comments: The comments of the RAM user.
     */
    readonly attrComments: ros.IResolvable;
    /**
     * @Attribute DisplayName: The display name of the RAM user.
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * @Attribute Email: The email address of the RAM user.
     */
    readonly attrEmail: ros.IResolvable;
    /**
     * @Attribute MobilePhone: The mobile phone number of the RAM user.
     */
    readonly attrMobilePhone: ros.IResolvable;
    /**
     * @Attribute UserId: The ID of the RAM user.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * @Attribute UserName: The name of the RAM user.
     */
    readonly attrUserName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property userId: RAM user ID. At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
     */
    userId: string | ros.IResolvable | undefined;
    /**
     * @Property userName: RAM user name. At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
     */
    userName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosUsers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-users
 */
export interface RosUsersProps {
    /**
     * @Property groupName: The name of group to which users belongs.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property userName: Filter the results by a specific user name. Supports using * and ? to fuzzy match.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Users`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Users` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-users
 */
export declare class RosUsers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Users";
    /**
     * @Attribute UserNames: The list of user names.
     */
    readonly attrUserNames: ros.IResolvable;
    /**
     * @Attribute Users: The list of users.
     */
    readonly attrUsers: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: The name of group to which users belongs.
     */
    groupName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property userName: Filter the results by a specific user name. Supports using * and ? to fuzzy match.
     */
    userName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUsersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
