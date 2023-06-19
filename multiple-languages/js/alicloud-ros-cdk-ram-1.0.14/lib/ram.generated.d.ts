import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::RAM::AccessKey`
 */
export interface RosAccessKeyProps {
    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::RAM::AccessKey`
 */
export declare class RosAccessKey extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AccessKey";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AccessKeyId: Id of access key.
     */
    readonly attrAccessKeyId: ros.IResolvable;
    /**
     * @Attribute AccessKeySecret: Secret of access key.
     */
    readonly attrAccessKeySecret: ros.IResolvable;
    /**
     * @Attribute Status: Status of access key.
     */
    readonly attrStatus: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    userName: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::RAM::AccessKey`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessKeyProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::RAM::AttachPolicyToRole`
 */
export interface RosAttachPolicyToRoleProps {
    /**
     * @Property policyName: Authorization policy name.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * @Property roleName: Role name.Example: dev.
     */
    readonly roleName: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::RAM::AttachPolicyToRole`
 */
export declare class RosAttachPolicyToRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AttachPolicyToRole";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property policyName: Authorization policy name.
     */
    policyName: string | ros.IResolvable;
    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    policyType: string | ros.IResolvable;
    /**
     * @Property roleName: Role name.Example: dev.
     */
    roleName: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::RAM::AttachPolicyToRole`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAttachPolicyToRoleProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::RAM::AttachPolicyToUser`
 */
export interface RosAttachPolicyToUserProps {
    /**
     * @Property policyName: Authorization policy name.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * @Property userName: User name.Example: dev.
     */
    readonly userName: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::RAM::AttachPolicyToUser`
 */
export declare class RosAttachPolicyToUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AttachPolicyToUser";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property policyName: Authorization policy name.
     */
    policyName: string | ros.IResolvable;
    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    policyType: string | ros.IResolvable;
    /**
     * @Property userName: User name.Example: dev.
     */
    userName: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::RAM::AttachPolicyToUser`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAttachPolicyToUserProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::RAM::Group`
 */
export interface RosGroupProps {
    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    readonly comments?: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force detach the policies attached to the group. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property ignoreExisting: Whether to ignore existing group
     * False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored.
     * If the group is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosGroup.PoliciesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property policyAttachments: System and custom policy names to attach.
     */
    readonly policyAttachments?: RosGroup.PolicyAttachmentsProperty | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::RAM::Group`
 */
export declare class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Group";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute GroupName: Id of ram group.
     */
    readonly attrGroupName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    groupName: string | ros.IResolvable;
    /**
     * @Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    comments: string | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether force detach the policies attached to the group. Default value is false.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property ignoreExisting: Whether to ignore existing group
     * False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored.
     * If the group is not created by ROS, it will be ignored during update and delete stage.
     */
    ignoreExisting: boolean | ros.IResolvable | undefined;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    policies: Array<RosGroup.PoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property policyAttachments: System and custom policy names to attach.
     */
    policyAttachments: RosGroup.PolicyAttachmentsProperty | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::RAM::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosGroup {
    /**
     * @stability external
     */
    interface PoliciesProperty {
        /**
         * @Property ignoreExisting: Whether to ignore existing policy
     * False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored.
     * If the policy is not created by ROS, it will be ignored during update and delete stage.
         */
        readonly ignoreExisting?: boolean | ros.IResolvable;
        /**
         * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         */
        readonly policyName: string | ros.IResolvable;
        /**
         * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
         */
        readonly policyDocument: RosGroup.PolicyDocumentProperty | ros.IResolvable;
    }
}
export declare namespace RosGroup {
    /**
     * @stability external
     */
    interface PolicyAttachmentsProperty {
        /**
         * @Property custom: undefined
         */
        readonly custom?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property system: undefined
         */
        readonly system?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosGroup {
    /**
     * @stability external
     */
    interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version: string | ros.IResolvable;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement: Array<RosGroup.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosGroup {
    /**
     * @stability external
     */
    interface StatementProperty {
        /**
         * @Property condition: What conditions should be satisfied.
         */
        readonly condition?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property action: What actions you will allow.
         */
        readonly action?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: Which resources you allow the action on.
         */
        readonly resource?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::RAM::ManagedPolicy`
 */
export interface RosManagedPolicyProps {
    /**
     * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property groups: The names of groups to attach to this policy.
     */
    readonly groups?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property ignoreExisting: Whether to ignore existing policy
     * False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored.
     * If the policy is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;
    /**
     * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
     */
    readonly policyDocument?: RosManagedPolicy.PolicyDocumentProperty | ros.IResolvable;
    /**
     * @Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
     */
    readonly policyDocumentUnchecked?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property roles: The names of roles to attach to this policy.
     */
    readonly roles?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property users: The names of users to attach to this policy.
     */
    readonly users?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::RAM::ManagedPolicy`
 */
export declare class RosManagedPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::ManagedPolicy";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.
     */
    readonly attrPolicyName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
     */
    policyName: string | ros.IResolvable;
    /**
     * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property groups: The names of groups to attach to this policy.
     */
    groups: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property ignoreExisting: Whether to ignore existing policy
     * False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored.
     * If the policy is not created by ROS, it will be ignored during update and delete stage.
     */
    ignoreExisting: boolean | ros.IResolvable | undefined;
    /**
     * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
     */
    policyDocument: RosManagedPolicy.PolicyDocumentProperty | ros.IResolvable | undefined;
    /**
     * @Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
     */
    policyDocumentUnchecked: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property roles: The names of roles to attach to this policy.
     */
    roles: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property users: The names of users to attach to this policy.
     */
    users: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::RAM::ManagedPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedPolicyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosManagedPolicy {
    /**
     * @stability external
     */
    interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version: string | ros.IResolvable;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement: Array<RosManagedPolicy.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosManagedPolicy {
    /**
     * @stability external
     */
    interface StatementProperty {
        /**
         * @Property condition: What conditions should be satisfied.
         */
        readonly condition?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property action: What actions you will allow.
         */
        readonly action?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: Which resources you allow the action on.
         */
        readonly resource?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::RAM::RamAccountAlias`
 */
export interface RosRamAccountAliasProps {
    /**
     * @Property accountAlias: The alias of the Alibaba Cloud account.
     * The alias must be 1 to 50 characters in length, and can contain lowercase letters,
     * digits, hyphens (-), periods (.) and underscores (_).
     * Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
     * hyphen (-) and cannot have two consecutive hyphens (-).
     */
    readonly accountAlias: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::RAM::RamAccountAlias`
 */
export declare class RosRamAccountAlias extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::RamAccountAlias";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AccountAlias: The alias of the Alibaba Cloud account.
     */
    readonly attrAccountAlias: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountAlias: The alias of the Alibaba Cloud account.
     * The alias must be 1 to 50 characters in length, and can contain lowercase letters,
     * digits, hyphens (-), periods (.) and underscores (_).
     * Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
     * hyphen (-) and cannot have two consecutive hyphens (-).
     */
    accountAlias: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::RAM::RamAccountAlias`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRamAccountAliasProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::RAM::Role`
 */
export interface RosRoleProps {
    /**
     * @Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
     */
    readonly assumeRolePolicyDocument: RosRole.AssumeRolePolicyDocumentProperty | ros.IResolvable;
    /**
     * @Property roleName: Specifies the role name, containing up to 64 characters.
     */
    readonly roleName: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force detach the policies attached to the role. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property description: Remark information, up to 1024 characters or Chinese characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property ignoreExisting: Whether to ignore existing role
     * False: ROS will perform a uniqueness check.If a role with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a role with the same name, the role creation process will be ignored.
     * If the role is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;
    /**
     * @Property maxSessionDuration: The maximum session duration of the RAM role.
     * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
     * The default value is used if the parameter is not specified.
     */
    readonly maxSessionDuration?: number | ros.IResolvable;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosRole.PoliciesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property policyAttachments: System and custom policy names to attach.
     */
    readonly policyAttachments?: RosRole.PolicyAttachmentsProperty | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::RAM::Role`
 */
export declare class RosRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Role";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Arn: Name of alicloud resource.
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute RoleId: Id of ram role.
     */
    readonly attrRoleId: ros.IResolvable;
    /**
     * @Attribute RoleName: Name of ram role.
     */
    readonly attrRoleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
     */
    assumeRolePolicyDocument: RosRole.AssumeRolePolicyDocumentProperty | ros.IResolvable;
    /**
     * @Property roleName: Specifies the role name, containing up to 64 characters.
     */
    roleName: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force detach the policies attached to the role. Default value is false.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property description: Remark information, up to 1024 characters or Chinese characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property ignoreExisting: Whether to ignore existing role
     * False: ROS will perform a uniqueness check.If a role with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a role with the same name, the role creation process will be ignored.
     * If the role is not created by ROS, it will be ignored during update and delete stage.
     */
    ignoreExisting: boolean | ros.IResolvable | undefined;
    /**
     * @Property maxSessionDuration: The maximum session duration of the RAM role.
     * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
     * The default value is used if the parameter is not specified.
     */
    maxSessionDuration: number | ros.IResolvable | undefined;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    policies: Array<RosRole.PoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property policyAttachments: System and custom policy names to attach.
     */
    policyAttachments: RosRole.PolicyAttachmentsProperty | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::RAM::Role`.
     *
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
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface AssumeRolePolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version: string | ros.IResolvable;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement: Array<RosRole.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface ConditionProperty {
        /**
         * @Property numericNotEquals: undefined
         */
        readonly numericNotEquals?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property stringEquals: undefined
         */
        readonly stringEquals?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property stringLike: undefined
         */
        readonly stringLike?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property numericLessThanEquals: undefined
         */
        readonly numericLessThanEquals?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property stringNotEquals: undefined
         */
        readonly stringNotEquals?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property stringNotEqualsIgnoreCase: undefined
         */
        readonly stringNotEqualsIgnoreCase?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property numericLessThan: undefined
         */
        readonly numericLessThan?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property numericGreaterThan: undefined
         */
        readonly numericGreaterThan?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property dateLessThanEquals: undefined
         */
        readonly dateLessThanEquals?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property dateGreaterThanEquals: undefined
         */
        readonly dateGreaterThanEquals?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property numericEquals: undefined
         */
        readonly numericEquals?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property dateLessThan: undefined
         */
        readonly dateLessThan?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property dateNotEquals: undefined
         */
        readonly dateNotEquals?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property stringNotLike: undefined
         */
        readonly stringNotLike?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property notIpAddress: undefined
         */
        readonly notIpAddress?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property stringEqualsIgnoreCase: undefined
         */
        readonly stringEqualsIgnoreCase?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property bool: undefined
         */
        readonly bool?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property dateEquals: undefined
         */
        readonly dateEquals?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property dateGreaterThan: undefined
         */
        readonly dateGreaterThan?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property numericGreaterThanEquals: undefined
         */
        readonly numericGreaterThanEquals?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property ipAddress: undefined
         */
        readonly ipAddress?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface PoliciesProperty {
        /**
         * @Property ignoreExisting: Whether to ignore existing policy
     * False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored.
     * If the policy is not created by ROS, it will be ignored during update and delete stage.
         */
        readonly ignoreExisting?: boolean | ros.IResolvable;
        /**
         * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         */
        readonly policyName: string | ros.IResolvable;
        /**
         * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
         */
        readonly policyDocument: RosRole.PolicyDocumentProperty | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface PolicyAttachmentsProperty {
        /**
         * @Property custom: undefined
         */
        readonly custom?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property system: undefined
         */
        readonly system?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version: string | ros.IResolvable;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement: Array<RosRole.PolicyDocumentStatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface PolicyDocumentStatementProperty {
        /**
         * @Property condition: What conditions should be satisfied.
         */
        readonly condition?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property action: What actions you will allow.
         */
        readonly action?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: Which resources you allow the action on.
         */
        readonly resource?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface PrincipalProperty {
        /**
         * @Property service: undefined
         */
        readonly service?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property federated: undefined
         */
        readonly federated?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property ram: undefined
         */
        readonly ram?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosRole {
    /**
     * @stability external
     */
    interface StatementProperty {
        /**
         * @Property condition: undefined
         */
        readonly condition?: RosRole.ConditionProperty | ros.IResolvable;
        /**
         * @Property action: What action you will allow.
         */
        readonly action?: string | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string | ros.IResolvable;
        /**
         * @Property principal: undefined
         */
        readonly principal?: RosRole.PrincipalProperty | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::RAM::SAMLProvider`
 */
export interface RosSAMLProviderProps {
    /**
     * @Property samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
     */
    readonly samlProviderName: string | ros.IResolvable;
    /**
     * @Property description: The description can contain a maximum of 256 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
     */
    readonly samlMetadataDocument?: string | ros.IResolvable;
    /**
     * @Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     */
    readonly samlMetadataDocumentUrl?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::RAM::SAMLProvider`
 */
export declare class RosSAMLProvider extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::SAMLProvider";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Arn: ARN.
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute SAMLProviderName: IdP Name.
     */
    readonly attrSamlProviderName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
     */
    samlProviderName: string | ros.IResolvable;
    /**
     * @Property description: The description can contain a maximum of 256 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
     */
    samlMetadataDocument: string | ros.IResolvable | undefined;
    /**
     * @Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     */
    samlMetadataDocumentUrl: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::RAM::SAMLProvider`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSAMLProviderProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::RAM::SecurityPreference`
 */
export interface RosSecurityPreferenceProps {
    /**
     * @Property allowUserToChangePassword: Specifies whether RAM users can change their passwords. Valid values:
     * true: RAM users can change their passwords. This is the default value.
     * false: RAM users cannot change their passwords.
     */
    readonly allowUserToChangePassword?: boolean | ros.IResolvable;
    /**
     * @Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. Valid values:
     * true: RAM users can manage their AccessKey pairs.
     * false: RAM users cannot manage their AccessKey pairs. This is the default value.
     */
    readonly allowUserToManageAccessKeys?: boolean | ros.IResolvable;
    /**
     * @Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. Valid values:
     * true: RAM users can manage their MFA devices. This is the default value.
     * false: RAM users cannot manage their MFA devices.
     */
    readonly allowUserToManageMfaDevices?: boolean | ros.IResolvable;
    /**
     * @Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. Valid values:
     * true: RAM users can manage their public keys.
     * false: RAM users cannot manage their public keys. This is the default value.
     * Note This parameter is valid only for the Japan site.
     */
    readonly allowUserToManagePublicKeys?: boolean | ros.IResolvable;
    /**
     * @Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes
     * during logon. The security codes are valid for 7 days. Valid values:
     * true: RAM users can save MFA security codes during logon.
     * false: RAM users cannot save MFA security codes during logon. This is the default
     * value.
     */
    readonly enableSaveMfaTicket?: boolean | ros.IResolvable;
    /**
     * @Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is
     * allowed. This parameter applies to password-based logon and single sign-on (SSO).
     * However, this parameter does not apply to API calls that are authenticated based on
     * AccessKey pairs.
     * If a subnet mask is specified, RAM users can log on to the console only by using the
     * IP addresses in the subnet.
     * If you do not specify a subnet mask, RAM users can log on to the console by using
     * all IP addresses.
     * If you want to specify multiple subnet masks, separate the subnet masks with semicolons
     * (;). Example: 192.168.0.0/16;10.0.0.0/8.
     * A maximum of 25 subnet masks can be set. The total length of the subnet masks can
     * be 1 to 512 characters.
     */
    readonly loginNetworkMasks?: string | ros.IResolvable;
    /**
     * @Property loginSessionDuration: The validity period of the logon session of the RAM user.
     * Valid values: 6 to 24. Default value: 6. Unit: hours.
     */
    readonly loginSessionDuration?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::RAM::SecurityPreference`
 */
export declare class RosSecurityPreference extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::SecurityPreference";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.
     */
    readonly attrAllowUserToChangePassword: ros.IResolvable;
    /**
     * @Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
     */
    readonly attrAllowUserToManageAccessKeys: ros.IResolvable;
    /**
     * @Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.
     */
    readonly attrAllowUserToManageMfaDevices: ros.IResolvable;
    /**
     * @Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
     */
    readonly attrAllowUserToManagePublicKeys: ros.IResolvable;
    /**
     * @Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
     */
    readonly attrEnableSaveMfaTicket: ros.IResolvable;
    /**
     * @Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
     */
    readonly attrLoginNetworkMasks: ros.IResolvable;
    /**
     * @Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.
     */
    readonly attrLoginSessionDuration: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property allowUserToChangePassword: Specifies whether RAM users can change their passwords. Valid values:
     * true: RAM users can change their passwords. This is the default value.
     * false: RAM users cannot change their passwords.
     */
    allowUserToChangePassword: boolean | ros.IResolvable | undefined;
    /**
     * @Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. Valid values:
     * true: RAM users can manage their AccessKey pairs.
     * false: RAM users cannot manage their AccessKey pairs. This is the default value.
     */
    allowUserToManageAccessKeys: boolean | ros.IResolvable | undefined;
    /**
     * @Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. Valid values:
     * true: RAM users can manage their MFA devices. This is the default value.
     * false: RAM users cannot manage their MFA devices.
     */
    allowUserToManageMfaDevices: boolean | ros.IResolvable | undefined;
    /**
     * @Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. Valid values:
     * true: RAM users can manage their public keys.
     * false: RAM users cannot manage their public keys. This is the default value.
     * Note This parameter is valid only for the Japan site.
     */
    allowUserToManagePublicKeys: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes
     * during logon. The security codes are valid for 7 days. Valid values:
     * true: RAM users can save MFA security codes during logon.
     * false: RAM users cannot save MFA security codes during logon. This is the default
     * value.
     */
    enableSaveMfaTicket: boolean | ros.IResolvable | undefined;
    /**
     * @Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is
     * allowed. This parameter applies to password-based logon and single sign-on (SSO).
     * However, this parameter does not apply to API calls that are authenticated based on
     * AccessKey pairs.
     * If a subnet mask is specified, RAM users can log on to the console only by using the
     * IP addresses in the subnet.
     * If you do not specify a subnet mask, RAM users can log on to the console by using
     * all IP addresses.
     * If you want to specify multiple subnet masks, separate the subnet masks with semicolons
     * (;). Example: 192.168.0.0/16;10.0.0.0/8.
     * A maximum of 25 subnet masks can be set. The total length of the subnet masks can
     * be 1 to 512 characters.
     */
    loginNetworkMasks: string | ros.IResolvable | undefined;
    /**
     * @Property loginSessionDuration: The validity period of the logon session of the RAM user.
     * Valid values: 6 to 24. Default value: 6. Unit: hours.
     */
    loginSessionDuration: number | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::RAM::SecurityPreference`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityPreferenceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::RAM::User`
 */
export interface RosUserProps {
    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string | ros.IResolvable;
    /**
     * @Property comments: Comments of ram user.
     */
    readonly comments?: string | ros.IResolvable;
    /**
     * @Property deletionForce: Whether force detach the policies and groups attached to the user. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property displayName: Display name, up to 128 characters or Chinese characters.
     */
    readonly displayName?: string | ros.IResolvable;
    /**
     * @Property email: Email of ram user.
     */
    readonly email?: string | ros.IResolvable;
    /**
     * @Property groups: A name of a group to which you want to add the user.
     */
    readonly groups?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
     */
    readonly loginProfile?: RosUser.LoginProfileProperty | ros.IResolvable;
    /**
     * @Property mobilePhone: Phone number of ram user.
     */
    readonly mobilePhone?: string | ros.IResolvable;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosUser.PoliciesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property policyAttachments: System and custom policy names to attach.
     */
    readonly policyAttachments?: RosUser.PolicyAttachmentsProperty | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::RAM::User`
 */
export declare class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::User";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CreateDate: Create date of ram user.
     */
    readonly attrCreateDate: ros.IResolvable;
    /**
     * @Attribute LastLoginDate: Last login date of ram user.
     */
    readonly attrLastLoginDate: ros.IResolvable;
    /**
     * @Attribute UserId: Id of ram user.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * @Attribute UserName: Name of ram user.
     */
    readonly attrUserName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    userName: string | ros.IResolvable;
    /**
     * @Property comments: Comments of ram user.
     */
    comments: string | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether force detach the policies and groups attached to the user. Default value is false.
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property displayName: Display name, up to 128 characters or Chinese characters.
     */
    displayName: string | ros.IResolvable | undefined;
    /**
     * @Property email: Email of ram user.
     */
    email: string | ros.IResolvable | undefined;
    /**
     * @Property groups: A name of a group to which you want to add the user.
     */
    groups: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
     */
    loginProfile: RosUser.LoginProfileProperty | ros.IResolvable | undefined;
    /**
     * @Property mobilePhone: Phone number of ram user.
     */
    mobilePhone: string | ros.IResolvable | undefined;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    policies: Array<RosUser.PoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property policyAttachments: System and custom policy names to attach.
     */
    policyAttachments: RosUser.PolicyAttachmentsProperty | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::RAM::User`.
     *
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
export declare namespace RosUser {
    /**
     * @stability external
     */
    interface LoginProfileProperty {
        /**
         * @Property passwordResetRequired: Specifies whether the user is required to set a new password the next time the user logs in to the AliCloud Management Console.
         */
        readonly passwordResetRequired?: boolean | ros.IResolvable;
        /**
         * @Property mfaBindRequired: Specifies whether the user must bind a multi factor authentication device at the next logon.
         */
        readonly mfaBindRequired?: boolean | ros.IResolvable;
        /**
         * @Property password: The password for the user.
         */
        readonly password?: string | ros.IResolvable;
    }
}
export declare namespace RosUser {
    /**
     * @stability external
     */
    interface PoliciesProperty {
        /**
         * @Property ignoreExisting: Whether to ignore existing policy
     * False: ROS will perform a uniqueness check.If a policy with the same name exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If there is a policy with the same name, the policy creation process will be ignored.
     * If the policy is not created by ROS, it will be ignored during update and delete stage.
         */
        readonly ignoreExisting?: boolean | ros.IResolvable;
        /**
         * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         */
        readonly policyName: string | ros.IResolvable;
        /**
         * @Property policyDocument: A policy document that describes what actions are allowed on which resources.
         */
        readonly policyDocument: RosUser.PolicyDocumentProperty | ros.IResolvable;
    }
}
export declare namespace RosUser {
    /**
     * @stability external
     */
    interface PolicyAttachmentsProperty {
        /**
         * @Property custom: undefined
         */
        readonly custom?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property system: undefined
         */
        readonly system?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosUser {
    /**
     * @stability external
     */
    interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version: string | ros.IResolvable;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement: Array<RosUser.StatementProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosUser {
    /**
     * @stability external
     */
    interface StatementProperty {
        /**
         * @Property condition: What conditions should be satisfied.
         */
        readonly condition?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property action: What actions you will allow.
         */
        readonly action?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: Which resources you allow the action on.
         */
        readonly resource?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property effect: What the effect will be when the user requests access-either allow or deny.
         */
        readonly effect?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::RAM::UserToGroupAddition`
 */
export interface RosUserToGroupAdditionProps {
    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property users: list name of a users to which you want to add the group.
     */
    readonly users: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::RAM::UserToGroupAddition`
 */
export declare class RosUserToGroupAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::UserToGroupAddition";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    groupName: string | ros.IResolvable;
    /**
     * @Property users: list name of a users to which you want to add the group.
     */
    users: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Create a new `ALIYUN::RAM::UserToGroupAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserToGroupAdditionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
