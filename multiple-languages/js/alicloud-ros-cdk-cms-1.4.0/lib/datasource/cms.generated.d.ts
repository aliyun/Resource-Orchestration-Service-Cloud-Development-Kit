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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::AlarmContact`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlarmContact` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontact
 */
export declare class RosAlarmContact extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::AlarmContact";
    /**
     * @Attribute AlarmContactName: AlarmContactName.
     */
    readonly attrAlarmContactName: ros.IResolvable;
    /**
     * @Attribute ChannelsAliIm: ChannelsAliIM.
     */
    readonly attrChannelsAliIm: ros.IResolvable;
    /**
     * @Attribute ChannelsDingWebHook: ChannelsDingWebHook.
     */
    readonly attrChannelsDingWebHook: ros.IResolvable;
    /**
     * @Attribute ChannelsMail: ChannelsMail.
     */
    readonly attrChannelsMail: ros.IResolvable;
    /**
     * @Attribute ChannelsSms: ChannelsSMS.
     */
    readonly attrChannelsSms: ros.IResolvable;
    /**
     * @Attribute ChannelsStateAliIm: ChannelsStateAliIM.
     */
    readonly attrChannelsStateAliIm: ros.IResolvable;
    /**
     * @Attribute ChannelsStateDingWebHook: ChannelsStateDingWebHook.
     */
    readonly attrChannelsStateDingWebHook: ros.IResolvable;
    /**
     * @Attribute ChannelsStateMail: ChannelsStateMail.
     */
    readonly attrChannelsStateMail: ros.IResolvable;
    /**
     * @Attribute ChannelsStateSms: ChannelsStateSMS.
     */
    readonly attrChannelsStateSms: ros.IResolvable;
    /**
     * @Attribute ContactGroups: ContactGroups.
     */
    readonly attrContactGroups: ros.IResolvable;
    /**
     * @Attribute CreateTime: CreateTime.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Describe: Describe.
     */
    readonly attrDescribe: ros.IResolvable;
    /**
     * @Attribute Lang: The language type of the alarm.
     */
    readonly attrLang: ros.IResolvable;
    /**
     * @Attribute UpdateTime: UpdateTime.
     */
    readonly attrUpdateTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property alarmContactName: AlarmContactName.
     */
    alarmContactName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlarmContactProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::AlarmContacts`, which is used to query the basic information about alert contacts.
 * @Note This class does not contain additional functions, so it is recommended to use the `AlarmContacts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
 */
export declare class RosAlarmContacts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::AlarmContacts";
    /**
     * @Attribute AlarmContactNames: The list of alarm contact names.
     */
    readonly attrAlarmContactNames: ros.IResolvable;
    /**
     * @Attribute AlarmContacts: The list of alarm contacts.
     */
    readonly attrAlarmContacts: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property alarmContactName: The name of the alert contact.
     */
    alarmContactName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAlarmContactsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::MonitorGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MonitorGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroup
 */
export declare class RosMonitorGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::MonitorGroup";
    /**
     * @Attribute BindUrl: BindUrl.
     */
    readonly attrBindUrl: ros.IResolvable;
    /**
     * @Attribute ContactGroups: AlarmContactGroupName.
     */
    readonly attrContactGroups: ros.IResolvable;
    /**
     * @Attribute CreateTime: GmtCreate.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DynamicTagRuleId: DynamicTagRuleId.
     */
    readonly attrDynamicTagRuleId: ros.IResolvable;
    /**
     * @Attribute GmtModified: GmtModified.
     */
    readonly attrGmtModified: ros.IResolvable;
    /**
     * @Attribute GroupId: GroupId.
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * @Attribute MonitorGroupName: MonitorGroupName.
     */
    readonly attrMonitorGroupName: ros.IResolvable;
    /**
     * @Attribute ServiceId: ServiceId.
     */
    readonly attrServiceId: ros.IResolvable;
    /**
     * @Attribute Tags: Tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute TemplateIds: TemplateIds.
     */
    readonly attrTemplateIds: ros.IResolvable;
    /**
     * @Attribute Type: Type.
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property groupId: GroupId.
     */
    groupId: number | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::MonitorGroups`, which is used to query the basic information about application groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `MonitorGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroups
 */
export declare class RosMonitorGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::MonitorGroups";
    /**
     * @Attribute GroupIds: The list of group IDs.
     */
    readonly attrGroupIds: ros.IResolvable;
    /**
     * @Attribute MonitorGroups: The list of monitor groups.
     */
    readonly attrMonitorGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dynamicTagRuleId: The ID of the tag rule.
     */
    dynamicTagRuleId: string | ros.IResolvable | undefined;
    /**
     * @Property groupId: The IDs of the application groups.
     */
    groupId: number | ros.IResolvable | undefined;
    /**
     * @Property monitorGroupName: The name of the application group.
     */
    monitorGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property type: The type of the application group. Valid values:
     * custom: a self-managed application group.
     * ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
     * kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMonitorGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::Namespace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespace
 */
export declare class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::Namespace";
    /**
     * @Attribute CreateTime: Create the timestamp of the indicator warehouse.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: Description of indicator warehouse.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute ModifyTime: The timestamp of the last modification indicator warehouse.
     */
    readonly attrModifyTime: ros.IResolvable;
    /**
     * @Attribute Namespace: Indicator warehouse name.
     */
    readonly attrNamespace: ros.IResolvable;
    /**
     * @Attribute Specification: Data storage duration.
     */
    readonly attrSpecification: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property namespace: Indicator warehouse name.
     */
    namespace: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::Namespaces`, which is used to query the basic information about namespaces.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespaces
 */
export declare class RosNamespaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::Namespaces";
    /**
     * @Attribute Namespaces: The list of namespaces.
     */
    readonly attrNamespaces: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property namespace: Indicator warehouse name.
     */
    namespace: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespacesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CMS::SlsGroups`, which is used to query the basic information about Logstore groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `SlsGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-slsgroups
 */
export declare class RosSlsGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::SlsGroups";
    /**
     * @Attribute SlsGroupNames: The list of sls group names.
     */
    readonly attrSlsGroupNames: ros.IResolvable;
    /**
     * @Attribute SlsGroups: The list of sls groups.
     */
    readonly attrSlsGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property slsGroupName: The name of the Logstore group.
     */
    slsGroupName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSlsGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
