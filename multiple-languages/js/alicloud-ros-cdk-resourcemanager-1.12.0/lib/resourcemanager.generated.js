"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosSharedTarget = exports.RosSavedQuery = exports.RosRole = exports.RosResourceShareAssociation = exports.RosResourceShare = exports.RosResourceGroup = exports.RosResourceDirectory = exports.RosPolicyAttachment = exports.RosMultiAccountDeliveryChannel = exports.RosMessageContact = exports.RosHandshake = exports.RosFolder = exports.RosDeliveryChannel = exports.RosDelegatedAdministrator = exports.RosControlPolicyAttachment = exports.RosControlPolicy = exports.RosAccount = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosAccountPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosAccount extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            displayName: this.displayName,
            deleteAccount: this.deleteAccount,
            folderId: this.folderId,
            payerAccountId: this.payerAccountId,
        };
    }
    renderProperties(props) {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAccount = RosAccount;
/**
 * The resource type name for this resource class.
 */
RosAccount.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Account";
/**
 * Determine whether the given properties match those of a `RosControlPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosControlPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosControlPolicyPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosControlPolicyPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosControlPolicy extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            controlPolicyName: this.controlPolicyName,
            effectScope: this.effectScope,
            policyDocument: this.policyDocument,
            description: this.description,
        };
    }
    renderProperties(props) {
        return rosControlPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosControlPolicy = RosControlPolicy;
/**
 * The resource type name for this resource class.
 */
RosControlPolicy.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ControlPolicy";
/**
 * Determine whether the given properties match those of a `RosControlPolicyAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosControlPolicyAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosControlPolicyAttachmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosControlPolicyAttachmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosControlPolicyAttachment extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            policyId: this.policyId,
            targetId: this.targetId,
        };
    }
    renderProperties(props) {
        return rosControlPolicyAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosControlPolicyAttachment = RosControlPolicyAttachment;
/**
 * The resource type name for this resource class.
 */
RosControlPolicyAttachment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ControlPolicyAttachment";
/**
 * Determine whether the given properties match those of a `RosDelegatedAdministratorProps`
 *
 * @param properties - the TypeScript properties of a `RosDelegatedAdministratorProps`
 *
 * @returns the result of the validation.
 */
function RosDelegatedAdministratorPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosDelegatedAdministratorPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosDelegatedAdministrator extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosDelegatedAdministrator.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountId = this.getAtt('AccountId');
        this.attrDelegationEnabledTime = this.getAtt('DelegationEnabledTime');
        this.attrServicePrincipal = this.getAtt('ServicePrincipal');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountId = props.accountId;
        this.servicePrincipal = props.servicePrincipal;
    }
    get rosProperties() {
        return {
            accountId: this.accountId,
            servicePrincipal: this.servicePrincipal,
        };
    }
    renderProperties(props) {
        return rosDelegatedAdministratorPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDelegatedAdministrator = RosDelegatedAdministrator;
/**
 * The resource type name for this resource class.
 */
RosDelegatedAdministrator.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::DelegatedAdministrator";
/**
 * Determine whether the given properties match those of a `RosDeliveryChannelProps`
 *
 * @param properties - the TypeScript properties of a `RosDeliveryChannelProps`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannelPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosDeliveryChannelPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosDeliveryChannel extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosDeliveryChannelPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDeliveryChannel = RosDeliveryChannel;
/**
 * The resource type name for this resource class.
 */
RosDeliveryChannel.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::DeliveryChannel";
/**
 * Determine whether the given properties match those of a `DeliveryChannelFilterProperty`
 *
 * @param properties - the TypeScript properties of a `DeliveryChannelFilterProperty`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannel_DeliveryChannelFilterPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosDeliveryChannelDeliveryChannelFilterPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosDeliveryChannel_DeliveryChannelFilterPropertyValidator(properties).assertSuccess();
    return {
        'ResourceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.resourceTypes),
        'AccountScopes': ros.listMapper(ros.stringToRosTemplate)(properties.accountScopes),
    };
}
/**
 * Determine whether the given properties match those of a `ResourceChangeDeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceChangeDeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannel_ResourceChangeDeliveryPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosDeliveryChannelResourceChangeDeliveryPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosDeliveryChannel_ResourceChangeDeliveryPropertyValidator(properties).assertSuccess();
    return {
        'SlsProperties': rosDeliveryChannelSlsPropertiesPropertyToRosTemplate(properties.slsProperties),
        'TargetArn': ros.stringToRosTemplate(properties.targetArn),
    };
}
/**
 * Determine whether the given properties match those of a `ResourceSnapshotDeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceSnapshotDeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannel_ResourceSnapshotDeliveryPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosDeliveryChannelResourceSnapshotDeliveryPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosDeliveryChannel_ResourceSnapshotDeliveryPropertyValidator(properties).assertSuccess();
    return {
        'CustomExpression': ros.stringToRosTemplate(properties.customExpression),
        'DeliveryTime': ros.stringToRosTemplate(properties.deliveryTime),
        'SlsProperties': rosDeliveryChannelResourceSnapshotDeliverySlsPropertiesPropertyToRosTemplate(properties.slsProperties),
        'TargetArn': ros.stringToRosTemplate(properties.targetArn),
    };
}
/**
 * Determine whether the given properties match those of a `ResourceSnapshotDeliverySlsPropertiesProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceSnapshotDeliverySlsPropertiesProperty`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannel_ResourceSnapshotDeliverySlsPropertiesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosDeliveryChannelResourceSnapshotDeliverySlsPropertiesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosDeliveryChannel_ResourceSnapshotDeliverySlsPropertiesPropertyValidator(properties).assertSuccess();
    return {
        'OversizedDataOssTargetArn': ros.stringToRosTemplate(properties.oversizedDataOssTargetArn),
    };
}
/**
 * Determine whether the given properties match those of a `SlsPropertiesProperty`
 *
 * @param properties - the TypeScript properties of a `SlsPropertiesProperty`
 *
 * @returns the result of the validation.
 */
function RosDeliveryChannel_SlsPropertiesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosDeliveryChannelSlsPropertiesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosDeliveryChannel_SlsPropertiesPropertyValidator(properties).assertSuccess();
    return {
        'OversizedDataOssTargetArn': ros.stringToRosTemplate(properties.oversizedDataOssTargetArn),
    };
}
/**
 * Determine whether the given properties match those of a `RosFolderProps`
 *
 * @param properties - the TypeScript properties of a `RosFolderProps`
 *
 * @returns the result of the validation.
 */
function RosFolderPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosFolderPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosFolder extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosFolder.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFolderId = this.getAtt('FolderId');
        this.attrFolderName = this.getAtt('FolderName');
        this.attrParentFolderId = this.getAtt('ParentFolderId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.folderName = props.folderName;
        this.parentFolderId = props.parentFolderId;
    }
    get rosProperties() {
        return {
            folderName: this.folderName,
            parentFolderId: this.parentFolderId,
        };
    }
    renderProperties(props) {
        return rosFolderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosFolder = RosFolder;
/**
 * The resource type name for this resource class.
 */
RosFolder.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Folder";
/**
 * Determine whether the given properties match those of a `RosHandshakeProps`
 *
 * @param properties - the TypeScript properties of a `RosHandshakeProps`
 *
 * @returns the result of the validation.
 */
function RosHandshakePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosHandshakePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosHandshake extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            targetEntity: this.targetEntity,
            targetType: this.targetType,
            note: this.note,
        };
    }
    renderProperties(props) {
        return rosHandshakePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosHandshake = RosHandshake;
/**
 * The resource type name for this resource class.
 */
RosHandshake.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Handshake";
/**
 * Determine whether the given properties match those of a `RosMessageContactProps`
 *
 * @param properties - the TypeScript properties of a `RosMessageContactProps`
 *
 * @returns the result of the validation.
 */
function RosMessageContactPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('messageTypes', ros.requiredValidator)(properties.messageTypes));
    errors.collect(ros.propertyValidator('messageTypes', ros.listValidator(ros.validateString))(properties.messageTypes));
    errors.collect(ros.propertyValidator('phoneNumber', ros.validateString)(properties.phoneNumber));
    errors.collect(ros.propertyValidator('title', ros.requiredValidator)(properties.title));
    if (properties.title && (typeof properties.title) !== 'object') {
        errors.collect(ros.propertyValidator('title', ros.validateAllowedValues)({
            data: properties.title,
            allowedValues: ["TechnicalDirector", "MaintenanceDirector", "ProjectDirector", "ProjectDirector", "CEO", "Other"],
        }));
    }
    errors.collect(ros.propertyValidator('title', ros.validateString)(properties.title));
    errors.collect(ros.propertyValidator('messageContactName', ros.requiredValidator)(properties.messageContactName));
    if (properties.messageContactName && (Array.isArray(properties.messageContactName) || (typeof properties.messageContactName) === 'string')) {
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
function rosMessageContactPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosMessageContact extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            emailAddress: this.emailAddress,
            messageContactName: this.messageContactName,
            messageTypes: this.messageTypes,
            title: this.title,
            phoneNumber: this.phoneNumber,
        };
    }
    renderProperties(props) {
        return rosMessageContactPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosMessageContact = RosMessageContact;
/**
 * The resource type name for this resource class.
 */
RosMessageContact.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::MessageContact";
/**
 * Determine whether the given properties match those of a `RosMultiAccountDeliveryChannelProps`
 *
 * @param properties - the TypeScript properties of a `RosMultiAccountDeliveryChannelProps`
 *
 * @returns the result of the validation.
 */
function RosMultiAccountDeliveryChannelPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosMultiAccountDeliveryChannelPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosMultiAccountDeliveryChannel extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            deliveryChannelDescription: this.deliveryChannelDescription,
            deliveryChannelFilter: this.deliveryChannelFilter,
            multiAccountDeliveryChannelName: this.multiAccountDeliveryChannelName,
            multiAccountDeliveryChannelId: this.multiAccountDeliveryChannelId,
            resourceChangeDelivery: this.resourceChangeDelivery,
            resourceSnapshotDelivery: this.resourceSnapshotDelivery,
        };
    }
    renderProperties(props) {
        return rosMultiAccountDeliveryChannelPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosMultiAccountDeliveryChannel = RosMultiAccountDeliveryChannel;
/**
 * The resource type name for this resource class.
 */
RosMultiAccountDeliveryChannel.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::MultiAccountDeliveryChannel";
/**
 * Determine whether the given properties match those of a `DeliveryChannelFilterProperty`
 *
 * @param properties - the TypeScript properties of a `DeliveryChannelFilterProperty`
 *
 * @returns the result of the validation.
 */
function RosMultiAccountDeliveryChannel_DeliveryChannelFilterPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosMultiAccountDeliveryChannelDeliveryChannelFilterPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMultiAccountDeliveryChannel_DeliveryChannelFilterPropertyValidator(properties).assertSuccess();
    return {
        'ResourceTypes': ros.listMapper(ros.stringToRosTemplate)(properties.resourceTypes),
        'AccountScopes': ros.listMapper(ros.stringToRosTemplate)(properties.accountScopes),
    };
}
/**
 * Determine whether the given properties match those of a `ResourceChangeDeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceChangeDeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosMultiAccountDeliveryChannel_ResourceChangeDeliveryPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosMultiAccountDeliveryChannelResourceChangeDeliveryPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMultiAccountDeliveryChannel_ResourceChangeDeliveryPropertyValidator(properties).assertSuccess();
    return {
        'SlsProperties': rosMultiAccountDeliveryChannelSlsPropertiesPropertyToRosTemplate(properties.slsProperties),
        'TargetArn': ros.stringToRosTemplate(properties.targetArn),
    };
}
/**
 * Determine whether the given properties match those of a `ResourceSnapshotDeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceSnapshotDeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosMultiAccountDeliveryChannel_ResourceSnapshotDeliveryPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosMultiAccountDeliveryChannelResourceSnapshotDeliveryPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMultiAccountDeliveryChannel_ResourceSnapshotDeliveryPropertyValidator(properties).assertSuccess();
    return {
        'DeliveryTime': ros.stringToRosTemplate(properties.deliveryTime),
        'TargetArn': ros.stringToRosTemplate(properties.targetArn),
    };
}
/**
 * Determine whether the given properties match those of a `SlsPropertiesProperty`
 *
 * @param properties - the TypeScript properties of a `SlsPropertiesProperty`
 *
 * @returns the result of the validation.
 */
function RosMultiAccountDeliveryChannel_SlsPropertiesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosMultiAccountDeliveryChannelSlsPropertiesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMultiAccountDeliveryChannel_SlsPropertiesPropertyValidator(properties).assertSuccess();
    return {
        'OversizedDataOssTargetArn': ros.stringToRosTemplate(properties.oversizedDataOssTargetArn),
    };
}
/**
 * Determine whether the given properties match those of a `RosPolicyAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosPolicyAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosPolicyAttachmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosPolicyAttachmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosPolicyAttachment extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            policyName: this.policyName,
            policyType: this.policyType,
            principalName: this.principalName,
            principalType: this.principalType,
            resourceGroupId: this.resourceGroupId,
        };
    }
    renderProperties(props) {
        return rosPolicyAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosPolicyAttachment = RosPolicyAttachment;
/**
 * The resource type name for this resource class.
 */
RosPolicyAttachment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::PolicyAttachment";
/**
 * Determine whether the given properties match those of a `RosResourceDirectoryProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceDirectoryProps`
 *
 * @returns the result of the validation.
 */
function RosResourceDirectoryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosResourceDirectoryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosResourceDirectoryPropsValidator(properties).assertSuccess();
    }
    return {};
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ResourceManager::ResourceDirectory`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceDirectory` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
 */
class RosResourceDirectory extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosResourceDirectory.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMasterAccountId = this.getAtt('MasterAccountId');
        this.attrMasterAccountName = this.getAtt('MasterAccountName');
        this.attrResourceDirectoryId = this.getAtt('ResourceDirectoryId');
        this.attrRootFolderId = this.getAtt('RootFolderId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }
    get rosProperties() {
        return {};
    }
    renderProperties(props) {
        return rosResourceDirectoryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosResourceDirectory = RosResourceDirectory;
/**
 * The resource type name for this resource class.
 */
RosResourceDirectory.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceDirectory";
/**
 * Determine whether the given properties match those of a `RosResourceGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the result of the validation.
 */
function RosResourceGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('displayName', ros.requiredValidator)(properties.displayName));
    errors.collect(ros.propertyValidator('displayName', ros.validateString)(properties.displayName));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
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
function rosResourceGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosResourceGroup extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            displayName: this.displayName,
            name: this.name,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosResourceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosResourceGroup = RosResourceGroup;
/**
 * The resource type name for this resource class.
 */
RosResourceGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceGroup";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosResourceGroup_TagsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosResourceGroupTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosResourceGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
        'Value': ros.stringToRosTemplate(properties.value),
        'Key': ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosResourceShareProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceShareProps`
 *
 * @returns the result of the validation.
 */
function RosResourceSharePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceShareName', ros.requiredValidator)(properties.resourceShareName));
    if (properties.resourceShareName && (typeof properties.resourceShareName) !== 'object') {
        errors.collect(ros.propertyValidator('resourceShareName', ros.validateAllowedPattern)({
            data: properties.resourceShareName,
            reg: /[-a-zA-Z0-9_\.]{1,50}/
        }));
    }
    errors.collect(ros.propertyValidator('resourceShareName', ros.validateString)(properties.resourceShareName));
    if (properties.targets && (Array.isArray(properties.targets) || (typeof properties.targets) === 'string')) {
        errors.collect(ros.propertyValidator('targets', ros.validateLength)({
            data: properties.targets.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('targets', ros.listValidator(ros.validateString))(properties.targets));
    errors.collect(ros.propertyValidator('allowExternalTargets', ros.validateBoolean)(properties.allowExternalTargets));
    if (properties.resources && (Array.isArray(properties.resources) || (typeof properties.resources) === 'string')) {
        errors.collect(ros.propertyValidator('resources', ros.validateLength)({
            data: properties.resources.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('resources', ros.listValidator(RosResourceShare_ResourcesPropertyValidator))(properties.resources));
    if (properties.permissionNames && (Array.isArray(properties.permissionNames) || (typeof properties.permissionNames) === 'string')) {
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
function rosResourceSharePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosResourceShare extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosResourceShare.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrResourceShareId = this.getAtt('ResourceShareId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceShareName = props.resourceShareName;
        this.allowExternalTargets = props.allowExternalTargets;
        this.permissionNames = props.permissionNames;
        this.resources = props.resources;
        this.targets = props.targets;
    }
    get rosProperties() {
        return {
            resourceShareName: this.resourceShareName,
            allowExternalTargets: this.allowExternalTargets,
            permissionNames: this.permissionNames,
            resources: this.resources,
            targets: this.targets,
        };
    }
    renderProperties(props) {
        return rosResourceSharePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosResourceShare = RosResourceShare;
/**
 * The resource type name for this resource class.
 */
RosResourceShare.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceShare";
/**
 * Determine whether the given properties match those of a `ResourcesProperty`
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the result of the validation.
 */
function RosResourceShare_ResourcesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosResourceShareResourcesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosResourceShare_ResourcesPropertyValidator(properties).assertSuccess();
    return {
        'ResourceId': ros.stringToRosTemplate(properties.resourceId),
        'ResourceType': ros.stringToRosTemplate(properties.resourceType),
    };
}
/**
 * Determine whether the given properties match those of a `RosResourceShareAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceShareAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosResourceShareAssociationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceShareId', ros.requiredValidator)(properties.resourceShareId));
    errors.collect(ros.propertyValidator('resourceShareId', ros.validateString)(properties.resourceShareId));
    if (properties.targets && (Array.isArray(properties.targets) || (typeof properties.targets) === 'string')) {
        errors.collect(ros.propertyValidator('targets', ros.validateLength)({
            data: properties.targets.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('targets', ros.listValidator(ros.validateString))(properties.targets));
    if (properties.resources && (Array.isArray(properties.resources) || (typeof properties.resources) === 'string')) {
        errors.collect(ros.propertyValidator('resources', ros.validateLength)({
            data: properties.resources.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('resources', ros.listValidator(RosResourceShareAssociation_ResourcesPropertyValidator))(properties.resources));
    if (properties.permissionNames && (Array.isArray(properties.permissionNames) || (typeof properties.permissionNames) === 'string')) {
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
function rosResourceShareAssociationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosResourceShareAssociation extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosResourceShareAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrResourceShareId = this.getAtt('ResourceShareId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceShareId = props.resourceShareId;
        this.permissionNames = props.permissionNames;
        this.resources = props.resources;
        this.targets = props.targets;
    }
    get rosProperties() {
        return {
            resourceShareId: this.resourceShareId,
            permissionNames: this.permissionNames,
            resources: this.resources,
            targets: this.targets,
        };
    }
    renderProperties(props) {
        return rosResourceShareAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosResourceShareAssociation = RosResourceShareAssociation;
/**
 * The resource type name for this resource class.
 */
RosResourceShareAssociation.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::ResourceShareAssociation";
/**
 * Determine whether the given properties match those of a `ResourcesProperty`
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the result of the validation.
 */
function RosResourceShareAssociation_ResourcesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosResourceShareAssociationResourcesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosResourceShareAssociation_ResourcesPropertyValidator(properties).assertSuccess();
    return {
        'ResourceId': ros.stringToRosTemplate(properties.resourceId),
        'ResourceType': ros.stringToRosTemplate(properties.resourceType),
    };
}
/**
 * Determine whether the given properties match those of a `RosRoleProps`
 *
 * @param properties - the TypeScript properties of a `RosRoleProps`
 *
 * @returns the result of the validation.
 */
function RosRolePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.maxSessionDuration && (typeof properties.maxSessionDuration) !== 'object') {
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
function rosRolePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosRole extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            assumeRolePolicyDocument: this.assumeRolePolicyDocument,
            roleName: this.roleName,
            description: this.description,
            maxSessionDuration: this.maxSessionDuration,
        };
    }
    renderProperties(props) {
        return rosRolePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRole = RosRole;
/**
 * The resource type name for this resource class.
 */
RosRole.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::Role";
/**
 * Determine whether the given properties match those of a `RosSavedQueryProps`
 *
 * @param properties - the TypeScript properties of a `RosSavedQueryProps`
 *
 * @returns the result of the validation.
 */
function RosSavedQueryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
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
    if (properties.savedQueryName && (Array.isArray(properties.savedQueryName) || (typeof properties.savedQueryName) === 'string')) {
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
function rosSavedQueryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosSavedQuery extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            expression: this.expression,
            savedQueryName: this.savedQueryName,
            description: this.description,
        };
    }
    renderProperties(props) {
        return rosSavedQueryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSavedQuery = RosSavedQuery;
/**
 * The resource type name for this resource class.
 */
RosSavedQuery.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::SavedQuery";
/**
 * Determine whether the given properties match those of a `RosSharedTargetProps`
 *
 * @param properties - the TypeScript properties of a `RosSharedTargetProps`
 *
 * @returns the result of the validation.
 */
function RosSharedTargetPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosSharedTargetPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosSharedTarget extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            resourceShareId: this.resourceShareId,
            targetId: this.targetId,
        };
    }
    renderProperties(props) {
        return rosSharedTargetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSharedTarget = RosSharedTarget;
/**
 * The resource type name for this resource class.
 */
RosSharedTarget.ROS_RESOURCE_TYPE_NAME = "ALIYUN::ResourceManager::SharedTarget";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VtYW5hZ2VyLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlc291cmNlbWFuYWdlci5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQTZCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx3QkFBd0IsQ0FBQyxVQUFlO0lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN2RyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDcEcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWEs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QUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFDekUsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyxpQ0FBaUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7QUF2RUwsMENBd0VDO0FBdkVHOztHQUVHO0FBQ29CLHNDQUFzQixHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NBY2NvdW50YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1hY2NvdW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQWNjb3VudFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNwbGF5TmFtZTogTWVtYmVyIG5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBkaXNwbGF5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0ZUFjY291bnQ6IFdoZXRoZXIgZGVsZXRlIHRoZSBhY2NvdW50LiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0ZUFjY291bnQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZvbGRlcklkOiBUaGUgSUQgb2YgdGhlIHBhcmVudCBmb2xkZXJcbiAgICAgKi9cbiAgICByZWFkb25seSBmb2xkZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXllckFjY291bnRJZDpcbiAgICAgKi9cbiAgICByZWFkb25seSBwYXllckFjY291bnRJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBY2NvdW50UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FjY291bnRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBY2NvdW50UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwYXllckFjY291bnRJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wYXllckFjY291bnRJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlzcGxheU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGlzcGxheU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc3BsYXlOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmb2xkZXJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5mb2xkZXJJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsZXRlQWNjb3VudCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuZGVsZXRlQWNjb3VudCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBY2NvdW50UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6QWNjb3VudGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWNjb3VudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkFjY291bnRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQWNjb3VudFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQWNjb3VudFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdEaXNwbGF5TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlzcGxheU5hbWUpLFxuICAgICAgJ0RlbGV0ZUFjY291bnQnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxldGVBY2NvdW50KSxcbiAgICAgICdGb2xkZXJJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZm9sZGVySWQpLFxuICAgICAgJ1BheWVyQWNjb3VudElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wYXllckFjY291bnRJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpBY2NvdW50YC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQWNjb3VudGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLWFjY291bnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FjY291bnQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJlc291cmNlTWFuYWdlcjo6QWNjb3VudFwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBY2NvdW50SWQ6IFRoaXMgSUQgb2YgUmVzb3VyY2UgTWFuYWdlciBBY2NvdW50XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY2NvdW50SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGlzcGxheU5hbWU6IE1lbWJlciBuYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEaXNwbGF5TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBGb2xkZXJJZDogVGhlIElEIG9mIHRoZSBwYXJlbnQgZm9sZGVyXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGb2xkZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBKb2luTWV0aG9kOiBXYXlzIGZvciBtZW1iZXJzIHRvIGpvaW4gdGhlIHJlc291cmNlIGRpcmVjdG9yeS4gVmFsaWQgdmFsdWVzOiBpbnZpdGVkLCBjcmVhdGVkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJKb2luTWV0aG9kOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc291cmNlRGlyZWN0b3J5SWQ6IFJlc291cmNlIGRpcmVjdG9yeSBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VEaXJlY3RvcnlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUeXBlOiBNZW1iZXIgdHlwZS4gVGhlIHZhbHVlIG9mIFJlc291cmNlQWNjb3VudCBpbmRpY2F0ZXMgdGhlIHJlc291cmNlIGFjY291bnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpc3BsYXlOYW1lOiBNZW1iZXIgbmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGV0ZUFjY291bnQ6IFdoZXRoZXIgZGVsZXRlIHRoZSBhY2NvdW50LiBEZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxldGVBY2NvdW50OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZvbGRlcklkOiBUaGUgSUQgb2YgdGhlIHBhcmVudCBmb2xkZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXllckFjY291bnRJZDpcbiAgICAgKi9cbiAgICBwdWJsaWMgcGF5ZXJBY2NvdW50SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBY2NvdW50UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBY2NvdW50LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBY2NvdW50SWQgPSB0aGlzLmdldEF0dCgnQWNjb3VudElkJyk7XG4gICAgICAgIHRoaXMuYXR0ckRpc3BsYXlOYW1lID0gdGhpcy5nZXRBdHQoJ0Rpc3BsYXlOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckZvbGRlcklkID0gdGhpcy5nZXRBdHQoJ0ZvbGRlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckpvaW5NZXRob2QgPSB0aGlzLmdldEF0dCgnSm9pbk1ldGhvZCcpO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZURpcmVjdG9yeUlkID0gdGhpcy5nZXRBdHQoJ1Jlc291cmNlRGlyZWN0b3J5SWQnKTtcbiAgICAgICAgdGhpcy5hdHRyVHlwZSA9IHRoaXMuZ2V0QXR0KCdUeXBlJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gcHJvcHMuZGlzcGxheU5hbWU7XG4gICAgICAgIHRoaXMuZGVsZXRlQWNjb3VudCA9IHByb3BzLmRlbGV0ZUFjY291bnQ7XG4gICAgICAgIHRoaXMuZm9sZGVySWQgPSBwcm9wcy5mb2xkZXJJZDtcbiAgICAgICAgdGhpcy5wYXllckFjY291bnRJZCA9IHByb3BzLnBheWVyQWNjb3VudElkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiB0aGlzLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgZGVsZXRlQWNjb3VudDogdGhpcy5kZWxldGVBY2NvdW50LFxuICAgICAgICAgICAgZm9sZGVySWQ6IHRoaXMuZm9sZGVySWQsXG4gICAgICAgICAgICBwYXllckFjY291bnRJZDogdGhpcy5wYXllckFjY291bnRJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQWNjb3VudFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0NvbnRyb2xQb2xpY3lgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLWNvbnRyb2xwb2xpY3lcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDb250cm9sUG9saWN5UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRyb2xQb2xpY3lOYW1lOiBQb2xpY3lOYW1lXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udHJvbFBvbGljeU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlZmZlY3RTY29wZTogRWZmZWN0U2NvcGVcbiAgICAgKi9cbiAgICByZWFkb25seSBlZmZlY3RTY29wZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeURvY3VtZW50OiBQb2xpY3lEb2N1bWVudFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGljeURvY3VtZW50OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ29udHJvbFBvbGljeVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDb250cm9sUG9saWN5UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ29udHJvbFBvbGljeVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeURvY3VtZW50Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvbGljeURvY3VtZW50KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3lEb2N1bWVudCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb2xpY3lEb2N1bWVudCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udHJvbFBvbGljeU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29udHJvbFBvbGljeU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRyb2xQb2xpY3lOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnRyb2xQb2xpY3lOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlZmZlY3RTY29wZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5lZmZlY3RTY29wZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZWZmZWN0U2NvcGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZWZmZWN0U2NvcGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ29udHJvbFBvbGljeVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkNvbnRyb2xQb2xpY3lgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NvbnRyb2xQb2xpY3lQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpDb250cm9sUG9saWN5YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NvbnRyb2xQb2xpY3lQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0NvbnRyb2xQb2xpY3lQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnQ29udHJvbFBvbGljeU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnRyb2xQb2xpY3lOYW1lKSxcbiAgICAgICdFZmZlY3RTY29wZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZWZmZWN0U2NvcGUpLFxuICAgICAgJ1BvbGljeURvY3VtZW50Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wb2xpY3lEb2N1bWVudCksXG4gICAgICAnRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkNvbnRyb2xQb2xpY3lgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGN1c3RvbSBjb250cm9sIHBvbGljeS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgQ29udHJvbFBvbGljeWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLWNvbnRyb2xwb2xpY3lcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0NvbnRyb2xQb2xpY3kgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJlc291cmNlTWFuYWdlcjo6Q29udHJvbFBvbGljeVwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBdHRhY2htZW50Q291bnQ6IEF0dGFjaG1lbnRDb3VudFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXR0YWNobWVudENvdW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENvbnRyb2xQb2xpY3lOYW1lOiBQb2xpY3lOYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb250cm9sUG9saWN5TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEZXNjcmlwdGlvbjogRGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEVmZmVjdFNjb3BlOiBFZmZlY3RTY29wZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRWZmZWN0U2NvcGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUG9saWN5RG9jdW1lbnQ6IFBvbGljeURvY3VtZW50XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQb2xpY3lEb2N1bWVudDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQb2xpY3lJZDogUG9saWN5SWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBvbGljeUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBvbGljeVR5cGU6IFBvbGljeVR5cGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBvbGljeVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRyb2xQb2xpY3lOYW1lOiBQb2xpY3lOYW1lXG4gICAgICovXG4gICAgcHVibGljIGNvbnRyb2xQb2xpY3lOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWZmZWN0U2NvcGU6IEVmZmVjdFNjb3BlXG4gICAgICovXG4gICAgcHVibGljIGVmZmVjdFNjb3BlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5RG9jdW1lbnQ6IFBvbGljeURvY3VtZW50XG4gICAgICovXG4gICAgcHVibGljIHBvbGljeURvY3VtZW50OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IERlc2NyaXB0aW9uXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ29udHJvbFBvbGljeVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ29udHJvbFBvbGljeS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQXR0YWNobWVudENvdW50ID0gdGhpcy5nZXRBdHQoJ0F0dGFjaG1lbnRDb3VudCcpO1xuICAgICAgICB0aGlzLmF0dHJDb250cm9sUG9saWN5TmFtZSA9IHRoaXMuZ2V0QXR0KCdDb250cm9sUG9saWN5TmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJEZXNjcmlwdGlvbiA9IHRoaXMuZ2V0QXR0KCdEZXNjcmlwdGlvbicpO1xuICAgICAgICB0aGlzLmF0dHJFZmZlY3RTY29wZSA9IHRoaXMuZ2V0QXR0KCdFZmZlY3RTY29wZScpO1xuICAgICAgICB0aGlzLmF0dHJQb2xpY3lEb2N1bWVudCA9IHRoaXMuZ2V0QXR0KCdQb2xpY3lEb2N1bWVudCcpO1xuICAgICAgICB0aGlzLmF0dHJQb2xpY3lJZCA9IHRoaXMuZ2V0QXR0KCdQb2xpY3lJZCcpO1xuICAgICAgICB0aGlzLmF0dHJQb2xpY3lUeXBlID0gdGhpcy5nZXRBdHQoJ1BvbGljeVR5cGUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY29udHJvbFBvbGljeU5hbWUgPSBwcm9wcy5jb250cm9sUG9saWN5TmFtZTtcbiAgICAgICAgdGhpcy5lZmZlY3RTY29wZSA9IHByb3BzLmVmZmVjdFNjb3BlO1xuICAgICAgICB0aGlzLnBvbGljeURvY3VtZW50ID0gcHJvcHMucG9saWN5RG9jdW1lbnQ7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250cm9sUG9saWN5TmFtZTogdGhpcy5jb250cm9sUG9saWN5TmFtZSxcbiAgICAgICAgICAgIGVmZmVjdFNjb3BlOiB0aGlzLmVmZmVjdFNjb3BlLFxuICAgICAgICAgICAgcG9saWN5RG9jdW1lbnQ6IHRoaXMucG9saWN5RG9jdW1lbnQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ29udHJvbFBvbGljeVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc0NvbnRyb2xQb2xpY3lBdHRhY2htZW50YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1jb250cm9scG9saWN5YXR0YWNobWVudFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0NvbnRyb2xQb2xpY3lBdHRhY2htZW50UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeUlkOiBQb2xpY3lJZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGljeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0SWQ6IFRhcmdldElkXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDb250cm9sUG9saWN5QXR0YWNobWVudFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDb250cm9sUG9saWN5QXR0YWNobWVudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0NvbnRyb2xQb2xpY3lBdHRhY2htZW50UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50YXJnZXRJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFyZ2V0SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvbGljeUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3lJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb2xpY3lJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDb250cm9sUG9saWN5QXR0YWNobWVudFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkNvbnRyb2xQb2xpY3lBdHRhY2htZW50YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDb250cm9sUG9saWN5QXR0YWNobWVudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkNvbnRyb2xQb2xpY3lBdHRhY2htZW50YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NvbnRyb2xQb2xpY3lBdHRhY2htZW50UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDb250cm9sUG9saWN5QXR0YWNobWVudFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdQb2xpY3lJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucG9saWN5SWQpLFxuICAgICAgJ1RhcmdldElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpDb250cm9sUG9saWN5QXR0YWNobWVudGAsIHdoaWNoIGlzIHVzZWQgdG8gYXR0YWNoIGEgY3VzdG9tIGNvbnRyb2wgcG9saWN5LlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBDb250cm9sUG9saWN5QXR0YWNobWVudGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLWNvbnRyb2xwb2xpY3lhdHRhY2htZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDb250cm9sUG9saWN5QXR0YWNobWVudCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpDb250cm9sUG9saWN5QXR0YWNobWVudFwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBdHRhY2hEYXRlOiBBdHRhY2hEYXRlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBdHRhY2hEYXRlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERlc2NyaXB0aW9uOiBEZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVzY3JpcHRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUG9saWN5SWQ6IFBvbGljeUlkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQb2xpY3lJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQb2xpY3lOYW1lOiBQb2xpY3lOYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQb2xpY3lOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBvbGljeVR5cGU6IFBvbGljeVR5cGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBvbGljeVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVGFyZ2V0SWQ6IFRhcmdldElkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYXJnZXRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5SWQ6IFBvbGljeUlkXG4gICAgICovXG4gICAgcHVibGljIHBvbGljeUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0SWQ6IFRhcmdldElkXG4gICAgICovXG4gICAgcHVibGljIHRhcmdldElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ29udHJvbFBvbGljeUF0dGFjaG1lbnRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0NvbnRyb2xQb2xpY3lBdHRhY2htZW50LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBdHRhY2hEYXRlID0gdGhpcy5nZXRBdHQoJ0F0dGFjaERhdGUnKTtcbiAgICAgICAgdGhpcy5hdHRyRGVzY3JpcHRpb24gPSB0aGlzLmdldEF0dCgnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGhpcy5hdHRyUG9saWN5SWQgPSB0aGlzLmdldEF0dCgnUG9saWN5SWQnKTtcbiAgICAgICAgdGhpcy5hdHRyUG9saWN5TmFtZSA9IHRoaXMuZ2V0QXR0KCdQb2xpY3lOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clBvbGljeVR5cGUgPSB0aGlzLmdldEF0dCgnUG9saWN5VHlwZScpO1xuICAgICAgICB0aGlzLmF0dHJUYXJnZXRJZCA9IHRoaXMuZ2V0QXR0KCdUYXJnZXRJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5wb2xpY3lJZCA9IHByb3BzLnBvbGljeUlkO1xuICAgICAgICB0aGlzLnRhcmdldElkID0gcHJvcHMudGFyZ2V0SWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9saWN5SWQ6IHRoaXMucG9saWN5SWQsXG4gICAgICAgICAgICB0YXJnZXRJZDogdGhpcy50YXJnZXRJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ29udHJvbFBvbGljeUF0dGFjaG1lbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NEZWxlZ2F0ZWRBZG1pbmlzdHJhdG9yYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1kZWxlZ2F0ZWRhZG1pbmlzdHJhdG9yXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRGVsZWdhdGVkQWRtaW5pc3RyYXRvclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2NvdW50SWQ6IFRoZSBBbGliYWJhIENsb3VkIGFjY291bnQgSUQgb2YgdGhlIG1lbWJlciBpbiB0aGUgcmVzb3VyY2UgZGlyZWN0b3J5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY291bnRJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcnZpY2VQcmluY2lwYWw6IFRoZSBpZGVudGlmaWVyIG9mIHRoZSB0cnVzdGVkIHNlcnZpY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZVByaW5jaXBhbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0RlbGVnYXRlZEFkbWluaXN0cmF0b3JQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRGVsZWdhdGVkQWRtaW5pc3RyYXRvclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RlbGVnYXRlZEFkbWluaXN0cmF0b3JQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY291bnRJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hY2NvdW50SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjY291bnRJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hY2NvdW50SWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VQcmluY2lwYWwnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2VydmljZVByaW5jaXBhbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZVByaW5jaXBhbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJ2aWNlUHJpbmNpcGFsKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0RlbGVnYXRlZEFkbWluaXN0cmF0b3JQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpEZWxlZ2F0ZWRBZG1pbmlzdHJhdG9yYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEZWxlZ2F0ZWRBZG1pbmlzdHJhdG9yUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6RGVsZWdhdGVkQWRtaW5pc3RyYXRvcmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEZWxlZ2F0ZWRBZG1pbmlzdHJhdG9yUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NEZWxlZ2F0ZWRBZG1pbmlzdHJhdG9yUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0FjY291bnRJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNjb3VudElkKSxcbiAgICAgICdTZXJ2aWNlUHJpbmNpcGFsJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlUHJpbmNpcGFsKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkRlbGVnYXRlZEFkbWluaXN0cmF0b3JgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBEZWxlZ2F0ZWRBZG1pbmlzdHJhdG9yYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yZXNvdXJjZW1hbmFnZXItZGVsZWdhdGVkYWRtaW5pc3RyYXRvclxuICovXG5leHBvcnQgY2xhc3MgUm9zRGVsZWdhdGVkQWRtaW5pc3RyYXRvciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpEZWxlZ2F0ZWRBZG1pbmlzdHJhdG9yXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFjY291bnRJZDogVGhlIEFsaWJhYmEgQ2xvdWQgYWNjb3VudCBJRCBvZiB0aGUgbWVtYmVyIGluIHRoZSByZXNvdXJjZSBkaXJlY3RvcnkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY2NvdW50SWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGVsZWdhdGlvbkVuYWJsZWRUaW1lOiBTZXQgYXMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgZGVsZWdhdGVkIGFkbWluaXN0cmF0b3IgYWNjb3VudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlbGVnYXRpb25FbmFibGVkVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlUHJpbmNpcGFsOiBUaGUgaWRlbnRpZmllciBvZiB0aGUgdHJ1c3RlZCBzZXJ2aWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZVByaW5jaXBhbDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNjb3VudElkOiBUaGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50IElEIG9mIHRoZSBtZW1iZXIgaW4gdGhlIHJlc291cmNlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VydmljZVByaW5jaXBhbDogVGhlIGlkZW50aWZpZXIgb2YgdGhlIHRydXN0ZWQgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VydmljZVByaW5jaXBhbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0RlbGVnYXRlZEFkbWluaXN0cmF0b3JQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0RlbGVnYXRlZEFkbWluaXN0cmF0b3IuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckFjY291bnRJZCA9IHRoaXMuZ2V0QXR0KCdBY2NvdW50SWQnKTtcbiAgICAgICAgdGhpcy5hdHRyRGVsZWdhdGlvbkVuYWJsZWRUaW1lID0gdGhpcy5nZXRBdHQoJ0RlbGVnYXRpb25FbmFibGVkVGltZScpO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlUHJpbmNpcGFsID0gdGhpcy5nZXRBdHQoJ1NlcnZpY2VQcmluY2lwYWwnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYWNjb3VudElkID0gcHJvcHMuYWNjb3VudElkO1xuICAgICAgICB0aGlzLnNlcnZpY2VQcmluY2lwYWwgPSBwcm9wcy5zZXJ2aWNlUHJpbmNpcGFsO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjY291bnRJZDogdGhpcy5hY2NvdW50SWQsXG4gICAgICAgICAgICBzZXJ2aWNlUHJpbmNpcGFsOiB0aGlzLnNlcnZpY2VQcmluY2lwYWwsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0RlbGVnYXRlZEFkbWluaXN0cmF0b3JQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NEZWxpdmVyeUNoYW5uZWxgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLWRlbGl2ZXJ5Y2hhbm5lbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0RlbGl2ZXJ5Q2hhbm5lbFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxpdmVyeUNoYW5uZWxGaWx0ZXI6IFRoZSBlZmZlY3RpdmUgc2NvcGUgb2YgdGhlIGRlbGl2ZXJ5IGNoYW5uZWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsaXZlcnlDaGFubmVsRmlsdGVyOiBSb3NEZWxpdmVyeUNoYW5uZWwuRGVsaXZlcnlDaGFubmVsRmlsdGVyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsaXZlcnlDaGFubmVsTmFtZTogVGhlIG5hbWUgb2YgdGhlIGRlbGl2ZXJ5IGNoYW5uZWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsaXZlcnlDaGFubmVsTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGl2ZXJ5Q2hhbm5lbERlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGRlbGl2ZXJ5IGNoYW5uZWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsaXZlcnlDaGFubmVsSWQ6IFRoZSBJRCBvZiB0aGUgZGVsaXZlcnkgY2hhbm5lbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxpdmVyeUNoYW5uZWxJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVkUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeTogRW5hYmxlIHJlc291cmNlIGNoYW5nZSBkZWxpdmVyeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVkUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVkUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5OiBFbmFibGUgcmVzb3VyY2Ugc25hcHNob3QgZGVsaXZlcnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlZFJlc291cmNlU25hcHNob3REZWxpdmVyeT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUNoYW5nZURlbGl2ZXJ5OiBUaGUgZGVsaXZlcnkgb2YgcmVzb3VyY2UgY29uZmlndXJhdGlvbiBjaGFuZ2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlQ2hhbmdlRGVsaXZlcnk/OiBSb3NEZWxpdmVyeUNoYW5uZWwuUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlU25hcHNob3REZWxpdmVyeTogVGhlIHNjaGVkdWxlZCBkZWxpdmVyeSBvZiByZXNvdXJjZSBzbmFwc2hvdHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5PzogUm9zRGVsaXZlcnlDaGFubmVsLlJlc291cmNlU25hcHNob3REZWxpdmVyeVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0RlbGl2ZXJ5Q2hhbm5lbFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEZWxpdmVyeUNoYW5uZWxQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NEZWxpdmVyeUNoYW5uZWxQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlQ2hhbmdlRGVsaXZlcnknLCBSb3NEZWxpdmVyeUNoYW5uZWxfUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeVByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlc291cmNlQ2hhbmdlRGVsaXZlcnkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZWRSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZW5hYmxlZFJlc291cmNlU25hcHNob3REZWxpdmVyeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsaXZlcnlDaGFubmVsTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kZWxpdmVyeUNoYW5uZWxOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxpdmVyeUNoYW5uZWxOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlbGl2ZXJ5Q2hhbm5lbE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGl2ZXJ5Q2hhbm5lbElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlbGl2ZXJ5Q2hhbm5lbElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZWxpdmVyeUNoYW5uZWxEZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZWxpdmVyeUNoYW5uZWxEZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlZFJlc291cmNlQ2hhbmdlRGVsaXZlcnknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZW5hYmxlZFJlc291cmNlQ2hhbmdlRGVsaXZlcnkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGl2ZXJ5Q2hhbm5lbEZpbHRlcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kZWxpdmVyeUNoYW5uZWxGaWx0ZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGl2ZXJ5Q2hhbm5lbEZpbHRlcicsIFJvc0RlbGl2ZXJ5Q2hhbm5lbF9EZWxpdmVyeUNoYW5uZWxGaWx0ZXJQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5kZWxpdmVyeUNoYW5uZWxGaWx0ZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlU25hcHNob3REZWxpdmVyeScsIFJvc0RlbGl2ZXJ5Q2hhbm5lbF9SZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5yZXNvdXJjZVNuYXBzaG90RGVsaXZlcnkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRGVsaXZlcnlDaGFubmVsUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6RGVsaXZlcnlDaGFubmVsYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEZWxpdmVyeUNoYW5uZWxQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpEZWxpdmVyeUNoYW5uZWxgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRGVsaXZlcnlDaGFubmVsUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NEZWxpdmVyeUNoYW5uZWxQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnRGVsaXZlcnlDaGFubmVsRmlsdGVyJzogcm9zRGVsaXZlcnlDaGFubmVsRGVsaXZlcnlDaGFubmVsRmlsdGVyUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVsaXZlcnlDaGFubmVsRmlsdGVyKSxcbiAgICAgICdEZWxpdmVyeUNoYW5uZWxOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxpdmVyeUNoYW5uZWxOYW1lKSxcbiAgICAgICdEZWxpdmVyeUNoYW5uZWxEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb24pLFxuICAgICAgJ0RlbGl2ZXJ5Q2hhbm5lbElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxpdmVyeUNoYW5uZWxJZCksXG4gICAgICAnRW5hYmxlZFJlc291cmNlQ2hhbmdlRGVsaXZlcnknOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZWRSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5KSxcbiAgICAgICdFbmFibGVkUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVkUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5KSxcbiAgICAgICdSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5Jzogcm9zRGVsaXZlcnlDaGFubmVsUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlQ2hhbmdlRGVsaXZlcnkpLFxuICAgICAgJ1Jlc291cmNlU25hcHNob3REZWxpdmVyeSc6IHJvc0RlbGl2ZXJ5Q2hhbm5lbFJlc291cmNlU25hcHNob3REZWxpdmVyeVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlU25hcHNob3REZWxpdmVyeSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpEZWxpdmVyeUNoYW5uZWxgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBEZWxpdmVyeUNoYW5uZWxgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1kZWxpdmVyeWNoYW5uZWxcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0RlbGl2ZXJ5Q2hhbm5lbCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpEZWxpdmVyeUNoYW5uZWxcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZGVsaXZlcnkgY2hhbm5lbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlbGl2ZXJ5Q2hhbm5lbERlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERlbGl2ZXJ5Q2hhbm5lbEZpbHRlcjogVGhlIGVmZmVjdGl2ZSBzY29wZSBvZiB0aGUgZGVsaXZlcnkgY2hhbm5lbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlbGl2ZXJ5Q2hhbm5lbEZpbHRlcjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEZWxpdmVyeUNoYW5uZWxJZDogVGhlIElEIG9mIHRoZSBkZWxpdmVyeSBjaGFubmVsLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVsaXZlcnlDaGFubmVsSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGVsaXZlcnlDaGFubmVsTmFtZTogVGhlIG5hbWUgb2YgdGhlIGRlbGl2ZXJ5IGNoYW5uZWwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWxpdmVyeUNoYW5uZWxOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc291cmNlQ2hhbmdlRGVsaXZlcnk6IFRoZSBkZWxpdmVyeSBvZiByZXNvdXJjZSBjb25maWd1cmF0aW9uIGNoYW5nZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc291cmNlU25hcHNob3REZWxpdmVyeTogVGhlIHNjaGVkdWxlZCBkZWxpdmVyeSBvZiByZXNvdXJjZSBzbmFwc2hvdHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGl2ZXJ5Q2hhbm5lbEZpbHRlcjogVGhlIGVmZmVjdGl2ZSBzY29wZSBvZiB0aGUgZGVsaXZlcnkgY2hhbm5lbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVsaXZlcnlDaGFubmVsRmlsdGVyOiBSb3NEZWxpdmVyeUNoYW5uZWwuRGVsaXZlcnlDaGFubmVsRmlsdGVyUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsaXZlcnlDaGFubmVsTmFtZTogVGhlIG5hbWUgb2YgdGhlIGRlbGl2ZXJ5IGNoYW5uZWwuXG4gICAgICovXG4gICAgcHVibGljIGRlbGl2ZXJ5Q2hhbm5lbE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxpdmVyeUNoYW5uZWxEZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBkZWxpdmVyeSBjaGFubmVsLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxpdmVyeUNoYW5uZWxEZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlbGl2ZXJ5Q2hhbm5lbElkOiBUaGUgSUQgb2YgdGhlIGRlbGl2ZXJ5IGNoYW5uZWwuXG4gICAgICovXG4gICAgcHVibGljIGRlbGl2ZXJ5Q2hhbm5lbElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlZFJlc291cmNlQ2hhbmdlRGVsaXZlcnk6IEVuYWJsZSByZXNvdXJjZSBjaGFuZ2UgZGVsaXZlcnkuXG4gICAgICovXG4gICAgcHVibGljIGVuYWJsZWRSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlZFJlc291cmNlU25hcHNob3REZWxpdmVyeTogRW5hYmxlIHJlc291cmNlIHNuYXBzaG90IGRlbGl2ZXJ5LlxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVkUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VDaGFuZ2VEZWxpdmVyeTogVGhlIGRlbGl2ZXJ5IG9mIHJlc291cmNlIGNvbmZpZ3VyYXRpb24gY2hhbmdlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VDaGFuZ2VEZWxpdmVyeTogUm9zRGVsaXZlcnlDaGFubmVsLlJlc291cmNlQ2hhbmdlRGVsaXZlcnlQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZVNuYXBzaG90RGVsaXZlcnk6IFRoZSBzY2hlZHVsZWQgZGVsaXZlcnkgb2YgcmVzb3VyY2Ugc25hcHNob3RzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNvdXJjZVNuYXBzaG90RGVsaXZlcnk6IFJvc0RlbGl2ZXJ5Q2hhbm5lbC5SZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NEZWxpdmVyeUNoYW5uZWxQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0RlbGl2ZXJ5Q2hhbm5lbC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb24gPSB0aGlzLmdldEF0dCgnRGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGhpcy5hdHRyRGVsaXZlcnlDaGFubmVsRmlsdGVyID0gdGhpcy5nZXRBdHQoJ0RlbGl2ZXJ5Q2hhbm5lbEZpbHRlcicpO1xuICAgICAgICB0aGlzLmF0dHJEZWxpdmVyeUNoYW5uZWxJZCA9IHRoaXMuZ2V0QXR0KCdEZWxpdmVyeUNoYW5uZWxJZCcpO1xuICAgICAgICB0aGlzLmF0dHJEZWxpdmVyeUNoYW5uZWxOYW1lID0gdGhpcy5nZXRBdHQoJ0RlbGl2ZXJ5Q2hhbm5lbE5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeSA9IHRoaXMuZ2V0QXR0KCdSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5Jyk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlU25hcHNob3REZWxpdmVyeSA9IHRoaXMuZ2V0QXR0KCdSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnknKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZGVsaXZlcnlDaGFubmVsRmlsdGVyID0gcHJvcHMuZGVsaXZlcnlDaGFubmVsRmlsdGVyO1xuICAgICAgICB0aGlzLmRlbGl2ZXJ5Q2hhbm5lbE5hbWUgPSBwcm9wcy5kZWxpdmVyeUNoYW5uZWxOYW1lO1xuICAgICAgICB0aGlzLmRlbGl2ZXJ5Q2hhbm5lbERlc2NyaXB0aW9uID0gcHJvcHMuZGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZGVsaXZlcnlDaGFubmVsSWQgPSBwcm9wcy5kZWxpdmVyeUNoYW5uZWxJZDtcbiAgICAgICAgdGhpcy5lbmFibGVkUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeSA9IHByb3BzLmVuYWJsZWRSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5O1xuICAgICAgICB0aGlzLmVuYWJsZWRSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnkgPSBwcm9wcy5lbmFibGVkUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5O1xuICAgICAgICB0aGlzLnJlc291cmNlQ2hhbmdlRGVsaXZlcnkgPSBwcm9wcy5yZXNvdXJjZUNoYW5nZURlbGl2ZXJ5O1xuICAgICAgICB0aGlzLnJlc291cmNlU25hcHNob3REZWxpdmVyeSA9IHByb3BzLnJlc291cmNlU25hcHNob3REZWxpdmVyeTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWxpdmVyeUNoYW5uZWxGaWx0ZXI6IHRoaXMuZGVsaXZlcnlDaGFubmVsRmlsdGVyLFxuICAgICAgICAgICAgZGVsaXZlcnlDaGFubmVsTmFtZTogdGhpcy5kZWxpdmVyeUNoYW5uZWxOYW1lLFxuICAgICAgICAgICAgZGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb246IHRoaXMuZGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkZWxpdmVyeUNoYW5uZWxJZDogdGhpcy5kZWxpdmVyeUNoYW5uZWxJZCxcbiAgICAgICAgICAgIGVuYWJsZWRSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5OiB0aGlzLmVuYWJsZWRSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5LFxuICAgICAgICAgICAgZW5hYmxlZFJlc291cmNlU25hcHNob3REZWxpdmVyeTogdGhpcy5lbmFibGVkUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5LFxuICAgICAgICAgICAgcmVzb3VyY2VDaGFuZ2VEZWxpdmVyeTogdGhpcy5yZXNvdXJjZUNoYW5nZURlbGl2ZXJ5LFxuICAgICAgICAgICAgcmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5OiB0aGlzLnJlc291cmNlU25hcHNob3REZWxpdmVyeSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRGVsaXZlcnlDaGFubmVsUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRGVsaXZlcnlDaGFubmVsIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeUNoYW5uZWxGaWx0ZXJQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VUeXBlczogVGhlIGxpc3Qgb2YgcmVzb3VyY2UgdHlwZXMgdG8gYmUgZGVsaXZlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVzb3VyY2VUeXBlcz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYWNjb3VudFNjb3BlczogVGhlIGFjY291bnRzIHdpdGhpbiB0aGUgZGVsaXZlcnkgc2NvcGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBhY2NvdW50U2NvcGVzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYERlbGl2ZXJ5Q2hhbm5lbEZpbHRlclByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBEZWxpdmVyeUNoYW5uZWxGaWx0ZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NEZWxpdmVyeUNoYW5uZWxfRGVsaXZlcnlDaGFubmVsRmlsdGVyUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZVR5cGVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5yZXNvdXJjZVR5cGVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2NvdW50U2NvcGVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5hY2NvdW50U2NvcGVzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkRlbGl2ZXJ5Q2hhbm5lbEZpbHRlclByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkRlbGl2ZXJ5Q2hhbm5lbC5EZWxpdmVyeUNoYW5uZWxGaWx0ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERlbGl2ZXJ5Q2hhbm5lbEZpbHRlclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkRlbGl2ZXJ5Q2hhbm5lbC5EZWxpdmVyeUNoYW5uZWxGaWx0ZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRGVsaXZlcnlDaGFubmVsRGVsaXZlcnlDaGFubmVsRmlsdGVyUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0RlbGl2ZXJ5Q2hhbm5lbF9EZWxpdmVyeUNoYW5uZWxGaWx0ZXJQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSZXNvdXJjZVR5cGVzJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucmVzb3VyY2VUeXBlcyksXG4gICAgICAnQWNjb3VudFNjb3Blcyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmFjY291bnRTY29wZXMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRGVsaXZlcnlDaGFubmVsIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNsc1Byb3BlcnRpZXM6IFRoZSBTTFMgY29uZmlndXJhdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzbHNQcm9wZXJ0aWVzPzogUm9zRGVsaXZlcnlDaGFubmVsLlNsc1Byb3BlcnRpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRBcm46IFRoZSBBUk4gb2YgdGhlIGRlc3RpbmF0aW9uLiBWYWxpZCB2YWx1ZXM6IFxuICAgICAqICogSWYgeW91IHNldCBUYXJnZXRUeXBlIHRvIE9TUywgc2V0IFRhcmdldEFybiB0byB0aGUgQVJOIG9mIGFuIE9TUyBidWNrZXQgdGhhdCBoYXMgdGhlIHJlc291cmNlY2VudGVyLSBwcmVmaXguXG4gICAgICogKiBJZiB5b3Ugc2V0IFRhcmdldFR5cGUgdG8gU0xTLCBzZXQgVGFyZ2V0QXJuIHRvIHRoZSBBUk4gb2YgYW4gU0xTIExvZ3N0b3JlIHRoYXQgaGFzIHRoZSByZXNvdXJjZWNlbnRlci0gcHJlZml4LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGFyZ2V0QXJuPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeVByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRGVsaXZlcnlDaGFubmVsX1Jlc291cmNlQ2hhbmdlRGVsaXZlcnlQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Nsc1Byb3BlcnRpZXMnLCBSb3NEZWxpdmVyeUNoYW5uZWxfU2xzUHJvcGVydGllc1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNsc1Byb3BlcnRpZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldEFybicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YXJnZXRBcm4pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeVByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkRlbGl2ZXJ5Q2hhbm5lbC5SZXNvdXJjZUNoYW5nZURlbGl2ZXJ5YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6RGVsaXZlcnlDaGFubmVsLlJlc291cmNlQ2hhbmdlRGVsaXZlcnlgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRGVsaXZlcnlDaGFubmVsUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NEZWxpdmVyeUNoYW5uZWxfUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgJ1Nsc1Byb3BlcnRpZXMnOiByb3NEZWxpdmVyeUNoYW5uZWxTbHNQcm9wZXJ0aWVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2xzUHJvcGVydGllcyksXG4gICAgICAnVGFyZ2V0QXJuJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRBcm4pLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRGVsaXZlcnlDaGFubmVsIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgY3VzdG9tRXhwcmVzc2lvbjogVGhlIGN1c3RvbSBleHByZXNzaW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY3VzdG9tRXhwcmVzc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkZWxpdmVyeVRpbWU6IFRoZSBkZWxpdmVyeSB0aW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVsaXZlcnlUaW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNsc1Byb3BlcnRpZXM6IFRoZSBTTFMgY29uZmlndXJhdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzbHNQcm9wZXJ0aWVzPzogUm9zRGVsaXZlcnlDaGFubmVsLlJlc291cmNlU25hcHNob3REZWxpdmVyeVNsc1Byb3BlcnRpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRBcm46IFRoZSBBUk4gb2YgdGhlIGRlc3RpbmF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGFyZ2V0QXJuPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlc291cmNlU25hcHNob3REZWxpdmVyeVByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0RlbGl2ZXJ5Q2hhbm5lbF9SZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2N1c3RvbUV4cHJlc3Npb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY3VzdG9tRXhwcmVzc2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsaXZlcnlUaW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlbGl2ZXJ5VGltZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2xzUHJvcGVydGllcycsIFJvc0RlbGl2ZXJ5Q2hhbm5lbF9SZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlTbHNQcm9wZXJ0aWVzUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2xzUHJvcGVydGllcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0QXJuJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhcmdldEFybikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpEZWxpdmVyeUNoYW5uZWwuUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpEZWxpdmVyeUNoYW5uZWwuUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RlbGl2ZXJ5Q2hhbm5lbFJlc291cmNlU25hcHNob3REZWxpdmVyeVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NEZWxpdmVyeUNoYW5uZWxfUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnQ3VzdG9tRXhwcmVzc2lvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3VzdG9tRXhwcmVzc2lvbiksXG4gICAgICAnRGVsaXZlcnlUaW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxpdmVyeVRpbWUpLFxuICAgICAgJ1Nsc1Byb3BlcnRpZXMnOiByb3NEZWxpdmVyeUNoYW5uZWxSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlTbHNQcm9wZXJ0aWVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2xzUHJvcGVydGllcyksXG4gICAgICAnVGFyZ2V0QXJuJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRBcm4pLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRGVsaXZlcnlDaGFubmVsIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlTbHNQcm9wZXJ0aWVzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG92ZXJzaXplZERhdGFPc3NUYXJnZXRBcm46IFRoZSBBUk4gb2YgdGhlIGRlc3RpbmF0aW9uIE9TUyBidWNrZXQgZm9yIG92ZXJzaXplZCBmaWxlcy4gSWYgdGhlIHNpemUgb2YgYSByZXNvdXJjZSBjb25maWd1cmF0aW9uIGNoYW5nZSBldmVudCBleGNlZWRzIDEgTUIsIHRoZSBldmVudCBpcyBkZWxpdmVyZWQgYXMgYW4gT1NTIG9iamVjdC4gU2V0IHRoaXMgcGFyYW1ldGVyIHRvIHRoZSBBUk4gb2YgYW4gT1NTIGJ1Y2tldCB0aGF0IGhhcyB0aGUgcmVzb3VyY2VjZW50ZXItIHByZWZpeC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG92ZXJzaXplZERhdGFPc3NUYXJnZXRBcm4/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlTbHNQcm9wZXJ0aWVzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlc291cmNlU25hcHNob3REZWxpdmVyeVNsc1Byb3BlcnRpZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NEZWxpdmVyeUNoYW5uZWxfUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5U2xzUHJvcGVydGllc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3ZlcnNpemVkRGF0YU9zc1RhcmdldEFybicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5vdmVyc2l6ZWREYXRhT3NzVGFyZ2V0QXJuKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJlc291cmNlU25hcHNob3REZWxpdmVyeVNsc1Byb3BlcnRpZXNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpEZWxpdmVyeUNoYW5uZWwuUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5U2xzUHJvcGVydGllc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5U2xzUHJvcGVydGllc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkRlbGl2ZXJ5Q2hhbm5lbC5SZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlTbHNQcm9wZXJ0aWVzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0RlbGl2ZXJ5Q2hhbm5lbFJlc291cmNlU25hcHNob3REZWxpdmVyeVNsc1Byb3BlcnRpZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRGVsaXZlcnlDaGFubmVsX1Jlc291cmNlU25hcHNob3REZWxpdmVyeVNsc1Byb3BlcnRpZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdPdmVyc2l6ZWREYXRhT3NzVGFyZ2V0QXJuJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vdmVyc2l6ZWREYXRhT3NzVGFyZ2V0QXJuKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0RlbGl2ZXJ5Q2hhbm5lbCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2xzUHJvcGVydGllc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvdmVyc2l6ZWREYXRhT3NzVGFyZ2V0QXJuOiBUaGUgQVJOIG9mIHRoZSBkZXN0aW5hdGlvbiBPU1MgYnVja2V0IGZvciBvdmVyc2l6ZWQgZmlsZXMuIElmIHRoZSBzaXplIG9mIGEgcmVzb3VyY2UgY29uZmlndXJhdGlvbiBjaGFuZ2UgZXZlbnQgZXhjZWVkcyAxIE1CLCB0aGUgZXZlbnQgaXMgZGVsaXZlcmVkIGFzIGFuIE9TUyBvYmplY3QuIFNldCB0aGlzIHBhcmFtZXRlciB0byB0aGUgQVJOIG9mIGFuIE9TUyBidWNrZXQgdGhhdCBoYXMgdGhlIHJlc291cmNlY2VudGVyLSBwcmVmaXguXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvdmVyc2l6ZWREYXRhT3NzVGFyZ2V0QXJuPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU2xzUHJvcGVydGllc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTbHNQcm9wZXJ0aWVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRGVsaXZlcnlDaGFubmVsX1Nsc1Byb3BlcnRpZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ292ZXJzaXplZERhdGFPc3NUYXJnZXRBcm4nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3ZlcnNpemVkRGF0YU9zc1RhcmdldEFybikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTbHNQcm9wZXJ0aWVzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6RGVsaXZlcnlDaGFubmVsLlNsc1Byb3BlcnRpZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNsc1Byb3BlcnRpZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpEZWxpdmVyeUNoYW5uZWwuU2xzUHJvcGVydGllc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NEZWxpdmVyeUNoYW5uZWxTbHNQcm9wZXJ0aWVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0RlbGl2ZXJ5Q2hhbm5lbF9TbHNQcm9wZXJ0aWVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnT3ZlcnNpemVkRGF0YU9zc1RhcmdldEFybic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3ZlcnNpemVkRGF0YU9zc1RhcmdldEFybiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NGb2xkZXJgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLWZvbGRlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0ZvbGRlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmb2xkZXJOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZm9sZGVyXG4gICAgICovXG4gICAgcmVhZG9ubHkgZm9sZGVyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBhcmVudEZvbGRlcklkOiBUaGUgSUQgb2YgdGhlIHBhcmVudCBmb2xkZXIuIElmIG5vdCBzZXQsIHRoZSBzeXN0ZW0gZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBwYXJlbnRGb2xkZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NGb2xkZXJQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRm9sZGVyUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRm9sZGVyUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmb2xkZXJOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmZvbGRlck5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZvbGRlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZm9sZGVyTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGFyZW50Rm9sZGVySWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGFyZW50Rm9sZGVySWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRm9sZGVyUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6Rm9sZGVyYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NGb2xkZXJQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpGb2xkZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRm9sZGVyUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NGb2xkZXJQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnRm9sZGVyTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZm9sZGVyTmFtZSksXG4gICAgICAnUGFyZW50Rm9sZGVySWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBhcmVudEZvbGRlcklkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OkZvbGRlcmAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgZm9sZGVyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBGb2xkZXJgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1mb2xkZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0ZvbGRlciBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpGb2xkZXJcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRm9sZGVySWQ6IFRoZSBJRCBvZiB0aGUgZm9sZGVyXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGb2xkZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBGb2xkZXJOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZm9sZGVyXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGb2xkZXJOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBhcmVudEZvbGRlcklkOiBUaGUgSUQgb2YgdGhlIHBhcmVudCBmb2xkZXIuIElmIG5vdCBzZXQsIHRoZSBzeXN0ZW0gZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBhcmVudEZvbGRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBmb2xkZXJOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZm9sZGVyXG4gICAgICovXG4gICAgcHVibGljIGZvbGRlck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwYXJlbnRGb2xkZXJJZDogVGhlIElEIG9mIHRoZSBwYXJlbnQgZm9sZGVyLiBJZiBub3Qgc2V0LCB0aGUgc3lzdGVtIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkXG4gICAgICovXG4gICAgcHVibGljIHBhcmVudEZvbGRlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRm9sZGVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NGb2xkZXIuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckZvbGRlcklkID0gdGhpcy5nZXRBdHQoJ0ZvbGRlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0ckZvbGRlck5hbWUgPSB0aGlzLmdldEF0dCgnRm9sZGVyTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJQYXJlbnRGb2xkZXJJZCA9IHRoaXMuZ2V0QXR0KCdQYXJlbnRGb2xkZXJJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5mb2xkZXJOYW1lID0gcHJvcHMuZm9sZGVyTmFtZTtcbiAgICAgICAgdGhpcy5wYXJlbnRGb2xkZXJJZCA9IHByb3BzLnBhcmVudEZvbGRlcklkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvbGRlck5hbWU6IHRoaXMuZm9sZGVyTmFtZSxcbiAgICAgICAgICAgIHBhcmVudEZvbGRlcklkOiB0aGlzLnBhcmVudEZvbGRlcklkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NGb2xkZXJQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NIYW5kc2hha2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLWhhbmRzaGFrZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0hhbmRzaGFrZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRFbnRpdHk6IEludml0ZWQgYWNjb3VudCBJRCBvciBsb2dpbiBlbWFpbFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldEVudGl0eTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldFR5cGU6IFR5cGUgb2YgYWNjb3VudCBiZWluZyBpbnZpdGVkLiBWYWxpZCB2YWx1ZXM6IEFjY291bnQsIEVtYWlsXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5vdGU6IFJlbWFya3NcbiAgICAgKi9cbiAgICByZWFkb25seSBub3RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0hhbmRzaGFrZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NIYW5kc2hha2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NIYW5kc2hha2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25vdGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubm90ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0VHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50YXJnZXRUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhcmdldFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldEVudGl0eScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50YXJnZXRFbnRpdHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldEVudGl0eScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YXJnZXRFbnRpdHkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zSGFuZHNoYWtlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6SGFuZHNoYWtlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NIYW5kc2hha2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpIYW5kc2hha2VgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zSGFuZHNoYWtlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NIYW5kc2hha2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnVGFyZ2V0RW50aXR5Jzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRFbnRpdHkpLFxuICAgICAgJ1RhcmdldFR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldFR5cGUpLFxuICAgICAgJ05vdGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5vdGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6SGFuZHNoYWtlYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gaW52aXRhdGlvbi5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgSGFuZHNoYWtlYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yZXNvdXJjZW1hbmFnZXItaGFuZHNoYWtlXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NIYW5kc2hha2UgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJlc291cmNlTWFuYWdlcjo6SGFuZHNoYWtlXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEhhbmRzaGFrZUlkOiBUaGlzIElEIG9mIFJlc291cmNlIE1hbmFnZXIgaGFuZHNoYWtlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJIYW5kc2hha2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNYXN0ZXJBY2NvdW50SWQ6IFJlc291cmNlIGFjY291bnQgbWFzdGVyIGFjY291bnQgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1hc3RlckFjY291bnRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNYXN0ZXJBY2NvdW50TmFtZTogVGhlIG5hbWUgb2YgdGhlIG1haW4gYWNjb3VudCBvZiB0aGUgcmVzb3VyY2UgZGlyZWN0b3J5XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXN0ZXJBY2NvdW50TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBOb3RlOiBSZW1hcmtzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOb3RlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc291cmNlRGlyZWN0b3J5SWQ6IFJlc291cmNlIGRpcmVjdG9yeSBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VEaXJlY3RvcnlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUYXJnZXRFbnRpdHk6IEludml0ZWQgYWNjb3VudCBJRCBvciBsb2dpbiBlbWFpbFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFyZ2V0RW50aXR5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRhcmdldFR5cGU6IFR5cGUgb2YgYWNjb3VudCBiZWluZyBpbnZpdGVkLiBWYWxpZCB2YWx1ZXM6IEFjY291bnQsIEVtYWlsXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYXJnZXRUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRFbnRpdHk6IEludml0ZWQgYWNjb3VudCBJRCBvciBsb2dpbiBlbWFpbFxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRFbnRpdHk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRUeXBlOiBUeXBlIG9mIGFjY291bnQgYmVpbmcgaW52aXRlZC4gVmFsaWQgdmFsdWVzOiBBY2NvdW50LCBFbWFpbFxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbm90ZTogUmVtYXJrc1xuICAgICAqL1xuICAgIHB1YmxpYyBub3RlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zSGFuZHNoYWtlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NIYW5kc2hha2UuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckhhbmRzaGFrZUlkID0gdGhpcy5nZXRBdHQoJ0hhbmRzaGFrZUlkJyk7XG4gICAgICAgIHRoaXMuYXR0ck1hc3RlckFjY291bnRJZCA9IHRoaXMuZ2V0QXR0KCdNYXN0ZXJBY2NvdW50SWQnKTtcbiAgICAgICAgdGhpcy5hdHRyTWFzdGVyQWNjb3VudE5hbWUgPSB0aGlzLmdldEF0dCgnTWFzdGVyQWNjb3VudE5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyTm90ZSA9IHRoaXMuZ2V0QXR0KCdOb3RlJyk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlRGlyZWN0b3J5SWQgPSB0aGlzLmdldEF0dCgnUmVzb3VyY2VEaXJlY3RvcnlJZCcpO1xuICAgICAgICB0aGlzLmF0dHJUYXJnZXRFbnRpdHkgPSB0aGlzLmdldEF0dCgnVGFyZ2V0RW50aXR5Jyk7XG4gICAgICAgIHRoaXMuYXR0clRhcmdldFR5cGUgPSB0aGlzLmdldEF0dCgnVGFyZ2V0VHlwZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy50YXJnZXRFbnRpdHkgPSBwcm9wcy50YXJnZXRFbnRpdHk7XG4gICAgICAgIHRoaXMudGFyZ2V0VHlwZSA9IHByb3BzLnRhcmdldFR5cGU7XG4gICAgICAgIHRoaXMubm90ZSA9IHByb3BzLm5vdGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFyZ2V0RW50aXR5OiB0aGlzLnRhcmdldEVudGl0eSxcbiAgICAgICAgICAgIHRhcmdldFR5cGU6IHRoaXMudGFyZ2V0VHlwZSxcbiAgICAgICAgICAgIG5vdGU6IHRoaXMubm90ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zSGFuZHNoYWtlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zTWVzc2FnZUNvbnRhY3RgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLW1lc3NhZ2Vjb250YWN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTWVzc2FnZUNvbnRhY3RQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW1haWxBZGRyZXNzOiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgY29udGFjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbWFpbEFkZHJlc3M6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtZXNzYWdlQ29udGFjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBjb250YWN0LiBUaGUgbmFtZSBtdXN0IGJlIHVuaXF1ZSBpbiB5b3VyIHJlc291cmNlIGRpcmVjdG9yeS4gVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyIGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW4gY29udGFpbiBvbmx5IGxldHRlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWVzc2FnZUNvbnRhY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWVzc2FnZVR5cGVzOiBUaGUgdHlwZXMgb2YgbWVzc2FnZXMgcmVjZWl2ZWQgYnkgdGhlIGNvbnRhY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWVzc2FnZVR5cGVzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRpdGxlOiBUaGUgam9iIHRpdGxlIG9mIHRoZSBjb250YWN0LiBWYWxpZCB2YWx1ZXM6XG4gICAgICogKiBGaW5hbmNlRGlyZWN0b3IuXG4gICAgICogKiBUZWNobmljYWxEaXJlY3Rvci5cbiAgICAgKiAqIE1haW50ZW5hbmNlRGlyZWN0b3IuXG4gICAgICogKiBDRU8uXG4gICAgICogKiBQcm9qZWN0RGlyZWN0b3IuXG4gICAgICogKiBPdGhlci5cbiAgICAgKi9cbiAgICByZWFkb25seSB0aXRsZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBob25lTnVtYmVyOiBUaGUgbW9iaWxlIHBob25lIG51bWJlciBvZiB0aGUgY29udGFjdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwaG9uZU51bWJlcj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NNZXNzYWdlQ29udGFjdFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNZXNzYWdlQ29udGFjdFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01lc3NhZ2VDb250YWN0UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZXNzYWdlVHlwZXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubWVzc2FnZVR5cGVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZXNzYWdlVHlwZXMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLm1lc3NhZ2VUeXBlcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGhvbmVOdW1iZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucGhvbmVOdW1iZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpdGxlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRpdGxlKSk7XG4gICAgaWYocHJvcGVydGllcy50aXRsZSAmJiAodHlwZW9mIHByb3BlcnRpZXMudGl0bGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpdGxlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGl0bGUsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiVGVjaG5pY2FsRGlyZWN0b3JcIixcIk1haW50ZW5hbmNlRGlyZWN0b3JcIixcIlByb2plY3REaXJlY3RvclwiLFwiUHJvamVjdERpcmVjdG9yXCIsXCJDRU9cIixcIk90aGVyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGl0bGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGl0bGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21lc3NhZ2VDb250YWN0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tZXNzYWdlQ29udGFjdE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1lc3NhZ2VDb250YWN0TmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm1lc3NhZ2VDb250YWN0TmFtZSkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLm1lc3NhZ2VDb250YWN0TmFtZSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21lc3NhZ2VDb250YWN0TmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tZXNzYWdlQ29udGFjdE5hbWUubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAyLFxuICAgICAgICAgICAgbWF4OiAxMixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWVzc2FnZUNvbnRhY3ROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1lc3NhZ2VDb250YWN0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW1haWxBZGRyZXNzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmVtYWlsQWRkcmVzcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW1haWxBZGRyZXNzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVtYWlsQWRkcmVzcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NNZXNzYWdlQ29udGFjdFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6Ok1lc3NhZ2VDb250YWN0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNZXNzYWdlQ29udGFjdFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6Ok1lc3NhZ2VDb250YWN0YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc01lc3NhZ2VDb250YWN0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NNZXNzYWdlQ29udGFjdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdFbWFpbEFkZHJlc3MnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVtYWlsQWRkcmVzcyksXG4gICAgICAnTWVzc2FnZUNvbnRhY3ROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tZXNzYWdlQ29udGFjdE5hbWUpLFxuICAgICAgJ01lc3NhZ2VUeXBlcyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLm1lc3NhZ2VUeXBlcyksXG4gICAgICAnVGl0bGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpdGxlKSxcbiAgICAgICdQaG9uZU51bWJlcic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucGhvbmVOdW1iZXIpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6TWVzc2FnZUNvbnRhY3RgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBNZXNzYWdlQ29udGFjdGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLW1lc3NhZ2Vjb250YWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NNZXNzYWdlQ29udGFjdCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpNZXNzYWdlQ29udGFjdFwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDcmVhdGVUaW1lOiBDcmVhdGlvbiB0aW1lIG9mIE1lc3NhZ2UgQ29udGFjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRW1haWxBZGRyZXNzOiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgY29udGFjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVtYWlsQWRkcmVzczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNZXNzYWdlQ29udGFjdElkOiBUaGUgSUQgb2YgTWVzc2FnZSBDb250YWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWVzc2FnZUNvbnRhY3RJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNZXNzYWdlQ29udGFjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBjb250YWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWVzc2FnZUNvbnRhY3ROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE1lc3NhZ2VUeXBlczogVGhlIHR5cGVzIG9mIG1lc3NhZ2VzIHJlY2VpdmVkIGJ5IHRoZSBjb250YWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWVzc2FnZVR5cGVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFBob25lTnVtYmVyOiBUaGUgbW9iaWxlIHBob25lIG51bWJlciBvZiB0aGUgY29udGFjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBob25lTnVtYmVyOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRpdGxlOiBUaGUgam9iIHRpdGxlIG9mIHRoZSBjb250YWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGl0bGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVtYWlsQWRkcmVzczogVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIGNvbnRhY3QuXG4gICAgICovXG4gICAgcHVibGljIGVtYWlsQWRkcmVzczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1lc3NhZ2VDb250YWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIGNvbnRhY3QuIFRoZSBuYW1lIG11c3QgYmUgdW5pcXVlIGluIHlvdXIgcmVzb3VyY2UgZGlyZWN0b3J5LiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTIgY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbiBjb250YWluIG9ubHkgbGV0dGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWVzc2FnZUNvbnRhY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWVzc2FnZVR5cGVzOiBUaGUgdHlwZXMgb2YgbWVzc2FnZXMgcmVjZWl2ZWQgYnkgdGhlIGNvbnRhY3QuXG4gICAgICovXG4gICAgcHVibGljIG1lc3NhZ2VUeXBlczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0aXRsZTogVGhlIGpvYiB0aXRsZSBvZiB0aGUgY29udGFjdC4gVmFsaWQgdmFsdWVzOlxuICAgICAqICogRmluYW5jZURpcmVjdG9yLlxuICAgICAqICogVGVjaG5pY2FsRGlyZWN0b3IuXG4gICAgICogKiBNYWludGVuYW5jZURpcmVjdG9yLlxuICAgICAqICogQ0VPLlxuICAgICAqICogUHJvamVjdERpcmVjdG9yLlxuICAgICAqICogT3RoZXIuXG4gICAgICovXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGhvbmVOdW1iZXI6IFRoZSBtb2JpbGUgcGhvbmUgbnVtYmVyIG9mIHRoZSBjb250YWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBwaG9uZU51bWJlcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc01lc3NhZ2VDb250YWN0UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NNZXNzYWdlQ29udGFjdC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHRoaXMuZ2V0QXR0KCdDcmVhdGVUaW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckVtYWlsQWRkcmVzcyA9IHRoaXMuZ2V0QXR0KCdFbWFpbEFkZHJlc3MnKTtcbiAgICAgICAgdGhpcy5hdHRyTWVzc2FnZUNvbnRhY3RJZCA9IHRoaXMuZ2V0QXR0KCdNZXNzYWdlQ29udGFjdElkJyk7XG4gICAgICAgIHRoaXMuYXR0ck1lc3NhZ2VDb250YWN0TmFtZSA9IHRoaXMuZ2V0QXR0KCdNZXNzYWdlQ29udGFjdE5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyTWVzc2FnZVR5cGVzID0gdGhpcy5nZXRBdHQoJ01lc3NhZ2VUeXBlcycpO1xuICAgICAgICB0aGlzLmF0dHJQaG9uZU51bWJlciA9IHRoaXMuZ2V0QXR0KCdQaG9uZU51bWJlcicpO1xuICAgICAgICB0aGlzLmF0dHJUaXRsZSA9IHRoaXMuZ2V0QXR0KCdUaXRsZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5lbWFpbEFkZHJlc3MgPSBwcm9wcy5lbWFpbEFkZHJlc3M7XG4gICAgICAgIHRoaXMubWVzc2FnZUNvbnRhY3ROYW1lID0gcHJvcHMubWVzc2FnZUNvbnRhY3ROYW1lO1xuICAgICAgICB0aGlzLm1lc3NhZ2VUeXBlcyA9IHByb3BzLm1lc3NhZ2VUeXBlcztcbiAgICAgICAgdGhpcy50aXRsZSA9IHByb3BzLnRpdGxlO1xuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0gcHJvcHMucGhvbmVOdW1iZXI7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW1haWxBZGRyZXNzOiB0aGlzLmVtYWlsQWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2VDb250YWN0TmFtZTogdGhpcy5tZXNzYWdlQ29udGFjdE5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlVHlwZXM6IHRoaXMubWVzc2FnZVR5cGVzLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5waG9uZU51bWJlcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zTWVzc2FnZUNvbnRhY3RQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLW11bHRpYWNjb3VudGRlbGl2ZXJ5Y2hhbm5lbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxpdmVyeUNoYW5uZWxEZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBkZWxpdmVyeSBjaGFubmVsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGl2ZXJ5Q2hhbm5lbERlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsaXZlcnlDaGFubmVsRmlsdGVyOiBUaGUgZWZmZWN0aXZlIHNjb3BlIG9mIHRoZSBkZWxpdmVyeSBjaGFubmVsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGl2ZXJ5Q2hhbm5lbEZpbHRlcjogUm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsLkRlbGl2ZXJ5Q2hhbm5lbEZpbHRlclByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG11bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkZWxpdmVyeSBjaGFubmVsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG11bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxJZDogRGVsaXZlcnkgQ2hhbm5lbCBpZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUNoYW5nZURlbGl2ZXJ5OiBUaGUgY29uZmlndXJhdGlvbnMgZm9yIGRlbGl2ZXJ5IG9mIHJlc291cmNlIGNvbmZpZ3VyYXRpb24gY2hhbmdlIGV2ZW50cy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUNoYW5nZURlbGl2ZXJ5PzogUm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsLlJlc291cmNlQ2hhbmdlRGVsaXZlcnlQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZVNuYXBzaG90RGVsaXZlcnk6IFRoZSBjb25maWd1cmF0aW9ucyBmb3Igc2NoZWR1bGVkIGRlbGl2ZXJ5IG9mIHJlc291cmNlIHNuYXBzaG90cy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZVNuYXBzaG90RGVsaXZlcnk/OiBSb3NNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWwuUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VDaGFuZ2VEZWxpdmVyeScsIFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbF9SZXNvdXJjZUNoYW5nZURlbGl2ZXJ5UHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVzb3VyY2VDaGFuZ2VEZWxpdmVyeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb24nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGl2ZXJ5Q2hhbm5lbERlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlbGl2ZXJ5Q2hhbm5lbERlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm11bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGl2ZXJ5Q2hhbm5lbEZpbHRlcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kZWxpdmVyeUNoYW5uZWxGaWx0ZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RlbGl2ZXJ5Q2hhbm5lbEZpbHRlcicsIFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbF9EZWxpdmVyeUNoYW5uZWxGaWx0ZXJQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5kZWxpdmVyeUNoYW5uZWxGaWx0ZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlU25hcHNob3REZWxpdmVyeScsIFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbF9SZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5yZXNvdXJjZVNuYXBzaG90RGVsaXZlcnkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6TXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnRGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb24nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlbGl2ZXJ5Q2hhbm5lbERlc2NyaXB0aW9uKSxcbiAgICAgICdEZWxpdmVyeUNoYW5uZWxGaWx0ZXInOiByb3NNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxEZWxpdmVyeUNoYW5uZWxGaWx0ZXJQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxpdmVyeUNoYW5uZWxGaWx0ZXIpLFxuICAgICAgJ011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm11bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbE5hbWUpLFxuICAgICAgJ011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxJZCksXG4gICAgICAnUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeSc6IHJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbFJlc291cmNlQ2hhbmdlRGVsaXZlcnlQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUNoYW5nZURlbGl2ZXJ5KSxcbiAgICAgICdSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnknOiByb3NNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZVNuYXBzaG90RGVsaXZlcnkpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6TXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yZXNvdXJjZW1hbmFnZXItbXVsdGlhY2NvdW50ZGVsaXZlcnljaGFubmVsXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWwgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJlc291cmNlTWFuYWdlcjo6TXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERlbGl2ZXJ5Q2hhbm5lbERlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGRlbGl2ZXJ5IGNoYW5uZWwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWxpdmVyeUNoYW5uZWxEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEZWxpdmVyeUNoYW5uZWxGaWx0ZXI6IFRoZSBlZmZlY3RpdmUgc2NvcGUgb2YgdGhlIGRlbGl2ZXJ5IGNoYW5uZWwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZWxpdmVyeUNoYW5uZWxGaWx0ZXI6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsSWQ6IFRoZSBkZWxpdmVyeSBjaGFubmVsIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsTmFtZTogVGhlIG5hbWUgb2YgdGhlIGRlbGl2ZXJ5IGNoYW5uZWwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJlc291cmNlQ2hhbmdlRGVsaXZlcnk6IFRoZSBjb25maWd1cmF0aW9ucyBmb3IgZGVsaXZlcnkgb2YgcmVzb3VyY2UgY29uZmlndXJhdGlvbiBjaGFuZ2UgZXZlbnRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnk6IFRoZSBjb25maWd1cmF0aW9ucyBmb3Igc2NoZWR1bGVkIGRlbGl2ZXJ5IG9mIHJlc291cmNlIHNuYXBzaG90cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlU25hcHNob3REZWxpdmVyeTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZGVsaXZlcnkgY2hhbm5lbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVsaXZlcnlDaGFubmVsRGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZWxpdmVyeUNoYW5uZWxGaWx0ZXI6IFRoZSBlZmZlY3RpdmUgc2NvcGUgb2YgdGhlIGRlbGl2ZXJ5IGNoYW5uZWwuXG4gICAgICovXG4gICAgcHVibGljIGRlbGl2ZXJ5Q2hhbm5lbEZpbHRlcjogUm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsLkRlbGl2ZXJ5Q2hhbm5lbEZpbHRlclByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG11bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkZWxpdmVyeSBjaGFubmVsLlxuICAgICAqL1xuICAgIHB1YmxpYyBtdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsSWQ6IERlbGl2ZXJ5IENoYW5uZWwgaWQuXG4gICAgICovXG4gICAgcHVibGljIG11bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VDaGFuZ2VEZWxpdmVyeTogVGhlIGNvbmZpZ3VyYXRpb25zIGZvciBkZWxpdmVyeSBvZiByZXNvdXJjZSBjb25maWd1cmF0aW9uIGNoYW5nZSBldmVudHMuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlQ2hhbmdlRGVsaXZlcnk6IFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbC5SZXNvdXJjZUNoYW5nZURlbGl2ZXJ5UHJvcGVydHkgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5OiBUaGUgY29uZmlndXJhdGlvbnMgZm9yIHNjaGVkdWxlZCBkZWxpdmVyeSBvZiByZXNvdXJjZSBzbmFwc2hvdHMuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlU25hcHNob3REZWxpdmVyeTogUm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsLlJlc291cmNlU25hcHNob3REZWxpdmVyeVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJEZWxpdmVyeUNoYW5uZWxEZXNjcmlwdGlvbiA9IHRoaXMuZ2V0QXR0KCdEZWxpdmVyeUNoYW5uZWxEZXNjcmlwdGlvbicpO1xuICAgICAgICB0aGlzLmF0dHJEZWxpdmVyeUNoYW5uZWxGaWx0ZXIgPSB0aGlzLmdldEF0dCgnRGVsaXZlcnlDaGFubmVsRmlsdGVyJyk7XG4gICAgICAgIHRoaXMuYXR0ck11bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbElkID0gdGhpcy5nZXRBdHQoJ011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbElkJyk7XG4gICAgICAgIHRoaXMuYXR0ck11bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbE5hbWUgPSB0aGlzLmdldEF0dCgnTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5ID0gdGhpcy5nZXRBdHQoJ1Jlc291cmNlQ2hhbmdlRGVsaXZlcnknKTtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5ID0gdGhpcy5nZXRBdHQoJ1Jlc291cmNlU25hcHNob3REZWxpdmVyeScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5kZWxpdmVyeUNoYW5uZWxEZXNjcmlwdGlvbiA9IHByb3BzLmRlbGl2ZXJ5Q2hhbm5lbERlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmRlbGl2ZXJ5Q2hhbm5lbEZpbHRlciA9IHByb3BzLmRlbGl2ZXJ5Q2hhbm5lbEZpbHRlcjtcbiAgICAgICAgdGhpcy5tdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxOYW1lID0gcHJvcHMubXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsTmFtZTtcbiAgICAgICAgdGhpcy5tdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxJZCA9IHByb3BzLm11bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbElkO1xuICAgICAgICB0aGlzLnJlc291cmNlQ2hhbmdlRGVsaXZlcnkgPSBwcm9wcy5yZXNvdXJjZUNoYW5nZURlbGl2ZXJ5O1xuICAgICAgICB0aGlzLnJlc291cmNlU25hcHNob3REZWxpdmVyeSA9IHByb3BzLnJlc291cmNlU25hcHNob3REZWxpdmVyeTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWxpdmVyeUNoYW5uZWxEZXNjcmlwdGlvbjogdGhpcy5kZWxpdmVyeUNoYW5uZWxEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRlbGl2ZXJ5Q2hhbm5lbEZpbHRlcjogdGhpcy5kZWxpdmVyeUNoYW5uZWxGaWx0ZXIsXG4gICAgICAgICAgICBtdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxOYW1lOiB0aGlzLm11bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbE5hbWUsXG4gICAgICAgICAgICBtdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxJZDogdGhpcy5tdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxJZCxcbiAgICAgICAgICAgIHJlc291cmNlQ2hhbmdlRGVsaXZlcnk6IHRoaXMucmVzb3VyY2VDaGFuZ2VEZWxpdmVyeSxcbiAgICAgICAgICAgIHJlc291cmNlU25hcHNob3REZWxpdmVyeTogdGhpcy5yZXNvdXJjZVNuYXBzaG90RGVsaXZlcnksXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlDaGFubmVsRmlsdGVyUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlc291cmNlVHlwZXM6IFRoZSBlZmZlY3RpdmUgcmVzb3VyY2UgdHlwZSBvZiB0aGUgZGVsaXZlcnkgY2hhbm5lbC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlc291cmNlVHlwZXM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGFjY291bnRTY29wZXM6IFRoZSBhY2NvdW50IHNjb3BlcyBvZiB0aGUgZGVsaXZlcnkgY2hhbm5lbC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFjY291bnRTY29wZXM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBEZWxpdmVyeUNoYW5uZWxGaWx0ZXJQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRGVsaXZlcnlDaGFubmVsRmlsdGVyUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsX0RlbGl2ZXJ5Q2hhbm5lbEZpbHRlclByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VUeXBlcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMucmVzb3VyY2VUeXBlcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNjb3VudFNjb3BlcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hY2NvdW50U2NvcGVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2NvdW50U2NvcGVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5hY2NvdW50U2NvcGVzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkRlbGl2ZXJ5Q2hhbm5lbEZpbHRlclByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6Ok11bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbC5EZWxpdmVyeUNoYW5uZWxGaWx0ZXJgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYERlbGl2ZXJ5Q2hhbm5lbEZpbHRlclByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6Ok11bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbC5EZWxpdmVyeUNoYW5uZWxGaWx0ZXJgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsRGVsaXZlcnlDaGFubmVsRmlsdGVyUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbF9EZWxpdmVyeUNoYW5uZWxGaWx0ZXJQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSZXNvdXJjZVR5cGVzJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucmVzb3VyY2VUeXBlcyksXG4gICAgICAnQWNjb3VudFNjb3Blcyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmFjY291bnRTY29wZXMpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5UHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNsc1Byb3BlcnRpZXM6IFRoZSBTTFMgY29uZmlndXJhdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzbHNQcm9wZXJ0aWVzPzogUm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsLlNsc1Byb3BlcnRpZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRBcm46IFRhcmdldCBBcm4uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0YXJnZXRBcm4/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5UHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlc291cmNlQ2hhbmdlRGVsaXZlcnlQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxfUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2xzUHJvcGVydGllcycsIFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbF9TbHNQcm9wZXJ0aWVzUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuc2xzUHJvcGVydGllcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0QXJuJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhcmdldEFybikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5UHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6TXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsLlJlc291cmNlQ2hhbmdlRGVsaXZlcnlgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlc291cmNlQ2hhbmdlRGVsaXZlcnlQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWwuUmVzb3VyY2VDaGFuZ2VEZWxpdmVyeWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxSZXNvdXJjZUNoYW5nZURlbGl2ZXJ5UHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbF9SZXNvdXJjZUNoYW5nZURlbGl2ZXJ5UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnU2xzUHJvcGVydGllcyc6IHJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbFNsc1Byb3BlcnRpZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zbHNQcm9wZXJ0aWVzKSxcbiAgICAgICdUYXJnZXRBcm4nOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhcmdldEFybiksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWwge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc291cmNlU25hcHNob3REZWxpdmVyeVByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBkZWxpdmVyeVRpbWU6IFRoZSBkZWxpdmVyeSB0aW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGVsaXZlcnlUaW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRhcmdldEFybjogVGhlIEFSTiBvZiB0aGUgZGVsaXZlcnkgZGVzdGluYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0YXJnZXRBcm4/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5UHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsX1Jlc291cmNlU25hcHNob3REZWxpdmVyeVByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVsaXZlcnlUaW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlbGl2ZXJ5VGltZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0QXJuJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhcmdldEFybikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWwuUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZXNvdXJjZVNuYXBzaG90RGVsaXZlcnlQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWwuUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5YCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbFJlc291cmNlU25hcHNob3REZWxpdmVyeVByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxfUmVzb3VyY2VTbmFwc2hvdERlbGl2ZXJ5UHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnRGVsaXZlcnlUaW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZWxpdmVyeVRpbWUpLFxuICAgICAgJ1RhcmdldEFybic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGFyZ2V0QXJuKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2xzUHJvcGVydGllc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBvdmVyc2l6ZWREYXRhT3NzVGFyZ2V0QXJuOiBUaGUgQVJOIG9mIHRoZSBkZWxpdmVyeSBkZXN0aW5hdGlvbiBmb3Igb3ZlcnNpemVkIGRhdGEuIElmIHRoZSBzaXplIG9mIGEgcmVzb3VyY2UgY29uZmlndXJhdGlvbiBjaGFuZ2UgZXZlbnQgZXhjZWVkcyAxIE1CLCB0aGUgZXZlbnQgaXMgZGVsaXZlcmVkIGFzIGFuIE9TUyBvYmplY3QuIFlvdSBtdXN0IGVudGVyIHRoZSBBUk4gb2YgYW4gT1NTIGJ1Y2tldCB0aGF0IGhhcyBhIHByZWZpeCBvZiByZXNvdXJjZWNlbnRlci0uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBvdmVyc2l6ZWREYXRhT3NzVGFyZ2V0QXJuPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgU2xzUHJvcGVydGllc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBTbHNQcm9wZXJ0aWVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsX1Nsc1Byb3BlcnRpZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ292ZXJzaXplZERhdGFPc3NUYXJnZXRBcm4nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3ZlcnNpemVkRGF0YU9zc1RhcmdldEFybikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJTbHNQcm9wZXJ0aWVzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6TXVsdGlBY2NvdW50RGVsaXZlcnlDaGFubmVsLlNsc1Byb3BlcnRpZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNsc1Byb3BlcnRpZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWwuU2xzUHJvcGVydGllc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNdWx0aUFjY291bnREZWxpdmVyeUNoYW5uZWxTbHNQcm9wZXJ0aWVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc011bHRpQWNjb3VudERlbGl2ZXJ5Q2hhbm5lbF9TbHNQcm9wZXJ0aWVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICAnT3ZlcnNpemVkRGF0YU9zc1RhcmdldEFybic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMub3ZlcnNpemVkRGF0YU9zc1RhcmdldEFybiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NQb2xpY3lBdHRhY2htZW50YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1wb2xpY3lhdHRhY2htZW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUG9saWN5QXR0YWNobWVudFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY3lOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcG9saWN5XG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5TmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBwb2xpY3lcbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY3lUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpbmNpcGFsTmFtZTogVGhlIG5hbWUgb2YgdGhlIG9iamVjdCB0byB3aGljaCB5b3Ugd2FudCB0byBhdHRhY2ggdGhlIHBvbGljeVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaW5jaXBhbE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmluY2lwYWxUeXBlOiBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0IHRvIHdoaWNoIHlvdSB3YW50IHRvIGF0dGFjaCB0aGUgcG9saWN5LiBWYWxpZCB2YWx1ZXM6IElNU1VzZXI6IFJBTSB1c2VyLCBJTVNHcm91cDogUkFNIHVzZXIgZ3JvdXAsIFNlcnZpY2VSb2xlOiBSQU0gcm9sZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaW5jaXBhbFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgb3IgdGhlIElEIG9mIHRoZSBBbGliYWJhIENsb3VkIGFjY291bnQgdG8gd2hpY2ggdGhlIHJlc291cmNlIGdyb3VwIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1BvbGljeUF0dGFjaG1lbnRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUG9saWN5QXR0YWNobWVudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1BvbGljeUF0dGFjaG1lbnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeVR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5VHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb2xpY3lUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUdyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3lOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvbGljeU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9saWN5TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbmNpcGFsTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wcmluY2lwYWxOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmluY2lwYWxOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByaW5jaXBhbE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW5jaXBhbFR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucHJpbmNpcGFsVHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpbmNpcGFsVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcmluY2lwYWxUeXBlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1BvbGljeUF0dGFjaG1lbnRQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpQb2xpY3lBdHRhY2htZW50YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NQb2xpY3lBdHRhY2htZW50UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UG9saWN5QXR0YWNobWVudGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NQb2xpY3lBdHRhY2htZW50UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NQb2xpY3lBdHRhY2htZW50UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ1BvbGljeU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvbGljeU5hbWUpLFxuICAgICAgJ1BvbGljeVR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvbGljeVR5cGUpLFxuICAgICAgJ1ByaW5jaXBhbE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByaW5jaXBhbE5hbWUpLFxuICAgICAgJ1ByaW5jaXBhbFR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByaW5jaXBhbFR5cGUpLFxuICAgICAgJ1Jlc291cmNlR3JvdXBJZCc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVzb3VyY2VHcm91cElkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlBvbGljeUF0dGFjaG1lbnRgLCB3aGljaCBpcyB1c2VkIHRvIGF0dGFjaCBhIHBvbGljeSB0byBhbiBvYmplY3QuIEFmdGVyIHlvdSBhdHRhY2ggYSBwb2xpY3kgdG8gYW4gb2JqZWN0LCB0aGUgb2JqZWN0IGhhcyB0aGUgcGVybWlzc2lvbnMgdG8gbWFuYWdlIHRoZSByZXNvdXJjZXMgaW4gdGhlIGN1cnJlbnQgcmVzb3VyY2UgZ3JvdXAgb3Igd2l0aGluIHRoZSBjdXJyZW50IEFsaWJhYmEgQ2xvdWQgYWNjb3VudC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgUG9saWN5QXR0YWNobWVudGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLXBvbGljeWF0dGFjaG1lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1BvbGljeUF0dGFjaG1lbnQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UG9saWN5QXR0YWNobWVudFwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBdHRhY2hEYXRlOiBBdXRob3JpemF0aW9uIHRpbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckF0dGFjaERhdGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGVzY3JpcHRpb246IFBvbGljeSBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVzY3JpcHRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUG9saWN5TmFtZTogVGhlIG5hbWUgb2YgdGhlIHBvbGljeVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUG9saWN5TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBQb2xpY3lUeXBlOiBUaGUgdHlwZSBvZiB0aGUgcG9saWN5XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQb2xpY3lUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFByaW5jaXBhbE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBvYmplY3QgdG8gd2hpY2ggeW91IHdhbnQgdG8gYXR0YWNoIHRoZSBwb2xpY3lcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaW5jaXBhbE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUHJpbmNpcGFsVHlwZTogVGhlIHR5cGUgb2YgdGhlIG9iamVjdCB0byB3aGljaCB5b3Ugd2FudCB0byBhdHRhY2ggdGhlIHBvbGljeS4gVmFsaWQgdmFsdWVzOiBJTVNVc2VyOiBSQU0gdXNlciwgSU1TR3JvdXA6IFJBTSB1c2VyIGdyb3VwLCBTZXJ2aWNlUm9sZTogUkFNIHJvbGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clByaW5jaXBhbFR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIG9yIHRoZSBJRCBvZiB0aGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50IHRvIHdoaWNoIHRoZSByZXNvdXJjZSBncm91cCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY3lOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcG9saWN5XG4gICAgICovXG4gICAgcHVibGljIHBvbGljeU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY3lUeXBlOiBUaGUgdHlwZSBvZiB0aGUgcG9saWN5XG4gICAgICovXG4gICAgcHVibGljIHBvbGljeVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmluY2lwYWxOYW1lOiBUaGUgbmFtZSBvZiB0aGUgb2JqZWN0IHRvIHdoaWNoIHlvdSB3YW50IHRvIGF0dGFjaCB0aGUgcG9saWN5XG4gICAgICovXG4gICAgcHVibGljIHByaW5jaXBhbE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmluY2lwYWxUeXBlOiBUaGUgdHlwZSBvZiB0aGUgb2JqZWN0IHRvIHdoaWNoIHlvdSB3YW50IHRvIGF0dGFjaCB0aGUgcG9saWN5LiBWYWxpZCB2YWx1ZXM6IElNU1VzZXI6IFJBTSB1c2VyLCBJTVNHcm91cDogUkFNIHVzZXIgZ3JvdXAsIFNlcnZpY2VSb2xlOiBSQU0gcm9sZVxuICAgICAqL1xuICAgIHB1YmxpYyBwcmluY2lwYWxUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwIG9yIHRoZSBJRCBvZiB0aGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50IHRvIHdoaWNoIHRoZSByZXNvdXJjZSBncm91cCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNvdXJjZUdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NQb2xpY3lBdHRhY2htZW50UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NQb2xpY3lBdHRhY2htZW50LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBdHRhY2hEYXRlID0gdGhpcy5nZXRBdHQoJ0F0dGFjaERhdGUnKTtcbiAgICAgICAgdGhpcy5hdHRyRGVzY3JpcHRpb24gPSB0aGlzLmdldEF0dCgnRGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGhpcy5hdHRyUG9saWN5TmFtZSA9IHRoaXMuZ2V0QXR0KCdQb2xpY3lOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clBvbGljeVR5cGUgPSB0aGlzLmdldEF0dCgnUG9saWN5VHlwZScpO1xuICAgICAgICB0aGlzLmF0dHJQcmluY2lwYWxOYW1lID0gdGhpcy5nZXRBdHQoJ1ByaW5jaXBhbE5hbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyUHJpbmNpcGFsVHlwZSA9IHRoaXMuZ2V0QXR0KCdQcmluY2lwYWxUeXBlJyk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlR3JvdXBJZCA9IHRoaXMuZ2V0QXR0KCdSZXNvdXJjZUdyb3VwSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucG9saWN5TmFtZSA9IHByb3BzLnBvbGljeU5hbWU7XG4gICAgICAgIHRoaXMucG9saWN5VHlwZSA9IHByb3BzLnBvbGljeVR5cGU7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsTmFtZSA9IHByb3BzLnByaW5jaXBhbE5hbWU7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsVHlwZSA9IHByb3BzLnByaW5jaXBhbFR5cGU7XG4gICAgICAgIHRoaXMucmVzb3VyY2VHcm91cElkID0gcHJvcHMucmVzb3VyY2VHcm91cElkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBvbGljeU5hbWU6IHRoaXMucG9saWN5TmFtZSxcbiAgICAgICAgICAgIHBvbGljeVR5cGU6IHRoaXMucG9saWN5VHlwZSxcbiAgICAgICAgICAgIHByaW5jaXBhbE5hbWU6IHRoaXMucHJpbmNpcGFsTmFtZSxcbiAgICAgICAgICAgIHByaW5jaXBhbFR5cGU6IHRoaXMucHJpbmNpcGFsVHlwZSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogdGhpcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1BvbGljeUF0dGFjaG1lbnRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NSZXNvdXJjZURpcmVjdG9yeWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yZXNvdXJjZW1hbmFnZXItcmVzb3VyY2VkaXJlY3RvcnlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NSZXNvdXJjZURpcmVjdG9yeVByb3BzIHtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NSZXNvdXJjZURpcmVjdG9yeVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSZXNvdXJjZURpcmVjdG9yeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1Jlc291cmNlRGlyZWN0b3J5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1Jlc291cmNlRGlyZWN0b3J5UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VEaXJlY3RvcnlgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1Jlc291cmNlRGlyZWN0b3J5UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VEaXJlY3RvcnlgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUmVzb3VyY2VEaXJlY3RvcnlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1Jlc291cmNlRGlyZWN0b3J5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VEaXJlY3RvcnlgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBSZXNvdXJjZURpcmVjdG9yeWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLXJlc291cmNlZGlyZWN0b3J5XG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NSZXNvdXJjZURpcmVjdG9yeSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpSZXNvdXJjZURpcmVjdG9yeVwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNYXN0ZXJBY2NvdW50SWQ6IFRoZSBJRCBvZiB0aGUgbWFzdGVyIGFjY291bnRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1hc3RlckFjY291bnRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNYXN0ZXJBY2NvdW50TmFtZTogVGhlIG5hbWUgb2YgdGhlIG1hc3RlciBhY2NvdW50XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNYXN0ZXJBY2NvdW50TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXNvdXJjZURpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGRpcmVjdG9yeVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VEaXJlY3RvcnlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSb290Rm9sZGVySWQ6IFRoZSBJRCBvZiB0aGUgcm9vdCBmb2xkZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvb3RGb2xkZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zUmVzb3VyY2VEaXJlY3RvcnlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1Jlc291cmNlRGlyZWN0b3J5LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJNYXN0ZXJBY2NvdW50SWQgPSB0aGlzLmdldEF0dCgnTWFzdGVyQWNjb3VudElkJyk7XG4gICAgICAgIHRoaXMuYXR0ck1hc3RlckFjY291bnROYW1lID0gdGhpcy5nZXRBdHQoJ01hc3RlckFjY291bnROYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlRGlyZWN0b3J5SWQgPSB0aGlzLmdldEF0dCgnUmVzb3VyY2VEaXJlY3RvcnlJZCcpO1xuICAgICAgICB0aGlzLmF0dHJSb290Rm9sZGVySWQgPSB0aGlzLmdldEF0dCgnUm9vdEZvbGRlcklkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zUmVzb3VyY2VEaXJlY3RvcnlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NSZXNvdXJjZUdyb3VwYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1yZXNvdXJjZWdyb3VwXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUmVzb3VyY2VHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNwbGF5TmFtZTogVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlzcGxheU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIHJlc291cmNlIGdyb3VwLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIHJlc291cmNlIGdyb3VwLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc1Jlc291cmNlR3JvdXAuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUmVzb3VyY2VHcm91cFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSZXNvdXJjZUdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUmVzb3VyY2VHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlzcGxheU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGlzcGxheU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rpc3BsYXlOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpc3BsYXlOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zUmVzb3VyY2VHcm91cF9UYWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1Jlc291cmNlR3JvdXBQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpSZXNvdXJjZUdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSZXNvdXJjZUdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VHcm91cGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NSZXNvdXJjZUdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NSZXNvdXJjZUdyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0Rpc3BsYXlOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaXNwbGF5TmFtZSksXG4gICAgICAnTmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgICAnVGFncyc6IHJvcy5saXN0TWFwcGVyKHJvc1Jlc291cmNlR3JvdXBUYWdzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhZ3MpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VHcm91cGBUaGUgLCB3aGljaCByZXNvdXJjZSB0eXBlIGNyZWF0ZXMgYSByZXNvdXJjZSBncm91cC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgUmVzb3VyY2VHcm91cGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLXJlc291cmNlZ3JvdXBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1Jlc291cmNlR3JvdXAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VHcm91cFwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBY2NvdW50SWQ6IFRoZSBJRCBvZiB0aGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50IHRvIHdoaWNoIHRoZSByZXNvdXJjZSBncm91cCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjb3VudElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERpc3BsYXlOYW1lOiBUaGUgZGlzcGxheSBuYW1lIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRpc3BsYXlOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmFtZTogVGhlIHVuaXF1ZSBpZGVudGlmaWVyIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVnaW9uU3RhdHVzZXM6IFRoZSBzdGF0dXMgb2YgdGhlIHJlc291cmNlIGdyb3VwIGluIGFsbCByZWdpb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVnaW9uU3RhdHVzZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VHcm91cElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXNwbGF5TmFtZTogVGhlIGRpc3BsYXkgbmFtZSBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGRpc3BsYXlOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gcmVzb3VyY2UgZ3JvdXAuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgcmVzb3VyY2UgZ3JvdXAuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnczogUm9zUmVzb3VyY2VHcm91cC5UYWdzUHJvcGVydHlbXSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NSZXNvdXJjZUdyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NSZXNvdXJjZUdyb3VwLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBY2NvdW50SWQgPSB0aGlzLmdldEF0dCgnQWNjb3VudElkJyk7XG4gICAgICAgIHRoaXMuYXR0ckRpc3BsYXlOYW1lID0gdGhpcy5nZXRBdHQoJ0Rpc3BsYXlOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0cklkID0gdGhpcy5nZXRBdHQoJ0lkJyk7XG4gICAgICAgIHRoaXMuYXR0ck5hbWUgPSB0aGlzLmdldEF0dCgnTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJSZWdpb25TdGF0dXNlcyA9IHRoaXMuZ2V0QXR0KCdSZWdpb25TdGF0dXNlcycpO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZUdyb3VwSWQgPSB0aGlzLmdldEF0dCgnUmVzb3VyY2VHcm91cElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmRpc3BsYXlOYW1lID0gcHJvcHMuZGlzcGxheU5hbWU7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLnRhZ3MsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1Jlc291cmNlR3JvdXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NSZXNvdXJjZUdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBUYWdzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGtleTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBrZXk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1Jlc291cmNlR3JvdXBfVGFnc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5rZXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2tleScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5rZXkpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiVGFnc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlJlc291cmNlR3JvdXAuVGFnc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFnc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlJlc291cmNlR3JvdXAuVGFnc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NSZXNvdXJjZUdyb3VwVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NSZXNvdXJjZUdyb3VwX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdWYWx1ZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudmFsdWUpLFxuICAgICAgJ0tleSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1Jlc291cmNlU2hhcmVgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLXJlc291cmNlc2hhcmVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NSZXNvdXJjZVNoYXJlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlU2hhcmVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcmVzb3VyY2Ugc2hhcmUuXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAxIHRvIDUwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIEl0IGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlU2hhcmVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWxsb3dFeHRlcm5hbFRhcmdldHM6IFdoZXRoZXIgdG8gYWxsb3cgc2hhcmluZyB0byBhY2NvdW50cyBvdXRzaWRlIHRoZSByZXNvdXJjZSBkaXJlY3RvcnkuIFZhbHVlOlxuICAgICAqIGZhbHNlIChkZWZhdWx0KTogT25seSBhbGxvdyBzaGFyaW5nIHdpdGhpbiB0aGUgcmVzb3VyY2UgZGlyZWN0b3J5LlxuICAgICAqIHRydWU6IEFsbG93IHNoYXJpbmcgdG8gYW55IGFjY291bnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxsb3dFeHRlcm5hbFRhcmdldHM/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcm1pc3Npb25OYW1lczogU2hhcmluZyBwZXJtaXNzaW9uIG5hbWUuIFdoZW4gZW1wdHksIHRoZSBzeXN0ZW0gYXV0b21hdGljYWxseSBiaW5kcyB0aGUgZGVmYXVsdCBwZXJtaXNzaW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlc291cmNlIHR5cGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVybWlzc2lvbk5hbWVzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZXM6XG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VzPzogQXJyYXk8Um9zUmVzb3VyY2VTaGFyZS5SZXNvdXJjZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0czogVGhlIHNoYXJlZCB0YXJnZXQuXG4gICAgICogQSBzaGFyZWQgdGFyZ2V0IHNoYXJlcyB0aGUgcmVzb3VyY2VzIG9mIHJlc291cmNlIG93bmVycy4gWW91IGNhbiBzaGFyZSB5b3VyIHJlc291cmNlc1xuICAgICAqIG9ubHkgd2l0aCB0aGUgbWVtYmVyIGFjY291bnRzIGluIHlvdXIgcmVzb3VyY2UgZGlyZWN0b3J5LiBBIHNoYXJlZCB0YXJnZXQgaXMgaW5kaWNhdGVkXG4gICAgICogYnkgaXRzIGFjY291bnQgSUQuIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byBvYnRhaW4gdGhlIElELCBzZWUgVmlldyB0aGUgYmFzaWMgaW5mb3JtYXRpb24gb2YgYSBtZW1iZXIgYWNjb3VudC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YXJnZXRzPzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NSZXNvdXJjZVNoYXJlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1Jlc291cmNlU2hhcmVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NSZXNvdXJjZVNoYXJlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZVNoYXJlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZXNvdXJjZVNoYXJlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVzb3VyY2VTaGFyZU5hbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlc291cmNlU2hhcmVOYW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZVNoYXJlTmFtZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRQYXR0ZXJuKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZXNvdXJjZVNoYXJlTmFtZSxcbiAgICAgICAgICByZWc6IC9bLWEtekEtWjAtOV9cXC5dezEsNTB9L1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VTaGFyZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VTaGFyZU5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhcmdldHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YXJnZXRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFyZ2V0cykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFyZ2V0cy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0cycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMudGFyZ2V0cykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWxsb3dFeHRlcm5hbFRhcmdldHMnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmFsbG93RXh0ZXJuYWxUYXJnZXRzKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXNvdXJjZXMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5yZXNvdXJjZXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5yZXNvdXJjZXMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZXMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZXMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NSZXNvdXJjZVNoYXJlX1Jlc291cmNlc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5yZXNvdXJjZXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnBlcm1pc3Npb25OYW1lcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnBlcm1pc3Npb25OYW1lcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnBlcm1pc3Npb25OYW1lcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Blcm1pc3Npb25OYW1lcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wZXJtaXNzaW9uTmFtZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDYsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Blcm1pc3Npb25OYW1lcycsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMucGVybWlzc2lvbk5hbWVzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1Jlc291cmNlU2hhcmVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpSZXNvdXJjZVNoYXJlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSZXNvdXJjZVNoYXJlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VTaGFyZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NSZXNvdXJjZVNoYXJlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NSZXNvdXJjZVNoYXJlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ1Jlc291cmNlU2hhcmVOYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZVNoYXJlTmFtZSksXG4gICAgICAnQWxsb3dFeHRlcm5hbFRhcmdldHMnOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hbGxvd0V4dGVybmFsVGFyZ2V0cyksXG4gICAgICAnUGVybWlzc2lvbk5hbWVzJzogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMucGVybWlzc2lvbk5hbWVzKSxcbiAgICAgICdSZXNvdXJjZXMnOiByb3MubGlzdE1hcHBlcihyb3NSZXNvdXJjZVNoYXJlUmVzb3VyY2VzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnJlc291cmNlcyksXG4gICAgICAnVGFyZ2V0cyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhcmdldHMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VTaGFyZWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGEgcmVzb3VyY2Ugc2hhcmUuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYFJlc291cmNlU2hhcmVgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1yZXNvdXJjZXNoYXJlXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NSZXNvdXJjZVNoYXJlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlJlc291cmNlU2hhcmVcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzb3VyY2VTaGFyZUlkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIHNoYXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VTaGFyZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZVNoYXJlTmFtZTogVGhlIG5hbWUgb2YgdGhlIHJlc291cmNlIHNoYXJlLlxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMSB0byA1MCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiBJdCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIHBlcmlvZHMgKC4pLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VTaGFyZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGxvd0V4dGVybmFsVGFyZ2V0czogV2hldGhlciB0byBhbGxvdyBzaGFyaW5nIHRvIGFjY291bnRzIG91dHNpZGUgdGhlIHJlc291cmNlIGRpcmVjdG9yeS4gVmFsdWU6XG4gICAgICogZmFsc2UgKGRlZmF1bHQpOiBPbmx5IGFsbG93IHNoYXJpbmcgd2l0aGluIHRoZSByZXNvdXJjZSBkaXJlY3RvcnkuXG4gICAgICogdHJ1ZTogQWxsb3cgc2hhcmluZyB0byBhbnkgYWNjb3VudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWxsb3dFeHRlcm5hbFRhcmdldHM6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVybWlzc2lvbk5hbWVzOiBTaGFyaW5nIHBlcm1pc3Npb24gbmFtZS4gV2hlbiBlbXB0eSwgdGhlIHN5c3RlbSBhdXRvbWF0aWNhbGx5IGJpbmRzIHRoZSBkZWZhdWx0IHBlcm1pc3Npb25zIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVzb3VyY2UgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGVybWlzc2lvbk5hbWVzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlczpcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VzOiBBcnJheTxSb3NSZXNvdXJjZVNoYXJlLlJlc291cmNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRzOiBUaGUgc2hhcmVkIHRhcmdldC5cbiAgICAgKiBBIHNoYXJlZCB0YXJnZXQgc2hhcmVzIHRoZSByZXNvdXJjZXMgb2YgcmVzb3VyY2Ugb3duZXJzLiBZb3UgY2FuIHNoYXJlIHlvdXIgcmVzb3VyY2VzXG4gICAgICogb25seSB3aXRoIHRoZSBtZW1iZXIgYWNjb3VudHMgaW4geW91ciByZXNvdXJjZSBkaXJlY3RvcnkuIEEgc2hhcmVkIHRhcmdldCBpcyBpbmRpY2F0ZWRcbiAgICAgKiBieSBpdHMgYWNjb3VudCBJRC4gRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIG9idGFpbiB0aGUgSUQsIHNlZSBWaWV3IHRoZSBiYXNpYyBpbmZvcm1hdGlvbiBvZiBhIG1lbWJlciBhY2NvdW50LlxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1Jlc291cmNlU2hhcmVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1Jlc291cmNlU2hhcmUuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlU2hhcmVJZCA9IHRoaXMuZ2V0QXR0KCdSZXNvdXJjZVNoYXJlSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTaGFyZU5hbWUgPSBwcm9wcy5yZXNvdXJjZVNoYXJlTmFtZTtcbiAgICAgICAgdGhpcy5hbGxvd0V4dGVybmFsVGFyZ2V0cyA9IHByb3BzLmFsbG93RXh0ZXJuYWxUYXJnZXRzO1xuICAgICAgICB0aGlzLnBlcm1pc3Npb25OYW1lcyA9IHByb3BzLnBlcm1pc3Npb25OYW1lcztcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBwcm9wcy5yZXNvdXJjZXM7XG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IHByb3BzLnRhcmdldHM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzb3VyY2VTaGFyZU5hbWU6IHRoaXMucmVzb3VyY2VTaGFyZU5hbWUsXG4gICAgICAgICAgICBhbGxvd0V4dGVybmFsVGFyZ2V0czogdGhpcy5hbGxvd0V4dGVybmFsVGFyZ2V0cyxcbiAgICAgICAgICAgIHBlcm1pc3Npb25OYW1lczogdGhpcy5wZXJtaXNzaW9uTmFtZXMsXG4gICAgICAgICAgICByZXNvdXJjZXM6IHRoaXMucmVzb3VyY2VzLFxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy50YXJnZXRzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NSZXNvdXJjZVNoYXJlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zUmVzb3VyY2VTaGFyZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlc291cmNlSWQ6IFRoZSBJRCBvZiB0aGUgc2hhcmVkIHJlc291cmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVzb3VyY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlc291cmNlVHlwZTogVGhlIHR5cGUgb2YgdGhlIHNoYXJlZCByZXNvdXJjZS5cbiAgICAgKiBTdXBwb3J0IHJlc291cmNlIHR5cGUgaW5jbHVkZTpcbiAgICAgKiBWUEM6IFZTd2l0Y2gsIFByZWZpeExpc3QsIFB1YmxpY0lwQWRkcmVzc1Bvb2xcbiAgICAgKiBST1M6IFJPU1RlbXBsYXRlXG4gICAgICogU2VydmljZUNhdGFsb2c6IFNlcnZpY2VDYXRhbG9nUG9ydGZvbGlvXG4gICAgICogRUNTOiBJbWFnZSwgU25hcHNob3RcbiAgICAgKiBLTVM6IEtNU0luc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXNvdXJjZVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJlc291cmNlc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSZXNvdXJjZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NSZXNvdXJjZVNoYXJlX1Jlc291cmNlc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZXNvdXJjZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZXNvdXJjZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXNvdXJjZVR5cGUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUmVzb3VyY2VzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VTaGFyZS5SZXNvdXJjZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlc291cmNlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlJlc291cmNlU2hhcmUuUmVzb3VyY2VzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1Jlc291cmNlU2hhcmVSZXNvdXJjZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zUmVzb3VyY2VTaGFyZV9SZXNvdXJjZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSZXNvdXJjZUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUlkKSxcbiAgICAgICdSZXNvdXJjZVR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlVHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NSZXNvdXJjZVNoYXJlQXNzb2NpYXRpb25gLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLXJlc291cmNlc2hhcmVhc3NvY2lhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1Jlc291cmNlU2hhcmVBc3NvY2lhdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZVNoYXJlSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2Ugc2hhcmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VTaGFyZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVybWlzc2lvbk5hbWVzOiBTaGFyaW5nIHBlcm1pc3Npb24gbmFtZS4gV2hlbiBlbXB0eSwgdGhlIHN5c3RlbSBhdXRvbWF0aWNhbGx5IGJpbmRzIHRoZSBkZWZhdWx0IHBlcm1pc3Npb25zIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVzb3VyY2UgdHlwZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJtaXNzaW9uTmFtZXM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlczpcbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZXM/OiBBcnJheTxSb3NSZXNvdXJjZVNoYXJlQXNzb2NpYXRpb24uUmVzb3VyY2VzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldHM6IFRoZSBzaGFyZWQgdGFyZ2V0LlxuICAgICAqIEEgc2hhcmVkIHRhcmdldCBzaGFyZXMgdGhlIHJlc291cmNlcyBvZiByZXNvdXJjZSBvd25lcnMuIFlvdSBjYW4gc2hhcmUgeW91ciByZXNvdXJjZXNcbiAgICAgKiBvbmx5IHdpdGggdGhlIG1lbWJlciBhY2NvdW50cyBpbiB5b3VyIHJlc291cmNlIGRpcmVjdG9yeS4gQSBzaGFyZWQgdGFyZ2V0IGlzIGluZGljYXRlZFxuICAgICAqIGJ5IGl0cyBhY2NvdW50IElELiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gb2J0YWluIHRoZSBJRCwgc2VlIFZpZXcgdGhlIGJhc2ljIGluZm9ybWF0aW9uIG9mIGEgbWVtYmVyIGFjY291bnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0cz86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1Jlc291cmNlU2hhcmVBc3NvY2lhdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1Jlc291cmNlU2hhcmVBc3NvY2lhdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VTaGFyZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlc291cmNlU2hhcmVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VTaGFyZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlU2hhcmVJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMudGFyZ2V0cyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRhcmdldHMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy50YXJnZXRzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0cycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YXJnZXRzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy50YXJnZXRzKSk7XG4gICAgaWYocHJvcGVydGllcy5yZXNvdXJjZXMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5yZXNvdXJjZXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5yZXNvdXJjZXMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZXMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZXMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NSZXNvdXJjZVNoYXJlQXNzb2NpYXRpb25fUmVzb3VyY2VzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnJlc291cmNlcykpO1xuICAgIGlmKHByb3BlcnRpZXMucGVybWlzc2lvbk5hbWVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMucGVybWlzc2lvbk5hbWVzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMucGVybWlzc2lvbk5hbWVzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVybWlzc2lvbk5hbWVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBlcm1pc3Npb25OYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVybWlzc2lvbk5hbWVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5wZXJtaXNzaW9uTmFtZXMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSZXNvdXJjZVNoYXJlQXNzb2NpYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpSZXNvdXJjZVNoYXJlQXNzb2NpYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NSZXNvdXJjZVNoYXJlQXNzb2NpYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnUmVzb3VyY2VTaGFyZUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZVNoYXJlSWQpLFxuICAgICAgJ1Blcm1pc3Npb25OYW1lcyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnBlcm1pc3Npb25OYW1lcyksXG4gICAgICAnUmVzb3VyY2VzJzogcm9zLmxpc3RNYXBwZXIocm9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uUmVzb3VyY2VzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnJlc291cmNlcyksXG4gICAgICAnVGFyZ2V0cyc6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRhcmdldHMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6UmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uYCwgd2hpY2ggaXMgdXNlZCB0byBhc3NvY2lhdGUgYSBzaGFyZWQgcmVzb3VyY2Ugb3IgYSByZXNvdXJjZSB1c2VyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBSZXNvdXJjZVNoYXJlQXNzb2NpYXRpb25gIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1yZXNvdXJjZXNoYXJlYXNzb2NpYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1Jlc291cmNlU2hhcmVBc3NvY2lhdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpSZXNvdXJjZVNoYXJlQXNzb2NpYXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzb3VyY2VTaGFyZUlkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIHNoYXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VTaGFyZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZVNoYXJlSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2Ugc2hhcmUuXG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlU2hhcmVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcm1pc3Npb25OYW1lczogU2hhcmluZyBwZXJtaXNzaW9uIG5hbWUuIFdoZW4gZW1wdHksIHRoZSBzeXN0ZW0gYXV0b21hdGljYWxseSBiaW5kcyB0aGUgZGVmYXVsdCBwZXJtaXNzaW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlc291cmNlIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHBlcm1pc3Npb25OYW1lczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZXNvdXJjZXM6XG4gICAgICovXG4gICAgcHVibGljIHJlc291cmNlczogQXJyYXk8Um9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uLlJlc291cmNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRzOiBUaGUgc2hhcmVkIHRhcmdldC5cbiAgICAgKiBBIHNoYXJlZCB0YXJnZXQgc2hhcmVzIHRoZSByZXNvdXJjZXMgb2YgcmVzb3VyY2Ugb3duZXJzLiBZb3UgY2FuIHNoYXJlIHlvdXIgcmVzb3VyY2VzXG4gICAgICogb25seSB3aXRoIHRoZSBtZW1iZXIgYWNjb3VudHMgaW4geW91ciByZXNvdXJjZSBkaXJlY3RvcnkuIEEgc2hhcmVkIHRhcmdldCBpcyBpbmRpY2F0ZWRcbiAgICAgKiBieSBpdHMgYWNjb3VudCBJRC4gRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIG9idGFpbiB0aGUgSUQsIHNlZSBWaWV3IHRoZSBiYXNpYyBpbmZvcm1hdGlvbiBvZiBhIG1lbWJlciBhY2NvdW50LlxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1Jlc291cmNlU2hhcmVBc3NvY2lhdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZVNoYXJlSWQgPSB0aGlzLmdldEF0dCgnUmVzb3VyY2VTaGFyZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnJlc291cmNlU2hhcmVJZCA9IHByb3BzLnJlc291cmNlU2hhcmVJZDtcbiAgICAgICAgdGhpcy5wZXJtaXNzaW9uTmFtZXMgPSBwcm9wcy5wZXJtaXNzaW9uTmFtZXM7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gcHJvcHMucmVzb3VyY2VzO1xuICAgICAgICB0aGlzLnRhcmdldHMgPSBwcm9wcy50YXJnZXRzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc291cmNlU2hhcmVJZDogdGhpcy5yZXNvdXJjZVNoYXJlSWQsXG4gICAgICAgICAgICBwZXJtaXNzaW9uTmFtZXM6IHRoaXMucGVybWlzc2lvbk5hbWVzLFxuICAgICAgICAgICAgcmVzb3VyY2VzOiB0aGlzLnJlc291cmNlcyxcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMudGFyZ2V0cyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VJZDogVGhlIElEIG9mIHRoZSBzaGFyZWQgcmVzb3VyY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZXNvdXJjZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVzb3VyY2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgc2hhcmVkIHJlc291cmNlLlxuICAgICAqIFN1cHBvcnQgcmVzb3VyY2UgdHlwZSBpbmNsdWRlOlxuICAgICAqIFZQQzogVlN3aXRjaCwgUHJlZml4TGlzdCwgUHVibGljSXBBZGRyZXNzUG9vbFxuICAgICAqIFJPUzogUk9TVGVtcGxhdGVcbiAgICAgKiBTZXJ2aWNlQ2F0YWxvZzogU2VydmljZUNhdGFsb2dQb3J0Zm9saW9cbiAgICAgKiBFQ1M6IEltYWdlLCBTbmFwc2hvdFxuICAgICAqIEtNUzogS01TSW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlc291cmNlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUmVzb3VyY2VzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlc291cmNlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1Jlc291cmNlU2hhcmVBc3NvY2lhdGlvbl9SZXNvdXJjZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc291cmNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVzb3VyY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZXNvdXJjZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZVR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVzb3VyY2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZXNvdXJjZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVzb3VyY2VUeXBlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJlc291cmNlc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlJlc291cmNlU2hhcmVBc3NvY2lhdGlvbi5SZXNvdXJjZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJlc291cmNlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlJlc291cmNlU2hhcmVBc3NvY2lhdGlvbi5SZXNvdXJjZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUmVzb3VyY2VTaGFyZUFzc29jaWF0aW9uUmVzb3VyY2VzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc1Jlc291cmNlU2hhcmVBc3NvY2lhdGlvbl9SZXNvdXJjZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdSZXNvdXJjZUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZUlkKSxcbiAgICAgICdSZXNvdXJjZVR5cGUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc291cmNlVHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NSb2xlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1yb2xlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUm9sZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IFRoZSBjb250ZW50IG9mIHRoZSBwZXJtaXNzaW9ucyBzdHJhdGVneSB0aGF0IHBsYXlzIGEgcm9sZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb2xlTmFtZTogUm9sZSBOYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvbGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgUmVzb3VyY2UgTWFuYWdlciByb2xlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1heFNlc3Npb25EdXJhdGlvbjogUm9sZSBtYXhpbXVtIHNlc3Npb24gdGltZS4gVmFsaWQgdmFsdWVzOiBbMzYwMC00MzIwMF0uIERlZmF1bHQgdG8gMzYwMC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhTZXNzaW9uRHVyYXRpb24/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zUm9sZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSb2xlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zUm9sZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMubWF4U2Vzc2lvbkR1cmF0aW9uICYmICh0eXBlb2YgcHJvcGVydGllcy5tYXhTZXNzaW9uRHVyYXRpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFNlc3Npb25EdXJhdGlvbicsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1heFNlc3Npb25EdXJhdGlvbixcbiAgICAgICAgICAgIG1pbjogMzYwMCxcbiAgICAgICAgICAgIG1heDogNDMyMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heFNlc3Npb25EdXJhdGlvbicsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5tYXhTZXNzaW9uRHVyYXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvbGVOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJvbGVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyb2xlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb2xlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Fzc3VtZVJvbGVQb2xpY3lEb2N1bWVudCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Fzc3VtZVJvbGVQb2xpY3lEb2N1bWVudCcsIHJvcy5oYXNoVmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuYXNzdW1lUm9sZVBvbGljeURvY3VtZW50KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1JvbGVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpSb2xlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NSb2xlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6Um9sZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NSb2xlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NSb2xlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0Fzc3VtZVJvbGVQb2xpY3lEb2N1bWVudCc6IHJvcy5oYXNoTWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudCksXG4gICAgICAnUm9sZU5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvbGVOYW1lKSxcbiAgICAgICdEZXNjcmlwdGlvbic6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgJ01heFNlc3Npb25EdXJhdGlvbic6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4U2Vzc2lvbkR1cmF0aW9uKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlJvbGVgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBSb2xlYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yZXNvdXJjZW1hbmFnZXItcm9sZVxuICovXG5leHBvcnQgY2xhc3MgUm9zUm9sZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpSb2xlXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFybjogVGhlIHJlc291cmNlIGRlc2NyaXB0b3Igb2YgdGhlIHJvbGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBcm46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiBUaGUgY29udGVudCBvZiB0aGUgcGVybWlzc2lvbnMgc3RyYXRlZ3kgdGhhdCBwbGF5cyBhIHJvbGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3JlYXRlVGltZTogUm9sZSBjcmVhdGlvbiB0aW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBSZXNvdXJjZSBNYW5hZ2VyIHJvbGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNYXhTZXNzaW9uRHVyYXRpb246IFJvbGUgbWF4aW11bSBzZXNzaW9uIHRpbWUuIFZhbGlkIHZhbHVlczogWzM2MDAtNDMyMDBdLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWF4U2Vzc2lvbkR1cmF0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJvbGVJZDogVGhpcyBJRCBvZiBSZXNvdXJjZSBNYW5hZ2VyIHJvbGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb2xlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUm9sZU5hbWU6IFJvbGUgTmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvbGVOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVwZGF0ZURhdGU6IFJvbGUgdXBkYXRlIHRpbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVcGRhdGVEYXRlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQ6IFRoZSBjb250ZW50IG9mIHRoZSBwZXJtaXNzaW9ucyBzdHJhdGVneSB0aGF0IHBsYXlzIGEgcm9sZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcm9sZU5hbWU6IFJvbGUgTmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcm9sZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBSZXNvdXJjZSBNYW5hZ2VyIHJvbGUuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF4U2Vzc2lvbkR1cmF0aW9uOiBSb2xlIG1heGltdW0gc2Vzc2lvbiB0aW1lLiBWYWxpZCB2YWx1ZXM6IFszNjAwLTQzMjAwXS4gRGVmYXVsdCB0byAzNjAwLlxuICAgICAqL1xuICAgIHB1YmxpYyBtYXhTZXNzaW9uRHVyYXRpb246IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NSb2xlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NSb2xlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBcm4gPSB0aGlzLmdldEF0dCgnQXJuJyk7XG4gICAgICAgIHRoaXMuYXR0ckFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudCA9IHRoaXMuZ2V0QXR0KCdBc3N1bWVSb2xlUG9saWN5RG9jdW1lbnQnKTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHRoaXMuZ2V0QXR0KCdDcmVhdGVUaW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckRlc2NyaXB0aW9uID0gdGhpcy5nZXRBdHQoJ0Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRoaXMuYXR0ck1heFNlc3Npb25EdXJhdGlvbiA9IHRoaXMuZ2V0QXR0KCdNYXhTZXNzaW9uRHVyYXRpb24nKTtcbiAgICAgICAgdGhpcy5hdHRyUm9sZUlkID0gdGhpcy5nZXRBdHQoJ1JvbGVJZCcpO1xuICAgICAgICB0aGlzLmF0dHJSb2xlTmFtZSA9IHRoaXMuZ2V0QXR0KCdSb2xlTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJVcGRhdGVEYXRlID0gdGhpcy5nZXRBdHQoJ1VwZGF0ZURhdGUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYXNzdW1lUm9sZVBvbGljeURvY3VtZW50ID0gcHJvcHMuYXNzdW1lUm9sZVBvbGljeURvY3VtZW50O1xuICAgICAgICB0aGlzLnJvbGVOYW1lID0gcHJvcHMucm9sZU5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5tYXhTZXNzaW9uRHVyYXRpb24gPSBwcm9wcy5tYXhTZXNzaW9uRHVyYXRpb247XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiB0aGlzLmFzc3VtZVJvbGVQb2xpY3lEb2N1bWVudCxcbiAgICAgICAgICAgIHJvbGVOYW1lOiB0aGlzLnJvbGVOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBtYXhTZXNzaW9uRHVyYXRpb246IHRoaXMubWF4U2Vzc2lvbkR1cmF0aW9uLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NSb2xlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zU2F2ZWRRdWVyeWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yZXNvdXJjZW1hbmFnZXItc2F2ZWRxdWVyeVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NhdmVkUXVlcnlQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXhwcmVzc2lvbjogVGhlIGV4cHJlc3Npb24gb2YgdGhlIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGV4cHJlc3Npb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzYXZlZFF1ZXJ5TmFtZTogVGhlIG5hbWUgb2YgdGhlIHRlbXBsYXRlLlxuICAgICAqICogVGhlIG5hbWUgbXVzdCBiZSAxIHRvIDY0IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS5cbiAgICAgKiAqIFRoZSB0ZW1wbGF0ZSBuYW1lIG11c3QgYmUgdW5pcXVlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNhdmVkUXVlcnlOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgdGVtcGxhdGUuIFRoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIDEgdG8gMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1NhdmVkUXVlcnlQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2F2ZWRRdWVyeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NhdmVkUXVlcnlQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZGVzY3JpcHRpb24pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kZXNjcmlwdGlvbikgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMjU2LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXhwcmVzc2lvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5leHByZXNzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdleHByZXNzaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmV4cHJlc3Npb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NhdmVkUXVlcnlOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNhdmVkUXVlcnlOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5zYXZlZFF1ZXJ5TmFtZSAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNhdmVkUXVlcnlOYW1lKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc2F2ZWRRdWVyeU5hbWUpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzYXZlZFF1ZXJ5TmFtZScsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zYXZlZFF1ZXJ5TmFtZS5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDY0LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzYXZlZFF1ZXJ5TmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zYXZlZFF1ZXJ5TmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NTYXZlZFF1ZXJ5UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6U2F2ZWRRdWVyeWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2F2ZWRRdWVyeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpSZXNvdXJjZU1hbmFnZXI6OlNhdmVkUXVlcnlgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2F2ZWRRdWVyeVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU2F2ZWRRdWVyeVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdFeHByZXNzaW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5leHByZXNzaW9uKSxcbiAgICAgICdTYXZlZFF1ZXJ5TmFtZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2F2ZWRRdWVyeU5hbWUpLFxuICAgICAgJ0Rlc2NyaXB0aW9uJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpTYXZlZFF1ZXJ5YC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgU2F2ZWRRdWVyeWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmVzb3VyY2VtYW5hZ2VyLXNhdmVkcXVlcnlcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NhdmVkUXVlcnkgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlJlc291cmNlTWFuYWdlcjo6U2F2ZWRRdWVyeVwiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDcmVhdGVUaW1lOiBUaGUgY3JlYXRpb24gdGltZSBvZiB0aGUgdGVtcGxhdGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVzY3JpcHRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRXhwcmVzc2lvbjogUXVlcnkgRXhwcmVzc2lvbiBvZiB0aGUgdGVtcGxhdGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFeHByZXNzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNhdmVkUXVlcnlJZDogVGhlIGlkIG9mIHRoZSB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNhdmVkUXVlcnlJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTYXZlZFF1ZXJ5TmFtZTogVGhlIG5hbWUgb2YgdGhlIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2F2ZWRRdWVyeU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVXBkYXRlVGltZTogVXBkYXRlIHRpbWUgb2YgdGhlIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVXBkYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXhwcmVzc2lvbjogVGhlIGV4cHJlc3Npb24gb2YgdGhlIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBleHByZXNzaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2F2ZWRRdWVyeU5hbWU6IFRoZSBuYW1lIG9mIHRoZSB0ZW1wbGF0ZS5cbiAgICAgKiAqIFRoZSBuYW1lIG11c3QgYmUgMSB0byA2NCBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAgICAgKiAqIFRoZSBuYW1lIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuXG4gICAgICogKiBUaGUgdGVtcGxhdGUgbmFtZSBtdXN0IGJlIHVuaXF1ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2F2ZWRRdWVyeU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0ZW1wbGF0ZS4gVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMSB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zU2F2ZWRRdWVyeVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU2F2ZWRRdWVyeS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHRoaXMuZ2V0QXR0KCdDcmVhdGVUaW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckRlc2NyaXB0aW9uID0gdGhpcy5nZXRBdHQoJ0Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRoaXMuYXR0ckV4cHJlc3Npb24gPSB0aGlzLmdldEF0dCgnRXhwcmVzc2lvbicpO1xuICAgICAgICB0aGlzLmF0dHJTYXZlZFF1ZXJ5SWQgPSB0aGlzLmdldEF0dCgnU2F2ZWRRdWVyeUlkJyk7XG4gICAgICAgIHRoaXMuYXR0clNhdmVkUXVlcnlOYW1lID0gdGhpcy5nZXRBdHQoJ1NhdmVkUXVlcnlOYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0clVwZGF0ZVRpbWUgPSB0aGlzLmdldEF0dCgnVXBkYXRlVGltZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gcHJvcHMuZXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5zYXZlZFF1ZXJ5TmFtZSA9IHByb3BzLnNhdmVkUXVlcnlOYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXhwcmVzc2lvbjogdGhpcy5leHByZXNzaW9uLFxuICAgICAgICAgICAgc2F2ZWRRdWVyeU5hbWU6IHRoaXMuc2F2ZWRRdWVyeU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU2F2ZWRRdWVyeVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc1NoYXJlZFRhcmdldGAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1yZXNvdXJjZW1hbmFnZXItc2hhcmVkdGFyZ2V0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU2hhcmVkVGFyZ2V0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlU2hhcmVJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBzaGFyZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZVNoYXJlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXJnZXRJZDogVGhlIElEIG9mIHRoZSBwcmluY2lwYWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0SWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU2hhcmVkVGFyZ2V0UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NoYXJlZFRhcmdldFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NoYXJlZFRhcmdldFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VTaGFyZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlc291cmNlU2hhcmVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzb3VyY2VTaGFyZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlc291cmNlU2hhcmVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFyZ2V0SWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFyZ2V0SWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zU2hhcmVkVGFyZ2V0UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlJlc291cmNlTWFuYWdlcjo6U2hhcmVkVGFyZ2V0YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTaGFyZWRUYXJnZXRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpTaGFyZWRUYXJnZXRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2hhcmVkVGFyZ2V0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NTaGFyZWRUYXJnZXRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnUmVzb3VyY2VTaGFyZUlkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXNvdXJjZVNoYXJlSWQpLFxuICAgICAgJ1RhcmdldElkJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YXJnZXRJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpTaGFyZWRUYXJnZXRgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBTaGFyZWRUYXJnZXRgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXJlc291cmNlbWFuYWdlci1zaGFyZWR0YXJnZXRcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NoYXJlZFRhcmdldCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6UmVzb3VyY2VNYW5hZ2VyOjpTaGFyZWRUYXJnZXRcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3JlYXRlVGltZTogQ3JlYXRlIHRpbWUgb2YgdGhlIHJlc291cmNlIHNoYXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSZXNvdXJjZVNoYXJlSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2Ugc2hhcmUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZVNoYXJlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgUmVzb3VyY2VTaGFyZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSByZXNvdXJjZSBzaGFyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlU2hhcmVOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRhcmdldElkOiBUaGUgSUQgb2YgdGhlIHByaW5jaXBhbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhcmdldElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFVwZGF0ZVRpbWU6IFVwZGF0ZSB0aW1lIG9mIHRoZSByZXNvdXJjZSBzaGFyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVwZGF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc291cmNlU2hhcmVJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBzaGFyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzb3VyY2VTaGFyZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0SWQ6IFRoZSBJRCBvZiB0aGUgcHJpbmNpcGFsLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1NoYXJlZFRhcmdldFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU2hhcmVkVGFyZ2V0LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gdGhpcy5nZXRBdHQoJ0NyZWF0ZVRpbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VTaGFyZUlkID0gdGhpcy5nZXRBdHQoJ1Jlc291cmNlU2hhcmVJZCcpO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZVNoYXJlTmFtZSA9IHRoaXMuZ2V0QXR0KCdSZXNvdXJjZVNoYXJlTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJUYXJnZXRJZCA9IHRoaXMuZ2V0QXR0KCdUYXJnZXRJZCcpO1xuICAgICAgICB0aGlzLmF0dHJVcGRhdGVUaW1lID0gdGhpcy5nZXRBdHQoJ1VwZGF0ZVRpbWUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucmVzb3VyY2VTaGFyZUlkID0gcHJvcHMucmVzb3VyY2VTaGFyZUlkO1xuICAgICAgICB0aGlzLnRhcmdldElkID0gcHJvcHMudGFyZ2V0SWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzb3VyY2VTaGFyZUlkOiB0aGlzLnJlc291cmNlU2hhcmVJZCxcbiAgICAgICAgICAgIHRhcmdldElkOiB0aGlzLnRhcmdldElkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NTaGFyZWRUYXJnZXRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==