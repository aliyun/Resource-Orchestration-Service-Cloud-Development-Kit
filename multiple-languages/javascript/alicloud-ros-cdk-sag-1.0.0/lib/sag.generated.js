"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosSmartAccessGatewayBinding = exports.RosGrantCcnToCen = exports.RosCloudConnectNetwork = exports.RosACLRule = exports.RosACLAssociation = exports.RosACL = void 0;
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
        this.attrAclId = ros.Token.asString(this.getAtt('AclId'));
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
        this.attrAcrId = ros.Token.asString(this.getAtt('AcrId'));
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
        this.attrCcnId = ros.Token.asString(this.getAtt('CcnId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.isDefault = props.isDefault;
        this.name = props.name;
    }
    get rosProperties() {
        return {
            description: this.description,
            isDefault: this.isDefault,
            name: this.name,
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
        this.attrCcnInstanceId = ros.Token.asString(this.getAtt('CcnInstanceId'));
        this.attrCenInstanceId = ros.Token.asString(this.getAtt('CenInstanceId'));
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
        this.attrSmartAgId = ros.Token.asString(this.getAtt('SmartAGId'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FnLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNhZy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQWM5Qzs7Ozs7O0dBTUc7QUFDSCxTQUFTLG9CQUFvQixDQUFDLFVBQWU7SUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztLQUFFO0lBQ25FLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkYsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLG1EQUFtRCxDQUFDLENBQUM7QUFDNUUsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILG9CQUFvQjtBQUNwQixTQUFTLHdCQUF3QixDQUFDLFVBQWUsRUFBRSxnQ0FBeUM7SUFDeEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFBRSxPQUFPLFVBQVUsQ0FBQztLQUFFO0lBQ3ZELElBQUcsZ0NBQWdDLEVBQUU7UUFDakMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDcEQ7SUFDRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO0tBQy9D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QUFDLEtBQUs7WUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzVCLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyw4Q0FBOEMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDeEcsQ0FBQzs7QUF0REwsb0VBdURDO0FBdERHOztHQUVHO0FBQ29CLG1EQUFzQixHQUFHLHdDQUF3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNBRzo6QUNMYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FDTFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBBY2Nlc3MgY29udHJvbCBuYW1lLlxuICAgICAqIFRoZSBsZW5ndGggaXMgMi0xMjggY2hhcmFjdGVycy4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UuIEl0IGNhbiBjb250YWluIG51bWJlcnMsIHBlcmlvZHMgKC4pLCB1bmRlcnNjb3JlcyAoXykgYW5kIGRhc2hlcyAoLSksIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBQ0xQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQUNMUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQUNMUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NBQ0xQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpBQ0xgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FDTFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTQUc6OkFDTGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBQ0xQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FDTFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6U0FHOjpBQ0xgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NBQ0wgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlNBRzo6QUNMXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWNsSWQ6IEFjY2VzcyBjb250cm9sIHNldCBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjbElkOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBBY2Nlc3MgY29udHJvbCBuYW1lLlxuICAgICAqIFRoZSBsZW5ndGggaXMgMi0xMjggY2hhcmFjdGVycy4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyIG9yIENoaW5lc2UuIEl0IGNhbiBjb250YWluIG51bWJlcnMsIHBlcmlvZHMgKC4pLCB1bmRlcnNjb3JlcyAoXykgYW5kIGRhc2hlcyAoLSksIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6U0FHOjpBQ0xgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0FDTFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQUNMLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJBY2xJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnQWNsSWQnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQUNMUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTQUc6OkFDTEFzc29jaWF0aW9uYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FDTEFzc29jaWF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjbElkOiBBY2Nlc3MgY29udHJvbCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2xJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNtYXJ0QWdJZDogQW4gaW50ZWxsaWdlbnQgZ2F0ZXdheSBpbnN0YW5jZSB0aGF0IG5lZWRzIHRvIGJpbmQgYWNjZXNzIGNvbnRyb2wuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc21hcnRBZ0lkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQUNMQXNzb2NpYXRpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQUNMQXNzb2NpYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBQ0xBc3NvY2lhdGlvblByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNsSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYWNsSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjbElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjbElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzbWFydEFnSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc21hcnRBZ0lkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzbWFydEFnSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc21hcnRBZ0lkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0FDTEFzc29jaWF0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNBRzo6QUNMQXNzb2NpYXRpb25gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FDTEFzc29jaWF0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNBRzo6QUNMQXNzb2NpYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQUNMQXNzb2NpYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FDTEFzc29jaWF0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQWNsSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYWNsSWQpLFxuICAgICAgU21hcnRBR0lkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNtYXJ0QWdJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6U0FHOjpBQ0xBc3NvY2lhdGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FDTEFzc29jaWF0aW9uIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpTQUc6OkFDTEFzc29jaWF0aW9uXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjbElkOiBBY2Nlc3MgY29udHJvbCBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWNsSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzbWFydEFnSWQ6IEFuIGludGVsbGlnZW50IGdhdGV3YXkgaW5zdGFuY2UgdGhhdCBuZWVkcyB0byBiaW5kIGFjY2VzcyBjb250cm9sLlxuICAgICAqL1xuICAgIHB1YmxpYyBzbWFydEFnSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTQUc6OkFDTEFzc29jaWF0aW9uYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBQ0xBc3NvY2lhdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQUNMQXNzb2NpYXRpb24uUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFjbElkID0gcHJvcHMuYWNsSWQ7XG4gICAgICAgIHRoaXMuc21hcnRBZ0lkID0gcHJvcHMuc21hcnRBZ0lkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjbElkOiB0aGlzLmFjbElkLFxuICAgICAgICAgICAgc21hcnRBZ0lkOiB0aGlzLnNtYXJ0QWdJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQUNMQXNzb2NpYXRpb25Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNBRzo6QUNMUnVsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBQ0xSdWxlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFjbElkOiBBY2Nlc3MgY29udHJvbCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2xJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc3RDaWRyOiBEZXN0aW5hdGlvbiBhZGRyZXNzLCBDSURSIGZvcm1hdCBhbmQgSVAgYWRkcmVzcyByYW5nZSBpbiBJUHY0IGZvcm1hdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXN0Q2lkcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc3RQb3J0UmFuZ2U6IERlc3RpbmF0aW9uIHBvcnQgcmFuZ2UsIDgwLzgwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc3RQb3J0UmFuZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaXJlY3Rpb246IFJlZ3VsYXIgZGlyZWN0aW9uLlxuICAgICAqIFZhbHVlOiBpbnxvdXRcbiAgICAgKi9cbiAgICByZWFkb25seSBkaXJlY3Rpb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpcFByb3RvY29sOiBQcm90b2NvbCwgbm90IGNhc2Ugc2Vuc2l0aXZlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlwUHJvdG9jb2w6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwb2xpY3k6IEFjY2VzczogYWNjZXB0fGRyb3BcbiAgICAgKi9cbiAgICByZWFkb25seSBwb2xpY3k6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzb3VyY2VDaWRyOiBTb3VyY2UgYWRkcmVzcywgQ0lEUiBmb3JtYXQgYW5kIElQIGFkZHJlc3MgcmFuZ2UgaW4gSVB2NCBmb3JtYXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc291cmNlQ2lkcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZVBvcnRSYW5nZTogU291cmNlIHBvcnQgcmFuZ2UsIDgwLzgwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZVBvcnRSYW5nZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBSdWxlIGRlc2NyaXB0aW9uIGluZm9ybWF0aW9uLCByYW5naW5nIGZyb20gMSB0byA1MTIgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmlvcml0eTogUHJpb3JpdHksIHJhbmdpbmcgZnJvbSAxIHRvIDEwMC5cbiAgICAgKiBEZWZhdWx0OiAxXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJpb3JpdHk/OiBudW1iZXI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQUNMUnVsZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBQ0xSdWxlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQUNMUnVsZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncG9saWN5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnBvbGljeSkpO1xuICAgIGlmKHByb3BlcnRpZXMucG9saWN5ICYmICh0eXBlb2YgcHJvcGVydGllcy5wb2xpY3kpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BvbGljeScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnBvbGljeSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJhY2NlcHRcIixcImRyb3BcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwb2xpY3knLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucG9saWN5KSk7XG4gICAgaWYocHJvcGVydGllcy5kZXNjcmlwdGlvbiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuZGVzY3JpcHRpb24pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kZXNjcmlwdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDUxMixcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc3RDaWRyJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmRlc3RDaWRyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXN0Q2lkcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXN0Q2lkcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlUG9ydFJhbmdlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNvdXJjZVBvcnRSYW5nZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlUG9ydFJhbmdlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNvdXJjZVBvcnRSYW5nZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc291cmNlQ2lkcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zb3VyY2VDaWRyKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzb3VyY2VDaWRyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNvdXJjZUNpZHIpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnByaW9yaXR5ICYmICh0eXBlb2YgcHJvcGVydGllcy5wcmlvcml0eSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpb3JpdHknLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5wcmlvcml0eSxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcmlvcml0eScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wcmlvcml0eSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWNsSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYWNsSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FjbElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFjbElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpcFByb3RvY29sJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmlwUHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lwUHJvdG9jb2wnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaXBQcm90b2NvbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzdFBvcnRSYW5nZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kZXN0UG9ydFJhbmdlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXN0UG9ydFJhbmdlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc3RQb3J0UmFuZ2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdGlvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5kaXJlY3Rpb24pKTtcbiAgICBpZihwcm9wZXJ0aWVzLmRpcmVjdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMuZGlyZWN0aW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaXJlY3Rpb24nLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5kaXJlY3Rpb24sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiaW5cIixcIm91dFwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2RpcmVjdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaXJlY3Rpb24pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQUNMUnVsZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTQUc6OkFDTFJ1bGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FDTFJ1bGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpBQ0xSdWxlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0FDTFJ1bGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FDTFJ1bGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBBY2xJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hY2xJZCksXG4gICAgICBEZXN0Q2lkcjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXN0Q2lkciksXG4gICAgICBEZXN0UG9ydFJhbmdlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc3RQb3J0UmFuZ2UpLFxuICAgICAgRGlyZWN0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpcmVjdGlvbiksXG4gICAgICBJcFByb3RvY29sOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlwUHJvdG9jb2wpLFxuICAgICAgUG9saWN5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBvbGljeSksXG4gICAgICBTb3VyY2VDaWRyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNvdXJjZUNpZHIpLFxuICAgICAgU291cmNlUG9ydFJhbmdlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNvdXJjZVBvcnRSYW5nZSksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBQcmlvcml0eTogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcmlvcml0eSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6U0FHOjpBQ0xSdWxlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQUNMUnVsZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6U0FHOjpBQ0xSdWxlXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWNySWQ6IEFjY2VzcyBjb250cm9sIHJ1bGUgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBY3JJZDogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWNsSWQ6IEFjY2VzcyBjb250cm9sIElELlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2xJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc3RDaWRyOiBEZXN0aW5hdGlvbiBhZGRyZXNzLCBDSURSIGZvcm1hdCBhbmQgSVAgYWRkcmVzcyByYW5nZSBpbiBJUHY0IGZvcm1hdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzdENpZHI6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXN0UG9ydFJhbmdlOiBEZXN0aW5hdGlvbiBwb3J0IHJhbmdlLCA4MC84MC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzdFBvcnRSYW5nZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpcmVjdGlvbjogUmVndWxhciBkaXJlY3Rpb24uXG4gICAgICogVmFsdWU6IGlufG91dFxuICAgICAqL1xuICAgIHB1YmxpYyBkaXJlY3Rpb246IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpcFByb3RvY29sOiBQcm90b2NvbCwgbm90IGNhc2Ugc2Vuc2l0aXZlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpcFByb3RvY29sOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcG9saWN5OiBBY2Nlc3M6IGFjY2VwdHxkcm9wXG4gICAgICovXG4gICAgcHVibGljIHBvbGljeTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZUNpZHI6IFNvdXJjZSBhZGRyZXNzLCBDSURSIGZvcm1hdCBhbmQgSVAgYWRkcmVzcyByYW5nZSBpbiBJUHY0IGZvcm1hdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc291cmNlQ2lkcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNvdXJjZVBvcnRSYW5nZTogU291cmNlIHBvcnQgcmFuZ2UsIDgwLzgwLlxuICAgICAqL1xuICAgIHB1YmxpYyBzb3VyY2VQb3J0UmFuZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogUnVsZSBkZXNjcmlwdGlvbiBpbmZvcm1hdGlvbiwgcmFuZ2luZyBmcm9tIDEgdG8gNTEyIGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJpb3JpdHk6IFByaW9yaXR5LCByYW5naW5nIGZyb20gMSB0byAxMDAuXG4gICAgICogRGVmYXVsdDogMVxuICAgICAqL1xuICAgIHB1YmxpYyBwcmlvcml0eTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNBRzo6QUNMUnVsZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQUNMUnVsZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQUNMUnVsZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQWNySWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0FjcklkJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hY2xJZCA9IHByb3BzLmFjbElkO1xuICAgICAgICB0aGlzLmRlc3RDaWRyID0gcHJvcHMuZGVzdENpZHI7XG4gICAgICAgIHRoaXMuZGVzdFBvcnRSYW5nZSA9IHByb3BzLmRlc3RQb3J0UmFuZ2U7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmlwUHJvdG9jb2wgPSBwcm9wcy5pcFByb3RvY29sO1xuICAgICAgICB0aGlzLnBvbGljeSA9IHByb3BzLnBvbGljeTtcbiAgICAgICAgdGhpcy5zb3VyY2VDaWRyID0gcHJvcHMuc291cmNlQ2lkcjtcbiAgICAgICAgdGhpcy5zb3VyY2VQb3J0UmFuZ2UgPSBwcm9wcy5zb3VyY2VQb3J0UmFuZ2U7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByb3BzLnByaW9yaXR5O1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjbElkOiB0aGlzLmFjbElkLFxuICAgICAgICAgICAgZGVzdENpZHI6IHRoaXMuZGVzdENpZHIsXG4gICAgICAgICAgICBkZXN0UG9ydFJhbmdlOiB0aGlzLmRlc3RQb3J0UmFuZ2UsXG4gICAgICAgICAgICBkaXJlY3Rpb246IHRoaXMuZGlyZWN0aW9uLFxuICAgICAgICAgICAgaXBQcm90b2NvbDogdGhpcy5pcFByb3RvY29sLFxuICAgICAgICAgICAgcG9saWN5OiB0aGlzLnBvbGljeSxcbiAgICAgICAgICAgIHNvdXJjZUNpZHI6IHRoaXMuc291cmNlQ2lkcixcbiAgICAgICAgICAgIHNvdXJjZVBvcnRSYW5nZTogdGhpcy5zb3VyY2VQb3J0UmFuZ2UsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBQ0xSdWxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTQUc6OkNsb3VkQ29ubmVjdE5ldHdvcmtgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ2xvdWRDb25uZWN0TmV0d29ya1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBDQ04gaW5zdGFuY2UuXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIGNhbiBjb250YWluIDIgdG8gMjU2IGNoYXJhY3RlcnMuIFRoZSBkZXNjcmlwdGlvbiBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzRGVmYXVsdDogV2hldGhlciBpcyBjcmVhdGVkIGJ5IHN5c3RlbVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzRGVmYXVsdD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIENDTiBpbnN0YW5jZS5cbiAgICAgKiBUaGUgbmFtZSBjYW4gY29udGFpbiAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluY2x1ZGluZyBhLXosIEEtWiwgMC05LCBjaGluZXNlLCB1bmRlcmxpbmVzLCBhbmQgaHlwaGVucy4gVGhlIG5hbWUgbXVzdCBzdGFydCB3aXRoIGFuIEVuZ2xpc2ggbGV0dGVyLCBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0Nsb3VkQ29ubmVjdE5ldHdvcmtQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2xvdWRDb25uZWN0TmV0d29ya1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Nsb3VkQ29ubmVjdE5ldHdvcmtQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lzRGVmYXVsdCcsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuaXNEZWZhdWx0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0Nsb3VkQ29ubmVjdE5ldHdvcmtQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpDbG91ZENvbm5lY3ROZXR3b3JrYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDbG91ZENvbm5lY3ROZXR3b3JrUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNBRzo6Q2xvdWRDb25uZWN0TmV0d29ya2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDbG91ZENvbm5lY3ROZXR3b3JrUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDbG91ZENvbm5lY3ROZXR3b3JrUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgSXNEZWZhdWx0OiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pc0RlZmF1bHQpLFxuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpTQUc6OkNsb3VkQ29ubmVjdE5ldHdvcmtgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDbG91ZENvbm5lY3ROZXR3b3JrIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpTQUc6OkNsb3VkQ29ubmVjdE5ldHdvcmtcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDY25JZDogVGhlIElEIG9mIHRoZSBDQ04gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDY25JZDogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgQ0NOIGluc3RhbmNlLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBjYW4gY29udGFpbiAyIHRvIDI1NiBjaGFyYWN0ZXJzLiBUaGUgZGVzY3JpcHRpb24gY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpc0RlZmF1bHQ6IFdoZXRoZXIgaXMgY3JlYXRlZCBieSBzeXN0ZW1cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNEZWZhdWx0OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBDQ04gaW5zdGFuY2UuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gMiB0byAxMjggY2hhcmFjdGVycyBpbmNsdWRpbmcgYS16LCBBLVosIDAtOSwgY2hpbmVzZSwgdW5kZXJsaW5lcywgYW5kIGh5cGhlbnMuIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhbiBFbmdsaXNoIGxldHRlciwgYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTQUc6OkNsb3VkQ29ubmVjdE5ldHdvcmtgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0Nsb3VkQ29ubmVjdE5ldHdvcmtQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0Nsb3VkQ29ubmVjdE5ldHdvcmsuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNjbklkID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdDY25JZCcpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5pc0RlZmF1bHQgPSBwcm9wcy5pc0RlZmF1bHQ7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb3BzLm5hbWU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBpc0RlZmF1bHQ6IHRoaXMuaXNEZWZhdWx0LFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDbG91ZENvbm5lY3ROZXR3b3JrUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpTQUc6OkdyYW50Q2NuVG9DZW5gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zR3JhbnRDY25Ub0NlblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjY25JbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIENDTiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjY25JbnN0YW5jZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuSW5zdGFuY2VJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlblVpZDogVGhlIElEIG9mIHRoZSBhY2NvdW50IHRvIHdoaWNoIHRoZSBDRU4gaW5zdGFuY2UgYmVsb25ncy5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZW5VaWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NHcmFudENjblRvQ2VuUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0dyYW50Q2NuVG9DZW5Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcmFudENjblRvQ2VuUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZW5VaWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2VuVWlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZW5VaWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2VuVWlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjY25JbnN0YW5jZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNjbkluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Njbkluc3RhbmNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2NuSW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VuSW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jZW5JbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZW5JbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNlbkluc3RhbmNlSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zR3JhbnRDY25Ub0NlblByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTQUc6OkdyYW50Q2NuVG9DZW5gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0dyYW50Q2NuVG9DZW5Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6U0FHOjpHcmFudENjblRvQ2VuYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0dyYW50Q2NuVG9DZW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0dyYW50Q2NuVG9DZW5Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDY25JbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNjbkluc3RhbmNlSWQpLFxuICAgICAgQ2VuSW5zdGFuY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZW5JbnN0YW5jZUlkKSxcbiAgICAgIENlblVpZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZW5VaWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlNBRzo6R3JhbnRDY25Ub0NlbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0dyYW50Q2NuVG9DZW4gZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlNBRzo6R3JhbnRDY25Ub0NlblwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENjbkluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgQ0NOIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2NuSW5zdGFuY2VJZDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDZW5JbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIENFTiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNlbkluc3RhbmNlSWQ6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNjbkluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgQ0NOIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBjY25JbnN0YW5jZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGNlbkluc3RhbmNlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZW5VaWQ6IFRoZSBJRCBvZiB0aGUgYWNjb3VudCB0byB3aGljaCB0aGUgQ0VOIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIGNlblVpZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlNBRzo6R3JhbnRDY25Ub0NlbmAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zR3JhbnRDY25Ub0NlblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zR3JhbnRDY25Ub0Nlbi5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ2NuSW5zdGFuY2VJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnQ2NuSW5zdGFuY2VJZCcpKTtcbiAgICAgICAgdGhpcy5hdHRyQ2VuSW5zdGFuY2VJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnQ2VuSW5zdGFuY2VJZCcpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY2NuSW5zdGFuY2VJZCA9IHByb3BzLmNjbkluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuY2VuSW5zdGFuY2VJZCA9IHByb3BzLmNlbkluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuY2VuVWlkID0gcHJvcHMuY2VuVWlkO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNjbkluc3RhbmNlSWQ6IHRoaXMuY2NuSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGNlbkluc3RhbmNlSWQ6IHRoaXMuY2VuSW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGNlblVpZDogdGhpcy5jZW5VaWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0dyYW50Q2NuVG9DZW5Qcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OlNBRzo6U21hcnRBY2Nlc3NHYXRld2F5QmluZGluZ2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNjbklkOiBUaGUgSUQgb2YgdGhlIENDTiBpbnN0YW5jZSB0byBiaW5kLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNjbklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc21hcnRBZ0lkOiBUaGUgSUQgb2YgdGhlIFNtYXJ0IEFjY2VzcyBHYXRld2F5IGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNtYXJ0QWdJZDogc3RyaW5nO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc1NtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU21hcnRBY2Nlc3NHYXRld2F5QmluZGluZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NjbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNjbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjY25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jY25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc21hcnRBZ0lkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnNtYXJ0QWdJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc21hcnRBZ0lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNtYXJ0QWdJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NTbWFydEFjY2Vzc0dhdGV3YXlCaW5kaW5nUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OlNBRzo6U21hcnRBY2Nlc3NHYXRld2F5QmluZGluZ2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU21hcnRBY2Nlc3NHYXRld2F5QmluZGluZ1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpTQUc6OlNtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU21hcnRBY2Nlc3NHYXRld2F5QmluZGluZ1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zU21hcnRBY2Nlc3NHYXRld2F5QmluZGluZ1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENjbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNjbklkKSxcbiAgICAgIFNtYXJ0QUdJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zbWFydEFnSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OlNBRzo6U21hcnRBY2Nlc3NHYXRld2F5QmluZGluZ2BcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmcgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OlNBRzo6U21hcnRBY2Nlc3NHYXRld2F5QmluZGluZ1wiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNtYXJ0QUdJZDogVGhlIElEIG9mIHRoZSBTbWFydCBBY2Nlc3MgR2F0ZXdheSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNtYXJ0QWdJZDogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2NuSWQ6IFRoZSBJRCBvZiB0aGUgQ0NOIGluc3RhbmNlIHRvIGJpbmQuXG4gICAgICovXG4gICAgcHVibGljIGNjbklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc21hcnRBZ0lkOiBUaGUgSUQgb2YgdGhlIFNtYXJ0IEFjY2VzcyBHYXRld2F5IGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzbWFydEFnSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpTQUc6OlNtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1NtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1NtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmcuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clNtYXJ0QWdJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnU21hcnRBR0lkJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jY25JZCA9IHByb3BzLmNjbklkO1xuICAgICAgICB0aGlzLnNtYXJ0QWdJZCA9IHByb3BzLnNtYXJ0QWdJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjY25JZDogdGhpcy5jY25JZCxcbiAgICAgICAgICAgIHNtYXJ0QWdJZDogdGhpcy5zbWFydEFnSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1NtYXJ0QWNjZXNzR2F0ZXdheUJpbmRpbmdQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==