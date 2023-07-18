import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::RAM::Groups`
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
 * A ROS template type:  `DATASOURCE::RAM::Groups`
 */
export declare class RosGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Groups";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::RAM::Groups`.
     *
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
 * Properties for defining a `DATASOURCE::RAM::Policies`
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
 * A ROS template type:  `DATASOURCE::RAM::Policies`
 */
export declare class RosPolicies extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Policies";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::RAM::Policies`.
     *
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
 * Properties for defining a `DATASOURCE::RAM::Roles`
 */
export interface RosRolesProps {
    /**
     * @Property roleName: Filter the results by a specific role name. Supports using * and ?  to fuzzy match.
     */
    readonly roleName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::RAM::Roles`
 */
export declare class RosRoles extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Roles";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::RAM::Roles`.
     *
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
 * Properties for defining a `DATASOURCE::RAM::Users`
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
 * A ROS template type:  `DATASOURCE::RAM::Users`
 */
export declare class RosUsers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Users";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::RAM::Users`.
     *
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
