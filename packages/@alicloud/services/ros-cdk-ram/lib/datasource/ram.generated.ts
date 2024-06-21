// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccountAlias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-accountalias
 */
export interface RosAccountAliasProps {
}

/**
 * Determine whether the given properties match those of a `RosAccountAliasProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountAliasProps`
 *
 * @returns the result of the validation.
 */
function RosAccountAliasPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    return errors.wrap('supplied properties not correct for "RosAccountAliasProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RAM::AccountAlias` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountAliasProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RAM::AccountAlias` resource.
 */
// @ts-ignore TS6133
function rosAccountAliasPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountAliasPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::AccountAlias`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccountAlias` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-accountalias
 */
export class RosAccountAlias extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::AccountAlias";

    /**
     * @Attribute AccountAlias: Account alias.
     */
    public readonly attrAccountAlias: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountAliasProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccountAlias.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountAlias = this.getAtt('AccountAlias');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountAliasPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
     * @Property userName: The specific user which groups contains.
     */
    readonly userName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    return errors.wrap('supplied properties not correct for "RosGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RAM::Groups` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RAM::Groups` resource.
 */
// @ts-ignore TS6133
function rosGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      GroupName: ros.stringToRosTemplate(properties.groupName),
      UserName: ros.stringToRosTemplate(properties.userName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Groups`, which is used to query Resource Access Management (RAM) user groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `Groups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-groups
 */
export class RosGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Groups";

    /**
     * @Attribute GroupNames: The list of group names.
     */
    public readonly attrGroupNames: ros.IResolvable;

    /**
     * @Attribute Groups: The list of groups.
     */
    public readonly attrGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: Filter the results by a specific group name. Supports using * and ? to fuzzy match.
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property userName: The specific user which groups contains.
     */
    public userName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupNames = this.getAtt('GroupNames');
        this.attrGroups = this.getAtt('Groups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.userName = props.userName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            userName: this.userName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosPoliciesProps`
 *
 * @param properties - the TypeScript properties of a `RosPoliciesProps`
 *
 * @returns the result of the validation.
 */
function RosPoliciesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    if(properties.policyType && (typeof properties.policyType) !== 'object') {
        errors.collect(ros.propertyValidator('policyType', ros.validateAllowedValues)({
          data: properties.policyType,
          allowedValues: ["System","Custom"],
        }));
    }
    errors.collect(ros.propertyValidator('policyType', ros.validateString)(properties.policyType));
    errors.collect(ros.propertyValidator('roleName', ros.validateString)(properties.roleName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    return errors.wrap('supplied properties not correct for "RosPoliciesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RAM::Policies` resource
 *
 * @param properties - the TypeScript properties of a `RosPoliciesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RAM::Policies` resource.
 */
// @ts-ignore TS6133
function rosPoliciesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPoliciesPropsValidator(properties).assertSuccess();
    }
    return {
      GroupName: ros.stringToRosTemplate(properties.groupName),
      PolicyName: ros.stringToRosTemplate(properties.policyName),
      PolicyType: ros.stringToRosTemplate(properties.policyType),
      RoleName: ros.stringToRosTemplate(properties.roleName),
      UserName: ros.stringToRosTemplate(properties.userName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Policies`, which is used to query policies.
 * @Note This class does not contain additional functions, so it is recommended to use the `Policies` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-policies
 */
export class RosPolicies extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Policies";

    /**
     * @Attribute Policies: The list of policies.
     */
    public readonly attrPolicies: ros.IResolvable;

    /**
     * @Attribute PolicyNames: The list of policy names.
     */
    public readonly attrPolicyNames: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property policyName: Filter the results by a specific policy name. Supports using * and ?  to fuzzy match.
     */
    public policyName: string | ros.IResolvable | undefined;

    /**
     * @Property policyType: Filter the results by a specific policy type.
     */
    public policyType: string | ros.IResolvable | undefined;

    /**
     * @Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    public roleName: string | ros.IResolvable | undefined;

    /**
     * @Property userName: The specific user to which policies attached. Only one of UserName, GroupName, and RoleName can be specified at most.
     */
    public userName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPoliciesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPolicies.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPolicies = this.getAtt('Policies');
        this.attrPolicyNames = this.getAtt('PolicyNames');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.policyName = props.policyName;
        this.policyType = props.policyType;
        this.roleName = props.roleName;
        this.userName = props.userName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            policyName: this.policyName,
            policyType: this.policyType,
            roleName: this.roleName,
            userName: this.userName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPoliciesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRole`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-role
 */
export interface RosRoleProps {

    /**
     * @Property roleName: RAM role name. If not specified, the current ram role will be used.
     */
    readonly roleName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRoleProps`
 *
 * @param properties - the TypeScript properties of a `RosRoleProps`
 *
 * @returns the result of the validation.
 */
function RosRolePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('roleName', ros.validateString)(properties.roleName));
    return errors.wrap('supplied properties not correct for "RosRoleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RAM::Role` resource
 *
 * @param properties - the TypeScript properties of a `RosRoleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RAM::Role` resource.
 */
// @ts-ignore TS6133
function rosRolePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRolePropsValidator(properties).assertSuccess();
    }
    return {
      RoleName: ros.stringToRosTemplate(properties.roleName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Role`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Role` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-role
 */
export class RosRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Role";

    /**
     * @Attribute Arn: The ARN of the RAM role.
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute CreateDate: The time when the RAM role was created.
     */
    public readonly attrCreateDate: ros.IResolvable;

    /**
     * @Attribute Description: The description of the RAM role.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute MaxSessionDuration: The maximum session duration of the RAM role.
     */
    public readonly attrMaxSessionDuration: ros.IResolvable;

    /**
     * @Attribute RoleId: The ID of the RAM role.
     */
    public readonly attrRoleId: ros.IResolvable;

    /**
     * @Attribute RoleName: The name of the RAM role.
     */
    public readonly attrRoleName: ros.IResolvable;

    /**
     * @Attribute UpdateDate: The time when the RAM role was last updated.
     */
    public readonly attrUpdateDate: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property roleName: RAM role name. If not specified, the current ram role will be used.
     */
    public roleName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRoleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRole.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrCreateDate = this.getAtt('CreateDate');
        this.attrDescription = this.getAtt('Description');
        this.attrMaxSessionDuration = this.getAtt('MaxSessionDuration');
        this.attrRoleId = this.getAtt('RoleId');
        this.attrRoleName = this.getAtt('RoleName');
        this.attrUpdateDate = this.getAtt('UpdateDate');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.roleName = props.roleName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            roleName: this.roleName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRolePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosRolesProps`
 *
 * @param properties - the TypeScript properties of a `RosRolesProps`
 *
 * @returns the result of the validation.
 */
function RosRolesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('roleName', ros.validateString)(properties.roleName));
    return errors.wrap('supplied properties not correct for "RosRolesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RAM::Roles` resource
 *
 * @param properties - the TypeScript properties of a `RosRolesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RAM::Roles` resource.
 */
// @ts-ignore TS6133
function rosRolesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRolesPropsValidator(properties).assertSuccess();
    }
    return {
      RoleName: ros.stringToRosTemplate(properties.roleName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Roles`, which is used to query the details of RAM roles.
 * @Note This class does not contain additional functions, so it is recommended to use the `Roles` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-roles
 */
export class RosRoles extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Roles";

    /**
     * @Attribute RoleNames: The list of role names.
     */
    public readonly attrRoleNames: ros.IResolvable;

    /**
     * @Attribute Roles: The list of roles.
     */
    public readonly attrRoles: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property roleName: Filter the results by a specific role name. Supports using * and ?  to fuzzy match.
     */
    public roleName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRolesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRoles.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRoleNames = this.getAtt('RoleNames');
        this.attrRoles = this.getAtt('Roles');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.roleName = props.roleName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            roleName: this.roleName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRolesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
 */
export interface RosUserProps {

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
 * Determine whether the given properties match those of a `RosUserProps`
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the result of the validation.
 */
function RosUserPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('userId', ros.validateString)(properties.userId));
    return errors.wrap('supplied properties not correct for "RosUserProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RAM::User` resource
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RAM::User` resource.
 */
// @ts-ignore TS6133
function rosUserPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserPropsValidator(properties).assertSuccess();
    }
    return {
      UserId: ros.stringToRosTemplate(properties.userId),
      UserName: ros.stringToRosTemplate(properties.userName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::User`.
 * @Note This class does not contain additional functions, so it is recommended to use the `User` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
 */
export class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::User";

    /**
     * @Attribute Comments: The comments of the RAM user.
     */
    public readonly attrComments: ros.IResolvable;

    /**
     * @Attribute DisplayName: The display name of the RAM user.
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * @Attribute Email: The email address of the RAM user.
     */
    public readonly attrEmail: ros.IResolvable;

    /**
     * @Attribute MobilePhone: The mobile phone number of the RAM user.
     */
    public readonly attrMobilePhone: ros.IResolvable;

    /**
     * @Attribute UserId: The ID of the RAM user.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * @Attribute UserName: The name of the RAM user.
     */
    public readonly attrUserName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property userId: RAM user ID. At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
     */
    public userId: string | ros.IResolvable | undefined;

    /**
     * @Property userName: RAM user name. At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
     */
    public userName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUser.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrComments = this.getAtt('Comments');
        this.attrDisplayName = this.getAtt('DisplayName');
        this.attrEmail = this.getAtt('Email');
        this.attrMobilePhone = this.getAtt('MobilePhone');
        this.attrUserId = this.getAtt('UserId');
        this.attrUserName = this.getAtt('UserName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.userId = props.userId;
        this.userName = props.userName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            userId: this.userId,
            userName: this.userName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosUsersProps`
 *
 * @param properties - the TypeScript properties of a `RosUsersProps`
 *
 * @returns the result of the validation.
 */
function RosUsersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    return errors.wrap('supplied properties not correct for "RosUsersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RAM::Users` resource
 *
 * @param properties - the TypeScript properties of a `RosUsersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RAM::Users` resource.
 */
// @ts-ignore TS6133
function rosUsersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUsersPropsValidator(properties).assertSuccess();
    }
    return {
      GroupName: ros.stringToRosTemplate(properties.groupName),
      UserName: ros.stringToRosTemplate(properties.userName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RAM::Users`, which is used to query Resource Access Management (RAM) users.
 * @Note This class does not contain additional functions, so it is recommended to use the `Users` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-users
 */
export class RosUsers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RAM::Users";

    /**
     * @Attribute UserNames: The list of user names.
     */
    public readonly attrUserNames: ros.IResolvable;

    /**
     * @Attribute Users: The list of users.
     */
    public readonly attrUsers: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: The name of group to which users belongs.
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property userName: Filter the results by a specific user name. Supports using * and ? to fuzzy match.
     */
    public userName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUsersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUsers.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrUserNames = this.getAtt('UserNames');
        this.attrUsers = this.getAtt('Users');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.userName = props.userName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            userName: this.userName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUsersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
