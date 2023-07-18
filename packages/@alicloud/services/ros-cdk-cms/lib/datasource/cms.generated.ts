// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::CMS::AlarmContacts`
 */
export interface RosAlarmContactsProps {

    /**
     * @Property alarmContactName: The name of the alert contact.
     */
    readonly alarmContactName?: string | ros.IResolvable;
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
      AlarmContactName: ros.stringToRosTemplate(properties.alarmContactName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::CMS::AlarmContacts`
 */
export class RosAlarmContacts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::AlarmContacts";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `DATASOURCE::CMS::AlarmContacts`.
     *
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
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            alarmContactName: this.alarmContactName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAlarmContactsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::CMS::MonitorGroups`
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
      DynamicTagRuleId: ros.stringToRosTemplate(properties.dynamicTagRuleId),
      GroupId: ros.numberToRosTemplate(properties.groupId),
      MonitorGroupName: ros.stringToRosTemplate(properties.monitorGroupName),
      Type: ros.stringToRosTemplate(properties.type),
    };
}

/**
 * A ROS template type:  `DATASOURCE::CMS::MonitorGroups`
 */
export class RosMonitorGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::MonitorGroups";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * @Property type: The type of the application group. Valid values:
     * custom: a self-managed application group.
     * ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
     * kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::CMS::MonitorGroups`.
     *
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
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dynamicTagRuleId: this.dynamicTagRuleId,
            groupId: this.groupId,
            monitorGroupName: this.monitorGroupName,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMonitorGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::CMS::Namespaces`
 */
export interface RosNamespacesProps {

    /**
     * @Property namespace: Indicator warehouse name.
     */
    readonly namespace?: string | ros.IResolvable;
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
      Namespace: ros.stringToRosTemplate(properties.namespace),
    };
}

/**
 * A ROS template type:  `DATASOURCE::CMS::Namespaces`
 */
export class RosNamespaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::Namespaces";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `DATASOURCE::CMS::Namespaces`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespacesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespaces.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNamespaces = this.getAtt('Namespaces');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.namespace = props.namespace;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            namespace: this.namespace,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNamespacesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::CMS::SlsGroups`
 */
export interface RosSlsGroupsProps {

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
      SlsGroupName: ros.stringToRosTemplate(properties.slsGroupName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::CMS::SlsGroups`
 */
export class RosSlsGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::SlsGroups";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * @Property slsGroupName: The name of the Logstore group.
     */
    public slsGroupName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::CMS::SlsGroups`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSlsGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSlsGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSlsGroupNames = this.getAtt('SlsGroupNames');
        this.attrSlsGroups = this.getAtt('SlsGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.slsGroupName = props.slsGroupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            slsGroupName: this.slsGroupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSlsGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
