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
 * A ROS template type:  `DATASOURCE::CMS::AlarmContacts`
 */
export declare class RosAlarmContacts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::AlarmContacts";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::CMS::AlarmContacts`.
     *
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
 * A ROS template type:  `DATASOURCE::CMS::MonitorGroups`
 */
export declare class RosMonitorGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::MonitorGroups";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property type: The type of the application group. Valid values:
     * custom: a self-managed application group.
     * ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
     * kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
     */
    type: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CMS::MonitorGroups`.
     *
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
 * Properties for defining a `DATASOURCE::CMS::Namespaces`
 */
export interface RosNamespacesProps {
    /**
     * @Property namespace: Indicator warehouse name.
     */
    readonly namespace?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CMS::Namespaces`
 */
export declare class RosNamespaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::Namespaces";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::CMS::Namespaces`.
     *
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
 * Properties for defining a `DATASOURCE::CMS::SlsGroups`
 */
export interface RosSlsGroupsProps {
    /**
     * @Property slsGroupName: The name of the Logstore group.
     */
    readonly slsGroupName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CMS::SlsGroups`
 */
export declare class RosSlsGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CMS::SlsGroups";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * @Property slsGroupName: The name of the Logstore group.
     */
    slsGroupName: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CMS::SlsGroups`.
     *
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
