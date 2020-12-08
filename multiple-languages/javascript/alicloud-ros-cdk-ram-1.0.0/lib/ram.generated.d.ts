import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::RAM::AccessKey`
 */
export interface RosAccessKeyProps {
    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string;
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
    readonly attrAccessKeyId: any;
    /**
     * @Attribute AccessKeySecret: Secret of access key.
     */
    readonly attrAccessKeySecret: any;
    /**
     * @Attribute Status: Status of access key.
     */
    readonly attrStatus: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    userName: string;
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
    readonly policyName: string;
    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string;
    /**
     * @Property roleName: Role name.Example: dev.
     */
    readonly roleName: string;
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
    policyName: string;
    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    policyType: string;
    /**
     * @Property roleName: Role name.Example: dev.
     */
    roleName: string;
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
    readonly policyName: string;
    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    readonly policyType: string;
    /**
     * @Property userName: User name.Example: dev.
     */
    readonly userName: string;
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
    policyName: string;
    /**
     * @Property policyType: Authorization policy type. Value: "System" or "Custom".
     */
    policyType: string;
    /**
     * @Property userName: User name.Example: dev.
     */
    userName: string;
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
    readonly groupName: string;
    /**
     * @Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    readonly comments?: string;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosGroup.PoliciesProperty | ros.IResolvable> | ros.IResolvable;
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
    readonly attrGroupName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    groupName: string;
    /**
     * @Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    comments: string | undefined;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    policies: Array<RosGroup.PoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;
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
         * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
         */
        readonly description?: string;
        /**
         * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         */
        readonly policyName: string;
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
    interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version?: string;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement?: Array<RosGroup.StatementProperty | ros.IResolvable> | ros.IResolvable;
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
        readonly effect?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::RAM::ManagedPolicy`
 */
export interface RosManagedPolicyProps {
    /**
     * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
     */
    readonly policyName: string;
    /**
     * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
     */
    readonly description?: string;
    /**
     * @Property groups: The names of groups to attach to this policy.
     */
    readonly groups?: Array<any | ros.IResolvable> | ros.IResolvable;
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
    readonly attrPolicyName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
     */
    policyName: string;
    /**
     * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
     */
    description: string | undefined;
    /**
     * @Property groups: The names of groups to attach to this policy.
     */
    groups: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
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
        readonly version?: string;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement?: Array<RosManagedPolicy.StatementProperty | ros.IResolvable> | ros.IResolvable;
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
        readonly effect?: string;
    }
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
    readonly roleName: string;
    /**
     * @Property description: Remark information, up to 1024 characters or Chinese characters.
     */
    readonly description?: string;
    /**
     * @Property maxSessionDuration: The maximum session duration of the RAM role.
     * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
     * The default value is used if the parameter is not specified.
     */
    readonly maxSessionDuration?: number;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosRole.PoliciesProperty | ros.IResolvable> | ros.IResolvable;
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
    readonly attrArn: any;
    /**
     * @Attribute RoleId: Id of ram role.
     */
    readonly attrRoleId: any;
    /**
     * @Attribute RoleName: Name of ram role.
     */
    readonly attrRoleName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
     */
    assumeRolePolicyDocument: RosRole.AssumeRolePolicyDocumentProperty | ros.IResolvable;
    /**
     * @Property roleName: Specifies the role name, containing up to 64 characters.
     */
    roleName: string;
    /**
     * @Property description: Remark information, up to 1024 characters or Chinese characters.
     */
    description: string | undefined;
    /**
     * @Property maxSessionDuration: The maximum session duration of the RAM role.
     * Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
     * The default value is used if the parameter is not specified.
     */
    maxSessionDuration: number | undefined;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    policies: Array<RosRole.PoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;
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
        readonly version: string;
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
         * @Property numericEquals: undefined
         */
        readonly numericEquals?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property dateGreaterThanEquals: undefined
         */
        readonly dateGreaterThanEquals?: {
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
         * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
         */
        readonly description?: string;
        /**
         * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         */
        readonly policyName: string;
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
    interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version?: string;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement?: Array<RosRole.StatementProperty | ros.IResolvable> | ros.IResolvable;
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
        readonly effect?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::RAM::SAMLProvider`
 */
export interface RosSAMLProviderProps {
    /**
     * @Property samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
     */
    readonly samlProviderName: string;
    /**
     * @Property description: The description can contain a maximum of 256 characters.
     */
    readonly description?: string;
    /**
     * @Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
     */
    readonly samlMetadataDocument?: string;
    /**
     * @Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     */
    readonly samlMetadataDocumentUrl?: string;
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
    readonly attrArn: any;
    /**
     * @Attribute SAMLProviderName: IdP Name.
     */
    readonly attrSamlProviderName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
     */
    samlProviderName: string;
    /**
     * @Property description: The description can contain a maximum of 256 characters.
     */
    description: string | undefined;
    /**
     * @Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
     */
    samlMetadataDocument: string | undefined;
    /**
     * @Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     */
    samlMetadataDocumentUrl: string | undefined;
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
 * Properties for defining a `ALIYUN::RAM::User`
 */
export interface RosUserProps {
    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string;
    /**
     * @Property comments: Comments of ram user.
     */
    readonly comments?: string;
    /**
     * @Property displayName: Display name, up to 128 characters or Chinese characters.
     */
    readonly displayName?: string;
    /**
     * @Property email: Email of ram user.
     */
    readonly email?: string;
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
    readonly mobilePhone?: string;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosUser.PoliciesProperty | ros.IResolvable> | ros.IResolvable;
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
    readonly attrCreateDate: any;
    /**
     * @Attribute LastLoginDate: Last login date of ram user.
     */
    readonly attrLastLoginDate: any;
    /**
     * @Attribute UserId: Id of ram user.
     */
    readonly attrUserId: any;
    /**
     * @Attribute UserName: Name of ram user.
     */
    readonly attrUserName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    userName: string;
    /**
     * @Property comments: Comments of ram user.
     */
    comments: string | undefined;
    /**
     * @Property displayName: Display name, up to 128 characters or Chinese characters.
     */
    displayName: string | undefined;
    /**
     * @Property email: Email of ram user.
     */
    email: string | undefined;
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
    mobilePhone: string | undefined;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    policies: Array<RosUser.PoliciesProperty | ros.IResolvable> | ros.IResolvable | undefined;
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
        readonly password?: string;
    }
}
export declare namespace RosUser {
    /**
     * @stability external
     */
    interface PoliciesProperty {
        /**
         * @Property description: Specifies the authorization policy description, containing up to 1024 characters.
         */
        readonly description?: string;
        /**
         * @Property policyName: Specifies the authorization policy name, containing up to 128 characters.
         */
        readonly policyName: string;
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
    interface PolicyDocumentProperty {
        /**
         * @Property version: You can use versions to track changes to a managed policy.
         */
        readonly version?: string;
        /**
         * @Property statement: A policy consists of one or more statements.
         */
        readonly statement?: Array<RosUser.StatementProperty | ros.IResolvable> | ros.IResolvable;
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
        readonly effect?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::RAM::UserToGroupAddition`
 */
export interface RosUserToGroupAdditionProps {
    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    readonly groupName: string;
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
    groupName: string;
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
