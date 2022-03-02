"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosSmartAccessGatewayBinding = exports.RosSmartAccessGateway = exports.RosSerialNumberBinding = exports.RosGrantCcnToCen = exports.RosCloudConnectNetwork = exports.RosACLRule = exports.RosACLAssociation = exports.RosACL = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosACLProps`
 *
 * @param properties - the TypeScript properties of a `RosACLProps`
 *
 * @returns the result of the validation.
 */
function RosACLPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosACLProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::ACL` resource
 *
 * @param properties - the TypeScript properties of a `RosACLProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::ACL` resource.
 */
// @ts-ignore TS6133
function rosACLPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosACLPropsValidator(properties).assertSuccess();
    }
    return {
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * A ROS template type:  `ALIYUN::SAG::ACL`
 */
class RosACL extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SAG::ACL`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosACL.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclId = this.getAtt('AclId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
    }
    get rosProperties() {
        return {
            name: this.name,
        };
    }
    renderProperties(props) {
        return rosACLPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosACL = RosACL;
/**
 * The resource type name for this resource class.
 */
RosACL.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACL";
/**
 * Determine whether the given properties match those of a `RosACLAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosACLAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosACLAssociationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('aclId', ros.requiredValidator)(properties.aclId));
    errors.collect(ros.propertyValidator('aclId', ros.validateString)(properties.aclId));
    errors.collect(ros.propertyValidator('smartAgId', ros.requiredValidator)(properties.smartAgId));
    errors.collect(ros.propertyValidator('smartAgId', ros.validateString)(properties.smartAgId));
    return errors.wrap('supplied properties not correct for "RosACLAssociationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::ACLAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosACLAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::ACLAssociation` resource.
 */
// @ts-ignore TS6133
function rosACLAssociationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosACLAssociationPropsValidator(properties).assertSuccess();
    }
    return {
        AclId: ros.stringToRosTemplate(properties.aclId),
        SmartAGId: ros.stringToRosTemplate(properties.smartAgId),
    };
}
/**
 * A ROS template type:  `ALIYUN::SAG::ACLAssociation`
 */
class RosACLAssociation extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SAG::ACLAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosACLAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclId = props.aclId;
        this.smartAgId = props.smartAgId;
    }
    get rosProperties() {
        return {
            aclId: this.aclId,
            smartAgId: this.smartAgId,
        };
    }
    renderProperties(props) {
        return rosACLAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosACLAssociation = RosACLAssociation;
/**
 * The resource type name for this resource class.
 */
RosACLAssociation.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACLAssociation";
/**
 * Determine whether the given properties match those of a `RosACLRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosACLRuleProps`
 *
 * @returns the result of the validation.
 */
function RosACLRulePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policy', ros.requiredValidator)(properties.policy));
    if (properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
            data: properties.policy,
            allowedValues: ["accept", "drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    if (properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 512,
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('destCidr', ros.requiredValidator)(properties.destCidr));
    errors.collect(ros.propertyValidator('destCidr', ros.validateString)(properties.destCidr));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.requiredValidator)(properties.sourcePortRange));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.validateString)(properties.sourcePortRange));
    errors.collect(ros.propertyValidator('sourceCidr', ros.requiredValidator)(properties.sourceCidr));
    errors.collect(ros.propertyValidator('sourceCidr', ros.validateString)(properties.sourceCidr));
    if (properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('aclId', ros.requiredValidator)(properties.aclId));
    errors.collect(ros.propertyValidator('aclId', ros.validateString)(properties.aclId));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('destPortRange', ros.requiredValidator)(properties.destPortRange));
    errors.collect(ros.propertyValidator('destPortRange', ros.validateString)(properties.destPortRange));
    errors.collect(ros.propertyValidator('direction', ros.requiredValidator)(properties.direction));
    if (properties.direction && (typeof properties.direction) !== 'object') {
        errors.collect(ros.propertyValidator('direction', ros.validateAllowedValues)({
            data: properties.direction,
            allowedValues: ["in", "out"],
        }));
    }
    errors.collect(ros.propertyValidator('direction', ros.validateString)(properties.direction));
    return errors.wrap('supplied properties not correct for "RosACLRuleProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::ACLRule` resource
 *
 * @param properties - the TypeScript properties of a `RosACLRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::ACLRule` resource.
 */
// @ts-ignore TS6133
function rosACLRulePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosACLRulePropsValidator(properties).assertSuccess();
    }
    return {
        AclId: ros.stringToRosTemplate(properties.aclId),
        DestCidr: ros.stringToRosTemplate(properties.destCidr),
        DestPortRange: ros.stringToRosTemplate(properties.destPortRange),
        Direction: ros.stringToRosTemplate(properties.direction),
        IpProtocol: ros.stringToRosTemplate(properties.ipProtocol),
        Policy: ros.stringToRosTemplate(properties.policy),
        SourceCidr: ros.stringToRosTemplate(properties.sourceCidr),
        SourcePortRange: ros.stringToRosTemplate(properties.sourcePortRange),
        Description: ros.stringToRosTemplate(properties.description),
        Priority: ros.numberToRosTemplate(properties.priority),
    };
}
/**
 * A ROS template type:  `ALIYUN::SAG::ACLRule`
 */
class RosACLRule extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SAG::ACLRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosACLRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAcrId = this.getAtt('AcrId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclId = props.aclId;
        this.destCidr = props.destCidr;
        this.destPortRange = props.destPortRange;
        this.direction = props.direction;
        this.ipProtocol = props.ipProtocol;
        this.policy = props.policy;
        this.sourceCidr = props.sourceCidr;
        this.sourcePortRange = props.sourcePortRange;
        this.description = props.description;
        this.priority = props.priority;
    }
    get rosProperties() {
        return {
            aclId: this.aclId,
            destCidr: this.destCidr,
            destPortRange: this.destPortRange,
            direction: this.direction,
            ipProtocol: this.ipProtocol,
            policy: this.policy,
            sourceCidr: this.sourceCidr,
            sourcePortRange: this.sourcePortRange,
            description: this.description,
            priority: this.priority,
        };
    }
    renderProperties(props) {
        return rosACLRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosACLRule = RosACLRule;
/**
 * The resource type name for this resource class.
 */
RosACLRule.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACLRule";
/**
 * Determine whether the given properties match those of a `RosCloudConnectNetworkProps`
 *
 * @param properties - the TypeScript properties of a `RosCloudConnectNetworkProps`
 *
 * @returns the result of the validation.
 */
function RosCloudConnectNetworkPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isDefault', ros.validateBoolean)(properties.isDefault));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
        }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosCloudConnectNetwork_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCloudConnectNetworkProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::CloudConnectNetwork` resource
 *
 * @param properties - the TypeScript properties of a `RosCloudConnectNetworkProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::CloudConnectNetwork` resource.
 */
// @ts-ignore TS6133
function rosCloudConnectNetworkPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCloudConnectNetworkPropsValidator(properties).assertSuccess();
    }
    return {
        Description: ros.stringToRosTemplate(properties.description),
        IsDefault: ros.booleanToRosTemplate(properties.isDefault),
        Name: ros.stringToRosTemplate(properties.name),
        Tags: ros.listMapper(rosCloudConnectNetworkTagsPropertyToRosTemplate)(properties.tags),
    };
}
/**
 * A ROS template type:  `ALIYUN::SAG::CloudConnectNetwork`
 */
class RosCloudConnectNetwork extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SAG::CloudConnectNetwork`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCloudConnectNetwork.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCcnId = this.getAtt('CcnId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.isDefault = props.isDefault;
        this.name = props.name;
        this.tags = props.tags;
    }
    get rosProperties() {
        return {
            description: this.description,
            isDefault: this.isDefault,
            name: this.name,
            tags: this.tags,
        };
    }
    renderProperties(props) {
        return rosCloudConnectNetworkPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCloudConnectNetwork = RosCloudConnectNetwork;
/**
 * The resource type name for this resource class.
 */
RosCloudConnectNetwork.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::CloudConnectNetwork";
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosCloudConnectNetwork_TagsPropertyValidator(properties) {
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::CloudConnectNetwork.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::CloudConnectNetwork.Tags` resource.
 */
// @ts-ignore TS6133
function rosCloudConnectNetworkTagsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosCloudConnectNetwork_TagsPropertyValidator(properties).assertSuccess();
    return {
        Value: ros.stringToRosTemplate(properties.value),
        Key: ros.stringToRosTemplate(properties.key),
    };
}
/**
 * Determine whether the given properties match those of a `RosGrantCcnToCenProps`
 *
 * @param properties - the TypeScript properties of a `RosGrantCcnToCenProps`
 *
 * @returns the result of the validation.
 */
function RosGrantCcnToCenPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cenUid', ros.requiredValidator)(properties.cenUid));
    errors.collect(ros.propertyValidator('cenUid', ros.validateString)(properties.cenUid));
    errors.collect(ros.propertyValidator('ccnInstanceId', ros.requiredValidator)(properties.ccnInstanceId));
    errors.collect(ros.propertyValidator('ccnInstanceId', ros.validateString)(properties.ccnInstanceId));
    errors.collect(ros.propertyValidator('cenInstanceId', ros.requiredValidator)(properties.cenInstanceId));
    errors.collect(ros.propertyValidator('cenInstanceId', ros.validateString)(properties.cenInstanceId));
    return errors.wrap('supplied properties not correct for "RosGrantCcnToCenProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::GrantCcnToCen` resource
 *
 * @param properties - the TypeScript properties of a `RosGrantCcnToCenProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::GrantCcnToCen` resource.
 */
// @ts-ignore TS6133
function rosGrantCcnToCenPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosGrantCcnToCenPropsValidator(properties).assertSuccess();
    }
    return {
        CcnInstanceId: ros.stringToRosTemplate(properties.ccnInstanceId),
        CenInstanceId: ros.stringToRosTemplate(properties.cenInstanceId),
        CenUid: ros.stringToRosTemplate(properties.cenUid),
    };
}
/**
 * A ROS template type:  `ALIYUN::SAG::GrantCcnToCen`
 */
class RosGrantCcnToCen extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SAG::GrantCcnToCen`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosGrantCcnToCen.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCcnInstanceId = this.getAtt('CcnInstanceId');
        this.attrCenInstanceId = this.getAtt('CenInstanceId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ccnInstanceId = props.ccnInstanceId;
        this.cenInstanceId = props.cenInstanceId;
        this.cenUid = props.cenUid;
    }
    get rosProperties() {
        return {
            ccnInstanceId: this.ccnInstanceId,
            cenInstanceId: this.cenInstanceId,
            cenUid: this.cenUid,
        };
    }
    renderProperties(props) {
        return rosGrantCcnToCenPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosGrantCcnToCen = RosGrantCcnToCen;
/**
 * The resource type name for this resource class.
 */
RosGrantCcnToCen.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::GrantCcnToCen";
/**
 * Determine whether the given properties match those of a `RosSerialNumberBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosSerialNumberBindingProps`
 *
 * @returns the result of the validation.
 */
function RosSerialNumberBindingPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serialNumber', ros.requiredValidator)(properties.serialNumber));
    errors.collect(ros.propertyValidator('serialNumber', ros.validateString)(properties.serialNumber));
    errors.collect(ros.propertyValidator('smartAgId', ros.requiredValidator)(properties.smartAgId));
    errors.collect(ros.propertyValidator('smartAgId', ros.validateString)(properties.smartAgId));
    return errors.wrap('supplied properties not correct for "RosSerialNumberBindingProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::SerialNumberBinding` resource
 *
 * @param properties - the TypeScript properties of a `RosSerialNumberBindingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::SerialNumberBinding` resource.
 */
// @ts-ignore TS6133
function rosSerialNumberBindingPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSerialNumberBindingPropsValidator(properties).assertSuccess();
    }
    return {
        SerialNumber: ros.stringToRosTemplate(properties.serialNumber),
        SmartAGId: ros.stringToRosTemplate(properties.smartAgId),
    };
}
/**
 * A ROS template type:  `ALIYUN::SAG::SerialNumberBinding`
 */
class RosSerialNumberBinding extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SAG::SerialNumberBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSerialNumberBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSmartAgId = this.getAtt('SmartAGId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serialNumber = props.serialNumber;
        this.smartAgId = props.smartAgId;
    }
    get rosProperties() {
        return {
            serialNumber: this.serialNumber,
            smartAgId: this.smartAgId,
        };
    }
    renderProperties(props) {
        return rosSerialNumberBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSerialNumberBinding = RosSerialNumberBinding;
/**
 * The resource type name for this resource class.
 */
RosSerialNumberBinding.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SerialNumberBinding";
/**
 * Determine whether the given properties match those of a `RosSmartAccessGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosSmartAccessGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosSmartAccessGatewayPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('receiverCountry', ros.requiredValidator)(properties.receiverCountry));
    errors.collect(ros.propertyValidator('receiverCountry', ros.validateString)(properties.receiverCountry));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('receiverZip', ros.requiredValidator)(properties.receiverZip));
    errors.collect(ros.propertyValidator('receiverZip', ros.validateString)(properties.receiverZip));
    errors.collect(ros.propertyValidator('buyerMessage', ros.requiredValidator)(properties.buyerMessage));
    errors.collect(ros.propertyValidator('buyerMessage', ros.validateString)(properties.buyerMessage));
    errors.collect(ros.propertyValidator('cidrBlock', ros.validateString)(properties.cidrBlock));
    errors.collect(ros.propertyValidator('receiverTown', ros.requiredValidator)(properties.receiverTown));
    errors.collect(ros.propertyValidator('receiverTown', ros.validateString)(properties.receiverTown));
    errors.collect(ros.propertyValidator('hardWareSpec', ros.requiredValidator)(properties.hardWareSpec));
    errors.collect(ros.propertyValidator('hardWareSpec', ros.validateString)(properties.hardWareSpec));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('receiverPhone', ros.validateString)(properties.receiverPhone));
    errors.collect(ros.propertyValidator('receiverCity', ros.requiredValidator)(properties.receiverCity));
    errors.collect(ros.propertyValidator('receiverCity', ros.validateString)(properties.receiverCity));
    errors.collect(ros.propertyValidator('routingStrategy', ros.validateString)(properties.routingStrategy));
    errors.collect(ros.propertyValidator('securityLockThreshold', ros.validateNumber)(properties.securityLockThreshold));
    errors.collect(ros.propertyValidator('receiverAddress', ros.requiredValidator)(properties.receiverAddress));
    errors.collect(ros.propertyValidator('receiverAddress', ros.validateString)(properties.receiverAddress));
    errors.collect(ros.propertyValidator('alreadyHaveSag', ros.validateBoolean)(properties.alreadyHaveSag));
    errors.collect(ros.propertyValidator('haType', ros.requiredValidator)(properties.haType));
    if (properties.haType && (typeof properties.haType) !== 'object') {
        errors.collect(ros.propertyValidator('haType', ros.validateAllowedValues)({
            data: properties.haType,
            allowedValues: ["cold_backup", "no_backup", "warm_backup"],
        }));
    }
    errors.collect(ros.propertyValidator('haType', ros.validateString)(properties.haType));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('maxBandWidth', ros.requiredValidator)(properties.maxBandWidth));
    errors.collect(ros.propertyValidator('maxBandWidth', ros.validateNumber)(properties.maxBandWidth));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('receiverMobile', ros.requiredValidator)(properties.receiverMobile));
    errors.collect(ros.propertyValidator('receiverMobile', ros.validateString)(properties.receiverMobile));
    errors.collect(ros.propertyValidator('receiverDistrict', ros.requiredValidator)(properties.receiverDistrict));
    errors.collect(ros.propertyValidator('receiverDistrict', ros.validateString)(properties.receiverDistrict));
    errors.collect(ros.propertyValidator('activate', ros.validateBoolean)(properties.activate));
    errors.collect(ros.propertyValidator('chargeType', ros.requiredValidator)(properties.chargeType));
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('receiverState', ros.requiredValidator)(properties.receiverState));
    errors.collect(ros.propertyValidator('receiverState', ros.validateString)(properties.receiverState));
    errors.collect(ros.propertyValidator('receiverName', ros.requiredValidator)(properties.receiverName));
    errors.collect(ros.propertyValidator('receiverName', ros.validateString)(properties.receiverName));
    errors.collect(ros.propertyValidator('receiverEmail', ros.requiredValidator)(properties.receiverEmail));
    errors.collect(ros.propertyValidator('receiverEmail', ros.validateString)(properties.receiverEmail));
    return errors.wrap('supplied properties not correct for "RosSmartAccessGatewayProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::SmartAccessGateway` resource
 *
 * @param properties - the TypeScript properties of a `RosSmartAccessGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::SmartAccessGateway` resource.
 */
// @ts-ignore TS6133
function rosSmartAccessGatewayPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSmartAccessGatewayPropsValidator(properties).assertSuccess();
    }
    return {
        BuyerMessage: ros.stringToRosTemplate(properties.buyerMessage),
        ChargeType: ros.stringToRosTemplate(properties.chargeType),
        HardWareSpec: ros.stringToRosTemplate(properties.hardWareSpec),
        HaType: ros.stringToRosTemplate(properties.haType),
        MaxBandWidth: ros.numberToRosTemplate(properties.maxBandWidth),
        Period: ros.numberToRosTemplate(properties.period),
        ReceiverAddress: ros.stringToRosTemplate(properties.receiverAddress),
        ReceiverCity: ros.stringToRosTemplate(properties.receiverCity),
        ReceiverCountry: ros.stringToRosTemplate(properties.receiverCountry),
        ReceiverDistrict: ros.stringToRosTemplate(properties.receiverDistrict),
        ReceiverEmail: ros.stringToRosTemplate(properties.receiverEmail),
        ReceiverMobile: ros.stringToRosTemplate(properties.receiverMobile),
        ReceiverName: ros.stringToRosTemplate(properties.receiverName),
        ReceiverState: ros.stringToRosTemplate(properties.receiverState),
        ReceiverTown: ros.stringToRosTemplate(properties.receiverTown),
        ReceiverZip: ros.stringToRosTemplate(properties.receiverZip),
        Activate: ros.booleanToRosTemplate(properties.activate),
        AlreadyHaveSag: ros.booleanToRosTemplate(properties.alreadyHaveSag),
        AutoPay: ros.booleanToRosTemplate(properties.autoPay),
        CidrBlock: ros.stringToRosTemplate(properties.cidrBlock),
        Description: ros.stringToRosTemplate(properties.description),
        Name: ros.stringToRosTemplate(properties.name),
        ReceiverPhone: ros.stringToRosTemplate(properties.receiverPhone),
        RoutingStrategy: ros.stringToRosTemplate(properties.routingStrategy),
        SecurityLockThreshold: ros.numberToRosTemplate(properties.securityLockThreshold),
    };
}
/**
 * A ROS template type:  `ALIYUN::SAG::SmartAccessGateway`
 */
class RosSmartAccessGateway extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SAG::SmartAccessGateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSmartAccessGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrOrderId = this.getAtt('OrderId');
        this.attrSmartAgId = this.getAtt('SmartAGId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.buyerMessage = props.buyerMessage;
        this.chargeType = props.chargeType;
        this.hardWareSpec = props.hardWareSpec;
        this.haType = props.haType;
        this.maxBandWidth = props.maxBandWidth;
        this.period = props.period;
        this.receiverAddress = props.receiverAddress;
        this.receiverCity = props.receiverCity;
        this.receiverCountry = props.receiverCountry;
        this.receiverDistrict = props.receiverDistrict;
        this.receiverEmail = props.receiverEmail;
        this.receiverMobile = props.receiverMobile;
        this.receiverName = props.receiverName;
        this.receiverState = props.receiverState;
        this.receiverTown = props.receiverTown;
        this.receiverZip = props.receiverZip;
        this.activate = props.activate;
        this.alreadyHaveSag = props.alreadyHaveSag;
        this.autoPay = props.autoPay;
        this.cidrBlock = props.cidrBlock;
        this.description = props.description;
        this.name = props.name;
        this.receiverPhone = props.receiverPhone;
        this.routingStrategy = props.routingStrategy;
        this.securityLockThreshold = props.securityLockThreshold;
    }
    get rosProperties() {
        return {
            buyerMessage: this.buyerMessage,
            chargeType: this.chargeType,
            hardWareSpec: this.hardWareSpec,
            haType: this.haType,
            maxBandWidth: this.maxBandWidth,
            period: this.period,
            receiverAddress: this.receiverAddress,
            receiverCity: this.receiverCity,
            receiverCountry: this.receiverCountry,
            receiverDistrict: this.receiverDistrict,
            receiverEmail: this.receiverEmail,
            receiverMobile: this.receiverMobile,
            receiverName: this.receiverName,
            receiverState: this.receiverState,
            receiverTown: this.receiverTown,
            receiverZip: this.receiverZip,
            activate: this.activate,
            alreadyHaveSag: this.alreadyHaveSag,
            autoPay: this.autoPay,
            cidrBlock: this.cidrBlock,
            description: this.description,
            name: this.name,
            receiverPhone: this.receiverPhone,
            routingStrategy: this.routingStrategy,
            securityLockThreshold: this.securityLockThreshold,
        };
    }
    renderProperties(props) {
        return rosSmartAccessGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSmartAccessGateway = RosSmartAccessGateway;
/**
 * The resource type name for this resource class.
 */
RosSmartAccessGateway.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SmartAccessGateway";
/**
 * Determine whether the given properties match those of a `RosSmartAccessGatewayBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosSmartAccessGatewayBindingProps`
 *
 * @returns the result of the validation.
 */
function RosSmartAccessGatewayBindingPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ccnId', ros.requiredValidator)(properties.ccnId));
    errors.collect(ros.propertyValidator('ccnId', ros.validateString)(properties.ccnId));
    errors.collect(ros.propertyValidator('smartAgId', ros.requiredValidator)(properties.smartAgId));
    errors.collect(ros.propertyValidator('smartAgId', ros.validateString)(properties.smartAgId));
    return errors.wrap('supplied properties not correct for "RosSmartAccessGatewayBindingProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::SmartAccessGatewayBinding` resource
 *
 * @param properties - the TypeScript properties of a `RosSmartAccessGatewayBindingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::SmartAccessGatewayBinding` resource.
 */
// @ts-ignore TS6133
function rosSmartAccessGatewayBindingPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSmartAccessGatewayBindingPropsValidator(properties).assertSuccess();
    }
    return {
        CcnId: ros.stringToRosTemplate(properties.ccnId),
        SmartAGId: ros.stringToRosTemplate(properties.smartAgId),
    };
}
/**
 * A ROS template type:  `ALIYUN::SAG::SmartAccessGatewayBinding`
 */
class RosSmartAccessGatewayBinding extends ros.RosResource {
    /**
     * Create a new `ALIYUN::SAG::SmartAccessGatewayBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSmartAccessGatewayBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSmartAgId = this.getAtt('SmartAGId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ccnId = props.ccnId;
        this.smartAgId = props.smartAgId;
    }
    get rosProperties() {
        return {
            ccnId: this.ccnId,
            smartAgId: this.smartAgId,
        };
    }
    renderProperties(props) {
        return rosSmartAccessGatewayBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSmartAccessGatewayBinding = RosSmartAccessGatewayBinding;
/**
 * The resource type name for this resource class.
 */
RosSmartAccessGatewayBinding.ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SmartAccessGatewayBinding";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhZy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWM5Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLG9CQUFvQixDQUFDLFVBQWU7SUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkYsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG1EQUFtRCxDQUFDLENBQUM7QUFDNUUsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHdCQUF3QixDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDeEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDcEQ7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO0tBQy9D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QUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7O0FBdERMLG9FQXVEQztBQXRERzs7R0FFRztBQUNvQixtREFBc0IsR0FBRyx3Q0FBd0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTQUc6OkFDTGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBQ0xQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogQWNjZXNzIGNvbnRyb2wgbmFtZS5cbiAgICAgKiBUaGUgbGVuZ3RoIGlzIDItMTI4IGNoYXJhY3RlcnMuIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlLiBJdCBjYW4gY29udGFpbiBudW1iZXJzLCBwZXJpb2RzICguKSwgdW5kZXJzY29yZXMgKF8pIGFuZCBkYXNoZXMgKC0pLCBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQUNMUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FDTFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FDTFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQUNMUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNBRzo6QUNMYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBQ0xQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpBQ0xgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQUNMUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NBQ0xQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlNBRzo6QUNMYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQUNMIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpTQUc6OkFDTFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFjbElkOiBBY2Nlc3MgY29udHJvbCBzZXQgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY2xJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogQWNjZXNzIGNvbnRyb2wgbmFtZS5cbiAgICAgKiBUaGUgbGVuZ3RoIGlzIDItMTI4IGNoYXJhY3RlcnMuIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlLiBJdCBjYW4gY29udGFpbiBudW1iZXJzLCBwZXJpb2RzICguKSwgdW5kZXJzY29yZXMgKF8pIGFuZCBkYXNoZXMgKC0pLCBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNBRzo6QUNMYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBQ0xQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0FDTC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQWNsSWQgPSB0aGlzLmdldEF0dCgnQWNsSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBQ0xQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNBRzo6QUNMQXNzb2NpYXRpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQUNMQXNzb2NpYXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNsSWQ6IEFjY2VzcyBjb250cm9sIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjbElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc21hcnRBZ0lkOiBBbiBpbnRlbGxpZ2VudCBnYXRld2F5IGluc3RhbmNlIHRoYXQgbmVlZHMgdG8gYmluZCBhY2Nlc3MgY29udHJvbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzbWFydEFnSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBQ0xBc3NvY2lhdGlvblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBQ0xBc3NvY2lhdGlvblByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FDTEFzc29jaWF0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2xJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hY2xJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNsSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWNsSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NtYXJ0QWdJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zbWFydEFnSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NtYXJ0QWdJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zbWFydEFnSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQUNMQXNzb2NpYXRpb25Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpBQ0xBc3NvY2lhdGlvbmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQUNMQXNzb2NpYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpBQ0xBc3NvY2lhdGlvbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBQ0xBc3NvY2lhdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQUNMQXNzb2NpYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBBY2xJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hY2xJZCksXG4gICAgICBTbWFydEFHSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc21hcnRBZ0lkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpTQUc6OkFDTEFzc29jaWF0aW9uYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQUNMQXNzb2NpYXRpb24gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlNBRzo6QUNMQXNzb2NpYXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNsSWQ6IEFjY2VzcyBjb250cm9sIElELlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2xJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNtYXJ0QWdJZDogQW4gaW50ZWxsaWdlbnQgZ2F0ZXdheSBpbnN0YW5jZSB0aGF0IG5lZWRzIHRvIGJpbmQgYWNjZXNzIGNvbnRyb2wuXG4gICAgICovXG4gICAgcHVibGljIHNtYXJ0QWdJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNBRzo6QUNMQXNzb2NpYXRpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FDTEFzc29jaWF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBQ0xBc3NvY2lhdGlvbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYWNsSWQgPSBwcm9wcy5hY2xJZDtcbiAgICAgICAgdGhpcy5zbWFydEFnSWQgPSBwcm9wcy5zbWFydEFnSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNsSWQ6IHRoaXMuYWNsSWQsXG4gICAgICAgICAgICBzbWFydEFnSWQ6IHRoaXMuc21hcnRBZ0lkLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBQ0xBc3NvY2lhdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0FHOjpBQ0xSdWxlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FDTFJ1bGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNsSWQ6IEFjY2VzcyBjb250cm9sIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjbElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzdENpZHI6IERlc3RpbmF0aW9uIGFkZHJlc3MsIENJRFIgZm9ybWF0IGFuZCBJUCBhZGRyZXNzIHJhbmdlIGluIElQdjQgZm9ybWF0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RDaWRyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzdFBvcnRSYW5nZTogRGVzdGluYXRpb24gcG9ydCByYW5nZSwgODAvODAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdFBvcnRSYW5nZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdGlvbjogUmVndWxhciBkaXJlY3Rpb24uXG4gICAgICogVmFsdWU6IGlufG91dFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpcmVjdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlwUHJvdG9jb2w6IFByb3RvY29sLCBub3QgY2FzZSBzZW5zaXRpdmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXBQcm90b2NvbDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBvbGljeTogQWNjZXNzOiBhY2NlcHR8ZHJvcFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBvbGljeTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZUNpZHI6IFNvdXJjZSBhZGRyZXNzLCBDSURSIGZvcm1hdCBhbmQgSVAgYWRkcmVzcyByYW5nZSBpbiBJUHY0IGZvcm1hdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VDaWRyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlUG9ydFJhbmdlOiBTb3VyY2UgcG9ydCByYW5nZSwgODAvODAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlUG9ydFJhbmdlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFJ1bGUgZGVzY3JpcHRpb24gaW5mb3JtYXRpb24sIHJhbmdpbmcgZnJvbSAxIHRvIDUxMiBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByaW9yaXR5OiBQcmlvcml0eSwgcmFuZ2luZyBmcm9tIDEgdG8gMTAwLlxuICAgICAqIERlZmF1bHQ6IDFcbiAgICAgKi9cbiAgICByZWFkb25seSBwcmlvcml0eT86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBQ0xSdWxlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FDTFJ1bGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBQ0xSdWxlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3knLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucG9saWN5KSk7XG4gICAgaWYocHJvcGVydGllcy5wb2xpY3kgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnBvbGljeSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5Jywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucG9saWN5LFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImFjY2VwdFwiLFwiZHJvcFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wb2xpY3kpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuZGVzY3JpcHRpb24pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5kZXNjcmlwdGlvbikgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNTEyLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzdENpZHInLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVzdENpZHIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc3RDaWRyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc3RDaWRyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VQb3J0UmFuZ2UnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc291cmNlUG9ydFJhbmdlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VQb3J0UmFuZ2UnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc291cmNlUG9ydFJhbmdlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VDaWRyJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNvdXJjZUNpZHIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NvdXJjZUNpZHInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc291cmNlQ2lkcikpO1xuICAgIGlmKHByb3BlcnRpZXMucHJpb3JpdHkgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByaW9yaXR5KSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmlvcml0eScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnByaW9yaXR5LFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ByaW9yaXR5Jywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnByaW9yaXR5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhY2xJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hY2xJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNsSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWNsSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwUHJvdG9jb2wnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaXBQcm90b2NvbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXBQcm90b2NvbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pcFByb3RvY29sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXN0UG9ydFJhbmdlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRlc3RQb3J0UmFuZ2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc3RQb3J0UmFuZ2UnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzdFBvcnRSYW5nZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0aW9uJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRpcmVjdGlvbikpO1xuICAgIGlmKHByb3BlcnRpZXMuZGlyZWN0aW9uICYmICh0eXBlb2YgcHJvcGVydGllcy5kaXJlY3Rpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdGlvbicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmRpcmVjdGlvbixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJpblwiLFwib3V0XCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGlyZWN0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpcmVjdGlvbikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBQ0xSdWxlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNBRzo6QUNMUnVsZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQUNMUnVsZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTQUc6OkFDTFJ1bGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQUNMUnVsZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQUNMUnVsZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEFjbElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFjbElkKSxcbiAgICAgIERlc3RDaWRyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc3RDaWRyKSxcbiAgICAgIERlc3RQb3J0UmFuZ2U6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzdFBvcnRSYW5nZSksXG4gICAgICBEaXJlY3Rpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGlyZWN0aW9uKSxcbiAgICAgIElwUHJvdG9jb2w6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXBQcm90b2NvbCksXG4gICAgICBQb2xpY3k6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucG9saWN5KSxcbiAgICAgIFNvdXJjZUNpZHI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc291cmNlQ2lkciksXG4gICAgICBTb3VyY2VQb3J0UmFuZ2U6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc291cmNlUG9ydFJhbmdlKSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIFByaW9yaXR5OiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByaW9yaXR5KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpTQUc6OkFDTFJ1bGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBQ0xSdWxlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpTQUc6OkFDTFJ1bGVcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBY3JJZDogQWNjZXNzIGNvbnRyb2wgcnVsZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY2xJZDogQWNjZXNzIGNvbnRyb2wgSUQuXG4gICAgICovXG4gICAgcHVibGljIGFjbElkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzdENpZHI6IERlc3RpbmF0aW9uIGFkZHJlc3MsIENJRFIgZm9ybWF0IGFuZCBJUCBhZGRyZXNzIHJhbmdlIGluIElQdjQgZm9ybWF0LlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXN0Q2lkcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc3RQb3J0UmFuZ2U6IERlc3RpbmF0aW9uIHBvcnQgcmFuZ2UsIDgwLzgwLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXN0UG9ydFJhbmdlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGlyZWN0aW9uOiBSZWd1bGFyIGRpcmVjdGlvbi5cbiAgICAgKiBWYWx1ZTogaW58b3V0XG4gICAgICovXG4gICAgcHVibGljIGRpcmVjdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlwUHJvdG9jb2w6IFByb3RvY29sLCBub3QgY2FzZSBzZW5zaXRpdmUuXG4gICAgICovXG4gICAgcHVibGljIGlwUHJvdG9jb2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY3k6IEFjY2VzczogYWNjZXB0fGRyb3BcbiAgICAgKi9cbiAgICBwdWJsaWMgcG9saWN5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlQ2lkcjogU291cmNlIGFkZHJlc3MsIENJRFIgZm9ybWF0IGFuZCBJUCBhZGRyZXNzIHJhbmdlIGluIElQdjQgZm9ybWF0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzb3VyY2VDaWRyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc291cmNlUG9ydFJhbmdlOiBTb3VyY2UgcG9ydCByYW5nZSwgODAvODAuXG4gICAgICovXG4gICAgcHVibGljIHNvdXJjZVBvcnRSYW5nZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBSdWxlIGRlc2NyaXB0aW9uIGluZm9ybWF0aW9uLCByYW5naW5nIGZyb20gMSB0byA1MTIgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmlvcml0eTogUHJpb3JpdHksIHJhbmdpbmcgZnJvbSAxIHRvIDEwMC5cbiAgICAgKiBEZWZhdWx0OiAxXG4gICAgICovXG4gICAgcHVibGljIHByaW9yaXR5OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0FHOjpBQ0xSdWxlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBQ0xSdWxlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NBQ0xSdWxlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBY3JJZCA9IHRoaXMuZ2V0QXR0KCdBY3JJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hY2xJZCA9IHByb3BzLmFjbElkO1xuICAgICAgICB0aGlzLmRlc3RDaWRyID0gcHJvcHMuZGVzdENpZHI7XG4gICAgICAgIHRoaXMuZGVzdFBvcnRSYW5nZSA9IHByb3BzLmRlc3RQb3J0UmFuZ2U7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmlwUHJvdG9jb2wgPSBwcm9wcy5pcFByb3RvY29sO1xuICAgICAgICB0aGlzLnBvbGljeSA9IHByb3BzLnBvbGljeTtcbiAgICAgICAgdGhpcy5zb3VyY2VDaWRyID0gcHJvcHMuc291cmNlQ2lkcjtcbiAgICAgICAgdGhpcy5zb3VyY2VQb3J0UmFuZ2UgPSBwcm9wcy5zb3VyY2VQb3J0UmFuZ2U7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByb3BzLnByaW9yaXR5O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjbElkOiB0aGlzLmFjbElkLFxuICAgICAgICAgICAgZGVzdENpZHI6IHRoaXMuZGVzdENpZHIsXG4gICAgICAgICAgICBkZXN0UG9ydFJhbmdlOiB0aGlzLmRlc3RQb3J0UmFuZ2UsXG4gICAgICAgICAgICBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uLFxuICAgICAgICAgICAgaXBQcm90b2NvbDogdGhpcy5pcFByb3RvY29sLFxuICAgICAgICAgICAgcG9saWN5OiB0aGlzLnBvbGljeSxcbiAgICAgICAgICAgIHNvdXJjZUNpZHI6IHRoaXMuc291cmNlQ2lkcixcbiAgICAgICAgICAgIHNvdXJjZVBvcnRSYW5nZTogdGhpcy5zb3VyY2VQb3J0UmFuZ2UsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBQ0xSdWxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTQUc6OkNsb3VkQ29ubmVjdE5ldHdvcmtgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ2xvdWRDb25uZWN0TmV0d29ya1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBDQ04gaW5zdGFuY2UuXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIGNhbiBjb250YWluIDIgdG8gMjU2IGNoYXJhY3RlcnMuIFRoZSBkZXNjcmlwdGlvbiBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzRGVmYXVsdDogV2hldGhlciBpcyBjcmVhdGVkIGJ5IHN5c3RlbVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzRGVmYXVsdD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIENDTiBpbnN0YW5jZS5cbiAgICAgKiBUaGUgbmFtZSBjYW4gY29udGFpbiAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluY2x1ZGluZyBhLXosIEEtWiwgMC05LCBjaGluZXNlLCB1bmRlcmxpbmVzLCBhbmQgaHlwaGVucy4gVGhlIG5hbWUgbXVzdCBzdGFydCB3aXRoIGFuIEVuZ2xpc2ggbGV0dGVyLCBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0Nsb3VkQ29ubmVjdE5ldHdvcmsuVGFnc1Byb3BlcnR5W107XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ2xvdWRDb25uZWN0TmV0d29ya1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDbG91ZENvbm5lY3ROZXR3b3JrUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2xvdWRDb25uZWN0TmV0d29ya1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaXNEZWZhdWx0Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5pc0RlZmF1bHQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgaWYocHJvcGVydGllcy50YWdzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMudGFncykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRhZ3MpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zQ2xvdWRDb25uZWN0TmV0d29ya19UYWdzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhZ3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDbG91ZENvbm5lY3ROZXR3b3JrUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNBRzo6Q2xvdWRDb25uZWN0TmV0d29ya2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2xvdWRDb25uZWN0TmV0d29ya1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTQUc6OkNsb3VkQ29ubmVjdE5ldHdvcmtgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ2xvdWRDb25uZWN0TmV0d29ya1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ2xvdWRDb25uZWN0TmV0d29ya1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIElzRGVmYXVsdDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaXNEZWZhdWx0KSxcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgICBUYWdzOiByb3MubGlzdE1hcHBlcihyb3NDbG91ZENvbm5lY3ROZXR3b3JrVGFnc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YWdzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpTQUc6OkNsb3VkQ29ubmVjdE5ldHdvcmtgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDbG91ZENvbm5lY3ROZXR3b3JrIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpTQUc6OkNsb3VkQ29ubmVjdE5ldHdvcmtcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDY25JZDogVGhlIElEIG9mIHRoZSBDQ04gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDY25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgQ0NOIGluc3RhbmNlLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBjYW4gY29udGFpbiAyIHRvIDI1NiBjaGFyYWN0ZXJzLiBUaGUgZGVzY3JpcHRpb24gY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc0RlZmF1bHQ6IFdoZXRoZXIgaXMgY3JlYXRlZCBieSBzeXN0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNEZWZhdWx0OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBDQ04gaW5zdGFuY2UuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gMiB0byAxMjggY2hhcmFjdGVycyBpbmNsdWRpbmcgYS16LCBBLVosIDAtOSwgY2hpbmVzZSwgdW5kZXJsaW5lcywgYW5kIGh5cGhlbnMuIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhbiBFbmdsaXNoIGxldHRlciwgYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdzOiBSb3NDbG91ZENvbm5lY3ROZXR3b3JrLlRhZ3NQcm9wZXJ0eVtdIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNBRzo6Q2xvdWRDb25uZWN0TmV0d29ya2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ2xvdWRDb25uZWN0TmV0d29ya1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ2xvdWRDb25uZWN0TmV0d29yay5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ2NuSWQgPSB0aGlzLmdldEF0dCgnQ2NuSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pc0RlZmF1bHQgPSBwcm9wcy5pc0RlZmF1bHQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgICAgIHRoaXMudGFncyA9IHByb3BzLnRhZ3M7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpc0RlZmF1bHQ6IHRoaXMuaXNEZWZhdWx0LFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgdGFnczogdGhpcy50YWdzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDbG91ZENvbm5lY3ROZXR3b3JrUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ2xvdWRDb25uZWN0TmV0d29yayB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGFnc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB2YWx1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBrZXk6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkga2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBUYWdzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDbG91ZENvbm5lY3ROZXR3b3JrX1RhZ3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3ZhbHVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdrZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMua2V5KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlRhZ3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpDbG91ZENvbm5lY3ROZXR3b3JrLlRhZ3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhZ3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpDbG91ZENvbm5lY3ROZXR3b3JrLlRhZ3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ2xvdWRDb25uZWN0TmV0d29ya1RhZ3NQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ2xvdWRDb25uZWN0TmV0d29ya19UYWdzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBWYWx1ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy52YWx1ZSksXG4gICAgICBLZXk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMua2V5KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6U0FHOjpHcmFudENjblRvQ2VuYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0dyYW50Q2NuVG9DZW5Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2NuSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBDQ04gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2NuSW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlbkluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgQ0VOIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNlbkluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZW5VaWQ6IFRoZSBJRCBvZiB0aGUgYWNjb3VudCB0byB3aGljaCB0aGUgQ0VOIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuVWlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zR3JhbnRDY25Ub0NlblByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NHcmFudENjblRvQ2VuUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zR3JhbnRDY25Ub0NlblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VuVWlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlblVpZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VuVWlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNlblVpZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2NuSW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jY25JbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjY25JbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNjbkluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Nlbkluc3RhbmNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2VuSW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VuSW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZW5JbnN0YW5jZUlkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0dyYW50Q2NuVG9DZW5Qcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpHcmFudENjblRvQ2VuYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NHcmFudENjblRvQ2VuUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNBRzo6R3JhbnRDY25Ub0NlbmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NHcmFudENjblRvQ2VuUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NHcmFudENjblRvQ2VuUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ2NuSW5zdGFuY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jY25JbnN0YW5jZUlkKSxcbiAgICAgIENlbkluc3RhbmNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VuSW5zdGFuY2VJZCksXG4gICAgICBDZW5VaWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VuVWlkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpTQUc6OkdyYW50Q2NuVG9DZW5gXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NHcmFudENjblRvQ2VuIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpTQUc6OkdyYW50Q2NuVG9DZW5cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDY25JbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIENDTiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNjbkluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ2VuSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDZW5JbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjY25JbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIENDTiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2NuSW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlbkluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgQ0VOIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBjZW5JbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuVWlkOiBUaGUgSUQgb2YgdGhlIGFjY291bnQgdG8gd2hpY2ggdGhlIENFTiBpbnN0YW5jZSBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyBjZW5VaWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTQUc6OkdyYW50Q2NuVG9DZW5gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0dyYW50Q2NuVG9DZW5Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0dyYW50Q2NuVG9DZW4uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNjbkluc3RhbmNlSWQgPSB0aGlzLmdldEF0dCgnQ2NuSW5zdGFuY2VJZCcpO1xuICAgICAgICB0aGlzLmF0dHJDZW5JbnN0YW5jZUlkID0gdGhpcy5nZXRBdHQoJ0Nlbkluc3RhbmNlSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY2NuSW5zdGFuY2VJZCA9IHByb3BzLmNjbkluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuY2VuSW5zdGFuY2VJZCA9IHByb3BzLmNlbkluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuY2VuVWlkID0gcHJvcHMuY2VuVWlkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNjbkluc3RhbmNlSWQ6IHRoaXMuY2NuSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGNlbkluc3RhbmNlSWQ6IHRoaXMuY2VuSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGNlblVpZDogdGhpcy5jZW5VaWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0dyYW50Q2NuVG9DZW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNBRzo6U2VyaWFsTnVtYmVyQmluZGluZ2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTZXJpYWxOdW1iZXJCaW5kaW5nUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcmlhbE51bWJlcjogVGhlIHNlcmlhbCBudW1iZXIgKFNOKSBvZiB0aGUgU0FHIGRldmljZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJpYWxOdW1iZXI6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzbWFydEFnSWQ6IFRoZSBJRCBvZiB0aGUgU0FHIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNtYXJ0QWdJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1NlcmlhbE51bWJlckJpbmRpbmdQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2VyaWFsTnVtYmVyQmluZGluZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NlcmlhbE51bWJlckJpbmRpbmdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcmlhbE51bWJlcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zZXJpYWxOdW1iZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcmlhbE51bWJlcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZXJpYWxOdW1iZXIpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NtYXJ0QWdJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zbWFydEFnSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NtYXJ0QWdJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zbWFydEFnSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zU2VyaWFsTnVtYmVyQmluZGluZ1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTQUc6OlNlcmlhbE51bWJlckJpbmRpbmdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NlcmlhbE51bWJlckJpbmRpbmdQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpTZXJpYWxOdW1iZXJCaW5kaW5nYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NlcmlhbE51bWJlckJpbmRpbmdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NlcmlhbE51bWJlckJpbmRpbmdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBTZXJpYWxOdW1iZXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VyaWFsTnVtYmVyKSxcbiAgICAgIFNtYXJ0QUdJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zbWFydEFnSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlNBRzo6U2VyaWFsTnVtYmVyQmluZGluZ2BcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NlcmlhbE51bWJlckJpbmRpbmcgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlNBRzo6U2VyaWFsTnVtYmVyQmluZGluZ1wiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNtYXJ0QUdJZDogVGhlIElEIG9mIHRoZSBTQUcgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTbWFydEFnSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNlcmlhbE51bWJlcjogVGhlIHNlcmlhbCBudW1iZXIgKFNOKSBvZiB0aGUgU0FHIGRldmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2VyaWFsTnVtYmVyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc21hcnRBZ0lkOiBUaGUgSUQgb2YgdGhlIFNBRyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc21hcnRBZ0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0FHOjpTZXJpYWxOdW1iZXJCaW5kaW5nYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTZXJpYWxOdW1iZXJCaW5kaW5nUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTZXJpYWxOdW1iZXJCaW5kaW5nLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJTbWFydEFnSWQgPSB0aGlzLmdldEF0dCgnU21hcnRBR0lkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnNlcmlhbE51bWJlciA9IHByb3BzLnNlcmlhbE51bWJlcjtcbiAgICAgICAgdGhpcy5zbWFydEFnSWQgPSBwcm9wcy5zbWFydEFnSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VyaWFsTnVtYmVyOiB0aGlzLnNlcmlhbE51bWJlcixcbiAgICAgICAgICAgIHNtYXJ0QWdJZDogdGhpcy5zbWFydEFnSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1NlcmlhbE51bWJlckJpbmRpbmdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNBRzo6U21hcnRBY2Nlc3NHYXRld2F5YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc1NtYXJ0QWNjZXNzR2F0ZXdheVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidXllck1lc3NhZ2U6IFRoZSByZW1hcmtzIGxlZnQgYnkgdGhlIGJ1eWVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJ1eWVyTWVzc2FnZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZCBvZiB0aGUgU0FHIGluc3RhbmNlLiBcbiAgICAgKiBTZXQgdGhlIHZhbHVlIHRvIFBSRVBBWSwgd2hpY2ggc3BlY2lmaWVzIHRoZSBzdWJzY3JpcHRpb24gYmlsbGluZyBtZXRob2QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hhcmdlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGhhcmRXYXJlU3BlYzogVGhlIHR5cGUgb2YgdGhlIFNBRyBpbnN0YW5jZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHNhZy0xMDB3bVxuICAgICAqIHNhZy0xMDAwXG4gICAgICogc2FnLXZjcGVcbiAgICAgKi9cbiAgICByZWFkb25seSBoYXJkV2FyZVNwZWM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBoYVR5cGU6IFRoZSBkZXBsb3ltZW50IG1vZGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBub19iYWNrdXA6IFlvdSBidXkgb25seSBvbmUgU0FHIGRldmljZSB0byBjb25uZWN0IHByaXZhdGUgbmV0d29ya3MgdG8gQWxpYmFiYSBDbG91ZC5cbiAgICAgKiBjb2xkX2JhY2t1cDogWW91IGJ1eSB0d28gU0FHIGRldmljZXMgaW4gYWN0aXZlLXN0YW5kYnkgbW9kZS4gT25lIFNBRyBkZXZpY2Ugc2VydmVzIGFzIGFuIGFjdGl2ZVxuICAgICAqIGRldmljZSBhbmQgdGhlIG90aGVyIHNlcnZlcyBhcyBhIHN0YW5kYnkgZGV2aWNlLiBPbmx5IHRoZSBhY3RpdmUgZGV2aWNlIGlzIGNvbm5lY3RlZFxuICAgICAqIHRvIEFsaWJhYmEgQ2xvdWQuIElmIHRoZSBhY3RpdmUgZGV2aWNlIGlzIG5vdCB3b3JraW5nIGFzIGV4cGVjdGVkLCB5b3UgbXVzdCBtYW51YWxseVxuICAgICAqIHBlcmZvcm0gYSBzd2l0Y2hvdmVyLlxuICAgICAqIHdhcm1fYmFja3VwOiBZb3UgYnV5IHR3byBTQUcgZGV2aWNlcyBpbiBhY3RpdmUtYWN0aXZlIG1vZGUuIEJvdGggU0FHIGRldmljZXMgYXJlIGNvbm5lY3RlZCB0b1xuICAgICAqIEFsaWJhYmEgQ2xvdWQuIElmIGFuIGFjdGl2ZSBkZXZpY2UgaXMgbm90IHdvcmtpbmcgYXMgZXhwZWN0ZWQsIGEgZmFpbG92ZXIgaXMgYXV0b21hdGljYWxseVxuICAgICAqIHBlcmZvcm1lZC5cbiAgICAgKiBOb3RlIElmIHlvdSB3YW50IHRvIGNyZWF0ZSBhbiBTQUcgdkNQRSBpbnN0YW5jZSwgc2V0IHRoZSB2YWx1ZSB0byB3YXJtX2JhY2t1cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBoYVR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXhCYW5kV2lkdGg6IFRoZSBiYW5kd2lkdGggb2YgdGhlIFNBRyBpbnN0YW5jZS5cbiAgICAgKiBJZiB5b3Ugd2FudCB0byBjcmVhdGUgYW4gU0FHIENQRSBpbnN0YW5jZSBhbmQgdGhlIG1vZGVsIGlzIHNhZy0xMDB3bSwgdmFsaWQgdmFsdWVzIG9mIHRoaXMgcGFyYW1ldGVyIGFyZSAyIHRvIDUwLiBVbml0OiBNYml0L3MuXG4gICAgICogSWYgeW91IHdhbnQgdG8gY3JlYXRlIGFuIFNBRyBDUEUgaW5zdGFuY2UgYW5kIHRoZSBtb2RlbCBpcyBzYWctMTAwMCwgdmFsaWQgdmFsdWVzIG9mIHRoaXMgcGFyYW1ldGVyIGFyZSAxMCB0byA1MDAuIFVuaXQ6IE1iaXQvcy5cbiAgICAgKiBJZiB5b3Ugd2FudCB0byBjcmVhdGUgYW4gU0FHIHZDUEUgaW5zdGFuY2UsIHZhbGlkIHZhbHVlcyBvZiB0aGlzIHBhcmFtZXRlciBhcmUgMTAgdG8gMTAwMC4gVW5pdDogTWJpdC9zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1heEJhbmRXaWR0aDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcmlvZDogVGhlIHN1YnNjcmlwdGlvbiBwZXJpb2Qgb2YgdGhlIFNBRyBpbnN0YW5jZS4gVW5pdDogbW9udGhzLlxuICAgICAqIFZhbGlkIHZhbHVlczogMSB0byA5LCAxMiwgMjQsIGFuZCAzNi5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWNlaXZlckFkZHJlc3M6IFRoZSBkZXRhaWxlZCBhZGRyZXNzIG9mIHRoZSByZWNpcGllbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVjZWl2ZXJBZGRyZXNzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVjZWl2ZXJDaXR5OiBUaGUgY2l0eSBvZiB0aGUgcmVjaXBpZW50IGFkZHJlc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVjZWl2ZXJDaXR5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVjZWl2ZXJDb3VudHJ5OiBUaGUgY291bnRyeSBvZiB0aGUgcmVjaXBpZW50IGFkZHJlc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVjZWl2ZXJDb3VudHJ5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVjZWl2ZXJEaXN0cmljdDogVGhlIGRpc3RyaWN0IG9mIHRoZSByZWNpcGllbnQgYWRkcmVzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWNlaXZlckRpc3RyaWN0OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVjZWl2ZXJFbWFpbDogVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHJlY2lwaWVudC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWNlaXZlckVtYWlsOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVjZWl2ZXJNb2JpbGU6IFRoZSBtb2JpbGUgcGhvbmUgbnVtYmVyIG9mIHRoZSByZWNpcGllbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVjZWl2ZXJNb2JpbGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWNlaXZlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSByZWNpcGllbnQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVjZWl2ZXJOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVjZWl2ZXJTdGF0ZTogVGhlIHByb3ZpbmNlIG9mIHRoZSByZWNpcGllbnQgYWRkcmVzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWNlaXZlclN0YXRlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVjZWl2ZXJUb3duOiBUaGUgdG93biBvZiB0aGUgcmVjaXBpZW50IGFkZHJlc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVjZWl2ZXJUb3duOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVjZWl2ZXJaaXA6IFRoZSBwb3N0Y29kZSBvZiB0aGUgcmVjaXBpZW50IGFkZHJlc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVjZWl2ZXJaaXA6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhY3RpdmF0ZTogQWN0aXZhdGUgU0FHIG9yIG5vdC4gRGVmYXVsdCBpcyBGYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjdGl2YXRlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbHJlYWR5SGF2ZVNhZzogU3BlY2lmaWVzIHdoZXRoZXIgeW91IGFscmVhZHkgaGF2ZSBhbiBTQUcgZGV2aWNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZTogeWVzXG4gICAgICogZmFsc2UgKGRlZmF1bHQpOiBub1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGFscmVhZHlIYXZlU2FnPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvUGF5OiBTcGVjaWZpZXMgd2hldGhlciB0byBlbmFibGUgYXV0by1wYXltZW50IGZvciB0aGUgaW5zdGFuY2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiB5ZXNcbiAgICAgKiBmYWxzZTogbm9cbiAgICAgKiBJZiB5b3Ugc2V0IHRoZSBwYXJhbWV0ZXIgdG8gZmFsc2UsIGdvIHRvIEJpbGxpbmcgTWFuYWdlbWVudCB0byBjb21wbGV0ZSB0aGUgcGF5bWVudFxuICAgICAqIGFmdGVyIHlvdSBjYWxsIHRoaXMgb3BlcmF0aW9uLiBBZnRlciB5b3UgY29tcGxldGUgdGhlIHBheW1lbnQsIHRoZSBpbnN0YW5jZSBjYW4gYmVcbiAgICAgKiBjcmVhdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9QYXk/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNpZHJCbG9jazogVGhlIENJRFIgYmxvY2tzIG9mIHRlcm1pbmFscyBpbiB0aGUgcHJpdmF0ZSBuZXR3b3JrLiBNYWtlIHN1cmUgdGhhdCB0aGUgQ0lEUiBibG9ja3NcbiAgICAgKiBkbyBub3Qgb3ZlcmxhcCB3aXRoIGVhY2ggb3RoZXIuXG4gICAgICogSWYgdGhlIExBTiBwb3J0IG9mIHRoZSBTQUcgZGV2aWNlIGR5bmFtaWNhbGx5IGFzc2lnbnMgSVAgYWRkcmVzc2VzLCBJUCBhZGRyZXNzZXMgd2l0aGluXG4gICAgICogdGhlIGZpcnN0IENJRFIgYmxvY2sgYXJlIGFzc2lnbmVkIHRvIHRlcm1pbmFscyB0aGF0IGhhdmUgdGhlIER5bmFtaWMgSG9zdCBDb25maWd1cmF0aW9uXG4gICAgICogUHJvdG9jb2wgKERIQ1ApIGVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2lkckJsb2NrPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIFNBRyBpbnN0YW5jZS5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAyIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aCwgYW5kIGNhbiBjb250YWluIGRpZ2l0cywgcGVyaW9kc1xuICAgICAqICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgU0FHIGluc3RhbmNlLlxuICAgICAqIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGggYW5kIGNhbiBjb250YWluIGRpZ2l0cywgcGVyaW9kcyAoLiksXG4gICAgICogdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlY2VpdmVyUGhvbmU6IFRoZSBsYW5kbGluZSBwaG9uZSBudW1iZXIgb2YgdGhlIHJlY2lwaWVudC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWNlaXZlclBob25lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJvdXRpbmdTdHJhdGVneTogVGhlIHBvbGljeSB0byBhZHZlcnRpc2Ugcm91dGVzIGZyb20gdGhlIHByaXZhdGUgbmV0d29yayB0byBBbGliYWJhIENsb3VkLlxuICAgICAqIHN0YXRpYzogc3RhdGljIHJvdXRpbmcuXG4gICAgICogZHluYW1pYzogZHluYW1pYyByb3V0aW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJvdXRpbmdTdHJhdGVneT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzZWN1cml0eUxvY2tUaHJlc2hvbGQ6IFRoZSB0aW1lIHRoYXQgYSBkaXNjb25uZWN0ZWQgU0FHIGRldmljZSByZW1haW4gbG9ja2VkLiBUaGUgdGltZSBtdXN0IGJlIG5vIHNob3J0ZXJcbiAgICAgKiB0aGFuIHplcm8gc2Vjb25kLlxuICAgICAqIFVuaXQ6IHNlY29uZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWN1cml0eUxvY2tUaHJlc2hvbGQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zU21hcnRBY2Nlc3NHYXRld2F5UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NtYXJ0QWNjZXNzR2F0ZXdheVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NtYXJ0QWNjZXNzR2F0ZXdheVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVjZWl2ZXJDb3VudHJ5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlY2VpdmVyQ291bnRyeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVjZWl2ZXJDb3VudHJ5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlY2VpdmVyQ291bnRyeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlY2VpdmVyWmlwJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlY2VpdmVyWmlwKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWNlaXZlclppcCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWNlaXZlclppcCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnV5ZXJNZXNzYWdlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmJ1eWVyTWVzc2FnZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYnV5ZXJNZXNzYWdlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJ1eWVyTWVzc2FnZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2lkckJsb2NrJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNpZHJCbG9jaykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVjZWl2ZXJUb3duJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlY2VpdmVyVG93bikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVjZWl2ZXJUb3duJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlY2VpdmVyVG93bikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGFyZFdhcmVTcGVjJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmhhcmRXYXJlU3BlYykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGFyZFdhcmVTcGVjJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmhhcmRXYXJlU3BlYykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWNlaXZlclBob25lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlY2VpdmVyUGhvbmUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlY2VpdmVyQ2l0eScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZWNlaXZlckNpdHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlY2VpdmVyQ2l0eScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWNlaXZlckNpdHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JvdXRpbmdTdHJhdGVneScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yb3V0aW5nU3RyYXRlZ3kpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlY3VyaXR5TG9ja1RocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5zZWN1cml0eUxvY2tUaHJlc2hvbGQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlY2VpdmVyQWRkcmVzcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZWNlaXZlckFkZHJlc3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlY2VpdmVyQWRkcmVzcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWNlaXZlckFkZHJlc3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FscmVhZHlIYXZlU2FnJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5hbHJlYWR5SGF2ZVNhZykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaGFUeXBlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmhhVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuaGFUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5oYVR5cGUpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hhVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmhhVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJjb2xkX2JhY2t1cFwiLFwibm9fYmFja3VwXCIsXCJ3YXJtX2JhY2t1cFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2hhVHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5oYVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5wZXJpb2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wZXJpb2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heEJhbmRXaWR0aCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tYXhCYW5kV2lkdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21heEJhbmRXaWR0aCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5tYXhCYW5kV2lkdGgpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2F1dG9QYXknLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmF1dG9QYXkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlY2VpdmVyTW9iaWxlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlY2VpdmVyTW9iaWxlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWNlaXZlck1vYmlsZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWNlaXZlck1vYmlsZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVjZWl2ZXJEaXN0cmljdCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZWNlaXZlckRpc3RyaWN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWNlaXZlckRpc3RyaWN0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlY2VpdmVyRGlzdHJpY3QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjdGl2YXRlJywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5hY3RpdmF0ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hhcmdlVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jaGFyZ2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjaGFyZ2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNoYXJnZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlY2VpdmVyU3RhdGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVjZWl2ZXJTdGF0ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVjZWl2ZXJTdGF0ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWNlaXZlclN0YXRlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWNlaXZlck5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucmVjZWl2ZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWNlaXZlck5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVjZWl2ZXJOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWNlaXZlckVtYWlsJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlY2VpdmVyRW1haWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlY2VpdmVyRW1haWwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVjZWl2ZXJFbWFpbCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NTbWFydEFjY2Vzc0dhdGV3YXlQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpTbWFydEFjY2Vzc0dhdGV3YXlgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NtYXJ0QWNjZXNzR2F0ZXdheVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTQUc6OlNtYXJ0QWNjZXNzR2F0ZXdheWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTbWFydEFjY2Vzc0dhdGV3YXlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NtYXJ0QWNjZXNzR2F0ZXdheVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEJ1eWVyTWVzc2FnZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5idXllck1lc3NhZ2UpLFxuICAgICAgQ2hhcmdlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jaGFyZ2VUeXBlKSxcbiAgICAgIEhhcmRXYXJlU3BlYzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5oYXJkV2FyZVNwZWMpLFxuICAgICAgSGFUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmhhVHlwZSksXG4gICAgICBNYXhCYW5kV2lkdGg6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF4QmFuZFdpZHRoKSxcbiAgICAgIFBlcmlvZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wZXJpb2QpLFxuICAgICAgUmVjZWl2ZXJBZGRyZXNzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlY2VpdmVyQWRkcmVzcyksXG4gICAgICBSZWNlaXZlckNpdHk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVjZWl2ZXJDaXR5KSxcbiAgICAgIFJlY2VpdmVyQ291bnRyeTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWNlaXZlckNvdW50cnkpLFxuICAgICAgUmVjZWl2ZXJEaXN0cmljdDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWNlaXZlckRpc3RyaWN0KSxcbiAgICAgIFJlY2VpdmVyRW1haWw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVjZWl2ZXJFbWFpbCksXG4gICAgICBSZWNlaXZlck1vYmlsZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWNlaXZlck1vYmlsZSksXG4gICAgICBSZWNlaXZlck5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVjZWl2ZXJOYW1lKSxcbiAgICAgIFJlY2VpdmVyU3RhdGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVjZWl2ZXJTdGF0ZSksXG4gICAgICBSZWNlaXZlclRvd246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVjZWl2ZXJUb3duKSxcbiAgICAgIFJlY2VpdmVyWmlwOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlY2VpdmVyWmlwKSxcbiAgICAgIEFjdGl2YXRlOiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hY3RpdmF0ZSksXG4gICAgICBBbHJlYWR5SGF2ZVNhZzogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWxyZWFkeUhhdmVTYWcpLFxuICAgICAgQXV0b1BheTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXV0b1BheSksXG4gICAgICBDaWRyQmxvY2s6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2lkckJsb2NrKSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgICBSZWNlaXZlclBob25lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlY2VpdmVyUGhvbmUpLFxuICAgICAgUm91dGluZ1N0cmF0ZWd5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJvdXRpbmdTdHJhdGVneSksXG4gICAgICBTZWN1cml0eUxvY2tUaHJlc2hvbGQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2VjdXJpdHlMb2NrVGhyZXNob2xkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpTQUc6OlNtYXJ0QWNjZXNzR2F0ZXdheWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NtYXJ0QWNjZXNzR2F0ZXdheSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6U0FHOjpTbWFydEFjY2Vzc0dhdGV3YXlcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBPcmRlcklkOiBUaGUgSUQgb2YgdGhlIG9yZGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT3JkZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTbWFydEFHSWQ6IFRoZSBJRCBvZiB0aGUgU0FHIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU21hcnRBZ0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBidXllck1lc3NhZ2U6IFRoZSByZW1hcmtzIGxlZnQgYnkgdGhlIGJ1eWVyLlxuICAgICAqL1xuICAgIHB1YmxpYyBidXllck1lc3NhZ2U6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGFyZ2VUeXBlOiBUaGUgYmlsbGluZyBtZXRob2Qgb2YgdGhlIFNBRyBpbnN0YW5jZS4gXG4gICAgICogU2V0IHRoZSB2YWx1ZSB0byBQUkVQQVksIHdoaWNoIHNwZWNpZmllcyB0aGUgc3Vic2NyaXB0aW9uIGJpbGxpbmcgbWV0aG9kLlxuICAgICAqL1xuICAgIHB1YmxpYyBjaGFyZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaGFyZFdhcmVTcGVjOiBUaGUgdHlwZSBvZiB0aGUgU0FHIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogc2FnLTEwMHdtXG4gICAgICogc2FnLTEwMDBcbiAgICAgKiBzYWctdmNwZVxuICAgICAqL1xuICAgIHB1YmxpYyBoYXJkV2FyZVNwZWM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBoYVR5cGU6IFRoZSBkZXBsb3ltZW50IG1vZGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBub19iYWNrdXA6IFlvdSBidXkgb25seSBvbmUgU0FHIGRldmljZSB0byBjb25uZWN0IHByaXZhdGUgbmV0d29ya3MgdG8gQWxpYmFiYSBDbG91ZC5cbiAgICAgKiBjb2xkX2JhY2t1cDogWW91IGJ1eSB0d28gU0FHIGRldmljZXMgaW4gYWN0aXZlLXN0YW5kYnkgbW9kZS4gT25lIFNBRyBkZXZpY2Ugc2VydmVzIGFzIGFuIGFjdGl2ZVxuICAgICAqIGRldmljZSBhbmQgdGhlIG90aGVyIHNlcnZlcyBhcyBhIHN0YW5kYnkgZGV2aWNlLiBPbmx5IHRoZSBhY3RpdmUgZGV2aWNlIGlzIGNvbm5lY3RlZFxuICAgICAqIHRvIEFsaWJhYmEgQ2xvdWQuIElmIHRoZSBhY3RpdmUgZGV2aWNlIGlzIG5vdCB3b3JraW5nIGFzIGV4cGVjdGVkLCB5b3UgbXVzdCBtYW51YWxseVxuICAgICAqIHBlcmZvcm0gYSBzd2l0Y2hvdmVyLlxuICAgICAqIHdhcm1fYmFja3VwOiBZb3UgYnV5IHR3byBTQUcgZGV2aWNlcyBpbiBhY3RpdmUtYWN0aXZlIG1vZGUuIEJvdGggU0FHIGRldmljZXMgYXJlIGNvbm5lY3RlZCB0b1xuICAgICAqIEFsaWJhYmEgQ2xvdWQuIElmIGFuIGFjdGl2ZSBkZXZpY2UgaXMgbm90IHdvcmtpbmcgYXMgZXhwZWN0ZWQsIGEgZmFpbG92ZXIgaXMgYXV0b21hdGljYWxseVxuICAgICAqIHBlcmZvcm1lZC5cbiAgICAgKiBOb3RlIElmIHlvdSB3YW50IHRvIGNyZWF0ZSBhbiBTQUcgdkNQRSBpbnN0YW5jZSwgc2V0IHRoZSB2YWx1ZSB0byB3YXJtX2JhY2t1cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaGFUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF4QmFuZFdpZHRoOiBUaGUgYmFuZHdpZHRoIG9mIHRoZSBTQUcgaW5zdGFuY2UuXG4gICAgICogSWYgeW91IHdhbnQgdG8gY3JlYXRlIGFuIFNBRyBDUEUgaW5zdGFuY2UgYW5kIHRoZSBtb2RlbCBpcyBzYWctMTAwd20sIHZhbGlkIHZhbHVlcyBvZiB0aGlzIHBhcmFtZXRlciBhcmUgMiB0byA1MC4gVW5pdDogTWJpdC9zLlxuICAgICAqIElmIHlvdSB3YW50IHRvIGNyZWF0ZSBhbiBTQUcgQ1BFIGluc3RhbmNlIGFuZCB0aGUgbW9kZWwgaXMgc2FnLTEwMDAsIHZhbGlkIHZhbHVlcyBvZiB0aGlzIHBhcmFtZXRlciBhcmUgMTAgdG8gNTAwLiBVbml0OiBNYml0L3MuXG4gICAgICogSWYgeW91IHdhbnQgdG8gY3JlYXRlIGFuIFNBRyB2Q1BFIGluc3RhbmNlLCB2YWxpZCB2YWx1ZXMgb2YgdGhpcyBwYXJhbWV0ZXIgYXJlIDEwIHRvIDEwMDAuIFVuaXQ6IE1iaXQvcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWF4QmFuZFdpZHRoOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBUaGUgc3Vic2NyaXB0aW9uIHBlcmlvZCBvZiB0aGUgU0FHIGluc3RhbmNlLiBVbml0OiBtb250aHMuXG4gICAgICogVmFsaWQgdmFsdWVzOiAxIHRvIDksIDEyLCAyNCwgYW5kIDM2LlxuICAgICAqL1xuICAgIHB1YmxpYyBwZXJpb2Q6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWNlaXZlckFkZHJlc3M6IFRoZSBkZXRhaWxlZCBhZGRyZXNzIG9mIHRoZSByZWNpcGllbnQuXG4gICAgICovXG4gICAgcHVibGljIHJlY2VpdmVyQWRkcmVzczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlY2VpdmVyQ2l0eTogVGhlIGNpdHkgb2YgdGhlIHJlY2lwaWVudCBhZGRyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWNlaXZlckNpdHk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWNlaXZlckNvdW50cnk6IFRoZSBjb3VudHJ5IG9mIHRoZSByZWNpcGllbnQgYWRkcmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVjZWl2ZXJDb3VudHJ5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVjZWl2ZXJEaXN0cmljdDogVGhlIGRpc3RyaWN0IG9mIHRoZSByZWNpcGllbnQgYWRkcmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVjZWl2ZXJEaXN0cmljdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlY2VpdmVyRW1haWw6IFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSByZWNpcGllbnQuXG4gICAgICovXG4gICAgcHVibGljIHJlY2VpdmVyRW1haWw6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWNlaXZlck1vYmlsZTogVGhlIG1vYmlsZSBwaG9uZSBudW1iZXIgb2YgdGhlIHJlY2lwaWVudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVjZWl2ZXJNb2JpbGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWNlaXZlck5hbWU6IFRoZSBuYW1lIG9mIHRoZSByZWNpcGllbnQuXG4gICAgICovXG4gICAgcHVibGljIHJlY2VpdmVyTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlY2VpdmVyU3RhdGU6IFRoZSBwcm92aW5jZSBvZiB0aGUgcmVjaXBpZW50IGFkZHJlc3MuXG4gICAgICovXG4gICAgcHVibGljIHJlY2VpdmVyU3RhdGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWNlaXZlclRvd246IFRoZSB0b3duIG9mIHRoZSByZWNpcGllbnQgYWRkcmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVjZWl2ZXJUb3duOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVjZWl2ZXJaaXA6IFRoZSBwb3N0Y29kZSBvZiB0aGUgcmVjaXBpZW50IGFkZHJlc3MuXG4gICAgICovXG4gICAgcHVibGljIHJlY2VpdmVyWmlwOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWN0aXZhdGU6IEFjdGl2YXRlIFNBRyBvciBub3QuIERlZmF1bHQgaXMgRmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgYWN0aXZhdGU6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWxyZWFkeUhhdmVTYWc6IFNwZWNpZmllcyB3aGV0aGVyIHlvdSBhbHJlYWR5IGhhdmUgYW4gU0FHIGRldmljZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIHRydWU6IHllc1xuICAgICAqIGZhbHNlIChkZWZhdWx0KTogbm9cbiAgICAgKi9cbiAgICBwdWJsaWMgYWxyZWFkeUhhdmVTYWc6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXV0b1BheTogU3BlY2lmaWVzIHdoZXRoZXIgdG8gZW5hYmxlIGF1dG8tcGF5bWVudCBmb3IgdGhlIGluc3RhbmNlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogdHJ1ZTogeWVzXG4gICAgICogZmFsc2U6IG5vXG4gICAgICogSWYgeW91IHNldCB0aGUgcGFyYW1ldGVyIHRvIGZhbHNlLCBnbyB0byBCaWxsaW5nIE1hbmFnZW1lbnQgdG8gY29tcGxldGUgdGhlIHBheW1lbnRcbiAgICAgKiBhZnRlciB5b3UgY2FsbCB0aGlzIG9wZXJhdGlvbi4gQWZ0ZXIgeW91IGNvbXBsZXRlIHRoZSBwYXltZW50LCB0aGUgaW5zdGFuY2UgY2FuIGJlXG4gICAgICogY3JlYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXV0b1BheTogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaWRyQmxvY2s6IFRoZSBDSURSIGJsb2NrcyBvZiB0ZXJtaW5hbHMgaW4gdGhlIHByaXZhdGUgbmV0d29yay4gTWFrZSBzdXJlIHRoYXQgdGhlIENJRFIgYmxvY2tzXG4gICAgICogZG8gbm90IG92ZXJsYXAgd2l0aCBlYWNoIG90aGVyLlxuICAgICAqIElmIHRoZSBMQU4gcG9ydCBvZiB0aGUgU0FHIGRldmljZSBkeW5hbWljYWxseSBhc3NpZ25zIElQIGFkZHJlc3NlcywgSVAgYWRkcmVzc2VzIHdpdGhpblxuICAgICAqIHRoZSBmaXJzdCBDSURSIGJsb2NrIGFyZSBhc3NpZ25lZCB0byB0ZXJtaW5hbHMgdGhhdCBoYXZlIHRoZSBEeW5hbWljIEhvc3QgQ29uZmlndXJhdGlvblxuICAgICAqIFByb3RvY29sIChESENQKSBlbmFibGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBjaWRyQmxvY2s6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBTQUcgaW5zdGFuY2UuXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGgsIGFuZCBjYW4gY29udGFpbiBkaWdpdHMsIHBlcmlvZHNcbiAgICAgKiAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIFNBRyBpbnN0YW5jZS5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW4gY29udGFpbiBkaWdpdHMsIHBlcmlvZHMgKC4pLFxuICAgICAqIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWNlaXZlclBob25lOiBUaGUgbGFuZGxpbmUgcGhvbmUgbnVtYmVyIG9mIHRoZSByZWNpcGllbnQuXG4gICAgICovXG4gICAgcHVibGljIHJlY2VpdmVyUGhvbmU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByb3V0aW5nU3RyYXRlZ3k6IFRoZSBwb2xpY3kgdG8gYWR2ZXJ0aXNlIHJvdXRlcyBmcm9tIHRoZSBwcml2YXRlIG5ldHdvcmsgdG8gQWxpYmFiYSBDbG91ZC5cbiAgICAgKiBzdGF0aWM6IHN0YXRpYyByb3V0aW5nLlxuICAgICAqIGR5bmFtaWM6IGR5bmFtaWMgcm91dGluZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcm91dGluZ1N0cmF0ZWd5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2VjdXJpdHlMb2NrVGhyZXNob2xkOiBUaGUgdGltZSB0aGF0IGEgZGlzY29ubmVjdGVkIFNBRyBkZXZpY2UgcmVtYWluIGxvY2tlZC4gVGhlIHRpbWUgbXVzdCBiZSBubyBzaG9ydGVyXG4gICAgICogdGhhbiB6ZXJvIHNlY29uZC5cbiAgICAgKiBVbml0OiBzZWNvbmQuXG4gICAgICovXG4gICAgcHVibGljIHNlY3VyaXR5TG9ja1RocmVzaG9sZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNBRzo6U21hcnRBY2Nlc3NHYXRld2F5YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTbWFydEFjY2Vzc0dhdGV3YXlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1NtYXJ0QWNjZXNzR2F0ZXdheS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyT3JkZXJJZCA9IHRoaXMuZ2V0QXR0KCdPcmRlcklkJyk7XG4gICAgICAgIHRoaXMuYXR0clNtYXJ0QWdJZCA9IHRoaXMuZ2V0QXR0KCdTbWFydEFHSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYnV5ZXJNZXNzYWdlID0gcHJvcHMuYnV5ZXJNZXNzYWdlO1xuICAgICAgICB0aGlzLmNoYXJnZVR5cGUgPSBwcm9wcy5jaGFyZ2VUeXBlO1xuICAgICAgICB0aGlzLmhhcmRXYXJlU3BlYyA9IHByb3BzLmhhcmRXYXJlU3BlYztcbiAgICAgICAgdGhpcy5oYVR5cGUgPSBwcm9wcy5oYVR5cGU7XG4gICAgICAgIHRoaXMubWF4QmFuZFdpZHRoID0gcHJvcHMubWF4QmFuZFdpZHRoO1xuICAgICAgICB0aGlzLnBlcmlvZCA9IHByb3BzLnBlcmlvZDtcbiAgICAgICAgdGhpcy5yZWNlaXZlckFkZHJlc3MgPSBwcm9wcy5yZWNlaXZlckFkZHJlc3M7XG4gICAgICAgIHRoaXMucmVjZWl2ZXJDaXR5ID0gcHJvcHMucmVjZWl2ZXJDaXR5O1xuICAgICAgICB0aGlzLnJlY2VpdmVyQ291bnRyeSA9IHByb3BzLnJlY2VpdmVyQ291bnRyeTtcbiAgICAgICAgdGhpcy5yZWNlaXZlckRpc3RyaWN0ID0gcHJvcHMucmVjZWl2ZXJEaXN0cmljdDtcbiAgICAgICAgdGhpcy5yZWNlaXZlckVtYWlsID0gcHJvcHMucmVjZWl2ZXJFbWFpbDtcbiAgICAgICAgdGhpcy5yZWNlaXZlck1vYmlsZSA9IHByb3BzLnJlY2VpdmVyTW9iaWxlO1xuICAgICAgICB0aGlzLnJlY2VpdmVyTmFtZSA9IHByb3BzLnJlY2VpdmVyTmFtZTtcbiAgICAgICAgdGhpcy5yZWNlaXZlclN0YXRlID0gcHJvcHMucmVjZWl2ZXJTdGF0ZTtcbiAgICAgICAgdGhpcy5yZWNlaXZlclRvd24gPSBwcm9wcy5yZWNlaXZlclRvd247XG4gICAgICAgIHRoaXMucmVjZWl2ZXJaaXAgPSBwcm9wcy5yZWNlaXZlclppcDtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSA9IHByb3BzLmFjdGl2YXRlO1xuICAgICAgICB0aGlzLmFscmVhZHlIYXZlU2FnID0gcHJvcHMuYWxyZWFkeUhhdmVTYWc7XG4gICAgICAgIHRoaXMuYXV0b1BheSA9IHByb3BzLmF1dG9QYXk7XG4gICAgICAgIHRoaXMuY2lkckJsb2NrID0gcHJvcHMuY2lkckJsb2NrO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgICAgIHRoaXMucmVjZWl2ZXJQaG9uZSA9IHByb3BzLnJlY2VpdmVyUGhvbmU7XG4gICAgICAgIHRoaXMucm91dGluZ1N0cmF0ZWd5ID0gcHJvcHMucm91dGluZ1N0cmF0ZWd5O1xuICAgICAgICB0aGlzLnNlY3VyaXR5TG9ja1RocmVzaG9sZCA9IHByb3BzLnNlY3VyaXR5TG9ja1RocmVzaG9sZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBidXllck1lc3NhZ2U6IHRoaXMuYnV5ZXJNZXNzYWdlLFxuICAgICAgICAgICAgY2hhcmdlVHlwZTogdGhpcy5jaGFyZ2VUeXBlLFxuICAgICAgICAgICAgaGFyZFdhcmVTcGVjOiB0aGlzLmhhcmRXYXJlU3BlYyxcbiAgICAgICAgICAgIGhhVHlwZTogdGhpcy5oYVR5cGUsXG4gICAgICAgICAgICBtYXhCYW5kV2lkdGg6IHRoaXMubWF4QmFuZFdpZHRoLFxuICAgICAgICAgICAgcGVyaW9kOiB0aGlzLnBlcmlvZCxcbiAgICAgICAgICAgIHJlY2VpdmVyQWRkcmVzczogdGhpcy5yZWNlaXZlckFkZHJlc3MsXG4gICAgICAgICAgICByZWNlaXZlckNpdHk6IHRoaXMucmVjZWl2ZXJDaXR5LFxuICAgICAgICAgICAgcmVjZWl2ZXJDb3VudHJ5OiB0aGlzLnJlY2VpdmVyQ291bnRyeSxcbiAgICAgICAgICAgIHJlY2VpdmVyRGlzdHJpY3Q6IHRoaXMucmVjZWl2ZXJEaXN0cmljdCxcbiAgICAgICAgICAgIHJlY2VpdmVyRW1haWw6IHRoaXMucmVjZWl2ZXJFbWFpbCxcbiAgICAgICAgICAgIHJlY2VpdmVyTW9iaWxlOiB0aGlzLnJlY2VpdmVyTW9iaWxlLFxuICAgICAgICAgICAgcmVjZWl2ZXJOYW1lOiB0aGlzLnJlY2VpdmVyTmFtZSxcbiAgICAgICAgICAgIHJlY2VpdmVyU3RhdGU6IHRoaXMucmVjZWl2ZXJTdGF0ZSxcbiAgICAgICAgICAgIHJlY2VpdmVyVG93bjogdGhpcy5yZWNlaXZlclRvd24sXG4gICAgICAgICAgICByZWNlaXZlclppcDogdGhpcy5yZWNlaXZlclppcCxcbiAgICAgICAgICAgIGFjdGl2YXRlOiB0aGlzLmFjdGl2YXRlLFxuICAgICAgICAgICAgYWxyZWFkeUhhdmVTYWc6IHRoaXMuYWxyZWFkeUhhdmVTYWcsXG4gICAgICAgICAgICBhdXRvUGF5OiB0aGlzLmF1dG9QYXksXG4gICAgICAgICAgICBjaWRyQmxvY2s6IHRoaXMuY2lkckJsb2NrLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICByZWNlaXZlclBob25lOiB0aGlzLnJlY2VpdmVyUGhvbmUsXG4gICAgICAgICAgICByb3V0aW5nU3RyYXRlZ3k6IHRoaXMucm91dGluZ1N0cmF0ZWd5LFxuICAgICAgICAgICAgc2VjdXJpdHlMb2NrVGhyZXNob2xkOiB0aGlzLnNlY3VyaXR5TG9ja1RocmVzaG9sZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU21hcnRBY2Nlc3NHYXRld2F5UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTQUc6OlNtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU21hcnRBY2Nlc3NHYXRld2F5QmluZGluZ1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjY25JZDogVGhlIElEIG9mIHRoZSBDQ04gaW5zdGFuY2UgdG8gYmluZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjY25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNtYXJ0QWdJZDogVGhlIElEIG9mIHRoZSBTbWFydCBBY2Nlc3MgR2F0ZXdheSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBzbWFydEFnSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjY25JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jY25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2NuSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2NuSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NtYXJ0QWdJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zbWFydEFnSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NtYXJ0QWdJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zbWFydEFnSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zU21hcnRBY2Nlc3NHYXRld2F5QmluZGluZ1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTQUc6OlNtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc1NtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDY25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jY25JZCksXG4gICAgICBTbWFydEFHSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc21hcnRBZ0lkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpTQUc6OlNtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpTQUc6OlNtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTbWFydEFHSWQ6IFRoZSBJRCBvZiB0aGUgU21hcnQgQWNjZXNzIEdhdGV3YXkgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTbWFydEFnSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNjbklkOiBUaGUgSUQgb2YgdGhlIENDTiBpbnN0YW5jZSB0byBiaW5kLlxuICAgICAqL1xuICAgIHB1YmxpYyBjY25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNtYXJ0QWdJZDogVGhlIElEIG9mIHRoZSBTbWFydCBBY2Nlc3MgR2F0ZXdheSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc21hcnRBZ0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0FHOjpTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJTbWFydEFnSWQgPSB0aGlzLmdldEF0dCgnU21hcnRBR0lkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNjbklkID0gcHJvcHMuY2NuSWQ7XG4gICAgICAgIHRoaXMuc21hcnRBZ0lkID0gcHJvcHMuc21hcnRBZ0lkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNjbklkOiB0aGlzLmNjbklkLFxuICAgICAgICAgICAgc21hcnRBZ0lkOiB0aGlzLnNtYXJ0QWdJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU21hcnRBY2Nlc3NHYXRld2F5QmluZGluZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuIl19