import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosGrafanaWorkspace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspace
 */
export interface RosGrafanaWorkspaceProps {
    /**
     * @Property grafanaWorkspaceId: The first ID of the resource.
     */
    readonly grafanaWorkspaceId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::GrafanaWorkspace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GrafanaWorkspace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspace
 */
export declare class RosGrafanaWorkspace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::GrafanaWorkspace";
    /**
     * @Attribute CreateTime: The time when the workspace was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: The description of the workspace.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute GrafanaVersion: The version number of Grafana.
     */
    readonly attrGrafanaVersion: ros.IResolvable;
    /**
     * @Attribute GrafanaWorkspaceEdition: The version of the workspace.
     */
    readonly attrGrafanaWorkspaceEdition: ros.IResolvable;
    /**
     * @Attribute GrafanaWorkspaceId: The ID of the workspace.
     */
    readonly attrGrafanaWorkspaceId: ros.IResolvable;
    /**
     * @Attribute GrafanaWorkspaceName: The workspace name.
     */
    readonly attrGrafanaWorkspaceName: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property grafanaWorkspaceId: The first ID of the resource.
     */
    grafanaWorkspaceId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosGrafanaWorkspaceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosGrafanaWorkspaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspaces
 */
export interface RosGrafanaWorkspacesProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the Prometheus instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::GrafanaWorkspaces`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GrafanaWorkspaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspaces
 */
export declare class RosGrafanaWorkspaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::GrafanaWorkspaces";
    /**
     * @Attribute GrafanaWorkspaceIds: The list of grafana workspace IDs.
     */
    readonly attrGrafanaWorkspaceIds: ros.IResolvable;
    /**
     * @Attribute GrafanaWorkspaces: The list of grafana workspaces.
     */
    readonly attrGrafanaWorkspaces: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the Prometheus instance belongs.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGrafanaWorkspacesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPrometheis`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
 */
export interface RosPrometheisProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::Prometheis`, which is used to query Prometheus instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `Prometheis` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheis
 */
export declare class RosPrometheis extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::Prometheis";
    /**
     * @Attribute ClusterIds: The list of cluster IDs.
     */
    readonly attrClusterIds: ros.IResolvable;
    /**
     * @Attribute Prometheis: The list of Prometheis.
     */
    readonly attrPrometheis: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheisProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPrometheus`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheus
 */
export interface RosPrometheusProps {
    /**
     * @Property clusterId: The ID of the Prometheus instance.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::Prometheus`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Prometheus` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheus
 */
export declare class RosPrometheus extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::Prometheus";
    /**
     * @Attribute ClusterId: The ID of the Prometheus instance.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ClusterType: The type of the instance.
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute GrafanaInstanceId: The ID of the Grafana workspace.
     */
    readonly attrGrafanaInstanceId: ros.IResolvable;
    /**
     * @Attribute PaymentType: The billing method.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * @Attribute PrometheusName: The name of the instance.
     */
    readonly attrPrometheusName: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: The ID of the security group. This parameter is returned only for Prometheus instances for ECS.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute SubClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    readonly attrSubClustersJson: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the instance.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute UserId: The user ID.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The vSwitch ID. This parameter is returned only for Prometheus instances for ECS.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: The VPC ID. This parameter is returned only for Prometheus instances for ECS.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: The ID of the Prometheus instance.
     */
    clusterId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosPrometheusProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPrometheusAuthToken`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken
 */
export interface RosPrometheusAuthTokenProps {
    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::PrometheusAuthToken`, which is used to query an authentication token for read and write over the Internet.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrometheusAuthToken` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken
 */
export declare class RosPrometheusAuthToken extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::PrometheusAuthToken";
    /**
     * @Attribute Token: The token for Grafana read URL.
     */
    readonly attrToken: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: Cluster ID.
     */
    clusterId: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosPrometheusAuthTokenProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPrometheusUrl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
 */
export interface RosPrometheusUrlProps {
    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::PrometheusUrl`, which is used to query all URLs of a cluster, including the URLs for remote read, remote write, Pushgateway, and Grafana.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrometheusUrl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
 */
export declare class RosPrometheusUrl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::PrometheusUrl";
    /**
     * @Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ClusterType: Cluster type.
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute GrafanaUrl: Internal HTTP API URL (Grafana read URL).
     */
    readonly attrGrafanaUrl: ros.IResolvable;
    /**
     * @Attribute InternetGrafanaUrl: Internet HTTP API URL (Grafana read URL).
     */
    readonly attrInternetGrafanaUrl: ros.IResolvable;
    /**
     * @Attribute InternetOpenTelemetryUrl: Internet OpenTelemetry URL.
     */
    readonly attrInternetOpenTelemetryUrl: ros.IResolvable;
    /**
     * @Attribute InternetPushGatewayUrl: Internet push gateway URL.
     */
    readonly attrInternetPushGatewayUrl: ros.IResolvable;
    /**
     * @Attribute InternetRemoteReadUrl: Internet remote read URL.
     */
    readonly attrInternetRemoteReadUrl: ros.IResolvable;
    /**
     * @Attribute InternetRemoteWriteUrl: Internet remote write URL.
     */
    readonly attrInternetRemoteWriteUrl: ros.IResolvable;
    /**
     * @Attribute OpenTelemetryUrl: Internal OpenTelemetry URL.
     */
    readonly attrOpenTelemetryUrl: ros.IResolvable;
    /**
     * @Attribute PushGatewayUrl: Internal push gateway URL.
     */
    readonly attrPushGatewayUrl: ros.IResolvable;
    /**
     * @Attribute RemoteReadUrl: Internal remote read URL.
     */
    readonly attrRemoteReadUrl: ros.IResolvable;
    /**
     * @Attribute RemoteWriteUrl: Internal remote write URL.
     */
    readonly attrRemoteWriteUrl: ros.IResolvable;
    /**
     * @Attribute Token: The token for Grafana read URL.
     */
    readonly attrToken: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: Cluster ID.
     */
    clusterId: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosPrometheusUrlProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSyntheticTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictask
 */
export interface RosSyntheticTaskProps {
    /**
     * @Property taskId: The ID of the synthetic monitoring task.
     */
    readonly taskId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::SyntheticTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SyntheticTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictask
 */
export declare class RosSyntheticTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::SyntheticTask";
    /**
     * @Attribute AvailableAssertions: The list of assertions.
     */
    readonly attrAvailableAssertions: ros.IResolvable;
    /**
     * @Attribute CommonSetting: The general settings.
     */
    readonly attrCommonSetting: ros.IResolvable;
    /**
     * @Attribute CustomPeriod: The custom cycle.
     */
    readonly attrCustomPeriod: ros.IResolvable;
    /**
     * @Attribute Frequency: The detection frequency.
     */
    readonly attrFrequency: ros.IResolvable;
    /**
     * @Attribute MonitorCategory: The detection point type. 1: PC. 2: mobile device.
     */
    readonly attrMonitorCategory: ros.IResolvable;
    /**
     * @Attribute MonitorConf: The monitoring configurations.
     */
    readonly attrMonitorConf: ros.IResolvable;
    /**
     * @Attribute Monitors: The list of monitoring points.
     */
    readonly attrMonitors: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SyntheticTaskName: The name of synthetic task.
     */
    readonly attrSyntheticTaskName: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the instance.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute TaskId: The ID of the synthetic monitoring task.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * @Attribute TaskType: The type of the task.
     */
    readonly attrTaskType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property taskId: The ID of the synthetic monitoring task.
     */
    taskId: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosSyntheticTaskProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosSyntheticTasks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictasks
 */
export interface RosSyntheticTasksProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::SyntheticTasks`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SyntheticTasks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictasks
 */
export declare class RosSyntheticTasks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::SyntheticTasks";
    /**
     * @Attribute SyntheticTasks: The list of synthetic tasks.
     */
    readonly attrSyntheticTasks: ros.IResolvable;
    /**
     * @Attribute TaskIds: The list of task IDs.
     */
    readonly attrTaskIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSyntheticTasksProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosXTraceApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapp
 */
export interface RosXTraceAppProps {
    /**
     * @Property pid: The process identifier (PID) of the application.
     */
    readonly pid: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::XTraceApp`.
 * @Note This class does not contain additional functions, so it is recommended to use the `XTraceApp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapp
 */
export declare class RosXTraceApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::XTraceApp";
    /**
     * @Attribute CreateTime: The timestamp generated when the task was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Pid: The process identifier (PID) of the application.
     */
    readonly attrPid: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the application.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute XTraceAppName: The name of the application.
     */
    readonly attrXTraceAppName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property pid: The process identifier (PID) of the application.
     */
    pid: string | ros.IResolvable;
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
    constructor(scope: ros.Construct, id: string, props: RosXTraceAppProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosXTraceApps`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapps
 */
export interface RosXTraceAppsProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ARMS::XTraceApps`.
 * @Note This class does not contain additional functions, so it is recommended to use the `XTraceApps` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-xtraceapps
 */
export declare class RosXTraceApps extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::XTraceApps";
    /**
     * @Attribute Pids: The list of Pids.
     */
    readonly attrPids: ros.IResolvable;
    /**
     * @Attribute XTraceApps: The list of Application Monitoring tasks.
     */
    readonly attrXTraceApps: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosXTraceAppsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
