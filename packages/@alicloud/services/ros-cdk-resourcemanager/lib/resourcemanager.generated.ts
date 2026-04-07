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
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
      'DeleteAccount': ros.booleanToRosTemplate(properties.deleteAccount),
      'FolderId': ros.stringToRosTemplate(properties.folderId),
      'PayerAccountId': ros.stringToRosTemplate(properties.payerAccountId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::Account`.
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
      'ControlPolicyName': ros.stringToRosTemplate(properties.controlPolicyName),
      'EffectScope': ros.stringToRosTemplate(properties.effectScope),
      'PolicyDocument': ros.stringToRosTemplate(properties.policyDocument),
      'Description': ros.stringToRosTemplate(properties.description),
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
      'PolicyId': ros.stringToRosTemplate(properties.policyId),
      'TargetId': ros.stringToRosTemplate(properties.targetId),
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
 * Determine whether the given properties match those of a `RosDelegatedAdministratorProps`
 *
 * @param properties - the TypeScript properties of a `RosDelegatedAdministratorProps`
 *
 * @returns the result of the validation.
 */
function RosDelegatedAdministratorPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountId', ros.requiredValidator)(properties.accountId));
    errors.collect(ros.propertyValidator('accountId', ros.validateString)(properties.accountId));
    errors.collect(ros.propertyValidator('servicePrincipal', ros.requiredValidator)(properties.servicePrincipal));
    errors.collect(ros.propertyValidator('servicePrincipal', ros.validateString)(properties.servicePrincipal));
    return errors.wrap('supplied properties not correct for "RosDelegatedAdministratorProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DelegatedAdministrator` resource
 *
 * @param properties - the TypeScript properties of a `RosDelegatedAdministratorProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DelegatedAdministrator` resource.
 */
// @ts-ignore TS6133
function rosDelegatedAdministratorPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDelegatedAdministratorPropsValidator(properties).assertSuccess();
    }
    return {
      'AccountId': ros.stringToRosTemplate(properties.accountId),
      'ServicePrincipal': ros.stringToRosTemplate(properties.servicePrincipal),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::DelegatedAdministrator`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DelegatedAdministrator` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
 */
export class RosDelegatedAdministrator extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::DelegatedAdministrator";

    /**
     * @Attribute AccountId: The Alibaba Cloud account ID of the member in the resource directory.
     */
    public readonly attrAccountId: ros.IResolvable;

    /**
     * @Attribute DelegationEnabledTime: Set as the timestamp of the delegated administrator account.
     */
    public readonly attrDelegationEnabledTime: ros.IResolvable;

    /**
     * @Attribute ServicePrincipal: The identifier of the trusted service.
     */
    public readonly attrServicePrincipal: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountId: The Alibaba Cloud account ID of the member in the resource directory.
     */
    public accountId: string | ros.IResolvable;

    /**
     * @Property servicePrincipal: The identifier of the trusted service.
     */
    public servicePrincipal: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDelegatedAdministratorProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDelegatedAdministrator.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountId = this.getAtt('AccountId');
        this.attrDelegationEnabledTime = this.getAtt('DelegationEnabledTime');
        this.attrServicePrincipal = this.getAtt('ServicePrincipal');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountId = props.accountId;
        this.servicePrincipal = props.servicePrincipal;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountId: this.accountId,
            servicePrincipal: this.servicePrincipal,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDelegatedAdministratorPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosDeliveryChannelProps`
 *
 * @param properties - the TypeScript properties of a `RosDeliveryChannelProps`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannelPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceChangeDelivery', RosDeliveryChannel_ResourceChangeDeliveryPropertyValidator)(properties.resourceChangeDelivery));
    errors.collect(ros.propertyValidator('enabledResourceSnapshotDelivery', ros.validateString)(properties.enabledResourceSnapshotDelivery));
    errors.collect(ros.propertyValidator('deliveryChannelName', ros.requiredValidator)(properties.deliveryChannelName));
    errors.collect(ros.propertyValidator('deliveryChannelName', ros.validateString)(properties.deliveryChannelName));
    errors.collect(ros.propertyValidator('deliveryChannelId', ros.validateString)(properties.deliveryChannelId));
    errors.collect(ros.propertyValidator('deliveryChannelDescription', ros.validateString)(properties.deliveryChannelDescription));
    errors.collect(ros.propertyValidator('enabledResourceChangeDelivery', ros.validateString)(properties.enabledResourceChangeDelivery));
    errors.collect(ros.propertyValidator('deliveryChannelFilter', ros.requiredValidator)(properties.deliveryChannelFilter));
    errors.collect(ros.propertyValidator('deliveryChannelFilter', RosDeliveryChannel_DeliveryChannelFilterPropertyValidator)(properties.deliveryChannelFilter));
    errors.collect(ros.propertyValidator('resourceSnapshotDelivery', RosDeliveryChannel_ResourceSnapshotDeliveryPropertyValidator)(properties.resourceSnapshotDelivery));
    return errors.wrap('supplied properties not correct for "RosDeliveryChannelProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DeliveryChannel` resource
 *
 * @param properties - the TypeScript properties of a `RosDeliveryChannelProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DeliveryChannel` resource.
 */
// @ts-ignore TS6133
function rosDeliveryChannelPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDeliveryChannelPropsValidator(properties).assertSuccess();
    }
    return {
      'DeliveryChannelFilter': rosDeliveryChannelDeliveryChannelFilterPropertyToRosTemplate(properties.deliveryChannelFilter),
      'DeliveryChannelName': ros.stringToRosTemplate(properties.deliveryChannelName),
      'DeliveryChannelDescription': ros.stringToRosTemplate(properties.deliveryChannelDescription),
      'DeliveryChannelId': ros.stringToRosTemplate(properties.deliveryChannelId),
      'EnabledResourceChangeDelivery': ros.stringToRosTemplate(properties.enabledResourceChangeDelivery),
      'EnabledResourceSnapshotDelivery': ros.stringToRosTemplate(properties.enabledResourceSnapshotDelivery),
      'ResourceChangeDelivery': rosDeliveryChannelResourceChangeDeliveryPropertyToRosTemplate(properties.resourceChangeDelivery),
      'ResourceSnapshotDelivery': rosDeliveryChannelResourceSnapshotDeliveryPropertyToRosTemplate(properties.resourceSnapshotDelivery),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::DeliveryChannel`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeliveryChannel` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
 */
export class RosDeliveryChannel extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::DeliveryChannel";

    /**
     * @Attribute DeliveryChannelDescription: The description of the delivery channel.
     */
    public readonly attrDeliveryChannelDescription: ros.IResolvable;

    /**
     * @Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
     */
    public readonly attrDeliveryChannelFilter: ros.IResolvable;

    /**
     * @Attribute DeliveryChannelId: The ID of the delivery channel.
     */
    public readonly attrDeliveryChannelId: ros.IResolvable;

    /**
     * @Attribute DeliveryChannelName: The name of the delivery channel.
     */
    public readonly attrDeliveryChannelName: ros.IResolvable;

    /**
     * @Attribute ResourceChangeDelivery: The delivery of resource configuration changes.
     */
    public readonly attrResourceChangeDelivery: ros.IResolvable;

    /**
     * @Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.
     */
    public readonly attrResourceSnapshotDelivery: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property deliveryChannelFilter: The effective scope of the delivery channel.
     */
    public deliveryChannelFilter: RosDeliveryChannel.DeliveryChannelFilterProperty | ros.IResolvable;

    /**
     * @Property deliveryChannelName: The name of the delivery channel.
     */
    public deliveryChannelName: string | ros.IResolvable;

    /**
     * @Property deliveryChannelDescription: The description of the delivery channel.
     */
    public deliveryChannelDescription: string | ros.IResolvable | undefined;

    /**
     * @Property deliveryChannelId: The ID of the delivery channel.
     */
    public deliveryChannelId: string | ros.IResolvable | undefined;

    /**
     * @Property enabledResourceChangeDelivery: Enable resource change delivery.
     */
    public enabledResourceChangeDelivery: string | ros.IResolvable | undefined;

    /**
     * @Property enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
     */
    public enabledResourceSnapshotDelivery: string | ros.IResolvable | undefined;

    /**
     * @Property resourceChangeDelivery: The delivery of resource configuration changes.
     */
    public resourceChangeDelivery: RosDeliveryChannel.ResourceChangeDeliveryProperty | ros.IResolvable | undefined;

    /**
     * @Property resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
     */
    public resourceSnapshotDelivery: RosDeliveryChannel.ResourceSnapshotDeliveryProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeliveryChannelProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDeliveryChannel.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDeliveryChannelDescription = this.getAtt('DeliveryChannelDescription');
        this.attrDeliveryChannelFilter = this.getAtt('DeliveryChannelFilter');
        this.attrDeliveryChannelId = this.getAtt('DeliveryChannelId');
        this.attrDeliveryChannelName = this.getAtt('DeliveryChannelName');
        this.attrResourceChangeDelivery = this.getAtt('ResourceChangeDelivery');
        this.attrResourceSnapshotDelivery = this.getAtt('ResourceSnapshotDelivery');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deliveryChannelFilter = props.deliveryChannelFilter;
        this.deliveryChannelName = props.deliveryChannelName;
        this.deliveryChannelDescription = props.deliveryChannelDescription;
        this.deliveryChannelId = props.deliveryChannelId;
        this.enabledResourceChangeDelivery = props.enabledResourceChangeDelivery;
        this.enabledResourceSnapshotDelivery = props.enabledResourceSnapshotDelivery;
        this.resourceChangeDelivery = props.resourceChangeDelivery;
        this.resourceSnapshotDelivery = props.resourceSnapshotDelivery;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            deliveryChannelFilter: this.deliveryChannelFilter,
            deliveryChannelName: this.deliveryChannelName,
            deliveryChannelDescription: this.deliveryChannelDescription,
            deliveryChannelId: this.deliveryChannelId,
            enabledResourceChangeDelivery: this.enabledResourceChangeDelivery,
            enabledResourceSnapshotDelivery: this.enabledResourceSnapshotDelivery,
            resourceChangeDelivery: this.resourceChangeDelivery,
            resourceSnapshotDelivery: this.resourceSnapshotDelivery,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDeliveryChannelPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDeliveryChannel {
    /**
     * @stability external
     */
    export interface DeliveryChannelFilterProperty {
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
/**
 * Determine whether the given properties match those of a `DeliveryChannelFilterProperty`
 *
 * @param properties - the TypeScript properties of a `DeliveryChannelFilterProperty`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannel_DeliveryChannelFilterPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceTypes', ros.listValidator(ros.validateString))(properties.resourceTypes));
    errors.collect(ros.propertyValidator('accountScopes', ros.listValidator(ros.validateString))(properties.accountScopes));
    return errors.wrap('supplied properties not correct for "DeliveryChannelFilterProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DeliveryChannel.DeliveryChannelFilter` resource
 *
 * @param properties - the TypeScript properties of a `DeliveryChannelFilterProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DeliveryChannel.DeliveryChannelFilter` resource.
 */
// @ts-ignore TS6133
function rosDeliveryChannelDeliveryChannelFilterPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDeliveryChannel_DeliveryChannelFilterPropertyValidator(properties).assertSuccess();
    return {
      'ResourceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.resourceTypes),
      'AccountScopes': ros.listMapper(ros.stringToRosTemplate)(properties.accountScopes),
    };
}

export namespace RosDeliveryChannel {
    /**
     * @stability external
     */
    export interface ResourceChangeDeliveryProperty {
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
/**
 * Determine whether the given properties match those of a `ResourceChangeDeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceChangeDeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannel_ResourceChangeDeliveryPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('slsProperties', RosDeliveryChannel_SlsPropertiesPropertyValidator)(properties.slsProperties));
    errors.collect(ros.propertyValidator('targetArn', ros.validateString)(properties.targetArn));
    return errors.wrap('supplied properties not correct for "ResourceChangeDeliveryProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DeliveryChannel.ResourceChangeDelivery` resource
 *
 * @param properties - the TypeScript properties of a `ResourceChangeDeliveryProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DeliveryChannel.ResourceChangeDelivery` resource.
 */
// @ts-ignore TS6133
function rosDeliveryChannelResourceChangeDeliveryPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDeliveryChannel_ResourceChangeDeliveryPropertyValidator(properties).assertSuccess();
    return {
      'SlsProperties': rosDeliveryChannelSlsPropertiesPropertyToRosTemplate(properties.slsProperties),
      'TargetArn': ros.stringToRosTemplate(properties.targetArn),
    };
}

export namespace RosDeliveryChannel {
    /**
     * @stability external
     */
    export interface ResourceSnapshotDeliveryProperty {
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
/**
 * Determine whether the given properties match those of a `ResourceSnapshotDeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceSnapshotDeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannel_ResourceSnapshotDeliveryPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('customExpression', ros.validateString)(properties.customExpression));
    errors.collect(ros.propertyValidator('deliveryTime', ros.validateString)(properties.deliveryTime));
    errors.collect(ros.propertyValidator('slsProperties', RosDeliveryChannel_ResourceSnapshotDeliverySlsPropertiesPropertyValidator)(properties.slsProperties));
    errors.collect(ros.propertyValidator('targetArn', ros.validateString)(properties.targetArn));
    return errors.wrap('supplied properties not correct for "ResourceSnapshotDeliveryProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DeliveryChannel.ResourceSnapshotDelivery` resource
 *
 * @param properties - the TypeScript properties of a `ResourceSnapshotDeliveryProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DeliveryChannel.ResourceSnapshotDelivery` resource.
 */
// @ts-ignore TS6133
function rosDeliveryChannelResourceSnapshotDeliveryPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDeliveryChannel_ResourceSnapshotDeliveryPropertyValidator(properties).assertSuccess();
    return {
      'CustomExpression': ros.stringToRosTemplate(properties.customExpression),
      'DeliveryTime': ros.stringToRosTemplate(properties.deliveryTime),
      'SlsProperties': rosDeliveryChannelResourceSnapshotDeliverySlsPropertiesPropertyToRosTemplate(properties.slsProperties),
      'TargetArn': ros.stringToRosTemplate(properties.targetArn),
    };
}

export namespace RosDeliveryChannel {
    /**
     * @stability external
     */
    export interface ResourceSnapshotDeliverySlsPropertiesProperty {
        /**
         * @Property oversizedDataOssTargetArn: The ARN of the destination OSS bucket for oversized files. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the resourcecenter- prefix.
         */
        readonly oversizedDataOssTargetArn?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResourceSnapshotDeliverySlsPropertiesProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceSnapshotDeliverySlsPropertiesProperty`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannel_ResourceSnapshotDeliverySlsPropertiesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oversizedDataOssTargetArn', ros.validateString)(properties.oversizedDataOssTargetArn));
    return errors.wrap('supplied properties not correct for "ResourceSnapshotDeliverySlsPropertiesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DeliveryChannel.ResourceSnapshotDeliverySlsProperties` resource
 *
 * @param properties - the TypeScript properties of a `ResourceSnapshotDeliverySlsPropertiesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DeliveryChannel.ResourceSnapshotDeliverySlsProperties` resource.
 */
// @ts-ignore TS6133
function rosDeliveryChannelResourceSnapshotDeliverySlsPropertiesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDeliveryChannel_ResourceSnapshotDeliverySlsPropertiesPropertyValidator(properties).assertSuccess();
    return {
      'OversizedDataOssTargetArn': ros.stringToRosTemplate(properties.oversizedDataOssTargetArn),
    };
}

export namespace RosDeliveryChannel {
    /**
     * @stability external
     */
    export interface SlsPropertiesProperty {
        /**
         * @Property oversizedDataOssTargetArn: The ARN of the destination OSS bucket for oversized files. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the resourcecenter- prefix.
         */
        readonly oversizedDataOssTargetArn?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SlsPropertiesProperty`
 *
 * @param properties - the TypeScript properties of a `SlsPropertiesProperty`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannel_SlsPropertiesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oversizedDataOssTargetArn', ros.validateString)(properties.oversizedDataOssTargetArn));
    return errors.wrap('supplied properties not correct for "SlsPropertiesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DeliveryChannel.SlsProperties` resource
 *
 * @param properties - the TypeScript properties of a `SlsPropertiesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::DeliveryChannel.SlsProperties` resource.
 */
// @ts-ignore TS6133
function rosDeliveryChannelSlsPropertiesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDeliveryChannel_SlsPropertiesPropertyValidator(properties).assertSuccess();
    return {
      'OversizedDataOssTargetArn': ros.stringToRosTemplate(properties.oversizedDataOssTargetArn),
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
      'FolderName': ros.stringToRosTemplate(properties.folderName),
      'ParentFolderId': ros.stringToRosTemplate(properties.parentFolderId),
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
      'TargetEntity': ros.stringToRosTemplate(properties.targetEntity),
      'TargetType': ros.stringToRosTemplate(properties.targetType),
      'Note': ros.stringToRosTemplate(properties.note),
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
 * Determine whether the given properties match those of a `RosMessageContactProps`
 *
 * @param properties - the TypeScript properties of a `RosMessageContactProps`
 *
 * @returns the result of the validation.
 */
function RosMessageContactPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('messageTypes', ros.requiredValidator)(properties.messageTypes));
    errors.collect(ros.propertyValidator('messageTypes', ros.listValidator(ros.validateString))(properties.messageTypes));
    errors.collect(ros.propertyValidator('phoneNumber', ros.validateString)(properties.phoneNumber));
    errors.collect(ros.propertyValidator('title', ros.requiredValidator)(properties.title));
    if(properties.title && (typeof properties.title) !== 'object') {
        errors.collect(ros.propertyValidator('title', ros.validateAllowedValues)({
          data: properties.title,
          allowedValues: ["TechnicalDirector","MaintenanceDirector","ProjectDirector","ProjectDirector","CEO","Other"],
        }));
    }
    errors.collect(ros.propertyValidator('title', ros.validateString)(properties.title));
    errors.collect(ros.propertyValidator('messageContactName', ros.requiredValidator)(properties.messageContactName));
    if(properties.messageContactName && (Array.isArray(properties.messageContactName) || (typeof properties.messageContactName) === 'string')) {
        errors.collect(ros.propertyValidator('messageContactName', ros.validateLength)({
            data: properties.messageContactName.length,
            min: 2,
            max: 12,
          }));
    }
    errors.collect(ros.propertyValidator('messageContactName', ros.validateString)(properties.messageContactName));
    errors.collect(ros.propertyValidator('emailAddress', ros.requiredValidator)(properties.emailAddress));
    errors.collect(ros.propertyValidator('emailAddress', ros.validateString)(properties.emailAddress));
    return errors.wrap('supplied properties not correct for "RosMessageContactProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::MessageContact` resource
 *
 * @param properties - the TypeScript properties of a `RosMessageContactProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::MessageContact` resource.
 */
// @ts-ignore TS6133
function rosMessageContactPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMessageContactPropsValidator(properties).assertSuccess();
    }
    return {
      'EmailAddress': ros.stringToRosTemplate(properties.emailAddress),
      'MessageContactName': ros.stringToRosTemplate(properties.messageContactName),
      'MessageTypes': ros.listMapper(ros.stringToRosTemplate)(properties.messageTypes),
      'Title': ros.stringToRosTemplate(properties.title),
      'PhoneNumber': ros.stringToRosTemplate(properties.phoneNumber),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::MessageContact`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MessageContact` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
 */
export class RosMessageContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::MessageContact";

    /**
     * @Attribute CreateTime: Creation time of Message Contact.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute EmailAddress: The email address of the contact.
     */
    public readonly attrEmailAddress: ros.IResolvable;

    /**
     * @Attribute MessageContactId: The ID of Message Contact.
     */
    public readonly attrMessageContactId: ros.IResolvable;

    /**
     * @Attribute MessageContactName: The name of the contact.
     */
    public readonly attrMessageContactName: ros.IResolvable;

    /**
     * @Attribute MessageTypes: The types of messages received by the contact.
     */
    public readonly attrMessageTypes: ros.IResolvable;

    /**
     * @Attribute PhoneNumber: The mobile phone number of the contact.
     */
    public readonly attrPhoneNumber: ros.IResolvable;

    /**
     * @Attribute Title: The job title of the contact.
     */
    public readonly attrTitle: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property emailAddress: The email address of the contact.
     */
    public emailAddress: string | ros.IResolvable;

    /**
     * @Property messageContactName: The name of the contact. The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
     */
    public messageContactName: string | ros.IResolvable;

    /**
     * @Property messageTypes: The types of messages received by the contact.
     */
    public messageTypes: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property title: The job title of the contact. Valid values:
     * * FinanceDirector.
     * * TechnicalDirector.
     * * MaintenanceDirector.
     * * CEO.
     * * ProjectDirector.
     * * Other.
     */
    public title: string | ros.IResolvable;

    /**
     * @Property phoneNumber: The mobile phone number of the contact.
     */
    public phoneNumber: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMessageContactProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMessageContact.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEmailAddress = this.getAtt('EmailAddress');
        this.attrMessageContactId = this.getAtt('MessageContactId');
        this.attrMessageContactName = this.getAtt('MessageContactName');
        this.attrMessageTypes = this.getAtt('MessageTypes');
        this.attrPhoneNumber = this.getAtt('PhoneNumber');
        this.attrTitle = this.getAtt('Title');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.emailAddress = props.emailAddress;
        this.messageContactName = props.messageContactName;
        this.messageTypes = props.messageTypes;
        this.title = props.title;
        this.phoneNumber = props.phoneNumber;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            emailAddress: this.emailAddress,
            messageContactName: this.messageContactName,
            messageTypes: this.messageTypes,
            title: this.title,
            phoneNumber: this.phoneNumber,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMessageContactPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosMultiAccountDeliveryChannelProps`
 *
 * @param properties - the TypeScript properties of a `RosMultiAccountDeliveryChannelProps`
 *
 * @returns the result of the validation.
 */
function RosMultiAccountDeliveryChannelPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceChangeDelivery', RosMultiAccountDeliveryChannel_ResourceChangeDeliveryPropertyValidator)(properties.resourceChangeDelivery));
    errors.collect(ros.propertyValidator('deliveryChannelDescription', ros.requiredValidator)(properties.deliveryChannelDescription));
    errors.collect(ros.propertyValidator('deliveryChannelDescription', ros.validateString)(properties.deliveryChannelDescription));
    errors.collect(ros.propertyValidator('multiAccountDeliveryChannelId', ros.validateString)(properties.multiAccountDeliveryChannelId));
    errors.collect(ros.propertyValidator('multiAccountDeliveryChannelName', ros.requiredValidator)(properties.multiAccountDeliveryChannelName));
    errors.collect(ros.propertyValidator('multiAccountDeliveryChannelName', ros.validateString)(properties.multiAccountDeliveryChannelName));
    errors.collect(ros.propertyValidator('deliveryChannelFilter', ros.requiredValidator)(properties.deliveryChannelFilter));
    errors.collect(ros.propertyValidator('deliveryChannelFilter', RosMultiAccountDeliveryChannel_DeliveryChannelFilterPropertyValidator)(properties.deliveryChannelFilter));
    errors.collect(ros.propertyValidator('resourceSnapshotDelivery', RosMultiAccountDeliveryChannel_ResourceSnapshotDeliveryPropertyValidator)(properties.resourceSnapshotDelivery));
    return errors.wrap('supplied properties not correct for "RosMultiAccountDeliveryChannelProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::MultiAccountDeliveryChannel` resource
 *
 * @param properties - the TypeScript properties of a `RosMultiAccountDeliveryChannelProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::MultiAccountDeliveryChannel` resource.
 */
// @ts-ignore TS6133
function rosMultiAccountDeliveryChannelPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMultiAccountDeliveryChannelPropsValidator(properties).assertSuccess();
    }
    return {
      'DeliveryChannelDescription': ros.stringToRosTemplate(properties.deliveryChannelDescription),
      'DeliveryChannelFilter': rosMultiAccountDeliveryChannelDeliveryChannelFilterPropertyToRosTemplate(properties.deliveryChannelFilter),
      'MultiAccountDeliveryChannelName': ros.stringToRosTemplate(properties.multiAccountDeliveryChannelName),
      'MultiAccountDeliveryChannelId': ros.stringToRosTemplate(properties.multiAccountDeliveryChannelId),
      'ResourceChangeDelivery': rosMultiAccountDeliveryChannelResourceChangeDeliveryPropertyToRosTemplate(properties.resourceChangeDelivery),
      'ResourceSnapshotDelivery': rosMultiAccountDeliveryChannelResourceSnapshotDeliveryPropertyToRosTemplate(properties.resourceSnapshotDelivery),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::MultiAccountDeliveryChannel`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MultiAccountDeliveryChannel` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
 */
export class RosMultiAccountDeliveryChannel extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::MultiAccountDeliveryChannel";

    /**
     * @Attribute DeliveryChannelDescription: The description of the delivery channel.
     */
    public readonly attrDeliveryChannelDescription: ros.IResolvable;

    /**
     * @Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
     */
    public readonly attrDeliveryChannelFilter: ros.IResolvable;

    /**
     * @Attribute MultiAccountDeliveryChannelId: The delivery channel ID.
     */
    public readonly attrMultiAccountDeliveryChannelId: ros.IResolvable;

    /**
     * @Attribute MultiAccountDeliveryChannelName: The name of the delivery channel.
     */
    public readonly attrMultiAccountDeliveryChannelName: ros.IResolvable;

    /**
     * @Attribute ResourceChangeDelivery: The configurations for delivery of resource configuration change events.
     */
    public readonly attrResourceChangeDelivery: ros.IResolvable;

    /**
     * @Attribute ResourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
     */
    public readonly attrResourceSnapshotDelivery: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property deliveryChannelDescription: The description of the delivery channel.
     */
    public deliveryChannelDescription: string | ros.IResolvable;

    /**
     * @Property deliveryChannelFilter: The effective scope of the delivery channel.
     */
    public deliveryChannelFilter: RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty | ros.IResolvable;

    /**
     * @Property multiAccountDeliveryChannelName: The name of the delivery channel.
     */
    public multiAccountDeliveryChannelName: string | ros.IResolvable;

    /**
     * @Property multiAccountDeliveryChannelId: Delivery Channel id.
     */
    public multiAccountDeliveryChannelId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceChangeDelivery: The configurations for delivery of resource configuration change events.
     */
    public resourceChangeDelivery: RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty | ros.IResolvable | undefined;

    /**
     * @Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
     */
    public resourceSnapshotDelivery: RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMultiAccountDeliveryChannelProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMultiAccountDeliveryChannel.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDeliveryChannelDescription = this.getAtt('DeliveryChannelDescription');
        this.attrDeliveryChannelFilter = this.getAtt('DeliveryChannelFilter');
        this.attrMultiAccountDeliveryChannelId = this.getAtt('MultiAccountDeliveryChannelId');
        this.attrMultiAccountDeliveryChannelName = this.getAtt('MultiAccountDeliveryChannelName');
        this.attrResourceChangeDelivery = this.getAtt('ResourceChangeDelivery');
        this.attrResourceSnapshotDelivery = this.getAtt('ResourceSnapshotDelivery');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deliveryChannelDescription = props.deliveryChannelDescription;
        this.deliveryChannelFilter = props.deliveryChannelFilter;
        this.multiAccountDeliveryChannelName = props.multiAccountDeliveryChannelName;
        this.multiAccountDeliveryChannelId = props.multiAccountDeliveryChannelId;
        this.resourceChangeDelivery = props.resourceChangeDelivery;
        this.resourceSnapshotDelivery = props.resourceSnapshotDelivery;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            deliveryChannelDescription: this.deliveryChannelDescription,
            deliveryChannelFilter: this.deliveryChannelFilter,
            multiAccountDeliveryChannelName: this.multiAccountDeliveryChannelName,
            multiAccountDeliveryChannelId: this.multiAccountDeliveryChannelId,
            resourceChangeDelivery: this.resourceChangeDelivery,
            resourceSnapshotDelivery: this.resourceSnapshotDelivery,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMultiAccountDeliveryChannelPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosMultiAccountDeliveryChannel {
    /**
     * @stability external
     */
    export interface DeliveryChannelFilterProperty {
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
/**
 * Determine whether the given properties match those of a `DeliveryChannelFilterProperty`
 *
 * @param properties - the TypeScript properties of a `DeliveryChannelFilterProperty`
 *
 * @returns the result of the validation.
 */
function RosMultiAccountDeliveryChannel_DeliveryChannelFilterPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceTypes', ros.listValidator(ros.validateString))(properties.resourceTypes));
    errors.collect(ros.propertyValidator('accountScopes', ros.requiredValidator)(properties.accountScopes));
    errors.collect(ros.propertyValidator('accountScopes', ros.listValidator(ros.validateString))(properties.accountScopes));
    return errors.wrap('supplied properties not correct for "DeliveryChannelFilterProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::MultiAccountDeliveryChannel.DeliveryChannelFilter` resource
 *
 * @param properties - the TypeScript properties of a `DeliveryChannelFilterProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::MultiAccountDeliveryChannel.DeliveryChannelFilter` resource.
 */
// @ts-ignore TS6133
function rosMultiAccountDeliveryChannelDeliveryChannelFilterPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMultiAccountDeliveryChannel_DeliveryChannelFilterPropertyValidator(properties).assertSuccess();
    return {
      'ResourceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.resourceTypes),
      'AccountScopes': ros.listMapper(ros.stringToRosTemplate)(properties.accountScopes),
    };
}

export namespace RosMultiAccountDeliveryChannel {
    /**
     * @stability external
     */
    export interface ResourceChangeDeliveryProperty {
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
/**
 * Determine whether the given properties match those of a `ResourceChangeDeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceChangeDeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosMultiAccountDeliveryChannel_ResourceChangeDeliveryPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('slsProperties', RosMultiAccountDeliveryChannel_SlsPropertiesPropertyValidator)(properties.slsProperties));
    errors.collect(ros.propertyValidator('targetArn', ros.validateString)(properties.targetArn));
    return errors.wrap('supplied properties not correct for "ResourceChangeDeliveryProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::MultiAccountDeliveryChannel.ResourceChangeDelivery` resource
 *
 * @param properties - the TypeScript properties of a `ResourceChangeDeliveryProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::MultiAccountDeliveryChannel.ResourceChangeDelivery` resource.
 */
// @ts-ignore TS6133
function rosMultiAccountDeliveryChannelResourceChangeDeliveryPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMultiAccountDeliveryChannel_ResourceChangeDeliveryPropertyValidator(properties).assertSuccess();
    return {
      'SlsProperties': rosMultiAccountDeliveryChannelSlsPropertiesPropertyToRosTemplate(properties.slsProperties),
      'TargetArn': ros.stringToRosTemplate(properties.targetArn),
    };
}

export namespace RosMultiAccountDeliveryChannel {
    /**
     * @stability external
     */
    export interface ResourceSnapshotDeliveryProperty {
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
/**
 * Determine whether the given properties match those of a `ResourceSnapshotDeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceSnapshotDeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosMultiAccountDeliveryChannel_ResourceSnapshotDeliveryPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('deliveryTime', ros.validateString)(properties.deliveryTime));
    errors.collect(ros.propertyValidator('targetArn', ros.validateString)(properties.targetArn));
    return errors.wrap('supplied properties not correct for "ResourceSnapshotDeliveryProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::MultiAccountDeliveryChannel.ResourceSnapshotDelivery` resource
 *
 * @param properties - the TypeScript properties of a `ResourceSnapshotDeliveryProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::MultiAccountDeliveryChannel.ResourceSnapshotDelivery` resource.
 */
// @ts-ignore TS6133
function rosMultiAccountDeliveryChannelResourceSnapshotDeliveryPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMultiAccountDeliveryChannel_ResourceSnapshotDeliveryPropertyValidator(properties).assertSuccess();
    return {
      'DeliveryTime': ros.stringToRosTemplate(properties.deliveryTime),
      'TargetArn': ros.stringToRosTemplate(properties.targetArn),
    };
}

export namespace RosMultiAccountDeliveryChannel {
    /**
     * @stability external
     */
    export interface SlsPropertiesProperty {
        /**
         * @Property oversizedDataOssTargetArn: The ARN of the delivery destination for oversized data. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. You must enter the ARN of an OSS bucket that has a prefix of resourcecenter-.
         */
        readonly oversizedDataOssTargetArn?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SlsPropertiesProperty`
 *
 * @param properties - the TypeScript properties of a `SlsPropertiesProperty`
 *
 * @returns the result of the validation.
 */
function RosMultiAccountDeliveryChannel_SlsPropertiesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oversizedDataOssTargetArn', ros.validateString)(properties.oversizedDataOssTargetArn));
    return errors.wrap('supplied properties not correct for "SlsPropertiesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::MultiAccountDeliveryChannel.SlsProperties` resource
 *
 * @param properties - the TypeScript properties of a `SlsPropertiesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::MultiAccountDeliveryChannel.SlsProperties` resource.
 */
// @ts-ignore TS6133
function rosMultiAccountDeliveryChannelSlsPropertiesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMultiAccountDeliveryChannel_SlsPropertiesPropertyValidator(properties).assertSuccess();
    return {
      'OversizedDataOssTargetArn': ros.stringToRosTemplate(properties.oversizedDataOssTargetArn),
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
      'PolicyName': ros.stringToRosTemplate(properties.policyName),
      'PolicyType': ros.stringToRosTemplate(properties.policyType),
      'PrincipalName': ros.stringToRosTemplate(properties.principalName),
      'PrincipalType': ros.stringToRosTemplate(properties.principalType),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
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
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosResourceGroup_TagsPropertyValidator))(properties.tags));
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
      'DisplayName': ros.stringToRosTemplate(properties.displayName),
      'Name': ros.stringToRosTemplate(properties.name),
      'Tags': ros.listMapper(rosResourceGroupTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceGroup`The , which resource type creates a resource group.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
 */
export class RosResourceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceGroup";

    /**
     * @Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.
     */
    public readonly attrAccountId: ros.IResolvable;

    /**
     * @Attribute DisplayName: The display name of the resource group.
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * @Attribute Id: The ID of the resource group.
     */
    public readonly attrId: ros.IResolvable;

    /**
     * @Attribute Name: The unique identifier of the resource group.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute RegionStatuses: The status of the resource group in all regions.
     */
    public readonly attrRegionStatuses: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property displayName: The display name of the resource group.
     */
    public displayName: string | ros.IResolvable;

    /**
     * @Property name: The name of the resource group.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to resource group. Max support 20 tags to add during create resource group. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosResourceGroup.TagsProperty[] | undefined;

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
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.displayName = props.displayName;
        this.name = props.name;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            displayName: this.displayName,
            name: this.name,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosResourceGroup {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosResourceGroup_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceGroup.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::ResourceGroup.Tags` resource.
 */
// @ts-ignore TS6133
function rosResourceGroupTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosResourceGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
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
    if(properties.targets && (Array.isArray(properties.targets) || (typeof properties.targets) === 'string')) {
        errors.collect(ros.propertyValidator('targets', ros.validateLength)({
            data: properties.targets.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('targets', ros.listValidator(ros.validateString))(properties.targets));
    errors.collect(ros.propertyValidator('allowExternalTargets', ros.validateBoolean)(properties.allowExternalTargets));
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
      'ResourceShareName': ros.stringToRosTemplate(properties.resourceShareName),
      'AllowExternalTargets': ros.booleanToRosTemplate(properties.allowExternalTargets),
      'PermissionNames': ros.listMapper(ros.stringToRosTemplate)(properties.permissionNames),
      'Resources': ros.listMapper(rosResourceShareResourcesPropertyToRosTemplate)(properties.resources),
      'Targets': ros.listMapper(ros.stringToRosTemplate)(properties.targets),
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
      'ResourceId': ros.stringToRosTemplate(properties.resourceId),
      'ResourceType': ros.stringToRosTemplate(properties.resourceType),
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
      'ResourceShareId': ros.stringToRosTemplate(properties.resourceShareId),
      'PermissionNames': ros.listMapper(ros.stringToRosTemplate)(properties.permissionNames),
      'Resources': ros.listMapper(rosResourceShareAssociationResourcesPropertyToRosTemplate)(properties.resources),
      'Targets': ros.listMapper(ros.stringToRosTemplate)(properties.targets),
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
      'ResourceId': ros.stringToRosTemplate(properties.resourceId),
      'ResourceType': ros.stringToRosTemplate(properties.resourceType),
    };
}

/**
 * Properties for defining a `RosRole`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
 */
export interface RosRoleProps {

    /**
     * @Property assumeRolePolicyDocument: The content of the permissions strategy that plays a role.
     */
    readonly assumeRolePolicyDocument: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
 * Determine whether the given properties match those of a `RosRoleProps`
 *
 * @param properties - the TypeScript properties of a `RosRoleProps`
 *
 * @returns the result of the validation.
 */
function RosRolePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.maxSessionDuration && (typeof properties.maxSessionDuration) !== 'object') {
        errors.collect(ros.propertyValidator('maxSessionDuration', ros.validateRange)({
            data: properties.maxSessionDuration,
            min: 3600,
            max: 43200,
          }));
    }
    errors.collect(ros.propertyValidator('maxSessionDuration', ros.validateNumber)(properties.maxSessionDuration));
    errors.collect(ros.propertyValidator('roleName', ros.requiredValidator)(properties.roleName));
    errors.collect(ros.propertyValidator('roleName', ros.validateString)(properties.roleName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('assumeRolePolicyDocument', ros.requiredValidator)(properties.assumeRolePolicyDocument));
    errors.collect(ros.propertyValidator('assumeRolePolicyDocument', ros.hashValidator(ros.validateAny))(properties.assumeRolePolicyDocument));
    return errors.wrap('supplied properties not correct for "RosRoleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Role` resource
 *
 * @param properties - the TypeScript properties of a `RosRoleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::Role` resource.
 */
// @ts-ignore TS6133
function rosRolePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRolePropsValidator(properties).assertSuccess();
    }
    return {
      'AssumeRolePolicyDocument': ros.hashMapper(ros.objectToRosTemplate)(properties.assumeRolePolicyDocument),
      'RoleName': ros.stringToRosTemplate(properties.roleName),
      'Description': ros.stringToRosTemplate(properties.description),
      'MaxSessionDuration': ros.numberToRosTemplate(properties.maxSessionDuration),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::Role`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Role` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
 */
export class RosRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Role";

    /**
     * @Attribute Arn: The resource descriptor of the role.
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.
     */
    public readonly attrAssumeRolePolicyDocument: ros.IResolvable;

    /**
     * @Attribute CreateTime: Role creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of the Resource Manager role.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute MaxSessionDuration: Role maximum session time. Valid values: [3600-43200].
     */
    public readonly attrMaxSessionDuration: ros.IResolvable;

    /**
     * @Attribute RoleId: This ID of Resource Manager role.
     */
    public readonly attrRoleId: ros.IResolvable;

    /**
     * @Attribute RoleName: Role Name.
     */
    public readonly attrRoleName: ros.IResolvable;

    /**
     * @Attribute UpdateDate: Role update time.
     */
    public readonly attrUpdateDate: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property assumeRolePolicyDocument: The content of the permissions strategy that plays a role.
     */
    public assumeRolePolicyDocument: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property roleName: Role Name.
     */
    public roleName: string | ros.IResolvable;

    /**
     * @Property description: The description of the Resource Manager role.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property maxSessionDuration: Role maximum session time. Valid values: [3600-43200]. Default to 3600.
     */
    public maxSessionDuration: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRoleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRole.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrAssumeRolePolicyDocument = this.getAtt('AssumeRolePolicyDocument');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrMaxSessionDuration = this.getAtt('MaxSessionDuration');
        this.attrRoleId = this.getAtt('RoleId');
        this.attrRoleName = this.getAtt('RoleName');
        this.attrUpdateDate = this.getAtt('UpdateDate');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.assumeRolePolicyDocument = props.assumeRolePolicyDocument;
        this.roleName = props.roleName;
        this.description = props.description;
        this.maxSessionDuration = props.maxSessionDuration;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            assumeRolePolicyDocument: this.assumeRolePolicyDocument,
            roleName: this.roleName,
            description: this.description,
            maxSessionDuration: this.maxSessionDuration,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRolePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosSavedQueryProps`
 *
 * @param properties - the TypeScript properties of a `RosSavedQueryProps`
 *
 * @returns the result of the validation.
 */
function RosSavedQueryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('expression', ros.requiredValidator)(properties.expression));
    errors.collect(ros.propertyValidator('expression', ros.validateString)(properties.expression));
    errors.collect(ros.propertyValidator('savedQueryName', ros.requiredValidator)(properties.savedQueryName));
    if(properties.savedQueryName && (Array.isArray(properties.savedQueryName) || (typeof properties.savedQueryName) === 'string')) {
        errors.collect(ros.propertyValidator('savedQueryName', ros.validateLength)({
            data: properties.savedQueryName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('savedQueryName', ros.validateString)(properties.savedQueryName));
    return errors.wrap('supplied properties not correct for "RosSavedQueryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::SavedQuery` resource
 *
 * @param properties - the TypeScript properties of a `RosSavedQueryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::SavedQuery` resource.
 */
// @ts-ignore TS6133
function rosSavedQueryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSavedQueryPropsValidator(properties).assertSuccess();
    }
    return {
      'Expression': ros.stringToRosTemplate(properties.expression),
      'SavedQueryName': ros.stringToRosTemplate(properties.savedQueryName),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::SavedQuery`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SavedQuery` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
 */
export class RosSavedQuery extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::SavedQuery";

    /**
     * @Attribute CreateTime: The creation time of the template.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of the template.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute Expression: Query Expression of the template.
     */
    public readonly attrExpression: ros.IResolvable;

    /**
     * @Attribute SavedQueryId: The id of the template.
     */
    public readonly attrSavedQueryId: ros.IResolvable;

    /**
     * @Attribute SavedQueryName: The name of the template.
     */
    public readonly attrSavedQueryName: ros.IResolvable;

    /**
     * @Attribute UpdateTime: Update time of the template.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property expression: The expression of the template.
     */
    public expression: string | ros.IResolvable;

    /**
     * @Property savedQueryName: The name of the template.
     * * The name must be 1 to 64 characters in length.
     * * The name can contain letters, digits, underscores (_), and hyphens (-).
     * * The template name must be unique.
     */
    public savedQueryName: string | ros.IResolvable;

    /**
     * @Property description: The description of the template. The description must be 1 to 256 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSavedQueryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSavedQuery.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrExpression = this.getAtt('Expression');
        this.attrSavedQueryId = this.getAtt('SavedQueryId');
        this.attrSavedQueryName = this.getAtt('SavedQueryName');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.expression = props.expression;
        this.savedQueryName = props.savedQueryName;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            expression: this.expression,
            savedQueryName: this.savedQueryName,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSavedQueryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosSharedTargetProps`
 *
 * @param properties - the TypeScript properties of a `RosSharedTargetProps`
 *
 * @returns the result of the validation.
 */
function RosSharedTargetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceShareId', ros.requiredValidator)(properties.resourceShareId));
    errors.collect(ros.propertyValidator('resourceShareId', ros.validateString)(properties.resourceShareId));
    errors.collect(ros.propertyValidator('targetId', ros.validateString)(properties.targetId));
    return errors.wrap('supplied properties not correct for "RosSharedTargetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::SharedTarget` resource
 *
 * @param properties - the TypeScript properties of a `RosSharedTargetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ResourceManager::SharedTarget` resource.
 */
// @ts-ignore TS6133
function rosSharedTargetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSharedTargetPropsValidator(properties).assertSuccess();
    }
    return {
      'ResourceShareId': ros.stringToRosTemplate(properties.resourceShareId),
      'TargetId': ros.stringToRosTemplate(properties.targetId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::SharedTarget`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SharedTarget` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
 */
export class RosSharedTarget extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::SharedTarget";

    /**
     * @Attribute CreateTime: Create time of the resource share.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute ResourceShareId: The ID of the resource share.
     */
    public readonly attrResourceShareId: ros.IResolvable;

    /**
     * @Attribute ResourceShareName: The name of the resource share.
     */
    public readonly attrResourceShareName: ros.IResolvable;

    /**
     * @Attribute TargetId: The ID of the principal.
     */
    public readonly attrTargetId: ros.IResolvable;

    /**
     * @Attribute UpdateTime: Update time of the resource share.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property resourceShareId: The ID of the resource share.
     */
    public resourceShareId: string | ros.IResolvable;

    /**
     * @Property targetId: The ID of the principal.
     */
    public targetId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSharedTargetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSharedTarget.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrResourceShareId = this.getAtt('ResourceShareId');
        this.attrResourceShareName = this.getAtt('ResourceShareName');
        this.attrTargetId = this.getAtt('TargetId');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceShareId = props.resourceShareId;
        this.targetId = props.targetId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            resourceShareId: this.resourceShareId,
            targetId: this.targetId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSharedTargetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
