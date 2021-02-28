// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::SAG::ACL`
 */
export interface RosACLProps {

    /**
     * @Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
     */
    readonly name: string;
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
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::SAG::ACL`
 */
export class RosACL extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACL";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AclId: Access control set ID.
     */
    public readonly attrAclId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
     */
    public name: string;

    /**
     * Create a new `ALIYUN::SAG::ACL`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosACLProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosACL.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclId = ros.Token.asString(this.getAtt('AclId'));

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
 * Properties for defining a `ALIYUN::SAG::ACLAssociation`
 */
export interface RosACLAssociationProps {

    /**
     * @Property aclId: Access control ID.
     */
    readonly aclId: string;

    /**
     * @Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    readonly smartAgId: string;
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
      AclId: ros.stringToRosTemplate(properties.aclId),
      SmartAGId: ros.stringToRosTemplate(properties.smartAgId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SAG::ACLAssociation`
 */
export class RosACLAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACLAssociation";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclId: Access control ID.
     */
    public aclId: string;

    /**
     * @Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    public smartAgId: string;

    /**
     * Create a new `ALIYUN::SAG::ACLAssociation`.
     *
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
 * Properties for defining a `ALIYUN::SAG::ACLRule`
 */
export interface RosACLRuleProps {

    /**
     * @Property aclId: Access control ID.
     */
    readonly aclId: string;

    /**
     * @Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    readonly destCidr: string;

    /**
     * @Property destPortRange: Destination port range, 80/80.
     */
    readonly destPortRange: string;

    /**
     * @Property direction: Regular direction.
     * Value: in|out
     */
    readonly direction: string;

    /**
     * @Property ipProtocol: Protocol, not case sensitive.
     */
    readonly ipProtocol: string;

    /**
     * @Property policy: Access: accept|drop
     */
    readonly policy: string;

    /**
     * @Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    readonly sourceCidr: string;

    /**
     * @Property sourcePortRange: Source port range, 80/80.
     */
    readonly sourcePortRange: string;

    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    readonly description?: string;

    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    readonly priority?: number;
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
    errors.collect(ros.propertyValidator('destCidr', ros.requiredValidator)(properties.destCidr));
    errors.collect(ros.propertyValidator('destCidr', ros.validateString)(properties.destCidr));
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
    errors.collect(ros.propertyValidator('ipProtocol', ros.requiredValidator)(properties.ipProtocol));
    errors.collect(ros.propertyValidator('ipProtocol', ros.validateString)(properties.ipProtocol));
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
export class RosACLRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::ACLRule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AcrId: Access control rule ID.
     */
    public readonly attrAcrId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclId: Access control ID.
     */
    public aclId: string;

    /**
     * @Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    public destCidr: string;

    /**
     * @Property destPortRange: Destination port range, 80/80.
     */
    public destPortRange: string;

    /**
     * @Property direction: Regular direction.
     * Value: in|out
     */
    public direction: string;

    /**
     * @Property ipProtocol: Protocol, not case sensitive.
     */
    public ipProtocol: string;

    /**
     * @Property policy: Access: accept|drop
     */
    public policy: string;

    /**
     * @Property sourceCidr: Source address, CIDR format and IP address range in IPv4 format.
     */
    public sourceCidr: string;

    /**
     * @Property sourcePortRange: Source port range, 80/80.
     */
    public sourcePortRange: string;

    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    public description: string | undefined;

    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    public priority: number | undefined;

    /**
     * Create a new `ALIYUN::SAG::ACLRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosACLRuleProps, enableResourcePropertyConstraint: boolean) {
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
            priority: this.priority,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosACLRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::SAG::CloudConnectNetwork`
 */
export interface RosCloudConnectNetworkProps {

    /**
     * @Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
     */
    readonly description?: string;

    /**
     * @Property isDefault: Whether is created by system
     */
    readonly isDefault?: boolean | ros.IResolvable;

    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
     */
    readonly name?: string;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
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
      Description: ros.stringToRosTemplate(properties.description),
      IsDefault: ros.booleanToRosTemplate(properties.isDefault),
      Name: ros.stringToRosTemplate(properties.name),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::SAG::CloudConnectNetwork`
 */
export class RosCloudConnectNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::CloudConnectNetwork";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CcnId: The ID of the CCN instance.
     */
    public readonly attrCcnId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
     */
    public description: string | undefined;

    /**
     * @Property isDefault: Whether is created by system
     */
    public isDefault: boolean | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
     */
    public name: string | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public readonly tags: ros.TagManager;

    /**
     * Create a new `ALIYUN::SAG::CloudConnectNetwork`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCloudConnectNetworkProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCloudConnectNetwork.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCcnId = ros.Token.asString(this.getAtt('CcnId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.isDefault = props.isDefault;
        this.name = props.name;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::SAG::CloudConnectNetwork", props.tags, { tagPropertyName: 'tags' });
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            isDefault: this.isDefault,
            name: this.name,
            tags: this.tags.renderTags(),
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCloudConnectNetworkPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::SAG::GrantCcnToCen`
 */
export interface RosGrantCcnToCenProps {

    /**
     * @Property ccnInstanceId: The ID of the CCN instance.
     */
    readonly ccnInstanceId: string;

    /**
     * @Property cenInstanceId: The ID of the CEN instance.
     */
    readonly cenInstanceId: string;

    /**
     * @Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    readonly cenUid: string;
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
      CcnInstanceId: ros.stringToRosTemplate(properties.ccnInstanceId),
      CenInstanceId: ros.stringToRosTemplate(properties.cenInstanceId),
      CenUid: ros.stringToRosTemplate(properties.cenUid),
    };
}

/**
 * A ROS template type:  `ALIYUN::SAG::GrantCcnToCen`
 */
export class RosGrantCcnToCen extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::GrantCcnToCen";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CcnInstanceId: The ID of the CCN instance.
     */
    public readonly attrCcnInstanceId: any;

    /**
     * @Attribute CenInstanceId: The ID of the CEN instance.
     */
    public readonly attrCenInstanceId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ccnInstanceId: The ID of the CCN instance.
     */
    public ccnInstanceId: string;

    /**
     * @Property cenInstanceId: The ID of the CEN instance.
     */
    public cenInstanceId: string;

    /**
     * @Property cenUid: The ID of the account to which the CEN instance belongs.
     */
    public cenUid: string;

    /**
     * Create a new `ALIYUN::SAG::GrantCcnToCen`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGrantCcnToCenProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGrantCcnToCen.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCcnInstanceId = ros.Token.asString(this.getAtt('CcnInstanceId'));
        this.attrCenInstanceId = ros.Token.asString(this.getAtt('CenInstanceId'));

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
 * Properties for defining a `ALIYUN::SAG::SmartAccessGatewayBinding`
 */
export interface RosSmartAccessGatewayBindingProps {

    /**
     * @Property ccnId: The ID of the CCN instance to bind.
     */
    readonly ccnId: string;

    /**
     * @Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    readonly smartAgId: string;
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
      CcnId: ros.stringToRosTemplate(properties.ccnId),
      SmartAGId: ros.stringToRosTemplate(properties.smartAgId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SAG::SmartAccessGatewayBinding`
 */
export class RosSmartAccessGatewayBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SmartAccessGatewayBinding";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SmartAGId: The ID of the Smart Access Gateway instance.
     */
    public readonly attrSmartAgId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ccnId: The ID of the CCN instance to bind.
     */
    public ccnId: string;

    /**
     * @Property smartAgId: The ID of the Smart Access Gateway instance.
     */
    public smartAgId: string;

    /**
     * Create a new `ALIYUN::SAG::SmartAccessGatewayBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSmartAccessGatewayBindingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSmartAccessGatewayBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSmartAgId = ros.Token.asString(this.getAtt('SmartAGId'));

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
