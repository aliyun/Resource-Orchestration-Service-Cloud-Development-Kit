"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosSiteMonitor = exports.RosMonitoringAgentProcess = exports.RosMonitorGroupInstances = exports.RosMonitorGroup = exports.RosMetricRuleTemplate = exports.RosMetricRuleTargets = exports.RosGroupMetricRule = exports.RosEventRuleTargets = exports.RosEventRule = exports.RosDynamicTagGroup = exports.RosContactGroup = exports.RosContact = void 0;
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
        this.attrContactName = this.getAtt('ContactName');
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
        this.attrContactGroupName = this.getAtt('ContactGroupName');
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
        this.attrDynamicTagRuleId = this.getAtt('DynamicTagRuleId');
        this.attrTagKey = this.getAtt('TagKey');
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
        this.attrData = this.getAtt('Data');
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
        this.attrRuleId = this.getAtt('RuleId');
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
        this.attrArns = this.getAtt('Arns');
        this.attrIds = this.getAtt('Ids');
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
        this.attrId = this.getAtt('Id');
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
        this.attrGroupId = this.getAtt('GroupId');
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
        this.attrGroupId = this.getAtt('GroupId');
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
        this.attrId = this.getAtt('Id');
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
/**
 * Determine whether the given properties match those of a `RosSiteMonitorProps`
 *
 * @param properties - the TypeScript properties of a `RosSiteMonitorProps`
 *
 * @returns the result of the validation.
 */
function RosSiteMonitorPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('address', ros.requiredValidator)(properties.address));
    errors.collect(ros.propertyValidator('address', ros.validateString)(properties.address));
    errors.collect(ros.propertyValidator('optionsJson', ros.validateString)(properties.optionsJson));
    errors.collect(ros.propertyValidator('taskName', ros.requiredValidator)(properties.taskName));
    errors.collect(ros.propertyValidator('taskName', ros.validateString)(properties.taskName));
    errors.collect(ros.propertyValidator('taskType', ros.requiredValidator)(properties.taskType));
    errors.collect(ros.propertyValidator('taskType', ros.validateString)(properties.taskType));
    errors.collect(ros.propertyValidator('ispCities', ros.listValidator(RosSiteMonitor_IspCitiesPropertyValidator))(properties.ispCities));
    errors.collect(ros.propertyValidator('interval', ros.validateNumber)(properties.interval));
    errors.collect(ros.propertyValidator('alertIds', ros.listValidator(ros.validateString))(properties.alertIds));
    return errors.wrap('supplied properties not correct for "RosSiteMonitorProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::SiteMonitor` resource
 *
 * @param properties - the TypeScript properties of a `RosSiteMonitorProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::SiteMonitor` resource.
 */
// @ts-ignore TS6133
function rosSiteMonitorPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosSiteMonitorPropsValidator(properties).assertSuccess();
    }
    return {
        Address: ros.stringToRosTemplate(properties.address),
        TaskName: ros.stringToRosTemplate(properties.taskName),
        TaskType: ros.stringToRosTemplate(properties.taskType),
        AlertIds: ros.listMapper(ros.stringToRosTemplate)(properties.alertIds),
        Interval: ros.numberToRosTemplate(properties.interval),
        IspCities: ros.listMapper(rosSiteMonitorIspCitiesPropertyToRosTemplate)(properties.ispCities),
        OptionsJson: ros.stringToRosTemplate(properties.optionsJson),
    };
}
/**
 * A ROS template type:  `ALIYUN::CMS::SiteMonitor`
 */
class RosSiteMonitor extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CMS::SiteMonitor`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSiteMonitor.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTaskId = this.getAtt('TaskId');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.address = props.address;
        this.taskName = props.taskName;
        this.taskType = props.taskType;
        this.alertIds = props.alertIds;
        this.interval = props.interval;
        this.ispCities = props.ispCities;
        this.optionsJson = props.optionsJson;
    }
    get rosProperties() {
        return {
            address: this.address,
            taskName: this.taskName,
            taskType: this.taskType,
            alertIds: this.alertIds,
            interval: this.interval,
            ispCities: this.ispCities,
            optionsJson: this.optionsJson,
        };
    }
    renderProperties(props) {
        return rosSiteMonitorPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSiteMonitor = RosSiteMonitor;
/**
 * The resource type name for this resource class.
 */
RosSiteMonitor.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS::SiteMonitor";
/**
 * Determine whether the given properties match those of a `IspCitiesProperty`
 *
 * @param properties - the TypeScript properties of a `IspCitiesProperty`
 *
 * @returns the result of the validation.
 */
function RosSiteMonitor_IspCitiesPropertyValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isp', ros.requiredValidator)(properties.isp));
    errors.collect(ros.propertyValidator('isp', ros.validateString)(properties.isp));
    errors.collect(ros.propertyValidator('city', ros.requiredValidator)(properties.city));
    errors.collect(ros.propertyValidator('city', ros.validateString)(properties.city));
    return errors.wrap('supplied properties not correct for "IspCitiesProperty"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CMS::SiteMonitor.IspCities` resource
 *
 * @param properties - the TypeScript properties of a `IspCitiesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CMS::SiteMonitor.IspCities` resource.
 */
// @ts-ignore TS6133
function rosSiteMonitorIspCitiesPropertyToRosTemplate(properties) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    RosSiteMonitor_IspCitiesPropertyValidator(properties).assertSuccess();
    return {
        Isp: ros.stringToRosTemplate(properties.isp),
        City: ros.stringToRosTemplate(properties.city),
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNtcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXVCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyx3QkFBd0IsQ0FBQyxVQUFlO0lBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5RixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM5RixN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QUMsR0FBRyxDQUFDO1FBQzVDLElBQUksRUFBRSxHQUFHLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztLQUMvQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDTVM6OkNvbnRhY3RgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ29udGFjdFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGFubmVsczogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hhbm5lbHM6IFJvc0NvbnRhY3QuQ2hhbm5lbHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsYXJtIGNvbnRhY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFjdE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmliZTogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBhbGVydCBjb250YWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaWJlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ29udGFjdFByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDb250YWN0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ29udGFjdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpYmUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVzY3JpYmUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaWJlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaWJlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250YWN0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb250YWN0TmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGFjdE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NoYW5uZWxzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNoYW5uZWxzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjaGFubmVscycsIFJvc0NvbnRhY3RfQ2hhbm5lbHNQcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5jaGFubmVscykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NDb250YWN0UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6Q29udGFjdGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ29udGFjdFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkNvbnRhY3RgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ29udGFjdFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ29udGFjdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENoYW5uZWxzOiByb3NDb250YWN0Q2hhbm5lbHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jaGFubmVscyksXG4gICAgICBDb250YWN0TmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb250YWN0TmFtZSksXG4gICAgICBEZXNjcmliZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmliZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Q01TOjpDb250YWN0YFxuICovXG5leHBvcnQgY2xhc3MgUm9zQ29udGFjdCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q01TOjpDb250YWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ29udGFjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGFybSBjb250YWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29udGFjdE5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoYW5uZWxzOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgY2hhbm5lbHM6IFJvc0NvbnRhY3QuQ2hhbm5lbHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsYXJtIGNvbnRhY3QuXG4gICAgICovXG4gICAgcHVibGljIGNvbnRhY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpYmU6IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYWxlcnQgY29udGFjdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpYmU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDTVM6OkNvbnRhY3RgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0NvbnRhY3RQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0NvbnRhY3QuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNvbnRhY3ROYW1lID0gdGhpcy5nZXRBdHQoJ0NvbnRhY3ROYW1lJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0gcHJvcHMuY2hhbm5lbHM7XG4gICAgICAgIHRoaXMuY29udGFjdE5hbWUgPSBwcm9wcy5jb250YWN0TmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmliZSA9IHByb3BzLmRlc2NyaWJlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoYW5uZWxzOiB0aGlzLmNoYW5uZWxzLFxuICAgICAgICAgICAgY29udGFjdE5hbWU6IHRoaXMuY29udGFjdE5hbWUsXG4gICAgICAgICAgICBkZXNjcmliZTogdGhpcy5kZXNjcmliZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ29udGFjdFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0NvbnRhY3Qge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENoYW5uZWxzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1haWw6IFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSBjb250YWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWFpbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBhbGlJbTogVGhlIFRyYWRlTWFuYWdlciBJRC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGFsaUltPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGRpbmdXZWJIb29rOiBUaGUgRGluZ1RhbGsgQ2hhdGJvdCBhZGRyZXNzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZGluZ1dlYkhvb2s/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc21zOiBUaGUgbW9iaWxlIHBob25lIG51bWJlciBvZiB0aGUgY29udGFjdC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNtcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYENoYW5uZWxzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENoYW5uZWxzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ29udGFjdF9DaGFubmVsc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWFpbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tYWlsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGlJbScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5hbGlJbSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGluZ1dlYkhvb2snLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZGluZ1dlYkhvb2spKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3NtcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zbXMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ2hhbm5lbHNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpDb250YWN0LkNoYW5uZWxzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDaGFubmVsc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkNvbnRhY3QuQ2hhbm5lbHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ29udGFjdENoYW5uZWxzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0NvbnRhY3RfQ2hhbm5lbHNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIE1haWw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWFpbCksXG4gICAgICBBbGlJTTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hbGlJbSksXG4gICAgICBEaW5nV2ViSG9vazogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kaW5nV2ViSG9vayksXG4gICAgICBTTVM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc21zKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q01TOjpDb250YWN0R3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ29udGFjdEdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRhY3RHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0IGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRhY3RHcm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWN0TmFtZXM6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRhY3ROYW1lczogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmliZTogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBhbGVydCBjb250YWN0IGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaWJlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ29udGFjdEdyb3VwUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NvbnRhY3RHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0NvbnRhY3RHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzY3JpYmUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVzY3JpYmUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaWJlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaWJlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250YWN0R3JvdXBOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvbnRhY3RHcm91cE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRhY3RHcm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29udGFjdEdyb3VwTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdE5hbWVzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvbnRhY3ROYW1lcykpO1xuICAgIGlmKHByb3BlcnRpZXMuY29udGFjdE5hbWVzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMuY29udGFjdE5hbWVzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMuY29udGFjdE5hbWVzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdE5hbWVzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNvbnRhY3ROYW1lcy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdE5hbWVzJywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy5jb250YWN0TmFtZXMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ29udGFjdEdyb3VwUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6Q29udGFjdEdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDb250YWN0R3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpDb250YWN0R3JvdXBgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ29udGFjdEdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDb250YWN0R3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDb250YWN0R3JvdXBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbnRhY3RHcm91cE5hbWUpLFxuICAgICAgQ29udGFjdE5hbWVzOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5jb250YWN0TmFtZXMpLFxuICAgICAgRGVzY3JpYmU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpYmUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkNNUzo6Q29udGFjdEdyb3VwYFxuICovXG5leHBvcnQgY2xhc3MgUm9zQ29udGFjdEdyb3VwIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDTVM6OkNvbnRhY3RHcm91cFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENvbnRhY3RHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0IGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ29udGFjdEdyb3VwTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY29udGFjdEdyb3VwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IGNvbnRhY3QgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGNvbnRhY3RHcm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWN0TmFtZXM6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBjb250YWN0TmFtZXM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpYmU6IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYWxlcnQgY29udGFjdCBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpYmU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDTVM6OkNvbnRhY3RHcm91cGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ29udGFjdEdyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NDb250YWN0R3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNvbnRhY3RHcm91cE5hbWUgPSB0aGlzLmdldEF0dCgnQ29udGFjdEdyb3VwTmFtZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jb250YWN0R3JvdXBOYW1lID0gcHJvcHMuY29udGFjdEdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy5jb250YWN0TmFtZXMgPSBwcm9wcy5jb250YWN0TmFtZXM7XG4gICAgICAgIHRoaXMuZGVzY3JpYmUgPSBwcm9wcy5kZXNjcmliZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250YWN0R3JvdXBOYW1lOiB0aGlzLmNvbnRhY3RHcm91cE5hbWUsXG4gICAgICAgICAgICBjb250YWN0TmFtZXM6IHRoaXMuY29udGFjdE5hbWVzLFxuICAgICAgICAgICAgZGVzY3JpYmU6IHRoaXMuZGVzY3JpYmUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0NvbnRhY3RHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q01TOjpEeW5hbWljVGFnR3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRHluYW1pY1RhZ0dyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRhY3RHcm91cExpc3Q6IEFsYXJtIGNvbnRhY3RzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRhY3RHcm91cExpc3Q6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFnS2V5OiBUYWcga2V5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ0tleTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGVuYWJsZUluc3RhbGxBZ2VudDogV2hldGhlciB0byBlbmFibGUgaW5pdGlhbCBpbnN0YWxsYXRpb24gbW9uaXRvcmluZyBwbHVnLCBub3QgaW5zdGFsbGVkIGJ5IGRlZmF1bHQuIFZhbHVlcyBhcmU6XG4gICAgICogdHJ1ZTogZW5hYmxlIGluc3RhbGxhdGlvblxuICAgICAqIE5vdGUgSWYgRUNTIGdlbmVyYXRlZCBpbnN0YW5jZXMgZ3JvdXAgZG9lcyBub3QgbW9uaXRvciBwbHVnLWluIGluc3RhbGxlZCB3aWxsIGF0dGVtcHQgdG8gYXV0b21hdGljYWxseSBpbnN0YWxsLlxuICAgICAqIGZhbHNlOiBkaXNhYmxlIGluc3RhbGxhdGlvblxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZUluc3RhbGxBZ2VudD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlU3Vic2NyaWJlRXZlbnQ6IFdoZXRoZXIgdGhlIGV2ZW50IHN1YnNjcmlwdGlvbiBpcyBlbmFibGVkLiBWYWx1ZXMgYXJlXG4gICAgICogOnRydWU6IGVuYWJsZSBldmVudCBzdWJzY3JpcHRpb25cbiAgICAgKiBmYWxzZTogZGlzYWJsZSBldmVudCBzdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVTdWJzY3JpYmVFdmVudD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbWF0Y2hFeHByZXNzOiBNYXRjaGluZyBsaXN0LiBPbmx5IHN1cHBvcnRzIG9uZSBjdXJyZW50bHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF0Y2hFeHByZXNzPzogQXJyYXk8Um9zRHluYW1pY1RhZ0dyb3VwLk1hdGNoRXhwcmVzc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbjogVGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSBjb25kaXRpb25hbCBleHByZXNzaW9ucy4gVmFsdWVzIGFyZTpcbiAgICAgKiBhbmQ6IHRoZSByZWxhdGlvbnNoaXAgYmV0d2VlblxuICAgICAqIG9yOiB0aGUgcmVsYXRpb25zaGlwIG9yIHRoZVxuICAgICAqIERlc2NyaXB0aW9uIGN1cnJlbnRseSBzdXBwb3J0cyBvbmx5IG9uZSBjb21iaW5hdGlvbiBvZiBjb25kaXRpb25zLCB0aGUgZm9sbG93LXVwIEFsaSBjbG91ZCB3aWxsIHN1cHBvcnQgYSB2YXJpZXR5IG9mIGNvbWJpbmF0aW9ucyBvZiBjb25kaXRpb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRlbXBsYXRlSWRMaXN0OiBBbGFybSB0ZW1wbGF0ZSBJRCBsaXN0LlxuICAgICAqIFdoZW4gdGhlIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGFwcGxpY2F0aW9uIGdyb3VwIHN5bmNocm9uaXplcyB0YWdzLCBpdCB3aWxsIGdlbmVyYXRlIGFsYXJtIHJ1bGVzIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGFsYXJtIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlSWRMaXN0PzogQXJyYXk8c3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NEeW5hbWljVGFnR3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRHluYW1pY1RhZ0dyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRHluYW1pY1RhZ0dyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250YWN0R3JvdXBMaXN0Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvbnRhY3RHcm91cExpc3QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRhY3RHcm91cExpc3QnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmNvbnRhY3RHcm91cExpc3QpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uICYmICh0eXBlb2YgcHJvcGVydGllcy5tYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF0Y2hFeHByZXNzRmlsdGVyUmVsYXRpb24nLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbixcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJhbmRcIixcIm9yXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWF0Y2hFeHByZXNzRmlsdGVyUmVsYXRpb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubWF0Y2hFeHByZXNzRmlsdGVyUmVsYXRpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VuYWJsZVN1YnNjcmliZUV2ZW50Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVTdWJzY3JpYmVFdmVudCkpO1xuICAgIGlmKHByb3BlcnRpZXMudGVtcGxhdGVJZExpc3QgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50ZW1wbGF0ZUlkTGlzdCkgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLnRlbXBsYXRlSWRMaXN0KSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGVtcGxhdGVJZExpc3QnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGVtcGxhdGVJZExpc3QubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RlbXBsYXRlSWRMaXN0Jywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlU3RyaW5nKSkocHJvcGVydGllcy50ZW1wbGF0ZUlkTGlzdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFnS2V5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhZ0tleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFnS2V5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhZ0tleSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZW5hYmxlSW5zdGFsbEFnZW50Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5lbmFibGVJbnN0YWxsQWdlbnQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLm1hdGNoRXhwcmVzcyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLm1hdGNoRXhwcmVzcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLm1hdGNoRXhwcmVzcykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21hdGNoRXhwcmVzcycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5tYXRjaEV4cHJlc3MubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDEsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21hdGNoRXhwcmVzcycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0R5bmFtaWNUYWdHcm91cF9NYXRjaEV4cHJlc3NQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMubWF0Y2hFeHByZXNzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc0R5bmFtaWNUYWdHcm91cFByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkR5bmFtaWNUYWdHcm91cGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRHluYW1pY1RhZ0dyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6RHluYW1pY1RhZ0dyb3VwYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0R5bmFtaWNUYWdHcm91cFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRHluYW1pY1RhZ0dyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQ29udGFjdEdyb3VwTGlzdDogcm9zLmxpc3RNYXBwZXIocm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29udGFjdEdyb3VwTGlzdCksXG4gICAgICBUYWdLZXk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGFnS2V5KSxcbiAgICAgIEVuYWJsZUluc3RhbGxBZ2VudDogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZW5hYmxlSW5zdGFsbEFnZW50KSxcbiAgICAgIEVuYWJsZVN1YnNjcmliZUV2ZW50OiByb3MuYm9vbGVhblRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lbmFibGVTdWJzY3JpYmVFdmVudCksXG4gICAgICBNYXRjaEV4cHJlc3M6IHJvcy5saXN0TWFwcGVyKHJvc0R5bmFtaWNUYWdHcm91cE1hdGNoRXhwcmVzc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5tYXRjaEV4cHJlc3MpLFxuICAgICAgTWF0Y2hFeHByZXNzRmlsdGVyUmVsYXRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubWF0Y2hFeHByZXNzRmlsdGVyUmVsYXRpb24pLFxuICAgICAgVGVtcGxhdGVJZExpc3Q6IHJvcy5saXN0TWFwcGVyKHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnRlbXBsYXRlSWRMaXN0KSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpDTVM6OkR5bmFtaWNUYWdHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0R5bmFtaWNUYWdHcm91cCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q01TOjpEeW5hbWljVGFnR3JvdXBcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEeW5hbWljVGFnUnVsZUlkOiBEeW5hbWljIHRhZyBydWxlIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRHluYW1pY1RhZ1J1bGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUYWdLZXk6IFRhZyBrZXkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYWdLZXk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRhY3RHcm91cExpc3Q6IEFsYXJtIGNvbnRhY3RzLlxuICAgICAqL1xuICAgIHB1YmxpYyBjb250YWN0R3JvdXBMaXN0OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhZ0tleTogVGFnIGtleS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnS2V5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW5hYmxlSW5zdGFsbEFnZW50OiBXaGV0aGVyIHRvIGVuYWJsZSBpbml0aWFsIGluc3RhbGxhdGlvbiBtb25pdG9yaW5nIHBsdWcsIG5vdCBpbnN0YWxsZWQgYnkgZGVmYXVsdC4gVmFsdWVzIGFyZTpcbiAgICAgKiB0cnVlOiBlbmFibGUgaW5zdGFsbGF0aW9uXG4gICAgICogTm90ZSBJZiBFQ1MgZ2VuZXJhdGVkIGluc3RhbmNlcyBncm91cCBkb2VzIG5vdCBtb25pdG9yIHBsdWctaW4gaW5zdGFsbGVkIHdpbGwgYXR0ZW1wdCB0byBhdXRvbWF0aWNhbGx5IGluc3RhbGwuXG4gICAgICogZmFsc2U6IGRpc2FibGUgaW5zdGFsbGF0aW9uXG4gICAgICovXG4gICAgcHVibGljIGVuYWJsZUluc3RhbGxBZ2VudDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbmFibGVTdWJzY3JpYmVFdmVudDogV2hldGhlciB0aGUgZXZlbnQgc3Vic2NyaXB0aW9uIGlzIGVuYWJsZWQuIFZhbHVlcyBhcmVcbiAgICAgKiA6dHJ1ZTogZW5hYmxlIGV2ZW50IHN1YnNjcmlwdGlvblxuICAgICAqIGZhbHNlOiBkaXNhYmxlIGV2ZW50IHN1YnNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBlbmFibGVTdWJzY3JpYmVFdmVudDogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtYXRjaEV4cHJlc3M6IE1hdGNoaW5nIGxpc3QuIE9ubHkgc3VwcG9ydHMgb25lIGN1cnJlbnRseS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWF0Y2hFeHByZXNzOiBBcnJheTxSb3NEeW5hbWljVGFnR3JvdXAuTWF0Y2hFeHByZXNzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uOiBUaGUgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIGNvbmRpdGlvbmFsIGV4cHJlc3Npb25zLiBWYWx1ZXMgYXJlOlxuICAgICAqIGFuZDogdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuXG4gICAgICogb3I6IHRoZSByZWxhdGlvbnNoaXAgb3IgdGhlXG4gICAgICogRGVzY3JpcHRpb24gY3VycmVudGx5IHN1cHBvcnRzIG9ubHkgb25lIGNvbWJpbmF0aW9uIG9mIGNvbmRpdGlvbnMsIHRoZSBmb2xsb3ctdXAgQWxpIGNsb3VkIHdpbGwgc3VwcG9ydCBhIHZhcmlldHkgb2YgY29tYmluYXRpb25zIG9mIGNvbmRpdGlvbnMuXG4gICAgICovXG4gICAgcHVibGljIG1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGVtcGxhdGVJZExpc3Q6IEFsYXJtIHRlbXBsYXRlIElEIGxpc3QuXG4gICAgICogV2hlbiB0aGUgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYXBwbGljYXRpb24gZ3JvdXAgc3luY2hyb25pemVzIHRhZ3MsIGl0IHdpbGwgZ2VuZXJhdGUgYWxhcm0gcnVsZXMgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgYWxhcm0gdGVtcGxhdGUuXG4gICAgICovXG4gICAgcHVibGljIHRlbXBsYXRlSWRMaXN0OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNNUzo6RHluYW1pY1RhZ0dyb3VwYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NEeW5hbWljVGFnR3JvdXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0R5bmFtaWNUYWdHcm91cC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyRHluYW1pY1RhZ1J1bGVJZCA9IHRoaXMuZ2V0QXR0KCdEeW5hbWljVGFnUnVsZUlkJyk7XG4gICAgICAgIHRoaXMuYXR0clRhZ0tleSA9IHRoaXMuZ2V0QXR0KCdUYWdLZXknKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY29udGFjdEdyb3VwTGlzdCA9IHByb3BzLmNvbnRhY3RHcm91cExpc3Q7XG4gICAgICAgIHRoaXMudGFnS2V5ID0gcHJvcHMudGFnS2V5O1xuICAgICAgICB0aGlzLmVuYWJsZUluc3RhbGxBZ2VudCA9IHByb3BzLmVuYWJsZUluc3RhbGxBZ2VudDtcbiAgICAgICAgdGhpcy5lbmFibGVTdWJzY3JpYmVFdmVudCA9IHByb3BzLmVuYWJsZVN1YnNjcmliZUV2ZW50O1xuICAgICAgICB0aGlzLm1hdGNoRXhwcmVzcyA9IHByb3BzLm1hdGNoRXhwcmVzcztcbiAgICAgICAgdGhpcy5tYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbiA9IHByb3BzLm1hdGNoRXhwcmVzc0ZpbHRlclJlbGF0aW9uO1xuICAgICAgICB0aGlzLnRlbXBsYXRlSWRMaXN0ID0gcHJvcHMudGVtcGxhdGVJZExpc3Q7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGFjdEdyb3VwTGlzdDogdGhpcy5jb250YWN0R3JvdXBMaXN0LFxuICAgICAgICAgICAgdGFnS2V5OiB0aGlzLnRhZ0tleSxcbiAgICAgICAgICAgIGVuYWJsZUluc3RhbGxBZ2VudDogdGhpcy5lbmFibGVJbnN0YWxsQWdlbnQsXG4gICAgICAgICAgICBlbmFibGVTdWJzY3JpYmVFdmVudDogdGhpcy5lbmFibGVTdWJzY3JpYmVFdmVudCxcbiAgICAgICAgICAgIG1hdGNoRXhwcmVzczogdGhpcy5tYXRjaEV4cHJlc3MsXG4gICAgICAgICAgICBtYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbjogdGhpcy5tYXRjaEV4cHJlc3NGaWx0ZXJSZWxhdGlvbixcbiAgICAgICAgICAgIHRlbXBsYXRlSWRMaXN0OiB0aGlzLnRlbXBsYXRlSWRMaXN0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NEeW5hbWljVGFnR3JvdXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NEeW5hbWljVGFnR3JvdXAge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIE1hdGNoRXhwcmVzc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0YWdWYWx1ZTogVGFnIHZhbHVlLCB1c2VkIHdpdGggVGFnVmFsdWVNYXRjaEZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGFnVmFsdWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0YWdWYWx1ZU1hdGNoRnVuY3Rpb246IE1hdGNoaW5nIGxhYmVsZWQga2V5cy4gVmFsdWVzIGFyZTpcbiAgICAgKiBjb250YWluczogY29udGFpbnNcbiAgICAgKiBzdGFydFdpdGg6IFByZWZpeFxuICAgICAqIGVuZFdpdGg6IHN1ZmZpeFxuICAgICAqIG5vdENvbnRhaW5zOiBub3QgaW5jbHVkZWRcbiAgICAgKiBlcXVhbHM6IGVxdWFsc1xuICAgICAqIGFsbDogQWxsXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0YWdWYWx1ZU1hdGNoRnVuY3Rpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE1hdGNoRXhwcmVzc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNYXRjaEV4cHJlc3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NEeW5hbWljVGFnR3JvdXBfTWF0Y2hFeHByZXNzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdWYWx1ZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50YWdWYWx1ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFnVmFsdWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGFnVmFsdWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhZ1ZhbHVlTWF0Y2hGdW5jdGlvbicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50YWdWYWx1ZU1hdGNoRnVuY3Rpb24pKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhZ1ZhbHVlTWF0Y2hGdW5jdGlvbiAmJiAodHlwZW9mIHByb3BlcnRpZXMudGFnVmFsdWVNYXRjaEZ1bmN0aW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YWdWYWx1ZU1hdGNoRnVuY3Rpb24nLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy50YWdWYWx1ZU1hdGNoRnVuY3Rpb24sXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiY29udGFpbnNcIixcInN0YXJ0V2l0aFwiLFwiZW5kV2l0aFwiLFwibm90Q29udGFpbnNcIixcImVxdWFsc1wiLFwiYWxsXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFnVmFsdWVNYXRjaEZ1bmN0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhZ1ZhbHVlTWF0Y2hGdW5jdGlvbikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJNYXRjaEV4cHJlc3NQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpEeW5hbWljVGFnR3JvdXAuTWF0Y2hFeHByZXNzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBNYXRjaEV4cHJlc3NQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpEeW5hbWljVGFnR3JvdXAuTWF0Y2hFeHByZXNzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0R5bmFtaWNUYWdHcm91cE1hdGNoRXhwcmVzc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NEeW5hbWljVGFnR3JvdXBfTWF0Y2hFeHByZXNzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBUYWdWYWx1ZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50YWdWYWx1ZSksXG4gICAgICBUYWdWYWx1ZU1hdGNoRnVuY3Rpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGFnVmFsdWVNYXRjaEZ1bmN0aW9uKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRXZlbnRSdWxlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGV2ZW50UGF0dGVybjogRXZlbnQgcGF0dGVybiBjb25maWd1cmF0aW9uLkEgbWF4aW11bSBvZiAyMCBldmVudCBwYXR0ZXJucy5cbiAgICAgKi9cbiAgICByZWFkb25seSBldmVudFBhdHRlcm46IEFycmF5PFJvc0V2ZW50UnVsZS5FdmVudFBhdHRlcm5Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGFybSBydWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYWxlcnQgcnVsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBldmVudFR5cGU6IFRoZSB0eXBlIG9mIHRoZSBldmVudCBhbGVydC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFNZU1RFTVxuICAgICAqIENVU1RPTVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGV2ZW50VHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgSUQgb2YgdGhlIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc3RhdGU6IFRoZSBzdGF0dXMgb2YgdGhlIGFsZXJ0IHJ1bGUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBFTkFCTEVEXG4gICAgICogRElTQUJMRURcbiAgICAgKi9cbiAgICByZWFkb25seSBzdGF0ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NFdmVudFJ1bGVQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRXZlbnRSdWxlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRXZlbnRSdWxlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdldmVudFBhdHRlcm4nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZXZlbnRQYXR0ZXJuKSk7XG4gICAgaWYocHJvcGVydGllcy5ldmVudFBhdHRlcm4gJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5ldmVudFBhdHRlcm4pIHx8ICh0eXBlb2YgcHJvcGVydGllcy5ldmVudFBhdHRlcm4pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdldmVudFBhdHRlcm4nLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuZXZlbnRQYXR0ZXJuLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiAyMCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZXZlbnRQYXR0ZXJuJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zRXZlbnRSdWxlX0V2ZW50UGF0dGVyblByb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5ldmVudFBhdHRlcm4pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdldmVudFR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZXZlbnRUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0ZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGF0ZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVsZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJ1bGVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zRXZlbnRSdWxlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6RXZlbnRSdWxlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NFdmVudFJ1bGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRXZlbnRSdWxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NFdmVudFJ1bGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBFdmVudFBhdHRlcm46IHJvcy5saXN0TWFwcGVyKHJvc0V2ZW50UnVsZUV2ZW50UGF0dGVyblByb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5ldmVudFBhdHRlcm4pLFxuICAgICAgUnVsZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucnVsZU5hbWUpLFxuICAgICAgRGVzY3JpcHRpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzY3JpcHRpb24pLFxuICAgICAgRXZlbnRUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmV2ZW50VHlwZSksXG4gICAgICBHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwSWQpLFxuICAgICAgU3RhdGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhdGUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkNNUzo6RXZlbnRSdWxlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zRXZlbnRSdWxlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDTVM6OkV2ZW50UnVsZVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERhdGE6IE51bWJlciBvZiByb3dzIGFmZmVjdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGF0YTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXZlbnRQYXR0ZXJuOiBFdmVudCBwYXR0ZXJuIGNvbmZpZ3VyYXRpb24uQSBtYXhpbXVtIG9mIDIwIGV2ZW50IHBhdHRlcm5zLlxuICAgICAqL1xuICAgIHB1YmxpYyBldmVudFBhdHRlcm46IEFycmF5PFJvc0V2ZW50UnVsZS5FdmVudFBhdHRlcm5Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGFybSBydWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyBydWxlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXZlbnRUeXBlOiBUaGUgdHlwZSBvZiB0aGUgZXZlbnQgYWxlcnQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBTWVNURU1cbiAgICAgKiBDVVNUT01cbiAgICAgKi9cbiAgICBwdWJsaWMgZXZlbnRUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIElEIG9mIHRoZSBhcHBsaWNhdGlvbiBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHN0YXRlOiBUaGUgc3RhdHVzIG9mIHRoZSBhbGVydCBydWxlLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogRU5BQkxFRFxuICAgICAqIERJU0FCTEVEXG4gICAgICovXG4gICAgcHVibGljIHN0YXRlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0V2ZW50UnVsZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zRXZlbnRSdWxlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJEYXRhID0gdGhpcy5nZXRBdHQoJ0RhdGEnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZXZlbnRQYXR0ZXJuID0gcHJvcHMuZXZlbnRQYXR0ZXJuO1xuICAgICAgICB0aGlzLnJ1bGVOYW1lID0gcHJvcHMucnVsZU5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5ldmVudFR5cGUgPSBwcm9wcy5ldmVudFR5cGU7XG4gICAgICAgIHRoaXMuZ3JvdXBJZCA9IHByb3BzLmdyb3VwSWQ7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBwcm9wcy5zdGF0ZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBldmVudFBhdHRlcm46IHRoaXMuZXZlbnRQYXR0ZXJuLFxuICAgICAgICAgICAgcnVsZU5hbWU6IHRoaXMucnVsZU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGV2ZW50VHlwZTogdGhpcy5ldmVudFR5cGUsXG4gICAgICAgICAgICBncm91cElkOiB0aGlzLmdyb3VwSWQsXG4gICAgICAgICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRXZlbnRSdWxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRXZlbnRSdWxlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBFdmVudFBhdHRlcm5Qcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbmFtZUxpc3Q6IFRoZSBuYW1lIG9mIHRoZSBldmVudC4gUGxlYXNlIHJlZmVyIHRvIHRoZSBjb25maWd1cmF0aW9uIG9mIENNUy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWVMaXN0PzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBsZXZlbExpc3Q6IFRoZSBzZXZlcml0eSBvZiB0aGUgZXZlbnQgYWxlcnQuIFZhbGlkIHZhbHVlczogQ1JJVElDQUwsIFdBUk4sIElORk8sIGFuZCAqIChhbGwgc2V2ZXJpdHlcbiAgICAgKiBsZXZlbHMpLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbGV2ZWxMaXN0PzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGF0dXNMaXN0OiBUaGUgc3RhdHVzIG9mIHRoZSBldmVudC4gUGxlYXNlIHJlZmVyIHRvIHRoZSBjb25maWd1cmF0aW9uIG9mIENNUy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXR1c0xpc3Q/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGV2ZW50VHlwZUxpc3Q6IFRoZSB0eXBlIG9mIHRoZSBldmVudC4gQSB2YWx1ZSBvZiAqIGluZGljYXRlcyBhbnkgdHlwZS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBjb25maWd1cmF0aW9uIG9mIENNUy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGV2ZW50VHlwZUxpc3Q/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHByb2R1Y3Q6IFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGNvbmZpZ3VyYXRpb24gb2YgQ01TLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJvZHVjdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEV2ZW50UGF0dGVyblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFdmVudFBhdHRlcm5Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NFdmVudFJ1bGVfRXZlbnRQYXR0ZXJuUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lTGlzdCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMubmFtZUxpc3QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2xldmVsTGlzdCcsIHJvcy5saXN0VmFsaWRhdG9yKHJvcy52YWxpZGF0ZUFueSkpKHByb3BlcnRpZXMubGV2ZWxMaXN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0dXNMaXN0Jywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5zdGF0dXNMaXN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdldmVudFR5cGVMaXN0Jywgcm9zLmxpc3RWYWxpZGF0b3Iocm9zLnZhbGlkYXRlQW55KSkocHJvcGVydGllcy5ldmVudFR5cGVMaXN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdwcm9kdWN0Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb2R1Y3QpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRXZlbnRQYXR0ZXJuUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6RXZlbnRSdWxlLkV2ZW50UGF0dGVybmAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXZlbnRQYXR0ZXJuUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6RXZlbnRSdWxlLkV2ZW50UGF0dGVybmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NFdmVudFJ1bGVFdmVudFBhdHRlcm5Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRXZlbnRSdWxlX0V2ZW50UGF0dGVyblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgTmFtZUxpc3Q6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLm5hbWVMaXN0KSxcbiAgICAgIExldmVsTGlzdDogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMubGV2ZWxMaXN0KSxcbiAgICAgIFN0YXR1c0xpc3Q6IHJvcy5saXN0TWFwcGVyKHJvcy5vYmplY3RUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnN0YXR1c0xpc3QpLFxuICAgICAgRXZlbnRUeXBlTGlzdDogcm9zLmxpc3RNYXBwZXIocm9zLm9iamVjdFRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuZXZlbnRUeXBlTGlzdCksXG4gICAgICBQcm9kdWN0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnByb2R1Y3QpLFxuICAgIH07XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZVRhcmdldHNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zRXZlbnRSdWxlVGFyZ2V0c1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBydWxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVsZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWN0UGFyYW1ldGVyczogQ09OVEFDVCBjb25maWd1cmF0aW9uLkEgbWF4aW11bSBvZiA1IHBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICByZWFkb25seSBjb250YWN0UGFyYW1ldGVycz86IEFycmF5PFJvc0V2ZW50UnVsZVRhcmdldHMuQ29udGFjdFBhcmFtZXRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmNQYXJhbWV0ZXJzOiBGQyBjb25maWd1cmF0aW9uLkEgbWF4aW11bSBvZiA1IHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZmNQYXJhbWV0ZXJzPzogQXJyYXk8Um9zRXZlbnRSdWxlVGFyZ2V0cy5GY1BhcmFtZXRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW5zUGFyYW1ldGVyczogTU5TIGNvbmZpZ3VyYXRpb24uQSBtYXhpbXVtIG9mIDUgcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IG1uc1BhcmFtZXRlcnM/OiBBcnJheTxSb3NFdmVudFJ1bGVUYXJnZXRzLk1uc1BhcmFtZXRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2xzUGFyYW1ldGVyczogU0xTIGNvbmZpZ3VyYXRpb24uQSBtYXhpbXVtIG9mIDUgcGFyYW1ldGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBzbHNQYXJhbWV0ZXJzPzogQXJyYXk8Um9zRXZlbnRSdWxlVGFyZ2V0cy5TbHNQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYmhvb2tQYXJhbWV0ZXJzOiBXRUJIT09LIGNvbmZpZ3VyYXRpb24uQSBtYXhpbXVtIG9mIDUgcGFyYW1ldGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSB3ZWJob29rUGFyYW1ldGVycz86IEFycmF5PFJvc0V2ZW50UnVsZVRhcmdldHMuV2ViaG9va1BhcmFtZXRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zRXZlbnRSdWxlVGFyZ2V0c1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NFdmVudFJ1bGVUYXJnZXRzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRXZlbnRSdWxlVGFyZ2V0c1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuY29udGFjdFBhcmFtZXRlcnMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5jb250YWN0UGFyYW1ldGVycykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmNvbnRhY3RQYXJhbWV0ZXJzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdFBhcmFtZXRlcnMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY29udGFjdFBhcmFtZXRlcnMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbnRhY3RQYXJhbWV0ZXJzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zRXZlbnRSdWxlVGFyZ2V0c19Db250YWN0UGFyYW1ldGVyc1Byb3BlcnR5VmFsaWRhdG9yKSkocHJvcGVydGllcy5jb250YWN0UGFyYW1ldGVycykpO1xuICAgIGlmKHByb3BlcnRpZXMuc2xzUGFyYW1ldGVycyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLnNsc1BhcmFtZXRlcnMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5zbHNQYXJhbWV0ZXJzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2xzUGFyYW1ldGVycycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5zbHNQYXJhbWV0ZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzbHNQYXJhbWV0ZXJzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zRXZlbnRSdWxlVGFyZ2V0c19TbHNQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnNsc1BhcmFtZXRlcnMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLndlYmhvb2tQYXJhbWV0ZXJzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMud2ViaG9va1BhcmFtZXRlcnMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy53ZWJob29rUGFyYW1ldGVycykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlYmhvb2tQYXJhbWV0ZXJzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLndlYmhvb2tQYXJhbWV0ZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbWF4OiA1LFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWJob29rUGFyYW1ldGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0V2ZW50UnVsZVRhcmdldHNfV2ViaG9va1BhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMud2ViaG9va1BhcmFtZXRlcnMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmZjUGFyYW1ldGVycyAmJiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzLmZjUGFyYW1ldGVycykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmZjUGFyYW1ldGVycykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZjUGFyYW1ldGVycycsIHJvcy52YWxpZGF0ZUxlbmd0aCkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5mY1BhcmFtZXRlcnMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2ZjUGFyYW1ldGVycycsIHJvcy5saXN0VmFsaWRhdG9yKFJvc0V2ZW50UnVsZVRhcmdldHNfRmNQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmZjUGFyYW1ldGVycykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVsZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJ1bGVOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5tbnNQYXJhbWV0ZXJzICYmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXMubW5zUGFyYW1ldGVycykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLm1uc1BhcmFtZXRlcnMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtbnNQYXJhbWV0ZXJzJywgcm9zLnZhbGlkYXRlTGVuZ3RoKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLm1uc1BhcmFtZXRlcnMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21uc1BhcmFtZXRlcnMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NFdmVudFJ1bGVUYXJnZXRzX01uc1BhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMubW5zUGFyYW1ldGVycykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NFdmVudFJ1bGVUYXJnZXRzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6RXZlbnRSdWxlVGFyZ2V0c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zRXZlbnRSdWxlVGFyZ2V0c1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZVRhcmdldHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRXZlbnRSdWxlVGFyZ2V0c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zRXZlbnRSdWxlVGFyZ2V0c1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIFJ1bGVOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJ1bGVOYW1lKSxcbiAgICAgIENvbnRhY3RQYXJhbWV0ZXJzOiByb3MubGlzdE1hcHBlcihyb3NFdmVudFJ1bGVUYXJnZXRzQ29udGFjdFBhcmFtZXRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuY29udGFjdFBhcmFtZXRlcnMpLFxuICAgICAgRmNQYXJhbWV0ZXJzOiByb3MubGlzdE1hcHBlcihyb3NFdmVudFJ1bGVUYXJnZXRzRmNQYXJhbWV0ZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmZjUGFyYW1ldGVycyksXG4gICAgICBNbnNQYXJhbWV0ZXJzOiByb3MubGlzdE1hcHBlcihyb3NFdmVudFJ1bGVUYXJnZXRzTW5zUGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5tbnNQYXJhbWV0ZXJzKSxcbiAgICAgIFNsc1BhcmFtZXRlcnM6IHJvcy5saXN0TWFwcGVyKHJvc0V2ZW50UnVsZVRhcmdldHNTbHNQYXJhbWV0ZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLnNsc1BhcmFtZXRlcnMpLFxuICAgICAgV2ViaG9va1BhcmFtZXRlcnM6IHJvcy5saXN0TWFwcGVyKHJvc0V2ZW50UnVsZVRhcmdldHNXZWJob29rUGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy53ZWJob29rUGFyYW1ldGVycyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzYFxuICovXG5leHBvcnQgY2xhc3MgUm9zRXZlbnRSdWxlVGFyZ2V0cyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWxlcnQgcnVsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcnVsZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjb250YWN0UGFyYW1ldGVyczogQ09OVEFDVCBjb25maWd1cmF0aW9uLkEgbWF4aW11bSBvZiA1IHBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBwdWJsaWMgY29udGFjdFBhcmFtZXRlcnM6IEFycmF5PFJvc0V2ZW50UnVsZVRhcmdldHMuQ29udGFjdFBhcmFtZXRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZmNQYXJhbWV0ZXJzOiBGQyBjb25maWd1cmF0aW9uLkEgbWF4aW11bSBvZiA1IHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgcHVibGljIGZjUGFyYW1ldGVyczogQXJyYXk8Um9zRXZlbnRSdWxlVGFyZ2V0cy5GY1BhcmFtZXRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbW5zUGFyYW1ldGVyczogTU5TIGNvbmZpZ3VyYXRpb24uQSBtYXhpbXVtIG9mIDUgcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHB1YmxpYyBtbnNQYXJhbWV0ZXJzOiBBcnJheTxSb3NFdmVudFJ1bGVUYXJnZXRzLk1uc1BhcmFtZXRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2xzUGFyYW1ldGVyczogU0xTIGNvbmZpZ3VyYXRpb24uQSBtYXhpbXVtIG9mIDUgcGFyYW1ldGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2xzUGFyYW1ldGVyczogQXJyYXk8Um9zRXZlbnRSdWxlVGFyZ2V0cy5TbHNQYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYmhvb2tQYXJhbWV0ZXJzOiBXRUJIT09LIGNvbmZpZ3VyYXRpb24uQSBtYXhpbXVtIG9mIDUgcGFyYW1ldGVycy5cbiAgICAgKi9cbiAgICBwdWJsaWMgd2ViaG9va1BhcmFtZXRlcnM6IEFycmF5PFJvc0V2ZW50UnVsZVRhcmdldHMuV2ViaG9va1BhcmFtZXRlcnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NFdmVudFJ1bGVUYXJnZXRzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NFdmVudFJ1bGVUYXJnZXRzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5ydWxlTmFtZSA9IHByb3BzLnJ1bGVOYW1lO1xuICAgICAgICB0aGlzLmNvbnRhY3RQYXJhbWV0ZXJzID0gcHJvcHMuY29udGFjdFBhcmFtZXRlcnM7XG4gICAgICAgIHRoaXMuZmNQYXJhbWV0ZXJzID0gcHJvcHMuZmNQYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLm1uc1BhcmFtZXRlcnMgPSBwcm9wcy5tbnNQYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLnNsc1BhcmFtZXRlcnMgPSBwcm9wcy5zbHNQYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLndlYmhvb2tQYXJhbWV0ZXJzID0gcHJvcHMud2ViaG9va1BhcmFtZXRlcnM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcnVsZU5hbWU6IHRoaXMucnVsZU5hbWUsXG4gICAgICAgICAgICBjb250YWN0UGFyYW1ldGVyczogdGhpcy5jb250YWN0UGFyYW1ldGVycyxcbiAgICAgICAgICAgIGZjUGFyYW1ldGVyczogdGhpcy5mY1BhcmFtZXRlcnMsXG4gICAgICAgICAgICBtbnNQYXJhbWV0ZXJzOiB0aGlzLm1uc1BhcmFtZXRlcnMsXG4gICAgICAgICAgICBzbHNQYXJhbWV0ZXJzOiB0aGlzLnNsc1BhcmFtZXRlcnMsXG4gICAgICAgICAgICB3ZWJob29rUGFyYW1ldGVyczogdGhpcy53ZWJob29rUGFyYW1ldGVycyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zRXZlbnRSdWxlVGFyZ2V0c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0V2ZW50UnVsZVRhcmdldHMge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENvbnRhY3RQYXJhbWV0ZXJzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbnRhY3RHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0IGdyb3VwLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29udGFjdEdyb3VwTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBsZXZlbDogVGhlIG1ldGhvZCBvZiBhbGVydCBub3RpZmljYXRpb24uIFZhbGlkIHZhbHVlczogMiwgMywgYW5kIDQuMjogRGluZ1RhbGsgQ2hhdGJvdCBhbmQgZW1haWwuMzogRGluZ1RhbGsgQ2hhdGJvdCBhbmQgZW1haWwuNDogRGluZ1RhbGsgQ2hhdGJvdCBhbmQgZW1haWwuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBsZXZlbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpZDogVGhlIHVuaXF1ZSBJRCBvZiB0aGUgYWxlcnQgY29udGFjdCBncm91cCBub3RpZmljYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYENvbnRhY3RQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENvbnRhY3RQYXJhbWV0ZXJzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zRXZlbnRSdWxlVGFyZ2V0c19Db250YWN0UGFyYW1ldGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29udGFjdEdyb3VwTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb250YWN0R3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsZXZlbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sZXZlbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ29udGFjdFBhcmFtZXRlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzLkNvbnRhY3RQYXJhbWV0ZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDb250YWN0UGFyYW1ldGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZVRhcmdldHMuQ29udGFjdFBhcmFtZXRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRXZlbnRSdWxlVGFyZ2V0c0NvbnRhY3RQYXJhbWV0ZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0V2ZW50UnVsZVRhcmdldHNfQ29udGFjdFBhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIENvbnRhY3RHcm91cE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29udGFjdEdyb3VwTmFtZSksXG4gICAgICBMZXZlbDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sZXZlbCksXG4gICAgICBJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NFdmVudFJ1bGVUYXJnZXRzIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBGY1BhcmFtZXRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZnVuY3Rpb25OYW1lOiBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBmdW5jdGlvbk5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VydmljZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBGdW5jdGlvbiBDb21wdXRlIHNlcnZpY2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzZXJ2aWNlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZWdpb246IFRoZSByZWdpb24gd2hlcmUgRnVuY3Rpb24gQ29tcHV0ZSBpcyBkZXBsb3llZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJlZ2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpZDogVGhlIHVuaXF1ZSBJRCBvZiB0aGUgRnVuY3Rpb24gQ29tcHV0ZSBub3RpZmljYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEZjUGFyYW1ldGVyc1Byb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBGY1BhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NFdmVudFJ1bGVUYXJnZXRzX0ZjUGFyYW1ldGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZnVuY3Rpb25OYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmZ1bmN0aW9uTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc2VydmljZU5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2VydmljZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZ2lvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWdpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkZjUGFyYW1ldGVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZVRhcmdldHMuRmNQYXJhbWV0ZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBGY1BhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzLkZjUGFyYW1ldGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NFdmVudFJ1bGVUYXJnZXRzRmNQYXJhbWV0ZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0V2ZW50UnVsZVRhcmdldHNfRmNQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBGdW5jdGlvbk5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZnVuY3Rpb25OYW1lKSxcbiAgICAgIFNlcnZpY2VOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNlcnZpY2VOYW1lKSxcbiAgICAgIFJlZ2lvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWdpb24pLFxuICAgICAgSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zRXZlbnRSdWxlVGFyZ2V0cyB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgTW5zUGFyYW1ldGVyc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSByZWdpb246IFRoZSByZWdpb24gd2hlcmUgTU5TIGlzIGRlcGxveWVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVnaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlkOiBUaGUgdW5pcXVlIElEIG9mIHRoZSBNZXNzYWdlIFNlcnZpY2UgKE1OUykgbm90aWZpY2F0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcXVldWU6IFRoZSBuYW1lIG9mIHRoZSBNTlMgcXVldWUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBxdWV1ZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYE1uc1BhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgTW5zUGFyYW1ldGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0V2ZW50UnVsZVRhcmdldHNfTW5zUGFyYW1ldGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZ2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3F1ZXVlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnF1ZXVlKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIk1uc1BhcmFtZXRlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzLk1uc1BhcmFtZXRlcnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYE1uc1BhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzLk1uc1BhcmFtZXRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRXZlbnRSdWxlVGFyZ2V0c01uc1BhcmFtZXRlcnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zRXZlbnRSdWxlVGFyZ2V0c19NbnNQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBSZWdpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVnaW9uKSxcbiAgICAgIElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlkKSxcbiAgICAgIFF1ZXVlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnF1ZXVlKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0V2ZW50UnVsZVRhcmdldHMge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFNsc1BhcmFtZXRlcnNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcHJvamVjdDogVGhlIHByb2plY3QgY29ycmVzcG9uZGluZyB0byBMb2cgU2VydmljZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHByb2plY3Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbG9nU3RvcmU6IFRoZSBsb2dzdG9yZSBjb3JyZXNwb25kaW5nIHRvIExvZyBTZXJ2aWNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbG9nU3RvcmU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgcmVnaW9uOiBUaGUgcmVnaW9uIHdoZXJlIExvZyBTZXJ2aWNlIGlzIGRlcGxveWVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcmVnaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlkOiBUaGUgdW5pcXVlIElEIG9mIHRoZSBMb2cgU2VydmljZSBub3RpZmljYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFNsc1BhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2xzUGFyYW1ldGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0V2ZW50UnVsZVRhcmdldHNfU2xzUGFyYW1ldGVyc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvamVjdCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5wcm9qZWN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2dTdG9yZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sb2dTdG9yZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVnaW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZ2lvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiU2xzUGFyYW1ldGVyc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZVRhcmdldHMuU2xzUGFyYW1ldGVyc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgU2xzUGFyYW1ldGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZVRhcmdldHMuU2xzUGFyYW1ldGVyc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NFdmVudFJ1bGVUYXJnZXRzU2xzUGFyYW1ldGVyc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NFdmVudFJ1bGVUYXJnZXRzX1Nsc1BhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFByb2plY3Q6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvamVjdCksXG4gICAgICBMb2dTdG9yZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5sb2dTdG9yZSksXG4gICAgICBSZWdpb246IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVnaW9uKSxcbiAgICAgIElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlkKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0V2ZW50UnVsZVRhcmdldHMge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFdlYmhvb2tQYXJhbWV0ZXJzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlkOiBUaGUgdW5pcXVlIElEIG9mIHRoZSBIVFRQIGNhbGxiYWNrIG5vdGlmaWNhdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG1ldGhvZDogVGhlIHJlcXVlc3QgbWV0aG9kIG9mIHRoZSBIVFRQIGNhbGxiYWNrLiBWYWxpZCB2YWx1ZXM6IEdFVCBhbmQgUE9TVC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG1ldGhvZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwcm90b2NvbDogVGhlIG5hbWUgb2YgdGhlIHByb3RvY29sLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgcHJvdG9jb2w/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdXJsOiBUaGUgY2FsbGJhY2sgVVJMLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdXJsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgV2ViaG9va1BhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgV2ViaG9va1BhcmFtZXRlcnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NFdmVudFJ1bGVUYXJnZXRzX1dlYmhvb2tQYXJhbWV0ZXJzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWV0aG9kJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1ldGhvZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvdG9jb2wnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvdG9jb2wpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3VybCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy51cmwpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiV2ViaG9va1BhcmFtZXRlcnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpFdmVudFJ1bGVUYXJnZXRzLldlYmhvb2tQYXJhbWV0ZXJzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBXZWJob29rUGFyYW1ldGVyc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OkV2ZW50UnVsZVRhcmdldHMuV2ViaG9va1BhcmFtZXRlcnNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zRXZlbnRSdWxlVGFyZ2V0c1dlYmhvb2tQYXJhbWV0ZXJzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0V2ZW50UnVsZVRhcmdldHNfV2ViaG9va1BhcmFtZXRlcnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmlkKSxcbiAgICAgIE1ldGhvZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tZXRob2QpLFxuICAgICAgUHJvdG9jb2w6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvdG9jb2wpLFxuICAgICAgVXJsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnVybCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0dyb3VwTWV0cmljUnVsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjYXRlZ29yeTogVGhlIGFiYnJldmlhdGlvbiBvZiB0aGUgc2VydmljZSBuYW1lLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogRUNTIChpbmNsdWRpbmcgQWxpYmFiYSBDbG91ZCBhbmQgbm9uLUFsaWJhYmEgQ2xvdWQgaG9zdHMpXG4gICAgICogUkRTIChBcHNhcmFEQiBmb3IgUkRTKVxuICAgICAqIEFEUyAoQW5hbHl0aWNEQilcbiAgICAgKiBTTEIgKFNlcnZlciBMb2FkIEJhbGFuY2VyKVxuICAgICAqIFZQQyAoVmlydHVhbCBQcml2YXRlIENsb3VkKVxuICAgICAqIEFQSUdBVEVXQVkgKEFQSSBHYXRld2F5KVxuICAgICAqIENETlxuICAgICAqIENTIChDb250YWluZXIgU2VydmljZSBmb3IgU3dhcm0pXG4gICAgICogRENETiAoRHluYW1pYyBSb3V0ZSBmb3IgQ0ROKVxuICAgICAqIEREb1MgKGRpc3RyaWJ1dGVkIGRlbmlhbCBvZiBzZXJ2aWNlKVxuICAgICAqIEVJUCAoRWxhc3RpYyBJUClcbiAgICAgKiBFTEFTVElDU0VBUkNIIChFbGFzdGljc2VhcmNoKVxuICAgICAqIEVNUiAoRS1NYXBSZWR1Y2UpXG4gICAgICogRVNTIChBdXRvIFNjYWxpbmcpXG4gICAgICogSEJBU0UgKEFwc2FyYURCIGZvciBIQmFzZSlcbiAgICAgKiBJT1RfRURHRSAoSW9UIEVkZ2UpXG4gICAgICogSzhTX1BPRCAoazhzIHBvZClcbiAgICAgKiBLVlNUT1JFX1NIQVJESU5HIChBcHNhcmFEQiBmb3IgUmVkaXMgY2x1c3RlciB2ZXJzaW9uKVxuICAgICAqIEtWU1RPUkVfU1BMSVRSVyAoQXBzYXJhREIgZm9yIFJlZGlzIHJlYWQvd3JpdGUgc3BsaXR0aW5nIHZlcnNpb24pXG4gICAgICogS1ZTVE9SRV9TVEFOREFSRCAoQXBzYXJhREIgZm9yIFJlZGlzIHN0YW5kYXJkIHZlcnNpb24pXG4gICAgICogTUVNQ0FDSEUgKEFwc2FyYURCIGZvciBNZW1jYWNoZSlcbiAgICAgKiBNTlMgKE1lc3NhZ2UgU2VydmljZSlcbiAgICAgKiBNT05HT0RCIChBcHNhcmFEQiBmb3IgTW9uZ29EQiByZXBsaWNhIHNldCBpbnN0YW5jZXMpXG4gICAgICogTU9OR09EQl9DTFVTVEVSIChBcHNhcmFEQiBmb3IgTW9uZ29EQiBjbHVzdGVyIHZlcnNpb24pXG4gICAgICogTU9OR09EQl9TSEFSRElORyAoQXBzYXJhREIgZm9yIE1vbmdvREIgc2hhcmRlZCBjbHVzdGVycylcbiAgICAgKiBNUV9UT1BJQyAoTWVzc2FnZSBTZXJ2aWNlIHRvcGljKVxuICAgICAqIE9DUyAob3JpZ2luYWwgdmVyc2lvbiBvZiBBcHNhcmFEQiBmb3IgTWVtY2FjaGUpXG4gICAgICogT1BFTlNFQVJDSCAoT3BlbiBTZWFyY2gpXG4gICAgICogT1NTIChPYmplY3QgU3RvcmFnZSBTZXJ2aWNlKVxuICAgICAqIFBPTEFSREIgKEFwc2FyYURCIGZvciBQT0xBUkRCKVxuICAgICAqIFBFVEFEQVRBIChIeWJyaWREQiBmb3IgTXlTUUwpXG4gICAgICogU0NETiAoU2VjdXJlIENvbnRlbnQgRGVsaXZlcnkgTmV0d29yaylcbiAgICAgKiBTSEFSRUJBTkRXSURUSFBBQ0tBR0VTIChzaGFyZWQgYmFuZHdpZHRoIHBhY2thZ2UpXG4gICAgICogU0xTIChMb2cgU2VydmljZSlcbiAgICAgKiBWUE4gKFZQTiBHYXRld2F5KVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNhdGVnb3J5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZXNjYWxhdGlvbnM6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVzY2FsYXRpb25zOiBSb3NHcm91cE1ldHJpY1J1bGUuRXNjYWxhdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgSUQgb2YgYXBwbGljYXRpb24gZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG1ldHJpY05hbWU6IFRoZSBuYW1lIG9mIHRoZSBtZXRyaWMuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBjYWxsIERlc2NyaWJlTWV0cmljTWV0YUxpc3Qgb3Igc2VlIFByZXNldCBtZXRyaWNzIHJlZmVyZW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBtZXRyaWNOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZXNwYWNlOiBUaGUgZGF0YSBuYW1lc3BhY2Ugb2YgdGhlIHNlcnZpY2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBjYWxsIERlc2NyaWJlTWV0cmljTWV0YUxpc3RcbiAgICAgKiBvciBzZWUgUHJlc2V0IG1ldHJpY3MgcmVmZXJlbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bGVJZDogVGhlIElEIG9mIHRoZSBhbGVydCBydWxlLiBUaGUgSURzIG9mIGFsZXJ0IHJ1bGVzIGFyZSBnZW5lcmF0ZWQgYnkgY2FsbGVycyB0byBlbnN1cmVcbiAgICAgKiB1bmlxdWVuZXNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bGVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWxlcnQgcnVsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBydWxlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRpbWVuc2lvbnM6IFRoZSBleHBlbmRlZCByZXNvdXJjZSBkaW1lbnNpb25zLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRpbWVuc2lvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZWZmZWN0aXZlSW50ZXJ2YWw6IFRoZSBwZXJpb2Qgd2hlbiB0aGUgYWxlcnQgcnVsZSBpcyBlZmZlY3RpdmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZWZmZWN0aXZlSW50ZXJ2YWw/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZW1haWxTdWJqZWN0OiBUaGUgc3ViamVjdCBvZiB0aGUgYWxlcnQgbm90aWZpY2F0aW9uIGVtYWlsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVtYWlsU3ViamVjdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnRlcnZhbDogVGhlIGRldGVjdGlvbiBwZXJpb2Qgb2YgYWxlcnRzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVydmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5vRWZmZWN0aXZlSW50ZXJ2YWw6IFRoZSBwZXJpb2Qgd2hlbiB0aGUgYWxlcnQgcnVsZSBpcyBpbmVmZmVjdGl2ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBub0VmZmVjdGl2ZUludGVydmFsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHBlcmlvZDogVGhlIGFnZ3JlZ2F0aW9uIHBlcmlvZC4gVW5pdGU6IHNlY29uZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2lsZW5jZVRpbWU6IFRoZSBkdXJhdGlvbiBvZiB0aGUgbXV0ZSBwZXJpb2QgZHVyaW5nIHdoaWNoIG5ldyBhbGVydHMgYXJlIG5vdCBzZW50IGV2ZW4gaWYgdGhlIHRyaWdnZXJcbiAgICAgKiBjb25kaXRpb25zIGFyZSBtZXQuIFVuaXQ6IHNlY29uZC4gRGVmYXVsdCB2YWx1ZTogODY0MDAuIE1pbmltdW0gdmFsdWU6IDYwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNpbGVuY2VUaW1lPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHdlYmhvb2s6IFRoZSBVUkwgb2YgdGhlIGNhbGxiYWNrIHRyaWdnZXJlZCB3aGVuIGFuIGFsZXJ0IG9jY3Vycy5cbiAgICAgKi9cbiAgICByZWFkb25seSB3ZWJob29rPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0dyb3VwTWV0cmljUnVsZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NHcm91cE1ldHJpY1J1bGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcm91cE1ldHJpY1J1bGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25vRWZmZWN0aXZlSW50ZXJ2YWwnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubm9FZmZlY3RpdmVJbnRlcnZhbCkpO1xuICAgIGlmKHByb3BlcnRpZXMuc2lsZW5jZVRpbWUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnNpbGVuY2VUaW1lKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzaWxlbmNlVGltZScsIHJvcy52YWxpZGF0ZVJhbmdlKSh7XG4gICAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnNpbGVuY2VUaW1lLFxuICAgICAgICAgICAgbWluOiA2MCxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzaWxlbmNlVGltZScsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5zaWxlbmNlVGltZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2F0ZWdvcnknLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2F0ZWdvcnkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NhdGVnb3J5Jywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNhdGVnb3J5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVsZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucnVsZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkaW1lbnNpb25zJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRpbWVuc2lvbnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wZXJpb2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VmZmVjdGl2ZUludGVydmFsJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmVmZmVjdGl2ZUludGVydmFsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lc3BhY2UnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubmFtZXNwYWNlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lc3BhY2UnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMubmFtZXNwYWNlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWV0cmljTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5tZXRyaWNOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtZXRyaWNOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1ldHJpY05hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VzY2FsYXRpb25zJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmVzY2FsYXRpb25zKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlc2NhbGF0aW9ucycsIFJvc0dyb3VwTWV0cmljUnVsZV9Fc2NhbGF0aW9uc1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmVzY2FsYXRpb25zKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdlbWFpbFN1YmplY3QnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZW1haWxTdWJqZWN0KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3ZWJob29rJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLndlYmhvb2spKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGVOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJ1bGVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5ydWxlTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW50ZXJ2YWwnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuaW50ZXJ2YWwpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zR3JvdXBNZXRyaWNSdWxlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NHcm91cE1ldHJpY1J1bGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpHcm91cE1ldHJpY1J1bGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zR3JvdXBNZXRyaWNSdWxlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NHcm91cE1ldHJpY1J1bGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDYXRlZ29yeTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jYXRlZ29yeSksXG4gICAgICBFc2NhbGF0aW9uczogcm9zR3JvdXBNZXRyaWNSdWxlRXNjYWxhdGlvbnNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5lc2NhbGF0aW9ucyksXG4gICAgICBHcm91cElkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwSWQpLFxuICAgICAgTWV0cmljTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5tZXRyaWNOYW1lKSxcbiAgICAgIE5hbWVzcGFjZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5uYW1lc3BhY2UpLFxuICAgICAgUnVsZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJ1bGVJZCksXG4gICAgICBSdWxlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydWxlTmFtZSksXG4gICAgICBEaW1lbnNpb25zOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRpbWVuc2lvbnMpLFxuICAgICAgRWZmZWN0aXZlSW50ZXJ2YWw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZWZmZWN0aXZlSW50ZXJ2YWwpLFxuICAgICAgRW1haWxTdWJqZWN0OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmVtYWlsU3ViamVjdCksXG4gICAgICBJbnRlcnZhbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcnZhbCksXG4gICAgICBOb0VmZmVjdGl2ZUludGVydmFsOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5vRWZmZWN0aXZlSW50ZXJ2YWwpLFxuICAgICAgUGVyaW9kOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcmlvZCksXG4gICAgICBTaWxlbmNlVGltZTogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zaWxlbmNlVGltZSksXG4gICAgICBXZWJob29rOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndlYmhvb2spLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlYFxuICovXG5leHBvcnQgY2xhc3MgUm9zR3JvdXBNZXRyaWNSdWxlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDTVM6Okdyb3VwTWV0cmljUnVsZVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFJ1bGVJZDogUnVsZSBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJ1bGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2F0ZWdvcnk6IFRoZSBhYmJyZXZpYXRpb24gb2YgdGhlIHNlcnZpY2UgbmFtZS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEVDUyAoaW5jbHVkaW5nIEFsaWJhYmEgQ2xvdWQgYW5kIG5vbi1BbGliYWJhIENsb3VkIGhvc3RzKVxuICAgICAqIFJEUyAoQXBzYXJhREIgZm9yIFJEUylcbiAgICAgKiBBRFMgKEFuYWx5dGljREIpXG4gICAgICogU0xCIChTZXJ2ZXIgTG9hZCBCYWxhbmNlcilcbiAgICAgKiBWUEMgKFZpcnR1YWwgUHJpdmF0ZSBDbG91ZClcbiAgICAgKiBBUElHQVRFV0FZIChBUEkgR2F0ZXdheSlcbiAgICAgKiBDRE5cbiAgICAgKiBDUyAoQ29udGFpbmVyIFNlcnZpY2UgZm9yIFN3YXJtKVxuICAgICAqIERDRE4gKER5bmFtaWMgUm91dGUgZm9yIENETilcbiAgICAgKiBERG9TIChkaXN0cmlidXRlZCBkZW5pYWwgb2Ygc2VydmljZSlcbiAgICAgKiBFSVAgKEVsYXN0aWMgSVApXG4gICAgICogRUxBU1RJQ1NFQVJDSCAoRWxhc3RpY3NlYXJjaClcbiAgICAgKiBFTVIgKEUtTWFwUmVkdWNlKVxuICAgICAqIEVTUyAoQXV0byBTY2FsaW5nKVxuICAgICAqIEhCQVNFIChBcHNhcmFEQiBmb3IgSEJhc2UpXG4gICAgICogSU9UX0VER0UgKElvVCBFZGdlKVxuICAgICAqIEs4U19QT0QgKGs4cyBwb2QpXG4gICAgICogS1ZTVE9SRV9TSEFSRElORyAoQXBzYXJhREIgZm9yIFJlZGlzIGNsdXN0ZXIgdmVyc2lvbilcbiAgICAgKiBLVlNUT1JFX1NQTElUUlcgKEFwc2FyYURCIGZvciBSZWRpcyByZWFkL3dyaXRlIHNwbGl0dGluZyB2ZXJzaW9uKVxuICAgICAqIEtWU1RPUkVfU1RBTkRBUkQgKEFwc2FyYURCIGZvciBSZWRpcyBzdGFuZGFyZCB2ZXJzaW9uKVxuICAgICAqIE1FTUNBQ0hFIChBcHNhcmFEQiBmb3IgTWVtY2FjaGUpXG4gICAgICogTU5TIChNZXNzYWdlIFNlcnZpY2UpXG4gICAgICogTU9OR09EQiAoQXBzYXJhREIgZm9yIE1vbmdvREIgcmVwbGljYSBzZXQgaW5zdGFuY2VzKVxuICAgICAqIE1PTkdPREJfQ0xVU1RFUiAoQXBzYXJhREIgZm9yIE1vbmdvREIgY2x1c3RlciB2ZXJzaW9uKVxuICAgICAqIE1PTkdPREJfU0hBUkRJTkcgKEFwc2FyYURCIGZvciBNb25nb0RCIHNoYXJkZWQgY2x1c3RlcnMpXG4gICAgICogTVFfVE9QSUMgKE1lc3NhZ2UgU2VydmljZSB0b3BpYylcbiAgICAgKiBPQ1MgKG9yaWdpbmFsIHZlcnNpb24gb2YgQXBzYXJhREIgZm9yIE1lbWNhY2hlKVxuICAgICAqIE9QRU5TRUFSQ0ggKE9wZW4gU2VhcmNoKVxuICAgICAqIE9TUyAoT2JqZWN0IFN0b3JhZ2UgU2VydmljZSlcbiAgICAgKiBQT0xBUkRCIChBcHNhcmFEQiBmb3IgUE9MQVJEQilcbiAgICAgKiBQRVRBREFUQSAoSHlicmlkREIgZm9yIE15U1FMKVxuICAgICAqIFNDRE4gKFNlY3VyZSBDb250ZW50IERlbGl2ZXJ5IE5ldHdvcmspXG4gICAgICogU0hBUkVCQU5EV0lEVEhQQUNLQUdFUyAoc2hhcmVkIGJhbmR3aWR0aCBwYWNrYWdlKVxuICAgICAqIFNMUyAoTG9nIFNlcnZpY2UpXG4gICAgICogVlBOIChWUE4gR2F0ZXdheSlcbiAgICAgKi9cbiAgICBwdWJsaWMgY2F0ZWdvcnk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlc2NhbGF0aW9uczogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcHVibGljIGVzY2FsYXRpb25zOiBSb3NHcm91cE1ldHJpY1J1bGUuRXNjYWxhdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgSUQgb2YgYXBwbGljYXRpb24gZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtZXRyaWNOYW1lOiBUaGUgbmFtZSBvZiB0aGUgbWV0cmljLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgY2FsbCBEZXNjcmliZU1ldHJpY01ldGFMaXN0IG9yIHNlZSBQcmVzZXQgbWV0cmljcyByZWZlcmVuY2UuXG4gICAgICovXG4gICAgcHVibGljIG1ldHJpY05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lc3BhY2U6IFRoZSBkYXRhIG5hbWVzcGFjZSBvZiB0aGUgc2VydmljZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIGNhbGwgRGVzY3JpYmVNZXRyaWNNZXRhTGlzdFxuICAgICAqIG9yIHNlZSBQcmVzZXQgbWV0cmljcyByZWZlcmVuY2UuXG4gICAgICovXG4gICAgcHVibGljIG5hbWVzcGFjZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJ1bGVJZDogVGhlIElEIG9mIHRoZSBhbGVydCBydWxlLiBUaGUgSURzIG9mIGFsZXJ0IHJ1bGVzIGFyZSBnZW5lcmF0ZWQgYnkgY2FsbGVycyB0byBlbnN1cmVcbiAgICAgKiB1bmlxdWVuZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBydWxlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBydWxlTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIHJ1bGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGltZW5zaW9uczogVGhlIGV4cGVuZGVkIHJlc291cmNlIGRpbWVuc2lvbnMuXG4gICAgICovXG4gICAgcHVibGljIGRpbWVuc2lvbnM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlZmZlY3RpdmVJbnRlcnZhbDogVGhlIHBlcmlvZCB3aGVuIHRoZSBhbGVydCBydWxlIGlzIGVmZmVjdGl2ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgZWZmZWN0aXZlSW50ZXJ2YWw6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBlbWFpbFN1YmplY3Q6IFRoZSBzdWJqZWN0IG9mIHRoZSBhbGVydCBub3RpZmljYXRpb24gZW1haWwuXG4gICAgICovXG4gICAgcHVibGljIGVtYWlsU3ViamVjdDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVydmFsOiBUaGUgZGV0ZWN0aW9uIHBlcmlvZCBvZiBhbGVydHMuXG4gICAgICovXG4gICAgcHVibGljIGludGVydmFsOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbm9FZmZlY3RpdmVJbnRlcnZhbDogVGhlIHBlcmlvZCB3aGVuIHRoZSBhbGVydCBydWxlIGlzIGluZWZmZWN0aXZlLlxuICAgICAqL1xuICAgIHB1YmxpYyBub0VmZmVjdGl2ZUludGVydmFsOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBUaGUgYWdncmVnYXRpb24gcGVyaW9kLiBVbml0ZTogc2Vjb25kLlxuICAgICAqL1xuICAgIHB1YmxpYyBwZXJpb2Q6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBzaWxlbmNlVGltZTogVGhlIGR1cmF0aW9uIG9mIHRoZSBtdXRlIHBlcmlvZCBkdXJpbmcgd2hpY2ggbmV3IGFsZXJ0cyBhcmUgbm90IHNlbnQgZXZlbiBpZiB0aGUgdHJpZ2dlclxuICAgICAqIGNvbmRpdGlvbnMgYXJlIG1ldC4gVW5pdDogc2Vjb25kLiBEZWZhdWx0IHZhbHVlOiA4NjQwMC4gTWluaW11bSB2YWx1ZTogNjAuXG4gICAgICovXG4gICAgcHVibGljIHNpbGVuY2VUaW1lOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgd2ViaG9vazogVGhlIFVSTCBvZiB0aGUgY2FsbGJhY2sgdHJpZ2dlcmVkIHdoZW4gYW4gYWxlcnQgb2NjdXJzLlxuICAgICAqL1xuICAgIHB1YmxpYyB3ZWJob29rOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q01TOjpHcm91cE1ldHJpY1J1bGVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0dyb3VwTWV0cmljUnVsZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zR3JvdXBNZXRyaWNSdWxlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJSdWxlSWQgPSB0aGlzLmdldEF0dCgnUnVsZUlkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gcHJvcHMuY2F0ZWdvcnk7XG4gICAgICAgIHRoaXMuZXNjYWxhdGlvbnMgPSBwcm9wcy5lc2NhbGF0aW9ucztcbiAgICAgICAgdGhpcy5ncm91cElkID0gcHJvcHMuZ3JvdXBJZDtcbiAgICAgICAgdGhpcy5tZXRyaWNOYW1lID0gcHJvcHMubWV0cmljTmFtZTtcbiAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSBwcm9wcy5uYW1lc3BhY2U7XG4gICAgICAgIHRoaXMucnVsZUlkID0gcHJvcHMucnVsZUlkO1xuICAgICAgICB0aGlzLnJ1bGVOYW1lID0gcHJvcHMucnVsZU5hbWU7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHByb3BzLmRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMuZWZmZWN0aXZlSW50ZXJ2YWwgPSBwcm9wcy5lZmZlY3RpdmVJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5lbWFpbFN1YmplY3QgPSBwcm9wcy5lbWFpbFN1YmplY3Q7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBwcm9wcy5pbnRlcnZhbDtcbiAgICAgICAgdGhpcy5ub0VmZmVjdGl2ZUludGVydmFsID0gcHJvcHMubm9FZmZlY3RpdmVJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwcm9wcy5wZXJpb2Q7XG4gICAgICAgIHRoaXMuc2lsZW5jZVRpbWUgPSBwcm9wcy5zaWxlbmNlVGltZTtcbiAgICAgICAgdGhpcy53ZWJob29rID0gcHJvcHMud2ViaG9vaztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeSxcbiAgICAgICAgICAgIGVzY2FsYXRpb25zOiB0aGlzLmVzY2FsYXRpb25zLFxuICAgICAgICAgICAgZ3JvdXBJZDogdGhpcy5ncm91cElkLFxuICAgICAgICAgICAgbWV0cmljTmFtZTogdGhpcy5tZXRyaWNOYW1lLFxuICAgICAgICAgICAgbmFtZXNwYWNlOiB0aGlzLm5hbWVzcGFjZSxcbiAgICAgICAgICAgIHJ1bGVJZDogdGhpcy5ydWxlSWQsXG4gICAgICAgICAgICBydWxlTmFtZTogdGhpcy5ydWxlTmFtZSxcbiAgICAgICAgICAgIGRpbWVuc2lvbnM6IHRoaXMuZGltZW5zaW9ucyxcbiAgICAgICAgICAgIGVmZmVjdGl2ZUludGVydmFsOiB0aGlzLmVmZmVjdGl2ZUludGVydmFsLFxuICAgICAgICAgICAgZW1haWxTdWJqZWN0OiB0aGlzLmVtYWlsU3ViamVjdCxcbiAgICAgICAgICAgIGludGVydmFsOiB0aGlzLmludGVydmFsLFxuICAgICAgICAgICAgbm9FZmZlY3RpdmVJbnRlcnZhbDogdGhpcy5ub0VmZmVjdGl2ZUludGVydmFsLFxuICAgICAgICAgICAgcGVyaW9kOiB0aGlzLnBlcmlvZCxcbiAgICAgICAgICAgIHNpbGVuY2VUaW1lOiB0aGlzLnNpbGVuY2VUaW1lLFxuICAgICAgICAgICAgd2ViaG9vazogdGhpcy53ZWJob29rLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NHcm91cE1ldHJpY1J1bGVQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NHcm91cE1ldHJpY1J1bGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENyaXRpY2FsUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbXBhcmlzb25PcGVyYXRvcjogVGhlIGNvbXBhcmlzb24gb3BlcmF0b3Igb2YgdGhlIHRocmVzaG9sZCBmb3IgY3JpdGljYWwtbGV2ZWwgYWxlcnRzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogR3JlYXRlclRoYW5PckVxdWFsVG9UaHJlc2hvbGRcbiAgICAgKiBHcmVhdGVyVGhhblRocmVzaG9sZFxuICAgICAqIExlc3NUaGFuT3JFcXVhbFRvVGhyZXNob2xkXG4gICAgICogTGVzc1RoYW5UaHJlc2hvbGRcbiAgICAgKiBOb3RFcXVhbFRvVGhyZXNob2xkXG4gICAgICogR3JlYXRlclRoYW5ZZXN0ZXJkYXlcbiAgICAgKiBMZXNzVGhhblllc3RlcmRheVxuICAgICAqIEdyZWF0ZXJUaGFuTGFzdFdlZWtcbiAgICAgKiBMZXNzVGhhbkxhc3RXZWVrXG4gICAgICogR3JlYXRlclRoYW5MYXN0UGVyaW9kXG4gICAgICogTGVzc1RoYW5MYXN0UGVyaW9kXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21wYXJpc29uT3BlcmF0b3I6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lczogVGhlIGNvbnNlY3V0aXZlIG51bWJlciBvZiB0aW1lcyBmb3Igd2hpY2ggdGhlIG1ldHJpYyB2YWx1ZSBleGNlZWRzIHRoZSB0aHJlc2hvbGQgZm9yXG4gICAgICogY3JpdGljYWwtbGV2ZWwgYWxlcnRzIGJlZm9yZSBhbiBhbGVydCBpcyB0cmlnZ2VyZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lczogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXRpc3RpY3M6IFRoZSBzdGF0aXN0aWNhbCBtZXRob2QgZm9yIGNyaXRpY2FsLWxldmVsIGFsZXJ0cy4gVGhlIHN0YXRpc3RpY2FsIG1ldGhvZCB2YXJpZXMgd2l0aFxuICAgICAqIG1ldHJpYy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXRpc3RpY3M6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aHJlc2hvbGQ6IFRoZSB0aHJlc2hvbGQgZm9yIGNyaXRpY2FsLWxldmVsIGFsZXJ0cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRocmVzaG9sZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ3JpdGljYWxQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3JpdGljYWxQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcm91cE1ldHJpY1J1bGVfQ3JpdGljYWxQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBhcmlzb25PcGVyYXRvcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBhcmlzb25PcGVyYXRvcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRpbWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdGlzdGljcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdGF0aXN0aWNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0aXN0aWNzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RocmVzaG9sZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50aHJlc2hvbGQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aHJlc2hvbGQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiQ3JpdGljYWxQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpHcm91cE1ldHJpY1J1bGUuQ3JpdGljYWxgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYENyaXRpY2FsUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlLkNyaXRpY2FsYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0dyb3VwTWV0cmljUnVsZUNyaXRpY2FsUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0dyb3VwTWV0cmljUnVsZV9Dcml0aWNhbFByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgQ29tcGFyaXNvbk9wZXJhdG9yOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvciksXG4gICAgICBUaW1lczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lcyksXG4gICAgICBTdGF0aXN0aWNzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpLFxuICAgICAgVGhyZXNob2xkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRocmVzaG9sZCksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NHcm91cE1ldHJpY1J1bGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEVzY2FsYXRpb25zUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNyaXRpY2FsOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNyaXRpY2FsPzogUm9zR3JvdXBNZXRyaWNSdWxlLkNyaXRpY2FsUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5mbzogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmZvPzogUm9zR3JvdXBNZXRyaWNSdWxlLkluZm9Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB3YXJuOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHdhcm4/OiBSb3NHcm91cE1ldHJpY1J1bGUuV2FyblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRXNjYWxhdGlvbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXNjYWxhdGlvbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcm91cE1ldHJpY1J1bGVfRXNjYWxhdGlvbnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NyaXRpY2FsJywgUm9zR3JvdXBNZXRyaWNSdWxlX0NyaXRpY2FsUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuY3JpdGljYWwpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luZm8nLCBSb3NHcm91cE1ldHJpY1J1bGVfSW5mb1Byb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluZm8pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dhcm4nLCBSb3NHcm91cE1ldHJpY1J1bGVfV2FyblByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLndhcm4pKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiRXNjYWxhdGlvbnNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpHcm91cE1ldHJpY1J1bGUuRXNjYWxhdGlvbnNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEVzY2FsYXRpb25zUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlLkVzY2FsYXRpb25zYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0dyb3VwTWV0cmljUnVsZUVzY2FsYXRpb25zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0dyb3VwTWV0cmljUnVsZV9Fc2NhbGF0aW9uc1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgQ3JpdGljYWw6IHJvc0dyb3VwTWV0cmljUnVsZUNyaXRpY2FsUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY3JpdGljYWwpLFxuICAgICAgSW5mbzogcm9zR3JvdXBNZXRyaWNSdWxlSW5mb1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluZm8pLFxuICAgICAgV2Fybjogcm9zR3JvdXBNZXRyaWNSdWxlV2FyblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndhcm4pLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zR3JvdXBNZXRyaWNSdWxlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBJbmZvUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbXBhcmlzb25PcGVyYXRvcjogVGhlIGNvbXBhcmlzb24gb3BlcmF0b3Igb2YgdGhlIHRocmVzaG9sZCBmb3IgaW5mby1sZXZlbCBhbGVydHMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBHcmVhdGVyVGhhbk9yRXF1YWxUb1RocmVzaG9sZFxuICAgICAqIEdyZWF0ZXJUaGFuVGhyZXNob2xkXG4gICAgICogTGVzc1RoYW5PckVxdWFsVG9UaHJlc2hvbGRcbiAgICAgKiBMZXNzVGhhblRocmVzaG9sZFxuICAgICAqIE5vdEVxdWFsVG9UaHJlc2hvbGRcbiAgICAgKiBHcmVhdGVyVGhhblllc3RlcmRheVxuICAgICAqIExlc3NUaGFuWWVzdGVyZGF5XG4gICAgICogR3JlYXRlclRoYW5MYXN0V2Vla1xuICAgICAqIExlc3NUaGFuTGFzdFdlZWtcbiAgICAgKiBHcmVhdGVyVGhhbkxhc3RQZXJpb2RcbiAgICAgKiBMZXNzVGhhbkxhc3RQZXJpb2RcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNvbXBhcmlzb25PcGVyYXRvcjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHRpbWVzOiBUaGUgY29uc2VjdXRpdmUgbnVtYmVyIG9mIHRpbWVzIGZvciB3aGljaCB0aGUgbWV0cmljIHZhbHVlIGV4Y2VlZHMgdGhlIHRocmVzaG9sZCBmb3JcbiAgICAgKiBpbmZvLWxldmVsIGFsZXJ0cyBiZWZvcmUgYW4gYWxlcnQgaXMgdHJpZ2dlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGltZXM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGF0aXN0aWNzOiBUaGUgc3RhdGlzdGljYWwgbWV0aG9kIGZvciBpbmZvLWxldmVsIGFsZXJ0cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXRpc3RpY3M6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aHJlc2hvbGQ6IFRoZSB0aHJlc2hvbGQgZm9yIGluZm8tbGV2ZWwgYWxlcnRzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGhyZXNob2xkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBJbmZvUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluZm9Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NHcm91cE1ldHJpY1J1bGVfSW5mb1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGFyaXNvbk9wZXJhdG9yJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGFyaXNvbk9wZXJhdG9yJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGltZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0aXN0aWNzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRpc3RpY3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhdGlzdGljcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyZXNob2xkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRocmVzaG9sZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyZXNob2xkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRocmVzaG9sZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJJbmZvUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlLkluZm9gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluZm9Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpHcm91cE1ldHJpY1J1bGUuSW5mb2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NHcm91cE1ldHJpY1J1bGVJbmZvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc0dyb3VwTWV0cmljUnVsZV9JbmZvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBDb21wYXJpc29uT3BlcmF0b3I6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSxcbiAgICAgIFRpbWVzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVzKSxcbiAgICAgIFN0YXRpc3RpY3M6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhdGlzdGljcyksXG4gICAgICBUaHJlc2hvbGQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGhyZXNob2xkKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc0dyb3VwTWV0cmljUnVsZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgV2FyblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21wYXJpc29uT3BlcmF0b3I6IFRoZSBjb21wYXJpc29uIG9wZXJhdG9yIG9mIHRoZSB0aHJlc2hvbGQgZm9yIHdhcm4tbGV2ZWwgYWxlcnRzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogR3JlYXRlclRoYW5PckVxdWFsVG9UaHJlc2hvbGRcbiAgICAgKiBHcmVhdGVyVGhhblRocmVzaG9sZFxuICAgICAqIExlc3NUaGFuT3JFcXVhbFRvVGhyZXNob2xkXG4gICAgICogTGVzc1RoYW5UaHJlc2hvbGRcbiAgICAgKiBOb3RFcXVhbFRvVGhyZXNob2xkXG4gICAgICogR3JlYXRlclRoYW5ZZXN0ZXJkYXlcbiAgICAgKiBMZXNzVGhhblllc3RlcmRheVxuICAgICAqIEdyZWF0ZXJUaGFuTGFzdFdlZWtcbiAgICAgKiBMZXNzVGhhbkxhc3RXZWVrXG4gICAgICogR3JlYXRlclRoYW5MYXN0UGVyaW9kXG4gICAgICogTGVzc1RoYW5MYXN0UGVyaW9kXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21wYXJpc29uT3BlcmF0b3I6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lczogVGhlIGNvbnNlY3V0aXZlIG51bWJlciBvZiB0aW1lcyBmb3Igd2hpY2ggdGhlIG1ldHJpYyB2YWx1ZSBleGNlZWRzIHRoZSB0aHJlc2hvbGQgZm9yXG4gICAgICogd2Fybi1sZXZlbCBhbGVydHMgYmVmb3JlIGFuIGFsZXJ0IGlzIHRyaWdnZXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRpbWVzOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc3RhdGlzdGljczogVGhlIHN0YXRpc3RpY2FsIG1ldGhvZCBmb3Igd2Fybi1sZXZlbCBhbGVydHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0aXN0aWNzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGhyZXNob2xkOiBUaGUgdGhyZXNob2xkIGZvciB3YXJuLWxldmVsIGFsZXJ0cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRocmVzaG9sZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgV2FyblByb3BlcnR5YFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBXYXJuUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zR3JvdXBNZXRyaWNSdWxlX1dhcm5Qcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBhcmlzb25PcGVyYXRvcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBhcmlzb25PcGVyYXRvcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRpbWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lcycsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aW1lcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdGlzdGljcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5zdGF0aXN0aWNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0aXN0aWNzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RocmVzaG9sZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50aHJlc2hvbGQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RocmVzaG9sZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy50aHJlc2hvbGQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiV2FyblByb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Okdyb3VwTWV0cmljUnVsZS5XYXJuYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBXYXJuUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6R3JvdXBNZXRyaWNSdWxlLldhcm5gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zR3JvdXBNZXRyaWNSdWxlV2FyblByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NHcm91cE1ldHJpY1J1bGVfV2FyblByb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgQ29tcGFyaXNvbk9wZXJhdG9yOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvciksXG4gICAgICBUaW1lczogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aW1lcyksXG4gICAgICBTdGF0aXN0aWNzOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpLFxuICAgICAgVGhyZXNob2xkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRocmVzaG9sZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRhcmdldHNgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTWV0cmljUnVsZVRhcmdldHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVsZUlkOiBUaGUgSUQgb2YgdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVsZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFyZ2V0czogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFyZ2V0czogQXJyYXk8Um9zTWV0cmljUnVsZVRhcmdldHMuVGFyZ2V0c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NNZXRyaWNSdWxlVGFyZ2V0c1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNZXRyaWNSdWxlVGFyZ2V0c1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01ldHJpY1J1bGVUYXJnZXRzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlSWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVsZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdydWxlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucnVsZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXJnZXRzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhcmdldHMpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnRhcmdldHMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy50YXJnZXRzKSB8fCAodHlwZW9mIHByb3BlcnRpZXMudGFyZ2V0cykgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldHMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMudGFyZ2V0cy5sZW5ndGgsXG4gICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICBtYXg6IDUsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RhcmdldHMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NNZXRyaWNSdWxlVGFyZ2V0c19UYXJnZXRzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLnRhcmdldHMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTWV0cmljUnVsZVRhcmdldHNQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGFyZ2V0c2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTWV0cmljUnVsZVRhcmdldHNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGFyZ2V0c2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNZXRyaWNSdWxlVGFyZ2V0c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zTWV0cmljUnVsZVRhcmdldHNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBSdWxlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucnVsZUlkKSxcbiAgICAgIFRhcmdldHM6IHJvcy5saXN0TWFwcGVyKHJvc01ldHJpY1J1bGVUYXJnZXRzVGFyZ2V0c1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy50YXJnZXRzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUYXJnZXRzYFxuICovXG5leHBvcnQgY2xhc3MgUm9zTWV0cmljUnVsZVRhcmdldHMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNNUzo6TWV0cmljUnVsZVRhcmdldHNcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBcm5zOiBUaGUgQVJOIGxpc3Qgb2YgdGFyZ2V0c1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXJuczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBJZHM6IFRoZSBJRCBsaXN0IG9mIHRhcmdldHNcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcnVsZUlkOiBUaGUgSUQgb2YgdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIHJ1bGVJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhcmdldHM6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHB1YmxpYyB0YXJnZXRzOiBBcnJheTxSb3NNZXRyaWNSdWxlVGFyZ2V0cy5UYXJnZXRzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRhcmdldHNgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc01ldHJpY1J1bGVUYXJnZXRzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NNZXRyaWNSdWxlVGFyZ2V0cy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQXJucyA9IHRoaXMuZ2V0QXR0KCdBcm5zJyk7XG4gICAgICAgIHRoaXMuYXR0cklkcyA9IHRoaXMuZ2V0QXR0KCdJZHMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMucnVsZUlkID0gcHJvcHMucnVsZUlkO1xuICAgICAgICB0aGlzLnRhcmdldHMgPSBwcm9wcy50YXJnZXRzO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJ1bGVJZDogdGhpcy5ydWxlSWQsXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLnRhcmdldHMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc01ldHJpY1J1bGVUYXJnZXRzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zTWV0cmljUnVsZVRhcmdldHMge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIFRhcmdldHNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbGV2ZWw6IFRoZSBhbGVydCBsZXZlbCwgd2hpY2ggaXMgYSBKU09OIGFycmF5LiBGb3IgZXhhbXBsZTogW1wiSU5GT1wiLCBcIldBUk5cIiwgXCJDUklUSUNBTFwiXS4gVmFsaWQgdmFsdWVzOlxuICAgICAqIElORk9cbiAgICAgKiBXQVJOXG4gICAgICogQ1JJVElDQUxcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGxldmVsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlkOiBUaGUgSUQgb2YgdGhlIG1lc3NhZ2UgcmVzb3VyY2UuIFRoZSBJRCBtdXN0IGJlIHVuaXF1ZSBpbiB0aGUgYWxlcnQgcnVsZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgYXJuOiBUaGUgcmVzb3VyY2UgZGVzY3JpcHRpb24gaW4gdGhlIGZvcm1hdCBvZiBhY3M6e1NlcnZpY2UgbmFtZSBhYmJyZXZpYXRpb259OntyZWdpb25JZH06e3VzZXJJZH06L3tNZXNzYWdlIHJlc291cmNlIHR5cGV9L3tSZXNvdXJjZVxuICAgICAqIG5hbWV9L21lc3NhZ2UuIEV4YW1wbGU6IGFjczptbnM6Y24taGFuZ3pob3U6MTExOi9xdWV1ZXMvdGVzdC9tZXNzYWdlLlxuICAgICAqIHtTZXJ2aWNlIG5hbWUgYWJicmV2aWF0aW9ufTogdGhlIGFiYnJldmlhdGlvbiBvZiB0aGUgc2VydmljZSBuYW1lLiBTZXQgdGhpcyB2YWx1ZVxuICAgICAqIHRvIG1ucy5cbiAgICAgKiB7cmVnaW9uSWR9OiB0aGUgcmVnaW9uIElEIG9mIHRoZSBtZXNzYWdlIHF1ZXVlIG9yIHRvcGljLlxuICAgICAqIHt1c2VySWR9OiB0aGUgYWNjb3VudCBJRCBvZiB0aGUgdXNlci5cbiAgICAgKiB7TWVzc2FnZSByZXNvdXJjZSB0eXBlfTogdGhlIHR5cGUgb2YgdGhlIG1lc3NhZ2UgcmVzb3VyY2UuIFZhbGlkIHZhbHVlczogcXVldWVzIGFuZFxuICAgICAqIHRvcGljcy5cbiAgICAgKiB7UmVzb3VyY2UgbmFtZX06IHRoZSBuYW1lIG9mIGEgcXVldWUgaWYgdGhlIHJlc291cmNlIHR5cGUgaXMgcXVldWVzLCBvciB0aGUgbmFtZSBvZlxuICAgICAqIGEgdG9waWMgaWYgdGhlIHR5cGUgaXMgdG9waWNzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgYXJuOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBUYXJnZXRzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFRhcmdldHNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNZXRyaWNSdWxlVGFyZ2V0c19UYXJnZXRzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsZXZlbCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5sZXZlbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaWQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2lkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcm4nLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYXJuKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhcm4nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYXJuKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlRhcmdldHNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGFyZ2V0cy5UYXJnZXRzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBUYXJnZXRzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRhcmdldHMuVGFyZ2V0c2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNZXRyaWNSdWxlVGFyZ2V0c1RhcmdldHNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zTWV0cmljUnVsZVRhcmdldHNfVGFyZ2V0c1Byb3BlcnR5VmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICByZXR1cm4ge1xuICAgICAgTGV2ZWw6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubGV2ZWwpLFxuICAgICAgSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaWQpLFxuICAgICAgQXJuOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmFybiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc01ldHJpY1J1bGVUZW1wbGF0ZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWxlcnQgdGVtcGxhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsZXJ0VGVtcGxhdGVzOiBWYWxpZCB2YWx1ZXMgb2YgTjogMCB0byAyMDAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxlcnRUZW1wbGF0ZXM/OiBBcnJheTxSb3NNZXRyaWNSdWxlVGVtcGxhdGUuQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYWxlcnQgdGVtcGxhdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzdFZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIHRoZSBhbGVydCB0ZW1wbGF0ZS4gQ2FsbCBEZXNjcmliZU1ldHJpY1J1bGVUZW1wbGF0ZUxpc3Qgb3IgRGVzY3JpYmVNZXRyaWNSdWxlVGVtcGxhdGVBdHRyaWJ1dGVcbiAgICAgKiB0byBvYnRhaW4gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFsZXJ0IHRlbXBsYXRlcy4gVGhlIGNvbWJpbmF0aW9uIG9mIHZlcnNpb24gYW5kIElEXG4gICAgICogdW5pcXVlbHkgaWRlbnRpZmllcyBhbiBhbGVydCB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXN0VmVyc2lvbj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZUlkOiBUaGUgSUQgb2YgdGhlIGFsZXJ0IHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlSWQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTWV0cmljUnVsZVRlbXBsYXRlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc01ldHJpY1J1bGVUZW1wbGF0ZVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01ldHJpY1J1bGVUZW1wbGF0ZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGlmKHByb3BlcnRpZXMuYWxlcnRUZW1wbGF0ZXMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5hbGVydFRlbXBsYXRlcykgfHwgKHR5cGVvZiBwcm9wZXJ0aWVzLmFsZXJ0VGVtcGxhdGVzKSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWxlcnRUZW1wbGF0ZXMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuYWxlcnRUZW1wbGF0ZXMubGVuZ3RoLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAyMDAsXG4gICAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FsZXJ0VGVtcGxhdGVzJywgcm9zLmxpc3RWYWxpZGF0b3IoUm9zTWV0cmljUnVsZVRlbXBsYXRlX0FsZXJ0VGVtcGxhdGVzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmFsZXJ0VGVtcGxhdGVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVzdFZlcnNpb24nLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMucmVzdFZlcnNpb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RlbXBsYXRlSWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGVtcGxhdGVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTWV0cmljUnVsZVRlbXBsYXRlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNZXRyaWNSdWxlVGVtcGxhdGVQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGVtcGxhdGVgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTWV0cmljUnVsZVRlbXBsYXRlUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NNZXRyaWNSdWxlVGVtcGxhdGVQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgICAgQWxlcnRUZW1wbGF0ZXM6IHJvcy5saXN0TWFwcGVyKHJvc01ldHJpY1J1bGVUZW1wbGF0ZUFsZXJ0VGVtcGxhdGVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmFsZXJ0VGVtcGxhdGVzKSxcbiAgICAgIERlc2NyaXB0aW9uOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSxcbiAgICAgIFJlc3RWZXJzaW9uOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlc3RWZXJzaW9uKSxcbiAgICAgIFRlbXBsYXRlSWQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGVtcGxhdGVJZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGVtcGxhdGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NNZXRyaWNSdWxlVGVtcGxhdGUgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgSWQ6IEFsYXJtIHRlbXBsYXRlIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsZXJ0VGVtcGxhdGVzOiBWYWxpZCB2YWx1ZXMgb2YgTjogMCB0byAyMDAuXG4gICAgICovXG4gICAgcHVibGljIGFsZXJ0VGVtcGxhdGVzOiBBcnJheTxSb3NNZXRyaWNSdWxlVGVtcGxhdGUuQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYWxlcnQgdGVtcGxhdGUuXG4gICAgICovXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVzdFZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIHRoZSBhbGVydCB0ZW1wbGF0ZS4gQ2FsbCBEZXNjcmliZU1ldHJpY1J1bGVUZW1wbGF0ZUxpc3Qgb3IgRGVzY3JpYmVNZXRyaWNSdWxlVGVtcGxhdGVBdHRyaWJ1dGVcbiAgICAgKiB0byBvYnRhaW4gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFsZXJ0IHRlbXBsYXRlcy4gVGhlIGNvbWJpbmF0aW9uIG9mIHZlcnNpb24gYW5kIElEXG4gICAgICogdW5pcXVlbHkgaWRlbnRpZmllcyBhbiBhbGVydCB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzdFZlcnNpb246IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0ZW1wbGF0ZUlkOiBUaGUgSUQgb2YgdGhlIGFsZXJ0IHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyB0ZW1wbGF0ZUlkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGVtcGxhdGVgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc01ldHJpY1J1bGVUZW1wbGF0ZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTWV0cmljUnVsZVRlbXBsYXRlLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJJZCA9IHRoaXMuZ2V0QXR0KCdJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICAgICAgdGhpcy5hbGVydFRlbXBsYXRlcyA9IHByb3BzLmFsZXJ0VGVtcGxhdGVzO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucmVzdFZlcnNpb24gPSBwcm9wcy5yZXN0VmVyc2lvbjtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUlkID0gcHJvcHMudGVtcGxhdGVJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBhbGVydFRlbXBsYXRlczogdGhpcy5hbGVydFRlbXBsYXRlcyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVzdFZlcnNpb246IHRoaXMucmVzdFZlcnNpb24sXG4gICAgICAgICAgICB0ZW1wbGF0ZUlkOiB0aGlzLnRlbXBsYXRlSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc01ldHJpY1J1bGVUZW1wbGF0ZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc01ldHJpY1J1bGVUZW1wbGF0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgbWV0cmljTmFtZTogVGhlIG5hbWUgb2YgdGhlIG1ldHJpYy5cbiAgICAgKiBOb3RlIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgRGVzY3JpYmVNZXRyaWNNZXRhTGlzdCBvciBBcHBlbmRpeCAxOiBNZXRyaWNzLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgbWV0cmljTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNhdGVnb3J5OiBUaGUgYWJicmV2aWF0aW9uIG9mIHRoZSBzZXJ2aWNlIG5hbWUuVmFsdWUgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0bzpcbiAgICAgKiBlY3M6IEVsYXN0aWMgQ29tcHV0ZSBTZXJ2aWNlIChFQ1MpIGluc3RhbmNlcyBwcm92aWRlZCBieSBBbGliYWJhIENsb3VkIGFuZCBob3N0cyBub3RcbiAgICAgKiBwcm92aWRlZCBieSBBbGliYWJhIENsb3VkXG4gICAgICogcmRzOiBBcHNhcmFEQiBmb3IgUkRTXG4gICAgICogYWRzOiBBbmFseXRpY0RCXG4gICAgICogc2xiOiBTZXJ2ZXIgTG9hZCBCYWxhbmNlciAoU0xCKVxuICAgICAqIHZwYzogVmlydHVhbCBQcml2YXRlIENsb3VkIChWUEMpXG4gICAgICogYXBpZ2F0ZXdheTogQVBJIEdhdGV3YXlcbiAgICAgKiBjZG46IENETjogQWxpYmFiYSBDbG91ZCBDb250ZW50IERlbGl2ZXJ5IE5ldHdvcmsgKENETilcbiAgICAgKiBjczogQ29udGFpbmVyIFNlcnZpY2UgZm9yIFN3YXJtXG4gICAgICogZGNkbjogRHluYW1pYyBSb3V0ZSBmb3IgQ0ROXG4gICAgICogZGRvczogQW50aS1ERG9TIFByb1xuICAgICAqIGVpcDogRWxhc3RpYyBJUCBBZGRyZXNzIChFSVApXG4gICAgICogZWxhc3RpY3NlYXJjaDogRWxhc3RpY3NlYXJjaFxuICAgICAqIGVtcjogRS1NYXBSZWR1Y2VcbiAgICAgKiBlc3M6IEF1dG8gU2NhbGluZ1xuICAgICAqIGhiYXNlOiBBcHNhcmFEQiBmb3IgSGJhc2VcbiAgICAgKiBpb3RfZWRnZTogSW9UIEVkZ2VcbiAgICAgKiBrOHNfcG9kOiBwb2RzIGluIENvbnRhaW5lciBTZXJ2aWNlIGZvciBLdWJlcm5ldGVzXG4gICAgICoga3ZzdG9yZV9zaGFyZGluZzogQXBzYXJhREIgZm9yIFJlZGlzIG9mIHRoZSBjbHVzdGVyIGFyY2hpdGVjdHVyZVxuICAgICAqIGt2c3RvcmVfc3BsaXRydzogQXBzYXJhREIgZm9yIFJlZGlzIG9mIHRoZSByZWFkL3dyaXRlIHNwbGl0dGluZyBhcmNoaXRlY3R1cmVcbiAgICAgKiBrdnN0b3JlX3N0YW5kYXJkOiBBcHNhcmFEQiBmb3IgUmVkaXMgb2YgdGhlIHN0YW5kYXJkIGFyY2hpdGVjdHVyZVxuICAgICAqIG1lbWNhY2hlOiBBcHNhcmFEQiBmb3IgTWVtY2FjaGVcbiAgICAgKiBtbnM6IE1lc3NhZ2UgU2VydmljZSAoTU5TKVxuICAgICAqIG1vbmdvZGI6IEFwc2FyYURCIGZvciBNb25nb0RCIG9mIHRoZSByZXBsaWNhIHNldCBhcmNoaXRlY3R1cmVcbiAgICAgKiBtb25nb2RiX2NsdXN0ZXI6IEFwc2FyYURCIGZvciBNb25nb0RCIG9mIHRoZSBjbHVzdGVyIGFyY2hpdGVjdHVyZVxuICAgICAqIG1vbmdvZGJfc2hhcmRpbmc6IEFwc2FyYURCIGZvciBNb25nb0RCIG9mIHRoZSBzaGFyZGVkIGNsdXN0ZXIgYXJjaGl0ZWN0dXJlXG4gICAgICogbXFfdG9waWM6IE1OUyB0b3BpY3NcbiAgICAgKiBvY3M6IEFwc2FyYURCIGZvciBNZW1jYWNoZSBvZiBlYXJsaWVyIHZlcnNpb25zXG4gICAgICogb3BlbnNlYXJjaDogT3BlbiBTZWFyY2hcbiAgICAgKiBvc3M6IE9iamVjdCBTdG9yYWdlIFNlcnZpY2UgKE9TUylcbiAgICAgKiBwb2xhcmRiOiBQb2xhckRCXG4gICAgICogcGV0YWRhdGE6IEh5YnJpZERCIGZvciBNeVNRTFxuICAgICAqIHNjZG46IFNlY3VyZSBDb250ZW50IERlbGl2ZXJ5IE5ldHdvcmsgKFNDRE4pXG4gICAgICogc2hhcmViYW5kd2lkdGhwYWNrYWdlczogRUlQIEJhbmR3aWR0aCBQbGFuXG4gICAgICogc2xzOiBMb2cgU2VydmljZVxuICAgICAqIHZwbjogVlBOIEdhdGV3YXlcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGNhdGVnb3J5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgZXNjYWxhdGlvbnM6IHVuZGVmaW5lZFxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgZXNjYWxhdGlvbnM/OiBSb3NNZXRyaWNSdWxlVGVtcGxhdGUuRXNjYWxhdGlvbnNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBwZXJpb2Q6IFRoZSBhZ2dyZWdhdGlvbiBwZXJpb2Qgb2YgdGhlIG1vbml0b3JpbmcgZGF0YS4gVW5pdDogc2Vjb25kcy5cbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB0aGUgbG93ZXN0IGZyZXF1ZW5jeSBhdCB3aGljaCB0aGUgbWV0cmljIGlzIHBvbGxlZC4gVHlwaWNhbGx5LFxuICAgICAqIHlvdSBkbyBub3QgbmVlZCB0byBzcGVjaWZ5IHRoZSBhZ2dyZWdhdGlvbiBwZXJpb2QuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgd2ViaG9vazogVGhlIGNhbGxiYWNrIFVSTCB0byB3aGljaCBhIFBPU1QgcmVxdWVzdCBpcyBzZW50IHdoZW4gYW4gYWxlcnQgaXMgdHJpZ2dlcmVkIGJhc2VkXG4gICAgICogb24gdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB3ZWJob29rPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IG5hbWVzcGFjZTogVGhlIG5hbWVzcGFjZSBvZiB0aGUgc2VydmljZS4gXG4gICAgICogTm90ZSBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIERlc2NyaWJlTWV0cmljTWV0YUxpc3Qgb3IgQXBwZW5kaXggMTogTWV0cmljcy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJ1bGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYWxlcnQgcnVsZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHJ1bGVOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgc2VsZWN0b3I6IFRoZSBkaW1lbnNpb24gb2YgdGhlIGFsZXJ0LiBJdCBpcyBhbiBleHRlbmRlZCBmaWVsZC5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHNlbGVjdG9yPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNZXRyaWNSdWxlVGVtcGxhdGVfQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ21ldHJpY05hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMubWV0cmljTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbWV0cmljTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5tZXRyaWNOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjYXRlZ29yeScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jYXRlZ29yeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2F0ZWdvcnknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2F0ZWdvcnkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2VzY2FsYXRpb25zJywgUm9zTWV0cmljUnVsZVRlbXBsYXRlX0VzY2FsYXRpb25zUHJvcGVydHlWYWxpZGF0b3IpKHByb3BlcnRpZXMuZXNjYWxhdGlvbnMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3BlcmlvZCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5wZXJpb2QpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3dlYmhvb2snLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMud2ViaG9vaykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZXNwYWNlJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLm5hbWVzcGFjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZXNwYWNlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWVzcGFjZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncnVsZU5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMucnVsZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3J1bGVOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJ1bGVOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzZWxlY3RvcicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zZWxlY3RvcikpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJBbGVydFRlbXBsYXRlc1Byb3BlcnR5XCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUZW1wbGF0ZS5BbGVydFRlbXBsYXRlc2AgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGVtcGxhdGUuQWxlcnRUZW1wbGF0ZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTWV0cmljUnVsZVRlbXBsYXRlQWxlcnRUZW1wbGF0ZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55KTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgUm9zTWV0cmljUnVsZVRlbXBsYXRlX0FsZXJ0VGVtcGxhdGVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBNZXRyaWNOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1ldHJpY05hbWUpLFxuICAgICAgQ2F0ZWdvcnk6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2F0ZWdvcnkpLFxuICAgICAgRXNjYWxhdGlvbnM6IHJvc01ldHJpY1J1bGVUZW1wbGF0ZUVzY2FsYXRpb25zUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZXNjYWxhdGlvbnMpLFxuICAgICAgUGVyaW9kOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcmlvZCksXG4gICAgICBXZWJob29rOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLndlYmhvb2spLFxuICAgICAgTmFtZXNwYWNlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWVzcGFjZSksXG4gICAgICBSdWxlTmFtZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ydWxlTmFtZSksXG4gICAgICBTZWxlY3Rvcjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zZWxlY3RvciksXG4gICAgfTtcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NNZXRyaWNSdWxlVGVtcGxhdGUge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIENyaXRpY2FsUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNvbXBhcmlzb25PcGVyYXRvcjogVGhlIGNvbXBhcmlzb24gb3BlcmF0b3Igb2YgdGhlIHRocmVzaG9sZCBmb3IgYWxlcnRzLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogR3JlYXRlclRoYW5PckVxdWFsVG9UaHJlc2hvbGQ6IGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgdGhyZXNob2xkXG4gICAgICogR3JlYXRlclRoYW5UaHJlc2hvbGQ6IGdyZWF0ZXIgdGhhbiB0aGUgdGhyZXNob2xkXG4gICAgICogTGVzc1RoYW5PckVxdWFsVG9UaHJlc2hvbGQ6IGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgdGhyZXNob2xkXG4gICAgICogTGVzc1RoYW5UaHJlc2hvbGQ6IGxlc3MgdGhhbiB0aGUgdGhyZXNob2xkXG4gICAgICogTm90RXF1YWxUb1RocmVzaG9sZDogbm90IGVxdWFsIHRvIHRoZSB0aHJlc2hvbGRcbiAgICAgKiBHcmVhdGVyVGhhblllc3RlcmRheTogZ3JlYXRlciB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgYXQgdGhlIHNhbWUgdGltZSB5ZXN0ZXJkYXlcbiAgICAgKiBMZXNzVGhhblllc3RlcmRheTogbGVzcyB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgYXQgdGhlIHNhbWUgdGltZSB5ZXN0ZXJkYXlcbiAgICAgKiBHcmVhdGVyVGhhbkxhc3RXZWVrOiBncmVhdGVyIHRoYW4gdGhlIG1ldHJpYyB2YWx1ZSBhdCB0aGUgc2FtZSB0aW1lIGxhc3Qgd2Vla1xuICAgICAqIExlc3NUaGFuTGFzdFdlZWs6IGxlc3MgdGhhbiB0aGUgbWV0cmljIHZhbHVlIGF0IHRoZSBzYW1lIHRpbWUgbGFzdCB3ZWVrXG4gICAgICogR3JlYXRlclRoYW5MYXN0UGVyaW9kOiBncmVhdGVyIHRoYW4gdGhlIG1ldHJpYyB2YWx1ZSBpbiB0aGUgbGFzdCBtb25pdG9yaW5nIGN5Y2xlXG4gICAgICogTGVzc1RoYW5MYXN0UGVyaW9kOiBsZXNzIHRoYW4gdGhlIG1ldHJpYyB2YWx1ZSBpbiB0aGUgbGFzdCBtb25pdG9yaW5nIGN5Y2xlXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjb21wYXJpc29uT3BlcmF0b3I6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aW1lczogVGhlIGNvbnNlY3V0aXZlIG51bWJlciBvZiB0aW1lcyBmb3Igd2hpY2ggdGhlIG1ldHJpYyB2YWx1ZSBpcyBtZWFzdXJlZCBiZWZvcmUgYSBhbGVydCBpcyB0cmlnZ2VyZWQuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aW1lczogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHN0YXRpc3RpY3M6IFRoZSBzdGF0aXN0aWNhbCBtZXRob2QgZm9yIGFsZXJ0cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHN0YXRpc3RpY3M6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB0aHJlc2hvbGQ6IFRoZSB0aHJlc2hvbGQgZm9yIGFsZXJ0cy5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHRocmVzaG9sZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgQ3JpdGljYWxQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgQ3JpdGljYWxQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNZXRyaWNSdWxlVGVtcGxhdGVfQ3JpdGljYWxQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NvbXBhcmlzb25PcGVyYXRvcicsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvciAmJiAodHlwZW9mIHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21wYXJpc29uT3BlcmF0b3InLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiR3JlYXRlclRoYW5PckVxdWFsVG9UaHJlc2hvbGRcIixcIkdyZWF0ZXJUaGFuVGhyZXNob2xkXCIsXCJMZXNzVGhhbk9yRXF1YWxUb1RocmVzaG9sZFwiLFwiTGVzc1RoYW5UaHJlc2hvbGRcIixcIk5vdEVxdWFsVG9UaHJlc2hvbGRcIixcIkdyZWF0ZXJUaGFuWWVzdGVyZGF5XCIsXCJMZXNzVGhhblllc3RlcmRheVwiLFwiR3JlYXRlclRoYW5MYXN0V2Vla1wiLFwiTGVzc1RoYW5MYXN0V2Vla1wiLFwiR3JlYXRlclRoYW5MYXN0UGVyaW9kXCIsXCJMZXNzVGhhbkxhc3RQZXJpb2RcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21wYXJpc29uT3BlcmF0b3InLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aW1lcycsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy50aW1lcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZXMnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMudGltZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRpc3RpY3MnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuc3RhdGlzdGljcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignc3RhdGlzdGljcycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5zdGF0aXN0aWNzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aHJlc2hvbGQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGhyZXNob2xkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0aHJlc2hvbGQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudGhyZXNob2xkKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkNyaXRpY2FsUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlLkNyaXRpY2FsYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBDcml0aWNhbFByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUZW1wbGF0ZS5Dcml0aWNhbGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNZXRyaWNSdWxlVGVtcGxhdGVDcml0aWNhbFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NNZXRyaWNSdWxlVGVtcGxhdGVfQ3JpdGljYWxQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIENvbXBhcmlzb25PcGVyYXRvcjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IpLFxuICAgICAgVGltZXM6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGltZXMpLFxuICAgICAgU3RhdGlzdGljczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5zdGF0aXN0aWNzKSxcbiAgICAgIFRocmVzaG9sZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy50aHJlc2hvbGQpLFxuICAgIH07XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgUm9zTWV0cmljUnVsZVRlbXBsYXRlIHtcbiAgICAvKipcbiAgICAgKiBAc3RhYmlsaXR5IGV4dGVybmFsXG4gICAgICovXG4gICAgZXhwb3J0IGludGVyZmFjZSBFc2NhbGF0aW9uc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjcml0aWNhbDogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjcml0aWNhbDogUm9zTWV0cmljUnVsZVRlbXBsYXRlLkNyaXRpY2FsUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgaW5mbzogdW5kZWZpbmVkXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBpbmZvPzogUm9zTWV0cmljUnVsZVRlbXBsYXRlLkluZm9Qcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSB3YXJuOiB1bmRlZmluZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IHdhcm4/OiBSb3NNZXRyaWNSdWxlVGVtcGxhdGUuV2FyblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgRXNjYWxhdGlvbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgRXNjYWxhdGlvbnNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NNZXRyaWNSdWxlVGVtcGxhdGVfRXNjYWxhdGlvbnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NyaXRpY2FsJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNyaXRpY2FsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjcml0aWNhbCcsIFJvc01ldHJpY1J1bGVUZW1wbGF0ZV9Dcml0aWNhbFByb3BlcnR5VmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNyaXRpY2FsKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbmZvJywgUm9zTWV0cmljUnVsZVRlbXBsYXRlX0luZm9Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy5pbmZvKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd3YXJuJywgUm9zTWV0cmljUnVsZVRlbXBsYXRlX1dhcm5Qcm9wZXJ0eVZhbGlkYXRvcikocHJvcGVydGllcy53YXJuKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIkVzY2FsYXRpb25zUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlLkVzY2FsYXRpb25zYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBFc2NhbGF0aW9uc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Ok1ldHJpY1J1bGVUZW1wbGF0ZS5Fc2NhbGF0aW9uc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNZXRyaWNSdWxlVGVtcGxhdGVFc2NhbGF0aW9uc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NNZXRyaWNSdWxlVGVtcGxhdGVfRXNjYWxhdGlvbnNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIENyaXRpY2FsOiByb3NNZXRyaWNSdWxlVGVtcGxhdGVDcml0aWNhbFByb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNyaXRpY2FsKSxcbiAgICAgIEluZm86IHJvc01ldHJpY1J1bGVUZW1wbGF0ZUluZm9Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbmZvKSxcbiAgICAgIFdhcm46IHJvc01ldHJpY1J1bGVUZW1wbGF0ZVdhcm5Qcm9wZXJ0eVRvUm9zVGVtcGxhdGUocHJvcGVydGllcy53YXJuKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc01ldHJpY1J1bGVUZW1wbGF0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSW5mb1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21wYXJpc29uT3BlcmF0b3I6IFRoZSBjb21wYXJpc29uIG9wZXJhdG9yIG9mIHRoZSB0aHJlc2hvbGQgZm9yIGFsZXJ0cy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEdyZWF0ZXJUaGFuT3JFcXVhbFRvVGhyZXNob2xkOiBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHRocmVzaG9sZFxuICAgICAqIEdyZWF0ZXJUaGFuVGhyZXNob2xkOiBncmVhdGVyIHRoYW4gdGhlIHRocmVzaG9sZFxuICAgICAqIExlc3NUaGFuT3JFcXVhbFRvVGhyZXNob2xkOiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHRocmVzaG9sZFxuICAgICAqIExlc3NUaGFuVGhyZXNob2xkOiBsZXNzIHRoYW4gdGhlIHRocmVzaG9sZFxuICAgICAqIE5vdEVxdWFsVG9UaHJlc2hvbGQ6IG5vdCBlcXVhbCB0byB0aGUgdGhyZXNob2xkXG4gICAgICogR3JlYXRlclRoYW5ZZXN0ZXJkYXk6IGdyZWF0ZXIgdGhhbiB0aGUgbWV0cmljIHZhbHVlIGF0IHRoZSBzYW1lIHRpbWUgeWVzdGVyZGF5XG4gICAgICogTGVzc1RoYW5ZZXN0ZXJkYXk6IGxlc3MgdGhhbiB0aGUgbWV0cmljIHZhbHVlIGF0IHRoZSBzYW1lIHRpbWUgeWVzdGVyZGF5XG4gICAgICogR3JlYXRlclRoYW5MYXN0V2VlazogZ3JlYXRlciB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgYXQgdGhlIHNhbWUgdGltZSBsYXN0IHdlZWtcbiAgICAgKiBMZXNzVGhhbkxhc3RXZWVrOiBsZXNzIHRoYW4gdGhlIG1ldHJpYyB2YWx1ZSBhdCB0aGUgc2FtZSB0aW1lIGxhc3Qgd2Vla1xuICAgICAqIEdyZWF0ZXJUaGFuTGFzdFBlcmlvZDogZ3JlYXRlciB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgaW4gdGhlIGxhc3QgbW9uaXRvcmluZyBjeWNsZVxuICAgICAqIExlc3NUaGFuTGFzdFBlcmlvZDogbGVzcyB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgaW4gdGhlIGxhc3QgbW9uaXRvcmluZyBjeWNsZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29tcGFyaXNvbk9wZXJhdG9yOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGltZXM6IFRoZSBjb25zZWN1dGl2ZSBudW1iZXIgb2YgdGltZXMgZm9yIHdoaWNoIHRoZSBtZXRyaWMgdmFsdWUgaXMgbWVhc3VyZWQgYmVmb3JlIGEgYWxlcnQgaXMgdHJpZ2dlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGltZXM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGF0aXN0aWNzOiBUaGUgc3RhdGlzdGljYWwgbWV0aG9kIGZvciBhbGVydHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0aXN0aWNzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGhyZXNob2xkOiBUaGUgdGhyZXNob2xkIGZvciBhbGVydHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aHJlc2hvbGQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYEluZm9Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSW5mb1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01ldHJpY1J1bGVUZW1wbGF0ZV9JbmZvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21wYXJpc29uT3BlcmF0b3InLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSk7XG4gICAgaWYocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvcikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGFyaXNvbk9wZXJhdG9yJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkdyZWF0ZXJUaGFuT3JFcXVhbFRvVGhyZXNob2xkXCIsXCJHcmVhdGVyVGhhblRocmVzaG9sZFwiLFwiTGVzc1RoYW5PckVxdWFsVG9UaHJlc2hvbGRcIixcIkxlc3NUaGFuVGhyZXNob2xkXCIsXCJOb3RFcXVhbFRvVGhyZXNob2xkXCIsXCJHcmVhdGVyVGhhblllc3RlcmRheVwiLFwiTGVzc1RoYW5ZZXN0ZXJkYXlcIixcIkdyZWF0ZXJUaGFuTGFzdFdlZWtcIixcIkxlc3NUaGFuTGFzdFdlZWtcIixcIkdyZWF0ZXJUaGFuTGFzdFBlcmlvZFwiLFwiTGVzc1RoYW5MYXN0UGVyaW9kXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGFyaXNvbk9wZXJhdG9yJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGltZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0aXN0aWNzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRpc3RpY3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhdGlzdGljcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyZXNob2xkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRocmVzaG9sZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyZXNob2xkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRocmVzaG9sZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJJbmZvUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlLkluZm9gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluZm9Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGVtcGxhdGUuSW5mb2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNZXRyaWNSdWxlVGVtcGxhdGVJbmZvUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc01ldHJpY1J1bGVUZW1wbGF0ZV9JbmZvUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBDb21wYXJpc29uT3BlcmF0b3I6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSxcbiAgICAgIFRpbWVzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVzKSxcbiAgICAgIFN0YXRpc3RpY3M6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhdGlzdGljcyksXG4gICAgICBUaHJlc2hvbGQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGhyZXNob2xkKSxcbiAgICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIFJvc01ldHJpY1J1bGVUZW1wbGF0ZSB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgV2FyblByb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBjb21wYXJpc29uT3BlcmF0b3I6IFRoZSBjb21wYXJpc29uIG9wZXJhdG9yIG9mIHRoZSB0aHJlc2hvbGQgZm9yIGFsZXJ0cy4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEdyZWF0ZXJUaGFuT3JFcXVhbFRvVGhyZXNob2xkOiBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHRocmVzaG9sZFxuICAgICAqIEdyZWF0ZXJUaGFuVGhyZXNob2xkOiBncmVhdGVyIHRoYW4gdGhlIHRocmVzaG9sZFxuICAgICAqIExlc3NUaGFuT3JFcXVhbFRvVGhyZXNob2xkOiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHRocmVzaG9sZFxuICAgICAqIExlc3NUaGFuVGhyZXNob2xkOiBsZXNzIHRoYW4gdGhlIHRocmVzaG9sZFxuICAgICAqIE5vdEVxdWFsVG9UaHJlc2hvbGQ6IG5vdCBlcXVhbCB0byB0aGUgdGhyZXNob2xkXG4gICAgICogR3JlYXRlclRoYW5ZZXN0ZXJkYXk6IGdyZWF0ZXIgdGhhbiB0aGUgbWV0cmljIHZhbHVlIGF0IHRoZSBzYW1lIHRpbWUgeWVzdGVyZGF5XG4gICAgICogTGVzc1RoYW5ZZXN0ZXJkYXk6IGxlc3MgdGhhbiB0aGUgbWV0cmljIHZhbHVlIGF0IHRoZSBzYW1lIHRpbWUgeWVzdGVyZGF5XG4gICAgICogR3JlYXRlclRoYW5MYXN0V2VlazogZ3JlYXRlciB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgYXQgdGhlIHNhbWUgdGltZSBsYXN0IHdlZWtcbiAgICAgKiBMZXNzVGhhbkxhc3RXZWVrOiBsZXNzIHRoYW4gdGhlIG1ldHJpYyB2YWx1ZSBhdCB0aGUgc2FtZSB0aW1lIGxhc3Qgd2Vla1xuICAgICAqIEdyZWF0ZXJUaGFuTGFzdFBlcmlvZDogZ3JlYXRlciB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgaW4gdGhlIGxhc3QgbW9uaXRvcmluZyBjeWNsZVxuICAgICAqIExlc3NUaGFuTGFzdFBlcmlvZDogbGVzcyB0aGFuIHRoZSBtZXRyaWMgdmFsdWUgaW4gdGhlIGxhc3QgbW9uaXRvcmluZyBjeWNsZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY29tcGFyaXNvbk9wZXJhdG9yOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGltZXM6IFRoZSBjb25zZWN1dGl2ZSBudW1iZXIgb2YgdGltZXMgZm9yIHdoaWNoIHRoZSBtZXRyaWMgdmFsdWUgaXMgbWVhc3VyZWQgYmVmb3JlIGEgYWxlcnQgaXMgdHJpZ2dlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgdGltZXM6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBzdGF0aXN0aWNzOiBUaGUgc3RhdGlzdGljYWwgbWV0aG9kIGZvciBhbGVydHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBzdGF0aXN0aWNzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAUHJvcGVydHkgdGhyZXNob2xkOiBUaGUgdGhyZXNob2xkIGZvciBhbGVydHMuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSB0aHJlc2hvbGQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFdhcm5Qcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgV2FyblByb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01ldHJpY1J1bGVUZW1wbGF0ZV9XYXJuUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb21wYXJpc29uT3BlcmF0b3InLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSk7XG4gICAgaWYocHJvcGVydGllcy5jb21wYXJpc29uT3BlcmF0b3IgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvcikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGFyaXNvbk9wZXJhdG9yJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkdyZWF0ZXJUaGFuT3JFcXVhbFRvVGhyZXNob2xkXCIsXCJHcmVhdGVyVGhhblRocmVzaG9sZFwiLFwiTGVzc1RoYW5PckVxdWFsVG9UaHJlc2hvbGRcIixcIkxlc3NUaGFuVGhyZXNob2xkXCIsXCJOb3RFcXVhbFRvVGhyZXNob2xkXCIsXCJHcmVhdGVyVGhhblllc3RlcmRheVwiLFwiTGVzc1RoYW5ZZXN0ZXJkYXlcIixcIkdyZWF0ZXJUaGFuTGFzdFdlZWtcIixcIkxlc3NUaGFuTGFzdFdlZWtcIixcIkdyZWF0ZXJUaGFuTGFzdFBlcmlvZFwiLFwiTGVzc1RoYW5MYXN0UGVyaW9kXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY29tcGFyaXNvbk9wZXJhdG9yJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbXBhcmlzb25PcGVyYXRvcikpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGltZXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGltZXMpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3RpbWVzJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnRpbWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzdGF0aXN0aWNzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnN0YXRpc3RpY3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3N0YXRpc3RpY3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc3RhdGlzdGljcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyZXNob2xkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRocmVzaG9sZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGhyZXNob2xkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRocmVzaG9sZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJXYXJuUHJvcGVydHlcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TWV0cmljUnVsZVRlbXBsYXRlLldhcm5gIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFdhcm5Qcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNZXRyaWNSdWxlVGVtcGxhdGUuV2FybmAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNZXRyaWNSdWxlVGVtcGxhdGVXYXJuUHJvcGVydHlUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSk6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIFJvc01ldHJpY1J1bGVUZW1wbGF0ZV9XYXJuUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBDb21wYXJpc29uT3BlcmF0b3I6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29tcGFyaXNvbk9wZXJhdG9yKSxcbiAgICAgIFRpbWVzOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRpbWVzKSxcbiAgICAgIFN0YXRpc3RpY3M6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuc3RhdGlzdGljcyksXG4gICAgICBUaHJlc2hvbGQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudGhyZXNob2xkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q01TOjpNb25pdG9yR3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTW9uaXRvckdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdyb3VwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRhY3RHcm91cHM6IFRoZSBhbGVydCBjb250YWN0IGdyb3VwLiBBbGVydCBub3RpZmljYXRpb25zIGZvciB0aGUgYXBwbGljYXRpb24gZ3JvdXAgYXJlIHNlbnQgdG9cbiAgICAgKiB0aGUgc3BlY2lmaWVkIGFsZXJ0IGNvbnRhY3QgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFjdEdyb3Vwcz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NNb25pdG9yR3JvdXBQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTW9uaXRvckdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTW9uaXRvckdyb3VwUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjb250YWN0R3JvdXBzJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNvbnRhY3RHcm91cHMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTW9uaXRvckdyb3VwUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TW9uaXRvckdyb3VwYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNb25pdG9yR3JvdXBQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNb25pdG9yR3JvdXBgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTW9uaXRvckdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NNb25pdG9yR3JvdXBQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBHcm91cE5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ3JvdXBOYW1lKSxcbiAgICAgIENvbnRhY3RHcm91cHM6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY29udGFjdEdyb3VwcyksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Q01TOjpNb25pdG9yR3JvdXBgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NNb25pdG9yR3JvdXAgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNNUzo6TW9uaXRvckdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgR3JvdXBJZDogQXBwbGljYXRpb24gZ3JvdXAgSUQgZ2VuZXJhdGVkIGFmdGVyIHRoZSBncm91cCBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYXBwbGljYXRpb24gZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNvbnRhY3RHcm91cHM6IFRoZSBhbGVydCBjb250YWN0IGdyb3VwLiBBbGVydCBub3RpZmljYXRpb25zIGZvciB0aGUgYXBwbGljYXRpb24gZ3JvdXAgYXJlIHNlbnQgdG9cbiAgICAgKiB0aGUgc3BlY2lmaWVkIGFsZXJ0IGNvbnRhY3QgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIGNvbnRhY3RHcm91cHM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDTVM6Ok1vbml0b3JHcm91cGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zTW9uaXRvckdyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NNb25pdG9yR3JvdXAuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwSWQgPSB0aGlzLmdldEF0dCgnR3JvdXBJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5ncm91cE5hbWUgPSBwcm9wcy5ncm91cE5hbWU7XG4gICAgICAgIHRoaXMuY29udGFjdEdyb3VwcyA9IHByb3BzLmNvbnRhY3RHcm91cHM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ3JvdXBOYW1lOiB0aGlzLmdyb3VwTmFtZSxcbiAgICAgICAgICAgIGNvbnRhY3RHcm91cHM6IHRoaXMuY29udGFjdEdyb3VwcyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zTW9uaXRvckdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDTVM6Ok1vbml0b3JHcm91cEluc3RhbmNlc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIElEIG9mIHRoZSBhcHBsaWNhdGlvbiBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cElkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgaW5zdGFuY2VzOlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlczogQXJyYXk8Um9zTW9uaXRvckdyb3VwSW5zdGFuY2VzLkluc3RhbmNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTW9uaXRvckdyb3VwSW5zdGFuY2VzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTW9uaXRvckdyb3VwSW5zdGFuY2VzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZXMnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaW5zdGFuY2VzKSk7XG4gICAgaWYocHJvcGVydGllcy5pbnN0YW5jZXMgJiYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllcy5pbnN0YW5jZXMpIHx8ICh0eXBlb2YgcHJvcGVydGllcy5pbnN0YW5jZXMpID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZXMnLCByb3MudmFsaWRhdGVMZW5ndGgpKHtcbiAgICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMuaW5zdGFuY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZXMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNfSW5zdGFuY2VzUHJvcGVydHlWYWxpZGF0b3IpKShwcm9wZXJ0aWVzLmluc3RhbmNlcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTW9uaXRvckdyb3VwSW5zdGFuY2VzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6TW9uaXRvckdyb3VwSW5zdGFuY2VzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNb25pdG9yR3JvdXBJbnN0YW5jZXNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zTW9uaXRvckdyb3VwSW5zdGFuY2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBHcm91cElkOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwSWQpLFxuICAgICAgSW5zdGFuY2VzOiByb3MubGlzdE1hcHBlcihyb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNJbnN0YW5jZXNQcm9wZXJ0eVRvUm9zVGVtcGxhdGUpKHByb3BlcnRpZXMuaW5zdGFuY2VzKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpDTVM6Ok1vbml0b3JHcm91cEluc3RhbmNlc2BcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc01vbml0b3JHcm91cEluc3RhbmNlcyBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q01TOjpNb25pdG9yR3JvdXBJbnN0YW5jZXNcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHcm91cElkOiBUaGUgSUQgb2YgdGhlIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogVGhlIElEIG9mIHRoZSBhcHBsaWNhdGlvbiBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBJZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlczpcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5zdGFuY2VzOiBBcnJheTxSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXMuSW5zdGFuY2VzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNNUzo6TW9uaXRvckdyb3VwSW5zdGFuY2VzYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc01vbml0b3JHcm91cEluc3RhbmNlcy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBJZCA9IHRoaXMuZ2V0QXR0KCdHcm91cElkJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmdyb3VwSWQgPSBwcm9wcy5ncm91cElkO1xuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IHByb3BzLmluc3RhbmNlcztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBncm91cElkOiB0aGlzLmdyb3VwSWQsXG4gICAgICAgICAgICBpbnN0YW5jZXM6IHRoaXMuaW5zdGFuY2VzLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXMge1xuICAgIC8qKlxuICAgICAqIEBzdGFiaWxpdHkgZXh0ZXJuYWxcbiAgICAgKi9cbiAgICBleHBvcnQgaW50ZXJmYWNlIEluc3RhbmNlc1Byb3BlcnR5IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGluc3RhbmNlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNhdGVnb3J5OiBUaGUgYWJicmV2aWF0aW9uIG9mIHRoZSBzZXJ2aWNlIG5hbWUuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBFQ1MgKGluY2x1ZGluZyBBbGliYWJhIENsb3VkIGFuZCBub24tQWxpYmFiYSBDbG91ZCBob3N0cylcbiAgICAgKiBSRFMgKEFwc2FyYURCIGZvciBSRFMpXG4gICAgICogQURTIChBbmFseXRpY0RCKVxuICAgICAqIFNMQiAoU2VydmVyIExvYWQgQmFsYW5jZXIpXG4gICAgICogVlBDIChWaXJ0dWFsIFByaXZhdGUgQ2xvdWQpXG4gICAgICogQVBJR0FURVdBWSAoQVBJIEdhdGV3YXkpXG4gICAgICogQ0ROXG4gICAgICogQ1MgKENvbnRhaW5lciBTZXJ2aWNlIGZvciBTd2FybSlcbiAgICAgKiBEQ0ROIChEeW5hbWljIFJvdXRlIGZvciBDRE4gKVxuICAgICAqIEREb1MgKGRpc3RyaWJ1dGVkIGRlbmlhbCBvZiBzZXJ2aWNlKVxuICAgICAqIEVJUCAoRWxhc3RpYyBJUClcbiAgICAgKiBFTEFTVElDU0VBUkNIIChFbGFzdGljc2VhcmNoKVxuICAgICAqIEVNUiAoRS1NYXBSZWR1Y2UpXG4gICAgICogRVNTIChBdXRvIFNjYWxpbmcpXG4gICAgICogSEJBU0UgKEFwc2FyYURCIGZvciBIQmFzZSlcbiAgICAgKiBJT1RfRURHRSAoSW9UIEVkZ2UpXG4gICAgICogSzhTX1BPRCAoazhzIHBvZCApXG4gICAgICogS1ZTVE9SRV9TSEFSRElORyAoQXBzYXJhREIgZm9yIFJlZGlzIGNsdXN0ZXIgdmVyc2lvbilcbiAgICAgKiBLVlNUT1JFX1NQTElUUlcgKEFwc2FyYURCIGZvciBSZWRpcyByZWFkL3dyaXRlIHNwbGl0dGluZyB2ZXJzaW9uKVxuICAgICAqIEtWU1RPUkVfU1RBTkRBUkQgKEFwc2FyYURCIGZvciBSZWRpcyBzdGFuZGFyZCB2ZXJzaW9uKVxuICAgICAqIE1FTUNBQ0hFIChBcHNhcmFEQiBmb3IgTWVtY2FjaGUpXG4gICAgICogTU5TIChNZXNzYWdlIFNlcnZpY2UpXG4gICAgICogTU9OR09EQiAoQXBzYXJhREIgZm9yIE1vbmdvREIgcmVwbGljYSBzZXQgaW5zdGFuY2VzKVxuICAgICAqIE1PTkdPREJfQ0xVU1RFUiAoQXBzYXJhREIgZm9yIE1vbmdvREIgY2x1c3RlciB2ZXJzaW9uKVxuICAgICAqIE1PTkdPREJfU0hBUkRJTkcgKEFwc2FyYURCIGZvciBNb25nb0RCIHNoYXJkZWQgY2x1c3RlcnMpXG4gICAgICogTVFfVE9QSUMgKE1lc3NhZ2UgU2VydmljZSB0b3BpYylcbiAgICAgKiBPQ1MgKG9sZCB2ZXJzaW9uIEFwc2FyYURCIGZvciBNZW1jYWNoZSlcbiAgICAgKiBPUEVOU0VBUkNIIChPcGVuIFNlYXJjaClcbiAgICAgKiBPU1MgKE9iamVjdCBTdG9yYWdlIFNlcnZpY2UpXG4gICAgICogUE9MQVJEQiAoQXBzYXJhREIgZm9yIFBPTEFSREIpXG4gICAgICogUEVUQURBVEEgKEh5YnJpZERCIGZvciBNeVNRTClcbiAgICAgKiBTQ0ROIChTZWN1cmUgQ29udGVudCBEZWxpdmVyeSBOZXR3b3JrKVxuICAgICAqIFNIQVJFQkFORFdJRFRIUEFDS0FHRVMgKHNoYXJlZCBiYW5kd2lkdGggcGFja2FnZSlcbiAgICAgKiBTTFMgKExvZyBTZXJ2aWNlKVxuICAgICAqIFZQTiAoVlBOIEdhdGV3YXkgKVxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgY2F0ZWdvcnk6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGluc3RhbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IHJlZ2lvbklkOiBUaGUgSUQgb2YgdGhlIHJlZ2lvbiB3aGVyZSB0aGUgaW5zdGFuY2UgaXMgZGVwbG95ZWQsIHN1Y2ggYXMgY24taGFuZ3pob3UuXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSByZWdpb25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgSW5zdGFuY2VzUHJvcGVydHlgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYEluc3RhbmNlc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01vbml0b3JHcm91cEluc3RhbmNlc19JbnN0YW5jZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlTmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5pbnN0YW5jZU5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NhdGVnb3J5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNhdGVnb3J5KSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjYXRlZ29yeScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jYXRlZ29yeSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignaW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5pbnN0YW5jZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZ2lvbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnJlZ2lvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWdpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWdpb25JZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJJbnN0YW5jZXNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNb25pdG9yR3JvdXBJbnN0YW5jZXMuSW5zdGFuY2VzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBJbnN0YW5jZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNb25pdG9yR3JvdXBJbnN0YW5jZXMuSW5zdGFuY2VzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc01vbml0b3JHcm91cEluc3RhbmNlc0luc3RhbmNlc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NNb25pdG9yR3JvdXBJbnN0YW5jZXNfSW5zdGFuY2VzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIHJldHVybiB7XG4gICAgICBJbnN0YW5jZU5hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VOYW1lKSxcbiAgICAgIENhdGVnb3J5OiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNhdGVnb3J5KSxcbiAgICAgIEluc3RhbmNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuaW5zdGFuY2VJZCksXG4gICAgICBSZWdpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWdpb25JZCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNNUzo6TW9uaXRvcmluZ0FnZW50UHJvY2Vzc2BcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NNb25pdG9yaW5nQWdlbnRQcm9jZXNzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2Nlc3NOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcHJvY2Vzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcm9jZXNzTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcm9jZXNzVXNlcjogVGhlIHVzZXIgd2hvIGxhdW5jaGVkIHRoZSBwcm9jZXNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2Nlc3NVc2VyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc01vbml0b3JpbmdBZ2VudFByb2Nlc3NQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTW9uaXRvcmluZ0FnZW50UHJvY2Vzc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01vbml0b3JpbmdBZ2VudFByb2Nlc3NQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Byb2Nlc3NOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByb2Nlc3NOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnN0YW5jZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2luc3RhbmNlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJvY2Vzc1VzZXInLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucHJvY2Vzc1VzZXIpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTW9uaXRvcmluZ0FnZW50UHJvY2Vzc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6Ok1vbml0b3JpbmdBZ2VudFByb2Nlc3NgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc01vbml0b3JpbmdBZ2VudFByb2Nlc3NQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpNb25pdG9yaW5nQWdlbnRQcm9jZXNzYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc01vbml0b3JpbmdBZ2VudFByb2Nlc3NQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc01vbml0b3JpbmdBZ2VudFByb2Nlc3NQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBJbnN0YW5jZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmluc3RhbmNlSWQpLFxuICAgICAgUHJvY2Vzc05hbWU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvY2Vzc05hbWUpLFxuICAgICAgUHJvY2Vzc1VzZXI6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJvY2Vzc1VzZXIpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkNNUzo6TW9uaXRvcmluZ0FnZW50UHJvY2Vzc2BcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc01vbml0b3JpbmdBZ2VudFByb2Nlc3MgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNNUzo6TW9uaXRvcmluZ0FnZW50UHJvY2Vzc1wiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIElkOiBUaGUgcHJvY2VzcyBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcHJvY2Vzc05hbWU6IFRoZSBuYW1lIG9mIHRoZSBwcm9jZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcm9jZXNzTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHByb2Nlc3NVc2VyOiBUaGUgdXNlciB3aG8gbGF1bmNoZWQgdGhlIHByb2Nlc3MuXG4gICAgICovXG4gICAgcHVibGljIHByb2Nlc3NVc2VyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q01TOjpNb25pdG9yaW5nQWdlbnRQcm9jZXNzYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NNb25pdG9yaW5nQWdlbnRQcm9jZXNzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NNb25pdG9yaW5nQWdlbnRQcm9jZXNzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJJZCA9IHRoaXMuZ2V0QXR0KCdJZCcpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUlkID0gcHJvcHMuaW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5wcm9jZXNzTmFtZSA9IHByb3BzLnByb2Nlc3NOYW1lO1xuICAgICAgICB0aGlzLnByb2Nlc3NVc2VyID0gcHJvcHMucHJvY2Vzc1VzZXI7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5zdGFuY2VJZDogdGhpcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgcHJvY2Vzc05hbWU6IHRoaXMucHJvY2Vzc05hbWUsXG4gICAgICAgICAgICBwcm9jZXNzVXNlcjogdGhpcy5wcm9jZXNzVXNlcixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zTW9uaXRvcmluZ0FnZW50UHJvY2Vzc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q01TOjpTaXRlTW9uaXRvcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NTaXRlTW9uaXRvclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGRyZXNzOiBUaGUgVVJMIG9yIElQIGFkZHJlc3MgbW9uaXRvcmVkIGJ5IHRoZSBtb25pdG9yaW5nIHRhc2suXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWRkcmVzczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHRhc2tOYW1lOiBUaGUgbmFtZSBvZiB0aGUgc2l0ZSBtb25pdG9yaW5nIHRhc2suIFRoZSBuYW1lIG11c3QgYmUgNCB0byAxMDAgY2hhcmFjdGVycyBpbiBsZW5ndGguXG4gICAgICogSXQgY2FuIGNvbnRhaW4gbGV0dGVycywgZGlnaXRzLCBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhc2tOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgdGFza1R5cGU6IFRoZSBwcm90b2NvbCB1c2VkIGJ5IHRoZSBzaXRlIG1vbml0b3JpbmcgdGFzay4gVmFsaWQgdmFsdWVzOiBIVFRQLCBIVFRQUywgUElORywgVENQLFxuICAgICAqIFVEUCwgRE5TLCBTTVRQLCBQT1AzLCBhbmQgRlRQLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhc2tUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWxlcnRJZHM6XG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxlcnRJZHM/OiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVydmFsOiBUaGUgaW50ZXJ2YWwgYXQgd2hpY2ggZGV0ZWN0aW9uIHJlcXVlc3RzIGFyZSBzZW50LiBWYWxpZCB2YWx1ZXM6IDEsIDUsIGFuZCAxNS4gVW5pdDpcbiAgICAgKiBtaW51dGVzLiBEZWZhdWx0IHZhbHVlOiAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVydmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzcENpdGllczogVGhlIGluZm9ybWF0aW9uIGFib3V0IGRldGVjdGlvbiBwb2ludHMsIHdoaWNoIGlzIHNwZWNpZmllZCBpbiBhIEpTT04gYXJyYXkuIEV4YW1wbGU6XG4gICAgICogW3tcImNpdHlcIjpcIjU0NlwiLFwiaXNwXCI6XCI0NjVcIn0se1wiY2l0eVwiOlwiNTcyXCIsXCJpc3BcIjpcIjQ2NVwifSx7XCJjaXR5XCI6XCI3MzhcIixcImlzcFwiOlwiNDY1XCJ9XS4gVGhlIHRocmVlIGNpdHkgY29kZXMgcmVwcmVzZW50IEJlaWppbmcsIEhhbmd6aG91LCBhbmQgUWluZ2Rhby5cbiAgICAgKiBOb3RlIFlvdSBjYW4gY2FsbCB0aGUgRGVzY3JpYmVTaXRlTW9uaXRvcklTUENpdHlMaXN0IEFQSSBvcGVyYXRpb24gdG8gcXVlcnkgdGhlIGRldGVjdGlvblxuICAgICAqIHBvaW50cyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBzaXRlIG1vbml0b3JpbmcgdGFza3MuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbiAgICAgKiBEZXNjcmliZVNpdGVNb25pdG9ySVNQQ2l0eUxpc3QgLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgc3lzdGVtIHJhbmRvbWx5IHNlbGVjdHMgdGhyZWUgZGV0ZWN0aW9uXG4gICAgICogcG9pbnRzIGZvciBzaXRlIG1vbml0b3JpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNwQ2l0aWVzPzogQXJyYXk8Um9zU2l0ZU1vbml0b3IuSXNwQ2l0aWVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9wdGlvbnNKc29uOiBUaGUgZXh0ZW5kZWQgb3B0aW9ucyBvZiB0aGUgcHJvdG9jb2wgdGhhdCBpcyB1c2VkIGJ5IHRoZSBzaXRlIG1vbml0b3JpbmcgdGFzay4gVGhlXG4gICAgICogb3B0aW9ucyB2YXJ5IGJhc2VkIG9uIHRoZSBwcm90b2NvbC5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHRpb25zSnNvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTaXRlTW9uaXRvclByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NTaXRlTW9uaXRvclByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc1NpdGVNb25pdG9yUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhZGRyZXNzJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmFkZHJlc3MpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2FkZHJlc3MnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuYWRkcmVzcykpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3B0aW9uc0pzb24nLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMub3B0aW9uc0pzb24pKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Rhc2tOYW1lJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLnRhc2tOYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCd0YXNrTmFtZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy50YXNrTmFtZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigndGFza1R5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMudGFza1R5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3Rhc2tUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnRhc2tUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc3BDaXRpZXMnLCByb3MubGlzdFZhbGlkYXRvcihSb3NTaXRlTW9uaXRvcl9Jc3BDaXRpZXNQcm9wZXJ0eVZhbGlkYXRvcikpKHByb3BlcnRpZXMuaXNwQ2l0aWVzKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpbnRlcnZhbCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5pbnRlcnZhbCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWxlcnRJZHMnLCByb3MubGlzdFZhbGlkYXRvcihyb3MudmFsaWRhdGVTdHJpbmcpKShwcm9wZXJ0aWVzLmFsZXJ0SWRzKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1NpdGVNb25pdG9yUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6U2l0ZU1vbml0b3JgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1NpdGVNb25pdG9yUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNNUzo6U2l0ZU1vbml0b3JgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2l0ZU1vbml0b3JQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc1NpdGVNb25pdG9yUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgQWRkcmVzczogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hZGRyZXNzKSxcbiAgICAgIFRhc2tOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhc2tOYW1lKSxcbiAgICAgIFRhc2tUeXBlOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnRhc2tUeXBlKSxcbiAgICAgIEFsZXJ0SWRzOiByb3MubGlzdE1hcHBlcihyb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZSkocHJvcGVydGllcy5hbGVydElkcyksXG4gICAgICBJbnRlcnZhbDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pbnRlcnZhbCksXG4gICAgICBJc3BDaXRpZXM6IHJvcy5saXN0TWFwcGVyKHJvc1NpdGVNb25pdG9ySXNwQ2l0aWVzUHJvcGVydHlUb1Jvc1RlbXBsYXRlKShwcm9wZXJ0aWVzLmlzcENpdGllcyksXG4gICAgICBPcHRpb25zSnNvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcHRpb25zSnNvbiksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBBIFJPUyB0ZW1wbGF0ZSB0eXBlOiAgYEFMSVlVTjo6Q01TOjpTaXRlTW9uaXRvcmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1NpdGVNb25pdG9yIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDTVM6OlNpdGVNb25pdG9yXCI7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVGFza0lkOiBUaGUgSUQgb2YgdGhlIHNpdGUgbW9uaXRvcmluZyB0YXNrLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFza0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhZGRyZXNzOiBUaGUgVVJMIG9yIElQIGFkZHJlc3MgbW9uaXRvcmVkIGJ5IHRoZSBtb25pdG9yaW5nIHRhc2suXG4gICAgICovXG4gICAgcHVibGljIGFkZHJlc3M6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXNrTmFtZTogVGhlIG5hbWUgb2YgdGhlIHNpdGUgbW9uaXRvcmluZyB0YXNrLiBUaGUgbmFtZSBtdXN0IGJlIDQgdG8gMTAwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoLlxuICAgICAqIEl0IGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgYW5kIHVuZGVyc2NvcmVzIChfKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFza05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0YXNrVHlwZTogVGhlIHByb3RvY29sIHVzZWQgYnkgdGhlIHNpdGUgbW9uaXRvcmluZyB0YXNrLiBWYWxpZCB2YWx1ZXM6IEhUVFAsIEhUVFBTLCBQSU5HLCBUQ1AsXG4gICAgICogVURQLCBETlMsIFNNVFAsIFBPUDMsIGFuZCBGVFAuXG4gICAgICovXG4gICAgcHVibGljIHRhc2tUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWxlcnRJZHM6XG4gICAgICovXG4gICAgcHVibGljIGFsZXJ0SWRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGludGVydmFsOiBUaGUgaW50ZXJ2YWwgYXQgd2hpY2ggZGV0ZWN0aW9uIHJlcXVlc3RzIGFyZSBzZW50LiBWYWxpZCB2YWx1ZXM6IDEsIDUsIGFuZCAxNS4gVW5pdDpcbiAgICAgKiBtaW51dGVzLiBEZWZhdWx0IHZhbHVlOiAxLlxuICAgICAqL1xuICAgIHB1YmxpYyBpbnRlcnZhbDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGlzcENpdGllczogVGhlIGluZm9ybWF0aW9uIGFib3V0IGRldGVjdGlvbiBwb2ludHMsIHdoaWNoIGlzIHNwZWNpZmllZCBpbiBhIEpTT04gYXJyYXkuIEV4YW1wbGU6XG4gICAgICogW3tcImNpdHlcIjpcIjU0NlwiLFwiaXNwXCI6XCI0NjVcIn0se1wiY2l0eVwiOlwiNTcyXCIsXCJpc3BcIjpcIjQ2NVwifSx7XCJjaXR5XCI6XCI3MzhcIixcImlzcFwiOlwiNDY1XCJ9XS4gVGhlIHRocmVlIGNpdHkgY29kZXMgcmVwcmVzZW50IEJlaWppbmcsIEhhbmd6aG91LCBhbmQgUWluZ2Rhby5cbiAgICAgKiBOb3RlIFlvdSBjYW4gY2FsbCB0aGUgRGVzY3JpYmVTaXRlTW9uaXRvcklTUENpdHlMaXN0IEFQSSBvcGVyYXRpb24gdG8gcXVlcnkgdGhlIGRldGVjdGlvblxuICAgICAqIHBvaW50cyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBzaXRlIG1vbml0b3JpbmcgdGFza3MuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbiAgICAgKiBEZXNjcmliZVNpdGVNb25pdG9ySVNQQ2l0eUxpc3QgLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBub3Qgc3BlY2lmaWVkLCB0aGUgc3lzdGVtIHJhbmRvbWx5IHNlbGVjdHMgdGhyZWUgZGV0ZWN0aW9uXG4gICAgICogcG9pbnRzIGZvciBzaXRlIG1vbml0b3JpbmcuXG4gICAgICovXG4gICAgcHVibGljIGlzcENpdGllczogQXJyYXk8Um9zU2l0ZU1vbml0b3IuSXNwQ2l0aWVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9wdGlvbnNKc29uOiBUaGUgZXh0ZW5kZWQgb3B0aW9ucyBvZiB0aGUgcHJvdG9jb2wgdGhhdCBpcyB1c2VkIGJ5IHRoZSBzaXRlIG1vbml0b3JpbmcgdGFzay4gVGhlXG4gICAgICogb3B0aW9ucyB2YXJ5IGJhc2VkIG9uIHRoZSBwcm90b2NvbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgb3B0aW9uc0pzb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDTVM6OlNpdGVNb25pdG9yYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NTaXRlTW9uaXRvclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU2l0ZU1vbml0b3IuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0clRhc2tJZCA9IHRoaXMuZ2V0QXR0KCdUYXNrSWQnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuYWRkcmVzcyA9IHByb3BzLmFkZHJlc3M7XG4gICAgICAgIHRoaXMudGFza05hbWUgPSBwcm9wcy50YXNrTmFtZTtcbiAgICAgICAgdGhpcy50YXNrVHlwZSA9IHByb3BzLnRhc2tUeXBlO1xuICAgICAgICB0aGlzLmFsZXJ0SWRzID0gcHJvcHMuYWxlcnRJZHM7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBwcm9wcy5pbnRlcnZhbDtcbiAgICAgICAgdGhpcy5pc3BDaXRpZXMgPSBwcm9wcy5pc3BDaXRpZXM7XG4gICAgICAgIHRoaXMub3B0aW9uc0pzb24gPSBwcm9wcy5vcHRpb25zSnNvbjtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiB0aGlzLmFkZHJlc3MsXG4gICAgICAgICAgICB0YXNrTmFtZTogdGhpcy50YXNrTmFtZSxcbiAgICAgICAgICAgIHRhc2tUeXBlOiB0aGlzLnRhc2tUeXBlLFxuICAgICAgICAgICAgYWxlcnRJZHM6IHRoaXMuYWxlcnRJZHMsXG4gICAgICAgICAgICBpbnRlcnZhbDogdGhpcy5pbnRlcnZhbCxcbiAgICAgICAgICAgIGlzcENpdGllczogdGhpcy5pc3BDaXRpZXMsXG4gICAgICAgICAgICBvcHRpb25zSnNvbjogdGhpcy5vcHRpb25zSnNvbixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zU2l0ZU1vbml0b3JQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBSb3NTaXRlTW9uaXRvciB7XG4gICAgLyoqXG4gICAgICogQHN0YWJpbGl0eSBleHRlcm5hbFxuICAgICAqL1xuICAgIGV4cG9ydCBpbnRlcmZhY2UgSXNwQ2l0aWVzUHJvcGVydHkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGlzcDpcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5IGlzcDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQFByb3BlcnR5IGNpdHk6XG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seSBjaXR5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG4gICAgfVxufVxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBJc3BDaXRpZXNQcm9wZXJ0eWBcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgSXNwQ2l0aWVzUHJvcGVydHlgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2l0ZU1vbml0b3JfSXNwQ2l0aWVzUHJvcGVydHlWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc3AnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuaXNwKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdpc3AnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuaXNwKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjaXR5Jywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNpdHkpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NpdHknLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2l0eSkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJJc3BDaXRpZXNQcm9wZXJ0eVwiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q01TOjpTaXRlTW9uaXRvci5Jc3BDaXRpZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYElzcENpdGllc1Byb3BlcnR5YFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDTVM6OlNpdGVNb25pdG9yLklzcENpdGllc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NTaXRlTW9uaXRvcklzcENpdGllc1Byb3BlcnR5VG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnkpOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBSb3NTaXRlTW9uaXRvcl9Jc3BDaXRpZXNQcm9wZXJ0eVZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIElzcDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5pc3ApLFxuICAgICAgQ2l0eTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jaXR5KSxcbiAgICB9O1xufVxuIl19