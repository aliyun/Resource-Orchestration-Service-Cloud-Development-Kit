// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAddonRelease`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
 */
export interface RosAddonReleaseProps {

    /**
     * @Property addonVersion: The version of the add-on.
     */
    readonly addonVersion: string | ros.IResolvable;

    /**
     * @Property environmentId: The id of the environment.
     */
    readonly environmentId: string | ros.IResolvable;

    /**
     * @Property name: The name of the add-on.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
     */
    readonly releaseName?: string | ros.IResolvable;

    /**
     * @Property values: The metadata.
     */
    readonly values?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAddonReleaseProps`
 *
 * @param properties - the TypeScript properties of a `RosAddonReleaseProps`
 *
 * @returns the result of the validation.
 */
function RosAddonReleasePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('environmentId', ros.requiredValidator)(properties.environmentId));
    errors.collect(ros.propertyValidator('environmentId', ros.validateString)(properties.environmentId));
    errors.collect(ros.propertyValidator('addonVersion', ros.requiredValidator)(properties.addonVersion));
    errors.collect(ros.propertyValidator('addonVersion', ros.validateString)(properties.addonVersion));
    errors.collect(ros.propertyValidator('values', ros.hashValidator(ros.validateAny))(properties.values));
    errors.collect(ros.propertyValidator('releaseName', ros.validateString)(properties.releaseName));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosAddonReleaseProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AddonRelease` resource
 *
 * @param properties - the TypeScript properties of a `RosAddonReleaseProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AddonRelease` resource.
 */
// @ts-ignore TS6133
function rosAddonReleasePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAddonReleasePropsValidator(properties).assertSuccess();
    }
    return {
      'AddonVersion': ros.stringToRosTemplate(properties.addonVersion),
      'EnvironmentId': ros.stringToRosTemplate(properties.environmentId),
      'Name': ros.stringToRosTemplate(properties.name),
      'ReleaseName': ros.stringToRosTemplate(properties.releaseName),
      'Values': ros.hashMapper(ros.objectToRosTemplate)(properties.values),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::AddonRelease`, which is used to install an add-on release.
 * @Note This class does not contain additional functions, so it is recommended to use the `AddonRelease` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
 */
export class RosAddonRelease extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AddonRelease";

    /**
     * @Attribute Config: AddonRelease configuration information.
     */
    public readonly attrConfig: ros.IResolvable;

    /**
     * @Attribute EnvironmentId: The environment ID.
     */
    public readonly attrEnvironmentId: ros.IResolvable;

    /**
     * @Attribute Release: Release information.
     */
    public readonly attrRelease: ros.IResolvable;

    /**
     * @Attribute ReleaseName: The name of the add-on.
     */
    public readonly attrReleaseName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addonVersion: The version of the add-on.
     */
    public addonVersion: string | ros.IResolvable;

    /**
     * @Property environmentId: The id of the environment.
     */
    public environmentId: string | ros.IResolvable;

    /**
     * @Property name: The name of the add-on.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
     */
    public releaseName: string | ros.IResolvable | undefined;

    /**
     * @Property values: The metadata.
     */
    public values: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAddonReleaseProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAddonRelease.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfig = this.getAtt('Config');
        this.attrEnvironmentId = this.getAtt('EnvironmentId');
        this.attrRelease = this.getAtt('Release');
        this.attrReleaseName = this.getAtt('ReleaseName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addonVersion = props.addonVersion;
        this.environmentId = props.environmentId;
        this.name = props.name;
        this.releaseName = props.releaseName;
        this.values = props.values;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addonVersion: this.addonVersion,
            environmentId: this.environmentId,
            name: this.name,
            releaseName: this.releaseName,
            values: this.values,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAddonReleasePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAlertContact`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
 */
export interface RosAlertContactProps {

    /**
     * @Property contactName: The name of the alert contact that you want to create.
     */
    readonly contactName: string | ros.IResolvable;

    /**
     * @Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
     */
    readonly dingRobotWebhookUrl?: string | ros.IResolvable;

    /**
     * @Property email: The email address of the contact.
     */
    readonly email?: string | ros.IResolvable;

    /**
     * @Property phoneNum: The phone number of the contact.
     */
    readonly phoneNum?: string | ros.IResolvable;

    /**
     * @Property proxyUserId: Internal parameters
     */
    readonly proxyUserId?: string | ros.IResolvable;

    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    readonly regionId?: string | ros.IResolvable;

    /**
     * @Property systemNoc: Specifies whether to receive system alerts.
     */
    readonly systemNoc?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAlertContactProps`
 *
 * @param properties - the TypeScript properties of a `RosAlertContactProps`
 *
 * @returns the result of the validation.
 */
function RosAlertContactPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('proxyUserId', ros.validateString)(properties.proxyUserId));
    errors.collect(ros.propertyValidator('email', ros.validateString)(properties.email));
    errors.collect(ros.propertyValidator('dingRobotWebhookUrl', ros.validateString)(properties.dingRobotWebhookUrl));
    errors.collect(ros.propertyValidator('phoneNum', ros.validateString)(properties.phoneNum));
    if(properties.regionId && (typeof properties.regionId) !== 'object') {
        errors.collect(ros.propertyValidator('regionId', ros.validateAllowedValues)({
          data: properties.regionId,
          allowedValues: ["cn-qingdao","cn-beijing","cn-shanghai","cn-hangzhou","cn-shenzhen","cn-hongkong","ap-southeast-1"],
        }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('systemNoc', ros.validateBoolean)(properties.systemNoc));
    errors.collect(ros.propertyValidator('contactName', ros.requiredValidator)(properties.contactName));
    errors.collect(ros.propertyValidator('contactName', ros.validateString)(properties.contactName));
    return errors.wrap('supplied properties not correct for "RosAlertContactProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AlertContact` resource
 *
 * @param properties - the TypeScript properties of a `RosAlertContactProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AlertContact` resource.
 */
// @ts-ignore TS6133
function rosAlertContactPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAlertContactPropsValidator(properties).assertSuccess();
    }
    return {
      'ContactName': ros.stringToRosTemplate(properties.contactName),
      'DingRobotWebhookUrl': ros.stringToRosTemplate(properties.dingRobotWebhookUrl),
      'Email': ros.stringToRosTemplate(properties.email),
      'PhoneNum': ros.stringToRosTemplate(properties.phoneNum),
      'ProxyUserId': ros.stringToRosTemplate(properties.proxyUserId),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
      'SystemNoc': ros.booleanToRosTemplate(properties.systemNoc),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::AlertContact`, which is used to create an alert contact.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlertContact` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
 */
export class RosAlertContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContact";

    /**
     * @Attribute ContactId: The ID of the alert contact that you created.
     */
    public readonly attrContactId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property contactName: The name of the alert contact that you want to create.
     */
    public contactName: string | ros.IResolvable;

    /**
     * @Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
     */
    public dingRobotWebhookUrl: string | ros.IResolvable | undefined;

    /**
     * @Property email: The email address of the contact.
     */
    public email: string | ros.IResolvable | undefined;

    /**
     * @Property phoneNum: The phone number of the contact.
     */
    public phoneNum: string | ros.IResolvable | undefined;

    /**
     * @Property proxyUserId: Internal parameters
     */
    public proxyUserId: string | ros.IResolvable | undefined;

    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    public regionId: string | ros.IResolvable | undefined;

    /**
     * @Property systemNoc: Specifies whether to receive system alerts.
     */
    public systemNoc: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlertContactProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAlertContact.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactId = this.getAtt('ContactId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.contactName = props.contactName;
        this.dingRobotWebhookUrl = props.dingRobotWebhookUrl;
        this.email = props.email;
        this.phoneNum = props.phoneNum;
        this.proxyUserId = props.proxyUserId;
        this.regionId = props.regionId;
        this.systemNoc = props.systemNoc;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            contactName: this.contactName,
            dingRobotWebhookUrl: this.dingRobotWebhookUrl,
            email: this.email,
            phoneNum: this.phoneNum,
            proxyUserId: this.proxyUserId,
            regionId: this.regionId,
            systemNoc: this.systemNoc,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAlertContactPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAlertContactGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
 */
export interface RosAlertContactGroupProps {

    /**
     * @Property contactGroupName: The name of the alert contact group that you want to create.
     */
    readonly contactGroupName: string | ros.IResolvable;

    /**
     * @Property contactIds: The list of alert contact ID.
     */
    readonly contactIds: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property proxyUserId: Internal parameters
     */
    readonly proxyUserId?: string | ros.IResolvable;

    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    readonly regionId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAlertContactGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosAlertContactGroupProps`
 *
 * @returns the result of the validation.
 */
function RosAlertContactGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('proxyUserId', ros.validateString)(properties.proxyUserId));
    errors.collect(ros.propertyValidator('contactGroupName', ros.requiredValidator)(properties.contactGroupName));
    errors.collect(ros.propertyValidator('contactGroupName', ros.validateString)(properties.contactGroupName));
    if(properties.regionId && (typeof properties.regionId) !== 'object') {
        errors.collect(ros.propertyValidator('regionId', ros.validateAllowedValues)({
          data: properties.regionId,
          allowedValues: ["cn-qingdao","cn-beijing","cn-shanghai","cn-hangzhou","cn-shenzhen","cn-hongkong","ap-southeast-1"],
        }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('contactIds', ros.requiredValidator)(properties.contactIds));
    errors.collect(ros.propertyValidator('contactIds', ros.listValidator(ros.validateNumber))(properties.contactIds));
    return errors.wrap('supplied properties not correct for "RosAlertContactGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AlertContactGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosAlertContactGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::AlertContactGroup` resource.
 */
// @ts-ignore TS6133
function rosAlertContactGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAlertContactGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'ContactGroupName': ros.stringToRosTemplate(properties.contactGroupName),
      'ContactIds': ros.listMapper(ros.numberToRosTemplate)(properties.contactIds),
      'ProxyUserId': ros.stringToRosTemplate(properties.proxyUserId),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::AlertContactGroup`, which is used to create an alert contact group.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlertContactGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
 */
export class RosAlertContactGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::AlertContactGroup";

    /**
     * @Attribute ContactGroupId: The ID of the alert contact group that you created.
     */
    public readonly attrContactGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property contactGroupName: The name of the alert contact group that you want to create.
     */
    public contactGroupName: string | ros.IResolvable;

    /**
     * @Property contactIds: The list of alert contact ID.
     */
    public contactIds: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property proxyUserId: Internal parameters
     */
    public proxyUserId: string | ros.IResolvable | undefined;

    /**
     * @Property regionId: Region ID. Default to region of stack.
     */
    public regionId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlertContactGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAlertContactGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContactGroupId = this.getAtt('ContactGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.contactGroupName = props.contactGroupName;
        this.contactIds = props.contactIds;
        this.proxyUserId = props.proxyUserId;
        this.regionId = props.regionId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            contactGroupName: this.contactGroupName,
            contactIds: this.contactIds,
            proxyUserId: this.proxyUserId,
            regionId: this.regionId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAlertContactGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosApplyAlertRuleTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
 */
export interface RosApplyAlertRuleTemplateProps {

    /**
     * @Property clusterIds: The IDs list of Prometheus Instances.
     */
    readonly clusterIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property templateIds: The IDs list of Prometheus alert rule templates.
     */
    readonly templateIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property update: Whether to update created alert rules. Default false.
     */
    readonly update?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosApplyAlertRuleTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosApplyAlertRuleTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosApplyAlertRuleTemplatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('update', ros.validateBoolean)(properties.update));
    if(properties.clusterIds && (Array.isArray(properties.clusterIds) || (typeof properties.clusterIds) === 'string')) {
        errors.collect(ros.propertyValidator('clusterIds', ros.validateLength)({
            data: properties.clusterIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('clusterIds', ros.listValidator(ros.validateString))(properties.clusterIds));
    if(properties.templateIds && (Array.isArray(properties.templateIds) || (typeof properties.templateIds) === 'string')) {
        errors.collect(ros.propertyValidator('templateIds', ros.validateLength)({
            data: properties.templateIds.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('templateIds', ros.listValidator(ros.validateString))(properties.templateIds));
    return errors.wrap('supplied properties not correct for "RosApplyAlertRuleTemplateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::ApplyAlertRuleTemplate` resource
 *
 * @param properties - the TypeScript properties of a `RosApplyAlertRuleTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::ApplyAlertRuleTemplate` resource.
 */
// @ts-ignore TS6133
function rosApplyAlertRuleTemplatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApplyAlertRuleTemplatePropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterIds': ros.listMapper(ros.stringToRosTemplate)(properties.clusterIds),
      'TemplateIds': ros.listMapper(ros.stringToRosTemplate)(properties.templateIds),
      'Update': ros.booleanToRosTemplate(properties.update),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::ApplyAlertRuleTemplate`, which is used to create an alert rule of Alibaba Cloud Managed Service for Prometheus.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApplyAlertRuleTemplate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
 */
export class RosApplyAlertRuleTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::ApplyAlertRuleTemplate";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterIds: The IDs list of Prometheus Instances.
     */
    public clusterIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property templateIds: The IDs list of Prometheus alert rule templates.
     */
    public templateIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property update: Whether to update created alert rules. Default false.
     */
    public update: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplyAlertRuleTemplateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplyAlertRuleTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterIds = props.clusterIds;
        this.templateIds = props.templateIds;
        this.update = props.update;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterIds: this.clusterIds,
            templateIds: this.templateIds,
            update: this.update,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplyAlertRuleTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDeliverTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
 */
export interface RosDeliverTaskProps {

    /**
     * @Property targetList: The list of the target.
     */
    readonly targetList: Array<RosDeliverTask.TargetListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property taskName: The name of the task.
     */
    readonly taskName: string | ros.IResolvable;

    /**
     * @Property dataSourceId: The ID of the data source.
     */
    readonly dataSourceId?: string | ros.IResolvable;

    /**
     * @Property dataSourceName: The name of the data source.
     */
    readonly dataSourceName?: string | ros.IResolvable;

    /**
     * @Property externalLabel: The external label of the task.
     */
    readonly externalLabel?: string | ros.IResolvable;

    /**
     * @Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
     */
    readonly filterList?: string | ros.IResolvable;

    /**
     * @Property filterType: Whether the data filtering adopts the whitelist mechanism. Default value: true.
     */
    readonly filterType?: boolean | ros.IResolvable;

    /**
     * @Property taskDescription: The description of the task.
     */
    readonly taskDescription?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDeliverTaskProps`
 *
 * @param properties - the TypeScript properties of a `RosDeliverTaskProps`
 *
 * @returns the result of the validation.
 */
function RosDeliverTaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('targetList', ros.requiredValidator)(properties.targetList));
    errors.collect(ros.propertyValidator('targetList', ros.listValidator(RosDeliverTask_TargetListPropertyValidator))(properties.targetList));
    errors.collect(ros.propertyValidator('filterType', ros.validateBoolean)(properties.filterType));
    errors.collect(ros.propertyValidator('taskDescription', ros.validateString)(properties.taskDescription));
    errors.collect(ros.propertyValidator('dataSourceName', ros.validateString)(properties.dataSourceName));
    errors.collect(ros.propertyValidator('taskName', ros.requiredValidator)(properties.taskName));
    if(properties.taskName && (typeof properties.taskName) !== 'object') {
        errors.collect(ros.propertyValidator('taskName', ros.validateAllowedPattern)({
          data: properties.taskName,
          reg: /[a-zA-Z0-9-]{1,64}/
        }));
    }
    errors.collect(ros.propertyValidator('taskName', ros.validateString)(properties.taskName));
    errors.collect(ros.propertyValidator('externalLabel', ros.validateString)(properties.externalLabel));
    errors.collect(ros.propertyValidator('filterList', ros.validateString)(properties.filterList));
    errors.collect(ros.propertyValidator('dataSourceId', ros.validateString)(properties.dataSourceId));
    return errors.wrap('supplied properties not correct for "RosDeliverTaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::DeliverTask` resource
 *
 * @param properties - the TypeScript properties of a `RosDeliverTaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::DeliverTask` resource.
 */
// @ts-ignore TS6133
function rosDeliverTaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDeliverTaskPropsValidator(properties).assertSuccess();
    }
    return {
      'TargetList': ros.listMapper(rosDeliverTaskTargetListPropertyToRosTemplate)(properties.targetList),
      'TaskName': ros.stringToRosTemplate(properties.taskName),
      'DataSourceId': ros.stringToRosTemplate(properties.dataSourceId),
      'DataSourceName': ros.stringToRosTemplate(properties.dataSourceName),
      'ExternalLabel': ros.stringToRosTemplate(properties.externalLabel),
      'FilterList': ros.stringToRosTemplate(properties.filterList),
      'FilterType': ros.booleanToRosTemplate(properties.filterType),
      'TaskDescription': ros.stringToRosTemplate(properties.taskDescription),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::DeliverTask`, which is used to create a delivery task.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeliverTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-delivertask
 */
export class RosDeliverTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::DeliverTask";

    /**
     * @Attribute TaskId: The ID of the task.
     */
    public readonly attrTaskId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property targetList: The list of the target.
     */
    public targetList: Array<RosDeliverTask.TargetListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property taskName: The name of the task.
     */
    public taskName: string | ros.IResolvable;

    /**
     * @Property dataSourceId: The ID of the data source.
     */
    public dataSourceId: string | ros.IResolvable | undefined;

    /**
     * @Property dataSourceName: The name of the data source.
     */
    public dataSourceName: string | ros.IResolvable | undefined;

    /**
     * @Property externalLabel: The external label of the task.
     */
    public externalLabel: string | ros.IResolvable | undefined;

    /**
     * @Property filterList: Set metrics to filter, support for regular expressions, multiple line breaks, and multiple conditions to deliver.
     */
    public filterList: string | ros.IResolvable | undefined;

    /**
     * @Property filterType: Whether the data filtering adopts the whitelist mechanism. Default value: true.
     */
    public filterType: boolean | ros.IResolvable | undefined;

    /**
     * @Property taskDescription: The description of the task.
     */
    public taskDescription: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeliverTaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDeliverTask.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrTaskId = this.getAtt('TaskId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.targetList = props.targetList;
        this.taskName = props.taskName;
        this.dataSourceId = props.dataSourceId;
        this.dataSourceName = props.dataSourceName;
        this.externalLabel = props.externalLabel;
        this.filterList = props.filterList;
        this.filterType = props.filterType;
        this.taskDescription = props.taskDescription;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            targetList: this.targetList,
            taskName: this.taskName,
            dataSourceId: this.dataSourceId,
            dataSourceName: this.dataSourceName,
            externalLabel: this.externalLabel,
            filterList: this.filterList,
            filterType: this.filterType,
            taskDescription: this.taskDescription,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDeliverTaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDeliverTask {
    /**
     * @stability external
     */
    export interface TargetListProperty {
        /**
         * @Property targetParam: The parameter of the target.
         */
        readonly targetParam?: string | ros.IResolvable;
        /**
         * @Property targetType: The type of the target.
         */
        readonly targetType: string | ros.IResolvable;
        /**
         * @Property faultTolerantPolicy: The fault tolerant policy of the target. Valid values:
     * - ALL (default): Exception tolerance is allowed. When an exception occurs, the execution will not be blocked, and the message will be delivered to the dead message queue or dropped directly according to the configuration after exceeding the retry policy.
     * - NONE: Fault tolerance is not allowed and execution is blocked when an exception occurs and exceeds the retry policy configuration.
         */
        readonly faultTolerantPolicy?: string | ros.IResolvable;
        /**
         * @Property targetName: The name of the target.
         */
        readonly targetName?: string | ros.IResolvable;
        /**
         * @Property retryPolicy: The retry policy of the target. Valid values:
     * - BACKOFF_RETRY: retry three times, with a random interval between 10 and 20 seconds
     * - EXPONENTIAL_DECAY_RETRY (default): retry 176 times, each retry interval exponentially increased to 512 seconds, total retry time is 1 day; The interval for each retry is: 1,2,4,8,... 512 seconds.
         */
        readonly retryPolicy?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TargetListProperty`
 *
 * @param properties - the TypeScript properties of a `TargetListProperty`
 *
 * @returns the result of the validation.
 */
function RosDeliverTask_TargetListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('targetParam', ros.validateString)(properties.targetParam));
    errors.collect(ros.propertyValidator('targetType', ros.requiredValidator)(properties.targetType));
    errors.collect(ros.propertyValidator('targetType', ros.validateString)(properties.targetType));
    if(properties.faultTolerantPolicy && (typeof properties.faultTolerantPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('faultTolerantPolicy', ros.validateAllowedValues)({
          data: properties.faultTolerantPolicy,
          allowedValues: ["ALL","NONE"],
        }));
    }
    errors.collect(ros.propertyValidator('faultTolerantPolicy', ros.validateString)(properties.faultTolerantPolicy));
    errors.collect(ros.propertyValidator('targetName', ros.validateString)(properties.targetName));
    if(properties.retryPolicy && (typeof properties.retryPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('retryPolicy', ros.validateAllowedValues)({
          data: properties.retryPolicy,
          allowedValues: ["BACKOFF_RETRY","EXPONENTIAL_DECAY_RETRY"],
        }));
    }
    errors.collect(ros.propertyValidator('retryPolicy', ros.validateString)(properties.retryPolicy));
    return errors.wrap('supplied properties not correct for "TargetListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::DeliverTask.TargetList` resource
 *
 * @param properties - the TypeScript properties of a `TargetListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::DeliverTask.TargetList` resource.
 */
// @ts-ignore TS6133
function rosDeliverTaskTargetListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDeliverTask_TargetListPropertyValidator(properties).assertSuccess();
    return {
      'TargetParam': ros.stringToRosTemplate(properties.targetParam),
      'TargetType': ros.stringToRosTemplate(properties.targetType),
      'FaultTolerantPolicy': ros.stringToRosTemplate(properties.faultTolerantPolicy),
      'TargetName': ros.stringToRosTemplate(properties.targetName),
      'RetryPolicy': ros.stringToRosTemplate(properties.retryPolicy),
    };
}

/**
 * Properties for defining a `RosEnvironment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
 */
export interface RosEnvironmentProps {

    /**
     * @Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. For a Cloud environment, specify the region ID.
     */
    readonly bindResourceId: string | ros.IResolvable;

    /**
     * @Property environmentName: The name of the environment.
     */
    readonly environmentName: string | ros.IResolvable;

    /**
     * @Property environmentSubType: The subtype of the environment. Valid values:
     * One: CS type environment
     * ACK: CS type environment
     * ECS: ECS type environment
     * Cloud: cloud service
     */
    readonly environmentSubType: string | ros.IResolvable;

    /**
     * @Property environmentType: The type of the environment. Valid values:
     * CS: ACK
     * ECS: ECS
     * Cloud: cloud service
     */
    readonly environmentType: string | ros.IResolvable;

    /**
     * @Property deletePromInstance: Cascade delete Prometheus instance. Default value: true.
     */
    readonly deletePromInstance?: boolean | ros.IResolvable;

    /**
     * @Property feePackage: The payable resource plan. Valid values:
     * If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
     * Otherwise, leave the parameter empty.
     */
    readonly feePackage?: string | ros.IResolvable;

    /**
     * @Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. When passing space, the default share grafana is used.
     */
    readonly grafanaWorkspaceId?: string | ros.IResolvable;

    /**
     * @Property managedType: Specifies whether agents or exporters are managed. Valid values:
     * none: No. By default, no managed agents or exporters are provided for ACK clusters.
     * agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
     * agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
     */
    readonly managedType?: string | ros.IResolvable;

    /**
     * @Property prometheusInstanceId: The ID of the Prometheus instance. If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
     */
    readonly prometheusInstanceId?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of Environment.
     */
    readonly tags?: RosEnvironment.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosEnvironmentProps`
 *
 * @param properties - the TypeScript properties of a `RosEnvironmentProps`
 *
 * @returns the result of the validation.
 */
function RosEnvironmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.managedType && (typeof properties.managedType) !== 'object') {
        errors.collect(ros.propertyValidator('managedType', ros.validateAllowedValues)({
          data: properties.managedType,
          allowedValues: ["none","agent","agent-exporter"],
        }));
    }
    errors.collect(ros.propertyValidator('managedType', ros.validateString)(properties.managedType));
    errors.collect(ros.propertyValidator('environmentSubType', ros.requiredValidator)(properties.environmentSubType));
    if(properties.environmentSubType && (typeof properties.environmentSubType) !== 'object') {
        errors.collect(ros.propertyValidator('environmentSubType', ros.validateAllowedValues)({
          data: properties.environmentSubType,
          allowedValues: ["ACK","ECS","One","Cloud"],
        }));
    }
    errors.collect(ros.propertyValidator('environmentSubType', ros.validateString)(properties.environmentSubType));
    errors.collect(ros.propertyValidator('environmentType', ros.requiredValidator)(properties.environmentType));
    if(properties.environmentType && (typeof properties.environmentType) !== 'object') {
        errors.collect(ros.propertyValidator('environmentType', ros.validateAllowedValues)({
          data: properties.environmentType,
          allowedValues: ["CS","ECS","Cloud"],
        }));
    }
    errors.collect(ros.propertyValidator('environmentType', ros.validateString)(properties.environmentType));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('environmentName', ros.requiredValidator)(properties.environmentName));
    errors.collect(ros.propertyValidator('environmentName', ros.validateString)(properties.environmentName));
    errors.collect(ros.propertyValidator('bindResourceId', ros.requiredValidator)(properties.bindResourceId));
    errors.collect(ros.propertyValidator('bindResourceId', ros.validateString)(properties.bindResourceId));
    errors.collect(ros.propertyValidator('grafanaWorkspaceId', ros.validateString)(properties.grafanaWorkspaceId));
    errors.collect(ros.propertyValidator('prometheusInstanceId', ros.validateString)(properties.prometheusInstanceId));
    errors.collect(ros.propertyValidator('deletePromInstance', ros.validateBoolean)(properties.deletePromInstance));
    errors.collect(ros.propertyValidator('feePackage', ros.validateString)(properties.feePackage));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosEnvironment_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosEnvironmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::Environment` resource
 *
 * @param properties - the TypeScript properties of a `RosEnvironmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::Environment` resource.
 */
// @ts-ignore TS6133
function rosEnvironmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEnvironmentPropsValidator(properties).assertSuccess();
    }
    return {
      'BindResourceId': ros.stringToRosTemplate(properties.bindResourceId),
      'EnvironmentName': ros.stringToRosTemplate(properties.environmentName),
      'EnvironmentSubType': ros.stringToRosTemplate(properties.environmentSubType),
      'EnvironmentType': ros.stringToRosTemplate(properties.environmentType),
      'DeletePromInstance': ros.booleanToRosTemplate(properties.deletePromInstance),
      'FeePackage': ros.stringToRosTemplate(properties.feePackage),
      'GrafanaWorkspaceId': ros.stringToRosTemplate(properties.grafanaWorkspaceId),
      'ManagedType': ros.stringToRosTemplate(properties.managedType),
      'PrometheusInstanceId': ros.stringToRosTemplate(properties.prometheusInstanceId),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosEnvironmentTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::Environment`, which is used to create an environment.
 * @Note This class does not contain additional functions, so it is recommended to use the `Environment` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
 */
export class RosEnvironment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::Environment";

    /**
     * @Attribute EnvironmentId: The id of the environment.
     */
    public readonly attrEnvironmentId: ros.IResolvable;

    /**
     * @Attribute EnvironmentName: The name of the environment.
     */
    public readonly attrEnvironmentName: ros.IResolvable;

    /**
     * @Attribute EnvironmentSubType: The subtype of the environment.
     */
    public readonly attrEnvironmentSubType: ros.IResolvable;

    /**
     * @Attribute EnvironmentType: The type of the environment.
     */
    public readonly attrEnvironmentType: ros.IResolvable;

    /**
     * @Attribute FeePackage: The payable resource plan.
     */
    public readonly attrFeePackage: ros.IResolvable;

    /**
     * @Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
     */
    public readonly attrGrafanaWorkspaceId: ros.IResolvable;

    /**
     * @Attribute ManagedType: Specifies whether agents or exporters are managed.
     */
    public readonly attrManagedType: ros.IResolvable;

    /**
     * @Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    public readonly attrPrometheusInstanceId: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. For a Cloud environment, specify the region ID.
     */
    public bindResourceId: string | ros.IResolvable;

    /**
     * @Property environmentName: The name of the environment.
     */
    public environmentName: string | ros.IResolvable;

    /**
     * @Property environmentSubType: The subtype of the environment. Valid values:
     * One: CS type environment
     * ACK: CS type environment
     * ECS: ECS type environment
     * Cloud: cloud service
     */
    public environmentSubType: string | ros.IResolvable;

    /**
     * @Property environmentType: The type of the environment. Valid values:
     * CS: ACK
     * ECS: ECS
     * Cloud: cloud service
     */
    public environmentType: string | ros.IResolvable;

    /**
     * @Property deletePromInstance: Cascade delete Prometheus instance. Default value: true.
     */
    public deletePromInstance: boolean | ros.IResolvable | undefined;

    /**
     * @Property feePackage: The payable resource plan. Valid values:
     * If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
     * Otherwise, leave the parameter empty.
     */
    public feePackage: string | ros.IResolvable | undefined;

    /**
     * @Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. When passing space, the default share grafana is used.
     */
    public grafanaWorkspaceId: string | ros.IResolvable | undefined;

    /**
     * @Property managedType: Specifies whether agents or exporters are managed. Valid values:
     * none: No. By default, no managed agents or exporters are provided for ACK clusters.
     * agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
     * agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
     */
    public managedType: string | ros.IResolvable | undefined;

    /**
     * @Property prometheusInstanceId: The ID of the Prometheus instance. If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
     */
    public prometheusInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of Environment.
     */
    public tags: RosEnvironment.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnvironmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEnvironment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEnvironmentId = this.getAtt('EnvironmentId');
        this.attrEnvironmentName = this.getAtt('EnvironmentName');
        this.attrEnvironmentSubType = this.getAtt('EnvironmentSubType');
        this.attrEnvironmentType = this.getAtt('EnvironmentType');
        this.attrFeePackage = this.getAtt('FeePackage');
        this.attrGrafanaWorkspaceId = this.getAtt('GrafanaWorkspaceId');
        this.attrManagedType = this.getAtt('ManagedType');
        this.attrPrometheusInstanceId = this.getAtt('PrometheusInstanceId');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bindResourceId = props.bindResourceId;
        this.environmentName = props.environmentName;
        this.environmentSubType = props.environmentSubType;
        this.environmentType = props.environmentType;
        this.deletePromInstance = props.deletePromInstance;
        this.feePackage = props.feePackage;
        this.grafanaWorkspaceId = props.grafanaWorkspaceId;
        this.managedType = props.managedType;
        this.prometheusInstanceId = props.prometheusInstanceId;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bindResourceId: this.bindResourceId,
            environmentName: this.environmentName,
            environmentSubType: this.environmentSubType,
            environmentType: this.environmentType,
            deletePromInstance: this.deletePromInstance,
            feePackage: this.feePackage,
            grafanaWorkspaceId: this.grafanaWorkspaceId,
            managedType: this.managedType,
            prometheusInstanceId: this.prometheusInstanceId,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEnvironmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEnvironment {
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
function RosEnvironment_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::Environment.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::Environment.Tags` resource.
 */
// @ts-ignore TS6133
function rosEnvironmentTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEnvironment_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosEnvironmentFeature`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
 */
export interface RosEnvironmentFeatureProps {

    /**
     * @Property environmentId: The id of the environment.
     */
    readonly environmentId: string | ros.IResolvable;

    /**
     * @Property featureName: The name of the feature. Valid values:
     * app-agent-pilot
     * metric-agent
     */
    readonly featureName: string | ros.IResolvable;

    /**
     * @Property featureVersion: The version of the feature.
     */
    readonly featureVersion: string | ros.IResolvable;

    /**
     * @Property config: The metadata of the feature.
     */
    readonly config?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEnvironmentFeatureProps`
 *
 * @param properties - the TypeScript properties of a `RosEnvironmentFeatureProps`
 *
 * @returns the result of the validation.
 */
function RosEnvironmentFeaturePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('environmentId', ros.requiredValidator)(properties.environmentId));
    errors.collect(ros.propertyValidator('environmentId', ros.validateString)(properties.environmentId));
    errors.collect(ros.propertyValidator('config', ros.hashValidator(ros.validateAny))(properties.config));
    errors.collect(ros.propertyValidator('featureVersion', ros.requiredValidator)(properties.featureVersion));
    errors.collect(ros.propertyValidator('featureVersion', ros.validateString)(properties.featureVersion));
    errors.collect(ros.propertyValidator('featureName', ros.requiredValidator)(properties.featureName));
    errors.collect(ros.propertyValidator('featureName', ros.validateString)(properties.featureName));
    return errors.wrap('supplied properties not correct for "RosEnvironmentFeatureProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::EnvironmentFeature` resource
 *
 * @param properties - the TypeScript properties of a `RosEnvironmentFeatureProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::EnvironmentFeature` resource.
 */
// @ts-ignore TS6133
function rosEnvironmentFeaturePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEnvironmentFeaturePropsValidator(properties).assertSuccess();
    }
    return {
      'EnvironmentId': ros.stringToRosTemplate(properties.environmentId),
      'FeatureName': ros.stringToRosTemplate(properties.featureName),
      'FeatureVersion': ros.stringToRosTemplate(properties.featureVersion),
      'Config': ros.hashMapper(ros.objectToRosTemplate)(properties.config),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::EnvironmentFeature`, which is used to install a feature.
 * @Note This class does not contain additional functions, so it is recommended to use the `EnvironmentFeature` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
 */
export class RosEnvironmentFeature extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::EnvironmentFeature";

    /**
     * @Attribute EnvironmentId: The environment ID.
     */
    public readonly attrEnvironmentId: ros.IResolvable;

    /**
     * @Attribute Feature: The installation information of the feature.
     */
    public readonly attrFeature: ros.IResolvable;

    /**
     * @Attribute FeatureName: The name of the feature.
     */
    public readonly attrFeatureName: ros.IResolvable;

    /**
     * @Attribute FeatureStatus: The status of the feature.
     */
    public readonly attrFeatureStatus: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property environmentId: The id of the environment.
     */
    public environmentId: string | ros.IResolvable;

    /**
     * @Property featureName: The name of the feature. Valid values:
     * app-agent-pilot
     * metric-agent
     */
    public featureName: string | ros.IResolvable;

    /**
     * @Property featureVersion: The version of the feature.
     */
    public featureVersion: string | ros.IResolvable;

    /**
     * @Property config: The metadata of the feature.
     */
    public config: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEnvironmentFeatureProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEnvironmentFeature.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEnvironmentId = this.getAtt('EnvironmentId');
        this.attrFeature = this.getAtt('Feature');
        this.attrFeatureName = this.getAtt('FeatureName');
        this.attrFeatureStatus = this.getAtt('FeatureStatus');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.environmentId = props.environmentId;
        this.featureName = props.featureName;
        this.featureVersion = props.featureVersion;
        this.config = props.config;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            environmentId: this.environmentId,
            featureName: this.featureName,
            featureVersion: this.featureVersion,
            config: this.config,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEnvironmentFeaturePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosManagedPrometheus`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
 */
export interface RosManagedPrometheusProps {

    /**
     * @Property clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * @Property securityGroupId: The security group ID of the cluster.
     */
    readonly securityGroupId: string | ros.IResolvable;

    /**
     * @Property vpcId: The vpc ID of the cluster.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vswith ID of the cluster.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
     */
    readonly clusterId?: string | ros.IResolvable;

    /**
     * @Property clusterName: The name of the cluster. Required when the ClusterType is ecs.
     */
    readonly clusterName?: string | ros.IResolvable;

    /**
     * @Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
     */
    readonly grafanaInstanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosManagedPrometheusProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedPrometheusProps`
 *
 * @returns the result of the validation.
 */
function RosManagedPrometheusPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('clusterName', ros.validateString)(properties.clusterName));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    if(properties.clusterType && (typeof properties.clusterType) !== 'object') {
        errors.collect(ros.propertyValidator('clusterType', ros.validateAllowedValues)({
          data: properties.clusterType,
          allowedValues: ["ecs","ask","one"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    errors.collect(ros.propertyValidator('grafanaInstanceId', ros.validateString)(properties.grafanaInstanceId));
    return errors.wrap('supplied properties not correct for "RosManagedPrometheusProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::ManagedPrometheus` resource
 *
 * @param properties - the TypeScript properties of a `RosManagedPrometheusProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::ManagedPrometheus` resource.
 */
// @ts-ignore TS6133
function rosManagedPrometheusPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosManagedPrometheusPropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterType': ros.stringToRosTemplate(properties.clusterType),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'ClusterName': ros.stringToRosTemplate(properties.clusterName),
      'GrafanaInstanceId': ros.stringToRosTemplate(properties.grafanaInstanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::ManagedPrometheus`, which is used to install a Prometheus instance to monitor a serverless Kubernetes (ASK) cluster or an Elastic Compute Service (ECS) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `ManagedPrometheus` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
 */
export class RosManagedPrometheus extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::ManagedPrometheus";

    /**
     * @Attribute ClusterType: The type of the cluster.
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute VpcId: The vpc ID of the cluster.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
     */
    public clusterType: string | ros.IResolvable;

    /**
     * @Property securityGroupId: The security group ID of the cluster.
     */
    public securityGroupId: string | ros.IResolvable;

    /**
     * @Property vpcId: The vpc ID of the cluster.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vswith ID of the cluster.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
     */
    public clusterId: string | ros.IResolvable | undefined;

    /**
     * @Property clusterName: The name of the cluster. Required when the ClusterType is ecs.
     */
    public clusterName: string | ros.IResolvable | undefined;

    /**
     * @Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
     */
    public grafanaInstanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedPrometheusProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosManagedPrometheus.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterType = props.clusterType;
        this.securityGroupId = props.securityGroupId;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.clusterId = props.clusterId;
        this.clusterName = props.clusterName;
        this.grafanaInstanceId = props.grafanaInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterType: this.clusterType,
            securityGroupId: this.securityGroupId,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            clusterId: this.clusterId,
            clusterName: this.clusterName,
            grafanaInstanceId: this.grafanaInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosManagedPrometheusPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPrometheus`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
 */
export interface RosPrometheusProps {

    /**
     * @Property clusterType: Instance type.
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * @Property grafanaInstanceId: Grafana workspace ID.
     */
    readonly grafanaInstanceId: string | ros.IResolvable;

    /**
     * @Property prometheusName: The name of the resource.
     */
    readonly prometheusName: string | ros.IResolvable;

    /**
     * @Property clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
     */
    readonly clusterId?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    readonly subClustersJson?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tags: Tags of prometheus.
     */
    readonly tags?: RosPrometheus.TagsProperty[];

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPrometheusProps`
 *
 * @param properties - the TypeScript properties of a `RosPrometheusProps`
 *
 * @returns the result of the validation.
 */
function RosPrometheusPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('clusterId', ros.validateString)(properties.clusterId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    if(properties.clusterType && (typeof properties.clusterType) !== 'object') {
        errors.collect(ros.propertyValidator('clusterType', ros.validateAllowedValues)({
          data: properties.clusterType,
          allowedValues: ["vpc-prometheus","ManagedKubernetes","cloud-product-prometheus","remote-write-prometheus","GlobalViewV2","ecs","global-view"],
        }));
    }
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosPrometheus_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('subClustersJson', ros.listValidator(ros.validateAny))(properties.subClustersJson));
    errors.collect(ros.propertyValidator('grafanaInstanceId', ros.requiredValidator)(properties.grafanaInstanceId));
    errors.collect(ros.propertyValidator('grafanaInstanceId', ros.validateString)(properties.grafanaInstanceId));
    errors.collect(ros.propertyValidator('prometheusName', ros.requiredValidator)(properties.prometheusName));
    errors.collect(ros.propertyValidator('prometheusName', ros.validateString)(properties.prometheusName));
    return errors.wrap('supplied properties not correct for "RosPrometheusProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::Prometheus` resource
 *
 * @param properties - the TypeScript properties of a `RosPrometheusProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::Prometheus` resource.
 */
// @ts-ignore TS6133
function rosPrometheusPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrometheusPropsValidator(properties).assertSuccess();
    }
    return {
      'ClusterType': ros.stringToRosTemplate(properties.clusterType),
      'GrafanaInstanceId': ros.stringToRosTemplate(properties.grafanaInstanceId),
      'PrometheusName': ros.stringToRosTemplate(properties.prometheusName),
      'ClusterId': ros.stringToRosTemplate(properties.clusterId),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'SubClustersJson': ros.listMapper(ros.objectToRosTemplate)(properties.subClustersJson),
      'Tags': ros.listMapper(rosPrometheusTagsPropertyToRosTemplate)(properties.tags),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::Prometheus`, which is used to create a Prometheus instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Prometheus` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
 */
export class RosPrometheus extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::Prometheus";

    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ClusterType: Instance type.
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute GrafanaInstanceId: Grafana workspace ID.
     */
    public readonly attrGrafanaInstanceId: ros.IResolvable;

    /**
     * @Attribute PaymentType: Payment Type.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute PrometheusName: The name of the resource.
     */
    public readonly attrPrometheusName: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: The ID of the security group.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * @Attribute SubClustersJson: Subcluster information of globalVeiw cluster.
     */
    public readonly attrSubClustersJson: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the prometheus.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute UserId: User ID.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The ID of the vSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the virtual private cloud (VPC).
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterType: Instance type.
     */
    public clusterType: string | ros.IResolvable;

    /**
     * @Property grafanaInstanceId: Grafana workspace ID.
     */
    public grafanaInstanceId: string | ros.IResolvable;

    /**
     * @Property prometheusName: The name of the resource.
     */
    public prometheusName: string | ros.IResolvable;

    /**
     * @Property clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
     */
    public clusterId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    public subClustersJson: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of prometheus.
     */
    public tags: RosPrometheus.TagsProperty[] | undefined;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheusProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrometheus.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrGrafanaInstanceId = this.getAtt('GrafanaInstanceId');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPrometheusName = this.getAtt('PrometheusName');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.attrSubClustersJson = this.getAtt('SubClustersJson');
        this.attrTags = this.getAtt('Tags');
        this.attrUserId = this.getAtt('UserId');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterType = props.clusterType;
        this.grafanaInstanceId = props.grafanaInstanceId;
        this.prometheusName = props.prometheusName;
        this.clusterId = props.clusterId;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.subClustersJson = props.subClustersJson;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterType: this.clusterType,
            grafanaInstanceId: this.grafanaInstanceId,
            prometheusName: this.prometheusName,
            clusterId: this.clusterId,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            subClustersJson: this.subClustersJson,
            tags: this.tags,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrometheusPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPrometheus {
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
function RosPrometheus_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::Prometheus.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::Prometheus.Tags` resource.
 */
// @ts-ignore TS6133
function rosPrometheusTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrometheus_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosRetcodeApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
 */
export interface RosRetcodeAppProps {

    /**
     * @Property regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
     */
    readonly regionId: string | ros.IResolvable;

    /**
     * @Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
     */
    readonly retcodeAppName: string | ros.IResolvable;

    /**
     * @Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
     */
    readonly retcodeAppType: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRetcodeAppProps`
 *
 * @param properties - the TypeScript properties of a `RosRetcodeAppProps`
 *
 * @returns the result of the validation.
 */
function RosRetcodeAppPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('retcodeAppType', ros.requiredValidator)(properties.retcodeAppType));
    errors.collect(ros.propertyValidator('retcodeAppType', ros.validateString)(properties.retcodeAppType));
    errors.collect(ros.propertyValidator('retcodeAppName', ros.requiredValidator)(properties.retcodeAppName));
    errors.collect(ros.propertyValidator('retcodeAppName', ros.validateString)(properties.retcodeAppName));
    errors.collect(ros.propertyValidator('regionId', ros.requiredValidator)(properties.regionId));
    if(properties.regionId && (typeof properties.regionId) !== 'object') {
        errors.collect(ros.propertyValidator('regionId', ros.validateAllowedValues)({
          data: properties.regionId,
          allowedValues: ["cn-hangzhou","ap-southeast-1"],
        }));
    }
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "RosRetcodeAppProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::RetcodeApp` resource
 *
 * @param properties - the TypeScript properties of a `RosRetcodeAppProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::RetcodeApp` resource.
 */
// @ts-ignore TS6133
function rosRetcodeAppPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRetcodeAppPropsValidator(properties).assertSuccess();
    }
    return {
      'RegionId': ros.stringToRosTemplate(properties.regionId),
      'RetcodeAppName': ros.stringToRosTemplate(properties.retcodeAppName),
      'RetcodeAppType': ros.stringToRosTemplate(properties.retcodeAppType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::RetcodeApp`, which is used to create a browser monitoring task.
 * @Note This class does not contain additional functions, so it is recommended to use the `RetcodeApp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
 */
export class RosRetcodeApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::RetcodeApp";

    /**
     * @Attribute AppId: The ID of the application for which you created the browser monitoring job.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute Pid: The PID.
     */
    public readonly attrPid: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
     */
    public regionId: string | ros.IResolvable;

    /**
     * @Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
     */
    public retcodeAppName: string | ros.IResolvable;

    /**
     * @Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
     */
    public retcodeAppType: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRetcodeAppProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRetcodeApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrPid = this.getAtt('Pid');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.regionId = props.regionId;
        this.retcodeAppName = props.retcodeAppName;
        this.retcodeAppType = props.retcodeAppType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            regionId: this.regionId,
            retcodeAppName: this.retcodeAppName,
            retcodeAppType: this.retcodeAppType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRetcodeAppPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosXTraceApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
 */
export interface RosXTraceAppProps {

    /**
     * @Property xTraceAppName: The name of the resource.
     */
    readonly xTraceAppName: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of The tags of the resource..
     */
    readonly tags?: RosXTraceApp.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosXTraceAppProps`
 *
 * @param properties - the TypeScript properties of a `RosXTraceAppProps`
 *
 * @returns the result of the validation.
 */
function RosXTraceAppPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosXTraceApp_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('xTraceAppName', ros.requiredValidator)(properties.xTraceAppName));
    errors.collect(ros.propertyValidator('xTraceAppName', ros.validateString)(properties.xTraceAppName));
    return errors.wrap('supplied properties not correct for "RosXTraceAppProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::XTraceApp` resource
 *
 * @param properties - the TypeScript properties of a `RosXTraceAppProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::XTraceApp` resource.
 */
// @ts-ignore TS6133
function rosXTraceAppPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosXTraceAppPropsValidator(properties).assertSuccess();
    }
    return {
      'XTraceAppName': ros.stringToRosTemplate(properties.xTraceAppName),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosXTraceAppTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ARMS::XTraceApp`.
 * @Note This class does not contain additional functions, so it is recommended to use the `XTraceApp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-xtraceapp
 */
export class RosXTraceApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ARMS::XTraceApp";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Pid: the identify of application.
     */
    public readonly attrPid: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the resource.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute XTraceAppName: The name of the resource.
     */
    public readonly attrXTraceAppName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property xTraceAppName: The name of the resource.
     */
    public xTraceAppName: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of The tags of the resource..
     */
    public tags: RosXTraceApp.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosXTraceAppProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosXTraceApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrPid = this.getAtt('Pid');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTags = this.getAtt('Tags');
        this.attrXTraceAppName = this.getAtt('XTraceAppName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.xTraceAppName = props.xTraceAppName;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            xTraceAppName: this.xTraceAppName,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosXTraceAppPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosXTraceApp {
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
function RosXTraceApp_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ARMS::XTraceApp.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ARMS::XTraceApp.Tags` resource.
 */
// @ts-ignore TS6133
function rosXTraceAppTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosXTraceApp_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
