// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::CMS::Contact`
 */
export interface RosContactProps {

    /**
     * @Property channels: undefined
     */
    readonly channels: RosContact.ChannelsProperty | ros.IResolvable;

    /**
     * @Property contactName: The name of the alarm contact.
     */
    readonly contactName: string;

    /**
     * @Property describe: The description of the alert contact.
     */
    readonly describe: string;
}

/**
 * Determine whether the given properties match those of a `RosContactProps`
 *
 * @param properties - the TypeScript properties of a `RosContactProps`
 *
 * @returns the result of the validation.
 */
function RosContactPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('describe', ros.requiredValidator)(properties.describe));
    errors.collect(ros.propertyValidator('describe', ros.validateString)(properties.describe));
    errors.collect(ros.propertyValidator('contactName', ros.requiredValidator)(properties.contactName));
    errors.collect(ros.propertyValidator('contactName', ros.validateString)(properties.contactName));
    errors.collect(ros.propertyValidator('channels', ros.requiredValidator)(properties.channels));
    errors.collect(ros.propertyValidator('channels', RosContact_ChannelsPropertyValidator)(properties.channels));
    return errors.wrap('supplied properties not correct for "RosContactProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::Contact` resource
 *
 * @param properties - the TypeScript properties of a `RosContactProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::Contact` resource.
 */
// @ts-ignore TS6133
function rosContactPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosContactPropsValidator(properties).assertSuccess();
    }
    return {
      Channels: rosContactChannelsPropertyToRosTemplate(properties.channels),
      ContactName: ros.stringToRosTemplate(properties.contactName),
      Describe: ros.stringToRosTemplate(properties.describe),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::Contact`
 */
export class RosContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::Contact";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ContactName: The name of the alarm contact.
     */
    public readonly attrContactName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property channels: undefined
     */
    public channels: RosContact.ChannelsProperty | ros.IResolvable;

    /**
     * @Property contactName: The name of the alarm contact.
     */
    public contactName: string;

    /**
     * @Property describe: The description of the alert contact.
     */
    public describe: string;

    /**
     * Create a new `ALIYUN::CMS::Contact`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContactProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosContact.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactName = ros.Token.asString(this.getAtt('ContactName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.channels = props.channels;
        this.contactName = props.contactName;
        this.describe = props.describe;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            channels: this.channels,
            contactName: this.contactName,
            describe: this.describe,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosContactPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosContact {
    /**
     * @stability external
     */
    export interface ChannelsProperty {
        /**
         * @Property mail: The email address of the contact.
         */
        readonly mail?: string;
        /**
         * @Property aliIm: The TradeManager ID.
         */
        readonly aliIm?: string;
        /**
         * @Property dingWebHook: The DingTalk Chatbot address.
         */
        readonly dingWebHook?: string;
        /**
         * @Property sms: The mobile phone number of the contact.
         */
        readonly sms?: string;
    }
}
/**
 * Determine whether the given properties match those of a `ChannelsProperty`
 *
 * @param properties - the TypeScript properties of a `ChannelsProperty`
 *
 * @returns the result of the validation.
 */
function RosContact_ChannelsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mail', ros.validateString)(properties.mail));
    errors.collect(ros.propertyValidator('aliIm', ros.validateString)(properties.aliIm));
    errors.collect(ros.propertyValidator('dingWebHook', ros.validateString)(properties.dingWebHook));
    errors.collect(ros.propertyValidator('sms', ros.validateString)(properties.sms));
    return errors.wrap('supplied properties not correct for "ChannelsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::Contact.Channels` resource
 *
 * @param properties - the TypeScript properties of a `ChannelsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::Contact.Channels` resource.
 */
// @ts-ignore TS6133
function rosContactChannelsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContact_ChannelsPropertyValidator(properties).assertSuccess();
    return {
      Mail: ros.stringToRosTemplate(properties.mail),
      AliIM: ros.stringToRosTemplate(properties.aliIm),
      DingWebHook: ros.stringToRosTemplate(properties.dingWebHook),
      SMS: ros.stringToRosTemplate(properties.sms),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::ContactGroup`
 */
export interface RosContactGroupProps {

    /**
     * @Property contactGroupName: The name of the alert contact group.
     */
    readonly contactGroupName: string;

    /**
     * @Property contactNames: The name of the alert contact.
     */
    readonly contactNames: string[];

    /**
     * @Property describe: The description of the alert contact group.
     */
    readonly describe: string;
}

/**
 * Determine whether the given properties match those of a `RosContactGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosContactGroupProps`
 *
 * @returns the result of the validation.
 */
function RosContactGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('describe', ros.requiredValidator)(properties.describe));
    errors.collect(ros.propertyValidator('describe', ros.validateString)(properties.describe));
    errors.collect(ros.propertyValidator('contactGroupName', ros.requiredValidator)(properties.contactGroupName));
    errors.collect(ros.propertyValidator('contactGroupName', ros.validateString)(properties.contactGroupName));
    errors.collect(ros.propertyValidator('contactNames', ros.requiredValidator)(properties.contactNames));
    if(properties.contactNames && (Array.isArray(properties.contactNames) || (typeof properties.contactNames) === 'string')) {
        errors.collect(ros.propertyValidator('contactNames', ros.validateLength)({
            data: properties.contactNames.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('contactNames', ros.listValidator(ros.validateString))(properties.contactNames));
    return errors.wrap('supplied properties not correct for "RosContactGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::ContactGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosContactGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::ContactGroup` resource.
 */
// @ts-ignore TS6133
function rosContactGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosContactGroupPropsValidator(properties).assertSuccess();
    }
    return {
      ContactGroupName: ros.stringToRosTemplate(properties.contactGroupName),
      ContactNames: ros.listMapper(ros.stringToRosTemplate)(properties.contactNames),
      Describe: ros.stringToRosTemplate(properties.describe),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::ContactGroup`
 */
export class RosContactGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::ContactGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ContactGroupName: The name of the alert contact group.
     */
    public readonly attrContactGroupName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property contactGroupName: The name of the alert contact group.
     */
    public contactGroupName: string;

    /**
     * @Property contactNames: The name of the alert contact.
     */
    public contactNames: string[];

    /**
     * @Property describe: The description of the alert contact group.
     */
    public describe: string;

    /**
     * Create a new `ALIYUN::CMS::ContactGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContactGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosContactGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactGroupName = ros.Token.asString(this.getAtt('ContactGroupName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.contactGroupName = props.contactGroupName;
        this.contactNames = props.contactNames;
        this.describe = props.describe;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            contactGroupName: this.contactGroupName,
            contactNames: this.contactNames,
            describe: this.describe,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosContactGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CMS::DynamicTagGroup`
 */
export interface RosDynamicTagGroupProps {

    /**
     * @Property contactGroupList: Alarm contacts.
     */
    readonly contactGroupList: string[];

    /**
     * @Property tagKey: Tag key.
     */
    readonly tagKey: string;

    /**
     * @Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
     * true: enable installation
     * Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
     * false: disable installation
     */
    readonly enableInstallAgent?: boolean | ros.IResolvable;

    /**
     * @Property enableSubscribeEvent: Whether the event subscription is enabled. Values are
     * :true: enable event subscription
     * false: disable event subscription
     */
    readonly enableSubscribeEvent?: boolean | ros.IResolvable;

    /**
     * @Property matchExpress: Matching list. Only supports one currently.
     */
    readonly matchExpress?: Array<RosDynamicTagGroup.MatchExpressProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
     * and: the relationship between
     * or: the relationship or the
     * Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
     */
    readonly matchExpressFilterRelation?: string;

    /**
     * @Property templateIdList: Alarm template ID list.
     * When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
     */
    readonly templateIdList?: string[];
}

/**
 * Determine whether the given properties match those of a `RosDynamicTagGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDynamicTagGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDynamicTagGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('contactGroupList', ros.requiredValidator)(properties.contactGroupList));
    errors.collect(ros.propertyValidator('contactGroupList', ros.listValidator(ros.validateString))(properties.contactGroupList));
    if(properties.matchExpressFilterRelation && (typeof properties.matchExpressFilterRelation) !== 'object') {
        errors.collect(ros.propertyValidator('matchExpressFilterRelation', ros.validateAllowedValues)({
          data: properties.matchExpressFilterRelation,
          allowedValues: ["and","or"],
        }));
    }
    errors.collect(ros.propertyValidator('matchExpressFilterRelation', ros.validateString)(properties.matchExpressFilterRelation));
    errors.collect(ros.propertyValidator('enableSubscribeEvent', ros.validateBoolean)(properties.enableSubscribeEvent));
    if(properties.templateIdList && (Array.isArray(properties.templateIdList) || (typeof properties.templateIdList) === 'string')) {
        errors.collect(ros.propertyValidator('templateIdList', ros.validateLength)({
            data: properties.templateIdList.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('templateIdList', ros.listValidator(ros.validateString))(properties.templateIdList));
    errors.collect(ros.propertyValidator('tagKey', ros.requiredValidator)(properties.tagKey));
    errors.collect(ros.propertyValidator('tagKey', ros.validateString)(properties.tagKey));
    errors.collect(ros.propertyValidator('enableInstallAgent', ros.validateBoolean)(properties.enableInstallAgent));
    if(properties.matchExpress && (Array.isArray(properties.matchExpress) || (typeof properties.matchExpress) === 'string')) {
        errors.collect(ros.propertyValidator('matchExpress', ros.validateLength)({
            data: properties.matchExpress.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('matchExpress', ros.listValidator(RosDynamicTagGroup_MatchExpressPropertyValidator))(properties.matchExpress));
    return errors.wrap('supplied properties not correct for "RosDynamicTagGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::DynamicTagGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDynamicTagGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::DynamicTagGroup` resource.
 */
// @ts-ignore TS6133
function rosDynamicTagGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDynamicTagGroupPropsValidator(properties).assertSuccess();
    }
    return {
      ContactGroupList: ros.listMapper(ros.stringToRosTemplate)(properties.contactGroupList),
      TagKey: ros.stringToRosTemplate(properties.tagKey),
      EnableInstallAgent: ros.booleanToRosTemplate(properties.enableInstallAgent),
      EnableSubscribeEvent: ros.booleanToRosTemplate(properties.enableSubscribeEvent),
      MatchExpress: ros.listMapper(rosDynamicTagGroupMatchExpressPropertyToRosTemplate)(properties.matchExpress),
      MatchExpressFilterRelation: ros.stringToRosTemplate(properties.matchExpressFilterRelation),
      TemplateIdList: ros.listMapper(ros.stringToRosTemplate)(properties.templateIdList),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::DynamicTagGroup`
 */
export class RosDynamicTagGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::DynamicTagGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DynamicTagRuleId: Dynamic tag rule ID.
     */
    public readonly attrDynamicTagRuleId: any;

    /**
     * @Attribute TagKey: Tag key.
     */
    public readonly attrTagKey: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property contactGroupList: Alarm contacts.
     */
    public contactGroupList: string[];

    /**
     * @Property tagKey: Tag key.
     */
    public tagKey: string;

    /**
     * @Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
     * true: enable installation
     * Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
     * false: disable installation
     */
    public enableInstallAgent: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableSubscribeEvent: Whether the event subscription is enabled. Values are
     * :true: enable event subscription
     * false: disable event subscription
     */
    public enableSubscribeEvent: boolean | ros.IResolvable | undefined;

    /**
     * @Property matchExpress: Matching list. Only supports one currently.
     */
    public matchExpress: Array<RosDynamicTagGroup.MatchExpressProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
     * and: the relationship between
     * or: the relationship or the
     * Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
     */
    public matchExpressFilterRelation: string | undefined;

    /**
     * @Property templateIdList: Alarm template ID list.
     * When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
     */
    public templateIdList: string[] | undefined;

    /**
     * Create a new `ALIYUN::CMS::DynamicTagGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDynamicTagGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDynamicTagGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDynamicTagRuleId = ros.Token.asString(this.getAtt('DynamicTagRuleId'));
        this.attrTagKey = ros.Token.asString(this.getAtt('TagKey'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.contactGroupList = props.contactGroupList;
        this.tagKey = props.tagKey;
        this.enableInstallAgent = props.enableInstallAgent;
        this.enableSubscribeEvent = props.enableSubscribeEvent;
        this.matchExpress = props.matchExpress;
        this.matchExpressFilterRelation = props.matchExpressFilterRelation;
        this.templateIdList = props.templateIdList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            contactGroupList: this.contactGroupList,
            tagKey: this.tagKey,
            enableInstallAgent: this.enableInstallAgent,
            enableSubscribeEvent: this.enableSubscribeEvent,
            matchExpress: this.matchExpress,
            matchExpressFilterRelation: this.matchExpressFilterRelation,
            templateIdList: this.templateIdList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDynamicTagGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDynamicTagGroup {
    /**
     * @stability external
     */
    export interface MatchExpressProperty {
        /**
         * @Property tagValue: Tag value, used with TagValueMatchFunction.
         */
        readonly tagValue: string;
        /**
         * @Property tagValueMatchFunction: Matching labeled keys. Values are:
     * contains: contains
     * startWith: Prefix
     * endWith: suffix
     * notContains: not included
     * equals: equals
     * all: All
         */
        readonly tagValueMatchFunction: string;
    }
}
/**
 * Determine whether the given properties match those of a `MatchExpressProperty`
 *
 * @param properties - the TypeScript properties of a `MatchExpressProperty`
 *
 * @returns the result of the validation.
 */
function RosDynamicTagGroup_MatchExpressPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tagValue', ros.requiredValidator)(properties.tagValue));
    errors.collect(ros.propertyValidator('tagValue', ros.validateString)(properties.tagValue));
    errors.collect(ros.propertyValidator('tagValueMatchFunction', ros.requiredValidator)(properties.tagValueMatchFunction));
    if(properties.tagValueMatchFunction && (typeof properties.tagValueMatchFunction) !== 'object') {
        errors.collect(ros.propertyValidator('tagValueMatchFunction', ros.validateAllowedValues)({
          data: properties.tagValueMatchFunction,
          allowedValues: ["contains","startWith","endWith","notContains","equals","all"],
        }));
    }
    errors.collect(ros.propertyValidator('tagValueMatchFunction', ros.validateString)(properties.tagValueMatchFunction));
    return errors.wrap('supplied properties not correct for "MatchExpressProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::DynamicTagGroup.MatchExpress` resource
 *
 * @param properties - the TypeScript properties of a `MatchExpressProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::DynamicTagGroup.MatchExpress` resource.
 */
// @ts-ignore TS6133
function rosDynamicTagGroupMatchExpressPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDynamicTagGroup_MatchExpressPropertyValidator(properties).assertSuccess();
    return {
      TagValue: ros.stringToRosTemplate(properties.tagValue),
      TagValueMatchFunction: ros.stringToRosTemplate(properties.tagValueMatchFunction),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::EventRule`
 */
export interface RosEventRuleProps {

    /**
     * @Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
     */
    readonly eventPattern: Array<RosEventRule.EventPatternProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ruleName: The name of the alarm rule.
     */
    readonly ruleName: string;

    /**
     * @Property description: The description of the alert rule.
     */
    readonly description?: string;

    /**
     * @Property eventType: The type of the event alert. Valid values:
     * SYSTEM
     * CUSTOM
     */
    readonly eventType?: string;

    /**
     * @Property groupId: The ID of the application group.
     */
    readonly groupId?: string;

    /**
     * @Property state: The status of the alert rule. Valid values:
     * ENABLED
     * DISABLED
     */
    readonly state?: string;
}

/**
 * Determine whether the given properties match those of a `RosEventRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosEventRuleProps`
 *
 * @returns the result of the validation.
 */
function RosEventRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('eventPattern', ros.requiredValidator)(properties.eventPattern));
    if(properties.eventPattern && (Array.isArray(properties.eventPattern) || (typeof properties.eventPattern) === 'string')) {
        errors.collect(ros.propertyValidator('eventPattern', ros.validateLength)({
            data: properties.eventPattern.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('eventPattern', ros.listValidator(RosEventRule_EventPatternPropertyValidator))(properties.eventPattern));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('eventType', ros.validateString)(properties.eventType));
    errors.collect(ros.propertyValidator('state', ros.validateString)(properties.state));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosEventRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRule` resource
 *
 * @param properties - the TypeScript properties of a `RosEventRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRule` resource.
 */
// @ts-ignore TS6133
function rosEventRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEventRulePropsValidator(properties).assertSuccess();
    }
    return {
      EventPattern: ros.listMapper(rosEventRuleEventPatternPropertyToRosTemplate)(properties.eventPattern),
      RuleName: ros.stringToRosTemplate(properties.ruleName),
      Description: ros.stringToRosTemplate(properties.description),
      EventType: ros.stringToRosTemplate(properties.eventType),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      State: ros.stringToRosTemplate(properties.state),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::EventRule`
 */
export class RosEventRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::EventRule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Data: Number of rows affected.
     */
    public readonly attrData: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.
     */
    public eventPattern: Array<RosEventRule.EventPatternProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ruleName: The name of the alarm rule.
     */
    public ruleName: string;

    /**
     * @Property description: The description of the alert rule.
     */
    public description: string | undefined;

    /**
     * @Property eventType: The type of the event alert. Valid values:
     * SYSTEM
     * CUSTOM
     */
    public eventType: string | undefined;

    /**
     * @Property groupId: The ID of the application group.
     */
    public groupId: string | undefined;

    /**
     * @Property state: The status of the alert rule. Valid values:
     * ENABLED
     * DISABLED
     */
    public state: string | undefined;

    /**
     * Create a new `ALIYUN::CMS::EventRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEventRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEventRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrData = ros.Token.asString(this.getAtt('Data'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.eventPattern = props.eventPattern;
        this.ruleName = props.ruleName;
        this.description = props.description;
        this.eventType = props.eventType;
        this.groupId = props.groupId;
        this.state = props.state;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            eventPattern: this.eventPattern,
            ruleName: this.ruleName,
            description: this.description,
            eventType: this.eventType,
            groupId: this.groupId,
            state: this.state,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEventRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEventRule {
    /**
     * @stability external
     */
    export interface EventPatternProperty {
        /**
         * @Property nameList: The name of the event. Please refer to the configuration of CMS.
         */
        readonly nameList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property levelList: The severity of the event alert. Valid values: CRITICAL, WARN, INFO, and * (all severity
     * levels).
         */
        readonly levelList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property statusList: The status of the event. Please refer to the configuration of CMS.
         */
        readonly statusList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property eventTypeList: The type of the event. A value of * indicates any type. Please refer to the configuration of CMS.
         */
        readonly eventTypeList?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property product: The name of the service. Please refer to the configuration of CMS.
         */
        readonly product?: string;
    }
}
/**
 * Determine whether the given properties match those of a `EventPatternProperty`
 *
 * @param properties - the TypeScript properties of a `EventPatternProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRule_EventPatternPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('nameList', ros.listValidator(ros.validateAny))(properties.nameList));
    errors.collect(ros.propertyValidator('levelList', ros.listValidator(ros.validateAny))(properties.levelList));
    errors.collect(ros.propertyValidator('statusList', ros.listValidator(ros.validateAny))(properties.statusList));
    errors.collect(ros.propertyValidator('eventTypeList', ros.listValidator(ros.validateAny))(properties.eventTypeList));
    errors.collect(ros.propertyValidator('product', ros.validateString)(properties.product));
    return errors.wrap('supplied properties not correct for "EventPatternProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRule.EventPattern` resource
 *
 * @param properties - the TypeScript properties of a `EventPatternProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRule.EventPattern` resource.
 */
// @ts-ignore TS6133
function rosEventRuleEventPatternPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEventRule_EventPatternPropertyValidator(properties).assertSuccess();
    return {
      NameList: ros.listMapper(ros.objectToRosTemplate)(properties.nameList),
      LevelList: ros.listMapper(ros.objectToRosTemplate)(properties.levelList),
      StatusList: ros.listMapper(ros.objectToRosTemplate)(properties.statusList),
      EventTypeList: ros.listMapper(ros.objectToRosTemplate)(properties.eventTypeList),
      Product: ros.stringToRosTemplate(properties.product),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::EventRuleTargets`
 */
export interface RosEventRuleTargetsProps {

    /**
     * @Property ruleName: The name of the alert rule.
     */
    readonly ruleName: string;

    /**
     * @Property contactParameters: CONTACT configuration.A maximum of 5 parameters
     */
    readonly contactParameters?: Array<RosEventRuleTargets.ContactParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property fcParameters: FC configuration.A maximum of 5 parameters.
     */
    readonly fcParameters?: Array<RosEventRuleTargets.FcParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property mnsParameters: MNS configuration.A maximum of 5 parameters
     */
    readonly mnsParameters?: Array<RosEventRuleTargets.MnsParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property slsParameters: SLS configuration.A maximum of 5 parameters.
     */
    readonly slsParameters?: Array<RosEventRuleTargets.SlsParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
     */
    readonly webhookParameters?: Array<RosEventRuleTargets.WebhookParametersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEventRuleTargetsProps`
 *
 * @param properties - the TypeScript properties of a `RosEventRuleTargetsProps`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargetsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.contactParameters && (Array.isArray(properties.contactParameters) || (typeof properties.contactParameters) === 'string')) {
        errors.collect(ros.propertyValidator('contactParameters', ros.validateLength)({
            data: properties.contactParameters.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('contactParameters', ros.listValidator(RosEventRuleTargets_ContactParametersPropertyValidator))(properties.contactParameters));
    if(properties.slsParameters && (Array.isArray(properties.slsParameters) || (typeof properties.slsParameters) === 'string')) {
        errors.collect(ros.propertyValidator('slsParameters', ros.validateLength)({
            data: properties.slsParameters.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('slsParameters', ros.listValidator(RosEventRuleTargets_SlsParametersPropertyValidator))(properties.slsParameters));
    if(properties.webhookParameters && (Array.isArray(properties.webhookParameters) || (typeof properties.webhookParameters) === 'string')) {
        errors.collect(ros.propertyValidator('webhookParameters', ros.validateLength)({
            data: properties.webhookParameters.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('webhookParameters', ros.listValidator(RosEventRuleTargets_WebhookParametersPropertyValidator))(properties.webhookParameters));
    if(properties.fcParameters && (Array.isArray(properties.fcParameters) || (typeof properties.fcParameters) === 'string')) {
        errors.collect(ros.propertyValidator('fcParameters', ros.validateLength)({
            data: properties.fcParameters.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('fcParameters', ros.listValidator(RosEventRuleTargets_FcParametersPropertyValidator))(properties.fcParameters));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    if(properties.mnsParameters && (Array.isArray(properties.mnsParameters) || (typeof properties.mnsParameters) === 'string')) {
        errors.collect(ros.propertyValidator('mnsParameters', ros.validateLength)({
            data: properties.mnsParameters.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('mnsParameters', ros.listValidator(RosEventRuleTargets_MnsParametersPropertyValidator))(properties.mnsParameters));
    return errors.wrap('supplied properties not correct for "RosEventRuleTargetsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets` resource
 *
 * @param properties - the TypeScript properties of a `RosEventRuleTargetsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets` resource.
 */
// @ts-ignore TS6133
function rosEventRuleTargetsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEventRuleTargetsPropsValidator(properties).assertSuccess();
    }
    return {
      RuleName: ros.stringToRosTemplate(properties.ruleName),
      ContactParameters: ros.listMapper(rosEventRuleTargetsContactParametersPropertyToRosTemplate)(properties.contactParameters),
      FcParameters: ros.listMapper(rosEventRuleTargetsFcParametersPropertyToRosTemplate)(properties.fcParameters),
      MnsParameters: ros.listMapper(rosEventRuleTargetsMnsParametersPropertyToRosTemplate)(properties.mnsParameters),
      SlsParameters: ros.listMapper(rosEventRuleTargetsSlsParametersPropertyToRosTemplate)(properties.slsParameters),
      WebhookParameters: ros.listMapper(rosEventRuleTargetsWebhookParametersPropertyToRosTemplate)(properties.webhookParameters),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::EventRuleTargets`
 */
export class RosEventRuleTargets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::EventRuleTargets";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ruleName: The name of the alert rule.
     */
    public ruleName: string;

    /**
     * @Property contactParameters: CONTACT configuration.A maximum of 5 parameters
     */
    public contactParameters: Array<RosEventRuleTargets.ContactParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property fcParameters: FC configuration.A maximum of 5 parameters.
     */
    public fcParameters: Array<RosEventRuleTargets.FcParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property mnsParameters: MNS configuration.A maximum of 5 parameters
     */
    public mnsParameters: Array<RosEventRuleTargets.MnsParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property slsParameters: SLS configuration.A maximum of 5 parameters.
     */
    public slsParameters: Array<RosEventRuleTargets.SlsParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
     */
    public webhookParameters: Array<RosEventRuleTargets.WebhookParametersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CMS::EventRuleTargets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEventRuleTargetsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEventRuleTargets.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ruleName = props.ruleName;
        this.contactParameters = props.contactParameters;
        this.fcParameters = props.fcParameters;
        this.mnsParameters = props.mnsParameters;
        this.slsParameters = props.slsParameters;
        this.webhookParameters = props.webhookParameters;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ruleName: this.ruleName,
            contactParameters: this.contactParameters,
            fcParameters: this.fcParameters,
            mnsParameters: this.mnsParameters,
            slsParameters: this.slsParameters,
            webhookParameters: this.webhookParameters,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEventRuleTargetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    export interface ContactParametersProperty {
        /**
         * @Property contactGroupName: The name of the alert contact group.
         */
        readonly contactGroupName?: string;
        /**
         * @Property level: The method of alert notification. Valid values: 2, 3, and 4.2: DingTalk Chatbot and email.3: DingTalk Chatbot and email.4: DingTalk Chatbot and email.
         */
        readonly level?: string;
        /**
         * @Property id: The unique ID of the alert contact group notification.
         */
        readonly id?: string;
    }
}
/**
 * Determine whether the given properties match those of a `ContactParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ContactParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_ContactParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('contactGroupName', ros.validateString)(properties.contactGroupName));
    errors.collect(ros.propertyValidator('level', ros.validateString)(properties.level));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    return errors.wrap('supplied properties not correct for "ContactParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.ContactParameters` resource
 *
 * @param properties - the TypeScript properties of a `ContactParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.ContactParameters` resource.
 */
// @ts-ignore TS6133
function rosEventRuleTargetsContactParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEventRuleTargets_ContactParametersPropertyValidator(properties).assertSuccess();
    return {
      ContactGroupName: ros.stringToRosTemplate(properties.contactGroupName),
      Level: ros.stringToRosTemplate(properties.level),
      Id: ros.stringToRosTemplate(properties.id),
    };
}

export namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    export interface FcParametersProperty {
        /**
         * @Property functionName: The name of the function.
         */
        readonly functionName?: string;
        /**
         * @Property serviceName: The name of the Function Compute service.
         */
        readonly serviceName?: string;
        /**
         * @Property region: The region where Function Compute is deployed.
         */
        readonly region?: string;
        /**
         * @Property id: The unique ID of the Function Compute notification.
         */
        readonly id?: string;
    }
}
/**
 * Determine whether the given properties match those of a `FcParametersProperty`
 *
 * @param properties - the TypeScript properties of a `FcParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_FcParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    return errors.wrap('supplied properties not correct for "FcParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.FcParameters` resource
 *
 * @param properties - the TypeScript properties of a `FcParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.FcParameters` resource.
 */
// @ts-ignore TS6133
function rosEventRuleTargetsFcParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEventRuleTargets_FcParametersPropertyValidator(properties).assertSuccess();
    return {
      FunctionName: ros.stringToRosTemplate(properties.functionName),
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
      Region: ros.stringToRosTemplate(properties.region),
      Id: ros.stringToRosTemplate(properties.id),
    };
}

export namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    export interface MnsParametersProperty {
        /**
         * @Property region: The region where MNS is deployed.
         */
        readonly region?: string;
        /**
         * @Property id: The unique ID of the Message Service (MNS) notification.
         */
        readonly id?: string;
        /**
         * @Property queue: The name of the MNS queue.
         */
        readonly queue?: string;
    }
}
/**
 * Determine whether the given properties match those of a `MnsParametersProperty`
 *
 * @param properties - the TypeScript properties of a `MnsParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_MnsParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    errors.collect(ros.propertyValidator('queue', ros.validateString)(properties.queue));
    return errors.wrap('supplied properties not correct for "MnsParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.MnsParameters` resource
 *
 * @param properties - the TypeScript properties of a `MnsParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.MnsParameters` resource.
 */
// @ts-ignore TS6133
function rosEventRuleTargetsMnsParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEventRuleTargets_MnsParametersPropertyValidator(properties).assertSuccess();
    return {
      Region: ros.stringToRosTemplate(properties.region),
      Id: ros.stringToRosTemplate(properties.id),
      Queue: ros.stringToRosTemplate(properties.queue),
    };
}

export namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    export interface SlsParametersProperty {
        /**
         * @Property project: The project corresponding to Log Service.
         */
        readonly project?: string;
        /**
         * @Property logStore: The logstore corresponding to Log Service.
         */
        readonly logStore?: string;
        /**
         * @Property region: The region where Log Service is deployed.
         */
        readonly region?: string;
        /**
         * @Property id: The unique ID of the Log Service notification.
         */
        readonly id?: string;
    }
}
/**
 * Determine whether the given properties match those of a `SlsParametersProperty`
 *
 * @param properties - the TypeScript properties of a `SlsParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_SlsParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('logStore', ros.validateString)(properties.logStore));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    return errors.wrap('supplied properties not correct for "SlsParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.SlsParameters` resource
 *
 * @param properties - the TypeScript properties of a `SlsParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.SlsParameters` resource.
 */
// @ts-ignore TS6133
function rosEventRuleTargetsSlsParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEventRuleTargets_SlsParametersPropertyValidator(properties).assertSuccess();
    return {
      Project: ros.stringToRosTemplate(properties.project),
      LogStore: ros.stringToRosTemplate(properties.logStore),
      Region: ros.stringToRosTemplate(properties.region),
      Id: ros.stringToRosTemplate(properties.id),
    };
}

export namespace RosEventRuleTargets {
    /**
     * @stability external
     */
    export interface WebhookParametersProperty {
        /**
         * @Property id: The unique ID of the HTTP callback notification.
         */
        readonly id?: string;
        /**
         * @Property method: The request method of the HTTP callback. Valid values: GET and POST.
         */
        readonly method?: string;
        /**
         * @Property protocol: The name of the protocol.
         */
        readonly protocol?: string;
        /**
         * @Property url: The callback URL.
         */
        readonly url?: string;
    }
}
/**
 * Determine whether the given properties match those of a `WebhookParametersProperty`
 *
 * @param properties - the TypeScript properties of a `WebhookParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_WebhookParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    errors.collect(ros.propertyValidator('method', ros.validateString)(properties.method));
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('url', ros.validateString)(properties.url));
    return errors.wrap('supplied properties not correct for "WebhookParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.WebhookParameters` resource
 *
 * @param properties - the TypeScript properties of a `WebhookParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::EventRuleTargets.WebhookParameters` resource.
 */
// @ts-ignore TS6133
function rosEventRuleTargetsWebhookParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEventRuleTargets_WebhookParametersPropertyValidator(properties).assertSuccess();
    return {
      Id: ros.stringToRosTemplate(properties.id),
      Method: ros.stringToRosTemplate(properties.method),
      Protocol: ros.stringToRosTemplate(properties.protocol),
      Url: ros.stringToRosTemplate(properties.url),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::GroupMetricRule`
 */
export interface RosGroupMetricRuleProps {

    /**
     * @Property category: The abbreviation of the service name. Valid values:
     * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
     * RDS (ApsaraDB for RDS)
     * ADS (AnalyticDB)
     * SLB (Server Load Balancer)
     * VPC (Virtual Private Cloud)
     * APIGATEWAY (API Gateway)
     * CDN
     * CS (Container Service for Swarm)
     * DCDN (Dynamic Route for CDN)
     * DDoS (distributed denial of service)
     * EIP (Elastic IP)
     * ELASTICSEARCH (Elasticsearch)
     * EMR (E-MapReduce)
     * ESS (Auto Scaling)
     * HBASE (ApsaraDB for HBase)
     * IOT_EDGE (IoT Edge)
     * K8S_POD (k8s pod)
     * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
     * KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
     * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
     * MEMCACHE (ApsaraDB for Memcache)
     * MNS (Message Service)
     * MONGODB (ApsaraDB for MongoDB replica set instances)
     * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
     * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
     * MQ_TOPIC (Message Service topic)
     * OCS (original version of ApsaraDB for Memcache)
     * OPENSEARCH (Open Search)
     * OSS (Object Storage Service)
     * POLARDB (ApsaraDB for POLARDB)
     * PETADATA (HybridDB for MySQL)
     * SCDN (Secure Content Delivery Network)
     * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
     * SLS (Log Service)
     * VPN (VPN Gateway)
     */
    readonly category: string;

    /**
     * @Property escalations: undefined
     */
    readonly escalations: RosGroupMetricRule.EscalationsProperty | ros.IResolvable;

    /**
     * @Property groupId: The ID of application group.
     */
    readonly groupId: string;

    /**
     * @Property metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
     */
    readonly metricName: string;

    /**
     * @Property namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
     * or see Preset metrics reference.
     */
    readonly namespace: string;

    /**
     * @Property ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
     * uniqueness.
     */
    readonly ruleId: string;

    /**
     * @Property ruleName: The name of the alert rule.
     */
    readonly ruleName: string;

    /**
     * @Property dimensions: The expended resource dimensions.
     */
    readonly dimensions?: string;

    /**
     * @Property effectiveInterval: The period when the alert rule is effective.
     */
    readonly effectiveInterval?: string;

    /**
     * @Property emailSubject: The subject of the alert notification email.
     */
    readonly emailSubject?: string;

    /**
     * @Property interval: The detection period of alerts.
     */
    readonly interval?: number;

    /**
     * @Property noEffectiveInterval: The period when the alert rule is ineffective.
     */
    readonly noEffectiveInterval?: string;

    /**
     * @Property period: The aggregation period. Unite: second.
     */
    readonly period?: number;

    /**
     * @Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
     * conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
     */
    readonly silenceTime?: number;

    /**
     * @Property webhook: The URL of the callback triggered when an alert occurs.
     */
    readonly webhook?: string;
}

/**
 * Determine whether the given properties match those of a `RosGroupMetricRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupMetricRuleProps`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('noEffectiveInterval', ros.validateString)(properties.noEffectiveInterval));
    if(properties.silenceTime && (typeof properties.silenceTime) !== 'object') {
        errors.collect(ros.propertyValidator('silenceTime', ros.validateRange)({
            data: properties.silenceTime,
            min: 60,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('silenceTime', ros.validateNumber)(properties.silenceTime));
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('ruleId', ros.requiredValidator)(properties.ruleId));
    errors.collect(ros.propertyValidator('ruleId', ros.validateString)(properties.ruleId));
    errors.collect(ros.propertyValidator('dimensions', ros.validateString)(properties.dimensions));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('effectiveInterval', ros.validateString)(properties.effectiveInterval));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateString)(properties.groupId));
    errors.collect(ros.propertyValidator('metricName', ros.requiredValidator)(properties.metricName));
    errors.collect(ros.propertyValidator('metricName', ros.validateString)(properties.metricName));
    errors.collect(ros.propertyValidator('escalations', ros.requiredValidator)(properties.escalations));
    errors.collect(ros.propertyValidator('escalations', RosGroupMetricRule_EscalationsPropertyValidator)(properties.escalations));
    errors.collect(ros.propertyValidator('emailSubject', ros.validateString)(properties.emailSubject));
    errors.collect(ros.propertyValidator('webhook', ros.validateString)(properties.webhook));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    errors.collect(ros.propertyValidator('interval', ros.validateNumber)(properties.interval));
    return errors.wrap('supplied properties not correct for "RosGroupMetricRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule` resource
 *
 * @param properties - the TypeScript properties of a `RosGroupMetricRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule` resource.
 */
// @ts-ignore TS6133
function rosGroupMetricRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGroupMetricRulePropsValidator(properties).assertSuccess();
    }
    return {
      Category: ros.stringToRosTemplate(properties.category),
      Escalations: rosGroupMetricRuleEscalationsPropertyToRosTemplate(properties.escalations),
      GroupId: ros.stringToRosTemplate(properties.groupId),
      MetricName: ros.stringToRosTemplate(properties.metricName),
      Namespace: ros.stringToRosTemplate(properties.namespace),
      RuleId: ros.stringToRosTemplate(properties.ruleId),
      RuleName: ros.stringToRosTemplate(properties.ruleName),
      Dimensions: ros.stringToRosTemplate(properties.dimensions),
      EffectiveInterval: ros.stringToRosTemplate(properties.effectiveInterval),
      EmailSubject: ros.stringToRosTemplate(properties.emailSubject),
      Interval: ros.numberToRosTemplate(properties.interval),
      NoEffectiveInterval: ros.stringToRosTemplate(properties.noEffectiveInterval),
      Period: ros.numberToRosTemplate(properties.period),
      SilenceTime: ros.numberToRosTemplate(properties.silenceTime),
      Webhook: ros.stringToRosTemplate(properties.webhook),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::GroupMetricRule`
 */
export class RosGroupMetricRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::GroupMetricRule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute RuleId: Rule ID.
     */
    public readonly attrRuleId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property category: The abbreviation of the service name. Valid values:
     * ECS (including Alibaba Cloud and non-Alibaba Cloud hosts)
     * RDS (ApsaraDB for RDS)
     * ADS (AnalyticDB)
     * SLB (Server Load Balancer)
     * VPC (Virtual Private Cloud)
     * APIGATEWAY (API Gateway)
     * CDN
     * CS (Container Service for Swarm)
     * DCDN (Dynamic Route for CDN)
     * DDoS (distributed denial of service)
     * EIP (Elastic IP)
     * ELASTICSEARCH (Elasticsearch)
     * EMR (E-MapReduce)
     * ESS (Auto Scaling)
     * HBASE (ApsaraDB for HBase)
     * IOT_EDGE (IoT Edge)
     * K8S_POD (k8s pod)
     * KVSTORE_SHARDING (ApsaraDB for Redis cluster version)
     * KVSTORE_SPLITRW (ApsaraDB for Redis read/write splitting version)
     * KVSTORE_STANDARD (ApsaraDB for Redis standard version)
     * MEMCACHE (ApsaraDB for Memcache)
     * MNS (Message Service)
     * MONGODB (ApsaraDB for MongoDB replica set instances)
     * MONGODB_CLUSTER (ApsaraDB for MongoDB cluster version)
     * MONGODB_SHARDING (ApsaraDB for MongoDB sharded clusters)
     * MQ_TOPIC (Message Service topic)
     * OCS (original version of ApsaraDB for Memcache)
     * OPENSEARCH (Open Search)
     * OSS (Object Storage Service)
     * POLARDB (ApsaraDB for POLARDB)
     * PETADATA (HybridDB for MySQL)
     * SCDN (Secure Content Delivery Network)
     * SHAREBANDWIDTHPACKAGES (shared bandwidth package)
     * SLS (Log Service)
     * VPN (VPN Gateway)
     */
    public category: string;

    /**
     * @Property escalations: undefined
     */
    public escalations: RosGroupMetricRule.EscalationsProperty | ros.IResolvable;

    /**
     * @Property groupId: The ID of application group.
     */
    public groupId: string;

    /**
     * @Property metricName: The name of the metric. For more information, call DescribeMetricMetaList or see Preset metrics reference.
     */
    public metricName: string;

    /**
     * @Property namespace: The data namespace of the service. For more information, call DescribeMetricMetaList
     * or see Preset metrics reference.
     */
    public namespace: string;

    /**
     * @Property ruleId: The ID of the alert rule. The IDs of alert rules are generated by callers to ensure
     * uniqueness.
     */
    public ruleId: string;

    /**
     * @Property ruleName: The name of the alert rule.
     */
    public ruleName: string;

    /**
     * @Property dimensions: The expended resource dimensions.
     */
    public dimensions: string | undefined;

    /**
     * @Property effectiveInterval: The period when the alert rule is effective.
     */
    public effectiveInterval: string | undefined;

    /**
     * @Property emailSubject: The subject of the alert notification email.
     */
    public emailSubject: string | undefined;

    /**
     * @Property interval: The detection period of alerts.
     */
    public interval: number | undefined;

    /**
     * @Property noEffectiveInterval: The period when the alert rule is ineffective.
     */
    public noEffectiveInterval: string | undefined;

    /**
     * @Property period: The aggregation period. Unite: second.
     */
    public period: number | undefined;

    /**
     * @Property silenceTime: The duration of the mute period during which new alerts are not sent even if the trigger
     * conditions are met. Unit: second. Default value: 86400. Minimum value: 60.
     */
    public silenceTime: number | undefined;

    /**
     * @Property webhook: The URL of the callback triggered when an alert occurs.
     */
    public webhook: string | undefined;

    /**
     * Create a new `ALIYUN::CMS::GroupMetricRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGroupMetricRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGroupMetricRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRuleId = ros.Token.asString(this.getAtt('RuleId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.category = props.category;
        this.escalations = props.escalations;
        this.groupId = props.groupId;
        this.metricName = props.metricName;
        this.namespace = props.namespace;
        this.ruleId = props.ruleId;
        this.ruleName = props.ruleName;
        this.dimensions = props.dimensions;
        this.effectiveInterval = props.effectiveInterval;
        this.emailSubject = props.emailSubject;
        this.interval = props.interval;
        this.noEffectiveInterval = props.noEffectiveInterval;
        this.period = props.period;
        this.silenceTime = props.silenceTime;
        this.webhook = props.webhook;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            category: this.category,
            escalations: this.escalations,
            groupId: this.groupId,
            metricName: this.metricName,
            namespace: this.namespace,
            ruleId: this.ruleId,
            ruleName: this.ruleName,
            dimensions: this.dimensions,
            effectiveInterval: this.effectiveInterval,
            emailSubject: this.emailSubject,
            interval: this.interval,
            noEffectiveInterval: this.noEffectiveInterval,
            period: this.period,
            silenceTime: this.silenceTime,
            webhook: this.webhook,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGroupMetricRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    export interface CriticalProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for critical-level alerts. Valid values:
     * GreaterThanOrEqualToThreshold
     * GreaterThanThreshold
     * LessThanOrEqualToThreshold
     * LessThanThreshold
     * NotEqualToThreshold
     * GreaterThanYesterday
     * LessThanYesterday
     * GreaterThanLastWeek
     * LessThanLastWeek
     * GreaterThanLastPeriod
     * LessThanLastPeriod
         */
        readonly comparisonOperator: string;
        /**
         * @Property times: The consecutive number of times for which the metric value exceeds the threshold for
     * critical-level alerts before an alert is triggered.
         */
        readonly times: number;
        /**
         * @Property statistics: The statistical method for critical-level alerts. The statistical method varies with
     * metric.
         */
        readonly statistics: string;
        /**
         * @Property threshold: The threshold for critical-level alerts.
         */
        readonly threshold: number;
    }
}
/**
 * Determine whether the given properties match those of a `CriticalProperty`
 *
 * @param properties - the TypeScript properties of a `CriticalProperty`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRule_CriticalPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comparisonOperator', ros.requiredValidator)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('times', ros.requiredValidator)(properties.times));
    errors.collect(ros.propertyValidator('times', ros.validateNumber)(properties.times));
    errors.collect(ros.propertyValidator('statistics', ros.requiredValidator)(properties.statistics));
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateNumber)(properties.threshold));
    return errors.wrap('supplied properties not correct for "CriticalProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Critical` resource
 *
 * @param properties - the TypeScript properties of a `CriticalProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Critical` resource.
 */
// @ts-ignore TS6133
function rosGroupMetricRuleCriticalPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroupMetricRule_CriticalPropertyValidator(properties).assertSuccess();
    return {
      ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
      Times: ros.numberToRosTemplate(properties.times),
      Statistics: ros.stringToRosTemplate(properties.statistics),
      Threshold: ros.numberToRosTemplate(properties.threshold),
    };
}

export namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    export interface EscalationsProperty {
        /**
         * @Property critical: undefined
         */
        readonly critical?: RosGroupMetricRule.CriticalProperty | ros.IResolvable;
        /**
         * @Property info: undefined
         */
        readonly info?: RosGroupMetricRule.InfoProperty | ros.IResolvable;
        /**
         * @Property warn: undefined
         */
        readonly warn?: RosGroupMetricRule.WarnProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EscalationsProperty`
 *
 * @param properties - the TypeScript properties of a `EscalationsProperty`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRule_EscalationsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('critical', RosGroupMetricRule_CriticalPropertyValidator)(properties.critical));
    errors.collect(ros.propertyValidator('info', RosGroupMetricRule_InfoPropertyValidator)(properties.info));
    errors.collect(ros.propertyValidator('warn', RosGroupMetricRule_WarnPropertyValidator)(properties.warn));
    return errors.wrap('supplied properties not correct for "EscalationsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Escalations` resource
 *
 * @param properties - the TypeScript properties of a `EscalationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Escalations` resource.
 */
// @ts-ignore TS6133
function rosGroupMetricRuleEscalationsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroupMetricRule_EscalationsPropertyValidator(properties).assertSuccess();
    return {
      Critical: rosGroupMetricRuleCriticalPropertyToRosTemplate(properties.critical),
      Info: rosGroupMetricRuleInfoPropertyToRosTemplate(properties.info),
      Warn: rosGroupMetricRuleWarnPropertyToRosTemplate(properties.warn),
    };
}

export namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    export interface InfoProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for info-level alerts. Valid values:
     * GreaterThanOrEqualToThreshold
     * GreaterThanThreshold
     * LessThanOrEqualToThreshold
     * LessThanThreshold
     * NotEqualToThreshold
     * GreaterThanYesterday
     * LessThanYesterday
     * GreaterThanLastWeek
     * LessThanLastWeek
     * GreaterThanLastPeriod
     * LessThanLastPeriod
         */
        readonly comparisonOperator: string;
        /**
         * @Property times: The consecutive number of times for which the metric value exceeds the threshold for
     * info-level alerts before an alert is triggered.
         */
        readonly times: number;
        /**
         * @Property statistics: The statistical method for info-level alerts.
         */
        readonly statistics: string;
        /**
         * @Property threshold: The threshold for info-level alerts.
         */
        readonly threshold: number;
    }
}
/**
 * Determine whether the given properties match those of a `InfoProperty`
 *
 * @param properties - the TypeScript properties of a `InfoProperty`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRule_InfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comparisonOperator', ros.requiredValidator)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('times', ros.requiredValidator)(properties.times));
    errors.collect(ros.propertyValidator('times', ros.validateNumber)(properties.times));
    errors.collect(ros.propertyValidator('statistics', ros.requiredValidator)(properties.statistics));
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateNumber)(properties.threshold));
    return errors.wrap('supplied properties not correct for "InfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Info` resource
 *
 * @param properties - the TypeScript properties of a `InfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Info` resource.
 */
// @ts-ignore TS6133
function rosGroupMetricRuleInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroupMetricRule_InfoPropertyValidator(properties).assertSuccess();
    return {
      ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
      Times: ros.numberToRosTemplate(properties.times),
      Statistics: ros.stringToRosTemplate(properties.statistics),
      Threshold: ros.numberToRosTemplate(properties.threshold),
    };
}

export namespace RosGroupMetricRule {
    /**
     * @stability external
     */
    export interface WarnProperty {
        /**
         * @Property comparisonOperator: The comparison operator of the threshold for warn-level alerts. Valid values:
     * GreaterThanOrEqualToThreshold
     * GreaterThanThreshold
     * LessThanOrEqualToThreshold
     * LessThanThreshold
     * NotEqualToThreshold
     * GreaterThanYesterday
     * LessThanYesterday
     * GreaterThanLastWeek
     * LessThanLastWeek
     * GreaterThanLastPeriod
     * LessThanLastPeriod
         */
        readonly comparisonOperator: string;
        /**
         * @Property times: The consecutive number of times for which the metric value exceeds the threshold for
     * warn-level alerts before an alert is triggered.
         */
        readonly times: number;
        /**
         * @Property statistics: The statistical method for warn-level alerts.
         */
        readonly statistics: string;
        /**
         * @Property threshold: The threshold for warn-level alerts.
         */
        readonly threshold: number;
    }
}
/**
 * Determine whether the given properties match those of a `WarnProperty`
 *
 * @param properties - the TypeScript properties of a `WarnProperty`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRule_WarnPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comparisonOperator', ros.requiredValidator)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('times', ros.requiredValidator)(properties.times));
    errors.collect(ros.propertyValidator('times', ros.validateNumber)(properties.times));
    errors.collect(ros.propertyValidator('statistics', ros.requiredValidator)(properties.statistics));
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateNumber)(properties.threshold));
    return errors.wrap('supplied properties not correct for "WarnProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Warn` resource
 *
 * @param properties - the TypeScript properties of a `WarnProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::GroupMetricRule.Warn` resource.
 */
// @ts-ignore TS6133
function rosGroupMetricRuleWarnPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGroupMetricRule_WarnPropertyValidator(properties).assertSuccess();
    return {
      ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
      Times: ros.numberToRosTemplate(properties.times),
      Statistics: ros.stringToRosTemplate(properties.statistics),
      Threshold: ros.numberToRosTemplate(properties.threshold),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::MetricRuleTargets`
 */
export interface RosMetricRuleTargetsProps {

    /**
     * @Property ruleId: The ID of the alert rule.
     */
    readonly ruleId: string;

    /**
     * @Property targets: undefined
     */
    readonly targets: Array<RosMetricRuleTargets.TargetsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMetricRuleTargetsProps`
 *
 * @param properties - the TypeScript properties of a `RosMetricRuleTargetsProps`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTargetsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ruleId', ros.requiredValidator)(properties.ruleId));
    errors.collect(ros.propertyValidator('ruleId', ros.validateString)(properties.ruleId));
    errors.collect(ros.propertyValidator('targets', ros.requiredValidator)(properties.targets));
    if(properties.targets && (Array.isArray(properties.targets) || (typeof properties.targets) === 'string')) {
        errors.collect(ros.propertyValidator('targets', ros.validateLength)({
            data: properties.targets.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('targets', ros.listValidator(RosMetricRuleTargets_TargetsPropertyValidator))(properties.targets));
    return errors.wrap('supplied properties not correct for "RosMetricRuleTargetsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTargets` resource
 *
 * @param properties - the TypeScript properties of a `RosMetricRuleTargetsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTargets` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTargetsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMetricRuleTargetsPropsValidator(properties).assertSuccess();
    }
    return {
      RuleId: ros.stringToRosTemplate(properties.ruleId),
      Targets: ros.listMapper(rosMetricRuleTargetsTargetsPropertyToRosTemplate)(properties.targets),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::MetricRuleTargets`
 */
export class RosMetricRuleTargets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MetricRuleTargets";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Arns: The ARN list of targets
     */
    public readonly attrArns: any;

    /**
     * @Attribute Ids: The ID list of targets
     */
    public readonly attrIds: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ruleId: The ID of the alert rule.
     */
    public ruleId: string;

    /**
     * @Property targets: undefined
     */
    public targets: Array<RosMetricRuleTargets.TargetsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::CMS::MetricRuleTargets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMetricRuleTargetsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMetricRuleTargets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArns = ros.Token.asString(this.getAtt('Arns'));
        this.attrIds = ros.Token.asString(this.getAtt('Ids'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ruleId = props.ruleId;
        this.targets = props.targets;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ruleId: this.ruleId,
            targets: this.targets,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMetricRuleTargetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosMetricRuleTargets {
    /**
     * @stability external
     */
    export interface TargetsProperty {
        /**
         * @Property level: The alert level, which is a JSON array. For example: ["INFO", "WARN", "CRITICAL"]. Valid values:
     * INFO
     * WARN
     * CRITICAL
         */
        readonly level?: string;
        /**
         * @Property id: The ID of the message resource. The ID must be unique in the alert rule.
         */
        readonly id: string;
        /**
         * @Property arn: The resource description in the format of acs:{Service name abbreviation}:{regionId}:{userId}:/{Message resource type}/{Resource
     * name}/message. Example: acs:mns:cn-hangzhou:111:/queues/test/message.
     * {Service name abbreviation}: the abbreviation of the service name. Set this value
     * to mns.
     * {regionId}: the region ID of the message queue or topic.
     * {userId}: the account ID of the user.
     * {Message resource type}: the type of the message resource. Valid values: queues and
     * topics.
     * {Resource name}: the name of a queue if the resource type is queues, or the name of
     * a topic if the type is topics.
         */
        readonly arn: string;
    }
}
/**
 * Determine whether the given properties match those of a `TargetsProperty`
 *
 * @param properties - the TypeScript properties of a `TargetsProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTargets_TargetsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('level', ros.validateString)(properties.level));
    errors.collect(ros.propertyValidator('id', ros.requiredValidator)(properties.id));
    errors.collect(ros.propertyValidator('id', ros.validateString)(properties.id));
    errors.collect(ros.propertyValidator('arn', ros.requiredValidator)(properties.arn));
    errors.collect(ros.propertyValidator('arn', ros.validateString)(properties.arn));
    return errors.wrap('supplied properties not correct for "TargetsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTargets.Targets` resource
 *
 * @param properties - the TypeScript properties of a `TargetsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTargets.Targets` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTargetsTargetsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMetricRuleTargets_TargetsPropertyValidator(properties).assertSuccess();
    return {
      Level: ros.stringToRosTemplate(properties.level),
      Id: ros.stringToRosTemplate(properties.id),
      Arn: ros.stringToRosTemplate(properties.arn),
    };
}

/**
 * Properties for defining a `ALIYUN::CMS::MonitorGroup`
 */
export interface RosMonitorGroupProps {

    /**
     * @Property groupName: The name of the application group.
     */
    readonly groupName: string;

    /**
     * @Property contactGroups: The alert contact group. Alert notifications for the application group are sent to
     * the specified alert contact group.
     */
    readonly contactGroups?: string;
}

/**
 * Determine whether the given properties match those of a `RosMonitorGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupProps`
 *
 * @returns the result of the validation.
 */
function RosMonitorGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.requiredValidator)(properties.groupName));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('contactGroups', ros.validateString)(properties.contactGroups));
    return errors.wrap('supplied properties not correct for "RosMonitorGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitorGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitorGroup` resource.
 */
// @ts-ignore TS6133
function rosMonitorGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMonitorGroupPropsValidator(properties).assertSuccess();
    }
    return {
      GroupName: ros.stringToRosTemplate(properties.groupName),
      ContactGroups: ros.stringToRosTemplate(properties.contactGroups),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::MonitorGroup`
 */
export class RosMonitorGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitorGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GroupId: Application group ID generated after the group is created.
     */
    public readonly attrGroupId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupName: The name of the application group.
     */
    public groupName: string;

    /**
     * @Property contactGroups: The alert contact group. Alert notifications for the application group are sent to
     * the specified alert contact group.
     */
    public contactGroups: string | undefined;

    /**
     * Create a new `ALIYUN::CMS::MonitorGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMonitorGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = ros.Token.asString(this.getAtt('GroupId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.contactGroups = props.contactGroups;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupName: this.groupName,
            contactGroups: this.contactGroups,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMonitorGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CMS::MonitoringAgentProcess`
 */
export interface RosMonitoringAgentProcessProps {

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string;

    /**
     * @Property processName: The name of the process.
     */
    readonly processName?: string;

    /**
     * @Property processUser: The user who launched the process.
     */
    readonly processUser?: string;
}

/**
 * Determine whether the given properties match those of a `RosMonitoringAgentProcessProps`
 *
 * @param properties - the TypeScript properties of a `RosMonitoringAgentProcessProps`
 *
 * @returns the result of the validation.
 */
function RosMonitoringAgentProcessPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('processName', ros.validateString)(properties.processName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('processUser', ros.validateString)(properties.processUser));
    return errors.wrap('supplied properties not correct for "RosMonitoringAgentProcessProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitoringAgentProcess` resource
 *
 * @param properties - the TypeScript properties of a `RosMonitoringAgentProcessProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitoringAgentProcess` resource.
 */
// @ts-ignore TS6133
function rosMonitoringAgentProcessPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMonitoringAgentProcessPropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      ProcessName: ros.stringToRosTemplate(properties.processName),
      ProcessUser: ros.stringToRosTemplate(properties.processUser),
    };
}

/**
 * A ROS template type:  `ALIYUN::CMS::MonitoringAgentProcess`
 */
export class RosMonitoringAgentProcess extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitoringAgentProcess";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Id: The process ID.
     */
    public readonly attrId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string;

    /**
     * @Property processName: The name of the process.
     */
    public processName: string | undefined;

    /**
     * @Property processUser: The user who launched the process.
     */
    public processUser: string | undefined;

    /**
     * Create a new `ALIYUN::CMS::MonitoringAgentProcess`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitoringAgentProcessProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMonitoringAgentProcess.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrId = ros.Token.asString(this.getAtt('Id'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.processName = props.processName;
        this.processUser = props.processUser;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            processName: this.processName,
            processUser: this.processUser,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMonitoringAgentProcessPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
