"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosMonitoringAgentProcess = exports.RosMonitorGroupInstances = exports.RosMonitorGroup = exports.RosMetricRuleTemplate = exports.RosMetricRuleTargets = exports.RosGroupMetricRule = exports.RosEventRuleTargets = exports.RosEventRule = exports.RosDynamicTagGroup = exports.RosContactGroup = exports.RosContact = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosContactProps`
 *
 * @param properties - the TypeScript properties of a `RosContactProps`
 *
 * @returns the result of the validation.
 */
function RosContactPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosContactPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosContact extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CMS::Contact`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosContact.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactName = ros.Token.asString(this.getAtt('ContactName'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.channels = props.channels;
        this.contactName = props.contactName;
        this.describe = props.describe;
    }
    get rosProperties() {
        return {
            channels: this.channels,
            contactName: this.contactName,
            describe: this.describe,
        };
    }
    renderProperties(props) {
        return rosContactPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosContact = RosContact;
/**
 * The resource type name for this resource class.
 */
RosContact.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::Contact";
/**
 * Determine whether the given properties match those of a `ChannelsProperty`
 *
 * @param properties - the TypeScript properties of a `ChannelsProperty`
 *
 * @returns the result of the validation.
 */
function RosContact_ChannelsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosContactChannelsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosContact_ChannelsPropertyValidator(properties).assertSuccess();
    return {
        Mail: ros.stringToRosTemplate(properties.mail),
        AliIM: ros.stringToRosTemplate(properties.aliIm),
        DingWebHook: ros.stringToRosTemplate(properties.dingWebHook),
        SMS: ros.stringToRosTemplate(properties.sms),
    };
}
/**
 * Determine whether the given properties match those of a `RosContactGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosContactGroupProps`
 *
 * @returns the result of the validation.
 */
function RosContactGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('describe', ros.requiredValidator)(properties.describe));
    errors.collect(ros.propertyValidator('describe', ros.validateString)(properties.describe));
    errors.collect(ros.propertyValidator('contactGroupName', ros.requiredValidator)(properties.contactGroupName));
    errors.collect(ros.propertyValidator('contactGroupName', ros.validateString)(properties.contactGroupName));
    errors.collect(ros.propertyValidator('contactNames', ros.requiredValidator)(properties.contactNames));
    if (properties.contactNames && (Array.isArray(properties.contactNames) || (typeof properties.contactNames) === 'string')) {
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
function rosContactGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosContactGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CMS::ContactGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosContactGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactGroupName = ros.Token.asString(this.getAtt('ContactGroupName'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.contactGroupName = props.contactGroupName;
        this.contactNames = props.contactNames;
        this.describe = props.describe;
    }
    get rosProperties() {
        return {
            contactGroupName: this.contactGroupName,
            contactNames: this.contactNames,
            describe: this.describe,
        };
    }
    renderProperties(props) {
        return rosContactGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosContactGroup = RosContactGroup;
/**
 * The resource type name for this resource class.
 */
RosContactGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::ContactGroup";
/**
 * Determine whether the given properties match those of a `RosDynamicTagGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDynamicTagGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDynamicTagGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('contactGroupList', ros.requiredValidator)(properties.contactGroupList));
    errors.collect(ros.propertyValidator('contactGroupList', ros.listValidator(ros.validateString))(properties.contactGroupList));
    if (properties.matchExpressFilterRelation && (typeof properties.matchExpressFilterRelation) !== 'object') {
        errors.collect(ros.propertyValidator('matchExpressFilterRelation', ros.validateAllowedValues)({
            data: properties.matchExpressFilterRelation,
            allowedValues: ["and", "or"],
        }));
    }
    errors.collect(ros.propertyValidator('matchExpressFilterRelation', ros.validateString)(properties.matchExpressFilterRelation));
    errors.collect(ros.propertyValidator('enableSubscribeEvent', ros.validateBoolean)(properties.enableSubscribeEvent));
    if (properties.templateIdList && (Array.isArray(properties.templateIdList) || (typeof properties.templateIdList) === 'string')) {
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
    if (properties.matchExpress && (Array.isArray(properties.matchExpress) || (typeof properties.matchExpress) === 'string')) {
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
function rosDynamicTagGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosDynamicTagGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CMS::DynamicTagGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosDynamicTagGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosDynamicTagGroup = RosDynamicTagGroup;
/**
 * The resource type name for this resource class.
 */
RosDynamicTagGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::DynamicTagGroup";
/**
 * Determine whether the given properties match those of a `MatchExpressProperty`
 *
 * @param properties - the TypeScript properties of a `MatchExpressProperty`
 *
 * @returns the result of the validation.
 */
function RosDynamicTagGroup_MatchExpressPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tagValue', ros.requiredValidator)(properties.tagValue));
    errors.collect(ros.propertyValidator('tagValue', ros.validateString)(properties.tagValue));
    errors.collect(ros.propertyValidator('tagValueMatchFunction', ros.requiredValidator)(properties.tagValueMatchFunction));
    if (properties.tagValueMatchFunction && (typeof properties.tagValueMatchFunction) !== 'object') {
        errors.collect(ros.propertyValidator('tagValueMatchFunction', ros.validateAllowedValues)({
            data: properties.tagValueMatchFunction,
            allowedValues: ["contains", "startWith", "endWith", "notContains", "equals", "all"],
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
function rosDynamicTagGroupMatchExpressPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosDynamicTagGroup_MatchExpressPropertyValidator(properties).assertSuccess();
    return {
        TagValue: ros.stringToRosTemplate(properties.tagValue),
        TagValueMatchFunction: ros.stringToRosTemplate(properties.tagValueMatchFunction),
    };
}
/**
 * Determine whether the given properties match those of a `RosEventRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosEventRuleProps`
 *
 * @returns the result of the validation.
 */
function RosEventRulePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('eventPattern', ros.requiredValidator)(properties.eventPattern));
    if (properties.eventPattern && (Array.isArray(properties.eventPattern) || (typeof properties.eventPattern) === 'string')) {
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
function rosEventRulePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosEventRule extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CMS::EventRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            eventPattern: this.eventPattern,
            ruleName: this.ruleName,
            description: this.description,
            eventType: this.eventType,
            groupId: this.groupId,
            state: this.state,
        };
    }
    renderProperties(props) {
        return rosEventRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosEventRule = RosEventRule;
/**
 * The resource type name for this resource class.
 */
RosEventRule.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::EventRule";
/**
 * Determine whether the given properties match those of a `EventPatternProperty`
 *
 * @param properties - the TypeScript properties of a `EventPatternProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRule_EventPatternPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosEventRuleEventPatternPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
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
 * Determine whether the given properties match those of a `RosEventRuleTargetsProps`
 *
 * @param properties - the TypeScript properties of a `RosEventRuleTargetsProps`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargetsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.contactParameters && (Array.isArray(properties.contactParameters) || (typeof properties.contactParameters) === 'string')) {
        errors.collect(ros.propertyValidator('contactParameters', ros.validateLength)({
            data: properties.contactParameters.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('contactParameters', ros.listValidator(RosEventRuleTargets_ContactParametersPropertyValidator))(properties.contactParameters));
    if (properties.slsParameters && (Array.isArray(properties.slsParameters) || (typeof properties.slsParameters) === 'string')) {
        errors.collect(ros.propertyValidator('slsParameters', ros.validateLength)({
            data: properties.slsParameters.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('slsParameters', ros.listValidator(RosEventRuleTargets_SlsParametersPropertyValidator))(properties.slsParameters));
    if (properties.webhookParameters && (Array.isArray(properties.webhookParameters) || (typeof properties.webhookParameters) === 'string')) {
        errors.collect(ros.propertyValidator('webhookParameters', ros.validateLength)({
            data: properties.webhookParameters.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('webhookParameters', ros.listValidator(RosEventRuleTargets_WebhookParametersPropertyValidator))(properties.webhookParameters));
    if (properties.fcParameters && (Array.isArray(properties.fcParameters) || (typeof properties.fcParameters) === 'string')) {
        errors.collect(ros.propertyValidator('fcParameters', ros.validateLength)({
            data: properties.fcParameters.length,
            min: undefined,
            max: 5,
        }));
    }
    errors.collect(ros.propertyValidator('fcParameters', ros.listValidator(RosEventRuleTargets_FcParametersPropertyValidator))(properties.fcParameters));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    if (properties.mnsParameters && (Array.isArray(properties.mnsParameters) || (typeof properties.mnsParameters) === 'string')) {
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
function rosEventRuleTargetsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosEventRuleTargets extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CMS::EventRuleTargets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosEventRuleTargets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ruleName = props.ruleName;
        this.contactParameters = props.contactParameters;
        this.fcParameters = props.fcParameters;
        this.mnsParameters = props.mnsParameters;
        this.slsParameters = props.slsParameters;
        this.webhookParameters = props.webhookParameters;
    }
    get rosProperties() {
        return {
            ruleName: this.ruleName,
            contactParameters: this.contactParameters,
            fcParameters: this.fcParameters,
            mnsParameters: this.mnsParameters,
            slsParameters: this.slsParameters,
            webhookParameters: this.webhookParameters,
        };
    }
    renderProperties(props) {
        return rosEventRuleTargetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosEventRuleTargets = RosEventRuleTargets;
/**
 * The resource type name for this resource class.
 */
RosEventRuleTargets.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::EventRuleTargets";
/**
 * Determine whether the given properties match those of a `ContactParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ContactParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_ContactParametersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosEventRuleTargetsContactParametersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosEventRuleTargets_ContactParametersPropertyValidator(properties).assertSuccess();
    return {
        ContactGroupName: ros.stringToRosTemplate(properties.contactGroupName),
        Level: ros.stringToRosTemplate(properties.level),
        Id: ros.stringToRosTemplate(properties.id),
    };
}
/**
 * Determine whether the given properties match those of a `FcParametersProperty`
 *
 * @param properties - the TypeScript properties of a `FcParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_FcParametersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosEventRuleTargetsFcParametersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosEventRuleTargets_FcParametersPropertyValidator(properties).assertSuccess();
    return {
        FunctionName: ros.stringToRosTemplate(properties.functionName),
        ServiceName: ros.stringToRosTemplate(properties.serviceName),
        Region: ros.stringToRosTemplate(properties.region),
        Id: ros.stringToRosTemplate(properties.id),
    };
}
/**
 * Determine whether the given properties match those of a `MnsParametersProperty`
 *
 * @param properties - the TypeScript properties of a `MnsParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_MnsParametersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosEventRuleTargetsMnsParametersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosEventRuleTargets_MnsParametersPropertyValidator(properties).assertSuccess();
    return {
        Region: ros.stringToRosTemplate(properties.region),
        Id: ros.stringToRosTemplate(properties.id),
        Queue: ros.stringToRosTemplate(properties.queue),
    };
}
/**
 * Determine whether the given properties match those of a `SlsParametersProperty`
 *
 * @param properties - the TypeScript properties of a `SlsParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_SlsParametersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosEventRuleTargetsSlsParametersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosEventRuleTargets_SlsParametersPropertyValidator(properties).assertSuccess();
    return {
        Project: ros.stringToRosTemplate(properties.project),
        LogStore: ros.stringToRosTemplate(properties.logStore),
        Region: ros.stringToRosTemplate(properties.region),
        Id: ros.stringToRosTemplate(properties.id),
    };
}
/**
 * Determine whether the given properties match those of a `WebhookParametersProperty`
 *
 * @param properties - the TypeScript properties of a `WebhookParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosEventRuleTargets_WebhookParametersPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosEventRuleTargetsWebhookParametersPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosEventRuleTargets_WebhookParametersPropertyValidator(properties).assertSuccess();
    return {
        Id: ros.stringToRosTemplate(properties.id),
        Method: ros.stringToRosTemplate(properties.method),
        Protocol: ros.stringToRosTemplate(properties.protocol),
        Url: ros.stringToRosTemplate(properties.url),
    };
}
/**
 * Determine whether the given properties match those of a `RosGroupMetricRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosGroupMetricRuleProps`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRulePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('noEffectiveInterval', ros.validateString)(properties.noEffectiveInterval));
    if (properties.silenceTime && (typeof properties.silenceTime) !== 'object') {
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
function rosGroupMetricRulePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosGroupMetricRule extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CMS::GroupMetricRule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
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
    renderProperties(props) {
        return rosGroupMetricRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosGroupMetricRule = RosGroupMetricRule;
/**
 * The resource type name for this resource class.
 */
RosGroupMetricRule.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::GroupMetricRule";
/**
 * Determine whether the given properties match those of a `CriticalProperty`
 *
 * @param properties - the TypeScript properties of a `CriticalProperty`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRule_CriticalPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosGroupMetricRuleCriticalPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosGroupMetricRule_CriticalPropertyValidator(properties).assertSuccess();
    return {
        ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
        Times: ros.numberToRosTemplate(properties.times),
        Statistics: ros.stringToRosTemplate(properties.statistics),
        Threshold: ros.numberToRosTemplate(properties.threshold),
    };
}
/**
 * Determine whether the given properties match those of a `EscalationsProperty`
 *
 * @param properties - the TypeScript properties of a `EscalationsProperty`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRule_EscalationsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosGroupMetricRuleEscalationsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosGroupMetricRule_EscalationsPropertyValidator(properties).assertSuccess();
    return {
        Critical: rosGroupMetricRuleCriticalPropertyToRosTemplate(properties.critical),
        Info: rosGroupMetricRuleInfoPropertyToRosTemplate(properties.info),
        Warn: rosGroupMetricRuleWarnPropertyToRosTemplate(properties.warn),
    };
}
/**
 * Determine whether the given properties match those of a `InfoProperty`
 *
 * @param properties - the TypeScript properties of a `InfoProperty`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRule_InfoPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosGroupMetricRuleInfoPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosGroupMetricRule_InfoPropertyValidator(properties).assertSuccess();
    return {
        ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
        Times: ros.numberToRosTemplate(properties.times),
        Statistics: ros.stringToRosTemplate(properties.statistics),
        Threshold: ros.numberToRosTemplate(properties.threshold),
    };
}
/**
 * Determine whether the given properties match those of a `WarnProperty`
 *
 * @param properties - the TypeScript properties of a `WarnProperty`
 *
 * @returns the result of the validation.
 */
function RosGroupMetricRule_WarnPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosGroupMetricRuleWarnPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosGroupMetricRule_WarnPropertyValidator(properties).assertSuccess();
    return {
        ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
        Times: ros.numberToRosTemplate(properties.times),
        Statistics: ros.stringToRosTemplate(properties.statistics),
        Threshold: ros.numberToRosTemplate(properties.threshold),
    };
}
/**
 * Determine whether the given properties match those of a `RosMetricRuleTargetsProps`
 *
 * @param properties - the TypeScript properties of a `RosMetricRuleTargetsProps`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTargetsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ruleId', ros.requiredValidator)(properties.ruleId));
    errors.collect(ros.propertyValidator('ruleId', ros.validateString)(properties.ruleId));
    errors.collect(ros.propertyValidator('targets', ros.requiredValidator)(properties.targets));
    if (properties.targets && (Array.isArray(properties.targets) || (typeof properties.targets) === 'string')) {
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
function rosMetricRuleTargetsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosMetricRuleTargets extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CMS::MetricRuleTargets`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosMetricRuleTargets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArns = ros.Token.asString(this.getAtt('Arns'));
        this.attrIds = ros.Token.asString(this.getAtt('Ids'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ruleId = props.ruleId;
        this.targets = props.targets;
    }
    get rosProperties() {
        return {
            ruleId: this.ruleId,
            targets: this.targets,
        };
    }
    renderProperties(props) {
        return rosMetricRuleTargetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosMetricRuleTargets = RosMetricRuleTargets;
/**
 * The resource type name for this resource class.
 */
RosMetricRuleTargets.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MetricRuleTargets";
/**
 * Determine whether the given properties match those of a `TargetsProperty`
 *
 * @param properties - the TypeScript properties of a `TargetsProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTargets_TargetsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosMetricRuleTargetsTargetsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMetricRuleTargets_TargetsPropertyValidator(properties).assertSuccess();
    return {
        Level: ros.stringToRosTemplate(properties.level),
        Id: ros.stringToRosTemplate(properties.id),
        Arn: ros.stringToRosTemplate(properties.arn),
    };
}
/**
 * Determine whether the given properties match those of a `RosMetricRuleTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosMetricRuleTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTemplatePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    if (properties.alertTemplates && (Array.isArray(properties.alertTemplates) || (typeof properties.alertTemplates) === 'string')) {
        errors.collect(ros.propertyValidator('alertTemplates', ros.validateLength)({
            data: properties.alertTemplates.length,
            min: 0,
            max: 200,
        }));
    }
    errors.collect(ros.propertyValidator('alertTemplates', ros.listValidator(RosMetricRuleTemplate_AlertTemplatesPropertyValidator))(properties.alertTemplates));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('restVersion', ros.validateNumber)(properties.restVersion));
    errors.collect(ros.propertyValidator('templateId', ros.validateNumber)(properties.templateId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosMetricRuleTemplateProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate` resource
 *
 * @param properties - the TypeScript properties of a `RosMetricRuleTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTemplatePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosMetricRuleTemplatePropsValidator(properties).assertSuccess();
    }
    return {
        Name: ros.stringToRosTemplate(properties.name),
        AlertTemplates: ros.listMapper(rosMetricRuleTemplateAlertTemplatesPropertyToRosTemplate)(properties.alertTemplates),
        Description: ros.stringToRosTemplate(properties.description),
        RestVersion: ros.numberToRosTemplate(properties.restVersion),
        TemplateId: ros.numberToRosTemplate(properties.templateId),
    };
}
/**
 * A ROS template type:  `ALIYUN::CMS::MetricRuleTemplate`
 */
class RosMetricRuleTemplate extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CMS::MetricRuleTemplate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosMetricRuleTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrId = ros.Token.asString(this.getAtt('Id'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.alertTemplates = props.alertTemplates;
        this.description = props.description;
        this.restVersion = props.restVersion;
        this.templateId = props.templateId;
    }
    get rosProperties() {
        return {
            name: this.name,
            alertTemplates: this.alertTemplates,
            description: this.description,
            restVersion: this.restVersion,
            templateId: this.templateId,
        };
    }
    renderProperties(props) {
        return rosMetricRuleTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosMetricRuleTemplate = RosMetricRuleTemplate;
/**
 * The resource type name for this resource class.
 */
RosMetricRuleTemplate.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MetricRuleTemplate";
/**
 * Determine whether the given properties match those of a `AlertTemplatesProperty`
 *
 * @param properties - the TypeScript properties of a `AlertTemplatesProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTemplate_AlertTemplatesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('metricName', ros.requiredValidator)(properties.metricName));
    errors.collect(ros.propertyValidator('metricName', ros.validateString)(properties.metricName));
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('escalations', RosMetricRuleTemplate_EscalationsPropertyValidator)(properties.escalations));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('webhook', ros.validateString)(properties.webhook));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    errors.collect(ros.propertyValidator('selector', ros.validateString)(properties.selector));
    return errors.wrap('supplied properties not correct for "AlertTemplatesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.AlertTemplates` resource
 *
 * @param properties - the TypeScript properties of a `AlertTemplatesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.AlertTemplates` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTemplateAlertTemplatesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMetricRuleTemplate_AlertTemplatesPropertyValidator(properties).assertSuccess();
    return {
        MetricName: ros.stringToRosTemplate(properties.metricName),
        Category: ros.stringToRosTemplate(properties.category),
        Escalations: rosMetricRuleTemplateEscalationsPropertyToRosTemplate(properties.escalations),
        Period: ros.numberToRosTemplate(properties.period),
        Webhook: ros.stringToRosTemplate(properties.webhook),
        Namespace: ros.stringToRosTemplate(properties.namespace),
        RuleName: ros.stringToRosTemplate(properties.ruleName),
        Selector: ros.stringToRosTemplate(properties.selector),
    };
}
/**
 * Determine whether the given properties match those of a `CriticalProperty`
 *
 * @param properties - the TypeScript properties of a `CriticalProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTemplate_CriticalPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comparisonOperator', ros.requiredValidator)(properties.comparisonOperator));
    if (properties.comparisonOperator && (typeof properties.comparisonOperator) !== 'object') {
        errors.collect(ros.propertyValidator('comparisonOperator', ros.validateAllowedValues)({
            data: properties.comparisonOperator,
            allowedValues: ["GreaterThanOrEqualToThreshold", "GreaterThanThreshold", "LessThanOrEqualToThreshold", "LessThanThreshold", "NotEqualToThreshold", "GreaterThanYesterday", "LessThanYesterday", "GreaterThanLastWeek", "LessThanLastWeek", "GreaterThanLastPeriod", "LessThanLastPeriod"],
        }));
    }
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('times', ros.requiredValidator)(properties.times));
    errors.collect(ros.propertyValidator('times', ros.validateNumber)(properties.times));
    errors.collect(ros.propertyValidator('statistics', ros.requiredValidator)(properties.statistics));
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateString)(properties.threshold));
    return errors.wrap('supplied properties not correct for "CriticalProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Critical` resource
 *
 * @param properties - the TypeScript properties of a `CriticalProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Critical` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTemplateCriticalPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMetricRuleTemplate_CriticalPropertyValidator(properties).assertSuccess();
    return {
        ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
        Times: ros.numberToRosTemplate(properties.times),
        Statistics: ros.stringToRosTemplate(properties.statistics),
        Threshold: ros.stringToRosTemplate(properties.threshold),
    };
}
/**
 * Determine whether the given properties match those of a `EscalationsProperty`
 *
 * @param properties - the TypeScript properties of a `EscalationsProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTemplate_EscalationsPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('critical', ros.requiredValidator)(properties.critical));
    errors.collect(ros.propertyValidator('critical', RosMetricRuleTemplate_CriticalPropertyValidator)(properties.critical));
    errors.collect(ros.propertyValidator('info', RosMetricRuleTemplate_InfoPropertyValidator)(properties.info));
    errors.collect(ros.propertyValidator('warn', RosMetricRuleTemplate_WarnPropertyValidator)(properties.warn));
    return errors.wrap('supplied properties not correct for "EscalationsProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Escalations` resource
 *
 * @param properties - the TypeScript properties of a `EscalationsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Escalations` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTemplateEscalationsPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMetricRuleTemplate_EscalationsPropertyValidator(properties).assertSuccess();
    return {
        Critical: rosMetricRuleTemplateCriticalPropertyToRosTemplate(properties.critical),
        Info: rosMetricRuleTemplateInfoPropertyToRosTemplate(properties.info),
        Warn: rosMetricRuleTemplateWarnPropertyToRosTemplate(properties.warn),
    };
}
/**
 * Determine whether the given properties match those of a `InfoProperty`
 *
 * @param properties - the TypeScript properties of a `InfoProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTemplate_InfoPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comparisonOperator', ros.requiredValidator)(properties.comparisonOperator));
    if (properties.comparisonOperator && (typeof properties.comparisonOperator) !== 'object') {
        errors.collect(ros.propertyValidator('comparisonOperator', ros.validateAllowedValues)({
            data: properties.comparisonOperator,
            allowedValues: ["GreaterThanOrEqualToThreshold", "GreaterThanThreshold", "LessThanOrEqualToThreshold", "LessThanThreshold", "NotEqualToThreshold", "GreaterThanYesterday", "LessThanYesterday", "GreaterThanLastWeek", "LessThanLastWeek", "GreaterThanLastPeriod", "LessThanLastPeriod"],
        }));
    }
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('times', ros.requiredValidator)(properties.times));
    errors.collect(ros.propertyValidator('times', ros.validateNumber)(properties.times));
    errors.collect(ros.propertyValidator('statistics', ros.requiredValidator)(properties.statistics));
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateString)(properties.threshold));
    return errors.wrap('supplied properties not correct for "InfoProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Info` resource
 *
 * @param properties - the TypeScript properties of a `InfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Info` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTemplateInfoPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMetricRuleTemplate_InfoPropertyValidator(properties).assertSuccess();
    return {
        ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
        Times: ros.numberToRosTemplate(properties.times),
        Statistics: ros.stringToRosTemplate(properties.statistics),
        Threshold: ros.stringToRosTemplate(properties.threshold),
    };
}
/**
 * Determine whether the given properties match those of a `WarnProperty`
 *
 * @param properties - the TypeScript properties of a `WarnProperty`
 *
 * @returns the result of the validation.
 */
function RosMetricRuleTemplate_WarnPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comparisonOperator', ros.requiredValidator)(properties.comparisonOperator));
    if (properties.comparisonOperator && (typeof properties.comparisonOperator) !== 'object') {
        errors.collect(ros.propertyValidator('comparisonOperator', ros.validateAllowedValues)({
            data: properties.comparisonOperator,
            allowedValues: ["GreaterThanOrEqualToThreshold", "GreaterThanThreshold", "LessThanOrEqualToThreshold", "LessThanThreshold", "NotEqualToThreshold", "GreaterThanYesterday", "LessThanYesterday", "GreaterThanLastWeek", "LessThanLastWeek", "GreaterThanLastPeriod", "LessThanLastPeriod"],
        }));
    }
    errors.collect(ros.propertyValidator('comparisonOperator', ros.validateString)(properties.comparisonOperator));
    errors.collect(ros.propertyValidator('times', ros.requiredValidator)(properties.times));
    errors.collect(ros.propertyValidator('times', ros.validateNumber)(properties.times));
    errors.collect(ros.propertyValidator('statistics', ros.requiredValidator)(properties.statistics));
    errors.collect(ros.propertyValidator('statistics', ros.validateString)(properties.statistics));
    errors.collect(ros.propertyValidator('threshold', ros.requiredValidator)(properties.threshold));
    errors.collect(ros.propertyValidator('threshold', ros.validateString)(properties.threshold));
    return errors.wrap('supplied properties not correct for "WarnProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Warn` resource
 *
 * @param properties - the TypeScript properties of a `WarnProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MetricRuleTemplate.Warn` resource.
 */
// @ts-ignore TS6133
function rosMetricRuleTemplateWarnPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMetricRuleTemplate_WarnPropertyValidator(properties).assertSuccess();
    return {
        ComparisonOperator: ros.stringToRosTemplate(properties.comparisonOperator),
        Times: ros.numberToRosTemplate(properties.times),
        Statistics: ros.stringToRosTemplate(properties.statistics),
        Threshold: ros.stringToRosTemplate(properties.threshold),
    };
}
/**
 * Determine whether the given properties match those of a `RosMonitorGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupProps`
 *
 * @returns the result of the validation.
 */
function RosMonitorGroupPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosMonitorGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosMonitorGroup extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CMS::MonitorGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosMonitorGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = ros.Token.asString(this.getAtt('GroupId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupName = props.groupName;
        this.contactGroups = props.contactGroups;
    }
    get rosProperties() {
        return {
            groupName: this.groupName,
            contactGroups: this.contactGroups,
        };
    }
    renderProperties(props) {
        return rosMonitorGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosMonitorGroup = RosMonitorGroup;
/**
 * The resource type name for this resource class.
 */
RosMonitorGroup.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitorGroup";
/**
 * Determine whether the given properties match those of a `RosMonitorGroupInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosMonitorGroupInstancesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instances', ros.requiredValidator)(properties.instances));
    if (properties.instances && (Array.isArray(properties.instances) || (typeof properties.instances) === 'string')) {
        errors.collect(ros.propertyValidator('instances', ros.validateLength)({
            data: properties.instances.length,
            min: 1,
            max: 100,
        }));
    }
    errors.collect(ros.propertyValidator('instances', ros.listValidator(RosMonitorGroupInstances_InstancesPropertyValidator))(properties.instances));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateNumber)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosMonitorGroupInstancesProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitorGroupInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitorGroupInstances` resource.
 */
// @ts-ignore TS6133
function rosMonitorGroupInstancesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosMonitorGroupInstancesPropsValidator(properties).assertSuccess();
    }
    return {
        GroupId: ros.numberToRosTemplate(properties.groupId),
        Instances: ros.listMapper(rosMonitorGroupInstancesInstancesPropertyToRosTemplate)(properties.instances),
    };
}
/**
 * A ROS template type:  `ALIYUN::CMS::MonitorGroupInstances`
 */
class RosMonitorGroupInstances extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CMS::MonitorGroupInstances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosMonitorGroupInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupId = ros.Token.asString(this.getAtt('GroupId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupId = props.groupId;
        this.instances = props.instances;
    }
    get rosProperties() {
        return {
            groupId: this.groupId,
            instances: this.instances,
        };
    }
    renderProperties(props) {
        return rosMonitorGroupInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosMonitorGroupInstances = RosMonitorGroupInstances;
/**
 * The resource type name for this resource class.
 */
RosMonitorGroupInstances.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitorGroupInstances";
/**
 * Determine whether the given properties match those of a `InstancesProperty`
 *
 * @param properties - the TypeScript properties of a `InstancesProperty`
 *
 * @returns the result of the validation.
 */
function RosMonitorGroupInstances_InstancesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('category', ros.requiredValidator)(properties.category));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('regionId', ros.requiredValidator)(properties.regionId));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "InstancesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitorGroupInstances.Instances` resource
 *
 * @param properties - the TypeScript properties of a `InstancesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::MonitorGroupInstances.Instances` resource.
 */
// @ts-ignore TS6133
function rosMonitorGroupInstancesInstancesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosMonitorGroupInstances_InstancesPropertyValidator(properties).assertSuccess();
    return {
        InstanceName: ros.stringToRosTemplate(properties.instanceName),
        Category: ros.stringToRosTemplate(properties.category),
        InstanceId: ros.stringToRosTemplate(properties.instanceId),
        RegionId: ros.stringToRosTemplate(properties.regionId),
    };
}
/**
 * Determine whether the given properties match those of a `RosMonitoringAgentProcessProps`
 *
 * @param properties - the TypeScript properties of a `RosMonitoringAgentProcessProps`
 *
 * @returns the result of the validation.
 */
function RosMonitoringAgentProcessPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
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
function rosMonitoringAgentProcessPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosMonitoringAgentProcess extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CMS::MonitoringAgentProcess`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosMonitoringAgentProcess.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrId = ros.Token.asString(this.getAtt('Id'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.processName = props.processName;
        this.processUser = props.processUser;
    }
    get rosProperties() {
        return {
            instanceId: this.instanceId,
            processName: this.processName,
            processUser: this.processUser,
        };
    }
    renderProperties(props) {
        return rosMonitoringAgentProcessPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosMonitoringAgentProcess = RosMonitoringAgentProcess;
/**
 * The resource type name for this resource class.
 */
RosMonitoringAgentProcess.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::MonitoringAgentProcess";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNtcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXVCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx3QkFBd0IsQ0FBQyxVQUFlO0lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5RixN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QUM7QUFDTixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFhLHlCQUEwQixTQUFRLEdBQUcsQ0FBQyxXQUFXO0lBa0MxRDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFDLEVBQUUsZ0NBQXlDO1FBQzFILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixDQUFDLHNCQUFzQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUN6RSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNoQyxDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sMkNBQTJDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7O0FBN0RMLDhEQThEQztBQTdERzs7R0FFRztBQUNvQixnREFBc0IsR0FBRyxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDTVM6OkNvbnRhY3RgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ29udGFjdFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGFubmVsczogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hhbm5lbHM6IFJvc0NvbnRhY3QuQ2hhbm5lbHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsYXJtIGNvbnRhY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFjdE5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmliZTogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBhbGVydCBjb250YWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaWJlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ29udGFjdFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDb250YWN0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ29udGFjdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpYmUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVzY3JpYmUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaWJlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaWJlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250YWN0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb250YWN0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGFjdE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NoYW5uZWxzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNoYW5uZWxzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjaGFubmVscycsIFJvc0NvbnRhY3RfQ2hhbm5lbHNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jaGFubmVscykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDb250YWN0UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6Q29udGFjdGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ29udGFjdFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkNvbnRhY3RgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ29udGFjdFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ29udGFjdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENoYW5uZWxzOiByb3NDb250YWN0Q2hhbm5lbHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jaGFubmVscyksXG4gICAgICBDb250YWN0TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb250YWN0TmFtZSksXG4gICAgICBEZXNjcmliZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmliZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Q01TOjpDb250YWN0YFxuICovXG5leHBvcnQgY2xhc3MgUm9zQ29udGFjdCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q01TOjpDb250YWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ29udGFjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGFybSBjb250YWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29udGFjdE5hbWU6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoYW5uZWxzOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgY2hhbm5lbHM6IFJvc0NvbnRhY3QuQ2hhbm5lbHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsYXJtIGNvbnRhY3QuXG4gICAgICovXG4gICAgcHVibGljIGNvbnRhY3ROYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpYmU6IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYWxlcnQgY29udGFjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpYmU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDTVM6OkNvbnRhY3RgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0NvbnRhY3RQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0NvbnRhY3QuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNvbnRhY3ROYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdDb250YWN0TmFtZScpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBwcm9wcy5jaGFubmVscztcbiAgICAgICAgdGhpcy5jb250YWN0TmFtZSA9IHByb3BzLmNvbnRhY3ROYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaWJlID0gcHJvcHMuZGVzY3JpYmU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hhbm5lbHM6IHRoaXMuY2hhbm5lbHMsXG4gICAgICAgICAgICBjb250YWN0TmFtZTogdGhpcy5jb250YWN0TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaWJlOiB0aGlzLmRlc2NyaWJlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NDb250YWN0UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zQ29udGFjdCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbm5lbHNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWFpbDogVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIGNvbnRhY3QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtYWlsPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGFsaUltOiBUaGUgVHJhZGVNYW5hZ2VyIElELlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYWxpSW0/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZGluZ1dlYkhvb2s6IFRoZSBEaW5nVGFsayBDaGF0Ym90IGFkZHJlc3MuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBkaW5nV2ViSG9vaz86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzbXM6IFRoZSBtb2JpbGUgcGhvbmUgbnVtYmVyIG9mIHRoZSBjb250YWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc21zPzogc3RyaW5nO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ2hhbm5lbHNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ2hhbm5lbHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDb250YWN0X0NoYW5uZWxzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYWlsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1haWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsaUltJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFsaUltKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaW5nV2ViSG9vaycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaW5nV2ViSG9vaykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc21zJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNtcykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJDaGFubmVsc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkNvbnRhY3QuQ2hhbm5lbHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENoYW5uZWxzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6Q29udGFjdC5DaGFubmVsc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDb250YWN0Q2hhbm5lbHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zQ29udGFjdF9DaGFubmVsc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgTWFpbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYWlsKSxcbiAgICAgIEFsaUlNOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFsaUltKSxcbiAgICAgIERpbmdXZWJIb29rOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpbmdXZWJIb29rKSxcbiAgICAgIFNNUzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zbXMpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDTVM6OkNvbnRhY3RHcm91cGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDb250YWN0R3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29udGFjdEdyb3VwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IGNvbnRhY3QgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFjdEdyb3VwTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRhY3ROYW1lczogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IGNvbnRhY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFjdE5hbWVzOiBzdHJpbmdbXTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmliZTogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBhbGVydCBjb250YWN0IGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaWJlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ29udGFjdEdyb3VwUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NvbnRhY3RHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0NvbnRhY3RHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpYmUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVzY3JpYmUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaWJlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaWJlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250YWN0R3JvdXBOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvbnRhY3RHcm91cE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRhY3RHcm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGFjdEdyb3VwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdE5hbWVzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvbnRhY3ROYW1lcykpO1xuICAgIGlmKHByb3BlcnRpZXMuY29udGFjdE5hbWVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuY29udGFjdE5hbWVzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuY29udGFjdE5hbWVzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdE5hbWVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNvbnRhY3ROYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdE5hbWVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5jb250YWN0TmFtZXMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ29udGFjdEdyb3VwUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6Q29udGFjdEdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDb250YWN0R3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpDb250YWN0R3JvdXBgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ29udGFjdEdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDb250YWN0R3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDb250YWN0R3JvdXBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnRhY3RHcm91cE5hbWUpLFxuICAgICAgQ29udGFjdE5hbWVzOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb250YWN0TmFtZXMpLFxuICAgICAgRGVzY3JpYmU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpYmUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkNNUzo6Q29udGFjdEdyb3VwYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQ29udGFjdEdyb3VwIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDTVM6OkNvbnRhY3RHcm91cFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENvbnRhY3RHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0IGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29udGFjdEdyb3VwTmFtZTogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29udGFjdEdyb3VwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IGNvbnRhY3QgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGNvbnRhY3RHcm91cE5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWN0TmFtZXM6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBjb250YWN0TmFtZXM6IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaWJlOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGFsZXJ0IGNvbnRhY3QgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaWJlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q01TOjpDb250YWN0R3JvdXBgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0NvbnRhY3RHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ29udGFjdEdyb3VwLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJDb250YWN0R3JvdXBOYW1lID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdDb250YWN0R3JvdXBOYW1lJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jb250YWN0R3JvdXBOYW1lID0gcHJvcHMuY29udGFjdEdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy5jb250YWN0TmFtZXMgPSBwcm9wcy5jb250YWN0TmFtZXM7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUgPSBwcm9wcy5kZXNjcmliZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250YWN0R3JvdXBOYW1lOiB0aGlzLmNvbnRhY3RHcm91cE5hbWUsXG4gICAgICAgICAgICBjb250YWN0TmFtZXM6IHRoaXMuY29udGFjdE5hbWVzLFxuICAgICAgICAgICAgZGVzY3JpYmU6IHRoaXMuZGVzY3JpYmUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0NvbnRhY3RHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q01TOjpEeW5hbWljVGFnR3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRHluYW1pY1RhZ0dyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRhY3RHcm91cExpc3Q6IEFsYXJtIGNvbnRhY3RzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRhY3RHcm91cExpc3Q6IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ0tleTogVGFnIGtleS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdLZXk6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVJbnN0YWxsQWdlbnQ6IFdoZXRoZXIgdG8gZW5hYmxlIGluaXRpYWwgaW5zdGFsbGF0aW9uIG1vbml0b3JpbmcgcGx1Zywgbm90IGluc3RhbGxlZCBieSBkZWZhdWx0LiBWYWx1ZXMgYXJlOlxuICAgICAqIHRydWU6IGVuYWJsZSBpbnN0YWxsYXRpb25cbiAgICAgKiBOb3RlIElmIEVDUyBnZW5lcmF0ZWQgaW5zdGFuY2VzIGdyb3VwIGRvZXMgbm90IG1vbml0b3IgcGx1Zy1pbiBpbnN0YWxsZWQgd2lsbCBhdHRlbXB0IHRvIGF1dG9tYXRpY2FsbHkgaW5zdGFsbC5cbiAgICAgKiBmYWxzZTogZGlzYWJsZSBpbnN0YWxsYXRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVJbnN0YWxsQWdlbnQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZVN1YnNjcmliZUV2ZW50OiBXaGV0aGVyIHRoZSBldmVudCBzdWJzY3JpcHRpb24gaXMgZW5hYmxlZC4gVmFsdWVzIGFyZVxuICAgICAqIDp0cnVlOiBlbmFibGUgZXZlbnQgc3Vic2NyaXB0aW9uXG4gICAgICogZmFsc2U6IGRpc2FibGUgZXZlbnQgc3Vic2NyaXB0aW9uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5hYmxlU3Vic2NyaWJlRXZlbnQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1hdGNoRXhwcmVzczogTWF0Y2hpbmcgbGlzdC4gT25seSBzdXBwb3J0cyBvbmUgY3VycmVudGx5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hdGNoRXhwcmVzcz86IEFycmF5PFJvc0R5bmFtaWNUYWdHcm91cC5NYXRjaEV4cHJlc3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF0Y2hFeHByZXNzRmlsdGVyUmVsYXRpb246IFRoZSByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgY29uZGl0aW9uYWwgZXhwcmVzc2lvbnMuIFZhbHVlcyBhcmU6XG4gICAgICogYW5kOiB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW5cbiAgICAgKiBvcjogdGhlIHJlbGF0aW9uc2hpcCBvciB0aGVcbiAgICAgKiBEZXNjcmlwdGlvbiBjdXJyZW50bHkgc3VwcG9ydHMgb25seSBvbmUgY29tYmluYXRpb24gb2YgY29uZGl0aW9ucywgdGhlIGZvbGxvdy11cCBBbGkgY2xvdWQgd2lsbCBzdXBwb3J0IGEgdmFyaWV0eSBvZiBjb21iaW5hdGlvbnMgb2YgY29uZGl0aW9ucy5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZUlkTGlzdDogQWxhcm0gdGVtcGxhdGUgSUQgbGlzdC5cbiAgICAgKiBXaGVuIHRoZSBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBhcHBsaWNhdGlvbiBncm91cCBzeW5jaHJvbml6ZXMgdGFncywgaXQgd2lsbCBnZW5lcmF0ZSBhbGFybSBydWxlcyBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBhbGFybSB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0ZW1wbGF0ZUlkTGlzdD86IHN0cmluZ1tdO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0R5bmFtaWNUYWdHcm91cFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEeW5hbWljVGFnR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NEeW5hbWljVGFnR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRhY3RHcm91cExpc3QnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29udGFjdEdyb3VwTGlzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdEdyb3VwTGlzdCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZVN0cmluZykpKHByb3BlcnRpZXMuY29udGFjdEdyb3VwTGlzdCkpO1xuICAgIGlmKHByb3BlcnRpZXMubWF0Y2hFeHByZXNzRmlsdGVyUmVsYXRpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLm1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcImFuZFwiLFwib3JcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlU3Vic2NyaWJlRXZlbnQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmVuYWJsZVN1YnNjcmliZUV2ZW50KSk7XG4gICAgaWYocHJvcGVydGllcy50ZW1wbGF0ZUlkTGlzdCAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnRlbXBsYXRlSWRMaXN0KSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGVtcGxhdGVJZExpc3QpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZUlkTGlzdCcsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy50ZW1wbGF0ZUlkTGlzdC5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVJZExpc3QnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLnRlbXBsYXRlSWRMaXN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdLZXknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFnS2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdLZXknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFnS2V5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbmFibGVJbnN0YWxsQWdlbnQnLCByb3MudmFsaWRhdGVCb29sZWFuKShwcm9wZXJ0aWVzLmVuYWJsZUluc3RhbGxBZ2VudCkpO1xuICAgIGlmKHByb3BlcnRpZXMubWF0Y2hFeHByZXNzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMubWF0Y2hFeHByZXNzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMubWF0Y2hFeHByZXNzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF0Y2hFeHByZXNzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1hdGNoRXhwcmVzcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogMSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF0Y2hFeHByZXNzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zRHluYW1pY1RhZ0dyb3VwX01hdGNoRXhwcmVzc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5tYXRjaEV4cHJlc3MpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRHluYW1pY1RhZ0dyb3VwUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6RHluYW1pY1RhZ0dyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NEeW5hbWljVGFnR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpEeW5hbWljVGFnR3JvdXBgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRHluYW1pY1RhZ0dyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NEeW5hbWljVGFnR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDb250YWN0R3JvdXBMaXN0OiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb250YWN0R3JvdXBMaXN0KSxcbiAgICAgIFRhZ0tleTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YWdLZXkpLFxuICAgICAgRW5hYmxlSW5zdGFsbEFnZW50OiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVJbnN0YWxsQWdlbnQpLFxuICAgICAgRW5hYmxlU3Vic2NyaWJlRXZlbnQ6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVuYWJsZVN1YnNjcmliZUV2ZW50KSxcbiAgICAgIE1hdGNoRXhwcmVzczogcm9zLmxpc3RNYXBwZXIocm9zRHluYW1pY1RhZ0dyb3VwTWF0Y2hFeHByZXNzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLm1hdGNoRXhwcmVzcyksXG4gICAgICBNYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbiksXG4gICAgICBUZW1wbGF0ZUlkTGlzdDogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMudGVtcGxhdGVJZExpc3QpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkNNUzo6RHluYW1pY1RhZ0dyb3VwYFxuICovXG5leHBvcnQgY2xhc3MgUm9zRHluYW1pY1RhZ0dyb3VwIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDTVM6OkR5bmFtaWNUYWdHcm91cFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIER5bmFtaWNUYWdSdWxlSWQ6IER5bmFtaWMgdGFnIHJ1bGUgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEeW5hbWljVGFnUnVsZUlkOiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFRhZ0tleTogVGFnIGtleS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhZ0tleTogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29udGFjdEdyb3VwTGlzdDogQWxhcm0gY29udGFjdHMuXG4gICAgICovXG4gICAgcHVibGljIGNvbnRhY3RHcm91cExpc3Q6IHN0cmluZ1tdO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ0tleTogVGFnIGtleS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnS2V5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlSW5zdGFsbEFnZW50OiBXaGV0aGVyIHRvIGVuYWJsZSBpbml0aWFsIGluc3RhbGxhdGlvbiBtb25pdG9yaW5nIHBsdWcsIG5vdCBpbnN0YWxsZWQgYnkgZGVmYXVsdC4gVmFsdWVzIGFyZTpcbiAgICAgKiB0cnVlOiBlbmFibGUgaW5zdGFsbGF0aW9uXG4gICAgICogTm90ZSBJZiBFQ1MgZ2VuZXJhdGVkIGluc3RhbmNlcyBncm91cCBkb2VzIG5vdCBtb25pdG9yIHBsdWctaW4gaW5zdGFsbGVkIHdpbGwgYXR0ZW1wdCB0byBhdXRvbWF0aWNhbGx5IGluc3RhbGwuXG4gICAgICogZmFsc2U6IGRpc2FibGUgaW5zdGFsbGF0aW9uXG4gICAgICovXG4gICAgcHVibGljIGVuYWJsZUluc3RhbGxBZ2VudDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVTdWJzY3JpYmVFdmVudDogV2hldGhlciB0aGUgZXZlbnQgc3Vic2NyaXB0aW9uIGlzIGVuYWJsZWQuIFZhbHVlcyBhcmVcbiAgICAgKiA6dHJ1ZTogZW5hYmxlIGV2ZW50IHN1YnNjcmlwdGlvblxuICAgICAqIGZhbHNlOiBkaXNhYmxlIGV2ZW50IHN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVTdWJzY3JpYmVFdmVudDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXRjaEV4cHJlc3M6IE1hdGNoaW5nIGxpc3QuIE9ubHkgc3VwcG9ydHMgb25lIGN1cnJlbnRseS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWF0Y2hFeHByZXNzOiBBcnJheTxSb3NEeW5hbWljVGFnR3JvdXAuTWF0Y2hFeHByZXNzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uOiBUaGUgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIGNvbmRpdGlvbmFsIGV4cHJlc3Npb25zLiBWYWx1ZXMgYXJlOlxuICAgICAqIGFuZDogdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuXG4gICAgICogb3I6IHRoZSByZWxhdGlvbnNoaXAgb3IgdGhlXG4gICAgICogRGVzY3JpcHRpb24gY3VycmVudGx5IHN1cHBvcnRzIG9ubHkgb25lIGNvbWJpbmF0aW9uIG9mIGNvbmRpdGlvbnMsIHRoZSBmb2xsb3ctdXAgQWxpIGNsb3VkIHdpbGwgc3VwcG9ydCBhIHZhcmlldHkgb2YgY29tYmluYXRpb25zIG9mIGNvbmRpdGlvbnMuXG4gICAgICovXG4gICAgcHVibGljIG1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVJZExpc3Q6IEFsYXJtIHRlbXBsYXRlIElEIGxpc3QuXG4gICAgICogV2hlbiB0aGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYXBwbGljYXRpb24gZ3JvdXAgc3luY2hyb25pemVzIHRhZ3MsIGl0IHdpbGwgZ2VuZXJhdGUgYWxhcm0gcnVsZXMgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgYWxhcm0gdGVtcGxhdGUuXG4gICAgICovXG4gICAgcHVibGljIHRlbXBsYXRlSWRMaXN0OiBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDTVM6OkR5bmFtaWNUYWdHcm91cGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRHluYW1pY1RhZ0dyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NEeW5hbWljVGFnR3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckR5bmFtaWNUYWdSdWxlSWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0R5bmFtaWNUYWdSdWxlSWQnKSk7XG4gICAgICAgIHRoaXMuYXR0clRhZ0tleSA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnVGFnS2V5JykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jb250YWN0R3JvdXBMaXN0ID0gcHJvcHMuY29udGFjdEdyb3VwTGlzdDtcbiAgICAgICAgdGhpcy50YWdLZXkgPSBwcm9wcy50YWdLZXk7XG4gICAgICAgIHRoaXMuZW5hYmxlSW5zdGFsbEFnZW50ID0gcHJvcHMuZW5hYmxlSW5zdGFsbEFnZW50O1xuICAgICAgICB0aGlzLmVuYWJsZVN1YnNjcmliZUV2ZW50ID0gcHJvcHMuZW5hYmxlU3Vic2NyaWJlRXZlbnQ7XG4gICAgICAgIHRoaXMubWF0Y2hFeHByZXNzID0gcHJvcHMubWF0Y2hFeHByZXNzO1xuICAgICAgICB0aGlzLm1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uID0gcHJvcHMubWF0Y2hFeHByZXNzRmlsdGVyUmVsYXRpb247XG4gICAgICAgIHRoaXMudGVtcGxhdGVJZExpc3QgPSBwcm9wcy50ZW1wbGF0ZUlkTGlzdDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250YWN0R3JvdXBMaXN0OiB0aGlzLmNvbnRhY3RHcm91cExpc3QsXG4gICAgICAgICAgICB0YWdLZXk6IHRoaXMudGFnS2V5LFxuICAgICAgICAgICAgZW5hYmxlSW5zdGFsbEFnZW50OiB0aGlzLmVuYWJsZUluc3RhbGxBZ2VudCxcbiAgICAgICAgICAgIGVuYWJsZVN1YnNjcmliZUV2ZW50OiB0aGlzLmVuYWJsZVN1YnNjcmliZUV2ZW50LFxuICAgICAgICAgICAgbWF0Y2hFeHByZXNzOiB0aGlzLm1hdGNoRXhwcmVzcyxcbiAgICAgICAgICAgIG1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uOiB0aGlzLm1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uLFxuICAgICAgICAgICAgdGVtcGxhdGVJZExpc3Q6IHRoaXMudGVtcGxhdGVJZExpc3QsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0R5bmFtaWNUYWdHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0R5bmFtaWNUYWdHcm91cCB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTWF0Y2hFeHByZXNzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRhZ1ZhbHVlOiBUYWcgdmFsdWUsIHVzZWQgd2l0aCBUYWdWYWx1ZU1hdGNoRnVuY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0YWdWYWx1ZTogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRhZ1ZhbHVlTWF0Y2hGdW5jdGlvbjogTWF0Y2hpbmcgbGFiZWxlZCBrZXlzLiBWYWx1ZXMgYXJlOlxuICAgICAqIGNvbnRhaW5zOiBjb250YWluc1xuICAgICAqIHN0YXJ0V2l0aDogUHJlZml4XG4gICAgICogZW5kV2l0aDogc3VmZml4XG4gICAgICogbm90Q29udGFpbnM6IG5vdCBpbmNsdWRlZFxuICAgICAqIGVxdWFsczogZXF1YWxzXG4gICAgICogYWxsOiBBbGxcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRhZ1ZhbHVlTWF0Y2hGdW5jdGlvbjogc3RyaW5nO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgTWF0Y2hFeHByZXNzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1hdGNoRXhwcmVzc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0R5bmFtaWNUYWdHcm91cF9NYXRjaEV4cHJlc3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ1ZhbHVlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhZ1ZhbHVlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdWYWx1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YWdWYWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFnVmFsdWVNYXRjaEZ1bmN0aW9uJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhZ1ZhbHVlTWF0Y2hGdW5jdGlvbikpO1xuICAgIGlmKHByb3BlcnRpZXMudGFnVmFsdWVNYXRjaEZ1bmN0aW9uICYmICh0eXBlb2YgcHJvcGVydGllcy50YWdWYWx1ZU1hdGNoRnVuY3Rpb24pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ1ZhbHVlTWF0Y2hGdW5jdGlvbicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnRhZ1ZhbHVlTWF0Y2hGdW5jdGlvbixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJjb250YWluc1wiLFwic3RhcnRXaXRoXCIsXCJlbmRXaXRoXCIsXCJub3RDb250YWluc1wiLFwiZXF1YWxzXCIsXCJhbGxcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdWYWx1ZU1hdGNoRnVuY3Rpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFnVmFsdWVNYXRjaEZ1bmN0aW9uKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk1hdGNoRXhwcmVzc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkR5bmFtaWNUYWdHcm91cC5NYXRjaEV4cHJlc3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1hdGNoRXhwcmVzc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkR5bmFtaWNUYWdHcm91cC5NYXRjaEV4cHJlc3NgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRHluYW1pY1RhZ0dyb3VwTWF0Y2hFeHByZXNzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0R5bmFtaWNUYWdHcm91cF9NYXRjaEV4cHJlc3NQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFRhZ1ZhbHVlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhZ1ZhbHVlKSxcbiAgICAgIFRhZ1ZhbHVlTWF0Y2hGdW5jdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YWdWYWx1ZU1hdGNoRnVuY3Rpb24pLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NFdmVudFJ1bGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXZlbnRQYXR0ZXJuOiBFdmVudCBwYXR0ZXJuIGNvbmZpZ3VyYXRpb24uQSBtYXhpbXVtIG9mIDIwIGV2ZW50IHBhdHRlcm5zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGV2ZW50UGF0dGVybjogQXJyYXk8Um9zRXZlbnRSdWxlLkV2ZW50UGF0dGVyblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBydWxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsYXJtIHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVsZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBhbGVydCBydWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGV2ZW50VHlwZTogVGhlIHR5cGUgb2YgdGhlIGV2ZW50IGFsZXJ0LiBWYWxpZCB2YWx1ZXM6XG4gICAgICogU1lTVEVNXG4gICAgICogQ1VTVE9NXG4gICAgICovXG4gICAgcmVhZG9ubHkgZXZlbnRUeXBlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgYXBwbGljYXRpb24gZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBJZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzdGF0ZTogVGhlIHN0YXR1cyBvZiB0aGUgYWxlcnQgcnVsZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEVOQUJMRURcbiAgICAgKiBESVNBQkxFRFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0YXRlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0V2ZW50UnVsZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NFdmVudFJ1bGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NFdmVudFJ1bGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2V2ZW50UGF0dGVybicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ldmVudFBhdHRlcm4pKTtcbiAgICBpZihwcm9wZXJ0aWVzLmV2ZW50UGF0dGVybiAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmV2ZW50UGF0dGVybikgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmV2ZW50UGF0dGVybikgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2V2ZW50UGF0dGVybicsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5ldmVudFBhdHRlcm4ubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDIwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdldmVudFBhdHRlcm4nLCByb3MubGlzdFZhbGlkYXRvcihSb3NFdmVudFJ1bGVfRXZlbnRQYXR0ZXJuUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmV2ZW50UGF0dGVybikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2V2ZW50VHlwZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ldmVudFR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXRlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ydWxlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucnVsZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NFdmVudFJ1bGVQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0V2ZW50UnVsZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NFdmVudFJ1bGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0V2ZW50UnVsZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEV2ZW50UGF0dGVybjogcm9zLmxpc3RNYXBwZXIocm9zRXZlbnRSdWxlRXZlbnRQYXR0ZXJuUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmV2ZW50UGF0dGVybiksXG4gICAgICBSdWxlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydWxlTmFtZSksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBFdmVudFR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXZlbnRUeXBlKSxcbiAgICAgIEdyb3VwSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBJZCksXG4gICAgICBTdGF0ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGF0ZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NFdmVudFJ1bGUgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNNUzo6RXZlbnRSdWxlXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgRGF0YTogTnVtYmVyIG9mIHJvd3MgYWZmZWN0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYXRhOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBldmVudFBhdHRlcm46IEV2ZW50IHBhdHRlcm4gY29uZmlndXJhdGlvbi5BIG1heGltdW0gb2YgMjAgZXZlbnQgcGF0dGVybnMuXG4gICAgICovXG4gICAgcHVibGljIGV2ZW50UGF0dGVybjogQXJyYXk8Um9zRXZlbnRSdWxlLkV2ZW50UGF0dGVyblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBydWxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsYXJtIHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIHJ1bGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYWxlcnQgcnVsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBldmVudFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBldmVudCBhbGVydC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFNZU1RFTVxuICAgICAqIENVU1RPTVxuICAgICAqL1xuICAgIHB1YmxpYyBldmVudFR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgSUQgb2YgdGhlIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RhdGU6IFRoZSBzdGF0dXMgb2YgdGhlIGFsZXJ0IHJ1bGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBFTkFCTEVEXG4gICAgICogRElTQUJMRURcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRXZlbnRSdWxlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NFdmVudFJ1bGUuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckRhdGEgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0RhdGEnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmV2ZW50UGF0dGVybiA9IHByb3BzLmV2ZW50UGF0dGVybjtcbiAgICAgICAgdGhpcy5ydWxlTmFtZSA9IHByb3BzLnJ1bGVOYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZXZlbnRUeXBlID0gcHJvcHMuZXZlbnRUeXBlO1xuICAgICAgICB0aGlzLmdyb3VwSWQgPSBwcm9wcy5ncm91cElkO1xuICAgICAgICB0aGlzLnN0YXRlID0gcHJvcHMuc3RhdGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXZlbnRQYXR0ZXJuOiB0aGlzLmV2ZW50UGF0dGVybixcbiAgICAgICAgICAgIHJ1bGVOYW1lOiB0aGlzLnJ1bGVOYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBldmVudFR5cGU6IHRoaXMuZXZlbnRUeXBlLFxuICAgICAgICAgICAgZ3JvdXBJZDogdGhpcy5ncm91cElkLFxuICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0V2ZW50UnVsZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0V2ZW50UnVsZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRXZlbnRQYXR0ZXJuUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hbWVMaXN0OiBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuIFBsZWFzZSByZWZlciB0byB0aGUgY29uZmlndXJhdGlvbiBvZiBDTVMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBuYW1lTGlzdD86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbGV2ZWxMaXN0OiBUaGUgc2V2ZXJpdHkgb2YgdGhlIGV2ZW50IGFsZXJ0LiBWYWxpZCB2YWx1ZXM6IENSSVRJQ0FMLCBXQVJOLCBJTkZPLCBhbmQgKiAoYWxsIHNldmVyaXR5XG4gICAgICogbGV2ZWxzKS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxldmVsTGlzdD86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhdHVzTGlzdDogVGhlIHN0YXR1cyBvZiB0aGUgZXZlbnQuIFBsZWFzZSByZWZlciB0byB0aGUgY29uZmlndXJhdGlvbiBvZiBDTVMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0dXNMaXN0PzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBldmVudFR5cGVMaXN0OiBUaGUgdHlwZSBvZiB0aGUgZXZlbnQuIEEgdmFsdWUgb2YgKiBpbmRpY2F0ZXMgYW55IHR5cGUuIFBsZWFzZSByZWZlciB0byB0aGUgY29uZmlndXJhdGlvbiBvZiBDTVMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBldmVudFR5cGVMaXN0PzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcm9kdWN0OiBUaGUgbmFtZSBvZiB0aGUgc2VydmljZS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBjb25maWd1cmF0aW9uIG9mIENNUy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByb2R1Y3Q/OiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBFdmVudFBhdHRlcm5Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXZlbnRQYXR0ZXJuUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRXZlbnRSdWxlX0V2ZW50UGF0dGVyblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZUxpc3QnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLm5hbWVMaXN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsZXZlbExpc3QnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVBbnkpKShwcm9wZXJ0aWVzLmxldmVsTGlzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdHVzTGlzdCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuc3RhdHVzTGlzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXZlbnRUeXBlTGlzdCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMuZXZlbnRUeXBlTGlzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvZHVjdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm9kdWN0KSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkV2ZW50UGF0dGVyblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZS5FdmVudFBhdHRlcm5gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEV2ZW50UGF0dGVyblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZS5FdmVudFBhdHRlcm5gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRXZlbnRSdWxlRXZlbnRQYXR0ZXJuUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0V2ZW50UnVsZV9FdmVudFBhdHRlcm5Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE5hbWVMaXN0OiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5uYW1lTGlzdCksXG4gICAgICBMZXZlbExpc3Q6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmxldmVsTGlzdCksXG4gICAgICBTdGF0dXNMaXN0OiByb3MubGlzdE1hcHBlcihyb3Mub2JqZWN0VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zdGF0dXNMaXN0KSxcbiAgICAgIEV2ZW50VHlwZUxpc3Q6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmV2ZW50VHlwZUxpc3QpLFxuICAgICAgUHJvZHVjdDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wcm9kdWN0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0V2ZW50UnVsZVRhcmdldHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBydWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29udGFjdFBhcmFtZXRlcnM6IENPTlRBQ1QgY29uZmlndXJhdGlvbi5BIG1heGltdW0gb2YgNSBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFjdFBhcmFtZXRlcnM/OiBBcnJheTxSb3NFdmVudFJ1bGVUYXJnZXRzLkNvbnRhY3RQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZjUGFyYW1ldGVyczogRkMgY29uZmlndXJhdGlvbi5BIG1heGltdW0gb2YgNSBwYXJhbWV0ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGZjUGFyYW1ldGVycz86IEFycmF5PFJvc0V2ZW50UnVsZVRhcmdldHMuRmNQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1uc1BhcmFtZXRlcnM6IE1OUyBjb25maWd1cmF0aW9uLkEgbWF4aW11bSBvZiA1IHBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICByZWFkb25seSBtbnNQYXJhbWV0ZXJzPzogQXJyYXk8Um9zRXZlbnRSdWxlVGFyZ2V0cy5NbnNQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNsc1BhcmFtZXRlcnM6IFNMUyBjb25maWd1cmF0aW9uLkEgbWF4aW11bSBvZiA1IHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2xzUGFyYW1ldGVycz86IEFycmF5PFJvc0V2ZW50UnVsZVRhcmdldHMuU2xzUGFyYW1ldGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJob29rUGFyYW1ldGVyczogV0VCSE9PSyBjb25maWd1cmF0aW9uLkEgbWF4aW11bSBvZiA1IHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2ViaG9va1BhcmFtZXRlcnM/OiBBcnJheTxSb3NFdmVudFJ1bGVUYXJnZXRzLldlYmhvb2tQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0V2ZW50UnVsZVRhcmdldHNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRXZlbnRSdWxlVGFyZ2V0c1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0V2ZW50UnVsZVRhcmdldHNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNvbnRhY3RQYXJhbWV0ZXJzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuY29udGFjdFBhcmFtZXRlcnMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5jb250YWN0UGFyYW1ldGVycykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRhY3RQYXJhbWV0ZXJzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNvbnRhY3RQYXJhbWV0ZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250YWN0UGFyYW1ldGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0V2ZW50UnVsZVRhcmdldHNfQ29udGFjdFBhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuY29udGFjdFBhcmFtZXRlcnMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNsc1BhcmFtZXRlcnMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5zbHNQYXJhbWV0ZXJzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuc2xzUGFyYW1ldGVycykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Nsc1BhcmFtZXRlcnMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuc2xzUGFyYW1ldGVycy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2xzUGFyYW1ldGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0V2ZW50UnVsZVRhcmdldHNfU2xzUGFyYW1ldGVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5zbHNQYXJhbWV0ZXJzKSk7XG4gICAgaWYocHJvcGVydGllcy53ZWJob29rUGFyYW1ldGVycyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLndlYmhvb2tQYXJhbWV0ZXJzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMud2ViaG9va1BhcmFtZXRlcnMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWJob29rUGFyYW1ldGVycycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy53ZWJob29rUGFyYW1ldGVycy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIG1heDogNSxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2ViaG9va1BhcmFtZXRlcnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NFdmVudFJ1bGVUYXJnZXRzX1dlYmhvb2tQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLndlYmhvb2tQYXJhbWV0ZXJzKSk7XG4gICAgaWYocHJvcGVydGllcy5mY1BhcmFtZXRlcnMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5mY1BhcmFtZXRlcnMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5mY1BhcmFtZXRlcnMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmY1BhcmFtZXRlcnMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZmNQYXJhbWV0ZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdmY1BhcmFtZXRlcnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NFdmVudFJ1bGVUYXJnZXRzX0ZjUGFyYW1ldGVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5mY1BhcmFtZXRlcnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGVOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJ1bGVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ydWxlTmFtZSkpO1xuICAgIGlmKHByb3BlcnRpZXMubW5zUGFyYW1ldGVycyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm1uc1BhcmFtZXRlcnMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5tbnNQYXJhbWV0ZXJzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbW5zUGFyYW1ldGVycycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tbnNQYXJhbWV0ZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtbnNQYXJhbWV0ZXJzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zRXZlbnRSdWxlVGFyZ2V0c19NbnNQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLm1uc1BhcmFtZXRlcnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRXZlbnRSdWxlVGFyZ2V0c1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZVRhcmdldHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0V2ZW50UnVsZVRhcmdldHNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0V2ZW50UnVsZVRhcmdldHNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0V2ZW50UnVsZVRhcmdldHNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBSdWxlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydWxlTmFtZSksXG4gICAgICBDb250YWN0UGFyYW1ldGVyczogcm9zLmxpc3RNYXBwZXIocm9zRXZlbnRSdWxlVGFyZ2V0c0NvbnRhY3RQYXJhbWV0ZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmNvbnRhY3RQYXJhbWV0ZXJzKSxcbiAgICAgIEZjUGFyYW1ldGVyczogcm9zLmxpc3RNYXBwZXIocm9zRXZlbnRSdWxlVGFyZ2V0c0ZjUGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5mY1BhcmFtZXRlcnMpLFxuICAgICAgTW5zUGFyYW1ldGVyczogcm9zLmxpc3RNYXBwZXIocm9zRXZlbnRSdWxlVGFyZ2V0c01uc1BhcmFtZXRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubW5zUGFyYW1ldGVycyksXG4gICAgICBTbHNQYXJhbWV0ZXJzOiByb3MubGlzdE1hcHBlcihyb3NFdmVudFJ1bGVUYXJnZXRzU2xzUGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5zbHNQYXJhbWV0ZXJzKSxcbiAgICAgIFdlYmhvb2tQYXJhbWV0ZXJzOiByb3MubGlzdE1hcHBlcihyb3NFdmVudFJ1bGVUYXJnZXRzV2ViaG9va1BhcmFtZXRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMud2ViaG9va1BhcmFtZXRlcnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkNNUzo6RXZlbnRSdWxlVGFyZ2V0c2BcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0V2ZW50UnVsZVRhcmdldHMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNNUzo6RXZlbnRSdWxlVGFyZ2V0c1wiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBydWxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIHJ1bGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29udGFjdFBhcmFtZXRlcnM6IENPTlRBQ1QgY29uZmlndXJhdGlvbi5BIG1heGltdW0gb2YgNSBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgcHVibGljIGNvbnRhY3RQYXJhbWV0ZXJzOiBBcnJheTxSb3NFdmVudFJ1bGVUYXJnZXRzLkNvbnRhY3RQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGZjUGFyYW1ldGVyczogRkMgY29uZmlndXJhdGlvbi5BIG1heGltdW0gb2YgNSBwYXJhbWV0ZXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyBmY1BhcmFtZXRlcnM6IEFycmF5PFJvc0V2ZW50UnVsZVRhcmdldHMuRmNQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1uc1BhcmFtZXRlcnM6IE1OUyBjb25maWd1cmF0aW9uLkEgbWF4aW11bSBvZiA1IHBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgbW5zUGFyYW1ldGVyczogQXJyYXk8Um9zRXZlbnRSdWxlVGFyZ2V0cy5NbnNQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNsc1BhcmFtZXRlcnM6IFNMUyBjb25maWd1cmF0aW9uLkEgbWF4aW11bSBvZiA1IHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgcHVibGljIHNsc1BhcmFtZXRlcnM6IEFycmF5PFJvc0V2ZW50UnVsZVRhcmdldHMuU2xzUGFyYW1ldGVyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJob29rUGFyYW1ldGVyczogV0VCSE9PSyBjb25maWd1cmF0aW9uLkEgbWF4aW11bSBvZiA1IHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgcHVibGljIHdlYmhvb2tQYXJhbWV0ZXJzOiBBcnJheTxSb3NFdmVudFJ1bGVUYXJnZXRzLldlYmhvb2tQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNNUzo6RXZlbnRSdWxlVGFyZ2V0c2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zRXZlbnRSdWxlVGFyZ2V0c1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRXZlbnRSdWxlVGFyZ2V0cy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucnVsZU5hbWUgPSBwcm9wcy5ydWxlTmFtZTtcbiAgICAgICAgdGhpcy5jb250YWN0UGFyYW1ldGVycyA9IHByb3BzLmNvbnRhY3RQYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLmZjUGFyYW1ldGVycyA9IHByb3BzLmZjUGFyYW1ldGVycztcbiAgICAgICAgdGhpcy5tbnNQYXJhbWV0ZXJzID0gcHJvcHMubW5zUGFyYW1ldGVycztcbiAgICAgICAgdGhpcy5zbHNQYXJhbWV0ZXJzID0gcHJvcHMuc2xzUGFyYW1ldGVycztcbiAgICAgICAgdGhpcy53ZWJob29rUGFyYW1ldGVycyA9IHByb3BzLndlYmhvb2tQYXJhbWV0ZXJzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJ1bGVOYW1lOiB0aGlzLnJ1bGVOYW1lLFxuICAgICAgICAgICAgY29udGFjdFBhcmFtZXRlcnM6IHRoaXMuY29udGFjdFBhcmFtZXRlcnMsXG4gICAgICAgICAgICBmY1BhcmFtZXRlcnM6IHRoaXMuZmNQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgbW5zUGFyYW1ldGVyczogdGhpcy5tbnNQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgc2xzUGFyYW1ldGVyczogdGhpcy5zbHNQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgd2ViaG9va1BhcmFtZXRlcnM6IHRoaXMud2ViaG9va1BhcmFtZXRlcnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0V2ZW50UnVsZVRhcmdldHNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NFdmVudFJ1bGVUYXJnZXRzIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBDb250YWN0UGFyYW1ldGVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb250YWN0R3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWxlcnQgY29udGFjdCBncm91cC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbnRhY3RHcm91cE5hbWU/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbGV2ZWw6IFRoZSBtZXRob2Qgb2YgYWxlcnQgbm90aWZpY2F0aW9uLiBWYWxpZCB2YWx1ZXM6IDIsIDMsIGFuZCA0LjI6IERpbmdUYWxrIENoYXRib3QgYW5kIGVtYWlsLjM6IERpbmdUYWxrIENoYXRib3QgYW5kIGVtYWlsLjQ6IERpbmdUYWxrIENoYXRib3QgYW5kIGVtYWlsLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbGV2ZWw/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaWQ6IFRoZSB1bmlxdWUgSUQgb2YgdGhlIGFsZXJ0IGNvbnRhY3QgZ3JvdXAgbm90aWZpY2F0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBDb250YWN0UGFyYW1ldGVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb250YWN0UGFyYW1ldGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0V2ZW50UnVsZVRhcmdldHNfQ29udGFjdFBhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRhY3RHcm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGFjdEdyb3VwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGV2ZWwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubGV2ZWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNvbnRhY3RQYXJhbWV0ZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6RXZlbnRSdWxlVGFyZ2V0cy5Db250YWN0UGFyYW1ldGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ29udGFjdFBhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzLkNvbnRhY3RQYXJhbWV0ZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0V2ZW50UnVsZVRhcmdldHNDb250YWN0UGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NFdmVudFJ1bGVUYXJnZXRzX0NvbnRhY3RQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBDb250YWN0R3JvdXBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnRhY3RHcm91cE5hbWUpLFxuICAgICAgTGV2ZWw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubGV2ZWwpLFxuICAgICAgSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRXZlbnRSdWxlVGFyZ2V0cyB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgRmNQYXJhbWV0ZXJzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGZ1bmN0aW9uTmFtZTogVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZnVuY3Rpb25OYW1lPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHNlcnZpY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgRnVuY3Rpb24gQ29tcHV0ZSBzZXJ2aWNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgc2VydmljZU5hbWU/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVnaW9uOiBUaGUgcmVnaW9uIHdoZXJlIEZ1bmN0aW9uIENvbXB1dGUgaXMgZGVwbG95ZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZWdpb24/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaWQ6IFRoZSB1bmlxdWUgSUQgb2YgdGhlIEZ1bmN0aW9uIENvbXB1dGUgbm90aWZpY2F0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBGY1BhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRmNQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRXZlbnRSdWxlVGFyZ2V0c19GY1BhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Z1bmN0aW9uTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5mdW5jdGlvbk5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NlcnZpY2VOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVnaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJGY1BhcmFtZXRlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzLkZjUGFyYW1ldGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRmNQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6RXZlbnRSdWxlVGFyZ2V0cy5GY1BhcmFtZXRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRXZlbnRSdWxlVGFyZ2V0c0ZjUGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NFdmVudFJ1bGVUYXJnZXRzX0ZjUGFyYW1ldGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgRnVuY3Rpb25OYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSksXG4gICAgICBTZXJ2aWNlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZXJ2aWNlTmFtZSksXG4gICAgICBSZWdpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVnaW9uKSxcbiAgICAgIElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlkKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0V2ZW50UnVsZVRhcmdldHMge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1uc1BhcmFtZXRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVnaW9uOiBUaGUgcmVnaW9uIHdoZXJlIE1OUyBpcyBkZXBsb3llZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlZ2lvbj86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpZDogVGhlIHVuaXF1ZSBJRCBvZiB0aGUgTWVzc2FnZSBTZXJ2aWNlIChNTlMpIG5vdGlmaWNhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlkPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHF1ZXVlOiBUaGUgbmFtZSBvZiB0aGUgTU5TIHF1ZXVlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcXVldWU/OiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBNbnNQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1uc1BhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NFdmVudFJ1bGVUYXJnZXRzX01uc1BhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZ2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWdpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdxdWV1ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5xdWV1ZSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJNbnNQYXJhbWV0ZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6RXZlbnRSdWxlVGFyZ2V0cy5NbnNQYXJhbWV0ZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNbnNQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6RXZlbnRSdWxlVGFyZ2V0cy5NbnNQYXJhbWV0ZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0V2ZW50UnVsZVRhcmdldHNNbnNQYXJhbWV0ZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0V2ZW50UnVsZVRhcmdldHNfTW5zUGFyYW1ldGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgUmVnaW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZ2lvbiksXG4gICAgICBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pZCksXG4gICAgICBRdWV1ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5xdWV1ZSksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NFdmVudFJ1bGVUYXJnZXRzIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBTbHNQYXJhbWV0ZXJzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByb2plY3Q6IFRoZSBwcm9qZWN0IGNvcnJlc3BvbmRpbmcgdG8gTG9nIFNlcnZpY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwcm9qZWN0Pzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGxvZ1N0b3JlOiBUaGUgbG9nc3RvcmUgY29ycmVzcG9uZGluZyB0byBMb2cgU2VydmljZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxvZ1N0b3JlPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlZ2lvbjogVGhlIHJlZ2lvbiB3aGVyZSBMb2cgU2VydmljZSBpcyBkZXBsb3llZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlZ2lvbj86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpZDogVGhlIHVuaXF1ZSBJRCBvZiB0aGUgTG9nIFNlcnZpY2Ugbm90aWZpY2F0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBTbHNQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNsc1BhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NFdmVudFJ1bGVUYXJnZXRzX1Nsc1BhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2plY3QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvamVjdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9nU3RvcmUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubG9nU3RvcmUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZ2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWdpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlNsc1BhcmFtZXRlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzLlNsc1BhcmFtZXRlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFNsc1BhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzLlNsc1BhcmFtZXRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRXZlbnRSdWxlVGFyZ2V0c1Nsc1BhcmFtZXRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRXZlbnRSdWxlVGFyZ2V0c19TbHNQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBQcm9qZWN0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb2plY3QpLFxuICAgICAgTG9nU3RvcmU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubG9nU3RvcmUpLFxuICAgICAgUmVnaW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZ2lvbiksXG4gICAgICBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NFdmVudFJ1bGVUYXJnZXRzIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBXZWJob29rUGFyYW1ldGVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpZDogVGhlIHVuaXF1ZSBJRCBvZiB0aGUgSFRUUCBjYWxsYmFjayBub3RpZmljYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpZD86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBtZXRob2Q6IFRoZSByZXF1ZXN0IG1ldGhvZCBvZiB0aGUgSFRUUCBjYWxsYmFjay4gVmFsaWQgdmFsdWVzOiBHRVQgYW5kIFBPU1QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBtZXRob2Q/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJvdG9jb2w6IFRoZSBuYW1lIG9mIHRoZSBwcm90b2NvbC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByb3RvY29sPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHVybDogVGhlIGNhbGxiYWNrIFVSTC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHVybD86IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFdlYmhvb2tQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFdlYmhvb2tQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRXZlbnRSdWxlVGFyZ2V0c19XZWJob29rUGFyYW1ldGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21ldGhvZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tZXRob2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb3RvY29sJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb3RvY29sKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd1cmwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudXJsKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIldlYmhvb2tQYXJhbWV0ZXJzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6RXZlbnRSdWxlVGFyZ2V0cy5XZWJob29rUGFyYW1ldGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgV2ViaG9va1BhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzLldlYmhvb2tQYXJhbWV0ZXJzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0V2ZW50UnVsZVRhcmdldHNXZWJob29rUGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NFdmVudFJ1bGVUYXJnZXRzX1dlYmhvb2tQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pZCksXG4gICAgICBNZXRob2Q6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWV0aG9kKSxcbiAgICAgIFByb3RvY29sOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb3RvY29sKSxcbiAgICAgIFVybDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy51cmwpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDTVM6Okdyb3VwTWV0cmljUnVsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NHcm91cE1ldHJpY1J1bGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2F0ZWdvcnk6IFRoZSBhYmJyZXZpYXRpb24gb2YgdGhlIHNlcnZpY2UgbmFtZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEVDUyAoaW5jbHVkaW5nIEFsaWJhYmEgQ2xvdWQgYW5kIG5vbi1BbGliYWJhIENsb3VkIGhvc3RzKVxuICAgICAqIFJEUyAoQXBzYXJhREIgZm9yIFJEUylcbiAgICAgKiBBRFMgKEFuYWx5dGljREIpXG4gICAgICogU0xCIChTZXJ2ZXIgTG9hZCBCYWxhbmNlcilcbiAgICAgKiBWUEMgKFZpcnR1YWwgUHJpdmF0ZSBDbG91ZClcbiAgICAgKiBBUElHQVRFV0FZIChBUEkgR2F0ZXdheSlcbiAgICAgKiBDRE5cbiAgICAgKiBDUyAoQ29udGFpbmVyIFNlcnZpY2UgZm9yIFN3YXJtKVxuICAgICAqIERDRE4gKER5bmFtaWMgUm91dGUgZm9yIENETilcbiAgICAgKiBERG9TIChkaXN0cmlidXRlZCBkZW5pYWwgb2Ygc2VydmljZSlcbiAgICAgKiBFSVAgKEVsYXN0aWMgSVApXG4gICAgICogRUxBU1RJQ1NFQVJDSCAoRWxhc3RpY3NlYXJjaClcbiAgICAgKiBFTVIgKEUtTWFwUmVkdWNlKVxuICAgICAqIEVTUyAoQXV0byBTY2FsaW5nKVxuICAgICAqIEhCQVNFIChBcHNhcmFEQiBmb3IgSEJhc2UpXG4gICAgICogSU9UX0VER0UgKElvVCBFZGdlKVxuICAgICAqIEs4U19QT0QgKGs4cyBwb2QpXG4gICAgICogS1ZTVE9SRV9TSEFSRElORyAoQXBzYXJhREIgZm9yIFJlZGlzIGNsdXN0ZXIgdmVyc2lvbilcbiAgICAgKiBLVlNUT1JFX1NQTElUUlcgKEFwc2FyYURCIGZvciBSZWRpcyByZWFkL3dyaXRlIHNwbGl0dGluZyB2ZXJzaW9uKVxuICAgICAqIEtWU1RPUkVfU1RBTkRBUkQgKEFwc2FyYURCIGZvciBSZWRpcyBzdGFuZGFyZCB2ZXJzaW9uKVxuICAgICAqIE1FTUNBQ0hFIChBcHNhcmFEQiBmb3IgTWVtY2FjaGUpXG4gICAgICogTU5TIChNZXNzYWdlIFNlcnZpY2UpXG4gICAgICogTU9OR09EQiAoQXBzYXJhREIgZm9yIE1vbmdvREIgcmVwbGljYSBzZXQgaW5zdGFuY2VzKVxuICAgICAqIE1PTkdPREJfQ0xVU1RFUiAoQXBzYXJhREIgZm9yIE1vbmdvREIgY2x1c3RlciB2ZXJzaW9uKVxuICAgICAqIE1PTkdPREJfU0hBUkRJTkcgKEFwc2FyYURCIGZvciBNb25nb0RCIHNoYXJkZWQgY2x1c3RlcnMpXG4gICAgICogTVFfVE9QSUMgKE1lc3NhZ2UgU2VydmljZSB0b3BpYylcbiAgICAgKiBPQ1MgKG9yaWdpbmFsIHZlcnNpb24gb2YgQXBzYXJhREIgZm9yIE1lbWNhY2hlKVxuICAgICAqIE9QRU5TRUFSQ0ggKE9wZW4gU2VhcmNoKVxuICAgICAqIE9TUyAoT2JqZWN0IFN0b3JhZ2UgU2VydmljZSlcbiAgICAgKiBQT0xBUkRCIChBcHNhcmFEQiBmb3IgUE9MQVJEQilcbiAgICAgKiBQRVRBREFUQSAoSHlicmlkREIgZm9yIE15U1FMKVxuICAgICAqIFNDRE4gKFNlY3VyZSBDb250ZW50IERlbGl2ZXJ5IE5ldHdvcmspXG4gICAgICogU0hBUkVCQU5EV0lEVEhQQUNLQUdFUyAoc2hhcmVkIGJhbmR3aWR0aCBwYWNrYWdlKVxuICAgICAqIFNMUyAoTG9nIFNlcnZpY2UpXG4gICAgICogVlBOIChWUE4gR2F0ZXdheSlcbiAgICAgKi9cbiAgICByZWFkb25seSBjYXRlZ29yeTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVzY2FsYXRpb25zOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBlc2NhbGF0aW9uczogUm9zR3JvdXBNZXRyaWNSdWxlLkVzY2FsYXRpb25zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIElEIG9mIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtZXRyaWNOYW1lOiBUaGUgbmFtZSBvZiB0aGUgbWV0cmljLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgY2FsbCBEZXNjcmliZU1ldHJpY01ldGFMaXN0IG9yIHNlZSBQcmVzZXQgbWV0cmljcyByZWZlcmVuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWV0cmljTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWVzcGFjZTogVGhlIGRhdGEgbmFtZXNwYWNlIG9mIHRoZSBzZXJ2aWNlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgY2FsbCBEZXNjcmliZU1ldHJpY01ldGFMaXN0XG4gICAgICogb3Igc2VlIFByZXNldCBtZXRyaWNzIHJlZmVyZW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lc3BhY2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBydWxlSWQ6IFRoZSBJRCBvZiB0aGUgYWxlcnQgcnVsZS4gVGhlIElEcyBvZiBhbGVydCBydWxlcyBhcmUgZ2VuZXJhdGVkIGJ5IGNhbGxlcnMgdG8gZW5zdXJlXG4gICAgICogdW5pcXVlbmVzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBydWxlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBydWxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVsZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkaW1lbnNpb25zOiBUaGUgZXhwZW5kZWQgcmVzb3VyY2UgZGltZW5zaW9ucy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaW1lbnNpb25zPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVmZmVjdGl2ZUludGVydmFsOiBUaGUgcGVyaW9kIHdoZW4gdGhlIGFsZXJ0IHJ1bGUgaXMgZWZmZWN0aXZlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVmZmVjdGl2ZUludGVydmFsPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVtYWlsU3ViamVjdDogVGhlIHN1YmplY3Qgb2YgdGhlIGFsZXJ0IG5vdGlmaWNhdGlvbiBlbWFpbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbWFpbFN1YmplY3Q/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW50ZXJ2YWw6IFRoZSBkZXRlY3Rpb24gcGVyaW9kIG9mIGFsZXJ0cy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnRlcnZhbD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBub0VmZmVjdGl2ZUludGVydmFsOiBUaGUgcGVyaW9kIHdoZW4gdGhlIGFsZXJ0IHJ1bGUgaXMgaW5lZmZlY3RpdmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbm9FZmZlY3RpdmVJbnRlcnZhbD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSBhZ2dyZWdhdGlvbiBwZXJpb2QuIFVuaXRlOiBzZWNvbmQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNpbGVuY2VUaW1lOiBUaGUgZHVyYXRpb24gb2YgdGhlIG11dGUgcGVyaW9kIGR1cmluZyB3aGljaCBuZXcgYWxlcnRzIGFyZSBub3Qgc2VudCBldmVuIGlmIHRoZSB0cmlnZ2VyXG4gICAgICogY29uZGl0aW9ucyBhcmUgbWV0LiBVbml0OiBzZWNvbmQuIERlZmF1bHQgdmFsdWU6IDg2NDAwLiBNaW5pbXVtIHZhbHVlOiA2MC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzaWxlbmNlVGltZT86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB3ZWJob29rOiBUaGUgVVJMIG9mIHRoZSBjYWxsYmFjayB0cmlnZ2VyZWQgd2hlbiBhbiBhbGVydCBvY2N1cnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2ViaG9vaz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NHcm91cE1ldHJpY1J1bGVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zR3JvdXBNZXRyaWNSdWxlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zR3JvdXBNZXRyaWNSdWxlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdub0VmZmVjdGl2ZUludGVydmFsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5vRWZmZWN0aXZlSW50ZXJ2YWwpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnNpbGVuY2VUaW1lICYmICh0eXBlb2YgcHJvcGVydGllcy5zaWxlbmNlVGltZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2lsZW5jZVRpbWUnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zaWxlbmNlVGltZSxcbiAgICAgICAgICAgIG1pbjogNjAsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2lsZW5jZVRpbWUnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuc2lsZW5jZVRpbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NhdGVnb3J5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNhdGVnb3J5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjYXRlZ29yeScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jYXRlZ29yeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJ1bGVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJ1bGVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGltZW5zaW9ucycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kaW1lbnNpb25zKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwZXJpb2QnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucGVyaW9kKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlZmZlY3RpdmVJbnRlcnZhbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5lZmZlY3RpdmVJbnRlcnZhbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZXNwYWNlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWVzcGFjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZXNwYWNlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWVzcGFjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21ldHJpY05hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubWV0cmljTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWV0cmljTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tZXRyaWNOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlc2NhbGF0aW9ucycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5lc2NhbGF0aW9ucykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXNjYWxhdGlvbnMnLCBSb3NHcm91cE1ldHJpY1J1bGVfRXNjYWxhdGlvbnNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5lc2NhbGF0aW9ucykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW1haWxTdWJqZWN0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVtYWlsU3ViamVjdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignd2ViaG9vaycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy53ZWJob29rKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ydWxlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucnVsZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ludGVydmFsJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmludGVydmFsKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0dyb3VwTWV0cmljUnVsZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Okdyb3VwTWV0cmljUnVsZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zR3JvdXBNZXRyaWNSdWxlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0dyb3VwTWV0cmljUnVsZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zR3JvdXBNZXRyaWNSdWxlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ2F0ZWdvcnk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2F0ZWdvcnkpLFxuICAgICAgRXNjYWxhdGlvbnM6IHJvc0dyb3VwTWV0cmljUnVsZUVzY2FsYXRpb25zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXNjYWxhdGlvbnMpLFxuICAgICAgR3JvdXBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cElkKSxcbiAgICAgIE1ldHJpY05hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWV0cmljTmFtZSksXG4gICAgICBOYW1lc3BhY2U6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZXNwYWNlKSxcbiAgICAgIFJ1bGVJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydWxlSWQpLFxuICAgICAgUnVsZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucnVsZU5hbWUpLFxuICAgICAgRGltZW5zaW9uczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaW1lbnNpb25zKSxcbiAgICAgIEVmZmVjdGl2ZUludGVydmFsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVmZmVjdGl2ZUludGVydmFsKSxcbiAgICAgIEVtYWlsU3ViamVjdDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbWFpbFN1YmplY3QpLFxuICAgICAgSW50ZXJ2YWw6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW50ZXJ2YWwpLFxuICAgICAgTm9FZmZlY3RpdmVJbnRlcnZhbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ub0VmZmVjdGl2ZUludGVydmFsKSxcbiAgICAgIFBlcmlvZDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5wZXJpb2QpLFxuICAgICAgU2lsZW5jZVRpbWU6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc2lsZW5jZVRpbWUpLFxuICAgICAgV2ViaG9vazogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy53ZWJob29rKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpDTVM6Okdyb3VwTWV0cmljUnVsZWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0dyb3VwTWV0cmljUnVsZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q01TOjpHcm91cE1ldHJpY1J1bGVcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBSdWxlSWQ6IFJ1bGUgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSdWxlSWQ6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNhdGVnb3J5OiBUaGUgYWJicmV2aWF0aW9uIG9mIHRoZSBzZXJ2aWNlIG5hbWUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBFQ1MgKGluY2x1ZGluZyBBbGliYWJhIENsb3VkIGFuZCBub24tQWxpYmFiYSBDbG91ZCBob3N0cylcbiAgICAgKiBSRFMgKEFwc2FyYURCIGZvciBSRFMpXG4gICAgICogQURTIChBbmFseXRpY0RCKVxuICAgICAqIFNMQiAoU2VydmVyIExvYWQgQmFsYW5jZXIpXG4gICAgICogVlBDIChWaXJ0dWFsIFByaXZhdGUgQ2xvdWQpXG4gICAgICogQVBJR0FURVdBWSAoQVBJIEdhdGV3YXkpXG4gICAgICogQ0ROXG4gICAgICogQ1MgKENvbnRhaW5lciBTZXJ2aWNlIGZvciBTd2FybSlcbiAgICAgKiBEQ0ROIChEeW5hbWljIFJvdXRlIGZvciBDRE4pXG4gICAgICogRERvUyAoZGlzdHJpYnV0ZWQgZGVuaWFsIG9mIHNlcnZpY2UpXG4gICAgICogRUlQIChFbGFzdGljIElQKVxuICAgICAqIEVMQVNUSUNTRUFSQ0ggKEVsYXN0aWNzZWFyY2gpXG4gICAgICogRU1SIChFLU1hcFJlZHVjZSlcbiAgICAgKiBFU1MgKEF1dG8gU2NhbGluZylcbiAgICAgKiBIQkFTRSAoQXBzYXJhREIgZm9yIEhCYXNlKVxuICAgICAqIElPVF9FREdFIChJb1QgRWRnZSlcbiAgICAgKiBLOFNfUE9EIChrOHMgcG9kKVxuICAgICAqIEtWU1RPUkVfU0hBUkRJTkcgKEFwc2FyYURCIGZvciBSZWRpcyBjbHVzdGVyIHZlcnNpb24pXG4gICAgICogS1ZTVE9SRV9TUExJVFJXIChBcHNhcmFEQiBmb3IgUmVkaXMgcmVhZC93cml0ZSBzcGxpdHRpbmcgdmVyc2lvbilcbiAgICAgKiBLVlNUT1JFX1NUQU5EQVJEIChBcHNhcmFEQiBmb3IgUmVkaXMgc3RhbmRhcmQgdmVyc2lvbilcbiAgICAgKiBNRU1DQUNIRSAoQXBzYXJhREIgZm9yIE1lbWNhY2hlKVxuICAgICAqIE1OUyAoTWVzc2FnZSBTZXJ2aWNlKVxuICAgICAqIE1PTkdPREIgKEFwc2FyYURCIGZvciBNb25nb0RCIHJlcGxpY2Egc2V0IGluc3RhbmNlcylcbiAgICAgKiBNT05HT0RCX0NMVVNURVIgKEFwc2FyYURCIGZvciBNb25nb0RCIGNsdXN0ZXIgdmVyc2lvbilcbiAgICAgKiBNT05HT0RCX1NIQVJESU5HIChBcHNhcmFEQiBmb3IgTW9uZ29EQiBzaGFyZGVkIGNsdXN0ZXJzKVxuICAgICAqIE1RX1RPUElDIChNZXNzYWdlIFNlcnZpY2UgdG9waWMpXG4gICAgICogT0NTIChvcmlnaW5hbCB2ZXJzaW9uIG9mIEFwc2FyYURCIGZvciBNZW1jYWNoZSlcbiAgICAgKiBPUEVOU0VBUkNIIChPcGVuIFNlYXJjaClcbiAgICAgKiBPU1MgKE9iamVjdCBTdG9yYWdlIFNlcnZpY2UpXG4gICAgICogUE9MQVJEQiAoQXBzYXJhREIgZm9yIFBPTEFSREIpXG4gICAgICogUEVUQURBVEEgKEh5YnJpZERCIGZvciBNeVNRTClcbiAgICAgKiBTQ0ROIChTZWN1cmUgQ29udGVudCBEZWxpdmVyeSBOZXR3b3JrKVxuICAgICAqIFNIQVJFQkFORFdJRFRIUEFDS0FHRVMgKHNoYXJlZCBiYW5kd2lkdGggcGFja2FnZSlcbiAgICAgKiBTTFMgKExvZyBTZXJ2aWNlKVxuICAgICAqIFZQTiAoVlBOIEdhdGV3YXkpXG4gICAgICovXG4gICAgcHVibGljIGNhdGVnb3J5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXNjYWxhdGlvbnM6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHB1YmxpYyBlc2NhbGF0aW9uczogUm9zR3JvdXBNZXRyaWNSdWxlLkVzY2FsYXRpb25zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIElEIG9mIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cElkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWV0cmljTmFtZTogVGhlIG5hbWUgb2YgdGhlIG1ldHJpYy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIGNhbGwgRGVzY3JpYmVNZXRyaWNNZXRhTGlzdCBvciBzZWUgUHJlc2V0IG1ldHJpY3MgcmVmZXJlbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBtZXRyaWNOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZXNwYWNlOiBUaGUgZGF0YSBuYW1lc3BhY2Ugb2YgdGhlIHNlcnZpY2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBjYWxsIERlc2NyaWJlTWV0cmljTWV0YUxpc3RcbiAgICAgKiBvciBzZWUgUHJlc2V0IG1ldHJpY3MgcmVmZXJlbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lc3BhY2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBydWxlSWQ6IFRoZSBJRCBvZiB0aGUgYWxlcnQgcnVsZS4gVGhlIElEcyBvZiBhbGVydCBydWxlcyBhcmUgZ2VuZXJhdGVkIGJ5IGNhbGxlcnMgdG8gZW5zdXJlXG4gICAgICogdW5pcXVlbmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcnVsZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBydWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyBydWxlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpbWVuc2lvbnM6IFRoZSBleHBlbmRlZCByZXNvdXJjZSBkaW1lbnNpb25zLlxuICAgICAqL1xuICAgIHB1YmxpYyBkaW1lbnNpb25zOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWZmZWN0aXZlSW50ZXJ2YWw6IFRoZSBwZXJpb2Qgd2hlbiB0aGUgYWxlcnQgcnVsZSBpcyBlZmZlY3RpdmUuXG4gICAgICovXG4gICAgcHVibGljIGVmZmVjdGl2ZUludGVydmFsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW1haWxTdWJqZWN0OiBUaGUgc3ViamVjdCBvZiB0aGUgYWxlcnQgbm90aWZpY2F0aW9uIGVtYWlsLlxuICAgICAqL1xuICAgIHB1YmxpYyBlbWFpbFN1YmplY3Q6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcnZhbDogVGhlIGRldGVjdGlvbiBwZXJpb2Qgb2YgYWxlcnRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcnZhbDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5vRWZmZWN0aXZlSW50ZXJ2YWw6IFRoZSBwZXJpb2Qgd2hlbiB0aGUgYWxlcnQgcnVsZSBpcyBpbmVmZmVjdGl2ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbm9FZmZlY3RpdmVJbnRlcnZhbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcmlvZDogVGhlIGFnZ3JlZ2F0aW9uIHBlcmlvZC4gVW5pdGU6IHNlY29uZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGVyaW9kOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2lsZW5jZVRpbWU6IFRoZSBkdXJhdGlvbiBvZiB0aGUgbXV0ZSBwZXJpb2QgZHVyaW5nIHdoaWNoIG5ldyBhbGVydHMgYXJlIG5vdCBzZW50IGV2ZW4gaWYgdGhlIHRyaWdnZXJcbiAgICAgKiBjb25kaXRpb25zIGFyZSBtZXQuIFVuaXQ6IHNlY29uZC4gRGVmYXVsdCB2YWx1ZTogODY0MDAuIE1pbmltdW0gdmFsdWU6IDYwLlxuICAgICAqL1xuICAgIHB1YmxpYyBzaWxlbmNlVGltZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYmhvb2s6IFRoZSBVUkwgb2YgdGhlIGNhbGxiYWNrIHRyaWdnZXJlZCB3aGVuIGFuIGFsZXJ0IG9jY3Vycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgd2ViaG9vazogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NHcm91cE1ldHJpY1J1bGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0dyb3VwTWV0cmljUnVsZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyUnVsZUlkID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdSdWxlSWQnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gcHJvcHMuY2F0ZWdvcnk7XG4gICAgICAgIHRoaXMuZXNjYWxhdGlvbnMgPSBwcm9wcy5lc2NhbGF0aW9ucztcbiAgICAgICAgdGhpcy5ncm91cElkID0gcHJvcHMuZ3JvdXBJZDtcbiAgICAgICAgdGhpcy5tZXRyaWNOYW1lID0gcHJvcHMubWV0cmljTmFtZTtcbiAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSBwcm9wcy5uYW1lc3BhY2U7XG4gICAgICAgIHRoaXMucnVsZUlkID0gcHJvcHMucnVsZUlkO1xuICAgICAgICB0aGlzLnJ1bGVOYW1lID0gcHJvcHMucnVsZU5hbWU7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHByb3BzLmRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMuZWZmZWN0aXZlSW50ZXJ2YWwgPSBwcm9wcy5lZmZlY3RpdmVJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5lbWFpbFN1YmplY3QgPSBwcm9wcy5lbWFpbFN1YmplY3Q7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBwcm9wcy5pbnRlcnZhbDtcbiAgICAgICAgdGhpcy5ub0VmZmVjdGl2ZUludGVydmFsID0gcHJvcHMubm9FZmZlY3RpdmVJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwcm9wcy5wZXJpb2Q7XG4gICAgICAgIHRoaXMuc2lsZW5jZVRpbWUgPSBwcm9wcy5zaWxlbmNlVGltZTtcbiAgICAgICAgdGhpcy53ZWJob29rID0gcHJvcHMud2ViaG9vaztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeSxcbiAgICAgICAgICAgIGVzY2FsYXRpb25zOiB0aGlzLmVzY2FsYXRpb25zLFxuICAgICAgICAgICAgZ3JvdXBJZDogdGhpcy5ncm91cElkLFxuICAgICAgICAgICAgbWV0cmljTmFtZTogdGhpcy5tZXRyaWNOYW1lLFxuICAgICAgICAgICAgbmFtZXNwYWNlOiB0aGlzLm5hbWVzcGFjZSxcbiAgICAgICAgICAgIHJ1bGVJZDogdGhpcy5ydWxlSWQsXG4gICAgICAgICAgICBydWxlTmFtZTogdGhpcy5ydWxlTmFtZSxcbiAgICAgICAgICAgIGRpbWVuc2lvbnM6IHRoaXMuZGltZW5zaW9ucyxcbiAgICAgICAgICAgIGVmZmVjdGl2ZUludGVydmFsOiB0aGlzLmVmZmVjdGl2ZUludGVydmFsLFxuICAgICAgICAgICAgZW1haWxTdWJqZWN0OiB0aGlzLmVtYWlsU3ViamVjdCxcbiAgICAgICAgICAgIGludGVydmFsOiB0aGlzLmludGVydmFsLFxuICAgICAgICAgICAgbm9FZmZlY3RpdmVJbnRlcnZhbDogdGhpcy5ub0VmZmVjdGl2ZUludGVydmFsLFxuICAgICAgICAgICAgcGVyaW9kOiB0aGlzLnBlcmlvZCxcbiAgICAgICAgICAgIHNpbGVuY2VUaW1lOiB0aGlzLnNpbGVuY2VUaW1lLFxuICAgICAgICAgICAgd2ViaG9vazogdGhpcy53ZWJob29rLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NHcm91cE1ldHJpY1J1bGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NHcm91cE1ldHJpY1J1bGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENyaXRpY2FsUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbXBhcmlzb25PcGVyYXRvcjogVGhlIGNvbXBhcmlzb24gb3BlcmF0b3Igb2YgdGhlIHRocmVzaG9sZCBmb3IgY3JpdGljYWwtbGV2ZWwgYWxlcnRzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogR3JlYXRlclRoYW5PckVxdWFsVG9UaHJlc2hvbGRcbiAgICAgKiBHcmVhdGVyVGhhblRocmVzaG9sZFxuICAgICAqIExlc3NUaGFuT3JFcXVhbFRvVGhyZXNob2xkXG4gICAgICogTGVzc1RoYW5UaHJlc2hvbGRcbiAgICAgKiBOb3RFcXVhbFRvVGhyZXNob2xkXG4gICAgICogR3JlYXRlclRoYW5ZZXN0ZXJkYXlcbiAgICAgKiBMZXNzVGhhblllc3RlcmRheVxuICAgICAqIEdyZWF0ZXJUaGFuTGFzdFdlZWtcbiAgICAgKiBMZXNzVGhhbkxhc3RXZWVrXG4gICAgICogR3JlYXRlclRoYW5MYXN0UGVyaW9kXG4gICAgICogTGVzc1RoYW5MYXN0UGVyaW9kXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21wYXJpc29uT3BlcmF0b3I6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lczogVGhlIGNvbnNlY3V0aXZlIG51bWJlciBvZiB0aW1lcyBmb3Igd2hpY2ggdGhlIG1ldHJpYyB2YWx1ZSBleGNlZWRzIHRoZSB0aHJlc2hvbGQgZm9yXG4gICAgICogY3JpdGljYWwtbGV2ZWwgYWxlcnRzIGJlZm9yZSBhbiBhbGVydCBpcyB0cmlnZ2VyZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lczogbnVtYmVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXRpc3RpY3M6IFRoZSBzdGF0aXN0aWNhbCBtZXRob2QgZm9yIGNyaXRpY2FsLWxldmVsIGFsZXJ0cy4gVGhlIHN0YXRpc3RpY2FsIG1ldGhvZCB2YXJpZXMgd2l0aFxuICAgICAqIG1ldHJpYy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXRpc3RpY3M6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aHJlc2hvbGQ6IFRoZSB0aHJlc2hvbGQgZm9yIGNyaXRpY2FsLWxldmVsIGFsZXJ0cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRocmVzaG9sZDogbnVtYmVyO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ3JpdGljYWxQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3JpdGljYWxQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcm91cE1ldHJpY1J1bGVfQ3JpdGljYWxQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBhcmlzb25PcGVyYXRvcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBhcmlzb25PcGVyYXRvcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRpbWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdGlzdGljcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdGF0aXN0aWNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0aXN0aWNzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RocmVzaG9sZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50aHJlc2hvbGQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aHJlc2hvbGQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ3JpdGljYWxQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpHcm91cE1ldHJpY1J1bGUuQ3JpdGljYWxgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENyaXRpY2FsUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlLkNyaXRpY2FsYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0dyb3VwTWV0cmljUnVsZUNyaXRpY2FsUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0dyb3VwTWV0cmljUnVsZV9Dcml0aWNhbFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgQ29tcGFyaXNvbk9wZXJhdG9yOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvciksXG4gICAgICBUaW1lczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lcyksXG4gICAgICBTdGF0aXN0aWNzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpLFxuICAgICAgVGhyZXNob2xkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRocmVzaG9sZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NHcm91cE1ldHJpY1J1bGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEVzY2FsYXRpb25zUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNyaXRpY2FsOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNyaXRpY2FsPzogUm9zR3JvdXBNZXRyaWNSdWxlLkNyaXRpY2FsUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5mbzogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmZvPzogUm9zR3JvdXBNZXRyaWNSdWxlLkluZm9Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB3YXJuOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHdhcm4/OiBSb3NHcm91cE1ldHJpY1J1bGUuV2FyblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRXNjYWxhdGlvbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXNjYWxhdGlvbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcm91cE1ldHJpY1J1bGVfRXNjYWxhdGlvbnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NyaXRpY2FsJywgUm9zR3JvdXBNZXRyaWNSdWxlX0NyaXRpY2FsUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY3JpdGljYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luZm8nLCBSb3NHcm91cE1ldHJpY1J1bGVfSW5mb1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluZm8pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dhcm4nLCBSb3NHcm91cE1ldHJpY1J1bGVfV2FyblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLndhcm4pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRXNjYWxhdGlvbnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpHcm91cE1ldHJpY1J1bGUuRXNjYWxhdGlvbnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEVzY2FsYXRpb25zUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlLkVzY2FsYXRpb25zYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0dyb3VwTWV0cmljUnVsZUVzY2FsYXRpb25zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0dyb3VwTWV0cmljUnVsZV9Fc2NhbGF0aW9uc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgQ3JpdGljYWw6IHJvc0dyb3VwTWV0cmljUnVsZUNyaXRpY2FsUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3JpdGljYWwpLFxuICAgICAgSW5mbzogcm9zR3JvdXBNZXRyaWNSdWxlSW5mb1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluZm8pLFxuICAgICAgV2Fybjogcm9zR3JvdXBNZXRyaWNSdWxlV2FyblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndhcm4pLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zR3JvdXBNZXRyaWNSdWxlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbmZvUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbXBhcmlzb25PcGVyYXRvcjogVGhlIGNvbXBhcmlzb24gb3BlcmF0b3Igb2YgdGhlIHRocmVzaG9sZCBmb3IgaW5mby1sZXZlbCBhbGVydHMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBHcmVhdGVyVGhhbk9yRXF1YWxUb1RocmVzaG9sZFxuICAgICAqIEdyZWF0ZXJUaGFuVGhyZXNob2xkXG4gICAgICogTGVzc1RoYW5PckVxdWFsVG9UaHJlc2hvbGRcbiAgICAgKiBMZXNzVGhhblRocmVzaG9sZFxuICAgICAqIE5vdEVxdWFsVG9UaHJlc2hvbGRcbiAgICAgKiBHcmVhdGVyVGhhblllc3RlcmRheVxuICAgICAqIExlc3NUaGFuWWVzdGVyZGF5XG4gICAgICogR3JlYXRlclRoYW5MYXN0V2Vla1xuICAgICAqIExlc3NUaGFuTGFzdFdlZWtcbiAgICAgKiBHcmVhdGVyVGhhbkxhc3RQZXJpb2RcbiAgICAgKiBMZXNzVGhhbkxhc3RQZXJpb2RcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbXBhcmlzb25PcGVyYXRvcjogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRpbWVzOiBUaGUgY29uc2VjdXRpdmUgbnVtYmVyIG9mIHRpbWVzIGZvciB3aGljaCB0aGUgbWV0cmljIHZhbHVlIGV4Y2VlZHMgdGhlIHRocmVzaG9sZCBmb3JcbiAgICAgKiBpbmZvLWxldmVsIGFsZXJ0cyBiZWZvcmUgYW4gYWxlcnQgaXMgdHJpZ2dlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGltZXM6IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGF0aXN0aWNzOiBUaGUgc3RhdGlzdGljYWwgbWV0aG9kIGZvciBpbmZvLWxldmVsIGFsZXJ0cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXRpc3RpY3M6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aHJlc2hvbGQ6IFRoZSB0aHJlc2hvbGQgZm9yIGluZm8tbGV2ZWwgYWxlcnRzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGhyZXNob2xkOiBudW1iZXI7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBJbmZvUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluZm9Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcm91cE1ldHJpY1J1bGVfSW5mb1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGFyaXNvbk9wZXJhdG9yJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGFyaXNvbk9wZXJhdG9yJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGltZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0aXN0aWNzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRpc3RpY3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhdGlzdGljcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyZXNob2xkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRocmVzaG9sZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyZXNob2xkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRocmVzaG9sZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJJbmZvUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlLkluZm9gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluZm9Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpHcm91cE1ldHJpY1J1bGUuSW5mb2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NHcm91cE1ldHJpY1J1bGVJbmZvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0dyb3VwTWV0cmljUnVsZV9JbmZvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBDb21wYXJpc29uT3BlcmF0b3I6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSxcbiAgICAgIFRpbWVzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVzKSxcbiAgICAgIFN0YXRpc3RpY3M6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhdGlzdGljcyksXG4gICAgICBUaHJlc2hvbGQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGhyZXNob2xkKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0dyb3VwTWV0cmljUnVsZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgV2FyblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21wYXJpc29uT3BlcmF0b3I6IFRoZSBjb21wYXJpc29uIG9wZXJhdG9yIG9mIHRoZSB0aHJlc2hvbGQgZm9yIHdhcm4tbGV2ZWwgYWxlcnRzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogR3JlYXRlclRoYW5PckVxdWFsVG9UaHJlc2hvbGRcbiAgICAgKiBHcmVhdGVyVGhhblRocmVzaG9sZFxuICAgICAqIExlc3NUaGFuT3JFcXVhbFRvVGhyZXNob2xkXG4gICAgICogTGVzc1RoYW5UaHJlc2hvbGRcbiAgICAgKiBOb3RFcXVhbFRvVGhyZXNob2xkXG4gICAgICogR3JlYXRlclRoYW5ZZXN0ZXJkYXlcbiAgICAgKiBMZXNzVGhhblllc3RlcmRheVxuICAgICAqIEdyZWF0ZXJUaGFuTGFzdFdlZWtcbiAgICAgKiBMZXNzVGhhbkxhc3RXZWVrXG4gICAgICogR3JlYXRlclRoYW5MYXN0UGVyaW9kXG4gICAgICogTGVzc1RoYW5MYXN0UGVyaW9kXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21wYXJpc29uT3BlcmF0b3I6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lczogVGhlIGNvbnNlY3V0aXZlIG51bWJlciBvZiB0aW1lcyBmb3Igd2hpY2ggdGhlIG1ldHJpYyB2YWx1ZSBleGNlZWRzIHRoZSB0aHJlc2hvbGQgZm9yXG4gICAgICogd2Fybi1sZXZlbCBhbGVydHMgYmVmb3JlIGFuIGFsZXJ0IGlzIHRyaWdnZXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRpbWVzOiBudW1iZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhdGlzdGljczogVGhlIHN0YXRpc3RpY2FsIG1ldGhvZCBmb3Igd2Fybi1sZXZlbCBhbGVydHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0aXN0aWNzOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGhyZXNob2xkOiBUaGUgdGhyZXNob2xkIGZvciB3YXJuLWxldmVsIGFsZXJ0cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRocmVzaG9sZDogbnVtYmVyO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgV2FyblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBXYXJuUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zR3JvdXBNZXRyaWNSdWxlX1dhcm5Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBhcmlzb25PcGVyYXRvcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBhcmlzb25PcGVyYXRvcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRpbWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdGlzdGljcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdGF0aXN0aWNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0aXN0aWNzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RocmVzaG9sZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50aHJlc2hvbGQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aHJlc2hvbGQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiV2FyblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Okdyb3VwTWV0cmljUnVsZS5XYXJuYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBXYXJuUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlLldhcm5gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zR3JvdXBNZXRyaWNSdWxlV2FyblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NHcm91cE1ldHJpY1J1bGVfV2FyblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgQ29tcGFyaXNvbk9wZXJhdG9yOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvciksXG4gICAgICBUaW1lczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lcyksXG4gICAgICBTdGF0aXN0aWNzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpLFxuICAgICAgVGhyZXNob2xkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRocmVzaG9sZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRhcmdldHNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTWV0cmljUnVsZVRhcmdldHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVsZUlkOiBUaGUgSUQgb2YgdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVsZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0czogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0czogQXJyYXk8Um9zTWV0cmljUnVsZVRhcmdldHMuVGFyZ2V0c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NNZXRyaWNSdWxlVGFyZ2V0c1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNZXRyaWNSdWxlVGFyZ2V0c1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01ldHJpY1J1bGVUYXJnZXRzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVsZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucnVsZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhcmdldHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhcmdldHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YXJnZXRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFyZ2V0cykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFyZ2V0cy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldHMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NNZXRyaWNSdWxlVGFyZ2V0c19UYXJnZXRzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhcmdldHMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTWV0cmljUnVsZVRhcmdldHNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGFyZ2V0c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTWV0cmljUnVsZVRhcmdldHNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGFyZ2V0c2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNZXRyaWNSdWxlVGFyZ2V0c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zTWV0cmljUnVsZVRhcmdldHNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBSdWxlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucnVsZUlkKSxcbiAgICAgIFRhcmdldHM6IHJvcy5saXN0TWFwcGVyKHJvc01ldHJpY1J1bGVUYXJnZXRzVGFyZ2V0c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YXJnZXRzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUYXJnZXRzYFxuICovXG5leHBvcnQgY2xhc3MgUm9zTWV0cmljUnVsZVRhcmdldHMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNNUzo6TWV0cmljUnVsZVRhcmdldHNcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcm5zOiBUaGUgQVJOIGxpc3Qgb2YgdGFyZ2V0c1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXJuczogYW55O1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJZHM6IFRoZSBJRCBsaXN0IG9mIHRhcmdldHNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkczogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVsZUlkOiBUaGUgSUQgb2YgdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIHJ1bGVJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldHM6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRzOiBBcnJheTxSb3NNZXRyaWNSdWxlVGFyZ2V0cy5UYXJnZXRzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRhcmdldHNgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc01ldHJpY1J1bGVUYXJnZXRzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NNZXRyaWNSdWxlVGFyZ2V0cy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQXJucyA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnQXJucycpKTtcbiAgICAgICAgdGhpcy5hdHRySWRzID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdJZHMnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLnJ1bGVJZCA9IHByb3BzLnJ1bGVJZDtcbiAgICAgICAgdGhpcy50YXJnZXRzID0gcHJvcHMudGFyZ2V0cztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBydWxlSWQ6IHRoaXMucnVsZUlkLFxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy50YXJnZXRzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NNZXRyaWNSdWxlVGFyZ2V0c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc01ldHJpY1J1bGVUYXJnZXRzIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBUYXJnZXRzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGxldmVsOiBUaGUgYWxlcnQgbGV2ZWwsIHdoaWNoIGlzIGEgSlNPTiBhcnJheS4gRm9yIGV4YW1wbGU6IFtcIklORk9cIiwgXCJXQVJOXCIsIFwiQ1JJVElDQUxcIl0uIFZhbGlkIHZhbHVlczpcbiAgICAgKiBJTkZPXG4gICAgICogV0FSTlxuICAgICAqIENSSVRJQ0FMXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBsZXZlbD86IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpZDogVGhlIElEIG9mIHRoZSBtZXNzYWdlIHJlc291cmNlLiBUaGUgSUQgbXVzdCBiZSB1bmlxdWUgaW4gdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpZDogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGFybjogVGhlIHJlc291cmNlIGRlc2NyaXB0aW9uIGluIHRoZSBmb3JtYXQgb2YgYWNzOntTZXJ2aWNlIG5hbWUgYWJicmV2aWF0aW9ufTp7cmVnaW9uSWR9Ont1c2VySWR9Oi97TWVzc2FnZSByZXNvdXJjZSB0eXBlfS97UmVzb3VyY2VcbiAgICAgKiBuYW1lfS9tZXNzYWdlLiBFeGFtcGxlOiBhY3M6bW5zOmNuLWhhbmd6aG91OjExMTovcXVldWVzL3Rlc3QvbWVzc2FnZS5cbiAgICAgKiB7U2VydmljZSBuYW1lIGFiYnJldmlhdGlvbn06IHRoZSBhYmJyZXZpYXRpb24gb2YgdGhlIHNlcnZpY2UgbmFtZS4gU2V0IHRoaXMgdmFsdWVcbiAgICAgKiB0byBtbnMuXG4gICAgICoge3JlZ2lvbklkfTogdGhlIHJlZ2lvbiBJRCBvZiB0aGUgbWVzc2FnZSBxdWV1ZSBvciB0b3BpYy5cbiAgICAgKiB7dXNlcklkfTogdGhlIGFjY291bnQgSUQgb2YgdGhlIHVzZXIuXG4gICAgICoge01lc3NhZ2UgcmVzb3VyY2UgdHlwZX06IHRoZSB0eXBlIG9mIHRoZSBtZXNzYWdlIHJlc291cmNlLiBWYWxpZCB2YWx1ZXM6IHF1ZXVlcyBhbmRcbiAgICAgKiB0b3BpY3MuXG4gICAgICoge1Jlc291cmNlIG5hbWV9OiB0aGUgbmFtZSBvZiBhIHF1ZXVlIGlmIHRoZSByZXNvdXJjZSB0eXBlIGlzIHF1ZXVlcywgb3IgdGhlIG5hbWUgb2ZcbiAgICAgKiBhIHRvcGljIGlmIHRoZSB0eXBlIGlzIHRvcGljcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFybjogc3RyaW5nO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgVGFyZ2V0c1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYXJnZXRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTWV0cmljUnVsZVRhcmdldHNfVGFyZ2V0c1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbGV2ZWwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubGV2ZWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXJuJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFybikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXJuJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFybikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJUYXJnZXRzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRhcmdldHMuVGFyZ2V0c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgVGFyZ2V0c1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUYXJnZXRzLlRhcmdldHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTWV0cmljUnVsZVRhcmdldHNUYXJnZXRzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc01ldHJpY1J1bGVUYXJnZXRzX1RhcmdldHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIExldmVsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxldmVsKSxcbiAgICAgIElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlkKSxcbiAgICAgIEFybjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hcm4pLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUZW1wbGF0ZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NNZXRyaWNSdWxlVGVtcGxhdGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGVydFRlbXBsYXRlczogVmFsaWQgdmFsdWVzIG9mIE46IDAgdG8gMjAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsZXJ0VGVtcGxhdGVzPzogQXJyYXk8Um9zTWV0cmljUnVsZVRlbXBsYXRlLkFsZXJ0VGVtcGxhdGVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGFsZXJ0IHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc3RWZXJzaW9uOiBUaGUgdmVyc2lvbiBvZiB0aGUgYWxlcnQgdGVtcGxhdGUuIENhbGwgRGVzY3JpYmVNZXRyaWNSdWxlVGVtcGxhdGVMaXN0IG9yIERlc2NyaWJlTWV0cmljUnVsZVRlbXBsYXRlQXR0cmlidXRlXG4gICAgICogdG8gb2J0YWluIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhbGVydCB0ZW1wbGF0ZXMuIFRoZSBjb21iaW5hdGlvbiBvZiB2ZXJzaW9uIGFuZCBJRFxuICAgICAqIHVuaXF1ZWx5IGlkZW50aWZpZXMgYW4gYWxlcnQgdGVtcGxhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzdFZlcnNpb24/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVJZDogVGhlIElEIG9mIHRoZSBhbGVydCB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB0ZW1wbGF0ZUlkPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc01ldHJpY1J1bGVUZW1wbGF0ZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNZXRyaWNSdWxlVGVtcGxhdGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNZXRyaWNSdWxlVGVtcGxhdGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBpZihwcm9wZXJ0aWVzLmFsZXJ0VGVtcGxhdGVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuYWxlcnRUZW1wbGF0ZXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5hbGVydFRlbXBsYXRlcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsZXJ0VGVtcGxhdGVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmFsZXJ0VGVtcGxhdGVzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMjAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGVydFRlbXBsYXRlcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc01ldHJpY1J1bGVUZW1wbGF0ZV9BbGVydFRlbXBsYXRlc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5hbGVydFRlbXBsYXRlcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpcHRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Jlc3RWZXJzaW9uJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnJlc3RWZXJzaW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0ZW1wbGF0ZUlkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRlbXBsYXRlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc01ldHJpY1J1bGVUZW1wbGF0ZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUZW1wbGF0ZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTWV0cmljUnVsZVRlbXBsYXRlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc01ldHJpY1J1bGVUZW1wbGF0ZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zTWV0cmljUnVsZVRlbXBsYXRlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lKSxcbiAgICAgIEFsZXJ0VGVtcGxhdGVzOiByb3MubGlzdE1hcHBlcihyb3NNZXRyaWNSdWxlVGVtcGxhdGVBbGVydFRlbXBsYXRlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hbGVydFRlbXBsYXRlcyksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBSZXN0VmVyc2lvbjogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZXN0VmVyc2lvbiksXG4gICAgICBUZW1wbGF0ZUlkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRlbXBsYXRlSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zTWV0cmljUnVsZVRlbXBsYXRlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUZW1wbGF0ZVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElkOiBBbGFybSB0ZW1wbGF0ZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWxlcnQgdGVtcGxhdGUuXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhbGVydFRlbXBsYXRlczogVmFsaWQgdmFsdWVzIG9mIE46IDAgdG8gMjAwLlxuICAgICAqL1xuICAgIHB1YmxpYyBhbGVydFRlbXBsYXRlczogQXJyYXk8Um9zTWV0cmljUnVsZVRlbXBsYXRlLkFsZXJ0VGVtcGxhdGVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGFsZXJ0IHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlc3RWZXJzaW9uOiBUaGUgdmVyc2lvbiBvZiB0aGUgYWxlcnQgdGVtcGxhdGUuIENhbGwgRGVzY3JpYmVNZXRyaWNSdWxlVGVtcGxhdGVMaXN0IG9yIERlc2NyaWJlTWV0cmljUnVsZVRlbXBsYXRlQXR0cmlidXRlXG4gICAgICogdG8gb2J0YWluIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhbGVydCB0ZW1wbGF0ZXMuIFRoZSBjb21iaW5hdGlvbiBvZiB2ZXJzaW9uIGFuZCBJRFxuICAgICAqIHVuaXF1ZWx5IGlkZW50aWZpZXMgYW4gYWxlcnQgdGVtcGxhdGUuXG4gICAgICovXG4gICAgcHVibGljIHJlc3RWZXJzaW9uOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVJZDogVGhlIElEIG9mIHRoZSBhbGVydCB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGVtcGxhdGVJZDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NNZXRyaWNSdWxlVGVtcGxhdGVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc01ldHJpY1J1bGVUZW1wbGF0ZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0lkJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICAgICAgdGhpcy5hbGVydFRlbXBsYXRlcyA9IHByb3BzLmFsZXJ0VGVtcGxhdGVzO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucmVzdFZlcnNpb24gPSBwcm9wcy5yZXN0VmVyc2lvbjtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUlkID0gcHJvcHMudGVtcGxhdGVJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBhbGVydFRlbXBsYXRlczogdGhpcy5hbGVydFRlbXBsYXRlcyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVzdFZlcnNpb246IHRoaXMucmVzdFZlcnNpb24sXG4gICAgICAgICAgICB0ZW1wbGF0ZUlkOiB0aGlzLnRlbXBsYXRlSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc01ldHJpY1J1bGVUZW1wbGF0ZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc01ldHJpY1J1bGVUZW1wbGF0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWV0cmljTmFtZTogVGhlIG5hbWUgb2YgdGhlIG1ldHJpYy5cbiAgICAgKiBOb3RlIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgRGVzY3JpYmVNZXRyaWNNZXRhTGlzdCBvciBBcHBlbmRpeCAxOiBNZXRyaWNzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWV0cmljTmFtZTogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNhdGVnb3J5OiBUaGUgYWJicmV2aWF0aW9uIG9mIHRoZSBzZXJ2aWNlIG5hbWUuVmFsdWUgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0bzpcbiAgICAgKiBlY3M6IEVsYXN0aWMgQ29tcHV0ZSBTZXJ2aWNlIChFQ1MpIGluc3RhbmNlcyBwcm92aWRlZCBieSBBbGliYWJhIENsb3VkIGFuZCBob3N0cyBub3RcbiAgICAgKiBwcm92aWRlZCBieSBBbGliYWJhIENsb3VkXG4gICAgICogcmRzOiBBcHNhcmFEQiBmb3IgUkRTXG4gICAgICogYWRzOiBBbmFseXRpY0RCXG4gICAgICogc2xiOiBTZXJ2ZXIgTG9hZCBCYWxhbmNlciAoU0xCKVxuICAgICAqIHZwYzogVmlydHVhbCBQcml2YXRlIENsb3VkIChWUEMpXG4gICAgICogYXBpZ2F0ZXdheTogQVBJIEdhdGV3YXlcbiAgICAgKiBjZG46IENETjogQWxpYmFiYSBDbG91ZCBDb250ZW50IERlbGl2ZXJ5IE5ldHdvcmsgKENETilcbiAgICAgKiBjczogQ29udGFpbmVyIFNlcnZpY2UgZm9yIFN3YXJtXG4gICAgICogZGNkbjogRHluYW1pYyBSb3V0ZSBmb3IgQ0ROXG4gICAgICogZGRvczogQW50aS1ERG9TIFByb1xuICAgICAqIGVpcDogRWxhc3RpYyBJUCBBZGRyZXNzIChFSVApXG4gICAgICogZWxhc3RpY3NlYXJjaDogRWxhc3RpY3NlYXJjaFxuICAgICAqIGVtcjogRS1NYXBSZWR1Y2VcbiAgICAgKiBlc3M6IEF1dG8gU2NhbGluZ1xuICAgICAqIGhiYXNlOiBBcHNhcmFEQiBmb3IgSGJhc2VcbiAgICAgKiBpb3RfZWRnZTogSW9UIEVkZ2VcbiAgICAgKiBrOHNfcG9kOiBwb2RzIGluIENvbnRhaW5lciBTZXJ2aWNlIGZvciBLdWJlcm5ldGVzXG4gICAgICoga3ZzdG9yZV9zaGFyZGluZzogQXBzYXJhREIgZm9yIFJlZGlzIG9mIHRoZSBjbHVzdGVyIGFyY2hpdGVjdHVyZVxuICAgICAqIGt2c3RvcmVfc3BsaXRydzogQXBzYXJhREIgZm9yIFJlZGlzIG9mIHRoZSByZWFkL3dyaXRlIHNwbGl0dGluZyBhcmNoaXRlY3R1cmVcbiAgICAgKiBrdnN0b3JlX3N0YW5kYXJkOiBBcHNhcmFEQiBmb3IgUmVkaXMgb2YgdGhlIHN0YW5kYXJkIGFyY2hpdGVjdHVyZVxuICAgICAqIG1lbWNhY2hlOiBBcHNhcmFEQiBmb3IgTWVtY2FjaGVcbiAgICAgKiBtbnM6IE1lc3NhZ2UgU2VydmljZSAoTU5TKVxuICAgICAqIG1vbmdvZGI6IEFwc2FyYURCIGZvciBNb25nb0RCIG9mIHRoZSByZXBsaWNhIHNldCBhcmNoaXRlY3R1cmVcbiAgICAgKiBtb25nb2RiX2NsdXN0ZXI6IEFwc2FyYURCIGZvciBNb25nb0RCIG9mIHRoZSBjbHVzdGVyIGFyY2hpdGVjdHVyZVxuICAgICAqIG1vbmdvZGJfc2hhcmRpbmc6IEFwc2FyYURCIGZvciBNb25nb0RCIG9mIHRoZSBzaGFyZGVkIGNsdXN0ZXIgYXJjaGl0ZWN0dXJlXG4gICAgICogbXFfdG9waWM6IE1OUyB0b3BpY3NcbiAgICAgKiBvY3M6IEFwc2FyYURCIGZvciBNZW1jYWNoZSBvZiBlYXJsaWVyIHZlcnNpb25zXG4gICAgICogb3BlbnNlYXJjaDogT3BlbiBTZWFyY2hcbiAgICAgKiBvc3M6IE9iamVjdCBTdG9yYWdlIFNlcnZpY2UgKE9TUylcbiAgICAgKiBwb2xhcmRiOiBQb2xhckRCXG4gICAgICogcGV0YWRhdGE6IEh5YnJpZERCIGZvciBNeVNRTFxuICAgICAqIHNjZG46IFNlY3VyZSBDb250ZW50IERlbGl2ZXJ5IE5ldHdvcmsgKFNDRE4pXG4gICAgICogc2hhcmViYW5kd2lkdGhwYWNrYWdlczogRUlQIEJhbmR3aWR0aCBQbGFuXG4gICAgICogc2xzOiBMb2cgU2VydmljZVxuICAgICAqIHZwbjogVlBOIEdhdGV3YXlcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNhdGVnb3J5OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZXNjYWxhdGlvbnM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZXNjYWxhdGlvbnM/OiBSb3NNZXRyaWNSdWxlVGVtcGxhdGUuRXNjYWxhdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSBhZ2dyZWdhdGlvbiBwZXJpb2Qgb2YgdGhlIG1vbml0b3JpbmcgZGF0YS4gVW5pdDogc2Vjb25kcy5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB0aGUgbG93ZXN0IGZyZXF1ZW5jeSBhdCB3aGljaCB0aGUgbWV0cmljIGlzIHBvbGxlZC4gVHlwaWNhbGx5LFxuICAgICAqIHlvdSBkbyBub3QgbmVlZCB0byBzcGVjaWZ5IHRoZSBhZ2dyZWdhdGlvbiBwZXJpb2QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgd2ViaG9vazogVGhlIGNhbGxiYWNrIFVSTCB0byB3aGljaCBhIFBPU1QgcmVxdWVzdCBpcyBzZW50IHdoZW4gYW4gYWxlcnQgaXMgdHJpZ2dlcmVkIGJhc2VkXG4gICAgICogb24gdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB3ZWJob29rPzogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hbWVzcGFjZTogVGhlIG5hbWVzcGFjZSBvZiB0aGUgc2VydmljZS4gXG4gICAgICogTm90ZSBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIERlc2NyaWJlTWV0cmljTWV0YUxpc3Qgb3IgQXBwZW5kaXggMTogTWV0cmljcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJ1bGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWxlcnQgcnVsZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJ1bGVOYW1lOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VsZWN0b3I6IFRoZSBkaW1lbnNpb24gb2YgdGhlIGFsZXJ0LiBJdCBpcyBhbiBleHRlbmRlZCBmaWVsZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlbGVjdG9yPzogc3RyaW5nO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNZXRyaWNSdWxlVGVtcGxhdGVfQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21ldHJpY05hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubWV0cmljTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWV0cmljTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tZXRyaWNOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjYXRlZ29yeScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jYXRlZ29yeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2F0ZWdvcnknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2F0ZWdvcnkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VzY2FsYXRpb25zJywgUm9zTWV0cmljUnVsZVRlbXBsYXRlX0VzY2FsYXRpb25zUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZXNjYWxhdGlvbnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wZXJpb2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlYmhvb2snLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMud2ViaG9vaykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZXNwYWNlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWVzcGFjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZXNwYWNlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWVzcGFjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVsZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJ1bGVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZWxlY3RvcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZWxlY3RvcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJBbGVydFRlbXBsYXRlc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUZW1wbGF0ZS5BbGVydFRlbXBsYXRlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGVtcGxhdGUuQWxlcnRUZW1wbGF0ZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTWV0cmljUnVsZVRlbXBsYXRlQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zTWV0cmljUnVsZVRlbXBsYXRlX0FsZXJ0VGVtcGxhdGVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBNZXRyaWNOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1ldHJpY05hbWUpLFxuICAgICAgQ2F0ZWdvcnk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2F0ZWdvcnkpLFxuICAgICAgRXNjYWxhdGlvbnM6IHJvc01ldHJpY1J1bGVUZW1wbGF0ZUVzY2FsYXRpb25zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXNjYWxhdGlvbnMpLFxuICAgICAgUGVyaW9kOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcmlvZCksXG4gICAgICBXZWJob29rOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndlYmhvb2spLFxuICAgICAgTmFtZXNwYWNlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWVzcGFjZSksXG4gICAgICBSdWxlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydWxlTmFtZSksXG4gICAgICBTZWxlY3Rvcjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZWxlY3RvciksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NNZXRyaWNSdWxlVGVtcGxhdGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENyaXRpY2FsUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbXBhcmlzb25PcGVyYXRvcjogVGhlIGNvbXBhcmlzb24gb3BlcmF0b3Igb2YgdGhlIHRocmVzaG9sZCBmb3IgYWxlcnRzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogR3JlYXRlclRoYW5PckVxdWFsVG9UaHJlc2hvbGQ6IGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgdGhyZXNob2xkXG4gICAgICogR3JlYXRlclRoYW5UaHJlc2hvbGQ6IGdyZWF0ZXIgdGhhbiB0aGUgdGhyZXNob2xkXG4gICAgICogTGVzc1RoYW5PckVxdWFsVG9UaHJlc2hvbGQ6IGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgdGhyZXNob2xkXG4gICAgICogTGVzc1RoYW5UaHJlc2hvbGQ6IGxlc3MgdGhhbiB0aGUgdGhyZXNob2xkXG4gICAgICogTm90RXF1YWxUb1RocmVzaG9sZDogbm90IGVxdWFsIHRvIHRoZSB0aHJlc2hvbGRcbiAgICAgKiBHcmVhdGVyVGhhblllc3RlcmRheTogZ3JlYXRlciB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgYXQgdGhlIHNhbWUgdGltZSB5ZXN0ZXJkYXlcbiAgICAgKiBMZXNzVGhhblllc3RlcmRheTogbGVzcyB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgYXQgdGhlIHNhbWUgdGltZSB5ZXN0ZXJkYXlcbiAgICAgKiBHcmVhdGVyVGhhbkxhc3RXZWVrOiBncmVhdGVyIHRoYW4gdGhlIG1ldHJpYyB2YWx1ZSBhdCB0aGUgc2FtZSB0aW1lIGxhc3Qgd2Vla1xuICAgICAqIExlc3NUaGFuTGFzdFdlZWs6IGxlc3MgdGhhbiB0aGUgbWV0cmljIHZhbHVlIGF0IHRoZSBzYW1lIHRpbWUgbGFzdCB3ZWVrXG4gICAgICogR3JlYXRlclRoYW5MYXN0UGVyaW9kOiBncmVhdGVyIHRoYW4gdGhlIG1ldHJpYyB2YWx1ZSBpbiB0aGUgbGFzdCBtb25pdG9yaW5nIGN5Y2xlXG4gICAgICogTGVzc1RoYW5MYXN0UGVyaW9kOiBsZXNzIHRoYW4gdGhlIG1ldHJpYyB2YWx1ZSBpbiB0aGUgbGFzdCBtb25pdG9yaW5nIGN5Y2xlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21wYXJpc29uT3BlcmF0b3I6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lczogVGhlIGNvbnNlY3V0aXZlIG51bWJlciBvZiB0aW1lcyBmb3Igd2hpY2ggdGhlIG1ldHJpYyB2YWx1ZSBpcyBtZWFzdXJlZCBiZWZvcmUgYSBhbGVydCBpcyB0cmlnZ2VyZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lczogbnVtYmVyO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXRpc3RpY3M6IFRoZSBzdGF0aXN0aWNhbCBtZXRob2QgZm9yIGFsZXJ0cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXRpc3RpY3M6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aHJlc2hvbGQ6IFRoZSB0aHJlc2hvbGQgZm9yIGFsZXJ0cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRocmVzaG9sZDogc3RyaW5nO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ3JpdGljYWxQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3JpdGljYWxQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNZXRyaWNSdWxlVGVtcGxhdGVfQ3JpdGljYWxQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBhcmlzb25PcGVyYXRvcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvciAmJiAodHlwZW9mIHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21wYXJpc29uT3BlcmF0b3InLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiR3JlYXRlclRoYW5PckVxdWFsVG9UaHJlc2hvbGRcIixcIkdyZWF0ZXJUaGFuVGhyZXNob2xkXCIsXCJMZXNzVGhhbk9yRXF1YWxUb1RocmVzaG9sZFwiLFwiTGVzc1RoYW5UaHJlc2hvbGRcIixcIk5vdEVxdWFsVG9UaHJlc2hvbGRcIixcIkdyZWF0ZXJUaGFuWWVzdGVyZGF5XCIsXCJMZXNzVGhhblllc3RlcmRheVwiLFwiR3JlYXRlclRoYW5MYXN0V2Vla1wiLFwiTGVzc1RoYW5MYXN0V2Vla1wiLFwiR3JlYXRlclRoYW5MYXN0UGVyaW9kXCIsXCJMZXNzVGhhbkxhc3RQZXJpb2RcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21wYXJpc29uT3BlcmF0b3InLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50aW1lcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZXMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRpc3RpY3MnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3RhdGlzdGljcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdGlzdGljcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGF0aXN0aWNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aHJlc2hvbGQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGhyZXNob2xkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aHJlc2hvbGQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGhyZXNob2xkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNyaXRpY2FsUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlLkNyaXRpY2FsYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDcml0aWNhbFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUZW1wbGF0ZS5Dcml0aWNhbGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNZXRyaWNSdWxlVGVtcGxhdGVDcml0aWNhbFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NNZXRyaWNSdWxlVGVtcGxhdGVfQ3JpdGljYWxQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIENvbXBhcmlzb25PcGVyYXRvcjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IpLFxuICAgICAgVGltZXM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZXMpLFxuICAgICAgU3RhdGlzdGljczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGF0aXN0aWNzKSxcbiAgICAgIFRocmVzaG9sZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aHJlc2hvbGQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zTWV0cmljUnVsZVRlbXBsYXRlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBFc2NhbGF0aW9uc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjcml0aWNhbDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjcml0aWNhbDogUm9zTWV0cmljUnVsZVRlbXBsYXRlLkNyaXRpY2FsUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5mbzogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmZvPzogUm9zTWV0cmljUnVsZVRlbXBsYXRlLkluZm9Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB3YXJuOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHdhcm4/OiBSb3NNZXRyaWNSdWxlVGVtcGxhdGUuV2FyblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRXNjYWxhdGlvbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXNjYWxhdGlvbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNZXRyaWNSdWxlVGVtcGxhdGVfRXNjYWxhdGlvbnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NyaXRpY2FsJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNyaXRpY2FsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjcml0aWNhbCcsIFJvc01ldHJpY1J1bGVUZW1wbGF0ZV9Dcml0aWNhbFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNyaXRpY2FsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmZvJywgUm9zTWV0cmljUnVsZVRlbXBsYXRlX0luZm9Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5pbmZvKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3YXJuJywgUm9zTWV0cmljUnVsZVRlbXBsYXRlX1dhcm5Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy53YXJuKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkVzY2FsYXRpb25zUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlLkVzY2FsYXRpb25zYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFc2NhbGF0aW9uc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUZW1wbGF0ZS5Fc2NhbGF0aW9uc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNZXRyaWNSdWxlVGVtcGxhdGVFc2NhbGF0aW9uc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NNZXRyaWNSdWxlVGVtcGxhdGVfRXNjYWxhdGlvbnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIENyaXRpY2FsOiByb3NNZXRyaWNSdWxlVGVtcGxhdGVDcml0aWNhbFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNyaXRpY2FsKSxcbiAgICAgIEluZm86IHJvc01ldHJpY1J1bGVUZW1wbGF0ZUluZm9Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbmZvKSxcbiAgICAgIFdhcm46IHJvc01ldHJpY1J1bGVUZW1wbGF0ZVdhcm5Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy53YXJuKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc01ldHJpY1J1bGVUZW1wbGF0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSW5mb1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21wYXJpc29uT3BlcmF0b3I6IFRoZSBjb21wYXJpc29uIG9wZXJhdG9yIG9mIHRoZSB0aHJlc2hvbGQgZm9yIGFsZXJ0cy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEdyZWF0ZXJUaGFuT3JFcXVhbFRvVGhyZXNob2xkOiBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHRocmVzaG9sZFxuICAgICAqIEdyZWF0ZXJUaGFuVGhyZXNob2xkOiBncmVhdGVyIHRoYW4gdGhlIHRocmVzaG9sZFxuICAgICAqIExlc3NUaGFuT3JFcXVhbFRvVGhyZXNob2xkOiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHRocmVzaG9sZFxuICAgICAqIExlc3NUaGFuVGhyZXNob2xkOiBsZXNzIHRoYW4gdGhlIHRocmVzaG9sZFxuICAgICAqIE5vdEVxdWFsVG9UaHJlc2hvbGQ6IG5vdCBlcXVhbCB0byB0aGUgdGhyZXNob2xkXG4gICAgICogR3JlYXRlclRoYW5ZZXN0ZXJkYXk6IGdyZWF0ZXIgdGhhbiB0aGUgbWV0cmljIHZhbHVlIGF0IHRoZSBzYW1lIHRpbWUgeWVzdGVyZGF5XG4gICAgICogTGVzc1RoYW5ZZXN0ZXJkYXk6IGxlc3MgdGhhbiB0aGUgbWV0cmljIHZhbHVlIGF0IHRoZSBzYW1lIHRpbWUgeWVzdGVyZGF5XG4gICAgICogR3JlYXRlclRoYW5MYXN0V2VlazogZ3JlYXRlciB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgYXQgdGhlIHNhbWUgdGltZSBsYXN0IHdlZWtcbiAgICAgKiBMZXNzVGhhbkxhc3RXZWVrOiBsZXNzIHRoYW4gdGhlIG1ldHJpYyB2YWx1ZSBhdCB0aGUgc2FtZSB0aW1lIGxhc3Qgd2Vla1xuICAgICAqIEdyZWF0ZXJUaGFuTGFzdFBlcmlvZDogZ3JlYXRlciB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgaW4gdGhlIGxhc3QgbW9uaXRvcmluZyBjeWNsZVxuICAgICAqIExlc3NUaGFuTGFzdFBlcmlvZDogbGVzcyB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgaW4gdGhlIGxhc3QgbW9uaXRvcmluZyBjeWNsZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29tcGFyaXNvbk9wZXJhdG9yOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGltZXM6IFRoZSBjb25zZWN1dGl2ZSBudW1iZXIgb2YgdGltZXMgZm9yIHdoaWNoIHRoZSBtZXRyaWMgdmFsdWUgaXMgbWVhc3VyZWQgYmVmb3JlIGEgYWxlcnQgaXMgdHJpZ2dlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGltZXM6IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGF0aXN0aWNzOiBUaGUgc3RhdGlzdGljYWwgbWV0aG9kIGZvciBhbGVydHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0aXN0aWNzOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGhyZXNob2xkOiBUaGUgdGhyZXNob2xkIGZvciBhbGVydHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aHJlc2hvbGQ6IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEluZm9Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5mb1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01ldHJpY1J1bGVUZW1wbGF0ZV9JbmZvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21wYXJpc29uT3BlcmF0b3InLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSk7XG4gICAgaWYocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvcikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGFyaXNvbk9wZXJhdG9yJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkdyZWF0ZXJUaGFuT3JFcXVhbFRvVGhyZXNob2xkXCIsXCJHcmVhdGVyVGhhblRocmVzaG9sZFwiLFwiTGVzc1RoYW5PckVxdWFsVG9UaHJlc2hvbGRcIixcIkxlc3NUaGFuVGhyZXNob2xkXCIsXCJOb3RFcXVhbFRvVGhyZXNob2xkXCIsXCJHcmVhdGVyVGhhblllc3RlcmRheVwiLFwiTGVzc1RoYW5ZZXN0ZXJkYXlcIixcIkdyZWF0ZXJUaGFuTGFzdFdlZWtcIixcIkxlc3NUaGFuTGFzdFdlZWtcIixcIkdyZWF0ZXJUaGFuTGFzdFBlcmlvZFwiLFwiTGVzc1RoYW5MYXN0UGVyaW9kXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGFyaXNvbk9wZXJhdG9yJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGltZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0aXN0aWNzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRpc3RpY3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhdGlzdGljcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyZXNob2xkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRocmVzaG9sZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyZXNob2xkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRocmVzaG9sZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJJbmZvUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlLkluZm9gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluZm9Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGVtcGxhdGUuSW5mb2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNZXRyaWNSdWxlVGVtcGxhdGVJbmZvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc01ldHJpY1J1bGVUZW1wbGF0ZV9JbmZvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBDb21wYXJpc29uT3BlcmF0b3I6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSxcbiAgICAgIFRpbWVzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVzKSxcbiAgICAgIFN0YXRpc3RpY3M6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhdGlzdGljcyksXG4gICAgICBUaHJlc2hvbGQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGhyZXNob2xkKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc01ldHJpY1J1bGVUZW1wbGF0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgV2FyblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21wYXJpc29uT3BlcmF0b3I6IFRoZSBjb21wYXJpc29uIG9wZXJhdG9yIG9mIHRoZSB0aHJlc2hvbGQgZm9yIGFsZXJ0cy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEdyZWF0ZXJUaGFuT3JFcXVhbFRvVGhyZXNob2xkOiBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHRocmVzaG9sZFxuICAgICAqIEdyZWF0ZXJUaGFuVGhyZXNob2xkOiBncmVhdGVyIHRoYW4gdGhlIHRocmVzaG9sZFxuICAgICAqIExlc3NUaGFuT3JFcXVhbFRvVGhyZXNob2xkOiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHRocmVzaG9sZFxuICAgICAqIExlc3NUaGFuVGhyZXNob2xkOiBsZXNzIHRoYW4gdGhlIHRocmVzaG9sZFxuICAgICAqIE5vdEVxdWFsVG9UaHJlc2hvbGQ6IG5vdCBlcXVhbCB0byB0aGUgdGhyZXNob2xkXG4gICAgICogR3JlYXRlclRoYW5ZZXN0ZXJkYXk6IGdyZWF0ZXIgdGhhbiB0aGUgbWV0cmljIHZhbHVlIGF0IHRoZSBzYW1lIHRpbWUgeWVzdGVyZGF5XG4gICAgICogTGVzc1RoYW5ZZXN0ZXJkYXk6IGxlc3MgdGhhbiB0aGUgbWV0cmljIHZhbHVlIGF0IHRoZSBzYW1lIHRpbWUgeWVzdGVyZGF5XG4gICAgICogR3JlYXRlclRoYW5MYXN0V2VlazogZ3JlYXRlciB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgYXQgdGhlIHNhbWUgdGltZSBsYXN0IHdlZWtcbiAgICAgKiBMZXNzVGhhbkxhc3RXZWVrOiBsZXNzIHRoYW4gdGhlIG1ldHJpYyB2YWx1ZSBhdCB0aGUgc2FtZSB0aW1lIGxhc3Qgd2Vla1xuICAgICAqIEdyZWF0ZXJUaGFuTGFzdFBlcmlvZDogZ3JlYXRlciB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgaW4gdGhlIGxhc3QgbW9uaXRvcmluZyBjeWNsZVxuICAgICAqIExlc3NUaGFuTGFzdFBlcmlvZDogbGVzcyB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgaW4gdGhlIGxhc3QgbW9uaXRvcmluZyBjeWNsZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29tcGFyaXNvbk9wZXJhdG9yOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGltZXM6IFRoZSBjb25zZWN1dGl2ZSBudW1iZXIgb2YgdGltZXMgZm9yIHdoaWNoIHRoZSBtZXRyaWMgdmFsdWUgaXMgbWVhc3VyZWQgYmVmb3JlIGEgYWxlcnQgaXMgdHJpZ2dlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGltZXM6IG51bWJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGF0aXN0aWNzOiBUaGUgc3RhdGlzdGljYWwgbWV0aG9kIGZvciBhbGVydHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0aXN0aWNzOiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGhyZXNob2xkOiBUaGUgdGhyZXNob2xkIGZvciBhbGVydHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aHJlc2hvbGQ6IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFdhcm5Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgV2FyblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01ldHJpY1J1bGVUZW1wbGF0ZV9XYXJuUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21wYXJpc29uT3BlcmF0b3InLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSk7XG4gICAgaWYocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvcikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGFyaXNvbk9wZXJhdG9yJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkdyZWF0ZXJUaGFuT3JFcXVhbFRvVGhyZXNob2xkXCIsXCJHcmVhdGVyVGhhblRocmVzaG9sZFwiLFwiTGVzc1RoYW5PckVxdWFsVG9UaHJlc2hvbGRcIixcIkxlc3NUaGFuVGhyZXNob2xkXCIsXCJOb3RFcXVhbFRvVGhyZXNob2xkXCIsXCJHcmVhdGVyVGhhblllc3RlcmRheVwiLFwiTGVzc1RoYW5ZZXN0ZXJkYXlcIixcIkdyZWF0ZXJUaGFuTGFzdFdlZWtcIixcIkxlc3NUaGFuTGFzdFdlZWtcIixcIkdyZWF0ZXJUaGFuTGFzdFBlcmlvZFwiLFwiTGVzc1RoYW5MYXN0UGVyaW9kXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGFyaXNvbk9wZXJhdG9yJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGltZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0aXN0aWNzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRpc3RpY3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhdGlzdGljcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyZXNob2xkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRocmVzaG9sZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyZXNob2xkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRocmVzaG9sZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJXYXJuUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlLldhcm5gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFdhcm5Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGVtcGxhdGUuV2FybmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNZXRyaWNSdWxlVGVtcGxhdGVXYXJuUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc01ldHJpY1J1bGVUZW1wbGF0ZV9XYXJuUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBDb21wYXJpc29uT3BlcmF0b3I6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSxcbiAgICAgIFRpbWVzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVzKSxcbiAgICAgIFN0YXRpc3RpY3M6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhdGlzdGljcyksXG4gICAgICBUaHJlc2hvbGQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGhyZXNob2xkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q01TOjpNb25pdG9yR3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTW9uaXRvckdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRhY3RHcm91cHM6IFRoZSBhbGVydCBjb250YWN0IGdyb3VwLiBBbGVydCBub3RpZmljYXRpb25zIGZvciB0aGUgYXBwbGljYXRpb24gZ3JvdXAgYXJlIHNlbnQgdG9cbiAgICAgKiB0aGUgc3BlY2lmaWVkIGFsZXJ0IGNvbnRhY3QgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFjdEdyb3Vwcz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NNb25pdG9yR3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTW9uaXRvckdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTW9uaXRvckdyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250YWN0R3JvdXBzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnRhY3RHcm91cHMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTW9uaXRvckdyb3VwUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TW9uaXRvckdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNb25pdG9yR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNb25pdG9yR3JvdXBgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTW9uaXRvckdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NNb25pdG9yR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBHcm91cE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSxcbiAgICAgIENvbnRhY3RHcm91cHM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29udGFjdEdyb3VwcyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Q01TOjpNb25pdG9yR3JvdXBgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NNb25pdG9yR3JvdXAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNNUzo6TW9uaXRvckdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgR3JvdXBJZDogQXBwbGljYXRpb24gZ3JvdXAgSUQgZ2VuZXJhdGVkIGFmdGVyIHRoZSBncm91cCBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBJZDogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYXBwbGljYXRpb24gZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRhY3RHcm91cHM6IFRoZSBhbGVydCBjb250YWN0IGdyb3VwLiBBbGVydCBub3RpZmljYXRpb25zIGZvciB0aGUgYXBwbGljYXRpb24gZ3JvdXAgYXJlIHNlbnQgdG9cbiAgICAgKiB0aGUgc3BlY2lmaWVkIGFsZXJ0IGNvbnRhY3QgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGNvbnRhY3RHcm91cHM6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDTVM6Ok1vbml0b3JHcm91cGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTW9uaXRvckdyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NNb25pdG9yR3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwSWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0dyb3VwSWQnKSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmdyb3VwTmFtZSA9IHByb3BzLmdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy5jb250YWN0R3JvdXBzID0gcHJvcHMuY29udGFjdEdyb3VwcztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBncm91cE5hbWU6IHRoaXMuZ3JvdXBOYW1lLFxuICAgICAgICAgICAgY29udGFjdEdyb3VwczogdGhpcy5jb250YWN0R3JvdXBzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NNb25pdG9yR3JvdXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNNUzo6TW9uaXRvckdyb3VwSW5zdGFuY2VzYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc01vbml0b3JHcm91cEluc3RhbmNlc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgSUQgb2YgdGhlIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZXM6XG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VzOiBBcnJheTxSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXMuSW5zdGFuY2VzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc01vbml0b3JHcm91cEluc3RhbmNlc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZXMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmluc3RhbmNlcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmluc3RhbmNlcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmluc3RhbmNlcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5pbnN0YW5jZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAxLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc01vbml0b3JHcm91cEluc3RhbmNlc19JbnN0YW5jZXNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuaW5zdGFuY2VzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNb25pdG9yR3JvdXBJbnN0YW5jZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc01vbml0b3JHcm91cEluc3RhbmNlc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Ok1vbml0b3JHcm91cEluc3RhbmNlc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc01vbml0b3JHcm91cEluc3RhbmNlc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIEdyb3VwSWQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBJZCksXG4gICAgICBJbnN0YW5jZXM6IHJvcy5saXN0TWFwcGVyKHJvc01vbml0b3JHcm91cEluc3RhbmNlc0luc3RhbmNlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5pbnN0YW5jZXMpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkNNUzo6TW9uaXRvckdyb3VwSW5zdGFuY2VzYFxuICovXG5leHBvcnQgY2xhc3MgUm9zTW9uaXRvckdyb3VwSW5zdGFuY2VzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDTVM6Ok1vbml0b3JHcm91cEluc3RhbmNlc1wiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgYXBwbGljYXRpb24gZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cElkOiBhbnk7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgSUQgb2YgdGhlIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyBncm91cElkOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VzOlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZXM6IEFycmF5PFJvc01vbml0b3JHcm91cEluc3RhbmNlcy5JbnN0YW5jZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q01TOjpNb25pdG9yR3JvdXBJbnN0YW5jZXNgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc01vbml0b3JHcm91cEluc3RhbmNlc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTW9uaXRvckdyb3VwSW5zdGFuY2VzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJHcm91cElkID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdHcm91cElkJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5ncm91cElkID0gcHJvcHMuZ3JvdXBJZDtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMgPSBwcm9wcy5pbnN0YW5jZXM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3JvdXBJZDogdGhpcy5ncm91cElkLFxuICAgICAgICAgICAgaW5zdGFuY2VzOiB0aGlzLmluc3RhbmNlcyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zTW9uaXRvckdyb3VwSW5zdGFuY2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zTW9uaXRvckdyb3VwSW5zdGFuY2VzIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbnN0YW5jZU5hbWU6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjYXRlZ29yeTogVGhlIGFiYnJldmlhdGlvbiBvZiB0aGUgc2VydmljZSBuYW1lLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogRUNTIChpbmNsdWRpbmcgQWxpYmFiYSBDbG91ZCBhbmQgbm9uLUFsaWJhYmEgQ2xvdWQgaG9zdHMpXG4gICAgICogUkRTIChBcHNhcmFEQiBmb3IgUkRTKVxuICAgICAqIEFEUyAoQW5hbHl0aWNEQilcbiAgICAgKiBTTEIgKFNlcnZlciBMb2FkIEJhbGFuY2VyKVxuICAgICAqIFZQQyAoVmlydHVhbCBQcml2YXRlIENsb3VkKVxuICAgICAqIEFQSUdBVEVXQVkgKEFQSSBHYXRld2F5KVxuICAgICAqIENETlxuICAgICAqIENTIChDb250YWluZXIgU2VydmljZSBmb3IgU3dhcm0pXG4gICAgICogRENETiAoRHluYW1pYyBSb3V0ZSBmb3IgQ0ROIClcbiAgICAgKiBERG9TIChkaXN0cmlidXRlZCBkZW5pYWwgb2Ygc2VydmljZSlcbiAgICAgKiBFSVAgKEVsYXN0aWMgSVApXG4gICAgICogRUxBU1RJQ1NFQVJDSCAoRWxhc3RpY3NlYXJjaClcbiAgICAgKiBFTVIgKEUtTWFwUmVkdWNlKVxuICAgICAqIEVTUyAoQXV0byBTY2FsaW5nKVxuICAgICAqIEhCQVNFIChBcHNhcmFEQiBmb3IgSEJhc2UpXG4gICAgICogSU9UX0VER0UgKElvVCBFZGdlKVxuICAgICAqIEs4U19QT0QgKGs4cyBwb2QgKVxuICAgICAqIEtWU1RPUkVfU0hBUkRJTkcgKEFwc2FyYURCIGZvciBSZWRpcyBjbHVzdGVyIHZlcnNpb24pXG4gICAgICogS1ZTVE9SRV9TUExJVFJXIChBcHNhcmFEQiBmb3IgUmVkaXMgcmVhZC93cml0ZSBzcGxpdHRpbmcgdmVyc2lvbilcbiAgICAgKiBLVlNUT1JFX1NUQU5EQVJEIChBcHNhcmFEQiBmb3IgUmVkaXMgc3RhbmRhcmQgdmVyc2lvbilcbiAgICAgKiBNRU1DQUNIRSAoQXBzYXJhREIgZm9yIE1lbWNhY2hlKVxuICAgICAqIE1OUyAoTWVzc2FnZSBTZXJ2aWNlKVxuICAgICAqIE1PTkdPREIgKEFwc2FyYURCIGZvciBNb25nb0RCIHJlcGxpY2Egc2V0IGluc3RhbmNlcylcbiAgICAgKiBNT05HT0RCX0NMVVNURVIgKEFwc2FyYURCIGZvciBNb25nb0RCIGNsdXN0ZXIgdmVyc2lvbilcbiAgICAgKiBNT05HT0RCX1NIQVJESU5HIChBcHNhcmFEQiBmb3IgTW9uZ29EQiBzaGFyZGVkIGNsdXN0ZXJzKVxuICAgICAqIE1RX1RPUElDIChNZXNzYWdlIFNlcnZpY2UgdG9waWMpXG4gICAgICogT0NTIChvbGQgdmVyc2lvbiBBcHNhcmFEQiBmb3IgTWVtY2FjaGUpXG4gICAgICogT1BFTlNFQVJDSCAoT3BlbiBTZWFyY2gpXG4gICAgICogT1NTIChPYmplY3QgU3RvcmFnZSBTZXJ2aWNlKVxuICAgICAqIFBPTEFSREIgKEFwc2FyYURCIGZvciBQT0xBUkRCKVxuICAgICAqIFBFVEFEQVRBIChIeWJyaWREQiBmb3IgTXlTUUwpXG4gICAgICogU0NETiAoU2VjdXJlIENvbnRlbnQgRGVsaXZlcnkgTmV0d29yaylcbiAgICAgKiBTSEFSRUJBTkRXSURUSFBBQ0tBR0VTIChzaGFyZWQgYmFuZHdpZHRoIHBhY2thZ2UpXG4gICAgICogU0xTIChMb2cgU2VydmljZSlcbiAgICAgKiBWUE4gKFZQTiBHYXRld2F5IClcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNhdGVnb3J5OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZWdpb25JZDogVGhlIElEIG9mIHRoZSByZWdpb24gd2hlcmUgdGhlIGluc3RhbmNlIGlzIGRlcGxveWVkLCBzdWNoIGFzIGNuLWhhbmd6aG91LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVnaW9uSWQ6IHN0cmluZztcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEluc3RhbmNlc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbnN0YW5jZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNfSW5zdGFuY2VzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjYXRlZ29yeScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jYXRlZ29yeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2F0ZWdvcnknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2F0ZWdvcnkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb25JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5yZWdpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVnaW9uSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiSW5zdGFuY2VzUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TW9uaXRvckdyb3VwSW5zdGFuY2VzLkluc3RhbmNlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5zdGFuY2VzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TW9uaXRvckdyb3VwSW5zdGFuY2VzLkluc3RhbmNlc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNJbnN0YW5jZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zTW9uaXRvckdyb3VwSW5zdGFuY2VzX0luc3RhbmNlc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgSW5zdGFuY2VOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlTmFtZSksXG4gICAgICBDYXRlZ29yeTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jYXRlZ29yeSksXG4gICAgICBJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpLFxuICAgICAgUmVnaW9uSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVnaW9uSWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDTVM6Ok1vbml0b3JpbmdBZ2VudFByb2Nlc3NgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTW9uaXRvcmluZ0FnZW50UHJvY2Vzc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9jZXNzTmFtZTogVGhlIG5hbWUgb2YgdGhlIHByb2Nlc3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvY2Vzc05hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvY2Vzc1VzZXI6IFRoZSB1c2VyIHdobyBsYXVuY2hlZCB0aGUgcHJvY2Vzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9jZXNzVXNlcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NNb25pdG9yaW5nQWdlbnRQcm9jZXNzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc01vbml0b3JpbmdBZ2VudFByb2Nlc3NQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNb25pdG9yaW5nQWdlbnRQcm9jZXNzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9jZXNzTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm9jZXNzTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2Nlc3NVc2VyJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb2Nlc3NVc2VyKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc01vbml0b3JpbmdBZ2VudFByb2Nlc3NQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNb25pdG9yaW5nQWdlbnRQcm9jZXNzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNb25pdG9yaW5nQWdlbnRQcm9jZXNzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TW9uaXRvcmluZ0FnZW50UHJvY2Vzc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNb25pdG9yaW5nQWdlbnRQcm9jZXNzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NNb25pdG9yaW5nQWdlbnRQcm9jZXNzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgSW5zdGFuY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnN0YW5jZUlkKSxcbiAgICAgIFByb2Nlc3NOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb2Nlc3NOYW1lKSxcbiAgICAgIFByb2Nlc3NVc2VyOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb2Nlc3NVc2VyKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpDTVM6Ok1vbml0b3JpbmdBZ2VudFByb2Nlc3NgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NNb25pdG9yaW5nQWdlbnRQcm9jZXNzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDTVM6Ok1vbml0b3JpbmdBZ2VudFByb2Nlc3NcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJZDogVGhlIHByb2Nlc3MgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJZDogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2Nlc3NOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvY2Vzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcHJvY2Vzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9jZXNzVXNlcjogVGhlIHVzZXIgd2hvIGxhdW5jaGVkIHRoZSBwcm9jZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcm9jZXNzVXNlcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNNUzo6TW9uaXRvcmluZ0FnZW50UHJvY2Vzc2AuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTW9uaXRvcmluZ0FnZW50UHJvY2Vzc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTW9uaXRvcmluZ0FnZW50UHJvY2Vzcy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRySWQgPSByb3MuVG9rZW4uYXNTdHJpbmcodGhpcy5nZXRBdHQoJ0lkJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUlkID0gcHJvcHMuaW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5wcm9jZXNzTmFtZSA9IHByb3BzLnByb2Nlc3NOYW1lO1xuICAgICAgICB0aGlzLnByb2Nlc3NVc2VyID0gcHJvcHMucHJvY2Vzc1VzZXI7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5zdGFuY2VJZDogdGhpcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgcHJvY2Vzc05hbWU6IHRoaXMucHJvY2Vzc05hbWUsXG4gICAgICAgICAgICBwcm9jZXNzVXNlcjogdGhpcy5wcm9jZXNzVXNlcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zTW9uaXRvcmluZ0FnZW50UHJvY2Vzc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuIl19