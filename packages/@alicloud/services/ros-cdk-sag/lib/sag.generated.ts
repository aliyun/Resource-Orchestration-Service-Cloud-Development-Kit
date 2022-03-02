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
    public readonly attrAclId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
     */
    public name: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::SAG::ACL`.
     *
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
 * Properties for defining a `ALIYUN::SAG::ACLAssociation`
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
    public aclId: string | ros.IResolvable;

    /**
     * @Property smartAgId: An intelligent gateway instance that needs to bind access control.
     */
    public smartAgId: string | ros.IResolvable;

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
    readonly aclId: string | ros.IResolvable;

    /**
     * @Property destCidr: Destination address, CIDR format and IP address range in IPv4 format.
     */
    readonly destCidr: string | ros.IResolvable;

    /**
     * @Property destPortRange: Destination port range, 80/80.
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
     * @Property sourcePortRange: Source port range, 80/80.
     */
    readonly sourcePortRange: string | ros.IResolvable;

    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    readonly priority?: number | ros.IResolvable;
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
     * @Property destPortRange: Destination port range, 80/80.
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
     * @Property sourcePortRange: Source port range, 80/80.
     */
    public sourcePortRange: string | ros.IResolvable;

    /**
     * @Property description: Rule description information, ranging from 1 to 512 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property priority: Priority, ranging from 1 to 100.
     * Default: 1
     */
    public priority: number | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SAG::ACLRule`.
     *
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
    readonly description?: string | ros.IResolvable;

    /**
     * @Property isDefault: Whether is created by system
     */
    readonly isDefault?: boolean | ros.IResolvable;

    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
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
      Description: ros.stringToRosTemplate(properties.description),
      IsDefault: ros.booleanToRosTemplate(properties.isDefault),
      Name: ros.stringToRosTemplate(properties.name),
      Tags: ros.listMapper(rosCloudConnectNetworkTagsPropertyToRosTemplate)(properties.tags),
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
    public readonly attrCcnId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: The description of the CCN instance.
     * The description can contain 2 to 256 characters. The description cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property isDefault: Whether is created by system
     */
    public isDefault: boolean | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the CCN instance.
     * The name can contain 2 to 128 characters including a-z, A-Z, 0-9, chinese, underlines, and hyphens. The name must start with an English letter, but cannot start with http:// or https://.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosCloudConnectNetwork.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::SAG::CloudConnectNetwork`.
     *
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
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::SAG::GrantCcnToCen`
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
     * Create a new `ALIYUN::SAG::GrantCcnToCen`.
     *
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
 * Properties for defining a `ALIYUN::SAG::SerialNumberBinding`
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
      SerialNumber: ros.stringToRosTemplate(properties.serialNumber),
      SmartAGId: ros.stringToRosTemplate(properties.smartAgId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SAG::SerialNumberBinding`
 */
export class RosSerialNumberBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SerialNumberBinding";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `ALIYUN::SAG::SerialNumberBinding`.
     *
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
 * Properties for defining a `ALIYUN::SAG::SmartAccessGateway`
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
     * If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
     * If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
     * If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
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
export class RosSmartAccessGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SAG::SmartAccessGateway";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * If you want to create an SAG CPE instance and the model is sag-100wm, valid values of this parameter are 2 to 50. Unit: Mbit/s.
     * If you want to create an SAG CPE instance and the model is sag-1000, valid values of this parameter are 10 to 500. Unit: Mbit/s.
     * If you want to create an SAG vCPE instance, valid values of this parameter are 10 to 1000. Unit: Mbit/s.
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
     * Create a new `ALIYUN::SAG::SmartAccessGateway`.
     *
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
 * Properties for defining a `ALIYUN::SAG::SmartAccessGatewayBinding`
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
     * Create a new `ALIYUN::SAG::SmartAccessGatewayBinding`.
     *
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
