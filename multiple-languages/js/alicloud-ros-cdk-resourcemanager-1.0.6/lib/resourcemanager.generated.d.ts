import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ResourceManager::Account`
 */
export interface RosAccountProps {
    /**
     * @Property displayName: Member name
     */
    readonly displayName: string | ros.IResolvable;
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
 * A ROS template type:  `ALIYUN::ResourceManager::Account`
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Account";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property folderId: The ID of the parent folder
     */
    folderId: string | ros.IResolvable | undefined;
    /**
     * @Property payerAccountId:
     */
    payerAccountId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::ResourceManager::Account`.
     *
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
 * Properties for defining a `ALIYUN::ResourceManager::ControlPolicy`
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
 * A ROS template type:  `ALIYUN::ResourceManager::ControlPolicy`
 */
export declare class RosControlPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ControlPolicy";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::ResourceManager::ControlPolicy`.
     *
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
 * Properties for defining a `ALIYUN::ResourceManager::ControlPolicyAttachment`
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
 * A ROS template type:  `ALIYUN::ResourceManager::ControlPolicyAttachment`
 */
export declare class RosControlPolicyAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ControlPolicyAttachment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::ResourceManager::ControlPolicyAttachment`.
     *
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
 * Properties for defining a `ALIYUN::ResourceManager::Folder`
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
 * A ROS template type:  `ALIYUN::ResourceManager::Folder`
 */
export declare class RosFolder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Folder";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::ResourceManager::Folder`.
     *
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
 * Properties for defining a `ALIYUN::ResourceManager::Handshake`
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
 * A ROS template type:  `ALIYUN::ResourceManager::Handshake`
 */
export declare class RosHandshake extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Handshake";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::ResourceManager::Handshake`.
     *
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
 * Properties for defining a `ALIYUN::ResourceManager::PolicyAttachment`
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
    readonly resourceGroupId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::ResourceManager::PolicyAttachment`
 */
export declare class RosPolicyAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::PolicyAttachment";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
    resourceGroupId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::ResourceManager::PolicyAttachment`.
     *
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
 * Properties for defining a `ALIYUN::ResourceManager::ResourceDirectory`
 */
export interface RosResourceDirectoryProps {
}
/**
 * A ROS template type:  `ALIYUN::ResourceManager::ResourceDirectory`
 */
export declare class RosResourceDirectory extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceDirectory";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::ResourceManager::ResourceDirectory`.
     *
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
 * Properties for defining a `ALIYUN::ResourceManager::ResourceGroup`
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
 * A ROS template type:  `ALIYUN::ResourceManager::ResourceGroup`
 */
export declare class RosResourceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::ResourceManager::ResourceGroup`.
     *
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
 * Properties for defining a `ALIYUN::ResourceManager::ResourceShare`
 */
export interface RosResourceShareProps {
    /**
     * @Property resourceShareName: The name of the resource share.
     * The name must be 1 to 50 characters in length.
     * It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    readonly resourceShareName: string | ros.IResolvable;
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
 * A ROS template type:  `ALIYUN::ResourceManager::ResourceShare`
 */
export declare class RosResourceShare extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceShare";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::ResourceManager::ResourceShare`.
     *
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
     * Set the value to VSwitch.
     * Only the vSwitches in virtual private clouds (VPCs) can be shared.
         */
        readonly resourceType: string | ros.IResolvable;
    }
}
//# sourceMappingURL=resourcemanager.generated.d.ts.map