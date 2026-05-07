"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosSlsGroups = exports.RosNamespaces = exports.RosNamespace = exports.RosMonitorGroups = exports.RosMonitorGroup = exports.RosAlarmContacts = exports.RosAlarmContact = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosAlarmContactProps`
 *
 * @param properties - the TypeScript properties of a `RosAlarmContactProps`
 *
 * @returns the result of the validation.
 */
function RosAlarmContactPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('alarmContactName', ros.requiredValidator)(properties.alarmContactName));
    errors.collect(ros.propertyValidator('alarmContactName', ros.validateString)(properties.alarmContactName));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosAlarmContactPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosAlarmContact extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            alarmContactName: this.alarmContactName,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosAlarmContactPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAlarmContact = RosAlarmContact;
/**
 * The resource type name for this resource class.
 */
RosAlarmContact.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::AlarmContact";
/**
 * Determine whether the given properties match those of a `RosAlarmContactsProps`
 *
 * @param properties - the TypeScript properties of a `RosAlarmContactsProps`
 *
 * @returns the result of the validation.
 */
function RosAlarmContactsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('alarmContactName', ros.validateString)(properties.alarmContactName));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosAlarmContactsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosAlarmContactsPropsValidator(properties).assertSuccess();
    }
    return {
        'AlarmContactName': ros.stringToRosTemplate(properties.alarmContactName),
        'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::AlarmContacts`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlarmContacts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
 */
class RosAlarmContacts extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosAlarmContacts.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAlarmContactNames = this.getAtt('AlarmContactNames');
        this.attrAlarmContacts = this.getAtt('AlarmContacts');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.alarmContactName = props.alarmContactName;
        this.refreshOptions = props.refreshOptions;
    }
    get rosProperties() {
        return {
            alarmContactName: this.alarmContactName,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosAlarmContactsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosAlarmContacts = RosAlarmContacts;
/**
 * The resource type name for this resource class.
 */
RosAlarmContacts.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::AlarmContacts";
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
    errors.collect(ros.propertyValidator('groupId', ros.requiredValidator)(properties.groupId));
    errors.collect(ros.propertyValidator('groupId', ros.validateNumber)(properties.groupId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
function rosMonitorGroupPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosMonitorGroupPropsValidator(properties).assertSuccess();
    }
    return {
        'GroupId': ros.numberToRosTemplate(properties.groupId),
        'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::MonitorGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MonitorGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroup
 */
class RosMonitorGroup extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            groupId: this.groupId,
            refreshOptions: this.refreshOptions,
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
RosMonitorGroup.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::MonitorGroup";
/**
 * Determine whether the given properties match those of a `RosMonitorGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosMonitorGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosMonitorGroupsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('dynamicTagRuleId', ros.validateString)(properties.dynamicTagRuleId));
    errors.collect(ros.propertyValidator('monitorGroupName', ros.validateString)(properties.monitorGroupName));
    errors.collect(ros.propertyValidator('groupId', ros.validateNumber)(properties.groupId));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
function rosMonitorGroupsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosMonitorGroups extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            dynamicTagRuleId: this.dynamicTagRuleId,
            groupId: this.groupId,
            monitorGroupName: this.monitorGroupName,
            refreshOptions: this.refreshOptions,
            type: this.type,
        };
    }
    renderProperties(props) {
        return rosMonitorGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosMonitorGroups = RosMonitorGroups;
/**
 * The resource type name for this resource class.
 */
RosMonitorGroups.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::MonitorGroups";
/**
 * Determine whether the given properties match those of a `RosNamespaceProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosNamespacePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosNamespace extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
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
    get rosProperties() {
        return {
            namespace: this.namespace,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosNamespacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNamespace = RosNamespace;
/**
 * The resource type name for this resource class.
 */
RosNamespace.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::Namespace";
/**
 * Determine whether the given properties match those of a `RosNamespacesProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespacesProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacesPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosNamespacesPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosNamespaces extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosNamespaces.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNamespaces = this.getAtt('Namespaces');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.namespace = props.namespace;
        this.refreshOptions = props.refreshOptions;
    }
    get rosProperties() {
        return {
            namespace: this.namespace,
            refreshOptions: this.refreshOptions,
        };
    }
    renderProperties(props) {
        return rosNamespacesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosNamespaces = RosNamespaces;
/**
 * The resource type name for this resource class.
 */
RosNamespaces.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::Namespaces";
/**
 * Determine whether the given properties match those of a `RosSlsGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosSlsGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosSlsGroupsPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('slsGroupName', ros.validateString)(properties.slsGroupName));
    if (properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
            data: properties.refreshOptions,
            allowedValues: ["Always", "Never"],
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
function rosSlsGroupsPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
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
class RosSlsGroups extends ros.RosResource {
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosSlsGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSlsGroupNames = this.getAtt('SlsGroupNames');
        this.attrSlsGroups = this.getAtt('SlsGroups');
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.slsGroupName = props.slsGroupName;
    }
    get rosProperties() {
        return {
            refreshOptions: this.refreshOptions,
            slsGroupName: this.slsGroupName,
        };
    }
    renderProperties(props) {
        return rosSlsGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosSlsGroups = RosSlsGroups;
/**
 * The resource type name for this resource class.
 */
RosSlsGroups.ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::SlsGroups";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNtcy5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQXNCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyw2QkFBNkIsQ0FBQyxVQUFlO0lBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDOUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0csSUFBRyxVQUFVLENBQUMsY0FBYyxJQUFJLENBQUMsT0FBTyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzdFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2hGLElBQUksRUFBRSxVQUFVLENBQUMsY0FBYztZQUMvQixhQUFhLEVBQUUsQ0FBQyxRQUFRLEVBQUMsT0FBTyxDQUFDO1NBQ2xDLENBQUMsQ0FBQyxDQUFDO0tBQ1A7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENB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Y0FBYyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztJQUMzQyxDQUFDO0lBR0QsSUFBYyxhQUFhO1FBQ3ZCLE9BQU87WUFDSCxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ2xDLENBQUM7SUFDTixDQUFDO0lBQ1MsZ0JBQWdCLENBQUMsS0FBMkI7UUFDbEQsT0FBTyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7QUF4REwsb0NBeURDO0FBeERHOztHQUVHO0FBQ29CLG1DQUFzQixHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5cbmltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NBbGFybUNvbnRhY3RgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNtcy1hbGFybWNvbnRhY3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NBbGFybUNvbnRhY3RQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWxhcm1Db250YWN0TmFtZTogQWxhcm1Db250YWN0TmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhbGFybUNvbnRhY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmcmVzaE9wdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQWxhcm1Db250YWN0UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FsYXJtQ29udGFjdFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0FsYXJtQ29udGFjdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYWxhcm1Db250YWN0TmFtZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5hbGFybUNvbnRhY3ROYW1lKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGFybUNvbnRhY3ROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFsYXJtQ29udGFjdE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBbHdheXNcIixcIk5ldmVyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQWxhcm1Db250YWN0UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDTVM6OkFsYXJtQ29udGFjdGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQWxhcm1Db250YWN0UHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDTVM6OkFsYXJtQ29udGFjdGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NBbGFybUNvbnRhY3RQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0FsYXJtQ29udGFjdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdBbGFybUNvbnRhY3ROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hbGFybUNvbnRhY3ROYW1lKSxcbiAgICAgICdSZWZyZXNoT3B0aW9ucyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpDTVM6OkFsYXJtQ29udGFjdGAsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgdGhlIGluZm9ybWF0aW9uIGFib3V0IGFuIGFsZXJ0IGNvbnRhY3QuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYEFsYXJtQ29udGFjdGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNtcy1hbGFybWNvbnRhY3RcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FsYXJtQ29udGFjdCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OkNNUzo6QWxhcm1Db250YWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEFsYXJtQ29udGFjdE5hbWU6IEFsYXJtQ29udGFjdE5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBbGFybUNvbnRhY3ROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENoYW5uZWxzQWxpSW06IENoYW5uZWxzQWxpSW0uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDaGFubmVsc0FsaUltOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENoYW5uZWxzRGluZ1dlYkhvb2s6IENoYW5uZWxzRGluZ1dlYkhvb2suXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDaGFubmVsc0RpbmdXZWJIb29rOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENoYW5uZWxzTWFpbDogQ2hhbm5lbHNNYWlsLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2hhbm5lbHNNYWlsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENoYW5uZWxzU21zOiBDaGFubmVsc1NNUy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNoYW5uZWxzU21zOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENoYW5uZWxzU3RhdGVBbGlJbTogQ2hhbm5lbHNTdGF0ZUFsaUltLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2hhbm5lbHNTdGF0ZUFsaUltOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENoYW5uZWxzU3RhdGVEaW5nV2ViSG9vazogQ2hhbm5lbHNTdGF0ZURpbmdXZWJIb29rLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2hhbm5lbHNTdGF0ZURpbmdXZWJIb29rOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENoYW5uZWxzU3RhdGVNYWlsOiBDaGFubmVsc1N0YXRlTWFpbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNoYW5uZWxzU3RhdGVNYWlsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENoYW5uZWxzU3RhdGVTbXM6IENoYW5uZWxzU3RhdGVTTVMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDaGFubmVsc1N0YXRlU21zOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENvbnRhY3RHcm91cHM6IENvbnRhY3RHcm91cHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb250YWN0R3JvdXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENyZWF0ZVRpbWU6IENyZWF0ZVRpbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIERlc2NyaWJlOiBEZXNjcmliZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlc2NyaWJlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIExhbmc6IFRoZSBsYW5ndWFnZSB0eXBlIG9mIHRoZSBhbGFybS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxhbmc6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgVXBkYXRlVGltZTogVXBkYXRlVGltZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVwZGF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsYXJtQ29udGFjdE5hbWU6IEFsYXJtQ29udGFjdE5hbWUuXG4gICAgICovXG4gICAgcHVibGljIGFsYXJtQ29udGFjdE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaE9wdGlvbnM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NBbGFybUNvbnRhY3RQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0FsYXJtQ29udGFjdC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQWxhcm1Db250YWN0TmFtZSA9IHRoaXMuZ2V0QXR0KCdBbGFybUNvbnRhY3ROYW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckNoYW5uZWxzQWxpSW0gPSB0aGlzLmdldEF0dCgnQ2hhbm5lbHNBbGlJbScpO1xuICAgICAgICB0aGlzLmF0dHJDaGFubmVsc0RpbmdXZWJIb29rID0gdGhpcy5nZXRBdHQoJ0NoYW5uZWxzRGluZ1dlYkhvb2snKTtcbiAgICAgICAgdGhpcy5hdHRyQ2hhbm5lbHNNYWlsID0gdGhpcy5nZXRBdHQoJ0NoYW5uZWxzTWFpbCcpO1xuICAgICAgICB0aGlzLmF0dHJDaGFubmVsc1NtcyA9IHRoaXMuZ2V0QXR0KCdDaGFubmVsc1NtcycpO1xuICAgICAgICB0aGlzLmF0dHJDaGFubmVsc1N0YXRlQWxpSW0gPSB0aGlzLmdldEF0dCgnQ2hhbm5lbHNTdGF0ZUFsaUltJyk7XG4gICAgICAgIHRoaXMuYXR0ckNoYW5uZWxzU3RhdGVEaW5nV2ViSG9vayA9IHRoaXMuZ2V0QXR0KCdDaGFubmVsc1N0YXRlRGluZ1dlYkhvb2snKTtcbiAgICAgICAgdGhpcy5hdHRyQ2hhbm5lbHNTdGF0ZU1haWwgPSB0aGlzLmdldEF0dCgnQ2hhbm5lbHNTdGF0ZU1haWwnKTtcbiAgICAgICAgdGhpcy5hdHRyQ2hhbm5lbHNTdGF0ZVNtcyA9IHRoaXMuZ2V0QXR0KCdDaGFubmVsc1N0YXRlU21zJyk7XG4gICAgICAgIHRoaXMuYXR0ckNvbnRhY3RHcm91cHMgPSB0aGlzLmdldEF0dCgnQ29udGFjdEdyb3VwcycpO1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gdGhpcy5nZXRBdHQoJ0NyZWF0ZVRpbWUnKTtcbiAgICAgICAgdGhpcy5hdHRyRGVzY3JpYmUgPSB0aGlzLmdldEF0dCgnRGVzY3JpYmUnKTtcbiAgICAgICAgdGhpcy5hdHRyTGFuZyA9IHRoaXMuZ2V0QXR0KCdMYW5nJyk7XG4gICAgICAgIHRoaXMuYXR0clVwZGF0ZVRpbWUgPSB0aGlzLmdldEF0dCgnVXBkYXRlVGltZScpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5hbGFybUNvbnRhY3ROYW1lID0gcHJvcHMuYWxhcm1Db250YWN0TmFtZTtcbiAgICAgICAgdGhpcy5yZWZyZXNoT3B0aW9ucyA9IHByb3BzLnJlZnJlc2hPcHRpb25zO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFsYXJtQ29udGFjdE5hbWU6IHRoaXMuYWxhcm1Db250YWN0TmFtZSxcbiAgICAgICAgICAgIHJlZnJlc2hPcHRpb25zOiB0aGlzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NBbGFybUNvbnRhY3RQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NBbGFybUNvbnRhY3RzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jbXMtYWxhcm1jb250YWN0c1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0FsYXJtQ29udGFjdHNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYWxhcm1Db250YWN0TmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IGNvbnRhY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWxhcm1Db250YWN0TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWZyZXNoT3B0aW9ucz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NBbGFybUNvbnRhY3RzUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0FsYXJtQ29udGFjdHNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NBbGFybUNvbnRhY3RzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhbGFybUNvbnRhY3ROYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmFsYXJtQ29udGFjdE5hbWUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBbHdheXNcIixcIk5ldmVyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQWxhcm1Db250YWN0c1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q01TOjpBbGFybUNvbnRhY3RzYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NBbGFybUNvbnRhY3RzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDTVM6OkFsYXJtQ29udGFjdHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQWxhcm1Db250YWN0c1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQWxhcm1Db250YWN0c1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdBbGFybUNvbnRhY3ROYW1lJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hbGFybUNvbnRhY3ROYW1lKSxcbiAgICAgICdSZWZyZXNoT3B0aW9ucyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpDTVM6OkFsYXJtQ29udGFjdHNgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBBbGFybUNvbnRhY3RzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtY21zLWFsYXJtY29udGFjdHNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0FsYXJtQ29udGFjdHMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpDTVM6OkFsYXJtQ29udGFjdHNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQWxhcm1Db250YWN0TmFtZXM6IFRoZSBsaXN0IG9mIGFsYXJtIGNvbnRhY3QgbmFtZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBbGFybUNvbnRhY3ROYW1lczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBBbGFybUNvbnRhY3RzOiBUaGUgbGlzdCBvZiBhbGFybSBjb250YWN0cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsYXJtQ29udGFjdHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGFsYXJtQ29udGFjdE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBhbGFybUNvbnRhY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hPcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQWxhcm1Db250YWN0c1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQWxhcm1Db250YWN0cy5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQWxhcm1Db250YWN0TmFtZXMgPSB0aGlzLmdldEF0dCgnQWxhcm1Db250YWN0TmFtZXMnKTtcbiAgICAgICAgdGhpcy5hdHRyQWxhcm1Db250YWN0cyA9IHRoaXMuZ2V0QXR0KCdBbGFybUNvbnRhY3RzJyk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmFsYXJtQ29udGFjdE5hbWUgPSBwcm9wcy5hbGFybUNvbnRhY3ROYW1lO1xuICAgICAgICB0aGlzLnJlZnJlc2hPcHRpb25zID0gcHJvcHMucmVmcmVzaE9wdGlvbnM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxhcm1Db250YWN0TmFtZTogdGhpcy5hbGFybUNvbnRhY3ROYW1lLFxuICAgICAgICAgICAgcmVmcmVzaE9wdGlvbnM6IHRoaXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0FsYXJtQ29udGFjdHNQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3NNb25pdG9yR3JvdXBgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNtcy1tb25pdG9yZ3JvdXBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NNb25pdG9yR3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogR3JvdXBJZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cElkOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmcmVzaE9wdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTW9uaXRvckdyb3VwUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc01vbml0b3JHcm91cFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01vbml0b3JHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ3JvdXBJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5ncm91cElkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdncm91cElkJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmdyb3VwSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBbHdheXNcIixcIk5ldmVyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTW9uaXRvckdyb3VwUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDTVM6Ok1vbml0b3JHcm91cGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTW9uaXRvckdyb3VwUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDTVM6Ok1vbml0b3JHcm91cGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNb25pdG9yR3JvdXBQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc01vbml0b3JHcm91cFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdHcm91cElkJzogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5ncm91cElkKSxcbiAgICAgICdSZWZyZXNoT3B0aW9ucyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpDTVM6Ok1vbml0b3JHcm91cGAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYE1vbml0b3JHcm91cGAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNtcy1tb25pdG9yZ3JvdXBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc01vbml0b3JHcm91cCBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OkNNUzo6TW9uaXRvckdyb3VwXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEJpbmRVcmw6IEJpbmRVcmwuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJCaW5kVXJsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENvbnRhY3RHcm91cHM6IEFsYXJtQ29udGFjdEdyb3VwTmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbnRhY3RHcm91cHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgQ3JlYXRlVGltZTogR210Q3JlYXRlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEeW5hbWljVGFnUnVsZUlkOiBEeW5hbWljVGFnUnVsZUlkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRHluYW1pY1RhZ1J1bGVJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHbXRNb2RpZmllZDogR210TW9kaWZpZWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHbXRNb2RpZmllZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBHcm91cElkOiBHcm91cElkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNb25pdG9yR3JvdXBOYW1lOiBNb25pdG9yR3JvdXBOYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTW9uaXRvckdyb3VwTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTZXJ2aWNlSWQ6IFNlcnZpY2VJZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUYWdzOiBUYWdzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVGFnczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUZW1wbGF0ZUlkczogVGVtcGxhdGVJZHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUZW1wbGF0ZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBUeXBlOiBUeXBlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ3JvdXBJZDogR3JvdXBJZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ3JvdXBJZDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWZyZXNoT3B0aW9uczogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc01vbml0b3JHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zTW9uaXRvckdyb3VwLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJCaW5kVXJsID0gdGhpcy5nZXRBdHQoJ0JpbmRVcmwnKTtcbiAgICAgICAgdGhpcy5hdHRyQ29udGFjdEdyb3VwcyA9IHRoaXMuZ2V0QXR0KCdDb250YWN0R3JvdXBzJyk7XG4gICAgICAgIHRoaXMuYXR0ckNyZWF0ZVRpbWUgPSB0aGlzLmdldEF0dCgnQ3JlYXRlVGltZScpO1xuICAgICAgICB0aGlzLmF0dHJEeW5hbWljVGFnUnVsZUlkID0gdGhpcy5nZXRBdHQoJ0R5bmFtaWNUYWdSdWxlSWQnKTtcbiAgICAgICAgdGhpcy5hdHRyR210TW9kaWZpZWQgPSB0aGlzLmdldEF0dCgnR210TW9kaWZpZWQnKTtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBJZCA9IHRoaXMuZ2V0QXR0KCdHcm91cElkJyk7XG4gICAgICAgIHRoaXMuYXR0ck1vbml0b3JHcm91cE5hbWUgPSB0aGlzLmdldEF0dCgnTW9uaXRvckdyb3VwTmFtZScpO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlSWQgPSB0aGlzLmdldEF0dCgnU2VydmljZUlkJyk7XG4gICAgICAgIHRoaXMuYXR0clRhZ3MgPSB0aGlzLmdldEF0dCgnVGFncycpO1xuICAgICAgICB0aGlzLmF0dHJUZW1wbGF0ZUlkcyA9IHRoaXMuZ2V0QXR0KCdUZW1wbGF0ZUlkcycpO1xuICAgICAgICB0aGlzLmF0dHJUeXBlID0gdGhpcy5nZXRBdHQoJ1R5cGUnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZ3JvdXBJZCA9IHByb3BzLmdyb3VwSWQ7XG4gICAgICAgIHRoaXMucmVmcmVzaE9wdGlvbnMgPSBwcm9wcy5yZWZyZXNoT3B0aW9ucztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBncm91cElkOiB0aGlzLmdyb3VwSWQsXG4gICAgICAgICAgICByZWZyZXNoT3B0aW9uczogdGhpcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zTW9uaXRvckdyb3VwUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zTW9uaXRvckdyb3Vwc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtY21zLW1vbml0b3Jncm91cHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NNb25pdG9yR3JvdXBzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGR5bmFtaWNUYWdSdWxlSWQ6IFRoZSBJRCBvZiB0aGUgdGFnIHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZHluYW1pY1RhZ1J1bGVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgSURzIG9mIHRoZSBhcHBsaWNhdGlvbiBncm91cHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBJZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb25pdG9yR3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYXBwbGljYXRpb24gZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9uaXRvckdyb3VwTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWZyZXNoT3B0aW9ucz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBUaGUgdHlwZSBvZiB0aGUgYXBwbGljYXRpb24gZ3JvdXAuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBjdXN0b206IGEgc2VsZi1tYW5hZ2VkIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqIGVocGNfY2x1c3RlcjogYW4gYXBwbGljYXRpb24gZ3JvdXAgdGhhdCBpcyBzeW5jaHJvbml6ZWQgZnJvbSBhbiBFbGFzdGljIEhpZ2ggUGVyZm9ybWFuY2UgQ29tcHV0aW5nIChFLUhQQykgY2x1c3Rlci5cbiAgICAgKiBrdWJlcm5ldGVzOiBhbiBhcHBsaWNhdGlvbiBncm91cCB0aGF0IGlzIHN5bmNocm9uaXplZCBmcm9tIGEgQ29udGFpbmVyIFNlcnZpY2UgZm9yIEt1YmVybmV0ZXMgKEFDSykgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSB0eXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc01vbml0b3JHcm91cHNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTW9uaXRvckdyb3Vwc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc01vbml0b3JHcm91cHNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3R5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMudHlwZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZHluYW1pY1RhZ1J1bGVJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5keW5hbWljVGFnUnVsZUlkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdtb25pdG9yR3JvdXBOYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm1vbml0b3JHcm91cE5hbWUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dyb3VwSWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuZ3JvdXBJZCkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWZyZXNoT3B0aW9ucycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkFsd2F5c1wiLFwiTmV2ZXJcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWZyZXNoT3B0aW9ucycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NNb25pdG9yR3JvdXBzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDTVM6Ok1vbml0b3JHcm91cHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc01vbml0b3JHcm91cHNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkNNUzo6TW9uaXRvckdyb3Vwc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NNb25pdG9yR3JvdXBzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NNb25pdG9yR3JvdXBzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ0R5bmFtaWNUYWdSdWxlSWQnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmR5bmFtaWNUYWdSdWxlSWQpLFxuICAgICAgJ0dyb3VwSWQnOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdyb3VwSWQpLFxuICAgICAgJ01vbml0b3JHcm91cE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm1vbml0b3JHcm91cE5hbWUpLFxuICAgICAgJ1JlZnJlc2hPcHRpb25zJzogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyksXG4gICAgICAnVHlwZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMudHlwZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkNNUzo6TW9uaXRvckdyb3Vwc2AsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgdGhlIGluZm9ybWF0aW9uIGFib3V0IGFwcGxpY2F0aW9uIGdyb3Vwcy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgZG9lcyBub3QgY29udGFpbiBhZGRpdGlvbmFsIGZ1bmN0aW9ucywgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgTW9uaXRvckdyb3Vwc2AgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNtcy1tb25pdG9yZ3JvdXBzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NNb25pdG9yR3JvdXBzIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiREFUQVNPVVJDRTo6Q01TOjpNb25pdG9yR3JvdXBzXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIEdyb3VwSWRzOiBUaGUgbGlzdCBvZiBncm91cCBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHcm91cElkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBNb25pdG9yR3JvdXBzOiBUaGUgbGlzdCBvZiBtb25pdG9yIGdyb3Vwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck1vbml0b3JHcm91cHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGR5bmFtaWNUYWdSdWxlSWQ6IFRoZSBJRCBvZiB0aGUgdGFnIHJ1bGUuXG4gICAgICovXG4gICAgcHVibGljIGR5bmFtaWNUYWdSdWxlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBncm91cElkOiBUaGUgSURzIG9mIHRoZSBhcHBsaWNhdGlvbiBncm91cHMuXG4gICAgICovXG4gICAgcHVibGljIGdyb3VwSWQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBtb25pdG9yR3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgYXBwbGljYXRpb24gZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIG1vbml0b3JHcm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaE9wdGlvbnM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSB0eXBlOiBUaGUgdHlwZSBvZiB0aGUgYXBwbGljYXRpb24gZ3JvdXAuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBjdXN0b206IGEgc2VsZi1tYW5hZ2VkIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqIGVocGNfY2x1c3RlcjogYW4gYXBwbGljYXRpb24gZ3JvdXAgdGhhdCBpcyBzeW5jaHJvbml6ZWQgZnJvbSBhbiBFbGFzdGljIEhpZ2ggUGVyZm9ybWFuY2UgQ29tcHV0aW5nIChFLUhQQykgY2x1c3Rlci5cbiAgICAgKiBrdWJlcm5ldGVzOiBhbiBhcHBsaWNhdGlvbiBncm91cCB0aGF0IGlzIHN5bmNocm9uaXplZCBmcm9tIGEgQ29udGFpbmVyIFNlcnZpY2UgZm9yIEt1YmVybmV0ZXMgKEFDSykgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc01vbml0b3JHcm91cHNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc01vbml0b3JHcm91cHMuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwSWRzID0gdGhpcy5nZXRBdHQoJ0dyb3VwSWRzJyk7XG4gICAgICAgIHRoaXMuYXR0ck1vbml0b3JHcm91cHMgPSB0aGlzLmdldEF0dCgnTW9uaXRvckdyb3VwcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5keW5hbWljVGFnUnVsZUlkID0gcHJvcHMuZHluYW1pY1RhZ1J1bGVJZDtcbiAgICAgICAgdGhpcy5ncm91cElkID0gcHJvcHMuZ3JvdXBJZDtcbiAgICAgICAgdGhpcy5tb25pdG9yR3JvdXBOYW1lID0gcHJvcHMubW9uaXRvckdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy5yZWZyZXNoT3B0aW9ucyA9IHByb3BzLnJlZnJlc2hPcHRpb25zO1xuICAgICAgICB0aGlzLnR5cGUgPSBwcm9wcy50eXBlO1xuICAgIH1cblxuXG4gICAgcHJvdGVjdGVkIGdldCByb3NQcm9wZXJ0aWVzKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGR5bmFtaWNUYWdSdWxlSWQ6IHRoaXMuZHluYW1pY1RhZ1J1bGVJZCxcbiAgICAgICAgICAgIGdyb3VwSWQ6IHRoaXMuZ3JvdXBJZCxcbiAgICAgICAgICAgIG1vbml0b3JHcm91cE5hbWU6IHRoaXMubW9uaXRvckdyb3VwTmFtZSxcbiAgICAgICAgICAgIHJlZnJlc2hPcHRpb25zOiB0aGlzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NNb25pdG9yR3JvdXBzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zTmFtZXNwYWNlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jbXMtbmFtZXNwYWNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTmFtZXNwYWNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWVzcGFjZTogSW5kaWNhdG9yIHdhcmVob3VzZSBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZnJlc2hPcHRpb25zPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc05hbWVzcGFjZVByb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NOYW1lc3BhY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NOYW1lc3BhY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWVzcGFjZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5uYW1lc3BhY2UpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ25hbWVzcGFjZScsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5uYW1lc3BhY2UpKTtcbiAgICBpZihwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zICYmICh0eXBlb2YgcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJBbHdheXNcIixcIk5ldmVyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncmVmcmVzaE9wdGlvbnMnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zTmFtZXNwYWNlUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDTVM6Ok5hbWVzcGFjZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zTmFtZXNwYWNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDTVM6Ok5hbWVzcGFjZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NOYW1lc3BhY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc05hbWVzcGFjZVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICdOYW1lc3BhY2UnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWVzcGFjZSksXG4gICAgICAnUmVmcmVzaE9wdGlvbnMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgYSBiYXNlIGVuY2Fwc3VsYXRpb24gYXJvdW5kIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6Q01TOjpOYW1lc3BhY2VgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBpbmZvcm1hdGlvbiBhYm91dCBhIG5hbWVzcGFjZSBhbmQgdGhlIG1ldHJpYyBkYXRhIG9mIHRoZSBuYW1lc3BhY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIGRvZXMgbm90IGNvbnRhaW4gYWRkaXRpb25hbCBmdW5jdGlvbnMsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYE5hbWVzcGFjZWAgY2xhc3MgaW5zdGVhZCBvZiB0aGlzIGNsYXNzIGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNtcy1uYW1lc3BhY2VcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc05hbWVzcGFjZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkRBVEFTT1VSQ0U6OkNNUzo6TmFtZXNwYWNlXCI7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENyZWF0ZVRpbWU6IENyZWF0ZSB0aGUgdGltZXN0YW1wIG9mIHRoZSBpbmRpY2F0b3Igd2FyZWhvdXNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBEZXNjcmlwdGlvbjogRGVzY3JpcHRpb24gb2YgaW5kaWNhdG9yIHdhcmVob3VzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE1vZGlmeVRpbWU6IFRoZSB0aW1lc3RhbXAgb2YgdGhlIGxhc3QgbW9kaWZpY2F0aW9uIGluZGljYXRvciB3YXJlaG91c2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNb2RpZnlUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIE5hbWVzcGFjZTogSW5kaWNhdG9yIHdhcmVob3VzZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmFtZXNwYWNlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNwZWNpZmljYXRpb246IERhdGEgc3RvcmFnZSBkdXJhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNwZWNpZmljYXRpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWVzcGFjZTogSW5kaWNhdG9yIHdhcmVob3VzZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lc3BhY2U6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaE9wdGlvbnM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NOYW1lc3BhY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc05hbWVzcGFjZS5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHRoaXMuZ2V0QXR0KCdDcmVhdGVUaW1lJyk7XG4gICAgICAgIHRoaXMuYXR0ckRlc2NyaXB0aW9uID0gdGhpcy5nZXRBdHQoJ0Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRoaXMuYXR0ck1vZGlmeVRpbWUgPSB0aGlzLmdldEF0dCgnTW9kaWZ5VGltZScpO1xuICAgICAgICB0aGlzLmF0dHJOYW1lc3BhY2UgPSB0aGlzLmdldEF0dCgnTmFtZXNwYWNlJyk7XG4gICAgICAgIHRoaXMuYXR0clNwZWNpZmljYXRpb24gPSB0aGlzLmdldEF0dCgnU3BlY2lmaWNhdGlvbicpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5uYW1lc3BhY2UgPSBwcm9wcy5uYW1lc3BhY2U7XG4gICAgICAgIHRoaXMucmVmcmVzaE9wdGlvbnMgPSBwcm9wcy5yZWZyZXNoT3B0aW9ucztcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lc3BhY2U6IHRoaXMubmFtZXNwYWNlLFxuICAgICAgICAgICAgcmVmcmVzaE9wdGlvbnM6IHRoaXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc05hbWVzcGFjZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFJvc05hbWVzcGFjZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWNtcy1uYW1lc3BhY2VzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zTmFtZXNwYWNlc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lc3BhY2U6IEluZGljYXRvciB3YXJlaG91c2UgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lc3BhY2U/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVmcmVzaE9wdGlvbnM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zTmFtZXNwYWNlc1Byb3BzYFxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NOYW1lc3BhY2VzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zTmFtZXNwYWNlc1Byb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbmFtZXNwYWNlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWVzcGFjZSkpO1xuICAgIGlmKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWZyZXNoT3B0aW9ucycsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkFsd2F5c1wiLFwiTmV2ZXJcIl0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdyZWZyZXNoT3B0aW9ucycsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucykpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NOYW1lc3BhY2VzUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBEQVRBU09VUkNFOjpDTVM6Ok5hbWVzcGFjZXNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc05hbWVzcGFjZXNQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYERBVEFTT1VSQ0U6OkNNUzo6TmFtZXNwYWNlc2AgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NOYW1lc3BhY2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NOYW1lc3BhY2VzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllcykuYXNzZXJ0U3VjY2VzcygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgJ05hbWVzcGFjZSc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMubmFtZXNwYWNlKSxcbiAgICAgICdSZWZyZXNoT3B0aW9ucyc6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpLFxuICAgIH07XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyBhIGJhc2UgZW5jYXBzdWxhdGlvbiBhcm91bmQgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpDTVM6Ok5hbWVzcGFjZXNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IHRoZSBpbmZvcm1hdGlvbiBhYm91dCBuYW1lc3BhY2VzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBOYW1lc3BhY2VzYCBjbGFzcyBpbnN0ZWFkIG9mIHRoaXMgY2xhc3MgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtY21zLW5hbWVzcGFjZXNcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc05hbWVzcGFjZXMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpDTVM6Ok5hbWVzcGFjZXNcIjtcblxuICAgIC8qKlxuICAgICAqIEBBdHRyaWJ1dGUgTmFtZXNwYWNlczogVGhlIGxpc3Qgb2YgbmFtZXNwYWNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5hbWVzcGFjZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWVzcGFjZTogSW5kaWNhdG9yIHdhcmVob3VzZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lc3BhY2U6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVmcmVzaE9wdGlvbnM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZSB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NOYW1lc3BhY2VzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0eXBlOiBSb3NOYW1lc3BhY2VzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJOYW1lc3BhY2VzID0gdGhpcy5nZXRBdHQoJ05hbWVzcGFjZXMnKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMubmFtZXNwYWNlID0gcHJvcHMubmFtZXNwYWNlO1xuICAgICAgICB0aGlzLnJlZnJlc2hPcHRpb25zID0gcHJvcHMucmVmcmVzaE9wdGlvbnM7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZXNwYWNlOiB0aGlzLm5hbWVzcGFjZSxcbiAgICAgICAgICAgIHJlZnJlc2hPcHRpb25zOiB0aGlzLnJlZnJlc2hPcHRpb25zLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUHJvcGVydGllcyhwcm9wczoge1trZXk6IHN0cmluZ106IGFueX0pOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiByb3NOYW1lc3BhY2VzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUm9zU2xzR3JvdXBzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jbXMtc2xzZ3JvdXBzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zU2xzR3JvdXBzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZnJlc2hPcHRpb25zPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IHNsc0dyb3VwTmFtZTogVGhlIG5hbWUgb2YgdGhlIExvZ3N0b3JlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNsc0dyb3VwTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NTbHNHcm91cHNQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zU2xzR3JvdXBzUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zU2xzR3JvdXBzUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdzbHNHcm91cE5hbWUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuc2xzR3JvdXBOYW1lKSk7XG4gICAgaWYocHJvcGVydGllcy5yZWZyZXNoT3B0aW9ucyAmJiAodHlwZW9mIHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucmVmcmVzaE9wdGlvbnMsXG4gICAgICAgICAgYWxsb3dlZFZhbHVlczogW1wiQWx3YXlzXCIsXCJOZXZlclwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ3JlZnJlc2hPcHRpb25zJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSk7XG4gICAgcmV0dXJuIGVycm9ycy53cmFwKCdzdXBwbGllZCBwcm9wZXJ0aWVzIG5vdCBjb3JyZWN0IGZvciBcIlJvc1Nsc0dyb3Vwc1Byb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q01TOjpTbHNHcm91cHNgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1Nsc0dyb3Vwc1Byb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgREFUQVNPVVJDRTo6Q01TOjpTbHNHcm91cHNgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zU2xzR3JvdXBzUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NTbHNHcm91cHNQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAnUmVmcmVzaE9wdGlvbnMnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnJlZnJlc2hPcHRpb25zKSxcbiAgICAgICdTbHNHcm91cE5hbWUnOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnNsc0dyb3VwTmFtZSksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIGEgYmFzZSBlbmNhcHN1bGF0aW9uIGFyb3VuZCB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OkNNUzo6U2xzR3JvdXBzYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgaW5mb3JtYXRpb24gYWJvdXQgTG9nc3RvcmUgZ3JvdXBzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBkb2VzIG5vdCBjb250YWluIGFkZGl0aW9uYWwgZnVuY3Rpb25zLCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGBTbHNHcm91cHNgIGNsYXNzIGluc3RlYWQgb2YgdGhpcyBjbGFzcyBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1jbXMtc2xzZ3JvdXBzXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NTbHNHcm91cHMgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJEQVRBU09VUkNFOjpDTVM6OlNsc0dyb3Vwc1wiO1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBTbHNHcm91cE5hbWVzOiBUaGUgbGlzdCBvZiBzbHMgZ3JvdXAgbmFtZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTbHNHcm91cE5hbWVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIFNsc0dyb3VwczogVGhlIGxpc3Qgb2Ygc2xzIGdyb3Vwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNsc0dyb3Vwczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcmVmcmVzaE9wdGlvbnM6IFRoZSByZWZyZXNoIHN0cmF0ZWd5IGZvciB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogLSBOZXZlcjogTmV2ZXIgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIC0gQWx3YXlzOiBBbHdheXMgcmVmcmVzaCB0aGUgZGF0YXNvdXJjZSByZXNvdXJjZSB3aGVuIHRoZSBzdGFjayBpcyB1cGRhdGVkLlxuICAgICAqIERlZmF1bHQgaXMgTmV2ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlZnJlc2hPcHRpb25zOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgc2xzR3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgTG9nc3RvcmUgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHNsc0dyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1Nsc0dyb3Vwc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zU2xzR3JvdXBzLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuICAgICAgICB0aGlzLmF0dHJTbHNHcm91cE5hbWVzID0gdGhpcy5nZXRBdHQoJ1Nsc0dyb3VwTmFtZXMnKTtcbiAgICAgICAgdGhpcy5hdHRyU2xzR3JvdXBzID0gdGhpcy5nZXRBdHQoJ1Nsc0dyb3VwcycpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5yZWZyZXNoT3B0aW9ucyA9IHByb3BzLnJlZnJlc2hPcHRpb25zO1xuICAgICAgICB0aGlzLnNsc0dyb3VwTmFtZSA9IHByb3BzLnNsc0dyb3VwTmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWZyZXNoT3B0aW9uczogdGhpcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICAgIHNsc0dyb3VwTmFtZTogdGhpcy5zbHNHcm91cE5hbWUsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1Nsc0dyb3Vwc1Byb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuIl19