import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccessKey`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-accesskey
 */
export interface RosAccessKeyProps {
    /**
     * @Property userName: Specifies the user name, containing up to 64 characters.
     */
    readonly userName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AccessKey`, which is used to obtain the AccessKey pair (AccessKey ID and AccessKey secret) of a specified user and its status.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessKey` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-accesskey
 */
export declare class RosAccessKey extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AccessKey";
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
 * Properties for defining a `RosAppSecret`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
 */
export interface RosAppSecretProps {
    /**
     * @Property appId: The ID of the application.
     */
    readonly appId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AppSecret`, which is used to create an application secret.
 * @Note This class does not contain additional functions, so it is recommended to use the `AppSecret` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
 */
export declare class RosAppSecret extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AppSecret";
    /**
     * @Attribute AppSecretId: The ID of the application secret.
     */
    readonly attrAppSecretId: ros.IResolvable;
    /**
     * @Attribute AppSecretValue: The content of the application secret. This value can be used as the client secret for open authorization.
     */
    readonly attrAppSecretValue: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appId: The ID of the application.
     */
    appId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppSecretProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosApplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
 */
export interface RosApplicationProps {
    /**
     * @Property appName: The name of the application. The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    readonly appName: string | ros.IResolvable;
    /**
     * @Property appType: The type of the application. Valid values:
     * - **WebApp**: a web application that interacts with a browser.
     * - **NativeApp**: a native application that runs on an operating system, such as a desktop operating system or a mobile operating system.
     * - **ServerApp**: an application that accesses Alibaba Cloud services without the need of manual user logon. User provisioning is automated based on the System for Cross-Domain Identity Management (SCIM) protocol.
     */
    readonly appType: string | ros.IResolvable;
    /**
     * @Property displayName: The display name of the application. The name can be up to 24 characters in length.
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * @Property accessTokenValidity: The validity period of the access token.
     * Valid values: 900 to 10800. Unit: seconds.
     * Default value: 3600.
     */
    readonly accessTokenValidity?: number | ros.IResolvable;
    /**
     * @Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts. Valid values:
     * - **true**: If you do not set this parameter for applications of the NativeApp and ServerApp types, true is used.
     * - **false**: If you do not set this parameter for applications of the WebApp type, false is used.
     */
    readonly isMultiTenant?: boolean | ros.IResolvable;
    /**
     * @Property predefinedScopes: List of the scopes of application permissions.
     */
    readonly predefinedScopes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property redirectUris: List of the callback URLs.
     */
    readonly redirectUris?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property refreshTokenValidity: The validity period of the refreshed token.
     * Valid values: 7200 to 31536000. Unit: seconds.
     * Default value:
     * - For applications of the WebApp and ServerApp types, if this parameter is left empty, the value 2592000 is used. The value 2592000 indicates that the validity period of the refreshed token is 30 days.
     * - For applications of the NativeApp type, if this parameter is left empty, the value 7776000 is used. The value 7776000 indicates that the validity period of the refreshed token is 90 days.
     */
    readonly refreshTokenValidity?: number | ros.IResolvable;
    /**
     * @Property requiredScopes: Required scope of application permissions. You can set one or more of the scopes set in the **PredefinedScopes** to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
     * **Notes**: If you set a **RequiredScopes** entry that is not within the scope of **PredefinedScopes**, the required range will not take effect.
     */
    readonly requiredScopes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property secretRequired: Indicates whether a secret is required. Valid values: **true** and **false**.
     * **Note**:
     * - For applications of the WebApp and ServerApp types, this parameter is automatically set to **true** and cannot be changed.
     * - For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified.
     */
    readonly secretRequired?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::Application`, which is used to create an application.
 * @Note This class does not contain additional functions, so it is recommended to use the `Application` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
 */
export declare class RosApplication extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Application";
    /**
     * @Attribute AppId: The ID of the application.
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute AppName: The name of the application.
     */
    readonly attrAppName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appName: The name of the application. The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    appName: string | ros.IResolvable;
    /**
     * @Property appType: The type of the application. Valid values:
     * - **WebApp**: a web application that interacts with a browser.
     * - **NativeApp**: a native application that runs on an operating system, such as a desktop operating system or a mobile operating system.
     * - **ServerApp**: an application that accesses Alibaba Cloud services without the need of manual user logon. User provisioning is automated based on the System for Cross-Domain Identity Management (SCIM) protocol.
     */
    appType: string | ros.IResolvable;
    /**
     * @Property displayName: The display name of the application. The name can be up to 24 characters in length.
     */
    displayName: string | ros.IResolvable;
    /**
     * @Property accessTokenValidity: The validity period of the access token.
     * Valid values: 900 to 10800. Unit: seconds.
     * Default value: 3600.
     */
    accessTokenValidity: number | ros.IResolvable | undefined;
    /**
     * @Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts. Valid values:
     * - **true**: If you do not set this parameter for applications of the NativeApp and ServerApp types, true is used.
     * - **false**: If you do not set this parameter for applications of the WebApp type, false is used.
     */
    isMultiTenant: boolean | ros.IResolvable | undefined;
    /**
     * @Property predefinedScopes: List of the scopes of application permissions.
     */
    predefinedScopes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property redirectUris: List of the callback URLs.
     */
    redirectUris: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property refreshTokenValidity: The validity period of the refreshed token.
     * Valid values: 7200 to 31536000. Unit: seconds.
     * Default value:
     * - For applications of the WebApp and ServerApp types, if this parameter is left empty, the value 2592000 is used. The value 2592000 indicates that the validity period of the refreshed token is 30 days.
     * - For applications of the NativeApp type, if this parameter is left empty, the value 7776000 is used. The value 7776000 indicates that the validity period of the refreshed token is 90 days.
     */
    refreshTokenValidity: number | ros.IResolvable | undefined;
    /**
     * @Property requiredScopes: Required scope of application permissions. You can set one or more of the scopes set in the **PredefinedScopes** to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
     * **Notes**: If you set a **RequiredScopes** entry that is not within the scope of **PredefinedScopes**, the required range will not take effect.
     */
    requiredScopes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property secretRequired: Indicates whether a secret is required. Valid values: **true** and **false**.
     * **Note**:
     * - For applications of the WebApp and ServerApp types, this parameter is automatically set to **true** and cannot be changed.
     * - For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified.
     */
    secretRequired: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAttachPolicyToRole`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytorole
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AttachPolicyToRole`, which is used to attach a policy to a specified role.
 * @Note This class does not contain additional functions, so it is recommended to use the `AttachPolicyToRole` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytorole
 */
export declare class RosAttachPolicyToRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AttachPolicyToRole";
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
 * Properties for defining a `RosAttachPolicyToUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::AttachPolicyToUser`, which is used to grant permissions to a specified user.
 * @Note This class does not contain additional functions, so it is recommended to use the `AttachPolicyToUser` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-attachpolicytouser
 */
export declare class RosAttachPolicyToUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::AttachPolicyToUser";
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
 * Properties for defining a `RosGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-group
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::Group`, which is used to create a Resource Access Management (RAM) user group.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-group
 */
export declare class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Group";
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
 * Properties for defining a `RosLoginProfile`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
 */
export interface RosLoginProfileProps {
    /**
     * @Property userPrincipalName: The login name of the RAM user.
     */
    readonly userPrincipalName: string | ros.IResolvable;
    /**
     * @Property generateRandomPassword: Whether to generate a random password for the RAM user.
     */
    readonly generateRandomPassword?: boolean | ros.IResolvable;
    /**
     * @Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication. Valid values:
     * - true: This is required. RAM users must bind the multifactor authentication device the next time they log in.
     * - false (default) : This is not required.
     */
    readonly mfaBindRequired?: boolean | ros.IResolvable;
    /**
     * @Property password: The password of the RAM user.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.
     */
    readonly passwordResetRequired?: boolean | ros.IResolvable;
    /**
     * @Property status: Enable or disable console password login. Valid values:
     * - Activate (default): Enable.
     * - Inactivate: Disable.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::LoginProfile`, which is used to create logon configurations for a Resource Access Management (RAM) user.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoginProfile` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
 */
export declare class RosLoginProfile extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::LoginProfile";
    /**
     * @Attribute Password: The password of the RAM user.
     */
    readonly attrPassword: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property userPrincipalName: The login name of the RAM user.
     */
    userPrincipalName: string | ros.IResolvable;
    /**
     * @Property generateRandomPassword: Whether to generate a random password for the RAM user.
     */
    generateRandomPassword: boolean | ros.IResolvable | undefined;
    /**
     * @Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication. Valid values:
     * - true: This is required. RAM users must bind the multifactor authentication device the next time they log in.
     * - false (default) : This is not required.
     */
    mfaBindRequired: boolean | ros.IResolvable | undefined;
    /**
     * @Property password: The password of the RAM user.
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.
     */
    passwordResetRequired: boolean | ros.IResolvable | undefined;
    /**
     * @Property status: Enable or disable console password login. Valid values:
     * - Activate (default): Enable.
     * - Inactivate: Disable.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoginProfileProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosManagedPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-managedpolicy
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::ManagedPolicy`, which is used to create a Resource Access Management (RAM) policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `ManagedPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-managedpolicy
 */
export declare class RosManagedPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::ManagedPolicy";
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
 * Properties for defining a `RosRamAccountAlias`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::RamAccountAlias`, which is used to create an alias for an Alibaba Cloud account.
 * @Note This class does not contain additional functions, so it is recommended to use the `RamAccountAlias` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
 */
export declare class RosRamAccountAlias extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::RamAccountAlias";
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
 * Properties for defining a `RosRole`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-role
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::Role`, which is used to create a Resource Access Management (RAM) role.
 * @Note This class does not contain additional functions, so it is recommended to use the `Role` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-role
 */
export declare class RosRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::Role";
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
 * Properties for defining a `RosSAMLProvider`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-samlprovider
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
     * @Property encodedSamlMetadataDocument: SAML metadata document.Base64 encoded. Provided by an identity provider that supports the SAML2.0 protocol.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    readonly encodedSamlMetadataDocument?: string | ros.IResolvable;
    /**
     * @Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    readonly samlMetadataDocument?: string | ros.IResolvable;
    /**
     * @Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss:\/\/ros\/document\/demo and oss:\/\/ros\/document\/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    readonly samlMetadataDocumentUrl?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::SAMLProvider`, which is used to create an identity provider (IdP) for role-based single sign-on (SSO).
 * @Note This class does not contain additional functions, so it is recommended to use the `SAMLProvider` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-samlprovider
 */
export declare class RosSAMLProvider extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::SAMLProvider";
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
     * @Property encodedSamlMetadataDocument: SAML metadata document.Base64 encoded. Provided by an identity provider that supports the SAML2.0 protocol.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    encodedSamlMetadataDocument: string | ros.IResolvable | undefined;
    /**
     * @Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    samlMetadataDocument: string | ros.IResolvable | undefined;
    /**
     * @Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss:\/\/ros\/document\/demo and oss:\/\/ros\/document\/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
     * Only one of the three properties SAMLMetadataDocument, SAMLMetadataDocumentURL, EncodedSAMLMetadataDocument can be set.
     */
    samlMetadataDocumentUrl: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosSecurityPreference`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-securitypreference
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
     * (;). Example: 192.168.0.0\/16;10.0.0.0\/8.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::SecurityPreference`, which is used to configure security preferences for Resource Access Management (RAM) users.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityPreference` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-securitypreference
 */
export declare class RosSecurityPreference extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::SecurityPreference";
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
     * (;). Example: 192.168.0.0\/16;10.0.0.0\/8.
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
 * Properties for defining a `RosUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::User`, which is used to create a Resource Access Management (RAM) user.
 * @Note This class does not contain additional functions, so it is recommended to use the `User` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-user
 */
export declare class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::User";
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
 * Properties for defining a `RosUserToGroupAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-usertogroupaddition
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RAM::UserToGroupAddition`, which is used to add users to a RAM group.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserToGroupAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-usertogroupaddition
 */
export declare class RosUserToGroupAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RAM::UserToGroupAddition";
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
