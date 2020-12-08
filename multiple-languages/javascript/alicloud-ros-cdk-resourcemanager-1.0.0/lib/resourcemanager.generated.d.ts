import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::ResourceManager::Account`
 */
export interface RosAccountProps {
    /**
     * @Property displayName: Member name
     */
    readonly displayName: string;
    /**
     * @Property folderId: The ID of the parent folder
     */
    readonly folderId?: string;
    /**
     * @Property payerAccountId:
     */
    readonly payerAccountId?: string;
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
    readonly attrAccountId: any;
    /**
     * @Attribute DisplayName: Member name
     */
    readonly attrDisplayName: any;
    /**
     * @Attribute FolderId: The ID of the parent folder
     */
    readonly attrFolderId: any;
    /**
     * @Attribute JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
     */
    readonly attrJoinMethod: any;
    /**
     * @Attribute ResourceDirectoryId: Resource directory ID
     */
    readonly attrResourceDirectoryId: any;
    /**
     * @Attribute Type: Member type. The value of ResourceAccount indicates the resource account
     */
    readonly attrType: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property displayName: Member name
     */
    displayName: string;
    /**
     * @Property folderId: The ID of the parent folder
     */
    folderId: string | undefined;
    /**
     * @Property payerAccountId:
     */
    payerAccountId: string | undefined;
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
 * Properties for defining a `ALIYUN::ResourceManager::Folder`
 */
export interface RosFolderProps {
    /**
     * @Property folderName: The name of the folder
     */
    readonly folderName: string;
    /**
     * @Property parentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    readonly parentFolderId?: string;
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
    readonly attrFolderId: any;
    /**
     * @Attribute FolderName: The name of the folder
     */
    readonly attrFolderName: any;
    /**
     * @Attribute ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    readonly attrParentFolderId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property folderName: The name of the folder
     */
    folderName: string;
    /**
     * @Property parentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    parentFolderId: string | undefined;
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
    readonly targetEntity: string;
    /**
     * @Property targetType: Type of account being invited. Valid values: Account, Email
     */
    readonly targetType: string;
    /**
     * @Property note: Remarks
     */
    readonly note?: string;
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
    readonly attrHandshakeId: any;
    /**
     * @Attribute MasterAccountId: Resource account master account ID
     */
    readonly attrMasterAccountId: any;
    /**
     * @Attribute MasterAccountName: The name of the main account of the resource directory
     */
    readonly attrMasterAccountName: any;
    /**
     * @Attribute Note: Remarks
     */
    readonly attrNote: any;
    /**
     * @Attribute ResourceDirectoryId: Resource directory ID
     */
    readonly attrResourceDirectoryId: any;
    /**
     * @Attribute TargetEntity: Invited account ID or login email
     */
    readonly attrTargetEntity: any;
    /**
     * @Attribute TargetType: Type of account being invited. Valid values: Account, Email
     */
    readonly attrTargetType: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property targetEntity: Invited account ID or login email
     */
    targetEntity: string;
    /**
     * @Property targetType: Type of account being invited. Valid values: Account, Email
     */
    targetType: string;
    /**
     * @Property note: Remarks
     */
    note: string | undefined;
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
    readonly attrMasterAccountId: any;
    /**
     * @Attribute MasterAccountName: The name of the master account
     */
    readonly attrMasterAccountName: any;
    /**
     * @Attribute ResourceDirectoryId: The ID of the resource directory
     */
    readonly attrResourceDirectoryId: any;
    /**
     * @Attribute RootFolderId: The ID of the root folder
     */
    readonly attrRootFolderId: any;
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
    readonly displayName: string;
    /**
     * @Property name: The unique identifier of the resource group
     */
    readonly name: string;
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
    readonly attrAccountId: any;
    /**
     * @Attribute CreateDate: The time when the resource group was created
     */
    readonly attrCreateDate: any;
    /**
     * @Attribute DisplayName: The display name of the resource group
     */
    readonly attrDisplayName: any;
    /**
     * @Attribute Id: The ID of the resource group
     */
    readonly attrId: any;
    /**
     * @Attribute Name: The unique identifier of the resource group
     */
    readonly attrName: any;
    /**
     * @Attribute RegionStatuses: The status of the resource group in all regions
     */
    readonly attrRegionStatuses: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property displayName: The display name of the resource group
     */
    displayName: string;
    /**
     * @Property name: The unique identifier of the resource group
     */
    name: string;
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
