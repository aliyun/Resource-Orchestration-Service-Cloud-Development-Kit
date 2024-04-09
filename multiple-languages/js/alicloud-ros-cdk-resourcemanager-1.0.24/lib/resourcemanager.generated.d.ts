import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
 */
export interface RosAccountProps {
    /**
     * @Property displayName: Member name
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * @Property deleteAccount: Whether delete the account. Default value is false.
     */
    readonly deleteAccount?: boolean | ros.IResolvable;
    /**
     * @Property folderId: The ID of the parent folder
     */
    readonly folderId?: string | ros.IResolvable;
    /**
     * @Property payerAccountId:
     */
    readonly payerAccountId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::Account`, which is used to create a member of the resource account type.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Account";
    /**
     * @Attribute AccountId: This ID of Resource Manager Account
     */
    readonly attrAccountId: ros.IResolvable;
    /**
     * @Attribute DisplayName: Member name
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * @Attribute FolderId: The ID of the parent folder
     */
    readonly attrFolderId: ros.IResolvable;
    /**
     * @Attribute JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
     */
    readonly attrJoinMethod: ros.IResolvable;
    /**
     * @Attribute ResourceDirectoryId: Resource directory ID
     */
    readonly attrResourceDirectoryId: ros.IResolvable;
    /**
     * @Attribute Type: Member type. The value of ResourceAccount indicates the resource account
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property displayName: Member name
     */
    displayName: string | ros.IResolvable;
    /**
     * @Property deleteAccount: Whether delete the account. Default value is false.
     */
    deleteAccount: boolean | ros.IResolvable | undefined;
    /**
     * @Property folderId: The ID of the parent folder
     */
    folderId: string | ros.IResolvable | undefined;
    /**
     * @Property payerAccountId:
     */
    payerAccountId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosControlPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
 */
export interface RosControlPolicyProps {
    /**
     * @Property controlPolicyName: PolicyName
     */
    readonly controlPolicyName: string | ros.IResolvable;
    /**
     * @Property effectScope: EffectScope
     */
    readonly effectScope: string | ros.IResolvable;
    /**
     * @Property policyDocument: PolicyDocument
     */
    readonly policyDocument: string | ros.IResolvable;
    /**
     * @Property description: Description
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ControlPolicy`, which is used to create a custom control policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `ControlPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
 */
export declare class RosControlPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ControlPolicy";
    /**
     * @Attribute AttachmentCount: AttachmentCount
     */
    readonly attrAttachmentCount: ros.IResolvable;
    /**
     * @Attribute ControlPolicyName: PolicyName
     */
    readonly attrControlPolicyName: ros.IResolvable;
    /**
     * @Attribute Description: Description
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute EffectScope: EffectScope
     */
    readonly attrEffectScope: ros.IResolvable;
    /**
     * @Attribute PolicyDocument: PolicyDocument
     */
    readonly attrPolicyDocument: ros.IResolvable;
    /**
     * @Attribute PolicyId: PolicyId
     */
    readonly attrPolicyId: ros.IResolvable;
    /**
     * @Attribute PolicyType: PolicyType
     */
    readonly attrPolicyType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property controlPolicyName: PolicyName
     */
    controlPolicyName: string | ros.IResolvable;
    /**
     * @Property effectScope: EffectScope
     */
    effectScope: string | ros.IResolvable;
    /**
     * @Property policyDocument: PolicyDocument
     */
    policyDocument: string | ros.IResolvable;
    /**
     * @Property description: Description
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosControlPolicyProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosControlPolicyAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment
 */
export interface RosControlPolicyAttachmentProps {
    /**
     * @Property policyId: PolicyId
     */
    readonly policyId: string | ros.IResolvable;
    /**
     * @Property targetId: TargetId
     */
    readonly targetId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ControlPolicyAttachment`, which is used to attach a custom control policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `ControlPolicyAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment
 */
export declare class RosControlPolicyAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ControlPolicyAttachment";
    /**
     * @Attribute AttachDate: AttachDate
     */
    readonly attrAttachDate: ros.IResolvable;
    /**
     * @Attribute Description: Description
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute PolicyId: PolicyId
     */
    readonly attrPolicyId: ros.IResolvable;
    /**
     * @Attribute PolicyName: PolicyName
     */
    readonly attrPolicyName: ros.IResolvable;
    /**
     * @Attribute PolicyType: PolicyType
     */
    readonly attrPolicyType: ros.IResolvable;
    /**
     * @Attribute TargetId: TargetId
     */
    readonly attrTargetId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property policyId: PolicyId
     */
    policyId: string | ros.IResolvable;
    /**
     * @Property targetId: TargetId
     */
    targetId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosControlPolicyAttachmentProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosFolder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder
 */
export interface RosFolderProps {
    /**
     * @Property folderName: The name of the folder
     */
    readonly folderName: string | ros.IResolvable;
    /**
     * @Property parentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    readonly parentFolderId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::Folder`, which is used to create a folder.
 * @Note This class does not contain additional functions, so it is recommended to use the `Folder` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder
 */
export declare class RosFolder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Folder";
    /**
     * @Attribute FolderId: The ID of the folder
     */
    readonly attrFolderId: ros.IResolvable;
    /**
     * @Attribute FolderName: The name of the folder
     */
    readonly attrFolderName: ros.IResolvable;
    /**
     * @Attribute ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    readonly attrParentFolderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property folderName: The name of the folder
     */
    folderName: string | ros.IResolvable;
    /**
     * @Property parentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    parentFolderId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFolderProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosHandshake`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-handshake
 */
export interface RosHandshakeProps {
    /**
     * @Property targetEntity: Invited account ID or login email
     */
    readonly targetEntity: string | ros.IResolvable;
    /**
     * @Property targetType: Type of account being invited. Valid values: Account, Email
     */
    readonly targetType: string | ros.IResolvable;
    /**
     * @Property note: Remarks
     */
    readonly note?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::Handshake`, which is used to create an invitation.
 * @Note This class does not contain additional functions, so it is recommended to use the `Handshake` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-handshake
 */
export declare class RosHandshake extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Handshake";
    /**
     * @Attribute HandshakeId: This ID of Resource Manager handshake
     */
    readonly attrHandshakeId: ros.IResolvable;
    /**
     * @Attribute MasterAccountId: Resource account master account ID
     */
    readonly attrMasterAccountId: ros.IResolvable;
    /**
     * @Attribute MasterAccountName: The name of the main account of the resource directory
     */
    readonly attrMasterAccountName: ros.IResolvable;
    /**
     * @Attribute Note: Remarks
     */
    readonly attrNote: ros.IResolvable;
    /**
     * @Attribute ResourceDirectoryId: Resource directory ID
     */
    readonly attrResourceDirectoryId: ros.IResolvable;
    /**
     * @Attribute TargetEntity: Invited account ID or login email
     */
    readonly attrTargetEntity: ros.IResolvable;
    /**
     * @Attribute TargetType: Type of account being invited. Valid values: Account, Email
     */
    readonly attrTargetType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property targetEntity: Invited account ID or login email
     */
    targetEntity: string | ros.IResolvable;
    /**
     * @Property targetType: Type of account being invited. Valid values: Account, Email
     */
    targetType: string | ros.IResolvable;
    /**
     * @Property note: Remarks
     */
    note: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHandshakeProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPolicyAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-policyattachment
 */
export interface RosPolicyAttachmentProps {
    /**
     * @Property policyName: The name of the policy
     */
    readonly policyName: string | ros.IResolvable;
    /**
     * @Property policyType: The type of the policy
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * @Property principalName: The name of the object to which you want to attach the policy
     */
    readonly principalName: string | ros.IResolvable;
    /**
     * @Property principalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
     */
    readonly principalType: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::PolicyAttachment`, which is used to attach a policy to an object. After you attach a policy to an object, the object has the permissions to manage the resources in the current resource group or within the current Alibaba Cloud account.
 * @Note This class does not contain additional functions, so it is recommended to use the `PolicyAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-policyattachment
 */
export declare class RosPolicyAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::PolicyAttachment";
    /**
     * @Attribute AttachDate: Authorization time
     */
    readonly attrAttachDate: ros.IResolvable;
    /**
     * @Attribute Description: Policy description
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute PolicyName: The name of the policy
     */
    readonly attrPolicyName: ros.IResolvable;
    /**
     * @Attribute PolicyType: The type of the policy
     */
    readonly attrPolicyType: ros.IResolvable;
    /**
     * @Attribute PrincipalName: The name of the object to which you want to attach the policy
     */
    readonly attrPrincipalName: ros.IResolvable;
    /**
     * @Attribute PrincipalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
     */
    readonly attrPrincipalType: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property policyName: The name of the policy
     */
    policyName: string | ros.IResolvable;
    /**
     * @Property policyType: The type of the policy
     */
    policyType: string | ros.IResolvable;
    /**
     * @Property principalName: The name of the object to which you want to attach the policy
     */
    principalName: string | ros.IResolvable;
    /**
     * @Property principalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
     */
    principalType: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPolicyAttachmentProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosResourceDirectory`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
 */
export interface RosResourceDirectoryProps {
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceDirectory`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceDirectory` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
 */
export declare class RosResourceDirectory extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceDirectory";
    /**
     * @Attribute MasterAccountId: The ID of the master account
     */
    readonly attrMasterAccountId: ros.IResolvable;
    /**
     * @Attribute MasterAccountName: The name of the master account
     */
    readonly attrMasterAccountName: ros.IResolvable;
    /**
     * @Attribute ResourceDirectoryId: The ID of the resource directory
     */
    readonly attrResourceDirectoryId: ros.IResolvable;
    /**
     * @Attribute RootFolderId: The ID of the root folder
     */
    readonly attrRootFolderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceDirectoryProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosResourceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
 */
export interface RosResourceGroupProps {
    /**
     * @Property displayName: The display name of the resource group
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * @Property name: The unique identifier of the resource group
     */
    readonly name: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
 */
export declare class RosResourceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceGroup";
    /**
     * @Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs
     */
    readonly attrAccountId: ros.IResolvable;
    /**
     * @Attribute DisplayName: The display name of the resource group
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * @Attribute Id: The ID of the resource group
     */
    readonly attrId: ros.IResolvable;
    /**
     * @Attribute Name: The unique identifier of the resource group
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute RegionStatuses: The status of the resource group in all regions
     */
    readonly attrRegionStatuses: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property displayName: The display name of the resource group
     */
    displayName: string | ros.IResolvable;
    /**
     * @Property name: The unique identifier of the resource group
     */
    name: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosResourceShare`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare
 */
export interface RosResourceShareProps {
    /**
     * @Property resourceShareName: The name of the resource share.
     * The name must be 1 to 50 characters in length.
     * It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    readonly resourceShareName: string | ros.IResolvable;
    /**
     * @Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory. Value:
     * false (default): Only allow sharing within the resource directory.
     * true: Allow sharing to any account.
     */
    readonly allowExternalTargets?: boolean | ros.IResolvable;
    /**
     * @Property permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
     */
    readonly permissionNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resources:
     */
    readonly resources?: Array<RosResourceShare.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property targets: The shared target.
     * A shared target shares the resources of resource owners. You can share your resources
     * only with the member accounts in your resource directory. A shared target is indicated
     * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
     */
    readonly targets?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceShare`, which is used to create a resource share.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceShare` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare
 */
export declare class RosResourceShare extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceShare";
    /**
     * @Attribute ResourceShareId: The ID of the resource share.
     */
    readonly attrResourceShareId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceShareName: The name of the resource share.
     * The name must be 1 to 50 characters in length.
     * It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    resourceShareName: string | ros.IResolvable;
    /**
     * @Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory. Value:
     * false (default): Only allow sharing within the resource directory.
     * true: Allow sharing to any account.
     */
    allowExternalTargets: boolean | ros.IResolvable | undefined;
    /**
     * @Property permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
     */
    permissionNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resources:
     */
    resources: Array<RosResourceShare.ResourcesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property targets: The shared target.
     * A shared target shares the resources of resource owners. You can share your resources
     * only with the member accounts in your resource directory. A shared target is indicated
     * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
     */
    targets: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceShareProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosResourceShare {
    /**
     * @stability external
     */
    interface ResourcesProperty {
        /**
         * @Property resourceId: The ID of the shared resource.
         */
        readonly resourceId: string | ros.IResolvable;
        /**
         * @Property resourceType: The type of the shared resource.
     * Support resource type include:
     * VPC: VSwitch, PrefixList, PublicIpAddressPool
     * ROS: ROSTemplate
     * ServiceCatalog: ServiceCatalogPortfolio
     * ECS: Image, Snapshot
     * KMS: KMSInstance
         */
        readonly resourceType: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosResourceShareAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
 */
export interface RosResourceShareAssociationProps {
    /**
     * @Property resourceShareId: The ID of the resource share.
     */
    readonly resourceShareId: string | ros.IResolvable;
    /**
     * @Property permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
     */
    readonly permissionNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resources:
     */
    readonly resources?: Array<RosResourceShareAssociation.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property targets: The shared target.
     * A shared target shares the resources of resource owners. You can share your resources
     * only with the member accounts in your resource directory. A shared target is indicated
     * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
     */
    readonly targets?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceShareAssociation`, which is used to associate a shared resource or a resource user.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceShareAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
 */
export declare class RosResourceShareAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceShareAssociation";
    /**
     * @Attribute ResourceShareId: The ID of the resource share.
     */
    readonly attrResourceShareId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceShareId: The ID of the resource share.
     */
    resourceShareId: string | ros.IResolvable;
    /**
     * @Property permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
     */
    permissionNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resources:
     */
    resources: Array<RosResourceShareAssociation.ResourcesProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property targets: The shared target.
     * A shared target shares the resources of resource owners. You can share your resources
     * only with the member accounts in your resource directory. A shared target is indicated
     * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
     */
    targets: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceShareAssociationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosResourceShareAssociation {
    /**
     * @stability external
     */
    interface ResourcesProperty {
        /**
         * @Property resourceId: The ID of the shared resource.
         */
        readonly resourceId: string | ros.IResolvable;
        /**
         * @Property resourceType: The type of the shared resource.
     * Support resource type include:
     * VPC: VSwitch, PrefixList, PublicIpAddressPool
     * ROS: ROSTemplate
     * ServiceCatalog: ServiceCatalogPortfolio
     * ECS: Image, Snapshot
     * KMS: KMSInstance
         */
        readonly resourceType: string | ros.IResolvable;
    }
}
