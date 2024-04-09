import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccessAssignment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
 */
export interface RosAccessAssignmentProps {
    /**
     * @Property accessConfigurationId: The ID of the access configuration.
     */
    readonly accessConfigurationId: string | ros.IResolvable;
    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * @Property principalId: The ID of the CloudSSO identity.
     * - If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.
     * - If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.
     */
    readonly principalId: string | ros.IResolvable;
    /**
     * @Property principalType: The type of the CloudSSO identity. Valid values: User, Group
     */
    readonly principalType: string | ros.IResolvable;
    /**
     * @Property targetId: The ID of the task object.
     */
    readonly targetId: string | ros.IResolvable;
    /**
     * @Property targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
     */
    readonly targetType: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::AccessAssignment`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessAssignment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessassignment
 */
export declare class RosAccessAssignment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::AccessAssignment";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessConfigurationId: The ID of the access configuration.
     */
    accessConfigurationId: string | ros.IResolvable;
    /**
     * @Property directoryId: The ID of the directory.
     */
    directoryId: string | ros.IResolvable;
    /**
     * @Property principalId: The ID of the CloudSSO identity.
     * - If you set PrincipalType to User, set PrincipalId to the ID of the CloudSSO user.
     * - If you set PrincipalType to Group, set PrincipalId to the ID of the CloudSSO group.
     */
    principalId: string | ros.IResolvable;
    /**
     * @Property principalType: The type of the CloudSSO identity. Valid values: User, Group
     */
    principalType: string | ros.IResolvable;
    /**
     * @Property targetId: The ID of the task object.
     */
    targetId: string | ros.IResolvable;
    /**
     * @Property targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
     */
    targetType: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessAssignmentProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAccessConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
 */
export interface RosAccessConfigurationProps {
    /**
     * @Property accessConfigurationName: The name of the access configuration.
     * The name can contain letters, digits, and hyphens (-).
     * The name can be up to 32 characters in length.
     */
    readonly accessConfigurationName: string | ros.IResolvable;
    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * @Property description: The description of the access configuration.
     * The description can be up to 1,024 characters in length.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property relayState: The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
     * The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
     */
    readonly relayState?: string | ros.IResolvable;
    /**
     * @Property sessionDuration: The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
     * Unit: seconds.
     * Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
     * Default value: 3600. The value indicates 1 hour.
     */
    readonly sessionDuration?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::AccessConfiguration`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessConfiguration` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfiguration
 */
export declare class RosAccessConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::AccessConfiguration";
    /**
     * @Attribute AccessConfigurationId: The ID of the access configuration.
     */
    readonly attrAccessConfigurationId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessConfigurationName: The name of the access configuration.
     * The name can contain letters, digits, and hyphens (-).
     * The name can be up to 32 characters in length.
     */
    accessConfigurationName: string | ros.IResolvable;
    /**
     * @Property directoryId: The ID of the directory.
     */
    directoryId: string | ros.IResolvable;
    /**
     * @Property description: The description of the access configuration.
     * The description can be up to 1,024 characters in length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property relayState: The initial web page that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
     * The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
     */
    relayState: string | ros.IResolvable | undefined;
    /**
     * @Property sessionDuration: The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
     * Unit: seconds.
     * Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
     * Default value: 3600. The value indicates 1 hour.
     */
    sessionDuration: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessConfigurationProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAccessConfigurationProvision`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
 */
export interface RosAccessConfigurationProvisionProps {
    /**
     * @Property accessConfigurationId: The ID of the access configuration.
     */
    readonly accessConfigurationId: string | ros.IResolvable;
    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * @Property targetId: The ID of the task object.
     */
    readonly targetId: string | ros.IResolvable;
    /**
     * @Property targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
     */
    readonly targetType: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::AccessConfigurationProvision`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessConfigurationProvision` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
 */
export declare class RosAccessConfigurationProvision extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::AccessConfigurationProvision";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessConfigurationId: The ID of the access configuration.
     */
    accessConfigurationId: string | ros.IResolvable;
    /**
     * @Property directoryId: The ID of the directory.
     */
    directoryId: string | ros.IResolvable;
    /**
     * @Property targetId: The ID of the task object.
     */
    targetId: string | ros.IResolvable;
    /**
     * @Property targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
     */
    targetType: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessConfigurationProvisionProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDirectory`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-directory
 */
export interface RosDirectoryProps {
    /**
     * @Property directoryName: The name of the directory. The name must be globally unique.
     * The name can contain lowercase letters, digits, or hyphens (-). The name cannot start or end with a hyphen (-) and cannot contain two consecutive hyphens (-). The name cannot start with d-.
     * The name must be 2 to 64 characters in length.
     * **Note**: If you do not specify this parameter, the value of this parameter is automatically generated by the system.
     */
    readonly directoryName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::Directory`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Directory` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-directory
 */
export declare class RosDirectory extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::Directory";
    /**
     * @Attribute DirectoryId: The ID of the directory.
     */
    readonly attrDirectoryId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property directoryName: The name of the directory. The name must be globally unique.
     * The name can contain lowercase letters, digits, or hyphens (-). The name cannot start or end with a hyphen (-) and cannot contain two consecutive hyphens (-). The name cannot start with d-.
     * The name must be 2 to 64 characters in length.
     * **Note**: If you do not specify this parameter, the value of this parameter is automatically generated by the system.
     */
    directoryName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDirectoryProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group
 */
export interface RosGroupProps {
    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * @Property groupName: The name of the group.
     * The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
     * The name can be up to 128 characters in length.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * @Property description: The description of the group.
     * The description can be up to 1,024 characters in length.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::Group`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Group` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group
 */
export declare class RosGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::Group";
    /**
     * @Attribute GroupId: The ID of the group.
     */
    readonly attrGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property directoryId: The ID of the directory.
     */
    directoryId: string | ros.IResolvable;
    /**
     * @Property groupName: The name of the group.
     * The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
     * The name can be up to 128 characters in length.
     */
    groupName: string | ros.IResolvable;
    /**
     * @Property description: The description of the group.
     * The description can be up to 1,024 characters in length.
     */
    description: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosPermissionPolicyToAccessConfigurationAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
 */
export interface RosPermissionPolicyToAccessConfigurationAdditionProps {
    /**
     * @Property accessConfigurationId: The ID of the access configuration.
     */
    readonly accessConfigurationId: string | ros.IResolvable;
    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * @Property permissionPolicyName: The name of the permission policy.
     * - If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.
     * - If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.
     */
    readonly permissionPolicyName: string | ros.IResolvable;
    /**
     * @Property permissionPolicyType: The type of the permission policy. Valid values:
     * - System: system policy. Resource Access Management (RAM) system policies are reused.
     * - Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
     */
    readonly permissionPolicyType: string | ros.IResolvable;
    /**
     * @Property inlinePolicyDocument: The configurations of the inline policy.
     * The value can be up to 4,096 characters in length.
     * If you set PermissionPolicyType to Inline, you must specify this parameter.
     */
    readonly inlinePolicyDocument?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PermissionPolicyToAccessConfigurationAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-permissionpolicytoaccessconfigurationaddition
 */
export declare class RosPermissionPolicyToAccessConfigurationAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accessConfigurationId: The ID of the access configuration.
     */
    accessConfigurationId: string | ros.IResolvable;
    /**
     * @Property directoryId: The ID of the directory.
     */
    directoryId: string | ros.IResolvable;
    /**
     * @Property permissionPolicyName: The name of the permission policy.
     * - If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.
     * - If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.
     */
    permissionPolicyName: string | ros.IResolvable;
    /**
     * @Property permissionPolicyType: The type of the permission policy. Valid values:
     * - System: system policy. Resource Access Management (RAM) system policies are reused.
     * - Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.
     */
    permissionPolicyType: string | ros.IResolvable;
    /**
     * @Property inlinePolicyDocument: The configurations of the inline policy.
     * The value can be up to 4,096 characters in length.
     * If you set PermissionPolicyType to Inline, you must specify this parameter.
     */
    inlinePolicyDocument: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPermissionPolicyToAccessConfigurationAdditionProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSAMLIdentityProvider`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
 */
export interface RosSAMLIdentityProviderProps {
    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * @Property encodedMetadataDocument: The metadata file of the IdP. The value of this parameter is Base64-encoded.
     * The file is provided by the IdP that supports SAML 2.0.
     */
    readonly encodedMetadataDocument?: string | ros.IResolvable;
    /**
     * @Property entityId: The entity ID of the IdP.
     */
    readonly entityId?: string | ros.IResolvable;
    /**
     * @Property loginUrl: The logon URL of the IdP.
     */
    readonly loginUrl?: string | ros.IResolvable;
    /**
     * @Property ssoStatus: The status of SSO logon. Valid values:
     * - Enabled
     * - Disabled (default)
     */
    readonly ssoStatus?: string | ros.IResolvable;
    /**
     * @Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
     * - true: yes
     * - false: no (default)
     */
    readonly wantRequestSigned?: boolean | ros.IResolvable;
    /**
     * @Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
     */
    readonly x509Certificate?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::SAMLIdentityProvider`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SAMLIdentityProvider` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-samlidentityprovider
 */
export declare class RosSAMLIdentityProvider extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::SAMLIdentityProvider";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property directoryId: The ID of the directory.
     */
    directoryId: string | ros.IResolvable;
    /**
     * @Property encodedMetadataDocument: The metadata file of the IdP. The value of this parameter is Base64-encoded.
     * The file is provided by the IdP that supports SAML 2.0.
     */
    encodedMetadataDocument: string | ros.IResolvable | undefined;
    /**
     * @Property entityId: The entity ID of the IdP.
     */
    entityId: string | ros.IResolvable | undefined;
    /**
     * @Property loginUrl: The logon URL of the IdP.
     */
    loginUrl: string | ros.IResolvable | undefined;
    /**
     * @Property ssoStatus: The status of SSO logon. Valid values:
     * - Enabled
     * - Disabled (default)
     */
    ssoStatus: string | ros.IResolvable | undefined;
    /**
     * @Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests. The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
     * - true: yes
     * - false: no (default)
     */
    wantRequestSigned: boolean | ros.IResolvable | undefined;
    /**
     * @Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
     */
    x509Certificate: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSAMLIdentityProviderProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSCIMServerCredential`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
 */
export interface RosSCIMServerCredentialProps {
    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * @Property status: The new status of the SCIM credential. Valid values:
     * - Enabled: The SCIM credential is enabled.
     * - Disabled: The SCIM credential is disabled.
     * The default value is Enabled.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::SCIMServerCredential`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SCIMServerCredential` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimservercredential
 */
export declare class RosSCIMServerCredential extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::SCIMServerCredential";
    /**
     * @Attribute CredentialId: The ID of the SCIM credential.
     */
    readonly attrCredentialId: ros.IResolvable;
    /**
     * @Attribute CredentialSecret: The secret of the SCIM credential.
     */
    readonly attrCredentialSecret: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property directoryId: The ID of the directory.
     */
    directoryId: string | ros.IResolvable;
    /**
     * @Property status: The new status of the SCIM credential. Valid values:
     * - Enabled: The SCIM credential is enabled.
     * - Disabled: The SCIM credential is disabled.
     * The default value is Enabled.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSCIMServerCredentialProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSCIMSynchronization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
 */
export interface RosSCIMSynchronizationProps {
    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * @Property scimSynchronizationStatus: The status of SCIM synchronization. Valid values:
     * - Enabled
     * - Disabled
     * The default value is Enabled.
     */
    readonly scimSynchronizationStatus?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::SCIMSynchronization`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SCIMSynchronization` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
 */
export declare class RosSCIMSynchronization extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::SCIMSynchronization";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property directoryId: The ID of the directory.
     */
    directoryId: string | ros.IResolvable;
    /**
     * @Property scimSynchronizationStatus: The status of SCIM synchronization. Valid values:
     * - Enabled
     * - Disabled
     * The default value is Enabled.
     */
    scimSynchronizationStatus: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSCIMSynchronizationProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
 */
export interface RosUserProps {
    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * @Property userName: The name of the user. The name must be unique within the directory. The name cannot be changed.
     * The name can contain numbers, letters, and the following special characters: @_-.
     * The name can be up to 64 characters in length.
     */
    readonly userName: string | ros.IResolvable;
    /**
     * @Property description: The description of the user.
     * The description can be up to 1,024 characters in length.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property displayName: The display name of the user.
     * The name can be up to 256 characters in length.
     */
    readonly displayName?: string | ros.IResolvable;
    /**
     * @Property email: The email address of the user. The email address must be unique within the directory.
     * The email address can be up to 128 characters in length.
     */
    readonly email?: string | ros.IResolvable;
    /**
     * @Property firstName: The first name of the user.
     * The name can be up to 64 characters in length.
     */
    readonly firstName?: string | ros.IResolvable;
    /**
     * @Property lastName: The last name of the user.
     * The name can be up to 64 characters in length.
     */
    readonly lastName?: string | ros.IResolvable;
    /**
     * @Property status: The status of the user. Valid values:
     * - Enabled: The logon of the user is enabled. This is the default value.
     * - Disabled: The logon of the user is disabled.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::User`.
 * @Note This class does not contain additional functions, so it is recommended to use the `User` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-user
 */
export declare class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::User";
    /**
     * @Attribute UserId: The ID of the user.
     */
    readonly attrUserId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property directoryId: The ID of the directory.
     */
    directoryId: string | ros.IResolvable;
    /**
     * @Property userName: The name of the user. The name must be unique within the directory. The name cannot be changed.
     * The name can contain numbers, letters, and the following special characters: @_-.
     * The name can be up to 64 characters in length.
     */
    userName: string | ros.IResolvable;
    /**
     * @Property description: The description of the user.
     * The description can be up to 1,024 characters in length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property displayName: The display name of the user.
     * The name can be up to 256 characters in length.
     */
    displayName: string | ros.IResolvable | undefined;
    /**
     * @Property email: The email address of the user. The email address must be unique within the directory.
     * The email address can be up to 128 characters in length.
     */
    email: string | ros.IResolvable | undefined;
    /**
     * @Property firstName: The first name of the user.
     * The name can be up to 64 characters in length.
     */
    firstName: string | ros.IResolvable | undefined;
    /**
     * @Property lastName: The last name of the user.
     * The name can be up to 64 characters in length.
     */
    lastName: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the user. Valid values:
     * - Enabled: The logon of the user is enabled. This is the default value.
     * - Disabled: The logon of the user is disabled.
     */
    status: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosUserProvision`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
 */
export interface RosUserProvisionProps {
    /**
     * @Property deletionStrategy: Delete policy. The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
     * - Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.
     * - Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.
     */
    readonly deletionStrategy: string | ros.IResolvable;
    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * @Property duplicationStrategy: Conflict policy. When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
     * - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.
     * - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.
     */
    readonly duplicationStrategy: string | ros.IResolvable;
    /**
     * @Property principalId: The ID of the principal. Valid values:
     * - When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).
     * - When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).
     */
    readonly principalId: string | ros.IResolvable;
    /**
     * @Property principalType: The type of the principal. Valid values:
     * - User: The principal is a cloud SSO user.
     * - Group: The principal is a cloud SSO group.
     */
    readonly principalType: string | ros.IResolvable;
    /**
     * @Property targetId: Target ID for RAM user synchronization. Currently, it is the RD account ID.
     */
    readonly targetId: string | ros.IResolvable;
    /**
     * @Property targetType: Target type for RAM user synchronization. Currently, it is RD-Account.
     */
    readonly targetType: string | ros.IResolvable;
    /**
     * @Property description: The description of the user.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::UserProvision`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserProvision` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
 */
export declare class RosUserProvision extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::UserProvision";
    /**
     * @Attribute UserProvisionId: The ID of the user provisioning.
     */
    readonly attrUserProvisionId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property deletionStrategy: Delete policy. The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
     * - Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.
     * - Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.
     */
    deletionStrategy: string | ros.IResolvable;
    /**
     * @Property directoryId: The ID of the directory.
     */
    directoryId: string | ros.IResolvable;
    /**
     * @Property duplicationStrategy: Conflict policy. When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
     * - KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.
     * - TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.
     */
    duplicationStrategy: string | ros.IResolvable;
    /**
     * @Property principalId: The ID of the principal. Valid values:
     * - When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).
     * - When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).
     */
    principalId: string | ros.IResolvable;
    /**
     * @Property principalType: The type of the principal. Valid values:
     * - User: The principal is a cloud SSO user.
     * - Group: The principal is a cloud SSO group.
     */
    principalType: string | ros.IResolvable;
    /**
     * @Property targetId: Target ID for RAM user synchronization. Currently, it is the RD account ID.
     */
    targetId: string | ros.IResolvable;
    /**
     * @Property targetType: Target type for RAM user synchronization. Currently, it is RD-Account.
     */
    targetType: string | ros.IResolvable;
    /**
     * @Property description: The description of the user.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserProvisionProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosUserToGroupAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
 */
export interface RosUserToGroupAdditionProps {
    /**
     * @Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * @Property groupId: The ID of the group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * @Property userId: The ID of the user.
     */
    readonly userId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudSSO::UserToGroupAddition`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserToGroupAddition` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-usertogroupaddition
 */
export declare class RosUserToGroupAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudSSO::UserToGroupAddition";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property directoryId: The ID of the directory.
     */
    directoryId: string | ros.IResolvable;
    /**
     * @Property groupId: The ID of the group.
     */
    groupId: string | ros.IResolvable;
    /**
     * @Property userId: The ID of the user.
     */
    userId: string | ros.IResolvable;
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
