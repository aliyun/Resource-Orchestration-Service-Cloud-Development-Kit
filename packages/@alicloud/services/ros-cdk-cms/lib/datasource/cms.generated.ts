// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAlarmContact`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontact
 */
export interface RosAlarmContactProps {

    /**
     * @Property alarmContactName: AlarmContactName.
     */
    readonly alarmContactName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAlarmContactProps`
 *
 * @param properties - the TypeScript properties of a `RosAlarmContactProps`
 *
 * @returns the result of the validation.
 */
function RosAlarmContactPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('alarmContactName', ros.requiredValidator)(properties.alarmContactName));
    errors.collect(ros.propertyValidator('alarmContactName', ros.validateString)(properties.alarmContactName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAlarmContactProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CMS::AlarmContact` resource
 *
 * @param properties - the TypeScript properties of a `RosAlarmContactProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CMS::AlarmContact` resource.
 */
// @ts-ignore TS6133
function rosAlarmContactPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAlarmContactPropsValidator(properties).assertSuccess();
    }
    return {
      'AlarmContactName': ros.stringToRosTemplate(properties.alarmContactName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::AlarmContact`, which is used to query the information about an alert contact.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlarmContact` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontact
 */
export class RosAlarmContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::AlarmContact";

    /**
     * @Attribute AlarmContactName: AlarmContactName.
     */
    public readonly attrAlarmContactName: ros.IResolvable;

    /**
     * @Attribute ChannelsAliIm: ChannelsAliIm.
     */
    public readonly attrChannelsAliIm: ros.IResolvable;

    /**
     * @Attribute ChannelsDingWebHook: ChannelsDingWebHook.
     */
    public readonly attrChannelsDingWebHook: ros.IResolvable;

    /**
     * @Attribute ChannelsMail: ChannelsMail.
     */
    public readonly attrChannelsMail: ros.IResolvable;

    /**
     * @Attribute ChannelsSms: ChannelsSMS.
     */
    public readonly attrChannelsSms: ros.IResolvable;

    /**
     * @Attribute ChannelsStateAliIm: ChannelsStateAliIm.
     */
    public readonly attrChannelsStateAliIm: ros.IResolvable;

    /**
     * @Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.
     */
    public readonly attrChannelsStateDingWebHook: ros.IResolvable;

    /**
     * @Attribute ChannelsStateMail: ChannelsStateMail.
     */
    public readonly attrChannelsStateMail: ros.IResolvable;

    /**
     * @Attribute ChannelsStateSms: ChannelsStateSMS.
     */
    public readonly attrChannelsStateSms: ros.IResolvable;

    /**
     * @Attribute ContactGroups: ContactGroups.
     */
    public readonly attrContactGroups: ros.IResolvable;

    /**
     * @Attribute CreateTime: CreateTime.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Describe: Describe.
     */
    public readonly attrDescribe: ros.IResolvable;

    /**
     * @Attribute Lang: The language type of the alarm.
     */
    public readonly attrLang: ros.IResolvable;

    /**
     * @Attribute UpdateTime: UpdateTime.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property alarmContactName: AlarmContactName.
     */
    public alarmContactName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlarmContactProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAlarmContact.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAlarmContactName = this.getAtt('AlarmContactName');
        this.attrChannelsAliIm = this.getAtt('ChannelsAliIm');
        this.attrChannelsDingWebHook = this.getAtt('ChannelsDingWebHook');
        this.attrChannelsMail = this.getAtt('ChannelsMail');
        this.attrChannelsSms = this.getAtt('ChannelsSms');
        this.attrChannelsStateAliIm = this.getAtt('ChannelsStateAliIm');
        this.attrChannelsStateDingWebHook = this.getAtt('ChannelsStateDingWebHook');
        this.attrChannelsStateMail = this.getAtt('ChannelsStateMail');
        this.attrChannelsStateSms = this.getAtt('ChannelsStateSms');
        this.attrContactGroups = this.getAtt('ContactGroups');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescribe = this.getAtt('Describe');
        this.attrLang = this.getAtt('Lang');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.alarmContactName = props.alarmContactName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            alarmContactName: this.alarmContactName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAlarmContactPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAlarmContacts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
 */
export interface RosAlarmContactsProps {

    /**
     * @Property alarmContactName: The name of the alert contact.
     */
    readonly alarmContactName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAlarmContactsProps`
 *
 * @param properties - the TypeScript properties of a `RosAlarmContactsProps`
 *
 * @returns the result of the validation.
 */
function RosAlarmContactsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('alarmContactName', ros.validateString)(properties.alarmContactName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAlarmContactsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CMS::AlarmContacts` resource
 *
 * @param properties - the TypeScript properties of a `RosAlarmContactsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CMS::AlarmContacts` resource.
 */
// @ts-ignore TS6133
function rosAlarmContactsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAlarmContactsPropsValidator(properties).assertSuccess();
    }
    return {
      'AlarmContactName': ros.stringToRosTemplate(properties.alarmContactName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::AlarmContacts`, which is used to query the information about alert contacts.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlarmContacts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
 */
export class RosAlarmContacts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::AlarmContacts";

    /**
     * @Attribute AlarmContactNames: The list of alarm contact names.
     */
    public readonly attrAlarmContactNames: ros.IResolvable;

    /**
     * @Attribute AlarmContacts: The list of alarm contacts.
     */
    public readonly attrAlarmContacts: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property alarmContactName: The name of the alert contact.
     */
    public alarmContactName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlarmContactsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAlarmContacts.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAlarmContactNames = this.getAtt('AlarmContactNames');
        this.attrAlarmContacts = this.getAtt('AlarmContacts');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.alarmContactName = props.alarmContactName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            alarmContactName: this.alarmContactName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAlarmContactsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMonitorGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroup
 */
export interface RosMonitorGroupProps {

    /**
     * @Property groupId: GroupId.
     */
    readonly groupId: number | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateNumber)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosMonitorGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CMS::MonitorGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CMS::MonitorGroup` resource.
 */
// @ts-ignore TS6133
function rosMonitorGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMonitorGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'GroupId': ros.numberToRosTemplate(properties.groupId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::MonitorGroup`, which is used to query the information about an application group.
 * @Note This class does not contain additional functions, so it is recommended to use the `MonitorGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroup
 */
export class RosMonitorGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::MonitorGroup";

    /**
     * @Attribute BindUrl: BindUrl.
     */
    public readonly attrBindUrl: ros.IResolvable;

    /**
     * @Attribute ContactGroups: AlarmContactGroupName.
     */
    public readonly attrContactGroups: ros.IResolvable;

    /**
     * @Attribute CreateTime: GmtCreate.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DynamicTagRuleId: DynamicTagRuleId.
     */
    public readonly attrDynamicTagRuleId: ros.IResolvable;

    /**
     * @Attribute GmtModified: GmtModified.
     */
    public readonly attrGmtModified: ros.IResolvable;

    /**
     * @Attribute GroupId: GroupId.
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * @Attribute MonitorGroupName: MonitorGroupName.
     */
    public readonly attrMonitorGroupName: ros.IResolvable;

    /**
     * @Attribute ServiceId: ServiceId.
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * @Attribute Tags: Tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TemplateIds: TemplateIds.
     */
    public readonly attrTemplateIds: ros.IResolvable;

    /**
     * @Attribute Type: Type.
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupId: GroupId.
     */
    public groupId: number | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMonitorGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBindUrl = this.getAtt('BindUrl');
        this.attrContactGroups = this.getAtt('ContactGroups');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDynamicTagRuleId = this.getAtt('DynamicTagRuleId');
        this.attrGmtModified = this.getAtt('GmtModified');
        this.attrGroupId = this.getAtt('GroupId');
        this.attrMonitorGroupName = this.getAtt('MonitorGroupName');
        this.attrServiceId = this.getAtt('ServiceId');
        this.attrTags = this.getAtt('Tags');
        this.attrTemplateIds = this.getAtt('TemplateIds');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupId = props.groupId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupId: this.groupId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMonitorGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMonitorGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroups
 */
export interface RosMonitorGroupsProps {

    /**
     * @Property dynamicTagRuleId: The ID of the tag rule.
     */
    readonly dynamicTagRuleId?: string | ros.IResolvable;

    /**
     * @Property groupId: The IDs of the application groups.
     */
    readonly groupId?: number | ros.IResolvable;

    /**
     * @Property monitorGroupName: The name of the application group.
     */
    readonly monitorGroupName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property type: The type of the application group. Valid values:
     * custom: a self-managed application group.
     * ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
     * kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMonitorGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosMonitorGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('dynamicTagRuleId', ros.validateString)(properties.dynamicTagRuleId));
    errors.collect(ros.propertyValidator('monitorGroupName', ros.validateString)(properties.monitorGroupName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('groupId', ros.validateNumber)(properties.groupId));
    return errors.wrap('supplied properties not correct for "RosMonitorGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CMS::MonitorGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CMS::MonitorGroups` resource.
 */
// @ts-ignore TS6133
function rosMonitorGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMonitorGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      'DynamicTagRuleId': ros.stringToRosTemplate(properties.dynamicTagRuleId),
      'GroupId': ros.numberToRosTemplate(properties.groupId),
      'MonitorGroupName': ros.stringToRosTemplate(properties.monitorGroupName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::MonitorGroups`, which is used to query the information about application groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `MonitorGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroups
 */
export class RosMonitorGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::MonitorGroups";

    /**
     * @Attribute GroupIds: The list of group IDs.
     */
    public readonly attrGroupIds: ros.IResolvable;

    /**
     * @Attribute MonitorGroups: The list of monitor groups.
     */
    public readonly attrMonitorGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dynamicTagRuleId: The ID of the tag rule.
     */
    public dynamicTagRuleId: string | ros.IResolvable | undefined;

    /**
     * @Property groupId: The IDs of the application groups.
     */
    public groupId: number | ros.IResolvable | undefined;

    /**
     * @Property monitorGroupName: The name of the application group.
     */
    public monitorGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property type: The type of the application group. Valid values:
     * custom: a self-managed application group.
     * ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
     * kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMonitorGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupIds = this.getAtt('GroupIds');
        this.attrMonitorGroups = this.getAtt('MonitorGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dynamicTagRuleId = props.dynamicTagRuleId;
        this.groupId = props.groupId;
        this.monitorGroupName = props.monitorGroupName;
        this.refreshOptions = props.refreshOptions;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dynamicTagRuleId: this.dynamicTagRuleId,
            groupId: this.groupId,
            monitorGroupName: this.monitorGroupName,
            refreshOptions: this.refreshOptions,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMonitorGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespace
 */
export interface RosNamespaceProps {

    /**
     * @Property namespace: Indicator warehouse name.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNamespaceProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosNamespaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CMS::Namespace` resource
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CMS::Namespace` resource.
 */
// @ts-ignore TS6133
function rosNamespacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNamespacePropsValidator(properties).assertSuccess();
    }
    return {
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::Namespace`, which is used to query the information about a namespace and the metric data of the namespace.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespace
 */
export class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::Namespace";

    /**
     * @Attribute CreateTime: Create the timestamp of the indicator warehouse.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: Description of indicator warehouse.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute ModifyTime: The timestamp of the last modification indicator warehouse.
     */
    public readonly attrModifyTime: ros.IResolvable;

    /**
     * @Attribute Namespace: Indicator warehouse name.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * @Attribute Specification: Data storage duration.
     */
    public readonly attrSpecification: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property namespace: Indicator warehouse name.
     */
    public namespace: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrModifyTime = this.getAtt('ModifyTime');
        this.attrNamespace = this.getAtt('Namespace');
        this.attrSpecification = this.getAtt('Specification');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.namespace = props.namespace;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            namespace: this.namespace,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNamespacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNamespaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespaces
 */
export interface RosNamespacesProps {

    /**
     * @Property namespace: Indicator warehouse name.
     */
    readonly namespace?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNamespacesProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespacesProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosNamespacesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CMS::Namespaces` resource
 *
 * @param properties - the TypeScript properties of a `RosNamespacesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CMS::Namespaces` resource.
 */
// @ts-ignore TS6133
function rosNamespacesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNamespacesPropsValidator(properties).assertSuccess();
    }
    return {
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::Namespaces`, which is used to query the information about namespaces.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespaces
 */
export class RosNamespaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::Namespaces";

    /**
     * @Attribute Namespaces: The list of namespaces.
     */
    public readonly attrNamespaces: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property namespace: Indicator warehouse name.
     */
    public namespace: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespacesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespaces.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNamespaces = this.getAtt('Namespaces');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.namespace = props.namespace;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            namespace: this.namespace,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNamespacesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSlsGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-slsgroups
 */
export interface RosSlsGroupsProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property slsGroupName: The name of the Logstore group.
     */
    readonly slsGroupName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSlsGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosSlsGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosSlsGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('slsGroupName', ros.validateString)(properties.slsGroupName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosSlsGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CMS::SlsGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosSlsGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CMS::SlsGroups` resource.
 */
// @ts-ignore TS6133
function rosSlsGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSlsGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'SlsGroupName': ros.stringToRosTemplate(properties.slsGroupName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::SlsGroups`, which is used to query the information about Logstore groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `SlsGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-slsgroups
 */
export class RosSlsGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::SlsGroups";

    /**
     * @Attribute SlsGroupNames: The list of sls group names.
     */
    public readonly attrSlsGroupNames: ros.IResolvable;

    /**
     * @Attribute SlsGroups: The list of sls groups.
     */
    public readonly attrSlsGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property slsGroupName: The name of the Logstore group.
     */
    public slsGroupName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSlsGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSlsGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSlsGroupNames = this.getAtt('SlsGroupNames');
        this.attrSlsGroups = this.getAtt('SlsGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.slsGroupName = props.slsGroupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            slsGroupName: this.slsGroupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSlsGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
