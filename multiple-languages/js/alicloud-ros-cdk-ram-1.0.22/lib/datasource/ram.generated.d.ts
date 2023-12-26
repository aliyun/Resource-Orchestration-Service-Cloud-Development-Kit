import * as ros from '@alicloud/ros-cdk-core';
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
     * @Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    readonly roleName?: string | ros.IResolvable;
    /**
     * @Property userName: The specific user to which policies attached. Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Policies`, which is used to query policies.
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
 * Properties for defining a `RosRoles`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-roles
 */
export interface RosRolesProps {
    /**
     * @Property roleName: Filter the results by a specific role name. Supports using * and ?  to fuzzy match.
     */
    readonly roleName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Roles`, which is used to query the details of RAM roles.
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
 * Properties for defining a `RosUsers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-users
 */
export interface RosUsersProps {
    /**
     * @Property groupName: The name of group to which users belongs.
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * @Property userName: Filter the results by a specific user name. Supports using * and ? to fuzzy match.
     */
    readonly userName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Users`, which is used to query Resource Access Management (RAM) users.
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
