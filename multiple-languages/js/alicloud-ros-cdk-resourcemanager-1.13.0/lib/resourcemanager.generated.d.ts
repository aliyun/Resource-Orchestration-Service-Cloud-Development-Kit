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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ControlPolicy`.
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
 * Properties for defining a `RosDelegatedAdministrator`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
 */
export interface RosDelegatedAdministratorProps {
    /**
     * @Property accountId: The Alibaba Cloud account ID of the member in the resource directory.
     */
    readonly accountId: string | ros.IResolvable;
    /**
     * @Property servicePrincipal: The identifier of the trusted service.
     */
    readonly servicePrincipal: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::DelegatedAdministrator`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DelegatedAdministrator` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
 */
export declare class RosDelegatedAdministrator extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::DelegatedAdministrator";
    /**
     * @Attribute AccountId: The Alibaba Cloud account ID of the member in the resource directory.
     */
    readonly attrAccountId: ros.IResolvable;
    /**
     * @Attribute DelegationEnabledTime: Set as the timestamp of the delegated administrator account.
     */
    readonly attrDelegationEnabledTime: ros.IResolvable;
    /**
     * @Attribute ServicePrincipal: The identifier of the trusted service.
     */
    readonly attrServicePrincipal: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountId: The Alibaba Cloud account ID of the member in the resource directory.
     */
    accountId: string | ros.IResolvable;
    /**
     * @Property servicePrincipal: The identifier of the trusted service.
     */
    servicePrincipal: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDelegatedAdministratorProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDeliveryChannel`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
 */
export interface RosDeliveryChannelProps {
    /**
     * @Property deliveryChannelFilter: The effective scope of the delivery channel.
     */
    readonly deliveryChannelFilter: RosDeliveryChannel.DeliveryChannelFilterProperty | ros.IResolvable;
    /**
     * @Property deliveryChannelName: The name of the delivery channel.
     */
    readonly deliveryChannelName: string | ros.IResolvable;
    /**
     * @Property deliveryChannelDescription: The description of the delivery channel.
     */
    readonly deliveryChannelDescription?: string | ros.IResolvable;
    /**
     * @Property deliveryChannelId: The ID of the delivery channel.
     */
    readonly deliveryChannelId?: string | ros.IResolvable;
    /**
     * @Property enabledResourceChangeDelivery: Enable resource change delivery.
     */
    readonly enabledResourceChangeDelivery?: string | ros.IResolvable;
    /**
     * @Property enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
     */
    readonly enabledResourceSnapshotDelivery?: string | ros.IResolvable;
    /**
     * @Property resourceChangeDelivery: The delivery of resource configuration changes.
     */
    readonly resourceChangeDelivery?: RosDeliveryChannel.ResourceChangeDeliveryProperty | ros.IResolvable;
    /**
     * @Property resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
     */
    readonly resourceSnapshotDelivery?: RosDeliveryChannel.ResourceSnapshotDeliveryProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::DeliveryChannel`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeliveryChannel` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
 */
export declare class RosDeliveryChannel extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::DeliveryChannel";
    /**
     * @Attribute DeliveryChannelDescription: The description of the delivery channel.
     */
    readonly attrDeliveryChannelDescription: ros.IResolvable;
    /**
     * @Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
     */
    readonly attrDeliveryChannelFilter: ros.IResolvable;
    /**
     * @Attribute DeliveryChannelId: The ID of the delivery channel.
     */
    readonly attrDeliveryChannelId: ros.IResolvable;
    /**
     * @Attribute DeliveryChannelName: The name of the delivery channel.
     */
    readonly attrDeliveryChannelName: ros.IResolvable;
    /**
     * @Attribute ResourceChangeDelivery: The delivery of resource configuration changes.
     */
    readonly attrResourceChangeDelivery: ros.IResolvable;
    /**
     * @Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.
     */
    readonly attrResourceSnapshotDelivery: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property deliveryChannelFilter: The effective scope of the delivery channel.
     */
    deliveryChannelFilter: RosDeliveryChannel.DeliveryChannelFilterProperty | ros.IResolvable;
    /**
     * @Property deliveryChannelName: The name of the delivery channel.
     */
    deliveryChannelName: string | ros.IResolvable;
    /**
     * @Property deliveryChannelDescription: The description of the delivery channel.
     */
    deliveryChannelDescription: string | ros.IResolvable | undefined;
    /**
     * @Property deliveryChannelId: The ID of the delivery channel.
     */
    deliveryChannelId: string | ros.IResolvable | undefined;
    /**
     * @Property enabledResourceChangeDelivery: Enable resource change delivery.
     */
    enabledResourceChangeDelivery: string | ros.IResolvable | undefined;
    /**
     * @Property enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
     */
    enabledResourceSnapshotDelivery: string | ros.IResolvable | undefined;
    /**
     * @Property resourceChangeDelivery: The delivery of resource configuration changes.
     */
    resourceChangeDelivery: RosDeliveryChannel.ResourceChangeDeliveryProperty | ros.IResolvable | undefined;
    /**
     * @Property resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
     */
    resourceSnapshotDelivery: RosDeliveryChannel.ResourceSnapshotDeliveryProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeliveryChannelProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDeliveryChannel {
    /**
     * @stability external
     */
    interface DeliveryChannelFilterProperty {
        /**
         * @Property resourceTypes: The list of resource types to be delivered.
         */
        readonly resourceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property accountScopes: The accounts within the delivery scope.
         */
        readonly accountScopes?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosDeliveryChannel {
    /**
     * @stability external
     */
    interface ResourceChangeDeliveryProperty {
        /**
         * @Property slsProperties: The SLS configurations.
         */
        readonly slsProperties?: RosDeliveryChannel.SlsPropertiesProperty | ros.IResolvable;
        /**
         * @Property targetArn: The ARN of the destination. Valid values:
     * * If you set TargetType to OSS, set TargetArn to the ARN of an OSS bucket that has the resourcecenter- prefix.
     * * If you set TargetType to SLS, set TargetArn to the ARN of an SLS Logstore that has the resourcecenter- prefix.
         */
        readonly targetArn?: string | ros.IResolvable;
    }
}
export declare namespace RosDeliveryChannel {
    /**
     * @stability external
     */
    interface ResourceSnapshotDeliveryProperty {
        /**
         * @Property customExpression: The custom expression.
         */
        readonly customExpression?: string | ros.IResolvable;
        /**
         * @Property deliveryTime: The delivery time.
         */
        readonly deliveryTime?: string | ros.IResolvable;
        /**
         * @Property slsProperties: The SLS configurations.
         */
        readonly slsProperties?: RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty | ros.IResolvable;
        /**
         * @Property targetArn: The ARN of the destination.
         */
        readonly targetArn?: string | ros.IResolvable;
    }
}
export declare namespace RosDeliveryChannel {
    /**
     * @stability external
     */
    interface ResourceSnapshotDeliverySlsPropertiesProperty {
        /**
         * @Property oversizedDataOssTargetArn: The ARN of the destination OSS bucket for oversized files. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the resourcecenter- prefix.
         */
        readonly oversizedDataOssTargetArn?: string | ros.IResolvable;
    }
}
export declare namespace RosDeliveryChannel {
    /**
     * @stability external
     */
    interface SlsPropertiesProperty {
        /**
         * @Property oversizedDataOssTargetArn: The ARN of the destination OSS bucket for oversized files. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the resourcecenter- prefix.
         */
        readonly oversizedDataOssTargetArn?: string | ros.IResolvable;
    }
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::Folder`.
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
 * Properties for defining a `RosMessageContact`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
 */
export interface RosMessageContactProps {
    /**
     * @Property emailAddress: The email address of the contact.
     */
    readonly emailAddress: string | ros.IResolvable;
    /**
     * @Property messageContactName: The name of the contact. The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
     */
    readonly messageContactName: string | ros.IResolvable;
    /**
     * @Property messageTypes: The types of messages received by the contact.
     */
    readonly messageTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property title: The job title of the contact. Valid values:
     * * FinanceDirector.
     * * TechnicalDirector.
     * * MaintenanceDirector.
     * * CEO.
     * * ProjectDirector.
     * * Other.
     */
    readonly title: string | ros.IResolvable;
    /**
     * @Property phoneNumber: The mobile phone number of the contact.
     */
    readonly phoneNumber?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::MessageContact`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MessageContact` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
 */
export declare class RosMessageContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::MessageContact";
    /**
     * @Attribute CreateTime: Creation time of Message Contact.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute EmailAddress: The email address of the contact.
     */
    readonly attrEmailAddress: ros.IResolvable;
    /**
     * @Attribute MessageContactId: The ID of Message Contact.
     */
    readonly attrMessageContactId: ros.IResolvable;
    /**
     * @Attribute MessageContactName: The name of the contact.
     */
    readonly attrMessageContactName: ros.IResolvable;
    /**
     * @Attribute MessageTypes: The types of messages received by the contact.
     */
    readonly attrMessageTypes: ros.IResolvable;
    /**
     * @Attribute PhoneNumber: The mobile phone number of the contact.
     */
    readonly attrPhoneNumber: ros.IResolvable;
    /**
     * @Attribute Title: The job title of the contact.
     */
    readonly attrTitle: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property emailAddress: The email address of the contact.
     */
    emailAddress: string | ros.IResolvable;
    /**
     * @Property messageContactName: The name of the contact. The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
     */
    messageContactName: string | ros.IResolvable;
    /**
     * @Property messageTypes: The types of messages received by the contact.
     */
    messageTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property title: The job title of the contact. Valid values:
     * * FinanceDirector.
     * * TechnicalDirector.
     * * MaintenanceDirector.
     * * CEO.
     * * ProjectDirector.
     * * Other.
     */
    title: string | ros.IResolvable;
    /**
     * @Property phoneNumber: The mobile phone number of the contact.
     */
    phoneNumber: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMessageContactProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosMultiAccountDeliveryChannel`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
 */
export interface RosMultiAccountDeliveryChannelProps {
    /**
     * @Property deliveryChannelDescription: The description of the delivery channel.
     */
    readonly deliveryChannelDescription: string | ros.IResolvable;
    /**
     * @Property deliveryChannelFilter: The effective scope of the delivery channel.
     */
    readonly deliveryChannelFilter: RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty | ros.IResolvable;
    /**
     * @Property multiAccountDeliveryChannelName: The name of the delivery channel.
     */
    readonly multiAccountDeliveryChannelName: string | ros.IResolvable;
    /**
     * @Property multiAccountDeliveryChannelId: Delivery Channel id.
     */
    readonly multiAccountDeliveryChannelId?: string | ros.IResolvable;
    /**
     * @Property resourceChangeDelivery: The configurations for delivery of resource configuration change events.
     */
    readonly resourceChangeDelivery?: RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty | ros.IResolvable;
    /**
     * @Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
     */
    readonly resourceSnapshotDelivery?: RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::MultiAccountDeliveryChannel`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MultiAccountDeliveryChannel` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
 */
export declare class RosMultiAccountDeliveryChannel extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::MultiAccountDeliveryChannel";
    /**
     * @Attribute DeliveryChannelDescription: The description of the delivery channel.
     */
    readonly attrDeliveryChannelDescription: ros.IResolvable;
    /**
     * @Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
     */
    readonly attrDeliveryChannelFilter: ros.IResolvable;
    /**
     * @Attribute MultiAccountDeliveryChannelId: The delivery channel ID.
     */
    readonly attrMultiAccountDeliveryChannelId: ros.IResolvable;
    /**
     * @Attribute MultiAccountDeliveryChannelName: The name of the delivery channel.
     */
    readonly attrMultiAccountDeliveryChannelName: ros.IResolvable;
    /**
     * @Attribute ResourceChangeDelivery: The configurations for delivery of resource configuration change events.
     */
    readonly attrResourceChangeDelivery: ros.IResolvable;
    /**
     * @Attribute ResourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
     */
    readonly attrResourceSnapshotDelivery: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property deliveryChannelDescription: The description of the delivery channel.
     */
    deliveryChannelDescription: string | ros.IResolvable;
    /**
     * @Property deliveryChannelFilter: The effective scope of the delivery channel.
     */
    deliveryChannelFilter: RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty | ros.IResolvable;
    /**
     * @Property multiAccountDeliveryChannelName: The name of the delivery channel.
     */
    multiAccountDeliveryChannelName: string | ros.IResolvable;
    /**
     * @Property multiAccountDeliveryChannelId: Delivery Channel id.
     */
    multiAccountDeliveryChannelId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceChangeDelivery: The configurations for delivery of resource configuration change events.
     */
    resourceChangeDelivery: RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty | ros.IResolvable | undefined;
    /**
     * @Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
     */
    resourceSnapshotDelivery: RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMultiAccountDeliveryChannelProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosMultiAccountDeliveryChannel {
    /**
     * @stability external
     */
    interface DeliveryChannelFilterProperty {
        /**
         * @Property resourceTypes: The effective resource type of the delivery channel.
         */
        readonly resourceTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property accountScopes: The account scopes of the delivery channel.
         */
        readonly accountScopes: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosMultiAccountDeliveryChannel {
    /**
     * @stability external
     */
    interface ResourceChangeDeliveryProperty {
        /**
         * @Property slsProperties: The SLS configurations.
         */
        readonly slsProperties?: RosMultiAccountDeliveryChannel.SlsPropertiesProperty | ros.IResolvable;
        /**
         * @Property targetArn: Target Arn.
         */
        readonly targetArn?: string | ros.IResolvable;
    }
}
export declare namespace RosMultiAccountDeliveryChannel {
    /**
     * @stability external
     */
    interface ResourceSnapshotDeliveryProperty {
        /**
         * @Property deliveryTime: The delivery time.
         */
        readonly deliveryTime?: string | ros.IResolvable;
        /**
         * @Property targetArn: The ARN of the delivery destination.
         */
        readonly targetArn?: string | ros.IResolvable;
    }
}
export declare namespace RosMultiAccountDeliveryChannel {
    /**
     * @stability external
     */
    interface SlsPropertiesProperty {
        /**
         * @Property oversizedDataOssTargetArn: The ARN of the delivery destination for oversized data. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. You must enter the ARN of an OSS bucket that has a prefix of resourcecenter-.
         */
        readonly oversizedDataOssTargetArn?: string | ros.IResolvable;
    }
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
     * @Property displayName: The display name of the resource group.
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * @Property name: The name of the resource group.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to resource group. Max support 20 tags to add during create resource group. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosResourceGroup.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceGroup`The , which resource type creates a resource group.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
 */
export declare class RosResourceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceGroup";
    /**
     * @Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.
     */
    readonly attrAccountId: ros.IResolvable;
    /**
     * @Attribute DisplayName: The display name of the resource group.
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * @Attribute Id: The ID of the resource group.
     */
    readonly attrId: ros.IResolvable;
    /**
     * @Attribute Name: The unique identifier of the resource group.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute RegionStatuses: The status of the resource group in all regions.
     */
    readonly attrRegionStatuses: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property displayName: The display name of the resource group.
     */
    displayName: string | ros.IResolvable;
    /**
     * @Property name: The name of the resource group.
     */
    name: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to resource group. Max support 20 tags to add during create resource group. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosResourceGroup.TagsProperty[] | undefined;
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
export declare namespace RosResourceGroup {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceShare`.
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceShareAssociation`.
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
/**
 * Properties for defining a `RosRole`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
 */
export interface RosRoleProps {
    /**
     * @Property assumeRolePolicyDocument: The content of the permissions strategy that plays a role.
     */
    readonly assumeRolePolicyDocument: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property roleName: Role Name.
     */
    readonly roleName: string | ros.IResolvable;
    /**
     * @Property description: The description of the Resource Manager role.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property maxSessionDuration: Role maximum session time. Valid values: [3600-43200]. Default to 3600.
     */
    readonly maxSessionDuration?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::Role`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Role` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
 */
export declare class RosRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Role";
    /**
     * @Attribute Arn: The resource descriptor of the role.
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.
     */
    readonly attrAssumeRolePolicyDocument: ros.IResolvable;
    /**
     * @Attribute CreateTime: Role creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the Resource Manager role.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute MaxSessionDuration: Role maximum session time. Valid values: [3600-43200].
     */
    readonly attrMaxSessionDuration: ros.IResolvable;
    /**
     * @Attribute RoleId: This ID of Resource Manager role.
     */
    readonly attrRoleId: ros.IResolvable;
    /**
     * @Attribute RoleName: Role Name.
     */
    readonly attrRoleName: ros.IResolvable;
    /**
     * @Attribute UpdateDate: Role update time.
     */
    readonly attrUpdateDate: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property assumeRolePolicyDocument: The content of the permissions strategy that plays a role.
     */
    assumeRolePolicyDocument: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property roleName: Role Name.
     */
    roleName: string | ros.IResolvable;
    /**
     * @Property description: The description of the Resource Manager role.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property maxSessionDuration: Role maximum session time. Valid values: [3600-43200]. Default to 3600.
     */
    maxSessionDuration: number | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosSavedQuery`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
 */
export interface RosSavedQueryProps {
    /**
     * @Property expression: The expression of the template.
     */
    readonly expression: string | ros.IResolvable;
    /**
     * @Property savedQueryName: The name of the template.
     * * The name must be 1 to 64 characters in length.
     * * The name can contain letters, digits, underscores (_), and hyphens (-).
     * * The template name must be unique.
     */
    readonly savedQueryName: string | ros.IResolvable;
    /**
     * @Property description: The description of the template. The description must be 1 to 256 characters in length.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::SavedQuery`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SavedQuery` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
 */
export declare class RosSavedQuery extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::SavedQuery";
    /**
     * @Attribute CreateTime: The creation time of the template.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the template.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute Expression: Query Expression of the template.
     */
    readonly attrExpression: ros.IResolvable;
    /**
     * @Attribute SavedQueryId: The id of the template.
     */
    readonly attrSavedQueryId: ros.IResolvable;
    /**
     * @Attribute SavedQueryName: The name of the template.
     */
    readonly attrSavedQueryName: ros.IResolvable;
    /**
     * @Attribute UpdateTime: Update time of the template.
     */
    readonly attrUpdateTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property expression: The expression of the template.
     */
    expression: string | ros.IResolvable;
    /**
     * @Property savedQueryName: The name of the template.
     * * The name must be 1 to 64 characters in length.
     * * The name can contain letters, digits, underscores (_), and hyphens (-).
     * * The template name must be unique.
     */
    savedQueryName: string | ros.IResolvable;
    /**
     * @Property description: The description of the template. The description must be 1 to 256 characters in length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSavedQueryProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSharedTarget`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
 */
export interface RosSharedTargetProps {
    /**
     * @Property resourceShareId: The ID of the resource share.
     */
    readonly resourceShareId: string | ros.IResolvable;
    /**
     * @Property targetId: The ID of the principal.
     */
    readonly targetId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::SharedTarget`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SharedTarget` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
 */
export declare class RosSharedTarget extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::SharedTarget";
    /**
     * @Attribute CreateTime: Create time of the resource share.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute ResourceShareId: The ID of the resource share.
     */
    readonly attrResourceShareId: ros.IResolvable;
    /**
     * @Attribute ResourceShareName: The name of the resource share.
     */
    readonly attrResourceShareName: ros.IResolvable;
    /**
     * @Attribute TargetId: The ID of the principal.
     */
    readonly attrTargetId: ros.IResolvable;
    /**
     * @Attribute UpdateTime: Update time of the resource share.
     */
    readonly attrUpdateTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceShareId: The ID of the resource share.
     */
    resourceShareId: string | ros.IResolvable;
    /**
     * @Property targetId: The ID of the principal.
     */
    targetId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSharedTargetProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
