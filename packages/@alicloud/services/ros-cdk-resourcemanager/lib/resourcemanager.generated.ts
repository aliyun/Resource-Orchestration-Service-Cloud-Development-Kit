// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('payerAccountId', ros.validateString)(properties.payerAccountId));
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('folderId', ros.validateString)(properties.folderId));
    errors.collect(ros.propertyValidator('deleteAccount', ros.validateBoolean)(properties.deleteAccount));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      DisplayName: ros.stringToRosTemplate(properties.displayName),
      DeleteAccount: ros.booleanToRosTemplate(properties.deleteAccount),
      FolderId: ros.stringToRosTemplate(properties.folderId),
      PayerAccountId: ros.stringToRosTemplate(properties.payerAccountId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::Account`, which is used to create a member of the resource account type.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Account";

    /**
     * @Attribute AccountId: This ID of Resource Manager Account
     */
    public readonly attrAccountId: ros.IResolvable;

    /**
     * @Attribute DisplayName: Member name
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * @Attribute FolderId: The ID of the parent folder
     */
    public readonly attrFolderId: ros.IResolvable;

    /**
     * @Attribute JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
     */
    public readonly attrJoinMethod: ros.IResolvable;

    /**
     * @Attribute ResourceDirectoryId: Resource directory ID
     */
    public readonly attrResourceDirectoryId: ros.IResolvable;

    /**
     * @Attribute Type: Member type. The value of ResourceAccount indicates the resource account
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property displayName: Member name
     */
    public displayName: string | ros.IResolvable;

    /**
     * @Property deleteAccount: Whether delete the account. Default value is false.
     */
    public deleteAccount: boolean | ros.IResolvable | undefined;

    /**
     * @Property folderId: The ID of the parent folder
     */
    public folderId: string | ros.IResolvable | undefined;

    /**
     * @Property payerAccountId:
     */
    public payerAccountId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountId = this.getAtt('AccountId');
        this.attrDisplayName = this.getAtt('DisplayName');
        this.attrFolderId = this.getAtt('FolderId');
        this.attrJoinMethod = this.getAtt('JoinMethod');
        this.attrResourceDirectoryId = this.getAtt('ResourceDirectoryId');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.displayName = props.displayName;
        this.deleteAccount = props.deleteAccount;
        this.folderId = props.folderId;
        this.payerAccountId = props.payerAccountId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            displayName: this.displayName,
            deleteAccount: this.deleteAccount,
            folderId: this.folderId,
            payerAccountId: this.payerAccountId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosControlPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosControlPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosControlPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policyDocument', ros.requiredValidator)(properties.policyDocument));
    errors.collect(ros.propertyValidator('policyDocument', ros.validateString)(properties.policyDocument));
    errors.collect(ros.propertyValidator('controlPolicyName', ros.requiredValidator)(properties.controlPolicyName));
    errors.collect(ros.propertyValidator('controlPolicyName', ros.validateString)(properties.controlPolicyName));
    errors.collect(ros.propertyValidator('effectScope', ros.requiredValidator)(properties.effectScope));
    errors.collect(ros.propertyValidator('effectScope', ros.validateString)(properties.effectScope));
    return errors.wrap('supplied properties not correct for "RosControlPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ControlPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosControlPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ControlPolicy` resource.
 */
// @ts-ignore TS6133
function rosControlPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosControlPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      ControlPolicyName: ros.stringToRosTemplate(properties.controlPolicyName),
      EffectScope: ros.stringToRosTemplate(properties.effectScope),
      PolicyDocument: ros.stringToRosTemplate(properties.policyDocument),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ControlPolicy`, which is used to create a custom control policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `ControlPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
 */
export class RosControlPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ControlPolicy";

    /**
     * @Attribute AttachmentCount: AttachmentCount
     */
    public readonly attrAttachmentCount: ros.IResolvable;

    /**
     * @Attribute ControlPolicyName: PolicyName
     */
    public readonly attrControlPolicyName: ros.IResolvable;

    /**
     * @Attribute Description: Description
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute EffectScope: EffectScope
     */
    public readonly attrEffectScope: ros.IResolvable;

    /**
     * @Attribute PolicyDocument: PolicyDocument
     */
    public readonly attrPolicyDocument: ros.IResolvable;

    /**
     * @Attribute PolicyId: PolicyId
     */
    public readonly attrPolicyId: ros.IResolvable;

    /**
     * @Attribute PolicyType: PolicyType
     */
    public readonly attrPolicyType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property controlPolicyName: PolicyName
     */
    public controlPolicyName: string | ros.IResolvable;

    /**
     * @Property effectScope: EffectScope
     */
    public effectScope: string | ros.IResolvable;

    /**
     * @Property policyDocument: PolicyDocument
     */
    public policyDocument: string | ros.IResolvable;

    /**
     * @Property description: Description
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosControlPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosControlPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAttachmentCount = this.getAtt('AttachmentCount');
        this.attrControlPolicyName = this.getAtt('ControlPolicyName');
        this.attrDescription = this.getAtt('Description');
        this.attrEffectScope = this.getAtt('EffectScope');
        this.attrPolicyDocument = this.getAtt('PolicyDocument');
        this.attrPolicyId = this.getAtt('PolicyId');
        this.attrPolicyType = this.getAtt('PolicyType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.controlPolicyName = props.controlPolicyName;
        this.effectScope = props.effectScope;
        this.policyDocument = props.policyDocument;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            controlPolicyName: this.controlPolicyName,
            effectScope: this.effectScope,
            policyDocument: this.policyDocument,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosControlPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosControlPolicyAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosControlPolicyAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosControlPolicyAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('targetId', ros.requiredValidator)(properties.targetId));
    errors.collect(ros.propertyValidator('targetId', ros.validateString)(properties.targetId));
    errors.collect(ros.propertyValidator('policyId', ros.requiredValidator)(properties.policyId));
    errors.collect(ros.propertyValidator('policyId', ros.validateString)(properties.policyId));
    return errors.wrap('supplied properties not correct for "RosControlPolicyAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ControlPolicyAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosControlPolicyAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ControlPolicyAttachment` resource.
 */
// @ts-ignore TS6133
function rosControlPolicyAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosControlPolicyAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      PolicyId: ros.stringToRosTemplate(properties.policyId),
      TargetId: ros.stringToRosTemplate(properties.targetId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ControlPolicyAttachment`, which is used to attach a custom control policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `ControlPolicyAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment
 */
export class RosControlPolicyAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ControlPolicyAttachment";

    /**
     * @Attribute AttachDate: AttachDate
     */
    public readonly attrAttachDate: ros.IResolvable;

    /**
     * @Attribute Description: Description
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute PolicyId: PolicyId
     */
    public readonly attrPolicyId: ros.IResolvable;

    /**
     * @Attribute PolicyName: PolicyName
     */
    public readonly attrPolicyName: ros.IResolvable;

    /**
     * @Attribute PolicyType: PolicyType
     */
    public readonly attrPolicyType: ros.IResolvable;

    /**
     * @Attribute TargetId: TargetId
     */
    public readonly attrTargetId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyId: PolicyId
     */
    public policyId: string | ros.IResolvable;

    /**
     * @Property targetId: TargetId
     */
    public targetId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosControlPolicyAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosControlPolicyAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAttachDate = this.getAtt('AttachDate');
        this.attrDescription = this.getAtt('Description');
        this.attrPolicyId = this.getAtt('PolicyId');
        this.attrPolicyName = this.getAtt('PolicyName');
        this.attrPolicyType = this.getAtt('PolicyType');
        this.attrTargetId = this.getAtt('TargetId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyId = props.policyId;
        this.targetId = props.targetId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyId: this.policyId,
            targetId: this.targetId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosControlPolicyAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
 * Determine whether the given properties match those of a `RosFolderProps`
 *
 * @param properties - the TypeScript properties of a `RosFolderProps`
 *
 * @returns the result of the validation.
 */
function RosFolderPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('folderName', ros.requiredValidator)(properties.folderName));
    errors.collect(ros.propertyValidator('folderName', ros.validateString)(properties.folderName));
    errors.collect(ros.propertyValidator('parentFolderId', ros.validateString)(properties.parentFolderId));
    return errors.wrap('supplied properties not correct for "RosFolderProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Folder` resource
 *
 * @param properties - the TypeScript properties of a `RosFolderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Folder` resource.
 */
// @ts-ignore TS6133
function rosFolderPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFolderPropsValidator(properties).assertSuccess();
    }
    return {
      FolderName: ros.stringToRosTemplate(properties.folderName),
      ParentFolderId: ros.stringToRosTemplate(properties.parentFolderId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::Folder`, which is used to create a folder.
 * @Note This class does not contain additional functions, so it is recommended to use the `Folder` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder
 */
export class RosFolder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Folder";

    /**
     * @Attribute FolderId: The ID of the folder
     */
    public readonly attrFolderId: ros.IResolvable;

    /**
     * @Attribute FolderName: The name of the folder
     */
    public readonly attrFolderName: ros.IResolvable;

    /**
     * @Attribute ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    public readonly attrParentFolderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property folderName: The name of the folder
     */
    public folderName: string | ros.IResolvable;

    /**
     * @Property parentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    public parentFolderId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFolderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFolder.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFolderId = this.getAtt('FolderId');
        this.attrFolderName = this.getAtt('FolderName');
        this.attrParentFolderId = this.getAtt('ParentFolderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.folderName = props.folderName;
        this.parentFolderId = props.parentFolderId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            folderName: this.folderName,
            parentFolderId: this.parentFolderId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFolderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosHandshakeProps`
 *
 * @param properties - the TypeScript properties of a `RosHandshakeProps`
 *
 * @returns the result of the validation.
 */
function RosHandshakePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('note', ros.validateString)(properties.note));
    errors.collect(ros.propertyValidator('targetType', ros.requiredValidator)(properties.targetType));
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    errors.collect(ros.propertyValidator('targetEntity', ros.requiredValidator)(properties.targetEntity));
    errors.collect(ros.propertyValidator('targetEntity', ros.validateString)(properties.targetEntity));
    return errors.wrap('supplied properties not correct for "RosHandshakeProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Handshake` resource
 *
 * @param properties - the TypeScript properties of a `RosHandshakeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Handshake` resource.
 */
// @ts-ignore TS6133
function rosHandshakePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHandshakePropsValidator(properties).assertSuccess();
    }
    return {
      TargetEntity: ros.stringToRosTemplate(properties.targetEntity),
      TargetType: ros.stringToRosTemplate(properties.targetType),
      Note: ros.stringToRosTemplate(properties.note),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::Handshake`, which is used to create an invitation.
 * @Note This class does not contain additional functions, so it is recommended to use the `Handshake` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-handshake
 */
export class RosHandshake extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Handshake";

    /**
     * @Attribute HandshakeId: This ID of Resource Manager handshake
     */
    public readonly attrHandshakeId: ros.IResolvable;

    /**
     * @Attribute MasterAccountId: Resource account master account ID
     */
    public readonly attrMasterAccountId: ros.IResolvable;

    /**
     * @Attribute MasterAccountName: The name of the main account of the resource directory
     */
    public readonly attrMasterAccountName: ros.IResolvable;

    /**
     * @Attribute Note: Remarks
     */
    public readonly attrNote: ros.IResolvable;

    /**
     * @Attribute ResourceDirectoryId: Resource directory ID
     */
    public readonly attrResourceDirectoryId: ros.IResolvable;

    /**
     * @Attribute TargetEntity: Invited account ID or login email
     */
    public readonly attrTargetEntity: ros.IResolvable;

    /**
     * @Attribute TargetType: Type of account being invited. Valid values: Account, Email
     */
    public readonly attrTargetType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property targetEntity: Invited account ID or login email
     */
    public targetEntity: string | ros.IResolvable;

    /**
     * @Property targetType: Type of account being invited. Valid values: Account, Email
     */
    public targetType: string | ros.IResolvable;

    /**
     * @Property note: Remarks
     */
    public note: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHandshakeProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHandshake.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHandshakeId = this.getAtt('HandshakeId');
        this.attrMasterAccountId = this.getAtt('MasterAccountId');
        this.attrMasterAccountName = this.getAtt('MasterAccountName');
        this.attrNote = this.getAtt('Note');
        this.attrResourceDirectoryId = this.getAtt('ResourceDirectoryId');
        this.attrTargetEntity = this.getAtt('TargetEntity');
        this.attrTargetType = this.getAtt('TargetType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.targetEntity = props.targetEntity;
        this.targetType = props.targetType;
        this.note = props.note;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            targetEntity: this.targetEntity,
            targetType: this.targetType,
            note: this.note,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHandshakePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
 * Determine whether the given properties match those of a `RosPolicyAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosPolicyAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosPolicyAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policyType', ros.requiredValidator)(properties.policyType));
    errors.collect(ros.propertyValidator('policyType', ros.validateString)(properties.policyType));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('policyName', ros.requiredValidator)(properties.policyName));
    errors.collect(ros.propertyValidator('policyName', ros.validateString)(properties.policyName));
    errors.collect(ros.propertyValidator('principalName', ros.requiredValidator)(properties.principalName));
    errors.collect(ros.propertyValidator('principalName', ros.validateString)(properties.principalName));
    errors.collect(ros.propertyValidator('principalType', ros.requiredValidator)(properties.principalType));
    errors.collect(ros.propertyValidator('principalType', ros.validateString)(properties.principalType));
    return errors.wrap('supplied properties not correct for "RosPolicyAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::PolicyAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosPolicyAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::PolicyAttachment` resource.
 */
// @ts-ignore TS6133
function rosPolicyAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPolicyAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      PolicyName: ros.stringToRosTemplate(properties.policyName),
      PolicyType: ros.stringToRosTemplate(properties.policyType),
      PrincipalName: ros.stringToRosTemplate(properties.principalName),
      PrincipalType: ros.stringToRosTemplate(properties.principalType),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::PolicyAttachment`, which is used to attach a policy to an object. After you attach a policy to an object, the object has the permissions to manage the resources in the current resource group or within the current Alibaba Cloud account.
 * @Note This class does not contain additional functions, so it is recommended to use the `PolicyAttachment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-policyattachment
 */
export class RosPolicyAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::PolicyAttachment";

    /**
     * @Attribute AttachDate: Authorization time
     */
    public readonly attrAttachDate: ros.IResolvable;

    /**
     * @Attribute Description: Policy description
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute PolicyName: The name of the policy
     */
    public readonly attrPolicyName: ros.IResolvable;

    /**
     * @Attribute PolicyType: The type of the policy
     */
    public readonly attrPolicyType: ros.IResolvable;

    /**
     * @Attribute PrincipalName: The name of the object to which you want to attach the policy
     */
    public readonly attrPrincipalName: ros.IResolvable;

    /**
     * @Attribute PrincipalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
     */
    public readonly attrPrincipalType: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property policyName: The name of the policy
     */
    public policyName: string | ros.IResolvable;

    /**
     * @Property policyType: The type of the policy
     */
    public policyType: string | ros.IResolvable;

    /**
     * @Property principalName: The name of the object to which you want to attach the policy
     */
    public principalName: string | ros.IResolvable;

    /**
     * @Property principalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
     */
    public principalType: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPolicyAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPolicyAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAttachDate = this.getAtt('AttachDate');
        this.attrDescription = this.getAtt('Description');
        this.attrPolicyName = this.getAtt('PolicyName');
        this.attrPolicyType = this.getAtt('PolicyType');
        this.attrPrincipalName = this.getAtt('PrincipalName');
        this.attrPrincipalType = this.getAtt('PrincipalType');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.policyName = props.policyName;
        this.policyType = props.policyType;
        this.principalName = props.principalName;
        this.principalType = props.principalType;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            policyName: this.policyName,
            policyType: this.policyType,
            principalName: this.principalName,
            principalType: this.principalType,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPolicyAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosResourceDirectory`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
 */
export interface RosResourceDirectoryProps {
}

/**
 * Determine whether the given properties match those of a `RosResourceDirectoryProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceDirectoryProps`
 *
 * @returns the result of the validation.
 */
function RosResourceDirectoryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    return errors.wrap('supplied properties not correct for "RosResourceDirectoryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceDirectory` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceDirectoryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceDirectory` resource.
 */
// @ts-ignore TS6133
function rosResourceDirectoryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceDirectoryPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceDirectory`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceDirectory` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
 */
export class RosResourceDirectory extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceDirectory";

    /**
     * @Attribute MasterAccountId: The ID of the master account
     */
    public readonly attrMasterAccountId: ros.IResolvable;

    /**
     * @Attribute MasterAccountName: The name of the master account
     */
    public readonly attrMasterAccountName: ros.IResolvable;

    /**
     * @Attribute ResourceDirectoryId: The ID of the resource directory
     */
    public readonly attrResourceDirectoryId: ros.IResolvable;

    /**
     * @Attribute RootFolderId: The ID of the root folder
     */
    public readonly attrRootFolderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceDirectoryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceDirectory.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMasterAccountId = this.getAtt('MasterAccountId');
        this.attrMasterAccountName = this.getAtt('MasterAccountName');
        this.attrResourceDirectoryId = this.getAtt('ResourceDirectoryId');
        this.attrRootFolderId = this.getAtt('RootFolderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceDirectoryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosResourceGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the result of the validation.
 */
function RosResourceGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosResourceGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceGroup` resource.
 */
// @ts-ignore TS6133
function rosResourceGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceGroupPropsValidator(properties).assertSuccess();
    }
    return {
      DisplayName: ros.stringToRosTemplate(properties.displayName),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
 */
export class RosResourceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceGroup";

    /**
     * @Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs
     */
    public readonly attrAccountId: ros.IResolvable;

    /**
     * @Attribute DisplayName: The display name of the resource group
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * @Attribute Id: The ID of the resource group
     */
    public readonly attrId: ros.IResolvable;

    /**
     * @Attribute Name: The unique identifier of the resource group
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute RegionStatuses: The status of the resource group in all regions
     */
    public readonly attrRegionStatuses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property displayName: The display name of the resource group
     */
    public displayName: string | ros.IResolvable;

    /**
     * @Property name: The unique identifier of the resource group
     */
    public name: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountId = this.getAtt('AccountId');
        this.attrDisplayName = this.getAtt('DisplayName');
        this.attrId = this.getAtt('Id');
        this.attrName = this.getAtt('Name');
        this.attrRegionStatuses = this.getAtt('RegionStatuses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.displayName = props.displayName;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            displayName: this.displayName,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
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
 * Determine whether the given properties match those of a `RosResourceShareProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceShareProps`
 *
 * @returns the result of the validation.
 */
function RosResourceSharePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceShareName', ros.requiredValidator)(properties.resourceShareName));
    if(properties.resourceShareName && (typeof properties.resourceShareName) !== 'object') {
        errors.collect(ros.propertyValidator('resourceShareName', ros.validateAllowedPattern)({
          data: properties.resourceShareName,
          reg: /[-a-zA-Z0-9_\.]{1,50}/
        }));
    }
    errors.collect(ros.propertyValidator('resourceShareName', ros.validateString)(properties.resourceShareName));
    errors.collect(ros.propertyValidator('allowExternalTargets', ros.validateBoolean)(properties.allowExternalTargets));
    if(properties.targets && (Array.isArray(properties.targets) || (typeof properties.targets) === 'string')) {
        errors.collect(ros.propertyValidator('targets', ros.validateLength)({
            data: properties.targets.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('targets', ros.listValidator(ros.validateString))(properties.targets));
    if(properties.resources && (Array.isArray(properties.resources) || (typeof properties.resources) === 'string')) {
        errors.collect(ros.propertyValidator('resources', ros.validateLength)({
            data: properties.resources.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('resources', ros.listValidator(RosResourceShare_ResourcesPropertyValidator))(properties.resources));
    if(properties.permissionNames && (Array.isArray(properties.permissionNames) || (typeof properties.permissionNames) === 'string')) {
        errors.collect(ros.propertyValidator('permissionNames', ros.validateLength)({
            data: properties.permissionNames.length,
            min: undefined,
            max: 6,
          }));
    }
    errors.collect(ros.propertyValidator('permissionNames', ros.listValidator(ros.validateString))(properties.permissionNames));
    return errors.wrap('supplied properties not correct for "RosResourceShareProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceShare` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceShareProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceShare` resource.
 */
// @ts-ignore TS6133
function rosResourceSharePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceSharePropsValidator(properties).assertSuccess();
    }
    return {
      ResourceShareName: ros.stringToRosTemplate(properties.resourceShareName),
      AllowExternalTargets: ros.booleanToRosTemplate(properties.allowExternalTargets),
      PermissionNames: ros.listMapper(ros.stringToRosTemplate)(properties.permissionNames),
      Resources: ros.listMapper(rosResourceShareResourcesPropertyToRosTemplate)(properties.resources),
      Targets: ros.listMapper(ros.stringToRosTemplate)(properties.targets),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceShare`, which is used to create a resource share.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceShare` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare
 */
export class RosResourceShare extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceShare";

    /**
     * @Attribute ResourceShareId: The ID of the resource share.
     */
    public readonly attrResourceShareId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property resourceShareName: The name of the resource share.
     * The name must be 1 to 50 characters in length.
     * It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    public resourceShareName: string | ros.IResolvable;

    /**
     * @Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory. Value:
     * false (default): Only allow sharing within the resource directory.
     * true: Allow sharing to any account.
     */
    public allowExternalTargets: boolean | ros.IResolvable | undefined;

    /**
     * @Property permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
     */
    public permissionNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property resources:
     */
    public resources: Array<RosResourceShare.ResourcesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property targets: The shared target.
     * A shared target shares the resources of resource owners. You can share your resources
     * only with the member accounts in your resource directory. A shared target is indicated
     * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
     */
    public targets: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceShareProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceShare.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrResourceShareId = this.getAtt('ResourceShareId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceShareName = props.resourceShareName;
        this.allowExternalTargets = props.allowExternalTargets;
        this.permissionNames = props.permissionNames;
        this.resources = props.resources;
        this.targets = props.targets;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            resourceShareName: this.resourceShareName,
            allowExternalTargets: this.allowExternalTargets,
            permissionNames: this.permissionNames,
            resources: this.resources,
            targets: this.targets,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceSharePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosResourceShare {
    /**
     * @stability external
     */
    export interface ResourcesProperty {
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
 * Determine whether the given properties match those of a `ResourcesProperty`
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the result of the validation.
 */
function RosResourceShare_ResourcesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceId', ros.requiredValidator)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceType', ros.requiredValidator)(properties.resourceType));
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    return errors.wrap('supplied properties not correct for "ResourcesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceShare.Resources` resource
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceShare.Resources` resource.
 */
// @ts-ignore TS6133
function rosResourceShareResourcesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosResourceShare_ResourcesPropertyValidator(properties).assertSuccess();
    return {
      ResourceId: ros.stringToRosTemplate(properties.resourceId),
      ResourceType: ros.stringToRosTemplate(properties.resourceType),
    };
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
 * Determine whether the given properties match those of a `RosResourceShareAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceShareAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosResourceShareAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceShareId', ros.requiredValidator)(properties.resourceShareId));
    errors.collect(ros.propertyValidator('resourceShareId', ros.validateString)(properties.resourceShareId));
    if(properties.targets && (Array.isArray(properties.targets) || (typeof properties.targets) === 'string')) {
        errors.collect(ros.propertyValidator('targets', ros.validateLength)({
            data: properties.targets.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('targets', ros.listValidator(ros.validateString))(properties.targets));
    if(properties.resources && (Array.isArray(properties.resources) || (typeof properties.resources) === 'string')) {
        errors.collect(ros.propertyValidator('resources', ros.validateLength)({
            data: properties.resources.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('resources', ros.listValidator(RosResourceShareAssociation_ResourcesPropertyValidator))(properties.resources));
    if(properties.permissionNames && (Array.isArray(properties.permissionNames) || (typeof properties.permissionNames) === 'string')) {
        errors.collect(ros.propertyValidator('permissionNames', ros.validateLength)({
            data: properties.permissionNames.length,
            min: undefined,
            max: 6,
          }));
    }
    errors.collect(ros.propertyValidator('permissionNames', ros.listValidator(ros.validateString))(properties.permissionNames));
    return errors.wrap('supplied properties not correct for "RosResourceShareAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceShareAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceShareAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceShareAssociation` resource.
 */
// @ts-ignore TS6133
function rosResourceShareAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceShareAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      ResourceShareId: ros.stringToRosTemplate(properties.resourceShareId),
      PermissionNames: ros.listMapper(ros.stringToRosTemplate)(properties.permissionNames),
      Resources: ros.listMapper(rosResourceShareAssociationResourcesPropertyToRosTemplate)(properties.resources),
      Targets: ros.listMapper(ros.stringToRosTemplate)(properties.targets),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceShareAssociation`, which is used to associate a shared resource or a resource user.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceShareAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
 */
export class RosResourceShareAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceShareAssociation";

    /**
     * @Attribute ResourceShareId: The ID of the resource share.
     */
    public readonly attrResourceShareId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property resourceShareId: The ID of the resource share.
     */
    public resourceShareId: string | ros.IResolvable;

    /**
     * @Property permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
     */
    public permissionNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property resources:
     */
    public resources: Array<RosResourceShareAssociation.ResourcesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property targets: The shared target.
     * A shared target shares the resources of resource owners. You can share your resources
     * only with the member accounts in your resource directory. A shared target is indicated
     * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
     */
    public targets: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceShareAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceShareAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrResourceShareId = this.getAtt('ResourceShareId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceShareId = props.resourceShareId;
        this.permissionNames = props.permissionNames;
        this.resources = props.resources;
        this.targets = props.targets;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            resourceShareId: this.resourceShareId,
            permissionNames: this.permissionNames,
            resources: this.resources,
            targets: this.targets,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceShareAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosResourceShareAssociation {
    /**
     * @stability external
     */
    export interface ResourcesProperty {
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
 * Determine whether the given properties match those of a `ResourcesProperty`
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the result of the validation.
 */
function RosResourceShareAssociation_ResourcesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceId', ros.requiredValidator)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceType', ros.requiredValidator)(properties.resourceType));
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    return errors.wrap('supplied properties not correct for "ResourcesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceShareAssociation.Resources` resource
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceShareAssociation.Resources` resource.
 */
// @ts-ignore TS6133
function rosResourceShareAssociationResourcesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosResourceShareAssociation_ResourcesPropertyValidator(properties).assertSuccess();
    return {
      ResourceId: ros.stringToRosTemplate(properties.resourceId),
      ResourceType: ros.stringToRosTemplate(properties.resourceType),
    };
}
