import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAlarmContacts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
 */
export interface RosAlarmContactsProps {
    /**
     * @Property alarmContactName: The name of the alert contact.
     */
    readonly alarmContactName?: string | ros.IResolvable;
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
 * Properties for defining a `RosNamespaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-namespaces
 */
export interface RosNamespacesProps {
    /**
     * @Property namespace: Indicator warehouse name.
     */
    readonly namespace?: string | ros.IResolvable;
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
