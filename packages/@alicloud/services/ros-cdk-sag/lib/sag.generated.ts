// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosACL`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-acl
 */
export interface RosACLProps {

    /**
     * @Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:\/\/ or https:\/\/.
     */
    readonly name: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosACLProps`
 *
 * @param properties - the TypeScript properties of a `RosACLProps`
 *
 * @returns the result of the validation.
 */
function RosACLPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosACLPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosACLPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::ACL`, which is used to create an access control list (ACL).
 * @Note This class does not contain additional functions, so it is recommended to use the `ACL` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-acl
 */
export class RosACL extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACL";

    /**
     * @Attribute AclId: Access control set ID.
     */
    public readonly attrAclId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:\/\/ or https:\/\/.
     */
    public name: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosACLProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosACL.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclId = this.getAtt('AclId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosACLPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosACLAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclassociation
 */
export interface RosACLAssociationProps {

    /**
     * @Property aclId: Access control ID.
     */
    readonly aclId: string | ros.IResolvable;

    /**
     * @Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    readonly smartAgId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosACLAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosACLAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosACLAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosACLAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosACLAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      'AclId': ros.stringToRosTemplate(properties.aclId),
      'SmartAGId': ros.stringToRosTemplate(properties.smartAgId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::ACLAssociation`, which is used to associate an access control list (ACL) with a Smart Access Gateway (SAG) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `ACLAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclassociation
 */
export class RosACLAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACLAssociation";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclId: Access control ID.
     */
    public aclId: string | ros.IResolvable;

    /**
     * @Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    public smartAgId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosACLAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosACLAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclId = props.aclId;
        this.smartAgId = props.smartAgId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclId: this.aclId,
            smartAgId: this.smartAgId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosACLAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosACLRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclrule
 */
export interface RosACLRuleProps {

    /**
     * @Property aclId: Access control ID.
     */
    readonly aclId: string | ros.IResolvable;

    /**
     * @Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    readonly destCidr: string | ros.IResolvable;

    /**
     * @Property destPortRange: Destination port range, 80\/80.
     */
    readonly destPortRange: string | ros.IResolvable;

    /**
     * @Property direction: Regular direction.
     * Value: in|out
     */
    readonly direction: string | ros.IResolvable;

    /**
     * @Property ipProtocol: Protocol, not case sensitive.
     */
    readonly ipProtocol: string | ros.IResolvable;

    /**
     * @Property policy: Access: accept|drop
     */
    readonly policy: string | ros.IResolvable;

    /**
     * @Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    readonly sourceCidr: string | ros.IResolvable;

    /**
     * @Property sourcePortRange: Source port range, 80\/80.
     */
    readonly sourcePortRange: string | ros.IResolvable;

    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property dpiGroupIds: The ID of the application group.
     * You can enter at most 100 application group IDs at a time.
     * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
     */
    readonly dpiGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property dpiSignatureIds: The ID of the application.
     * You can enter at most 100 application IDs at a time.
     * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
     */
    readonly dpiSignatureIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property name: The name of the ACL rule.
     * The name must be 2 to 100 characters in length, and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * @Property type: The type of the ACL rule: Valid values:
     * LAN: The ACL rule controls traffic of private IP addresses. This is the default value.
     * WAN: The ACL rule controls traffic of public IP addresses.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosACLRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosACLRuleProps`
 *
 * @returns the result of the validation.
 */
function RosACLRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policy', ros.requiredValidator)(properties.policy));
    if(properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
          data: properties.policy,
          allowedValues: ["accept","drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 1,
            max: 512,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.requiredValidator)(properties.sourcePortRange));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.validateString)(properties.sourcePortRange));
    errors.collect(ros.propertyValidator('sourceCidr', ros.requiredValidator)(properties.sourceCidr));
    errors.collect(ros.propertyValidator('sourceCidr', ros.validateString)(properties.sourceCidr));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('aclId', ros.requiredValidator)(properties.aclId));
    errors.collect(ros.propertyValidator('aclId', ros.validateString)(properties.aclId));
    errors.collect(ros.propertyValidator('destPortRange', ros.requiredValidator)(properties.destPortRange));
    errors.collect(ros.propertyValidator('destPortRange', ros.validateString)(properties.destPortRange));
    errors.collect(ros.propertyValidator('direction', ros.requiredValidator)(properties.direction));
    if(properties.direction && (typeof properties.direction) !== 'object') {
        errors.collect(ros.propertyValidator('direction', ros.validateAllowedValues)({
          data: properties.direction,
          allowedValues: ["in","out"],
        }));
    }
    errors.collect(ros.propertyValidator('direction', ros.validateString)(properties.direction));
    if(properties.dpiGroupIds && (Array.isArray(properties.dpiGroupIds) || (typeof properties.dpiGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('dpiGroupIds', ros.validateLength)({
            data: properties.dpiGroupIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('dpiGroupIds', ros.listValidator(ros.validateString))(properties.dpiGroupIds));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["LAN","WAN"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('destCidr', ros.requiredValidator)(properties.destCidr));
    errors.collect(ros.propertyValidator('destCidr', ros.validateString)(properties.destCidr));
    if(properties.dpiSignatureIds && (Array.isArray(properties.dpiSignatureIds) || (typeof properties.dpiSignatureIds) === 'string')) {
        errors.collect(ros.propertyValidator('dpiSignatureIds', ros.validateLength)({
            data: properties.dpiSignatureIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('dpiSignatureIds', ros.listValidator(ros.validateString))(properties.dpiSignatureIds));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
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
function rosACLRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosACLRulePropsValidator(properties).assertSuccess();
    }
    return {
      'AclId': ros.stringToRosTemplate(properties.aclId),
      'DestCidr': ros.stringToRosTemplate(properties.destCidr),
      'DestPortRange': ros.stringToRosTemplate(properties.destPortRange),
      'Direction': ros.stringToRosTemplate(properties.direction),
      'IpProtocol': ros.stringToRosTemplate(properties.ipProtocol),
      'Policy': ros.stringToRosTemplate(properties.policy),
      'SourceCidr': ros.stringToRosTemplate(properties.sourceCidr),
      'SourcePortRange': ros.stringToRosTemplate(properties.sourcePortRange),
      'Description': ros.stringToRosTemplate(properties.description),
      'DpiGroupIds': ros.listMapper(ros.stringToRosTemplate)(properties.dpiGroupIds),
      'DpiSignatureIds': ros.listMapper(ros.stringToRosTemplate)(properties.dpiSignatureIds),
      'Name': ros.stringToRosTemplate(properties.name),
      'Priority': ros.numberToRosTemplate(properties.priority),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::ACLRule`, which is used to add an access control list (ACL) rule.
 * @Note This class does not contain additional functions, so it is recommended to use the `ACLRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-aclrule
 */
export class RosACLRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACLRule";

    /**
     * @Attribute AcrId: Access control rule ID.
     */
    public readonly attrAcrId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclId: Access control ID.
     */
    public aclId: string | ros.IResolvable;

    /**
     * @Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    public destCidr: string | ros.IResolvable;

    /**
     * @Property destPortRange: Destination port range, 80\/80.
     */
    public destPortRange: string | ros.IResolvable;

    /**
     * @Property direction: Regular direction.
     * Value: in|out
     */
    public direction: string | ros.IResolvable;

    /**
     * @Property ipProtocol: Protocol, not case sensitive.
     */
    public ipProtocol: string | ros.IResolvable;

    /**
     * @Property policy: Access: accept|drop
     */
    public policy: string | ros.IResolvable;

    /**
     * @Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    public sourceCidr: string | ros.IResolvable;

    /**
     * @Property sourcePortRange: Source port range, 80\/80.
     */
    public sourcePortRange: string | ros.IResolvable;

    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property dpiGroupIds: The ID of the application group.
     * You can enter at most 100 application group IDs at a time.
     * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
     */
    public dpiGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property dpiSignatureIds: The ID of the application.
     * You can enter at most 100 application IDs at a time.
     * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
     */
    public dpiSignatureIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the ACL rule.
     * The name must be 2 to 100 characters in length, and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    public priority: number | ros.IResolvable | undefined;

    /**
     * @Property type: The type of the ACL rule: Valid values:
     * LAN: The ACL rule controls traffic of private IP addresses. This is the default value.
     * WAN: The ACL rule controls traffic of public IP addresses.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosACLRuleProps, enableResourcePropertyConstraint: boolean) {
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
        this.dpiGroupIds = props.dpiGroupIds;
        this.dpiSignatureIds = props.dpiSignatureIds;
        this.name = props.name;
        this.priority = props.priority;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
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
            dpiGroupIds: this.dpiGroupIds,
            dpiSignatureIds: this.dpiSignatureIds,
            name: this.name,
            priority: this.priority,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosACLRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-app
 */
export interface RosAppProps {

    /**
     * @Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances. Default value:
     * false. Valid values:
     * true: automatically pays the bills of SAG APP instances.
     * false: does not automatically pay the bills of SAG APP instances.
     * If you set the parameter to false, after you call this operation, go to Billing Management
     * of the SAG console to complete the payment, the instance can be created.
     */
    readonly autoPay: boolean | ros.IResolvable;

    /**
     * @Property dataPlan: The quota of the traffic plan that the system allows each client account to use for
     * free each month. Unit: GB. Set the value to 5.
     * Note The system allows each client account to use 5 GB traffic plan for free.
     */
    readonly dataPlan: number | ros.IResolvable;

    /**
     * @Property period: The subscription period of the SAG APP instance. Unit: months.
     * Valid values: 1~9, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;

    /**
     * @Property userCount: The quota of client accounts for the SAG APP instance.
     * Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
     */
    readonly userCount: number | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the SAG APP instance. Set the value to PREPAY.
     * This value indicates that the SAG APP instance is a subscription resource.
     */
    readonly chargeType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAppProps`
 *
 * @param properties - the TypeScript properties of a `RosAppProps`
 *
 * @returns the result of the validation.
 */
function RosAppPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('userCount', ros.requiredValidator)(properties.userCount));
    errors.collect(ros.propertyValidator('userCount', ros.validateNumber)(properties.userCount));
    errors.collect(ros.propertyValidator('dataPlan', ros.requiredValidator)(properties.dataPlan));
    errors.collect(ros.propertyValidator('dataPlan', ros.validateNumber)(properties.dataPlan));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.requiredValidator)(properties.autoPay));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    return errors.wrap('supplied properties not correct for "RosAppProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::App` resource
 *
 * @param properties - the TypeScript properties of a `RosAppProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::App` resource.
 */
// @ts-ignore TS6133
function rosAppPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAppPropsValidator(properties).assertSuccess();
    }
    return {
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'DataPlan': ros.numberToRosTemplate(properties.dataPlan),
      'Period': ros.numberToRosTemplate(properties.period),
      'UserCount': ros.numberToRosTemplate(properties.userCount),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::App`, which is used to create a Smart Access Gateway (SAG) app instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `App` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-app
 */
export class RosApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::App";

    /**
     * @Attribute OrderId: The ID of the order that you placed to subscribe to the SAG APP instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute SmartAGId: The ID of the SAG APP instance.
     */
    public readonly attrSmartAgId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances. Default value:
     * false. Valid values:
     * true: automatically pays the bills of SAG APP instances.
     * false: does not automatically pay the bills of SAG APP instances.
     * If you set the parameter to false, after you call this operation, go to Billing Management
     * of the SAG console to complete the payment, the instance can be created.
     */
    public autoPay: boolean | ros.IResolvable;

    /**
     * @Property dataPlan: The quota of the traffic plan that the system allows each client account to use for
     * free each month. Unit: GB. Set the value to 5.
     * Note The system allows each client account to use 5 GB traffic plan for free.
     */
    public dataPlan: number | ros.IResolvable;

    /**
     * @Property period: The subscription period of the SAG APP instance. Unit: months.
     * Valid values: 1~9, 12, 24, and 36.
     */
    public period: number | ros.IResolvable;

    /**
     * @Property userCount: The quota of client accounts for the SAG APP instance.
     * Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
     */
    public userCount: number | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the SAG APP instance. Set the value to PREPAY.
     * This value indicates that the SAG APP instance is a subscription resource.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrOrderId = this.getAtt('OrderId');
        this.attrSmartAgId = this.getAtt('SmartAGId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoPay = props.autoPay;
        this.dataPlan = props.dataPlan;
        this.period = props.period;
        this.userCount = props.userCount;
        this.chargeType = props.chargeType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            autoPay: this.autoPay,
            dataPlan: this.dataPlan,
            period: this.period,
            userCount: this.userCount,
            chargeType: this.chargeType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAppPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAppUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser
 */
export interface RosAppUserProps {

    /**
     * @Property bandwidth: The bandwidth. Unit: Kbit\/s. Maximum bandwidth: 2,000 Kbit\/s.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * @Property smartAgId: The ID of the SAG APP instance.
     */
    readonly smartAgId: string | ros.IResolvable;

    /**
     * @Property userMail: The email address of the user. The username and password are sent to the specified
     * email address.
     */
    readonly userMail: string | ros.IResolvable;

    /**
     * @Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP. In this
     * case, SAG APP connects to Alibaba Cloud through the specified IP address.
     * Note The IP address must fall into the CIDR block of the private network.
     * After this feature is disabled, an IP address within the CIDR block of the private
     * network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
     * IP address.
     */
    readonly clientIp?: string | ros.IResolvable;

    /**
     * @Property disable: Disable user or not.
     */
    readonly disable?: boolean | ros.IResolvable;

    /**
     * @Property password: The password used to log on to SAG APP.
     * For a client account, if you specify the username, you must also specify the password.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property userName: The username of the client account. Usernames of client accounts added to the same
     * SAG APP instance must be unique.
     * For a client account, if you specify the username, you must also specify the password.
     */
    readonly userName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAppUserProps`
 *
 * @param properties - the TypeScript properties of a `RosAppUserProps`
 *
 * @returns the result of the validation.
 */
function RosAppUserPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('userMail', ros.requiredValidator)(properties.userMail));
    errors.collect(ros.propertyValidator('userMail', ros.validateString)(properties.userMail));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('smartAgId', ros.requiredValidator)(properties.smartAgId));
    errors.collect(ros.propertyValidator('smartAgId', ros.validateString)(properties.smartAgId));
    errors.collect(ros.propertyValidator('clientIp', ros.validateString)(properties.clientIp));
    errors.collect(ros.propertyValidator('disable', ros.validateBoolean)(properties.disable));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "RosAppUserProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::AppUser` resource
 *
 * @param properties - the TypeScript properties of a `RosAppUserProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::AppUser` resource.
 */
// @ts-ignore TS6133
function rosAppUserPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAppUserPropsValidator(properties).assertSuccess();
    }
    return {
      'Bandwidth': ros.numberToRosTemplate(properties.bandwidth),
      'SmartAGId': ros.stringToRosTemplate(properties.smartAgId),
      'UserMail': ros.stringToRosTemplate(properties.userMail),
      'ClientIp': ros.stringToRosTemplate(properties.clientIp),
      'Disable': ros.booleanToRosTemplate(properties.disable),
      'Password': ros.stringToRosTemplate(properties.password),
      'UserName': ros.stringToRosTemplate(properties.userName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::AppUser`, which is used to create a client account for a Smart Access Gateway (SAG) app instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `AppUser` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser
 */
export class RosAppUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::AppUser";

    /**
     * @Attribute SmartAGId: The ID of the SAG APP instance.
     */
    public readonly attrSmartAgId: ros.IResolvable;

    /**
     * @Attribute UserName: <heat.engine.properties.Schema object at 0x7f3186aeb110>
     */
    public readonly attrUserName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: The bandwidth. Unit: Kbit\/s. Maximum bandwidth: 2,000 Kbit\/s.
     */
    public bandwidth: number | ros.IResolvable;

    /**
     * @Property smartAgId: The ID of the SAG APP instance.
     */
    public smartAgId: string | ros.IResolvable;

    /**
     * @Property userMail: The email address of the user. The username and password are sent to the specified
     * email address.
     */
    public userMail: string | ros.IResolvable;

    /**
     * @Property clientIp: After this feature is enabled, you must specify the IP address of SAG APP. In this
     * case, SAG APP connects to Alibaba Cloud through the specified IP address.
     * Note The IP address must fall into the CIDR block of the private network.
     * After this feature is disabled, an IP address within the CIDR block of the private
     * network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
     * IP address.
     */
    public clientIp: string | ros.IResolvable | undefined;

    /**
     * @Property disable: Disable user or not.
     */
    public disable: boolean | ros.IResolvable | undefined;

    /**
     * @Property password: The password used to log on to SAG APP.
     * For a client account, if you specify the username, you must also specify the password.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property userName: The username of the client account. Usernames of client accounts added to the same
     * SAG APP instance must be unique.
     * For a client account, if you specify the username, you must also specify the password.
     */
    public userName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppUserProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAppUser.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSmartAgId = this.getAtt('SmartAGId');
        this.attrUserName = this.getAtt('UserName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.smartAgId = props.smartAgId;
        this.userMail = props.userMail;
        this.clientIp = props.clientIp;
        this.disable = props.disable;
        this.password = props.password;
        this.userName = props.userName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidth: this.bandwidth,
            smartAgId: this.smartAgId,
            userMail: this.userMail,
            clientIp: this.clientIp,
            disable: this.disable,
            password: this.password,
            userName: this.userName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAppUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCloudConnectNetwork`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-cloudconnectnetwork
 */
export interface RosCloudConnectNetworkProps {

    /**
     * @Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property isDefault: Whether is created by system
     */
    readonly isDefault?: boolean | ros.IResolvable;

    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCloudConnectNetwork.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosCloudConnectNetworkProps`
 *
 * @param properties - the TypeScript properties of a `RosCloudConnectNetworkProps`
 *
 * @returns the result of the validation.
 */
function RosCloudConnectNetworkPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isDefault', ros.validateBoolean)(properties.isDefault));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
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
function rosCloudConnectNetworkPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCloudConnectNetworkPropsValidator(properties).assertSuccess();
    }
    return {
      'Description': ros.stringToRosTemplate(properties.description),
      'IsDefault': ros.booleanToRosTemplate(properties.isDefault),
      'Name': ros.stringToRosTemplate(properties.name),
      'Tags': ros.listMapper(rosCloudConnectNetworkTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::CloudConnectNetwork`, which is used to create a Cloud Connect Network (CCN) instance. CNN is a device access matrix composed of Alibaba Cloud distributed Smart Access Gateways (SAGs). You can add multiple SAGs to a CCN instance and then attach the CCN instance to a Cloud Enterprise Network (CEN) instance. In this way, you can connect your local branches to Alibaba Cloud.
 * @Note This class does not contain additional functions, so it is recommended to use the `CloudConnectNetwork` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-cloudconnectnetwork
 */
export class RosCloudConnectNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::CloudConnectNetwork";

    /**
     * @Attribute CcnId: The ID of the CCN instance.
     */
    public readonly attrCcnId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:\/\/ or https:\/\/.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property isDefault: Whether is created by system
     */
    public isDefault: boolean | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:\/\/ or https:\/\/.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosCloudConnectNetwork.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCloudConnectNetworkProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCloudConnectNetwork.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCcnId = this.getAtt('CcnId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.isDefault = props.isDefault;
        this.name = props.name;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            isDefault: this.isDefault,
            name: this.name,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCloudConnectNetworkPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCloudConnectNetwork {
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
function RosCloudConnectNetwork_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosCloudConnectNetworkTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCloudConnectNetwork_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosGrantCcnToCen`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen
 */
export interface RosGrantCcnToCenProps {

    /**
     * @Property ccnInstanceId: The ID of the CCN instance.
     */
    readonly ccnInstanceId: string | ros.IResolvable;

    /**
     * @Property cenInstanceId: The ID of the CEN instance.
     */
    readonly cenInstanceId: string | ros.IResolvable;

    /**
     * @Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    readonly cenUid: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGrantCcnToCenProps`
 *
 * @param properties - the TypeScript properties of a `RosGrantCcnToCenProps`
 *
 * @returns the result of the validation.
 */
function RosGrantCcnToCenPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosGrantCcnToCenPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGrantCcnToCenPropsValidator(properties).assertSuccess();
    }
    return {
      'CcnInstanceId': ros.stringToRosTemplate(properties.ccnInstanceId),
      'CenInstanceId': ros.stringToRosTemplate(properties.cenInstanceId),
      'CenUid': ros.stringToRosTemplate(properties.cenUid),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::GrantCcnToCen`, which is used to grant permissions on a Cloud Connect Network (CCN) instance to a Cloud Enterprise Network (CEN) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `GrantCcnToCen` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen
 */
export class RosGrantCcnToCen extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::GrantCcnToCen";

    /**
     * @Attribute CcnInstanceId: The ID of the CCN instance.
     */
    public readonly attrCcnInstanceId: ros.IResolvable;

    /**
     * @Attribute CenInstanceId: The ID of the CEN instance.
     */
    public readonly attrCenInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ccnInstanceId: The ID of the CCN instance.
     */
    public ccnInstanceId: string | ros.IResolvable;

    /**
     * @Property cenInstanceId: The ID of the CEN instance.
     */
    public cenInstanceId: string | ros.IResolvable;

    /**
     * @Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    public cenUid: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGrantCcnToCenProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGrantCcnToCen.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCcnInstanceId = this.getAtt('CcnInstanceId');
        this.attrCenInstanceId = this.getAtt('CenInstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ccnInstanceId = props.ccnInstanceId;
        this.cenInstanceId = props.cenInstanceId;
        this.cenUid = props.cenUid;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ccnInstanceId: this.ccnInstanceId,
            cenInstanceId: this.cenInstanceId,
            cenUid: this.cenUid,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGrantCcnToCenPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosQos`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos
 */
export interface RosQosProps {

    /**
     * @Property qosName: The name of the QoS policy.
     * The name must be 2 to 100 characters in length and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly qosName: string | ros.IResolvable;

    /**
     * @Property qosDescription: The description of the QoS policy.
     * The description must be 1 to 512 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly qosDescription?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosQosProps`
 *
 * @param properties - the TypeScript properties of a `RosQosProps`
 *
 * @returns the result of the validation.
 */
function RosQosPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('qosName', ros.requiredValidator)(properties.qosName));
    errors.collect(ros.propertyValidator('qosName', ros.validateString)(properties.qosName));
    errors.collect(ros.propertyValidator('qosDescription', ros.validateString)(properties.qosDescription));
    return errors.wrap('supplied properties not correct for "RosQosProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::Qos` resource
 *
 * @param properties - the TypeScript properties of a `RosQosProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::Qos` resource.
 */
// @ts-ignore TS6133
function rosQosPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosQosPropsValidator(properties).assertSuccess();
    }
    return {
      'QosName': ros.stringToRosTemplate(properties.qosName),
      'QosDescription': ros.stringToRosTemplate(properties.qosDescription),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::Qos`ALIYUN::SAG::QoS is used to create a quality of service (QoS) policy for a Smart Access Gateway (SAG) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Qos` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos
 */
export class RosQos extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::Qos";

    /**
     * @Attribute QosId: The ID of the QoS policy.
     */
    public readonly attrQosId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property qosName: The name of the QoS policy.
     * The name must be 2 to 100 characters in length and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    public qosName: string | ros.IResolvable;

    /**
     * @Property qosDescription: The description of the QoS policy.
     * The description must be 1 to 512 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    public qosDescription: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQosProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosQos.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrQosId = this.getAtt('QosId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.qosName = props.qosName;
        this.qosDescription = props.qosDescription;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            qosName: this.qosName,
            qosDescription: this.qosDescription,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosQosPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosQosAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qosassociation
 */
export interface RosQosAssociationProps {

    /**
     * @Property qosId: The instance ID of the QoS policy.
     */
    readonly qosId: string | ros.IResolvable;

    /**
     * @Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
     */
    readonly smartAgId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosQosAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosQosAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosQosAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('qosId', ros.requiredValidator)(properties.qosId));
    errors.collect(ros.propertyValidator('qosId', ros.validateString)(properties.qosId));
    errors.collect(ros.propertyValidator('smartAgId', ros.requiredValidator)(properties.smartAgId));
    errors.collect(ros.propertyValidator('smartAgId', ros.validateString)(properties.smartAgId));
    return errors.wrap('supplied properties not correct for "RosQosAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::QosAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosQosAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::QosAssociation` resource.
 */
// @ts-ignore TS6133
function rosQosAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosQosAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      'QosId': ros.stringToRosTemplate(properties.qosId),
      'SmartAGId': ros.stringToRosTemplate(properties.smartAgId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::QosAssociation`, which is used to associate a quality of service (QoS) policy with a Smart Access Gateway (SAG) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `QosAssociation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qosassociation
 */
export class RosQosAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::QosAssociation";

    /**
     * @Attribute QosId: The ID of the QoS policy.
     */
    public readonly attrQosId: ros.IResolvable;

    /**
     * @Attribute SmartAGId: The ID of the SAG instance to which the QoS policy is to be applied.
     */
    public readonly attrSmartAgId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property qosId: The instance ID of the QoS policy.
     */
    public qosId: string | ros.IResolvable;

    /**
     * @Property smartAgId: The ID of the SAG instance to which the QoS policy is to be applied.
     */
    public smartAgId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQosAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosQosAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrQosId = this.getAtt('QosId');
        this.attrSmartAgId = this.getAtt('SmartAGId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.qosId = props.qosId;
        this.smartAgId = props.smartAgId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            qosId: this.qosId,
            smartAgId: this.smartAgId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosQosAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosQosCar`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar
 */
export interface RosQosCarProps {

    /**
     * @Property limitType: The type of the traffic throttling policy. Valid values:
     * Absolute: throttles traffic by a specific bandwidth range.
     * Percent: throttles traffic by a specific range of bandwidth percentage.
     */
    readonly limitType: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the traffic throttling policy. A smaller value represents a higher
     * priority. If policies are assigned the same priority, the one applied the earliest
     * prevails. Valid values: 1 to 7.
     */
    readonly priority: number | ros.IResolvable;

    /**
     * @Property qosId: The ID of the QoS policy.
     */
    readonly qosId: string | ros.IResolvable;

    /**
     * @Property description: The description of the traffic throttling policy.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property maxBandwidthAbs: The maximum bandwidth. This parameter is required when LimitType is set to Absolute.
     */
    readonly maxBandwidthAbs?: number | ros.IResolvable;

    /**
     * @Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG
     * instance.
     * This parameter is required when LimitType is set to Percent.
     */
    readonly maxBandwidthPercent?: number | ros.IResolvable;

    /**
     * @Property minBandwidthAbs: The minimum bandwidth. This parameter is required when LimitType is set to Absolute.
     */
    readonly minBandwidthAbs?: number | ros.IResolvable;

    /**
     * @Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG
     * instance.
     * This parameter is required when LimitType is set to Percent.
     */
    readonly minBandwidthPercent?: number | ros.IResolvable;

    /**
     * @Property name: The name of the traffic throttling policy. The name must be 2 to 128 characters in
     * length, and can contain Chinese characters, letters, digits, periods (.), underscores
     * (_), and hyphens (-).
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following
     * options are available:
     * CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
     * InternetUpBandwidth: Internet upstream bandwidth.
     */
    readonly percentSourceType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosQosCarProps`
 *
 * @param properties - the TypeScript properties of a `RosQosCarProps`
 *
 * @returns the result of the validation.
 */
function RosQosCarPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('minBandwidthAbs', ros.validateNumber)(properties.minBandwidthAbs));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('priority', ros.requiredValidator)(properties.priority));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 7,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('maxBandwidthPercent', ros.validateNumber)(properties.maxBandwidthPercent));
    errors.collect(ros.propertyValidator('maxBandwidthAbs', ros.validateNumber)(properties.maxBandwidthAbs));
    errors.collect(ros.propertyValidator('qosId', ros.requiredValidator)(properties.qosId));
    errors.collect(ros.propertyValidator('qosId', ros.validateString)(properties.qosId));
    if(properties.percentSourceType && (typeof properties.percentSourceType) !== 'object') {
        errors.collect(ros.propertyValidator('percentSourceType', ros.validateAllowedValues)({
          data: properties.percentSourceType,
          allowedValues: ["CcnBandwidth","InternetUpBandwidth"],
        }));
    }
    errors.collect(ros.propertyValidator('percentSourceType', ros.validateString)(properties.percentSourceType));
    errors.collect(ros.propertyValidator('minBandwidthPercent', ros.validateNumber)(properties.minBandwidthPercent));
    errors.collect(ros.propertyValidator('limitType', ros.requiredValidator)(properties.limitType));
    if(properties.limitType && (typeof properties.limitType) !== 'object') {
        errors.collect(ros.propertyValidator('limitType', ros.validateAllowedValues)({
          data: properties.limitType,
          allowedValues: ["Absolute","Percent"],
        }));
    }
    errors.collect(ros.propertyValidator('limitType', ros.validateString)(properties.limitType));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosQosCarProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::QosCar` resource
 *
 * @param properties - the TypeScript properties of a `RosQosCarProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::QosCar` resource.
 */
// @ts-ignore TS6133
function rosQosCarPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosQosCarPropsValidator(properties).assertSuccess();
    }
    return {
      'LimitType': ros.stringToRosTemplate(properties.limitType),
      'Priority': ros.numberToRosTemplate(properties.priority),
      'QosId': ros.stringToRosTemplate(properties.qosId),
      'Description': ros.stringToRosTemplate(properties.description),
      'MaxBandwidthAbs': ros.numberToRosTemplate(properties.maxBandwidthAbs),
      'MaxBandwidthPercent': ros.numberToRosTemplate(properties.maxBandwidthPercent),
      'MinBandwidthAbs': ros.numberToRosTemplate(properties.minBandwidthAbs),
      'MinBandwidthPercent': ros.numberToRosTemplate(properties.minBandwidthPercent),
      'Name': ros.stringToRosTemplate(properties.name),
      'PercentSourceType': ros.stringToRosTemplate(properties.percentSourceType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::QosCar`, which is used to create a traffic throttling rule for a quality of service (QoS) policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `QosCar` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar
 */
export class RosQosCar extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::QosCar";

    /**
     * @Attribute QosCarId: The ID of the traffic throttling policy.
     */
    public readonly attrQosCarId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property limitType: The type of the traffic throttling policy. Valid values:
     * Absolute: throttles traffic by a specific bandwidth range.
     * Percent: throttles traffic by a specific range of bandwidth percentage.
     */
    public limitType: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the traffic throttling policy. A smaller value represents a higher
     * priority. If policies are assigned the same priority, the one applied the earliest
     * prevails. Valid values: 1 to 7.
     */
    public priority: number | ros.IResolvable;

    /**
     * @Property qosId: The ID of the QoS policy.
     */
    public qosId: string | ros.IResolvable;

    /**
     * @Property description: The description of the traffic throttling policy.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property maxBandwidthAbs: The maximum bandwidth. This parameter is required when LimitType is set to Absolute.
     */
    public maxBandwidthAbs: number | ros.IResolvable | undefined;

    /**
     * @Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG
     * instance.
     * This parameter is required when LimitType is set to Percent.
     */
    public maxBandwidthPercent: number | ros.IResolvable | undefined;

    /**
     * @Property minBandwidthAbs: The minimum bandwidth. This parameter is required when LimitType is set to Absolute.
     */
    public minBandwidthAbs: number | ros.IResolvable | undefined;

    /**
     * @Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG
     * instance.
     * This parameter is required when LimitType is set to Percent.
     */
    public minBandwidthPercent: number | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the traffic throttling policy. The name must be 2 to 128 characters in
     * length, and can contain Chinese characters, letters, digits, periods (.), underscores
     * (_), and hyphens (-).
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following
     * options are available:
     * CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
     * InternetUpBandwidth: Internet upstream bandwidth.
     */
    public percentSourceType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQosCarProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosQosCar.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrQosCarId = this.getAtt('QosCarId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.limitType = props.limitType;
        this.priority = props.priority;
        this.qosId = props.qosId;
        this.description = props.description;
        this.maxBandwidthAbs = props.maxBandwidthAbs;
        this.maxBandwidthPercent = props.maxBandwidthPercent;
        this.minBandwidthAbs = props.minBandwidthAbs;
        this.minBandwidthPercent = props.minBandwidthPercent;
        this.name = props.name;
        this.percentSourceType = props.percentSourceType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            limitType: this.limitType,
            priority: this.priority,
            qosId: this.qosId,
            description: this.description,
            maxBandwidthAbs: this.maxBandwidthAbs,
            maxBandwidthPercent: this.maxBandwidthPercent,
            minBandwidthAbs: this.minBandwidthAbs,
            minBandwidthPercent: this.minBandwidthPercent,
            name: this.name,
            percentSourceType: this.percentSourceType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosQosCarPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosQosPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qospolicy
 */
export interface RosQosPolicyProps {

    /**
     * @Property destCidr: The range of the destination IP addresses.
     * Specify the value of this parameter in CIDR notation. Example: 192.168.10.0\/24.
     */
    readonly destCidr: string | ros.IResolvable;

    /**
     * @Property destPortRange: The range of destination ports.
     * Valid values: 1 to 65535 and -1.
     * Set this parameter in one of the following formats:
     * 1\/200: a port range from 1 to 200
     * 80\/80: port 80
     * -1\/-1: all ports
     */
    readonly destPortRange: string | ros.IResolvable;

    /**
     * @Property ipProtocol: The type of the protocol that applies to the traffic classification rule.
     * The supported protocols provided in this topic are for reference only. The actual
     * protocols in the console shall prevail.
     */
    readonly ipProtocol: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the traffic throttling policy to which the traffic classification
     * rule belongs.
     */
    readonly priority: number | ros.IResolvable;

    /**
     * @Property qosId: The ID of the QoS policy.
     */
    readonly qosId: string | ros.IResolvable;

    /**
     * @Property sourceCidr: The range of the source IP addresses.
     * Specify the value of this parameter in CIDR notation. Example: 192.168.1.0\/24.
     */
    readonly sourceCidr: string | ros.IResolvable;

    /**
     * @Property sourcePortRange: The range of source ports.
     * Valid values: 1 to 65535 and -1.
     * Set this parameter in one of the following formats:
     * 1\/200: a port range from 1 to 200
     * 80\/80: port 80
     * -1\/-1: all ports
     */
    readonly sourcePortRange: string | ros.IResolvable;

    /**
     * @Property description: The description of the traffic classification rule.
     * The description must be 1 to 512 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property dpiGroupIds: The ID of the application group.
     * You can enter at most 100 application group IDs at a time.
     * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
     */
    readonly dpiGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property dpiSignatureIds: The ID of the application.
     * You can enter at most 100 application IDs at a time.
     * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
     */
    readonly dpiSignatureIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property endTime: The time when the traffic classification rule becomes invalid.
     * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
     * The time must be in UTC+8.
     */
    readonly endTime?: string | ros.IResolvable;

    /**
     * @Property name: The name of the traffic classification rule.
     * The name must be 2 to 100 characters in length, and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property startTime: The time when the traffic classification rule takes effect.
     * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
     * The time must be in UTC+8.
     */
    readonly startTime?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosQosPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosQosPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosQosPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('endTime', ros.validateString)(properties.endTime));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.requiredValidator)(properties.sourcePortRange));
    errors.collect(ros.propertyValidator('sourcePortRange', ros.validateString)(properties.sourcePortRange));
    errors.collect(ros.propertyValidator('sourceCidr', ros.requiredValidator)(properties.sourceCidr));
    errors.collect(ros.propertyValidator('sourceCidr', ros.validateString)(properties.sourceCidr));
    errors.collect(ros.propertyValidator('priority', ros.requiredValidator)(properties.priority));
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('startTime', ros.validateString)(properties.startTime));
    errors.collect(ros.propertyValidator('destPortRange', ros.requiredValidator)(properties.destPortRange));
    errors.collect(ros.propertyValidator('destPortRange', ros.validateString)(properties.destPortRange));
    if(properties.dpiGroupIds && (Array.isArray(properties.dpiGroupIds) || (typeof properties.dpiGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('dpiGroupIds', ros.validateLength)({
            data: properties.dpiGroupIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('dpiGroupIds', ros.listValidator(ros.validateString))(properties.dpiGroupIds));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('destCidr', ros.requiredValidator)(properties.destCidr));
    errors.collect(ros.propertyValidator('destCidr', ros.validateString)(properties.destCidr));
    if(properties.dpiSignatureIds && (Array.isArray(properties.dpiSignatureIds) || (typeof properties.dpiSignatureIds) === 'string')) {
        errors.collect(ros.propertyValidator('dpiSignatureIds', ros.validateLength)({
            data: properties.dpiSignatureIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('dpiSignatureIds', ros.listValidator(ros.validateString))(properties.dpiSignatureIds));
    errors.collect(ros.propertyValidator('qosId', ros.requiredValidator)(properties.qosId));
    errors.collect(ros.propertyValidator('qosId', ros.validateString)(properties.qosId));
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
    return errors.wrap('supplied properties not correct for "RosQosPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SAG::QosPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosQosPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SAG::QosPolicy` resource.
 */
// @ts-ignore TS6133
function rosQosPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosQosPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'DestCidr': ros.stringToRosTemplate(properties.destCidr),
      'DestPortRange': ros.stringToRosTemplate(properties.destPortRange),
      'IpProtocol': ros.stringToRosTemplate(properties.ipProtocol),
      'Priority': ros.numberToRosTemplate(properties.priority),
      'QosId': ros.stringToRosTemplate(properties.qosId),
      'SourceCidr': ros.stringToRosTemplate(properties.sourceCidr),
      'SourcePortRange': ros.stringToRosTemplate(properties.sourcePortRange),
      'Description': ros.stringToRosTemplate(properties.description),
      'DpiGroupIds': ros.listMapper(ros.stringToRosTemplate)(properties.dpiGroupIds),
      'DpiSignatureIds': ros.listMapper(ros.stringToRosTemplate)(properties.dpiSignatureIds),
      'EndTime': ros.stringToRosTemplate(properties.endTime),
      'Name': ros.stringToRosTemplate(properties.name),
      'StartTime': ros.stringToRosTemplate(properties.startTime),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::QosPolicy`, which is used to create a traffic classification rule for a quality of service (QoS) policy.
 * @Note This class does not contain additional functions, so it is recommended to use the `QosPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qospolicy
 */
export class RosQosPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::QosPolicy";

    /**
     * @Attribute QosPolicyId: The ID of the traffic classification rule.
     */
    public readonly attrQosPolicyId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property destCidr: The range of the destination IP addresses.
     * Specify the value of this parameter in CIDR notation. Example: 192.168.10.0\/24.
     */
    public destCidr: string | ros.IResolvable;

    /**
     * @Property destPortRange: The range of destination ports.
     * Valid values: 1 to 65535 and -1.
     * Set this parameter in one of the following formats:
     * 1\/200: a port range from 1 to 200
     * 80\/80: port 80
     * -1\/-1: all ports
     */
    public destPortRange: string | ros.IResolvable;

    /**
     * @Property ipProtocol: The type of the protocol that applies to the traffic classification rule.
     * The supported protocols provided in this topic are for reference only. The actual
     * protocols in the console shall prevail.
     */
    public ipProtocol: string | ros.IResolvable;

    /**
     * @Property priority: The priority of the traffic throttling policy to which the traffic classification
     * rule belongs.
     */
    public priority: number | ros.IResolvable;

    /**
     * @Property qosId: The ID of the QoS policy.
     */
    public qosId: string | ros.IResolvable;

    /**
     * @Property sourceCidr: The range of the source IP addresses.
     * Specify the value of this parameter in CIDR notation. Example: 192.168.1.0\/24.
     */
    public sourceCidr: string | ros.IResolvable;

    /**
     * @Property sourcePortRange: The range of source ports.
     * Valid values: 1 to 65535 and -1.
     * Set this parameter in one of the following formats:
     * 1\/200: a port range from 1 to 200
     * 80\/80: port 80
     * -1\/-1: all ports
     */
    public sourcePortRange: string | ros.IResolvable;

    /**
     * @Property description: The description of the traffic classification rule.
     * The description must be 1 to 512 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property dpiGroupIds: The ID of the application group.
     * You can enter at most 100 application group IDs at a time.
     * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
     */
    public dpiGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property dpiSignatureIds: The ID of the application.
     * You can enter at most 100 application IDs at a time.
     * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
     */
    public dpiSignatureIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property endTime: The time when the traffic classification rule becomes invalid.
     * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
     * The time must be in UTC+8.
     */
    public endTime: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the traffic classification rule.
     * The name must be 2 to 100 characters in length, and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property startTime: The time when the traffic classification rule takes effect.
     * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
     * The time must be in UTC+8.
     */
    public startTime: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQosPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosQosPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrQosPolicyId = this.getAtt('QosPolicyId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.destCidr = props.destCidr;
        this.destPortRange = props.destPortRange;
        this.ipProtocol = props.ipProtocol;
        this.priority = props.priority;
        this.qosId = props.qosId;
        this.sourceCidr = props.sourceCidr;
        this.sourcePortRange = props.sourcePortRange;
        this.description = props.description;
        this.dpiGroupIds = props.dpiGroupIds;
        this.dpiSignatureIds = props.dpiSignatureIds;
        this.endTime = props.endTime;
        this.name = props.name;
        this.startTime = props.startTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            destCidr: this.destCidr,
            destPortRange: this.destPortRange,
            ipProtocol: this.ipProtocol,
            priority: this.priority,
            qosId: this.qosId,
            sourceCidr: this.sourceCidr,
            sourcePortRange: this.sourcePortRange,
            description: this.description,
            dpiGroupIds: this.dpiGroupIds,
            dpiSignatureIds: this.dpiSignatureIds,
            endTime: this.endTime,
            name: this.name,
            startTime: this.startTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosQosPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSerialNumberBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-serialnumberbinding
 */
export interface RosSerialNumberBindingProps {

    /**
     * @Property serialNumber: The serial number (SN) of the SAG device.
     */
    readonly serialNumber: string | ros.IResolvable;

    /**
     * @Property smartAgId: The ID of the SAG instance.
     */
    readonly smartAgId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSerialNumberBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosSerialNumberBindingProps`
 *
 * @returns the result of the validation.
 */
function RosSerialNumberBindingPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosSerialNumberBindingPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSerialNumberBindingPropsValidator(properties).assertSuccess();
    }
    return {
      'SerialNumber': ros.stringToRosTemplate(properties.serialNumber),
      'SmartAGId': ros.stringToRosTemplate(properties.smartAgId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::SerialNumberBinding`, which is used to associate a Smart Access Gateway (SAG) device with an SAG instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `SerialNumberBinding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-serialnumberbinding
 */
export class RosSerialNumberBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SerialNumberBinding";

    /**
     * @Attribute SmartAGId: The ID of the SAG instance.
     */
    public readonly attrSmartAgId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property serialNumber: The serial number (SN) of the SAG device.
     */
    public serialNumber: string | ros.IResolvable;

    /**
     * @Property smartAgId: The ID of the SAG instance.
     */
    public smartAgId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSerialNumberBindingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSerialNumberBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSmartAgId = this.getAtt('SmartAGId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.serialNumber = props.serialNumber;
        this.smartAgId = props.smartAgId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            serialNumber: this.serialNumber,
            smartAgId: this.smartAgId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSerialNumberBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSmartAccessGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgateway
 */
export interface RosSmartAccessGatewayProps {

    /**
     * @Property buyerMessage: The remarks left by the buyer.
     */
    readonly buyerMessage: string | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the SAG instance. 
     * Set the value to PREPAY, which specifies the subscription billing method.
     */
    readonly chargeType: string | ros.IResolvable;

    /**
     * @Property hardWareSpec: The type of the SAG instance. Valid values:
     * sag-100wm
     * sag-1000
     * sag-vcpe
     */
    readonly hardWareSpec: string | ros.IResolvable;

    /**
     * @Property haType: The deployment mode. Valid values:
     * no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
     * cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
     * device and the other serves as a standby device. Only the active device is connected
     * to Alibaba Cloud. If the active device is not working as expected, you must manually
     * perform a switchover.
     * warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
     * Alibaba Cloud. If an active device is not working as expected, a failover is automatically
     * performed.
     * Note If you want to create an SAG vCPE instance, set the value to warm_backup.
     */
    readonly haType: string | ros.IResolvable;

    /**
     * @Property maxBandWidth: The bandwidth of the SAG instance.
     * If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit\/s.
     * If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit\/s.
     * If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit\/s.
     */
    readonly maxBandWidth: number | ros.IResolvable;

    /**
     * @Property period: The subscription period of the SAG instance. Unit: months.
     * Valid values: 1 to 9, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;

    /**
     * @Property receiverAddress: The detailed address of the recipient.
     */
    readonly receiverAddress: string | ros.IResolvable;

    /**
     * @Property receiverCity: The city of the recipient address.
     */
    readonly receiverCity: string | ros.IResolvable;

    /**
     * @Property receiverCountry: The country of the recipient address.
     */
    readonly receiverCountry: string | ros.IResolvable;

    /**
     * @Property receiverDistrict: The district of the recipient address.
     */
    readonly receiverDistrict: string | ros.IResolvable;

    /**
     * @Property receiverEmail: The email address of the recipient.
     */
    readonly receiverEmail: string | ros.IResolvable;

    /**
     * @Property receiverMobile: The mobile phone number of the recipient.
     */
    readonly receiverMobile: string | ros.IResolvable;

    /**
     * @Property receiverName: The name of the recipient.
     */
    readonly receiverName: string | ros.IResolvable;

    /**
     * @Property receiverState: The province of the recipient address.
     */
    readonly receiverState: string | ros.IResolvable;

    /**
     * @Property receiverTown: The town of the recipient address.
     */
    readonly receiverTown: string | ros.IResolvable;

    /**
     * @Property receiverZip: The postcode of the recipient address.
     */
    readonly receiverZip: string | ros.IResolvable;

    /**
     * @Property activate: Activate SAG or not. Default is False
     */
    readonly activate?: boolean | ros.IResolvable;

    /**
     * @Property alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
     * true: yes
     * false (default): no
     */
    readonly alreadyHaveSag?: boolean | ros.IResolvable;

    /**
     * @Property autoPay: Specifies whether to enable auto-payment for the instance. Valid values:
     * true: yes
     * false: no
     * If you set the parameter to false, go to Billing Management to complete the payment
     * after you call this operation. After you complete the payment, the instance can be
     * created.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
     * do not overlap with each other.
     * If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
     * the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
     * Protocol (DHCP) enabled.
     */
    readonly cidrBlock?: string | ros.IResolvable;

    /**
     * @Property description: The description of the SAG instance.
     * The description must be 2 to 256 characters in length, and can contain digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property name: The name of the SAG instance.
     * The name must be 2 to 128 characters in length and can contain digits, periods (.),
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property receiverPhone: The landline phone number of the recipient.
     */
    readonly receiverPhone?: string | ros.IResolvable;

    /**
     * @Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
     * static: static routing.
     * dynamic: dynamic routing.
     */
    readonly routingStrategy?: string | ros.IResolvable;

    /**
     * @Property securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
     * than zero second.
     * Unit: second.
     */
    readonly securityLockThreshold?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSmartAccessGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosSmartAccessGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosSmartAccessGatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
    if(properties.hardWareSpec && (typeof properties.hardWareSpec) !== 'object') {
        errors.collect(ros.propertyValidator('hardWareSpec', ros.validateAllowedValues)({
          data: properties.hardWareSpec,
          allowedValues: ["sag-100wm","sag-1000","sag-vcpe"],
        }));
    }
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
    if(properties.haType && (typeof properties.haType) !== 'object') {
        errors.collect(ros.propertyValidator('haType', ros.validateAllowedValues)({
          data: properties.haType,
          allowedValues: ["cold_backup","no_backup","warm_backup"],
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
function rosSmartAccessGatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSmartAccessGatewayPropsValidator(properties).assertSuccess();
    }
    return {
      'BuyerMessage': ros.stringToRosTemplate(properties.buyerMessage),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'HardWareSpec': ros.stringToRosTemplate(properties.hardWareSpec),
      'HaType': ros.stringToRosTemplate(properties.haType),
      'MaxBandWidth': ros.numberToRosTemplate(properties.maxBandWidth),
      'Period': ros.numberToRosTemplate(properties.period),
      'ReceiverAddress': ros.stringToRosTemplate(properties.receiverAddress),
      'ReceiverCity': ros.stringToRosTemplate(properties.receiverCity),
      'ReceiverCountry': ros.stringToRosTemplate(properties.receiverCountry),
      'ReceiverDistrict': ros.stringToRosTemplate(properties.receiverDistrict),
      'ReceiverEmail': ros.stringToRosTemplate(properties.receiverEmail),
      'ReceiverMobile': ros.stringToRosTemplate(properties.receiverMobile),
      'ReceiverName': ros.stringToRosTemplate(properties.receiverName),
      'ReceiverState': ros.stringToRosTemplate(properties.receiverState),
      'ReceiverTown': ros.stringToRosTemplate(properties.receiverTown),
      'ReceiverZip': ros.stringToRosTemplate(properties.receiverZip),
      'Activate': ros.booleanToRosTemplate(properties.activate),
      'AlreadyHaveSag': ros.booleanToRosTemplate(properties.alreadyHaveSag),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'CidrBlock': ros.stringToRosTemplate(properties.cidrBlock),
      'Description': ros.stringToRosTemplate(properties.description),
      'Name': ros.stringToRosTemplate(properties.name),
      'ReceiverPhone': ros.stringToRosTemplate(properties.receiverPhone),
      'RoutingStrategy': ros.stringToRosTemplate(properties.routingStrategy),
      'SecurityLockThreshold': ros.numberToRosTemplate(properties.securityLockThreshold),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::SmartAccessGateway`, which is used to create a Smart Access Gateway (SAG) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `SmartAccessGateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgateway
 */
export class RosSmartAccessGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SmartAccessGateway";

    /**
     * @Attribute OrderId: The ID of the order.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute SmartAGId: The ID of the SAG instance.
     */
    public readonly attrSmartAgId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property buyerMessage: The remarks left by the buyer.
     */
    public buyerMessage: string | ros.IResolvable;

    /**
     * @Property chargeType: The billing method of the SAG instance. 
     * Set the value to PREPAY, which specifies the subscription billing method.
     */
    public chargeType: string | ros.IResolvable;

    /**
     * @Property hardWareSpec: The type of the SAG instance. Valid values:
     * sag-100wm
     * sag-1000
     * sag-vcpe
     */
    public hardWareSpec: string | ros.IResolvable;

    /**
     * @Property haType: The deployment mode. Valid values:
     * no_backup: You buy only one SAG device to connect private networks to Alibaba Cloud.
     * cold_backup: You buy two SAG devices in active-standby mode. One SAG device serves as an active
     * device and the other serves as a standby device. Only the active device is connected
     * to Alibaba Cloud. If the active device is not working as expected, you must manually
     * perform a switchover.
     * warm_backup: You buy two SAG devices in active-active mode. Both SAG devices are connected to
     * Alibaba Cloud. If an active device is not working as expected, a failover is automatically
     * performed.
     * Note If you want to create an SAG vCPE instance, set the value to warm_backup.
     */
    public haType: string | ros.IResolvable;

    /**
     * @Property maxBandWidth: The bandwidth of the SAG instance.
     * If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit\/s.
     * If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit\/s.
     * If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit\/s.
     */
    public maxBandWidth: number | ros.IResolvable;

    /**
     * @Property period: The subscription period of the SAG instance. Unit: months.
     * Valid values: 1 to 9, 12, 24, and 36.
     */
    public period: number | ros.IResolvable;

    /**
     * @Property receiverAddress: The detailed address of the recipient.
     */
    public receiverAddress: string | ros.IResolvable;

    /**
     * @Property receiverCity: The city of the recipient address.
     */
    public receiverCity: string | ros.IResolvable;

    /**
     * @Property receiverCountry: The country of the recipient address.
     */
    public receiverCountry: string | ros.IResolvable;

    /**
     * @Property receiverDistrict: The district of the recipient address.
     */
    public receiverDistrict: string | ros.IResolvable;

    /**
     * @Property receiverEmail: The email address of the recipient.
     */
    public receiverEmail: string | ros.IResolvable;

    /**
     * @Property receiverMobile: The mobile phone number of the recipient.
     */
    public receiverMobile: string | ros.IResolvable;

    /**
     * @Property receiverName: The name of the recipient.
     */
    public receiverName: string | ros.IResolvable;

    /**
     * @Property receiverState: The province of the recipient address.
     */
    public receiverState: string | ros.IResolvable;

    /**
     * @Property receiverTown: The town of the recipient address.
     */
    public receiverTown: string | ros.IResolvable;

    /**
     * @Property receiverZip: The postcode of the recipient address.
     */
    public receiverZip: string | ros.IResolvable;

    /**
     * @Property activate: Activate SAG or not. Default is False
     */
    public activate: boolean | ros.IResolvable | undefined;

    /**
     * @Property alreadyHaveSag: Specifies whether you already have an SAG device. Valid values:
     * true: yes
     * false (default): no
     */
    public alreadyHaveSag: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Specifies whether to enable auto-payment for the instance. Valid values:
     * true: yes
     * false: no
     * If you set the parameter to false, go to Billing Management to complete the payment
     * after you call this operation. After you complete the payment, the instance can be
     * created.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property cidrBlock: The CIDR blocks of terminals in the private network. Make sure that the CIDR blocks
     * do not overlap with each other.
     * If the LAN port of the SAG device dynamically assigns IP addresses, IP addresses within
     * the first CIDR block are assigned to terminals that have the Dynamic Host Configuration
     * Protocol (DHCP) enabled.
     */
    public cidrBlock: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the SAG instance.
     * The description must be 2 to 256 characters in length, and can contain digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the SAG instance.
     * The name must be 2 to 128 characters in length and can contain digits, periods (.),
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property receiverPhone: The landline phone number of the recipient.
     */
    public receiverPhone: string | ros.IResolvable | undefined;

    /**
     * @Property routingStrategy: The policy to advertise routes from the private network to Alibaba Cloud.
     * static: static routing.
     * dynamic: dynamic routing.
     */
    public routingStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property securityLockThreshold: The time that a disconnected SAG device remain locked. The time must be no shorter
     * than zero second.
     * Unit: second.
     */
    public securityLockThreshold: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSmartAccessGatewayProps, enableResourcePropertyConstraint: boolean) {
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


    protected get rosProperties(): { [key: string]: any }  {
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
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSmartAccessGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSmartAccessGatewayBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
 */
export interface RosSmartAccessGatewayBindingProps {

    /**
     * @Property ccnId: The ID of the CCN instance to bind.
     */
    readonly ccnId: string | ros.IResolvable;

    /**
     * @Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    readonly smartAgId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSmartAccessGatewayBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosSmartAccessGatewayBindingProps`
 *
 * @returns the result of the validation.
 */
function RosSmartAccessGatewayBindingPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
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
function rosSmartAccessGatewayBindingPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSmartAccessGatewayBindingPropsValidator(properties).assertSuccess();
    }
    return {
      'CcnId': ros.stringToRosTemplate(properties.ccnId),
      'SmartAGId': ros.stringToRosTemplate(properties.smartAgId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SAG::SmartAccessGatewayBinding`, which is used to bind a Smart Access Gateway (SAG) instance to a specified Cloud Connect Network (CCN) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `SmartAccessGatewayBinding` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-smartaccessgatewaybinding
 */
export class RosSmartAccessGatewayBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SmartAccessGatewayBinding";

    /**
     * @Attribute SmartAGId: The ID of the Smart Access Gateway instance.
     */
    public readonly attrSmartAgId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ccnId: The ID of the CCN instance to bind.
     */
    public ccnId: string | ros.IResolvable;

    /**
     * @Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    public smartAgId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSmartAccessGatewayBindingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSmartAccessGatewayBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSmartAgId = this.getAtt('SmartAGId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ccnId = props.ccnId;
        this.smartAgId = props.smartAgId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ccnId: this.ccnId,
            smartAgId: this.smartAgId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSmartAccessGatewayBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
