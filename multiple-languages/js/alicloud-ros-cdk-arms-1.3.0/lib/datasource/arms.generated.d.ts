import * as ros from '@alicloud/ros-cdk-core';
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
